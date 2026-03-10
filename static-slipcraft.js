(function () {
  'use strict';

  const SESSION_KEY         = 'slipcraft_session';
  const SUPABASE_STORAGE_KEY = 'sb-hgxtrafpxmugfxplvesv-auth-token';

  function normalizePath(p) {
    p = p || '/';
    if (!p.startsWith('/')) p = '/' + p;
    if (p.length > 1) p = p.replace(/\/+$/, '');
    return p;
  }

  function currentPath() {
    return normalizePath(window.location.pathname);
  }

  function hasSession() {
    try {
      if (window.localStorage.getItem(SESSION_KEY)) return true;
      if (window.localStorage.getItem(SUPABASE_STORAGE_KEY)) return true;
    } catch (e) {}
    try {
      return /(?:^|;\s*)slipcraft_session=1(?:;|$)/.test(document.cookie || '');
    } catch (e) { return false; }
  }

  function isAuthPath(p) {
    return p === '/login.html' || p === '/register.html' || p === '/login' || p === '/register';
  }

  function isProtectedPath(p) {
    const protectedRoots = new Set([
      '/dashboard.html', '/transactions.html', '/vendors.html',
      '/buy-point.html', '/profile.html', '/services.html',
      '/orders.html', '/services/referral.html', '/help.html', '/contact.html',
    ]);
    if (protectedRoots.has(p)) return true;
    if (p.startsWith('/services/')) return true;
    if (p.startsWith('/order/')) return true;
    return false;
  }

  // Auth guard — runs immediately
  const here = currentPath();
  if (isProtectedPath(here) && !hasSession()) {
    window.location.replace('/login.html');
    return;
  }
  if (isAuthPath(here) && hasSession()) {
    window.location.replace('/dashboard.html');
    return;
  }

  // ─── COMPLETE ROUTE MAP (FIX: added all missing service routes) ────────────
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

    // ── Service pages ─────────────────────────────────────────────────────────
    ['/services/referral',                    '/services/referral.html'],
    ['/services/faker',                       '/services/faker.html'],
    ['/services/faker/generate',              '/services/faker/generate.html'],
    ['/services/opay',                        '/services/opay.html'],
    ['/services/opay/bank-transfer',          '/services/opay/bank-transfer.html'],
    ['/services/pass-clone',                  '/services/pass-clone.html'],
    ['/services/pass-clone/link-status',      '/services/pass-clone/link-status.html'],
    ['/services/support-page',                '/services/support-page.html'],
    ['/services/crypto-receipt',              '/services/crypto-receipt.html'],
    ['/services/crypto-receipt/binance',      '/services/crypto-receipt/binance.html'],
    ['/services/crypto-receipt/binance/store','/services/crypto-receipt/binance/store.html'],
    ['/services/crypto-receipt/bybit',        '/services/crypto-receipt/bybit.html'],
    ['/services/crypto-receipt/bybit/store',  '/services/crypto-receipt/bybit/store.html'],
    ['/services/crypto-receipt/cashapp',      '/services/crypto-receipt/cashapp.html'],
    ['/services/crypto-receipt/paypal',       '/services/crypto-receipt/paypal.html'],
    ['/services/scripts',                     '/services/scripts/my-purchases.html'],
    ['/services/scripts/my-purchases',        '/services/scripts/my-purchases.html'],
  ]);

  function resolveRoute(path) {
    const p = normalizePath(path);

    // Already an .html file
    if (p.toLowerCase().endsWith('.html')) return null;

    // Direct match
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

    // Auto-map any /services/* path to .html
    if (p.startsWith('/services/')) return p + '.html';

    // Auto-map any /order/* path
    if (p.startsWith('/order/')) return p + '.html';

    return null;
  }

  function toUrl(raw) {
    try {
      if (!raw) return null;
      if (typeof raw === 'string') return new URL(raw, window.location.href);
      if (raw instanceof URL) return raw;
      if (typeof raw === 'object') {
        const href = raw.href || raw.url || raw.toString();
        if (typeof href === 'string') return new URL(href, window.location.href);
      }
    } catch (e) {}
    return null;
  }

  function isInternalUrl(url) {
    if (!url) return false;
    if (url.origin === window.location.origin) return true;
    return /(^|\.)slipcraft\.net$/i.test(url.hostname);
  }

  function maybeNavigate(urlLike) {
    const url = toUrl(urlLike);
    if (!url || !isInternalUrl(url)) return null;
    const mapped = resolveRoute(url.pathname);
    if (!mapped) return null;
    return mapped + (url.search || '') + (url.hash || '');
  }

  // Intercept Inertia programmatic navigation
  document.addEventListener('inertia:before', function (e) {
    try {
      if (!e || typeof e.preventDefault !== 'function') return;
      const visit = (e.detail || {}).visit || {};
      const method = String(visit.method || (e.detail || {}).method || 'get').toLowerCase();
      if (method !== 'get' && method !== 'head') return;

      const dest = maybeNavigate(visit.url);
      if (!dest) return;

      e.preventDefault();
      window.location.assign(dest);
    } catch (_) {}
  }, true);

  // Intercept link clicks
  // FIX: Use bubble phase (false) and DON'T call stopImmediatePropagation.
  // Calling stopImmediatePropagation was blocking ALL other click handlers
  // on the page — causing "mouse not responding" on elements we didn't match.
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

    const dest = maybeNavigate(el.href);
    if (!dest) return; // Don't intercept — let browser/Inertia handle it

    e.preventDefault();
    // FIX: Removed stopImmediatePropagation — was causing mouse unresponsiveness
    window.location.assign(dest);
  }, false); // bubble phase, not capture

})();
