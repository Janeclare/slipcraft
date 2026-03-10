import {
    r as o,
    W as F,
    j as e,
    a as A,
    y as L
} from "./app-CPSemYgC.js";
import {
    c as B
} from "./index-CX8Cjk5s.js";
import {
    c as d
} from "./index-BIbNlVZ0.js";
import {
    l as M
} from "./index-CGcBZyi7.js";
import {
    I as P
} from "./input-MxT5BQBW.js";
import {
    i as T
} from "./isNumber-BPVTmlLX.js";
import {
    f as G
} from "./formatNumber-Ce-00Vs2.js";
import {
    c as H
} from "./capitalizeFirstLetter-S2qrb80k.js";
import {
    a as O
} from "./index-CEQXxg-T.js";
import {
    s as R
} from "./showIntertiaErrors-Bokdg093.js";
import {
    t as q
} from "./index-Dnc4ycMJ.js";
import {
    u as K
} from "./useBankLogo-cBQJdN2m.js";
import "./iconBase-BweG_smQ.js";
const V = "/build/assets/chart-icon-Csklqkwu.png",
    ie = ({
        auth: b,
        recipient_name: f,
        recipient_account_number: j,
        recipient_bank_name: u,
        recipient_transactions: N
    }) => {
        const w = () => window.history.back(),
            y = b.user,
            [l, m] = o.useState(!1),
            [c, v] = o.useState("0.00"),
            [r, k] = o.useState(""),
            {
                post: S,
                setError: C,
                errors: n,
                clearErrors: p,
                data: h,
                setData: D
            } = F({
                amount: "0.00",
                description: "",
                recipient_name: f,
                recipient_account_number: j,
                recipient_bank_name: u,
                insufficient_points: null
            }),
            g = T(Number(c)) && Number(c) > 0 && r.trim().length >= 3;
        o.useEffect(() => {
            D({ ...h,
                amount: c,
                description: r
            }), r.trim().length !== 0 && r.trim().length < 3 ? C("description", "Narration should contain at least 3 characters") : p("description")
        }, [c, r]);
        const E = t => {
                v(s => {
                    if (t === "Delete") {
                        let a = s.slice(0, -1);
                        return a === "" || a === "0." ? "0" : a
                    }
                    if (t === "." && s.includes(".")) return s;
                    if (s.includes(".") && s !== "0.00") {
                        const [a, i] = s.split(".");
                        if (i.length >= 2) return s
                    }
                    return s === "0.00" || s === "0" ? t === "." ? "0." : t : s + t
                })
            },
            I = () => {
                p(), S(route("kuda.bank_transfer_new"), {
                    onSuccess: () => {
                        q.success("Successful")
                    },
                    onError: t => {
                        R(t)
                    }
                })
            },
            _ = t => {
                const s = new Date(t),
                    a = String(s.getDate()).padStart(2, "0"),
                    i = String(s.getMonth() + 1).padStart(2, "0"),
                    x = s.getFullYear();
                return `${a}/${i}/${x}`
            },
            $ = t => {
                const s = new Date(t);
                let a = s.getHours();
                const i = String(s.getMinutes()).padStart(2, "0"),
                    x = a >= 12 ? "pm" : "am";
                return a = a % 12 || 12, `${String(a).padStart(2,"0")}:${i} ${x}`
            },
            z = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "Delete"];
        return e.jsx("main", {
            className: `w-full flex flex-col items-center bg-[#121212] 
            text-[#ffffff] min-h-screen`,
            children: e.jsxs("div", {
                className: `w-full max-w-[650px] flex flex-col gap-6 
                items-center relative`,
                children: [e.jsxs("div", {
                    className: "flex w-full items-center gap-2 p-2 border-b border-[#1c1c1c]",
                    children: [e.jsx(B, {
                        onClick: w,
                        size: 30,
                        className: "font-extrabold"
                    }), e.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [e.jsx("img", {
                            src: K(u),
                            alt: "Opay",
                            className: "w-11 h-11 object-contain"
                        }), e.jsx("p", {
                            className: "font-extrabold text-sm max-w-[220px] truncate",
                            children: H(f)
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "text-white py-6 space-y-6 text-sm w-full p-5 max-h-[60vh] overflow-y-auto",
                    children: [N.map((t, s) => e.jsxs(A, {
                        href: route("kuda.transaction.show", {
                            id: t.id
                        }),
                        className: "space-y-2",
                        children: [e.jsx("div", {
                            className: "text-center text-gray-400 text-sm",
                            children: _(t.created_at)
                        }), e.jsxs("div", {
                            className: "flex items-center justify-end space-x-2",
                            children: [e.jsx("div", {
                                className: `flex h-[17px] w-[17px] bg-[#4dd38c] rounded-full 
                                    items-center justify-center`,
                                children: e.jsx(O, {})
                            }), e.jsxs("div", {
                                className: "bg-[#42186e] px-4 py-2 rounded-xl rounded-br-none max-w-xs text-left",
                                children: [e.jsx("div", {
                                    className: "font-extrabold text-lg",
                                    children: t.amount
                                }), e.jsx("div", {
                                    className: "w-full h-[1px] bg-white opacity-[0.1]"
                                }), e.jsx("div", {
                                    className: "text-lg text-white/90 mt-1",
                                    children: t.description
                                })]
                            })]
                        }), e.jsx("div", {
                            className: "text-sm text-right text-gray-400",
                            children: $(t.created_at)
                        })]
                    }, t.id)), e.jsx("div", {
                        className: "text-center text-gray-500 text-sm mt-6",
                        children: "Tap on a message to see transaction details."
                    })]
                }), e.jsx("div", {
                    onClick: () => m(!1),
                    className: d("fixed inset-0 bg-black/20 z-10", l ? "block" : "hidden")
                }), e.jsxs("div", {
                    className: `bg-[#212121] fixed bottom-0 w-full 
                    p-5 flex flex-col gap-4 items-center z-20`,
                    children: [e.jsxs("div", {
                        className: "bg-[#000000] p-2 rounded-sm text-[#888888] font-bold",
                        children: ["NGN Balance: ₦", G(y ?.kuda_balance || 0, 2, 2)]
                    }), e.jsxs("div", {
                        className: "w-full flex flex-col gap-0.5",
                        children: [e.jsxs("div", {
                            className: "flex items-center w-full gap-2",
                            children: [e.jsxs("div", {
                                onClick: () => m(!l),
                                className: d("w-full h-[55px] flex items-center px-4 rounded-sm font-semibold", l ? "bg-[#242127] border-b-4 border-[#3f196a]" : "bg-[#2a2a2a]"),
                                children: ["₦", h.amount]
                            }), e.jsx("p", {
                                className: "font-extrabold text-lg",
                                children: "NGN"
                            })]
                        }), n.amount && e.jsx("div", {
                            className: "text-rose-300 text-sm",
                            children: n.amount
                        }), n.insufficient_points && e.jsxs("div", {
                            className: "text-rose-300 text-sm",
                            children: [e.jsx("span", {
                                children: n.insufficient_points
                            }), e.jsx("br", {}), e.jsx("span", {
                                onClick: () => L.get(route("buy_point")),
                                className: "underline text-lime-400 font-bold cursor-pointer",
                                children: "Click here to buy more points."
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "w-full flex flex-col gap-0.5",
                        children: [e.jsxs("div", {
                            className: "flex w-full items-center justify-between gap-2",
                            children: [e.jsx("img", {
                                src: V,
                                alt: "Opay",
                                className: "w-[60px] h-[60px] object-contain"
                            }), e.jsx(P, {
                                maxLength: 100,
                                onFocus: () => m(!1),
                                value: r,
                                onChange: t => k(t.target.value),
                                placeholder: "Narration (e.g Sent from kuda)",
                                className: `placeholder:text-[#969696] text-lg bg-[#121212] text-white
                            rounded-none px-3 h-[50px] flex-1
                            outline-none border-none focus-visible:ring-offset-0 focus-visible:ring-0`
                            }), e.jsx("div", {
                                className: `flex items-center justify-center w-[30px] h-[30px] 
                            bg-[#fff5db] rounded-full border-2 border-[#dbdcdf] text-[#635a53] cursor-pointer text-sm`,
                                children: r.trim().length
                            }), e.jsx("div", {
                                onClick: g ? I : void 0,
                                className: d("flex items-center justify-center w-[60px] h-[50px] rounded-sm cursor-pointer bg-[#261d33]", g && "bg-[#3f196a]"),
                                children: e.jsx(M, {
                                    size: 27,
                                    color: "#48d38a"
                                })
                            })]
                        }), n.description && e.jsx("div", {
                            className: "text-rose-300 text-sm",
                            children: n.description
                        })]
                    }), l && e.jsx("div", {
                        className: "grid grid-cols-3 gap-y-8 gap-x-12 items-center",
                        children: z.map((t, s) => e.jsx("div", {
                            onClick: () => E(t),
                            className: d("text-4xl font-extrabold cursor-pointer select-none text-center hover:opacity-80 transition", t === "Delete" ? "text-green-400 text-xl" : "text-white"),
                            children: t
                        }, s))
                    })]
                })]
            })
        })
    };
export {
    ie as
    default
};