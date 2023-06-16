import{_ as X,u as Y,r as o,e as U,h as j,j as P}from"./index.js";import{BoardContext as J,LINE_LAYER_OFFSET as D}from"./graph-7f1c2326-abce282b.js";import"./css-ab4d83ca-d016d639.js";const I=X.memo(function y(G){let{name:v,id:L,SVs:r,actions:s,sourceOfUpdate:B,callAction:a}=Y(G);y.ignoreActionsWithoutCore=()=>!0;const i=o.useContext(J);let e=o.useRef(null),p=o.useRef(null),S=o.useRef(null),R=o.useRef(!1),C=o.useRef(!1),d=o.useRef(!1),x=o.useRef(null),c=o.useRef(null),O=o.useRef(null),E=o.useRef(null),g=o.useRef(!1),b=o.useRef(!1);O.current=r.numericalEndpoint,E.current=r.numericalThroughpoint,g.current=r.fixed,b.current=!r.draggable||r.fixLocation||r.fixed;const F=U(j);o.useEffect(()=>()=>{Object.keys(e.current).length!==0&&w(),i&&i.off("move",_)},[]),o.useEffect(()=>{i&&i.on("move",_)},[i]);function A(){if(r.numericalEndpoint.length!==2||r.numericalThroughpoint.length!==2){e.current=null;return}let l=F==="dark"?r.selectedStyle.lineColorDarkMode:r.selectedStyle.lineColor;var u={name:r.labelForGraph,visible:!r.hidden,withLabel:r.labelForGraph!=="",layer:10*r.layer+D,fixed:g.current,strokeColor:l,strokeOpacity:r.selectedStyle.lineOpacity,highlightStrokeColor:l,highlightStrokeOpacity:r.selectedStyle.lineOpacity*.5,strokeWidth:r.selectedStyle.lineWidth,highlightStrokeWidth:r.selectedStyle.lineWidth,dash:T(r.selectedStyle.lineStyle),highlight:!b.current,straightFirst:!1};u.label={highlight:!1},r.labelHasLatex&&(u.label.useMathJax=!0),r.applyStyleToLabel?u.label.strokeColor=l:u.label.strokeColor="var(--canvastext)";let m=[[...r.numericalEndpoint],[...r.numericalThroughpoint]],t=i.create("line",m,u);t.isDraggable=!b.current,t.on("drag",function(n){let f=n.type==="pointermove";if(!f||Math.abs(n.x-p.current[0])>.1||Math.abs(n.y-p.current[1])>.1){d.current=!0,c.current=[];for(let k=0;k<2;k++)if(f){var h=i.origin.scrCoords;let M=(S.current[k][1]+n.x-p.current[0]-h[1])/i.unitX,W=(h[2]-(S.current[k][2]+n.y-p.current[1]))/i.unitY;c.current.push([M,W])}else c.current.push([t.point1.X(),t.point1.Y()]),c.current.push([t.point2.X(),t.point2.Y()]);a({action:s.moveRay,args:{endpointcoords:c.current[0],throughcoords:c.current[1],transient:!0,skippable:!0}})}e.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,O.current),e.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,E.current)}),t.on("up",function(n){d.current?a({action:s.moveRay,args:{endpointcoords:c.current[0],throughcoords:c.current[1]}}):!C.current&&!g.current&&a({action:s.rayClicked,args:{name:v}}),R.current=!1}),t.on("keyfocusout",function(n){d.current&&(a({action:s.moveRay,args:{point1coords:c.current[0],point2coords:c.current[1]}}),d.current=!1)}),t.on("down",function(n){d.current=!1,p.current=[n.x,n.y],S.current=[[...t.point1.coords.scrCoords],[...t.point2.coords.scrCoords]],R.current=!0,C.current=!1,g.current||a({action:s.rayFocused,args:{name:v}})}),t.on("hit",function(n){d.current=!1,a({action:s.rayFocused,args:{name:v}})}),t.on("keydown",function(n){n.key==="Enter"&&(d.current&&(a({action:s.moveRay,args:{point1coords:c.current[0],point2coords:c.current[1]}}),d.current=!1),a({action:s.rayClicked,args:{name:v}}))}),x.current=r.labelForGraph!=="",e.current=t}function _(l){R.current&&(Math.abs(l.x-p.current[0])>.1||Math.abs(l.y-p.current[1])>.1)&&(C.current=!0)}function w(){e.current.off("drag"),e.current.off("down"),e.current.off("hit"),e.current.off("up"),e.current.off("keyfocusout"),e.current.off("keydown"),i.removeObject(e.current),e.current=null}if(i)if(e.current===null)A();else if(r.numericalEndpoint.length!==2||r.numericalThroughpoint.length!==2)w();else{let l=!0;for(let h of[r.numericalEndpoint,r.numericalThroughpoint])Number.isFinite(h[0])||(l=!1),Number.isFinite(h[1])||(l=!1);e.current.point1.coords.setCoordinates(JXG.COORDS_BY_USER,r.numericalEndpoint),e.current.point2.coords.setCoordinates(JXG.COORDS_BY_USER,r.numericalThroughpoint);let u=!r.hidden;if(l){let h=e.current.visProp.visible!==u;e.current.visProp.visible=u,e.current.visPropCalc.visible=u,h&&e.current.setAttribute({visible:u})}else e.current.visProp.visible=!1,e.current.visPropCalc.visible=!1;e.current.visProp.fixed=g.current,e.current.visProp.highlight=!b.current,e.current.isDraggable=!b.current;let m=10*r.layer+D;e.current.visProp.layer!==m&&e.current.setAttribute({layer:m});let t=F==="dark"?r.selectedStyle.lineColorDarkMode:r.selectedStyle.lineColor;e.current.visProp.strokecolor!==t&&(e.current.visProp.strokecolor=t,e.current.visProp.highlightstrokecolor=t),e.current.visProp.strokewidth!==r.selectedStyle.lineWidth&&(e.current.visProp.strokewidth=r.selectedStyle.lineWidth,e.current.visProp.highlightstrokewidth=r.selectedStyle.lineWidth),e.current.visProp.strokeopacity!==r.selectedStyle.lineOpacity&&(e.current.visProp.strokeopacity=r.selectedStyle.lineOpacity,e.current.visProp.highlightstrokeopacity=r.selectedStyle.lineOpacity*.5);let n=T(r.selectedStyle.lineStyle);e.current.visProp.dash!==n&&(e.current.visProp.dash=n),e.current.name=r.labelForGraph;let f=r.labelForGraph!=="";f!=x.current&&(e.current.setAttribute({withlabel:f}),x.current=f),e.current.needsUpdate=!0,e.current.update(),e.current.hasLabel&&(r.applyStyleToLabel?e.current.label.visProp.strokecolor=t:e.current.label.visProp.strokecolor="var(--canvastext)",e.current.label.needsUpdate=!0,e.current.label.update()),i.updateRenderer()}return r.hidden?null:P.jsx(P.Fragment,{children:P.jsx("a",{name:L})})});function T(y){return y==="solid"?0:y==="dashed"?2:y==="dotted"?1:0}export{I as default};