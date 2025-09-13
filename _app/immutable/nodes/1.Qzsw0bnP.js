import "../chunks/Bg9kRutz.js";
import "../chunks/Btgmt1HY.js";
import {
  a3 as b,
  aI as k,
  a2 as i,
  aJ as l,
  u as x,
  aK as $,
  ah as v,
  aL as y,
  aB as B,
  af as E,
  t as I,
  f as J,
  a as K,
  b as L,
  ag as j,
  c as u,
  r as g,
  s as q,
  d as m,
} from "../chunks/D00cHqf4.js";
import { s as w, p as d } from "../chunks/DEe0Px4n.js";
function z(r = !1) {
  const e = b,
    t = e.l.u;
  if (!t) return;
  let s = () => y(e.s);
  if (r) {
    let o = 0,
      a = {};
    const c = B(() => {
      let n = !1;
      const p = e.s;
      for (const f in p) p[f] !== a[f] && ((a[f] = p[f]), (n = !0));
      return n && o++, o;
    });
    s = () => v(c);
  }
  t.b.length &&
    k(() => {
      h(e, s), l(t.b);
    }),
    i(() => {
      const o = x(() => t.m.map($));
      return () => {
        for (const a of o) typeof a == "function" && a();
      };
    }),
    t.a.length &&
      i(() => {
        h(e, s), l(t.a);
      });
}
function h(r, e) {
  if (r.l.s) for (const t of r.l.s) v(t);
  e();
}
const A = {
  get error() {
    return d.error;
  },
  get status() {
    return d.status;
  },
};
w.updated.check;
const _ = A;
var C = I("<h1> </h1> <p> </p>", 1);
function M(r, e) {
  E(e, !1), z();
  var t = C(),
    s = J(t),
    o = u(s, !0);
  g(s);
  var a = q(s, 2),
    c = u(a, !0);
  g(a),
    K(() => {
      var n;
      m(o, _.status), m(c, (n = _.error) == null ? void 0 : n.message);
    }),
    L(r, t),
    j();
}
export { M as component };
