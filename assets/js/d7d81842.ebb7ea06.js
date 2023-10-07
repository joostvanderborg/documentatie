"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2466],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => d, kt: () => k });
   var a = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
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
   function s(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     a,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       o = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var r = a.createContext({}),
    m = function (e) {
     var t = a.useContext(r),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
    },
    d = function (e) {
     var t = m(e.components);
     return a.createElement(r.Provider, { value: t }, e.children);
    },
    u = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    c = a.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      i = e.originalType,
      r = e.parentName,
      d = l(e, ["components", "mdxType", "originalType", "parentName"]),
      u = m(n),
      c = o,
      k = u["".concat(r, ".").concat(c)] || u[c] || p[c] || i;
     return n ? a.createElement(k, s(s({ ref: t }, d), {}, { components: n })) : a.createElement(k, s({ ref: t }, d));
    });
   function k(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var i = n.length,
      s = new Array(i);
     s[0] = c;
     var l = {};
     for (var r in t) hasOwnProperty.call(t, r) && (l[r] = t[r]);
     (l.originalType = e), (l[u] = "string" == typeof e ? e : o), (s[1] = l);
     for (var m = 2; m < i; m++) s[m] = n[m];
     return a.createElement.apply(null, s);
    }
    return a.createElement.apply(null, n);
   }
   c.displayName = "MDXCreateElement";
  },
  44221: (e, t, n) => {
   n.d(t, { P: () => m });
   var a = n(67294),
    o = n(86010);
   const i = { "status-visual__status": "status-visual__status_WLZ4", "status-visual__connector": "status-visual__connector_s1s2", "status-visual__status--help-wanted": "status-visual__status--help-wanted_YObc", "status-visual__status--community": "status-visual__status--community_bL0y", "status-visual__status--unstable": "status-visual__status--unstable_ztb4", "status-visual__status--stable": "status-visual__status--stable_y8aj", "status-visual__title": "status-visual__title_JRta", "status-visual__description": "status-visual__description_tQIN" };
   var s = n(87462);
   const l = "icon_fo5I",
    r = (e) => {
     let { className: t, ...n } = e;
     return a.createElement("svg", (0, s.Z)({ width: "14", height: "16", viewBox: "0 0 14 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: (0, o.Z)(l, t) }, n), a.createElement("path", { d: "M7 0C7.55228 0 8 0.447715 8 1L7.73285 14.3196L7.73487 14.3218L8 1V12.5858L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L7.70731 15.7069L7.70498 15.7092C7.60959 15.8041 7.49984 15.8757 7.38275 15.9241C7.2675 15.9719 7.14137 15.9988 7.00911 16L7.003 16L7 16L6.997 16L6.99235 16C6.85955 15.999 6.7329 15.9721 6.61722 15.9241C6.50195 15.8764 6.3938 15.8063 6.29945 15.7136L6.29289 15.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289C0.683417 7.90237 1.31658 7.90237 1.70711 8.29289L6 12.5858V1C6 0.447715 6.44772 0 7 0Z" }));
    },
    m = () => a.createElement("dl", { className: (0, o.Z)(i["status-visual"]) }, a.createElement("div", { className: (0, o.Z)(i["status-visual__status"], i["status-visual__status--help-wanted"]) }, a.createElement("dt", { className: (0, o.Z)(i["status-visual__title"]) }, "Help Wanted"), a.createElement("dd", { className: (0, o.Z)(i["status-visual__description"]) }, "Klaar om van de backlog opgepakt te worden")), a.createElement("div", { className: (0, o.Z)(i["status-visual__status"], i["status-visual__status--community"]) }, a.createElement(r, { className: (0, o.Z)(i["status-visual__connector"]) }), a.createElement("dt", { className: (0, o.Z)(i["status-visual__title"]) }, "Community"), a.createElement("dd", { className: (0, o.Z)(i["status-visual__description"]) }, "Door de community gebouwd volgens NLDS richtlijnen")), a.createElement("div", { className: (0, o.Z)(i["status-visual__status"], i["status-visual__status--unstable"]) }, a.createElement(r, { className: (0, o.Z)(i["status-visual__connector"]) }), a.createElement("dt", { className: (0, o.Z)(i["status-visual__title"]) }, "Candidate"), a.createElement("dd", { className: (0, o.Z)(i["status-visual__description"]) }, "NLDS component, maar is nog in ontwikkeling")), a.createElement("div", { className: (0, o.Z)(i["status-visual__status"], i["status-visual__status--stable"]) }, a.createElement(r, { className: (0, o.Z)(i["status-visual__connector"]) }), a.createElement("dt", { className: (0, o.Z)(i["status-visual__title"]) }, "Hall of Fame"), a.createElement("dd", { className: (0, o.Z)(i["status-visual__description"]) }, "NLDS component volgens onze Definition of Done")));
  },
  8005: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => m, contentTitle: () => l, default: () => c, frontMatter: () => s, metadata: () => r, toc: () => d });
   var a = n(87462),
    o = (n(67294), n(3905)),
    i = n(44221);
   const s = { title: "Definition of Done voor componenten", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Definition of Done", sidebar_position: 1, pagination_label: "Definition of Done", description: "Definition of Done voor componenten", keywords: ["componenten", "design system", "estafettemodel", "definition of done"] },
    l = "Definition of Done",
    r = { unversionedId: "componenten/definition-of-done", id: "componenten/definition-of-done", title: "Definition of Done voor componenten", description: "Definition of Done voor componenten", source: "@site/docs/componenten/definition-of-done.mdx", sourceDirName: "componenten", slug: "/componenten/definition-of-done", permalink: "/componenten/definition-of-done", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/definition-of-done.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "Definition of Done voor componenten", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Definition of Done", sidebar_position: 1, pagination_label: "Definition of Done", description: "Definition of Done voor componenten", keywords: ["componenten", "design system", "estafettemodel", "definition of done"] }, sidebar: "componenten", previous: { title: "Overzicht", permalink: "/componenten/" }, next: { title: "Accordion", permalink: "/accordion" } },
    m = {},
    d = [
     { value: "Estafettemodel", id: "estafettemodel", level: 2 },
     { value: "Help wanted", id: "help-wanted", level: 3 },
     { value: "Community", id: "community", level: 3 },
     { value: "Candidate", id: "candidate", level: 3 },
     { value: "Hall of fame", id: "hall-of-fame", level: 3 },
    ],
    u = { toc: d },
    p = "wrapper";
   function c(e) {
    let { components: t, ...n } = e;
    return (0, o.kt)(p, (0, a.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "definition-of-done" }, "Definition of Done"), (0, o.kt)("p", null, "Het NL Design System kent voor elke component vier verschillende statussen: 'Help wanted', 'Community', 'Candidate' en 'Hall of Fame'.\nVoor elk van deze statussen kun je een Definition of Done opstellen, waarbij het ultime doel van de 'Hall of Fame' status helemaal af is. Een 'Hall of Fame' component moet dus aan alle checks voldoen van 'Help wanted' tot en met 'Hall of Fame'."), (0, o.kt)("h2", { id: "estafettemodel" }, "Estafettemodel"), (0, o.kt)("p", null, "De componenten van NL Design System worden met een ", (0, o.kt)("a", { parentName: "p", href: "'/meedoen/estafettemodel'" }, "estafette aanpak"), " gemaakt. Daarom kan een component een van de volgende statussen hebben:"), (0, o.kt)(i.P, { mdxType: "StatusVisual" }), (0, o.kt)("h3", { id: "help-wanted" }, "Help wanted"), (0, o.kt)("p", null, "Dit component bestaat nog niet, maar de rationale is duidelijk, elke organisatie die hem nodig heeft kan hem ontwikkelen volgens NL Design System architectuur:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Staat in de publieke Backlog van NL Design System"), (0, o.kt)("li", { parentName: "ul" }, "Er is een rationale opgesteld wat het component is en waarom het nodig is"), (0, o.kt)("li", { parentName: "ul" }, "Kernteam en community verwachten dat het component voor meerdere organisaties inzetbaar kan zijn"), (0, o.kt)("li", { parentName: "ul" }, "De rationale is onderbouwd door gebruikersonderzoek (eigen of van andere design systems)"), (0, o.kt)("li", { parentName: "ul" }, "De rationale is door het kernteam gereviewed")), (0, o.kt)("h3", { id: "community" }, "Community"), (0, o.kt)("p", null, "Dit component bestaat in de community, op \xe9\xe9n of meer plekken. Om bij NL Design System als 'Community component' genoemd te worden moet het component naast alle 'Help wanted' criteria aan de volgende voorwaarden voldoen:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Component implementatie voldoet aan de rationale"), (0, o.kt)("li", { parentName: "ul" }, "Component is geclaimed door de organisatie in de publieke backlog"), (0, o.kt)("li", { parentName: "ul" }, "Component heeft de EUPL-1.2 licentie"), (0, o.kt)("li", { parentName: "ul" }, "Component UX en A11y documentatie heeft de Creative Commons 0 licentie (CC0)"), (0, o.kt)("li", { parentName: "ul" }, "Component API's zijn geprefixed met de prefix van de verantwoordelijke organisatie"), (0, o.kt)("li", { parentName: "ul" }, "Codebase van de component gebruikt linting en automatische code-formatting zoals Prettier"), (0, o.kt)("li", { parentName: "ul" }, "Component is vindbaar op de NL Design System website"), (0, o.kt)("li", { parentName: "ul" }, "Component staat in Storybook van de verantwoordelijke organisatie"), (0, o.kt)("li", { parentName: "ul" }, "Component is opgenomen in de Storybook met alle NL Design System thema's"), (0, o.kt)("li", { parentName: "ul" }, "Component is beschikbaar in de Figma bibliotheek van de verantwoordelijke organisatie"), (0, o.kt)("li", { parentName: "ul" }, "Component is besproken in het UX-overleg en/of tijdens de heartbeat en is klaar om door de community gebruikt te worden"), (0, o.kt)("li", { parentName: "ul" }, "Component voldoet aan de Definition of Done van de verantwoordelijke organisatie"), (0, o.kt)("li", { parentName: "ul" }, "Visuele regressietests zijn beschikbaar voor het component in de thema-storybook")), (0, o.kt)("h3", { id: "candidate" }, "Candidate"), (0, o.kt)("p", null, "Dit component is opgenomen in de ", (0, o.kt)("inlineCode", { parentName: "p" }, "@nl-design-system-unstable"), " organisatie. Het kernteam verwacht dat het component uiteindelijk een Hall of Fame status krijgt, maar kan nog niet garanderen dat API's niet wijzigen of er onverhoopt een ander vergelijkbaar component in de plaats komt.\nHet component moet mogelijk nog extra goed getest worden en extra stabiel worden gemaakt.\nOmdat het component wel door het kernteam onderhouden wordt voldoet het naast de meeste Community DoD eisen al wel aan veel meer criteria voor stabiel hergebruik:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Community component is ingezet door 2 of meer organisaties"), (0, o.kt)("li", { parentName: "ul" }, "Figma component in de NL Design System bibliotheek is in lijn met het component in code"), (0, o.kt)("li", { parentName: "ul" }, "Aliassen van (niet) geimplementeerde alternatieve componenten zijn vastgelegd in documentatie"), (0, o.kt)("li", { parentName: "ul" }, "Verwijzing naar extern gebruikersonderzoek die tot de keuze van dit component leiden"), (0, o.kt)("li", { parentName: "ul" }, "Component heeft documentatie in Storybook over hoe het te gebruiken"), (0, o.kt)("li", { parentName: "ul" }, "Accessibility/inclusie toolkit documentatie is beschikbaar voor de overwegingen die op dit component van toepassing zijn"), (0, o.kt)("li", { parentName: "ul" }, "Component is geschikt voor internationalisatie"), (0, o.kt)("li", { parentName: "ul" }, "Component kan omgaan met verschillende soorten content, zoals heel veel of juist heel weinig tekst etc."), (0, o.kt)("li", { parentName: "ul" }, "Component implementatie is op toegankelijkheid getoetst door leden van het kernteam"), (0, o.kt)("li", { parentName: "ul" }, "Semantiek van het component is goedgekeurd door het kernteam"), (0, o.kt)("li", { parentName: "ul" }, "Design tokens en API's zijn geprefixed met ", (0, o.kt)("inlineCode", { parentName: "li" }, "nl")), (0, o.kt)("li", { parentName: "ul" }, "Design tokens volgen conventies"), (0, o.kt)("li", { parentName: "ul" }, "Hergebruik van logische ", (0, o.kt)("inlineCode", { parentName: "li" }, "common"), " tokens is ge\xefmplementeerd om theming makkelijk te houden."), (0, o.kt)("li", { parentName: "ul" }, "API volgt conventies"), (0, o.kt)("li", { parentName: "ul" }, "NPM scope: ", (0, o.kt)("inlineCode", { parentName: "li" }, "@nl-design-system-unstable")), (0, o.kt)("li", { parentName: "ul" }, "Het component heeft geen organisatie specifieke API's meer, alle API's zijn gebaseerd op een gemeenschappelijke usecase"), (0, o.kt)("li", { parentName: "ul" }, "Alle design tokens zijn algemeen nuttig voor de thema's van bestaande publieke organisaties"), (0, o.kt)("li", { parentName: "ul" }, "Het component is geen monster component waar de documentatie of API's veel te complex zijn. Als nodig wordt de code van het community component opgeknipt en/of versimpeld"), (0, o.kt)("li", { parentName: "ul" }, "Component werkt in meerdere thema's"), (0, o.kt)("li", { parentName: "ul" }, "Component heeft regressietests voor ten minste 2 thema's"), (0, o.kt)("li", { parentName: "ul" }, "Changelog wordt gegenereerd"), (0, o.kt)("li", { parentName: "ul" }, "Component is in een heartbeat, andere publieke demo of nieuwsbrief getoond")), (0, o.kt)("h3", { id: "hall-of-fame" }, "Hall of fame"), (0, o.kt)("p", null, "Een component met deze status is bewezen door gebruikname in productie bij ten minste twee verschillende organisaties. Het component is daarmee in gebruik getest, zowel door developers als door gebruikers en heeft een toegankelijkheids audit succesvol doorlopen.\nHet gebruiksvriendelijk en toegankelijk gebruik van het component in context is goed gedocumenteerd, zodat designers en developers in staat zijn het component op de juiste manier in de context van hun eigen project in te zetten. Ook kan je ervan uitgaan dat de API's van het component, zoals Design Tokens en naamgeving stabiel blijven en worden updates vanaf nu voorzien van duidelijke changelogs en semantische versies die ", (0, o.kt)("inlineCode", { parentName: "p" }, "breaking changes"), " goed communiceren."), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Toegankelijk volgens audit"), (0, o.kt)("li", { parentName: "ul" }, "algemeen genoeg"), (0, o.kt)("li", { parentName: "ul" }, "Richtlijnen voor design tokens invullen"), (0, o.kt)("li", { parentName: "ul" }, "Richtlijnen voor toegankelijkheid inzetten"), (0, o.kt)("li", { parentName: "ul" }, "Documentatie: Do's en don'ts"), (0, o.kt)("li", { parentName: "ul" }, "Documentatie eventueel slecht gebruik met alternatieve component"), (0, o.kt)("li", { parentName: "ul" }, "Richtlijnen voor redacteuren"), (0, o.kt)("li", { parentName: "ul" }, "meerdere organisaties zijn tevreden"), (0, o.kt)("li", { parentName: "ul" }, "meerdere organisaties hebben component in toegankelijkheids audit getest"), (0, o.kt)("li", { parentName: "ul" }, "geen known issues voor a11y"), (0, o.kt)("li", { parentName: "ul" }, "Risico's m.b.t. beveiliging (security) zijn gedocumenteerd"), (0, o.kt)("li", { parentName: "ul" }, "Risico's m.b.t. privacy (AVG) zijn gedocumenteerd"), (0, o.kt)("li", { parentName: "ul" }, "npm scope: @nl-design-system"), (0, o.kt)("li", { parentName: "ul" }, "Getest met afnemers van design system: designer"), (0, o.kt)("li", { parentName: "ul" }, "Getest met afnemers van design system: developer"), (0, o.kt)("li", { parentName: "ul" }, "Getest met afnemers van design system: redacteur"), (0, o.kt)("li", { parentName: "ul" }, "Community (2+ organisaties) is geswitcht van eigen naar candidate component"), (0, o.kt)("li", { parentName: "ul" }, "Semver is goed geregeld"), (0, o.kt)("li", { parentName: "ul" }, "Semver linting is 'waterdicht'"), (0, o.kt)("li", { parentName: "ul" }, "Figma component is geversioneerd"), (0, o.kt)("li", { parentName: "ul" }, "Documentatie over updaten van het Figma component is compleet"), (0, o.kt)("li", { parentName: "ul" }, "Webcomponent of verschillende framework componenten beschikbaar"), (0, o.kt)("li", { parentName: "ul" }, "Component logica is opgenomen in regressietests")));
   }
   c.isMDXComponent = !0;
  },
 },
]);
