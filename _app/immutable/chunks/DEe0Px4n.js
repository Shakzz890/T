var se = (t) => {
  throw TypeError(t);
};
var Ke = (t, e, n) => e.has(t) || se("Cannot " + n);
var A = (t, e, n) => (
    Ke(t, e, "read from private field"), n ? n.call(t) : e.get(t)
  ),
  P = (t, e, n) =>
    e.has(t)
      ? se("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, n);
import { o as ie, a as Ye } from "./CjdhlhI0.js";
import { a0 as Nt, aY as We, aH as N, ah as O, am as C } from "./D00cHqf4.js";
class St {
  constructor(e, n) {
    (this.status = e),
      typeof n == "string"
        ? (this.body = { message: n })
        : n
        ? (this.body = n)
        : (this.body = { message: `Error: ${e}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Ht {
  constructor(e, n) {
    (this.status = e), (this.location = n);
  }
}
class Kt extends Error {
  constructor(e, n, a) {
    super(a), (this.status = e), (this.text = n);
  }
}
new URL("sveltekit-internal://");
function ze(t, e) {
  return t === "/" || e === "ignore"
    ? t
    : e === "never"
    ? t.endsWith("/")
      ? t.slice(0, -1)
      : t
    : e === "always" && !t.endsWith("/")
    ? t + "/"
    : t;
}
function Je(t) {
  return t.split("%25").map(decodeURI).join("%25");
}
function Xe(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t;
}
function Ot({ href: t }) {
  return t.split("#")[0];
}
function Ze(t, e, n, a = !1) {
  const r = new URL(t);
  Object.defineProperty(r, "searchParams", {
    value: new Proxy(r.searchParams, {
      get(i, o) {
        if (o === "get" || o === "getAll" || o === "has")
          return (l) => (n(l), i[o](l));
        e();
        const c = Reflect.get(i, o);
        return typeof c == "function" ? c.bind(i) : c;
      },
    }),
    enumerable: !0,
    configurable: !0,
  });
  const s = ["href", "pathname", "search", "toString", "toJSON"];
  a && s.push("hash");
  for (const i of s)
    Object.defineProperty(r, i, {
      get() {
        return e(), t[i];
      },
      enumerable: !0,
      configurable: !0,
    });
  return r;
}
function Qe(...t) {
  let e = 5381;
  for (const n of t)
    if (typeof n == "string") {
      let a = n.length;
      for (; a; ) e = (e * 33) ^ n.charCodeAt(--a);
    } else if (ArrayBuffer.isView(n)) {
      const a = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
      let r = a.length;
      for (; r; ) e = (e * 33) ^ a[--r];
    } else throw new TypeError("value must be a string or TypedArray");
  return (e >>> 0).toString(36);
}
function tn(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let a = 0; a < e.length; a++) n[a] = e.charCodeAt(a);
  return n.buffer;
}
const en = window.fetch;
window.fetch = (t, e) => (
  (t instanceof Request
    ? t.method
    : (e == null ? void 0 : e.method) || "GET") !== "GET" && J.delete(Yt(t)),
  en(t, e)
);
const J = new Map();
function nn(t, e) {
  const n = Yt(t, e),
    a = document.querySelector(n);
  if (a != null && a.textContent) {
    let { body: r, ...s } = JSON.parse(a.textContent);
    const i = a.getAttribute("data-ttl");
    return (
      i && J.set(n, { body: r, init: s, ttl: 1e3 * Number(i) }),
      a.getAttribute("data-b64") !== null && (r = tn(r)),
      Promise.resolve(new Response(r, s))
    );
  }
  return window.fetch(t, e);
}
function rn(t, e, n) {
  if (J.size > 0) {
    const a = Yt(t, n),
      r = J.get(a);
    if (r) {
      if (
        performance.now() < r.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(
          n == null ? void 0 : n.cache
        )
      )
        return new Response(r.body, r.init);
      J.delete(a);
    }
  }
  return window.fetch(e, n);
}
function Yt(t, e) {
  let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    t instanceof Request ? t.url : t
  )}]`;
  if ((e != null && e.headers) || (e != null && e.body)) {
    const r = [];
    e.headers && r.push([...new Headers(e.headers)].join(",")),
      e.body &&
        (typeof e.body == "string" || ArrayBuffer.isView(e.body)) &&
        r.push(e.body),
      (a += `[data-hash="${Qe(...r)}"]`);
  }
  return a;
}
const an = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function on(t) {
  const e = [];
  return {
    pattern:
      t === "/"
        ? /^\/$/
        : new RegExp(
            `^${cn(t)
              .map((a) => {
                const r = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);
                if (r)
                  return (
                    e.push({
                      name: r[1],
                      matcher: r[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const s = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);
                if (s)
                  return (
                    e.push({
                      name: s[1],
                      matcher: s[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!a) return;
                const i = a.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  i
                    .map((c, l) => {
                      if (l % 2) {
                        if (c.startsWith("x+"))
                          return Ct(
                            String.fromCharCode(parseInt(c.slice(2), 16))
                          );
                        if (c.startsWith("u+"))
                          return Ct(
                            String.fromCharCode(
                              ...c
                                .slice(2)
                                .split("-")
                                .map((h) => parseInt(h, 16))
                            )
                          );
                        const p = an.exec(c),
                          [, u, y, f, m] = p;
                        return (
                          e.push({
                            name: f,
                            matcher: m,
                            optional: !!u,
                            rest: !!y,
                            chained: y ? l === 1 && i[0] === "" : !1,
                          }),
                          y ? "(.*?)" : u ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      return Ct(c);
                    })
                    .join("")
                );
              })
              .join("")}/?$`
          ),
    params: e,
  };
}
function sn(t) {
  return !/^\([^)]+\)$/.test(t);
}
function cn(t) {
  return t.slice(1).split("/").filter(sn);
}
function ln(t, e, n) {
  const a = {},
    r = t.slice(1),
    s = r.filter((o) => o !== void 0);
  let i = 0;
  for (let o = 0; o < e.length; o += 1) {
    const c = e[o];
    let l = r[o - i];
    if (
      (c.chained &&
        c.rest &&
        i &&
        ((l = r
          .slice(o - i, o + 1)
          .filter((p) => p)
          .join("/")),
        (i = 0)),
      l === void 0)
    ) {
      c.rest && (a[c.name] = "");
      continue;
    }
    if (!c.matcher || n[c.matcher](l)) {
      a[c.name] = l;
      const p = e[o + 1],
        u = r[o + 1];
      p && !p.rest && p.optional && u && c.chained && (i = 0),
        !p && !u && Object.keys(a).length === s.length && (i = 0);
      continue;
    }
    if (c.optional && c.chained) {
      i++;
      continue;
    }
    return;
  }
  if (!i) return a;
}
function Ct(t) {
  return t
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function fn({ nodes: t, server_loads: e, dictionary: n, matchers: a }) {
  const r = new Set(e);
  return Object.entries(n).map(([o, [c, l, p]]) => {
    const { pattern: u, params: y } = on(o),
      f = {
        id: o,
        exec: (m) => {
          const h = u.exec(m);
          if (h) return ln(h, y, a);
        },
        errors: [1, ...(p || [])].map((m) => t[m]),
        layouts: [0, ...(l || [])].map(i),
        leaf: s(c),
      };
    return (
      (f.errors.length = f.layouts.length =
        Math.max(f.errors.length, f.layouts.length)),
      f
    );
  });
  function s(o) {
    const c = o < 0;
    return c && (o = ~o), [c, t[o]];
  }
  function i(o) {
    return o === void 0 ? o : [r.has(o), t[o]];
  }
}
function Ae(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t]);
  } catch {}
}
function ce(t, e, n = JSON.stringify) {
  const a = n(e);
  try {
    sessionStorage[t] = a;
  } catch {}
}
const q = [];
function Wt(t, e = Nt) {
  let n = null;
  const a = new Set();
  function r(o) {
    if (We(t, o) && ((t = o), n)) {
      const c = !q.length;
      for (const l of a) l[1](), q.push(l, t);
      if (c) {
        for (let l = 0; l < q.length; l += 2) q[l][0](q[l + 1]);
        q.length = 0;
      }
    }
  }
  function s(o) {
    r(o(t));
  }
  function i(o, c = Nt) {
    const l = [o, c];
    return (
      a.add(l),
      a.size === 1 && (n = e(r, s) || Nt),
      o(t),
      () => {
        a.delete(l), a.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: r, update: s, subscribe: i };
}
var ye;
const x =
  ((ye = globalThis.__sveltekit_1s5xh7f) == null ? void 0 : ye.base) ?? "";
var _e;
const un =
    ((_e = globalThis.__sveltekit_1s5xh7f) == null ? void 0 : _e.assets) ?? x,
  hn = "1752457343782",
  Se = "sveltekit:snapshot",
  ke = "sveltekit:scroll",
  Ee = "sveltekit:states",
  dn = "sveltekit:pageurl",
  G = "sveltekit:history",
  Q = "sveltekit:navigation",
  F = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
  kt = location.origin;
function Re(t) {
  if (t instanceof URL) return t;
  let e = document.baseURI;
  if (!e) {
    const n = document.getElementsByTagName("base");
    e = n.length ? n[0].href : document.URL;
  }
  return new URL(t, e);
}
function Et() {
  return { x: pageXOffset, y: pageYOffset };
}
function M(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`);
}
const le = { ...F, "": F.hover };
function Ie(t) {
  let e = t.assignedSlot ?? t.parentNode;
  return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e;
}
function Ue(t, e) {
  for (; t && t !== e; ) {
    if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
    t = Ie(t);
  }
}
function Bt(t, e, n) {
  let a;
  try {
    if (
      ((a = new URL(
        t instanceof SVGAElement ? t.href.baseVal : t.href,
        document.baseURI
      )),
      n && a.hash.match(/^#[^/]/))
    ) {
      const o = location.hash.split("#")[1] || "/";
      a.hash = `#${o}${a.hash}`;
    }
  } catch {}
  const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
    s =
      !a ||
      !!r ||
      Rt(a, e, n) ||
      (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    i = (a == null ? void 0 : a.origin) === kt && t.hasAttribute("download");
  return { url: a, external: s, target: r, download: i };
}
function mt(t) {
  let e = null,
    n = null,
    a = null,
    r = null,
    s = null,
    i = null,
    o = t;
  for (; o && o !== document.documentElement; )
    a === null && (a = M(o, "preload-code")),
      r === null && (r = M(o, "preload-data")),
      e === null && (e = M(o, "keepfocus")),
      n === null && (n = M(o, "noscroll")),
      s === null && (s = M(o, "reload")),
      i === null && (i = M(o, "replacestate")),
      (o = Ie(o));
  function c(l) {
    switch (l) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return;
    }
  }
  return {
    preload_code: le[a ?? "off"],
    preload_data: le[r ?? "off"],
    keepfocus: c(e),
    noscroll: c(n),
    reload: c(s),
    replace_state: c(i),
  };
}
function fe(t) {
  const e = Wt(t);
  let n = !0;
  function a() {
    (n = !0), e.update((i) => i);
  }
  function r(i) {
    (n = !1), e.set(i);
  }
  function s(i) {
    let o;
    return e.subscribe((c) => {
      (o === void 0 || (n && c !== o)) && i((o = c));
    });
  }
  return { notify: a, set: r, subscribe: s };
}
const Le = { v: () => {} };
function pn() {
  const { set: t, subscribe: e } = Wt(!1);
  let n;
  async function a() {
    clearTimeout(n);
    try {
      const r = await fetch(`${un}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!r.ok) return !1;
      const i = (await r.json()).version !== hn;
      return i && (t(!0), Le.v(), clearTimeout(n)), i;
    } catch {
      return !1;
    }
  }
  return { subscribe: e, check: a };
}
function Rt(t, e, n) {
  return t.origin !== kt || !t.pathname.startsWith(e)
    ? !0
    : n
    ? !(
        t.pathname === e + "/" ||
        t.pathname === e + "/index.html" ||
        (t.protocol === "file:" &&
          t.pathname.replace(/\/[^/]+\.html?$/, "") === e)
      )
    : !1;
}
function zn(t) {}
function ue(t) {
  const e = mn(t),
    n = new ArrayBuffer(e.length),
    a = new DataView(n);
  for (let r = 0; r < n.byteLength; r++) a.setUint8(r, e.charCodeAt(r));
  return n;
}
const gn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function mn(t) {
  t.length % 4 === 0 && (t = t.replace(/==?$/, ""));
  let e = "",
    n = 0,
    a = 0;
  for (let r = 0; r < t.length; r++)
    (n <<= 6),
      (n |= gn.indexOf(t[r])),
      (a += 6),
      a === 24 &&
        ((e += String.fromCharCode((n & 16711680) >> 16)),
        (e += String.fromCharCode((n & 65280) >> 8)),
        (e += String.fromCharCode(n & 255)),
        (n = a = 0));
  return (
    a === 12
      ? ((n >>= 4), (e += String.fromCharCode(n)))
      : a === 18 &&
        ((n >>= 2),
        (e += String.fromCharCode((n & 65280) >> 8)),
        (e += String.fromCharCode(n & 255))),
    e
  );
}
const yn = -1,
  _n = -2,
  wn = -3,
  vn = -4,
  bn = -5,
  An = -6;
function Jn(t, e) {
  return Te(JSON.parse(t), e);
}
function Te(t, e) {
  if (typeof t == "number") return r(t, !0);
  if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
  const n = t,
    a = Array(n.length);
  function r(s, i = !1) {
    if (s === yn) return;
    if (s === wn) return NaN;
    if (s === vn) return 1 / 0;
    if (s === bn) return -1 / 0;
    if (s === An) return -0;
    if (i) throw new Error("Invalid input");
    if (s in a) return a[s];
    const o = n[s];
    if (!o || typeof o != "object") a[s] = o;
    else if (Array.isArray(o))
      if (typeof o[0] == "string") {
        const c = o[0],
          l = e == null ? void 0 : e[c];
        if (l) return (a[s] = l(r(o[1])));
        switch (c) {
          case "Date":
            a[s] = new Date(o[1]);
            break;
          case "Set":
            const p = new Set();
            a[s] = p;
            for (let f = 1; f < o.length; f += 1) p.add(r(o[f]));
            break;
          case "Map":
            const u = new Map();
            a[s] = u;
            for (let f = 1; f < o.length; f += 2) u.set(r(o[f]), r(o[f + 1]));
            break;
          case "RegExp":
            a[s] = new RegExp(o[1], o[2]);
            break;
          case "Object":
            a[s] = Object(o[1]);
            break;
          case "BigInt":
            a[s] = BigInt(o[1]);
            break;
          case "null":
            const y = Object.create(null);
            a[s] = y;
            for (let f = 1; f < o.length; f += 2) y[o[f]] = r(o[f + 1]);
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const f = globalThis[c],
              m = o[1],
              h = ue(m),
              d = new f(h);
            a[s] = d;
            break;
          }
          case "ArrayBuffer": {
            const f = o[1],
              m = ue(f);
            a[s] = m;
            break;
          }
          default:
            throw new Error(`Unknown type ${c}`);
        }
      } else {
        const c = new Array(o.length);
        a[s] = c;
        for (let l = 0; l < o.length; l += 1) {
          const p = o[l];
          p !== _n && (c[l] = r(p));
        }
      }
    else {
      const c = {};
      a[s] = c;
      for (const l in o) {
        const p = o[l];
        c[l] = r(p);
      }
    }
    return a[s];
  }
  return r(0);
}
const xe = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...xe];
const Sn = new Set([...xe]);
[...Sn];
function kn(t) {
  return t.filter((e) => e != null);
}
const En = "x-sveltekit-invalidated",
  Rn = "x-sveltekit-trailing-slash";
function yt(t) {
  return t instanceof St || t instanceof Kt ? t.status : 500;
}
function In(t) {
  return t instanceof Kt ? t.text : "Internal Error";
}
let k, tt, $t;
const Un =
  ie.toString().includes("$$") || /function \w+\(\) \{\}/.test(ie.toString());
var at, ot, st, it, ct, lt, ft, ut, we, ht, ve, dt, be;
Un
  ? ((k = {
      data: {},
      form: null,
      error: null,
      params: {},
      route: { id: null },
      state: {},
      status: -1,
      url: new URL("https://example.com"),
    }),
    (tt = { current: null }),
    ($t = { current: !1 }))
  : ((k = new ((we = class {
      constructor() {
        P(this, at, N({}));
        P(this, ot, N(null));
        P(this, st, N(null));
        P(this, it, N({}));
        P(this, ct, N({ id: null }));
        P(this, lt, N({}));
        P(this, ft, N(-1));
        P(this, ut, N(new URL("https://example.com")));
      }
      get data() {
        return O(A(this, at));
      }
      set data(e) {
        C(A(this, at), e);
      }
      get form() {
        return O(A(this, ot));
      }
      set form(e) {
        C(A(this, ot), e);
      }
      get error() {
        return O(A(this, st));
      }
      set error(e) {
        C(A(this, st), e);
      }
      get params() {
        return O(A(this, it));
      }
      set params(e) {
        C(A(this, it), e);
      }
      get route() {
        return O(A(this, ct));
      }
      set route(e) {
        C(A(this, ct), e);
      }
      get state() {
        return O(A(this, lt));
      }
      set state(e) {
        C(A(this, lt), e);
      }
      get status() {
        return O(A(this, ft));
      }
      set status(e) {
        C(A(this, ft), e);
      }
      get url() {
        return O(A(this, ut));
      }
      set url(e) {
        C(A(this, ut), e);
      }
    }),
    (at = new WeakMap()),
    (ot = new WeakMap()),
    (st = new WeakMap()),
    (it = new WeakMap()),
    (ct = new WeakMap()),
    (lt = new WeakMap()),
    (ft = new WeakMap()),
    (ut = new WeakMap()),
    we)()),
    (tt = new ((ve = class {
      constructor() {
        P(this, ht, N(null));
      }
      get current() {
        return O(A(this, ht));
      }
      set current(e) {
        C(A(this, ht), e);
      }
    }),
    (ht = new WeakMap()),
    ve)()),
    ($t = new ((be = class {
      constructor() {
        P(this, dt, N(!1));
      }
      get current() {
        return O(A(this, dt));
      }
      set current(e) {
        C(A(this, dt), e);
      }
    }),
    (dt = new WeakMap()),
    be)()),
    (Le.v = () => ($t.current = !0)));
function zt(t) {
  Object.assign(k, t);
}
const Ln = "/__data.json",
  Tn = ".html__data.json";
function xn(t) {
  return t.endsWith(".html")
    ? t.replace(/\.html$/, Tn)
    : t.replace(/\/$/, "") + Ln;
}
const { onMount: Pn, tick: Ft } = Ye,
  Nn = new Set(["icon", "shortcut icon", "apple-touch-icon"]),
  V = Ae(ke) ?? {},
  et = Ae(Se) ?? {},
  D = { url: fe({}), page: fe({}), navigating: Wt(null), updated: pn() };
function Jt(t) {
  V[t] = Et();
}
function On(t, e) {
  let n = t + 1;
  for (; V[n]; ) delete V[n], (n += 1);
  for (n = e + 1; et[n]; ) delete et[n], (n += 1);
}
function W(t) {
  return (location.href = t.href), new Promise(() => {});
}
async function Pe() {
  if ("serviceWorker" in navigator) {
    const t = await navigator.serviceWorker.getRegistration(x || "/");
    t && (await t.update());
  }
}
function he() {}
let Xt, Vt, _t, $, qt, S;
const wt = [],
  vt = [];
let L = null;
const gt = new Map(),
  Zt = new Set(),
  Cn = new Set(),
  H = new Set();
let _ = { branch: [], error: null, url: null },
  Qt = !1,
  bt = !1,
  de = !0,
  nt = !1,
  z = !1,
  Ne = !1,
  It = !1,
  K,
  R,
  T,
  j;
const X = new Set();
let jt;
async function tr(t, e, n) {
  var s, i, o, c;
  document.URL !== location.href && (location.href = location.href),
    (S = t),
    await ((i = (s = t.hooks).init) == null ? void 0 : i.call(s)),
    (Xt = fn(t)),
    ($ = document.documentElement),
    (qt = e),
    (Vt = t.nodes[0]),
    (_t = t.nodes[1]),
    Vt(),
    _t(),
    (R = (o = history.state) == null ? void 0 : o[G]),
    (T = (c = history.state) == null ? void 0 : c[Q]),
    R ||
      ((R = T = Date.now()),
      history.replaceState({ ...history.state, [G]: R, [Q]: T }, ""));
  const a = V[R];
  function r() {
    a && ((history.scrollRestoration = "manual"), scrollTo(a.x, a.y));
  }
  n
    ? (r(), await Gn(qt, n))
    : (await Z({
        type: "enter",
        url: Re(S.hash ? Hn(new URL(location.href)) : location.href),
        replace_state: !0,
      }),
      r()),
    Mn();
}
async function $n() {
  if ((await (jt || (jt = Promise.resolve())), !jt)) return;
  jt = null;
  const t = (j = {}),
    e = await pt(_.url, !0);
  L = null;
  const n = e && (await ne(e));
  if (!(!n || t !== j)) {
    if (n.type === "redirect")
      return Ut(new URL(n.location, _.url).href, {}, 1, t);
    n.props.page && Object.assign(k, n.props.page),
      (_ = n.state),
      Oe(),
      K.$set(n.props),
      zt(n.props.page);
  }
}
function Oe() {
  (wt.length = 0), (It = !1);
}
function Ce(t) {
  vt.some((e) => (e == null ? void 0 : e.snapshot)) &&
    (et[t] = vt.map((e) => {
      var n;
      return (n = e == null ? void 0 : e.snapshot) == null
        ? void 0
        : n.capture();
    }));
}
function $e(t) {
  var e;
  (e = et[t]) == null ||
    e.forEach((n, a) => {
      var r, s;
      (s = (r = vt[a]) == null ? void 0 : r.snapshot) == null || s.restore(n);
    });
}
function pe() {
  Jt(R), ce(ke, V), Ce(T), ce(Se, et);
}
async function Ut(t, e, n, a) {
  return Z({
    type: "goto",
    url: Re(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: a,
    accept: () => {
      e.invalidateAll && (It = !0), e.invalidate && e.invalidate.forEach(qn);
    },
  });
}
async function jn(t) {
  if (t.id !== (L == null ? void 0 : L.id)) {
    const e = {};
    X.add(e),
      (L = {
        id: t.id,
        token: e,
        promise: ne({ ...t, preload: e }).then(
          (n) => (
            X.delete(e), n.type === "loaded" && n.state.error && (L = null), n
          )
        ),
      });
  }
  return L.promise;
}
async function Dt(t) {
  var n;
  const e = (n = await pt(t, !1)) == null ? void 0 : n.route;
  e &&
    (await Promise.all(
      [...e.layouts, e.leaf].map((a) => (a == null ? void 0 : a[1]()))
    ));
}
function je(t, e, n) {
  var r;
  _ = t.state;
  const a = document.querySelector("style[data-sveltekit]");
  if (
    (a && a.remove(),
    Object.assign(k, t.props.page),
    (K = new S.root({
      target: e,
      props: { ...t.props, stores: D, components: vt },
      hydrate: n,
      sync: !1,
    })),
    $e(T),
    n)
  ) {
    const s = {
      from: null,
      to: {
        params: _.params,
        route: { id: ((r = _.route) == null ? void 0 : r.id) ?? null },
        url: new URL(location.href),
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve(),
    };
    H.forEach((i) => i(s));
  }
  bt = !0;
}
function rt({
  url: t,
  params: e,
  branch: n,
  status: a,
  error: r,
  route: s,
  form: i,
}) {
  let o = "never";
  if (x && (t.pathname === x || t.pathname === x + "/")) o = "always";
  else
    for (const f of n)
      (f == null ? void 0 : f.slash) !== void 0 && (o = f.slash);
  (t.pathname = ze(t.pathname, o)), (t.search = t.search);
  const c = {
    type: "loaded",
    state: { url: t, params: e, branch: n, error: r, route: s },
    props: { constructors: kn(n).map((f) => f.node.component), page: Tt(k) },
  };
  i !== void 0 && (c.props.form = i);
  let l = {},
    p = !k,
    u = 0;
  for (let f = 0; f < Math.max(n.length, _.branch.length); f += 1) {
    const m = n[f],
      h = _.branch[f];
    (m == null ? void 0 : m.data) !== (h == null ? void 0 : h.data) && (p = !0),
      m &&
        ((l = { ...l, ...m.data }), p && (c.props[`data_${u}`] = l), (u += 1));
  }
  return (
    (!_.url ||
      t.href !== _.url.href ||
      _.error !== r ||
      (i !== void 0 && i !== k.form) ||
      p) &&
      (c.props.page = {
        error: r,
        params: e,
        route: { id: (s == null ? void 0 : s.id) ?? null },
        state: {},
        status: a,
        url: new URL(t),
        form: i ?? null,
        data: p ? l : k.data,
      }),
    c
  );
}
async function te({
  loader: t,
  parent: e,
  url: n,
  params: a,
  route: r,
  server_data_node: s,
}) {
  var p, u, y;
  let i = null,
    o = !0;
  const c = {
      dependencies: new Set(),
      params: new Set(),
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set(),
    },
    l = await t();
  if ((p = l.universal) != null && p.load) {
    let f = function (...h) {
      for (const d of h) {
        const { href: v } = new URL(d, n);
        c.dependencies.add(v);
      }
    };
    const m = {
      route: new Proxy(r, { get: (h, d) => (o && (c.route = !0), h[d]) }),
      params: new Proxy(a, { get: (h, d) => (o && c.params.add(d), h[d]) }),
      data: (s == null ? void 0 : s.data) ?? null,
      url: Ze(
        n,
        () => {
          o && (c.url = !0);
        },
        (h) => {
          o && c.search_params.add(h);
        },
        S.hash
      ),
      async fetch(h, d) {
        h instanceof Request &&
          (d = {
            body:
              h.method === "GET" || h.method === "HEAD"
                ? void 0
                : await h.blob(),
            cache: h.cache,
            credentials: h.credentials,
            headers:
              [...h.headers].length > 0
                ? h == null
                  ? void 0
                  : h.headers
                : void 0,
            integrity: h.integrity,
            keepalive: h.keepalive,
            method: h.method,
            mode: h.mode,
            redirect: h.redirect,
            referrer: h.referrer,
            referrerPolicy: h.referrerPolicy,
            signal: h.signal,
            ...d,
          });
        const { resolved: v, promise: I } = De(h, d, n);
        return o && f(v.href), I;
      },
      setHeaders: () => {},
      depends: f,
      parent() {
        return o && (c.parent = !0), e();
      },
      untrack(h) {
        o = !1;
        try {
          return h();
        } finally {
          o = !0;
        }
      },
    };
    i = (await l.universal.load.call(null, m)) ?? null;
  }
  return {
    node: l,
    loader: t,
    server: s,
    universal:
      (u = l.universal) != null && u.load
        ? { type: "data", data: i, uses: c }
        : null,
    data: i ?? (s == null ? void 0 : s.data) ?? null,
    slash:
      ((y = l.universal) == null ? void 0 : y.trailingSlash) ??
      (s == null ? void 0 : s.slash),
  };
}
function De(t, e, n) {
  let a = t instanceof Request ? t.url : t;
  const r = new URL(a, n);
  r.origin === n.origin && (a = r.href.slice(n.origin.length));
  const s = bt ? rn(a, r.href, e) : nn(a, e);
  return { resolved: r, promise: s };
}
function ge(t, e, n, a, r, s) {
  if (It) return !0;
  if (!r) return !1;
  if ((r.parent && t) || (r.route && e) || (r.url && n)) return !0;
  for (const i of r.search_params) if (a.has(i)) return !0;
  for (const i of r.params) if (s[i] !== _.params[i]) return !0;
  for (const i of r.dependencies) if (wt.some((o) => o(new URL(i)))) return !0;
  return !1;
}
function ee(t, e) {
  return (t == null ? void 0 : t.type) === "data"
    ? t
    : (t == null ? void 0 : t.type) === "skip"
    ? e ?? null
    : null;
}
function Dn(t, e) {
  if (!t) return new Set(e.searchParams.keys());
  const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
  for (const a of n) {
    const r = t.searchParams.getAll(a),
      s = e.searchParams.getAll(a);
    r.every((i) => s.includes(i)) &&
      s.every((i) => r.includes(i)) &&
      n.delete(a);
  }
  return n;
}
function me({ error: t, url: e, route: n, params: a }) {
  return {
    type: "loaded",
    state: { error: t, url: e, route: n, params: a, branch: [] },
    props: { page: Tt(k), constructors: [] },
  };
}
async function ne({
  id: t,
  invalidating: e,
  url: n,
  params: a,
  route: r,
  preload: s,
}) {
  if ((L == null ? void 0 : L.id) === t) return X.delete(L.token), L.promise;
  const { errors: i, layouts: o, leaf: c } = r,
    l = [...o, c];
  i.forEach((g) => (g == null ? void 0 : g().catch(() => {}))),
    l.forEach((g) => (g == null ? void 0 : g[1]().catch(() => {})));
  let p = null;
  const u = _.url ? t !== At(_.url) : !1,
    y = _.route ? r.id !== _.route.id : !1,
    f = Dn(_.url, n);
  let m = !1;
  const h = l.map((g, w) => {
    var B;
    const b = _.branch[w],
      E =
        !!(g != null && g[0]) &&
        ((b == null ? void 0 : b.loader) !== g[1] ||
          ge(m, y, u, f, (B = b.server) == null ? void 0 : B.uses, a));
    return E && (m = !0), E;
  });
  if (h.some(Boolean)) {
    try {
      p = await Me(n, h);
    } catch (g) {
      const w = await Y(g, { url: n, params: a, route: { id: t } });
      return X.has(s)
        ? me({ error: w, url: n, params: a, route: r })
        : Lt({ status: yt(g), error: w, url: n, route: r });
    }
    if (p.type === "redirect") return p;
  }
  const d = p == null ? void 0 : p.nodes;
  let v = !1;
  const I = l.map(async (g, w) => {
    var xt;
    if (!g) return;
    const b = _.branch[w],
      E = d == null ? void 0 : d[w];
    if (
      (!E || E.type === "skip") &&
      g[1] === (b == null ? void 0 : b.loader) &&
      !ge(v, y, u, f, (xt = b.universal) == null ? void 0 : xt.uses, a)
    )
      return b;
    if (((v = !0), (E == null ? void 0 : E.type) === "error")) throw E;
    return te({
      loader: g[1],
      url: n,
      params: a,
      route: r,
      parent: async () => {
        var oe;
        const ae = {};
        for (let Pt = 0; Pt < w; Pt += 1)
          Object.assign(ae, (oe = await I[Pt]) == null ? void 0 : oe.data);
        return ae;
      },
      server_data_node: ee(
        E === void 0 && g[0] ? { type: "skip" } : E ?? null,
        g[0] ? (b == null ? void 0 : b.server) : void 0
      ),
    });
  });
  for (const g of I) g.catch(() => {});
  const U = [];
  for (let g = 0; g < l.length; g += 1)
    if (l[g])
      try {
        U.push(await I[g]);
      } catch (w) {
        if (w instanceof Ht) return { type: "redirect", location: w.location };
        if (X.has(s))
          return me({
            error: await Y(w, { params: a, url: n, route: { id: r.id } }),
            url: n,
            params: a,
            route: r,
          });
        let b = yt(w),
          E;
        if (d != null && d.includes(w)) (b = w.status ?? b), (E = w.error);
        else if (w instanceof St) E = w.body;
        else {
          if (await D.updated.check()) return await Pe(), await W(n);
          E = await Y(w, { params: a, url: n, route: { id: r.id } });
        }
        const B = await Be(g, U, i);
        return B
          ? rt({
              url: n,
              params: a,
              branch: U.slice(0, B.idx).concat(B.node),
              status: b,
              error: E,
              route: r,
            })
          : await Ve(n, { id: r.id }, E, b);
      }
    else U.push(void 0);
  return rt({
    url: n,
    params: a,
    branch: U,
    status: 200,
    error: null,
    route: r,
    form: e ? void 0 : null,
  });
}
async function Be(t, e, n) {
  for (; t--; )
    if (n[t]) {
      let a = t;
      for (; !e[a]; ) a -= 1;
      try {
        return {
          idx: a + 1,
          node: {
            node: await n[t](),
            loader: n[t],
            data: {},
            server: null,
            universal: null,
          },
        };
      } catch {
        continue;
      }
    }
}
async function Lt({ status: t, error: e, url: n, route: a }) {
  const r = {};
  let s = null;
  if (S.server_loads[0] === 0)
    try {
      const o = await Me(n, [!0]);
      if (o.type !== "data" || (o.nodes[0] && o.nodes[0].type !== "data"))
        throw 0;
      s = o.nodes[0] ?? null;
    } catch {
      (n.origin !== kt || n.pathname !== location.pathname || Qt) &&
        (await W(n));
    }
  try {
    const o = await te({
        loader: Vt,
        url: n,
        params: r,
        route: a,
        parent: () => Promise.resolve({}),
        server_data_node: ee(s),
      }),
      c = {
        node: await _t(),
        loader: _t,
        universal: null,
        server: null,
        data: null,
      };
    return rt({
      url: n,
      params: r,
      branch: [o, c],
      status: t,
      error: e,
      route: null,
    });
  } catch (o) {
    if (o instanceof Ht) return Ut(new URL(o.location, location.href), {}, 0);
    throw o;
  }
}
async function Bn(t) {
  const e = t.href;
  if (gt.has(e)) return gt.get(e);
  let n;
  try {
    const a = (async () => {
      let r =
        (await S.hooks.reroute({
          url: new URL(t),
          fetch: async (s, i) => De(s, i, t).promise,
        })) ?? t;
      if (typeof r == "string") {
        const s = new URL(t);
        S.hash ? (s.hash = r) : (s.pathname = r), (r = s);
      }
      return r;
    })();
    gt.set(e, a), (n = await a);
  } catch {
    gt.delete(e);
    return;
  }
  return n;
}
async function pt(t, e) {
  if (t && !Rt(t, x, S.hash)) {
    const n = await Bn(t);
    if (!n) return;
    const a = Fn(n);
    for (const r of Xt) {
      const s = r.exec(a);
      if (s)
        return { id: At(t), invalidating: e, route: r, params: Xe(s), url: t };
    }
  }
}
function Fn(t) {
  return (
    Je(
      S.hash
        ? t.hash.replace(/^#/, "").replace(/[?#].+/, "")
        : t.pathname.slice(x.length)
    ) || "/"
  );
}
function At(t) {
  return (S.hash ? t.hash.replace(/^#/, "") : t.pathname) + t.search;
}
function Fe({ url: t, type: e, intent: n, delta: a }) {
  let r = !1;
  const s = re(_, n, t, e);
  a !== void 0 && (s.navigation.delta = a);
  const i = {
    ...s.navigation,
    cancel: () => {
      (r = !0), s.reject(new Error("navigation cancelled"));
    },
  };
  return nt || Zt.forEach((o) => o(i)), r ? null : s;
}
async function Z({
  type: t,
  url: e,
  popped: n,
  keepfocus: a,
  noscroll: r,
  replace_state: s,
  state: i = {},
  redirect_count: o = 0,
  nav_token: c = {},
  accept: l = he,
  block: p = he,
}) {
  const u = j;
  j = c;
  const y = await pt(e, !1),
    f =
      t === "enter"
        ? re(_, y, e, t)
        : Fe({
            url: e,
            type: t,
            delta: n == null ? void 0 : n.delta,
            intent: y,
          });
  if (!f) {
    p(), j === c && (j = u);
    return;
  }
  const m = R,
    h = T;
  l(),
    (nt = !0),
    bt &&
      f.navigation.type !== "enter" &&
      D.navigating.set((tt.current = f.navigation));
  let d = y && (await ne(y));
  if (!d) {
    if (Rt(e, x, S.hash)) return await W(e);
    d = await Ve(
      e,
      { id: null },
      await Y(new Kt(404, "Not Found", `Not found: ${e.pathname}`), {
        url: e,
        params: {},
        route: { id: null },
      }),
      404
    );
  }
  if (((e = (y == null ? void 0 : y.url) || e), j !== c))
    return f.reject(new Error("navigation aborted")), !1;
  if (d.type === "redirect")
    if (o >= 20)
      d = await Lt({
        status: 500,
        error: await Y(new Error("Redirect loop"), {
          url: e,
          params: {},
          route: { id: null },
        }),
        url: e,
        route: { id: null },
      });
    else return await Ut(new URL(d.location, e).href, {}, o + 1, c), !1;
  else
    d.props.page.status >= 400 &&
      (await D.updated.check()) &&
      (await Pe(), await W(e));
  if (
    (Oe(),
    Jt(m),
    Ce(h),
    d.props.page.url.pathname !== e.pathname &&
      (e.pathname = d.props.page.url.pathname),
    (i = n ? n.state : i),
    !n)
  ) {
    const g = s ? 0 : 1,
      w = { [G]: (R += g), [Q]: (T += g), [Ee]: i };
    (s ? history.replaceState : history.pushState).call(history, w, "", e),
      s || On(R, T);
  }
  if (((L = null), (d.props.page.state = i), bt)) {
    (_ = d.state), d.props.page && (d.props.page.url = e);
    const g = (
      await Promise.all(Array.from(Cn, (w) => w(f.navigation)))
    ).filter((w) => typeof w == "function");
    if (g.length > 0) {
      let w = function () {
        g.forEach((b) => {
          H.delete(b);
        });
      };
      g.push(w),
        g.forEach((b) => {
          H.add(b);
        });
    }
    K.$set(d.props), zt(d.props.page), (Ne = !0);
  } else je(d, qt, !1);
  const { activeElement: v } = document;
  await Ft();
  const I = n ? n.scroll : r ? Et() : null;
  if (de) {
    const g = e.hash && document.getElementById(He(e));
    I ? scrollTo(I.x, I.y) : g ? g.scrollIntoView() : scrollTo(0, 0);
  }
  const U =
    document.activeElement !== v && document.activeElement !== document.body;
  !a && !U && Gt(e),
    (de = !0),
    d.props.page && Object.assign(k, d.props.page),
    (nt = !1),
    t === "popstate" && $e(T),
    f.fulfil(void 0),
    H.forEach((g) => g(f.navigation)),
    D.navigating.set((tt.current = null));
}
async function Ve(t, e, n, a) {
  return t.origin === kt && t.pathname === location.pathname && !Qt
    ? await Lt({ status: a, error: n, url: t, route: e })
    : await W(t);
}
function Vn() {
  let t, e, n;
  $.addEventListener("mousemove", (o) => {
    const c = o.target;
    clearTimeout(t),
      (t = setTimeout(() => {
        s(c, F.hover);
      }, 20));
  });
  function a(o) {
    o.defaultPrevented || s(o.composedPath()[0], F.tap);
  }
  $.addEventListener("mousedown", a),
    $.addEventListener("touchstart", a, { passive: !0 });
  const r = new IntersectionObserver(
    (o) => {
      for (const c of o)
        c.isIntersecting && (Dt(new URL(c.target.href)), r.unobserve(c.target));
    },
    { threshold: 0 }
  );
  async function s(o, c) {
    const l = Ue(o, $),
      p = l === e && c >= n;
    if (!l || p) return;
    const { url: u, external: y, download: f } = Bt(l, x, S.hash);
    if (y || f) return;
    const m = mt(l),
      h = u && At(_.url) === At(u);
    if (!(m.reload || h))
      if (c <= m.preload_data) {
        (e = l), (n = F.tap);
        const d = await pt(u, !1);
        if (!d) return;
        jn(d);
      } else c <= m.preload_code && ((e = l), (n = c), Dt(u));
  }
  function i() {
    r.disconnect();
    for (const o of $.querySelectorAll("a")) {
      const { url: c, external: l, download: p } = Bt(o, x, S.hash);
      if (l || p) continue;
      const u = mt(o);
      u.reload ||
        (u.preload_code === F.viewport && r.observe(o),
        u.preload_code === F.eager && Dt(c));
    }
  }
  H.add(i), i();
}
function Y(t, e) {
  if (t instanceof St) return t.body;
  const n = yt(t),
    a = In(t);
  return (
    S.hooks.handleError({ error: t, event: e, status: n, message: a }) ?? {
      message: a,
    }
  );
}
function qe(t, e) {
  Pn(
    () => (
      t.add(e),
      () => {
        t.delete(e);
      }
    )
  );
}
function er(t) {
  qe(H, t);
}
function nr(t) {
  qe(Zt, t);
}
function qn(t) {
  if (typeof t == "function") wt.push(t);
  else {
    const { href: e } = new URL(t, location.href);
    wt.push((n) => n.href === e);
  }
}
function rr() {
  return (It = !0), $n();
}
async function ar(t) {
  if (t.type === "error") {
    const e = new URL(location.href),
      { branch: n, route: a } = _;
    if (!a) return;
    const r = await Be(_.branch.length, n, a.errors);
    if (r) {
      const s = rt({
        url: e,
        params: _.params,
        branch: n.slice(0, r.idx).concat(r.node),
        status: t.status ?? 500,
        error: t.error,
        route: a,
      });
      (_ = s.state),
        K.$set(s.props),
        zt(s.props.page),
        Ft().then(() => Gt(_.url));
    }
  } else
    t.type === "redirect"
      ? await Ut(t.location, { invalidateAll: !0 }, 0)
      : ((k.form = t.data),
        (k.status = t.status),
        K.$set({ form: null, page: Tt(k) }),
        await Ft(),
        K.$set({ form: t.data }),
        t.type === "success" && Gt(k.url));
}
function Mn() {
  var e;
  (history.scrollRestoration = "manual"),
    addEventListener("beforeunload", (n) => {
      let a = !1;
      if ((pe(), !nt)) {
        const r = re(_, void 0, null, "leave"),
          s = {
            ...r.navigation,
            cancel: () => {
              (a = !0), r.reject(new Error("navigation cancelled"));
            },
          };
        Zt.forEach((i) => i(s));
      }
      a
        ? (n.preventDefault(), (n.returnValue = ""))
        : (history.scrollRestoration = "auto");
    }),
    addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" && pe();
    }),
    ((e = navigator.connection) != null && e.saveData) || Vn(),
    $.addEventListener("click", async (n) => {
      if (
        n.button ||
        n.which !== 1 ||
        n.metaKey ||
        n.ctrlKey ||
        n.shiftKey ||
        n.altKey ||
        n.defaultPrevented
      )
        return;
      const a = Ue(n.composedPath()[0], $);
      if (!a) return;
      const { url: r, external: s, target: i, download: o } = Bt(a, x, S.hash);
      if (!r) return;
      if (i === "_parent" || i === "_top") {
        if (window.parent !== window) return;
      } else if (i && i !== "_self") return;
      const c = mt(a);
      if (
        (!(a instanceof SVGAElement) &&
          r.protocol !== location.protocol &&
          !(r.protocol === "https:" || r.protocol === "http:")) ||
        o
      )
        return;
      const [p, u] = (S.hash ? r.hash.replace(/^#/, "") : r.href).split("#"),
        y = p === Ot(location);
      if (s || (c.reload && (!y || !u))) {
        Fe({ url: r, type: "link" }) ? (nt = !0) : n.preventDefault();
        return;
      }
      if (u !== void 0 && y) {
        const [, f] = _.url.href.split("#");
        if (f === u) {
          if (
            (n.preventDefault(),
            u === "" ||
              (u === "top" && a.ownerDocument.getElementById("top") === null))
          )
            window.scrollTo({ top: 0 });
          else {
            const m = a.ownerDocument.getElementById(decodeURIComponent(u));
            m && (m.scrollIntoView(), m.focus());
          }
          return;
        }
        if (((z = !0), Jt(R), t(r), !c.replace_state)) return;
        z = !1;
      }
      n.preventDefault(),
        await new Promise((f) => {
          requestAnimationFrame(() => {
            setTimeout(f, 0);
          }),
            setTimeout(f, 100);
        }),
        await Z({
          type: "link",
          url: r,
          keepfocus: c.keepfocus,
          noscroll: c.noscroll,
          replace_state: c.replace_state ?? r.href === location.href,
        });
    }),
    $.addEventListener("submit", (n) => {
      if (n.defaultPrevented) return;
      const a = HTMLFormElement.prototype.cloneNode.call(n.target),
        r = n.submitter;
      if (
        ((r == null ? void 0 : r.formTarget) || a.target) === "_blank" ||
        ((r == null ? void 0 : r.formMethod) || a.method) !== "get"
      )
        return;
      const o = new URL(
        ((r == null ? void 0 : r.hasAttribute("formaction")) &&
          (r == null ? void 0 : r.formAction)) ||
          a.action
      );
      if (Rt(o, x, !1)) return;
      const c = n.target,
        l = mt(c);
      if (l.reload) return;
      n.preventDefault(), n.stopPropagation();
      const p = new FormData(c),
        u = r == null ? void 0 : r.getAttribute("name");
      u && p.append(u, (r == null ? void 0 : r.getAttribute("value")) ?? ""),
        (o.search = new URLSearchParams(p).toString()),
        Z({
          type: "form",
          url: o,
          keepfocus: l.keepfocus,
          noscroll: l.noscroll,
          replace_state: l.replace_state ?? o.href === location.href,
        });
    }),
    addEventListener("popstate", async (n) => {
      var a;
      if (!Mt) {
        if ((a = n.state) != null && a[G]) {
          const r = n.state[G];
          if (((j = {}), r === R)) return;
          const s = V[r],
            i = n.state[Ee] ?? {},
            o = new URL(n.state[dn] ?? location.href),
            c = n.state[Q],
            l = _.url ? Ot(location) === Ot(_.url) : !1;
          if (c === T && (Ne || l)) {
            i !== k.state && (k.state = i),
              t(o),
              (V[R] = Et()),
              s && scrollTo(s.x, s.y),
              (R = r);
            return;
          }
          const u = r - R;
          await Z({
            type: "popstate",
            url: o,
            popped: { state: i, scroll: s, delta: u },
            accept: () => {
              (R = r), (T = c);
            },
            block: () => {
              history.go(-u);
            },
            nav_token: j,
          });
        } else if (!z) {
          const r = new URL(location.href);
          t(r), S.hash && location.reload();
        }
      }
    }),
    addEventListener("hashchange", () => {
      z &&
        ((z = !1),
        history.replaceState(
          { ...history.state, [G]: ++R, [Q]: T },
          "",
          location.href
        ));
    });
  for (const n of document.querySelectorAll("link"))
    Nn.has(n.rel) && (n.href = n.href);
  addEventListener("pageshow", (n) => {
    n.persisted && D.navigating.set((tt.current = null));
  });
  function t(n) {
    (_.url = k.url = n), D.page.set(Tt(k)), D.page.notify();
  }
}
async function Gn(
  t,
  {
    status: e = 200,
    error: n,
    node_ids: a,
    params: r,
    route: s,
    server_route: i,
    data: o,
    form: c,
  }
) {
  Qt = !0;
  const l = new URL(location.href);
  let p;
  ({ params: r = {}, route: s = { id: null } } = (await pt(l, !1)) || {}),
    (p = Xt.find(({ id: f }) => f === s.id));
  let u,
    y = !0;
  try {
    const f = a.map(async (h, d) => {
        const v = o[d];
        return (
          v != null && v.uses && (v.uses = Ge(v.uses)),
          te({
            loader: S.nodes[h],
            url: l,
            params: r,
            route: s,
            parent: async () => {
              const I = {};
              for (let U = 0; U < d; U += 1)
                Object.assign(I, (await f[U]).data);
              return I;
            },
            server_data_node: ee(v),
          })
        );
      }),
      m = await Promise.all(f);
    if (p) {
      const h = p.layouts;
      for (let d = 0; d < h.length; d++) h[d] || m.splice(d, 0, void 0);
    }
    u = rt({
      url: l,
      params: r,
      branch: m,
      status: e,
      error: n,
      form: c,
      route: p ?? null,
    });
  } catch (f) {
    if (f instanceof Ht) {
      await W(new URL(f.location, location.href));
      return;
    }
    (u = await Lt({
      status: yt(f),
      error: await Y(f, { url: l, params: r, route: s }),
      url: l,
      route: s,
    })),
      (t.textContent = ""),
      (y = !1);
  }
  u.props.page && (u.props.page.state = {}), je(u, t, y);
}
async function Me(t, e) {
  var s;
  const n = new URL(t);
  (n.pathname = xn(t.pathname)),
    t.pathname.endsWith("/") && n.searchParams.append(Rn, "1"),
    n.searchParams.append(En, e.map((i) => (i ? "1" : "0")).join(""));
  const a = window.fetch,
    r = await a(n.href, {});
  if (!r.ok) {
    let i;
    throw (
      ((s = r.headers.get("content-type")) != null &&
      s.includes("application/json")
        ? (i = await r.json())
        : r.status === 404
        ? (i = "Not Found")
        : r.status === 500 && (i = "Internal Error"),
      new St(r.status, i))
    );
  }
  return new Promise(async (i) => {
    var y;
    const o = new Map(),
      c = r.body.getReader(),
      l = new TextDecoder();
    function p(f) {
      return Te(f, {
        ...S.decoders,
        Promise: (m) =>
          new Promise((h, d) => {
            o.set(m, { fulfil: h, reject: d });
          }),
      });
    }
    let u = "";
    for (;;) {
      const { done: f, value: m } = await c.read();
      if (f && !u) break;
      for (
        u +=
          !m && u
            ? `
`
            : l.decode(m, { stream: !0 });
        ;

      ) {
        const h = u.indexOf(`
`);
        if (h === -1) break;
        const d = JSON.parse(u.slice(0, h));
        if (((u = u.slice(h + 1)), d.type === "redirect")) return i(d);
        if (d.type === "data")
          (y = d.nodes) == null ||
            y.forEach((v) => {
              (v == null ? void 0 : v.type) === "data" &&
                ((v.uses = Ge(v.uses)), (v.data = p(v.data)));
            }),
            i(d);
        else if (d.type === "chunk") {
          const { id: v, data: I, error: U } = d,
            g = o.get(v);
          o.delete(v), U ? g.reject(p(U)) : g.fulfil(p(I));
        }
      }
    }
  });
}
function Ge(t) {
  return {
    dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
    params: new Set((t == null ? void 0 : t.params) ?? []),
    parent: !!(t != null && t.parent),
    route: !!(t != null && t.route),
    url: !!(t != null && t.url),
    search_params: new Set((t == null ? void 0 : t.search_params) ?? []),
  };
}
let Mt = !1;
function Gt(t) {
  const e = document.querySelector("[autofocus]");
  if (e) e.focus();
  else {
    const n = He(t);
    if (n && document.getElementById(n)) {
      const { x: r, y: s } = Et();
      setTimeout(() => {
        const i = history.state;
        (Mt = !0),
          location.replace(`#${n}`),
          S.hash && location.replace(t.hash),
          history.replaceState(i, "", t.hash),
          scrollTo(r, s),
          (Mt = !1);
      });
    } else {
      const r = document.body,
        s = r.getAttribute("tabindex");
      (r.tabIndex = -1),
        r.focus({ preventScroll: !0, focusVisible: !1 }),
        s !== null
          ? r.setAttribute("tabindex", s)
          : r.removeAttribute("tabindex");
    }
    const a = getSelection();
    if (a && a.type !== "None") {
      const r = [];
      for (let s = 0; s < a.rangeCount; s += 1) r.push(a.getRangeAt(s));
      setTimeout(() => {
        if (a.rangeCount === r.length) {
          for (let s = 0; s < a.rangeCount; s += 1) {
            const i = r[s],
              o = a.getRangeAt(s);
            if (
              i.commonAncestorContainer !== o.commonAncestorContainer ||
              i.startContainer !== o.startContainer ||
              i.endContainer !== o.endContainer ||
              i.startOffset !== o.startOffset ||
              i.endOffset !== o.endOffset
            )
              return;
          }
          a.removeAllRanges();
        }
      });
    }
  }
}
function re(t, e, n, a) {
  var c, l;
  let r, s;
  const i = new Promise((p, u) => {
    (r = p), (s = u);
  });
  return (
    i.catch(() => {}),
    {
      navigation: {
        from: {
          params: t.params,
          route: { id: ((c = t.route) == null ? void 0 : c.id) ?? null },
          url: t.url,
        },
        to: n && {
          params: (e == null ? void 0 : e.params) ?? null,
          route: {
            id:
              ((l = e == null ? void 0 : e.route) == null ? void 0 : l.id) ??
              null,
          },
          url: n,
        },
        willUnload: !e,
        type: a,
        complete: i,
      },
      fulfil: r,
      reject: s,
    }
  );
}
function Tt(t) {
  return {
    data: t.data,
    error: t.error,
    form: t.form,
    params: t.params,
    route: t.route,
    state: t.state,
    status: t.status,
    url: t.url,
  };
}
function Hn(t) {
  const e = new URL(t);
  return (e.hash = decodeURIComponent(t.hash)), e;
}
function He(t) {
  let e;
  if (S.hash) {
    const [, , n] = t.hash.split("#", 3);
    e = n ?? "";
  } else e = t.hash.slice(1);
  return decodeURIComponent(e);
}
export {
  ar as a,
  Jn as b,
  S as c,
  nr as d,
  er as e,
  tr as f,
  rr as i,
  zn as l,
  k as p,
  D as s,
};
