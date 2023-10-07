"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4787],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => h });
   var r = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function c(e, t) {
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
      ? c(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : c(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     r,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       o = {},
       c = Object.keys(e);
      for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var c = Object.getOwnPropertySymbols(e);
     for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var l = r.createContext({}),
    s = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    p = function (e) {
     var t = s(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    m = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      c = e.originalType,
      l = e.parentName,
      p = a(e, ["components", "mdxType", "originalType", "parentName"]),
      u = s(n),
      m = o,
      h = u["".concat(l, ".").concat(m)] || u[m] || d[m] || c;
     return n ? r.createElement(h, i(i({ ref: t }, p), {}, { components: n })) : r.createElement(h, i({ ref: t }, p));
    });
   function h(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var c = n.length,
      i = new Array(c);
     i[0] = m;
     var a = {};
     for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
     (a.originalType = e), (a[u] = "string" == typeof e ? e : o), (i[1] = a);
     for (var s = 2; s < c; s++) i[s] = n[s];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  57075: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => i, default: () => d, frontMatter: () => c, metadata: () => a, toc: () => s });
   var r = n(87462),
    o = (n(67294), n(3905));
   const c = { title: "Rich text content", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Rich text content", pagination_label: "Rich text content", description: "UX richtlijnen voor Rich text content component", slug: "/rich-text-content", tags: ["Help Wanted"] },
    i = void 0,
    a = { unversionedId: "componenten/build/rich-text-content", id: "componenten/build/rich-text-content", title: "Rich text content", description: "UX richtlijnen voor Rich text content component", source: "@site/docs/componenten/build/rich-text-content.mdx", sourceDirName: "componenten/build", slug: "/rich-text-content", permalink: "/en/rich-text-content", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/rich-text-content.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Rich text content", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Rich text content", pagination_label: "Rich text content", description: "UX richtlijnen voor Rich text content component", slug: "/rich-text-content", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Range", permalink: "/en/range" }, next: { title: "Select", permalink: "/en/select" } },
    l = {},
    s = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    p = { toc: s },
    u = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(u, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "rich-text-content" }, "Rich text content"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Rich text content component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/127" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
