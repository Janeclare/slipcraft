const n = (t, e = "2-digit", o) => new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: void 0,
    hour12: o,
    year: e
}).format(t);
export {
    n as f
};