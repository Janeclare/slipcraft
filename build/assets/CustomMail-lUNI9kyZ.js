import {
    W as u,
    r as f,
    j as e,
    y as j
} from "./app-CPSemYgC.js";
import {
    A as _,
    a as b
} from "./AppLayout-BVugRKpX.js";
import {
    G as g
} from "./GoBack-CC6xQy9d.js";
import {
    S as w
} from "./SendEmailModal-D5obLEYB.js";
import {
    s as y
} from "./showIntertiaErrors-Bokdg093.js";
import {
    t as n
} from "./index-Dnc4ycMJ.js";
import {
    I as i
} from "./input-MxT5BQBW.js";
import {
    L as s
} from "./label-DzYRBl-l.js";
import {
    B as v
} from "./button-BamgVvPn.js";
import {
    S as N
} from "./ServiceIcon-C88v8dGn.js";
import {
    p as k
} from "./paypal-CuuRI83g.js";
import {
    T as E
} from "./textarea-D5O83yDd.js";
import {
    S as C
} from "./switch-CoiwG1mq.js";
import {
    v as S
} from "./index-D5rHYsT_.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./dialog-BauOFWUU.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
import "./Loader-DxAivhzx.js";
import "./index-TtBBfnyI.js";
const ee = ({
    platform: F
}) => {
    const {
        data: a,
        setData: l,
        processing: c,
        errors: o,
        post: m,
        clearErrors: x,
        setError: p
    } = u({
        company_name: "",
        mail_subject: "",
        mail_body: "",
        recipient_email: "",
        show_action_button: !1,
        button_text: "",
        button_link: ""
    }), [h, r] = f.useState(!1), d = () => {
        if (x(), a.show_action_button && !S.isURL(a.button_link.trim())) {
            p("button_link", "Button link must be a valid URL. e.g https://example.com"), n.error("Button link must be a valid URL. e.g https://example.com"), r(!1);
            return
        }
        m(route("paypal.send_email_custom"), {
            onSuccess: () => {
                n.success("Flash Mail Sent Successfully"), r(!1)
            },
            onError: t => {
                y(t), r(!1)
            }
        })
    };
    return e.jsxs(_, {
        children: [e.jsx(b, {
            title: "Paypal Custom Flash Mail"
        }), e.jsx("main", {
            className: "w-full flex justify-center",
            children: e.jsxs("div", {
                className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                children: [e.jsxs("div", {
                    className: "w-full flex-between",
                    children: [e.jsx(g, {}), e.jsx("h1", {
                        className: "font-bold text-lg",
                        children: "Paypal Custom Flash Email"
                    }), e.jsx("h1", {
                        className: "font-bold text-lg opacity-0 hidden sm:block",
                        children: "."
                    })]
                }), e.jsx(N, {
                    onClick: () => j.get(route("services.paypal")),
                    iconSrc: k
                }), e.jsx("section", {
                    className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[75vh] overflow-auto`,
                    children: e.jsxs("div", {
                        className: "flex flex-col w-full gap-3 px-1 pt-5 pb-20",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(s, {
                                htmlFor: "company_name",
                                children: "Company Name"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "company_name",
                                onChange: t => l("company_name", t.target.value),
                                value: a.company_name,
                                placeholder: "Enter the company name e.g Paypal"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.company_name
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(s, {
                                htmlFor: "recipient_email",
                                children: "Recipient Email"
                            }), e.jsx(i, {
                                type: "email",
                                className: "w-full max-w-[500px]",
                                id: "recipient_email",
                                onChange: t => l("recipient_email", t.target.value),
                                value: a.recipient_email,
                                placeholder: "Enter the recipient's email"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.recipient_email
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(s, {
                                htmlFor: "mail_subject",
                                children: "Mail Subject"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "mail_subject",
                                onChange: t => l("mail_subject", t.target.value),
                                value: a.mail_subject,
                                placeholder: "Enter the subject of the email e.g 'Forgot Password'"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.mail_subject
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(s, {
                                htmlFor: "mail_body",
                                children: "Mail Body"
                            }), e.jsx(E, {
                                className: "max-w-[500px]",
                                id: "mail_body",
                                onChange: t => l("mail_body", t.target.value),
                                value: a.mail_body,
                                placeholder: "Enter the body of the email"
                            }), e.jsxs("p", {
                                className: "text-sm text-ts",
                                children: ["Here you can write the message to the receiver. Use '**' at the end of the line to create a new line. e.g ", e.jsx("br", {}), " Hello **", " ", e.jsx("br", {}), " How are you ** ", e.jsx("br", {}), " I hope you are doing well."]
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.mail_body
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [e.jsx(C, {
                                checked: a.show_action_button,
                                onCheckedChange: t => l("show_action_button", t),
                                id: "show_action_button"
                            }), e.jsx(s, {
                                htmlFor: "show_action_button",
                                children: "Show Action Button"
                            })]
                        }), a.show_action_button && e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(s, {
                                htmlFor: "button_text",
                                children: "Button Text"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "button_text",
                                onChange: t => l("button_text", t.target.value),
                                value: a.button_text,
                                placeholder: "Enter the button display text e.g Click Here"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.button_text
                            })]
                        }), a.show_action_button && e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(s, {
                                htmlFor: "button_link",
                                children: "Button Link"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "button_link",
                                onChange: t => l("button_link", t.target.value),
                                value: a.button_link,
                                placeholder: "Enter the link to be opened on button click"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.button_link
                            })]
                        })]
                    })
                }), e.jsxs("div", {
                    className: "flex w-full justify-center gap-2 fixed bottom-0 bg-foreground py-7",
                    children: [e.jsx(w, {
                        serviceName: "Paypal",
                        dialog: h,
                        setDialog: r,
                        actionHandler: d,
                        processing: c
                    }), e.jsx(v, {
                        onClick: () => location.href = "/services/paypal/preview-email",
                        variant: "outline",
                        children: "Email Sample"
                    })]
                })]
            })
        })]
    })
};
export {
    ee as
    default
};