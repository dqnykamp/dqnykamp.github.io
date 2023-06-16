import{s as y,_ as f,u as h,r as v,j as e,V,F as c,T as u}from"./doenetml.js";const k=y.span`
  // display: block;
  // margin: SVs.open ? 12px 4px 0px 4px : 12px 4px 12px 4px;
  // padding: 6px;
  // border: 2px solid black;
  // border-top-left-radius: 5px;
  // border-top-right-radius: 5px;
  // border-bottom-left-radius: SVs.open ? 0px : 5px;
  // border-bottom-right-radius: SVs.open ? 0px : 5px;
  // background-color: var(--mainGray);
  // cursor: pointer;
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`,j=f.memo(function(b){let{name:R,id:s,SVs:o,children:m,actions:i,callAction:r}=h(b),g=a=>{r({action:i.recordVisibilityChange,args:{isVisible:a}})};v.useEffect(()=>()=>{r({action:i.recordVisibilityChange,args:{isVisible:!1}})},[]);let d="open";if(o.hidden)return null;let t,x=null,l={display:"none"},n,p;return o.open?(t=e.jsx(c,{icon:u}),d="close",x=m,l={display:"block",margin:"0px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTop:"0px",borderBottomLeftRadius:"5px",borderBottomRightRadius:"5px",backgroundColor:"var(--canvas)"},p=a=>{a.key==="Enter"&&r({action:i.closeSolution})},o.canBeClosed?n=()=>{r({action:i.closeSolution})}:n=()=>{}):(t=e.jsx(c,{icon:u,rotation:90}),n=()=>{r({action:i.revealSolution})},p=a=>{a.key==="Enter"&&r({action:i.revealSolution})}),e.jsx(V,{partialVisibility:!0,onChange:g,children:e.jsxs("aside",{id:s,style:{margin:"12px 0"},children:[e.jsx("a",{name:s}),e.jsxs(k,{style:{display:"block",margin:o.open?"12px 4px 0px 4px":"12px 4px 12px 4px",padding:"6px",border:"2px solid var(--canvastext)",borderTopLeftRadius:"5px",borderTopRightRadius:"5px",borderBottomLeftRadius:o.open?"0px":"5px",borderBottomRightRadius:o.open?"0px":"5px",backgroundColor:"var(--mainGray)",cursor:"pointer"},tabIndex:"0",id:s+"_button",onClick:n,onKeyDown:p,children:[t," ",o.sectionName," ",o.message," (click to ",d,")"]}),e.jsx("span",{style:l,children:x})]})})});export{j as default};
