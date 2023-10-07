(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2205],
 {
  3905: (e, t, n) => {
   "use strict";
   n.d(t, { Zo: () => d, kt: () => f });
   var a = n(67294);
   function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function l(e, t) {
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
   function r(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         o(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function c(e, t) {
    if (null == e) return {};
    var n,
     a,
     o = (function (e, t) {
      if (null == e) return {};
      var n,
       a,
       o = {},
       l = Object.keys(e);
      for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
     })(e, t);
    if (Object.getOwnPropertySymbols) {
     var l = Object.getOwnPropertySymbols(e);
     for (a = 0; a < l.length; a++) (n = l[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
   }
   var s = a.createContext({}),
    i = function (e) {
     var t = a.useContext(s),
      n = t;
     return e && (n = "function" == typeof e ? e(t) : r(r({}, t), e)), n;
    },
    d = function (e) {
     var t = i(e.components);
     return a.createElement(s.Provider, { value: t }, e.children);
    },
    m = "mdxType",
    u = {
     inlineCode: "code",
     wrapper: function (e) {
      var t = e.children;
      return a.createElement(a.Fragment, {}, t);
     },
    },
    p = a.forwardRef(function (e, t) {
     var n = e.components,
      o = e.mdxType,
      l = e.originalType,
      s = e.parentName,
      d = c(e, ["components", "mdxType", "originalType", "parentName"]),
      m = i(n),
      p = o,
      f = m["".concat(s, ".").concat(p)] || m[p] || u[p] || l;
     return n ? a.createElement(f, r(r({ ref: t }, d), {}, { components: n })) : a.createElement(f, r({ ref: t }, d));
    });
   function f(e, t) {
    var n = arguments,
     o = t && t.mdxType;
    if ("string" == typeof e || o) {
     var l = n.length,
      r = new Array(l);
     r[0] = p;
     var c = {};
     for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s]);
     (c.originalType = e), (c[m] = "string" == typeof e ? e : o), (r[1] = c);
     for (var i = 2; i < l; i++) r[i] = n[i];
     return a.createElement.apply(null, r);
    }
    return a.createElement.apply(null, n);
   }
   p.displayName = "MDXCreateElement";
  },
  11875: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => a });
   const a = () => null;
  },
  23612: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => m });
   var a = n(67294),
    o = n(86010),
    l = n(35281),
    r = n(95999);
   const c = { admonition: "admonition_LlT9", admonitionHeading: "admonitionHeading_tbUL", admonitionIcon: "admonitionIcon_kALy", admonitionContent: "admonitionContent_S0QG" };
   const s = {
     note: {
      infimaClassName: "secondary",
      iconComponent: function () {
       return a.createElement("svg", { viewBox: "0 0 14 16" }, a.createElement("path", { fillRule: "evenodd", d: "M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z" }));
      },
      label: a.createElement(r.Z, { id: "theme.admonition.note", description: "The default label used for the Note admonition (:::note)" }, "note"),
     },
     tip: {
      infimaClassName: "success",
      iconComponent: function () {
       return a.createElement("svg", { viewBox: "0 0 12 16" }, a.createElement("path", { fillRule: "evenodd", d: "M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z" }));
      },
      label: a.createElement(r.Z, { id: "theme.admonition.tip", description: "The default label used for the Tip admonition (:::tip)" }, "tip"),
     },
     danger: {
      infimaClassName: "danger",
      iconComponent: function () {
       return a.createElement("svg", { viewBox: "0 0 12 16" }, a.createElement("path", { fillRule: "evenodd", d: "M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z" }));
      },
      label: a.createElement(r.Z, { id: "theme.admonition.danger", description: "The default label used for the Danger admonition (:::danger)" }, "danger"),
     },
     info: {
      infimaClassName: "info",
      iconComponent: function () {
       return a.createElement("svg", { viewBox: "0 0 14 16" }, a.createElement("path", { fillRule: "evenodd", d: "M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z" }));
      },
      label: a.createElement(r.Z, { id: "theme.admonition.info", description: "The default label used for the Info admonition (:::info)" }, "info"),
     },
     caution: {
      infimaClassName: "warning",
      iconComponent: function () {
       return a.createElement("svg", { viewBox: "0 0 16 16" }, a.createElement("path", { fillRule: "evenodd", d: "M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z" }));
      },
      label: a.createElement(r.Z, { id: "theme.admonition.caution", description: "The default label used for the Caution admonition (:::caution)" }, "caution"),
     },
    },
    i = { secondary: "note", important: "info", success: "tip", warning: "danger" };
   function d(e) {
    const { mdxAdmonitionTitle: t, rest: n } = (function (e) {
     const t = a.Children.toArray(e),
      n = t.find((e) => {
       var t;
       return a.isValidElement(e) && "mdxAdmonitionTitle" === (null == (t = e.props) ? void 0 : t.mdxType);
      }),
      o = a.createElement(
       a.Fragment,
       null,
       t.filter((e) => e !== n)
      );
     return { mdxAdmonitionTitle: n, rest: o };
    })(e.children);
    return { ...e, title: e.title ?? t, children: n };
   }
   function m(e) {
    const { children: t, type: n, title: r, icon: m } = d(e),
     u = (function (e) {
      const t = i[e] ?? e,
       n = s[t];
      return n || (console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`), s.info);
     })(n),
     p = r ?? u.label,
     { iconComponent: f } = u,
     g = m ?? a.createElement(f, null);
    return a.createElement("div", { className: (0, o.Z)(l.k.common.admonition, l.k.common.admonitionType(e.type), "alert", `alert--${u.infimaClassName}`, c.admonition) }, a.createElement("div", { className: c.admonitionHeading }, a.createElement("span", { className: c.admonitionIcon }, g), p), a.createElement("div", { className: c.admonitionContent }, t));
   }
  },
  74464: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => F });
   var a = n(87462),
    o = n(67294),
    l = n(72389),
    r = n(86010),
    c = n(92949),
    s = n(86668);
   function i() {
    const { prism: e } = (0, s.L)(),
     { colorMode: t } = (0, c.I)(),
     n = e.theme,
     a = e.darkTheme || n;
    return "dark" === t ? a : n;
   }
   var d = n(35281),
    m = n(87594),
    u = n.n(m);
   const p = /title=(?<quote>["'])(?<title>.*?)\1/,
    f = /\{(?<range>[\d,-]+)\}/,
    g = { js: { start: "\\/\\/", end: "" }, jsBlock: { start: "\\/\\*", end: "\\*\\/" }, jsx: { start: "\\{\\s*\\/\\*", end: "\\*\\/\\s*\\}" }, bash: { start: "#", end: "" }, html: { start: "\x3c!--", end: "--\x3e" } };
   function h(e, t) {
    const n = e
     .map((e) => {
      const { start: n, end: a } = g[e];
      return `(?:${n}\\s*(${t
       .flatMap((e) => {
        var t, n;
        return [e.line, null == (t = e.block) ? void 0 : t.start, null == (n = e.block) ? void 0 : n.end].filter(Boolean);
       })
       .join("|")})\\s*${a})`;
     })
     .join("|");
    return new RegExp(`^\\s*(?:${n})\\s*$`);
   }
   function v(e, t) {
    let n = e.replace(/\n$/, "");
    const { language: a, magicComments: o, metastring: l } = t;
    if (l && f.test(l)) {
     const e = l.match(f).groups.range;
     if (0 === o.length) throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);
     const t = o[0].className,
      a = u()(e)
       .filter((e) => e > 0)
       .map((e) => [e - 1, [t]]);
     return { lineClassNames: Object.fromEntries(a), code: n };
    }
    if (void 0 === a) return { lineClassNames: {}, code: n };
    const r = (function (e, t) {
      switch (e) {
       case "js":
       case "javascript":
       case "ts":
       case "typescript":
        return h(["js", "jsBlock"], t);
       case "jsx":
       case "tsx":
        return h(["js", "jsBlock", "jsx"], t);
       case "html":
        return h(["js", "jsBlock", "html"], t);
       case "python":
       case "py":
       case "bash":
        return h(["bash"], t);
       case "markdown":
       case "md":
        return h(["html", "jsx", "bash"], t);
       default:
        return h(Object.keys(g), t);
      }
     })(a, o),
     c = n.split("\n"),
     s = Object.fromEntries(o.map((e) => [e.className, { start: 0, range: "" }])),
     i = Object.fromEntries(
      o
       .filter((e) => e.line)
       .map((e) => {
        let { className: t, line: n } = e;
        return [n, t];
       })
     ),
     d = Object.fromEntries(
      o
       .filter((e) => e.block)
       .map((e) => {
        let { className: t, block: n } = e;
        return [n.start, t];
       })
     ),
     m = Object.fromEntries(
      o
       .filter((e) => e.block)
       .map((e) => {
        let { className: t, block: n } = e;
        return [n.end, t];
       })
     );
    for (let u = 0; u < c.length; ) {
     const e = c[u].match(r);
     if (!e) {
      u += 1;
      continue;
     }
     const t = e.slice(1).find((e) => void 0 !== e);
     i[t] ? (s[i[t]].range += `${u},`) : d[t] ? (s[d[t]].start = u) : m[t] && (s[m[t]].range += `${s[m[t]].start}-${u - 1},`), c.splice(u, 1);
    }
    n = c.join("\n");
    const p = {};
    return (
     Object.entries(s).forEach((e) => {
      let [t, { range: n }] = e;
      u()(n).forEach((e) => {
       (p[e] ??= []), p[e].push(t);
      });
     }),
     { lineClassNames: p, code: n }
    );
   }
   const b = { codeBlockContainer: "codeBlockContainer_Ckt0" };
   function E(e) {
    let { as: t, ...n } = e;
    const l = (function (e) {
     const t = { color: "--prism-color", backgroundColor: "--prism-background-color" },
      n = {};
     return (
      Object.entries(e.plain).forEach((e) => {
       let [a, o] = e;
       const l = t[a];
       l && "string" == typeof o && (n[l] = o);
      }),
      n
     );
    })(i());
    return o.createElement(t, (0, a.Z)({}, n, { style: l, className: (0, r.Z)(n.className, b.codeBlockContainer, d.k.common.codeBlock) }));
   }
   const y = { codeBlockContent: "codeBlockContent_biex", codeBlockTitle: "codeBlockTitle_Ktv7", codeBlock: "codeBlock_bY9V", codeBlockStandalone: "codeBlockStandalone_MEMb", codeBlockLines: "codeBlockLines_e6Vv", codeBlockLinesWithNumbering: "codeBlockLinesWithNumbering_o6Pm", buttonGroup: "buttonGroup__atx" };
   function k(e) {
    let { children: t, className: n } = e;
    return o.createElement(E, { as: "pre", tabIndex: 0, className: (0, r.Z)(y.codeBlockStandalone, "thin-scrollbar", n) }, o.createElement("code", { className: y.codeBlockLines }, t));
   }
   var N = n(902);
   const C = { attributes: !0, characterData: !0, childList: !0, subtree: !0 };
   function L(e, t) {
    const [n, a] = (0, o.useState)(),
     l = (0, o.useCallback)(() => {
      var t;
      a(null == (t = e.current) ? void 0 : t.closest("[role=tabpanel][hidden]"));
     }, [e, a]);
    (0, o.useEffect)(() => {
     l();
    }, [l]),
     (function (e, t, n) {
      void 0 === n && (n = C);
      const a = (0, N.zX)(t),
       l = (0, N.Ql)(n);
      (0, o.useEffect)(() => {
       const t = new MutationObserver(a);
       return e && t.observe(e, l), () => t.disconnect();
      }, [e, a, l]);
     })(
      n,
      (e) => {
       e.forEach((e) => {
        "attributes" === e.type && "hidden" === e.attributeName && (t(), l());
       });
      },
      { attributes: !0, characterData: !1, childList: !1, subtree: !1 }
     );
   }
   const w = {
    plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
    styles: [
     { types: ["comment", "prolog", "doctype", "cdata", "punctuation"], style: { color: "#6c6783" } },
     { types: ["namespace"], style: { opacity: 0.7 } },
     { types: ["tag", "operator", "number"], style: { color: "#e09142" } },
     { types: ["property", "function"], style: { color: "#9a86fd" } },
     { types: ["tag-id", "selector", "atrule-id"], style: { color: "#eeebff" } },
     { types: ["attr-name"], style: { color: "#c4b9fe" } },
     { types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "atrule", "placeholder", "variable"], style: { color: "#ffcc99" } },
     { types: ["deleted"], style: { textDecorationLine: "line-through" } },
     { types: ["inserted"], style: { textDecorationLine: "underline" } },
     { types: ["italic"], style: { fontStyle: "italic" } },
     { types: ["important", "bold"], style: { fontWeight: "bold" } },
     { types: ["important"], style: { color: "#c4b9fe" } },
    ],
   };
   var _ = { Prism: n(11205).Z, theme: w };
   function B(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   function T() {
    return (
     (T =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
       }
       return e;
      }),
     T.apply(this, arguments)
    );
   }
   var Z = /\r\n|\r|\n/,
    x = function (e) {
     0 === e.length ? e.push({ types: ["plain"], content: "\n", empty: !0 }) : 1 === e.length && "" === e[0].content && ((e[0].content = "\n"), (e[0].empty = !0));
    },
    O = function (e, t) {
     var n = e.length;
     return n > 0 && e[n - 1] === t ? e : e.concat(t);
    };
   function H(e, t) {
    var n = {};
    for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && -1 === t.indexOf(a) && (n[a] = e[a]);
    return n;
   }
   var j = (function (e) {
    function t() {
     for (var t = this, n = [], a = arguments.length; a--; ) n[a] = arguments[a];
     e.apply(this, n),
      B(this, "getThemeDict", function (e) {
       if (void 0 !== t.themeDict && e.theme === t.prevTheme && e.language === t.prevLanguage) return t.themeDict;
       (t.prevTheme = e.theme), (t.prevLanguage = e.language);
       var n = e.theme
        ? (function (e, t) {
           var n = e.plain,
            a = Object.create(null),
            o = e.styles.reduce(function (e, n) {
             var a = n.languages,
              o = n.style;
             return (
              (a && !a.includes(t)) ||
               n.types.forEach(function (t) {
                var n = T({}, e[t], o);
                e[t] = n;
               }),
              e
             );
            }, a);
           return (o.root = n), (o.plain = T({}, n, { backgroundColor: null })), o;
          })(e.theme, e.language)
        : void 0;
       return (t.themeDict = n);
      }),
      B(this, "getLineProps", function (e) {
       var n = e.key,
        a = e.className,
        o = e.style,
        l = T({}, H(e, ["key", "className", "style", "line"]), { className: "token-line", style: void 0, key: void 0 }),
        r = t.getThemeDict(t.props);
       return void 0 !== r && (l.style = r.plain), void 0 !== o && (l.style = void 0 !== l.style ? T({}, l.style, o) : o), void 0 !== n && (l.key = n), a && (l.className += " " + a), l;
      }),
      B(this, "getStyleForToken", function (e) {
       var n = e.types,
        a = e.empty,
        o = n.length,
        l = t.getThemeDict(t.props);
       if (void 0 !== l) {
        if (1 === o && "plain" === n[0]) return a ? { display: "inline-block" } : void 0;
        if (1 === o && !a) return l[n[0]];
        var r = a ? { display: "inline-block" } : {},
         c = n.map(function (e) {
          return l[e];
         });
        return Object.assign.apply(Object, [r].concat(c));
       }
      }),
      B(this, "getTokenProps", function (e) {
       var n = e.key,
        a = e.className,
        o = e.style,
        l = e.token,
        r = T({}, H(e, ["key", "className", "style", "token"]), { className: "token " + l.types.join(" "), children: l.content, style: t.getStyleForToken(l), key: void 0 });
       return void 0 !== o && (r.style = void 0 !== r.style ? T({}, r.style, o) : o), void 0 !== n && (r.key = n), a && (r.className += " " + a), r;
      }),
      B(this, "tokenize", function (e, t, n, a) {
       var o = { code: t, grammar: n, language: a, tokens: [] };
       e.hooks.run("before-tokenize", o);
       var l = (o.tokens = e.tokenize(o.code, o.grammar, o.language));
       return e.hooks.run("after-tokenize", o), l;
      });
    }
    return (
     e && (t.__proto__ = e),
     (t.prototype = Object.create(e && e.prototype)),
     (t.prototype.constructor = t),
     (t.prototype.render = function () {
      var e = this.props,
       t = e.Prism,
       n = e.language,
       a = e.code,
       o = e.children,
       l = this.getThemeDict(this.props),
       r = t.languages[n];
      return o({
       tokens: (function (e) {
        for (var t = [[]], n = [e], a = [0], o = [e.length], l = 0, r = 0, c = [], s = [c]; r > -1; ) {
         for (; (l = a[r]++) < o[r]; ) {
          var i = void 0,
           d = t[r],
           m = n[r][l];
          if (("string" == typeof m ? ((d = r > 0 ? d : ["plain"]), (i = m)) : ((d = O(d, m.type)), m.alias && (d = O(d, m.alias)), (i = m.content)), "string" == typeof i)) {
           var u = i.split(Z),
            p = u.length;
           c.push({ types: d, content: u[0] });
           for (var f = 1; f < p; f++) x(c), s.push((c = [])), c.push({ types: d, content: u[f] });
          } else r++, t.push(d), n.push(i), a.push(0), o.push(i.length);
         }
         r--, t.pop(), n.pop(), a.pop(), o.pop();
        }
        return x(c), s;
       })(void 0 !== r ? this.tokenize(t, a, r, n) : [a]),
       className: "prism-code language-" + n,
       style: void 0 !== l ? l.root : {},
       getLineProps: this.getLineProps,
       getTokenProps: this.getTokenProps,
      });
     }),
     t
    );
   })(o.Component);
   const A = j,
    S = { codeLine: "codeLine_lJS_", codeLineNumber: "codeLineNumber_Tfdd", codeLineContent: "codeLineContent_feaV" };
   function I(e) {
    let { line: t, classNames: n, showLineNumbers: l, getLineProps: c, getTokenProps: s } = e;
    1 === t.length && "\n" === t[0].content && (t[0].content = "");
    const i = c({ line: t, className: (0, r.Z)(n, l && S.codeLine) }),
     d = t.map((e, t) => o.createElement("span", (0, a.Z)({ key: t }, s({ token: e, key: t }))));
    return o.createElement("span", i, l ? o.createElement(o.Fragment, null, o.createElement("span", { className: S.codeLineNumber }), o.createElement("span", { className: S.codeLineContent }, d)) : d, o.createElement("br", null));
   }
   var M = n(95999);
   function U(e) {
    return o.createElement("svg", (0, a.Z)({ viewBox: "0 0 24 24" }, e), o.createElement("path", { fill: "currentColor", d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }));
   }
   function P(e) {
    return o.createElement("svg", (0, a.Z)({ viewBox: "0 0 24 24" }, e), o.createElement("path", { fill: "currentColor", d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }));
   }
   const z = { copyButtonCopied: "copyButtonCopied_obH4", copyButtonIcons: "copyButtonIcons_eSgA", copyButtonIcon: "copyButtonIcon_y97N", copyButtonSuccessIcon: "copyButtonSuccessIcon_LjdS" };
   function D(e) {
    let { code: t, className: n } = e;
    const [a, l] = (0, o.useState)(!1),
     c = (0, o.useRef)(void 0),
     s = (0, o.useCallback)(() => {
      !(function (e, t) {
       let { target: n = document.body } = void 0 === t ? {} : t;
       if ("string" != typeof e) throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);
       const a = document.createElement("textarea"),
        o = document.activeElement;
       (a.value = e), a.setAttribute("readonly", ""), (a.style.contain = "strict"), (a.style.position = "absolute"), (a.style.left = "-9999px"), (a.style.fontSize = "12pt");
       const l = document.getSelection(),
        r = l.rangeCount > 0 && l.getRangeAt(0);
       n.append(a), a.select(), (a.selectionStart = 0), (a.selectionEnd = e.length);
       let c = !1;
       try {
        c = document.execCommand("copy");
       } catch {}
       a.remove(), r && (l.removeAllRanges(), l.addRange(r)), o && o.focus();
      })(t),
       l(!0),
       (c.current = window.setTimeout(() => {
        l(!1);
       }, 1e3));
     }, [t]);
    return (0, o.useEffect)(() => () => window.clearTimeout(c.current), []), o.createElement("button", { type: "button", "aria-label": a ? (0, M.I)({ id: "theme.CodeBlock.copied", message: "Copied", description: "The copied button label on code blocks" }) : (0, M.I)({ id: "theme.CodeBlock.copyButtonAriaLabel", message: "Copy code to clipboard", description: "The ARIA label for copy code blocks button" }), title: (0, M.I)({ id: "theme.CodeBlock.copy", message: "Copy", description: "The copy button label on code blocks" }), className: (0, r.Z)("clean-btn", n, z.copyButton, a && z.copyButtonCopied), onClick: s }, o.createElement("span", { className: z.copyButtonIcons, "aria-hidden": "true" }, o.createElement(U, { className: z.copyButtonIcon }), o.createElement(P, { className: z.copyButtonSuccessIcon })));
   }
   function V(e) {
    return o.createElement("svg", (0, a.Z)({ viewBox: "0 0 24 24" }, e), o.createElement("path", { fill: "currentColor", d: "M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z" }));
   }
   const R = { wordWrapButtonIcon: "wordWrapButtonIcon_Bwma", wordWrapButtonEnabled: "wordWrapButtonEnabled_EoeP" };
   function W(e) {
    let { className: t, onClick: n, isEnabled: a } = e;
    const l = (0, M.I)({ id: "theme.CodeBlock.wordWrapToggle", message: "Toggle word wrap", description: "The title attribute for toggle word wrapping button of code block lines" });
    return o.createElement("button", { type: "button", onClick: n, className: (0, r.Z)("clean-btn", t, a && R.wordWrapButtonEnabled), "aria-label": l, title: l }, o.createElement(V, { className: R.wordWrapButtonIcon, "aria-hidden": "true" }));
   }
   function $(e) {
    let { children: t, className: n = "", metastring: l, title: c, showLineNumbers: d, language: m } = e;
    const {
      prism: { defaultLanguage: u, magicComments: f },
     } = (0, s.L)(),
     g =
      m ??
      (function (e) {
       const t = e.split(" ").find((e) => e.startsWith("language-"));
       return null == t ? void 0 : t.replace(/language-/, "");
      })(n) ??
      u,
     h = i(),
     b = (function () {
      const [e, t] = (0, o.useState)(!1),
       [n, a] = (0, o.useState)(!1),
       l = (0, o.useRef)(null),
       r = (0, o.useCallback)(() => {
        const n = l.current.querySelector("code");
        e ? n.removeAttribute("style") : ((n.style.whiteSpace = "pre-wrap"), (n.style.overflowWrap = "anywhere")), t((e) => !e);
       }, [l, e]),
       c = (0, o.useCallback)(() => {
        const { scrollWidth: e, clientWidth: t } = l.current,
         n = e > t || l.current.querySelector("code").hasAttribute("style");
        a(n);
       }, [l]);
      return (
       L(l, c),
       (0, o.useEffect)(() => {
        c();
       }, [e, c]),
       (0, o.useEffect)(
        () => (
         window.addEventListener("resize", c, { passive: !0 }),
         () => {
          window.removeEventListener("resize", c);
         }
        ),
        [c]
       ),
       { codeBlockRef: l, isEnabled: e, isCodeScrollable: n, toggle: r }
      );
     })(),
     k =
      (function (e) {
       var t;
       return (null == e || null == (t = e.match(p)) ? void 0 : t.groups.title) ?? "";
      })(l) || c,
     { lineClassNames: N, code: C } = v(t, { metastring: l, language: g, magicComments: f }),
     w =
      d ??
      (function (e) {
       return Boolean(null == e ? void 0 : e.includes("showLineNumbers"));
      })(l);
    return o.createElement(
     E,
     { as: "div", className: (0, r.Z)(n, g && !n.includes(`language-${g}`) && `language-${g}`) },
     k && o.createElement("div", { className: y.codeBlockTitle }, k),
     o.createElement(
      "div",
      { className: y.codeBlockContent },
      o.createElement(A, (0, a.Z)({}, _, { theme: h, code: C, language: g ?? "text" }), (e) => {
       let { className: t, tokens: n, getLineProps: a, getTokenProps: l } = e;
       return o.createElement(
        "pre",
        { tabIndex: 0, ref: b.codeBlockRef, className: (0, r.Z)(t, y.codeBlock, "thin-scrollbar") },
        o.createElement(
         "code",
         { className: (0, r.Z)(y.codeBlockLines, w && y.codeBlockLinesWithNumbering) },
         n.map((e, t) => o.createElement(I, { key: t, line: e, getLineProps: a, getTokenProps: l, classNames: N[t], showLineNumbers: w }))
        )
       );
      }),
      o.createElement("div", { className: y.buttonGroup }, (b.isEnabled || b.isCodeScrollable) && o.createElement(W, { className: y.codeButton, onClick: () => b.toggle(), isEnabled: b.isEnabled }), o.createElement(D, { className: y.codeButton, code: C }))
     )
    );
   }
   function F(e) {
    let { children: t, ...n } = e;
    const r = (0, l.Z)(),
     c = (function (e) {
      return o.Children.toArray(e).some((e) => (0, o.isValidElement)(e)) ? e : Array.isArray(e) ? e.join("") : e;
     })(t),
     s = "string" == typeof c ? $ : k;
    return o.createElement(s, (0, a.Z)({ key: String(r) }, n), c);
   }
  },
  34673: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => f });
   var a = n(87462),
    o = n(67294),
    l = n(86010),
    r = n(72389),
    c = n(47186);
   const s = { details: "details_lb9f", isBrowser: "isBrowser_bmU9", collapsibleContent: "collapsibleContent_i85q" };
   function i(e) {
    return !!e && ("SUMMARY" === e.tagName || i(e.parentElement));
   }
   function d(e, t) {
    return !!e && (e === t || d(e.parentElement, t));
   }
   function m(e) {
    let { summary: t, children: n, ...m } = e;
    const u = (0, r.Z)(),
     p = (0, o.useRef)(null),
     { collapsed: f, setCollapsed: g } = (0, c.u)({ initialState: !m.open }),
     [h, v] = (0, o.useState)(m.open),
     b = o.isValidElement(t) ? t : o.createElement("summary", null, t ?? "Details");
    return o.createElement(
     "details",
     (0, a.Z)({}, m, {
      ref: p,
      open: h,
      "data-collapsed": f,
      className: (0, l.Z)(s.details, u && s.isBrowser, m.className),
      onMouseDown: (e) => {
       i(e.target) && e.detail > 1 && e.preventDefault();
      },
      onClick: (e) => {
       e.stopPropagation();
       const t = e.target;
       i(t) && d(t, p.current) && (e.preventDefault(), f ? (g(!1), v(!0)) : g(!0));
      },
     }),
     b,
     o.createElement(
      c.z,
      {
       lazy: !1,
       collapsed: f,
       disableSSRStyle: !0,
       onCollapseTransitionEnd: (e) => {
        g(e), v(!e);
       },
      },
      o.createElement("div", { className: s.collapsibleContent }, n)
     )
    );
   }
   const u = { details: "details_b_Ee" },
    p = "alert alert--info";
   function f(e) {
    let { ...t } = e;
    return o.createElement(m, (0, a.Z)({}, t, { className: (0, l.Z)(p, u.details, t.className) }));
   }
  },
  67058: (e, t, n) => {
   "use strict";
   n.r(t), n.d(t, { default: () => te });
   var a = n(67294),
    o = n(10833),
    l = n(65130);
   function r() {
    const { metadata: e, frontMatter: t, assets: n } = (0, l.k)();
    return a.createElement(o.d, { title: e.title, description: e.description, keywords: t.keywords, image: n.image ?? t.image });
   }
   var c = n(86010),
    s = n(87524),
    i = n(4966);
   function d() {
    const { metadata: e } = (0, l.k)();
    return a.createElement(i.Z, { previous: e.previous, next: e.next });
   }
   var m = n(23120),
    u = n(44364),
    p = n(35281),
    f = n(95999);
   function g(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n } = e;
    return a.createElement(f.Z, { id: "theme.lastUpdated.atDate", description: "The words used to describe on which date a page has been last updated", values: { date: a.createElement("b", null, a.createElement("time", { dateTime: new Date(1e3 * t).toISOString() }, n)) } }, " on {date}");
   }
   function h(e) {
    let { lastUpdatedBy: t } = e;
    return a.createElement(f.Z, { id: "theme.lastUpdated.byUser", description: "The words used to describe by who the page has been last updated", values: { user: a.createElement("b", null, t) } }, " by {user}");
   }
   function v(e) {
    let { lastUpdatedAt: t, formattedLastUpdatedAt: n, lastUpdatedBy: o } = e;
    return a.createElement("span", { className: p.k.common.lastUpdated }, a.createElement(f.Z, { id: "theme.lastUpdated.lastUpdatedAtBy", description: "The sentence used to display when a page has been last updated, and by who", values: { atDate: t && n ? a.createElement(g, { lastUpdatedAt: t, formattedLastUpdatedAt: n }) : "", byUser: o ? a.createElement(h, { lastUpdatedBy: o }) : "" } }, "Last updated{atDate}{byUser}"), !1);
   }
   var b = n(87462);
   const E = { iconEdit: "iconEdit_Z9Sw" };
   function y(e) {
    let { className: t, ...n } = e;
    return a.createElement("svg", (0, b.Z)({ fill: "currentColor", height: "20", width: "20", viewBox: "0 0 40 40", className: (0, c.Z)(E.iconEdit, t), "aria-hidden": "true" }, n), a.createElement("g", null, a.createElement("path", { d: "m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" })));
   }
   function k(e) {
    let { editUrl: t } = e;
    return a.createElement("a", { href: t, target: "_blank", rel: "noreferrer noopener", className: p.k.common.editThisPage }, a.createElement(y, null), a.createElement(f.Z, { id: "theme.common.editThisPage", description: "The link label to edit the current page" }, "Edit this page"));
   }
   var N = n(13008);
   const C = { tags: "tags_jXut", tag: "tag_QGVx" };
   function L(e) {
    let { tags: t } = e;
    return a.createElement(
     a.Fragment,
     null,
     a.createElement("b", null, a.createElement(f.Z, { id: "theme.tags.tagsListLabel", description: "The label alongside a tag list" }, "Tags:")),
     a.createElement(
      "ul",
      { className: (0, c.Z)(C.tags, "padding--none", "margin-left--sm") },
      t.map((e) => {
       let { label: t, permalink: n } = e;
       return a.createElement("li", { key: n, className: C.tag }, a.createElement(N.Z, { label: t, permalink: n }));
      })
     )
    );
   }
   const w = { lastUpdated: "lastUpdated_vwxv" };
   function _(e) {
    return a.createElement("div", { className: (0, c.Z)(p.k.docs.docFooterTagsRow, "row margin-bottom--sm") }, a.createElement("div", { className: "col" }, a.createElement(L, e)));
   }
   function B(e) {
    let { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: o, formattedLastUpdatedAt: l } = e;
    return a.createElement("div", { className: (0, c.Z)(p.k.docs.docFooterEditMetaRow, "row") }, a.createElement("div", { className: "col" }, t && a.createElement(k, { editUrl: t })), a.createElement("div", { className: (0, c.Z)("col", w.lastUpdated) }, (n || o) && a.createElement(v, { lastUpdatedAt: n, formattedLastUpdatedAt: l, lastUpdatedBy: o })));
   }
   function T() {
    const { metadata: e } = (0, l.k)(),
     { editUrl: t, lastUpdatedAt: n, formattedLastUpdatedAt: o, lastUpdatedBy: r, tags: s } = e,
     i = s.length > 0,
     d = !!(t || n || r);
    return i || d ? a.createElement("footer", { className: (0, c.Z)(p.k.docs.docFooter, "docusaurus-mt-lg") }, i && a.createElement(_, { tags: s }), d && a.createElement(B, { editUrl: t, lastUpdatedAt: n, lastUpdatedBy: r, formattedLastUpdatedAt: o })) : null;
   }
   var Z = n(47186),
    x = n(86668);
   function O(e) {
    const t = e.map((e) => ({ ...e, parentIndex: -1, children: [] })),
     n = Array(7).fill(-1);
    t.forEach((e, t) => {
     const a = n.slice(2, e.level);
     (e.parentIndex = Math.max(...a)), (n[e.level] = t);
    });
    const a = [];
    return (
     t.forEach((e) => {
      const { parentIndex: n, ...o } = e;
      n >= 0 ? t[n].children.push(o) : a.push(o);
     }),
     a
    );
   }
   function H(e) {
    let { toc: t, minHeadingLevel: n, maxHeadingLevel: a } = e;
    return t.flatMap((e) => {
     const t = H({ toc: e.children, minHeadingLevel: n, maxHeadingLevel: a });
     return (function (e) {
      return e.level >= n && e.level <= a;
     })(e)
      ? [{ ...e, children: t }]
      : t;
    });
   }
   function j(e) {
    const t = e.getBoundingClientRect();
    return t.top === t.bottom ? j(e.parentNode) : t;
   }
   function A(e, t) {
    let { anchorTopOffset: n } = t;
    const a = e.find((e) => j(e).top >= n);
    if (a) {
     return (function (e) {
      return e.top > 0 && e.bottom < window.innerHeight / 2;
     })(j(a))
      ? a
      : e[e.indexOf(a) - 1] ?? null;
    }
    return e[e.length - 1] ?? null;
   }
   function S() {
    const e = (0, a.useRef)(0),
     {
      navbar: { hideOnScroll: t },
     } = (0, x.L)();
    return (
     (0, a.useEffect)(() => {
      e.current = t ? 0 : document.querySelector(".navbar").clientHeight;
     }, [t]),
     e
    );
   }
   function I(e) {
    const t = (0, a.useRef)(void 0),
     n = S();
    (0, a.useEffect)(() => {
     if (!e) return () => {};
     const { linkClassName: a, linkActiveClassName: o, minHeadingLevel: l, maxHeadingLevel: r } = e;
     function c() {
      const e = (function (e) {
        return Array.from(document.getElementsByClassName(e));
       })(a),
       c = (function (e) {
        let { minHeadingLevel: t, maxHeadingLevel: n } = e;
        const a = [];
        for (let o = t; o <= n; o += 1) a.push(`h${o}.anchor`);
        return Array.from(document.querySelectorAll(a.join()));
       })({ minHeadingLevel: l, maxHeadingLevel: r }),
       s = A(c, { anchorTopOffset: n.current }),
       i = e.find(
        (e) =>
         s &&
         s.id ===
          (function (e) {
           return decodeURIComponent(e.href.substring(e.href.indexOf("#") + 1));
          })(e)
       );
      e.forEach((e) => {
       !(function (e, n) {
        n ? (t.current && t.current !== e && t.current.classList.remove(o), e.classList.add(o), (t.current = e)) : e.classList.remove(o);
       })(e, e === i);
      });
     }
     return (
      document.addEventListener("scroll", c),
      document.addEventListener("resize", c),
      c(),
      () => {
       document.removeEventListener("scroll", c), document.removeEventListener("resize", c);
      }
     );
    }, [e, n]);
   }
   function M(e) {
    let { toc: t, className: n, linkClassName: o, isChild: l } = e;
    return t.length
     ? a.createElement(
        "ul",
        { className: l ? void 0 : n },
        t.map((e) => a.createElement("li", { key: e.id }, a.createElement("a", { href: `#${e.id}`, className: o ?? void 0, dangerouslySetInnerHTML: { __html: e.value } }), a.createElement(M, { isChild: !0, toc: e.children, className: n, linkClassName: o })))
       )
     : null;
   }
   const U = a.memo(M);
   function P(e) {
    let { toc: t, className: n = "table-of-contents table-of-contents__left-border", linkClassName: o = "table-of-contents__link", linkActiveClassName: l, minHeadingLevel: r, maxHeadingLevel: c, ...s } = e;
    const i = (0, x.L)(),
     d = r ?? i.tableOfContents.minHeadingLevel,
     m = c ?? i.tableOfContents.maxHeadingLevel,
     u = (function (e) {
      let { toc: t, minHeadingLevel: n, maxHeadingLevel: o } = e;
      return (0, a.useMemo)(() => H({ toc: O(t), minHeadingLevel: n, maxHeadingLevel: o }), [t, n, o]);
     })({ toc: t, minHeadingLevel: d, maxHeadingLevel: m });
    return (
     I(
      (0, a.useMemo)(() => {
       if (o && l) return { linkClassName: o, linkActiveClassName: l, minHeadingLevel: d, maxHeadingLevel: m };
      }, [o, l, d, m])
     ),
     a.createElement(U, (0, b.Z)({ toc: u, className: n, linkClassName: o }, s))
    );
   }
   const z = { tocCollapsibleButton: "tocCollapsibleButton_TO0P", tocCollapsibleButtonExpanded: "tocCollapsibleButtonExpanded_MG3E" };
   function D(e) {
    let { collapsed: t, ...n } = e;
    return a.createElement("button", (0, b.Z)({ type: "button" }, n, { className: (0, c.Z)("clean-btn", z.tocCollapsibleButton, !t && z.tocCollapsibleButtonExpanded, n.className) }), a.createElement(f.Z, { id: "theme.TOCCollapsible.toggleButtonLabel", description: "The label used by the button on the collapsible TOC component" }, "On this page"));
   }
   const V = { tocCollapsible: "tocCollapsible_ETCw", tocCollapsibleContent: "tocCollapsibleContent_vkbj", tocCollapsibleExpanded: "tocCollapsibleExpanded_sAul" };
   function R(e) {
    let { toc: t, className: n, minHeadingLevel: o, maxHeadingLevel: l } = e;
    const { collapsed: r, toggleCollapsed: s } = (0, Z.u)({ initialState: !0 });
    return a.createElement("div", { className: (0, c.Z)(V.tocCollapsible, !r && V.tocCollapsibleExpanded, n) }, a.createElement(D, { collapsed: r, onClick: s }), a.createElement(Z.z, { lazy: !0, className: V.tocCollapsibleContent, collapsed: r }, a.createElement(P, { toc: t, minHeadingLevel: o, maxHeadingLevel: l })));
   }
   const W = { tocMobile: "tocMobile_ITEo" };
   function $() {
    const { toc: e, frontMatter: t } = (0, l.k)();
    return a.createElement(R, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: (0, c.Z)(p.k.docs.docTocMobile, W.tocMobile) });
   }
   const F = { tableOfContents: "tableOfContents_bqdL", docItemContainer: "docItemContainer_F8PC" },
    q = "table-of-contents__link toc-highlight",
    G = "table-of-contents__link--active";
   function J(e) {
    let { className: t, ...n } = e;
    return a.createElement("div", { className: (0, c.Z)(F.tableOfContents, "thin-scrollbar", t) }, a.createElement(P, (0, b.Z)({}, n, { linkClassName: q, linkActiveClassName: G })));
   }
   function Q() {
    const { toc: e, frontMatter: t } = (0, l.k)();
    return a.createElement(J, { toc: e, minHeadingLevel: t.toc_min_heading_level, maxHeadingLevel: t.toc_max_heading_level, className: p.k.docs.docTocDesktop });
   }
   var X = n(33507),
    Y = n(1832);
   const K = { docItemContainer: "docItemContainer_Djhp", docItemCol: "docItemCol_VOVn" };
   function ee(e) {
    let { children: t } = e;
    const n = (function () {
     const { frontMatter: e, toc: t } = (0, l.k)(),
      n = (0, s.i)(),
      o = e.hide_table_of_contents,
      r = !o && t.length > 0;
     return { hidden: o, mobile: r ? a.createElement($, null) : void 0, desktop: !r || ("desktop" !== n && "ssr" !== n) ? void 0 : a.createElement(Q, null) };
    })();
    return a.createElement("div", { className: "row" }, a.createElement("div", { className: (0, c.Z)("col", !n.hidden && K.docItemCol) }, a.createElement(m.Z, null), a.createElement("div", { className: K.docItemContainer }, a.createElement("article", null, a.createElement(Y.Z, null), a.createElement(u.Z, null), n.mobile, a.createElement(X.Z, null, t), a.createElement(T, null)), a.createElement(d, null))), n.desktop && a.createElement("div", { className: "col col--3" }, n.desktop));
   }
   function te(e) {
    const t = `docs-doc-id-${e.content.metadata.unversionedId}`,
     n = e.content;
    return a.createElement(l.b, { content: e.content }, a.createElement(o.FG, { className: t }, a.createElement(r, null), a.createElement(ee, null, a.createElement(n, null))));
   }
  },
  4966: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => i });
   var a = n(87462),
    o = n(67294),
    l = n(95999),
    r = n(86010),
    c = n(39960);
   function s(e) {
    const { permalink: t, title: n, subLabel: a, isNext: l } = e;
    return o.createElement(c.Z, { className: (0, r.Z)("pagination-nav__link", l ? "pagination-nav__link--next" : "pagination-nav__link--prev"), to: t }, a && o.createElement("div", { className: "pagination-nav__sublabel" }, a), o.createElement("div", { className: "pagination-nav__label" }, n));
   }
   function i(e) {
    const { previous: t, next: n } = e;
    return o.createElement("nav", { className: "pagination-nav docusaurus-mt-lg", "aria-label": (0, l.I)({ id: "theme.docs.paginator.navAriaLabel", message: "Docs pages", description: "The ARIA label for the docs pagination" }) }, t && o.createElement(s, (0, a.Z)({}, t, { subLabel: o.createElement(l.Z, { id: "theme.docs.paginator.previous", description: "The label used to navigate to the previous doc" }, "Previous") })), n && o.createElement(s, (0, a.Z)({}, n, { subLabel: o.createElement(l.Z, { id: "theme.docs.paginator.next", description: "The label used to navigate to the next doc" }, "Next"), isNext: !0 })));
   }
  },
  44364: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => s });
   var a = n(67294),
    o = n(86010),
    l = n(95999),
    r = n(35281),
    c = n(74477);
   function s(e) {
    let { className: t } = e;
    const n = (0, c.E)();
    return n.badge ? a.createElement("span", { className: (0, o.Z)(t, r.k.docs.docVersionBadge, "badge badge--secondary") }, a.createElement(l.Z, { id: "theme.docs.versionBadge.label", values: { versionLabel: n.label } }, "Version: {versionLabel}")) : null;
   }
  },
  23120: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => h });
   var a = n(67294),
    o = n(86010),
    l = n(52263),
    r = n(39960),
    c = n(95999),
    s = n(94104),
    i = n(35281),
    d = n(60373),
    m = n(74477);
   const u = {
    unreleased: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return a.createElement(c.Z, { id: "theme.docs.versions.unreleasedVersionLabel", description: "The label used to tell the user that he's browsing an unreleased doc version", values: { siteTitle: t, versionLabel: a.createElement("b", null, n.label) } }, "This is unreleased documentation for {siteTitle} {versionLabel} version.");
    },
    unmaintained: function (e) {
     let { siteTitle: t, versionMetadata: n } = e;
     return a.createElement(c.Z, { id: "theme.docs.versions.unmaintainedVersionLabel", description: "The label used to tell the user that he's browsing an unmaintained doc version", values: { siteTitle: t, versionLabel: a.createElement("b", null, n.label) } }, "This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.");
    },
   };
   function p(e) {
    const t = u[e.versionMetadata.banner];
    return a.createElement(t, e);
   }
   function f(e) {
    let { versionLabel: t, to: n, onClick: o } = e;
    return a.createElement(c.Z, { id: "theme.docs.versions.latestVersionSuggestionLabel", description: "The label used to tell the user to check the latest version", values: { versionLabel: t, latestVersionLink: a.createElement("b", null, a.createElement(r.Z, { to: n, onClick: o }, a.createElement(c.Z, { id: "theme.docs.versions.latestVersionLinkLabel", description: "The label used for the latest version suggestion link label" }, "latest version"))) } }, "For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).");
   }
   function g(e) {
    let { className: t, versionMetadata: n } = e;
    const {
      siteConfig: { title: r },
     } = (0, l.Z)(),
     { pluginId: c } = (0, s.gA)({ failfast: !0 }),
     { savePreferredVersionName: m } = (0, d.J)(c),
     { latestDocSuggestion: u, latestVersionSuggestion: g } = (0, s.Jo)(c),
     h = u ?? (v = g).docs.find((e) => e.id === v.mainDocId);
    var v;
    return a.createElement("div", { className: (0, o.Z)(t, i.k.docs.docVersionBanner, "alert alert--warning margin-bottom--md"), role: "alert" }, a.createElement("div", null, a.createElement(p, { siteTitle: r, versionMetadata: n })), a.createElement("div", { className: "margin-top--md" }, a.createElement(f, { versionLabel: g.label, to: h.path, onClick: () => m(g.name) })));
   }
   function h(e) {
    let { className: t } = e;
    const n = (0, m.E)();
    return n.banner ? a.createElement(g, { className: t, versionMetadata: n }) : null;
   }
  },
  92503: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => d });
   var a = n(87462),
    o = n(67294),
    l = n(86010),
    r = n(95999),
    c = n(86668),
    s = n(39960);
   const i = { anchorWithStickyNavbar: "anchorWithStickyNavbar_LWe7", anchorWithHideOnScrollNavbar: "anchorWithHideOnScrollNavbar_WYt5" };
   function d(e) {
    let { as: t, id: n, ...d } = e;
    const {
     navbar: { hideOnScroll: m },
    } = (0, c.L)();
    if ("h1" === t || !n) return o.createElement(t, (0, a.Z)({}, d, { id: void 0 }));
    const u = (0, r.I)({ id: "theme.common.headingLinkTitle", message: "Direct link to {heading}", description: "Title for link to heading" }, { heading: "string" == typeof d.children ? d.children : n });
    return o.createElement(t, (0, a.Z)({}, d, { className: (0, l.Z)("anchor", m ? i.anchorWithHideOnScrollNavbar : i.anchorWithStickyNavbar, d.className), id: n }), d.children, o.createElement(s.Z, { className: "hash-link", to: `#${n}`, "aria-label": u, title: u }, "\u200b"));
   }
  },
  13008: (e, t, n) => {
   "use strict";
   n.d(t, { Z: () => c });
   var a = n(67294),
    o = n(86010),
    l = n(39960);
   const r = { tag: "tag_zVej", tagRegular: "tagRegular_sFm0", tagWithCount: "tagWithCount_h2kH" };
   function c(e) {
    let { permalink: t, label: n, count: c } = e;
    return a.createElement(l.Z, { href: t, className: (0, o.Z)(r.tag, c ? r.tagWithCount : r.tagRegular) }, n, c && a.createElement("span", null, c));
   }
  },
  65130: (e, t, n) => {
   "use strict";
   n.d(t, { b: () => r, k: () => c });
   var a = n(67294),
    o = n(902);
   const l = a.createContext(null);
   function r(e) {
    let { children: t, content: n } = e;
    const o = (function (e) {
     return (0, a.useMemo)(() => ({ metadata: e.metadata, frontMatter: e.frontMatter, assets: e.assets, contentTitle: e.contentTitle, toc: e.toc }), [e]);
    })(n);
    return a.createElement(l.Provider, { value: o }, t);
   }
   function c() {
    const e = (0, a.useContext)(l);
    if (null === e) throw new o.i6("DocProvider");
    return e;
   }
  },
  87594: (e, t) => {
   function n(e) {
    let t,
     n = [];
    for (let a of e.split(",").map((e) => e.trim()))
     if (/^-?\d+$/.test(a)) n.push(parseInt(a, 10));
     else if ((t = a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))) {
      let [e, a, o, l] = t;
      if (a && l) {
       (a = parseInt(a)), (l = parseInt(l));
       const e = a < l ? 1 : -1;
       ("-" !== o && ".." !== o && "\u2025" !== o) || (l += e);
       for (let t = a; t !== l; t += e) n.push(t);
      }
     }
    return n;
   }
   (t.default = n), (e.exports = n);
  },
 },
]);
