"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5999],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => p });
   var r = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     n &&
      (r = r.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, r);
    }
    return t;
   }
   function o(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? i(Object(t), !0).forEach(function (n) {
         a(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     r,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       a = {},
       i = Object.keys(e);
      for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var l = r.createContext({}),
    d = function (e) {
     var n = r.useContext(l),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    m = function (e) {
     var n = d(e.components);
     return r.createElement(l.Provider, { value: n }, e.children);
    },
    c = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    v = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      l = e.parentName,
      m = s(e, ["components", "mdxType", "originalType", "parentName"]),
      c = d(t),
      v = a,
      p = c["".concat(l, ".").concat(v)] || c[v] || u[v] || i;
     return t ? r.createElement(p, o(o({ ref: n }, m), {}, { components: t })) : r.createElement(p, o({ ref: n }, m));
    });
   function p(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      o = new Array(i);
     o[0] = v;
     var s = {};
     for (var l in n) hasOwnProperty.call(n, l) && (s[l] = n[l]);
     (s.originalType = e), (s[c] = "string" == typeof e ? e : a), (o[1] = s);
     for (var d = 2; d < i; d++) o[d] = t[d];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   v.displayName = "MDXCreateElement";
  },
  81357: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => i, metadata: () => s, toc: () => d });
   var r = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "Leverancier sessie maart 2023", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Leverancier sessie maart 2023", sidebar_position: 2, pagination_label: "Leverancier sessie maart 2023", description: "Samenvatting van de interactieve leverancier sessie - leverancier - waarom NLDS - waarom een design system" },
    o = "Leverancier sessie NL Design System maart 2023",
    s = { unversionedId: "meedoen/als-leverancier/leverancier-sessie-maart-2023", id: "meedoen/als-leverancier/leverancier-sessie-maart-2023", title: "Leverancier sessie maart 2023", description: "Samenvatting van de interactieve leverancier sessie - leverancier - waarom NLDS - waarom een design system", source: "@site/docs/meedoen/als-leverancier/leverancier-sessie-maart-2023.md", sourceDirName: "meedoen/als-leverancier", slug: "/meedoen/als-leverancier/leverancier-sessie-maart-2023", permalink: "/en/meedoen/als-leverancier/leverancier-sessie-maart-2023", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-leverancier/leverancier-sessie-maart-2023.md", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Leverancier sessie maart 2023", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Leverancier sessie maart 2023", sidebar_position: 2, pagination_label: "Leverancier sessie maart 2023", description: "Samenvatting van de interactieve leverancier sessie - leverancier - waarom NLDS - waarom een design system" }, sidebar: "meedoen", previous: { title: "Voor leveranciers", permalink: "/en/meedoen/als-leverancier/overzicht" } },
    l = {},
    d = [
     { value: "Voorbeelden van leveranciers", id: "voorbeelden-van-leveranciers", level: 2 },
     { value: "Wat heb je aan NL Design System", id: "wat-heb-je-aan-nl-design-system", level: 2 },
     { value: "Open Source werken", id: "open-source-werken", level: 2 },
     { value: "Als leverancier bijdragen", id: "als-leverancier-bijdragen", level: 2 },
     { value: "Ontwerpen met NL Design System", id: "ontwerpen-met-nl-design-system", level: 2 },
     { value: "E\xe9n systeem voor meerdere klanten", id: "e\xe9n-systeem-voor-meerdere-klanten", level: 2 },
    ],
    m = { toc: d },
    c = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(c, (0, r.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "leverancier-sessie-nl-design-system-maart-2023" }, "Leverancier sessie NL Design System maart 2023"), (0, a.kt)("p", null, "In de eerste leverancier sessie van NL Design System hebben we onderwerpen opgehaald uit de community en iedereen op onderwerpen laten stemmen. Hieronder de onderwerpen die uiteindelijk aan bod zijn gekomen met een samenvatting van wat we erover vertelden."), (0, a.kt)("h2", { id: "voorbeelden-van-leveranciers" }, "Voorbeelden van leveranciers"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Zijn er al leerzame voorbeelden van bijdragen van leveranciers die gebruikmaken van het NL Design System?")), (0, a.kt)("p", null, "Jazeker zijn die er, bijvoorbeeld de leverancier die voor de gemeente Den Haag Gutenberg blocks in Wordpress maakte om NL Design System componenten heen. Zij zijn nu met een andere leverancier aan het samenwerken om deze open source en herbruikbaar voor de hele community beschikbaar te maken. Zo kun je straks niet alleen de componenten via Wordpress inzetten, maar worden ook de redacteuren van relevante richtlijnen voorzijn tijdens het maken van content."), (0, a.kt)("p", null, "Maar bijdrages kunnen heel erg verschillen, wat dacht je van de leverancier die de toptaak iconen heeft ontworpen en beschikbaar heeft gemaakt om als webcomponent in te zetten? Die heeft zelfs gewerkt aan een nieuwe versie die nog beter aansluit bij het design van de functionele iconen die Jeffrey van het kernteam graag gebruikt."), (0, a.kt)("h2", { id: "wat-heb-je-aan-nl-design-system" }, "Wat heb je aan NL Design System"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Wat heb je als leverancier aan NL Design System?")), (0, a.kt)("p", null, "Als leverancier kan je door NL Design System componenten te gebruiken je producten mogelijk sneller bouwen. Daarnaast lift je mee op de toegankelijkheid verbeteringen die in de community ontstaan en kun je met eigen verbeteringen gelijk heel Nederland een stukje beter maken."), (0, a.kt)("p", null, "Ook helpt de architectuur je om componenten die je zelf nog moet bouwen los van huisstijl op te zetten. Hierdoor kunnen je producten sneller en met minder code duplicatie voor meerdere organisaties worden ingezet."), (0, a.kt)("h2", { id: "open-source-werken" }, "Open Source werken"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Hoe helpt NL Design System met een nieuw project Open Source beginnen?")), (0, a.kt)("p", null, "Projecten Open Source maken lijkt soms lastig. Waar begin je, welke licentie en hoe zorg je dat mensen makkelijk een bijdrage kunnen doen."), (0, a.kt)("p", null, "NL Design System heeft hier over nagedacht en informatie verzameld. Daardoor hebben we nu een template repository waarmee je snel kunt beginnen. Hier zit een Code of Conduct, een EUPL licentie en linting regels in. Verder hebben we bewust gekozen om geen copyright overdracht te vragen, na het inwinnen van veel advies is dat de meest laagdrempelige manier om mensen te laten bijdragen."), (0, a.kt)("p", null, "Je kunt ze daarna nog aanpassen naar je eigen inzichten, maar om mee te beginnen heb je dan een solide basis."), (0, a.kt)("p", null, 'Ook hebben we rekening gehouden dat een gedeelte van je code misschien niet voor iedereen beschikbaar moet zijn. Dat hebben we opgelost met een los mapje in de example repository genaamd "Proprietary" daarin zit bijvoorbeeld je huisstijl of hele organisatie specifieke dingen. Voor dat mapje is een uitzondering in de licentie opgenomen en deze is dan ook niet open source.'), (0, a.kt)("h2", { id: "als-leverancier-bijdragen" }, "Als leverancier bijdragen"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Kun je als leverancier bijdragen aan richtlijnen of componenten?")), (0, a.kt)("p", null, "Absoluut, het estafette model van NL Design System zorgt ervoor dat je bij jezelf kan beginnen en het dan Open Source of publiek beschikbaar kan maken voor anderen."), (0, a.kt)("p", null, "Voor NL Design System is het belangrijk dat dingen op meerdere plekken bewezen werken. Zo kan het bijvoorbeeld zijn dat richtlijnen over taalgebruik in de ene organisatie heel goed werken, terwijl voor een andere organisatie het tegenovergestelde blijkt. Je kunt je richtlijnen dus alvast delen op een manier dat jouw organisatie, maar ook de community het kan lezen. Als iemand anders dan met deze richtlijnen ook succes boekt worden ze daarna misschien wel onderdeel van de Hall of Fame."), (0, a.kt)("p", null, "Hetzelfde geldt eigenlijk voor componenten en patronen."), (0, a.kt)("h2", { id: "ontwerpen-met-nl-design-system" }, "Ontwerpen met NL Design System"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Kun je ook je ontwerpen maken met NL Design System componenten?")), (0, a.kt)("p", null, "Jazeker kan dat, vooral als je Figma gebruikt. Een overgrote meerderheid van de NL Design System community gebruikt Figma. Gemeente Den Haag heeft bijvoorbeeld een hele uitgebreide componenten bibiliotheek die ook in code bestaat. Met die component bibiliotheek in Figma ontwerpen ze ook nieuwe applicaties en hun prototypes. Een leverancier uit de community heeft vervolgens voor een andere opdracht gebruik gemaakt van deze Den Haag componenten om ook een prototype te ontwikkelen. Dat prototype zag eruit als Den Haag, maar de tijdswinst bij het ontwerpen en voor de overdracht naar developers was dusdanig dat ze daar prima mee konden leven."), (0, a.kt)("p", null, "Ondertussen is ook het kernteam bezig om een componenten bibliotheek in Figma te maken waar de NL Design System componenten met verschillende statussen (van community tot hall of fame) huisstijl onafhankelijk beschikbaar worden gemaakt. Hiervan verwachten we in de loop van dit jaar een eerste bruikbare versie te hebben."), (0, a.kt)("h2", { id: "e\xe9n-systeem-voor-meerdere-klanten" }, "E\xe9n systeem voor meerdere klanten"), (0, a.kt)("blockquote", null, (0, a.kt)("p", { parentName: "blockquote" }, "Waarom zou je als leverancier van meerdere organisaties \xe9\xe9n design system gebruiken?")), (0, a.kt)("p", null, "Normaal is een design system vaak gebonden aan stijl. Met NL Design System heb je componenten die los staan van een huisstijl en richtlijnen hoe je deze componenten het best in kan zetten. Door hiermee een applicatie te bouwen een een thema te maken voor de eerste organisatie die het gaat gebruiken heb kun je gebruik maken van al het werk uit de community. Daarnaast betekend het dat een mooie applicatie voor de ene klant ook heel makkelijk met een nieuw thema sausje voor de andere klant kan worden ingezet."));
   }
   u.isMDXComponent = !0;
  },
 },
]);
