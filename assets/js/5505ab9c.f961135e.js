"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2234],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => s });
   var i = n(76649),
    a = n(67294);
   const l = "story_PQo9",
    o = "story__link_f0vD",
    s = (e) => {
     let { label: t, href: n } = e;
     const s = n,
      d = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return a.createElement("div", { className: l }, a.createElement(i.Z, { src: d, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), a.createElement("a", { className: o, href: s, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  95325: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => m, contentTitle: () => s, default: () => h, frontMatter: () => o, metadata: () => d, toc: () => r });
   var i = n(87462),
    a = (n(67294), n(3905)),
    l = n(61771);
   const o = { title: "Heading 6", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading 6", pagination_label: "Heading 6", description: "UX richtlijnen voor Heading 6 component", slug: "/heading-6", tags: ["Community"] },
    s = void 0,
    d = { unversionedId: "componenten/build/heading-6", id: "componenten/build/heading-6", title: "Heading 6", description: "UX richtlijnen voor Heading 6 component", source: "@site/docs/componenten/build/heading-6.mdx", sourceDirName: "componenten/build", slug: "/heading-6", permalink: "/heading-6", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/heading-6.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Heading 6", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Heading 6", pagination_label: "Heading 6", description: "UX richtlijnen voor Heading 6 component", slug: "/heading-6", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Heading 5", permalink: "/heading-5" }, next: { title: "Invalid form alert", permalink: "/invalid-form-alert" } },
    m = {},
    r = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: r },
    g = "wrapper";
   function h(e) {
    let { components: t, ...n } = e;
    return (0, a.kt)(g, (0, i.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "heading-6" }, "Heading 6"), (0, a.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, a.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, a.kt)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/heading-6--gemeente-utrecht", mdxType: "Story" }), (0, a.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, a.kt)("h3", { id: "css" }, "CSS"), (0, a.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css" }, "Heading 6 CSS implementatie van Gemeente Utrecht")), (0, a.kt)("li", { parentName: "ul" }, "Storybook: ", (0, a.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-6--default-story" }, "Heading 6 CSS storybook van Gemeente Utrecht"))), (0, a.kt)("h3", { id: "figma" }, "Figma"), (0, a.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, a.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" }, "Heading 6 Figma implementatie van NL Design System"))), (0, a.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, a.kt)("p", null, "De Heading 6 component staat bij NL Design System in de ", (0, a.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/114" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   h.isMDXComponent = !0;
  },
 },
]);
