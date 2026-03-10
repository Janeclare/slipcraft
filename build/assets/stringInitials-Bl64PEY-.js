const e = r => {
    if (!r) throw new Error("Value is needed");
    return r.trim().length >= 2 ? `${r[0].toUpperCase()}${r[1].toUpperCase()}` : r[0].trim().toUpperCase()
};
export {
    e as S
};