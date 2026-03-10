const c = "/build/assets/default-bank-icon-DB4PGqhr.png",
    t = "/build/assets/moniepoint-icon-C8khcCV5.png",
    i = "/build/assets/palmpay-icon-B3RJbddp.png",
    e = "/build/assets/opay-icon-c3_h1sis.png",
    b = "/build/assets/access-icon-yZ3J3pMM.png",
    d = "/build/assets/uba-icon--3GJY804.png",
    p = "/build/assets/firstbank-icon-AEsq09dO.png",
    k = "/build/assets/gtb-icon-BbIyn1sc.png",
    u = "/build/assets/zenith-bank-CjJ3nFsY.png",
    l = "/build/assets/fidelity-icon-CigSZ4QO.png",
    g = "/build/assets/fcmb-icon-D-jZm9sG.png",
    r = "/build/assets/kuda-icon-aEHeQkYA.png",
    f = n => {
        const s = {
                "Moniepoint Microfinance Bank": t,
                Palmpay: i,
                Opay: e,
                "Access Bank": b,
                "United Bank for Africa": d,
                "First Bank PLC": p,
                "Guaranty Trust Bank": k,
                "Zenith bank PLC": u,
                "Fidelity Bank": l,
                "Fcmb Microfinance Bank": g,
                Kuda: r
            },
            o = n.toLowerCase();
        return Object.entries(s).find(([a]) => a.toLowerCase() === o) ?.[1] || c
    };
export {
    f as u
};