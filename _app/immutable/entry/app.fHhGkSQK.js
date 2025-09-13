const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "../nodes/0.CgHSrakx.js",
      "../chunks/Bg9kRutz.js",
      "../chunks/D00cHqf4.js",
      "../chunks/Cff3Gagc.js",
      "../chunks/CjdhlhI0.js",
      "../chunks/CwiTbcdn.js",
      "../chunks/DL0u3DGR.js",
      "../chunks/BG4IEMT6.js",
      "../chunks/Ro2rjg-Y.js",
      "../chunks/DEe0Px4n.js",
      "../assets/0.445B8cyo.css",
      "../nodes/1.Qzsw0bnP.js",
      "../chunks/Btgmt1HY.js",
      "../nodes/2.D5fOvsUw.js",
      "../chunks/ClmrJTCD.js",
      "../chunks/96SCxFG8.js",
      "../nodes/3.DppMDiO_.js",
      "../chunks/BchjjF2E.js",
      "../nodes/4.DhuLEVUh.js",
      "../assets/4.BYTXbxdB.css",
      "../nodes/5.DVA1RMeh.js",
      "../nodes/6.Urr5Zd92.js",
      "../nodes/7.DyCO8md8.js",
      "../nodes/8.DM04Dwv0.js",
    ])
) => i.map((i) => d[i]);
var U = (e) => {
  throw TypeError(e);
};
var Y = (e, t, r) => t.has(e) || U("Cannot " + r);
var d = (e, t, r) => (
    Y(e, t, "read from private field"), r ? r.call(e) : t.get(e)
  ),
  S = (e, t, r) =>
    t.has(e)
      ? U("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, r),
  p = (e, t, r, i) => (
    Y(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r
  );
import {
  h as G,
  n as Q,
  m as X,
  E as Z,
  w as $,
  x as tt,
  y as et,
  aM as rt,
  e as st,
  u as at,
  J as nt,
  ai as ot,
  am as x,
  ar as it,
  ah as E,
  aa as ct,
  ab as lt,
  a5 as ut,
  aS as ft,
  ae as dt,
  N as mt,
  af as ht,
  aI as _t,
  a2 as vt,
  aH as I,
  ad as gt,
  t as M,
  f as w,
  s as Et,
  b as O,
  ag as yt,
  aP as D,
  c as Pt,
  r as Rt,
  aB as V,
  aT as bt,
  a as Ot,
  d as Tt,
} from "../chunks/D00cHqf4.js";
import "../chunks/Bg9kRutz.js";
import { i as C } from "../chunks/Cff3Gagc.js";
import { a as j, p as At } from "../chunks/ClmrJTCD.js";
import { o as Lt } from "../chunks/CjdhlhI0.js";
function B(e, t, r) {
  G && Q();
  var i = e,
    n,
    o;
  X(() => {
    n !== (n = t()) && (o && (tt(o), (o = null)), n && (o = $(() => r(i, n))));
  }, Z),
    G && (i = et);
}
function H(e, t) {
  return e === t || (e == null ? void 0 : e[ot]) === t;
}
function q(e = {}, t, r, i) {
  return (
    rt(() => {
      var n, o;
      return (
        st(() => {
          (n = o),
            (o = []),
            at(() => {
              e !== r(...o) &&
                (t(e, ...o), n && H(r(...n), e) && t(null, ...n));
            });
        }),
        () => {
          nt(() => {
            o && H(r(...o), e) && t(null, ...o);
          });
        }
      );
    }),
    e
  );
}
function kt(e) {
  return class extends wt {
    constructor(t) {
      super({ component: e, ...t });
    }
  };
}
var y, m;
class wt {
  constructor(t) {
    S(this, y);
    S(this, m);
    var o;
    var r = new Map(),
      i = (a, s) => {
        var l = mt(s);
        return r.set(a, l), l;
      };
    const n = new Proxy(
      { ...(t.props || {}), $$events: {} },
      {
        get(a, s) {
          return E(r.get(s) ?? i(s, Reflect.get(a, s)));
        },
        has(a, s) {
          return s === it
            ? !0
            : (E(r.get(s) ?? i(s, Reflect.get(a, s))), Reflect.has(a, s));
        },
        set(a, s, l) {
          return x(r.get(s) ?? i(s, l), l), Reflect.set(a, s, l);
        },
      }
    );
    p(
      this,
      m,
      (t.hydrate ? ct : lt)(t.component, {
        target: t.target,
        anchor: t.anchor,
        props: n,
        context: t.context,
        intro: t.intro ?? !1,
        recover: t.recover,
      })
    ),
      (!((o = t == null ? void 0 : t.props) != null && o.$$host) ||
        t.sync === !1) &&
        ut(),
      p(this, y, n.$$events);
    for (const a of Object.keys(d(this, m)))
      a === "$set" ||
        a === "$destroy" ||
        a === "$on" ||
        ft(this, a, {
          get() {
            return d(this, m)[a];
          },
          set(s) {
            d(this, m)[a] = s;
          },
          enumerable: !0,
        });
    (d(this, m).$set = (a) => {
      Object.assign(n, a);
    }),
      (d(this, m).$destroy = () => {
        dt(d(this, m));
      });
  }
  $set(t) {
    d(this, m).$set(t);
  }
  $on(t, r) {
    d(this, y)[t] = d(this, y)[t] || [];
    const i = (...n) => r.call(this, ...n);
    return (
      d(this, y)[t].push(i),
      () => {
        d(this, y)[t] = d(this, y)[t].filter((n) => n !== i);
      }
    );
  }
  $destroy() {
    d(this, m).$destroy();
  }
}
(y = new WeakMap()), (m = new WeakMap());
const xt = "modulepreload",
  St = function (e, t) {
    return new URL(e, t).href;
  },
  J = {},
  g = function (t, r, i) {
    let n = Promise.resolve();
    if (r && r.length > 0) {
      let a = function (u) {
        return Promise.all(
          u.map((v) =>
            Promise.resolve(v).then(
              (P) => ({ status: "fulfilled", value: P }),
              (P) => ({ status: "rejected", reason: P })
            )
          )
        );
      };
      const s = document.getElementsByTagName("link"),
        l = document.querySelector("meta[property=csp-nonce]"),
        T =
          (l == null ? void 0 : l.nonce) ||
          (l == null ? void 0 : l.getAttribute("nonce"));
      n = a(
        r.map((u) => {
          if (((u = St(u, i)), u in J)) return;
          J[u] = !0;
          const v = u.endsWith(".css"),
            P = v ? '[rel="stylesheet"]' : "";
          if (!!i)
            for (let c = s.length - 1; c >= 0; c--) {
              const f = s[c];
              if (f.href === u && (!v || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${u}"]${P}`)) return;
          const _ = document.createElement("link");
          if (
            ((_.rel = v ? "stylesheet" : xt),
            v || (_.as = "script"),
            (_.crossOrigin = ""),
            (_.href = u),
            T && _.setAttribute("nonce", T),
            document.head.appendChild(_),
            v)
          )
            return new Promise((c, f) => {
              _.addEventListener("load", c),
                _.addEventListener("error", () =>
                  f(new Error(`Unable to preload CSS for ${u}`))
                );
            });
        })
      );
    }
    function o(a) {
      const s = new Event("vite:preloadError", { cancelable: !0 });
      if (((s.payload = a), window.dispatchEvent(s), !s.defaultPrevented))
        throw a;
    }
    return n.then((a) => {
      for (const s of a || []) s.status === "rejected" && o(s.reason);
      return t().catch(o);
    });
  },
  Gt = {};
var pt = M(
    '<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'
  ),
  It = M("<!> <!>", 1);
function Dt(e, t) {
  ht(t, !0);
  let r = j(t, "components", 23, () => []),
    i = j(t, "data_0", 3, null),
    n = j(t, "data_1", 3, null);
  _t(() => t.stores.page.set(t.page)),
    vt(() => {
      t.stores,
        t.page,
        t.constructors,
        r(),
        t.form,
        i(),
        n(),
        t.stores.page.notify();
    });
  let o = I(!1),
    a = I(!1),
    s = I(null);
  Lt(() => {
    const c = t.stores.page.subscribe(() => {
      E(o) &&
        (x(a, !0),
        gt().then(() => {
          x(s, At(document.title || "untitled page"));
        }));
    });
    return x(o, !0), c;
  });
  const l = V(() => t.constructors[1]);
  var T = It(),
    u = w(T);
  {
    var v = (c) => {
        var f = D();
        const A = V(() => t.constructors[0]);
        var L = w(f);
        B(
          L,
          () => E(A),
          (R, b) => {
            q(
              b(R, {
                get data() {
                  return i();
                },
                get form() {
                  return t.form;
                },
                children: (h, jt) => {
                  var N = D(),
                    W = w(N);
                  B(
                    W,
                    () => E(l),
                    (z, K) => {
                      q(
                        K(z, {
                          get data() {
                            return n();
                          },
                          get form() {
                            return t.form;
                          },
                        }),
                        (k) => (r()[1] = k),
                        () => {
                          var k;
                          return (k = r()) == null ? void 0 : k[1];
                        }
                      );
                    }
                  ),
                    O(h, N);
                },
                $$slots: { default: !0 },
              }),
              (h) => (r()[0] = h),
              () => {
                var h;
                return (h = r()) == null ? void 0 : h[0];
              }
            );
          }
        ),
          O(c, f);
      },
      P = (c) => {
        var f = D();
        const A = V(() => t.constructors[0]);
        var L = w(f);
        B(
          L,
          () => E(A),
          (R, b) => {
            q(
              b(R, {
                get data() {
                  return i();
                },
                get form() {
                  return t.form;
                },
              }),
              (h) => (r()[0] = h),
              () => {
                var h;
                return (h = r()) == null ? void 0 : h[0];
              }
            );
          }
        ),
          O(c, f);
      };
    C(u, (c) => {
      t.constructors[1] ? c(v) : c(P, !1);
    });
  }
  var F = Et(u, 2);
  {
    var _ = (c) => {
      var f = pt(),
        A = Pt(f);
      {
        var L = (R) => {
          var b = bt();
          Ot(() => Tt(b, E(s))), O(R, b);
        };
        C(A, (R) => {
          E(a) && R(L);
        });
      }
      Rt(f), O(c, f);
    };
    C(F, (c) => {
      E(o) && c(_);
    });
  }
  O(e, T), yt();
}
const Ht = kt(Dt),
  Jt = [
    () =>
      g(
        () => import("../nodes/0.CgHSrakx.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/1.Qzsw0bnP.js"),
        __vite__mapDeps([11, 1, 12, 2, 9, 4]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/2.D5fOvsUw.js"),
        __vite__mapDeps([13, 1, 12, 2, 14, 8, 15, 5]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/3.DppMDiO_.js"),
        __vite__mapDeps([16, 1, 2, 17, 5, 6, 7, 14, 8, 15]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/4.DhuLEVUh.js"),
        __vite__mapDeps([18, 1, 2, 3, 17, 5, 14, 8, 7, 15, 19]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/5.DVA1RMeh.js"),
        __vite__mapDeps([20, 1, 2, 3, 17, 5, 14, 8, 9, 4, 15]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/6.Urr5Zd92.js"),
        __vite__mapDeps([21, 1, 2, 17, 14, 8, 15, 5]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/7.DyCO8md8.js"),
        __vite__mapDeps([22, 1, 2, 17, 14, 8, 15, 5]),
        import.meta.url
      ),
    () =>
      g(
        () => import("../nodes/8.DM04Dwv0.js"),
        __vite__mapDeps([23, 1, 12, 2, 17, 14, 8, 15, 5]),
        import.meta.url
      ),
  ],
  Mt = [],
  Wt = {
    "/": [2],
    "/alchemy": [3],
    "/alchemy/[id]": [-5],
    "/login": [-6],
    "/quest": [6],
    "/shop": [7],
    "/spellcraft": [8],
  },
  Vt = {
    handleError: ({ error: e }) => {
      console.error(e);
    },
    reroute: () => {},
    transport: {},
  },
  Ct = Object.fromEntries(
    Object.entries(Vt.transport).map(([e, t]) => [e, t.decode])
  ),
  zt = !1,
  Kt = (e, t) => Ct[e](t);
export {
  Kt as decode,
  Ct as decoders,
  Wt as dictionary,
  zt as hash,
  Vt as hooks,
  Gt as matchers,
  Jt as nodes,
  Ht as root,
  Mt as server_loads,
};
