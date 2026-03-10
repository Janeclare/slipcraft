import {
    r as s,
    j as n
} from "./app-CPSemYgC.js";
import {
    u as O,
    P as w
} from "./index-TtBBfnyI.js";
import {
    c as A
} from "./index-BUKYvAHl.js";
import {
    c as R
} from "./index-Dc_FVRD7.js";
import {
    u as B
} from "./index-bfqS6E9x.js";
import {
    u as H
} from "./index-C08e2LbI.js";
import {
    u as K
} from "./index-D_XWqw2c.js";
import {
    P as L
} from "./index-BN1_Zxci.js";
import {
    c as j
} from "./index-BIbNlVZ0.js";
import {
    C as q
} from "./check-CsA8fo_3.js";
var E = "Checkbox",
    [z] = A(E),
    [T, X] = z(E),
    N = s.forwardRef((e, c) => {
        const {
            __scopeCheckbox: t,
            name: d,
            checked: p,
            defaultChecked: o,
            required: m,
            disabled: i,
            value: b = "on",
            onCheckedChange: C,
            form: u,
            ...x
        } = e, [l, k] = s.useState(null), v = O(c, r => k(r)), y = s.useRef(!1), P = l ? u || !!l.closest("form") : !0, [f = !1, g] = B({
            prop: p,
            defaultProp: o,
            onChange: C
        }), M = s.useRef(f);
        return s.useEffect(() => {
            const r = l ?.form;
            if (r) {
                const h = () => g(M.current);
                return r.addEventListener("reset", h), () => r.removeEventListener("reset", h)
            }
        }, [l, g]), n.jsxs(T, {
            scope: t,
            state: f,
            disabled: i,
            children: [n.jsx(w.button, {
                type: "button",
                role: "checkbox",
                "aria-checked": a(f) ? "mixed" : f,
                "aria-required": m,
                "data-state": _(f),
                "data-disabled": i ? "" : void 0,
                disabled: i,
                value: b,
                ...x,
                ref: v,
                onKeyDown: R(e.onKeyDown, r => {
                    r.key === "Enter" && r.preventDefault()
                }),
                onClick: R(e.onClick, r => {
                    g(h => a(h) ? !0 : !h), P && (y.current = r.isPropagationStopped(), y.current || r.stopPropagation())
                })
            }), P && n.jsx(F, {
                control: l,
                bubbles: !y.current,
                name: d,
                value: b,
                checked: f,
                required: m,
                disabled: i,
                form: u,
                style: {
                    transform: "translateX(-100%)"
                },
                defaultChecked: a(o) ? !1 : o
            })]
        })
    });
N.displayName = E;
var I = "CheckboxIndicator",
    S = s.forwardRef((e, c) => {
        const {
            __scopeCheckbox: t,
            forceMount: d,
            ...p
        } = e, o = X(I, t);
        return n.jsx(L, {
            present: d || a(o.state) || o.state === !0,
            children: n.jsx(w.span, {
                "data-state": _(o.state),
                "data-disabled": o.disabled ? "" : void 0,
                ...p,
                ref: c,
                style: {
                    pointerEvents: "none",
                    ...e.style
                }
            })
        })
    });
S.displayName = I;
var F = e => {
    const {
        control: c,
        checked: t,
        bubbles: d = !0,
        defaultChecked: p,
        ...o
    } = e, m = s.useRef(null), i = H(t), b = K(c);
    s.useEffect(() => {
        const u = m.current,
            x = window.HTMLInputElement.prototype,
            k = Object.getOwnPropertyDescriptor(x, "checked").set;
        if (i !== t && k) {
            const v = new Event("click", {
                bubbles: d
            });
            u.indeterminate = a(t), k.call(u, a(t) ? !1 : t), u.dispatchEvent(v)
        }
    }, [i, t, d]);
    const C = s.useRef(a(t) ? !1 : t);
    return n.jsx("input", {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: p ?? C.current,
        ...o,
        tabIndex: -1,
        ref: m,
        style: { ...e.style,
            ...b,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    })
};

function a(e) {
    return e === "indeterminate"
}

function _(e) {
    return a(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
var D = N,
    $ = S;
const G = s.forwardRef(({
    className: e,
    ...c
}, t) => n.jsx(D, {
    ref: t,
    className: j("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e),
    ...c,
    children: n.jsx($, {
        className: j("flex items-center justify-center text-current"),
        children: n.jsx(q, {
            className: "h-4 w-4"
        })
    })
}));
G.displayName = D.displayName;
export {
    G as C
};