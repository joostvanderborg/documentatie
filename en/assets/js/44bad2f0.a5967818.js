"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8536],
 {
  3905: (e, t, a) => {
   a.d(t, { Zo: () => c, kt: () => _ });
   var s = a(67294);
   function n(e, t, a) {
    return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = a), e;
   }
   function r(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var s = Object.getOwnPropertySymbols(e);
     t &&
      (s = s.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      a.push.apply(a, s);
    }
    return a;
   }
   function o(e) {
    for (var t = 1; t < arguments.length; t++) {
     var a = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? r(Object(a), !0).forEach(function (t) {
         n(e, t, a[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
      : r(Object(a)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var a,
     s,
     n = (function (e, t) {
      if (null == e) return {};
      var a,
       s,
       n = {},
       r = Object.keys(e);
      for (s = 0; s < r.length; s++) (a = r[s]), t.indexOf(a) >= 0 || (n[a] = e[a]);
      return n;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (s = 0; s < r.length; s++) (a = r[s]), t.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (n[a] = e[a]));
    }
    return n;
   }
   var i = s.createContext({}),
    u = function (e) {
     var t = s.useContext(i),
      a = t;
     return e && (a = "function" == typeof e ? e(t) : o(o({}, t), e)), a;
    },
    c = function (e) {
     var t = u(e.components);
     return s.createElement(i.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return s.createElement(s.Fragment, {}, t);
     },
    },
    p = s.forwardRef(function (e, t) {
     var a = e.components,
      n = e.mdxType,
      r = e.originalType,
      i = e.parentName,
      c = l(e, ["components", "mdxType", "originalType", "parentName"]),
      m = u(a),
      p = n,
      _ = m["".concat(i, ".").concat(p)] || m[p] || d[p] || r;
     return a ? s.createElement(_, o(o({ ref: t }, c), {}, { components: a })) : s.createElement(_, o({ ref: t }, c));
    });
   function _(e, t) {
    var a = arguments,
     n = t && t.mdxType;
    if ("string" == typeof e || n) {
     var r = a.length,
      o = new Array(r);
     o[0] = p;
     var l = {};
     for (var i in t) hasOwnProperty.call(t, i) && (l[i] = t[i]);
     (l.originalType = e), (l[m] = "string" == typeof e ? e : n), (o[1] = l);
     for (var u = 2; u < r; u++) o[u] = a[u];
     return s.createElement.apply(null, o);
    }
    return s.createElement.apply(null, a);
   }
   p.displayName = "MDXCreateElement";
  },
  44221: (e, t, a) => {
   a.d(t, { P: () => u });
   var s = a(67294),
    n = a(86010);
   const r = { "status-visual__status": "status-visual__status_WLZ4", "status-visual__connector": "status-visual__connector_s1s2", "status-visual__status--help-wanted": "status-visual__status--help-wanted_YObc", "status-visual__status--community": "status-visual__status--community_bL0y", "status-visual__status--unstable": "status-visual__status--unstable_ztb4", "status-visual__status--stable": "status-visual__status--stable_y8aj", "status-visual__title": "status-visual__title_JRta", "status-visual__description": "status-visual__description_tQIN" };
   var o = a(87462);
   const l = "icon_fo5I",
    i = (e) => {
     let { className: t, ...a } = e;
     return s.createElement("svg", (0, o.Z)({ width: "14", height: "16", viewBox: "0 0 14 16", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", className: (0, n.Z)(l, t) }, a), s.createElement("path", { d: "M7 0C7.55228 0 8 0.447715 8 1L7.73285 14.3196L7.73487 14.3218L8 1V12.5858L12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L7.70731 15.7069L7.70498 15.7092C7.60959 15.8041 7.49984 15.8757 7.38275 15.9241C7.2675 15.9719 7.14137 15.9988 7.00911 16L7.003 16L7 16L6.997 16L6.99235 16C6.85955 15.999 6.7329 15.9721 6.61722 15.9241C6.50195 15.8764 6.3938 15.8063 6.29945 15.7136L6.29289 15.7071L0.292893 9.70711C-0.0976311 9.31658 -0.0976311 8.68342 0.292893 8.29289C0.683417 7.90237 1.31658 7.90237 1.70711 8.29289L6 12.5858V1C6 0.447715 6.44772 0 7 0Z" }));
    },
    u = () => s.createElement("dl", { className: (0, n.Z)(r["status-visual"]) }, s.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--help-wanted"]) }, s.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Help Wanted"), s.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "Klaar om van de backlog opgepakt te worden")), s.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--community"]) }, s.createElement(i, { className: (0, n.Z)(r["status-visual__connector"]) }), s.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Community"), s.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "Door de community gebouwd volgens NLDS richtlijnen")), s.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--unstable"]) }, s.createElement(i, { className: (0, n.Z)(r["status-visual__connector"]) }), s.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Candidate"), s.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "NLDS component, maar is nog in ontwikkeling")), s.createElement("div", { className: (0, n.Z)(r["status-visual__status"], r["status-visual__status--stable"]) }, s.createElement(i, { className: (0, n.Z)(r["status-visual__connector"]) }), s.createElement("dt", { className: (0, n.Z)(r["status-visual__title"]) }, "Hall of Fame"), s.createElement("dd", { className: (0, n.Z)(r["status-visual__description"]) }, "NLDS component volgens onze Definition of Done")));
  },
  95076: (e, t, a) => {
   a.r(t), a.d(t, { assets: () => u, contentTitle: () => l, default: () => p, frontMatter: () => o, metadata: () => i, toc: () => c });
   var s = a(87462),
    n = (a(67294), a(3905)),
    r = a(44221);
   const o = { title: "Estafettemodel voor patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Estafettemodel", sidebar_position: 2, pagination_label: "Estafettemodel", description: "Estafettemodel voor patronen", keywords: ["patronen", "design system", "estafettemodel"] },
    l = "Estafettemodel",
    i = { unversionedId: "voorbeelden/patronen/estafettemodel", id: "voorbeelden/patronen/estafettemodel", title: "Estafettemodel voor patronen", description: "Estafettemodel voor patronen", source: "@site/docs/voorbeelden/patronen/estafettemodel.mdx", sourceDirName: "voorbeelden/patronen", slug: "/voorbeelden/patronen/estafettemodel", permalink: "/en/voorbeelden/patronen/estafettemodel", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/voorbeelden/patronen/estafettemodel.mdx", tags: [], version: "current", sidebarPosition: 2, frontMatter: { title: "Estafettemodel voor patronen", hide_title: !0, hide_table_of_contents: !0, sidebar_label: "Estafettemodel", sidebar_position: 2, pagination_label: "Estafettemodel", description: "Estafettemodel voor patronen", keywords: ["patronen", "design system", "estafettemodel"] }, sidebar: "voorbeelden", previous: { title: "Patronen", permalink: "/en/voorbeelden/patronen/" }, next: { title: "Zoeken", permalink: "/en/voorbeelden/patronen/zoeken" } },
    u = {},
    c = [],
    m = { toc: c },
    d = "wrapper";
   function p(e) {
    let { components: t, ...a } = e;
    return (0, n.kt)(d, (0, s.Z)({}, m, a, { components: t, mdxType: "MDXLayout" }), (0, n.kt)("h1", { id: "estafettemodel" }, "Estafettemodel"), (0, n.kt)("p", null, "De patronen van NL Design System worden met een estafette aanpak gemaakt. Daarom kan een component een van de volgende statussen hebben:"), (0, n.kt)(r.P, { mdxType: "StatusVisual" }));
   }
   p.isMDXComponent = !0;
  },
 },
]);
