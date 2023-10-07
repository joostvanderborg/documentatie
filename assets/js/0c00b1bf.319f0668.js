"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5370],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => g });
   var o = n(67294);
   function a(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function l(e, t) {
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
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         a(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function r(e, t) {
    if (null == e) return {};
    var n,
     o,
     a = (function (e, t) {
      if (null == e) return {};
      var n,
       o,
       a = {},
       l = Object.keys(e);
      for (o = 0; o < l.length; o++) (n = l[o]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     for (o = 0; o < l.length; o++) (n = l[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
    }
    return a;
   }
   var d = o.createContext({}),
    s = function (e) {
     var t = o.useContext(d),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    c = function (e) {
     var t = s(e.components);
     return o.createElement(d.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    u = o.forwardRef(function (e, t) {
     var n = e.components,
      a = e.mdxType,
      l = e.originalType,
      d = e.parentName,
      c = r(e, ["components", "mdxType", "originalType", "parentName"]),
      m = s(n),
      u = a,
      g = m["".concat(d, ".").concat(u)] || m[u] || p[u] || l;
     return n ? o.createElement(g, i(i({ ref: t }, c), {}, { components: n })) : o.createElement(g, i({ ref: t }, c));
    });
   function g(e, t) {
    var n = arguments,
     a = t && t.mdxType;
    if ("string" == typeof e || a) {
     var l = n.length,
      i = new Array(l);
     i[0] = u;
     var r = {};
     for (var d in t) hasOwnProperty.call(t, d) && (r[d] = t[d]);
     (r.originalType = e), (r[m] = "string" == typeof e ? e : a), (i[1] = r);
     for (var s = 2; s < l; s++) i[s] = n[s];
     return o.createElement.apply(null, i);
    }
    return o.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  83233: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => i, default: () => p, frontMatter: () => l, metadata: () => r, toc: () => s });
   var o = n(87462),
    a = (n(67294), n(3905));
   const l = { title: "Modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Modal dialog", pagination_label: "Modal dialog", description: "UX richtlijnen voor Modal dialog component", slug: "/modal-dialog", tags: ["Community"] },
    i = void 0,
    r = { unversionedId: "componenten/build/modal-dialog", id: "componenten/build/modal-dialog", title: "Modal dialog", description: "UX richtlijnen voor Modal dialog component", source: "@site/docs/componenten/build/modal-dialog.mdx", sourceDirName: "componenten/build", slug: "/modal-dialog", permalink: "/modal-dialog", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/modal-dialog.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Modal dialog", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Modal dialog", pagination_label: "Modal dialog", description: "UX richtlijnen voor Modal dialog component", slug: "/modal-dialog", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Link", permalink: "/link" }, next: { title: "Non modal dialog", permalink: "/non-modal-dialog" } },
    d = {},
    s = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: s },
    m = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(m, (0, o.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "modal-dialog" }, "Modal dialog"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Modal/src/index.scss" }, "Modal dialog CSS implementatie van Gemeente Den Haag")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/css-feedback-modal--default-story" }, "Modal dialog CSS storybook van Gemeente Den Haag"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Modal dialog component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/66" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
