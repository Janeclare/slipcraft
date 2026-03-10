import {
    q as i,
    j as e
} from "./app-CPSemYgC.js";
import {
    T as a
} from "./TestimonyCard-ZfOojPBD.js";
const x = () => {
    const {
        props: l
    } = i(), {
        platform: s,
        testimonies: r
    } = l;
    return e.jsxs("section", {
        className: "w-full flex flex-col items-center py-16 gap-10",
        children: [e.jsxs("div", {
            className: "flex flex-col items-center gap-4 max-w-2xl text-center px-5",
            children: [e.jsx("div", {
                className: "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold",
                style: {
                    backgroundColor: s.primary_color + "14",
                    color: s.primary_color
                },
                children: "Testimonials"
            }), e.jsx("h2", {
                className: "text-3xl sm:text-4xl font-extrabold tracking-tight",
                children: "Loved by Thousands"
            }), e.jsxs("p", {
                className: "text-ts text-base sm:text-lg leading-relaxed",
                children: ["Join ", s.total_users ?.toLocaleString(), "+ users who trust ", s.name, " for their digital service needs."]
            })]
        }), e.jsx("div", {
            className: "overflow-hidden w-full",
            children: e.jsx("div", {
                className: "flex gap-4 animate-slide px-4",
                children: r.map(t => e.jsx(a, {
                    testimony: t
                }, t.id))
            })
        })]
    })
};
export {
    x as T
};