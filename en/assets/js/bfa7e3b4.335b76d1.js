"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2482],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => g });
   var a = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     n &&
      (a = a.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a);
    }
    return t;
   }
   function o(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     a,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       a,
       r = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (t = i[a]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var s = a.createContext({}),
    d = function (e) {
     var n = a.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return a.createElement(s.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return a.createElement(a.Fragment, {}, n);
     },
    },
    k = a.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = d(t),
      k = r,
      g = p["".concat(s, ".").concat(k)] || p[k] || u[k] || i;
     return t ? a.createElement(g, o(o({ ref: n }, m), {}, { components: t })) : a.createElement(g, o({ ref: n }, m));
    });
   function g(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var i = t.length,
      o = new Array(i);
     o[0] = k;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : r), (o[1] = l);
     for (var d = 2; d < i; d++) o[d] = t[d];
     return a.createElement.apply(null, o);
    }
    return a.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  85785: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => o, default: () => u, frontMatter: () => i, metadata: () => l, toc: () => d });
   var a = t(87462),
    r = (t(67294), t(3905));
   const i = { title: "Meedoen als designer - Introductie", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Introductie", sidebar_position: 1, pagination_label: "Index", description: "Het startpunt voor designers die willen meedoen met het NL Design System.", keywords: ["index", "designer", "meedoen"] },
    o = "Meedoen als designer",
    l = { unversionedId: "meedoen/als-designer/README", id: "meedoen/als-designer/README", title: "Meedoen als designer - Introductie", description: "Het startpunt voor designers die willen meedoen met het NL Design System.", source: "@site/docs/meedoen/als-designer/README.md", sourceDirName: "meedoen/als-designer", slug: "/meedoen/als-designer/", permalink: "/en/meedoen/als-designer/", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-designer/README.md", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Meedoen als designer - Introductie", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Introductie", sidebar_position: 1, pagination_label: "Index", description: "Het startpunt voor designers die willen meedoen met het NL Design System.", keywords: ["index", "designer", "meedoen"] }, sidebar: "meedoen", previous: { title: "Voor designers", permalink: "/en/meedoen/als-designer/overzicht" }, next: { title: "Figma structuur", permalink: "/en/meedoen/als-designer/figma-structuur" } },
    s = {},
    d = [
     { value: "Introductie", id: "introductie", level: 2 },
     { value: "Welkom designer \ud83d\udc4b", id: "welkom-designer-", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 3 },
     { value: "Het kernteam", id: "het-kernteam", level: 3 },
     { value: "De community", id: "de-community", level: 3 },
     { value: "Ontwerpprogramma\u2019s", id: "ontwerpprogrammas", level: 2 },
     { value: "Design tokens", id: "design-tokens", level: 2 },
     { value: "Design tokens en Figma", id: "design-tokens-en-figma", level: 3 },
     { value: "Stijl, componenten, patronen en templates", id: "stijl-componenten-patronen-en-templates", level: 2 },
     { value: "Stijl", id: "stijl", level: 3 },
     { value: "Voorbeeld thema", id: "voorbeeld-thema", level: 4 },
     { value: "Componenten", id: "componenten", level: 3 },
     { value: "Bijdragen aan componenten", id: "bijdragen-aan-componenten", level: 4 },
     { value: "Patronen en Templates", id: "patronen-en-templates", level: 3 },
     { value: "Bijdragen aan patronen en templates", id: "bijdragen-aan-patronen-en-templates", level: 4 },
     { value: "Tekst en taalgebruik", id: "tekst-en-taalgebruik", level: 3 },
     { value: "Onderzoek", id: "onderzoek", level: 3 },
     { value: "Op de hoogte blijven", id: "op-de-hoogte-blijven", level: 2 },
     { value: "Help deze documentatie te verbeteren", id: "help-deze-documentatie-te-verbeteren", level: 2 },
     { value: "Vragen", id: "vragen", level: 2 },
    ],
    m = { toc: d },
    p = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(p, (0, a.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "meedoen-als-designer" }, "Meedoen als designer"), (0, r.kt)("h2", { id: "introductie" }, "Introductie"), (0, r.kt)("h3", { id: "welkom-designer-" }, "Welkom designer \ud83d\udc4b"), (0, r.kt)("p", null, "Leuk dat je er bent! Of je nu mee wilt helpen aan het NL Design System of simpelweg even wilt rondneuzen, als designer is dit een goed startpunt."), (0, r.kt)("h3", { id: "nl-design-system" }, "NL Design System"), (0, r.kt)("p", null, "Het NL Design System zit net even anders in elkaar als andere Design Systems. Niet gericht op \xe9\xe9n organisatie maar een verzameling van componenten, patronen en richtlijnen, waar iedere overheidsorganisatie zijn eigen huisstijl op kan toepassen."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/introductie" }, "Meer informatie het NL Design System")), (0, r.kt)("h3", { id: "het-kernteam" }, "Het kernteam"), (0, r.kt)("p", null, "Er is een vast kernteam dat werkt aan het NL Design System. Het kernteam werkt op dagelijkse basis samen met verschillende disciplines vanuit de community. Denk aan designers, developers maar ook copywriters en accessibility specialisten."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "Meer informatie over het Kernteam")), (0, r.kt)("h3", { id: "de-community" }, "De community"), (0, r.kt)("p", null, "Binnen de community zijn designers bezig met verschillende projecten. Door als designers samen te werken kunnen we informatie en inzichten met elkaar uitwisselen. Zo leren we elke keer iets bij."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/als-designer/community" }, "Meer informatie over de community voor designers")), (0, r.kt)("h2", { id: "ontwerpprogrammas" }, "Ontwerpprogramma\u2019s"), (0, r.kt)("p", null, "Of je nu Sketch, Adobe XD, Framer, of Paint gebruikt, er is geen afhankelijkheid als het gaat om ontwerpprogramma. Wel hebben het kernteam, en reeds aangesloten organisaties een voorkeur voor Figma."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/als-designer/figma-structuur" }, "Meer informatie over Figma structuur en gebruik")), (0, r.kt)("h2", { id: "design-tokens" }, "Design tokens"), (0, r.kt)("p", null, "De componenten van het NL Design System hebben van zichzelf geen specifieke huisstijl. Iedere organisatie kan zijn eigen huisstijl op de componenten toepassen. Om dat voor elkaar te krijgen maken we gebruik van \u2018Design tokens\u2019."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/design-tokens/" }, "Meer informatie over design tokens")), (0, r.kt)("h3", { id: "design-tokens-en-figma" }, "Design tokens en Figma"), (0, r.kt)("p", null, "Op dit moment biedt Figma, net als alle andere ontwerpprogramma's, geen ondersteuning voor design tokens. Daarom maken we gebruik van de ", (0, r.kt)("a", { parentName: "p", href: "https://tokens.studio/" }, "Token Studio"), "."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/als-designer/figma-structuur" }, "Meer informatie over Figma structuur en gebruik")), (0, r.kt)("h2", { id: "stijl-componenten-patronen-en-templates" }, "Stijl, componenten, patronen en templates"), (0, r.kt)("h3", { id: "stijl" }, "Stijl"), (0, r.kt)("p", null, "Zoals aangegeven kan iedere organisatie zijn eigen huisstijl toepassen. En toch bieden we vanuit het NL Design System documentatie aan rondom stijl. Hier vind je richtlijnen en tips die je kunt meenemen bij het toepassen van je eigen huisstijl."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/richtlijnen/stijl/" }, "Bekijk de stijl documentatie")), (0, r.kt)("h4", { id: "voorbeeld-thema" }, "Voorbeeld thema"), (0, r.kt)("p", null, "Het NL Design System heeft van zichzelf geen huisstijl. Maar om de werking en kracht van design tokens aan te tonen maken we wel gebruik van een ", (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/als-designer/voorbeeld-thema" }, "\u2018Voorbeeld\u2019 thema"), "."), (0, r.kt)("h3", { id: "componenten" }, "Componenten"), (0, r.kt)("p", null, "Het NL Design System bevat een heleboel componenten. Die hebben we allemaal op een rijtje gezet."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/componenten/" }, "Bekijk het componenten overzicht")), (0, r.kt)("p", null, "Op componenten passen we het estafettemodel toe."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/estafettemodel" }, "Meer informatie over het estafettemodel")), (0, r.kt)("p", null, "Op dit moment zijn we druk bezig om de NL Design System Figma Bibliotheek te vullen met 'Community' componenten. Geleidelijk aan zullen deze de status 'Candidate' en 'Hall of Fame' gaan krijgen."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/als-designer/figma-structuur" }, "Meer informatie over Figma structuur en gebruik")), (0, r.kt)("h4", { id: "bijdragen-aan-componenten" }, "Bijdragen aan componenten"), (0, r.kt)("p", null, "Mis je een component? Zou je een component graag aangepast zien? Heb je input voor de documentatie? Of nog beter heb je ooit onderzoek gedaan naar een component?"), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "Neem contact op"), ", dan zetten we het component op ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/projects/1" }, "de backlog"), "."), (0, r.kt)("h3", { id: "patronen-en-templates" }, "Patronen en Templates"), (0, r.kt)("p", null, "Op dit moment ligt onze focus bij de componenten. Maar die componenten komen natuurlijk pas echt tot leven wanneer zij binnen een patroon of template worden toegepast."), (0, r.kt)("p", null, "Daarom willen we alvast een lijst opstellen van patronen en templates die voor verschillende organisaties van toepassing kunnen zijn. Zelf denken we aan een zoekresultaat met filter en sorteer opties. Maar ook aan een formulier dat uit meerdere stappen bestaat."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/voorbeelden/" }, "Bekijk het patronen en templates overzicht")), (0, r.kt)("h4", { id: "bijdragen-aan-patronen-en-templates" }, "Bijdragen aan patronen en templates"), (0, r.kt)("p", null, "Mis je een patroon of template? Heb je input voor de documentatie? Of nog beter, heb je ooit onderzoek gedaan naar een patroon of template?"), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "Neem contact op"), ", dan zetten we het patroon of template op ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/projects/1" }, "de backlog"), "."), (0, r.kt)("h3", { id: "tekst-en-taalgebruik" }, "Tekst en taalgebruik"), (0, r.kt)("p", null, "We hebben richtlijnen beschikbaar voor tekst en taalgebruik."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/richtlijnen/tekst-en-taalgebruik" }, "Bekijk de richtlijnen voor tekst en taalgebruik")), (0, r.kt)("h3", { id: "onderzoek" }, "Onderzoek"), (0, r.kt)("p", null, "Design, code en documentatie stoelen we graag op onderzoek. Hiervoor speuren we het web af naar inzichten. Maar we vragen ook de community, jou dus, om hulp. Heb je gebruikersonderzoek gedaan en inzichten opgedaan die voor de gehele community waardevol zijn? Dan horen we dat graag."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "/en/onderzoek/" }, "Bekijk het onderzoek overzicht")), (0, r.kt)("h2", { id: "op-de-hoogte-blijven" }, "Op de hoogte blijven"), (0, r.kt)("p", null, "Wil je niets missen van de ontwikkelingen van het NL Design System? Er zijn ", (0, r.kt)("a", { parentName: "p", href: "/en/project/blijf-op-de-hoogte" }, "verschillende manieren om op de hoogte te blijven"), "."), (0, r.kt)("hr", null), (0, r.kt)("h2", { id: "help-deze-documentatie-te-verbeteren" }, "Help deze documentatie te verbeteren"), (0, r.kt)("p", null, "Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via Github."), (0, r.kt)("h2", { id: "vragen" }, "Vragen"), (0, r.kt)("p", null, "Heb je een vraag? Twijfel niet en ", (0, r.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "neem contact op met het kernteam"), "."));
   }
   u.isMDXComponent = !0;
  },
 },
]);
