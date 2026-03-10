import {
    r as d,
    j as a,
    R as u
} from "./app-CPSemYgC.js";
import {
    c as K,
    a as pe
} from "./index-BUKYvAHl.js";
import {
    c as fe
} from "./index-SHdw-lpr.js";
import {
    P as I,
    u as F
} from "./index-TtBBfnyI.js";
import {
    c as z
} from "./index-Dc_FVRD7.js";
import {
    u as D
} from "./index-bfqS6E9x.js";
import {
    P as ue
} from "./index-BN1_Zxci.js";
import {
    u as B
} from "./index-B-GRoRe2.js";
import {
    u as me
} from "./index-CChplcHQ.js";
import {
    c as T
} from "./index-BIbNlVZ0.js";
import {
    C as ve
} from "./chevron-down-DGcLvqVu.js";
var k = "Collapsible",
    [Ce, U] = K(k),
    [xe, M] = Ce(k),
    q = d.forwardRef((e, r) => {
        const {
            __scopeCollapsible: o,
            open: t,
            defaultOpen: i,
            disabled: n,
            onOpenChange: s,
            ...l
        } = e, [p = !1, f] = D({
            prop: t,
            defaultProp: i,
            onChange: s
        });
        return a.jsx(xe, {
            scope: o,
            disabled: n,
            contentId: B(),
            open: p,
            onOpenToggle: d.useCallback(() => f(m => !m), [f]),
            children: a.jsx(I.div, {
                "data-state": V(p),
                "data-disabled": n ? "" : void 0,
                ...l,
                ref: r
            })
        })
    });
q.displayName = k;
var Y = "CollapsibleTrigger",
    J = d.forwardRef((e, r) => {
        const {
            __scopeCollapsible: o,
            ...t
        } = e, i = M(Y, o);
        return a.jsx(I.button, {
            type: "button",
            "aria-controls": i.contentId,
            "aria-expanded": i.open || !1,
            "data-state": V(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            disabled: i.disabled,
            ...t,
            ref: r,
            onClick: z(e.onClick, i.onOpenToggle)
        })
    });
J.displayName = Y;
var $ = "CollapsibleContent",
    Q = d.forwardRef((e, r) => {
        const {
            forceMount: o,
            ...t
        } = e, i = M($, e.__scopeCollapsible);
        return a.jsx(ue, {
            present: o || i.open,
            children: ({
                present: n
            }) => a.jsx(be, { ...t,
                ref: r,
                present: n
            })
        })
    });
Q.displayName = $;
var be = d.forwardRef((e, r) => {
    const {
        __scopeCollapsible: o,
        present: t,
        children: i,
        ...n
    } = e, s = M($, o), [l, p] = d.useState(t), f = d.useRef(null), m = F(r, f), v = d.useRef(0), h = v.current, x = d.useRef(0), w = x.current, b = s.open || l, g = d.useRef(b), A = d.useRef(void 0);
    return d.useEffect(() => {
        const c = requestAnimationFrame(() => g.current = !1);
        return () => cancelAnimationFrame(c)
    }, []), pe(() => {
        const c = f.current;
        if (c) {
            A.current = A.current || {
                transitionDuration: c.style.transitionDuration,
                animationName: c.style.animationName
            }, c.style.transitionDuration = "0s", c.style.animationName = "none";
            const R = c.getBoundingClientRect();
            v.current = R.height, x.current = R.width, g.current || (c.style.transitionDuration = A.current.transitionDuration, c.style.animationName = A.current.animationName), p(t)
        }
    }, [s.open, t]), a.jsx(I.div, {
        "data-state": V(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        id: s.contentId,
        hidden: !b,
        ...n,
        ref: m,
        style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": w ? `${w}px` : void 0,
            ...e.style
        },
        children: b && i
    })
});

function V(e) {
    return e ? "open" : "closed"
}
var ge = q,
    Ae = J,
    he = Q,
    C = "Accordion",
    Re = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
    [H, Ie, we] = fe(C),
    [_] = K(C, [we, U]),
    L = U(),
    W = u.forwardRef((e, r) => {
        const {
            type: o,
            ...t
        } = e, i = t, n = t;
        return a.jsx(H.Provider, {
            scope: e.__scopeAccordion,
            children: o === "multiple" ? a.jsx(Pe, { ...n,
                ref: r
            }) : a.jsx(ye, { ...i,
                ref: r
            })
        })
    });
W.displayName = C;
var [X, Ne] = _(C), [Z, _e] = _(C, {
    collapsible: !1
}), ye = u.forwardRef((e, r) => {
    const {
        value: o,
        defaultValue: t,
        onValueChange: i = () => {},
        collapsible: n = !1,
        ...s
    } = e, [l, p] = D({
        prop: o,
        defaultProp: t,
        onChange: i
    });
    return a.jsx(X, {
        scope: e.__scopeAccordion,
        value: l ? [l] : [],
        onItemOpen: p,
        onItemClose: u.useCallback(() => n && p(""), [n, p]),
        children: a.jsx(Z, {
            scope: e.__scopeAccordion,
            collapsible: n,
            children: a.jsx(ee, { ...s,
                ref: r
            })
        })
    })
}), Pe = u.forwardRef((e, r) => {
    const {
        value: o,
        defaultValue: t,
        onValueChange: i = () => {},
        ...n
    } = e, [s = [], l] = D({
        prop: o,
        defaultProp: t,
        onChange: i
    }), p = u.useCallback(m => l((v = []) => [...v, m]), [l]), f = u.useCallback(m => l((v = []) => v.filter(h => h !== m)), [l]);
    return a.jsx(X, {
        scope: e.__scopeAccordion,
        value: s,
        onItemOpen: p,
        onItemClose: f,
        children: a.jsx(Z, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: a.jsx(ee, { ...n,
                ref: r
            })
        })
    })
}), [je, y] = _(C), ee = u.forwardRef((e, r) => {
    const {
        __scopeAccordion: o,
        disabled: t,
        dir: i,
        orientation: n = "vertical",
        ...s
    } = e, l = u.useRef(null), p = F(l, r), f = Ie(o), v = me(i) === "ltr", h = z(e.onKeyDown, x => {
        if (!Re.includes(x.key)) return;
        const w = x.target,
            b = f().filter(O => !O.ref.current ?.disabled),
            g = b.findIndex(O => O.ref.current === w),
            A = b.length;
        if (g === -1) return;
        x.preventDefault();
        let c = g;
        const R = 0,
            P = A - 1,
            j = () => {
                c = g + 1, c > P && (c = R)
            },
            E = () => {
                c = g - 1, c < R && (c = P)
            };
        switch (x.key) {
            case "Home":
                c = R;
                break;
            case "End":
                c = P;
                break;
            case "ArrowRight":
                n === "horizontal" && (v ? j() : E());
                break;
            case "ArrowDown":
                n === "vertical" && j();
                break;
            case "ArrowLeft":
                n === "horizontal" && (v ? E() : j());
                break;
            case "ArrowUp":
                n === "vertical" && E();
                break
        }
        const de = c % A;
        b[de].ref.current ?.focus()
    });
    return a.jsx(je, {
        scope: o,
        disabled: t,
        direction: i,
        orientation: n,
        children: a.jsx(H.Slot, {
            scope: o,
            children: a.jsx(I.div, { ...s,
                "data-orientation": n,
                ref: p,
                onKeyDown: t ? void 0 : h
            })
        })
    })
}), N = "AccordionItem", [Ee, G] = _(N), oe = u.forwardRef((e, r) => {
    const {
        __scopeAccordion: o,
        value: t,
        ...i
    } = e, n = y(N, o), s = Ne(N, o), l = L(o), p = B(), f = t && s.value.includes(t) || !1, m = n.disabled || e.disabled;
    return a.jsx(Ee, {
        scope: o,
        open: f,
        disabled: m,
        triggerId: p,
        children: a.jsx(ge, {
            "data-orientation": n.orientation,
            "data-state": se(f),
            ...l,
            ...i,
            ref: r,
            disabled: m,
            open: f,
            onOpenChange: v => {
                v ? s.onItemOpen(t) : s.onItemClose(t)
            }
        })
    })
});
oe.displayName = N;
var te = "AccordionHeader",
    ne = u.forwardRef((e, r) => {
        const {
            __scopeAccordion: o,
            ...t
        } = e, i = y(C, o), n = G(te, o);
        return a.jsx(I.h3, {
            "data-orientation": i.orientation,
            "data-state": se(n.open),
            "data-disabled": n.disabled ? "" : void 0,
            ...t,
            ref: r
        })
    });
ne.displayName = te;
var S = "AccordionTrigger",
    re = u.forwardRef((e, r) => {
        const {
            __scopeAccordion: o,
            ...t
        } = e, i = y(C, o), n = G(S, o), s = _e(S, o), l = L(o);
        return a.jsx(H.ItemSlot, {
            scope: o,
            children: a.jsx(Ae, {
                "aria-disabled": n.open && !s.collapsible || void 0,
                "data-orientation": i.orientation,
                id: n.triggerId,
                ...l,
                ...t,
                ref: r
            })
        })
    });
re.displayName = S;
var ae = "AccordionContent",
    ie = u.forwardRef((e, r) => {
        const {
            __scopeAccordion: o,
            ...t
        } = e, i = y(C, o), n = G(ae, o), s = L(o);
        return a.jsx(he, {
            role: "region",
            "aria-labelledby": n.triggerId,
            "data-orientation": i.orientation,
            ...s,
            ...t,
            ref: r,
            style: {
                "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                ...e.style
            }
        })
    });
ie.displayName = ae;

function se(e) {
    return e ? "open" : "closed"
}
var Oe = W,
    Se = oe,
    De = ne,
    ce = re,
    le = ie;
const Ye = Oe,
    Te = d.forwardRef(({
        className: e,
        ...r
    }, o) => a.jsx(Se, {
        ref: o,
        className: T("border-b", e),
        ...r
    }));
Te.displayName = "AccordionItem";
const ke = d.forwardRef(({
    className: e,
    children: r,
    ...o
}, t) => a.jsx(De, {
    className: "flex",
    children: a.jsxs(ce, {
        ref: t,
        className: T("flex flex-1 items-center text-start justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...o,
        children: [r, a.jsx(ve, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
ke.displayName = ce.displayName;
const Me = d.forwardRef(({
    className: e,
    children: r,
    ...o
}, t) => a.jsx(le, {
    ref: t,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...o,
    children: a.jsx("div", {
        className: T("pb-4 pt-0", e),
        children: r
    })
}));
Me.displayName = le.displayName;
export {
    Ye as A, Te as a, ke as b, Me as c
};