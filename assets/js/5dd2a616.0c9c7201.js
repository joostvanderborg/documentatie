"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2463],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => h });
   var a = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function i(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? o(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     a,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       r = {},
       o = Object.keys(e);
      for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var s = a.createContext({}),
    m = function (e) {
     var t = a.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : i(i({}, t), e)), n;
    },
    p = function (e) {
     var t = m(e.components);
     return a.createElement(s.Provider, { value: t }, e.children);
    },
    c = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    d = a.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      o = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      c = m(n),
      d = r,
      h = c["".concat(s, ".").concat(d)] || c[d] || u[d] || o;
     return n ? a.createElement(h, i(i({ ref: t }, p), {}, { components: n })) : a.createElement(h, i({ ref: t }, p));
    });
   function h(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var o = n.length,
      i = new Array(o);
     i[0] = d;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[c] = "string" == typeof e ? e : r), (i[1] = l);
     for (var m = 2; m < o; m++) i[m] = n[m];
     return a.createElement.apply(null, i);
    }
    return a.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  74112: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => i, default: () => u, frontMatter: () => o, metadata: () => l, toc: () => m });
   var a = n(87462),
    r = (n(67294), n(3905));
   const o = { title: "Separator", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Separator", pagination_label: "Separator", description: "UX richtlijnen voor Separator component", slug: "/separator", tags: ["Community"] },
    i = void 0,
    l = { unversionedId: "componenten/build/separator", id: "componenten/build/separator", title: "Separator", description: "UX richtlijnen voor Separator component", source: "@site/docs/componenten/build/separator.mdx", sourceDirName: "componenten/build", slug: "/separator", permalink: "/separator", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/separator.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Separator", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Separator", pagination_label: "Separator", description: "UX richtlijnen voor Separator component", slug: "/separator", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Select", permalink: "/select" }, next: { title: "Side navigation", permalink: "/side-navigation" } },
    s = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-2", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    p = { toc: m },
    c = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(c, (0, a.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "separator" }, "Separator"), (0, r.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "css" }, "CSS"), (0, r.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.scss" }, "Separator CSS implementatie van Gemeente Den Haag")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-divider--default-story" }, "Separator CSS storybook van Gemeente Den Haag"))), (0, r.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/separator/css" }, "Separator CSS implementatie van Gemeente Utrecht")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-separator--default-story" }, "Separator CSS storybook van Gemeente Utrecht"))), (0, r.kt)("h3", { id: "react" }, "React"), (0, r.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.tsx" }, "Separator React implementatie van Gemeente Den Haag")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-divider--default-story" }, "Separator React storybook van Gemeente Den Haag"))), (0, r.kt)("h3", { id: "html" }, "HTML"), (0, r.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/separator/html" }, "Separator HTML implementatie van Gemeente Utrecht")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-separator--default-story" }, "Separator HTML storybook van Gemeente Utrecht"))), (0, r.kt)("h3", { id: "web-component" }, "Web Component"), (0, r.kt)("h4", { id: "gemeente-utrecht-2" }, "Gemeente Utrecht"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/separator/web-component" }, "Separator Web Component implementatie van Gemeente Utrecht")), (0, r.kt)("li", { parentName: "ul" }, "Storybook: ", (0, r.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-separator--default-story" }, "Separator Web Component storybook van Gemeente Utrecht"))), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=843-1098" }, "Separator Figma implementatie van NL Design System"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Separator component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/119" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   u.isMDXComponent = !0;
  },
 },
]);
