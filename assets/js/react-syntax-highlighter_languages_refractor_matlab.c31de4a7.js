"use strict";
exports.id = 8404;
exports.ids = [8404];
exports.modules = {
 /***/ 27992: /***/ (module) => {
  module.exports = matlab;
  matlab.displayName = "matlab";
  matlab.aliases = [];
  function matlab(Prism) {
   Prism.languages.matlab = {
    comment: [/%\{[\s\S]*?\}%/, /%.+/],
    string: {
     pattern: /\B'(?:''|[^'\r\n])*'/,
     greedy: true,
    },
    // FIXME We could handle imaginary numbers as a whole
    number: /(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+)?(?:[ij])?|\b[ij]\b/,
    keyword: /\b(?:NaN|break|case|catch|continue|else|elseif|end|for|function|if|inf|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
    function: /\b(?!\d)\w+(?=\s*\()/,
    operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
    punctuation: /\.{3}|[.,;\[\](){}!]/,
   };
  }

  /***/
 },
};
