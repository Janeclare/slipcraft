import {
    r as l,
    j as e
} from "./app-CPSemYgC.js";
import {
    R as p,
    T as g,
    P as x,
    a as i,
    C as n,
    b as d,
    D as r,
    O as c
} from "./index-DdW_XmhI.js";
import {
    c as o
} from "./index-BIbNlVZ0.js";
import {
    X as u
} from "./x-Bf_gKvvP.js";
const T = p,
    k = g,
    y = x,
    z = n,
    m = l.forwardRef(({
        className: a,
        ...t
    }, s) => e.jsx(c, {
        ref: s,
        className: o("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
        ...t
    }));
m.displayName = c.displayName;
const N = l.forwardRef(({
    className: a,
    children: t,
    ...s
}, f) => e.jsxs(y, {
    children: [e.jsx(m, {}), e.jsxs(i, {
        ref: f,
        className: o("text-t fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
        ...s,
        children: [t, e.jsxs(n, {
            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [e.jsx(u, {
                className: "h-4 w-4"
            }), e.jsx("span", {
                className: "sr-only",
                children: "Close"
            })]
        })]
    })]
}));
N.displayName = i.displayName;
const D = ({
    className: a,
    ...t
}) => e.jsx("div", {
    className: o("flex flex-col space-y-1.5 text-center sm:text-left", a),
    ...t
});
D.displayName = "DialogHeader";
const j = ({
    className: a,
    ...t
}) => e.jsx("div", {
    className: o("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", a),
    ...t
});
j.displayName = "DialogFooter";
const b = l.forwardRef(({
    className: a,
    ...t
}, s) => e.jsx(d, {
    ref: s,
    className: o("text-lg font-semibold leading-none tracking-tight text-t", a),
    ...t
}));
b.displayName = d.displayName;
const h = l.forwardRef(({
    className: a,
    ...t
}, s) => e.jsx(r, {
    ref: s,
    className: o("text-sm text-ts", a),
    ...t
}));
h.displayName = r.displayName;
export {
    T as D, k as a, N as b, D as c, b as d, h as e, j as f, z as g
};