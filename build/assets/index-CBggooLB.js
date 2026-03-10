import {
    W as p,
    j as e,
    y as f
} from "./app-CPSemYgC.js";
import {
    D as h
} from "./index.es-CJ6fseqE.js";
import {
    A as u,
    a as j
} from "./AppLayout-BVugRKpX.js";
import {
    G as y
} from "./GoBack-CC6xQy9d.js";
import {
    p as g
} from "./paypal-CuuRI83g.js";
import {
    S as N
} from "./ServiceIcon-C88v8dGn.js";
import {
    B as v
} from "./button-BamgVvPn.js";
import {
    L as _
} from "./Loader-DxAivhzx.js";
import {
    s as w
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as r
} from "./label-DzYRBl-l.js";
import {
    I as i
} from "./input-MxT5BQBW.js";
import {
    i as o
} from "./isNumber-BPVTmlLX.js";
import "./index-BIbNlVZ0.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-Dnc4ycMJ.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-TtBBfnyI.js";
const W = ({
    platform: c
}) => {
    const {
        data: s,
        setData: l,
        processing: n,
        errors: a,
        post: m,
        clearErrors: x
    } = p({
        recipient_name: "",
        amount: "",
        fee: "",
        txid: "",
        card_type: "Visa",
        card_last_four: "2234",
        display_date: new Date,
        insufficient_points: null
    }), d = () => {
        x(), m(route("services.crypto_receipt.paypal.store"), {
            onError: t => {
                w(t)
            }
        })
    };
    return e.jsxs(u, {
        children: [e.jsx(j, {
            title: "Paypal Receipt"
        }), e.jsx("main", {
            className: "w-full flex justify-center",
            children: e.jsxs("div", {
                className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                children: [e.jsxs("div", {
                    className: "w-full flex-between",
                    children: [e.jsx(y, {}), e.jsx("h1", {
                        className: "font-bold text-lg",
                        children: "Paypal Receipt"
                    }), e.jsx("h1", {
                        className: "font-bold text-lg opacity-0 hidden sm:block",
                        children: "."
                    })]
                }), e.jsx(N, {
                    iconSrc: g
                }), e.jsx("section", {
                    className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[80vh] overflow-auto`,
                    children: e.jsxs("div", {
                        className: "flex flex-col w-full gap-3 px-1 pt-5 pb-20",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(r, {
                                htmlFor: "recipient_name",
                                children: "Recipient Name"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "recipient_name",
                                onChange: t => l("recipient_name", t.target.value),
                                value: s.recipient_name,
                                placeholder: "Enter the recipient name"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.recipient_name
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(r, {
                                htmlFor: "amount",
                                children: "Amount"
                            }), e.jsx(i, {
                                className: "w-full max-w-[300px]",
                                id: "amount",
                                onChange: t => o(+t.target.value) && l("amount", t.target.value),
                                value: s.amount,
                                placeholder: "Enter the amount to send"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.amount
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(r, {
                                htmlFor: "fee",
                                children: "Fee"
                            }), e.jsx(i, {
                                className: "w-full max-w-[300px]",
                                id: "fee",
                                onChange: t => o(+t.target.value) && l("fee", t.target.value),
                                value: s.fee,
                                placeholder: "Enter the fee amount"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.fee
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(r, {
                                htmlFor: "card_last_four",
                                children: "Card Last Four (Optional)"
                            }), e.jsx(i, {
                                maxLength: 4,
                                className: "w-full max-w-[300px]",
                                id: "card_last_four",
                                onChange: t => o(+t.target.value) && l("card_last_four", t.target.value),
                                value: s.card_last_four,
                                placeholder: "Enter the card last four digits"
                            }), e.jsx("p", {
                                className: "text-sm text-ts max-w-[300px]",
                                children: 'The last four digits of the card used for the transaction. we will use "2234" if left empty.'
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.card_last_four
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(r, {
                                htmlFor: "card_type",
                                children: "Card Type (Optional)"
                            }), e.jsx(i, {
                                className: "w-full max-w-[300px]",
                                id: "card_type",
                                onChange: t => l("card_type", t.target.value),
                                value: s.card_type,
                                placeholder: "Enter the card type"
                            }), e.jsx("p", {
                                className: "text-sm text-ts max-w-[300px]",
                                children: "The card type is used to identify the payment method used for the transaction. Options include Visa, Master, Amex, etc."
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.card_type
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(r, {
                                htmlFor: "txid",
                                children: "Transaction ID(Optional)"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "txid",
                                onChange: t => l("txid", t.target.value),
                                value: s.txid,
                                placeholder: "Enter the transaction ID"
                            }), e.jsx("p", {
                                className: "text-sm text-ts max-w-[500px]",
                                children: "You can find the transaction ID in any of your Paypal transaction history. We will fill a random ID hash if you leave it empty."
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.txid
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(r, {
                                htmlFor: "transaction_date",
                                children: "Transaction Date"
                            }), e.jsx(h, {
                                className: "h-10 w-full rounded-md max-w-[300px] bg-background placeholder:text-ts text-t",
                                selected: s.display_date,
                                onChange: t => l("display_date", t),
                                showTimeSelect: !0,
                                timeFormat: "HH:mm:ss",
                                dateFormat: "MMMM d, yyyy h:mm aa"
                            })]
                        })]
                    })
                }), e.jsxs("div", {
                    className: `flex flex-col w-full items-center 
                    justify-center gap-2 fixed bottom-0 bg-foreground py-5`,
                    children: [e.jsx(v, {
                        disabled: n,
                        size: "lg",
                        onClick: d,
                        className: `text-white hover:brightness-90 transition-all 
                                                                    duration-300 active:scale-95`,
                        style: {
                            backgroundColor: c.primary_color
                        },
                        children: n ? e.jsx(_, {}) : "Generate Receipt"
                    }), a.insufficient_points && e.jsx("div", {
                        className: "text-rose-500 text-sm text-center px-5",
                        children: e.jsxs("p", {
                            children: [a.insufficient_points, " ", e.jsx("br", {}), e.jsx("span", {
                                onClick: () => f.get(route("buy_point")),
                                className: "underline text-lime-400 font-bold cursor-pointer",
                                children: "Click here to buy more points."
                            })]
                        })
                    })]
                })]
            })
        })]
    })
};
export {
    W as
    default
};