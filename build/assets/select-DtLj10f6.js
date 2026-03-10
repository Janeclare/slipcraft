import {
    r as n,
    j as l
} from "./app-CPSemYgC.js";
import {
    R as zt,
    r as We,
    c as J
} from "./index-BIbNlVZ0.js";
import {
    c as je
} from "./index-BdQq_4o_.js";
import {
    c as R
} from "./index-Dc_FVRD7.js";
import {
    c as Yt
} from "./index-SHdw-lpr.js";
import {
    u as F,
    P as O,
    d as Gt,
    c as Xt
} from "./index-TtBBfnyI.js";
import {
    u as ae,
    c as Ue,
    a as X
} from "./index-BUKYvAHl.js";
import {
    u as Zt
} from "./index-CChplcHQ.js";
import {
    u as qt,
    a as Jt
} from "./index-ClHHFVVV.js";
import {
    u as Re
} from "./index-B-GRoRe2.js";
import {
    u as Qt,
    o as eo,
    s as to,
    f as oo,
    a as no,
    b as ro,
    h as so,
    l as ao,
    c as io
} from "./floating-ui.react-dom-CPrMKUU6.js";
import {
    u as co
} from "./index-D_XWqw2c.js";
import {
    u as Me
} from "./index-bfqS6E9x.js";
import {
    u as lo
} from "./index-C08e2LbI.js";
import {
    h as uo,
    R as po
} from "./Combination-C3j38xtn.js";
import {
    C as Ke
} from "./chevron-down-DGcLvqVu.js";
import {
    C as fo
} from "./check-CsA8fo_3.js";
import {
    c as mo
} from "./createLucideIcon-rN-Z3mCX.js";
const ho = mo("ChevronUp", [
    ["path", {
        d: "m18 15-6-6-6 6",
        key: "153udz"
    }]
]);
var vo = "DismissableLayer",
    Ce = "dismissableLayer.update",
    go = "dismissableLayer.pointerDownOutside",
    xo = "dismissableLayer.focusOutside",
    Le, $e = n.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    ze = n.forwardRef((e, o) => {
        const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: s,
            onFocusOutside: c,
            onInteractOutside: i,
            onDismiss: a,
            ...u
        } = e, p = n.useContext($e), [m, w] = n.useState(null), E = m ?.ownerDocument ?? globalThis ?.document, [, S] = n.useState({}), C = F(o, y => w(y)), d = Array.from(p.layers), [v] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), g = d.indexOf(v), f = m ? d.indexOf(m) : -1, x = p.layersWithOutsidePointerEventsDisabled.size > 0, b = f >= g, A = So(y => {
            const _ = y.target,
                k = [...p.branches].some(B => B.contains(_));
            !b || k || (s ?.(y), i ?.(y), y.defaultPrevented || a ?.())
        }, E), K = Co(y => {
            const _ = y.target;
            [...p.branches].some(B => B.contains(_)) || (c ?.(y), i ?.(y), y.defaultPrevented || a ?.())
        }, E);
        return qt(y => {
            f === p.layers.size - 1 && (r ?.(y), !y.defaultPrevented && a && (y.preventDefault(), a()))
        }, E), n.useEffect(() => {
            if (m) return t && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (Le = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), Fe(), () => {
                t && p.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = Le)
            }
        }, [m, E, t, p]), n.useEffect(() => () => {
            m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), Fe())
        }, [m, p]), n.useEffect(() => {
            const y = () => S({});
            return document.addEventListener(Ce, y), () => document.removeEventListener(Ce, y)
        }, []), l.jsx(O.div, { ...u,
            ref: C,
            style: {
                pointerEvents: x ? b ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: R(e.onFocusCapture, K.onFocusCapture),
            onBlurCapture: R(e.onBlurCapture, K.onBlurCapture),
            onPointerDownCapture: R(e.onPointerDownCapture, A.onPointerDownCapture)
        })
    });
ze.displayName = vo;
var wo = "DismissableLayerBranch",
    yo = n.forwardRef((e, o) => {
        const t = n.useContext($e),
            r = n.useRef(null),
            s = F(o, r);
        return n.useEffect(() => {
            const c = r.current;
            if (c) return t.branches.add(c), () => {
                t.branches.delete(c)
            }
        }, [t.branches]), l.jsx(O.div, { ...e,
            ref: s
        })
    });
yo.displayName = wo;

function So(e, o = globalThis ?.document) {
    const t = ae(e),
        r = n.useRef(!1),
        s = n.useRef(() => {});
    return n.useEffect(() => {
        const c = a => {
                if (a.target && !r.current) {
                    let u = function() {
                        Ye(go, t, p, {
                            discrete: !0
                        })
                    };
                    const p = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (o.removeEventListener("click", s.current), s.current = u, o.addEventListener("click", s.current, {
                        once: !0
                    })) : u()
                } else o.removeEventListener("click", s.current);
                r.current = !1
            },
            i = window.setTimeout(() => {
                o.addEventListener("pointerdown", c)
            }, 0);
        return () => {
            window.clearTimeout(i), o.removeEventListener("pointerdown", c), o.removeEventListener("click", s.current)
        }
    }, [o, t]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Co(e, o = globalThis ?.document) {
    const t = ae(e),
        r = n.useRef(!1);
    return n.useEffect(() => {
        const s = c => {
            c.target && !r.current && Ye(xo, t, {
                originalEvent: c
            }, {
                discrete: !1
            })
        };
        return o.addEventListener("focusin", s), () => o.removeEventListener("focusin", s)
    }, [o, t]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Fe() {
    const e = new CustomEvent(Ce);
    document.dispatchEvent(e)
}

function Ye(e, o, t, {
    discrete: r
}) {
    const s = t.originalEvent.target,
        c = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
        });
    o && s.addEventListener(e, o, {
        once: !0
    }), r ? Gt(s, c) : s.dispatchEvent(c)
}
var ye = "focusScope.autoFocusOnMount",
    Se = "focusScope.autoFocusOnUnmount",
    ke = {
        bubbles: !1,
        cancelable: !0
    },
    Eo = "FocusScope",
    Ge = n.forwardRef((e, o) => {
        const {
            loop: t = !1,
            trapped: r = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: c,
            ...i
        } = e, [a, u] = n.useState(null), p = ae(s), m = ae(c), w = n.useRef(null), E = F(o, d => u(d)), S = n.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        n.useEffect(() => {
            if (r) {
                let d = function(x) {
                        if (S.paused || !a) return;
                        const b = x.target;
                        a.contains(b) ? w.current = b : q(w.current, {
                            select: !0
                        })
                    },
                    v = function(x) {
                        if (S.paused || !a) return;
                        const b = x.relatedTarget;
                        b !== null && (a.contains(b) || q(w.current, {
                            select: !0
                        }))
                    },
                    g = function(x) {
                        if (document.activeElement === document.body)
                            for (const A of x) A.removedNodes.length > 0 && q(a)
                    };
                document.addEventListener("focusin", d), document.addEventListener("focusout", v);
                const f = new MutationObserver(g);
                return a && f.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", d), document.removeEventListener("focusout", v), f.disconnect()
                }
            }
        }, [r, a, S.paused]), n.useEffect(() => {
            if (a) {
                He.add(S);
                const d = document.activeElement;
                if (!a.contains(d)) {
                    const g = new CustomEvent(ye, ke);
                    a.addEventListener(ye, p), a.dispatchEvent(g), g.defaultPrevented || (bo(Ro(Xe(a)), {
                        select: !0
                    }), document.activeElement === d && q(a))
                }
                return () => {
                    a.removeEventListener(ye, p), setTimeout(() => {
                        const g = new CustomEvent(Se, ke);
                        a.addEventListener(Se, m), a.dispatchEvent(g), g.defaultPrevented || q(d ?? document.body, {
                            select: !0
                        }), a.removeEventListener(Se, m), He.remove(S)
                    }, 0)
                }
            }
        }, [a, p, m, S]);
        const C = n.useCallback(d => {
            if (!t && !r || S.paused) return;
            const v = d.key === "Tab" && !d.altKey && !d.ctrlKey && !d.metaKey,
                g = document.activeElement;
            if (v && g) {
                const f = d.currentTarget,
                    [x, b] = Po(f);
                x && b ? !d.shiftKey && g === b ? (d.preventDefault(), t && q(x, {
                    select: !0
                })) : d.shiftKey && g === x && (d.preventDefault(), t && q(b, {
                    select: !0
                })) : g === f && d.preventDefault()
            }
        }, [t, r, S.paused]);
        return l.jsx(O.div, {
            tabIndex: -1,
            ...i,
            ref: E,
            onKeyDown: C
        })
    });
Ge.displayName = Eo;

function bo(e, {
    select: o = !1
} = {}) {
    const t = document.activeElement;
    for (const r of e)
        if (q(r, {
                select: o
            }), document.activeElement !== t) return
}

function Po(e) {
    const o = Xe(e),
        t = Be(o, e),
        r = Be(o.reverse(), e);
    return [t, r]
}

function Xe(e) {
    const o = [],
        t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const s = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; t.nextNode();) o.push(t.currentNode);
    return o
}

function Be(e, o) {
    for (const t of e)
        if (!No(t, {
                upTo: o
            })) return t
}

function No(e, {
    upTo: o
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (o !== void 0 && e === o) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function To(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function q(e, {
    select: o = !1
} = {}) {
    if (e && e.focus) {
        const t = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== t && To(e) && o && e.select()
    }
}
var He = Io();

function Io() {
    let e = [];
    return {
        add(o) {
            const t = e[0];
            o !== t && t ?.pause(), e = Ve(e, o), e.unshift(o)
        },
        remove(o) {
            e = Ve(e, o), e[0] ?.resume()
        }
    }
}

function Ve(e, o) {
    const t = [...e],
        r = t.indexOf(o);
    return r !== -1 && t.splice(r, 1), t
}

function Ro(e) {
    return e.filter(o => o.tagName !== "A")
}
var Oo = "Arrow",
    Ze = n.forwardRef((e, o) => {
        const {
            children: t,
            width: r = 10,
            height: s = 5,
            ...c
        } = e;
        return l.jsx(O.svg, { ...c,
            ref: o,
            width: r,
            height: s,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : l.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
Ze.displayName = Oo;
var Ao = Ze,
    Oe = "Popper",
    [qe, Je] = Ue(Oe),
    [_o, Qe] = qe(Oe),
    et = e => {
        const {
            __scopePopper: o,
            children: t
        } = e, [r, s] = n.useState(null);
        return l.jsx(_o, {
            scope: o,
            anchor: r,
            onAnchorChange: s,
            children: t
        })
    };
et.displayName = Oe;
var tt = "PopperAnchor",
    ot = n.forwardRef((e, o) => {
        const {
            __scopePopper: t,
            virtualRef: r,
            ...s
        } = e, c = Qe(tt, t), i = n.useRef(null), a = F(o, i);
        return n.useEffect(() => {
            c.onAnchorChange(r ?.current || i.current)
        }), r ? null : l.jsx(O.div, { ...s,
            ref: a
        })
    });
ot.displayName = tt;
var Ae = "PopperContent",
    [Do, jo] = qe(Ae),
    nt = n.forwardRef((e, o) => {
        const {
            __scopePopper: t,
            side: r = "bottom",
            sideOffset: s = 0,
            align: c = "center",
            alignOffset: i = 0,
            arrowPadding: a = 0,
            avoidCollisions: u = !0,
            collisionBoundary: p = [],
            collisionPadding: m = 0,
            sticky: w = "partial",
            hideWhenDetached: E = !1,
            updatePositionStrategy: S = "optimized",
            onPlaced: C,
            ...d
        } = e, v = Qe(Ae, t), [g, f] = n.useState(null), x = F(o, h => f(h)), [b, A] = n.useState(null), K = co(b), y = K ?.width ?? 0, _ = K ?.height ?? 0, k = r + (c !== "center" ? "-" + c : ""), B = typeof m == "number" ? m : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...m
        }, V = Array.isArray(p) ? p : [p], $ = V.length > 0, H = {
            padding: B,
            boundary: V.filter(Lo),
            altBoundary: $
        }, {
            refs: z,
            floatingStyles: W,
            placement: D,
            isPositioned: M,
            middlewareData: j
        } = Qt({
            strategy: "fixed",
            placement: k,
            whileElementsMounted: (...h) => io(...h, {
                animationFrame: S === "always"
            }),
            elements: {
                reference: v.anchor
            },
            middleware: [eo({
                mainAxis: s + _,
                alignmentAxis: i
            }), u && to({
                mainAxis: !0,
                crossAxis: !1,
                limiter: w === "partial" ? ao() : void 0,
                ...H
            }), u && oo({ ...H
            }), no({ ...H,
                apply: ({
                    elements: h,
                    rects: T,
                    availableWidth: L,
                    availableHeight: P
                }) => {
                    const {
                        width: N,
                        height: I
                    } = T.reference, U = h.floating.style;
                    U.setProperty("--radix-popper-available-width", `${L}px`), U.setProperty("--radix-popper-available-height", `${P}px`), U.setProperty("--radix-popper-anchor-width", `${N}px`), U.setProperty("--radix-popper-anchor-height", `${I}px`)
                }
            }), b && ro({
                element: b,
                padding: a
            }), Fo({
                arrowWidth: y,
                arrowHeight: _
            }), E && so({
                strategy: "referenceHidden",
                ...H
            })]
        }), [Y, ce] = at(D), te = ae(C);
        X(() => {
            M && te ?.()
        }, [M, te]);
        const le = j.arrow ?.x,
            de = j.arrow ?.y,
            Z = j.arrow ?.centerOffset !== 0,
            [se, oe] = n.useState();
        return X(() => {
            g && oe(window.getComputedStyle(g).zIndex)
        }, [g]), l.jsx("div", {
            ref: z.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...W,
                transform: M ? W.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: se,
                "--radix-popper-transform-origin": [j.transformOrigin ?.x, j.transformOrigin ?.y].join(" "),
                ...j.hide ?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: l.jsx(Do, {
                scope: t,
                placedSide: Y,
                onArrowChange: A,
                arrowX: le,
                arrowY: de,
                shouldHideArrow: Z,
                children: l.jsx(O.div, {
                    "data-side": Y,
                    "data-align": ce,
                    ...d,
                    ref: x,
                    style: { ...d.style,
                        animation: M ? void 0 : "none"
                    }
                })
            })
        })
    });
nt.displayName = Ae;
var rt = "PopperArrow",
    Mo = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    st = n.forwardRef(function(o, t) {
        const {
            __scopePopper: r,
            ...s
        } = o, c = jo(rt, r), i = Mo[c.placedSide];
        return l.jsx("span", {
            ref: c.onArrowChange,
            style: {
                position: "absolute",
                left: c.arrowX,
                top: c.arrowY,
                [i]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[c.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[c.placedSide],
                visibility: c.shouldHideArrow ? "hidden" : void 0
            },
            children: l.jsx(Ao, { ...s,
                ref: t,
                style: { ...s.style,
                    display: "block"
                }
            })
        })
    });
st.displayName = rt;

function Lo(e) {
    return e !== null
}
var Fo = e => ({
    name: "transformOrigin",
    options: e,
    fn(o) {
        const {
            placement: t,
            rects: r,
            middlewareData: s
        } = o, i = s.arrow ?.centerOffset !== 0, a = i ? 0 : e.arrowWidth, u = i ? 0 : e.arrowHeight, [p, m] = at(t), w = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[m], E = (s.arrow ?.x ?? 0) + a / 2, S = (s.arrow ?.y ?? 0) + u / 2;
        let C = "",
            d = "";
        return p === "bottom" ? (C = i ? w : `${E}px`, d = `${-u}px`) : p === "top" ? (C = i ? w : `${E}px`, d = `${r.floating.height+u}px`) : p === "right" ? (C = `${-u}px`, d = i ? w : `${S}px`) : p === "left" && (C = `${r.floating.width+u}px`, d = i ? w : `${S}px`), {
            data: {
                x: C,
                y: d
            }
        }
    }
});

function at(e) {
    const [o, t = "center"] = e.split("-");
    return [o, t]
}
var ko = et,
    Bo = ot,
    Ho = nt,
    Vo = st,
    Wo = "Portal",
    it = n.forwardRef((e, o) => {
        const {
            container: t,
            ...r
        } = e, [s, c] = n.useState(!1);
        X(() => c(!0), []);
        const i = t || s && globalThis ?.document ?.body;
        return i ? zt.createPortal(l.jsx(O.div, { ...r,
            ref: o
        }), i) : null
    });
it.displayName = Wo;
var ct = n.forwardRef((e, o) => {
    const {
        children: t,
        ...r
    } = e, s = n.Children.toArray(t), c = s.find(Ko);
    if (c) {
        const i = c.props.children,
            a = s.map(u => u === c ? n.Children.count(i) > 1 ? n.Children.only(null) : n.isValidElement(i) ? i.props.children : null : u);
        return l.jsx(Ee, { ...r,
            ref: o,
            children: n.isValidElement(i) ? n.cloneElement(i, void 0, a) : null
        })
    }
    return l.jsx(Ee, { ...r,
        ref: o,
        children: t
    })
});
ct.displayName = "Slot";
var Ee = n.forwardRef((e, o) => {
    const {
        children: t,
        ...r
    } = e;
    if (n.isValidElement(t)) {
        const s = zo(t);
        return n.cloneElement(t, { ...$o(r, t.props),
            ref: o ? Xt(o, s) : s
        })
    }
    return n.Children.count(t) > 1 ? n.Children.only(null) : null
});
Ee.displayName = "SlotClone";
var Uo = ({
    children: e
}) => l.jsx(l.Fragment, {
    children: e
});

function Ko(e) {
    return n.isValidElement(e) && e.type === Uo
}

function $o(e, o) {
    const t = { ...o
    };
    for (const r in o) {
        const s = e[r],
            c = o[r];
        /^on[A-Z]/.test(r) ? s && c ? t[r] = (...a) => {
            c(...a), s(...a)
        } : s && (t[r] = s) : r === "style" ? t[r] = { ...s,
            ...c
        } : r === "className" && (t[r] = [s, c].filter(Boolean).join(" "))
    }
    return { ...e,
        ...t
    }
}

function zo(e) {
    let o = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
        t = o && "isReactWarning" in o && o.isReactWarning;
    return t ? e.ref : (o = Object.getOwnPropertyDescriptor(e, "ref") ?.get, t = o && "isReactWarning" in o && o.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
}
var Yo = "VisuallyHidden",
    _e = n.forwardRef((e, o) => l.jsx(O.span, { ...e,
        ref: o,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
_e.displayName = Yo;
var Kn = _e,
    Go = [" ", "Enter", "ArrowUp", "ArrowDown"],
    Xo = [" ", "Enter"],
    pe = "Select",
    [me, he, Zo] = Yt(pe),
    [ie] = Ue(pe, [Zo, Je]),
    ve = Je(),
    [qo, Q] = ie(pe),
    [Jo, Qo] = ie(pe),
    lt = e => {
        const {
            __scopeSelect: o,
            children: t,
            open: r,
            defaultOpen: s,
            onOpenChange: c,
            value: i,
            defaultValue: a,
            onValueChange: u,
            dir: p,
            name: m,
            autoComplete: w,
            disabled: E,
            required: S,
            form: C
        } = e, d = ve(o), [v, g] = n.useState(null), [f, x] = n.useState(null), [b, A] = n.useState(!1), K = Zt(p), [y = !1, _] = Me({
            prop: r,
            defaultProp: s,
            onChange: c
        }), [k, B] = Me({
            prop: i,
            defaultProp: a,
            onChange: u
        }), V = n.useRef(null), $ = v ? C || !!v.closest("form") : !0, [H, z] = n.useState(new Set), W = Array.from(H).map(D => D.props.value).join(";");
        return l.jsx(ko, { ...d,
            children: l.jsxs(qo, {
                required: S,
                scope: o,
                trigger: v,
                onTriggerChange: g,
                valueNode: f,
                onValueNodeChange: x,
                valueNodeHasChildren: b,
                onValueNodeHasChildrenChange: A,
                contentId: Re(),
                value: k,
                onValueChange: B,
                open: y,
                onOpenChange: _,
                dir: K,
                triggerPointerDownPosRef: V,
                disabled: E,
                children: [l.jsx(me.Provider, {
                    scope: o,
                    children: l.jsx(Jo, {
                        scope: e.__scopeSelect,
                        onNativeOptionAdd: n.useCallback(D => {
                            z(M => new Set(M).add(D))
                        }, []),
                        onNativeOptionRemove: n.useCallback(D => {
                            z(M => {
                                const j = new Set(M);
                                return j.delete(D), j
                            })
                        }, []),
                        children: t
                    })
                }), $ ? l.jsxs(jt, {
                    "aria-hidden": !0,
                    required: S,
                    tabIndex: -1,
                    name: m,
                    autoComplete: w,
                    value: k,
                    onChange: D => B(D.target.value),
                    disabled: E,
                    form: C,
                    children: [k === void 0 ? l.jsx("option", {
                        value: ""
                    }) : null, Array.from(H)]
                }, W) : null]
            })
        })
    };
lt.displayName = pe;
var dt = "SelectTrigger",
    ut = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            disabled: r = !1,
            ...s
        } = e, c = ve(t), i = Q(dt, t), a = i.disabled || r, u = F(o, i.onTriggerChange), p = he(t), m = n.useRef("touch"), [w, E, S] = Mt(d => {
            const v = p().filter(x => !x.disabled),
                g = v.find(x => x.value === i.value),
                f = Lt(v, d, g);
            f !== void 0 && i.onValueChange(f.value)
        }), C = d => {
            a || (i.onOpenChange(!0), S()), d && (i.triggerPointerDownPosRef.current = {
                x: Math.round(d.pageX),
                y: Math.round(d.pageY)
            })
        };
        return l.jsx(Bo, {
            asChild: !0,
            ...c,
            children: l.jsx(O.button, {
                type: "button",
                role: "combobox",
                "aria-controls": i.contentId,
                "aria-expanded": i.open,
                "aria-required": i.required,
                "aria-autocomplete": "none",
                dir: i.dir,
                "data-state": i.open ? "open" : "closed",
                disabled: a,
                "data-disabled": a ? "" : void 0,
                "data-placeholder": Dt(i.value) ? "" : void 0,
                ...s,
                ref: u,
                onClick: R(s.onClick, d => {
                    d.currentTarget.focus(), m.current !== "mouse" && C(d)
                }),
                onPointerDown: R(s.onPointerDown, d => {
                    m.current = d.pointerType;
                    const v = d.target;
                    v.hasPointerCapture(d.pointerId) && v.releasePointerCapture(d.pointerId), d.button === 0 && d.ctrlKey === !1 && d.pointerType === "mouse" && (C(d), d.preventDefault())
                }),
                onKeyDown: R(s.onKeyDown, d => {
                    const v = w.current !== "";
                    !(d.ctrlKey || d.altKey || d.metaKey) && d.key.length === 1 && E(d.key), !(v && d.key === " ") && Go.includes(d.key) && (C(), d.preventDefault())
                })
            })
        })
    });
ut.displayName = dt;
var pt = "SelectValue",
    ft = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            className: r,
            style: s,
            children: c,
            placeholder: i = "",
            ...a
        } = e, u = Q(pt, t), {
            onValueNodeHasChildrenChange: p
        } = u, m = c !== void 0, w = F(o, u.onValueNodeChange);
        return X(() => {
            p(m)
        }, [p, m]), l.jsx(O.span, { ...a,
            ref: w,
            style: {
                pointerEvents: "none"
            },
            children: Dt(u.value) ? l.jsx(l.Fragment, {
                children: i
            }) : c
        })
    });
ft.displayName = pt;
var en = "SelectIcon",
    mt = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            children: r,
            ...s
        } = e;
        return l.jsx(O.span, {
            "aria-hidden": !0,
            ...s,
            ref: o,
            children: r || "▼"
        })
    });
mt.displayName = en;
var tn = "SelectPortal",
    ht = e => l.jsx(it, {
        asChild: !0,
        ...e
    });
ht.displayName = tn;
var re = "SelectContent",
    vt = n.forwardRef((e, o) => {
        const t = Q(re, e.__scopeSelect),
            [r, s] = n.useState();
        if (X(() => {
                s(new DocumentFragment)
            }, []), !t.open) {
            const c = r;
            return c ? We.createPortal(l.jsx(gt, {
                scope: e.__scopeSelect,
                children: l.jsx(me.Slot, {
                    scope: e.__scopeSelect,
                    children: l.jsx("div", {
                        children: e.children
                    })
                })
            }), c) : null
        }
        return l.jsx(xt, { ...e,
            ref: o
        })
    });
vt.displayName = re;
var G = 10,
    [gt, ee] = ie(re),
    on = "SelectContentImpl",
    xt = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            position: r = "item-aligned",
            onCloseAutoFocus: s,
            onEscapeKeyDown: c,
            onPointerDownOutside: i,
            side: a,
            sideOffset: u,
            align: p,
            alignOffset: m,
            arrowPadding: w,
            collisionBoundary: E,
            collisionPadding: S,
            sticky: C,
            hideWhenDetached: d,
            avoidCollisions: v,
            ...g
        } = e, f = Q(re, t), [x, b] = n.useState(null), [A, K] = n.useState(null), y = F(o, h => b(h)), [_, k] = n.useState(null), [B, V] = n.useState(null), $ = he(t), [H, z] = n.useState(!1), W = n.useRef(!1);
        n.useEffect(() => {
            if (x) return uo(x)
        }, [x]), Jt();
        const D = n.useCallback(h => {
                const [T, ...L] = $().map(I => I.ref.current), [P] = L.slice(-1), N = document.activeElement;
                for (const I of h)
                    if (I === N || (I ?.scrollIntoView({
                            block: "nearest"
                        }), I === T && A && (A.scrollTop = 0), I === P && A && (A.scrollTop = A.scrollHeight), I ?.focus(), document.activeElement !== N)) return
            }, [$, A]),
            M = n.useCallback(() => D([_, x]), [D, _, x]);
        n.useEffect(() => {
            H && M()
        }, [H, M]);
        const {
            onOpenChange: j,
            triggerPointerDownPosRef: Y
        } = f;
        n.useEffect(() => {
            if (x) {
                let h = {
                    x: 0,
                    y: 0
                };
                const T = P => {
                        h = {
                            x: Math.abs(Math.round(P.pageX) - (Y.current ?.x ?? 0)),
                            y: Math.abs(Math.round(P.pageY) - (Y.current ?.y ?? 0))
                        }
                    },
                    L = P => {
                        h.x <= 10 && h.y <= 10 ? P.preventDefault() : x.contains(P.target) || j(!1), document.removeEventListener("pointermove", T), Y.current = null
                    };
                return Y.current !== null && (document.addEventListener("pointermove", T), document.addEventListener("pointerup", L, {
                    capture: !0,
                    once: !0
                })), () => {
                    document.removeEventListener("pointermove", T), document.removeEventListener("pointerup", L, {
                        capture: !0
                    })
                }
            }
        }, [x, j, Y]), n.useEffect(() => {
            const h = () => j(!1);
            return window.addEventListener("blur", h), window.addEventListener("resize", h), () => {
                window.removeEventListener("blur", h), window.removeEventListener("resize", h)
            }
        }, [j]);
        const [ce, te] = Mt(h => {
            const T = $().filter(N => !N.disabled),
                L = T.find(N => N.ref.current === document.activeElement),
                P = Lt(T, h, L);
            P && setTimeout(() => P.ref.current.focus())
        }), le = n.useCallback((h, T, L) => {
            const P = !W.current && !L;
            (f.value !== void 0 && f.value === T || P) && (k(h), P && (W.current = !0))
        }, [f.value]), de = n.useCallback(() => x ?.focus(), [x]), Z = n.useCallback((h, T, L) => {
            const P = !W.current && !L;
            (f.value !== void 0 && f.value === T || P) && V(h)
        }, [f.value]), se = r === "popper" ? be : wt, oe = se === be ? {
            side: a,
            sideOffset: u,
            align: p,
            alignOffset: m,
            arrowPadding: w,
            collisionBoundary: E,
            collisionPadding: S,
            sticky: C,
            hideWhenDetached: d,
            avoidCollisions: v
        } : {};
        return l.jsx(gt, {
            scope: t,
            content: x,
            viewport: A,
            onViewportChange: K,
            itemRefCallback: le,
            selectedItem: _,
            onItemLeave: de,
            itemTextRefCallback: Z,
            focusSelectedItem: M,
            selectedItemText: B,
            position: r,
            isPositioned: H,
            searchRef: ce,
            children: l.jsx(po, {
                as: ct,
                allowPinchZoom: !0,
                children: l.jsx(Ge, {
                    asChild: !0,
                    trapped: f.open,
                    onMountAutoFocus: h => {
                        h.preventDefault()
                    },
                    onUnmountAutoFocus: R(s, h => {
                        f.trigger ?.focus({
                            preventScroll: !0
                        }), h.preventDefault()
                    }),
                    children: l.jsx(ze, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: i,
                        onFocusOutside: h => h.preventDefault(),
                        onDismiss: () => f.onOpenChange(!1),
                        children: l.jsx(se, {
                            role: "listbox",
                            id: f.contentId,
                            "data-state": f.open ? "open" : "closed",
                            dir: f.dir,
                            onContextMenu: h => h.preventDefault(),
                            ...g,
                            ...oe,
                            onPlaced: () => z(!0),
                            ref: y,
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                outline: "none",
                                ...g.style
                            },
                            onKeyDown: R(g.onKeyDown, h => {
                                const T = h.ctrlKey || h.altKey || h.metaKey;
                                if (h.key === "Tab" && h.preventDefault(), !T && h.key.length === 1 && te(h.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(h.key)) {
                                    let P = $().filter(N => !N.disabled).map(N => N.ref.current);
                                    if (["ArrowUp", "End"].includes(h.key) && (P = P.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(h.key)) {
                                        const N = h.target,
                                            I = P.indexOf(N);
                                        P = P.slice(I + 1)
                                    }
                                    setTimeout(() => D(P)), h.preventDefault()
                                }
                            })
                        })
                    })
                })
            })
        })
    });
xt.displayName = on;
var nn = "SelectItemAlignedPosition",
    wt = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            onPlaced: r,
            ...s
        } = e, c = Q(re, t), i = ee(re, t), [a, u] = n.useState(null), [p, m] = n.useState(null), w = F(o, y => m(y)), E = he(t), S = n.useRef(!1), C = n.useRef(!0), {
            viewport: d,
            selectedItem: v,
            selectedItemText: g,
            focusSelectedItem: f
        } = i, x = n.useCallback(() => {
            if (c.trigger && c.valueNode && a && p && d && v && g) {
                const y = c.trigger.getBoundingClientRect(),
                    _ = p.getBoundingClientRect(),
                    k = c.valueNode.getBoundingClientRect(),
                    B = g.getBoundingClientRect();
                if (c.dir !== "rtl") {
                    const N = B.left - _.left,
                        I = k.left - N,
                        U = y.left - I,
                        ne = y.width + U,
                        ge = Math.max(ne, _.width),
                        xe = window.innerWidth - G,
                        we = je(I, [G, Math.max(G, xe - ge)]);
                    a.style.minWidth = ne + "px", a.style.left = we + "px"
                } else {
                    const N = _.right - B.right,
                        I = window.innerWidth - k.right - N,
                        U = window.innerWidth - y.right - I,
                        ne = y.width + U,
                        ge = Math.max(ne, _.width),
                        xe = window.innerWidth - G,
                        we = je(I, [G, Math.max(G, xe - ge)]);
                    a.style.minWidth = ne + "px", a.style.right = we + "px"
                }
                const V = E(),
                    $ = window.innerHeight - G * 2,
                    H = d.scrollHeight,
                    z = window.getComputedStyle(p),
                    W = parseInt(z.borderTopWidth, 10),
                    D = parseInt(z.paddingTop, 10),
                    M = parseInt(z.borderBottomWidth, 10),
                    j = parseInt(z.paddingBottom, 10),
                    Y = W + D + H + j + M,
                    ce = Math.min(v.offsetHeight * 5, Y),
                    te = window.getComputedStyle(d),
                    le = parseInt(te.paddingTop, 10),
                    de = parseInt(te.paddingBottom, 10),
                    Z = y.top + y.height / 2 - G,
                    se = $ - Z,
                    oe = v.offsetHeight / 2,
                    h = v.offsetTop + oe,
                    T = W + D + h,
                    L = Y - T;
                if (T <= Z) {
                    const N = V.length > 0 && v === V[V.length - 1].ref.current;
                    a.style.bottom = "0px";
                    const I = p.clientHeight - d.offsetTop - d.offsetHeight,
                        U = Math.max(se, oe + (N ? de : 0) + I + M),
                        ne = T + U;
                    a.style.height = ne + "px"
                } else {
                    const N = V.length > 0 && v === V[0].ref.current;
                    a.style.top = "0px";
                    const U = Math.max(Z, W + d.offsetTop + (N ? le : 0) + oe) + L;
                    a.style.height = U + "px", d.scrollTop = T - Z + d.offsetTop
                }
                a.style.margin = `${G}px 0`, a.style.minHeight = ce + "px", a.style.maxHeight = $ + "px", r ?.(), requestAnimationFrame(() => S.current = !0)
            }
        }, [E, c.trigger, c.valueNode, a, p, d, v, g, c.dir, r]);
        X(() => x(), [x]);
        const [b, A] = n.useState();
        X(() => {
            p && A(window.getComputedStyle(p).zIndex)
        }, [p]);
        const K = n.useCallback(y => {
            y && C.current === !0 && (x(), f ?.(), C.current = !1)
        }, [x, f]);
        return l.jsx(sn, {
            scope: t,
            contentWrapper: a,
            shouldExpandOnScrollRef: S,
            onScrollButtonChange: K,
            children: l.jsx("div", {
                ref: u,
                style: {
                    display: "flex",
                    flexDirection: "column",
                    position: "fixed",
                    zIndex: b
                },
                children: l.jsx(O.div, { ...s,
                    ref: w,
                    style: {
                        boxSizing: "border-box",
                        maxHeight: "100%",
                        ...s.style
                    }
                })
            })
        })
    });
wt.displayName = nn;
var rn = "SelectPopperPosition",
    be = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            align: r = "start",
            collisionPadding: s = G,
            ...c
        } = e, i = ve(t);
        return l.jsx(Ho, { ...i,
            ...c,
            ref: o,
            align: r,
            collisionPadding: s,
            style: {
                boxSizing: "border-box",
                ...c.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
be.displayName = rn;
var [sn, De] = ie(re, {}), Pe = "SelectViewport", yt = n.forwardRef((e, o) => {
    const {
        __scopeSelect: t,
        nonce: r,
        ...s
    } = e, c = ee(Pe, t), i = De(Pe, t), a = F(o, c.onViewportChange), u = n.useRef(0);
    return l.jsxs(l.Fragment, {
        children: [l.jsx("style", {
            dangerouslySetInnerHTML: {
                __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
        }), l.jsx(me.Slot, {
            scope: t,
            children: l.jsx(O.div, {
                "data-radix-select-viewport": "",
                role: "presentation",
                ...s,
                ref: a,
                style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...s.style
                },
                onScroll: R(s.onScroll, p => {
                    const m = p.currentTarget,
                        {
                            contentWrapper: w,
                            shouldExpandOnScrollRef: E
                        } = i;
                    if (E ?.current && w) {
                        const S = Math.abs(u.current - m.scrollTop);
                        if (S > 0) {
                            const C = window.innerHeight - G * 2,
                                d = parseFloat(w.style.minHeight),
                                v = parseFloat(w.style.height),
                                g = Math.max(d, v);
                            if (g < C) {
                                const f = g + S,
                                    x = Math.min(C, f),
                                    b = f - x;
                                w.style.height = x + "px", w.style.bottom === "0px" && (m.scrollTop = b > 0 ? b : 0, w.style.justifyContent = "flex-end")
                            }
                        }
                    }
                    u.current = m.scrollTop
                })
            })
        })]
    })
});
yt.displayName = Pe;
var St = "SelectGroup",
    [an, cn] = ie(St),
    ln = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            ...r
        } = e, s = Re();
        return l.jsx(an, {
            scope: t,
            id: s,
            children: l.jsx(O.div, {
                role: "group",
                "aria-labelledby": s,
                ...r,
                ref: o
            })
        })
    });
ln.displayName = St;
var Ct = "SelectLabel",
    Et = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            ...r
        } = e, s = cn(Ct, t);
        return l.jsx(O.div, {
            id: s.id,
            ...r,
            ref: o
        })
    });
Et.displayName = Ct;
var fe = "SelectItem",
    [dn, bt] = ie(fe),
    Pt = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            value: r,
            disabled: s = !1,
            textValue: c,
            ...i
        } = e, a = Q(fe, t), u = ee(fe, t), p = a.value === r, [m, w] = n.useState(c ?? ""), [E, S] = n.useState(!1), C = F(o, f => u.itemRefCallback ?.(f, r, s)), d = Re(), v = n.useRef("touch"), g = () => {
            s || (a.onValueChange(r), a.onOpenChange(!1))
        };
        if (r === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
        return l.jsx(dn, {
            scope: t,
            value: r,
            disabled: s,
            textId: d,
            isSelected: p,
            onItemTextChange: n.useCallback(f => {
                w(x => x || (f ?.textContent ?? "").trim())
            }, []),
            children: l.jsx(me.ItemSlot, {
                scope: t,
                value: r,
                disabled: s,
                textValue: m,
                children: l.jsx(O.div, {
                    role: "option",
                    "aria-labelledby": d,
                    "data-highlighted": E ? "" : void 0,
                    "aria-selected": p && E,
                    "data-state": p ? "checked" : "unchecked",
                    "aria-disabled": s || void 0,
                    "data-disabled": s ? "" : void 0,
                    tabIndex: s ? void 0 : -1,
                    ...i,
                    ref: C,
                    onFocus: R(i.onFocus, () => S(!0)),
                    onBlur: R(i.onBlur, () => S(!1)),
                    onClick: R(i.onClick, () => {
                        v.current !== "mouse" && g()
                    }),
                    onPointerUp: R(i.onPointerUp, () => {
                        v.current === "mouse" && g()
                    }),
                    onPointerDown: R(i.onPointerDown, f => {
                        v.current = f.pointerType
                    }),
                    onPointerMove: R(i.onPointerMove, f => {
                        v.current = f.pointerType, s ? u.onItemLeave ?.() : v.current === "mouse" && f.currentTarget.focus({
                            preventScroll: !0
                        })
                    }),
                    onPointerLeave: R(i.onPointerLeave, f => {
                        f.currentTarget === document.activeElement && u.onItemLeave ?.()
                    }),
                    onKeyDown: R(i.onKeyDown, f => {
                        u.searchRef ?.current !== "" && f.key === " " || (Xo.includes(f.key) && g(), f.key === " " && f.preventDefault())
                    })
                })
            })
        })
    });
Pt.displayName = fe;
var ue = "SelectItemText",
    Nt = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            className: r,
            style: s,
            ...c
        } = e, i = Q(ue, t), a = ee(ue, t), u = bt(ue, t), p = Qo(ue, t), [m, w] = n.useState(null), E = F(o, g => w(g), u.onItemTextChange, g => a.itemTextRefCallback ?.(g, u.value, u.disabled)), S = m ?.textContent, C = n.useMemo(() => l.jsx("option", {
            value: u.value,
            disabled: u.disabled,
            children: S
        }, u.value), [u.disabled, u.value, S]), {
            onNativeOptionAdd: d,
            onNativeOptionRemove: v
        } = p;
        return X(() => (d(C), () => v(C)), [d, v, C]), l.jsxs(l.Fragment, {
            children: [l.jsx(O.span, {
                id: u.textId,
                ...c,
                ref: E
            }), u.isSelected && i.valueNode && !i.valueNodeHasChildren ? We.createPortal(c.children, i.valueNode) : null]
        })
    });
Nt.displayName = ue;
var Tt = "SelectItemIndicator",
    It = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            ...r
        } = e;
        return bt(Tt, t).isSelected ? l.jsx(O.span, {
            "aria-hidden": !0,
            ...r,
            ref: o
        }) : null
    });
It.displayName = Tt;
var Ne = "SelectScrollUpButton",
    Rt = n.forwardRef((e, o) => {
        const t = ee(Ne, e.__scopeSelect),
            r = De(Ne, e.__scopeSelect),
            [s, c] = n.useState(!1),
            i = F(o, r.onScrollButtonChange);
        return X(() => {
            if (t.viewport && t.isPositioned) {
                let a = function() {
                    const p = u.scrollTop > 0;
                    c(p)
                };
                const u = t.viewport;
                return a(), u.addEventListener("scroll", a), () => u.removeEventListener("scroll", a)
            }
        }, [t.viewport, t.isPositioned]), s ? l.jsx(At, { ...e,
            ref: i,
            onAutoScroll: () => {
                const {
                    viewport: a,
                    selectedItem: u
                } = t;
                a && u && (a.scrollTop = a.scrollTop - u.offsetHeight)
            }
        }) : null
    });
Rt.displayName = Ne;
var Te = "SelectScrollDownButton",
    Ot = n.forwardRef((e, o) => {
        const t = ee(Te, e.__scopeSelect),
            r = De(Te, e.__scopeSelect),
            [s, c] = n.useState(!1),
            i = F(o, r.onScrollButtonChange);
        return X(() => {
            if (t.viewport && t.isPositioned) {
                let a = function() {
                    const p = u.scrollHeight - u.clientHeight,
                        m = Math.ceil(u.scrollTop) < p;
                    c(m)
                };
                const u = t.viewport;
                return a(), u.addEventListener("scroll", a), () => u.removeEventListener("scroll", a)
            }
        }, [t.viewport, t.isPositioned]), s ? l.jsx(At, { ...e,
            ref: i,
            onAutoScroll: () => {
                const {
                    viewport: a,
                    selectedItem: u
                } = t;
                a && u && (a.scrollTop = a.scrollTop + u.offsetHeight)
            }
        }) : null
    });
Ot.displayName = Te;
var At = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            onAutoScroll: r,
            ...s
        } = e, c = ee("SelectScrollButton", t), i = n.useRef(null), a = he(t), u = n.useCallback(() => {
            i.current !== null && (window.clearInterval(i.current), i.current = null)
        }, []);
        return n.useEffect(() => () => u(), [u]), X(() => {
            a().find(m => m.ref.current === document.activeElement) ?.ref.current ?.scrollIntoView({
                block: "nearest"
            })
        }, [a]), l.jsx(O.div, {
            "aria-hidden": !0,
            ...s,
            ref: o,
            style: {
                flexShrink: 0,
                ...s.style
            },
            onPointerDown: R(s.onPointerDown, () => {
                i.current === null && (i.current = window.setInterval(r, 50))
            }),
            onPointerMove: R(s.onPointerMove, () => {
                c.onItemLeave ?.(), i.current === null && (i.current = window.setInterval(r, 50))
            }),
            onPointerLeave: R(s.onPointerLeave, () => {
                u()
            })
        })
    }),
    un = "SelectSeparator",
    _t = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            ...r
        } = e;
        return l.jsx(O.div, {
            "aria-hidden": !0,
            ...r,
            ref: o
        })
    });
_t.displayName = un;
var Ie = "SelectArrow",
    pn = n.forwardRef((e, o) => {
        const {
            __scopeSelect: t,
            ...r
        } = e, s = ve(t), c = Q(Ie, t), i = ee(Ie, t);
        return c.open && i.position === "popper" ? l.jsx(Vo, { ...s,
            ...r,
            ref: o
        }) : null
    });
pn.displayName = Ie;

function Dt(e) {
    return e === "" || e === void 0
}
var jt = n.forwardRef((e, o) => {
    const {
        value: t,
        ...r
    } = e, s = n.useRef(null), c = F(o, s), i = lo(t);
    return n.useEffect(() => {
        const a = s.current,
            u = window.HTMLSelectElement.prototype,
            m = Object.getOwnPropertyDescriptor(u, "value").set;
        if (i !== t && m) {
            const w = new Event("change", {
                bubbles: !0
            });
            m.call(a, t), a.dispatchEvent(w)
        }
    }, [i, t]), l.jsx(_e, {
        asChild: !0,
        children: l.jsx("select", { ...r,
            ref: c,
            defaultValue: t
        })
    })
});
jt.displayName = "BubbleSelect";

function Mt(e) {
    const o = ae(e),
        t = n.useRef(""),
        r = n.useRef(0),
        s = n.useCallback(i => {
            const a = t.current + i;
            o(a), (function u(p) {
                t.current = p, window.clearTimeout(r.current), p !== "" && (r.current = window.setTimeout(() => u(""), 1e3))
            })(a)
        }, [o]),
        c = n.useCallback(() => {
            t.current = "", window.clearTimeout(r.current)
        }, []);
    return n.useEffect(() => () => window.clearTimeout(r.current), []), [t, s, c]
}

function Lt(e, o, t) {
    const s = o.length > 1 && Array.from(o).every(p => p === o[0]) ? o[0] : o,
        c = t ? e.indexOf(t) : -1;
    let i = fn(e, Math.max(c, 0));
    s.length === 1 && (i = i.filter(p => p !== t));
    const u = i.find(p => p.textValue.toLowerCase().startsWith(s.toLowerCase()));
    return u !== t ? u : void 0
}

function fn(e, o) {
    return e.map((t, r) => e[(o + r) % e.length])
}
var mn = lt,
    Ft = ut,
    hn = ft,
    vn = mt,
    gn = ht,
    kt = vt,
    xn = yt,
    Bt = Et,
    Ht = Pt,
    wn = Nt,
    yn = It,
    Vt = Rt,
    Wt = Ot,
    Ut = _t;
const $n = mn,
    zn = hn,
    Sn = n.forwardRef(({
        className: e,
        children: o,
        ...t
    }, r) => l.jsxs(Ft, {
        ref: r,
        className: J("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-2", e),
        ...t,
        children: [o, l.jsx(vn, {
            asChild: !0,
            children: l.jsx(Ke, {
                className: "h-4 w-4 opacity-50"
            })
        })]
    }));
Sn.displayName = Ft.displayName;
const Kt = n.forwardRef(({
    className: e,
    ...o
}, t) => l.jsx(Vt, {
    ref: t,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...o,
    children: l.jsx(ho, {
        className: "h-4 w-4"
    })
}));
Kt.displayName = Vt.displayName;
const $t = n.forwardRef(({
    className: e,
    ...o
}, t) => l.jsx(Wt, {
    ref: t,
    className: J("flex cursor-default items-center justify-center py-1", e),
    ...o,
    children: l.jsx(Ke, {
        className: "h-4 w-4"
    })
}));
$t.displayName = Wt.displayName;
const Cn = n.forwardRef(({
    className: e,
    children: o,
    position: t = "popper",
    ...r
}, s) => l.jsx(gn, {
    children: l.jsxs(kt, {
        ref: s,
        className: J("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-foreground text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", t === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
        position: t,
        ...r,
        children: [l.jsx(Kt, {}), l.jsx(xn, {
            className: J("p-1", t === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
            children: o
        }), l.jsx($t, {})]
    })
}));
Cn.displayName = kt.displayName;
const En = n.forwardRef(({
    className: e,
    ...o
}, t) => l.jsx(Bt, {
    ref: t,
    className: J("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...o
}));
En.displayName = Bt.displayName;
const bn = n.forwardRef(({
    className: e,
    children: o,
    ...t
}, r) => l.jsxs(Ht, {
    ref: r,
    className: J("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...t,
    children: [l.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: l.jsx(yn, {
            children: l.jsx(fo, {
                className: "h-4 w-4"
            })
        })
    }), l.jsx(wn, {
        children: o
    })]
}));
bn.displayName = Ht.displayName;
const Pn = n.forwardRef(({
    className: e,
    ...o
}, t) => l.jsx(Ut, {
    ref: t,
    className: J("-mx-1 my-1 h-px bg-muted", e),
    ...o
}));
Pn.displayName = Ut.displayName;
export {
    Bo as A, Ho as C, ko as R, $n as S, Sn as a, zn as b, Cn as c, bn as d, Je as e, Kn as f, Vo as g
};