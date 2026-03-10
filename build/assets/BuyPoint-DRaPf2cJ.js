import {
    q as b,
    W as S,
    r as N,
    j as e,
    y as _
} from "./app-CPSemYgC.js";
import {
    a as k
} from "./AppLayout-BVugRKpX.js";
import {
    L as P
} from "./Loader-DxAivhzx.js";
import {
    B as h
} from "./button-BamgVvPn.js";
import {
    D,
    a as B,
    b as A,
    c as z,
    d as L,
    e as E
} from "./dialog-BauOFWUU.js";
import {
    L as j
} from "./label-DzYRBl-l.js";
import {
    S as I,
    a as T
} from "./scroll-area-B-fov1Vq.js";
import {
    S as U,
    a as $,
    b as F,
    c as G,
    d as H
} from "./select-DtLj10f6.js";
import {
    f as g
} from "./formatNumber-Ce-00Vs2.js";
import {
    s as M
} from "./showIntertiaErrors-Bokdg093.js";
import {
    c as R
} from "./index-BIbNlVZ0.js";
import {
    t as O
} from "./index-Dnc4ycMJ.js";
import {
    U as V
} from "./UserLayout-P-Xlti_8.js";
import {
    c as d
} from "./polished.esm-Cyjuaya6.js";
import {
    G as Z
} from "./iconBase-BweG_smQ.js";
import {
    S as q
} from "./sparkles-B4wUaH_8.js";
import {
    C as W
} from "./clock-D_O17udO.js";
import {
    U as y
} from "./users-ZqGOPOiM.js";
import {
    Z as Y
} from "./zap-DAw3SZK0.js";
import {
    S as J
} from "./shield-CPuMYdQm.js";
import {
    A as K
} from "./arrow-right-b0B6GwCf.js";
import "./index-CGcBZyi7.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
import "./index-TtBBfnyI.js";
import "./index-BN1_Zxci.js";
import "./index-BUKYvAHl.js";
import "./index-CChplcHQ.js";
import "./index-BdQq_4o_.js";
import "./index-Dc_FVRD7.js";
import "./index-SHdw-lpr.js";
import "./index-ClHHFVVV.js";
import "./index-B-GRoRe2.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-D_XWqw2c.js";
import "./index-bfqS6E9x.js";
import "./index-C08e2LbI.js";
import "./chevron-down-DGcLvqVu.js";
import "./check-CsA8fo_3.js";
import "./mode-toggle-BKQyjCmw.js";
import "./dropdown-menu-73g9f9Cf.js";
import "./chevron-right-Wmdl5VZJ.js";
import "./avatar-BLCVZC4Y.js";
import "./stringInitials-Bl64PEY-.js";
import "./copyToClipboard-B49pzkZl.js";
import "./user-plus-3llJDC4d.js";
import "./index-C4i189TA.js";
import "./settings-KYD-P5eY.js";
import "./dollar-sign-4CE7QsSH.js";
const Q = ({
    open: t,
    onOpenChange: l
}) => {
    const {
        props: a
    } = b(), {
        platform: i,
        coins: n
    } = a, {
        processing: o,
        data: s,
        setData: c,
        errors: p,
        post: v,
        clearErrors: w
    } = S({
        amount: "15",
        points: 0,
        coin_id: ""
    }), C = ["15", "25", "50", "100", "200"], x = i.naira_per_dollar, u = i.naira_per_point;
    N.useEffect(() => {
        const r = Number(s.amount) * x,
            m = u * r;
        c({ ...s,
            points: m
        })
    }, [s.amount, x, u]);
    const f = r => {
        r.preventDefault(), w(), v(route("buy-point.automatic-crypto"), {
            preserveScroll: !0,
            onSuccess: () => {
                O.success("Transaction Created")
            },
            onError: m => M(m)
        })
    };
    return e.jsxs(D, {
        open: t,
        onOpenChange: l,
        children: [e.jsx(B, {}), e.jsxs(A, {
            children: [e.jsxs(z, {
                children: [e.jsx(L, {
                    children: "Pay with crypto(auto)"
                }), e.jsx(E, {
                    children: "If you're a vendor, select a coin with lower fees in order to make more profit when reselling your points to other users."
                })]
            }), e.jsxs("form", {
                onSubmit: f,
                className: "flex flex-col w-full gap-5",
                children: [e.jsxs("div", {
                    className: "flex flex-col gap-1 w-full",
                    children: [e.jsx(j, {
                        htmlFor: "deposit-amount",
                        children: "Amount (USD) Min amount is $15"
                    }), e.jsxs(I, {
                        className: "w-full max-w-[340px] whitespace-nowrap",
                        children: [e.jsx("div", {
                            className: "flex w-max space-x-3 pb-4 pt-1 items-center",
                            children: C.map(r => e.jsxs(h, {
                                type: "button",
                                className: R("text-sm", {
                                    "bg-green-500 hover:bg-green-500/70 text-white font-bold": s.amount == r
                                }),
                                onClick: () => c("amount", r),
                                size: "sm",
                                children: ["$", g(Number(r))]
                            }, r))
                        }), e.jsx(T, {
                            orientation: "horizontal"
                        })]
                    }), e.jsxs("p", {
                        children: ["You will receive a total of", " ", e.jsxs("span", {
                            className: "font-semibold",
                            style: {
                                color: i.primary_color
                            },
                            children: [g(s.points), " points"]
                        })]
                    }), e.jsx("p", {
                        className: "text-sm text-rose-500",
                        children: p.amount
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [e.jsx(j, {
                        htmlFor: "coin",
                        children: "Select Coin"
                    }), e.jsxs(U, {
                        value: s.coin_id,
                        onValueChange: r => {
                            c("coin_id", r)
                        },
                        children: [e.jsx($, {
                            id: "coin",
                            children: e.jsx(F, {
                                placeholder: "Choose Coin"
                            })
                        }), e.jsx(G, {
                            className: "max-h-[280px]",
                            children: n.map(r => e.jsxs(H, {
                                value: r.id.toString(),
                                children: [`${r.name} - ${r.value}`, " ", r.value == "ltc" && "(Recomended for lower fees)"]
                            }, r.id))
                        })]
                    }), e.jsx("p", {
                        className: "text-sm text-rose-500",
                        children: p.coin_id
                    })]
                }), e.jsx(h, {
                    type: "submit",
                    disabled: o,
                    onClick: f,
                    className: "text-white",
                    style: {
                        backgroundColor: i.primary_color
                    },
                    children: o ? e.jsx(P, {}) : "Proceed"
                })]
            })]
        })]
    })
};

function X(t) {
    return Z({
        attr: {
            role: "img",
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"
            },
            child: []
        }]
    })(t)
}
const Ke = ({
    platform: t
}) => {
    const [l, a] = N.useState(!1), i = b().props.auth.user, n = [{
        id: "p2p",
        icon: y,
        title: "Bank Transfer (P2P)",
        subtitle: "Nigerian Naira Only",
        desc: "Buy points from verified vendors via direct bank transfer. Best rates for NGN payments.",
        badges: [{
            icon: W,
            label: "5-30 min"
        }, {
            icon: y,
            label: "P2P"
        }],
        action: () => _.visit(route("vendors"))
    }, {
        id: "crypto",
        icon: X,
        title: "Crypto Payment",
        subtitle: "Automatic & Instant",
        desc: "Pay with Bitcoin, USDT, Ethereum, and 70+ cryptocurrencies. Points are credited instantly after confirmation.",
        badges: [{
            icon: Y,
            label: "Instant"
        }, {
            icon: J,
            label: "Secure"
        }],
        action: () => a(!0)
    }];
    return e.jsxs(V, {
        children: [e.jsx(k, {
            title: "Buy Points"
        }), e.jsxs("div", {
            className: "flex w-full flex-col items-center",
            children: [e.jsxs("div", {
                className: "w-full max-w-2xl text-center mb-8",
                children: [e.jsxs("div", {
                    className: "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4",
                    style: {
                        backgroundColor: d(.35, t.primary_color),
                        color: t.primary_color
                    },
                    children: [e.jsx(q, {
                        size: 12
                    }), "Fund your account"]
                }), e.jsx("h1", {
                    className: "text-2xl sm:text-3xl font-extrabold tracking-tight mb-2",
                    children: "Buy Points"
                }), e.jsx("p", {
                    className: "text-sm text-muted-foreground max-w-md mx-auto",
                    children: "Choose your preferred payment method. Points are added to your balance and can be used across all services."
                }), e.jsxs("div", {
                    className: "inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl border bg-background",
                    children: [e.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "Current balance:"
                    }), e.jsxs("span", {
                        className: "text-sm font-bold",
                        style: {
                            color: t.primary_color
                        },
                        children: [Number(i ?.point_main_balance ?? 0).toLocaleString(), " ", "pts"]
                    })]
                })]
            }), e.jsx("div", {
                className: "w-full max-w-2xl flex flex-col gap-4",
                children: n.map(o => e.jsx("button", {
                    onClick: o.action,
                    className: "group w-full text-left rounded-2xl border bg-background p-5 sm:p-6 transition-all hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99]",
                    children: e.jsxs("div", {
                        className: "flex items-start gap-4",
                        children: [e.jsx("div", {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            style: {
                                backgroundColor: d(.35, t.primary_color)
                            },
                            children: e.jsx(o.icon, {
                                size: 22,
                                style: {
                                    color: t.primary_color
                                }
                            })
                        }), e.jsxs("div", {
                            className: "flex-1 min-w-0",
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [e.jsxs("div", {
                                    children: [e.jsx("h3", {
                                        className: "font-semibold text-base sm:text-lg",
                                        children: o.title
                                    }), e.jsx("p", {
                                        className: "text-xs font-medium",
                                        style: {
                                            color: t.primary_color
                                        },
                                        children: o.subtitle
                                    })]
                                }), e.jsx(K, {
                                    size: 18,
                                    className: "text-muted-foreground group-hover:translate-x-1 transition-transform flex-shrink-0"
                                })]
                            }), e.jsx("p", {
                                className: "text-sm text-muted-foreground mt-2 leading-relaxed",
                                children: o.desc
                            }), e.jsx("div", {
                                className: "flex gap-2 mt-3",
                                children: o.badges.map(s => e.jsxs("span", {
                                    className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium",
                                    style: {
                                        backgroundColor: d(.35, t.primary_color),
                                        color: t.primary_color
                                    },
                                    children: [e.jsx(s.icon, {
                                        size: 11
                                    }), s.label]
                                }, s.label))
                            })]
                        })]
                    })
                }, o.id))
            }), e.jsx("p", {
                className: "text-xs text-muted-foreground text-center mt-6 max-w-md",
                children: "All payments are secure and encrypted. Points are non-refundable once credited to your account."
            })]
        }), e.jsx(Q, {
            open: l,
            onOpenChange: a
        })]
    })
};
export {
    Ke as
    default
};