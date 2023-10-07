"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6584],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => u });
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
   function l(e, n) {
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
   var s = r.createContext({}),
    d = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    p = function (e) {
     var n = d(e.components);
     return r.createElement(s.Provider, { value: n }, e.children);
    },
    m = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return r.createElement(r.Fragment, {}, n);
     },
    },
    k = r.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      k = a,
      u = m["".concat(s, ".").concat(k)] || m[k] || c[k] || i;
     return t ? r.createElement(u, o(o({ ref: n }, p), {}, { components: t })) : r.createElement(u, o({ ref: n }, p));
    });
   function u(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      o = new Array(i);
     o[0] = k;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[m] = "string" == typeof e ? e : a), (o[1] = l);
     for (var d = 2; d < i; d++) o[d] = t[d];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  41922: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => o, default: () => c, frontMatter: () => i, metadata: () => l, toc: () => d });
   var r = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "Herbruikbare CSS schrijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Herbruikbare CSS schrijven", pagination_label: "Herbruikbare CSS schrijven", description: "Als developer CSS schrijven aan NL Design System", keywords: ["developer", "CSS", "componenten"] },
    o = "Herbruikbare CSS schrijven voor NL Design System",
    l = { unversionedId: "meedoen/als-developer/herbruikbare-css", id: "meedoen/als-developer/herbruikbare-css", title: "Herbruikbare CSS schrijven", description: "Als developer CSS schrijven aan NL Design System", source: "@site/docs/meedoen/als-developer/10-herbruikbare-css.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/herbruikbare-css", permalink: "/meedoen/als-developer/herbruikbare-css", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/10-herbruikbare-css.md", tags: [], version: "current", sidebarPosition: 10, frontMatter: { title: "Herbruikbare CSS schrijven", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Herbruikbare CSS schrijven", pagination_label: "Herbruikbare CSS schrijven", description: "Als developer CSS schrijven aan NL Design System", keywords: ["developer", "CSS", "componenten"] }, sidebar: "meedoen", previous: { title: "Meewerken", permalink: "/meedoen/als-developer/meewerken-als-developer" }, next: { title: "Voor leveranciers", permalink: "/meedoen/als-leverancier/overzicht" } },
    s = {},
    d = [
     { value: "Schrijf CSS die ook werkt voor anderen", id: "schrijf-css-die-ook-werkt-voor-anderen", level: 2 },
     { value: "Schrijf CSS die niet de stylesheet van anderen in de weg zit", id: "schrijf-css-die-niet-de-stylesheet-van-anderen-in-de-weg-zit", level: 2 },
     { value: "Schrijf CSS die niet afhankelijk is van een <code>reset.css</code>", id: "schrijf-css-die-niet-afhankelijk-is-van-een-resetcss", level: 2 },
     { value: "Reset in een SCSS mixin", id: "reset-in-een-scss-mixin", level: 3 },
     { value: "Schrijf SCSS mixins voor gebruik met andere een CSS selector", id: "schrijf-scss-mixins-voor-gebruik-met-andere-een-css-selector", level: 2 },
     { value: "Schrijf CSS een class name die anderen niet gaan gebruiken", id: "schrijf-css-een-class-name-die-anderen-niet-gaan-gebruiken", level: 2 },
     { value: "Hulp nodig of gewoon even kennis maken?", id: "hulp-nodig-of-gewoon-even-kennis-maken", level: 2 },
    ],
    p = { toc: d },
    m = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(m, (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "herbruikbare-css-schrijven-voor-nl-design-system" }, "Herbruikbare CSS schrijven voor NL Design System"), (0, a.kt)("p", null, "We hebben tips om herbruikbare CSS te schrijven, voor iedereen die werkt aan projecten in de NL Design System community. Wanneer je een nieuw component gaat ontwikkelen, omdat je iets nodig hebt dat nog niet bestaat in de community, dan kun je herbruikbare CSS schrijven zodat anderen ook je nieuwe component kunnen gebruiken."), (0, a.kt)("p", null, "Als je werkt aan software die door verschillende overheidsorganisaties wordt ingezet, dan is het belangrijk dat bezoekers de website of app vertrouwen doordat het dezelfde huisstijl heeft als ze gewend zijn. Dit geldt bijvoorbeeld voor makers van een CMS voor meerdere gemeenten, of voor ", (0, a.kt)("a", { parentName: "p", href: "http://commonground.nl" }, "Common Ground"), " software. Als jouw CSS instelbaar is met design tokens, dan is het veel minder werk om de huisstijl goed te gebruiken en hebben de gebruikers al gelijk meer vertrouwen in de dienst."), (0, a.kt)("h2", { id: "schrijf-css-die-ook-werkt-voor-anderen" }, "Schrijf CSS die ook werkt voor anderen"), (0, a.kt)("p", null, "Vermijd code voor je huisstijl in herbruikbare CSS. Gebruik CSS variabelen voor ", (0, a.kt)("em", { parentName: "p" }, "component design tokens"), " die ingevuld kunnen worden met de huisstijl van anderen. Dit is belangrijk als jouw componenten door anderen gebruikt worden, of als je aan software bouwt die door verschillende organisaties wordt ge\xefnstalleerd met hun eigen huisstijl."), (0, a.kt)("p", null, "Bijvoorbeeld zo niet, met ", (0, a.kt)("em", { parentName: "p" }, "brand design tokens"), " in je component:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, ".example-button {\n  background-color: var(--example-blue);\n}\n")), (0, a.kt)("p", null, "Maar wel zo, met ", (0, a.kt)("em", { parentName: "p" }, "component design tokens"), " voor je component:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, ".example-button {\n  background-color: var(--example-button-background-color);\n}\n")), (0, a.kt)("p", null, "De code voor je eigen huisstijl gebruik je dan als losse theme. In je thema zal de ", (0, a.kt)("em", { parentName: "p" }, "component design token"), " verwijzen naar de ", (0, a.kt)("em", { parentName: "p" }, "brand design token"), "."), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, ".example-theme {\n  --example-blue: navy;\n  --example-button-background-color: var(--example-blue);\n}\n")), (0, a.kt)("p", null, "Zo'n CSS-bestand met de theme kun je automatisch laten maken, door een ", (0, a.kt)("a", { parentName: "p", href: "https://design-tokens.github.io/community-group/format/" }, "Design Tokens JSON bestand"), " met ", (0, a.kt)("a", { parentName: "p", href: "https://amzn.github.io/style-dictionary/" }, "Style Dictionary"), " te vertalen naar CSS. Elke huisstijl kan zijn eigen design token JSON bestand hebben, die gebruikt wordt in meerdere projecten."), (0, a.kt)("h2", { id: "schrijf-css-die-niet-de-stylesheet-van-anderen-in-de-weg-zit" }, "Schrijf CSS die niet de stylesheet van anderen in de weg zit"), (0, a.kt)("p", null, "Deel je CSS in een file die anderen kunnen importeren zonder dat het effect heeft op hun website. De pagina moet eerst een CSS class name gebruiken, voordat jouw CSS effect heeft. Op deze manier kunnen anderen zonder extra werk delen van jouw CSS hergebruiken."), (0, a.kt)("p", null, "Bijvoorbeeld ", (0, a.kt)("em", { parentName: "p" }, "niet"), " zo:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, ":root {\n  --example-link-color: blue;\n}\n\na:link {\n  color: var(--example-link-color);\n}\n")), (0, a.kt)("p", null, "Maar zo:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, ".example-theme {\n  --example-link-color: blue;\n}\n\n.example-link,\n.example-html-content a:link {\n  color: var(--example-link-color);\n}\n")), (0, a.kt)("h2", { id: "schrijf-css-die-niet-afhankelijk-is-van-een-resetcss" }, "Schrijf CSS die niet afhankelijk is van een ", (0, a.kt)("inlineCode", { parentName: "h2" }, "reset.css")), (0, a.kt)("p", null, "Als je een HTML element zoals ", (0, a.kt)("inlineCode", { parentName: "p" }, "<ul>"), " gebruikt om een navigatie-component te maken, dan wil je bijvoorbeeld geen last hebben van ", (0, a.kt)("inlineCode", { parentName: "p" }, "padding-inline-start"), " uit de browser default stylesheet (zoals ", (0, a.kt)("a", { parentName: "p", href: "https://hg.mozilla.org/mozilla-central/file/tip/layout/style/res/html.css" }, "die van Firefox"), " of ", (0, a.kt)("a", { parentName: "p", href: "https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css" }, "van Safari"), "). Gebruik dan expliciet in de component daarvoor CSS:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, "ul.example-nav {\n  padding-inline-start: 0;\n  /* \u2026other styles\u2026 */\n}\n")), (0, a.kt)("p", null, "Als jouw project een ", (0, a.kt)("a", { parentName: "p", href: "https://meyerweb.com/eric/tools/css/reset/" }, (0, a.kt)("inlineCode", { parentName: "a" }, "reset.css"), " variant"), " gebruikt dan heb jij die padding reset misschien niet nodig, maar gebruik dan toch wel die CSS zodat het ook werkt voor anderen zonder jouw ", (0, a.kt)("inlineCode", { parentName: "p" }, "reset.css"), "."), (0, a.kt)("p", null, "Dus ", (0, a.kt)("em", { parentName: "p" }, "niet"), " zo:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, "* {\n  padding: 0;\n}\n\nul.example-nav {\n  /* \u2026other styles\u2026 */\n}\n")), (0, a.kt)("h3", { id: "reset-in-een-scss-mixin" }, "Reset in een SCSS mixin"), (0, a.kt)("p", null, "Als je in CSS ziet dat een property is ingesteld ", (0, a.kt)("em", { parentName: "p" }, "initial value"), " van die property (zoals ", (0, a.kt)("inlineCode", { parentName: "p" }, "0"), " voor padding properties), dan kun je denken: die code kan gewoon weg. Als reset code in een los bestand staat met mixins, dan ontbreekt de context dat het bedoeld is om een bepaald HTML element te resetten."), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-scss" }, "@mixin example-nav {\n  padding-inline-start: 0;\n  /* \u2026other styles\u2026 */\n}\n")), (0, a.kt)("p", null, 'Je wilt dan duidelijk maken waarom de code er is, om te voorkomen dat iemand het later "opschoont". Je kunt bijvoorbeeld de code verplaatsen naar een mixin voor alleen de reset code:'), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-scss" }, "@mixin reset-ul {\n  padding-inline-start: 0;\n  /* \u2026other styles\u2026 */\n}\n\n@mixin example-nav {\n  @include reset-ul;\n  /* \u2026other styles\u2026 */\n}\n")), (0, a.kt)("h2", { id: "schrijf-scss-mixins-voor-gebruik-met-andere-een-css-selector" }, "Schrijf SCSS mixins voor gebruik met andere een CSS selector"), (0, a.kt)("p", null, "Als de onderdelen van je CSS deelt als ", (0, a.kt)("a", { parentName: "p", href: "https://sass-lang.com/documentation/at-rules/mixin" }, "SCSS ", (0, a.kt)("em", { parentName: "a" }, "mixin")), " dan kan jouw CSS ook werken voor projecten die een andere CSS selector gebruiken dan jij."), (0, a.kt)("p", null, "Bijvoorbeeld ", (0, a.kt)("inlineCode", { parentName: "p" }, "_mixin.scss"), ":"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-scss" }, "@mixin example-link {\n  color: var(--example-link-color);\n}\n")), (0, a.kt)("p", null, "Bijvoorbeeld ", (0, a.kt)("inlineCode", { parentName: "p" }, "index.scss"), ":"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-scss" }, '@import "./mixin";\n\n.example-link {\n  @include example-link;\n}\n')), (0, a.kt)("p", null, "Een ander project moet de CSS misschien op alle links toepassen op de pagina, omdat ze geen invloed hebben op de HTML:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-scss" }, '@import "@example/css-components/link";\n\na:link {\n  @include example-link;\n}\n')), (0, a.kt)("p", null, "Nog een ander project gebruikt de CSS voor een web component met Shadow DOM:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-scss" }, '@import "@example/css-components/link";\n\n:host {\n  @include example-link;\n}\n')), (0, a.kt)("p", null, "Nog een ander project gebruikt het tijdelijk tijdens een migratie voor oude CSS class names, totdat alle templates de nieuwe ", (0, a.kt)("inlineCode", { parentName: "p" }, "example-link"), " class name gebruiken."), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-scss" }, '@import "@example/css-components/link";\n\n.old-link {\n  @include example-link;\n}\n')), (0, a.kt)("h2", { id: "schrijf-css-een-class-name-die-anderen-niet-gaan-gebruiken" }, "Schrijf CSS een class name die anderen niet gaan gebruiken"), (0, a.kt)("p", null, "Begin namen in je code met een prefix voor jouw organisatie, zoals in BEM class names, CSS variabelen en Custom Elements. Wij gebruiken ", (0, a.kt)("inlineCode", { parentName: "p" }, "nl-"), ", jij kiest iets anders. Gebruik alleen letters en cijfers in de prefix, geen andere tekens zoals het koppelstreepje."), (0, a.kt)("p", null, "Heb je een variant nodig op een CSS component uit de community? Gebruik dan je eigen prefix voor de uitbreiding, niet de prefix van anderen. Je moet geen class name maken die de developers van de andere prefix in de toekomst misschien gaan gebruiken."), (0, a.kt)("p", null, "Bijvoorbeeld niet zo, als je een ", (0, a.kt)("inlineCode", { parentName: "p" }, "small"), " variant van de ", (0, a.kt)("inlineCode", { parentName: "p" }, "nl-button"), " nodig hebt:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, ".nl-button--small {\n  font-size: 16px;\n}\n")), (0, a.kt)("p", null, "Wanneer de developers later een nieuwe versie maken met dezelfde naam, dan zul je de code moeten aanpassen om veilig te updaten naar de laatste versie."), (0, a.kt)("p", null, "Bijvoorbeeld wel zo:"), (0, a.kt)("pre", null, (0, a.kt)("code", { parentName: "pre", className: "language-css" }, ".example-button--small {\n  font-size: 16px;\n}\n")), (0, a.kt)("h2", { id: "hulp-nodig-of-gewoon-even-kennis-maken" }, "Hulp nodig of gewoon even kennis maken?"), (0, a.kt)("p", null, "Dat kan! Onze gegevens kun je vinden op de ", (0, a.kt)("a", { parentName: "p", href: "/project/kernteam" }, "pagina over het kernteam"), "."));
   }
   c.isMDXComponent = !0;
  },
 },
]);
