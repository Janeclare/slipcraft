import {
    q as _,
    r as u,
    j as e,
    W as g,
    y as v
} from "./app-CPSemYgC.js";
import {
    A as y,
    a as w
} from "./AppLayout-BVugRKpX.js";
import {
    G as b
} from "./GoBack-CC6xQy9d.js";
import {
    S as N
} from "./ServiceIcon-C88v8dGn.js";
import {
    c as C
} from "./crypto.com-logo-Do31OLD5.js";
import {
    L as l
} from "./label-DzYRBl-l.js";
import {
    I as r
} from "./input-MxT5BQBW.js";
import {
    T as S
} from "./textarea-D5O83yDd.js";
import {
    S as d
} from "./switch-CoiwG1mq.js";
import {
    B as x
} from "./button-BamgVvPn.js";
import {
    S as E
} from "./SendEmailModal-D5obLEYB.js";
import {
    v as k
} from "./index-D5rHYsT_.js";
import {
    t as h
} from "./index-Dnc4ycMJ.js";
import {
    s as F
} from "./showIntertiaErrors-Bokdg093.js";
import {
    D as M,
    a as T,
    b as P,
    c as B,
    d as H,
    e as I,
    f as D
} from "./dialog-BauOFWUU.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-TtBBfnyI.js";
import "./Loader-DxAivhzx.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
const L = ({
        data: s,
        setData: a,
        errors: n
    }) => {
        const {
            props: i
        } = _(), [p, c] = u.useState(!1);
        return e.jsxs(M, {
            open: p,
            onOpenChange: c,
            children: [e.jsx(T, {
                asChild: !0,
                children: e.jsx(x, {
                    size: "sm",
                    children: "Setup mail config"
                })
            }), e.jsxs(P, {
                children: [e.jsxs(B, {
                    children: [e.jsx(H, {
                        children: "SMTP Configuration"
                    }), e.jsxs(I, {
                        children: ["You can configure your SMTP settings here to enable sending emails through your own SMTP server.", e.jsx("br", {}), e.jsx("span", {
                            className: "text-red-500",
                            children: "You need to own a domain and have access to SMTP settings to use this feature."
                        }), e.jsx("br", {}), e.jsx("span", {
                            className: "text-red-500",
                            children: "Note: Ensure you have the correct SMTP settings and that your server is properly configured to send emails. Incorrect settings may prevent email delivery."
                        }), e.jsx("br", {}), e.jsx("span", {
                            className: "text-red-500",
                            children: "If you are not sure about your SMTP settings, please contact your email service provider for assistance."
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col w-full gap-4 px-1 pt-5 pb-10 max-h-[450px] overflow-y-auto",
                    children: [e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(l, {
                            htmlFor: "smtp_host",
                            children: "Host"
                        }), e.jsx(r, {
                            className: "w-full max-w-[500px]",
                            id: "smtp_host",
                            onChange: o => a("smtp_host", o.target.value),
                            value: s.smtp_host,
                            placeholder: "Enter your SMTP host"
                        }), e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: n.smtp_host
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(l, {
                            htmlFor: "smtp_port",
                            children: "Port"
                        }), e.jsx(r, {
                            className: "w-full max-w-[500px]",
                            id: "smtp_port",
                            onChange: o => a("smtp_port", o.target.value),
                            value: s.smtp_port,
                            placeholder: "Enter your SMTP port"
                        }), e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: n.smtp_port
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(l, {
                            htmlFor: "smtp_username",
                            children: "Username"
                        }), e.jsx(r, {
                            className: "w-full max-w-[500px]",
                            id: "smtp_username",
                            onChange: o => a("smtp_username", o.target.value),
                            value: s.smtp_username,
                            placeholder: "Enter your SMTP username"
                        }), e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: n.smtp_username
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(l, {
                            htmlFor: "smtp_password",
                            children: "Password"
                        }), e.jsx(r, {
                            className: "w-full max-w-[500px]",
                            id: "smtp_password",
                            onChange: o => a("smtp_password", o.target.value),
                            value: s.smtp_password,
                            placeholder: "Enter your SMTP password"
                        }), e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: n.smtp_password
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(l, {
                            htmlFor: "smtp_from_address",
                            children: "From Address"
                        }), e.jsx(r, {
                            autoComplete: "email",
                            className: "w-full max-w-[500px]",
                            id: "smtp_from_address",
                            onChange: o => a("smtp_from_address", o.target.value),
                            value: s.smtp_from_address,
                            placeholder: "Enter your SMTP from address"
                        }), e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: n.smtp_from_address
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(l, {
                            htmlFor: "smtp_encryption",
                            children: "Encryption(tls or ssl)"
                        }), e.jsx(r, {
                            className: "w-full max-w-[500px]",
                            id: "smtp_encryption",
                            onChange: o => a("smtp_encryption", o.target.value),
                            value: s.smtp_encryption,
                            placeholder: "Enter your SMTP encryption"
                        }), e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: n.smtp_encryption
                        })]
                    })]
                }), e.jsx(D, {
                    className: "gap-y-2",
                    children: e.jsx(x, {
                        onClick: () => c(!1),
                        variant: "outline",
                        children: "Close and continue"
                    })
                })]
            })]
        })
    },
    ie = () => {
        const {
            data: s,
            setData: a,
            processing: n,
            errors: i,
            post: p,
            clearErrors: c,
            setError: o
        } = g({
            company_name: "",
            mail_subject: "",
            mail_body: "",
            recipient_email: "",
            show_action_button: !1,
            button_text: "",
            button_link: "",
            smpt_configured: !1,
            smtp_host: "",
            smtp_port: "",
            smtp_username: "",
            smtp_password: "",
            smtp_from_address: "",
            smtp_encryption: "tls"
        }), [f, m] = u.useState(!1), j = () => {
            if (c(), s.show_action_button && !k.isURL(s.button_link.trim())) {
                o("button_link", "Button link must be a valid URL. e.g https://example.com"), h.error("Button link must be a valid URL. e.g https://example.com"), m(!1);
                return
            }
            p(route("crypto.com.send_email"), {
                onSuccess: () => {
                    h.success("Flash Mail Sent Successfully"), m(!1)
                },
                onError: t => {
                    F(t), m(!1)
                }
            })
        };
        return e.jsxs(y, {
            children: [e.jsx(w, {
                title: "Crypto.com Flash Mail"
            }), e.jsx("main", {
                className: "w-full flex justify-center",
                children: e.jsxs("div", {
                    className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                    children: [e.jsxs("div", {
                        className: "w-full flex-between",
                        children: [e.jsx(b, {}), e.jsx("h1", {
                            className: "font-bold text-lg",
                            children: "Crypto.com Flash Email"
                        }), e.jsx("h1", {
                            className: "font-bold text-lg opacity-0 hidden sm:block",
                            children: "."
                        })]
                    }), e.jsx(N, {
                        onClick: () => v.get(route("services.crypto.com")),
                        iconSrc: C
                    }), e.jsx("section", {
                        className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[80vh] overflow-auto`,
                        children: e.jsxs("div", {
                            className: "flex flex-col w-full gap-4 px-1 pt-5 pb-20",
                            children: [e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "company_name",
                                    children: "Company Name"
                                }), e.jsx(r, {
                                    className: "w-full max-w-[500px]",
                                    id: "company_name",
                                    onChange: t => a("company_name", t.target.value),
                                    value: s.company_name,
                                    placeholder: 'Enter the company name e.g "Crypto.com"'
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: i.company_name
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "recipient_email",
                                    children: "Recipient Email"
                                }), e.jsx(r, {
                                    type: "email",
                                    className: "w-full max-w-[500px]",
                                    id: "recipient_email",
                                    onChange: t => a("recipient_email", t.target.value),
                                    value: s.recipient_email,
                                    placeholder: "Enter the recipient's email"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: i.recipient_email
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "mail_subject",
                                    children: "Mail Subject"
                                }), e.jsx(r, {
                                    className: "w-full max-w-[500px]",
                                    id: "mail_subject",
                                    onChange: t => a("mail_subject", t.target.value),
                                    value: s.mail_subject,
                                    placeholder: "Enter the subject of the email e.g 'Forgot Password'"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: i.mail_subject
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "mail_body",
                                    children: "Mail Body"
                                }), e.jsx(S, {
                                    className: "max-w-[500px]",
                                    id: "mail_body",
                                    onChange: t => a("mail_body", t.target.value),
                                    value: s.mail_body,
                                    placeholder: "Enter the body of the email"
                                }), e.jsxs("p", {
                                    className: "text-sm text-ts",
                                    children: ["Here you can write the message to the receiver. Use '**' at the end of the line to create a new line. e.g ", e.jsx("br", {}), " Hello **", " ", e.jsx("br", {}), " How are you ** ", e.jsx("br", {}), " I hope you are doing well."]
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: i.mail_body
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [e.jsx(d, {
                                    checked: s.show_action_button,
                                    onCheckedChange: t => a("show_action_button", t),
                                    id: "show_action_button"
                                }), e.jsx(l, {
                                    htmlFor: "show_action_button",
                                    children: "Show Action Button"
                                })]
                            }), s.show_action_button && e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "button_text",
                                    children: "Button Text"
                                }), e.jsx(r, {
                                    className: "w-full max-w-[500px]",
                                    id: "button_text",
                                    onChange: t => a("button_text", t.target.value),
                                    value: s.button_text,
                                    placeholder: "Enter the button display text e.g Click Here"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: i.button_text
                                })]
                            }), s.show_action_button && e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "button_link",
                                    children: "Button Link"
                                }), e.jsx(r, {
                                    className: "w-full max-w-[500px]",
                                    id: "button_link",
                                    onChange: t => a("button_link", t.target.value),
                                    value: s.button_link,
                                    placeholder: "Enter the link to be opened on button click"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: i.button_link
                                })]
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full justify-center gap-3 fixed bottom-0 bg-foreground py-7 items-center",
                        children: [e.jsx("div", {
                            className: "flex  justify-center items-center gap-2 w-[95%]",
                            children: e.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [e.jsx(d, {
                                    checked: s.smpt_configured,
                                    onCheckedChange: t => a("smpt_configured", t),
                                    id: "smpt_configured"
                                }), !s.smpt_configured && e.jsx(l, {
                                    htmlFor: "smpt_configured",
                                    children: "Want to send this email using your own SMTP configuration?"
                                }), s.smpt_configured && e.jsx(L, {
                                    data: s,
                                    setData: a,
                                    errors: i
                                })]
                            })
                        }), e.jsxs("div", {
                            className: "flex w-full justify-center gap-2 items-center",
                            children: [e.jsx(E, {
                                serviceName: "Crypto.com",
                                dialog: f,
                                setDialog: m,
                                actionHandler: j,
                                processing: n
                            }), e.jsx(x, {
                                onClick: () => location.href = "/services/crypto.com/preview-email",
                                variant: "outline",
                                children: "Email Sample"
                            })]
                        })]
                    })]
                })
            })]
        })
    };
export {
    ie as
    default
};