"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [7250],
 {
  62260: (s) => {
   function e(s) {
    (s.languages.bbcode = { tag: { pattern: /\[\/?[^\s=\]]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))?(?:\s+[^\s=\]]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+))*\s*\]/, inside: { tag: { pattern: /^\[\/?[^\s=\]]+/, inside: { punctuation: /^\[\/?/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'"\]=]+)/, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\]/, "attr-name": /[^\s=\]]+/ } } }), (s.languages.shortcode = s.languages.bbcode);
   }
   (s.exports = e), (e.displayName = "bbcode"), (e.aliases = ["shortcode"]);
  },
 },
]);
