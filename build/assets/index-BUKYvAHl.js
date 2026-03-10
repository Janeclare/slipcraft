import {
    r as o,
    j as v
} from "./app-CPSemYgC.js";

function _(e, s = []) {
    let n = [];

    function f(a, t) {
        const c = o.createContext(t),
            r = n.length;
        n = [...n, t];
        const x = p => {
            const {
                scope: m,
                children: l,
                ...i
            } = p, d = m ?.[e] ?.[r] || c, S = o.useMemo(() => i, Object.values(i));
            return v.jsx(d.Provider, {
                value: S,
                children: l
            })
        };
        x.displayName = a + "Provider";

        function C(p, m) {
            const l = m ?.[e] ?.[r] || c,
                i = o.useContext(l);
            if (i) return i;
            if (t !== void 0) return t;
            throw new Error(`\`${p}\` must be used within \`${a}\``)
        }
        return [x, C]
    }
    const u = () => {
        const a = n.map(t => o.createContext(t));
        return function(c) {
            const r = c ?.[e] || a;
            return o.useMemo(() => ({
                [`__scope${e}`]: { ...c,
                    [e]: r
                }
            }), [c, r])
        }
    };
    return u.scopeName = e, [f, h(u, ...s)]
}

function h(...e) {
    const s = e[0];
    if (e.length === 1) return s;
    const n = () => {
        const f = e.map(u => ({
            useScope: u(),
            scopeName: u.scopeName
        }));
        return function(a) {
            const t = f.reduce((c, {
                useScope: r,
                scopeName: x
            }) => {
                const p = r(a)[`__scope${x}`];
                return { ...c,
                    ...p
                }
            }, {});
            return o.useMemo(() => ({
                [`__scope${s.scopeName}`]: t
            }), [t])
        }
    };
    return n.scopeName = s.scopeName, n
}

function b(e) {
    const s = o.useRef(e);
    return o.useEffect(() => {
        s.current = e
    }), o.useMemo(() => (...n) => s.current ?.(...n), [])
}
var P = globalThis ?.document ? o.useLayoutEffect : () => {};
export {
    P as a, _ as c, b as u
};