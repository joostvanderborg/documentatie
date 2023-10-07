"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3044],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => m });
   var o = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     t &&
      (o = o.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, o);
    }
    return n;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     o,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       o,
       r = {},
       i = Object.keys(e);
      for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (o = 0; o < i.length; o++) (n = i[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var p = o.createContext({}),
    c = function (e) {
     var t = o.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    s = function (e) {
     var t = c(e.components);
     return o.createElement(p.Provider, { value: t }, e.children);
    },
    g = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    d = o.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      i = e.originalType,
      p = e.parentName,
      s = a(e, ["components", "mdxType", "originalType", "parentName"]),
      g = c(n),
      d = r,
      m = g["".concat(p, ".").concat(d)] || g[d] || u[d] || i;
     return n ? o.createElement(m, l(l({ ref: t }, s), {}, { components: n })) : o.createElement(m, l({ ref: t }, s));
    });
   function m(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var i = n.length,
      l = new Array(i);
     l[0] = d;
     var a = {};
     for (var p in t) hasOwnProperty.call(t, p) && (a[p] = t[p]);
     (a.originalType = e), (a[g] = "string" == typeof e ? e : r), (l[1] = a);
     for (var c = 2; c < i; c++) l[c] = n[c];
     return o.createElement.apply(null, l);
    }
    return o.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  95308: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => l, default: () => u, frontMatter: () => i, metadata: () => a, toc: () => c });
   var o = n(87462),
    r = (n(67294), n(3905));
   const i = { title: "Toggletip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toggletip", pagination_label: "Toggletip", description: "UX richtlijnen voor Toggletip component", slug: "/toggletip", tags: ["Help Wanted"] },
    l = void 0,
    a = { unversionedId: "componenten/build/toggletip", id: "componenten/build/toggletip", title: "Toggletip", description: "UX richtlijnen voor Toggletip component", source: "@site/docs/componenten/build/toggletip.mdx", sourceDirName: "componenten/build", slug: "/toggletip", permalink: "/en/toggletip", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/toggletip.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Toggletip", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Toggletip", pagination_label: "Toggletip", description: "UX richtlijnen voor Toggletip component", slug: "/toggletip", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Textarea", permalink: "/en/textarea" }, next: { title: "Tooltip", permalink: "/en/tooltip" } },
    p = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: c },
    g = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(g, (0, o.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "toggletip" }, "Toggletip"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Toggletip component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/170" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
