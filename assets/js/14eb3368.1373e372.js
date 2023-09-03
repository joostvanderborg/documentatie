"use strict";(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[9817],{70177:(e,t,a)=>{a.d(t,{Z:()=>n});var n=(0,a(30853).Z)("slash","IconSlash",[["path",{d:"M17 5l-10 14",key:"svg-0"}]])},4966:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(67294),i=a(95999),l=a(86010),s=a(39960);function c(e){const{permalink:t,title:a,subLabel:n,isNext:i}=e;return r.createElement(s.Z,{className:(0,l.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}function o(e){const{previous:t,next:a}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(c,(0,n.Z)({},t,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&r.createElement(c,(0,n.Z)({},a,{subLabel:r.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},44364:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),i=a(95999),l=a(35281),s=a(74477);function c(e){let{className:t}=e;const a=(0,s.E)();return a.badge?n.createElement("span",{className:(0,r.Z)(t,l.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}},23120:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(67294),r=a(86010),i=a(52263),l=a(39960),s=a(95999),c=a(80143),o=a(35281),m=a(60373),d=a(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(l.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,i.Z)(),{pluginId:s}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(s),{latestDocSuggestion:u,latestVersionSuggestion:v}=(0,c.Jo)(s),g=u??(p=v).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:v.label,to:g.path,onClick:()=>d(v.name)})))}function g(e){let{className:t}=e;const a=(0,d.E)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},92503:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),i=a(86010),l=a(95999),s=a(86668),c=a(39960);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:a,...m}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();if("h1"===t||!a)return r.createElement(t,(0,n.Z)({},m,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:a});return r.createElement(t,(0,n.Z)({},m,{className:(0,i.Z)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:a}),m.children,r.createElement(c.Z,{className:"hash-link",to:`#${a}`,"aria-label":u,title:u},"\u200b"))}},28027:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(86010),i=a(35281),l=a(52802),s=a(39960),c=a(95999),o=a(76775);const m={breadcrumbsContainer:"breadcrumbsContainer_Alpn",breadcrumbs:"breadcrumbs_H22S","breadcrumbs--mobile":"breadcrumbs--mobile_sHXU","breadcrumbs--desktop":"breadcrumbs--desktop_DWrM",breadcrumbs__link:"breadcrumbs__link_EbRY",breadcrumbs__item:"breadcrumbs__item_iEhC","breadcrumbs__item--last":"breadcrumbs__item--last_oZrl",breadcrumbs__separator:"breadcrumbs__separator_ywif"};var d=a(44996),u=a(70177),b=a(21209);function h(){const e=(0,l.s1)()||[],t=(0,d.Z)("/"),{pathname:a}=(0,o.TH)(),h={href:t,label:"Home"},v=[h,...e],g=v.length>2&&v[v.length-2]||h,p=g.href!==a?g:h;return v?n.createElement("nav",{className:(0,r.Z)(i.k.docs.docBreadcrumbs,m.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:(0,r.Z)(m.breadcrumbs,m["breadcrumbs--desktop"]),itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},null==v?void 0:v.map(((e,t,a)=>{let{href:i,label:l}=e;const c=a.length-1===t;return n.createElement(n.Fragment,{key:l},n.createElement("li",{className:(0,r.Z)(m.breadcrumbs__item,c&&m["breadcrumbs__item--last"])},c?l:n.createElement(s.Z,{className:(0,r.Z)(m.breadcrumbs__link,"utrecht-link"),href:i},l)),!c&&n.createElement(u.Z,{className:(0,r.Z)(m.breadcrumbs__separator)}))}))),n.createElement("div",{className:(0,r.Z)(m.breadcrumbs,m["breadcrumbs--mobile"])},n.createElement(b.Z,null),n.createElement(s.Z,{className:(0,r.Z)(m.breadcrumbs__link,"utrecht-link"),href:p.href},p.label))):null}},50306:(e,t,a)=>{a.r(t),a.d(t,{default:()=>T});var n=a(67294),r=a(10833),i=a(52802),l=a(44996),s=a(86010),c=a(39960),o=a(95999);const m={card:"card_l9fv",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function d(e){let{href:t,icon:a="",title:r,description:i,linkDescription:l}=e;return n.createElement("div",{className:(0,s.Z)("card",m.card)},n.createElement("h2",{className:(0,s.Z)(m.cardTitle),title:r},a," ",r),i&&n.createElement("p",{className:(0,s.Z)(m.cardDescription),title:i},i),n.createElement(c.Z,{href:t,className:(0,s.Z)(m.cardLink)},l))}function u(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(d,{href:a,title:t.label,linkDescription:`Bekijk ${t.label.toLowerCase()} overzicht`,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const a=(0,i.xz)(t.docId??void 0);return n.createElement(d,{linkDescription:`Bekijk ${a.title.toLowerCase()}`,href:t.href,title:t.label,description:t.description??(null==a?void 0:a.description)})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return n.createElement(v,e);const r=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--12 margin-bottom--lg doc-card-list"},n.createElement(h,{item:e})))))}var p=a(4966),E=a(23120),_=a(44364),f=a(28027),Z=a(92503);const k={generatedIndexPage:"generatedIndexPage_jE6W",list:"list_XVd1",title:"title__lw4","navbar__items--right":"navbar__items--right_fTHD"};function N(e){let{categoryGeneratedIndex:t}=e;return n.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,l.Z)(t.image)})}function L(e){let{categoryGeneratedIndex:t}=e;const a=(0,i.jA)();return n.createElement("div",{className:k.generatedIndexPage},n.createElement(E.Z,null),n.createElement(f.Z,null),n.createElement(_.Z,null),n.createElement("header",null,n.createElement(Z.Z,{as:"h1",className:k.title},t.title),t.description&&n.createElement("p",null,t.description)),n.createElement("article",{className:"margin-top--lg"},n.createElement(g,{items:a.items,className:k.list})),n.createElement("footer",{className:"margin-top--lg"},n.createElement(p.Z,{previous:t.navigation.previous,next:t.navigation.next})))}function T(e){return n.createElement(n.Fragment,null,n.createElement(N,e),n.createElement(L,e))}}}]);