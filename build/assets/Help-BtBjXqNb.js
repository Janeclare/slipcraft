import {
    r as c,
    j as e
} from "./app-CPSemYgC.js";
import {
    A as m,
    a as x
} from "./AppLayout-BVugRKpX.js";
import {
    N as d,
    F as p
} from "./Nav-CXqgDSmx.js";
import {
    A as h,
    a as u,
    b as g,
    c as f
} from "./accordion-CW7Z_BS5.js";
import {
    c as j
} from "./polished.esm-Cyjuaya6.js";
import {
    T as N
} from "./Testimonies-BbeA1JVh.js";
import {
    B as b
} from "./button-BamgVvPn.js";
import {
    M as w
} from "./mail--HRBfw0-.js";
import {
    S as y
} from "./send-DwrV7dp2.js";
import {
    C as v
} from "./circle-help-BcgS28iq.js";
import {
    S as a
} from "./search-BS5sFJC3.js";
import {
    M as C
} from "./message-circle-CG73Eipp.js";
import {
    A as _
} from "./arrow-right-b0B6GwCf.js";
import "./index-Dnc4ycMJ.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
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
import "./sheet-BiVVAgsw.js";
import "./index-DdW_XmhI.js";
import "./x-Bf_gKvvP.js";
import "./scroll-area-B-fov1Vq.js";
import "./index-BdQq_4o_.js";
import "./index-SHdw-lpr.js";
import "./chevron-down-DGcLvqVu.js";
import "./TestimonyCard-ZfOojPBD.js";
import "./index-CitaMW1f.js";
import "./avatar-BLCVZC4Y.js";
import "./stringInitials-Bl64PEY-.js";
import "./dialog-BauOFWUU.js";
import "./showIntertiaErrors-Bokdg093.js";
import "./input-MxT5BQBW.js";
import "./label-DzYRBl-l.js";
import "./isNumber-BPVTmlLX.js";
import "./textarea-D5O83yDd.js";
import "./square-pen-DXyr7M_P.js";
import "./trash-2-CiMSE6TR.js";
const Ce = ({
    platform: s
}) => {
    const [r, o] = c.useState(""), i = s.help_common_questions || [], l = r.trim() ? i.filter(t => t.question.toLowerCase().includes(r.toLowerCase()) || t.answer.toLowerCase().includes(r.toLowerCase())) : i, n = [{
        icon: w,
        title: "Email Support",
        desc: "Get a response within 24 hours",
        action: s.email ? `mailto:${s.email}` : null,
        label: s.email || "Not available",
        color: "#f59e0b"
    }, {
        icon: y,
        title: "Telegram",
        desc: "Chat with us directly",
        action: s.telegram_support_link || null,
        label: "Open Telegram",
        color: "#3b82f6"
    }];
    return e.jsxs(m, {
        children: [e.jsx(x, {
            title: "Help Center"
        }), e.jsxs("div", {
            className: "flex flex-col items-center",
            children: [e.jsx("div", {
                className: "flex z-20 w-full justify-center",
                children: e.jsx(d, {})
            }), e.jsxs("section", {
                className: "w-full flex flex-col items-center relative overflow-hidden py-16 sm:py-20",
                children: [e.jsx("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] dark:opacity-[0.03] blur-3xl",
                    style: {
                        backgroundColor: s.primary_color
                    }
                }), e.jsxs("div", {
                    className: "relative z-10 flex flex-col items-center gap-6 max-w-2xl text-center px-5",
                    children: [e.jsxs("div", {
                        className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold",
                        style: {
                            backgroundColor: s.primary_color + "14",
                            color: s.primary_color
                        },
                        children: [e.jsx(v, {
                            size: 13
                        }), "Help Center"]
                    }), e.jsxs("h1", {
                        className: "text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]",
                        children: ["How Can We", " ", e.jsx("span", {
                            style: {
                                color: s.primary_color
                            },
                            children: "Help"
                        }), " ", "You?"]
                    }), e.jsx("p", {
                        className: "text-ts text-base sm:text-lg leading-relaxed",
                        children: "Find answers to common questions or reach out to our support team."
                    }), e.jsxs("div", {
                        className: "relative w-full max-w-md mt-2",
                        children: [e.jsx(a, {
                            size: 18,
                            className: "absolute left-4 top-1/2 -translate-y-1/2 text-ts"
                        }), e.jsx("input", {
                            type: "text",
                            placeholder: "Search for a question...",
                            value: r,
                            onChange: t => o(t.target.value),
                            className: "w-full rounded-full border bg-background pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow",
                            style: {
                                "--tw-ring-color": s.primary_color + "40"
                            }
                        })]
                    })]
                })]
            }), e.jsx("section", {
                className: "w-[90%] max-w-2xl pb-16",
                children: e.jsxs("div", {
                    className: "flex flex-col gap-6",
                    children: [e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [e.jsx("h2", {
                            className: "text-xl font-bold",
                            children: "Frequently Asked Questions"
                        }), r && e.jsxs("span", {
                            className: "text-ts text-xs",
                            children: [l.length, " result", l.length !== 1 ? "s" : ""]
                        })]
                    }), l.length > 0 ? e.jsx(h, {
                        type: "single",
                        collapsible: !0,
                        className: "flex flex-col gap-3",
                        children: l.map(t => e.jsxs(u, {
                            value: `item-${t.id}`,
                            className: "rounded-xl border px-5 py-1 data-[state=open]:shadow-sm transition-shadow",
                            style: {
                                borderColor: j(.3, s.primary_color)
                            },
                            children: [e.jsx(g, {
                                className: "text-sm font-semibold text-left hover:no-underline",
                                children: t.question
                            }), e.jsx(f, {
                                className: "text-ts text-sm leading-relaxed",
                                children: t.answer
                            })]
                        }, t.id))
                    }) : e.jsxs("div", {
                        className: "flex flex-col items-center gap-3 py-12 text-center",
                        children: [e.jsx(a, {
                            size: 32,
                            className: "text-ts opacity-40"
                        }), e.jsxs("p", {
                            className: "text-ts text-sm",
                            children: ['No questions match "', r, '"']
                        }), e.jsx("button", {
                            onClick: () => o(""),
                            className: "text-xs font-semibold hover:underline",
                            style: {
                                color: s.primary_color
                            },
                            children: "Clear search"
                        })]
                    })]
                })
            }), e.jsx("section", {
                className: "w-[90%] max-w-2xl pb-16",
                children: e.jsxs("div", {
                    className: "flex flex-col gap-6",
                    children: [e.jsxs("div", {
                        className: "flex flex-col items-center gap-3 text-center",
                        children: [e.jsx("h2", {
                            className: "text-xl font-bold",
                            children: "Still Need Help?"
                        }), e.jsx("p", {
                            className: "text-ts text-sm",
                            children: "Our support team is ready to assist you."
                        })]
                    }), e.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: n.map(t => e.jsxs("a", {
                            href: t.action || "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group flex items-start gap-4 rounded-2xl border bg-background p-5 transition-all hover:shadow-md hover:-translate-y-0.5",
                            children: [e.jsx("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                                style: {
                                    backgroundColor: t.color + "14"
                                },
                                children: e.jsx(t.icon, {
                                    size: 20,
                                    color: t.color
                                })
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-0.5",
                                children: [e.jsx("h3", {
                                    className: "text-sm font-bold",
                                    children: t.title
                                }), e.jsx("p", {
                                    className: "text-ts text-xs",
                                    children: t.desc
                                })]
                            })]
                        }, t.title))
                    })]
                })
            }), e.jsx("section", {
                className: "w-[90%] max-w-2xl pb-16",
                children: e.jsxs("div", {
                    className: "relative overflow-hidden rounded-2xl p-8 sm:p-10 text-center",
                    style: {
                        background: `linear-gradient(145deg, ${s.primary_color}, ${s.primary_color}cc)`
                    },
                    children: [e.jsx("div", {
                        className: "absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/10"
                    }), e.jsx("div", {
                        className: "absolute -left-6 -bottom-6 h-20 w-20 rounded-full border border-white/[0.07]"
                    }), e.jsxs("div", {
                        className: "relative z-10 flex flex-col items-center gap-4",
                        children: [e.jsx(C, {
                            size: 28,
                            className: "text-white/80"
                        }), e.jsx("h2", {
                            className: "text-xl sm:text-2xl font-extrabold text-white tracking-tight",
                            children: "Join our community"
                        }), e.jsx("p", {
                            className: "text-white/70 text-sm max-w-md",
                            children: "Connect with other users, get tips, and stay updated on new features and services."
                        }), s.telegram_support_link && e.jsx("a", {
                            href: s.telegram_support_link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.jsxs(b, {
                                size: "lg",
                                className: "bg-white hover:bg-white/90 gap-2 rounded-full px-8 h-11 text-sm font-semibold shadow-lg",
                                style: {
                                    color: s.primary_color
                                },
                                children: ["Join Telegram", e.jsx(_, {
                                    size: 15
                                })]
                            })
                        })]
                    })]
                })
            }), e.jsx(N, {}), e.jsx(p, {})]
        })]
    })
};
export {
    Ce as
    default
};