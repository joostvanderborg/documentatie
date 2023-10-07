"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [4879],
 {
  59338: (e) => {
   function t(e) {
    !(function (e) {
     var t = ["on", "ignoring", "group_right", "group_left", "by", "without"],
      n = ["sum", "min", "max", "avg", "group", "stddev", "stdvar", "count", "count_values", "bottomk", "topk", "quantile"].concat(t, ["offset"]);
     e.languages.promql = {
      comment: { pattern: /(^[ \t]*)#.*/m, lookbehind: !0 },
      "vector-match": { pattern: new RegExp("((?:" + t.join("|") + ")\\s*)\\([^)]*\\)"), lookbehind: !0, inside: { "label-key": { pattern: /\b[^,]+\b/, alias: "attr-name" }, punctuation: /[(),]/ } },
      "context-labels": { pattern: /\{[^{}]*\}/, inside: { "label-key": { pattern: /\b[a-z_]\w*(?=\s*(?:=|![=~]))/, alias: "attr-name" }, "label-value": { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0, alias: "attr-value" }, punctuation: /\{|\}|=~?|![=~]|,/ } },
      "context-range": [
       { pattern: /\[[\w\s:]+\]/, inside: { punctuation: /\[|\]|:/, "range-duration": { pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i, alias: "number" } } },
       { pattern: /(\boffset\s+)\w+/, lookbehind: !0, inside: { "range-duration": { pattern: /\b(?:\d+(?:[smhdwy]|ms))+\b/i, alias: "number" } } },
      ],
      keyword: new RegExp("\\b(?:" + n.join("|") + ")\\b", "i"),
      function: /\b[a-z_]\w*(?=\s*\()/i,
      number: /[-+]?(?:(?:\b\d+(?:\.\d+)?|\B\.\d+)(?:e[-+]?\d+)?\b|\b(?:0x[0-9a-f]+|nan|inf)\b)/i,
      operator: /[\^*/%+-]|==|!=|<=|<|>=|>|\b(?:and|or|unless)\b/i,
      punctuation: /[{};()`,.[\]]/,
     };
    })(e);
   }
   (e.exports = t), (t.displayName = "promql"), (t.aliases = []);
  },
 },
]);
