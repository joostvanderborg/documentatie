"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5557],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => f });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var c = r.createContext({}),
    p = function (e) {
     var t = r.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    s = function (e) {
     var t = p(e.components);
     return r.createElement(c.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    b = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      a = e.originalType,
      c = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = p(n),
      b = o,
      f = d["".concat(c, ".").concat(b)] || d[b] || u[b] || a;
     return n ? r.createElement(f, i(i({ ref: t }, s), {}, { components: n })) : r.createElement(f, i({ ref: t }, s));
    });
   function f(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var a = n.length,
      i = new Array(a);
     i[0] = b;
     var l = {};
     for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : o), (i[1] = l);
     for (var p = 2; p < a; p++) i[p] = n[p];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   b.displayName = "MDXCreateElement";
  },
  55322: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => i, default: () => u, frontMatter: () => a, metadata: () => l, toc: () => p });
   var r = n(87462),
    o = (n(67294), n(3905));
   const a = { title: "Patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Patronen overzicht", sidebar_position: 1, pagination_label: "Patronen", description: "Patronen overzicht", keywords: ["index", "patronen"] },
    i = "Patronen",
    l = { unversionedId: "voorbeelden/patronen/README", id: "voorbeelden/patronen/README", title: "Patronen", description: "Patronen overzicht", source: "@site/docs/voorbeelden/patronen/README.mdx", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/", permalink: "/voorbeelden/patronen/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/README.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Patronen overzicht", sidebar_position: 1, pagination_label: "Patronen", description: "Patronen overzicht", keywords: ["index", "patronen"] }, sidebar: "voorbeelden", previous: { title: "Overzicht", permalink: "/voorbeelden/" }, next: { title: "Estafettemodel", permalink: "/voorbeelden/patronen/estafettemodel" } },
    c = {},
    p = [],
    s = { toc: p },
    d = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(d, (0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "patronen" }, "Patronen"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
