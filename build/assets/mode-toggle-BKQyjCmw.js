import {
    j as e
} from "./app-CPSemYgC.js";
import {
    B as r
} from "./button-BamgVvPn.js";
import {
    D as n,
    a as o,
    b as i,
    c as a
} from "./dropdown-menu-73g9f9Cf.js";
import {
    u as c
} from "./AppLayout-BVugRKpX.js";
import {
    c as s
} from "./createLucideIcon-rN-Z3mCX.js";
const l = s("Moon", [
    ["path", {
        d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
        key: "a7tn18"
    }]
]);
const m = s("Sun", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2"
    }],
    ["path", {
        d: "M12 2v2",
        key: "tus03m"
    }],
    ["path", {
        d: "M12 20v2",
        key: "1lh1kg"
    }],
    ["path", {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j"
    }],
    ["path", {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv"
    }],
    ["path", {
        d: "M2 12h2",
        key: "1t8f8n"
    }],
    ["path", {
        d: "M20 12h2",
        key: "1q8mjw"
    }],
    ["path", {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5"
    }],
    ["path", {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs"
    }]
]);

function x() {
    const {
        setTheme: t
    } = c();
    return e.jsxs(n, {
        children: [e.jsx(o, {
            asChild: !0,
            children: e.jsxs(r, {
                variant: "outline",
                size: "icon",
                children: [e.jsx(m, {
                    className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                }), e.jsx(l, {
                    className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                }), e.jsx("span", {
                    className: "sr-only",
                    children: "Toggle theme"
                })]
            })
        }), e.jsxs(i, {
            align: "end",
            children: [e.jsx(a, {
                onClick: () => t("light"),
                children: "Light"
            }), e.jsx(a, {
                onClick: () => t("dark"),
                children: "Dark"
            }), e.jsx(a, {
                onClick: () => t("system"),
                children: "System"
            })]
        })]
    })
}
export {
    x as M
};