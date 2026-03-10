import {
    r as a,
    j as e,
    h as B,
    y as _
} from "./app-CPSemYgC.js";
import {
    A as C,
    a as A
} from "./AppLayout-BVugRKpX.js";
import {
    B as L
} from "./button-BamgVvPn.js";
import {
    c as w,
    d as I
} from "./index-CX8Cjk5s.js";
import {
    b as z
} from "./index-Cr56Fz-Y.js";
import {
    I as y
} from "./input-MxT5BQBW.js";
import {
    I as k,
    b as E
} from "./index-DuXjXc-t.js";
import {
    I as F
} from "./index-BR67zcxG.js";
import {
    S as D,
    a as P
} from "./scroll-area-B-fov1Vq.js";
import {
    s as g
} from "./showError-ZlrsJsc2.js";
import {
    u as N
} from "./useBankLogo-cBQJdN2m.js";
import {
    a as T
} from "./index-CEQXxg-T.js";
import {
    i as v
} from "./isNumber-BPVTmlLX.js";
import "./index-Dnc4ycMJ.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./index-TtBBfnyI.js";
import "./index-BN1_Zxci.js";
import "./index-BUKYvAHl.js";
import "./index-CChplcHQ.js";
import "./index-BdQq_4o_.js";
import "./index-Dc_FVRD7.js";
const V = ({
        onClose: i,
        setSelectedBank: d
    }) => {
        const [c, t] = a.useState(), [u, r] = a.useState(c || []), [f, o] = a.useState(!0), [x, p] = a.useState(""), [m, h] = a.useState([]), j = ["Moniepoint Microfinance Bank", "Palmpay", "Opay", "Access Bank", "United Bank for Africa", "First Bank PLC", "Guaranty Trust Bank", "Zenith bank PLC", "Fidelity Bank", "Fcmb Microfinance Bank"].map(s => s.toLowerCase());
        a.useEffect(() => {
            const s = c ?.slice().filter(n => j.includes(n.name.toLocaleLowerCase()));
            h(s || [])
        }, [c]), a.useEffect(() => {
            (async () => {
                try {
                    o(!0);
                    const {
                        data: n
                    } = await B.get("/api/banks/ng"), b = n.data;
                    t(b)
                } catch (n) {
                    g(n).show(), i && i()
                } finally {
                    o(!1)
                }
            })()
        }, []), a.useEffect(() => {
            r(c || [])
        }, [c]);
        const l = s => {
            const n = s.target.value,
                b = c ?.slice().filter(S => S.name.toLowerCase().includes(n.toLowerCase()));
            r(b || []), p(n)
        };
        return f ? e.jsx("div", {
            className: "w-full min-h-screen flex items-center justify-center bg-[#121212]",
            children: e.jsx("p", {
                className: "text-white",
                children: "Fetching Banks..."
            })
        }) : e.jsx("div", {
            className: `w-full inset-0 fixed z-10 bg-[#121212] 
        flex flex-col items-center animate-in duration-700 text-white`,
            children: e.jsxs("div", {
                className: `w-full max-w-[650px] flex flex-col gap-6 
                items-center py-7`,
                children: [e.jsxs("div", {
                    className: "flex-between w-[95%] max-w-[650px]",
                    children: [e.jsx(k, {
                        onClick: i,
                        size: 35,
                        className: "font-extrabold"
                    }), e.jsxs("p", {
                        className: "font-extrabold text-base inline-flex items-center gap-1",
                        children: [e.jsx("span", {
                            className: "font-extrabold text-xl",
                            children: "Choose Bank"
                        }), e.jsx("span", {
                            className: "text-2xl",
                            children: "🇳🇬"
                        })]
                    }), e.jsx(k, {
                        size: 35,
                        className: "opacity-0"
                    })]
                }), e.jsxs("div", {
                    className: `flex-between bg-[#292929] h-[60px] rounded-sm 
                    px-4 gap-3 w-[95%]`,
                    children: [e.jsx(F, {
                        size: 30,
                        color: "#66696a"
                    }), e.jsx(y, {
                        value: x,
                        onChange: l,
                        placeholder: "Search for a bank",
                        className: `placeholder:text-[#969696] text-lg bg-[#292929] text-white 
                        outline-none border-none focus-visible:ring-offset-0 focus-visible:ring-0 px-0`
                    }), e.jsx(E, {
                        onClick: () => {
                            p(""), r(c || [])
                        },
                        size: 30
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col overflow-y-auto w-full items-center max-h-[80vh] pb-10 gap-6",
                    children: [x.trim().length <= 0 && e.jsxs("div", {
                        className: "flex flex-col w-[95%] gap-2",
                        children: [e.jsx("p", {
                            className: "font-extrabold text-lg",
                            children: "Popular Banks"
                        }), e.jsxs(D, {
                            className: "w-full whitespace-nowrap",
                            children: [e.jsx("div", {
                                className: "flex w-full gap-2 space-x-3 pb-2",
                                children: m ?.map(s => e.jsxs("div", {
                                    className: "flex flex-col items-center flex-shrink-0 max-w-[100px]",
                                    onClick: () => {
                                        d(s), i && i()
                                    },
                                    children: [e.jsx("img", {
                                        src: N(s.name),
                                        alt: s.name,
                                        className: "w-16 h-16 object-contain"
                                    }), e.jsx("p", {
                                        className: `text-sm w-full max-w-[70px] line-clamp-2 
                                            text-ellipsis text-center break-words h-fit`,
                                        children: s.name
                                    })]
                                }, s.id))
                            }), e.jsx(P, {
                                orientation: "horizontal"
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col w-[95%] gap-2",
                        children: [e.jsx("p", {
                            className: "font-extrabold text-lg",
                            children: "All"
                        }), e.jsx("div", {
                            className: "flex flex-col",
                            children: u ?.map(s => e.jsxs("div", {
                                className: "flex items-center flex-shrink-0 border-b border-[#292929] pb-2",
                                onClick: () => {
                                    d(s), i && i()
                                },
                                children: [e.jsx("img", {
                                    src: N(s.name),
                                    alt: s.name,
                                    className: "w-14 h-14 object-contain"
                                }), e.jsx("p", {
                                    className: "text-sm",
                                    children: s.name
                                })]
                            }, s.id))
                        })]
                    })]
                })]
            })
        })
    },
    oe = () => {
        const i = () => window.history.back(),
            [d, c] = a.useState(!1),
            [t, u] = a.useState(),
            [r, f] = a.useState(""),
            [o, x] = a.useState(),
            p = o === "verified" && !!t && r.trim().length == 10,
            [m, h] = a.useState(),
            j = () => {
                navigator.clipboard.readText().then(l => {
                    v(Number(l)) && l.trim().length === 10 && f(l)
                }).catch(() => {})
            };
        return a.useEffect(() => {
            const l = async () => {
                try {
                    x("verifying");
                    const {
                        data: s
                    } = await B.post("/api/accounts/resolve", {
                        account_number: r,
                        account_bank: t ?.code
                    });
                    if (s.status === "success") {
                        const n = s.data;
                        h({
                            recipient_name: n.account_name,
                            recipient_bank_name: t ?.name || "",
                            recipient_account_number: n.account_number
                        }), x("verified")
                    } else g(s.message).show(), x("failed")
                } catch (s) {
                    g(s).show(), x("failed")
                }
            };
            t && r.trim().length == 10 && l()
        }, [t, r]), e.jsxs(C, {
            children: [e.jsx(A, {
                title: "Bank Transfer"
            }), d && e.jsx(V, {
                onClose: () => c(!1),
                setSelectedBank: u
            }), e.jsxs("main", {
                className: `w-full flex flex-col items-center bg-[#121212] text-[#ffffff] 
                 min-h-screen pb-[20%]`,
                children: [e.jsx("div", {
                    className: "border-b border-[#1c1c1c] w-full flex justify-center py-4",
                    children: e.jsxs("div", {
                        className: "flex-between w-[95%] max-w-[650px] ",
                        children: [e.jsx(w, {
                            onClick: i,
                            size: 26,
                            className: "font-extrabold"
                        }), e.jsxs("p", {
                            className: "font-bold text-base inline-flex items-center gap-1",
                            children: [e.jsx("span", {
                                className: "font-extrabold text-xl",
                                children: "New NGN Recipeint"
                            }), e.jsx("span", {
                                className: "text-2xl",
                                children: "🇳🇬"
                            })]
                        }), e.jsx(w, {
                            className: "opacity-0"
                        })]
                    })
                }), e.jsxs("div", {
                    className: `w-[90%] max-w-[650px] flex flex-col gap-6 
                    items-center py-5 justify-between flex-1`,
                    children: [e.jsxs("div", {
                        className: "w-full flex flex-col gap-4",
                        children: [e.jsxs("div", {
                            className: "flex flex-col gap-1",
                            children: [e.jsx("p", {
                                children: "Account Number"
                            }), e.jsxs("div", {
                                className: `flex-between bg-[#292929] h-[65px] rounded-sm 
                                px-4 gap-3`,
                                children: [e.jsx(y, {
                                    maxLength: 10,
                                    value: r,
                                    onChange: l => v(+l.target.value) && f(l.target.value),
                                    placeholder: "Enter Account Number",
                                    className: `placeholder:text-[#5a5a5a] text-xl bg-[#292929] text-white 
                                    outline-none border-none focus-visible:ring-offset-0 focus-visible:ring-0 px-0`
                                }), e.jsxs("div", {
                                    onClick: j,
                                    className: "flex items-center text-[#4dd38c] gap-1",
                                    children: [e.jsx("p", {
                                        className: "text-sm font-extrabold",
                                        children: "PASTE"
                                    }), e.jsx(z, {
                                        size: 20
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [o === "verified" && e.jsxs(e.Fragment, {
                                    children: [e.jsx("div", {
                                        className: `flex h-[17px] w-[17px] bg-[#4dd38c] rounded-full 
                                        items-center justify-center`,
                                        children: e.jsx(T, {})
                                    }), e.jsx("p", {
                                        className: "text-[#4dd38c] text-sm font-bold",
                                        children: m ?.recipient_name.toUpperCase()
                                    })]
                                }), o === "failed" && e.jsx("p", {
                                    className: "text-rose-300 text-sm",
                                    children: "That's not a correct account number. Please check and try again."
                                }), o === "verifying" && e.jsx("p", {
                                    className: "text-[#4dd38c] text-sm",
                                    children: "Verifying account..."
                                })]
                            })]
                        }), e.jsxs("div", {
                            onClick: () => c(!0),
                            className: "flex flex-col gap-1",
                            children: [e.jsx("p", {
                                children: "Bank"
                            }), e.jsxs("div", {
                                className: `flex-between bg-[#292929] h-[65px] rounded-sm 
                                px-4`,
                                children: [t && e.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [e.jsx("img", {
                                        src: N(t.name),
                                        alt: t ?.name || "Bank Icon",
                                        className: "w-10 h-10 object-contain rounded-full"
                                    }), e.jsx("span", {
                                        className: "text-white text-xl truncate",
                                        children: t ?.name || "Bank Name"
                                    })]
                                }), !t && e.jsx("span", {
                                    className: "text-[#5a5a5a] text-xl",
                                    children: "Select Bank"
                                }), e.jsx(I, {
                                    color: "#979797",
                                    size: 22
                                })]
                            })]
                        })]
                    }), e.jsx(L, {
                        onClick: () => {
                            _.get(route("kuda.payment", {
                                recipient_name: m ?.recipient_name,
                                recipient_account_number: m ?.recipient_account_number,
                                recipient_bank_name: m ?.recipient_bank_name
                            }))
                        },
                        disabled: !p,
                        className: `w-full h-[55px] font-bold text-lg 
                            text-white bg-[#40186e] hover:bg-[#4a1c7b] transition-colors`,
                        children: "Next"
                    })]
                })]
            })]
        })
    };
export {
    oe as
    default
};