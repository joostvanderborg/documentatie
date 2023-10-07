"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4651],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => s, kt: () => g });
   var r = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
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
      ? i(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     r,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       o = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var c = r.createContext({}),
    d = function (e) {
     var n = r.useContext(c),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    s = function (e) {
     var n = d(e.components);
     return r.createElement(c.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    m = r.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      i = e.originalType,
      c = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(t),
      m = o,
      g = p["".concat(c, ".").concat(m)] || p[m] || u[m] || i;
     return t ? r.createElement(g, a(a({ ref: n }, s), {}, { components: t })) : r.createElement(g, a({ ref: n }, s));
    });
   function g(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var i = t.length,
      a = new Array(i);
     a[0] = m;
     var l = {};
     for (var c in n) hasOwnProperty.call(n, c) && (l[c] = n[c]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : o), (a[1] = l);
     for (var d = 2; d < i; d++) a[d] = t[d];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  40679: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => c, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => l, toc: () => d });
   var r = t(87462),
    o = (t(67294), t(3905));
   const i = { title: "Legend", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Legend", pagination_label: "Legend", description: "UX richtlijnen voor Legend component", slug: "/legend", tags: ["Help Wanted"] },
    a = void 0,
    l = { unversionedId: "componenten/build/legend", id: "componenten/build/legend", title: "Legend", description: "UX richtlijnen voor Legend component", source: "@site/docs/componenten/build/legend.mdx", sourceDirName: "componenten/build", slug: "/legend", permalink: "/en/legend", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/legend.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Legend", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Legend", pagination_label: "Legend", description: "UX richtlijnen voor Legend component", slug: "/legend", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Invalid form alert", permalink: "/en/invalid-form-alert" }, next: { title: "Link", permalink: "/en/link" } },
    c = {},
    d = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: d },
    p = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(p, (0, r.Z)({}, s, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "legend" }, "Legend"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Legend component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/186" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
