"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2374],
 {
  40315: (e) => {
   function E(e) {
    e.languages.cypher = { comment: /\/\/.*/, string: { pattern: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/, greedy: !0 }, "class-name": { pattern: /(:\s*)(?:\w+|`(?:[^`\\\r\n])*`)(?=\s*[{):])/, lookbehind: !0, greedy: !0 }, relationship: { pattern: /(-\[\s*(?:\w+\s*|`(?:[^`\\\r\n])*`\s*)?:\s*|\|\s*:\s*)(?:\w+|`(?:[^`\\\r\n])*`)/, lookbehind: !0, greedy: !0, alias: "property" }, identifier: { pattern: /`(?:[^`\\\r\n])*`/, greedy: !0 }, variable: /\$\w+/, keyword: /\b(?:ADD|ALL|AND|AS|ASC|ASCENDING|ASSERT|BY|CALL|CASE|COMMIT|CONSTRAINT|CONTAINS|CREATE|CSV|DELETE|DESC|DESCENDING|DETACH|DISTINCT|DO|DROP|ELSE|END|ENDS|EXISTS|FOR|FOREACH|IN|INDEX|IS|JOIN|KEY|LIMIT|LOAD|MANDATORY|MATCH|MERGE|NODE|NOT|OF|ON|OPTIONAL|OR|ORDER(?=\s+BY)|PERIODIC|REMOVE|REQUIRE|RETURN|SCALAR|SCAN|SET|SKIP|START|STARTS|THEN|UNION|UNIQUE|UNWIND|USING|WHEN|WHERE|WITH|XOR|YIELD)\b/i, function: /\b\w+\b(?=\s*\()/, boolean: /\b(?:false|null|true)\b/i, number: /\b(?:0x[\da-fA-F]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)\b/, operator: /:|<--?|--?>?|<>|=~?|[<>]=?|[+*/%^|]|\.\.\.?/, punctuation: /[()[\]{},;.]/ };
   }
   (e.exports = E), (E.displayName = "cypher"), (E.aliases = []);
  },
 },
]);
