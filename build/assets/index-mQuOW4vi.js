import {
    W as h,
    j as e,
    y as f
} from "./app-CPSemYgC.js";
import {
    D as u
} from "./index.es-CJ6fseqE.js";
import {
    A as w,
    a as j
} from "./AppLayout-BVugRKpX.js";
import {
    G as _
} from "./GoBack-CC6xQy9d.js";
import {
    S as y
} from "./ServiceIcon-C88v8dGn.js";
import {
    s as b
} from "./showIntertiaErrors-Bokdg093.js";
import {
    b as g
} from "./binance-D4PhrHxU.js";
import {
    B as m
} from "./button-BamgVvPn.js";
import {
    L as N
} from "./Loader-DxAivhzx.js";
import {
    D as k,
    a as v,
    b as C,
    c as D
} from "./dropdown-menu-73g9f9Cf.js";
import {
    L as n
} from "./label-DzYRBl-l.js";
import {
    I as l
} from "./input-MxT5BQBW.js";
import {
    i as c
} from "./isNumber-BPVTmlLX.js";
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
const E = [{
        symbol: "BTC",
        name: "Bitcoin",
        network: "BTC"
    }, {
        symbol: "ETH",
        name: "Ethereum",
        network: "ERC20"
    }, {
        symbol: "USDT",
        name: "Tether",
        network: "TRC20"
    }, {
        symbol: "USDC",
        name: "USD Coin",
        network: "ERC20"
    }, {
        symbol: "BNB",
        name: "Binance Coin",
        network: "BEP20"
    }, {
        symbol: "LTC",
        name: "Litecoin",
        network: "LTC"
    }, {
        symbol: "TRX",
        name: "Tron",
        network: "TRC20"
    }, {
        symbol: "SOL",
        name: "Solana",
        network: "SOL"
    }, {
        symbol: "DOGE",
        name: "Dogecoin",
        network: "DOGE"
    }, {
        symbol: "XRP",
        name: "Ripple",
        network: "XRP"
    }],
    le = ({
        platform: d
    }) => {
        const {
            data: a,
            setData: o,
            processing: r,
            errors: s,
            post: x,
            clearErrors: i
        } = h({
            coin_symbol: null,
            coin_name: null,
            coin_network: null,
            coin_amount: "",
            wallet_address: "",
            network_fee: "",
            txid: "",
            display_date: new Date,
            insufficient_points: null
        }), p = () => {
            i(), x(route("services.crypto_receipt.binance.store"), {
                onError: t => {
                    b(t)
                }
            })
        };
        return e.jsxs(w, {
            children: [e.jsx(j, {
                title: "Binance Receipt"
            }), e.jsx("main", {
                className: "w-full flex justify-center",
                children: e.jsxs("div", {
                    className: `w-[95%] max-w-[650px] flex flex-col 
                    gap-4 items-center pt-5`,
                    children: [e.jsxs("div", {
                        className: "w-full flex-between",
                        children: [e.jsx(_, {}), e.jsx("h1", {
                            className: "font-bold text-lg",
                            children: "Binance Receipt"
                        }), e.jsx("h1", {
                            className: "font-bold text-lg opacity-0 hidden sm:block",
                            children: "."
                        })]
                    }), e.jsx(y, {
                        iconSrc: g
                    }), e.jsx("section", {
                        className: `flex flex-col w-full gap-5 pb-10 
                        max-h-[80vh] overflow-auto`,
                        children: e.jsxs("div", {
                            className: "flex flex-col w-full gap-3 px-1 pt-5 pb-20",
                            children: [e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsxs(k, {
                                    children: [e.jsx(v, {
                                        asChild: !0,
                                        children: e.jsx(m, {
                                            className: "max-w-[200px]",
                                            variant: "outline",
                                            children: a ?.coin_name ? `${a?.coin_name} (${a?.coin_symbol})` : "Select Coin"
                                        })
                                    }), e.jsx(C, {
                                        className: "max-h-[300px] overflow-auto",
                                        children: E.map(t => e.jsx(D, {
                                            onClick: () => {
                                                o({ ...a,
                                                    coin_symbol: t.symbol,
                                                    coin_name: t.name,
                                                    coin_network: t.network
                                                }), i("coin_name")
                                            },
                                            children: `${t.name} (${t.symbol})`
                                        }, t.symbol))
                                    })]
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.coin_name
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(n, {
                                    htmlFor: "coin_amount",
                                    children: "Coin Amount"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[300px]",
                                    id: "coin_amount",
                                    onChange: t => c(+t.target.value) && o("coin_amount", t.target.value),
                                    value: a.coin_amount,
                                    placeholder: `Enter the amount of ${a.coin_name||"coin"} to send`
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.coin_amount
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(n, {
                                    htmlFor: "destination_wallet_address",
                                    children: "Destination Wallet Address"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[500px]",
                                    id: "destination_wallet_address",
                                    onChange: t => o("wallet_address", t.target.value),
                                    value: a.wallet_address,
                                    placeholder: "Enter the destination wallet address"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.wallet_address
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(n, {
                                    htmlFor: "network_fee",
                                    children: "Network Fee"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[300px]",
                                    id: "network_fee",
                                    onChange: t => c(+t.target.value) && o("network_fee", t.target.value),
                                    value: a.network_fee,
                                    placeholder: "Enter the network fee incurred"
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.network_fee
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(n, {
                                    htmlFor: "txid",
                                    children: "Transaction Hash(Optional)"
                                }), e.jsx(l, {
                                    className: "w-full max-w-[500px]",
                                    id: "txid",
                                    onChange: t => o("txid", t.target.value),
                                    value: a.txid,
                                    placeholder: "Enter the transaction hash"
                                }), e.jsx("p", {
                                    className: "text-sm text-ts",
                                    children: "You can find the transaction hash in any of your Binance transaction history. We will fill a dummy hash if you leave it empty."
                                }), e.jsx("p", {
                                    className: "text-rose-500 text-sm",
                                    children: s.txid
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [e.jsx(n, {
                                    htmlFor: "transaction_date",
                                    children: "Transaction Date"
                                }), e.jsx(u, {
                                    className: "h-10 w-full rounded-md max-w-[300px] bg-background placeholder:text-ts text-t",
                                    selected: a.display_date,
                                    onChange: t => o("display_date", t),
                                    showTimeSelect: !0,
                                    timeFormat: "HH:mm:ss",
                                    dateFormat: "MMMM d, yyyy h:mm aa"
                                })]
                            })]
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full items-center justify-center gap-2 fixed bottom-0 bg-foreground py-5",
                        children: [e.jsx(m, {
                            disabled: r,
                            size: "lg",
                            onClick: p,
                            className: `text-white hover:brightness-90 transition-all 
                                                duration-300 active:scale-95`,
                            style: {
                                backgroundColor: d.primary_color
                            },
                            children: r ? e.jsx(N, {}) : "Generate Receipt"
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