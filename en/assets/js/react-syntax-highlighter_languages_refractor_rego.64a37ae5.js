"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [869],
 {
  93503: (e) => {
   function s(e) {
    e.languages.rego = { comment: /#.*/, property: { pattern: /(^|[^\\.])(?:"(?:\\.|[^\\"\r\n])*"|`[^`]*`|\b[a-z_]\w*\b)(?=\s*:(?!=))/i, lookbehind: !0, greedy: !0 }, string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"|`[^`]*`/, lookbehind: !0, greedy: !0 }, keyword: /\b(?:as|default|else|import|not|null|package|set(?=\s*\()|some|with)\b/, boolean: /\b(?:false|true)\b/, function: { pattern: /\b[a-z_]\w*\b(?:\s*\.\s*\b[a-z_]\w*\b)*(?=\s*\()/i, inside: { namespace: /\b\w+\b(?=\s*\.)/, punctuation: /\./ } }, number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i, operator: /[-+*/%|&]|[<>:=]=?|!=|\b_\b/, punctuation: /[,;.\[\]{}()]/ };
   }
   (e.exports = s), (s.displayName = "rego"), (s.aliases = []);
  },
 },
]);
