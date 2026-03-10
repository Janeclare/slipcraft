(function () {
  'use strict';

  const PROJECT_REF = 'hgxtrafpxmugfxplvesv';
  const SUPABASE_URL = 'https://hgxtrafpxmugfxplvesv.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhneHRyYWZweG11Z2Z4cGx2ZXN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjgxNzYsImV4cCI6MjA4ODY0NDE3Nn0.c3K1zuW7YOIXd_Q7iFAnOvSMqjjcfuaDC-lHbAq4Yp8';
  const SESSION_STORAGE_KEY = 'sb-' + PROJECT_REF + '-auth-token';
  const COMPAT_SESSION_KEY = 'slipcraft_session';
  const AUTH_PATHS = new Set(['/login', '/login.html', '/register', '/register.html']);
  const PROTECTED_ROOTS = new Set([
    '/dashboard', '/dashboard.html',
    '/transactions', '/transactions.html',
    '/vendors', '/vendors.html',
    '/buy-point', '/buy-point.html',
    '/buy-points',
    '/profile', '/profile.html',
    '/profile/edit',
    '/services', '/services.html',
    '/orders', '/orders.html',
    '/referral', '/services/referral.html',
    '/help', '/help.html',
    '/contact', '/contact.html'
  ]);

  function normalizePathname(pathname) {
    let p = pathname || '/';
    if (!p.startsWith('/')) p = '/' + p;
    if (p.length > 1) p = p.replace(/\/+$/, '');
    return p;
  }

  function currentPath() {
    return normalizePathname(window.location.pathname || '/');
  }

  function isProtectedPath(path) {
    const p = normalizePathname(path);
    if (PROTECTED_ROOTS.has(p)) return true;
    if (p.startsWith('/services/')) return true;
    if (p.startsWith('/order/')) return true;
    return false;
  }

  function htmlEncode(value) {
    const div = document.createElement('div');
    div.textContent = value;
    return div.innerHTML;
  }

  function readStoredSession() {
    try {
      const raw = window.localStorage.getItem(SESSION_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (parsed && parsed.currentSession) return parsed.currentSession;
      if (parsed && parsed.access_token && parsed.user) return parsed;
    } catch (e) {
      // ignore
    }
    return null;
  }

  function setCompatSession(enabled) {
    try {
      if (enabled) {
        window.localStorage.setItem(COMPAT_SESSION_KEY, '1');
      } else {
        window.localStorage.removeItem(COMPAT_SESSION_KEY);
      }
    } catch (e) {
      // ignore
    }
  }

  function toDisplayUser(user, walletRow) {
    const meta = (user && user.user_metadata) || {};
    const displayName = meta.full_name || meta.username || (user.email ? user.email.split('@')[0] : 'User');
    return {
      id: user.id,
      name: displayName,
      email: user.email || 'user@example.com',
      username: meta.username || displayName,
      whatsapp_number: meta.whatsapp_number || null,
      referrer_username: meta.referrer_username || null,
      point_main_balance: walletRow && typeof walletRow.main_points === 'number' ? walletRow.main_points : 0,
      point_holding_balance: walletRow && typeof walletRow.holding_points === 'number' ? walletRow.holding_points : 0,
      // Clear out the hardcoded mock balances that come from the static HTML
      opay_balance: 0,
      kuda_balance: 0,
      palmpay_balance: 0,
      role: 'user',
      vendor: 'no',
      manager: 'no',
      status: 'active'
    };
  }

  function syncSupabaseGet(path, accessToken) {
    if (!accessToken) return null;
    try {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', SUPABASE_URL + '/rest/v1/' + path, false);
      xhr.setRequestHeader('apikey', SUPABASE_ANON_KEY);
      xhr.setRequestHeader('Authorization', 'Bearer ' + accessToken);
      xhr.send();
      if (xhr.status >= 200 && xhr.status < 300 && xhr.responseText) {
        return JSON.parse(xhr.responseText);
      }
    } catch (e) {
      // ignore
    }
    return null;
  }

  function patchInitialDataPage() {
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
    const path = currentPath();
    const isAuthed = !!(session && session.user && session.access_token);
    setCompatSession(isAuthed);

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
      app.setAttribute('data-page', htmlEncode(JSON.stringify(page)));
      return;
    }

    let walletRow = null;
    const walletRows = syncSupabaseGet('wallets?select=main_points,holding_points&user_id=eq.' + encodeURIComponent(session.user.id), session.access_token);
    if (Array.isArray(walletRows) && walletRows.length) walletRow = walletRows[0];

    page.props.auth.user = Object.assign({}, page.props.auth.user || {}, toDisplayUser(session.user, walletRow));

    if (page.component === 'Transactions') {
      const tx = syncSupabaseGet('transactions?select=*&order=created_at.desc', session.access_token);
      if (Array.isArray(tx)) page.props.transactions = tx;
    }

    if (page.component === 'Vendors') {
      const vendors = syncSupabaseGet('vendors?select=*&order=created_at.desc', session.access_token);
      if (Array.isArray(vendors)) page.props.vendors = vendors;
    }

    app.setAttribute('data-page', htmlEncode(JSON.stringify(page)));
  }

  function showMessage(message, isError) {
    const existing = document.getElementById('supabase-browser-message');
    if (existing) existing.remove();
    const box = document.createElement('div');
    box.id = 'supabase-browser-message';
    box.textContent = message;
    box.style.cssText = 'position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:99999;max-width:90vw;padding:12px 16px;border-radius:10px;font:600 14px/1.4 sans-serif;color:#fff;background:' + (isError ? '#dc2626' : '#16a34a') + ';box-shadow:0 10px 30px rgba(0,0,0,.2)';
    document.body.appendChild(box);
    window.setTimeout(() => { if (box.parentNode) box.parentNode.removeChild(box); }, 5000);
  }

  function formToObject(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => {
      if (!(key in obj)) obj[key] = value;
    });
    return obj;
  }

  function parseBody(body, headers) {
    if (!body) return {};
    if (body instanceof FormData) {
      const obj = {};
      body.forEach((value, key) => { if (!(key in obj)) obj[key] = value; });
      return obj;
    }
    if (body instanceof URLSearchParams) {
      const obj = {};
      body.forEach((value, key) => { if (!(key in obj)) obj[key] = value; });
      return obj;
    }
    if (typeof body === 'string') {
      const contentType = headers && (headers['content-type'] || headers['Content-Type']) || '';
      if (contentType.indexOf('application/json') >= 0) {
        try { return JSON.parse(body); } catch (e) { return {}; }
      }
      const params = new URLSearchParams(body);
      const obj = {};
      params.forEach((value, key) => { if (!(key in obj)) obj[key] = value; });
      return obj;
    }
    if (typeof body === 'object') return body;
    return {};
  }

  function headersToObject(headers) {
    if (!headers) return {};
    if (headers instanceof Headers) {
      const obj = {};
      headers.forEach((v, k) => { obj[k] = v; });
      return obj;
    }
    if (Array.isArray(headers)) {
      const obj = {};
      headers.forEach((entry) => { if (entry && entry.length >= 2) obj[entry[0]] = entry[1]; });
      return obj;
    }
    return Object.assign({}, headers);
  }

  function createJsonResponse(status, payload, extraHeaders) {
    return new Response(JSON.stringify(payload), {
      status: status,
      headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, extraHeaders || {})
    });
  }

  function createRedirectResponse(location) {
    return new Response('', {
      status: 303,
      headers: {
        'X-Inertia-Location': location,
        'Location': location
      }
    });
  }

  let supabaseClient = null;
  function getClient() {
    if (supabaseClient) return supabaseClient;
    if (!window.supabase || typeof window.supabase.createClient !== 'function') return null;
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    return supabaseClient;
  }

  async function handleAuthRequest(mode, payload) {
    const client = getClient();
    if (!client) return { ok: false, message: 'Supabase client failed to load.' };

    if (mode === 'login') {
      const result = await client.auth.signInWithPassword({
        email: String(payload.email || '').trim(),
        password: String(payload.password || '')
      });
      if (result.error) return { ok: false, message: result.error.message };
      setCompatSession(true);
      return { ok: true, session: result.data.session, user: result.data.user };
    }

    const signUpResult = await client.auth.signUp({
      email: String(payload.email || '').trim(),
      password: String(payload.password || ''),
      options: {
        data: {
          full_name: payload.full_name || payload.name || '',
          username: payload.username || '',
          referrer_username: payload.referrer_username || '',
          whatsapp_number: payload.whatsapp_number || ''
        }
      }
    });
    if (signUpResult.error) return { ok: false, message: signUpResult.error.message };
    if (signUpResult.data && signUpResult.data.session) {
      setCompatSession(true);
      return { ok: true, session: signUpResult.data.session, user: signUpResult.data.user };
    }

    const loginAfterSignup = await client.auth.signInWithPassword({
      email: String(payload.email || '').trim(),
      password: String(payload.password || '')
    });
    if (loginAfterSignup.error) {
      return { ok: false, message: loginAfterSignup.error.message || 'Signup succeeded, but automatic login failed. Disable email confirmation in Supabase Auth settings if needed.' };
    }
    setCompatSession(true);
    return { ok: true, session: loginAfterSignup.data.session, user: loginAfterSignup.data.user };
  }

  async function handleApiRequest(method, pathname, payload) {
    const client = getClient();
    if (!client) return createJsonResponse(500, { error: 'Supabase client failed to load.' });

    if (pathname === '/api/vendors' && method === 'GET') {
      const result = await client.from('vendors').select('*').order('created_at', { ascending: false });
      if (result.error) return createJsonResponse(500, { error: result.error.message });
      return createJsonResponse(200, { data: result.data || [] });
    }

    if (pathname === '/api/vendors' && method === 'POST') {
      const vendorObj = {
        display_name: payload.display_name || payload.displayName || payload.name || 'Vendor',
        application_fee_ngn: 0,
        status: 'pending'
      };
      const result = await client.from('vendors').insert(vendorObj).select().single();
      if (result.error) return createJsonResponse(500, { error: result.error.message });
      return createJsonResponse(201, { data: result.data });
    }

    if (pathname === '/api/transactions' && method === 'GET') {
      const result = await client.from('transactions').select('*').order('created_at', { ascending: false });
      if (result.error) return createJsonResponse(500, { error: result.error.message });
      return createJsonResponse(200, { data: result.data || [] });
    }

    if (pathname === '/api/points/transfer' && method === 'POST') {
      const args = {
        to_user: payload.to_user,
        points: Number(payload.points || 0),
        reason: payload.reason || null
      };
      const result = await client.rpc('transfer_points', args);
      if (result.error) return createJsonResponse(500, { error: result.error.message });
      return createJsonResponse(200, { ok: true });
    }

    return null;
  }

  async function interceptFetch(input, init) {
    const requestUrl = new URL(typeof input === 'string' ? input : (input && input.url) || '', window.location.href);
    const pathname = normalizePathname(requestUrl.pathname);
    const method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
    const headers = headersToObject((init && init.headers) || (input && input.headers));
    const payload = parseBody(init && init.body, headers);

    if ((pathname === '/login' || pathname === '/register') && method === 'POST') {
      const result = await handleAuthRequest(pathname === '/login' ? 'login' : 'register', payload);
      if (!result.ok) return createJsonResponse(422, { errors: { email: result.message } });
      window.location.href = '/dashboard';
      return createRedirectResponse('/dashboard');
    }

    if (pathname === '/logout' && method === 'POST') {
      const client = getClient();
      if (client) await client.auth.signOut();
      setCompatSession(false);
      window.location.href = '/index.html';
      return createRedirectResponse('/index.html');
    }

    const apiResponse = await handleApiRequest(method, pathname, payload);
    if (apiResponse) return apiResponse;
    return null;
  }

  function installFetchInterceptor() {
    if (typeof window.fetch !== 'function') return;
    const originalFetch = window.fetch.bind(window);
    window.fetch = function (input, init) {
      return interceptFetch(input, init).then((response) => response || originalFetch(input, init));
    };
  }

  function installAuthFormInterceptor() {
    document.addEventListener('submit', async function (event) {
      const form = event.target;
      if (!form || form.tagName !== 'FORM') return;

      const hasPassword = !!form.querySelector('input[type="password"], input[name="password"]');
      const hasEmail = !!form.querySelector('input[type="email"], input[name="email"]');
      if (!hasPassword || !hasEmail) return;

      const path = currentPath();
      const action = normalizePathname(form.getAttribute('action') || path);
      const isLogin = action === '/login' || action === '/login.html' || path === '/login' || path === '/login.html';
      const isRegister = action === '/register' || action === '/register.html' || path === '/register' || path === '/register.html';
      if (!isLogin && !isRegister) return;

      event.preventDefault();
      const payload = formToObject(form);
      const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
      if (submitButton) submitButton.disabled = true;
      const result = await handleAuthRequest(isLogin ? 'login' : 'register', payload);
      if (submitButton) submitButton.disabled = false;

      if (!result.ok) {
        showMessage(result.message, true);
        return;
      }

      showMessage(isLogin ? 'Login successful.' : 'Account created successfully.', false);
      window.location.href = '/dashboard';
    }, true);
  }

  function installLogoutInterceptor() {
    document.addEventListener('click', async function (event) {
      let el = event.target;
      while (el && el !== document.documentElement) {
        if (el.tagName === 'A' || el.tagName === 'BUTTON') break;
        el = el.parentElement;
      }
      if (!el) return;

      const href = el.getAttribute && el.getAttribute('href');
      const formAction = el.form && el.form.getAttribute && el.form.getAttribute('action');
      const path = normalizePathname(href || formAction || '');
      const looksLikeLogout = path === '/logout' || el.getAttribute('data-logout') === 'true' || (el.textContent || '').trim().toLowerCase() === 'logout';
      if (!looksLikeLogout) return;

      event.preventDefault();
      const client = getClient();
      if (client) await client.auth.signOut();
      setCompatSession(false);
      window.location.href = '/index.html';
    }, true);
  }

  function installAuthStateSync() {
    const client = getClient();
    if (!client) return;
    client.auth.onAuthStateChange(function (_event, session) {
      setCompatSession(!!(session && session.user));
      const path = currentPath();
      if (!session && isProtectedPath(path)) {
        window.location.replace('/login.html');
        return;
      }
      if (session && AUTH_PATHS.has(path)) {
        window.location.replace('/dashboard.html');
      }
    });
  }

  patchInitialDataPage();
  installFetchInterceptor();
  installAuthFormInterceptor();
  installLogoutInterceptor();
  installAuthStateSync();
})();
