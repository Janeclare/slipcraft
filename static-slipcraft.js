(function () {
  'use strict';

  // This file handles ONE job: redirecting clean URLs to .html files
  // and enforcing the auth guard on page load.
  // Inertia handles ALL internal SPA navigation — we do NOT intercept it.

  const SESSION_KEY  = 'slipcraft_session';
  const SUPABASE_KEY = 'sb-hgxtrafpxmugfxplvesv-auth-token';

  function hasSession() {
    try {
      if (localStorage.getItem(SESSION_KEY)) return true;
      if (localStorage.getItem(SUPABASE_KEY)) {
        const raw = localStorage.getItem(SUPABASE_KEY);
        const p = JSON.parse(raw);
        const s = p && (p.currentSession || p);
        return !!(s && s.access_token);
      }
    } catch (e) {}
    try {
      return /(?:^|;\s*)slipcraft_session=1(?:;|$)/.test(document.cookie);
    } catch (e) { return false; }
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  const PROTECTED = ['/dashboard','/services','/transactions','/vendors',
                     '/profile','/orders','/buy-point','/referral','/help','/contact'];
  const isProtected = PROTECTED.some(r => path.startsWith(r)) ||
    path.endsWith('dashboard.html') || path.endsWith('transactions.html') ||
    path.endsWith('services.html')  || path.endsWith('vendors.html') ||
    path.endsWith('profile.html')   || path.endsWith('orders.html') ||
    path.endsWith('buy-point.html');

  const isAuthPage = /\/(login|register)(\.html)?$/.test(path);

  // Auth guard — redirect before React even loads
  if (isProtected && !hasSession()) {
    window.location.replace('/login.html');
    return; // stop script
  }
  if (isAuthPage && hasSession()) {
    window.location.replace('/dashboard.html');
    return;
  }

  // Clean URL → .html redirect map (for direct URL bar navigation)
  // Inertia handles clicks internally — this only fires on hard page loads
  const ROUTE_MAP = {
    '/':                                    '/index.html',
    '/dashboard':                           '/dashboard.html',
    '/transactions':                        '/transactions.html',
    '/vendors':                             '/vendors.html',
    '/services':                            '/services.html',
    '/profile':                             '/profile.html',
    '/profile/edit':                        '/profile.html',
    '/orders':                              '/orders.html',
    '/buy-point':                           '/buy-point.html',
    '/buy-points':                          '/buy-point.html',
    '/help':                                '/help.html',
    '/contact':                             '/contact.html',
    '/about':                               '/about.html',
    '/login':                               '/login.html',
    '/register':                            '/register.html',
    '/referral':                            '/services/referral.html',
    '/services/referral':                   '/services/referral.html',
    '/services/faker':                      '/services/faker.html',
    '/services/opay':                       '/services/opay.html',
    '/services/opay/bank-transfer':         '/services/opay/bank-transfer.html',
    '/services/pass-clone':                 '/services/pass-clone.html',
    '/services/support-page':              '/services/support-page.html',
    '/services/crypto-receipt':             '/services/crypto-receipt.html',
    '/services/crypto-receipt/binance':     '/services/crypto-receipt/binance.html',
    '/services/crypto-receipt/bybit':       '/services/crypto-receipt/bybit.html',
    '/services/crypto-receipt/cashapp':     '/services/crypto-receipt/cashapp.html',
    '/services/crypto-receipt/paypal':      '/services/crypto-receipt/paypal.html',
  };

  // Only redirect if this is a clean URL (no .html) that we know about
  if (!path.endsWith('.html') && ROUTE_MAP[path]) {
    window.location.replace(ROUTE_MAP[path] + window.location.search + window.location.hash);
  }

})();
