import {
    q as D,
    W as M,
    r as _,
    j as e,
    a as W
} from "./app-CPSemYgC.js";
import {
    A as le,
    a as re
} from "./AppLayout-BVugRKpX.js";
import {
    G as oe
} from "./GoBack-CC6xQy9d.js";
import {
    B as m
} from "./button-BamgVvPn.js";
import {
    D as E,
    a as P,
    b as T,
    c as L,
    d as A,
    e as I,
    f as $
} from "./dialog-BauOFWUU.js";
import {
    t as b
} from "./index-Dnc4ycMJ.js";
import {
    s as B
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as R
} from "./Loader-DxAivhzx.js";
import {
    I as k
} from "./input-MxT5BQBW.js";
import {
    L as y
} from "./label-DzYRBl-l.js";
import {
    T as q
} from "./textarea-D5O83yDd.js";
import {
    P as U,
    a as K
} from "./PhoneCustomInput-BJtrTbNc.js";
import {
    b as V
} from "./index-CGcBZyi7.js";
import {
    S as ie
} from "./scroll-area-B-fov1Vq.js";
import {
    c as F
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    M as Y
} from "./mail--HRBfw0-.js";
import {
    M as J
} from "./message-circle-CG73Eipp.js";
import {
    C as S
} from "./check-CsA8fo_3.js";
import {
    T as ne
} from "./trash-2-CiMSE6TR.js";
import {
    f as N
} from "./formatNumber-Ce-00Vs2.js";
import {
    C as Q
} from "./clock-D_O17udO.js";
import {
    M as X
} from "./minus-C3KCdFFt.js";
import {
    P as H
} from "./plus-D1TJ0vFK.js";
import {
    C as Z
} from "./calendar-BkJT-0DW.js";
import {
    C as z
} from "./coins-8AZIbOBg.js";
import {
    f as ce
} from "./formatDate-DSWK92vn.js";
import {
    b as de
} from "./binance-D4PhrHxU.js";
import {
    b as me
} from "./bybit-DyzaUzuj.js";
import {
    c as xe
} from "./coinbase-BiTggD6g.js";
import {
    p as pe
} from "./paypal-CuuRI83g.js";
import {
    c as ue
} from "./crypto.com-logo-Do31OLD5.js";
import {
    c as he
} from "./cashapp-B-zEz66O.js";
import {
    C as fe
} from "./copy-CA1ynquI.js";
import {
    E as je
} from "./external-link-B9zueEzt.js";
import {
    A as ye
} from "./arrow-left-D8sGkDbn.js";
import {
    A as _e
} from "./arrow-right-b0B6GwCf.js";
import {
    H as ge
} from "./headset-rbYpeB5I.js";
import {
    G as ve
} from "./globe-CPNy-IB6.js";
import "./index-BIbNlVZ0.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
import "./index-TtBBfnyI.js";
import "./iconBase-BweG_smQ.js";
import "./index-BN1_Zxci.js";
import "./index-BUKYvAHl.js";
import "./index-CChplcHQ.js";
import "./index-BdQq_4o_.js";
import "./index-Dc_FVRD7.js";
const ee = F("CircleAlert", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["line", {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
    }],
    ["line", {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
    }]
]);
const se = F("MessagesSquare", [
    ["path", {
        d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
        key: "p1xzt8"
    }],
    ["path", {
        d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",
        key: "1cx29u"
    }]
]);
const be = F("Pencil", [
    ["path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    }],
    ["path", {
        d: "m15 5 4 4",
        key: "1mk7zo"
    }]
]);
const Ne = F("RotateCw", [
        ["path", {
            d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
            key: "1p45f6"
        }],
        ["path", {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }]
    ]),
    G = [{
        label: "WhatsApp",
        value: "whatsapp",
        icon: V,
        placeholder: "Enter phone number"
    }, {
        label: "Email",
        value: "email",
        icon: Y,
        placeholder: "e.g. support@example.com"
    }, {
        label: "Telegram",
        value: "telegram",
        icon: J,
        placeholder: "e.g. https://t.me/your_telegram"
    }, {
        label: "Live Chat",
        value: "live_chat",
        icon: se,
        placeholder: "Paste your live chat widget code here"
    }],
    Ce = ({
        support_page: t
    }) => {
        const {
            props: r
        } = D(), {
            platform: i
        } = r, {
            data: l,
            setData: s,
            processing: n,
            put: x
        } = M({
            title: t.title,
            contact_method: t.contact_method,
            whatsapp_contact: t.whatsapp_contact ?? "",
            email_contact: t.email_contact ?? "",
            telegram_contact: t.telegram_contact ?? "",
            live_chat_contact: t.live_chat_contact ?? ""
        }), [g, f] = _.useState(!1), j = () => !l.title.trim() || !l.contact_method ? !1 : ({
            whatsapp: l.whatsapp_contact,
            email: l.email_contact,
            telegram: l.telegram_contact,
            live_chat: l.live_chat_contact
        }[l.contact_method] ?? "").trim() !== "", c = () => {
            x(route("services.support_page.update", t.id), {
                onSuccess: () => {
                    b.success("Support site updated successfully"), f(!1)
                },
                onError: o => {
                    B(o)
                }
            })
        };
        return e.jsxs(E, {
            open: g,
            onOpenChange: f,
            children: [e.jsx(P, {
                asChild: !0,
                children: e.jsxs(m, {
                    variant: "outline",
                    className: "flex-1 text-xs font-medium h-8",
                    children: [e.jsx(be, {
                        size: 14,
                        className: "text-ts"
                    }), "Edit"]
                })
            }), e.jsxs(T, {
                children: [e.jsxs(L, {
                    children: [e.jsx(A, {
                        children: "Edit Support Site"
                    }), e.jsx(I, {
                        children: "Update the details of your support site."
                    })]
                }), e.jsx(ie, {
                    className: "max-h-[55vh]",
                    children: e.jsxs("div", {
                        className: "flex flex-col gap-5 pr-3 px-1 py-1",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [e.jsx(y, {
                                htmlFor: "edit_title",
                                children: "Title"
                            }), e.jsx(k, {
                                id: "edit_title",
                                placeholder: "e.g. Binance Support",
                                value: l.title,
                                onChange: o => s("title", o.target.value)
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [e.jsx(y, {
                                children: "Contact Method"
                            }), e.jsx("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: G.map(o => e.jsxs("button", {
                                    type: "button",
                                    onClick: () => s("contact_method", o.value),
                                    className: "relative flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                                    style: {
                                        borderColor: l.contact_method === o.value ? i.primary_color : void 0,
                                        backgroundColor: l.contact_method === o.value ? i.primary_color + "10" : void 0
                                    },
                                    children: [e.jsx(o.icon, {
                                        size: 16
                                    }), o.label, l.contact_method === o.value && e.jsx(S, {
                                        size: 14,
                                        className: "absolute right-2",
                                        color: i.primary_color
                                    })]
                                }, o.value))
                            })]
                        }), l.contact_method && (() => {
                            const o = G.find(h => h.value === l.contact_method);
                            if (!o) return null;
                            const d = `${o.value}_contact`;
                            return e.jsxs("div", {
                                className: "flex flex-col gap-2",
                                children: [e.jsxs(y, {
                                    htmlFor: `edit_${d}`,
                                    children: [o.label, " Contact"]
                                }), o.value === "whatsapp" ? e.jsx(U, {
                                    className: "mt-1 block w-full",
                                    id: `edit_${d}`,
                                    name: d,
                                    defaultCountry: "NG",
                                    placeholder: o.placeholder,
                                    value: l[d],
                                    onChange: h => s(d, (h ?? "") + ""),
                                    inputComponent: K
                                }) : o.value === "live_chat" ? e.jsx(q, {
                                    id: `edit_${d}`,
                                    placeholder: o.placeholder,
                                    value: l[d],
                                    onChange: h => s(d, h.target.value),
                                    rows: 4
                                }) : e.jsx(k, {
                                    id: `edit_${d}`,
                                    placeholder: o.placeholder,
                                    value: l[d],
                                    onChange: h => s(d, h.target.value)
                                })]
                            })
                        })()]
                    })
                }), e.jsxs($, {
                    className: "gap-y-2",
                    children: [e.jsx(m, {
                        onClick: () => f(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(m, {
                        style: {
                            backgroundColor: i.primary_color
                        },
                        onClick: c,
                        className: "text-white",
                        disabled: !j() || n,
                        children: n ? e.jsx(R, {}) : "Update"
                    })]
                })]
            })]
        })
    },
    we = ({
        support_page: t
    }) => {
        const {
            props: r
        } = D(), {
            platform: i
        } = r, {
            processing: l,
            delete: s
        } = M({}), [n, x] = _.useState(!1), g = () => {
            s(route("services.support_page.destroy", t.id), {
                onSuccess: () => {
                    b.success("Support site deleted successfully"), x(!1)
                },
                onError: f => {
                    B(f)
                }
            })
        };
        return e.jsxs(E, {
            open: n,
            onOpenChange: x,
            children: [e.jsx(P, {
                asChild: !0,
                children: e.jsxs(m, {
                    variant: "outline",
                    className: "flex-1 text-xs font-medium h-8 border-red-200 dark:border-red-500/20 hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500",
                    children: [e.jsx(ne, {
                        size: 14
                    }), "Delete"]
                })
            }), e.jsxs(T, {
                children: [e.jsxs(L, {
                    children: [e.jsx(A, {
                        children: "Delete Support Site"
                    }), e.jsxs(I, {
                        children: ["Are you sure you want to delete", " ", e.jsx("strong", {
                            children: t.platform_name
                        }), "? This action cannot be undone."]
                    })]
                }), e.jsxs($, {
                    className: "gap-y-2",
                    children: [e.jsx(m, {
                        onClick: () => x(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(m, {
                        onClick: g,
                        variant: "destructive",
                        children: l ? e.jsx(R, {}) : "Delete"
                    })]
                })]
            })]
        })
    },
    ke = ({
        support_page: t
    }) => {
        const {
            props: r
        } = D(), {
            platform: i
        } = r, l = Number(i.support_page_daily_fee), {
            data: s,
            setData: n,
            processing: x,
            post: g
        } = M({
            num_of_days: 1
        }), [f, j] = _.useState(!1), [c, o] = _.useState(null), d = t.expires_at ? new Date(t.expires_at) < new Date : !1, h = t.expires_at ? Math.max(0, Math.ceil((new Date(t.expires_at).getTime() - new Date().getTime()) / (1e3 * 60 * 60 * 24))) : 0, C = () => {
            o(null), g(route("services.support_page.renew", t.id), {
                onSuccess: () => {
                    b.success("Support site renewed successfully"), j(!1), n("num_of_days", 1)
                },
                onError: p => {
                    p.insufficient_points ? (o(p.insufficient_points), b.error(p.insufficient_points)) : B(p)
                }
            })
        }, w = p => {
            j(p), p || (n("num_of_days", 1), o(null))
        };
        return e.jsxs(E, {
            open: f,
            onOpenChange: w,
            children: [e.jsx(P, {
                asChild: !0,
                children: e.jsxs(m, {
                    variant: "outline",
                    className: "flex-1 text-xs font-medium h-8",
                    children: [e.jsx(Ne, {
                        size: 14,
                        className: "text-ts"
                    }), "Renew"]
                })
            }), e.jsxs(T, {
                children: [e.jsxs(L, {
                    children: [e.jsx(A, {
                        children: "Renew Support Site"
                    }), e.jsxs(I, {
                        children: ["Extend the duration of", " ", e.jsx("span", {
                            className: "font-medium",
                            children: t.title
                        }), ". Each day costs ", N(l), " Points."]
                    })]
                }), e.jsx("div", {
                    className: "py-2 px-1 max-h-[50vh] overflow-y-auto",
                    children: e.jsxs("div", {
                        className: "flex flex-col gap-5",
                        children: [e.jsxs("div", {
                            className: "rounded-xl p-3 flex items-center gap-3",
                            style: {
                                backgroundColor: (d ? "#ef4444" : i.primary_color) + "10"
                            },
                            children: [e.jsx(Q, {
                                size: 18,
                                color: d ? "#ef4444" : i.primary_color
                            }), e.jsxs("div", {
                                className: "text-sm",
                                children: [e.jsxs("span", {
                                    className: "text-ts",
                                    children: ["Current status:", " "]
                                }), e.jsx("span", {
                                    className: "font-medium",
                                    style: {
                                        color: d ? "#ef4444" : i.primary_color
                                    },
                                    children: d ? "Expired" : `${h} day${h!==1?"s":""} remaining`
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [e.jsx(y, {
                                children: "Add Days"
                            }), e.jsxs("div", {
                                className: "flex items-center justify-center gap-4",
                                children: [e.jsx(m, {
                                    variant: "outline",
                                    size: "icon",
                                    className: "h-10 w-10 rounded-full",
                                    onClick: () => n("num_of_days", Math.max(1, s.num_of_days - 1)),
                                    disabled: s.num_of_days <= 1,
                                    children: e.jsx(X, {
                                        size: 18
                                    })
                                }), e.jsxs("div", {
                                    className: "text-center min-w-[80px]",
                                    children: [e.jsx("p", {
                                        className: "text-3xl font-bold",
                                        children: s.num_of_days
                                    }), e.jsx("p", {
                                        className: "text-ts text-xs",
                                        children: s.num_of_days === 1 ? "day" : "days"
                                    })]
                                }), e.jsx(m, {
                                    variant: "outline",
                                    size: "icon",
                                    className: "h-10 w-10 rounded-full",
                                    onClick: () => n("num_of_days", Math.min(365, s.num_of_days + 1)),
                                    disabled: s.num_of_days >= 365,
                                    children: e.jsx(H, {
                                        size: 18
                                    })
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [1, 3, 7, 14, 30].map(p => e.jsxs("button", {
                                type: "button",
                                onClick: () => n("num_of_days", p),
                                className: "rounded-full px-3 py-1 text-xs font-medium border transition-all",
                                style: {
                                    borderColor: s.num_of_days === p ? i.primary_color : void 0,
                                    backgroundColor: s.num_of_days === p ? i.primary_color + "10" : void 0
                                },
                                children: [p, "d"]
                            }, p))
                        }), e.jsxs("div", {
                            className: "rounded-xl p-4 flex flex-col gap-3",
                            style: {
                                backgroundColor: i.primary_color + "10"
                            },
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [e.jsxs("span", {
                                    className: "text-ts flex items-center gap-1.5",
                                    children: [e.jsx(Z, {
                                        size: 14
                                    }), "Extra duration"]
                                }), e.jsxs("span", {
                                    className: "font-medium",
                                    children: [s.num_of_days, " ", s.num_of_days === 1 ? "day" : "days"]
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [e.jsxs("span", {
                                    className: "text-ts flex items-center gap-1.5",
                                    children: [e.jsx(z, {
                                        size: 14
                                    }), "Cost per day"]
                                }), e.jsxs("span", {
                                    className: "font-medium",
                                    children: [N(l), " pts"]
                                })]
                            }), e.jsxs("div", {
                                className: "border-t pt-2 flex items-center justify-between",
                                children: [e.jsx("span", {
                                    className: "font-semibold text-sm",
                                    children: "Total"
                                }), e.jsxs("span", {
                                    className: "font-bold text-lg",
                                    style: {
                                        color: i.primary_color
                                    },
                                    children: [N(s.num_of_days * l), " ", "pts"]
                                })]
                            })]
                        }), c && e.jsxs("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40 p-4 flex flex-col gap-2",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2 text-red-600 dark:text-red-400",
                                children: [e.jsx(ee, {
                                    size: 16
                                }), e.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: c
                                })]
                            }), e.jsxs(W, {
                                href: route("buy_point"),
                                className: "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors",
                                style: {
                                    backgroundColor: i.primary_color
                                },
                                children: [e.jsx(z, {
                                    size: 14,
                                    className: "mr-1.5"
                                }), "Buy Points"]
                            })]
                        })]
                    })
                }), e.jsxs($, {
                    className: "gap-y-2",
                    children: [e.jsx(m, {
                        onClick: () => j(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(m, {
                        style: {
                            backgroundColor: i.primary_color
                        },
                        onClick: C,
                        className: "text-white",
                        disabled: x,
                        children: x ? e.jsx(R, {}) : "Renew"
                    })]
                })]
            })]
        })
    },
    Se = {
        binance: de,
        bybit: me,
        coinbase: xe,
        paypal: pe,
        "crypto.com": ue,
        cashapp: he
    },
    ze = ({
        support_page: t,
        platform: r
    }) => {
        const [i, l] = _.useState(!1), s = () => {
            navigator.clipboard.writeText(t.url), l(!0), b.success("URL copied to clipboard"), setTimeout(() => l(!1), 2e3)
        }, n = t.expires_at ? new Date(t.expires_at) < new Date : !1, x = t.expires_at ? Math.max(0, Math.ceil((new Date(t.expires_at).getTime() - new Date().getTime()) / (1e3 * 60 * 60 * 24))) : null;
        return e.jsxs("div", {
            className: "shadow-custom-light dark:shadow-custom-dark rounded-xl border border-transparent hover:border-t/20 transition-all duration-200 p-4 flex flex-col gap-3",
            children: [e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [e.jsx("div", {
                    className: "w-10 h-10 rounded-full overflow-hidden flex-shrink-0",
                    children: e.jsx("img", {
                        src: Se[t.platform_name],
                        alt: t.platform_name,
                        className: "w-full h-full object-cover"
                    })
                }), e.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [e.jsx("p", {
                        className: "font-semibold text-sm truncate",
                        children: t.title
                    }), e.jsx("p", {
                        className: "text-ts text-xs",
                        children: t.platform_name
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col items-end gap-1 shrink-0",
                    children: [e.jsx("span", {
                        className: "text-ts text-[10px]",
                        children: ce(new Date(t.created_at))
                    }), t.expires_at && e.jsxs("span", {
                        className: `inline-flex items-center gap-1 text-[10px] font-medium rounded-full px-2 py-0.5 ${n?"bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400":x!==null&&x<=3?"bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400":"bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400"}`,
                        children: [e.jsx(Q, {
                            size: 10
                        }), n ? "Expired" : `${x}d left`]
                    })]
                })]
            }), e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [e.jsxs(m, {
                    onClick: s,
                    variant: "outline",
                    className: "flex-1 text-xs font-medium h-8",
                    children: [i ? e.jsx(S, {
                        size: 14,
                        className: "text-green-500"
                    }) : e.jsx(fe, {
                        size: 14,
                        className: "text-ts"
                    }), i ? "Copied!" : "Copy URL"]
                }), e.jsx(m, {
                    asChild: !0,
                    className: "flex-1 text-xs font-medium text-white h-8",
                    style: {
                        backgroundColor: r.primary_color
                    },
                    children: e.jsxs("a", {
                        href: t.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [e.jsx(je, {
                            size: 14
                        }), "Visit"]
                    })
                })]
            }), e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [e.jsx(Ce, {
                    support_page: t
                }), e.jsx(ke, {
                    support_page: t
                }), e.jsx(we, {
                    support_page: t
                })]
            })]
        })
    },
    O = [{
        label: "WhatsApp",
        value: "whatsapp",
        icon: V,
        placeholder: "Enter phone number"
    }, {
        label: "Email",
        value: "email",
        icon: Y,
        placeholder: "e.g. support@example.com"
    }, {
        label: "Telegram",
        value: "telegram",
        icon: J,
        placeholder: "e.g. https://t.me/your_telegram"
    }, {
        label: "Live Chat",
        value: "live_chat",
        icon: se,
        placeholder: "Paste your live chat widget code here"
    }],
    De = [{
        label: "Binance",
        value: "binance"
    }, {
        label: "Bybit",
        value: "bybit"
    }, {
        label: "Coinbase",
        value: "coinbase"
    }, {
        label: "PayPal",
        value: "paypal"
    }, {
        label: "Crypto.com",
        value: "crypto.com"
    }, {
        label: "Cash App",
        value: "cashapp"
    }],
    Me = () => {
        const {
            props: t
        } = D(), {
            platform: r
        } = t, i = Number(r.support_page_daily_fee), l = [{
            title: "Title for your Support Site",
            description: "Enter the title for your support site."
        }, {
            title: "Choose a Platform",
            description: "What platform is this support site for?"
        }, {
            title: "Contact Method",
            description: "How can clients contact you through this support site? (e.g. WhatsApp, Email, Telegram, Live Chat)"
        }, {
            title: "Billing",
            description: "Choose how long your support site will stay active. Each day costs " + N(i) + " Points. You can always renew later if you run out of days."
        }], {
            data: s,
            setData: n,
            processing: x,
            post: g
        } = M({
            title: "",
            platform_name: "",
            contact_method: "",
            whatsapp_contact: "",
            email_contact: "",
            telegram_contact: "",
            live_chat_contact: "",
            num_of_days: 1
        }), [f, j] = _.useState(!1), [c, o] = _.useState(0), [d, h] = _.useState(null), C = () => {
            o(0), h(null), n({
                title: "",
                platform_name: "",
                contact_method: "",
                whatsapp_contact: "",
                email_contact: "",
                telegram_contact: "",
                live_chat_contact: "",
                num_of_days: 1
            })
        }, w = c === l.length - 1, p = () => c === 0 ? s.title.trim() !== "" : c === 1 ? s.platform_name.trim() !== "" : c === 2 ? s.contact_method ? ({
            whatsapp: s.whatsapp_contact,
            email: s.email_contact,
            telegram: s.telegram_contact,
            live_chat: s.live_chat_contact
        }[s.contact_method] ?? "").trim() !== "" : !1 : c === 3 ? s.num_of_days >= 1 : !1, te = () => {
            w ? (h(null), g(route("services.support_page.store"), {
                onSuccess: () => {
                    b.success("Support site created successfully"), j(!1), C()
                },
                onError: a => {
                    a.insufficient_points ? (h(a.insufficient_points), b.error(a.insufficient_points)) : B(a)
                }
            })) : o(c + 1)
        }, ae = a => {
            j(a), a || C()
        };
        return e.jsxs(E, {
            open: f,
            onOpenChange: ae,
            children: [e.jsx(P, {
                asChild: !0,
                children: e.jsxs(m, {
                    style: {
                        backgroundColor: r.primary_color
                    },
                    className: "text-white w-full mt-1 rounded-lg",
                    children: [e.jsx(H, {
                        size: 18,
                        className: "mr-1"
                    }), "Create Support Site"]
                })
            }), e.jsxs(T, {
                children: [e.jsxs(L, {
                    children: [e.jsx(A, {
                        children: l[c].title
                    }), e.jsx(I, {
                        children: l[c].description
                    })]
                }), e.jsx("div", {
                    className: "flex items-center justify-center gap-2 py-2",
                    children: l.map((a, u) => e.jsx("div", {
                        className: "h-2 rounded-full transition-all duration-300",
                        style: {
                            width: u === c ? "28px" : "10px",
                            backgroundColor: u <= c ? r.primary_color : r.primary_color + "30"
                        }
                    }, u))
                }), e.jsxs("div", {
                    className: "py-2 px-1 max-h-[50vh] overflow-y-auto",
                    children: [c === 0 && e.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [e.jsx(y, {
                            htmlFor: "title",
                            children: "Title"
                        }), e.jsx(k, {
                            id: "title",
                            placeholder: "e.g. Binance Support",
                            value: s.title,
                            onChange: a => n("title", a.target.value)
                        })]
                    }), c === 1 && e.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [e.jsx(y, {
                            children: "Select a Platform"
                        }), e.jsx("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: De.map(a => e.jsxs("button", {
                                type: "button",
                                onClick: () => n("platform_name", a.value),
                                className: "relative flex items-center justify-center rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                                style: {
                                    borderColor: s.platform_name === a.value ? r.primary_color : void 0,
                                    backgroundColor: s.platform_name === a.value ? r.primary_color + "10" : void 0
                                },
                                children: [a.label, s.platform_name === a.value && e.jsx(S, {
                                    size: 14,
                                    className: "absolute right-2",
                                    color: r.primary_color
                                })]
                            }, a.value))
                        })]
                    }), c === 2 && e.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [e.jsx(y, {
                                children: "Choose Contact Method"
                            }), e.jsx("div", {
                                className: "grid grid-cols-2 gap-2",
                                children: O.map(a => e.jsxs("button", {
                                    type: "button",
                                    onClick: () => n("contact_method", a.value),
                                    className: "relative flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-all",
                                    style: {
                                        borderColor: s.contact_method === a.value ? r.primary_color : void 0,
                                        backgroundColor: s.contact_method === a.value ? r.primary_color + "10" : void 0
                                    },
                                    children: [e.jsx(a.icon, {
                                        size: 16
                                    }), a.label, s.contact_method === a.value && e.jsx(S, {
                                        size: 14,
                                        className: "absolute right-2",
                                        color: r.primary_color
                                    })]
                                }, a.value))
                            })]
                        }), s.contact_method && (() => {
                            const a = O.find(v => v.value === s.contact_method);
                            if (!a) return null;
                            const u = `${a.value}_contact`;
                            return e.jsxs("div", {
                                className: "flex flex-col gap-2",
                                children: [e.jsxs(y, {
                                    htmlFor: u,
                                    children: [a.label, " Contact"]
                                }), a.value === "whatsapp" ? e.jsx(U, {
                                    className: "mt-1 block w-full",
                                    id: u,
                                    name: u,
                                    defaultCountry: "NG",
                                    placeholder: a.placeholder,
                                    value: s[u],
                                    onChange: v => n(u, (v ?? "") + ""),
                                    inputComponent: K
                                }) : a.value === "live_chat" ? e.jsx(q, {
                                    id: u,
                                    placeholder: a.placeholder,
                                    value: s[u],
                                    onChange: v => n(u, v.target.value),
                                    rows: 4
                                }) : e.jsx(k, {
                                    id: u,
                                    placeholder: a.placeholder,
                                    value: s[u],
                                    onChange: v => n(u, v.target.value)
                                })]
                            })
                        })()]
                    }), c === 3 && e.jsxs("div", {
                        className: "flex flex-col gap-5",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-2",
                            children: [e.jsx(y, {
                                children: "Number of Days"
                            }), e.jsxs("div", {
                                className: "flex items-center justify-center gap-4",
                                children: [e.jsx(m, {
                                    variant: "outline",
                                    size: "icon",
                                    className: "h-10 w-10 rounded-full",
                                    onClick: () => n("num_of_days", Math.max(1, s.num_of_days - 1)),
                                    disabled: s.num_of_days <= 1,
                                    children: e.jsx(X, {
                                        size: 18
                                    })
                                }), e.jsxs("div", {
                                    className: "text-center min-w-[80px]",
                                    children: [e.jsx("p", {
                                        className: "text-3xl font-bold",
                                        children: s.num_of_days
                                    }), e.jsx("p", {
                                        className: "text-ts text-xs",
                                        children: s.num_of_days === 1 ? "day" : "days"
                                    })]
                                }), e.jsx(m, {
                                    variant: "outline",
                                    size: "icon",
                                    className: "h-10 w-10 rounded-full",
                                    onClick: () => n("num_of_days", Math.min(365, s.num_of_days + 1)),
                                    disabled: s.num_of_days >= 365,
                                    children: e.jsx(H, {
                                        size: 18
                                    })
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "flex items-center justify-center gap-2",
                            children: [1, 3, 7, 14, 30].map(a => e.jsxs("button", {
                                type: "button",
                                onClick: () => n("num_of_days", a),
                                className: "rounded-full px-3 py-1 text-xs font-medium border transition-all",
                                style: {
                                    borderColor: s.num_of_days === a ? r.primary_color : void 0,
                                    backgroundColor: s.num_of_days === a ? r.primary_color + "10" : void 0
                                },
                                children: [a, "d"]
                            }, a))
                        }), e.jsxs("div", {
                            className: "rounded-xl p-4 flex flex-col gap-3",
                            style: {
                                backgroundColor: r.primary_color + "10"
                            },
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [e.jsxs("span", {
                                    className: "text-ts flex items-center gap-1.5",
                                    children: [e.jsx(Z, {
                                        size: 14
                                    }), "Duration"]
                                }), e.jsxs("span", {
                                    className: "font-medium",
                                    children: [s.num_of_days, " ", s.num_of_days === 1 ? "day" : "days"]
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-center justify-between text-sm",
                                children: [e.jsxs("span", {
                                    className: "text-ts flex items-center gap-1.5",
                                    children: [e.jsx(z, {
                                        size: 14
                                    }), "Cost per day"]
                                }), e.jsxs("span", {
                                    className: "font-medium",
                                    children: [N(i), " pts"]
                                })]
                            }), e.jsxs("div", {
                                className: "border-t pt-2 flex items-center justify-between",
                                children: [e.jsx("span", {
                                    className: "font-semibold text-sm",
                                    children: "Total"
                                }), e.jsxs("span", {
                                    className: "font-bold text-lg",
                                    style: {
                                        color: r.primary_color
                                    },
                                    children: [N(s.num_of_days * i), " ", "pts"]
                                })]
                            })]
                        }), d && e.jsxs("div", {
                            className: "rounded-xl border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/40 p-4 flex flex-col gap-2",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-2 text-red-600 dark:text-red-400",
                                children: [e.jsx(ee, {
                                    size: 16
                                }), e.jsx("span", {
                                    className: "text-sm font-medium",
                                    children: d
                                })]
                            }), e.jsxs(W, {
                                href: route("buy_point"),
                                className: "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors",
                                style: {
                                    backgroundColor: r.primary_color
                                },
                                children: [e.jsx(z, {
                                    size: 14,
                                    className: "mr-1.5"
                                }), "Buy Points"]
                            })]
                        })]
                    })]
                }), e.jsxs($, {
                    className: "gap-y-2",
                    children: [c > 0 ? e.jsxs(m, {
                        onClick: () => o(c - 1),
                        variant: "outline",
                        children: [e.jsx(ye, {
                            size: 16,
                            className: "mr-1"
                        }), "Back"]
                    }) : e.jsx(m, {
                        onClick: () => j(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(m, {
                        style: {
                            backgroundColor: r.primary_color
                        },
                        onClick: te,
                        className: "text-white",
                        disabled: !p() || x,
                        children: x ? e.jsx(R, {}) : w ? "Create Support Site" : e.jsxs(e.Fragment, {
                            children: ["Next", e.jsx(_e, {
                                size: 16,
                                className: "ml-1"
                            })]
                        })
                    })]
                })]
            })]
        })
    },
    ks = ({
        platform: t,
        support_pages: r = []
    }) => e.jsxs(le, {
        children: [e.jsx(re, {
            title: "Support Sites"
        }), e.jsx("main", {
            className: "w-full flex justify-center",
            children: e.jsxs("div", {
                className: "flex w-[95%] max-w-[600px] flex-col pt-5 gap-5",
                children: [e.jsxs("div", {
                    className: "w-full flex-between",
                    children: [e.jsx(oe, {}), e.jsx("h1", {
                        className: "font-bold text-lg",
                        children: "Support Sites"
                    }), e.jsx("h1", {
                        className: "font-bold text-lg opacity-0 hidden sm:block",
                        children: "."
                    })]
                }), e.jsxs("div", {
                    className: "w-full rounded-xl p-5 flex flex-col items-center gap-3 text-center",
                    style: {
                        background: `linear-gradient(135deg, ${t.primary_color}15, ${t.primary_color}05)`
                    },
                    children: [e.jsx("div", {
                        className: "w-14 h-14 rounded-full flex items-center justify-center",
                        style: {
                            backgroundColor: t.primary_color + "20"
                        },
                        children: e.jsx(ge, {
                            size: 28,
                            color: t.primary_color
                        })
                    }), e.jsxs("div", {
                        children: [e.jsx("h2", {
                            className: "font-semibold text-base",
                            children: "Customer Support Sites"
                        }), e.jsx("p", {
                            className: "text-ts text-sm mt-1",
                            children: "Get a customer support website for different platforms in under 60 seconds!"
                        })]
                    }), e.jsx(Me, {})]
                }), r.length > 0 && e.jsx("div", {
                    className: "flex items-center justify-between",
                    children: e.jsxs("p", {
                        className: "text-ts text-xs font-medium uppercase tracking-wide",
                        children: ["Your Sites (", r.length, ")"]
                    })
                }), e.jsx("div", {
                    className: "w-full flex flex-col gap-3 max-h-[55svh] overflow-y-auto pb-10 px-1",
                    children: r.length > 0 ? r.map(i => e.jsx(ze, {
                        support_page: i,
                        platform: t
                    }, i.id)) : e.jsxs("div", {
                        className: "flex items-center flex-col gap-3 pt-16",
                        children: [e.jsx("div", {
                            className: "w-16 h-16 rounded-full flex items-center justify-center",
                            style: {
                                backgroundColor: t.primary_color + "15"
                            },
                            children: e.jsx(ve, {
                                size: 32,
                                color: t.primary_color,
                                className: "opacity-50"
                            })
                        }), e.jsx("p", {
                            className: "text-center text-ts text-sm",
                            children: "No support sites created yet."
                        })]
                    })
                })]
            })
        })]
    });
export {
    ks as
    default
};