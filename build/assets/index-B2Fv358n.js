import {
    j as e,
    y as s,
    a as r
} from "./app-CPSemYgC.js";
import {
    A as t
} from "./AppLayout-BVugRKpX.js";
import {
    b as i
} from "./binance-D4PhrHxU.js";
import {
    S as a
} from "./ServiceIcon-C88v8dGn.js";
import {
    B as n
} from "./button-BamgVvPn.js";
import {
    R as c
} from "./index-LrYBO14D.js";
import {
    M as l
} from "./mail--HRBfw0-.js";
import "./index-Dnc4ycMJ.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
const N = ({
    platform: o
}) => e.jsx(t, {
    children: e.jsxs("div", {
        className: "flex flex-col justify-center min-h-screen items-center gap-5",
        children: [e.jsx(a, {
            onClick: () => s.get(route("services.binance")),
            iconSrc: i
        }), e.jsx("p", {
            children: "Choose the type of mail to Send"
        }), e.jsxs("div", {
            className: "flex gap-3",
            children: [e.jsxs(r, {
                href: route("binance.custom_mail"),
                className: `w-[100px] h-[100px] flex flex-col 
                    items-center justify-center border-2 border-dashed 
                    border-gray-300 rounded-lg gap-1 cursor-pointer 
                    hover:scale-105 transition-all duration-200 active:scale-95`,
                children: [e.jsx(c, {
                    size: 40,
                    color: o.primary_color
                }), e.jsx("p", {
                    className: "text-center text-sm font-semibold",
                    children: "Custom Mail"
                })]
            }), e.jsxs(r, {
                href: route("binance.deposit_mail"),
                className: `w-[100px] h-[100px] flex flex-col 
                    items-center justify-center border-2 border-dashed 
                    border-gray-300 rounded-lg gap-1 cursor-pointer 
                    hover:scale-105 transition-all duration-200 active:scale-95`,
                children: [e.jsx(l, {
                    size: 40,
                    color: o.primary_color
                }), e.jsx("p", {
                    className: "text-center text-sm font-semibold",
                    children: "Deposit Mail"
                })]
            })]
        }), e.jsx(r, {
            href: route("dashboard"),
            children: e.jsx(n, {
                children: "Back to Dashboard"
            })
        })]
    })
});
export {
    N as
    default
};