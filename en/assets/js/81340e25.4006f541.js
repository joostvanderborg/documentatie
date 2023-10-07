"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9431],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => d, kt: () => g });
   var i = t(67294);
   function r(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function a(e, n) {
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
   function o(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? a(Object(t), !0).forEach(function (n) {
         r(e, n, t[n]);
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
     i,
     r = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       r = {},
       a = Object.keys(e);
      for (i = 0; i < a.length; i++) (t = a[i]), n.indexOf(t) >= 0 || (r[t] = e[t]);
      return r;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (i = 0; i < a.length; i++) (t = a[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
    }
    return r;
   }
   var m = i.createContext({}),
    s = function (e) {
     var n = i.useContext(m),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : o(o({}, n), e)), t;
    },
    d = function (e) {
     var n = s(e.components);
     return i.createElement(m.Provider, { value: n }, e.children);
    },
    p = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    c = i.forwardRef(function (e, n) {
     var t = e.components,
      r = e.mdxType,
      a = e.originalType,
      m = e.parentName,
      d = l(e, ["components", "mdxType", "originalType", "parentName"]),
      p = s(t),
      c = r,
      g = p["".concat(m, ".").concat(c)] || p[c] || u[c] || a;
     return t ? i.createElement(g, o(o({ ref: n }, d), {}, { components: t })) : i.createElement(g, o({ ref: n }, d));
    });
   function g(e, n) {
    var t = arguments,
     r = n && n.mdxType;
    if ("string" == typeof e || r) {
     var a = t.length,
      o = new Array(a);
     o[0] = c;
     var l = {};
     for (var m in n) hasOwnProperty.call(n, m) && (l[m] = n[m]);
     (l.originalType = e), (l[p] = "string" == typeof e ? e : r), (o[1] = l);
     for (var s = 2; s < a; s++) o[s] = t[s];
     return i.createElement.apply(null, o);
    }
    return i.createElement.apply(null, t);
   }
   c.displayName = "MDXCreateElement";
  },
  4556: (e, n, t) => {
   t.r(n), t.d(n, { assets: () => m, contentTitle: () => o, default: () => u, frontMatter: () => a, metadata: () => l, toc: () => s });
   var i = t(87462),
    r = (t(67294), t(3905));
   const a = { title: "Community voor designers", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Community", sidebar_position: 5, pagination_label: "Voorbeeld thema", description: "Lees over de community van designers en hoe je hier onderdeel van kan worden.", keywords: ["index", "designer", "community", "figma"] },
    o = "Community voor designers",
    l = { unversionedId: "meedoen/als-designer/community", id: "meedoen/als-designer/community", title: "Community voor designers", description: "Lees over de community van designers en hoe je hier onderdeel van kan worden.", source: "@site/docs/meedoen/als-designer/community.md", sourceDirName: "meedoen/als-designer", slug: "/meedoen/als-designer/community", permalink: "/en/meedoen/als-designer/community", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/meedoen/als-designer/community.md", tags: [], version: "current", sidebarPosition: 5, frontMatter: { title: "Community voor designers", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Community", sidebar_position: 5, pagination_label: "Voorbeeld thema", description: "Lees over de community van designers en hoe je hier onderdeel van kan worden.", keywords: ["index", "designer", "community", "figma"] }, sidebar: "meedoen", previous: { title: "Voorbeeld thema", permalink: "/en/meedoen/als-designer/voorbeeld-thema" }, next: { title: "Voor developers", permalink: "/en/meedoen/als-developer/overzicht" } },
    m = {},
    s = [
     { value: "Slack", id: "slack", level: 2 },
     { value: "Design open hour", id: "design-open-hour", level: 2 },
     { value: "Design system projecten", id: "design-system-projecten", level: 2 },
     { value: "Rijkshuisstijl in Figma", id: "rijkshuisstijl-in-figma", level: 2 },
     { value: "Help deze documentatie te verbeteren", id: "help-deze-documentatie-te-verbeteren", level: 2 },
     { value: "Vragen", id: "vragen", level: 2 },
    ],
    d = { toc: s },
    p = "wrapper";
   function u(e) {
    let { components: n, ...t } = e;
    return (0, r.kt)(p, (0, i.Z)({}, d, t, { components: n, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "community-voor-designers" }, "Community voor designers"), (0, r.kt)("p", null, "Je kunt als designer meekijken met andere projecten, onderzoek lezen en meepraten op Slack."), (0, r.kt)("h2", { id: "slack" }, "Slack"), (0, r.kt)("p", null, "Registreer je bij de ", (0, r.kt)("a", { parentName: "p", href: "https://praatmee.codefor.nl" }, "Code for NL Slack"), " en 'join' de kanalen: ", (0, r.kt)("inlineCode", { parentName: "p" }, "#nl-design-system"), " en ", (0, r.kt)("inlineCode", { parentName: "p" }, "#nl-design-system-designers"), "."), (0, r.kt)("h2", { id: "design-open-hour" }, "Design open hour"), (0, r.kt)("p", null, "Je bent van harte welkom bij de 'Design open hour' meeting. Hier wisselen designers informatie, inzichten en tips met elkaar uit. De meeting is om de week op dinsdag om 13:00. ", (0, r.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "Neem contact op met het kernteam"), " en we nodigen je uit."), (0, r.kt)("h2", { id: "design-system-projecten" }, "Design system projecten"), (0, r.kt)("p", null, "Neem eens een kijkje in de keuken bij andere teams:"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/ORa7CBIooPgZj6HsEPBxNR/" }, "Amsterdam Design System in Figma")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/dBzv9dd3GRFLtxzCKWq9uU/" }, "Buren in Figma")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/" }, "Den Haag Design System in Figma")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/pWIiNmzPDwYtPbYOQevpm1/" }, "Provincie Zuid-Holland in Figma")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/Sj6myBL1Fvot5M1qGxzvEo/ROOS-(RVO-Design-System)?type=design&node-id=282%3A5324&t=TeyvkmJuXgAeX8ge-1" }, "Rijksdienst voor Ondernemend Nederland (RVO) in Figma")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/ZWSC4gCrOXRUR9UX3aoZ8x/" }, "Rotterdam Design System in Figma")), (0, r.kt)("li", { parentName: "ul" }, (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/" }, "Utrecht Design System in Figma"))), (0, r.kt)("p", null, "De volgende Figma projecten zijn nog niet openbaar. Neem contact met de auteurs als je toegang nodig hebt."), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Mijn Overheid in Figma")), (0, r.kt)("h2", { id: "rijkshuisstijl-in-figma" }, "Rijkshuisstijl in Figma"), (0, r.kt)("p", null, "We krijgen vaak de vraag of ", (0, r.kt)("a", { parentName: "p", href: "https://www.rijkshuisstijl.nl" }, "Rijkshuisstijl"), " ook een Figma-bibliotheek heeft. Momenteel is deze er nog niet. We willen het wel mogelijk maken dat de ", (0, r.kt)("a", { parentName: "p", href: "/en/meedoen/als-designer/figma-structuur#nl-design-system-bibliotheek" }, "NL Design System Figma bibliotheek"), " gebruikt kan worden met design tokens van Rijkshuisstijl. Maar daar heeft het kernteam op dit moment nog geen tijd voor. Wil je helpen om dit mogelijk te maken, ", (0, r.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "neem contact op met het kernteam"), "."), (0, r.kt)("hr", null), (0, r.kt)("h2", { id: "help-deze-documentatie-te-verbeteren" }, "Help deze documentatie te verbeteren"), (0, r.kt)("p", null, "Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging voorstellen via Github."), (0, r.kt)("h2", { id: "vragen" }, "Vragen"), (0, r.kt)("p", null, "Heb je een vraag? Twijfel niet en ", (0, r.kt)("a", { parentName: "p", href: "/en/project/kernteam" }, "neem contact op met het kernteam"), "."));
   }
   u.isMDXComponent = !0;
  },
 },
]);
