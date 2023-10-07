"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1318],
 {
  61771: (e, t, n) => {
   n.d(t, { o: () => m });
   var o = n(76649),
    i = n(67294);
   const a = "story_PQo9",
    l = "story__link_f0vD",
    m = (e) => {
     let { label: t, href: n } = e;
     const m = n,
      s = n.replace("?path=/docs/", "iframe.html?id=") + "&viewMode=story";
     return i.createElement("div", { className: a }, i.createElement(o.Z, { src: s, style: { width: "1px", minWidth: "100%" }, heightCalculationMethod: "lowestElement" }), i.createElement("a", { className: l, href: m, target: "_blank", rel: "noreferrer" }, t));
    };
  },
  17347: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => r, contentTitle: () => m, default: () => p, frontMatter: () => l, metadata: () => s, toc: () => u });
   var o = n(87462),
    i = (n(67294), n(3905)),
    a = n(61771);
   const l = { title: "Button", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Button", pagination_label: "Button", description: "UX richtlijnen voor Button component", slug: "/button", tags: ["Community"] },
    m = void 0,
    s = { unversionedId: "componenten/build/button", id: "componenten/build/button", title: "Button", description: "UX richtlijnen voor Button component", source: "@site/docs/componenten/build/button.mdx", sourceDirName: "componenten/build", slug: "/button", permalink: "/en/button", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/button.mdx", tags: [{ label: "Community", permalink: "/en/tags/community" }], version: "current", frontMatter: { title: "Button", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Button", pagination_label: "Button", description: "UX richtlijnen voor Button component", slug: "/button", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Button group", permalink: "/en/button-group" }, next: { title: "Card as link", permalink: "/en/card-as-link" } },
    r = {},
    u = [
     { value: "Voorbeeld", id: "voorbeeld", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-2", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag-1", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    h = { toc: u },
    d = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(d, (0, o.Z)({}, h, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "button" }, "Button"), (0, i.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, i.kt)("h2", { id: "voorbeeld" }, "Voorbeeld"), (0, i.kt)(a.o, { label: "https://nl-design-system.github.io/themes/", href: "https://nl-design-system.github.io/themes/?path=/docs/button--gemeente-utrecht", mdxType: "Story" }), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "css" }, "CSS"), (0, i.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/button/css" }, "Button CSS implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-button--button" }, "Button CSS storybook van Gemeente Utrecht"))), (0, i.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/Button" }, "Button CSS implementatie van Gemeente Den Haag")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/docs/css-input-button--default-story" }, "Button CSS storybook van Gemeente Den Haag"))), (0, i.kt)("h3", { id: "html" }, "HTML"), (0, i.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/button/html" }, "Button HTML implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-button--button" }, "Button HTML storybook van Gemeente Utrecht"))), (0, i.kt)("h3", { id: "web-component" }, "Web Component"), (0, i.kt)("h4", { id: "gemeente-utrecht-2" }, "Gemeente Utrecht"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/button/web-component" }, "Button Web Component implementatie van Gemeente Utrecht")), (0, i.kt)("li", { parentName: "ul" }, "Storybook: ", (0, i.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-button--button" }, "Button Web Component storybook van Gemeente Utrecht"))), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1138" }, "Button Figma implementatie van NL Design System"))), (0, i.kt)("h4", { id: "gemeente-den-haag-1" }, "Gemeente Den Haag"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1%3A656" }, "Button Figma implementatie van Gemeente Den Haag"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Button component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/38" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
