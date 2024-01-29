"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3237],
 {
  30500: (e, n, r) => {
   r.d(n, { Z: () => i });
   var i = (0, r(1048).Z)("chevron-right", "IconChevronRight", [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]]);
  },
  85845: (e, n, r) => {
   r.d(n, { Zb: () => l, aY: () => o, um: () => d, wu: () => t });
   var i = r(16532),
    s = r(86259);
   r(50959);
   const a = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" };
   var c = r(11527);
   const t = (e) => {
     let { background: n, children: r, className: i, ...t } = e;
     return (0, c.jsx)("div", { className: (0, s.Z)(a.card__illustration, n && a["card__illustration--background"], i), ...t, children: r });
    },
    o = (e) => (0, c.jsx)("div", { className: (0, s.Z)(a.card__content), ...e }),
    l = (e) => {
     let { href: n, appearance: r, className: t, component: o = "div", children: l } = e;
     const d = (e) => ("article" === o ? (0, c.jsx)("article", { ...e }) : "section" === o ? (0, c.jsx)("section", { ...e }) : (0, c.jsx)("div", { ...e })),
      h = (0, c.jsx)(d, { className: (0, s.Z)(a.cardgroup__card, a[`cardgroup__card--${r}`], t), children: l });
     return n ? (0, c.jsx)(i.rU, { href: n, boxContent: !0, className: a.cardgroup__link, children: h }) : h;
    },
    d = (e) => {
     let { appearance: n = "medium", children: r } = e;
     return (0, c.jsx)("div", { className: (0, s.Z)(a.cardgroup, a[`cardgroup--${n}`]), children: r });
    };
  },
  99139: (e, n, r) => {
   r.r(n), r.d(n, { default: () => g });
   var i = r(58812),
    s = r(45090),
    a = r(98659),
    c = r(16532),
    t = (r(50959), r(85845)),
    o = r(30500),
    l = r(86259);
   const d = { "homepage-hero": "homepage-hero_QhlF", "homepage-hero__container": "homepage-hero__container_PcJa", "homepage-hero__title": "homepage-hero__title_tZhO", "homepage-hero__description": "homepage-hero__description_yXXB", "homepage-hero__images": "homepage-hero__images_sfmM", "homepage-hero__image": "homepage-hero__image_gRv6", "homepage-hero__call-to-action": "homepage-hero__call-to-action_O5xN" };
   var h = r(11527);
   const m = (e) => {
     let { title: n, ctaLink: r, cta: s, children: a } = e;
     return (0, h.jsx)("div", { className: (0, l.Z)(d["homepage-hero"]), children: (0, h.jsxs)("div", { className: (0, l.Z)("container", d["homepage-hero__container"]), children: [(0, h.jsx)(c.nL, { className: (0, l.Z)(d["homepage-hero__title"]), children: n }), (0, h.jsx)("div", { className: (0, l.Z)(d["homepage-hero__description"]), children: a }), (0, h.jsx)(c.nv, { className: (0, l.Z)(d["homepage-hero__call-to-action"]), children: (0, h.jsxs)(i.Z, { className: (0, l.Z)("utrecht-link", d["homepage-hero__call-to-action-link"]), to: r, children: [s, (0, h.jsx)(o.Z, { className: (0, l.Z)("utrecht-icon", d["homepage-hero__call-to-action-icon"]), style: { verticalAlign: "middle" } })] }) })] }) });
    },
    j = "homepage-updates_AnWt",
    p = (e) => {
     let { children: n } = e;
     return (0, h.jsx)("div", { className: (0, l.Z)(j), children: (0, h.jsx)("div", { className: "container padding-bottom--xl", children: n }) });
    };
   function g() {
    const { siteConfig: e } = (0, s.Z)();
    return (0, h.jsx)(a.Z, { title: `${e.title} - homepage`, description: "NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke \xe9n toegankelijke online dienstverlening", wrapperClassName: "container--narrow", children: (0, h.jsxs)("main", { children: [(0, h.jsxs)(m, { title: "Doe mee met NL Design System", ctaLink: "handboek/introductie", cta: "Lees de NL Design System introductie", children: [(0, h.jsxs)(c.nv, { lead: !0, children: ["Met een actieve community van specialisten verzamelt het kernteam de beste", " ", (0, h.jsx)(i.Z, { to: "/richtlijnen", children: "richtlijnen" }), ",", " ", (0, h.jsx)(i.Z, { to: "/componenten", children: "componenten" }), " en voorbeelden om robuuste websites en webapplicaties te bouwen."] }), (0, h.jsxs)(c.nv, { children: ["NL Design System helpt om toegankelijk, inclusief en gebruiksvriendelijk ontwikkelen makkelijk te maken.", " "] }), (0, h.jsxs)(c.QI, { children: [(0, h.jsx)(c.AS, { children: "Gebouwd en gebruikt door de community." }), (0, h.jsx)(c.AS, { children: "Platformonafhankelijk en voor iedere huisstijl." }), (0, h.jsx)(c.AS, { children: "Uitbreidbaar en publiek beschikbaar." })] })] }), (0, h.jsxs)("div", { className: "container", style: { paddingBlockEnd: "40px" }, children: [(0, h.jsxs)(t.um, { children: [(0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsxs)("div", { children: [(0, h.jsx)(c.XJ, { children: "Richtlijnen" }), (0, h.jsx)(c.nv, { children: "Fundamentele richtlijnen voor het toepassen van stijl elementen zoals typografie, kleuren en iconen. Maar ook richtlijnen voor tekst en taalgebruik." })] }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/richtlijnen/tekst-en-taalgebruik", className: "utrecht-link", children: "Bekijk de richtlijnen" }) })] }) }), (0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsxs)("div", { children: [(0, h.jsx)(c.XJ, { children: "Componenten" }), (0, h.jsx)(c.nv, { children: "Een overzicht van herbruikbare, toegankelijke componenten voor formulieren, navigatie, tabellen en meer. Inclusief code en documentatie." })] }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/componenten", className: "utrecht-link", children: "Bekijk de componenten" }) })] }) }), (0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsxs)("div", { children: [(0, h.jsx)(c.XJ, { children: "Voorbeelden" }), (0, h.jsx)(c.nv, { children: "Een overzicht van patronen en templates om vaak voorkomende scenario's op een consistente, weloverwogen manier op te lossen." })] }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/voorbeelden", className: "utrecht-link", children: "Bekijk de voorbeelden" }) })] }) }), (0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsxs)("div", { children: [(0, h.jsx)(c.XJ, { children: "Events" }), (0, h.jsx)(c.nv, { children: "Benieuwd naar de events van NL Design System? Of niet gelukt om bij de heartbeat te zijn? Bekijk de aankondigingen en opnames hier." })] }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/community/events/overzicht", className: "utrecht-link", children: "Bekijk de events" }) })] }) })] }), (0, h.jsx)(c.XJ, { children: "Meedoen als..." }), (0, h.jsxs)(t.um, { children: [(0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsx)("div", { children: (0, h.jsx)(c.aC, { children: "Organisatie" }) }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/handboek/introductie", className: "utrecht-link", children: "Meer informatie voor organisaties" }) })] }) }), (0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsx)("div", { children: (0, h.jsx)(c.aC, { children: "Leverancier" }) }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/handboek/leverancier/overzicht", className: "utrecht-link", children: "Meer informatie voor leveranciers" }) })] }) }), (0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsx)("div", { children: (0, h.jsx)(c.aC, { children: "Developer" }) }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/handboek/developer/overzicht", className: "utrecht-link", children: "Meer informatie voor developers" }) })] }) }), (0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsx)("div", { children: (0, h.jsx)(c.aC, { children: "Designer" }) }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(i.Z, { to: "/handboek/designer/overzicht", className: "utrecht-link", children: "Meer informatie voor designers" }) })] }) })] }), (0, h.jsx)(c.XJ, { children: "Wie doen er al mee?" }), (0, h.jsxs)(t.um, { appearance: "small", children: [(0, h.jsx)(t.Zb, { appearance: "small", href: "https://github.com/nl-design-system/utrecht", children: (0, h.jsx)(t.wu, { children: (0, h.jsx)(c.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__utrecht.svg", alt: "Utrecht logo" }) }) }), (0, h.jsx)(t.Zb, { appearance: "small", href: "https://github.com/nl-design-system/denhaag", children: (0, h.jsx)(t.wu, { children: (0, h.jsx)(c.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg", alt: "Den Haag logo" }) }) }), (0, h.jsx)(t.Zb, { appearance: "small", href: "https://github.com/nl-design-system/rvo", children: (0, h.jsx)(t.wu, { children: (0, h.jsx)(c.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rvo.svg", alt: "RVO logo" }) }) }), (0, h.jsx)(t.Zb, { appearance: "small", href: "https://github.com/nl-design-system/amsterdam", children: (0, h.jsx)(t.wu, { children: (0, h.jsx)(c.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg", alt: "Amsterdam logo" }) }) })] }), (0, h.jsxs)(c.nv, { className: "homepage__paragraph", children: ["En ruim 20 ", (0, h.jsx)(c.rU, { href: "https://github.com/nl-design-system/themes", children: "organisaties met een eigen thema" })] })] }), (0, h.jsxs)(p, { children: [(0, h.jsx)(c.XJ, { children: "Blijf op de hoogte" }), (0, h.jsxs)(t.um, { children: [(0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsxs)("div", { children: [(0, h.jsx)(c.aC, { children: "Nieuwsbrief" }), (0, h.jsx)(c.nv, { children: "Meld je aan voor de nieuwsbrief en ontvang elke maand een update van de ontwikkelingen rondom het NL Design System." })] }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(c.rU, { href: "/project/blijf-op-de-hoogte#nieuwsbrief", children: "Meld je aan voor de nieuwsbrief" }) })] }) }), (0, h.jsx)(t.Zb, { component: "section", appearance: "medium", children: (0, h.jsxs)(t.aY, { children: [(0, h.jsxs)("div", { children: [(0, h.jsx)(c.aC, { children: "Heartbeat" }), (0, h.jsx)(c.nv, { children: "Sluit aan bij de 2-wekelijkse online bijeenkomst waarbij ontwikkelingen rondom het NL Design System worden besproken." })] }), (0, h.jsx)(c.nv, { children: (0, h.jsx)(c.rU, { href: "/events/heartbeat/aanmelden", children: "Meld je aan voor de heartbeat" }) })] }) })] })] })] }) });
   }
  },
 },
]);
