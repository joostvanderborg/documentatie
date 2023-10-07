"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6786],
 {
  3905: (e, t, r) => {
   r.d(t, { Zo: () => u, kt: () => m });
   var n = r(67294);
   function o(e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
   }
   function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     t &&
      (n = n.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, n);
    }
    return r;
   }
   function a(e) {
    for (var t = 1; t < arguments.length; t++) {
     var r = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(r), !0).forEach(function (t) {
         o(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : i(Object(r)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var r,
     n,
     o = (function (e, t) {
      if (null == e) return {};
      var r,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
   }
   var s = n.createContext({}),
    c = function (e) {
     var t = n.useContext(s),
      r = t;
     return e && (r = "function" == typeof e ? e(t) : a(a({}, t), e)), r;
    },
    u = function (e) {
     var t = c(e.components);
     return n.createElement(s.Provider, { value: t }, e.children);
    },
    p = "mdxType",
    f = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return n.createElement(n.Fragment, {}, t);
     },
    },
    d = n.forwardRef(function (e, t) {
     var r = e.components,
      o = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      u = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = c(r),
      d = o,
      m = p["".concat(s, ".").concat(d)] || p[d] || f[d] || i;
     return r ? n.createElement(m, a(a({ ref: t }, u), {}, { components: r })) : n.createElement(m, a({ ref: t }, u));
    });
   function m(e, t) {
    var r = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = r.length,
      a = new Array(i);
     a[0] = d;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : o), (a[1] = l);
     for (var c = 2; c < i; c++) a[c] = r[c];
     return n.createElement.apply(null, a);
    }
    return n.createElement.apply(null, r);
   }
   d.displayName = "MDXCreateElement";
  },
  64518: (e, t, r) => {
   r.r(t), r.d(t, { assets: () => s, contentTitle: () => a, default: () => f, frontMatter: () => i, metadata: () => l, toc: () => c });
   var n = r(87462),
    o = (r(67294), r(3905));
   const i = { title: "Geslacht uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Geslacht uitvragen", sidebar_position: 3, pagination_label: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", keywords: ["patronen", "design system", "geslacht uitvragen", "formulieren"] },
    a = "Geslacht uitvragen in formulieren",
    l = { unversionedId: "voorbeelden/patronen/formulieren/geslacht-uitvragen", id: "voorbeelden/patronen/formulieren/geslacht-uitvragen", title: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", source: "@site/docs/voorbeelden/patronen/formulieren/geslacht-uitvragen.md", sourceDirName: "voorbeelden/patronen/formulieren", slug: "/voorbeelden/patronen/formulieren/geslacht-uitvragen", permalink: "/en/voorbeelden/patronen/formulieren/geslacht-uitvragen", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/formulieren/geslacht-uitvragen.md", tags: [], version: "current", sidebarPosition: 3, frontMatter: { title: "Geslacht uitvragen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Geslacht uitvragen", sidebar_position: 3, pagination_label: "Geslacht uitvragen", description: "Geslacht uitvragen in formulieren", keywords: ["patronen", "design system", "geslacht uitvragen", "formulieren"] }, sidebar: "voorbeelden", previous: { title: "Adres uitvragen", permalink: "/en/voorbeelden/patronen/formulieren/adres-uitvragen" }, next: { title: "Templates", permalink: "/en/voorbeelden/templates/" } },
    s = {},
    c = [],
    u = { toc: c },
    p = "wrapper";
   function f(e) {
    let { components: t, ...r } = e;
    return (0, o.kt)(p, (0, n.Z)({}, u, r, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "geslacht-uitvragen-in-formulieren" }, "Geslacht uitvragen in formulieren"));
   }
   f.isMDXComponent = !0;
  },
 },
]);
