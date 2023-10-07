"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3237, 503],
 {
  53865: (e, t, a) => {
   a.d(t, { Z: () => n });
   var n = (0, a(30853).Z)("chevron-right", "IconChevronRight", [["path", { d: "M9 6l6 6l-6 6", key: "svg-0" }]]);
  },
  8861: (e, t, a) => {
   a.d(t, { Z: () => n });
   var n = (0, a(30853).Z)("user", "IconUser", [
    ["path", { d: "M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0", key: "svg-0" }],
    ["path", { d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2", key: "svg-1" }],
   ]);
  },
  11215: (e, t, a) => {
   a.r(t), a.d(t, { Blog: () => w, BlogCard: () => Z, default: () => N });
   var n = a(87462),
    l = a(67294),
    r = a(28084),
    c = a(65663),
    m = a(25935),
    o = a(23770),
    s = a(52263),
    i = a(39960),
    d = a(26595),
    u = a(31817),
    g = a(86010);
   const h = "blog-card_awL1",
    p = "blog-card__header-link_ApDH",
    E = "blog-card__badge_XSMo",
    v = "blog-card__badge--author_Jsks",
    _ = "blog-card__badge--date_qW95";
   var b = a(8861),
    k = (0, a(30853).Z)("calendar", "IconCalendar", [
     ["path", { d: "M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z", key: "svg-0" }],
     ["path", { d: "M16 3v4", key: "svg-1" }],
     ["path", { d: "M8 3v4", key: "svg-2" }],
     ["path", { d: "M4 11h16", key: "svg-3" }],
     ["path", { d: "M11 15h1", key: "svg-4" }],
     ["path", { d: "M12 15v3", key: "svg-5" }],
    ]);
   const Z = (e) => {
     let { uuid: t, creator: a, title: n, path: r, content: o, headingLevel: s, isoDate: d } = e;
     return l.createElement(u.Zb, { key: t, appearance: "large", className: h }, l.createElement(u.aY, null, l.createElement(c.X6, { level: s }, l.createElement(i.Z, { to: r, className: (0, g.Z)("utrecht-link", p) }, n)), l.createElement(c.pu, null, (0, m.ZP)(o)), l.createElement(c.k, null, l.createElement(c.Ou, { className: (0, g.Z)(E, v) }, l.createElement(c.JO, { role: "presentational" }, l.createElement(b.Z, null)), l.createElement("span", { className: "visually-hidden" }, "auteur:"), a), l.createElement(c.Ou, { className: (0, g.Z)(E, _) }, l.createElement(c.JO, { role: "presentational" }, l.createElement(k, null)), l.createElement("span", { className: "visually-hidden" }, "publicatie datum:"), l.createElement("time", { dateTime: d }, new Intl.DateTimeFormat("nl-NL").format(new Date(d)))))));
    },
    w = () => {
     const e = (0, r.ZP)()["rss-blog"].default.blogItems,
      { siteConfig: t } = (0, s.Z)();
     return l.createElement(
      o.Z,
      { title: `${t.title} - blog overzicht` },
      l.createElement(
       "div",
       { className: (0, g.Z)("container container--narrow padding-top--md padding-bottom--lg") },
       l.createElement(d.Q, { breadcrumbs: [{ label: "Project", href: "/project" }, { label: "Blog" }] }),
       l.createElement(
        u.um,
        { appearance: "large" },
        e.map((e) => l.createElement(Z, (0, n.Z)({}, e, { key: e.uuid, headingLevel: 2 })))
       )
      )
     );
    },
    N = w;
  },
  26595: (e, t, a) => {
   a.d(t, { Q: () => g });
   var n = a(67294),
    l = a(44996);
   const r = "breadcrumbs__73z",
    c = "breadcrumbs--mobile_QwgF",
    m = "breadcrumbs--desktop_v9Xv";
   var o = a(86010),
    s = a(21209),
    i = a(65663),
    d = a(76775),
    u = a(39960);
   const g = (e) => {
    let { breadcrumbs: t, ...a } = e;
    const g = [{ href: (0, l.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: h } = (0, d.TH)(),
     p = [...g].reverse().find((e) => e.href !== h);
    return n.createElement(
     n.Fragment,
     null,
     n.createElement(
      "div",
      { className: (0, o.Z)(r, m) },
      n.createElement(
       i.Qu,
       a,
       g.map((e, t, a) => {
        let { label: l, href: r, rel: c } = e,
         { length: m } = a;
        return n.createElement(n.Fragment, { key: t }, n.createElement(i.yY, { href: r, current: t === m - 1, disabled: t === m - 1, rel: (0, o.Z)(c, { up: t === m - 2 }) }, l), t < m - 1 && n.createElement(i.sc, null, "/"));
       })
      )
     ),
     p && n.createElement("div", { className: (0, o.Z)(r, c) }, n.createElement(i.hE, null, n.createElement(u.Z, { href: p.href, rel: p.rel, className: "utrecht-link utrecht-link--html-a" }, n.createElement(i.JO, null, n.createElement(s.Z, null)), p.label)))
    );
   };
  },
  31817: (e, t, a) => {
   a.d(t, { Zb: () => i, aY: () => s, um: () => d, wu: () => o });
   var n = a(87462),
    l = a(67294),
    r = a(86010),
    c = a(65663);
   const m = { cardgroup: "cardgroup_0VVt", "cardgroup--small": "cardgroup--small_BDzz", "cardgroup--medium": "cardgroup--medium_xS6r", "cardgroup--large": "cardgroup--large_Tjo8", cardgroup__card: "cardgroup__card_emnt", "cardgroup__card--small": "cardgroup__card--small_bxfC", "cardgroup__card--medium": "cardgroup__card--medium_xiP2", "cardgroup__card--large": "cardgroup__card--large_PGe3", cardgroup__link: "cardgroup__link_YISR", card__illustration: "card__illustration_MVXv", "card__illustration--background": "card__illustration--background_cTcZ", card__content: "card__content_LYKG" },
    o = (e) => {
     let { background: t, children: a, className: c, ...o } = e;
     return l.createElement("div", (0, n.Z)({ className: (0, r.Z)(m.card__illustration, t && m["card__illustration--background"], c) }, o), a);
    },
    s = (e) => l.createElement("div", (0, n.Z)({ className: (0, r.Z)(m.card__content) }, e)),
    i = (e) => {
     let { href: t, appearance: a, className: n, component: o = "div", children: s } = e;
     const i = (e) => ("article" === o ? l.createElement("article", e) : "section" === o ? l.createElement("section", e) : l.createElement("div", e)),
      d = l.createElement(i, { className: (0, r.Z)(m.cardgroup__card, m[`cardgroup__card--${a}`], n) }, s);
     return t ? l.createElement(c.rU, { href: t, boxContent: !0, className: m.cardgroup__link }, d) : d;
    },
    d = (e) => {
     let { appearance: t = "medium", children: a } = e;
     return l.createElement("div", { className: (0, r.Z)(m.cardgroup, m[`cardgroup--${t}`]) }, a);
    };
  },
  53894: (e, t, a) => {
   a.r(t), a.d(t, { default: () => w });
   var n = a(87462),
    l = a(67294),
    r = a(23770),
    c = a(52263),
    m = a(86010),
    o = a(39960);
   const s = { "homepage-hero": "homepage-hero_QhlF", "homepage-hero__container": "homepage-hero__container_PcJa", "homepage-hero__linear-gradient": "homepage-hero__linear-gradient_h5LU", "homepage-hero__title": "homepage-hero__title_tZhO", "homepage-hero__description": "homepage-hero__description_yXXB", "homepage-hero__images": "homepage-hero__images_sfmM", "homepage-hero__image": "homepage-hero__image_gRv6", "homepage-hero__call-to-action": "homepage-hero__call-to-action_O5xN" };
   var i = a(53865),
    d = a(65663);
   const u = (e) => {
    let { title: t, ctaLink: a, cta: n, children: r } = e;
    return l.createElement("div", { className: (0, m.Z)(s["homepage-hero"]) }, l.createElement("div", { className: (0, m.Z)("container", s["homepage-hero__container"]) }, l.createElement(d.nL, { className: (0, m.Z)(s["homepage-hero__title"]) }, t), l.createElement("div", { className: (0, m.Z)(s["homepage-hero__description"]) }, r), l.createElement(d.nv, { className: (0, m.Z)(s["homepage-hero__call-to-action"]) }, l.createElement(o.Z, { className: (0, m.Z)("utrecht-link", s["homepage-hero__call-to-action-link"]), to: a }, n, l.createElement(i.Z, { className: (0, m.Z)("utrecht-icon", s["homepage-hero__call-to-action-icon"]), style: { verticalAlign: "middle" } })))), l.createElement("div", { className: (0, m.Z)(s["homepage-hero__linear-gradient"]) }));
   };
   var g = a(31817);
   const h = "homepage-footer_wrqV",
    p = "homepage-footer__content_J0LR",
    E = () => l.createElement("div", { className: (0, m.Z)(h) }, l.createElement("div", { className: (0, m.Z)(p, "container--wide") }, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/logo-gebruiker-centraal.svg", alt: "Gebruiker Centraal Logo" }), l.createElement(d.nv, null, "NL Design System is onderdeel van ", l.createElement(d.rU, { href: "https://gebruikercentraal.nl" }, "Gebruiker Centraal")))),
    v = "homepage-updates_AnWt",
    _ = "homepage-updates__linear-gradient_IYyX",
    b = (e) => {
     let { children: t } = e;
     return l.createElement("div", { className: (0, m.Z)(v) }, l.createElement("div", { className: (0, m.Z)(_) }), l.createElement("div", { className: "container padding-bottom--xl" }, t));
    };
   var k = a(28084),
    Z = a(11215);
   function w() {
    const { siteConfig: e } = (0, c.Z)(),
     t = (0, k.ZP)()["rss-blog"].default.blogItems.slice(0, 3);
    return l.createElement(
     r.Z,
     { title: `${e.title} - homepage`, description: "NL Design System samenwerken aan componenten en richtlijnen voor een begrijpelijke, gebruiksvriendelijke \xe9n toegankelijke online dienstverlening", wrapperClassName: "container--narrow" },
     l.createElement(
      "main",
      null,
      l.createElement(u, { title: "NL Design System", ctaLink: "meedoen/introductie", cta: "Lees meer over het NL Design System" }, l.createElement(d.nv, { lead: !0 }, "Samen maken we de digitale dienstverlening van de overheid toegankelijk, inclusief en gebruiksvriendelijk."), l.createElement(d.nv, null, "Een design system lijkt op basis van de naam vooral over ontwerp te gaan, maar het is eigenlijk een brede aanpak om makkelijker consistente, toegankelijke en gebruiksvriendelijke websites en applicaties te maken."), l.createElement(d.nv, null, "Dat doet het kernteam niet alleen, maar samen met ontwerpers, ontwikkelaars, content schrijvers en andere experts uit verschillende organisaties."), l.createElement(d.QI, null, l.createElement(d.AS, null, "Gebouwd en gebruikt door de community"), l.createElement(d.AS, null, "Platform en huisstijl onafhankelijk"), l.createElement(d.AS, null, "Uitbreidbaar en publiek beschikbaar"))),
      l.createElement("div", { className: "container" }, l.createElement(g.um, null, l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.XJ, null, "Richtlijnen"), l.createElement(d.nv, null, "Fundamentele richtlijnen voor het toepassen van stijl elementen zoals typografie, kleuren en iconen. Maar ook richtlijnen voor tekst en taalgebruik.")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/richtlijnen/tekst-en-taalgebruik", className: "utrecht-link" }, "Bekijk de richtlijnen")))), l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.XJ, null, "Componenten"), l.createElement(d.nv, null, "Een overzicht van herbruikbare, toegankelijke componenten voor formulieren, navigatie, tabellen en meer. Inclusief code en documentatie.")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/componenten", className: "utrecht-link" }, "Bekijk de componenten")))), l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.XJ, null, "Voorbeelden"), l.createElement(d.nv, null, "Een overzicht van patronen en templates om vaak voorkomende scenario's op een consistente, weloverwogen manier op te lossen.")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/voorbeelden", className: "utrecht-link" }, "Bekijk de voorbeelden")))), l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.XJ, null, "Events"), l.createElement(d.nv, null, "Benieuwd naar de events van NL Design System? Of niet gelukt om bij de heartbeat te zijn? Bekijk de aankondigingen en opnames hier.")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/project/events/overzicht", className: "utrecht-link" }, "Bekijk de events"))))), l.createElement(d.XJ, null, "Meedoen als..."), l.createElement(g.um, null, l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.wu, { background: !0 }, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__organisatie.svg", alt: "Drie verschillende avatars bij elkaar als organisatie" })), l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.aC, null, "Organisatie")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/meedoen/introductie", className: "utrecht-link" }, "Meer informatie voor organisaties")))), l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.wu, { background: !0 }, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__leverancier.svg", alt: "Drie verschillende avatars bij elkaar als leverancier" })), l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.aC, null, "Leverancier")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/meedoen/als-leverancier/overzicht", className: "utrecht-link" }, "Meer informatie voor leveranciers")))), l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.wu, { background: !0 }, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__developer.svg", alt: "Avatar als developer" })), l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.aC, null, "Developer")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/meedoen/als-developer/overzicht", className: "utrecht-link" }, "Meer informatie voor developers")))), l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.wu, { background: !0 }, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__designer.svg", alt: "Avatar als designer" })), l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.aC, null, "Designer")), l.createElement(d.nv, null, l.createElement(o.Z, { to: "/meedoen/als-designer/overzicht", className: "utrecht-link" }, "Meer informatie voor designers"))))), l.createElement(d.XJ, null, "Wie doen er al mee?"), l.createElement(g.um, { appearance: "small" }, l.createElement(g.Zb, { appearance: "small", href: "https://github.com/nl-design-system/utrecht" }, l.createElement(g.wu, null, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__utrecht.svg", alt: "Utrecht logo" }))), l.createElement(g.Zb, { appearance: "small", href: "https://github.com/nl-design-system/denhaag" }, l.createElement(g.wu, null, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__denhaag.svg", alt: "Den Haag logo" }))), l.createElement(g.Zb, { appearance: "small", href: "https://github.com/nl-design-system/rvo" }, l.createElement(g.wu, null, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__rvo.svg", alt: "RVO logo" }))), l.createElement(g.Zb, { appearance: "small", href: "https://github.com/nl-design-system/amsterdam" }, l.createElement(g.wu, null, l.createElement(d.Ee, { src: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/meedoen__amsterdam.svg", alt: "Amsterdam logo" })))), l.createElement(d.nv, { className: "homepage__paragraph" }, "En ruim 20 ", l.createElement(d.rU, { href: "https://github.com/nl-design-system/themes" }, "organisaties met een eigen thema"))),
      l.createElement(
       b,
       null,
       l.createElement(d.XJ, null, "Blijf op de hoogte"),
       l.createElement(g.um, null, l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.aC, null, "Nieuwsbrief"), l.createElement(d.nv, null, "Meld je aan voor de nieuwsbrief en ontvang elke maand een update van de ontwikkelingen rondom het NL Design System.")), l.createElement(d.nv, null, l.createElement(d.rU, { href: "https://designsystem.gebruikercentraal.nl/nieuwsbrieven/" }, "Meld je aan voor de nieuwsbrief")))), l.createElement(g.Zb, { component: "section", appearance: "medium" }, l.createElement(g.aY, null, l.createElement("div", null, l.createElement(d.aC, null, "Heartbeat"), l.createElement(d.nv, null, "Sluit aan bij de 2-wekelijkse online bijeenkomst waarbij ontwikkelingen rondom het NL Design System worden besproken.")), l.createElement(d.nv, null, l.createElement(d.rU, { href: "https://www.gebruikercentraal.nl/agenda/soort/nl-design-system/" }, "Meld je aan voor de heartbeat"))))),
       l.createElement(d.XJ, null, "Blog"),
       l.createElement(
        g.um,
        { appearance: "large" },
        t.map((e) => l.createElement(Z.BlogCard, (0, n.Z)({}, e, { key: e.uuid, headingLevel: 3 })))
       ),
       l.createElement(d.nv, null, l.createElement(o.Z, { to: "/project/blog", className: "utrecht-link" }, "Bekijk meer blog artikelen"))
      ),
      l.createElement(E, null)
     )
    );
   }
  },
 },
]);
