"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[1510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var m=i.createContext({}),c=function(e){var n=i.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(m.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,v=u["".concat(m,".").concat(d)]||u[d]||p[d]||a;return t?i.createElement(v,r(r({ref:n},s),{},{components:t})):i.createElement(v,r({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2894:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const a={title:"Main navigation",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Main navigation",pagination_label:"Main navigation",description:"UX richtlijnen voor Main navigation component",tags:["Community"]},r=void 0,l={unversionedId:"componenten/Community/main-navigation",id:"componenten/Community/main-navigation",title:"Main navigation",description:"UX richtlijnen voor Main navigation component",source:"@site/docs/componenten/Community/main-navigation.mdx",sourceDirName:"componenten/Community",slug:"/componenten/Community/main-navigation",permalink:"/docs/componenten/Community/main-navigation",draft:!1,editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/Community/main-navigation.mdx",tags:[{label:"Community",permalink:"/docs/tags/community"}],version:"current",frontMatter:{title:"Main navigation",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Main navigation",pagination_label:"Main navigation",description:"UX richtlijnen voor Main navigation component",tags:["Community"]},sidebar:"componenten",previous:{title:"Link",permalink:"/docs/componenten/Community/link"},next:{title:"Modal dialog",permalink:"/docs/componenten/Community/modal-dialog"}},m={},c=[{value:"Alias",id:"alias",level:2},{value:"Component status",id:"component-status",level:2},{value:"Implementaties",id:"implementaties",level:2},{value:"CSS",id:"css",level:3},{value:"Gemeente Utrecht",id:"gemeente-utrecht",level:4},{value:"Levende Backlog",id:"levende-backlog",level:2}],s={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"main-navigation"},"Main navigation"),(0,o.kt)("h2",{id:"alias"},"Alias"),(0,o.kt)("p",null,'Main navigation is ook bekend als "top-nav"'),(0,o.kt)("h2",{id:"component-status"},"Component status"),(0,o.kt)("p",null,'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'),(0,o.kt)("h2",{id:"implementaties"},"Implementaties"),(0,o.kt)("h3",{id:"css"},"CSS"),(0,o.kt)("h4",{id:"gemeente-utrecht"},"Gemeente Utrecht"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementatie: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/navigatie%20topnav/css"},"Main navigation CSS implementatie van Gemeente Utrecht")),(0,o.kt)("li",{parentName:"ul"},"Storybook: ",(0,o.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-topnav--default-story"},"Main navigation CSS storybook van Gemeente Utrecht"))),(0,o.kt)("h2",{id:"levende-backlog"},"Levende Backlog"),(0,o.kt)("p",null,"De Main navigation component staat bij NL Design System in de ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/backlog/issues/52"},"levende backlog"),", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"))}p.isMDXComponent=!0}}]);