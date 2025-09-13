import { u as d, e as o, i as s, h as n } from "./D00cHqf4.js";
import { l as _ } from "./BG4IEMT6.js";
function m(e, a, v = a) {
  var c = s();
  _(e, "input", (l) => {
    var r = l ? e.defaultValue : e.value;
    (r = f(e) ? u(r) : r), v(r), c && r !== (r = a()) && (e.value = r ?? "");
  }),
    ((n && e.defaultValue !== e.value) || (d(a) == null && e.value)) &&
      v(f(e) ? u(e.value) : e.value),
    o(() => {
      var l = a();
      (f(e) && l === u(e.value)) ||
        (e.type === "date" && !l && !e.value) ||
        (l !== e.value && (e.value = l ?? ""));
    });
}
function b(e, a, v = a) {
  _(e, "change", (c) => {
    var l = c ? e.defaultChecked : e.checked;
    v(l);
  }),
    ((n && e.defaultChecked !== e.checked) || d(a) == null) && v(e.checked),
    o(() => {
      var c = a();
      e.checked = !!c;
    });
}
function f(e) {
  var a = e.type;
  return a === "number" || a === "range";
}
function u(e) {
  return e === "" ? null : +e;
}
export { b as a, m as b };
