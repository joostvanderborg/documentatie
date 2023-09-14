"use strict";(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[503],{92909:(e,a,r)=>{r.r(a),r.d(a,{Blog:()=>f,BlogCard:()=>N,default:()=>y});var t=r(87462),l=r(67294),c=r(28084),n=r(1761),s=r(25935),d=r(23770),m=r(52263),o=r(39960),_=r(62682),u=r(31817),i=r(86010);const g="blog-card_awL1",b="blog-card__header-link_ApDH",p="blog-card__badge_XSMo",h="blog-card__badge--author_Jsks",v="blog-card__badge--date_qW95";var E=r(30853),Z=(0,E.Z)("user","IconUser",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2",key:"svg-1"}]]),k=(0,E.Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]]);const N=e=>{let{uuid:a,creator:r,title:t,content:c,headingLevel:d,isoDate:m}=e;return l.createElement(u.Zb,{key:a,appearance:"large",className:g},l.createElement(u.aY,null,l.createElement(n.X6,{level:d},l.createElement(o.Z,{to:`/project/blog/${a}`,className:(0,i.Z)("utrecht-link",b)},t)),l.createElement(n.pu,null,(0,s.ZP)(c)),l.createElement(n.k,null,l.createElement(n.Ou,{className:(0,i.Z)(p,h)},l.createElement(n.JO,{role:"presentational"},l.createElement(Z,null)),l.createElement("span",{className:"visually-hidden"},"auteur:"),r),l.createElement(n.Ou,{className:(0,i.Z)(p,v)},l.createElement(n.JO,{role:"presentational"},l.createElement(k,null)),l.createElement("span",{className:"visually-hidden"},"publicatie datum:"),l.createElement("time",{dateTime:m},new Intl.DateTimeFormat("nl-NL").format(new Date(m)))))))},f=()=>{const e=(0,c.ZP)()["rss-blog"].default.blogItems;console.log(e);const{siteConfig:a}=(0,m.Z)();return l.createElement(d.Z,{title:`${a.title} - blog overzicht`},l.createElement("div",{className:(0,i.Z)("container container--narrow padding-top--md padding-bottom--lg")},l.createElement(_.O,{breadcrumbs:[{label:"Project",href:"/project"},{label:"Blog"}]}),l.createElement(u.um,{appearance:"large"},e.map((e=>l.createElement(N,(0,t.Z)({},e,{key:e.uuid,headingLevel:2})))))))},y=f},62682:(e,a,r)=>{r.d(a,{O:()=>E});var t=r(67294);const l="breadcrumbsContainer_UZbi",c="breadcrumbs__73z",n="breadcrumbs--mobile_QwgF",s="breadcrumbs--desktop_v9Xv",d="breadcrumbs__link_Zmt4",m="breadcrumbs__item_dNFI",o="breadcrumbs__item--last_XCB6",_="breadcrumbs__separator_Lhmz";var u=r(86010),i=r(95999),g=r(39960),b=r(70177),p=r(21209),h=r(44996),v=r(76775);const E=e=>{let{breadcrumbs:a=[],className:r}=e;const E=(0,h.Z)("/"),{pathname:Z}=(0,v.TH)(),k={href:E,label:"Home"},N=a.length>2&&a[a.length-2]||k,f=N.href!==Z?N:k,y=[k,...a];return t.createElement("nav",{className:(0,u.Z)(r,l),"aria-label":(0,i.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},t.createElement("ul",{className:(0,u.Z)(c,s),itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},y.map(((e,a,r)=>{let{href:l,label:c}=e;const n=r.length-1===a;return t.createElement(t.Fragment,{key:c},t.createElement("li",{className:(0,u.Z)(m,n&&o)},n?c:t.createElement(g.Z,{className:(0,u.Z)(d,"utrecht-link"),href:l},c)),!n&&t.createElement(b.Z,{className:(0,u.Z)(_)}))}))),t.createElement("div",{className:(0,u.Z)(c,n)},t.createElement(p.Z,null),t.createElement(g.Z,{className:(0,u.Z)(d,"utrecht-link"),href:f.href},f.label)))}},31817:(e,a,r)=>{r.d(a,{Zb:()=>o,aY:()=>m,um:()=>_,wu:()=>d});var t=r(87462),l=r(67294),c=r(86010),n=r(1761);const s={cardgroup:"cardgroup_0VVt","cardgroup--small":"cardgroup--small_BDzz","cardgroup--medium":"cardgroup--medium_xS6r","cardgroup--large":"cardgroup--large_Tjo8",cardgroup__card:"cardgroup__card_emnt","cardgroup__card--small":"cardgroup__card--small_bxfC","cardgroup__card--medium":"cardgroup__card--medium_xiP2","cardgroup__card--large":"cardgroup__card--large_PGe3",card__link:"card__link_FqMs",card__illustration:"card__illustration_MVXv","card__illustration--background":"card__illustration--background_cTcZ",card__content:"card__content_LYKG"},d=e=>{let{background:a,children:r,className:n,...d}=e;return l.createElement("div",(0,t.Z)({className:(0,c.Z)(s.card__illustration,a&&s["card__illustration--background"],n)},d),r)},m=e=>l.createElement("div",(0,t.Z)({className:(0,c.Z)(s.card__content)},e)),o=e=>{let{href:a,appearance:r,className:t,component:d="div",children:m}=e;const o=e=>"article"===d?l.createElement("article",e):"section"===d?l.createElement("section",e):l.createElement("div",e);return l.createElement(o,{className:(0,c.Z)(s.cardgroup__card,s[`cardgroup__card--${r}`],t)},a?l.createElement(n.rU,{href:a,boxContent:!0,className:(0,c.Z)(s.card__link)},m):l.createElement(l.Fragment,null,m))},_=e=>{let{appearance:a="medium",children:r}=e;return l.createElement("div",{className:(0,c.Z)(s.cardgroup,s[`cardgroup--${a}`])},r)}}}]);