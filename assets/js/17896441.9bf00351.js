"use strict";(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[7918],{28027:(e,r,a)=>{a.d(r,{Z:()=>_});var t=a(67294),n=a(86010),l=a(35281),s=a(52802),c=a(39960),m=a(95999),i=a(76775);const d={breadcrumbsContainer:"breadcrumbsContainer_Alpn",breadcrumbs:"breadcrumbs_H22S","breadcrumbs--mobile":"breadcrumbs--mobile_sHXU","breadcrumbs--desktop":"breadcrumbs--desktop_DWrM",breadcrumbs__link:"breadcrumbs__link_EbRY",breadcrumbs__item:"breadcrumbs__item_iEhC","breadcrumbs__item--last":"breadcrumbs__item--last_oZrl",breadcrumbs__separator:"breadcrumbs__separator_ywif"};var b=a(44996),u=a(70177),o=a(21209);function _(){const e=(0,s.s1)()||[],r=(0,b.Z)("/"),{pathname:a}=(0,i.TH)(),_={href:r,label:"Home"},p=[_,...e],h=p.length>2&&p[p.length-2]||_,E=h.href!==a?h:_;return p?t.createElement("nav",{className:(0,n.Z)(l.k.docs.docBreadcrumbs,d.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},t.createElement("ul",{className:(0,n.Z)(d.breadcrumbs,d["breadcrumbs--desktop"]),itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},null==p?void 0:p.map(((e,r,a)=>{let{href:l,label:s}=e;const m=a.length-1===r;return t.createElement(t.Fragment,{key:s},t.createElement("li",{className:(0,n.Z)(d.breadcrumbs__item,m&&d["breadcrumbs__item--last"])},m?s:t.createElement(c.Z,{className:(0,n.Z)(d.breadcrumbs__link,"utrecht-link"),href:l},s)),!m&&t.createElement(u.Z,{className:(0,n.Z)(d.breadcrumbs__separator)}))}))),t.createElement("div",{className:(0,n.Z)(d.breadcrumbs,d["breadcrumbs--mobile"])},t.createElement(o.Z,null),t.createElement(c.Z,{className:(0,n.Z)(d.breadcrumbs__link,"utrecht-link"),href:E.href},E.label))):null}},33507:(e,r,a)=>{a.d(r,{Z:()=>k});var t=a(67294),n=a(86010),l=a(35281),s=a(65130),c=a(92503),m=a(3905),i=a(35742);function d(e){const r=t.Children.map(e.children,(e=>t.isValidElement(e)?function(e){var r;if(null!=(r=e.props)&&r.mdxType&&e.props.originalType){const{mdxType:r,originalType:a,...n}=e.props;return t.createElement(e.props.originalType,n)}return e}(e):e));return t.createElement(i.Z,e,r)}var b=a(74464);function u(e){var r;return t.createElement(b.Z,(0,t.isValidElement)(e.children)&&"code"===(null==(r=e.children.props)?void 0:r.originalType)?e.children.props:{...e})}var o=a(87462),_=a(34673);function p(e){const r=t.Children.toArray(e.children),a=r.find((e=>{var r;return t.isValidElement(e)&&"summary"===(null==(r=e.props)?void 0:r.mdxType)})),n=t.createElement(t.Fragment,null,r.filter((e=>e!==a)));return t.createElement(_.Z,(0,o.Z)({},e,{summary:a}),n)}var h=a(23612),E=a(11875),Z=a(1761);function f(e){let{children:r}=e;return t.createElement(m.Zo,{components:{head:d,code:Z.EK,a:Z.rU,em:Z.j$,pre:u,p:Z.nv,details:p,ul:Z.QI,li:Z.AS,img:Z.Ee,h1:Z.nL,h2:Z.XJ,h3:Z.aC,h4:Z.k8,h5:Z.by,h6:Z.Cd,admonition:h.Z,mermaid:E.Z}},r)}function k(e){let{children:r}=e;const a=function(){const{metadata:e,frontMatter:r,contentTitle:a}=(0,s.k)();return r.hide_title||void 0!==a?null:e.title}();return t.createElement("div",{className:(0,n.Z)(l.k.docs.docMarkdown)},a&&t.createElement("header",null,t.createElement(c.Z,{as:"h1"},a)),t.createElement(f,null,r))}}}]);