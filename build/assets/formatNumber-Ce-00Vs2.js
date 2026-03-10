const o = (e, r = 2, t) => {
    if (typeof e == "number" && Number.isFinite(e)) return e.toLocaleString("en-US", {
        maximumFractionDigits: r,
        minimumFractionDigits: t
    });
    throw new Error("This is not a valid number")
};
export {
    o as f
};