import {
    W as h,
    j as e,
    y as f
} from "./app-CPSemYgC.js";
import {
    D as u
} from "./index.es-CJ6fseqE.js";
import {
    A as y,
    a as j
} from "./AppLayout-BVugRKpX.js";
import {
    G as _
} from "./GoBack-CC6xQy9d.js";
import {
    S as b
} from "./ServiceIcon-C88v8dGn.js";
import {
    b as w
} from "./bybit-DyzaUzuj.js";
import {
    D as g,
    a as N,
    b as v,
    c as C
} from "./dropdown-menu-73g9f9Cf.js";
import {
    B as c
} from "./button-BamgVvPn.js";
import {
    L as o
} from "./label-DzYRBl-l.js";
import {
    I as l
} from "./input-MxT5BQBW.js";
import {
    i as m
} from "./isNumber-BPVTmlLX.js";
import {
    s as T
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as D
} from "./Loader-DxAivhzx.js";
import "./index-BIbNlVZ0.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-Dnc4ycMJ.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-Dc_FVRD7.js";
import "./index-TtBBfnyI.js";
import "./index-BUKYvAHl.js";
import "./index-bfqS6E9x.js";
import "./index-CChplcHQ.js";
import "./index-ClHHFVVV.js";
import "./index-D_XWqw2c.js";
import "./index-BN1_Zxci.js";
import "./index-B-GRoRe2.js";
import "./Combination-C3j38xtn.js";
import "./chevron-right-Wmdl5VZJ.js";
import "./check-CsA8fo_3.js";
const k = [{
        symbol: "BTC",
        name: "Bitcoin",
        chainType: "BTC"
    }, {
        symbol: "ETH",
        name: "Ethereum",
        chainType: "ERC20"
    }, {
        symbol: "USDT",
        name: "Tether",
        chainType: "TRC20"
    }, {
        symbol: "USDC",
        name: "USD Coin",
        chainType: "ERC20"
    }, {
        symbol: "BNB",
        name: "Binance Coin",
        chainType: "BEP20"
    }, {
        symbol: "LTC",
        name: "Litecoin",
        chainType: "LTC"
    }, {
        symbol: "TRX",
        name: "Tron",
        chainType: "TRC20"
    }, {
        symbol: "SOL",
        name: "Solana",
        chainType: "SOL"
    }, {
        symbol: "DOGE",
        name: "Dogecoin",
        chainType: "DOGE"
    }, {
        symbol: "XRP",
        name: "Ripple",
        chainType: "XRP"
    }],
    le = ({
        platform: p
    }) => {
        const {
            data: t,
            setData: n,
            processing: i,
            errors: s,
            post: d,
            clearErrors: r
        } = h({
            coin_symbol: null,
            coin_name: null,
            coin_chain: null,
            coin_amount: "",
            wallet_address: "",
            network_fee: "",
            transaction_hash: "",
            display_date: new Date,
            insufficient_points: null
        }), x = () => {
            r(), d(route("services.crypto_receipt.bybit.store"), {
                onError: a => {
                    T(a)
                }
            })
        };
        return e.jsxs(y, {
            children: [e.jsx(j, {
                title: "Bybit Receipt"
            }), e.jsx("main", {
                className: "w-full flex justify-center",
                children: e.jsxs("div", {
                    className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                    children: [e.jsxs("div", {
                        className: "w-full flex-between",
                        children: [e.jsx(_, {}), e.jsx("h1", {
                            className: "font-bold text-lg",
                            children: "Bybit Receipt"
                        }), e.jsx("h1", {
                            className: "font-bold text-lg opacity-0 hidden sm:block",
                            children: "."
                        })]
                    }), e.jsx(b, {
                        iconSrc: w
                    }), e.jsx("section", {
                        className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[80vh] overflow-auto`,
                        children: e.jsxs("div", {
                            className: "flex flex-col w-full gap-3 px-1 pt-5 pb-20",
                            children: [e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsxs(g, {
                                    children: [e.jsx(N, {
                                        asChild: !0,
                                        children: e.jsx(c, {
                                            className: "max-w-[200px]",
                                            variant: "outline",
                                            children: t ?.coin_name ? `${t?.coin_name} (${t?.coin_symbol})` : "Select Coin"
                                        })
                                    }), e.jsx(v, {
                                        className: "max-h-[300px] overflow-auto",
                                        children: k.map(a => e.jsx(C, {
                                            onClick: () => {
                                                n({ ...t,
                                                    coin_symbol: a.symbol,
                                                    coin_name: a.name,
                                                    coin_chain: a.chainType
                                                }), r("coin_name")
                                            },
                                            children: `${a.name} (${a.symbol})`
                                        }, a.symbol))
                                    })]
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.coin_name
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(o, {
                                    htmlFor: "coin_amount",
                                    children: "Coin Amount"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[300px]",
                                    id: "coin_amount",
                                    onChange: a => m(+a.target.value) && n("coin_amount", a.target.value),
                                    value: t.coin_amount,
                                    placeholder: `Enter the amount of ${t.coin_name||"coin"} to send`
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.coin_amount
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(o, {
                                    htmlFor: "destination_wallet_address",
                                    children: "Destination Wallet Address"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[500px]",
                                    id: "destination_wallet_address",
                                    onChange: a => n("wallet_address", a.target.value),
                                    value: t.wallet_address,
                                    placeholder: "Enter the destination wallet address"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.wallet_address
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(o, {
                                    htmlFor: "network_fee",
                                    children: "Network Fee"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[300px]",
                                    id: "network_fee",
                                    onChange: a => m(+a.target.value) && n("network_fee", a.target.value),
                                    value: t.network_fee,
                                    placeholder: "Enter the network fee incurred"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.network_fee
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(o, {
                                    htmlFor: "transaction_hash",
                                    children: "Transaction Hash(Optional)"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[500px]",
                                    id: "transaction_hash",
                                    onChange: a => n("transaction_hash", a.target.value),
                                    value: t.transaction_hash,
                                    placeholder: "Enter the transaction hash"
                                }), e.jsx("p", {
                                    className: "text-sm text-ts",
                                    children: "You can find the transaction hash in any of your Bybit transaction history. We will fill a dummy hash if you leave it empty."
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.transaction_hash
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(o, {
                                    htmlFor: "transaction_date",
                                    children: "Transaction Date"
                                }), e.jsx(u, {
                                    className: "h-10 w-full rounded-md max-w-[300px] bg-background placeholder:text-ts text-t",
                                    selected: t.display_date,
                                    onChange: a => n("display_date", a),
                                    showTimeSelect: !0,
                                    timeFormat: "HH:mm:ss",
                                    dateFormat: "MMMM d, yyyy h:mm aa"
                                })]
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full items-center justify-center gap-2 fixed bottom-0 bg-foreground py-5",
                        children: [e.jsx(c, {
                            disabled: i,
                            size: "lg",
                            onClick: x,
                            className: `text-white hover:brightness-90 transition-all 
                            duration-300 active:scale-95`,
                            style: {
                                backgroundColor: p.primary_color
                            },
                            children: i ? e.jsx(D, {}) : "Generate Receipt"
                        }), s.insufficient_points && e.jsx("div", {
                            className: "text-rose-500 text-sm text-center px-5",
                            children: e.jsxs("p", {
                                children: [s.insufficient_points, " ", e.jsx("br", {}), e.jsx("span", {
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
    le as
    default
};