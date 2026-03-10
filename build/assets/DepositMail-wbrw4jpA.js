import {
    W as u,
    r as f,
    j as e,
    y as h
} from "./app-CPSemYgC.js";
import {
    A as j,
    a as g
} from "./AppLayout-BVugRKpX.js";
import {
    G as v
} from "./GoBack-CC6xQy9d.js";
import {
    S as w
} from "./SendEmailModal-D5obLEYB.js";
import {
    s as N
} from "./showIntertiaErrors-Bokdg093.js";
import {
    t as b
} from "./index-Dnc4ycMJ.js";
import {
    I as r
} from "./input-MxT5BQBW.js";
import {
    L as l
} from "./label-DzYRBl-l.js";
import {
    D as _,
    a as y,
    b as E,
    c as C
} from "./dropdown-menu-73g9f9Cf.js";
import {
    B as m
} from "./button-BamgVvPn.js";
import {
    c as S
} from "./coinsData-DP2R8dhX.js";
import {
    i as D
} from "./isNumber-BPVTmlLX.js";
import {
    S as M
} from "./ServiceIcon-C88v8dGn.js";
import {
    b as F
} from "./binance-D4PhrHxU.js";
import {
    T as k
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
const fe = ({
    platform: B
}) => {
    const {
        data: a,
        setData: t,
        processing: n,
        errors: o,
        post: c,
        clearErrors: p
    } = u({
        coin: null,
        coin_amount: "",
        recipient_email: "",
        custom_message: ""
    }), [x, i] = f.useState(!1), d = () => {
        p(), c(route("binance.send_email_deposit"), {
            onSuccess: () => {
                b.success("Flash Mail Sent Successfully"), i(!1)
            },
            onError: s => {
                N(s), i(!1)
            }
        })
    };
    return e.jsxs(j, {
        children: [e.jsx(g, {
            title: "Binance Flash Mail"
        }), e.jsx("main", {
            className: "w-full flex justify-center",
            children: e.jsxs("div", {
                className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                children: [e.jsxs("div", {
                    className: "w-full flex-between",
                    children: [e.jsx(v, {}), e.jsx("h1", {
                        className: "font-bold text-lg",
                        children: "Binance Flash Email"
                    }), e.jsx("h1", {
                        className: "font-bold text-lg opacity-0 hidden sm:block",
                        children: "."
                    })]
                }), e.jsx(M, {
                    onClick: () => h.get(route("services.binance")),
                    iconSrc: F
                }), e.jsx("section", {
                    className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[80vh] overflow-auto`,
                    children: e.jsxs("div", {
                        className: "flex flex-col w-full gap-4 px-1 pt-5 pb-20",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsxs(_, {
                                children: [e.jsx(y, {
                                    asChild: !0,
                                    children: e.jsx(m, {
                                        className: "max-w-[200px]",
                                        variant: "outline",
                                        children: a.coin || "Select Coin"
                                    })
                                }), e.jsx(E, {
                                    className: "max-h-[300px] overflow-auto",
                                    children: S.map(s => e.jsx(C, {
                                        onClick: () => t("coin", s.value.toUpperCase()),
                                        children: s.name
                                    }, s.value))
                                })]
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.coin
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(l, {
                                htmlFor: "coin_amount",
                                children: "Coin Amount"
                            }), e.jsx(r, {
                                className: "w-full max-w-[300px]",
                                id: "coin_amount",
                                onChange: s => D(+s.target.value) && t("coin_amount", s.target.value),
                                value: a.coin_amount,
                                placeholder: `Enter the amount of ${a.coin||"coin"} to send`
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.coin_amount
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
                                onChange: s => t("recipient_email", s.target.value),
                                value: a.recipient_email,
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
                            }), e.jsx(k, {
                                id: "custom_message",
                                onChange: s => t("custom_message", s.target.value),
                                value: a.custom_message,
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
                    children: [e.jsx(w, {
                        serviceName: "Binance",
                        dialog: x,
                        setDialog: i,
                        actionHandler: d,
                        processing: n
                    }), e.jsx(m, {
                        onClick: () => location.href = "/services/binance/preview-email",
                        variant: "outline",
                        children: "Email Sample"
                    })]
                })]
            })
        })]
    })
};
export {
    fe as
    default
};