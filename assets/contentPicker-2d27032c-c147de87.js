import{_ as R,u as C,r as h,R as B,d as E,j as n,V as N}from"./index.js";const A=R.memo(function f(m){let{name:T,id:a,SVs:e,children:g,actions:c,ignoreUpdate:x,rendererName:j,callAction:d}=C(m);f.baseStateVariable="selectedIndices";const[o,p]=h.useState(e.selectedIndices),V=B(E(j));let s=h.useRef(null);!x&&s.current!==e.selectedIndices?(p(e.selectedIndices),s.current=e.selectedIndices):s.current=null;let I=t=>{d({action:c.recordVisibilityChange,args:{isVisible:t}})};h.useEffect(()=>()=>{d({action:c.recordVisibilityChange,args:{isVisible:!1}})},[]);function y(t){let i=[];t.target.value&&(i=Array.from(t.target.selectedOptions,l=>Number(l.value))),(o.length!==i.length||o.some((l,r)=>l!=i[r]))&&(p(i),s.current=e.selectedIndices,V(l=>{let r={...l};return r.ignoreUpdate=!0,r}),d({action:c.updateSelectedIndices,args:{selectedIndices:i},baseVariableValue:i}))}if(e.hidden)return null;let u=[];if(e.separateByTopic)for(let t in e.childrenByTopic){let i=e.childrenByTopic[t].map(function(l){return n.jsx("option",{value:l+1,children:e.childInfo[l].title},l+1)});u.push(n.jsx("optgroup",{label:t,children:i},t))}else u=e.childInfo.map(function(t,i){return n.jsx("option",{value:i+1,children:t.title},i+1)});let S=o[0],b=null;e.label&&(b=e.label+": ");let v=n.jsx("p",{children:n.jsxs("label",{children:[b,n.jsx("select",{className:"custom-select",id:a+"-select",onChange:t=>y(t),value:S,disabled:e.disabled,children:u})]})});return n.jsx(N,{partialVisibility:!0,onChange:I,children:n.jsxs("section",{id:a,children:[n.jsx("a",{name:a}),v,g]})})});export{A as default};
