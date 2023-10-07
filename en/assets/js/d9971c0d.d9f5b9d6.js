"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [8281],
 {
  3905: (e, t, n) => {
   n.d(t, { Zo: () => s, kt: () => u });
   var o = n(67294);
   function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function r(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(e);
     t &&
      (o = o.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, o);
    }
    return n;
   }
   function l(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? r(Object(n), !0).forEach(function (t) {
         i(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : r(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function c(e, t) {
    if (null == e) return {};
    var n,
     o,
     i = (function (e, t) {
      if (null == e) return {};
      var n,
       o,
       i = {},
       r = Object.keys(e);
      for (o = 0; o < r.length; o++) (n = r[o]), t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (o = 0; o < r.length; o++) (n = r[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
   }
   var a = o.createContext({}),
    p = function (e) {
     var t = o.useContext(a),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : l(l({}, t), e)), n;
    },
    s = function (e) {
     var t = p(e.components);
     return o.createElement(a.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    d = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return o.createElement(o.Fragment, {}, t);
     },
    },
    f = o.forwardRef(function (e, t) {
     var n = e.components,
      i = e.mdxType,
      r = e.originalType,
      a = e.parentName,
      s = c(e, ["components", "mdxType", "originalType", "parentName"]),
      m = p(n),
      f = i,
      u = m["".concat(a, ".").concat(f)] || m[f] || d[f] || r;
     return n ? o.createElement(u, l(l({ ref: t }, s), {}, { components: n })) : o.createElement(u, l({ ref: t }, s));
    });
   function u(e, t) {
    var n = arguments,
     i = t && t.mdxType;
    if ("string" == typeof e || i) {
     var r = n.length,
      l = new Array(r);
     l[0] = f;
     var c = {};
     for (var a in t) hasOwnProperty.call(t, a) && (c[a] = t[a]);
     (c.originalType = e), (c[m] = "string" == typeof e ? e : i), (l[1] = c);
     for (var p = 2; p < r; p++) l[p] = n[p];
     return o.createElement.apply(null, l);
    }
    return o.createElement.apply(null, n);
   }
   f.displayName = "MDXCreateElement";
  },
  28416: (e, t, n) => {
   n.r(t), n.d(t, { assets: () => a, contentTitle: () => l, default: () => d, frontMatter: () => r, metadata: () => c, toc: () => p });
   var o = n(87462),
    i = (n(67294), n(3905));
   const r = { title: "Form field checkbox option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field checkbox option", pagination_label: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", slug: "/form-field-checkbox-option", tags: ["Help Wanted"] },
    l = void 0,
    c = { unversionedId: "componenten/build/form-field-checkbox-option", id: "componenten/build/form-field-checkbox-option", title: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", source: "@site/docs/componenten/build/form-field-checkbox-option.mdx", sourceDirName: "componenten/build", slug: "/form-field-checkbox-option", permalink: "/en/form-field-checkbox-option", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-checkbox-option.mdx", tags: [{ label: "Help Wanted", permalink: "/en/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field checkbox option", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field checkbox option", pagination_label: "Form field checkbox option", description: "UX richtlijnen voor Form field checkbox option component", slug: "/form-field-checkbox-option", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "File input", permalink: "/en/file-input" }, next: { title: "Form field description", permalink: "/en/form-field-description" } },
    a = {},
    p = [
     { value: "Implementaties", id: "implementaties", level: 2 },
     { value: "Figma", id: "figma", level: 3 },
     { value: "NL Design System", id: "nl-design-system", level: 4 },
     { value: "Levende Backlog", id: "levende-backlog", level: 2 },
    ],
    s = { toc: p },
    m = "wrapper";
   function d(e) {
    let { components: t, ...n } = e;
    return (0, i.kt)(m, (0, o.Z)({}, s, n, { components: t, mdxType: "MDXLayout" }), (0, i.kt)("h1", { id: "form-field-checkbox-option" }, "Form field checkbox option"), (0, i.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, i.kt)("h2", { id: "implementaties" }, "Implementaties"), (0, i.kt)("h3", { id: "figma" }, "Figma"), (0, i.kt)("h4", { id: "nl-design-system" }, "NL Design System"), (0, i.kt)("ul", null, (0, i.kt)("li", { parentName: "ul" }, "Implementatie: ", (0, i.kt)("a", { parentName: "li", href: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-2917" }, "Form field checkbox option Figma implementatie van NL Design System"))), (0, i.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, i.kt)("p", null, "De Form field checkbox option component staat bij NL Design System in de ", (0, i.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/172" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   d.isMDXComponent = !0;
  },
 },
]);
