import {
    r as i,
    j as f,
    e as oe
} from "./app-CPSemYgC.js";
import {
    r as Se,
    R as Te
} from "./index-BIbNlVZ0.js";
import {
    h as we,
    R as Ae
} from "./Combination-C3j38xtn.js";

function x(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(r) {
        if (e ?.(r), n === !1 || !r.defaultPrevented) return t ?.(r)
    }
}

function Y(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t)
}

function re(...e) {
    return t => {
        let n = !1;
        const o = e.map(r => {
            const s = Y(r, t);
            return !n && typeof s == "function" && (n = !0), s
        });
        if (n) return () => {
            for (let r = 0; r < o.length; r++) {
                const s = o[r];
                typeof s == "function" ? s() : Y(e[r], null)
            }
        }
    }
}

function T(...e) {
    return i.useCallback(re(...e), e)
}

function Ie(e, t) {
    const n = i.createContext(t),
        o = s => {
            const {
                children: c,
                ...a
            } = s, l = i.useMemo(() => a, Object.values(a));
            return f.jsx(n.Provider, {
                value: l,
                children: c
            })
        };
    o.displayName = e + "Provider";

    function r(s) {
        const c = i.useContext(n);
        if (c) return c;
        if (t !== void 0) return t;
        throw new Error(`\`${s}\` must be used within \`${e}\``)
    }
    return [o, r]
}

function _e(e, t = []) {
    let n = [];

    function o(s, c) {
        const a = i.createContext(c),
            l = n.length;
        n = [...n, c];
        const u = p => {
            const {
                scope: E,
                children: v,
                ...C
            } = p, m = E ?.[e] ?.[l] || a, b = i.useMemo(() => C, Object.values(C));
            return f.jsx(m.Provider, {
                value: b,
                children: v
            })
        };
        u.displayName = s + "Provider";

        function d(p, E) {
            const v = E ?.[e] ?.[l] || a,
                C = i.useContext(v);
            if (C) return C;
            if (c !== void 0) return c;
            throw new Error(`\`${p}\` must be used within \`${s}\``)
        }
        return [u, d]
    }
    const r = () => {
        const s = n.map(c => i.createContext(c));
        return function(a) {
            const l = a ?.[e] || s;
            return i.useMemo(() => ({
                [`__scope${e}`]: { ...a,
                    [e]: l
                }
            }), [a, l])
        }
    };
    return r.scopeName = e, [o, Fe(r, ...t)]
}

function Fe(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const o = e.map(r => ({
            useScope: r(),
            scopeName: r.scopeName
        }));
        return function(s) {
            const c = o.reduce((a, {
                useScope: l,
                scopeName: u
            }) => {
                const p = l(s)[`__scope${u}`];
                return { ...a,
                    ...p
                }
            }, {});
            return i.useMemo(() => ({
                [`__scope${t.scopeName}`]: c
            }), [c])
        }
    };
    return n.scopeName = t.scopeName, n
}
var w = globalThis ?.document ? i.useLayoutEffect : () => {},
    Me = oe[" useId ".trim().toString()] || (() => {}),
    Le = 0;

function U(e) {
    const [t, n] = i.useState(Me());
    return w(() => {
        n(o => o ?? String(Le++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
var je = oe[" useInsertionEffect ".trim().toString()] || w;

function We({
    prop: e,
    defaultProp: t,
    onChange: n = () => {},
    caller: o
}) {
    const [r, s, c] = Ue({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, l = a ? e : r; {
        const d = i.useRef(e !== void 0);
        i.useEffect(() => {
            const p = d.current;
            p !== a && console.warn(`${o} is changing from ${p?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), d.current = a
        }, [a, o])
    }
    const u = i.useCallback(d => {
        if (a) {
            const p = ke(d) ? d(e) : d;
            p !== e && c.current ?.(p)
        } else s(d)
    }, [a, e, s, c]);
    return [l, u]
}

function Ue({
    defaultProp: e,
    onChange: t
}) {
    const [n, o] = i.useState(e), r = i.useRef(n), s = i.useRef(t);
    return je(() => {
        s.current = t
    }, [t]), i.useEffect(() => {
        r.current !== n && (s.current ?.(n), r.current = n)
    }, [n, r]), [n, o, s]
}

function ke(e) {
    return typeof e == "function"
}

function se(e) {
    const t = $e(e),
        n = i.forwardRef((o, r) => {
            const {
                children: s,
                ...c
            } = o, a = i.Children.toArray(s), l = a.find(Ke);
            if (l) {
                const u = l.props.children,
                    d = a.map(p => p === l ? i.Children.count(u) > 1 ? i.Children.only(null) : i.isValidElement(u) ? u.props.children : null : p);
                return f.jsx(t, { ...c,
                    ref: r,
                    children: i.isValidElement(u) ? i.cloneElement(u, void 0, d) : null
                })
            }
            return f.jsx(t, { ...c,
                ref: r,
                children: s
            })
        });
    return n.displayName = `${e}.Slot`, n
}

function $e(e) {
    const t = i.forwardRef((n, o) => {
        const {
            children: r,
            ...s
        } = n;
        if (i.isValidElement(r)) {
            const c = Ve(r),
                a = He(s, r.props);
            return r.type !== i.Fragment && (a.ref = o ? re(o, c) : c), i.cloneElement(r, a)
        }
        return i.Children.count(r) > 1 ? i.Children.only(null) : null
    });
    return t.displayName = `${e}.SlotClone`, t
}
var Be = Symbol("radix.slottable");

function Ke(e) {
    return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Be
}

function He(e, t) {
    const n = { ...t
    };
    for (const o in t) {
        const r = e[o],
            s = t[o];
        /^on[A-Z]/.test(o) ? r && s ? n[o] = (...a) => {
            const l = s(...a);
            return r(...a), l
        } : r && (n[o] = r) : o === "style" ? n[o] = { ...r,
            ...s
        } : o === "className" && (n[o] = [r, s].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Ve(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Ge = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"],
    R = Ge.reduce((e, t) => {
        const n = se(`Primitive.${t}`),
            o = i.forwardRef((r, s) => {
                const {
                    asChild: c,
                    ...a
                } = r, l = c ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), f.jsx(l, { ...a,
                    ref: s
                })
            });
        return o.displayName = `Primitive.${t}`, { ...e,
            [t]: o
        }
    }, {});

function ze(e, t) {
    e && Se.flushSync(() => e.dispatchEvent(t))
}

function A(e) {
    const t = i.useRef(e);
    return i.useEffect(() => {
        t.current = e
    }), i.useMemo(() => (...n) => t.current ?.(...n), [])
}

function qe(e, t = globalThis ?.document) {
    const n = A(e);
    i.useEffect(() => {
        const o = r => {
            r.key === "Escape" && n(r)
        };
        return t.addEventListener("keydown", o, {
            capture: !0
        }), () => t.removeEventListener("keydown", o, {
            capture: !0
        })
    }, [n, t])
}
var Ye = "DismissableLayer",
    K = "dismissableLayer.update",
    Ze = "dismissableLayer.pointerDownOutside",
    Xe = "dismissableLayer.focusOutside",
    Z, ie = i.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    ae = i.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: r,
            onFocusOutside: s,
            onInteractOutside: c,
            onDismiss: a,
            ...l
        } = e, u = i.useContext(ie), [d, p] = i.useState(null), E = d ?.ownerDocument ?? globalThis ?.document, [, v] = i.useState({}), C = T(t, g => p(g)), m = Array.from(u.layers), [b] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), y = m.indexOf(b), P = d ? m.indexOf(d) : -1, D = u.layersWithOutsidePointerEventsDisabled.size > 0, h = P >= y, I = et(g => {
            const _ = g.target,
                q = [...u.branches].some(W => W.contains(_));
            !h || q || (r ?.(g), c ?.(g), g.defaultPrevented || a ?.())
        }, E), z = tt(g => {
            const _ = g.target;
            [...u.branches].some(W => W.contains(_)) || (s ?.(g), c ?.(g), g.defaultPrevented || a ?.())
        }, E);
        return qe(g => {
            P === u.layers.size - 1 && (o ?.(g), !g.defaultPrevented && a && (g.preventDefault(), a()))
        }, E), i.useEffect(() => {
            if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Z = E.body.style.pointerEvents, E.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), X(), () => {
                n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (E.body.style.pointerEvents = Z)
            }
        }, [d, E, n, u]), i.useEffect(() => () => {
            d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), X())
        }, [d, u]), i.useEffect(() => {
            const g = () => v({});
            return document.addEventListener(K, g), () => document.removeEventListener(K, g)
        }, []), f.jsx(R.div, { ...l,
            ref: C,
            style: {
                pointerEvents: D ? h ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: x(e.onFocusCapture, z.onFocusCapture),
            onBlurCapture: x(e.onBlurCapture, z.onBlurCapture),
            onPointerDownCapture: x(e.onPointerDownCapture, I.onPointerDownCapture)
        })
    });
ae.displayName = Ye;
var Je = "DismissableLayerBranch",
    Qe = i.forwardRef((e, t) => {
        const n = i.useContext(ie),
            o = i.useRef(null),
            r = T(t, o);
        return i.useEffect(() => {
            const s = o.current;
            if (s) return n.branches.add(s), () => {
                n.branches.delete(s)
            }
        }, [n.branches]), f.jsx(R.div, { ...e,
            ref: r
        })
    });
Qe.displayName = Je;

function et(e, t = globalThis ?.document) {
    const n = A(e),
        o = i.useRef(!1),
        r = i.useRef(() => {});
    return i.useEffect(() => {
        const s = a => {
                if (a.target && !o.current) {
                    let l = function() {
                        ce(Ze, n, u, {
                            discrete: !0
                        })
                    };
                    const u = {
                        originalEvent: a
                    };
                    a.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", r.current);
                o.current = !1
            },
            c = window.setTimeout(() => {
                t.addEventListener("pointerdown", s)
            }, 0);
        return () => {
            window.clearTimeout(c), t.removeEventListener("pointerdown", s), t.removeEventListener("click", r.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => o.current = !0
    }
}

function tt(e, t = globalThis ?.document) {
    const n = A(e),
        o = i.useRef(!1);
    return i.useEffect(() => {
        const r = s => {
            s.target && !o.current && ce(Xe, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r)
    }, [t, n]), {
        onFocusCapture: () => o.current = !0,
        onBlurCapture: () => o.current = !1
    }
}

function X() {
    const e = new CustomEvent(K);
    document.dispatchEvent(e)
}

function ce(e, t, n, {
    discrete: o
}) {
    const r = n.originalEvent.target,
        s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && r.addEventListener(e, t, {
        once: !0
    }), o ? ze(r, s) : r.dispatchEvent(s)
}
var k = "focusScope.autoFocusOnMount",
    $ = "focusScope.autoFocusOnUnmount",
    J = {
        bubbles: !1,
        cancelable: !0
    },
    nt = "FocusScope",
    ue = i.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: o = !1,
            onMountAutoFocus: r,
            onUnmountAutoFocus: s,
            ...c
        } = e, [a, l] = i.useState(null), u = A(r), d = A(s), p = i.useRef(null), E = T(t, m => l(m)), v = i.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        i.useEffect(() => {
            if (o) {
                let m = function(D) {
                        if (v.paused || !a) return;
                        const h = D.target;
                        a.contains(h) ? p.current = h : N(p.current, {
                            select: !0
                        })
                    },
                    b = function(D) {
                        if (v.paused || !a) return;
                        const h = D.relatedTarget;
                        h !== null && (a.contains(h) || N(p.current, {
                            select: !0
                        }))
                    },
                    y = function(D) {
                        if (document.activeElement === document.body)
                            for (const I of D) I.removedNodes.length > 0 && N(a)
                    };
                document.addEventListener("focusin", m), document.addEventListener("focusout", b);
                const P = new MutationObserver(y);
                return a && P.observe(a, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", m), document.removeEventListener("focusout", b), P.disconnect()
                }
            }
        }, [o, a, v.paused]), i.useEffect(() => {
            if (a) {
                ee.add(v);
                const m = document.activeElement;
                if (!a.contains(m)) {
                    const y = new CustomEvent(k, J);
                    a.addEventListener(k, u), a.dispatchEvent(y), y.defaultPrevented || (ot(ct(le(a)), {
                        select: !0
                    }), document.activeElement === m && N(a))
                }
                return () => {
                    a.removeEventListener(k, u), setTimeout(() => {
                        const y = new CustomEvent($, J);
                        a.addEventListener($, d), a.dispatchEvent(y), y.defaultPrevented || N(m ?? document.body, {
                            select: !0
                        }), a.removeEventListener($, d), ee.remove(v)
                    }, 0)
                }
            }
        }, [a, u, d, v]);
        const C = i.useCallback(m => {
            if (!n && !o || v.paused) return;
            const b = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey,
                y = document.activeElement;
            if (b && y) {
                const P = m.currentTarget,
                    [D, h] = rt(P);
                D && h ? !m.shiftKey && y === h ? (m.preventDefault(), n && N(D, {
                    select: !0
                })) : m.shiftKey && y === D && (m.preventDefault(), n && N(h, {
                    select: !0
                })) : y === P && m.preventDefault()
            }
        }, [n, o, v.paused]);
        return f.jsx(R.div, {
            tabIndex: -1,
            ...c,
            ref: E,
            onKeyDown: C
        })
    });
ue.displayName = nt;

function ot(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const o of e)
        if (N(o, {
                select: t
            }), document.activeElement !== n) return
}

function rt(e) {
    const t = le(e),
        n = Q(t, e),
        o = Q(t.reverse(), e);
    return [n, o]
}

function le(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: o => {
                const r = o.tagName === "INPUT" && o.type === "hidden";
                return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function Q(e, t) {
    for (const n of e)
        if (!st(n, {
                upTo: t
            })) return n
}

function st(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function it(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function N(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && it(e) && t && e.select()
    }
}
var ee = at();

function at() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && n ?.pause(), e = te(e, t), e.unshift(t)
        },
        remove(t) {
            e = te(e, t), e[0] ?.resume()
        }
    }
}

function te(e, t) {
    const n = [...e],
        o = n.indexOf(t);
    return o !== -1 && n.splice(o, 1), n
}

function ct(e) {
    return e.filter(t => t.tagName !== "A")
}
var ut = "Portal",
    de = i.forwardRef((e, t) => {
        const {
            container: n,
            ...o
        } = e, [r, s] = i.useState(!1);
        w(() => s(!0), []);
        const c = n || r && globalThis ?.document ?.body;
        return c ? Te.createPortal(f.jsx(R.div, { ...o,
            ref: t
        }), c) : null
    });
de.displayName = ut;

function lt(e, t) {
    return i.useReducer((n, o) => t[n][o] ?? n, e)
}
var L = e => {
    const {
        present: t,
        children: n
    } = e, o = dt(t), r = typeof n == "function" ? n({
        present: o.isPresent
    }) : i.Children.only(n), s = T(o.ref, ft(r));
    return typeof n == "function" || o.isPresent ? i.cloneElement(r, {
        ref: s
    }) : null
};
L.displayName = "Presence";

function dt(e) {
    const [t, n] = i.useState(), o = i.useRef(null), r = i.useRef(e), s = i.useRef("none"), c = e ? "mounted" : "unmounted", [a, l] = lt(c, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return i.useEffect(() => {
        const u = F(o.current);
        s.current = a === "mounted" ? u : "none"
    }, [a]), w(() => {
        const u = o.current,
            d = r.current;
        if (d !== e) {
            const E = s.current,
                v = F(u);
            e ? l("MOUNT") : v === "none" || u ?.display === "none" ? l("UNMOUNT") : l(d && E !== v ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e
        }
    }, [e, l]), w(() => {
        if (t) {
            let u;
            const d = t.ownerDocument.defaultView ?? window,
                p = v => {
                    const m = F(o.current).includes(CSS.escape(v.animationName));
                    if (v.target === t && m && (l("ANIMATION_END"), !r.current)) {
                        const b = t.style.animationFillMode;
                        t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
                            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b)
                        })
                    }
                },
                E = v => {
                    v.target === t && (s.current = F(o.current))
                };
            return t.addEventListener("animationstart", E), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
                d.clearTimeout(u), t.removeEventListener("animationstart", E), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p)
            }
        } else l("ANIMATION_END")
    }, [t, l]), {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: i.useCallback(u => {
            o.current = u ? getComputedStyle(u) : null, n(u)
        }, [])
    }
}

function F(e) {
    return e ?.animationName || "none"
}

function ft(e) {
    let t = Object.getOwnPropertyDescriptor(e.props, "ref") ?.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref") ?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var B = 0;

function pt() {
    i.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? ne()), document.body.insertAdjacentElement("beforeend", e[1] ?? ne()), B++, () => {
            B === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), B--
        }
    }, [])
}

function ne() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
var j = "Dialog",
    [fe] = _e(j),
    [mt, O] = fe(j),
    pe = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: r,
            onOpenChange: s,
            modal: c = !0
        } = e, a = i.useRef(null), l = i.useRef(null), [u, d] = We({
            prop: o,
            defaultProp: r ?? !1,
            onChange: s,
            caller: j
        });
        return f.jsx(mt, {
            scope: t,
            triggerRef: a,
            contentRef: l,
            contentId: U(),
            titleId: U(),
            descriptionId: U(),
            open: u,
            onOpenChange: d,
            onOpenToggle: i.useCallback(() => d(p => !p), [d]),
            modal: c,
            children: n
        })
    };
pe.displayName = j;
var me = "DialogTrigger",
    ve = i.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = O(me, n), s = T(t, r.triggerRef);
        return f.jsx(R.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": r.open,
            "aria-controls": r.contentId,
            "data-state": G(r.open),
            ...o,
            ref: s,
            onClick: x(e.onClick, r.onOpenToggle)
        })
    });
ve.displayName = me;
var H = "DialogPortal",
    [vt, Ee] = fe(H, {
        forceMount: void 0
    }),
    ge = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: r
        } = e, s = O(H, t);
        return f.jsx(vt, {
            scope: t,
            forceMount: n,
            children: i.Children.map(o, c => f.jsx(L, {
                present: n || s.open,
                children: f.jsx(de, {
                    asChild: !0,
                    container: r,
                    children: c
                })
            }))
        })
    };
ge.displayName = H;
var M = "DialogOverlay",
    ye = i.forwardRef((e, t) => {
        const n = Ee(M, e.__scopeDialog),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = O(M, e.__scopeDialog);
        return s.modal ? f.jsx(L, {
            present: o || s.open,
            children: f.jsx(gt, { ...r,
                ref: t
            })
        }) : null
    });
ye.displayName = M;
var Et = se("DialogOverlay.RemoveScroll"),
    gt = i.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = O(M, n);
        return f.jsx(Ae, {
            as: Et,
            allowPinchZoom: !0,
            shards: [r.contentRef],
            children: f.jsx(R.div, {
                "data-state": G(r.open),
                ...o,
                ref: t,
                style: {
                    pointerEvents: "auto",
                    ...o.style
                }
            })
        })
    }),
    S = "DialogContent",
    he = i.forwardRef((e, t) => {
        const n = Ee(S, e.__scopeDialog),
            {
                forceMount: o = n.forceMount,
                ...r
            } = e,
            s = O(S, e.__scopeDialog);
        return f.jsx(L, {
            present: o || s.open,
            children: s.modal ? f.jsx(yt, { ...r,
                ref: t
            }) : f.jsx(ht, { ...r,
                ref: t
            })
        })
    });
he.displayName = S;
var yt = i.forwardRef((e, t) => {
        const n = O(S, e.__scopeDialog),
            o = i.useRef(null),
            r = T(t, n.contentRef, o);
        return i.useEffect(() => {
            const s = o.current;
            if (s) return we(s)
        }, []), f.jsx(Ce, { ...e,
            ref: r,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: x(e.onCloseAutoFocus, s => {
                s.preventDefault(), n.triggerRef.current ?.focus()
            }),
            onPointerDownOutside: x(e.onPointerDownOutside, s => {
                const c = s.detail.originalEvent,
                    a = c.button === 0 && c.ctrlKey === !0;
                (c.button === 2 || a) && s.preventDefault()
            }),
            onFocusOutside: x(e.onFocusOutside, s => s.preventDefault())
        })
    }),
    ht = i.forwardRef((e, t) => {
        const n = O(S, e.__scopeDialog),
            o = i.useRef(!1),
            r = i.useRef(!1);
        return f.jsx(Ce, { ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: s => {
                e.onCloseAutoFocus ?.(s), s.defaultPrevented || (o.current || n.triggerRef.current ?.focus(), s.preventDefault()), o.current = !1, r.current = !1
            },
            onInteractOutside: s => {
                e.onInteractOutside ?.(s), s.defaultPrevented || (o.current = !0, s.detail.originalEvent.type === "pointerdown" && (r.current = !0));
                const c = s.target;
                n.triggerRef.current ?.contains(c) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && r.current && s.preventDefault()
            }
        })
    }),
    Ce = i.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: s,
            ...c
        } = e, a = O(S, n), l = i.useRef(null), u = T(t, l);
        return pt(), f.jsxs(f.Fragment, {
            children: [f.jsx(ue, {
                asChild: !0,
                loop: !0,
                trapped: o,
                onMountAutoFocus: r,
                onUnmountAutoFocus: s,
                children: f.jsx(ae, {
                    role: "dialog",
                    id: a.contentId,
                    "aria-describedby": a.descriptionId,
                    "aria-labelledby": a.titleId,
                    "data-state": G(a.open),
                    ...c,
                    ref: u,
                    onDismiss: () => a.onOpenChange(!1)
                })
            }), f.jsxs(f.Fragment, {
                children: [f.jsx(Ct, {
                    titleId: a.titleId
                }), f.jsx(Dt, {
                    contentRef: l,
                    descriptionId: a.descriptionId
                })]
            })]
        })
    }),
    V = "DialogTitle",
    be = i.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = O(V, n);
        return f.jsx(R.h2, {
            id: r.titleId,
            ...o,
            ref: t
        })
    });
be.displayName = V;
var De = "DialogDescription",
    Oe = i.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = O(De, n);
        return f.jsx(R.p, {
            id: r.descriptionId,
            ...o,
            ref: t
        })
    });
Oe.displayName = De;
var Re = "DialogClose",
    Pe = i.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...o
        } = e, r = O(Re, n);
        return f.jsx(R.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: x(e.onClick, () => r.onOpenChange(!1))
        })
    });
Pe.displayName = Re;

function G(e) {
    return e ? "open" : "closed"
}
var Ne = "DialogTitleWarning",
    [Nt, xe] = Ie(Ne, {
        contentName: S,
        titleName: V,
        docsSlug: "dialog"
    }),
    Ct = ({
        titleId: e
    }) => {
        const t = xe(Ne),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
        return i.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
        }, [n, e]), null
    },
    bt = "DialogDescriptionWarning",
    Dt = ({
        contentRef: e,
        descriptionId: t
    }) => {
        const o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xe(bt).contentName}}.`;
        return i.useEffect(() => {
            const r = e.current ?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(o))
        }, [o, e, t]), null
    },
    xt = pe,
    St = ve,
    Tt = ge,
    wt = ye,
    At = he,
    It = be,
    _t = Oe,
    Ft = Pe;
export {
    Ft as C, _t as D, wt as O, Tt as P, xt as R, St as T, At as a, It as b
};