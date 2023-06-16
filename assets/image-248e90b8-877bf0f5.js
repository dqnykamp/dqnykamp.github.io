import{_ as ue,u as ae,r as i,C as W,j as _,V as se,p as le,q}from"./index.js";import{BoardContext as de,IMAGE_LAYER_OFFSET as H}from"./graph-7f1c2326-abce282b.js";import{i as me}from"./css-ab4d83ca-d016d639.js";async function fe(c,h){try{return await pe(c)}catch{}if(!h){let{data:R}=await le.get("/api/getMimeType.php",{params:{cid:c}});h=R["mime-type"]}return he(c,h)}async function pe(c){let h=new AbortController,R=h.signal,v=setTimeout(()=>{h.abort()},1e3);try{let p=await fetch(`https://${c}.ipfs.dweb.link/`,{signal:R});if(clearTimeout(v),p.ok){let e=await p.blob();if(await q(await e.arrayBuffer())===c){let m=URL.createObjectURL(e);return{mediaBlob:e,mediaURL:m}}else return Promise.reject(new Error("cid mismatch"))}else return Promise.reject(new Error(`cid not found: ${c}`))}catch{return Promise.reject(new Error(`cid not found: ${c}`))}}async function he(c,h){try{let R=ge(h),v=await fetch(`/media/${c}.${R}`);if(v.ok){let p=await v.blob();if(await q(await p.arrayBuffer())===c){let e=URL.createObjectURL(p);return{mediaBlob:p,mediaURL:e}}else return Promise.reject(new Error("cid mismatch"))}else return Promise.reject(new Error(`cid not found: ${c}`))}catch{return Promise.reject(new Error(`cid not found: ${c}`))}}function ge(c){return c==="image/png"?"png":c==="image/jpeg"?"jpg":c==="text/csv"?"csv":"txt"}const Re=ue.memo(function c(h){var R;let{name:v,id:p,SVs:e,actions:m,callAction:g}=ae(h,!1),[V,K]=i.useState(null);c.ignoreActionsWithoutCore=()=>!0;let t=i.useRef(null),S=i.useRef(null);const u=i.useContext(de);let w=i.useRef(null),U=i.useRef(null),P=i.useRef(!1),k=i.useRef(!1),y=i.useRef(!1),x=i.useRef(null),F=i.useRef(null),X=i.useRef(null),M=i.useRef(null),A=i.useRef(null),b=i.useRef(null),$=i.useRef(null),N=i.useRef(e.rotate),E=i.useRef(!1),j=i.useRef(!1);E.current=e.fixed,j.current=!e.draggable||e.fixLocation||e.fixed;const B=(e.cid?V:e.source)||"";let Q=a=>{g({action:m.recordVisibilityChange,args:{isVisible:a}})};i.useEffect(()=>()=>{g({action:m.recordVisibilityChange,args:{isVisible:!1}})},[]),i.useEffect(()=>{e.cid&&fe(e.cid,e.mimeType).then(a=>{K(a.mediaURL)}).catch(a=>{})},[]),i.useEffect(()=>()=>{t.current!==null&&ee(),u&&u.off("move",I)},[]),i.useEffect(()=>{u&&u.on("move",I)},[u]);function Z(){var a;let d={visible:!e.hidden,fixed:E.current,layer:10*e.layer+H,highlight:!j.current},f;try{let s=W.fromAst(e.anchor),C=[s.get_component(0).evaluate_to_constant(),s.get_component(1).evaluate_to_constant()];Number.isFinite(C[0])||(C[0]=0,d.visible=!1),Number.isFinite(C[1])||(C[1]=0,d.visible=!1),f=u.create("point",C,{visible:!1})}catch{d.visible=!1,f=u.create("point",[0,0],{visible:!1})}d.anchor=f;let n=((a=e.widthForGraph)==null?void 0:a.size)||1,o=n/(e.aspectRatio||1);Number.isFinite(n)&&Number.isFinite(o)||(n=0,o=0);let l;e.positionFromAnchor==="center"?l=[-n/2,-o/2]:e.positionFromAnchor==="lowerleft"?l=[-n,-o]:e.positionFromAnchor==="lowerright"?l=[0,-o]:e.positionFromAnchor==="upperleft"?l=[-n,0]:e.positionFromAnchor==="upperright"?l=[0,0]:e.positionFromAnchor==="bottom"?l=[-n/2,-o]:e.positionFromAnchor==="top"?l=[-n/2,0]:e.positionFromAnchor==="right"?l=[0,-o/2]:l=[-n,-o/2],b.current=l;let r=u.create("image",[B,l,[n,o]],d);r.isDraggable=!j.current;var re=u.create("transform",[function(){return-r.X()-r.W()*.5},function(){return-r.Y()-r.H()*.5}],{type:"translate"}),te=u.create("transform",[function(){return r.X()+r.W()*.5},function(){return r.Y()+r.H()*.5}],{type:"translate"}),J=u.create("transform",[e.rotate],{type:"rotate"});re.bindTo(r),J.bindTo(r),te.bindTo(r),$.current=J,N.current=e.rotate,r.on("down",function(s){w.current=[s.x,s.y],U.current=[...f.coords.scrCoords],y.current=!1,P.current=!0,k.current=!1,E.current||g({action:m.imageFocused,args:{name:v}})}),r.on("hit",function(s){U.current=[...f.coords.scrCoords],y.current=!1,g({action:m.imageFocused,args:{name:v}})}),r.on("up",function(s){y.current?(g({action:m.moveImage,args:{x:x.current,y:F.current}}),y.current=!1):!k.current&&!E.current&&g({action:m.imageClicked,args:{name:v}}),P.current=!1}),r.on("keyfocusout",function(s){y.current&&(g({action:m.moveImage,args:{x:x.current,y:F.current}}),y.current=!1)}),r.on("drag",function(s){let C=s.type==="pointermove";(!C||Math.abs(s.x-w.current[0])>.1||Math.abs(s.y-w.current[1])>.1)&&(y.current=!0);let[L,D,G,T]=u.getBoundingBox(),ne=L+.01*(G-L)-b.current[0]-A.current[0],ie=G-.01*(G-L)-b.current[0],oe=T+.01*(D-T)-b.current[1]-A.current[1],ce=D-.01*(D-T)-b.current[1];if(C){var z=u.origin.scrCoords;x.current=(U.current[1]+s.x-w.current[0]-z[1])/u.unitX,F.current=(z[2]-(U.current[2]+s.y-w.current[1]))/u.unitY}else x.current=f.X()+r.relativeCoords.usrCoords[1]-b.current[0],F.current=f.Y()+r.relativeCoords.usrCoords[2]-b.current[1];x.current=Math.min(ie,Math.max(ne,x.current)),F.current=Math.min(ce,Math.max(oe,F.current)),g({action:m.moveImage,args:{x:x.current,y:F.current,transient:!0,skippable:!0}}),r.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,b.current),f.coords.setCoordinates(JXG.COORDS_BY_USER,X.current)}),r.on("keydown",function(s){s.key==="Enter"&&(y.current&&(g({action:m.moveImage,args:{x:x.current,y:F.current}}),y.current=!1),g({action:m.imageClicked,args:{name:v}}))}),t.current=r,S.current=f,M.current=e.positionFromAnchor,A.current=[n,o],t.current.fullUpdate()}function I(a){P.current&&(Math.abs(a.x-w.current[0])>.1||Math.abs(a.y-w.current[1])>.1)&&(k.current=!0)}function ee(){t.current.off("drag"),t.current.off("down"),t.current.off("hit"),t.current.off("up"),t.current.off("keyfocusout"),t.current.off("keydown"),u.removeObject(t.current),t.current=null}if(u){let a;try{let d=W.fromAst(e.anchor);a=[d.get_component(0).evaluate_to_constant(),d.get_component(1).evaluate_to_constant()]}catch{a=[NaN,NaN]}if(X.current=a,t.current===null){if(e.cid&&!V)return null;Z()}else{S.current.coords.setCoordinates(JXG.COORDS_BY_USER,a);let d=!e.hidden;if(Number.isFinite(a[0])&&Number.isFinite(a[1])){let r=t.current.visProp.visible!==d;t.current.visProp.visible=d,t.current.visPropCalc.visible=d,r&&t.current.setAttribute({visible:d})}else t.current.visProp.visible=!1,t.current.visPropCalc.visible=!1;let f=10*e.layer+H;t.current.visProp.layer!==f&&t.current.setAttribute({layer:f}),t.current.visProp.highlight=!j.current,t.current.visProp.fixed=E.current,t.current.isDraggable=!j.current,t.current.needsUpdate=!0;let n=((R=e.widthForGraph)==null?void 0:R.size)||1,o=n/(e.aspectRatio||1);Number.isFinite(n)&&Number.isFinite(o)||(n=0,o=0);let l=n!==A.current[0]||o!==A.current[1];if(l&&(t.current.setSize(n,o),A.current=[n,o]),e.rotate!=N.current&&($.current.setMatrix(u,"rotate",[e.rotate]),N.current=e.rotate),e.positionFromAnchor!==M.current||l){let r;e.positionFromAnchor==="center"?r=[-n/2,-o/2]:e.positionFromAnchor==="lowerleft"?r=[-n,-o]:e.positionFromAnchor==="lowerright"?r=[0,-o]:e.positionFromAnchor==="upperleft"?r=[-n,0]:e.positionFromAnchor==="upperright"?r=[0,0]:e.positionFromAnchor==="bottom"?r=[-n/2,-o]:e.positionFromAnchor==="top"?r=[-n/2,0]:e.positionFromAnchor==="right"?r=[0,-o/2]:r=[-n,-o/2],t.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,r),M.current=e.positionFromAnchor,b.current=r,t.current.fullUpdate()}else t.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,b.current),t.current.update();S.current.needsUpdate=!0,S.current.update(),u.updateRenderer()}return _.jsx("a",{name:p})}if(e.hidden)return null;let Y={};e.displayMode==="inline"?Y={display:"inline-block",verticalAlign:"middle",margin:"12px 0"}:Y={display:"flex",justifyContent:e.horizontalAlign,margin:"12px 0"};let O={maxWidth:"100%",width:me(e.width)};return e.aspectRatio>0&&(O.aspectRatio=String(e.aspectRatio)),B||(O.border="var(--mainBorder)"),_.jsx(se,{partialVisibility:!0,onChange:Q,children:_.jsxs("div",{style:Y,children:[_.jsx("a",{name:p}),B?_.jsx("img",{id:p,src:B,style:O,alt:e.description}):_.jsx("div",{id:p,style:O,children:e.description})]})})});export{Re as default};