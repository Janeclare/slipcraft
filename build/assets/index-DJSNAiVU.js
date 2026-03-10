import {
    r as L,
    j as l,
    q as We,
    y as et,
    a as St
} from "./app-CPSemYgC.js";
import {
    a as vt
} from "./AppLayout-BVugRKpX.js";
import {
    U as jt
} from "./UserLayout-P-Xlti_8.js";
import {
    S as wt
} from "./ServiceIcon-C88v8dGn.js";
import {
    o as Nt
} from "./icon-mLvMNoaA.js";
import {
    k as Ct
} from "./kuda-D--VG3aI.js";
import {
    b as Ge
} from "./binance-D4PhrHxU.js";
import {
    b as Ke
} from "./bybit-DyzaUzuj.js";
import {
    c as Et
} from "./coinbase-BiTggD6g.js";
import {
    p as qe
} from "./paypal-CuuRI83g.js";
import {
    w as kt
} from "./wise-Clvn4Y5s.js";
import {
    c as It
} from "./crypto.com-logo-Do31OLD5.js";
import {
    c as Lt
} from "./cashapp-B-zEz66O.js";
import {
    p as _t
} from "./steal-pass-icon-D7aV-WCY.js";
import {
    B as pe
} from "./button-BamgVvPn.js";
import {
    f as ie
} from "./formatNumber-Ce-00Vs2.js";
import {
    D as Dt,
    b as Pt,
    c as At,
    d as Tt,
    e as Ot,
    f as zt
} from "./dialog-BauOFWUU.js";
import {
    c as ge
} from "./index-BIbNlVZ0.js";
import {
    A as Mt
} from "./arrow-left-D8sGkDbn.js";
import {
    A as Ft
} from "./arrow-right-b0B6GwCf.js";
import {
    C as Bt
} from "./check-CsA8fo_3.js";
import {
    C as Rt
} from "./dropdown-menu-73g9f9Cf.js";
import {
    E as Vt
} from "./external-link-B9zueEzt.js";
import {
    c as $t
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    c as Ht
} from "./polished.esm-Cyjuaya6.js";
import {
    C as Ie
} from "./code-C-jukJBp.js";
import {
    E as Ue
} from "./eye-Vvb-RJj7.js";
import {
    S as Gt
} from "./sparkles-B4wUaH_8.js";
import {
    S as Kt
} from "./shopping-cart-Cv9LyvKh.js";
import {
    D as Qe
} from "./database-CwXutizx.js";
import {
    L as qt
} from "./landmark-Dl0zS6Rm.js";
import {
    M as Ut
} from "./mail--HRBfw0-.js";
import {
    R as Qt
} from "./receipt-BLgBmkhL.js";
import {
    G as Yt
} from "./globe-CPNy-IB6.js";
import {
    K as Jt
} from "./key-round-DugN7wqC.js";
import {
    H as Xt
} from "./history-Co-nSHIy.js";
import "./index-Dnc4ycMJ.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./mode-toggle-BKQyjCmw.js";
import "./avatar-BLCVZC4Y.js";
import "./index-BUKYvAHl.js";
import "./index-TtBBfnyI.js";
import "./stringInitials-Bl64PEY-.js";
import "./copyToClipboard-B49pzkZl.js";
import "./user-plus-3llJDC4d.js";
import "./index-C4i189TA.js";
import "./settings-KYD-P5eY.js";
import "./dollar-sign-4CE7QsSH.js";
import "./users-ZqGOPOiM.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
import "./index-Dc_FVRD7.js";
import "./index-bfqS6E9x.js";
import "./index-CChplcHQ.js";
import "./index-ClHHFVVV.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-D_XWqw2c.js";
import "./index-BN1_Zxci.js";
import "./index-B-GRoRe2.js";
import "./chevron-right-Wmdl5VZJ.js";
const Zt = $t("LoaderCircle", [
        ["path", {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }]
    ]),
    Wt = "/build/assets/icon-j7armYoE.png",
    en = "/build/assets/crypto-receipt-C_DEseBf.png";

function tn(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function Ye(e) {
    return tn(e) || Array.isArray(e)
}

function nn() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}

function De(e, t) {
    const r = Object.keys(e),
        s = Object.keys(t);
    if (r.length !== s.length) return !1;
    const i = JSON.stringify(Object.keys(e.breakpoints || {})),
        n = JSON.stringify(Object.keys(t.breakpoints || {}));
    return i !== n ? !1 : r.every(o => {
        const u = e[o],
            c = t[o];
        return typeof u == "function" ? `${u}` == `${c}` : !Ye(u) || !Ye(c) ? u === c : De(u, c)
    })
}

function Je(e) {
    return e.concat().sort((t, r) => t.name > r.name ? 1 : -1).map(t => t.options)
}

function rn(e, t) {
    if (e.length !== t.length) return !1;
    const r = Je(e),
        s = Je(t);
    return r.every((i, n) => {
        const o = s[n];
        return De(i, o)
    })
}

function Pe(e) {
    return typeof e == "number"
}

function Le(e) {
    return typeof e == "string"
}

function ve(e) {
    return typeof e == "boolean"
}

function Xe(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function P(e) {
    return Math.abs(e)
}

function Ae(e) {
    return Math.sign(e)
}

function de(e, t) {
    return P(e - t)
}

function sn(e, t) {
    if (e === 0 || t === 0 || P(e) <= P(t)) return 0;
    const r = de(P(e), P(t));
    return P(r / e)
}

function on(e) {
    return Math.round(e * 100) / 100
}

function me(e) {
    return xe(e).map(Number)
}

function R(e) {
    return e[ye(e)]
}

function ye(e) {
    return Math.max(0, e.length - 1)
}

function Te(e, t) {
    return t === ye(e)
}

function Ze(e, t = 0) {
    return Array.from(Array(e), (r, s) => t + s)
}

function xe(e) {
    return Object.keys(e)
}

function tt(e, t) {
    return [e, t].reduce((r, s) => (xe(s).forEach(i => {
        const n = r[i],
            o = s[i],
            u = Xe(n) && Xe(o);
        r[i] = u ? tt(n, o) : o
    }), r), {})
}

function _e(e, t) {
    return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent
}

function cn(e, t) {
    const r = {
        start: s,
        center: i,
        end: n
    };

    function s() {
        return 0
    }

    function i(c) {
        return n(c) / 2
    }

    function n(c) {
        return t - c
    }

    function o(c, a) {
        return Le(e) ? r[e](c) : e(t, c, a)
    }
    return {
        measure: o
    }
}

function he() {
    let e = [];

    function t(i, n, o, u = {
        passive: !0
    }) {
        let c;
        if ("addEventListener" in i) i.addEventListener(n, o, u), c = () => i.removeEventListener(n, o, u);
        else {
            const a = i;
            a.addListener(o), c = () => a.removeListener(o)
        }
        return e.push(c), s
    }

    function r() {
        e = e.filter(i => i())
    }
    const s = {
        add: t,
        clear: r
    };
    return s
}

function an(e, t, r, s) {
    const i = he(),
        n = 1e3 / 60;
    let o = null,
        u = 0,
        c = 0;

    function a() {
        i.add(e, "visibilitychange", () => {
            e.hidden && f()
        })
    }

    function g() {
        b(), i.clear()
    }

    function p(y) {
        if (!c) return;
        o || (o = y, r(), r());
        const d = y - o;
        for (o = y, u += d; u >= n;) r(), u -= n;
        const h = u / n;
        s(h), c && (c = t.requestAnimationFrame(p))
    }

    function m() {
        c || (c = t.requestAnimationFrame(p))
    }

    function b() {
        t.cancelAnimationFrame(c), o = null, u = 0, c = 0
    }

    function f() {
        o = null, u = 0
    }
    return {
        init: a,
        destroy: g,
        start: m,
        stop: b,
        update: r,
        render: s
    }
}

function ln(e, t) {
    const r = t === "rtl",
        s = e === "y",
        i = s ? "y" : "x",
        n = s ? "x" : "y",
        o = !s && r ? -1 : 1,
        u = g(),
        c = p();

    function a(f) {
        const {
            height: x,
            width: y
        } = f;
        return s ? x : y
    }

    function g() {
        return s ? "top" : r ? "right" : "left"
    }

    function p() {
        return s ? "bottom" : r ? "left" : "right"
    }

    function m(f) {
        return f * o
    }
    return {
        scroll: i,
        cross: n,
        startEdge: u,
        endEdge: c,
        measureSize: a,
        direction: m
    }
}

function ne(e = 0, t = 0) {
    const r = P(e - t);

    function s(a) {
        return a < e
    }

    function i(a) {
        return a > t
    }

    function n(a) {
        return s(a) || i(a)
    }

    function o(a) {
        return n(a) ? s(a) ? e : t : a
    }

    function u(a) {
        return r ? a - r * Math.ceil((a - t) / r) : a
    }
    return {
        length: r,
        max: t,
        min: e,
        constrain: o,
        reachedAny: n,
        reachedMax: i,
        reachedMin: s,
        removeOffset: u
    }
}

function nt(e, t, r) {
    const {
        constrain: s
    } = ne(0, e), i = e + 1;
    let n = o(t);

    function o(m) {
        return r ? P((i + m) % i) : s(m)
    }

    function u() {
        return n
    }

    function c(m) {
        return n = o(m), p
    }

    function a(m) {
        return g().set(u() + m)
    }

    function g() {
        return nt(e, u(), r)
    }
    const p = {
        get: u,
        set: c,
        add: a,
        clone: g
    };
    return p
}

function un(e, t, r, s, i, n, o, u, c, a, g, p, m, b, f, x, y, d, h) {
    const {
        cross: v,
        direction: N
    } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], C = {
        passive: !1
    }, j = he(), w = he(), E = ne(50, 225).constrain(b.measure(20)), A = {
        mouse: 300,
        touch: 400
    }, k = {
        mouse: 500,
        touch: 600
    }, M = f ? 43 : 25;
    let V = !1,
        $ = 0,
        H = 0,
        W = !1,
        X = !1,
        q = !1,
        U = !1;

    function ce(S) {
        if (!h) return;

        function I(z) {
            (ve(h) || h(S, z)) && le(z)
        }
        const T = t;
        j.add(T, "dragstart", z => z.preventDefault(), C).add(T, "touchmove", () => {}, C).add(T, "touchend", () => {}).add(T, "touchstart", I).add(T, "mousedown", I).add(T, "touchcancel", O).add(T, "contextmenu", O).add(T, "click", Y, !0)
    }

    function G() {
        j.clear(), w.clear()
    }

    function re() {
        const S = U ? r : t;
        w.add(S, "touchmove", F, C).add(S, "touchend", O).add(S, "mousemove", F, C).add(S, "mouseup", O)
    }

    function se(S) {
        const I = S.nodeName || "";
        return _.includes(I)
    }

    function Q() {
        return (f ? k : A)[U ? "mouse" : "touch"]
    }

    function ae(S, I) {
        const T = p.add(Ae(S) * -1),
            z = g.byDistance(S, !f).distance;
        return f || P(S) < E ? z : y && I ? z * .5 : g.byIndex(T.get(), 0).distance
    }

    function le(S) {
        const I = _e(S, s);
        U = I, q = f && I && !S.buttons && V, V = de(i.get(), o.get()) >= 2, !(I && S.button !== 0) && (se(S.target) || (W = !0, n.pointerDown(S), a.useFriction(0).useDuration(0), i.set(o), re(), $ = n.readPoint(S), H = n.readPoint(S, v), m.emit("pointerDown")))
    }

    function F(S) {
        if (!_e(S, s) && S.touches.length >= 2) return O(S);
        const T = n.readPoint(S),
            z = n.readPoint(S, v),
            K = de(T, $),
            J = de(z, H);
        if (!X && !U && (!S.cancelable || (X = K > J, !X))) return O(S);
        const ee = n.pointerMove(S);
        K > x && (q = !0), a.useFriction(.3).useDuration(.75), u.start(), i.add(N(ee)), S.preventDefault()
    }

    function O(S) {
        const T = g.byDistance(0, !1).index !== p.get(),
            z = n.pointerUp(S) * Q(),
            K = ae(N(z), T),
            J = sn(z, K),
            ee = M - 10 * J,
            Z = d + J / 50;
        X = !1, W = !1, w.clear(), a.useDuration(ee).useFriction(Z), c.distance(K, !f), U = !1, m.emit("pointerUp")
    }

    function Y(S) {
        q && (S.stopPropagation(), S.preventDefault(), q = !1)
    }

    function B() {
        return W
    }
    return {
        init: ce,
        destroy: G,
        pointerDown: B
    }
}

function fn(e, t) {
    let s, i;

    function n(p) {
        return p.timeStamp
    }

    function o(p, m) {
        const f = `client${(m||e.scroll)==="x"?"X":"Y"}`;
        return (_e(p, t) ? p : p.touches[0])[f]
    }

    function u(p) {
        return s = p, i = p, o(p)
    }

    function c(p) {
        const m = o(p) - o(i),
            b = n(p) - n(s) > 170;
        return i = p, b && (s = p), m
    }

    function a(p) {
        if (!s || !i) return 0;
        const m = o(i) - o(s),
            b = n(p) - n(s),
            f = n(p) - n(i) > 170,
            x = m / b;
        return b && !f && P(x) > .1 ? x : 0
    }
    return {
        pointerDown: u,
        pointerMove: c,
        pointerUp: a,
        readPoint: o
    }
}

function dn() {
    function e(r) {
        const {
            offsetTop: s,
            offsetLeft: i,
            offsetWidth: n,
            offsetHeight: o
        } = r;
        return {
            top: s,
            right: i + n,
            bottom: s + o,
            left: i,
            width: n,
            height: o
        }
    }
    return {
        measure: e
    }
}

function pn(e) {
    function t(s) {
        return e * (s / 100)
    }
    return {
        measure: t
    }
}

function mn(e, t, r, s, i, n, o) {
    const u = [e].concat(s);
    let c, a, g = [],
        p = !1;

    function m(y) {
        return i.measureSize(o.measure(y))
    }

    function b(y) {
        if (!n) return;
        a = m(e), g = s.map(m);

        function d(h) {
            for (const v of h) {
                if (p) return;
                const N = v.target === e,
                    _ = s.indexOf(v.target),
                    C = N ? a : g[_],
                    j = m(N ? e : s[_]);
                if (P(j - C) >= .5) {
                    y.reInit(), t.emit("resize");
                    break
                }
            }
        }
        c = new ResizeObserver(h => {
            (ve(n) || n(y, h)) && d(h)
        }), r.requestAnimationFrame(() => {
            u.forEach(h => c.observe(h))
        })
    }

    function f() {
        p = !0, c && c.disconnect()
    }
    return {
        init: b,
        destroy: f
    }
}

function xn(e, t, r, s, i, n) {
    let o = 0,
        u = 0,
        c = i,
        a = n,
        g = e.get(),
        p = 0;

    function m() {
        const C = s.get() - e.get(),
            j = !c;
        let w = 0;
        return j ? (o = 0, r.set(s), e.set(s), w = C) : (r.set(e), o += C / c, o *= a, g += o, e.add(o), w = g - p), u = Ae(w), p = g, _
    }

    function b() {
        const C = s.get() - t.get();
        return P(C) < .001
    }

    function f() {
        return c
    }

    function x() {
        return u
    }

    function y() {
        return o
    }

    function d() {
        return v(i)
    }

    function h() {
        return N(n)
    }

    function v(C) {
        return c = C, _
    }

    function N(C) {
        return a = C, _
    }
    const _ = {
        direction: x,
        duration: f,
        velocity: y,
        seek: m,
        settled: b,
        useBaseFriction: h,
        useBaseDuration: d,
        useFriction: N,
        useDuration: v
    };
    return _
}

function hn(e, t, r, s, i) {
    const n = i.measure(10),
        o = i.measure(50),
        u = ne(.1, .99);
    let c = !1;

    function a() {
        return !(c || !e.reachedAny(r.get()) || !e.reachedAny(t.get()))
    }

    function g(b) {
        if (!a()) return;
        const f = e.reachedMin(t.get()) ? "min" : "max",
            x = P(e[f] - t.get()),
            y = r.get() - t.get(),
            d = u.constrain(x / o);
        r.subtract(y * d), !b && P(y) < n && (r.set(e.constrain(r.get())), s.useDuration(25).useBaseFriction())
    }

    function p(b) {
        c = !b
    }
    return {
        shouldConstrain: a,
        constrain: g,
        toggleActive: p
    }
}

function gn(e, t, r, s, i) {
    const n = ne(-t + e, 0),
        o = p(),
        u = g(),
        c = m();

    function a(f, x) {
        return de(f, x) <= 1
    }

    function g() {
        const f = o[0],
            x = R(o),
            y = o.lastIndexOf(f),
            d = o.indexOf(x) + 1;
        return ne(y, d)
    }

    function p() {
        return r.map((f, x) => {
            const {
                min: y,
                max: d
            } = n, h = n.constrain(f), v = !x, N = Te(r, x);
            return v ? d : N || a(y, h) ? y : a(d, h) ? d : h
        }).map(f => parseFloat(f.toFixed(3)))
    }

    function m() {
        if (t <= e + i) return [n.max];
        if (s === "keepSnaps") return o;
        const {
            min: f,
            max: x
        } = u;
        return o.slice(f, x)
    }
    return {
        snapsContained: c,
        scrollContainLimit: u
    }
}

function yn(e, t, r) {
    const s = t[0],
        i = r ? s - e : R(t);
    return {
        limit: ne(i, s)
    }
}

function bn(e, t, r, s) {
    const n = t.min + .1,
        o = t.max + .1,
        {
            reachedMin: u,
            reachedMax: c
        } = ne(n, o);

    function a(m) {
        return m === 1 ? c(r.get()) : m === -1 ? u(r.get()) : !1
    }

    function g(m) {
        if (!a(m)) return;
        const b = e * (m * -1);
        s.forEach(f => f.add(b))
    }
    return {
        loop: g
    }
}

function Sn(e) {
    const {
        max: t,
        length: r
    } = e;

    function s(n) {
        const o = n - t;
        return r ? o / -r : 0
    }
    return {
        get: s
    }
}

function vn(e, t, r, s, i) {
    const {
        startEdge: n,
        endEdge: o
    } = e, {
        groupSlides: u
    } = i, c = p().map(t.measure), a = m(), g = b();

    function p() {
        return u(s).map(x => R(x)[o] - x[0][n]).map(P)
    }

    function m() {
        return s.map(x => r[n] - x[n]).map(x => -P(x))
    }

    function b() {
        return u(a).map(x => x[0]).map((x, y) => x + c[y])
    }
    return {
        snaps: a,
        snapsAligned: g
    }
}

function jn(e, t, r, s, i, n) {
    const {
        groupSlides: o
    } = i, {
        min: u,
        max: c
    } = s, a = g();

    function g() {
        const m = o(n),
            b = !e || t === "keepSnaps";
        return r.length === 1 ? [n] : b ? m : m.slice(u, c).map((f, x, y) => {
            const d = !x,
                h = Te(y, x);
            if (d) {
                const v = R(y[0]) + 1;
                return Ze(v)
            }
            if (h) {
                const v = ye(n) - R(y)[0] + 1;
                return Ze(v, R(y)[0])
            }
            return f
        })
    }
    return {
        slideRegistry: a
    }
}

function wn(e, t, r, s, i) {
    const {
        reachedAny: n,
        removeOffset: o,
        constrain: u
    } = s;

    function c(f) {
        return f.concat().sort((x, y) => P(x) - P(y))[0]
    }

    function a(f) {
        const x = e ? o(f) : u(f),
            y = t.map((h, v) => ({
                diff: g(h - x, 0),
                index: v
            })).sort((h, v) => P(h.diff) - P(v.diff)),
            {
                index: d
            } = y[0];
        return {
            index: d,
            distance: x
        }
    }

    function g(f, x) {
        const y = [f, f + r, f - r];
        if (!e) return f;
        if (!x) return c(y);
        const d = y.filter(h => Ae(h) === x);
        return d.length ? c(d) : R(y) - r
    }

    function p(f, x) {
        const y = t[f] - i.get(),
            d = g(y, x);
        return {
            index: f,
            distance: d
        }
    }

    function m(f, x) {
        const y = i.get() + f,
            {
                index: d,
                distance: h
            } = a(y),
            v = !e && n(y);
        if (!x || v) return {
            index: d,
            distance: f
        };
        const N = t[d] - h,
            _ = f + g(N, 0);
        return {
            index: d,
            distance: _
        }
    }
    return {
        byDistance: m,
        byIndex: p,
        shortcut: g
    }
}

function Nn(e, t, r, s, i, n, o) {
    function u(p) {
        const m = p.distance,
            b = p.index !== t.get();
        n.add(m), m && (s.duration() ? e.start() : (e.update(), e.render(1), e.update())), b && (r.set(t.get()), t.set(p.index), o.emit("select"))
    }

    function c(p, m) {
        const b = i.byDistance(p, m);
        u(b)
    }

    function a(p, m) {
        const b = t.clone().set(p),
            f = i.byIndex(b.get(), m);
        u(f)
    }
    return {
        distance: c,
        index: a
    }
}

function Cn(e, t, r, s, i, n, o, u) {
    const c = {
        passive: !0,
        capture: !0
    };
    let a = 0;

    function g(b) {
        if (!u) return;

        function f(x) {
            if (new Date().getTime() - a > 10) return;
            o.emit("slideFocusStart"), e.scrollLeft = 0;
            const h = r.findIndex(v => v.includes(x));
            Pe(h) && (i.useDuration(0), s.index(h, 0), o.emit("slideFocus"))
        }
        n.add(document, "keydown", p, !1), t.forEach((x, y) => {
            n.add(x, "focus", d => {
                (ve(u) || u(b, d)) && f(y)
            }, c)
        })
    }

    function p(b) {
        b.code === "Tab" && (a = new Date().getTime())
    }
    return {
        init: g
    }
}

function fe(e) {
    let t = e;

    function r() {
        return t
    }

    function s(c) {
        t = o(c)
    }

    function i(c) {
        t += o(c)
    }

    function n(c) {
        t -= o(c)
    }

    function o(c) {
        return Pe(c) ? c : c.get()
    }
    return {
        get: r,
        set: s,
        add: i,
        subtract: n
    }
}

function rt(e, t) {
    const r = e.scroll === "x" ? o : u,
        s = t.style;
    let i = null,
        n = !1;

    function o(m) {
        return `translate3d(${m}px,0px,0px)`
    }

    function u(m) {
        return `translate3d(0px,${m}px,0px)`
    }

    function c(m) {
        if (n) return;
        const b = on(e.direction(m));
        b !== i && (s.transform = r(b), i = b)
    }

    function a(m) {
        n = !m
    }

    function g() {
        n || (s.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
    }
    return {
        clear: g,
        to: c,
        toggleActive: a
    }
}

function En(e, t, r, s, i, n, o, u, c) {
    const g = me(i),
        p = me(i).reverse(),
        m = d().concat(h());

    function b(j, w) {
        return j.reduce((E, A) => E - i[A], w)
    }

    function f(j, w) {
        return j.reduce((E, A) => b(E, w) > 0 ? E.concat([A]) : E, [])
    }

    function x(j) {
        return n.map((w, E) => ({
            start: w - s[E] + .5 + j,
            end: w + t - .5 + j
        }))
    }

    function y(j, w, E) {
        const A = x(w);
        return j.map(k => {
            const M = E ? 0 : -r,
                V = E ? r : 0,
                $ = E ? "end" : "start",
                H = A[k][$];
            return {
                index: k,
                loopPoint: H,
                slideLocation: fe(-1),
                translate: rt(e, c[k]),
                target: () => u.get() > H ? M : V
            }
        })
    }

    function d() {
        const j = o[0],
            w = f(p, j);
        return y(w, r, !1)
    }

    function h() {
        const j = t - o[0] - 1,
            w = f(g, j);
        return y(w, -r, !0)
    }

    function v() {
        return m.every(({
            index: j
        }) => {
            const w = g.filter(E => E !== j);
            return b(w, t) <= .1
        })
    }

    function N() {
        m.forEach(j => {
            const {
                target: w,
                translate: E,
                slideLocation: A
            } = j, k = w();
            k !== A.get() && (E.to(k), A.set(k))
        })
    }

    function _() {
        m.forEach(j => j.translate.clear())
    }
    return {
        canLoop: v,
        clear: _,
        loop: N,
        loopPoints: m
    }
}

function kn(e, t, r) {
    let s, i = !1;

    function n(c) {
        if (!r) return;

        function a(g) {
            for (const p of g)
                if (p.type === "childList") {
                    c.reInit(), t.emit("slidesChanged");
                    break
                }
        }
        s = new MutationObserver(g => {
            i || (ve(r) || r(c, g)) && a(g)
        }), s.observe(e, {
            childList: !0
        })
    }

    function o() {
        s && s.disconnect(), i = !0
    }
    return {
        init: n,
        destroy: o
    }
}

function In(e, t, r, s) {
    const i = {};
    let n = null,
        o = null,
        u, c = !1;

    function a() {
        u = new IntersectionObserver(f => {
            c || (f.forEach(x => {
                const y = t.indexOf(x.target);
                i[y] = x
            }), n = null, o = null, r.emit("slidesInView"))
        }, {
            root: e.parentElement,
            threshold: s
        }), t.forEach(f => u.observe(f))
    }

    function g() {
        u && u.disconnect(), c = !0
    }

    function p(f) {
        return xe(i).reduce((x, y) => {
            const d = parseInt(y),
                {
                    isIntersecting: h
                } = i[d];
            return (f && h || !f && !h) && x.push(d), x
        }, [])
    }

    function m(f = !0) {
        if (f && n) return n;
        if (!f && o) return o;
        const x = p(f);
        return f && (n = x), f || (o = x), x
    }
    return {
        init: a,
        destroy: g,
        get: m
    }
}

function Ln(e, t, r, s, i, n) {
    const {
        measureSize: o,
        startEdge: u,
        endEdge: c
    } = e, a = r[0] && i, g = f(), p = x(), m = r.map(o), b = y();

    function f() {
        if (!a) return 0;
        const h = r[0];
        return P(t[u] - h[u])
    }

    function x() {
        if (!a) return 0;
        const h = n.getComputedStyle(R(s));
        return parseFloat(h.getPropertyValue(`margin-${c}`))
    }

    function y() {
        return r.map((h, v, N) => {
            const _ = !v,
                C = Te(N, v);
            return _ ? m[v] + g : C ? m[v] + p : N[v + 1][u] - h[u]
        }).map(P)
    }
    return {
        slideSizes: m,
        slideSizesWithGaps: b,
        startGap: g,
        endGap: p
    }
}

function _n(e, t, r, s, i, n, o, u, c) {
    const {
        startEdge: a,
        endEdge: g,
        direction: p
    } = e, m = Pe(r);

    function b(d, h) {
        return me(d).filter(v => v % h === 0).map(v => d.slice(v, v + h))
    }

    function f(d) {
        return d.length ? me(d).reduce((h, v, N) => {
            const _ = R(h) || 0,
                C = _ === 0,
                j = v === ye(d),
                w = i[a] - n[_][a],
                E = i[a] - n[v][g],
                A = !s && C ? p(o) : 0,
                k = !s && j ? p(u) : 0,
                M = P(E - k - (w + A));
            return N && M > t + c && h.push(v), j && h.push(d.length), h
        }, []).map((h, v, N) => {
            const _ = Math.max(N[v - 1] || 0);
            return d.slice(_, h)
        }) : []
    }

    function x(d) {
        return m ? b(d, r) : f(d)
    }
    return {
        groupSlides: x
    }
}

function Dn(e, t, r, s, i, n, o) {
    const {
        align: u,
        axis: c,
        direction: a,
        startIndex: g,
        loop: p,
        duration: m,
        dragFree: b,
        dragThreshold: f,
        inViewThreshold: x,
        slidesToScroll: y,
        skipSnaps: d,
        containScroll: h,
        watchResize: v,
        watchSlides: N,
        watchDrag: _,
        watchFocus: C
    } = n, j = 2, w = dn(), E = w.measure(t), A = r.map(w.measure), k = ln(c, a), M = k.measureSize(E), V = pn(M), $ = cn(u, M), H = !p && !!h, W = p || !!h, {
        slideSizes: X,
        slideSizesWithGaps: q,
        startGap: U,
        endGap: ce
    } = Ln(k, E, A, r, W, i), G = _n(k, M, y, p, E, A, U, ce, j), {
        snaps: re,
        snapsAligned: se
    } = vn(k, $, E, A, G), Q = -R(re) + R(q), {
        snapsContained: ae,
        scrollContainLimit: le
    } = gn(M, Q, se, h, j), F = H ? ae : se, {
        limit: O
    } = yn(Q, F, p), Y = nt(ye(F), g, p), B = Y.clone(), D = me(r), S = ({
        dragHandler: oe,
        scrollBody: Ee,
        scrollBounds: ke,
        options: {
            loop: be
        }
    }) => {
        be || ke.constrain(oe.pointerDown()), Ee.seek()
    }, I = ({
        scrollBody: oe,
        translate: Ee,
        location: ke,
        offsetLocation: be,
        previousLocation: dt,
        scrollLooper: pt,
        slideLooper: mt,
        dragHandler: xt,
        animation: ht,
        eventHandler: Be,
        scrollBounds: gt,
        options: {
            loop: Re
        }
    }, Ve) => {
        const $e = oe.settled(),
            yt = !gt.shouldConstrain(),
            He = Re ? $e : $e && yt;
        He && !xt.pointerDown() && (ht.stop(), Be.emit("settle")), He || Be.emit("scroll");
        const bt = ke.get() * Ve + dt.get() * (1 - Ve);
        be.set(bt), Re && (pt.loop(oe.direction()), mt.loop()), Ee.to(be.get())
    }, T = an(s, i, () => S(Ce), oe => I(Ce, oe)), z = .68, K = F[Y.get()], J = fe(K), ee = fe(K), Z = fe(K), te = fe(K), ue = xn(J, Z, ee, te, m, z), we = wn(p, F, Q, O, te), Ne = Nn(T, Y, B, ue, we, te, o), ze = Sn(O), Me = he(), ut = In(t, r, o, x), {
        slideRegistry: Fe
    } = jn(H, h, F, le, G, D), ft = Cn(e, r, Fe, Ne, ue, Me, o, C), Ce = {
        ownerDocument: s,
        ownerWindow: i,
        eventHandler: o,
        containerRect: E,
        slideRects: A,
        animation: T,
        axis: k,
        dragHandler: un(k, e, s, i, te, fn(k, i), J, T, Ne, ue, we, Y, o, V, b, f, d, z, _),
        eventStore: Me,
        percentOfView: V,
        index: Y,
        indexPrevious: B,
        limit: O,
        location: J,
        offsetLocation: Z,
        previousLocation: ee,
        options: n,
        resizeHandler: mn(t, o, i, r, k, v, w),
        scrollBody: ue,
        scrollBounds: hn(O, Z, te, ue, V),
        scrollLooper: bn(Q, O, Z, [J, Z, ee, te]),
        scrollProgress: ze,
        scrollSnapList: F.map(ze.get),
        scrollSnaps: F,
        scrollTarget: we,
        scrollTo: Ne,
        slideLooper: En(k, M, Q, X, q, re, F, Z, r),
        slideFocus: ft,
        slidesHandler: kn(t, o, N),
        slidesInView: ut,
        slideIndexes: D,
        slideRegistry: Fe,
        slidesToScroll: G,
        target: te,
        translate: rt(k, t)
    };
    return Ce
}

function Pn() {
    let e = {},
        t;

    function r(a) {
        t = a
    }

    function s(a) {
        return e[a] || []
    }

    function i(a) {
        return s(a).forEach(g => g(t, a)), c
    }

    function n(a, g) {
        return e[a] = s(a).concat([g]), c
    }

    function o(a, g) {
        return e[a] = s(a).filter(p => p !== g), c
    }

    function u() {
        e = {}
    }
    const c = {
        init: r,
        emit: i,
        off: o,
        on: n,
        clear: u
    };
    return c
}
const An = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0
};

function Tn(e) {
    function t(n, o) {
        return tt(n, o || {})
    }

    function r(n) {
        const o = n.breakpoints || {},
            u = xe(o).filter(c => e.matchMedia(c).matches).map(c => o[c]).reduce((c, a) => t(c, a), {});
        return t(n, u)
    }

    function s(n) {
        return n.map(o => xe(o.breakpoints || {})).reduce((o, u) => o.concat(u), []).map(e.matchMedia)
    }
    return {
        mergeOptions: t,
        optionsAtMedia: r,
        optionsMediaQueries: s
    }
}

function On(e) {
    let t = [];

    function r(n, o) {
        return t = o.filter(({
            options: u
        }) => e.optionsAtMedia(u).active !== !1), t.forEach(u => u.init(n, e)), o.reduce((u, c) => Object.assign(u, {
            [c.name]: c
        }), {})
    }

    function s() {
        t = t.filter(n => n.destroy())
    }
    return {
        init: r,
        destroy: s
    }
}

function Se(e, t, r) {
    const s = e.ownerDocument,
        i = s.defaultView,
        n = Tn(i),
        o = On(n),
        u = he(),
        c = Pn(),
        {
            mergeOptions: a,
            optionsAtMedia: g,
            optionsMediaQueries: p
        } = n,
        {
            on: m,
            off: b,
            emit: f
        } = c,
        x = k;
    let y = !1,
        d, h = a(An, Se.globalOptions),
        v = a(h),
        N = [],
        _, C, j;

    function w() {
        const {
            container: D,
            slides: S
        } = v;
        C = (Le(D) ? e.querySelector(D) : D) || e.children[0];
        const T = Le(S) ? C.querySelectorAll(S) : S;
        j = [].slice.call(T || C.children)
    }

    function E(D) {
        const S = Dn(e, C, j, s, i, D, c);
        if (D.loop && !S.slideLooper.canLoop()) {
            const I = Object.assign({}, D, {
                loop: !1
            });
            return E(I)
        }
        return S
    }

    function A(D, S) {
        y || (h = a(h, D), v = g(h), N = S || N, w(), d = E(v), p([h, ...N.map(({
            options: I
        }) => I)]).forEach(I => u.add(I, "change", k)), v.active && (d.translate.to(d.location.get()), d.animation.init(), d.slidesInView.init(), d.slideFocus.init(B), d.eventHandler.init(B), d.resizeHandler.init(B), d.slidesHandler.init(B), d.options.loop && d.slideLooper.loop(), C.offsetParent && j.length && d.dragHandler.init(B), _ = o.init(B, N)))
    }

    function k(D, S) {
        const I = G();
        M(), A(a({
            startIndex: I
        }, D), S), c.emit("reInit")
    }

    function M() {
        d.dragHandler.destroy(), d.eventStore.clear(), d.translate.clear(), d.slideLooper.clear(), d.resizeHandler.destroy(), d.slidesHandler.destroy(), d.slidesInView.destroy(), d.animation.destroy(), o.destroy(), u.clear()
    }

    function V() {
        y || (y = !0, u.clear(), M(), c.emit("destroy"), c.clear())
    }

    function $(D, S, I) {
        !v.active || y || (d.scrollBody.useBaseFriction().useDuration(S === !0 ? 0 : v.duration), d.scrollTo.index(D, I || 0))
    }

    function H(D) {
        const S = d.index.add(1).get();
        $(S, D, -1)
    }

    function W(D) {
        const S = d.index.add(-1).get();
        $(S, D, 1)
    }

    function X() {
        return d.index.add(1).get() !== G()
    }

    function q() {
        return d.index.add(-1).get() !== G()
    }

    function U() {
        return d.scrollSnapList
    }

    function ce() {
        return d.scrollProgress.get(d.location.get())
    }

    function G() {
        return d.index.get()
    }

    function re() {
        return d.indexPrevious.get()
    }

    function se() {
        return d.slidesInView.get()
    }

    function Q() {
        return d.slidesInView.get(!1)
    }

    function ae() {
        return _
    }

    function le() {
        return d
    }

    function F() {
        return e
    }

    function O() {
        return C
    }

    function Y() {
        return j
    }
    const B = {
        canScrollNext: X,
        canScrollPrev: q,
        containerNode: O,
        internalEngine: le,
        destroy: V,
        off: b,
        on: m,
        emit: f,
        plugins: ae,
        previousScrollSnap: re,
        reInit: x,
        rootNode: F,
        scrollNext: H,
        scrollPrev: W,
        scrollProgress: ce,
        scrollSnapList: U,
        scrollTo: $,
        selectedScrollSnap: G,
        slideNodes: Y,
        slidesInView: se,
        slidesNotInView: Q
    };
    return A(t, r), setTimeout(() => c.emit("init"), 0), B
}
Se.globalOptions = void 0;

function Oe(e = {}, t = []) {
    const r = L.useRef(e),
        s = L.useRef(t),
        [i, n] = L.useState(),
        [o, u] = L.useState(),
        c = L.useCallback(() => {
            i && i.reInit(r.current, s.current)
        }, [i]);
    return L.useEffect(() => {
        De(r.current, e) || (r.current = e, c())
    }, [e, c]), L.useEffect(() => {
        rn(s.current, t) || (s.current = t, c())
    }, [t, c]), L.useEffect(() => {
        if (nn() && o) {
            Se.globalOptions = Oe.globalOptions;
            const a = Se(o, r.current, s.current);
            return n(a), () => a.destroy()
        } else n(void 0)
    }, [o, n]), [u, i]
}
Oe.globalOptions = void 0;
const st = L.createContext(null);

function je() {
    const e = L.useContext(st);
    if (!e) throw new Error("useCarousel must be used within a <Carousel />");
    return e
}
const ot = L.forwardRef(({
    orientation: e = "horizontal",
    opts: t,
    setApi: r,
    plugins: s,
    className: i,
    children: n,
    ...o
}, u) => {
    const [c, a] = Oe({ ...t,
        axis: e === "horizontal" ? "x" : "y"
    }, s), [g, p] = L.useState(!1), [m, b] = L.useState(!1), f = L.useCallback(h => {
        h && (p(h.canScrollPrev()), b(h.canScrollNext()))
    }, []), x = L.useCallback(() => {
        a ?.scrollPrev()
    }, [a]), y = L.useCallback(() => {
        a ?.scrollNext()
    }, [a]), d = L.useCallback(h => {
        h.key === "ArrowLeft" ? (h.preventDefault(), x()) : h.key === "ArrowRight" && (h.preventDefault(), y())
    }, [x, y]);
    return L.useEffect(() => {
        !a || !r || r(a)
    }, [a, r]), L.useEffect(() => {
        if (a) return f(a), a.on("reInit", f), a.on("select", f), () => {
            a ?.off("select", f)
        }
    }, [a, f]), l.jsx(st.Provider, {
        value: {
            carouselRef: c,
            api: a,
            opts: t,
            orientation: e || (t ?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev: x,
            scrollNext: y,
            canScrollPrev: g,
            canScrollNext: m
        },
        children: l.jsx("div", {
            ref: u,
            onKeyDownCapture: d,
            className: ge("relative", i),
            role: "region",
            "aria-roledescription": "carousel",
            ...o,
            children: n
        })
    })
});
ot.displayName = "Carousel";
const it = L.forwardRef(({
    className: e,
    ...t
}, r) => {
    const {
        carouselRef: s,
        orientation: i
    } = je();
    return l.jsx("div", {
        ref: s,
        className: "overflow-hidden",
        children: l.jsx("div", {
            ref: r,
            className: ge("flex", i === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
            ...t
        })
    })
});
it.displayName = "CarouselContent";
const ct = L.forwardRef(({
    className: e,
    ...t
}, r) => {
    const {
        orientation: s
    } = je();
    return l.jsx("div", {
        ref: r,
        role: "group",
        "aria-roledescription": "slide",
        className: ge("min-w-0 shrink-0 grow-0 basis-full", s === "horizontal" ? "pl-4" : "pt-4", e),
        ...t
    })
});
ct.displayName = "CarouselItem";
const at = L.forwardRef(({
    className: e,
    variant: t = "outline",
    size: r = "icon",
    ...s
}, i) => {
    const {
        orientation: n,
        scrollPrev: o,
        canScrollPrev: u
    } = je();
    return l.jsxs(pe, {
        ref: i,
        variant: t,
        size: r,
        className: ge("absolute  h-8 w-8 rounded-full", n === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !u,
        onClick: o,
        ...s,
        children: [l.jsx(Mt, {
            className: "h-4 w-4"
        }), l.jsx("span", {
            className: "sr-only",
            children: "Previous slide"
        })]
    })
});
at.displayName = "CarouselPrevious";
const lt = L.forwardRef(({
    className: e,
    variant: t = "outline",
    size: r = "icon",
    ...s
}, i) => {
    const {
        orientation: n,
        scrollNext: o,
        canScrollNext: u
    } = je();
    return l.jsxs(pe, {
        ref: i,
        variant: t,
        size: r,
        className: ge("absolute h-8 w-8 rounded-full", n === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", e),
        disabled: !u,
        onClick: o,
        ...s,
        children: [l.jsx(Ft, {
            className: "h-4 w-4"
        }), l.jsx("span", {
            className: "sr-only",
            children: "Next slide"
        })]
    })
});
lt.displayName = "CarouselNext";
const zn = ({
        script: e,
        open: t,
        onClose: r
    }) => {
        const {
            platform: s,
            auth: i
        } = We().props, [n, o] = L.useState("script_only"), [u, c] = L.useState(!1), a = n === "script_only" ? e.script_only_price : e.script_with_setup_price, g = i.user ?.point_main_balance ?? 0, p = g >= a, m = () => {
            c(!0), et.post(route("services.script.purchase", {
                script: e.id
            }), {
                purchase_type: n
            }, {
                onFinish: () => c(!1)
            })
        };
        return l.jsx(Dt, {
            open: t,
            onOpenChange: b => !b && r(),
            children: l.jsxs(Pt, {
                className: "max-w-[95vw] sm:max-w-[600px] max-h-[90vh] overflow-auto",
                children: [l.jsxs(At, {
                    children: [l.jsx(Tt, {
                        children: e.name
                    }), (e.demo_email || e.demo_password) && l.jsxs(Ot, {
                        children: ["Demo Access: ", l.jsx("br", {}), e.demo_email && l.jsxs(l.Fragment, {
                            children: [l.jsx("strong", {
                                children: "Email:"
                            }), " ", e.demo_email, " ", l.jsx("br", {})]
                        }), e.demo_password && l.jsxs(l.Fragment, {
                            children: [l.jsx("strong", {
                                children: "Password:"
                            }), " ", e.demo_password, " ", l.jsx("br", {})]
                        }), e.screenshots && e.screenshots.length > 0 && l.jsx("span", {
                            className: "text-rose-400 font-semibold",
                            children: "Swipe left through the screenshots to preview."
                        })]
                    })]
                }), e.screenshots && e.screenshots.length > 0 && l.jsx("div", {
                    className: "max-h-[400px] overflow-auto",
                    children: l.jsxs(ot, {
                        opts: {
                            align: "center"
                        },
                        className: "max-w-full",
                        children: [l.jsx(it, {
                            children: e.screenshots.map((b, f) => l.jsx(ct, {
                                className: "max-w-full max-h-[500px] flex justify-center",
                                children: l.jsx("img", {
                                    className: "max-w-full max-h-full object-contain flex-shrink-0",
                                    src: `/storage/${b}`,
                                    alt: `Screenshot ${f+1}`
                                })
                            }, f))
                        }), l.jsx(at, {}), l.jsx(lt, {})]
                    })
                }), l.jsxs("div", {
                    className: "flex flex-col gap-2 mt-2",
                    children: [l.jsx("p", {
                        className: "font-semibold text-sm",
                        children: "Select package:"
                    }), l.jsx("div", {
                        className: "flex flex-col gap-2",
                        children: [{
                            value: "script_only",
                            label: "Script Only",
                            desc: "Source code only for developers",
                            price: e.script_only_price
                        }, {
                            value: "script_with_setup",
                            label: "Script + Setup",
                            desc: "Full website setup for non technical users",
                            price: e.script_with_setup_price
                        }].map(b => {
                            const f = n === b.value;
                            return l.jsxs("button", {
                                type: "button",
                                onClick: () => o(b.value),
                                className: "flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-all",
                                style: {
                                    borderColor: f ? s.primary_color : void 0,
                                    backgroundColor: f ? `${s.primary_color}10` : void 0
                                },
                                children: [f ? l.jsx("span", {
                                    className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                                    style: {
                                        backgroundColor: s.primary_color
                                    },
                                    children: l.jsx(Bt, {
                                        size: 12,
                                        className: "text-white"
                                    })
                                }) : l.jsx(Rt, {
                                    size: 20,
                                    className: "shrink-0 text-muted-foreground/40"
                                }), l.jsxs("div", {
                                    className: "flex-1 min-w-0",
                                    children: [l.jsxs("div", {
                                        className: "flex items-baseline justify-between gap-2",
                                        children: [l.jsx("p", {
                                            className: "font-medium text-sm",
                                            children: b.label
                                        }), l.jsxs("p", {
                                            className: "font-bold text-sm shrink-0",
                                            style: {
                                                color: s.primary_color
                                            },
                                            children: [ie(b.price), " pts"]
                                        })]
                                    }), l.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: b.desc
                                    })]
                                })]
                            }, b.value)
                        })
                    }), !p && l.jsxs("p", {
                        className: "text-sm text-red-500",
                        children: ["Insufficient points. You need", " ", ie(a), " points but have", " ", ie(g), "."]
                    })]
                }), l.jsxs(zt, {
                    className: "gap-y-2 mt-2",
                    children: [e.demo_url && l.jsx("a", {
                        href: e.demo_url.startsWith("http") ? e.demo_url : `https://${e.demo_url}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: l.jsxs(pe, {
                            className: "w-full gap-1",
                            variant: "outline",
                            children: [l.jsx(Vt, {
                                size: 16
                            }), "View Demo"]
                        })
                    }), l.jsx(pe, {
                        type: "button",
                        style: {
                            backgroundColor: s.primary_color
                        },
                        className: "text-white",
                        onClick: m,
                        disabled: !p || u,
                        children: u ? l.jsxs(l.Fragment, {
                            children: [l.jsx(Zt, {
                                size: 16,
                                className: "animate-spin mr-1"
                            }), "Processing..."]
                        }) : `Buy for ${ie(a)} points`
                    })]
                })]
            })
        })
    },
    Mn = ({
        script: e
    }) => {
        const {
            platform: t
        } = We().props, [r, s] = L.useState(!1);
        return l.jsxs(l.Fragment, {
            children: [l.jsxs("div", {
                onClick: () => s(!0),
                className: "group relative flex flex-col w-[260px] sm:w-[280px] rounded-2xl border bg-background overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-transparent hover:-translate-y-0.5 cursor-pointer",
                children: [l.jsx("div", {
                    className: "h-[3px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    style: {
                        backgroundColor: t.primary_color
                    }
                }), l.jsxs("div", {
                    className: "w-full h-[150px] relative overflow-hidden",
                    children: [e.preview_image_path ? l.jsx("img", {
                        className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105",
                        src: `/storage/${e.preview_image_path}`,
                        alt: e.name
                    }) : l.jsx("div", {
                        className: "w-full h-full flex items-center justify-center",
                        style: {
                            background: `linear-gradient(135deg, ${t.primary_color}15, ${t.primary_color}05)`
                        },
                        children: l.jsx(Ie, {
                            size: 40,
                            className: "text-muted-foreground/40"
                        })
                    }), l.jsx("div", {
                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center",
                        children: l.jsxs("div", {
                            className: "opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm",
                            children: [l.jsx(Ue, {
                                size: 14
                            }), "View Details"]
                        })
                    })]
                }), l.jsxs("div", {
                    className: "p-3.5 flex flex-col gap-2.5",
                    children: [l.jsx("h3", {
                        className: "font-semibold text-sm line-clamp-1",
                        children: e.name
                    }), e.description && l.jsx("p", {
                        className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed",
                        children: e.description
                    }), l.jsxs("div", {
                        className: "flex items-center justify-between gap-2 mt-auto",
                        children: [l.jsx("div", {
                            className: "flex items-center gap-1.5",
                            children: l.jsxs("span", {
                                className: "inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                                style: {
                                    backgroundColor: `${t.primary_color}15`,
                                    color: t.primary_color
                                },
                                children: [l.jsx(Gt, {
                                    size: 10
                                }), ie(e.script_only_price), " pts"]
                            })
                        }), l.jsxs("span", {
                            className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/50 rounded-full px-2 py-0.5",
                            children: [l.jsx(Kt, {
                                size: 10
                            }), ie(e.purchases_count ?? 0), " sales"]
                        })]
                    }), l.jsxs(pe, {
                        size: "sm",
                        className: "w-full text-white font-semibold text-xs gap-1.5",
                        style: {
                            background: `linear-gradient(135deg, ${t.primary_color}, ${Ht(.08,t.primary_color)})`
                        },
                        onClick: i => {
                            i.stopPropagation(), s(!0)
                        },
                        children: [l.jsx(Ue, {
                            size: 14
                        }), "View Details"]
                    })]
                })]
            }), l.jsx(zn, {
                script: e,
                open: r,
                onClose: () => s(!1)
            })]
        })
    },
    qr = ({
        auth: e,
        platform: t,
        scripts: r
    }) => {
        const s = [{
            title: "Data Generator",
            icon: l.jsx(Qe, {
                size: 16
            }),
            items: [{
                label: "Faker Data",
                route: "services.faker",
                newlyAdded: !0,
                iconNode: l.jsx(Qe, {
                    size: 32,
                    style: {
                        color: t.primary_color
                    }
                }),
                iconClassName: "bg-muted"
            }]
        }, {
            title: "Bank Slips",
            icon: l.jsx(qt, {
                size: 16
            }),
            items: [{
                label: "Opay",
                iconSrc: Nt,
                route: "services.opay"
            }, {
                label: "Kuda",
                iconSrc: Ct,
                route: "services.kuda"
            }, {
                label: "Palmpay",
                iconSrc: Wt,
                route: "services.palmpay",
                comingSoon: !0
            }]
        }, {
            title: "Flash Emails",
            icon: l.jsx(Ut, {
                size: 16
            }),
            items: [{
                label: "Binance",
                iconSrc: Ge,
                route: "services.binance"
            }, {
                label: "Bybit",
                iconSrc: Ke,
                route: "services.bybit"
            }, {
                label: "Coinbase",
                iconSrc: Et,
                route: "services.coinbase"
            }, {
                label: "PayPal",
                iconSrc: qe,
                route: "services.paypal"
            }, {
                label: "Crypto.com",
                iconSrc: It,
                route: "services.crypto.com"
            }, {
                label: "Wise",
                iconSrc: kt,
                route: "services.wise",
                comingSoon: !0
            }]
        }, {
            title: "Crypto Receipts",
            icon: l.jsx(Qt, {
                size: 16
            }),
            items: [{
                label: "Binance",
                iconSrc: Ge,
                route: "services.crypto_receipt.binance"
            }, {
                label: "Bybit",
                iconSrc: Ke,
                route: "services.crypto_receipt.bybit"
            }, {
                label: "PayPal",
                iconSrc: qe,
                route: "services.crypto_receipt.paypal"
            }, {
                label: "CashApp",
                iconSrc: Lt,
                route: "services.crypto_receipt.cashapp"
            }]
        }, {
            title: "Support Pages",
            icon: l.jsx(Yt, {
                size: 16
            }),
            items: [{
                label: "Support Sites",
                iconSrc: en,
                route: "services.support_page",
                iconClassName: "dark:bg-white"
            }]
        }, {
            title: "Password Clone",
            icon: l.jsx(Jt, {
                size: 16
            }),
            items: [{
                label: "Pass Clone",
                iconSrc: _t,
                route: "services.pass_clone",
                iconClassName: "dark:bg-white"
            }]
        }];
        return l.jsxs(jt, {
            children: [l.jsx(vt, {
                title: "Services"
            }), l.jsxs("div", {
                className: "flex flex-col gap-6",
                children: [l.jsx("h1", {
                    className: "font-bold text-2xl sm:text-3xl md:text-4xl",
                    children: "Services"
                }), l.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                    children: s.map(i => l.jsxs("div", {
                        className: "border rounded-xl overflow-hidden bg-background",
                        children: [l.jsxs("div", {
                            className: "flex items-center gap-2 px-4 py-2.5 border-b",
                            style: {
                                backgroundColor: `${t.primary_color}10`
                            },
                            children: [l.jsx("span", {
                                style: {
                                    color: t.primary_color
                                },
                                children: i.icon
                            }), l.jsx("p", {
                                style: {
                                    color: t.primary_color
                                },
                                className: "font-bold text-sm",
                                children: i.title
                            })]
                        }), l.jsx("div", {
                            className: "flex flex-wrap gap-4 p-4",
                            children: i.items.map(n => l.jsx(wt, {
                                onClick: () => !n.comingSoon && et.get(route(n.route)),
                                label: n.comingSoon ? `${n.label} (Soon)` : n.label,
                                iconSrc: n.iconSrc,
                                icon: n.iconNode,
                                newlyAdded: n.newlyAdded,
                                iconClassName: n.iconClassName
                            }, n.label))
                        })]
                    }, i.title))
                }), l.jsxs("div", {
                    id: "scripts",
                    className: "border rounded-xl overflow-hidden bg-background",
                    children: [l.jsxs("div", {
                        className: "flex items-center justify-between px-4 py-2.5 border-b",
                        style: {
                            backgroundColor: `${t.primary_color}10`
                        },
                        children: [l.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [l.jsx(Ie, {
                                size: 16,
                                style: {
                                    color: t.primary_color
                                }
                            }), l.jsx("p", {
                                style: {
                                    color: t.primary_color
                                },
                                className: "font-bold text-sm",
                                children: "Scripts"
                            })]
                        }), l.jsxs(St, {
                            href: route("services.script.my_purchases"),
                            className: "flex items-center gap-1 text-xs font-medium hover:underline",
                            style: {
                                color: t.primary_color
                            },
                            children: [l.jsx(Xt, {
                                size: 13
                            }), "View Purchases"]
                        })]
                    }), l.jsx("div", {
                        className: "p-4",
                        children: r.length > 0 ? l.jsx("div", {
                            className: "flex flex-wrap gap-4 justify-center sm:justify-start",
                            children: r.map(i => l.jsx(Mn, {
                                script: i
                            }, i.id))
                        }) : l.jsxs("div", {
                            className: "flex items-center gap-2 text-muted-foreground py-8 w-full justify-center",
                            children: [l.jsx(Ie, {
                                size: 20
                            }), l.jsx("p", {
                                children: "No scripts available"
                            })]
                        })
                    })]
                })]
            })]
        })
    };
export {
    qr as
    default
};