import {
    q as M,
    W as S,
    r as v,
    j as e,
    a as y
} from "./app-CPSemYgC.js";
import {
    I as x
} from "./input-MxT5BQBW.js";
import {
    C as T
} from "./checkbox-CWezrRrA.js";
import {
    L as u
} from "./label-DzYRBl-l.js";
import {
    B as h
} from "./button-BamgVvPn.js";
import {
    A as I,
    a as P
} from "./AppLayout-BVugRKpX.js";
import {
    L as R
} from "./Loader-DxAivhzx.js";
import {
    s as $
} from "./showIntertiaErrors-Bokdg093.js";
import {
    t as H
} from "./index-Dnc4ycMJ.js";
import {
    D as q,
    a as O,
    b as U,
    c as B,
    d as G,
    e as Y,
    f as J
} from "./dialog-BauOFWUU.js";
import {
    Z
} from "./zap-DAw3SZK0.js";
import {
    S as W
} from "./shield-CPuMYdQm.js";
import {
    c as K
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    C as Q
} from "./check-CsA8fo_3.js";
import {
    U as V
} from "./user-8b1sbuCN.js";
import {
    A as X
} from "./at-sign-BMMcc4kU.js";
import {
    M as ee
} from "./mail--HRBfw0-.js";
import {
    L as _,
    E as se
} from "./lock-BPuQLOUF.js";
import {
    E as te
} from "./eye-Vvb-RJj7.js";
import {
    U as ae
} from "./users-ZqGOPOiM.js";
import {
    A as re
} from "./arrow-left-D8sGkDbn.js";
import {
    A as C
} from "./arrow-right-b0B6GwCf.js";
import "./index-BIbNlVZ0.js";
import "./index-TtBBfnyI.js";
import "./index-BUKYvAHl.js";
import "./index-Dc_FVRD7.js";
import "./index-bfqS6E9x.js";
import "./index-C08e2LbI.js";
import "./index-D_XWqw2c.js";
import "./index-BN1_Zxci.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
const oe = K("Gift", [
        ["rect", {
            x: "3",
            y: "8",
            width: "18",
            height: "4",
            rx: "1",
            key: "bkv52"
        }],
        ["path", {
            d: "M12 8v13",
            key: "1c76mn"
        }],
        ["path", {
            d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",
            key: "6wjy6b"
        }],
        ["path", {
            d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
            key: "1ihvrl"
        }]
    ]),
    le = ({
        onAgree: a
    }) => {
        const {
            props: n
        } = M(), {
            platform: t
        } = n;
        S({});
        const [o, m] = v.useState(!1), g = () => {
            a(), m && m(!1)
        };
        return e.jsxs(q, {
            open: o,
            onOpenChange: m,
            children: [e.jsx(O, {
                asChild: !0,
                children: e.jsx("p", {
                    className: "text-sm text-t cursor-pointer hover:underline font-medium",
                    children: "Agree to our terms and conditions"
                })
            }), e.jsxs(U, {
                children: [e.jsxs(B, {
                    children: [e.jsx(G, {
                        children: "Terms and Conditions"
                    }), e.jsx(Y, {
                        children: "Read and understand our terms and conditions."
                    })]
                }), e.jsx("div", {
                    className: "max-h-[500px] overflow-auto",
                    dangerouslySetInnerHTML: {
                        __html: t.terms_conditions || "No terms and conditions"
                    }
                }), e.jsxs(J, {
                    className: "gap-y-2",
                    children: [e.jsx(h, {
                        onClick: () => m(!1),
                        variant: "outline",
                        children: "Close"
                    }), e.jsx(h, {
                        style: {
                            backgroundColor: t.primary_color
                        },
                        onClick: g,
                        className: "text-white",
                        children: "I Agree"
                    })]
                })]
            })]
        })
    },
    f = 3,
    k = [{
        label: "Your identity",
        subtitle: "Tell us who you are"
    }, {
        label: "Secure your account",
        subtitle: "Create a strong password"
    }, {
        label: "Almost there!",
        subtitle: "Final details to get started"
    }],
    Oe = ({
        platform: a,
        referrerUsername: n
    }) => {
        const {
            data: t,
            setData: o,
            post: m,
            processing: g,
            errors: r,
            setError: d,
            clearErrors: w
        } = S({
            name: "",
            email: "",
            username: "",
            referrer_username: "",
            password: "",
            password_confirmation: "",
            agreed_to_terms: !1
        }), [j, A] = v.useState(!1), [l, N] = v.useState(1), E = s => (w(), s === 1 ? t.name.trim() ? t.username.trim() ? !t.email.trim() || !/\S+@\S+\.\S+/.test(t.email) ? (d("email", "A valid email is required"), !1) : !0 : (d("username", "Username is required"), !1) : (d("name", "Full name is required"), !1) : s === 2 ? t.password.length < 8 ? (d("password", "Password must be at least 8 characters"), !1) : t.password !== t.password_confirmation ? (d("password_confirmation", "Passwords do not match"), !1) : !0 : !0), F = () => {
            E(l) && N(s => Math.min(s + 1, f))
        }, z = () => N(s => Math.max(s - 1, 1)), L = s => {
            if (s.preventDefault(), w(), !t.agreed_to_terms) return H.error("You must agree to our terms and conditions"), d("agreed_to_terms", "You must agree to our terms and conditions");
            m(route("register"), {
                onError: i => {
                    $(i), i.name || i.username || i.email ? N(1) : (i.password || i.password_confirmation) && N(2)
                }
            })
        };
        v.useEffect(() => {
            n && o("referrer_username", n)
        }, [n]);
        const D = () => {
            o("agreed_to_terms", !0), w("agreed_to_terms")
        };
        return e.jsxs(I, {
            children: [e.jsx(P, {
                title: "Register"
            }), e.jsxs("div", {
                className: "flex min-h-screen w-full",
                children: [e.jsxs("div", {
                    className: "hidden lg:flex lg:w-[45%] relative flex-col items-center justify-center p-12 overflow-hidden",
                    style: {
                        background: `linear-gradient(160deg, ${a.primary_color}, ${a.primary_color}dd)`
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
                        children: [a.logo_path && e.jsx(y, {
                            href: "/",
                            children: e.jsx("img", {
                                src: a.logo_path,
                                alt: a.name,
                                className: "h-16 w-auto object-contain drop-shadow-lg cursor-pointer"
                            })
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-3",
                            children: [e.jsxs("h2", {
                                className: "text-3xl font-bold text-white tracking-tight",
                                children: ["Join ", a.name]
                            }), e.jsx("p", {
                                className: "text-white/60 text-sm leading-relaxed",
                                children: "Create your account and start accessing premium digital services in minutes."
                            })]
                        }), e.jsx("div", {
                            className: "flex flex-col gap-3 w-full mt-4",
                            children: [{
                                icon: Z,
                                text: "Get started in under a minute"
                            }, {
                                icon: W,
                                text: "Secure & encrypted transactions"
                            }, {
                                icon: oe,
                                text: "Earn bonuses through referrals"
                            }].map(s => e.jsxs("div", {
                                className: "flex items-center gap-3 bg-white/[0.08] backdrop-blur-sm rounded-lg px-4 py-2.5",
                                children: [e.jsx(s.icon, {
                                    size: 16,
                                    className: "text-white/60 shrink-0"
                                }), e.jsx("span", {
                                    className: "text-white/80 text-sm",
                                    children: s.text
                                })]
                            }, s.text))
                        })]
                    })]
                }), e.jsx("div", {
                    className: "flex-1 flex items-center justify-center p-5 sm:p-8",
                    children: e.jsxs("div", {
                        className: "w-full max-w-[420px] flex flex-col gap-6",
                        children: [e.jsx("div", {
                            className: "flex flex-col items-center gap-3 lg:hidden",
                            children: a.logo_path && e.jsx(y, {
                                href: "/",
                                children: e.jsx("img", {
                                    src: a.logo_path,
                                    alt: a.name,
                                    className: "h-12 w-auto object-contain cursor-pointer"
                                })
                            })
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1.5",
                            children: [e.jsx("h1", {
                                className: "text-2xl sm:text-3xl font-bold tracking-tight",
                                children: "Create account"
                            }), e.jsx("p", {
                                className: "text-muted-foreground text-sm",
                                children: k[l - 1].subtitle
                            })]
                        }), e.jsx("div", {
                            className: "flex items-center gap-2",
                            children: Array.from({
                                length: f
                            }).map((s, i) => {
                                const p = i + 1,
                                    c = p < l,
                                    b = p === l;
                                return e.jsxs("div", {
                                    className: "flex items-center gap-2 flex-1",
                                    children: [e.jsx("div", {
                                        className: `
                                                    flex items-center justify-center size-7 rounded-full text-xs font-semibold shrink-0 transition-all duration-300
                                                    ${b?"text-white scale-110":""}
                                                    ${c?"text-white":""}
                                                    ${!b&&!c?"bg-muted text-muted-foreground":""}
                                                `,
                                        style: b || c ? {
                                            backgroundColor: a.primary_color
                                        } : void 0,
                                        children: c ? e.jsx(Q, {
                                            size: 14
                                        }) : p
                                    }), p < f && e.jsx("div", {
                                        className: `flex-1 h-0.5 rounded-full transition-colors duration-300 ${c?"":"bg-muted"}`,
                                        style: c ? {
                                            backgroundColor: a.primary_color
                                        } : void 0
                                    })]
                                }, p)
                            })
                        }), e.jsxs("p", {
                            className: "text-xs font-medium text-muted-foreground -mt-3",
                            children: ["Step ", l, " of ", f, " —", " ", k[l - 1].label]
                        }), e.jsxs("form", {
                            onSubmit: L,
                            className: "flex flex-col gap-4",
                            children: [l === 1 && e.jsxs(e.Fragment, {
                                children: [e.jsxs("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [e.jsx(u, {
                                        htmlFor: "name",
                                        className: "text-sm font-medium",
                                        children: "Full name"
                                    }), e.jsxs("div", {
                                        className: "relative",
                                        children: [e.jsx(V, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                        }), e.jsx(x, {
                                            id: "name",
                                            name: "name",
                                            value: t.name,
                                            autoComplete: "name",
                                            placeholder: "John Doe",
                                            className: "pl-10 h-11",
                                            autoFocus: !0,
                                            onChange: s => o("name", s.target.value)
                                        })]
                                    }), e.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Use your real name — it's used for verification when buying points."
                                    }), r.name && e.jsx("p", {
                                        className: "text-rose-500 text-xs",
                                        children: r.name
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [e.jsx(u, {
                                        htmlFor: "username",
                                        className: "text-sm font-medium",
                                        children: "Username"
                                    }), e.jsxs("div", {
                                        className: "relative",
                                        children: [e.jsx(X, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                        }), e.jsx(x, {
                                            id: "username",
                                            name: "username",
                                            value: t.username,
                                            placeholder: "johndoe",
                                            className: "pl-10 h-11",
                                            onChange: s => o("username", s.target.value.toLowerCase())
                                        })]
                                    }), r.username && e.jsx("p", {
                                        className: "text-rose-500 text-xs",
                                        children: r.username
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [e.jsx(u, {
                                        htmlFor: "email",
                                        className: "text-sm font-medium",
                                        children: "Email address"
                                    }), e.jsxs("div", {
                                        className: "relative",
                                        children: [e.jsx(ee, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                        }), e.jsx(x, {
                                            id: "email",
                                            type: "email",
                                            name: "email",
                                            value: t.email,
                                            placeholder: "you@example.com",
                                            className: "pl-10 h-11",
                                            onChange: s => o("email", s.target.value.toLowerCase())
                                        })]
                                    }), r.email && e.jsx("p", {
                                        className: "text-rose-500 text-xs",
                                        children: r.email
                                    })]
                                })]
                            }), l === 2 && e.jsxs(e.Fragment, {
                                children: [e.jsxs("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [e.jsx(u, {
                                        htmlFor: "password",
                                        className: "text-sm font-medium",
                                        children: "Password"
                                    }), e.jsxs("div", {
                                        className: "relative",
                                        children: [e.jsx(_, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                        }), e.jsx(x, {
                                            id: "password",
                                            name: "password",
                                            value: t.password,
                                            placeholder: "Create a password",
                                            autoComplete: "new-password",
                                            className: "pl-10 pr-10 h-11",
                                            autoFocus: !0,
                                            onChange: s => o("password", s.target.value),
                                            type: j ? "text" : "password"
                                        }), e.jsx("button", {
                                            type: "button",
                                            onClick: () => A(!j),
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 hover:text-muted-foreground transition-colors",
                                            children: j ? e.jsx(se, {
                                                className: "size-4"
                                            }) : e.jsx(te, {
                                                className: "size-4"
                                            })
                                        })]
                                    }), e.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Must be at least 8 characters."
                                    }), r.password && e.jsx("p", {
                                        className: "text-rose-500 text-xs",
                                        children: r.password
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [e.jsx(u, {
                                        htmlFor: "password_confirmation",
                                        className: "text-sm font-medium",
                                        children: "Confirm password"
                                    }), e.jsxs("div", {
                                        className: "relative",
                                        children: [e.jsx(_, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                        }), e.jsx(x, {
                                            id: "password_confirmation",
                                            name: "password_confirmation",
                                            value: t.password_confirmation,
                                            placeholder: "Re-enter your password",
                                            autoComplete: "new-password",
                                            className: "pl-10 h-11",
                                            onChange: s => o("password_confirmation", s.target.value),
                                            type: j ? "text" : "password"
                                        })]
                                    }), r.password_confirmation && e.jsx("p", {
                                        className: "text-rose-500 text-xs",
                                        children: r.password_confirmation
                                    })]
                                })]
                            }), l === 3 && e.jsxs(e.Fragment, {
                                children: [e.jsxs("div", {
                                    className: "flex flex-col gap-1.5",
                                    children: [e.jsxs(u, {
                                        htmlFor: "referrer_username",
                                        className: "text-sm font-medium",
                                        children: ["Referral code", " ", e.jsx("span", {
                                            className: "text-muted-foreground font-normal",
                                            children: "(optional)"
                                        })]
                                    }), e.jsxs("div", {
                                        className: "relative",
                                        children: [e.jsx(ae, {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50"
                                        }), e.jsx(x, {
                                            disabled: !!n && r.referrer_username === void 0,
                                            id: "referrer_username",
                                            name: "referrer_username",
                                            value: t.referrer_username,
                                            placeholder: "Enter referrer's username",
                                            className: "pl-10 h-11",
                                            autoFocus: !0,
                                            onChange: s => o("referrer_username", s.target.value.toLowerCase())
                                        })]
                                    }), e.jsx("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "If someone referred you, enter their username. Otherwise leave blank."
                                    }), r.referrer_username && e.jsx("p", {
                                        className: "text-rose-500 text-xs",
                                        children: r.referrer_username
                                    })]
                                }), e.jsxs("div", {
                                    className: "flex flex-col gap-1.5 mt-2",
                                    children: [e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [e.jsx(T, {
                                            id: "terms",
                                            checked: t.agreed_to_terms,
                                            onCheckedChange: s => o("agreed_to_terms", s)
                                        }), e.jsx(le, {
                                            onAgree: D
                                        })]
                                    }), r.agreed_to_terms && e.jsx("p", {
                                        className: "text-rose-500 text-xs",
                                        children: r.agreed_to_terms
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex gap-3 mt-2",
                                children: [l > 1 && e.jsxs(h, {
                                    type: "button",
                                    variant: "outline",
                                    className: "h-11 font-semibold text-sm gap-1.5",
                                    onClick: z,
                                    children: [e.jsx(re, {
                                        size: 16
                                    }), "Back"]
                                }), l < f ? e.jsxs(h, {
                                    type: "button",
                                    className: "flex-1 h-11 text-white font-semibold gap-2 text-sm",
                                    style: {
                                        backgroundColor: a.primary_color
                                    },
                                    onClick: F,
                                    children: ["Continue", e.jsx(C, {
                                        size: 16
                                    })]
                                }) : e.jsx(h, {
                                    type: "submit",
                                    disabled: g,
                                    className: "flex-1 h-11 text-white font-semibold gap-2 text-sm",
                                    style: {
                                        backgroundColor: a.primary_color
                                    },
                                    children: g ? e.jsx(R, {
                                        visible: !0
                                    }) : e.jsxs(e.Fragment, {
                                        children: ["Create account", e.jsx(C, {
                                            size: 16
                                        })]
                                    })
                                })]
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
                                children: e.jsx("span", {
                                    className: "bg-background px-3 text-muted-foreground",
                                    children: "Already have an account?"
                                })
                            })]
                        }), e.jsx(y, {
                            href: "/login",
                            className: "w-full",
                            children: e.jsx(h, {
                                variant: "outline",
                                className: "w-full h-11 font-semibold text-sm",
                                children: "Sign in instead"
                            })
                        })]
                    })
                })]
            })]
        })
    };
export {
    Oe as
    default
};