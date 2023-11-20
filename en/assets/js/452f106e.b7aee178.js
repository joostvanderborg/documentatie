"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [10860],
 {
  3905: (t, e, l) => {
   l.d(e, { Zo: () => r, kt: () => m });
   var n = l(67294);
   function i(t, e, l) {
    return e in t ? Object.defineProperty(t, e, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = l), t;
   }
   function s(t, e) {
    var l = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(t);
     e &&
      (n = n.filter(function (e) {
       return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      l.push.apply(l, n);
    }
    return l;
   }
   function k(t) {
    for (var e = 1; e < arguments.length; e++) {
     var l = null != arguments[e] ? arguments[e] : {};
     e % 2
      ? s(Object(l), !0).forEach(function (e) {
         i(t, e, l[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
      : s(Object(l)).forEach(function (e) {
         Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
        });
    }
    return t;
   }
   function o(t, e) {
    if (null == t) return {};
    var l,
     n,
     i = (function (t, e) {
      if (null == t) return {};
      var l,
       n,
       i = {},
       s = Object.keys(t);
      for (n = 0; n < s.length; n++) (l = s[n]), e.indexOf(l) >= 0 || (i[l] = t[l]);
      return i;
     })(t, e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(t);
     for (n = 0; n < s.length; n++) (l = s[n]), e.indexOf(l) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, l) && (i[l] = t[l]));
    }
    return i;
   }
   var u = n.createContext({}),
    a = function (t) {
     var e = n.useContext(u),
      l = e;
     return t && (l = "function" == typeof t ? t(e) : k(k({}, e), t)), l;
    },
    r = function (t) {
     var e = a(t.components);
     return n.createElement(u.Provider, { value: e }, t.children);
    },
    d = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (t) {
      var e = t.children;
      return n.createElement(n.Fragment, {}, e);
     },
    },
    c = n.forwardRef(function (t, e) {
     var l = t.components,
      i = t.mdxType,
      s = t.originalType,
      u = t.parentName,
      r = o(t, ["components", "mdxType", "originalType", "parentName"]),
      d = a(l),
      c = i,
      m = d["".concat(u, ".").concat(c)] || d[c] || p[c] || s;
     return l ? n.createElement(m, k(k({ ref: e }, r), {}, { components: l })) : n.createElement(m, k({ ref: e }, r));
    });
   function m(t, e) {
    var l = arguments,
     i = e && e.mdxType;
    if ("string" == typeof t || i) {
     var s = l.length,
      k = new Array(s);
     k[0] = c;
     var o = {};
     for (var u in e) hasOwnProperty.call(e, u) && (o[u] = e[u]);
     (o.originalType = t), (o[d] = "string" == typeof t ? t : i), (k[1] = o);
     for (var a = 2; a < s; a++) k[a] = l[a];
     return n.createElement.apply(null, k);
    }
    return n.createElement.apply(null, l);
   }
   c.displayName = "MDXCreateElement";
  },
  86352: (t, e, l) => {
   l.r(e), l.d(e, { assets: () => u, contentTitle: () => k, default: () => p, frontMatter: () => s, metadata: () => o, toc: () => a });
   var n = l(87462),
    i = (l(67294), l(3905));
   const s = { title: "Audit toegankelijkheid NLDesignSystem.nl versie 1.0", hide_title: !1, hide_table_of_contents: !1, pagination_label: "Toegankelijkheid", slug: "/toegankelijkheidsverklaring/rapport-2023" },
    k = void 0,
    o = { unversionedId: "footer/wcag-em-rapport-2023", id: "footer/wcag-em-rapport-2023", title: "Audit toegankelijkheid NLDesignSystem.nl versie 1.0", description: "Dit is het WCAG EM Auditrapport van NLDesignSystem.nl.", source: "@site/docs/footer/wcag-em-rapport-2023.md", sourceDirName: "footer", slug: "/toegankelijkheidsverklaring/rapport-2023", permalink: "/en/toegankelijkheidsverklaring/rapport-2023", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/footer/wcag-em-rapport-2023.md", tags: [], version: "current", frontMatter: { title: "Audit toegankelijkheid NLDesignSystem.nl versie 1.0", hide_title: !1, hide_table_of_contents: !1, pagination_label: "Toegankelijkheid", slug: "/toegankelijkheidsverklaring/rapport-2023" } },
    u = {},
    a = [],
    r = { toc: a },
    d = "wrapper";
   function p(t) {
    let { components: e, ...l } = t;
    return (0, i.kt)(d, (0, n.Z)({}, r, l, { components: e, mdxType: "MDXLayout" }), (0, i.kt)("p", null, "Dit is het ", (0, i.kt)("a", { parentName: "p", href: "https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/" }, "WCAG EM Auditrapport"), " van NLDesignSystem.nl."), (0, i.kt)("p", null, "Gerelateerd: ", (0, i.kt)("a", { parentName: "p", href: "/toegankelijkheidsverklaring" }, "toegankelijkheidsverklaring NLDesignSystem.nl"), "."), (0, i.kt)("div", { class: "wcag-em" }, (0, i.kt)("h2", null, "Over deze evaluatie"), (0, i.kt)("dl", null, (0, i.kt)("dt", null, "Rapport auteur "), (0, i.kt)("dd", null, "Rian Rietveld en Hidde de Vries "), (0, i.kt)("dt", null, "Evaluatie opdrachtgever "), (0, i.kt)("dd", null, "NL Design System "), (0, i.kt)("dt", null, "Evaluatiedatum "), (0, i.kt)("dd", null, "20 november 2023")), (0, i.kt)("h2", null, "Managementsamenvatting"), (0, i.kt)("p", null, "Het menu in desktop en mobiele weergave heeft problemen met de toetsenbordnavigatie, resize en reflow. Dit is de meest ingrijpende aanpassing die moet gebeuren. Daarnaast moet er een goede responsive weergave voor tabellen komen. De overige afkeuringen zijn makkelijker op te lossen."), (0, i.kt)("h2", null, "Scope van de evaluatie"), (0, i.kt)("dl", null, (0, i.kt)("dt", null, "Website naam "), (0, i.kt)("dd", null, "NL Design System "), (0, i.kt)("dt", null, "Scope van de website "), (0, i.kt)("dd", null, "Alle webcontent van de publieke website van het NL Design System op nldesignsystem.nl "), (0, i.kt)("dt", null, "WCAG Versie "), (0, i.kt)("dd", null, "2.1 "), (0, i.kt)("dt", null, "Conformiteitsdoel "), (0, i.kt)("dd", null, "AA "), (0, i.kt)("dt", null, "Basisniveau van toegankelijkheid-ondersteuning "), (0, i.kt)("dd", null, "Safari 14 met VoiceOver, Chrome Version 119.0.6045.123 (Official Build) (arm64), FireFox 119.0.1 (64-bit), iOS 16.7.2 "), (0, i.kt)("dt", null, "Verdere onderzoeksvereisten "), (0, i.kt)("dd", null, "In dit rapport worden alleen de gevonden problemen vermeld en geen oplossingen geboden.")), (0, i.kt)("h2", null, "Uitgebreide toetsresultaten"), (0, i.kt)("h3", null, "Samenvatting"), (0, i.kt)("p", null, "Gerapporteerd over 50 van 50 WCAG 2.1 AA Success Criteria."), (0, i.kt)("ul", null, (0, i.kt)("li", null, (0, i.kt)("span", null, "24"), " ", (0, i.kt)("span", null, "Voldoende")), (0, i.kt)("li", null, (0, i.kt)("span", null, "11"), " ", (0, i.kt)("span", null, "Onvoldoende")), (0, i.kt)("li", null, (0, i.kt)("span", null, "0"), " ", (0, i.kt)("span", null, "Onbekend")), (0, i.kt)("li", null, (0, i.kt)("span", null, "15"), " ", (0, i.kt)("span", null, "Niet van toepassing")), (0, i.kt)("li", null, (0, i.kt)("span", null, "0"), " ", (0, i.kt)("span", null, "Niet getoetst"))), "  ", (0, i.kt)("h3", null, "Alle resultaten"), " ", (0, i.kt)("h4", null, "1 Waarneembaar"), " ", (0, i.kt)("h5", { id: "guideline-11" }, "1.1 Tekstalternatieven"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-11" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-111" }, "1.1.1: Niet-tekstuele content"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "Pagina: ", (0, i.kt)("a", { href: "https://nldesignsystem.nl/project/kernteam" }, "https://nldesignsystem.nl/project/kernteam")), (0, i.kt)("p", null, "De SVG\u2019s met de afbeeldingen van de teamleden hebben geen alternatief.")), "  ")), " "), (0, i.kt)("h5", { id: "guideline-12" }, "1.2 Op tijd gebaseerde media"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-12" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-121" }, "1.2.1: Louter-geluid en louter-videobeeld (vooraf opgenomen)"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "Pagina: ", (0, i.kt)("a", { href: "https://nldesignsystem.nl/events/heartbeat" }, "https://nldesignsystem.nl/events/heartbeat")), (0, i.kt)("p", null, "Vimeo video's hebben geen ondertiteling.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-122" }, "1.2.2: Ondertitels voor doven en slechthorenden (vooraf opgenomen)"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "Pagina: ", (0, i.kt)("a", { href: "https://nldesignsystem.nl/events/heartbeat" }, "https://nldesignsystem.nl/events/heartbeat")), (0, i.kt)("p", null, "Vimeo video's hebben geen ondertiteling.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-123" }, "1.2.3: Audiodescriptie of media-alternatief (vooraf opgenomen)"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-124" }, "1.2.4: Ondertitels voor doven en slechthorenden (live)"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-125" }, "1.2.5: Audiodescriptie (vooraf opgenomen)"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h5", { id: "guideline-13" }, "1.3 Aanpasbaar"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-13" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-131" }, "1.3.1: Info en relaties"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, "  "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-132" }, "1.3.2: Betekenisvolle volgorde"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-133" }, "1.3.3: Zintuiglijke eigenschappen"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-134" }, "1.3.4: Weergavestand"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-135" }, "1.3.5: Identificeer het doel van de input"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h5", { id: "guideline-14" }, "1.4 Onderscheidbaar"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-14" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-141" }, "1.4.1: Gebruik van kleur"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-142" }, "1.4.2: Geluidsbediening"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-143" }, "1.4.3: Contrast (minimum)"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "Zoekoptie in de menubalk."), (0, i.kt)("p", null, "De tekst en de placeholder in het zoek-modal hebben te weinig contrast.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-144" }, "1.4.4: Herschalen van tekst"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "In het menu op alle pagina\u2019s."), (0, i.kt)("p", null, "Het menu hakt af bij schalen naar 200% alleen tekst.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-145" }, "1.4.5: Afbeeldingen van tekst"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-1410" }, "1.4.10: Reflow"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "Pagina ", (0, i.kt)("a", { href: "https://nldesignsystem.nl/events/design-systems-week-2023/tijdschema/" }, "https://nldesignsystem.nl/events/design-systems-week-2023/tijdschema/"), "."), (0, i.kt)("p", null, "Tabellen op Tijdschema | NL Design System hakken af bij een kleiner scherm. En er is geen horizontale scrollbar (zou kunnen bij tabel)."), (0, i.kt)("p", null, "Pagina ", (0, i.kt)("a", { href: "https://nldesignsystem.nl/events/design-systems-week-2022" }, "https://nldesignsystem.nl/events/design-systems-week-2022"), "Op Design Systems Week 2022 valt het submenu links over de tekst bij een kleiner beeldscherm.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-1411" }, "1.4.11: Contrast van niet-tekstuele content"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-1412" }, "1.4.12: Tekstafstand"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-1413" }, "1.4.13: Content bij hover of focus"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h4", null, "2 Bedienbaar"), " ", (0, i.kt)("h5", { id: "guideline-21" }, "2.1 Toetsenbordtoegankelijk"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-21" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-211" }, "2.1.1: Toetsenbord"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-212" }, "2.1.2: Geen toetsenbordval"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-214" }, "2.1.4: Enkel teken sneltoetsen"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "Pagina: ", (0, i.kt)("a", { href: "https://nldesignsystem.nl/events/heartbeat" }, "https://nldesignsystem.nl/events/heartbeat")), (0, i.kt)("p", null, 'Keyboard shortcuts zijn niet disabled voor de Vimeo player (Disable shortcuts voor vimeo video, keyboard="false").')), "  ")), " "), (0, i.kt)("h5", { id: "guideline-22" }, "2.2 Genoeg tijd"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-22" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-221" }, "2.2.1: Timing aanpasbaar"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-222" }, "2.2.2: Pauzeren, stoppen, verbergen"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h5", { id: "guideline-23" }, "2.3 Toevallen en fysieke reacties"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-23" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-231" }, "2.3.1: Drie flitsen of beneden drempelwaarde"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h5", { id: "guideline-24" }, "2.4 Navigeerbaar"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-24" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-241" }, "2.4.1: Blokken omzeilen"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-242" }, "2.4.2: Paginatitel"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-243" }, "2.4.3: Focus volgorde"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "In het menu op alle pagina\u2019s."), (0, i.kt)("p", null, "De toetsenbordfocus komt op onzichtbare items bij het mobiele menu waardoor de volgorde anders is dan de zichtbare volgorde.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-244" }, "2.4.4: Linkdoel (in context)"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "In het logo in de header op alle pagina\u2019s."), (0, i.kt)("p", null, "De linktekst op het logo is onduidelijk en verwijst niet naar de voorpagina.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-245" }, "2.4.5: Meerdere manieren"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-246" }, "2.4.6: Koppen en labels"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-247" }, "2.4.7: Focus zichtbaar"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "In het menu op alle pagina\u2019s."), (0, i.kt)("p", null, "Wanneer navigatie kleine schermen \u201copen\u201d staat is focus soms onzichtbaar (want mogelijk om buiten navigatie te tabben).")), "  ")), " "), (0, i.kt)("h5", { id: "guideline-25" }, "2.5 Input Modaliteiten"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-25" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-251" }, "2.5.1: Aanwijzergebaren"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-252" }, "2.5.2: Aanwijzerannulering"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-253" }, "2.5.3: Label in naam"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Onvoldoende"), " "), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, "Bevindingen:"), " ", (0, i.kt)("p", null, "In het menu op alle pagina\u2019s."), (0, i.kt)("p", null, "Het label van de menuknop komt niet overeen met de visuele tekst.")), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-254" }, "2.5.4: Bewegingsactivering"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h4", null, "3 Begrijpelijk"), " ", (0, i.kt)("h5", { id: "guideline-31" }, "3.1 Leesbaar"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-31" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-311" }, "3.1.1: Taal van de pagina"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-312" }, "3.1.2: Taal van onderdelen"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h5", { id: "guideline-32" }, "3.2 Voorspelbaar"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-32" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-321" }, "3.2.1: Bij focus"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-322" }, "3.2.2: Bij input"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-323" }, "3.2.3: Consistente navigatie"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-324" }, "3.2.4: Consistente identificatie"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h5", { id: "guideline-33" }, "3.3 Assistentie bij invoer"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-33" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-331" }, "3.3.1: Foutidentificatie"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-332" }, "3.3.2: Labels of instructies"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-333" }, "3.3.3: Foutsuggestie"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-334" }, "3.3.4: Foutpreventie (wettelijk, financieel, gegevens"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), (0, i.kt)("h4", null, "4 Robuust"), " ", (0, i.kt)("h5", { id: "guideline-41" }, "4.1 Compatibel"), " ", (0, i.kt)("table", { "aria-labelledby": "guideline-41" }, (0, i.kt)("tbody", null, (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "col" }, "Success Criterium"), " ", (0, i.kt)("th", { scope: "col" }, "Uitkomst"), " ", (0, i.kt)("th", { scope: "col" }, "Bevindingen"), " "), " ", (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-411" }, "4.1.1: Parsen"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-412" }, "4.1.2: Naam, rol, waarde"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Voldoende"), " "), " ", (0, i.kt)("td", null, " "), "  "), (0, i.kt)("tr", null, (0, i.kt)("th", { scope: "row", id: "criterion-413" }, "4.1.3: Statusberichten"), " ", (0, i.kt)("td", null, (0, i.kt)("h6", null, "Hele sample"), " ", (0, i.kt)("p", null, (0, i.kt)("span", null, "Uitkomst:"), " Niet van toepassing"), " "), " ", (0, i.kt)("td", null, " "), "  ")), " "), " ", (0, i.kt)("h2", null, "Sample met getoetste webpagina&#39;s"), " ", (0, i.kt)("ol", null, (0, i.kt)("li", null, (0, i.kt)("span", null, "Voorpagina"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Meedoen"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/meedoen"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Richtlijnen"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/richtlijnen"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Formulierenoverzicht"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/richtlijnen/formulieren/overzicht"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Toegankelijkheid"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/richtlijnen/formulieren/toegankelijk"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Componenten"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/componenten/)"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Onderzoek"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/onderzoek/"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Project"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/project"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Kernteam"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/project/kernteam"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Blog"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/project/blog"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Blogpost"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/project/blog/design-systems-week-2023-komt-eraan"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Events met Engelse content"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/events/design-systems-week-2023/en/overview"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Timetable met Engelse content"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/events/design-systems-week-2023/en/timetable"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "\u2028Met Video"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/events/design-systems-week-2023/programma/"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Event Heartbeat"), " - ", (0, i.kt)("span", null, "(https://nldesignsystem.nl/events/heartbeat"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Tijdschema (met tabel)"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/events/design-systems-week-2023/tijdschema"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "404 pagina"), " - ", (0, i.kt)("span", null, "(https://nldesignsystem.nl/asdasdasd"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Links"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/project/links"), " "), (0, i.kt)("li", null, (0, i.kt)("span", null, "Toegankelijkheidsverklaring"), " - ", (0, i.kt)("span", null, "https://nldesignsystem.nl/toegankelijkheidsverklaring"), " ")), (0, i.kt)("h2", null, "Webtechnologie"), (0, i.kt)("p", null, "HTML,CSS,WAI-ARIA,JavaScript,SVG")));
   }
   p.isMDXComponent = !0;
  },
 },
]);
