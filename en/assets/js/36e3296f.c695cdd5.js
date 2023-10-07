"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [983],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => m, kt: () => k });
   var o = t(67294);
   function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function i(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     n &&
      (o = o.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, o);
    }
    return t;
   }
   function r(e) {
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
     o,
     a = (function (e, n) {
      if (null == e) return {};
      var t,
       o,
       a = {},
       i = Object.keys(e);
      for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (a[t] = e[t]);
      return a;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]));
    }
    return a;
   }
   var d = o.createContext({}),
    p = function (e) {
     var n = o.useContext(d),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : r(r({}, n), e)), t;
    },
    m = function (e) {
     var n = p(e.components);
     return o.createElement(d.Provider, { value: n }, e.children);
    },
    s = "mdxType",
    c = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return o.createElement(o.Fragment, {}, n);
     },
    },
    u = o.forwardRef(function (e, n) {
     var t = e.components,
      a = e.mdxType,
      i = e.originalType,
      d = e.parentName,
      m = l(e, ["components", "mdxType", "originalType", "parentName"]),
      s = p(t),
      u = a,
      k = s["".concat(d, ".").concat(u)] || s[u] || c[u] || i;
     return t ? o.createElement(k, r(r({ ref: n }, m), {}, { components: t })) : o.createElement(k, r({ ref: n }, m));
    });
   function k(e, n) {
    var t = arguments,
     a = n && n.mdxType;
    if ("string" == typeof e || a) {
     var i = t.length,
      r = new Array(i);
     r[0] = u;
     var l = {};
     for (var d in n) hasOwnProperty.call(n, d) && (l[d] = n[d]);
     (l.originalType = e), (l[s] = "string" == typeof e ? e : a), (r[1] = l);
     for (var p = 2; p < i; p++) r[p] = t[p];
     return o.createElement.apply(null, r);
    }
    return o.createElement.apply(null, t);
   }
   u.displayName = "MDXCreateElement";
  },
  56773: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => d, contentTitle: () => r, default: () => c, frontMatter: () => i, metadata: () => l, toc: () => p });
   var o = t(87462),
    a = (t(67294), t(3905));
   const i = { title: "Bestaand of nieuw component gebruiken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component kiezen", pagination_label: "Component kiezen", description: "Bestaand of nieuw component gebruiken?", keywords: ["developer", "aan de slag", "componenten", "samenwerken"] },
    r = "Bestaand of nieuw component gebruiken",
    l = { unversionedId: "meedoen/als-developer/samenwerken-aan-componenten", id: "meedoen/als-developer/samenwerken-aan-componenten", title: "Bestaand of nieuw component gebruiken", description: "Bestaand of nieuw component gebruiken?", source: "@site/docs/meedoen/als-developer/04-samenwerken-aan-componenten.md", sourceDirName: "meedoen/als-developer", slug: "/meedoen/als-developer/samenwerken-aan-componenten", permalink: "/en/meedoen/als-developer/samenwerken-aan-componenten", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-developer/04-samenwerken-aan-componenten.md", tags: [], version: "current", sidebarPosition: 4, frontMatter: { title: "Bestaand of nieuw component gebruiken", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Component kiezen", pagination_label: "Component kiezen", description: "Bestaand of nieuw component gebruiken?", keywords: ["developer", "aan de slag", "componenten", "samenwerken"] }, sidebar: "meedoen", previous: { title: "Thema maken", permalink: "/en/meedoen/als-developer/thema-maken" }, next: { title: "Component inzetten", permalink: "/en/meedoen/als-developer/component-inzetten" } },
    d = {},
    p = [
     { value: "Flowchart", id: "flowchart", level: 2 },
     { value: "1. Een kant-en-klaar component", id: "1-een-kant-en-klaar-component", level: 2 },
     { value: "2. Een component van een andere organisatie", id: "2-een-component-van-een-andere-organisatie", level: 2 },
     { value: "3. Een component met kleine wijziging", id: "3-een-component-met-kleine-wijziging", level: 2 },
     { value: "4. Extra feature toevoegen aan een component", id: "4-extra-feature-toevoegen-aan-een-component", level: 2 },
     { value: "5. Een nieuw herbruikbaar component maken", id: "5-een-nieuw-herbruikbaar-component-maken", level: 2 },
     { value: "6. Dit design wordt geen onderdeel van het design system", id: "6-dit-design-wordt-geen-onderdeel-van-het-design-system", level: 2 },
    ],
    m = { toc: p },
    s = "wrapper";
   function c(e) {
    let { components: n, ...t } = e;
    return (0, a.kt)(s, (0, o.Z)({}, m, t, { components: n, mdxType: "MDXLayout" }), (0, a.kt)("h1", { id: "bestaand-of-nieuw-component-gebruiken" }, "Bestaand of nieuw component gebruiken"), (0, a.kt)("p", null, "Stel je hebt een nieuwe wens voor een component of functionaliteit. Dan wil je natuurlijk weten hoe je hiervoor het NL Design System kunt gebruiken."), (0, a.kt)("p", null, "Door antwoord te geven op een paar simpele vragen wordt duidelijk of:"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Optie 1 en 2: Het met een bestaand component kan"), (0, a.kt)("li", { parentName: "ul" }, "Optie 3: Het met een bestaand component kan door een kleine toevoeging of token toe te voegen"), (0, a.kt)("li", { parentName: "ul" }, "Optie 4: Je een bestaand component verder kan uitbreiden"), (0, a.kt)("li", { parentName: "ul" }, "Optie 5: Je een nieuw component volgens de NLDS architectuur maakt"), (0, a.kt)("li", { parentName: "ul" }, "Optie 6: Je er een losstaande niet herbruikbare implementatie van maakt")), (0, a.kt)("h2", { id: "flowchart" }, "Flowchart"), (0, a.kt)("p", null, (0, a.kt)("img", { parentName: "p", src: "https://i.imgur.com/LZcYeXT.jpg", alt: "Flowchart opties hoe je een NLDS component kan gebruiken" })), (0, a.kt)("h2", { id: "1-een-kant-en-klaar-component" }, "1. Een kant-en-klaar component"), (0, a.kt)("p", null, "Bestaat het component in het NL Design System en is het geschikt om zo voor het design te gebruiken? Heeft het component een nl- prefix, bijvoorbeeld ", (0, a.kt)("inlineCode", { parentName: "p" }, "nl-component"), "?"), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Gebruik het NLDS component")), (0, a.kt)("h2", { id: "2-een-component-van-een-andere-organisatie" }, "2. Een component van een andere organisatie"), (0, a.kt)("p", null, "Het component bestaat niet in het NL Design System maar wel bij een van de organisaties die met de NLDS architectuur werken. Daarom heeft het een andere prefix, bijvoorbeeld ", (0, a.kt)("inlineCode", { parentName: "p" }, "utrecht-component"), " of ", (0, a.kt)("inlineCode", { parentName: "p" }, "den-haag-component"), ".\nHet component voldoet verder wel aan de wensen en heeft voldoende design tokens om aan het design te voldoen."), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Gebruik dit component dan met de organisatie prefix van de bestaande component en gebruik deze prefix ook voor de component design tokens."), (0, a.kt)("li", { parentName: "ul" }, "Laat ons ook weten dat dit component succesvol is ingezet zodat we kunnen overwegen het component op te nemen in het NL Design system met de ", (0, a.kt)("inlineCode", { parentName: "li" }, "nl"), " prefix.")), (0, a.kt)("h2", { id: "3-een-component-met-kleine-wijziging" }, "3. Een component met kleine wijziging"), (0, a.kt)("p", null, "Het component bestaat met de NL Design System architectuur. Ook kan het met wat extra tokens of een kleine toevoeging aan de wensen en het design voldoen. Deze aanpassing zorgt verder niet voor wijzigingen in de bestaande functionaliteit of aan de bedoeling van de maintainers van het component."), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Maak een fork"), (0, a.kt)("li", { parentName: "ul" }, "Maak een pull request waarin de voorgestelde wijziging wordt uitgelegd en aangepast."), (0, a.kt)("li", { parentName: "ul" }, "In overleg met de maintainers kan dan besloten worden het component uit te breiden of de wijziging in een fork los bij de nieuwe organisatie te laten bestaan.")), (0, a.kt)("h2", { id: "4-extra-feature-toevoegen-aan-een-component" }, "4. Extra feature toevoegen aan een component"), (0, a.kt)("p", null, "Er bestaat een component dat er erg op lijkt met de NLDS architectuur. Met een kleine wijziging die niet het doel van de component aantast en er geen Frankenstein van maakt kan het component voldoen aan de wensen van het nieuwe project."), (0, a.kt)("ol", null, (0, a.kt)("li", { parentName: "ol" }, "Overleg met de maintainers of het logisch is het component uit te breiden. Als een nieuwe component moet worden gemaakt ga dan door naar optie 5."), (0, a.kt)("li", { parentName: "ol" }, "Maak dan een fork"), (0, a.kt)("li", { parentName: "ol" }, "Maak een pull request waarin de voorgestelde toevoeging wordt uitgelegd en aangepast."), (0, a.kt)("li", { parentName: "ol" }, "De maintainers besluiten of ze de voorgestelde wijziging accepteren.", (0, a.kt)("ul", { parentName: "li" }, (0, a.kt)("li", { parentName: "ul" }, "De wijziging wordt eventueel na wat aanpassingen geaccepteerd. Gebruik dan dit component met de prefix van de originele organisatie."), (0, a.kt)("li", { parentName: "ul" }, "De wijziging wordt niet geaccepteerd. De wijziging kan dan als een fork los bij de nieuwe organisatie bestaan. Kijk hiervoor ook naar optie 5.")))), (0, a.kt)("h2", { id: "5-een-nieuw-herbruikbaar-component-maken" }, "5. Een nieuw herbruikbaar component maken"), (0, a.kt)("p", null, "Er bestaat nog geen component dat kan worden gebruikt voor het nieuwe project.\nHet is mogelijk dat het nieuw te maken component gebruikt kan worden door andere projecten."), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Overheidsorganisaties gebruiken idealiter een repo binnen nl-design-system Github met een eigen organisatie naam. Deze is dan goed vindbaar voor anderen die het component later kunnen gebruiken. Voor andere (commerci\xeble) partijen wordt een eigen organisatie repo gebruikt, hier kan wel door NLDS naar verwezen worden door de topic nl-design-system toe te voegen."), (0, a.kt)("li", { parentName: "ul" }, "Gebruik een eigen prefix, idealiter de naam van de organisatie"), (0, a.kt)("li", { parentName: "ul" }, "Maak het component volgens de NLDS architectuur, het kernteam vind het leuk om hier bij te adviseren!")), (0, a.kt)("h2", { id: "6-dit-design-wordt-geen-onderdeel-van-het-design-system" }, "6. Dit design wordt geen onderdeel van het design system"), (0, a.kt)("p", null, "Er bestaat nog geen component en het ontworpen component is zo specifiek dat deze waarschijnlijk nooit voor andere projecten gebruikt gaat worden."), (0, a.kt)("ul", null, (0, a.kt)("li", { parentName: "ul" }, "Maak de functionaliteit naar eigen inzicht en maak als hij wel in de componenten repo wordt opgenomen duidelijk dat het niet voor hergebruik ontworpen is.")));
   }
   c.isMDXComponent = !0;
  },
 },
]);
