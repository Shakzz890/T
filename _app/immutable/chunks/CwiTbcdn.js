import { h as c, aE as n, aF as u, ap as f, aG as v } from "./D00cHqf4.js";
let t = !1;
function h() {
  t ||
    ((t = !0),
    document.addEventListener(
      "reset",
      (r) => {
        Promise.resolve().then(() => {
          var s;
          if (!r.defaultPrevented)
            for (const a of r.target.elements)
              (s = a.__on_r) == null || s.call(a);
        });
      },
      { capture: !0 }
    ));
}
function l(r) {
  if (c) {
    var s = !1,
      a = () => {
        if (!s) {
          if (((s = !0), r.hasAttribute("value"))) {
            var e = r.value;
            i(r, "value", null), (r.value = e);
          }
          if (r.hasAttribute("checked")) {
            var o = r.checked;
            i(r, "checked", null), (r.checked = o);
          }
        }
      };
    (r.__on_r = a), n(a), h();
  }
}
function y(r, s) {
  var a = r.__attributes ?? (r.__attributes = {});
  a.value === (a.value = s ?? void 0) ||
    (r.value === s && (s !== 0 || r.nodeName !== "PROGRESS")) ||
    (r.value = s);
}
function i(r, s, a, e) {
  var o = r.__attributes ?? (r.__attributes = {});
  (c &&
    ((o[s] = r.getAttribute(s)),
    s === "src" ||
      s === "srcset" ||
      (s === "href" && r.nodeName === "LINK"))) ||
    (o[s] !== (o[s] = a) &&
      (s === "style" && "__styles" in r && (r.__styles = {}),
      s === "loading" && (r[u] = a),
      a == null
        ? r.removeAttribute(s)
        : typeof a != "string" && g(r).includes(s)
        ? (r[s] = a)
        : r.setAttribute(s, a)));
}
var d = new Map();
function g(r) {
  var s = d.get(r.nodeName);
  if (s) return s;
  d.set(r.nodeName, (s = []));
  for (var a, e = f(r), o = Element.prototype; o !== e; ) {
    a = v(e);
    for (var _ in a) a[_].set && s.push(_);
    e = f(e);
  }
  return s;
}
export { h as a, y as b, l as r, i as s };
