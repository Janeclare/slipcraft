import {
    r as u
} from "./app-CPSemYgC.js";
import {
    u as c
} from "./index-BUKYvAHl.js";

function l(e, t = globalThis ?.document) {
    const o = c(e);
    u.useEffect(() => {
        const r = a => {
            a.key === "Escape" && o(a)
        };
        return t.addEventListener("keydown", r, {
            capture: !0
        }), () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }, [o, t])
}
var n = 0;

function f() {
    u.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? s()), document.body.insertAdjacentElement("beforeend", e[1] ?? s()), n++, () => {
            n === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()), n--
        }
    }, [])
}

function s() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
}
export {
    f as a, l as u
};