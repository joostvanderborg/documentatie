"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4644],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => d, kt: () => b });
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
   function p(e, n) {
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
   var l = r.createContext({}),
    c = function (e) {
     var n = r.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    d = function (e) {
     var n = c(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    s = "mdxType",
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
      l = e.parentName,
      d = p(e, ["components", "mdxType", "originalType", "parentName"]),
      s = c(t),
      m = o,
      b = s["".concat(l, ".").concat(m)] || s[m] || u[m] || i;
     return t ? r.createElement(b, a(a({ ref: n }, d), {}, { components: t })) : r.createElement(b, a({ ref: n }, d));
    });
   function b(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var i = t.length,
      a = new Array(i);
     a[0] = m;
     var p = {};
     for (var l in n) hasOwnProperty.call(n, l) && (p[l] = n[l]);
     (p.originalType = e), (p[s] = "string" == typeof e ? e : o), (a[1] = p);
     for (var c = 2; c < i; c++) a[c] = t[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  67190: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => u, frontMatter: () => i, metadata: () => p, toc: () => c });
   var r = t(87462),
    o = (t(67294), t(3905));
   const i = { title: "Component uitbreiden", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component uitbreiden", pagination_label: "Component uitbreiden", description: "Hoe kun je een component uitbreiden", keywords: ["developer", "bijdragen"] },
    a = "Hoe kun je een bestaand component uitbreiden",
    p = { unversionedId: "meedoen/als-developer/component-uitbreiden", id: "meedoen/als-developer/component-uitbreiden", title: "Component uitbreiden", description: "Hoe kun je een component uitbreiden", source: "@site/docs/meedoen/als-developer/06-component-uitbreiden.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/component-uitbreiden", permalink: "/meedoen/als-developer/component-uitbreiden", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/06-component-uitbreiden.md", tags: [], version: "current", sidebarPosition: 6, frontMatter: { title: "Component uitbreiden", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component uitbreiden", pagination_label: "Component uitbreiden", description: "Hoe kun je een component uitbreiden", keywords: ["developer", "bijdragen"] }, sidebar: "meedoen", previous: { title: "Component inzetten", permalink: "/meedoen/als-developer/component-inzetten" }, next: { title: "Componenten maken", permalink: "/meedoen/als-developer/componenten-maken" } },
    l = {},
    c = [],
    d = { toc: c },
    s = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(s, (0, r.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "hoe-kun-je-een-bestaand-component-uitbreiden" }, "Hoe kun je een bestaand component uitbreiden"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
