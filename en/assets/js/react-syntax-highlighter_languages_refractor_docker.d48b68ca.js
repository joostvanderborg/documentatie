"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2051],
 {
  97266: (e) => {
   function r(e) {
    !(function (e) {
     var r = /\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,
      n = /(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g, function () {
       return r;
      }),
      t = /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,
      o = /--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g, function () {
       return t;
      }),
      s = { pattern: RegExp(t), greedy: !0 },
      i = { pattern: /(^[ \t]*)#.*/m, lookbehind: !0, greedy: !0 };
     function a(e, r) {
      return (
       (e = e
        .replace(/<OPT>/g, function () {
         return o;
        })
        .replace(/<SP>/g, function () {
         return n;
        })),
       RegExp(e, r)
      );
     }
     (e.languages.docker = {
      instruction: {
       pattern: /(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,
       lookbehind: !0,
       greedy: !0,
       inside: {
        options: { pattern: a(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source, "i"), lookbehind: !0, greedy: !0, inside: { property: { pattern: /(^|\s)--[\w-]+/, lookbehind: !0 }, string: [s, { pattern: /(=)(?!["'])(?:[^\s\\]|\\.)+/, lookbehind: !0 }], operator: /\\$/m, punctuation: /=/ } },
        keyword: [
         { pattern: a(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source, "i"), lookbehind: !0, greedy: !0 },
         { pattern: a(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source, "i"), lookbehind: !0, greedy: !0 },
         { pattern: a(/(^ONBUILD<SP>)\w+/.source, "i"), lookbehind: !0, greedy: !0 },
         { pattern: /^\w+/, greedy: !0 },
        ],
        comment: i,
        string: s,
        variable: /\$(?:\w+|\{[^{}"'\\]*\})/,
        operator: /\\$/m,
       },
      },
      comment: i,
     }),
      (e.languages.dockerfile = e.languages.docker);
    })(e);
   }
   (e.exports = r), (r.displayName = "docker"), (r.aliases = ["dockerfile"]);
  },
 },
]);
