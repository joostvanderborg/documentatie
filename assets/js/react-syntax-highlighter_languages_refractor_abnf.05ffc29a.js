"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [9073],
 {
  68313: (n) => {
   function e(n) {
    !(function (n) {
     var e = "(?:ALPHA|BIT|CHAR|CR|CRLF|CTL|DIGIT|DQUOTE|HEXDIG|HTAB|LF|LWSP|OCTET|SP|VCHAR|WSP)";
     n.languages.abnf = { comment: /;.*/, string: { pattern: /(?:%[is])?"[^"\n\r]*"/, greedy: !0, inside: { punctuation: /^%[is]/ } }, range: { pattern: /%(?:b[01]+-[01]+|d\d+-\d+|x[A-F\d]+-[A-F\d]+)/i, alias: "number" }, terminal: { pattern: /%(?:b[01]+(?:\.[01]+)*|d\d+(?:\.\d+)*|x[A-F\d]+(?:\.[A-F\d]+)*)/i, alias: "number" }, repetition: { pattern: /(^|[^\w-])(?:\d*\*\d*|\d+)/, lookbehind: !0, alias: "operator" }, definition: { pattern: /(^[ \t]*)(?:[a-z][\w-]*|<[^<>\r\n]*>)(?=\s*=)/m, lookbehind: !0, alias: "keyword", inside: { punctuation: /<|>/ } }, "core-rule": { pattern: RegExp("(?:(^|[^<\\w-])" + e + "|<" + e + ">)(?![\\w-])", "i"), lookbehind: !0, alias: ["rule", "constant"], inside: { punctuation: /<|>/ } }, rule: { pattern: /(^|[^<\w-])[a-z][\w-]*|<[^<>\r\n]*>/i, lookbehind: !0, inside: { punctuation: /<|>/ } }, operator: /=\/?|\//, punctuation: /[()\[\]]/ };
    })(n);
   }
   (n.exports = e), (e.displayName = "abnf"), (e.aliases = []);
  },
 },
]);
