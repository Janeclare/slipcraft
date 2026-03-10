import {
    q as h,
    j as e,
    a as m,
    r as i
} from "./app-CPSemYgC.js";
import {
    A as C
} from "./AppLayout-BVugRKpX.js";
import {
    a as A,
    c as b
} from "./polished.esm-Cyjuaya6.js";
import {
    M as z
} from "./mode-toggle-BKQyjCmw.js";
import {
    c as u
} from "./index-BIbNlVZ0.js";
import {
    f as g
} from "./formatNumber-Ce-00Vs2.js";
import {
    A as L,
    a as M
} from "./avatar-BLCVZC4Y.js";
import {
    S as P
} from "./stringInitials-Bl64PEY-.js";
import {
    c as T
} from "./copyToClipboard-B49pzkZl.js";
import {
    U as E
} from "./user-plus-3llJDC4d.js";
import {
    c as w
} from "./index-C4i189TA.js";
import {
    L as j,
    S as v
} from "./settings-KYD-P5eY.js";
import {
    D as y
} from "./dollar-sign-4CE7QsSH.js";
import {
    U as N
} from "./users-ZqGOPOiM.js";
import {
    g as U
} from "./index-CGcBZyi7.js";
const R = ({
        className: n
    }) => {
        const {
            props: c
        } = h(), {
            platform: t,
            auth: r
        } = c, o = r.user, s = `${window.location.origin}/register?referrer=${r.user?.username}`;
        return e.jsx("nav", {
            className: u("w-full fixed min-h-[40px] top-0 flex justify-center md:pl-[90px] bg-foreground dark:bg-background items-center", n),
            children: e.jsxs("div", {
                className: "flex justify-between w-[95%] md:w-[80%] py-7",
                children: [e.jsx("div", {
                    className: "hidden sm:flex items-center",
                    children: e.jsxs("div", {
                        className: `flex items-center gap-2 bg-background dark:bg-foreground 
                     shadow-custom-light dark:shadow-custom-dark px-2 py-1 rounded-3xl`,
                        children: [e.jsx(E, {
                            size: 16
                        }), e.jsx("p", {
                            className: "font-semibold",
                            children: "Referred:"
                        }), e.jsx("p", {
                            className: "font-bold bg-foreground px-3 rounded-2xl",
                            children: g(r.referred_users_count || 0)
                        }), e.jsx("p", {
                            onClick: () => T(s),
                            style: {
                                backgroundColor: t.primary_color
                            },
                            className: `font-semibold px-3 rounded-2xl 
                        text-white py-2 text-sm sm:cursor-pointer hover:opacity-80
                        transition-all active:scale-95 select-none`,
                            children: "Copy Ref Link"
                        })]
                    })
                }), e.jsx("div", {
                    className: "flex items-center gap-4 w-full sm:w-fit",
                    children: e.jsxs("div", {
                        className: `flex items-center justify-between gap-2 bg-background dark:bg-foreground 
                     shadow-custom-light dark:shadow-custom-dark px-3 py-1 rounded-3xl w-full sm:w-fit`,
                        children: [e.jsx(m, {
                            href: route("home"),
                            children: e.jsx("img", {
                                className: "w-[30px] h-auto md:hidden",
                                src: t.icon_path,
                                alt: "icon"
                            })
                        }), e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(m, {
                                href: route("profile.edit"),
                                children: e.jsx(L, {
                                    children: e.jsx(M, {
                                        children: P(r.user ?.name)
                                    })
                                })
                            }), e.jsxs("p", {
                                style: {
                                    color: A(.1, t.primary_color)
                                },
                                className: "font-bold rounded-2xl truncate max-w-[135px]",
                                children: [g(o ?.point_main_balance || 0), "pts"]
                            })]
                        }), e.jsx(z, {})]
                    })
                })]
            })
        })
    },
    X = [{
        label: "Dashboard",
        route: "dashboard",
        icon: j
    }, {
        label: "Services",
        route: "services",
        icon: w
    }, {
        label: "Transactions",
        route: "transactions",
        icon: y
    }, {
        label: "Referral",
        route: "referral",
        icon: N
    }, {
        label: "Settings",
        route: "profile.edit",
        icon: v
    }],
    $ = ({
        className: n
    }) => {
        const {
            props: c
        } = h(), {
            platform: t,
            active_route_name: r
        } = c, o = r;
        return e.jsxs("aside", {
            className: u("hidden md:flex w-[90px] fixed h-full shadow-custom-light dark:shadow-custom-dark left-0 flex-col justify-between py-7 bg-background", n),
            children: [e.jsx(m, {
                href: route("home"),
                className: "w-full flex justify-center",
                children: e.jsx("img", {
                    className: "w-[50px] h-auto",
                    src: t.icon_path,
                    alt: "icon"
                })
            }), e.jsx("div", {
                className: "w-full flex justify-center flex-col items-center gap-2",
                children: X.map(s => e.jsxs(m, {
                    className: "flex flex-col items-center",
                    href: route(s.route),
                    children: [e.jsx("p", {
                        style: {
                            border: o === s.route ? `1px solid ${b(.2,t.primary_color)}` : void 0,
                            color: o === s.route ? t.primary_color : void 0
                        },
                        className: u("p-2 rounded-lg text-ts", {
                            "bg-foreground": o === s.route
                        }),
                        children: e.jsx(s.icon, {
                            size: 22
                        })
                    }), e.jsx("p", {
                        className: "text-[10px] font-semibold text-center",
                        children: s.label
                    })]
                }, s.route))
            }), e.jsx("div", {
                className: "w-full flex justify-center opacity-0",
                children: "."
            })]
        })
    },
    Y = [{
        label: "Transactions",
        route: "transactions",
        icon: y
    }, {
        label: "Services",
        route: "services",
        icon: w
    }, {
        label: "Dashboard",
        route: "dashboard",
        icon: j
    }, {
        label: "Referral",
        route: "referral",
        icon: N
    }, {
        label: "Settings",
        route: "profile.edit",
        icon: v
    }],
    B = ({
        className: n
    }) => {
        const {
            props: c
        } = h(), {
            platform: t,
            active_route_name: r
        } = c, o = r;
        return e.jsx("div", {
            className: u("w-full fixed min-h-[40px] bottom-0 justify-center bg-background items-center shadow-custom-light dark:shadow-custom-dark flex md:hidden", n),
            children: e.jsx("div", {
                className: "flex justify-between w-[95%] md:w-[80%] py-5",
                children: e.jsx("div", {
                    className: "w-full flex justify-between items-center",
                    children: Y.map(s => e.jsxs(m, {
                        className: "flex flex-col items-center",
                        href: route(s.route),
                        children: [e.jsx("p", {
                            style: {
                                border: o === s.route ? `1px solid ${b(.2,t.primary_color)}` : void 0,
                                color: o === s.route ? t.primary_color : void 0
                            },
                            className: u("p-2 rounded-lg text-ts", {
                                "bg-foreground": o === s.route
                            }),
                            children: e.jsx(s.icon, {
                                size: 22
                            })
                        }), e.jsx("p", {
                            className: `text-[10px] font-semibold text-center max-w-[50px] 
                                truncate`,
                            children: s.label
                        })]
                    }, s.route))
                })
            })
        })
    },
    I = () => {
        const {
            platform: n
        } = h().props, c = i.useRef(null), t = i.useRef({
            isDragging: !1,
            startX: 0,
            startY: 0,
            startLeft: 0,
            startTop: 0,
            moved: !1
        }), [r, o] = i.useState(null);
        i.useEffect(() => {
            o({
                x: window.innerWidth - 72,
                y: window.innerHeight - 140
            })
        }, []);
        const s = i.useCallback(a => {
                r && (a.preventDefault(), a.target.setPointerCapture(a.pointerId), t.current = {
                    isDragging: !0,
                    startX: a.clientX,
                    startY: a.clientY,
                    startLeft: r.x,
                    startTop: r.y,
                    moved: !1
                })
            }, [r]),
            k = i.useCallback(a => {
                const l = t.current;
                if (!l.isDragging) return;
                const f = a.clientX - l.startX,
                    d = a.clientY - l.startY;
                (Math.abs(f) > 3 || Math.abs(d) > 3) && (l.moved = !0);
                const x = 52,
                    p = Math.min(Math.max(8, l.startLeft + f), window.innerWidth - x - 8),
                    S = Math.min(Math.max(8, l.startTop + d), window.innerHeight - x - 8);
                o({
                    x: p,
                    y: S
                })
            }, []),
            _ = i.useCallback(a => {
                const l = t.current;
                if (l.isDragging = !1, l.moved) {
                    if (!r) return;
                    const f = window.innerWidth / 2,
                        d = 52,
                        x = r.x + d / 2 < f ? 12 : window.innerWidth - d - 12;
                    o(p => p ? {
                        x,
                        y: p.y
                    } : null)
                }
            }, [r]),
            D = i.useCallback(a => {
                t.current.moved && (a.preventDefault(), t.current.moved = !1)
            }, []);
        return !n ?.telegram_support_link || !r ? null : e.jsxs("a", {
            ref: c,
            href: n.telegram_support_link,
            target: "_blank",
            rel: "noopener noreferrer",
            onClick: D,
            onPointerDown: s,
            onPointerMove: k,
            onPointerUp: _,
            className: "fixed z-50 flex items-center justify-center size-[52px] rounded-full bg-[#2AABEE] text-white shadow-lg shadow-[#2AABEE]/30 hover:shadow-xl hover:shadow-[#2AABEE]/40 transition-shadow touch-none select-none cursor-grab active:cursor-grabbing animate-[tg-wiggle_0.6s_ease-in-out_4_5s]",
            style: {
                left: r.x,
                top: r.y
            },
            "aria-label": "Chat with us on Telegram",
            children: [e.jsx(U, {
                className: "size-6"
            }), e.jsx("style", {
                children: `
                @keyframes tg-wiggle {
                    0%, 40%, 100% { transform: rotate(0deg) scale(1); }
                    5% { transform: rotate(-15deg) scale(1.1); }
                    10% { transform: rotate(15deg) scale(1.1); }
                    15% { transform: rotate(-10deg) scale(1.05); }
                    20% { transform: rotate(10deg) scale(1.05); }
                    25% { transform: rotate(0deg) scale(1); }
                }
            `
            })]
        })
    },
    oe = ({
        children: n
    }) => e.jsx(C, {
        children: e.jsxs("div", {
            className: "flex flex-col items-center gap-5 min-h-screen pb-5",
            children: [e.jsx(R, {
                className: "z-10"
            }), e.jsx($, {
                className: "z-20"
            }), e.jsx("div", {
                className: `md:pl-[90px] py-[105px] w-full flex justify-center 
                    bg-foreground dark:bg-background min-h-screen`,
                children: e.jsx("div", {
                    className: "w-[95%] md:w-[80%]",
                    children: n
                })
            }), e.jsx(B, {}), e.jsx(I, {})]
        })
    });
export {
    oe as U
};