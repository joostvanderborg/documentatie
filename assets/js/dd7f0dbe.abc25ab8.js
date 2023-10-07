"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8714],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => p, kt: () => v });
   var a = n(67294);
   function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function i(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var a = Object.getOwnPropertySymbols(e);
     t &&
      (a = a.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, a);
    }
    return n;
   }
   function o(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? i(Object(n), !0).forEach(function (t) {
         r(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : i(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function l(e, t) {
    if (null == e) return {};
    var n,
     a,
     r = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       r = {},
       i = Object.keys(e);
      for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
   }
   var s = a.createContext({}),
    c = function (e) {
     var t = a.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : o(o({}, t), e)), n;
    },
    p = function (e) {
     var t = c(e.components);
     return a.createElement(s.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    u = a.forwardRef(function (e, t) {
     var n = e.components,
      r = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      p = l(e, ["components", "mdxType", "originalType", "parentName"]),
      m = c(n),
      u = r,
      v = m["".concat(s, ".").concat(u)] || m[u] || d[u] || i;
     return n ? a.createElement(v, o(o({ ref: t }, p), {}, { components: n })) : a.createElement(v, o({ ref: t }, p));
    });
   function v(e, t) {
    var n = arguments,
     r = t && t.mdxType;
    if ("string" == typeof e || r) {
     var i = n.length,
      o = new Array(i);
     o[0] = u;
     var l = {};
     for (var s in t) hasOwnProperty.call(t, s) && (l[s] = t[s]);
     (l.originalType = e), (l[m] = "string" == typeof e ? e : r), (o[1] = l);
     for (var c = 2; c < i; c++) o[c] = n[c];
     return a.createElement.apply(null, o);
    }
    return a.createElement.apply(null, n);
   }
   u.displayName = "MDXCreateElement";
  },
  99049: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => s, contentTitle: () => o, default: () => d, frontMatter: () => i, metadata: () => l, toc: () => c });
   var a = n(87462),
    r = (n(67294), n(3905));
   const i = { title: "Avatar", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Avatar", pagination_label: "Avatar", description: "UX richtlijnen voor Avatar component", slug: "/avatar", tags: ["Help Wanted"] },
    o = void 0,
    l = { unversionedId: "componenten/build/avatar", id: "componenten/build/avatar", title: "Avatar", description: "UX richtlijnen voor Avatar component", source: "@site/docs/componenten/build/avatar.mdx", sourceDirName: "componenten/build", slug: "/avatar", permalink: "/avatar", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/avatar.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Avatar", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Avatar", pagination_label: "Avatar", description: "UX richtlijnen voor Avatar component", slug: "/avatar", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Alert", permalink: "/alert" }, next: { title: "Blockquote", permalink: "/blockquote" } },
    s = {},
    c = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    p = { toc: c },
    m = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, r.kt)(m, (0, a.Z)({}, p, n, { components: t, mdxType: "MDXLayout" }), (0, r.kt)("h1", { id: "avatar" }, "Avatar"), (0, r.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, r.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, r.kt)("h3", { id: "figma" }, "Figma"), (0, r.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, r.kt)("ul", null, (0, r.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, r.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=423-455" }, "Avatar Figma implementatie van NL Design System"))), (0, r.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, r.kt)("p", null, "De Avatar component staat bij NL Design System in de ", (0, r.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/83" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
