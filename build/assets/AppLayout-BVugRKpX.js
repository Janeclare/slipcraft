import {
    q as j,
    j as e,
    Y as E,
    r as n,
    a as v,
    y as C
} from "./app-CPSemYgC.js";
import {
    B as I
} from "./index-Dnc4ycMJ.js";
import {
    c as B,
    B as x
} from "./button-BamgVvPn.js";
import {
    c as g
} from "./index-BIbNlVZ0.js";
import {
    c as _
} from "./index-CGcBZyi7.js";
import {
    c as b
} from "./createLucideIcon-rN-Z3mCX.js";
const M = ({
    title: t,
    children: r
}) => {
    const {
        props: s
    } = j(), {
        platform: a
    } = s, o = a.name || "Slipcraft";
    return e.jsxs(E, {
        children: [e.jsx("title", {
            children: t ? `${t} - ${o}` : o
        }), r]
    })
};
const R = b("Info", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["path", {
        d: "M12 16v-4",
        key: "1dtifu"
    }],
    ["path", {
        d: "M12 8h.01",
        key: "e9boi3"
    }]
]);
const P = b("LogOut", [
        ["path", {
            d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
            key: "1uf3rs"
        }],
        ["polyline", {
            points: "16 17 21 12 16 7",
            key: "1gabdz"
        }],
        ["line", {
            x1: "21",
            x2: "9",
            y1: "12",
            y2: "12",
            key: "1uyos4"
        }]
    ]),
    z = {
        theme: "system",
        setTheme: () => null
    },
    k = n.createContext(z);

function H({
    children: t,
    defaultTheme: r = "system",
    storageKey: s = "vite-ui-theme",
    ...a
}) {
    const [o, l] = n.useState(() => localStorage.getItem(s) || r);
    n.useEffect(() => {
        const c = window.document.documentElement;
        if (c.classList.remove("light", "dark"), o === "system") {
            const m = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            c.classList.add(m);
            return
        }
        c.classList.add(o)
    }, [o]);
    const d = {
        theme: o,
        setTheme: c => {
            localStorage.setItem(s, c), l(c)
        }
    };
    return e.jsx(k.Provider, { ...a,
        value: d,
        children: t
    })
}
const U = () => {
    const t = n.useContext(k);
    if (t === void 0) throw new Error("useTheme must be used within a ThemeProvider");
    return t
};
var O = (t, r, s, a, o, l, d, c) => {
        let m = document.documentElement,
            h = ["light", "dark"];

        function u(i) {
            (Array.isArray(t) ? t : [t]).forEach(p => {
                let f = p === "class",
                    L = f && l ? o.map(y => l[y] || y) : o;
                f ? (m.classList.remove(...L), m.classList.add(i)) : m.setAttribute(p, i)
            }), T(i)
        }

        function T(i) {
            c && h.includes(i) && (m.style.colorScheme = i)
        }

        function A() {
            return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        }
        if (a) u(a);
        else try {
            let i = localStorage.getItem(r) || s,
                p = d && i === "system" ? A() : i;
            u(p)
        } catch {}
    },
    $ = n.createContext(void 0),
    V = {
        setTheme: t => {},
        themes: []
    },
    D = () => {
        var t;
        return (t = n.useContext($)) != null ? t : V
    };
n.memo(({
    forcedTheme: t,
    storageKey: r,
    attribute: s,
    enableSystem: a,
    enableColorScheme: o,
    defaultTheme: l,
    value: d,
    themes: c,
    nonce: m,
    scriptProps: h
}) => {
    let u = JSON.stringify([s, r, l, t, c, d, a, o]).slice(1, -1);
    return n.createElement("script", { ...h,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? m : "",
        dangerouslySetInnerHTML: {
            __html: `(${O.toString()})(${u})`
        }
    })
});
const F = ({ ...t
    }) => {
        const {
            theme: r = "system"
        } = D();
        return e.jsx(I, {
            theme: r,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-foreground group-[.toaster]:text-t group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-ts",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-ts"
                }
            },
            ...t
        })
    },
    q = B("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-t", {
        variants: {
            variant: {
                default: "bg-background text-t",
                destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }),
    w = n.forwardRef(({
        className: t,
        variant: r,
        ...s
    }, a) => e.jsx("div", {
        ref: a,
        role: "alert",
        className: g(q({
            variant: r
        }), t),
        ...s
    }));
w.displayName = "Alert";
const N = n.forwardRef(({
    className: t,
    ...r
}, s) => e.jsx("h5", {
    ref: s,
    className: g("mb-1 font-medium leading-none tracking-tight", t),
    ...r
}));
N.displayName = "AlertTitle";
const S = n.forwardRef(({
    className: t,
    ...r
}, s) => e.jsx("div", {
    ref: s,
    className: g("text-sm [&_p]:leading-relaxed", t),
    ...r
}));
S.displayName = "AlertDescription";
const X = ({
    children: t
}) => {
    const {
        props: r
    } = j(), {
        platform: s,
        flash: a,
        auth: o
    } = r, [l, d] = n.useState(!1);
    return n.useEffect(() => {
        a.error ? d(!0) : d(!1)
    }, [a.error]), o.user && o.user ?.manager !== "yes" && o.user ?.status === "restricted" ? e.jsx("div", {
        className: "flex-center min-h-screen bg-background text-t",
        children: e.jsxs("div", {
            className: "flex flex-col items-center gap-2",
            children: [e.jsx("p", {
                className: "text-ts",
                children: "Account Restricted"
            }), e.jsx(_, {
                size: 50
            }), e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [e.jsx(v, {
                    href: route("contact"),
                    children: e.jsx(x, {
                        className: "text-white",
                        style: {
                            backgroundColor: s.primary_color
                        },
                        children: "Contact Support"
                    })
                }), o.user && e.jsx(v, {
                    method: "post",
                    href: route("logout"),
                    children: e.jsxs(x, {
                        className: "text-white",
                        style: {
                            backgroundColor: s.primary_color
                        },
                        children: [e.jsx("span", {
                            children: "Logout to contact Support"
                        }), e.jsx(P, {})]
                    })
                })]
            })]
        })
    }) : e.jsxs(e.Fragment, {
        children: [e.jsxs(M, {
            children: [e.jsx("link", {
                rel: "icon",
                type: "image/svg+xml",
                href: s.icon_path
            }), e.jsx("meta", {
                name: "description",
                content: s.description
            })]
        }), e.jsxs(H, {
            defaultTheme: "dark",
            storageKey: "vite-ui-theme",
            children: [e.jsxs("div", {
                className: "bg-background text-t min-h-screen",
                children: [l && e.jsxs(w, {
                    className: "text-t sticky top-0 bg-foreground z-[100] transition-all duration-300",
                    children: [e.jsx(R, {
                        color: s.primary_color,
                        className: "h-4 w-4"
                    }), e.jsx(N, {
                        className: "text-rose-500",
                        children: "Something went wrong"
                    }), e.jsxs(S, {
                        className: "flex flex-col gap-3",
                        children: [e.jsx("p", {
                            children: a.error
                        }), e.jsx(x, {
                            variant: "outline",
                            onClick: () => {
                                C.reload()
                            },
                            className: "w-fit",
                            children: "Close"
                        })]
                    })]
                }), t]
            }), e.jsx(F, {})]
        })]
    })
};
export {
    X as A, R as I, P as L, M as a, w as b, N as c, S as d, U as u
};