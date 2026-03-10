import {
    q as m,
    W as f,
    r as h,
    j as e,
    a as u
} from "./app-CPSemYgC.js";
import {
    D as x,
    a as j,
    b as y,
    c as g,
    d as k,
    e as v,
    f as C
} from "./dialog-BauOFWUU.js";
import {
    B as a
} from "./button-BamgVvPn.js";
import {
    t as b
} from "./index-Dnc4ycMJ.js";
import {
    s as w
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as D
} from "./Loader-DxAivhzx.js";
import {
    f as N
} from "./formatNumber-Ce-00Vs2.js";
import {
    c as _
} from "./createLucideIcon-rN-Z3mCX.js";
const B = _("UserCog", [
        ["circle", {
            cx: "18",
            cy: "15",
            r: "3",
            key: "gjjjvw"
        }],
        ["circle", {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }],
        ["path", {
            d: "M10 15H6a4 4 0 0 0-4 4v2",
            key: "1nfge6"
        }],
        ["path", {
            d: "m21.7 16.4-.9-.3",
            key: "12j9ji"
        }],
        ["path", {
            d: "m15.2 13.9-.9-.3",
            key: "1fdjdi"
        }],
        ["path", {
            d: "m16.6 18.7.3-.9",
            key: "heedtr"
        }],
        ["path", {
            d: "m19.1 12.2.3-.9",
            key: "1af3ki"
        }],
        ["path", {
            d: "m19.6 18.7-.4-1",
            key: "1x9vze"
        }],
        ["path", {
            d: "m16.8 12.3-.4-1",
            key: "vqeiwj"
        }],
        ["path", {
            d: "m14.3 16.6 1-.4",
            key: "1qlj63"
        }],
        ["path", {
            d: "m20.7 13.8 1-.4",
            key: "1v5t8k"
        }]
    ]),
    S = () => {
        const {
            props: t
        } = m(), {
            platform: o,
            auth: n
        } = t, {
            processing: i,
            post: l
        } = f({}), [c, s] = h.useState(!1), d = () => {
            l(route("vendor.apply"), {
                onSuccess: () => {
                    b.success("Congrats, You're now a vendor"), s(!1)
                },
                onError: p => {
                    w(p)
                }
            })
        }, r = o.vendor_application_fee > (n.user ?.point_main_balance || 0);
        return e.jsxs(x, {
            open: c,
            onOpenChange: s,
            children: [e.jsx(j, {
                asChild: !0,
                children: e.jsxs(a, {
                    className: "gap-1 items-center w-full",
                    variant: "outline",
                    children: ["Join Vendor", e.jsx(B, {
                        color: o.primary_color
                    })]
                })
            }), e.jsxs(y, {
                children: [e.jsxs(g, {
                    children: [e.jsx(k, {
                        children: "Become a point vendor?"
                    }), e.jsx(v, {
                        children: "As a vendor, you can create a listing and sell points to other users via our P2P feature with your custom price."
                    })]
                }), e.jsx("div", {
                    className: "",
                    children: e.jsxs("p", {
                        className: "text-center sm:text-left",
                        children: ["A one-time fee of", " ", e.jsxs("span", {
                            style: {
                                color: o.primary_color
                            },
                            className: "text-lg font-bold",
                            children: [N(o.vendor_application_fee), " ", "points"]
                        }), " ", "will be deducted from your point balance."]
                    })
                }), r && e.jsxs("div", {
                    className: "flex flex-col w-full",
                    children: [e.jsx("p", {
                        className: "text-center text-rose-500",
                        children: "Insufficient point balance"
                    }), e.jsx(u, {
                        href: route("buy_point"),
                        children: e.jsx(a, {
                            variant: "outline",
                            className: "w-full",
                            children: "Buy Points"
                        })
                    })]
                }), e.jsxs(C, {
                    className: "gap-2",
                    children: [e.jsx(a, {
                        onClick: () => s(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(a, {
                        disabled: r,
                        style: {
                            backgroundColor: o.primary_color
                        },
                        onClick: d,
                        className: "text-white",
                        children: i ? e.jsx(D, {}) : "Continue"
                    })]
                })]
            })]
        })
    };
export {
    S as A
};