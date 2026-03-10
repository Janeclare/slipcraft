import {
    r,
    j as i,
    R as Y
} from "./app-CPSemYgC.js";
import {
    c as y
} from "./index-Dc_FVRD7.js";
import {
    c as me,
    u as O
} from "./index-TtBBfnyI.js";
import {
    c as ie,
    u as B,
    a as Ce
} from "./index-BUKYvAHl.js";
import {
    u as He
} from "./index-bfqS6E9x.js";
import {
    r as wn,
    R as xn,
    c as W
} from "./index-BIbNlVZ0.js";
import {
    u as ze
} from "./index-CChplcHQ.js";
import {
    u as yn,
    a as En
} from "./index-ClHHFVVV.js";
import {
    u as Cn,
    o as bn,
    s as Mn,
    f as Rn,
    a as Pn,
    b as _n,
    h as Sn,
    l as In,
    c as Nn
} from "./floating-ui.react-dom-CPrMKUU6.js";
import {
    u as Dn
} from "./index-D_XWqw2c.js";
import {
    P as ve
} from "./index-BN1_Zxci.js";
import {
    u as be
} from "./index-B-GRoRe2.js";
import {
    h as An,
    R as On
} from "./Combination-C3j38xtn.js";
import {
    C as Tn
} from "./chevron-right-Wmdl5VZJ.js";
import {
    C as Fn
} from "./check-CsA8fo_3.js";
import {
    c as jn
} from "./createLucideIcon-rN-Z3mCX.js";
const Ln = jn("Circle", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }]
]);
var Ye = r.forwardRef((e, n) => {
    const {
        children: t,
        ...o
    } = e, s = r.Children.toArray(t), a = s.find($n);
    if (a) {
        const u = a.props.children,
            c = s.map(m => m === a ? r.Children.count(u) > 1 ? r.Children.only(null) : r.isValidElement(u) ? u.props.children : null : m);
        return i.jsx(Me, { ...o,
            ref: n,
            children: r.isValidElement(u) ? r.cloneElement(u, void 0, c) : null
        })
    }
    return i.jsx(Me, { ...o,
        ref: n,
        children: t
    })
});
Ye.displayName = "Slot";
var Me = r.forwardRef((e, n) => {
    const {
        children: t,
        ...o
    } = e;
    if (r.isValidElement(t)) {
        const s = Gn(t),
            a = Kn(o, t.props);
        return t.type !== r.Fragment && (a.ref = n ? me(n, s) : s), r.cloneElement(t, a)
    }
    return r.Children.count(t) > 1 ? r.Children.only(null) : null
});
Me.displayName = "SlotClone";
var kn = ({
    children: e
}) => i.jsx(i.Fragment, {
    children: e
});

function $n(e) {
    return r.isValidElement(e) && e.type === kn
}

function Kn(e, n) {
    const t = { ...n
    };
    for (const o in n) {
        const s = e[o],
            a = n[o];
        /^on[A-Z]/.test(o) ? s && a ? t[o] = (...c) => {
            a(...c), s(...c)
        } : s && (t[o] = s) : o === "style" ? t[o] = { ...s,
            ...a
        } : o === "className" && (t[o] = [s, a].filter(Boolean).join(" "))
    }
    return { ...e,
        ...t
    }
}

function Gn(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
        t = n && "isReactWarning" in n && n.isReactWarning;
    return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref") ?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
}
var Un = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    Bn = Un.reduce((e, n) => {
        const t = r.forwardRef((o, s) => {
            const {
                asChild: a,
                ...u
            } = o, c = a ? Ye : n;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), i.jsx(c, { ...u,
                ref: s
            })
        });
        return t.displayName = `Primitive.${n}`, { ...e,
            [n]: t
        }
    }, {}),
    re = r.forwardRef((e, n) => {
        const {
            children: t,
            ...o
        } = e, s = r.Children.toArray(t), a = s.find(Vn);
        if (a) {
            const u = a.props.children,
                c = s.map(m => m === a ? r.Children.count(u) > 1 ? r.Children.only(null) : r.isValidElement(u) ? u.props.children : null : m);
            return i.jsx(Re, { ...o,
                ref: n,
                children: r.isValidElement(u) ? r.cloneElement(u, void 0, c) : null
            })
        }
        return i.jsx(Re, { ...o,
            ref: n,
            children: t
        })
    });
re.displayName = "Slot";
var Re = r.forwardRef((e, n) => {
    const {
        children: t,
        ...o
    } = e;
    if (r.isValidElement(t)) {
        const s = zn(t),
            a = Hn(o, t.props);
        return t.type !== r.Fragment && (a.ref = n ? me(n, s) : s), r.cloneElement(t, a)
    }
    return r.Children.count(t) > 1 ? r.Children.only(null) : null
});
Re.displayName = "SlotClone";
var Wn = ({
    children: e
}) => i.jsx(i.Fragment, {
    children: e
});

function Vn(e) {
    return r.isValidElement(e) && e.type === Wn
}

function Hn(e, n) {
    const t = { ...n
    };
    for (const o in n) {
        const s = e[o],
            a = n[o];
        /^on[A-Z]/.test(o) ? s && a ? t[o] = (...c) => {
            a(...c), s(...c)
        } : s && (t[o] = s) : o === "style" ? t[o] = { ...s,
            ...a
        } : o === "className" && (t[o] = [s, a].filter(Boolean).join(" "))
    }
    return { ...e,
        ...t
    }
}

function zn(e) {
    let n = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
        t = n && "isReactWarning" in n && n.isReactWarning;
    return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref") ?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
}

function Xe(e) {
    const n = e + "CollectionProvider",
        [t, o] = ie(n),
        [s, a] = t(n, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        u = x => {
            const {
                scope: p,
                children: v
            } = x, C = Y.useRef(null), g = Y.useRef(new Map).current;
            return i.jsx(s, {
                scope: p,
                itemMap: g,
                collectionRef: C,
                children: v
            })
        };
    u.displayName = n;
    const c = e + "CollectionSlot",
        m = Y.forwardRef((x, p) => {
            const {
                scope: v,
                children: C
            } = x, g = a(c, v), E = O(p, g.collectionRef);
            return i.jsx(re, {
                ref: E,
                children: C
            })
        });
    m.displayName = c;
    const l = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        d = Y.forwardRef((x, p) => {
            const {
                scope: v,
                children: C,
                ...g
            } = x, E = Y.useRef(null), P = O(p, E), M = a(l, v);
            return Y.useEffect(() => (M.itemMap.set(E, {
                ref: E,
                ...g
            }), () => {
                M.itemMap.delete(E)
            })), i.jsx(re, {
                [f]: "",
                ref: P,
                children: C
            })
        });
    d.displayName = l;

    function h(x) {
        const p = a(e + "CollectionConsumer", x);
        return Y.useCallback(() => {
            const C = p.collectionRef.current;
            if (!C) return [];
            const g = Array.from(C.querySelectorAll(`[${f}]`));
            return Array.from(p.itemMap.values()).sort((M, I) => g.indexOf(M.ref.current) - g.indexOf(I.ref.current))
        }, [p.collectionRef, p.itemMap])
    }
    return [{
        Provider: u,
        Slot: m,
        ItemSlot: d
    }, h, o]
}
var Yn = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    N = Yn.reduce((e, n) => {
        const t = r.forwardRef((o, s) => {
            const {
                asChild: a,
                ...u
            } = o, c = a ? re : n;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), i.jsx(c, { ...u,
                ref: s
            })
        });
        return t.displayName = `Primitive.${n}`, { ...e,
            [n]: t
        }
    }, {});

function Ze(e, n) {
    e && wn.flushSync(() => e.dispatchEvent(n))
}
var Xn = "DismissableLayer",
    Pe = "dismissableLayer.update",
    Zn = "dismissableLayer.pointerDownOutside",
    qn = "dismissableLayer.focusOutside",
    $e, qe = r.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Je = r.forwardRef((e, n) => {
        const {
            disableOutsidePointerEvents: t = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: a,
            onInteractOutside: u,
            onDismiss: c,
            ...m
        } = e, l = r.useContext(qe), [f, d] = r.useState(null), h = f ?.ownerDocument ?? globalThis ?.document, [, x] = r.useState({}), p = O(n, b => d(b)), v = Array.from(l.layers), [C] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), g = v.indexOf(C), E = f ? v.indexOf(f) : -1, P = l.layersWithOutsidePointerEventsDisabled.size > 0, M = E >= g, I = eo(b => {
            const R = b.target,
                F = [...l.branches].some(D => D.contains(R));
            !M || F || (s ?.(b), u ?.(b), b.defaultPrevented || c ?.())
        }, h), L = to(b => {
            const R = b.target;
            [...l.branches].some(D => D.contains(R)) || (a ?.(b), u ?.(b), b.defaultPrevented || c ?.())
        }, h);
        return yn(b => {
            E === l.layers.size - 1 && (o ?.(b), !b.defaultPrevented && c && (b.preventDefault(), c()))
        }, h), r.useEffect(() => {
            if (f) return t && (l.layersWithOutsidePointerEventsDisabled.size === 0 && ($e = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(f)), l.layers.add(f), Ke(), () => {
                t && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = $e)
            }
        }, [f, h, t, l]), r.useEffect(() => () => {
            f && (l.layers.delete(f), l.layersWithOutsidePointerEventsDisabled.delete(f), Ke())
        }, [f, l]), r.useEffect(() => {
            const b = () => x({});
            return document.addEventListener(Pe, b), () => document.removeEventListener(Pe, b)
        }, []), i.jsx(N.div, { ...m,
            ref: p,
            style: {
                pointerEvents: P ? M ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: y(e.onFocusCapture, L.onFocusCapture),
            onBlurCapture: y(e.onBlurCapture, L.onBlurCapture),
            onPointerDownCapture: y(e.onPointerDownCapture, I.onPointerDownCapture)
        })
    });
Je.displayName = Xn;
var Jn = "DismissableLayerBranch",
    Qn = r.forwardRef((e, n) => {
        const t = r.useContext(qe),
            o = r.useRef(null),
            s = O(n, o);
        return r.useEffect(() => {
            const a = o.current;
            if (a) return t.branches.add(a), () => {
                t.branches.delete(a)
            }
        }, [t.branches]), i.jsx(N.div, { ...e,
            ref: s
        })
    });
Qn.displayName = Jn;

function eo(e, n = globalThis ?.document) {
    const t = B(e),
        o = r.useRef(!1),
        s = r.useRef(() => {});
    return r.useEffect(() => {
        const a = c => {
                if (c.target && !o.current) {
                    let m = function() {
                        Qe(Zn, t, l, {
                            discrete: !0
                        })
                    };
                    const l = {
                        originalEvent: c
                    };
                    c.pointerType === "touch" ? (n.removeEventListener("click", s.current), s.current = m, n.addEventListener("click", s.current, {
                        once: !0
                    })) : m()
                } else n.removeEventListener("click", s.current);
                o.current = !1
            },
            u = window.setTimeout(() => {
                n.addEventListener("pointerdown", a)
            }, 0);
        return () => {
            window.clearTimeout(u), n.removeEventListener("pointerdown", a), n.removeEventListener("click", s.current)
        }
    }, [n, t]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function to(e, n = globalThis ?.document) {
    const t = B(e),
        o = r.useRef(!1);
    return r.useEffect(() => {
        const s = a => {
            a.target && !o.current && Qe(qn, t, {
                originalEvent: a
            }, {
                discrete: !1
            })
        };
        return n.addEventListener("focusin", s), () => n.removeEventListener("focusin", s)
    }, [n, t]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function Ke() {
    const e = new CustomEvent(Pe);
    document.dispatchEvent(e)
}

function Qe(e, n, t, {
    discrete: o
}) {
    const s = t.originalEvent.target,
        a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: t
        });
    n && s.addEventListener(e, n, {
        once: !0
    }), o ? Ze(s, a) : s.dispatchEvent(a)
}
var xe = "focusScope.autoFocusOnMount",
    ye = "focusScope.autoFocusOnUnmount",
    Ge = {
        bubbles: !1,
        cancelable: !0
    },
    no = "FocusScope",
    et = r.forwardRef((e, n) => {
        const {
            loop: t = !1,
            trapped: o = !1,
            onMountAutoFocus: s,
            onUnmountAutoFocus: a,
            ...u
        } = e, [c, m] = r.useState(null), l = B(s), f = B(a), d = r.useRef(null), h = O(n, v => m(v)), x = r.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        r.useEffect(() => {
            if (o) {
                let v = function(P) {
                        if (x.paused || !c) return;
                        const M = P.target;
                        c.contains(M) ? d.current = M : U(d.current, {
                            select: !0
                        })
                    },
                    C = function(P) {
                        if (x.paused || !c) return;
                        const M = P.relatedTarget;
                        M !== null && (c.contains(M) || U(d.current, {
                            select: !0
                        }))
                    },
                    g = function(P) {
                        if (document.activeElement === document.body)
                            for (const I of P) I.removedNodes.length > 0 && U(c)
                    };
                document.addEventListener("focusin", v), document.addEventListener("focusout", C);
                const E = new MutationObserver(g);
                return c && E.observe(c, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", v), document.removeEventListener("focusout", C), E.disconnect()
                }
            }
        }, [o, c, x.paused]), r.useEffect(() => {
            if (c) {
                Be.add(x);
                const v = document.activeElement;
                if (!c.contains(v)) {
                    const g = new CustomEvent(xe, Ge);
                    c.addEventListener(xe, l), c.dispatchEvent(g), g.defaultPrevented || (oo(co(tt(c)), {
                        select: !0
                    }), document.activeElement === v && U(c))
                }
                return () => {
                    c.removeEventListener(xe, l), setTimeout(() => {
                        const g = new CustomEvent(ye, Ge);
                        c.addEventListener(ye, f), c.dispatchEvent(g), g.defaultPrevented || U(v ?? document.body, {
                            select: !0
                        }), c.removeEventListener(ye, f), Be.remove(x)
                    }, 0)
                }
            }
        }, [c, l, f, x]);
        const p = r.useCallback(v => {
            if (!t && !o || x.paused) return;
            const C = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
                g = document.activeElement;
            if (C && g) {
                const E = v.currentTarget,
                    [P, M] = ro(E);
                P && M ? !v.shiftKey && g === M ? (v.preventDefault(), t && U(P, {
                    select: !0
                })) : v.shiftKey && g === P && (v.preventDefault(), t && U(M, {
                    select: !0
                })) : g === E && v.preventDefault()
            }
        }, [t, o, x.paused]);
        return i.jsx(N.div, {
            tabIndex: -1,
            ...u,
            ref: h,
            onKeyDown: p
        })
    });
et.displayName = no;

function oo(e, {
    select: n = !1
} = {}) {
    const t = document.activeElement;
    for (const o of e)
        if (U(o, {
                select: n
            }), document.activeElement !== t) return
}

function ro(e) {
    const n = tt(e),
        t = Ue(n, e),
        o = Ue(n.reverse(), e);
    return [t, o]
}

function tt(e) {
    const n = [],
        t = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const s = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || s ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; t.nextNode();) n.push(t.currentNode);
    return n
}

function Ue(e, n) {
    for (const t of e)
        if (!so(t, {
                upTo: n
            })) return t
}

function so(e, {
    upTo: n
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (n !== void 0 && e === n) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function ao(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function U(e, {
    select: n = !1
} = {}) {
    if (e && e.focus) {
        const t = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== t && ao(e) && n && e.select()
    }
}
var Be = io();

function io() {
    let e = [];
    return {
        add(n) {
            const t = e[0];
            n !== t && t ?.pause(), e = We(e, n), e.unshift(n)
        },
        remove(n) {
            e = We(e, n), e[0] ?.resume()
        }
    }
}

function We(e, n) {
    const t = [...e],
        o = t.indexOf(n);
    return o !== -1 && t.splice(o, 1), t
}

function co(e) {
    return e.filter(n => n.tagName !== "A")
}
var uo = "Arrow",
    nt = r.forwardRef((e, n) => {
        const {
            children: t,
            width: o = 10,
            height: s = 5,
            ...a
        } = e;
        return i.jsx(N.svg, { ...a,
            ref: n,
            width: o,
            height: s,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? t : i.jsx("polygon", {
                points: "0,0 30,0 15,10"
            })
        })
    });
nt.displayName = uo;
var lo = nt,
    Ie = "Popper",
    [ot, rt] = ie(Ie),
    [fo, st] = ot(Ie),
    at = e => {
        const {
            __scopePopper: n,
            children: t
        } = e, [o, s] = r.useState(null);
        return i.jsx(fo, {
            scope: n,
            anchor: o,
            onAnchorChange: s,
            children: t
        })
    };
at.displayName = Ie;
var it = "PopperAnchor",
    ct = r.forwardRef((e, n) => {
        const {
            __scopePopper: t,
            virtualRef: o,
            ...s
        } = e, a = st(it, t), u = r.useRef(null), c = O(n, u);
        return r.useEffect(() => {
            a.onAnchorChange(o ?.current || u.current)
        }), o ? null : i.jsx(N.div, { ...s,
            ref: c
        })
    });
ct.displayName = it;
var Ne = "PopperContent",
    [po, mo] = ot(Ne),
    ut = r.forwardRef((e, n) => {
        const {
            __scopePopper: t,
            side: o = "bottom",
            sideOffset: s = 0,
            align: a = "center",
            alignOffset: u = 0,
            arrowPadding: c = 0,
            avoidCollisions: m = !0,
            collisionBoundary: l = [],
            collisionPadding: f = 0,
            sticky: d = "partial",
            hideWhenDetached: h = !1,
            updatePositionStrategy: x = "optimized",
            onPlaced: p,
            ...v
        } = e, C = st(Ne, t), [g, E] = r.useState(null), P = O(n, _ => E(_)), [M, I] = r.useState(null), L = Dn(M), b = L ?.width ?? 0, R = L ?.height ?? 0, F = o + (a !== "center" ? "-" + a : ""), D = typeof f == "number" ? f : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...f
        }, K = Array.isArray(l) ? l : [l], V = K.length > 0, $ = {
            padding: D,
            boundary: K.filter(ho),
            altBoundary: V
        }, {
            refs: q,
            floatingStyles: J,
            placement: j,
            isPositioned: Q,
            middlewareData: A
        } = Cn({
            strategy: "fixed",
            placement: F,
            whileElementsMounted: (..._) => Nn(..._, {
                animationFrame: x === "always"
            }),
            elements: {
                reference: C.anchor
            },
            middleware: [bn({
                mainAxis: s + R,
                alignmentAxis: u
            }), m && Mn({
                mainAxis: !0,
                crossAxis: !1,
                limiter: d === "partial" ? In() : void 0,
                ...$
            }), m && Rn({ ...$
            }), Pn({ ...$,
                apply: ({
                    elements: _,
                    rects: ne,
                    availableWidth: mn,
                    availableHeight: vn
                }) => {
                    const {
                        width: hn,
                        height: gn
                    } = ne.reference, de = _.floating.style;
                    de.setProperty("--radix-popper-available-width", `${mn}px`), de.setProperty("--radix-popper-available-height", `${vn}px`), de.setProperty("--radix-popper-anchor-width", `${hn}px`), de.setProperty("--radix-popper-anchor-height", `${gn}px`)
                }
            }), M && _n({
                element: M,
                padding: c
            }), go({
                arrowWidth: b,
                arrowHeight: R
            }), h && Sn({
                strategy: "referenceHidden",
                ...$
            })]
        }), [w, G] = ft(j), k = B(p);
        Ce(() => {
            Q && k ?.()
        }, [Q, k]);
        const H = A.arrow ?.x,
            ee = A.arrow ?.y,
            te = A.arrow ?.centerOffset !== 0,
            [le, z] = r.useState();
        return Ce(() => {
            g && z(window.getComputedStyle(g).zIndex)
        }, [g]), i.jsx("div", {
            ref: q.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...J,
                transform: Q ? J.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: le,
                "--radix-popper-transform-origin": [A.transformOrigin ?.x, A.transformOrigin ?.y].join(" "),
                ...A.hide ?.referenceHidden && {
                    visibility: "hidden",
                    pointerEvents: "none"
                }
            },
            dir: e.dir,
            children: i.jsx(po, {
                scope: t,
                placedSide: w,
                onArrowChange: I,
                arrowX: H,
                arrowY: ee,
                shouldHideArrow: te,
                children: i.jsx(N.div, {
                    "data-side": w,
                    "data-align": G,
                    ...v,
                    ref: P,
                    style: { ...v.style,
                        animation: Q ? void 0 : "none"
                    }
                })
            })
        })
    });
ut.displayName = Ne;
var lt = "PopperArrow",
    vo = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right"
    },
    dt = r.forwardRef(function(n, t) {
        const {
            __scopePopper: o,
            ...s
        } = n, a = mo(lt, o), u = vo[a.placedSide];
        return i.jsx("span", {
            ref: a.onArrowChange,
            style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [u]: 0,
                transformOrigin: {
                    top: "",
                    right: "0 0",
                    bottom: "center 0",
                    left: "100% 0"
                }[a.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)"
                }[a.placedSide],
                visibility: a.shouldHideArrow ? "hidden" : void 0
            },
            children: i.jsx(lo, { ...s,
                ref: t,
                style: { ...s.style,
                    display: "block"
                }
            })
        })
    });
dt.displayName = lt;

function ho(e) {
    return e !== null
}
var go = e => ({
    name: "transformOrigin",
    options: e,
    fn(n) {
        const {
            placement: t,
            rects: o,
            middlewareData: s
        } = n, u = s.arrow ?.centerOffset !== 0, c = u ? 0 : e.arrowWidth, m = u ? 0 : e.arrowHeight, [l, f] = ft(t), d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f], h = (s.arrow ?.x ?? 0) + c / 2, x = (s.arrow ?.y ?? 0) + m / 2;
        let p = "",
            v = "";
        return l === "bottom" ? (p = u ? d : `${h}px`, v = `${-m}px`) : l === "top" ? (p = u ? d : `${h}px`, v = `${o.floating.height+m}px`) : l === "right" ? (p = `${-m}px`, v = u ? d : `${x}px`) : l === "left" && (p = `${o.floating.width+m}px`, v = u ? d : `${x}px`), {
            data: {
                x: p,
                y: v
            }
        }
    }
});

function ft(e) {
    const [n, t = "center"] = e.split("-");
    return [n, t]
}
var wo = at,
    xo = ct,
    yo = ut,
    Eo = dt,
    Co = "Portal",
    pt = r.forwardRef((e, n) => {
        const {
            container: t,
            ...o
        } = e, [s, a] = r.useState(!1);
        Ce(() => a(!0), []);
        const u = t || s && globalThis ?.document ?.body;
        return u ? xn.createPortal(i.jsx(N.div, { ...o,
            ref: n
        }), u) : null
    });
pt.displayName = Co;
var Ee = "rovingFocusGroup.onEntryFocus",
    bo = {
        bubbles: !1,
        cancelable: !0
    },
    he = "RovingFocusGroup",
    [_e, mt, Mo] = Xe(he),
    [Ro, vt] = ie(he, [Mo]),
    [Po, _o] = Ro(he),
    ht = r.forwardRef((e, n) => i.jsx(_e.Provider, {
        scope: e.__scopeRovingFocusGroup,
        children: i.jsx(_e.Slot, {
            scope: e.__scopeRovingFocusGroup,
            children: i.jsx(So, { ...e,
                ref: n
            })
        })
    }));
ht.displayName = he;
var So = r.forwardRef((e, n) => {
        const {
            __scopeRovingFocusGroup: t,
            orientation: o,
            loop: s = !1,
            dir: a,
            currentTabStopId: u,
            defaultCurrentTabStopId: c,
            onCurrentTabStopIdChange: m,
            onEntryFocus: l,
            preventScrollOnEntryFocus: f = !1,
            ...d
        } = e, h = r.useRef(null), x = O(n, h), p = ze(a), [v = null, C] = He({
            prop: u,
            defaultProp: c,
            onChange: m
        }), [g, E] = r.useState(!1), P = B(l), M = mt(t), I = r.useRef(!1), [L, b] = r.useState(0);
        return r.useEffect(() => {
            const R = h.current;
            if (R) return R.addEventListener(Ee, P), () => R.removeEventListener(Ee, P)
        }, [P]), i.jsx(Po, {
            scope: t,
            orientation: o,
            dir: p,
            loop: s,
            currentTabStopId: v,
            onItemFocus: r.useCallback(R => C(R), [C]),
            onItemShiftTab: r.useCallback(() => E(!0), []),
            onFocusableItemAdd: r.useCallback(() => b(R => R + 1), []),
            onFocusableItemRemove: r.useCallback(() => b(R => R - 1), []),
            children: i.jsx(N.div, {
                tabIndex: g || L === 0 ? -1 : 0,
                "data-orientation": o,
                ...d,
                ref: x,
                style: {
                    outline: "none",
                    ...e.style
                },
                onMouseDown: y(e.onMouseDown, () => {
                    I.current = !0
                }),
                onFocus: y(e.onFocus, R => {
                    const F = !I.current;
                    if (R.target === R.currentTarget && F && !g) {
                        const D = new CustomEvent(Ee, bo);
                        if (R.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                            const K = M().filter(j => j.focusable),
                                V = K.find(j => j.active),
                                $ = K.find(j => j.id === v),
                                J = [V, $, ...K].filter(Boolean).map(j => j.ref.current);
                            xt(J, f)
                        }
                    }
                    I.current = !1
                }),
                onBlur: y(e.onBlur, () => E(!1))
            })
        })
    }),
    gt = "RovingFocusGroupItem",
    wt = r.forwardRef((e, n) => {
        const {
            __scopeRovingFocusGroup: t,
            focusable: o = !0,
            active: s = !1,
            tabStopId: a,
            ...u
        } = e, c = be(), m = a || c, l = _o(gt, t), f = l.currentTabStopId === m, d = mt(t), {
            onFocusableItemAdd: h,
            onFocusableItemRemove: x
        } = l;
        return r.useEffect(() => {
            if (o) return h(), () => x()
        }, [o, h, x]), i.jsx(_e.ItemSlot, {
            scope: t,
            id: m,
            focusable: o,
            active: s,
            children: i.jsx(N.span, {
                tabIndex: f ? 0 : -1,
                "data-orientation": l.orientation,
                ...u,
                ref: n,
                onMouseDown: y(e.onMouseDown, p => {
                    o ? l.onItemFocus(m) : p.preventDefault()
                }),
                onFocus: y(e.onFocus, () => l.onItemFocus(m)),
                onKeyDown: y(e.onKeyDown, p => {
                    if (p.key === "Tab" && p.shiftKey) {
                        l.onItemShiftTab();
                        return
                    }
                    if (p.target !== p.currentTarget) return;
                    const v = Do(p, l.orientation, l.dir);
                    if (v !== void 0) {
                        if (p.metaKey || p.ctrlKey || p.altKey || p.shiftKey) return;
                        p.preventDefault();
                        let g = d().filter(E => E.focusable).map(E => E.ref.current);
                        if (v === "last") g.reverse();
                        else if (v === "prev" || v === "next") {
                            v === "prev" && g.reverse();
                            const E = g.indexOf(p.currentTarget);
                            g = l.loop ? Ao(g, E + 1) : g.slice(E + 1)
                        }
                        setTimeout(() => xt(g))
                    }
                })
            })
        })
    });
wt.displayName = gt;
var Io = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};

function No(e, n) {
    return n !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function Do(e, n, t) {
    const o = No(e.key, t);
    if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o))) return Io[o]
}

function xt(e, n = !1) {
    const t = document.activeElement;
    for (const o of e)
        if (o === t || (o.focus({
                preventScroll: n
            }), document.activeElement !== t)) return
}

function Ao(e, n) {
    return e.map((t, o) => e[(n + o) % e.length])
}
var Oo = ht,
    To = wt,
    Se = ["Enter", " "],
    Fo = ["ArrowDown", "PageUp", "Home"],
    yt = ["ArrowUp", "PageDown", "End"],
    jo = [...Fo, ...yt],
    Lo = {
        ltr: [...Se, "ArrowRight"],
        rtl: [...Se, "ArrowLeft"]
    },
    ko = {
        ltr: ["ArrowLeft"],
        rtl: ["ArrowRight"]
    },
    ce = "Menu",
    [se, $o, Ko] = Xe(ce),
    [X, Et] = ie(ce, [Ko, rt, vt]),
    ge = rt(),
    Ct = vt(),
    [Go, Z] = X(ce),
    [Uo, ue] = X(ce),
    bt = e => {
        const {
            __scopeMenu: n,
            open: t = !1,
            children: o,
            dir: s,
            onOpenChange: a,
            modal: u = !0
        } = e, c = ge(n), [m, l] = r.useState(null), f = r.useRef(!1), d = B(a), h = ze(s);
        return r.useEffect(() => {
            const x = () => {
                    f.current = !0, document.addEventListener("pointerdown", p, {
                        capture: !0,
                        once: !0
                    }), document.addEventListener("pointermove", p, {
                        capture: !0,
                        once: !0
                    })
                },
                p = () => f.current = !1;
            return document.addEventListener("keydown", x, {
                capture: !0
            }), () => {
                document.removeEventListener("keydown", x, {
                    capture: !0
                }), document.removeEventListener("pointerdown", p, {
                    capture: !0
                }), document.removeEventListener("pointermove", p, {
                    capture: !0
                })
            }
        }, []), i.jsx(wo, { ...c,
            children: i.jsx(Go, {
                scope: n,
                open: t,
                onOpenChange: d,
                content: m,
                onContentChange: l,
                children: i.jsx(Uo, {
                    scope: n,
                    onClose: r.useCallback(() => d(!1), [d]),
                    isUsingKeyboardRef: f,
                    dir: h,
                    modal: u,
                    children: o
                })
            })
        })
    };
bt.displayName = ce;
var Bo = "MenuAnchor",
    De = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            ...o
        } = e, s = ge(t);
        return i.jsx(xo, { ...s,
            ...o,
            ref: n
        })
    });
De.displayName = Bo;
var Ae = "MenuPortal",
    [Wo, Mt] = X(Ae, {
        forceMount: void 0
    }),
    Rt = e => {
        const {
            __scopeMenu: n,
            forceMount: t,
            children: o,
            container: s
        } = e, a = Z(Ae, n);
        return i.jsx(Wo, {
            scope: n,
            forceMount: t,
            children: i.jsx(ve, {
                present: t || a.open,
                children: i.jsx(pt, {
                    asChild: !0,
                    container: s,
                    children: o
                })
            })
        })
    };
Rt.displayName = Ae;
var T = "MenuContent",
    [Vo, Oe] = X(T),
    Pt = r.forwardRef((e, n) => {
        const t = Mt(T, e.__scopeMenu),
            {
                forceMount: o = t.forceMount,
                ...s
            } = e,
            a = Z(T, e.__scopeMenu),
            u = ue(T, e.__scopeMenu);
        return i.jsx(se.Provider, {
            scope: e.__scopeMenu,
            children: i.jsx(ve, {
                present: o || a.open,
                children: i.jsx(se.Slot, {
                    scope: e.__scopeMenu,
                    children: u.modal ? i.jsx(Ho, { ...s,
                        ref: n
                    }) : i.jsx(zo, { ...s,
                        ref: n
                    })
                })
            })
        })
    }),
    Ho = r.forwardRef((e, n) => {
        const t = Z(T, e.__scopeMenu),
            o = r.useRef(null),
            s = O(n, o);
        return r.useEffect(() => {
            const a = o.current;
            if (a) return An(a)
        }, []), i.jsx(Te, { ...e,
            ref: s,
            trapFocus: t.open,
            disableOutsidePointerEvents: t.open,
            disableOutsideScroll: !0,
            onFocusOutside: y(e.onFocusOutside, a => a.preventDefault(), {
                checkForDefaultPrevented: !1
            }),
            onDismiss: () => t.onOpenChange(!1)
        })
    }),
    zo = r.forwardRef((e, n) => {
        const t = Z(T, e.__scopeMenu);
        return i.jsx(Te, { ...e,
            ref: n,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => t.onOpenChange(!1)
        })
    }),
    Te = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            loop: o = !1,
            trapFocus: s,
            onOpenAutoFocus: a,
            onCloseAutoFocus: u,
            disableOutsidePointerEvents: c,
            onEntryFocus: m,
            onEscapeKeyDown: l,
            onPointerDownOutside: f,
            onFocusOutside: d,
            onInteractOutside: h,
            onDismiss: x,
            disableOutsideScroll: p,
            ...v
        } = e, C = Z(T, t), g = ue(T, t), E = ge(t), P = Ct(t), M = $o(t), [I, L] = r.useState(null), b = r.useRef(null), R = O(n, b, C.onContentChange), F = r.useRef(0), D = r.useRef(""), K = r.useRef(0), V = r.useRef(null), $ = r.useRef("right"), q = r.useRef(0), J = p ? On : r.Fragment, j = p ? {
            as: re,
            allowPinchZoom: !0
        } : void 0, Q = w => {
            const G = D.current + w,
                k = M().filter(_ => !_.disabled),
                H = document.activeElement,
                ee = k.find(_ => _.ref.current === H) ?.textValue,
                te = k.map(_ => _.textValue),
                le = sr(te, G, ee),
                z = k.find(_ => _.textValue === le) ?.ref.current;
            (function _(ne) {
                D.current = ne, window.clearTimeout(F.current), ne !== "" && (F.current = window.setTimeout(() => _(""), 1e3))
            })(G), z && setTimeout(() => z.focus())
        };
        r.useEffect(() => () => window.clearTimeout(F.current), []), En();
        const A = r.useCallback(w => $.current === V.current ?.side && ir(w, V.current ?.area), []);
        return i.jsx(Vo, {
            scope: t,
            searchRef: D,
            onItemEnter: r.useCallback(w => {
                A(w) && w.preventDefault()
            }, [A]),
            onItemLeave: r.useCallback(w => {
                A(w) || (b.current ?.focus(), L(null))
            }, [A]),
            onTriggerLeave: r.useCallback(w => {
                A(w) && w.preventDefault()
            }, [A]),
            pointerGraceTimerRef: K,
            onPointerGraceIntentChange: r.useCallback(w => {
                V.current = w
            }, []),
            children: i.jsx(J, { ...j,
                children: i.jsx(et, {
                    asChild: !0,
                    trapped: s,
                    onMountAutoFocus: y(a, w => {
                        w.preventDefault(), b.current ?.focus({
                            preventScroll: !0
                        })
                    }),
                    onUnmountAutoFocus: u,
                    children: i.jsx(Je, {
                        asChild: !0,
                        disableOutsidePointerEvents: c,
                        onEscapeKeyDown: l,
                        onPointerDownOutside: f,
                        onFocusOutside: d,
                        onInteractOutside: h,
                        onDismiss: x,
                        children: i.jsx(Oo, {
                            asChild: !0,
                            ...P,
                            dir: g.dir,
                            orientation: "vertical",
                            loop: o,
                            currentTabStopId: I,
                            onCurrentTabStopIdChange: L,
                            onEntryFocus: y(m, w => {
                                g.isUsingKeyboardRef.current || w.preventDefault()
                            }),
                            preventScrollOnEntryFocus: !0,
                            children: i.jsx(yo, {
                                role: "menu",
                                "aria-orientation": "vertical",
                                "data-state": Ut(C.open),
                                "data-radix-menu-content": "",
                                dir: g.dir,
                                ...E,
                                ...v,
                                ref: R,
                                style: {
                                    outline: "none",
                                    ...v.style
                                },
                                onKeyDown: y(v.onKeyDown, w => {
                                    const k = w.target.closest("[data-radix-menu-content]") === w.currentTarget,
                                        H = w.ctrlKey || w.altKey || w.metaKey,
                                        ee = w.key.length === 1;
                                    k && (w.key === "Tab" && w.preventDefault(), !H && ee && Q(w.key));
                                    const te = b.current;
                                    if (w.target !== te || !jo.includes(w.key)) return;
                                    w.preventDefault();
                                    const z = M().filter(_ => !_.disabled).map(_ => _.ref.current);
                                    yt.includes(w.key) && z.reverse(), or(z)
                                }),
                                onBlur: y(e.onBlur, w => {
                                    w.currentTarget.contains(w.target) || (window.clearTimeout(F.current), D.current = "")
                                }),
                                onPointerMove: y(e.onPointerMove, ae(w => {
                                    const G = w.target,
                                        k = q.current !== w.clientX;
                                    if (w.currentTarget.contains(G) && k) {
                                        const H = w.clientX > q.current ? "right" : "left";
                                        $.current = H, q.current = w.clientX
                                    }
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
Pt.displayName = T;
var Yo = "MenuGroup",
    Fe = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            ...o
        } = e;
        return i.jsx(N.div, {
            role: "group",
            ...o,
            ref: n
        })
    });
Fe.displayName = Yo;
var Xo = "MenuLabel",
    _t = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            ...o
        } = e;
        return i.jsx(N.div, { ...o,
            ref: n
        })
    });
_t.displayName = Xo;
var fe = "MenuItem",
    Ve = "menu.itemSelect",
    we = r.forwardRef((e, n) => {
        const {
            disabled: t = !1,
            onSelect: o,
            ...s
        } = e, a = r.useRef(null), u = ue(fe, e.__scopeMenu), c = Oe(fe, e.__scopeMenu), m = O(n, a), l = r.useRef(!1), f = () => {
            const d = a.current;
            if (!t && d) {
                const h = new CustomEvent(Ve, {
                    bubbles: !0,
                    cancelable: !0
                });
                d.addEventListener(Ve, x => o ?.(x), {
                    once: !0
                }), Ze(d, h), h.defaultPrevented ? l.current = !1 : u.onClose()
            }
        };
        return i.jsx(St, { ...s,
            ref: m,
            disabled: t,
            onClick: y(e.onClick, f),
            onPointerDown: d => {
                e.onPointerDown ?.(d), l.current = !0
            },
            onPointerUp: y(e.onPointerUp, d => {
                l.current || d.currentTarget ?.click()
            }),
            onKeyDown: y(e.onKeyDown, d => {
                const h = c.searchRef.current !== "";
                t || h && d.key === " " || Se.includes(d.key) && (d.currentTarget.click(), d.preventDefault())
            })
        })
    });
we.displayName = fe;
var St = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            disabled: o = !1,
            textValue: s,
            ...a
        } = e, u = Oe(fe, t), c = Ct(t), m = r.useRef(null), l = O(n, m), [f, d] = r.useState(!1), [h, x] = r.useState("");
        return r.useEffect(() => {
            const p = m.current;
            p && x((p.textContent ?? "").trim())
        }, [a.children]), i.jsx(se.ItemSlot, {
            scope: t,
            disabled: o,
            textValue: s ?? h,
            children: i.jsx(To, {
                asChild: !0,
                ...c,
                focusable: !o,
                children: i.jsx(N.div, {
                    role: "menuitem",
                    "data-highlighted": f ? "" : void 0,
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    ...a,
                    ref: l,
                    onPointerMove: y(e.onPointerMove, ae(p => {
                        o ? u.onItemLeave(p) : (u.onItemEnter(p), p.defaultPrevented || p.currentTarget.focus({
                            preventScroll: !0
                        }))
                    })),
                    onPointerLeave: y(e.onPointerLeave, ae(p => u.onItemLeave(p))),
                    onFocus: y(e.onFocus, () => d(!0)),
                    onBlur: y(e.onBlur, () => d(!1))
                })
            })
        })
    }),
    Zo = "MenuCheckboxItem",
    It = r.forwardRef((e, n) => {
        const {
            checked: t = !1,
            onCheckedChange: o,
            ...s
        } = e;
        return i.jsx(Tt, {
            scope: e.__scopeMenu,
            checked: t,
            children: i.jsx(we, {
                role: "menuitemcheckbox",
                "aria-checked": pe(t) ? "mixed" : t,
                ...s,
                ref: n,
                "data-state": Le(t),
                onSelect: y(s.onSelect, () => o ?.(pe(t) ? !0 : !t), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
It.displayName = Zo;
var Nt = "MenuRadioGroup",
    [qo, Jo] = X(Nt, {
        value: void 0,
        onValueChange: () => {}
    }),
    Dt = r.forwardRef((e, n) => {
        const {
            value: t,
            onValueChange: o,
            ...s
        } = e, a = B(o);
        return i.jsx(qo, {
            scope: e.__scopeMenu,
            value: t,
            onValueChange: a,
            children: i.jsx(Fe, { ...s,
                ref: n
            })
        })
    });
Dt.displayName = Nt;
var At = "MenuRadioItem",
    Ot = r.forwardRef((e, n) => {
        const {
            value: t,
            ...o
        } = e, s = Jo(At, e.__scopeMenu), a = t === s.value;
        return i.jsx(Tt, {
            scope: e.__scopeMenu,
            checked: a,
            children: i.jsx(we, {
                role: "menuitemradio",
                "aria-checked": a,
                ...o,
                ref: n,
                "data-state": Le(a),
                onSelect: y(o.onSelect, () => s.onValueChange ?.(t), {
                    checkForDefaultPrevented: !1
                })
            })
        })
    });
Ot.displayName = At;
var je = "MenuItemIndicator",
    [Tt, Qo] = X(je, {
        checked: !1
    }),
    Ft = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            forceMount: o,
            ...s
        } = e, a = Qo(je, t);
        return i.jsx(ve, {
            present: o || pe(a.checked) || a.checked === !0,
            children: i.jsx(N.span, { ...s,
                ref: n,
                "data-state": Le(a.checked)
            })
        })
    });
Ft.displayName = je;
var er = "MenuSeparator",
    jt = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            ...o
        } = e;
        return i.jsx(N.div, {
            role: "separator",
            "aria-orientation": "horizontal",
            ...o,
            ref: n
        })
    });
jt.displayName = er;
var tr = "MenuArrow",
    Lt = r.forwardRef((e, n) => {
        const {
            __scopeMenu: t,
            ...o
        } = e, s = ge(t);
        return i.jsx(Eo, { ...s,
            ...o,
            ref: n
        })
    });
Lt.displayName = tr;
var nr = "MenuSub",
    [ps, kt] = X(nr),
    oe = "MenuSubTrigger",
    $t = r.forwardRef((e, n) => {
        const t = Z(oe, e.__scopeMenu),
            o = ue(oe, e.__scopeMenu),
            s = kt(oe, e.__scopeMenu),
            a = Oe(oe, e.__scopeMenu),
            u = r.useRef(null),
            {
                pointerGraceTimerRef: c,
                onPointerGraceIntentChange: m
            } = a,
            l = {
                __scopeMenu: e.__scopeMenu
            },
            f = r.useCallback(() => {
                u.current && window.clearTimeout(u.current), u.current = null
            }, []);
        return r.useEffect(() => f, [f]), r.useEffect(() => {
            const d = c.current;
            return () => {
                window.clearTimeout(d), m(null)
            }
        }, [c, m]), i.jsx(De, {
            asChild: !0,
            ...l,
            children: i.jsx(St, {
                id: s.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": t.open,
                "aria-controls": s.contentId,
                "data-state": Ut(t.open),
                ...e,
                ref: me(n, s.onTriggerChange),
                onClick: d => {
                    e.onClick ?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), t.open || t.onOpenChange(!0))
                },
                onPointerMove: y(e.onPointerMove, ae(d => {
                    a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !t.open && !u.current && (a.onPointerGraceIntentChange(null), u.current = window.setTimeout(() => {
                        t.onOpenChange(!0), f()
                    }, 100))
                })),
                onPointerLeave: y(e.onPointerLeave, ae(d => {
                    f();
                    const h = t.content ?.getBoundingClientRect();
                    if (h) {
                        const x = t.content ?.dataset.side,
                            p = x === "right",
                            v = p ? -5 : 5,
                            C = h[p ? "left" : "right"],
                            g = h[p ? "right" : "left"];
                        a.onPointerGraceIntentChange({
                            area: [{
                                x: d.clientX + v,
                                y: d.clientY
                            }, {
                                x: C,
                                y: h.top
                            }, {
                                x: g,
                                y: h.top
                            }, {
                                x: g,
                                y: h.bottom
                            }, {
                                x: C,
                                y: h.bottom
                            }],
                            side: x
                        }), window.clearTimeout(c.current), c.current = window.setTimeout(() => a.onPointerGraceIntentChange(null), 300)
                    } else {
                        if (a.onTriggerLeave(d), d.defaultPrevented) return;
                        a.onPointerGraceIntentChange(null)
                    }
                })),
                onKeyDown: y(e.onKeyDown, d => {
                    const h = a.searchRef.current !== "";
                    e.disabled || h && d.key === " " || Lo[o.dir].includes(d.key) && (t.onOpenChange(!0), t.content ?.focus(), d.preventDefault())
                })
            })
        })
    });
$t.displayName = oe;
var Kt = "MenuSubContent",
    Gt = r.forwardRef((e, n) => {
        const t = Mt(T, e.__scopeMenu),
            {
                forceMount: o = t.forceMount,
                ...s
            } = e,
            a = Z(T, e.__scopeMenu),
            u = ue(T, e.__scopeMenu),
            c = kt(Kt, e.__scopeMenu),
            m = r.useRef(null),
            l = O(n, m);
        return i.jsx(se.Provider, {
            scope: e.__scopeMenu,
            children: i.jsx(ve, {
                present: o || a.open,
                children: i.jsx(se.Slot, {
                    scope: e.__scopeMenu,
                    children: i.jsx(Te, {
                        id: c.contentId,
                        "aria-labelledby": c.triggerId,
                        ...s,
                        ref: l,
                        align: "start",
                        side: u.dir === "rtl" ? "left" : "right",
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        trapFocus: !1,
                        onOpenAutoFocus: f => {
                            u.isUsingKeyboardRef.current && m.current ?.focus(), f.preventDefault()
                        },
                        onCloseAutoFocus: f => f.preventDefault(),
                        onFocusOutside: y(e.onFocusOutside, f => {
                            f.target !== c.trigger && a.onOpenChange(!1)
                        }),
                        onEscapeKeyDown: y(e.onEscapeKeyDown, f => {
                            u.onClose(), f.preventDefault()
                        }),
                        onKeyDown: y(e.onKeyDown, f => {
                            const d = f.currentTarget.contains(f.target),
                                h = ko[u.dir].includes(f.key);
                            d && h && (a.onOpenChange(!1), c.trigger ?.focus(), f.preventDefault())
                        })
                    })
                })
            })
        })
    });
Gt.displayName = Kt;

function Ut(e) {
    return e ? "open" : "closed"
}

function pe(e) {
    return e === "indeterminate"
}

function Le(e) {
    return pe(e) ? "indeterminate" : e ? "checked" : "unchecked"
}

function or(e) {
    const n = document.activeElement;
    for (const t of e)
        if (t === n || (t.focus(), document.activeElement !== n)) return
}

function rr(e, n) {
    return e.map((t, o) => e[(n + o) % e.length])
}

function sr(e, n, t) {
    const s = n.length > 1 && Array.from(n).every(l => l === n[0]) ? n[0] : n,
        a = t ? e.indexOf(t) : -1;
    let u = rr(e, Math.max(a, 0));
    s.length === 1 && (u = u.filter(l => l !== t));
    const m = u.find(l => l.toLowerCase().startsWith(s.toLowerCase()));
    return m !== t ? m : void 0
}

function ar(e, n) {
    const {
        x: t,
        y: o
    } = e;
    let s = !1;
    for (let a = 0, u = n.length - 1; a < n.length; u = a++) {
        const c = n[a].x,
            m = n[a].y,
            l = n[u].x,
            f = n[u].y;
        m > o != f > o && t < (l - c) * (o - m) / (f - m) + c && (s = !s)
    }
    return s
}

function ir(e, n) {
    if (!n) return !1;
    const t = {
        x: e.clientX,
        y: e.clientY
    };
    return ar(t, n)
}

function ae(e) {
    return n => n.pointerType === "mouse" ? e(n) : void 0
}
var cr = bt,
    ur = De,
    lr = Rt,
    dr = Pt,
    fr = Fe,
    pr = _t,
    mr = we,
    vr = It,
    hr = Dt,
    gr = Ot,
    wr = Ft,
    xr = jt,
    yr = Lt,
    Er = $t,
    Cr = Gt,
    ke = "DropdownMenu",
    [br] = ie(ke, [Et]),
    S = Et(),
    [Mr, Bt] = br(ke),
    Wt = e => {
        const {
            __scopeDropdownMenu: n,
            children: t,
            dir: o,
            open: s,
            defaultOpen: a,
            onOpenChange: u,
            modal: c = !0
        } = e, m = S(n), l = r.useRef(null), [f = !1, d] = He({
            prop: s,
            defaultProp: a,
            onChange: u
        });
        return i.jsx(Mr, {
            scope: n,
            triggerId: be(),
            triggerRef: l,
            contentId: be(),
            open: f,
            onOpenChange: d,
            onOpenToggle: r.useCallback(() => d(h => !h), [d]),
            modal: c,
            children: i.jsx(cr, { ...m,
                open: f,
                onOpenChange: d,
                dir: o,
                modal: c,
                children: t
            })
        })
    };
Wt.displayName = ke;
var Vt = "DropdownMenuTrigger",
    Ht = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            disabled: o = !1,
            ...s
        } = e, a = Bt(Vt, t), u = S(t);
        return i.jsx(ur, {
            asChild: !0,
            ...u,
            children: i.jsx(Bn.button, {
                type: "button",
                id: a.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": a.open,
                "aria-controls": a.open ? a.contentId : void 0,
                "data-state": a.open ? "open" : "closed",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                ...s,
                ref: me(n, a.triggerRef),
                onPointerDown: y(e.onPointerDown, c => {
                    !o && c.button === 0 && c.ctrlKey === !1 && (a.onOpenToggle(), a.open || c.preventDefault())
                }),
                onKeyDown: y(e.onKeyDown, c => {
                    o || (["Enter", " "].includes(c.key) && a.onOpenToggle(), c.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(c.key) && c.preventDefault())
                })
            })
        })
    });
Ht.displayName = Vt;
var Rr = "DropdownMenuPortal",
    zt = e => {
        const {
            __scopeDropdownMenu: n,
            ...t
        } = e, o = S(n);
        return i.jsx(lr, { ...o,
            ...t
        })
    };
zt.displayName = Rr;
var Yt = "DropdownMenuContent",
    Xt = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = Bt(Yt, t), a = S(t), u = r.useRef(!1);
        return i.jsx(dr, {
            id: s.contentId,
            "aria-labelledby": s.triggerId,
            ...a,
            ...o,
            ref: n,
            onCloseAutoFocus: y(e.onCloseAutoFocus, c => {
                u.current || s.triggerRef.current ?.focus(), u.current = !1, c.preventDefault()
            }),
            onInteractOutside: y(e.onInteractOutside, c => {
                const m = c.detail.originalEvent,
                    l = m.button === 0 && m.ctrlKey === !0,
                    f = m.button === 2 || l;
                (!s.modal || f) && (u.current = !0)
            }),
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
Xt.displayName = Yt;
var Pr = "DropdownMenuGroup",
    _r = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(fr, { ...s,
            ...o,
            ref: n
        })
    });
_r.displayName = Pr;
var Sr = "DropdownMenuLabel",
    Zt = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(pr, { ...s,
            ...o,
            ref: n
        })
    });
Zt.displayName = Sr;
var Ir = "DropdownMenuItem",
    qt = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(mr, { ...s,
            ...o,
            ref: n
        })
    });
qt.displayName = Ir;
var Nr = "DropdownMenuCheckboxItem",
    Jt = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(vr, { ...s,
            ...o,
            ref: n
        })
    });
Jt.displayName = Nr;
var Dr = "DropdownMenuRadioGroup",
    Ar = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(hr, { ...s,
            ...o,
            ref: n
        })
    });
Ar.displayName = Dr;
var Or = "DropdownMenuRadioItem",
    Qt = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(gr, { ...s,
            ...o,
            ref: n
        })
    });
Qt.displayName = Or;
var Tr = "DropdownMenuItemIndicator",
    en = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(wr, { ...s,
            ...o,
            ref: n
        })
    });
en.displayName = Tr;
var Fr = "DropdownMenuSeparator",
    tn = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(xr, { ...s,
            ...o,
            ref: n
        })
    });
tn.displayName = Fr;
var jr = "DropdownMenuArrow",
    Lr = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(yr, { ...s,
            ...o,
            ref: n
        })
    });
Lr.displayName = jr;
var kr = "DropdownMenuSubTrigger",
    nn = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(Er, { ...s,
            ...o,
            ref: n
        })
    });
nn.displayName = kr;
var $r = "DropdownMenuSubContent",
    on = r.forwardRef((e, n) => {
        const {
            __scopeDropdownMenu: t,
            ...o
        } = e, s = S(t);
        return i.jsx(Cr, { ...s,
            ...o,
            ref: n,
            style: { ...e.style,
                "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
            }
        })
    });
on.displayName = $r;
var Kr = Wt,
    Gr = Ht,
    Ur = zt,
    rn = Xt,
    sn = Zt,
    an = qt,
    cn = Jt,
    un = Qt,
    ln = en,
    dn = tn,
    fn = nn,
    pn = on;
const ms = Kr,
    vs = Gr,
    Br = r.forwardRef(({
        className: e,
        inset: n,
        children: t,
        ...o
    }, s) => i.jsxs(fn, {
        ref: s,
        className: W("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", n && "pl-8", e),
        ...o,
        children: [t, i.jsx(Tn, {
            className: "ml-auto"
        })]
    }));
Br.displayName = fn.displayName;
const Wr = r.forwardRef(({
    className: e,
    ...n
}, t) => i.jsx(pn, {
    ref: t,
    className: W("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
Wr.displayName = pn.displayName;
const Vr = r.forwardRef(({
    className: e,
    sideOffset: n = 4,
    ...t
}, o) => i.jsx(Ur, {
    children: i.jsx(rn, {
        ref: o,
        sideOffset: n,
        className: W("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...t
    })
}));
Vr.displayName = rn.displayName;
const Hr = r.forwardRef(({
    className: e,
    inset: n,
    ...t
}, o) => i.jsx(an, {
    ref: o,
    className: W("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", n && "pl-8", e),
    ...t
}));
Hr.displayName = an.displayName;
const zr = r.forwardRef(({
    className: e,
    children: n,
    checked: t,
    ...o
}, s) => i.jsxs(cn, {
    ref: s,
    className: W("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    checked: t,
    ...o,
    children: [i.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: i.jsx(ln, {
            children: i.jsx(Fn, {
                className: "h-4 w-4"
            })
        })
    }), n]
}));
zr.displayName = cn.displayName;
const Yr = r.forwardRef(({
    className: e,
    children: n,
    ...t
}, o) => i.jsxs(un, {
    ref: o,
    className: W("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...t,
    children: [i.jsx("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: i.jsx(ln, {
            children: i.jsx(Ln, {
                className: "h-2 w-2 fill-current"
            })
        })
    }), n]
}));
Yr.displayName = un.displayName;
const Xr = r.forwardRef(({
    className: e,
    inset: n,
    ...t
}, o) => i.jsx(sn, {
    ref: o,
    className: W("px-2 py-1.5 text-sm font-semibold", n && "pl-8", e),
    ...t
}));
Xr.displayName = sn.displayName;
const Zr = r.forwardRef(({
    className: e,
    ...n
}, t) => i.jsx(dn, {
    ref: t,
    className: W("-mx-1 my-1 h-px bg-muted", e),
    ...n
}));
Zr.displayName = dn.displayName;
export {
    Ln as C, ms as D, vs as a, Vr as b, Hr as c
};