"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9211],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => u, kt: () => p });
   var a = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function l(e, t) {
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
      ? l(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function o(e, t) {
    if (null == e) return {};
    var n,
     a,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       i = {},
       l = Object.keys(e);
      for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var r = a.createContext({}),
    d = function (e) {
     var t = a.useContext(r),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : s(s({}, t), e)), n;
    },
    u = function (e) {
     var t = d(e.components);
     return a.createElement(r.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    k = a.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      l = e.originalType,
      r = e.parentName,
      u = o(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(n),
      k = i,
      p = m["".concat(r, ".").concat(k)] || m[k] || c[k] || l;
     return n ? a.createElement(p, s(s({ ref: t }, u), {}, { components: n })) : a.createElement(p, s({ ref: t }, u));
    });
   function p(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var l = n.length,
      s = new Array(l);
     s[0] = k;
     var o = {};
     for (var r in t) hasOwnProperty.call(t, r) && (o[r] = t[r]);
     (o.originalType = e), (o[m] = "string" == typeof e ? e : i), (s[1] = o);
     for (var d = 2; d < l; d++) s[d] = n[d];
     return a.createElement.apply(null, s);
    }
    return a.createElement.apply(null, n);
   }
   k.displayName = "MDXCreateElement";
  },
  44221: (e, t, n) => {
   n.d(t, { P: () => d });
   var a = n(67294),
    i = n(86010);
   const l = { "status-visual__status": "status-visual__status_WLZ4", "status-visual__connector": "status-visual__connector_s1s2", "status-visual__status--help-wanted": "status-visual__status--help-wanted_YObc", "status-visual__status--community": "status-visual__status--community_bL0y", "status-visual__status--unstable": "status-visual__status--unstable_ztb4", "status-visual__status--stable": "status-visual__status--stable_y8aj", "status-visual__title": "status-visual__title_JRta", "status-visual__description": "status-visual__description_tQIN" };
   var s = n(87462);
   const o = "icon_fo5I",
    r = (e) => {
     let { className: t, ...n } = e;
     return a.createElement("svg", (0, s.Z)({ width: "14", height: "16", viewBox: "0 0 14 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: (0, i.Z)(o, t) }, n), a.createElement("path", { d: "M7 0C7.55228 0 8 0.447715 8 1L7.73285 14.3196L7.73487 14.3218L8 1V12.5858L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L7.70731 15.7069L7.70498 15.7092C7.60959 15.8041 7.49984 15.8757 7.38275 15.9241C7.2675 15.9719 7.14137 15.9988 7.00911 16L7.003 16L7 16L6.997 16L6.99235 16C6.85955 15.999 6.7329 15.9721 6.61722 15.9241C6.50195 15.8764 6.3938 15.8063 6.29945 15.7136L6.29289 15.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289C0.683417 7.90237 1.31658 7.90237 1.70711 8.29289L6 12.5858V1C6 0.447715 6.44772 0 7 0Z" }));
    },
    d = () => a.createElement("dl", { className: (0, i.Z)(l["status-visual"]) }, a.createElement("div", { className: (0, i.Z)(l["status-visual__status"], l["status-visual__status--help-wanted"]) }, a.createElement("dt", { className: (0, i.Z)(l["status-visual__title"]) }, "Help Wanted"), a.createElement("dd", { className: (0, i.Z)(l["status-visual__description"]) }, "Klaar om van de backlog opgepakt te worden")), a.createElement("div", { className: (0, i.Z)(l["status-visual__status"], l["status-visual__status--community"]) }, a.createElement(r, { className: (0, i.Z)(l["status-visual__connector"]) }), a.createElement("dt", { className: (0, i.Z)(l["status-visual__title"]) }, "Community"), a.createElement("dd", { className: (0, i.Z)(l["status-visual__description"]) }, "Door de community gebouwd volgens NLDS richtlijnen")), a.createElement("div", { className: (0, i.Z)(l["status-visual__status"], l["status-visual__status--unstable"]) }, a.createElement(r, { className: (0, i.Z)(l["status-visual__connector"]) }), a.createElement("dt", { className: (0, i.Z)(l["status-visual__title"]) }, "Candidate"), a.createElement("dd", { className: (0, i.Z)(l["status-visual__description"]) }, "NLDS component, maar is nog in ontwikkeling")), a.createElement("div", { className: (0, i.Z)(l["status-visual__status"], l["status-visual__status--stable"]) }, a.createElement(r, { className: (0, i.Z)(l["status-visual__connector"]) }), a.createElement("dt", { className: (0, i.Z)(l["status-visual__title"]) }, "Hall of Fame"), a.createElement("dd", { className: (0, i.Z)(l["status-visual__description"]) }, "NLDS component volgens onze Definition of Done")));
  },
  59756: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => d, contentTitle: () => o, default: () => k, frontMatter: () => s, metadata: () => r, toc: () => u });
   var a = n(87462),
    i = (n(67294), n(3905)),
    l = n(44221);
   const s = { title: "Estafettemodel", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Estafettemodel", sidebar_position: 2, pagination_label: "Estafettemodel", description: "Het estafettemodel van NL Design System is een aanpak om samen de beste en meest bruikbare componenten, richtlijnen en patronen te maken.", keywords: ["design token", "design tokens", "naamgeving"] },
    o = void 0,
    r = { unversionedId: "meedoen/estafettemodel", id: "meedoen/estafettemodel", title: "Estafettemodel", description: "Het estafettemodel van NL Design System is een aanpak om samen de beste en meest bruikbare componenten, richtlijnen en patronen te maken.", source: "@site/docs/meedoen/estafettemodel.mdx", sourceDirName: "meedoen", slug: "/meedoen/estafettemodel", permalink: "/meedoen/estafettemodel", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/estafettemodel.mdx", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Estafettemodel", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Estafettemodel", sidebar_position: 2, pagination_label: "Estafettemodel", description: "Het estafettemodel van NL Design System is een aanpak om samen de beste en meest bruikbare componenten, richtlijnen en patronen te maken.", keywords: ["design token", "design tokens", "naamgeving"] }, sidebar: "meedoen", previous: { title: "Introductie", permalink: "/meedoen/introductie" }, next: { title: "Design Tokens - Introductie", permalink: "/meedoen/design-tokens/" } },
    d = {},
    u = [
     { value: "Help Wanted", id: "help-wanted", level: 2 },
     { value: "Doelen", id: "doelen", level: 3 },
     { value: "Community", id: "community", level: 2 },
     { value: "Doelen", id: "doelen-1", level: 3 },
     { value: "Candidate", id: "candidate", level: 2 },
     { value: "Doelen", id: "doelen-2", level: 3 },
     { value: "Hall of Fame", id: "hall-of-fame", level: 2 },
     { value: "Doelen", id: "doelen-3", level: 3 },
     { value: "Discouraged", id: "discouraged", level: 2 },
     { value: "Doelen", id: "doelen-4", level: 3 },
    ],
    m = { toc: u },
    c = "wrapper";
   function k(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(c, (0, a.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "estafettemodel" }, "Estafettemodel"), (0, i.kt)("p", null, "Het estafettemodel van NL Design System is een aanpak om samen de beste en meest bruikbare componenten, patronen en richtlijnen te maken."), (0, i.kt)("p", null, 'Om niet telkens "component, patroon of richtlijn" te zeggen noemen we dit samen een "onderdeel" van NL Design System.'), (0, i.kt)("p", null, 'Een nieuw onderdeel volgt het estafette model en beweegt zich in een samenwerking tussen het kernteam en de community van "Help Wanted" naar "Community" naar "Candidate" en beland als hij helemaal af en herbruikbaar is in de "Hall of Fame".'), (0, i.kt)(l.P, { mdxType: "StatusVisual" }), (0, i.kt)("p", null, "Elke status heeft zijn eigen doelen en voor elke toevoeging aan het design system hebben we een Definition of Done dat valideert of we de doelen van een status hebben gehaald. Hieronder beschrijven we deze per status."), (0, i.kt)("h2", { id: "help-wanted" }, "Help Wanted"), (0, i.kt)("p", null, "Klaar om van de backlog opgepakt te worden door de community."), (0, i.kt)("p", null, "Bestaat nog niet, maar de rationale is duidelijk, elke organisatie die hem nodig heeft kan het onderdeel ontwikkelen volgens NL Design System architectuur."), (0, i.kt)("h3", { id: "doelen" }, "Doelen"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Teams aan elkaar koppelen die hetzelfde willen."), (0, i.kt)("li", { parentName: "ul" }, "In een vroeg stadium acceptatiecriteria vastleggen met kennis uit de community en het kernteam."), (0, i.kt)("li", { parentName: "ul" }, "Nieuwe idee\xebn kunnen meegenomen worden door de community wanneer zij gebruikersonderzoek doen."), (0, i.kt)("li", { parentName: "ul" }, "Bewijs verzamelen dat een onderdeel door meerdere organisaties en producten gebruikt kan worden."), (0, i.kt)("li", { parentName: "ul" }, 'Zeker stellen dat een onderdeel aan de toegankelijkheidseisen kan voldoen en gebruiksvriendelijk kan zijn. Anders zal het als "Discouraged" aangemerkt worden.')), (0, i.kt)("h2", { id: "community" }, "Community"), (0, i.kt)("p", null, "Door de community gebouwd volgens NL Design System richtlijnen."), (0, i.kt)("p", null, 'Bestaat in de community, op \xe9\xe9n of meer plekken en voldoet aan de checklist tot en met "Community".'), (0, i.kt)("h3", { id: "doelen-1" }, "Doelen"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Teams kunnen met vertrouwen een onderdeel van elkaar gebruiken."), (0, i.kt)("li", { parentName: "ul" }, "Teams kunnen zelfstandig aan de slag, kernteam vormt geen bottleneck."), (0, i.kt)("li", { parentName: "ul" }, "Teams kunnen concurrerende versies hebben van hetzelfde onderdeel."), (0, i.kt)("li", { parentName: "ul" }, "Validatie dat een onderdeel door meerdere organisaties en producten gebruikt wordt."), (0, i.kt)("li", { parentName: "ul" }, 'Teams kunnen op elkaars onderdeel door ontwikkelen zodat de overlap duidelijk wordt voor doorontwikkeling naar "Candidate".'), (0, i.kt)("li", { parentName: "ul" }, 'Innovatie op bestaande NL Design System "Candidate" of "Hall of Fame" mogelijk door "Community" uitbreiding op het bestaande onderdeel.')), (0, i.kt)("h2", { id: "candidate" }, "Candidate"), (0, i.kt)("p", null, "Voorstel voor een hall-of-fame onderdeel, maar input en documentatie worden nog verzameld."), (0, i.kt)("p", null, 'Voldoet aan de checklist tot en met "Candidate". Het kernteam verwacht dat het uiteindelijk een "Hall of Fame" status krijgt. We verwachten dat er nog wijzigen kunnen zijn. Het onderdeel moet nog goed getest worden en stabiel worden gemaakt.'), (0, i.kt)("h3", { id: "doelen-2" }, "Doelen"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Teams kunnen met vertrouwen het onderdeel van NL Design System gebruiken."), (0, i.kt)("li", { parentName: "ul" }, "Gedeeld ownership tussen kernteam en meerdere andere teams."), (0, i.kt)("li", { parentName: "ul" }, "Voorstel voor een onderdeel zonder controversi\xeble delen. Verschillende idee\xebn in de community teruggebracht tot \xe9\xe9n gemene deler."), (0, i.kt)("li", { parentName: "ul" }, 'Controversi\xeble delen met "Community" status kunnen in de community blijven bestaan of worden aangepast naar een aanvulling op het nieuwe "Candidate" onderdeel.'), (0, i.kt)("li", { parentName: "ul" }, 'Zichtbaarheid geven tijdens "request for comments" periode. Zo kunnen essenti\xeble aanvulingen en aanpassingen getest worden voordat het onderdeel volledig stabiel moet zijn.'), (0, i.kt)("li", { parentName: "ul" }, "Bruikbaar voor meeste huisstijlen in de publieke sector."), (0, i.kt)("li", { parentName: "ul" }, 'Naamgeving in lijn met conventies van bestaande NL Design System "Candidate" en "Hall of Fame" onderdelen.'), (0, i.kt)("li", { parentName: "ul" }, "Robuust maken. Onderdeel kan in verschillende omgevingen ingezet worden en heeft een duidelijke beschrijving wanneer het van toepassing is."), (0, i.kt)("li", { parentName: "ul" }, "Onderdeel is behoorlijk stabiel en we verwachten dat er vanaf nu nog weinig veranderingen nodig zijn."), (0, i.kt)("li", { parentName: "ul" }, "Best effort op toegankelijkheid. Specialisten uit het kernteam hebben het onderdeel gevalideerd en eventuele documentatie en verbeteringen zijn toegevoegd."), (0, i.kt)("li", { parentName: "ul" }, "Voor componenten: Samenwerking tussen developers en designers is mogelijk gemaakt")), (0, i.kt)("h2", { id: "hall-of-fame" }, "Hall of Fame"), (0, i.kt)("p", null, "Stabiel NLDS onderdeel met garanties voor herbruikbaarheid, toegankelijkheid en stabiliteit."), (0, i.kt)("p", null, "Is bewezen door gebruik in productie bij ten minste twee verschillende organisaties. Het onderdeel is daarmee in gebruik getest, zowel door gebruikers van het design system als door eindgebruikers. Het onderdeel heeft een toegankelijkheidsaudit succesvol doorlopen. Updates worden vanaf nu voorzien van duidelijke changelogs en semantische versies die breaking changes goed communiceren."), (0, i.kt)("h3", { id: "doelen-3" }, "Doelen"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Teams kunnen met garanties het onderdeel van NL Design System gebruiken."), (0, i.kt)("li", { parentName: "ul" }, "Goed gedocumenteerd."), (0, i.kt)("li", { parentName: "ul" }, "Veilig om vaak te updaten."), (0, i.kt)("li", { parentName: "ul" }, "Goede versionering."), (0, i.kt)("li", { parentName: "ul" }, "Grondig getest."), (0, i.kt)("li", { parentName: "ul" }, "Makkelijk in gebruik."), (0, i.kt)("li", { parentName: "ul" }, "Garantie op toegankelijkheid."), (0, i.kt)("li", { parentName: "ul" }, "Garantie op bruikbaarheid."), (0, i.kt)("li", { parentName: "ul" }, "Voor componenten zijn automatische tests beschikbaar om regressies te voorkomen."), (0, i.kt)("li", { parentName: "ul" }, "Richtlijnen zijn onderbouwd met referenties naar gebruikersonderzoek en toegankelijkheidsaudits.")), (0, i.kt)("h2", { id: "discouraged" }, "Discouraged"), (0, i.kt)("p", null, "Op basis van gebruikersonderzoek of toegankelijkheids richtlijnen is dit onderdeel af te raden. Het zal dus niet opgenomen worden in een van de NL Design System estafette statussen. Indien mogelijk is een alternatief is aangewezen."), (0, i.kt)("h3", { id: "doelen-4" }, "Doelen"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Voorkomen dat een onderdeel opgenomen wordt in NL Design System waarvan we al weten dat het niet bijdraagt aan inclusieve dienstverlening."), (0, i.kt)("li", { parentName: "ul" }, "Documenteren om mensen te informeren en waarschuwen voor een ongebruiksvriendelijk en ontoegankelijk onderdeel.")));
   }
   k.isMDXComponent = !0;
  },
 },
]);
