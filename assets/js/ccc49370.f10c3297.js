"use strict";(self.webpackChunklife_checkpoint_github_io=self.webpackChunklife_checkpoint_github_io||[]).push([[3249],{2907:(e,t,n)=>{n.d(t,{A:()=>O});n(6540);var a=n(4164),i=n(4096),s=n(4848);function r(e){let{children:t,className:n}=e;return(0,s.jsx)("article",{className:n,children:t})}var l=n(8774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:r}=(0,i.e7)(),{permalink:c,title:d}=n,u=r?"h1":"h2";return(0,s.jsx)(u,{className:(0,a.A)(o.title,t),children:r?d:(0,s.jsx)(l.A,{to:c,children:d})})}var d=n(1312),u=n(5846),m=n(6266);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,s.jsx)(s.Fragment,{children:n(t)})}function f(e){let{date:t,formattedDate:n}=e;return(0,s.jsx)("time",{dateTime:t,children:n})}function p(){return(0,s.jsx)(s.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:n}=(0,i.e7)(),{date:r,readingTime:l}=n,o=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,s.jsxs)("div",{className:(0,a.A)(h.container,"margin-vert--md",t),children:[(0,s.jsx)(f,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(g,{readingTime:l})]})]});var c}var b=n(6913);const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function j(e){let{className:t}=e;const{metadata:{authors:n},assets:r}=(0,i.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,s.jsx)("div",{className:(0,a.A)("margin-top--md margin-bottom--sm",l?v.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,s.jsx)("div",{className:(0,a.A)(!l&&(o?"col col--12":"col col--6"),l?v.imageOnlyAuthorCol:v.authorCol),children:(0,s.jsx)(b.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,s.jsxs)("header",{children:[(0,s.jsx)(c,{}),(0,s.jsx)(x,{}),(0,s.jsx)(j,{})]})}var N=n(440),y=n(5243);function _(e){let{children:t,className:n}=e;const{isBlogPostPage:r}=(0,i.e7)();return(0,s.jsx)("div",{id:r?N.LU:void 0,className:(0,a.A)("markdown",n),children:(0,s.jsx)(y.A,{children:t})})}var L=n(7559),C=n(4336),T=n(2053);function k(){return(0,s.jsx)("b",{children:(0,s.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function H(e){const{blogPostTitle:t,...n}=e;return(0,s.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,s.jsx)(k,{})})}function w(){const{metadata:e,isBlogPostPage:t}=(0,i.e7)(),{tags:n,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,m=n.length>0;if(!(m||u||l))return null;if(t){const e=!!(l||d||c);return(0,s.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,a.A)("row","margin-top--sm",L.G.blog.blogFooterEditMetaRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(T.A,{tags:n})})}),e&&(0,s.jsx)(C.A,{className:(0,a.A)("margin-top--sm",L.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,s.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,s.jsx)("div",{className:(0,a.A)("col",{"col--9":u}),children:(0,s.jsx)(T.A,{tags:n})}),u&&(0,s.jsx)("div",{className:(0,a.A)("col text--right",{"col--3":m}),children:(0,s.jsx)(H,{blogPostTitle:r,to:e.permalink})})]})}function O(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,i.e7)();return e?void 0:"margin-bottom--xl"}();return(0,s.jsxs)(r,{className:(0,a.A)(l,n),children:[(0,s.jsx)(A,{}),(0,s.jsx)(_,{children:t}),(0,s.jsx)(w,{})]})}},2234:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),i=n(4084),s=n(7559),r=n(7293),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Rc,{}),className:(0,a.A)(t,s.G.common.unlistedBanner),children:(0,l.jsx)(i.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.AE,{}),(0,l.jsx)(o,{...e})]})}},1689:(e,t,n)=>{n.d(t,{A:()=>d});n(6540);var a=n(4164),i=n(4084),s=n(7559),r=n(7293),l=n(4848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(i.Yh,{}),className:(0,a.A)(t,s.G.common.draftBanner),children:(0,l.jsx)(i.TT,{})})}var c=n(2234);function d(e){let{metadata:t}=e;const{unlisted:n,frontMatter:a}=t;return(0,l.jsxs)(l.Fragment,{children:[(n||a.unlisted)&&(0,l.jsx)(c.A,{}),a.draft&&(0,l.jsx)(o,{})]})}},5195:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(6540),i=n(6342);function s(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):a.push(i)})),a}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function o(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>l(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let i=t;i<=n;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:r}),c=o(l,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(i),e.classList.add(i),t.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?(0,m.jsx)("ul",{className:i?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const g=a.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const f=(0,i.p)(),p=c??f.tableOfContents.minHeadingLevel,x=u??f.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>r({toc:s(t),minHeadingLevel:n,maxHeadingLevel:i})),[t,n,i])}({toc:t,minHeadingLevel:p,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(l&&o)return{linkClassName:l,linkActiveClassName:o,minHeadingLevel:p,maxHeadingLevel:x}}),[l,o,p,x])),(0,m.jsx)(g,{toc:b,className:n,linkClassName:l,...h})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),i=n(5195);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const l="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(i.A,{...n,linkClassName:l,linkActiveClassName:o})})}},4084:(e,t,n)=>{n.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});n(6540);var a=n(1312),i=n(5260),s=n(4848);function r(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,s.jsx)(i.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,s.jsx)(a.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}},4739:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var a=n(6540),i=n(4164),s=n(1213),r=n(7559),l=n(4096),o=n(8027),c=n(2907),d=n(1312),u=n(9022),m=n(4848);function h(e){const{nextItem:t,prevItem:n}=e;return(0,m.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,m.jsx)(u.A,{...n,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,m.jsx)(u.A,{...t,subLabel:(0,m.jsx)(d.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function g(){const{assets:e,metadata:t}=(0,l.e7)(),{title:n,description:a,date:i,tags:r,authors:o,frontMatter:c}=t,{keywords:d}=c,u=e.image??c.image;return(0,m.jsxs)(s.be,{title:c.title_meta??n,description:a,keywords:d,image:u,children:[(0,m.jsx)("meta",{property:"og:type",content:"article"}),(0,m.jsx)("meta",{property:"article:published_time",content:i}),o.some((e=>e.url))&&(0,m.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,m.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var f=n(5260);function p(){const e=(0,l.J_)();return(0,m.jsx)(f.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(7763),b=n(1689);function v(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:s}=(0,l.e7)(),{nextItem:r,prevItem:d,frontMatter:u}=i,{hide_table_of_contents:g,toc_min_heading_level:f,toc_max_heading_level:p}=u,v=(0,a.useRef)(null);return(0,a.useEffect)((()=>{let e=document.createElement("script");e.src="https://giscus.app/client.js",e.setAttribute("data-repo","Lifecheckpoint/lifecheckpoint.github.io"),e.setAttribute("data-repo-id","R_kgDONfY7CA"),e.setAttribute("data-category","Announcements"),e.setAttribute("data-category-id","DIC_kwDONfY7CM4ClY4j"),e.setAttribute("data-mapping","pathname"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","top"),e.setAttribute("data-theme","preferred_color_scheme"),e.setAttribute("data-lang","zh-CN"),e.setAttribute("data-loading","lazy"),e.setAttribute("crossorigin","anonymous"),e.async=!0,v.current.appendChild(e)}),[]),(0,m.jsxs)(o.A,{sidebar:t,toc:!g&&s.length>0?(0,m.jsx)(x.A,{toc:s,minHeadingLevel:f,maxHeadingLevel:p}):void 0,children:[(0,m.jsx)(b.A,{metadata:i}),(0,m.jsx)(c.A,{children:n}),(r||d)&&(0,m.jsx)(h,{nextItem:r,prevItem:d}),(0,m.jsx)("div",{style:{marginTop:"20px"},ref:v})]})}function j(e){const t=e.content;return(0,m.jsx)(l.in,{content:e.content,isBlogPostPage:!0,children:(0,m.jsxs)(s.e3,{className:(0,i.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,m.jsx)(g,{}),(0,m.jsx)(p,{}),(0,m.jsx)(v,{sidebar:e.sidebar,children:(0,m.jsx)(t,{})})]})})}}}]);