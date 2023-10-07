"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8753],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => b });
   var a = n(67294);
   function l(e, t, n) {
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
   function o(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         l(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function r(e, t) {
    if (null == e) return {};
    var n,
     a,
     l = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       l = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
      return l;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]));
    }
    return l;
   }
   var d = a.createContext({}),
    p = function (e) {
     var t = a.useContext(d),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    m = function (e) {
     var t = p(e.components);
     return a.createElement(d.Provider, { value: t }, e.children);
    },
    s = "mdxType",
    k = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    u = a.forwardRef(function (e, t) {
     var n = e.components,
      l = e.mdxType,
      i = e.originalType,
      d = e.parentName,
      m = r(e, ["components", "mdxType", "originalType", "parentName"]),
      s = p(n),
      u = l,
      b = s["".concat(d, ".").concat(u)] || s[u] || k[u] || i;
     return n ? a.createElement(b, o(o({ ref: t }, m), {}, { components: n })) : a.createElement(b, o({ ref: t }, m));
    });
   function b(e, t) {
    var n = arguments,
     l = t && t.mdxType;
    if ("string" == typeof e || l) {
     var i = n.length,
      o = new Array(i);
     o[0] = u;
     var r = {};
     for (var d in t) hasOwnProperty.call(t, d) && (r[d] = t[d]);
     (r.originalType = e), (r[s] = "string" == typeof e ? e : l), (o[1] = r);
     for (var p = 2; p < i; p++) o[p] = n[p];
     return a.createElement.apply(null, o);
    }
    return a.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  55836: (e, t, n) => {
   n.d(t, { U: () => s });
   var a = n(87462),
    l = n(3905),
    i = n(65663),
    o = n(67294);
   const r = (e, t) => {
     const n = new URL(t, new URL(e, "resolve://pathname/"));
     if ("resolve:" === n.protocol) {
      const { pathname: n, search: a, hash: l } = new URL(t, new URL(e, "http://example.com/"));
      return n + a + l;
     }
     return n.toString();
    },
    d = { 1: {}, 2: { h1: i.XJ, h2: i.aC, h3: i.k8, h4: i.by, h5: i.Cd }, 3: { h1: i.aC, h2: i.k8, h3: i.by, h4: i.Cd, h5: i.Cd }, 4: { h1: i.k8, h2: i.by, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 5: { h1: i.by, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd }, 6: { h1: i.Cd, h2: i.Cd, h3: i.Cd, h4: i.Cd, h5: i.Cd } },
    p = (e) => ({
     img: (t) => {
      let { src: n, ...l } = t;
      return o.createElement("img", (0, a.Z)({}, l, { src: r(e, n), className: "utrecht-img utrecht-img--fit" }));
     },
    }),
    m = (e, t) => {
     if (e) {
      const e = { ...d[t - 1] };
      return (e.h1 = () => null), e;
     }
     return d[t];
    },
    s = (e) => {
     let { children: t, omitH1: n = !1, headingLevel: a = 1, baseUrl: i = "" } = e;
     return o.createElement(l.Zo, { components: { ...m(n, a), ...p(i) } }, t);
    };
  },
  51367: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => k, contentTitle: () => m, default: () => h, frontMatter: () => p, metadata: () => s, toc: () => u });
   var a = n(87462),
    l = (n(67294), n(3905)),
    i = n(55836);
   const o = {
     toc: [
      { value: "Duidelijke koppen", id: "duidelijke-koppen", level: 2 },
      { value: "Sorteer de tabelrijen", id: "sorteer-de-tabelrijen", level: 2 },
      { value: "<em>Responsive</em> tabellen", id: "responsive-tabellen", level: 2 },
      { value: "Hoe het niet moet", id: "hoe-het-niet-moet", level: 2 },
      { value: "Koppen van tabel niet gekoppeld aan datacellen", id: "koppen-van-tabel-niet-gekoppeld-aan-datacellen", level: 3 },
      { value: "Kop van de tabel niet gekoppeld", id: "kop-van-de-tabel-niet-gekoppeld", level: 4 },
      { value: "Kop van de tabelrij niet gekoppeld", id: "kop-van-de-tabelrij-niet-gekoppeld", level: 4 },
      { value: "Kop van de tabel in de tabel zelf", id: "kop-van-de-tabel-in-de-tabel-zelf", level: 3 },
      { value: "Afstand tussen kolommen is te groot", id: "afstand-tussen-kolommen-is-te-groot", level: 3 },
      { value: "Tabel niet toegankelijk door eigen CSS <code>display</code>", id: "tabel-niet-toegankelijk-door-eigen-css-display", level: 3 },
      { value: "Links", id: "links", level: 2 },
      { value: "Relevante WCAG regels", id: "relevante-wcag-regels", level: 3 },
     ],
    },
    r = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, l.kt)(r, (0, a.Z)({}, o, n, { components: t, mdxType: "MDXLayout" }), (0, l.kt)("h1", { id: "tabel" }, "Tabel"), (0, l.kt)("p", null, "Er zijn eindeloos veel varianten van de tabel, daarom is het niet mogelijk op \xe9\xe9n pagina een volledig overzicht te hebben met tips. Op deze pagina zullen we algemene tips geven. In de toekomst willen we losse pagina's aanbieden voor speciale soorten tabellen."), (0, l.kt)("h2", { id: "duidelijke-koppen" }, "Duidelijke koppen"), (0, l.kt)("p", null, "In tabellen staat vaak veel informatie en daarom helpen koppen gebruikers om snel informatie over te slaan die niet relevant is. De data in tabellen kan op drie niveau's koppen bevatten: kop van de tabel (", (0, l.kt)("em", { parentName: "p" }, "caption"), "), kop van de kolom (", (0, l.kt)("em", { parentName: "p" }, "column header"), ") en kop van de rij (", (0, l.kt)("em", { parentName: "p" }, "row header"), "). Het is belangrijk dat je precies de goede HTML gebruikt voor elke kop:"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, "<caption>"), " voor de kop van de tabel"), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<th scope="col">'), " voor de kop van de kolom"), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<th scope="row">'), " voor de kop van de rij")), (0, l.kt)("h2", { id: "sorteer-de-tabelrijen" }, "Sorteer de tabelrijen"), (0, l.kt)("p", null, "Voor screen reader gebruikers is het belangrijk dat je de kolom kunt vinden waarop gesorteerd is, en dat je makkelijk vanuit die kolom naar de vorige of volgende rij kunt gaan om snel de relevante rij te vinden. Wanneer je informatie zoekt op een bepaalde datum dan is het belangrijk dat je met \xe9\xe9n druk op de knop naar de volgende datum kunt gaan, daarna nog een keer, enzovoorts."), (0, l.kt)("p", null, "Als je de informatie niet kan vinden bij de datum die je verwacht, dan is het belangrijk om te weten dat op datum is gesorteerd: alleen dan kun weet je zeker dat de informatie helemaal niet in de tabel staat."), (0, l.kt)("p", null, "Plaats de gegevens waarop gesorteerd is in een eigen kolom, en geef met ", (0, l.kt)("inlineCode", { parentName: "p" }, 'aria-sort="\u2026"'), " aan dat deze kolom de volgorde bepaalt."), (0, l.kt)("p", null, "Bijvoorbeeld:"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-html" }, '<table>\n  <caption>\n    Openingstijden gemeentehuis\n  </caption>\n  <thead>\n    <tr>\n      <th scope="col" aria-sort="ascending">Dag</th>\n      <th scope="col">Geopend</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th scope="row">Maandag</th>\n      <td>12:00\u201418:00</td>\n    </tr>\n    <tr>\n      <th scope="row">Dinsdag</th>\n      <td>08:00\u201418:00</td>\n    </tr>\n    \u2026\n  </tbody>\n</table>\n')), (0, l.kt)("p", null, "Je geeft met de volgende code aan in welke volgorde de informatie staat:"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, 'aria-sort="ascending"'), ' voor "oplopende volgorde", bijvoorbeeld namen van A tot Z (namen), van bedragen en aantallen van klein naar groot, geplande activiteiten van eerdere naar latere datums'), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, 'aria-sort="descending"'), ' voor "aflopende volgorde", bijvoorbeeld namen van Z naar A, ontvangen berichten van nieuw naar oud, bedragen en aantallen van groot naar klein')), (0, l.kt)("h2", { id: "responsive-tabellen" }, (0, l.kt)("em", { parentName: "h2" }, "Responsive"), " tabellen"), (0, l.kt)("p", null, "Volgens WCAG 1.4.10 moeten pagina's leesbaar zijn bij een breedte van 1280px met 400% zoom, zonder dat horizontaal scrollen nodig is. Datatabellen worden genoemd als uitzondering, maar een voor een betere gebruiksvriendelijkheid zijn er technieken om te herkennen dat een tabel niet goed bekeken kan worden en in die situaties een alternatieve layout te gebruiken. Met CSS media queries of container queries kun je herkennen dat er niet voldoende ruimte is voor een tabel, en vervolgens heb je twee opties:"), (0, l.kt)("p", null, "Techniek 1: de bestaande ", (0, l.kt)("inlineCode", { parentName: "p" }, "table"), "-HTML niet te tonen als tabel door met CSS een andere ", (0, l.kt)("inlineCode", { parentName: "p" }, "display"), " te gebruiken voor ", (0, l.kt)("inlineCode", { parentName: "p" }, "table"), ", ", (0, l.kt)("inlineCode", { parentName: "p" }, "td"), " en alle andere tabel-elementen. ", (0, l.kt)("em", { parentName: "p" }, "Tabel-elementen niet weergeven als tabel kan de toegankelijkheid van de informatie kapot maken."), " Deze techniek gaat in de praktijk heel vaak mis. Gebruik deze techniek alleen als je vaak gebruikerstesten doet voor toegankelijkheid."), (0, l.kt)("p", null, "Techniek 2: HTML aanbieden in twee varianten. Naast de HTML ", (0, l.kt)("inlineCode", { parentName: "p" }, "<table>"), " element, ook de gegevens tonen met HTML elementen die niet zoveel ruimte nodig hebben in twee dimensies, zoals koppen met daaronder een datalijst. Afhankelijk van de situatie verberg je de \xe9ne of de andere variant."), (0, l.kt)("h2", { id: "hoe-het-niet-moet" }, "Hoe het niet moet"), (0, l.kt)("h3", { id: "koppen-van-tabel-niet-gekoppeld-aan-datacellen" }, "Koppen van tabel niet gekoppeld aan datacellen"), (0, l.kt)("p", null, "Tabellen bevatten vaak veel informatie, daarom kan het gebruikers heel veel tijd kosten om de relevante informatie te vinden als je niet de goede HTML gebruikt voor de 3 niveau's van koppen. Gebruikers die de tabel visueel kunnen waarnemen hebben het voordeel dat je kan zien dat er een kop is bovenaan de kolom, of aan het begin van de regel, en kunnen de kop herkennen omdat die bijvoorbeeld vetgedrukt is."), (0, l.kt)("p", null, (0, l.kt)("a", { parentName: "p", href: "https://www.w3.org/TR/WCAG21/#info-and-relationships" }, "WCAG 2.1, 1.3.1"), " zegt dat het belangrijk is om voor gebruikers die niet die relaties kunnen zien zoals de twee-dimensionale opmaak of vetgedrukte tekst, code te gebruiken waardoor bijvoorbeeld screen readers ook weten welke koppen bij de cel hoort."), (0, l.kt)("h4", { id: "kop-van-de-tabel-niet-gekoppeld" }, "Kop van de tabel niet gekoppeld"), (0, l.kt)("p", null, "Niet:"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-html" }, "<h2>Openingstijden</h2>\n<table>\n  <thead>\n    \u2026\n  </thead>\n</table>\n")), (0, l.kt)("p", null, "Wel:"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-html" }, '<table>\n  <caption class="heading-2">\n    Openingstijden\n  </caption>\n  <thead>\n    \u2026\n  </thead>\n</table>\n')), (0, l.kt)("h4", { id: "kop-van-de-tabelrij-niet-gekoppeld" }, "Kop van de tabelrij niet gekoppeld"), (0, l.kt)("p", null, "Niet:"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-html" }, "<tr>\n  <td>\n    <strong>maandag</strong>\n  </td>\n  <td>gesloten</td>\n</tr>\n")), (0, l.kt)("p", null, "Wel:"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-html" }, '<tr>\n  <th scope="row">maandag</td>\n  <td>gesloten</td>\n</tr>\n')), (0, l.kt)("h3", { id: "kop-van-de-tabel-in-de-tabel-zelf" }, "Kop van de tabel in de tabel zelf"), (0, l.kt)("p", null, "Niet:"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-html" }, '<table>\n  <thead>\n    <tr>\n      <th colspan="2">Openingstijden</th>\n    </tr>\n  </thead>\n  \u2026\n</table>\n')), (0, l.kt)("p", null, "Wel:"), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre", className: "language-html" }, "<table>\n  <caption>\n    Openingstijden\n  </caption>\n  \u2026\n</table>\n")), (0, l.kt)("h3", { id: "afstand-tussen-kolommen-is-te-groot" }, "Afstand tussen kolommen is te groot"), (0, l.kt)("p", null, "Je moet goed kunnen zien welke cellen bij elkaar horen. Een tabel die breed is en relatief weinig informatie bevat, is moeilijk te begrijpen als er veel lege ruimte zit tussen de cellen."), (0, l.kt)("p", null, "Voorkom teveel lege ruimte: gebruik bijvoorbeeld niet ", (0, l.kt)("inlineCode", { parentName: "p" }, "width: 100%"), " voor een tabel met openingstijden. Kies per tabel welke breedte het meest duidelijk is. Als er lege ruimte ontstaat, zorg dan dat die niet tussen kolommen is, maar plaats de lege ruimte aan het eind van de laatste kolom."), (0, l.kt)("h3", { id: "tabel-niet-toegankelijk-door-eigen-css-display" }, "Tabel niet toegankelijk door eigen CSS ", (0, l.kt)("inlineCode", { parentName: "h3" }, "display")), (0, l.kt)("p", null, "Screen readers maken het begrijpen van HTML-tabellen makkelijk, want ze kunnen voor elke datacel de context geven. Hier voor is het belangrijk dat de automatische tools zoals screen readers uit de code begrijpen wat de ", (0, l.kt)("em", { parentName: "p" }, "column header"), " is en wat de ", (0, l.kt)("em", { parentName: "p" }, "row header"), " is."), (0, l.kt)("p", null, "Wanneer je met CSS ", (0, l.kt)("inlineCode", { parentName: "p" }, "display"), " aanpast om een tabel een andere layout te geven, dan is niet meer een tabel in de ", (0, l.kt)("em", { parentName: "p" }, "accessibility tree"), " en maak je de relatie tussen de ", (0, l.kt)("em", { parentName: "p" }, "data cell"), " en de ", (0, l.kt)("em", { parentName: "p" }, "header cell"), " kapot. Tabellen waarvan de ", (0, l.kt)("inlineCode", { parentName: "p" }, "display"), " wordt aangepast werken daarom niet meer in screen readers, tenzij de ", (0, l.kt)("em", { parentName: "p" }, "accessibility tree"), " door extra code wordt hersteld."), (0, l.kt)("p", null, "Je kunt voorkomen dat de ", (0, l.kt)("em", { parentName: "p" }, "accessibility tree"), " anders wordt opgebouwd. Je moet dan op \xe9lk element van de tabel expliciet zeggen welke ", (0, l.kt)("inlineCode", { parentName: "p" }, "role"), " het heeft. Omdat deze techniek veel extra werk geeft en foutgevoelig is, raden wij aan om alternatieven te kiezen zoals niet ", (0, l.kt)("inlineCode", { parentName: "p" }, "display"), " aanpassen of twee varianten maken."), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<caption id="unique-id-here">'), " samen met ", (0, l.kt)("inlineCode", { parentName: "li" }, '<table aria-labelledby="unique-id-here">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<table role="table">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<tbody role="table-row-group">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<td role="cell">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<tfoot role="table-row-group">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<th scope="col" role="columnheader">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<th scope="row" role="rowheader">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<thead role="table-row-group">')), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("inlineCode", { parentName: "li" }, '<tr role="table-row">'))), (0, l.kt)("h2", { id: "links" }, "Links"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("a", { parentName: "li", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table" }, "MDN: ", (0, l.kt)("inlineCode", { parentName: "a" }, "<table>"), ": The Table element")), (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("a", { parentName: "li", href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-sort" }, "MDN: ", (0, l.kt)("inlineCode", { parentName: "a" }, "aria-sort")))), (0, l.kt)("h3", { id: "relevante-wcag-regels" }, "Relevante WCAG regels"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, (0, l.kt)("a", { parentName: "li", href: "https://www.w3.org/TR/WCAG21/#reflow" }, "WCAG 1.4.10"))), (0, l.kt)("pre", null, (0, l.kt)("code", { parentName: "pre" }, "")));
   }
   d.isMDXComponent = !0;
   const p = { title: "Table", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Table", pagination_label: "Table", description: "UX richtlijnen voor Table component", slug: "/table", tags: ["Community"] },
    m = void 0,
    s = { unversionedId: "componenten/build/table", id: "componenten/build/table", title: "Table", description: "UX richtlijnen voor Table component", source: "@site/docs/componenten/build/table.mdx", sourceDirName: "componenten/build", slug: "/table", permalink: "/table", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/table.mdx", tags: [{ label: "Community", permalink: "/tags/community" }], version: "current", frontMatter: { title: "Table", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Table", pagination_label: "Table", description: "UX richtlijnen voor Table component", slug: "/table", tags: ["Community"] }, sidebar: "componenten", previous: { title: "Switch", permalink: "/switch" }, next: { title: "Tabs", permalink: "/tabs" } },
    k = {},
    u = [
     { value: "UX en toegankelijkheid", id: "ux-en-toegankelijkheid", level: 2 },
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "CSS", id: "css", level: 3 },
     { value: "Gemeente Den Haag", id: "gemeente-den-haag", level: 4 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht", level: 4 },
     { value: "HTML", id: "html", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-1", level: 4 },
     { value: "Web Component", id: "web-component", level: 3 },
     { value: "Gemeente Utrecht", id: "gemeente-utrecht-2", level: 4 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    b = { toc: u },
    c = "wrapper";
   function h(e) {
    let { components: t, ...n } = e;
    return (0, l.kt)(c, (0, a.Z)({}, b, n, { components: t, mdxType: "MDXLayout" }), (0, l.kt)("h1", { id: "table" }, "Table"), (0, l.kt)("p", null, 'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'), (0, l.kt)("h2", { id: "ux-en-toegankelijkheid" }, "UX en toegankelijkheid"), (0, l.kt)(i.U, { omitH1: !0, mdxType: "Markdown" }, (0, l.kt)(d, { mdxType: "CustomDoc" })), (0, l.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, l.kt)("h3", { id: "css" }, "CSS"), (0, l.kt)("h4", { id: "gemeente-den-haag" }, "Gemeente Den Haag"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/denhaag/tree/main/components/Table" }, "Table CSS implementatie van Gemeente Den Haag")), (0, l.kt)("li", { parentName: "ul" }, "Storybook: ", (0, l.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-table--default-story" }, "Table CSS storybook van Gemeente Den Haag"))), (0, l.kt)("h4", { id: "gemeente-utrecht" }, "Gemeente Utrecht"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/table/css" }, "Table CSS implementatie van Gemeente Utrecht")), (0, l.kt)("li", { parentName: "ul" }, "Storybook: (nog) geen story beschikbaar")), (0, l.kt)("h3", { id: "html" }, "HTML"), (0, l.kt)("h4", { id: "gemeente-utrecht-1" }, "Gemeente Utrecht"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/table/html" }, "Table HTML implementatie van Gemeente Utrecht")), (0, l.kt)("li", { parentName: "ul" }, "Storybook: ", (0, l.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-table--default-story" }, "Table HTML storybook van Gemeente Utrecht"))), (0, l.kt)("h3", { id: "web-component" }, "Web Component"), (0, l.kt)("h4", { id: "gemeente-utrecht-2" }, "Gemeente Utrecht"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://github.com/nl-design-system/utrecht/tree/main/components/table/web-component" }, "Table Web Component implementatie van Gemeente Utrecht")), (0, l.kt)("li", { parentName: "ul" }, "Storybook: ", (0, l.kt)("a", { parentName: "li", href: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-table--default-story" }, "Table Web Component storybook van Gemeente Utrecht"))), (0, l.kt)("h3", { id: "figma" }, "Figma"), (0, l.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, l.kt)("ul", null, (0, l.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, l.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1561-6277" }, "Table Figma implementatie van NL Design System"))), (0, l.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, l.kt)("p", null, "De Table component staat bij NL Design System in de ", (0, l.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/39" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   h.isMDXComponent = !0;
  },
 },
]);
