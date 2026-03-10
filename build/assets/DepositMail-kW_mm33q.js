import {
    W as f,
    r as h,
    j as e,
    y as v
} from "./app-CPSemYgC.js";
import {
    A as j,
    a as g
} from "./AppLayout-BVugRKpX.js";
import {
    G as w
} from "./GoBack-CC6xQy9d.js";
import {
    S as N
} from "./SendEmailModal-D5obLEYB.js";
import {
    s as _
} from "./showIntertiaErrors-Bokdg093.js";
import {
    t as b
} from "./index-Dnc4ycMJ.js";
import {
    I as r
} from "./input-MxT5BQBW.js";
import {
    L as i
} from "./label-DzYRBl-l.js";
import {
    D as C,
    a as y,
    b as E,
    c as D
} from "./dropdown-menu-73g9f9Cf.js";
import {
    B as n
} from "./button-BamgVvPn.js";
import {
    c as S
} from "./coinsData-DP2R8dhX.js";
import {
    i as m
} from "./isNumber-BPVTmlLX.js";
import {
    S as q
} from "./ServiceIcon-C88v8dGn.js";
import {
    c as F
} from "./coinbase-BiTggD6g.js";
import {
    T as M
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
    platform: k
}) => {
    const {
        data: s,
        setData: t,
        processing: c,
        errors: o,
        post: p,
        clearErrors: x
    } = f({
        coin: null,
        coin_name: "",
        coin_amount: "",
        fiat_equivalent: "",
        recipient_email: "",
        custom_message: ""
    }), [u, l] = h.useState(!1), d = () => {
        x(), p(route("coinbase.send_email_deposit"), {
            onSuccess: () => {
                b.success("Flash Mail Sent Successfully"), l(!1)
            },
            onError: a => {
                _(a), l(!1)
            }
        })
    };
    return e.jsxs(j, {
        children: [e.jsx(g, {
            title: "Coinbase Flash Mail"
        }), e.jsx("main", {
            className: "w-full flex justify-center",
            children: e.jsxs("div", {
                className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                children: [e.jsxs("div", {
                    className: "w-full flex-between",
                    children: [e.jsx(w, {}), e.jsx("h1", {
                        className: "font-bold text-lg",
                        children: "Coinbase Flash Email"
                    }), e.jsx("h1", {
                        className: "font-bold text-lg opacity-0 hidden sm:block",
                        children: "."
                    })]
                }), e.jsx(q, {
                    onClick: () => v.get(route("services.coinbase")),
                    iconSrc: F
                }), e.jsx("section", {
                    className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[80vh] overflow-auto`,
                    children: e.jsxs("div", {
                        className: "flex flex-col w-full gap-4 px-1 pt-5 pb-20",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsxs(C, {
                                children: [e.jsx(y, {
                                    asChild: !0,
                                    children: e.jsx(n, {
                                        className: "max-w-[200px]",
                                        variant: "outline",
                                        children: s.coin || "Select Coin"
                                    })
                                }), e.jsx(E, {
                                    className: "max-h-[300px] overflow-auto",
                                    children: S.map(a => e.jsx(D, {
                                        onClick: () => t({ ...s,
                                            coin: a.value.toUpperCase(),
                                            coin_name: a.name.toUpperCase()
                                        }),
                                        children: a.name
                                    }, a.value))
                                })]
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.coin
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(i, {
                                htmlFor: "coin_amount",
                                children: "Coin Amount"
                            }), e.jsx(r, {
                                className: "w-full max-w-[300px]",
                                id: "coin_amount",
                                onChange: a => m(+a.target.value) && t("coin_amount", a.target.value),
                                value: s.coin_amount,
                                placeholder: `Enter the amount of ${s.coin||"coin"} to send`
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.coin_amount
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(i, {
                                htmlFor: "fiat_equivalent",
                                children: "Coin amount fiat equvalent (USD)"
                            }), e.jsx(r, {
                                className: "w-full max-w-[500px]",
                                id: "fiat_equivalent",
                                onChange: a => m(+a.target.value) && t("fiat_equivalent", a.target.value),
                                value: s.fiat_equivalent,
                                placeholder: "Enter fiat equvalent in Dollar"
                            }), e.jsx("p", {
                                className: "text-ts text-sm font-semibold",
                                children: "This is where you enter how much the coin amount is worth in Dollar."
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.fiat_equivalent
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(i, {
                                htmlFor: "recipient_email",
                                children: "Recipient Email"
                            }), e.jsx(r, {
                                type: "email",
                                className: "w-full max-w-[500px]",
                                id: "recipient_email",
                                onChange: a => t("recipient_email", a.target.value),
                                value: s.recipient_email,
                                placeholder: "Enter the recipient's email"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: o.recipient_email
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(i, {
                                htmlFor: "custom_message",
                                children: "Custom message"
                            }), e.jsx(M, {
                                id: "custom_message",
                                onChange: a => t("custom_message", a.target.value),
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
                    children: [e.jsx(N, {
                        serviceName: "Coinbase",
                        dialog: u,
                        setDialog: l,
                        actionHandler: d,
                        processing: c
                    }), e.jsx(n, {
                        onClick: () => location.href = "/services/coinbase/preview-email",
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