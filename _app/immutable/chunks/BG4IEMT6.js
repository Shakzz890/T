import { g as i, j as o, k as n, l as s } from "./D00cHqf4.js";
import { a as c } from "./CwiTbcdn.js";
function f(t) {
  var _ = n,
    e = s;
  i(null), o(null);
  try {
    return t();
  } finally {
    i(_), o(e);
  }
}
function l(t, _, e, r = e) {
  t.addEventListener(_, () => f(e));
  const a = t.__on_r;
  a
    ? (t.__on_r = () => {
        a(), r(!0);
      })
    : (t.__on_r = () => r(!0)),
    c();
}
export { l };
