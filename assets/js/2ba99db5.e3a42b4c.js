"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[8176],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){return function(n){var t=d(n.components);return i.createElement(e,o({},n,{components:t}))}},d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,h=s["".concat(a,".").concat(u)]||s[u]||p[u]||o;return t?i.createElement(h,m(m({ref:n},c),{},{components:t})):i.createElement(h,m({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=h;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,a[1]=m;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1419:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var i=t(7462),r=t(3366),o=(t(7294),t(3905)),a=["components"],m={title:"Link",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Link",pagination_label:"Link",description:"UX richtlijnen voor Link component",tags:["Community"]},l=void 0,c={unversionedId:"componenten/Community/link",id:"componenten/Community/link",title:"Link",description:"UX richtlijnen voor Link component",source:"@site/docs/componenten/Community/link.mdx",sourceDirName:"componenten/Community",slug:"/componenten/Community/link",permalink:"/docs/componenten/Community/link",editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/Community/link.mdx",tags:[{label:"Community",permalink:"/docs/tags/community"}],version:"current",frontMatter:{title:"Link",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Link",pagination_label:"Link",description:"UX richtlijnen voor Link component",tags:["Community"]},sidebar:"componenten",previous:{title:"Label",permalink:"/docs/componenten/Community/label"},next:{title:"Main navigation",permalink:"/docs/componenten/Community/main-navigation"}},s=[{value:"CSS",id:"css",children:[{value:"Gemeente Utrecht",id:"gemeente-utrecht",children:[],level:3},{value:"Gemeente Den Haag",id:"gemeente-den-haag",children:[],level:3}],level:2},{value:"HTML",id:"html",children:[{value:"Gemeente Utrecht",id:"gemeente-utrecht-1",children:[],level:3}],level:2},{value:"React",id:"react",children:[{value:"Gemeente Den Haag",id:"gemeente-den-haag-1",children:[],level:3}],level:2},{value:"Figma",id:"figma",children:[{value:"NL Design System",id:"nl-design-system",children:[],level:3}],level:2},{value:"Levende Backlog",id:"levende-backlog",children:[],level:2}],d={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.mdx)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"link"},"Link"),(0,o.mdx)("p",null,'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'),(0,o.mdx)("h2",{id:"css"},"CSS"),(0,o.mdx)("h3",{id:"gemeente-utrecht"},"Gemeente Utrecht"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/link/css"},"Link CSS implementatie van Gemeente Utrecht")),(0,o.mdx)("li",{parentName:"ul"},"Storybook: ",(0,o.mdx)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-link--default-story"},"Link CSS storybook van Gemeente Utrecht"))),(0,o.mdx)("h3",{id:"gemeente-den-haag"},"Gemeente Den Haag"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.scss"},"Link CSS implementatie van Gemeente Den Haag")),(0,o.mdx)("li",{parentName:"ul"},"Storybook: ",(0,o.mdx)("a",{parentName:"li",href:"https://nl-design-system.github.io/denhaag/?path=/story/css-navigation-link--link"},"Link CSS storybook van Gemeente Den Haag"))),(0,o.mdx)("h2",{id:"html"},"HTML"),(0,o.mdx)("h3",{id:"gemeente-utrecht-1"},"Gemeente Utrecht"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/link/html"},"Link HTML implementatie van Gemeente Utrecht")),(0,o.mdx)("li",{parentName:"ul"},"Storybook: ",(0,o.mdx)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-link--default-story"},"Link HTML storybook van Gemeente Utrecht"))),(0,o.mdx)("h2",{id:"react"},"React"),(0,o.mdx)("h3",{id:"gemeente-den-haag-1"},"Gemeente Den Haag"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/nl-design-system/denhaag/tree/main/components/Link/src/index.tsx"},"Link React implementatie van Gemeente Den Haag")),(0,o.mdx)("li",{parentName:"ul"},"Storybook: ",(0,o.mdx)("a",{parentName:"li",href:"https://nl-design-system.github.io/denhaag/?path=/story/react-navigation-link--default-story"},"Link React storybook van Gemeente Den Haag"))),(0,o.mdx)("h2",{id:"figma"},"Figma"),(0,o.mdx)("h3",{id:"nl-design-system"},"NL Design System"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Implementatie: ",(0,o.mdx)("a",{parentName:"li",href:"https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=2500%3A3787"},"Link Figma implementatie van NL Design System"))),(0,o.mdx)("h2",{id:"levende-backlog"},"Levende Backlog"),(0,o.mdx)("p",null,"De Link component staat bij NL Design System in de ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/nl-design-system/backlog/issues/118"},"levende backlog"),", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"))}u.isMDXComponent=!0}}]);