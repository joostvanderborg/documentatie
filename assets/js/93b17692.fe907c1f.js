"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[3525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return n?i.createElement(f,r(r({ref:t},m),{},{components:n})):i.createElement(f,r({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const a={title:"Notification",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Notification",pagination_label:"Notification",description:"UX richtlijnen voor Notification component",slug:"/notification",tags:["Community"]},r=void 0,l={unversionedId:"componenten/build/notification",id:"componenten/build/notification",title:"Notification",description:"UX richtlijnen voor Notification component",source:"@site/docs/componenten/build/notification.mdx",sourceDirName:"componenten/build",slug:"/notification",permalink:"/notification",draft:!1,editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/notification.mdx",tags:[{label:"Community",permalink:"/tags/community"}],version:"current",frontMatter:{title:"Notification",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Notification",pagination_label:"Notification",description:"UX richtlijnen voor Notification component",slug:"/notification",tags:["Community"]},sidebar:"componenten",previous:{title:"Modal dialog",permalink:"/modal-dialog"},next:{title:"Numeric form input",permalink:"/numeric-form-input"}},c={},s=[{value:"Implementaties",id:"implementaties",level:2},{value:"CSS",id:"css",level:3},{value:"Gemeente Den Haag",id:"gemeente-den-haag",level:4},{value:"Figma",id:"figma",level:3},{value:"NL Design System",id:"nl-design-system",level:4},{value:"Levende Backlog",id:"levende-backlog",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notification"},"Notification"),(0,o.kt)("p",null,'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'),(0,o.kt)("h2",{id:"implementaties"},"Implementaties"),(0,o.kt)("h3",{id:"css"},"CSS"),(0,o.kt)("h4",{id:"gemeente-den-haag"},"Gemeente Den Haag"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementatie: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/denhaag/blob/main/components/Alert/src/index.scss"},"Notification CSS implementatie van Gemeente Den Haag")),(0,o.kt)("li",{parentName:"ul"},"Storybook: ",(0,o.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/denhaag/?path=/story/css-data-display-alert--error"},"Notification CSS storybook van Gemeente Den Haag"))),(0,o.kt)("h3",{id:"figma"},"Figma"),(0,o.kt)("h4",{id:"nl-design-system"},"NL Design System"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementatie: ",(0,o.kt)("a",{parentName:"li",href:"https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=102%3A8"},"Notification Figma implementatie van NL Design System"))),(0,o.kt)("h2",{id:"levende-backlog"},"Levende Backlog"),(0,o.kt)("p",null,"De Notification component staat bij NL Design System in de ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/backlog/issues/9"},"levende backlog"),", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"))}p.isMDXComponent=!0}}]);