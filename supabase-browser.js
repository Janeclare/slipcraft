(function () {
  'use strict';

  // ─── CONFIG ────────────────────────────────────────────────────────────────
  const PROJECT_REF       = 'hgxtrafpxmugfxplvesv';
  const SUPABASE_URL      = 'https://hgxtrafpxmugfxplvesv.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhneHRyYWZweG11Z2Z4cGx2ZXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjgxNzYsImV4cCI6MjA4ODY0NDE3Nn0.c3K1zuW7YOIXd_Q7iFAnOvSMqjjcfuaDC-lHbAq4Yp8';
  const SESSION_KEY       = 'sb-' + PROJECT_REF + '-auth-token';
  const COMPAT_KEY        = 'slipcraft_session';

  // ─── SESSION HELPERS ───────────────────────────────────────────────────────
  function readSession() {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      const p = JSON.parse(raw);
      const s = p && (p.currentSession || p);
      if (s && s.access_token && s.user) return s;
    } catch (e) {}
    return null;
  }

  function setCompat(on) {
    try {
      if (on) localStorage.setItem(COMPAT_KEY, '1');
      else localStorage.removeItem(COMPAT_KEY);
    } catch (e) {}
  }

  function currentPath() {
    return window.location.pathname.replace(/\/+$/, '') || '/';
  }

  // ─── SUPABASE CLIENT (with cookie fallback for Edge/Safari) ───────────────
  let _client = null;
  function getClient() {
    if (_client) return _client;
    if (!window.supabase || !window.supabase.createClient) return null;
    _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        storage: {
          getItem(key) {
            try { return localStorage.getItem(key); } catch(e) {}
            const m = document.cookie.match(new RegExp('(?:^|; )' + key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + '=([^;]*)'));
            return m ? decodeURIComponent(m[1]) : null;
          },
          setItem(key, value) {
            try { localStorage.setItem(key, value); return; } catch(e) {}
            document.cookie = key + '=' + encodeURIComponent(value) + ';path=/;max-age=31536000;SameSite=Lax';
          },
          removeItem(key) {
            try { localStorage.removeItem(key); } catch(e) {}
            document.cookie = key + '=;path=/;max-age=0';
          }
        }
      }
    });
    return _client;
  }

  // ─── SYNC REST FETCH (runs before React mounts) ───────────────────────────
  function syncGet(path, token) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', SUPABASE_URL + '/rest/v1/' + path, false);
      xhr.setRequestHeader('apikey', SUPABASE_ANON_KEY);
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      xhr.send();
      if (xhr.status >= 200 && xhr.status < 300) return JSON.parse(xhr.responseText);
    } catch (e) {}
    return null;
  }

  // ─── BUILD USER OBJECT (matches exact shape from dashboard.html data-page) ─
  function buildUser(supaUser, profile, wallet) {
    const meta = supaUser.user_metadata || {};
    const p    = profile || {};
    const w    = wallet  || {};

    const displayName = p.full_name || meta.full_name || meta.name ||
      (supaUser.email ? supaUser.email.split('@')[0] : 'User');

    return {
      id:                      supaUser.id,
      name:                    displayName,
      email:                   supaUser.email || p.email || '',
      username:                p.username || meta.username || displayName,
      referrer_username:       p.referrer_username || meta.referrer_username || null,
      whatsapp_number:         p.whatsapp_number   || meta.whatsapp_number   || null,
      bank_name:               p.bank_name         || null,
      bank_account_number:     p.bank_account_number || null,
      point_main_balance:      typeof w.main_points    === 'number' ? w.main_points    : 0,
      point_holding_balance:   typeof w.holding_points === 'number' ? w.holding_points : 0,
      opay_balance:            typeof w.opay_balance   === 'number' ? w.opay_balance   : 0,
      kuda_balance:            typeof w.kuda_balance   === 'number' ? w.kuda_balance   : 0,
      naira_per_point:         1,
      payment_duration_minutes: 15,
      min_point_sales:         100,
      made_first_deposit:      p.made_first_deposit || 'no',
      last_seen:               p.last_seen          || null,
      listing:                 p.listing            || 'off',
      vendor:                  p.vendor || meta.vendor   || 'no',
      vendor_terms:            p.vendor_terms       || null,
      role:                    p.role   || meta.role     || 'user',
      manager:                 p.manager|| meta.manager  || 'no',
      status:                  p.status             || 'active',
      email_verified_at:       supaUser.email_confirmed_at || p.email_verified_at || null,
      pass_link_active:        p.pass_link_active   || 'yes',
      created_at:              supaUser.created_at  || p.created_at || new Date().toISOString(),
      updated_at:              supaUser.updated_at  || p.updated_at || new Date().toISOString(),
      payment_type:            p.payment_type       || 'bank-transfer',
      payment_link:            p.payment_link       || null,
      payment_link_1000:       p.payment_link_1000  || null,
      payment_link_1500:       p.payment_link_1500  || null,
      payment_link_2000:       p.payment_link_2000  || null,
      payment_link_5000:       p.payment_link_5000  || null,
      payment_link_10000:      p.payment_link_10000 || null,
      payment_link_15000:      p.payment_link_15000 || null,
      payment_link_25000:      p.payment_link_25000 || null,
      payment_link_50000:      p.payment_link_50000 || null,
      payment_link_100000:     p.payment_link_100000|| null,
    };
  }

  // ─── PATCH data-page BEFORE REACT RENDERS ─────────────────────────────────
  function patchPage() {
    const app = document.getElementById('app');
    if (!app) return;
    const raw = app.getAttribute('data-page');
    if (!raw) return;

    let page;
    try {
      // data-page uses HTML entities for quotes
      page = JSON.parse(raw.replace(/&quot;/g, '"').replace(/&#039;/g, "'").replace(/&amp;/g, '&'));
    } catch (e) { return; }

    if (!page.props) page.props = {};
    if (!page.props.auth) page.props.auth = {};

    // Strip exposed SMTP credentials
    if (page.props.platform) {
      ['flash_mail_config_host','flash_mail_config_port',
       'flash_mail_config_username','flash_mail_config_password',
       'flash_mail_config_encryption'].forEach(k => delete page.props.platform[k]);
    }

    const session  = readSession();
    const path     = currentPath();
    const authed   = !!(session && session.user && session.access_token);

    setCompat(authed);

    // Auth guards
    const PROTECTED = ['/dashboard','/services','/transactions','/vendors',
                       '/profile','/orders','/buy-point','/referral'];
    const isProtected = PROTECTED.some(r => path.startsWith(r));
    const isAuthPage  = /\/(login|register)(\.html)?$/.test(path);

    if (isProtected && !authed) { window.location.replace('/login.html'); return; }
    if (isAuthPage  && authed)  { window.location.replace('/dashboard.html'); return; }

    if (!authed) {
      // Not logged in — clear mock user so React shows logged-out navbar
      page.props.auth.user = null;
      page.props.auth.referred_users_count = null;
      writePage(app, page);
      return;
    }

    // Logged in — fetch real data
    const uid   = session.user.id;
    const token = session.access_token;

    const profileArr = syncGet('profiles?select=*&id=eq.' + uid, token);
    const profile    = Array.isArray(profileArr) && profileArr[0] ? profileArr[0] : null;

    const walletArr  = syncGet('wallets?select=main_points,holding_points,opay_balance,kuda_balance&user_id=eq.' + uid, token);
    const wallet     = Array.isArray(walletArr) && walletArr[0] ? walletArr[0] : null;

    page.props.auth.user = buildUser(session.user, profile, wallet);
    page.props.auth.referred_users_count = null;

    // Extra data per page component
    const comp = page.component || '';
    if (comp === 'Dashboard') {
      const ledger = syncGet('points_ledger?select=points,direction,created_at&user_id=eq.' + uid + '&order=created_at.desc&limit=5', token);
      if (Array.isArray(ledger)) page.props.recent_ledger = ledger;
    }
    if (comp === 'Transactions') {
      const tx = syncGet('transactions?select=*&user_id=eq.' + uid + '&order=created_at.desc&limit=100', token);
      if (Array.isArray(tx)) page.props.transactions = tx;
    }
    if (comp === 'Vendors') {
      const vendors = syncGet('vendors?select=*&order=created_at.desc', token);
      if (Array.isArray(vendors)) page.props.vendors = vendors;
    }

    writePage(app, page);
  }

  function writePage(app, page) {
    app.setAttribute('data-page', JSON.stringify(page).replace(/&/g,'&amp;').replace(/"/g,'&quot;'));
  }

  // ─── TOAST ─────────────────────────────────────────────────────────────────
  function toast(msg, isError) {
    const old = document.getElementById('sc-toast');
    if (old) old.remove();
    const el = document.createElement('div');
    el.id = 'sc-toast';
    el.textContent = msg;
    el.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);z-index:999999;' +
      'padding:12px 24px;border-radius:12px;font:600 14px/1.4 sans-serif;color:#fff;' +
      'background:' + (isError ? '#dc2626' : '#16a34a') + ';box-shadow:0 8px 32px rgba(0,0,0,.3);transition:opacity .3s';
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 350); }, 4000);
  }

  // ─── AUTH HANDLER ─────────────────────────────────────────────────────────
  async function doAuth(mode, fields) {
    const client = getClient();
    if (!client) return { ok: false, msg: 'Supabase not loaded. Please refresh.' };

    if (mode === 'login') {
      const { error } = await client.auth.signInWithPassword({
        email: (fields.email || '').trim(),
        password: fields.password || ''
      });
      if (error) return { ok: false, msg: error.message };
      setCompat(true);
      return { ok: true };
    }

    // Register
    const { data, error } = await client.auth.signUp({
      email: (fields.email || '').trim(),
      password: fields.password || '',
      options: {
        data: {
          full_name:         fields.full_name || fields.name || '',
          username:          fields.username  || '',
          whatsapp_number:   fields.whatsapp_number  || '',
          referrer_username: fields.referrer_username || ''
        }
      }
    });
    if (error) return { ok: false, msg: error.message };

    // If email confirm is disabled, session is returned immediately
    if (data && data.session) { setCompat(true); return { ok: true, autoLogin: true }; }
    return { ok: true, autoLogin: false };
  }

  // ─── FORM INTERCEPTOR ─────────────────────────────────────────────────────
  function installForms() {
    document.addEventListener('submit', async function (e) {
      const form = e.target;
      if (!form || form.tagName !== 'FORM') return;
      if (!form.querySelector('input[type=email], input[name=email]')) return;
      if (!form.querySelector('input[type=password], input[name=password]')) return;

      const path   = currentPath();
      const action = (form.getAttribute('action') || '').replace(/\/+$/, '');
      const isLogin    = path.includes('login')    || action.includes('login');
      const isRegister = path.includes('register') || action.includes('register');
      if (!isLogin && !isRegister) return;

      e.preventDefault();
      e.stopImmediatePropagation();

      const btn = form.querySelector('button[type=submit], input[type=submit]');
      const origText = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = isLogin ? 'Signing in…' : 'Creating account…'; }

      const fields = {};
      new FormData(form).forEach((v, k) => { if (!(k in fields)) fields[k] = v; });

      const result = await doAuth(isLogin ? 'login' : 'register', fields);

      if (btn) { btn.disabled = false; btn.textContent = origText; }

      if (!result.ok) { toast(result.msg, true); return; }

      if (isRegister) {
        if (result.autoLogin) {
          // Email confirm disabled — logged in automatically, go straight to dashboard
          toast('Account created! Welcome!', false);
          setTimeout(() => { window.location.href = '/dashboard.html'; }, 800);
        } else {
          // Email confirm enabled — send to login with message
          toast('Account created! Please sign in.', false);
          setTimeout(() => { window.location.href = '/login.html'; }, 1500);
        }
        return;
      }

      toast('Login successful!', false);
      setTimeout(() => { window.location.href = '/dashboard.html'; }, 600);
    }, true);
  }

  // ─── LOGOUT INTERCEPTOR ────────────────────────────────────────────────────
  function installLogout() {
    document.addEventListener('click', async function (e) {
      let el = e.target;
      while (el && el.tagName !== 'BODY') {
        const href = (el.getAttribute && el.getAttribute('href')) || '';
        const txt  = (el.textContent || '').trim().toLowerCase();
        if (href.includes('logout') || el.getAttribute('data-logout') === 'true' ||
            txt === 'logout' || txt === 'sign out' || txt === 'log out') {
          e.preventDefault();
          e.stopImmediatePropagation();
          const c = getClient();
          if (c) await c.auth.signOut();
          setCompat(false);
          window.location.href = '/index.html';
          return;
        }
        el = el.parentElement;
      }
    }, true);
  }

  // ─── AUTH STATE WATCHER ────────────────────────────────────────────────────
  function installAuthWatch() {
    const client = getClient();
    if (!client) return;
    client.auth.onAuthStateChange((_event, session) => {
      setCompat(!!(session && session.user));
      if (!session) {
        const p = currentPath();
        const PROTECTED = ['/dashboard','/services','/transactions','/vendors','/profile','/orders'];
        if (PROTECTED.some(r => p.startsWith(r))) window.location.replace('/login.html');
      }
    });
  }

  // ─── INIT ──────────────────────────────────────────────────────────────────
  patchPage();        // Runs sync before React — replaces fake data with real data
  installForms();     // Handles login/register form submit
  installLogout();    // Handles logout clicks
  installAuthWatch(); // Watches for session expiry

})();
