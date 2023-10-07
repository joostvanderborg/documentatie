"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [294],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => o });
   var l = n(76649),
    i = n(67294);
   const a = "story_PQo9",
    s = "story__link_f0vD",
    o = (e) => {
     let { label: t, href: n } = e;
     const o = n,
      m = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return i.createElement("div", { className: a }, i.createElement(l.Z, { src: m, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), i.createElement("a", { className: s, href: o, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  23615: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => c, contentTitle: () => o, default: () => p, frontMatter: () => s, metadata: () => m, toc: () => r });
   var l = n(87462),
    i = (n(67294), n(3905)),
    a = n(61771);
   const s = { title: "Select", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Select", pagination_label: "Select", description: "UX richtlijnen voor Select component", slug: "/select", tags: ["Community"] },
    o = void 0,
    m = { unversionedId: "componenten/build/select", id: "componenten/build/select", title: "Select", description: "UX richtlijnen voor Select component", source: "@site/docs/componenten/build/select.mdx", sourceDirName: "componenten/build", slug: "/select", permalink: "/en/select", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/select.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Select", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Select", pagination_label: "Select", description: "UX richtlijnen voor Select component", slug: "/select", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Rich text content", permalink: "/en/rich-text-content" }, next: { title: "Separator", permalink: "/en/separator" } },
    c = {},
    r = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    d = { toc: r },
    h = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(h, (0, l.Z)({}, d, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "select" }, "Select"), (0, i.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, i.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, i.kt)(a.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/select--gemeente-utrecht", mdxType: "Story" }), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "css" }, "CSS"), (0, i.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/select" }, "Select CSS implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-select--default-story" }, "Select CSS storybook van Gemeente Utrecht"))), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1130-3652" }, "Select Figma implementatie van NL Design System"))), (0, i.kt)("h3", { id: "react" }, "React"), (0, i.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/blob/main/components/Select/src/index.tsx" }, "Select React implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: (nog) geen story beschikbaar")), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Select component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/34" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
