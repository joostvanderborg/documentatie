"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9389],
 {
  13808: (e) => {
   function s(e) {
    !(function (e) {
     function s(s, a) {
      e.languages[s] && e.languages.insertBefore(s, "comment", { "doc-comment": a });
     }
     var a = e.languages.markup.tag,
      n = { pattern: /\/\/\/.*/, greedy: !0, alias: "comment", inside: { tag: a } },
      t = { pattern: /'''.*/, greedy: !0, alias: "comment", inside: { tag: a } };
     s("csharp", n), s("fsharp", n), s("vbnet", t);
    })(e);
   }
   (e.exports = s), (s.displayName = "xmlDoc"), (s.aliases = []);
  },
 },
]);
