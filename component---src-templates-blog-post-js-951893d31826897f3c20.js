(self.webpackChunkgatsby_starter_developer_diary=self.webpackChunkgatsby_starter_developer_diary||[]).push([[989],{4213:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5444),l=a(2052),c=function(e){var t=e.author,a=e.tagline;return n.createElement("div",{className:"bio-main w-75"},n.createElement("img",{src:l.Z,style:{maxWidth:"100px"},className:"profile-img",alt:""}),n.createElement("h3",{className:"mt-2 author-bio"},t),n.createElement("small",{className:"text-muted"},a))},s=a(3201),i=function(e){var t=e.contacts;return n.createElement("div",{className:"side-social-links float-left mt-3 mb-3"},n.createElement("a",{className:"text-secondary p-2",href:t.linkedin},n.createElement("span",{title:"Linked In"},n.createElement(s.FaLinkedin,{size:26,style:{color:"secondary"}}))),n.createElement("a",{className:"text-secondary p-2",href:t.github},n.createElement("span",{title:"GitHub"},n.createElement(s.FaGithubSquare,{size:26,style:{color:"secondary"}}))),n.createElement("a",{className:"text-secondary p-2",href:t.stackoverflow},n.createElement("span",{title:"Stack Overflow"},n.createElement(s.FaStackOverflow,{size:26,style:{color:"secondary"}}))),n.createElement("a",{className:"text-secondary p-2",href:t.freecodecamp},n.createElement("span",{title:"freeCodeCamp"},n.createElement(s.FaFreeCodeCamp,{size:26,style:{color:"secondary"}}))),n.createElement("a",{className:"text-secondary p-2",href:t.twitter},n.createElement("span",{title:"Twitter"},n.createElement(s.FaTwitterSquare,{size:26,style:{color:"secondary"}}))))},m=a(7286),o=function(e){var t=e.labels,a=e.posts,r=t.map((function(e){var t=0;return a.forEach((function(a){a.node.frontmatter.tags.includes(e.tag)&&(t+=1)})),[e.tag,t]})).filter((function(e){return e[1]>0})).map((function(e){return e[0]}));return n.createElement(n.Fragment,null,n.createElement("h4",null,"Tech Topics"),n.createElement("div",{className:"d-block"},function(e){var a=[];return e.forEach((function(e,r){t.forEach((function(t){e===t.tag&&a.push(n.createElement(m.Z,{key:r,tag:t.tag,tech:t.tech,name:t.name,size:t.size,color:t.color}))}))})),a}(r)))},d=function(){return n.createElement(r.StaticQuery,{query:"1507474683",render:function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"sidebar-main border-right"},n.createElement(c,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.createElement(i,{contacts:e.site.siteMetadata.contacts}),n.createElement("div",{className:"page-links"},n.createElement(r.Link,{to:"/"},n.createElement("span",{className:"text-dark d-block py-1"},"Blog Home")),n.createElement(r.Link,{to:"/emeraldjava"},n.createElement("span",{className:"text-dark d-block py-1"},"CV")),n.createElement(r.Link,{to:"/archive"},n.createElement("span",{className:"text-dark d-block py-1"},"Archive"))),n.createElement("div",{className:"tech-tags mt-4"},n.createElement(o,{labels:e.site.siteMetadata.labels,posts:e.allMarkdownRemark.edges}))))}})}},7286:function(e,t,a){"use strict";var n=a(7294),r=a(3201),l=a(4641),c=a(5444);t.Z=function(e){var t=e.tag,a=e.tech,s=e.name,i=e.size,m=e.color,o=/^Fa/.test(s)?n.createElement(r[s]):n.createElement(l[s]);return n.createElement("div",{className:"d-inline-block p-1"},n.createElement(c.Link,{to:"/tags/"+t+"/"},n.createElement("button",{className:"tech-tag text-white"},n.createElement("p",{className:"d-inline"},a," "),n.createElement("div",{className:"d-inline",style:{fontSize:i,color:m}},o))))}},4870:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(1728),l=a(3751),c=a(4213),s=a(7286);t.default=function(e){var t=e.data.markdownRemark,a=e.data.site.siteMetadata.labels,i=(e.data.site.siteMetadata.title,e.data.site.siteMetadata.url,e.pageContext.slug,t.frontmatter.tags);return n.createElement(r.Z,null,n.createElement(l.Z,{title:t.frontmatter.title}),n.createElement("div",{className:"post-page-main"},n.createElement("div",{className:"sidebar px-4 py-2"},n.createElement(c.Z,null)),n.createElement("div",{className:"post-main"},n.createElement(l.Z,{title:t.frontmatter.title}),n.createElement("div",{className:"mt-3"},n.createElement("h2",{className:"heading"},t.frontmatter.title),n.createElement("div",{className:"d-block"},function(e){var t=[];return e.forEach((function(e,r){a.forEach((function(a){e===a.tag&&t.push(n.createElement(s.Z,{key:r,tag:a.tag,tech:a.tech,name:a.name,size:a.size,color:a.color}))}))})),t}(i)),n.createElement("br",null),n.createElement("small",null,n.createElement("i",null,"Published on ")," ",t.frontmatter.date),n.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-951893d31826897f3c20.js.map