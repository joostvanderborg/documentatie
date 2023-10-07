"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7275],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => u, kt: () => f });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function l(e, t) {
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
      ? l(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function o(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       l = Object.keys(e);
      for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var c = r.createContext({}),
    s = function (e) {
     var t = r.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    u = function (e) {
     var t = s(e.components);
     return r.createElement(c.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    m = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      l = e.originalType,
      c = e.parentName,
      u = o(e, ["components", "mdxType", "originalType", "parentName"]),
      p = s(n),
      m = i,
      f = p["".concat(c, ".").concat(m)] || p[m] || d[m] || l;
     return n ? r.createElement(f, a(a({ ref: t }, u), {}, { components: n })) : r.createElement(f, a({ ref: t }, u));
    });
   function f(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var l = n.length,
      a = new Array(l);
     a[0] = m;
     var o = {};
     for (var c in t) hasOwnProperty.call(t, c) && (o[c] = t[c]);
     (o.originalType = e), (o[p] = "string" == typeof e ? e : i), (a[1] = o);
     for (var s = 2; s < l; s++) a[s] = n[s];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  18713: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => a, default: () => d, frontMatter: () => l, metadata: () => o, toc: () => s });
   var r = n(87462),
    i = (n(67294), n(3905));
   const l = { title: "Richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Richtlijnen", pagination_label: "Richtlijnen", description: "NL Design System richtlijnen", keywords: ["wat", "design system", "documentatie"] },
    a = "Richtlijnen",
    o = { unversionedId: "richtlijnen/README", id: "richtlijnen/README", title: "Richtlijnen NL Design System", description: "NL Design System richtlijnen", source: "@site/docs/richtlijnen/README.md", sourceDirName: "richtlijnen", slug: "/richtlijnen/", permalink: "/richtlijnen/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/README.md", tags: [], version: "current", frontMatter: { title: "Richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Richtlijnen", pagination_label: "Richtlijnen", description: "NL Design System richtlijnen", keywords: ["wat", "design system", "documentatie"] } },
    c = {},
    s = [{ value: "Hier vind je onder andere:", id: "hier-vind-je-onder-andere", level: 2 }],
    u = { toc: s },
    p = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(p, (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "richtlijnen" }, "Richtlijnen"), (0, i.kt)("p", null, "In het NL Design System verzamelen we documentatie vanuit de community. Dit kan gebruikt worden om een project te starten of een bestaand product te optimaliseren."), (0, i.kt)("h2", { id: "hier-vind-je-onder-andere" }, "Hier vind je onder andere:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "stijl/kleuren" }, "Richtlijnen voor stijl")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "tekst-en-taalgebruik" }, "Richtlijnen voor taalgebruik")), (0, i.kt)("li", { parentName: "ul" }, "Richtlijnen voor toegankelijkheid en inclusie"), (0, i.kt)("li", { parentName: "ul" }, "Onderzoeksresultaten van geteste ontwerpen")), (0, i.kt)("p", null, "Deze documentatie wordt regelmatig bijgewerkt."));
   }
   d.isMDXComponent = !0;
  },
 },
]);
