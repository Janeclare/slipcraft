import {
    j as e,
    a
} from "./app-CPSemYgC.js";
import {
    A as r,
    a as t
} from "./avatar-BLCVZC4Y.js";
import {
    f as l
} from "./formatDate-DSWK92vn.js";
import {
    f as o
} from "./formatNumber-Ce-00Vs2.js";
import {
    c
} from "./createLucideIcon-rN-Z3mCX.js";
const m = c("ArrowUp", [
        ["path", {
            d: "m5 12 7-7 7 7",
            key: "hav0vg"
        }],
        ["path", {
            d: "M12 19V5",
            key: "x0mq9r"
        }]
    ]),
    p = ({
        transaction: s
    }) => e.jsxs(a, {
        href: route("opay.transaction.show", {
            id: s.id
        }),
        className: "flex-between",
        children: [e.jsxs("div", {
            className: "flex items-center gap-1",
            children: [e.jsx(r, {
                children: e.jsx(t, {
                    className: "bg-[#01b876]/10",
                    children: e.jsx(m, {
                        color: "#01b876",
                        size: 17
                    })
                })
            }), e.jsxs("div", {
                className: "flex flex-col",
                children: [e.jsxs("p", {
                    className: "font-semibold text-sm",
                    children: ["Transfer to ", s.recipient_name.split(" ")[0]]
                }), e.jsx("p", {
                    className: "text-xs text-ts ",
                    children: l(new Date(s ?.display_date || s.created_at))
                })]
            })]
        }), e.jsxs("div", {
            className: "flex flex-col",
            children: [e.jsxs("p", {
                className: "font-bold text-end",
                children: ["- ₦", o(s.amount, void 0, 2)]
            }), e.jsx("p", {
                className: `text-xs text-center text-[#01b876] bg-foreground 
                p-[0.5px] font-semibold rounded-sm`,
                children: "Successful"
            })]
        })]
    });
export {
    p as T
};