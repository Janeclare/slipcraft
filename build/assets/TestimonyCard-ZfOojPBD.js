import {
    q as j,
    W as f,
    r as g,
    j as e
} from "./app-CPSemYgC.js";
import {
    c as S
} from "./index-CitaMW1f.js";
import {
    A as F,
    b as A,
    a as I
} from "./avatar-BLCVZC4Y.js";
import {
    S as L
} from "./stringInitials-Bl64PEY-.js";
import {
    D as _,
    a as v,
    b as N,
    c as C,
    d as y,
    e as b,
    f as w
} from "./dialog-BauOFWUU.js";
import {
    B as i
} from "./button-BamgVvPn.js";
import {
    t as T
} from "./index-Dnc4ycMJ.js";
import {
    s as D
} from "./showIntertiaErrors-Bokdg093.js";
import {
    I as x
} from "./input-MxT5BQBW.js";
import {
    L as d
} from "./label-DzYRBl-l.js";
import {
    i as R
} from "./isNumber-BPVTmlLX.js";
import {
    T as z
} from "./textarea-D5O83yDd.js";
import {
    S as H
} from "./square-pen-DXyr7M_P.js";
import {
    T as M
} from "./trash-2-CiMSE6TR.js";
const O = ({
        testimony: t
    }) => {
        const {
            props: c
        } = j(), {
            platform: o
        } = c, {
            data: a,
            setData: n,
            processing: l,
            errors: r,
            post: m,
            clearErrors: h
        } = f({
            star_rating: t.star_rating,
            content: t.content,
            client_name: t.client_name,
            client_country: t.client_country,
            client_avatar_path: null,
            testimony_id: t.id
        }), [E, p] = g.useState(!1), k = () => {
            h(), m(route("testimony.update"), {
                onSuccess: () => {
                    T.success("Testimony updated"), p(!1)
                },
                onError: s => {
                    D(s)
                }
            })
        };
        return e.jsxs(_, {
            open: E,
            onOpenChange: p,
            children: [e.jsx(v, {
                asChild: !0,
                children: e.jsx(i, {
                    size: "icon",
                    children: e.jsx(H, {})
                })
            }), e.jsxs(N, {
                children: [e.jsxs(C, {
                    children: [e.jsx(y, {
                        children: "Edit Testimony"
                    }), e.jsx(b, {
                        children: "Make changes to the testimony details below."
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col w-full gap-3 max-h-[450px] overflow-auto p-1",
                    children: [e.jsxs("div", {
                        className: "flex justify-center flex-col items-center",
                        children: [(a.client_avatar_path || t.client_avatar_path) && e.jsx("img", {
                            className: "w-full max-w-[100px]",
                            src: a.client_avatar_path ? URL.createObjectURL(a.client_avatar_path) : t.client_avatar_path || "",
                            alt: "Client avatar"
                        }), e.jsxs("div", {
                            children: [e.jsx(d, {
                                htmlFor: "client_avatar_path",
                                children: "Client Avatar"
                            }), e.jsx(x, {
                                type: "file",
                                id: "client_avatar_path",
                                name: "client_avatar_path",
                                accept: ".jpeg,.png,.jpg,.gif,.svg",
                                onChange: s => n("client_avatar_path", s.target.files ?.[0] || null)
                            }), e.jsx("p", {
                                className: "text-rose-500 text-sm",
                                children: r.client_avatar_path
                            })]
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1 w-full",
                        children: [e.jsx(d, {
                            htmlFor: "star_rating",
                            children: "Star Rating"
                        }), e.jsx(x, {
                            id: "star_rating",
                            onChange: s => {
                                const u = +s.target.value;
                                R(u) && n("star_rating", u)
                            },
                            value: a.star_rating,
                            placeholder: "Enter Number between 1 and 5"
                        }), e.jsx("p", {
                            className: "text-sm text-rose-500",
                            children: r.star_rating
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(d, {
                            htmlFor: "content",
                            children: "Testimony Content"
                        }), e.jsx(z, {
                            id: "content",
                            onChange: s => n("content", s.target.value),
                            value: a.content,
                            placeholder: "Enter testimony content"
                        }), e.jsx("p", {
                            className: "text-sm text-rose-500",
                            children: r.content
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(d, {
                            htmlFor: "client_name",
                            children: "Client Name"
                        }), e.jsx(x, {
                            id: "client_name",
                            onChange: s => n("client_name", s.target.value),
                            value: a.client_name,
                            placeholder: "Enter client name"
                        }), e.jsx("p", {
                            className: "text-sm text-rose-500",
                            children: r.client_name
                        })]
                    }), e.jsxs("div", {
                        className: "flex flex-col gap-1",
                        children: [e.jsx(d, {
                            htmlFor: "client_country",
                            children: "Client Country Name"
                        }), e.jsx(x, {
                            id: "client_country",
                            onChange: s => n("client_country", s.target.value),
                            value: a.client_country,
                            placeholder: "Enter client country"
                        }), e.jsx("p", {
                            className: "text-sm text-rose-500",
                            children: r.client_country
                        })]
                    })]
                }), e.jsxs(w, {
                    children: [e.jsx(i, {
                        onClick: () => p(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(i, {
                        disabled: l,
                        style: {
                            backgroundColor: o.primary_color
                        },
                        onClick: k,
                        className: "text-white",
                        children: "Update"
                    })]
                })]
            })]
        })
    },
    U = ({
        testimony: t
    }) => {
        const {
            props: c
        } = j(), {
            platform: o
        } = c, {
            processing: a,
            post: n
        } = f({
            testimony_id: t.id
        }), [l, r] = g.useState(!1), m = () => {
            n(route("testimony.destroy"), {
                onSuccess: () => {
                    T.success("Testimony Deleted"), r(!1)
                },
                onError: h => {
                    D(h)
                }
            })
        };
        return e.jsxs(_, {
            open: l,
            onOpenChange: r,
            children: [e.jsx(v, {
                asChild: !0,
                children: e.jsx(i, {
                    variant: "destructive",
                    size: "icon",
                    children: e.jsx(M, {})
                })
            }), e.jsxs(N, {
                children: [e.jsxs(C, {
                    children: [e.jsx(y, {
                        children: "Are you absolutely sure?"
                    }), e.jsx(b, {
                        children: "This action cannot be undone. This will permanently delete this testimony."
                    })]
                }), e.jsx("div", {
                    className: ""
                }), e.jsxs(w, {
                    children: [e.jsx(i, {
                        onClick: () => r(!1),
                        variant: "outline",
                        children: "Cancel"
                    }), e.jsx(i, {
                        disabled: a,
                        style: {
                            backgroundColor: o.primary_color
                        },
                        onClick: m,
                        className: "text-white",
                        children: "Continue"
                    })]
                })]
            })]
        })
    },
    te = ({
        testimony: t,
        showActions: c
    }) => {
        const {
            props: o
        } = j(), {
            platform: a
        } = o, n = [];
        for (let l = 0; l < t.star_rating; l++) n.push(l.toString());
        return e.jsxs("div", {
            className: `flex flex-col gap-3 w-[350px] h-[250px] 
            rounded-lg shadow-custom-light dark:shadow-custom-dark 
            p-4 justify-between flex-shrink-0 m-auto transition-all`,
            children: [e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [e.jsx("div", {
                    className: "flex items-center gap-1",
                    children: n.map(l => e.jsx(S, {
                        color: a.primary_color,
                        size: 20
                    }, l))
                }), c && e.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [e.jsx(U, {
                        testimony: t
                    }), e.jsx(O, {
                        testimony: t
                    })]
                })]
            }), e.jsx("p", {
                className: "text-ts font-semibold border-b pb-2 max-h-[100px] overflow-y-auto",
                children: t.content
            }), e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [e.jsxs(F, {
                    children: [e.jsx(A, {
                        src: t.client_avatar_path || ""
                    }), e.jsx(I, {
                        children: L(t.client_name)
                    })]
                }), e.jsxs("div", {
                    className: "flex flex-col gap-1",
                    children: [e.jsx("p", {
                        className: "font-bold",
                        children: t.client_name
                    }), e.jsx("p", {
                        className: "text-sm font-semibold text-ts",
                        children: t.client_country
                    })]
                })]
            })]
        })
    };
export {
    te as T
};