"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2004],
 {
  22004: (e, t, n) => {
   t.Z = void 0;
   var r,
    o = (r = n(86497)) && r.__esModule ? r : { default: r },
    a = n(70390);
   var i = o.default[o.default.length - 1],
    u = (0, a.createReactPlayer)(o.default, i);
   t.Z = u;
  },
  36807: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function c(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function s(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
       r = !0,
       o = !1,
       a = void 0;
      try {
       for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
      } catch (l) {
       (o = !0), (a = l);
      } finally {
       try {
        r || null == u.return || u.return();
       } finally {
        if (o) throw a;
       }
      }
      return n;
     })(e, t) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return f(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t);
     })(e, t) ||
     (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function f(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
   }
   function p(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function y(e, t) {
    return (
     (y =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     y(e, t)
    );
   }
   function d(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = b(e);
     if (t) {
      var a = b(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return h(e);
     })(this, n);
    };
   }
   function h(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function b(e) {
    return (
     (b = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     b(e)
    );
   }
   function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var m = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && y(e, t);
    })(l, e);
    var t,
     n,
     r,
     u = d(l);
    function l() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, l);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      v(h((e = u.call.apply(u, [this].concat(n)))), "callPlayer", a.callPlayer),
      v(h(e), "onDurationChange", function () {
       var t = e.getDuration();
       e.props.onDuration(t);
      }),
      v(h(e), "mute", function () {
       e.callPlayer("setMuted", !0);
      }),
      v(h(e), "unmute", function () {
       e.callPlayer("setMuted", !1);
      }),
      v(h(e), "ref", function (t) {
       e.container = t;
      }),
      e
     );
    }
    return (
     (t = l),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e) {
        var t = this,
         n = this.props,
         r = n.controls,
         o = n.config,
         u = n.onError,
         l = n.playing,
         f = s(e.match(i.MATCH_URL_DAILYMOTION), 2)[1];
        this.player
         ? this.player.load(f, { start: (0, a.parseStartTime)(e), autoplay: l })
         : (0, a.getSDK)("https://api.dmcdn.net/all.js", "DM", "dmAsyncInit", function (e) {
            return e.player;
           }).then(function (n) {
            if (t.container) {
             var i = n.player;
             t.player = new i(t.container, {
              width: "100%",
              height: "100%",
              video: f,
              params: c({ controls: r, autoplay: t.props.playing, mute: t.props.muted, start: (0, a.parseStartTime)(e), origin: window.location.origin }, o.params),
              events: {
               apiready: t.props.onReady,
               seeked: function () {
                return t.props.onSeek(t.player.currentTime);
               },
               video_end: t.props.onEnded,
               durationchange: t.onDurationChange,
               pause: t.props.onPause,
               playing: t.props.onPlay,
               waiting: t.props.onBuffer,
               error: function (e) {
                return u(e);
               },
              },
             });
            }
           }, u);
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      { key: "stop", value: function () {} },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("seek", e);
       },
      },
      {
       key: "setVolume",
       value: function (e) {
        this.callPlayer("setVolume", e);
       },
      },
      {
       key: "getDuration",
       value: function () {
        return this.player.duration || null;
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.player.currentTime;
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return this.player.bufferedTime;
       },
      },
      {
       key: "render",
       value: function () {
        var e = { width: "100%", height: "100%", display: this.props.display };
        return o.default.createElement("div", { style: e }, o.default.createElement("div", { ref: this.ref }));
       },
      },
     ]) && p(t.prototype, n),
     r && p(t, r),
     l
    );
   })(o.Component);
   (t.default = m), v(m, "displayName", "DailyMotion"), v(m, "canPlay", i.canPlay.dailymotion), v(m, "loopOnEnded", !0);
  },
  31972: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l() {
    return (
     (l =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
       }
       return e;
      }),
     l.apply(this, arguments)
    );
   }
   function c(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function s(e, t) {
    return (
     (s =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     s(e, t)
    );
   }
   function f(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = y(e);
     if (t) {
      var a = y(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return p(e);
     })(this, n);
    };
   }
   function p(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function y(e) {
    return (
     (y = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     y(e)
    );
   }
   function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var h = "https://connect.facebook.net/en_US/sdk.js",
    b = "fbAsyncInit",
    v = (function (e) {
     !(function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
     })(u, e);
     var t,
      n,
      r,
      i = f(u);
     function u() {
      var e;
      !(function (e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, u);
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return (
       d(p((e = i.call.apply(i, [this].concat(n)))), "callPlayer", a.callPlayer),
       d(p(e), "playerID", e.props.config.playerId || "".concat("facebook-player-").concat((0, a.randomString)())),
       d(p(e), "mute", function () {
        e.callPlayer("mute");
       }),
       d(p(e), "unmute", function () {
        e.callPlayer("unmute");
       }),
       e
      );
     }
     return (
      (t = u),
      (n = [
       {
        key: "componentDidMount",
        value: function () {
         this.props.onMount && this.props.onMount(this);
        },
       },
       {
        key: "load",
        value: function (e, t) {
         var n = this;
         t
          ? (0, a.getSDK)(h, "FB", b).then(function (e) {
             return e.XFBML.parse();
            })
          : (0, a.getSDK)(h, "FB", b).then(function (e) {
             e.init({ appId: n.props.config.appId, xfbml: !0, version: n.props.config.version }),
              e.Event.subscribe("xfbml.render", function (e) {
               n.props.onLoaded();
              }),
              e.Event.subscribe("xfbml.ready", function (e) {
               "video" === e.type && e.id === n.playerID && ((n.player = e.instance), n.player.subscribe("startedPlaying", n.props.onPlay), n.player.subscribe("paused", n.props.onPause), n.player.subscribe("finishedPlaying", n.props.onEnded), n.player.subscribe("startedBuffering", n.props.onBuffer), n.player.subscribe("finishedBuffering", n.props.onBufferEnd), n.player.subscribe("error", n.props.onError), n.props.muted ? n.callPlayer("mute") : n.callPlayer("unmute"), n.props.onReady(), (document.getElementById(n.playerID).querySelector("iframe").style.visibility = "visible"));
              });
            });
        },
       },
       {
        key: "play",
        value: function () {
         this.callPlayer("play");
        },
       },
       {
        key: "pause",
        value: function () {
         this.callPlayer("pause");
        },
       },
       { key: "stop", value: function () {} },
       {
        key: "seekTo",
        value: function (e) {
         this.callPlayer("seek", e);
        },
       },
       {
        key: "setVolume",
        value: function (e) {
         this.callPlayer("setVolume", e);
        },
       },
       {
        key: "getDuration",
        value: function () {
         return this.callPlayer("getDuration");
        },
       },
       {
        key: "getCurrentTime",
        value: function () {
         return this.callPlayer("getCurrentPosition");
        },
       },
       {
        key: "getSecondsLoaded",
        value: function () {
         return null;
        },
       },
       {
        key: "render",
        value: function () {
         var e = this.props.config.attributes;
         return o.default.createElement("div", l({ style: { width: "100%", height: "100%" }, id: this.playerID, className: "fb-video", "data-href": this.props.url, "data-autoplay": this.props.playing ? "true" : "false", "data-allowfullscreen": "true", "data-controls": this.props.controls ? "true" : "false" }, e));
        },
       },
      ]) && c(t.prototype, n),
      r && c(t, r),
      u
     );
    })(o.Component);
   (t.default = v), d(v, "displayName", "Facebook"), d(v, "canPlay", i.canPlay.facebook), d(v, "loopOnEnded", !0);
  },
  14926: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l() {
    return (
     (l =
      Object.assign ||
      function (e) {
       for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
       }
       return e;
      }),
     l.apply(this, arguments)
    );
   }
   function c(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function s(e, t) {
    return (
     (s =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     s(e, t)
    );
   }
   function f(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = y(e);
     if (t) {
      var a = y(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return p(e);
     })(this, n);
    };
   }
   function p(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function y(e) {
    return (
     (y = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     y(e)
    );
   }
   function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var h = "undefined" != typeof navigator,
    b = h && "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
    v = h && (/iPad|iPhone|iPod/.test(navigator.userAgent) || b) && !window.MSStream,
    m = h && /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && !window.MSStream,
    P = /www\.dropbox\.com\/.+/,
    g = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/,
    O = (function (e) {
     !(function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
     })(y, e);
     var t,
      n,
      r,
      u = f(y);
     function y() {
      var e;
      !(function (e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, y);
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return (
       d(p((e = u.call.apply(u, [this].concat(n)))), "onReady", function () {
        var t;
        return (t = e.props).onReady.apply(t, arguments);
       }),
       d(p(e), "onPlay", function () {
        var t;
        return (t = e.props).onPlay.apply(t, arguments);
       }),
       d(p(e), "onBuffer", function () {
        var t;
        return (t = e.props).onBuffer.apply(t, arguments);
       }),
       d(p(e), "onBufferEnd", function () {
        var t;
        return (t = e.props).onBufferEnd.apply(t, arguments);
       }),
       d(p(e), "onPause", function () {
        var t;
        return (t = e.props).onPause.apply(t, arguments);
       }),
       d(p(e), "onEnded", function () {
        var t;
        return (t = e.props).onEnded.apply(t, arguments);
       }),
       d(p(e), "onError", function () {
        var t;
        return (t = e.props).onError.apply(t, arguments);
       }),
       d(p(e), "onPlayBackRateChange", function (t) {
        return e.props.onPlaybackRateChange(t.target.playbackRate);
       }),
       d(p(e), "onEnablePIP", function () {
        var t;
        return (t = e.props).onEnablePIP.apply(t, arguments);
       }),
       d(p(e), "onDisablePIP", function (t) {
        var n = e.props,
         r = n.onDisablePIP,
         o = n.playing;
        r(t), o && e.play();
       }),
       d(p(e), "onPresentationModeChange", function (t) {
        if (e.player && (0, a.supportsWebKitPresentationMode)(e.player)) {
         var n = e.player.webkitPresentationMode;
         "picture-in-picture" === n ? e.onEnablePIP(t) : "inline" === n && e.onDisablePIP(t);
        }
       }),
       d(p(e), "onSeek", function (t) {
        e.props.onSeek(t.target.currentTime);
       }),
       d(p(e), "mute", function () {
        e.player.muted = !0;
       }),
       d(p(e), "unmute", function () {
        e.player.muted = !1;
       }),
       d(p(e), "renderSourceElement", function (e, t) {
        return "string" == typeof e ? o.default.createElement("source", { key: t, src: e }) : o.default.createElement("source", l({ key: t }, e));
       }),
       d(p(e), "renderTrack", function (e, t) {
        return o.default.createElement("track", l({ key: t }, e));
       }),
       d(p(e), "ref", function (t) {
        e.player && (e.prevPlayer = e.player), (e.player = t);
       }),
       e
      );
     }
     return (
      (t = y),
      (n = [
       {
        key: "componentDidMount",
        value: function () {
         this.props.onMount && this.props.onMount(this), this.addListeners(this.player), (this.player.src = this.getSource(this.props.url)), v && this.player.load();
        },
       },
       {
        key: "componentDidUpdate",
        value: function (e) {
         this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) && (this.removeListeners(this.prevPlayer, e.url), this.addListeners(this.player)), this.props.url === e.url || (0, a.isMediaStream)(this.props.url) || (this.player.srcObject = null);
        },
       },
       {
        key: "componentWillUnmount",
        value: function () {
         (this.player.src = ""), this.removeListeners(this.player), this.hls && this.hls.destroy();
        },
       },
       {
        key: "addListeners",
        value: function (e) {
         var t = this.props,
          n = t.url,
          r = t.playsinline;
         e.addEventListener("play", this.onPlay), e.addEventListener("waiting", this.onBuffer), e.addEventListener("playing", this.onBufferEnd), e.addEventListener("pause", this.onPause), e.addEventListener("seeked", this.onSeek), e.addEventListener("ended", this.onEnded), e.addEventListener("error", this.onError), e.addEventListener("ratechange", this.onPlayBackRateChange), e.addEventListener("enterpictureinpicture", this.onEnablePIP), e.addEventListener("leavepictureinpicture", this.onDisablePIP), e.addEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(n) || e.addEventListener("canplay", this.onReady), r && (e.setAttribute("playsinline", ""), e.setAttribute("webkit-playsinline", ""), e.setAttribute("x5-playsinline", ""));
        },
       },
       {
        key: "removeListeners",
        value: function (e, t) {
         e.removeEventListener("canplay", this.onReady), e.removeEventListener("play", this.onPlay), e.removeEventListener("waiting", this.onBuffer), e.removeEventListener("playing", this.onBufferEnd), e.removeEventListener("pause", this.onPause), e.removeEventListener("seeked", this.onSeek), e.removeEventListener("ended", this.onEnded), e.removeEventListener("error", this.onError), e.removeEventListener("ratechange", this.onPlayBackRateChange), e.removeEventListener("enterpictureinpicture", this.onEnablePIP), e.removeEventListener("leavepictureinpicture", this.onDisablePIP), e.removeEventListener("webkitpresentationmodechanged", this.onPresentationModeChange), this.shouldUseHLS(t) || e.removeEventListener("canplay", this.onReady);
        },
       },
       {
        key: "shouldUseAudio",
        value: function (e) {
         return !e.config.forceVideo && !e.config.attributes.poster && (i.AUDIO_EXTENSIONS.test(e.url) || e.config.forceAudio);
        },
       },
       {
        key: "shouldUseHLS",
        value: function (e) {
         return !!this.props.config.forceHLS || !(!m || !this.props.config.forceSafariHLS) || (!v && (i.HLS_EXTENSIONS.test(e) || g.test(e)));
        },
       },
       {
        key: "shouldUseDASH",
        value: function (e) {
         return i.DASH_EXTENSIONS.test(e) || this.props.config.forceDASH;
        },
       },
       {
        key: "shouldUseFLV",
        value: function (e) {
         return i.FLV_EXTENSIONS.test(e) || this.props.config.forceFLV;
        },
       },
       {
        key: "load",
        value: function (e) {
         var t = this,
          n = this.props.config,
          r = n.hlsVersion,
          o = n.hlsOptions,
          i = n.dashVersion,
          u = n.flvVersion;
         if (
          (this.hls && this.hls.destroy(),
          this.dash && this.dash.reset(),
          this.shouldUseHLS(e) &&
           (0, a.getSDK)("https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js".replace("VERSION", r), "Hls").then(function (n) {
            if (
             ((t.hls = new n(o)),
             t.hls.on(n.Events.MANIFEST_PARSED, function () {
              t.props.onReady();
             }),
             t.hls.on(n.Events.ERROR, function (e, r) {
              t.props.onError(e, r, t.hls, n);
             }),
             g.test(e))
            ) {
             var r = e.match(g)[1];
             t.hls.loadSource("https://videodelivery.net/{id}/manifest/video.m3u8".replace("{id}", r));
            } else t.hls.loadSource(e);
            t.hls.attachMedia(t.player), t.props.onLoaded();
           }),
          this.shouldUseDASH(e) &&
           (0, a.getSDK)("https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js".replace("VERSION", i), "dashjs").then(function (n) {
            (t.dash = n.MediaPlayer().create()), t.dash.initialize(t.player, e, t.props.playing), t.dash.on("error", t.props.onError), parseInt(i) < 3 ? t.dash.getDebug().setLogToBrowserConsole(!1) : t.dash.updateSettings({ debug: { logLevel: n.Debug.LOG_LEVEL_NONE } }), t.props.onLoaded();
           }),
          this.shouldUseFLV(e) &&
           (0, a.getSDK)("https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js".replace("VERSION", u), "flvjs").then(function (n) {
            (t.flv = n.createPlayer({ type: "flv", url: e })),
             t.flv.attachMediaElement(t.player),
             t.flv.on(n.Events.ERROR, function (e, r) {
              t.props.onError(e, r, t.flv, n);
             }),
             t.flv.load(),
             t.props.onLoaded();
           }),
          e instanceof Array)
         )
          this.player.load();
         else if ((0, a.isMediaStream)(e))
          try {
           this.player.srcObject = e;
          } catch (l) {
           this.player.src = window.URL.createObjectURL(e);
          }
        },
       },
       {
        key: "play",
        value: function () {
         var e = this.player.play();
         e && e.catch(this.props.onError);
        },
       },
       {
        key: "pause",
        value: function () {
         this.player.pause();
        },
       },
       {
        key: "stop",
        value: function () {
         this.player.removeAttribute("src"), this.dash && this.dash.reset();
        },
       },
       {
        key: "seekTo",
        value: function (e) {
         this.player.currentTime = e;
        },
       },
       {
        key: "setVolume",
        value: function (e) {
         this.player.volume = e;
        },
       },
       {
        key: "enablePIP",
        value: function () {
         this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player ? this.player.requestPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && "picture-in-picture" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("picture-in-picture");
        },
       },
       {
        key: "disablePIP",
        value: function () {
         document.exitPictureInPicture && document.pictureInPictureElement === this.player ? document.exitPictureInPicture() : (0, a.supportsWebKitPresentationMode)(this.player) && "inline" !== this.player.webkitPresentationMode && this.player.webkitSetPresentationMode("inline");
        },
       },
       {
        key: "setPlaybackRate",
        value: function (e) {
         try {
          this.player.playbackRate = e;
         } catch (t) {
          this.props.onError(t);
         }
        },
       },
       {
        key: "getDuration",
        value: function () {
         if (!this.player) return null;
         var e = this.player,
          t = e.duration,
          n = e.seekable;
         return t === 1 / 0 && n.length > 0 ? n.end(n.length - 1) : t;
        },
       },
       {
        key: "getCurrentTime",
        value: function () {
         return this.player ? this.player.currentTime : null;
        },
       },
       {
        key: "getSecondsLoaded",
        value: function () {
         if (!this.player) return null;
         var e = this.player.buffered;
         if (0 === e.length) return 0;
         var t = e.end(e.length - 1),
          n = this.getDuration();
         return t > n ? n : t;
        },
       },
       {
        key: "getSource",
        value: function (e) {
         var t = this.shouldUseHLS(e),
          n = this.shouldUseDASH(e),
          r = this.shouldUseFLV(e);
         if (!(e instanceof Array || (0, a.isMediaStream)(e) || t || n || r)) return P.test(e) ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com") : e;
        },
       },
       {
        key: "render",
        value: function () {
         var e = this.props,
          t = e.url,
          n = e.playing,
          r = e.loop,
          a = e.controls,
          i = e.muted,
          u = e.config,
          c = e.width,
          s = e.height,
          f = this.shouldUseAudio(this.props) ? "audio" : "video",
          p = { width: "auto" === c ? c : "100%", height: "auto" === s ? s : "100%" };
         return o.default.createElement(f, l({ ref: this.ref, src: this.getSource(t), style: p, preload: "auto", autoPlay: n || void 0, controls: a, muted: i, loop: r }, u.attributes), t instanceof Array && t.map(this.renderSourceElement), u.tracks.map(this.renderTrack));
        },
       },
      ]) && c(t.prototype, n),
      r && c(t, r),
      y
     );
    })(o.Component);
   (t.default = O), d(O, "displayName", "FilePlayer"), d(O, "canPlay", i.canPlay.file);
  },
  73911: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function c(e, t) {
    return (
     (c =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     c(e, t)
    );
   }
   function s(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = p(e);
     if (t) {
      var a = p(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return f(e);
     })(this, n);
    };
   }
   function f(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function p(e) {
    return (
     (p = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     p(e)
    );
   }
   function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var d = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
    })(u, e);
    var t,
     n,
     r,
     i = s(u);
    function u() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, u);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      y(f((e = i.call.apply(i, [this].concat(n)))), "callPlayer", a.callPlayer),
      y(f(e), "duration", null),
      y(f(e), "currentTime", null),
      y(f(e), "secondsLoaded", null),
      y(f(e), "mute", function () {
       e.callPlayer("mute");
      }),
      y(f(e), "unmute", function () {
       e.callPlayer("unmute");
      }),
      y(f(e), "ref", function (t) {
       e.iframe = t;
      }),
      e
     );
    }
    return (
     (t = u),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e) {
        var t = this;
        (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then(function (e) {
         t.iframe &&
          ((t.player = new e.Player(t.iframe)),
          t.player.on("ready", function () {
           setTimeout(function () {
            (t.player.isReady = !0), t.player.setLoop(t.props.loop), t.props.muted && t.player.mute(), t.addListeners(t.player, t.props), t.props.onReady();
           }, 500);
          }));
        }, this.props.onError);
       },
      },
      {
       key: "addListeners",
       value: function (e, t) {
        var n = this;
        e.on("play", t.onPlay),
         e.on("pause", t.onPause),
         e.on("ended", t.onEnded),
         e.on("error", t.onError),
         e.on("timeupdate", function (e) {
          var t = e.duration,
           r = e.seconds;
          (n.duration = t), (n.currentTime = r);
         });
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      { key: "stop", value: function () {} },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("setCurrentTime", e);
       },
      },
      {
       key: "setVolume",
       value: function (e) {
        this.callPlayer("setVolume", e);
       },
      },
      {
       key: "setLoop",
       value: function (e) {
        this.callPlayer("setLoop", e);
       },
      },
      {
       key: "getDuration",
       value: function () {
        return this.duration;
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.currentTime;
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return this.secondsLoaded;
       },
      },
      {
       key: "render",
       value: function () {
        return o.default.createElement("iframe", { ref: this.ref, src: this.props.url, frameBorder: "0", scrolling: "no", style: { width: "100%", height: "100%" }, allow: "encrypted-media; autoplay; fullscreen;", referrerPolicy: "no-referrer-when-downgrade" });
       },
      },
     ]) && l(t.prototype, n),
     r && l(t, r),
     u
    );
   })(o.Component);
   (t.default = d), y(d, "displayName", "Kaltura"), y(d, "canPlay", i.canPlay.kaltura);
  },
  50143: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function c(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function s(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function f(e, t) {
    return (
     (f =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     f(e, t)
    );
   }
   function p(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = d(e);
     if (t) {
      var a = d(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return y(e);
     })(this, n);
    };
   }
   function y(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function d(e) {
    return (
     (d = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     d(e)
    );
   }
   function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var b = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
    })(l, e);
    var t,
     n,
     r,
     u = p(l);
    function l() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, l);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      h(y((e = u.call.apply(u, [this].concat(n)))), "callPlayer", a.callPlayer),
      h(y(e), "duration", null),
      h(y(e), "currentTime", null),
      h(y(e), "secondsLoaded", null),
      h(y(e), "mute", function () {}),
      h(y(e), "unmute", function () {}),
      h(y(e), "ref", function (t) {
       e.iframe = t;
      }),
      e
     );
    }
    return (
     (t = l),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e) {
        var t = this;
        (0, a.getSDK)("https://widget.mixcloud.com/media/js/widgetApi.js", "Mixcloud").then(function (e) {
         (t.player = e.PlayerWidget(t.iframe)),
          t.player.ready.then(function () {
           t.player.events.play.on(t.props.onPlay),
            t.player.events.pause.on(t.props.onPause),
            t.player.events.ended.on(t.props.onEnded),
            t.player.events.error.on(t.props.error),
            t.player.events.progress.on(function (e, n) {
             (t.currentTime = e), (t.duration = n);
            }),
            t.props.onReady();
          });
        }, this.props.onError);
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      { key: "stop", value: function () {} },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("seek", e);
       },
      },
      { key: "setVolume", value: function (e) {} },
      {
       key: "getDuration",
       value: function () {
        return this.duration;
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.currentTime;
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return null;
       },
      },
      {
       key: "render",
       value: function () {
        var e = this.props,
         t = e.url,
         n = e.config,
         r = t.match(i.MATCH_URL_MIXCLOUD)[1],
         u = (0, a.queryString)(c(c({}, n.options), {}, { feed: "/".concat(r, "/") }));
        return o.default.createElement("iframe", { key: r, ref: this.ref, style: { width: "100%", height: "100%" }, src: "https://www.mixcloud.com/widget/iframe/?".concat(u), frameBorder: "0", allow: "autoplay" });
       },
      },
     ]),
     n && s(t.prototype, n),
     r && s(t, r),
     l
    );
   })(o.Component);
   (t.default = b), h(b, "displayName", "Mixcloud"), h(b, "canPlay", i.canPlay.mixcloud), h(b, "loopOnEnded", !0);
  },
  72648: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function c(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function s(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function f(e, t) {
    return (
     (f =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     f(e, t)
    );
   }
   function p(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = d(e);
     if (t) {
      var a = d(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return y(e);
     })(this, n);
    };
   }
   function y(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function d(e) {
    return (
     (d = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     d(e)
    );
   }
   function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var b = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
    })(u, e);
    var t,
     n,
     r,
     i = p(u);
    function u() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, u);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      h(y((e = i.call.apply(i, [this].concat(n)))), "callPlayer", a.callPlayer),
      h(y(e), "duration", null),
      h(y(e), "currentTime", null),
      h(y(e), "fractionLoaded", null),
      h(y(e), "mute", function () {
       e.setVolume(0);
      }),
      h(y(e), "unmute", function () {
       null !== e.props.volume && e.setVolume(e.props.volume);
      }),
      h(y(e), "ref", function (t) {
       e.iframe = t;
      }),
      e
     );
    }
    return (
     (t = u),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e, t) {
        var n = this;
        (0, a.getSDK)("https://w.soundcloud.com/player/api.js", "SC").then(function (r) {
         if (n.iframe) {
          var o = r.Widget.Events,
           a = o.PLAY,
           i = o.PLAY_PROGRESS,
           u = o.PAUSE,
           l = o.FINISH,
           s = o.ERROR;
          t ||
           ((n.player = r.Widget(n.iframe)),
           n.player.bind(a, n.props.onPlay),
           n.player.bind(u, function () {
            n.duration - n.currentTime < 0.05 || n.props.onPause();
           }),
           n.player.bind(i, function (e) {
            (n.currentTime = e.currentPosition / 1e3), (n.fractionLoaded = e.loadedProgress);
           }),
           n.player.bind(l, function () {
            return n.props.onEnded();
           }),
           n.player.bind(s, function (e) {
            return n.props.onError(e);
           })),
           n.player.load(
            e,
            c(
             c({}, n.props.config.options),
             {},
             {
              callback: function () {
               n.player.getDuration(function (e) {
                (n.duration = e / 1e3), n.props.onReady();
               });
              },
             }
            )
           );
         }
        });
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      { key: "stop", value: function () {} },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("seekTo", 1e3 * e);
       },
      },
      {
       key: "setVolume",
       value: function (e) {
        this.callPlayer("setVolume", 100 * e);
       },
      },
      {
       key: "getDuration",
       value: function () {
        return this.duration;
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.currentTime;
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return this.fractionLoaded * this.duration;
       },
      },
      {
       key: "render",
       value: function () {
        var e = { width: "100%", height: "100%", display: this.props.display };
        return o.default.createElement("iframe", { ref: this.ref, src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)), style: e, frameBorder: 0, allow: "autoplay" });
       },
      },
     ]) && s(t.prototype, n),
     r && s(t, r),
     u
    );
   })(o.Component);
   (t.default = b), h(b, "displayName", "SoundCloud"), h(b, "canPlay", i.canPlay.soundcloud), h(b, "loopOnEnded", !0);
  },
  50993: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function c(e, t) {
    return (
     (c =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     c(e, t)
    );
   }
   function s(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = p(e);
     if (t) {
      var a = p(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return f(e);
     })(this, n);
    };
   }
   function f(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function p(e) {
    return (
     (p = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     p(e)
    );
   }
   function y(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var d = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && c(e, t);
    })(p, e);
    var t,
     n,
     r,
     u = s(p);
    function p() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, p);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      y(f((e = u.call.apply(u, [this].concat(n)))), "callPlayer", a.callPlayer),
      y(f(e), "duration", null),
      y(f(e), "currentTime", null),
      y(f(e), "secondsLoaded", null),
      y(f(e), "mute", function () {
       e.callPlayer("mute");
      }),
      y(f(e), "unmute", function () {
       e.callPlayer("unmute");
      }),
      y(f(e), "ref", function (t) {
       e.iframe = t;
      }),
      e
     );
    }
    return (
     (t = p),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e) {
        var t = this;
        (0, a.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js", "playerjs").then(function (e) {
         t.iframe &&
          ((t.player = new e.Player(t.iframe)),
          t.player.setLoop(t.props.loop),
          t.player.on("ready", t.props.onReady),
          t.player.on("play", t.props.onPlay),
          t.player.on("pause", t.props.onPause),
          t.player.on("seeked", t.props.onSeek),
          t.player.on("ended", t.props.onEnded),
          t.player.on("error", t.props.onError),
          t.player.on("timeupdate", function (e) {
           var n = e.duration,
            r = e.seconds;
           (t.duration = n), (t.currentTime = r);
          }),
          t.player.on("buffered", function (e) {
           var n = e.percent;
           t.duration && (t.secondsLoaded = t.duration * n);
          }),
          t.props.muted && t.player.mute());
        }, this.props.onError);
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      { key: "stop", value: function () {} },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("setCurrentTime", e);
       },
      },
      {
       key: "setVolume",
       value: function (e) {
        this.callPlayer("setVolume", 100 * e);
       },
      },
      {
       key: "setLoop",
       value: function (e) {
        this.callPlayer("setLoop", e);
       },
      },
      {
       key: "getDuration",
       value: function () {
        return this.duration;
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.currentTime;
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return this.secondsLoaded;
       },
      },
      {
       key: "render",
       value: function () {
        var e = this.props.url.match(i.MATCH_URL_STREAMABLE)[1];
        return o.default.createElement("iframe", { ref: this.ref, src: "https://streamable.com/o/".concat(e), frameBorder: "0", scrolling: "no", style: { width: "100%", height: "100%" }, allow: "encrypted-media; autoplay; fullscreen;" });
       },
      },
     ]) && l(t.prototype, n),
     r && l(t, r),
     p
    );
   })(o.Component);
   (t.default = d), y(d, "displayName", "Streamable"), y(d, "canPlay", i.canPlay.streamable);
  },
  29482: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function c(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function s(e, t) {
    return (
     (s =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     s(e, t)
    );
   }
   function f(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = y(e);
     if (t) {
      var a = y(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return p(e);
     })(this, n);
    };
   }
   function p(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function y(e) {
    return (
     (y = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     y(e)
    );
   }
   function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var h = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
    })(y, e);
    var t,
     n,
     r,
     u = f(y);
    function y() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, y);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      d(p((e = u.call.apply(u, [this].concat(n)))), "callPlayer", a.callPlayer),
      d(p(e), "playerID", e.props.config.playerId || "".concat("twitch-player-").concat((0, a.randomString)())),
      d(p(e), "mute", function () {
       e.callPlayer("setMuted", !0);
      }),
      d(p(e), "unmute", function () {
       e.callPlayer("setMuted", !1);
      }),
      e
     );
    }
    return (
     (t = y),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e, t) {
        var n = this,
         r = this.props,
         o = r.playsinline,
         u = r.onError,
         c = r.config,
         s = r.controls,
         f = i.MATCH_URL_TWITCH_CHANNEL.test(e),
         p = f ? e.match(i.MATCH_URL_TWITCH_CHANNEL)[1] : e.match(i.MATCH_URL_TWITCH_VIDEO)[1];
        t
         ? f
           ? this.player.setChannel(p)
           : this.player.setVideo("v" + p)
         : (0, a.getSDK)("https://player.twitch.tv/js/embed/v1.js", "Twitch").then(function (t) {
            n.player = new t.Player(
             n.playerID,
             (function (e) {
              for (var t = 1; t < arguments.length; t++) {
               var n = null != arguments[t] ? arguments[t] : {};
               t % 2
                ? l(Object(n), !0).forEach(function (t) {
                   d(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                : l(Object(n)).forEach(function (t) {
                   Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                  });
              }
              return e;
             })({ video: f ? "" : p, channel: f ? p : "", height: "100%", width: "100%", playsinline: o, autoplay: n.props.playing, muted: n.props.muted, controls: !!f || s, time: (0, a.parseStartTime)(e) }, c.options)
            );
            var r = t.Player,
             i = r.READY,
             u = r.PLAYING,
             y = r.PAUSE,
             h = r.ENDED,
             b = r.ONLINE,
             v = r.OFFLINE,
             m = r.SEEK;
            n.player.addEventListener(i, n.props.onReady), n.player.addEventListener(u, n.props.onPlay), n.player.addEventListener(y, n.props.onPause), n.player.addEventListener(h, n.props.onEnded), n.player.addEventListener(m, n.props.onSeek), n.player.addEventListener(b, n.props.onLoaded), n.player.addEventListener(v, n.props.onLoaded);
           }, u);
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      {
       key: "stop",
       value: function () {
        this.callPlayer("pause");
       },
      },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("seek", e);
       },
      },
      {
       key: "setVolume",
       value: function (e) {
        this.callPlayer("setVolume", e);
       },
      },
      {
       key: "getDuration",
       value: function () {
        return this.callPlayer("getDuration");
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.callPlayer("getCurrentTime");
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return null;
       },
      },
      {
       key: "render",
       value: function () {
        return o.default.createElement("div", { style: { width: "100%", height: "100%" }, id: this.playerID });
       },
      },
     ]),
     n && c(t.prototype, n),
     r && c(t, r),
     y
    );
   })(o.Component);
   (t.default = h), d(h, "displayName", "Twitch"), d(h, "canPlay", i.canPlay.twitch), d(h, "loopOnEnded", !0);
  },
  36596: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function c(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function s(e, t) {
    return (
     (s =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     s(e, t)
    );
   }
   function f(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = y(e);
     if (t) {
      var a = y(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return p(e);
     })(this, n);
    };
   }
   function p(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function y(e) {
    return (
     (y = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     y(e)
    );
   }
   function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var h = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && s(e, t);
    })(y, e);
    var t,
     n,
     r,
     u = f(y);
    function y() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, y);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      d(p((e = u.call.apply(u, [this].concat(n)))), "callPlayer", a.callPlayer),
      d(p(e), "mute", function () {
       e.setVolume(0);
      }),
      d(p(e), "unmute", function () {
       null !== e.props.volume && e.setVolume(e.props.volume);
      }),
      d(p(e), "ref", function (t) {
       e.container = t;
      }),
      e
     );
    }
    return (
     (t = y),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e) {
        var t = this,
         n = this.props,
         r = n.playing,
         o = n.config,
         u = n.onError,
         c = n.onDuration,
         s = e && e.match(i.MATCH_URL_VIDYARD)[1];
        this.player && this.stop(),
         (0, a.getSDK)("https://play.vidyard.com/embed/v4.js", "VidyardV4", "onVidyardAPI").then(function (e) {
          t.container &&
           (e.api.addReadyListener(function (e, n) {
            t.player || ((t.player = n), t.player.on("ready", t.props.onReady), t.player.on("play", t.props.onPlay), t.player.on("pause", t.props.onPause), t.player.on("seek", t.props.onSeek), t.player.on("playerComplete", t.props.onEnded));
           }, s),
           e.api.renderPlayer(
            (function (e) {
             for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
               ? l(Object(n), !0).forEach(function (t) {
                  d(e, t, n[t]);
                 })
               : Object.getOwnPropertyDescriptors
               ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
               : l(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                 });
             }
             return e;
            })({ uuid: s, container: t.container, autoplay: r ? 1 : 0 }, o.options)
           ),
           e.api.getPlayerMetadata(s).then(function (e) {
            (t.duration = e.length_in_seconds), c(e.length_in_seconds);
           }));
         }, u);
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      {
       key: "stop",
       value: function () {
        window.VidyardV4.api.destroyPlayer(this.player);
       },
      },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("seek", e);
       },
      },
      {
       key: "setVolume",
       value: function (e) {
        this.callPlayer("setVolume", e);
       },
      },
      {
       key: "setPlaybackRate",
       value: function (e) {
        this.callPlayer("setPlaybackSpeed", e);
       },
      },
      {
       key: "getDuration",
       value: function () {
        return this.duration;
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.callPlayer("currentTime");
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return null;
       },
      },
      {
       key: "render",
       value: function () {
        var e = { width: "100%", height: "100%", display: this.props.display };
        return o.default.createElement("div", { style: e }, o.default.createElement("div", { ref: this.ref }));
       },
      },
     ]),
     n && c(t.prototype, n),
     r && c(t, r),
     y
    );
   })(o.Component);
   (t.default = h), d(h, "displayName", "Vidyard"), d(h, "canPlay", i.canPlay.vidyard);
  },
  8018: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function c(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         h(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function s(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function f(e, t) {
    return (
     (f =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     f(e, t)
    );
   }
   function p(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = d(e);
     if (t) {
      var a = d(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return y(e);
     })(this, n);
    };
   }
   function y(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function d(e) {
    return (
     (d = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     d(e)
    );
   }
   function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var b = (function (e) {
    !(function (e, t) {
     if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
     (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && f(e, t);
    })(l, e);
    var t,
     n,
     r,
     u = p(l);
    function l() {
     var e;
     !(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
     })(this, l);
     for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
     return (
      h(y((e = u.call.apply(u, [this].concat(n)))), "callPlayer", a.callPlayer),
      h(y(e), "playerID", e.props.config.playerId || "".concat("wistia-player-").concat((0, a.randomString)())),
      h(y(e), "onPlay", function () {
       var t;
       return (t = e.props).onPlay.apply(t, arguments);
      }),
      h(y(e), "onPause", function () {
       var t;
       return (t = e.props).onPause.apply(t, arguments);
      }),
      h(y(e), "onSeek", function () {
       var t;
       return (t = e.props).onSeek.apply(t, arguments);
      }),
      h(y(e), "onEnded", function () {
       var t;
       return (t = e.props).onEnded.apply(t, arguments);
      }),
      h(y(e), "onPlaybackRateChange", function () {
       var t;
       return (t = e.props).onPlaybackRateChange.apply(t, arguments);
      }),
      h(y(e), "mute", function () {
       e.callPlayer("mute");
      }),
      h(y(e), "unmute", function () {
       e.callPlayer("unmute");
      }),
      e
     );
    }
    return (
     (t = l),
     (n = [
      {
       key: "componentDidMount",
       value: function () {
        this.props.onMount && this.props.onMount(this);
       },
      },
      {
       key: "load",
       value: function (e) {
        var t = this,
         n = this.props,
         r = n.playing,
         o = n.muted,
         i = n.controls,
         u = n.onReady,
         l = n.config,
         s = n.onError;
        (0, a.getSDK)("https://fast.wistia.com/assets/external/E-v1.js", "Wistia").then(function (e) {
         l.customControls &&
          l.customControls.forEach(function (t) {
           return e.defineControl(t);
          }),
          (window._wq = window._wq || []),
          window._wq.push({
           id: t.playerID,
           options: c({ autoPlay: r, silentAutoPlay: "allow", muted: o, controlsVisibleOnLoad: i, fullscreenButton: i, playbar: i, playbackRateControl: i, qualityControl: i, volumeControl: i, settingsControl: i, smallPlayButton: i }, l.options),
           onReady: function (e) {
            (t.player = e), t.unbind(), t.player.bind("play", t.onPlay), t.player.bind("pause", t.onPause), t.player.bind("seek", t.onSeek), t.player.bind("end", t.onEnded), t.player.bind("playbackratechange", t.onPlaybackRateChange), u();
           },
          });
        }, s);
       },
      },
      {
       key: "unbind",
       value: function () {
        this.player.unbind("play", this.onPlay), this.player.unbind("pause", this.onPause), this.player.unbind("seek", this.onSeek), this.player.unbind("end", this.onEnded), this.player.unbind("playbackratechange", this.onPlaybackRateChange);
       },
      },
      {
       key: "play",
       value: function () {
        this.callPlayer("play");
       },
      },
      {
       key: "pause",
       value: function () {
        this.callPlayer("pause");
       },
      },
      {
       key: "stop",
       value: function () {
        this.unbind(), this.callPlayer("remove");
       },
      },
      {
       key: "seekTo",
       value: function (e) {
        this.callPlayer("time", e);
       },
      },
      {
       key: "setVolume",
       value: function (e) {
        this.callPlayer("volume", e);
       },
      },
      {
       key: "setPlaybackRate",
       value: function (e) {
        this.callPlayer("playbackRate", e);
       },
      },
      {
       key: "getDuration",
       value: function () {
        return this.callPlayer("duration");
       },
      },
      {
       key: "getCurrentTime",
       value: function () {
        return this.callPlayer("time");
       },
      },
      {
       key: "getSecondsLoaded",
       value: function () {
        return null;
       },
      },
      {
       key: "render",
       value: function () {
        var e = this.props.url,
         t = e && e.match(i.MATCH_URL_WISTIA)[1],
         n = "wistia_embed wistia_async_".concat(t);
        return o.default.createElement("div", { id: this.playerID, key: t, className: n, style: { width: "100%", height: "100%" } });
       },
      },
     ]),
     n && s(t.prototype, n),
     r && s(t, r),
     l
    );
   })(o.Component);
   (t.default = b), h(b, "displayName", "Wistia"), h(b, "canPlay", i.canPlay.wistia), h(b, "loopOnEnded", !0);
  },
  60356: (e, t, n) => {
   function r(e) {
    return (
     (r =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     r(e)
    );
   }
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var o = (function (e) {
     if (e && e.__esModule) return e;
     if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
     var t = u();
     if (t && t.has(e)) return t.get(e);
     var n = {},
      o = Object.defineProperty && Object.getOwnPropertyDescriptor;
     for (var a in e)
      if (Object.prototype.hasOwnProperty.call(e, a)) {
       var i = o ? Object.getOwnPropertyDescriptor(e, a) : null;
       i && (i.get || i.set) ? Object.defineProperty(n, a, i) : (n[a] = e[a]);
      }
     (n.default = e), t && t.set(e, n);
     return n;
    })(n(67294)),
    a = n(38045),
    i = n(71776);
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
     var r = Object.getOwnPropertySymbols(e);
     t &&
      (r = r.filter(function (t) {
       return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
    }
    return n;
   }
   function c(e) {
    for (var t = 1; t < arguments.length; t++) {
     var n = null != arguments[t] ? arguments[t] : {};
     t % 2
      ? l(Object(n), !0).forEach(function (t) {
         v(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : l(Object(n)).forEach(function (t) {
         Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
    }
    return e;
   }
   function s(e, t) {
    return (
     (function (e) {
      if (Array.isArray(e)) return e;
     })(e) ||
     (function (e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
       r = !0,
       o = !1,
       a = void 0;
      try {
       for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
      } catch (l) {
       (o = !0), (a = l);
      } finally {
       try {
        r || null == u.return || u.return();
       } finally {
        if (o) throw a;
       }
      }
      return n;
     })(e, t) ||
     (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return f(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t);
     })(e, t) ||
     (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
     })()
    );
   }
   function f(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
   }
   function p(e, t) {
    for (var n = 0; n < t.length; n++) {
     var r = t[n];
     (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
   }
   function y(e, t) {
    return (
     (y =
      Object.setPrototypeOf ||
      function (e, t) {
       return (e.__proto__ = t), e;
      }),
     y(e, t)
    );
   }
   function d(e) {
    var t = (function () {
     if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
     if (Reflect.construct.sham) return !1;
     if ("function" == typeof Proxy) return !0;
     try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
     } catch (e) {
      return !1;
     }
    })();
    return function () {
     var n,
      o = b(e);
     if (t) {
      var a = b(this).constructor;
      n = Reflect.construct(o, arguments, a);
     } else n = o.apply(this, arguments);
     return (function (e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      return h(e);
     })(this, n);
    };
   }
   function h(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
   }
   function b(e) {
    return (
     (b = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
         return e.__proto__ || Object.getPrototypeOf(e);
        }),
     b(e)
    );
   }
   function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
   }
   var m = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,
    P = /user\/([a-zA-Z0-9_-]+)\/?/,
    g = /youtube-nocookie\.com/,
    O = (function (e) {
     !(function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && y(e, t);
     })(l, e);
     var t,
      n,
      r,
      u = d(l);
     function l() {
      var e;
      !(function (e, t) {
       if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, l);
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return (
       v(h((e = u.call.apply(u, [this].concat(n)))), "callPlayer", a.callPlayer),
       v(h(e), "parsePlaylist", function (t) {
        return t instanceof Array ? { listType: "playlist", playlist: t.map(e.getID).join(",") } : m.test(t) ? { listType: "playlist", list: s(t.match(m), 2)[1].replace(/^UC/, "UU") } : P.test(t) ? { listType: "user_uploads", list: s(t.match(P), 2)[1] } : {};
       }),
       v(h(e), "onStateChange", function (t) {
        var n = t.data,
         r = e.props,
         o = r.onPlay,
         a = r.onPause,
         i = r.onBuffer,
         u = r.onBufferEnd,
         l = r.onEnded,
         c = r.onReady,
         s = r.loop,
         f = r.config,
         p = f.playerVars,
         y = f.onUnstarted,
         d = window.YT.PlayerState,
         h = d.UNSTARTED,
         b = d.PLAYING,
         v = d.PAUSED,
         m = d.BUFFERING,
         P = d.ENDED,
         g = d.CUED;
        if ((n === h && y(), n === b && (o(), u()), n === v && a(), n === m && i(), n === P)) {
         var O = !!e.callPlayer("getPlaylist");
         s && !O && (p.start ? e.seekTo(p.start) : e.play()), l();
        }
        n === g && c();
       }),
       v(h(e), "mute", function () {
        e.callPlayer("mute");
       }),
       v(h(e), "unmute", function () {
        e.callPlayer("unMute");
       }),
       v(h(e), "ref", function (t) {
        e.container = t;
       }),
       e
      );
     }
     return (
      (t = l),
      (n = [
       {
        key: "componentDidMount",
        value: function () {
         this.props.onMount && this.props.onMount(this);
        },
       },
       {
        key: "getID",
        value: function (e) {
         return !e || e instanceof Array || m.test(e) ? null : e.match(i.MATCH_URL_YOUTUBE)[1];
        },
       },
       {
        key: "load",
        value: function (e, t) {
         var n = this,
          r = this.props,
          o = r.playing,
          i = r.muted,
          u = r.playsinline,
          l = r.controls,
          s = r.loop,
          f = r.config,
          p = r.onError,
          y = f.playerVars,
          d = f.embedOptions,
          h = this.getID(e);
         if (t) return m.test(e) || P.test(e) || e instanceof Array ? void this.player.loadPlaylist(this.parsePlaylist(e)) : void this.player.cueVideoById({ videoId: h, startSeconds: (0, a.parseStartTime)(e) || y.start, endSeconds: (0, a.parseEndTime)(e) || y.end });
         (0, a.getSDK)("https://www.youtube.com/iframe_api", "YT", "onYouTubeIframeAPIReady", function (e) {
          return e.loaded;
         }).then(function (t) {
          n.container &&
           (n.player = new t.Player(
            n.container,
            c(
             {
              width: "100%",
              height: "100%",
              videoId: h,
              playerVars: c(c({ autoplay: o ? 1 : 0, mute: i ? 1 : 0, controls: l ? 1 : 0, start: (0, a.parseStartTime)(e), end: (0, a.parseEndTime)(e), origin: window.location.origin, playsinline: u ? 1 : 0 }, n.parsePlaylist(e)), y),
              events: {
               onReady: function () {
                s && n.player.setLoop(!0), n.props.onReady();
               },
               onPlaybackRateChange: function (e) {
                return n.props.onPlaybackRateChange(e.data);
               },
               onStateChange: n.onStateChange,
               onError: function (e) {
                return p(e.data);
               },
              },
              host: g.test(e) ? "https://www.youtube-nocookie.com" : void 0,
             },
             d
            )
           ));
         }, p),
          d.events && console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause");
        },
       },
       {
        key: "play",
        value: function () {
         this.callPlayer("playVideo");
        },
       },
       {
        key: "pause",
        value: function () {
         this.callPlayer("pauseVideo");
        },
       },
       {
        key: "stop",
        value: function () {
         document.body.contains(this.callPlayer("getIframe")) && this.callPlayer("stopVideo");
        },
       },
       {
        key: "seekTo",
        value: function (e) {
         this.callPlayer("seekTo", e), this.props.playing || this.pause();
        },
       },
       {
        key: "setVolume",
        value: function (e) {
         this.callPlayer("setVolume", 100 * e);
        },
       },
       {
        key: "setPlaybackRate",
        value: function (e) {
         this.callPlayer("setPlaybackRate", e);
        },
       },
       {
        key: "setLoop",
        value: function (e) {
         this.callPlayer("setLoop", e);
        },
       },
       {
        key: "getDuration",
        value: function () {
         return this.callPlayer("getDuration");
        },
       },
       {
        key: "getCurrentTime",
        value: function () {
         return this.callPlayer("getCurrentTime");
        },
       },
       {
        key: "getSecondsLoaded",
        value: function () {
         return this.callPlayer("getVideoLoadedFraction") * this.getDuration();
        },
       },
       {
        key: "render",
        value: function () {
         var e = { width: "100%", height: "100%", display: this.props.display };
         return o.default.createElement("div", { style: e }, o.default.createElement("div", { ref: this.ref }));
        },
       },
      ]) && p(t.prototype, n),
      r && p(t, r),
      l
     );
    })(o.Component);
   (t.default = O), v(O, "displayName", "YouTube"), v(O, "canPlay", i.canPlay.youtube);
  },
  86497: (e, t, n) => {
   Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
   var r = n(67294),
    o = n(38045),
    a = n(71776);
   function i(e) {
    return (
     (i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
       ? function (e) {
          return typeof e;
         }
       : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
         }),
     i(e)
    );
   }
   function u() {
    if ("function" != typeof WeakMap) return null;
    var e = new WeakMap();
    return (
     (u = function () {
      return e;
     }),
     e
    );
   }
   function l(e) {
    if (e && e.__esModule) return e;
    if (null === e || ("object" !== i(e) && "function" != typeof e)) return { default: e };
    var t = u();
    if (t && t.has(e)) return t.get(e);
    var n = {},
     r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in e)
     if (Object.prototype.hasOwnProperty.call(e, o)) {
      var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
      a && (a.get || a.set) ? Object.defineProperty(n, o, a) : (n[o] = e[o]);
     }
    return (n.default = e), t && t.set(e, n), n;
   }
   var c = [
    {
     key: "youtube",
     name: "YouTube",
     canPlay: a.canPlay.youtube,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(60356));
      });
     }),
    },
    {
     key: "soundcloud",
     name: "SoundCloud",
     canPlay: a.canPlay.soundcloud,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(72648));
      });
     }),
    },
    {
     key: "vimeo",
     name: "Vimeo",
     canPlay: a.canPlay.vimeo,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(80868));
      });
     }),
    },
    {
     key: "facebook",
     name: "Facebook",
     canPlay: a.canPlay.facebook,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(31972));
      });
     }),
    },
    {
     key: "streamable",
     name: "Streamable",
     canPlay: a.canPlay.streamable,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(50993));
      });
     }),
    },
    {
     key: "wistia",
     name: "Wistia",
     canPlay: a.canPlay.wistia,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(8018));
      });
     }),
    },
    {
     key: "twitch",
     name: "Twitch",
     canPlay: a.canPlay.twitch,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(29482));
      });
     }),
    },
    {
     key: "dailymotion",
     name: "DailyMotion",
     canPlay: a.canPlay.dailymotion,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(36807));
      });
     }),
    },
    {
     key: "mixcloud",
     name: "Mixcloud",
     canPlay: a.canPlay.mixcloud,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(50143));
      });
     }),
    },
    {
     key: "vidyard",
     name: "Vidyard",
     canPlay: a.canPlay.vidyard,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(36596));
      });
     }),
    },
    {
     key: "kaltura",
     name: "Kaltura",
     canPlay: a.canPlay.kaltura,
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(73911));
      });
     }),
    },
    {
     key: "file",
     name: "FilePlayer",
     canPlay: a.canPlay.file,
     canEnablePIP: function (e) {
      return a.canPlay.file(e) && (document.pictureInPictureEnabled || (0, o.supportsWebKitPresentationMode)()) && !a.AUDIO_EXTENSIONS.test(e);
     },
     lazyPlayer: (0, r.lazy)(function () {
      return Promise.resolve().then(function () {
       return l(n(14926));
      });
     }),
    },
   ];
   t.default = c;
  },
 },
]);
