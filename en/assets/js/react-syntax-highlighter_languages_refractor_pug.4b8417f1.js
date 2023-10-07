"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9851],
 {
  82161: (e) => {
   function t(e) {
    !(function (e) {
     e.languages.pug = {
      comment: { pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ].+)*/m, lookbehind: !0 },
      "multiline-script": { pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: !0, inside: e.languages.javascript },
      filter: { pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: !0, inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, text: /\S[\s\S]*/ } },
      "multiline-plain-text": { pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/m, lookbehind: !0 },
      markup: { pattern: /(^[\t ]*)<.+/m, lookbehind: !0, inside: e.languages.markup },
      doctype: { pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/, lookbehind: !0 },
      "flow-control": { pattern: /(^[\t ]*)(?:case|default|each|else|if|unless|when|while)\b(?: .+)?/m, lookbehind: !0, inside: { each: { pattern: /^each .+? in\b/, inside: { keyword: /\b(?:each|in)\b/, punctuation: /,/ } }, branch: { pattern: /^(?:case|default|else|if|unless|when|while)\b/, alias: "keyword" }, rest: e.languages.javascript } },
      keyword: { pattern: /(^[\t ]*)(?:append|block|extends|include|prepend)\b.+/m, lookbehind: !0 },
      mixin: [
       { pattern: /(^[\t ]*)mixin .+/m, lookbehind: !0, inside: { keyword: /^mixin/, function: /\w+(?=\s*\(|\s*$)/, punctuation: /[(),.]/ } },
       { pattern: /(^[\t ]*)\+.+/m, lookbehind: !0, inside: { name: { pattern: /^\+\w+/, alias: "function" }, rest: e.languages.javascript } },
      ],
      script: { pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]).+/m, lookbehind: !0, inside: e.languages.javascript },
      "plain-text": { pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]).+/m, lookbehind: !0 },
      tag: {
       pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
       lookbehind: !0,
       inside: {
        attributes: [
         { pattern: /&[^(]+\([^)]+\)/, inside: e.languages.javascript },
         { pattern: /\([^)]+\)/, inside: { "attr-value": { pattern: /(=\s*(?!\s))(?:\{[^}]*\}|[^,)\r\n]+)/, lookbehind: !0, inside: e.languages.javascript }, "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/, punctuation: /[!=(),]+/ } },
        ],
        punctuation: /:/,
        "attr-id": /#[\w\-]+/,
        "attr-class": /\.[\w\-]+/,
       },
      },
      code: [{ pattern: /(^[\t ]*(?:-|!?=)).+/m, lookbehind: !0, inside: e.languages.javascript }],
      punctuation: /[.\-!=|]+/,
     };
     for (var t = /(^([\t ]*)):<filter_name>(?:(?:\r?\n|\r(?!\n))(?:\2[\t ].+|\s*?(?=\r?\n|\r)))+/.source, n = [{ filter: "atpl", language: "twig" }, { filter: "coffee", language: "coffeescript" }, "ejs", "handlebars", "less", "livescript", "markdown", { filter: "sass", language: "scss" }, "stylus"], a = {}, i = 0, s = n.length; i < s; i++) {
      var r = n[i];
      (r = "string" == typeof r ? { filter: r, language: r } : r),
       e.languages[r.language] &&
        (a["filter-" + r.filter] = {
         pattern: RegExp(
          t.replace("<filter_name>", function () {
           return r.filter;
          }),
          "m"
         ),
         lookbehind: !0,
         inside: { "filter-name": { pattern: /^:[\w-]+/, alias: "variable" }, text: { pattern: /\S[\s\S]*/, alias: [r.language, "language-" + r.language], inside: e.languages[r.language] } },
        });
     }
     e.languages.insertBefore("pug", "filter", a);
    })(e);
   }
   (e.exports = t), (t.displayName = "pug"), (t.aliases = []);
  },
 },
]);
