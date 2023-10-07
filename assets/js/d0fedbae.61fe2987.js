"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6919],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => f });
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
   var p = r.createContext({}),
    s = function (e) {
     var t = r.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    c = function (e) {
     var t = s(e.components);
     return r.createElement(p.Provider, { value: t }, e.children);
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
      p = e.parentName,
      c = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = s(n),
      b = o,
      f = d["".concat(p, ".").concat(b)] || d[b] || u[b] || a;
     return n ? r.createElement(f, i(i({ ref: t }, c), {}, { components: n })) : r.createElement(f, i({ ref: t }, c));
    });
   function f(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var a = n.length,
      i = new Array(a);
     i[0] = b;
     var l = {};
     for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : o), (i[1] = l);
     for (var s = 2; s < a; s++) i[s] = n[s];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   b.displayName = "MDXCreateElement";
  },
  74912: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => i, default: () => u, frontMatter: () => a, metadata: () => l, toc: () => s });
   var r = n(87462),
    o = (n(67294), n(3905));
   const a = { title: "Zoek patroon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zoeken", sidebar_position: 4, pagination_label: "Zoeken", description: "Zoek patroon", keywords: ["patronen", "design system", "zoeken"] },
    i = "Zoeken",
    l = { unversionedId: "voorbeelden/patronen/zoeken", id: "voorbeelden/patronen/zoeken", title: "Zoek patroon", description: "Zoek patroon", source: "@site/docs/voorbeelden/patronen/zoeken.md", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/zoeken", permalink: "/voorbeelden/patronen/zoeken", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/zoeken.md", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Zoek patroon", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Zoeken", sidebar_position: 4, pagination_label: "Zoeken", description: "Zoek patroon", keywords: ["patronen", "design system", "zoeken"] }, sidebar: "voorbeelden", previous: { title: "Estafettemodel", permalink: "/voorbeelden/patronen/estafettemodel" }, next: { title: "Laden", permalink: "/voorbeelden/patronen/laden" } },
    p = {},
    s = [],
    c = { toc: s },
    d = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(d, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "zoeken" }, "Zoeken"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
