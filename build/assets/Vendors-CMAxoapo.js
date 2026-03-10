import {
    q as v,
    W as D,
    r as u,
    j as e,
    y as N,
    a as w
} from "./app-CPSemYgC.js";
import {
    A as S,
    a as B,
    I as z
} from "./AppLayout-BVugRKpX.js";
import {
    G as L
} from "./GoBack-CC6xQy9d.js";
import {
    A as P,
    a as A
} from "./avatar-BLCVZC4Y.js";
import {
    S as E
} from "./stringInitials-Bl64PEY-.js";
import {
    f as n
} from "./formatNumber-Ce-00Vs2.js";
import {
    D as I,
    a as O,
    b as $,
    c as M,
    d as U,
    e as R,
    f as V
} from "./dialog-BauOFWUU.js";
import {
    B as f
} from "./button-BamgVvPn.js";
import {
    t as F
} from "./index-Dnc4ycMJ.js";
import {
    s as G
} from "./showIntertiaErrors-Bokdg093.js";
import {
    L as H
} from "./Loader-DxAivhzx.js";
import {
    c as T
} from "./index-BIbNlVZ0.js";
import {
    c as j
} from "./polished.esm-Cyjuaya6.js";
import {
    C as q
} from "./clock-D_O17udO.js";
import {
    C as W
} from "./circle-check-DFO3SqUr.js";
import {
    c as Y
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    A as J
} from "./ApplyVendorModal-DT9eSAp_.js";
import {
    S as K
} from "./shopping-bag-cJyCFxgy.js";
import {
    R as Q
} from "./refresh-cw-Dn0TKcRa.js";
import {
    U as X
} from "./users-ZqGOPOiM.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./index-BUKYvAHl.js";
import "./index-TtBBfnyI.js";
import "./index-DdW_XmhI.js";
import "./Combination-C3j38xtn.js";
import "./x-Bf_gKvvP.js";
const Z = Y("Timer", [
        ["line", {
            x1: "10",
            x2: "14",
            y1: "2",
            y2: "2",
            key: "14vaq8"
        }],
        ["line", {
            x1: "12",
            x2: "15",
            y1: "14",
            y2: "11",
            key: "17fdiu"
        }],
        ["circle", {
            cx: "12",
            cy: "14",
            r: "8",
            key: "1e1u0o"
        }]
    ]),
    ee = ({
        listing: s
    }) => {
        const {
            props: p
        } = v(), {
            platform: r,
            auth: m,
            errors: a
        } = p, {
            data: l,
            setData: h,
            processing: g,
            errors: c,
            post: t,
            clearErrors: b
        } = D({
            amount: "5000",
            price: s.price,
            points: 0,
            seller_id: s.vendor_id
        }), x = ["1500", "2000", "5000", "10000", "15000", "25000", "50000", "100000"], i = o => o >= 1e5 ? `${o/1e3}k` : n(o), [d, y] = u.useState(!1), _ = s.vendor_id == m.user ?.id;
        u.useEffect(() => {
            const o = Number(l.amount) / l.price;
            h({ ...l,
                points: o
            })
        }, [l.amount, l.price]);
        const C = () => {
            b(), t(route("order.store"), {
                onSuccess: () => {
                    F.success("Succesful"), y(!1)
                },
                onError: o => {
                    G(o)
                }
            })
        };
        return e.jsxs(I, {
            open: d,
            onOpenChange: y,
            children: [e.jsx(O, {
                asChild: !0,
                children: e.jsx(f, {
                    disabled: _,
                    size: "lg",
                    className: "text-white font-bold text-lg",
                    style: {
                        backgroundColor: r.primary_color
                    },
                    children: _ ? "Owner" : "Buy"
                })
            }), e.jsxs($, {
                children: [e.jsxs(M, {
                    children: [e.jsx(U, {
                        children: "Buy Point"
                    }), e.jsx(R, {})]
                }), e.jsxs("div", {
                    className: "flex flex-col gap-4",
                    children: [e.jsxs("div", {
                        className: "flex flex-col gap-2",
                        children: [e.jsxs("div", {
                            className: "flex gap-1 items-center",
                            children: [e.jsx("p", {
                                className: "text-ts text-sm",
                                children: "Price"
                            }), e.jsxs("p", {
                                className: "text-lg font-bold text-green-500",
                                children: [n(s.price), " NGN"]
                            })]
                        }), c.price && e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: c.price
                        }), e.jsxs("div", {
                            className: "flex gap-1",
                            children: [e.jsx("p", {
                                className: "text-ts text-sm",
                                children: "Point balance"
                            }), e.jsxs("p", {
                                className: "text-sm font-bold",
                                children: [n(s.point_balance), " pts"]
                            })]
                        }), e.jsxs("div", {
                            className: "flex gap-1",
                            children: [e.jsx("p", {
                                className: "text-ts text-sm",
                                children: "Payment Duration"
                            }), e.jsx("p", {
                                className: "text-sm font-bold",
                                children: e.jsxs("span", {
                                    children: [s.payment_duration, "Min(s)"]
                                })
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col w-full gap-3",
                        children: [e.jsx("p", {
                            className: "text-sm font-semibold",
                            children: "Select amount to buy"
                        }), e.jsx("div", {
                            className: "grid grid-cols-4 gap-2",
                            children: x.map(o => {
                                const k = l.amount === o;
                                return e.jsxs("button", {
                                    type: "button",
                                    onClick: () => h("amount", o),
                                    className: T("relative rounded-lg border-2 py-2.5 px-1 text-center transition-all text-sm font-semibold cursor-pointer", k ? "border-transparent text-white shadow-md scale-[1.02]" : "border-border hover:border-muted-foreground/30 hover:bg-muted/50"),
                                    style: k ? {
                                        backgroundColor: r.primary_color
                                    } : void 0,
                                    children: ["₦", i(Number(o))]
                                }, o)
                            })
                        }), c.amount && e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: c.amount
                        }), e.jsxs("div", {
                            className: "flex-between rounded-lg bg-muted/50 px-3 py-2.5",
                            children: [e.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "You'll receive"
                            }), e.jsxs("p", {
                                className: "font-bold",
                                style: {
                                    color: r.primary_color
                                },
                                children: [n(l.points), " pts"]
                            })]
                        }), c.points && e.jsx("p", {
                            className: "text-rose-500 text-sm",
                            children: c.points
                        }), e.jsx(f, {
                            style: {
                                backgroundColor: r.primary_color
                            },
                            onClick: C,
                            className: "text-white w-full h-11 font-semibold",
                            children: g ? e.jsx(H, {}) : `Buy for ₦${n(Number(l.amount))}`
                        })]
                    }), a.message && e.jsx("p", {
                        className: "text-rose-500 text-sm",
                        children: a.message
                    }), a.no_whatsapp && e.jsxs("p", {
                        className: "text-rose-500 text-sm items-center",
                        children: [e.jsx("span", {
                            children: a.no_whatsapp
                        }), " ", e.jsx("br", {}), e.jsx("span", {
                            className: "underline text-lime-400 font-bold cursor-pointer",
                            onClick: () => N.get(route("profile.edit")),
                            children: "Click here to update your whatsapp number."
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx("p", {
                            className: "font-bold",
                            children: "Vendor's Terms"
                        }), e.jsx("p", {
                            className: "text-sm text-ts max-h-[100px] overflow-auto",
                            children: s.vendor_terms
                        })]
                    }), e.jsxs("div", {
                        className: "flex-between",
                        children: [e.jsx("p", {
                            children: "Seller Username"
                        }), e.jsx(w, {
                            className: "underline",
                            href: route("vendor.show", {
                                id: s.vendor_id
                            }),
                            children: s.vendor_name
                        })]
                    })]
                }), e.jsx(V, {
                    className: "gap-y-2",
                    children: e.jsx(f, {
                        onClick: () => y(!1),
                        variant: "outline",
                        children: "Cancel"
                    })
                })]
            })]
        })
    },
    se = ({
        listing: s
    }) => {
        const {
            props: p
        } = v(), {
            platform: r
        } = p, m = new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: !0
        }).format(new Date(`${s.last_seen}`)), a = s.completion_rate >= 90 ? "#22c55e" : s.completion_rate >= 70 ? "#eab308" : "#ef4444";
        return e.jsxs("div", {
            className: "group relative flex flex-col w-full rounded-2xl border bg-background overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-transparent hover:-translate-y-0.5",
            children: [e.jsx("div", {
                className: "h-[3px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                style: {
                    backgroundColor: r.primary_color
                }
            }), e.jsxs("div", {
                className: "p-4 flex flex-col gap-3",
                children: [e.jsxs("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [e.jsxs(w, {
                        href: route("vendor.show", {
                            id: s.vendor_id
                        }),
                        className: "flex items-center gap-3 min-w-0",
                        children: [e.jsxs("div", {
                            className: "relative flex-shrink-0",
                            children: [e.jsx(P, {
                                className: "h-11 w-11 ring-2 ring-background shadow-sm",
                                children: e.jsx(A, {
                                    className: "text-white text-sm font-bold",
                                    style: {
                                        background: `linear-gradient(135deg, ${r.primary_color}, ${j(.12,r.primary_color)})`
                                    },
                                    children: E(s.vendor_name)
                                })
                            }), e.jsx("span", {
                                className: "absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background",
                                style: {
                                    backgroundColor: a
                                }
                            })]
                        }), e.jsxs("div", {
                            className: "flex flex-col min-w-0",
                            children: [e.jsx("span", {
                                className: "font-semibold text-sm truncate group-hover:underline",
                                children: s.vendor_name
                            }), e.jsxs("span", {
                                className: "text-[11px] text-muted-foreground inline-flex items-center gap-1 mt-0.5",
                                children: [e.jsx(q, {
                                    size: 10,
                                    className: "opacity-60"
                                }), m]
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex items-center gap-3 flex-shrink-0",
                        children: [e.jsxs("div", {
                            className: "text-right",
                            children: [e.jsx("p", {
                                className: "text-[10px] uppercase tracking-wider text-muted-foreground/70 font-medium",
                                children: "Per point"
                            }), e.jsxs("p", {
                                className: "text-lg font-bold tabular-nums -mt-0.5",
                                style: {
                                    color: r.primary_color
                                },
                                children: ["₦", n(s.price)]
                            })]
                        }), e.jsx(ee, {
                            listing: s
                        })]
                    })]
                }), e.jsxs("div", {
                    className: "flex items-center gap-2 flex-wrap",
                    children: [e.jsxs("span", {
                        className: "inline-flex items-center gap-1 font-semibold text-[11px] rounded-full px-2 py-0.5",
                        style: {
                            backgroundColor: j(.38, a),
                            color: a
                        },
                        children: [e.jsx(W, {
                            size: 10
                        }), n(s.completion_rate), "%"]
                    }), e.jsxs("span", {
                        className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/50 rounded-full px-2 py-0.5",
                        children: [n(s.completed_orders_count), " orders"]
                    }), e.jsxs("span", {
                        className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/50 rounded-full px-2 py-0.5",
                        children: [n(s.point_balance), " pts"]
                    }), e.jsxs("span", {
                        className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/50 rounded-full px-2 py-0.5",
                        children: ["Min ", n(s.min_point_sales)]
                    }), e.jsxs("span", {
                        className: "inline-flex items-center gap-1 text-[11px] text-muted-foreground ml-auto",
                        children: [e.jsx(Z, {
                            size: 10,
                            className: "opacity-60"
                        }), s.payment_duration, " min"]
                    })]
                })]
            })]
        })
    },
    Be = ({
        auth: s,
        listings: p
    }) => {
        const {
            platform: r
        } = v().props, [m, a] = u.useState(p), [l, h] = u.useState(), g = t => {
            h(t), a(b => {
                const x = [...b];
                return t === "price" ? x.sort((i, d) => i.price - d.price) : t === "order-number" ? x.sort((i, d) => d.completed_orders_count - i.completed_orders_count) : t === "completion-rate" && x.sort((i, d) => d.completion_rate - i.completion_rate), x
            })
        };
        u.useEffect(() => {
            const t = setInterval(() => {
                N.visit(route("vendors"))
            }, 3e5);
            return () => clearInterval(t)
        }, []);
        const c = [{
            key: "price",
            label: "Lowest Price"
        }, {
            key: "order-number",
            label: "Most Orders"
        }, {
            key: "completion-rate",
            label: "Best Rate"
        }];
        return e.jsxs(S, {
            children: [e.jsx(B, {
                title: "Vendors"
            }), e.jsx("main", {
                className: "w-full flex justify-center",
                children: e.jsxs("div", {
                    className: "w-[95%] max-w-[700px] flex flex-col gap-4 items-center pt-5 pb-10",
                    children: [e.jsxs("div", {
                        className: "w-full flex items-center justify-between",
                        children: [e.jsx(L, {}), e.jsx("h1", {
                            className: "font-bold text-lg",
                            children: "Buy Points (P2P)"
                        }), e.jsx(w, {
                            href: route("orders"),
                            children: e.jsxs(f, {
                                size: "sm",
                                variant: "outline",
                                className: "gap-1.5",
                                children: [e.jsx(K, {
                                    size: 14
                                }), "Orders"]
                            })
                        })]
                    }), e.jsxs("div", {
                        className: "w-full rounded-lg px-3.5 py-2.5 flex items-center gap-2 text-sm",
                        style: {
                            backgroundColor: j(.38, r.primary_color)
                        },
                        children: [e.jsx(z, {
                            size: 15,
                            className: "flex-shrink-0",
                            style: {
                                color: r.primary_color
                            }
                        }), e.jsx("p", {
                            className: "text-muted-foreground",
                            children: "Pick a vendor, place an order, pay via bank transfer, mark as paid and receive your points."
                        })]
                    }), e.jsxs("div", {
                        className: "w-full flex items-center justify-between gap-2",
                        children: [e.jsx("div", {
                            className: "flex items-center gap-1.5",
                            children: c.map(t => e.jsx("button", {
                                onClick: () => g(t.key),
                                className: "px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border",
                                style: l === t.key ? {
                                    backgroundColor: r.primary_color,
                                    color: "white",
                                    borderColor: r.primary_color
                                } : {
                                    borderColor: "var(--border)"
                                },
                                children: t.label
                            }, t.key))
                        }), s.user ?.vendor === "yes" && e.jsxs(f, {
                            size: "sm",
                            variant: "outline",
                            className: "gap-1.5 text-xs",
                            onClick: () => N.get(route("vendor.refresh_page")),
                            children: [e.jsx(Q, {
                                size: 13
                            }), "Update Seen"]
                        })]
                    }), e.jsxs("div", {
                        className: "flex w-full flex-col gap-3",
                        children: [m.map(t => e.jsx(se, {
                            listing: t
                        }, t.vendor_name)), m.length === 0 && e.jsxs("div", {
                            className: "w-full flex flex-col items-center gap-4 py-12",
                            children: [e.jsx("div", {
                                className: "w-14 h-14 rounded-full flex items-center justify-center",
                                style: {
                                    backgroundColor: j(.35, r.primary_color)
                                },
                                children: e.jsx(X, {
                                    size: 24,
                                    style: {
                                        color: r.primary_color
                                    }
                                })
                            }), e.jsxs("div", {
                                className: "text-center",
                                children: [e.jsx("p", {
                                    className: "font-semibold mb-1",
                                    children: "No vendors available"
                                }), e.jsx("p", {
                                    className: "text-sm text-muted-foreground max-w-xs mx-auto",
                                    children: "Check back later or use crypto to buy points instantly."
                                })]
                            }), s.user ?.vendor === "no" && e.jsx(J, {})]
                        })]
                    })]
                })
            })]
        })
    };
export {
    Be as
    default
};