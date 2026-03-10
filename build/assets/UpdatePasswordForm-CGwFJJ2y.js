import {
    r as l,
    W as h,
    j as s
} from "./app-CPSemYgC.js";
import {
    L as n
} from "./label-DzYRBl-l.js";
import {
    I as d
} from "./input-MxT5BQBW.js";
import {
    B as j
} from "./button-BamgVvPn.js";
import {
    z as g
} from "./transition-FUaqmUen.js";
import "./index-TtBBfnyI.js";
import "./index-BIbNlVZ0.js";

function k({
    className: m = ""
}) {
    const c = l.useRef(null),
        p = l.useRef(null),
        {
            data: e,
            setData: t,
            errors: a,
            put: u,
            reset: o,
            processing: w,
            recentlySuccessful: x
        } = h({
            current_password: "",
            password: "",
            password_confirmation: ""
        }),
        f = r => {
            r.preventDefault(), u(route("password.update"), {
                preserveScroll: !0,
                onSuccess: () => o(),
                onError: i => {
                    i.password && (o("password", "password_confirmation"), c.current ?.focus()), i.current_password && (o("current_password"), p.current ?.focus())
                }
            })
        };
    return s.jsxs("section", {
        className: m,
        children: [s.jsxs("header", {
            children: [s.jsx("h2", {
                className: "text-lg font-medium text-gray-900 dark:text-gray-100",
                children: "Update Password"
            }), s.jsx("p", {
                className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                children: "Ensure your account is using a long, random password to stay secure."
            })]
        }), s.jsxs("form", {
            onSubmit: f,
            className: "mt-6 space-y-6",
            children: [s.jsxs("div", {
                children: [s.jsx(n, {
                    htmlFor: "current_password",
                    children: "Current Password"
                }), s.jsx(d, {
                    id: "current_password",
                    ref: p,
                    value: e.current_password,
                    onChange: r => t("current_password", r.target.value),
                    type: "password",
                    className: "mt-1 block w-full",
                    autoComplete: "current-password"
                }), s.jsx("p", {
                    className: "text-rose-500 text-sm mt-2",
                    children: a.current_password
                })]
            }), s.jsxs("div", {
                children: [s.jsx(n, {
                    htmlFor: "password",
                    children: "New Password"
                }), s.jsx(d, {
                    id: "password",
                    ref: c,
                    value: e.password,
                    onChange: r => t("password", r.target.value),
                    type: "password",
                    className: "mt-1 block w-full",
                    autoComplete: "new-password"
                }), s.jsx("p", {
                    className: "text-rose-500 text-sm mt-2",
                    children: a.password
                })]
            }), s.jsxs("div", {
                children: [s.jsx(n, {
                    htmlFor: "password_confirmation",
                    children: "Confirm Password"
                }), s.jsx(d, {
                    id: "password_confirmation",
                    value: e.password_confirmation,
                    onChange: r => t("password_confirmation", r.target.value),
                    type: "password",
                    className: "mt-1 block w-full",
                    autoComplete: "new-password"
                }), s.jsx("p", {
                    className: "text-rose-500 text-sm mt-2",
                    children: a.password_confirmation
                })]
            }), s.jsxs("div", {
                className: "flex items-center gap-4",
                children: [s.jsx(j, {
                    disabled: w,
                    children: "Save"
                }), s.jsx(g, {
                    show: x,
                    enter: "transition ease-in-out",
                    enterFrom: "opacity-0",
                    leave: "transition ease-in-out",
                    leaveTo: "opacity-0",
                    children: s.jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children: "Saved."
                    })
                })]
            })]
        })]
    })
}
export {
    k as
    default
};