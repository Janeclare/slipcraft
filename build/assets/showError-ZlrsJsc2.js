import {
    t as o
} from "./index-Dnc4ycMJ.js";
const t = s => {
    const e = s.response ? s.response.data.message : s.message;
    return {
        msg: e,
        show: () => o.error(e)
    }
};
export {
    t as s
};