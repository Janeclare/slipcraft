-- SlipCraft Supabase schema (minimal core)
-- Run this in Supabase SQL Editor.

-- Extensions
create extension if not exists "uuid-ossp";

-- Profiles: 1 row per auth user
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique,
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Wallets: point balances
create table if not exists public.wallets (
  user_id uuid primary key references auth.users(id) on delete cascade,
  main_points bigint not null default 0,
  holding_points bigint not null default 0,
  updated_at timestamptz not null default now()
);

-- Points ledger: audit trail
create table if not exists public.points_ledger (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  direction text not null check (direction in ('credit','debit')),
  points bigint not null check (points > 0),
  reason text,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists points_ledger_user_id_idx on public.points_ledger(user_id);

-- Vendors
create table if not exists public.vendors (
  id bigserial primary key,
  owner_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null,
  status text not null default 'pending' check (status in ('pending','active','rejected','suspended')),
  application_fee_ngn bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists vendors_status_idx on public.vendors(status);
create index if not exists vendors_owner_id_idx on public.vendors(owner_id);

-- Transactions (buy points / transfers / etc.)
create table if not exists public.transactions (
  id bigserial primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null,
  status text not null default 'pending',
  points bigint,
  amount_ngn bigint,
  currency text not null default 'NGN',
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists transactions_user_id_idx on public.transactions(user_id);
create index if not exists transactions_created_at_idx on public.transactions(created_at desc);

-- Updated_at helper
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists vendors_set_updated_at on public.vendors;
create trigger vendors_set_updated_at before update on public.vendors
for each row execute function public.set_updated_at();

-- Auto-create profile + wallet on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name)
  values (new.id, null, coalesce(new.raw_user_meta_data->>'full_name', new.email))
  on conflict (id) do nothing;

  insert into public.wallets (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- RPC: transfer points between users
create or replace function public.transfer_points(to_user uuid, points bigint, reason text default null)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  from_user uuid;
  from_balance bigint;
  to_balance bigint;
begin
  if points <= 0 then
    raise exception 'points must be > 0';
  end if;

  from_user := auth.uid();
  if from_user is null then
    raise exception 'not authenticated';
  end if;

  select main_points into from_balance from public.wallets where user_id = from_user for update;
  if from_balance is null then
    raise exception 'wallet not found';
  end if;
  if from_balance < points then
    raise exception 'insufficient points';
  end if;

  update public.wallets
    set main_points = main_points - points,
        updated_at = now()
  where user_id = from_user;

  update public.wallets
    set main_points = main_points + points,
        updated_at = now()
  where user_id = to_user;

  insert into public.points_ledger(user_id, direction, points, reason, meta)
  values
    (from_user, 'debit', points, reason, jsonb_build_object('to_user', to_user)),
    (to_user,   'credit', points, reason, jsonb_build_object('from_user', from_user));
end;
$$;

-- RLS
alter table public.profiles enable row level security;
alter table public.wallets enable row level security;
alter table public.points_ledger enable row level security;
alter table public.vendors enable row level security;
alter table public.transactions enable row level security;

-- Profiles policies
drop policy if exists "profiles select own" on public.profiles;
create policy "profiles select own" on public.profiles
for select using (id = auth.uid());

drop policy if exists "profiles update own" on public.profiles;
create policy "profiles update own" on public.profiles
for update using (id = auth.uid());

-- Wallet policies
drop policy if exists "wallets select own" on public.wallets;
create policy "wallets select own" on public.wallets
for select using (user_id = auth.uid());

-- Ledger policies
drop policy if exists "ledger select own" on public.points_ledger;
create policy "ledger select own" on public.points_ledger
for select using (user_id = auth.uid());

-- Vendors policies
drop policy if exists "vendors public active" on public.vendors;
create policy "vendors public active" on public.vendors
for select using (status = 'active' or owner_id = auth.uid());

drop policy if exists "vendors insert own" on public.vendors;
create policy "vendors insert own" on public.vendors
for insert with check (owner_id = auth.uid());

-- Transactions policies
drop policy if exists "transactions select own" on public.transactions;
create policy "transactions select own" on public.transactions
for select using (user_id = auth.uid());

drop policy if exists "transactions insert own" on public.transactions;
create policy "transactions insert own" on public.transactions
for insert with check (user_id = auth.uid());
