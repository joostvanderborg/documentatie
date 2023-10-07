"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [5411],
 {
  3905: (e, n, t) => {
   t.d(n, { Zo: () => d, kt: () => g });
   var i = t(67294);
   function o(e, n, t) {
    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
   }
   function r(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(e);
     n &&
      (i = i.filter(function (n) {
       return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, i);
    }
    return t;
   }
   function a(e) {
    for (var n = 1; n < arguments.length; n++) {
     var t = null != arguments[n] ? arguments[n] : {};
     n % 2
      ? r(Object(t), !0).forEach(function (n) {
         o(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : r(Object(t)).forEach(function (n) {
         Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
    }
    return e;
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     i,
     o = (function (e, n) {
      if (null == e) return {};
      var t,
       i,
       o = {},
       r = Object.keys(e);
      for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (o[t] = e[t]);
      return o;
     })(e, n);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
    }
    return o;
   }
   var c = i.createContext({}),
    u = function (e) {
     var n = i.useContext(c),
      t = n;
     return e && (t = "function" == typeof e ? e(n) : a(a({}, n), e)), t;
    },
    d = function (e) {
     var n = u(e.components);
     return i.createElement(c.Provider, { value: n }, e.children);
    },
    l = "mdxType",
    f = {
     inlineCode: "code",
     wrapper: function (e) {
      var n = e.children;
      return i.createElement(i.Fragment, {}, n);
     },
    },
    m = i.forwardRef(function (e, n) {
     var t = e.components,
      o = e.mdxType,
      r = e.originalType,
      c = e.parentName,
      d = s(e, ["components", "mdxType", "originalType", "parentName"]),
      l = u(t),
      m = o,
      g = l["".concat(c, ".").concat(m)] || l[m] || f[m] || r;
     return t ? i.createElement(g, a(a({ ref: n }, d), {}, { components: t })) : i.createElement(g, a({ ref: n }, d));
    });
   function g(e, n) {
    var t = arguments,
     o = n && n.mdxType;
    if ("string" == typeof e || o) {
     var r = t.length,
      a = new Array(r);
     a[0] = m;
     var s = {};
     for (var c in n) hasOwnProperty.call(n, c) && (s[c] = n[c]);
     (s.originalType = e), (s[l] = "string" == typeof e ? e : o), (a[1] = s);
     for (var u = 2; u < r; u++) a[u] = t[u];
     return i.createElement.apply(null, a);
    }
    return i.createElement.apply(null, t);
   }
   m.displayName = "MDXCreateElement";
  },
  76649: (e, n, t) => {
   t.d(n, { Z: () => g });
   var i = t(45697),
    o = t.n(i),
    r = t(67294);
   function a() {
    return (
     (a =
      Object.assign ||
      function (e) {
       for (var n = 1; n < arguments.length; n++) {
        var t = arguments[n];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
       }
       return e;
      }),
     a.apply(this, arguments)
    );
   }
   function s(e, n) {
    if (null == e) return {};
    var t,
     i,
     o = {},
     r = Object.keys(e);
    for (i = 0; i < r.length; i++) (t = r[i]), n.indexOf(t) >= 0 || (o[t] = e[t]);
    return o;
   }
   var c,
    u,
    d =
     ((c = function (e) {
      !(function (n) {
       if ("undefined" != typeof window) {
        var t,
         i = 0,
         o = !1,
         r = !1,
         a = 7,
         s = "[iFrameSizer]",
         c = s.length,
         u = null,
         d = window.requestAnimationFrame,
         l = { max: 1, scroll: 1, bodyScroll: 1, documentElementScroll: 1 },
         f = {},
         m = null,
         g = {
          autoResize: !0,
          bodyBackground: null,
          bodyMargin: null,
          bodyMarginV1: 8,
          bodyPadding: null,
          checkOrigin: !0,
          inPageLinks: !1,
          enablePublicMethods: !0,
          heightCalculationMethod: "bodyOffset",
          id: "iFrameResizer",
          interval: 32,
          log: !1,
          maxHeight: 1 / 0,
          maxWidth: 1 / 0,
          minHeight: 0,
          minWidth: 0,
          resizeFrom: "parent",
          scrolling: !1,
          sizeHeight: !0,
          sizeWidth: !1,
          warningTimeout: 5e3,
          tolerance: 0,
          widthCalculationMethod: "scroll",
          onClose: function () {
           return !0;
          },
          onClosed: function () {},
          onInit: function () {},
          onMessage: function () {
           x("onMessage function not defined");
          },
          onMouseEnter: function () {},
          onMouseLeave: function () {},
          onResized: function () {},
          onScroll: function () {
           return !0;
          },
         },
         p = {};
        window.jQuery &&
         ((t = window.jQuery).fn
          ? t.fn.iFrameResize ||
            (t.fn.iFrameResize = function (e) {
             return this.filter("iframe")
              .each(function (n, t) {
               N(t, e);
              })
              .end();
            })
          : M("", "Unable to bind to jQuery, it is not fully loaded.")),
         "function" == typeof n && n.amd ? n([], q) : (e.exports = q()),
         (window.iFrameResize = window.iFrameResize || q());
       }
       function h() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
       }
       function w(e, n, t) {
        e.addEventListener(n, t, !1);
       }
       function b(e, n, t) {
        e.removeEventListener(n, t, !1);
       }
       function y(e) {
        return (
         s +
         "[" +
         (function (e) {
          var n = "Host page: " + e;
          return window.top !== window.self && (n = window.parentIFrame && window.parentIFrame.getId ? window.parentIFrame.getId() + ": " + e : "Nested host page: " + e), n;
         })(e) +
         "]"
        );
       }
       function v(e) {
        return f[e] ? f[e].log : o;
       }
       function O(e, n) {
        z("log", e, n, v(e));
       }
       function M(e, n) {
        z("info", e, n, v(e));
       }
       function x(e, n) {
        z("warn", e, n, !0);
       }
       function z(e, n, t, i) {
        !0 === i && "object" == typeof window.console && console[e](y(n), t);
       }
       function k(e) {
        function n() {
         o("Height"),
          o("Width"),
          W(
           function () {
            P(B), E(D), y("onResized", B);
           },
           B,
           "init"
          );
        }
        function t(e) {
         return "border-box" !== e.boxSizing ? 0 : (e.paddingTop ? parseInt(e.paddingTop, 10) : 0) + (e.paddingBottom ? parseInt(e.paddingBottom, 10) : 0);
        }
        function i(e) {
         return "border-box" !== e.boxSizing ? 0 : (e.borderTopWidth ? parseInt(e.borderTopWidth, 10) : 0) + (e.borderBottomWidth ? parseInt(e.borderBottomWidth, 10) : 0);
        }
        function o(e) {
         var n = Number(f[D]["max" + e]),
          t = Number(f[D]["min" + e]),
          i = e.toLowerCase(),
          o = Number(B[i]);
         O(D, "Checking " + i + " is in range " + t + "-" + n), o < t && ((o = t), O(D, "Set " + i + " to min value")), o > n && ((o = n), O(D, "Set " + i + " to max value")), (B[i] = "" + o);
        }
        function r(e) {
         return A.substr(A.indexOf(":") + a + e);
        }
        function d(e, n) {
         var t, i, o;
         (t = function () {
          var t, i;
          S("Send Page Info", "pageInfo:" + ((t = document.body.getBoundingClientRect()), (i = B.iframe.getBoundingClientRect()), JSON.stringify({ iframeHeight: i.height, iframeWidth: i.width, clientHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0), clientWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0), offsetTop: parseInt(i.top - t.top, 10), offsetLeft: parseInt(i.left - t.left, 10), scrollTop: window.pageYOffset, scrollLeft: window.pageXOffset, documentHeight: document.documentElement.clientHeight, documentWidth: document.documentElement.clientWidth, windowHeight: window.innerHeight, windowWidth: window.innerWidth })), e, n);
         }),
          (i = 32),
          p[(o = n)] ||
           (p[o] = setTimeout(function () {
            (p[o] = null), t();
           }, i));
        }
        function l(e) {
         var n = e.getBoundingClientRect();
         return T(D), { x: Math.floor(Number(n.left) + Number(u.x)), y: Math.floor(Number(n.top) + Number(u.y)) };
        }
        function m(e) {
         var n = e ? l(B.iframe) : { x: 0, y: 0 },
          t = { x: Number(B.width) + n.x, y: Number(B.height) + n.y };
         O(D, "Reposition requested from iFrame (offset x:" + n.x + " y:" + n.y + ")"), window.top !== window.self ? (window.parentIFrame ? window.parentIFrame["scrollTo" + (e ? "Offset" : "")](t.x, t.y) : x(D, "Unable to scroll to requested position, window.parentIFrame not found")) : ((u = t), g(), O(D, "--"));
        }
        function g() {
         !1 !== y("onScroll", u) ? E(D) : C();
        }
        function h(e) {
         y(e, { iframe: B.iframe, screenX: B.width, screenY: B.height, type: B.type });
        }
        function y(e, n) {
         return F(D, e, n);
        }
        var v,
         z,
         k,
         R,
         N,
         L,
         A = e.data,
         B = {},
         D = null;
        "[iFrameResizerChild]Ready" === A
         ? (function () {
            for (var e in f) S("iFrame requested init", H(e), f[e].iframe, e);
           })()
         : s === ("" + A).substr(0, c) && A.substr(c).split(":")[0] in f
         ? ((k = A.substr(c).split(":")),
           (R = k[1] ? parseInt(k[1], 10) : 0),
           (N = f[k[0]] && f[k[0]].iframe),
           (L = getComputedStyle(N)),
           (B = { iframe: N, id: k[0], height: R + t(L) + i(L), width: k[2], type: k[3] }),
           (D = B.id),
           f[D] && (f[D].loaded = !0),
           (z = B.type in { true: 1, false: 1, undefined: 1 }) && O(D, "Ignoring init message from meta parent page"),
           !z &&
            (function (e) {
             var n = !0;
             return f[e] || ((n = !1), x(B.type + " No settings for " + e + ". Message was: " + A)), n;
            })(D) &&
            (O(D, "Received: " + A),
            (v = !0),
            null === B.iframe && (x(D, "IFrame (" + B.id + ") not found"), (v = !1)),
            v &&
             (function () {
              var n,
               t = e.origin,
               i = f[D] && f[D].checkOrigin;
              if (
               i &&
               "" + t != "null" &&
               !(i.constructor === Array
                ? (function () {
                   var e = 0,
                    n = !1;
                   for (O(D, "Checking connection is from allowed list of origins: " + i); e < i.length; e++)
                    if (i[e] === t) {
                     n = !0;
                     break;
                    }
                   return n;
                  })()
                : ((n = f[D] && f[D].remoteHost), O(D, "Checking connection is from: " + n), t === n))
              )
               throw new Error("Unexpected message received from: " + t + " for " + B.iframe.id + ". Message was: " + e.data + ". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");
              return !0;
             })() &&
             (function () {
              switch ((f[D] && f[D].firstRun && f[D] && (f[D].firstRun = !1), B.type)) {
               case "close":
                I(B.iframe);
                break;
               case "message":
                (a = r(6)), O(D, "onMessage passed: {iframe: " + B.iframe.id + ", message: " + a + "}"), y("onMessage", { iframe: B.iframe, message: JSON.parse(a) }), O(D, "--");
                break;
               case "mouseenter":
                h("onMouseEnter");
                break;
               case "mouseleave":
                h("onMouseLeave");
                break;
               case "autoResize":
                f[D].autoResize = JSON.parse(r(9));
                break;
               case "scrollTo":
                m(!1);
                break;
               case "scrollToOffset":
                m(!0);
                break;
               case "pageInfo":
                d(f[D] && f[D].iframe, D),
                 (function () {
                  function e(e, i) {
                   function o() {
                    f[t] ? d(f[t].iframe, t) : n();
                   }
                   ["scroll", "resize"].forEach(function (n) {
                    O(t, e + n + " listener for sendPageInfo"), i(window, n, o);
                   });
                  }
                  function n() {
                   e("Remove ", b);
                  }
                  var t = D;
                  e("Add ", w), f[t] && (f[t].stopPageInfo = n);
                 })();
                break;
               case "pageInfoStop":
                f[D] && f[D].stopPageInfo && (f[D].stopPageInfo(), delete f[D].stopPageInfo);
                break;
               case "inPageLink":
                (t = r(9).split("#")[1] || ""), (i = decodeURIComponent(t)), (o = document.getElementById(i) || document.getElementsByName(i)[0]) ? ((e = l(o)), O(D, "Moving to in page link (#" + t + ") at x: " + e.x + " y: " + e.y), (u = { x: e.x, y: e.y }), g(), O(D, "--")) : window.top !== window.self ? (window.parentIFrame ? window.parentIFrame.moveToAnchor(t) : O(D, "In page link #" + t + " not found and window.parentIFrame not found")) : O(D, "In page link #" + t + " not found");
                break;
               case "reset":
                j(B);
                break;
               case "init":
                n(), y("onInit", B.iframe);
                break;
               default:
                n();
              }
              var e, t, i, o, a;
             })()))
         : M(D, "Ignored: " + A);
       }
       function F(e, n, t) {
        var i = null,
         o = null;
        if (f[e]) {
         if ("function" != typeof (i = f[e][n])) throw new TypeError(n + " on iFrame[" + e + "] is not a function");
         o = i(t);
        }
        return o;
       }
       function R(e) {
        var n = e.id;
        delete f[n];
       }
       function I(e) {
        var n = e.id;
        if (!1 !== F(n, "onClose", n)) {
         O(n, "Removing iFrame: " + n);
         try {
          e.parentNode && e.parentNode.removeChild(e);
         } catch (t) {
          x(t);
         }
         F(n, "onClosed", n), O(n, "--"), R(e);
        } else O(n, "Close iframe cancelled by onClose event");
       }
       function T(e) {
        null === u && O(e, "Get page position: " + (u = { x: window.pageXOffset !== n ? window.pageXOffset : document.documentElement.scrollLeft, y: window.pageYOffset !== n ? window.pageYOffset : document.documentElement.scrollTop }).x + "," + u.y);
       }
       function E(e) {
        null !== u && (window.scrollTo(u.x, u.y), O(e, "Set page position: " + u.x + "," + u.y), C());
       }
       function C() {
        u = null;
       }
       function j(e) {
        O(e.id, "Size reset requested by " + ("init" === e.type ? "host page" : "iFrame")),
         T(e.id),
         W(
          function () {
           P(e), S("reset", "reset", e.iframe, e.id);
          },
          e,
          "reset"
         );
       }
       function P(e) {
        function n(n) {
         r ||
          "0" !== e[n] ||
          ((r = !0),
          O(i, "Hidden iFrame detected, creating visibility listener"),
          (function () {
           function e() {
            function e(e) {
             function n(n) {
              return "0px" === (f[e] && f[e].iframe.style[n]);
             }
             function t(e) {
              return null !== e.offsetParent;
             }
             f[e] && t(f[e].iframe) && (n("height") || n("width")) && S("Visibility change", "resize", f[e].iframe, e);
            }
            Object.keys(f).forEach(function (n) {
             e(n);
            });
           }
           function n(n) {
            O("window", "Mutation observed: " + n[0].target + " " + n[0].type), L(e, 16);
           }
           function t() {
            var e = document.querySelector("body"),
             t = { attributes: !0, attributeOldValue: !1, characterData: !0, characterDataOldValue: !1, childList: !0, subtree: !0 };
            new i(n).observe(e, t);
           }
           var i = h();
           i && t();
          })());
        }
        function t(t) {
         !(function (n) {
          e.id ? ((e.iframe.style[n] = e[n] + "px"), O(e.id, "IFrame (" + i + ") " + n + " set to " + e[n] + "px")) : O("undefined", "messageData id not set");
         })(t),
          n(t);
        }
        var i = e.iframe.id;
        f[i] && (f[i].sizeHeight && t("height"), f[i].sizeWidth && t("width"));
       }
       function W(e, n, t) {
        t !== n.type && d && !window.jasmine ? (O(n.id, "Requesting animation frame"), d(e)) : e();
       }
       function S(e, n, t, i, o) {
        var r,
         a = !1;
        (i = i || t.id),
         f[i] &&
          (t && "contentWindow" in t && null !== t.contentWindow ? ((r = f[i] && f[i].targetOrigin), O(i, "[" + e + "] Sending msg to iframe[" + i + "] (" + n + ") targetOrigin: " + r), t.contentWindow.postMessage(s + n, r)) : x(i, "[" + e + "] IFrame(" + i + ") not found"),
          o &&
           f[i] &&
           f[i].warningTimeout &&
           (f[i].msgTimeout = setTimeout(function () {
            !f[i] || f[i].loaded || a || ((a = !0), x(i, "IFrame has not responded within " + f[i].warningTimeout / 1e3 + " seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."));
           }, f[i].warningTimeout)));
       }
       function H(e) {
        return e + ":" + f[e].bodyMarginV1 + ":" + f[e].sizeWidth + ":" + f[e].log + ":" + f[e].interval + ":" + f[e].enablePublicMethods + ":" + f[e].autoResize + ":" + f[e].bodyMargin + ":" + f[e].heightCalculationMethod + ":" + f[e].bodyBackground + ":" + f[e].bodyPadding + ":" + f[e].tolerance + ":" + f[e].inPageLinks + ":" + f[e].resizeFrom + ":" + f[e].widthCalculationMethod;
       }
       function N(e, t) {
        function r(e) {
         var n = e.split("Callback");
         if (2 === n.length) {
          var t = "on" + n[0].charAt(0).toUpperCase() + n[0].slice(1);
          (this[t] = this[e]), delete this[e], x(c, "Deprecated: '" + e + "' has been renamed '" + t + "'. The old method will be removed in the next major version.");
         }
        }
        var a,
         s,
         c = (function (n) {
          var r;
          return "" === n && ((e.id = ((r = (t && t.id) || g.id + i++), null !== document.getElementById(r) && (r += i++), (n = r))), (o = (t || {}).log), O(n, "Added missing iframe ID: " + n + " (" + e.src + ")")), n;
         })(e.id);
        c in f && "iFrameResizer" in e
         ? x(c, "Ignored iFrame, already setup.")
         : ((function (n) {
            var t;
            (n = n || {}),
             (f[c] = { firstRun: !0, iframe: e, remoteHost: e.src && e.src.split("/").slice(0, 3).join("/") }),
             (function (e) {
              if ("object" != typeof e) throw new TypeError("Options is not an object");
             })(n),
             Object.keys(n).forEach(r, n),
             (function (e) {
              for (var n in g) Object.prototype.hasOwnProperty.call(g, n) && (f[c][n] = Object.prototype.hasOwnProperty.call(e, n) ? e[n] : g[n]);
             })(n),
             f[c] && (f[c].targetOrigin = !0 === f[c].checkOrigin ? ("" === (t = f[c].remoteHost) || null !== t.match(/^(about:blank|javascript:|file:\/\/)/) ? "*" : t) : "*");
           })(t),
           (function () {
            switch ((O(c, "IFrame scrolling " + (f[c] && f[c].scrolling ? "enabled" : "disabled") + " for " + c), (e.style.overflow = !1 === (f[c] && f[c].scrolling) ? "hidden" : "auto"), f[c] && f[c].scrolling)) {
             case "omit":
              break;
             case !0:
              e.scrolling = "yes";
              break;
             case !1:
              e.scrolling = "no";
              break;
             default:
              e.scrolling = f[c] ? f[c].scrolling : "no";
            }
           })(),
           (function () {
            function n(n) {
             1 / 0 !== f[c][n] && 0 !== f[c][n] && ((e.style[n] = f[c][n] + "px"), O(c, "Set " + n + " = " + f[c][n] + "px"));
            }
            function t(e) {
             if (f[c]["min" + e] > f[c]["max" + e]) throw new Error("Value for min" + e + " can not be greater than max" + e);
            }
            t("Height"), t("Width"), n("maxHeight"), n("minHeight"), n("maxWidth"), n("minWidth");
           })(),
           ("number" != typeof (f[c] && f[c].bodyMargin) && "0" !== (f[c] && f[c].bodyMargin)) || ((f[c].bodyMarginV1 = f[c].bodyMargin), (f[c].bodyMargin = f[c].bodyMargin + "px")),
           (a = H(c)),
           (s = h()) &&
            (function (n) {
             e.parentNode &&
              new n(function (n) {
               n.forEach(function (n) {
                Array.prototype.slice.call(n.removedNodes).forEach(function (n) {
                 n === e && I(e);
                });
               });
              }).observe(e.parentNode, { childList: !0 });
            })(s),
           w(e, "load", function () {
            var t, i;
            S("iFrame.onload", a, e, n, !0), (t = f[c] && f[c].firstRun), (i = f[c] && f[c].heightCalculationMethod in l), !t && i && j({ iframe: e, height: 0, width: 0, type: "init" });
           }),
           S("init", a, e, n, !0),
           f[c] &&
            (f[c].iframe.iFrameResizer = {
             close: I.bind(null, f[c].iframe),
             removeListeners: R.bind(null, f[c].iframe),
             resize: S.bind(null, "Window resize", "resize", f[c].iframe),
             moveToAnchor: function (e) {
              S("Move to anchor", "moveToAnchor:" + e, f[c].iframe, c);
             },
             sendMessage: function (e) {
              S("Send Message", "message:" + (e = JSON.stringify(e)), f[c].iframe, c);
             },
            }));
       }
       function L(e, n) {
        null === m &&
         (m = setTimeout(function () {
          (m = null), e();
         }, n));
       }
       function A() {
        "hidden" !== document.visibilityState &&
         (O("document", "Trigger event: Visiblity change"),
         L(function () {
          B("Tab Visable", "resize");
         }, 16));
       }
       function B(e, n) {
        Object.keys(f).forEach(function (t) {
         (function (e) {
          return f[e] && "parent" === f[e].resizeFrom && f[e].autoResize && !f[e].firstRun;
         })(t) && S(e, n, f[t].iframe, t);
        });
       }
       function D() {
        w(window, "message", k),
         w(window, "resize", function () {
          var e;
          O("window", "Trigger event: " + (e = "resize")),
           L(function () {
            B("Window " + e, "resize");
           }, 16);
         }),
         w(document, "visibilitychange", A),
         w(document, "-webkit-visibilitychange", A);
       }
       function q() {
        function e(e, n) {
         n &&
          ((function () {
           if (!n.tagName) throw new TypeError("Object is not a valid DOM element");
           if ("IFRAME" !== n.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + n.tagName + ">");
          })(),
          N(n, e),
          t.push(n));
        }
        var t;
        return (
         (function () {
          var e,
           n = ["moz", "webkit", "o", "ms"];
          for (e = 0; e < n.length && !d; e += 1) d = window[n[e] + "RequestAnimationFrame"];
          d ? (d = d.bind(window)) : O("setup", "RequestAnimationFrame not supported");
         })(),
         D(),
         function (i, o) {
          switch (
           ((t = []),
           (function (e) {
            e && e.enablePublicMethods && x("enablePublicMethods option has been removed, public methods are now always available in the iFrame");
           })(i),
           typeof o)
          ) {
           case "undefined":
           case "string":
            Array.prototype.forEach.call(document.querySelectorAll(o || "iframe"), e.bind(n, i));
            break;
           case "object":
            e(i, o);
            break;
           default:
            throw new TypeError("Unexpected data type (" + typeof o + ")");
          }
          return t;
         }
        );
       }
      })();
     }),
     c((u = { exports: {} }), u.exports),
     u.exports),
    l = function () {},
    f = l,
    m = function (e) {
     var n = e.title,
      t = e.forwardRef,
      i = s(e, ["title", "forwardRef"]),
      o = (function (e) {
       return e.autoResize, e.bodyBackground, e.bodyMargin, e.bodyPadding, e.checkOrigin, e.inPageLinks, e.heightCalculationMethod, e.interval, e.log, e.maxHeight, e.maxWidth, e.minHeight, e.minWidth, e.resizeFrom, e.scrolling, e.sizeHeight, e.sizeWidth, e.warningTimeout, e.tolerance, e.widthCalculationMethod, e.onClosed, e.onInit, e.onMessage, e.onMouseEnter, e.onMouseLeave, e.onResized, s(e, ["autoResize", "bodyBackground", "bodyMargin", "bodyPadding", "checkOrigin", "inPageLinks", "heightCalculationMethod", "interval", "log", "maxHeight", "maxWidth", "minHeight", "minWidth", "resizeFrom", "scrolling", "sizeHeight", "sizeWidth", "warningTimeout", "tolerance", "widthCalculationMethod", "onClosed", "onInit", "onMessage", "onMouseEnter", "onMouseLeave", "onResized"]);
      })(i),
      c = (0, r.useRef)(null),
      u = function () {
       return f(!c.current, "[iframeSizerReact][" + (c && c.current && c.current.id) + "] Close event ignored, to remove the iframe update your React component"), !c.current;
      };
     return (
      (0, r.useEffect)(function () {
       var e = c.current;
       return (
        d(a({}, i, { onClose: u }), e),
        function () {
         return e.iFrameResizer && e.iFrameResizer.removeListeners();
        }
       );
      }, []),
      (0, r.useImperativeHandle)(t, function () {
       return {
        resize: function () {
         return c.current.iFrameResizer.resize();
        },
        moveToAnchor: function (e) {
         return c.current.iFrameResizer.moveToAnchor(e);
        },
        sendMessage: function (e, n) {
         c.current.iFrameResizer.sendMessage(e, n);
        },
       };
      }),
      r.createElement("iframe", a({ title: n }, o, { ref: c }))
     );
    };
   (m.defaultProps = { title: "iframe" }), (m.propTypes = { title: o().string });
   const g = m;
  },
 },
]);
