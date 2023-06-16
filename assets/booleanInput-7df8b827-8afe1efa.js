import{s as le,_ as Z,u as de,r as c,R as pe,d as me,C as q,g as ee,j as t,M as xe,F as N,a as he,b as fe,c as be,f as ve}from"./index.js";import{y as ge}from"./ToggleButton-5c945175-33da6417.js";import{BoardContext as Ce}from"./graph-7f1c2326-abce282b.js";import"./css-ab4d83ca-d016d639.js";const j=le.button`
  position: relative;
  width: 24px;
  height: 24px;
  color: #ffffff;
  background-color: var(--mainBlue);
  display: inline-block;
  /* text-align: center; */
  padding: 2px;
  /* z-index: 0; */
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`,Ae=Z.memo(function T(Y){let{name:ye,id:d,SVs:e,actions:v,ignoreUpdate:re,rendererName:te,callAction:g}=de(Y);T.baseStateVariable="value",T.ignoreActionsWithoutCore=n=>n==="moveInput";const[C,$]=c.useState(e.value);let H=c.useRef(null);H.current=C;const ne=pe(me(te));let A=c.useRef(null),r=c.useRef(null),F=c.useRef(null),S=c.useRef(null);const a=c.useContext(Ce);let k=c.useRef(!1),L=c.useRef(!1),p=c.useRef(!1),x=c.useRef(null),h=c.useRef(null),z=c.useRef(null),U=c.useRef(null),M=c.useRef(!1),R=c.useRef(!1);M.current=e.fixed,R.current=!e.draggable||e.fixLocation||e.fixed,c.useEffect(()=>()=>{r.current!==null&&ce()},[]),!re&&A.current!==e.value?($(e.value),A.current=e.value):A.current=null;function B(n){let o=!H.current;$(o),A.current=e.value,ne(m=>{let f={...m};return f.ignoreUpdate=!0,f}),g({action:v.updateBoolean,args:{boolean:o},baseVariableValue:o})}function oe(){let n={visible:!e.hidden,fixed:M.current,disabled:e.disabled,checked:C,useMathJax:e.labelHasLatex,strokeColor:"var(--canvastext)",highlightStrokeColor:"var(--canvastext)",highlight:!R.current,parse:!1},o;try{let i=q.fromAst(e.anchor),b=[i.get_component(0).evaluate_to_constant(),i.get_component(1).evaluate_to_constant()];Number.isFinite(b[0])||(b[0]=0,n.visible=!1),Number.isFinite(b[1])||(b[1]=0,n.visible=!1),o=a.create("point",b,{visible:!1})}catch{n.visible=!1,o=a.create("point",[0,0],{visible:!1});return}n.anchor=o;let{anchorx:m,anchory:f}=ee(e.positionFromAnchor);n.anchorx=m,n.anchory=f,S.current=[m,f];let s=a.create("checkbox",[0,0,e.label],n);s.rendNodeCheckbox.addEventListener("change",B),s.isDraggable=!R.current,s.on("down",function(i){k.current=[i.x,i.y],L.current=[...o.coords.scrCoords],p.current=!1}),s.on("hit",function(i){p.current=!1}),s.on("up",function(i){p.current&&(g({action:v.moveInput,args:{x:x.current,y:h.current}}),p.current=!1)}),s.on("keyfocusout",function(i){p.current&&(g({action:v.moveInput,args:{x:x.current,y:h.current}}),p.current=!1)}),s.on("drag",function(i){let b=i.type==="pointermove";(!b||Math.abs(i.x-k.current[0])>.1||Math.abs(i.y-k.current[1])>.1)&&(p.current=!0);let[V,D,I,X]=a.getBoundingBox(),G=s.size[0]/a.unitX,J=s.size[1]/a.unitY,W=S.current[0],K=S.current[1],E=0;W==="middle"?E=-G/2:W==="right"&&(E=-G);let w=0;K==="middle"?w=-J/2:K==="top"&&(w=-J);let ie=V+.04*(I-V)-E-G,ae=I-.04*(I-V)-E,se=X+.04*(D-X)-w-J,ue=D-.04*(D-X)-w;if(b){var Q=a.origin.scrCoords;x.current=(L.current[1]+i.x-k.current[0]-Q[1])/a.unitX,h.current=(Q[2]-(L.current[2]+i.y-k.current[1]))/a.unitY}else x.current=o.X()+s.relativeCoords.usrCoords[1],h.current=o.Y()+s.relativeCoords.usrCoords[2];x.current=Math.min(ae,Math.max(ie,x.current)),h.current=Math.min(ue,Math.max(se,h.current)),g({action:v.moveInput,args:{x:x.current,y:h.current,transient:!0,skippable:!0}}),s.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),o.coords.setCoordinates(JXG.COORDS_BY_USER,z.current)}),s.on("keydown",function(i){i.key==="Enter"&&p.current&&(g({action:v.moveInput,args:{x:x.current,y:h.current}}),p.current=!1)}),r.current=s,F.current=o,U.current=e.positionFromAnchor,e.labelHasLatex&&setTimeout(()=>{r.current&&(r.current.needsUpdate=!0,r.current.setText(e.label),r.current.update(),a==null||a.updateRenderer())},1e3)}function ce(){r.current.rendNodeCheckbox.removeEventListener("change",B),r.current.off("drag"),r.current.off("down"),r.current.off("hit"),r.current.off("up"),r.current.off("keyfocusout"),r.current.off("keydown"),a.removeObject(r.current),r.current=null}if(a){let n;try{let o=q.fromAst(e.anchor);n=[o.get_component(0).evaluate_to_constant(),o.get_component(1).evaluate_to_constant()]}catch{n=[NaN,NaN]}if(z.current=n,r.current===null)oe();else{r.current.Value()!==C&&r.current.setAttribute({checked:C}),r.current.relativeCoords.setCoordinates(JXG.COORDS_BY_USER,[0,0]),F.current.coords.setCoordinates(JXG.COORDS_BY_USER,n),r.current.setText(e.label);let o=!e.hidden;if(Number.isFinite(n[0])&&Number.isFinite(n[1])){let m=r.current.visProp.visible!==o;r.current.visProp.visible=o,r.current.visPropCalc.visible=o,m&&r.current.setAttribute({visible:o})}else r.current.visProp.visible=!1,r.current.visPropCalc.visible=!1;if(r.current.visProp.disabled!==e.disabled&&(r.current.visProp.disabled=e.disabled,r.current.setAttribute({disabled:e.disabled})),r.current.visProp.highlight=!R.current,r.current.visProp.fixed=M.current,r.current.isDraggable=!R.current,r.current.needsUpdate=!0,e.positionFromAnchor!==U.current){let{anchorx:m,anchory:f}=ee(e.positionFromAnchor);r.current.visProp.anchorx=m,r.current.visProp.anchory=f,S.current=[m,f],U.current=e.positionFromAnchor,r.current.fullUpdate()}else r.current.update();F.current.needsUpdate=!0,F.current.update(),a.updateRenderer()}return t.jsx("a",{name:d})}if(e.hidden)return null;let _=e.disabled;const P=d+"_input";let u={cursor:"pointer",padding:"1px 6px 1px 6px"},l=null;if(Y.icon,e.includeCheckWork&&!e.suppressCheckwork){let n="unvalidated";if(e.valueHasBeenValidated&&(e.creditAchieved===1?n="correct":e.creditAchieved===0?n="incorrect":n="partialcorrect"),n==="unvalidated")_&&(u.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray"),u.cursor="not-allowed"),l=t.jsx(j,{id:d+"_submit",tabIndex:"0",disabled:_,style:u,onClick:()=>g({action:v.submitAnswer}),onKeyPress:o=>{o.key==="Enter"&&g({action:v.submitAnswer})},children:t.jsx(N,{style:{},icon:he,transform:{rotate:90}})});else if(e.showCorrectness)if(n==="correct")u.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),l=t.jsx(j,{id:d+"_correct",style:u,children:t.jsx(N,{icon:fe})});else if(n==="partialcorrect"){let o=`${Math.round(e.creditAchieved*100)} %`;u.width="44px",u.backgroundColor="#efab34",l=t.jsx(j,{id:d+"_partial",style:u,children:o})}else u.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),l=t.jsx(j,{id:d+"_incorrect",style:u,children:t.jsx(N,{icon:be})});else u.backgroundColor="rgb(74, 3, 217)",u.padding="1px 8px 1px 4px",l=t.jsx(j,{id:d+"_saved",style:u,children:t.jsx(N,{icon:ve})});e.numAttemptsLeft<0?l=t.jsxs(t.Fragment,{children:[l,t.jsx("span",{children:"(no attempts remaining)"})]}):e.numAttemptsLeft==1?l=t.jsxs(t.Fragment,{children:[l,t.jsx("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(e.numAttemptsLeft)&&(l=t.jsxs(t.Fragment,{children:[l,t.jsxs("span",{children:["(",e.numAttemptsLeft," attempts remaining)"]})]}))}let O,y=e.label;if(e.labelHasLatex&&(y=t.jsx(xe,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:y})),e.asToggleButton)O=t.jsx(ge,{id:P,isSelected:C,onClick:B,value:y,disabled:_},P);else{let n="container",o="checkmark";_&&(n+=" container-disabled",o+=" checkmark-disabled"),O=t.jsxs("label",{className:n,children:[t.jsx("input",{type:"checkbox",id:P,checked:C,onChange:B,disabled:_},P),t.jsx("span",{className:o}),y!=""?t.jsx("span",{style:{marginLeft:"2px"},children:y}):t.jsx("span",{children:y})]})}return t.jsxs(Z.Fragment,{children:[t.jsxs("span",{id:d,children:[t.jsx("a",{name:d}),O]}),l]})});export{Ae as default};