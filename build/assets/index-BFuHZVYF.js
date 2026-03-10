import {
    q as m,
    j as e,
    a as d,
    W as v,
    r as y,
    y as k
} from "./app-CPSemYgC.js";
import {
    A as C,
    a as M
} from "./AppLayout-BVugRKpX.js";
import {
    A as s,
    a
} from "./avatar-BLCVZC4Y.js";
import {
    S as z
} from "./stringInitials-Bl64PEY-.js";
import {
    e as A,
    f as B,
    g as L,
    h as D
} from "./index-BzCTRD1y.js";
import {
    d as F
} from "./index-CitaMW1f.js";
import {
    f as T,
    m as S
} from "./index-CGcBZyi7.js";
import {
    f as j
} from "./formatNumber-Ce-00Vs2.js";
import {
    T as _
} from "./TransactionCard-CX5uFjVO.js";
import {
    c as H,
    d as I
} from "./index-QFAS8Pek.js";
import {
    c as E,
    d as O
} from "./index-Cr56Fz-Y.js";
import {
    g as R,
    h as q,
    i as G
} from "./index-CX8Cjk5s.js";
import {
    c as W
} from "./index-DR2HD5r8.js";
import {
    b as P
} from "./index-BR67zcxG.js";
import {
    e as U
} from "./index-C4i189TA.js";
import {
    G as V
} from "./iconBase-BweG_smQ.js";
import {
    a as Z
} from "./index-BNIhABM6.js";
import {
    c as p
} from "./index-BIbNlVZ0.js";
import {
    c as $
} from "./polished.esm-Cyjuaya6.js";
import {
    c as Y
} from "./index-DuXjXc-t.js";
import {
    D as J,
    a as K,
    b as Q,
    c as X,
    d as ee,
    e as se,
    f as ae
} from "./dialog-BauOFWUU.js";
import {
    B as f
} from "./button-BamgVvPn.js";
import {
    t as le
} from "./index-Dnc4ycMJ.js";
import {
    s as re
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as te
} from "./Loader-DxAivhzx.js";
import {
    i as ce
} from "./isNumber-BPVTmlLX.js";
import {
    P as oe
} from "./plus-D1TJ0vFK.js";
import {
    c as b
} from "./createLucideIcon-rN-Z3mCX.js";
import "./index-BUKYvAHl.js";
import "./index-TtBBfnyI.js";
import "./formatDate-DSWK92vn.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
const ie = b("Bell", [
    ["path", {
        d: "M10.268 21a2 2 0 0 0 3.464 0",
        key: "vwvbt9"
    }],
    ["path", {
        d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
        key: "11g9vi"
    }]
]);
const ne = b("ScanLine", [
    ["path", {
        d: "M3 7V5a2 2 0 0 1 2-2h2",
        key: "aa7l1z"
    }],
    ["path", {
        d: "M17 3h2a2 2 0 0 1 2 2v2",
        key: "4qcy5o"
    }],
    ["path", {
        d: "M21 17v2a2 2 0 0 1-2 2h-2",
        key: "6vwrx8"
    }],
    ["path", {
        d: "M7 21H5a2 2 0 0 1-2-2v-2",
        key: "ioqczr"
    }],
    ["path", {
        d: "M7 12h10",
        key: "b7w52i"
    }]
]);

function de(l) {
    return V({
        attr: {
            viewBox: "0 0 24 24"
        },
        child: [{
            tag: "path",
            attr: {
                fill: "none",
                strokeWidth: "2",
                d: "M11,15 C14,15 19,19 19,19 L19,3 C19,3 14,7 11,7 C11,7 11,15 11,15 Z M5,15 L8,23 L12,23 L9,15 M19,14 C20.657,14 22,12.657 22,11 C22,9.343 20.657,8 19,8 M11,19 C11.9999997,18.9999994 14,18 14,16 M2,11 C2,7.88888889 3.7912,7 6,7 L11,7 L11,15 L6,15 C3.7912,15 2,14.1111111 2,11 Z"
            },
            child: []
        }]
    })(l)
}
const xe = [{
        label: "Home",
        route: "home",
        icon: R
    }, {
        label: "Rewards",
        route: "rewards",
        icon: A
    }, {
        label: "Finance",
        route: "finance",
        icon: E
    }, {
        label: "Cards",
        route: "cards",
        icon: Y
    }, {
        label: "Me",
        route: "me",
        icon: q
    }],
    me = ({
        className: l
    }) => {
        const {
            props: o
        } = m(), {
            platform: r,
            active_route_name: c
        } = o, i = c;
        return e.jsx("div", {
            className: p("w-full fixed min-h-[40px] bottom-0 justify-center bg-background items-center shadow-custom-light dark:shadow-custom-dark flex md:hidden", l),
            children: e.jsx("div", {
                className: "flex justify-between w-[90%] md:w-[80%] py-5",
                children: e.jsx("div", {
                    className: "w-full flex justify-between items-center",
                    children: xe.map(t => e.jsxs(d, {
                        href: route("services.opay"),
                        className: "flex flex-col items-center",
                        children: [e.jsx("p", {
                            style: {
                                border: i === t.route ? `1px solid ${$(.2,r.primary_color)}` : void 0,
                                color: i === t.route ? r.primary_color : void 0
                            },
                            className: p("p-2 rounded-lg text-ts", {
                                "bg-foreground": i === t.route
                            }),
                            children: e.jsx(t.icon, {
                                size: 25,
                                className: "text-gray-400 dark:text-gray-700"
                            })
                        }), e.jsx("p", {
                            className: `text-xs font-bold text-center max-w-[50px] 
                                truncate text-gray-400 dark:text-gray-700`,
                            children: t.label
                        })]
                    }, t.route))
                })
            })
        })
    },
    he = () => {
        const {
            props: l
        } = m(), {
            auth: o,
            platform: r
        } = l, {
            data: c,
            setData: i,
            processing: t,
            errors: h,
            post: g,
            clearErrors: u
        } = v({
            amount: o.user ?.opay_balance || ""
        }), [N, x] = y.useState(!1), w = () => {
            u(), g(route("opay.balance.update"), {
                onSuccess: () => {
                    le.success("Balance Successfully changed"), x(!1)
                },
                onError: n => {
                    re(n)
                }
            })
        };
        return e.jsxs(J, {
            open: N,
            onOpenChange: x,
            children: [e.jsx(K, {
                asChild: !0,
                children: e.jsxs("div", {
                    className: `flex items-center bg-white text-[#01b876] 
                    p-[6px] rounded-2xl cursor-pointer select-none`,
                    children: [e.jsx(oe, {
                        className: "font-bold",
                        size: 14
                    }), e.jsx("p", {
                        className: "font-bold text-sm",
                        children: "Add Money"
                    })]
                })
            }), e.jsxs(Q, {
                children: [e.jsxs(X, {
                    children: [e.jsx(ee, {
                        children: "Change Opay Balance"
                    }), e.jsxs(se, {
                        children: ["You will be charged", " ", e.jsxs("span", {
                            className: "text-[#01b876] font-bold",
                            children: [j(r.bank_balance_change_fee), " ", "points"]
                        }), " ", "each time you change balance"]
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col w-full gap-2",
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
                                placeholder: "Enter Amount",
                                name: "",
                                id: "",
                                value: c.amount,
                                onChange: n => ce(+n.target.value) && i("amount", n.target.value)
                            })]
                        })
                    }), h.amount && e.jsx("p", {
                        className: "text-xs font-semibold text-rose-500",
                        children: h.amount
                    })]
                }), e.jsxs(ae, {
                    className: "gap-y-2",
                    children: [e.jsx(f, {
                        onClick: () => x(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(f, {
                        style: {
                            backgroundColor: "#01b876"
                        },
                        onClick: w,
                        className: "text-white",
                        children: t ? e.jsx(te, {}) : "Continue"
                    })]
                })]
            })]
        })
    },
    $e = ({
        recentTransactions: l
    }) => {
        const {
            props: o
        } = m(), {
            auth: r
        } = o;
        return e.jsxs(C, {
            children: [e.jsx(M, {
                title: "Opay Dashboard"
            }), e.jsx("main", {
                className: `w-full flex justify-center bg-[#f8f8fa] 
            dark:bg-background min-h-screen`,
                children: e.jsxs("div", {
                    className: `w-[90%] max-w-[650px] flex flex-col gap-4 
                    items-center py-5`,
                    children: [e.jsxs("div", {
                        className: "w-full flex-between",
                        children: [e.jsxs("div", {
                            onClick: () => k.get(route("dashboard")),
                            className: "flex items-center gap-2",
                            children: [e.jsx(s, {
                                children: e.jsx(a, {
                                    children: z(r.user ?.name)
                                })
                            }), e.jsxs("p", {
                                className: "font-bold",
                                children: ["Hi, ", r.user ?.name]
                            })]
                        }), e.jsxs("div", {
                            className: "flex items-center gap-6",
                            children: [e.jsx(B, {
                                size: 25
                            }), e.jsx(ne, {
                                size: 25
                            }), e.jsx(ie, {
                                size: 25
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full gap-3",
                        children: [e.jsxs("div", {
                            className: `flex w-full flex-col text-white bg-[#01b876] 
                            rounded-lg p-3 gap-4`,
                            children: [e.jsxs("div", {
                                className: "flex-between",
                                children: [e.jsxs("div", {
                                    className: "flex items-center gap-1",
                                    children: [e.jsx(F, {}), e.jsx("p", {
                                        className: "text-sm",
                                        children: "Available Balance"
                                    }), e.jsx(L, {})]
                                }), e.jsxs(d, {
                                    href: route("opay.transactions"),
                                    className: "flex items-center gap-1",
                                    children: [e.jsx("p", {
                                        className: "text-sm",
                                        children: "Transaction History"
                                    }), e.jsx(T, {})]
                                })]
                            }), e.jsxs("div", {
                                className: "flex-between",
                                children: [e.jsxs("p", {
                                    className: "font-bold text-2xl",
                                    children: [e.jsx("span", {
                                        className: "text-[20px]",
                                        children: "₦"
                                    }), j(r.user ?.opay_balance || 0, void 0, 2)]
                                }), e.jsx(he, {})]
                            })]
                        }), e.jsxs("div", {
                            className: `flex w-full flex-col bg-white dark:bg-foreground
                            rounded-lg p-3 gap-4`,
                            children: [l.map(c => e.jsx(_, {
                                transaction: c
                            }, c.id)), l.length <= 0 && e.jsx("p", {
                                className: "text-ts text-center",
                                children: "No Recent Transaction"
                            })]
                        }), e.jsxs("div", {
                            className: `flex w-full bg-white dark:bg-foreground
                            rounded-lg p-3 gap-14 justify-center`,
                            children: [e.jsxs(d, {
                                href: route("opay.bank_transfer"),
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "rounded-xl w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10 rounded-xl w-11 h-11",
                                        children: e.jsx(H, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "To Opay"
                                })]
                            }), e.jsxs(d, {
                                href: route("opay.bank_transfer"),
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "rounded-xl w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10 rounded-xl w-11 h-11",
                                        children: e.jsx(O, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "To Bank"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "rounded-xl w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10 rounded-xl w-11 h-11",
                                        children: e.jsx(G, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "Withdraw"
                                })]
                            })]
                        }), e.jsxs("div", {
                            className: `flex w-full bg-white dark:bg-foreground
                            rounded-lg p-3 gap-x-10 gap-y-2 justify-center flex-wrap`,
                            children: [e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(W, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "Airtime"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(D, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "Data"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(P, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "Betting"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(I, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "TV"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(U, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "Safebox"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(S, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "Loan"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(de, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "Invitation"
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-col items-center gap-1",
                                children: [e.jsx(s, {
                                    className: "w-11 h-11",
                                    children: e.jsx(a, {
                                        className: "bg-[#01b876]/10",
                                        children: e.jsx(Z, {
                                            color: "#01b876",
                                            size: 25
                                        })
                                    })
                                }), e.jsx("p", {
                                    className: "font-bold text-ts text-sm",
                                    children: "More"
                                })]
                            })]
                        })]
                    })]
                })
            }), e.jsx(me, {})]
        })
    };
export {
    $e as
    default
};