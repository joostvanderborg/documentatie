"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [768],
 {
  13570: (n) => {
   function e(n) {
    !(function (n) {
     var e = { pattern: /\{[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}\}/i, alias: "constant", inside: { punctuation: /[{}]/ } };
     (n.languages["solution-file"] = { comment: { pattern: /#.*/, greedy: !0 }, string: { pattern: /"[^"\r\n]*"|'[^'\r\n]*'/, greedy: !0, inside: { guid: e } }, object: { pattern: /^([ \t]*)(?:([A-Z]\w*)\b(?=.*(?:\r\n?|\n)(?:\1[ \t].*(?:\r\n?|\n))*\1End\2(?=[ \t]*$))|End[A-Z]\w*(?=[ \t]*$))/m, lookbehind: !0, greedy: !0, alias: "keyword" }, property: { pattern: /^([ \t]*)(?!\s)[^\r\n"#=()]*[^\s"#=()](?=\s*=)/m, lookbehind: !0, inside: { guid: e } }, guid: e, number: /\b\d+(?:\.\d+)*\b/, boolean: /\b(?:FALSE|TRUE)\b/, operator: /=/, punctuation: /[(),]/ }), (n.languages.sln = n.languages["solution-file"]);
    })(n);
   }
   (n.exports = e), (e.displayName = "solutionFile"), (e.aliases = []);
  },
 },
]);
