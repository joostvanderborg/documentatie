"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [93],
 {
  67001: (e, n, i) => {
   i.r(n), i.d(n, { assets: () => c, contentTitle: () => o, default: () => h, frontMatter: () => l, metadata: () => s, toc: () => d });
   var t = i(11527),
    r = i(27034);
   const l = { title: "Introductie richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Introductie", sidebar_position: 1, pagination_label: "Introductie", description: "Introductie richtlijnen NL Design System", keywords: ["richtlijnen", "design system", "documentatie"] },
    o = "Richtlijnen",
    s = { id: "richtlijnen/introductie", title: "Introductie richtlijnen NL Design System", description: "Introductie richtlijnen NL Design System", source: "@site/docs/richtlijnen/introductie.md", sourceDirName: "richtlijnen", slug: "/richtlijnen/introductie", permalink: "/richtlijnen/introductie", draft: !1, unlisted: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/introductie.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Introductie richtlijnen NL Design System", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Introductie", sidebar_position: 1, pagination_label: "Introductie", description: "Introductie richtlijnen NL Design System", keywords: ["richtlijnen", "design system", "documentatie"] }, sidebar: "richtlijnen", previous: { title: "Richtlijnen", permalink: "/richtlijnen" }, next: { title: "Tekst en taalgebruik", permalink: "/richtlijnen/tekst-en-taalgebruik/overzicht" } },
    c = {},
    d = [
     { value: "De richtlijnen zijn onderverdeeld in:", id: "de-richtlijnen-zijn-onderverdeeld-in", level: 2 },
     { value: "Aanvullingen of opmerkingen?", id: "aanvullingen-of-opmerkingen", level: 2 },
    ];
   function a(e) {
    const n = { a: "a", h1: "h1", h2: "h2", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components };
    return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)(n.h1, { id: "richtlijnen", children: "Richtlijnen" }), "\n", (0, t.jsx)(n.p, { children: "Het NL Design system geeft richtlijnen voor het bouwen van webcomponenten. Hierbij zijn we uitgegaan van toegankelijkheid, gebruikersvriendelijkheid en consistentie, ondersteund door gebruikersonderzoek." }), "\n", (0, t.jsx)(n.h2, { id: "de-richtlijnen-zijn-onderverdeeld-in", children: "De richtlijnen zijn onderverdeeld in:" }), "\n", (0, t.jsxs)(n.ul, { children: ["\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "/richtlijnen/tekst-en-taalgebruik", children: "Richtlijnen voor taalgebruik" }) }), "\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "/richtlijnen/stijl/", children: "Richtlijnen voor stijl" }) }), "\n", (0, t.jsx)(n.li, { children: (0, t.jsx)(n.a, { href: "/richtlijnen/formulieren/", children: "Richtlijnen voor formulieren" }) }), "\n"] }), "\n", (0, t.jsx)(n.h2, { id: "aanvullingen-of-opmerkingen", children: "Aanvullingen of opmerkingen?" }), "\n", (0, t.jsxs)(n.p, { children: ["Deze richtlijnen worden onderhouden door het NL Design System.\nHeb je aanvullingen of opmerkingen? ", (0, t.jsx)(n.a, { href: "https://github.com/nl-design-system/documentatie/issues", children: "Deel je mening op GitHub" }), "."] })] });
   }
   function h(e = {}) {
    const { wrapper: n } = { ...(0, r.a)(), ...e.components };
    return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
   }
  },
  27034: (e, n, i) => {
   i.d(n, { Z: () => s, a: () => o });
   var t = i(50959);
   const r = {},
    l = t.createContext(r);
   function o(e) {
    const n = t.useContext(l);
    return t.useMemo(
     function () {
      return "function" == typeof e ? e(n) : { ...n, ...e };
     },
     [n, e],
    );
   }
   function s(e) {
    let n;
    return (n = e.disableParentContext ? ("function" == typeof e.components ? e.components(r) : e.components || r) : o(e.components)), t.createElement(l.Provider, { value: n }, e.children);
   }
  },
 },
]);
