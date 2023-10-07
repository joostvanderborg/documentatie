"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2766],
 {
  61771: (e, t, a) => {
   a.d(t, { o: () => o });
   var n = a(76649),
    i = a(67294);
   const l = "story_PQo9",
    m = "story__link_f0vD",
    o = (e) => {
     let { label: t, href: a } = e;
     const o = a,
      r = a.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return i.createElement("div", { className: l }, i.createElement(n.Z, { src: r, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), i.createElement("a", { className: m, href: o, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  83070: (e, t, a) => {
   a.r(t), a.d(t, { assets: () => s, contentTitle: () => o, default: () => p, frontMatter: () => m, metadata: () => r, toc: () => d });
   var n = a(87462),
    i = (a(67294), a(3905)),
    l = a(61771);
   const m = { title: "Textarea", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Textarea", pagination_label: "Textarea", description: "UX richtlijnen voor Textarea component", slug: "/textarea", tags: ["Community"] },
    o = void 0,
    r = { unversionedId: "componenten/build/textarea", id: "componenten/build/textarea", title: "Textarea", description: "UX richtlijnen voor Textarea component", source: "@site/docs/componenten/build/textarea.mdx", sourceDirName: "componenten/build", slug: "/textarea", permalink: "/textarea", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/textarea.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Textarea", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Textarea", pagination_label: "Textarea", description: "UX richtlijnen voor Textarea component", slug: "/textarea", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Text input", permalink: "/text-input" }, next: { title: "Toggletip", permalink: "/toggletip" } },
    s = {},
    d = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "React", id: "react", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    h = { toc: d },
    c = "wrapper";
   function p(e) {
    let { components: t, ...a } = e;
    return (0, i.kt)(c, (0, n.Z)({}, h, a, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "textarea" }, "Textarea"), (0, i.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, i.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, i.kt)(l.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/textarea--gemeente-utrecht", mdxType: "Story" }), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "css" }, "CSS"), (0, i.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/textarea/css" }, "Textarea CSS implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textarea--default-story" }, "Textarea CSS storybook van Gemeente Utrecht"))), (0, i.kt)("h3", { id: "html" }, "HTML"), (0, i.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/textarea/html" }, "Textarea HTML implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textarea--default-story" }, "Textarea HTML storybook van Gemeente Utrecht"))), (0, i.kt)("h3", { id: "react" }, "React"), (0, i.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/TextArea" }, "Textarea React implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-text-area--default-story" }, "Textarea React storybook van Gemeente Den Haag"))), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=7062%3A17687" }, "Textarea Figma implementatie van Gemeente Den Haag"))), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=969-2047" }, "Textarea Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Textarea component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/40" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
