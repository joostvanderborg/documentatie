"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [3694],
 {
  90741: (e) => {
   function t(e) {
    e.languages.bro = { comment: { pattern: /(^|[^\\$])#.*/, lookbehind: !0, inside: { italic: /\b(?:FIXME|TODO|XXX)\b/ } }, string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, boolean: /\b[TF]\b/, function: { pattern: /(\b(?:event|function|hook)[ \t]+)\w+(?:::\w+)?/, lookbehind: !0 }, builtin: /(?:@(?:load(?:-(?:plugin|sigs))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:add_func|create_expire|default|delete_func|encrypt|error_handler|expire_func|group|log|mergeable|optional|persistent|priority|raw_output|read_expire|redef|rotate_interval|rotate_size|synchronized|type_column|write_expire))/, constant: { pattern: /(\bconst[ \t]+)\w+/i, lookbehind: !0 }, keyword: /\b(?:add|addr|alarm|any|bool|break|const|continue|count|delete|double|else|enum|event|export|file|for|function|global|hook|if|in|int|interval|local|module|next|of|opaque|pattern|port|print|record|return|schedule|set|string|subnet|table|time|timeout|using|vector|when)\b/, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/, number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i, punctuation: /[{}[\];(),.:]/ };
   }
   (e.exports = t), (t.displayName = "bro"), (t.aliases = []);
  },
 },
]);
