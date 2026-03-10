import {
    j as e,
    a as m,
    q as g,
    W as b,
    r as j,
    y as N
} from "./app-CPSemYgC.js";
import {
    A as w,
    a as v
} from "./AppLayout-BVugRKpX.js";
import {
    a as y
} from "./index-QFAS8Pek.js";
import {
    A as k,
    b as C,
    a as D
} from "./avatar-BLCVZC4Y.js";
import {
    a as A
} from "./index-DR2HD5r8.js";
import {
    f as p
} from "./formatNumber-Ce-00Vs2.js";
import {
    b as B
} from "./index-CdLM64Mx.js";
import {
    u as _
} from "./useBankLogo-cBQJdN2m.js";
import {
    c as S
} from "./copy-icon-C0HlUZ0h.js";
import {
    d as I
} from "./index-CX8Cjk5s.js";
import {
    D as E,
    a as F,
    b as H,
    c as L,
    d as M,
    e as T,
    f as $
} from "./dialog-BauOFWUU.js";
import {
    B as f
} from "./button-BamgVvPn.js";
import {
    t as z
} from "./index-Dnc4ycMJ.js";
import {
    s as U
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as G
} from "./Loader-DxAivhzx.js";
import {
    i as K
} from "./isNumber-BPVTmlLX.js";
import {
    a as O
} from "./index-BR67zcxG.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-BUKYvAHl.js";
import "./index-TtBBfnyI.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
const V = "/build/assets/airtime-icon-BFMJUns9.png",
    Y = "/build/assets/internet-icon-DEOy4p7g.png",
    q = "/build/assets/betting-icon-ByhHVNH0.png",
    J = "/build/assets/electricity-icon-BnNmbjiy.png",
    Q = ({
        transaction: s
    }) => {
        const n = c => {
                const l = new Date(c);
                let a = l.getHours();
                const o = String(l.getMinutes()).padStart(2, "0"),
                    i = a >= 12 ? "pm" : "am";
                return a = a % 12 || 12, `${String(a).padStart(2,"0")}:${o} ${i}`
            },
            t = c => {
                const l = new Date(c),
                    a = String(l.getDate()).padStart(2, "0"),
                    o = l.toLocaleString("en-GB", {
                        month: "long"
                    }),
                    i = l.getFullYear();
                return `${a} ${o} ${i}`
            },
            r = s ?.display_date || s.created_at;
        return e.jsxs(m, {
            href: route("kuda.transaction.show", {
                id: s.id
            }),
            className: "flex-between p-[18px] w-full gap-1",
            children: [e.jsx("img", {
                className: "w-[50px] h-auto rounded-full",
                src: _(s.recipient_bank_name),
                alt: s.recipient_bank_name
            }), e.jsxs("div", {
                className: "flex flex-col",
                children: [e.jsx("p", {
                    className: "max-w-[200px] truncate font-bold text-[13px]",
                    children: s.recipient_name
                }), e.jsxs("p", {
                    className: "text-[#b8b8b8] text-sm text-[13px] flex items-center gap-0.5",
                    children: [e.jsx("span", {
                        children: n(r)
                    }), e.jsx(B, {
                        size: 12,
                        color: "#b8b8b8"
                    }), e.jsx("span", {
                        children: t(r)
                    })]
                })]
            }), e.jsxs("p", {
                className: "font-bold text-sm max-w-[150px] truncate text-[13px]",
                children: ["-₦", p(s.amount)]
            })]
        })
    },
    R = () => {
        const {
            props: s
        } = g(), {
            auth: n,
            platform: t
        } = s, {
            data: r,
            setData: c,
            processing: l,
            errors: a,
            post: o,
            clearErrors: i
        } = b({
            amount: n.user ?.kuda_balance || ""
        }), [h, x] = j.useState(!1), u = () => {
            i(), o(route("kuda.balance.update"), {
                onSuccess: () => {
                    z.success("Balance Successfully changed"), x(!1)
                },
                onError: d => {
                    U(d)
                }
            })
        };
        return e.jsxs(E, {
            open: h,
            onOpenChange: x,
            children: [e.jsx(F, {
                asChild: !0,
                children: e.jsxs("div", {
                    className: `w-full bg-[#292929] p-4 font-extrabold 
                    rounded-sm flex items-center gap-2 text-[17px]`,
                    children: [e.jsx(O, {
                        size: 24
                    }), " ", e.jsx("p", {
                        children: "Add Money"
                    })]
                })
            }), e.jsxs(H, {
                className: "bg-[#121212] text-[#ffffff] border-[#292929]",
                children: [e.jsxs(L, {
                    children: [e.jsx(M, {
                        className: "text-white",
                        children: "Change Kuda Balance"
                    }), e.jsxs(T, {
                        className: "text-gray-400",
                        children: ["You will be charged", " ", e.jsxs("span", {
                            className: "text-[#4dd38c] font-bold",
                            children: [p(t.bank_balance_change_fee), " ", "points"]
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
                                placeholder:text-[#5a5a5a] text-xl bg-inherit text-white`,
                                type: "text",
                                placeholder: "Enter Amount",
                                name: "",
                                id: "",
                                value: r.amount,
                                onChange: d => K(+d.target.value) && c("amount", d.target.value)
                            })]
                        })
                    }), a.amount && e.jsx("p", {
                        className: "text-xs font-semibold text-rose-500",
                        children: a.amount
                    })]
                }), e.jsxs($, {
                    className: "gap-y-2",
                    children: [e.jsx(f, {
                        onClick: () => x(!1),
                        variant: "outline",
                        className: "text-gray-500 border-gray-500 hover:bg-gray-100",
                        style: {
                            backgroundColor: "#292929"
                        },
                        children: "Cancel"
                    }), e.jsx(f, {
                        style: {
                            backgroundColor: "#40186e"
                        },
                        onClick: u,
                        className: "text-white",
                        children: l ? e.jsx(G, {}) : "Continue"
                    })]
                })]
            })]
        })
    },
    ve = ({
        auth: s,
        transactions: n
    }) => {
        const t = s.user;
        return e.jsxs(w, {
            children: [e.jsx(v, {
                title: "Kuda Dashboard"
            }), e.jsx("main", {
                className: `w-full flex justify-center bg-[#121212] text-[#ffffff] 
                 min-h-screen`,
                children: e.jsxs("div", {
                    className: `w-[90%] max-w-[650px] flex flex-col gap-6 
                    items-center py-5`,
                    children: [e.jsxs("div", {
                        className: "w-full flex-between",
                        children: [e.jsxs("div", {
                            onClick: () => N.get(route("dashboard")),
                            className: "flex items-center gap-2",
                            children: [e.jsxs(k, {
                                children: [e.jsx(C, {
                                    src: "https://github.com/shadcn.png"
                                }), e.jsxs(D, {
                                    className: "text-[#121212]",
                                    children: [t ?.name ?.charAt(0).toUpperCase(), t ?.name ?.charAt(1).toUpperCase()]
                                })]
                            }), e.jsxs("h1", {
                                className: "font-extrabold text-lg max-w-[250px] truncate",
                                children: ["Hi, ", t ?.name]
                            })]
                        }), e.jsx(y, {
                            size: 35
                        })]
                    }), e.jsxs("div", {
                        className: "flex-between w-full gap-2",
                        children: [e.jsx(m, {
                            href: route("services.kuda"),
                            className: `w-full bg-[#292929] p-2 text-center 
                        font-bold rounded-lg`,
                            children: "Spend"
                        }), e.jsx("div", {
                            className: `w-full bg-[#292929] p-2 text-center 
                        font-bold rounded-lg text-[#a9a9a9]`,
                            children: "Save"
                        }), e.jsx("div", {
                            className: `w-full bg-[#292929] p-2 text-center 
                        font-bold rounded-lg text-[#a9a9a9]`,
                            children: "Borrow"
                        }), e.jsx("div", {
                            className: `w-full bg-[#292929] p-2 text-center 
                        font-bold rounded-lg text-[#a9a9a9]`,
                            children: "Invest"
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full gap-1",
                        children: [e.jsxs("div", {
                            className: "font-bold text-base inline-flex items-center gap-1",
                            children: [e.jsxs("span", {
                                className: "text-[15px] text-[#686868]",
                                children: ["Naira Account - ", "200384756"]
                            }), e.jsx("img", {
                                src: S,
                                alt: "copy icon",
                                className: "w-5 h-auto"
                            })]
                        }), e.jsxs("div", {
                            className: "flex-between",
                            children: [e.jsxs("p", {
                                className: "text-[33px] font-extrabold max-w-[250px] truncate",
                                children: ["₦", p(t ?.kuda_balance || 0, 2, 2)]
                            }), e.jsxs("div", {
                                className: `flex items-center justify-center gap-1 bg-[#0b3421] 
                                border border-[#569d7f] w-[110px] h-[45px] rounded-[55px]`,
                                children: [e.jsx("span", {
                                    children: "🇳🇬"
                                }), e.jsx("span", {
                                    className: "font-bold",
                                    children: "NGN"
                                }), e.jsx(I, {})]
                            })]
                        }), e.jsx("p", {
                            className: "font-normal text-[13px]",
                            children: "Last updated a few seconds ago"
                        })]
                    }), e.jsxs("div", {
                        className: "flex-between w-full gap-4",
                        children: [e.jsxs(m, {
                            href: route("kuda.bank_transfer"),
                            className: `w-full bg-[#292929] p-4  
                        font-extrabold rounded-sm flex items-center gap-2 text-[17px]`,
                            children: [e.jsx(A, {
                                size: 24
                            }), " ", e.jsx("p", {
                                children: "Transfer"
                            })]
                        }), e.jsx(R, {})]
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full gap-4",
                        children: [e.jsxs("div", {
                            className: "flex-between",
                            children: [e.jsx("p", {
                                className: "text-[#959595]",
                                children: "Quick Access"
                            }), e.jsx("p", {
                                className: "font-extrabold",
                                children: "Edit"
                            })]
                        }), e.jsxs("div", {
                            className: "flex w-full items-center gap-2 justify-between",
                            children: [e.jsxs("div", {
                                className: `w-[100px] h-[85px] bg-[#212121] rounded-md 
                                flex flex-col items-center justify-center`,
                                children: [e.jsx("img", {
                                    className: "h-auto w-[50px]",
                                    src: V,
                                    alt: "airtime"
                                }), e.jsx("p", {
                                    className: "font-extrabold text-sm",
                                    children: "Airtime"
                                })]
                            }), e.jsxs("div", {
                                className: `w-[100px] h-[85px] bg-[#212121] rounded-md 
                                flex flex-col items-center justify-center`,
                                children: [e.jsx("img", {
                                    className: "h-auto w-[50px]",
                                    src: Y,
                                    alt: "internet"
                                }), e.jsx("p", {
                                    className: "font-extrabold text-sm",
                                    children: "Internet"
                                })]
                            }), e.jsxs("div", {
                                className: `w-[100px] h-[85px] bg-[#212121] rounded-md 
                                flex flex-col items-center justify-center`,
                                children: [e.jsx("img", {
                                    className: "h-auto w-[50px]",
                                    src: q,
                                    alt: "betting"
                                }), e.jsx("p", {
                                    className: "font-extrabold text-sm",
                                    children: "Betting"
                                })]
                            }), e.jsxs("div", {
                                className: `w-[100px] h-[85px] bg-[#212121] rounded-md 
                                flex flex-col items-center justify-center`,
                                children: [e.jsx("img", {
                                    className: "h-auto w-[50px]",
                                    src: J,
                                    alt: "electricity"
                                }), e.jsx("p", {
                                    className: "font-extrabold text-sm",
                                    children: "Electricity"
                                })]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full bg-[#212121] rounded-md",
                        children: [e.jsxs("div", {
                            className: "flex-between p-[18px] border-b border-[#343434]",
                            children: [e.jsx("p", {
                                children: "Transactions"
                            }), e.jsx("p", {
                                className: "font-extrabold",
                                children: "View All"
                            })]
                        }), e.jsx("div", {
                            className: "flex flex-col max-h-[400px] overflow-auto",
                            children: n.map(r => e.jsx("div", {
                                className: "border-t border-[#343434] dark:border-[#343434]",
                                children: e.jsx(Q, {
                                    transaction: r
                                })
                            }, r.id))
                        })]
                    })]
                })
            })]
        })
    };
export {
    ve as
    default
};