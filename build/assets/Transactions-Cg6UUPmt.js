import {
    r as s,
    j as t
} from "./app-CPSemYgC.js";
import {
    a as e
} from "./AppLayout-BVugRKpX.js";
import {
    T as p
} from "./TransactionCard-pAI8RxS2.js";
import {
    B as a
} from "./button-BamgVvPn.js";
import {
    U as l
} from "./UserLayout-P-Xlti_8.js";
import "./index-Dnc4ycMJ.js";
import "./index-BIbNlVZ0.js";
import "./index-CGcBZyi7.js";
import "./iconBase-BweG_smQ.js";
import "./createLucideIcon-rN-Z3mCX.js";
import "./formatDate-DSWK92vn.js";
import "./formatNumber-Ce-00Vs2.js";
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
const Q = ({
    transactions: o
}) => {
    const [i, m] = s.useState(20);
    return t.jsxs(l, {
        children: [t.jsx(e, {
            title: "Transactions"
        }), t.jsxs("div", {
            className: "flex w-full flex-col gap-10",
            children: [t.jsx("h1", {
                className: "font-bold text-2xl sm:text-3xl md:text-4xl",
                children: "Transactions"
            }), t.jsxs("div", {
                className: `flex flex-col w-full shadow-custom-light 
                dark:shadow-custom-dark p-5 gap-2 rounded-xl overflow-auto 
                max-h-[65vh]`,
                children: [t.jsxs(t.Fragment, {
                    children: [o.slice(0, i).map(r => t.jsx(p, {
                        transaction: r
                    }, r.id)), i < o.length && t.jsx("div", {
                        className: "flex justify-center w-full mt-3",
                        children: t.jsx(a, {
                            onClick: () => m(r => r + 5),
                            children: "Load More"
                        })
                    })]
                }), o.length <= 0 && t.jsx("div", {
                    className: "flex justify-center items-center",
                    children: "No available transactions"
                })]
            })]
        })]
    })
};
export {
    Q as
    default
};