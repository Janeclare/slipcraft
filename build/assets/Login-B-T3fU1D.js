import {
    W as b,
    r as d,
    j as e,
    a
} from "./app-CPSemYgC.js";
import {
    A as N,
    a as w
} from "./AppLayout-BVugRKpX.js";
import {
    B as x
} from "./button-BamgVvPn.js";
import {
    C as v
} from "./checkbox-CWezrRrA.js";
import {
    I as h
} from "./input-MxT5BQBW.js";
import {
    L as m
} from "./label-DzYRBl-l.js";
import {
    M as y
} from "./mail--HRBfw0-.js";
import {
    L as k,
    E
} from "./lock-BPuQLOUF.js";
import {
    E as C
} from "./eye-Vvb-RJj7.js";
import {
    A as _
} from "./arrow-right-b0B6GwCf.js";
import "./index-Dnc4ycMJ.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-TtBBfnyI.js";
import "./index-BUKYvAHl.js";
import "./index-Dc_FVRD7.js";
import "./index-bfqS6E9x.js";
import "./index-C08e2LbI.js";
import "./index-D_XWqw2c.js";
import "./index-BN1_Zxci.js";
import "./check-CsA8fo_3.js";
const X = ({
    status: c,
    canResetPassword: p,
    platform: s
}) => {
    const {
        data: l,
        setData: i,
        post: u,
        processing: n,
        errors: t,
        reset: g
    } = b({
        email: "",
        password: "",
        remember: !1
    }), [o, f] = d.useState(!1);
    d.useEffect(() => () => {
        g("password")
    }, []);
    const j = r => {
        r.preventDefault();
        try {
            const session = {
                email: l.email,
                remember: !!l.remember,
                created_at: Date.now()
            };
            window.localStorage && window.localStorage.setItem("slipcraft_session", JSON.stringify(session));
        } catch (err) {}
        window.location.href = "dashboard.html";
    };
    return e.jsxs(N, {
        children: [e.jsx(w, {
            title: "Log in"
        }), e.jsxs("div", {
            className: "flex min-h-screen w-full",
            children: [e.jsxs("div", {
                className: "hidden lg:flex lg:w-[45%] relative flex-col items-center justify-center p-12 overflow-hidden",
                style: {
                    background: `linear-gradient(160deg, ${s.primary_color}, ${s.primary_color}dd)`
                },
                children: [e.jsx("div", {
                    className: "absolute -top-20 -left-20 w-72 h-72 rounded-full border border-white/[0.08]"
                }), e.jsx("div", {
                    className: "absolute -bottom-16 -right-16 w-80 h-80 rounded-full border border-white/[0.06]"
                }), e.jsx("div", {
                    className: "absolute top-1/3 right-10 w-44 h-44 rounded-full border border-white/[0.05]"
                }), e.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                        background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.06) 0%, transparent 60%)"
                    }
                }), e.jsxs("div", {
                    className: "relative z-10 flex flex-col items-center gap-8 max-w-sm text-center",
                    children: [s.logo_path && e.jsx(a, {
                        href: "/",
                        children: e.jsx("img", {
                            src: s.logo_path,
                            alt: s.name,
                            className: "h-16 w-auto object-contain drop-shadow-lg cursor-pointer"
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [e.jsx("h2", {
                            className: "text-3xl font-bold text-white tracking-tight",
                            children: "Welcome back"
                        }), e.jsx("p", {
                            className: "text-white/60 text-sm leading-relaxed",
                            children: "Sign in to access your dashboard, manage orders and use our premium services."
                        })]
                    }), e.jsx("div", {
                        className: "flex flex-col gap-3 w-full mt-4",
                        children: ["Instant point purchases", "Vendor marketplace", "Premium digital services"].map(r => e.jsxs("div", {
                            className: "flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-lg px-4 py-2.5",
                            children: [e.jsx("div", {
                                className: "w-1.5 h-1.5 rounded-full bg-white/60 shrink-0"
                            }), e.jsx("span", {
                                className: "text-white/80 text-sm",
                                children: r
                            })]
                        }, r))
                    })]
                })]
            }), e.jsx("div", {
                className: "flex-1 flex items-center justify-center p-5 sm:p-8",
                children: e.jsxs("div", {
                    className: "w-full max-w-[420px] flex flex-col gap-8",
                    children: [e.jsx("div", {
                        className: "flex flex-col items-center gap-3 lg:hidden",
                        children: s.logo_path && e.jsx(a, {
                            href: "/",
                            children: e.jsx("img", {
                                src: s.logo_path,
                                alt: s.name,
                                className: "h-12 w-auto object-contain cursor-pointer"
                            })
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1.5",
                        children: [e.jsx("h1", {
                            className: "text-2xl sm:text-3xl font-bold tracking-tight",
                            children: "Sign in"
                        }), e.jsx("p", {
                            className: "text-muted-foreground text-sm",
                            children: "Enter your credentials to access your account"
                        })]
                    }), c && e.jsx("div", {
                        className: "rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-600 font-medium",
                        children: c
                    }), e.jsxs("form", {
                        onSubmit: j,
                        className: "flex flex-col gap-5",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1.5",
                            children: [e.jsx(m, {
                                htmlFor: "email",
                                className: "text-sm font-medium",
                                children: "Email address"
                            }), e.jsxs("div", {
                                className: "relative",
                                children: [e.jsx(y, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                }), e.jsx(h, {
                                    placeholder: "you@example.com",
                                    id: "email",
                                    type: "email",
                                    name: "email",
                                    className: "pl-10 h-11",
                                    value: l.email,
                                    onChange: r => i("email", r.target.value)
                                })]
                            }), t.email && e.jsx("p", {
                                className: "text-rose-500 text-xs",
                                children: t.email
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1.5",
                            children: [e.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [e.jsx(m, {
                                    htmlFor: "password",
                                    className: "text-sm font-medium",
                                    children: "Password"
                                }), p && e.jsx(a, {
                                    href: route("password.request"),
                                    className: "text-xs font-medium hover:underline",
                                    style: {
                                        color: s.primary_color
                                    },
                                    children: "Forgot password?"
                                })]
                            }), e.jsxs("div", {
                                className: "relative",
                                children: [e.jsx(k, {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                }), e.jsx(h, {
                                    placeholder: "Enter your password",
                                    id: "password",
                                    name: "password",
                                    type: o ? "text" : "password",
                                    className: "pl-10 pr-10 h-11",
                                    value: l.password,
                                    onChange: r => i("password", r.target.value)
                                }), e.jsx("button", {
                                    type: "button",
                                    onClick: () => f(!o),
                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors",
                                    children: o ? e.jsx(E, {
                                        className: "size-4"
                                    }) : e.jsx(C, {
                                        className: "size-4"
                                    })
                                })]
                            }), t.password && e.jsx("p", {
                                className: "text-rose-500 text-xs",
                                children: t.password
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(v, {
                                id: "remember",
                                name: "remember",
                                checked: l.remember,
                                onCheckedChange: r => i("remember", r)
                            }), e.jsx(m, {
                                htmlFor: "remember",
                                className: "text-sm text-muted-foreground cursor-pointer",
                                children: "Remember me"
                            })]
                        }), e.jsx(x, {
                            disabled: n,
                            className: "w-full h-11 text-white font-semibold gap-2 text-sm",
                            style: {
                                backgroundColor: s.primary_color
                            },
                            size: "lg",
                            children: n ? "Signing in..." : e.jsxs(e.Fragment, {
                                children: ["Sign in", e.jsx(_, {
                                    size: 16
                                })]
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "relative",
                        children: [e.jsx("div", {
                            className: "absolute inset-0 flex items-center",
                            children: e.jsx("div", {
                                className: "w-full border-t"
                            })
                        }), e.jsx("div", {
                            className: "relative flex justify-center text-xs",
                            children: e.jsxs("span", {
                                className: "bg-background px-3 text-muted-foreground",
                                children: ["New to ", s.name, "?"]
                            })
                        })]
                    }), e.jsx(a, {
                        href: route("register"),
                        className: "w-full",
                        children: e.jsx(x, {
                            variant: "outline",
                            className: "w-full h-11 font-semibold text-sm",
                            children: "Create an account"
                        })
                    })]
                })
            })]
        })]
    })
};
export {
    X as
    default
};