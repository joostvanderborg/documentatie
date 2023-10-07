"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4396],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => g });
   var a = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? o(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
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
     a,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       r = {},
       o = Object.keys(e);
      for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var c = a.createContext({}),
    d = function (e) {
     var t = a.useContext(c),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    s = function (e) {
     var t = d(e.components);
     return a.createElement(c.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    b = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    u = a.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      o = e.originalType,
      c = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(n),
      u = r,
      g = p["".concat(c, ".").concat(u)] || p[u] || b[u] || o;
     return n ? a.createElement(g, i(i({ ref: t }, s), {}, { components: n })) : a.createElement(g, i({ ref: t }, s));
    });
   function g(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var o = n.length,
      i = new Array(o);
     i[0] = u;
     var l = {};
     for (var c in t) hasOwnProperty.call(t, c) && (l[c] = t[c]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : r), (i[1] = l);
     for (var d = 2; d < o; d++) i[d] = n[d];
     return a.createElement.apply(null, i);
    }
    return a.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  15242: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => i, default: () => b, frontMatter: () => o, metadata: () => l, toc: () => d });
   var a = n(87462),
    r = (n(67294), n(3905));
   const o = { title: "Data badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data badge", pagination_label: "Data badge", description: "UX richtlijnen voor Data badge component", slug: "/data-badge", tags: ["Help Wanted"] },
    i = void 0,
    l = { unversionedId: "componenten/build/data-badge", id: "componenten/build/data-badge", title: "Data badge", description: "UX richtlijnen voor Data badge component", source: "@site/docs/componenten/build/data-badge.mdx", sourceDirName: "componenten/build", slug: "/data-badge", permalink: "/en/data-badge", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/data-badge.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Data badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Data badge", pagination_label: "Data badge", description: "UX richtlijnen voor Data badge component", slug: "/data-badge", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Counter badge", permalink: "/en/counter-badge" }, next: { title: "Data list", permalink: "/en/data-list" } },
    c = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: d },
    p = "wrapper";
   function b(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(p, (0, a.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "data-badge" }, "Data badge"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Data badge component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/94" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   b.isMDXComponent = !0;
  },
 },
]);
