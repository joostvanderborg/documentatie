"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9866],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => g });
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
    m = function (e) {
     var n = s(e.components);
     return o.createElement(l.Provider, { value: n }, e.children);
    },
    d = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    u = o.forwardRef(function (e, n) {
     var t = e.components,
      i = e.mdxType,
      r = e.originalType,
      l = e.parentName,
      m = c(e, ["components", "mdxType", "originalType", "parentName"]),
      d = s(t),
      u = i,
      g = d["".concat(l, ".").concat(u)] || d[u] || p[u] || r;
     return t ? o.createElement(g, a(a({ ref: n }, m), {}, { components: t })) : o.createElement(g, a({ ref: n }, m));
    });
   function g(e, n) {
    var t = arguments,
     i = n && n.mdxType;
    if ("string" == typeof e || i) {
     var r = t.length,
      a = new Array(r);
     a[0] = u;
     var c = {};
     for (var l in n) hasOwnProperty.call(n, l) && (c[l] = n[l]);
     (c.originalType = e), (c[d] = "string" == typeof e ? e : i), (a[1] = c);
     for (var s = 2; s < r; s++) a[s] = t[s];
     return o.createElement.apply(null, a);
    }
    return o.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  26512: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => a, default: () => p, frontMatter: () => r, metadata: () => c, toc: () => s });
   var o = t(87462),
    i = (t(67294), t(3905));
   const r = { title: "Accordion", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Accordion", pagination_label: "Accordion", description: "UX richtlijnen voor Accordion component", slug: "/accordion", tags: ["Community"] },
    a = void 0,
    c = { unversionedId: "componenten/build/accordion", id: "componenten/build/accordion", title: "Accordion", description: "UX richtlijnen voor Accordion component", source: "@site/docs/componenten/build/accordion.mdx", sourceDirName: "componenten/build", slug: "/accordion", permalink: "/accordion", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/accordion.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Accordion", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Accordion", pagination_label: "Accordion", description: "UX richtlijnen voor Accordion component", slug: "/accordion", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Definition of Done", permalink: "/componenten/definition-of-done" }, next: { title: "Alert dialog", permalink: "/alert-dialog" } },
    l = {},
    s = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    m = { toc: s },
    d = "wrapper";
   function p(e) {
    let { components: n, ...t } = e;
    return (0, i.kt)(d, (0, o.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "accordion" }, "Accordion"), (0, i.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "css" }, "CSS"), (0, i.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/src/index.scss" }, "Accordion CSS implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/docs/css-surfaces-accordion--default-story" }, "Accordion CSS storybook van Gemeente Den Haag"))), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1585%3A0" }, "Accordion Figma implementatie van Gemeente Den Haag"))), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1261-4784" }, "Accordion Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Accordion component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/102" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
