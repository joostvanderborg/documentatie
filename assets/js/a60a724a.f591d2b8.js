"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[8613],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){return function(n){var t=d(n.components);return o.createElement(e,i({},n,{components:t}))}},d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},b=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=d(t),p=r,b=s["".concat(l,".").concat(p)]||s[p]||u[p]||i;return t?o.createElement(b,a(a({ref:n},c),{},{components:t})):o.createElement(b,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=b;var a={};for(var m in n)hasOwnProperty.call(n,m)&&(a[m]=n[m]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3403:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],a={title:"Dropdown listbox",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Dropdown listbox",pagination_label:"Dropdown listbox",description:"UX richtlijnen voor Dropdown listbox component",tags:["Community"]},m=void 0,c={unversionedId:"componenten/Community/dropdown-listbox",id:"componenten/Community/dropdown-listbox",title:"Dropdown listbox",description:"UX richtlijnen voor Dropdown listbox component",source:"@site/docs/componenten/Community/dropdown-listbox.mdx",sourceDirName:"componenten/Community",slug:"/componenten/Community/dropdown-listbox",permalink:"/docs/componenten/Community/dropdown-listbox",editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/Community/dropdown-listbox.mdx",tags:[{label:"Community",permalink:"/docs/tags/community"}],version:"current",frontMatter:{title:"Dropdown listbox",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Dropdown listbox",pagination_label:"Dropdown listbox",description:"UX richtlijnen voor Dropdown listbox component",tags:["Community"]},sidebar:"componenten",previous:{title:"Date picker",permalink:"/docs/componenten/Community/date-picker"},next:{title:"Favicon",permalink:"/docs/componenten/Community/favicon"}},s=[{value:"CSS",id:"css",children:[{value:"Gemeente Utrecht",id:"gemeente-utrecht",children:[],level:3}],level:2},{value:"Figma",id:"figma",children:[{value:"NL Design System",id:"nl-design-system",children:[],level:3}],level:2},{value:"React",id:"react",children:[{value:"Gemeente Den Haag",id:"gemeente-den-haag",children:[],level:3}],level:2},{value:"Levende Backlog",id:"levende-backlog",children:[],level:2}],d={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.mdx)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"dropdown-listbox"},"Dropdown listbox"),(0,i.mdx)("p",null,'Ook bekend als "select"'),(0,i.mdx)("p",null,'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'),(0,i.mdx)("h2",{id:"css"},"CSS"),(0,i.mdx)("h3",{id:"gemeente-utrecht"},"Gemeente Utrecht"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/select"},"Dropdown listbox CSS implementatie van Gemeente Utrecht")),(0,i.mdx)("li",{parentName:"ul"},"Storybook: ",(0,i.mdx)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-select--default-story"},"Dropdown listbox CSS storybook van Gemeente Utrecht"))),(0,i.mdx)("h2",{id:"figma"},"Figma"),(0,i.mdx)("h3",{id:"nl-design-system"},"NL Design System"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,i.mdx)("a",{parentName:"li",href:"https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=264%3A102"},"Dropdown listbox Figma implementatie van NL Design System"))),(0,i.mdx)("h2",{id:"react"},"React"),(0,i.mdx)("h3",{id:"gemeente-den-haag"},"Gemeente Den Haag"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/nl-design-system/denhaag/blob/main/components/Select/src/index.tsx"},"Dropdown listbox React implementatie van Gemeente Den Haag")),(0,i.mdx)("li",{parentName:"ul"},"Storybook: (nog) geen story beschikbaar")),(0,i.mdx)("h2",{id:"levende-backlog"},"Levende Backlog"),(0,i.mdx)("p",null,"De Dropdown listbox component staat bij NL Design System in de ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/nl-design-system/backlog/issues/34"},"levende backlog"),", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"))}p.isMDXComponent=!0}}]);