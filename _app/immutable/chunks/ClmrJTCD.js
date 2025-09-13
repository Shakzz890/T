import {
  ai as I,
  aj as z,
  ak as G,
  O as h,
  al as Z,
  ah as y,
  U as o,
  am as b,
  an as S,
  l as j,
  ao as $,
  ap as H,
  D as V,
  aq as N,
  ar as K,
  as as J,
  at as Q,
  au as W,
  av as X,
  N as k,
  u as C,
  aw as ee,
  a6 as re,
  ax as te,
  ay as ne,
  az as ae,
  j as q,
  aA as ie,
  aB as U,
  aC as fe,
  aD as se,
} from "./D00cHqf4.js";
import { c as ue } from "./Ro2rjg-Y.js";
function E(e, n = null, u) {
  if (typeof e != "object" || e === null || I in e) return e;
  const s = H(e);
  if (s !== z && s !== G) return e;
  var a = new Map(),
    d = V(e),
    w = h(0);
  d && a.set("length", h(e.length));
  var P;
  return new Proxy(e, {
    defineProperty(l, r, t) {
      (!("value" in t) ||
        t.configurable === !1 ||
        t.enumerable === !1 ||
        t.writable === !1) &&
        $();
      var f = a.get(r);
      return (
        f === void 0 ? ((f = h(t.value)), a.set(r, f)) : b(f, E(t.value, P)), !0
      );
    },
    deleteProperty(l, r) {
      var t = a.get(r);
      if (t === void 0) r in l && a.set(r, h(o));
      else {
        if (d && typeof r == "string") {
          var f = a.get("length"),
            i = Number(r);
          Number.isInteger(i) && i < f.v && b(f, i);
        }
        b(t, o), F(w);
      }
      return !0;
    },
    get(l, r, t) {
      var c;
      if (r === I) return e;
      var f = a.get(r),
        i = r in l;
      if (
        (f === void 0 &&
          (!i || ((c = S(l, r)) != null && c.writable)) &&
          ((f = h(E(i ? l[r] : o, P))), a.set(r, f)),
        f !== void 0)
      ) {
        var _ = y(f);
        return _ === o ? void 0 : _;
      }
      return Reflect.get(l, r, t);
    },
    getOwnPropertyDescriptor(l, r) {
      var t = Reflect.getOwnPropertyDescriptor(l, r);
      if (t && "value" in t) {
        var f = a.get(r);
        f && (t.value = y(f));
      } else if (t === void 0) {
        var i = a.get(r),
          _ = i == null ? void 0 : i.v;
        if (i !== void 0 && _ !== o)
          return { enumerable: !0, configurable: !0, value: _, writable: !0 };
      }
      return t;
    },
    has(l, r) {
      var _;
      if (r === I) return !0;
      var t = a.get(r),
        f = (t !== void 0 && t.v !== o) || Reflect.has(l, r);
      if (
        t !== void 0 ||
        (j !== null && (!f || ((_ = S(l, r)) != null && _.writable)))
      ) {
        t === void 0 && ((t = h(f ? E(l[r], P) : o)), a.set(r, t));
        var i = y(t);
        if (i === o) return !1;
      }
      return f;
    },
    set(l, r, t, f) {
      var O;
      var i = a.get(r),
        _ = r in l;
      if (d && r === "length")
        for (var c = t; c < i.v; c += 1) {
          var m = a.get(c + "");
          m !== void 0 ? b(m, o) : c in l && ((m = h(o)), a.set(c + "", m));
        }
      i === void 0
        ? (!_ || ((O = S(l, r)) != null && O.writable)) &&
          ((i = h(void 0)), b(i, E(t, P)), a.set(r, i))
        : ((_ = i.v !== o), b(i, E(t, P)));
      var g = Reflect.getOwnPropertyDescriptor(l, r);
      if ((g != null && g.set && g.set.call(f, t), !_)) {
        if (d && typeof r == "string") {
          var D = a.get("length"),
            p = Number(r);
          Number.isInteger(p) && p >= D.v && b(D, p + 1);
        }
        F(w);
      }
      return !0;
    },
    ownKeys(l) {
      y(w);
      var r = Reflect.ownKeys(l).filter((i) => {
        var _ = a.get(i);
        return _ === void 0 || _.v !== o;
      });
      for (var [t, f] of a) f.v !== o && !(t in l) && r.push(t);
      return r;
    },
    setPrototypeOf() {
      Z();
    },
  });
}
function F(e, n = 1) {
  b(e, e.v + n);
}
function M(e) {
  return e !== null && typeof e == "object" && I in e ? e[I] : e;
}
function de(e, n) {
  return Object.is(M(e), M(n));
}
const le = {
  get(e, n) {
    let u = e.props.length;
    for (; u--; ) {
      let s = e.props[u];
      if ((N(s) && (s = s()), typeof s == "object" && s !== null && n in s))
        return s[n];
    }
  },
  set(e, n, u) {
    let s = e.props.length;
    for (; s--; ) {
      let a = e.props[s];
      N(a) && (a = a());
      const d = S(a, n);
      if (d && d.set) return d.set(u), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, n) {
    let u = e.props.length;
    for (; u--; ) {
      let s = e.props[u];
      if ((N(s) && (s = s()), typeof s == "object" && s !== null && n in s)) {
        const a = S(s, n);
        return a && !a.configurable && (a.configurable = !0), a;
      }
    }
  },
  has(e, n) {
    if (n === I || n === K) return !1;
    for (let u of e.props)
      if ((N(u) && (u = u()), u != null && n in u)) return !0;
    return !1;
  },
  ownKeys(e) {
    const n = [];
    for (let u of e.props) {
      N(u) && (u = u());
      for (const s in u) n.includes(s) || n.push(s);
    }
    return n;
  },
};
function oe(...e) {
  return new Proxy({ props: e }, le);
}
function Y(e) {
  for (var n = j, u = j; n !== null && (n.f & (ne | ae)) === 0; ) n = n.parent;
  try {
    return q(n), e();
  } finally {
    q(u);
  }
}
function ce(e, n, u, s) {
  var B;
  var a = (u & ie) !== 0,
    d = !re || (u & te) !== 0,
    w = (u & ee) !== 0,
    P = (u & fe) !== 0,
    l = !1,
    r;
  w ? ([r, l] = ue(() => e[n])) : (r = e[n]);
  var t = I in e || K in e,
    f =
      ((B = S(e, n)) == null ? void 0 : B.set) ??
      (t && w && n in e ? (v) => (e[n] = v) : void 0),
    i = s,
    _ = !0,
    c = !1,
    m = () => ((c = !0), _ && ((_ = !1), P ? (i = C(s)) : (i = s)), i);
  r === void 0 && s !== void 0 && (f && d && J(), (r = m()), f && f(r));
  var g;
  if (d)
    g = () => {
      var v = e[n];
      return v === void 0 ? m() : ((_ = !0), (c = !1), v);
    };
  else {
    var D = Y(() => (a ? U : se)(() => e[n]));
    (D.f |= Q),
      (g = () => {
        var v = y(D);
        return v !== void 0 && (i = void 0), v === void 0 ? i : v;
      });
  }
  if ((u & W) === 0) return g;
  if (f) {
    var p = e.$$legacy;
    return function (v, R) {
      return arguments.length > 0
        ? ((!d || !R || p || l) && f(R ? g() : v), v)
        : g();
    };
  }
  var O = !1,
    L = !1,
    x = k(r),
    A = Y(() =>
      U(() => {
        var v = g(),
          R = y(x);
        return O ? ((O = !1), (L = !0), R) : ((L = !1), (x.v = v));
      })
    );
  return (
    a || (A.equals = X),
    function (v, R) {
      if (arguments.length > 0) {
        const T = R ? y(A) : d && w ? E(v) : v;
        return (
          A.equals(T) ||
            ((O = !0), b(x, T), c && i !== void 0 && (i = T), C(() => y(A))),
          v
        );
      }
      return y(A);
    }
  );
}
export { ce as a, de as i, E as p, oe as s };
