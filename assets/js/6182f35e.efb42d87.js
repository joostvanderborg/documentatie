"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3328],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => p, kt: () => u });
   var r = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
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
   function i(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : a(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     r,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       r,
       o = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (t = a[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var s = r.createContext({}),
    d = function (e) {
     var n = r.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : i(i({}, n), e)), t;
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
      o = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      k = o,
      u = m["".concat(s, ".").concat(k)] || m[k] || c[k] || a;
     return t ? r.createElement(u, i(i({ ref: n }, p), {}, { components: t })) : r.createElement(u, i({ ref: n }, p));
    });
   function u(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var a = t.length,
      i = new Array(a);
     i[0] = k;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[m] = "string" == typeof e ? e : o), (i[1] = l);
     for (var d = 2; d < a; d++) i[d] = t[d];
     return r.createElement.apply(null, i);
    }
    return r.createElement.apply(null, t);
   }
   k.displayName = "MDXCreateElement";
  },
  61645: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => i, default: () => c, frontMatter: () => a, metadata: () => l, toc: () => d });
   var r = t(87462),
    o = (t(67294), t(3905));
   const a = { title: "Meewerken aan NLDS", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Meewerken", pagination_label: "Meewerken", description: "Als developer meewerken aan NL Design System", keywords: ["developer", "bijdragen", "componenten", "publiceren", "semver"] },
    i = "Als developer meewerken aan NL Design System",
    l = { unversionedId: "meedoen/als-developer/meewerken-als-developer", id: "meedoen/als-developer/meewerken-als-developer", title: "Meewerken aan NLDS", description: "Als developer meewerken aan NL Design System", source: "@site/docs/meedoen/als-developer/08-meewerken-als-developer.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/meewerken-als-developer", permalink: "/meedoen/als-developer/meewerken-als-developer", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/08-meewerken-als-developer.md", tags: [], version: "current", sidebarPosition: 8, frontMatter: { title: "Meewerken aan NLDS", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Meewerken", pagination_label: "Meewerken", description: "Als developer meewerken aan NL Design System", keywords: ["developer", "bijdragen", "componenten", "publiceren", "semver"] }, sidebar: "meedoen", previous: { title: "Componenten maken", permalink: "/meedoen/als-developer/componenten-maken" }, next: { title: "Herbruikbare CSS schrijven", permalink: "/meedoen/als-developer/herbruikbare-css" } },
    s = {},
    d = [{ value: "Hulp nodig of gewoon even kennis maken?", id: "hulp-nodig-of-gewoon-even-kennis-maken", level: 2 }],
    p = { toc: d },
    m = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(m, (0, r.Z)({}, p, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "als-developer-meewerken-aan-nl-design-system" }, "Als developer meewerken aan NL Design System"), (0, o.kt)("p", null, "Wil je dat jouw componenten herbruikbaar zijn voor anderen die met NL Design System werken? Dan vragen we je te letten op de volgende punten:"), (0, o.kt)("ul", null, (0, o.kt)("li", { parentName: "ul" }, "Deel je code als open source met de ", (0, o.kt)("a", { parentName: "li", href: "https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12" }, "EUPL-1.2 licentie"), "."), (0, o.kt)("li", { parentName: "ul" }, "Vermijd huisstijl-specifieke code in je CSS, gebruik in plaats daarvan CSS variabelen voor design tokens NL Design System die ingevuld kunnen worden met de huisstijl van anderen."), (0, o.kt)("li", { parentName: "ul" }, "Deel de styling van componenten in een ", (0, o.kt)("inlineCode", { parentName: "li" }, ".css"), ' bestand met alleen BEM class names, en zonder "side effects": geen code voor ', (0, o.kt)("inlineCode", { parentName: "li" }, "body"), " , ", (0, o.kt)("inlineCode", { parentName: "li" }, "p"), " of ", (0, o.kt)("inlineCode", { parentName: "li" }, ":root"), "."), (0, o.kt)("li", { parentName: "ul" }, "Begin namen in je code met een prefix voor jouw organisatie, zoals in BEM class names, CSS variabelen en Custom Elements. Wij gebruiken ", (0, o.kt)("inlineCode", { parentName: "li" }, "nl-"), ", jij kiest iets anders."), (0, o.kt)("li", { parentName: "ul" }, "Baseer de namen in je code waar mogelijk op bestaande termen uit HTML, CSS, SVG en ARIA; deze hebben de voorkeur boven namen uit populaire frameworks en boven namen die je zelf bedenkt."), (0, o.kt)("li", { parentName: "ul" }, "Publiceer een overzicht van je componenten in een Storybook website, met HTML voorbeeldcode van de componenten."), (0, o.kt)("li", { parentName: "ul" }, "Wanneer je aan een component werkt, deel een link naar jouw werk in de backlog van NL Design System op GitHub."), (0, o.kt)("li", { parentName: "ul" }, "In plaats alle componenten zelf te schrijven, probeer eerst in de backlog te vinden of iemand anders aan die component werkt, en begin met de code van een andere contributor."), (0, o.kt)("li", { parentName: "ul" }, "Wanneer componenten van anderen niet aan al je wensen voldoen, deel dan je bevindingen in de backlog en kijk of er samenwerking mogelijk is wanneer je een eigen variant wilt ontwikkelen.")), (0, o.kt)("p", null, "Op deze manier zijn wij een samenwerking begonnen met meerdere teams, en willen we dit jaar bewijzen dat ondanks alle verschillen er toch heel veel mogelijkheden zijn voor samenwerken."), (0, o.kt)("p", null, "Samen willen we een gebruiksvriendelijke online overheid nastreven door kennis en inzichten over toegankelijkheid en gebruiksvriendelijkheid te delen. We kunnen enorme impact hebben wanneer we inzichten uit gebruikersonderzoek en toegankelijkheidsonderzoek uit heel het land delen op de ", (0, o.kt)("a", { parentName: "p", href: "http://github.com/nl-design-system/backlog/issues" }, "backlog van NL Design System"), "."), (0, o.kt)("p", null, "Kennis delen is maar een gedeelte van de oplossing: de kennis moet op het juiste moment op de juiste plek aanwezig zijn. Wat ons betreft is dat: op het moment dat een component wordt doorontwikkeld moet de kennis op de backlog van het ontwikkelteam staan! Met de backlog van NL Design System kunnen we gebruikers een stem geven in nieuwe ontwikkelingen van onze online overheid, en daarmee zetten de teams die op basis van de backlog meebouwen aan NL Design System echt de gebruiker centraal."), (0, o.kt)("h2", { id: "hulp-nodig-of-gewoon-even-kennis-maken" }, "Hulp nodig of gewoon even kennis maken?"), (0, o.kt)("p", null, "Dat kan! Onze gegevens kun je vinden op de ", (0, o.kt)("a", { parentName: "p", href: "/project/kernteam" }, "pagina over het kernteam")));
   }
   c.isMDXComponent = !0;
  },
 },
]);
