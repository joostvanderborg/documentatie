"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[3898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.createContext({}),s=function(e){var t=i.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=s(n),d=a,h=c["".concat(m,".").concat(d)]||c[d]||u[d]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={title:"Text input",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Text input",pagination_label:"Text input",description:"UX richtlijnen voor Text input component",tags:["Community"]},l=void 0,r={unversionedId:"componenten/Community/text-input",id:"componenten/Community/text-input",title:"Text input",description:"UX richtlijnen voor Text input component",source:"@site/docs/componenten/Community/text-input.mdx",sourceDirName:"componenten/Community",slug:"/componenten/Community/text-input",permalink:"/docs/componenten/Community/text-input",draft:!1,editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/Community/text-input.mdx",tags:[{label:"Community",permalink:"/docs/tags/community"}],version:"current",frontMatter:{title:"Text input",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Text input",pagination_label:"Text input",description:"UX richtlijnen voor Text input component",tags:["Community"]},sidebar:"componenten",previous:{title:"Textarea",permalink:"/docs/componenten/Community/text-area"},next:{title:"Unordered list",permalink:"/docs/componenten/Community/unordered-list"}},m={},s=[{value:"Alias",id:"alias",level:2},{value:"Component status",id:"component-status",level:2},{value:"Implementaties",id:"implementaties",level:2},{value:"React",id:"react",level:3},{value:"Gemeente Den Haag",id:"gemeente-den-haag",level:4},{value:"CSS",id:"css",level:3},{value:"Gemeente Utrecht",id:"gemeente-utrecht",level:4},{value:"Gemeente Den Haag",id:"gemeente-den-haag-1",level:4},{value:"Figma",id:"figma",level:3},{value:"Gemeente Den Haag",id:"gemeente-den-haag-2",level:4},{value:"Gemeente Utrecht",id:"gemeente-utrecht-1",level:4},{value:"NL Design System",id:"nl-design-system",level:4},{value:"HTML",id:"html",level:3},{value:"Gemeente Utrecht",id:"gemeente-utrecht-2",level:4},{value:"Web Component",id:"web-component",level:3},{value:"Gemeente Utrecht",id:"gemeente-utrecht-3",level:4},{value:"Levende Backlog",id:"levende-backlog",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text-input"},"Text input"),(0,a.kt)("h2",{id:"alias"},"Alias"),(0,a.kt)("p",null,'Text input is ook bekend als "text-field"'),(0,a.kt)("h2",{id:"component-status"},"Component status"),(0,a.kt)("p",null,'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'),(0,a.kt)("h2",{id:"implementaties"},"Implementaties"),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("h4",{id:"gemeente-den-haag"},"Gemeente Den Haag"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.tsx"},"Text input React implementatie van Gemeente Den Haag")),(0,a.kt)("li",{parentName:"ul"},"Storybook: ",(0,a.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/denhaag/?path=/story/react-input-textfield--default-story"},"Text input React storybook van Gemeente Den Haag"))),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("h4",{id:"gemeente-utrecht"},"Gemeente Utrecht"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/textbox/css"},"Text input CSS implementatie van Gemeente Utrecht")),(0,a.kt)("li",{parentName:"ul"},"Storybook: ",(0,a.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-textbox--default-story"},"Text input CSS storybook van Gemeente Utrecht"))),(0,a.kt)("h4",{id:"gemeente-den-haag-1"},"Gemeente Den Haag"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/denhaag/blob/main/components/TextField/src/index.scss"},"Text input CSS implementatie van Gemeente Den Haag")),(0,a.kt)("li",{parentName:"ul"},"Storybook: (nog) geen story beschikbaar")),(0,a.kt)("h3",{id:"figma"},"Figma"),(0,a.kt)("h4",{id:"gemeente-den-haag-2"},"Gemeente Den Haag"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://www.figma.com/file/JpoY3waVoQGlLQzQXTL9nn/Design-System---Gemeente-Den-Haag"},"Text input Figma implementatie van Gemeente Den Haag"))),(0,a.kt)("h4",{id:"gemeente-utrecht-1"},"Gemeente Utrecht"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://www.figma.com/file/msb3CfQBefPoruqNQ968Zh/Utrecht-Design-System?node-id=302%3A3975"},"Text input Figma implementatie van Gemeente Utrecht"))),(0,a.kt)("h4",{id:"nl-design-system"},"NL Design System"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://www.figma.com/file/gqQhMe3gj4YlC6JrZOWiCv/?node-id=0%3A1"},"Text input Figma implementatie van NL Design System"))),(0,a.kt)("h3",{id:"html"},"HTML"),(0,a.kt)("h4",{id:"gemeente-utrecht-2"},"Gemeente Utrecht"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/textbox/html"},"Text input HTML implementatie van Gemeente Utrecht")),(0,a.kt)("li",{parentName:"ul"},"Storybook: ",(0,a.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-textbox--default-story"},"Text input HTML storybook van Gemeente Utrecht"))),(0,a.kt)("h3",{id:"web-component"},"Web Component"),(0,a.kt)("h4",{id:"gemeente-utrecht-3"},"Gemeente Utrecht"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implementatie: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/textbox/web-component"},"Text input Web Component implementatie van Gemeente Utrecht")),(0,a.kt)("li",{parentName:"ul"},"Storybook: ",(0,a.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-textbox--default-story"},"Text input Web Component storybook van Gemeente Utrecht"))),(0,a.kt)("h2",{id:"levende-backlog"},"Levende Backlog"),(0,a.kt)("p",null,"De Text input component staat bij NL Design System in de ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/backlog/issues/5"},"levende backlog"),", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"))}u.isMDXComponent=!0}}]);