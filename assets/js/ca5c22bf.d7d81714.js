"use strict";(self.webpackChunklife_checkpoint_github_io=self.webpackChunklife_checkpoint_github_io||[]).push([[6187],{5792:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components/circle","title":"Circles","description":"\u5706\u76f8\u5173 API","source":"@site/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components/circle.md","sourceDirName":"\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components","slug":"/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components/circle","permalink":"/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components/circle","draft":false,"unlisted":false,"editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io/tree/main/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components/circle.md","tags":[{"inline":true,"label":"manim","permalink":"/docs/tags/manim"},{"inline":true,"label":"math","permalink":"/docs/tags/math"}],"version":"current","sidebarPosition":3,"frontMatter":{"description":"\u5706\u76f8\u5173 API","sidebar_label":"circle","title":"Circles","authors":["Life_Checkpoint"],"tags":["manim","math"],"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"line","permalink":"/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components/line"},"next":{"title":"vector","permalink":"/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/manimgeo/\u57fa\u7840\u51e0\u4f55\u90e8\u4ef6 Components/vector"}}');var c=i(4848),s=i(8453);const l={description:"\u5706\u76f8\u5173 API",sidebar_label:"circle",title:"Circles",authors:["Life_Checkpoint"],tags:["manim","math"],sidebar_position:3},t="circle \u76f8\u5173\u6784\u9020 API",o={},d=[{value:"1. \u4e2d\u5fc3\u4e0e\u534a\u5f84\u6784\u9020\u5706",id:"1-\u4e2d\u5fc3\u4e0e\u534a\u5f84\u6784\u9020\u5706",level:3},{value:"<code>CirclePR(center: Point, radius: Number, name: str = &quot;&quot;)</code>",id:"circleprcenter-point-radius-number-name-str--",level:4},{value:"2. \u4e2d\u5fc3\u4e0e\u5706\u4e0a\u4e00\u70b9\u6784\u9020\u5706",id:"2-\u4e2d\u5fc3\u4e0e\u5706\u4e0a\u4e00\u70b9\u6784\u9020\u5706",level:3},{value:"<code>CirclePP(center: Point, point: Point, name: str = &quot;&quot;)</code>",id:"circleppcenter-point-point-point-name-str--",level:4},{value:"3. \u534a\u5f84\u7ebf\u6bb5\u6784\u9020\u5706",id:"3-\u534a\u5f84\u7ebf\u6bb5\u6784\u9020\u5706",level:3},{value:"<code>CircleL(radius_segment: LineSegment, name: str = &quot;&quot;)</code>",id:"circlelradius_segment-linesegment-name-str--",level:4},{value:"4. \u5706\u4e0a\u4e09\u70b9\u6784\u9020\u5706",id:"4-\u5706\u4e0a\u4e09\u70b9\u6784\u9020\u5706",level:3},{value:"<code>CirclePPP(point1: Point, point2: Point, point3: Point, name: str = &quot;&quot;)</code>",id:"circleppppoint1-point-point2-point-point3-point-name-str--",level:4},{value:"5. \u5e73\u79fb\u6784\u9020\u5706",id:"5-\u5e73\u79fb\u6784\u9020\u5706",level:3},{value:"<code>CircleTranslationCirV(circle: Circle, vec: Vector, name: str = &quot;&quot;)</code>",id:"circletranslationcirvcircle-circle-vec-vector-name-str--",level:4}];function h(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.header,{children:(0,c.jsx)(n.h1,{id:"circle-\u76f8\u5173\u6784\u9020-api",children:"circle \u76f8\u5173\u6784\u9020 API"})}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"1-\u4e2d\u5fc3\u4e0e\u534a\u5f84\u6784\u9020\u5706",children:"1. \u4e2d\u5fc3\u4e0e\u534a\u5f84\u6784\u9020\u5706"}),"\n",(0,c.jsx)(n.h4,{id:"circleprcenter-point-radius-number-name-str--",children:(0,c.jsx)(n.code,{children:'CirclePR(center: Point, radius: Number, name: str = "")'})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u6307\u5b9a\u5706\u5fc3\u548c\u534a\u5f84\u6784\u9020\u5706\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"center"})," (Point): \u5706\u5fc3\u70b9\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"radius"})," (Number): \u5706\u7684\u534a\u5f84\uff0c\u6570\u503c\u7c7b\u578b\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"})," (str, \u53ef\u9009): \u5706\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Circle"}),": \u8fd4\u56de\u6784\u9020\u7684\u5706\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"2-\u4e2d\u5fc3\u4e0e\u5706\u4e0a\u4e00\u70b9\u6784\u9020\u5706",children:"2. \u4e2d\u5fc3\u4e0e\u5706\u4e0a\u4e00\u70b9\u6784\u9020\u5706"}),"\n",(0,c.jsx)(n.h4,{id:"circleppcenter-point-point-point-name-str--",children:(0,c.jsx)(n.code,{children:'CirclePP(center: Point, point: Point, name: str = "")'})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u6307\u5b9a\u5706\u5fc3\u548c\u5706\u4e0a\u4e00\u70b9\u6784\u9020\u5706\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"center"})," (Point): \u5706\u5fc3\u70b9\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"point"})," (Point): \u5706\u4e0a\u4e00\u70b9\uff0c\u7528\u4e8e\u786e\u5b9a\u5706\u7684\u5927\u5c0f\u548c\u4f4d\u7f6e\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"})," (str, \u53ef\u9009): \u5706\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Circle"}),": \u8fd4\u56de\u6784\u9020\u7684\u5706\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"3-\u534a\u5f84\u7ebf\u6bb5\u6784\u9020\u5706",children:"3. \u534a\u5f84\u7ebf\u6bb5\u6784\u9020\u5706"}),"\n",(0,c.jsx)(n.h4,{id:"circlelradius_segment-linesegment-name-str--",children:(0,c.jsx)(n.code,{children:'CircleL(radius_segment: LineSegment, name: str = "")'})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u6307\u5b9a\u534a\u5f84\u7ebf\u6bb5\u6784\u9020\u5706\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"radius_segment"})," (LineSegment): \u534a\u5f84\u7ebf\u6bb5\uff0c\u8868\u793a\u5706\u7684\u534a\u5f84\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"})," (str, \u53ef\u9009): \u5706\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Circle"}),": \u8fd4\u56de\u6784\u9020\u7684\u5706\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"4-\u5706\u4e0a\u4e09\u70b9\u6784\u9020\u5706",children:"4. \u5706\u4e0a\u4e09\u70b9\u6784\u9020\u5706"}),"\n",(0,c.jsx)(n.h4,{id:"circleppppoint1-point-point2-point-point3-point-name-str--",children:(0,c.jsx)(n.code,{children:'CirclePPP(point1: Point, point2: Point, point3: Point, name: str = "")'})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u4e09\u70b9\u786e\u5b9a\u5706\u7684\u6784\u9020\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"point1"})," (Point): \u5706\u4e0a\u7684\u7b2c\u4e00\u70b9\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"point2"})," (Point): \u5706\u4e0a\u7684\u7b2c\u4e8c\u70b9\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"point3"})," (Point): \u5706\u4e0a\u7684\u7b2c\u4e09\u70b9\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"})," (str, \u53ef\u9009): \u5706\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Circle"}),": \u8fd4\u56de\u6784\u9020\u7684\u5706\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h3,{id:"5-\u5e73\u79fb\u6784\u9020\u5706",children:"5. \u5e73\u79fb\u6784\u9020\u5706"}),"\n",(0,c.jsx)(n.h4,{id:"circletranslationcirvcircle-circle-vec-vector-name-str--",children:(0,c.jsx)(n.code,{children:'CircleTranslationCirV(circle: Circle, vec: Vector, name: str = "")'})}),"\n",(0,c.jsx)(n.p,{children:"\u901a\u8fc7\u5e73\u79fb\u64cd\u4f5c\u6784\u9020\u65b0\u7684\u5706\u3002"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"circle"})," (Circle): \u539f\u59cb\u5706\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"vec"})," (Vector): \u5e73\u79fb\u5411\u91cf\u3002"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"name"})," (str, \u53ef\u9009): \u65b0\u5706\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"Circle"}),": \u8fd4\u56de\u5e73\u79fb\u540e\u7684\u5706\u5bf9\u8c61\u3002"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var r=i(6540);const c={},s=r.createContext(c);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);