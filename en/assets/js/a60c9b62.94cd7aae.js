"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4573],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => u, kt: () => g });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
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
      ? o(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
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
      o = e.originalType,
      c = e.parentName,
      u = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = s(n),
      m = i,
      g = p["".concat(c, ".").concat(m)] || p[m] || d[m] || o;
     return n ? r.createElement(g, a(a({ ref: t }, u), {}, { components: n })) : r.createElement(g, a({ ref: t }, u));
    });
   function g(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var o = n.length,
      a = new Array(o);
     a[0] = m;
     var l = {};
     for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : i), (a[1] = l);
     for (var s = 2; s < o; s++) a[s] = n[s];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  21846: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => a, default: () => d, frontMatter: () => o, metadata: () => l, toc: () => s });
   var r = n(87462),
    i = (n(67294), n(3905));
   const o = { title: "Figure", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Figure", pagination_label: "Figure", description: "UX richtlijnen voor Figure component", slug: "/figure", tags: ["Help Wanted"] },
    a = void 0,
    l = { unversionedId: "componenten/build/figure", id: "componenten/build/figure", title: "Figure", description: "UX richtlijnen voor Figure component", source: "@site/docs/componenten/build/figure.mdx", sourceDirName: "componenten/build", slug: "/figure", permalink: "/en/figure", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/figure.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Figure", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Figure", pagination_label: "Figure", description: "UX richtlijnen voor Figure component", slug: "/figure", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Fieldset", permalink: "/en/fieldset" }, next: { title: "File input", permalink: "/en/file-input" } },
    c = {},
    s = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    u = { toc: s },
    p = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(p, (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "figure" }, "Figure"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Figure component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/70" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
