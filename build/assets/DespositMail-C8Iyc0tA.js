import {
    W as u,
    r as h,
    j as e,
    y as f
} from "./app-CPSemYgC.js";
import {
    A as y,
    a as j
} from "./AppLayout-BVugRKpX.js";
import {
    G as g
} from "./GoBack-CC6xQy9d.js";
import {
    S as v
} from "./SendEmailModal-D5obLEYB.js";
import {
    s as N
} from "./showIntertiaErrors-Bokdg093.js";
import {
    t as b
} from "./index-Dnc4ycMJ.js";
import {
    I as m
} from "./input-MxT5BQBW.js";
import {
    L as l
} from "./label-DzYRBl-l.js";
import {
    D as w,
    a as _,
    b as S,
    c as D
} from "./dropdown-menu-73g9f9Cf.js";
import {
    B as n
} from "./button-BamgVvPn.js";
import {
    i as C
} from "./isNumber-BPVTmlLX.js";
import {
    S as E
} from "./ServiceIcon-C88v8dGn.js";
import {
    p as R
} from "./paypal-CuuRI83g.js";
import {
    T as F
} from "./textarea-D5O83yDd.js";
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
import "./index-Dc_FVRD7.js";
import "./index-BUKYvAHl.js";
import "./index-bfqS6E9x.js";
import "./index-CChplcHQ.js";
import "./index-ClHHFVVV.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-D_XWqw2c.js";
import "./index-BN1_Zxci.js";
import "./index-B-GRoRe2.js";
import "./chevron-right-Wmdl5VZJ.js";
import "./check-CsA8fo_3.js";
const P = [{
        name: "United States Dollar",
        code: "USD",
        symbol: "$"
    }, {
        name: "Euro",
        code: "EUR",
        symbol: "€"
    }, {
        name: "British Pound Sterling",
        code: "GBP",
        symbol: "£"
    }, {
        name: "Japanese Yen",
        code: "JPY",
        symbol: "¥"
    }, {
        name: "Australian Dollar",
        code: "AUD",
        symbol: "$"
    }, {
        name: "Canadian Dollar",
        code: "CAD",
        symbol: "$"
    }, {
        name: "Swiss Franc",
        code: "CHF",
        symbol: "Fr"
    }, {
        name: "Philippine Peso",
        code: "PHP",
        symbol: "₱"
    }, {
        name: "Chinese Yuan",
        code: "CNY",
        symbol: "¥"
    }, {
        name: "Indian Rupee",
        code: "INR",
        symbol: "₹"
    }, {
        name: "South Korean Won",
        code: "KRW",
        symbol: "₩"
    }, {
        name: "Brazilian Real",
        code: "BRL",
        symbol: "R$"
    }, {
        name: "Nigerian Naira",
        code: "NGN",
        symbol: "₦"
    }, {
        name: "South African Rand",
        code: "ZAR",
        symbol: "R"
    }, {
        name: "Russian Ruble",
        code: "RUB",
        symbol: "₽"
    }, {
        name: "Mexican Peso",
        code: "MXN",
        symbol: "$"
    }, {
        name: "Singapore Dollar",
        code: "SGD",
        symbol: "$"
    }, {
        name: "New Zealand Dollar",
        code: "NZD",
        symbol: "$"
    }, {
        name: "Swedish Krona",
        code: "SEK",
        symbol: "kr"
    }, {
        name: "Norwegian Krone",
        code: "NOK",
        symbol: "kr"
    }],
    ue = ({
        platform: M
    }) => {
        const {
            data: s,
            setData: r,
            processing: i,
            errors: o,
            post: c,
            clearErrors: p
        } = u({
            sender_name: "",
            receiver_name: "",
            amount: "",
            currency_code: "",
            currency_symbol: "",
            recipient_email: "",
            custom_message: ""
        }), [d, t] = h.useState(!1), x = () => {
            p(), c(route("paypal.send_email_deposit"), {
                onSuccess: () => {
                    b.success("Flash Mail Sent Successfully"), t(!1)
                },
                onError: a => {
                    N(a), t(!1)
                }
            })
        };
        return e.jsxs(y, {
            children: [e.jsx(j, {
                title: "Paypal Deposit Flash Mail"
            }), e.jsx("main", {
                className: "w-full flex justify-center",
                children: e.jsxs("div", {
                    className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                    children: [e.jsxs("div", {
                        className: "w-full flex-between",
                        children: [e.jsx(g, {}), e.jsx("h1", {
                            className: "font-bold text-lg",
                            children: "Paypal Flash Email"
                        }), e.jsx("h1", {
                            className: "font-bold text-lg opacity-0 hidden sm:block",
                            children: "."
                        })]
                    }), e.jsx(E, {
                        onClick: () => f.get(route("services.paypal")),
                        iconSrc: R
                    }), e.jsx("section", {
                        className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[75vh] overflow-auto`,
                        children: e.jsxs("div", {
                            className: "flex flex-col w-full gap-4 px-1 pt-5 pb-20",
                            children: [e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsxs(w, {
                                    children: [e.jsx(_, {
                                        asChild: !0,
                                        children: e.jsx(n, {
                                            className: "max-w-[200px]",
                                            variant: "outline",
                                            children: s.currency_code ? `${s.currency_code} (${s.currency_symbol})` : "Select Currency"
                                        })
                                    }), e.jsx(S, {
                                        className: "max-h-[300px] overflow-auto",
                                        children: P.map(a => e.jsx(D, {
                                            onClick: () => r({ ...s,
                                                currency_code: a.code.toUpperCase(),
                                                currency_symbol: a.symbol.toUpperCase()
                                            }),
                                            children: a.name
                                        }, a.code))
                                    })]
                                }), e.jsxs("p", {
                                    className: "text-rose-500 text-sm",
                                    children: [o.currency_code, " ", e.jsx("br", {}), o.currency_symbol]
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "amount",
                                    children: "Amount to tranfer"
                                }), e.jsx(m, {
                                    className: "w-full max-w-[300px]",
                                    id: "amount",
                                    onChange: a => C(+a.target.value) && r("amount", a.target.value),
                                    value: s.amount,
                                    placeholder: "Enter the amount to send"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: o.amount
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "sender_name",
                                    children: "Sender Name"
                                }), e.jsx(m, {
                                    className: "w-full max-w-[500px]",
                                    id: "sender_name",
                                    onChange: a => r("sender_name", a.target.value),
                                    value: s.sender_name,
                                    placeholder: "Enter the sender's name"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: o.sender_name
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "receiver_name",
                                    children: "Receiver Name"
                                }), e.jsx(m, {
                                    className: "w-full max-w-[500px]",
                                    id: "receiver_name",
                                    onChange: a => r("receiver_name", a.target.value),
                                    value: s.receiver_name,
                                    placeholder: "Enter the receiver's name"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: o.receiver_name
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "recipient_email",
                                    children: "Recipient Email"
                                }), e.jsx(m, {
                                    type: "email",
                                    className: "w-full max-w-[500px]",
                                    id: "recipient_email",
                                    onChange: a => r("recipient_email", a.target.value),
                                    value: s.recipient_email,
                                    placeholder: "Enter the recipient's email"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: o.recipient_email
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(l, {
                                    htmlFor: "custom_message",
                                    children: "Custom message"
                                }), e.jsx(F, {
                                    id: "custom_message",
                                    onChange: a => r("custom_message", a.target.value),
                                    value: s.custom_message,
                                    placeholder: "Enter a custom message for the recipient"
                                }), e.jsxs("p", {
                                    className: "text-sm text-ts",
                                    children: ["Here you can write a custom message to the receiver. Example:", " ", e.jsxs("span", {
                                        className: "font-semibold",
                                        children: [" ", "For this transaction to be fully completed you need make a payment of 750 USDT this wallet address: gni8vw9buwvi8v9bw98ivuw89hv8w9."]
                                    })]
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: o.custom_message
                                })]
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "flex w-full justify-center gap-2 fixed bottom-0 bg-foreground py-7",
                        children: [e.jsx(v, {
                            serviceName: "Paypal",
                            dialog: d,
                            setDialog: t,
                            actionHandler: x,
                            processing: i
                        }), e.jsx(n, {
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
    ue as
    default
};