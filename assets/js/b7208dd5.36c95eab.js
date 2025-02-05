"use strict";(self.webpackChunklife_checkpoint_github_io=self.webpackChunklife_checkpoint_github_io||[]).push([[7601],{3044:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"computer_science/mathematica/mma-mind-graph/index","title":"MMA \u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236","description":"\u601d\u7ef4\u5bfc\u56fe\u8f6f\u4ef6\u5f88\u591a\uff0c\u7528\u8d77\u6765\u4e5f\u4e0d\u9519\uff0c\u7528 Mathematica \u8fd8\u662f\u4f1a\u6709\u70b9\u6298\u78e8","source":"@site/docs/computer_science/mathematica/mma-mind-graph/index.md","sourceDirName":"computer_science/mathematica/mma-mind-graph","slug":"/computer_science/mathematica/mma-mind-graph/","permalink":"/docs/computer_science/mathematica/mma-mind-graph/","draft":false,"unlisted":false,"editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io/tree/main/docs/computer_science/mathematica/mma-mind-graph/index.md","tags":[{"inline":true,"label":"Mathematica","permalink":"/docs/tags/mathematica"}],"version":"current","frontMatter":{"description":"\u601d\u7ef4\u5bfc\u56fe\u8f6f\u4ef6\u5f88\u591a\uff0c\u7528\u8d77\u6765\u4e5f\u4e0d\u9519\uff0c\u7528 Mathematica \u8fd8\u662f\u4f1a\u6709\u70b9\u6298\u78e8","sidebar_label":"\u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236","title":"MMA \u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236","authors":["Life_Checkpoint"],"tags":["Mathematica"]},"sidebar":"tutorialSidebar","previous":{"title":"Sokoban \u5f00\u53d1\u603b\u7ed3","permalink":"/docs/computer_science/projects/sokoban/"},"next":{"title":"\u719f\u7ec3\u638c\u63e1\u542f\u660e\u8d85\u7b97\u7684\u8fdb\u5165\u4e0e\u9000\u51fa","permalink":"/docs/computer_science/hpc/qimin-intro/"}}');var s=a(4848),r=a(8453);const i={description:"\u601d\u7ef4\u5bfc\u56fe\u8f6f\u4ef6\u5f88\u591a\uff0c\u7528\u8d77\u6765\u4e5f\u4e0d\u9519\uff0c\u7528 Mathematica \u8fd8\u662f\u4f1a\u6709\u70b9\u6298\u78e8",sidebar_label:"\u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236",title:"MMA \u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236",authors:["Life_Checkpoint"],tags:["Mathematica"]},o="Mathematica \u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236",c={},d=[];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"mathematica-\u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236",children:"Mathematica \u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u672c\u6587\u5df2\u7ecf\u540c\u6b65\u4e8e\u77e5\u4e4e"})," \ud83d\udc49 ",(0,s.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/16488372920",children:"Mathematica \u601d\u7ef4\u5bfc\u56fe\u7ed8\u5236\uff01"})]}),"\n",(0,s.jsx)(n.p,{children:"\u770b\u5230\u4e00\u4e2a\u95ee\u9898\u6240\u4ee5\u5199\u4e86\u8fd9\u7bc7\u6587\u7ae0..."}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u5b9e\u601d\u7ef4\u5bfc\u56fe\u8f6f\u4ef6\u5f88\u591a\uff0c\u7528\u8d77\u6765\u4e5f\u4e0d\u9519\uff0c\u7528 Mathematica \u8fd8\u662f\u4f1a\u6709\u70b9\u6298\u78e8\u7684\u5bf9\u5427\uff08\uff1f"}),"\n",(0,s.jsx)(n.p,{children:"\u61d2\u5f97\u624b\u5199\uff0c\u5bf9\u7740 Deepseek \u548c 4o \u52a8\u4e86\u4e00\u4e2d\u5348\u5634\u76ae\u5b50\uff0c\u4e5f\u7b97\u62ff\u51fa\u4e2a\u50cf\u6837\u7684\u5bfc\u56fe\u8f6e\u5b50\u6765"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u4ee3\u7801\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'CreateMindMap[nodes_,edges_,center_,options:OptionsPattern[{ColorScheme->"BlueGreenYellow",VertexSizeRange->{100,60},FontSizeRange->{18,10},EdgeThicknessRange->{0.02,0.004},GraphLayout->"RadialEmbedding",ImageSize->800}]]:=Module[{g,depths,maxDepth,colorScheme,vertexColors,vertexSizes,fontSizes,fontSizesAssoc,brightness,fontColors,fontColorsAssoc,depthAssoc,edgeDepth,vertexColorsAssoc,edgeThickness,mindMap},\r\n(*\u521b\u5efa\u56fe\u5e76\u8ba1\u7b97\u8282\u70b9\u6df1\u5ea6*)\r\ng=Graph[nodes,edges];\r\ndepths=GraphDistance[g,center,#]&/@nodes;\r\nmaxDepth=Max[depths];\r\n(*\u5b9a\u4e49\u989c\u8272\u65b9\u6848\u548c\u8282\u70b9\u5927\u5c0f*)\r\ncolorScheme=ColorData[OptionValue[ColorScheme]];\r\nvertexColors=colorScheme/@Rescale[depths,{0,maxDepth}];\r\nvertexSizes=Rescale[depths,{0,maxDepth},OptionValue[VertexSizeRange]];\r\n(*\u5b9a\u4e49\u5b57\u4f53\u5927\u5c0f*)\r\nfontSizes=Rescale[depths,{0,maxDepth},OptionValue[FontSizeRange]];\r\nfontSizesAssoc=AssociationThread[nodes->fontSizes];\r\n(*\u5b9a\u4e49\u4eae\u5ea6\u8ba1\u7b97\u51fd\u6570\u548c\u5b57\u4f53\u989c\u8272*)\r\nbrightness[color_]:=ColorConvert[color,"HSB"][[3]];\r\nfontColors=If[brightness[#]<0.6,White,Black]&/@vertexColors;\r\nfontColorsAssoc=AssociationThread[nodes->fontColors];\r\n(*\u521b\u5efa\u8fb9\u5230\u6df1\u5ea6\u7684\u5173\u8054*)\r\ndepthAssoc=AssociationThread[nodes->depths];\r\nedgeDepth=depthAssoc[#[[2]]]&/@edges;\r\n(*\u8fb9\u5230\u989c\u8272\u7684\u5173\u8054*)\r\nvertexColorsAssoc=AssociationThread[nodes->vertexColors];\r\n(*\u8bbe\u7f6e\u8fb9\u7684\u7c97\u7ec6*)\r\nedgeThickness=Rescale[edgeDepth,{0,maxDepth},OptionValue[EdgeThicknessRange]];\r\n(*\u7ed8\u5236\u601d\u7ef4\u5bfc\u56fe*)\r\nmindMap=Graph[nodes,edges,VertexShapeFunction->(Inset[Graphics[{vertexColorsAssoc[#2],Rectangle[{-1,-0.5},{1,0.5},RoundingRadius->0.2],Text[Style[#2,fontColorsAssoc[#2],fontSizesAssoc[#2],Bold],{0,0}]},ImageSize->vertexSizes[[Position[nodes,#2][[1,1]]]]],#1]&),EdgeShapeFunction->GraphElementData["CurvedArc","Curvature"->0.2],EdgeStyle->Thread[edges->(Thickness[#]&/@edgeThickness)],GraphLayout->OptionValue[GraphLayout],ImageSize->OptionValue[ImageSize]];\r\nmindMap]\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u54b3\uff0c\u770b\u770b\u6548\u679c\u5427"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f8b 1"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'nodes={"\u4e2d\u5fc3\u4e3b\u9898","\u5b50\u4e3b\u9898A","\u5b50\u4e3b\u9898B","\u5b50\u4e3b\u9898C","\u5b50\u4e3b\u9898A1","\u5b50\u4e3b\u9898A2","\u5b50\u4e3b\u9898B1","\u5b50\u4e3b\u9898B2","\u5b50\u4e3b\u9898C1","\u5b50\u4e3b\u9898C2","\u5b50\u4e3b\u9898A1a","\u5b50\u4e3b\u9898A1b","\u5b50\u4e3b\u9898A2a","\u5b50\u4e3b\u9898B1a","\u5b50\u4e3b\u9898B1b","\u5b50\u4e3b\u9898B2a","\u5b50\u4e3b\u9898C1a","\u5b50\u4e3b\u9898C1b","\u5b50\u4e3b\u9898C2a","\u5b50\u4e3b\u9898C2b"};\r\nedges={"\u4e2d\u5fc3\u4e3b\u9898"->"\u5b50\u4e3b\u9898A","\u4e2d\u5fc3\u4e3b\u9898"->"\u5b50\u4e3b\u9898B","\u4e2d\u5fc3\u4e3b\u9898"->"\u5b50\u4e3b\u9898C","\u5b50\u4e3b\u9898A"->"\u5b50\u4e3b\u9898A1","\u5b50\u4e3b\u9898A"->"\u5b50\u4e3b\u9898A2","\u5b50\u4e3b\u9898B"->"\u5b50\u4e3b\u9898B1","\u5b50\u4e3b\u9898B"->"\u5b50\u4e3b\u9898B2","\u5b50\u4e3b\u9898C"->"\u5b50\u4e3b\u9898C1","\u5b50\u4e3b\u9898C"->"\u5b50\u4e3b\u9898C2","\u5b50\u4e3b\u9898A1"->"\u5b50\u4e3b\u9898A1a","\u5b50\u4e3b\u9898A1"->"\u5b50\u4e3b\u9898A1b","\u5b50\u4e3b\u9898A2"->"\u5b50\u4e3b\u9898A2a","\u5b50\u4e3b\u9898B1"->"\u5b50\u4e3b\u9898B1a","\u5b50\u4e3b\u9898B1"->"\u5b50\u4e3b\u9898B1b","\u5b50\u4e3b\u9898B2"->"\u5b50\u4e3b\u9898B2a","\u5b50\u4e3b\u9898C1"->"\u5b50\u4e3b\u9898C1a","\u5b50\u4e3b\u9898C1"->"\u5b50\u4e3b\u9898C1b","\u5b50\u4e3b\u9898C2"->"\u5b50\u4e3b\u9898C2a","\u5b50\u4e3b\u9898C2"->"\u5b50\u4e3b\u9898C2b"};\r\n\r\nCreateMindMap[nodes,edges,"\u4e2d\u5fc3\u4e3b\u9898",ColorScheme->"BlueGreenYellow",VertexSizeRange->{120,80},FontSizeRange->{20,12},EdgeThicknessRange->{0.02,0.004},GraphLayout->"SpringEmbedding",ImageSize->800]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"eg1",src:a(9516).A+"",width:"1667",height:"1502"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f8b 2"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'nodes={"\u6838\u5fc3\u4e3b\u9898","\u5206\u652f1","\u5206\u652f2","\u5206\u652f3","\u5206\u652f1-\u5b501","\u5206\u652f1-\u5b502","\u5206\u652f1-\u5b503","\u5206\u652f2-\u5b501","\u5206\u652f2-\u5b502","\u5206\u652f2-\u5b503","\u5206\u652f3-\u5b501","\u5206\u652f3-\u5b502","\u5206\u652f3-\u5b503","\u5206\u652f1-\u5b501-\u5b591","\u5206\u652f1-\u5b501-\u5b592","\u5206\u652f1-\u5b502-\u5b591","\u5206\u652f1-\u5b502-\u5b592","\u5206\u652f1-\u5b503-\u5b591","\u5206\u652f1-\u5b503-\u5b592","\u5206\u652f2-\u5b501-\u5b591","\u5206\u652f2-\u5b501-\u5b592","\u5206\u652f2-\u5b502-\u5b591","\u5206\u652f2-\u5b502-\u5b592","\u5206\u652f2-\u5b503-\u5b591","\u5206\u652f2-\u5b503-\u5b592","\u5206\u652f3-\u5b501-\u5b591","\u5206\u652f3-\u5b501-\u5b592","\u5206\u652f3-\u5b502-\u5b591","\u5206\u652f3-\u5b502-\u5b592","\u5206\u652f3-\u5b503-\u5b591","\u5206\u652f3-\u5b503-\u5b592"};\r\nedges={"\u6838\u5fc3\u4e3b\u9898"->"\u5206\u652f1","\u6838\u5fc3\u4e3b\u9898"->"\u5206\u652f2","\u6838\u5fc3\u4e3b\u9898"->"\u5206\u652f3","\u5206\u652f1"->"\u5206\u652f1-\u5b501","\u5206\u652f1"->"\u5206\u652f1-\u5b502","\u5206\u652f1"->"\u5206\u652f1-\u5b503","\u5206\u652f2"->"\u5206\u652f2-\u5b501","\u5206\u652f2"->"\u5206\u652f2-\u5b502","\u5206\u652f2"->"\u5206\u652f2-\u5b503","\u5206\u652f3"->"\u5206\u652f3-\u5b501","\u5206\u652f3"->"\u5206\u652f3-\u5b502","\u5206\u652f3"->"\u5206\u652f3-\u5b503","\u5206\u652f1-\u5b501"->"\u5206\u652f1-\u5b501-\u5b591","\u5206\u652f1-\u5b501"->"\u5206\u652f1-\u5b501-\u5b592","\u5206\u652f1-\u5b502"->"\u5206\u652f1-\u5b502-\u5b591","\u5206\u652f1-\u5b502"->"\u5206\u652f1-\u5b502-\u5b592","\u5206\u652f1-\u5b503"->"\u5206\u652f1-\u5b503-\u5b591","\u5206\u652f1-\u5b503"->"\u5206\u652f1-\u5b503-\u5b592","\u5206\u652f2-\u5b501"->"\u5206\u652f2-\u5b501-\u5b591","\u5206\u652f2-\u5b501"->"\u5206\u652f2-\u5b501-\u5b592","\u5206\u652f2-\u5b502"->"\u5206\u652f2-\u5b502-\u5b591","\u5206\u652f2-\u5b502"->"\u5206\u652f2-\u5b502-\u5b592","\u5206\u652f2-\u5b503"->"\u5206\u652f2-\u5b503-\u5b591","\u5206\u652f2-\u5b503"->"\u5206\u652f2-\u5b503-\u5b592","\u5206\u652f3-\u5b501"->"\u5206\u652f3-\u5b501-\u5b591","\u5206\u652f3-\u5b501"->"\u5206\u652f3-\u5b501-\u5b592","\u5206\u652f3-\u5b502"->"\u5206\u652f3-\u5b502-\u5b591","\u5206\u652f3-\u5b502"->"\u5206\u652f3-\u5b502-\u5b592","\u5206\u652f3-\u5b503"->"\u5206\u652f3-\u5b503-\u5b591","\u5206\u652f3-\u5b503"->"\u5206\u652f3-\u5b503-\u5b592"};\r\n\r\nCreateMindMap[nodes,edges,"\u6838\u5fc3\u4e3b\u9898",ColorScheme->"TemperatureMap",VertexSizeRange->{120,90},FontSizeRange->{20,10},EdgeThicknessRange->{0.03,0.005},GraphLayout->"RadialEmbedding",ImageSize->1200]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"eg2",src:a(151).A+"",width:"1667",height:"1583"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f8b 3"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'nodes={"\u6839\u8282\u70b9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U"};\r\nedges={"\u6839\u8282\u70b9"->"A","\u6839\u8282\u70b9"->"B","\u6839\u8282\u70b9"->"C","A"->"D","A"->"E","B"->"F","B"->"G","B"->"H","C"->"I","D"->"J","E"->"K","E"->"L","F"->"M","G"->"N","G"->"O","G"->"P","H"->"Q","I"->"R","J"->"S","K"->"T","P"->"U"};\r\n\r\nCreateMindMap[nodes,edges,"\u6839\u8282\u70b9",ColorScheme->"Rainbow",VertexSizeRange->{100,50},FontSizeRange->{16,8},EdgeThicknessRange->{0.025,0.005},GraphLayout->"LayeredDigraphEmbedding",ImageSize->1000]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"eg3",src:a(7134).A+"",width:"1667",height:"841"})}),"\n",(0,s.jsx)(n.p,{children:"\u6548\u679c\u8fd8\u884c\u7f62~"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u5e0c\u671b\u81ea\u5b9a\u4e49\u66f4\u591a\u6548\u679c\uff0c\u4e5f\u53ef\u4ee5\u7f1d\u7f1d\u8865\u8865\uff08\u6bd4\u5982\u8fde\u63a5\u7ebf\u989c\u8272\u4e00\u7c7b\u7684\u9700\u6c42...\uff09"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"\u5947\u602a\uff0c\u4e3a\u4ec0\u4e48 Mathematica \u6ca1\u6cd5\u9ad8\u4eae\uff0c\u8981\u4e0d\u5148\u7528 js \u9ad8\u4eae\u9876\u7740..."})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9516:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/eg1-499f62fe4445931ec01ee3dd84fe521f.png"},151:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/eg2-2f67771af9da2fe229620d707a6973d2.png"},7134:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/eg3-a9af67b1548b2bdb6a96e37204b5ed00.png"},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);