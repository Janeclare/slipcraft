import {
    r as u,
    j as e,
    a as h
} from "./app-CPSemYgC.js";
import {
    A as g,
    a as j
} from "./AppLayout-BVugRKpX.js";
import {
    N as f,
    F as b
} from "./Nav-CXqgDSmx.js";
import {
    B as m
} from "./button-BamgVvPn.js";
import {
    I as n
} from "./input-MxT5BQBW.js";
import {
    L as i
} from "./label-DzYRBl-l.js";
import {
    T as y
} from "./textarea-D5O83yDd.js";
import {
    c as t
} from "./polished.esm-Cyjuaya6.js";
import {
    b as N
} from "./index-CGcBZyi7.js";
import {
    M as v
} from "./mail--HRBfw0-.js";
import {
    S as w
} from "./send-DwrV7dp2.js";
import {
    c as k
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    M as C
} from "./message-circle-CG73Eipp.js";
import {
    A as c
} from "./arrow-right-b0B6GwCf.js";
import {
    C as _
} from "./clock-D_O17udO.js";
import "./index-Dnc4ycMJ.js";
import "./index-BIbNlVZ0.js";
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
import "./scroll-area-B-fov1Vq.js";
import "./index-BdQq_4o_.js";
import "./iconBase-BweG_smQ.js";
const $ = k("MapPin", [
        ["path", {
            d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
            key: "1r0f0z"
        }],
        ["circle", {
            cx: "12",
            cy: "10",
            r: "3",
            key: "ilqhr7"
        }]
    ]),
    xe = ({
        platform: s
    }) => {
        const [a, l] = u.useState({
            name: "",
            email: "",
            subject: "",
            message: ""
        }), d = [{
            icon: v,
            title: "Email Us",
            desc: "Send us an email and we'll respond within 24 hours.",
            value: s.email,
            href: `mailto:${s.email}`,
            badge: "24hr response"
        }, {
            icon: N,
            title: "WhatsApp",
            desc: "Message us on WhatsApp for quick support.",
            value: s.phone,
            href: `https://wa.me/${s.phone.replace(/[^0-9]/g,"")}`,
            badge: "Instant"
        }, {
            icon: w,
            title: "Telegram",
            desc: "Chat with us directly on Telegram for quick support.",
            value: "Open Telegram",
            href: s.telegram_support_link,
            badge: "Instant"
        }, {
            icon: $,
            title: "Visit Us",
            desc: "Come say hello at our office.",
            value: s.address,
            href: null,
            badge: "In-person"
        }], p = r => {
            r.preventDefault();
            const o = encodeURIComponent(a.subject || "Contact Form"),
                x = encodeURIComponent(`Name: ${a.name}

${a.message}`);
            window.open(`mailto:${s.email}?subject=${o}&body=${x}`, "_blank")
        };
        return e.jsxs(g, {
            children: [e.jsx(j, {
                title: "Contact Us"
            }), e.jsxs("div", {
                className: "flex flex-col items-center",
                children: [e.jsx(f, {}), e.jsxs("section", {
                    className: "w-full relative overflow-hidden",
                    children: [e.jsx("div", {
                        className: "absolute inset-0 opacity-[0.03] dark:opacity-[0.06]",
                        style: {
                            background: `radial-gradient(circle at 20% 50%, ${s.primary_color} 0%, transparent 50%), radial-gradient(circle at 80% 50%, ${s.primary_color} 0%, transparent 50%)`
                        }
                    }), e.jsxs("div", {
                        className: "relative max-w-4xl mx-auto px-6 pt-20 pb-16 text-center",
                        children: [e.jsxs("div", {
                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6",
                            style: {
                                backgroundColor: t(.35, s.primary_color),
                                color: s.primary_color
                            },
                            children: [e.jsx(C, {
                                size: 14
                            }), "We'd love to hear from you"]
                        }), e.jsx("h1", {
                            className: "text-4xl sm:text-5xl font-extrabold tracking-tight mb-4",
                            children: "Get in Touch"
                        }), e.jsx("p", {
                            className: "text-lg text-muted-foreground max-w-xl mx-auto",
                            children: "Have a question, feedback, or need support? Reach out through any of the channels below — we're here to help."
                        })]
                    })]
                }), e.jsx("section", {
                    className: "w-full max-w-6xl mx-auto px-6 -mt-4 mb-16",
                    children: e.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                        children: d.map(r => e.jsxs("div", {
                            className: "group relative rounded-2xl border bg-background p-6 transition-all hover:shadow-md hover:-translate-y-0.5",
                            children: [e.jsx("span", {
                                className: "absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full",
                                style: {
                                    backgroundColor: t(.35, s.primary_color),
                                    color: s.primary_color
                                },
                                children: r.badge
                            }), e.jsx("div", {
                                className: "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                                style: {
                                    backgroundColor: t(.35, s.primary_color)
                                },
                                children: e.jsx(r.icon, {
                                    size: 22,
                                    style: {
                                        color: s.primary_color
                                    }
                                })
                            }), e.jsx("h3", {
                                className: "font-semibold text-lg mb-1",
                                children: r.title
                            }), e.jsx("p", {
                                className: "text-sm text-muted-foreground mb-4 leading-relaxed",
                                children: r.desc
                            }), r.href ? e.jsxs("a", {
                                href: r.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center gap-1 text-sm font-medium transition-colors hover:underline",
                                style: {
                                    color: s.primary_color
                                },
                                children: [r.value, e.jsx(c, {
                                    size: 14,
                                    className: "group-hover:translate-x-0.5 transition-transform"
                                })]
                            }) : e.jsx("p", {
                                className: "text-sm font-medium text-foreground/80",
                                children: r.value
                            })]
                        }, r.title))
                    })
                }), e.jsx("section", {
                    className: "w-full max-w-6xl mx-auto px-6 mb-20",
                    children: e.jsxs("div", {
                        className: "grid grid-cols-1 lg:grid-cols-5 gap-8",
                        children: [e.jsxs("div", {
                            className: "lg:col-span-3 rounded-2xl border bg-background p-8",
                            children: [e.jsx("h2", {
                                className: "text-2xl font-bold mb-1",
                                children: "Send a Message"
                            }), e.jsx("p", {
                                className: "text-sm text-muted-foreground mb-6",
                                children: "Fill out the form and we'll open your email client with the details pre-filled."
                            }), e.jsxs("form", {
                                onSubmit: p,
                                className: "flex flex-col gap-4",
                                children: [e.jsxs("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [e.jsxs("div", {
                                        className: "space-y-1.5",
                                        children: [e.jsx(i, {
                                            children: "Your Name"
                                        }), e.jsx(n, {
                                            type: "text",
                                            required: !0,
                                            value: a.name,
                                            onChange: r => l({ ...a,
                                                name: r.target.value
                                            }),
                                            placeholder: "John Doe"
                                        })]
                                    }), e.jsxs("div", {
                                        className: "space-y-1.5",
                                        children: [e.jsx(i, {
                                            children: "Email Address"
                                        }), e.jsx(n, {
                                            type: "email",
                                            required: !0,
                                            value: a.email,
                                            onChange: r => l({ ...a,
                                                email: r.target.value
                                            }),
                                            placeholder: "john@example.com"
                                        })]
                                    })]
                                }), e.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [e.jsx(i, {
                                        children: "Subject"
                                    }), e.jsx(n, {
                                        type: "text",
                                        required: !0,
                                        value: a.subject,
                                        onChange: r => l({ ...a,
                                            subject: r.target.value
                                        }),
                                        placeholder: "How can we help?"
                                    })]
                                }), e.jsxs("div", {
                                    className: "space-y-1.5",
                                    children: [e.jsx(i, {
                                        children: "Message"
                                    }), e.jsx(y, {
                                        required: !0,
                                        rows: 5,
                                        value: a.message,
                                        onChange: r => l({ ...a,
                                            message: r.target.value
                                        }),
                                        placeholder: "Tell us more about your inquiry…"
                                    })]
                                }), e.jsxs(m, {
                                    type: "submit",
                                    className: "self-start mt-1 rounded-lg px-6",
                                    style: {
                                        backgroundColor: s.primary_color
                                    },
                                    children: ["Send Message", e.jsx(c, {
                                        size: 16,
                                        className: "ml-2"
                                    })]
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: "lg:col-span-2 flex flex-col gap-4",
                            children: [e.jsxs("div", {
                                className: "rounded-2xl border bg-background p-6",
                                children: [e.jsx("h3", {
                                    className: "font-semibold text-lg mb-4",
                                    children: "Before You Reach Out"
                                }), e.jsx("ul", {
                                    className: "space-y-3",
                                    children: ["Check our Help Center for instant answers to common questions.", "Include your username or order ID for faster support.", "For urgent issues, use Telegram for the quickest response."].map((r, o) => e.jsxs("li", {
                                        className: "flex items-start gap-2.5 text-sm text-muted-foreground",
                                        children: [e.jsx("span", {
                                            className: "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold mt-0.5",
                                            style: {
                                                backgroundColor: t(.35, s.primary_color),
                                                color: s.primary_color
                                            },
                                            children: o + 1
                                        }), r]
                                    }, o))
                                }), e.jsx(h, {
                                    href: route("help"),
                                    children: e.jsxs(m, {
                                        variant: "outline",
                                        className: "w-full mt-4 rounded-lg",
                                        children: ["Visit Help Center", e.jsx(c, {
                                            size: 14,
                                            className: "ml-1"
                                        })]
                                    })
                                })]
                            }), e.jsxs("div", {
                                className: "rounded-2xl p-6 text-white",
                                style: {
                                    background: `linear-gradient(135deg, ${s.primary_color}, ${t(.1,s.primary_color)})`
                                },
                                children: [e.jsx(_, {
                                    size: 28,
                                    className: "mb-3 opacity-80"
                                }), e.jsx("h3", {
                                    className: "font-semibold text-lg mb-1",
                                    children: "Response Times"
                                }), e.jsxs("div", {
                                    className: "space-y-2 text-sm opacity-90 mt-3",
                                    children: [e.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [e.jsx("span", {
                                            children: "WhatsApp"
                                        }), e.jsx("span", {
                                            className: "font-semibold",
                                            children: "< 1 hour"
                                        })]
                                    }), e.jsx("div", {
                                        className: "h-px bg-white/20"
                                    }), e.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [e.jsx("span", {
                                            children: "Email"
                                        }), e.jsx("span", {
                                            className: "font-semibold",
                                            children: "< 24 hours"
                                        })]
                                    }), e.jsx("div", {
                                        className: "h-px bg-white/20"
                                    }), e.jsxs("div", {
                                        className: "flex justify-between",
                                        children: [e.jsx("span", {
                                            children: "Telegram"
                                        }), e.jsx("span", {
                                            className: "font-semibold",
                                            children: "Instant"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                }), e.jsx(b, {})]
            })]
        })
    };
export {
    xe as
    default
};