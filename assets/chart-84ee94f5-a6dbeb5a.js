import{r,_ as p,u as x,j as i,V as b}from"./index.js";const y=r.createContext(),V=p.memo(function(s){let{name:l,id:t,SVs:e,actions:o,callAction:m}=x(s),d=n=>{m({action:o.recordVisibilityChange,args:{isVisible:n}})};return r.useEffect(()=>()=>{m({action:o.recordVisibilityChange,args:{isVisible:!1}})},[]),r.useEffect(()=>{if(e.dataFrame!==null){let n;e.colInd!==null?n=[e.colInd]:n=e.dataFrame.columnTypes.map((a,f)=>a==="number"?f:null).filter(a=>a!==null);let u=[];for(let a of n)e.type==="box"?u.push({y:c(e.dataFrame.data,a),type:"box",name:e.dataFrame.columnNames[a]}):u.push({x:c(e.dataFrame.data,a),type:"histogram",name:e.dataFrame.columnNames[a]})}},[]),i.jsxs(i.Fragment,{children:[i.jsx("a",{name:t}),i.jsx(b,{partialVisibility:!0,onChange:d,children:i.jsx("div",{id:t})})]})});function c(s,l){let t=[];for(let e of s)e[l]!==null&&t.push(e[l]);return t}export{y as BoardContext,V as default};
