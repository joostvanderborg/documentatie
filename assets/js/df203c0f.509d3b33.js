"use strict";(self.webpackChunk_nl_design_system_documentatie=self.webpackChunk_nl_design_system_documentatie||[]).push([[9924],{9853:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var s=a(7294),l=a(6020),c=a(9960),n=a(9548),r=a(5999);function g(e){var t=e.doc;return s.createElement("article",{className:"margin-vert--lg"},s.createElement(c.Z,{to:t.permalink},s.createElement("h2",null,t.title)),t.description&&s.createElement("p",null,t.description))}function o(e){var t,a=e.tag,o=(t=(0,n.c2)().selectMessage,function(e){return t(e,(0,r.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,r.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:o(a.docs.length),tagName:a.name});return s.createElement(l.Z,{title:i,wrapperClassName:n.kM.wrapper.docsPages,pageClassName:n.kM.page.docsTagDocListPage,searchMetadata:{tag:"doc_tag_doc_list"}},s.createElement("div",{className:"container margin-vert--lg"},s.createElement("div",{className:"row"},s.createElement("main",{className:"col col--8 col--offset-2"},s.createElement("header",{className:"margin-bottom--xl"},s.createElement("h1",null,i),s.createElement(c.Z,{href:a.allTagsPath},s.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),s.createElement("section",{className:"margin-vert--lg"},a.docs.map((function(e){return s.createElement(g,{key:e.id,doc:e})})))))))}}}]);