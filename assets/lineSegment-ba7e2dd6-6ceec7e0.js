import{_ as H,u as N,r as p,e as V,h as q,j as R}from"./index.js";import{BoardContext as z,LINE_LAYER_OFFSET as W,VERTEX_LAYER_OFFSET as I}from"./graph-7f1c2326-abce282b.js";import"./css-ab4d83ca-d016d639.js";const $=H.memo(function E(B){let{name:h,id:U,SVs:r,actions:c,sourceOfUpdate:F,callAction:u}=N(B);E.ignoreActionsWithoutCore=()=>!0;const i=p.useContext(z);let e=p.useRef(null),n=p.useRef(null),o=p.useRef(null),y=p.useRef(null),_=p.useRef(null),v=p.useRef(!1),S=p.useRef(!1),l=p.useRef(null),D=p.useRef(null),j=p.useRef(null),s=p.useRef(null),P=p.useRef(null),Y=p.useRef(null),k=p.useRef(!1),O=p.useRef(!1),L=p.useRef(!1);Y.current=r.numericalEndpoints,k.current=r.fixed,O.current=!r.draggable||r.fixLocation||r.fixed,L.current=!r.endpointsDraggable||r.fixed||r.fixLocation;const X=V(q);p.useEffect(()=>()=>{e.current&&M(),i&&i.off("move",G)},[]),p.useEffect(()=>{i&&i.on("move",G)},[i]);function T(){if(r.numericalEndpoints.length!==2||r.numericalEndpoints.some(t=>t.length!==2)){e.current=null,n.current=null,o.current=null;return}let a=r.labelForGraph!=="",g=X==="dark"?r.selectedStyle.lineColorDarkMode:r.selectedStyle.lineColor;var f={name:r.labelForGraph,visible:!r.hidden,withlabel:a,fixed:k.current,layer:10*r.layer+W,strokeColor:g,strokeOpacity:r.selectedStyle.lineOpacity,highlightStrokeColor:g,highlightStrokeOpacity:r.selectedStyle.lineOpacity*.5,strokeWidth:r.selectedStyle.lineWidth,highlightStrokeWidth:r.selectedStyle.lineWidth,dash:J(r.selectedStyle.lineStyle),highlight:!O.current};if(a){let t,d,b;r.labelPosition==="upperright"?(b=[5,5],t="left",d="bottom"):r.labelPosition==="upperleft"?(b=[-5,5],t="right",d="bottom"):r.labelPosition==="lowerright"?(b=[5,-5],t="left",d="top"):(b=[-5,-5],t="right",d="top"),f.label={offset:b,anchorx:t,anchory:d,highlight:!1},r.labelHasLatex&&(f.label.useMathJax=!0),r.applyStyleToLabel?f.label.strokeColor=g:f.label.strokeColor="var(--canvastext)"}else f.label={highlight:!1},r.labelHasLatex&&(f.label.useMathJax=!0);let x=!L.current&&!r.hidden,m=Object.assign({},f);Object.assign(m,{withLabel:!1,fixed:!1,highlight:!0,fillColor:"none",strokeColor:"none",highlightStrokeColor:"none",highlightFillColor:getComputedStyle(document.documentElement).getPropertyValue("--mainGray"),layer:10*r.layer+I,showInfoBox:r.showCoordsWhenDragging,visible:x});let C=[[...r.numericalEndpoints[0]],[...r.numericalEndpoints[1]]];return n.current=i.create("point",C[0],m),o.current=i.create("point",C[1],m),e.current=i.create("segment",[n.current,o.current],f),e.isDraggable=!O.current,n.current.on("drag",t=>A(1,t)),o.current.on("drag",t=>A(2,t)),e.current.on("drag",t=>A(0,t)),n.current.on("up",()=>{l.current===1?u({action:c.moveLineSegment,args:{point1coords:s.current}}):!S.current&&!k.current&&u({action:c.lineSegmentClicked,args:{name:h}}),P.current=null,v.current=!1}),o.current.on("up",()=>{l.current===2?u({action:c.moveLineSegment,args:{point2coords:s.current}}):!S.current&&!k.current&&u({action:c.lineSegmentClicked,args:{name:h}}),P.current=null,v.current=!1}),e.current.on("up",function(t){l.current===0?u({action:c.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1]}}):!S.current&&P.current===null&&!k.current&&u({action:c.lineSegmentClicked,args:{name:h}}),v.current=!1}),n.current.on("keyfocusout",()=>{l.current===1&&u({action:c.moveLineSegment,args:{point1coords:s.current}}),l.current=null}),o.current.on("keyfocusout",()=>{l.current===2&&u({action:c.moveLineSegment,args:{point2coords:s.current}}),l.current=null}),e.current.on("keyfocusout",function(t){l.current===0&&u({action:c.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1]}}),l.current=null}),n.current.on("down",t=>{l.current=null,y.current=[t.x,t.y],P.current=1,v.current=!0,S.current=!1,L.current||u({action:c.lineSegmentFocused,args:{name:h}})}),n.current.on("hit",t=>{l.current=null,u({action:c.lineSegmentFocused,args:{name:h}})}),o.current.on("down",t=>{l.current=null,y.current=[t.x,t.y],P.current=2,v.current=!0,S.current=!1,L.current||u({action:c.lineSegmentFocused,args:{name:h}})}),o.current.on("hit",t=>{l.current=null,u({action:c.lineSegmentFocused,args:{name:h}})}),e.current.on("down",function(t){l.current=null,y.current=[t.x,t.y],_.current=[[...n.current.coords.scrCoords],[...o.current.coords.scrCoords]],v.current=!0,S.current=!1,P.current===null&&!k.current&&u({action:c.lineSegmentFocused,args:{name:h}})}),e.current.on("hit",t=>{l.current=null,u({action:c.lineSegmentFocused,args:{name:h}})}),n.current.on("keydown",function(t){t.key==="Enter"&&(l.current===1&&u({action:c.moveLineSegment,args:{point1coords:s.current}}),l.current=null,u({action:c.lineSegmentClicked,args:{name:h}}))}),o.current.on("keydown",function(t){t.key==="Enter"&&(l.current===2&&u({action:c.moveLineSegment,args:{point2coords:s.current}}),l.current=null,u({action:c.lineSegmentClicked,args:{name:h}}))}),e.current.on("keydown",function(t){t.key==="Enter"&&(l.current===0&&u({action:c.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1]}}),l.current=null,u({action:c.lineSegmentClicked,args:{name:h}}))}),j.current=r.labelPosition,D.current=a,e.current}function G(a){v.current&&(Math.abs(a.x-y.current[0])>.1||Math.abs(a.y-y.current[1])>.1)&&(S.current=!0)}function A(a,g){let f=g.type==="pointermove";if(!f||Math.abs(g.x-y.current[0])>.1||Math.abs(g.y-y.current[1])>.1)if(l.current=a,a==1)s.current=[e.current.point1.X(),e.current.point1.Y()],u({action:c.moveLineSegment,args:{point1coords:s.current,transient:!0,skippable:!0,sourceDetails:{endpoint:a}}});else if(a==2)s.current=[e.current.point2.X(),e.current.point2.Y()],u({action:c.moveLineSegment,args:{point2coords:s.current,transient:!0,skippable:!0,sourceDetails:{endpoint:a}}});else{if(s.current=[],f){var x=i.origin.scrCoords;for(let m=0;m<2;m++){let C=(_.current[m][1]+g.x-y.current[0]-x[1])/i.unitX,t=(x[2]-(_.current[m][2]+g.y-y.current[1]))/i.unitY;s.current.push([C,t])}}else s.current.push([e.current.point1.X(),e.current.point1.Y()]),s.current.push([e.current.point2.X(),e.current.point2.Y()]);u({action:c.moveLineSegment,args:{point1coords:s.current[0],point2coords:s.current[1],transient:!0,skippable:!0}})}e.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,Y.current[0]),e.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,Y.current[1]),a==1?i.updateInfobox(e.current.point1):a==2&&i.updateInfobox(e.current.point2)}function M(){e.current.off("drag"),e.current.off("down"),e.current.off("hit"),e.current.off("up"),e.current.off("keydown"),e.current.off("keyfocusout"),i.removeObject(e.current),e.current=null,n.current.off("drag"),n.current.off("down"),n.current.off("hit"),n.current.off("up"),n.current.off("keydown"),n.current.off("keyfocusout"),i.removeObject(n.current),n.current=null,o.current.off("drag"),o.current.off("down"),o.current.off("hit"),o.current.off("up"),o.current.off("keydown"),o.current.off("keyfocusout"),i.removeObject(o.current),o.current=null}if(i){if(e.current===null)T();else if(r.numericalEndpoints.length!==2||r.numericalEndpoints.some(a=>a.length!==2))M();else{let a=!0;for(let d of[r.numericalEndpoints[0],r.numericalEndpoints[1]])Number.isFinite(d[0])||(a=!1),Number.isFinite(d[1])||(a=!1);if(e.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,r.numericalEndpoints[0]),e.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,r.numericalEndpoints[1]),F.sourceInformation&&h in F.sourceInformation){let d=F.sourceInformation[h].endpoint;d===1?i.updateInfobox(e.current.point1):d===2&&i.updateInfobox(e.current.point2)}let g=!r.hidden&&a;if(a){let d=e.current.visProp.visible!==g;e.current.visProp.visible=g,e.current.visPropCalc.visible=g,d&&e.current.setAttribute({visible:g})}else e.current.visProp.visible=!1,e.current.visPropCalc.visible=!1;let f=!L.current&&g;n.current.visProp.visible=f,n.current.visPropCalc.visible=f,o.current.visProp.visible=f,o.current.visPropCalc.visible=f,e.current.visProp.fixed=k.current,e.current.visProp.highlight=!O.current,e.current.isDraggable=!O.current;let x=10*r.layer+W;e.current.visProp.layer!==x&&(e.current.setAttribute({layer:x}),n.current.setAttribute({layer:10*r.layer+I}),o.current.setAttribute({layer:10*r.layer+I}));let m=X==="dark"?r.selectedStyle.lineColorDarkMode:r.selectedStyle.lineColor;e.current.visProp.strokecolor!==m&&(e.current.visProp.strokecolor=m,e.current.visProp.highlightstrokecolor=m),e.current.visProp.strokewidth!==r.selectedStyle.lineWidth&&(e.current.visProp.strokewidth=r.selectedStyle.lineWidth,e.current.visProp.highlightstrokewidth=r.selectedStyle.lineWidth),e.current.visProp.strokeopacity!==r.selectedStyle.lineOpacity&&(e.current.visProp.strokeopacity=r.selectedStyle.lineOpacity,e.current.visProp.highlightstrokeopacity=r.selectedStyle.lineOpacity*.5);let C=J(r.selectedStyle.lineStyle);e.current.visProp.dash!==C&&(e.current.visProp.dash=C),e.current.name=r.labelForGraph;let t=r.labelForGraph!=="";if(t!=D.current&&(e.current.setAttribute({withlabel:t}),D.current=t),n.current.highlighted?i.updateInfobox(n.current):o.current.highlighted&&i.updateInfobox(o.current),e.current.needsUpdate=!0,e.current.update(),e.current.hasLabel)if(e.current.label.needsUpdate=!0,r.applyStyleToLabel?e.current.label.visProp.strokecolor=m:e.current.label.visProp.strokecolor="var(--canvastext)",r.labelPosition!==j.current){let d,b,w;r.labelPosition==="upperright"?(w=[5,5],d="left",b="bottom"):r.labelPosition==="upperleft"?(w=[-5,5],d="right",b="bottom"):r.labelPosition==="lowerright"?(w=[5,-5],d="left",b="top"):(w=[-5,-5],d="right",b="top"),e.current.label.visProp.anchorx=d,e.current.label.visProp.anchory=b,e.current.label.visProp.offset=w,j.current=r.labelPosition,e.current.label.fullUpdate()}else e.current.label.update();n.current.needsUpdate=!0,n.current.update(),o.current.needsUpdate=!0,o.current.update(),i.updateRenderer()}return R.jsx(R.Fragment,{children:R.jsx("a",{name:U})})}return r.hidden?null:R.jsx(R.Fragment,{children:R.jsx("a",{name:U})})});function J(E){return E==="solid"?0:E==="dashed"?2:E==="dotted"?1:0}export{$ as default};