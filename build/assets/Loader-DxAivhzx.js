import {
    R as at,
    r as le,
    j as m
} from "./app-CPSemYgC.js";
var E = function() {
    return E = Object.assign || function(e) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
            r = arguments[n];
            for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
        }
        return e
    }, E.apply(this, arguments)
};

function ot(t, e, r) {
    if (r || arguments.length === 2)
        for (var n = 0, i = e.length, s; n < i; n++)(s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
    return t.concat(s || Array.prototype.slice.call(e))
}
var v = "-ms-",
    st = "-moz-",
    d = "-webkit-",
    ge = "comm",
    Ct = "rule",
    qt = "decl",
    Xe = "@import",
    me = "@keyframes",
    Je = "@layer",
    ye = Math.abs,
    Kt = String.fromCharCode,
    Mt = Object.assign;

function Qe(t, e) {
    return I(t, 0) ^ 45 ? (((e << 2 ^ I(t, 0)) << 2 ^ I(t, 1)) << 2 ^ I(t, 2)) << 2 ^ I(t, 3) : 0
}

function be(t) {
    return t.trim()
}

function z(t, e) {
    return (t = e.exec(t)) ? t[0] : t
}

function u(t, e, r) {
    return t.replace(e, r)
}

function yt(t, e, r) {
    return t.indexOf(e, r)
}

function I(t, e) {
    return t.charCodeAt(e) | 0
}

function Z(t, e, r) {
    return t.slice(e, r)
}

function T(t) {
    return t.length
}

function ve(t) {
    return t.length
}

function it(t, e) {
    return e.push(t), t
}

function Ve(t, e) {
    return t.map(e).join("")
}

function te(t, e) {
    return t.filter(function(r) {
        return !z(r, e)
    })
}
var jt = 1,
    X = 1,
    we = 0,
    _ = 0,
    j = 0,
    tt = "";

function At(t, e, r, n, i, s, a, o) {
    return {
        value: t,
        root: e,
        parent: r,
        type: n,
        props: i,
        children: s,
        line: jt,
        column: X,
        length: a,
        return: "",
        siblings: o
    }
}

function F(t, e) {
    return Mt(At("", null, null, "", null, null, 0, t.siblings), t, {
        length: -t.length
    }, e)
}

function K(t) {
    for (; t.root;) t = F(t.root, {
        children: [t]
    });
    it(t, t.siblings)
}

function tr() {
    return j
}

function er() {
    return j = _ > 0 ? I(tt, --_) : 0, X--, j === 10 && (X = 1, jt--), j
}

function O() {
    return j = _ < we ? I(tt, _++) : 0, X++, j === 10 && (X = 1, jt++), j
}

function Y() {
    return I(tt, _)
}

function bt() {
    return _
}

function It(t, e) {
    return Z(tt, t, e)
}

function Lt(t) {
    switch (t) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1
    }
    return 0
}

function rr(t) {
    return jt = X = 1, we = T(tt = t), _ = 0, []
}

function nr(t) {
    return tt = "", t
}

function Ot(t) {
    return be(It(_ - 1, Ft(t === 91 ? t + 2 : t === 40 ? t + 1 : t)))
}

function ir(t) {
    for (;
        (j = Y()) && j < 33;) O();
    return Lt(t) > 2 || Lt(j) > 3 ? "" : " "
}

function sr(t, e) {
    for (; --e && O() && !(j < 48 || j > 102 || j > 57 && j < 65 || j > 70 && j < 97););
    return It(t, bt() + (e < 6 && Y() == 32 && O() == 32))
}

function Ft(t) {
    for (; O();) switch (j) {
        case t:
            return _;
        case 34:
        case 39:
            t !== 34 && t !== 39 && Ft(j);
            break;
        case 40:
            t === 41 && Ft(t);
            break;
        case 92:
            O();
            break
    }
    return _
}

function ar(t, e) {
    for (; O() && t + j !== 57;)
        if (t + j === 84 && Y() === 47) break;
    return "/*" + It(e, _ - 1) + "*" + Kt(t === 47 ? t : O())
}

function or(t) {
    for (; !Lt(Y());) O();
    return It(t, _)
}

function cr(t) {
    return nr(vt("", null, null, null, [""], t = rr(t), 0, [0], t))
}

function vt(t, e, r, n, i, s, a, o, c) {
    for (var l = 0, h = 0, g = a, y = 0, p = 0, x = 0, k = 1, N = 1, C = 1, S = 0, w = "", $ = i, A = s, b = n, f = w; N;) switch (x = S, S = O()) {
        case 40:
            if (x != 108 && I(f, g - 1) == 58) {
                yt(f += u(Ot(S), "&", "&\f"), "&\f", ye(l ? o[l - 1] : 0)) != -1 && (C = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            f += Ot(S);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            f += ir(x);
            break;
        case 92:
            f += sr(bt() - 1, 7);
            continue;
        case 47:
            switch (Y()) {
                case 42:
                case 47:
                    it(ur(ar(O(), bt()), e, r, c), c);
                    break;
                default:
                    f += "/"
            }
            break;
        case 123 * k:
            o[l++] = T(f) * C;
        case 125 * k:
        case 59:
        case 0:
            switch (S) {
                case 0:
                case 125:
                    N = 0;
                case 59 + h:
                    C == -1 && (f = u(f, /\f/g, "")), p > 0 && T(f) - g && it(p > 32 ? re(f + ";", n, r, g - 1, c) : re(u(f, " ", "") + ";", n, r, g - 2, c), c);
                    break;
                case 59:
                    f += ";";
                default:
                    if (it(b = ee(f, e, r, l, h, i, o, w, $ = [], A = [], g, s), s), S === 123)
                        if (h === 0) vt(f, e, b, b, $, s, g, o, A);
                        else switch (y === 99 && I(f, 3) === 110 ? 100 : y) {
                            case 100:
                            case 108:
                            case 109:
                            case 115:
                                vt(t, b, b, n && it(ee(t, b, b, 0, 0, i, o, w, i, $ = [], g, A), A), i, A, g, o, n ? $ : A);
                                break;
                            default:
                                vt(f, b, b, b, [""], A, 0, o, A)
                        }
            }
            l = h = p = 0, k = C = 1, w = f = "", g = a;
            break;
        case 58:
            g = 1 + T(f), p = x;
        default:
            if (k < 1) {
                if (S == 123) --k;
                else if (S == 125 && k++ == 0 && er() == 125) continue
            }
            switch (f += Kt(S), S * k) {
                case 38:
                    C = h > 0 ? 1 : (f += "\f", -1);
                    break;
                case 44:
                    o[l++] = (T(f) - 1) * C, C = 1;
                    break;
                case 64:
                    Y() === 45 && (f += Ot(O())), y = Y(), h = g = T(w = f += or(bt())), S++;
                    break;
                case 45:
                    x === 45 && T(f) == 2 && (k = 0)
            }
    }
    return s
}

function ee(t, e, r, n, i, s, a, o, c, l, h, g) {
    for (var y = i - 1, p = i === 0 ? s : [""], x = ve(p), k = 0, N = 0, C = 0; k < n; ++k)
        for (var S = 0, w = Z(t, y + 1, y = ye(N = a[k])), $ = t; S < x; ++S)($ = be(N > 0 ? p[S] + " " + w : u(w, /&\f/g, p[S]))) && (c[C++] = $);
    return At(t, e, r, i === 0 ? Ct : o, c, l, h, g)
}

function ur(t, e, r, n) {
    return At(t, e, r, ge, Kt(tr()), Z(t, 2, -2), 0, n)
}

function re(t, e, r, n, i) {
    return At(t, e, r, qt, Z(t, 0, n), Z(t, n + 1, -1), n, i)
}

function xe(t, e, r) {
    switch (Qe(t, e)) {
        case 5103:
            return d + "print-" + t + t;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return d + t + t;
        case 4789:
            return st + t + t;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return d + t + st + t + v + t + t;
        case 5936:
            switch (I(t, e + 11)) {
                case 114:
                    return d + t + v + u(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
                case 108:
                    return d + t + v + u(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
                case 45:
                    return d + t + v + u(t, /[svh]\w+-[tblr]{2}/, "lr") + t
            }
        case 6828:
        case 4268:
        case 2903:
            return d + t + v + t + t;
        case 6165:
            return d + t + v + "flex-" + t + t;
        case 5187:
            return d + t + u(t, /(\w+).+(:[^]+)/, d + "box-$1$2" + v + "flex-$1$2") + t;
        case 5443:
            return d + t + v + "flex-item-" + u(t, /flex-|-self/g, "") + (z(t, /flex-|baseline/) ? "" : v + "grid-row-" + u(t, /flex-|-self/g, "")) + t;
        case 4675:
            return d + t + v + "flex-line-pack" + u(t, /align-content|flex-|-self/g, "") + t;
        case 5548:
            return d + t + v + u(t, "shrink", "negative") + t;
        case 5292:
            return d + t + v + u(t, "basis", "preferred-size") + t;
        case 6060:
            return d + "box-" + u(t, "-grow", "") + d + t + v + u(t, "grow", "positive") + t;
        case 4554:
            return d + u(t, /([^-])(transform)/g, "$1" + d + "$2") + t;
        case 6187:
            return u(u(u(t, /(zoom-|grab)/, d + "$1"), /(image-set)/, d + "$1"), t, "") + t;
        case 5495:
        case 3959:
            return u(t, /(image-set\([^]*)/, d + "$1$`$1");
        case 4968:
            return u(u(t, /(.+:)(flex-)?(.*)/, d + "box-pack:$3" + v + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + d + t + t;
        case 4200:
            if (!z(t, /flex-|baseline/)) return v + "grid-column-align" + Z(t, e) + t;
            break;
        case 2592:
        case 3360:
            return v + u(t, "template-", "") + t;
        case 4384:
        case 3616:
            return r && r.some(function(n, i) {
                return e = i, z(n.props, /grid-\w+-end/)
            }) ? ~yt(t + (r = r[e].value), "span", 0) ? t : v + u(t, "-start", "") + t + v + "grid-row-span:" + (~yt(r, "span", 0) ? z(r, /\d+/) : +z(r, /\d+/) - +z(t, /\d+/)) + ";" : v + u(t, "-start", "") + t;
        case 4896:
        case 4128:
            return r && r.some(function(n) {
                return z(n.props, /grid-\w+-start/)
            }) ? t : v + u(u(t, "-end", "-span"), "span ", "") + t;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return u(t, /(.+)-inline(.+)/, d + "$1$2") + t;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (T(t) - 1 - e > 6) switch (I(t, e + 1)) {
                case 109:
                    if (I(t, e + 4) !== 45) break;
                case 102:
                    return u(t, /(.+:)(.+)-([^]+)/, "$1" + d + "$2-$3$1" + st + (I(t, e + 3) == 108 ? "$3" : "$2-$3")) + t;
                case 115:
                    return ~yt(t, "stretch", 0) ? xe(u(t, "stretch", "fill-available"), e, r) + t : t
            }
            break;
        case 5152:
        case 5920:
            return u(t, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, i, s, a, o, c, l) {
                return v + i + ":" + s + l + (a ? v + i + "-span:" + (o ? c : +c - +s) + l : "") + t
            });
        case 4949:
            if (I(t, e + 6) === 121) return u(t, ":", ":" + d) + t;
            break;
        case 6444:
            switch (I(t, I(t, 14) === 45 ? 18 : 11)) {
                case 120:
                    return u(t, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + d + (I(t, 14) === 45 ? "inline-" : "") + "box$3$1" + d + "$2$3$1" + v + "$2box$3") + t;
                case 100:
                    return u(t, ":", ":" + v) + t
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return u(t, "scroll-", "scroll-snap-") + t
    }
    return t
}

function St(t, e) {
    for (var r = "", n = 0; n < t.length; n++) r += e(t[n], n, t, e) || "";
    return r
}

function fr(t, e, r, n) {
    switch (t.type) {
        case Je:
            if (t.children.length) break;
        case Xe:
        case qt:
            return t.return = t.return || t.value;
        case ge:
            return "";
        case me:
            return t.return = t.value + "{" + St(t.children, n) + "}";
        case Ct:
            if (!T(t.value = t.props.join(","))) return ""
    }
    return T(r = St(t.children, n)) ? t.return = t.value + "{" + r + "}" : ""
}

function pr(t) {
    var e = ve(t);
    return function(r, n, i, s) {
        for (var a = "", o = 0; o < e; o++) a += t[o](r, n, i, s) || "";
        return a
    }
}

function dr(t) {
    return function(e) {
        e.root || (e = e.return) && t(e)
    }
}

function hr(t, e, r, n) {
    if (t.length > -1 && !t.return) switch (t.type) {
        case qt:
            t.return = xe(t.value, t.length, r);
            return;
        case me:
            return St([F(t, {
                value: u(t.value, "@", "@" + d)
            })], n);
        case Ct:
            if (t.length) return Ve(r = t.props, function(i) {
                switch (z(i, n = /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        K(F(t, {
                            props: [u(i, /:(read-\w+)/, ":" + st + "$1")]
                        })), K(F(t, {
                            props: [i]
                        })), Mt(t, {
                            props: te(r, n)
                        });
                        break;
                    case "::placeholder":
                        K(F(t, {
                            props: [u(i, /:(plac\w+)/, ":" + d + "input-$1")]
                        })), K(F(t, {
                            props: [u(i, /:(plac\w+)/, ":" + st + "$1")]
                        })), K(F(t, {
                            props: [u(i, /:(plac\w+)/, v + "input-$1")]
                        })), K(F(t, {
                            props: [i]
                        })), Mt(t, {
                            props: te(r, n)
                        });
                        break
                }
                return ""
            })
    }
}
var lr = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    R = {},
    J = typeof process < "u" && R !== void 0 && (R.REACT_APP_SC_ATTR || R.SC_ATTR) || "data-styled",
    Se = "active",
    $e = "data-styled-version",
    Et = "6.1.14",
    Ut = `/*!sc*/
`,
    $t = typeof window < "u" && "HTMLElement" in window,
    gr = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && R !== void 0 && R.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && R.REACT_APP_SC_DISABLE_SPEEDY !== "" ? R.REACT_APP_SC_DISABLE_SPEEDY !== "false" && R.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && R !== void 0 && R.SC_DISABLE_SPEEDY !== void 0 && R.SC_DISABLE_SPEEDY !== "" && R.SC_DISABLE_SPEEDY !== "false" && R.SC_DISABLE_SPEEDY),
    Nt = Object.freeze([]),
    Q = Object.freeze({});

function mr(t, e, r) {
    return r === void 0 && (r = Q), t.theme !== r.theme && t.theme || e || r.theme
}
var ke = new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]),
    yr = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    br = /(^-|-$)/g;

function ne(t) {
    return t.replace(yr, "-").replace(br, "")
}
var vr = /(a)(d)/gi,
    gt = 52,
    ie = function(t) {
        return String.fromCharCode(t + (t > 25 ? 39 : 97))
    };

function Gt(t) {
    var e, r = "";
    for (e = Math.abs(t); e > gt; e = e / gt | 0) r = ie(e % gt) + r;
    return (ie(e % gt) + r).replace(vr, "$1-$2")
}
var Tt, Ce = 5381,
    U = function(t, e) {
        for (var r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
        return t
    },
    je = function(t) {
        return U(Ce, t)
    };

function Ae(t) {
    return Gt(je(t) >>> 0)
}

function wr(t) {
    return t.displayName || t.name || "Component"
}

function Dt(t) {
    return typeof t == "string" && !0
}
var Ie = typeof Symbol == "function" && Symbol.for,
    Ee = Ie ? Symbol.for("react.memo") : 60115,
    xr = Ie ? Symbol.for("react.forward_ref") : 60112,
    Sr = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    },
    $r = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    },
    Ne = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    kr = ((Tt = {})[xr] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, Tt[Ee] = Ne, Tt);

function se(t) {
    return ("type" in (e = t) && e.type.$$typeof) === Ee ? Ne : "$$typeof" in t ? kr[t.$$typeof] : Sr;
    var e
}
var Cr = Object.defineProperty,
    jr = Object.getOwnPropertyNames,
    ae = Object.getOwnPropertySymbols,
    Ar = Object.getOwnPropertyDescriptor,
    Ir = Object.getPrototypeOf,
    oe = Object.prototype;

function Re(t, e, r) {
    if (typeof e != "string") {
        if (oe) {
            var n = Ir(e);
            n && n !== oe && Re(t, n, r)
        }
        var i = jr(e);
        ae && (i = i.concat(ae(e)));
        for (var s = se(t), a = se(e), o = 0; o < i.length; ++o) {
            var c = i[o];
            if (!(c in $r || r && r[c] || a && c in a || s && c in s)) {
                var l = Ar(e, c);
                try {
                    Cr(t, c, l)
                } catch {}
            }
        }
    }
    return t
}

function V(t) {
    return typeof t == "function"
}

function Zt(t) {
    return typeof t == "object" && "styledComponentId" in t
}

function B(t, e) {
    return t && e ? "".concat(t, " ").concat(e) : t || e || ""
}

function Bt(t, e) {
    if (t.length === 0) return "";
    for (var r = t[0], n = 1; n < t.length; n++) r += t[n];
    return r
}

function ct(t) {
    return t !== null && typeof t == "object" && t.constructor.name === Object.name && !("props" in t && t.$$typeof)
}

function Yt(t, e, r) {
    if (r === void 0 && (r = !1), !r && !ct(t) && !Array.isArray(t)) return e;
    if (Array.isArray(e))
        for (var n = 0; n < e.length; n++) t[n] = Yt(t[n], e[n]);
    else if (ct(e))
        for (var n in e) t[n] = Yt(t[n], e[n]);
    return t
}

function Xt(t, e) {
    Object.defineProperty(t, "toString", {
        value: e
    })
}

function ut(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t, " for more information.").concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : ""))
}
var Er = (function() {
        function t(e) {
            this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
        }
        return t.prototype.indexOfGroup = function(e) {
            for (var r = 0, n = 0; n < e; n++) r += this.groupSizes[n];
            return r
        }, t.prototype.insertRules = function(e, r) {
            if (e >= this.groupSizes.length) {
                for (var n = this.groupSizes, i = n.length, s = i; e >= s;)
                    if ((s <<= 1) < 0) throw ut(16, "".concat(e));
                this.groupSizes = new Uint32Array(s), this.groupSizes.set(n), this.length = s;
                for (var a = i; a < s; a++) this.groupSizes[a] = 0
            }
            for (var o = this.indexOfGroup(e + 1), c = (a = 0, r.length); a < c; a++) this.tag.insertRule(o, r[a]) && (this.groupSizes[e]++, o++)
        }, t.prototype.clearGroup = function(e) {
            if (e < this.length) {
                var r = this.groupSizes[e],
                    n = this.indexOfGroup(e),
                    i = n + r;
                this.groupSizes[e] = 0;
                for (var s = n; s < i; s++) this.tag.deleteRule(n)
            }
        }, t.prototype.getGroup = function(e) {
            var r = "";
            if (e >= this.length || this.groupSizes[e] === 0) return r;
            for (var n = this.groupSizes[e], i = this.indexOfGroup(e), s = i + n, a = i; a < s; a++) r += "".concat(this.tag.getRule(a)).concat(Ut);
            return r
        }, t
    })(),
    wt = new Map,
    kt = new Map,
    xt = 1,
    mt = function(t) {
        if (wt.has(t)) return wt.get(t);
        for (; kt.has(xt);) xt++;
        var e = xt++;
        return wt.set(t, e), kt.set(e, t), e
    },
    Nr = function(t, e) {
        xt = e + 1, wt.set(t, e), kt.set(e, t)
    },
    Rr = "style[".concat(J, "][").concat($e, '="').concat(Et, '"]'),
    _r = new RegExp("^".concat(J, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
    Pr = function(t, e, r) {
        for (var n, i = r.split(","), s = 0, a = i.length; s < a; s++)(n = i[s]) && t.registerName(e, n)
    },
    Or = function(t, e) {
        for (var r, n = ((r = e.textContent) !== null && r !== void 0 ? r : "").split(Ut), i = [], s = 0, a = n.length; s < a; s++) {
            var o = n[s].trim();
            if (o) {
                var c = o.match(_r);
                if (c) {
                    var l = 0 | parseInt(c[1], 10),
                        h = c[2];
                    l !== 0 && (Nr(h, l), Pr(t, h, c[3]), t.getTag().insertRules(l, i)), i.length = 0
                } else i.push(o)
            }
        }
    },
    ce = function(t) {
        for (var e = document.querySelectorAll(Rr), r = 0, n = e.length; r < n; r++) {
            var i = e[r];
            i && i.getAttribute(J) !== Se && (Or(t, i), i.parentNode && i.parentNode.removeChild(i))
        }
    };

function Tr() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
}
var _e = function(t) {
        var e = document.head,
            r = t || e,
            n = document.createElement("style"),
            i = (function(o) {
                var c = Array.from(o.querySelectorAll("style[".concat(J, "]")));
                return c[c.length - 1]
            })(r),
            s = i !== void 0 ? i.nextSibling : null;
        n.setAttribute(J, Se), n.setAttribute($e, Et);
        var a = Tr();
        return a && n.setAttribute("nonce", a), r.insertBefore(n, s), n
    },
    Dr = (function() {
        function t(e) {
            this.element = _e(e), this.element.appendChild(document.createTextNode("")), this.sheet = (function(r) {
                if (r.sheet) return r.sheet;
                for (var n = document.styleSheets, i = 0, s = n.length; i < s; i++) {
                    var a = n[i];
                    if (a.ownerNode === r) return a
                }
                throw ut(17)
            })(this.element), this.length = 0
        }
        return t.prototype.insertRule = function(e, r) {
            try {
                return this.sheet.insertRule(r, e), this.length++, !0
            } catch {
                return !1
            }
        }, t.prototype.deleteRule = function(e) {
            this.sheet.deleteRule(e), this.length--
        }, t.prototype.getRule = function(e) {
            var r = this.sheet.cssRules[e];
            return r && r.cssText ? r.cssText : ""
        }, t
    })(),
    zr = (function() {
        function t(e) {
            this.element = _e(e), this.nodes = this.element.childNodes, this.length = 0
        }
        return t.prototype.insertRule = function(e, r) {
            if (e <= this.length && e >= 0) {
                var n = document.createTextNode(r);
                return this.element.insertBefore(n, this.nodes[e] || null), this.length++, !0
            }
            return !1
        }, t.prototype.deleteRule = function(e) {
            this.element.removeChild(this.nodes[e]), this.length--
        }, t.prototype.getRule = function(e) {
            return e < this.length ? this.nodes[e].textContent : ""
        }, t
    })(),
    Mr = (function() {
        function t(e) {
            this.rules = [], this.length = 0
        }
        return t.prototype.insertRule = function(e, r) {
            return e <= this.length && (this.rules.splice(e, 0, r), this.length++, !0)
        }, t.prototype.deleteRule = function(e) {
            this.rules.splice(e, 1), this.length--
        }, t.prototype.getRule = function(e) {
            return e < this.length ? this.rules[e] : ""
        }, t
    })(),
    ue = $t,
    Lr = {
        isServer: !$t,
        useCSSOMInjection: !gr
    },
    Pe = (function() {
        function t(e, r, n) {
            e === void 0 && (e = Q), r === void 0 && (r = {});
            var i = this;
            this.options = E(E({}, Lr), e), this.gs = r, this.names = new Map(n), this.server = !!e.isServer, !this.server && $t && ue && (ue = !1, ce(this)), Xt(this, function() {
                return (function(s) {
                    for (var a = s.getTag(), o = a.length, c = "", l = function(g) {
                            var y = (function(C) {
                                return kt.get(C)
                            })(g);
                            if (y === void 0) return "continue";
                            var p = s.names.get(y),
                                x = a.getGroup(g);
                            if (p === void 0 || !p.size || x.length === 0) return "continue";
                            var k = "".concat(J, ".g").concat(g, '[id="').concat(y, '"]'),
                                N = "";
                            p !== void 0 && p.forEach(function(C) {
                                C.length > 0 && (N += "".concat(C, ","))
                            }), c += "".concat(x).concat(k, '{content:"').concat(N, '"}').concat(Ut)
                        }, h = 0; h < o; h++) l(h);
                    return c
                })(i)
            })
        }
        return t.registerId = function(e) {
            return mt(e)
        }, t.prototype.rehydrate = function() {
            !this.server && $t && ce(this)
        }, t.prototype.reconstructWithOptions = function(e, r) {
            return r === void 0 && (r = !0), new t(E(E({}, this.options), e), this.gs, r && this.names || void 0)
        }, t.prototype.allocateGSInstance = function(e) {
            return this.gs[e] = (this.gs[e] || 0) + 1
        }, t.prototype.getTag = function() {
            return this.tag || (this.tag = (e = (function(r) {
                var n = r.useCSSOMInjection,
                    i = r.target;
                return r.isServer ? new Mr(i) : n ? new Dr(i) : new zr(i)
            })(this.options), new Er(e)));
            var e
        }, t.prototype.hasNameForId = function(e, r) {
            return this.names.has(e) && this.names.get(e).has(r)
        }, t.prototype.registerName = function(e, r) {
            if (mt(e), this.names.has(e)) this.names.get(e).add(r);
            else {
                var n = new Set;
                n.add(r), this.names.set(e, n)
            }
        }, t.prototype.insertRules = function(e, r, n) {
            this.registerName(e, r), this.getTag().insertRules(mt(e), n)
        }, t.prototype.clearNames = function(e) {
            this.names.has(e) && this.names.get(e).clear()
        }, t.prototype.clearRules = function(e) {
            this.getTag().clearGroup(mt(e)), this.clearNames(e)
        }, t.prototype.clearTag = function() {
            this.tag = void 0
        }, t
    })(),
    Fr = /&/g,
    Gr = /^\s*\/\/.*$/gm;

function Oe(t, e) {
    return t.map(function(r) {
        return r.type === "rule" && (r.value = "".concat(e, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(e, " ")), r.props = r.props.map(function(n) {
            return "".concat(e, " ").concat(n)
        })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Oe(r.children, e)), r
    })
}

function Br(t) {
    var e, r, n, i = Q,
        s = i.options,
        a = s === void 0 ? Q : s,
        o = i.plugins,
        c = o === void 0 ? Nt : o,
        l = function(y, p, x) {
            return x.startsWith(r) && x.endsWith(r) && x.replaceAll(r, "").length > 0 ? ".".concat(e) : y
        },
        h = c.slice();
    h.push(function(y) {
        y.type === Ct && y.value.includes("&") && (y.props[0] = y.props[0].replace(Fr, r).replace(n, l))
    }), a.prefix && h.push(hr), h.push(fr);
    var g = function(y, p, x, k) {
        p === void 0 && (p = ""), x === void 0 && (x = ""), k === void 0 && (k = "&"), e = k, r = p, n = new RegExp("\\".concat(r, "\\b"), "g");
        var N = y.replace(Gr, ""),
            C = cr(x || p ? "".concat(x, " ").concat(p, " { ").concat(N, " }") : N);
        a.namespace && (C = Oe(C, a.namespace));
        var S = [];
        return St(C, pr(h.concat(dr(function(w) {
            return S.push(w)
        })))), S
    };
    return g.hash = c.length ? c.reduce(function(y, p) {
        return p.name || ut(15), U(y, p.name)
    }, Ce).toString() : "", g
}
var Yr = new Pe,
    Wt = Br(),
    Te = at.createContext({
        shouldForwardProp: void 0,
        styleSheet: Yr,
        stylis: Wt
    });
Te.Consumer;
at.createContext(void 0);

function fe() {
    return le.useContext(Te)
}
var De = (function() {
        function t(e, r) {
            var n = this;
            this.inject = function(i, s) {
                s === void 0 && (s = Wt);
                var a = n.name + s.hash;
                i.hasNameForId(n.id, a) || i.insertRules(n.id, a, s(n.rules, a, "@keyframes"))
            }, this.name = e, this.id = "sc-keyframes-".concat(e), this.rules = r, Xt(this, function() {
                throw ut(12, String(n.name))
            })
        }
        return t.prototype.getName = function(e) {
            return e === void 0 && (e = Wt), this.name + e.hash
        }, t
    })(),
    Wr = function(t) {
        return t >= "A" && t <= "Z"
    };

function pe(t) {
    for (var e = "", r = 0; r < t.length; r++) {
        var n = t[r];
        if (r === 1 && n === "-" && t[0] === "-") return t;
        Wr(n) ? e += "-" + n.toLowerCase() : e += n
    }
    return e.startsWith("ms-") ? "-" + e : e
}
var ze = function(t) {
        return t == null || t === !1 || t === ""
    },
    Me = function(t) {
        var e, r, n = [];
        for (var i in t) {
            var s = t[i];
            t.hasOwnProperty(i) && !ze(s) && (Array.isArray(s) && s.isCss || V(s) ? n.push("".concat(pe(i), ":"), s, ";") : ct(s) ? n.push.apply(n, ot(ot(["".concat(i, " {")], Me(s), !1), ["}"], !1)) : n.push("".concat(pe(i), ": ").concat((e = i, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || e in lr || e.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")))
        }
        return n
    };

function W(t, e, r, n) {
    if (ze(t)) return [];
    if (Zt(t)) return [".".concat(t.styledComponentId)];
    if (V(t)) {
        if (!V(s = t) || s.prototype && s.prototype.isReactComponent || !e) return [t];
        var i = t(e);
        return W(i, e, r, n)
    }
    var s;
    return t instanceof De ? r ? (t.inject(r, n), [t.getName(n)]) : [t] : ct(t) ? Me(t) : Array.isArray(t) ? Array.prototype.concat.apply(Nt, t.map(function(a) {
        return W(a, e, r, n)
    })) : [t.toString()]
}

function Hr(t) {
    for (var e = 0; e < t.length; e += 1) {
        var r = t[e];
        if (V(r) && !Zt(r)) return !1
    }
    return !0
}
var qr = je(Et),
    Kr = (function() {
        function t(e, r, n) {
            this.rules = e, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && Hr(e), this.componentId = r, this.baseHash = U(qr, r), this.baseStyle = n, Pe.registerId(r)
        }
        return t.prototype.generateAndInjectStyles = function(e, r, n) {
            var i = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e, r, n) : "";
            if (this.isStatic && !n.hash)
                if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) i = B(i, this.staticRulesId);
                else {
                    var s = Bt(W(this.rules, e, r, n)),
                        a = Gt(U(this.baseHash, s) >>> 0);
                    if (!r.hasNameForId(this.componentId, a)) {
                        var o = n(s, ".".concat(a), void 0, this.componentId);
                        r.insertRules(this.componentId, a, o)
                    }
                    i = B(i, a), this.staticRulesId = a
                }
            else {
                for (var c = U(this.baseHash, n.hash), l = "", h = 0; h < this.rules.length; h++) {
                    var g = this.rules[h];
                    if (typeof g == "string") l += g;
                    else if (g) {
                        var y = Bt(W(g, e, r, n));
                        c = U(c, y + h), l += y
                    }
                }
                if (l) {
                    var p = Gt(c >>> 0);
                    r.hasNameForId(this.componentId, p) || r.insertRules(this.componentId, p, n(l, ".".concat(p), void 0, this.componentId)), i = B(i, p)
                }
            }
            return i
        }, t
    })(),
    Le = at.createContext(void 0);
Le.Consumer;
var zt = {};

function Ur(t, e, r) {
    var n = Zt(t),
        i = t,
        s = !Dt(t),
        a = e.attrs,
        o = a === void 0 ? Nt : a,
        c = e.componentId,
        l = c === void 0 ? (function($, A) {
            var b = typeof $ != "string" ? "sc" : ne($);
            zt[b] = (zt[b] || 0) + 1;
            var f = "".concat(b, "-").concat(Ae(Et + b + zt[b]));
            return A ? "".concat(A, "-").concat(f) : f
        })(e.displayName, e.parentComponentId) : c,
        h = e.displayName,
        g = h === void 0 ? (function($) {
            return Dt($) ? "styled.".concat($) : "Styled(".concat(wr($), ")")
        })(t) : h,
        y = e.displayName && e.componentId ? "".concat(ne(e.displayName), "-").concat(e.componentId) : e.componentId || l,
        p = n && i.attrs ? i.attrs.concat(o).filter(Boolean) : o,
        x = e.shouldForwardProp;
    if (n && i.shouldForwardProp) {
        var k = i.shouldForwardProp;
        if (e.shouldForwardProp) {
            var N = e.shouldForwardProp;
            x = function($, A) {
                return k($, A) && N($, A)
            }
        } else x = k
    }
    var C = new Kr(r, y, n ? i.componentStyle : void 0);

    function S($, A) {
        return (function(b, f, q) {
            var ft = b.attrs,
                Ye = b.componentStyle,
                We = b.defaultProps,
                He = b.foldedComponentIds,
                qe = b.styledComponentId,
                Ke = b.target,
                Ue = at.useContext(Le),
                Ze = fe(),
                Rt = b.shouldForwardProp || Ze.shouldForwardProp,
                Qt = mr(f, Ue, We) || Q,
                D = (function(dt, rt, ht) {
                    for (var nt, G = E(E({}, rt), {
                            className: void 0,
                            theme: ht
                        }), Pt = 0; Pt < dt.length; Pt += 1) {
                        var lt = V(nt = dt[Pt]) ? nt(G) : nt;
                        for (var L in lt) G[L] = L === "className" ? B(G[L], lt[L]) : L === "style" ? E(E({}, G[L]), lt[L]) : lt[L]
                    }
                    return rt.className && (G.className = B(G.className, rt.className)), G
                })(ft, f, Qt),
                pt = D.as || Ke,
                et = {};
            for (var M in D) D[M] === void 0 || M[0] === "$" || M === "as" || M === "theme" && D.theme === Qt || (M === "forwardedAs" ? et.as = D.forwardedAs : Rt && !Rt(M, pt) || (et[M] = D[M]));
            var Vt = (function(dt, rt) {
                    var ht = fe(),
                        nt = dt.generateAndInjectStyles(rt, ht.styleSheet, ht.stylis);
                    return nt
                })(Ye, D),
                _t = B(He, qe);
            return Vt && (_t += " " + Vt), D.className && (_t += " " + D.className), et[Dt(pt) && !ke.has(pt) ? "class" : "className"] = _t, q && (et.ref = q), le.createElement(pt, et)
        })(w, $, A)
    }
    S.displayName = g;
    var w = at.forwardRef(S);
    return w.attrs = p, w.componentStyle = C, w.displayName = g, w.shouldForwardProp = x, w.foldedComponentIds = n ? B(i.foldedComponentIds, i.styledComponentId) : "", w.styledComponentId = y, w.target = n ? i.target : t, Object.defineProperty(w, "defaultProps", {
        get: function() {
            return this._foldedDefaultProps
        },
        set: function($) {
            this._foldedDefaultProps = n ? (function(A) {
                for (var b = [], f = 1; f < arguments.length; f++) b[f - 1] = arguments[f];
                for (var q = 0, ft = b; q < ft.length; q++) Yt(A, ft[q], !0);
                return A
            })({}, i.defaultProps, $) : $
        }
    }), Xt(w, function() {
        return ".".concat(w.styledComponentId)
    }), s && Re(w, t, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0
    }), w
}

function de(t, e) {
    for (var r = [t[0]], n = 0, i = e.length; n < i; n += 1) r.push(e[n], t[n + 1]);
    return r
}
var he = function(t) {
    return Object.assign(t, {
        isCss: !0
    })
};

function Fe(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    if (V(t) || ct(t)) return he(W(de(Nt, ot([t], e, !0))));
    var n = t;
    return e.length === 0 && n.length === 1 && typeof n[0] == "string" ? W(n) : he(W(de(n, e)))
}

function Ht(t, e, r) {
    if (r === void 0 && (r = Q), !e) throw ut(1, e);
    var n = function(i) {
        for (var s = [], a = 1; a < arguments.length; a++) s[a - 1] = arguments[a];
        return t(e, r, Fe.apply(void 0, ot([i], s, !1)))
    };
    return n.attrs = function(i) {
        return Ht(t, e, E(E({}, r), {
            attrs: Array.prototype.concat(r.attrs, i).filter(Boolean)
        }))
    }, n.withConfig = function(i) {
        return Ht(t, e, E(E({}, r), i))
    }, n
}
var Ge = function(t) {
        return Ht(Ur, t)
    },
    H = Ge;
ke.forEach(function(t) {
    H[t] = Ge(t)
});

function Jt(t) {
    for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    var n = Bt(Fe.apply(void 0, ot([t], e, !1))),
        i = Ae(n);
    return new De(i, n)
}
const Zr = "#4fa94d",
    Be = {
        "aria-busy": !0,
        role: "progressbar"
    },
    Xr = H.div `
  display: ${t=>t.$visible?"flex":"none"};
`,
    Jr = "http://www.w3.org/2000/svg",
    P = 242.776657104492,
    Qr = 1.6,
    Vr = Jt `
12.5% {
  stroke-dasharray: ${P*.14}px, ${P}px;
  stroke-dashoffset: -${P*.11}px;
}
43.75% {
  stroke-dasharray: ${P*.35}px, ${P}px;
  stroke-dashoffset: -${P*.35}px;
}
100% {
  stroke-dasharray: ${P*.01}px, ${P}px;
  stroke-dashoffset: -${P*.99}px;
}
`;
H.path `
  stroke-dasharray: ${P*.01}px, ${P};
  stroke-dashoffset: 0;
  animation: ${Vr} ${Qr}s linear infinite;
`;
const tn = Jt `
to {
   transform: rotate(360deg);
 }
`;
H.svg `
  animation: ${tn} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;
H.polyline `
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;
const en = ({
        height: t = 80,
        width: e = 80,
        radius: r = 9,
        color: n = Zr,
        ariaLabel: i = "three-dots-loading",
        wrapperStyle: s,
        wrapperClass: a,
        visible: o = !0
    }) => m.jsx(Xr, {
        style: s,
        $visible: o,
        className: a,
        "data-testid": "three-dots-loading",
        "aria-label": i,
        ...Be,
        children: m.jsxs("svg", {
            width: e,
            height: t,
            viewBox: "0 0 120 30",
            xmlns: Jr,
            fill: n,
            "data-testid": "three-dots-svg",
            children: [m.jsxs("circle", {
                cx: "15",
                cy: "15",
                r: Number(r) + 6,
                children: [m.jsx("animate", {
                    attributeName: "r",
                    from: "15",
                    to: "15",
                    begin: "0s",
                    dur: "0.8s",
                    values: "15;9;15",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                }), m.jsx("animate", {
                    attributeName: "fill-opacity",
                    from: "1",
                    to: "1",
                    begin: "0s",
                    dur: "0.8s",
                    values: "1;.5;1",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                })]
            }), m.jsxs("circle", {
                cx: "60",
                cy: "15",
                r,
                attributeName: "fill-opacity",
                from: "1",
                to: "0.3",
                children: [m.jsx("animate", {
                    attributeName: "r",
                    from: "9",
                    to: "9",
                    begin: "0s",
                    dur: "0.8s",
                    values: "9;15;9",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                }), m.jsx("animate", {
                    attributeName: "fill-opacity",
                    from: "0.5",
                    to: "0.5",
                    begin: "0s",
                    dur: "0.8s",
                    values: ".5;1;.5",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                })]
            }), m.jsxs("circle", {
                cx: "105",
                cy: "15",
                r: Number(r) + 6,
                children: [m.jsx("animate", {
                    attributeName: "r",
                    from: "15",
                    to: "15",
                    begin: "0s",
                    dur: "0.8s",
                    values: "15;9;15",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                }), m.jsx("animate", {
                    attributeName: "fill-opacity",
                    from: "1",
                    to: "1",
                    begin: "0s",
                    dur: "0.8s",
                    values: "1;.5;1",
                    calcMode: "linear",
                    repeatCount: "indefinite"
                })]
            })]
        })
    }),
    rn = Jt `
to {
   stroke-dashoffset: 136;
 }
`;
H.polygon `
  stroke-dasharray: 17;
  animation: ${rn} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
H.svg `
  transform-origin: 50% 65%;
`;
const sn = ({
        visible: t = !0,
        width: e = "80",
        height: r = "80",
        colors: n = ["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"],
        wrapperClass: i = "",
        wrapperStyle: s = {},
        ariaLabel: a = "color-ring-loading"
    }) => t ? m.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: e,
        height: r,
        viewBox: "0 0 100 100",
        preserveAspectRatio: "xMidYMid",
        className: i,
        style: s,
        "aria-label": a,
        "data-testid": "color-ring-svg",
        ...Be,
        children: [m.jsx("defs", {
            children: m.jsx("mask", {
                id: "ldio-4offds5dlws-mask",
                children: m.jsx("circle", {
                    cx: "50",
                    cy: "50",
                    r: "26",
                    stroke: "#fff",
                    strokeLinecap: "round",
                    strokeDasharray: "122.52211349000194 40.840704496667314",
                    strokeWidth: "9",
                    transform: "rotate(198.018 50 50)",
                    children: m.jsx("animateTransform", {
                        attributeName: "transform",
                        type: "rotate",
                        values: "0 50 50;360 50 50",
                        keyTimes: "0;1",
                        dur: "1s",
                        repeatCount: "indefinite"
                    })
                })
            })
        }), m.jsxs("g", {
            mask: "url(#ldio-4offds5dlws-mask)",
            children: [m.jsx("rect", {
                x: "14.5",
                y: "0",
                width: "15",
                height: "100",
                fill: n[0],
                children: m.jsx("animate", {
                    attributeName: "fill",
                    values: n.join(";").toString(),
                    keyTimes: "0;0.25;0.5;0.75;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "-0.8s"
                })
            }), m.jsx("rect", {
                x: "28.5",
                y: "0",
                width: "15",
                height: "100",
                fill: n[1],
                children: m.jsx("animate", {
                    attributeName: "fill",
                    values: n.join(";").toString(),
                    keyTimes: "0;0.25;0.5;0.75;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "-0.6s"
                })
            }), m.jsx("rect", {
                x: "42.5",
                y: "0",
                width: "15",
                height: "100",
                fill: n[2],
                children: m.jsx("animate", {
                    attributeName: "fill",
                    values: n.join(";").toString(),
                    keyTimes: "0;0.25;0.5;0.75;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "-0.4s"
                })
            }), m.jsx("rect", {
                x: "56.5",
                y: "0",
                width: "15",
                height: "100",
                fill: n[3],
                children: m.jsx("animate", {
                    attributeName: "fill",
                    values: n.join(";").toString(),
                    keyTimes: "0;0.25;0.5;0.75;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "-0.2s"
                })
            }), m.jsx("rect", {
                x: "70.5",
                y: "0",
                width: "15",
                height: "100",
                fill: n[4],
                children: m.jsx("animate", {
                    attributeName: "fill",
                    values: n.join(";").toString(),
                    keyTimes: "0;0.25;0.5;0.75;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                    begin: "0s"
                })
            })]
        })]
    }) : null,
    an = ({
        visible: t,
        height: e = "40",
        width: r = "40",
        color: n = "#ffffff"
    }) => m.jsx(en, {
        visible: t,
        height: e,
        width: r,
        color: n,
        radius: "9",
        ariaLabel: "three-dots-loading"
    });
export {
    sn as $, an as L
};