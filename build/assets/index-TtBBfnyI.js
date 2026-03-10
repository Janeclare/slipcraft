import {
    r as l,
    j as c
} from "./app-CPSemYgC.js";
import {
    r as h
} from "./index-BIbNlVZ0.js";

function p(e, n) {
    if (typeof e == "function") return e(n);
    e != null && (e.current = n)
}

function d(...e) {
    return n => {
        let r = !1;
        const i = e.map(t => {
            const o = p(t, n);
            return !r && typeof o == "function" && (r = !0), o
        });
        if (r) return () => {
            for (let t = 0; t < i.length; t++) {
                const o = i[t];
                typeof o == "function" ? o() : p(e[t], null)
            }
        }
    }
}

function b(...e) {
    return l.useCallback(d(...e), e)
}
var m = l.forwardRef((e, n) => {
    const {
        children: r,
        ...i
    } = e, t = l.Children.toArray(r), o = t.find(v);
    if (o) {
        const s = o.props.children,
            a = t.map(f => f === o ? l.Children.count(s) > 1 ? l.Children.only(null) : l.isValidElement(s) ? s.props.children : null : f);
        return c.jsx(u, { ...i,
            ref: n,
            children: l.isValidElement(s) ? l.cloneElement(s, void 0, a) : null
        })
    }
    return c.jsx(u, { ...i,
        ref: n,
        children: r
    })
});
m.displayName = "Slot";
var u = l.forwardRef((e, n) => {
    const {
        children: r,
        ...i
    } = e;
    if (l.isValidElement(r)) {
        const t = E(r);
        return l.cloneElement(r, { ...C(i, r.props),
            ref: n ? d(n, t) : t
        })
    }
    return l.Children.count(r) > 1 ? l.Children.only(null) : null
});
u.displayName = "SlotClone";
var y = ({
    children: e
}) => c.jsx(c.Fragment, {
    children: e
});

function v(e) {
    return l.isValidElement(e) && e.type === y
}

function C(e, n) {
    const r = { ...n
    };
    for (const i in n) {
        const t = e[i],
            o = n[i];
        /^on[A-Z]/.test(i) ? t && o ? r[i] = (...a) => {
            o(...a), t(...a)
        } : t && (r[i] = t) : i === "style" ? r[i] = { ...t,
            ...o
        } : i === "className" && (r[i] = [t, o].filter(Boolean).join(" "))
    }
    return { ...e,
        ...r
    }
}

function E(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
        r = n && "isReactWarning" in n && n.isReactWarning;
    return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref") ?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
}
var g = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    j = g.reduce((e, n) => {
        const r = l.forwardRef((i, t) => {
            const {
                asChild: o,
                ...s
            } = i, a = o ? m : n;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), c.jsx(a, { ...s,
                ref: t
            })
        });
        return r.displayName = `Primitive.${n}`, { ...e,
            [n]: r
        }
    }, {});

function w(e, n) {
    e && h.flushSync(() => e.dispatchEvent(n))
}
export {
    j as P, d as c, w as d, b as u
};