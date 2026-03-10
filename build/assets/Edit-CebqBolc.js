import {
    q as n,
    r as p,
    j as e,
    a as t
} from "./app-CPSemYgC.js";
import c from "./DeleteUserForm--uEFdFPJ.js";
import d from "./UpdatePasswordForm-CGwFJJ2y.js";
import x from "./UpdateProfileInformationForm-Bd-qGWJR.js";
import {
    I as f,
    a as h,
    L as g
} from "./AppLayout-BVugRKpX.js";
import {
    U as u
} from "./UserLayout-P-Xlti_8.js";
import {
    B as r
} from "./button-BamgVvPn.js";
import {
    D as j,
    a as b,
    b as w,
    c as N,
    d as _,
    e as y,
    f as k
} from "./dialog-BauOFWUU.js";
import {
    f as o
} from "./formatNumber-Ce-00Vs2.js";
import {
    a as v
} from "./index-Cr56Fz-Y.js";
import "./transition-FUaqmUen.js";
import "./index-BIbNlVZ0.js";
import "./label-DzYRBl-l.js";
import "./index-TtBBfnyI.js";
import "./input-MxT5BQBW.js";
import "./showIntertiaErrors-Bokdg093.js";
import "./index-Dnc4ycMJ.js";
import "./PhoneCustomInput-BJtrTbNc.js";
import "./index-D5rHYsT_.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./polished.esm-Cyjuaya6.js";
import "./mode-toggle-BKQyjCmw.js";
import "./dropdown-menu-73g9f9Cf.js";
import "./index-Dc_FVRD7.js";
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
import "./index-DdW_XmhI.js";
import "./x-Bf_gKvvP.js";
const D = () => {
    const {
        props: i
    } = n(), {
        platform: s
    } = i, [l, a] = p.useState(!1);
    return e.jsxs(j, {
        open: l,
        onOpenChange: a,
        children: [e.jsx(b, {
            asChild: !0,
            children: e.jsxs(r, {
                style: {
                    backgroundColor: s.primary_color
                },
                className: "text-white",
                children: ["Fees Info ", e.jsx(f, {})]
            })
        }), e.jsxs(w, {
            children: [e.jsxs(N, {
                children: [e.jsx(_, {
                    children: "Fees Info"
                }), e.jsx(y, {
                    children: "Here we will show the fees info and how much we charge."
                })]
            }), e.jsxs("div", {
                className: "flex flex-col w-full max-w-[500px] px-2 gap-4",
                children: [e.jsxs("div", {
                    className: "flex w-full flex-col gap-1",
                    children: [e.jsx("h3", {
                        style: {
                            color: s.primary_color
                        },
                        className: "text-lg font-semibold",
                        children: "Bank Receipt"
                    }), e.jsxs("p", {
                        className: "text-sm ",
                        children: ["You're charged ", s.bank_slip_percent_fee, "% of the amount you wish to send when creating a bank receipt, with a minimum fee of", " ", o(s.bank_slip_min_fee), " points and a maximum fee of", " ", o(s.bank_slip_max_fee), " points."]
                    })]
                }), e.jsxs("div", {
                    className: "flex w-full flex-col gap-1",
                    children: [e.jsx("h3", {
                        style: {
                            color: s.primary_color
                        },
                        className: "text-lg font-semibold",
                        children: "Changing Bank Balance"
                    }), e.jsxs("p", {
                        className: "text-sm ",
                        children: ["You will be able to change your bank balance as many times as you want, but you will be charged", " ", o(s.bank_balance_change_fee), " ", "points per change."]
                    })]
                }), e.jsxs("div", {
                    className: "flex w-full flex-col gap-1",
                    children: [e.jsx("h3", {
                        style: {
                            color: s.primary_color
                        },
                        className: "text-lg font-semibold",
                        children: "Flash Email"
                    }), e.jsxs("p", {
                        className: "text-sm ",
                        children: ["Sending flash email has a fixed price of", " ", o(s.email_slip_fee), " points per flash email sent."]
                    })]
                }), e.jsxs("div", {
                    className: "flex w-full flex-col gap-1",
                    children: [e.jsx("h3", {
                        style: {
                            color: s.primary_color
                        },
                        className: "text-lg font-semibold",
                        children: "Becoming a Vendor"
                    }), e.jsxs("p", {
                        className: "text-sm ",
                        children: ["All users can apply to become a vendor, but you will be charged a one time fee of", " ", o(s.vendor_application_fee), " ", "points."]
                    })]
                })]
            }), e.jsx(k, {
                className: "gap-y-2",
                children: e.jsx(r, {
                    onClick: () => a(!1),
                    variant: "outline",
                    children: "Close"
                })
            })]
        })]
    })
};

function we({
    auth: i,
    platform: s,
    mustVerifyEmail: l,
    status: a
}) {
    const m = s.telegram_support_link ?? void 0;
    return e.jsxs(u, {
        children: [e.jsx(h, {
            title: "Profile"
        }), e.jsx("div", {
            className: "py-12",
            children: e.jsxs("div", {
                className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",
                children: [e.jsx("div", {
                    className: "p-4 sm:p-8 bg-background dark:bg-foreground shadow sm:rounded-lg",
                    children: e.jsxs("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [i.user ?.role === "admin" && e.jsx(t, {
                            href: route("admin.dashboard"),
                            children: e.jsx(r, {
                                variant: "outline",
                                children: "Switch to admin"
                            })
                        }), e.jsx(D, {}), e.jsx("a", {
                            href: m,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: e.jsxs(r, {
                                variant: "secondary",
                                children: ["Contact us via Telegram ", e.jsx(v, {})]
                            })
                        }), e.jsx(t, {
                            method: "post",
                            href: route("logout"),
                            children: e.jsxs(r, {
                                variant: "destructive",
                                children: ["Logout ", e.jsx(g, {})]
                            })
                        })]
                    })
                }), e.jsx("div", {
                    className: "p-4 sm:p-8 bg-background dark:bg-foreground shadow sm:rounded-lg",
                    children: e.jsx(x, {
                        mustVerifyEmail: l,
                        status: a,
                        className: "max-w-xl"
                    })
                }), e.jsx("div", {
                    className: "p-4 sm:p-8 bg-background dark:bg-foreground shadow sm:rounded-lg",
                    children: e.jsx(d, {
                        className: "max-w-xl"
                    })
                }), e.jsx("div", {
                    className: "p-4 sm:p-8 bg-background dark:bg-foreground shadow sm:rounded-lg",
                    children: e.jsx(c, {
                        className: "max-w-xl"
                    })
                })]
            })
        })]
    })
}
export {
    we as
    default
};