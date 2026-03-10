import {
    j as e
} from "./app-CPSemYgC.js";
import {
    c as s
} from "./index-BIbNlVZ0.js";
const d = ({
    iconSrc: t,
    icon: r,
    onClick: n,
    label: l,
    iconClassName: c,
    labelClassName: o,
    newlyAdded: x
}) => e.jsxs("div", {
    onClick: n,
    className: `flex flex-col items-center cursor-pointer 
            select-none hover:scale-105 transition-all`,
    children: [e.jsx("div", {
        className: s("w-[55px] h-[55px] sm:w-[75px] sm:h-[75px] rounded-full flex items-center justify-center overflow-hidden shadow-md shadow-black/15 dark:shadow-neutral-900/50", c),
        children: t ? e.jsx("img", {
            className: "w-full h-auto object-center",
            src: t,
            alt: "icon"
        }) : r || null
    }), e.jsxs("div", {
        className: "flex items-center gap-1",
        children: [l && e.jsx("p", {
            className: s("text-ts text-xs sm:text-sm font-semibold text-center", o),
            children: l
        }), x && e.jsx("p", {
            className: s("text-[10px] font-semibold text-center text-rose-500 bg-rose-500/10 p-[2px] rounded-md"),
            children: "New"
        })]
    })]
});
export {
    d as S
};