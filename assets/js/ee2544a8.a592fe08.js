"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4897],
 {
  3905: (e, r, t) => {
   t.d(r, { Zo: () => c, kt: () => u });
   var n = t(67294);
   function o(e, r, t) {
    return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e;
   }
   function i(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var n = Object.getOwnPropertySymbols(e);
     r &&
      (n = n.filter(function (r) {
       return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, n);
    }
    return t;
   }
   function a(e) {
    for (var r = 1; r < arguments.length; r++) {
     var t = null != arguments[r] ? arguments[r] : {};
     r % 2
      ? i(Object(t), !0).forEach(function (r) {
         o(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : i(Object(t)).forEach(function (r) {
         Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
    }
    return e;
   }
   function l(e, r) {
    if (null == e) return {};
    var t,
     n,
     o = (function (e, r) {
      if (null == e) return {};
      var t,
       n,
       o = {},
       i = Object.keys(e);
      for (n = 0; n < i.length; n++) (t = i[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, r);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     for (n = 0; n < i.length; n++) (t = i[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var s = n.createContext({}),
    m = function (e) {
     var r = n.useContext(s),
      t = r;
     return e && (t = "function" == typeof e ? e(r) : a(a({}, r), e)), t;
    },
    c = function (e) {
     var r = m(e.components);
     return n.createElement(s.Provider, { value: r }, e.children);
    },
    d = "mdxType",
    p = {
     inlineCode: "code",
     wrapper: function (e) {
      var r = e.children;
      return n.createElement(n.Fragment, {}, r);
     },
    },
    f = n.forwardRef(function (e, r) {
     var t = e.components,
      o = e.mdxType,
      i = e.originalType,
      s = e.parentName,
      c = l(e, ["components", "mdxType", "originalType", "parentName"]),
      d = m(t),
      f = o,
      u = d["".concat(s, ".").concat(f)] || d[f] || p[f] || i;
     return t ? n.createElement(u, a(a({ ref: r }, c), {}, { components: t })) : n.createElement(u, a({ ref: r }, c));
    });
   function u(e, r) {
    var t = arguments,
     o = r && r.mdxType;
    if ("string" == typeof e || o) {
     var i = t.length,
      a = new Array(i);
     a[0] = f;
     var l = {};
     for (var s in r) hasOwnProperty.call(r, s) && (l[s] = r[s]);
     (l.originalType = e), (l[d] = "string" == typeof e ? e : o), (a[1] = l);
     for (var m = 2; m < i; m++) a[m] = t[m];
     return n.createElement.apply(null, a);
    }
    return n.createElement.apply(null, t);
   }
   f.displayName = "MDXCreateElement";
  },
  72462: (e, r, t) => {
   t.r(r), t.d(r, { assets: () => s, contentTitle: () => a, default: () => p, frontMatter: () => i, metadata: () => l, toc: () => m });
   var n = t(87462),
    o = (t(67294), t(3905));
   const i = { title: "Form field error message", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field error message", pagination_label: "Form field error message", description: "UX richtlijnen voor Form field error message component", slug: "/form-field-error-message", tags: ["Help Wanted"] },
    a = void 0,
    l = { unversionedId: "componenten/build/form-field-error-message", id: "componenten/build/form-field-error-message", title: "Form field error message", description: "UX richtlijnen voor Form field error message component", source: "@site/docs/componenten/build/form-field-error-message.mdx", sourceDirName: "componenten/build", slug: "/form-field-error-message", permalink: "/form-field-error-message", draft: !1, editUrl: "https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/form-field-error-message.mdx", tags: [{ label: "Help Wanted", permalink: "/tags/help-wanted" }], version: "current", frontMatter: { title: "Form field error message", hide_title: !0, hide_table_of_contents: !1, sidebar_label: "Form field error message", pagination_label: "Form field error message", description: "UX richtlijnen voor Form field error message component", slug: "/form-field-error-message", tags: ["Help Wanted"] }, sidebar: "componenten", previous: { title: "Form field description", permalink: "/form-field-description" }, next: { title: "Form field label", permalink: "/form-field-label" } },
    s = {},
    m = [{ value: "Levende Backlog", id: "levende-backlog", level: 2 }],
    c = { toc: m },
    d = "wrapper";
   function p(e) {
    let { components: r, ...t } = e;
    return (0, o.kt)(d, (0, n.Z)({}, c, t, { components: r, mdxType: "MDXLayout" }), (0, o.kt)("h1", { id: "form-field-error-message" }, "Form field error message"), (0, o.kt)("p", null, 'Dit component heeft de "Help Wanted" status: Heb je dit component nodig? Laat het ons weten, misschien kunnen we samen aan een eerste community versie werken volgens de NL Design System architectuur.'), (0, o.kt)("h2", { id: "levende-backlog" }, "Levende Backlog"), (0, o.kt)("p", null, "De Form field error message component staat bij NL Design System in de ", (0, o.kt)("a", { parentName: "p", href: "https://github.com/nl-design-system/backlog/issues/122" }, "levende backlog"), ", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"));
   }
   p.isMDXComponent = !0;
  },
 },
]);
