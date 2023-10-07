"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [1423, 3047],
 {
  93205: (e) => {
   function t(e) {
    !(function (e) {
     function t(e, t) {
      return "___" + e.toUpperCase() + t + "___";
     }
     Object.defineProperties((e.languages["markup-templating"] = {}), {
      buildPlaceholders: {
       value: function (a, n, r, l) {
        if (a.language === n) {
         var s = (a.tokenStack = []);
         (a.code = a.code.replace(r, function (e) {
          if ("function" == typeof l && !l(e)) return e;
          for (var r, i = s.length; -1 !== a.code.indexOf((r = t(n, i))); ) ++i;
          return (s[i] = e), r;
         })),
          (a.grammar = e.languages.markup);
        }
       },
      },
      tokenizePlaceholders: {
       value: function (a, n) {
        if (a.language === n && a.tokenStack) {
         a.grammar = e.languages[n];
         var r = 0,
          l = Object.keys(a.tokenStack);
         !(function s(i) {
          for (var o = 0; o < i.length && !(r >= l.length); o++) {
           var p = i[o];
           if ("string" == typeof p || (p.content && "string" == typeof p.content)) {
            var u = l[r],
             c = a.tokenStack[u],
             g = "string" == typeof p ? p : p.content,
             d = t(n, u),
             m = g.indexOf(d);
            if (m > -1) {
             ++r;
             var f = g.substring(0, m),
              b = new e.Token(n, e.tokenize(c, a.grammar), "language-" + n, c),
              k = g.substring(m + d.length),
              h = [];
             f && h.push.apply(h, s([f])), h.push(b), k && h.push.apply(h, s([k])), "string" == typeof p ? i.splice.apply(i, [o, 1].concat(h)) : (p.content = h);
            }
           } else p.content && s(p.content);
          }
          return i;
         })(a.tokens);
        }
       },
      },
     });
    })(e);
   }
   (e.exports = t), (t.displayName = "markupTemplating"), (t.aliases = []);
  },
  38181: (e, t, a) => {
   var n = a(93205);
   function r(e) {
    e.register(n),
     (function (e) {
      var t = /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
       a = /\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;
      (e.languages.soy = { comment: [/\/\*[\s\S]*?\*\//, { pattern: /(\s)\/\/.*/, lookbehind: !0, greedy: !0 }], "command-arg": { pattern: /(\{+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/, lookbehind: !0, alias: "string", inside: { punctuation: /\./ } }, parameter: { pattern: /(\{+\/?\s*@?param\??\s+)\.?[\w.]+/, lookbehind: !0, alias: "variable" }, keyword: [{ pattern: /(\{+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/, lookbehind: !0 }, /\b(?:any|as|attributes|bool|css|float|html|in|int|js|list|map|null|number|string|uri)\b/], delimiter: { pattern: /^\{+\/?|\/?\}+$/, alias: "punctuation" }, property: /\w+(?==)/, variable: { pattern: /\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+\]))*/, inside: { string: { pattern: t, greedy: !0 }, number: a, punctuation: /[\[\].?]/ } }, string: { pattern: t, greedy: !0 }, function: [/\w+(?=\()/, { pattern: /(\|[^\S\r\n]*)\w+/, lookbehind: !0 }], boolean: /\b(?:false|true)\b/, number: a, operator: /\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/, punctuation: /[{}()\[\]|.,:]/ }),
       e.hooks.add("before-tokenize", function (t) {
        var a = !1;
        e.languages["markup-templating"].buildPlaceholders(t, "soy", /\{\{.+?\}\}|\{.+?\}|\s\/\/.*|\/\*[\s\S]*?\*\//g, function (e) {
         return "{/literal}" === e && (a = !1), !a && ("{literal}" === e && (a = !0), !0);
        });
       }),
       e.hooks.add("after-tokenize", function (t) {
        e.languages["markup-templating"].tokenizePlaceholders(t, "soy");
       });
     })(e);
   }
   (e.exports = r), (r.displayName = "soy"), (r.aliases = []);
  },
 },
]);
