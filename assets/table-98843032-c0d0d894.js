import{_ as f,u as x,r as b,j as t,V}from"./index.js";const N=f.memo(function(u){var r;let{name:g,id:l,SVs:s,children:n,actions:a,callAction:o}=x(u),h=e=>{o({action:a.recordVisibilityChange,args:{isVisible:e}})};if(b.useEffect(()=>()=>{o({action:a.recordVisibilityChange,args:{isVisible:!1}})},[]),s.hidden)return null;let c=null,d=[...n],i;if(s.titleChildName){let e;for(let[p,m]of n.entries())if(((r=m==null?void 0:m.props)==null?void 0:r.componentInstructions.componentName)===s.titleChildName){e=p;break}i=n[e],d.splice(e,1)}else i=s.title;if(!s.suppressTableNameInTitle){let e=t.jsx("strong",{children:s.tableName});i?i=t.jsxs(t.Fragment,{children:[e,": ",i]}):i=e}return c=t.jsx("div",{id:l+"_title",children:i}),t.jsx(V,{partialVisibility:!0,onChange:h,children:t.jsxs("div",{id:l,style:{margin:"12px 0"},children:[t.jsx("a",{name:l}),c,d]})})});export{N as default};