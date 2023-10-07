"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2660],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => u, kt: () => b });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function o(e, t) {
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
   function a(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? o(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : o(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function p(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       o = Object.keys(e);
      for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var l = r.createContext({}),
    c = function (e) {
     var t = r.useContext(l),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : a(a({}, t), e)), n;
    },
    u = function (e) {
     var t = c(e.components);
     return r.createElement(l.Provider, { value: t }, e.children);
    },
    s = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    m = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      o = e.originalType,
      l = e.parentName,
      u = p(e, ["components", "mdxType", "originalType", "parentName"]),
      s = c(n),
      m = i,
      b = s["".concat(l, ".").concat(m)] || s[m] || d[m] || o;
     return n ? r.createElement(b, a(a({ ref: t }, u), {}, { components: n })) : r.createElement(b, a({ ref: t }, u));
    });
   function b(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var o = n.length,
      a = new Array(o);
     a[0] = m;
     var p = {};
     for (var l in t) hasOwnProperty.call(t, l) && (p[l] = t[l]);
     (p.originalType = e), (p[s] = "string" == typeof e ? e : i), (a[1] = p);
     for (var c = 2; c < o; c++) a[c] = n[c];
     return r.createElement.apply(null, a);
    }
    return r.createElement.apply(null, n);
   }
   m.displayName = "MDXCreateElement";
  },
  17297: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => l, contentTitle: () => a, default: () => d, frontMatter: () => o, metadata: () => p, toc: () => c });
   var r = n(87462),
    i = (n(67294), n(3905));
   const o = { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Help Wanted"] },
    a = void 0,
    p = { unversionedId: "componenten/build/date-input", id: "componenten/build/date-input", title: "Date input", description: "UX richtlijnen voor Date input component", source: "@site/docs/componenten/build/date-input.mdx", sourceDirName: "componenten/build", slug: "/date-input", permalink: "/en/date-input", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/date-input.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Date input", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Date input", pagination_label: "Date input", description: "UX richtlijnen voor Date input component", slug: "/date-input", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Date input group", permalink: "/en/date-input-group" }, next: { title: "Date Picker", permalink: "/en/date-picker" } },
    l = {},
    c = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    u = { toc: c },
    s = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(s, (0, r.Z)({}, u, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "date-input" }, "Date input"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Date input component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/188" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
