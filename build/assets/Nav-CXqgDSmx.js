import {
    q as x,
    j as e,
    a as r
} from "./app-CPSemYgC.js";
import {
    B as a
} from "./button-BamgVvPn.js";
import {
    A as p
} from "./arrow-right-b0B6GwCf.js";
import {
    M as d
} from "./mode-toggle-BKQyjCmw.js";
import {
    S as u,
    a as f,
    M as j,
    b as g,
    c as w,
    d as y,
    e as b,
    f as N
} from "./sheet-BiVVAgsw.js";
import {
    c as h
} from "./index-BIbNlVZ0.js";
import {
    c as m
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    C as v
} from "./circle-help-BcgS28iq.js";
import {
    I as k
} from "./AppLayout-BVugRKpX.js";
import {
    C
} from "./chevron-right-Wmdl5VZJ.js";
import {
    c as _
} from "./polished.esm-Cyjuaya6.js";
import {
    S,
    a as z
} from "./scroll-area-B-fov1Vq.js";
const A = m("House", [
    ["path", {
        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
        key: "5wwlr5"
    }],
    ["path", {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "1d0kgt"
    }]
]);
const H = m("PhoneCall", [
        ["path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }],
        ["path", {
            d: "M14.05 2a9 9 0 0 1 8 7.94",
            key: "vmijpz"
        }],
        ["path", {
            d: "M14.05 6A5 5 0 0 1 18 10",
            key: "13nbpp"
        }]
    ]),
    I = () => {
        const {
            props: o
        } = x(), {
            platform: t
        } = o;
        return e.jsxs("footer", {
            className: "w-full flex flex-col",
            children: [e.jsxs("div", {
                className: "w-full flex flex-col items-center py-20 px-5 relative overflow-hidden",
                children: [e.jsx("div", {
                    className: "absolute inset-0 opacity-[0.06] dark:opacity-[0.03]",
                    style: {
                        backgroundColor: t.primary_color
                    }
                }), e.jsx("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.08] dark:opacity-[0.04]",
                    style: {
                        backgroundColor: t.primary_color
                    }
                }), e.jsxs("div", {
                    className: "relative z-10 flex flex-col items-center gap-6 max-w-2xl text-center",
                    children: [e.jsx("h2", {
                        className: "text-3xl sm:text-4xl font-extrabold tracking-tight",
                        children: "Ready to Get Started?"
                    }), e.jsx("p", {
                        className: "text-ts text-base sm:text-lg leading-relaxed",
                        children: "Join thousands of users generating receipts, sending flash emails, and building support pages — all in one place."
                    }), e.jsx(r, {
                        href: route("register"),
                        children: e.jsxs(a, {
                            size: "lg",
                            className: "text-white gap-2 rounded-full px-8 h-12 text-base font-semibold",
                            style: {
                                backgroundColor: t.primary_color
                            },
                            children: ["Create Free Account", e.jsx(p, {
                                size: 16
                            })]
                        })
                    })]
                })]
            }), e.jsx("section", {
                style: {
                    backgroundColor: t.primary_color
                },
                className: "w-full flex justify-center text-white",
                children: e.jsxs("div", {
                    className: "w-[90%] max-w-6xl flex flex-col md:flex-row gap-8 items-start pt-12 pb-8 justify-between",
                    children: [e.jsxs("div", {
                        className: "flex flex-col gap-3 max-w-[300px]",
                        children: [e.jsx("img", {
                            className: "w-[45px] h-auto",
                            src: t.logo_path,
                            alt: `${t.name} logo`
                        }), e.jsx("p", {
                            className: "text-white/80 text-sm leading-relaxed",
                            children: "A trusted platform for generating accurate, professional receipts and digital services. Simplify your workflow today."
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-2.5",
                        children: [e.jsx("h3", {
                            className: "font-bold text-sm uppercase tracking-wider text-white/60",
                            children: "Resources"
                        }), e.jsx(r, {
                            href: route("help"),
                            className: "text-sm text-white/80 hover:text-white transition-colors",
                            children: "Help Center"
                        }), e.jsx(r, {
                            href: route("privacy-policy"),
                            className: "text-sm text-white/80 hover:text-white transition-colors",
                            children: "Privacy Policy"
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-2.5",
                        children: [e.jsx("h3", {
                            className: "font-bold text-sm uppercase tracking-wider text-white/60",
                            children: "Company"
                        }), e.jsx(r, {
                            href: route("about"),
                            className: "text-sm text-white/80 hover:text-white transition-colors",
                            children: "About Us"
                        }), e.jsx(r, {
                            href: route("contact"),
                            className: "text-sm text-white/80 hover:text-white transition-colors",
                            children: "Contact Us"
                        })]
                    })]
                })
            }), e.jsx("div", {
                style: {
                    backgroundColor: t.primary_color
                },
                className: "w-full flex justify-center border-t border-white/10",
                children: e.jsxs("p", {
                    className: "w-[90%] max-w-6xl py-5 text-white/50 text-xs",
                    children: ["© ", new Date().getFullYear(), " ", t ?.name, ". All rights reserved."]
                })
            })]
        })
    },
    M = [{
        label: "Home",
        name: "home",
        icon: A
    }, {
        label: "Help",
        name: "help",
        icon: v
    }, {
        label: "About",
        name: "about",
        icon: k
    }, {
        label: "Contact",
        name: "contact",
        icon: H
    }],
    F = () => {
        const {
            props: o
        } = x(), {
            auth: t,
            active_route_name: n,
            platform: s
        } = o, i = n;
        return e.jsxs(u, {
            children: [e.jsx(f, {
                asChild: !0,
                children: e.jsx("div", {
                    style: {
                        borderColor: s.primary_color
                    },
                    className: `cursor-pointer w-[40px] h-[40px] border-[1px] 
                    rounded-[5px] flex  justify-center items-center`,
                    children: e.jsx(j, {
                        size: 25
                    })
                })
            }), e.jsxs(g, {
                className: "dark:bg-zinc-900",
                children: [e.jsxs(w, {
                    children: [e.jsx(y, {}), e.jsx(b, {})]
                }), e.jsx("section", {
                    className: `flex flex-col gap-4 
                    pt-16  w-full items-start mb-10 text-t`,
                    children: M.map(l => e.jsx(N, {
                        asChild: !0,
                        children: e.jsx(r, {
                            style: {
                                color: i === l.name ? s.primary_color : void 0
                            },
                            href: route(l.name),
                            className: h(`flex gap-4 items-center p-2 dark:hover:bg-white/20 
                                    hover:bg-zinc-900/20 rounded-lg w-full max-w-60`, {
                                "dark:bg-white/10 bg-zinc-900/10": i === l.name
                            }),
                            children: e.jsxs("div", {
                                className: "flex justify-between w-full items-center",
                                children: [e.jsxs("div", {
                                    className: "flex flex-center gap-2",
                                    children: [e.jsx(l.icon, {
                                        size: 24
                                    }), e.jsx("p", {
                                        className: "font-semibold",
                                        children: l.label
                                    })]
                                }), e.jsx(C, {
                                    size: "1rem"
                                })]
                            })
                        })
                    }, l.name))
                }), e.jsxs("div", {
                    className: "flex gap-2",
                    children: [!t.user && e.jsx(r, {
                        href: "/login",
                        children: e.jsx(a, {
                            className: "text-white",
                            style: {
                                backgroundColor: s.primary_color
                            },
                            children: "Sign in"
                        })
                    }), !t.user && e.jsx(r, {
                        href: "/register",
                        children: e.jsx(a, {
                            className: "text-white",
                            style: {
                                backgroundColor: s.primary_color
                            },
                            children: "Get Started"
                        })
                    }), t.user && e.jsx(r, {
                        href: route("dashboard"),
                        children: e.jsx(a, {
                            className: "text-white",
                            style: {
                                backgroundColor: s.primary_color
                            },
                            children: "Dashboard"
                        })
                    })]
                })]
            })]
        })
    },
    R = [{
        route: "home",
        title: "Home"
    }, {
        route: "help",
        title: "Help"
    }, {
        route: "about",
        title: "About"
    }, {
        route: "contact",
        title: "Contact"
    }],
    K = () => {
        const {
            props: o
        } = x(), {
            platform: t,
            active_route_name: n,
            auth: s
        } = o, i = n, l = "font-medium text-[17px] dark:text-white select-none cursor-pointer hover:underline";
        return e.jsx(e.Fragment, {
            children: e.jsxs("nav", {
                className: "flex justify-between w-[90%] pt-7 pb-7 items-center",
                children: [e.jsx(r, {
                    href: route("home"),
                    className: "text-slate-500 font-bold",
                    children: e.jsx("img", {
                        className: "max-w-[50px] h-auto",
                        src: t.logo_path,
                        alt: `${t.id} logo`
                    })
                }), e.jsxs(S, {
                    className: "w-full whitespace-nowrap md:block hidden",
                    children: [e.jsx("div", {
                        className: "flex w-full justify-center gap-5 space-x-3 p-4",
                        children: R.map(c => e.jsx(r, {
                            href: route(c.route),
                            children: e.jsx("p", {
                                style: {
                                    color: i === c.route ? t.primary_color : void 0
                                },
                                className: h(l, "text-nowrap"),
                                children: c.title
                            })
                        }, c.route))
                    }), e.jsx(z, {
                        orientation: "horizontal"
                    })]
                }), e.jsxs("div", {
                    className: "hidden md:flex justify-center gap-3 items-center",
                    children: [!s.user && e.jsx(r, {
                        href: route("login"),
                        children: e.jsx(a, {
                            variant: "outline",
                            style: {
                                borderColor: _(.2, t.primary_color)
                            },
                            children: "Sign in"
                        })
                    }), !s.user && e.jsx(r, {
                        href: route("register"),
                        children: e.jsx(a, {
                            className: "text-white",
                            style: {
                                backgroundColor: t.primary_color
                            },
                            children: "Get Started"
                        })
                    }), s.user && e.jsx(r, {
                        href: route("dashboard"),
                        children: e.jsx(a, {
                            className: "text-white",
                            style: {
                                backgroundColor: t.primary_color
                            },
                            children: "Dashboard"
                        })
                    }), e.jsx(d, {})]
                }), e.jsxs("div", {
                    className: "flex md:hidden items-center gap-3",
                    children: [e.jsx(d, {}), e.jsx(F, {})]
                })]
            })
        })
    };
export {
    I as F, K as N
};