import "../chunks/Bg9kRutz.js";
import {
  m as I,
  h as C,
  n as F,
  w as j,
  y as M,
  W as q,
  aQ as G,
  aR as Y,
  Z as O,
  p as z,
  Y as B,
  C as J,
  T as Z,
  aM as K,
  u as V,
  af as X,
  t as H,
  b as L,
  ag as $,
  c as b,
  s as h,
  a as T,
  ah as D,
  r as u,
  d as P,
  aO as aa,
  aP as ta,
  f as ea,
} from "../chunks/D00cHqf4.js";
import { i as N } from "../chunks/Cff3Gagc.js";
import { e as sa, i as ra } from "../chunks/BchjjF2E.js";
import { r as Q, b as U, s as ia } from "../chunks/CwiTbcdn.js";
import { s as oa } from "../chunks/ClmrJTCD.js";
import { i as na, a as la, b as ca, c as da } from "../chunks/DEe0Px4n.js";
import { H as ma } from "../chunks/96SCxFG8.js";
function pa(a, e, g, p, s) {
  var f = a,
    n = "",
    l;
  I(() => {
    if (n === (n = e() ?? "")) {
      C && F();
      return;
    }
    l !== void 0 && (Z(l), (l = void 0)),
      n !== "" &&
        (l = j(() => {
          if (C) {
            M.data;
            for (
              var t = F(), w = t;
              t !== null && (t.nodeType !== 8 || t.data !== "");

            )
              (w = t), (t = q(t));
            if (t === null) throw (G(), Y);
            O(M, w), (f = z(t));
            return;
          }
          var x = n + "",
            r = B(x);
          O(J(r), r.lastChild), f.before(r);
        }));
  });
}
function W(a, e, g) {
  K(() => {
    var p = V(() => e(a, g == null ? void 0 : g()) || {});
    if (p != null && p.destroy) return () => p.destroy();
  });
}
function ua(a) {
  const e = JSON.parse(a);
  return e.data && (e.data = ca(e.data, da.decoders)), e;
}
function S(a) {
  return HTMLElement.prototype.cloneNode.call(a);
}
function k(a, e = () => {}) {
  const g = async ({
    action: s,
    result: f,
    reset: n = !0,
    invalidateAll: l = !0,
  }) => {
    f.type === "success" &&
      (n && HTMLFormElement.prototype.reset.call(a), l && (await na())),
      (location.origin + location.pathname === s.origin + s.pathname ||
        f.type === "redirect" ||
        f.type === "error") &&
        (await la(f));
  };
  async function p(s) {
    var _, m, c, v, y;
    if (
      ((_ = s.submitter) != null && _.hasAttribute("formmethod")
        ? s.submitter.formMethod
        : S(a).method) !== "post"
    )
      return;
    s.preventDefault();
    const n = new URL(
        (m = s.submitter) != null && m.hasAttribute("formaction")
          ? s.submitter.formAction
          : S(a).action
      ),
      l =
        (c = s.submitter) != null && c.hasAttribute("formenctype")
          ? s.submitter.formEnctype
          : S(a).enctype,
      t = new FormData(a),
      w = (v = s.submitter) == null ? void 0 : v.getAttribute("name");
    w &&
      t.append(
        w,
        ((y = s.submitter) == null ? void 0 : y.getAttribute("value")) ?? ""
      );
    const x = new AbortController();
    let r = !1;
    const A =
      (await e({
        action: n,
        cancel: () => (r = !0),
        controller: x,
        formData: t,
        formElement: a,
        submitter: s.submitter,
      })) ?? g;
    if (r) return;
    let d;
    try {
      const i = new Headers({
        accept: "application/json",
        "x-sveltekit-action": "true",
      });
      l !== "multipart/form-data" &&
        i.set(
          "Content-Type",
          /^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(l)
            ? l
            : "application/x-www-form-urlencoded"
        );
      const R = l === "multipart/form-data" ? t : new URLSearchParams(t),
        E = await fetch(n, {
          method: "POST",
          headers: i,
          cache: "no-store",
          body: R,
          signal: x.signal,
        });
      (d = ua(await E.text())), d.type === "error" && (d.status = E.status);
    } catch (i) {
      if ((i == null ? void 0 : i.name) === "AbortError") return;
      d = { type: "error", error: i };
    }
    await A({
      action: n,
      formData: t,
      formElement: a,
      update: (i) =>
        g({
          action: n,
          result: d,
          reset: i == null ? void 0 : i.reset,
          invalidateAll: i == null ? void 0 : i.invalidateAll,
        }),
      result: d,
    });
  }
  return (
    HTMLFormElement.prototype.addEventListener.call(a, "submit", p),
    {
      destroy() {
        HTMLFormElement.prototype.removeEventListener.call(a, "submit", p);
      },
    }
  );
}
function fa(a) {
  return new Date(a).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}
var ba = H(
    '<div role="alert" class="alert mt-4 alert-success"><span class="material-icons notranslate">check</span> <span> </span></div>'
  ),
  va = H(
    '<div role="alert" class="alert mt-4 alert-error"><span class="material-icons notranslate">error</span> <span><!></span></div>'
  ),
  ha = H(
    '<div class="card card-compact text-center bg-base-200 pb-2"><form method="post" class="flex flex-col"><input type="hidden" name="user"> <input type="hidden" name="pass"> <button class="btn btn-neutral" type="submit"> </button> <span class="text-xs"> </span></form> <a class="btn btn-xs btn-circle btn-ghost absolute bottom-0 right-0"><span><span class="material-icons notranslate text-xs">close</span></span></a></div>'
  ),
  ga = H(
    '<div><!> <div class="card card-compact bg-base-100"><div class="card-body"><h1 class="card-title">Login to AQW</h1> <p>log into your account without opening the game</p> <form method="POST"><div class="form-control"><label class="label" for="user"><span class="label-text">Username</span></label> <input required type="text" name="user" id="user" class="input input-bordered"></div> <div class="form-control"><label class="label" for="pass"><span class="label-text">Password</span></label> <input required type="password" name="pass" id="pass" class="input input-bordered"></div> <button type="submit" class="btn btn-primary mt-4"><span class="material-icons notranslate">login</span> Login</button></form> <!> <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4"></div></div></div> <div role="alert" class="alert my-2"><span class="material-icons notranslate">info</span> <span>No data is recorded and stored on the server.</span></div> <div class="card card-compact bg-base-100"><div class="card-body"><h2 class="text-xl font-semibold">What can you get?</h2> <div class="grid grid-cols-2 lg:grid-cols-3 gap-4"><div><h3 class="text-lg mb-2">Gears of Doom</h3> <div class="bg-[#ebdfb6] p-8 text-center rounded-box"><img class="w-full" src="https://d33wubrfki0l68.cloudfront.net/a693f261-0597-42da-848b-b98181e219fc/gd.png" alt="gears of doom"></div></div> <div><h3 class="text-lg mb-2">AC Holiday Gift</h3> <div class="bg-[#FEF1C5] p-3 text-center rounded-box"><img class="w-full" src="https://d33wubrfki0l68.cloudfront.net/b779cab7-7669-4a2e-95d7-55bf2f5f7b61/ac.jpeg" alt="holiday gift"></div></div> <div><h3 class="text-lg mb-2">Daily Login Bonus</h3> <img class="w-full" src="https://d33wubrfki0l68.cloudfront.net/0bd51046-4b2a-4b51-8dcd-1b9b025fb96d/DailyLoginRewards2.png" alt="daily login"></div></div></div></div></div>'
  );
function Ea(a, e) {
  X(e, !0);
  const g = {
    title: "Login",
    desc: "Packet spammer code, Shop ID, Quest ID and all about AQWorlds hacking",
    url: "/login",
  };
  var p = ga(),
    s = b(p);
  ma(s, oa(g));
  var f = h(s, 2),
    n = b(f),
    l = h(b(n), 4);
  W(l, (r) => (k == null ? void 0 : k(r)));
  var t = h(l, 2);
  {
    var w = (r) => {
      var o = ta(),
        A = ea(o);
      {
        var d = (m) => {
            var c = ba(),
              v = h(b(c), 2),
              y = b(v, !0);
            u(v), u(c), T(() => P(y, e.form.msg)), L(m, c);
          },
          _ = (m) => {
            var c = va(),
              v = h(b(c), 2),
              y = b(v);
            pa(y, () => e.form.msg), u(v), u(c), L(m, c);
          };
        N(A, (m) => {
          e.form.success ? m(d) : m(_, !1);
        });
      }
      L(r, o);
    };
    N(t, (r) => {
      var o;
      (o = e.form) != null && o.msg && r(w);
    });
  }
  var x = h(t, 2);
  sa(
    x,
    21,
    () =>
      [...e.data.logins].sort(
        (r, o) => new Date(o.last).getTime() - new Date(r.last).getTime()
      ),
    ra,
    (r, o) => {
      var A = ha(),
        d = b(A),
        _ = b(d);
      Q(_);
      var m = h(_, 2);
      Q(m), T(() => U(m, atob(D(o).pass)));
      var c = h(m, 2),
        v = b(c);
      u(c);
      var y = h(c, 2),
        i = b(y, !0);
      T(() => P(i, fa(D(o).last))),
        u(y),
        u(d),
        W(d, (E) => (k == null ? void 0 : k(E)));
      var R = h(d, 2);
      u(A),
        T(() => {
          U(_, D(o).user),
            P(v, `${D(o).user ?? ""} (level ${D(o).level ?? ""})`),
            ia(R, "href", "/delete/" + D(o).user);
        }),
        L(r, A);
    }
  ),
    u(x),
    u(n),
    u(f),
    aa(4),
    u(p),
    L(a, p),
    $();
}
export { Ea as component };
