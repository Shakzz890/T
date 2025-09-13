import {
  m as y,
  h as p,
  n as h,
  Y as b,
  Z as g,
  _ as x,
  E as C,
  w as E,
  a0 as k,
  T as S,
  y as d,
  C as T,
  a1 as l,
  a2 as w,
  a3 as s,
  D as A,
  a4 as m,
  a5 as D,
  a6 as P,
  u as i,
  a7 as R,
  a8 as j,
  a9 as F,
  aa as M,
  ab as N,
  ac as O,
  ad as U,
  ae as $,
} from "./D00cHqf4.js";
function J(e, t, ...r) {
  var a = e,
    n = k,
    o;
  y(() => {
    n !== (n = t()) && (o && (S(o), (o = null)), (o = E(() => n(a, ...r))));
  }, C),
    p && (a = d);
}
function z(e) {
  return (t, ...r) => {
    var f;
    var a = e(...r),
      n;
    if (p) (n = d), h();
    else {
      var o = a.render().trim(),
        u = b(o);
      (n = T(u)), t.before(n);
    }
    const c = (f = a.setup) == null ? void 0 : f.call(a, n);
    g(n, n), typeof c == "function" && x(c);
  };
}
function v(e) {
  s === null && l(),
    P && s.l !== null
      ? _(s).m.push(e)
      : w(() => {
          const t = i(e);
          if (typeof t == "function") return t;
        });
}
function Y(e) {
  s === null && l(), v(() => () => i(e));
}
function Z(e, t, { bubbles: r = !1, cancelable: a = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: r, cancelable: a });
}
function q() {
  const e = s;
  return (
    e === null && l(),
    (t, r, a) => {
      var o;
      const n = (o = e.s.$$events) == null ? void 0 : o[t];
      if (n) {
        const u = A(n) ? n.slice() : [n],
          c = Z(t, r, a);
        for (const f of u) f.call(e.x, c);
        return !c.defaultPrevented;
      }
      return !0;
    }
  );
}
function B(e) {
  s === null && l(), s.l === null && m(), _(s).b.push(e);
}
function G(e) {
  s === null && l(), s.l === null && m(), _(s).a.push(e);
}
function _(e) {
  var t = e.l;
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function H(e) {
  D(e);
}
const K = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      afterUpdate: G,
      beforeUpdate: B,
      createEventDispatcher: q,
      createRawSnippet: z,
      flushSync: H,
      getAllContexts: R,
      getContext: j,
      hasContext: F,
      hydrate: M,
      mount: N,
      onDestroy: Y,
      onMount: v,
      setContext: O,
      tick: U,
      unmount: $,
      untrack: i,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { K as a, v as o, J as s };
