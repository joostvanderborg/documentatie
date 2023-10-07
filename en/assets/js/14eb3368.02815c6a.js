"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9817],
 {
  4966: (e, t, n) => {
   n.d(t, { Z: () => o });
   var a = n(87462),
    r = n(67294),
    l = n(95999),
    i = n(86010),
    s = n(39960);
   function c(e) {
    const { permalink: t, title: n, subLabel: a, isNext: l } = e;
    return r.createElement(s.Z, { className: (0, i.Z)("pagination-nav__link", l ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: t }, a && r.createElement("div", { className: "pagination-nav__sublabel" }, a), r.createElement("div", { className: "pagination-nav__label" }, n));
   }
   function o(e) {
    const { previous: t, next: n } = e;
    return r.createElement("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, l.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }) }, t && r.createElement(c, (0, a.Z)({}, t, { subLabel: r.createElement(l.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc" }, "Previous") })), n && r.createElement(c, (0, a.Z)({}, n, { subLabel: r.createElement(l.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc" }, "Next"), isNext: !0 })));
   }
  },
  44364: (e, t, n) => {
   n.d(t, { Z: () => c });
   var a = n(67294),
    r = n(86010),
    l = n(95999),
    i = n(35281),
    s = n(74477);
   function c(e) {
    let { className: t } = e;
    const n = (0, s.E)();
    return n.badge ? a.createElement("span", { className: (0, r.Z)(t, i.k.docs.docVersionBadge, "badge badge--secondary") }, a.createElement(l.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: n.label } }, "Version: {versionLabel}")) : null;
   }
  },
  23120: (e, t, n) => {
   n.d(t, { Z: () => g });
   var a = n(67294),
    r = n(86010),
    l = n(52263),
    i = n(39960),
    s = n(95999),
    c = n(94104),
    o = n(35281),
    m = n(60373),
    d = n(74477);
   const u = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return a.createElement(s.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: a.createElement("b", null, n.label) } }, "This is unreleased documentation for {siteTitle} {versionLabel} version.");
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return a.createElement(s.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: a.createElement("b", null, n.label) } }, "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.");
    },
   };
   function h(e) {
    const t = u[e.versionMetadata.banner];
    return a.createElement(t, e);
   }
   function v(e) {
    let { versionLabel: t, to: n, onClick: r } = e;
    return a.createElement(s.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: a.createElement("b", null, a.createElement(i.Z, { to: n, onClick: r }, a.createElement(s.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label" }, "latest version"))) } }, "For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).");
   }
   function b(e) {
    let { className: t, versionMetadata: n } = e;
    const {
      siteConfig: { title: i },
     } = (0, l.Z)(),
     { pluginId: s } = (0, c.gA)({ failfast: !0 }),
     { savePreferredVersionName: d } = (0, m.J)(s),
     { latestDocSuggestion: u, latestVersionSuggestion: b } = (0, c.Jo)(s),
     g = u ?? (p = b).docs.find((e) => e.id === p.mainDocId);
    var p;
    return a.createElement("div", { className: (0, r.Z)(t, o.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert" }, a.createElement("div", null, a.createElement(h, { siteTitle: i, versionMetadata: n })), a.createElement("div", { className: "margin-top--md" }, a.createElement(v, { versionLabel: b.label, to: g.path, onClick: () => d(b.name) })));
   }
   function g(e) {
    let { className: t } = e;
    const n = (0, d.E)();
    return n.banner ? a.createElement(b, { className: t, versionMetadata: n }) : null;
   }
  },
  92503: (e, t, n) => {
   n.d(t, { Z: () => m });
   var a = n(87462),
    r = n(67294),
    l = n(86010),
    i = n(95999),
    s = n(86668),
    c = n(39960);
   const o = { anchorWithStickyNavbar: "anchorWithStickyNavbar_LWe7", anchorWithHideOnScrollNavbar: "anchorWithHideOnScrollNavbar_WYt5" };
   function m(e) {
    let { as: t, id: n, ...m } = e;
    const {
     navbar: { hideOnScroll: d },
    } = (0, s.L)();
    if ("h1" === t || !n) return r.createElement(t, (0, a.Z)({}, m, { id: void 0 }));
    const u = (0, i.I)({ id: "theme.common.headingLinkTitle", message: "Direct link to {heading}", description: "Title for link to heading" }, { heading: "string" == typeof m.children ? m.children : n });
    return r.createElement(t, (0, a.Z)({}, m, { className: (0, l.Z)("anchor", d ? o.anchorWithHideOnScrollNavbar : o.anchorWithStickyNavbar, m.className), id: n }), m.children, r.createElement(c.Z, { className: "hash-link", to: `#${n}`, "aria-label": u, title: u }, "\u200b"));
   }
  },
  26595: (e, t, n) => {
   n.d(t, { Q: () => h });
   var a = n(67294),
    r = n(44996);
   const l = "breadcrumbs__73z",
    i = "breadcrumbs--mobile_QwgF",
    s = "breadcrumbs--desktop_v9Xv";
   var c = n(86010),
    o = n(21209),
    m = n(65663),
    d = n(76775),
    u = n(39960);
   const h = (e) => {
    let { breadcrumbs: t, ...n } = e;
    const h = [{ href: (0, r.Z)("/"), label: "Home", rel: "home" }, ...t],
     { pathname: v } = (0, d.TH)(),
     b = [...h].reverse().find((e) => e.href !== v);
    return a.createElement(
     a.Fragment,
     null,
     a.createElement(
      "div",
      { className: (0, c.Z)(l, s) },
      a.createElement(
       m.Qu,
       n,
       h.map((e, t, n) => {
        let { label: r, href: l, rel: i } = e,
         { length: s } = n;
        return a.createElement(a.Fragment, { key: t }, a.createElement(m.yY, { href: l, current: t === s - 1, disabled: t === s - 1, rel: (0, c.Z)(i, { up: t === s - 2 }) }, r), t < s - 1 && a.createElement(m.sc, null, "/"));
       })
      )
     ),
     b && a.createElement("div", { className: (0, c.Z)(l, i) }, a.createElement(m.hE, null, a.createElement(u.Z, { href: b.href, rel: b.rel, className: "utrecht-link utrecht-link--html-a" }, a.createElement(m.JO, null, a.createElement(o.Z, null)), b.label)))
    );
   };
  },
  1832: (e, t, n) => {
   n.d(t, { Z: () => s });
   var a = n(67294),
    r = n(35281),
    l = n(52802),
    i = n(26595);
   function s() {
    var e;
    const t = (null == (e = (0, l.s1)()) ? void 0 : e.map((e) => ("category" === e.type ? { ...e, ...e.items.find((e) => "link" === e.type), label: e.label } : { href: e.href, label: e.label }))) || [];
    return a.createElement(i.Q, { breadcrumbs: t, className: r.k.docs.docBreadcrumbs });
   }
  },
  26998: (e, t, n) => {
   n.r(t), n.d(t, { default: () => S });
   var a = n(67294),
    r = n(10833),
    l = n(52802),
    i = n(44996),
    s = n(86010),
    c = n(39960),
    o = n(95999);
   function m() {
    return (
     (m = Object.assign
      ? Object.assign.bind()
      : function (e) {
         for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
         }
         return e;
        }),
     m.apply(this, arguments)
    );
   }
   function d(e, t) {
    if (null == e) return {};
    var n,
     a,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       r = {},
       l = Object.keys(e);
      for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var u = ["size", "color"];
   function h(e) {
    var t = e.size,
     n = void 0 === t ? 24 : t,
     r = e.color,
     l = void 0 === r ? "currentColor" : r,
     i = d(e, u);
    return a.createElement("svg", m({ xmlns: "http://www.w3.org/2000/svg", className: "icon icon-tabler icon-tabler-arrow-narrow-right", width: n, height: n, viewBox: "0 0 24 24", stroke: l, strokeWidth: "2", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, i), a.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), a.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), a.createElement("line", { x1: "15", y1: "16", x2: "19", y2: "12" }), a.createElement("line", { x1: "15", y1: "8", x2: "19", y2: "12" }));
   }
   var v = n(65663);
   const b = { card: "card_l9fv", cardTitle: "cardTitle_HoSo", cardDescription: "cardDescription_c27F" };
   function g(e) {
    let { href: t, icon: n = "", title: r, description: l, linkDescription: i } = e;
    return a.createElement("div", { className: (0, s.Z)("card", b.card) }, a.createElement("h2", { className: (0, s.Z)(b.cardTitle), title: r }, n, " ", r), l && a.createElement("p", { className: (0, s.Z)(b.cardDescription), title: l }, l), a.createElement(c.Z, { href: t, className: (0, s.Z)(b.cardLink) }, i, " ", a.createElement(v.JO, null, a.createElement(h, null))));
   }
   function p(e) {
    let { item: t } = e;
    const n = (0, l.Wl)(t);
    return n ? a.createElement(g, { href: n, title: t.label, linkDescription: `Bekijk ${t.label.toLowerCase()} overzicht`, description: t.description ?? (0, o.I)({ message: "{count} items", id: "theme.docs.DocCard.categoryDescription", description: "The default description for a category card in the generated index about how many items this category includes" }, { count: t.items.length }) }) : null;
   }
   function E(e) {
    let { item: t } = e;
    const n = (0, l.xz)(t.docId);
    return a.createElement(g, { linkDescription: (null == n ? void 0 : n.title) || t.label, href: t.href, title: t.label, description: t.description ?? (null == n ? void 0 : n.description) });
   }
   function f(e) {
    let { item: t } = e;
    switch (t.type) {
     case "link":
      return a.createElement(E, { item: t });
     case "category":
      return a.createElement(p, { item: t });
     default:
      throw new Error(`unknown item type ${JSON.stringify(t)}`);
    }
   }
   function k(e) {
    let { className: t } = e;
    const n = (0, l.jA)();
    return a.createElement(N, { items: n.items, className: t });
   }
   function N(e) {
    const { items: t, className: n } = e;
    if (!t) return a.createElement(k, e);
    const r = (0, l.MN)(t);
    return a.createElement(
     "section",
     { className: (0, s.Z)("row", n) },
     r.map((e, t) => a.createElement("article", { key: t, className: "col col--12 margin-bottom--lg doc-card-list" }, a.createElement(f, { item: e })))
    );
   }
   var y = n(4966),
    Z = n(23120),
    _ = n(44364),
    w = n(1832),
    L = n(92503);
   const x = { generatedIndexPage: "generatedIndexPage_jE6W", list: "list_XVd1", title: "title__lw4", "navbar__items--right": "navbar__items--right_fTHD" };
   function T(e) {
    let { categoryGeneratedIndex: t } = e;
    return a.createElement(r.d, { title: t.title, description: t.description, keywords: t.keywords, image: (0, i.Z)(t.image) });
   }
   function O(e) {
    let { categoryGeneratedIndex: t } = e;
    const n = (0, l.jA)();
    return a.createElement("div", { className: x.generatedIndexPage }, a.createElement(Z.Z, null), a.createElement(w.Z, null), a.createElement(_.Z, null), a.createElement("header", null, a.createElement(L.Z, { as: "h1", className: x.title }, t.title), t.description && a.createElement("p", null, t.description)), a.createElement("article", { className: "margin-top--lg" }, a.createElement(N, { items: n.items, className: x.list })), a.createElement("footer", { className: "margin-top--lg" }, a.createElement(y.Z, { previous: t.navigation.previous, next: t.navigation.next })));
   }
   function S(e) {
    return a.createElement(a.Fragment, null, a.createElement(T, e), a.createElement(O, e));
   }
  },
 },
]);
