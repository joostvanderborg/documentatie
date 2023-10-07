"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4135],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => m });
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
   var p = r.createContext({}),
    c = function (e) {
     var t = r.useContext(p),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    s = function (e) {
     var t = c(e.components);
     return r.createElement(p.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    g = r.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      p = e.parentName,
      s = l(e, ["components", "mdxType", "originalType", "parentName"]),
      u = c(n),
      g = o,
      m = u["".concat(p, ".").concat(g)] || u[g] || d[g] || i;
     return n ? r.createElement(m, a(a({ ref: t }, s), {}, { components: n })) : r.createElement(m, a({ ref: t }, s));
    });
   function m(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      a = new Array(i);
     a[0] = g;
     var l = {};
     for (var p in t) hasOwnProperty.call(t, p) && (l[p] = t[p]);
     (l.originalType = e), (l[u] = "string" == typeof e ? e : o), (a[1] = l);
     for (var c = 2; c < i; c++) a[c] = n[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   g.displayName = "MDXCreateElement";
  },
  48522: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => p, contentTitle: () => a, default: () => d, frontMatter: () => i, metadata: () => l, toc: () => c });
   var r = n(87462),
    o = (n(67294), n(3905));
   const i = { title: "Radio group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio group", pagination_label: "Radio group", description: "UX richtlijnen voor Radio group component", slug: "/radio-group", tags: ["Help Wanted"] },
    a = void 0,
    l = { unversionedId: "componenten/build/radio-group", id: "componenten/build/radio-group", title: "Radio group", description: "UX richtlijnen voor Radio group component", source: "@site/docs/componenten/build/radio-group.mdx", sourceDirName: "componenten/build", slug: "/radio-group", permalink: "/en/radio-group", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/radio-group.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Radio group", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Radio group", pagination_label: "Radio group", description: "UX richtlijnen voor Radio group component", slug: "/radio-group", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Progress", permalink: "/en/progress" }, next: { title: "Radio button", permalink: "/en/radio" } },
    p = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    s = { toc: c },
    u = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(u, (0, r.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "radio-group" }, "Radio group"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Radio group component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/129" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
