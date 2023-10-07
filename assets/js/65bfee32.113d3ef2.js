"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [853],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => u });
   var a = t(67294);
   function i(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function o(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a);
    }
    return t;
   }
   function r(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? o(Object(t), !0).forEach(function (n) {
         i(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : o(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     a,
     i = (function (e, n) {
      if (null == e) return {};
      var t,
       a,
       i = {},
       o = Object.keys(e);
      for (a = 0; a < o.length; a++) (t = o[a]), n.indexOf(t) >= 0 || (i[t] = e[t]);
      return i;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (a = 0; a < o.length; a++) (t = o[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]));
    }
    return i;
   }
   var s = a.createContext({}),
    m = function (e) {
     var n = a.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : r(r({}, n), e)), t;
    },
    p = function (e) {
     var n = m(e.components);
     return a.createElement(s.Provider, { value: n }, e.children);
    },
    g = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return a.createElement(a.Fragment, {}, n);
     },
    },
    d = a.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      g = m(t),
      d = i,
      u = g["".concat(s, ".").concat(d)] || g[d] || c[d] || o;
     return t ? a.createElement(u, r(r({ ref: n }, p), {}, { components: t })) : a.createElement(u, r({ ref: n }, p));
    });
   function u(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var o = t.length,
      r = new Array(o);
     r[0] = d;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[g] = "string" == typeof e ? e : i), (r[1] = l);
     for (var m = 2; m < o; m++) r[m] = t[m];
     return a.createElement.apply(null, r);
    }
    return a.createElement.apply(null, t);
   }
   d.displayName = "MDXCreateElement";
  },
  26841: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => r, default: () => c, frontMatter: () => o, metadata: () => l, toc: () => m });
   var a = t(87462),
    i = (t(67294), t(3905));
   const o = { title: "Pagination", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Pagination", pagination_label: "Pagination", description: "UX richtlijnen voor Pagination component", slug: "/pagination", tags: ["Help Wanted"] },
    r = void 0,
    l = { unversionedId: "componenten/build/pagination", id: "componenten/build/pagination", title: "Pagination", description: "UX richtlijnen voor Pagination component", source: "@site/docs/componenten/build/pagination.mdx", sourceDirName: "componenten/build", slug: "/pagination", permalink: "/pagination", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/pagination.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Pagination", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Pagination", pagination_label: "Pagination", description: "UX richtlijnen voor Pagination component", slug: "/pagination", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Page Header", permalink: "/page-header" }, next: { title: "Paragraph", permalink: "/paragraph" } },
    s = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-2", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    p = { toc: m },
    g = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(g, (0, a.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "pagination" }, "Pagination"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "css" }, "CSS"), (0, i.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.scss" }, "Pagination CSS implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-pagination--default-story" }, "Pagination CSS storybook van Gemeente Den Haag"))), (0, i.kt)("h3", { id: "react" }, "React"), (0, i.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.tsx" }, "Pagination React implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: (nog) geen story beschikbaar")), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "gemeente-den-haag-2" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1673%3A231" }, "Pagination Figma implementatie van Gemeente Den Haag"))), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1691-11779" }, "Pagination Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Pagination component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/106" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   c.isMDXComponent = !0;
  },
 },
]);
