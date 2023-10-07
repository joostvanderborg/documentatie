"use strict";
(self.webpackChunk_nl_design_system_website = self.webpackChunk_nl_design_system_website || []).push([
 [2876],
 {
  3905: (t, e, s) => {
   s.d(e, { Zo: () => g, kt: () => d });
   var i = s(67294);
   function n(t, e, s) {
    return e in t ? Object.defineProperty(t, e, { value: s, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = s), t;
   }
   function o(t, e) {
    var s = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
     var i = Object.getOwnPropertySymbols(t);
     e &&
      (i = i.filter(function (e) {
       return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })),
      s.push.apply(s, i);
    }
    return s;
   }
   function a(t) {
    for (var e = 1; e < arguments.length; e++) {
     var s = null != arguments[e] ? arguments[e] : {};
     e % 2
      ? o(Object(s), !0).forEach(function (e) {
         n(t, e, s[e]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
      : o(Object(s)).forEach(function (e) {
         Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
        });
    }
    return t;
   }
   function m(t, e) {
    if (null == t) return {};
    var s,
     i,
     n = (function (t, e) {
      if (null == t) return {};
      var s,
       i,
       n = {},
       o = Object.keys(t);
      for (i = 0; i < o.length; i++) (s = o[i]), e.indexOf(s) >= 0 || (n[s] = t[s]);
      return n;
     })(t, e);
    if (Object.getOwnPropertySymbols) {
     var o = Object.getOwnPropertySymbols(t);
     for (i = 0; i < o.length; i++) (s = o[i]), e.indexOf(s) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, s) && (n[s] = t[s]));
    }
    return n;
   }
   var c = i.createContext({}),
    p = function (t) {
     var e = i.useContext(c),
      s = e;
     return t && (s = "function" == typeof t ? t(e) : a(a({}, e), t)), s;
    },
    g = function (t) {
     var e = p(t.components);
     return i.createElement(c.Provider, { value: e }, t.children);
    },
    r = "mdxType",
    l = {
     inlineCode: "code",
     wrapper: function (t) {
      var e = t.children;
      return i.createElement(i.Fragment, {}, e);
     },
    },
    h = i.forwardRef(function (t, e) {
     var s = t.components,
      n = t.mdxType,
      o = t.originalType,
      c = t.parentName,
      g = m(t, ["components", "mdxType", "originalType", "parentName"]),
      r = p(s),
      h = n,
      d = r["".concat(c, ".").concat(h)] || r[h] || l[h] || o;
     return s ? i.createElement(d, a(a({ ref: e }, g), {}, { components: s })) : i.createElement(d, a({ ref: e }, g));
    });
   function d(t, e) {
    var s = arguments,
     n = e && e.mdxType;
    if ("string" == typeof t || n) {
     var o = s.length,
      a = new Array(o);
     a[0] = h;
     var m = {};
     for (var c in e) hasOwnProperty.call(e, c) && (m[c] = e[c]);
     (m.originalType = t), (m[r] = "string" == typeof t ? t : n), (a[1] = m);
     for (var p = 2; p < o; p++) a[p] = s[p];
     return i.createElement.apply(null, a);
    }
    return i.createElement.apply(null, s);
   }
   h.displayName = "MDXCreateElement";
  },
  45766: (t, e, s) => {
   var i, n, o, a;
   s.d(e, { $3: () => o, HY: () => m }),
    (function (t) {
     (t.CSS = "CSS"), (t.HTML = "HTML"), (t.WEB_COMPONENT = "Web Component"), (t.REACT = "React"), (t.VUE = "Vue"), (t.ANGULAR = "Angular"), (t.FIGMA = "Figma");
    })(i || (i = {})),
    (function (t) {
     (t.DEN_HAAG = "Gemeente Den Haag"), (t.UTRECHT = "Gemeente Utrecht"), (t.NLDS = "NL Design System");
    })(n || (n = {})),
    (function (t) {
     (t.DISCOURAGED = "Discouraged"), (t.TODO = "Help Wanted"), (t.COMMUNITY = "Community"), (t.NL_UNSTABLE = "Candidate"), (t.NL_STABLE = "Hall of fame");
    })(o || (o = {})),
    (function (t) {
     (t.UX = "UX"), (t.A11Y = "A11y"), (t.COPY = "Content richtlijnen");
    })(a || (a = {}));
   const m = [
    {
     id: "text-input",
     name: "Text input",
     aliases: ["text-field", "textbox"],
     state: o.COMMUNITY,
     communityDocs: [
      { organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/TextField/README.md" },
      { organisation: n.UTRECHT, type: a.UX, href: "https://github.com/nl-design-system/utrecht/tree/main/components/textbox/README.md" },
     ],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.REACT, package: "@gemeente-denhaag/textfield", implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.tsx", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-textfield--default-story" },
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/textbox/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textbox--default-story", storyTemplate: "@utrecht/components/textbox/css/story-template.jsx", package: "@utrecht/component-library-css", designTokenPrefixes: ["utrecht.textbox"] },
      { organisation: n.DEN_HAAG, type: i.CSS, package: "@gemeente-denhaag/textfield", implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.scss" },
      { organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/textbox/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textbox--default-story" },
      { organisation: n.UTRECHT, type: i.FIGMA, implementation: "https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=302%3A3975" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/textbox/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-textbox--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=859-981" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_text-input.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/5",
    },
    {
     id: "status-badge",
     name: "Status badge",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/blob/main/components/badge-status/css/index.scss", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-status-badge--default-story", storyTemplate: "@utrecht/components/badge-status/css/story-template.jsx", package: "@utrecht/component-library-css", designTokenPrefixes: ["utrecht.badge-status", "utrecht.feedback", "utrecht.badge"] },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1354-6672" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_status-badge.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/6",
    },
    {
     id: "counter-badge",
     name: "Counter badge",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/BadgeCounter/README.md" }],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/BadgeCounter/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-badge-counter--default-story", package: "@gemeente-denhaag/badge-counter" },
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-counter-badge--default-story", package: "@utrecht/component-library-css" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/badge-counter/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-counter-badge--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1233-4271" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_counter-badge.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/7",
    },
    {
     id: "alert",
     name: "Alert",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/Alert/README.md" }],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Alert/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-alert--error" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1179-3892" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_notification.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/9",
    },
    {
     id: "switch",
     name: "Switch",
     aliases: ["toggle", "toggle-button", "form-toggle"],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/Switch/README.md" }],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-toggle--default-story", storyTemplate: "@utrecht/components/form-toggle/css/story-template.jsx", package: "@utrecht/component-library-css", designTokenPrefixes: ["utrecht.form-toggle"] },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/form-toggle/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-form-toggle--default-story" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Switch/src/index.tsx", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-switch--default" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_toggle.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/33",
    },
    {
     id: "select",
     name: "Select",
     aliases: ["dropdown-listbox", "dropdown"],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/Select/README.md" }],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/select", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-select--default-story", storyTemplate: "@utrecht/components/select/css/story-template.jsx", designTokenPrefixes: ["utrecht.select", "utrecht.form-input"], package: "@utrecht/component-library-css" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1130-3652" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Select/src/index.tsx" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_select.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/34",
    },
    { id: "date-picker", name: "Date Picker", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/35" },
    { id: "range", name: "Range", aliases: ["slider"], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/36" },
    {
     id: "button",
     name: "Button",
     aliases: ["button-primary", "button-secondary"],
     state: o.COMMUNITY,
     communityDocs: [
      { organisation: n.UTRECHT, type: a.UX, href: "https://github.com/nl-design-system/utrecht/blob/main/components/button/docs/ux-guidelines.md" },
      { organisation: n.UTRECHT, type: a.A11Y, href: "https://github.com/nl-design-system/utrecht/blob/main/components/button/docs/accessibility.md" },
     ],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/button/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-button--button", storyTemplate: "@utrecht/components/button/css/story-template.jsx", package: "@utrecht/component-library-css", designTokenPrefixes: ["utrecht.button"] },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/button/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-button--button" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/button/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-button--button" },
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Button", story: "https://nl-design-system.github.io/denhaag/?path=/docs/css-input-button--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1138" },
      { organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1%3A656" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_button.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/38",
    },
    {
     id: "table",
     name: "Table",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Table", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-table--default-story" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/table/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-table--default-story" },
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/table/css" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/table/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-table--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1561-6277" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_table.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/39",
    },
    {
     id: "textarea",
     name: "Textarea",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/TextArea/README.md" }],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/textarea/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textarea--default-story", storyTemplate: "@utrecht/components/textarea/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/textarea/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textarea--default-story" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/TextArea", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-text-area--default-story" },
      { organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=7062%3A17687" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=969-2047" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_textarea.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/40",
    },
    { id: "progress", name: "Progress", aliases: ["progress-bar", "progress-indicator"], state: o.TODO, communityDocs: [], implementations: [], preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_progress.svg", backlog: "https://github.com/nl-design-system/backlog/issues/42" },
    { id: "tooltip", name: "Tooltip", aliases: [], state: o.DISCOURAGED, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/50" },
    {
     id: "tabs",
     name: "Tabs",
     aliases: ["tab"],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/tree/main/components/Tab/README.md" }],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Tab/src/Tabs.tsx", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-tab--default" },
      { organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=5020%3A18454" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_tabs.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/51",
    },
    {
     id: "side-navigation",
     name: "Side navigation",
     aliases: ["sidebar"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/navigatie%20sidenav/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-sidenav--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1670-10258" },
     ],
     preview: "",
     backlog: "https://github.com/nl-design-system/backlog/issues/53",
    },
    {
     id: "breadcrumb",
     name: "Breadcrumb navigation",
     aliases: ["breadcrumb-bar"],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/Breadcrumb/README.md" }],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Breadcrumb", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-breadcrumb--default-story" },
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/breadcrumb/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-breadcrumb--default-story", storyTemplate: "@utrecht/components/breadcrumb/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/breadcrumb/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-breadcrumb--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1862-9575" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_breadcrumbs.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/54",
    },
    { id: "page-header", name: "Page Header", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/55" },
    { id: "page-footer", name: "Page Footer", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/56" },
    {
     id: "checkbox",
     name: "Checkbox",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-custom-checkbox--default-story", storyTemplate: "@utrecht/components/custom-checkbox/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/checkbox/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-checkbox--default-story" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/custom-checkbox/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-custom-checkbox--default-story" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Checkbox", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-checkbox--default-story" },
      { organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1450%3A4570" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=944-1535" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_checkbox.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/64",
    },
    {
     id: "radio",
     name: "Radio button",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/tree/main/components/Radio/README.md" }],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/custom-radio-button/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-custom-radio-button--default-story", storyTemplate: "@utrecht/components/radio-button/css/story-template.jsx", package: "@utrecht/component-library-css", designTokenPrefixes: ["utrecht.radio-button"] },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/radio-button/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-radio-button--default-story" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.tsx", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-input-radio-radio--default" },
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Radio/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-input-radio--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1039-2941" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_radio-button.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/65",
    },
    { id: "modal-dialog", name: "Modal dialog", aliases: ["modal"], state: o.COMMUNITY, communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/tree/main/components/Modal" }], implementations: [{ organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Modal/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-feedback-modal--default-story" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/66" },
    { id: "video", name: "Video", aliases: ["media-player"], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/69" },
    { id: "figure", name: "Figure", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/70" },
    { id: "file-input", name: "File input", aliases: ["file-upload"], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=10817%3A61351" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/72" },
    {
     id: "blockquote",
     name: "Blockquote",
     aliases: ["quote", "pull-quote"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-blockquote--default-story", storyTemplate: "@utrecht/components/blockquote/css/story-template.jsx", package: "@utrecht/component-library-css", designTokenPrefixes: ["utrecht.blockquote"] },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/blockquote/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-blockquote--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1349-6340" },
     ],
     preview: "",
     backlog: "https://github.com/nl-design-system/backlog/issues/73",
    },
    { id: "skip-link", name: "Skip link", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/74" },
    { id: "spinner", name: "Spinner", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/75" },
    { id: "avatar", name: "Avatar", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=423-455" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/83" },
    { id: "data-badge", name: "Data badge", aliases: ["text-badge", "tag", "chip"], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/94" },
    { id: "dot-badge", name: "Dot badge", aliases: ["dot-indicator"], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/DotIndicator/src", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-dot-indicator--indicator-on-rectangle" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/98" },
    { id: "card-as-link", name: "Card as link", aliases: ["link-card"], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/101" },
    {
     id: "accordion",
     name: "Accordion",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/README.md" }],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.CSS, package: "@gemeente-denhaag/accordion", implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Accordion/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/docs/css-surfaces-accordion--default-story" },
      { organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1585%3A0" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1261-4784" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_accordion.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/102",
    },
    {
     id: "pagination",
     name: "Pagination",
     aliases: [],
     state: o.TODO,
     communityDocs: [{ organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/tree/main/components/Pagination/README.md" }],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-pagination--default-story" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/blob/main/components/Pagination/src/index.tsx" },
      { organisation: n.DEN_HAAG, type: i.FIGMA, implementation: "https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag?node-id=1673%3A231" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1691-11779" },
     ],
     preview: "",
     backlog: "https://github.com/nl-design-system/backlog/issues/106",
    },
    { id: "variable-heading", name: "Variable Heading", aliases: [], state: o.COMMUNITY, communityDocs: [], implementations: [{ organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-heading--default-story" }], preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg", backlog: "https://github.com/nl-design-system/backlog/issues/114" },
    {
     id: "heading-1",
     name: "Heading 1",
     aliases: ["h1"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-1--default-story", storyTemplate: "@utrecht/components/heading-1/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/114",
    },
    {
     id: "heading-2",
     name: "Heading 2",
     aliases: ["h2"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-2--default-story", storyTemplate: "@utrecht/components/heading-2/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/114",
    },
    {
     id: "heading-3",
     name: "Heading 3",
     aliases: ["h3"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-3--default-story", storyTemplate: "@utrecht/components/heading-3/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/114",
    },
    {
     id: "heading-4",
     name: "Heading 4",
     aliases: ["h4"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-4--default-story", storyTemplate: "@utrecht/components/heading-4/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/114",
    },
    {
     id: "heading-5",
     name: "Heading 5",
     aliases: ["h5"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-5--default-story", storyTemplate: "@utrecht/components/heading-5/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/114",
    },
    {
     id: "heading-6",
     name: "Heading 6",
     aliases: ["h6"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/heading/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-heading-6--default-story", storyTemplate: "@utrecht/components/heading-6/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1039" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_headings.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/114",
    },
    {
     id: "paragraph",
     name: "Paragraph",
     aliases: ["alinea", "text"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-paragraph--default-story", storyTemplate: "@utrecht/components/paragraph/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-paragraph--default-story" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-paragraph--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=150-734" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_paragraph.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/115",
    },
    {
     id: "unordered-list",
     name: "Unordered list",
     aliases: ["ul"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/unordered-list/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-unordered-list--default-story", storyTemplate: "@utrecht/components/unordered-list/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/unordered-list/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-unordered-list--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=828-920" },
     ],
     preview: "",
     backlog: "https://github.com/nl-design-system/backlog/issues/116",
    },
    {
     id: "ordered-list",
     name: "Ordered list",
     aliases: ["ol"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-ordered-list--default-story", storyTemplate: "@utrecht/components/ordered-list/css/story-template.jsx", package: "@utrecht/component-library-css" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/ordered-list/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-ordered-list--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=823-571" },
     ],
     preview: "",
     backlog: "https://github.com/nl-design-system/backlog/issues/117",
    },
    {
     id: "link",
     name: "Link",
     aliases: [],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/link/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-link--default-story" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/link/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-link--default-story" },
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-link--link" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.tsx", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-link--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=153-1056" },
     ],
     preview: "https://raw.githubusercontent.com/nl-design-system/documentatie/assets/component_text-link.svg",
     backlog: "https://github.com/nl-design-system/backlog/issues/118",
    },
    {
     id: "separator",
     name: "Separator",
     aliases: ["divider"],
     state: o.COMMUNITY,
     communityDocs: [
      { organisation: n.DEN_HAAG, type: a.UX, href: "https://github.com/nl-design-system/denhaag/tree/main/components/Divider/README.md" },
      { organisation: n.UTRECHT, type: a.UX, href: "https://github.com/nl-design-system/utrecht/tree/main/components/separator/README.md" },
     ],
     implementations: [
      { organisation: n.DEN_HAAG, type: i.CSS, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.scss", story: "https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-divider--default-story" },
      { organisation: n.DEN_HAAG, type: i.REACT, implementation: "https://github.com/nl-design-system/denhaag/tree/main/components/Divider/src/index.tsx", story: "https://nl-design-system.github.io/denhaag/?path=/story/react-data-display-divider--default-story" },
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/separator/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-separator--default-story" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/separator/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-separator--default-story" },
      { organisation: n.UTRECHT, type: i.WEB_COMPONENT, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/separator/web-component", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-separator--default-story" },
      { organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=843-1098" },
     ],
     preview: "",
     backlog: "https://github.com/nl-design-system/backlog/issues/119",
    },
    { id: "form-field-error-message", name: "Form field error message", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/122" },
    { id: "fieldset", name: "Fieldset", aliases: [], state: o.COMMUNITY, communityDocs: [], implementations: [{ organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/form-fieldset/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-form-fieldset--default-story", storyTemplate: "@utrecht/components/form-fieldset/css/story-template.jsx", package: "@utrecht/component-library-css", designTokenPrefixes: ["utrecht.form-fieldset"] }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/124" },
    { id: "number-input", name: "Number input", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/125" },
    { id: "rich-text-content", name: "Rich text content", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/127" },
    { id: "checkbox-group", name: "Checkbox group", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=954-2226" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/128" },
    { id: "radio-group", name: "Radio group", aliases: ["radio-button-group"], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/129" },
    { id: "password-input", name: "Password input", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/133" },
    {
     id: "strong",
     name: "Strong",
     aliases: ["strong-emphasis"],
     state: o.COMMUNITY,
     communityDocs: [],
     implementations: [
      { organisation: n.UTRECHT, type: i.CSS, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/css", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-emphasis--strong" },
      { organisation: n.UTRECHT, type: i.HTML, implementation: "https://github.com/nl-design-system/utrecht/tree/main/components/emphasis/html", story: "https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-emphasis--strong" },
     ],
     preview: "",
     backlog: "https://github.com/nl-design-system/backlog/issues/138",
    },
    { id: "progress-steps", name: "Progress steps", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/150" },
    { id: "button-group", name: "Button group", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/153" },
    { id: "notification-banner", name: "Notification banner", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/169" },
    { id: "toggletip", name: "Toggletip", aliases: ["tooltip"], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/170" },
    { id: "form-field-option-label", name: "Form field option label", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-3472" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/171" },
    { id: "form-field-checkbox-option", name: "Form field checkbox option", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1031-2917" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/172" },
    { id: "form-field-radio-option", name: "Form field radio option", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1039-2941" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/173" },
    { id: "form-field-description", name: "Form field description", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-924" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/174" },
    { id: "invalid-form-alert", name: "Invalid form alert", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1300-5679" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/175" },
    { id: "form-field", name: "Form field", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=958-1925" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/176" },
    { id: "form-field-label", name: "Form field label", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=851-898" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/177" },
    { id: "text-input-group", name: "Text input group", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/178" },
    { id: "form-field-partial", name: "Form field partial", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/179" },
    { id: "form-field-partial-label", name: "Form field partial label", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/180" },
    { id: "non-modal-dialog", name: "Non modal dialog", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/181" },
    { id: "alert-dialog", name: "Alert dialog", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/182" },
    { id: "data-list", name: "Data list", aliases: [], state: o.TODO, communityDocs: [], implementations: [{ organisation: n.NLDS, type: i.FIGMA, implementation: "https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=1238-4478" }], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/185" },
    { id: "legend", name: "Legend", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/186" },
    { id: "date-input", name: "Date input", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/188" },
    { id: "date-input-group", name: "Date input group", aliases: [], state: o.TODO, communityDocs: [], implementations: [], preview: "", backlog: "https://github.com/nl-design-system/backlog/issues/189" },
   ];
  },
 },
]);
