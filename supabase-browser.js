(function () {
  'use strict';

  // ─── CONFIG ────────────────────────────────────────────────────────────────
  const PROJECT_REF        = 'hgxtrafpxmugfxplvesv';
  const SUPABASE_URL       = 'https://hgxtrafpxmugfxplvesv.supabase.co';
  const SUPABASE_ANON_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhneHRyYWZweG11Z2Z4cGx2ZXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjgxNzYsImV4cCI6MjA4ODY0NDE3Nn0.c3K1zuW7YOIXd_Q7iFAnOvSMqjjcfuaDC-lHbAq4Yp8';
  const SESSION_STORAGE_KEY = 'sb-' + PROJECT_REF + '-auth-token';
  const COMPAT_SESSION_KEY  = 'slipcraft_session';

  const AUTH_PATHS = new Set(['/login', '/login.html', '/register', '/register.html']);

  const PROTECTED_ROOTS = new Set([
    '/dashboard', '/dashboard.html',
    '/transactions', '/transactions.html',
    '/vendors', '/vendors.html',
    '/buy-point', '/buy-point.html', '/buy-points',
    '/profile', '/profile.html', '/profile/edit',
    '/services', '/services.html',
    '/orders', '/orders.html',
    '/referral', '/services/referral.html',
    '/help', '/help.html',
    '/contact', '/contact.html'
  ]);

  // ─── ROUTE MAP: clean URL → static .html file ──────────────────────────────
  // FIX: Added ALL service sub-routes that were missing, causing dead clicks
  const ROUTE_MAP = new Map([
    ['/', '/index.html'],
    ['/dashboard', '/dashboard.html'],
    ['/about', '/about.html'],
    ['/transactions', '/transactions.html'],
    ['/vendors', '/vendors.html'],
    ['/services', '/services.html'],
    ['/profile', '/profile.html'],
    ['/profile/edit', '/profile.html'],
    ['/orders', '/orders.html'],
    ['/referral', '/services/referral.html'],
    ['/buy-point', '/buy-point.html'],
    ['/buy-points', '/buy-point.html'],
    ['/help', '/help.html'],
    ['/contact', '/contact.html'],
    ['/login', '/login.html'],
    ['/register', '/register.html'],

    // ── Service pages that were missing (causing dead clicks) ──
    ['/services/referral', '/services/referral.html'],
    ['/services/faker', '/services/faker.html'],
    ['/services/faker/generate', '/services/faker/generate.html'],
    ['/services/opay', '/services/opay.html'],
    ['/services/opay/bank-transfer', '/services/opay/bank-transfer.html'],
    ['/services/pass-clone', '/services/pass-clone.html'],
    ['/services/pass-clone/link-status', '/services/pass-clone/link-status.html'],
    ['/services/support-page', '/services/support-page.html'],
    ['/services/crypto-receipt', '/services/crypto-receipt.html'],
    ['/services/crypto-receipt/binance', '/services/crypto-receipt/binance.html'],
    ['/services/crypto-receipt/binance/store', '/services/crypto-receipt/binance/store.html'],
    ['/services/crypto-receipt/bybit', '/services/crypto-receipt/bybit.html'],
    ['/services/crypto-receipt/bybit/store', '/services/crypto-receipt/bybit/store.html'],
    ['/services/crypto-receipt/cashapp', '/services/crypto-receipt/cashapp.html'],
    ['/services/crypto-receipt/paypal', '/services/crypto-receipt/paypal.html'],
    ['/services/scripts', '/services/scripts/my-purchases.html'],
    ['/services/scripts/my-purchases', '/services/scripts/my-purchases.html'],

    // API stubs (static JSON responses)
    ['/api/banks/ng', '/api/banks/ng.html'],
    ['/api/accounts/resolve', '/api/accounts/resolve.html'],
  ]);

  // ─── HELPERS ───────────────────────────────────────────────────────────────
  function normalizePath(p) {
    p = p || '/';
    if (!p.startsWith('/')) p = '/' + p;
    if (p.length > 1) p = p.replace(/\/+$/, '');
    return p;
  }

  function currentPath() {
    return normalizePath(window.location.pathname);
  }

  function isProtectedPath(p) {
    p = normalizePath(p);
    if (PROTECTED_ROOTS.has(p)) return true;
    if (p.startsWith('/services/')) return true;
    if (p.startsWith('/order/')) return true;
    return false;
  }

  function htmlEncode(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function setCompatSession(on) {
    try {
      if (on) window.localStorage.setItem(COMPAT_SESSION_KEY, '1');
      else     window.localStorage.removeItem(COMPAT_SESSION_KEY);
    } catch (e) {}
  }

  // ─── SESSION / SUPABASE CLIENT ─────────────────────────────────────────────
  function readStoredSession() {
    try {
      const raw = window.localStorage.getItem(SESSION_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.currentSession) return parsed.currentSession;
      if (parsed && parsed.access_token && parsed.user) return parsed;
    } catch (e) {}
    return null;
  }

  let _client = null;
  function getClient() {
    if (_client) return _client;
    if (!window.supabase || typeof window.supabase.createClient !== 'function') return null;
    _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });
    return _client;
  }

  // ─── SYNC XHR HELPER (used before React renders) ──────────────────────────
  function syncGet(path, token) {
    if (!token) return null;
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', SUPABASE_URL + '/rest/v1/' + path, false); // synchronous
      xhr.setRequestHeader('apikey', SUPABASE_ANON_KEY);
      xhr.setRequestHeader('Authorization', 'Bearer ' + token);
      xhr.send();
      if (xhr.status >= 200 && xhr.status < 300 && xhr.responseText) {
        return JSON.parse(xhr.responseText);
      }
    } catch (e) {}
    return null;
  }

  // ─── BUILD FULL USER OBJECT (FIX: now maps ALL fields the React app expects) ─
  function buildUserObject(supabaseUser, walletRow, existingUser) {
    const meta = (supabaseUser && supabaseUser.user_metadata) || {};
    const base = existingUser || {};

    // Derive display name from metadata or email
    const displayName = meta.full_name || meta.name || meta.username ||
      (supabaseUser.email ? supabaseUser.email.split('@')[0] : 'User');

    return Object.assign({}, base, {
      // Core identity — from real Supabase session
      id:                     supabaseUser.id,
      name:                   displayName,
      email:                  supabaseUser.email || base.email || '',
      username:               meta.username || displayName,
      full_name:              meta.full_name || displayName,
      whatsapp_number:        meta.whatsapp_number || base.whatsapp_number || null,
      referrer_username:      meta.referrer_username || base.referrer_username || null,
      bank_name:              meta.bank_name || base.bank_name || null,
      bank_account_number:    meta.bank_account_number || base.bank_account_number || null,

      // Wallet — from Supabase wallets table
      point_main_balance:    (walletRow && typeof walletRow.main_points === 'number') ? walletRow.main_points : 0,
      point_holding_balance: (walletRow && typeof walletRow.holding_points === 'number') ? walletRow.holding_points : 0,

      // FIX: Zero out mock balances from static HTML — real balances come from wallet table
      opay_balance:   0,
      kuda_balance:   0,
      palmpay_balance: 0,

      // Platform config — keep from static template (these are platform-level settings)
      naira_per_point:         base.naira_per_point || 1,
      payment_duration_minutes: base.payment_duration_minutes || 15,
      min_point_sales:         base.min_point_sales || 100,

      // Account flags
      made_first_deposit: base.made_first_deposit || 'no',
      last_seen:          base.last_seen || null,
      listing:            base.listing || 'off',
      vendor:             meta.vendor || base.vendor || 'no',
      vendor_terms:       base.vendor_terms || null,
      role:               meta.role || base.role || 'user',
      manager:            meta.manager || base.manager || 'no',
      status:             base.status || 'active',
      email_verified_at:  supabaseUser.email_confirmed_at || base.email_verified_at || null,
      pass_link_active:   base.pass_link_active || 'yes',

      // Timestamps from Supabase
      created_at: supabaseUser.created_at || base.created_at || new Date().toISOString(),
      updated_at: supabaseUser.updated_at || base.updated_at || new Date().toISOString(),

      // Payment links — keep from template (null by default)
      payment_type:          base.payment_type || 'bank-transfer',
      payment_link:          base.payment_link || null,
      payment_link_1000:     base.payment_link_1000 || null,
      payment_link_1500:     base.payment_link_1500 || null,
      payment_link_2000:     base.payment_link_2000 || null,
      payment_link_5000:     base.payment_link_5000 || null,
      payment_link_10000:    base.payment_link_10000 || null,
      payment_link_15000:    base.payment_link_15000 || null,
      payment_link_25000:    base.payment_link_25000 || null,
      payment_link_50000:    base.payment_link_50000 || null,
      payment_link_100000:   base.payment_link_100000 || null,
    });
  }

  // ─── PATCH data-page WITH REAL SUPABASE DATA ──────────────────────────────
  // FIX: Removes SMTP password and other sensitive fields from the page data
  function scrubSensitiveData(page) {
    try {
      if (page.props && page.props.platform) {
        // Remove exposed mail credentials
        delete page.props.platform.flash_mail_config_host;
        delete page.props.platform.flash_mail_config_port;
        delete page.props.platform.flash_mail_config_username;
        delete page.props.platform.flash_mail_config_password;
        delete page.props.platform.flash_mail_config_encryption;
      }
    } catch (e) {}
    return page;
  }

  function patchPageData() {
    const app = document.getElementById('app');
    if (!app) return;
    const raw = app.getAttribute('data-page');
    if (!raw) return;

    let page;
    try {
      page = JSON.parse(raw);
    } catch (e) {
      return;
    }

    if (!page.props) page.props = {};
    if (!page.props.auth) page.props.auth = {};
    if (!page.props.errors) page.props.errors = {};

    const session = readStoredSession();
    const path    = currentPath();
    const isAuthed = !!(session && session.user && session.access_token);

    setCompatSession(isAuthed);

    // Auth guard
    if (isProtectedPath(path) && !isAuthed) {
      window.location.replace('/login.html');
      return;
    }
    if (AUTH_PATHS.has(path) && isAuthed) {
      window.location.replace('/dashboard.html');
      return;
    }

    if (!isAuthed) {
      page.props.auth.user = null;
      page = scrubSensitiveData(page);
      app.setAttribute('data-page', htmlEncode(JSON.stringify(page)));
      return;
    }

    // Fetch real profile from profiles table
    let profileRow = null;
    const profileData = syncGet(
      'profiles?select=*&id=eq.' + encodeURIComponent(session.user.id),
      session.access_token
    );
    if (Array.isArray(profileData) && profileData.length) profileRow = profileData[0];

    // Fetch real wallet balance
    let walletRow = null;
    const walletData = syncGet(
      'wallets?select=main_points,holding_points&user_id=eq.' + encodeURIComponent(session.user.id),
      session.access_token
    );
    if (Array.isArray(walletData) && walletData.length) walletRow = walletData[0];

    // Patch auth.user with REAL data from Supabase
    const existingUser = Object.assign({}, page.props.auth.user || {}, profileRow || {});
    page.props.auth.user = buildUserObject(session.user, walletRow, existingUser);

    // Fetch page-specific data
    const component = page.component || '';

    if (component === 'Transactions') {
      const tx = syncGet('transactions?select=*&order=created_at.desc&limit=100', session.access_token);
      if (Array.isArray(tx)) page.props.transactions = tx;
    }

    if (component === 'Vendors') {
      const vendors = syncGet('vendors?select=*&order=created_at.desc', session.access_token);
      if (Array.isArray(vendors)) page.props.vendors = vendors;
    }

    if (component === 'Dashboard') {
      const ledger = syncGet(
        'points_ledger?select=points,direction,created_at&user_id=eq.' + encodeURIComponent(session.user.id) + '&order=created_at.desc&limit=5',
        session.access_token
      );
      if (Array.isArray(ledger)) page.props.recent_ledger = ledger;
    }

    // Remove sensitive platform fields
    page = scrubSensitiveData(page);

    app.setAttribute('data-page', htmlEncode(JSON.stringify(page)));
  }

  // ─── ROUTE NAVIGATION ──────────────────────────────────────────────────────
  function resolveRoute(rawPath) {
    const p = normalizePath(rawPath);

    // Already an .html file — navigate as-is
    if (p.toLowerCase().endsWith('.html')) return null;

    // Direct map lookup
    if (ROUTE_MAP.has(p)) return ROUTE_MAP.get(p);

    // Prefix fallbacks
    if (p.startsWith('/transactions')) return '/transactions.html';
    if (p.startsWith('/vendors'))      return '/vendors.html';
    if (p.startsWith('/profile'))      return '/profile.html';
    if (p.startsWith('/orders'))       return '/orders.html';
    if (p.startsWith('/buy-point'))    return '/buy-point.html';
    if (p.startsWith('/dashboard'))    return '/dashboard.html';
    if (p.startsWith('/help'))         return '/help.html';
    if (p.startsWith('/contact'))      return '/contact.html';

    // Service sub-routes: map /services/xxx to /services/xxx.html
    if (p.startsWith('/services/')) return p + '.html';

    // Order sub-routes
    if (p.startsWith('/order/')) return p + '.html';

    return null;
  }

  function navigateTo(urlLike) {
    try {
      const url = new URL(
        typeof urlLike === 'string' ? urlLike : (urlLike && (urlLike.href || urlLike.url || String(urlLike))),
        window.location.href
      );

      // Only handle internal URLs
      const isInternal = url.origin === window.location.origin ||
        /(^|\.)slipcraft\.net$/i.test(url.hostname);
      if (!isInternal) return null;

      const mapped = resolveRoute(url.pathname);
      if (!mapped) return null;

      return mapped + (url.search || '') + (url.hash || '');
    } catch (e) {
      return null;
    }
  }

  // ─── AUTH: login / register / logout ──────────────────────────────────────
  function showToast(message, isError) {
    const existing = document.getElementById('sc-toast');
    if (existing) existing.remove();

    const box = document.createElement('div');
    box.id = 'sc-toast';
    box.textContent = message;
    box.style.cssText = [
      'position:fixed', 'top:20px', 'left:50%', 'transform:translateX(-50%)',
      'z-index:999999', 'max-width:90vw', 'padding:12px 20px', 'border-radius:12px',
      'font:600 14px/1.5 sans-serif', 'color:#fff',
      'background:' + (isError ? '#dc2626' : '#16a34a'),
      'box-shadow:0 8px 24px rgba(0,0,0,.25)', 'transition:opacity .3s'
    ].join(';');
    document.body.appendChild(box);
    setTimeout(() => {
      box.style.opacity = '0';
      setTimeout(() => box.remove(), 300);
    }, 4500);
  }

  function formToObject(form) {
    const obj = {};
    new FormData(form).forEach((v, k) => { if (!(k in obj)) obj[k] = v; });
    return obj;
  }

  async function handleAuth(mode, payload) {
    const client = getClient();
    if (!client) return { ok: false, message: 'Supabase client not loaded.' };

    if (mode === 'login') {
      const { data, error } = await client.auth.signInWithPassword({
        email: String(payload.email || '').trim(),
        password: String(payload.password || '')
      });
      if (error) return { ok: false, message: error.message };
      setCompatSession(true);
      return { ok: true, session: data.session, user: data.user };
    }

    // Register
    const { data, error } = await client.auth.signUp({
      email: String(payload.email || '').trim(),
      password: String(payload.password || ''),
      options: {
        data: {
          full_name:          payload.full_name || payload.name || '',
          username:           payload.username || '',
          referrer_username:  payload.referrer_username || '',
          whatsapp_number:    payload.whatsapp_number || ''
        }
      }
    });
    if (error) return { ok: false, message: error.message };

    // Auto-login after signup (requires email confirmation disabled in Supabase)
    if (data.session) {
      setCompatSession(true);
      return { ok: true, session: data.session, user: data.user };
    }

    // Try immediate sign-in if session wasn't returned
    const { data: loginData, error: loginError } = await client.auth.signInWithPassword({
      email: String(payload.email || '').trim(),
      password: String(payload.password || '')
    });
    if (loginError) return {
      ok: false,
      message: 'Account created. Please log in. (If login fails, disable email confirmation in Supabase Auth settings.)'
    };
    setCompatSession(true);
    return { ok: true, session: loginData.session, user: loginData.user };
  }

  // ─── FETCH INTERCEPTOR ─────────────────────────────────────────────────────
  // FIX: Returns null for unhandled routes so real fetch is called (prevents dead API calls)
  function parseBody(body, headers) {
    if (!body) return {};
    const ct = (headers && (headers['content-type'] || headers['Content-Type'])) || '';
    if (body instanceof FormData) { const o={}; body.forEach((v,k)=>{if(!(k in o))o[k]=v;}); return o; }
    if (body instanceof URLSearchParams) { const o={}; body.forEach((v,k)=>{if(!(k in o))o[k]=v;}); return o; }
    if (typeof body === 'string') {
      if (ct.includes('application/json')) { try { return JSON.parse(body); } catch(e){} }
      const o={}; new URLSearchParams(body).forEach((v,k)=>{if(!(k in o))o[k]=v;}); return o;
    }
    return typeof body === 'object' ? body : {};
  }

  function makeJson(status, payload) {
    return new Response(JSON.stringify(payload), {
      status,
      headers: { 'Content-Type': 'application/json; charset=utf-8' }
    });
  }

  async function interceptFetch(input, init) {
    const href = typeof input === 'string' ? input : (input && input.url) || '';
    const url  = new URL(href, window.location.href);
    const path = normalizePath(url.pathname);
    const method = ((init && init.method) || (input && input.method) || 'GET').toUpperCase();
    const headers = (() => {
      const h = (init && init.headers) || (input && input.headers);
      if (!h) return {};
      if (h instanceof Headers) { const o={}; h.forEach((v,k)=>{o[k]=v;}); return o; }
      return Object.assign({}, h);
    })();
    const payload = parseBody(init && init.body, headers);

    // Login / Register POST
    if ((path === '/login' || path === '/register') && method === 'POST') {
      const result = await handleAuth(path === '/login' ? 'login' : 'register', payload);
      if (!result.ok) return makeJson(422, { errors: { email: result.message } });
      window.location.href = '/dashboard.html';
      return new Response('', { status: 303, headers: { Location: '/dashboard.html' } });
    }

    // Logout POST
    if (path === '/logout' && method === 'POST') {
      const client = getClient();
      if (client) await client.auth.signOut();
      setCompatSession(false);
      window.location.href = '/index.html';
      return new Response('', { status: 303, headers: { Location: '/index.html' } });
    }

    // API: GET vendors
    if (path === '/api/vendors' && method === 'GET') {
      const client = getClient();
      if (!client) return makeJson(500, { error: 'Client not ready' });
      const { data, error } = await client.from('vendors').select('*').order('created_at', { ascending: false });
      if (error) return makeJson(500, { error: error.message });
      return makeJson(200, { data: data || [] });
    }

    // API: POST vendor
    if (path === '/api/vendors' && method === 'POST') {
      const client = getClient();
      if (!client) return makeJson(500, { error: 'Client not ready' });
      const { data, error } = await client.from('vendors')
        .insert({ display_name: payload.display_name || 'Vendor', application_fee_ngn: 0, status: 'pending' })
        .select().single();
      if (error) return makeJson(500, { error: error.message });
      return makeJson(201, { data });
    }

    // API: GET transactions
    if (path === '/api/transactions' && method === 'GET') {
      const client = getClient();
      if (!client) return makeJson(500, { error: 'Client not ready' });
      const { data, error } = await client.from('transactions').select('*').order('created_at', { ascending: false });
      if (error) return makeJson(500, { error: error.message });
      return makeJson(200, { data: data || [] });
    }

    // API: transfer points
    if (path === '/api/points/transfer' && method === 'POST') {
      const client = getClient();
      if (!client) return makeJson(500, { error: 'Client not ready' });
      const { error } = await client.rpc('transfer_points', {
        to_user: payload.to_user,
        points:  Number(payload.points || 0),
        reason:  payload.reason || null
      });
      if (error) return makeJson(500, { error: error.message });
      return makeJson(200, { ok: true });
    }

    // Unhandled — let real fetch proceed
    return null;
  }

  function installFetchInterceptor() {
    if (typeof window.fetch !== 'function') return;
    const orig = window.fetch.bind(window);
    window.fetch = function (input, init) {
      return interceptFetch(input, init).then(res => res || orig(input, init));
    };
  }

  // ─── FORM INTERCEPTOR (login/register forms) ───────────────────────────────
  function installFormInterceptor() {
    document.addEventListener('submit', async function (e) {
      const form = e.target;
      if (!form || form.tagName !== 'FORM') return;

      const hasPassword = !!form.querySelector('input[type="password"], input[name="password"]');
      const hasEmail    = !!form.querySelector('input[type="email"], input[name="email"]');
      if (!hasPassword || !hasEmail) return;

      const p    = currentPath();
      const act  = normalizePath(form.getAttribute('action') || p);
      const isLogin    = act === '/login' || act === '/login.html' || p === '/login' || p === '/login.html';
      const isRegister = act === '/register' || act === '/register.html' || p === '/register' || p === '/register.html';
      if (!isLogin && !isRegister) return;

      e.preventDefault();
      const btn = form.querySelector('button[type="submit"], input[type="submit"]');
      if (btn) btn.disabled = true;

      const result = await handleAuth(isLogin ? 'login' : 'register', formToObject(form));
      if (btn) btn.disabled = false;

      if (!result.ok) { showToast(result.message, true); return; }
      showToast(isLogin ? 'Login successful!' : 'Account created!', false);
      setTimeout(() => { window.location.href = '/dashboard.html'; }, 600);
    }, true);
  }

  // ─── LOGOUT INTERCEPTOR ────────────────────────────────────────────────────
  function installLogoutInterceptor() {
    document.addEventListener('click', async function (e) {
      let el = e.target;
      while (el && el !== document.documentElement) {
        if (el.tagName === 'A' || el.tagName === 'BUTTON') break;
        el = el.parentElement;
      }
      if (!el) return;

      const href = el.getAttribute && el.getAttribute('href');
      const formAction = el.form && el.form.getAttribute && el.form.getAttribute('action');
      const path = normalizePath(href || formAction || '');
      const text = (el.textContent || '').trim().toLowerCase();
      const isLogout = path === '/logout' ||
        el.getAttribute('data-logout') === 'true' ||
        text === 'logout' || text === 'sign out' || text === 'log out';
      if (!isLogout) return;

      e.preventDefault();
      const client = getClient();
      if (client) await client.auth.signOut();
      setCompatSession(false);
      window.location.href = '/index.html';
    }, true);
  }

  // ─── CLICK INTERCEPTOR (SPA navigation) ────────────────────────────────────
  // Runs in CAPTURE phase so it fires BEFORE Inertia's click handler.
  // For links we can resolve → stopImmediatePropagation + full page navigate.
  // For links we can't resolve → do nothing (let Inertia/browser handle).
  function installLinkInterceptor() {
    document.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      let el = e.target;
      while (el && el !== document.documentElement) {
        if (el.tagName === 'A') break;
        el = el.parentElement;
      }
      if (!el || el.tagName !== 'A') return;

      const rawHref = el.getAttribute('href');
      if (!rawHref || rawHref.startsWith('#')) return;
      if (/^(mailto:|tel:|javascript:)/i.test(rawHref)) return;
      if (el.hasAttribute('download')) return;
      if (el.target && el.target !== '_self') return;

      const dest = navigateTo(el.href);
      if (!dest) return; // Not our route — let Inertia handle it normally

      // We matched a route: block Inertia from seeing this click entirely
      e.preventDefault();
      e.stopImmediatePropagation(); // prevents Inertia overlay rendering
      window.location.assign(dest); // full page navigation to .html file
    }, true); // ← CAPTURE phase: runs before Inertia's handlers
  }

  // ─── INERTIA:BEFORE INTERCEPTOR ────────────────────────────────────────────
  function installInertiaInterceptor() {
    document.addEventListener('inertia:before', function (e) {
      try {
        if (!e || typeof e.preventDefault !== 'function') return;
        const detail = e.detail || {};
        const visit  = detail.visit || {};
        const method = String(visit.method || detail.method || 'get').toLowerCase();
        if (method !== 'get' && method !== 'head') return;

        const dest = navigateTo(visit.url);
        if (!dest) return;

        e.preventDefault();
        window.location.assign(dest);
      } catch (_) {}
    }, true);
  }

  // ─── AUTH STATE SYNC ───────────────────────────────────────────────────────
  function installAuthStateSync() {
    const client = getClient();
    if (!client) return;
    client.auth.onAuthStateChange(function (_event, session) {
      setCompatSession(!!(session && session.user));
      const p = currentPath();
      if (!session && isProtectedPath(p)) {
        window.location.replace('/login.html');
        return;
      }
      if (session && AUTH_PATHS.has(p)) {
        window.location.replace('/dashboard.html');
      }
    });
  }

  // ─── INIT ──────────────────────────────────────────────────────────────────
  patchPageData();
  installFetchInterceptor();
  installFormInterceptor();
  installLogoutInterceptor();
  installLinkInterceptor();
  installInertiaInterceptor();
  installAuthStateSync();

})();
