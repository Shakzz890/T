import {
  m as y,
  h as n,
  n as p,
  E as A,
  H as I,
  o as N,
  p as R,
  q as o,
  v as _,
  w as u,
  x as h,
  U as g,
  y as x,
} from "./D00cHqf4.js";
function k(d, v, m = !1) {
  n && p();
  var e = d,
    a = null,
    s = null,
    f = g,
    E = m ? A : 0,
    r = !1;
  const T = (l, t = !0) => {
      (r = !0), i(t, l);
    },
    i = (l, t) => {
      if (f === (f = l)) return;
      let c = !1;
      if (n) {
        const b = e.data === I;
        !!f === b && ((e = N()), R(e), o(!1), (c = !0));
      }
      f
        ? (a ? _(a) : t && (a = u(() => t(e))),
          s &&
            h(s, () => {
              s = null;
            }))
        : (s ? _(s) : t && (s = u(() => t(e))),
          a &&
            h(a, () => {
              a = null;
            })),
        c && o(!0);
    };
  y(() => {
    (r = !1), v(T), r || i(null, null);
  }, E),
    n && (e = x);
}
export { k as i };
