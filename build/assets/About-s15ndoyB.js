import {
    j as e,
    a as o
} from "./app-CPSemYgC.js";
import {
    A as a,
    a as c
} from "./AppLayout-BVugRKpX.js";
import {
    N as n,
    F as d
} from "./Nav-CXqgDSmx.js";
import {
    T as x
} from "./Testimonies-BbeA1JVh.js";
import {
    B as m
} from "./button-BamgVvPn.js";
import {
    C as p
} from "./index-Bsd3BJPI.js";
import {
    S as h
} from "./sparkles-B4wUaH_8.js";
import {
    c as t
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    U as u
} from "./users-ZqGOPOiM.js";
import {
    Z as g
} from "./zap-DAw3SZK0.js";
import {
    S as b
} from "./shield-CPuMYdQm.js";
import {
    G as f
} from "./globe-CPNy-IB6.js";
import {
    A as j
} from "./arrow-right-b0B6GwCf.js";
import "./index-Dnc4ycMJ.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
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
import "./circle-help-BcgS28iq.js";
import "./polished.esm-Cyjuaya6.js";
import "./scroll-area-B-fov1Vq.js";
import "./index-BdQq_4o_.js";
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
const v = t("Heart", [
    ["path", {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky"
    }]
]);
const y = t("Target", [
        ["circle", {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }],
        ["circle", {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }]
    ]),
    je = ({
        platform: s
    }) => {
        const l = [{
                icon: g,
                title: "Speed",
                desc: "Every service is built for instant results — no waiting, no delays.",
                color: "#f59e0b"
            }, {
                icon: b,
                title: "Security",
                desc: "SSL encrypted, DDoS protected, and built with security-first architecture.",
                color: "#10b981"
            }, {
                icon: f,
                title: "Accessibility",
                desc: "Available worldwide, 24/7. Use our services from any device, anywhere.",
                color: "#8b5cf6"
            }, {
                icon: v,
                title: "Simplicity",
                desc: "Clean interfaces, intuitive flows. No technical skills required.",
                color: "#ec4899"
            }],
            i = [{
                value: s.total_users,
                label: "Active Users"
            }, {
                value: s.activities,
                label: "Services Used"
            }, {
                value: s.email_sent,
                label: "Emails Delivered"
            }];
        return e.jsxs(a, {
            children: [e.jsx(c, {
                title: "About Us"
            }), e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [e.jsx("div", {
                    className: "flex z-20 w-full justify-center",
                    children: e.jsx(n, {})
                }), e.jsxs("section", {
                    className: "w-full flex flex-col items-center relative overflow-hidden py-16 sm:py-24",
                    children: [e.jsx("div", {
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.06] dark:opacity-[0.03] blur-3xl",
                        style: {
                            backgroundColor: s.primary_color
                        }
                    }), e.jsxs("div", {
                        className: "relative z-10 flex flex-col items-center gap-6 max-w-3xl text-center px-5",
                        children: [e.jsxs("div", {
                            className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold",
                            style: {
                                backgroundColor: s.primary_color + "14",
                                color: s.primary_color
                            },
                            children: [e.jsx(h, {
                                size: 13
                            }), "About ", s.name]
                        }), e.jsxs("h1", {
                            className: "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]",
                            children: ["Powering", " ", e.jsx("span", {
                                style: {
                                    color: s.primary_color
                                },
                                children: "Digital Services"
                            }), " ", "for Everyone"]
                        }), e.jsxs("p", {
                            className: "text-ts text-base sm:text-lg leading-relaxed max-w-2xl",
                            children: [s.name, " is a points-based marketplace where you can generate receipts, send flash emails, build support pages, and access a full suite of digital tools — all from one dashboard."]
                        })]
                    })]
                }), e.jsx("section", {
                    className: "w-[90%] max-w-4xl pb-16",
                    children: e.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                        children: i.map(r => e.jsxs("div", {
                            className: "flex flex-col items-center gap-1 rounded-2xl border bg-background p-6 text-center",
                            children: [e.jsxs("span", {
                                className: "text-3xl sm:text-4xl font-extrabold tracking-tight",
                                children: [e.jsx(p, {
                                    end: r.value,
                                    separator: ","
                                }), e.jsx("span", {
                                    className: "text-lg",
                                    style: {
                                        color: s.primary_color
                                    },
                                    children: "+"
                                })]
                            }), e.jsx("span", {
                                className: "text-ts text-sm font-medium",
                                children: r.label
                            })]
                        }, r.label))
                    })
                }), e.jsx("section", {
                    className: "w-[90%] max-w-4xl flex flex-col items-center gap-8 pb-16",
                    children: e.jsxs("div", {
                        className: "flex flex-col sm:flex-row items-start gap-6 w-full",
                        children: [e.jsxs("div", {
                            className: "flex-1 rounded-2xl border bg-background p-6 sm:p-8",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [e.jsx("div", {
                                    className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                    style: {
                                        backgroundColor: s.primary_color + "14"
                                    },
                                    children: e.jsx(y, {
                                        size: 20,
                                        color: s.primary_color
                                    })
                                }), e.jsx("h2", {
                                    className: "text-xl font-bold",
                                    children: "Our Mission"
                                })]
                            }), e.jsx("p", {
                                className: "text-ts text-sm sm:text-base leading-relaxed",
                                children: "To provide the fastest, most reliable suite of digital services under one roof. We believe everyone deserves access to professional-grade tools without complexity or high costs."
                            })]
                        }), e.jsxs("div", {
                            className: "flex-1 rounded-2xl border bg-background p-6 sm:p-8",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [e.jsx("div", {
                                    className: "w-10 h-10 rounded-xl flex items-center justify-center",
                                    style: {
                                        backgroundColor: "#8b5cf614"
                                    },
                                    children: e.jsx(u, {
                                        size: 20,
                                        color: "#8b5cf6"
                                    })
                                }), e.jsx("h2", {
                                    className: "text-xl font-bold",
                                    children: "Who We Serve"
                                })]
                            }), e.jsx("p", {
                                className: "text-ts text-sm sm:text-base leading-relaxed",
                                children: "From individual freelancers to teams managing multiple accounts — our platform scales with your needs. Our vendor marketplace also enables P2P point trading with built-in escrow protection."
                            })]
                        })]
                    })
                }), e.jsxs("section", {
                    className: "w-[90%] max-w-4xl flex flex-col items-center gap-8 pb-16",
                    children: [e.jsxs("div", {
                        className: "flex flex-col items-center gap-3 text-center",
                        children: [e.jsx("h2", {
                            className: "text-2xl sm:text-3xl font-extrabold tracking-tight",
                            children: "What We Stand For"
                        }), e.jsx("p", {
                            className: "text-ts text-sm sm:text-base max-w-lg",
                            children: "The principles that drive every feature we build and every service we deliver."
                        })]
                    }), e.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
                        children: l.map(r => e.jsxs("div", {
                            className: "group flex items-start gap-4 rounded-2xl border bg-background p-5 transition-all hover:shadow-md",
                            children: [e.jsx("div", {
                                className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                                style: {
                                    backgroundColor: r.color + "14"
                                },
                                children: e.jsx(r.icon, {
                                    size: 20,
                                    color: r.color
                                })
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx("h3", {
                                    className: "font-bold",
                                    children: r.title
                                }), e.jsx("p", {
                                    className: "text-ts text-sm leading-relaxed",
                                    children: r.desc
                                })]
                            })]
                        }, r.title))
                    })]
                }), s.about_us && e.jsx("section", {
                    className: "w-[90%] max-w-4xl pb-16",
                    children: e.jsx("div", {
                        className: "prose prose-sm sm:prose dark:prose-invert max-w-none rounded-2xl border bg-background p-6 sm:p-8",
                        dangerouslySetInnerHTML: {
                            __html: s.about_us
                        }
                    })
                }), e.jsx("section", {
                    className: "w-[90%] max-w-4xl pb-16",
                    children: e.jsxs("div", {
                        className: "relative overflow-hidden rounded-2xl p-8 sm:p-12 text-center",
                        style: {
                            background: `linear-gradient(145deg, ${s.primary_color}, ${s.primary_color}cc)`
                        },
                        children: [e.jsx("div", {
                            className: "absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10"
                        }), e.jsx("div", {
                            className: "absolute -left-8 -bottom-8 h-24 w-24 rounded-full border border-white/[0.07]"
                        }), e.jsxs("div", {
                            className: "relative z-10 flex flex-col items-center gap-4",
                            children: [e.jsx("h2", {
                                className: "text-2xl sm:text-3xl font-extrabold text-white tracking-tight",
                                children: "Ready to experience it?"
                            }), e.jsxs("p", {
                                className: "text-white/70 text-sm sm:text-base max-w-lg",
                                children: ["Join ", s.total_users ?.toLocaleString(), "+ users already using ", s.name, ". Create your free account in seconds."]
                            }), e.jsx(o, {
                                href: route("register"),
                                children: e.jsxs(m, {
                                    size: "lg",
                                    className: "bg-white hover:bg-white/90 gap-2 rounded-full px-8 h-12 text-base font-semibold shadow-lg",
                                    style: {
                                        color: s.primary_color
                                    },
                                    children: ["Get Started", e.jsx(j, {
                                        size: 16
                                    })]
                                })
                            })]
                        })]
                    })
                }), e.jsx(x, {}), e.jsx(d, {})]
            })]
        })
    };
export {
    je as
    default
};