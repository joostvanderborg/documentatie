"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5105],
 {
  38223: (e) => {
   function s(e) {
    (e.languages["dns-zone-file"] = {
     comment: /;.*/,
     string: { pattern: /"(?:\\.|[^"\\\r\n])*"/, greedy: !0 },
     variable: [
      { pattern: /(^\$ORIGIN[ \t]+)\S+/m, lookbehind: !0 },
      { pattern: /(^|\s)@(?=\s|$)/, lookbehind: !0 },
     ],
     keyword: /^\$(?:INCLUDE|ORIGIN|TTL)(?=\s|$)/m,
     class: { pattern: /(^|\s)(?:CH|CS|HS|IN)(?=\s|$)/, lookbehind: !0, alias: "keyword" },
     type: { pattern: /(^|\s)(?:A|A6|AAAA|AFSDB|APL|ATMA|CAA|CDNSKEY|CDS|CERT|CNAME|DHCID|DLV|DNAME|DNSKEY|DS|EID|GID|GPOS|HINFO|HIP|IPSECKEY|ISDN|KEY|KX|LOC|MAILA|MAILB|MB|MD|MF|MG|MINFO|MR|MX|NAPTR|NB|NBSTAT|NIMLOC|NINFO|NS|NSAP|NSAP-PTR|NSEC|NSEC3|NSEC3PARAM|NULL|NXT|OPENPGPKEY|PTR|PX|RKEY|RP|RRSIG|RT|SIG|SINK|SMIMEA|SOA|SPF|SRV|SSHFP|TA|TKEY|TLSA|TSIG|TXT|UID|UINFO|UNSPEC|URI|WKS|X25)(?=\s|$)/, lookbehind: !0, alias: "keyword" },
     punctuation: /[()]/,
    }),
     (e.languages["dns-zone"] = e.languages["dns-zone-file"]);
   }
   (e.exports = s), (s.displayName = "dnsZoneFile"), (s.aliases = []);
  },
 },
]);
