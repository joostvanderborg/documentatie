"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [6963],
 {
  54105: (a) => {
   function e(a) {
    !(function (a) {
     var e = { pattern: /\\[\\(){}[\]^$+*?|.]/, alias: "escape" },
      n = /\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,
      s = "(?:[^\\\\-]|" + n.source + ")",
      t = RegExp(s + "-" + s),
      i = { pattern: /(<|')[^<>']+(?=[>']$)/, lookbehind: !0, alias: "variable" };
     a.languages.regex = {
      "char-class": { pattern: /((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/, lookbehind: !0, inside: { "char-class-negation": { pattern: /(^\[)\^/, lookbehind: !0, alias: "operator" }, "char-class-punctuation": { pattern: /^\[|\]$/, alias: "punctuation" }, range: { pattern: t, inside: { escape: n, "range-punctuation": { pattern: /-/, alias: "operator" } } }, "special-escape": e, "char-set": { pattern: /\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" }, escape: n } },
      "special-escape": e,
      "char-set": { pattern: /\.|\\[wsd]|\\p\{[^{}]+\}/i, alias: "class-name" },
      backreference: [
       { pattern: /\\(?![123][0-7]{2})[1-9]/, alias: "keyword" },
       { pattern: /\\k<[^<>']+>/, alias: "keyword", inside: { "group-name": i } },
      ],
      anchor: { pattern: /[$^]|\\[ABbGZz]/, alias: "function" },
      escape: n,
      group: [
       { pattern: /\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/, alias: "punctuation", inside: { "group-name": i } },
       { pattern: /\)/, alias: "punctuation" },
      ],
      quantifier: { pattern: /(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/, alias: "number" },
      alternation: { pattern: /\|/, alias: "keyword" },
     };
    })(a);
   }
   (a.exports = e), (e.displayName = "regex"), (e.aliases = []);
  },
 },
]);
