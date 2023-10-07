"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [231],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => s });
   var i = n(76649),
    o = n(67294);
   const a = "story_PQo9",
    l = "story__link_f0vD",
    s = (e) => {
     let { label: t, href: n } = e;
     const s = n,
      m = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return o.createElement("div", { className: a }, o.createElement(i.Z, { src: m, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), o.createElement("a", { className: l, href: s, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  71066: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => s, default: () => p, frontMatter: () => l, metadata: () => m, toc: () => r });
   var i = n(87462),
    o = (n(67294), n(3905)),
    a = n(61771);
   const l = { title: "Switch", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Switch", pagination_label: "Switch", description: "UX richtlijnen voor Switch component", slug: "/switch", tags: ["Community"] },
    s = void 0,
    m = { unversionedId: "componenten/build/switch", id: "componenten/build/switch", title: "Switch", description: "UX richtlijnen voor Switch component", source: "@site/docs/componenten/build/switch.mdx", sourceDirName: "componenten/build", slug: "/switch", permalink: "/switch", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/switch.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Switch", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Switch", pagination_label: "Switch", description: "UX richtlijnen voor Switch component", slug: "/switch", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Strong", permalink: "/strong" }, next: { title: "Table", permalink: "/table" } },
    c = {},
    r = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    h = { toc: r },
    d = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(d, (0, i.Z)({}, h, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "switch" }, "Switch"), (0, o.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, o.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, o.kt)(a.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/switch--gemeente-utrecht", mdxType: "Story" }), (0, o.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, o.kt)("h3", { id: "css" }, "CSS"), (0, o.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, o.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/css" }, "Switch CSS implementatie van Gemeente Utrecht")), (0, o.kt)("li", { parentName: "ul" }, "Storybook: ", (0, o.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-toggle--default-story" }, "Switch CSS storybook van Gemeente Utrecht"))), (0, o.kt)("h3", { id: "web-component" }, "Web Component"), (0, o.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, o.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/web-component" }, "Switch Web Component implementatie van Gemeente Utrecht")), (0, o.kt)("li", { parentName: "ul" }, "Storybook: ", (0, o.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-form-toggle--default-story" }, "Switch Web Component storybook van Gemeente Utrecht"))), (0, o.kt)("h3", { id: "react" }, "React"), (0, o.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, o.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Switch/src/index.tsx" }, "Switch React implementatie van Gemeente Den Haag")), (0, o.kt)("li", { parentName: "ul" }, "Storybook: ", (0, o.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-switch--default" }, "Switch React storybook van Gemeente Den Haag"))), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Switch component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/33" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
