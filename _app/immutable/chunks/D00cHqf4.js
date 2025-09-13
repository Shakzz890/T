var gt = Array.isArray,
  Tt = Array.from,
  At = Object.defineProperty,
  Dn = Object.getOwnPropertyDescriptor,
  St = Object.getOwnPropertyDescriptors,
  hr = Object.prototype,
  yr = Array.prototype,
  kt = Object.getPrototypeOf;
function Er(n) {
  return typeof n == "function";
}
const mr = () => {};
function wr(n) {
  return n();
}
function Fn(n) {
  for (var t = 0; t < n.length; t++) n[t]();
}
const A = 2,
  Mn = 4,
  Q = 8,
  An = 16,
  I = 32,
  un = 64,
  hn = 128,
  F = 256,
  ln = 512,
  g = 1024,
  q = 2048,
  fn = 4096,
  V = 8192,
  $ = 16384,
  Ct = 32768,
  Hn = 65536,
  gr = 1 << 17,
  Yn = 1 << 19,
  jn = 1 << 20,
  Nn = Symbol("$state"),
  Tr = Symbol("legacy props"),
  Ar = Symbol("");
function Bn(n) {
  return n === this.v;
}
function It(n, t) {
  return n != n
    ? t == t
    : n !== t || (n !== null && typeof n == "object") || typeof n == "function";
}
function Vn(n) {
  return !It(n, this.v);
}
function xt(n) {
  throw new Error("effect_in_teardown");
}
function Ot() {
  throw new Error("effect_in_unowned_derived");
}
function Rt(n) {
  throw new Error("effect_orphan");
}
function Dt() {
  throw new Error("effect_update_depth_exceeded");
}
function Nt() {
  throw new Error("hydration_failed");
}
function Sr(n) {
  throw new Error("lifecycle_legacy_only");
}
function kr(n) {
  throw new Error("props_invalid_value");
}
function Cr() {
  throw new Error("state_descriptors_fixed");
}
function Ir() {
  throw new Error("state_prototype_fixed");
}
function bt() {
  throw new Error("state_unsafe_local_read");
}
function Lt() {
  throw new Error("state_unsafe_mutation");
}
let cn = !1;
function xr() {
  cn = !0;
}
function Sn(n) {
  return { f: 0, v: n, reactions: null, equals: Bn, version: 0 };
}
function Or(n) {
  return qt(Sn(n));
}
function Rr(n, t = !1) {
  var e;
  const r = Sn(n);
  return (
    t || (r.equals = Vn),
    cn && _ !== null && _.l !== null && ((e = _.l).s ?? (e.s = [])).push(r),
    r
  );
}
function qt(n) {
  return f !== null && (f.f & A) !== 0 && (S === null ? nr([n]) : S.push(n)), n;
}
function Dr(n, t) {
  return (
    f !== null &&
      On() &&
      (f.f & (A | An)) !== 0 &&
      (S === null || !S.includes(n)) &&
      Lt(),
    Pt(n, t)
  );
}
function Pt(n, t) {
  return (
    n.equals(t) ||
      ((n.v = t),
      (n.version = ct()),
      Un(n, q),
      On() &&
        s !== null &&
        (s.f & g) !== 0 &&
        (s.f & I) === 0 &&
        (E !== null && E.includes(n)
          ? (x(s, q), dn(s))
          : R === null
          ? tr([n])
          : R.push(n))),
    t
  );
}
function Un(n, t) {
  var r = n.reactions;
  if (r !== null)
    for (var e = On(), l = r.length, a = 0; a < l; a++) {
      var o = r[a],
        u = o.f;
      (u & q) === 0 &&
        ((!e && o === s) ||
          (x(o, t),
          (u & (g | F)) !== 0 && ((u & A) !== 0 ? Un(o, fn) : dn(o))));
    }
}
function kn(n) {
  console.warn("hydration_mismatch");
}
const Nr = 1,
  br = 2,
  Lr = 4,
  qr = 8,
  Pr = 16,
  Fr = 1,
  Mr = 2,
  Hr = 4,
  Yr = 8,
  jr = 16,
  Br = 4,
  Ft = 1,
  Mt = 2,
  Cn = "[",
  Ht = "[!",
  Gn = "]",
  X = {},
  Vr = Symbol();
let y = !1;
function H(n) {
  y = n;
}
let v;
function k(n) {
  if (n === null) throw (kn(), X);
  return (v = n);
}
function $n() {
  return k(C(v));
}
function Ur(n) {
  if (y) {
    if (C(v) !== null) throw (kn(), X);
    v = n;
  }
}
function Gr(n = 1) {
  if (y) {
    for (var t = n, r = v; t--; ) r = C(r);
    v = r;
  }
}
function $r() {
  for (var n = 0, t = v; ; ) {
    if (t.nodeType === 8) {
      var r = t.data;
      if (r === Gn) {
        if (n === 0) return t;
        n -= 1;
      } else (r === Cn || r === Ht) && (n += 1);
    }
    var e = C(t);
    t.remove(), (t = e);
  }
}
var bn, Yt, Kn, Wn;
function yn() {
  if (bn === void 0) {
    (bn = window), (Yt = document);
    var n = Element.prototype,
      t = Node.prototype;
    (Kn = Dn(t, "firstChild").get),
      (Wn = Dn(t, "nextSibling").get),
      (n.__click = void 0),
      (n.__className = ""),
      (n.__attributes = null),
      (n.__styles = null),
      (n.__e = void 0),
      (Text.prototype.__t = void 0);
  }
}
function N(n = "") {
  return document.createTextNode(n);
}
function P(n) {
  return Kn.call(n);
}
function C(n) {
  return Wn.call(n);
}
function Kr(n, t) {
  if (!y) return P(n);
  var r = P(v);
  if (r === null) r = v.appendChild(N());
  else if (t && r.nodeType !== 3) {
    var e = N();
    return r == null || r.before(e), k(e), e;
  }
  return k(r), r;
}
function Wr(n, t) {
  if (!y) {
    var r = P(n);
    return r instanceof Comment && r.data === "" ? C(r) : r;
  }
  return v;
}
function Xr(n, t = 1, r = !1) {
  let e = y ? v : n;
  for (var l; t--; ) (l = e), (e = C(e));
  if (!y) return e;
  var a = e == null ? void 0 : e.nodeType;
  if (r && a !== 3) {
    var o = N();
    return e === null ? l == null || l.after(o) : e.before(o), k(o), o;
  }
  return k(e), e;
}
function jt(n) {
  n.textContent = "";
}
function Bt(n) {
  var t = A | q;
  s === null ? (t |= F) : (s.f |= jn);
  var r = f !== null && (f.f & A) !== 0 ? f : null;
  const e = {
    children: null,
    ctx: _,
    deps: null,
    equals: Bn,
    f: t,
    fn: n,
    reactions: null,
    v: null,
    version: 0,
    parent: r ?? s,
  };
  return r !== null && (r.children ?? (r.children = [])).push(e), e;
}
function Zr(n) {
  const t = Bt(n);
  return (t.equals = Vn), t;
}
function Xn(n) {
  var t = n.children;
  if (t !== null) {
    n.children = null;
    for (var r = 0; r < t.length; r += 1) {
      var e = t[r];
      (e.f & A) !== 0 ? In(e) : W(e);
    }
  }
}
function Vt(n) {
  for (var t = n.parent; t !== null; ) {
    if ((t.f & A) === 0) return t;
    t = t.parent;
  }
  return null;
}
function Zn(n) {
  var t,
    r = s;
  G(Vt(n));
  try {
    Xn(n), (t = _t(n));
  } finally {
    G(r);
  }
  return t;
}
function zn(n) {
  var t = Zn(n),
    r = (Y || (n.f & F) !== 0) && n.deps !== null ? fn : g;
  x(n, r), n.equals(t) || ((n.v = t), (n.version = ct()));
}
function In(n) {
  Xn(n),
    J(n, 0),
    x(n, $),
    (n.v = n.children = n.deps = n.ctx = n.reactions = null);
}
function Jn(n) {
  s === null && f === null && Rt(),
    f !== null && (f.f & F) !== 0 && Ot(),
    xn && xt();
}
function Ut(n, t) {
  var r = t.last;
  r === null
    ? (t.last = t.first = n)
    : ((r.next = n), (n.prev = r), (t.last = n));
}
function K(n, t, r, e = !0) {
  var l = (n & un) !== 0,
    a = s,
    o = {
      ctx: _,
      deps: null,
      deriveds: null,
      nodes_start: null,
      nodes_end: null,
      f: n | q,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: l ? null : a,
      prev: null,
      teardown: null,
      transitions: null,
      version: 0,
    };
  if (r) {
    var u = j;
    try {
      Ln(!0), vn(o), (o.f |= Ct);
    } catch (d) {
      throw (W(o), d);
    } finally {
      Ln(u);
    }
  } else t !== null && dn(o);
  var c =
    r &&
    o.deps === null &&
    o.first === null &&
    o.nodes_start === null &&
    o.teardown === null &&
    (o.f & jn) === 0;
  if (
    !c &&
    !l &&
    e &&
    (a !== null && Ut(o, a), f !== null && (f.f & A) !== 0)
  ) {
    var p = f;
    (p.children ?? (p.children = [])).push(o);
  }
  return o;
}
function zr(n) {
  const t = K(Q, null, !1);
  return x(t, g), (t.teardown = n), t;
}
function Jr(n) {
  Jn();
  var t = s !== null && (s.f & I) !== 0 && _ !== null && !_.m;
  if (t) {
    var r = _;
    (r.e ?? (r.e = [])).push({ fn: n, effect: s, reaction: f });
  } else {
    var e = Qn(n);
    return e;
  }
}
function Qr(n) {
  return Jn(), $t(n);
}
function Gt(n) {
  const t = K(un, n, !0);
  return () => {
    W(t);
  };
}
function Qn(n) {
  return K(Mn, n, !1);
}
function $t(n) {
  return K(Q, n, !0);
}
function ne(n) {
  return nt(n);
}
function nt(n, t = 0) {
  return K(Q | An | t, n, !0);
}
function Kt(n, t = !0) {
  return K(Q | I, n, !0, t);
}
function tt(n) {
  var t = n.teardown;
  if (t !== null) {
    const r = xn,
      e = f;
    qn(!0), U(null);
    try {
      t.call(null);
    } finally {
      qn(r), U(e);
    }
  }
}
function rt(n) {
  var t = n.deriveds;
  if (t !== null) {
    n.deriveds = null;
    for (var r = 0; r < t.length; r += 1) In(t[r]);
  }
}
function et(n, t = !1) {
  var r = n.first;
  for (n.first = n.last = null; r !== null; ) {
    var e = r.next;
    W(r, t), (r = e);
  }
}
function Wt(n) {
  for (var t = n.first; t !== null; ) {
    var r = t.next;
    (t.f & I) === 0 && W(t), (t = r);
  }
}
function W(n, t = !0) {
  var r = !1;
  if ((t || (n.f & Yn) !== 0) && n.nodes_start !== null) {
    for (var e = n.nodes_start, l = n.nodes_end; e !== null; ) {
      var a = e === l ? null : C(e);
      e.remove(), (e = a);
    }
    r = !0;
  }
  et(n, t && !r), rt(n), J(n, 0), x(n, $);
  var o = n.transitions;
  if (o !== null) for (const c of o) c.stop();
  tt(n);
  var u = n.parent;
  u !== null && u.first !== null && at(n),
    (n.next =
      n.prev =
      n.teardown =
      n.ctx =
      n.deps =
      n.fn =
      n.nodes_start =
      n.nodes_end =
        null);
}
function at(n) {
  var t = n.parent,
    r = n.prev,
    e = n.next;
  r !== null && (r.next = e),
    e !== null && (e.prev = r),
    t !== null &&
      (t.first === n && (t.first = e), t.last === n && (t.last = r));
}
function te(n, t) {
  var r = [];
  lt(n, r, !0),
    Xt(r, () => {
      W(n), t && t();
    });
}
function Xt(n, t) {
  var r = n.length;
  if (r > 0) {
    var e = () => --r || t();
    for (var l of n) l.out(e);
  } else t();
}
function lt(n, t, r) {
  if ((n.f & V) === 0) {
    if (((n.f ^= V), n.transitions !== null))
      for (const o of n.transitions) (o.is_global || r) && t.push(o);
    for (var e = n.first; e !== null; ) {
      var l = e.next,
        a = (e.f & Hn) !== 0 || (e.f & I) !== 0;
      lt(e, t, a ? r : !1), (e = l);
    }
  }
}
function re(n) {
  ot(n, !0);
}
function ot(n, t) {
  if ((n.f & V) !== 0) {
    nn(n) && vn(n), (n.f ^= V);
    for (var r = n.first; r !== null; ) {
      var e = r.next,
        l = (r.f & Hn) !== 0 || (r.f & I) !== 0;
      ot(r, l ? t : !1), (r = e);
    }
    if (n.transitions !== null)
      for (const a of n.transitions) (a.is_global || t) && a.in();
  }
}
const Zt =
  typeof requestIdleCallback > "u"
    ? (n) => setTimeout(n, 1)
    : requestIdleCallback;
let on = !1,
  sn = !1,
  En = [],
  mn = [];
function st() {
  on = !1;
  const n = En.slice();
  (En = []), Fn(n);
}
function ut() {
  sn = !1;
  const n = mn.slice();
  (mn = []), Fn(n);
}
function ee(n) {
  on || ((on = !0), queueMicrotask(st)), En.push(n);
}
function ae(n) {
  sn || ((sn = !0), Zt(ut)), mn.push(n);
}
function zt() {
  on && st(), sn && ut();
}
function Jt(n) {
  throw new Error("lifecycle_outside_component");
}
const it = 0,
  Qt = 1;
let en = !1,
  an = it,
  Z = !1,
  z = null,
  j = !1,
  xn = !1;
function Ln(n) {
  j = n;
}
function qn(n) {
  xn = n;
}
let L = [],
  B = 0;
let f = null;
function U(n) {
  f = n;
}
let s = null;
function G(n) {
  s = n;
}
let S = null;
function nr(n) {
  S = n;
}
let E = null,
  w = 0,
  R = null;
function tr(n) {
  R = n;
}
let ft = 0,
  Y = !1,
  _ = null;
function ct() {
  return ++ft;
}
function On() {
  return !cn || (_ !== null && _.l === null);
}
function nn(n) {
  var o, u;
  var t = n.f;
  if ((t & q) !== 0) return !0;
  if ((t & fn) !== 0) {
    var r = n.deps,
      e = (t & F) !== 0;
    if (r !== null) {
      var l;
      if ((t & ln) !== 0) {
        for (l = 0; l < r.length; l++)
          ((o = r[l]).reactions ?? (o.reactions = [])).push(n);
        n.f ^= ln;
      }
      for (l = 0; l < r.length; l++) {
        var a = r[l];
        if (
          (nn(a) && zn(a),
          e &&
            s !== null &&
            !Y &&
            !(
              (u = a == null ? void 0 : a.reactions) != null && u.includes(n)
            ) &&
            (a.reactions ?? (a.reactions = [])).push(n),
          a.version > n.version)
        )
          return !0;
      }
    }
    e || x(n, g);
  }
  return !1;
}
function rr(n, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & hn) !== 0)
      try {
        r.fn(n);
        return;
      } catch {
        r.f ^= hn;
      }
    r = r.parent;
  }
  throw ((en = !1), n);
}
function er(n) {
  return (n.f & $) === 0 && (n.parent === null || (n.parent.f & hn) === 0);
}
function _n(n, t, r, e) {
  if (en) {
    if ((r === null && (en = !1), er(t))) throw n;
    return;
  }
  r !== null && (en = !0);
  {
    rr(n, t);
    return;
  }
}
function _t(n) {
  var h;
  var t = E,
    r = w,
    e = R,
    l = f,
    a = Y,
    o = S,
    u = _,
    c = n.f;
  (E = null),
    (w = 0),
    (R = null),
    (f = (c & (I | un)) === 0 ? n : null),
    (Y = !j && (c & F) !== 0),
    (S = null),
    (_ = n.ctx);
  try {
    var p = (0, n.fn)(),
      d = n.deps;
    if (E !== null) {
      var i;
      if ((J(n, w), d !== null && w > 0))
        for (d.length = w + E.length, i = 0; i < E.length; i++) d[w + i] = E[i];
      else n.deps = d = E;
      if (!Y)
        for (i = w; i < d.length; i++)
          ((h = d[i]).reactions ?? (h.reactions = [])).push(n);
    } else d !== null && w < d.length && (J(n, w), (d.length = w));
    return p;
  } finally {
    (E = t), (w = r), (R = e), (f = l), (Y = a), (S = o), (_ = u);
  }
}
function ar(n, t) {
  let r = t.reactions;
  if (r !== null) {
    var e = r.indexOf(n);
    if (e !== -1) {
      var l = r.length - 1;
      l === 0 ? (r = t.reactions = null) : ((r[e] = r[l]), r.pop());
    }
  }
  r === null &&
    (t.f & A) !== 0 &&
    (E === null || !E.includes(t)) &&
    (x(t, fn), (t.f & (F | ln)) === 0 && (t.f ^= ln), J(t, 0));
}
function J(n, t) {
  var r = n.deps;
  if (r !== null) for (var e = t; e < r.length; e++) ar(n, r[e]);
}
function vn(n) {
  var t = n.f;
  if ((t & $) === 0) {
    x(n, g);
    var r = s,
      e = _;
    s = n;
    try {
      (t & An) !== 0 ? Wt(n) : et(n), rt(n), tt(n);
      var l = _t(n);
      (n.teardown = typeof l == "function" ? l : null), (n.version = ft);
    } catch (a) {
      _n(a, n, r, e || n.ctx);
    } finally {
      s = r;
    }
  }
}
function vt() {
  if (B > 1e3) {
    B = 0;
    try {
      Dt();
    } catch (n) {
      if (z !== null) _n(n, z, null);
      else throw n;
    }
  }
  B++;
}
function dt(n) {
  var t = n.length;
  if (t !== 0) {
    vt();
    var r = j;
    j = !0;
    try {
      for (var e = 0; e < t; e++) {
        var l = n[e];
        (l.f & g) === 0 && (l.f ^= g);
        var a = [];
        pt(l, a), lr(a);
      }
    } finally {
      j = r;
    }
  }
}
function lr(n) {
  var t = n.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var e = n[r];
      if ((e.f & ($ | V)) === 0)
        try {
          nn(e) &&
            (vn(e),
            e.deps === null &&
              e.first === null &&
              e.nodes_start === null &&
              (e.teardown === null ? at(e) : (e.fn = null)));
        } catch (l) {
          _n(l, e, null, e.ctx);
        }
    }
}
function or() {
  if (((Z = !1), B > 1001)) return;
  const n = L;
  (L = []), dt(n), Z || ((B = 0), (z = null));
}
function dn(n) {
  an === it && (Z || ((Z = !0), queueMicrotask(or))), (z = n);
  for (var t = n; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (un | I)) !== 0) {
      if ((r & g) === 0) return;
      t.f ^= g;
    }
  }
  L.push(t);
}
function pt(n, t) {
  var r = n.first,
    e = [];
  n: for (; r !== null; ) {
    var l = r.f,
      a = (l & I) !== 0,
      o = a && (l & g) !== 0,
      u = r.next;
    if (!o && (l & V) === 0)
      if ((l & Q) !== 0) {
        if (a) r.f ^= g;
        else
          try {
            nn(r) && vn(r);
          } catch (i) {
            _n(i, r, null, r.ctx);
          }
        var c = r.first;
        if (c !== null) {
          r = c;
          continue;
        }
      } else (l & Mn) !== 0 && e.push(r);
    if (u === null) {
      let i = r.parent;
      for (; i !== null; ) {
        if (n === i) break n;
        var p = i.next;
        if (p !== null) {
          r = p;
          continue n;
        }
        i = i.parent;
      }
    }
    r = u;
  }
  for (var d = 0; d < e.length; d++) (c = e[d]), t.push(c), pt(c, t);
}
function ht(n) {
  var t = an,
    r = L;
  try {
    vt();
    const l = [];
    (an = Qt), (L = l), (Z = !1), dt(r);
    var e = n == null ? void 0 : n();
    return zt(), (L.length > 0 || l.length > 0) && ht(), (B = 0), (z = null), e;
  } finally {
    (an = t), (L = r);
  }
}
async function le() {
  await Promise.resolve(), ht();
}
function oe(n) {
  var d;
  var t = n.f,
    r = (t & A) !== 0;
  if (r && (t & $) !== 0) {
    var e = Zn(n);
    return In(n), e;
  }
  if (f !== null) {
    S !== null && S.includes(n) && bt();
    var l = f.deps;
    E === null && l !== null && l[w] === n
      ? w++
      : E === null
      ? (E = [n])
      : E.push(n),
      R !== null &&
        s !== null &&
        (s.f & g) !== 0 &&
        (s.f & I) === 0 &&
        R.includes(n) &&
        (x(s, q), dn(s));
  } else if (r && n.deps === null)
    for (var a = n, o = a.parent, u = a; o !== null; )
      if ((o.f & A) !== 0) {
        var c = o;
        (u = c), (o = c.parent);
      } else {
        var p = o;
        ((d = p.deriveds) != null && d.includes(u)) ||
          (p.deriveds ?? (p.deriveds = [])).push(u);
        break;
      }
  return r && ((a = n), nn(a) && zn(a)), n.v;
}
function se(n) {
  const t = f;
  try {
    return (f = null), n();
  } finally {
    f = t;
  }
}
const sr = -7169;
function x(n, t) {
  n.f = (n.f & sr) | t;
}
function ue(n) {
  return pn().get(n);
}
function ie(n, t) {
  return pn().set(n, t), t;
}
function fe(n) {
  return pn().has(n);
}
function ce() {
  return pn();
}
function pn(n) {
  return _ === null && Jt(), _.c ?? (_.c = new Map(ur(_) || void 0));
}
function ur(n) {
  let t = n.p;
  for (; t !== null; ) {
    const r = t.c;
    if (r !== null) return r;
    t = t.p;
  }
  return null;
}
function ir(n, t = !1, r) {
  (_ = { p: _, c: null, e: null, m: !1, s: n, x: null, l: null }),
    cn && !t && (_.l = { s: null, u: null, r1: [], r2: Sn(!1) });
}
function fr(n) {
  const t = _;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var r = s,
        e = f;
      t.e = null;
      try {
        for (var l = 0; l < o.length; l++) {
          var a = o[l];
          G(a.effect), U(a.reaction), Qn(a.fn);
        }
      } finally {
        G(r), U(e);
      }
    }
    (_ = t.p), (t.m = !0);
  }
  return {};
}
function _e(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (Nn in n) wn(n);
    else if (!Array.isArray(n))
      for (let t in n) {
        const r = n[t];
        typeof r == "object" && r && Nn in r && wn(r);
      }
  }
}
function wn(n, t = new Set()) {
  if (
    typeof n == "object" &&
    n !== null &&
    !(n instanceof EventTarget) &&
    !t.has(n)
  ) {
    t.add(n), n instanceof Date && n.getTime();
    for (let e in n)
      try {
        wn(n[e], t);
      } catch {}
    const r = kt(n);
    if (
      r !== Object.prototype &&
      r !== Array.prototype &&
      r !== Map.prototype &&
      r !== Set.prototype &&
      r !== Date.prototype
    ) {
      const e = St(r);
      for (let l in e) {
        const a = e[l].get;
        if (a)
          try {
            a.call(n);
          } catch {}
      }
    }
  }
}
const yt = new Set(),
  gn = new Set();
function ve(n) {
  for (var t = 0; t < n.length; t++) yt.add(n[t]);
  for (var r of gn) r(n);
}
function rn(n) {
  var Rn;
  var t = this,
    r = t.ownerDocument,
    e = n.type,
    l = ((Rn = n.composedPath) == null ? void 0 : Rn.call(n)) || [],
    a = l[0] || n.target,
    o = 0,
    u = n.__root;
  if (u) {
    var c = l.indexOf(u);
    if (c !== -1 && (t === document || t === window)) {
      n.__root = t;
      return;
    }
    var p = l.indexOf(t);
    if (p === -1) return;
    c <= p && (o = c);
  }
  if (((a = l[o] || n.target), a !== t)) {
    At(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      },
    });
    var d = f,
      i = s;
    U(null), G(null);
    try {
      for (var h, m = []; a !== null; ) {
        var O = a.assignedSlot || a.parentNode || a.host || null;
        try {
          var b = a["__" + e];
          if (b !== void 0 && !a.disabled)
            if (gt(b)) {
              var [mt, ...wt] = b;
              mt.apply(a, [n, ...wt]);
            } else b.call(a, n);
        } catch (tn) {
          h ? m.push(tn) : (h = tn);
        }
        if (n.cancelBubble || O === t || O === null) break;
        a = O;
      }
      if (h) {
        for (let tn of m)
          queueMicrotask(() => {
            throw tn;
          });
        throw h;
      }
    } finally {
      (n.__root = t), delete n.currentTarget, U(d), G(i);
    }
  }
}
let T;
function cr() {
  T = void 0;
}
function de(n) {
  let t = null,
    r = y;
  var e;
  if (y) {
    for (
      t = v, T === void 0 && (T = P(document.head));
      T !== null && (T.nodeType !== 8 || T.data !== Cn);

    )
      T = C(T);
    T === null ? H(!1) : (T = k(C(T)));
  }
  y || (e = document.head.appendChild(N()));
  try {
    nt(() => n(e), Yn);
  } finally {
    r && (H(!0), (T = v), k(t));
  }
}
function _r(n) {
  var t = document.createElement("template");
  return (t.innerHTML = n), t.content;
}
function D(n, t) {
  var r = s;
  r.nodes_start === null && ((r.nodes_start = n), (r.nodes_end = t));
}
function pe(n, t) {
  var r = (t & Ft) !== 0,
    e = (t & Mt) !== 0,
    l,
    a = !n.startsWith("<!>");
  return () => {
    if (y) return D(v, null), v;
    l === void 0 && ((l = _r(a ? n : "<!>" + n)), r || (l = P(l)));
    var o = e ? document.importNode(l, !0) : l.cloneNode(!0);
    if (r) {
      var u = P(o),
        c = o.lastChild;
      D(u, c);
    } else D(o, o);
    return o;
  };
}
function he(n = "") {
  if (!y) {
    var t = N(n + "");
    return D(t, t), t;
  }
  var r = v;
  return r.nodeType !== 3 && (r.before((r = N())), k(r)), D(r, r), r;
}
function ye() {
  if (y) return D(v, null), v;
  var n = document.createDocumentFragment(),
    t = document.createComment(""),
    r = N();
  return n.append(t, r), D(t, r), n;
}
function Ee(n, t) {
  if (y) {
    (s.nodes_end = v), $n();
    return;
  }
  n !== null && n.before(t);
}
const vr = ["touchstart", "touchmove"];
function dr(n) {
  return vr.includes(n);
}
let Pn = !0;
function me(n, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (n.__t ?? (n.__t = n.nodeValue)) &&
    ((n.__t = r), (n.nodeValue = r == null ? "" : r + ""));
}
function pr(n, t) {
  return Et(n, t);
}
function we(n, t) {
  yn(), (t.intro = t.intro ?? !1);
  const r = t.target,
    e = y,
    l = v;
  try {
    for (var a = P(r); a && (a.nodeType !== 8 || a.data !== Cn); ) a = C(a);
    if (!a) throw X;
    H(!0), k(a), $n();
    const o = Et(n, { ...t, anchor: a });
    if (v === null || v.nodeType !== 8 || v.data !== Gn) throw (kn(), X);
    return H(!1), o;
  } catch (o) {
    if (o === X) return t.recover === !1 && Nt(), yn(), jt(r), H(!1), pr(n, t);
    throw o;
  } finally {
    H(e), k(l), cr();
  }
}
const M = new Map();
function Et(
  n,
  { target: t, anchor: r, props: e = {}, events: l, context: a, intro: o = !0 }
) {
  yn();
  var u = new Set(),
    c = (i) => {
      for (var h = 0; h < i.length; h++) {
        var m = i[h];
        if (!u.has(m)) {
          u.add(m);
          var O = dr(m);
          t.addEventListener(m, rn, { passive: O });
          var b = M.get(m);
          b === void 0
            ? (document.addEventListener(m, rn, { passive: O }), M.set(m, 1))
            : M.set(m, b + 1);
        }
      }
    };
  c(Tt(yt)), gn.add(c);
  var p = void 0,
    d = Gt(() => {
      var i = r ?? t.appendChild(N());
      return (
        Kt(() => {
          if (a) {
            ir({});
            var h = _;
            h.c = a;
          }
          l && (e.$$events = l),
            y && D(i, null),
            (Pn = o),
            (p = n(i, e) || {}),
            (Pn = !0),
            y && (s.nodes_end = v),
            a && fr();
        }),
        () => {
          var O;
          for (var h of u) {
            t.removeEventListener(h, rn);
            var m = M.get(h);
            --m === 0
              ? (document.removeEventListener(h, rn), M.delete(h))
              : M.set(h, m);
          }
          gn.delete(c),
            Tn.delete(p),
            i !== r && ((O = i.parentNode) == null || O.removeChild(i));
        }
      );
    });
  return Tn.set(p, d), p;
}
let Tn = new WeakMap();
function ge(n) {
  const t = Tn.get(n);
  t && t();
}
export {
  Yt as $,
  N as A,
  Lr as B,
  P as C,
  gt as D,
  Hn as E,
  Tt as F,
  Gn as G,
  Ht as H,
  V as I,
  ee as J,
  Nr as K,
  Pt as L,
  br as M,
  Rr as N,
  Sn as O,
  qr as P,
  lt as Q,
  jt as R,
  Xt as S,
  W as T,
  Vr as U,
  Pr as V,
  C as W,
  de as X,
  _r as Y,
  D as Z,
  zr as _,
  ne as a,
  mr as a0,
  Jt as a1,
  Jr as a2,
  _ as a3,
  Sr as a4,
  ht as a5,
  cn as a6,
  ce as a7,
  ue as a8,
  fe as a9,
  Fr as aA,
  Bt as aB,
  jr as aC,
  Zr as aD,
  ae as aE,
  Ar as aF,
  St as aG,
  Or as aH,
  Qr as aI,
  Fn as aJ,
  wr as aK,
  _e as aL,
  Qn as aM,
  ve as aN,
  Gr as aO,
  ye as aP,
  kn as aQ,
  X as aR,
  At as aS,
  he as aT,
  Pn as aU,
  An as aV,
  Ct as aW,
  Br as aX,
  It as aY,
  we as aa,
  pr as ab,
  ie as ac,
  le as ad,
  ge as ae,
  ir as af,
  fr as ag,
  oe as ah,
  Nn as ai,
  hr as aj,
  yr as ak,
  Ir as al,
  Dr as am,
  Dn as an,
  Cr as ao,
  kt as ap,
  Er as aq,
  Tr as ar,
  kr as as,
  gr as at,
  Hr as au,
  Vn as av,
  Yr as aw,
  Mr as ax,
  I as ay,
  un as az,
  Ee as b,
  Kr as c,
  me as d,
  $t as e,
  Wr as f,
  U as g,
  y as h,
  On as i,
  G as j,
  f as k,
  s as l,
  nt as m,
  $n as n,
  $r as o,
  k as p,
  H as q,
  Ur as r,
  Xr as s,
  pe as t,
  se as u,
  re as v,
  Kt as w,
  te as x,
  v as y,
  xr as z,
};
