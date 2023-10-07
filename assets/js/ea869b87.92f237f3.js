"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8394],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => d });
   var i = n(76649),
    s = n(67294);
   const l = "story_PQo9",
    o = "story__link_f0vD",
    d = (e) => {
     let { label: t, href: n } = e;
     const d = n,
      a = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return s.createElement("div", { className: l }, s.createElement(i.Z, { src: a, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), s.createElement("a", { className: o, href: d, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  15558: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => d, default: () => h, frontMatter: () => o, metadata: () => a, toc: () => m });
   var i = n(87462),
    s = (n(67294), n(3905)),
    l = n(61771);
   const o = { title: "Fieldset", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Fieldset", pagination_label: "Fieldset", description: "UX richtlijnen voor Fieldset component", slug: "/fieldset", tags: ["Community"] },
    d = void 0,
    a = { unversionedId: "componenten/build/fieldset", id: "componenten/build/fieldset", title: "Fieldset", description: "UX richtlijnen voor Fieldset component", source: "@site/docs/componenten/build/fieldset.mdx", sourceDirName: "componenten/build", slug: "/fieldset", permalink: "/fieldset", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/fieldset.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Fieldset", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Fieldset", pagination_label: "Fieldset", description: "UX richtlijnen voor Fieldset component", slug: "/fieldset", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Dot badge", permalink: "/dot-badge" }, next: { title: "Figure", permalink: "/figure" } },
    r = {},
    m = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: m },
    p = "wrapper";
   function h(e) {
    let { components: t, ...n } = e;
    return (0, s.kt)(p, (0, i.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, s.kt)("h1", { id: "fieldset" }, "Fieldset"), (0, s.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, s.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, s.kt)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/fieldset--gemeente-utrecht", mdxType: "Story" }), (0, s.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, s.kt)("h3", { id: "css" }, "CSS"), (0, s.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, s.kt)("ul", null, (0, s.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, s.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/form-fieldset/css" }, "Fieldset CSS implementatie van Gemeente Utrecht")), (0, s.kt)("li", { parentName: "ul" }, "Storybook: ", (0, s.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-fieldset--default-story" }, "Fieldset CSS storybook van Gemeente Utrecht"))), (0, s.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, s.kt)("p", null, "De Fieldset component staat bij NL Design System in de ", (0, s.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/124" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   h.isMDXComponent = !0;
  },
 },
]);
