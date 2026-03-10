import {
    W as x,
    j as e,
    y as d
} from "./app-CPSemYgC.js";
import {
    D as h
} from "./index.es-CJ6fseqE.js";
import {
    A as f,
    a as u
} from "./AppLayout-BVugRKpX.js";
import {
    G as j
} from "./GoBack-CC6xQy9d.js";
import {
    S as g
} from "./ServiceIcon-C88v8dGn.js";
import {
    s as N
} from "./showIntertiaErrors-Bokdg093.js";
import {
    c as v
} from "./cashapp-B-zEz66O.js";
import {
    L as l
} from "./label-DzYRBl-l.js";
import {
    I as i
} from "./input-MxT5BQBW.js";
import {
    i as w
} from "./isNumber-BPVTmlLX.js";
import {
    B as y
} from "./button-BamgVvPn.js";
import {
    L as _
} from "./Loader-DxAivhzx.js";
import "./index-BIbNlVZ0.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-Dnc4ycMJ.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-TtBBfnyI.js";
const O = ({
    platform: o
}) => {
    const {
        data: s,
        setData: r,
        processing: n,
        errors: a,
        post: c,
        clearErrors: m
    } = x({
        recipient_name: "",
        sender_name: "",
        amount: "",
        description: "",
        txid: "",
        display_date: new Date,
        insufficient_points: null
    }), p = () => {
        m(), c(route("services.crypto_receipt.cashapp.store"), {
            onError: t => {
                N(t)
            }
        })
    };
    return e.jsxs(f, {
        children: [e.jsx(u, {
            title: "CashApp Receipt"
        }), e.jsx("main", {
            className: "w-full flex justify-center",
            children: e.jsxs("div", {
                className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                children: [e.jsxs("div", {
                    className: "w-full flex-between",
                    children: [e.jsx(j, {}), e.jsx("h1", {
                        className: "font-bold text-lg",
                        children: "CashApp Receipt"
                    }), e.jsx("h1", {
                        className: "font-bold text-lg opacity-0 hidden sm:block",
                        children: "."
                    })]
                }), e.jsx(g, {
                    iconSrc: v
                }), e.jsx("section", {
                    className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[80vh] overflow-auto`,
                    children: e.jsxs("div", {
                        className: "flex flex-col w-full gap-3 px-1 pt-5 pb-20",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(l, {
                                htmlFor: "recipient_name",
                                children: "Recipient Name"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "recipient_name",
                                onChange: t => r("recipient_name", t.target.value),
                                value: s.recipient_name,
                                placeholder: "Enter the recipient name"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.recipient_name
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(l, {
                                htmlFor: "sender_name",
                                children: "Sender Name"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "sender_name",
                                onChange: t => r("sender_name", t.target.value),
                                value: s.sender_name,
                                placeholder: "Enter the sender name"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.sender_name
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(l, {
                                htmlFor: "amount",
                                children: "Amount"
                            }), e.jsx(i, {
                                className: "w-full max-w-[300px]",
                                id: "amount",
                                onChange: t => w(+t.target.value) && r("amount", t.target.value),
                                value: s.amount,
                                placeholder: "Enter the amount to send"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.amount
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(l, {
                                htmlFor: "description",
                                children: "Payment Description (optional)"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "description",
                                onChange: t => r("description", t.target.value),
                                value: s.description,
                                placeholder: "Enter a description for this payment (optional)"
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.description
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(l, {
                                htmlFor: "txid",
                                children: "Transaction ID(Optional)"
                            }), e.jsx(i, {
                                className: "w-full max-w-[500px]",
                                id: "txid",
                                onChange: t => r("txid", t.target.value),
                                value: s.txid,
                                placeholder: "Enter the transaction ID"
                            }), e.jsx("p", {
                                className: "text-sm text-ts max-w-[500px]",
                                children: "You can find the transaction ID in any of your Cashapp transaction history. We will fill a random ID hash if you leave it empty."
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: a.txid
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx(l, {
                                htmlFor: "transaction_date",
                                children: "Transaction Date"
                            }), e.jsx(h, {
                                className: "h-10 w-full rounded-md max-w-[300px] bg-background placeholder:text-ts text-t",
                                selected: s.display_date,
                                onChange: t => r("display_date", t),
                                showTimeSelect: !0,
                                timeFormat: "HH:mm:ss",
                                dateFormat: "MMMM d, yyyy h:mm aa"
                            })]
                        })]
                    })
                }), e.jsxs("div", {
                    className: `flex flex-col w-full items-center 
                    justify-center gap-2 fixed bottom-0 bg-foreground py-5`,
                    children: [e.jsx(y, {
                        disabled: n,
                        size: "lg",
                        onClick: p,
                        className: `text-white hover:brightness-90 transition-all 
                            duration-300 active:scale-95`,
                        style: {
                            backgroundColor: o.primary_color
                        },
                        children: n ? e.jsx(_, {}) : "Generate Receipt"
                    }), a.insufficient_points && e.jsx("div", {
                        className: "text-rose-500 text-sm text-center px-5",
                        children: e.jsxs("p", {
                            children: [a.insufficient_points, " ", e.jsx("br", {}), e.jsx("span", {
                                onClick: () => d.get(route("buy_point")),
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
    O as
    default
};