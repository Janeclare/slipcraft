(function () {
  'use strict';

  const SESSION_KEY = 'slipcraft_session';
  const SUPABASE_STORAGE_KEY = 'sb-hgxtrafpxmugfxplvesv-auth-token';

  function normalizePathname(pathname) {
    let p = pathname || '/';
    if (!p.startsWith('/')) p = '/' + p;
    if (p.length > 1) p = p.replace(/\/+$/, '');
    return p;
  }

  function currentPath() {
    return normalizePathname(window.location.pathname || '/');
  }

  function hasSession() {
    try {
      if (window.localStorage && window.localStorage.getItem(SESSION_KEY)) {
        return true;
      }
      if (window.localStorage && window.localStorage.getItem(SUPABASE_STORAGE_KEY)) {
        return true;
      }
    } catch (e) {
      // ignore
    }

    try {
      return /(?:^|;\s*)slipcraft_session=1(?:;|$)/.test(document.cookie || '');
    } catch (e) {
      return false;
    }
  }

  function isAuthPath(path) {
    return path === '/login.html' || path === '/register.html' || path === '/login' || path === '/register';
  }

  function isProtectedPath(path) {
    // Protect root app pages.
    const protectedRoots = new Set([
      '/dashboard.html',
      '/transactions.html',
      '/vendors.html',
      '/buy-point.html',
      '/profile.html',
      '/services.html',
      '/orders.html',
      '/services/referral.html',
      '/help.html',
      '/contact.html',
    ]);
    if (protectedRoots.has(path)) return true;

    // Protect nested app sections.
    if (path.startsWith('/services/')) return true;
    if (path.startsWith('/order/')) return true;

    return false;
  }

  // Auth guard
  const here = currentPath();
  if (isProtectedPath(here) && !hasSession()) {
    window.location.replace('/login.html');
    return;
  }
  if (isAuthPath(here) && hasSession()) {
    window.location.replace('/dashboard.html');
    return;
  }

  // Route -> static html mapping
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
  ]);

  // Service route -> file mapping (based on the pages you uploaded under /services)
  function mapServicePathToHtml(path) {
    if (!path.startsWith('/services/')) return null;

    // If you navigate to a folder-like route, map to the sibling .html file.
    // Examples:
    //  /services/referral -> /services/referral.html
    //  /services/opay/bank-transfer -> /services/opay/bank-transfer.html
    //  /services/crypto-receipt/binance/store -> /services/crypto-receipt/binance/store.html
    const candidate = path + '.html';
    return candidate;
  }

  function mapPathToHtml(path) {
    const p = normalizePathname(path);

    // Already a real file.
    if (p.toLowerCase().endsWith('.html')) return null;

    // Direct mapping.
    const direct = ROUTE_MAP.get(p);
    if (direct) return direct;

    // Prefix fallbacks.
    if (p.startsWith('/transactions')) return '/transactions.html';
    if (p.startsWith('/vendors')) return '/vendors.html';
    if (p.startsWith('/profile')) return '/profile.html';
    if (p.startsWith('/orders')) return '/orders.html';

    // Buy point has subroutes like /buy-point/automatic-crypto
    if (p.startsWith('/buy-point')) return '/buy-point.html';

    // Nested services pages.
    if (p.startsWith('/services/')) return mapServicePathToHtml(p);

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
    } catch (e) {
      return null;
    }
    return null;
  }

  function isInternalUrl(url) {
    if (!url) return false;
    if (url.origin === window.location.origin) return true;
    // Treat slipcraft.net as internal too (a lot of built links might use absolute slipcraft.net URLs)
    return /(^|\.)slipcraft\.net$/i.test(url.hostname);
  }

  function maybeNavigate(urlLike) {
    const url = toUrl(urlLike);
    if (!url) return null;
    if (!isInternalUrl(url)) return null;

    const mapped = mapPathToHtml(url.pathname);
    if (!mapped) return null;

    // Keep querystring for service deep links etc.
    const full = mapped + (url.search || '') + (url.hash || '');
    return full;
  }

  // Intercept Inertia programmatic navigation.
  document.addEventListener(
    'inertia:before',
    function (ev) {
      try {
        if (!ev || typeof ev.preventDefault !== 'function') return;
        const detail = ev.detail || {};
        const visit = detail.visit || {};
        const method = String(visit.method || detail.method || 'get').toLowerCase();
        if (method !== 'get' && method !== 'head') return;

        const target = maybeNavigate(visit.url);
        if (!target) return;

        ev.preventDefault();
        window.location.href = target;
      } catch (e) {
        // ignore
      }
    },
    true
  );

  // Intercept link clicks (captures <a> before Inertia's Link handler)
  document.addEventListener(
    'click',
    function (ev) {
      try {
        if (ev.defaultPrevented) return;
        if (ev.button !== 0) return;
        if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;

        let el = ev.target;
        while (el && el !== document.documentElement) {
          if (el.tagName === 'A') break;
          el = el.parentElement;
        }
        if (!el || el.tagName !== 'A') return;

        const rawHref = el.getAttribute('href');
        if (!rawHref) return;
        if (rawHref.startsWith('#')) return;
        if (/^(mailto:|tel:|javascript:)/i.test(rawHref)) return;
        if (el.hasAttribute('download')) return;
        if (el.target && el.target !== '_self') return;

        const target = maybeNavigate(el.href);
        if (!target) return;

        ev.preventDefault();
        ev.stopImmediatePropagation();
        window.location.href = target;
      } catch (e) {
        // never break
      }
    },
    true
  );
})();
