"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4372],
 {
  75242: (a) => {
   function e(a) {
    (a.languages.wolfram = { comment: /\(\*(?:\(\*(?:[^*]|\*(?!\)))*\*\)|(?!\(\*)[\s\S])*?\*\)/, string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 }, keyword: /\b(?:Abs|AbsArg|Accuracy|Block|Do|For|Function|If|Manipulate|Module|Nest|NestList|None|Return|Switch|Table|Which|While)\b/, context: { pattern: /\b\w+`+\w*/, alias: "class-name" }, blank: { pattern: /\b\w+_\b/, alias: "regex" }, "global-variable": { pattern: /\$\w+/, alias: "variable" }, boolean: /\b(?:False|True)\b/, number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i, operator: /\/\.|;|=\.|\^=|\^:=|:=|<<|>>|<\||\|>|:>|\|->|->|<-|@@@|@@|@|\/@|=!=|===|==|=|\+|-|\^|\[\/-+%=\]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/, punctuation: /[{}[\];(),.:]/ }), (a.languages.mathematica = a.languages.wolfram), (a.languages.wl = a.languages.wolfram), (a.languages.nb = a.languages.wolfram);
   }
   (a.exports = e), (e.displayName = "wolfram"), (e.aliases = ["mathematica", "wl", "nb"]);
  },
 },
]);
