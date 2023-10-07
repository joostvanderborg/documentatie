"use strict";
exports.id = 5867;
exports.ids = [5867];
exports.modules = {
 /***/ 81549: /***/ (module) => {
  module.exports = gedcom;
  gedcom.displayName = "gedcom";
  gedcom.aliases = [];
  function gedcom(Prism) {
   Prism.languages.gedcom = {
    "line-value": {
     // Preceded by level, optional pointer, and tag
     pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ ).+/m,
     lookbehind: true,
     inside: {
      pointer: {
       pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
       alias: "variable",
      },
     },
    },
    tag: {
     // Preceded by level and optional pointer
     pattern: /(^[\t ]*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
     lookbehind: true,
     alias: "string",
    },
    level: {
     pattern: /(^[\t ]*)\d+/m,
     lookbehind: true,
     alias: "number",
    },
    pointer: {
     pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
     alias: "variable",
    },
   };
  }

  /***/
 },
};
