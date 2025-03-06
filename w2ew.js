var Rl = Object.defineProperty;
var ur = s => {
  throw TypeError(s)
};
var Cl = (s, e, i) => e in s ? Rl(s, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: i
}) : s[e] = i;
var b = (s, e, i) => Cl(s, typeof e != "symbol" ? e + "" : e, i),
  dn = (s, e, i) => e.has(s) || ur("Cannot " + i);
var Z = (s, e, i) => (dn(s, e, "read from private field"), i ? i.call(s) : e.get(s)),
  J = (s, e, i) => e.has(s) ? ur("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(s) : e.set(s, i),
  ft = (s, e, i, n) => (dn(s, e, "write to private field"), n ? n.call(s, i) : e.set(s, i), i),
  ye = (s, e, i) => (dn(s, e, "access private method"), i);
var Me = (s, e, i, n) => ({
  set _(r) {
    ft(s, e, r, i)
  },
  get _() {
    return Z(s, e, n)
  }
});
import {
  B as Sl,
  ae as ss,
  af as oi,
  s as ae,
  C as $,
  E as ee,
  F as te,
  G as ie,
  k as Re,
  o as K,
  i as O,
  f as C,
  a6 as L,
  a4 as P,
  a5 as ge,
  z as ke,
  e as q,
  c as Q,
  b as W,
  aa as Ts,
  H as De,
  a8 as j,
  D as B,
  r as Ze,
  a9 as G,
  Q as Mi,
  n as Ge,
  a as Be,
  g as Le,
  S as Pl,
  aj as fr,
  ak as hr,
  a2 as xs,
  ah as tn,
  q as X,
  I as $n,
  ad as Ml,
  u as Ri,
  h as me,
  J as qt,
  K as Qt,
  ag as Kt,
  al as Dl,
  t as nt,
  d as rt,
  j as Ct,
  L as dr,
  v as Fl,
  am as Rs
} from "./scheduler.-0Vdlx-p.js";
import {
  S as fe,
  i as he,
  a as T,
  t as x,
  g as Te,
  d as xe,
  f as sn,
  h as nn,
  j as Cs,
  c as be,
  b as _e,
  m as ve,
  e as Ae,
  n as mr,
  l as Ul,
  k as rn
} from "./index.uszZAr3B.js";
import {
  g as se,
  a as Je,
  c as ue,
  b as qo,
  f as Qo,
  d as zl,
  h as Il
} from "./utils.BuXhXekL.js";
import {
  o as ns,
  m as Ke,
  q as ht,
  e as ii,
  j as ot,
  l as Ve,
  g as si,
  w as Gi,
  u as gr,
  h as Ut,
  n as Jt,
  p as Nl,
  f as Ss,
  k as on,
  i as Yt,
  t as pr,
  c as ds,
  r as mn,
  v as Ol,
  x as Ps,
  y as Bl
} from "./index.DGbiueYy.js";
import {
  t as Ci,
  o as rs,
  j as Ko,
  v as Ll,
  w as Gl,
  x as Vl,
  y as Hl,
  z as Xl,
  A as br,
  B as Wl,
  C as jl,
  D as Yl,
  l as Di,
  r as os,
  m as Si,
  n as ai,
  p as ut,
  E as ql,
  F as Ki,
  G as Cn,
  H as Ql,
  R as an,
  d as Kl,
  P as Zl,
  c as Jl
} from "./index.Cj-P3cXZ.js";
import {
  w as Pe,
  d as Zi
} from "./index.BU1zZhRy.js";
import {
  U as qe,
  T as gt,
  V as Pt,
  I as ni,
  b as ri,
  C as Zo,
  W as $l,
  S as Jo,
  d as Sn
} from "./SpriteDrawer.Crtv7m6h.js";
import {
  g as ec
} from "./entry.7yO_sdT4.js";
import {
  e as Pi
} from "./each.xHWOJQiC.js";
import {
  F as pi
} from "./fa-layers-text.svelte_svelte_type_style_lang.NTbQCuTk.js";
import {
  f as tc
} from "./Header.ZSBqe9Iu.js";

function ic(s) {
  return window.getComputedStyle(s).getPropertyValue("direction")
}

function gn(s, e, i, n) {
  const r = (s - (isNaN(e) ? 0 : e)) % n;
  let o = Math.abs(r) * 2 >= n ? s + Math.sign(r) * (n - Math.abs(r)) : s - r;
  isNaN(e) ? !isNaN(i) && o > i && (o = Math.floor(i / n) * n) : o < e ? o = e : !isNaN(i) && o > i && (o = e + Math.floor((i - e) / n) * n);
  const a = n.toString(),
    c = a.indexOf("."),
    l = c >= 0 ? a.length - c : 0;
  if (l > 0) {
    const u = Math.pow(10, l);
    o = Math.round(o * u) / u
  }
  return o
}

function $0(s, e, i) {
  return Math.max(s, Math.min(e, i))
}
const sc = {
  disabled: !1,
  required: !1,
  name: void 0,
  value: "on",
  defaultChecked: !1
};

function nc(s) {
  const e = {
      ...sc,
      ...s
    },
    i = Ci(ns(e, "checked", "defaultChecked")),
    {
      disabled: n,
      name: r,
      required: o,
      value: a
    } = i,
    c = e.checked ?? Pe(e.defaultChecked),
    l = rs(c, e == null ? void 0 : e.onCheckedChange),
    u = Ke("checkbox", {
      stores: [l, n, o],
      returned: ([m, g, p]) => ({
        "data-disabled": ht(g),
        disabled: ht(g),
        "data-state": m === "indeterminate" ? "indeterminate" : m ? "checked" : "unchecked",
        type: "button",
        role: "checkbox",
        "aria-checked": m === "indeterminate" ? "mixed" : m,
        "aria-required": p
      }),
      action: m => ({
        destroy: ii(ot(m, "keydown", p => {
          p.key === Ve.ENTER && p.preventDefault()
        }), ot(m, "click", () => {
          n.get() || l.update(p => p === "indeterminate" ? !0 : !p)
        }))
      })
    }),
    f = Ke("checkbox-input", {
      stores: [l, r, a, o, n],
      returned: ([m, g, p, _, A]) => ({
        type: "checkbox",
        "aria-hidden": !0,
        hidden: !0,
        tabindex: -1,
        name: g,
        value: p,
        checked: m === "indeterminate" ? !1 : m,
        required: _,
        disabled: ht(A),
        style: si({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)"
        })
      })
    }),
    h = Zi(l, m => m === "indeterminate"),
    d = Zi(l, m => m === !0);
  return {
    elements: {
      root: u,
      input: f
    },
    states: {
      checked: l
    },
    helpers: {
      isIndeterminate: h,
      isChecked: d
    },
    options: i
  }
}

function rc() {
  return {
    elements: {
      root: Ke("label", {
        action: e => ({
          destroy: ot(e, "mousedown", n => {
            !n.defaultPrevented && n.detail > 1 && n.preventDefault()
          })
        })
      })
    }
  }
}
const {
  name: $t
} = on("dialog"), oc = {
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  role: "dialog",
  defaultOpen: !1,
  portal: void 0,
  forceVisible: !1,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
}, ac = ["content", "title", "description"];

function lc(s) {
  const e = {
      ...oc,
      ...s
    },
    i = Ci(ns(e, "ids")),
    {
      preventScroll: n,
      closeOnEscape: r,
      closeOnOutsideClick: o,
      role: a,
      portal: c,
      forceVisible: l,
      openFocus: u,
      closeFocus: f,
      onOutsideClick: h
    } = i,
    d = Gi.writable(null),
    m = Ci({
      ...Ko(ac),
      ...e.ids
    }),
    g = e.open ?? Pe(e.defaultOpen),
    p = rs(g, e == null ? void 0 : e.onOpenChange),
    _ = Zi([p, l], ([v, F]) => v || F);
  let A = Jt;

  function w(v) {
    const F = v.currentTarget,
      M = v.currentTarget;
    !Yt(F) || !Yt(M) || (p.set(!0), d.set(M))
  }

  function y() {
    p.set(!1), br({
      prop: f.get(),
      defaultEl: d.get()
    })
  }
  const E = Ke($t("trigger"), {
      stores: [p],
      returned: ([v]) => ({
        "aria-haspopup": "dialog",
        "aria-expanded": v,
        type: "button"
      }),
      action: v => ({
        destroy: ii(ot(v, "click", M => {
          w(M)
        }), ot(v, "keydown", M => {
          M.key !== Ve.ENTER && M.key !== Ve.SPACE || (M.preventDefault(), w(M))
        }))
      })
    }),
    z = Ke($t("overlay"), {
      stores: [_, p],
      returned: ([v, F]) => ({
        hidden: v ? void 0 : !0,
        tabindex: -1,
        style: si({
          display: v ? void 0 : "none"
        }),
        "aria-hidden": !0,
        "data-state": F ? "open" : "closed"
      }),
      action: v => {
        let F = Jt;
        if (r.get()) {
          const M = gr(v, {
            handler: () => {
              y()
            }
          });
          M && M.destroy && (F = M.destroy)
        }
        return {
          destroy() {
            F()
          }
        }
      }
    }),
    I = Ke($t("content"), {
      stores: [_, m.content, m.description, m.title, p],
      returned: ([v, F, M, V, H]) => ({
        id: F,
        role: a.get(),
        "aria-describedby": M,
        "aria-labelledby": V,
        "aria-modal": v ? "true" : void 0,
        "data-state": H ? "open" : "closed",
        tabindex: -1,
        hidden: v ? void 0 : !0,
        style: si({
          display: v ? void 0 : "none"
        })
      }),
      action: v => {
        let F = Jt,
          M = Jt;
        const V = ii(Ut([p, o, r], ([H, le, pe]) => {
          if (!H) return;
          const ne = Gl({
            immediate: !1,
            escapeDeactivates: pe,
            clickOutsideDeactivates: le,
            allowOutsideClick: !0,
            returnFocusOnDeactivate: !1,
            fallbackFocus: v
          });
          F = ne.activate, M = ne.deactivate;
          const oe = ne.useFocusTrap(v);
          return oe && oe.destroy ? oe.destroy : ne.deactivate
        }), Ut([o, p], ([H, le]) => Ll(v, {
          open: le,
          closeOnInteractOutside: H,
          onClose() {
            y()
          },
          shouldCloseOnInteractOutside(pe) {
            var ne;
            return (ne = h.get()) == null || ne(pe), !pe.defaultPrevented
          }
        }).destroy), Ut([r], ([H]) => H ? gr(v, {
          handler: y
        }).destroy : Jt), Ut([_], ([H]) => {
          Sl().then(() => {
            H ? F() : M()
          })
        }));
        return {
          destroy: () => {
            A(), V()
          }
        }
      }
    }),
    R = Ke($t("portalled"), {
      stores: c,
      returned: v => ({
        "data-portal": Nl(v)
      }),
      action: v => {
        const F = Ut([c], ([M]) => {
          if (M === null) return Jt;
          const V = Vl(v, M);
          return V === null ? Jt : Hl(v, V).destroy
        });
        return {
          destroy() {
            F()
          }
        }
      }
    }),
    k = Ke($t("title"), {
      stores: [m.title],
      returned: ([v]) => ({
        id: v
      })
    }),
    U = Ke($t("description"), {
      stores: [m.description],
      returned: ([v]) => ({
        id: v
      })
    }),
    S = Ke($t("close"), {
      returned: () => ({
        type: "button"
      }),
      action: v => ({
        destroy: ii(ot(v, "click", () => {
          y()
        }), ot(v, "keydown", M => {
          M.key !== Ve.SPACE && M.key !== Ve.ENTER || (M.preventDefault(), y())
        }))
      })
    });
  return Ut([p, n], ([v, F]) => {
    if (Ss) {
      if (F && v && (A = Xl()), v) {
        const M = document.getElementById(m.content.get());
        br({
          prop: u.get(),
          defaultEl: M
        })
      }
      return () => {
        l.get() || A()
      }
    }
  }), {
    ids: m,
    elements: {
      content: I,
      trigger: E,
      title: k,
      description: U,
      overlay: z,
      close: S,
      portalled: R
    },
    states: {
      open: p
    },
    options: i
  }
}
const cc = {
    defaultValue: [],
    min: 0,
    max: 100,
    step: 1,
    orientation: "horizontal",
    dir: "ltr",
    disabled: !1
  },
  {
    name: ms
  } = on("slider"),
  uc = s => {
    const e = {
        ...cc,
        ...s
      },
      i = Ci(ns(e, "value", "onValueChange", "defaultValue")),
      {
        min: n,
        max: r,
        step: o,
        orientation: a,
        dir: c,
        disabled: l
      } = i,
      u = e.value ?? Pe(e.defaultValue),
      f = rs(u, e == null ? void 0 : e.onValueChange),
      h = Gi(Pe(!1)),
      d = Gi(Pe(0)),
      m = Gi(Pe(null)),
      g = Ko(["root"]),
      p = (R, k) => {
        f.update(U => {
          if (!U) return [R];
          if (U[k] === R) return U;
          const S = [...U],
            v = S[k] > R ? -1 : 1;

          function F() {
            S[k] = S[k + v], S[k + v] = R;
            const le = _();
            le && (le[k + v].focus(), m.set({
              thumb: le[k + v],
              index: k + v
            }))
          }
          if (v === -1 && R < S[k - 1]) return F(), S;
          if (v === 1 && R > S[k + 1]) return F(), S;
          const M = n.get(),
            V = r.get(),
            H = o.get();
          return S[k] = gn(R, M, V, H), S
        })
      },
      _ = () => {
        const R = mn(g.root);
        return R ? Array.from(R.querySelectorAll('[data-melt-part="thumb"]')).filter(k => Yt(k)) : null
      },
      A = Zi([n, r], ([R, k]) => U => (U - R) / (k - R) * 100),
      w = Gi.derived([a, c], ([R, k]) => R === "horizontal" ? k === "rtl" ? "rl" : "lr" : k === "rtl" ? "tb" : "bt"),
      y = Ke(ms(), {
        stores: [l, a, c],
        returned: ([R, k, U]) => ({
          dir: U,
          disabled: ht(R),
          "data-disabled": ht(R),
          "data-orientation": k,
          style: R ? void 0 : `touch-action: ${k==="horizontal"?"pan-y":"pan-x"}`,
          "data-melt-id": g.root
        })
      }),
      E = Ke(ms("range"), {
        stores: [f, w, A],
        returned: ([R, k, U]) => {
          const S = R.length > 1 ? U(Math.min(...R) ?? 0) : 0,
            v = 100 - U(Math.max(...R) ?? 0),
            F = {
              position: "absolute"
            };
          switch (k) {
            case "lr": {
              F.left = `${S}%`, F.right = `${v}%`;
              break
            }
            case "rl": {
              F.right = `${S}%`, F.left = `${v}%`;
              break
            }
            case "bt": {
              F.bottom = `${S}%`, F.top = `${v}%`;
              break
            }
            case "tb": {
              F.top = `${S}%`, F.bottom = `${v}%`;
              break
            }
          }
          return {
            style: si(F)
          }
        }
      }),
      z = pr(ms("thumb"), {
        stores: [f, A, n, r, l, a, w],
        returned: ([R, k, U, S, v, F, M]) => Array.from({
          length: R.length || 1
        }, (H, le) => {
          d.get() < R.length && d.update(de => de + 1);
          const ne = R[le],
            oe = `${k(ne)}%`,
            Y = {
              position: "absolute"
            };
          switch (M) {
            case "lr": {
              Y.left = oe, Y.translate = "-50% 0";
              break
            }
            case "rl": {
              Y.right = oe, Y.translate = "50% 0";
              break
            }
            case "bt": {
              Y.bottom = oe, Y.translate = "0 50%";
              break
            }
            case "tb": {
              Y.top = oe, Y.translate = "0 -50%";
              break
            }
          }
          return {
            role: "slider",
            "aria-valuemin": U,
            "aria-valuemax": S,
            "aria-valuenow": ne,
            "aria-disabled": ht(v),
            "aria-orientation": F,
            "data-melt-part": "thumb",
            "data-value": ne,
            style: si(Y),
            tabindex: v ? -1 : 0
          }
        }),
        action: R => ({
          destroy: ot(R, "keydown", U => {
            if (l.get()) return;
            const S = U.currentTarget;
            if (!Yt(S)) return;
            const v = _();
            if (!(v != null && v.length)) return;
            const F = v.indexOf(S);
            if (d.set(F), ![Ve.ARROW_LEFT, Ve.ARROW_RIGHT, Ve.ARROW_UP, Ve.ARROW_DOWN, Ve.HOME, Ve.END].includes(U.key)) return;
            U.preventDefault();
            const M = n.get(),
              V = r.get(),
              H = o.get(),
              le = f.get(),
              pe = a.get(),
              ne = w.get(),
              oe = le[F];
            switch (U.key) {
              case Ve.HOME: {
                p(M, F);
                break
              }
              case Ve.END: {
                p(V, F);
                break
              }
              case Ve.ARROW_LEFT: {
                if (pe !== "horizontal") break;
                U.metaKey ? p(ne === "rl" ? V : M, F) : ne === "rl" && oe < V ? p(oe + H, F) : ne === "lr" && oe > M && p(oe - H, F);
                break
              }
              case Ve.ARROW_RIGHT: {
                if (pe !== "horizontal") break;
                U.metaKey ? p(ne === "rl" ? M : V, F) : ne === "rl" && oe > M ? p(oe - H, F) : ne === "lr" && oe < V && p(oe + H, F);
                break
              }
              case Ve.ARROW_UP: {
                U.metaKey ? p(ne === "tb" ? M : V, F) : ne === "tb" && oe > M ? p(oe - H, F) : ne !== "tb" && oe < V && p(oe + H, F);
                break
              }
              case Ve.ARROW_DOWN: {
                U.metaKey ? p(ne === "tb" ? V : M, F) : ne === "tb" && oe < V ? p(oe + H, F) : ne !== "tb" && oe > M && p(oe - H, F);
                break
              }
            }
          })
        })
      }),
      I = pr(ms("tick"), {
        stores: [f, n, r, o, w],
        returned: ([R, k, U, S, v]) => {
          const F = U - k;
          let M = Math.ceil(F / S);
          return F % S == 0 && M++, Array.from({
            length: M
          }, (V, H) => {
            const le = `${H*(S/(U-k))*100}%`,
              pe = H === 0,
              ne = H === M - 1,
              oe = pe ? 0 : ne ? -100 : -50,
              Y = {
                position: "absolute"
              };
            switch (v) {
              case "lr": {
                Y.left = le, Y.translate = `${oe}% 0`;
                break
              }
              case "rl": {
                Y.right = le, Y.translate = `${-oe}% 0`;
                break
              }
              case "bt": {
                Y.bottom = le, Y.translate = `0 ${-oe}%`;
                break
              }
              case "tb": {
                Y.top = le, Y.translate = `0 ${oe}%`;
                break
              }
            }
            const de = k + H * S;
            return {
              "data-bounded": (R.length === 1 ? de <= R[0] : R[0] <= de && de <= R[R.length - 1]) ? !0 : void 0,
              "data-value": de,
              style: si(Y)
            }
          })
        }
      });
    return Ut([y, n, r, l, a, w, o], ([R, k, U, S, v, F, M]) => {
      if (!Ss || S) return;
      const V = (Y, de, Ce, He) => {
          const Ie = (Y - Ce) / (He - Ce) * (U - k) + k;
          if (Ie < k) p(k, de);
          else if (Ie > U) p(U, de);
          else {
            const ze = M,
              We = k,
              Ne = Math.floor((Ie - We) / ze),
              dt = We + Ne * ze + ze / 2,
              at = We + (Ne + 1) * ze + ze / 2,
              je = Ie >= dt && Ie < at ? (Ne + 1) * ze + We : Ne * ze + We;
            je <= U && p(je, de)
          }
        },
        H = Y => {
          const de = _();
          if (!de) return;
          de.forEach(Ie => Ie.blur());
          const Ce = de.map(Ie => {
              if (v === "horizontal") {
                const {
                  left: ze,
                  right: We
                } = Ie.getBoundingClientRect();
                return Math.abs(Y.clientX - (ze + We) / 2)
              } else {
                const {
                  top: ze,
                  bottom: We
                } = Ie.getBoundingClientRect();
                return Math.abs(Y.clientY - (ze + We) / 2)
              }
            }),
            He = de[Ce.indexOf(Math.min(...Ce))],
            $e = de.indexOf(He);
          return {
            thumb: He,
            index: $e
          }
        },
        le = Y => {
          if (!h.get()) return;
          Y.preventDefault(), Y.stopPropagation();
          const de = mn(R["data-melt-id"]),
            Ce = m.get();
          if (!de || !Ce) return;
          Ce.thumb.focus();
          const {
            left: He,
            right: $e,
            top: Ie,
            bottom: ze
          } = de.getBoundingClientRect();
          switch (F) {
            case "lr": {
              V(Y.clientX, Ce.index, He, $e);
              break
            }
            case "rl": {
              V(Y.clientX, Ce.index, $e, He);
              break
            }
            case "bt": {
              V(Y.clientY, Ce.index, ze, Ie);
              break
            }
            case "tb": {
              V(Y.clientY, Ce.index, Ie, ze);
              break
            }
          }
        },
        pe = Y => {
          if (Y.button !== 0) return;
          const de = mn(R["data-melt-id"]),
            Ce = H(Y);
          if (!Ce || !de) return;
          const He = Y.target;
          !Yt(He) || !de.contains(He) || (Y.preventDefault(), m.set(Ce), Ce.thumb.focus(), h.set(!0), le(Y))
        },
        ne = () => {
          h.set(!1)
        },
        oe = ii(ds(document, "pointerdown", pe), ds(document, "pointerup", ne), ds(document, "pointerleave", ne), ds(document, "pointermove", le));
      return () => {
        oe()
      }
    }), Ut([o, n, r, f], function([k, U, S, v]) {
      const F = V => gn(V, U, S, k) === V,
        M = V => gn(V, U, S, k);
      v.some(V => !F(V)) && f.update(V => V.map(M))
    }), {
      elements: {
        root: y,
        thumbs: z,
        range: E,
        ticks: I
      },
      states: {
        value: f
      },
      options: i
    }
  },
  fc = {
    defaultChecked: !1,
    disabled: !1,
    required: !1,
    name: "",
    value: ""
  },
  {
    name: _r
  } = on("switch");

function hc(s) {
  const e = {
      ...fc,
      ...s
    },
    i = Ci(ns(e, "checked")),
    {
      disabled: n,
      required: r,
      name: o,
      value: a
    } = i,
    c = e.checked ?? Pe(e.defaultChecked),
    l = rs(c, e == null ? void 0 : e.onCheckedChange);

  function u() {
    n.get() || l.update(d => !d)
  }
  const f = Ke(_r(), {
      stores: [l, n, r],
      returned: ([d, m, g]) => ({
        "data-disabled": ht(m),
        disabled: ht(m),
        "data-state": d ? "checked" : "unchecked",
        type: "button",
        role: "switch",
        "aria-checked": d ? "true" : "false",
        "aria-required": g ? "true" : void 0
      }),
      action(d) {
        return {
          destroy: ii(ot(d, "click", () => {
            u()
          }), ot(d, "keydown", g => {
            g.key !== Ve.ENTER && g.key !== Ve.SPACE || (g.preventDefault(), u())
          }))
        }
      }
    }),
    h = Ke(_r("input"), {
      stores: [l, o, r, n, a],
      returned: ([d, m, g, p, _]) => ({
        type: "checkbox",
        "aria-hidden": !0,
        hidden: !0,
        tabindex: -1,
        name: m,
        value: _,
        checked: d,
        required: g,
        disabled: ht(p),
        style: si({
          position: "absolute",
          opacity: 0,
          "pointer-events": "none",
          margin: 0,
          transform: "translateX(-100%)"
        })
      })
    });
  return {
    elements: {
      root: f,
      input: h
    },
    states: {
      checked: l
    },
    options: i
  }
}
const dc = {
    orientation: "horizontal",
    activateOnFocus: !0,
    loop: !0,
    autoSet: !0
  },
  {
    name: gs,
    selector: mc
  } = on("tabs");

function gc(s) {
  const e = {
      ...dc,
      ...s
    },
    i = Ci(ns(e, "defaultValue", "value", "onValueChange", "autoSet")),
    {
      orientation: n,
      activateOnFocus: r,
      loop: o
    } = i,
    a = e.value ?? Pe(e.defaultValue),
    c = rs(a, e == null ? void 0 : e.onValueChange);
  let l = e.defaultValue ?? c.get();
  const u = Ke(gs(), {
      stores: n,
      returned: g => ({
        "data-orientation": g
      })
    }),
    f = Ke(gs("list"), {
      stores: n,
      returned: g => ({
        role: "tablist",
        "aria-orientation": g,
        "data-orientation": g
      })
    }),
    h = g => typeof g == "string" ? {
      value: g
    } : g,
    d = Ke(gs("trigger"), {
      stores: [c, n],
      returned: ([g, p]) => _ => {
        const {
          value: A,
          disabled: w
        } = h(_);
        !g && !l && e.autoSet && (l = A, g = A, c.set(A));
        const E = (Ss ? g : l) === A;
        return {
          type: "button",
          role: "tab",
          "data-state": E ? "active" : "inactive",
          tabindex: E ? 0 : -1,
          "data-value": A,
          "data-orientation": p,
          "data-disabled": ht(w),
          disabled: ht(w)
        }
      },
      action: g => ({
        destroy: ii(ot(g, "focus", () => {
          const _ = g.dataset.disabled === "true",
            A = g.dataset.value;
          r.get() && !_ && A !== void 0 && c.set(A)
        }), ot(g, "click", _ => {
          if (g.focus(), _.preventDefault(), g.dataset.disabled === "true") return;
          const w = g.dataset.value;
          g.focus(), w !== void 0 && c.set(w)
        }), ot(g, "keydown", _ => {
          const A = g.dataset.value;
          if (!A) return;
          const w = _.currentTarget;
          if (!Yt(w)) return;
          const y = w.closest(mc());
          if (!Yt(y)) return;
          const E = o.get(),
            I = Array.from(y.querySelectorAll('[role="tab"]')).filter(v => Yt(v)).filter(v => !v.hasAttribute("data-disabled")),
            R = I.findIndex(v => v === _.target),
            k = ic(y),
            {
              nextKey: U,
              prevKey: S
            } = Ol(k, n.get());
          _.key === U ? (_.preventDefault(), Wl(I, R, E).focus()) : _.key === S ? (_.preventDefault(), jl(I, R, E).focus()) : _.key === Ve.ENTER || _.key === Ve.SPACE ? (_.preventDefault(), c.set(A)) : _.key === Ve.HOME ? (_.preventDefault(), I[0].focus()) : _.key === Ve.END && (_.preventDefault(), Yl(I).focus())
        }))
      })
    }),
    m = Ke(gs("content"), {
      stores: c,
      returned: g => p => ({
        role: "tabpanel",
        "aria-labelledby": p,
        hidden: Ss ? g === p ? void 0 : !0 : l === p ? void 0 : !0,
        tabindex: 0
      })
    });
  return {
    elements: {
      root: u,
      list: f,
      trigger: d,
      content: m
    },
    states: {
      value: c
    },
    options: i
  }
}

function e1(s, e) {
  return s.length !== e.length ? !1 : s.every((i, n) => i === e[n])
}

function $o() {
  return {
    NAME: "alert-dialog",
    PARTS: ["action", "cancel", "content", "description", "overlay", "portal", "title", "trigger"]
  }
}

function pc(s) {
  const {
    NAME: e,
    PARTS: i
  } = $o(), n = Di(e, i), r = lc({
    ...os(s),
    role: "alertdialog",
    forceVisible: !0
  }), o = {
    ...r,
    getAttrs: n,
    updateOption: Si(r.options)
  };
  return ss(e, o), {
    ...o,
    updateOption: Si(o.options),
    getAttrs: n
  }
}

function li() {
  const {
    NAME: s
  } = $o();
  return oi(s)
}
const bc = s => ({
    ids: s & 1
  }),
  vr = s => ({
    ids: s[0]
  });

function _c(s) {
  let e;
  const i = s[12].default,
    n = $(i, s, s[11], vr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, [o]) {
      n && n.p && (!e || o & 2049) && ee(n, i, r, r[11], e ? ie(i, r[11], o, bc) : te(r[11]), vr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function vc(s, e, i) {
  let n, {
      $$slots: r = {},
      $$scope: o
    } = e,
    {
      preventScroll: a = void 0
    } = e,
    {
      closeOnEscape: c = void 0
    } = e,
    {
      closeOnOutsideClick: l = !1
    } = e,
    {
      portal: u = void 0
    } = e,
    {
      open: f = void 0
    } = e,
    {
      onOpenChange: h = void 0
    } = e,
    {
      openFocus: d = void 0
    } = e,
    {
      closeFocus: m = void 0
    } = e,
    {
      onOutsideClick: g = void 0
    } = e;
  const {
    states: {
      open: p
    },
    updateOption: _,
    ids: A
  } = pc({
    closeOnEscape: c,
    preventScroll: a,
    closeOnOutsideClick: l,
    portal: u,
    forceVisible: !0,
    defaultOpen: f,
    openFocus: d,
    closeFocus: m,
    onOutsideClick: g,
    onOpenChange: ({
      next: y
    }) => (f !== y && (h == null || h(y), i(2, f = y)), y)
  }), w = Zi([A.content, A.description, A.title], ([y, E, z]) => ({
    content: y,
    description: E,
    title: z
  }));
  return Re(s, w, y => i(0, n = y)), s.$$set = y => {
    "preventScroll" in y && i(3, a = y.preventScroll), "closeOnEscape" in y && i(4, c = y.closeOnEscape), "closeOnOutsideClick" in y && i(5, l = y.closeOnOutsideClick), "portal" in y && i(6, u = y.portal), "open" in y && i(2, f = y.open), "onOpenChange" in y && i(7, h = y.onOpenChange), "openFocus" in y && i(8, d = y.openFocus), "closeFocus" in y && i(9, m = y.closeFocus), "onOutsideClick" in y && i(10, g = y.onOutsideClick), "$$scope" in y && i(11, o = y.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 4 && f !== void 0 && p.set(f), s.$$.dirty & 8 && _("preventScroll", a), s.$$.dirty & 16 && _("closeOnEscape", c), s.$$.dirty & 32 && _("closeOnOutsideClick", l), s.$$.dirty & 64 && _("portal", u), s.$$.dirty & 256 && _("openFocus", d), s.$$.dirty & 512 && _("closeFocus", m), s.$$.dirty & 1024 && _("onOutsideClick", g)
  }, [n, w, f, a, c, l, u, h, d, m, g, o, r]
}
class Ac extends fe {
  constructor(e) {
    super(), he(this, e, vc, _c, ae, {
      preventScroll: 3,
      closeOnEscape: 4,
      closeOnOutsideClick: 5,
      portal: 6,
      open: 2,
      onOpenChange: 7,
      openFocus: 8,
      closeFocus: 9,
      onOutsideClick: 10
    })
  }
}
const wc = s => ({
    builder: s & 8
  }),
  Ar = s => ({
    builder: s[3]
  }),
  yc = s => ({
    builder: s & 8
  }),
  wr = s => ({
    builder: s[3]
  });

function Ec(s) {
  let e = s[1],
    i, n, r = s[1] && pn(s);
  return {
    c() {
      r && r.c(), i = K()
    },
    l(o) {
      r && r.l(o), i = K()
    },
    m(o, a) {
      r && r.m(o, a), O(o, i, a), n = !0
    },
    p(o, a) {
      o[1] ? e ? ae(e, o[1]) ? (r.d(1), r = pn(o), e = o[1], r.c(), r.m(i.parentNode, i)) : r.p(o, a) : (r = pn(o), e = o[1], r.c(), r.m(i.parentNode, i)) : e && (r.d(1), r = null, e = o[1])
    },
    i(o) {
      n || (T(r, o), n = !0)
    },
    o(o) {
      x(r, o), n = !1
    },
    d(o) {
      o && C(i), r && r.d(o)
    }
  }
}

function kc(s) {
  let e;
  const i = s[9].default,
    n = $(i, s, s[8], wr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 264) && ee(n, i, r, r[8], e ? ie(i, r[8], o, yc) : te(r[8]), wr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function pn(s) {
  let e, i, n, r;
  const o = s[9].default,
    a = $(o, s, s[8], Ar);
  let c = [s[3], s[5]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q(s[1]), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, (s[1] || "null").toUpperCase(), {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      Ts(s[1])(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[10](e), i = !0, n || (r = De(s[3].action(e)), n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 264) && ee(a, o, u, u[8], i ? ie(o, u[8], f, wc) : te(u[8]), Ar), Ts(u[1])(e, l = se(c, [f & 8 && u[3], f & 32 && u[5]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[10](null), n = !1, r()
    }
  }
}

function Tc(s) {
  let e, i, n, r;
  const o = [kc, Ec],
    a = [];

  function c(l, u) {
    return l[2] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function xc(s, e, i) {
  let n;
  const r = ["level", "asChild", "id", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      level: u = "h2"
    } = e,
    {
      asChild: f = !1
    } = e,
    {
      id: h = void 0
    } = e,
    {
      el: d = void 0
    } = e;
  const {
    elements: {
      title: m
    },
    ids: g,
    getAttrs: p
  } = li();
  Re(s, m, w => i(7, a = w));
  const _ = p("title");

  function A(w) {
    ke[w ? "unshift" : "push"](() => {
      d = w, i(0, d)
    })
  }
  return s.$$set = w => {
    e = P(P({}, e), ge(w)), i(5, o = L(e, r)), "level" in w && i(1, u = w.level), "asChild" in w && i(2, f = w.asChild), "id" in w && i(6, h = w.id), "el" in w && i(0, d = w.el), "$$scope" in w && i(8, l = w.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 64 && h && g.title.set(h), s.$$.dirty & 128 && i(3, n = a), s.$$.dirty & 8 && Object.assign(n, _)
  }, [d, u, f, n, m, o, h, a, l, c, A]
}
let Rc = class extends fe {
  constructor(e) {
    super(), he(this, e, xc, Tc, ae, {
      level: 1,
      asChild: 2,
      id: 6,
      el: 0
    })
  }
};
const Cc = s => ({
    builder: s & 4
  }),
  yr = s => ({
    builder: s[2]
  }),
  Sc = s => ({
    builder: s & 4
  }),
  Er = s => ({
    builder: s[2]
  });

function Pc(s) {
  let e, i, n, r;
  const o = s[8].default,
    a = $(o, s, s[7], yr);
  let c = [s[2], {
      type: "button"
    }, s[5]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("button"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "BUTTON", {
        type: !0
      });
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), e.autofocus && e.focus(), s[9](e), i = !0, n || (r = [De(s[2].action(e)), B(e, "m-click", s[4]), B(e, "m-keydown", s[4])], n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 132) && ee(a, o, u, u[7], i ? ie(o, u[7], f, Cc) : te(u[7]), yr), j(e, l = se(c, [f & 4 && u[2], {
        type: "button"
      }, f & 32 && u[5]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[9](null), n = !1, Ze(r)
    }
  }
}

function Mc(s) {
  let e;
  const i = s[8].default,
    n = $(i, s, s[7], Er);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 132) && ee(n, i, r, r[7], e ? ie(i, r[7], o, Sc) : te(r[7]), Er)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Dc(s) {
  let e, i, n, r;
  const o = [Mc, Pc],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Fc(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      el: f = void 0
    } = e;
  const {
    elements: {
      close: h
    },
    getAttrs: d
  } = li();
  Re(s, h, _ => i(6, a = _));
  const m = ai(),
    g = d("action");

  function p(_) {
    ke[_ ? "unshift" : "push"](() => {
      f = _, i(0, f)
    })
  }
  return s.$$set = _ => {
    e = P(P({}, e), ge(_)), i(5, o = L(e, r)), "asChild" in _ && i(1, u = _.asChild), "el" in _ && i(0, f = _.el), "$$scope" in _ && i(7, l = _.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 64 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, g)
  }, [f, u, n, h, m, o, a, l, c, p]
}
let Uc = class extends fe {
  constructor(e) {
    super(), he(this, e, Fc, Dc, ae, {
      asChild: 1,
      el: 0
    })
  }
};
const zc = s => ({
    builder: s & 4
  }),
  kr = s => ({
    builder: s[2]
  }),
  Ic = s => ({
    builder: s & 4
  }),
  Tr = s => ({
    builder: s[2]
  });

function Nc(s) {
  let e, i, n, r;
  const o = s[8].default,
    a = $(o, s, s[7], kr);
  let c = [s[2], {
      type: "button"
    }, s[5]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("button"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "BUTTON", {
        type: !0
      });
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), e.autofocus && e.focus(), s[9](e), i = !0, n || (r = [De(s[2].action(e)), B(e, "m-click", s[4]), B(e, "m-keydown", s[4])], n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 132) && ee(a, o, u, u[7], i ? ie(o, u[7], f, zc) : te(u[7]), kr), j(e, l = se(c, [f & 4 && u[2], {
        type: "button"
      }, f & 32 && u[5]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[9](null), n = !1, Ze(r)
    }
  }
}

function Oc(s) {
  let e;
  const i = s[8].default,
    n = $(i, s, s[7], Tr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 132) && ee(n, i, r, r[7], e ? ie(i, r[7], o, Ic) : te(r[7]), Tr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Bc(s) {
  let e, i, n, r;
  const o = [Oc, Nc],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Lc(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      el: f = void 0
    } = e;
  const {
    elements: {
      close: h
    },
    getAttrs: d
  } = li();
  Re(s, h, _ => i(6, a = _));
  const m = ai(),
    g = d("cancel");

  function p(_) {
    ke[_ ? "unshift" : "push"](() => {
      f = _, i(0, f)
    })
  }
  return s.$$set = _ => {
    e = P(P({}, e), ge(_)), i(5, o = L(e, r)), "asChild" in _ && i(1, u = _.asChild), "el" in _ && i(0, f = _.el), "$$scope" in _ && i(7, l = _.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 64 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, g)
  }, [f, u, n, h, m, o, a, l, c, p]
}
let Gc = class extends fe {
  constructor(e) {
    super(), he(this, e, Lc, Bc, ae, {
      asChild: 1,
      el: 0
    })
  }
};
const Vc = s => ({
    builder: s & 4
  }),
  xr = s => ({
    builder: s[2]
  }),
  Hc = s => ({
    builder: s & 4
  }),
  Rr = s => ({
    builder: s[2]
  });

function Xc(s) {
  let e, i, n, r;
  const o = s[7].default,
    a = $(o, s, s[6], xr);
  let c = [s[2], s[4]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("div"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "DIV", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[8](e), i = !0, n || (r = De(s[2].action(e)), n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 68) && ee(a, o, u, u[6], i ? ie(o, u[6], f, Vc) : te(u[6]), xr), j(e, l = se(c, [f & 4 && u[2], f & 16 && u[4]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[8](null), n = !1, r()
    }
  }
}

function Wc(s) {
  let e;
  const i = s[7].default,
    n = $(i, s, s[6], Rr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 68) && ee(n, i, r, r[6], e ? ie(i, r[6], o, Hc) : te(r[6]), Rr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function jc(s) {
  let e, i, n, r;
  const o = [Wc, Xc],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Yc(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      el: f = void 0
    } = e;
  const {
    elements: {
      portalled: h
    },
    getAttrs: d
  } = li();
  Re(s, h, p => i(5, a = p));
  const m = d("portal");

  function g(p) {
    ke[p ? "unshift" : "push"](() => {
      f = p, i(0, f)
    })
  }
  return s.$$set = p => {
    e = P(P({}, e), ge(p)), i(4, o = L(e, r)), "asChild" in p && i(1, u = p.asChild), "el" in p && i(0, f = p.el), "$$scope" in p && i(6, l = p.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 32 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, m)
  }, [f, u, n, h, o, a, l, c, g]
}
let qc = class extends fe {
  constructor(e) {
    super(), he(this, e, Yc, jc, ae, {
      asChild: 1,
      el: 0
    })
  }
};
const Qc = s => ({
    builder: s[0] & 256
  }),
  Cr = s => ({
    builder: s[8]
  }),
  Kc = s => ({
    builder: s[0] & 256
  }),
  Sr = s => ({
    builder: s[8]
  }),
  Zc = s => ({
    builder: s[0] & 256
  }),
  Pr = s => ({
    builder: s[8]
  }),
  Jc = s => ({
    builder: s[0] & 256
  }),
  Mr = s => ({
    builder: s[8]
  }),
  $c = s => ({
    builder: s[0] & 256
  }),
  Dr = s => ({
    builder: s[8]
  }),
  eu = s => ({
    builder: s[0] & 256
  }),
  Fr = s => ({
    builder: s[8]
  });

function tu(s) {
  let e, i, n, r;
  const o = s[16].default,
    a = $(o, s, s[15], Cr);
  let c = [s[8], s[12]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("div"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "DIV", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[56](e), i = !0, n || (r = [De(s[8].action(e)), B(e, "pointerdown", s[45]), B(e, "pointermove", s[46]), B(e, "pointerup", s[47]), B(e, "touchcancel", s[48]), B(e, "touchend", s[49]), B(e, "touchmove", s[50], {
        passive: !1
      }), B(e, "touchstart", s[51], {
        passive: !1
      })], n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f[0] & 33024) && ee(a, o, u, u[15], i ? ie(o, u[15], f, Qc) : te(u[15]), Cr), j(e, l = se(c, [f[0] & 256 && u[8], f[0] & 4096 && u[12]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[56](null), n = !1, Ze(r)
    }
  }
}

function iu(s) {
  let e, i, n, r, o;
  const a = s[16].default,
    c = $(a, s, s[15], Sr);
  let l = [s[8], s[12]],
    u = {};
  for (let f = 0; f < l.length; f += 1) u = P(u, l[f]);
  return {
    c() {
      e = q("div"), c && c.c(), this.h()
    },
    l(f) {
      e = Q(f, "DIV", {});
      var h = W(e);
      c && c.l(h), h.forEach(C), this.h()
    },
    h() {
      j(e, u)
    },
    m(f, h) {
      O(f, e, h), c && c.m(e, null), s[55](e), n = !0, r || (o = [De(s[8].action(e)), B(e, "pointerdown", s[38]), B(e, "pointermove", s[39]), B(e, "pointerup", s[40]), B(e, "touchcancel", s[41]), B(e, "touchend", s[42]), B(e, "touchmove", s[43], {
        passive: !1
      }), B(e, "touchstart", s[44], {
        passive: !1
      })], r = !0)
    },
    p(f, h) {
      s = f, c && c.p && (!n || h[0] & 33024) && ee(c, a, s, s[15], n ? ie(a, s[15], h, Kc) : te(s[15]), Sr), j(e, u = se(l, [h[0] & 256 && s[8], h[0] & 4096 && s[12]]))
    },
    i(f) {
      n || (T(c, f), i && i.end(1), n = !0)
    },
    o(f) {
      x(c, f), f && (i = sn(e, s[5], s[6])), n = !1
    },
    d(f) {
      f && C(e), c && c.d(f), s[55](null), f && i && i.end(), r = !1, Ze(o)
    }
  }
}

function su(s) {
  let e, i, n, r, o;
  const a = s[16].default,
    c = $(a, s, s[15], Pr);
  let l = [s[8], s[12]],
    u = {};
  for (let f = 0; f < l.length; f += 1) u = P(u, l[f]);
  return {
    c() {
      e = q("div"), c && c.c(), this.h()
    },
    l(f) {
      e = Q(f, "DIV", {});
      var h = W(e);
      c && c.l(h), h.forEach(C), this.h()
    },
    h() {
      j(e, u)
    },
    m(f, h) {
      O(f, e, h), c && c.m(e, null), s[54](e), n = !0, r || (o = [De(s[8].action(e)), B(e, "pointerdown", s[31]), B(e, "pointermove", s[32]), B(e, "pointerup", s[33]), B(e, "touchcancel", s[34]), B(e, "touchend", s[35]), B(e, "touchmove", s[36], {
        passive: !1
      }), B(e, "touchstart", s[37], {
        passive: !1
      })], r = !0)
    },
    p(f, h) {
      s = f, c && c.p && (!n || h[0] & 33024) && ee(c, a, s, s[15], n ? ie(a, s[15], h, Zc) : te(s[15]), Pr), j(e, u = se(l, [h[0] & 256 && s[8], h[0] & 4096 && s[12]]))
    },
    i(f) {
      n || (T(c, f), f && (i || Mi(() => {
        i = nn(e, s[3], s[4]), i.start()
      })), n = !0)
    },
    o(f) {
      x(c, f), n = !1
    },
    d(f) {
      f && C(e), c && c.d(f), s[54](null), r = !1, Ze(o)
    }
  }
}

function nu(s) {
  let e, i, n, r, o, a;
  const c = s[16].default,
    l = $(c, s, s[15], Mr);
  let u = [s[8], s[12]],
    f = {};
  for (let h = 0; h < u.length; h += 1) f = P(f, u[h]);
  return {
    c() {
      e = q("div"), l && l.c(), this.h()
    },
    l(h) {
      e = Q(h, "DIV", {});
      var d = W(e);
      l && l.l(d), d.forEach(C), this.h()
    },
    h() {
      j(e, f)
    },
    m(h, d) {
      O(h, e, d), l && l.m(e, null), s[53](e), r = !0, o || (a = [De(s[8].action(e)), B(e, "pointerdown", s[24]), B(e, "pointermove", s[25]), B(e, "pointerup", s[26]), B(e, "touchcancel", s[27]), B(e, "touchend", s[28]), B(e, "touchmove", s[29], {
        passive: !1
      }), B(e, "touchstart", s[30], {
        passive: !1
      })], o = !0)
    },
    p(h, d) {
      s = h, l && l.p && (!r || d[0] & 33024) && ee(l, c, s, s[15], r ? ie(c, s[15], d, Jc) : te(s[15]), Mr), j(e, f = se(u, [d[0] & 256 && s[8], d[0] & 4096 && s[12]]))
    },
    i(h) {
      r || (T(l, h), h && Mi(() => {
        r && (n && n.end(1), i = nn(e, s[3], s[4]), i.start())
      }), r = !0)
    },
    o(h) {
      x(l, h), i && i.invalidate(), h && (n = sn(e, s[5], s[6])), r = !1
    },
    d(h) {
      h && C(e), l && l.d(h), s[53](null), h && n && n.end(), o = !1, Ze(a)
    }
  }
}

function ru(s) {
  let e, i, n, r, o;
  const a = s[16].default,
    c = $(a, s, s[15], Dr);
  let l = [s[8], s[12]],
    u = {};
  for (let f = 0; f < l.length; f += 1) u = P(u, l[f]);
  return {
    c() {
      e = q("div"), c && c.c(), this.h()
    },
    l(f) {
      e = Q(f, "DIV", {});
      var h = W(e);
      c && c.l(h), h.forEach(C), this.h()
    },
    h() {
      j(e, u)
    },
    m(f, h) {
      O(f, e, h), c && c.m(e, null), s[52](e), n = !0, r || (o = [De(s[8].action(e)), B(e, "pointerdown", s[17]), B(e, "pointermove", s[18]), B(e, "pointerup", s[19]), B(e, "touchcancel", s[20]), B(e, "touchend", s[21]), B(e, "touchmove", s[22], {
        passive: !1
      }), B(e, "touchstart", s[23], {
        passive: !1
      })], r = !0)
    },
    p(f, h) {
      s = f, c && c.p && (!n || h[0] & 33024) && ee(c, a, s, s[15], n ? ie(a, s[15], h, $c) : te(s[15]), Dr), j(e, u = se(l, [h[0] & 256 && s[8], h[0] & 4096 && s[12]]))
    },
    i(f) {
      n || (T(c, f), f && Mi(() => {
        n && (i || (i = Cs(e, s[1], s[2], !0)), i.run(1))
      }), n = !0)
    },
    o(f) {
      x(c, f), f && (i || (i = Cs(e, s[1], s[2], !1)), i.run(0)), n = !1
    },
    d(f) {
      f && C(e), c && c.d(f), s[52](null), f && i && i.end(), r = !1, Ze(o)
    }
  }
}

function ou(s) {
  let e;
  const i = s[16].default,
    n = $(i, s, s[15], Fr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o[0] & 33024) && ee(n, i, r, r[15], e ? ie(i, r[15], o, eu) : te(r[15]), Fr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function au(s) {
  let e, i, n, r;
  const o = [ou, ru, nu, su, iu, tu],
    a = [];

  function c(l, u) {
    return l[7] && l[9] ? 0 : l[1] && l[9] ? 1 : l[3] && l[5] && l[9] ? 2 : l[3] && l[9] ? 3 : l[5] && l[9] ? 4 : l[9] ? 5 : -1
  }
  return ~(e = c(s)) && (i = a[e] = o[e](s)), {
    c() {
      i && i.c(), n = K()
    },
    l(l) {
      i && i.l(l), n = K()
    },
    m(l, u) {
      ~e && a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, u) {
      let f = e;
      e = c(l), e === f ? ~e && a[e].p(l, u) : (i && (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe()), ~e ? (i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n)) : i = null)
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), ~e && a[e].d(l)
    }
  }
}

function lu(s, e, i) {
  let n;
  const r = ["transition", "transitionConfig", "inTransition", "inTransitionConfig", "outTransition", "outTransitionConfig", "id", "asChild", "el"];
  let o = L(e, r),
    a, c, {
      $$slots: l = {},
      $$scope: u
    } = e,
    {
      transition: f = void 0
    } = e,
    {
      transitionConfig: h = void 0
    } = e,
    {
      inTransition: d = void 0
    } = e,
    {
      inTransitionConfig: m = void 0
    } = e,
    {
      outTransition: g = void 0
    } = e,
    {
      outTransitionConfig: p = void 0
    } = e,
    {
      id: _ = void 0
    } = e,
    {
      asChild: A = !1
    } = e,
    {
      el: w = void 0
    } = e;
  const {
    elements: {
      content: y
    },
    states: {
      open: E
    },
    ids: z,
    getAttrs: I
  } = li();
  Re(s, y, D => i(14, a = D)), Re(s, E, D => i(9, c = D));
  const R = I("content");

  function k(D) {
    G.call(this, s, D)
  }

  function U(D) {
    G.call(this, s, D)
  }

  function S(D) {
    G.call(this, s, D)
  }

  function v(D) {
    G.call(this, s, D)
  }

  function F(D) {
    G.call(this, s, D)
  }

  function M(D) {
    G.call(this, s, D)
  }

  function V(D) {
    G.call(this, s, D)
  }

  function H(D) {
    G.call(this, s, D)
  }

  function le(D) {
    G.call(this, s, D)
  }

  function pe(D) {
    G.call(this, s, D)
  }

  function ne(D) {
    G.call(this, s, D)
  }

  function oe(D) {
    G.call(this, s, D)
  }

  function Y(D) {
    G.call(this, s, D)
  }

  function de(D) {
    G.call(this, s, D)
  }

  function Ce(D) {
    G.call(this, s, D)
  }

  function He(D) {
    G.call(this, s, D)
  }

  function $e(D) {
    G.call(this, s, D)
  }

  function Ie(D) {
    G.call(this, s, D)
  }

  function ze(D) {
    G.call(this, s, D)
  }

  function We(D) {
    G.call(this, s, D)
  }

  function Ne(D) {
    G.call(this, s, D)
  }

  function dt(D) {
    G.call(this, s, D)
  }

  function at(D) {
    G.call(this, s, D)
  }

  function je(D) {
    G.call(this, s, D)
  }

  function Fe(D) {
    G.call(this, s, D)
  }

  function Se(D) {
    G.call(this, s, D)
  }

  function ce(D) {
    G.call(this, s, D)
  }

  function we(D) {
    G.call(this, s, D)
  }

  function et(D) {
    G.call(this, s, D)
  }

  function xt(D) {
    G.call(this, s, D)
  }

  function Zt(D) {
    G.call(this, s, D)
  }

  function Mt(D) {
    G.call(this, s, D)
  }

  function it(D) {
    G.call(this, s, D)
  }

  function Qe(D) {
    G.call(this, s, D)
  }

  function cs(D) {
    G.call(this, s, D)
  }

  function ui(D) {
    ke[D ? "unshift" : "push"](() => {
      w = D, i(0, w)
    })
  }

  function us(D) {
    ke[D ? "unshift" : "push"](() => {
      w = D, i(0, w)
    })
  }

  function fi(D) {
    ke[D ? "unshift" : "push"](() => {
      w = D, i(0, w)
    })
  }

  function fs(D) {
    ke[D ? "unshift" : "push"](() => {
      w = D, i(0, w)
    })
  }

  function hs(D) {
    ke[D ? "unshift" : "push"](() => {
      w = D, i(0, w)
    })
  }
  return s.$$set = D => {
    e = P(P({}, e), ge(D)), i(12, o = L(e, r)), "transition" in D && i(1, f = D.transition), "transitionConfig" in D && i(2, h = D.transitionConfig), "inTransition" in D && i(3, d = D.inTransition), "inTransitionConfig" in D && i(4, m = D.inTransitionConfig), "outTransition" in D && i(5, g = D.outTransition), "outTransitionConfig" in D && i(6, p = D.outTransitionConfig), "id" in D && i(13, _ = D.id), "asChild" in D && i(7, A = D.asChild), "el" in D && i(0, w = D.el), "$$scope" in D && i(15, u = D.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty[0] & 8192 && _ && z.content.set(_), s.$$.dirty[0] & 16384 && i(8, n = a), s.$$.dirty[0] & 256 && Object.assign(n, R)
  }, [w, f, h, d, m, g, p, A, n, c, y, E, o, _, a, u, l, k, U, S, v, F, M, V, H, le, pe, ne, oe, Y, de, Ce, He, $e, Ie, ze, We, Ne, dt, at, je, Fe, Se, ce, we, et, xt, Zt, Mt, it, Qe, cs, ui, us, fi, fs, hs]
}
let cu = class extends fe {
  constructor(e) {
    super(), he(this, e, lu, au, ae, {
      transition: 1,
      transitionConfig: 2,
      inTransition: 3,
      inTransitionConfig: 4,
      outTransition: 5,
      outTransitionConfig: 6,
      id: 13,
      asChild: 7,
      el: 0
    }, null, [-1, -1])
  }
};
const uu = s => ({
    builder: s & 256
  }),
  Ur = s => ({
    builder: s[8]
  });

function fu(s) {
  let e, i, n, r = [s[8], s[12]],
    o = {};
  for (let a = 0; a < r.length; a += 1) o = P(o, r[a]);
  return {
    c() {
      e = q("div"), this.h()
    },
    l(a) {
      e = Q(a, "DIV", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, o)
    },
    m(a, c) {
      O(a, e, c), s[20](e), i || (n = De(s[8].action(e)), i = !0)
    },
    p(a, c) {
      j(e, o = se(r, [c & 256 && a[8], c & 4096 && a[12]]))
    },
    i: Ge,
    o: Ge,
    d(a) {
      a && C(e), s[20](null), i = !1, n()
    }
  }
}

function hu(s) {
  let e, i, n, r, o, a = [s[8], s[12]],
    c = {};
  for (let l = 0; l < a.length; l += 1) c = P(c, a[l]);
  return {
    c() {
      e = q("div"), this.h()
    },
    l(l) {
      e = Q(l, "DIV", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, c)
    },
    m(l, u) {
      O(l, e, u), s[19](e), n = !0, r || (o = De(s[8].action(e)), r = !0)
    },
    p(l, u) {
      s = l, j(e, c = se(a, [u & 256 && s[8], u & 4096 && s[12]]))
    },
    i(l) {
      n || (i && i.end(1), n = !0)
    },
    o(l) {
      l && (i = sn(e, s[5], s[6])), n = !1
    },
    d(l) {
      l && C(e), s[19](null), l && i && i.end(), r = !1, o()
    }
  }
}

function du(s) {
  let e, i, n, r, o = [s[8], s[12]],
    a = {};
  for (let c = 0; c < o.length; c += 1) a = P(a, o[c]);
  return {
    c() {
      e = q("div"), this.h()
    },
    l(c) {
      e = Q(c, "DIV", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, a)
    },
    m(c, l) {
      O(c, e, l), s[18](e), n || (r = De(s[8].action(e)), n = !0)
    },
    p(c, l) {
      s = c, j(e, a = se(o, [l & 256 && s[8], l & 4096 && s[12]]))
    },
    i(c) {
      c && (i || Mi(() => {
        i = nn(e, s[3], s[4]), i.start()
      }))
    },
    o: Ge,
    d(c) {
      c && C(e), s[18](null), n = !1, r()
    }
  }
}

function mu(s) {
  let e, i, n, r, o, a, c = [s[8], s[12]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("div"), this.h()
    },
    l(u) {
      e = Q(u, "DIV", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), s[17](e), r = !0, o || (a = De(s[8].action(e)), o = !0)
    },
    p(u, f) {
      s = u, j(e, l = se(c, [f & 256 && s[8], f & 4096 && s[12]]))
    },
    i(u) {
      r || (u && Mi(() => {
        r && (n && n.end(1), i = nn(e, s[3], s[4]), i.start())
      }), r = !0)
    },
    o(u) {
      i && i.invalidate(), u && (n = sn(e, s[5], s[6])), r = !1
    },
    d(u) {
      u && C(e), s[17](null), u && n && n.end(), o = !1, a()
    }
  }
}

function gu(s) {
  let e, i, n, r, o, a = [s[8], s[12]],
    c = {};
  for (let l = 0; l < a.length; l += 1) c = P(c, a[l]);
  return {
    c() {
      e = q("div"), this.h()
    },
    l(l) {
      e = Q(l, "DIV", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, c)
    },
    m(l, u) {
      O(l, e, u), s[16](e), n = !0, r || (o = De(s[8].action(e)), r = !0)
    },
    p(l, u) {
      s = l, j(e, c = se(a, [u & 256 && s[8], u & 4096 && s[12]]))
    },
    i(l) {
      n || (l && Mi(() => {
        n && (i || (i = Cs(e, s[1], s[2], !0)), i.run(1))
      }), n = !0)
    },
    o(l) {
      l && (i || (i = Cs(e, s[1], s[2], !1)), i.run(0)), n = !1
    },
    d(l) {
      l && C(e), s[16](null), l && i && i.end(), r = !1, o()
    }
  }
}

function pu(s) {
  let e;
  const i = s[15].default,
    n = $(i, s, s[14], Ur);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 16640) && ee(n, i, r, r[14], e ? ie(i, r[14], o, uu) : te(r[14]), Ur)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function bu(s) {
  let e, i, n, r;
  const o = [pu, gu, mu, du, hu, fu],
    a = [];

  function c(l, u) {
    return l[7] && l[9] ? 0 : l[1] && l[9] ? 1 : l[3] && l[5] && l[9] ? 2 : l[3] && l[9] ? 3 : l[5] && l[9] ? 4 : l[9] ? 5 : -1
  }
  return ~(e = c(s)) && (i = a[e] = o[e](s)), {
    c() {
      i && i.c(), n = K()
    },
    l(l) {
      i && i.l(l), n = K()
    },
    m(l, u) {
      ~e && a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? ~e && a[e].p(l, u) : (i && (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe()), ~e ? (i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n)) : i = null)
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), ~e && a[e].d(l)
    }
  }
}

function _u(s, e, i) {
  let n;
  const r = ["transition", "transitionConfig", "inTransition", "inTransitionConfig", "outTransition", "outTransitionConfig", "asChild", "el"];
  let o = L(e, r),
    a, c, {
      $$slots: l = {},
      $$scope: u
    } = e,
    {
      transition: f = void 0
    } = e,
    {
      transitionConfig: h = void 0
    } = e,
    {
      inTransition: d = void 0
    } = e,
    {
      inTransitionConfig: m = void 0
    } = e,
    {
      outTransition: g = void 0
    } = e,
    {
      outTransitionConfig: p = void 0
    } = e,
    {
      asChild: _ = !1
    } = e,
    {
      el: A = void 0
    } = e;
  const {
    elements: {
      overlay: w
    },
    states: {
      open: y
    },
    getAttrs: E
  } = li();
  Re(s, w, v => i(13, a = v)), Re(s, y, v => i(9, c = v));
  const z = E("overlay");

  function I(v) {
    ke[v ? "unshift" : "push"](() => {
      A = v, i(0, A)
    })
  }

  function R(v) {
    ke[v ? "unshift" : "push"](() => {
      A = v, i(0, A)
    })
  }

  function k(v) {
    ke[v ? "unshift" : "push"](() => {
      A = v, i(0, A)
    })
  }

  function U(v) {
    ke[v ? "unshift" : "push"](() => {
      A = v, i(0, A)
    })
  }

  function S(v) {
    ke[v ? "unshift" : "push"](() => {
      A = v, i(0, A)
    })
  }
  return s.$$set = v => {
    e = P(P({}, e), ge(v)), i(12, o = L(e, r)), "transition" in v && i(1, f = v.transition), "transitionConfig" in v && i(2, h = v.transitionConfig), "inTransition" in v && i(3, d = v.inTransition), "inTransitionConfig" in v && i(4, m = v.inTransitionConfig), "outTransition" in v && i(5, g = v.outTransition), "outTransitionConfig" in v && i(6, p = v.outTransitionConfig), "asChild" in v && i(7, _ = v.asChild), "el" in v && i(0, A = v.el), "$$scope" in v && i(14, u = v.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 8192 && i(8, n = a), s.$$.dirty & 256 && Object.assign(n, z)
  }, [A, f, h, d, m, g, p, _, n, c, w, y, o, a, u, l, I, R, k, U, S]
}
let vu = class extends fe {
  constructor(e) {
    super(), he(this, e, _u, bu, ae, {
      transition: 1,
      transitionConfig: 2,
      inTransition: 3,
      inTransitionConfig: 4,
      outTransition: 5,
      outTransitionConfig: 6,
      asChild: 7,
      el: 0
    })
  }
};
const Au = s => ({
    builder: s & 4
  }),
  zr = s => ({
    builder: s[2]
  }),
  wu = s => ({
    builder: s & 4
  }),
  Ir = s => ({
    builder: s[2]
  });

function yu(s) {
  let e, i, n, r;
  const o = s[8].default,
    a = $(o, s, s[7], zr);
  let c = [s[2], s[4]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("div"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "DIV", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[9](e), i = !0, n || (r = De(s[2].action(e)), n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 132) && ee(a, o, u, u[7], i ? ie(o, u[7], f, Au) : te(u[7]), zr), j(e, l = se(c, [f & 4 && u[2], f & 16 && u[4]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[9](null), n = !1, r()
    }
  }
}

function Eu(s) {
  let e;
  const i = s[8].default,
    n = $(i, s, s[7], Ir);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 132) && ee(n, i, r, r[7], e ? ie(i, r[7], o, wu) : te(r[7]), Ir)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function ku(s) {
  let e, i, n, r;
  const o = [Eu, yu],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Tu(s, e, i) {
  let n;
  const r = ["asChild", "id", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      id: f = void 0
    } = e,
    {
      el: h = void 0
    } = e;
  const {
    elements: {
      description: d
    },
    ids: m,
    getAttrs: g
  } = li();
  Re(s, d, A => i(6, a = A));
  const p = g("description");

  function _(A) {
    ke[A ? "unshift" : "push"](() => {
      h = A, i(0, h)
    })
  }
  return s.$$set = A => {
    e = P(P({}, e), ge(A)), i(4, o = L(e, r)), "asChild" in A && i(1, u = A.asChild), "id" in A && i(5, f = A.id), "el" in A && i(0, h = A.el), "$$scope" in A && i(7, l = A.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 32 && f && m.description.set(f), s.$$.dirty & 64 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, p)
  }, [h, u, n, d, o, f, a, l, c, _]
}
let xu = class extends fe {
  constructor(e) {
    super(), he(this, e, Tu, ku, ae, {
      asChild: 1,
      id: 5,
      el: 0
    })
  }
};

function ea() {
  return {
    NAME: "checkbox",
    PARTS: ["root", "input", "indicator"]
  }
}

function Ru(s) {
  const {
    NAME: e,
    PARTS: i
  } = ea(), n = Di(e, i), r = {
    ...nc(os(s)),
    getAttrs: n
  };
  return ss(e, r), {
    ...r,
    updateOption: Si(r.options)
  }
}

function Cu() {
  const {
    NAME: s
  } = ea();
  return oi(s)
}
const Su = s => ({
    builder: s & 4
  }),
  Nr = s => ({
    builder: s[2]
  }),
  Pu = s => ({
    builder: s & 4
  }),
  Or = s => ({
    builder: s[2]
  });

function Mu(s) {
  let e, i, n, r;
  const o = s[15].default,
    a = $(o, s, s[14], Nr);
  let c = [s[2], {
      type: "button"
    }, s[5]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("button"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "BUTTON", {
        type: !0
      });
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), e.autofocus && e.focus(), s[16](e), i = !0, n || (r = [De(s[2].action(e)), B(e, "m-click", s[4]), B(e, "m-keydown", s[4])], n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 16388) && ee(a, o, u, u[14], i ? ie(o, u[14], f, Su) : te(u[14]), Nr), j(e, l = se(c, [f & 4 && u[2], {
        type: "button"
      }, f & 32 && u[5]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[16](null), n = !1, Ze(r)
    }
  }
}

function Du(s) {
  let e;
  const i = s[15].default,
    n = $(i, s, s[14], Or);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 16388) && ee(n, i, r, r[14], e ? ie(i, r[14], o, Pu) : te(r[14]), Or)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Fu(s) {
  let e, i, n, r;
  const o = [Du, Mu],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Uu(s, e, i) {
  let n, r;
  const o = ["checked", "disabled", "name", "required", "value", "onCheckedChange", "asChild", "el"];
  let a = L(e, o),
    c, {
      $$slots: l = {},
      $$scope: u
    } = e,
    {
      checked: f = !1
    } = e,
    {
      disabled: h = void 0
    } = e,
    {
      name: d = void 0
    } = e,
    {
      required: m = void 0
    } = e,
    {
      value: g = void 0
    } = e,
    {
      onCheckedChange: p = void 0
    } = e,
    {
      asChild: _ = !1
    } = e,
    {
      el: A = void 0
    } = e;
  const {
    elements: {
      root: w
    },
    states: {
      checked: y
    },
    updateOption: E,
    getAttrs: z
  } = Ru({
    defaultChecked: f,
    disabled: h,
    name: d,
    required: m,
    value: g,
    onCheckedChange: ({
      next: k
    }) => (f !== k && (p == null || p(k), i(6, f = k)), k)
  });
  Re(s, w, k => i(13, c = k));
  const I = ai();

  function R(k) {
    ke[k ? "unshift" : "push"](() => {
      A = k, i(0, A)
    })
  }
  return s.$$set = k => {
    e = P(P({}, e), ge(k)), i(5, a = L(e, o)), "checked" in k && i(6, f = k.checked), "disabled" in k && i(7, h = k.disabled), "name" in k && i(8, d = k.name), "required" in k && i(9, m = k.required), "value" in k && i(10, g = k.value), "onCheckedChange" in k && i(11, p = k.onCheckedChange), "asChild" in k && i(1, _ = k.asChild), "el" in k && i(0, A = k.el), "$$scope" in k && i(14, u = k.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 128 && i(12, n = {
      ...z("root"),
      disabled: h ? !0 : void 0
    }), s.$$.dirty & 64 && f !== void 0 && y.set(f), s.$$.dirty & 128 && E("disabled", h), s.$$.dirty & 256 && E("name", d), s.$$.dirty & 512 && E("required", m), s.$$.dirty & 1024 && E("value", g), s.$$.dirty & 8192 && i(2, r = c), s.$$.dirty & 4100 && Object.assign(r, n)
  }, [A, _, r, w, I, a, f, h, d, m, g, p, n, c, u, l, R]
}
let zu = class extends fe {
  constructor(e) {
    super(), he(this, e, Uu, Fu, ae, {
      checked: 6,
      disabled: 7,
      name: 8,
      required: 9,
      value: 10,
      onCheckedChange: 11,
      asChild: 1,
      el: 0
    })
  }
};
const Iu = s => ({
    attrs: s & 4,
    isChecked: s & 8,
    isIndeterminate: s & 16
  }),
  Br = s => ({
    attrs: s[2],
    isChecked: s[3],
    isIndeterminate: s[4]
  }),
  Nu = s => ({
    attrs: s & 4,
    isChecked: s & 8,
    isIndeterminate: s & 16
  }),
  Lr = s => ({
    attrs: s[2],
    isChecked: s[3],
    isIndeterminate: s[4]
  });

function Ou(s) {
  let e, i;
  const n = s[11].default,
    r = $(n, s, s[10], Br);
  let o = [s[8], s[2]],
    a = {};
  for (let c = 0; c < o.length; c += 1) a = P(a, o[c]);
  return {
    c() {
      e = q("div"), r && r.c(), this.h()
    },
    l(c) {
      e = Q(c, "DIV", {});
      var l = W(e);
      r && r.l(l), l.forEach(C), this.h()
    },
    h() {
      j(e, a)
    },
    m(c, l) {
      O(c, e, l), r && r.m(e, null), s[12](e), i = !0
    },
    p(c, l) {
      r && r.p && (!i || l & 1052) && ee(r, n, c, c[10], i ? ie(n, c[10], l, Iu) : te(c[10]), Br), j(e, a = se(o, [l & 256 && c[8], l & 4 && c[2]]))
    },
    i(c) {
      i || (T(r, c), i = !0)
    },
    o(c) {
      x(r, c), i = !1
    },
    d(c) {
      c && C(e), r && r.d(c), s[12](null)
    }
  }
}

function Bu(s) {
  let e;
  const i = s[11].default,
    n = $(i, s, s[10], Lr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 1052) && ee(n, i, r, r[10], e ? ie(i, r[10], o, Nu) : te(r[10]), Lr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Lu(s) {
  let e, i, n, r;
  const o = [Bu, Ou],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Gu(s) {
  return s === "indeterminate" ? "indeterminate" : s ? "checked" : "unchecked"
}

function Vu(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, c, l, {
      $$slots: u = {},
      $$scope: f
    } = e,
    {
      asChild: h = !1
    } = e,
    {
      el: d = void 0
    } = e;
  const {
    helpers: {
      isChecked: m,
      isIndeterminate: g
    },
    states: {
      checked: p
    },
    getAttrs: _
  } = Cu();
  Re(s, m, w => i(3, c = w)), Re(s, g, w => i(4, l = w)), Re(s, p, w => i(9, a = w));

  function A(w) {
    ke[w ? "unshift" : "push"](() => {
      d = w, i(0, d)
    })
  }
  return s.$$set = w => {
    e = P(P({}, e), ge(w)), i(8, o = L(e, r)), "asChild" in w && i(1, h = w.asChild), "el" in w && i(0, d = w.el), "$$scope" in w && i(10, f = w.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 512 && i(2, n = {
      ..._("indicator"),
      "data-state": Gu(a)
    })
  }, [d, h, n, c, l, m, g, p, o, a, f, u, A]
}
class Hu extends fe {
  constructor(e) {
    super(), he(this, e, Vu, Lu, ae, {
      asChild: 1,
      el: 0
    })
  }
}

function Xu() {
  const s = "label",
    i = Di(s, ["root"]);
  return {
    NAME: s,
    getAttrs: i
  }
}
const Wu = s => ({
    builder: s & 4
  }),
  Gr = s => ({
    builder: s[2]
  }),
  ju = s => ({
    builder: s & 4
  }),
  Vr = s => ({
    builder: s[2]
  });

function Yu(s) {
  let e, i, n, r;
  const o = s[8].default,
    a = $(o, s, s[7], Gr);
  let c = [s[2], s[5]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("label"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "LABEL", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[9](e), i = !0, n || (r = [De(s[2].action(e)), B(e, "m-mousedown", s[4])], n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 132) && ee(a, o, u, u[7], i ? ie(o, u[7], f, Wu) : te(u[7]), Gr), j(e, l = se(c, [f & 4 && u[2], f & 32 && u[5]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[9](null), n = !1, Ze(r)
    }
  }
}

function qu(s) {
  let e;
  const i = s[8].default,
    n = $(i, s, s[7], Vr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 132) && ee(n, i, r, r[7], e ? ie(i, r[7], o, ju) : te(r[7]), Vr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Qu(s) {
  let e, i, n, r;
  const o = [qu, Yu],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Ku(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      el: f = void 0
    } = e;
  const {
    elements: {
      root: h
    }
  } = rc();
  Re(s, h, _ => i(6, a = _));
  const d = ai(),
    {
      getAttrs: m
    } = Xu(),
    g = m("root");

  function p(_) {
    ke[_ ? "unshift" : "push"](() => {
      f = _, i(0, f)
    })
  }
  return s.$$set = _ => {
    e = P(P({}, e), ge(_)), i(5, o = L(e, r)), "asChild" in _ && i(1, u = _.asChild), "el" in _ && i(0, f = _.el), "$$scope" in _ && i(7, l = _.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 64 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, g)
  }, [f, u, n, h, d, o, a, l, c, p]
}
let Zu = class extends fe {
  constructor(e) {
    super(), he(this, e, Ku, Qu, ae, {
      asChild: 1,
      el: 0
    })
  }
};

function ta() {
  return {
    NAME: "slider",
    PARTS: ["root", "input", "range", "thumb", "tick"]
  }
}

function Ju(s) {
  const {
    NAME: e,
    PARTS: i
  } = ta(), n = Di(e, i), r = {
    ...uc(os(s)),
    getAttrs: n
  };
  return ss(e, r), {
    ...r,
    updateOption: Si(r.options)
  }
}

function er() {
  const {
    NAME: s
  } = ta();
  return oi(s)
}
const $u = s => ({
    builder: s & 4,
    ticks: s & 8,
    thumbs: s & 16
  }),
  Hr = s => ({
    builder: s[2],
    ticks: s[3],
    thumbs: s[4]
  }),
  ef = s => ({
    builder: s & 4,
    ticks: s & 8,
    thumbs: s & 16
  }),
  Xr = s => ({
    builder: s[2],
    ticks: s[3],
    thumbs: s[4]
  });

function tf(s) {
  let e, i, n, r;
  const o = s[19].default,
    a = $(o, s, s[18], Hr);
  let c = [s[2], s[8]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("span"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "SPAN", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[20](e), i = !0, n || (r = De(s[2].action(e)), n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 262172) && ee(a, o, u, u[18], i ? ie(o, u[18], f, $u) : te(u[18]), Hr), j(e, l = se(c, [f & 4 && u[2], f & 256 && u[8]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[20](null), n = !1, r()
    }
  }
}

function sf(s) {
  let e;
  const i = s[19].default,
    n = $(i, s, s[18], Xr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 262172) && ee(n, i, r, r[18], e ? ie(i, r[18], o, ef) : te(r[18]), Xr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function nf(s) {
  let e, i, n, r;
  const o = [sf, tf],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function rf(s, e, i) {
  let n;
  const r = ["disabled", "min", "max", "step", "orientation", "dir", "value", "onValueChange", "asChild", "el"];
  let o = L(e, r),
    a, c, l, {
      $$slots: u = {},
      $$scope: f
    } = e,
    {
      disabled: h = void 0
    } = e,
    {
      min: d = void 0
    } = e,
    {
      max: m = void 0
    } = e,
    {
      step: g = void 0
    } = e,
    {
      orientation: p = void 0
    } = e,
    {
      dir: _ = void 0
    } = e,
    {
      value: A = void 0
    } = e,
    {
      onValueChange: w = void 0
    } = e,
    {
      asChild: y = !1
    } = e,
    {
      el: E = void 0
    } = e;
  const {
    elements: {
      root: z,
      ticks: I,
      thumbs: R
    },
    states: {
      value: k
    },
    updateOption: U,
    getAttrs: S
  } = Ju({
    disabled: h,
    dir: _,
    min: d,
    max: m,
    step: g,
    orientation: p,
    defaultValue: A,
    onValueChange: ({
      next: M
    }) => (A !== M && (w == null || w(M), i(9, A = M)), M)
  });
  Re(s, z, M => i(17, a = M)), Re(s, I, M => i(3, c = M)), Re(s, R, M => i(4, l = M));
  const v = S("root");

  function F(M) {
    ke[M ? "unshift" : "push"](() => {
      E = M, i(0, E)
    })
  }
  return s.$$set = M => {
    e = P(P({}, e), ge(M)), i(8, o = L(e, r)), "disabled" in M && i(10, h = M.disabled), "min" in M && i(11, d = M.min), "max" in M && i(12, m = M.max), "step" in M && i(13, g = M.step), "orientation" in M && i(14, p = M.orientation), "dir" in M && i(15, _ = M.dir), "value" in M && i(9, A = M.value), "onValueChange" in M && i(16, w = M.onValueChange), "asChild" in M && i(1, y = M.asChild), "el" in M && i(0, E = M.el), "$$scope" in M && i(18, f = M.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 512 && A !== void 0 && k.set(A), s.$$.dirty & 1024 && U("disabled", h), s.$$.dirty & 2048 && U("min", d), s.$$.dirty & 4096 && U("max", m), s.$$.dirty & 8192 && U("step", g), s.$$.dirty & 16384 && U("orientation", p), s.$$.dirty & 32768 && U("dir", _), s.$$.dirty & 131072 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, v)
  }, [E, y, n, c, l, z, I, R, o, A, h, d, m, g, p, _, w, a, f, u, F]
}
let of = class extends fe {
  constructor(e) {
    super(), he(this, e, rf, nf, ae, {
      disabled: 10,
      min: 11,
      max: 12,
      step: 13,
      orientation: 14,
      dir: 15,
      value: 9,
      onValueChange: 16,
      asChild: 1,
      el: 0
    })
  }
};
const af = s => ({
    builder: s & 4
  }),
  Wr = s => ({
    builder: s[2]
  });

function lf(s) {
  let e, i, n, r = [s[2], s[4]],
    o = {};
  for (let a = 0; a < r.length; a += 1) o = P(o, r[a]);
  return {
    c() {
      e = q("span"), this.h()
    },
    l(a) {
      e = Q(a, "SPAN", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, o)
    },
    m(a, c) {
      O(a, e, c), s[8](e), i || (n = De(s[2].action(e)), i = !0)
    },
    p(a, c) {
      j(e, o = se(r, [c & 4 && a[2], c & 16 && a[4]]))
    },
    i: Ge,
    o: Ge,
    d(a) {
      a && C(e), s[8](null), i = !1, n()
    }
  }
}

function cf(s) {
  let e;
  const i = s[7].default,
    n = $(i, s, s[6], Wr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 68) && ee(n, i, r, r[6], e ? ie(i, r[6], o, af) : te(r[6]), Wr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function uf(s) {
  let e, i, n, r;
  const o = [cf, lf],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function ff(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      el: f = void 0
    } = e;
  const {
    elements: {
      range: h
    },
    getAttrs: d
  } = er();
  Re(s, h, p => i(5, a = p));
  const m = d("range");

  function g(p) {
    ke[p ? "unshift" : "push"](() => {
      f = p, i(0, f)
    })
  }
  return s.$$set = p => {
    e = P(P({}, e), ge(p)), i(4, o = L(e, r)), "asChild" in p && i(1, u = p.asChild), "el" in p && i(0, f = p.el), "$$scope" in p && i(6, l = p.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 32 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, m)
  }, [f, u, n, h, o, a, l, c, g]
}
class hf extends fe {
  constructor(e) {
    super(), he(this, e, ff, uf, ae, {
      asChild: 1,
      el: 0
    })
  }
}
const df = s => ({
    builder: s & 4
  }),
  jr = s => ({
    builder: s[2]
  });

function mf(s) {
  let e, i, n, r = [s[2], s[4]],
    o = {};
  for (let a = 0; a < r.length; a += 1) o = P(o, r[a]);
  return {
    c() {
      e = q("span"), this.h()
    },
    l(a) {
      e = Q(a, "SPAN", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, o)
    },
    m(a, c) {
      O(a, e, c), s[8](e), i || (n = [De(s[2].action(e)), B(e, "m-keydown", s[3])], i = !0)
    },
    p(a, c) {
      j(e, o = se(r, [c & 4 && a[2], c & 16 && a[4]]))
    },
    i: Ge,
    o: Ge,
    d(a) {
      a && C(e), s[8](null), i = !1, Ze(n)
    }
  }
}

function gf(s) {
  let e;
  const i = s[7].default,
    n = $(i, s, s[6], jr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 68) && ee(n, i, r, r[6], e ? ie(i, r[6], o, df) : te(r[6]), jr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function pf(s) {
  let e, i, n, r;
  const o = [gf, mf],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function bf(s, e, i) {
  let n;
  const r = ["asChild", "el", "thumb"];
  let o = L(e, r),
    {
      $$slots: a = {},
      $$scope: c
    } = e,
    {
      asChild: l = !1
    } = e,
    {
      el: u = void 0
    } = e,
    {
      thumb: f
    } = e;
  const {
    getAttrs: h
  } = er(), d = ai(), m = h("thumb");

  function g(p) {
    ke[p ? "unshift" : "push"](() => {
      u = p, i(0, u)
    })
  }
  return s.$$set = p => {
    e = P(P({}, e), ge(p)), i(4, o = L(e, r)), "asChild" in p && i(1, l = p.asChild), "el" in p && i(0, u = p.el), "thumb" in p && i(5, f = p.thumb), "$$scope" in p && i(6, c = p.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 32 && i(2, n = f), s.$$.dirty & 4 && Object.assign(n, m)
  }, [u, l, n, d, o, f, c, a, g]
}
class _f extends fe {
  constructor(e) {
    super(), he(this, e, bf, pf, ae, {
      asChild: 1,
      el: 0,
      thumb: 5
    })
  }
}
const vf = s => ({
    builder: s & 4
  }),
  Yr = s => ({
    builder: s[2]
  });

function Af(s) {
  let e, i, n, r = [s[2], s[3]],
    o = {};
  for (let a = 0; a < r.length; a += 1) o = P(o, r[a]);
  return {
    c() {
      e = q("span"), this.h()
    },
    l(a) {
      e = Q(a, "SPAN", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, o)
    },
    m(a, c) {
      O(a, e, c), s[7](e), i || (n = De(s[2].action(e)), i = !0)
    },
    p(a, c) {
      j(e, o = se(r, [c & 4 && a[2], c & 8 && a[3]]))
    },
    i: Ge,
    o: Ge,
    d(a) {
      a && C(e), s[7](null), i = !1, n()
    }
  }
}

function wf(s) {
  let e;
  const i = s[6].default,
    n = $(i, s, s[5], Yr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 36) && ee(n, i, r, r[5], e ? ie(i, r[5], o, vf) : te(r[5]), Yr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function yf(s) {
  let e, i, n, r;
  const o = [wf, Af],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Ef(s, e, i) {
  let n;
  const r = ["asChild", "el", "tick"];
  let o = L(e, r),
    {
      $$slots: a = {},
      $$scope: c
    } = e,
    {
      asChild: l = !1
    } = e,
    {
      el: u = void 0
    } = e,
    {
      tick: f
    } = e;
  const {
    getAttrs: h
  } = er(), d = h("tick");

  function m(g) {
    ke[g ? "unshift" : "push"](() => {
      u = g, i(0, u)
    })
  }
  return s.$$set = g => {
    e = P(P({}, e), ge(g)), i(3, o = L(e, r)), "asChild" in g && i(1, l = g.asChild), "el" in g && i(0, u = g.el), "tick" in g && i(4, f = g.tick), "$$scope" in g && i(5, c = g.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 16 && i(2, n = f), s.$$.dirty & 4 && Object.assign(n, d)
  }, [u, l, n, o, f, c, a, m]
}
class kf extends fe {
  constructor(e) {
    super(), he(this, e, Ef, yf, ae, {
      asChild: 1,
      el: 0,
      tick: 4
    })
  }
}

function ia() {
  return {
    NAME: "switch",
    PARTS: ["root", "input", "thumb"]
  }
}

function Tf(s) {
  const {
    NAME: e,
    PARTS: i
  } = ia(), n = Di(e, i), r = {
    ...hc(os(s)),
    getAttrs: n
  };
  return ss(e, r), {
    ...r,
    updateOption: Si(r.options)
  }
}

function sa() {
  const {
    NAME: s
  } = ia();
  return oi(s)
}

function xf(s) {
  let e, i, n, r = [s[2], {
      name: s[3]
    }, {
      disabled: s[4]
    }, {
      required: s[5]
    }, {
      value: s[1]
    }, s[11]],
    o = {};
  for (let a = 0; a < r.length; a += 1) o = P(o, r[a]);
  return {
    c() {
      e = q("input"), this.h()
    },
    l(a) {
      e = Q(a, "INPUT", {
        name: !0
      }), this.h()
    },
    h() {
      j(e, o)
    },
    m(a, c) {
      O(a, e, c), "value" in o && (e.value = o.value), e.autofocus && e.focus(), s[13](e), i || (n = De(s[2].action(e)), i = !0)
    },
    p(a, [c]) {
      j(e, o = se(r, [c & 4 && a[2], c & 8 && {
        name: a[3]
      }, c & 16 && {
        disabled: a[4]
      }, c & 32 && {
        required: a[5]
      }, c & 2 && e.value !== a[1] && {
        value: a[1]
      }, c & 2048 && a[11]])), "value" in o && (e.value = o.value)
    },
    i: Ge,
    o: Ge,
    d(a) {
      a && C(e), s[13](null), i = !1, n()
    }
  }
}

function Rf(s, e, i) {
  let n;
  const r = ["el"];
  let o = L(e, r),
    a, c, l, u, f, {
      el: h = void 0
    } = e;
  const {
    elements: {
      input: d
    },
    options: {
      value: m,
      name: g,
      disabled: p,
      required: _
    }
  } = sa();
  Re(s, d, w => i(2, c = w)), Re(s, m, w => i(12, a = w)), Re(s, g, w => i(3, l = w)), Re(s, p, w => i(4, u = w)), Re(s, _, w => i(5, f = w));

  function A(w) {
    ke[w ? "unshift" : "push"](() => {
      h = w, i(0, h)
    })
  }
  return s.$$set = w => {
    e = P(P({}, e), ge(w)), i(11, o = L(e, r)), "el" in w && i(0, h = w.el)
  }, s.$$.update = () => {
    s.$$.dirty & 4096 && i(1, n = a === void 0 || a === "" ? "on" : a)
  }, [h, n, c, l, u, f, d, m, g, p, _, o, a, A]
}
class Cf extends fe {
  constructor(e) {
    super(), he(this, e, Rf, xf, ae, {
      el: 0
    })
  }
}
const Sf = s => ({
    builder: s & 16
  }),
  qr = s => ({
    builder: s[4]
  }),
  Pf = s => ({
    builder: s & 16
  }),
  Qr = s => ({
    builder: s[4]
  });

function Mf(s) {
  let e, i, n, r;
  const o = s[17].default,
    a = $(o, s, s[16], qr);
  let c = [s[4], {
      type: "button"
    }, s[7]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("button"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "BUTTON", {
        type: !0
      });
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), e.autofocus && e.focus(), s[18](e), i = !0, n || (r = [De(s[4].action(e)), B(e, "m-click", s[6]), B(e, "m-keydown", s[6])], n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 65552) && ee(a, o, u, u[16], i ? ie(o, u[16], f, Sf) : te(u[16]), qr), j(e, l = se(c, [f & 16 && u[4], {
        type: "button"
      }, f & 128 && u[7]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[18](null), n = !1, Ze(r)
    }
  }
}

function Df(s) {
  let e;
  const i = s[17].default,
    n = $(i, s, s[16], Qr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 65552) && ee(n, i, r, r[16], e ? ie(i, r[16], o, Pf) : te(r[16]), Qr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Kr(s) {
  let e, i;
  const n = [s[3]];
  let r = {};
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new Cf({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, a) {
      const c = a & 8 ? se(n, [Je(o[3])]) : {};
      e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function Ff(s) {
  let e, i, n, r, o;
  const a = [Df, Mf],
    c = [];

  function l(f, h) {
    return f[2] ? 0 : 1
  }
  e = l(s), i = c[e] = a[e](s);
  let u = s[1] && Kr(s);
  return {
    c() {
      i.c(), n = Be(), u && u.c(), r = K()
    },
    l(f) {
      i.l(f), n = Le(f), u && u.l(f), r = K()
    },
    m(f, h) {
      c[e].m(f, h), O(f, n, h), u && u.m(f, h), O(f, r, h), o = !0
    },
    p(f, [h]) {
      let d = e;
      e = l(f), e === d ? c[e].p(f, h) : (Te(), x(c[d], 1, 1, () => {
        c[d] = null
      }), xe(), i = c[e], i ? i.p(f, h) : (i = c[e] = a[e](f), i.c()), T(i, 1), i.m(n.parentNode, n)), f[1] ? u ? (u.p(f, h), h & 2 && T(u, 1)) : (u = Kr(f), u.c(), T(u, 1), u.m(r.parentNode, r)) : u && (Te(), x(u, 1, 1, () => {
        u = null
      }), xe())
    },
    i(f) {
      o || (T(i), T(u), o = !0)
    },
    o(f) {
      x(i), x(u), o = !1
    },
    d(f) {
      f && (C(n), C(r)), c[e].d(f), u && u.d(f)
    }
  }
}

function Uf(s, e, i) {
  let n, r;
  const o = ["checked", "onCheckedChange", "disabled", "name", "value", "includeInput", "required", "asChild", "inputAttrs", "el"];
  let a = L(e, o),
    c, {
      $$slots: l = {},
      $$scope: u
    } = e,
    {
      checked: f = void 0
    } = e,
    {
      onCheckedChange: h = void 0
    } = e,
    {
      disabled: d = void 0
    } = e,
    {
      name: m = void 0
    } = e,
    {
      value: g = void 0
    } = e,
    {
      includeInput: p = !0
    } = e,
    {
      required: _ = void 0
    } = e,
    {
      asChild: A = !1
    } = e,
    {
      inputAttrs: w = void 0
    } = e,
    {
      el: y = void 0
    } = e;
  const {
    elements: {
      root: E
    },
    states: {
      checked: z
    },
    updateOption: I,
    getAttrs: R
  } = Tf({
    disabled: d,
    name: m,
    value: g,
    required: _,
    defaultChecked: f,
    onCheckedChange: ({
      next: S
    }) => (f !== S && (h == null || h(S), i(8, f = S)), S)
  });
  Re(s, E, S => i(15, c = S));
  const k = ai();

  function U(S) {
    ke[S ? "unshift" : "push"](() => {
      y = S, i(0, y)
    })
  }
  return s.$$set = S => {
    e = P(P({}, e), ge(S)), i(7, a = L(e, o)), "checked" in S && i(8, f = S.checked), "onCheckedChange" in S && i(9, h = S.onCheckedChange), "disabled" in S && i(10, d = S.disabled), "name" in S && i(11, m = S.name), "value" in S && i(12, g = S.value), "includeInput" in S && i(1, p = S.includeInput), "required" in S && i(13, _ = S.required), "asChild" in S && i(2, A = S.asChild), "inputAttrs" in S && i(3, w = S.inputAttrs), "el" in S && i(0, y = S.el), "$$scope" in S && i(16, u = S.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 256 && f !== void 0 && z.set(f), s.$$.dirty & 1024 && I("disabled", d), s.$$.dirty & 2048 && I("name", m), s.$$.dirty & 4096 && I("value", g), s.$$.dirty & 8192 && I("required", _), s.$$.dirty & 32768 && i(4, n = c), s.$$.dirty & 256 && i(14, r = {
      ...R("root"),
      "data-checked": f ? "" : void 0
    }), s.$$.dirty & 16400 && Object.assign(n, r)
  }, [y, p, A, w, n, E, k, a, f, h, d, m, g, _, r, c, u, l, U]
}
let zf = class extends fe {
  constructor(e) {
    super(), he(this, e, Uf, Ff, ae, {
      checked: 8,
      onCheckedChange: 9,
      disabled: 10,
      name: 11,
      value: 12,
      includeInput: 1,
      required: 13,
      asChild: 2,
      inputAttrs: 3,
      el: 0
    })
  }
};
const If = s => ({
    attrs: s & 8,
    checked: s & 4
  }),
  Zr = s => ({
    attrs: s[3],
    checked: s[2]
  });

function Nf(s) {
  let e, i = [s[5], s[3]],
    n = {};
  for (let r = 0; r < i.length; r += 1) n = P(n, i[r]);
  return {
    c() {
      e = q("span"), this.h()
    },
    l(r) {
      e = Q(r, "SPAN", {}), W(e).forEach(C), this.h()
    },
    h() {
      j(e, n)
    },
    m(r, o) {
      O(r, e, o), s[8](e)
    },
    p(r, o) {
      j(e, n = se(i, [o & 32 && r[5], o & 8 && r[3]]))
    },
    i: Ge,
    o: Ge,
    d(r) {
      r && C(e), s[8](null)
    }
  }
}

function Of(s) {
  let e;
  const i = s[7].default,
    n = $(i, s, s[6], Zr);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 76) && ee(n, i, r, r[6], e ? ie(i, r[6], o, If) : te(r[6]), Zr)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Bf(s) {
  let e, i, n, r;
  const o = [Of, Nf],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function Lf(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      el: f = void 0
    } = e;
  const {
    states: {
      checked: h
    },
    getAttrs: d
  } = sa();
  Re(s, h, g => i(2, a = g));

  function m(g) {
    ke[g ? "unshift" : "push"](() => {
      f = g, i(0, f)
    })
  }
  return s.$$set = g => {
    e = P(P({}, e), ge(g)), i(5, o = L(e, r)), "asChild" in g && i(1, u = g.asChild), "el" in g && i(0, f = g.el), "$$scope" in g && i(6, l = g.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 4 && i(3, n = {
      ...d("thumb"),
      "data-state": a ? "checked" : "unchecked",
      "data-checked": a ? "" : void 0
    })
  }, [f, u, a, n, h, o, l, c, m]
}
class Gf extends fe {
  constructor(e) {
    super(), he(this, e, Lf, Bf, ae, {
      asChild: 1,
      el: 0
    })
  }
}

function na() {
  return {
    NAME: "tabs",
    PARTS: ["root", "content", "list", "trigger"]
  }
}

function Vf(s) {
  const {
    NAME: e,
    PARTS: i
  } = na(), n = Di(e, i), r = {
    ...gc(os(s)),
    getAttrs: n
  };
  return ss(e, r), {
    ...r,
    updateOption: Si(r.options)
  }
}

function tr() {
  const {
    NAME: s
  } = na();
  return oi(s)
}
const Hf = s => ({
    builder: s & 4,
    value: s & 8
  }),
  Jr = s => ({
    builder: s[2],
    value: s[3]
  }),
  Xf = s => ({
    builder: s & 4,
    value: s & 8
  }),
  $r = s => ({
    builder: s[2],
    value: s[3]
  });

function Wf(s) {
  let e, i, n, r;
  const o = s[15].default,
    a = $(o, s, s[14], Jr);
  let c = [s[2], s[6]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("div"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "DIV", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[16](e), i = !0, n || (r = De(s[2].action(e)), n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 16396) && ee(a, o, u, u[14], i ? ie(o, u[14], f, Hf) : te(u[14]), Jr), j(e, l = se(c, [f & 4 && u[2], f & 64 && u[6]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[16](null), n = !1, r()
    }
  }
}

function jf(s) {
  let e;
  const i = s[15].default,
    n = $(i, s, s[14], $r);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 16396) && ee(n, i, r, r[14], e ? ie(i, r[14], o, Xf) : te(r[14]), $r)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Yf(s) {
  let e, i, n, r;
  const o = [jf, Wf],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function qf(s, e, i) {
  let n;
  const r = ["orientation", "activateOnFocus", "loop", "autoSet", "value", "onValueChange", "asChild", "el"];
  let o = L(e, r),
    a, c, {
      $$slots: l = {},
      $$scope: u
    } = e,
    {
      orientation: f = void 0
    } = e,
    {
      activateOnFocus: h = void 0
    } = e,
    {
      loop: d = void 0
    } = e,
    {
      autoSet: m = void 0
    } = e,
    {
      value: g = void 0
    } = e,
    {
      onValueChange: p = void 0
    } = e,
    {
      asChild: _ = !1
    } = e,
    {
      el: A = void 0
    } = e;
  const {
    elements: {
      root: w
    },
    states: {
      value: y
    },
    updateOption: E,
    getAttrs: z
  } = Vf({
    orientation: f,
    activateOnFocus: h,
    loop: d,
    autoSet: m,
    defaultValue: g,
    onValueChange: ({
      next: k
    }) => (g !== k && (p == null || p(k), i(7, g = k)), k)
  });
  Re(s, w, k => i(13, a = k)), Re(s, y, k => i(3, c = k));
  const I = z("root");

  function R(k) {
    ke[k ? "unshift" : "push"](() => {
      A = k, i(0, A)
    })
  }
  return s.$$set = k => {
    e = P(P({}, e), ge(k)), i(6, o = L(e, r)), "orientation" in k && i(8, f = k.orientation), "activateOnFocus" in k && i(9, h = k.activateOnFocus), "loop" in k && i(10, d = k.loop), "autoSet" in k && i(11, m = k.autoSet), "value" in k && i(7, g = k.value), "onValueChange" in k && i(12, p = k.onValueChange), "asChild" in k && i(1, _ = k.asChild), "el" in k && i(0, A = k.el), "$$scope" in k && i(14, u = k.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 128 && g !== void 0 && y.set(g), s.$$.dirty & 256 && E("orientation", f), s.$$.dirty & 512 && E("activateOnFocus", h), s.$$.dirty & 1024 && E("loop", d), s.$$.dirty & 2048 && E("autoSet", m), s.$$.dirty & 8192 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, I)
  }, [A, _, n, c, w, y, o, g, f, h, d, m, p, a, u, l, R]
}
class Qf extends fe {
  constructor(e) {
    super(), he(this, e, qf, Yf, ae, {
      orientation: 8,
      activateOnFocus: 9,
      loop: 10,
      autoSet: 11,
      value: 7,
      onValueChange: 12,
      asChild: 1,
      el: 0
    })
  }
}
const Kf = s => ({
    builder: s & 4
  }),
  eo = s => ({
    builder: s[2]
  }),
  Zf = s => ({
    builder: s & 4
  }),
  to = s => ({
    builder: s[2]
  });

function Jf(s) {
  let e, i, n, r;
  const o = s[8].default,
    a = $(o, s, s[7], eo);
  let c = [s[2], s[4]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("div"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "DIV", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[9](e), i = !0, n || (r = De(s[2].action(e)), n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 132) && ee(a, o, u, u[7], i ? ie(o, u[7], f, Kf) : te(u[7]), eo), j(e, l = se(c, [f & 4 && u[2], f & 16 && u[4]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[9](null), n = !1, r()
    }
  }
}

function $f(s) {
  let e;
  const i = s[8].default,
    n = $(i, s, s[7], to);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 132) && ee(n, i, r, r[7], e ? ie(i, r[7], o, Zf) : te(r[7]), to)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function eh(s) {
  let e, i, n, r;
  const o = [$f, Jf],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function th(s, e, i) {
  let n;
  const r = ["value", "asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      value: u
    } = e,
    {
      asChild: f = !1
    } = e,
    {
      el: h = void 0
    } = e;
  const {
    elements: {
      content: d
    },
    getAttrs: m
  } = tr();
  Re(s, d, _ => i(6, a = _));
  const g = m("content");

  function p(_) {
    ke[_ ? "unshift" : "push"](() => {
      h = _, i(0, h)
    })
  }
  return s.$$set = _ => {
    e = P(P({}, e), ge(_)), i(4, o = L(e, r)), "value" in _ && i(5, u = _.value), "asChild" in _ && i(1, f = _.asChild), "el" in _ && i(0, h = _.el), "$$scope" in _ && i(7, l = _.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 96 && i(2, n = a(u)), s.$$.dirty & 4 && Object.assign(n, g)
  }, [h, f, n, d, o, u, a, l, c, p]
}
let ih = class extends fe {
  constructor(e) {
    super(), he(this, e, th, eh, ae, {
      value: 5,
      asChild: 1,
      el: 0
    })
  }
};
const sh = s => ({
    builder: s & 4
  }),
  io = s => ({
    builder: s[2]
  }),
  nh = s => ({
    builder: s & 4
  }),
  so = s => ({
    builder: s[2]
  });

function rh(s) {
  let e, i, n, r;
  const o = s[7].default,
    a = $(o, s, s[6], io);
  let c = [s[2], s[4]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("div"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "DIV", {});
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), s[8](e), i = !0, n || (r = De(s[2].action(e)), n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 68) && ee(a, o, u, u[6], i ? ie(o, u[6], f, sh) : te(u[6]), io), j(e, l = se(c, [f & 4 && u[2], f & 16 && u[4]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[8](null), n = !1, r()
    }
  }
}

function oh(s) {
  let e;
  const i = s[7].default,
    n = $(i, s, s[6], so);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 68) && ee(n, i, r, r[6], e ? ie(i, r[6], o, nh) : te(r[6]), so)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function ah(s) {
  let e, i, n, r;
  const o = [oh, rh],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function lh(s, e, i) {
  let n;
  const r = ["asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      asChild: u = !1
    } = e,
    {
      el: f = void 0
    } = e;
  const {
    elements: {
      list: h
    },
    getAttrs: d
  } = tr();
  Re(s, h, p => i(5, a = p));
  const m = d("list");

  function g(p) {
    ke[p ? "unshift" : "push"](() => {
      f = p, i(0, f)
    })
  }
  return s.$$set = p => {
    e = P(P({}, e), ge(p)), i(4, o = L(e, r)), "asChild" in p && i(1, u = p.asChild), "el" in p && i(0, f = p.el), "$$scope" in p && i(6, l = p.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 32 && i(2, n = a), s.$$.dirty & 4 && Object.assign(n, m)
  }, [f, u, n, h, o, a, l, c, g]
}
let ch = class extends fe {
  constructor(e) {
    super(), he(this, e, lh, ah, ae, {
      asChild: 1,
      el: 0
    })
  }
};
const uh = s => ({
    builder: s & 4
  }),
  no = s => ({
    builder: s[2]
  }),
  fh = s => ({
    builder: s & 4
  }),
  ro = s => ({
    builder: s[2]
  });

function hh(s) {
  let e, i, n, r;
  const o = s[10].default,
    a = $(o, s, s[9], no);
  let c = [s[2], {
      type: "button"
    }, s[5]],
    l = {};
  for (let u = 0; u < c.length; u += 1) l = P(l, c[u]);
  return {
    c() {
      e = q("button"), a && a.c(), this.h()
    },
    l(u) {
      e = Q(u, "BUTTON", {
        type: !0
      });
      var f = W(e);
      a && a.l(f), f.forEach(C), this.h()
    },
    h() {
      j(e, l)
    },
    m(u, f) {
      O(u, e, f), a && a.m(e, null), e.autofocus && e.focus(), s[11](e), i = !0, n || (r = [De(s[2].action(e)), B(e, "m-click", s[4]), B(e, "m-focus", s[4]), B(e, "m-keydown", s[4])], n = !0)
    },
    p(u, f) {
      a && a.p && (!i || f & 516) && ee(a, o, u, u[9], i ? ie(o, u[9], f, uh) : te(u[9]), no), j(e, l = se(c, [f & 4 && u[2], {
        type: "button"
      }, f & 32 && u[5]]))
    },
    i(u) {
      i || (T(a, u), i = !0)
    },
    o(u) {
      x(a, u), i = !1
    },
    d(u) {
      u && C(e), a && a.d(u), s[11](null), n = !1, Ze(r)
    }
  }
}

function dh(s) {
  let e;
  const i = s[10].default,
    n = $(i, s, s[9], ro);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 516) && ee(n, i, r, r[9], e ? ie(i, r[9], o, fh) : te(r[9]), ro)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function mh(s) {
  let e, i, n, r;
  const o = [dh, hh],
    a = [];

  function c(l, u) {
    return l[1] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, [u]) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function gh(s, e, i) {
  let n;
  const r = ["value", "disabled", "asChild", "el"];
  let o = L(e, r),
    a, {
      $$slots: c = {},
      $$scope: l
    } = e,
    {
      value: u
    } = e,
    {
      disabled: f = void 0
    } = e,
    {
      asChild: h = !1
    } = e,
    {
      el: d = void 0
    } = e;
  const {
    elements: {
      trigger: m
    },
    getAttrs: g
  } = tr();
  Re(s, m, w => i(8, a = w));
  const p = ai(),
    _ = g("trigger");

  function A(w) {
    ke[w ? "unshift" : "push"](() => {
      d = w, i(0, d)
    })
  }
  return s.$$set = w => {
    e = P(P({}, e), ge(w)), i(5, o = L(e, r)), "value" in w && i(6, u = w.value), "disabled" in w && i(7, f = w.disabled), "asChild" in w && i(1, h = w.asChild), "el" in w && i(0, d = w.el), "$$scope" in w && i(9, l = w.$$scope)
  }, s.$$.update = () => {
    s.$$.dirty & 448 && i(2, n = a({
      value: u,
      disabled: f
    })), s.$$.dirty & 4 && Object.assign(n, _)
  }, [d, h, n, m, p, o, u, f, a, l, c, A]
}
let ph = class extends fe {
  constructor(e) {
    super(), he(this, e, gh, mh, ae, {
      value: 6,
      disabled: 7,
      asChild: 1,
      el: 0
    })
  }
};

function bh(s) {
  let e;
  const i = s[3].default,
    n = $(i, s, s[4], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 16) && ee(n, i, r, r[4], e ? ie(i, r[4], o, null) : te(r[4]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function _h(s) {
  let e, i;
  const n = [{
    class: ue("ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", s[0])
  }, {
    value: s[1]
  }, s[2]];
  let r = {
    $$slots: {
      default: [bh]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new ih({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 7 ? se(n, [a & 1 && {
        class: ue("ring-offset-background focus-visible:ring-ring mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2", o[0])
      }, a & 2 && {
        value: o[1]
      }, a & 4 && Je(o[2])]) : {};
      a & 16 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function vh(s, e, i) {
  const n = ["class", "value"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e,
    {
      value: l
    } = e;
  return s.$$set = u => {
    e = P(P({}, e), ge(u)), i(2, r = L(e, n)), "class" in u && i(0, c = u.class), "value" in u && i(1, l = u.value), "$$scope" in u && i(4, a = u.$$scope)
  }, [c, l, r, o, a]
}
class g1 extends fe {
  constructor(e) {
    super(), he(this, e, vh, _h, ae, {
      class: 0,
      value: 1
    })
  }
}

function Ah(s) {
  let e;
  const i = s[2].default,
    n = $(i, s, s[3], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 8) && ee(n, i, r, r[3], e ? ie(i, r[3], o, null) : te(r[3]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function wh(s) {
  let e, i;
  const n = [{
    class: ue("bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1", s[0])
  }, s[1]];
  let r = {
    $$slots: {
      default: [Ah]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new ch({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 3 ? se(n, [a & 1 && {
        class: ue("bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1", o[0])
      }, a & 2 && Je(o[1])]) : {};
      a & 8 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function yh(s, e, i) {
  const n = ["class"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e;
  return s.$$set = l => {
    e = P(P({}, e), ge(l)), i(1, r = L(e, n)), "class" in l && i(0, c = l.class), "$$scope" in l && i(3, a = l.$$scope)
  }, [c, r, o, a]
}
class p1 extends fe {
  constructor(e) {
    super(), he(this, e, yh, wh, ae, {
      class: 0
    })
  }
}

function Eh(s) {
  let e;
  const i = s[3].default,
    n = $(i, s, s[7], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 128) && ee(n, i, r, r[7], e ? ie(i, r[7], o, null) : te(r[7]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function kh(s) {
  let e, i;
  const n = [{
    class: ue("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow", s[0])
  }, {
    value: s[1]
  }, s[2]];
  let r = {
    $$slots: {
      default: [Eh]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new ph({
    props: r
  }), e.$on("click", s[4]), e.$on("keydown", s[5]), e.$on("focus", s[6]), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 7 ? se(n, [a & 1 && {
        class: ue("ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow", o[0])
      }, a & 2 && {
        value: o[1]
      }, a & 4 && Je(o[2])]) : {};
      a & 128 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function Th(s, e, i) {
  const n = ["class", "value"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e,
    {
      value: l
    } = e;

  function u(d) {
    G.call(this, s, d)
  }

  function f(d) {
    G.call(this, s, d)
  }

  function h(d) {
    G.call(this, s, d)
  }
  return s.$$set = d => {
    e = P(P({}, e), ge(d)), i(2, r = L(e, n)), "class" in d && i(0, c = d.class), "value" in d && i(1, l = d.value), "$$scope" in d && i(7, a = d.$$scope)
  }, [c, l, r, o, u, f, h, a]
}
class b1 extends fe {
  constructor(e) {
    super(), he(this, e, Th, kh, ae, {
      class: 0,
      value: 1
    })
  }
}
const _1 = Qf;

function xh(s, {
  delay: e = 0,
  duration: i = 400,
  easing: n = Pl
} = {}) {
  const r = +getComputedStyle(s).opacity;
  return {
    delay: e,
    duration: i,
    easing: n,
    css: o => `opacity: ${o*r}`
  }
}

function v1(s, {
  delay: e = 0,
  duration: i = 400,
  easing: n = qo,
  x: r = 0,
  y: o = 0,
  opacity: a = 0
} = {}) {
  const c = getComputedStyle(s),
    l = +c.opacity,
    u = c.transform === "none" ? "" : c.transform,
    f = l * (1 - a),
    [h, d] = fr(r),
    [m, g] = fr(o);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: (p, _) => `
			transform: ${u} translate(${(1-p)*h}${d}, ${(1-p)*m}${g});
			opacity: ${l-f*_}`
  }
}

function A1(s, {
  delay: e = 0,
  duration: i = 400,
  easing: n = qo,
  axis: r = "y"
} = {}) {
  const o = getComputedStyle(s),
    a = +o.opacity,
    c = r === "y" ? "height" : "width",
    l = parseFloat(o[c]),
    u = r === "y" ? ["top", "bottom"] : ["left", "right"],
    f = u.map(A => `${A[0].toUpperCase()}${A.slice(1)}`),
    h = parseFloat(o[`padding${f[0]}`]),
    d = parseFloat(o[`padding${f[1]}`]),
    m = parseFloat(o[`margin${f[0]}`]),
    g = parseFloat(o[`margin${f[1]}`]),
    p = parseFloat(o[`border${f[0]}Width`]),
    _ = parseFloat(o[`border${f[1]}Width`]);
  return {
    delay: e,
    duration: i,
    easing: n,
    css: A => `overflow: hidden;opacity: ${Math.min(A*20,1)*a};${c}: ${A*l}px;padding-${u[0]}: ${A*h}px;padding-${u[1]}: ${A*d}px;margin-${u[0]}: ${A*m}px;margin-${u[1]}: ${A*g}px;border-${u[0]}-width: ${A*p}px;border-${u[1]}-width: ${A*_}px;`
  }
}

function Rh(s) {
  let e;
  const i = s[3].default,
    n = $(i, s, s[4], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 16) && ee(n, i, r, r[4], e ? ie(i, r[4], o, null) : te(r[4]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Ch(s) {
  let e, i;
  const n = [{
    class: ue("text-lg font-semibold", s[0])
  }, {
    level: s[1]
  }, s[2]];
  let r = {
    $$slots: {
      default: [Rh]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new Rc({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 7 ? se(n, [a & 1 && {
        class: ue("text-lg font-semibold", o[0])
      }, a & 2 && {
        level: o[1]
      }, a & 4 && Je(o[2])]) : {};
      a & 16 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function Sh(s, e, i) {
  const n = ["class", "level"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e,
    {
      level: l = "h3"
    } = e;
  return s.$$set = u => {
    e = P(P({}, e), ge(u)), i(2, r = L(e, n)), "class" in u && i(0, c = u.class), "level" in u && i(1, l = u.level), "$$scope" in u && i(4, a = u.$$scope)
  }, [c, l, r, o, a]
}
class w1 extends fe {
  constructor(e) {
    super(), he(this, e, Sh, Ch, ae, {
      class: 0,
      level: 1
    })
  }
}
const Ph = s => ({
    builder: s & 64
  }),
  oo = s => ({
    builder: s[6]
  });

function Mh(s) {
  let e;
  const i = s[2].default,
    n = $(i, s, s[5], oo);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 96) && ee(n, i, r, r[5], e ? ie(i, r[5], o, Ph) : te(r[5]), oo)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Dh(s) {
  let e, i;
  const n = [{
    class: ue(Ps(), s[0])
  }, s[1]];
  let r = {
    $$slots: {
      default: [Mh, ({
        builder: o
      }) => ({
        6: o
      }), ({
        builder: o
      }) => o ? 64 : 0]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new Uc({
    props: r
  }), e.$on("click", s[3]), e.$on("keydown", s[4]), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 3 ? se(n, [a & 1 && {
        class: ue(Ps(), o[0])
      }, a & 2 && Je(o[1])]) : {};
      a & 96 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function Fh(s, e, i) {
  const n = ["class"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e;

  function l(f) {
    G.call(this, s, f)
  }

  function u(f) {
    G.call(this, s, f)
  }
  return s.$$set = f => {
    e = P(P({}, e), ge(f)), i(1, r = L(e, n)), "class" in f && i(0, c = f.class), "$$scope" in f && i(5, a = f.$$scope)
  }, [c, r, o, l, u, a]
}
class y1 extends fe {
  constructor(e) {
    super(), he(this, e, Fh, Dh, ae, {
      class: 0
    })
  }
}
const Uh = s => ({
    builder: s & 64
  }),
  ao = s => ({
    builder: s[6]
  });

function zh(s) {
  let e;
  const i = s[2].default,
    n = $(i, s, s[5], ao);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 96) && ee(n, i, r, r[5], e ? ie(i, r[5], o, Uh) : te(r[5]), ao)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Ih(s) {
  let e, i;
  const n = [{
    class: ue(Ps({
      variant: "outline"
    }), "mt-2 sm:mt-0", s[0])
  }, s[1]];
  let r = {
    $$slots: {
      default: [zh, ({
        builder: o
      }) => ({
        6: o
      }), ({
        builder: o
      }) => o ? 64 : 0]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new Gc({
    props: r
  }), e.$on("click", s[3]), e.$on("keydown", s[4]), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 3 ? se(n, [a & 1 && {
        class: ue(Ps({
          variant: "outline"
        }), "mt-2 sm:mt-0", o[0])
      }, a & 2 && Je(o[1])]) : {};
      a & 96 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function Nh(s, e, i) {
  const n = ["class"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e;

  function l(f) {
    G.call(this, s, f)
  }

  function u(f) {
    G.call(this, s, f)
  }
  return s.$$set = f => {
    e = P(P({}, e), ge(f)), i(1, r = L(e, n)), "class" in f && i(0, c = f.class), "$$scope" in f && i(5, a = f.$$scope)
  }, [c, r, o, l, u, a]
}
class E1 extends fe {
  constructor(e) {
    super(), he(this, e, Nh, Ih, ae, {
      class: 0
    })
  }
}

function Oh(s) {
  let e;
  const i = s[1].default,
    n = $(i, s, s[2], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 4) && ee(n, i, r, r[2], e ? ie(i, r[2], o, null) : te(r[2]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Bh(s) {
  let e, i;
  const n = [s[0]];
  let r = {
    $$slots: {
      default: [Oh]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new qc({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 1 ? se(n, [Je(o[0])]) : {};
      a & 4 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function Lh(s, e, i) {
  const n = [];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e;
  return s.$$set = c => {
    e = P(P({}, e), ge(c)), i(0, r = L(e, n)), "$$scope" in c && i(2, a = c.$$scope)
  }, [r, o, a]
}
class Gh extends fe {
  constructor(e) {
    super(), he(this, e, Lh, Bh, ae, {})
  }
}

function Vh(s) {
  let e, i, n;
  const r = s[3].default,
    o = $(r, s, s[2], null);
  let a = [{
      class: i = ue("flex flex-col-reverse sm:flex-row sm:justify-end gap-2", s[0])
    }, s[1]],
    c = {};
  for (let l = 0; l < a.length; l += 1) c = P(c, a[l]);
  return {
    c() {
      e = q("div"), o && o.c(), this.h()
    },
    l(l) {
      e = Q(l, "DIV", {
        class: !0
      });
      var u = W(e);
      o && o.l(u), u.forEach(C), this.h()
    },
    h() {
      j(e, c)
    },
    m(l, u) {
      O(l, e, u), o && o.m(e, null), n = !0
    },
    p(l, [u]) {
      o && o.p && (!n || u & 4) && ee(o, r, l, l[2], n ? ie(r, l[2], u, null) : te(l[2]), null), j(e, c = se(a, [(!n || u & 1 && i !== (i = ue("flex flex-col-reverse sm:flex-row sm:justify-end gap-2", l[0]))) && {
        class: i
      }, u & 2 && l[1]]))
    },
    i(l) {
      n || (T(o, l), n = !0)
    },
    o(l) {
      x(o, l), n = !1
    },
    d(l) {
      l && C(e), o && o.d(l)
    }
  }
}

function Hh(s, e, i) {
  const n = ["class"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e;
  return s.$$set = l => {
    e = P(P({}, e), ge(l)), i(1, r = L(e, n)), "class" in l && i(0, c = l.class), "$$scope" in l && i(2, a = l.$$scope)
  }, [c, r, a, o]
}
class k1 extends fe {
  constructor(e) {
    super(), he(this, e, Hh, Vh, ae, {
      class: 0
    })
  }
}

function Xh(s) {
  let e, i, n;
  const r = s[3].default,
    o = $(r, s, s[2], null);
  let a = [{
      class: i = ue("flex flex-col space-y-2 text-center sm:text-left", s[0])
    }, s[1]],
    c = {};
  for (let l = 0; l < a.length; l += 1) c = P(c, a[l]);
  return {
    c() {
      e = q("div"), o && o.c(), this.h()
    },
    l(l) {
      e = Q(l, "DIV", {
        class: !0
      });
      var u = W(e);
      o && o.l(u), u.forEach(C), this.h()
    },
    h() {
      j(e, c)
    },
    m(l, u) {
      O(l, e, u), o && o.m(e, null), n = !0
    },
    p(l, [u]) {
      o && o.p && (!n || u & 4) && ee(o, r, l, l[2], n ? ie(r, l[2], u, null) : te(l[2]), null), j(e, c = se(a, [(!n || u & 1 && i !== (i = ue("flex flex-col space-y-2 text-center sm:text-left", l[0]))) && {
        class: i
      }, u & 2 && l[1]]))
    },
    i(l) {
      n || (T(o, l), n = !0)
    },
    o(l) {
      x(o, l), n = !1
    },
    d(l) {
      l && C(e), o && o.d(l)
    }
  }
}

function Wh(s, e, i) {
  const n = ["class"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e;
  return s.$$set = l => {
    e = P(P({}, e), ge(l)), i(1, r = L(e, n)), "class" in l && i(0, c = l.class), "$$scope" in l && i(2, a = l.$$scope)
  }, [c, r, a, o]
}
class T1 extends fe {
  constructor(e) {
    super(), he(this, e, Wh, Xh, ae, {
      class: 0
    })
  }
}

function jh(s) {
  let e, i;
  const n = [{
    transition: s[1]
  }, {
    transitionConfig: s[2]
  }, {
    class: ue("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", s[0])
  }, s[3]];
  let r = {};
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new vu({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 15 ? se(n, [a & 2 && {
        transition: o[1]
      }, a & 4 && {
        transitionConfig: o[2]
      }, a & 1 && {
        class: ue("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", o[0])
      }, a & 8 && Je(o[3])]) : {};
      e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function Yh(s, e, i) {
  const n = ["class", "transition", "transitionConfig"];
  let r = L(e, n),
    {
      class: o = void 0
    } = e,
    {
      transition: a = xh
    } = e,
    {
      transitionConfig: c = {
        duration: 150
      }
    } = e;
  return s.$$set = l => {
    e = P(P({}, e), ge(l)), i(3, r = L(e, n)), "class" in l && i(0, o = l.class), "transition" in l && i(1, a = l.transition), "transitionConfig" in l && i(2, c = l.transitionConfig)
  }, [o, a, c, r]
}
class qh extends fe {
  constructor(e) {
    super(), he(this, e, Yh, jh, ae, {
      class: 0,
      transition: 1,
      transitionConfig: 2
    })
  }
}

function Qh(s) {
  let e;
  const i = s[4].default,
    n = $(i, s, s[5], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 32) && ee(n, i, r, r[5], e ? ie(i, r[5], o, null) : te(r[5]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function Kh(s) {
  let e, i, n, r;
  e = new qh({});
  const o = [{
    transition: s[1]
  }, {
    transitionConfig: s[2]
  }, {
    class: ue("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg  sm:rounded-lg md:w-full", s[0])
  }, s[3]];
  let a = {
    $$slots: {
      default: [Qh]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let c = 0; c < o.length; c += 1) a = P(a, o[c]);
  return n = new cu({
    props: a
  }), {
    c() {
      be(e.$$.fragment), i = Be(), be(n.$$.fragment)
    },
    l(c) {
      _e(e.$$.fragment, c), i = Le(c), _e(n.$$.fragment, c)
    },
    m(c, l) {
      ve(e, c, l), O(c, i, l), ve(n, c, l), r = !0
    },
    p(c, l) {
      const u = l & 15 ? se(o, [l & 2 && {
        transition: c[1]
      }, l & 4 && {
        transitionConfig: c[2]
      }, l & 1 && {
        class: ue("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg  sm:rounded-lg md:w-full", c[0])
      }, l & 8 && Je(c[3])]) : {};
      l & 32 && (u.$$scope = {
        dirty: l,
        ctx: c
      }), n.$set(u)
    },
    i(c) {
      r || (T(e.$$.fragment, c), T(n.$$.fragment, c), r = !0)
    },
    o(c) {
      x(e.$$.fragment, c), x(n.$$.fragment, c), r = !1
    },
    d(c) {
      c && C(i), Ae(e, c), Ae(n, c)
    }
  }
}

function Zh(s) {
  let e, i;
  return e = new Gh({
    props: {
      $$slots: {
        default: [Kh]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, [r]) {
      const o = {};
      r & 47 && (o.$$scope = {
        dirty: r,
        ctx: n
      }), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function Jh(s, e, i) {
  const n = ["class", "transition", "transitionConfig"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e,
    {
      transition: l = Qo
    } = e,
    {
      transitionConfig: u = void 0
    } = e;
  return s.$$set = f => {
    e = P(P({}, e), ge(f)), i(3, r = L(e, n)), "class" in f && i(0, c = f.class), "transition" in f && i(1, l = f.transition), "transitionConfig" in f && i(2, u = f.transitionConfig), "$$scope" in f && i(5, a = f.$$scope)
  }, [c, l, u, r, o, a]
}
class x1 extends fe {
  constructor(e) {
    super(), he(this, e, Jh, Zh, ae, {
      class: 0,
      transition: 1,
      transitionConfig: 2
    })
  }
}

function $h(s) {
  let e;
  const i = s[2].default,
    n = $(i, s, s[3], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 8) && ee(n, i, r, r[3], e ? ie(i, r[3], o, null) : te(r[3]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function ed(s) {
  let e, i;
  const n = [{
    class: ue("text-sm text-muted-foreground", s[0])
  }, s[1]];
  let r = {
    $$slots: {
      default: [$h]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new xu({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 3 ? se(n, [a & 1 && {
        class: ue("text-sm text-muted-foreground", o[0])
      }, a & 2 && Je(o[1])]) : {};
      a & 8 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function td(s, e, i) {
  const n = ["class"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e;
  return s.$$set = l => {
    e = P(P({}, e), ge(l)), i(1, r = L(e, n)), "class" in l && i(0, c = l.class), "$$scope" in l && i(3, a = l.$$scope)
  }, [c, r, o, a]
}
class R1 extends fe {
  constructor(e) {
    super(), he(this, e, td, ed, ae, {
      class: 0
    })
  }
}
const C1 = Ac;

function id(s) {
  let e, i, n, r, o = [{
      class: i = ue("border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50", s[2])
    }, {
      readOnly: s[3]
    }, s[4]],
    a = {};
  for (let c = 0; c < o.length; c += 1) a = P(a, o[c]);
  return {
    c() {
      e = q("input"), this.h()
    },
    l(c) {
      e = Q(c, "INPUT", {
        class: !0
      }), this.h()
    },
    h() {
      j(e, a)
    },
    m(c, l) {
      O(c, e, l), e.autofocus && e.focus(), hr(e, s[0]), s[22](e), n || (r = [B(e, "input", s[21]), B(e, "blur", s[5]), B(e, "change", s[6]), B(e, "click", s[7]), B(e, "focus", s[8]), B(e, "focusin", s[9]), B(e, "focusout", s[10]), B(e, "keydown", s[11]), B(e, "keypress", s[12]), B(e, "keyup", s[13]), B(e, "mouseover", s[14]), B(e, "mouseenter", s[15]), B(e, "mouseleave", s[16]), B(e, "mousemove", s[17]), B(e, "paste", s[18]), B(e, "input", s[19]), B(e, "wheel", s[20], {
        passive: !0
      })], n = !0)
    },
    p(c, [l]) {
      j(e, a = se(o, [l & 4 && i !== (i = ue("border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50", c[2])) && {
        class: i
      }, l & 8 && {
        readOnly: c[3]
      }, l & 16 && c[4]])), l & 1 && e.value !== c[0] && hr(e, c[0])
    },
    i: Ge,
    o: Ge,
    d(c) {
      c && C(e), s[22](null), n = !1, Ze(r)
    }
  }
}

function sd(s, e, i) {
  const n = ["class", "value", "ref", "readonly"];
  let r = L(e, n),
    {
      class: o = void 0
    } = e,
    {
      value: a = void 0
    } = e,
    {
      ref: c = void 0
    } = e,
    {
      readonly: l = void 0
    } = e;

  function u(v) {
    G.call(this, s, v)
  }

  function f(v) {
    G.call(this, s, v)
  }

  function h(v) {
    G.call(this, s, v)
  }

  function d(v) {
    G.call(this, s, v)
  }

  function m(v) {
    G.call(this, s, v)
  }

  function g(v) {
    G.call(this, s, v)
  }

  function p(v) {
    G.call(this, s, v)
  }

  function _(v) {
    G.call(this, s, v)
  }

  function A(v) {
    G.call(this, s, v)
  }

  function w(v) {
    G.call(this, s, v)
  }

  function y(v) {
    G.call(this, s, v)
  }

  function E(v) {
    G.call(this, s, v)
  }

  function z(v) {
    G.call(this, s, v)
  }

  function I(v) {
    G.call(this, s, v)
  }

  function R(v) {
    G.call(this, s, v)
  }

  function k(v) {
    G.call(this, s, v)
  }

  function U() {
    a = this.value, i(0, a)
  }

  function S(v) {
    ke[v ? "unshift" : "push"](() => {
      c = v, i(1, c)
    })
  }
  return s.$$set = v => {
    e = P(P({}, e), ge(v)), i(4, r = L(e, n)), "class" in v && i(2, o = v.class), "value" in v && i(0, a = v.value), "ref" in v && i(1, c = v.ref), "readonly" in v && i(3, l = v.readonly)
  }, [a, c, o, l, r, u, f, h, d, m, g, p, _, A, w, y, E, z, I, R, k, U, S]
}
class S1 extends fe {
  constructor(e) {
    super(), he(this, e, sd, id, ae, {
      class: 2,
      value: 0,
      ref: 1,
      readonly: 3
    })
  }
}

function nd(s) {
  let e;
  const i = s[2].default,
    n = $(i, s, s[3], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 8) && ee(n, i, r, r[3], e ? ie(i, r[3], o, null) : te(r[3]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function rd(s) {
  let e, i;
  const n = [{
    class: ue("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", s[0])
  }, s[1]];
  let r = {
    $$slots: {
      default: [nd]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new Zu({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 3 ? se(n, [a & 1 && {
        class: ue("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", o[0])
      }, a & 2 && Je(o[1])]) : {};
      a & 8 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function od(s, e, i) {
  const n = ["class"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e;
  return s.$$set = l => {
    e = P(P({}, e), ge(l)), i(1, r = L(e, n)), "class" in l && i(0, c = l.class), "$$scope" in l && i(3, a = l.$$scope)
  }, [c, r, o, a]
}
class ad extends fe {
  constructor(e) {
    super(), he(this, e, od, rd, ae, {
      class: 0
    })
  }
}

function di(s) {
  try {
    return localStorage.getItem(s)
  } catch {
    return
  }
}

function bn(s, e) {
  try {
    localStorage.setItem(s, "" + e)
  } catch {
    return
  }
}

function ld(s, e) {
  let i = parseFloat(di(s));
  return Number.isNaN(i) ? e : i
}

function cd(s) {
  const e = {},
    i = {};
  for (let n in s) {
    const r = s[n];
    if (Array.isArray(s[n])) {
      switch (r[1]) {
        case String:
          e[n] = r[0] in localStorage ? di(r[0]) : r[2];
          break;
        case Number:
          e[n] = ut(ld(r[0], r[3]), r[2][0], r[2][1]);
          break;
        case Object:
          try {
            e[n] = JSON.parse(di(r[0]) || "{}")
          } catch {
            e[n] = r[2]
          }
          break;
        case Boolean:
          e[n] = r[0] in localStorage ? di(r[0]) === "y" : r[2];
          break;
        default:
          e[n] = r[1](di(r[0]))
      }
      i[n] = o => {
        const a = s[n][0];
        bn(a, typeof o == "boolean" ? o ? "y" : "" : o)
      }
    } else {
      e[n] = r[1];
      try {
        e[n] = di(s[n])
      } catch {}
      i[n] = o => {
        typeof o == "string" ? bn(s[n], o) : bn(s[n], JSON.stringify(o))
      }
    }
  }
  return new Proxy(e, {
    set(n, r, o, a) {
      return n[r] = o, i[r](o), !0
    }
  })
}
const tt = (...s) => s,
  ud = s => ({
    mutesound: "mutesounds",
    mutechat: "mutechat",
    imblind: "imblind",
    mutejuke: "mutejuke",
    jukevol: tt("jukevol", Number, [0, 1], 1),
    hideusers: "hideuser",
    hidechat: "hidechat",
    hidenametags: "hidenametags",
    piecePickMode: tt("pick", String, "hold"),
    previewScale: tt("preview-scale", Number, [.5, 4], 1),
    viewsVar: tt("views", Object, {}),
    enableTimer: "timer",
    renderer: tt("renderer", String, "gpu4"),
    secretforthisroom: tt(localStorage.adminsecret || `secret:${s}`, String, localStorage.adminsecret || ""),
    helpDismissed: "help-dismissed",
    savedbgcol: tt("bg", String, "#222222"),
    savedbgtexture: tt("bg-texture", String, "none"),
    savedname: tt("name", String, ""),
    savedcolor: tt("color", String, "#ff5bb6"),
    antialias: tt("antialias", Number, [0, 8], 4),
    particle: tt("particle", Number, [0, 10], 0),
    nsfw: tt("nsfw", Boolean, !1),
    publicRoomsView: tt("public-rooms-view", String, "grid"),
    hideshadow: tt("hideshadow", Boolean, !1),
    hideosc: tt("hideosc", Boolean, !1)
  });

function lo(s) {
  return cd(ud(s))
}

function fd() {
  const s = Pe(lo("")),
    {
      subscribe: e,
      set: i,
      update: n
    } = s;
  let r;
  return e(o => r = o), {
    subscribe: e,
    set: i,
    update: n,
    snapshot: () => r,
    init: (o, a) => {
      const c = lo(o);
      a && (c.secretforthisroom = a), i(c)
    }
  }
}

function ps(s, e, i, n, r) {
  const o = (i + s) * r,
    a = (n + e) * r;
  return `${o}px ${a}px`
}

function co(s) {
  const e = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, 0, 0];
  s.forEach(l => {
    e[0] = Math.min(e[0], l.x), e[1] = Math.min(e[1], l.y), e[2] = Math.max(e[2], l.x), e[3] = Math.max(e[3], l.y)
  });
  const [i, n, r, o] = e, a = (i + r) * .5, c = (n + o) * .5;
  return {
    x: a,
    y: c
  }
}
const hd = () => {
    const s = Pe([]);
    let e = 0,
      i = 0;

    function n(a, c, l, u) {
      s.update(f => {
        const h = [];
        u.forEach(m => {
          if (!m.user) return;
          const g = m.user.id;
          (h[g] ?? (h[g] = [])).push(m)
        });
        const d = e != a || i != c;
        for (let m of f) {
          const g = h[m.user.id];
          if (g) {
            const {
              x: p,
              y: _
            } = co(g);
            if (m.groups = g, m.event = void 0, m.hidden && (m.hidden = !1), !d && m.x === p && m.y === _) continue;
            m.x = p, m.y = _, m.translate = ps(p, _, a, c, l)
          } else if (d && (m.translate = ps(m.x, m.y, a, c, l)), !m.hidden) {
            if (m.groups.length > 0) {
              const {
                x: p,
                y: _
              } = co(m.groups);
              m.x = p, m.y = _, m.translate = ps(m.x, m.y, a, c, l), m.groups = []
            }
            m.hidden = !0
          }
        }
        return e = a, i = c, f
      })
    }

    function r(a) {
      s.update(c => {
        const l = [];
        for (const u of a) {
          const f = c.find(h => h.user.id === u.id);
          f ? (f.user = u, l.push(f)) : l.push({
            user: u,
            x: 0,
            y: 0,
            groups: [],
            translate: "",
            hidden: !0
          })
        }
        return l
      })
    }

    function o(a, c, l, u, f, h, d) {
      s.update(m => {
        const g = m.find(p => p.user.id === a);
        return g && (g.x = c, g.y = l, g.translate = ps(c, l, u, f, h), g.hidden = !1, g.event = d), m
      })
    }
    return {
      subscribe: s.subscribe,
      drawTags: n,
      drawEvent: o,
      sync: r,
      reset: () => s.set([])
    }
  },
  dd = "" + new URL("../assets/click.tPnMF68C.webm", import.meta.url).href,
  md = "" + new URL("../assets/chat.CpWYeTxL.webm", import.meta.url).href,
  gd = "" + new URL("../assets/lock.Bvppktjd.webm", import.meta.url).href,
  pd = "" + new URL("../assets/complete.Cr16T5Xl.webm", import.meta.url).href,
  bd = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQRChYECGFOAZwEAAAAAAA2XEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHYTbuMU6uEElTDZ1OsggFCTbuMU6uEHFO7a1Osgg2B7AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmsirXsYMPQkBNgI1MYXZmNjAuMTYuMTAwV0GNTGF2ZjYwLjE2LjEwMESJiEBxwAAAAAAAFlSua+WuAQAAAAAAAFzXgQFzxYh3oouB3fzEkpyBACK1nIN1bmSIgQCGhkFfT1BVU1aqg2MuoFa7hATEtACDgQLhkZ+BAbWIQOdwAAAAAABiZIEQY6KTT3B1c0hlYWQBATgBgLsAAAAAABJUw2f9c3OgY8CAZ8iaRaOHRU5DT0RFUkSHjUxhdmY2MC4xNi4xMDBzc9djwItjxYh3oouB3fzEkmfIokWjh0VOQ09ERVJEh5VMYXZjNjAuMzEuMTAyIGxpYm9wdXNnyKFFo4hEVVJBVElPTkSHkzAwOjAwOjAwLjI4NDAwMDAwMAAfQ7Z1S7fngQCjQUqBAACA+H67BS7alFBqrY4ZoCYmXysca263NDwFibvoG3AlbzPNCAsNhnn6+NM18H+H5Glds/6Vj66yChcLFLAbgVgnoHgXthnsg0TQOuGk40/naR5rzk88DP63/z8uSSunjI67AB2jwPYFOkffpoohj42AwwrsSkD/w4m00jYRofP1gZp7amq96cw9BvCvokGxu5DgCloXMyfYxKqTK9MKHs4UW1N41erKTikj1C2L8BG95RhmdDQXvG26ozd9MBl8lT8VQqqVbp1CnFyBkMysE1hbJEcMx7Oec++P7OUpxkBupzBJJk+jkbNX2W1/9C2P5r+aN0MV79XWtUHHDqNWHVVQEGFm9IpF6pTE8qiYXh7McCdLbI8yU9VEFV1xEOMjaZnz3k/7B9OVXgBhGeqEadPtU0+yYhcCfS+gpfjxy82apVOhpc1Fs9ejQLmBABWA+E/sjoUZFXGcDYfyhCjw4+r8TkPA21ZRdvhR7UaBGq14j7RQSPN1J+ZnRPMp3li5ZH/+1yGcbZQkKBRvREBN4tIwCnRENT3mxA+EFz2aFH47eE5hOEfoqokRUcwXZucl7EvJGO3F7HOgL9Y+h8bNbOityKAMCbi2FlWZIDb5N309csQKProRAMbS9pDbWzS2o5ez9Nn6ak2Yifgz/S/XwK1eN/AmbU4dkUDD+u/+uIcazIbKvaNAtoEAKYD4sA+pi5B8v+d2Cfgd/R5NrdYxlHeWr1EbmkqtM5OzhCWPdCwAkmQuLHlJzSGgKO2XfrLICUO0wjFE6Gn1ckF4UpHj4W8M7eMySMaybXo5nquj3VozI6Uy7VszQMveKwrM+21XJigIttP7n20H6MLQOiIC2pYxSjeZnvMvIA1tPmpJIRiNO7J3SPVX440gNCWNdl2lyKn5FQolmsRod0MyUwL7lnnAQRsS1B13GSDseWGPo0DGgQA9gPivnGZOeTWXbPVN2tlyNaZuTifxvVp+6veUH1ZZd2n1PposlFb4ELCsP13uvX0weJBL2QVCgCK+DzXkgGbfdrNyKMrgXsnRh7vWrHCyow7QRO5FTljKi1BB14doF/wc+Mc+WC+rtHfkhXjnjESBDrwPMhVQbJj7CEPoH8aNegPVMYyh3Lk7pCArEhpUzgngAP+/NNw+8hCzSixuXi+sMvhgLTUEvSl+RIjDCoBT/ZsulguJxVPEOC80tBX+hYeWaTmPo0C+gQBRgPicSRRjXZr4RzCHL8JNqSD66ulfRXjelx1/3taniElQhI8QafME+LJCCdhI4doiBxfRBolmdhbUPrvTmBMXdN1JG0jkZt49FHuxOEmTK/Qr+X44Z7BGefLRxs6zhmOPXf2eByYctYdPbgtdzVefOkRWqEwpEnm2aMV/JWfX8/hVye8ud8zBqlwUQQCAcyfxkciWi2by+SwvvgfvLeQ2d5Vy64szlWGDw4rRSzV25ORzRUB0PnVL7xYXyKNAvIEAZYD4l7PapoBhlh5LVjK/pbJmRPuOCZm8H/TIiANEJ5GsszkA/468w4WnBxWz0gmkrlr+huSAUOjR2GJ0GGkGeFfE+k3mvEHVCAm7cmTC+hySOmDzR9dvEt5/Jd2gRWAlsOin/RLblYcmABPl45ZElJDf4/HGrvkhGKr3ATECuVHvJV1u83hvQZGbDWSU3/q4ZhY6ZH1kDWSJB2Wu0t/Meqtgzc4ZV5917/RykPeR3mh6R4lMElKROVTJo0C4gQB5gPiagQq7O5kXt3suXbV86mEsKC7i9Y1uESkifvkzVhmhbXhXBR31CARElM001Tx2JNYerQQh0M7MsU8LBrg0LItNR1jArcDC/jU3O2CfmMawXmtPZ/H+O6Cl0z/UG76E1+SIifo+54mdciUfpVt8ArjMPrAyQUKG8FaU0uHf+y6wVo/goU181hfB6XIdvfhaScVKJxFHPz8j2gSdN5lPCzerHeFPbHiWt2nz4AgEh4qDqt3zyKNAqYEAjYD4lxxKkXLLnAbGaevMei2kFOgsGl7Pd/oCoqAYhyDK7XZbXp40r2lPe62QxSqnJgDrNMhxd8R5Jo734gkmY0RmrYNEsPTNGz1Zt4a81Jy/kdXpEYnM8/G/vFHkYEyWNkTNogTp9cc8YGmYE3wwXuWIRnXtmAAB3DSkMKO2gSJR0q6ZxYFJjH9vFlOUhya29pDghZouLeulsi6ye+QDAF/Ktt0Il6ejQJyBAKGA+KwLeFvJT1qWpuCkBNSurOATsQVsagU0514f5u2BcaG7cGwQWIvaMc09BYzcNRo7wrZRAFNhYnQBMoZluSXga6RP6yNjhMsLsXQcQPv5QLuR44IueXSRvPlPxxInuiaxXwivnJL/2RlRpMfZD9nCEedlWc9fJK5i72ys7eLBmkYRzTo65Sv/del7qk5NURa/QyYMbvFS/M6jQJaBALWA+BVySGF+d8PAzMZgWGUTCxxZ1TBtiNNfves1/18twGLeHxM0uPHRT3nnY8uHcoQBxR0hQW1TUukcdZlQcW7GscNFLe4L21DDYys0p5qrLK+nmUxRShTjq5nakAxWz77cXxXuTHCp1gfNVE9bZhHNN5aDCiH593QOLEup7gAKLxF3+bhT72LGzXGvf88kKIYmUhCjQJWBAMmA+AZk5Km3Db1WjzKgavthShKBDzCvykf6/ox0zxmEZRa17TMx7viItsV3PkMBENs8PSESvdKF8Bw01SXYniQKlrqb3pF/+rP85Y14HyUUcPBRRJhAOhKa4YGq0sQmZIM1okwDjlqbec24DTIQeuQtpLQcSwoWrZVWivBsFkgmFwobM3C7oo+9Tei3dNCZCzi6SaNAnIEA3YD4GaquOm6+fQmMP7o/veAVtSHKcsary3Yzt9qjcu/mkEHzYpo0C69swpaGu1ZreRrZjw293J6q47/JOv5YzXzAfu4f4tMX4oDhrqMcWCZM69N41hk8j81qj5t1uA0zplkXvzZSdRU1XhgKPJFIvSMh/hF2z+cjfHzVvixbpqrFoOYvpO1XVBCTjbkvZx6PRAnh4wE8ZmNStKNAnoEA8YD4BuHQrnB0s4Etpfvik6cnr/d4STtUnSEw9KgXYHd6Sb8bVV9KJOckrBIrba1/OqkxFsL5ra/M1xvIN3J5G4aJGKmFlfALXuvpOCbmVjUg+D1XJtXRv7x6IJlV5P43hy3zKcprmOUOwERYUlJXl/Y7VvkV3rkQsm7SUgeblr4ChooyriaTzoCuj9/SD7k4WM/xrh5wh9bfAHx4o0ExgQEFgPh+Lx1gA9UuLPEtkrAGwik7v6kVsaNv1eu6+UPOStWcQCfN5QxMj15Yd3tgzzGhjwk6QG7bAMSA7wwJi9UezyfMC10mbPkyWwaRlXqKAEXj326gnJrZ6V4YIeg0ormrB0k0SKjnpK7lplRVeJitx2Gxu3d8q/nVAu8lkUvTVeBUI1d2jlg1xHvsI9wOxj08pz6ttkdrHBYkzuqNHiOFb717K0BqBBy4NEJIZKmt0gAAt/ucldB38jo02n17LZSMCKHUitBKjJL7dc3jvRhZbmydMK/GyY/RbavbX8AbrcE1pL3tX2AhoedLM/lsZnVgmyP49CeGbYQhGioHCPFJ3FSDXIFQC5Gl+nub+ADTqeSAuUGMv/6bKYCgA3OnMV3jX5X/NseqBgXx26EOMQWgQPuhQPGBARkA+H8hQ/HfPYxP7awKFi9lB32YStCrys26x5x6FPv6fqU3Er0HleNz9HguBV6IoFjQKvq+jPsobVg1TgdS7l8WDyOJtEzoSPSqQ0CL1QiI2qwGn04MJ9ZJoKgz0622mShsB0tk3hz5CfEKIqcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4vQ3skcc4c8wU/wTgAHgRhD+2KhkZhrwRkKBQV2MrcixlFiN7PSvi+DwtAFTQknxqZ98GkAwmCKiF0HvEABx4ABx0c4gUgfFR/wAA+gH6AQAAAAAD6AQAA35qpj6Ca45daKEAQblbxxTu2uRu4+zgQC3iveBAfGCAcTwgQM=",
  _d = "" + new URL("../assets/arsene.r9x29lsf.webm", import.meta.url).href;
let mt, ra, oa, Pn, Mn, aa, la, ca;
["touchstart", "mousedown", "wheel"].forEach(s => {
  document.addEventListener(s, vd, {
    capture: !0,
    passive: !0,
    once: !0
  })
});

function vd(s) {
  function e(i, n) {
    const r = new XMLHttpRequest;
    r.open("GET", i, !0), r.responseType = "arraybuffer", r.onload = () => mt.decodeAudioData(r.response, n, o => console.error(o)), r.send()
  }
  if (!mt) try {
    if (mt = new(AudioContext || window.webkitAudioContext), !("decodeAudioData" in mt)) return;
    e(dd, i => {
      if (!i) return;
      let n = ei(ra = i);
      n && n.disconnect()
    }), e(md, i => oa = i), e("/discord.ogg", i => Pn = i), e(gd, i => Mn = i), e(pd, i => aa = i), e(bd, i => la = i), e(_d, i => ca = i)
  } catch {}
}

function ei(s, e, i, n = 0) {
  const r = !Ye.snapshot().mutesound || i;
  if (mt && "createBufferSource" in mt && r) {
    const o = mt.createBufferSource();
    if (o.buffer = s, o.playbackRate.value = 2 ** (n / 12), e != null) {
      const a = mt.createGain();
      a.gain.value = e, a.connect(mt.destination), o.connect(a)
    } else o.connect(mt.destination);
    return o.start(0), o
  }
}

function ir(s) {
  try {
    return localStorage.getItem(s)
  } catch {
    return
  }
}

function Fi(s, e) {
  try {
    localStorage.setItem(s, "" + e)
  } catch {}
}

function _n(s, e) {
  let i = parseFloat(ir(s));
  return Number.isNaN(i) ? e : i
}
let vn = null;
const P1 = s => {
  vn = s, s && (vn.width = innerWidth * devicePixelRatio, vn.height = innerHeight * devicePixelRatio)
};

function ua() {
  let s = Ue.state.setPieces.reduce((i, n) => i + n.length, 0),
    e = 100 * (1 - (Ue.state.groups.length - Ue.state.sets.length) / (s - 1));
  ci.update(i => (i.donePercent = e, i))
}

function ys() {
  let s = 0;
  for (const e of Ue.state.groups) e.locked && s++;
  ci.update(e => (e.lockedPiecesCount = s, e))
}

function Yi(s) {
  return "" + (+s < 10 ? "0" + ("" + s) : s)
}

function M1(s) {
  return `${Yi(s.getHours())}:${Yi(s.getMinutes())}`
}

function D1() {
  let s = Ue.roomdef.startTime,
    e = Ue.roomdef.endTime || Date.now(),
    i = s ? Math.floor(Math.max(0, e - s) / 1e3) : 0,
    n = i % 60,
    r = Math.floor(i / 60) % 60,
    o = Math.floor(i / 3600) % 24,
    a = Math.floor(i / 86400),
    c = `${Yi(r)}:${Yi(n)}`;
  (a || o) && (c = `${Yi(o)}:${c}`), a && (a === 1 ? c = a + " day " + c : c = a + " days " + c), ci.update(l => (l.timerText = c, l))
}

function Dn(s, e, i) {
  return document.createElement(s)
}
onerror = function(s, e, i, n, r) {
  `${s}${r&&r.stack}`
};
onunhandledrejection = function(s) {
  let e = s.reason;
  "" + (e && e.message, `
`) + (e && e.stack)
};

function fa(s) {
  console.error(s);
  let e = "Error occurred, reload or close to continue";
  s instanceof Event && (s.name === "NS_ERROR_FAILURE" ? e = "Error while initializing graphics, try not using a shit browser" : (s.target instanceof HTMLImageElement || s.target instanceof HTMLVideoElement) && (e = "Error while loading media, it might be deleted from the server")), jt.set({
    status: "error",
    text: e
  })
}
var Vi = (s => (s[s.None = 0] = "None", s[s.Right = 1] = "Right", s[s.Left = 2] = "Left", s[s.Down = 4] = "Down", s[s.Up = 8] = "Up", s[s.LeftClick = 16] = "LeftClick", s[s.MiddleClick = 32] = "MiddleClick", s[s.RightClick = 64] = "RightClick", s[s.CRight = 128] = "CRight", s[s.CLeft = 256] = "CLeft", s[s.CDown = 512] = "CDown", s[s.CUp = 1024] = "CUp", s))(Vi || {});
const F1 = {
  ArrowUp: 8,
  ArrowDown: 4,
  ArrowLeft: 2,
  ArrowRight: 1,
  w: 8,
  a: 2,
  s: 4,
  d: 1,
  0: 16,
  1: 32,
  2: 64
};
class Ad {
  constructor() {
    b(this, "currentKeys", 0);
    b(this, "held", 0);
    b(this, "pressed", 0);
    b(this, "released", 0)
  }
  update() {
    const e = this.currentKeys;
    this.pressed = (this.held ^ e) & e, this.released = (this.held ^ e) & this.held, this.held = e
  }
}
let as = !0,
  St = !0,
  ti = s => as = s,
  Fn = s => St = s;
class sr {
  constructor(e) {
    b(this, "imageElements");
    b(this, "scratchCanvas", document.createElement("canvas"));
    b(this, "scratchDrawingContext", this.scratchCanvas.getContext("2d"));
    b(this, "maskTextureWidth", 0);
    b(this, "maskTextureHeight", 0);
    b(this, "textureHeight", 0);
    b(this, "textureWidth", 0);
    this.game = e, this.imageElements = Array(e.roomdef.sets.length)
  }
  destroy() {
    this.imageElements = [], delete this.scratchDrawingContext, delete this.scratchCanvas
  }
  computeTextureSize(e, i) {
    const {
      wCount: r,
      hCount: o
    } = Un(this.game.roomdef.sets.length);
    let a = 0,
      c = 0;
    for (const {
        width: l,
        height: u
      }
      of e) a = Math.max(a, l), c = Math.max(c, u);
    if (i && e.length === 1) {
      const {
        width: l,
        height: u
      } = e[0];
      l < u ? (this.textureHeight = Math.min(u, 4096), this.textureWidth = Math.round(l * this.textureHeight / u)) : (this.textureWidth = Math.min(l, 4096), this.textureHeight = Math.round(u * this.textureWidth / l))
    } else this.textureWidth = Math.min(1 << a * r, 4096), this.textureHeight = Math.min(1 << c * o, 4096)
  }
  doHitTest(e, i, n) {
    return this.scratchDrawingContext.beginPath(), Ms(this.scratchDrawingContext, e.x + e.puzzleX, e.y + e.puzzleY, e.puzzle, this.game.roomdef.tabSize), this.scratchDrawingContext.isPointInPath(i, n)
  }
  initialize() {
    const e = this.scratchCanvas,
      i = this.scratchDrawingContext,
      n = this.notRestrictedToPow2Textures,
      r = Un(this.game.state.sets.length),
      o = r.wCount,
      a = r.hCount;
    this.game.view.maxPieceHeight = 0, this.game.view.maxPieceWidth = 0;
    let c = 0,
      l = 0,
      u = 0,
      f = 0;
    for (const h of this.game.state.sets) {
      const d = Math.round(h.width / h.cols),
        m = Math.round(h.height / h.rows),
        g = Math.round(.4 * Math.min(d, m)),
        p = (m + 2 * g) * h.rows,
        _ = (d + 2 * g) * h.cols;
      if (this.game.view.maxPieceWidth = Math.max(this.game.view.maxPieceWidth, d), this.game.view.maxPieceHeight = Math.max(this.game.view.maxPieceHeight, m), c + _ > 16384 && (c = 0, (l = f) + p > 16384)) throw new Error("Exceeded texture size limit");
      h.maskX = c, h.maskY = l, h.pieceWidth = d, h.pieceHeight = m, f = Math.max(f, l + p), u = Math.max(u, c + _), c += _
    }
    this.maskTextureWidth = n ? u : 1 << u, this.maskTextureHeight = n ? f : 1 << f, e.width = this.maskTextureWidth, e.height = this.maskTextureHeight, i.fillStyle = "white", i.strokeStyle = this.isGPU ? "black" : "rgba(0, 0, 0, 0.3)", i.lineWidth = 1.2, this.game.state.setPieces = [], this.game.state.sets.length > 1 && this.computeTextureSize(this.game.state.sets.map(h => ({
      width: h.imageWidth,
      height: h.imageHeight
    })), n);
    for (const [h, d] of this.game.state.sets.entries()) {
      const m = this.imageElements[h],
        g = d.pieceWidth,
        p = d.pieceHeight,
        _ = Math.round(.4 * Math.min(g, p)),
        A = g + 2 * _,
        w = p + 2 * _;
      this.isGPU && this.game.state.sets.length > 1 ? (d.tx = 1 / o * (h % 2) + 4 / this.textureWidth, d.ty = 1 / a * Math.floor(h / 2) + 4 / this.textureHeight, d.tw = 1 / o - 8 / this.textureWidth, d.th = 1 / a - 8 / this.textureHeight) : (d.tx = 1 / o * (h % 2), d.ty = 1 / a * Math.floor(h / 2), d.tw = 1 / o, d.th = 1 / a);
      const y = d.tw / d.cols,
        E = d.th / d.rows,
        z = y * (A / g),
        I = E * (w / p),
        R = -(z - y) / 2,
        k = -(I - E) / 2,
        U = A / this.maskTextureWidth,
        S = w / this.maskTextureHeight,
        v = {
          x: 0,
          y: 0
        },
        F = [];
      let M = 0;
      for (let V = 0; V < d.rows; V++)
        for (let H = 0; H < d.cols; H++, M++) {
          const {
            pieceShape: le,
            he: pe,
            ve: ne,
            fe: oe,
            ge: Y
          } = ha(F, H, V, d, g, p, v, this.game.roomdef.jitter, this.game.roomdef.fakeEdge, this.game.roomdef.zigzag);
          i.save(), i.translate(d.maskX + A * H, d.maskY + w * V), i.beginPath(), Ms(i, _, _, le, this.game.roomdef.tabSize), i.closePath(), i.fill();
          let de = 0,
            Ce = 0,
            He = 1,
            $e = 1,
            Ie = 0,
            ze = 0,
            We = 0,
            Ne = 0;
          if (this.isGPU) de = pe, Ce = ne, He = 1 - (pe + oe), $e = 1 - (ne + Y), Ie = d.tx + R + y * H + z * de, ze = d.ty + k + E * V + I * Ce, We = z * He, Ne = I * $e;
          else {
            i.globalCompositeOperation = "source-atop";
            const dt = m.width / d.cols,
              at = m.height / d.rows,
              je = Math.round(dt * (A / g)),
              Fe = Math.round(at * (w / p));
            let Se = je,
              ce = Fe,
              we = H * dt - Math.round((Se - dt) / 2),
              et = V * at - Math.round((ce - at) / 2),
              xt = 0,
              Zt = 0,
              Mt = A,
              it = w;
            if (we < 0) {
              const Qe = A * -we / je;
              Se += we, xt += Qe, Mt -= Qe, we = 0
            }
            if (we < 0) {
              const Qe = w * -et / Fe;
              ce += et, Zt += Qe, it -= Qe, et = 0
            }
            if (we + Se > m.width) {
              const Qe = m.width - (we + Se);
              Se -= Qe, Mt -= A * Qe / je
            }
            if (et + ce > m.height) {
              const Qe = m.height - (et + ce);
              ce -= Qe, it -= w * Qe / Fe
            }
            Ie = d.maskX + H * A, ze = d.maskY + V * w, We = A, Ne = w, i.drawImage(m, we, et, Se, ce, xt, Zt, Mt, it), i.globalCompositeOperation = "source-over"
          }
          i.stroke(), i.restore(), F.push({
            index: M,
            xi: H,
            yi: V,
            rot: 0,
            x: 0,
            y: 0,
            spriteX: -A / 2 + A * de,
            spriteY: -w / 2 + w * Ce,
            spriteW: A * He,
            spriteH: w * $e,
            tx: Ie,
            ty: ze,
            tw: We,
            th: Ne,
            tx2: d.maskX / this.maskTextureWidth + U * H + U * de,
            ty2: d.maskY / this.maskTextureHeight + S * V + S * Ce,
            tw2: U * He,
            th2: S * $e,
            puzzle: le,
            puzzleX: -g / 2,
            puzzleY: -p / 2,
            globalX: 0,
            globalY: 0,
            type: 0
          })
        }
      this.game.state.setPieces.push(F)
    }
  }
  uploadTextures(e) {
    for (let i = 0; i < e.length; i++) this.imageElements[i] = e[i].element;
    da = !1, this.doLoadInputImage()
  }
  async init() {
    this.initialize()
  }
}

function gi(s = 1) {
  return zt.nextInterval(-s / 10, s / 10)
}

function uo(s = 1) {
  return {
    x: gi() * s,
    y: 0
  }
}

function fo(s = 1) {
  return {
    x: 0,
    y: gi() * s
  }
}

function ha(s, e, i, n, r, o, a, c, l, u) {
  var le, pe;
  const f = s[e - 1 + i * n.cols],
    h = s[e + (i - 1) * n.cols],
    d = i === 0,
    m = e === 0,
    g = n.cols - 1 === e,
    p = n.rows - 1 === i,
    _ = m || g || d || p,
    A = !!l,
    w = gi(),
    y = gi(),
    E = .03;
  let z = !_ && A && w > E,
    I = !_ && A && y > E;
  _ || ((!h.puzzle.bottom || i === n.rows - 2) && (I = !1), (!f.puzzle.right || e === n.cols - 2) && (z = !1));
  const R = d ? void 0 : h.puzzle.bottom,
    k = p || I ? void 0 : ho(c, (le = f == null ? void 0 : f.puzzle) == null ? void 0 : le.bottom, u, m),
    U = m ? void 0 : f.puzzle.right,
    S = g || z ? void 0 : ho(c, (pe = h == null ? void 0 : h.puzzle) == null ? void 0 : pe.right),
    v = {
      width: r,
      height: o,
      top: R,
      bottom: k,
      left: U,
      right: S,
      tl: m ? d ? a : h.puzzle.bl : f.puzzle.tr,
      tr: d ? g || A ? a : uo() : h.puzzle.br,
      bl: m ? p || A ? a : fo() : f.puzzle.br,
      br: g ? p || A ? a : fo() : p ? A ? a : uo() : {
        x: A ? 0 : gi(),
        y: A ? 0 : gi()
      }
    };
  let F = (U != null && U.flip ? -1 : 1) * (.05 + (U ? .5 * U.c : 0)),
    M = (S != null && S.flip ? 1 : -1) * (.05 + (S ? .5 * S.c : 0)),
    V = (R != null && R.flip ? -1 : 1) * (.05 + (R ? .5 * R.c : 0)),
    H = (k != null && k.flip ? 1 : -1) * (.05 + (k ? .5 * k.c : 0));
  return F += (v.tl.x + v.bl.x) / 2 * .5, M -= (v.tr.x + v.br.x) / 2 * .5, V += (v.tl.y + v.tr.y) / 2 * .5, H -= (v.bl.y + v.br.y) / 2 * .5, {
    pieceShape: v,
    he: F,
    ve: V,
    fe: M,
    ge: H
  }
}

function Un(s) {
  return {
    wCount: s > 1 ? 2 : 1,
    hCount: s > 2 ? 2 : 1
  }
}
let da = !0;

function ho(s, e, i, n) {
  let r = zt.next() > .5;
  i && e && !n && (r = !e.flip);
  const o = -s,
    a = .9 * s;
  return {
    flip: r,
    a: zt.nextInterval(o, a),
    b: zt.nextInterval(o, a),
    c: zt.nextInterval(o, a),
    d: zt.nextInterval(o, a),
    e: zt.nextInterval(o, a)
  }
}

function Wt(s, e, i, n, r, o, a, c, l, u, f, h) {
  let d = !o,
    m = d ? r : n,
    g = d ? n : r,
    p = d ? i : e,
    _ = d ? e : i,
    A = c && c.flip ? -1 : 1,
    w = 0 + (d ? u.y : u.x),
    y = 0 + (d ? u.x : u.y),
    E = 1 + (d ? f.y : f.x),
    z = 0 + (d ? f.x : f.y);

  function I(U, S) {
    let v = p + U;
    return {
      l: m * (v * (E - w) + w),
      w: g * (v * (z - y) + (_ + S * A) + y)
    }
  }
  let R = I(0, 0),
    k = I(1, 0);
  if (h && s.moveTo(R.l, R.w), l && c) {
    let U = c.a,
      S = c.b,
      v = c.c,
      F = c.d,
      M = c.e,
      V = I(.2, U),
      H = I(.5 + S + F, -l + v),
      le = I(.5 - l + S, l + v),
      pe = I(.5 - 2 * l + S - F, 3 * l + v),
      ne = I(.5 + 2 * l + S - F, 3 * l + v),
      oe = I(.5 + l + S, l + v),
      Y = I(.5 + S + F, -l + v),
      de = I(.8, M);
    o ? a ? (s.bezierCurveTo(de.l, de.w, Y.l, Y.w, oe.l, oe.w), s.bezierCurveTo(ne.l, ne.w, pe.l, pe.w, le.l, le.w), s.bezierCurveTo(H.l, H.w, V.l, V.w, R.l, R.w)) : (s.bezierCurveTo(V.l, V.w, H.l, H.w, le.l, le.w), s.bezierCurveTo(pe.l, pe.w, ne.l, ne.w, oe.l, oe.w), s.bezierCurveTo(Y.l, Y.w, de.l, de.w, k.l, k.w)) : a ? (s.bezierCurveTo(de.w, de.l, Y.w, Y.l, oe.w, oe.l), s.bezierCurveTo(ne.w, ne.l, pe.w, pe.l, le.w, le.l), s.bezierCurveTo(H.w, H.l, V.w, V.l, R.w, R.l)) : (s.bezierCurveTo(V.w, V.l, H.w, H.l, le.w, le.l), s.bezierCurveTo(pe.w, pe.l, ne.w, ne.l, oe.w, oe.l), s.bezierCurveTo(Y.w, Y.l, de.w, de.l, k.w, k.l))
  } else o ? a ? s.lineTo(R.l, R.w) : s.lineTo(k.l, k.w) : a ? s.lineTo(R.w, R.l) : s.lineTo(k.w, k.l)
}

function Ms(s, e, i, n, r) {
  s.save(), s.translate(e, i), Wt(s, 0, 0, n.width, n.height, !0, !1, n.top, r, n.tl, n.tr, !0), Wt(s, 1, 0, n.width, n.height, !1, !1, n.right, r, n.tr, n.br), Wt(s, 0, 1, n.width, n.height, !0, !0, n.bottom, r, n.bl, n.br), Wt(s, 0, 0, n.width, n.height, !1, !0, n.left, r, n.tl, n.bl), s.closePath(), s.restore()
}
async function U1(s) {
  try {
    await Cg(s), da = !1
  } catch (e) {
    fa(e)
  }
}
let mo = performance.now();
const z1 = (s, e) => {
  let i, n;
  const r = () => {
    cancelAnimationFrame(i), cancelAnimationFrame(n)
  };
  return ti(!0), i = requestAnimationFrame(function o(a) {
    var h;
    const c = a - mo;
    n = requestAnimationFrame(o);
    const l = s.renderer;
    l && (l.drawingBufferWidth !== ~~(innerWidth * devicePixelRatio) || l.drawingBufferHeight !== ~~(innerHeight * devicePixelRatio)) && (e.width = innerWidth * devicePixelRatio, e.height = innerHeight * devicePixelRatio, ti(!0), (h = l.canvasSizeChanged) == null || h.call(l, e.width, e.height));
    const u = s.state.controller;
    u.update();
    const f = -1 / s.view.scale;
    if (u.held & Vi.Left && (s.view.edgePanX -= f), u.held & Vi.Right && (s.view.edgePanX += f), u.held & Vi.Up && (s.view.edgePanY -= f), u.held & Vi.Down && (s.view.edgePanY += f), s.entities.forEach(d => d.update(a, c)), s.actions.updateRenderView(c), u.held && (s.view.edgePanY = s.view.edgePanX = 0), mo = a, s.rules.canRotate()) {
      for (const d of s.state.groups)
        if (d.angle !== d.targetAngle) {
          d.dirty = !0;
          const m = .01 * c;
          d.angle < d.targetAngle ? d.angle = Math.min(d.angle + m, d.targetAngle) : d.angle = Math.max(d.angle - m, d.targetAngle)
        }
    }
    if (l) {
      try {
        l.doRender()
      } catch (d) {
        throw r(), d
      }
      as = !1, St = !1, Ye.snapshot().hidenametags || zs.drawTags(s.view.x, s.view.y, s.view.scale, s.state.groups)
    }
  }), r
};
console.log(typeof sr);
class wd extends sr {
  constructor(i, n) {
    super(i);
    b(this, "redrawRegions", []);
    b(this, "actualBoardCanvas", Dn("canvas"));
    b(this, "boardInnerDrawingContext", this.actualBoardCanvas && this.actualBoardCanvas.getContext("2d"));
    b(this, "cpucanvas3", Dn("canvas"));
    b(this, "boardOuterDrawingContext", this.cpucanvas3 && this.cpucanvas3.getContext("2d"));
    b(this, "cpuDrawingCtx2d");
    b(this, "possibletransparentbgcol", "white");
    this.canvas = n, this.cpuDrawingCtx2d = this.canvas.getContext("2d")
  }
  get drawingBufferWidth() {
    return this.canvas.width * devicePixelRatio
  }
  get drawingBufferHeight() {
    return this.canvas.height * devicePixelRatio
  }
  destroy() {
    super.destroy(), this.toggleLayoutHack()
  }
  complete() {}
  setBgCol(i) {}
  get isGPU() {
    return !1
  }
  get notRestrictedToPow2Textures() {
    return !0
  }
  schedulePartialUpdate(i) {
    const n = this.game.state.sets[i.set],
      r = n.pieceWidth,
      o = n.pieceHeight,
      a = (i.w + r) / 2,
      c = (i.h + o) / 2;
    let l, u;
    if (i.angle !== i.targetAngle) l = u = Math.sqrt(a * a + c * c);
    else {
      let f = i.rot === 1 || i.rot === 3;
      l = f ? c : a, u = f ? a : c
    }
    this.scheduleAreaRedraw(i.x - l, i.y - u, 2 * l, 2 * u)
  }
  scheduleAreaRedraw(i, n, r, o) {
    const c = this.game.view;
    let l = Math.max(Math.floor((i + c.x) * c.scale), 0),
      u = Math.max(Math.floor((n + c.y) * c.scale), 0),
      f = ut(Math.ceil((i + c.x + r) * c.scale) - l, 0, Math.max(this.canvas.width - l, 0)),
      h = ut(Math.ceil((n + c.y + o) * c.scale) - u, 0, Math.max(this.canvas.height - u, 0));
    if (!(St || f == 0 || h == 0)) {
      if (this.redrawRegions.length > 20) {
        Fn(!0), this.redrawRegions.length = 0;
        return
      }
      for (let d = 0; d < this.redrawRegions.length; d++) {
        const {
          x: m,
          y: g,
          w: p,
          h: _
        } = this.redrawRegions[d];
        if (l < m + p && l + f > m && u < g + _ && u + h > g) {
          let A = Math.min(l, m);
          f = Math.max(l + f, m + p) - A;
          let w = Math.min(u, g);
          h = Math.max(u + h, g + _) - w, l = A, u = w, this.redrawRegions[d] = this.redrawRegions[this.redrawRegions.length - 1], this.redrawRegions.length--, d = -1
        }
      }
      this.redrawRegions.push({
        x: l,
        y: u,
        w: f,
        h
      })
    }
  }
  toggleLayoutHack() {
    this.canvas instanceof HTMLCanvasElement && (this.canvas.classList.toggle("size-full"), document.body.classList.toggle("overflow-hidden"))
  }
  initialize() {
    super.initialize(), this.toggleLayoutHack()
  }
  doRender() {
    const {
      state: i,
      view: n
    } = this.game;
    this.actualBoardCanvas && (this.canvas.width === this.actualBoardCanvas.width && this.canvas.height === this.actualBoardCanvas.height || (this.actualBoardCanvas.width = this.canvas.width, this.actualBoardCanvas.height = this.canvas.height, Fn(!0)));
    const r = this.cpuDrawingCtx2d;
    if (!St) {
      this.redrawRegions.length = 0;
      for (const c of i.groups) c.dirty && (St || this.schedulePartialUpdate(c), c.dirty = !1)
    }
    if (!St && !as && !this.redrawRegions.length || (St && (this.redrawRegions.length = 0, this.redrawRegions.push({
        x: 0,
        y: 0,
        w: this.canvas.width,
        h: this.canvas.height
      })), !this.cpucanvas3 || !this.boardOuterDrawingContext || !this.boardInnerDrawingContext || !this.actualBoardCanvas)) return;
    for (const c of this.redrawRegions) {
      this.cpucanvas3.width = c.w, this.cpucanvas3.height = c.h, this.boardOuterDrawingContext.fillStyle = "#191919", this.boardOuterDrawingContext.fillRect(0, 0, c.w, c.h), this.boardOuterDrawingContext.save(), this.boardOuterDrawingContext.translate(-c.x, -c.y), this.boardOuterDrawingContext.scale(n.scale, n.scale), this.boardOuterDrawingContext.fillStyle = Ye.snapshot().savedbgcol, this.boardOuterDrawingContext.fillRect(n.x, n.y, n.boardWidth, n.boardHeight), this.boardOuterDrawingContext.lineWidth = 5 / n.scale, this.boardOuterDrawingContext.strokeStyle = this.possibletransparentbgcol = "white";
      const l = c.x / n.scale,
        u = c.y / n.scale,
        f = l + c.w / n.scale,
        h = u + c.h / n.scale;
      for (const d of i.groups) d.dragged || d.user || this.drawPiecesCPU(this.boardOuterDrawingContext, d, l, u, f, h);
      this.boardOuterDrawingContext.restore(), this.boardInnerDrawingContext.drawImage(this.cpucanvas3, c.x, c.y)
    }
    this.redrawRegions.length = 0, r.drawImage(this.actualBoardCanvas, 0, 0), r.save(), r.scale(n.scale, n.scale), r.lineWidth = 5 / n.scale, r.strokeStyle = this.possibletransparentbgcol = "white";
    const o = this.canvas.width / n.scale,
      a = this.canvas.height / n.scale;
    for (const c of i.groups) c.user && this.drawPiecesCPU(r, c, 0, 0, o, a);
    for (const c of n.pickedGroups) this.drawPiecesCPU(r, c, 0, 0, o, a);
    r.restore(), n.isBoxSelecting && n.selection[1][0] && n.selection[1][1] && (r.save(), r.fillStyle = "rgba(255, 255, 255, 0.2)", r.scale(n.scale, n.scale), r.fillRect(n.selection[0][0] + n.x, n.selection[0][1] + n.y, n.selection[1][0], n.selection[1][1]), r.restore())
  }
  doLoadInputImage() {}
  drawPiecesCPU(i, n, r, o, a, c) {
    const {
      state: l,
      view: u,
      rules: f
    } = this.game;
    let h, d;
    const m = l.sets[n.set],
      g = n.x + u.x,
      p = n.y + u.y,
      _ = (n.w + m.pieceWidth) / 2,
      A = (n.h + m.pieceHeight) / 2;
    if (n.angle !== n.targetAngle) h = d = Math.sqrt(_ * _ + A * A);
    else {
      const y = n.rot === 1 || n.rot === 3;
      h = y ? A : _, d = y ? _ : A
    }
    if (g - h > a || p - d > c || g + h < r || p + d < o) return;
    const w = !n.dragged && n.user || n.selected;
    if (w) {
      const y = n.user ? n.user.color : "white";
      this.possibletransparentbgcol !== y && (i.strokeStyle = this.possibletransparentbgcol = y)
    }
    if (i.save(), i.translate(g, p), i.rotate(n.angle), w) {
      i.beginPath();
      for (const y of n.pieces) {
        if (!f.canRotate()) {
          const E = g + y.x + y.spriteX,
            z = p + y.y + y.spriteY;
          if (E > a || z > c || E + y.spriteW < r || z + y.spriteH < o) continue
        }
        Ms(i, y.x + y.puzzleX, y.y + y.puzzleY, y.puzzle, this.game.roomdef.tabSize)
      }
      i.stroke()
    }
    if (l.isGameEnded()) {
      const y = this.imageElements[n.set];
      i.drawImage(this.imageElements[n.set], 0, 0, y.naturalWidth, y.naturalHeight, -n.w / 2, -n.h / 2, n.w, n.h)
    } else
      for (const y of n.pieces) {
        if (!f.canRotate()) {
          const E = g + y.x + y.spriteX,
            z = p + y.y + y.spriteY;
          if (E > a || z > c || E + y.spriteW < r || z + y.spriteH < o) continue
        }
        i.drawImage(this.scratchCanvas, y.tx, y.ty, y.tw, y.th, y.x + y.spriteX, y.y + y.spriteY, y.spriteW, y.spriteH)
      }
    i.restore()
  }
}
const yd = `precision mediump float;
attribute vec2 position;
attribute vec4 texCoord;
attribute vec4 vertexColor;

uniform mat4 transform;
uniform vec2 shadowOffset;

varying vec4 vTexCoord;
varying vec2 vColor;
varying vec2 vShadowOffset;

void main() {
  vTexCoord = texCoord;
  vColor = vertexColor.xy;

  float angle = -vertexColor.z;
  float cosa = cos(angle);
  float sina = sin(angle);
  vec2 s = shadowOffset;
  vShadowOffset = vec2(cosa * s.x - sina * s.y, sina * s.x + cosa * s.y);

  gl_Position = transform * vec4(position, 0, 1);
}`,
  Ed = `precision mediump float;

uniform sampler2D sampler1;
uniform sampler2D sampler2;
uniform sampler2D sampler3;

uniform float viewScale;
uniform vec2 shadowSpread;
uniform vec4 highlightColor;
uniform float borderOpacity;

varying vec4 vTexCoord;
varying vec2 vColor;
varying vec2 vShadowOffset;

void main() {
  vec4 image = texture2D(sampler1, vTexCoord.xy);
  vec4 mask = texture2D(sampler2, vTexCoord.zw);
  vec4 mask2 = texture2D(sampler2, vTexCoord.zw, 1.0 * viewScale);
  if (borderOpacity > 0.5)
    image.rgb *=
        min((mask.a * 0.33 + mask2.a * 0.66) + (1.0 - viewScale) * 0.1, 1.0);
  image *= mask.a * vColor.x;

  if ((vColor.x + vColor.y) == 0.0) {
    if (mask.a == 1.0) {
      gl_FragColor = vec4(0);
      return;
    }

    vec2 sd = shadowSpread * 0.2;
    float a1 = texture2D(sampler2, vTexCoord.zw + vec2(0, -sd.y)).a;
    float a2 = texture2D(sampler2, vTexCoord.zw + vec2(sd.x, 0)).a;
    float a3 = texture2D(sampler2, vTexCoord.zw + vec2(0, sd.y)).a;
    float a4 = texture2D(sampler2, vTexCoord.zw + vec2(-sd.x, 0)).a;
    float b1 = texture2D(sampler2, vTexCoord.zw + vec2(-sd.x, -sd.y)).a * 0.75;
    float b2 = texture2D(sampler2, vTexCoord.zw + vec2(sd.x, sd.y)).a * 0.75;
    float b3 = texture2D(sampler2, vTexCoord.zw + vec2(-sd.x, sd.y)).a * 0.75;
    float b4 = texture2D(sampler2, vTexCoord.zw + vec2(sd.x, -sd.y)).a * 0.75;
    gl_FragColor =
        highlightColor * max(mask.a, max(max(max(a1, a2), max(a3, a4)),
                                         max(max(b1, b2), max(b3, b4))));
    return;
  }

  float shadow = 0.0;

  if (mask.a != 1.0 && vColor.y > 0.0) {
    shadow = texture2D(sampler3, vTexCoord.zw + vShadowOffset).r * vColor.y *
             (1.0 - image.a);
  }

  gl_FragColor = vec4(0, 0, 0, shadow) + image;
}`,
  kd = `attribute vec2 position;
attribute vec4 texCoord;
attribute vec4 vertexColor;

uniform mat4 transform;
varying vec4 vColor;

void main() {
  vColor = vertexColor;
  gl_Position = transform * vec4(position, 0, 1);
}`,
  Td = `precision mediump float;

varying vec4 vColor;

void main() { gl_FragColor = vColor; }`,
  xd = `attribute vec2 position;
attribute vec4 texCoord;

varying vec2 vTexCoord;

void main() {
  vTexCoord = texCoord.xy;
  gl_Position = vec4(position, 0, 1);
}`,
  Rd = `precision mediump float;

uniform sampler2D sampler1;

uniform vec2 shadowOffset;
uniform vec2 shadowSpread;

varying vec2 vTexCoord;

void main() {
  vec2 shadowOff = vTexCoord - shadowOffset;
  vec2 sd = shadowSpread;
  vec2 sd2 = shadowSpread * 2.0;
  float bias = 1.0;

  float shadow = 0.0;

  shadow += texture2D(sampler1, shadowOff, bias).a * 0.15018315018315018;

  shadow += texture2D(sampler1, shadowOff + vec2(0, -sd.y), bias).a * 0.0952380;
  shadow += texture2D(sampler1, shadowOff + vec2(sd.x, 0), bias).a * 0.0952380;
  shadow += texture2D(sampler1, shadowOff + vec2(0, sd.y), bias).a * 0.0952380;
  shadow += texture2D(sampler1, shadowOff + vec2(-sd.x, 0), bias).a * 0.0952380;

  shadow += texture2D(sampler1, shadowOff + vec2(-sd.x, -sd.y), bias).a * 0.0586080;
  shadow += texture2D(sampler1, shadowOff + vec2(sd.x, sd.y), bias).a * 0.0586080;
  shadow += texture2D(sampler1, shadowOff + vec2(-sd.x, sd.y), bias).a * 0.0586080;
  shadow += texture2D(sampler1, shadowOff + vec2(sd.x, -sd.y), bias).a * 0.0586080;

  shadow += texture2D(sampler1, shadowOff + vec2(0, -sd2.y), bias).a * 0.0256410;
  shadow += texture2D(sampler1, shadowOff + vec2(sd2.x, 0), bias).a * 0.0256410;
  shadow += texture2D(sampler1, shadowOff + vec2(0, sd2.y), bias).a * 0.0256410;
  shadow += texture2D(sampler1, shadowOff + vec2(-sd2.x, 0), bias).a * 0.0256410;

  shadow += texture2D(sampler1, shadowOff + vec2(-sd2.x, -sd.y), bias).a * 0.01465201;
  shadow += texture2D(sampler1, shadowOff + vec2(sd2.x, sd.y), bias).a * 0.01465201;
  shadow += texture2D(sampler1, shadowOff + vec2(-sd2.x, sd.y), bias).a * 0.01465201;
  shadow += texture2D(sampler1, shadowOff + vec2(sd2.x, -sd.y), bias).a * 0.01465201;
  shadow += texture2D(sampler1, shadowOff + vec2(-sd.x, -sd2.y), bias).a * 0.01465201;
  shadow += texture2D(sampler1, shadowOff + vec2(sd.x, sd2.y), bias).a * 0.01465201;
  shadow += texture2D(sampler1, shadowOff + vec2(-sd.x, sd2.y), bias).a * 0.01465201;
  shadow += texture2D(sampler1, shadowOff + vec2(sd.x, -sd2.y), bias).a * 0.01465201;

  shadow += texture2D(sampler1, shadowOff + vec2(-sd2.x, -sd2.y), bias).a * 0.00366300;
  shadow += texture2D(sampler1, shadowOff + vec2(sd2.x, sd2.y), bias).a * 0.00366300;
  shadow += texture2D(sampler1, shadowOff + vec2(-sd2.x, sd2.y), bias).a * 0.00366300;
  shadow += texture2D(sampler1, shadowOff + vec2(sd2.x, -sd2.y), bias).a * 0.00366300;
  gl_FragColor = vec4(shadow);
}`;

function Ds(s, e, i) {
  if (!s) throw new Error("GPU rendering is disabled");
  const n = s.createShader(e);
  if (!n) throw new Error("Failed to create shader");
  s.shaderSource(n, i), s.compileShader(n);
  const r = s.getShaderInfoLog(n);
  if (r && console.warn(`${r}
${e==s.VERTEX_SHADER?"Vertex":"Fragment"} Shader:
${ql(i)}`), !s.getShaderParameter(n, s.COMPILE_STATUS)) throw new Error("Shader compilation failed.");
  return n
}

function An(s, e) {
  const i = Ds(s, s.VERTEX_SHADER, e.vertex),
    n = Ds(s, s.FRAGMENT_SHADER, e.fragment);
  if (!s) return;
  const r = s.createProgram();
  if (!r) throw new Error("Failed to create program");
  s.attachShader(r, i), s.attachShader(r, n), s.bindAttribLocation(r, 0, "position"), s.bindAttribLocation(r, 1, "texcoords"), s.bindAttribLocation(r, 2, "vertexColor"), s.linkProgram(r);
  const o = s.getProgramInfoLog(r);
  if (o && console.warn(o), !s.getProgramParameter(r, s.LINK_STATUS)) throw new Error("Shader linking failed.");
  s.deleteShader(i), s.deleteShader(n), s.useProgram(r);
  const a = {},
    c = [],
    l = (e.vertex + `
` + e.fragment).match(/uniform [a-z0-9_]+ [a-z_][a-z0-9_]*/gi) || [];
  for (const u of l) {
    const [, f, h] = u.split(" "), d = s.getUniformLocation(r, h);
    d && (a[h] = d, f === "sampler2D" && c.push(h))
  }
  return c.sort().forEach((u, f) => s.uniform1i(a[u], f)), {
    program: r,
    uniforms: a
  }
}
let lt, mi, Hi;
const Cd = s => {
  lt = An(s, {
    vertex: yd,
    fragment: Ed
  }), mi = An(s, {
    vertex: kd,
    fragment: Td
  }), Hi = An(s, {
    vertex: xd,
    fragment: Rd
  })
};

function bs(s) {
  let e = s.createTexture();
  if (!e) throw new Error("Failed to create texture");
  return e
}
const go = [1.5, 1.5, 1.5, 1.5];
class Sd extends sr {
  constructor(i, n) {
    super(i);
    b(this, "bgcolorasnum", Ki(Ye.snapshot().savedbgcol));
    b(this, "scaledViewWidth", 1);
    b(this, "scaledViewHeight", 1);
    b(this, "gpucontext", null);
    b(this, "isWebGL2", !1);
    b(this, "realImage", null);
    b(this, "maskTexture", null);
    b(this, "xt", null);
    b(this, "previousSelecter");
    b(this, "initialMatrix", new Float32Array([111, 0, 0, 0, 0, 222, 0, 0, 0, 0, 1, 0, -1, 1, 0, 1]));
    b(this, "transformMat2d", new Float32Array([1, 0, 0, 1, 0, 0]));
    b(this, "currentFrameBuffer", null);
    b(this, "imageLoaded", !1);
    b(this, "gt");
    const r = {
      alpha: !1,
      antialias: !1,
      desynchronized: !0,
      preserveDrawingBuffer: !0
    };
    this.gpucontext = n.getContext("webgl2", r), this.isWebGL2 = !!this.gpucontext, this.gpucontext ?? (this.gpucontext = n.getContext("webgl", r)), n instanceof HTMLCanvasElement && (this.gpucontext ?? (this.gpucontext = n.getContext("experimental-webgl", r)), this.gpucontext.pixelStorei(this.gpucontext.UNPACK_ALIGNMENT, 1)), Cd(this.gpucontext), this.gt = (() => {
      const c = new Uint16Array(49152),
        l = new Float32Array(4 * 8192 * 10);
      for (let f = 0, h = 0; f < c.length; h = h + 4 | 0) c[f++] = h + 0 | 0, c[f++] = h + 1 | 0, c[f++] = h + 2 | 0, c[f++] = h + 0 | 0, c[f++] = h + 2 | 0, c[f++] = h + 3 | 0;
      const u = this.gpucontext.createBuffer();
      return this.gpucontext.bindBuffer(this.gpucontext.ELEMENT_ARRAY_BUFFER, u), this.gpucontext.bufferData(this.gpucontext.ELEMENT_ARRAY_BUFFER, c, this.gpucontext.STATIC_DRAW), this.gpucontext.bindBuffer(this.gpucontext.ELEMENT_ARRAY_BUFFER, null), {
        vertices: l,
        indexBuffer: u,
        buffers: [],
        currentBuffer: 0,
        index: 0,
        count: 0,
        capacity: 8192
      }
    })()
  }
  get drawingBufferWidth() {
    var i;
    return ((i = this.gpucontext) == null ? void 0 : i.drawingBufferWidth) || 0
  }
  get drawingBufferHeight() {
    var i;
    return ((i = this.gpucontext) == null ? void 0 : i.drawingBufferHeight) || 0
  }
  complete() {
    this.gpucontext.finish()
  }
  setBgCol(i) {
    this.bgcolorasnum = Ki(i)
  }
  get isGPU() {
    return !0
  }
  get notRestrictedToPow2Textures() {
    return this.isWebGL2
  }
  doRender() {
    const {
      state: i,
      view: n
    } = this.game;
    if (this.scaledViewWidth = innerWidth / n.scale, this.scaledViewHeight = innerHeight / n.scale, this.gpucontext && this.gt && mi && lt) {
      this.gt.currentBuffer = 0, as || chrome && (this.gpucontext.enable(this.gpucontext.SCISSOR_TEST), this.gpucontext.scissor(0, 0, 1, 1), this.gpucontext.activeTexture(this.gpucontext.TEXTURE0), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.realImage), this.gpucontext.activeTexture(this.gpucontext.TEXTURE1), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.maskTexture), this.gpucontext.activeTexture(this.gpucontext.TEXTURE2), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.xt), this.gpucontext.useProgram(lt.program), this.setupVertexBuffer(this.gt, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0), this.executeDrawingCommands(this.gt), this.gpucontext.activeTexture(this.gpucontext.TEXTURE2), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), this.gpucontext.activeTexture(this.gpucontext.TEXTURE1), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), this.gpucontext.activeTexture(this.gpucontext.TEXTURE0), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), this.gpucontext.disable(this.gpucontext.SCISSOR_TEST)), this.initialMatrix[0] = n.scale * (2 / (this.gpucontext.drawingBufferWidth / devicePixelRatio)), this.initialMatrix[5] = n.scale * (-2 / (this.gpucontext.drawingBufferHeight / devicePixelRatio)), this.gpucontext.viewport(0, 0, this.gpucontext.drawingBufferWidth, this.gpucontext.drawingBufferHeight), this.gpucontext.clearColor(.1, .1, .1, 1), this.gpucontext.clear(this.gpucontext.COLOR_BUFFER_BIT), this.gpucontext.enable(this.gpucontext.BLEND), this.gpucontext.blendEquation(this.gpucontext.FUNC_ADD), this.gpucontext.blendFunc(this.gpucontext.ONE, this.gpucontext.ONE_MINUS_SRC_ALPHA), this.gpucontext.useProgram(mi.program), this.gpucontext.uniformMatrix4fv(mi.uniforms.transform, !1, this.initialMatrix), this.setupVertexBuffer(this.gt, n.x, n.y, n.boardWidth, n.boardHeight, 0, 0, 0, 0, 0, 0, 0, 0, this.bgcolorasnum[0], this.bgcolorasnum[1], this.bgcolorasnum[2], 1), this.executeDrawingCommands(this.gt), this.gpucontext.activeTexture(this.gpucontext.TEXTURE0), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.realImage), this.gpucontext.activeTexture(this.gpucontext.TEXTURE1), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.maskTexture), this.gpucontext.activeTexture(this.gpucontext.TEXTURE2), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.xt), this.gpucontext.useProgram(lt.program), this.gpucontext.uniformMatrix4fv(lt.uniforms.transform, !1, this.initialMatrix), this.gpucontext.uniform1f(lt.uniforms.viewScale, n.scale), this.gpucontext.uniform2f(lt.uniforms.shadowOffset, -3 / this.maskTextureWidth, -3 / this.maskTextureHeight), this.gpucontext.uniform2f(lt.uniforms.shadowSpread, 10 / this.maskTextureWidth / n.scale, 10 / this.maskTextureHeight / n.scale), this.gpucontext.uniform1f(lt.uniforms.borderOpacity, n.borderOpacity), this.updateUniformColor(lt.uniforms.highlightColor, this.previousSelecter = go);
      for (const r of i.groups) r.dragged || this.updateGroup(r);
      for (const r of n.pickedGroups) this.updateGroup(r);
      if (this.transformMat2d[0] = 1, this.transformMat2d[1] = 0, this.transformMat2d[2] = 0, this.transformMat2d[3] = 1, this.transformMat2d[4] = 0, this.transformMat2d[5] = 0, this.executeDrawingCommands(this.gt), this.gpucontext.activeTexture(this.gpucontext.TEXTURE2), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), this.gpucontext.activeTexture(this.gpucontext.TEXTURE1), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), this.gpucontext.activeTexture(this.gpucontext.TEXTURE0), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), n.isBoxSelecting && n.selection[1][0] && n.selection[1][1]) {
        this.gpucontext.useProgram(mi.program), this.gpucontext.uniformMatrix4fv(mi.uniforms.transform, !1, this.initialMatrix);
        let r = .2;
        this.setupVertexBuffer(this.gt, n.selection[0][0] + n.x, n.selection[0][1] + n.y, n.selection[1][0], n.selection[1][1], 0, 0, 0, 0, 0, 0, 0, 0, r, r, r, r), this.executeDrawingCommands(this.gt)
      }
    }
  }
  doLoadInputImage() {
    if (!this.gpucontext) throw new Error("GPU rendering is disabled");
    this.imageLoaded = !0;
    const i = this.imageElements.length > 1,
      {
        wCount: n,
        hCount: r
      } = Un(this.game.roomdef.sets.length);
    this.computeTextureSize(this.imageElements, this.notRestrictedToPow2Textures), this.scratchCanvas.width = this.textureWidth, this.scratchCanvas.height = this.textureHeight, this.scratchDrawingContext.fillStyle = "white", this.scratchDrawingContext.fillRect(0, 0, this.scratchCanvas.width, this.scratchCanvas.height), this.imageElements.forEach((o, a) => {
      if (i) {
        const l = this.textureWidth / n,
          u = this.textureHeight / r,
          f = l - 8,
          h = u - 8,
          d = l * (a % 2),
          m = u * Math.floor(a / 2);
        this.scratchDrawingContext.drawImage(o, 0, 0, 1, 1, d, m, 8 / 2, 8 / 2), this.scratchDrawingContext.drawImage(o, o.width - 1, 0, 1, 1, d + f + 8 / 2, m, 8 / 2, 8 / 2), this.scratchDrawingContext.drawImage(o, 0, o.height - 1, 1, 1, d, m + h + 8 / 2, 8 / 2, 8 / 2), this.scratchDrawingContext.drawImage(o, o.width - 1, o.height - 1, 1, 1, d + f + 8 / 2, m + h + 8 / 2, 8 / 2, 8 / 2), this.scratchDrawingContext.drawImage(o, 0, 0, 1, o.height, d, m + 8 / 2, 8 / 2, h), this.scratchDrawingContext.drawImage(o, o.width - 1, 0, 1, o.height, d + f + 8 / 2, m + 8 / 2, 8 / 2, h), this.scratchDrawingContext.drawImage(o, 0, 0, o.width, 1, d + 8 / 2, m, f, 8 / 2), this.scratchDrawingContext.drawImage(o, 0, o.height - 1, o.width, 1, d + 8 / 2, m + h + 8 / 2, f, 8 / 2), this.scratchDrawingContext.drawImage(o, 0, 0, o.width, o.height, d + 8 / 2, m + 8 / 2, f, h)
      } else {
        const c = this.textureWidth / n,
          l = this.textureHeight / r,
          u = c * (a % 2),
          f = l * Math.floor(a / 2);
        this.scratchDrawingContext.drawImage(o, 0, 0, o.width, o.height, u, f, c, l)
      }
    }), this.realImage = this.realImage || bs(this.gpucontext), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.realImage), this.gpucontext.texImage2D(this.gpucontext.TEXTURE_2D, 0, this.gpucontext.RGB, this.gpucontext.RGB, this.gpucontext.UNSIGNED_BYTE, this.scratchCanvas), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_MAG_FILTER, this.gpucontext.LINEAR), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_MIN_FILTER, this.gpucontext.LINEAR_MIPMAP_LINEAR), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_WRAP_S, this.gpucontext.CLAMP_TO_EDGE), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_WRAP_T, this.gpucontext.CLAMP_TO_EDGE), this.gpucontext.generateMipmap(this.gpucontext.TEXTURE_2D), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), ti(!0)
  }
  destroy() {
    var i, n, r, o, a;
    super.destroy(), this.currentFrameBuffer, (i = this.gpucontext) == null || i.deleteFramebuffer(this.currentFrameBuffer), (n = this.gpucontext) == null || n.deleteTexture(this.maskTexture), (r = this.gpucontext) == null || r.deleteTexture(this.xt), (o = this.gpucontext) == null || o.deleteTexture(this.realImage), this.gt.buffers.forEach(c => {
      var l;
      (l = this.gpucontext) == null || l.deleteBuffer(c)
    }), (a = this.gpucontext) == null || a.deleteBuffer(this.gt.indexBuffer), delete this.gt.vertices, delete this.gt, delete this.gpucontext
  }
  initialize() {
    if (super.initialize(), !this.gpucontext) throw new Error("GPU rendering is disabled");
    document.hidden && this.scratchDrawingContext.getImageData(0, 0, 1, 1), this.maskTexture = this.maskTexture || bs(this.gpucontext), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.maskTexture), this.gpucontext.texImage2D(this.gpucontext.TEXTURE_2D, 0, this.gpucontext.ALPHA, this.gpucontext.ALPHA, this.gpucontext.UNSIGNED_BYTE, this.scratchCanvas), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_MAG_FILTER, this.gpucontext.LINEAR), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_MIN_FILTER, this.gpucontext.LINEAR_MIPMAP_LINEAR), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_WRAP_S, this.gpucontext.CLAMP_TO_EDGE), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_WRAP_T, this.gpucontext.CLAMP_TO_EDGE), this.gpucontext.generateMipmap(this.gpucontext.TEXTURE_2D);
    let i = Math.round(this.maskTextureWidth / 2),
      n = Math.round(this.maskTextureHeight / 2);
    if (this.currentFrameBuffer = this.gpucontext.createFramebuffer(), this.xt = this.xt || bs(this.gpucontext), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.xt), this.isWebGL2 ? this.gpucontext.texImage2D(this.gpucontext.TEXTURE_2D, 0, this.gpucontext.R8, i, n, 0, this.gpucontext.RED, this.gpucontext.UNSIGNED_BYTE, null) : this.gpucontext.texImage2D(this.gpucontext.TEXTURE_2D, 0, this.gpucontext.RGBA, i, n, 0, this.gpucontext.RGBA, this.gpucontext.UNSIGNED_BYTE, null), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_MAG_FILTER, this.gpucontext.LINEAR), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_MIN_FILTER, this.gpucontext.LINEAR_MIPMAP_LINEAR), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_WRAP_S, this.gpucontext.CLAMP_TO_EDGE), this.gpucontext.texParameteri(this.gpucontext.TEXTURE_2D, this.gpucontext.TEXTURE_WRAP_T, this.gpucontext.CLAMP_TO_EDGE), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), this.currentFrameBuffer && Hi && this.gt && (this.gpucontext.bindFramebuffer(this.gpucontext.FRAMEBUFFER, this.currentFrameBuffer), this.gpucontext.framebufferTexture2D(this.gpucontext.FRAMEBUFFER, this.gpucontext.COLOR_ATTACHMENT0, this.gpucontext.TEXTURE_2D, this.xt, 0), this.gpucontext.viewport(0, 0, i, n), this.gpucontext.clearColor(0, 0, 0, 0), this.gpucontext.clear(this.gpucontext.COLOR_BUFFER_BIT), this.gpucontext.useProgram(Hi.program), this.gpucontext.uniform2f(Hi.uniforms.shadowOffset, 0, 0), this.gpucontext.uniform2f(Hi.uniforms.shadowSpread, 5 / this.maskTextureWidth, 5 / this.maskTextureHeight), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.maskTexture), this.setupVertexBuffer(this.gt, -1, -1, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0), this.executeDrawingCommands(this.gt), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null), this.gpucontext.framebufferTexture2D(this.gpucontext.FRAMEBUFFER, this.gpucontext.COLOR_ATTACHMENT0, this.gpucontext.TEXTURE_2D, null, 0), this.gpucontext.bindFramebuffer(this.gpucontext.FRAMEBUFFER, null), this.gpucontext.deleteFramebuffer(this.currentFrameBuffer), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.xt), this.gpucontext.generateMipmap(this.gpucontext.TEXTURE_2D), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null)), !this.imageLoaded) {
      let r = new Uint8Array([220, 220, 220, 255]);
      this.realImage || (this.realImage = bs(this.gpucontext), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, this.realImage), this.gpucontext.texImage2D(this.gpucontext.TEXTURE_2D, 0, this.gpucontext.RGB, 1, 1, 0, this.gpucontext.RGB, this.gpucontext.UNSIGNED_BYTE, r), this.gpucontext.bindTexture(this.gpucontext.TEXTURE_2D, null))
    }
    this.scratchCanvas.width = 500, this.scratchCanvas.height = 500
  }
  setupVertex(i, n, r, o, a, c, l, u, f, h, d, m) {
    i[n + 0 | 0] = r * this.transformMat2d[0] + o * this.transformMat2d[2] + this.transformMat2d[4], i[n + 1 | 0] = r * this.transformMat2d[1] + o * this.transformMat2d[3] + this.transformMat2d[5], i[n + 2 | 0] = a, i[n + 3 | 0] = c, i[n + 4 | 0] = l, i[n + 5 | 0] = u, i[n + 6 | 0] = f, i[n + 7 | 0] = h, i[n + 8 | 0] = d, i[n + 9 | 0] = m
  }
  setupVertexBuffer(i, n, r, o, a, c, l, u, f, h, d, m, g, p, _, A, w) {
    i.count >= i.capacity && this.executeDrawingCommands(i);
    const y = i.vertices,
      E = i.index,
      z = n + o,
      I = r + a,
      R = c + u,
      k = l + f,
      U = h + m,
      S = d + g;
    this.setupVertex(y, E + 0 | 0, n, r, c, l, h, d, p, _, A, w), this.setupVertex(y, E + 10 | 0, z, r, R, l, U, d, p, _, A, w), this.setupVertex(y, E + 20 | 0, z, I, R, k, U, S, p, _, A, w), this.setupVertex(y, E + 30 | 0, n, I, c, k, h, S, p, _, A, w), i.count++, i.index += 40
  }
  setupPieceGeometry(i, n, r, o) {
    this.gt && this.setupVertexBuffer(this.gt, i.x + i.spriteX, i.y + i.spriteY, i.spriteW, i.spriteH, i.tx, i.ty, i.tw, i.th, i.tx2, i.ty2, i.tw2, i.th2, n, r, o, 0)
  }
  updateUniformColor(i, [n, r, o, a]) {
    this.gpucontext.uniform4f(i, n, r, o, a)
  }
  executeDrawingCommands(i) {
    if (!this.gpucontext) throw new Error("GPU rendering is disabled");
    if (i.count) {
      if (i.buffers.length <= i.currentBuffer) {
        let n = this.gpucontext.createBuffer();
        this.gpucontext.bindBuffer(this.gpucontext.ARRAY_BUFFER, n), this.gpucontext.bufferData(this.gpucontext.ARRAY_BUFFER, i.vertices.byteLength, this.gpucontext.DYNAMIC_DRAW), i.buffers.push(n)
      }
      this.gpucontext.bindBuffer(this.gpucontext.ARRAY_BUFFER, i.buffers[i.currentBuffer]), this.gpucontext.bindBuffer(this.gpucontext.ELEMENT_ARRAY_BUFFER, i.indexBuffer), this.gpucontext.bufferSubData(this.gpucontext.ARRAY_BUFFER, 0, i.vertices.subarray(0, i.index)), this.gpucontext.enableVertexAttribArray(0), this.gpucontext.enableVertexAttribArray(1), this.gpucontext.enableVertexAttribArray(2), this.gpucontext.vertexAttribPointer(0, 2, this.gpucontext.FLOAT, !1, 40, 0), this.gpucontext.vertexAttribPointer(1, 4, this.gpucontext.FLOAT, !1, 40, 8), this.gpucontext.vertexAttribPointer(2, 4, this.gpucontext.FLOAT, !1, 40, 24), this.gpucontext.drawElements(this.gpucontext.TRIANGLES, 6 * i.count, this.gpucontext.UNSIGNED_SHORT, 0), this.gpucontext.bindBuffer(this.gpucontext.ARRAY_BUFFER, null), this.gpucontext.bindBuffer(this.gpucontext.ELEMENT_ARRAY_BUFFER, null), i.index = 0, i.count = 0, i.currentBuffer++
    }
  }
  updateGroup(i) {
    var m;
    const {
      state: n,
      view: r
    } = this.game;
    let o = n.sets[i.set],
      a = o.pieceWidth,
      c = o.pieceHeight,
      l = i.x + r.x,
      u = i.y + r.y,
      f = (i.w + a) / 2,
      h = (i.h + c) / 2,
      d = !1;
    if ((i.rot || 0) & 1 ? d = !(l - h > this.scaledViewWidth || u - f > this.scaledViewHeight || l + h < 0 || u + f < 0) : d = !(l - f > this.scaledViewWidth || u - h > this.scaledViewHeight || l + f < 0 || u + h < 0), d) {
      let g = i.angle,
        p = (i.dragged || i.user ? .7 : .4) * ut(a / 100, .1, 1),
        _ = Math.sin(g),
        A = Math.cos(g);
      this.transformMat2d[0] = A, this.transformMat2d[1] = _, this.transformMat2d[2] = -_, this.transformMat2d[3] = A, this.transformMat2d[4] = l, this.transformMat2d[5] = u;
      for (const w of i.pieces) this.setupPieceGeometry(w, 0, p, g);
      if (!i.dragged && i.user || i.selected) {
        let w = i.selected ? go : (m = i.user) == null ? void 0 : m.highlight;
        this.previousSelecter !== w && lt && this.gt && (this.executeDrawingCommands(this.gt), this.previousSelecter = w, this.updateUniformColor(lt.uniforms.highlightColor, this.previousSelecter));
        for (const y of i.pieces) this.setupPieceGeometry(y, 0, 0, g)
      }
      for (let w = 0, y = i.pieces; w < y.length; w++) this.setupPieceGeometry(y[w], 1, 0, g)
    }
  }
}

function Pd(s, e, i = 2) {
  const n = s.length;
  let r = Md(s, 0, n, i, !0);
  const o = [];
  if (!r || r.next === r.prev) return o;
  let a, c, l;
  if (s.length > 80 * i) {
    a = 1 / 0, c = 1 / 0;
    let u = -1 / 0,
      f = -1 / 0;
    for (let h = i; h < n; h += i) {
      const d = s[h],
        m = s[h + 1];
      d < a && (a = d), m < c && (c = m), d > u && (u = d), m > f && (f = m)
    }
    l = Math.max(u - a, f - c), l = l !== 0 ? 32767 / l : 0
  }
  return $i(r, o, i, a, c, l, 0), o
}

function Md(s, e, i, n, r) {
  let o;
  if (r === Vd(s, e, i, n) > 0)
    for (let a = e; a < i; a += n) o = po(a / n | 0, s[a], s[a + 1], o);
  else
    for (let a = i - n; a >= e; a -= n) o = po(a / n | 0, s[a], s[a + 1], o);
  return o && ln(o, o.next) && (es(o), o = o.next), o
}

function Ji(s, e) {
  if (!s) return s;
  e || (e = s);
  let i = s,
    n;
  do
    if (n = !1, !i.steiner && (ln(i, i.next) || Xe(i.prev, i, i.next) === 0)) {
      if (es(i), i = e = i.prev, i === i.next) break;
      n = !0
    } else i = i.next; while (n || i !== e);
  return e
}

function $i(s, e, i, n, r, o, a) {
  if (!s) return;
  !a && o && Id(s, n, r, o);
  let c = s;
  for (; s.prev !== s.next;) {
    const l = s.prev,
      u = s.next;
    if (o ? Fd(s, n, r, o) : Dd(s)) {
      e.push(l.i, s.i, u.i), es(s), s = u.next, c = u.next;
      continue
    }
    if (s = u, s === c) {
      a ? a === 1 ? (s = Ud(Ji(s), e), $i(s, e, i, n, r, o, 2)) : a === 2 && zd(s, e, i, n, r, o) : $i(Ji(s), e, i, n, r, o, 1);
      break
    }
  }
}

function Dd(s) {
  const e = s.prev,
    i = s,
    n = s.next;
  if (Xe(e, i, n) >= 0) return !1;
  const r = e.x,
    o = i.x,
    a = n.x,
    c = e.y,
    l = i.y,
    u = n.y,
    f = r < o ? r < a ? r : a : o < a ? o : a,
    h = c < l ? c < u ? c : u : l < u ? l : u,
    d = r > o ? r > a ? r : a : o > a ? o : a,
    m = c > l ? c > u ? c : u : l > u ? l : u;
  let g = n.next;
  for (; g !== e;) {
    if (g.x >= f && g.x <= d && g.y >= h && g.y <= m && Xi(r, c, o, l, a, u, g.x, g.y) && Xe(g.prev, g, g.next) >= 0) return !1;
    g = g.next
  }
  return !0
}

function Fd(s, e, i, n) {
  const r = s.prev,
    o = s,
    a = s.next;
  if (Xe(r, o, a) >= 0) return !1;
  const c = r.x,
    l = o.x,
    u = a.x,
    f = r.y,
    h = o.y,
    d = a.y,
    m = c < l ? c < u ? c : u : l < u ? l : u,
    g = f < h ? f < d ? f : d : h < d ? h : d,
    p = c > l ? c > u ? c : u : l > u ? l : u,
    _ = f > h ? f > d ? f : d : h > d ? h : d,
    A = zn(m, g, e, i, n),
    w = zn(p, _, e, i, n);
  let y = s.prevZ,
    E = s.nextZ;
  for (; y && y.z >= A && E && E.z <= w;) {
    if (y.x >= m && y.x <= p && y.y >= g && y.y <= _ && y !== r && y !== a && Xi(c, f, l, h, u, d, y.x, y.y) && Xe(y.prev, y, y.next) >= 0 || (y = y.prevZ, E.x >= m && E.x <= p && E.y >= g && E.y <= _ && E !== r && E !== a && Xi(c, f, l, h, u, d, E.x, E.y) && Xe(E.prev, E, E.next) >= 0)) return !1;
    E = E.nextZ
  }
  for (; y && y.z >= A;) {
    if (y.x >= m && y.x <= p && y.y >= g && y.y <= _ && y !== r && y !== a && Xi(c, f, l, h, u, d, y.x, y.y) && Xe(y.prev, y, y.next) >= 0) return !1;
    y = y.prevZ
  }
  for (; E && E.z <= w;) {
    if (E.x >= m && E.x <= p && E.y >= g && E.y <= _ && E !== r && E !== a && Xi(c, f, l, h, u, d, E.x, E.y) && Xe(E.prev, E, E.next) >= 0) return !1;
    E = E.nextZ
  }
  return !0
}

function Ud(s, e) {
  let i = s;
  do {
    const n = i.prev,
      r = i.next.next;
    !ln(n, r) && ma(n, i, i.next, r) && Fs(n, r) && Fs(r, n) && (e.push(n.i, i.i, r.i), es(i), es(i.next), i = s = r), i = i.next
  } while (i !== s);
  return Ji(i)
}

function zd(s, e, i, n, r, o) {
  let a = s;
  do {
    let c = a.next.next;
    for (; c !== a.prev;) {
      if (a.i !== c.i && Od(a, c)) {
        let l = Gd(a, c);
        a = Ji(a, a.next), l = Ji(l, l.next), $i(a, e, i, n, r, o, 0), $i(l, e, i, n, r, o, 0);
        return
      }
      c = c.next
    }
    a = a.next
  } while (a !== s)
}

function Id(s, e, i, n) {
  let r = s;
  do r.z === 0 && (r.z = zn(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== s);
  r.prevZ.nextZ = null, r.prevZ = null, Nd(r)
}

function Nd(s) {
  let e, i = 1;
  do {
    let n = s,
      r;
    s = null;
    let o = null;
    for (e = 0; n;) {
      e++;
      let a = n,
        c = 0;
      for (let u = 0; u < i && (c++, a = a.nextZ, !!a); u++);
      let l = i;
      for (; c > 0 || l > 0 && a;) c !== 0 && (l === 0 || !a || n.z <= a.z) ? (r = n, n = n.nextZ, c--) : (r = a, a = a.nextZ, l--), o ? o.nextZ = r : s = r, r.prevZ = o, o = r;
      n = a
    }
    o.nextZ = null, i *= 2
  } while (e > 1);
  return s
}

function zn(s, e, i, n, r) {
  return s = (s - i) * r | 0, e = (e - n) * r | 0, s = (s | s << 8) & 16711935, s = (s | s << 4) & 252645135, s = (s | s << 2) & 858993459, s = (s | s << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, s | e << 1
}

function Xi(s, e, i, n, r, o, a, c) {
  return (r - a) * (e - c) >= (s - a) * (o - c) && (s - a) * (n - c) >= (i - a) * (e - c) && (i - a) * (o - c) >= (r - a) * (n - c)
}

function Od(s, e) {
  return s.next.i !== e.i && s.prev.i !== e.i && !Bd(s, e) && (Fs(s, e) && Fs(e, s) && Ld(s, e) && (Xe(s.prev, s, e.prev) || Xe(s, e.prev, e)) || ln(s, e) && Xe(s.prev, s, s.next) > 0 && Xe(e.prev, e, e.next) > 0)
}

function Xe(s, e, i) {
  return (e.y - s.y) * (i.x - e.x) - (e.x - s.x) * (i.y - e.y)
}

function ln(s, e) {
  return s.x === e.x && s.y === e.y
}

function ma(s, e, i, n) {
  const r = vs(Xe(s, e, i)),
    o = vs(Xe(s, e, n)),
    a = vs(Xe(i, n, s)),
    c = vs(Xe(i, n, e));
  return !!(r !== o && a !== c || r === 0 && _s(s, i, e) || o === 0 && _s(s, n, e) || a === 0 && _s(i, s, n) || c === 0 && _s(i, e, n))
}

function _s(s, e, i) {
  return e.x <= Math.max(s.x, i.x) && e.x >= Math.min(s.x, i.x) && e.y <= Math.max(s.y, i.y) && e.y >= Math.min(s.y, i.y)
}

function vs(s) {
  return s > 0 ? 1 : s < 0 ? -1 : 0
}

function Bd(s, e) {
  let i = s;
  do {
    if (i.i !== s.i && i.next.i !== s.i && i.i !== e.i && i.next.i !== e.i && ma(i, i.next, s, e)) return !0;
    i = i.next
  } while (i !== s);
  return !1
}

function Fs(s, e) {
  return Xe(s.prev, s, s.next) < 0 ? Xe(s, e, s.next) >= 0 && Xe(s, s.prev, e) >= 0 : Xe(s, e, s.prev) < 0 || Xe(s, s.next, e) < 0
}

function Ld(s, e) {
  let i = s,
    n = !1;
  const r = (s.x + e.x) / 2,
    o = (s.y + e.y) / 2;
  do i.y > o != i.next.y > o && i.next.y !== i.y && r < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next; while (i !== s);
  return n
}

function Gd(s, e) {
  const i = In(s.i, s.x, s.y),
    n = In(e.i, e.x, e.y),
    r = s.next,
    o = e.prev;
  return s.next = e, e.prev = s, i.next = r, r.prev = i, n.next = i, i.prev = n, o.next = n, n.prev = o, n
}

function po(s, e, i, n) {
  const r = In(s, e, i);
  return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
}

function es(s) {
  s.next.prev = s.prev, s.prev.next = s.next, s.prevZ && (s.prevZ.nextZ = s.nextZ), s.nextZ && (s.nextZ.prevZ = s.prevZ)
}

function In(s, e, i) {
  return {
    i: s,
    x: e,
    y: i,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1
  }
}

function Vd(s, e, i, n) {
  let r = 0;
  for (let o = e, a = i - n; o < i; o += n) r += (s[a] - s[o]) * (s[o + 1] + s[a + 1]), a = o;
  return r
}
const {
  abs: Ui,
  cos: Rt,
  sin: hi,
  acos: Hd,
  atan2: zi,
  sqrt: Dt,
  pow: ct
} = Math;

function Ii(s) {
  return s < 0 ? -ct(-s, 1 / 3) : ct(s, 1 / 3)
}
const ga = Math.PI,
  As = 2 * ga,
  Ft = ga / 2,
  Xd = 1e-6,
  wn = Number.MAX_SAFE_INTEGER || 9007199254740991,
  yn = Number.MIN_SAFE_INTEGER || -9007199254740991,
  Wd = {
    x: 0,
    y: 0,
    z: 0
  },
  N = {
    Tvalues: [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213],
    Cvalues: [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872],
    arcfn: function(s, e) {
      const i = e(s);
      let n = i.x * i.x + i.y * i.y;
      return typeof i.z < "u" && (n += i.z * i.z), Dt(n)
    },
    compute: function(s, e, i) {
      if (s === 0) return e[0].t = 0, e[0];
      const n = e.length - 1;
      if (s === 1) return e[n].t = 1, e[n];
      const r = 1 - s;
      let o = e;
      if (n === 0) return e[0].t = s, e[0];
      if (n === 1) {
        const c = {
          x: r * o[0].x + s * o[1].x,
          y: r * o[0].y + s * o[1].y,
          t: s
        };
        return i && (c.z = r * o[0].z + s * o[1].z), c
      }
      if (n < 4) {
        let c = r * r,
          l = s * s,
          u, f, h, d = 0;
        n === 2 ? (o = [o[0], o[1], o[2], Wd], u = c, f = r * s * 2, h = l) : n === 3 && (u = c * r, f = c * s * 3, h = r * l * 3, d = s * l);
        const m = {
          x: u * o[0].x + f * o[1].x + h * o[2].x + d * o[3].x,
          y: u * o[0].y + f * o[1].y + h * o[2].y + d * o[3].y,
          t: s
        };
        return i && (m.z = u * o[0].z + f * o[1].z + h * o[2].z + d * o[3].z), m
      }
      const a = JSON.parse(JSON.stringify(e));
      for (; a.length > 1;) {
        for (let c = 0; c < a.length - 1; c++) a[c] = {
          x: a[c].x + (a[c + 1].x - a[c].x) * s,
          y: a[c].y + (a[c + 1].y - a[c].y) * s
        }, typeof a[c].z < "u" && (a[c].z = a[c].z + (a[c + 1].z - a[c].z) * s);
        a.splice(a.length - 1, 1)
      }
      return a[0].t = s, a[0]
    },
    computeWithRatios: function(s, e, i, n) {
      const r = 1 - s,
        o = i,
        a = e;
      let c = o[0],
        l = o[1],
        u = o[2],
        f = o[3],
        h;
      if (c *= r, l *= s, a.length === 2) return h = c + l, {
        x: (c * a[0].x + l * a[1].x) / h,
        y: (c * a[0].y + l * a[1].y) / h,
        z: n ? (c * a[0].z + l * a[1].z) / h : !1,
        t: s
      };
      if (c *= r, l *= 2 * r, u *= s * s, a.length === 3) return h = c + l + u, {
        x: (c * a[0].x + l * a[1].x + u * a[2].x) / h,
        y: (c * a[0].y + l * a[1].y + u * a[2].y) / h,
        z: n ? (c * a[0].z + l * a[1].z + u * a[2].z) / h : !1,
        t: s
      };
      if (c *= r, l *= 1.5 * r, u *= 3 * r, f *= s * s * s, a.length === 4) return h = c + l + u + f, {
        x: (c * a[0].x + l * a[1].x + u * a[2].x + f * a[3].x) / h,
        y: (c * a[0].y + l * a[1].y + u * a[2].y + f * a[3].y) / h,
        z: n ? (c * a[0].z + l * a[1].z + u * a[2].z + f * a[3].z) / h : !1,
        t: s
      }
    },
    derive: function(s, e) {
      const i = [];
      for (let n = s, r = n.length, o = r - 1; r > 1; r--, o--) {
        const a = [];
        for (let c = 0, l; c < o; c++) l = {
          x: o * (n[c + 1].x - n[c].x),
          y: o * (n[c + 1].y - n[c].y)
        }, e && (l.z = o * (n[c + 1].z - n[c].z)), a.push(l);
        i.push(a), n = a
      }
      return i
    },
    between: function(s, e, i) {
      return e <= s && s <= i || N.approximately(s, e) || N.approximately(s, i)
    },
    approximately: function(s, e, i) {
      return Ui(s - e) <= (i || Xd)
    },
    length: function(s) {
      const i = N.Tvalues.length;
      let n = 0;
      for (let r = 0, o; r < i; r++) o = .5 * N.Tvalues[r] + .5, n += N.Cvalues[r] * N.arcfn(o, s);
      return .5 * n
    },
    map: function(s, e, i, n, r) {
      const o = i - e,
        a = r - n,
        c = s - e,
        l = c / o;
      return n + a * l
    },
    lerp: function(s, e, i) {
      const n = {
        x: e.x + s * (i.x - e.x),
        y: e.y + s * (i.y - e.y)
      };
      return e.z !== void 0 && i.z !== void 0 && (n.z = e.z + s * (i.z - e.z)), n
    },
    pointToString: function(s) {
      let e = s.x + "/" + s.y;
      return typeof s.z < "u" && (e += "/" + s.z), e
    },
    pointsToString: function(s) {
      return "[" + s.map(N.pointToString).join(", ") + "]"
    },
    copy: function(s) {
      return JSON.parse(JSON.stringify(s))
    },
    angle: function(s, e, i) {
      const n = e.x - s.x,
        r = e.y - s.y,
        o = i.x - s.x,
        a = i.y - s.y,
        c = n * a - r * o,
        l = n * o + r * a;
      return zi(c, l)
    },
    round: function(s, e) {
      const i = "" + s,
        n = i.indexOf(".");
      return parseFloat(i.substring(0, n + 1 + e))
    },
    dist: function(s, e) {
      const i = s.x - e.x,
        n = s.y - e.y;
      return Dt(i * i + n * n)
    },
    closest: function(s, e) {
      let i = ct(2, 63),
        n, r;
      return s.forEach(function(o, a) {
        r = N.dist(e, o), r < i && (i = r, n = a)
      }), {
        mdist: i,
        mpos: n
      }
    },
    abcratio: function(s, e) {
      if (e !== 2 && e !== 3) return !1;
      if (typeof s > "u") s = .5;
      else if (s === 0 || s === 1) return s;
      const i = ct(s, e) + ct(1 - s, e),
        n = i - 1;
      return Ui(n / i)
    },
    projectionratio: function(s, e) {
      if (e !== 2 && e !== 3) return !1;
      if (typeof s > "u") s = .5;
      else if (s === 0 || s === 1) return s;
      const i = ct(1 - s, e),
        n = ct(s, e) + i;
      return i / n
    },
    lli8: function(s, e, i, n, r, o, a, c) {
      const l = (s * n - e * i) * (r - a) - (s - i) * (r * c - o * a),
        u = (s * n - e * i) * (o - c) - (e - n) * (r * c - o * a),
        f = (s - i) * (o - c) - (e - n) * (r - a);
      return f == 0 ? !1 : {
        x: l / f,
        y: u / f
      }
    },
    lli4: function(s, e, i, n) {
      const r = s.x,
        o = s.y,
        a = e.x,
        c = e.y,
        l = i.x,
        u = i.y,
        f = n.x,
        h = n.y;
      return N.lli8(r, o, a, c, l, u, f, h)
    },
    lli: function(s, e) {
      return N.lli4(s, s.c, e, e.c)
    },
    makeline: function(s, e) {
      return new Oe(s.x, s.y, (s.x + e.x) / 2, (s.y + e.y) / 2, e.x, e.y)
    },
    findbbox: function(s) {
      let e = wn,
        i = wn,
        n = yn,
        r = yn;
      return s.forEach(function(o) {
        const a = o.bbox();
        e > a.x.min && (e = a.x.min), i > a.y.min && (i = a.y.min), n < a.x.max && (n = a.x.max), r < a.y.max && (r = a.y.max)
      }), {
        x: {
          min: e,
          mid: (e + n) / 2,
          max: n,
          size: n - e
        },
        y: {
          min: i,
          mid: (i + r) / 2,
          max: r,
          size: r - i
        }
      }
    },
    shapeintersections: function(s, e, i, n, r) {
      if (!N.bboxoverlap(e, n)) return [];
      const o = [],
        a = [s.startcap, s.forward, s.back, s.endcap],
        c = [i.startcap, i.forward, i.back, i.endcap];
      return a.forEach(function(l) {
        l.virtual || c.forEach(function(u) {
          if (u.virtual) return;
          const f = l.intersects(u, r);
          f.length > 0 && (f.c1 = l, f.c2 = u, f.s1 = s, f.s2 = i, o.push(f))
        })
      }), o
    },
    makeshape: function(s, e, i) {
      const n = e.points.length,
        r = s.points.length,
        o = N.makeline(e.points[n - 1], s.points[0]),
        a = N.makeline(s.points[r - 1], e.points[0]),
        c = {
          startcap: o,
          forward: s,
          back: e,
          endcap: a,
          bbox: N.findbbox([o, s, e, a])
        };
      return c.intersections = function(l) {
        return N.shapeintersections(c, c.bbox, l, l.bbox, i)
      }, c
    },
    getminmax: function(s, e, i) {
      if (!i) return {
        min: 0,
        max: 0
      };
      let n = wn,
        r = yn,
        o, a;
      i.indexOf(0) === -1 && (i = [0].concat(i)), i.indexOf(1) === -1 && i.push(1);
      for (let c = 0, l = i.length; c < l; c++) o = i[c], a = s.get(o), a[e] < n && (n = a[e]), a[e] > r && (r = a[e]);
      return {
        min: n,
        mid: (n + r) / 2,
        max: r,
        size: r - n
      }
    },
    align: function(s, e) {
      const i = e.p1.x,
        n = e.p1.y,
        r = -zi(e.p2.y - n, e.p2.x - i),
        o = function(a) {
          return {
            x: (a.x - i) * Rt(r) - (a.y - n) * hi(r),
            y: (a.x - i) * hi(r) + (a.y - n) * Rt(r)
          }
        };
      return s.map(o)
    },
    roots: function(s, e) {
      e = e || {
        p1: {
          x: 0,
          y: 0
        },
        p2: {
          x: 1,
          y: 0
        }
      };
      const i = s.length - 1,
        n = N.align(s, e),
        r = function(R) {
          return 0 <= R && R <= 1
        };
      if (i === 2) {
        const R = n[0].y,
          k = n[1].y,
          U = n[2].y,
          S = R - 2 * k + U;
        if (S !== 0) {
          const v = -Dt(k * k - R * U),
            F = -R + k,
            M = -(v + F) / S,
            V = -(-v + F) / S;
          return [M, V].filter(r)
        } else if (k !== U && S === 0) return [(2 * k - U) / (2 * k - 2 * U)].filter(r);
        return []
      }
      const o = n[0].y,
        a = n[1].y,
        c = n[2].y,
        l = n[3].y;
      let u = -o + 3 * a - 3 * c + l,
        f = 3 * o - 6 * a + 3 * c,
        h = -3 * o + 3 * a,
        d = o;
      if (N.approximately(u, 0)) {
        if (N.approximately(f, 0)) return N.approximately(h, 0) ? [] : [-d / h].filter(r);
        const R = Dt(h * h - 4 * f * d),
          k = 2 * f;
        return [(R - h) / k, (-h - R) / k].filter(r)
      }
      f /= u, h /= u, d /= u;
      const m = (3 * h - f * f) / 3,
        g = m / 3,
        p = (2 * f * f * f - 9 * f * h + 27 * d) / 27,
        _ = p / 2,
        A = _ * _ + g * g * g;
      let w, y, E, z, I;
      if (A < 0) {
        const R = -m / 3,
          k = R * R * R,
          U = Dt(k),
          S = -p / (2 * U),
          v = S < -1 ? -1 : S > 1 ? 1 : S,
          F = Hd(v),
          M = Ii(U),
          V = 2 * M;
        return E = V * Rt(F / 3) - f / 3, z = V * Rt((F + As) / 3) - f / 3, I = V * Rt((F + 2 * As) / 3) - f / 3, [E, z, I].filter(r)
      } else {
        if (A === 0) return w = _ < 0 ? Ii(-_) : -Ii(_), E = 2 * w - f / 3, z = -w - f / 3, [E, z].filter(r);
        {
          const R = Dt(A);
          return w = Ii(-_ + R), y = Ii(_ + R), [w - y - f / 3].filter(r)
        }
      }
    },
    droots: function(s) {
      if (s.length === 3) {
        const e = s[0],
          i = s[1],
          n = s[2],
          r = e - 2 * i + n;
        if (r !== 0) {
          const o = -Dt(i * i - e * n),
            a = -e + i,
            c = -(o + a) / r,
            l = -(-o + a) / r;
          return [c, l]
        } else if (i !== n && r === 0) return [(2 * i - n) / (2 * (i - n))];
        return []
      }
      if (s.length === 2) {
        const e = s[0],
          i = s[1];
        return e !== i ? [e / (e - i)] : []
      }
      return []
    },
    curvature: function(s, e, i, n, r) {
      let o, a, c, l, u = 0,
        f = 0;
      const h = N.compute(s, e),
        d = N.compute(s, i),
        m = h.x * h.x + h.y * h.y;
      if (n ? (o = Dt(ct(h.y * d.z - d.y * h.z, 2) + ct(h.z * d.x - d.z * h.x, 2) + ct(h.x * d.y - d.x * h.y, 2)), a = ct(m + h.z * h.z, 3 / 2)) : (o = h.x * d.y - h.y * d.x, a = ct(m, 3 / 2)), o === 0 || a === 0) return {
        k: 0,
        r: 0
      };
      if (u = o / a, f = a / o, !r) {
        const g = N.curvature(s - .001, e, i, n, !0).k,
          p = N.curvature(s + .001, e, i, n, !0).k;
        l = (p - u + (u - g)) / 2, c = (Ui(p - u) + Ui(u - g)) / 2
      }
      return {
        k: u,
        r: f,
        dk: l,
        adk: c
      }
    },
    inflections: function(s) {
      if (s.length < 4) return [];
      const e = N.align(s, {
          p1: s[0],
          p2: s.slice(-1)[0]
        }),
        i = e[2].x * e[1].y,
        n = e[3].x * e[1].y,
        r = e[1].x * e[2].y,
        o = e[3].x * e[2].y,
        a = 18 * (-3 * i + 2 * n + 3 * r - o),
        c = 18 * (3 * i - n - 3 * r),
        l = 18 * (r - i);
      if (N.approximately(a, 0)) {
        if (!N.approximately(c, 0)) {
          let d = -l / c;
          if (0 <= d && d <= 1) return [d]
        }
        return []
      }
      const u = 2 * a;
      if (N.approximately(u, 0)) return [];
      const f = c * c - 4 * a * l;
      if (f < 0) return [];
      const h = Math.sqrt(f);
      return [(h - c) / u, -(c + h) / u].filter(function(d) {
        return 0 <= d && d <= 1
      })
    },
    bboxoverlap: function(s, e) {
      const i = ["x", "y"],
        n = i.length;
      for (let r = 0, o, a, c, l; r < n; r++)
        if (o = i[r], a = s[o].mid, c = e[o].mid, l = (s[o].size + e[o].size) / 2, Ui(a - c) >= l) return !1;
      return !0
    },
    expandbox: function(s, e) {
      e.x.min < s.x.min && (s.x.min = e.x.min), e.y.min < s.y.min && (s.y.min = e.y.min), e.z && e.z.min < s.z.min && (s.z.min = e.z.min), e.x.max > s.x.max && (s.x.max = e.x.max), e.y.max > s.y.max && (s.y.max = e.y.max), e.z && e.z.max > s.z.max && (s.z.max = e.z.max), s.x.mid = (s.x.min + s.x.max) / 2, s.y.mid = (s.y.min + s.y.max) / 2, s.z && (s.z.mid = (s.z.min + s.z.max) / 2), s.x.size = s.x.max - s.x.min, s.y.size = s.y.max - s.y.min, s.z && (s.z.size = s.z.max - s.z.min)
    },
    pairiteration: function(s, e, i) {
      const n = s.bbox(),
        r = e.bbox(),
        o = 1e5,
        a = i || .5;
      if (n.x.size + n.y.size < a && r.x.size + r.y.size < a) return [(o * (s._t1 + s._t2) / 2 | 0) / o + "/" + (o * (e._t1 + e._t2) / 2 | 0) / o];
      let c = s.split(.5),
        l = e.split(.5),
        u = [{
          left: c.left,
          right: l.left
        }, {
          left: c.left,
          right: l.right
        }, {
          left: c.right,
          right: l.right
        }, {
          left: c.right,
          right: l.left
        }];
      u = u.filter(function(h) {
        return N.bboxoverlap(h.left.bbox(), h.right.bbox())
      });
      let f = [];
      return u.length === 0 || (u.forEach(function(h) {
        f = f.concat(N.pairiteration(h.left, h.right, a))
      }), f = f.filter(function(h, d) {
        return f.indexOf(h) === d
      })), f
    },
    getccenter: function(s, e, i) {
      const n = e.x - s.x,
        r = e.y - s.y,
        o = i.x - e.x,
        a = i.y - e.y,
        c = n * Rt(Ft) - r * hi(Ft),
        l = n * hi(Ft) + r * Rt(Ft),
        u = o * Rt(Ft) - a * hi(Ft),
        f = o * hi(Ft) + a * Rt(Ft),
        h = (s.x + e.x) / 2,
        d = (s.y + e.y) / 2,
        m = (e.x + i.x) / 2,
        g = (e.y + i.y) / 2,
        p = h + c,
        _ = d + l,
        A = m + u,
        w = g + f,
        y = N.lli8(h, d, p, _, m, g, A, w),
        E = N.dist(y, s);
      let z = zi(s.y - y.y, s.x - y.x),
        I = zi(e.y - y.y, e.x - y.x),
        R = zi(i.y - y.y, i.x - y.x),
        k;
      return z < R ? ((z > I || I > R) && (z += As), z > R && (k = R, R = z, z = k)) : R < I && I < z ? (k = R, R = z, z = k) : R += As, y.s = z, y.e = R, y.r = E, y
    },
    numberSort: function(s, e) {
      return s - e
    }
  };
class qi {
  constructor(e) {
    this.curves = [], this._3d = !1, e && (this.curves = e, this._3d = this.curves[0]._3d)
  }
  valueOf() {
    return this.toString()
  }
  toString() {
    return "[" + this.curves.map(function(e) {
      return N.pointsToString(e.points)
    }).join(", ") + "]"
  }
  addCurve(e) {
    this.curves.push(e), this._3d = this._3d || e._3d
  }
  length() {
    return this.curves.map(function(e) {
      return e.length()
    }).reduce(function(e, i) {
      return e + i
    })
  }
  curve(e) {
    return this.curves[e]
  }
  bbox() {
    const e = this.curves;
    for (var i = e[0].bbox(), n = 1; n < e.length; n++) N.expandbox(i, e[n].bbox());
    return i
  }
  offset(e) {
    const i = [];
    return this.curves.forEach(function(n) {
      i.push(...n.offset(e))
    }), new qi(i)
  }
}
const {
  abs: Ni,
  min: bo,
  max: _o,
  cos: jd,
  sin: Yd,
  acos: qd,
  sqrt: Oi
} = Math, Qd = Math.PI;
class Oe {
  constructor(e) {
    let i = e && e.forEach ? e : Array.from(arguments).slice(),
      n = !1;
    if (typeof i[0] == "object") {
      n = i.length;
      const m = [];
      i.forEach(function(g) {
        ["x", "y", "z"].forEach(function(p) {
          typeof g[p] < "u" && m.push(g[p])
        })
      }), i = m
    }
    let r = !1;
    const o = i.length;
    if (n) {
      if (n > 4) {
        if (arguments.length !== 1) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
        r = !0
      }
    } else if (o !== 6 && o !== 8 && o !== 9 && o !== 12 && arguments.length !== 1) throw new Error("Only new Bezier(point[]) is accepted for 4th and higher order curves");
    const a = this._3d = !r && (o === 9 || o === 12) || e && e[0] && typeof e[0].z < "u",
      c = this.points = [];
    for (let m = 0, g = a ? 3 : 2; m < o; m += g) {
      var l = {
        x: i[m],
        y: i[m + 1]
      };
      a && (l.z = i[m + 2]), c.push(l)
    }
    const u = this.order = c.length - 1,
      f = this.dims = ["x", "y"];
    a && f.push("z"), this.dimlen = f.length;
    const h = N.align(c, {
        p1: c[0],
        p2: c[u]
      }),
      d = N.dist(c[0], c[u]);
    this._linear = h.reduce((m, g) => m + Ni(g.y), 0) < d / 50, this._lut = [], this._t1 = 0, this._t2 = 1, this.update()
  }
  static quadraticFromPoints(e, i, n, r) {
    if (typeof r > "u" && (r = .5), r === 0) return new Oe(i, i, n);
    if (r === 1) return new Oe(e, i, i);
    const o = Oe.getABC(2, e, i, n, r);
    return new Oe(e, o.A, n)
  }
  static cubicFromPoints(e, i, n, r, o) {
    typeof r > "u" && (r = .5);
    const a = Oe.getABC(3, e, i, n, r);
    typeof o > "u" && (o = N.dist(i, a.C));
    const c = o * (1 - r) / r,
      l = N.dist(e, n),
      u = (n.x - e.x) / l,
      f = (n.y - e.y) / l,
      h = o * u,
      d = o * f,
      m = c * u,
      g = c * f,
      p = {
        x: i.x - h,
        y: i.y - d
      },
      _ = {
        x: i.x + m,
        y: i.y + g
      },
      A = a.A,
      w = {
        x: A.x + (p.x - A.x) / (1 - r),
        y: A.y + (p.y - A.y) / (1 - r)
      },
      y = {
        x: A.x + (_.x - A.x) / r,
        y: A.y + (_.y - A.y) / r
      },
      E = {
        x: e.x + (w.x - e.x) / r,
        y: e.y + (w.y - e.y) / r
      },
      z = {
        x: n.x + (y.x - n.x) / (1 - r),
        y: n.y + (y.y - n.y) / (1 - r)
      };
    return new Oe(e, E, z, n)
  }
  static getUtils() {
    return N
  }
  getUtils() {
    return Oe.getUtils()
  }
  static get PolyBezier() {
    return qi
  }
  valueOf() {
    return this.toString()
  }
  toString() {
    return N.pointsToString(this.points)
  }
  toSVG() {
    if (this._3d) return !1;
    const e = this.points,
      i = e[0].x,
      n = e[0].y,
      r = ["M", i, n, this.order === 2 ? "Q" : "C"];
    for (let o = 1, a = e.length; o < a; o++) r.push(e[o].x), r.push(e[o].y);
    return r.join(" ")
  }
  setRatios(e) {
    if (e.length !== this.points.length) throw new Error("incorrect number of ratio values");
    this.ratios = e, this._lut = []
  }
  verify() {
    const e = this.coordDigest();
    e !== this._print && (this._print = e, this.update())
  }
  coordDigest() {
    return this.points.map(function(e, i) {
      return "" + i + e.x + e.y + (e.z ? e.z : 0)
    }).join("")
  }
  update() {
    this._lut = [], this.dpoints = N.derive(this.points, this._3d), this.computedirection()
  }
  computedirection() {
    const e = this.points,
      i = N.angle(e[0], e[this.order], e[1]);
    this.clockwise = i > 0
  }
  length() {
    return N.length(this.derivative.bind(this))
  }
  static getABC(e = 2, i, n, r, o = .5) {
    const a = N.projectionratio(o, e),
      c = 1 - a,
      l = {
        x: a * i.x + c * r.x,
        y: a * i.y + c * r.y
      },
      u = N.abcratio(o, e);
    return {
      A: {
        x: n.x + (n.x - l.x) / u,
        y: n.y + (n.y - l.y) / u
      },
      B: n,
      C: l,
      S: i,
      E: r
    }
  }
  getABC(e, i) {
    i = i || this.get(e);
    let n = this.points[0],
      r = this.points[this.order];
    return Oe.getABC(this.order, n, i, r, e)
  }
  getLUT(e) {
    if (this.verify(), e = e || 100, this._lut.length === e + 1) return this._lut;
    this._lut = [], e++, this._lut = [];
    for (let i = 0, n, r; i < e; i++) r = i / (e - 1), n = this.compute(r), n.t = r, this._lut.push(n);
    return this._lut
  }
  on(e, i) {
    i = i || 5;
    const n = this.getLUT(),
      r = [];
    for (let o = 0, a, c = 0; o < n.length; o++) a = n[o], N.dist(a, e) < i && (r.push(a), c += o / n.length);
    return r.length ? t /= r.length : !1
  }
  project(e) {
    const i = this.getLUT(),
      n = i.length - 1,
      r = N.closest(i, e),
      o = r.mpos,
      a = (o - 1) / n,
      c = (o + 1) / n,
      l = .1 / n;
    let u = r.mdist,
      f = a,
      h = f,
      d;
    u += 1;
    for (let m; f < c + l; f += l) d = this.compute(f), m = N.dist(e, d), m < u && (u = m, h = f);
    return h = h < 0 ? 0 : h > 1 ? 1 : h, d = this.compute(h), d.t = h, d.d = u, d
  }
  get(e) {
    return this.compute(e)
  }
  point(e) {
    return this.points[e]
  }
  compute(e) {
    return this.ratios ? N.computeWithRatios(e, this.points, this.ratios, this._3d) : N.compute(e, this.points, this._3d, this.ratios)
  }
  raise() {
    const e = this.points,
      i = [e[0]],
      n = e.length;
    for (let r = 1, o, a; r < n; r++) o = e[r], a = e[r - 1], i[r] = {
      x: (n - r) / n * o.x + r / n * a.x,
      y: (n - r) / n * o.y + r / n * a.y
    };
    return i[n] = e[n - 1], new Oe(i)
  }
  derivative(e) {
    return N.compute(e, this.dpoints[0], this._3d)
  }
  dderivative(e) {
    return N.compute(e, this.dpoints[1], this._3d)
  }
  align() {
    let e = this.points;
    return new Oe(N.align(e, {
      p1: e[0],
      p2: e[e.length - 1]
    }))
  }
  curvature(e) {
    return N.curvature(e, this.dpoints[0], this.dpoints[1], this._3d)
  }
  inflections() {
    return N.inflections(this.points)
  }
  normal(e) {
    return this._3d ? this.__normal3(e) : this.__normal2(e)
  }
  __normal2(e) {
    const i = this.derivative(e),
      n = Oi(i.x * i.x + i.y * i.y);
    return {
      t: e,
      x: -i.y / n,
      y: i.x / n
    }
  }
  __normal3(e) {
    const i = this.derivative(e),
      n = this.derivative(e + .01),
      r = Oi(i.x * i.x + i.y * i.y + i.z * i.z),
      o = Oi(n.x * n.x + n.y * n.y + n.z * n.z);
    i.x /= r, i.y /= r, i.z /= r, n.x /= o, n.y /= o, n.z /= o;
    const a = {
        x: n.y * i.z - n.z * i.y,
        y: n.z * i.x - n.x * i.z,
        z: n.x * i.y - n.y * i.x
      },
      c = Oi(a.x * a.x + a.y * a.y + a.z * a.z);
    a.x /= c, a.y /= c, a.z /= c;
    const l = [a.x * a.x, a.x * a.y - a.z, a.x * a.z + a.y, a.x * a.y + a.z, a.y * a.y, a.y * a.z - a.x, a.x * a.z - a.y, a.y * a.z + a.x, a.z * a.z];
    return {
      t: e,
      x: l[0] * i.x + l[1] * i.y + l[2] * i.z,
      y: l[3] * i.x + l[4] * i.y + l[5] * i.z,
      z: l[6] * i.x + l[7] * i.y + l[8] * i.z
    }
  }
  hull(e) {
    let i = this.points,
      n = [],
      r = [],
      o = 0;
    for (r[o++] = i[0], r[o++] = i[1], r[o++] = i[2], this.order === 3 && (r[o++] = i[3]); i.length > 1;) {
      n = [];
      for (let a = 0, c, l = i.length - 1; a < l; a++) c = N.lerp(e, i[a], i[a + 1]), r[o++] = c, n.push(c);
      i = n
    }
    return r
  }
  split(e, i) {
    if (e === 0 && i) return this.split(i).left;
    if (i === 1) return this.split(e).right;
    const n = this.hull(e),
      r = {
        left: this.order === 2 ? new Oe([n[0], n[3], n[5]]) : new Oe([n[0], n[4], n[7], n[9]]),
        right: this.order === 2 ? new Oe([n[5], n[4], n[2]]) : new Oe([n[9], n[8], n[6], n[3]]),
        span: n
      };
    return r.left._t1 = N.map(0, 0, 1, this._t1, this._t2), r.left._t2 = N.map(e, 0, 1, this._t1, this._t2), r.right._t1 = N.map(e, 0, 1, this._t1, this._t2), r.right._t2 = N.map(1, 0, 1, this._t1, this._t2), i ? (i = N.map(i, e, 1, 0, 1), r.right.split(i).left) : r
  }
  extrema() {
    const e = {};
    let i = [];
    return this.dims.forEach((function(n) {
      let r = function(a) {
          return a[n]
        },
        o = this.dpoints[0].map(r);
      e[n] = N.droots(o), this.order === 3 && (o = this.dpoints[1].map(r), e[n] = e[n].concat(N.droots(o))), e[n] = e[n].filter(function(a) {
        return a >= 0 && a <= 1
      }), i = i.concat(e[n].sort(N.numberSort))
    }).bind(this)), e.values = i.sort(N.numberSort).filter(function(n, r) {
      return i.indexOf(n) === r
    }), e
  }
  bbox() {
    const e = this.extrema(),
      i = {};
    return this.dims.forEach((function(n) {
      i[n] = N.getminmax(this, n, e[n])
    }).bind(this)), i
  }
  overlaps(e) {
    const i = this.bbox(),
      n = e.bbox();
    return N.bboxoverlap(i, n)
  }
  offset(e, i) {
    if (typeof i < "u") {
      const n = this.get(e),
        r = this.normal(e),
        o = {
          c: n,
          n: r,
          x: n.x + r.x * i,
          y: n.y + r.y * i
        };
      return this._3d && (o.z = n.z + r.z * i), o
    }
    if (this._linear) {
      const n = this.normal(0),
        r = this.points.map(function(o) {
          const a = {
            x: o.x + e * n.x,
            y: o.y + e * n.y
          };
          return o.z && n.z && (a.z = o.z + e * n.z), a
        });
      return [new Oe(r)]
    }
    return this.reduce().map(function(n) {
      return n._linear ? n.offset(e)[0] : n.scale(e)
    })
  }
  simple() {
    if (this.order === 3) {
      const r = N.angle(this.points[0], this.points[3], this.points[1]),
        o = N.angle(this.points[0], this.points[3], this.points[2]);
      if (r > 0 && o < 0 || r < 0 && o > 0) return !1
    }
    const e = this.normal(0),
      i = this.normal(1);
    let n = e.x * i.x + e.y * i.y;
    return this._3d && (n += e.z * i.z), Ni(qd(n)) < Qd / 3
  }
  reduce() {
    let e, i = 0,
      n = 0,
      r = .01,
      o, a = [],
      c = [],
      l = this.extrema().values;
    for (l.indexOf(0) === -1 && (l = [0].concat(l)), l.indexOf(1) === -1 && l.push(1), i = l[0], e = 1; e < l.length; e++) n = l[e], o = this.split(i, n), o._t1 = i, o._t2 = n, a.push(o), i = n;
    return a.forEach(function(u) {
      for (i = 0, n = 0; n <= 1;)
        for (n = i + r; n <= 1 + r; n += r)
          if (o = u.split(i, n), !o.simple()) {
            if (n -= r, Ni(i - n) < r) return [];
            o = u.split(i, n), o._t1 = N.map(i, 0, 1, u._t1, u._t2), o._t2 = N.map(n, 0, 1, u._t1, u._t2), c.push(o), i = n;
            break
          } i < 1 && (o = u.split(i, 1), o._t1 = N.map(i, 0, 1, u._t1, u._t2), o._t2 = u._t2, c.push(o))
    }), c
  }
  translate(e, i, n) {
    n = typeof n == "number" ? n : i;
    const r = this.order;
    let o = this.points.map((a, c) => (1 - c / r) * i + c / r * n);
    return new Oe(this.points.map((a, c) => ({
      x: a.x + e.x * o[c],
      y: a.y + e.y * o[c]
    })))
  }
  scale(e) {
    const i = this.order;
    let n = !1;
    if (typeof e == "function" && (n = e), n && i === 2) return this.raise().scale(n);
    const r = this.clockwise,
      o = this.points;
    if (this._linear) return this.translate(this.normal(0), n ? n(0) : e, n ? n(1) : e);
    const a = n ? n(0) : e,
      c = n ? n(1) : e,
      l = [this.offset(0, 10), this.offset(1, 10)],
      u = [],
      f = N.lli4(l[0], l[0].c, l[1], l[1].c);
    if (!f) throw new Error("cannot scale this curve. Try reducing it first.");
    return [0, 1].forEach(function(h) {
      const d = u[h * i] = N.copy(o[h * i]);
      d.x += (h ? c : a) * l[h].n.x, d.y += (h ? c : a) * l[h].n.y
    }), n ? ([0, 1].forEach(function(h) {
      if (!(i === 2 && h)) {
        var d = o[h + 1],
          m = {
            x: d.x - f.x,
            y: d.y - f.y
          },
          g = n ? n((h + 1) / i) : e;
        n && !r && (g = -g);
        var p = Oi(m.x * m.x + m.y * m.y);
        m.x /= p, m.y /= p, u[h + 1] = {
          x: d.x + g * m.x,
          y: d.y + g * m.y
        }
      }
    }), new Oe(u)) : ([0, 1].forEach(h => {
      if (i === 2 && h) return;
      const d = u[h * i],
        m = this.derivative(h),
        g = {
          x: d.x + m.x,
          y: d.y + m.y
        };
      u[h + 1] = N.lli4(d, g, f, o[h + 1])
    }), new Oe(u))
  }
  outline(e, i, n, r) {
    if (i = i === void 0 ? e : i, this._linear) {
      const z = this.normal(0),
        I = this.points[0],
        R = this.points[this.points.length - 1];
      let k, U, S;
      n === void 0 && (n = e, r = i), k = {
        x: I.x + z.x * e,
        y: I.y + z.y * e
      }, S = {
        x: R.x + z.x * n,
        y: R.y + z.y * n
      }, U = {
        x: (k.x + S.x) / 2,
        y: (k.y + S.y) / 2
      };
      const v = [k, U, S];
      k = {
        x: I.x - z.x * i,
        y: I.y - z.y * i
      }, S = {
        x: R.x - z.x * r,
        y: R.y - z.y * r
      }, U = {
        x: (k.x + S.x) / 2,
        y: (k.y + S.y) / 2
      };
      const F = [S, U, k],
        M = N.makeline(F[2], v[0]),
        V = N.makeline(v[2], F[0]),
        H = [M, new Oe(v), V, new Oe(F)];
      return new qi(H)
    }
    const o = this.reduce(),
      a = o.length,
      c = [];
    let l = [],
      u, f = 0,
      h = this.length();
    const d = typeof n < "u" && typeof r < "u";

    function m(z, I, R, k, U) {
      return function(S) {
        const v = k / R,
          F = (k + U) / R,
          M = I - z;
        return N.map(S, 0, 1, z + v * M, z + F * M)
      }
    }
    o.forEach(function(z) {
      const I = z.length();
      d ? (c.push(z.scale(m(e, n, h, f, I))), l.push(z.scale(m(-i, -r, h, f, I)))) : (c.push(z.scale(e)), l.push(z.scale(-i))), f += I
    }), l = l.map(function(z) {
      return u = z.points, u[3] ? z.points = [u[3], u[2], u[1], u[0]] : z.points = [u[2], u[1], u[0]], z
    }).reverse();
    const g = c[0].points[0],
      p = c[a - 1].points[c[a - 1].points.length - 1],
      _ = l[a - 1].points[l[a - 1].points.length - 1],
      A = l[0].points[0],
      w = N.makeline(_, g),
      y = N.makeline(p, A),
      E = [w].concat(c).concat([y]).concat(l);
    return new qi(E)
  }
  outlineshapes(e, i, n) {
    i = i || e;
    const r = this.outline(e, i).curves,
      o = [];
    for (let a = 1, c = r.length; a < c / 2; a++) {
      const l = N.makeshape(r[a], r[c - a], n);
      l.startcap.virtual = a > 1, l.endcap.virtual = a < c / 2 - 1, o.push(l)
    }
    return o
  }
  intersects(e, i) {
    return e ? e.p1 && e.p2 ? this.lineIntersects(e) : (e instanceof Oe && (e = e.reduce()), this.curveintersects(this.reduce(), e, i)) : this.selfintersects(i)
  }
  lineIntersects(e) {
    const i = bo(e.p1.x, e.p2.x),
      n = bo(e.p1.y, e.p2.y),
      r = _o(e.p1.x, e.p2.x),
      o = _o(e.p1.y, e.p2.y);
    return N.roots(this.points, e).filter(a => {
      var c = this.get(a);
      return N.between(c.x, i, r) && N.between(c.y, n, o)
    })
  }
  selfintersects(e) {
    const i = this.reduce(),
      n = i.length - 2,
      r = [];
    for (let o = 0, a, c, l; o < n; o++) c = i.slice(o, o + 1), l = i.slice(o + 2), a = this.curveintersects(c, l, e), r.push(...a);
    return r
  }
  curveintersects(e, i, n) {
    const r = [];
    e.forEach(function(a) {
      i.forEach(function(c) {
        a.overlaps(c) && r.push({
          left: a,
          right: c
        })
      })
    });
    let o = [];
    return r.forEach(function(a) {
      const c = N.pairiteration(a.left, a.right, n);
      c.length > 0 && (o = o.concat(c))
    }), o
  }
  arcs(e) {
    return e = e || .5, this._iterate(e, [])
  }
  _error(e, i, n, r) {
    const o = (r - n) / 4,
      a = this.get(n + o),
      c = this.get(r - o),
      l = N.dist(e, i),
      u = N.dist(e, a),
      f = N.dist(e, c);
    return Ni(u - l) + Ni(f - l)
  }
  _iterate(e, i) {
    let n = 0,
      r = 1,
      o;
    do {
      o = 0, r = 1;
      let a = this.get(n),
        c, l, u, f, h = !1,
        d = !1,
        m, g = r,
        p = 1;
      do
        if (d = h, f = u, g = (n + r) / 2, c = this.get(g), l = this.get(r), u = N.getccenter(a, c, l), u.interval = {
            start: n,
            end: r
          }, h = this._error(u, a, n, r) <= e, m = d && !h, m || (p = r), h) {
          if (r >= 1) {
            if (u.interval.end = p = 1, f = u, r > 1) {
              let A = {
                x: u.x + u.r * jd(u.e),
                y: u.y + u.r * Yd(u.e)
              };
              u.e += N.angle({
                x: u.x,
                y: u.y
              }, A, this.get(1))
            }
            break
          }
          r = r + (r - n) / 2
        } else r = g; while (!m && o++ < 100);
      if (o >= 100) break;
      f = f || u, i.push(f), n = p
    } while (r < 1);
    return i
  }
}
let Kd = [0, 1, 2, 7, 10, 12, 14, 15, 17, 19, 20, 24, 25, 26, 31, 32, 34, 40, 41, 44, 50, 53, 61, 80];
const Zd = Kd.map(s => s.toString(3).padStart(4, "0").repeat(2)),
  Jd = [0, 7, 3, 4];

function $d(s) {
  let e = s.top ? s.top.flip ? 1 : 2 : 0,
    i = s.right ? s.right.flip ? 2 : 1 : 0,
    n = s.bottom ? s.bottom.flip ? 2 : 1 : 0;
  const a = ((s.left ? s.left.flip ? 1 : 2 : 0) + n * 3 ** 1 + i * 3 ** 2 + e * 3 ** 3).toString(3).padStart(4, "0"),
    c = Zd.map((l, u) => [u, l.indexOf(a)]).find(l => l[1] >= 0);
  if (!c) throw new Error("Unexpected shape??");
  return Jd[c[1]] << 5 | c[0]
}
const pa = (s, e, i, n, r, o, a = !1) => {
  const c = [r * .5, o * .5],
    l = [r * i + c[0], o * n + c[1]],
    u = 10,
    f = [0, 0],
    h = [],
    d = {
      bezierCurveTo(I, R, k, U, S, v) {
        const M = new Oe([...f, I, R, k, U, S, v]).getLUT(u),
          V = h.length == 0;
        for (let H = V ? 0 : 1; H < M.length; H++) {
          const le = M[H];
          h.push(le.x, le.y)
        }
        this.moveTo(S, v)
      },
      lineTo(I, R) {
        h.length || h.push(...f), h.push(I, R), this.moveTo(I, R)
      },
      moveTo(I, R) {
        f[0] = I, f[1] = R
      }
    },
    m = 0;
  Wt(d, 0, 0, r, o, !0, !1, s.top, e, s.tl, s.tr, !0);
  const g = h.length - 2;
  Wt(d, 1, 0, r, o, !1, !1, s.right, e, s.tr, s.br);
  const p = h.length - 2;
  Wt(d, 0, 1, r, o, !0, !0, s.bottom, e, s.bl, s.br);
  const _ = h.length - 2;
  Wt(d, 0, 0, r, o, !1, !0, s.left, e, s.tl, s.bl), h.length -= 2;
  const A = im(h);
  A[m + 0] = -Math.SQRT1_2, A[m + 1] = -Math.SQRT1_2, A[g + 0] = Math.SQRT1_2, A[g + 1] = -Math.SQRT1_2, A[p + 0] = Math.SQRT1_2, A[p + 1] = Math.SQRT1_2, A[_ + 0] = -Math.SQRT1_2, A[_ + 1] = Math.SQRT1_2, tm(h, ...c);
  const w = Pd(h);
  w.length / 3 < h.length / 2 - 2 && console.warn(`Earcut as discarded ${h.length/2-2-w.length/3} vertices of piece (${i}, ${n})`);
  const y = new Uint32Array(w),
    E = new Float32Array(h),
    z = new Float32Array(A);
  return {
    id: 0,
    offset: [0, 0],
    origin: l,
    group: 0,
    elementBuffer: y,
    wireframeBuffer: a ? new Uint32Array(em(w)) : null,
    positionBuffer: E,
    normalBuffer: z,
    type: $d(s)
  }
};

function em(s) {
  if (s.length % 3 != 0) throw new Error("Those aren't triangles!");
  const e = [];
  for (let i = 0; i < s.length; i += 3) {
    const n = s[i],
      r = s[i + 1],
      o = s[i + 2];
    e.push(n, r, r, o, o, n)
  }
  if (s.length * 2 != e.length) throw new Error("Line miscount");
  return e
}

function tm(s, e, i) {
  for (let n = 0; n < s.length; n += 2) s[n] -= e, s[n + 1] -= i
}

function im(s) {
  const e = s.length;
  if (e % 2 !== 0 || e < 6) throw new Error("Coordinate list is malformed.");
  const i = Array(e);
  for (let r = 0; r < e; r += 2) {
    const o = (r + 2) % e,
      a = s[r + 0],
      c = s[r + 1],
      l = s[o + 0],
      u = s[o + 1],
      f = l - a,
      h = u - c,
      d = Math.sqrt(f * f + h * h),
      m = d ? 1 / d : 0;
    i[r + 0] = h * m, i[r + 1] = -f * m
  }
  const n = Array(e);
  for (let r = 0; r < e; r += 2) {
    const o = (r + 2) % e,
      a = i[r + 0],
      c = i[r + 1],
      l = i[o + 0],
      u = i[o + 1],
      f = (a + l) / 2,
      h = (c + u) / 2,
      d = Math.sqrt(f * f + h * h),
      m = d ? 1 / d : 0;
    n[o] = f * m, n[o + 1] = h * m
  }
  return n
}
const cn = (s, e, i) => [s(e[0], i[0]), s(e[1], i[1])],
  un = (s, e, i) => e.map(n => s(n, i)),
  fn = cn.bind(null, (s, e) => s + e);
cn.bind(null, (s, e) => s * e);
cn.bind(null, (s, e) => s - e);
cn.bind(null, (s, e) => s / e);
un.bind(null, (s, e) => s + e);
const ba = un.bind(null, (s, e) => s * e);
un.bind(null, (s, e) => s - e);
un.bind(null, (s, e) => s / e);
const sm = (s, e) => ba(fn(s, e), .5),
  nm = s => sm(s[0], s[1]),
  _a = (s, e) => [
    [s[0] - e[0] / 2, s[1] - e[1] / 2],
    [s[0] + e[0] / 2, s[1] + e[1] / 2]
  ],
  va = (s, e) => s[0] >= e[0][0] && s[0] <= e[1][0] && s[1] >= e[0][1] && s[1] <= e[1][1];

function I1(s) {
  const [e, i] = s, [n, r] = e, [o, a] = i, c = [Math.min(n, o), Math.min(r, a)], l = [Math.max(n, o), Math.max(r, a)];
  return [c, l]
}
var ts = (s => (s[s.NORTH = 0] = "NORTH", s[s.EAST = 1] = "EAST", s[s.SOUTH = 2] = "SOUTH", s[s.WEST = 3] = "WEST", s))(ts || {}),
  re = (s => (s[s.PICK = 1] = "PICK", s[s.MOVE = 2] = "MOVE", s[s.DROP = 3] = "DROP", s[s.SELECT = 4] = "SELECT", s[s.DESELECT = 5] = "DESELECT", s[s.MERGE = 6] = "MERGE", s[s.ROTATE = 7] = "ROTATE", s[s.LOCK = 8] = "LOCK", s[s.UNLOCK = 9] = "UNLOCK", s[s.STEAL = 10] = "STEAL", s[s.HEARTBEAT = 11] = "HEARTBEAT", s[s.RECORDSOLVED = 64] = "RECORDSOLVED", s[s.MOVE_KAO = 65] = "MOVE_KAO", s[s.RECORD_UPDATE = 96] = "RECORD_UPDATE", s[s.ROT_UPDATE = 97] = "ROT_UPDATE", s[s.SET_COMMITTED = 98] = "SET_COMMITTED", s[s.UNSET_COMMITTED = 99] = "UNSET_COMMITTED", s[s.SET_KAOS = 136] = "SET_KAOS", s[s.EM_PROC = 170] = "EM_PROC", s))(re || {}),
  It, Ns, Os, _i, Xn, pt, Aa, wa, ya, Ea;
class rm {
  constructor(e) {
    J(this, pt);
    b(this, "input", {
      position: "vec2"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, It);
    J(this, Ns);
    J(this, Os);
    J(this, _i);
    J(this, Xn);
    ft(this, _i, e.gl), [Me(this, It)._, Me(this, Ns)._, Me(this, Os)._] = e.buildProgram(`#version 300 es
precision highp float;

uniform mat4 camera;


in vec2 position;
void main() {
    gl_Position = camera * vec4(position, 0, 1);
}



`, `#version 300 es
precision highp float;

uniform mat4 camera;




out vec4 color;

void main() {
    color = vec4(0, 0, 0, 1);
}

`), Z(this, It), this.uniforms = {
      camera: new qe(i => {})
    }, this.bindings = {}
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, It)), ye(this, pt, Aa).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, _i),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, It)), ye(this, pt, ya).call(this), ye(this, pt, wa).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, pt, Ea).call(this), i.useProgram(n)
  }
}
It = new WeakMap, Ns = new WeakMap, Os = new WeakMap, _i = new WeakMap, Xn = new WeakMap, pt = new WeakSet, Aa = function() {
  const e = Z(this, It),
    i = Z(this, _i);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, wa = function() {
  this.uniforms.camera.sync()
}, ya = function() {}, Ea = function() {};
var Nt, Bs, Ls, vi, Wn, bt, ka, Ta, xa, Ra;
class om {
  constructor(e) {
    J(this, bt);
    b(this, "input", {
      position: "vec2"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Nt);
    J(this, Bs);
    J(this, Ls);
    J(this, vi);
    J(this, Wn);
    ft(this, vi, e.gl), [Me(this, Nt)._, Me(this, Bs)._, Me(this, Ls)._] = e.buildProgram(`#version 300 es
precision highp float;
precision highp sampler2DArray;
precision highp sampler2D;



uniform mat4 camera;
uniform sampler2D puzzleState; // (texelformat: xy: center, z: rotation, w: groupdepth)
uniform float totalPieces;
uniform sampler2DArray shadows; // 24 layers
uniform float idpr;




out vec3 auv;
out float strength;



in vec2 position; // quad position

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec4 getAttrBlock(int id, int attr) {
	ivec2 pIndex = ivec2((id % 1024), id / 1024);
	int attrh = textureSize(puzzleState, 0).y / 4;
	pIndex.y += attrh * attr;
	return texelFetch(puzzleState, pIndex, 0);
}

void main() {
    vec2 uv = position + 0.5;
    vec3 aa = vec3(textureSize(shadows, 0));
    vec2 shadowsize = vec2(aa.xy) / 1.15f;

    int pid = gl_InstanceID;
	vec4 paddr = getAttrBlock(pid, 1);
	vec2 offset = paddr.xy;
	int gid = int(paddr.z);

    int type = int(paddr.w);
    int archtype = type & 0x1F; // select last 5 bits
    int rotmirror = (type >> 5) & 7;

    if ((rotmirror & 4) == 4) {
         // 90degree clockwise
         vec2 temp = uv;
         uv.x = temp.y;
         uv.y = 1.0 - temp.x;
    }
     if ((rotmirror & 1) == 1) { // y flip
     uv.x = 1.0f - uv.x;
     }
     if ((rotmirror & 2) == 2) { // x flip
     uv.y = 1.0f - uv.y;
     }

    auv = vec3(uv, archtype);

	vec4 groupattr = getAttrBlock(gid, 0);
	vec2 groupOffset = groupattr.xy;
	float angle = groupattr.z;
	float groupDepth = groupattr.w - 0.75;

	vec2 paddedPosition = (position * shadowsize);
	vec2 pos = rotate(paddedPosition + offset, angle) + groupOffset;

    strength = 0.3;
    if (groupDepth > totalPieces)
        strength = 0.5;

    gl_Position = camera * vec4(pos, groupDepth, 1);
}


`, `#version 300 es
precision highp float;
precision highp sampler2DArray;
precision highp sampler2D;



uniform mat4 camera;
uniform sampler2D puzzleState; // (texelformat: xy: center, z: rotation, w: groupdepth)
uniform float totalPieces;
uniform sampler2DArray shadows; // 24 layers
uniform float idpr;




in vec3 auv;
in float strength;




out vec4 color;

void main() {
    vec4 s = texture(shadows, auv);
    color = vec4(s.rgb, s.a * strength);
}
`), Z(this, Nt), this.uniforms = {
      camera: new qe(i => {}),
      totalPieces: new qe(i => {}),
      idpr: new qe(i => {})
    }, this.bindings = {
      puzzleState: new gt(i => {}),
      shadows: new gt(i => {})
    }
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Nt)), ye(this, bt, ka).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, vi),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Nt)), ye(this, bt, xa).call(this), ye(this, bt, Ta).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, bt, Ra).call(this), i.useProgram(n)
  }
}
Nt = new WeakMap, Bs = new WeakMap, Ls = new WeakMap, vi = new WeakMap, Wn = new WeakMap, bt = new WeakSet, ka = function() {
  const e = Z(this, Nt),
    i = Z(this, vi);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  } {
    const r = i.getUniformLocation(e, "totalPieces");
    this.uniforms.totalPieces.setter = o => i.uniform1f(r, o), this.uniforms.totalPieces.dirty = !0
  } {
    const r = i.getUniformLocation(e, "idpr");
    this.uniforms.idpr.setter = o => i.uniform1f(r, o), this.uniforms.idpr.dirty = !0
  } {
    const r = i.getUniformLocation(e, "puzzleState");
    this.bindings.puzzleState.us.setter = o => i.uniform1i(r, o), this.bindings.puzzleState.us.dirty = !0
  } {
    const r = i.getUniformLocation(e, "shadows");
    this.bindings.shadows.us.setter = o => i.uniform1i(r, o), this.bindings.shadows.us.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, Ta = function() {
  this.uniforms.camera.sync(), this.uniforms.totalPieces.sync(), this.uniforms.idpr.sync()
}, xa = function() {
  this.bindings.puzzleState.sync(), this.bindings.shadows.sync()
}, Ra = function() {
  var e, i;
  (e = this.bindings.puzzleState.texture) == null || e.disable(), (i = this.bindings.shadows.texture) == null || i.disable()
};
var Ot, Gs, Vs, Ai, jn, _t, Ca, Sa, Pa, Ma;
class am {
  constructor(e) {
    J(this, _t);
    b(this, "input", {
      position: "vec2"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Ot);
    J(this, Gs);
    J(this, Vs);
    J(this, Ai);
    J(this, jn);
    ft(this, Ai, e.gl), [Me(this, Ot)._, Me(this, Gs)._, Me(this, Vs)._] = e.buildProgram(`#version 300 es
precision highp float;

uniform sampler2D tex;
uniform vec2 dir;



in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}



`, `#version 300 es
precision highp float;

uniform sampler2D tex;
uniform vec2 dir;



out vec4 color;

vec4 blur9(in vec2 uv, in vec2 res) {
  vec4 color = vec4(0.0);
  vec2 off1 = vec2(1.411764705882353) * dir;
  vec2 off2 = vec2(3.2941176470588234) * dir;
  vec2 off3 = vec2(5.176470588235294) * dir;
  color += texture(tex, uv) * 0.1964825501511404;
  color += texture(tex, uv + (off1 / res)) * 0.2969069646728344;
  color += texture(tex, uv - (off1 / res)) * 0.2969069646728344;
  color += texture(tex, uv + (off2 / res)) * 0.09447039785044732;
  color += texture(tex, uv - (off2 / res)) * 0.09447039785044732;
  color += texture(tex, uv + (off3 / res)) * 0.010381362401148057;
  color += texture(tex, uv - (off3 / res)) * 0.010381362401148057;
  return color;
}

void main() {
  vec2 res = vec2(textureSize(tex, 0));
  vec2 uv = gl_FragCoord.xy / res;
  color = blur9(uv, res);
}

`), Z(this, Ot), this.uniforms = {
      dir: new qe(i => {})
    }, this.bindings = {
      tex: new gt(i => {})
    }
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Ot)), ye(this, _t, Ca).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, Ai),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Ot)), ye(this, _t, Pa).call(this), ye(this, _t, Sa).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, _t, Ma).call(this), i.useProgram(n)
  }
}
Ot = new WeakMap, Gs = new WeakMap, Vs = new WeakMap, Ai = new WeakMap, jn = new WeakMap, _t = new WeakSet, Ca = function() {
  const e = Z(this, Ot),
    i = Z(this, Ai);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "dir");
    this.uniforms.dir.setter = o => i.uniform2fv(r, o), this.uniforms.dir.dirty = !0
  } {
    const r = i.getUniformLocation(e, "tex");
    this.bindings.tex.us.setter = o => i.uniform1i(r, o), this.bindings.tex.us.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, Sa = function() {
  this.uniforms.dir.sync()
}, Pa = function() {
  this.bindings.tex.sync()
}, Ma = function() {
  var e;
  (e = this.bindings.tex.texture) == null || e.disable()
};
class lm {
  constructor(e, i, n, r) {
    b(this, "gl");
    b(this, "fakeshadows");
    b(this, "jigShadow");
    b(this, "jgl");
    this.jgl = e, this.gl = this.jgl.gl;
    const o = this.gl;
    this.jigShadow = new om(this.jgl.glx);
    const [a, c] = [i * 2, n * 2].map(R => ~~R), l = new OffscreenCanvas(a, c), u = l.getContext("webgl2", {
      antialias: !1,
      alpha: !0,
      premultipliedAlpha: !1
    });
    u.clearColor(0, 0, 0, 0);
    const f = new Ka(u),
      h = new Pt(u, "STATIC_DRAW", ["position", "vec2"]);
    h.set(new Float32Array([-1, -1, 3, -1, -1, 3]));
    const d = new ni(u, "STATIC_DRAW", "UNSIGNED_SHORT");
    d.set(new Uint16Array([0, 1, 2]));
    const m = new ri(u, d, h),
      g = new am(f.glx);
    g.setAssembly(m);
    const p = new rm(f.glx);
    this.fakeshadows = this.jgl.glx.createTexture(["RGBA8", "RGBA", "UNSIGNED_BYTE"], [a, c, 24]);
    const _ = new Zo(l, u, -1024, 1024, () => 1, () => !0, () => !0),
      A = u.createFramebuffer(),
      w = u.createFramebuffer(),
      y = f.glx.createTexture(["RGBA", "RGBA", "UNSIGNED_BYTE"], [a, c], void 0, void 0, !0);
    y.tex.__SPECTOR_Metadata = {
      name: "firstPassTexture"
    };
    const E = f.glx.createTexture(["RGBA", "RGBA", "UNSIGNED_BYTE"], [a, c], void 0, void 0, !0);
    if (E.tex.__SPECTOR_Metadata = {
        name: "secondPassTexture"
      }, u.bindFramebuffer(u.FRAMEBUFFER, A), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, y.tex, 0), u.bindFramebuffer(u.FRAMEBUFFER, w), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, E.tex, 0), u.checkFramebufferStatus(u.FRAMEBUFFER) !== u.FRAMEBUFFER_COMPLETE) throw new Error("Framebuffer is not complete.");
    u.bindFramebuffer(u.READ_FRAMEBUFFER, null), u.bindFramebuffer(u.DRAW_FRAMEBUFFER, null);
    for (let R = 0; R < 24; ++R) {
      u.bindFramebuffer(u.READ_FRAMEBUFFER, null), u.bindFramebuffer(u.DRAW_FRAMEBUFFER, A), u.clear(u.COLOR_BUFFER_BIT);
      const k = 1 + r;
      _.update(k, a / (2 * k), c / (2 * k));
      const U = this.getArchPieceData(wm[R], i, n, r),
        S = pa(U, r, 0, 0, i, n);
      p.uniforms.camera.data = _.projectionMatrix;
      const v = new Pt(u, "STATIC_DRAW", ["position", "vec2"]);
      v.set(S.positionBuffer);
      const F = new ni(u, "STATIC_DRAW", "UNSIGNED_INT");
      F.set(S.elementBuffer), p.setAssembly(new ri(u, F, v)), f.glx.using(p, pe => {
        pe.drawElements(u.TRIANGLES, S.elementBuffer.length)
      });
      const H = ~~(Math.min(n, i) / 13 / 2),
        le = 3;
      for (let pe = 1; pe <= H; ++pe) u.bindFramebuffer(u.READ_FRAMEBUFFER, null), u.bindFramebuffer(u.DRAW_FRAMEBUFFER, w), u.clear(u.COLOR_BUFFER_BIT), g.bindings.tex.texture = y, g.uniforms.dir.data = [le, 0], f.glx.using(g, ne => ne.drawElements(u.TRIANGLES, 3)), u.bindFramebuffer(u.READ_FRAMEBUFFER, null), u.bindFramebuffer(u.DRAW_FRAMEBUFFER, pe == H ? null : A), u.clear(u.COLOR_BUFFER_BIT), g.bindings.tex.texture = E, g.uniforms.dir.data = [0, le], f.glx.using(g, ne => {
        ne.drawElements(u.TRIANGLES, 3)
      });
      this.fakeshadows.updateRegion(l, [0, 0, R], [a, c, 1])
    }
    f.destroy();
    const z = new Pt(o, "STATIC_DRAW", ["position", "vec2"]);
    z.set(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1].map(R => R - .5)));
    const I = new ni(o, "STATIC_DRAW", "UNSIGNED_SHORT");
    I.set(new Uint16Array([0, 1, 2, 2, 3, 0])), this.jigShadow.setAssembly(new ri(o, I, z)), this.jigShadow.uniforms.idpr.data = 1 / 2
  }
  getArchPieceData(e, i, n, r) {
    const o = e.toString(3).padStart(4, "0").split("").map(m => +m),
      a = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        flip: !1
      },
      c = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        flip: !0
      },
      l = o[0] == 0 ? null : o[0] == 1 ? {
        ...c
      } : {
        ...a
      },
      u = o[1] == 0 ? null : o[1] == 1 ? {
        ...a
      } : {
        ...c
      },
      f = o[2] == 0 ? null : o[2] == 2 ? {
        ...c
      } : {
        ...a
      },
      h = o[3] == 0 ? null : o[3] == 2 ? {
        ...a
      } : {
        ...c
      },
      d = {
        x: 0,
        y: 0
      };
    return {
      bottom: f,
      left: h,
      right: u,
      top: l,
      bl: d,
      br: d,
      tl: d,
      tr: d
    }
  }
  draw(e, i, n) {
    const r = this.gl;
    this.jigShadow.bindings.puzzleState.texture = i, this.jigShadow.uniforms.camera.data = n.projectionMatrix, this.jigShadow.uniforms.totalPieces.data = e, this.jigShadow.bindings.shadows.texture = this.fakeshadows, this.jgl.glx.using(this.jigShadow, o => {
      o.drawElementsInstanced(r.TRIANGLES, 6, e)
    })
  }
  destroy() {
    this.jgl.destroy()
  }
}
const cm = "" + new URL("../assets/jacquard.BuVPFd1D.jpg", import.meta.url).href,
  um = "" + new URL("../assets/leather.yk4m1F34.jpg", import.meta.url).href,
  fm = "" + new URL("../assets/leather2.BTTGWhIv.jpg", import.meta.url).href,
  hm = "" + new URL("../assets/sheer.BRUIX5GZ.jpg", import.meta.url).href,
  dm = "" + new URL("../assets/wool.Bf4sYltU.jpg", import.meta.url).href;
var Bt, Hs, Xs, wi, Yn, vt, Da, Fa, Ua, za;
class mm {
  constructor(e) {
    J(this, vt);
    b(this, "input", {
      position: "vec2"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Bt);
    J(this, Hs);
    J(this, Xs);
    J(this, wi);
    J(this, Yn);
    ft(this, wi, e.gl), [Me(this, Bt)._, Me(this, Hs)._, Me(this, Xs)._] = e.buildProgram(`#version 300 es
precision highp float;

uniform sampler2D uTexture;
uniform vec4 colorTint;
uniform mat4 camera;

out vec2 texCoord;


in vec2 position;

void main() {
    gl_Position = camera * vec4(position, 0.0, 1.0);
    texCoord = position / vec2(textureSize(uTexture, 0));
}


`, `#version 300 es
precision highp float;

uniform sampler2D uTexture;
uniform vec4 colorTint;
uniform mat4 camera;

in vec2 texCoord;





out vec4 fragColor;

void main() {
    vec4 texColor = texture(uTexture, texCoord);
    fragColor = texColor * colorTint;
}

`), Z(this, Bt), this.uniforms = {
      colorTint: new qe(i => {}),
      camera: new qe(i => {})
    }, this.bindings = {
      uTexture: new gt(i => {})
    }
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Bt)), ye(this, vt, Da).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, wi),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Bt)), ye(this, vt, Ua).call(this), ye(this, vt, Fa).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, vt, za).call(this), i.useProgram(n)
  }
}
Bt = new WeakMap, Hs = new WeakMap, Xs = new WeakMap, wi = new WeakMap, Yn = new WeakMap, vt = new WeakSet, Da = function() {
  const e = Z(this, Bt),
    i = Z(this, wi);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "colorTint");
    this.uniforms.colorTint.setter = o => i.uniform4fv(r, o), this.uniforms.colorTint.dirty = !0
  } {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  } {
    const r = i.getUniformLocation(e, "uTexture");
    this.bindings.uTexture.us.setter = o => i.uniform1i(r, o), this.bindings.uTexture.us.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, Fa = function() {
  this.uniforms.colorTint.sync(), this.uniforms.camera.sync()
}, Ua = function() {
  this.bindings.uTexture.sync()
}, za = function() {
  var e;
  (e = this.bindings.uTexture.texture) == null || e.disable()
};
class gm {
  constructor(e, i) {
    b(this, "positions", new Float32Array(4 * 2));
    b(this, "texture");
    b(this, "dummy");
    b(this, "rectshaderinst");
    b(this, "position");
    this.jigGl = e, this.camera = i;
    const n = this.jigGl.gl,
      r = this.jigGl.glx;
    this.rectshaderinst = new mm(r), this.position = new Pt(n, "STREAM_DRAW", ["position", "vec2"]), this.position.set(this.positions);
    let o = new ni(n, "STATIC_DRAW", "UNSIGNED_SHORT");
    o.set(new Uint16Array([0, 1, 2, 0, 2, 3]));
    const a = new ri(n, o, this.position);
    this.rectshaderinst.setAssembly(a), this.texture = r.createTexture(["RGBA", "RGBA", "UNSIGNED_BYTE"], [1, 1], new Uint8Array([255, 255, 255, 255])), this.dummy = r.createTexture(["RGBA", "RGBA", "UNSIGNED_BYTE"], [1, 1], new Uint8Array([255, 255, 255, 255]))
  }
  getTextureUrl(e) {
    switch (e) {
      case "leather":
        return um;
      case "leather2":
        return fm;
      case "wool":
        return dm;
      case "jacquard":
        return cm;
      case "sheer":
        return hm;
      case "none":
      default:
        return null
    }
  }
  setTexture(e) {
    const i = this.getTextureUrl(e);
    if (!i) {
      this.texture = this.dummy;
      return
    }
    if (!this.texture) {
      this.texture = this.dummy;
      return
    }
    const n = new Image;
    n.onload = () => {
      this.texture.realloc(n, {
        TEXTURE_WRAP_S: "REPEAT",
        TEXTURE_WRAP_T: "REPEAT",
        TEXTURE_MAG_FILTER: "LINEAR",
        TEXTURE_MIN_FILTER: "LINEAR"
      })
    }, n.src = i
  }
  draw(e, i, n, r, o = [1, 1, 1, 1]) {
    this.drawWithTexture(e, i, n, r, o)
  }
  drawWithTexture(e, i, n, r, o) {
    const a = this.jigGl.gl;
    this.positions.set([e, i, n, i, n, r, e, r]), this.position.update(this.positions), this.rectshaderinst.uniforms.camera.data = this.camera.projectionMatrix, this.rectshaderinst.uniforms.colorTint.data = o, this.rectshaderinst.bindings.uTexture.texture = this.texture, this.jigGl.glx.using(this.rectshaderinst, c => {
      c.drawElements(a.TRIANGLES, 6)
    })
  }
}
var Lt, Ws, js, yi, qn, At, Ia, Na, Oa, Ba;
class pm {
  constructor(e) {
    J(this, At);
    b(this, "input", {
      position: "vec2"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Lt);
    J(this, Ws);
    J(this, js);
    J(this, yi);
    J(this, qn);
    ft(this, yi, e.gl), [Me(this, Lt)._, Me(this, Ws)._, Me(this, js)._] = e.buildProgram(`#version 300 es
precision highp float;

uniform vec4 scol;
uniform mat4 camera;
out vec3 pvcol;


in vec2 position;

void main() {
  gl_Position = camera * vec4(position, 0, 1);
}


`, `#version 300 es
precision highp float;

uniform vec4 scol;
uniform mat4 camera;
in vec3 pvcol;




out vec4 color;
void main() { color = scol; }

`), Z(this, Lt), this.uniforms = {
      scol: new qe(i => {}),
      camera: new qe(i => {})
    }, this.bindings = {}
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Lt)), ye(this, At, Ia).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, yi),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Lt)), ye(this, At, Oa).call(this), ye(this, At, Na).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, At, Ba).call(this), i.useProgram(n)
  }
}
Lt = new WeakMap, Ws = new WeakMap, js = new WeakMap, yi = new WeakMap, qn = new WeakMap, At = new WeakSet, Ia = function() {
  const e = Z(this, Lt),
    i = Z(this, yi);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "scol");
    this.uniforms.scol.setter = o => i.uniform4fv(r, o), this.uniforms.scol.dirty = !0
  } {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, Na = function() {
  this.uniforms.scol.sync(), this.uniforms.camera.sync()
}, Oa = function() {}, Ba = function() {};
class La {
  constructor(e, i) {
    b(this, "program");
    b(this, "positions", new Float32Array(2 * 4));
    b(this, "gl");
    b(this, "positionBuffer");
    b(this, "camera");
    this.jigGl = e;
    const n = this.gl = e.gl;
    this.program = new pm(e.glx), this.camera = i;
    const r = this.positionBuffer = new Pt(n, "STREAM_DRAW", ["position", "vec2"]);
    r.set(this.positions);
    const o = new ni(n, "STATIC_DRAW", "UNSIGNED_BYTE");
    o.set(new Uint8Array([0, 2, 1, 3, 0, 1])), this.program.setAssembly(new ri(n, o, r))
  }
  drawRect(e, i, n, r, o = [1, 1, 1, .2]) {
    const a = this.gl;
    this.positions.set([e, i, n, r, e, r, n, i]), this.positionBuffer.update(this.positions), this.program.uniforms.scol.data = o, this.program.uniforms.camera.data = this.camera.projectionMatrix, this.jigGl.glx.using(this.program, c => c.drawElements(a.TRIANGLES, 6))
  }
}
var Gt, Ys, qs, Ei, Qn, wt, Ga, Va, Ha, Xa;
class bm {
  constructor(e) {
    J(this, wt);
    b(this, "input", {
      position: "vec2",
      normal: "vec2",
      pieceid: "float"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Gt);
    J(this, Ys);
    J(this, qs);
    J(this, Ei);
    J(this, Qn);
    ft(this, Ei, e.gl), [Me(this, Gt)._, Me(this, Ys)._, Me(this, qs)._] = e.buildProgram(`#version 300 es
precision highp float;




uniform mat4 camera;
uniform vec2 idims;
/*
0: (xy: group center, z: group rotation, w: groupdepth)
1: (xy: offset from group, z: group id, w: piece archetype)
2: style color
4: (xy: texture origin)
*/
uniform sampler2D puzzleState;
uniform float grow;
uniform bool selection;
uniform sampler2D image;

out vec2 uv;
out vec4 outlineColor;
out float rotting;



// WHY, OH WHY
layout(location = 0) in vec2 position;
layout(location = 1) in vec2 normal;
layout(location = 2) in float pieceid;

vec4 getAttrBlock(int id, int attr) {
	ivec2 pIndex = ivec2((id % 1024), id / 1024);
	int attrh = textureSize(puzzleState, 0).y / 4;
	pIndex.y += attrh * attr;
	return texelFetch(puzzleState, pIndex, 0);
}

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

void main() {
	gl_PointSize = 5.0;

	int pid = int(pieceid);
	vec4 paddr = getAttrBlock(pid, 1);
	vec2 offset = paddr.xy;
	int gid = int(paddr.z);

	vec4 groupattr = getAttrBlock(gid, 0);
	vec2 groupOffset = groupattr.xy;
	float angle = groupattr.z;
	float groupDepth = groupattr.w;
	vec4 style = getAttrBlock(gid, 2);
	vec2 padding = normal * grow;
	float depthOffset = 0.0;

	if(grow == 0.0) {
		outlineColor = vec4(0.3, 0.3, 0.3, 1.0);
		depthOffset = -0.25f;
	} else if(grow < 0.0) {
		outlineColor = vec4(0.0);
		// depthOffset = -0.25f;
	} else if(selection) {
		if(style.a == 0.0) {
			// Don't render it.
			//padding = vec2(0.0);
			gl_Position = vec4(-2.0, -2.0, 0.0, 1.0);
			return;
		}
		depthOffset = -0.5f;
		outlineColor = style;
	}

	vec2 origin = getAttrBlock(pid, 3).xy;
	vec2 paddedPosition = position + padding;
	uv = (paddedPosition + origin) / idims / vec2(textureSize(image, 0));
	vec2 pos = rotate(paddedPosition + offset, angle) + groupOffset;
	rotting = getAttrBlock(gid, 3).z;
	gl_Position = camera * vec4(pos, groupDepth + depthOffset, 1);
}



`, `#version 300 es
precision highp float;




uniform mat4 camera;
uniform vec2 idims;
/*
0: (xy: group center, z: group rotation, w: groupdepth)
1: (xy: offset from group, z: group id, w: piece archetype)
2: style color
4: (xy: texture origin)
*/
uniform sampler2D puzzleState;
uniform float grow;
uniform bool selection;
uniform sampler2D image;

in vec2 uv;
in vec4 outlineColor;
in float rotting;




out vec4 color;

void main() {
	color = outlineColor;
}
`), Z(this, Gt), this.uniforms = {
      camera: new qe(i => {}),
      idims: new qe(i => {}),
      grow: new qe(i => {}),
      selection: new qe(i => {})
    }, this.bindings = {
      puzzleState: new gt(i => {}),
      image: new gt(i => {})
    }
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Gt)), ye(this, wt, Ga).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, Ei),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Gt)), ye(this, wt, Ha).call(this), ye(this, wt, Va).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, wt, Xa).call(this), i.useProgram(n)
  }
}
Gt = new WeakMap, Ys = new WeakMap, qs = new WeakMap, Ei = new WeakMap, Qn = new WeakMap, wt = new WeakSet, Ga = function() {
  const e = Z(this, Gt),
    i = Z(this, Ei);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  } {
    const r = i.getUniformLocation(e, "idims");
    this.uniforms.idims.setter = o => i.uniform2fv(r, o), this.uniforms.idims.dirty = !0
  } {
    const r = i.getUniformLocation(e, "grow");
    this.uniforms.grow.setter = o => i.uniform1f(r, o), this.uniforms.grow.dirty = !0
  } {
    const r = i.getUniformLocation(e, "selection");
    this.uniforms.selection.setter = o => i.uniform1i(r, o), this.uniforms.selection.dirty = !0
  } {
    const r = i.getUniformLocation(e, "puzzleState");
    this.bindings.puzzleState.us.setter = o => i.uniform1i(r, o), this.bindings.puzzleState.us.dirty = !0
  } {
    const r = i.getUniformLocation(e, "image");
    this.bindings.image.us.setter = o => i.uniform1i(r, o), this.bindings.image.us.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, Va = function() {
  this.uniforms.camera.sync(), this.uniforms.idims.sync(), this.uniforms.grow.sync(), this.uniforms.selection.sync()
}, Ha = function() {
  this.bindings.puzzleState.sync(), this.bindings.image.sync()
}, Xa = function() {
  var e, i;
  (e = this.bindings.puzzleState.texture) == null || e.disable(), (i = this.bindings.image.texture) == null || i.disable()
};
var Vt, Qs, Ks, ki, Kn, yt, Wa, ja, Ya, qa;
class _m {
  constructor(e) {
    J(this, yt);
    b(this, "input", {
      position: "vec2"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Vt);
    J(this, Qs);
    J(this, Ks);
    J(this, ki);
    J(this, Kn);
    ft(this, ki, e.gl), [Me(this, Vt)._, Me(this, Qs)._, Me(this, Ks)._] = e.buildProgram(`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
precision highp sampler2D;



uniform mat4 camera;
uniform sampler2D puzzleState; // (texelformat: xy: center, z: rotation, w: groupdepth)
uniform vec2 piecesize;
uniform sampler2D image;
uniform int basepiece;
uniform vec2 idims;

out vec2 auv;
out float rotting;



in vec2 position; // quad position

vec2 rotate(vec2 v, float a) {
	float s = sin(a);
	float c = cos(a);
	mat2 m = mat2(c, -s, s, c);
	return m * v;
}

vec4 getAttrBlock(int id, int attr) {
	ivec2 pIndex = ivec2((id % 1024), id / 1024);
	int attrh = textureSize(puzzleState, 0).y / 4;
	pIndex.y += attrh * attr;
	return texelFetch(puzzleState, pIndex, 0);
}

void main() {
	int pid = gl_InstanceID + basepiece;
	vec4 paddr = getAttrBlock(pid, 1);
	vec2 offset = paddr.xy;
	int gid = int(paddr.z);

	vec4 groupattr = getAttrBlock(gid, 0);
	vec2 groupOffset = groupattr.xy;
	float angle = groupattr.z;
	float groupDepth = groupattr.w;

	vec2 paddedPosition = (position * piecesize);
	vec2 pos = rotate(paddedPosition + offset, angle) + groupOffset;
	vec2 origin = getAttrBlock(pid, 3).xy;
	auv = (paddedPosition + origin) / idims;
	rotting = getAttrBlock(gid, 3).z;
	gl_Position = camera * vec4(pos, groupDepth, 1);
}


`, `#version 300 es
precision highp float;
precision highp int;
precision highp sampler2DArray;
precision highp sampler2D;



uniform mat4 camera;
uniform sampler2D puzzleState; // (texelformat: xy: center, z: rotation, w: groupdepth)
uniform vec2 piecesize;
uniform sampler2D image;
uniform int basepiece;
uniform vec2 idims;

in vec2 auv;
in float rotting;





float rand(float n) {
	return fract(sin(n) * 43758.5453123);
}
float rand(vec2 n) {
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}
float noise(vec2 n) {
	const vec2 d = vec2(0.0, 1.0);
	vec2 b = floor(n), f = smoothstep(vec2(0.0), vec2(1.0), fract(n));
	return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
}

out vec4 color;

void main() {
	color = texture(image, auv);
	float f = 1.0;
	float s = noise(auv * 500.0);
	if(s >= rotting)
		f = 0.0;

	color.a *= f;
}
`), Z(this, Vt), this.uniforms = {
      camera: new qe(i => {}),
      piecesize: new qe(i => {}),
      basepiece: new qe(i => {}),
      idims: new qe(i => {})
    }, this.bindings = {
      puzzleState: new gt(i => {}),
      image: new gt(i => {})
    }
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Vt)), ye(this, yt, Wa).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, ki),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Vt)), ye(this, yt, Ya).call(this), ye(this, yt, ja).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, yt, qa).call(this), i.useProgram(n)
  }
}
Vt = new WeakMap, Qs = new WeakMap, Ks = new WeakMap, ki = new WeakMap, Kn = new WeakMap, yt = new WeakSet, Wa = function() {
  const e = Z(this, Vt),
    i = Z(this, ki);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  } {
    const r = i.getUniformLocation(e, "piecesize");
    this.uniforms.piecesize.setter = o => i.uniform2fv(r, o), this.uniforms.piecesize.dirty = !0
  } {
    const r = i.getUniformLocation(e, "basepiece");
    this.uniforms.basepiece.setter = o => i.uniform1i(r, o), this.uniforms.basepiece.dirty = !0
  } {
    const r = i.getUniformLocation(e, "idims");
    this.uniforms.idims.setter = o => i.uniform2fv(r, o), this.uniforms.idims.dirty = !0
  } {
    const r = i.getUniformLocation(e, "puzzleState");
    this.bindings.puzzleState.us.setter = o => i.uniform1i(r, o), this.bindings.puzzleState.us.dirty = !0
  } {
    const r = i.getUniformLocation(e, "image");
    this.bindings.image.us.setter = o => i.uniform1i(r, o), this.bindings.image.us.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, ja = function() {
  this.uniforms.camera.sync(), this.uniforms.piecesize.sync(), this.uniforms.basepiece.sync(), this.uniforms.idims.sync()
}, Ya = function() {
  this.bindings.puzzleState.sync(), this.bindings.image.sync()
}, qa = function() {
  var e, i;
  (e = this.bindings.puzzleState.texture) == null || e.disable(), (i = this.bindings.image.texture) == null || i.disable()
};
class vm {
  constructor(e, i, n) {
    b(this, "gl");
    b(this, "jigShadow");
    b(this, "jgl");
    this.jgl = e, this.gl = this.jgl.gl;
    const r = this.gl;
    this.jigShadow = new _m(this.jgl.glx);
    const o = new Pt(r, "STATIC_DRAW", ["position", "vec2"]);
    o.set(new Float32Array([0, 0, 1, 0, 1, 1, 0, 1].map(c => c - .5)));
    const a = new ni(r, "STATIC_DRAW", "UNSIGNED_SHORT");
    a.set(new Uint16Array([0, 1, 2, 2, 3, 0])), this.jigShadow.setAssembly(new ri(r, a, o)), this.jigShadow.uniforms.piecesize.data = [i * 2, n * 2]
  }
  draw(e, i, n, r, o, a) {
    const c = this.gl;
    this.jigShadow.bindings.puzzleState.texture = n, this.jigShadow.bindings.image.texture = r, this.jigShadow.uniforms.camera.data = a.projectionMatrix, this.jigShadow.uniforms.basepiece.data = e, this.jigShadow.uniforms.idims.data = o, this.jgl.glx.using(this.jigShadow, l => {
      l.drawElementsInstanced(c.TRIANGLES, 6, i)
    })
  }
  destroy() {
    this.jgl.destroy()
  }
}
const ws = 1024;
navigator.userAgent.toLowerCase().includes("firefox");
const Am = navigator.userAgent.toLowerCase().includes("macintosh"),
  En = {
    alpha: !0,
    antialias: !1,
    depth: !0,
    desynchronized: !0,
    failIfMajorPerformanceCaveat: void 0,
    premultipliedAlpha: void 0,
    preserveDrawingBuffer: !0,
    stencil: void 0
  },
  vo = "requestVideoFrameCallback" in HTMLVideoElement.prototype;
let wm = [0, 1, 2, 7, 10, 12, 14, 15, 17, 19, 20, 24, 25, 26, 31, 32, 34, 40, 41, 44, 50, 53, 61, 80],
  Qa = Date.now();
const Ao = 5 * 60 * 1e3,
  kn = 4 * 60 * 1e3,
  ym = (s, e) => {
    var n;
    if (!e.rotp || s.roomdef.endTime || !((n = s.roomdef.ext) != null && n.sticky) && e.pieces.length == 1) return 1;
    let i = Qa - e.rotp;
    return i >= Ao ? 0 : (i -= Ao - kn, i > kn ? 1 : 1 - i / kn)
  };
class ls {
  constructor(e, i) {
    b(this, "gl");
    b(this, "jigGl");
    b(this, "osd", new Tm);
    b(this, "setsData", []);
    b(this, "jigdraw");
    b(this, "totalPieces", 0);
    b(this, "MAX_TEXTURE_SIZE");
    b(this, "bgcolorasnum", Ki(Ye.snapshot().savedbgcol));
    b(this, "puzzleState");
    b(this, "puzzleBuffer");
    b(this, "bases", []);
    b(this, "setsVisibility", []);
    b(this, "camera");
    b(this, "rectangleDrawer");
    b(this, "boardDrawer");
    b(this, "scratchCanvas", Dn("canvas"));
    b(this, "scratchDrawingContext", this.scratchCanvas.getContext("2d"));
    b(this, "msaaFramebuffer", null);
    b(this, "colorRenderbuffer", null);
    b(this, "depthRenderbuffer", null);
    b(this, "msaaDFramebuffer", null);
    b(this, "colorDRenderbuffer", null);
    b(this, "depthDRenderbuffer", null);
    b(this, "pmsaa", 0);
    b(this, "colorTexture");
    b(this, "depthTexture");
    b(this, "textureFramebuffer");
    b(this, "rgba", !0);
    b(this, "squareDrawer");
    b(this, "dropShadows");
    this.game = e, this.canvas = i;
    {
      const o = new OffscreenCanvas(32, 32).getContext("webgl2", {
        failIfMajorPerformanceCaveat: !0
      });
      if (!o) throw new Error("Failed to init GPU quality renderer");
      const a = zl(o).map(c => o.getParameter(c) || "").join("").toLowerCase();
      ["powervr", "imagination", "mediatek", "mali"].some(c => a.includes(c)) && (En.alpha = !0, En.desynchronized = !1, this.rgba = !0)
    }
    const n = i.getContext("webgl2", En);
    if (!n) throw alert(`Your browser doesn't support WebGL2.

Try a different rendering mode in:
â‰¡ > user settings > rendering mode`), new Error("NOWEBGL2");
    this.gl = n, this.jigGl = new Ka(n), this.MAX_TEXTURE_SIZE = n.getParameter(n.MAX_TEXTURE_SIZE), console.log("MAX_TEXTURE_SIZE: " + this.MAX_TEXTURE_SIZE), this.jigdraw = new bm(this.jigGl.glx), this.camera = new Zo(i, n, -1, 1, () => devicePixelRatio, () => as, () => St), this.rectangleDrawer = new La(this.jigGl, this.camera), this.boardDrawer = new gm(this.jigGl, this.camera), this.setupMultisampledFramebuffer(this.rgba), this.setBgTexture(Ye.snapshot().savedbgtexture)
  }
  get drawingBufferWidth() {
    return this.gl.drawingBufferWidth
  }
  get drawingBufferHeight() {
    return this.gl.drawingBufferHeight
  }
  get msaa() {
    const e = Ye.snapshot().antialias;
    return e === 6 ? 4 : e
  }
  setupMultisampledFramebuffer(e) {
    const i = this.gl,
      n = i.getParameter(i.MAX_SAMPLES),
      r = Math.min(this.msaa || 2, n),
      o = this.drawingBufferWidth,
      a = this.drawingBufferHeight;
    i.deleteFramebuffer(this.msaaFramebuffer || null), i.deleteRenderbuffer(this.colorRenderbuffer || null), i.deleteRenderbuffer(this.depthRenderbuffer || null), i.deleteFramebuffer(this.msaaDFramebuffer || null), i.deleteRenderbuffer(this.colorDRenderbuffer || null), i.deleteRenderbuffer(this.depthDRenderbuffer || null);
    const c = i.createFramebuffer();
    if (!c) return;
    i.bindFramebuffer(i.FRAMEBUFFER, c);
    const l = i.createRenderbuffer();
    if (!l) return;
    i.bindRenderbuffer(i.RENDERBUFFER, l), i.renderbufferStorageMultisample(i.RENDERBUFFER, r, e ? i.RGBA8 : i.RGB8, o, a), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, l);
    const u = i.createRenderbuffer();
    if (u) {
      if (i.bindRenderbuffer(i.RENDERBUFFER, u), i.renderbufferStorageMultisample(i.RENDERBUFFER, r, i.DEPTH_COMPONENT24, o, a), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, u), i.checkFramebufferStatus(i.FRAMEBUFFER) !== i.FRAMEBUFFER_COMPLETE) {
        console.error("Framebuffer is not complete.");
        return
      }
      if (Am) {
        const f = i.createFramebuffer();
        if (!c) return;
        i.bindFramebuffer(i.FRAMEBUFFER, c);
        const h = i.createRenderbuffer();
        if (!l) return;
        i.bindRenderbuffer(i.RENDERBUFFER, l), i.renderbufferStorageMultisample(i.RENDERBUFFER, r, e ? i.RGBA8 : i.RGB8, o, a), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, l);
        const d = i.createRenderbuffer();
        if (!u) return;
        if (i.bindRenderbuffer(i.RENDERBUFFER, u), i.renderbufferStorageMultisample(i.RENDERBUFFER, r, i.DEPTH_COMPONENT24, o, a), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, u), i.checkFramebufferStatus(i.FRAMEBUFFER) !== i.FRAMEBUFFER_COMPLETE) {
          console.error("Framebuffer is not complete.");
          return
        }
        this.msaaDFramebuffer = f, this.colorDRenderbuffer = h, this.depthDRenderbuffer = d
      }
      this.msaaFramebuffer = c, this.colorRenderbuffer = l, this.depthRenderbuffer = u, this.prepareDumpTextures(), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null)
    }
  }
  prepareDumpTextures() {
    const e = this.gl,
      i = e.drawingBufferWidth,
      n = e.drawingBufferHeight,
      r = e.getParameter(e.TEXTURE_BINDING_2D);
    if (this.textureFramebuffer) e.bindTexture(e.TEXTURE_2D, this.colorTexture.tex), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, i, n, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.bindTexture(e.TEXTURE_2D, this.depthTexture.tex), e.texImage2D(e.TEXTURE_2D, 0, e.R32F, i, n, 0, e.RED, e.FLOAT, null);
    else if (this.colorTexture = this.jigGl.glx.createTexture(["RGBA", "RGBA", "UNSIGNED_BYTE"], [i, n]), this.depthTexture = this.jigGl.glx.createTexture(["R32F", "RED", "FLOAT"], [i, n]), this.textureFramebuffer = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, this.textureFramebuffer), e.bindTexture(e.TEXTURE_2D, this.colorTexture.tex), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.colorTexture.tex, 0), e.bindTexture(e.TEXTURE_2D, this.depthTexture.tex), e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, this.depthTexture.tex, 0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.checkFramebufferStatus(e.FRAMEBUFFER) !== e.FRAMEBUFFER_COMPLETE) throw console.error("Framebuffer is not complete."), 23;
    e.bindTexture(e.TEXTURE_2D, r)
  }
  doResolve() {
    const e = this.gl,
      i = e.drawingBufferWidth,
      n = e.drawingBufferHeight;
    e.bindFramebuffer(e.READ_FRAMEBUFFER, this.msaaFramebuffer), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, this.textureFramebuffer), e.blitFramebuffer(0, 0, i, n, 0, 0, i, n, e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT, e.NEAREST), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null)
  }
  async init() {
    const e = this.gl,
      {
        sets: i
      } = this.game.roomdef;
    let n = Math.max(...i.map(R => R.pieceWidth || 0)),
      r = Math.max(...i.map(R => R.pieceHeight || 0));
    (!n || !r) && (n = Math.max(...i.map(R => R.width / R.cols)), r = Math.max(...i.map(R => R.height / R.rows))), this.dropShadows = new lm(this.jigGl, n, r, this.game.roomdef.tabSize), this.squareDrawer = new vm(this.jigGl, n, r), this.scratchCanvas.width = 1, this.scratchCanvas.height = 1;
    const o = this.game.roomdef;
    let a = [];
    this.game.state.setPieces = [];
    const c = [];
    for (const [R, k] of o.sets.entries()) {
      const U = [k.width / k.cols, k.height / k.rows];
      [k.pieceWidth, k.pieceHeight] = U, this.game.view.maxPieceWidth = Math.max(this.game.view.maxPieceWidth, U[0]), this.game.view.maxPieceHeight = Math.max(this.game.view.maxPieceHeight, U[1]), console.time("Generate pieces");
      const S = this.generatePieces(k, R, o.tabSize);
      a.push(S), console.timeEnd("Generate pieces"), c.push(o.groups.filter(v => v.set == R).map(v => v.indices.map(F => this.toGeoPiece(a[v.set][F], F, v, k))).flat().sort((v, F) => v.index - F.index))
    }
    this.bases = this.game.state.sets.map((R, k) => this.game.state.sets.slice(0, k).reduce((U, S) => U + S.cols * S.rows, 0)), this.game.state.setPieces = c;
    let l = a.flat();
    this.totalPieces = l.length, this.camera.setClippingPlanes(-(this.totalPieces * 3 + 10), 10);
    const u = Math.min(this.totalPieces, ws),
      f = Math.floor(this.totalPieces / ws) + 1,
      h = u * f * 4;
    this.puzzleBuffer = new Float32Array(h * 4), this.puzzleState = this.jigGl.glx.createTexture(["RGBA32F", "RGBA", "FLOAT"], [u, f * 4], void 0, {
      TEXTURE_WRAP_S: "CLAMP_TO_EDGE",
      TEXTURE_WRAP_T: "CLAMP_TO_EDGE"
    });
    let d = 0,
      m = [],
      g = [],
      p = [],
      _ = [],
      A = 0,
      w = 0;
    this.setsData.length = 0;
    for (const [R, k] of this.game.state.sets.entries()) {
      const U = (v => F => F.index + v)(w);
      w += k.cols * k.rows;
      for (let v of c[R]) {
        for (let H = 0; H < v.elementBuffer.length; ++H) v.elementBuffer[H] += d;
        const F = v.positionBuffer.length / 2;
        m.push(v.elementBuffer), g.push(v.positionBuffer), p.push(v.normalBuffer);
        const M = U(v);
        this.puzzleBuffer.set(v.origin, 3 * h + M * 4);
        const V = new Float32Array(F).fill(M);
        _.push(V), v.indices = [d, v.elementBuffer.length], d += F
      }
      const S = c[R].map(v => v.indices[1]).flat().reduce((v, F) => v + F);
      this.setsData.push({
        pidOf: U,
        range: [A, S],
        reuploadTexture: !!k.isvideo,
        textureUnit: 4 + R,
        texture: this.jigGl.glx.createTexture(["RGBA8", "RGBA", "UNSIGNED_BYTE"], [1, 1], new Uint8Array([127, 127, 127, 255]))
      }), A += S
    }
    const y = new Pt(e, "STATIC_DRAW", ["position", "vec2"]);
    y.set(Tn(g));
    const E = new Pt(e, "STATIC_DRAW", ["normal", "vec2"]);
    E.set(Tn(p));
    const z = new Pt(e, "STATIC_DRAW", ["pieceid", "float"]);
    z.set(Tn(_));
    const I = new ni(e, "STATIC_DRAW", "UNSIGNED_INT");
    I.set(km(m)), this.jigdraw.setAssembly(new ri(e, I, y, E, z)), this.setsVisibility = new Array(this.game.state.sets.length)
  }
  toGeoPiece(e, i, n, r) {
    return {
      index: i,
      ...e,
      rot: n.rot || 0,
      xi: i % r.cols,
      yi: ~~(i / r.cols),
      x: 0,
      y: 0,
      puzzleX: -r.pieceWidth / 2,
      puzzleY: -r.pieceHeight / 2,
      globalX: 0,
      globalY: 0,
      puzzle: e.puzzle,
      type: e.type
    }
  }
  generatePieces(e, i, n = .1) {
    const r = [e.width, e.height],
      o = [e.cols, e.rows],
      [a, c] = o,
      {
        pieceWidth: l,
        pieceHeight: u
      } = e,
      f = Array(a * c),
      h = r[0] / o[0],
      d = r[1] / o[1];
    for (let m = 0, g = 0; m < c; ++m)
      for (let p = 0; p < a; ++p, g++) {
        const {
          pieceShape: _
        } = ha(f, p, m, e, l, u, {
          x: 0,
          y: 0
        }, this.game.roomdef.jitter, this.game.roomdef.fakeEdge, this.game.roomdef.zigzag);
        f[g] = {
          ...pa(_, n, p, m, h, d, !1),
          puzzle: _
        }, f[g].id = f[g].group = g
      }
    return f
  }
  uploadTexture(e) {
    const i = this.gl,
      n = this.game.state.sets.indexOf(e.set),
      r = this.setsData[n],
      o = e.isVideo,
      a = e.element;
    r.element = a;
    let c = Em(a, this.MAX_TEXTURE_SIZE);
    if (r.texture = this.jigGl.glx.createTexture(["RGBA8", "RGBA", "UNSIGNED_BYTE"], c.image, void 0, {
        TEXTURE_WRAP_S: "CLAMP_TO_EDGE",
        TEXTURE_WRAP_T: "CLAMP_TO_EDGE",
        TEXTURE_MIN_FILTER: o ? "LINEAR" : "LINEAR_MIPMAP_LINEAR",
        TEXTURE_MAG_FILTER: "LINEAR"
      }), i.getError() !== i.NO_ERROR && !o) {
      const u = document.createElement("canvas"),
        f = u.getContext("2d");
      u.width = a.width, u.height = a.height, f.drawImage(a, 0, 0);
      const h = f.getImageData(0, 0, u.width, u.height);
      u.remove(), r.texture.realloc(h, {
        TEXTURE_WRAP_S: "CLAMP_TO_EDGE",
        TEXTURE_WRAP_T: "CLAMP_TO_EDGE",
        TEXTURE_MIN_FILTER: o ? "LINEAR" : "LINEAR_MIPMAP_LINEAR",
        TEXTURE_MAG_FILTER: "LINEAR"
      })
    }
    if (o) {
      const u = c.image;
      vo && u.requestVideoFrameCallback(function f() {
        r.reuploadTexture = !0, u.requestVideoFrameCallback(f)
      }), r.element = u
    }
  }
  uploadTextures(e) {
    for (const i of e) this.uploadTexture(i)
  }
  destroy() {
    var e;
    for (const i of this.setsData) delete i.element;
    this.jigGl.destroy(), this.osd.destroy(), (e = this.dropShadows) == null || e.destroy()
  }
  doRender() {
    const e = this.game.view,
      i = this.gl,
      n = performance.now();
    Qa = Date.now();
    const r = 1 / e.scale,
      o = Ye.snapshot().hideosc ? 3.125 * r : (1.5 + Math.sin(n * .004) * .5) * 2.5 * r,
      a = Math.min(this.game.state.sets[0].pieceWidth * .05, .75) * r * .5;
    this.camera.update(e.scale, e.x, e.y), this.osd.clear(), this.pmsaa != this.msaa && (this.setupMultisampledFramebuffer(this.rgba), this.pmsaa = this.msaa), this.msaa && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, this.msaaFramebuffer), i.bindFramebuffer(i.READ_FRAMEBUFFER, this.msaaDFramebuffer)), i.clearColor(.1, .1, .1, 1), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), i.depthFunc(i.LEQUAL), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE), this.boardDrawer.draw(0, 0, this.game.roomdef.boardWidth, this.game.roomdef.boardHeight, this.bgcolorasnum), i.enable(i.BLEND), this.updateSets(), i.enable(i.DEPTH_TEST), this.jigdraw.uniforms.camera.data = this.camera.projectionMatrix, this.jigdraw.bindings.puzzleState.texture = this.puzzleState;
    let c = !1,
      l = 0;
    for (let u = 0; u < this.setsData.length; u++) {
      const f = this.game.state.sets[u],
        h = f.cols * f.rows;
      this.setsVisibility[u], c = !0;
      const d = this.setsData[u],
        m = 4,
        [g, p] = d.range;
      this.jigdraw.bindings.image.texture = d.texture, d.reuploadTexture && d.element && (d.reuploadTexture = !vo, d.texture.realloc(d.element, {
        TEXTURE_WRAP_S: "CLAMP_TO_EDGE",
        TEXTURE_WRAP_T: "CLAMP_TO_EDGE",
        TEXTURE_MIN_FILTER: "LINEAR",
        TEXTURE_MAG_FILTER: "LINEAR"
      })), this.jigdraw.uniforms.idims.data = [f.width, f.height], this.jigGl.glx.using(this.jigdraw, _ => {
        i.colorMask(!1, !1, !1, !1), this.jigdraw.uniforms.grow.data = -a, this.jigdraw.uniforms.selection.data = 0, this.jigdraw.uniforms.grow.sync(), this.jigdraw.uniforms.selection.sync(), _.drawElements(i.TRIANGLES, p, g * m), i.colorMask(!0, !0, !0, !0), this.jigdraw.uniforms.grow.data = 1 - this.game.view.borderOpacity, this.jigdraw.uniforms.grow.sync(), _.drawElements(i.TRIANGLES, p, g * m)
      }), i.depthFunc(i.EQUAL), this.squareDrawer.draw(l, h, this.puzzleState, d.texture, [f.width, f.height], this.camera), l += h, i.depthMask(!0), i.depthFunc(i.LEQUAL), this.jigGl.glx.using(this.jigdraw, _ => {
        this.jigdraw.uniforms.grow.data = o, this.jigdraw.uniforms.selection.data = 1, this.jigdraw.uniforms.grow.sync(), this.jigdraw.uniforms.selection.sync(), _.drawElements(i.TRIANGLES, p, g * m)
      }), i.depthFunc(i.LEQUAL)
    }
    i.enable(i.BLEND), i.blendFunc(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA), !Ye.snapshot().hideshadow && c && (i.depthMask(!1), this.dropShadows.draw(this.game.roomdef.pieces, this.puzzleState, this.camera), i.depthMask(!0)), i.disable(i.DEPTH_TEST), this.game.entities.forEach(u => u.doRender()), e.isBoxSelecting && this.rectangleDrawer.drawRect(...e.selection[0], ...fn(e.selection[1], e.selection[0])), this.msaa && (i.bindFramebuffer(i.READ_FRAMEBUFFER, this.msaaFramebuffer), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT), i.blitFramebuffer(0, 0, this.drawingBufferWidth, this.drawingBufferHeight, 0, 0, this.drawingBufferWidth, this.drawingBufferHeight, i.COLOR_BUFFER_BIT, i.NEAREST))
  }
  updateSets() {
    var c, l, u;
    const e = [...this.setsVisibility];
    this.setsVisibility.fill(!1);
    let i = !1;
    for (let f = 0; f < this.game.state.groups.length; f++) {
      const h = this.game.state.groups[f],
        d = this.setsVisibility[h.set] || this.isVisibleInCameraView(h);
      (c = this.setsVisibility)[l = h.set] || (c[l] = d);
      const m = h.dirty || !!h.rotp || !1;
      i || (i = d && m)
    }
    if (!i) {
      for (let f = 0; f < this.setsVisibility.length; f++) {
        const h = e[f] && !this.setsVisibility[f];
        i || (i = h)
      }
      if (!i) return
    }
    let n = !1;
    const r = Math.min(this.totalPieces, ws),
      o = Math.floor(this.totalPieces / ws) + 1,
      a = r * o * 4;
    for (let f = 0; f < this.game.state.groups.length; f++) {
      const h = this.game.state.groups[f],
        d = h.id * 4,
        m = d + a * 2,
        g = d + a * 3;
      h.dirty = !1;
      const p = this.bases[h.set];
      this.puzzleBuffer[d] = h.x, this.puzzleBuffer[d + 1] = h.y, this.puzzleBuffer[d + 2] = -h.angle;
      const _ = this.totalPieces * (h.dragged || h.selected ? 2 : h.user ? 1 : 0);
      this.puzzleBuffer[d + 3] = _ + f, this.puzzleBuffer.set(h.selected ? [1, 1, 1, 1] : ((u = h.user) == null ? void 0 : u.highlight) || [0, 0, 0, 0], m), this.puzzleBuffer[g + 2] = ym(this.game, h);
      for (let A = 0; A < h.pieces.length; A++) {
        const w = h.pieces[A],
          y = (p + w.index) * 4;
        this.puzzleBuffer[a + y] = w.x, this.puzzleBuffer[a + y + 1] = w.y, this.puzzleBuffer[a + y + 2] = h.id, this.puzzleBuffer[a + y + 3] = w.type
      }
      n = !0
    }
    n && this.puzzleState.updateRegion(this.puzzleBuffer, [0, 0], [r, o * 4])
  }
  isVisibleInCameraView(e) {
    const {
      pieceWidth: i,
      pieceHeight: n
    } = this.game.state.sets[e.set];
    let r = (e.w + i) / 2,
      o = (e.h + n) / 2;
    e.angle !== e.targetAngle && (r = o = Math.sqrt(r * r + o * o));
    const a = e.rot === ts.EAST || e.rot === ts.WEST,
      c = a ? o : r,
      l = a ? r : o;
    return e.x + c > this.camera.left && e.x - c < this.camera.right && e.y + l > this.camera.top && e.y - l < this.camera.bottom
  }
  complete() {
    this.gl.finish()
  }
  setBgCol(e) {
    this.bgcolorasnum = Ki(e)
  }
  setBgTexture(e) {
    this.boardDrawer.setTexture(e)
  }
  doLoadInputImage() {}
  doHitTest(e, i, n) {
    return this.scratchDrawingContext.beginPath(), Ms(this.scratchDrawingContext, e.x + e.puzzleX, e.y + e.puzzleY, e.puzzle, this.game.roomdef.tabSize), this.scratchDrawingContext.isPointInPath(i, n)
  }
  canvasSizeChanged(e, i) {
    this.setupMultisampledFramebuffer(this.rgba)
  }
}

function Em(s, e) {
  const i = "videoHeight" in s,
    n = i ? s.videoWidth : s.naturalWidth,
    r = i ? s.videoHeight : s.naturalHeight;
  if (i || n <= e && r <= e) return {
    image: s,
    width: n,
    height: r
  };
  const o = document.createElement("canvas"),
    a = o.getContext("2d", {
      alpha: !0,
      willReadFrequently: !0
    });
  let c = e;
  do try {
    const l = Math.min(c / n, c / r);
    o.width = n * l, o.height = r * l, a.drawImage(s, 0, 0, o.width, o.height);
    const u = a.getImageData(o.width - 1, o.height - 1, 1, 1);
    if (u.data[0] || u.data[1] || u.data[2] || u.data[3]) {
      const f = a.getImageData(0, 0, o.width, o.height);
      return console.log(`Resized to ${f.width}x${f.height}`), {
        image: f,
        width: o.width,
        height: o.height
      }
    }
  } finally {
    o.width = o.height = 0, c >>= 1
  }
  while (c >= 2048);
  throw new Error("Resizing failed")
}

function Tn(s) {
  let e = s.reduce((r, o) => r + o.length, 0),
    i = new Float32Array(e),
    n = 0;
  for (let r of s) i.set(r, n), n += r.length;
  return i
}

function km(s) {
  let e = s.reduce((r, o) => r + o.length, 0),
    i = new Uint32Array(e),
    n = 0;
  for (let r of s) i.set(r, n), n += r.length;
  return i
}
class Tm {
  constructor() {
    b(this, "timeout");
    b(this, "lines", []);
    b(this, "div");
    this.div = document.querySelector("body").appendChild(document.createElement("div")), Object.assign(this.div.style, {
      position: "absolute",
      top: "80px",
      left: "1em",
      whiteSpace: "pre-wrap",
      fontFamily: "monospace",
      pointerEvents: "none"
    })
  }
  log(...e) {
    this.lines.push(e.join("	")), clearTimeout(this.timeout), this.timeout = setTimeout(() => {
      const i = this.lines.join(`
`);
      i != this.div.textContent && (this.div.textContent = i)
    })
  }
  clear() {
    this.lines.length = 0
  }
  destroy() {
    this.div.remove()
  }
}
class Ka {
  constructor(e) {
    b(this, "destructors", []);
    b(this, "glx");
    this.gl = e, this.glx = new $l(e)
  }
  createProgram(e, i) {
    const n = this.gl,
      r = Ds(n, n.VERTEX_SHADER, e),
      o = Ds(n, n.FRAGMENT_SHADER, i),
      a = n.createProgram();
    n.attachShader(a, r), n.attachShader(a, o), n.linkProgram(a);
    const c = n.getProgramInfoLog(a);
    if (c && console.warn(c), !n.getProgramParameter(a, n.LINK_STATUS)) throw new Error("Shader linking failed.");
    return n.detachShader(a, r), n.deleteShader(r), n.detachShader(a, o), n.deleteShader(o), this.destructors.push(() => n.deleteProgram.call(n, a)), a
  }
  createDataTexture(e, i, n, r, o = this.gl.FLOAT, a = this.gl.RGBA, c = this.gl.RGBA32F) {
    const l = this.gl,
      u = this.createTexture(),
      f = l.getParameter(l.ACTIVE_TEXTURE);
    return l.activeTexture(l.TEXTURE0 + e), l.bindTexture(l.TEXTURE_2D, u), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST), l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST), l.texImage2D(l.TEXTURE_2D, 0, c, i, n, 0, a, o, r || null), l.activeTexture(f), {
      texture: u,
      textureUnit: e,
      width: i,
      height: n
    }
  }
  create(e, i) {
    const n = this.gl,
      r = e.call(n);
    if (!r) throw new Error(`${e.name} failed.`);
    return this.destructors.push(() => void i.call(n, r)), r
  }
  destroy() {
    for (const e of this.destructors) e()
  }
  createBuffer() {
    const e = this.gl;
    return this.create(e.createBuffer, e.deleteBuffer)
  }
  createFramebuffer() {
    const e = this.gl;
    return this.create(e.createFramebuffer, e.deleteFramebuffer)
  }
  createQuery() {
    const e = this.gl;
    return this.create(e.createQuery, e.deleteQuery)
  }
  createRenderbuffer(e) {
    return this.create(e.createRenderbuffer, e.deleteRenderbuffer)
  }
  createSampler() {
    const e = this.gl;
    return this.create(e.createSampler, e.deleteSampler)
  }
  createTexture() {
    const e = this.gl;
    return this.create(e.createTexture, e.deleteTexture)
  }
  createTransformFeedback() {
    const e = this.gl;
    return this.create(e.createTransformFeedback, e.deleteTransformFeedback)
  }
  createVertexArray() {
    const e = this.gl;
    return this.create(e.createVertexArray, e.deleteVertexArray)
  }
}
class xm {
  constructor() {
    b(this, "controller", new Ad);
    b(this, "sets", []);
    b(this, "setPieces", []);
    b(this, "groups", []);
    b(this, "transformedboard", [])
  }
  isGameEnded() {
    return this.groups.length === this.sets.length
  }
  updatePieceCoordinates(e) {
    e.dirty = !0;
    for (const i of e.pieces) i.globalX = e.x + Wi(e.rot, i.x, i.y), i.globalY = e.y + ji(e.rot, i.x, i.y), i.rot = e.rot
  }
  reorderGroupBySize(e) {
    e.dirty = !0, Cn(this.groups, e);
    for (let i = this.groups.length; i > 0; i--)
      if (this.groups[i - 1].pieces.length >= e.pieces.length) return void this.groups.splice(i, 0, e);
    this.groups.unshift(e)
  }
  syncGroups(e) {
    this.groups = e, this.groups.sort((i, n) => n.ids.length - i.ids.length), this.transformedboard = [];
    for (const i of this.groups) {
      this.updateGroupPieces(i), this.updatePieceCoordinates(i), this.transformedboard[i.id] = i;
      for (const n of i.ids) this.transformedboard[n] = i
    }
  }
  updateGroupPieces(e) {
    let i = 1e6,
      n = 1e6,
      r = 0,
      o = 0;
    for (const h of e.pieces) i = Math.min(i, h.xi), n = Math.min(n, h.yi), r = Math.max(r, h.xi), o = Math.max(o, h.yi);
    const a = this.sets[e.set],
      c = a.pieceWidth,
      l = a.pieceHeight,
      u = -(r - i) * c / 2,
      f = -(o - n) * l / 2;
    for (const h of e.pieces) h.x = (h.xi - i) * c + u, h.y = (h.yi - n) * l + f;
    e.w = (r - i + 1) * c, e.h = (o - n + 1) * l
  }
  rectangleOverlap(e, i, n, r, o) {
    r < 0 && (i += r, r = -r), o < 0 && (n += o, o = -o);
    const a = e.rot === 1 || e.rot === 3,
      c = this.sets[e.set],
      l = c.pieceWidth,
      u = c.pieceHeight,
      f = a ? u : l,
      h = a ? l : u;
    for (const d of e.pieces) {
      const m = d.globalX + d.puzzleX,
        g = d.globalY + d.puzzleY;
      if (i <= m + f && i + r >= m && n <= g + h && n + o >= g) return !0
    }
    return !1
  }
  setGroupRotation(e, i) {
    const n = 2 * Math.PI;
    let r = i * n / 4;
    if (i === (e.rot + 1) % 4) {
      for (; r < e.angle;) r += n;
      for (; r - n > e.angle;) r -= n
    } else {
      for (; r > e.angle;) r -= n;
      for (; r + n < e.angle;) r += n
    }
    e.targetAngle = r, e.rot = i, this.updatePieceCoordinates(e)
  }
}

function Wi(s, e, i) {
  switch (s) {
    case 0:
      return e;
    case 1:
      return -i;
    case 2:
      return -e;
    case 3:
      return i;
    default:
      return 0
  }
}

function ji(s, e, i) {
  switch (s) {
    case 0:
      return i;
    case 1:
      return e;
    case 2:
      return -i;
    case 3:
      return -e;
    default:
      return 0
  }
}
class Rm {
  constructor(e, i, n, r, o) {
    b(this, "releasedGroups", []);
    b(this, "groupsJoined", !1);
    this.state = e, this.view = i, this.rules = n, this.conn = r, this.dispatcher = o
  }
  releaseHeldGroups() {
    var i;
    const e = (n, r, o, a) => {
      var c;
      (c = this.conn) == null || c.merge(n, r, o, a)
    };
    if (this.view.pickedGroups.length) {
      for (let r = 0, o = this.view.pickedGroups; r < o.length; r++) {
        let a = o[r];
        a.dragged = !1, this.state.updatePieceCoordinates(a), a.dirty = !0
      }(i = this.conn) == null || i.drop(this.view.pickedGroups), this.releasedGroups = this.view.pickedGroups.map(function(r) {
        return {
          id: r.id,
          pieces: r.pieces.length,
          startX: r.startX,
          startY: r.startY,
          endX: r.x,
          endY: r.y
        }
      });
      const n = this;
      this.view.pickedGroups.length === 1 && function(r) {
        n.groupsJoined = !1;
        const o = n.state.sets[r.set],
          a = o.cols,
          c = o.rows;
        for (const l of r.pieces) l.xi > 0 && (r = n.collisionDetection(r, l, -1, 0, e)), l.yi > 0 && (r = n.collisionDetection(r, l, 0, -1, e)), l.xi < a - 1 && (r = n.collisionDetection(r, l, 1, 0, e)), l.yi < c - 1 && (r = n.collisionDetection(r, l, 0, 1, e));
        return n.state.reorderGroupBySize(r), n.groupsJoined
      }(this.view.pickedGroups[0]) && (this.releasedGroups = []), this.view.pickedGroups.length = 0
    }
    this.view.edgePanX = this.view.edgePanY = 0
  }
  collisionDetection(e, i, n, r, o) {
    const a = this.state.sets[e.set];
    if (!a) return e;
    const c = this.state.setPieces[e.set][i.xi + n + (i.yi + r) * a.cols];
    if (e.pieces.indexOf(c) === -1 && i.rot === c.rot) {
      const l = n * a.pieceWidth,
        u = r * a.pieceHeight,
        f = Wi(i.rot, l, u),
        h = ji(i.rot, l, u),
        d = Math.min(c.puzzle.width, c.puzzle.height) * .25;
      if (Nn(c.globalX, c.globalY, i.globalX + f, i.globalY + h) < d) {
        const m = this.state.groups.find(g => g.pieces.includes(c));
        if (!m) throw new Error("no group");
        if (!m.user) {
          const g = e.id,
            p = m.id;
          if (g !== p) {
            if (this.rules.noStack() && m.pieces.length <= 4 && this.state.groups.find(A => A.set == m.set && A.id != m.id && A.pieces.length == m.pieces.length && Nn(A.x, A.y, m.x, m.y) < d)) return e;
            e = this.mergeGroups(e, m, this.groupsJoined, !0), o(g, p, e.x, e.y), this.groupsJoined = !0
          }
        }
      }
    }
    return e
  }
  preventMovementOOB(e) {
    const i = ts.EAST === e.rot || ts.WEST === e.rot,
      n = i ? e.h : e.w,
      r = i ? e.w : e.h;
    e.x = ut(e.x, n / 2, this.view.boardWidth - n / 2), e.y = ut(e.y, r / 2, this.view.boardHeight - r / 2)
  }
  mergeGroups(e, i, n, r) {
    const o = n && e.pieces.length > i.pieces.length ? e : i;
    let a = 1e6,
      c = 1e6,
      l = 0,
      u = 0;
    for (const E of o.pieces) a = Math.min(a, E.xi), c = Math.min(c, E.yi), l = Math.max(l, E.xi), u = Math.max(u, E.yi);
    for (const E of e.pieces) i.pieces.push(E);
    const f = o.w,
      h = o.h;
    this.state.updateGroupPieces(i);
    let d = 1e6,
      m = 1e6,
      g = 0,
      p = 0;
    for (const E of i.pieces) d = Math.min(d, E.xi), m = Math.min(m, E.yi), g = Math.max(g, E.xi), p = Math.max(p, E.yi);
    const {
      pieceWidth: _,
      pieceHeight: A
    } = this.state.sets[i.set], w = -f / 2 + (d - a) * _ + i.w / 2, y = -h / 2 + (m - c) * A + i.h / 2;
    i.x = o.x + Wi(i.rot, w, y), i.y = o.y + ji(i.rot, w, y), this.preventMovementOOB(i), this.state.updatePieceCoordinates(i), Cn(this.state.groups, e), e.dirty = !0;
    for (const E of e.ids) i.ids.push(E);
    i.ids.push(Math.min(e.id, i.id)), i.id = Math.max(e.id, i.id), i.locked = e.locked || i.locked, i.user = void 0, i.selectedByOther = !1, this.state.transformedboard[i.id] = i, i.rotp && (i.rotp = Date.now());
    for (const E of i.ids) this.state.transformedboard[E] = i;
    return this.state.isGameEnded() && (this.view.borderOpacity = 0), this.view.stickied.delete(e), this.dispatcher(new CustomEvent("merge", {
      detail: {
        isMe: r,
        group: i
      }
    })), i
  }
  pickGroup(e) {
    var n, r;
    if (e.locked) return !1;
    let i = !1;
    if (!e.selected) {
      const o = [];
      for (const a of this.state.groups) a.selected && (a.selected = !1, o.push(a), a.dirty = !0);
      o.length && ((n = this.conn) == null || n.deselect(o), o.forEach(a => a.dirty = !0), i = !0)
    }
    if (e.selected)
      for (const o of this.state.groups) !o.selected || o === e || (o.startX = o.x, o.startY = o.y, o.dragged = !0, this.view.pickedGroups.push(o));
    e.startX = e.x, e.startY = e.y, e.dragged = !0, this.view.pickedGroups.push(e);
    for (const o of this.view.pickedGroups) this.state.reorderGroupBySize(o);
    return (r = this.conn) == null || r.pick(this.view.pickedGroups), i
  }
  move(e, i) {
    var n;
    for (const r of this.view.pickedGroups) r.x = r.startX + e, r.y = r.startY + i, this.preventMovementOOB(r), r.dirty = !0;
    (n = this.conn) == null || n.move(this.view.pickedGroups)
  }
  alignCamera(e) {
    let i, n;
    e & 16 ? i = this.view.maxPieceWidth : e & 32 ? i = -this.view.boardWidth / 2 + innerWidth / (2 * this.view.scale) : i = -this.view.boardWidth + innerWidth / this.view.scale - this.view.maxPieceWidth, e & 1 ? n = this.view.maxPieceHeight : e & 2 ? n = -this.view.boardHeight / 2 + innerHeight / (2 * this.view.scale) : n = -this.view.boardHeight + innerHeight / this.view.scale - this.view.maxPieceHeight, this.setViewPos(i, n, this.view.scale)
  }
  setViewPos(e, i, n) {
    const r = this.view.x,
      o = this.view.y,
      a = this.view.scale,
      c = this.view.canvasClickX / this.view.scale - this.view.x,
      l = this.view.canvasClickY / this.view.scale - this.view.y;
    this.view.x = e, this.view.y = i, this.view.scale = n, this.view.updateRoomView(), this.view.canvasClickX = (c + this.view.x) * this.view.scale, this.view.canvasClickY = (l + this.view.y) * this.view.scale, this.dragMove(this.view.pageClickX, this.view.pageClickY, !0), ti(Fn(St || r !== this.view.x || o !== this.view.y || a !== this.view.scale))
  }
  updateRenderView(e) {
    (this.view.edgePanX || this.view.edgePanY) && this.setViewPos(this.view.x + this.view.edgePanX * e, this.view.y + this.view.edgePanY * e, this.view.scale)
  }
  dragMove(e, i, n) {
    var a, c;
    const r = (e - this.view.canvasClickX) / this.view.scale,
      o = (i - this.view.canvasClickY) / this.view.scale;
    if ((c = (a = this.view.currentMouseEvent) == null ? void 0 : a.move) == null || c.call(a, r, o), this.view.pickedGroups.length ? (this.move(r, o), ti(!0)) : this.view.isBoxSelecting && (this.view.selection[1] = [r, o], ti(!0)), !n) {
      if (this.view.isPanning) {
        this.setViewPos(this.view.prePanViewX + (e - this.view.panStartPosX) / this.view.scale, this.view.prePanViewY + (i - this.view.panStartPosY) / this.view.scale, this.view.scale);
        return
      }(this.view.pickedGroups.length || this.view.isBoxSelecting) && (this.view.edgePanX = wo(e, innerWidth) / this.view.scale, this.view.edgePanY = wo(i, innerHeight) / this.view.scale)
    }
  }
  boxSelect(e, i) {
    var u, f;
    if (!this.view.isBoxSelecting) return;
    const [
      [n, r],
      [o, a]
    ] = i, c = [], l = [];
    for (const h of this.state.groups) {
      if (h.user || h.locked || this.rules.sticky && this.view.stickied.size >= 2 && !this.view.stickied.has(h)) continue;
      let d = this.state.rectangleOverlap(h, n, r, o, a);
      e && (d = h.selected || d), h.selected !== d && (h.selected = d, h.dirty = !0, d ? c.push(h) : l.push(h))
    }
    l.length && ((u = this.conn) == null || u.deselect(l), l.forEach(h => h.dirty = !0)), c.length && ((f = this.conn) == null || f.select(c)), this.view.isBoxSelecting = !1
  }
  limitZoom(e, i) {
    for (var n = 0, r = 0, o = 0, a = this.state.sets; o < a.length; o++) {
      const l = a[o];
      n += l.width, r += l.height
    }
    const c = i ? 4 : 1;
    return ut(e, Math.min(.1, innerWidth / (1.5 * n), innerHeight / (1.5 * r)), c)
  }
  deselectSelected() {
    var i;
    const e = [];
    for (const n of this.state.groups) n.selected && (n.selected = !1, e.push(n));
    e.length && ((i = this.conn) == null || i.deselect(e), e.forEach(n => n.dirty = !0))
  }
  toggleSelect(e) {
    var i, n;
    return e.selected = !e.selected, e.dirty = !0, e.selected ? (i = this.conn) == null || i.select([e]) : ((n = this.conn) == null || n.deselect([e]), e.dirty = !0), e.selected
  }
  turn(e, i) {
    var n;
    this.rules.canRotate() && (e.forEach(r => this.state.setGroupRotation(r, (r.rot + (i ? 1 : 3)) % 4)), (n = this.conn) == null || n.turn(e))
  }
  toggleLock(e) {
    var i, n, r;
    return this.rules.canLock() ? (e.locked = !e.locked, e.selected && (e.selected = !1, (i = this.conn) == null || i.deselect([e]), e.dirty = !0), e.locked ? ((n = this.conn) == null || n.lock([e]), this.dispatcher(new Event("lock"))) : ((r = this.conn) == null || r.unlock([e]), this.dispatcher(new Event("unlock"))), e.locked) : e.locked ?? !1
  }
  unlockAllPieces() {
    var i;
    if (!this.rules.canLock()) return !1;
    const e = this.state.groups.filter(n => n.locked);
    if (!e.length) return !1;
    for (const n of e) n.locked = !1;
    return (i = this.conn) == null || i.unlock(e), this.dispatcher(new Event("unlock")), !0
  }
  revertGroups() {
    var r, o;
    if (this.releasedGroups.length) {
      for (var e = [], i = 0, n = this.releasedGroups; i < n.length; i++) {
        let a = n[i],
          c = this.state.transformedboard[a.id];
        c && !c.user && c.pieces.length === a.pieces && c.x === a.endX && c.y === a.endY && e.push({
          id: c.id,
          x: a.startX,
          y: a.startY
        })
      }
      if (e.length) {
        for (let a = 0; a < e.length; a++) {
          const c = e[a],
            l = this.state.transformedboard[c.id];
          l && (l.x = c.x, l.y = c.y, this.state.updatePieceCoordinates(l))
        }(r = this.conn) == null || r.pick(e), (o = this.conn) == null || o.drop(e), ti(!0)
      }
    }
  }
  stopDragging(e, i) {
    var n, r;
    e.dragged && (Cn(this.view.pickedGroups, e), e.dragged = !1, (n = this.conn) == null || n.drop([e])), i || (e.selected && ((r = this.conn) == null || r.deselect([e])), e.selected = !1), e.dirty = !0
  }
  posIsInGroup(e, i, n, r) {
    e -= n.x, i -= n.y;
    const o = (4 - n.rot) % 4,
      a = Wi(o, e, i),
      c = ji(o, e, i);
    for (const l of n.pieces)
      if (yo(a, c, l) && r.doHitTest(l, a, c)) return !0;
    return !1
  }
  posIsInGroupSlot(e, i, n) {
    e -= n.x, i -= n.y;
    const r = (4 - n.rot) % 4,
      o = Wi(r, e, i),
      a = ji(r, e, i),
      c = this.state.sets[n.set],
      l = c.pieceWidth,
      u = c.pieceHeight,
      f = n.pieces;
    for (const h of f)
      if (yo(o, a, h)) {
        const d = h.x + h.puzzleX - 5,
          m = h.y + h.puzzleY - 5;
        if (o > d && a > m && o < d + l + 10 && a < m + u + 10) return !0
      } return !1
  }
  tryGetGroupAt(e, i, n, r, o, a) {
    const c = (f, h, d) => this.posIsInGroup(f, h, d, n),
      l = (f, h, d) => this.posIsInGroupSlot(f, h, d),
      u = f => {
        for (let h = this.state.groups.length - 1; h >= 0; h--) {
          const d = this.state.groups[h];
          if ((r || !d.locked) && f(e, i, d) && (a == null || a(), o || !d.user)) return d
        }
      };
    return u(c) ?? u(l)
  }
}

function Nn(s, e, i, n) {
  const r = s - i,
    o = e - n;
  return Math.sqrt(r * r + o * o)
}

function wo(s, e) {
  return s <= 1 ? ut(-s / 200, 1, 10) : s >= e - 1 ? ut(-(s - e) / 200, -10, -1) : 0
}

function yo(s, e, i) {
  const n = i.x + i.puzzleX * 2,
    r = i.y + i.puzzleY * 2,
    o = n + i.puzzleX * 2 * -2,
    a = r + i.puzzleY * 2 * -2;
  return s > n && e > r && s < o && e < a
}
class Cm {
  constructor(e, i) {
    this.settings = e, this.roomdef = i
  }
  get sticky() {
    var e;
    return ((e = this.roomdef.ext) == null ? void 0 : e.sticky) || !1
  }
  canMultiselect() {
    return !this.roomdef.nomultiselect || bi.host.ChangeRoomSettings
  }
  isHost() {
    return !!this.settings.snapshot().secretforthisroom
  }
  canRotate() {
    return this.roomdef.rotation
  }
  canLock() {
    return !this.roomdef.nolockunlock || bi.host.ChangeRoomSettings
  }
  noStack() {
    return this.roomdef.nostack
  }
}
class Sm extends EventTarget {
  constructor() {
    super(...arguments);
    b(this, "boardWidth", 0);
    b(this, "boardHeight", 0);
    b(this, "currentMouseEvent");
    b(this, "pickedGroups", []);
    b(this, "stickied", new Set);
    b(this, "isBoxSelecting", !1);
    b(this, "selection", [
      [0, 0],
      [100, 100]
    ]);
    b(this, "borderOpacity", 1);
    b(this, "maxPieceWidth", 0);
    b(this, "maxPieceHeight", 0);
    b(this, "x", 0);
    b(this, "y", 0);
    b(this, "scale", 1);
    b(this, "pageClickX", 0);
    b(this, "pageClickY", 0);
    b(this, "canvasClickX", 0);
    b(this, "canvasClickY", 0);
    b(this, "isPanning", !1);
    b(this, "prePanViewX", 0);
    b(this, "prePanViewY", 0);
    b(this, "edgePanX", 0);
    b(this, "edgePanY", 0);
    b(this, "panStartPosX", 0);
    b(this, "panStartPosY", 0)
  }
  beginBoxSelection(i, n) {
    this.isBoxSelecting = !0, this.selection[0] = [i, n], this.selection[1] = [0, 0]
  }
  stopBoxSelection() {
    this.isBoxSelecting = !1
  }
  panViewStart(i, n) {
    this.isPanning = !0, this.panStartPosX = i, this.panStartPosY = n, this.prePanViewX = this.x, this.prePanViewY = this.y
  }
  panViewStop() {
    this.isPanning = !1
  }
  stopActiveOperations() {
    this.pickedGroups = [], this.stopBoxSelection(), this.panViewStop()
  }
  updateRoomView() {
    this.x = Eo(this.x, this.boardWidth, innerWidth, this.scale), this.y = Eo(this.y, this.boardHeight, innerHeight, this.scale), this.dispatchEvent(new Event("view-change"))
  }
  clearEdgePan() {
    this.edgePanX = this.edgePanY = 0
  }
  screenToWorld(i) {
    return [i[0] / this.scale - this.x, i[1] / this.scale - this.y]
  }
}

function Eo(s, e, i, n) {
  const r = Math.min(500, i * .2);
  return ut(s, r / n - e, (i - r) / n)
}
class Pm {
  constructor(e) {
    b(this, "ws");
    b(this, "onConnected", () => {});
    b(this, "onDisconnected", () => {});
    b(this, "onMessage", () => {});
    this.ws = new WebSocket(e), this.ws.binaryType = "arraybuffer", this.ws.onopen = () => this.onConnected(), this.ws.onclose = i => {
      if (console.log(`Websocket closed ${i.wasClean?"cleanly.":"abruptly!"} (Code ${i.code}): ${i.reason}`, i), i.reason === "No such room") {
        this.onDisconnected("Uh-oh! We couldn't find that room. It might have been deleted or self-destructed.", !1);
        return
      }
      let n = "Connection closed";
      i.reason && (n += `. Reason: ${i.reason}`);
      const o = !i.wasClean || i.code === 1013;
      this.onDisconnected(n, o)
    }, this.ws.onmessage = i => {
      const n = i.data;
      if (!n) {
        console.warn("Malformed WebSocket message", i);
        return
      }
      this.onMessage(n)
    }
  }
  isConnected() {
    var e;
    return ((e = this.ws) == null ? void 0 : e.readyState) === WebSocket.OPEN
  }
  send(e) {
    if (!this.isConnected()) {
      console.warn("Can't send data: Socket is disconnected.", e);
      return
    }
    e instanceof Uint8Array ? this.ws.send(e) : this.ws.send(JSON.stringify(e))
  }
  async close() {
    this.ws.onopen = () => {}, this.ws.onclose = () => {}, this.ws.onmessage = () => {}, this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING ? await new Promise(e => {
      this.ws.onclose = e, this.ws.close()
    }) : this.ws.close()
  }
}
class Mm {
  decode(e) {
    try {
      return typeof e == "string" ? this.parseJSON(e) : this.decodeBinary(e)
    } catch (i) {
      throw console.error("Failed to handle the message", i, e), i
    }
  }
  parseJSON(e) {
    const i = JSON.parse(e);
    if (i.error) throw new Error(i.error);
    return i
  }
  decodeBinary(e) {
    const i = new DataView(e),
      n = i.getUint8(0);
    let r;
    switch (n) {
      case re.PICK:
      case re.MOVE:
      case re.DROP:
        r = i.getUint16(1, !0);
        const o = [];
        for (let m = 3; m < e.byteLength; m = m + 10) o.push({
          id: i.getUint16(m, !0),
          x: i.getFloat32(m + 2, !0),
          y: i.getFloat32(m + 6, !0)
        });
        return {
          type: n, userId: r, groups: o
        };
      case re.SELECT:
      case re.DESELECT:
      case re.LOCK:
      case re.UNLOCK:
      case re.STEAL:
        r = i.getUint16(1, !0);
        const a = [];
        for (let m = 3; m < e.byteLength; m = m + 2) a.push(i.getUint16(m, !0));
        return {
          type: n, userId: r, groupIds: a
        };
      case re.MERGE:
        r = i.getUint16(1, !0);
        const c = i.getUint16(3, !0),
          l = i.getUint16(5, !0),
          u = i.getFloat32(7, !0),
          f = i.getFloat32(11, !0);
        return {
          type: n, userId: r, groupIdA: c, groupIdB: l, x: u, y: f
        };
      case re.ROTATE:
        r = i.getUint16(1, !0);
        const h = [];
        for (let m = 3; m < i.byteLength; m += 3) h.push({
          id: i.getUint16(m, !0),
          rotation: i.getUint8(m + 2)
        });
        return {
          type: n, userId: r, rotations: h
        };
      case re.RECORD_UPDATE:
        r = i.getUint16(1, !0);
        const d = [];
        for (let m = 3; m < e.byteLength; m += 6) d.push({
          id: i.getUint16(m, !0),
          pos: [i.getUint16(m + 2, !0), i.getUint16(m + 4, !0)]
        });
        return {
          type: n, userId: r, records: d
        };
      case re.HEARTBEAT:
        return r = i.getUint16(1, !0), {
          type: n,
          userId: r
        };
      case re.ROT_UPDATE: {
        const m = [];
        for (let g = 1; g < e.byteLength; g += 10) {
          const p = i.getUint16(g, !0),
            _ = i.getFloat64(g + 2, !0);
          m.push([p, _])
        }
        return {
          type: n,
          groupIdsWithTimestamps: m
        }
      }
      case re.SET_COMMITTED: {
        const m = [];
        for (let g = 1; g < e.byteLength; g += 2) {
          const p = i.getUint16(g, !0);
          m.push(p)
        }
        return {
          type: n,
          groupIds: m
        }
      }
      case re.UNSET_COMMITTED: {
        const m = i.getUint16(1, !0);
        return {
          type: n,
          groupId: m
        }
      }
      case re.MOVE_KAO: {
        const m = i.getUint8(1),
          g = i.getFloat32(2, !0),
          p = i.getFloat32(6, !0);
        return {
          type: n,
          id: m,
          x: g,
          y: p
        }
      }
      case re.SET_KAOS: {
        let m = [],
          g = 1;
        for (; g < e.byteLength;) {
          const p = i.getFloat32(g, !0),
            _ = i.getFloat32(g + 4, !0);
          m.push([p, _]), g += 8
        }
        return {
          type: n,
          kaos: m
        }
      }
      case re.EM_PROC:
        return {
          type: n, payload: i
        };
      default:
        throw new Error(`Not supported binary message: ${n}`)
    }
  }
}
class ko {
  constructor(e) {
    b(this, "tmpbuffer", new Uint8Array(1024));
    b(this, "tmpbufferview", new DataView(this.tmpbuffer.buffer));
    this.playerId = e
  }
  allocateCommandBuffer(e, i) {
    if (!this.playerId) throw new Error(`Cannot send binary message ([${re[e]}]) without player id!`);
    for (; i > this.tmpbuffer.byteLength;) this.tmpbuffer = new Uint8Array(2 * this.tmpbuffer.byteLength), this.tmpbufferview = new DataView(this.tmpbuffer.buffer);
    this.tmpbufferview.setUint8(0, e), this.tmpbufferview.setUint16(1, this.playerId, !0)
  }
  sendGroupAction(e, i) {
    const n = 3 + 2 * i.length;
    this.allocateCommandBuffer(e, n);
    for (let r = 0, o = 3; r < i.length; r++, o += 2) this.tmpbufferview.setUint16(o, i[r].id, !0);
    return this.tmpbuffer.subarray(0, n)
  }
  sendGroupPositions(e, i) {
    if (!i.length) return;
    const n = 3 + 10 * i.length;
    this.allocateCommandBuffer(e, n);
    for (let r = 0, o = 3; r < i.length; r++, o += 10) this.tmpbufferview.setUint16(o, i[r].id, !0), this.tmpbufferview.setFloat32(o + 2, i[r].x, !0), this.tmpbufferview.setFloat32(o + 6, i[r].y, !0);
    return this.tmpbuffer.subarray(0, n)
  }
  pick(e) {
    return this.sendGroupPositions(re.PICK, e)
  }
  move(e) {
    return this.sendGroupPositions(re.MOVE, e)
  }
  drop(e) {
    return this.sendGroupPositions(re.DROP, e)
  }
  select(e) {
    return this.sendGroupAction(re.SELECT, e)
  }
  deselect(e) {
    return this.sendGroupAction(re.DESELECT, e)
  }
  lock(e) {
    return this.sendGroupAction(re.LOCK, e)
  }
  unlock(e) {
    return this.sendGroupAction(re.UNLOCK, e)
  }
  forceDrop(e) {
    return this.sendGroupAction(re.STEAL, e)
  }
  sendKaoPosition(e, i, n) {
    return this.allocateCommandBuffer(65, 10), this.tmpbufferview.setUint8(1, e), this.tmpbufferview.setFloat32(2, i, !0), this.tmpbufferview.setFloat32(6, n, !0), this.tmpbuffer.subarray(0, 10)
  }
  setJc(e, i, n, r) {
    return this.allocateCommandBuffer(171 + r, 11), this.tmpbufferview.setUint16(1, e, !0), this.tmpbufferview.setFloat32(3, i, !0), this.tmpbufferview.setFloat32(7, n, !0), this.tmpbuffer.subarray(0, 11)
  }
  patJc(e, i) {
    return this.allocateCommandBuffer(174 + +i, 3), this.tmpbufferview.setUint16(1, e, !0), this.tmpbuffer.subarray(0, 3)
  }
  solveRecord(e) {
    const i = re.RECORDSOLVED;
    return this.allocateCommandBuffer(i, 5), this.tmpbufferview.setUint16(3, e, !0), this.tmpbuffer.subarray(0, 5)
  }
  kick(e, i) {
    return {
      type: "kick",
      user: e,
      secret: i
    }
  }
  votekick(e) {
    return {
      type: "votekickid",
      user: e
    }
  }
  promote(e, i) {
    return {
      type: "delegateid",
      caps: i,
      id: e
    }
  }
  unkickAll(e) {
    return {
      type: "unkickall",
      secret: e
    }
  }
  changeRules(e, i, n, r, o, a, c, l) {
    return {
      type: "options",
      secret: e,
      hidePreview: i,
      votekick: n,
      nomultiselect: r,
      nolockunlock: o,
      norectselect: a,
      nostack: c,
      jigchan: l
    }
  }
  chat(e) {
    return {
      type: "chat",
      message: e
    }
  }
  turn(e) {
    const i = re.ROTATE,
      n = 3 + 3 * e.length;
    this.allocateCommandBuffer(i, n);
    for (let r = 0, o = 3; r < e.length; r++, o += 3) this.tmpbufferview.setUint16(o, e[r].id, !0), this.tmpbufferview.setUint8(o + 2, e[r].rot);
    return this.tmpbuffer.subarray(0, n)
  }
  merge(e, i, n, r) {
    const o = re.MERGE,
      a = 15;
    return this.allocateCommandBuffer(o, a), this.tmpbufferview.setUint16(3, e, !0), this.tmpbufferview.setUint16(5, i, !0), this.tmpbufferview.setFloat32(7, n, !0), this.tmpbufferview.setFloat32(11, r, !0), this.tmpbuffer.subarray(0, a)
  }
  heartbeat() {
    return this.allocateCommandBuffer(re.HEARTBEAT, 3), this.tmpbuffer.subarray(0, 3)
  }
  setVisibility() {
    return {
      type: "visibility",
      value: document.visibilityState == "visible"
    }
  }
  user(e, i, n, r, o) {
    return {
      type: "user",
      name: e,
      color: i,
      room: n,
      secret: r,
      ts: o
    }
  }
}
class Dm extends EventTarget {
  constructor(i) {
    super();
    b(this, "connection");
    b(this, "encoder");
    b(this, "decoder");
    b(this, "peer");
    b(this, "dc");
    b(this, "processingMode", "buffer");
    b(this, "processingBuffer", []);
    b(this, "playerId");
    b(this, "onConnected", () => {});
    b(this, "onDisconnected", () => {});
    this.encoder = new ko, this.decoder = new Mm, this.connection = new Pm(i), this.connection.onConnected = () => this.onConnected(), this.connection.onDisconnected = (n, r) => this.onDisconnected(n, r), this.connection.onMessage = n => this.handleMessage(n)
  }
  get unreliableStarted() {
    return !!this.peer
  }
  get unreliableReady() {
    var i;
    return ((i = this.dc) == null ? void 0 : i.readyState) == "open"
  }
  async doUnreliableNegociation() {
    this.peer.onicecandidate = n => {
      n.candidate && this.connection.send({
        type: "webrtc_candidate",
        candidate: n.candidate
      })
    };
    const i = await this.peer.createOffer();
    this.peer.setLocalDescription(i), this.connection.send({
      type: "webrtc_negociation",
      offer: i
    })
  }
  handleMessage(i) {
    const n = this.decoder.decode(i);
    if (n.type === "me" && (this.playerId = n.id, this.encoder = new ko(this.playerId)), n.type == "room" || n.type === re.HEARTBEAT) return this.dispatchMessage(n);
    this.processingMode === "process" ? this.dispatchMessage(n) : this.processingBuffer.push(n)
  }
  dispatchMessage(i) {
    this.dispatchEvent(new CustomEvent("message", {
      detail: i
    }))
  }
  changeMode(i) {
    if (this.processingMode = i, i === "process" && this.processingBuffer.length > 0)
      for (; this.processingBuffer.length > 0;) {
        const n = this.processingBuffer.shift();
        n && this.dispatchMessage(n)
      }
  }
  send(i) {
    if (this.connection.isConnected()) {
      const n = i(this.encoder);
      n && this.connection.send(n)
    } else console.warn("HOLA AMIGOS, NO SE PUEDE ENVIAR MENSAJE SIN CONECTARSE")
  }
  isConnected() {
    return this.connection.isConnected()
  }
  async closeConnection() {
    await this.connection.close()
  }
}
class Fm extends EventTarget {
  constructor(i) {
    super();
    b(this, "reconnectTimeout");
    b(this, "wsClient");
    b(this, "lastChatMessageTimestamp");
    b(this, "throttledMoveOperator", new Um(i => {
      var n;
      return (n = this.wsClient) == null ? void 0 : n.send(r => r.move(i))
    }, 50));
    b(this, "reconnectAttempt", 0);
    b(this, "receivedHeartBeat", !1);
    b(this, "onMessage");
    this.roomName = i
  }
  get isConnected() {
    var i;
    return ((i = this.wsClient) == null ? void 0 : i.isConnected()) || !1
  }
  get playerId() {
    var i;
    return (i = this.wsClient) == null ? void 0 : i.playerId
  }
  connect() {
    if (!this.onMessage) throw new Error("Must set onMessage handler before connecting");
    this.dispatchEvent(new Event("connecting")), clearTimeout(this.reconnectTimeout);
    const i = new URL(location.origin);
    i.protocol = location.protocol.includes("https") ? "wss" : "ws", i.host === "jiggie.fun" && (i.host = "ws.jiggie.fun"), i.pathname = "ws";
    const n = i.toString();
    this.wsClient = new Dm(n), this.wsClient.onConnected = () => {
      const {
        savedname: r,
        savedcolor: o,
        secretforthisroom: a
      } = Ye.snapshot();
      this.wsClient.send(c => c.user(r, o, this.roomName, a, this.lastChatMessageTimestamp)), this.onConnected()
    }, this.wsClient.onDisconnected = (r, o) => {
      this.onDisconnected(r, o)
    }, this.wsClient.addEventListener("message", r => {
      var a, c;
      const o = r.detail;
      try {
        switch (o.type) {
          case "chat":
            this.lastChatMessageTimestamp = o.ts;
            break;
          case re.HEARTBEAT:
            this.receivedHeartBeat = !0, (a = this.wsClient) == null || a.send(l => l.heartbeat());
            break
        }(c = this.onMessage) == null || c.call(this, o)
      } catch (l) {
        console.error("Failed to handle the message", l), this.onDisconnected(l.message, !0)
      }
    })
  }
  updateUser() {
    const {
      savedname: i,
      savedcolor: n,
      secretforthisroom: r
    } = Ye.snapshot();
    this.wsClient.send(o => o.user(i, n, this.roomName, r, this.lastChatMessageTimestamp))
  }
  onConnected() {
    this.dispatchEvent(new Event("connected")), this.setVisibility()
  }
  onDisconnected(i, n) {
    if (this.dispatchEvent(new CustomEvent("disconnected", {
        detail: {
          reason: i,
          retry: n
        }
      })), !n) return;
    this.reconnectAttempt++;
    const r = Math.min(100 * Math.pow(2, this.reconnectAttempt - 1), 5e3);
    clearTimeout(this.reconnectTimeout), this.reconnectTimeout = setTimeout(async () => {
      await this.close(), this.connect()
    }, r)
  }
  changeMode(i) {
    var n;
    (n = this.wsClient) == null || n.changeMode(i)
  }
  resetRetryCounter() {
    this.reconnectAttempt = 0
  }
  setVisibility() {
    var i;
    (i = this.wsClient) != null && i.isConnected() && this.wsClient.send(n => n.setVisibility())
  }
  async close() {
    var i;
    clearTimeout(this.reconnectTimeout), await ((i = this.wsClient) == null ? void 0 : i.closeConnection()), this.wsClient = void 0
  }
  pick(i) {
    var n;
    this.throttledMoveOperator.cancelScheduled(), (n = this.wsClient) == null || n.send(r => r.pick(i))
  }
  move(i) {
    this.throttledMoveOperator.move(i)
  }
  drop(i) {
    var n;
    this.throttledMoveOperator.cancelScheduled(), (n = this.wsClient) == null || n.send(r => r.drop(i))
  }
  select(i) {
    var n;
    this.throttledMoveOperator.invokeScheduled(), (n = this.wsClient) == null || n.send(r => r.select(i))
  }
  deselect(i) {
    var n;
    this.throttledMoveOperator.invokeScheduled(), (n = this.wsClient) == null || n.send(r => r.deselect(i))
  }
  lock(i) {
    var n;
    this.throttledMoveOperator.invokeScheduled(), (n = this.wsClient) == null || n.send(r => r.lock(i))
  }
  unlock(i) {
    var n;
    this.throttledMoveOperator.invokeScheduled(), (n = this.wsClient) == null || n.send(r => r.unlock(i))
  }
  forceDrop(i) {
    var n;
    (n = this.wsClient) == null || n.send(r => r.forceDrop(i))
  }
  sendKaoPosition(i, n, r) {
    var o;
    (o = this.wsClient) == null || o.send(a => a.sendKaoPosition(i, n, r))
  }
  setJc(i, n, r, o) {
    var a;
    (a = this.wsClient) == null || a.send(c => c.setJc(i, n, r, o))
  }
  patJc(i, n) {
    var r;
    (r = this.wsClient) == null || r.send(o => o.patJc(i, !n))
  }
  sendRegion(i) {
    this.chat(`/setupZone ${i.flat().join(" ")}`)
  }
  solveRecord(i) {
    var n;
    (n = this.wsClient) == null || n.send(r => r.solveRecord(i))
  }
  kick(i, n) {
    var r;
    (r = this.wsClient) == null || r.send(o => o.kick(i, n))
  }
  votekick(i) {
    var n;
    (n = this.wsClient) == null || n.send(r => r.votekick(i))
  }
  promote(i, n) {
    var r;
    (r = this.wsClient) == null || r.send(o => o.promote(i, n))
  }
  unkickAll(i) {
    var n;
    (n = this.wsClient) == null || n.send(r => r.unkickAll(i))
  }
  whisper(i, n) {
    var r;
    (r = this.wsClient) == null || r.send(o => ({
      type: "whisperid",
      id: n,
      msg: ";" + i
    }))
  }
  changeRules(i, n, r, o, a, c, l, u) {
    var f;
    (f = this.wsClient) == null || f.send(h => h.changeRules(i, n, r, o, a, c, l, u))
  }
  chat(i) {
    var n;
    this.lastChatMessageTimestamp = Date.now(), (n = this.wsClient) == null || n.send(r => r.chat(i))
  }
  turn(i) {
    var n;
    (n = this.wsClient) == null || n.send(r => r.turn(i))
  }
  merge(i, n, r, o) {
    var a;
    (a = this.wsClient) == null || a.send(c => c.merge(i, n, r, o))
  }
}
class Um {
  constructor(e, i) {
    b(this, "throttleAffectedGroups", new Set);
    b(this, "moveThrottledFn");
    this.moveThrottledFn = Ql(() => {
      e(Array.from(this.throttleAffectedGroups)), this.throttleAffectedGroups.clear()
    }, i, !0)
  }
  move(e) {
    for (const i of e) this.throttleAffectedGroups.add(i);
    this.moveThrottledFn.call()
  }
  cancelScheduled() {
    this.moveThrottledFn.cancelScheduled(), this.throttleAffectedGroups.clear()
  }
  invokeScheduled() {
    this.moveThrottledFn.invokeScheduled()
  }
}
class On {
  next() {
    return ~~((Math.random() - .5) * 12)
  }
}
class zm {
  constructor(e) {
    b(this, "i", 0);
    b(this, "minNote");
    this.track = e, this.minNote = Math.min(...e)
  }
  next() {
    return this.i >= this.track.length && (this.i = 0), this.track[this.i++] - (this.minNote + 12)
  }
}

function To(s) {
  return Object.prototype.toString.call(s) === "[object Date]"
}

function Bn(s, e, i, n) {
  if (typeof i == "number" || To(i)) {
    const r = n - i,
      o = (i - e) / (s.dt || 1 / 60),
      a = s.opts.stiffness * r,
      c = s.opts.damping * o,
      l = (a - c) * s.inv_mass,
      u = (o + l) * s.dt;
    return Math.abs(u) < s.opts.precision && Math.abs(r) < s.opts.precision ? n : (s.settled = !1, To(i) ? new Date(i.getTime() + u) : i + u)
  } else {
    if (Array.isArray(i)) return i.map((r, o) => Bn(s, e[o], i[o], n[o]));
    if (typeof i == "object") {
      const r = {};
      for (const o in i) r[o] = Bn(s, e[o], i[o], n[o]);
      return r
    } else throw new Error(`Cannot spring ${typeof i} values`)
  }
}

function Im(s, e = {}) {
  const i = Pe(s),
    {
      stiffness: n = .15,
      damping: r = .8,
      precision: o = .01
    } = e;
  let a, c, l, u = s,
    f = s,
    h = 1,
    d = 0,
    m = !1;

  function g(_, A = {}) {
    f = _;
    const w = l = {};
    return s == null || A.hard || p.stiffness >= 1 && p.damping >= 1 ? (m = !0, a = mr(), u = _, i.set(s = f), Promise.resolve()) : (A.soft && (d = 1 / ((A.soft === !0 ? .5 : +A.soft) * 60), h = 0), c || (a = mr(), m = !1, c = Ul(y => {
      if (m) return m = !1, c = null, !1;
      h = Math.min(h + d, 1);
      const E = {
          inv_mass: h,
          opts: p,
          settled: !0,
          dt: (y - a) * 60 / 1e3
        },
        z = Bn(E, u, s, f);
      return a = y, u = s, i.set(s = z), E.settled && (c = null), !E.settled
    })), new Promise(y => {
      c.promise.then(() => {
        w === l && y()
      })
    }))
  }
  const p = {
    set: g,
    update: (_, A) => g(_(f, s), A),
    subscribe: i.subscribe,
    stiffness: n,
    damping: r,
    precision: o
  };
  return p
}
class Nm {
  constructor(e, i = !1) {
    b(this, "springs", new Map);
    this.game = e, this.instant = i
  }
  set(e, i, n) {
    this.instant ? this.updateGroupPos(e, i, n) : this.getOrCreate(e).set({
      x: i,
      y: n
    })
  }
  stop(e, i, n) {
    if (this.instant) {
      this.updateGroupPos(e, i, n);
      return
    }
    const r = this.springs.get(e);
    r ? (r.spring.set({
      x: i,
      y: n
    }, {
      hard: !0
    }), r.invalidate(), this.springs.delete(e)) : this.updateGroupPos(e, i, n)
  }
  getOrCreate(e) {
    const i = this.springs.get(e);
    if (i) return i.spring;
    const n = Im({
        x: e.x,
        y: e.y
      }, {
        stiffness: .07,
        damping: .35
      }),
      r = n.subscribe(({
        x: o,
        y: a
      }) => {
        this.updateGroupPos(e, o, a)
      });
    return this.springs.set(e, {
      spring: n,
      invalidate: r
    }), n
  }
  updateGroupPos(e, i, n) {
    e.x = i, e.y = n, this.game.state.updatePieceCoordinates(e)
  }
}
const Om = "1.8.0";
class Bm {
  constructor(e, i) {
    b(this, "conn");
    b(this, "uiHandler");
    b(this, "pm");
    this.game = e, this.interpolator = i, this.conn = e.connection, this.uiHandler = e.uiStateHandler
  }
  handle(e) {
    var i;
    switch (e.type) {
      case "version":
        this.onVersion(e.version);
        break;
      case "noroom":
        this.onNoRoom();
        break;
      case "upgrade":
        this.onUpgrade(e.secret);
        break;
      case "users":
        this.onUsers(e.users);
        break;
      case "room":
        this.onRoom(e.room);
        break;
      case "endstats":
        this.onEndStats(e);
        break;
      case "update":
        this.onUpdate(e.room);
        break;
      case "zones":
        this.onZones(e);
        break;
      case "chat":
        this.onChat(e.id, e.name, e.color, e.message, e.ts);
        break;
      case "points":
        this.onPoints(e.qty);
        break;
      case "playlist":
        this.onPlaylist(e.playlist, e.currentlyPlaying, e.ext, e.timeStarted, e.stop, e.minPrice, e.reschedule);
        break;
      case "scratch-card":
        (i = this.uiHandler) == null || i.scratchCardSync(e.choice, e.val, e.pts, e.status);
        break;
      case re.PICK:
        this.onPick(e.userId, e.groups);
        break;
      case re.MOVE:
        this.onMove(e.userId, e.groups);
        break;
      case re.DROP:
        this.onDrop(e.userId, e.groups);
        break;
      case re.SELECT:
        this.onSelect(e.userId, e.groupIds);
        break;
      case re.DESELECT:
        this.onDeselect(e.userId, e.groupIds);
        break;
      case re.LOCK:
        this.onLock(e.userId, e.groupIds);
        break;
      case re.UNLOCK:
        this.onUnlock(e.userId, e.groupIds);
        break;
      case re.STEAL:
        this.onSteal(e.userId, e.groupIds);
        break;
      case re.MERGE:
        this.onMerge(e.userId, e.groupIdA, e.groupIdB, e.x, e.y);
        break;
      case re.ROTATE:
        this.onRotate(e.userId, e.rotations);
        break;
      case re.RECORD_UPDATE:
        this.onJukeRecords(e.userId, e.records);
        break;
      case re.ROT_UPDATE:
        this.onRottingUpdate(e.groupIdsWithTimestamps);
        break;
      case re.SET_COMMITTED:
        this.onSetSticky(e.groupIds);
        break;
      case re.UNSET_COMMITTED:
        this.onUnsetSticky(e.groupId);
        break;
      case re.MOVE_KAO:
        this.onKaoMove(e.id, e.x, e.y);
        break;
      case re.SET_KAOS:
        this.onSetKaos(e.kaos);
        break;
      case re.EM_PROC:
        this.onEmProc(e.payload);
        break
    }
  }
  onVersion(e) {
    e !== Om && location.reload()
  }
  onNoRoom() {
    location.replace("/")
  }
  onUpgrade(e) {
    var i;
    (i = this.uiHandler) == null || i.updateSecret(e, this.game.roomName)
  }
  onUsers(e) {
    var i, n;
    this.game.roomUsers = e;
    for (const r of this.game.roomUsers) r.highlight = Ki(r.color), r.isMe = r.id === ((i = this.game.connection) == null ? void 0 : i.playerId);
    (n = this.uiHandler) == null || n.syncUsers(e), this.game.state.groups.forEach(r => {
      r.user && (r.user = this.game.getUserById(r.user.id))
    })
  }
  onRoom(e) {
    var i, n;
    (i = this.conn) == null || i.resetRetryCounter(), this.game.setRoomDef(structuredClone(e)), (n = this.uiHandler) == null || n.syncRoomDef(this.game.roomdef)
  }
  onUpdate(e) {
    var n;
    const i = this.game.roomdef;
    Object.assign(i, structuredClone(e)), this.game.rules.canMultiselect() || this.game.actions.deselectSelected(), (n = this.uiHandler) == null || n.updateRoomDef(i)
  }
  onEndStats(e) {
    var i;
    (i = this.uiHandler) == null || i.updateEndStats(e)
  }
  onChat(e, i, n, r, o) {
    var a;
    (a = this.uiHandler) == null || a.addChatMessage(e, i, n, r, o)
  }
  onPoints(e) {
    var i;
    (i = this.uiHandler) == null || i.jukeboxSyncPoints(e)
  }
  onPlaylist(e, i, n, r, o, a, c) {
    var l;
    (l = this.uiHandler) == null || l.jukeboxSyncPlaylist(this.game.roomdef, e, i, n, r, o, a, c)
  }
  onPick(e, i) {
    const n = this.game.getUserById(e);
    for (const r of i) {
      const o = this.game.state.transformedboard[r.id];
      o && (this.interpolator.set(o, r.x, r.y), this.game.actions.stopDragging(o), o.user = n, this.game.state.reorderGroupBySize(o))
    }
    this.recountHeldPieces()
  }
  onDrop(e, i) {
    for (const n of i) {
      const r = this.game.state.transformedboard[n.id];
      r && (this.interpolator.stop(r, n.x, n.y), r.selectedByOther || (r.user = void 0, r.dirty = !0))
    }
    this.recountHeldPieces()
  }
  onMove(e, i) {
    for (const n of i) {
      const r = this.game.state.transformedboard[n.id];
      r && r.id == n.id && this.interpolator.set(r, n.x, n.y)
    }
  }
  onSelect(e, i) {
    const n = this.game.getUserById(e);
    for (const r of i) {
      const o = this.game.state.transformedboard[r];
      o && (this.game.actions.stopDragging(o), o.user = n, o.selectedByOther = !0, o.dirty = !0)
    }
    this.recountHeldPieces()
  }
  onDeselect(e, i) {
    for (const n of i) {
      const r = this.game.state.transformedboard[n];
      r && (r.user = void 0, r.selectedByOther = !1, r.dirty = !0)
    }
    this.recountHeldPieces()
  }
  onSteal(e, i) {
    for (const n of i) {
      const r = this.game.state.transformedboard[n];
      r && (r.user = void 0, r.selectedByOther = !1, this.game.actions.stopDragging(r), this.drawTagEvent(e, r, "steal"))
    }
    this.recountHeldPieces()
  }
  onLock(e, i) {
    var n;
    for (const r of i) {
      const o = this.game.state.transformedboard[r];
      o && (o.locked = !0, this.game.actions.stopDragging(o), (n = this.uiHandler) == null || n.refreshLockedDisplay(this.game.state.groups), this.drawTagEvent(e, o, "lock"))
    }
    this.recountHeldPieces()
  }
  onUnlock(e, i) {
    var n;
    for (const r of i) {
      const o = this.game.state.transformedboard[r];
      o && (o.locked = !1, this.game.actions.stopDragging(o), (n = this.uiHandler) == null || n.refreshLockedDisplay(this.game.state.groups), this.drawTagEvent(e, o, "unlock"))
    }
    this.recountHeldPieces()
  }
  onMerge(e, i, n, r, o) {
    let a = this.game.state.transformedboard[i],
      c = this.game.state.transformedboard[n];
    if (a && c && a !== c) {
      this.game.actions.stopDragging(a), this.game.actions.stopDragging(c, !0);
      let l = this.game.actions.mergeGroups(a, c, !1, !1);
      this.interpolator.stop(l, r, o), this.game.state.reorderGroupBySize(l)
    }
    this.recountHeldPieces()
  }
  onRotate(e, i) {
    for (const n of i) {
      const r = this.game.state.transformedboard[n.id];
      r && (this.game.state.setGroupRotation(r, n.rotation), this.drawTagEvent(e, r, "rotate"))
    }
  }
  onRottingUpdate(e) {
    e.forEach(([i, n]) => {
      this.game.state.transformedboard[i].rotp = n
    })
  }
  onSetSticky(e) {
    e.forEach(i => {
      const n = this.game.state.transformedboard[i];
      n && this.game.view.stickied.add(n)
    })
  }
  onUnsetSticky(e) {
    this.game.view.stickied.delete([...this.game.view.stickied].find(i => i.id == e))
  }
  onKaoMove(e, i, n) {
    if (!this.pm && (this.pm = this.game.entities[3], !this.pm)) return;
    const r = this.pm.kaos.get(e);
    r && (r.x = i, r.y = n)
  }
  onSetKaos(e) {
    !this.pm && (this.pm = this.game.entities[3], !this.pm) || this.pm.setKaos(e)
  }
  onEmProc(e) {
    const i = this.game.entities[e.getInt8(1)];
    i && i.process(e)
  }
  onZones(e) {
    var i;
    !this.pm && (this.pm = this.game.entities[3], !this.pm) || (this.pm.zones = e.zones, e.track ? this.game.sequencer = new zm(e.track) : this.game.sequencer instanceof On || (this.game.sequencer = new On), (i = this.uiHandler) == null || i.syncPoll(e))
  }
  onJukeRecords(e, i) {
    this.game.records = i
  }
  recountHeldPieces() {
    var e;
    (e = this.uiHandler) == null || e.recountHeldPieces(this.game.state.groups)
  }
  drawTagEvent(e, i, n) {
    var r;
    (r = this.uiHandler) == null || r.drawTagEvent(e, i, this.game.view, n)
  }
}
const xo = ["red", "green", "blue"];

function Ro() {
  return {
    open: !1,
    key: Math.random(),
    cardType: xo[Math.floor(Math.random() * xo.length)],
    values: [],
    requestedValues: new Set
  }
}
const Es = (() => {
  const s = Pe(Ro());
  return {
    subscribe: s.subscribe,
    open: () => s.update(e => ({
      ...e,
      open: !0
    })),
    reset: e => {
      const i = Ro();
      e && (i.open = !0), s.set(i)
    },
    setValue(e, i) {
      s.update(n => {
        const r = [...n.values];
        return r[e] = i, {
          ...n,
          values: r
        }
      })
    },
    markAsRequested(e) {
      s.update(i => {
        const n = new Set(i.requestedValues);
        return n.add(e), {
          ...i,
          requestedValues: n
        }
      })
    },
    complete(e, i) {
      s.update(n => ({
        ...n,
        status: e,
        points: e === "emoji" ? "-all" : i.toString()
      }))
    }
  }
})();

function Za(s, e, i, n) {
  s.juke && lr.set({
    timeStarted: e,
    mid: i,
    ext: n
  })
}

function Lm() {
  lr.stop()
}

function Ja(s) {
  pl.set(s)
}

function Gm(s) {
  s.juke && s.ext && (Us.setMinPrice(s.ext.minPrice), Ja(s.ext.playlist), s.ext.currentlyPlaying && s.ext.timeStarted && Za(s, s.ext.timeStarted, s.ext.currentlyPlaying))
}
class Vm {
  syncUsers(e) {
    zs.sync(e), cr.set(e)
  }
  syncRoomDef(e) {
    Hn.set(e), Gm(e)
  }
  updateRoomDef(e) {
    Hn.set(e)
  }
  updateEndStats(e) {
    Mg.set(e)
  }
  addChatMessage(e, i, n, r, o) {
    bl.addMessage({
      id: e,
      name: i,
      color: n,
      message: r,
      timeStamp: o
    })
  }
  jukeboxSyncPoints(e) {
    Us.setQty(e)
  }
  jukeboxSyncPlaylist(e, i, n, r, o, a, c, l) {
    c && Us.setMinPrice(c), i && Ja(i), l && o && Za(e, o, n, r), a && Lm()
  }
  scratchCardSync(e, i, n, r) {
    if (e !== void 0 && Es.setValue(e, i), r === "start") {
      Es.open();
      return
    }
    r && Es.complete(r, n)
  }
  recountHeldPieces(e) {
    const i = new Map;
    for (const n of e) {
      if (!n.user) continue;
      const r = i.get(n.user.id) || 0;
      i.set(n.user.id, r + n.pieces.length)
    }
    _l.set(i)
  }
  drawTagEvent(e, i, n, r) {
    r === "rotate" && (i.user || Ye.snapshot().hidenametags) || zs.drawEvent(e, i.x, i.y, n.x, n.y, n.scale, r)
  }
  syncPoll(e) {
    Al.set(e)
  }
  refreshLockedDisplay(e) {
    let i = 0;
    for (const n of e) n.locked && i++;
    ci.update(n => (n.lockedPiecesCount = i, n))
  }
  updateSecret(e, i) {
    localStorage.setItem("secret:" + i, e), Ye.update(n => (n.secretforthisroom = e, n))
  }
}
const Hm = "" + new URL("../assets/jiggie-ss.BMmLFwEY.png", import.meta.url).href,
  Xm = "" + new URL("../assets/jiggie-anim.CxvB_MyJ.bin", import.meta.url).href,
  nr = {
    spritesheet: Hm,
    animdata: Xm,
    extent: [32, 36],
    frame_count: 147,
    anims: {
      death: [0, 10, 0, 0],
      idle: [11, 18, 0, 0],
      idle2: [19, 21, 2, 0],
      idle3: [22, 27, 0, 0],
      jiggling: [28, 31, 0, 0],
      landing: [32, 36, 0, 0],
      pat: [37, 40, 0, 0],
      bow: [41, 46, 0, 0],
      win: [47, 59, 0, 0],
      eating: [60, 64, 0, 0],
      run_up: [65, 70, 0, 0],
      run_down: [71, 76, 0, 0],
      run_left: [77, 82, 0, 0],
      break_up: [83, 89, 0, 0],
      break_up_loop: [88, 89, 0, 3],
      break_down: [90, 95, 0, 0],
      break_down_loop: [94, 95, 0, 3],
      break_left: [96, 102, 0, 0],
      break_left_loop: [101, 102, 0, 3],
      push_up: [103, 105, 2, 0],
      falling_up: [106, 116, 0, 0],
      push_down: [117, 119, 2, 0],
      falling_down: [120, 130, 0, 0],
      push_left: [131, 134, 0, 0],
      falling_left: [135, 146, 0, 0]
    },
    flags: {
      normal: 0,
      sailor: 1,
      messy: 2,
      bowl: 3,
      mushroom: 4,
      twintails: 5,
      ribbon: 6,
      normal2: 7,
      sailor2: 8,
      long: 9,
      puffy: 10,
      rimo: 11,
      braided: 12
    },
    layers_props: [1, 2, 4, 8, 16, 32, 34, 64, 66, 128, 256, 512, 1024, 2048, 4096],
    frame_durations: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 500, 200, 500, 200, 500, 200, 500, 200, 300, 200, 300, 200, 200, 200, 200, 200, 200, 100, 100, 100, 100, 100, 100, 100, 100, 100, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 500, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 150, 100, 100, 100, 100, 100, 150, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 200, 200, 200, 100, 100, 100, 100, 200, 100, 100, 100, 100, 100, 100, 200, 200, 200, 100, 100, 100, 100, 100, 200, 100, 100, 100, 100, 100, 200, 200, 200, 200, 100, 100, 100, 100, 100, 200, 100, 100, 100, 100, 100, 100]
  },
  Wm = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA2BAMAAACRqRzQAAAAHlBMVEUAAAAAAAAdDQdaWVqEgoStqq21UWve297/iq3/+/8JUtKnAAAAAXRSTlMAQObYZgAAAkhJREFUOMt1lEuO4jAQhh122eFuEJpdZAW15gSjWcIEIZa0iCIuMIJlp0GWL4DoHUR5qG47VY7jRw94lfLnqpTr/xPGGONj5q2REMJFkboT5TzixH4CgEgslHDnnEPDYdwzgKpPjvgkk3oDzrM7S/f0VK9B0ynY1W3ly/KsH+sso8oT2v1hUqcv781wtEIa7aHj0Bfucg9CRV2usJdNH29HHgQqzAEWqg8/RssdQJMX0kBkzS/aIMjmawyzVV4oghHunRTUfEZl2WiloMMZiXkhE0aN/lHdgiFscFIpViyFniLeU8GZq/MYu8ZE3MSCXTkMrzhxvmkWrwpOWoC5NI0yPfBx9Bu2E8DSWhVqtfJkmsHHxiQyJrCwD6ewUyZR028w060OVJYenJwmOAC3nNha1FcZeCVc2iIPl/A9FQQ4KPA8FQRMaEtlqkoGVq9lH6AMvZRZthzyBgehCokalBf2ZO8gnLNwxkjSN+U7KIBVcNLCJt8/hZ9NIaWG6K/PXFJAMCVL1e9481yW6Rw9WtMYyEF4lR2e6ujWQiR9IGWZmCml5EIMXUCHh+mtpG19CKB0wiuwnkK7SuV7SEhnuNE8z4X0bSJw+F1ifwnU2re/xHOtzckYgDGAm8f0D0Lz9vj3FrctuIpg9Y0Pl68jHA7Hm59o9I0P1yvCLwt9feP2egFoL/algb6AFWM42ncGEsZt2G2oL+XE7iZGXyHeEFJO7C7CjL74xl7fYPX6amc+mKDRF/7Pc/rKx5Mnfc/PVNH6Pv1wn4r5D5lcdDXS1CdnAAAAAElFTkSuQmCC",
  jm = "data:application/octet-stream;base64,CAAEABoAEwAdAAAACAAEABoAEQAAABUACAAEABkAEAAaABUACAAFABkAEAAAACYABQACAB0AFQAAAAAAGAAPAAkACQAZACYAGAAPAAkACQAiACYA",
  Ln = {
    spritesheet: Wm,
    animdata: jm,
    extent: [41, 26],
    frame_count: 7,
    anims: {
      Hand_patting: [0, 3, 0, 0],
      Hand_Picking_Up: [4, 4, 0, 0],
      Heart_Ballon: [5, 6, 0, 0]
    },
    flags: {
      normal: 0
    },
    layers_props: [1],
    frame_durations: [50, 50, 50, 50, 100, 200, 200]
  },
  Ym = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABLCAMAAADtTJGhAAAAclBMVEUAAAAAAAALBwIWCgMiIDQnGAgnJB83ERE9GxVAEBhDJBlFKDxIIRJILRJOIRNYKChZKRheOCpmOTFuNyN4KBh6VjyBg4WFMSCKbzCPl0qQIyOQKCCWOhubVzSgQBCsMjK8qJ3AYBDIY0HIjRTZoGb78jbS99/HAAAAAXRSTlMAQObYZgAABUZJREFUWMOtlw134ioQhtkNRJDVtKvdJHVrbrr6///iHeYDBuKec8+1VKPjTF5gGJ4GY6CFIBdqfU9vbl5dH7i7jt7chjWEsA4Sa3Ssx7dXWuLmkK76ALHLEOBdxI6/12NRG0d/9+NYtMjd87h26WNHY8MpXi6XPMsego/wErHxdlvg7zYWLXSz2M50+30HaiQ2DCac8YPVoOPjn999j7NJWkt63UafJtiLm6f3fe+6zu2/0zzDsA7hkq6idYRg6LzH3IwolC6j8fCDcqPYP93+9XUPH0bUrtcrKNKC9sc1df3nSKvgUSupeY9Dy25MO+TsFdour2e4rOuakpbUekgvRnPWSs68ZJ/dqLbfwcBe3+CDiiwMw/lyHgaU6iV6JTE/zjPmbJ5HLZbcEAzZSgN7e4PM0QLAwNJrMCp6JTEojClizuI0bt2pJlDrLa1qqozhimLXgepxKzaD2LwVSzmFkXU7aB2OjAa2ntc8tKQG0ZQT4/00zfEW52nyWzfUF0xzt4Np7mgtk9CQBHNtQI2lN1ftFOMc4+RZTNxcZ6DWda/7HdfZ+XK9Dtfr5Rzy1sOClf3p4zzP0fNe78UtmxwmCpOUvR7O5/MA76DAUTYyjo3m6JvfMzZQSKqWGu3TR817BY2GSDSiwqCWZ77CV+vNRPJaJavVPGv51XqFSJ4XgBC067Y88yqa+65pZ5rdVSPI1DzzJVpGJ94gO5WJtEVQ0DxLmWmjlZe6KkTaIigUnmGW2+jipWUtRBJsVwjKPDMNv5gp2tsQqTMKQV3NM+y7RHuct/bCwAuRUK1BkOJZSElR/PKYheJNYopIvkYQLUDmGS5Awy/lZbFMJG86jSCcZsWzDb+UN9A+FSLhCtQIannW8Et7aT2FSA8RVPPMF35hTpQ30J7IROItqREUFM8CbeAc7Te084pIgh1GUPofEArPhA0qGtYwex8TqX0KyjzbRocH3gaNzVOQVdetCd+srcxkyw/1U5BhR4kW0+bv97vyghTY8kODIAy3OppNFovTbO08RQkutt0+BaVp/II/pYUm/2Cne7r5PvHsi20fPQUZG2EokUfHX6OIxzvUCRTLnX8pdosgkoufn/bzM0qisknOmW6eI+Zd26kVBInW8m7fF1SzlVmL0chrsQZBcLONC/zZzzQRq0xKQT0SZVt81tAIAu9i7UIX1C6m5cXEm3E5bWWDVT8Fgfd9WeDuZXknMWXixH7SzT9lrWtbIajDu3koIqbNqq44iZVdI8imBhnPdZtNqlwbJyipaZJaqe2CoPQVV/sd7k6z4pJnU7ZYvFl74zlj1pTdKQTJyFOVls3IZnFDM2oHs02Gc+Vq6v1d7/j/0Jx6PYRMRREnXbvyENhrrTy4fDdBxm7FXO6do/EQVD09Hn78OKicyGIX8HC2WYBH5fBJls+P+Uh6eDmdPg4Ss4GMMMhuu+7rA2LqJ2l9fDgpnBoqGUmm7ro+P+acJbETi6W6qbdyxSBH0dh1mkhzQEzu5H+RSbZcaBjkpGtnqgNin6fpXl7chyx2BZWKQTarUde9OiBK1lzyfZwcr4CGStpNCkk21Zd07Ux1fmSxw+nk3Ol0kDpTULGmRVLp+sEBkZbHuZy09p9Xg6TS9UMx5w4g9JKrtkDF1gzKC4BdPzg/0q44gGD5jytQyaYgyeLac9dYGfn8uD2P5Y0oUBHGCINocKXrPp8f/yL2NyL9r7Yl0lNaGyI91WoiPTMyV2Ph2XERFg5fswJCJPclE2UsfEF1tER6Lv8VFp6tswoLz6oxkb6o0ggL39wXVRph4Vm1fwGKZqjcZ2r8aAAAAABJRU5ErkJggg==",
  qm = "data:application/octet-stream;base64,AQABAA4ADgA+AC0AAQABAA4ADgAfAC8AAQABAA4ADgAAAD0AAAABABAADgAeACAAAAABABAADgAuACAAAAABABAADgAAAC8AAQAAAA4ADwA+AAAAAQAAAA4ADwA+AA8AAQAAAA4ADwA+AB4AAQAAAA8AEAAAAAAAAQAAAA8AEAAAABAAAQAAAA8AEAAeABAAAQABAA8ADwAAACAAAQABAA8ADgAQAC8AAQABAA8ADwAPACAAAAABABAADwAPAAAAAQABAA4ADgAtAC8AAAABABAADwAuAAAAAQAAAA8AEAAfAAAAAQAAAA8AEAAPABAAAQAAAA8AEAAuAA8A",
  $a = {
    spritesheet: Ym,
    animdata: qm,
    extent: [16, 16],
    frame_count: 3,
    anims: {
      walk: [0, 2, 2, 0]
    },
    flags: {
      normal: 0,
      green: 1,
      scizzor: 2,
      hercule: 3,
      lady: 4,
      gold: 5,
      striped: 6
    },
    layers_props: [1, 2, 4, 8, 16, 32, 64],
    frame_durations: [100, 100, 100]
  };
class Qm {
  constructor() {
    b(this, "id", 0)
  }
  doRender() {}
  update(e, i) {}
}
class rr {
  wants() {}
  doRender() {}
  update(e, i) {}
  pick() {}
  die() {}
  async init(e) {
    return this
  }
  allocNew(e) {
    return new Qm
  }
  dealloc(e) {}
  process(e) {}
}
class Km {
  constructor(e, i = e.frame_durations) {
    b(this, "currentFrame", 0);
    b(this, "currentAnim");
    b(this, "direction", 1);
    b(this, "elapsed", 0);
    b(this, "onEnd");
    this.res = e, this.durations = i
  }
  get frameIndex() {
    return this.currentAnim[0] + this.currentFrame
  }
  setAnim(e) {
    let i;
    if (!(i = this.res.anims[e])) throw new Error("Animation not found: " + e);
    this.res.anims[e], this.currentAnim = i, this.elapsed = 0, this.currentFrame = 0, this.direction = 1
  }
  update(e) {
    var r, o;
    if (!this.currentAnim) return;
    this.elapsed += e;
    const i = this.currentAnim[1] - this.currentAnim[0] + 1;
    let n = this.durations[this.currentAnim[0] + this.currentFrame];
    for (; this.elapsed > n;)
      if (this.currentFrame += this.direction, this.elapsed -= n, !(this.direction > 0 && this.currentFrame < i) && !(this.direction < 0 && this.currentFrame >= 0)) switch (this.currentAnim[3]) {
        case 0: {
          this.currentFrame = 0, (r = this.onEnd) == null || r.call(this);
          break
        }
        case 2:
          this.direction *= -1, this.direction < 0 ? this.currentFrame += this.direction * 2 : ((o = this.onEnd) == null || o.call(this), this.currentFrame = 0)
      }
  }
}
class Gn {
  constructor(e, i) {
    b(this, "origin", [0, 0]);
    b(this, "onEnd");
    b(this, "ctrl");
    b(this, "animMap");
    b(this, "flip", !1);
    b(this, "currentAnim");
    b(this, "drawpool", []);
    b(this, "angle", 0);
    b(this, "pscale", 1);
    this.sdrawer = e, this.res = i, this.ctrl = new Km(i), this.ctrl.onEnd = () => {
      var r;
      return (r = this.onEnd) == null ? void 0 : r.call(this)
    };
    const n = {};
    for (let r in i.anims) {
      n[r] = [!1, r, i.anims[r]];
      const o = (a, c) => r.includes(a) && (n[r.replace(a, c)] = [!0, r, i.anims[r]]);
      o("_left", "_right"), o("_right", "_left")
    }
    this.animMap = n
  }
  update(e) {
    this.ctrl.update(e)
  }
  set currentFrame(e) {
    this.ctrl.currentFrame = e
  }
  get currentFrame() {
    return this.ctrl.frameIndex
  }
  setAnim(e) {
    let i;
    [this.flip, i, this.currentAnim] = this.animMap[e], this.ctrl.setAnim(i)
  }
  setVariant(e) {
    let i = 0,
      n = 0;
    for (let o of this.res.layers_props) {
      if ((o & e) == o) {
        for (; this.drawpool.length <= n;) this.drawpool.push([0, this.sdrawer.allocInst()]);
        this.drawpool[n][0] = i, n++
      }
      i++
    }
    let r;
    try {
      r = this.drawpool.splice(n), r.map(o => (this.sdrawer.free(o[1]), o))
    } catch {
      for (let o of r) this.sdrawer.free(o[1])
    }
  }
  cleanup() {
    for (; this.drawpool.length != 0;) this.sdrawer.free(this.drawpool.at(-1)[1]), this.drawpool.pop()
  }
  prepareDraw() {
    const e = this.ctrl.frameIndex;
    for (let [i, n] of this.drawpool) n.pos = this.origin, n.angle = this.angle, n.frame = e, n.gscale = [this.flip ? -this.pscale : this.pscale, this.pscale], n.layer = i, n.sync()
  }
}
const or = s => ({
    enter() {},
    leave() {},
    animEnd() {},
    update(e, i) {
      s.ctrl.update(i)
    }
  }),
  Zm = s => {
    let e = s.rng.nextInterval(1e3, 2500),
      i = s.ctrl.pscale / e;
    return {
      ...or(s),
      enter() {
        s.ctrl.setAnim("walk")
      },
      update(n, r) {
        e -= r, s.ctrl.pscale -= i * r, s.upd || (s.upd = !0), s.ctrl.pscale <= 0 && s.owner.dealloc(s.id)
      }
    }
  },
  Vn = s => {
    let e = s.rng.nextInterval(100, 2500);
    return {
      ...or(s),
      enter() {
        if (s.life -= 1, s.life <= 0) {
          s.state = Zm(s);
          return
        }
        s.ctrl.setAnim("walk")
      },
      update(i, n) {
        e -= n, e <= 0 && (s.state = el(s))
      }
    }
  },
  el = s => {
    let e = s.rng.nextInterval(60, 1200),
      i = s.rng.nextInterval(0, Math.PI * 4),
      n = [Math.sin(i), Math.cos(i)];
    const r = s.rng.nextInterval(30, 40);
    return {
      ...or(s),
      enter() {
        s.direction = i
      },
      update(o, a) {
        s.ctrl.update(a);
        const c = r * a * .1;
        [s.x, s.y] = fn([s.x, s.y], ba(n, Math.min(c, e))), e -= c, e <= 0 && (s.state = Vn(s))
      }
    }
  };
class Jm {
  constructor(e, i, n, r) {
    b(this, "_state");
    b(this, "states", {
      idle: Vn,
      moving: el
    });
    b(this, "ctrl");
    b(this, "upd", !0);
    b(this, "rng");
    b(this, "life");
    this.owner = e, this.id = i, this.hook = n, this.rng = new an(r), this.life = ~~this.rng.nextInterval(4, 12), this.ctrl = new Gn(n, $a);
    let o = r % 7;
    this.ctrl.setVariant(2 ** o), this.ctrl.onEnd = () => {
      this._state.animEnd()
    }, this._state = Vn(this), this._state.enter(), this.ctrl.pscale = this.rng.next() + 1
  }
  get direction() {
    return -this.ctrl.angle
  }
  get x() {
    return this.ctrl.origin[0]
  }
  get y() {
    return this.ctrl.origin[1]
  }
  set y(e) {
    this.ctrl.origin[1] = e, this.upd = !0
  }
  set direction(e) {
    this.ctrl.angle = e + Math.PI, this.upd = !0
  }
  set x(e) {
    this.ctrl.origin[0] = e, this.upd = !0
  }
  set state(e) {
    this._state.leave(), this._state = e, e.enter()
  }
  doRender() {
    this.upd && (this.ctrl.prepareDraw(), this.upd = !1)
  }
  die() {
    this.ctrl.cleanup()
  }
  update(e) {
    this._state.update(0, e)
  }
}
var Ht, Zs, Js, Ti, Zn, Et, tl, il, sl, nl;
class $m {
  constructor(e) {
    J(this, Et);
    b(this, "input", {
      spos: "vec2",
      pos: "vec2",
      sel: "float"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Ht);
    J(this, Zs);
    J(this, Js);
    J(this, Ti);
    J(this, Zn);
    ft(this, Ti, e.gl), [Me(this, Ht)._, Me(this, Zs)._, Me(this, Js)._] = e.buildProgram(`#version 300 es
precision highp float;
uniform sampler2D sprite;
uniform mat4 camera;
uniform vec2 dims;

out vec2 uv;



in vec2 spos;
in vec2 pos;
in float sel;

void main() {
	uv = spos + 0.5;
	uv.x /= 2.0;
	if (sel > 0.0)
		uv.x += 0.5;
	gl_Position = camera * vec4(spos * dims + pos, 0, 1.0f);
}


`, `#version 300 es
precision highp float;
uniform sampler2D sprite;
uniform mat4 camera;
uniform vec2 dims;

in vec2 uv;





out vec4 color;

void main() {
    color = texture(sprite, uv);// + vec4(1.0, 1.0, 0.0, 1.0);
}

`), Z(this, Ht), this.uniforms = {
      camera: new qe(i => {}),
      dims: new qe(i => {})
    }, this.bindings = {
      sprite: new gt(i => {})
    }
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Ht)), ye(this, Et, tl).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, Ti),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Ht)), ye(this, Et, sl).call(this), ye(this, Et, il).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, Et, nl).call(this), i.useProgram(n)
  }
}
Ht = new WeakMap, Zs = new WeakMap, Js = new WeakMap, Ti = new WeakMap, Zn = new WeakMap, Et = new WeakSet, tl = function() {
  const e = Z(this, Ht),
    i = Z(this, Ti);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  } {
    const r = i.getUniformLocation(e, "dims");
    this.uniforms.dims.setter = o => i.uniform2fv(r, o), this.uniforms.dims.dirty = !0
  } {
    const r = i.getUniformLocation(e, "sprite");
    this.bindings.sprite.us.setter = o => i.uniform1i(r, o), this.bindings.sprite.us.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, il = function() {
  this.uniforms.camera.sync(), this.uniforms.dims.sync()
}, sl = function() {
  this.bindings.sprite.sync()
}, nl = function() {
  var e;
  (e = this.bindings.sprite.texture) == null || e.disable()
};
var Xt, $s, en, xi, Jn, kt, rl, ol, al, ll;
class eg {
  constructor(e) {
    J(this, kt);
    b(this, "input", {
      spos: "vec2",
      pos: "vec2"
    });
    b(this, "uniforms");
    b(this, "bindings");
    b(this, "input_assembly");
    J(this, Xt);
    J(this, $s);
    J(this, en);
    J(this, xi);
    J(this, Jn);
    ft(this, xi, e.gl), [Me(this, Xt)._, Me(this, $s)._, Me(this, en)._] = e.buildProgram(`#version 300 es
precision highp float;

uniform mat4 camera;
uniform sampler2D sprite;

out vec2 uv;



in vec2 spos;
in vec2 pos;

void main() {
	uv = spos + 0.5;
    vec2 dims = vec2(textureSize(sprite, 0));
	gl_Position = camera * vec4(spos * dims + pos, 0, 1.0f);
}



`, `#version 300 es
precision highp float;

uniform mat4 camera;
uniform sampler2D sprite;

in vec2 uv;





out vec4 color;

void main() {
    color = texture(sprite, uv);// + vec4(1.0, 1.0, 0.0, 1.0);
}

`), Z(this, Xt), this.uniforms = {
      camera: new qe(i => {})
    }, this.bindings = {
      sprite: new gt(i => {})
    }
  }
  setAssembly(e) {
    this.input_assembly = e, e.preparePipelineInput(Z(this, Xt)), ye(this, kt, rl).call(this)
  }
  execDraw(e) {
    var r;
    const i = Z(this, xi),
      n = i.getParameter(i.CURRENT_PROGRAM);
    i.useProgram(Z(this, Xt)), ye(this, kt, al).call(this), ye(this, kt, ol).call(this), (r = this.input_assembly) == null || r.using(e), ye(this, kt, ll).call(this), i.useProgram(n)
  }
}
Xt = new WeakMap, $s = new WeakMap, en = new WeakMap, xi = new WeakMap, Jn = new WeakMap, kt = new WeakSet, rl = function() {
  const e = Z(this, Xt),
    i = Z(this, xi);
  i.linkProgram(e);
  {
    const r = i.getUniformLocation(e, "camera");
    this.uniforms.camera.setter = o => i.uniformMatrix4fv(r, !1, o), this.uniforms.camera.dirty = !0
  } {
    const r = i.getUniformLocation(e, "sprite");
    this.bindings.sprite.us.setter = o => i.uniform1i(r, o), this.bindings.sprite.us.dirty = !0
  }
  const n = i.getProgramInfoLog(e);
  if (n && console.warn(n), !i.getProgramParameter(e, i.LINK_STATUS)) throw new Error("Shader linking failed.")
}, ol = function() {
  this.uniforms.camera.sync()
}, al = function() {
  this.bindings.sprite.sync()
}, ll = function() {
  var e;
  (e = this.bindings.sprite.texture) == null || e.disable()
};
class tg {
  constructor(e, i, n) {
    b(this, "sd");
    b(this, "hook");
    b(this, "prog");
    this.camera = i;
    const {
      gl: r,
      glx: o
    } = e, a = new OffscreenCanvas(10, 48), c = a.getContext("2d");
    c.font = "48px sans", c.lineWidth = 1;
    const l = c.measureText(n);
    a.width = l.width, c.font = "48px sans", c.lineWidth = 1, c.fillStyle = "white", c.strokeStyle = "black", c.textBaseline = "top", c.clearRect(0, 0, a.width, a.height), c.fillText(n, 0, 0), c.strokeText(n, 0, 0);
    const u = o.createTexture(["RGBA", "RGBA", "UNSIGNED_BYTE"], a, void 0, {
        TEXTURE_MAG_FILTER: "LINEAR",
        TEXTURE_MIN_FILTER: "LINEAR_MIPMAP_LINEAR"
      }),
      f = this.prog = new eg(o);
    f.bindings.sprite.texture = u, this.sd = new Jo(e, f, "spos"), this.hook = this.sd.allocInst()
  }
  setPos(e) {
    this.hook.pos = e
  }
  finalizeDraw() {
    this.hook.sync(), this.prog.uniforms.camera.data = this.camera.projectionMatrix, this.sd.finalizeDraw()
  }
}
const ig = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABABAMAAAAg+GJMAAABe2lDQ1BpY2MAACiRfZE9SMNAHMVfW0tFKgp2EBXJUJ3soiKOtQpFqBBqhVYdTC79giYNSYqLo+BacPBjserg4qyrg6sgCH6AODs4KbpIif9LCi1iPDjux7t7j7t3gL9RYarZFQdUzTLSyYSQza0KoVcEMYx+AKMSM/U5UUzBc3zdw8fXuxjP8j735+hV8iYDfAJxnOmGRbxBPLNp6Zz3iSOsJCnE58QTBl2Q+JHrsstvnIsO+3lmxMik54kjxEKxg+UOZiVDJZ4mjiqqRvn+rMsK5y3OaqXGWvfkLwzntZVlrtMcQRKLWIIIATJqKKMCCzFaNVJMpGk/4eEfcvwiuWRylcHIsYAqVEiOH/wPfndrFqYm3aRwAgi+2PbHGBDaBZp12/4+tu3mCRB4Bq60tr/aAGY/Sa+3tegR0LcNXFy3NXkPuNwBBp90yZAcKUDTXygA72f0TTlg4BboWXN7a+3j9AHIUFepG+DgEBgvUva6x7u7O3v790yrvx9gy3KfrAv2/AAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAD///8Acbq6AAD2jv9Lq8igAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfoBhEPHQ5CrvAzAAABwHpUWHRSYXcgcHJvZmlsZSB0eXBlIGljYwAAOI2lU1uOHCEM/OcUOYLxszlODzRS7n+BGAzz2tlIm1hqtSjjcmGK9LvW9GuEGiYYgSdoVdJmBMwT0qaXsaEgGyOCHFLkRAC7Dk8LQL75BxH5SpqVjAw4i2e5wj9E965D0aaFRtjuyn4Y6Yf7m7KKkUajjAtmSH4wMLQYTNaVIDXzCcHGyxF4Ztd7+DgWfq5RYE0+zjnGSLRHwQt+1TtuT/gW5PggYr+ZkIqZVwfwgs/4N/vTkGqoLda0E+yzcAOsI7i6F5w3bvtonByuJvp+S/smq4peIkK7YKWdwEcIXPxrw1YpDqrDaW4y9YT6pjFkbGt9xZ5hCcFFgO8C0t8V5POhQGA1w2g2m1A0YXYi7eNB+JcfCuDxJJ5iOBjeDOyeUiLCZ0NmqByV0q4+glDm2spU2FuBid/OPP9tdaJWJ1F1FZ8UaI+T0dGDkMpHpcilh6J+zNu4aeWPhFhs5u2Y/3w0BzS7be7HHER78qgekxdPiyFImYUUNoNTbi++i6BNBCe1WSgcBuNa58ZSyrk6BHGX+p3v9rDfrh32m/tivP8gejVi+gOTOyBNDwGk0QAAABBjYU52AAAAQAAAAEAAAAAAAAAAADAptQAAAAHkSURBVFjD7ZbLkcMgDEChA8SkAckVrKlgZ9x/TctPWIABJ5ujlUMSP/yQBGOj1DRA/Y9rXHM981tccqXN2E+ESz7JUtsoWHBlaTSF537AivsvlCM0xPCXgLJgzlXKo6CgDQCAWDDnMRETaEZ14JKnSq5pEcx4HEAjngUzroZMCugRPIJvCC62MsItAZkkgA7kSybPsBS082AtwAsD2lOAraE8GbLgwpCvJEG4obk//2dBnk+OkSWEFEDKS0Zm1EQWGku9Ac/f5t4qyKq/IRAtYQHAXCCfyCRXpSxjZwC5CullUNF6GXsBjzgFA553on/P2qmgLQ1bAdSC0Gcogm3vm4Ms0JxiK7BJELi7ENDPLgRdDzBXjaoSpIal385ROh/kkusWcA+iYGMBCo2/mgSDnZQ3W3hgbI4FNjkwC1wvkClSKlFZt8dsEwYh8L01imvoU2SBdinbBF62CHbqBFWKuQIvKBkg4QFnD7YdVSeAC4FjgW/t8cvrFVpzIbC2E9ApoNdxcIFFILqI8SN6YBI/N5IQhM4Y1aQQ1l4+eVpOvgTRYhQHvsswHcdqx/L5Tw/ux5t8mIK5ywdT4G0+mMLc5/HgPZtgxcNB2M4mWPI4pPbDm9yHXGIw7/M4hEN9xJ944uP4A557XS/rS0DGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA2LTE3VDAxOjI0OjI3KzAwOjAwvC00GgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNi0xN1QwMToyNDoyNyswMDowMM1wjKYAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMDYtMTdUMTU6Mjk6MTQrMDA6MDCNSrBXAAAAG3RFWHRpY2M6Y29weXJpZ2h0AFB1YmxpYyBEb21haW62kTFbAAAAInRFWHRpY2M6ZGVzY3JpcHRpb24AR0lNUCBidWlsdC1pbiBzUkdCTGdBEwAAABV0RVh0aWNjOm1hbnVmYWN0dXJlcgBHSU1QTJ6QygAAAA50RVh0aWNjOm1vZGVsAHNSR0JbYElDAAAAAElFTkSuQmCC",
  Tt = s => ({
    enter() {},
    leave() {},
    animEnd() {},
    update(e, i) {
      s.ctrl.update(i), s.accessories.forEach(n => n.ctrl.update(i))
    }
  }),
  ks = s => ({
    ...Tt(s),
    enter() {
      for (let i of s.accessories) s.removeAccessory(i);
      const e = Math.random();
      s.ctrl.setAnim(e < .3 ? "idle" : e < .6 ? "idle2" : "idle3")
    },
    animEnd() {
      this.enter()
    }
  }),
  sg = s => {
    const e = s.buildAccessory("Hand_Picking_Up", [2, -16]);
    return {
      ...Tt(s),
      enter() {
        s.ctrl.setAnim("jiggling")
      },
      animEnd() {
        this.enter()
      },
      leave() {
        s.removeAccessory(e)
      }
    }
  },
  ng = s => {
    let e = !1;
    return {
      ...Tt(s),
      enter() {
        s.ctrl.setAnim("win")
      },
      animEnd() {
        e = !0;
        const i = s.ctrl.currentAnim;
        s.ctrl.currentFrame = i[1] - i[0]
      },
      update(i, n) {
        e || s.ctrl.update(n)
      }
    }
  },
  rg = s => {
    const e = s.buildAccessory("Heart_Ballon", [8, -16]);
    return {
      ...Tt(s),
      enter() {
        s.accessory = [8, -16]
      },
      leave() {
        s.removeAccessory(e)
      }
    }
  },
  ar = s => e => ({
    ...Tt(e),
    enter() {
      e.ctrl.setAnim(s)
    },
    animEnd() {
      e.state = ks(e)
    }
  }),
  og = ar("eating"),
  ag = s => (s.buildAccessory("Hand_patting", [2, -12]), {
    ...Tt(s),
    enter() {
      s.ctrl.setAnim("pat")
    },
    leave() {}
  }),
  Co = s => e => ({
    ...Tt(e),
    enter() {
      e.ctrl.setAnim(s + e.direction)
    },
    animEnd() {}
  }),
  lg = s => {
    let e = 0;
    return {
      ...Tt(s),
      enter() {
        s.ctrl.setAnim("break_" + s.direction)
      },
      animEnd() {
        s.ctrl.setAnim("break_" + s.direction + "_loop"), e++ > 3 && (s.state = s.states.idle(s))
      }
    }
  },
  cg = s => ({
    ...Tt(s),
    enter() {
      s.ctrl.setAnim("falling_" + s.direction)
    },
    animEnd() {
      s.state = s.states.idle(s)
    }
  }),
  ug = ar("landing"),
  fg = ar("bow");
var cl = (s => (s[s.up = 0] = "up", s[s.down = 1] = "down", s[s.left = 2] = "left", s[s.right = 3] = "right", s))(cl || {});
const st = nr.flags,
  hg = [st.sailor, st.sailor2, st.normal, st.normal2],
  So = {
    jig: [st.bowl, st.messy, st.mushroom, st.ribbon, st.twintails],
    gie: [st.rimo, st.long, st.braided, st.puffy]
  },
  dg = (() => {
    let s = [];
    for (let e of hg)
      for (const i in So)
        for (let n of So[i]) s.push([e, n]);
    return s.map(e => e.reduce((i, n) => i | 2 ** n, 0))
  })();
class mg {
  constructor(e, i, n, r, o) {
    b(this, "_state", ks(this));
    b(this, "_direction", 1);
    b(this, "states", {
      idle: ks,
      win: ng,
      run: Co("run_"),
      push: Co("push_"),
      break: lg,
      picked: sg,
      eat: og,
      fall: cg,
      ntr: rg,
      bow: fg,
      landing: ug,
      patting: ag
    });
    b(this, "x", -9999);
    b(this, "y", -9999);
    b(this, "px", 0);
    b(this, "py", 0);
    b(this, "pf", 0);
    b(this, "paf", 0);
    b(this, "upd", !0);
    b(this, "ctrl");
    b(this, "accessories", new Set);
    b(this, "accessory", [0, 0]);
    this.id = e, this.worldscale = i, this.sdrawer = n, this.adrawer = r, this.ctrl = new Gn(n, nr), this.ctrl.setVariant(dg[o]), this.ctrl.onEnd = () => {
      this._state.animEnd()
    }, this._state = ks(this), this._state.enter()
  }
  get direction() {
    return cl[this._direction]
  }
  get state() {
    return this._state
  }
  set state(e) {
    this._state.leave(), this._state = e, e.enter()
  }
  buildAccessory(e, i) {
    const n = new Gn(this.adrawer, Ln);
    n.setVariant(1 << Ln.flags.normal), n.setAnim(e), n.prepareDraw();
    const r = {
      pf: -1,
      ctrl: n,
      offset: i
    };
    return this.accessories.add(r), r
  }
  removeAccessory(e) {
    e.ctrl.cleanup(), this.accessories.delete(e)
  }
  doRender() {
    this.upd && (this.ctrl.prepareDraw(), this.accessories.forEach(e => e.ctrl.prepareDraw()), this.upd = !1)
  }
  die(e) {
    const i = () => {
      this.ctrl.cleanup(), this.accessories.forEach(n => n.ctrl.cleanup()), e()
    };
    this.state = {
      ...Tt(this),
      enter: () => {
        this.ctrl.setAnim("death")
      },
      animEnd: i,
      leave: i
    }
  }
  update(e) {
    this._state.update(0, e), (this.pf != this.ctrl.currentFrame || [...this.accessories].some(i => i.pf != i.ctrl.currentFrame) || this.px != this.x || this.py != this.y) && (this.upd || (this.upd = !0), this.ctrl.origin = [this.x, this.y], this.pf = this.ctrl.currentFrame, this.accessories.forEach(i => {
      i.ctrl.origin = [this.x + i.offset[0] * this.worldscale, this.y + i.offset[1] * this.worldscale], i.pf = i.ctrl.currentFrame
    }), this.px = this.x, this.py = this.y)
  }
}
const gg = new TextDecoder;

function ul(s, e = 0) {
  const i = e;
  for (; e < s.byteLength && s.getInt8(e++););
  if (e - i <= 0) return ["", 0];
  const n = e - 1 - i;
  return [gg.decode(s.buffer.slice(i, e - 1)), n]
}
class pg {
  constructor() {
    b(this, "entities", new Map);
    b(this, "gl");
    b(this, "lastjcparams");
    b(this, "prog");
    b(this, "jcrender");
    b(this, "arender");
    b(this, "camera");
    b(this, "game");
    b(this, "mph", 0);
    b(this, "myjcid");
    Li.subscribe(e => {
      this.lastjcparams = e, e.cake > 0 ? document.body.classList.add("cake") : document.body.classList.remove("cake"), e.pat ? document.body.classList.add("patting") : document.body.classList.remove("patting")
    })
  }
  async init(e) {
    return !e.renderer || !(e.renderer instanceof ls) ? new rr : (this.game = e, this.mph = e.view.maxPieceHeight / 32, this.gl = e.renderer.gl, [this.jcrender, this.arender] = [await Sn(e.renderer.jigGl, nr, e.renderer.camera, this.mph), await Sn(e.renderer.jigGl, Ln, e.renderer.camera, this.mph)], this.prog = this.jcrender.prog, this.camera = e.renderer.camera, this)
  }
  get cakeCount() {
    return this.lastjcparams.cake
  }
  set cakeCount(e) {
    Li.update(i => (i.cake = e, i))
  }
  get patting() {
    return this.lastjcparams.pat
  }
  set patting(e) {
    Li.update(i => (i.pat = e, i))
  }
  wants(e, i) {
    const [n, r] = this.game.view.screenToWorld([e.pageX, e.pageY]), o = this.pick(n, r);
    if (!o) return;
    if (this.cakeCount > 0) {
      this.game.connection.chat(`/feed ${this.cakeCount} ${o.id}`), e.altKey || (this.cakeCount = 0);
      return
    }
    if (this.patting) return this.game.connection.patJc(o.id, !0), {
      move: (l, u) => {},
      end: () => {
        this.game.connection.patJc(o.id, !1)
      }
    };
    const [a, c] = [o.x, o.y];
    return this.game.connection.setJc(o.id, o.x, o.y, 0), o.state = o.states.picked(o), {
      move: (l, u) => {
        o.x = a + l, o.y = c + u, this.game.connection.setJc(o.id, o.x, o.y, 1)
      },
      end: () => {
        this.game.connection.setJc(o.id, o.x, o.y, 2)
      }
    }
  }
  pick(e, i) {
    const n = [e, i];
    for (let r of this.entities.values()) {
      const o = [r.x, r.y];
      if (va(n, _a(o, [18 * this.mph, 28 * this.mph]))) return r
    }
  }
  allocNew(e = this.entities.size, ...i) {
    const n = new mg(e, this.mph, this.jcrender, this.arender, i[0]);
    return this.entities.set(e, n), n.x = NaN, n.y = NaN, n.state = n.states.idle(n), n
  }
  dealloc(e) {
    const i = this.entities.get(e);
    i && i.die(() => {
      this.entities.delete(e)
    })
  }
  process(e) {
    switch (e.getInt8(2)) {
      case 0:
        let n = 5;
        e.byteLength - 5 == 1 ? n = e.getInt8(5) : e.byteLength - 5 == 4 && (n = e.getUint32(5, !0)), this.allocNew(e.getInt16(3, !0), n);
        break;
      case 1: {
        const r = e.getInt16(3, !0);
        this.dealloc(r), r == this.myjcid && (delete this.myjcid, Li.update(o => (delete o.myjc, o)));
        break
      }
      case 2: {
        const r = this.entities.get(e.getInt16(3, !0));
        if (r) {
          let o = 5,
            [a, c] = ul(e, o);
          o += c + 1;
          let l = e.getUint8(o);
          o += 1, r._direction = l, a in r.states && (r.state = r.states[a](r))
        }
        break
      }
      case 3: {
        const r = this.entities.get(e.getInt16(3, !0));
        r && (r.x = e.getFloat32(5, !0), r.y = e.getFloat32(9, !0), r.upd = !0);
        break
      }
      case 4:
        this.myjcid = e.getInt16(3, !0), this.myjcid === -1 && delete this.myjcid, Li.update(r => (r.myjc = this.myjcid, r));
      case 5:
      case 6: {
        const r = this.entities.get(e.getInt16(3, !0));
        if (!r) break;
        e.getInt8(2) === 5 ? r.state = r.states.patting(r) : r.state = r.states.idle(r)
      }
      case 171:
      case 173: {
        const r = this.entities.get(e.getInt16(3, !0));
        if (!r) break;
        e.getInt8(2) === 171 ? r.state = r.states.picked(r) : r.state = r.states.idle(r)
      }
    }
  }
  get myjc() {
    return this.entities.get(this.myjcid)
  }
  update(e, i) {
    this.entities.forEach(n => n.update(i))
  }
  die() {}
  doRender() {
    this.entities.size != 0 && (this.entities.forEach(e => e.doRender()), this.jcrender.prog.uniforms.camera.data = this.camera.projectionMatrix, this.arender.prog.uniforms.camera.data = this.camera.projectionMatrix, this.jcrender.finalizeDraw(), this.arender.finalizeDraw())
  }
}
class bg {
  constructor() {
    b(this, "entities", new Map);
    b(this, "gl");
    b(this, "lastparams", {
      spawn: !1
    });
    b(this, "prog");
    b(this, "lbrender");
    b(this, "camera");
    b(this, "game");
    b(this, "mph", 0);
    b(this, "iidg", 0);
    Mo.subscribe(e => {
      this.lastparams = e, e.spawn ? document.body.classList.add("bugspawn") : document.body.classList.remove("bugspawn")
    })
  }
  async init(e) {
    if (!e.renderer || !(e.renderer instanceof ls)) return new rr;
    this.game = e;
    const i = e.renderer.gl;
    return this.gl = i, this.mph = e.view.maxPieceHeight / 32, this.lbrender = await Sn(e.renderer.jigGl, $a, e.renderer.camera, this.mph), this.prog = this.lbrender.prog, this.camera = e.renderer.camera, this
  }
  pick(e, i) {
    const n = [e, i];
    for (let r of this.entities.values()) {
      const o = [r.x, r.y];
      if (va(n, _a(o, [18 * this.mph, 28 * this.mph]))) return r
    }
  }
  wants(e, i) {
    if (!this.lastparams.spawn) return;
    const [n, r] = this.game.view.screenToWorld([e.pageX, e.pageY]);
    this.game.connection.chat(`/largebug ${~~n} ${~~r}`), Mo.update(o => (o.spawn = !1, o))
  }
  allocNew(e = this.entities.size, i = 0, n = 0, r = ~~(Math.random() * 200)) {
    const o = new Jm(this, e, this.lbrender, r);
    return this.entities.set(e, o), o.x = i, o.y = n, o.state = o.states.idle(o), o
  }
  dealloc(e) {
    const i = this.entities.get(e);
    i && (i.die(), this.entities.delete(e))
  }
  process(e) {
    switch (e.getInt8(2)) {
      case 0:
        const n = new an(e.getInt32(11, !0));
        for (let r = 0; r < 30; ++r) this.allocNew(this.iidg++, e.getFloat32(3, !0), e.getFloat32(7, !0), n.next() * 1e3);
        break
    }
  }
  update(e, i) {
    this.entities.forEach(n => n.update(i))
  }
  die() {}
  doRender() {
    this.entities.size != 0 && (this.entities.forEach(e => e.doRender()), this.lbrender.prog.uniforms.camera.data = this.camera.projectionMatrix, this.lbrender.finalizeDraw())
  }
}
class _g {
  constructor() {
    b(this, "iidg", 0)
  }
  async init(e) {
    return this
  }
  wants() {}
  allocNew(e, i = "", n = 0, r = 4 + Math.random() * 15) {
    const o = document.createElement("span");
    return o.classList.add("impact"), o.style.top = `calc(${~~n}% - ${~~r}vh)`, o.style.fontSize = `${~~r}vh`, o.innerText = i, o.onanimationend = () => o.remove(), document.body.append(o), {
      id: e,
      update() {},
      doRender() {}
    }
  }
  process(e) {
    switch (e.getInt8(2)) {
      case 0:
        const [n, r] = ul(e, 3), o = e.getFloat32(3 + r + 1, !0), a = e.getFloat32(3 + r + 1 + 4, !0);
        this.allocNew(this.iidg++, n, o, a);
        break
    }
  }
  pick(e, i) {}
  dealloc(e) {}
  update(e, i) {}
  die() {}
  doRender() {}
}
class vg {
  constructor(e, i, n = NaN, r = NaN) {
    b(this, "selected", !1);
    b(this, "select_start");
    b(this, "upd", !0);
    this.hook = e, this.id = i, this.x = n, this.y = r
  }
  doRender() {
    this.upd && (this.upd = !1, this.hook.sync())
  }
  update(e) {
    this.hook.pos[0] == this.x && this.hook.pos[1] == this.y && this.hook.sel == +this.selected || (this.upd = !0, this.hook.pos[0] = this.x, this.hook.pos[1] = this.y, this.hook.sel = +this.selected)
  }
  die() {}
}
const Ag = [
  [.9, .1, .1, .6],
  [.1, .9, .1, .6],
  [.1, .1, .9, .6],
  [.9, .9, .1, .6],
  [.9, .1, .9, .6],
  [.1, .9, .9, .6],
  [.9, .5, .1, .6],
  [.5, .1, .9, .6]
];
class wg {
  constructor() {
    b(this, "kaos", new Map);
    b(this, "zones", []);
    b(this, "is_updating_zone", 0);
    b(this, "gl");
    b(this, "textDrawers", []);
    b(this, "rectangleDrawer");
    b(this, "prog");
    b(this, "camera");
    b(this, "jigGl");
    b(this, "spriteDrawer");
    b(this, "game");
    b(this, "mph", 0);
    b(this, "zone_setup", "none")
  }
  async init(e) {
    if (!e.renderer || !(e.renderer instanceof ls)) return new rr;
    this.game = e, this.mph = e.view.maxPieceHeight / 32, this.jigGl = e.renderer.jigGl, this.gl = this.jigGl.gl, this.spriteDrawer = new Jo(this.jigGl.glx, new $m(this.jigGl.glx), "spos");
    const i = new Image;
    await new Promise(r => {
      i.onload = r, i.src = ig
    });
    const n = this.jigGl.glx.createTexture(["RGBA", "RGBA", "UNSIGNED_BYTE"], i);
    return this.spriteDrawer.prog.bindings.sprite.texture = n, this.spriteDrawer.prog.uniforms.dims.data = [64, 64], this.prog = this.spriteDrawer.prog, this.camera = e.renderer.camera, this.rectangleDrawer = new La(this.jigGl, this.camera), this
  }
  setKaos(e) {
    this.kaos.forEach(i => {
      this.spriteDrawer.free(i.hook)
    }), this.kaos.clear();
    for (let i = 0; i < e.length; ++i) this.allocNew(i, ...e[i])
  }
  wants(e) {
    const [i, n] = this.game.view.screenToWorld([e.pageX, e.pageY]);
    if (this.kaos.size == 0) {
      if (this.zone_setup == "none") return;
      this.zone_setup = "waiting_second_point";
      const a = this.zones.at(-1);
      return a[1][0] = [i, n], a[1][1] = [i, n], {
        move: (c, l) => {
          a[1][1] = fn([c, l], [i, n])
        },
        end: () => {
          this.zone_setup = "waiting_first_point"
        }
      }
    }
    const r = this.pick(i, n);
    if (!r) return;
    r.selected = !0, r.select_start = [r.x, r.y];
    const o = this.game.sequencer.next();
    return ei(Math.random() < .01 ? ca : la, 1, !0, o), {
      move: (a, c) => {
        r.x = r.select_start[0] + a, r.y = r.select_start[1] + c;
        const l = 64,
          u = 64;
        r.x = ut(r.x, l / 2, this.game.view.boardWidth - l / 2), r.y = ut(r.y, u / 2, this.game.view.boardHeight - u / 2), this.game.connection.sendKaoPosition(r.id, r.x, r.y)
      },
      end() {
        r.selected = !1
      }
    }
  }
  pick(e, i) {
    for (const [n, r] of [...this.kaos].reverse()) {
      const o = [r.x, r.y];
      if (Nn(e, i, ...o) < 44) return r
    }
  }
  allocNew(e = this.kaos.size, ...i) {
    const n = new vg(this.spriteDrawer.allocInst(), e, ...i);
    return this.kaos.set(e, n), n
  }
  dealloc(e) {
    const i = this.kaos.get(e);
    i && (this.spriteDrawer.free(i.hook), this.kaos.delete(e))
  }
  process(e) {
    switch (e.getInt8(2)) {
      case 0:
        this.allocNew(e.getInt16(3, !0), 5 < e.byteLength ? e.getInt8(5) : 5);
        break;
      case 1:
        this.dealloc(e.getInt16(3, !0));
        break;
      case 2: {
        const n = this.kaos.get(e.getInt16(3, !0));
        n && (n.x = e.getFloat32(5, !0), n.y = e.getFloat32(9, !0), n.upd = !0);
        break
      }
    }
  }
  update(e, i) {
    this.kaos.forEach(n => n.update(i))
  }
  die() {}
  doRender() {
    var i;
    const e = this.gl;
    if (this.spriteDrawer.prog.uniforms.camera.data = this.camera.projectionMatrix, this.zones.length > 0) {
      for (let n = 0; n < this.zones.length; ++n) {
        const r = this.zones[n][1];
        this.rectangleDrawer.drawRect(...r[0], ...r[1], Ag[n & 7])
      }
      if (e.enable(e.BLEND), this.textDrawers.length != this.zones.length) {
        this.textDrawers = [];
        for (let n of this.zones) {
          const r = new tg(this.jigGl, this.camera, n[0]);
          this.textDrawers.push(r)
        }
      }
      this.kaos.forEach(n => n.doRender()), (i = this.spriteDrawer) == null || i.finalizeDraw();
      for (let n = 0; n < this.textDrawers.length; ++n) {
        const r = this.zones[n];
        this.textDrawers[n].setPos(nm(r[1]))
      }
      for (let n of this.textDrawers) n.finalizeDraw()
    }
  }
}

function is(s) {
  return fl(`/assets/pictures/${s}`)
}

function fl(s) {
  return `${location.origin}${s}`
}
class xn {
  static waitAll(e) {
    return Promise.all(e)
  }
  static async waitAsap(e, i) {
    for (const n of e) n.then(i);
    return await Promise.all(e)
  }
  static preparePromises(e, i) {
    const n = e.length;
    let r = 0,
      o = !1;
    return i == null || i(r, n), e.map(async c => {
      const l = is(c.image),
        u = !!c.isvideo;
      try {
        const f = await (u ? this.loadVideo(l, c) : this.loadImage(l, c));
        return o || i == null || i(++r, n), f
      } catch (f) {
        throw o = !0, f
      }
    })
  }
  static loadVideo(e, i) {
    return new Promise((n, r) => {
      const o = document.createElement("video");
      o.onerror = u => {
        r(u)
      }, o.crossOrigin = "anonymous", o.playsInline = !0, o.muted = !0, o.loop = !0, o.src = e;
      let a = !1,
        c = !1;
      o.addEventListener("playing", () => {
        a = !0, l()
      }, {
        once: !0
      }), o.addEventListener("timeupdate", () => {
        c = !0, l()
      }, {
        once: !0
      }), o.play();
      const l = () => {
        a && c && n({
          element: o,
          isVideo: !0,
          url: e,
          width: o.videoWidth,
          height: o.videoHeight,
          set: i
        })
      }
    })
  }
  static loadImage(e, i) {
    return new Promise((n, r) => {
      const o = new Image;
      o.onerror = a => {
        r(a)
      }, o.crossOrigin = "anonymous", o.src = e, o.onload = () => {
        n({
          element: o,
          isVideo: !1,
          url: e,
          width: o.naturalWidth,
          height: o.naturalHeight,
          set: i
        })
      }
    })
  }
}
const hl = Pe(null),
  zt = new an(123),
  Bi = new an(123);
class yg extends EventTarget {
  constructor() {
    super();
    b(this, "loaded", !1);
    b(this, "state");
    b(this, "rules");
    b(this, "view");
    b(this, "records", []);
    b(this, "roomUsers", []);
    b(this, "roomdef", {});
    b(this, "roomName");
    b(this, "onEntityPick");
    b(this, "onNextClick");
    b(this, "actions");
    b(this, "renderer");
    b(this, "connection");
    b(this, "uiStateHandler");
    b(this, "interpolator");
    b(this, "sequencer", new On);
    b(this, "managers", [pg, bg, _g, wg]);
    b(this, "entities", []);
    this.state = new xm, this.rules = new Cm(Ye, {}), this.view = new Sm
  }
  getUserById(i) {
    return this.roomUsers.find(n => n.id == i)
  }
  async doEntityStress() {
    const i = this.entities[0],
      n = new Set;
    for (let r = 0; r < 200; ++r) {
      if (Bi.next() < 0) {
        const o = [...n.values()][~~(Bi.next() * n.size)];
        if (o === void 0) continue;
        i.dealloc(o), n.delete(o)
      } else {
        let o = 500;
        for (; n.has(o);) o = ~~(Bi.next() * 1e3) + 500;
        const a = i.allocNew(o);
        a.x = Bi.next() * 1e3, a.y = Bi.next() * 1e3, n.add(o)
      }
      await new Promise(requestAnimationFrame)
    }
    for (let r of n) i.dealloc(r), await new Promise(requestAnimationFrame)
  }
  destroy() {
    var i, n;
    (i = this.connection) == null || i.close(), this.connection = void 0, this.roomdef = {}, (n = this.renderer) == null || n.destroy(), this.renderer = void 0, hl.set(null), this.loaded = !1
  }
  setRoomDef(i) {
    this.roomdef = i, zt.state = i.seed, this.state.sets = i.sets.slice(), this.rules.roomdef = this.roomdef, this.view.boardHeight = i.boardHeight || 0, this.view.boardWidth = i.boardWidth || 0, this.loaded && (this.view.stopActiveOperations(), this.syncRoomDefGroups()), !this.loaded && Qi && ir("viewRoom") !== Qi && Eg(), this.loaded = !0, this.dispatchEvent(new Event("data-loaded"))
  }
  syncRoomDefGroups() {
    var r;
    const n = this.roomdef.groups.map(o => ({
      set: 0 | o.set,
      id: o.id,
      ids: o.ids || [],
      x: o.x,
      y: o.y,
      w: 0,
      h: 0,
      locked: !!o.locked,
      rot: 0 | (o.rot || 0),
      angle: (0 | (o.rot || 0)) * Math.PI * .5,
      targetAngle: (0 | (o.rot || 0)) * Math.PI * .5,
      pieces: o.indices.map(a => this.state.setPieces[0 | o.set][a]),
      user: this.getUserById(+o.dragged || +o.selected || 0),
      selectedByOther: !!o.selected,
      selected: !1,
      dragged: !1,
      startX: 0,
      startY: 0,
      rotp: o.rotp
    }));
    this.state.syncGroups(n), (r = this.uiStateHandler) == null || r.recountHeldPieces(this.state.groups)
  }
  async resetEntityManagers() {
    this.entities.forEach(i => i.die()), this.entities = await Promise.all(this.managers.map(async i => await new i().init(this)))
  }
  init(i) {
    if (i) {
      this.roomName = i, this.connection = new Fm(this.roomName), this.uiStateHandler = new Vm, this.interpolator = new Nm(this, !1);
      const n = new Bm(this, this.interpolator);
      this.connection.onMessage = r => n.handle(r), this.connection.addEventListener("connecting", () => jt.set({
        status: "connecting"
      })), this.connection.addEventListener("connected", () => jt.set({
        status: "loading"
      })), this.connection.addEventListener("disconnected", r => {
        this.loaded = !1, this.dispatchEvent(new Event("disconnected"));
        const {
          reason: o,
          retry: a
        } = r.detail;
        if (o.includes("not authenticated")) {
          ec("/login?room=" + this.roomName);
          return
        }
        const c = a ? "connecting" : "error";
        jt.set({
          status: c,
          text: o
        })
      }), this.connection.connect()
    }
    this.actions = new Rm(this.state, this.view, this.rules, this.connection, n => this.dispatchEvent(n))
  }
  pickEntity(i) {
    return this.onEntityPick = i, () => {
      delete this.onEntityPick
    }
  }
  nextClick(i) {
    return this.onNextClick = i, () => {
      delete this.onNextClick
    }
  }
}

function N1(s, e, i) {
  Ue.actions.dragMove(s, e, i)
}

function Eg() {
  const s = innerWidth / Ue.view.boardWidth,
    e = innerHeight / Ue.view.boardHeight,
    i = s < e ? s : e;
  Ue.actions.setViewPos((innerWidth / i - Ue.view.boardWidth) / 2, (innerHeight / i - Ue.view.boardHeight) / 2, i)
}
var kg = (s => (s[s.TopLeft = 17] = "TopLeft", s[s.Top = 33] = "Top", s[s.TopRight = 65] = "TopRight", s[s.Left = 18] = "Left", s[s.Center = 34] = "Center", s[s.Right = 66] = "Right", s[s.BottomLeft = 20] = "BottomLeft", s[s.Bottom = 36] = "Bottom", s[s.BottomRight = 68] = "BottomRight", s))(kg || {});

function O1(s) {
  const e = !!Ye.snapshot().imblind;
  return Ue.actions.limitZoom(s, e)
}

function Tg() {
  return Ue.rules.canMultiselect()
}

function B1() {
  return Ue.rules.sticky ? Ue.view.stickied.size == 2 : Tg() && !Ue.roomdef.norectselect || (bi == null ? void 0 : bi.host.ChangeRoomSettings)
}

function L1() {
  Ue.actions.releaseHeldGroups(), Ue.rules.canMultiselect() || Ue.actions.deselectSelected()
}

function xg(s) {
  s.addEventListener("merge", e => {
    var o;
    const i = e.detail.group;
    (o = s.interpolator) == null || o.stop(i, i.x, i.y);
    const r = e.detail.isMe ? 1 : .5;
    ei(ra, r), s.state.isGameEnded() && (ci.markAsCompleted(), ei(aa)), ua(), ys()
  }), s.addEventListener("lock", () => {
    ei(Mn), ys()
  }), s.addEventListener("unlock", () => {
    ei(Mn), ys()
  })
}

function Rg(s) {
  var e;
  try {
    Il()
  } catch (i) {
    if (i === "no webgl2 support") {
      if (Rg("cpu").reason) throw new Error("Room requires hardware acceleration, but it is not available");
      return {
        renderer: "cpu",
        reason: "Hardware acceleration is not available in your browser"
      }
    }
  }
  if (s != "gpu4") {
    if (Ue.state.sets.length > 4) return {
      renderer: "gpu4",
      reason: 'This room has more than 4 sets, the "Quality" renderer is required'
    };
    if (Ue.state.sets.some(i => i.image.endsWith(".webm") || i.image.endsWith(".mp4"))) return {
      renderer: "gpu4",
      reason: 'This room uses a video, the "Quality" renderer is required'
    };
    if ((e = Ue.roomdef.ext) != null && e.rot) return {
      renderer: "gpu4",
      reason: 'This room is rotting, the "Quality" renderer is required'
    }
  }
  return {
    renderer: s
  }
}

function G1(s, e, i) {
  switch (e) {
    case "gpu":
      return new Sd(s, i);
    case "cpu":
      return new wd(s, i);
    default:
    case "gpu4":
      return new ls(s, i)
  }
}
async function Cg(s) {
  const e = s.renderer;
  if (!e) throw new Error("No renderer");
  jt.set({
    status: "loading"
  });
  const i = xn.preparePromises(s.state.sets, (r, o) => {
    jt.set({
      status: "loading",
      text: `${r}/${o}`
    })
  });
  if (e instanceof ls) await e.init(), (async () => {
    try {
      const o = (await xn.waitAsap(i, a => {
        e.uploadTexture(a)
      })).filter(a => a.isVideo).map(a => a.element);
      o.length > 0 && vl.addElements(o), jt.set({
        status: "loaded"
      })
    } catch (r) {
      fa(r)
    }
  })();
  else {
    const r = await xn.waitAll(i);
    e.uploadTextures(r), await e.init(), jt.set({
      status: "loaded"
    })
  }
  hl.set(e), s.view.stopActiveOperations(), s.syncRoomDefGroups(), await s.resetEntityManagers(), s.state.isGameEnded() && (s.view.borderOpacity = 0, ci.markAsCompleted()), ys(), ua(), s.connection.changeMode("process")
}
let Ue, Qi = "",
  Po = "";
const V1 = () => (Ue = new yg, Ue),
  H1 = (s, e) => {
    Qi = e, Qi && Po && Fi("secret:" + Qi, Po), s.init(e), Sg(s), s.view.addEventListener("view-change", () => {
      s.roomName && (Fi("viewRoom", s.roomName), Fi("viewX", s.view.x), Fi("viewY", s.view.y), Fi("viewScale", s.view.scale))
    }), xg(s)
  };

function Sg(s) {
  ir("viewRoom") === s.roomName && (s.view.x = _n("viewX", 0), s.view.y = _n("viewY", 0), s.view.scale = _n("viewScale", 1))
}
var Ee = (s => (s[s.ChangeRoomSettings = 1] = "ChangeRoomSettings", s[s.KickImmune = 2] = "KickImmune", s[s.Kick = 4] = "Kick", s[s.Lock = 8] = "Lock", s[s.Restart = 16] = "Restart", s[s.Delete = 32] = "Delete", s[s.SlowMode = 64] = "SlowMode", s[s.Cleanup = 128] = "Cleanup", s[s.Playlist = 256] = "Playlist", s[s.Poll = 512] = "Poll", s[s.Rollback = 1024] = "Rollback", s[s.Delegate = 2048] = "Delegate", s[s.RoomCreator = 4095] = "RoomCreator", s[s.ReadBanlist = 4096] = "ReadBanlist", s[s.Debug = 8192] = "Debug", s[s.Ban = 16384] = "Ban", s[s.Admin = 32767] = "Admin", s))(Ee || {});
const Ye = fd(),
  dl = s => ({
    ChangeRoomSettings: (s & Ee.ChangeRoomSettings) == Ee.ChangeRoomSettings,
    KickImmune: (s & Ee.KickImmune) == Ee.KickImmune,
    Kick: (s & Ee.Kick) == Ee.Kick,
    Lock: (s & Ee.Lock) == Ee.Lock,
    Restart: (s & Ee.Restart) == Ee.Restart,
    Delete: (s & Ee.Delete) == Ee.Delete,
    SlowMode: (s & Ee.SlowMode) == Ee.SlowMode,
    Cleanup: (s & Ee.Cleanup) == Ee.Cleanup,
    Playlist: (s & Ee.Playlist) == Ee.Playlist,
    Poll: (s & Ee.Poll) == Ee.Poll,
    Rollback: (s & Ee.Rollback) == Ee.Rollback,
    Delegate: (s & Ee.Delegate) == Ee.Delegate,
    RoomCreator: (s & Ee.RoomCreator) == Ee.RoomCreator,
    ReadBanlist: (s & Ee.ReadBanlist) == Ee.ReadBanlist,
    Debug: (s & Ee.Debug) == Ee.Debug,
    Ban: (s & Ee.Ban) == Ee.Ban,
    Admin: (s & Ee.Admin) == Ee.Admin
  });

function Pg(s) {
  let e = atob(s),
    i = e.length,
    n = new Uint8Array(i);
  for (let r = 0; r < i; r++) n[r] = e.charCodeAt(r);
  return n.buffer
}
const ml = s => {
    if (!s || s.length == 0) return 0;
    if (s[0] == "|") {
      const e = Pg(s.slice(1));
      return new DataView(e).getUint32(0, !0)
    }
    return Ee.RoomCreator
  },
  gl = Pe({
    host: dl(ml(Ye.snapshot().secretforthisroom))
  });
let bi;
gl.subscribe(s => {
  bi = s
});
Ye.subscribe(s => {
  gl.set({
    host: dl(ml(Ye.snapshot().secretforthisroom))
  })
});
const Us = (() => {
    const s = {
        minprice: 0,
        qty: 0
      },
      e = Pe(s);
    return {
      subscribe: e.subscribe,
      setMinPrice: i => e.update(n => ({
        ...n,
        minprice: i
      })),
      setQty: i => e.update(n => ({
        ...n,
        qty: i
      })),
      reset: () => e.set(s)
    }
  })(),
  lr = (() => {
    const s = Pe(void 0);
    return {
      subscribe: s.subscribe,
      stop: () => s.set(void 0),
      set: e => {
        const i = xs(s);
        i && e.timeStarted < i.timeStarted || s.set(e)
      }
    }
  })(),
  pl = Pe([]),
  bl = (() => {
    const s = Pe([]);
    let e = [],
      i;
    const n = r => {
      e.push(r), clearTimeout(i), i = setTimeout(() => {
        s.update(o => [...o, ...e]), e = [], i = void 0
      }, 50)
    };
    return {
      subscribe: s.subscribe,
      addMessage: r => {
        var a;
        const o = Ye.snapshot();
        if (r.id !== ((a = Ue.connection) == null ? void 0 : a.playerId) && !o.hidechat && !o.mutechat) {
          let c = oa;
          if (r.name.startsWith("(whisper) ")) {
            const l = r.name.slice(10);
            xs(cr).some(f => f.name.toLowerCase() === l.toLowerCase()) && (c = Pn)
          } else if (r.message.includes("@")) {
            let {
              savedname: l
            } = xs(Ye);
            l = l.toLowerCase(), r.message.toLowerCase().includes("@" + l) && (c = Pn)
          }
          ei(c)
        }
        n(r)
      },
      clear: () => {
        e = [], clearTimeout(i), i = void 0, s.set([])
      }
    }
  })(),
  cr = (() => {
    const {
      subscribe: s,
      set: e
    } = Pe([]);
    return {
      subscribe: s,
      set: e,
      reset: () => e([])
    }
  })(),
  _l = (() => {
    const s = Pe(new Map);
    return {
      ...s,
      reset: () => s.set(new Map)
    }
  })(),
  zs = hd(),
  Hn = (() => {
    const s = Pe();
    return {
      subscribe: s.subscribe,
      reset: () => s.set(void 0),
      set: e => s.set(e)
    }
  })(),
  Mg = (() => {
    const s = Pe();
    return {
      subscribe: s.subscribe,
      reset: () => s.set({
        ranking: []
      }),
      set: e => s.set(e)
    }
  })(),
  jt = (() => {
    const s = Pe({
      status: "connecting"
    });
    return {
      subscribe: s.subscribe,
      set: e => {
        s.update(i => i.status === e.status && e.status === "error" ? {
          ...e,
          text: [i.text, e.text].filter(n => n).join(", ")
        } : e)
      }
    }
  })(),
  ci = (() => {
    const s = {
        lockedPiecesCount: 0,
        donePercent: 0,
        timerText: "",
        isCompleted: !1
      },
      e = Pe(s);
    return {
      ...e,
      reset: () => e.set(s),
      markAsCompleted: () => {
        e.update(i => ({
          ...i,
          isCompleted: !0
        }))
      }
    }
  })(),
  vl = (() => {
    const s = Pe(new Map);
    return {
      subscribe: s.subscribe,
      reset: () => s.set(new Map),
      addElements: e => {
        s.update(i => (e.forEach(n => i.set(n.src, n)), i))
      },
      getProgress: e => {
        const i = xs(s).get(e);
        return (i == null ? void 0 : i.currentTime) ?? 0
      }
    }
  })(),
  Dg = (() => {
    const s = Pe({
      visible: !1
    });
    return {
      subscribe: s.subscribe,
      showPicker: (e, i) => {
        s.update(n => ({
          ...n,
          visible: !0,
          color: e,
          texture: i
        }))
      },
      hidePicker: () => s.update(e => ({
        ...e,
        visible: !1
      }))
    }
  })(),
  Al = Pe({
    zones: []
  }),
  Li = Pe({
    cake: 0,
    pat: !1
  }),
  Mo = Pe({
    spawn: !1
  }),
  X1 = () => {
    Us.reset(), lr.stop(), pl.set([]), bl.clear(), cr.reset(), _l.reset(), zs.reset(), Hn.reset(), ci.reset(), vl.reset(), Dg.hidePicker(), Al.set({
      zones: []
    }), Es.reset()
  };
var Fg = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "gear",
    n = 512,
    r = 512,
    o = [9881, "cog"],
    a = "f013",
    c = "M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faGear = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(Fg);
var Ug = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "lock",
    n = 448,
    r = 512,
    o = [128274],
    a = "f023",
    c = "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faLock = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(Ug);

function Do(s, e, i) {
  const n = s.slice();
  return n[7] = e[i], n
}

function Fo(s, e, i) {
  const n = s.slice();
  return n[10] = e[i], n
}

function Uo(s) {
  let e, i;
  return e = new _f({
    props: {
      thumb: s[10],
      class: "border-primary/50 bg-background focus-visible:ring-ring block h-4 w-4 z-10 rounded-full border shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, r) {
      const o = {};
      r & 32 && (o.thumb = n[10]), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function zo(s) {
  let e, i, n = Pi(s[6]),
    r = [];
  for (let a = 0; a < n.length; a += 1) r[a] = Io(Do(s, n, a));
  const o = a => x(r[a], 1, 1, () => {
    r[a] = null
  });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = K()
    },
    l(a) {
      for (let c = 0; c < r.length; c += 1) r[c].l(a);
      e = K()
    },
    m(a, c) {
      for (let l = 0; l < r.length; l += 1) r[l] && r[l].m(a, c);
      O(a, e, c), i = !0
    },
    p(a, c) {
      if (c & 64) {
        n = Pi(a[6]);
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Do(a, n, l);
          r[l] ? (r[l].p(u, c), T(r[l], 1)) : (r[l] = Io(u), r[l].c(), T(r[l], 1), r[l].m(e.parentNode, e))
        }
        for (Te(), l = n.length; l < r.length; l += 1) o(l);
        xe()
      }
    },
    i(a) {
      if (!i) {
        for (let c = 0; c < n.length; c += 1) T(r[c]);
        i = !0
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let c = 0; c < r.length; c += 1) x(r[c]);
      i = !1
    },
    d(a) {
      a && C(e), $n(r, a)
    }
  }
}

function Io(s) {
  let e, i;
  return e = new kf({
    props: {
      tick: s[7],
      class: "translate-y-[8px] h-[5px] z-0 w-[1px] bg-primary/40"
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, r) {
      const o = {};
      r & 64 && (o.tick = n[7]), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function zg(s) {
  let e, i, n, r, o, a;
  i = new hf({
    props: {
      class: "bg-primary absolute h-full"
    }
  });
  let c = Pi(s[5]),
    l = [];
  for (let h = 0; h < c.length; h += 1) l[h] = Uo(Fo(s, c, h));
  const u = h => x(l[h], 1, 1, () => {
    l[h] = null
  });
  let f = s[2] && zo(s);
  return {
    c() {
      e = q("span"), be(i.$$.fragment), n = Be();
      for (let h = 0; h < l.length; h += 1) l[h].c();
      r = Be(), f && f.c(), o = K(), this.h()
    },
    l(h) {
      e = Q(h, "SPAN", {
        class: !0
      });
      var d = W(e);
      _e(i.$$.fragment, d), d.forEach(C), n = Le(h);
      for (let m = 0; m < l.length; m += 1) l[m].l(h);
      r = Le(h), f && f.l(h), o = K(), this.h()
    },
    h() {
      X(e, "class", "bg-primary/20 relative h-1.5 w-full grow overflow-hidden rounded-full")
    },
    m(h, d) {
      O(h, e, d), ve(i, e, null), O(h, n, d);
      for (let m = 0; m < l.length; m += 1) l[m] && l[m].m(h, d);
      O(h, r, d), f && f.m(h, d), O(h, o, d), a = !0
    },
    p(h, d) {
      if (d & 32) {
        c = Pi(h[5]);
        let m;
        for (m = 0; m < c.length; m += 1) {
          const g = Fo(h, c, m);
          l[m] ? (l[m].p(g, d), T(l[m], 1)) : (l[m] = Uo(g), l[m].c(), T(l[m], 1), l[m].m(r.parentNode, r))
        }
        for (Te(), m = c.length; m < l.length; m += 1) u(m);
        xe()
      }
      h[2] ? f ? (f.p(h, d), d & 4 && T(f, 1)) : (f = zo(h), f.c(), T(f, 1), f.m(o.parentNode, o)) : f && (Te(), x(f, 1, 1, () => {
        f = null
      }), xe())
    },
    i(h) {
      if (!a) {
        T(i.$$.fragment, h);
        for (let d = 0; d < c.length; d += 1) T(l[d]);
        T(f), a = !0
      }
    },
    o(h) {
      x(i.$$.fragment, h), l = l.filter(Boolean);
      for (let d = 0; d < l.length; d += 1) x(l[d]);
      x(f), a = !1
    },
    d(h) {
      h && (C(e), C(n), C(r), C(o)), Ae(i), $n(l, h), f && f.d(h)
    }
  }
}

function Ig(s) {
  let e, i, n;
  const r = [{
    class: ue("relative flex w-full touch-none select-none items-center", s[1])
  }, s[3]];

  function o(c) {
    s[4](c)
  }
  let a = {
    $$slots: {
      default: [zg, ({
        thumbs: c,
        ticks: l
      }) => ({
        5: c,
        6: l
      }), ({
        thumbs: c,
        ticks: l
      }) => (c ? 32 : 0) | (l ? 64 : 0)]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let c = 0; c < r.length; c += 1) a = P(a, r[c]);
  return s[0] !== void 0 && (a.value = s[0]), e = new of({
    props: a
  }), ke.push(() => rn(e, "value", o)), {
    c() {
      be(e.$$.fragment)
    },
    l(c) {
      _e(e.$$.fragment, c)
    },
    m(c, l) {
      ve(e, c, l), n = !0
    },
    p(c, [l]) {
      const u = l & 10 ? se(r, [l & 2 && {
        class: ue("relative flex w-full touch-none select-none items-center", c[1])
      }, l & 8 && Je(c[3])]) : {};
      l & 8292 && (u.$$scope = {
        dirty: l,
        ctx: c
      }), !i && l & 1 && (i = !0, u.value = c[0], tn(() => i = !1)), e.$set(u)
    },
    i(c) {
      n || (T(e.$$.fragment, c), n = !0)
    },
    o(c) {
      x(e.$$.fragment, c), n = !1
    },
    d(c) {
      Ae(e, c)
    }
  }
}

function Ng(s, e, i) {
  const n = ["class", "showTicks", "value"];
  let r = L(e, n),
    {
      class: o = void 0
    } = e,
    {
      showTicks: a = !1
    } = e,
    {
      value: c = [0]
    } = e;

  function l(u) {
    c = u, i(0, c)
  }
  return s.$$set = u => {
    e = P(P({}, e), ge(u)), i(3, r = L(e, n)), "class" in u && i(1, o = u.class), "showTicks" in u && i(2, a = u.showTicks), "value" in u && i(0, c = u.value)
  }, [c, o, a, r, l]
}
class W1 extends fe {
  constructor(e) {
    super(), he(this, e, Ng, Ig, ae, {
      class: 1,
      showTicks: 2,
      value: 0
    })
  }
}

function Og(s) {
  let e, i, n, r, o, a;
  return {
    c() {
      e = q("video"), i = q("track"), this.h()
    },
    l(c) {
      e = Q(c, "VIDEO", {
        class: !0,
        draggable: !0,
        src: !0,
        currenttime: !0
      });
      var l = W(e);
      i = Q(l, "TRACK", {
        kind: !0
      }), l.forEach(C), this.h()
    },
    h() {
      X(i, "kind", "captions"), X(e, "class", n = s[2] || Is), e.autoplay = !0, e.muted = !0, e.loop = !0, X(e, "draggable", "false"), Ri(e.src, r = s[0].objectUrl) || X(e, "src", r), X(e, "currenttime", s[1])
    },
    m(c, l) {
      O(c, e, l), me(e, i), s[7](e), o || (a = [B(e, "canplay", s[4]), B(e, "error", s[6])], o = !0)
    },
    p(c, l) {
      l & 4 && n !== (n = c[2] || Is) && X(e, "class", n), l & 1 && !Ri(e.src, r = c[0].objectUrl) && X(e, "src", r), l & 2 && X(e, "currenttime", c[1])
    },
    d(c) {
      c && C(e), s[7](null), o = !1, Ze(a)
    }
  }
}

function Bg(s) {
  let e, i, n, r, o;
  return {
    c() {
      e = q("img"), this.h()
    },
    l(a) {
      e = Q(a, "IMG", {
        class: !0,
        alt: !0,
        draggable: !0,
        src: !0
      }), this.h()
    },
    h() {
      X(e, "class", i = s[2] || Is), X(e, "alt", "preview"), X(e, "draggable", "false"), Ri(e.src, n = s[0].objectUrl) || X(e, "src", n)
    },
    m(a, c) {
      O(a, e, c), r || (o = [B(e, "load", s[5]), B(e, "error", s[6])], r = !0)
    },
    p(a, c) {
      c & 4 && i !== (i = a[2] || Is) && X(e, "class", i), c & 1 && !Ri(e.src, n = a[0].objectUrl) && X(e, "src", n)
    },
    d(a) {
      a && C(e), r = !1, Ze(o)
    }
  }
}

function Lg(s) {
  let e;

  function i(o, a) {
    return o[0].isImage ? Bg : Og
  }
  let n = i(s),
    r = n(s);
  return {
    c() {
      r.c(), e = K()
    },
    l(o) {
      r.l(o), e = K()
    },
    m(o, a) {
      r.m(o, a), O(o, e, a)
    },
    p(o, [a]) {
      n === (n = i(o)) && r ? r.p(o, a) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)))
    },
    i: Ge,
    o: Ge,
    d(o) {
      o && C(e), r.d(o)
    }
  }
}
const Is = "bg-white w-full block pointer-events-none rounded-lg";

function Gg(s, e, i) {
  let {
    item: n
  } = e, {
    currentTime: r = 0
  } = e, {
    extraClasses: o = void 0
  } = e, a;
  const c = Ml();
  let l = !1;

  function u(m) {
    if (l) return;
    const g = m.target;
    c("mediaLoad", {
      item: n,
      width: g.videoWidth,
      height: g.videoHeight,
      element: g
    }), l = !0
  }

  function f(m) {
    if (l) return;
    const g = m.target;
    c("mediaLoad", {
      item: n,
      width: g.naturalWidth,
      height: g.naturalHeight,
      element: g
    }), l = !0
  }

  function h() {
    c("error", {
      text: "Error: Failed to decode media"
    })
  }

  function d(m) {
    ke[m ? "unshift" : "push"](() => {
      a = m, i(3, a), i(1, r)
    })
  }
  return s.$$set = m => {
    "item" in m && i(0, n = m.item), "currentTime" in m && i(1, r = m.currentTime), "extraClasses" in m && i(2, o = m.extraClasses)
  }, s.$$.update = () => {
    s.$$.dirty & 10 && r && a && i(3, a.currentTime = r, a), s.$$.dirty & 1 && n && (l = !1)
  }, [n, r, o, a, u, f, h, d]
}
class j1 extends fe {
  constructor(e) {
    super(), he(this, e, Gg, Lg, ae, {
      item: 0,
      currentTime: 1,
      extraClasses: 2
    })
  }
}
const Vg = s => [...new Array(~~Math.sqrt(s) + 1)].map((e, i) => i + 1).filter(e => s % e == 0),
  Hg = (s, e) => [...Array(e - s)].map((i, n) => n + s),
  Y1 = (s, e, i) => {
    let o = !1;
    s < e && ([s, e] = [e, s], o = !0);
    const a = s / e,
      c = ~~((1 + .1) * i),
      l = ~~((1 - .1) * i);
    let u = 0,
      f = [0, 0],
      h = Number.POSITIVE_INFINITY,
      d;
    const m = l === c ? [l] : Hg(l, c);
    for (let g of m) {
      for (const A of Vg(g)) {
        let w = ~~(g / A),
          y = w / A;
        Math.abs(a - y) < Math.abs(a - u) && (u = y, f = [w, A])
      }
      const p = Math.max(a, u) / Math.min(a, u);
      let _ = 1.005 ** Math.abs(g - i) * p;
      (!d || _ < h) && (h = _, d = [f, p])
    }
    if (o) {
      const [g, p] = d[0];
      d[0] = [p, g]
    }
    return d
  };

function Xg(s) {
  let e, i, n = [{
      width: s[0]
    }, {
      height: s[0]
    }, s[5], {
      role: s[1]
    }, {
      "aria-label": s[3]
    }, {
      viewBox: "0 0 15 15"
    }, {
      fill: s[2]
    }, {
      xmlns: "http://www.w3.org/2000/svg"
    }],
    r = {};
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return {
    c() {
      e = qt("svg"), i = qt("path"), this.h()
    },
    l(o) {
      e = Qt(o, "svg", {
        width: !0,
        height: !0,
        role: !0,
        "aria-label": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0
      });
      var a = W(e);
      i = Qt(a, "path", {
        "fill-rule": !0,
        "clip-rule": !0,
        d: !0,
        fill: !0
      }), W(i).forEach(C), a.forEach(C), this.h()
    },
    h() {
      X(i, "fill-rule", "evenodd"), X(i, "clip-rule", "evenodd"), X(i, "d", "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"), X(i, "fill", "currentColor"), Kt(e, r)
    },
    m(o, a) {
      O(o, e, a), me(e, i)
    },
    p(o, a) {
      Kt(e, r = se(n, [a & 1 && {
        width: o[0]
      }, a & 1 && {
        height: o[0]
      }, a & 32 && o[5], a & 2 && {
        role: o[1]
      }, a & 8 && {
        "aria-label": o[3]
      }, {
        viewBox: "0 0 15 15"
      }, a & 4 && {
        fill: o[2]
      }, {
        xmlns: "http://www.w3.org/2000/svg"
      }]))
    },
    d(o) {
      o && C(e)
    }
  }
}

function Wg(s) {
  let e, i, n, r, o = [{
      width: s[0]
    }, {
      height: s[0]
    }, s[5], {
      role: s[1]
    }, {
      "aria-label": s[3]
    }, {
      viewBox: "0 0 15 15"
    }, {
      fill: s[2]
    }, {
      xmlns: "http://www.w3.org/2000/svg"
    }],
    a = {};
  for (let c = 0; c < o.length; c += 1) a = P(a, o[c]);
  return {
    c() {
      e = qt("svg"), i = qt("path"), this.h()
    },
    l(c) {
      e = Qt(c, "svg", {
        width: !0,
        height: !0,
        role: !0,
        "aria-label": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0
      });
      var l = W(e);
      i = Qt(l, "path", {
        "fill-rule": !0,
        "clip-rule": !0,
        d: !0,
        fill: !0
      }), W(i).forEach(C), l.forEach(C), this.h()
    },
    h() {
      X(i, "fill-rule", "evenodd"), X(i, "clip-rule", "evenodd"), X(i, "d", "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"), X(i, "fill", "currentColor"), Kt(e, a)
    },
    m(c, l) {
      O(c, e, l), me(e, i), n || (r = [B(e, "click", s[6]), B(e, "keydown", s[7]), B(e, "keyup", s[8]), B(e, "focus", s[9]), B(e, "blur", s[10]), B(e, "mouseenter", s[11]), B(e, "mouseleave", s[12]), B(e, "mouseover", s[13]), B(e, "mouseout", s[14])], n = !0)
    },
    p(c, l) {
      Kt(e, a = se(o, [l & 1 && {
        width: c[0]
      }, l & 1 && {
        height: c[0]
      }, l & 32 && c[5], l & 2 && {
        role: c[1]
      }, l & 8 && {
        "aria-label": c[3]
      }, {
        viewBox: "0 0 15 15"
      }, l & 4 && {
        fill: c[2]
      }, {
        xmlns: "http://www.w3.org/2000/svg"
      }]))
    },
    d(c) {
      c && C(e), n = !1, Ze(r)
    }
  }
}

function jg(s) {
  let e;

  function i(o, a) {
    return o[4] ? Wg : Xg
  }
  let n = i(s),
    r = n(s);
  return {
    c() {
      r.c(), e = K()
    },
    l(o) {
      r.l(o), e = K()
    },
    m(o, a) {
      r.m(o, a), O(o, e, a)
    },
    p(o, [a]) {
      n === (n = i(o)) && r ? r.p(o, a) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)))
    },
    i: Ge,
    o: Ge,
    d(o) {
      o && C(e), r.d(o)
    }
  }
}

function Yg(s, e, i) {
  const n = ["size", "role", "color", "ariaLabel", "withEvents"];
  let r = L(e, n);
  const o = oi("iconCtx") ?? {};
  let {
    size: a = o.size || "24"
  } = e, {
    role: c = o.role || "img"
  } = e, {
    color: l = o.color || "currentColor"
  } = e, {
    ariaLabel: u = "check,"
  } = e, {
    withEvents: f = !1
  } = e;

  function h(E) {
    G.call(this, s, E)
  }

  function d(E) {
    G.call(this, s, E)
  }

  function m(E) {
    G.call(this, s, E)
  }

  function g(E) {
    G.call(this, s, E)
  }

  function p(E) {
    G.call(this, s, E)
  }

  function _(E) {
    G.call(this, s, E)
  }

  function A(E) {
    G.call(this, s, E)
  }

  function w(E) {
    G.call(this, s, E)
  }

  function y(E) {
    G.call(this, s, E)
  }
  return s.$$set = E => {
    e = P(P({}, e), ge(E)), i(5, r = L(e, n)), "size" in E && i(0, a = E.size), "role" in E && i(1, c = E.role), "color" in E && i(2, l = E.color), "ariaLabel" in E && i(3, u = E.ariaLabel), "withEvents" in E && i(4, f = E.withEvents)
  }, [a, c, l, u, f, r, h, d, m, g, p, _, A, w, y]
}
class qg extends fe {
  constructor(e) {
    super(), he(this, e, Yg, jg, ae, {
      size: 0,
      role: 1,
      color: 2,
      ariaLabel: 3,
      withEvents: 4
    })
  }
}

function Qg(s) {
  let e, i, n = [{
      width: s[0]
    }, {
      height: s[0]
    }, s[5], {
      role: s[1]
    }, {
      "aria-label": s[3]
    }, {
      viewBox: "0 0 15 15"
    }, {
      fill: s[2]
    }, {
      xmlns: "http://www.w3.org/2000/svg"
    }],
    r = {};
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return {
    c() {
      e = qt("svg"), i = qt("path"), this.h()
    },
    l(o) {
      e = Qt(o, "svg", {
        width: !0,
        height: !0,
        role: !0,
        "aria-label": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0
      });
      var a = W(e);
      i = Qt(a, "path", {
        "fill-rule": !0,
        "clip-rule": !0,
        d: !0,
        fill: !0
      }), W(i).forEach(C), a.forEach(C), this.h()
    },
    h() {
      X(i, "fill-rule", "evenodd"), X(i, "clip-rule", "evenodd"), X(i, "d", "M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"), X(i, "fill", "currentColor"), Kt(e, r)
    },
    m(o, a) {
      O(o, e, a), me(e, i)
    },
    p(o, a) {
      Kt(e, r = se(n, [a & 1 && {
        width: o[0]
      }, a & 1 && {
        height: o[0]
      }, a & 32 && o[5], a & 2 && {
        role: o[1]
      }, a & 8 && {
        "aria-label": o[3]
      }, {
        viewBox: "0 0 15 15"
      }, a & 4 && {
        fill: o[2]
      }, {
        xmlns: "http://www.w3.org/2000/svg"
      }]))
    },
    d(o) {
      o && C(e)
    }
  }
}

function Kg(s) {
  let e, i, n, r, o = [{
      width: s[0]
    }, {
      height: s[0]
    }, s[5], {
      role: s[1]
    }, {
      "aria-label": s[3]
    }, {
      viewBox: "0 0 15 15"
    }, {
      fill: s[2]
    }, {
      xmlns: "http://www.w3.org/2000/svg"
    }],
    a = {};
  for (let c = 0; c < o.length; c += 1) a = P(a, o[c]);
  return {
    c() {
      e = qt("svg"), i = qt("path"), this.h()
    },
    l(c) {
      e = Qt(c, "svg", {
        width: !0,
        height: !0,
        role: !0,
        "aria-label": !0,
        viewBox: !0,
        fill: !0,
        xmlns: !0
      });
      var l = W(e);
      i = Qt(l, "path", {
        "fill-rule": !0,
        "clip-rule": !0,
        d: !0,
        fill: !0
      }), W(i).forEach(C), l.forEach(C), this.h()
    },
    h() {
      X(i, "fill-rule", "evenodd"), X(i, "clip-rule", "evenodd"), X(i, "d", "M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"), X(i, "fill", "currentColor"), Kt(e, a)
    },
    m(c, l) {
      O(c, e, l), me(e, i), n || (r = [B(e, "click", s[6]), B(e, "keydown", s[7]), B(e, "keyup", s[8]), B(e, "focus", s[9]), B(e, "blur", s[10]), B(e, "mouseenter", s[11]), B(e, "mouseleave", s[12]), B(e, "mouseover", s[13]), B(e, "mouseout", s[14])], n = !0)
    },
    p(c, l) {
      Kt(e, a = se(o, [l & 1 && {
        width: c[0]
      }, l & 1 && {
        height: c[0]
      }, l & 32 && c[5], l & 2 && {
        role: c[1]
      }, l & 8 && {
        "aria-label": c[3]
      }, {
        viewBox: "0 0 15 15"
      }, l & 4 && {
        fill: c[2]
      }, {
        xmlns: "http://www.w3.org/2000/svg"
      }]))
    },
    d(c) {
      c && C(e), n = !1, Ze(r)
    }
  }
}

function Zg(s) {
  let e;

  function i(o, a) {
    return o[4] ? Kg : Qg
  }
  let n = i(s),
    r = n(s);
  return {
    c() {
      r.c(), e = K()
    },
    l(o) {
      r.l(o), e = K()
    },
    m(o, a) {
      r.m(o, a), O(o, e, a)
    },
    p(o, [a]) {
      n === (n = i(o)) && r ? r.p(o, a) : (r.d(1), r = n(o), r && (r.c(), r.m(e.parentNode, e)))
    },
    i: Ge,
    o: Ge,
    d(o) {
      o && C(e), r.d(o)
    }
  }
}

function Jg(s, e, i) {
  const n = ["size", "role", "color", "ariaLabel", "withEvents"];
  let r = L(e, n);
  const o = oi("iconCtx") ?? {};
  let {
    size: a = o.size || "24"
  } = e, {
    role: c = o.role || "img"
  } = e, {
    color: l = o.color || "currentColor"
  } = e, {
    ariaLabel: u = "minus,"
  } = e, {
    withEvents: f = !1
  } = e;

  function h(E) {
    G.call(this, s, E)
  }

  function d(E) {
    G.call(this, s, E)
  }

  function m(E) {
    G.call(this, s, E)
  }

  function g(E) {
    G.call(this, s, E)
  }

  function p(E) {
    G.call(this, s, E)
  }

  function _(E) {
    G.call(this, s, E)
  }

  function A(E) {
    G.call(this, s, E)
  }

  function w(E) {
    G.call(this, s, E)
  }

  function y(E) {
    G.call(this, s, E)
  }
  return s.$$set = E => {
    e = P(P({}, e), ge(E)), i(5, r = L(e, n)), "size" in E && i(0, a = E.size), "role" in E && i(1, c = E.role), "color" in E && i(2, l = E.color), "ariaLabel" in E && i(3, u = E.ariaLabel), "withEvents" in E && i(4, f = E.withEvents)
  }, [a, c, l, u, f, r, h, d, m, g, p, _, A, w, y]
}
class $g extends fe {
  constructor(e) {
    super(), he(this, e, Jg, Zg, ae, {
      size: 0,
      role: 1,
      color: 2,
      ariaLabel: 3,
      withEvents: 4
    })
  }
}

function e0(s) {
  let e, i;
  return e = new qg({
    props: {
      class: ue("h-3.5 w-3.5", !s[5] && "text-transparent")
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, r) {
      const o = {};
      r & 32 && (o.class = ue("h-3.5 w-3.5", !n[5] && "text-transparent")), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function t0(s) {
  let e, i;
  return e = new $g({
    props: {
      class: "h-3.5 w-3.5"
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p: Ge,
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function i0(s) {
  let e, i, n, r;
  const o = [t0, e0],
    a = [];

  function c(l, u) {
    return l[6] ? 0 : 1
  }
  return e = c(s), i = a[e] = o[e](s), {
    c() {
      i.c(), n = K()
    },
    l(l) {
      i.l(l), n = K()
    },
    m(l, u) {
      a[e].m(l, u), O(l, n, u), r = !0
    },
    p(l, u) {
      let f = e;
      e = c(l), e === f ? a[e].p(l, u) : (Te(), x(a[f], 1, 1, () => {
        a[f] = null
      }), xe(), i = a[e], i ? i.p(l, u) : (i = a[e] = o[e](l), i.c()), T(i, 1), i.m(n.parentNode, n))
    },
    i(l) {
      r || (T(i), r = !0)
    },
    o(l) {
      x(i), r = !1
    },
    d(l) {
      l && C(n), a[e].d(l)
    }
  }
}

function s0(s) {
  let e, i;
  return e = new Hu({
    props: {
      class: ue("flex h-4 w-4 items-center justify-center text-current"),
      $$slots: {
        default: [i0, ({
          isChecked: n,
          isIndeterminate: r
        }) => ({
          5: n,
          6: r
        }), ({
          isChecked: n,
          isIndeterminate: r
        }) => (n ? 32 : 0) | (r ? 64 : 0)]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, r) {
      const o = {};
      r & 224 && (o.$$scope = {
        dirty: r,
        ctx: n
      }), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function n0(s) {
  let e, i, n;
  const r = [{
    class: ue("border-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50", s[1])
  }, s[2]];

  function o(c) {
    s[3](c)
  }
  let a = {
    $$slots: {
      default: [s0]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let c = 0; c < r.length; c += 1) a = P(a, r[c]);
  return s[0] !== void 0 && (a.checked = s[0]), e = new zu({
    props: a
  }), ke.push(() => rn(e, "checked", o)), e.$on("click", s[4]), {
    c() {
      be(e.$$.fragment)
    },
    l(c) {
      _e(e.$$.fragment, c)
    },
    m(c, l) {
      ve(e, c, l), n = !0
    },
    p(c, [l]) {
      const u = l & 6 ? se(r, [l & 2 && {
        class: ue("border-primary focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground peer box-content h-4 w-4 shrink-0 rounded-sm border shadow focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50", c[1])
      }, l & 4 && Je(c[2])]) : {};
      l & 128 && (u.$$scope = {
        dirty: l,
        ctx: c
      }), !i && l & 1 && (i = !0, u.checked = c[0], tn(() => i = !1)), e.$set(u)
    },
    i(c) {
      n || (T(e.$$.fragment, c), n = !0)
    },
    o(c) {
      x(e.$$.fragment, c), n = !1
    },
    d(c) {
      Ae(e, c)
    }
  }
}

function r0(s, e, i) {
  const n = ["class", "checked"];
  let r = L(e, n),
    {
      class: o = void 0
    } = e,
    {
      checked: a = !1
    } = e;

  function c(u) {
    a = u, i(0, a)
  }

  function l(u) {
    G.call(this, s, u)
  }
  return s.$$set = u => {
    e = P(P({}, e), ge(u)), i(2, r = L(e, n)), "class" in u && i(1, o = u.class), "checked" in u && i(0, a = u.checked)
  }, [a, o, r, c, l]
}
class o0 extends fe {
  constructor(e) {
    super(), he(this, e, r0, n0, ae, {
      class: 1,
      checked: 0
    })
  }
}

function a0(s) {
  let e;
  const i = s[6].default,
    n = $(i, s, s[7], null);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 128) && ee(n, i, r, r[7], e ? ie(i, r[7], o, null) : te(r[7]), null)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function l0(s) {
  let e, i;
  const n = [{
    transition: s[1]
  }, {
    transitionConfig: s[2]
  }, {
    align: s[3]
  }, {
    sideOffset: s[4]
  }, s[5], {
    class: ue("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", s[0])
  }];
  let r = {
    $$slots: {
      default: [a0]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let o = 0; o < n.length; o += 1) r = P(r, n[o]);
  return e = new Kl({
    props: r
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), i = !0
    },
    p(o, [a]) {
      const c = a & 63 ? se(n, [a & 2 && {
        transition: o[1]
      }, a & 4 && {
        transitionConfig: o[2]
      }, a & 8 && {
        align: o[3]
      }, a & 16 && {
        sideOffset: o[4]
      }, a & 32 && Je(o[5]), a & 1 && {
        class: ue("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none", o[0])
      }]) : {};
      a & 128 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c)
    },
    i(o) {
      i || (T(e.$$.fragment, o), i = !0)
    },
    o(o) {
      x(e.$$.fragment, o), i = !1
    },
    d(o) {
      Ae(e, o)
    }
  }
}

function c0(s, e, i) {
  const n = ["class", "transition", "transitionConfig", "align", "sideOffset"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e,
    {
      transition: l = Qo
    } = e,
    {
      transitionConfig: u = void 0
    } = e,
    {
      align: f = "center"
    } = e,
    {
      sideOffset: h = 4
    } = e;
  return s.$$set = d => {
    e = P(P({}, e), ge(d)), i(5, r = L(e, n)), "class" in d && i(0, c = d.class), "transition" in d && i(1, l = d.transition), "transitionConfig" in d && i(2, u = d.transitionConfig), "align" in d && i(3, f = d.align), "sideOffset" in d && i(4, h = d.sideOffset), "$$scope" in d && i(7, a = d.$$scope)
  }, [c, l, u, f, h, r, o, a]
}
class u0 extends fe {
  constructor(e) {
    super(), he(this, e, c0, l0, ae, {
      class: 0,
      transition: 1,
      transitionConfig: 2,
      align: 3,
      sideOffset: 4
    })
  }
}
const f0 = Zl,
  h0 = Jl;
var wl = {},
  yl = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "circle-question",
    n = 512,
    r = 512,
    o = [62108, "question-circle"],
    a = "f059",
    c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3l58.3 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24l0-13.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1l-58.3 0c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faCircleQuestion = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(yl);
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = yl;
  s.definition = {
    prefix: e.prefix,
    iconName: e.iconName,
    icon: [e.width, e.height, e.aliases, e.unicode, e.svgPathData]
  }, s.faQuestionCircle = s.definition, s.prefix = e.prefix, s.iconName = e.iconName, s.width = e.width, s.height = e.height, s.ligatures = e.aliases, s.unicode = e.unicode, s.svgPathData = e.svgPathData, s.aliases = e.aliases
})(wl);
const d0 = s => ({}),
  No = s => ({});

function Oo(s) {
  let e, i;
  return e = new f0({
    props: {
      $$slots: {
        default: [p0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, r) {
      const o = {};
      r & 1024 && (o.$$scope = {
        dirty: r,
        ctx: n
      }), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function m0(s) {
  let e, i;
  return e = new pi({
    props: {
      icon: wl.faQuestionCircle,
      translateY: .15,
      class: "pl-0.5"
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p: Ge,
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function g0(s) {
  let e;
  const i = s[7].help,
    n = $(i, s, s[10], No);
  return {
    c() {
      n && n.c()
    },
    l(r) {
      n && n.l(r)
    },
    m(r, o) {
      n && n.m(r, o), e = !0
    },
    p(r, o) {
      n && n.p && (!e || o & 1024) && ee(n, i, r, r[10], e ? ie(i, r[10], o, d0) : te(r[10]), No)
    },
    i(r) {
      e || (T(n, r), e = !0)
    },
    o(r) {
      x(n, r), e = !1
    },
    d(r) {
      n && n.d(r)
    }
  }
}

function p0(s) {
  let e, i, n, r;
  return e = new h0({
    props: {
      $$slots: {
        default: [m0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), n = new u0({
    props: {
      $$slots: {
        default: [g0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment), i = Be(), be(n.$$.fragment)
    },
    l(o) {
      _e(e.$$.fragment, o), i = Le(o), _e(n.$$.fragment, o)
    },
    m(o, a) {
      ve(e, o, a), O(o, i, a), ve(n, o, a), r = !0
    },
    p(o, a) {
      const c = {};
      a & 1024 && (c.$$scope = {
        dirty: a,
        ctx: o
      }), e.$set(c);
      const l = {};
      a & 1024 && (l.$$scope = {
        dirty: a,
        ctx: o
      }), n.$set(l)
    },
    i(o) {
      r || (T(e.$$.fragment, o), T(n.$$.fragment, o), r = !0)
    },
    o(o) {
      x(e.$$.fragment, o), x(n.$$.fragment, o), r = !1
    },
    d(o) {
      o && C(i), Ae(e, o), Ae(n, o)
    }
  }
}

function Bo(s) {
  let e, i;
  return {
    c() {
      e = q("p"), i = nt(s[4]), this.h()
    },
    l(n) {
      e = Q(n, "P", {
        class: !0
      });
      var r = W(e);
      i = rt(r, s[4]), r.forEach(C), this.h()
    },
    h() {
      X(e, "class", "text-muted-foreground text-xs font-normal pt-0.5")
    },
    m(n, r) {
      O(n, e, r), me(e, i)
    },
    p(n, r) {
      r & 16 && Ct(i, n[4])
    },
    d(n) {
      n && C(e)
    }
  }
}

function b0(s) {
  let e, i, n, r, o, a = s[6].help && Oo(s),
    c = s[4] && Bo(s);
  return {
    c() {
      e = nt(s[2]), i = Be(), a && a.c(), n = Be(), c && c.c(), r = K()
    },
    l(l) {
      e = rt(l, s[2]), i = Le(l), a && a.l(l), n = Le(l), c && c.l(l), r = K()
    },
    m(l, u) {
      O(l, e, u), O(l, i, u), a && a.m(l, u), O(l, n, u), c && c.m(l, u), O(l, r, u), o = !0
    },
    p(l, u) {
      (!o || u & 4) && Ct(e, l[2]), l[6].help ? a ? (a.p(l, u), u & 64 && T(a, 1)) : (a = Oo(l), a.c(), T(a, 1), a.m(n.parentNode, n)) : a && (Te(), x(a, 1, 1, () => {
        a = null
      }), xe()), l[4] ? c ? c.p(l, u) : (c = Bo(l), c.c(), c.m(r.parentNode, r)) : c && (c.d(1), c = null)
    },
    i(l) {
      o || (T(a), o = !0)
    },
    o(l) {
      x(a), o = !1
    },
    d(l) {
      l && (C(e), C(i), C(n), C(r)), a && a.d(l), c && c.d(l)
    }
  }
}

function _0(s) {
  let e, i, n, r, o, a, c;
  const l = [{
    id: s[1]
  }, {
    title: s[3]
  }, s[5]];

  function u(h) {
    s[8](h)
  }
  let f = {};
  for (let h = 0; h < l.length; h += 1) f = P(f, l[h]);
  return s[0] !== void 0 && (f.checked = s[0]), i = new o0({
    props: f
  }), ke.push(() => rn(i, "checked", u)), i.$on("click", s[9]), o = new ad({
    props: {
      for: s[1],
      title: s[3],
      class: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      $$slots: {
        default: [b0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      e = q("div"), be(i.$$.fragment), r = Be(), be(o.$$.fragment), this.h()
    },
    l(h) {
      e = Q(h, "DIV", {
        class: !0
      });
      var d = W(e);
      _e(i.$$.fragment, d), r = Le(d), _e(o.$$.fragment, d), d.forEach(C), this.h()
    },
    h() {
      X(e, "class", a = ue("items-center flex space-x-2", s[4] && "items-start"))
    },
    m(h, d) {
      O(h, e, d), ve(i, e, null), me(e, r), ve(o, e, null), c = !0
    },
    p(h, [d]) {
      const m = d & 42 ? se(l, [d & 2 && {
        id: h[1]
      }, d & 8 && {
        title: h[3]
      }, d & 32 && Je(h[5])]) : {};
      !n && d & 1 && (n = !0, m.checked = h[0], tn(() => n = !1)), i.$set(m);
      const g = {};
      d & 2 && (g.for = h[1]), d & 8 && (g.title = h[3]), d & 1108 && (g.$$scope = {
        dirty: d,
        ctx: h
      }), o.$set(g), (!c || d & 16 && a !== (a = ue("items-center flex space-x-2", h[4] && "items-start"))) && X(e, "class", a)
    },
    i(h) {
      c || (T(i.$$.fragment, h), T(o.$$.fragment, h), c = !0)
    },
    o(h) {
      x(i.$$.fragment, h), x(o.$$.fragment, h), c = !1
    },
    d(h) {
      h && C(e), Ae(i), Ae(o)
    }
  }
}

function v0(s, e, i) {
  const n = ["id", "checked", "label", "title", "description"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e;
  const c = Dl(o);
  let {
    id: l
  } = e, {
    checked: u
  } = e, {
    label: f
  } = e, {
    title: h = void 0
  } = e, {
    description: d = void 0
  } = e;

  function m(p) {
    u = p, i(0, u)
  }

  function g(p) {
    G.call(this, s, p)
  }
  return s.$$set = p => {
    e = P(P({}, e), ge(p)), i(5, r = L(e, n)), "id" in p && i(1, l = p.id), "checked" in p && i(0, u = p.checked), "label" in p && i(2, f = p.label), "title" in p && i(3, h = p.title), "description" in p && i(4, d = p.description), "$$scope" in p && i(10, a = p.$$scope)
  }, [u, l, f, h, d, r, c, o, m, g, a]
}
class q1 extends fe {
  constructor(e) {
    super(), he(this, e, v0, _0, ae, {
      id: 1,
      checked: 0,
      label: 2,
      title: 3,
      description: 4
    })
  }
}
var A0 = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "xmark",
    n = 384,
    r = 512,
    o = [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"],
    a = "f00d",
    c = "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faXmark = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(A0);

function w0(s) {
  let e, i;
  return e = new Gf({
    props: {
      class: ue("bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0", s[2])
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, r) {
      const o = {};
      r & 4 && (o.class = ue("bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0", n[2])), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function y0(s) {
  let e, i, n;
  const r = [{
    class: ue("focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", s[1])
  }, s[3]];

  function o(c) {
    s[4](c)
  }
  let a = {
    $$slots: {
      default: [w0]
    },
    $$scope: {
      ctx: s
    }
  };
  for (let c = 0; c < r.length; c += 1) a = P(a, r[c]);
  return s[0] !== void 0 && (a.checked = s[0]), e = new zf({
    props: a
  }), ke.push(() => rn(e, "checked", o)), e.$on("click", s[5]), e.$on("keydown", s[6]), {
    c() {
      be(e.$$.fragment)
    },
    l(c) {
      _e(e.$$.fragment, c)
    },
    m(c, l) {
      ve(e, c, l), n = !0
    },
    p(c, [l]) {
      const u = l & 10 ? se(r, [l & 2 && {
        class: ue("focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", c[1])
      }, l & 8 && Je(c[3])]) : {};
      l & 132 && (u.$$scope = {
        dirty: l,
        ctx: c
      }), !i && l & 1 && (i = !0, u.checked = c[0], tn(() => i = !1)), e.$set(u)
    },
    i(c) {
      n || (T(e.$$.fragment, c), n = !0)
    },
    o(c) {
      x(e.$$.fragment, c), n = !1
    },
    d(c) {
      Ae(e, c)
    }
  }
}

function E0(s, e, i) {
  const n = ["class", "checked", "thumbClass"];
  let r = L(e, n),
    {
      class: o = void 0
    } = e,
    {
      checked: a = void 0
    } = e,
    {
      thumbClass: c = void 0
    } = e;

  function l(h) {
    a = h, i(0, a)
  }

  function u(h) {
    G.call(this, s, h)
  }

  function f(h) {
    G.call(this, s, h)
  }
  return s.$$set = h => {
    e = P(P({}, e), ge(h)), i(3, r = L(e, n)), "class" in h && i(1, o = h.class), "checked" in h && i(0, a = h.checked), "thumbClass" in h && i(2, c = h.thumbClass)
  }, [a, o, c, r, l, u, f]
}
class Q1 extends fe {
  constructor(e) {
    super(), he(this, e, E0, y0, ae, {
      class: 1,
      checked: 0,
      thumbClass: 2
    })
  }
}
var k0 = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "face-meh",
    n = 512,
    r = 512,
    o = [128528, "meh"],
    a = "f11a",
    c = "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 336l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faFaceMeh = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(k0);
var T0 = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "magnifying-glass",
    n = 512,
    r = 512,
    o = [128269, "search"],
    a = "f002",
    c = "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faMagnifyingGlass = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(T0);
const K1 = async s => {
  try {
    let e = fl("/api/search");
    return s && (e += `?key=${s}`), await (await fetch(e)).json()
  } catch (e) {
    console.error(e)
  }
  return []
};
var El = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "eye-slash",
    n = 640,
    r = 512,
    o = [],
    a = "f070",
    c = "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faEyeSlash = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(El);
var kl = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "images",
    n = 576,
    r = 512,
    o = [],
    a = "f302",
    c = "M160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320l-144 0-48 0-80 0c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM192 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 344c0 75.1 60.9 136 136 136l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-48.6 0-88-39.4-88-88l0-224z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faImages = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(kl);
var Tl = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "user",
    n = 448,
    r = 512,
    o = [128100, 62144],
    a = "f007",
    c = "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faUser = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(Tl);
var xl = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "users",
    n = 640,
    r = 512,
    o = [],
    a = "f0c0",
    c = "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faUsers = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(xl);

function Rn(s) {
  let e, i, n;
  const r = s[5].default,
    o = $(r, s, s[4], null);
  let a = [{
      href: s[1]
    }, {
      class: i = ue(Lo({
        variant: s[2],
        className: s[0]
      }))
    }, s[3]],
    c = {};
  for (let l = 0; l < a.length; l += 1) c = P(c, a[l]);
  return {
    c() {
      e = q(s[1] ? "a" : "span"), o && o.c(), this.h()
    },
    l(l) {
      e = Q(l, ((s[1] ? "a" : "span") || "null").toUpperCase(), {
        href: !0,
        class: !0
      });
      var u = W(e);
      o && o.l(u), u.forEach(C), this.h()
    },
    h() {
      Ts(s[1] ? "a" : "span")(e, c)
    },
    m(l, u) {
      O(l, e, u), o && o.m(e, null), n = !0
    },
    p(l, u) {
      o && o.p && (!n || u & 16) && ee(o, r, l, l[4], n ? ie(r, l[4], u, null) : te(l[4]), null), Ts(l[1] ? "a" : "span")(e, c = se(a, [(!n || u & 2) && {
        href: l[1]
      }, (!n || u & 5 && i !== (i = ue(Lo({
        variant: l[2],
        className: l[0]
      })))) && {
        class: i
      }, u & 8 && l[3]]))
    },
    i(l) {
      n || (T(o, l), n = !0)
    },
    o(l) {
      x(o, l), n = !1
    },
    d(l) {
      l && C(e), o && o.d(l)
    }
  }
}

function x0(s) {
  let e = s[1] ? "a" : "span",
    i, n, r = (s[1] ? "a" : "span") && Rn(s);
  return {
    c() {
      r && r.c(), i = K()
    },
    l(o) {
      r && r.l(o), i = K()
    },
    m(o, a) {
      r && r.m(o, a), O(o, i, a), n = !0
    },
    p(o, [a]) {
      o[1], e ? ae(e, o[1] ? "a" : "span") ? (r.d(1), r = Rn(o), e = o[1] ? "a" : "span", r.c(), r.m(i.parentNode, i)) : r.p(o, a) : (r = Rn(o), e = o[1] ? "a" : "span", r.c(), r.m(i.parentNode, i))
    },
    i(o) {
      n || (T(r, o), n = !0)
    },
    o(o) {
      x(r, o), n = !1
    },
    d(o) {
      o && C(i), r && r.d(o)
    }
  }
}

function R0(s, e, i) {
  const n = ["class", "href", "variant"];
  let r = L(e, n),
    {
      $$slots: o = {},
      $$scope: a
    } = e,
    {
      class: c = void 0
    } = e,
    {
      href: l = void 0
    } = e,
    {
      variant: u = "default"
    } = e;
  return s.$$set = f => {
    e = P(P({}, e), ge(f)), i(3, r = L(e, n)), "class" in f && i(0, c = f.class), "href" in f && i(1, l = f.href), "variant" in f && i(2, u = f.variant), "$$scope" in f && i(4, a = f.$$scope)
  }, [c, l, u, r, a, o]
}
class hn extends fe {
  constructor(e) {
    super(), he(this, e, R0, x0, ae, {
      class: 0,
      href: 1,
      variant: 2
    })
  }
}
const Lo = Bl({
  base: "focus:ring-ring inline-flex select-none items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80 border-transparent shadow",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80 border-transparent shadow",
      outline: "text-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

function Go(s, e, i) {
  const n = s.slice();
  return n[1] = e[i], n
}

function Vo(s) {
  let e, i;
  return e = new hn({
    props: {
      class: "bg-red-700 hover:bg-red-800 text-foreground/80 px-1.5",
      $$slots: {
        default: [C0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function C0(s) {
  let e;
  return {
    c() {
      e = nt("NSFW")
    },
    l(i) {
      e = rt(i, "NSFW")
    },
    m(i, n) {
      O(i, e, n)
    },
    d(i) {
      i && C(e)
    }
  }
}

function Ho(s) {
  let e, i;
  return e = new hn({
    props: {
      class: "px-1",
      $$slots: {
        default: [S0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function S0(s) {
  let e;
  return {
    c() {
      e = nt("Rotation")
    },
    l(i) {
      e = rt(i, "Rotation")
    },
    m(i, n) {
      O(i, e, n)
    },
    d(i) {
      i && C(e)
    }
  }
}

function Xo(s) {
  let e, i;
  return e = new hn({
    props: {
      class: "px-1",
      $$slots: {
        default: [P0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function P0(s) {
  let e;
  return {
    c() {
      e = nt("Videos")
    },
    l(i) {
      e = rt(i, "Videos")
    },
    m(i, n) {
      O(i, e, n)
    },
    d(i) {
      i && C(e)
    }
  }
}

function M0(s) {
  let e = s[1] + "",
    i;
  return {
    c() {
      i = nt(e)
    },
    l(n) {
      i = rt(n, e)
    },
    m(n, r) {
      O(n, i, r)
    },
    p(n, r) {
      r & 1 && e !== (e = n[1] + "") && Ct(i, e)
    },
    d(n) {
      n && C(i)
    }
  }
}

function Wo(s) {
  let e, i;
  return e = new hn({
    props: {
      class: "bg-slate-700 hover:bg-slate-800 text-foreground/80 px-1.5",
      $$slots: {
        default: [M0]
      },
      $$scope: {
        ctx: s
      }
    }
  }), {
    c() {
      be(e.$$.fragment)
    },
    l(n) {
      _e(e.$$.fragment, n)
    },
    m(n, r) {
      ve(e, n, r), i = !0
    },
    p(n, r) {
      const o = {};
      r & 17 && (o.$$scope = {
        dirty: r,
        ctx: n
      }), e.$set(o)
    },
    i(n) {
      i || (T(e.$$.fragment, n), i = !0)
    },
    o(n) {
      x(e.$$.fragment, n), i = !1
    },
    d(n) {
      Ae(e, n)
    }
  }
}

function D0(s) {
  let e, i, n, r, o, a = s[0].nsfw && Vo(s),
    c = s[0].rotation && Ho(s),
    l = s[0].hasVideo && Xo(s),
    u = Pi(s[0].tags.slice(0, 5)),
    f = [];
  for (let d = 0; d < u.length; d += 1) f[d] = Wo(Go(s, u, d));
  const h = d => x(f[d], 1, 1, () => {
    f[d] = null
  });
  return {
    c() {
      e = q("div"), a && a.c(), i = Be(), c && c.c(), n = Be(), l && l.c(), r = Be();
      for (let d = 0; d < f.length; d += 1) f[d].c();
      this.h()
    },
    l(d) {
      e = Q(d, "DIV", {
        class: !0
      });
      var m = W(e);
      a && a.l(m), i = Le(m), c && c.l(m), n = Le(m), l && l.l(m), r = Le(m);
      for (let g = 0; g < f.length; g += 1) f[g].l(m);
      m.forEach(C), this.h()
    },
    h() {
      X(e, "class", "flex gap-1 flex-wrap items-center justify-center")
    },
    m(d, m) {
      O(d, e, m), a && a.m(e, null), me(e, i), c && c.m(e, null), me(e, n), l && l.m(e, null), me(e, r);
      for (let g = 0; g < f.length; g += 1) f[g] && f[g].m(e, null);
      o = !0
    },
    p(d, [m]) {
      if (d[0].nsfw ? a ? m & 1 && T(a, 1) : (a = Vo(d), a.c(), T(a, 1), a.m(e, i)) : a && (Te(), x(a, 1, 1, () => {
          a = null
        }), xe()), d[0].rotation ? c ? m & 1 && T(c, 1) : (c = Ho(d), c.c(), T(c, 1), c.m(e, n)) : c && (Te(), x(c, 1, 1, () => {
          c = null
        }), xe()), d[0].hasVideo ? l ? m & 1 && T(l, 1) : (l = Xo(d), l.c(), T(l, 1), l.m(e, r)) : l && (Te(), x(l, 1, 1, () => {
          l = null
        }), xe()), m & 1) {
        u = Pi(d[0].tags.slice(0, 5));
        let g;
        for (g = 0; g < u.length; g += 1) {
          const p = Go(d, u, g);
          f[g] ? (f[g].p(p, m), T(f[g], 1)) : (f[g] = Wo(p), f[g].c(), T(f[g], 1), f[g].m(e, null))
        }
        for (Te(), g = u.length; g < f.length; g += 1) h(g);
        xe()
      }
    },
    i(d) {
      if (!o) {
        T(a), T(c), T(l);
        for (let m = 0; m < u.length; m += 1) T(f[m]);
        o = !0
      }
    },
    o(d) {
      x(a), x(c), x(l), f = f.filter(Boolean);
      for (let m = 0; m < f.length; m += 1) x(f[m]);
      o = !1
    },
    d(d) {
      d && C(e), a && a.d(), c && c.d(), l && l.d(), $n(f, d)
    }
  }
}

function F0(s, e, i) {
  let {
    room: n
  } = e;
  return s.$$set = r => {
    "room" in r && i(0, n = r.room)
  }, [n]
}
class U0 extends fe {
  constructor(e) {
    super(), he(this, e, F0, D0, ae, {
      room: 0
    })
  }
}

function z0(s) {
  let e;
  return {
    c() {
      e = q("div"), this.h()
    },
    l(i) {
      e = Q(i, "DIV", {
        class: !0
      }), W(e).forEach(C), this.h()
    },
    h() {
      X(e, "class", "size-44")
    },
    m(i, n) {
      O(i, e, n)
    },
    p: Ge,
    d(i) {
      i && C(e)
    }
  }
}

function I0(s) {
  let e, i, n;
  return {
    c() {
      e = q("img"), this.h()
    },
    l(r) {
      e = Q(r, "IMG", {
        class: !0,
        loading: !0,
        src: !0,
        alt: !0
      }), this.h()
    },
    h() {
      X(e, "class", i = Rs(ue("w-full min-h-44 max-h-64 object-cover", {
        "group-hover:object-contain backdrop-blur-lg": !s[0].hidePreview
      })) + " svelte-1x8fpb"), X(e, "loading", "lazy"), Ri(e.src, n = is(s[0].thumbnail)) || X(e, "src", n), X(e, "alt", "")
    },
    m(r, o) {
      O(r, e, o)
    },
    p(r, o) {
      o & 1 && i !== (i = Rs(ue("w-full min-h-44 max-h-64 object-cover", {
        "group-hover:object-contain backdrop-blur-lg": !r[0].hidePreview
      })) + " svelte-1x8fpb") && X(e, "class", i), o & 1 && !Ri(e.src, n = is(r[0].thumbnail)) && X(e, "src", n)
    },
    d(r) {
      r && C(e)
    }
  }
}

function jo(s) {
  let e, i, n, r, o = "Preview Disabled",
    a, c;
  return i = new pi({
    props: {
      icon: El.faEyeSlash,
      size: "lg"
    }
  }), {
    c() {
      e = q("div"), be(i.$$.fragment), n = Be(), r = q("p"), r.textContent = o, this.h()
    },
    l(l) {
      e = Q(l, "DIV", {
        class: !0
      });
      var u = W(e);
      _e(i.$$.fragment, u), n = Le(u), r = Q(u, "P", {
        class: !0,
        "data-svelte-h": !0
      }), Fl(r) !== "svelte-ca9gel" && (r.textContent = o), u.forEach(C), this.h()
    },
    h() {
      X(r, "class", "text-sm font-semibold text-center"), X(e, "class", a = Rs(ue("absolute inset-0 flex flex-col items-center gap-y-1 justify-center text-foreground/40", {
        "backdrop-blur-lg": s[0].thumbnail
      })) + " svelte-1x8fpb")
    },
    m(l, u) {
      O(l, e, u), ve(i, e, null), me(e, n), me(e, r), c = !0
    },
    p(l, u) {
      (!c || u & 1 && a !== (a = Rs(ue("absolute inset-0 flex flex-col items-center gap-y-1 justify-center text-foreground/40", {
        "backdrop-blur-lg": l[0].thumbnail
      })) + " svelte-1x8fpb")) && X(e, "class", a)
    },
    i(l) {
      c || (T(i.$$.fragment, l), c = !0)
    },
    o(l) {
      x(i.$$.fragment, l), c = !1
    },
    d(l) {
      l && C(e), Ae(i)
    }
  }
}

function Yo(s) {
  let e, i, n, r, o = s[0].hostName + "",
    a, c;
  return i = new pi({
    props: {
      icon: Tl.faUser,
      size: "xs"
    }
  }), {
    c() {
      e = q("span"), be(i.$$.fragment), n = Be(), r = q("span"), a = nt(o), this.h()
    },
    l(l) {
      e = Q(l, "SPAN", {
        title: !0,
        class: !0
      });
      var u = W(e);
      _e(i.$$.fragment, u), n = Le(u), r = Q(u, "SPAN", {
        class: !0
      });
      var f = W(r);
      a = rt(f, o), f.forEach(C), u.forEach(C), this.h()
    },
    h() {
      X(r, "class", "font-semibold"), X(e, "title", "Host"), X(e, "class", "flex items-center justify-center space-x-1 text-xs text-blue-400/90")
    },
    m(l, u) {
      O(l, e, u), ve(i, e, null), me(e, n), me(e, r), me(r, a), c = !0
    },
    p(l, u) {
      (!c || u & 1) && o !== (o = l[0].hostName + "") && Ct(a, o)
    },
    i(l) {
      c || (T(i.$$.fragment, l), c = !0)
    },
    o(l) {
      x(i.$$.fragment, l), c = !1
    },
    d(l) {
      l && C(e), Ae(i)
    }
  }
}

function N0(s) {
  let e, i, n, r, o, a, c = s[0].name + "",
    l, u, f, h, d, m, g, p, _, A, w, y = s[0].players + "",
    E, z, I, R, k, U, S = s[0].pieces + "",
    v, F, M, V, H, le, pe = s[0].sets + "",
    ne, oe, Y, de, Ce = (s[0].completion * 100).toFixed() + "",
    He, $e, Ie, ze, We, Ne;

  function dt(ce, we) {
    return ce[0].thumbnail ? I0 : z0
  }
  let at = dt(s),
    je = at(s),
    Fe = (s[0].hidePreview || !s[0].thumbnail) && jo(s),
    Se = s[0].hostName && Yo(s);
  return h = new U0({
    props: {
      room: s[0]
    }
  }), _ = new pi({
    props: {
      icon: xl.faUsers,
      size: "sm"
    }
  }), R = new pi({
    props: {
      icon: tc.faPuzzlePiece,
      size: "sm"
    }
  }), V = new pi({
    props: {
      icon: kl.faImages,
      size: "sm"
    }
  }), {
    c() {
      e = q("a"), je.c(), i = Be(), Fe && Fe.c(), n = Be(), r = q("div"), o = q("div"), a = q("span"), l = nt(c), u = Be(), Se && Se.c(), f = Be(), be(h.$$.fragment), d = Be(), m = q("div"), g = q("div"), p = q("span"), be(_.$$.fragment), A = Be(), w = q("span"), E = nt(y), z = Be(), I = q("span"), be(R.$$.fragment), k = Be(), U = q("span"), v = nt(S), F = Be(), M = q("span"), be(V.$$.fragment), H = Be(), le = q("span"), ne = nt(pe), oe = Be(), Y = q("span"), de = q("span"), He = nt(Ce), $e = nt("%"), this.h()
    },
    l(ce) {
      e = Q(ce, "A", {
        href: !0,
        target: !0,
        class: !0,
        style: !0
      });
      var we = W(e);
      je.l(we), i = Le(we), Fe && Fe.l(we), n = Le(we), r = Q(we, "DIV", {
        class: !0
      });
      var et = W(r);
      o = Q(et, "DIV", {
        class: !0
      });
      var xt = W(o);
      a = Q(xt, "SPAN", {
        class: !0
      });
      var Zt = W(a);
      l = rt(Zt, c), Zt.forEach(C), u = Le(xt), Se && Se.l(xt), xt.forEach(C), f = Le(et), _e(h.$$.fragment, et), et.forEach(C), d = Le(we), m = Q(we, "DIV", {
        class: !0
      });
      var Mt = W(m);
      g = Q(Mt, "DIV", {
        class: !0
      });
      var it = W(g);
      p = Q(it, "SPAN", {
        class: !0
      });
      var Qe = W(p);
      _e(_.$$.fragment, Qe), A = Le(Qe), w = Q(Qe, "SPAN", {});
      var cs = W(w);
      E = rt(cs, y), cs.forEach(C), Qe.forEach(C), z = Le(it), I = Q(it, "SPAN", {
        class: !0
      });
      var ui = W(I);
      _e(R.$$.fragment, ui), k = Le(ui), U = Q(ui, "SPAN", {});
      var us = W(U);
      v = rt(us, S), us.forEach(C), ui.forEach(C), F = Le(it), M = Q(it, "SPAN", {
        class: !0
      });
      var fi = W(M);
      _e(V.$$.fragment, fi), H = Le(fi), le = Q(fi, "SPAN", {});
      var fs = W(le);
      ne = rt(fs, pe), fs.forEach(C), fi.forEach(C), oe = Le(it), Y = Q(it, "SPAN", {
        class: !0
      });
      var hs = W(Y);
      de = Q(hs, "SPAN", {});
      var D = W(de);
      He = rt(D, Ce), $e = rt(D, "%"), D.forEach(C), hs.forEach(C), it.forEach(C), Mt.forEach(C), we.forEach(C), this.h()
    },
    h() {
      X(a, "class", "text-xs text-center font-semibold svelte-1x8fpb"), dr(a, "gay", s[0].gay), X(o, "class", "flex flex-wrap items-center justify-center gap-x-2"), X(r, "class", "absolute bg-muted/70 top-0 flex flex-col gap-y-1 p-1 w-full transition-colors group-hover:bg-muted/30"), X(p, "class", "flex items-center justify-center space-x-1"), X(I, "class", "flex items-center justify-center space-x-1"), X(M, "class", "flex items-center justify-center space-x-1"), X(Y, "class", "hidden sm:flex items-center justify-center space-x-1"), X(g, "class", "grid grid-flow-col gap-x-2 transition-colors text-foreground/70 group-hover:text-foreground font-semibold text-xs"), X(m, "class", "absolute bg-muted/50 bottom-0 p-1 w-full transition-colors group-hover:bg-muted/30"), X(e, "href", Ie = "/" + s[0].id), X(e, "target", ze = s[1] ? "_blank" : void 0), X(e, "class", "relative bg-background border border-zinc-700 group transition-transform hover:scale-105"), X(e, "style", We = s[0].thumbnail ? `background-image: url(${is(s[0].thumbnail)});` : void 0)
    },
    m(ce, we) {
      O(ce, e, we), je.m(e, null), me(e, i), Fe && Fe.m(e, null), me(e, n), me(e, r), me(r, o), me(o, a), me(a, l), me(o, u), Se && Se.m(o, null), me(r, f), ve(h, r, null), me(e, d), me(e, m), me(m, g), me(g, p), ve(_, p, null), me(p, A), me(p, w), me(w, E), me(g, z), me(g, I), ve(R, I, null), me(I, k), me(I, U), me(U, v), me(g, F), me(g, M), ve(V, M, null), me(M, H), me(M, le), me(le, ne), me(g, oe), me(g, Y), me(Y, de), me(de, He), me(de, $e), Ne = !0
    },
    p(ce, [we]) {
      at === (at = dt(ce)) && je ? je.p(ce, we) : (je.d(1), je = at(ce), je && (je.c(), je.m(e, i))), ce[0].hidePreview || !ce[0].thumbnail ? Fe ? (Fe.p(ce, we), we & 1 && T(Fe, 1)) : (Fe = jo(ce), Fe.c(), T(Fe, 1), Fe.m(e, n)) : Fe && (Te(), x(Fe, 1, 1, () => {
        Fe = null
      }), xe()), (!Ne || we & 1) && c !== (c = ce[0].name + "") && Ct(l, c), (!Ne || we & 1) && dr(a, "gay", ce[0].gay), ce[0].hostName ? Se ? (Se.p(ce, we), we & 1 && T(Se, 1)) : (Se = Yo(ce), Se.c(), T(Se, 1), Se.m(o, null)) : Se && (Te(), x(Se, 1, 1, () => {
        Se = null
      }), xe());
      const et = {};
      we & 1 && (et.room = ce[0]), h.$set(et), (!Ne || we & 1) && y !== (y = ce[0].players + "") && Ct(E, y), (!Ne || we & 1) && S !== (S = ce[0].pieces + "") && Ct(v, S), (!Ne || we & 1) && pe !== (pe = ce[0].sets + "") && Ct(ne, pe), (!Ne || we & 1) && Ce !== (Ce = (ce[0].completion * 100).toFixed() + "") && Ct(He, Ce), (!Ne || we & 1 && Ie !== (Ie = "/" + ce[0].id)) && X(e, "href", Ie), (!Ne || we & 2 && ze !== (ze = ce[1] ? "_blank" : void 0)) && X(e, "target", ze), (!Ne || we & 1 && We !== (We = ce[0].thumbnail ? `background-image: url(${is(ce[0].thumbnail)});` : void 0)) && X(e, "style", We)
    },
    i(ce) {
      Ne || (T(Fe), T(Se), T(h.$$.fragment, ce), T(_.$$.fragment, ce), T(R.$$.fragment, ce), T(V.$$.fragment, ce), Ne = !0)
    },
    o(ce) {
      x(Fe), x(Se), x(h.$$.fragment, ce), x(_.$$.fragment, ce), x(R.$$.fragment, ce), x(V.$$.fragment, ce), Ne = !1
    },
    d(ce) {
      ce && C(e), je.d(), Fe && Fe.d(), Se && Se.d(), Ae(h), Ae(_), Ae(R), Ae(V)
    }
  }
}

function O0(s, e, i) {
  let {
    room: n
  } = e, {
    openInNewTab: r = !1
  } = e;
  return s.$$set = o => {
    "room" in o && i(0, n = o.room), "openInNewTab" in o && i(1, r = o.openInNewTab)
  }, [n, r]
}
class Z1 extends fe {
  constructor(e) {
    super(), he(this, e, O0, N0, ae, {
      room: 0,
      openInNewTab: 1
    })
  }
}
var B0 = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "square-plus",
    n = 448,
    r = 512,
    o = [61846, "plus-square"],
    a = "f0fe",
    c = "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faSquarePlus = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(B0);
var L0 = {};
(function(s) {
  Object.defineProperty(s, "__esModule", {
    value: !0
  });
  var e = "fas",
    i = "table-list",
    n = 512,
    r = 512,
    o = ["th-list"],
    a = "f00b",
    c = "M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 0l0 64 64 0 0-64L64 96zm384 0L192 96l0 64 256 0 0-64zM64 224l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64zM64 352l0 64 64 0 0-64-64 0zm384 0l-256 0 0 64 256 0 0-64z";
  s.definition = {
    prefix: e,
    iconName: i,
    icon: [n, r, o, a, c]
  }, s.faTableList = s.definition, s.prefix = e, s.iconName = i, s.width = n, s.height = r, s.ligatures = o, s.unicode = a, s.svgPathData = c, s.aliases = o
})(L0);
export {
  L1 as $, x1 as A, k1 as B, q1 as C, T0 as D, y1 as E, E1 as F, Z1 as G, g1 as H, S1 as I, L0 as J, B0 as K, ad as L, j1 as M, rc as N, $0 as O, u0 as P, ic as Q, f0 as R, W1 as S, h0 as T, lc as U, To as V, Ue as W, Hg as X, D1 as Y, da as Z, Vi as _, e1 as a, Tg as a0, ti as a1, B1 as a2, O1 as a3, Nn as a4, N1 as a5, F1 as a6, Fn as a7, kg as a8, bl as a9, cr as aA, Mg as aB, M1 as aC, _l as aD, Mo as aE, Li as aF, Es as aG, zs as aH, V1 as aI, H1 as aJ, X1 as aK, Eg as aa, Rg as ab, G1 as ac, P1 as ad, U1 as ae, z1 as af, Us as ag, ci as ah, lr as ai, pl as aj, gl as ak, Hn as al, Al as am, I1 as an, yl as ao, Ee as ap, vl as aq, jt as ar, ls as as, Dg as at, Mm as au, yg as av, Bm as aw, xn as ax, Nm as ay, Qi as az, A0 as b, _1 as c, C1 as d, Ye as e, xh as f, fl as g, p1 as h, T1 as i, Y1 as j, b1 as k, Fg as l, Ug as m, w1 as n, R1 as o, v1 as p, is as q, El as r, A1 as s, xl as t, kl as u, U0 as v, Tl as w, Q1 as x, K1 as y, k0 as z
};