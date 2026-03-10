import {
    t as r
} from "./index-Dnc4ycMJ.js";
const t = async o => {
    try {
        await navigator.clipboard.writeText(o), r("Copied to clipboard", {
            description: o,
            action: {
                label: "Close",
                onClick: () => {}
            }
        })
    } catch (a) {
        r.error(a.message)
    }
};
export {
    t as c
};