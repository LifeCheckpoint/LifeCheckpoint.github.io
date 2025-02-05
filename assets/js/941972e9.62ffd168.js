"use strict";(self.webpackChunklife_checkpoint_github_io=self.webpackChunklife_checkpoint_github_io||[]).push([[9115],{8688:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>c,contentTitle:()=>t,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"computer_science/projects/manimgeo/components/point","title":"Points","description":"\u70b9\u76f8\u5173 API","source":"@site/docs/computer_science/projects/manimgeo/components/point.md","sourceDirName":"computer_science/projects/manimgeo/components","slug":"/computer_science/projects/manimgeo/components/point","permalink":"/docs/computer_science/projects/manimgeo/components/point","draft":false,"unlisted":false,"editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io/tree/main/docs/computer_science/projects/manimgeo/components/point.md","tags":[{"inline":true,"label":"manim","permalink":"/docs/tags/manim"},{"inline":true,"label":"math","permalink":"/docs/tags/math"}],"version":"current","sidebarPosition":1,"frontMatter":{"description":"\u70b9\u76f8\u5173 API","sidebar_label":"point","title":"Points","authors":["Life_Checkpoint"],"tags":["manim","math"],"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"GeometryAdapter","permalink":"/docs/computer_science/projects/manimgeo/components/GeometryAdapter"},"next":{"title":"line","permalink":"/docs/computer_science/projects/manimgeo/components/line"}}');var s=e(4848),r=e(8453);const o={description:"\u70b9\u76f8\u5173 API",sidebar_label:"point",title:"Points",authors:["Life_Checkpoint"],tags:["manim","math"],sidebar_position:1},t="point \u76f8\u5173\u6784\u9020 API",c={},d=[{value:"1. \u6784\u9020\u81ea\u7531\u70b9\uff08\u53f6\u5b50\u8282\u70b9\uff09",id:"1-\u6784\u9020\u81ea\u7531\u70b9\u53f6\u5b50\u8282\u70b9",level:3},{value:"<code>PointFree(coord: np.ndarray, name: str = &quot;&quot;)</code>",id:"pointfreecoord-npndarray-name-str--",level:4},{value:"2. \u6784\u9020\u7ea6\u675f\u70b9\uff08\u975e\u53f6\u5b50\u8282\u70b9\uff09",id:"2-\u6784\u9020\u7ea6\u675f\u70b9\u975e\u53f6\u5b50\u8282\u70b9",level:3},{value:"<code>PointConstraint(coord: np.ndarray, name: str = &quot;&quot;)</code>",id:"pointconstraintcoord-npndarray-name-str--",level:4},{value:"3. \u6784\u9020\u4e24\u70b9\u4e2d\u70b9",id:"3-\u6784\u9020\u4e24\u70b9\u4e2d\u70b9",level:3},{value:"<code>PointMidPP(point1: Point, point2: Point, name: str = &quot;&quot;)</code>",id:"pointmidpppoint1-point-point2-point-name-str--",level:4},{value:"4. \u6784\u9020\u7ebf\u6bb5\u4e2d\u70b9",id:"4-\u6784\u9020\u7ebf\u6bb5\u4e2d\u70b9",level:3},{value:"<code>PointMidL(line: LineSegment, name: str = &quot;&quot;)</code>",id:"pointmidlline-linesegment-name-str--",level:4},{value:"5. \u6784\u9020\u6bd4\u4f8b\u5ef6\u957f\uff08\u4f4d\u4f3c\uff09\u70b9",id:"5-\u6784\u9020\u6bd4\u4f8b\u5ef6\u957f\u4f4d\u4f3c\u70b9",level:3},{value:"<code>PointExtensionPP(start: Point, through: Point, factor: Number, name: str = &quot;&quot;)</code>",id:"pointextensionppstart-point-through-point-factor-number-name-str--",level:4},{value:"6. \u6784\u9020\u8f74\u5bf9\u79f0\u70b9",id:"6-\u6784\u9020\u8f74\u5bf9\u79f0\u70b9",level:3},{value:"<code>PointAxisymmetricPL(point: Point, line: Line, name: str = &quot;&quot;)</code>",id:"pointaxisymmetricplpoint-point-line-line-name-str--",level:4},{value:"7. \u6784\u9020\u5782\u8db3\u70b9",id:"7-\u6784\u9020\u5782\u8db3\u70b9",level:3},{value:"<code>PointVerticalPL(point: Point, line: Line, name: str = &quot;&quot;)</code>",id:"pointverticalplpoint-point-line-line-name-str--",level:4},{value:"8. \u6784\u9020\u5e73\u884c\u7ebf\u4e0a\u4e00\u70b9",id:"8-\u6784\u9020\u5e73\u884c\u7ebf\u4e0a\u4e00\u70b9",level:3},{value:"<code>PointParallelPL(point: Point, line: Line, distance: Number, name: str = &quot;&quot;)</code>",id:"pointparallelplpoint-point-line-line-distance-number-name-str--",level:4},{value:"9. \u6784\u9020\u53cd\u6f14\u70b9",id:"9-\u6784\u9020\u53cd\u6f14\u70b9",level:3},{value:"<code>PointInversionPCir(point: Point, circle: Circle, name: str = &quot;&quot;)</code>",id:"pointinversionpcirpoint-point-circle-circle-name-str--",level:4},{value:"10. \u6784\u9020\u4e24\u7ebf\u4ea4\u70b9",id:"10-\u6784\u9020\u4e24\u7ebf\u4ea4\u70b9",level:3},{value:"<code>PointIntersectionLL(line1: Line, line2: Line, regard_infinite: bool = False, name: str = &quot;&quot;)</code>",id:"pointintersectionllline1-line-line2-line-regard_infinite-bool--false-name-str--",level:4},{value:"11. \u6784\u9020\u7ebf\u4e0e\u5706\u7684\u4ea4\u70b9\u5bf9",id:"11-\u6784\u9020\u7ebf\u4e0e\u5706\u7684\u4ea4\u70b9\u5bf9",level:3},{value:"<code>Points2IntersectionLCir(line: Line, circle: Circle, filter: Optional[Callable[[np.ndarray], bool]] = None, regard_infinite: bool = False, name: str = &quot;&quot;)</code>",id:"points2intersectionlcirline-line-circle-circle-filter-optionalcallablenpndarray-bool--none-regard_infinite-bool--false-name-str--",level:4},{value:"12. \u6784\u9020\u4e24\u5706\u4ea4\u70b9\u5bf9",id:"12-\u6784\u9020\u4e24\u5706\u4ea4\u70b9\u5bf9",level:3},{value:"<code>Points2IntersectionCirCir(circle1: Circle, circle2: Circle, filter: Optional[Callable[[np.ndarray], bool]] = None, name: str = &quot;&quot;)</code>",id:"points2intersectioncircircircle1-circle-circle2-circle-filter-optionalcallablenpndarray-bool--none-name-str--",level:4},{value:"13. \u6784\u9020\u5e73\u79fb\u70b9",id:"13-\u6784\u9020\u5e73\u79fb\u70b9",level:3},{value:"<code>PointTranslationPV(point: Point, vector: Vector, name: str = &quot;&quot;)</code>",id:"pointtranslationpvpoint-point-vector-vector-name-str--",level:4},{value:"14. \u6784\u9020\u4e09\u89d2\u5f62\u91cd\u5fc3",id:"14-\u6784\u9020\u4e09\u89d2\u5f62\u91cd\u5fc3",level:3},{value:"<code>PointCentroidPPP(point1: Point, point2: Point, point3: Point, name: str = &quot;&quot;)</code>",id:"pointcentroidppppoint1-point-point2-point-point3-point-name-str--",level:4},{value:"15. \u6784\u9020\u4e09\u89d2\u5f62\u5916\u5fc3",id:"15-\u6784\u9020\u4e09\u89d2\u5f62\u5916\u5fc3",level:3},{value:"<code>PointCircumcenterPPP(point1: Point, point2: Point, point3: Point, name: str = &quot;&quot;)</code>",id:"pointcircumcenterppppoint1-point-point2-point-point3-point-name-str--",level:4},{value:"16. \u6784\u9020\u4e09\u89d2\u5f62\u5185\u5fc3",id:"16-\u6784\u9020\u4e09\u89d2\u5f62\u5185\u5fc3",level:3},{value:"<code>PointIncenterPPP(point1: Point, point2: Point, point3: Point, name: str = &quot;&quot;)</code>",id:"pointincenterppppoint1-point-point2-point-point3-point-name-str--",level:4},{value:"17. \u6784\u9020\u4e09\u89d2\u5f62\u5782\u5fc3",id:"17-\u6784\u9020\u4e09\u89d2\u5f62\u5782\u5fc3",level:3},{value:"<code>PointOrthocenterPPP(point1: Point, point2: Point, point3: Point, name: str = &quot;&quot;)</code>",id:"pointorthocenterppppoint1-point-point2-point-point3-point-name-str--",level:4},{value:"18. \u6784\u9020\u5706\u5fc3",id:"18-\u6784\u9020\u5706\u5fc3",level:3},{value:"<code>PointCircleCenter(circle: Circle, name: str = &quot;&quot;)</code>",id:"pointcirclecentercircle-circle-name-str--",level:4},{value:"19. \u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61",id:"19-\u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61",level:3},{value:"<code>PointOfPoints2(points2: Points2, index: Literal[0, 1], name: str = &quot;&quot;)</code>",id:"pointofpoints2points2-points2-index-literal0-1-name-str--",level:4},{value:"20. \u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61\u5217\u8868",id:"20-\u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61\u5217\u8868",level:3},{value:"<code>PointOfPoints2List(points2: Points2, name: str = &quot;&quot;)</code>",id:"pointofpoints2listpoints2-points2-name-str--",level:4},{value:"21. \u83b7\u53d6\u7b26\u5408\u6761\u4ef6\u7684\u5355\u70b9\u5bf9\u8c61",id:"21-\u83b7\u53d6\u7b26\u5408\u6761\u4ef6\u7684\u5355\u70b9\u5bf9\u8c61",level:3},{value:"<code>PointOfPoints2Fit(points2: Points2, filter: Callable[[np.ndarray], bool], name: str = &quot;&quot;)</code>",id:"pointofpoints2fitpoints2-points2-filter-callablenpndarray-bool-name-str--",level:4},{value:"22. \u65cb\u8f6c\u6784\u9020\u70b9",id:"22-\u65cb\u8f6c\u6784\u9020\u70b9",level:3},{value:"<code>PointRotatePPA(point: Point, center: Point, angle: Angle, name: str = &quot;&quot;)</code>",id:"pointrotateppapoint-point-center-point-angle-angle-name-str--",level:4}];function h(n){const i={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"point-\u76f8\u5173\u6784\u9020-api",children:"point \u76f8\u5173\u6784\u9020 API"})}),"\n",(0,s.jsx)(i.h3,{id:"1-\u6784\u9020\u81ea\u7531\u70b9\u53f6\u5b50\u8282\u70b9",children:"1. \u6784\u9020\u81ea\u7531\u70b9\uff08\u53f6\u5b50\u8282\u70b9\uff09"}),"\n",(0,s.jsx)(i.h4,{id:"pointfreecoord-npndarray-name-str--",children:(0,s.jsx)(i.code,{children:'PointFree(coord: np.ndarray, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e00\u4e2a\u81ea\u7531\u70b9\u3002\u81ea\u7531\u70b9\u5373\u4e0d\u53d7\u7ea6\u675f\u7684\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"coord"})," (np.ndarray): \u70b9\u7684\u5750\u6807\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4e00\u4e2a\u81ea\u7531\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"2-\u6784\u9020\u7ea6\u675f\u70b9\u975e\u53f6\u5b50\u8282\u70b9",children:"2. \u6784\u9020\u7ea6\u675f\u70b9\uff08\u975e\u53f6\u5b50\u8282\u70b9\uff09"}),"\n",(0,s.jsx)(i.h4,{id:"pointconstraintcoord-npndarray-name-str--",children:(0,s.jsx)(i.code,{children:'PointConstraint(coord: np.ndarray, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e00\u4e2a\u7ea6\u675f\u70b9\u3002\u7ea6\u675f\u70b9\u7684\u5750\u6807\u4f1a\u88ab\u540e\u7eed\u4f9d\u8d56\u66f4\u65b0\u8986\u76d6\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"coord"})," (np.ndarray): \u521d\u59cb\u5750\u6807\uff08\u4f1a\u88ab\u540e\u7eed\u66f4\u65b0\uff09\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4e00\u4e2a\u7ea6\u675f\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"3-\u6784\u9020\u4e24\u70b9\u4e2d\u70b9",children:"3. \u6784\u9020\u4e24\u70b9\u4e2d\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointmidpppoint1-point-point2-point-name-str--",children:(0,s.jsx)(i.code,{children:'PointMidPP(point1: Point, point2: Point, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e24\u4e2a\u70b9\u7684\u4e2d\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point1"})," (Point): \u7b2c\u4e00\u4e2a\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point2"})," (Point): \u7b2c\u4e8c\u4e2a\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4e2d\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"4-\u6784\u9020\u7ebf\u6bb5\u4e2d\u70b9",children:"4. \u6784\u9020\u7ebf\u6bb5\u4e2d\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointmidlline-linesegment-name-str--",children:(0,s.jsx)(i.code,{children:'PointMidL(line: LineSegment, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u7ebf\u6bb5\u7684\u4e2d\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line"})," (LineSegment): \u7ebf\u6bb5\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u7ebf\u6bb5\u4e2d\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"5-\u6784\u9020\u6bd4\u4f8b\u5ef6\u957f\u4f4d\u4f3c\u70b9",children:"5. \u6784\u9020\u6bd4\u4f8b\u5ef6\u957f\uff08\u4f4d\u4f3c\uff09\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointextensionppstart-point-through-point-factor-number-name-str--",children:(0,s.jsx)(i.code,{children:'PointExtensionPP(start: Point, through: Point, factor: Number, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e00\u4e2a\u57fa\u4e8e\u6bd4\u4f8b\u5ef6\u957f\u7684\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"start"})," (Point): \u8d77\u59cb\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"through"})," (Point): \u7ecf\u8fc7\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"factor"})," (Number): \u5ef6\u957f\u6bd4\u4f8b\uff0c1 \u8868\u793a\u6052\u7b49\u5ef6\u957f\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u5ef6\u957f\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"6-\u6784\u9020\u8f74\u5bf9\u79f0\u70b9",children:"6. \u6784\u9020\u8f74\u5bf9\u79f0\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointaxisymmetricplpoint-point-line-line-name-str--",children:(0,s.jsx)(i.code,{children:'PointAxisymmetricPL(point: Point, line: Line, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e00\u4e2a\u5173\u4e8e\u76f4\u7ebf\u7684\u8f74\u5bf9\u79f0\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point"})," (Point): \u539f\u59cb\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line"})," (Line): \u5bf9\u79f0\u8f74\u7ebf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u8f74\u5bf9\u79f0\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"7-\u6784\u9020\u5782\u8db3\u70b9",children:"7. \u6784\u9020\u5782\u8db3\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointverticalplpoint-point-line-line-name-str--",children:(0,s.jsx)(i.code,{children:'PointVerticalPL(point: Point, line: Line, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e00\u4e2a\u70b9\u5230\u76f4\u7ebf\u7684\u5782\u8db3\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point"})," (Point): \u539f\u59cb\u57fa\u51c6\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line"})," (Line): \u76ee\u6807\u76f4\u7ebf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u5782\u8db3\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"8-\u6784\u9020\u5e73\u884c\u7ebf\u4e0a\u4e00\u70b9",children:"8. \u6784\u9020\u5e73\u884c\u7ebf\u4e0a\u4e00\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointparallelplpoint-point-line-line-distance-number-name-str--",children:(0,s.jsx)(i.code,{children:'PointParallelPL(point: Point, line: Line, distance: Number, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e00\u4e2a\u5e73\u884c\u4e8e\u67d0\u6761\u76f4\u7ebf\u7684\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point"})," (Point): \u57fa\u51c6\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line"})," (Line): \u5e73\u884c\u57fa\u51c6\u7ebf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"distance"})," (Number): \u6cbf\u5e73\u884c\u65b9\u5411\u7684\u7edd\u5bf9\u8ddd\u79bb\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u5e73\u884c\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"9-\u6784\u9020\u53cd\u6f14\u70b9",children:"9. \u6784\u9020\u53cd\u6f14\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointinversionpcirpoint-point-circle-circle-name-str--",children:(0,s.jsx)(i.code,{children:'PointInversionPCir(point: Point, circle: Circle, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e00\u4e2a\u53cd\u6f14\u70b9\uff0c\u76f8\u5bf9\u4e8e\u67d0\u4e2a\u5706\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point"})," (Point): \u539f\u59cb\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"circle"})," (Circle): \u53cd\u6f14\u57fa\u51c6\u5706\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u53cd\u6f14\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"10-\u6784\u9020\u4e24\u7ebf\u4ea4\u70b9",children:"10. \u6784\u9020\u4e24\u7ebf\u4ea4\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointintersectionllline1-line-line2-line-regard_infinite-bool--false-name-str--",children:(0,s.jsx)(i.code,{children:'PointIntersectionLL(line1: Line, line2: Line, regard_infinite: bool = False, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e24\u6761\u7ebf\u7684\u4ea4\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line1"})," (Line): \u7b2c\u4e00\u6761\u7ebf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line2"})," (Line): \u7b2c\u4e8c\u6761\u7ebf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"regard_infinite"})," (bool, \u53ef\u9009): \u662f\u5426\u89c6\u4e3a\u65e0\u9650\u957f\u76f4\u7ebf\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(i.code,{children:"False"}),"\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4ea4\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"11-\u6784\u9020\u7ebf\u4e0e\u5706\u7684\u4ea4\u70b9\u5bf9",children:"11. \u6784\u9020\u7ebf\u4e0e\u5706\u7684\u4ea4\u70b9\u5bf9"}),"\n",(0,s.jsx)(i.h4,{id:"points2intersectionlcirline-line-circle-circle-filter-optionalcallablenpndarray-bool--none-regard_infinite-bool--false-name-str--",children:(0,s.jsx)(i.code,{children:'Points2IntersectionLCir(line: Line, circle: Circle, filter: Optional[Callable[[np.ndarray], bool]] = None, regard_infinite: bool = False, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u7ebf\u4e0e\u5706\u7684\u4ea4\u70b9\u5bf9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"line"})," (Line): \u76f4\u7ebf/\u7ebf\u6bb5\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"circle"})," (Circle): \u5706\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"filter"})," (Callable[[np.ndarray], bool], \u53ef\u9009): \u7ed9\u5b9a\u6761\u4ef6\uff0c\u7b5b\u9009\u8fd4\u56de\u7b26\u5408\u6761\u4ef6\u7684\u70b9"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"regard_infinite"})," (bool, \u53ef\u9009): \u662f\u5426\u89c6\u4e3a\u65e0\u9650\u957f\u76f4\u7ebf\uff0c\u9ed8\u8ba4\u4e3a ",(0,s.jsx)(i.code,{children:"False"}),"\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Union[List[Point], Point]"}),": \u8fd4\u56de\u4ea4\u70b9\u5bf9\u5217\u8868\uff0c\u6216\u5355\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u4ea4\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"12-\u6784\u9020\u4e24\u5706\u4ea4\u70b9\u5bf9",children:"12. \u6784\u9020\u4e24\u5706\u4ea4\u70b9\u5bf9"}),"\n",(0,s.jsx)(i.h4,{id:"points2intersectioncircircircle1-circle-circle2-circle-filter-optionalcallablenpndarray-bool--none-name-str--",children:(0,s.jsx)(i.code,{children:'Points2IntersectionCirCir(circle1: Circle, circle2: Circle, filter: Optional[Callable[[np.ndarray], bool]] = None, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e24\u5706\u7684\u4ea4\u70b9\u5bf9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"circle1"})," (Circle): \u7b2c\u4e00\u4e2a\u5706\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"circle2"})," (Circle): \u7b2c\u4e8c\u4e2a\u5706\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"filter"})," (Callable[[np.ndarray], bool], \u53ef\u9009): \u7ed9\u5b9a\u6761\u4ef6\uff0c\u7b5b\u9009\u8fd4\u56de\u7b26\u5408\u6761\u4ef6\u7684\u70b9"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Union[List[Point], Point]"}),": \u8fd4\u56de\u4ea4\u70b9\u5bf9\u5217\u8868\uff0c\u6216\u5355\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u4ea4\u70b9\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"13-\u6784\u9020\u5e73\u79fb\u70b9",children:"13. \u6784\u9020\u5e73\u79fb\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointtranslationpvpoint-point-vector-vector-name-str--",children:(0,s.jsx)(i.code,{children:'PointTranslationPV(point: Point, vector: Vector, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u5e73\u79fb\u540e\u7684\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point"})," (Point): \u539f\u59cb\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"vector"})," (Vector): \u5e73\u79fb\u5411\u91cf\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u5e73\u79fb\u70b9\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"14-\u6784\u9020\u4e09\u89d2\u5f62\u91cd\u5fc3",children:"14. \u6784\u9020\u4e09\u89d2\u5f62\u91cd\u5fc3"}),"\n",(0,s.jsx)(i.h4,{id:"pointcentroidppppoint1-point-point2-point-point3-point-name-str--",children:(0,s.jsx)(i.code,{children:'PointCentroidPPP(point1: Point, point2: Point, point3: Point, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e09\u89d2\u5f62\u7684\u91cd\u5fc3\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point1"})," (Point): \u7b2c\u4e00\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point2"})," (Point): \u7b2c\u4e8c\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point3"})," (Point): \u7b2c\u4e09\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4e09\u89d2\u5f62\u91cd\u5fc3\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"15-\u6784\u9020\u4e09\u89d2\u5f62\u5916\u5fc3",children:"15. \u6784\u9020\u4e09\u89d2\u5f62\u5916\u5fc3"}),"\n",(0,s.jsx)(i.h4,{id:"pointcircumcenterppppoint1-point-point2-point-point3-point-name-str--",children:(0,s.jsx)(i.code,{children:'PointCircumcenterPPP(point1: Point, point2: Point, point3: Point, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e09\u89d2\u5f62\u7684\u5916\u5fc3\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point1"})," (Point): \u7b2c\u4e00\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point2"})," (Point): \u7b2c\u4e8c\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point3"})," (Point): \u7b2c\u4e09\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4e09\u89d2\u5f62\u5916\u5fc3\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"16-\u6784\u9020\u4e09\u89d2\u5f62\u5185\u5fc3",children:"16. \u6784\u9020\u4e09\u89d2\u5f62\u5185\u5fc3"}),"\n",(0,s.jsx)(i.h4,{id:"pointincenterppppoint1-point-point2-point-point3-point-name-str--",children:(0,s.jsx)(i.code,{children:'PointIncenterPPP(point1: Point, point2: Point, point3: Point, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e09\u89d2\u5f62\u7684\u5185\u5fc3\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point1"})," (Point): \u7b2c\u4e00\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point2"})," (Point): \u7b2c\u4e8c\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point3"})," (Point): \u7b2c\u4e09\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4e09\u89d2\u5f62\u5185\u5fc3\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"17-\u6784\u9020\u4e09\u89d2\u5f62\u5782\u5fc3",children:"17. \u6784\u9020\u4e09\u89d2\u5f62\u5782\u5fc3"}),"\n",(0,s.jsx)(i.h4,{id:"pointorthocenterppppoint1-point-point2-point-point3-point-name-str--",children:(0,s.jsx)(i.code,{children:'PointOrthocenterPPP(point1: Point, point2: Point, point3: Point, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u4e09\u89d2\u5f62\u7684\u5782\u5fc3\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point1"})," (Point): \u7b2c\u4e00\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point2"})," (Point): \u7b2c\u4e8c\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point3"})," (Point): \u7b2c\u4e09\u4e2a\u9876\u70b9\u3002"]}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"name"})}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"(str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u4e09\u89d2\u5f62\u5782\u5fc3\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"18-\u6784\u9020\u5706\u5fc3",children:"18. \u6784\u9020\u5706\u5fc3"}),"\n",(0,s.jsx)(i.h4,{id:"pointcirclecentercircle-circle-name-str--",children:(0,s.jsx)(i.code,{children:'PointCircleCenter(circle: Circle, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u6784\u9020\u5706\u7684\u5706\u5fc3\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"circle"})," (Circle): \u5706\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u5706\u5fc3\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"19-\u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61",children:"19. \u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61"}),"\n",(0,s.jsx)(i.h4,{id:"pointofpoints2points2-points2-index-literal0-1-name-str--",children:(0,s.jsx)(i.code,{children:'PointOfPoints2(points2: Points2, index: Literal[0, 1], name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u4ece\u4e00\u4e2a\u70b9\u5bf9\u5bf9\u8c61\u4e2d\u83b7\u53d6\u5355\u72ec\u7684\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"points2"})," (Points2): \u4e24\u70b9\u7ec4\u5408\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"index"})," (Literal[0, 1]): \u4e24\u70b9\u4e2d\u7684\u5176\u4e2d\u4e00\u70b9\u7d22\u5f15\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u6307\u5b9a\u70b9\u7684\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"20-\u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61\u5217\u8868",children:"20. \u83b7\u53d6\u4e24\u70b9\u4e2d\u7684\u5355\u70b9\u5bf9\u8c61\u5217\u8868"}),"\n",(0,s.jsx)(i.h4,{id:"pointofpoints2listpoints2-points2-name-str--",children:(0,s.jsx)(i.code,{children:'PointOfPoints2List(points2: Points2, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u83b7\u53d6\u4e24\u70b9\u5bf9\u8c61\u7684\u6240\u6709\u70b9\u3002"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"points2"})," (Points2): \u4e24\u70b9\u7ec4\u5408\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"List[Point]"}),": \u8fd4\u56de\u5305\u542b\u4e24\u4e2a\u70b9\u7684\u5217\u8868\u3002"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"21-\u83b7\u53d6\u7b26\u5408\u6761\u4ef6\u7684\u5355\u70b9\u5bf9\u8c61",children:"21. \u83b7\u53d6\u7b26\u5408\u6761\u4ef6\u7684\u5355\u70b9\u5bf9\u8c61"}),"\n",(0,s.jsx)(i.h4,{id:"pointofpoints2fitpoints2-points2-filter-callablenpndarray-bool-name-str--",children:(0,s.jsx)(i.code,{children:'PointOfPoints2Fit(points2: Points2, filter: Callable[[np.ndarray], bool], name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u83b7\u53d6\u7b26\u5408\u6761\u4ef6\u7684\u7b2c\u4e00\u4e2a\u5355\u70b9\u5bf9\u8c61"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"points2"})," (Points2): \u4e24\u70b9\u7ec4\u5408\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"filter"})," (Callable[[np.ndarray], bool]): \u7ed9\u5b9a\u70b9\u5750\u6807\uff0c\u5224\u5b9a\u5750\u6807\u662f\u5426\u6ee1\u8db3\u6761\u4ef6\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u7b26\u5408\u6761\u4ef6\u7684\u7b2c\u4e00\u4e2a\u70b9"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{}),"\n",(0,s.jsx)(i.h3,{id:"22-\u65cb\u8f6c\u6784\u9020\u70b9",children:"22. \u65cb\u8f6c\u6784\u9020\u70b9"}),"\n",(0,s.jsx)(i.h4,{id:"pointrotateppapoint-point-center-point-angle-angle-name-str--",children:(0,s.jsx)(i.code,{children:'PointRotatePPA(point: Point, center: Point, angle: Angle, name: str = "")'})}),"\n",(0,s.jsx)(i.p,{children:"\u901a\u8fc7\u65cb\u8f6c\u6784\u9020\u4e00\u4e2a\u70b9"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u53c2\u6570"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"point"})," (Point): \u5c06\u8981\u65cb\u8f6c\u7684\u70b9\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"center"})," (Point): \u65cb\u8f6c\u4e2d\u5fc3\u70b9\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"angle"})," (Angle): \u5c06\u8981\u65cb\u8f6c\u7684\u89d2\u5ea6\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"})," (str, \u53ef\u9009): \u70b9\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"\u8fd4\u56de\u503c"}),":"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"Point"}),": \u8fd4\u56de\u65cb\u8f6c\u70b9\u5bf9\u8c61"]}),"\n"]}),"\n",(0,s.jsx)(i.hr,{})]})}function x(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>o,x:()=>t});var l=e(6540);const s={},r=l.createContext(s);function o(n){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function t(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),l.createElement(r.Provider,{value:i},n.children)}}}]);