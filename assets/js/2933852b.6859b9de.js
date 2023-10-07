"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6752],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => c, kt: () => g });
   var i = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function r(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i);
    }
    return t;
   }
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? r(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : r(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function l(e, n) {
    if (null == e) return {};
    var t,
     i,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       o = {},
       r = Object.keys(e);
      for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var s = i.createContext({}),
    d = function (e) {
     var n = i.useContext(s),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    c = function (e) {
     var n = d(e.components);
     return i.createElement(s.Provider, { value: n }, e.children);
    },
    m = "mdxType",
    k = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    p = i.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      r = e.originalType,
      s = e.parentName,
      c = l(e, ["components", "mdxType", "originalType", "parentName"]),
      m = d(t),
      p = o,
      g = m["".concat(s, ".").concat(p)] || m[p] || k[p] || r;
     return t ? i.createElement(g, a(a({ ref: n }, c), {}, { components: t })) : i.createElement(g, a({ ref: n }, c));
    });
   function g(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var r = t.length,
      a = new Array(r);
     a[0] = p;
     var l = {};
     for (var s in n) hasOwnProperty.call(n, s) && (l[s] = n[s]);
     (l.originalType = e), (l[m] = "string" == typeof e ? e : o), (a[1] = l);
     for (var d = 2; d < r; d++) a[d] = t[d];
     return i.createElement.apply(null, a);
    }
    return i.createElement.apply(null, t);
   }
   p.displayName = "MDXCreateElement";
  },
  11848: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => s, contentTitle: () => a, default: () => k, frontMatter: () => r, metadata: () => l, toc: () => d });
   var i = t(87462),
    o = (t(67294), t(3905));
   const r = { title: "Toegankelijkheid", hide_title: !0, hide_table_of_contents: !1, pagination_label: "Toegankelijkheid", slug: "/toegankelijkheidsverklaring" },
    a = "Toegankelijkheid",
    l = { unversionedId: "footer/toegankelijkheidsverklaring", id: "footer/toegankelijkheidsverklaring", title: "Toegankelijkheid", description: "Componenten uit de community", source: "@site/docs/footer/toegankelijkheidsverklaring.md", sourceDirName: "footer", slug: "/toegankelijkheidsverklaring", permalink: "/toegankelijkheidsverklaring", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/footer/toegankelijkheidsverklaring.md", tags: [], version: "current", frontMatter: { title: "Toegankelijkheid", hide_title: !0, hide_table_of_contents: !1, pagination_label: "Toegankelijkheid", slug: "/toegankelijkheidsverklaring" } },
    s = {},
    d = [
     { value: "Componenten uit de community", id: "componenten-uit-de-community", level: 2 },
     { value: "Verzameling offici\xeble componenten van NL Design System", id: "verzameling-offici\xeble-componenten-van-nl-design-system", level: 2 },
     { value: "Website NL Design System", id: "website-nl-design-system", level: 2 },
    ],
    c = { toc: d },
    m = "wrapper";
   function k(e) {
    let { components: n, ...t } = e;
    return (0, o.kt)(m, (0, i.Z)({}, c, t, { components: n, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "toegankelijkheid" }, "Toegankelijkheid"), (0, o.kt)("h2", { id: "componenten-uit-de-community" }, "Componenten uit de community"), (0, o.kt)("p", null, 'De componenten die de NL Design System community ontwikkelt worden direct open source gedeeld. Componenten zijn vaak beschikbaar zodra teams beginnnen met de ontwikkeling, wanneer toegankelijkheid nog niet onafhankelijk is getest. Let op welk label het component heeft in het componenten-overzicht van Storybook: "work in progress", "alpha", "beta" of "production".'), (0, o.kt)("p", null, 'De bedoeling is dat componenten het label "production" krijgen wanneer het team de component heeft ingezet, de website vervolgens is gecontroleerd en een toegankelijkheidsverklaring heeft, en geconstateerde toegankelijkheidsproblemen zijn verholpen.'), (0, o.kt)("p", null, 'Alle componenten die nu op de website staan zijn nog de "community" componenten. Controleer daarom zelf naar beste kunnen de toegankelijkheid wanneer je de component inzet, deel resultaten uit een onafhankelijke toegankelijkheidsverklaring, en werk samen met de community om de kwaliteit te verbeteren.'), (0, o.kt)("h2", { id: "verzameling-offici\xeble-componenten-van-nl-design-system" }, "Verzameling offici\xeble componenten van NL Design System"), (0, o.kt)("p", null, 'Het kernteam van NL Design System zal de komende periode veelgebruikte componenten uit de community in beheer nemen, en helpen bij het controleren van toegankelijkheid. We werken met het estafettemodel, waarbij het kernteam het stokje overneemt wanneer een component succesvol werkt in de praktijk. Wanneer tenminste tw\xe9\xe9 organisaties in de community een component van elkaar hergebruiken "in productie", en de component beide keren een positieve toegankelijkheidsverklaring krijgt of alle geconstateerde problemen nadien zijn verholpen, wordt het een kandidaat om op te nemen in de offici\xeble verzameling.'), (0, o.kt)("h2", { id: "website-nl-design-system" }, "Website NL Design System"), (0, o.kt)("p", null, "Deze website die documentatie, patronen en componenten herbergt is echter nog volop in ontwikkeling. Hierdoor kan het zijn dat deze minder toegankelijk is. We willen stapsgewijs verbeteringen maken door ook deze website met NL Design System componenten op te bouwen, zodat we een toegankelijkheidsverklaring kunnen aanvragen voor de doelarchitectuur."));
   }
   k.isMDXComponent = !0;
  },
 },
]);
