"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5085],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => d });
   var r = t(67294);
   function i(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function o(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? o(Object(t), !0).forEach(function (n) {
         i(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : o(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function u(e, n) {
    if (null == e) return {};
    var t,
     r,
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       i = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (t = o[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   var l = r.createContext({}),
    c = function (e) {
     var n = r.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    p = function (e) {
     var n = c(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    s = "mdxType",
    m = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    b = r.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      o = e.originalType,
      l = e.parentName,
      p = u(e, ["components", "mdxType", "originalType", "parentName"]),
      s = c(t),
      b = i,
      d = s["".concat(l, ".").concat(b)] || s[b] || m[b] || o;
     return t ? r.createElement(d, a(a({ ref: n }, p), {}, { components: t })) : r.createElement(d, a({ ref: n }, p));
    });
   function d(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var o = t.length,
      a = new Array(o);
     a[0] = b;
     var u = {};
     for (var l in n) hasOwnProperty.call(n, l) && (u[l] = n[l]);
     (u.originalType = e), (u[s] = "string" == typeof e ? e : i), (a[1] = u);
     for (var c = 2; c < o; c++) a[c] = t[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, t);
   }
   b.displayName = "MDXCreateElement";
  },
  62268: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => m, frontMatter: () => o, metadata: () => u, toc: () => c });
   var r = t(87462),
    i = (t(67294), t(3905));
   const o = { title: "Number input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Number input", pagination_label: "Number input", description: "UX richtlijnen voor Number input component", slug: "/number-input", tags: ["Help Wanted"] },
    a = void 0,
    u = { unversionedId: "componenten/build/number-input", id: "componenten/build/number-input", title: "Number input", description: "UX richtlijnen voor Number input component", source: "@site/docs/componenten/build/number-input.mdx", sourceDirName: "componenten/build", slug: "/number-input", permalink: "/number-input", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/number-input.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Number input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Number input", pagination_label: "Number input", description: "UX richtlijnen voor Number input component", slug: "/number-input", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Notification banner", permalink: "/notification-banner" }, next: { title: "Ordered list", permalink: "/ordered-list" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    p = { toc: c },
    s = "wrapper";
   function m(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(s, (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "number-input" }, "Number input"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Number input component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/125" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   m.isMDXComponent = !0;
  },
 },
]);
