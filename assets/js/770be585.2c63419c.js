"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5755],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => v });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function o(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? s(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : s(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function a(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       s = Object.keys(e);
      for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var l = r.createContext({}),
    c = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    d = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      s = e.originalType,
      l = e.parentName,
      p = a(e, ["components", "mdxType", "originalType", "parentName"]),
      m = c(n),
      d = i,
      v = m["".concat(l, ".").concat(d)] || m[d] || u[d] || s;
     return n ? r.createElement(v, o(o({ ref: t }, p), {}, { components: n })) : r.createElement(v, o({ ref: t }, p));
    });
   function v(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var s = n.length,
      o = new Array(s);
     o[0] = d;
     var a = {};
     for (var l in t) hasOwnProperty.call(t, l) && (a[l] = t[l]);
     (a.originalType = e), (a[m] = "string" == typeof e ? e : i), (o[1] = a);
     for (var c = 2; c < s; c++) o[c] = n[c];
     return r.createElement.apply(null, o);
    }
    return r.createElement.apply(null, n);
   }
   d.displayName = "MDXCreateElement";
  },
  73315: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => o, default: () => u, frontMatter: () => s, metadata: () => a, toc: () => c });
   var r = n(87462),
    i = (n(67294), n(3905));
   const s = { title: "NL Design System", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Events", sidebar_position: 1, pagination_label: "Events", slug: "/project/events", description: "Bijeenkomsten van NL Design System", keywords: ["videos", "events", "design system"] },
    o = "Events",
    a = { unversionedId: "project/events", id: "project/events", title: "NL Design System", description: "Bijeenkomsten van NL Design System", source: "@site/docs/project/events.mdx", sourceDirName: "project", slug: "/project/events", permalink: "/project/events", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/project/events.mdx", tags: [], version: "current", sidebarPosition: 1, frontMatter: { title: "NL Design System", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Events", sidebar_position: 1, pagination_label: "Events", slug: "/project/events", description: "Bijeenkomsten van NL Design System", keywords: ["videos", "events", "design system"] } },
    l = {},
    c = [{ value: "Video-archief", id: "video-archief", level: 2 }],
    p = { toc: c },
    m = "wrapper";
   function u(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(m, (0, r.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "events" }, "Events"), (0, i.kt)("p", null, "Het NL Design System kernteam brengt regelmatig mensen bij elkaar. Zo zijn er tweewekelijks Design Open Hours en Heartbeats, en jaarlijks een Design Systems Week."), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "events/design-systems-week-2023/overzicht" }, "Design Systems Week - 2023"))), (0, i.kt)("h2", { id: "video-archief" }, "Video-archief"), (0, i.kt)("p", null, "Bij NL Design System nemen we sommige online sessies op. Deze opnames kun je op de originele eventpagina's terugvinden. Om opnames zo snel mogelijk te delen kan het zijn dat deze nog niet opgepoetst of ondertiteld zijn."), (0, i.kt)("p", null, "Zie bijvorobeeld de volgende opnames:"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "events/design-systems-week-2022" }, "Design Systems Week - 2022")), (0, i.kt)("li", { parentName: "ul" }, (0, i.kt)("a", { parentName: "li", href: "events/heartbeat" }, "De 2-wekelijkse Heartbeat"))));
   }
   u.isMDXComponent = !0;
  },
 },
]);
