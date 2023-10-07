"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8148],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => v });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
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
   function a(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
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
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var c = r.createContext({}),
    d = function (e) {
     var t = r.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    s = function (e) {
     var t = d(e.components);
     return r.createElement(c.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    b = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      c = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(n),
      u = o,
      v = p["".concat(c, ".").concat(u)] || p[u] || b[u] || i;
     return n ? r.createElement(v, a(a({ ref: t }, s), {}, { components: n })) : r.createElement(v, a({ ref: t }, s));
    });
   function v(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = u;
     var l = {};
     for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : o), (a[1] = l);
     for (var d = 2; d < i; d++) a[d] = n[d];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  93534: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => a, default: () => b, frontMatter: () => i, metadata: () => l, toc: () => d });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Voorbeelden - Overzicht", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Voorbeelden Overzicht", keywords: ["index", "voorbeelden"] },
    a = "Voorbeelden",
    l = { unversionedId: "voorbeelden/README", id: "voorbeelden/README", title: "Voorbeelden - Overzicht", description: "Voorbeelden Overzicht", source: "@site/docs/voorbeelden/README.md", sourceDirName: "voorbeelden", slug: "/voorbeelden/", permalink: "/voorbeelden/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Voorbeelden - Overzicht", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Overzicht", sidebar_position: 1, pagination_label: "Overzicht", description: "Voorbeelden Overzicht", keywords: ["index", "voorbeelden"] }, sidebar: "voorbeelden", previous: { title: "Voorbeelden", permalink: "/voorbeelden" }, next: { title: "Patronen", permalink: "/voorbeelden/patronen/" } },
    c = {},
    d = [],
    s = { toc: d },
    p = "wrapper";
   function b(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(p, (0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "voorbeelden" }, "Voorbeelden"), (0, o.kt)("p", null, "Hier tonen we voorbeelden van veelvoorkomende pagina's en klantreizen, gemaakt met richtlijnen en componenten uit het NL Design System. Deze voorbeelden zijn door diverse organisaties gemaakt op basis van documentatie, patronen en componenten van het NL Design System."), (0, o.kt)("p", null, "Op dit moment werken we hard om voorbeelden te delen. Hou deze pagina in de gaten!"));
   }
   b.isMDXComponent = !0;
  },
 },
]);
