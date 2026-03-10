import {
    q as c,
    j as e
} from "./app-CPSemYgC.js";
import {
    D as d,
    a as m,
    b as h,
    c as p,
    d as x,
    e as u,
    f
} from "./dialog-BauOFWUU.js";
import {
    B as l
} from "./button-BamgVvPn.js";
import {
    L as g
} from "./Loader-DxAivhzx.js";
const N = ({
    dialog: o,
    setDialog: a,
    actionHandler: i,
    processing: r,
    serviceName: n
}) => {
    const {
        props: t
    } = c(), {
        platform: s
    } = t;
    return e.jsxs(d, {
        open: o,
        onOpenChange: a,
        children: [e.jsx(m, {
            asChild: !0,
            children: e.jsx(l, {
                className: "text-white",
                style: {
                    backgroundColor: s.primary_color
                },
                children: "Send Flash Email"
            })
        }), e.jsxs(h, {
            children: [e.jsxs(p, {
                children: [e.jsxs(x, {
                    children: ["Send ", n, " Flash Email"]
                }), e.jsxs(u, {
                    children: ["You will be charged", " ", e.jsxs("span", {
                        className: "font-bold text-lg",
                        style: {
                            color: s.primary_color
                        },
                        children: [s.email_slip_fee, " points"]
                    }), " ", "for each Flash Email sent."]
                })]
            }), e.jsxs("div", {
                className: "flex flex-col gap-4",
                children: [e.jsx("p", {
                    className: "font-semibold",
                    children: "1. Please make sure you have enough points in your account to send the email."
                }), e.jsx("p", {
                    className: "font-semibold",
                    children: "2. You will still be charged for the email if you entered a wrong or an invalid Email address. Make sure the Recipient Email is valid and correct."
                }), e.jsx("p", {
                    className: "font-semibold",
                    children: "3. If you don't see the email in your inbox, please check your SPAM folder or BIN/TRASH Folder."
                })]
            }), e.jsxs(f, {
                className: "gap-y-2",
                children: [e.jsx(l, {
                    onClick: () => a(!1),
                    variant: "outline",
                    children: "Cancel"
                }), e.jsx(l, {
                    style: {
                        backgroundColor: s.primary_color
                    },
                    onClick: i,
                    className: "text-white",
                    children: r ? e.jsx(g, {}) : "Continue"
                })]
            })]
        })]
    })
};
export {
    N as S
};