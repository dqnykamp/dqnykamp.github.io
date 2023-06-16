import{_ as $,u as q,r as c,C as Y,g as J,j as _,B as I}from"./index.js";import{BoardContext as K}from"./graph-7f1c2326-abce282b.js";import"./css-ab4d83ca-d016d639.js";const te=$.memo(function L(w){let{name:Q,id:x,SVs:r,actions:p,callAction:b}=q(w,!1);L.ignoreActionsWithoutCore=t=>t==="moveButton";let e=c.useRef(null),h=c.useRef(null),C=c.useRef(null);const u=c.useContext(K);let m=c.useRef(!1),B=c.useRef(!1),s=c.useRef(!1),a=c.useRef(null),l=c.useRef(null),U=c.useRef(null),A=c.useRef(null),P=c.useRef(!1),k=c.useRef(!1);P.current=r.fixed,k.current=!r.draggable||r.fixLocation||r.fixed;let g=r.label?r.label:"Button";c.useEffect(()=>()=>{e.current!==null&&H()},[]);function G(){let t={visible:!r.hidden,fixed:P.current,disabled:r.disabled,useMathJax:r.labelHasLatex,parse:!1},n;try{let o=Y.fromAst(r.anchor),d=[o.get_component(0).evaluate_to_constant(),o.get_component(1).evaluate_to_constant()];Number.isFinite(d[0])||(d[0]=0,t.visible=!1),Number.isFinite(d[1])||(d[1]=0,t.visible=!1),n=u.create("point",d,{visible:!1})}catch{t.visible=!1,n=u.create("point",[0,0],{visible:!1});return}t.anchor=n;let{anchorx:f,anchory:v}=J(r.positionFromAnchor);t.anchorx=f,t.anchory=v,C.current=[f,v];let i=u.create("button",[0,0,g,()=>b({action:p[r.clickAction]})],t);i.isDraggable=!k.current,i.on("down",function(o){m.current=[o.x,o.y],B.current=[...n.coords.scrCoords],s.current=!1}),i.on("hit",function(o){s.current=!1}),i.on("up",function(o){s.current&&(b({action:p.moveButton,args:{x:a.current,y:l.current}}),s.current=!1)}),i.on("keyfocusout",function(o){s.current&&(b({action:p.moveButton,args:{x:a.current,y:l.current}}),s.current=!1)}),i.on("drag",function(o){let d=o.type==="pointermove";(!d||Math.abs(o.x-m.current[0])>.1||Math.abs(o.y-m.current[1])>.1)&&(s.current=!0);let[F,O,S,E]=u.getBoundingBox(),j=i.size[0]/u.unitX,D=i.size[1]/u.unitY,X=C.current[0],M=C.current[1],R=0;X==="middle"?R=-j/2:X==="right"&&(R=-j);let y=0;M==="middle"?y=-D/2:M==="top"&&(y=-D);let T=F+.04*(S-F)-R-j,z=S-.04*(S-F)-R,V=E+.04*(O-E)-y-D,W=O-.04*(O-E)-y;if(d){var N=u.origin.scrCoords;a.current=(B.current[1]+o.x-m.current[0]-N[1])/u.unitX,l.current=(N[2]-(B.current[2]+o.y-m.current[1]))/u.unitY}else a.current=n.X()+i.relativeCoords.usrCoords[1],l.current=n.Y()+i.relativeCoords.usrCoords[2];a.current=Math.min(z,Math.max(T,a.current)),l.current=Math.min(W,Math.max(V,l.current)),b({action:p.moveButton,args:{x:a.current,y:l.current,transient:!0,skippable:!0}}),i.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),n.coords.setCoordinates(JXG.COORDS_BY_USER,U.current)}),i.on("keydown",function(o){o.key==="Enter"&&s.current&&(b({action:p.moveButton,args:{x:a.current,y:l.current}}),s.current=!1)}),e.current=i,h.current=n,A.current=r.positionFromAnchor,r.labelHasLatex&&setTimeout(()=>{e.current&&(e.current.needsUpdate=!0,e.current.setText(g),e.current.update(),u==null||u.updateRenderer())},1e3)}function H(){e.current.off("drag"),e.current.off("down"),e.current.off("hit"),e.current.off("up"),e.current.off("keyfocusout"),e.current.off("keydown"),u.removeObject(e.current),e.current=null}if(u){let t;try{let n=Y.fromAst(r.anchor);t=[n.get_component(0).evaluate_to_constant(),n.get_component(1).evaluate_to_constant()]}catch{t=[NaN,NaN]}if(U.current=t,e.current===null)G();else{e.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),h.current.coords.setCoordinates(JXG.COORDS_BY_USER,t),e.current.setText(g);let n=!r.hidden;if(Number.isFinite(t[0])&&Number.isFinite(t[1])){let f=e.current.visProp.visible!==n;e.current.visProp.visible=n,e.current.visPropCalc.visible=n,f&&e.current.setAttribute({visible:n})}else e.current.visProp.visible=!1,e.current.visPropCalc.visible=!1;if(e.current.visProp.disabled!==r.disabled&&(e.current.visProp.disabled=r.disabled,e.current.setAttribute({disabled:r.disabled})),e.current.visProp.fixed=P.current,e.current.isDraggable=!k.current,e.current.needsUpdate=!0,r.positionFromAnchor!==A.current){let{anchorx:f,anchory:v}=J(r.positionFromAnchor);e.current.visProp.anchorx=f,e.current.visProp.anchory=v,C.current=[f,v],A.current=r.positionFromAnchor,e.current.fullUpdate()}else e.current.update();h.current.needsUpdate=!0,h.current.update(),u.updateRenderer()}return _.jsx("a",{name:x})}return r.hidden?null:_.jsxs("div",{id:x,margin:"12px 0",style:{display:"inline-block"},children:[_.jsx("a",{name:x}),_.jsx(I,{id:x+"_button",onClick:()=>b({action:p[r.clickAction]}),disabled:r.disabled,value:g,valueHasLatex:r.labelHasLatex})]})});export{te as default};