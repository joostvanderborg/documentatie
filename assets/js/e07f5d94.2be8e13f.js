"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7833],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => m, kt: () => k });
   var i = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     t &&
      (i = i.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, i);
    }
    return n;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function o(e, t) {
    if (null == e) return {};
    var n,
     i,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       i,
       r = {},
       a = Object.keys(e);
      for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var s = i.createContext({}),
    u = function (e) {
     var t = i.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    m = function (e) {
     var t = u(e.components);
     return i.createElement(s.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return i.createElement(i.Fragment, {}, t);
     },
    },
    p = i.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      m = o(e, ["components", "mdxType", "originalType", "parentName"]),
      d = u(n),
      p = r,
      k = d["".concat(s, ".").concat(p)] || d[p] || c[p] || a;
     return n ? i.createElement(k, l(l({ ref: t }, m), {}, { components: n })) : i.createElement(k, l({ ref: t }, m));
    });
   function k(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var a = n.length,
      l = new Array(a);
     l[0] = p;
     var o = {};
     for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
     (o.originalType = e), (o[d] = "string" == typeof e ? e : r), (l[1] = o);
     for (var u = 2; u < a; u++) l[u] = n[u];
     return i.createElement.apply(null, l);
    }
    return i.createElement.apply(null, n);
   }
   p.displayName = "MDXCreateElement";
  },
  66970: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => c, frontMatter: () => a, metadata: () => o, toc: () => u });
   var i = n(87462),
    r = (n(67294), n(3905));
   const a = { title: "Ruimte", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Ruimte", sidebar_position: 4, pagination_label: "Ruimte", description: "Richtlijnen voor ruimte", keywords: ["ruimte", "toegankelijkheid"] },
    l = void 0,
    o = { unversionedId: "richtlijnen/stijl/ruimte", id: "richtlijnen/stijl/ruimte", title: "Ruimte", description: "Richtlijnen voor ruimte", source: "@site/docs/richtlijnen/stijl/ruimte.md", sourceDirName: "richtlijnen/stijl", slug: "/richtlijnen/stijl/ruimte", permalink: "/richtlijnen/stijl/ruimte", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/richtlijnen/stijl/ruimte.md", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Ruimte", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Ruimte", sidebar_position: 4, pagination_label: "Ruimte", description: "Richtlijnen voor ruimte", keywords: ["ruimte", "toegankelijkheid"] }, sidebar: "richtlijnen", previous: { title: "Iconen", permalink: "/richtlijnen/stijl/iconen" }, next: { title: "Formulieren", permalink: "/richtlijnen/formulieren/overzicht" } },
    s = {},
    u = [
     { value: "Spacing scale", id: "spacing-scale", level: 2 },
     { value: "Maak gebruik van een spacing scale.", id: "maak-gebruik-van-een-spacing-scale", level: 3 },
     { value: "Box model", id: "box-model", level: 2 },
     { value: "Werk en denk vanuit het box model.", id: "werk-en-denk-vanuit-het-box-model", level: 3 },
     { value: "Content", id: "content", level: 4 },
     { value: "Padding", id: "padding", level: 4 },
     { value: "Border", id: "border", level: 4 },
     { value: "Margin", id: "margin", level: 4 },
     { value: "Spacing concepten", id: "spacing-concepten", level: 2 },
     { value: "Maak gebruik van de spacing concepten.", id: "maak-gebruik-van-de-spacing-concepten", level: 3 },
     { value: "Inline", id: "inline", level: 4 },
     { value: "Block", id: "block", level: 4 },
     { value: "Text", id: "text", level: 4 },
     { value: "Column", id: "column", level: 4 },
     { value: "Row", id: "row", level: 4 },
     { value: "Ontwerpen met ruimte", id: "ontwerpen-met-ruimte", level: 2 },
     { value: "Relaties", id: "relaties", level: 3 },
     { value: "Gebruik ruimte om relaties te cre\xebren tussen elementen.", id: "gebruik-ruimte-om-relaties-te-cre\xebren-tussen-elementen", level: 4 },
     { value: "Relaties binnen typografie", id: "relaties-binnen-typografie", level: 4 },
     { value: "Hi\xebrarchie", id: "hi\xebrarchie", level: 3 },
     { value: "Gebruik ruimte om hi\xebrarchie te cre\xebren tussen elementen.", id: "gebruik-ruimte-om-hi\xebrarchie-te-cre\xebren-tussen-elementen", level: 4 },
     { value: "Ruim of Compact", id: "ruim-of-compact", level: 3 },
     { value: "Stem het gebruik van ruimte af op de functie en inhoud van de dienst.", id: "stem-het-gebruik-van-ruimte-af-op-de-functie-en-inhoud-van-de-dienst", level: 4 },
     { value: "Ruimte tussen interactieve elementen", id: "ruimte-tussen-interactieve-elementen", level: 3 },
     { value: "Reserveer ruimte tussen interactieve elementen.", id: "reserveer-ruimte-tussen-interactieve-elementen", level: 4 },
     { value: "Meer informatie", id: "meer-informatie", level: 2 },
     { value: "Gerelateerde WCAG Richtlijnen", id: "gerelateerde-wcag-richtlijnen", level: 3 },
     { value: "Links", id: "links", level: 3 },
     { value: "Help deze documentatie te verbeteren", id: "help-deze-documentatie-te-verbeteren", level: 2 },
     { value: "Vragen", id: "vragen", level: 2 },
    ],
    m = { toc: u },
    d = "wrapper";
   function c(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(d, (0, i.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "ruimte" }, "Ruimte"), (0, r.kt)("p", null, "Ruimte (\u2018Spacing\u2019 in het Engels) helpt bij het organiseren van inhoud. Door ruimte op een voorspelbare manier toe te passen kun je visueel verbanden leggen en orde scheppen. Dit geldt voor componenten maar ook voor de algehele opmaak van een pagina ofwel \u2018layout\u2019."), (0, r.kt)("h2", { id: "spacing-scale" }, "Spacing scale"), (0, r.kt)("h3", { id: "maak-gebruik-van-een-spacing-scale" }, "Maak gebruik van een spacing scale."), (0, r.kt)("p", null, "Om ruimte consistent toe te passen is het verstandig om te werken met een vaste set aan waardes die oplopen in grootte. Een zogenoemde \u2018spacing scale\u2019. Een spacing scale start met kleine waardes. Hiermee kun je relaties cre\xebren op detailniveau. Vervolgens loopt de spacing scale, vaak met steeds grotere spongen, op naar waardes die ingezet kunnen worden voor een ruimere opzet."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_spacing-scale.png", alt: "13 losse blokjes die steeds breeder worden. Onder elk blok staat een getal" })), (0, r.kt)("p", null, "Ook bij het Voorbeeld thema maken we gebruik van een spacing scale. Sterker nog, we hebben meerdere spacing scales. \xc9\xe9n voor elk ", (0, r.kt)("a", { parentName: "p", href: "#spacing-concepten" }, "spacing concept"), "."), (0, r.kt)("h2", { id: "box-model" }, "Box model"), (0, r.kt)("h3", { id: "werk-en-denk-vanuit-het-box-model" }, "Werk en denk vanuit het box model."), (0, r.kt)("p", null, "De ", (0, r.kt)("a", { parentName: "p", href: "#spacing-concepten" }, "spacing concepten"), " van het NL Design System zijn gebouwd rond het fundamentele layout-principe van CSS, ook wel bekend als het \u2018box model\u2019."), (0, r.kt)("p", null, "Alle elementen van een webpagina staan in een box, een rechthoek die het element omsluit."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_box-model.png", alt: "Box model structuur met een grotere box die de margin vertegenwoordigt rond een kleinere box die de content voorstelt met zijn padding en border." })), (0, r.kt)("h4", { id: "content" }, "Content"), (0, r.kt)("p", null, "Inhoud ofwel \u2018Content\u2019 is de ruimte voor tekst, een plaatje of andere elementen."), (0, r.kt)("h4", { id: "padding" }, "Padding"), (0, r.kt)("p", null, "Padding is de ruimte tussen de content en de border. Zonder padding zou de border strak om de content zitten. Padding heeft dezelfde achtergrondkleur als de content."), (0, r.kt)("h4", { id: "border" }, "Border"), (0, r.kt)("p", null, "De border is de rand om de content."), (0, r.kt)("h4", { id: "margin" }, "Margin"), (0, r.kt)("p", null, "Marge ofwel \u2018Margin\u2019 is het deel buiten de border van de box. Margin zorgt voor ruimte tussen aangrenzende boxen. Margin is transparant, heeft geen eigen kleur. Margin draagt niet bij aan de breedte van een element."), (0, r.kt)("h2", { id: "spacing-concepten" }, "Spacing concepten"), (0, r.kt)("h3", { id: "maak-gebruik-van-de-spacing-concepten" }, "Maak gebruik van de spacing concepten."), (0, r.kt)("p", null, "Binnen het NL Design System is ruimte conceptueel opgezet door vijf herbruikbare spacing scales: Inline, Block, Text, Column en Row. Deze \u2018spacing concepten\u2019 worden met behulp van Design Tokens toegepast op alle componenten en templates."), (0, r.kt)("p", null, "Let wel; gebruik 'Spacing' design tokens enkel voor ruimte binnen en tussen componenten. Gebruik 'Sizing' design tokens voor de grootte van elementen."), (0, r.kt)("h4", { id: "inline" }, "Inline"), (0, r.kt)("p", null, "Inline tussenruimte is de ruimte binnen componenten, voor of na tekst."), (0, r.kt)("p", null, "Gebruik de \u2018Inline\u2019 spacing scale om binnen componenten ruimte te creeeren voor of na tekst. In CSS kun je de volgende properties gebruiken:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "margin-inline-start"), (0, r.kt)("li", { parentName: "ul" }, "margin-inline-end"), (0, r.kt)("li", { parentName: "ul" }, "padding-inline-start"), (0, r.kt)("li", { parentName: "ul" }, "padding-inline-end")), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-inline.png", alt: "Spacing scale met verticaal 10 blokjes. In elk blokje staat de tekst 'label'. Links en rechts van de tekst staan lichtroze vlakken. De vlakken worden per blokje breeder." })), (0, r.kt)("h4", { id: "block" }, "Block"), (0, r.kt)("p", null, "Block tussenruimte is de ruimte binnen componenten, boven of onder tekst."), (0, r.kt)("p", null, "Gebruik de \u2018Block\u2019 spacing scale om binnen componenten ruimte te creeeren boven of onder tekst. In CSS kun je de volgende properties gebruiken:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "margin-block-start"), (0, r.kt)("li", { parentName: "ul" }, "margin-block-end"), (0, r.kt)("li", { parentName: "ul" }, "padding-block-start"), (0, r.kt)("li", { parentName: "ul" }, "padding-block-end")), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-block.png", alt: "Spacing scale met horizontaal 10 blokjes. In elk blokje staat de tekst 'label'. Boven en onder de tekst staan roze vlakken. De vlakken worden per blokje hoger." })), (0, r.kt)("h4", { id: "text" }, "Text"), (0, r.kt)("p", null, "Text tussenruimte is de ruimte binnen componenten, tussen tekst en iconen."), (0, r.kt)("p", null, "Gebruik de \u2018Text\u2019 spacing scale om binnen componenten ruimte te creeeren tussen verschillende teksten of iconen."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-text.png", alt: "Spacing scale met verticaal 10 blokjes. In elk blokje staat een kalender icoon en de tekst 'label'. Tussen het icoon en de tekst staan groene vlakken. De vlakken worden per blokje breeder." })), (0, r.kt)("h4", { id: "column" }, "Column"), (0, r.kt)("p", null, "Column tussenruimte is de horizontale ruimte tussen componenten."), (0, r.kt)("p", null, "Gebruik de \u2018Column\u2019 spacing scale om horizontaal ruimte te creeeren tussen componenten. In CSS kun je de volgende properties gebruiken:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "margin-inline-start"), (0, r.kt)("li", { parentName: "ul" }, "margin-inline-end"), (0, r.kt)("li", { parentName: "ul" }, "padding-inline-start"), (0, r.kt)("li", { parentName: "ul" }, "padding-inline-end")), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-column.png", alt: "Spacing scale met verticaal 2 kolommen van 10 blokjes. In elk blokje staat de tekst 'label'. Per twee blokjes is er hotizontaal een lichtblauw vlak De vlakken worden per blokje breeder." })), (0, r.kt)("h4", { id: "row" }, "Row"), (0, r.kt)("p", null, "Row tussenruimte is de verticale ruimte tussen componenten."), (0, r.kt)("p", null, "Gebruik de \u2018Row\u2019 spacing scale om verticaal ruimte te creeeren tussen componenten. In CSS kun je de volgende properties gebruiken:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "margin-block-start"), (0, r.kt)("li", { parentName: "ul" }, "margin-block-end"), (0, r.kt)("li", { parentName: "ul" }, "padding-block-start"), (0, r.kt)("li", { parentName: "ul" }, "padding-block-end")), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_concept-row.png", alt: "Spacing scale met horizontaal 2 rijen van 10 blokjes. In elk blokje staat de tekst 'label'. Per twee blokjes is er verticaal een blauw vlak. De vlakken worden per blokje hoger." })), (0, r.kt)("p", null, "Met deze spacing concepten kun je alle componenten op een consistente manier van ruimte voorzien. Denk bijvoorbeeld aan een \u2018Card\u2019 of de ruimte tussen de elementen in een formulier."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_card.png", alt: "Twee card componenten. Bij het eerste card component zijn door middel van kleurvlakken de ruimtes aangeduid." })), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_form.png", alt: "Twee korte formulieren. Bij het eerste formulier zijn door middel van kleurvlakken de verticale ruimtes aangeduid." })), (0, r.kt)("h2", { id: "ontwerpen-met-ruimte" }, "Ontwerpen met ruimte"), (0, r.kt)("h3", { id: "relaties" }, "Relaties"), (0, r.kt)("h4", { id: "gebruik-ruimte-om-relaties-te-cre\xebren-tussen-elementen" }, "Gebruik ruimte om relaties te cre\xebren tussen elementen."), (0, r.kt)("p", null, "Gebruik kleine afstanden om elementen samen te groeperen en grotere afstanden om ze te scheiden. Elementen die dicht bij elkaar staan lijken meer met elkaar verbonden te zijn dan dingen die verder uit elkaar staan."), (0, r.kt)("p", null, "Dit is een van de ", (0, r.kt)("a", { parentName: "p", href: "https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/" }, "Gestalt principes"), " ookwel bekend als ", (0, r.kt)("a", { parentName: "p", href: "https://lawsofux.com/law-of-proximity/" }, "Law of proximity"), "."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_relaties.png", alt: "36 stippen. Door een ruimte wordt er een groepje van 24 en 12 stippen gemaakt." })), (0, r.kt)("h4", { id: "relaties-binnen-typografie" }, "Relaties binnen typografie"), (0, r.kt)("p", null, "De ruimte tussen een voorgaande sectie en een koptekst moet groter zijn dan de ruimte tussen de koptekst en de eerste alinea na die koptekst."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_relaties-typografie.png", alt: "Screenshot van een artikel. Duidelijk is dat de witruimte boven kopteksten groter is dan onder de kopteksten." })), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html" }, "WCAG richtlijn 1.4.8 \u2018Visual Presentation\u2019"), " beschrijft dat de regelafstand van een alinea ten minste 1.5 zou moeten zijn. En dat de afstand tussen alinea\u2019s ten minste 1,5 keer zo groot zou moeten zijn als de regelafstand."), (0, r.kt)("h3", { id: "hi\xebrarchie" }, "Hi\xebrarchie"), (0, r.kt)("h4", { id: "gebruik-ruimte-om-hi\xebrarchie-te-cre\xebren-tussen-elementen" }, "Gebruik ruimte om hi\xebrarchie te cre\xebren tussen elementen."), (0, r.kt)("p", null, "Gebruik ruimte om belangrijke elementen extra attentiewaarde mee te geven. Elementen met meer ruimte hebben ogen belangrijker dan elementen die minder ruimte om zich heen hebben."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_hierarchie.png", alt: "Vier stippen in vier vlakken. Er is 1 vlak dat meer witruimte heeft waardoor deze meer opvalt." })), (0, r.kt)("h3", { id: "ruim-of-compact" }, "Ruim of Compact"), (0, r.kt)("h4", { id: "stem-het-gebruik-van-ruimte-af-op-de-functie-en-inhoud-van-de-dienst" }, "Stem het gebruik van ruimte af op de functie en inhoud van de dienst."), (0, r.kt)("p", null, "Veel ruimte werkt goed bij het lezen van langere teksten en het cre\xebren van een bepaalde sfeer (branding). Compacte ruimte is geschikt voor het effici\xebnt uitvoeren van taken. Denk bijvoorbeeld aan pagina\u2019s met veel data in tabellen."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_purpose.png", alt: "Twee schematische weergaves van een interface. De eerste is ruim opgezet met een groot vlak en tekst. De tweede is compact met een tabel" })), (0, r.kt)("p", null, "Informatie die te compact wordt gepresenteerd kan moeilijk te verwerken zijn voor gebruikers. Zorg er daarom voor dat de layout van de pagina voldoende witruimte heeft."), (0, r.kt)("h3", { id: "ruimte-tussen-interactieve-elementen" }, "Ruimte tussen interactieve elementen"), (0, r.kt)("h4", { id: "reserveer-ruimte-tussen-interactieve-elementen" }, "Reserveer ruimte tussen interactieve elementen."), (0, r.kt)("p", null, "Hoewel WCAG wel een richtlijn heeft voor target size. Wordt er niks vermeld over ruimte tussen interactieve elementen. Toch is het aan te raden om tussen interactieve elementen wat ruimte te reserveren. Op die manier neemt de kans om onbedoeld iets te activeren af."), (0, r.kt)("p", null, "Voor iemand met een bevende hand kan een website lastiger te gebruiken zijn als grote delen van het scherm interactief (button of link) zijn."), (0, r.kt)("p", null, (0, r.kt)("img", { parentName: "p", src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/richtlijnen_stijl_ruimte_interactieve-elementen.png", alt: "Drie verticaal gestapelde vlakken met daarin het woord 'Interactie element'. Tussen deze vlakken bevindt zich een lege ruimte met de tekst 'witruimte'" })), (0, r.kt)("h2", { id: "meer-informatie" }, "Meer informatie"), (0, r.kt)("h3", { id: "gerelateerde-wcag-richtlijnen" }, "Gerelateerde WCAG Richtlijnen"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.w3.org/WAI/WCAG21/Understanding/visual-presentation.html" }, "1.4.8: Visual presentation")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.w3.org/WAI/WCAG2/supplemental/patterns/o3p10-whitespace/" }, "Use White Spacing - Supplemental Guidance to WCAG 2"))), (0, r.kt)("h3", { id: "links" }, "Links"), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/" }, "Visual Perception And The Principles Of Gestalt - Steven Bradley"), (0, r.kt)("br", null), "\nArtikel waarin de verschillende gestalt principes worden beschreven."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62" }, "Space in design systems - Nathan Curtis"), (0, r.kt)("br", null), "\nArtikel waarin het toepassen van ruimte binnen een design system wordt beschreven."), (0, r.kt)("p", null, (0, r.kt)("a", { parentName: "p", href: "https://axesslab.com/hand-tremors/" }, "Hand tremors and the giant-button-problem - Hampus Sethfors"), (0, r.kt)("br", null), "\nArtikel, en video, waarin duidelijk wordt waarom het van belang is om voldoende witruimte bij grote interactieve elementen toe te voegen."), (0, r.kt)("hr", null), (0, r.kt)("h2", { id: "help-deze-documentatie-te-verbeteren" }, "Help deze documentatie te verbeteren"), (0, r.kt)("p", null, "Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/documentatie" }, "Github"), "."), (0, r.kt)("h2", { id: "vragen" }, "Vragen"), (0, r.kt)("p", null, "Heb je een vraag? Twijfel niet en ", (0, r.kt)("a", { parentName: "p", href: "/project/kernteam" }, "neem contact op met het kernteam"), "."));
   }
   c.isMDXComponent = !0;
  },
 },
]);
