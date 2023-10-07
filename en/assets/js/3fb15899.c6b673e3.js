"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8665],
 {
  61771: (e, t, o) => {
   o.d(t, { o: () => a });
   var n = o(76649),
    l = o(67294);
   const i = "story_PQo9",
    s = "story__link_f0vD",
    a = (e) => {
     let { label: t, href: o } = e;
     const a = o,
      m = o.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return l.createElement("div", { className: i }, l.createElement(n.Z, { src: m, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), l.createElement("a", { className: s, href: a, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  4199: (e, t, o) => {
   o.r(t), o.d(t, { assets: () => c, contentTitle: () => a, default: () => h, frontMatter: () => s, metadata: () => m, toc: () => r });
   var n = o(87462),
    l = (o(67294), o(3905)),
    i = o(61771);
   const s = { title: "Blockquote", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Blockquote", pagination_label: "Blockquote", description: "UX richtlijnen voor Blockquote component", slug: "/blockquote", tags: ["Community"] },
    a = void 0,
    m = { unversionedId: "componenten/build/blockquote", id: "componenten/build/blockquote", title: "Blockquote", description: "UX richtlijnen voor Blockquote component", source: "@site/docs/componenten/build/blockquote.mdx", sourceDirName: "componenten/build", slug: "/blockquote", permalink: "/en/blockquote", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/blockquote.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Blockquote", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Blockquote", pagination_label: "Blockquote", description: "UX richtlijnen voor Blockquote component", slug: "/blockquote", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Avatar", permalink: "/en/avatar" }, next: { title: "Breadcrumb navigation", permalink: "/en/breadcrumb" } },
    c = {},
    r = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    u = { toc: r },
    d = "wrapper";
   function h(e) {
    let { components: t, ...o } = e;
    return (0, l.kt)(d, (0, n.Z)({}, u, o, { components: t, mdxType: "MDXLayout" }), (0, l.kt)("h1", { id: "blockquote" }, "Blockquote"), (0, l.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, l.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, l.kt)(i.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/blockquote--gemeente-utrecht", mdxType: "Story" }), (0, l.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, l.kt)("h3", { id: "css" }, "CSS"), (0, l.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/css" }, "Blockquote CSS implementatie van Gemeente Utrecht")), (0, l.kt)("li", { parentName: "ul" }, "Storybook: ", (0, l.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-blockquote--default-story" }, "Blockquote CSS storybook van Gemeente Utrecht"))), (0, l.kt)("h3", { id: "html" }, "HTML"), (0, l.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/html" }, "Blockquote HTML implementatie van Gemeente Utrecht")), (0, l.kt)("li", { parentName: "ul" }, "Storybook: ", (0, l.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-blockquote--default-story" }, "Blockquote HTML storybook van Gemeente Utrecht"))), (0, l.kt)("h3", { id: "figma" }, "Figma"), (0, l.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1349-6340" }, "Blockquote Figma implementatie van NL Design System"))), (0, l.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, l.kt)("p", null, "De Blockquote component staat bij NL Design System in de ", (0, l.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/73" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   h.isMDXComponent = !0;
  },
 },
]);
