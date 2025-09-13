import "../chunks/Bg9kRutz.js";
import {
  h as M,
  l as Q,
  aU as ea,
  E as sa,
  aV as ra,
  aW as ta,
  aM as ia,
  u as na,
  aX as la,
  aq as oa,
  J as ca,
  a0 as T,
  g as j,
  j as H,
  k as fa,
  af as va,
  t as X,
  a as ua,
  ah as F,
  b as U,
  ag as da,
  c as l,
  am as L,
  aH as G,
  s as _,
  aO as J,
  r as o,
  aB as K,
} from "../chunks/D00cHqf4.js";
import { i as pa } from "../chunks/Cff3Gagc.js";
import { s as ma } from "../chunks/CjdhlhI0.js";
import { r as _a } from "../chunks/CwiTbcdn.js";
import { a as ba } from "../chunks/DL0u3DGR.js";
import { s as ha, a as ga } from "../chunks/Ro2rjg-Y.js";
import { s as wa, d as ya, e as ka } from "../chunks/DEe0Px4n.js";
function O(a, e) {
  var r = a.__className,
    s = xa(e);
  M && a.className === s
    ? (a.__className = s)
    : (r !== s || (M && a.className !== s)) &&
      (e == null ? a.removeAttribute("class") : (a.className = s),
      (a.__className = s));
}
function xa(a) {
  return a ?? "";
}
const Na = () => performance.now(),
  h = {
    tick: (a) => requestAnimationFrame(a),
    now: () => Na(),
    tasks: new Set(),
  };
function Y() {
  const a = h.now();
  h.tasks.forEach((e) => {
    e.c(a) || (h.tasks.delete(e), e.f());
  }),
    h.tasks.size !== 0 && h.tick(Y);
}
function Ea(a) {
  let e;
  return (
    h.tasks.size === 0 && h.tick(Y),
    {
      promise: new Promise((r) => {
        h.tasks.add((e = { c: a, f: r }));
      }),
      abort() {
        h.tasks.delete(e);
      },
    }
  );
}
function q(a, e) {
  a.dispatchEvent(new CustomEvent(e));
}
function Sa(a) {
  if (a === "float") return "cssFloat";
  if (a === "offset") return "cssOffset";
  if (a.startsWith("--")) return a;
  const e = a.split("-");
  return e.length === 1
    ? e[0]
    : e[0] +
        e
          .slice(1)
          .map((r) => r[0].toUpperCase() + r.slice(1))
          .join("");
}
function V(a) {
  const e = {},
    r = a.split(";");
  for (const s of r) {
    const [i, u] = s.split(":");
    if (!i || u === void 0) break;
    const n = Sa(i.trim());
    e[n] = u.trim();
  }
  return e;
}
const Aa = (a) => a;
function Ta(a, e, r, s) {
  var i = (a & la) !== 0,
    u = "both",
    n,
    g = e.inert,
    c,
    d;
  function f() {
    var t = fa,
      p = Q;
    j(null), H(null);
    try {
      return (
        n ?? (n = r()(e, (s == null ? void 0 : s()) ?? {}, { direction: u }))
      );
    } finally {
      j(t), H(p);
    }
  }
  var w = {
      is_global: i,
      in() {
        (e.inert = g),
          q(e, "introstart"),
          (c = W(e, f(), d, 1, () => {
            q(e, "introend"), c == null || c.abort(), (c = n = void 0);
          }));
      },
      out(t) {
        (e.inert = !0),
          q(e, "outrostart"),
          (d = W(e, f(), c, 0, () => {
            q(e, "outroend"), t == null || t();
          }));
      },
      stop: () => {
        c == null || c.abort(), d == null || d.abort();
      },
    },
    m = Q;
  if (((m.transitions ?? (m.transitions = [])).push(w), ea)) {
    var y = i;
    if (!y) {
      for (var v = m.parent; v && (v.f & sa) !== 0; )
        for (; (v = v.parent) && (v.f & ra) === 0; );
      y = !v || (v.f & ta) !== 0;
    }
    y &&
      ia(() => {
        na(() => w.in());
      });
  }
}
function W(a, e, r, s, i) {
  var u = s === 1;
  if (oa(e)) {
    var n,
      g = !1;
    return (
      ca(() => {
        if (!g) {
          var p = e({ direction: u ? "in" : "out" });
          n = W(a, p, r, s, i);
        }
      }),
      {
        abort: () => {
          (g = !0), n == null || n.abort();
        },
        deactivate: () => n.deactivate(),
        reset: () => n.reset(),
        t: () => n.t(),
      }
    );
  }
  if ((r == null || r.deactivate(), !(e != null && e.duration)))
    return i(), { abort: T, deactivate: T, reset: T, t: () => s };
  const { delay: c = 0, css: d, tick: f, easing: w = Aa } = e;
  var m = [];
  if (u && r === void 0 && (f && f(0, 1), d)) {
    var y = V(d(0, 1));
    m.push(y, y);
  }
  var v = () => 1 - s,
    t = a.animate(m, { duration: c });
  return (
    (t.onfinish = () => {
      var p = (r == null ? void 0 : r.t()) ?? 1 - s;
      r == null || r.abort();
      var x = s - p,
        k = e.duration * Math.abs(x),
        N = [];
      if (k > 0) {
        if (d)
          for (
            var C = Math.ceil(k / 16.666666666666668), S = 0;
            S <= C;
            S += 1
          ) {
            var A = p + x * w(S / C),
              I = d(A, 1 - A);
            N.push(V(I));
          }
        (v = () => {
          var E = t.currentTime;
          return p + x * w(E / k);
        }),
          f &&
            Ea(() => {
              if (t.playState !== "running") return !1;
              var E = v();
              return f(E, 1 - E), !0;
            });
      }
      (t = a.animate(N, { duration: k, fill: "forwards" })),
        (t.onfinish = () => {
          (v = () => s), f == null || f(s, 1 - s), i();
        });
    }),
    {
      abort: () => {
        t && (t.cancel(), (t.effect = null), (t.onfinish = T));
      },
      deactivate: () => {
        i = T;
      },
      reset: () => {
        s === 0 && (f == null || f(1, 0));
      },
      t: () => v(),
    }
  );
}
const Ca = () => {
    const a = wa;
    return {
      page: { subscribe: a.page.subscribe },
      navigating: { subscribe: a.navigating.subscribe },
      updated: a.updated,
    };
  },
  Fa = {
    subscribe(a) {
      return Ca().page.subscribe(a);
    },
  },
  La = (a) => a;
function Oa(a, { delay: e = 0, duration: r = 400, easing: s = La } = {}) {
  const i = +getComputedStyle(a).opacity;
  return { delay: e, duration: r, easing: s, css: (u) => `opacity: ${u * i}` };
}
var qa = X('<progress class="progress top-0 w-full fixed"></progress>'),
  Ia =
    X(`<div class="drawer lg:drawer-open"><input id="drawer" type="checkbox" class="drawer-toggle"> <div class="drawer-content overflow-x-hidden"><!> <div class="max-w-[96vw] mx-auto"><div class="w-full max-w-4xl p-4 xl:p-0 mx-auto xl:my-12"><!> <div class="alert mt-4"><span class="material-icons notranslate">info</span> <p>Website under development. Please leave feedback on our YouTube
            channel <a class="font-bold" href="https://www.youtube.com/someonlyclub" rel="noreferer noopener">SomeOnlyClub</a></p></div></div></div> <label title="menu" aria-label="menu" for="drawer" class="btn btn-lg drawer-button btn-circle lg:hidden fixed bottom-3 right-3 shadow btn-primary"><span class="material-icons notranslate">menu</span></label></div> <div class="drawer-side z-40"><label for="drawer" class="drawer-overlay"></label> <ul class="grid overflow-y-auto content-start menu p-4 w-80 h-full bg-base-100 text-base-content border-r border-base-300"><li><a href="/"><span class="material-icons notranslate">home</span> Home</a></li> <li class="menu-title">AQWorlds Tools</li> <li><a href="/login"><span class="material-icons notranslate">login</span> AQW Login</a></li> <li><details open><summary><span class="material-icons notranslate">code</span> Packet Spammer Code</summary> <ul><li><a href="/alchemy">Alchemy Potion</a></li> <li><a href="/spellcraft">Spellcraft Scroll</a></li></ul></details></li> <li><details open><summary><span class="material-icons notranslate">receipt_long</span> ID List</summary> <ul><li><a href="/shop">Shop ID</a></li> <li><a href="/quest">Quest ID</a></li></ul></details></li></ul></div></div>`);
function Qa(a, e) {
  va(e, !0);
  const r = ha(),
    s = () => ga(Fa, "$page", r);
  let i = G(!1);
  ya((b) => {
    b.to && b.from.url.origin == b.to.url.origin && L(i, !0);
  });
  let u = G(!1);
  ka(() => {
    L(i, !1), L(u, !1);
  });
  var n = Ia(),
    g = l(n);
  _a(g);
  var c = _(g, 2),
    d = l(c);
  {
    var f = (b) => {
      var D = qa();
      Ta(3, D, () => Oa), U(b, D);
    };
    pa(d, (b) => {
      F(i) && b(f);
    });
  }
  var w = _(d, 2),
    m = l(w),
    y = l(m);
  ma(y, () => e.children), J(2), o(m), o(w), J(2), o(c);
  var v = _(c, 2),
    t = _(l(v), 2),
    p = _(l(t), 6),
    x = l(p),
    k = _(l(x), 2),
    N = l(k),
    C = l(N);
  const S = K(() =>
    s().url.pathname.split("/")[1] == "alchemy" ? "active" : ""
  );
  o(N);
  var A = _(N, 2),
    I = l(A);
  const E = K(() =>
    s().url.pathname.split("/")[1] == "spellcraft" ? "active" : ""
  );
  o(A), o(k), o(x), o(p);
  var $ = _(p, 2),
    R = l($),
    z = _(l(R), 2),
    P = l(z),
    Z = l(P);
  o(P);
  var B = _(P, 2),
    aa = l(B);
  o(B),
    o(z),
    o(R),
    o($),
    o(t),
    o(v),
    o(n),
    ua(() => {
      O(C, F(S)),
        O(I, F(E)),
        O(Z, s().url.pathname == "/shop" ? "active" : ""),
        O(aa, s().url.pathname == "/quest" ? "active" : "");
    }),
    ba(
      g,
      () => F(u),
      (b) => L(u, b)
    ),
    U(a, n),
    da();
}
export { Qa as component };
