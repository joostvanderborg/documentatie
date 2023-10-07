"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [156, 6524, 3279],
 {
  61958: (e) => {
   function s(e) {
    !(function (e) {
     function s(e, s) {
      return e.replace(/<<(\d+)>>/g, function (e, n) {
       return "(?:" + s[+n] + ")";
      });
     }
     function n(e, n, r) {
      return RegExp(s(e, n), r || "");
     }
     function r(e, s) {
      for (var n = 0; n < s; n++)
       e = e.replace(/<<self>>/g, function () {
        return "(?:" + e + ")";
       });
      return e.replace(/<<self>>/g, "[^\\s\\S]");
     }
     var t = "bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",
      a = "class enum interface record struct",
      i = "add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",
      o = "abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";
     function c(e) {
      return "\\b(?:" + e.trim().replace(/ /g, "|") + ")\\b";
     }
     var u = c(a),
      l = RegExp(c(t + " " + a + " " + i + " " + o)),
      d = c(a + " " + i + " " + o),
      p = c(t + " " + a + " " + o),
      g = r(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2),
      b = r(/\((?:[^()]|<<self>>)*\)/.source, 2),
      h = /@?\b[A-Za-z_]\w*\b/.source,
      f = s(/<<0>>(?:\s*<<1>>)?/.source, [h, g]),
      m = s(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [d, f]),
      k = /\[\s*(?:,\s*)*\]/.source,
      y = s(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [m, k]),
      w = s(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [g, b, k]),
      v = s(/\(<<0>>+(?:,<<0>>+)+\)/.source, [w]),
      x = s(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [v, m, k]),
      _ = { keyword: l, punctuation: /[<>()?,.:[\]]/ },
      $ = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source,
      S = /"(?:\\.|[^\\"\r\n])*"/.source,
      E = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;
     (e.languages.csharp = e.languages.extend("clike", {
      string: [
       { pattern: n(/(^|[^$\\])<<0>>/.source, [E]), lookbehind: !0, greedy: !0 },
       { pattern: n(/(^|[^@$\\])<<0>>/.source, [S]), lookbehind: !0, greedy: !0 },
      ],
      "class-name": [
       { pattern: n(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [m]), lookbehind: !0, inside: _ },
       { pattern: n(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [h, x]), lookbehind: !0, inside: _ },
       { pattern: n(/(\busing\s+)<<0>>(?=\s*=)/.source, [h]), lookbehind: !0 },
       { pattern: n(/(\b<<0>>\s+)<<1>>/.source, [u, f]), lookbehind: !0, inside: _ },
       { pattern: n(/(\bcatch\s*\(\s*)<<0>>/.source, [m]), lookbehind: !0, inside: _ },
       { pattern: n(/(\bwhere\s+)<<0>>/.source, [h]), lookbehind: !0 },
       { pattern: n(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [y]), lookbehind: !0, inside: _ },
       { pattern: n(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [x, p, h]), inside: _ },
      ],
      keyword: l,
      number: /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
      operator: />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
      punctuation: /\?\.?|::|[{}[\];(),.:]/,
     })),
      e.languages.insertBefore("csharp", "number", { range: { pattern: /\.\./, alias: "operator" } }),
      e.languages.insertBefore("csharp", "punctuation", { "named-parameter": { pattern: n(/([(,]\s*)<<0>>(?=\s*:)/.source, [h]), lookbehind: !0, alias: "punctuation" } }),
      e.languages.insertBefore("csharp", "class-name", { namespace: { pattern: n(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [h]), lookbehind: !0, inside: { punctuation: /\./ } }, "type-expression": { pattern: n(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [b]), lookbehind: !0, alias: "class-name", inside: _ }, "return-type": { pattern: n(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [x, m]), inside: _, alias: "class-name" }, "constructor-invocation": { pattern: n(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [x]), lookbehind: !0, inside: _, alias: "class-name" }, "generic-method": { pattern: n(/<<0>>\s*<<1>>(?=\s*\()/.source, [h, g]), inside: { function: n(/^<<0>>/.source, [h]), generic: { pattern: RegExp(g), alias: "class-name", inside: _ } } }, "type-list": { pattern: n(/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source, [u, f, h, x, l.source, b, /\bnew\s*\(\s*\)/.source]), lookbehind: !0, inside: { "record-arguments": { pattern: n(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [f, b]), lookbehind: !0, greedy: !0, inside: e.languages.csharp }, keyword: l, "class-name": { pattern: RegExp(x), greedy: !0, inside: _ }, punctuation: /[,()]/ } }, preprocessor: { pattern: /(^[\t ]*)#.*/m, lookbehind: !0, alias: "property", inside: { directive: { pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/, lookbehind: !0, alias: "keyword" } } } });
     var R = S + "|" + $,
      B = s(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [R]),
      j = r(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [B]), 2),
      z = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source,
      C = s(/<<0>>(?:\s*\(<<1>>*\))?/.source, [m, j]);
     e.languages.insertBefore("csharp", "class-name", { attribute: { pattern: n(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [z, C]), lookbehind: !0, greedy: !0, inside: { target: { pattern: n(/^<<0>>(?=\s*:)/.source, [z]), alias: "keyword" }, "attribute-arguments": { pattern: n(/\(<<0>>*\)/.source, [j]), inside: e.languages.csharp }, "class-name": { pattern: RegExp(m), inside: { punctuation: /\./ } }, punctuation: /[:,]/ } } });
     var N = /:[^}\r\n]+/.source,
      T = r(s(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [B]), 2),
      A = s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [T, N]),
      F = r(s(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [R]), 2),
      O = s(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [F, N]);
     function P(s, r) {
      return { interpolation: { pattern: n(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [s]), lookbehind: !0, inside: { "format-string": { pattern: n(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [r, N]), lookbehind: !0, inside: { punctuation: /^:/ } }, punctuation: /^\{|\}$/, expression: { pattern: /[\s\S]+/, alias: "language-csharp", inside: e.languages.csharp } } }, string: /[\s\S]+/ };
     }
     e.languages.insertBefore("csharp", "string", {
      "interpolation-string": [
       { pattern: n(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [A]), lookbehind: !0, greedy: !0, inside: P(A, T) },
       { pattern: n(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [O]), lookbehind: !0, greedy: !0, inside: P(O, F) },
      ],
      char: { pattern: RegExp($), greedy: !0 },
     }),
      (e.languages.dotnet = e.languages.cs = e.languages.csharp);
    })(e);
   }
   (e.exports = s), (s.displayName = "csharp"), (s.aliases = ["dotnet", "cs"]);
  },
  32268: (e, s, n) => {
   var r = n(2329),
    t = n(61958);
   function a(e) {
    e.register(r), e.register(t), (e.languages.t4 = e.languages["t4-cs"] = e.languages["t4-templating"].createT4("csharp"));
   }
   (e.exports = a), (a.displayName = "t4Cs"), (a.aliases = []);
  },
  2329: (e) => {
   function s(e) {
    !(function (e) {
     function s(e, s, n) {
      return { pattern: RegExp("<#" + e + "[\\s\\S]*?#>"), alias: "block", inside: { delimiter: { pattern: RegExp("^<#" + e + "|#>$"), alias: "important" }, content: { pattern: /[\s\S]+/, inside: s, alias: n } } };
     }
     e.languages["t4-templating"] = Object.defineProperty({}, "createT4", {
      value: function (n) {
       var r = e.languages[n],
        t = "language-" + n;
       return { block: { pattern: /<#[\s\S]+?#>/, inside: { directive: s("@", { "attr-value": { pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/, inside: { punctuation: /^=|^["']|["']$/ } }, keyword: /\b\w+(?=\s)/, "attr-name": /\b\w+/ }), expression: s("=", r, t), "class-feature": s("\\+", r, t), standard: s("", r, t) } } };
      },
     });
    })(e);
   }
   (e.exports = s), (s.displayName = "t4Templating"), (s.aliases = []);
  },
 },
]);
