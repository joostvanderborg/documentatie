"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4695],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => f });
   var o = t(67294);
   function i(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function r(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     n &&
      (o = o.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, o);
    }
    return t;
   }
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? r(Object(t), !0).forEach(function (n) {
         i(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : r(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function c(e, n) {
    if (null == e) return {};
    var t,
     o,
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       o,
       i = {},
       r = Object.keys(e);
      for (o = 0; o < r.length; o++) (t = r[o]), n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (o = 0; o < r.length; o++) (t = r[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   var l = o.createContext({}),
    s = function (e) {
     var n = o.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    p = function (e) {
     var n = s(e.components);
     return o.createElement(l.Provider, { value: n }, e.children);
    },
    u = "mdxType",
    b = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    d = o.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      r = e.originalType,
      l = e.parentName,
      p = c(e, ["components", "mdxType", "originalType", "parentName"]),
      u = s(t),
      d = i,
      f = u["".concat(l, ".").concat(d)] || u[d] || b[d] || r;
     return t ? o.createElement(f, a(a({ ref: n }, p), {}, { components: t })) : o.createElement(f, a({ ref: n }, p));
    });
   function f(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var r = t.length,
      a = new Array(r);
     a[0] = d;
     var c = {};
     for (var l in n) hasOwnProperty.call(n, l) && (c[l] = n[l]);
     (c.originalType = e), (c[u] = "string" == typeof e ? e : i), (a[1] = c);
     for (var s = 2; s < r; s++) a[s] = t[s];
     return o.createElement.apply(null, a);
    }
    return o.createElement.apply(null, t);
   }
   d.displayName = "MDXCreateElement";
  },
  46310: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => b, frontMatter: () => r, metadata: () => c, toc: () => s });
   var o = t(87462),
    i = (t(67294), t(3905));
   const r = { title: "Notification banner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Notification banner", pagination_label: "Notification banner", description: "UX richtlijnen voor Notification banner component", slug: "/notification-banner", tags: ["Help Wanted"] },
    a = void 0,
    c = { unversionedId: "componenten/build/notification-banner", id: "componenten/build/notification-banner", title: "Notification banner", description: "UX richtlijnen voor Notification banner component", source: "@site/docs/componenten/build/notification-banner.mdx", sourceDirName: "componenten/build", slug: "/notification-banner", permalink: "/notification-banner", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/notification-banner.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Notification banner", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Notification banner", pagination_label: "Notification banner", description: "UX richtlijnen voor Notification banner component", slug: "/notification-banner", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Non modal dialog", permalink: "/non-modal-dialog" }, next: { title: "Number input", permalink: "/number-input" } },
    l = {},
    s = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    p = { toc: s },
    u = "wrapper";
   function b(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(u, (0, o.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "notification-banner" }, "Notification banner"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Notification banner component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/169" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   b.isMDXComponent = !0;
  },
 },
]);
