"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7536],
 {
  87536: (e, t, r) => {
   r.d(t, { cI: () => we });
   var s = r(67294),
    a = (e) => "checkbox" === e.type,
    i = (e) => e instanceof Date,
    n = (e) => null == e;
   const o = (e) => "object" == typeof e;
   var u = (e) => !n(e) && !Array.isArray(e) && o(e) && !i(e),
    l = (e) => (u(e) && e.target ? (a(e.target) ? e.target.checked : e.target.value) : e),
    c = (e, t) => e.has(((e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e)(t)),
    d = (e) => {
     const t = e.constructor && e.constructor.prototype;
     return u(t) && t.hasOwnProperty("isPrototypeOf");
    },
    f = "undefined" != typeof window && void 0 !== window.HTMLElement && "undefined" != typeof document;
   function y(e) {
    let t;
    const r = Array.isArray(e);
    if (e instanceof Date) t = new Date(e);
    else if (e instanceof Set) t = new Set(e);
    else {
     if ((f && (e instanceof Blob || e instanceof FileList)) || (!r && !u(e))) return e;
     if (((t = r ? [] : {}), r || d(e))) for (const r in e) e.hasOwnProperty(r) && (t[r] = y(e[r]));
     else t = e;
    }
    return t;
   }
   var m = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
    h = (e) => void 0 === e,
    v = (e, t, r) => {
     if (!t || !u(e)) return r;
     const s = m(t.split(/[,[\].]+?/)).reduce((e, t) => (n(e) ? e : e[t]), e);
     return h(s) || s === e ? (h(e[t]) ? r : e[t]) : s;
    };
   const g = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
    p = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" },
    b = "max",
    _ = "min",
    V = "maxLength",
    A = "minLength",
    w = "pattern",
    S = "required",
    F = "validate";
   s.createContext(null);
   var x = (e, t, r, s = !0) => {
     const a = { defaultValues: t._defaultValues };
     for (const i in e)
      Object.defineProperty(a, i, {
       get: () => {
        const a = i;
        return t._proxyFormState[a] !== p.all && (t._proxyFormState[a] = !s || p.all), r && (r[a] = !0), e[a];
       },
      });
     return a;
    },
    k = (e) => u(e) && !Object.keys(e).length,
    D = (e, t, r, s) => {
     r(e);
     const { name: a, ...i } = e;
     return k(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((e) => t[e] === (!s || p.all));
    },
    O = (e) => (Array.isArray(e) ? e : [e]);
   function C(e) {
    const t = s.useRef(e);
    (t.current = e),
     s.useEffect(() => {
      const r = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
       r && r.unsubscribe();
      };
     }, [e.disabled]);
   }
   var E = (e) => "string" == typeof e,
    T = (e, t, r, s, a) => (E(e) ? (s && t.watch.add(e), v(r, e, a)) : Array.isArray(e) ? e.map((e) => (s && t.watch.add(e), v(r, e))) : (s && (t.watchAll = !0), r));
   var L = (e) => /^\w*$/.test(e),
    U = (e) => m(e.replace(/["|']|\]/g, "").split(/\.|\[/));
   function B(e, t, r) {
    let s = -1;
    const a = L(t) ? [t] : U(t),
     i = a.length,
     n = i - 1;
    for (; ++s < i; ) {
     const t = a[s];
     let i = r;
     if (s !== n) {
      const r = e[t];
      i = u(r) || Array.isArray(r) ? r : isNaN(+a[s + 1]) ? {} : [];
     }
     (e[t] = i), (e = e[t]);
    }
    return e;
   }
   var j = (e, t, r, s, a) => (t ? { ...r[e], types: { ...(r[e] && r[e].types ? r[e].types : {}), [s]: a || !0 } } : {});
   const N = (e, t, r) => {
    for (const s of r || Object.keys(e)) {
     const r = v(e, s);
     if (r) {
      const { _f: e, ...s } = r;
      if (e && t(e.name)) {
       if (e.ref.focus) {
        e.ref.focus();
        break;
       }
       if (e.refs && e.refs[0].focus) {
        e.refs[0].focus();
        break;
       }
      } else u(s) && N(s, t);
     }
    }
   };
   var M = (e) => ({ isOnSubmit: !e || e === p.onSubmit, isOnBlur: e === p.onBlur, isOnChange: e === p.onChange, isOnAll: e === p.all, isOnTouch: e === p.onTouched }),
    q = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))),
    P = (e, t, r) => {
     const s = m(v(e, r));
     return B(s, "root", t[r]), B(e, r, s), e;
    },
    R = (e) => "boolean" == typeof e,
    H = (e) => "file" === e.type,
    I = (e) => "function" == typeof e,
    $ = (e) => {
     if (!f) return !1;
     const t = e ? e.ownerDocument : 0;
     return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
    },
    W = (e) => E(e),
    G = (e) => "radio" === e.type,
    z = (e) => e instanceof RegExp;
   const J = { value: !1, isValid: !1 },
    K = { value: !0, isValid: !0 };
   var Q = (e) => {
    if (Array.isArray(e)) {
     if (e.length > 1) {
      const t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
      return { value: t, isValid: !!t.length };
     }
     return e[0].checked && !e[0].disabled ? (e[0].attributes && !h(e[0].attributes.value) ? (h(e[0].value) || "" === e[0].value ? K : { value: e[0].value, isValid: !0 }) : K) : J;
    }
    return J;
   };
   const X = { isValid: !1, value: null };
   var Y = (e) => (Array.isArray(e) ? e.reduce((e, t) => (t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e), X) : X);
   function Z(e, t, r = "validate") {
    if (W(e) || (Array.isArray(e) && e.every(W)) || (R(e) && !e)) return { type: r, message: W(e) ? e : "", ref: t };
   }
   var ee = (e) => (u(e) && !z(e) ? e : { value: e, message: "" }),
    te = async (e, t, r, s, i) => {
     const { ref: o, refs: l, required: c, maxLength: d, minLength: f, min: y, max: m, pattern: g, validate: p, name: x, valueAsNumber: D, mount: O, disabled: C } = e._f,
      T = v(t, x);
     if (!O || C) return {};
     const L = l ? l[0] : o,
      U = (e) => {
       s && L.reportValidity && (L.setCustomValidity(R(e) ? "" : e || ""), L.reportValidity());
      },
      B = {},
      N = G(o),
      M = a(o),
      q = N || M,
      P = ((D || H(o)) && h(o.value) && h(T)) || ($(o) && "" === o.value) || "" === T || (Array.isArray(T) && !T.length),
      J = j.bind(null, x, r, B),
      K = (e, t, r, s = V, a = A) => {
       const i = e ? t : r;
       B[x] = { type: e ? s : a, message: i, ref: o, ...J(e ? s : a, i) };
      };
     if (i ? !Array.isArray(T) || !T.length : c && ((!q && (P || n(T))) || (R(T) && !T) || (M && !Q(l).isValid) || (N && !Y(l).isValid))) {
      const { value: e, message: t } = W(c) ? { value: !!c, message: c } : ee(c);
      if (e && ((B[x] = { type: S, message: t, ref: L, ...J(S, t) }), !r)) return U(t), B;
     }
     if (!(P || (n(y) && n(m)))) {
      let e, t;
      const s = ee(m),
       a = ee(y);
      if (n(T) || isNaN(T)) {
       const r = o.valueAsDate || new Date(T),
        i = (e) => new Date(new Date().toDateString() + " " + e),
        n = "time" == o.type,
        u = "week" == o.type;
       E(s.value) && T && (e = n ? i(T) > i(s.value) : u ? T > s.value : r > new Date(s.value)), E(a.value) && T && (t = n ? i(T) < i(a.value) : u ? T < a.value : r < new Date(a.value));
      } else {
       const r = o.valueAsNumber || (T ? +T : T);
       n(s.value) || (e = r > s.value), n(a.value) || (t = r < a.value);
      }
      if ((e || t) && (K(!!e, s.message, a.message, b, _), !r)) return U(B[x].message), B;
     }
     if ((d || f) && !P && (E(T) || (i && Array.isArray(T)))) {
      const e = ee(d),
       t = ee(f),
       s = !n(e.value) && T.length > +e.value,
       a = !n(t.value) && T.length < +t.value;
      if ((s || a) && (K(s, e.message, t.message), !r)) return U(B[x].message), B;
     }
     if (g && !P && E(T)) {
      const { value: e, message: t } = ee(g);
      if (z(e) && !T.match(e) && ((B[x] = { type: w, message: t, ref: o, ...J(w, t) }), !r)) return U(t), B;
     }
     if (p)
      if (I(p)) {
       const e = Z(await p(T, t), L);
       if (e && ((B[x] = { ...e, ...J(F, e.message) }), !r)) return U(e.message), B;
      } else if (u(p)) {
       let e = {};
       for (const s in p) {
        if (!k(e) && !r) break;
        const a = Z(await p[s](T, t), L, s);
        a && ((e = { ...a, ...J(s, a.message) }), U(a.message), r && (B[x] = e));
       }
       if (!k(e) && ((B[x] = { ref: L, ...e }), !r)) return B;
      }
     return U(!0), B;
    };
   function re(e, t) {
    const r = Array.isArray(t) ? t : L(t) ? [t] : U(t),
     s =
      1 === r.length
       ? e
       : (function (e, t) {
          const r = t.slice(0, -1).length;
          let s = 0;
          for (; s < r; ) e = h(e) ? s++ : e[t[s++]];
          return e;
         })(e, r),
     a = r.length - 1,
     i = r[a];
    return (
     s && delete s[i],
     0 !== a &&
      ((u(s) && k(s)) ||
       (Array.isArray(s) &&
        (function (e) {
         for (const t in e) if (e.hasOwnProperty(t) && !h(e[t])) return !1;
         return !0;
        })(s))) &&
      re(e, r.slice(0, -1)),
     e
    );
   }
   function se() {
    let e = [];
    return {
     get observers() {
      return e;
     },
     next: (t) => {
      for (const r of e) r.next && r.next(t);
     },
     subscribe: (t) => (
      e.push(t),
      {
       unsubscribe: () => {
        e = e.filter((e) => e !== t);
       },
      }
     ),
     unsubscribe: () => {
      e = [];
     },
    };
   }
   var ae = (e) => n(e) || !o(e);
   function ie(e, t) {
    if (ae(e) || ae(t)) return e === t;
    if (i(e) && i(t)) return e.getTime() === t.getTime();
    const r = Object.keys(e),
     s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (const a of r) {
     const r = e[a];
     if (!s.includes(a)) return !1;
     if ("ref" !== a) {
      const e = t[a];
      if ((i(r) && i(e)) || (u(r) && u(e)) || (Array.isArray(r) && Array.isArray(e)) ? !ie(r, e) : r !== e) return !1;
     }
    }
    return !0;
   }
   var ne = (e) => "select-multiple" === e.type,
    oe = (e) => G(e) || a(e),
    ue = (e) => $(e) && e.isConnected,
    le = (e) => {
     for (const t in e) if (I(e[t])) return !0;
     return !1;
    };
   function ce(e, t = {}) {
    const r = Array.isArray(e);
    if (u(e) || r) for (const s in e) Array.isArray(e[s]) || (u(e[s]) && !le(e[s])) ? ((t[s] = Array.isArray(e[s]) ? [] : {}), ce(e[s], t[s])) : n(e[s]) || (t[s] = !0);
    return t;
   }
   function de(e, t, r) {
    const s = Array.isArray(e);
    if (u(e) || s) for (const a in e) Array.isArray(e[a]) || (u(e[a]) && !le(e[a])) ? (h(t) || ae(r[a]) ? (r[a] = Array.isArray(e[a]) ? ce(e[a], []) : { ...ce(e[a]) }) : de(e[a], n(t) ? {} : t[a], r[a])) : (r[a] = !ie(e[a], t[a]));
    return r;
   }
   var fe = (e, t) => de(e, t, ce(t)),
    ye = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: s }) => (h(e) ? e : t ? ("" === e ? NaN : e ? +e : e) : r && E(e) ? new Date(e) : s ? s(e) : e);
   function me(e) {
    const t = e.ref;
    if (!(e.refs ? e.refs.every((e) => e.disabled) : t.disabled)) return H(t) ? t.files : G(t) ? Y(e.refs).value : ne(t) ? [...t.selectedOptions].map(({ value: e }) => e) : a(t) ? Q(e.refs).value : ye(h(t.value) ? e.ref.value : t.value, e);
   }
   var he = (e, t, r, s) => {
     const a = {};
     for (const i of e) {
      const e = v(t, i);
      e && B(a, i, e._f);
     }
     return { criteriaMode: r, names: [...e], fields: a, shouldUseNativeValidation: s };
    },
    ve = (e) => (h(e) ? e : z(e) ? e.source : u(e) ? (z(e.value) ? e.value.source : e.value) : e),
    ge = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
   function pe(e, t, r) {
    const s = v(e, r);
    if (s || L(r)) return { error: s, name: r };
    const a = r.split(".");
    for (; a.length; ) {
     const s = a.join("."),
      i = v(t, s),
      n = v(e, s);
     if (i && !Array.isArray(i) && r !== s) return { name: r };
     if (n && n.type) return { name: s, error: n };
     a.pop();
    }
    return { name: r };
   }
   var be = (e, t, r, s, a) => !a.isOnAll && (!r && a.isOnTouch ? !(t || e) : (r ? s.isOnBlur : a.isOnBlur) ? !e : !(r ? s.isOnChange : a.isOnChange) || e),
    _e = (e, t) => !m(v(e, t)).length && re(e, t);
   const Ve = { mode: p.onSubmit, reValidateMode: p.onChange, shouldFocusError: !0 };
   function Ae(e = {}, t) {
    let r,
     s = { ...Ve, ...e },
     o = { submitCount: 0, isDirty: !1, isLoading: I(s.defaultValues), isValidating: !1, isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, touchedFields: {}, dirtyFields: {}, errors: {} },
     d = {},
     b = ((u(s.defaultValues) || u(s.values)) && y(s.defaultValues || s.values)) || {},
     _ = s.shouldUnregister ? {} : y(b),
     V = { action: !1, mount: !1, watch: !1 },
     A = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
     w = 0;
    const S = { isDirty: !1, dirtyFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
     F = { values: se(), array: se(), state: se() },
     x = e.resetOptions && e.resetOptions.keepDirtyValues,
     D = M(s.mode),
     C = M(s.reValidateMode),
     L = s.criteriaMode === p.all,
     U = async (e) => {
      if (S.isValid || e) {
       const e = s.resolver ? k((await J()).errors) : await K(d, !0);
       e !== o.isValid && F.state.next({ isValid: e });
      }
     },
     j = (e) => S.isValidating && F.state.next({ isValidating: e }),
     W = (e, t, r, s) => {
      const a = v(d, e);
      if (a) {
       const i = v(_, e, h(r) ? v(b, e) : r);
       h(i) || (s && s.defaultChecked) || t ? B(_, e, t ? i : me(a._f)) : Y(e, i), V.mount && U();
      }
     },
     G = (e, t, r, s, a) => {
      let i = !1,
       n = !1;
      const u = { name: e };
      if (!r || s) {
       S.isDirty && ((n = o.isDirty), (o.isDirty = u.isDirty = Q()), (i = n !== u.isDirty));
       const r = ie(v(b, e), t);
       (n = v(o.dirtyFields, e)), r ? re(o.dirtyFields, e) : B(o.dirtyFields, e, !0), (u.dirtyFields = o.dirtyFields), (i = i || (S.dirtyFields && n !== !r));
      }
      if (r) {
       const t = v(o.touchedFields, e);
       t || (B(o.touchedFields, e, r), (u.touchedFields = o.touchedFields), (i = i || (S.touchedFields && t !== r)));
      }
      return i && a && F.state.next(u), i ? u : {};
     },
     z = (t, s, a, i) => {
      const n = v(o.errors, t),
       u = S.isValid && R(s) && o.isValid !== s;
      var l;
      if (
       (e.delayError && a
        ? ((l = () =>
           ((e, t) => {
            B(o.errors, e, t), F.state.next({ errors: o.errors });
           })(t, a)),
          (r = (e) => {
           clearTimeout(w), (w = setTimeout(l, e));
          }),
          r(e.delayError))
        : (clearTimeout(w), (r = null), a ? B(o.errors, t, a) : re(o.errors, t)),
       (a ? !ie(n, a) : n) || !k(i) || u)
      ) {
       const e = { ...i, ...(u && R(s) ? { isValid: s } : {}), errors: o.errors, name: t };
       (o = { ...o, ...e }), F.state.next(e);
      }
      j(!1);
     },
     J = async (e) => s.resolver(_, s.context, he(e || A.mount, d, s.criteriaMode, s.shouldUseNativeValidation)),
     K = async (e, t, r = { valid: !0 }) => {
      for (const a in e) {
       const i = e[a];
       if (i) {
        const { _f: e, ...a } = i;
        if (e) {
         const a = A.array.has(e.name),
          n = await te(i, _, L, s.shouldUseNativeValidation && !t, a);
         if (n[e.name] && ((r.valid = !1), t)) break;
         !t && (v(n, e.name) ? (a ? P(o.errors, n, e.name) : B(o.errors, e.name, n[e.name])) : re(o.errors, e.name));
        }
        a && (await K(a, t, r));
       }
      }
      return r.valid;
     },
     Q = (e, t) => (e && t && B(_, e, t), !ie(de(), b)),
     X = (e, t, r) => T(e, A, { ...(V.mount ? _ : h(t) ? b : E(e) ? { [e]: t } : t) }, r, t),
     Y = (e, t, r = {}) => {
      const s = v(d, e);
      let i = t;
      if (s) {
       const r = s._f;
       r && (!r.disabled && B(_, e, ye(t, r)), (i = $(r.ref) && n(t) ? "" : t), ne(r.ref) ? [...r.ref.options].forEach((e) => (e.selected = i.includes(e.value))) : r.refs ? (a(r.ref) ? (r.refs.length > 1 ? r.refs.forEach((e) => (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(i) ? !!i.find((t) => t === e.value) : i === e.value)) : r.refs[0] && (r.refs[0].checked = !!i)) : r.refs.forEach((e) => (e.checked = e.value === i))) : H(r.ref) ? (r.ref.value = "") : ((r.ref.value = i), r.ref.type || F.values.next({ name: e, values: { ..._ } })));
      }
      (r.shouldDirty || r.shouldTouch) && G(e, i, r.shouldTouch, r.shouldDirty, !0), r.shouldValidate && ce(e);
     },
     Z = (e, t, r) => {
      for (const s in t) {
       const a = t[s],
        n = `${e}.${s}`,
        o = v(d, n);
       (!A.array.has(e) && ae(a) && (!o || o._f)) || i(a) ? Y(n, a, r) : Z(n, a, r);
      }
     },
     ee = (e, r, s = {}) => {
      const a = v(d, e),
       i = A.array.has(e),
       u = y(r);
      B(_, e, u), i ? (F.array.next({ name: e, values: { ..._ } }), (S.isDirty || S.dirtyFields) && s.shouldDirty && F.state.next({ name: e, dirtyFields: fe(b, _), isDirty: Q(e, u) })) : !a || a._f || n(u) ? Y(e, u, s) : Z(e, u, s), q(e, A) && F.state.next({ ...o }), F.values.next({ name: e, values: { ..._ } }), !V.mount && t();
     },
     le = async (e) => {
      const t = e.target;
      let a = t.name,
       i = !0;
      const n = v(d, a);
      if (n) {
       let u, c;
       const f = t.type ? me(n._f) : l(e),
        y = e.type === g.BLUR || e.type === g.FOCUS_OUT,
        m = (!ge(n._f) && !s.resolver && !v(o.errors, a) && !n._f.deps) || be(y, v(o.touchedFields, a), o.isSubmitted, C, D),
        h = q(a, A, y);
       B(_, a, f), y ? (n._f.onBlur && n._f.onBlur(e), r && r(0)) : n._f.onChange && n._f.onChange(e);
       const p = G(a, f, y, !1),
        b = !k(p) || h;
       if ((!y && F.values.next({ name: a, type: e.type, values: { ..._ } }), m)) return S.isValid && U(), b && F.state.next({ name: a, ...(h ? {} : p) });
       if ((!y && h && F.state.next({ ...o }), j(!0), s.resolver)) {
        const { errors: e } = await J([a]),
         t = pe(o.errors, d, a),
         r = pe(e, d, t.name || a);
        (u = r.error), (a = r.name), (c = k(e));
       } else (u = (await te(n, _, L, s.shouldUseNativeValidation))[a]), (i = isNaN(f) || f === v(_, a, f)), i && (u ? (c = !1) : S.isValid && (c = await K(d, !0)));
       i && (n._f.deps && ce(n._f.deps), z(a, c, u, p));
      }
     },
     ce = async (e, t = {}) => {
      let r, a;
      const i = O(e);
      if ((j(!0), s.resolver)) {
       const t = await (async (e) => {
        const { errors: t } = await J();
        if (e)
         for (const r of e) {
          const e = v(t, r);
          e ? B(o.errors, r, e) : re(o.errors, r);
         }
        else o.errors = t;
        return t;
       })(h(e) ? e : i);
       (r = k(t)), (a = e ? !i.some((e) => v(t, e)) : r);
      } else
       e
        ? ((a = (
           await Promise.all(
            i.map(async (e) => {
             const t = v(d, e);
             return await K(t && t._f ? { [e]: t } : t);
            })
           )
          ).every(Boolean)),
          (a || o.isValid) && U())
        : (a = r = await K(d));
      return F.state.next({ ...(!E(e) || (S.isValid && r !== o.isValid) ? {} : { name: e }), ...(s.resolver || !e ? { isValid: r } : {}), errors: o.errors, isValidating: !1 }), t.shouldFocus && !a && N(d, (e) => e && v(o.errors, e), e ? i : A.mount), a;
     },
     de = (e) => {
      const t = { ...b, ...(V.mount ? _ : {}) };
      return h(e) ? t : E(e) ? v(t, e) : e.map((e) => v(t, e));
     },
     Ae = (e, t) => ({ invalid: !!v((t || o).errors, e), isDirty: !!v((t || o).dirtyFields, e), isTouched: !!v((t || o).touchedFields, e), error: v((t || o).errors, e) }),
     we = (e, t, r) => {
      const s = (v(d, e, { _f: {} })._f || {}).ref;
      B(o.errors, e, { ...t, ref: s }), F.state.next({ name: e, errors: o.errors, isValid: !1 }), r && r.shouldFocus && s && s.focus && s.focus();
     },
     Se = (e, t = {}) => {
      for (const r of e ? O(e) : A.mount) A.mount.delete(r), A.array.delete(r), t.keepValue || (re(d, r), re(_, r)), !t.keepError && re(o.errors, r), !t.keepDirty && re(o.dirtyFields, r), !t.keepTouched && re(o.touchedFields, r), !s.shouldUnregister && !t.keepDefaultValue && re(b, r);
      F.values.next({ values: { ..._ } }), F.state.next({ ...o, ...(t.keepDirty ? { isDirty: Q() } : {}) }), !t.keepIsValid && U();
     },
     Fe = (e, t = {}) => {
      let r = v(d, e);
      const a = R(t.disabled);
      return (
       B(d, e, { ...(r || {}), _f: { ...(r && r._f ? r._f : { ref: { name: e } }), name: e, mount: !0, ...t } }),
       A.mount.add(e),
       r ? a && B(_, e, t.disabled ? void 0 : v(_, e, me(r._f))) : W(e, !0, t.value),
       {
        ...(a ? { disabled: t.disabled } : {}),
        ...(s.progressive ? { required: !!t.required, min: ve(t.min), max: ve(t.max), minLength: ve(t.minLength), maxLength: ve(t.maxLength), pattern: ve(t.pattern) } : {}),
        name: e,
        onChange: le,
        onBlur: le,
        ref: (a) => {
         if (a) {
          Fe(e, t), (r = v(d, e));
          const s = (h(a.value) && a.querySelectorAll && a.querySelectorAll("input,select,textarea")[0]) || a,
           i = oe(s),
           n = r._f.refs || [];
          if (i ? n.find((e) => e === s) : s === r._f.ref) return;
          B(d, e, { _f: { ...r._f, ...(i ? { refs: [...n.filter(ue), s, ...(Array.isArray(v(b, e)) ? [{}] : [])], ref: { type: s.type, name: e } } : { ref: s }) } }), W(e, !1, void 0, s);
         } else (r = v(d, e, {})), r._f && (r._f.mount = !1), (s.shouldUnregister || t.shouldUnregister) && (!c(A.array, e) || !V.action) && A.unMount.add(e);
        },
       }
      );
     },
     xe = () => s.shouldFocusError && N(d, (e) => e && v(o.errors, e), A.mount),
     ke = (e, t) => async (r) => {
      r && (r.preventDefault && r.preventDefault(), r.persist && r.persist());
      let a = y(_);
      if ((F.state.next({ isSubmitting: !0 }), s.resolver)) {
       const { errors: e, values: t } = await J();
       (o.errors = e), (a = t);
      } else await K(d);
      re(o.errors, "root"), k(o.errors) ? (F.state.next({ errors: {} }), await e(a, r)) : (t && (await t({ ...o.errors }, r)), xe(), setTimeout(xe)), F.state.next({ isSubmitted: !0, isSubmitting: !1, isSubmitSuccessful: k(o.errors), submitCount: o.submitCount + 1, errors: o.errors });
     },
     De = (r, s = {}) => {
      const a = r || b,
       i = y(a),
       n = r && !k(r) ? i : b;
      if ((s.keepDefaultValues || (b = a), !s.keepValues)) {
       if (s.keepDirtyValues || x) for (const e of A.mount) v(o.dirtyFields, e) ? B(n, e, v(_, e)) : ee(e, v(n, e));
       else {
        if (f && h(r))
         for (const e of A.mount) {
          const t = v(d, e);
          if (t && t._f) {
           const e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
           if ($(e)) {
            const t = e.closest("form");
            if (t) {
             t.reset();
             break;
            }
           }
          }
         }
        d = {};
       }
       (_ = e.shouldUnregister ? (s.keepDefaultValues ? y(b) : {}) : y(n)), F.array.next({ values: { ...n } }), F.values.next({ values: { ...n } });
      }
      (A = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set(), watchAll: !1, focus: "" }), !V.mount && t(), (V.mount = !S.isValid || !!s.keepIsValid), (V.watch = !!e.shouldUnregister), F.state.next({ submitCount: s.keepSubmitCount ? o.submitCount : 0, isDirty: s.keepDirty ? o.isDirty : !(!s.keepDefaultValues || ie(r, b)), isSubmitted: !!s.keepIsSubmitted && o.isSubmitted, dirtyFields: s.keepDirtyValues ? o.dirtyFields : s.keepDefaultValues && r ? fe(b, r) : {}, touchedFields: s.keepTouched ? o.touchedFields : {}, errors: s.keepErrors ? o.errors : {}, isSubmitting: !1, isSubmitSuccessful: !1 });
     },
     Oe = (e, t) => De(I(e) ? e(_) : e, t);
    return {
     control: {
      register: Fe,
      unregister: Se,
      getFieldState: Ae,
      handleSubmit: ke,
      setError: we,
      _executeSchema: J,
      _getWatch: X,
      _getDirty: Q,
      _updateValid: U,
      _removeUnmounted: () => {
       for (const e of A.unMount) {
        const t = v(d, e);
        t && (t._f.refs ? t._f.refs.every((e) => !ue(e)) : !ue(t._f.ref)) && Se(e);
       }
       A.unMount = new Set();
      },
      _updateFieldArray: (e, t = [], r, s, a = !0, i = !0) => {
       if (s && r) {
        if (((V.action = !0), i && Array.isArray(v(d, e)))) {
         const t = r(v(d, e), s.argA, s.argB);
         a && B(d, e, t);
        }
        if (i && Array.isArray(v(o.errors, e))) {
         const t = r(v(o.errors, e), s.argA, s.argB);
         a && B(o.errors, e, t), _e(o.errors, e);
        }
        if (S.touchedFields && i && Array.isArray(v(o.touchedFields, e))) {
         const t = r(v(o.touchedFields, e), s.argA, s.argB);
         a && B(o.touchedFields, e, t);
        }
        S.dirtyFields && (o.dirtyFields = fe(b, _)), F.state.next({ name: e, isDirty: Q(e, t), dirtyFields: o.dirtyFields, errors: o.errors, isValid: o.isValid });
       } else B(_, e, t);
      },
      _getFieldArray: (t) => m(v(V.mount ? _ : b, t, e.shouldUnregister ? v(b, t, []) : [])),
      _reset: De,
      _resetDefaultValues: () =>
       I(s.defaultValues) &&
       s.defaultValues().then((e) => {
        Oe(e, s.resetOptions), F.state.next({ isLoading: !1 });
       }),
      _updateFormState: (e) => {
       o = { ...o, ...e };
      },
      _subjects: F,
      _proxyFormState: S,
      get _fields() {
       return d;
      },
      get _formValues() {
       return _;
      },
      get _state() {
       return V;
      },
      set _state(e) {
       V = e;
      },
      get _defaultValues() {
       return b;
      },
      get _names() {
       return A;
      },
      set _names(e) {
       A = e;
      },
      get _formState() {
       return o;
      },
      set _formState(e) {
       o = e;
      },
      get _options() {
       return s;
      },
      set _options(e) {
       s = { ...s, ...e };
      },
     },
     trigger: ce,
     register: Fe,
     handleSubmit: ke,
     watch: (e, t) => (I(e) ? F.values.subscribe({ next: (r) => e(X(void 0, t), r) }) : X(e, t, !0)),
     setValue: ee,
     getValues: de,
     reset: Oe,
     resetField: (e, t = {}) => {
      v(d, e) && (h(t.defaultValue) ? ee(e, v(b, e)) : (ee(e, t.defaultValue), B(b, e, t.defaultValue)), t.keepTouched || re(o.touchedFields, e), t.keepDirty || (re(o.dirtyFields, e), (o.isDirty = t.defaultValue ? Q(e, v(b, e)) : Q())), t.keepError || (re(o.errors, e), S.isValid && U()), F.state.next({ ...o }));
     },
     clearErrors: (e) => {
      e && O(e).forEach((e) => re(o.errors, e)), F.state.next({ errors: e ? o.errors : {} });
     },
     unregister: Se,
     setError: we,
     setFocus: (e, t = {}) => {
      const r = v(d, e),
       s = r && r._f;
      if (s) {
       const e = s.refs ? s.refs[0] : s.ref;
       e.focus && (e.focus(), t.shouldSelect && e.select());
      }
     },
     getFieldState: Ae,
    };
   }
   function we(e = {}) {
    const t = s.useRef(),
     [r, a] = s.useState({ isDirty: !1, isValidating: !1, isLoading: I(e.defaultValues), isSubmitted: !1, isSubmitting: !1, isSubmitSuccessful: !1, isValid: !1, submitCount: 0, dirtyFields: {}, touchedFields: {}, errors: {}, defaultValues: I(e.defaultValues) ? void 0 : e.defaultValues });
    t.current || (t.current = { ...Ae(e, () => a((e) => ({ ...e }))), formState: r });
    const i = t.current.control;
    return (
     (i._options = e),
     C({
      subject: i._subjects.state,
      next: (e) => {
       D(e, i._proxyFormState, i._updateFormState, !0) && a({ ...i._formState });
      },
     }),
     s.useEffect(() => {
      e.values && !ie(e.values, i._defaultValues) ? i._reset(e.values, i._options.resetOptions) : i._resetDefaultValues();
     }, [e.values, i]),
     s.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)), i._state.watch && ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
     }),
     (t.current.formState = x(r, i)),
     t.current
    );
   }
  },
 },
]);
