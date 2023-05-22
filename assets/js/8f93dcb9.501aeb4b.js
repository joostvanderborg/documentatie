"use strict";(self.webpackChunk_nl_design_system_website=self.webpackChunk_nl_design_system_website||[]).push([[7419],{55836:(e,t,a)=>{a.d(t,{U:()=>m});var n=a(87462),r=a(3905),i=a(1761),l=a(67294);const o=(e,t)=>{const a=new URL(t,new URL(e,"resolve://pathname/"));if("resolve:"===a.protocol){const{pathname:a,search:n,hash:r}=new URL(t,new URL(e,"http://example.com/"));return a+n+r}return a.toString()},p={1:{},2:{h1:i.XJ,h2:i.aC,h3:i.k8,h4:i.by,h5:i.Cd},3:{h1:i.aC,h2:i.k8,h3:i.by,h4:i.Cd,h5:i.Cd},4:{h1:i.k8,h2:i.by,h3:i.Cd,h4:i.Cd,h5:i.Cd},5:{h1:i.by,h2:i.Cd,h3:i.Cd,h4:i.Cd,h5:i.Cd},6:{h1:i.Cd,h2:i.Cd,h3:i.Cd,h4:i.Cd,h5:i.Cd}},d=e=>({img:t=>{let{src:a,...r}=t;return l.createElement("img",(0,n.Z)({},r,{src:o(e,a),className:"utrecht-img utrecht-img--fit"}))}}),s=(e,t)=>{if(e){const e={...p[t-1]};return e.h1=()=>null,e}return p[t]},m=e=>{let{children:t,omitH1:a=!1,headingLevel:n=1,baseUrl:i=""}=e;return l.createElement(r.Zo,{components:{...s(a,n),...d(i)}},t)}},61771:(e,t,a)=>{a.d(t,{o:()=>o});var n=a(76649),r=a(67294);const i="story_PQo9",l="story__link_f0vD",o=e=>{let{label:t,href:a}=e;const o=a,p=a.replace("?path=/docs/","iframe.html?id=")+"&viewMode=story";return r.createElement("div",{className:i},r.createElement(n.Z,{src:p,style:{width:"1px",minWidth:"100%"},heightCalculationMethod:"lowestElement"}),r.createElement("a",{className:l,href:o,target:"_blank",rel:"noreferrer"},t))}},84239:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>c,frontMatter:()=>s,metadata:()=>k,toc:()=>g});var n=a(87462),r=(a(67294),a(3905)),i=a(61771),l=a(55836);const o={toc:[{value:"HTML",id:"html",level:2},{value:"Lead Paragraph",id:"lead-paragraph",level:3},{value:"Inhoud",id:"inhoud",level:2},{value:"Layout",id:"layout",level:2},{value:"Lettergrootte",id:"lettergrootte",level:3},{value:"Regelhoogte",id:"regelhoogte",level:3},{value:"Afstand tussen paragrafen",id:"afstand-tussen-paragrafen",level:3},{value:"Kleurgebruik",id:"kleurgebruik",level:3},{value:"Regellengte",id:"regellengte",level:3},{value:"Tekstuitlijning",id:"tekstuitlijning",level:3},{value:"Hoe het niet moet",id:"hoe-het-niet-moet",level:2},{value:"Geen opmaak",id:"geen-opmaak",level:3},{value:"Lege paragraaf",id:"lege-paragraaf",level:3},{value:"Geen semantiek",id:"geen-semantiek",level:3},{value:"<code>inline</code> in plaats van <code>block</code>-elementen",id:"inline-in-plaats-van-block-elementen",level:3},{value:"Overdreven nadruk",id:"overdreven-nadruk",level:3},{value:"Links",id:"links",level:2},{value:"Relevante WCAG regels",id:"relevante-wcag-regels",level:3}]},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paragraph"},"Paragraph"),(0,r.kt)("p",null,"De ",(0,r.kt)("em",{parentName:"p"},"paragraph")," component gebruik je voor een alinea met lopende tekst, instructies van formulieren en voor overige losstaande tekstfragmenten."),(0,r.kt)("h2",{id:"html"},"HTML"),(0,r.kt)("p",null,"Gebruik hiervoor altijd het ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," HTML-element, die heeft automatisch de goede ",(0,r.kt)("a",{parentName:"p",href:"https://w3c.github.io/aria/#paragraph"},(0,r.kt)("inlineCode",{parentName:"a"},"paragraph")," role")," in de accessibility tree (dat is nodig voor WCAG eis 1.3.1). Voor een ",(0,r.kt)("em",{parentName:"p"},"lead paragraph")," gebruik je ",(0,r.kt)("inlineCode",{parentName:"p"},"<p><b>\u2026</b></p>"),". Voor ",(0,r.kt)("em",{parentName:"p"},"small print")," gebruik je ",(0,r.kt)("inlineCode",{parentName:"p"},"<p><small>\u2026</small></p>"),"."),(0,r.kt)("p",null,"Zelfs als geen CSS geladen kan worden, blijft de tekst duidelijk. Door het ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," element is er tussen alinea's duidelijke witruimte (WCAG 1.4.12). Door het ",(0,r.kt)("inlineCode",{parentName:"p"},"<b>")," element is de ",(0,r.kt)("em",{parentName:"p"},"lead paragraph")," visueel herkenbaar. Door ",(0,r.kt)("inlineCode",{parentName:"p"},"<small>")," is ",(0,r.kt)("em",{parentName:"p"},"small print")," visueel herkenbaar."),(0,r.kt)("h3",{id:"lead-paragraph"},"Lead Paragraph"),(0,r.kt)("p",null,"De ",(0,r.kt)("em",{parentName:"p"},"lead paragraph")," is een extra opvallende variant van de ",(0,r.kt)("em",{parentName:"p"},"paragraph"),". Gebruik de ",(0,r.kt)("em",{parentName:"p"},"lead paragraph")," onder de ",(0,r.kt)("em",{parentName:"p"},"heading")," van een ",(0,r.kt)("em",{parentName:"p"},"article")," voor een introductietekst."),(0,r.kt)("p",null,"Schrijf in de eerste alinea kort en bondig waar de pagina over gaat, zodat de lezer kan besluiten om verder te lezen. Gebruik hiervoor de ",(0,r.kt)("em",{parentName:"p"},"lead paragraph")," variant zodat de tekst extra opvallend is."),(0,r.kt)("p",null,"Wanneer je meer dan circa 30 woorden of 200 tekens nodig hebt, gebruik dan niet de ",(0,r.kt)("em",{parentName:"p"},"lead paragraph")," variant zodat de tekst een leesbare lettergrootte heeft voor langere teksten."),(0,r.kt)("p",null,"Gebruik de ",(0,r.kt)("em",{parentName:"p"},"lead paragraph")," niet wanneer je een ",(0,r.kt)("em",{parentName:"p"},"paragraph")," voor een ander doel extra opvallend wil maken, ontwikkel dan een eigen variant."),(0,r.kt)("h2",{id:"inhoud"},"Inhoud"),(0,r.kt)("p",null,"Groepeer zinnen die bij elkaar horen in een alinea. Begin een nieuwe alinea wanneer de tekst over een andere onderwerp gaat of een eigen doel heeft. Teksten met alinea's die niet bovengemiddeld lang zijn makkelijker te begrijpen als je pauze neemt, en door het grouperen is informatie sneller terug te vinden."),(0,r.kt)("p",null,"Overweeg of een alinea met meer dan 7 zinnen of 140 woorden duidelijker is als je tekst indeelt in twee alinea's."),(0,r.kt)("h2",{id:"layout"},"Layout"),(0,r.kt)("h3",{id:"lettergrootte"},"Lettergrootte"),(0,r.kt)("p",null,"Kies de lettergrootte niet te klein, bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"p"},"16px")," of groter. Gebruik ",(0,r.kt)("inlineCode",{parentName:"p"},"rem")," in CSS in plaats van ",(0,r.kt)("inlineCode",{parentName:"p"},"px"),", zodat de font-size van de ",(0,r.kt)("em",{parentName:"p"},"paragraph")," ook verdubbelt wanneer gebruikers via hun besturingssysteem of ",(0,r.kt)("em",{parentName:"p"},"user stylesheet")," de standaard lettergroote 200% groter maken. (",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#resize-text"},"WCAG eis 1.4.4"),") Gebruikers moeten de lettergrootte vier keer groter kunnen maken met browser zoom. (",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/WCAG21/#reflow"},"WCAG eis 1.4.10"),") Maak zoom niet kapot door gebruik van de ",(0,r.kt)("inlineCode",{parentName:"p"},"vw")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"vh")," eenheden in CSS die niet altijd goed werken met zoom."),(0,r.kt)("p",null,"Gebruik de design token ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.paragraph.font-size")," als je niet de standaard-grootte wilt van ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.document.font-size"),"."),(0,r.kt)("p",null,"Voor de lead paragraph variant is het gebruikelijk de lettergrootte 10% \xe1 20% groter te kiezen (",(0,r.kt)("inlineCode",{parentName:"p"},"nl.paragraph.lead.font-size"),")."),(0,r.kt)("h3",{id:"regelhoogte"},"Regelhoogte"),(0,r.kt)("p",null,"Stel de regelhoogte met ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.paragraph.line-height")," in voor voldoende afstand tussen tekstregels, dit verbetert de leesbaarheid. Standaard gebruiken browsers circa ",(0,r.kt)("inlineCode",{parentName:"p"},"1.2"),", maar ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5")," is voor veel gebruikers beter leesbaar. Voor WCAG 1.4.8 is het ook belangrijk om ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5")," of groter aan te bieden."),(0,r.kt)("h3",{id:"afstand-tussen-paragrafen"},"Afstand tussen paragrafen"),(0,r.kt)("p",null,"Kies voldoende afstand tussen alinea's, in elk geval 50% groter dan afstand tussen tekstregels. (WCAG 1.4.8). Gebruik hiervoor de design tokens ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.paragraph.margin-block-start")," en ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.paragraph.margin-block-end"),"."),(0,r.kt)("h3",{id:"kleurgebruik"},"Kleurgebruik"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nl.paragraph.color"),": kies voldoende contrast ten opzichte van de achtergrondkleur, van bijvoorbeeld ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.document.background-color")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.page.background-color"),". Kies in plaats van zwart voor zeer donkergrijs, dat is beter leesbaar op beeldschermen. Een contrastverhouding van 7:1 is ideaal. (WCAG 1.4.3 en WCAG 1.4.6)"),(0,r.kt)("h3",{id:"regellengte"},"Regellengte"),(0,r.kt)("p",null,"Zorg dat de lengte van de tekst niet te lang wordt, bijvoorbeeld door deze design token in te stellen: ",(0,r.kt)("inlineCode",{parentName:"p"},"nl.article.max-inline-size"),". De ideale regellengte verschilt per schrift en taal, maar ergens tussen de 50 en 75 tekens voor Nederlands is prima. Je kunt in CSS bijvoorbeeld de ",(0,r.kt)("inlineCode",{parentName:"p"},"ch")," eenheid gebruiken: ",(0,r.kt)("inlineCode",{parentName:"p"},"--nl-article-max-inline-size: 60ch"),"."),(0,r.kt)("p",null,"Voor WCAG 1.4.8 is het nodig dat de regellengte beperkt kan worden tot maximaal 80 tekens (",(0,r.kt)("inlineCode",{parentName:"p"},"80ch"),"), bijvoorbeeld door de viewport van de browser kleiner te maken."),(0,r.kt)("h3",{id:"tekstuitlijning"},"Tekstuitlijning"),(0,r.kt)("p",null,"Tekst dient uitsluitend links uitgelijnd zijn, voor Nederlandse teksten. Gebruik daarvoor ",(0,r.kt)("inlineCode",{parentName:"p"},"text-align: start"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"text-align: justify")," moet vermeden kunnen worden volgens WCAG 1.4.8, dus gebruik deze voor het gemak helemaal niet. Rechts uitlijnen en tekst centreren moet je ook niet gebruiken voor lopende tekst."),(0,r.kt)("h2",{id:"hoe-het-niet-moet"},"Hoe het niet moet"),(0,r.kt)("h3",{id:"geen-opmaak"},"Geen opmaak"),(0,r.kt)("p",null,"Geen ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," gebruiken:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<section>\n  <h1>Interessante pagina</h1>\n  Deze eerste tekst ziet er misschien prima uit.\n  <p>Maar ook de eerste paragraaf hoort in een p-element te staan.</p>\n</section>\n")),(0,r.kt)("h3",{id:"lege-paragraaf"},"Lege paragraaf"),(0,r.kt)("p",null,"Een lege ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," gebruiken, bijvoorbeeld om extra afstand te maken:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<section>\n  <h1>Voorbeeld pagina</h1>\n  <p>Deze pagina ziet er op het oog misschien prima uit.</p>\n  <p>&nbsp;</p>\n  <p>Maar sommige screen readers zeggen dat er drie paragrafen zijn, dat is verwarrend.</p>\n</section>\n")),(0,r.kt)("h3",{id:"geen-semantiek"},"Geen semantiek"),(0,r.kt)("p",null,"Een ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," gebruiken:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<section>\n    <h1>Interessante pagina</h1>\n    <div>Deze eerste tekst ziet er misschien prima uit, maar de paragraph role ontbreek in de accessibility tree.</div>\n    <div role="paragraph">Gebruik gewoon een p-element in plaats van ARIA om de role te verkrijgen.</p>\n</section>\n')),(0,r.kt)("p",null,"Wanneer je tekstfragmenten na elkaar plaatst is het belangrijk dat je een element zoals paragraaf gebruikt (en niet een ",(0,r.kt)("inlineCode",{parentName:"p"},"inline")," element zoals ",(0,r.kt)("inlineCode",{parentName:"p"},"span")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"label"),"), zodat de twee tekstfragmenten los van elkaar worden voorgelezen door screen readers. Wanneer de CSS niet geladen kan worden, dan heeft ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," wel marge en ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," niet, in veel situaties zonder CSS is ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," daarom leesbaarder dan ",(0,r.kt)("inlineCode",{parentName:"p"},"div"),"."),(0,r.kt)("h3",{id:"inline-in-plaats-van-block-elementen"},(0,r.kt)("inlineCode",{parentName:"h3"},"inline")," in plaats van ",(0,r.kt)("inlineCode",{parentName:"h3"},"block"),"-elementen"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<label for="name">Voornaam</label><span>Voornaam is verplicht</span>\n')),(0,r.kt)("p",null,"Beter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<p><label for="name">Voornaam</label></p>\n<p>Voornaam is verplicht</p>\n')),(0,r.kt)("h3",{id:"overdreven-nadruk"},"Overdreven nadruk"),(0,r.kt)("p",null,"Benadruk niet een hele paragraaf, maar markeer het belangrijke gedeelte."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<p>\n  <strong\n    >Tenzij anders vermeld is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van toepassing.\n    Dit houdt in dat iedere vorm van hergebruik van de inhoud van deze site is toegestaan, tenzij bij of in een bepaald\n    onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een auteursrechtelijke\n    uitzondering van toepassing is.\n  </strong>\n</p>\n")),(0,r.kt)("p",null,"Beter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<p>\n  <em>Tenzij anders vermeld</em> is op de inhoud van deze website de Creative Commons zero verklaring (CC0) van\n  toepassing. Dit houdt in dat <strong>iedere vorm van hergebruik van de inhoud van deze site is toegestaan</strong>,\n  tenzij bij of in een bepaald onderdeel (bijvoorbeeld een logo of een foto) staat aangegeven dat op dat onderdeel een\n  auteursrechtelijke uitzondering van toepassing is.\n</p>\n")),(0,r.kt)("h2",{id:"links"},"Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"},"MDN: ",(0,r.kt)("inlineCode",{parentName:"a"},"<p>"),": The Paragraph element")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element"},"HTML specification: The ",(0,r.kt)("inlineCode",{parentName:"a"},"<b>")," element"),". Bevat een voorbeeld van het ",(0,r.kt)("inlineCode",{parentName:"li"},"b")," element voor lead paragraphs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-small-element"},"HTML specification: The ",(0,r.kt)("inlineCode",{parentName:"a"},"<small>")," element"),". Bevat een voorbeeld van het ",(0,r.kt)("inlineCode",{parentName:"li"},"small")," element voor ",(0,r.kt)("em",{parentName:"li"},"small print"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://taaladvies.net/lengte-van-alineas/"},"Hoe lang mag een alinea zijn? En waar hangt dat van af? - Taaladvies.net"))),(0,r.kt)("h3",{id:"relevante-wcag-regels"},"Relevante WCAG regels"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#info-and-relationships"},"WCAG eis 1.3.1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#contrast-minimum"},"WCAG eis 1.4.3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#resize-text"},"WCAG eis 1.4.4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#visual-presentation"},"WCAG eis 1.4.8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#reflow"},"WCAG eis 1.4.10")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#text-spacing"},"WCAG eis 1.4.12")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/WCAG21/#language-of-parts"},"WCAG eis 3.1.2"))))}d.isMDXComponent=!0;const s={title:"Paragraph",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Paragraph",pagination_label:"Paragraph",description:"UX richtlijnen voor Paragraph component",slug:"/paragraph",tags:["Community"]},m=void 0,k={unversionedId:"componenten/build/paragraph",id:"componenten/build/paragraph",title:"Paragraph",description:"UX richtlijnen voor Paragraph component",source:"@site/docs/componenten/build/paragraph.mdx",sourceDirName:"componenten/build",slug:"/paragraph",permalink:"/paragraph",draft:!1,editUrl:"https://github.com/nl-design-system/documentatie/tree/main/docs/componenten/build/paragraph.mdx",tags:[{label:"Community",permalink:"/tags/community"}],version:"current",frontMatter:{title:"Paragraph",hide_title:!0,hide_table_of_contents:!1,sidebar_label:"Paragraph",pagination_label:"Paragraph",description:"UX richtlijnen voor Paragraph component",slug:"/paragraph",tags:["Community"]},sidebar:"componenten",previous:{title:"Pagination",permalink:"/pagination"},next:{title:"Password input",permalink:"/password-input"}},h={},g=[{value:"Voorbeeld",id:"voorbeeld",level:2},{value:"UX en toegankelijkheid",id:"ux-en-toegankelijkheid",level:2},{value:"Implementaties",id:"implementaties",level:2},{value:"CSS",id:"css",level:3},{value:"Gemeente Utrecht",id:"gemeente-utrecht",level:4},{value:"HTML",id:"html",level:3},{value:"Gemeente Utrecht",id:"gemeente-utrecht-1",level:4},{value:"Web Component",id:"web-component",level:3},{value:"Gemeente Utrecht",id:"gemeente-utrecht-2",level:4},{value:"Figma",id:"figma",level:3},{value:"NL Design System",id:"nl-design-system",level:4},{value:"Levende Backlog",id:"levende-backlog",level:2}],u={toc:g},v="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(v,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paragraph"},"Paragraph"),(0,r.kt)("p",null,'Dit component heeft de "Community" status: Heb je hem succesvol ingezet voor jouw project met jouw huisstijl? Laat ons dit weten, misschien kan dit component dan opgenomen worden in NL Design System.'),(0,r.kt)("h2",{id:"voorbeeld"},"Voorbeeld"),(0,r.kt)(i.o,{label:"https://nl-design-system.github.io/themes/",href:"https://nl-design-system.github.io/themes/?path=/docs/paragraph--gemeente-utrecht",mdxType:"Story"}),(0,r.kt)("h2",{id:"ux-en-toegankelijkheid"},"UX en toegankelijkheid"),(0,r.kt)(l.U,{omitH1:!0,mdxType:"Markdown"},(0,r.kt)(d,{mdxType:"CustomDoc"})),(0,r.kt)("h2",{id:"implementaties"},"Implementaties"),(0,r.kt)("h3",{id:"css"},"CSS"),(0,r.kt)("h4",{id:"gemeente-utrecht"},"Gemeente Utrecht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementatie: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/css"},"Paragraph CSS implementatie van Gemeente Utrecht")),(0,r.kt)("li",{parentName:"ul"},"Storybook: ",(0,r.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/css-paragraph--default-story"},"Paragraph CSS storybook van Gemeente Utrecht"))),(0,r.kt)("h3",{id:"html"},"HTML"),(0,r.kt)("h4",{id:"gemeente-utrecht-1"},"Gemeente Utrecht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementatie: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/html"},"Paragraph HTML implementatie van Gemeente Utrecht")),(0,r.kt)("li",{parentName:"ul"},"Storybook: ",(0,r.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/html-paragraph--default-story"},"Paragraph HTML storybook van Gemeente Utrecht"))),(0,r.kt)("h3",{id:"web-component"},"Web Component"),(0,r.kt)("h4",{id:"gemeente-utrecht-2"},"Gemeente Utrecht"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementatie: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/nl-design-system/utrecht/tree/main/components/paragraph/web-component"},"Paragraph Web Component implementatie van Gemeente Utrecht")),(0,r.kt)("li",{parentName:"ul"},"Storybook: ",(0,r.kt)("a",{parentName:"li",href:"https://nl-design-system.github.io/utrecht/storybook/?path=/docs/web-component-paragraph--default-story"},"Paragraph Web Component storybook van Gemeente Utrecht"))),(0,r.kt)("h3",{id:"figma"},"Figma"),(0,r.kt)("h4",{id:"nl-design-system"},"NL Design System"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Implementatie: ",(0,r.kt)("a",{parentName:"li",href:"https://www.figma.com/file/shhwGcqPLi2CapK0P1zz8O/NL-Design-System---Bibliotheek?type=design&node-id=150-734"},"Paragraph Figma implementatie van NL Design System"))),(0,r.kt)("h2",{id:"levende-backlog"},"Levende Backlog"),(0,r.kt)("p",null,"De Paragraph component staat bij NL Design System in de ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nl-design-system/backlog/issues/115"},"levende backlog"),", heb je een concrete eisen of wensen voor dit component? Laat het ons dan daar weten!"))}c.isMDXComponent=!0}}]);