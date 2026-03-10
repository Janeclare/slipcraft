import {
    q as g,
    W as j,
    j as e,
    a as b
} from "./app-CPSemYgC.js";
import {
    L as o
} from "./label-DzYRBl-l.js";
import {
    I as i
} from "./input-MxT5BQBW.js";
import {
    B as v
} from "./button-BamgVvPn.js";
import {
    t as y
} from "./index-Dnc4ycMJ.js";
import {
    s as N
} from "./showIntertiaErrors-Bokdg093.js";
import {
    P as w,
    a as k
} from "./PhoneCustomInput-BJtrTbNc.js";
import {
    v as C
} from "./index-D5rHYsT_.js";
import {
    z as _
} from "./transition-FUaqmUen.js";
import "./index-TtBBfnyI.js";
import "./index-BIbNlVZ0.js";

function D({
    mustVerifyEmail: m,
    status: l,
    className: u = ""
}) {
    const s = g().props.auth.user,
        {
            data: r,
            setData: a,
            patch: d,
            errors: n,
            setError: c,
            processing: p,
            recentlySuccessful: h
        } = j({
            name: s ?.name || "",
            email: s ?.email || "",
            username: s ?.username || "",
            whatsapp_number: s ?.whatsapp_number || ""
        }),
        x = t => {
            if (t.preventDefault(), r.whatsapp_number !== "undefined" && r.whatsapp_number.trim().length > 0 && !C.isMobilePhone(r.whatsapp_number)) {
                c("whatsapp_number", "Number is invalid");
                return
            }
            d(route("profile.update"), {
                preserveScroll: !0,
                onSuccess: () => y.success("Profile updated"),
                onError: f => N(f)
            })
        };
    return e.jsxs("section", {
        className: u,
        children: [e.jsxs("header", {
            children: [e.jsx("h2", {
                className: "text-lg font-medium text-gray-900 dark:text-gray-100",
                children: "Profile Information"
            }), e.jsx("p", {
                className: "mt-1 text-sm text-gray-600 dark:text-gray-400",
                children: "Update your account's profile information and email address."
            })]
        }), e.jsxs("form", {
            onSubmit: x,
            className: "mt-6 space-y-6",
            children: [e.jsxs("div", {
                children: [e.jsx(o, {
                    htmlFor: "name",
                    children: "Name"
                }), e.jsx(i, {
                    id: "name",
                    className: "mt-1 block w-full",
                    value: r.name,
                    onChange: t => a("name", t.target.value),
                    required: !0,
                    autoComplete: "name"
                }), e.jsx("p", {
                    className: "text-rose-500 text-sm",
                    children: n.name
                })]
            }), e.jsxs("div", {
                children: [e.jsx(o, {
                    htmlFor: "email",
                    children: "Email"
                }), e.jsx(i, {
                    id: "email",
                    type: "email",
                    className: "mt-1 block w-full",
                    value: r.email,
                    onChange: t => a("email", t.target.value),
                    required: !0,
                    autoComplete: "username"
                }), e.jsx("p", {
                    className: "text-rose-500 text-sm",
                    children: n.email
                })]
            }), e.jsxs("div", {
                children: [e.jsx(o, {
                    htmlFor: "username",
                    children: "Username"
                }), e.jsx(i, {
                    id: "username",
                    className: "mt-1 block w-full",
                    value: r.username,
                    onChange: t => a("username", t.target.value),
                    required: !0,
                    autoComplete: "username",
                    disabled: !0
                }), e.jsx("p", {
                    className: "text-ts text-sm",
                    children: "contact support to change your username"
                }), e.jsx("p", {
                    className: "text-rose-500 text-sm",
                    children: n.username
                })]
            }), e.jsxs("div", {
                className: "flex flex-col gap-1 w-full",
                children: [e.jsx(o, {
                    htmlFor: "phone",
                    children: "WhatsApp Number"
                }), e.jsx(w, {
                    className: "mt-1 block w-full",
                    id: "phone",
                    name: "phone",
                    defaultCountry: "NG",
                    value: r.whatsapp_number,
                    onChange: t => a("whatsapp_number", t + ""),
                    placeholder: "Enter Phone Number",
                    inputComponent: k
                }), e.jsxs("p", {
                    className: "text-ts text-xs font-semibold",
                    children: ["Enter your WhatsApp number to receive notifications about your orders from the vendor. ", e.jsx("br", {}), " This number will not be visible to other users. ", e.jsx("br", {}), " Please ensure you enter the correct number, as it will be used to contact you regarding your orders."]
                }), e.jsx("p", {
                    className: "text-rose-500 text-sm",
                    children: n.whatsapp_number
                })]
            }), m && s ?.email_verified_at === null && e.jsxs("div", {
                children: [e.jsxs("p", {
                    className: "text-sm mt-2 text-gray-800 dark:text-gray-200",
                    children: ["Your email address is unverified.", e.jsx(b, {
                        href: route("verification.send"),
                        method: "post",
                        as: "button",
                        className: "underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",
                        children: "Click here to re-send the verification email."
                    })]
                }), l === "verification-link-sent" && e.jsx("div", {
                    className: "mt-2 font-medium text-sm text-green-600 dark:text-green-400",
                    children: "A new verification link has been sent to your email address."
                })]
            }), e.jsxs("div", {
                className: "flex items-center gap-4",
                children: [e.jsx(v, {
                    disabled: p,
                    children: "Save"
                }), e.jsx(_, {
                    show: h,
                    enter: "transition ease-in-out",
                    enterFrom: "opacity-0",
                    leave: "transition ease-in-out",
                    leaveTo: "opacity-0",
                    children: e.jsx("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children: "Saved."
                    })
                })]
            })]
        })]
    })
}
export {
    D as
    default
};