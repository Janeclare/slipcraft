import {
    r as o,
    e as s
} from "./app-CPSemYgC.js";
import {
    a as u
} from "./index-BUKYvAHl.js";
var c = s.useId || (() => {}),
    n = 0;

function i(t) {
    const [r, a] = o.useState(c());
    return u(() => {
        a(e => e ?? String(n++))
    }, [t]), t || (r ? `radix-${r}` : "")
}
export {
    i as u
};