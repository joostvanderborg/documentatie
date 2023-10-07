"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2496],
 {
  2717: (a) => {
   function e(a) {
    (a.languages.markup = { comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 }, prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 }, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i, greedy: !0, inside: { "internal-subset": { pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/, lookbehind: !0, greedy: !0, inside: null }, string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 }, punctuation: /^<!|>$|[[\]]/, "doctype-tag": /^DOCTYPE/i, name: /[^\s<>'"]+/ } }, cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 }, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "special-attr": [], "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/, inside: { punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: [{ pattern: /&[\da-z]{1,8};/i, alias: "named-entity" }, /&#x?[\da-f]{1,8};/i] }),
     (a.languages.markup.tag.inside["attr-value"].inside.entity = a.languages.markup.entity),
     (a.languages.markup.doctype.inside["internal-subset"].inside = a.languages.markup),
     a.hooks.add("wrap", function (a) {
      "entity" === a.type && (a.attributes.title = a.content.value.replace(/&amp;/, "&"));
     }),
     Object.defineProperty(a.languages.markup.tag, "addInlined", {
      value: function (e, t) {
       var s = {};
       (s["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: a.languages[t] }), (s.cdata = /^<!\[CDATA\[|\]\]>$/i);
       var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } };
       n["language-" + t] = { pattern: /[\s\S]+/, inside: a.languages[t] };
       var i = {};
       (i[e] = {
        pattern: RegExp(
         /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
          return e;
         }),
         "i"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: n,
       }),
        a.languages.insertBefore("markup", "cdata", i);
      },
     }),
     Object.defineProperty(a.languages.markup.tag, "addAttribute", {
      value: function (e, t) {
       a.languages.markup.tag.inside["special-attr"].push({ pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"), lookbehind: !0, inside: { "attr-name": /^[^\s=]+/, "attr-value": { pattern: /=[\s\S]+/, inside: { value: { pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/, lookbehind: !0, alias: [t, "language-" + t], inside: a.languages[t] }, punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/] } } } });
      },
     }),
     (a.languages.html = a.languages.markup),
     (a.languages.mathml = a.languages.markup),
     (a.languages.svg = a.languages.markup),
     (a.languages.xml = a.languages.extend("markup", {})),
     (a.languages.ssml = a.languages.xml),
     (a.languages.atom = a.languages.xml),
     (a.languages.rss = a.languages.xml);
   }
   (a.exports = e), (e.displayName = "markup"), (e.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"]);
  },
 },
]);
