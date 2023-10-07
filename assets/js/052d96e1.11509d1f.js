"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2894],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => g });
   var o = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
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
      ? a(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     o,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       o,
       r = {},
       a = Object.keys(e);
      for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var s = o.createContext({}),
    m = function (e) {
     var t = o.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    c = function (e) {
     var t = m(e.components);
     return o.createElement(s.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    p = o.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      c = l(e, ["components", "mdxType", "originalType", "parentName"]),
      u = m(n),
      p = r,
      g = u["".concat(s, ".").concat(p)] || u[p] || d[p] || a;
     return n ? o.createElement(g, i(i({ ref: t }, c), {}, { components: n })) : o.createElement(g, i({ ref: t }, c));
    });
   function g(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var a = n.length,
      i = new Array(a);
     i[0] = p;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[u] = "string" == typeof e ? e : r), (i[1] = l);
     for (var m = 2; m < a; m++) i[m] = n[m];
     return o.createElement.apply(null, i);
    }
    return o.createElement.apply(null, n);
   }
   p.displayName = "MDXCreateElement";
  },
  21412: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => i, default: () => d, frontMatter: () => a, metadata: () => l, toc: () => m });
   var o = n(87462),
    r = (n(67294), n(3905));
   const a = { title: "Counter badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Counter badge", pagination_label: "Counter badge", description: "UX richtlijnen voor Counter badge component", slug: "/counter-badge", tags: ["Community"] },
    i = void 0,
    l = { unversionedId: "componenten/build/counter-badge", id: "componenten/build/counter-badge", title: "Counter badge", description: "UX richtlijnen voor Counter badge component", source: "@site/docs/componenten/build/counter-badge.mdx", sourceDirName: "componenten/build", slug: "/counter-badge", permalink: "/counter-badge", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/counter-badge.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Counter badge", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Counter badge", pagination_label: "Counter badge", description: "UX richtlijnen voor Counter badge component", slug: "/counter-badge", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Checkbox", permalink: "/checkbox" }, next: { title: "Data badge", permalink: "/data-badge" } },
    s = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: m },
    u = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(u, (0, o.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "counter-badge" }, "Counter badge"), (0, r.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "css" }, "CSS"), (0, r.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/BadgeCounter/src/index.scss" }, "Counter badge CSS implementatie van Gemeente Den Haag")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-badge-counter--default-story" }, "Counter badge CSS storybook van Gemeente Den Haag"))), (0, r.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/css" }, "Counter badge CSS implementatie van Gemeente Utrecht")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-counter-badge--default-story" }, "Counter badge CSS storybook van Gemeente Utrecht"))), (0, r.kt)("h3", { id: "web-component" }, "Web Component"), (0, r.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/web-component" }, "Counter badge Web Component implementatie van Gemeente Utrecht")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-counter-badge--default-story" }, "Counter badge Web Component storybook van Gemeente Utrecht"))), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1233-4271" }, "Counter badge Figma implementatie van NL Design System"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Counter badge component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/7" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
