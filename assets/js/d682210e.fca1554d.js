"use strict";(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[1421],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>u});var n=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,n,a=function(e,t){if(null==e)return{};var s,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)s=i[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},c=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=m(s),p=a,u=d["".concat(l,".").concat(p)]||d[p]||g[p]||i;return s?n.createElement(u,r(r({ref:t},c),{},{components:s})):n.createElement(u,r({ref:t},c))}));function u(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=s.length,r=new Array(i);r[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,r[1]=o;for(var m=2;m<i;m++)r[m]=s[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},8861:(e,t,s)=>{s.d(t,{Z:()=>n});var n=(0,s(30853).Z)("user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]])},88263:(e,t,s)=>{s.d(t,{L:()=>c});var n=s(87462),a=s(67294),i=s(86010);const r={"session-table":"session-table_UjSe","session-table__row":"session-table__row_Q8zO","session-table__time":"session-table__time_X4_g","session-table__speakers":"session-table__speakers_zhez","session-table__speaker":"session-table__speaker_Ghbm",speaker__icon:"speaker__icon_kFX7",speaker__organisation:"speaker__organisation_bGt9"};var o=s(65663),l=s(8861);const m=e=>{let{name:t,organisation:s}=e;return a.createElement(o.nv,{className:(0,i.Z)(r["session-table__speaker"],r.speaker)},a.createElement(o.JO,{role:"presentational",className:r.speaker__icon},a.createElement(l.Z,null)),a.createElement("span",{className:(0,i.Z)(r.speaker__name)},t),a.createElement("br",null),a.createElement("span",{className:(0,i.Z)(r.speaker__organisation)},s))},c=e=>{let{lang:t,sessions:s,className:l,...c}=e;return a.createElement(o.iA,(0,n.Z)({className:(0,i.Z)(r["session-table"],l)},c),a.createElement(o.xD,null,a.createElement(o.SC,{className:(0,i.Z)(r["session-table__row"])},a.createElement(o.xs,null,"nl-NL"===t?"Tijd":"Time"),a.createElement(o.xs,null,"nl-NL"===t?"Spreker":"Speaker"),a.createElement(o.xs,null,"nl-NL"===t?"Onderwerp":"Subject"),"nl-NL"===t&&a.createElement(o.xs,null,"Taal"))),a.createElement(o.RM,null,s.map((e=>{let{isoDateTime:s,speakers:n,subject:l,singupLink:c,language:d}=e;return a.createElement(o.SC,{className:(0,i.Z)(r["session-table__row"])},a.createElement(o.pj,{className:(0,i.Z)(r["session-table__time"])},a.createElement("time",{dateTime:s},new Intl.DateTimeFormat(t,{hour:"numeric",minute:"numeric",timeZone:"Europe/Amsterdam",timeZoneName:"nl-NL"!==t?"short":void 0}).format(new Date(s)))),a.createElement(o.pj,null,a.createElement("div",{className:(0,i.Z)(r["session-table__speakers"])},n.map((e=>a.createElement(m,e))))),a.createElement(o.pj,{className:(0,i.Z)(r["session-table__subject"])},a.createElement(o.rU,{href:c},l)),"nl-NL"===t&&a.createElement(o.pj,{className:(0,i.Z)(r["session-table__language"])},a.createElement("abbr",{title:d.description},d.abbr)))}))))}},10920:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var n=s(87462),a=(s(67294),s(3905)),i=s(65663),r=s(88263);const o={title:"Timetable",description:"Timetable for all English talks of the Design Systems Week 2023",hide_table_of_contents:!0,hide_title:!0,sidebar_label:"Timetable",pagination_label:"Timetable",slug:"/events/design-systems-week-2023/en/timetable"},l=void 0,m={unversionedId:"project/events/design-systems-week-2023/english/timetable",id:"project/events/design-systems-week-2023/english/timetable",title:"Timetable",description:"Timetable for all English talks of the Design Systems Week 2023",source:"@site/docs/project/events/design-systems-week-2023/english/2-timetable.md",sourceDirName:"project/events/design-systems-week-2023/english",slug:"/events/design-systems-week-2023/en/timetable",permalink:"/events/design-systems-week-2023/en/timetable",draft:!1,editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/project/events/design-systems-week-2023/english/2-timetable.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Timetable",description:"Timetable for all English talks of the Design Systems Week 2023",hide_table_of_contents:!0,hide_title:!0,sidebar_label:"Timetable",pagination_label:"Timetable",slug:"/events/design-systems-week-2023/en/timetable"},sidebar:"project",previous:{title:"Program",permalink:"/events/design-systems-week-2023/en/program"},next:{title:"Design Systems Week 2022",permalink:"/events/design-systems-week-2022"}},c={},d=[{value:"Monday October 2th",id:"monday-october-2th",level:2},{value:"Wednesday October 4rd",id:"wednesday-october-4rd",level:2},{value:"Thursday October 5th",id:"thursday-october-5th",level:2},{value:"Organisation",id:"organisation",level:2},{value:"Code of Conduct",id:"code-of-conduct",level:2}],g={toc:d},p="wrapper";function u(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,n.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{lang:"en"},(0,a.kt)("h1",{id:"design-systems-week-timetable"},"Design Systems Week Timetable"),(0,a.kt)(i.nv,{lead:!0,mdxType:"Paragraph"},"From 2 to 5 October NL Design System organises the third edition of Design Systems Week. Speakers from various organisations will join us for short talks about the how and why of design systems. This year there will be talks both in Dutch and English. For convenience we also have a ",(0,a.kt)(i.rU,{href:"/events/design-systems-week-2023/en/program",mdxType:"Link"},"program of all talks that will be in English"),"."),(0,a.kt)(i.nv,{mdxType:"Paragraph"},"All sessions can be joined online for free. You will receive a link after sign-up. This link is valid for all talks during the week. Each talk will take about 30 minutes, including time for questions."),(0,a.kt)(i.nv,{mdxType:"Paragraph"},"These are all timeslots with talks in English, ",(0,a.kt)(i.rU,{href:"/events/design-systems-week-2023/tijdschema",hrefLang:"nl-NL",mdxType:"Link"},"the Dutch timetable")," shows the complete Design Systems Week 2023 timetable."),(0,a.kt)("h2",{id:"monday-october-2th"},"Monday October 2th"),(0,a.kt)(r.L,{lang:"en-EN",sessions:[{isoDateTime:"2023-10-02T14:30:00.000Z",speakers:[{name:"Marco-Christian Krenn",organisation:"Token Studio"},{name:"Jan Six",organisation:"GitHub"}],subject:"The future of design decisions",singupLink:"https://www.gebruikercentraal.nl/agenda/the-future-of-design-decisions/",language:{abbr:"EN",description:"English"}}],mdxType:"SessionTable"}),(0,a.kt)("h2",{id:"wednesday-october-4rd"},"Wednesday October 4rd"),(0,a.kt)(r.L,{lang:"en-EN",sessions:[{isoDateTime:"2023-10-04T09:00:00.000Z",speakers:[{name:"Mu-An Chiou",organisation:"Taiwan Design System"}],subject:"Design systems as public infrastructure",singupLink:"https://www.gebruikercentraal.nl/agenda/design-systems-as-public-infrastructure",language:{abbr:"EN",description:"English"}},{isoDateTime:"2023-10-04T11:00:00.000Z",speakers:[{name:"Joe Lanman",organisation:"GOV.UK "}],subject:"GOV.UK Prototype Kit",singupLink:"https://www.gebruikercentraal.nl/agenda/the-gov-uk-prototype-kit/",language:{abbr:"EN",description:"English"}},{isoDateTime:"2023-10-04T13:00:00.000Z",speakers:[{name:"Aleksandr Beliaev",organisation:"Estland Design System"}],subject:"Estonia Design System",singupLink:"https://www.gebruikercentraal.nl/agenda/estland-design-system/",language:{abbr:"EN",description:"English"}}],mdxType:"SessionTable"}),(0,a.kt)("h2",{id:"thursday-october-5th"},"Thursday October 5th"),(0,a.kt)(r.L,{lang:"en-EN",sessions:[{isoDateTime:"2023-10-05T11:00:00.000Z",speakers:[{name:"David Darnes",organisation:"Nord Health "}],subject:"Design Systems & Web Components: what works & what doesn\u2019t",singupLink:"https://www.gebruikercentraal.nl/agenda/design-systems-web-components-what-works-what-doesnt/",language:{abbr:"EN",description:"English"}},{isoDateTime:"2023-10-05T13:00:00.000Z",speakers:[{name:"Inayaili L\xe9on",organisation:"GitHub"}],subject:"DesignOps: designing the API of design teams",singupLink:"https://www.gebruikercentraal.nl/agenda/designops-designing-the-api-of-design-teams/",language:{abbr:"EN",description:"English"}}],mdxType:"SessionTable"})),(0,a.kt)("h2",{id:"organisation"},"Organisation"),(0,a.kt)("p",null,"Design Systems Week is organised by the NL Design System core team, thanks to the support of the Ministry of the Interior and Kingdom Relations (BZK) and ",(0,a.kt)(i.rU,{href:"https://international.gebruikercentraal.nl",mdxType:"Link"},"User Needs First"),". All sessions can also be found there ",(0,a.kt)(i.rU,{href:"https://international.gebruikercentraal.nl/design-systems-week-2023/",mdxType:"Link"},"Design Systems Week 2023")),(0,a.kt)("h2",{id:"code-of-conduct"},"Code of Conduct"),(0,a.kt)("p",null,"All participants of Design Systems Week are expected to abide by our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/.github/blob/main/CODE_OF_CONDUCT.md"},"NL Design System Code of Conduct"),". By signing up for one or more sessions you've agreed to these terms."))}u.isMDXComponent=!0}}]);