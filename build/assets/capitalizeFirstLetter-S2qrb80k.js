const a = t => {
    if (t.trim().length <= 0) return t;
    const e = t[0].toUpperCase(),
        r = t.split("").filter((c, l) => l !== 0).join("").toLowerCase();
    return (e + r).replaceAll("-", " ").replaceAll("_", " ")
};
export {
    a as c
};