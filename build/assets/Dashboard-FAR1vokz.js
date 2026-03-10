import {
    q as w,
    W as H,
    r as h,
    j as e,
    a as c,
    y as o
} from "./app-CPSemYgC.js";
import {
    b as B,
    I as L,
    c as P,
    d as R,
    a as O
} from "./AppLayout-BVugRKpX.js";
import {
    B as i
} from "./button-BamgVvPn.js";
import {
    f as j
} from "./formatNumber-Ce-00Vs2.js";
import {
    U as F
} from "./UserLayout-P-Xlti_8.js";
import {
    b as W
} from "./index-CitaMW1f.js";
import {
    S as l
} from "./ServiceIcon-C88v8dGn.js";
import {
    A as q
} from "./ApplyVendorModal-DT9eSAp_.js";
import {
    D as v,
    a as y,
    b as k,
    c as C,
    d as S,
    e as _,
    f as D
} from "./dialog-BauOFWUU.js";
import {
    t as J
} from "./index-Dnc4ycMJ.js";
import {
    s as M
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as V
} from "./Loader-DxAivhzx.js";
import {
    d as Y
} from "./index-BzCTRD1y.js";
import {
    L as g
} from "./label-DzYRBl-l.js";
import {
    I as b
} from "./input-MxT5BQBW.js";
import {
    i as U
} from "./isNumber-BPVTmlLX.js";
import {
    p as $
} from "./steal-pass-icon-D7aV-WCY.js";
import {
    o as G
} from "./icon-mLvMNoaA.js";
import {
    k as K
} from "./kuda-D--VG3aI.js";
import {
    b as Q
} from "./binance-D4PhrHxU.js";
import {
    b as X
} from "./bybit-DyzaUzuj.js";
import {
    c as Z
} from "./coinbase-BiTggD6g.js";
import {
    p as ee
} from "./paypal-CuuRI83g.js";
import {
    c as se
} from "./crypto.com-logo-Do31OLD5.js";
import {
    W as re
} from "./wallet-CWU1D2kp.js";
import {
    E as te,
    L as oe
} from "./lock-BPuQLOUF.js";
import {
    E as ie
} from "./eye-Vvb-RJj7.js";
import {
    A as N
} from "./arrow-right-b0B6GwCf.js";
import {
    S as ae
} from "./shopping-cart-Cv9LyvKh.js";
import {
    C as le
} from "./clock-D_O17udO.js";
import {
    C as ne
} from "./coins-8AZIbOBg.js";
import {
    S as ce
} from "./send-DwrV7dp2.js";
import {
    S as me
} from "./settings-KYD-P5eY.js";
import {
    H as de
} from "./headset-rbYpeB5I.js";
import {
    R as xe
} from "./receipt-BLgBmkhL.js";
import {
    D as pe
} from "./database-CwXutizx.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./polished.esm-Cyjuaya6.js";
import "./mode-toggle-BKQyjCmw.js";
import "./dropdown-menu-73g9f9Cf.js";
import "./index-Dc_FVRD7.js";
import "./index-TtBBfnyI.js";
import "./index-BUKYvAHl.js";
import "./index-bfqS6E9x.js";
import "./index-CChplcHQ.js";
import "./index-ClHHFVVV.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-D_XWqw2c.js";
import "./index-BN1_Zxci.js";
import "./index-B-GRoRe2.js";
import "./Combination-C3j38xtn.js";
import "./chevron-right-Wmdl5VZJ.js";
import "./check-CsA8fo_3.js";
import "./avatar-BLCVZC4Y.js";
import "./stringInitials-Bl64PEY-.js";
import "./copyToClipboard-B49pzkZl.js";
import "./user-plus-3llJDC4d.js";
import "./index-C4i189TA.js";
import "./dollar-sign-4CE7QsSH.js";
import "./users-ZqGOPOiM.js";
import "./index-DdW_XmhI.js";
import "./x-Bf_gKvvP.js";
const he = ({
        trigger: x
    }) => {
        const {
            props: s
        } = w(), {
            platform: t,
            auth: a,
            errors: n
        } = s, {
            data: m,
            setData: r,
            processing: z,
            errors: u,
            post: I,
            clearErrors: A
        } = H({
            points: "",
            recipient_username: ""
        }), [E, p] = h.useState(!1), f = d => {
            d.preventDefault(), A(), I(route("point.transfer"), {
                onSuccess: () => {
                    J.success("Succesful"), p(!1)
                },
                onError: T => {
                    M(T)
                }
            })
        };
        return e.jsxs(v, {
            open: E,
            onOpenChange: p,
            children: [e.jsx(y, {
                asChild: !0,
                children: x || e.jsxs(i, {
                    className: "gap-1 items-center w-full",
                    variant: "outline",
                    children: ["Transfer Point", e.jsx(Y, {
                        color: t.primary_color
                    })]
                })
            }), e.jsxs(k, {
                children: [e.jsxs(C, {
                    children: [e.jsx(S, {
                        children: "Transfer point"
                    }), e.jsx(_, {
                        children: "Directly transfer point to other users."
                    })]
                }), a.user ?.vendor !== "yes" && e.jsxs(B, {
                    variant: "destructive",
                    children: [e.jsx(L, {
                        className: "h-4 w-4"
                    }), e.jsx(P, {
                        children: "Heads up!"
                    }), e.jsx(R, {
                        children: "You need to become a vendor to have access to this feature."
                    })]
                }), e.jsxs("form", {
                    className: "flex flex-col w-full gap-4",
                    onSubmit: f,
                    children: [e.jsxs("div", {
                        className: "flex flex-col w-full gap-2",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(g, {
                                htmlFor: "points",
                                children: "Enter points amount"
                            }), e.jsx(b, {
                                placeholder: "Please enter number of points",
                                id: "points",
                                name: "points",
                                value: m.points,
                                onChange: d => {
                                    U(+d.target.value) && r("points", d.target.value.trim())
                                }
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: u.points
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(g, {
                                htmlFor: "username",
                                children: "Recipient username"
                            }), e.jsx(b, {
                                placeholder: "Enter Recipient username",
                                id: "username",
                                name: "username",
                                value: m.recipient_username,
                                onChange: d => {
                                    r("recipient_username", d.target.value.toLowerCase().trim())
                                }
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: u.recipient_username
                            })]
                        })]
                    }), n.message && e.jsx("p", {
                        className: "text-rose-500 text-sm",
                        children: n.message
                    }), e.jsxs(D, {
                        className: "gap-y-2",
                        children: [e.jsx(i, {
                            type: "button",
                            onClick: () => p(!1),
                            variant: "outline",
                            children: "Cancel"
                        }), e.jsx(i, {
                            style: {
                                backgroundColor: t.primary_color
                            },
                            onClick: f,
                            className: "text-white",
                            children: z ? e.jsx(V, {}) : "Continue"
                        })]
                    })]
                })]
            })]
        })
    },
    ue = () => {
        const {
            props: x
        } = w(), {
            platform: s
        } = x, t = s.telegram_support_link ?? void 0, [a, n] = h.useState(localStorage.getItem("join_telegram") === "true"), m = () => {
            localStorage.setItem("join_telegram", "true"), n(!0)
        };
        return e.jsxs(v, {
            open: !a,
            onOpenChange: () => n(!0),
            children: [e.jsx(y, {}), e.jsxs(k, {
                children: [e.jsxs(C, {
                    children: [e.jsx(S, {
                        children: "Have you joined our Telegram channel?"
                    }), e.jsx(_, {
                        children: e.jsx("p", {
                            className: "text-sm",
                            children: "Join our telegram channel to get the latest updates and news about our platform and get support from the following."
                        })
                    })]
                }), e.jsx("div", {
                    className: "",
                    children: e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx("p", {
                            children: "- Do you have any questions or need help?"
                        }), e.jsx("p", {
                            children: "- Don't know how to buy points?"
                        }), e.jsx("p", {
                            children: "- Report a vendor that has not released your points"
                        }), e.jsx("p", {
                            children: "- And others..."
                        })]
                    })
                }), e.jsxs(D, {
                    className: "gap-y-2",
                    children: [e.jsx(i, {
                        onClick: m,
                        variant: "outline",
                        children: "Yes i have joined"
                    }), e.jsx("a", {
                        className: "w-full",
                        href: t,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: e.jsx(i, {
                            className: "text-white w-full",
                            style: {
                                backgroundColor: s.primary_color
                            },
                            children: "Join our Telegram Channel"
                        })
                    })]
                }), e.jsx("p", {
                    className: "font-semibold text-sm text-rose-400 text-center",
                    children: "You can go to the settings page to join later."
                })]
            })]
        })
    },
    _s = ({
        auth: x,
        platform: s
    }) => {
        const t = x.user,
            [a, n] = h.useState(!0),
            m = [{
                label: "Support Sites",
                desc: "Build support pages",
                icon: de,
                route: "services.support_page",
                isNew: !0
            }, {
                label: "Crypto Receipt",
                desc: "Generate receipts",
                icon: xe,
                route: "services.crypto_receipt",
                isNew: !0
            }, {
                label: "Opay",
                desc: "Opay bank slips",
                iconSrc: G,
                route: "services.opay",
                isNew: !1
            }];
        return e.jsxs(F, {
            children: [e.jsx(O, {
                title: "Dashboard"
            }), e.jsxs("div", {
                className: "flex w-full flex-col gap-7 pb-10",
                children: [e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [e.jsxs("div", {
                        children: [e.jsx("p", {
                            className: "text-ts text-sm",
                            children: "Welcome back,"
                        }), e.jsxs("h1", {
                            className: "text-xl sm:text-2xl font-bold -mt-0.5",
                            children: [t ?.username, " 👋"]
                        })]
                    }), e.jsx(c, {
                        href: route("buy_point"),
                        children: e.jsxs(i, {
                            size: "sm",
                            className: "gap-1.5 text-white font-semibold text-xs rounded-full px-4",
                            style: {
                                backgroundColor: s.primary_color
                            },
                            children: [e.jsx(W, {
                                size: 14
                            }), "Buy Points"]
                        })
                    })]
                }), e.jsxs("div", {
                    className: "relative overflow-hidden rounded-2xl p-5 sm:p-6",
                    style: {
                        background: `linear-gradient(145deg, ${s.primary_color}, ${s.primary_color}cc)`
                    },
                    children: [e.jsx("div", {
                        className: "absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/10",
                        style: {
                            boxShadow: "0 0 60px 10px rgba(255,255,255,0.03)"
                        }
                    }), e.jsx("div", {
                        className: "absolute -right-6 -top-6 h-24 w-24 rounded-full border border-white/[0.07]"
                    }), e.jsx("div", {
                        className: "absolute -left-8 -bottom-8 h-28 w-28 rounded-full border border-white/[0.06]"
                    }), e.jsxs("div", {
                        className: "relative z-[1] flex flex-col gap-4",
                        children: [e.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [e.jsx(re, {
                                        size: 15,
                                        className: "text-white/60"
                                    }), e.jsx("span", {
                                        className: "text-white/60 text-xs font-medium uppercase tracking-wider",
                                        children: "Total Balance"
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex items-baseline gap-2",
                                    children: [e.jsx("p", {
                                        className: "text-white text-3xl sm:text-4xl font-bold tracking-tight",
                                        children: a ? j(t ?.point_main_balance || 0) : "••••••"
                                    }), e.jsx("span", {
                                        className: "text-white/40 text-sm font-medium",
                                        children: "pts"
                                    })]
                                })]
                            }), e.jsx("button", {
                                onClick: () => n(!a),
                                className: "p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors",
                                children: a ? e.jsx(te, {
                                    size: 16,
                                    className: "text-white/70"
                                }) : e.jsx(ie, {
                                    size: 16,
                                    className: "text-white/70"
                                })
                            })]
                        }), (t ?.point_holding_balance ?? 0) > 0 && e.jsx("div", {
                            className: "flex items-center gap-2",
                            children: e.jsxs("div", {
                                className: "inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5",
                                children: [e.jsx(oe, {
                                    size: 12,
                                    className: "text-white/50"
                                }), e.jsx("span", {
                                    className: "text-white/60 text-[11px] font-medium",
                                    children: "Holding:"
                                }), e.jsx("span", {
                                    className: "text-white text-[11px] font-bold",
                                    children: a ? j(t ?.point_holding_balance || 0) : "••••"
                                }), e.jsx("span", {
                                    className: "text-white/40 text-[11px]",
                                    children: "pts"
                                })]
                            })
                        }), e.jsxs("div", {
                            className: "grid grid-cols-3 gap-2 pt-1",
                            children: [e.jsx(c, {
                                href: route("services"),
                                className: "w-full",
                                children: e.jsxs("button", {
                                    className: "w-full flex flex-col items-center gap-1.5 rounded-xl bg-white/15 hover:bg-white/20 backdrop-blur-sm p-3 transition-colors",
                                    children: [e.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center",
                                        children: e.jsx(N, {
                                            size: 15,
                                            className: "text-white"
                                        })
                                    }), e.jsx("span", {
                                        className: "text-white text-[11px] font-semibold",
                                        children: "Services"
                                    })]
                                })
                            }), e.jsx(c, {
                                href: route("orders"),
                                className: "w-full",
                                children: e.jsxs("button", {
                                    className: "w-full flex flex-col items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm p-3 transition-colors",
                                    children: [e.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-white/15 flex items-center justify-center",
                                        children: e.jsx(ae, {
                                            size: 15,
                                            className: "text-white/90"
                                        })
                                    }), e.jsx("span", {
                                        className: "text-white/80 text-[11px] font-semibold",
                                        children: "Orders"
                                    })]
                                })
                            }), e.jsx(c, {
                                href: route("transactions"),
                                className: "w-full",
                                children: e.jsxs("button", {
                                    className: "w-full flex flex-col items-center gap-1.5 rounded-xl bg-white/10 hover:bg-white/15 backdrop-blur-sm p-3 transition-colors",
                                    children: [e.jsx("div", {
                                        className: "w-8 h-8 rounded-full bg-white/15 flex items-center justify-center",
                                        children: e.jsx(le, {
                                            size: 15,
                                            className: "text-white/90"
                                        })
                                    }), e.jsx("span", {
                                        className: "text-white/80 text-[11px] font-semibold",
                                        children: "History"
                                    })]
                                })
                            })]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col gap-3",
                    children: [e.jsx("h2", {
                        className: "font-bold text-base",
                        children: "Quick Actions"
                    }), e.jsxs("div", {
                        className: "flex gap-3",
                        children: [e.jsx(c, {
                            href: route("buy_point"),
                            className: "flex-1",
                            children: e.jsxs(i, {
                                variant: "outline",
                                className: "w-full gap-1.5 h-10 text-sm font-medium",
                                children: [e.jsx(ne, {
                                    size: 15,
                                    color: s.primary_color
                                }), "Buy Points"]
                            })
                        }), t ?.vendor === "yes" && e.jsx(he, {
                            trigger: e.jsx(i, {
                                variant: "outline",
                                className: "h-10 w-10 p-0 flex-shrink-0",
                                children: e.jsx(ce, {
                                    size: 18,
                                    color: s.primary_color
                                })
                            })
                        }), t ?.vendor === "yes" ? e.jsx(c, {
                            href: route("vendor.edit", {
                                id: t ?.id
                            }),
                            className: "flex-1",
                            children: e.jsxs(i, {
                                variant: "outline",
                                className: "w-full gap-1.5 h-10 text-sm font-medium",
                                children: [e.jsx(me, {
                                    size: 15,
                                    color: s.primary_color
                                }), "Vendor"]
                            })
                        }) : e.jsx("div", {
                            className: "flex-1",
                            children: e.jsx(q, {})
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col gap-3",
                    children: [e.jsx("h2", {
                        className: "font-bold text-base",
                        children: "Featured"
                    }), e.jsx("div", {
                        className: "grid grid-cols-3 gap-2.5",
                        children: m.map(r => e.jsxs("button", {
                            onClick: () => o.get(route(r.route)),
                            className: "relative group rounded-xl border bg-background p-3.5 sm:p-4 flex flex-col items-center gap-2 transition-all hover:border-t/30 hover:shadow-sm active:scale-[0.97]",
                            children: [r.isNew && e.jsx("span", {
                                className: "absolute top-2 right-2 text-[9px] font-bold text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded-md",
                                children: "NEW"
                            }), e.jsx("div", {
                                className: "w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center overflow-hidden",
                                style: {
                                    backgroundColor: s.primary_color + "12"
                                },
                                children: "iconSrc" in r && r.iconSrc ? e.jsx("img", {
                                    src: r.iconSrc,
                                    alt: r.label,
                                    className: "w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-md"
                                }) : "icon" in r && r.icon && e.jsx(r.icon, {
                                    size: 20,
                                    color: s.primary_color
                                })
                            }), e.jsx("span", {
                                className: "text-xs font-semibold text-center leading-tight",
                                children: r.label
                            }), e.jsx("p", {
                                className: "text-ts text-[10px] text-center leading-tight hidden sm:block",
                                children: r.desc
                            })]
                        }, r.label))
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col gap-3",
                    children: [e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [e.jsx("h2", {
                            className: "font-bold text-base",
                            children: "All Services"
                        }), e.jsxs(c, {
                            href: route("services"),
                            className: "inline-flex items-center gap-1 text-xs font-semibold hover:underline",
                            style: {
                                color: s.primary_color
                            },
                            children: ["View All", e.jsx(N, {
                                size: 12
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-y-4 gap-x-2",
                        children: [e.jsx(l, {
                            onClick: () => o.get(route("services.faker")),
                            label: "Faker Data",
                            icon: e.jsx(pe, {
                                size: 32,
                                style: {
                                    color: s.primary_color
                                }
                            }),
                            iconClassName: "bg-muted",
                            newlyAdded: !0
                        }), e.jsx(l, {
                            onClick: () => o.get(route("services.kuda")),
                            label: "Kuda",
                            iconSrc: K
                        }), e.jsx(l, {
                            onClick: () => o.get(route("services.binance")),
                            label: "Binance",
                            iconSrc: Q
                        }), e.jsx(l, {
                            onClick: () => o.get(route("services.bybit")),
                            label: "Bybit",
                            iconSrc: X
                        }), e.jsx(l, {
                            onClick: () => o.get(route("services.paypal")),
                            label: "Paypal",
                            iconSrc: ee
                        }), e.jsx(l, {
                            onClick: () => o.get(route("services.coinbase")),
                            label: "Coinbase",
                            iconSrc: Z
                        }), e.jsx(l, {
                            onClick: () => o.get(route("services.crypto.com")),
                            label: "Crypto.com",
                            iconSrc: se
                        }), e.jsx(l, {
                            onClick: () => o.get(route("services.pass_clone")),
                            label: "PassClone",
                            iconSrc: $,
                            iconClassName: "bg-white"
                        })]
                    })]
                })]
            }), e.jsx(ue, {})]
        })
    };
export {
    _s as
    default
};