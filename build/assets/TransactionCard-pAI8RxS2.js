import {
    q as i,
    j as e,
    a as l
} from "./app-CPSemYgC.js";
import {
    f as c
} from "./formatDate-DSWK92vn.js";
import {
    f as d
} from "./formatNumber-Ce-00Vs2.js";
import {
    e as n,
    f as m
} from "./index-CGcBZyi7.js";
const u = ({
    transaction: t
}) => {
    const {
        props: o
    } = i(), {
        platform: r
    } = o, a = new Date(`${t.created_at}`), s = t.status;
    return e.jsxs(l, {
        href: route("transaction.show", {
            id: t.id
        }),
        className: `flex items-center justify-between 
            hover:shadow-lg shadow-md py-4 
            px-3 rounded-lg cursor-pointer  
            gap-3 active:scale-95 transition duration-300 bg-background dark:bg-foreground`,
        children: [e.jsxs("div", {
            className: "flex items-center gap-4",
            children: [e.jsx(n, {
                color: r.primary_color,
                size: 24
            }), e.jsxs("div", {
                children: [e.jsx("div", {
                    className: "font-semibold text-ts",
                    children: t.title
                }), e.jsx("div", {
                    className: "font-semibold text-sm text-gray-300",
                    children: c(a)
                })]
            })]
        }), e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [e.jsxs("div", {
                className: "font-bold flex flex-col items-end text-ts",
                children: [e.jsxs("div", {
                    children: ["₦", d(t.price_amount)]
                }), e.jsx("div", {
                    className: `font-normal italic text-sm ${s==="pending"&&"text-[#2196f3]"}
                        ${s==="successful"&&"text-[#00c853]"}
                        ${s==="processing"&&"text-[#ff9800]"}
                        ${s==="action-needed"&&"text-rose-400"}
                        ${s==="failed"&&"text-[#f44336]"}`,
                    children: s
                })]
            }), e.jsx(m, {
                color: r.primary_color,
                size: 24
            })]
        })]
    })
};
export {
    u as T
};