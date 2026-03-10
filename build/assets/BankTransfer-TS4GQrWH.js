import {
    j as e,
    r as l,
    h as A,
    W as E,
    y as F,
    a as R
} from "./app-CPSemYgC.js";
import {
    A as U,
    a as q
} from "./AppLayout-BVugRKpX.js";
import {
    d as D
} from "./index-CGcBZyi7.js";
import {
    L as P,
    a as L
} from "./index-C8Sgx4sA.js";
import {
    A as w,
    a as N
} from "./avatar-BLCVZC4Y.js";
import {
    b as H
} from "./index-QFAS8Pek.js";
import {
    c as k
} from "./index-BIbNlVZ0.js";
import {
    b as v
} from "./index-DR2HD5r8.js";
import {
    S as V
} from "./ServiceIcon-C88v8dGn.js";
import {
    s as B
} from "./showError-ZlrsJsc2.js";
import {
    $ as z,
    L as W
} from "./Loader-DxAivhzx.js";
import {
    o as S
} from "./icon-mLvMNoaA.js";
import {
    X as $
} from "./x-Bf_gKvvP.js";
import {
    S as T
} from "./search-BS5sFJC3.js";
import {
    t as M
} from "./index-Dnc4ycMJ.js";
import {
    s as X
} from "./showIntertiaErrors-Bokdg093.js";
import {
    i as I
} from "./isNumber-BPVTmlLX.js";
import {
    B as _
} from "./button-BamgVvPn.js";
import {
    f as K
} from "./formatNumber-Ce-00Vs2.js";
import {
    e as G,
    f as J
} from "./index-CX8Cjk5s.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./iconBase-BweG_smQ.js";
import "./index-BUKYvAHl.js";
import "./index-TtBBfnyI.js";
const O = () => e.jsx("div", {
        className: `w-full inset-0 fixed z-10 bg-background 
            flex flex-col items-center animate-in duration-700 justify-center`,
        children: e.jsx(z, {
            visible: !0,
            height: "80",
            width: "80",
            ariaLabel: "color-ring-loading",
            wrapperClass: "color-ring-wrapper",
            colors: ["#01b876", "#01b876", "#01b876", "#abbd81", "#01b876"]
        })
    }),
    Q = ({
        bank: a,
        onClose: r,
        setSelectedBank: t
    }) => e.jsxs("div", {
        onClick: () => {
            t(a), r && r()
        },
        className: "flex items-center gap-2 border-b border-b-gray-100 py-2",
        children: [e.jsx(w, {
            className: "h-8 w-8",
            children: e.jsx(N, {
                className: "bg-[#01b876]/10 h-8 w-8",
                children: e.jsx(v, {
                    color: "#01b876",
                    size: 16
                })
            })
        }), e.jsx("p", {
            children: a ?.name || "Bank Name"
        })]
    }),
    Y = "/build/assets/Access_Bank_Logo-2JMKWfTq.png",
    Z = "/build/assets/UBA-logo-5-BNh6mDvw.png",
    ee = "/build/assets/zenith-bank-logo_1-BrDKT8qt.png",
    se = "/build/assets/GTBank_logo.svg-lwLcXLhz.png",
    ae = "/build/assets/first-bank-nigeria-BhT50Cpj.svg",
    re = ({
        onClose: a,
        setSelectedBank: r
    }) => {
        const [t, d] = l.useState(), [u, n] = l.useState(t || []), [h, p] = l.useState(!0), [x, m] = l.useState(""), [c, b] = l.useState([]), g = ["opay", "access bank", "united bank for africa", "first bank plc", "guaranty trust bank", "zenith bank plc"];
        l.useEffect(() => {
            const s = t ?.slice().filter(i => g.includes(i.name.toLocaleLowerCase()));
            b(s || [])
        }, [t]), l.useEffect(() => {
            (async () => {
                try {
                    p(!0);
                    const {
                        data: i
                    } = await A.get("/api/banks/ng"), o = i.data;
                    d(o)
                } catch (i) {
                    B(i).show(), a && a()
                } finally {
                    p(!1)
                }
            })()
        }, []), l.useEffect(() => {
            n(t || [])
        }, [t]);
        const j = s => {
                const i = s.target.value,
                    o = t ?.slice().filter(f => f.name.toLowerCase().includes(i.toLowerCase()));
                n(o || []), m(i)
            },
            y = s => s.name.toLocaleLowerCase().includes("opay") ? S : s.name.toLocaleLowerCase().includes("access bank") ? Y : s.name.toLocaleLowerCase().includes("united bank for africa") ? Z : s.name.toLocaleLowerCase().includes("zenith bank plc") ? ee : s.name.toLocaleLowerCase().includes("guaranty trust bank") ? se : s.name.toLocaleLowerCase().includes("first bank plc") ? ae : S;
        return h ? e.jsx(O, {}) : e.jsx("div", {
            className: `w-full inset-0 fixed z-10 bg-background 
            flex flex-col items-center animate-in duration-700`,
            children: e.jsxs("div", {
                className: `w-[90%] max-w-[650px] flex flex-col gap-4 
                items-center py-3`,
                children: [e.jsxs("div", {
                    onClick: a,
                    className: "flex items-center gap-2 w-full",
                    children: [e.jsx($, {
                        className: "text-ts"
                    }), e.jsx("p", {
                        children: "Select Bank"
                    })]
                }), e.jsxs("div", {
                    className: `flex w-full items-center bg-[#f8f8fa] dark:bg-foreground 
                    px-3 rounded-md`,
                    children: [e.jsx(T, {
                        size: 16,
                        className: "text-gray-400"
                    }), e.jsx("input", {
                        className: `border-0 focus-visible:ring-0 w-full placeholder:text-gray-400 
                        bg-[#f8f8fa] dark:bg-foreground`,
                        type: "text",
                        placeholder: "Search Bank Name",
                        name: "",
                        id: "",
                        value: x,
                        onChange: j
                    })]
                }), x.trim().length <= 0 && e.jsxs("div", {
                    className: "flex flex-col w-full gap-2",
                    children: [e.jsx("p", {
                        children: "Frequently Used Bank"
                    }), e.jsx("div", {
                        className: `grid grid-cols-3 gap-4 w-full bg-[#f8f8fa] dark:bg-foreground 
                            rounded-lg p-3 justify-center`,
                        children: c.map(s => e.jsx(V, {
                            iconClassName: "h-[40px] w-[40px]",
                            iconSrc: y(s),
                            label: s.name,
                            onClick: () => {
                                r(s), a && a()
                            }
                        }, s.code))
                    })]
                }), e.jsx("div", {
                    className: "flex flex-col gap-2 w-full max-h-[450px] overflow-auto",
                    children: u ?.map(s => e.jsx(Q, {
                        setSelectedBank: r,
                        onClose: a,
                        bank: s
                    }, s.id))
                })]
            })
        })
    },
    te = ({
        onClose: a,
        verificationData: r
    }) => {
        const {
            data: t,
            setData: d,
            processing: u,
            errors: n,
            post: h,
            clearErrors: p
        } = E({
            amount: "",
            recipient_name: r ?.recipient_name || "",
            recipient_bank_name: r ?.recipient_bank_name || "",
            recipient_account_number: r ?.recipient_account_number || "",
            remark: "",
            insufficient_points: null
        }), x = ["500", "1000", "2000", "5000", "10000", "20000"], m = () => {
            p(), h(route("opay.bank_transfer_new"), {
                onSuccess: () => {
                    M.success("Successful")
                },
                onError: c => {
                    X(c)
                }
            })
        };
        return e.jsxs("div", {
            className: `w-full inset-0 fixed z-10 bg-[#f8f8fa] 
            dark:bg-background flex flex-col items-center animate-in duration-700`,
            children: [e.jsx("div", {
                className: "w-full bg-background flex justify-center",
                children: e.jsx("div", {
                    onClick: a,
                    className: "w-[95%] max-w-[650px] flex-between py-5",
                    children: e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [e.jsx(P, {
                            className: "text-ts"
                        }), e.jsx("p", {
                            children: "Transfer to Bank Account"
                        })]
                    })
                })
            }), e.jsxs("div", {
                className: `w-[90%] max-w-[650px] flex flex-col gap-4 
                items-center py-3`,
                children: [e.jsxs("div", {
                    className: "flex items-center gap-3 w-full",
                    children: [e.jsx(w, {
                        children: e.jsx(N, {
                            className: "bg-[#01b876]/10",
                            children: e.jsx(v, {
                                color: "#01b876",
                                size: 20
                            })
                        })
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx("p", {
                            className: "font-bold text-sm",
                            children: r ?.recipient_name
                        }), e.jsxs("p", {
                            className: "text-ts text-sm",
                            children: [r ?.recipient_account_number, " ", r ?.recipient_bank_name]
                        })]
                    })]
                }), e.jsxs("div", {
                    className: `flex w-full bg-white dark:bg-foreground 
                    rounded-lg p-3 flex-col gap-3`,
                    children: [e.jsx("p", {
                        className: "font-bold",
                        children: "Amount"
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1 w-full",
                        children: [e.jsx("div", {
                            className: "border-b border-b-gray-100 dark:border-b-gray-700 py-2 w-full",
                            children: e.jsxs("div", {
                                className: "flex items-center gap-1",
                                children: [e.jsx("p", {
                                    className: "text-2xl",
                                    children: "₦"
                                }), e.jsx("input", {
                                    className: `p-0 py-1 border-0 focus-visible:ring-0 w-full 
                                placeholder:text-gray-400 text-2xl bg-white dark:bg-foreground`,
                                    type: "text",
                                    placeholder: "100.00-5,000,000",
                                    name: "",
                                    id: "",
                                    value: t.amount,
                                    onChange: c => I(+c.target.value) && d("amount", c.target.value)
                                })]
                            })
                        }), n.amount && e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: n.amount
                        }), n.insufficient_points && e.jsxs("p", {
                            className: "text-rose-500 text-sm",
                            children: [e.jsx("span", {
                                children: n.insufficient_points
                            }), e.jsx("br", {}), e.jsx("span", {
                                onClick: () => F.get(route("buy_point")),
                                className: "underline text-lime-400 font-bold cursor-pointer",
                                children: "Click here to buy more points."
                            })]
                        })]
                    }), e.jsx("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: x.map(c => e.jsxs(_, {
                            className: k("w-full text-sm h-[40px] bg-foreground dark:bg-background text-ts hover:bg-foreground", {
                                "bg-green-500/20 dark:bg-green-500/20 text-[#01b876]": t.amount == c
                            }),
                            onClick: () => d("amount", c),
                            size: "sm",
                            children: ["₦", K(Number(c))]
                        }, c))
                    })]
                }), e.jsxs("div", {
                    className: `flex w-full bg-white dark:bg-foreground 
                    rounded-lg p-3 flex-col gap-2 mb-5`,
                    children: [e.jsx("p", {
                        className: "font-bold",
                        children: "Remark"
                    }), e.jsx("div", {
                        className: "border-b border-b-gray-100 dark:border-b-gray-700 py-2 w-full",
                        children: e.jsx("input", {
                            value: t.remark,
                            onChange: c => d("remark", c.target.value),
                            className: `p-0 py-1 border-0 focus-visible:ring-0 w-full 
                                placeholder:text-gray-400 bg-white dark:bg-foreground placeholder:text-sm text-sm`,
                            type: "text",
                            placeholder: "What's this for?(optional)",
                            name: "",
                            id: ""
                        })
                    }), e.jsxs("div", {
                        className: "flex w-full items-center gap-2",
                        children: [e.jsx(_, {
                            className: k("w-full text-sm h-[40px] bg-foreground dark:bg-background text-ts hover:bg-foreground"),
                            onClick: () => d("remark", "Purchase"),
                            size: "sm",
                            children: "Purchase"
                        }), e.jsx(_, {
                            className: k("w-full text-sm h-[40px] bg-foreground dark:bg-background text-ts hover:bg-foreground"),
                            onClick: () => d("remark", "Personal Transfer"),
                            size: "sm",
                            children: "Personal"
                        })]
                    })]
                }), e.jsx("div", {
                    onClick: () => m(),
                    className: `bg-[#01b876] self-center w-[95%] text-center 
                    text-white h-12 flex items-center justify-center rounded-3xl font-bold`,
                    children: u ? e.jsx(W, {}) : e.jsx("p", {
                        children: "Confirm"
                    })
                })]
            })]
        })
    },
    ne = ({
        transaction: a,
        setShowTranferAmount: r,
        setVerificationData: t
    }) => e.jsxs("div", {
        onClick: () => {
            t({
                recipient_name: a.recipient_name,
                recipient_bank_name: a.recipient_bank_name,
                recipient_account_number: a.recipient_account_number
            }), r(!0)
        },
        className: "flex-between",
        children: [e.jsxs("div", {
            className: "flex flex-col",
            children: [e.jsx("p", {
                className: "font-semibold text-sm",
                children: a.recipient_name.split(" ")[0]
            }), e.jsxs("p", {
                className: "text-ts text-sm",
                children: [a.recipient_account_number, " ", a.recipient_bank_name]
            })]
        }), e.jsx(w, {
            children: e.jsx(N, {
                className: "bg-[#01b876]/10",
                children: e.jsx(v, {
                    color: "#01b876",
                    size: 20
                })
            })
        })]
    }),
    Ae = ({
        unique_transactions: a
    }) => {
        const [r, t] = l.useState("recent"), [d, u] = l.useState(!1), [n, h] = l.useState(), [p, x] = l.useState(!1), [m, c] = l.useState(""), [b, g] = l.useState(), j = b === "verified" && !!n && m.trim().length == 10, y = () => window.history.back(), [s, i] = l.useState();
        return l.useEffect(() => {
            const o = async () => {
                try {
                    g("verifying");
                    const {
                        data: f
                    } = await A.post("/api/accounts/resolve", {
                        account_number: m,
                        account_bank: n ?.code
                    });
                    if (f.status === "success") {
                        const C = f.data;
                        i({
                            recipient_name: C.account_name,
                            recipient_bank_name: n ?.name || "",
                            recipient_account_number: C.account_number
                        }), g("verified")
                    } else B(f.message).show(), g("failed")
                } catch (f) {
                    B(f).show(), g("failed")
                }
            };
            n && m.trim().length == 10 && o()
        }, [n, m]), e.jsxs(U, {
            children: [e.jsx(q, {
                title: "Bank Transfer"
            }), d && e.jsx(re, {
                setSelectedBank: h,
                onClose: () => u(!1)
            }), p && e.jsx(te, {
                verificationData: s,
                onClose: () => x(!1)
            }), e.jsxs("main", {
                className: `w-full flex flex-col items-center bg-[#f8f8fa] 
                dark:bg-background min-h-screen`,
                children: [e.jsx("div", {
                    className: "w-full bg-background flex justify-center",
                    children: e.jsxs("div", {
                        className: "w-[90%] max-w-[650px] flex-between py-5",
                        children: [e.jsxs("div", {
                            onClick: y,
                            className: "flex items-center gap-2",
                            children: [e.jsx(D, {
                                className: "text-ts"
                            }), e.jsx("p", {
                                children: "Transfer Bank Account"
                            })]
                        }), e.jsx(R, {
                            href: route("opay.transactions"),
                            className: "text-[#01b876]",
                            children: "History"
                        })]
                    })
                }), e.jsxs("div", {
                    className: `w-[90%] max-w-[650px] flex flex-col gap-4 
                    items-center py-5`,
                    children: [e.jsx("div", {
                        className: `flex w-full bg-[#7e51fc]/10
                            rounded-lg p-3 `,
                        children: e.jsxs("p", {
                            className: "text-[#7e51fc] text-lg",
                            children: ["Free transfers for the day:", " ", e.jsx("span", {
                                className: "font-bold",
                                children: "3"
                            })]
                        })
                    }), e.jsxs("div", {
                        className: `flex w-full bg-white dark:bg-foreground 
                        rounded-lg p-3 flex-col gap-3`,
                        children: [e.jsx("p", {
                            className: "font-bold px-3",
                            children: "Recipient Account"
                        }), e.jsx("div", {
                            className: "border-b border-b-gray-100 dark:border-b-gray-700 py-2 w-full",
                            children: e.jsx("input", {
                                className: `border-0 focus-visible:ring-0 w-full placeholder:text-gray-400 
                                bg-white dark:bg-foreground`,
                                type: "text",
                                placeholder: "Enter 10 digits Account Number",
                                name: "",
                                id: "",
                                maxLength: 10,
                                value: m,
                                onChange: o => I(+o.target.value) && c(o.target.value)
                            })
                        }), e.jsxs("div", {
                            onClick: () => u(!0),
                            className: `flex-between border-b border-b-gray-100 dark:border-b-gray-700 
                            py-4 w-full px-3 mb-3`,
                            children: [!n && e.jsx("p", {
                                className: "text-gray-400",
                                children: "Select Bank"
                            }), n && e.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [e.jsx(w, {
                                    children: e.jsx(N, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(v, {
                                            color: "#01b876",
                                            size: 20
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-medium text-lg",
                                    children: n ?.name
                                })]
                            }), e.jsx(L, {
                                className: "text-gray-400"
                            })]
                        }), b === "verified" && e.jsxs("div", {
                            className: `flex w-full bg-[#01b876]/10
                            rounded-lg p-2 items-center gap-2`,
                            children: [e.jsx(G, {
                                className: "shrink-0",
                                color: "#01b876",
                                size: 18
                            }), e.jsx("p", {
                                className: "text-[#01b876]",
                                children: s ?.recipient_name
                            })]
                        }), b === "verifying" && e.jsxs("div", {
                            className: `flex w-full bg-[#01b876]/10
                            rounded-lg p-2 items-center gap-1`,
                            children: [e.jsx(z, {
                                visible: !0,
                                height: "25",
                                width: "25",
                                ariaLabel: "color-ring-loading",
                                wrapperClass: "color-ring-wrapper",
                                colors: ["#01b876", "#01b876", "#01b876", "#01b876", "#01b876"]
                            }), e.jsx("p", {
                                className: "text-[#01b876]",
                                children: "Verifying account details"
                            })]
                        }), b === "failed" && e.jsxs("div", {
                            className: `flex w-full bg-rose-500/10
                            rounded-lg p-2 items-center gap-2`,
                            children: [e.jsx(J, {
                                className: "shrink-0 text-rose-500",
                                size: 18
                            }), e.jsx("p", {
                                className: "text-rose-500",
                                children: "Account verification failed. Please check the details or try again later"
                            })]
                        }), e.jsx("div", {
                            style: {
                                opacity: j ? 1 : .4,
                                cursor: j ? "pointer" : "not-allowed"
                            },
                            onClick: () => j && x(!0),
                            className: `bg-[#01b876] self-center w-[95%] text-center 
                            text-white h-12 flex items-center justify-center rounded-3xl font-bold`,
                            children: e.jsx("p", {
                                children: "Next"
                            })
                        })]
                    }), e.jsxs("div", {
                        className: `flex-between w-full bg-white dark:bg-foreground 
                        rounded-lg p-3`,
                        children: [e.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [e.jsx(w, {
                                children: e.jsx(N, {
                                    className: "bg-[#01b876]/10",
                                    children: e.jsx(H, {
                                        color: "#01b876",
                                        size: 17
                                    })
                                })
                            }), e.jsx("p", {
                                className: "text-sm",
                                children: "Bank Transfer Success Rate Monitor"
                            })]
                        }), e.jsx(L, {
                            className: "text-gray-400"
                        })]
                    }), e.jsxs("div", {
                        className: `flex flex-col w-full bg-white dark:bg-foreground 
                        rounded-lg p-4 gap-2`,
                        children: [e.jsxs("div", {
                            className: "flex-between w-full border-b border-b-gray-100 pb-2",
                            children: [e.jsxs("div", {
                                className: "flex items-center gap-7",
                                children: [e.jsx("p", {
                                    onClick: () => t("recent"),
                                    className: k("text-sm", {
                                        "font-bold text-[#01b876] text-base": r === "recent"
                                    }),
                                    children: "Recents"
                                }), e.jsx("p", {
                                    onClick: () => t("favourite"),
                                    className: k("text-sm", {
                                        "font-bold text-[#01b876] text-base": r === "favourite"
                                    }),
                                    children: "Favourites"
                                })]
                            }), e.jsx(T, {
                                color: "#01b876",
                                size: 20
                            })]
                        }), e.jsx("div", {
                            className: "flex flex-col w-full gap-6 max-h-[50vh] overflow-auto",
                            children: a.map(o => e.jsx(ne, {
                                setShowTranferAmount: x,
                                setVerificationData: i,
                                transaction: o
                            }, o.id))
                        })]
                    })]
                })]
            })]
        })
    };
export {
    Ae as
    default
};