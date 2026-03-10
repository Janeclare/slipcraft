import {
    q as te,
    r as l,
    W as re,
    j as e
} from "./app-CPSemYgC.js";
import {
    A as le,
    a as ae
} from "./AppLayout-BVugRKpX.js";
import {
    G as oe
} from "./GoBack-CC6xQy9d.js";
import {
    t as x
} from "./index-Dnc4ycMJ.js";
import {
    B as f
} from "./button-BamgVvPn.js";
import {
    L as R
} from "./label-DzYRBl-l.js";
import {
    D as m
} from "./database-CwXutizx.js";
import {
    C as ie
} from "./coins-8AZIbOBg.js";
import {
    G as ne
} from "./globe-CPNy-IB6.js";
import {
    M as ce
} from "./minus-C3KCdFFt.js";
import {
    P as de
} from "./plus-D1TJ0vFK.js";
import {
    R as g
} from "./refresh-cw-Dn0TKcRa.js";
import {
    S as xe
} from "./sparkles-B4wUaH_8.js";
import {
    C as P
} from "./check-CsA8fo_3.js";
import {
    C as A
} from "./copy-CA1ynquI.js";
import {
    W as G
} from "./wallet-CWU1D2kp.js";
import {
    A as M
} from "./at-sign-BMMcc4kU.js";
import {
    P as L
} from "./package-CYq7Y392.js";
import {
    K as q
} from "./key-round-DugN7wqC.js";
import {
    c as j
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    L as I
} from "./landmark-Dl0zS6Rm.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./index-TtBBfnyI.js";
const B = j("Building2", [
    ["path", {
        d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
        key: "1b4qmf"
    }],
    ["path", {
        d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
        key: "i71pzd"
    }],
    ["path", {
        d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
        key: "10jefs"
    }],
    ["path", {
        d: "M10 6h4",
        key: "1itunk"
    }],
    ["path", {
        d: "M10 10h4",
        key: "tcdvrf"
    }],
    ["path", {
        d: "M10 14h4",
        key: "kelpxr"
    }],
    ["path", {
        d: "M10 18h4",
        key: "1ulq68"
    }]
]);
const E = j("CircleUser", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
    }],
    ["path", {
        d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
        key: "154egf"
    }]
]);
const D = j("CreditCard", [
        ["rect", {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }],
        ["line", {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }]
    ]),
    me = {
        UserCircle: e.jsx(E, {
            size: 24
        }),
        CreditCard: e.jsx(D, {
            size: 24
        }),
        Landmark: e.jsx(I, {
            size: 24
        }),
        Building2: e.jsx(B, {
            size: 24
        }),
        KeyRound: e.jsx(q, {
            size: 24
        }),
        Package: e.jsx(L, {
            size: 24
        }),
        AtSign: e.jsx(M, {
            size: 24
        }),
        Wallet: e.jsx(G, {
            size: 24
        })
    },
    F = {
        UserCircle: e.jsx(E, {
            size: 18
        }),
        CreditCard: e.jsx(D, {
            size: 18
        }),
        Landmark: e.jsx(I, {
            size: 18
        }),
        Building2: e.jsx(B, {
            size: 18
        }),
        KeyRound: e.jsx(q, {
            size: 18
        }),
        Package: e.jsx(L, {
            size: 18
        }),
        AtSign: e.jsx(M, {
            size: 18
        }),
        Wallet: e.jsx(G, {
            size: 18
        })
    },
    Ie = ({
        profiles: u,
        locales: T,
        fee: p,
        platform: r
    }) => {
        const {
            flash: o
        } = te().props, [y, K] = l.useState(null), [a, O] = l.useState([]), [U, W] = l.useState(""), [V, H] = l.useState(""), [Q, b] = l.useState(null), [Z, N] = l.useState(!1), [i, k] = l.useState(0), v = l.useRef(null), C = l.useRef(null), {
            data: n,
            setData: h,
            post: J,
            processing: c,
            errors: X
        } = re({
            profile: "",
            quantity: 1,
            locale: "en_US"
        }), _ = X;
        l.useEffect(() => {
            o ?.extra_data ?.generated_profiles && (O(o.extra_data.generated_profiles), W(o.extra_data.generated_profile_label), H(o.extra_data.generated_profile_key), k(0), setTimeout(() => {
                v.current ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            }, 200))
        }, [o]);
        const d = u.find(s => s.key === y),
            Y = s => {
                K(s), h("profile", s), setTimeout(() => {
                    C.current ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }, 100)
            },
            w = () => {
                if (!n.profile) {
                    x.error("Please select a profile type");
                    return
                }
                J(route("services.faker.generate"), {
                    preserveScroll: !0,
                    onError: s => {
                        s.balance ? x.error(s.balance) : Object.values(s).forEach(t => x.error(t))
                    }
                })
            },
            ee = (s, t) => {
                navigator.clipboard.writeText(t), b(s), setTimeout(() => b(null), 1500)
            },
            se = () => {
                if (a.length === 0) return;
                const t = a[i].map(S => `${S.label}: ${S.value}`).join(`
`);
                navigator.clipboard.writeText(t), N(!0), x.success("All fields copied!"), setTimeout(() => N(!1), 1500)
            },
            z = s => {
                h("quantity", Math.min(10, Math.max(1, n.quantity + s)))
            },
            $ = u.find(s => s.key === V);
        return e.jsxs(le, {
            children: [e.jsx(ae, {
                title: "Data Generator"
            }), e.jsx("main", {
                className: "w-full flex justify-center",
                children: e.jsxs("div", {
                    className: "w-[95%] max-w-[650px] flex flex-col gap-5 pt-5 pb-20",
                    children: [e.jsxs("div", {
                        className: "w-full flex-between",
                        children: [e.jsx(oe, {}), e.jsx("h1", {
                            className: "font-bold text-lg",
                            children: "Data Generator"
                        }), e.jsx("h1", {
                            className: "font-bold text-lg opacity-0 hidden sm:block",
                            children: "."
                        })]
                    }), e.jsxs("div", {
                        className: "rounded-xl p-5 flex flex-col items-center gap-3 text-center",
                        style: {
                            background: `linear-gradient(135deg, ${r.primary_color}15, ${r.primary_color}05)`
                        },
                        children: [e.jsx("div", {
                            className: "w-14 h-14 rounded-full flex items-center justify-center",
                            style: {
                                backgroundColor: `${r.primary_color}15`,
                                color: r.primary_color
                            },
                            children: e.jsx(m, {
                                size: 28
                            })
                        }), e.jsxs("div", {
                            children: [e.jsx("h2", {
                                className: "font-bold text-lg",
                                children: "Generate Realistic Fake Data"
                            }), e.jsx("p", {
                                className: "text-sm text-muted-foreground max-w-sm mt-1",
                                children: "Pick a profile template and instantly get a complete, ready-to-use set of fake data."
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full",
                            style: {
                                backgroundColor: `${r.primary_color}15`,
                                color: r.primary_color
                            },
                            children: [e.jsx(ie, {
                                size: 14
                            }), e.jsxs("span", {
                                children: [p, " point", p !== 1 ? "s" : "", " per generation"]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [e.jsx("p", {
                            className: "text-sm font-semibold text-muted-foreground uppercase tracking-wider px-1",
                            children: "Choose a Profile"
                        }), e.jsx("div", {
                            className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                            children: u.map(s => {
                                const t = y === s.key;
                                return e.jsxs("button", {
                                    type: "button",
                                    onClick: () => Y(s.key),
                                    className: `relative flex flex-col gap-3 p-4 rounded-2xl border-2 transition-all text-left ${t?"shadow-lg scale-[1.02]":"border-border/60 hover:border-border hover:shadow-sm active:scale-[0.98]"}`,
                                    style: t ? {
                                        backgroundColor: `${r.primary_color}08`,
                                        borderColor: r.primary_color
                                    } : {},
                                    children: [t && e.jsx("span", {
                                        className: "absolute top-3 right-3 w-2.5 h-2.5 rounded-full",
                                        style: {
                                            backgroundColor: r.primary_color
                                        }
                                    }), e.jsx("div", {
                                        className: `w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${t?"":"bg-muted/70"}`,
                                        style: t ? {
                                            backgroundColor: `${r.primary_color}18`,
                                            color: r.primary_color
                                        } : {},
                                        children: me[s.icon] || e.jsx(m, {
                                            size: 24
                                        })
                                    }), e.jsxs("div", {
                                        className: "flex flex-col gap-0.5",
                                        children: [e.jsx("p", {
                                            className: "font-bold text-[13px] sm:text-sm leading-tight",
                                            style: t ? {
                                                color: r.primary_color
                                            } : {},
                                            children: s.label
                                        }), e.jsx("p", {
                                            className: `text-[11px] sm:text-xs leading-relaxed ${t?"text-foreground/60":"text-muted-foreground"}`,
                                            children: s.description
                                        })]
                                    }), e.jsxs("span", {
                                        className: `self-start text-[10px] font-semibold px-2 py-0.5 rounded-full ${t?"text-white":"bg-muted text-muted-foreground"}`,
                                        style: t ? {
                                            backgroundColor: r.primary_color
                                        } : {},
                                        children: [s.field_count, " fields"]
                                    })]
                                }, s.key)
                            })
                        })]
                    }), d && e.jsxs("div", {
                        ref: C,
                        className: "border rounded-xl p-4 bg-background flex flex-col gap-4",
                        children: [e.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [e.jsx("div", {
                                className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                                style: {
                                    backgroundColor: `${r.primary_color}15`,
                                    color: r.primary_color
                                },
                                children: F[d.icon] || e.jsx(m, {
                                    size: 18
                                })
                            }), e.jsxs("div", {
                                className: "flex-1 min-w-0",
                                children: [e.jsx("p", {
                                    className: "font-bold text-sm",
                                    children: d.label
                                }), e.jsx("p", {
                                    className: "text-xs text-muted-foreground mt-0.5",
                                    children: d.description
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-end gap-3 flex-wrap",
                            children: [e.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [e.jsxs(R, {
                                    className: "text-xs flex items-center gap-1",
                                    children: [e.jsx(ne, {
                                        size: 12
                                    }), "Country"]
                                }), e.jsx("select", {
                                    value: n.locale,
                                    onChange: s => h("locale", s.target.value),
                                    className: "h-[38px] px-3 rounded-lg border bg-background text-sm min-w-[140px] focus:outline-none focus:ring-2 focus:ring-offset-1",
                                    style: {
                                        focusRingColor: r.primary_color
                                    },
                                    children: T.map(s => e.jsx("option", {
                                        value: s.code,
                                        children: s.label
                                    }, s.code))
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [e.jsx(R, {
                                    className: "text-xs",
                                    children: "How many?"
                                }), e.jsxs("div", {
                                    className: "flex items-center border rounded-lg overflow-hidden",
                                    children: [e.jsx("button", {
                                        type: "button",
                                        onClick: () => z(-1),
                                        className: "px-2.5 py-2 hover:bg-muted transition-colors",
                                        children: e.jsx(ce, {
                                            size: 14
                                        })
                                    }), e.jsx("span", {
                                        className: "px-4 py-2 text-sm font-semibold min-w-[40px] text-center border-x",
                                        children: n.quantity
                                    }), e.jsx("button", {
                                        type: "button",
                                        onClick: () => z(1),
                                        className: "px-2.5 py-2 hover:bg-muted transition-colors",
                                        children: e.jsx(de, {
                                            size: 14
                                        })
                                    })]
                                })]
                            }), e.jsx(f, {
                                onClick: w,
                                disabled: c,
                                className: "text-white flex-1 sm:flex-none",
                                style: {
                                    backgroundColor: r.primary_color
                                },
                                children: c ? e.jsxs(e.Fragment, {
                                    children: [e.jsx(g, {
                                        size: 16,
                                        className: "mr-1.5 animate-spin"
                                    }), "Generating..."]
                                }) : e.jsxs(e.Fragment, {
                                    children: [e.jsx(xe, {
                                        size: 16,
                                        className: "mr-1.5"
                                    }), "Generate", e.jsxs("span", {
                                        className: "ml-1.5 opacity-80 text-xs",
                                        children: ["(", p * n.quantity, " pts)"]
                                    })]
                                })
                            })]
                        }), _.balance && e.jsx("p", {
                            className: "text-sm text-destructive",
                            children: _.balance
                        })]
                    }), a.length > 0 && e.jsxs("div", {
                        ref: v,
                        className: "flex flex-col gap-3",
                        children: [e.jsxs("div", {
                            className: "flex items-center justify-between px-1",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [$ && e.jsx("span", {
                                    style: {
                                        color: r.primary_color
                                    },
                                    children: F[$.icon] || e.jsx(m, {
                                        size: 18
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-sm",
                                    children: U
                                })]
                            }), a.length > 1 && e.jsx("div", {
                                className: "flex items-center gap-1",
                                children: a.map((s, t) => e.jsx("button", {
                                    type: "button",
                                    onClick: () => k(t),
                                    className: `w-7 h-7 rounded-full text-xs font-semibold transition-all ${i===t?"text-white shadow-sm":"bg-muted text-muted-foreground hover:bg-muted/80"}`,
                                    style: i === t ? {
                                        backgroundColor: r.primary_color
                                    } : {},
                                    children: t + 1
                                }, t))
                            })]
                        }), e.jsxs("div", {
                            className: "border rounded-xl overflow-hidden bg-background",
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between px-4 py-2.5",
                                style: {
                                    backgroundColor: `${r.primary_color}08`,
                                    borderBottom: `1px solid ${r.primary_color}15`
                                },
                                children: [e.jsx("p", {
                                    className: "text-xs font-semibold",
                                    style: {
                                        color: r.primary_color
                                    },
                                    children: a.length > 1 ? `Profile #${i+1}` : "Generated Profile"
                                }), e.jsx(f, {
                                    variant: "ghost",
                                    size: "sm",
                                    onClick: se,
                                    className: "h-7 text-xs px-2",
                                    children: Z ? e.jsxs(e.Fragment, {
                                        children: [e.jsx(P, {
                                            size: 12,
                                            className: "mr-1 text-green-500"
                                        }), "Copied!"]
                                    }) : e.jsxs(e.Fragment, {
                                        children: [e.jsx(A, {
                                            size: 12,
                                            className: "mr-1"
                                        }), "Copy All"]
                                    })
                                })]
                            }), e.jsx("div", {
                                className: "divide-y",
                                children: a[i] ?.map((s, t) => e.jsxs("div", {
                                    className: "flex items-center justify-between px-4 py-3 hover:bg-muted/30 transition-colors group gap-3",
                                    children: [e.jsxs("div", {
                                        className: "min-w-0 flex-1",
                                        children: [e.jsx("p", {
                                            className: "text-[11px] text-muted-foreground font-medium uppercase tracking-wider",
                                            children: s.label
                                        }), e.jsx("p", {
                                            className: "text-sm font-medium mt-0.5 break-all",
                                            children: s.value
                                        })]
                                    }), e.jsx("button", {
                                        type: "button",
                                        onClick: () => ee(`${t}-${s.label}`, s.value),
                                        className: "shrink-0 p-1.5 rounded-md hover:bg-muted transition-colors opacity-0 group-hover:opacity-100",
                                        children: Q === `${t}-${s.label}` ? e.jsx(P, {
                                            size: 14,
                                            className: "text-green-500"
                                        }) : e.jsx(A, {
                                            size: 14,
                                            className: "text-muted-foreground"
                                        })
                                    })]
                                }, t))
                            })]
                        }), e.jsx(f, {
                            variant: "outline",
                            onClick: w,
                            disabled: c,
                            className: "w-full",
                            children: c ? e.jsxs(e.Fragment, {
                                children: [e.jsx(g, {
                                    size: 16,
                                    className: "mr-1.5 animate-spin"
                                }), "Generating..."]
                            }) : e.jsxs(e.Fragment, {
                                children: [e.jsx(g, {
                                    size: 16,
                                    className: "mr-1.5"
                                }), "Generate Again"]
                            })
                        })]
                    })]
                })
            })]
        })
    };
export {
    Ie as
    default
};