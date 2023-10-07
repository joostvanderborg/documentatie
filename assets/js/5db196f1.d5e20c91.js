"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9813],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => c, kt: () => f });
   var r = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function a(e, t) {
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
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? a(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : a(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function o(e, t) {
    if (null == e) return {};
    var n,
     r,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       r,
       i = {},
       a = Object.keys(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var s = r.createContext({}),
    m = function (e) {
     var t = r.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    c = function (e) {
     var t = m(e.components);
     return r.createElement(s.Provider, { value: t }, e.children);
    },
    d = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return r.createElement(r.Fragment, {}, t);
     },
    },
    u = r.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      a = e.originalType,
      s = e.parentName,
      c = o(e, ["components", "mdxType", "originalType", "parentName"]),
      d = m(n),
      u = i,
      f = d["".concat(s, ".").concat(u)] || d[u] || p[u] || a;
     return n ? r.createElement(f, l(l({ ref: t }, c), {}, { components: n })) : r.createElement(f, l({ ref: t }, c));
    });
   function f(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var a = n.length,
      l = new Array(a);
     l[0] = u;
     var o = {};
     for (var s in t) hasOwnProperty.call(t, s) && (o[s] = t[s]);
     (o.originalType = e), (o[d] = "string" == typeof e ? e : i), (l[1] = o);
     for (var m = 2; m < a; m++) l[m] = n[m];
     return r.createElement.apply(null, l);
    }
    return r.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  59705: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => l, default: () => p, frontMatter: () => a, metadata: () => o, toc: () => m });
   var r = n(87462),
    i = (n(67294), n(3905));
   const a = { title: "Invalid form alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Invalid form alert", pagination_label: "Invalid form alert", description: "UX richtlijnen voor Invalid form alert component", slug: "/invalid-form-alert", tags: ["Help Wanted"] },
    l = void 0,
    o = { unversionedId: "componenten/build/invalid-form-alert", id: "componenten/build/invalid-form-alert", title: "Invalid form alert", description: "UX richtlijnen voor Invalid form alert component", source: "@site/docs/componenten/build/invalid-form-alert.mdx", sourceDirName: "componenten/build", slug: "/invalid-form-alert", permalink: "/invalid-form-alert", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/invalid-form-alert.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Invalid form alert", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Invalid form alert", pagination_label: "Invalid form alert", description: "UX richtlijnen voor Invalid form alert component", slug: "/invalid-form-alert", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Heading 6", permalink: "/heading-6" }, next: { title: "Legend", permalink: "/legend" } },
    s = {},
    m = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    c = { toc: m },
    d = "wrapper";
   function p(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(d, (0, r.Z)({}, c, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "invalid-form-alert" }, "Invalid form alert"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1300-5679" }, "Invalid form alert Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Invalid form alert component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/175" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
