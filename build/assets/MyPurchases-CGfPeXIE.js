import {
    q as i,
    j as e,
    a
} from "./app-CPSemYgC.js";
import {
    a as m
} from "./AppLayout-BVugRKpX.js";
import {
    G as l
} from "./GoBack-CC6xQy9d.js";
import {
    U as p
} from "./UserLayout-P-Xlti_8.js";
import {
    f as c
} from "./formatNumber-Ce-00Vs2.js";
import {
    t as n
} from "./index-Dnc4ycMJ.js";
import {
    B as o
} from "./button-BamgVvPn.js";
import {
    C as d
} from "./copy-CA1ynquI.js";
import {
    P as x
} from "./package-CYq7Y392.js";
import {
    E as f
} from "./external-link-B9zueEzt.js";
import {
    c as h
} from "./createLucideIcon-rN-Z3mCX.js";
import {
    C as u
} from "./code-C-jukJBp.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./polished.esm-Cyjuaya6.js";
import "./mode-toggle-BKQyjCmw.js";
import "./dropdown-menu-73g9f9Cf.js";
import "./index-Dc_FVRD7.js";
import "./index-TtBBfnyI.js";
import "./index-BUKYvAHl.js";
import "./index-bfqS6E9x.js";
import "./index-CChplcHQ.js";
import "./index-ClHHFVVV.js";
import "./floating-ui.react-dom-CPrMKUU6.js";
import "./index-D_XWqw2c.js";
import "./index-BN1_Zxci.js";
import "./index-B-GRoRe2.js";
import "./Combination-C3j38xtn.js";
import "./chevron-right-Wmdl5VZJ.js";
import "./check-CsA8fo_3.js";
import "./avatar-BLCVZC4Y.js";
import "./stringInitials-Bl64PEY-.js";
import "./copyToClipboard-B49pzkZl.js";
import "./user-plus-3llJDC4d.js";
import "./index-C4i189TA.js";
import "./settings-KYD-P5eY.js";
import "./dollar-sign-4CE7QsSH.js";
import "./users-ZqGOPOiM.js";
const g = h("FileText", [
        ["path", {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }],
        ["path", {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }],
        ["path", {
            d: "M10 9H8",
            key: "b1mrlr"
        }],
        ["path", {
            d: "M16 13H8",
            key: "t4e002"
        }],
        ["path", {
            d: "M16 17H8",
            key: "z1uh3a"
        }]
    ]),
    se = ({
        purchases: s
    }) => {
        const {
            platform: t
        } = i().props;
        return e.jsxs(p, {
            children: [e.jsx(m, {
                title: "My Script Purchases"
            }), e.jsxs("div", {
                className: "flex flex-col gap-5",
                children: [e.jsx(l, {}), e.jsx("h1", {
                    className: "font-bold text-2xl sm:text-3xl",
                    children: "My Script Purchases"
                }), e.jsxs("div", {
                    className: "flex flex-col gap-3",
                    children: [s.map(r => e.jsxs(a, {
                        href: route("services.script.purchase.receipt", r.id),
                        className: "border rounded-xl overflow-hidden bg-background hover:border-transparent hover:shadow-md transition-all cursor-pointer",
                        children: [e.jsxs("div", {
                            className: "flex items-center justify-between flex-wrap gap-1 px-4 py-2 border-b bg-muted/40",
                            children: [e.jsxs("button", {
                                onClick: () => {
                                    navigator.clipboard.writeText(r.purchase_key), n.success("Purchase key copied!")
                                },
                                className: "font-mono text-sm font-bold flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity",
                                style: {
                                    color: t.primary_color
                                },
                                children: [r.purchase_key, e.jsx(d, {
                                    size: 12
                                })]
                            }), e.jsx("span", {
                                className: "text-xs text-muted-foreground",
                                children: new Date(r.created_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })
                            })]
                        }), e.jsxs("div", {
                            className: "p-4 flex flex-col sm:flex-row gap-4",
                            children: [r.script ?.preview_image_path && e.jsx("img", {
                                src: `/storage/${r.script.preview_image_path}`,
                                alt: r.script ?.name,
                                className: "w-full sm:w-[120px] h-[80px] object-cover rounded-lg"
                            }), e.jsxs("div", {
                                className: "flex-1 flex flex-col gap-1.5",
                                children: [e.jsx("h3", {
                                    className: "font-semibold text-lg",
                                    children: r.script ?.name ?? "Deleted Script"
                                }), e.jsxs("div", {
                                    className: "flex flex-wrap gap-x-4 gap-y-1 text-sm",
                                    children: [e.jsxs("span", {
                                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
                                        style: {
                                            backgroundColor: `${t.primary_color}20`,
                                            color: t.primary_color
                                        },
                                        children: [e.jsx(x, {
                                            size: 12
                                        }), r.purchase_type === "script_only" ? "Script Only" : "Script + Setup"]
                                    }), e.jsxs("span", {
                                        className: "text-muted-foreground",
                                        children: [c(r.point_amount), " ", "points"]
                                    })]
                                })]
                            }), e.jsxs("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [r.script ?.demo_url && e.jsx("a", {
                                    href: r.script.demo_url.startsWith("http") ? r.script.demo_url : `https://${r.script.demo_url}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: e.jsxs(o, {
                                        variant: "outline",
                                        size: "sm",
                                        className: "gap-1",
                                        children: [e.jsx(f, {
                                            size: 14
                                        }), "Demo"]
                                    })
                                }), e.jsxs(o, {
                                    size: "sm",
                                    style: {
                                        backgroundColor: t.primary_color
                                    },
                                    className: "text-white gap-1",
                                    children: [e.jsx(g, {
                                        size: 14
                                    }), "View Receipt"]
                                })]
                            })]
                        })]
                    }, r.id)), s.length === 0 && e.jsxs("div", {
                        className: "flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground",
                        children: [e.jsx(u, {
                            size: 40
                        }), e.jsx("p", {
                            className: "text-lg font-medium",
                            children: "No purchases yet"
                        }), e.jsx("p", {
                            className: "text-sm",
                            children: "Scripts you purchase will appear here."
                        })]
                    })]
                })]
            })]
        })
    };
export {
    se as
    default
};