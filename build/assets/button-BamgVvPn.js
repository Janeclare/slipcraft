import {
    r as l,
    e as S,
    j as m
} from "./app-CPSemYgC.js";
import {
    a as V,
    c as j
} from "./index-BIbNlVZ0.js";

function b(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function R(...e) {
    return t => {
        let n = !1;
        const i = e.map(r => {
            const o = b(r, t);
            return !n && typeof o == "function" && (n = !0), o
        });
        if (n) return () => {
            for (let r = 0; r < i.length; r++) {
                const o = i[r];
                typeof o == "function" ? o() : b(e[r], null)
            }
        }
    }
}
var N = Symbol.for("react.lazy"),
    p = S[" use ".trim().toString()];

function O(e) {
    return typeof e == "object" && e !== null && "then" in e
}

function C(e) {
    return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === N && "_payload" in e && O(e._payload)
}

function P(e) {
    const t = A(e),
        n = l.forwardRef((i, r) => {
            let {
                children: o,
                ...u
            } = i;
            C(o) && typeof p == "function" && (o = p(o._payload));
            const a = l.Children.toArray(o),
                f = a.find($);
            if (f) {
                const s = f.props.children,
                    c = a.map(d => d === f ? l.Children.count(s) > 1 ? l.Children.only(null) : l.isValidElement(s) ? s.props.children : null : d);
                return m.jsx(t, { ...u,
                    ref: r,
                    children: l.isValidElement(s) ? l.cloneElement(s, void 0, c) : null
                })
            }
            return m.jsx(t, { ...u,
                ref: r,
                children: o
            })
        });
    return n.displayName = `${e}.Slot`, n
}
var k = P("Slot");

function A(e) {
    const t = l.forwardRef((n, i) => {
        let {
            children: r,
            ...o
        } = n;
        if (C(r) && typeof p == "function" && (r = p(r._payload)), l.isValidElement(r)) {
            const u = W(r),
                a = T(o, r.props);
            return r.type !== l.Fragment && (a.ref = i ? R(i, u) : u), l.cloneElement(r, a)
        }
        return l.Children.count(r) > 1 ? l.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var w = Symbol("radix.slottable");

function $(e) {
    return l.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === w
}

function T(e, t) {
    const n = { ...t
    };
    for (const i in t) {
        const r = e[i],
            o = t[i];
        /^on[A-Z]/.test(i) ? r && o ? n[i] = (...a) => {
            const f = o(...a);
            return r(...a), f
        } : r && (n[i] = r) : i === "style" ? n[i] = { ...r,
            ...o
        } : i === "className" && (n[i] = [r, o].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function W(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
const h = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e,
    x = V,
    z = (e, t) => n => {
        var i;
        if (t ?.variants == null) return x(e, n ?.class, n ?.className);
        const {
            variants: r,
            defaultVariants: o
        } = t, u = Object.keys(r).map(s => {
            const c = n ?.[s],
                d = o ?.[s];
            if (c === null) return null;
            const y = h(c) || h(d);
            return r[s][y]
        }), a = n && Object.entries(n).reduce((s, c) => {
            let [d, y] = c;
            return y === void 0 || (s[d] = y), s
        }, {}), f = t == null || (i = t.compoundVariants) === null || i === void 0 ? void 0 : i.reduce((s, c) => {
            let {
                class: d,
                className: y,
                ..._
            } = c;
            return Object.entries(_).every(E => {
                let [g, v] = E;
                return Array.isArray(v) ? v.includes({ ...o,
                    ...a
                }[g]) : { ...o,
                    ...a
                }[g] === v
            }) ? [...s, d, y] : s
        }, []);
        return x(e, u, f, n ?.class, n ?.className)
    },
    B = z("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-input bg-background hover:bg-foreground hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline"
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }),
    I = l.forwardRef(({
        className: e,
        variant: t,
        size: n,
        asChild: i = !1,
        ...r
    }, o) => {
        const u = i ? k : "button";
        return m.jsx(u, {
            className: j(B({
                variant: t,
                size: n,
                className: e
            })),
            ref: o,
            ...r
        })
    });
I.displayName = "Button";
export {
    I as B, z as c
};