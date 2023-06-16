import{s as o,_ as c,u as p,r as b,j as e,V as u,F as m}from"./doenetml.js";import{c as f}from"./index.es-7d451cd6-eca72cdc.js";const g=o.aside`
  background-color: var(--canvas);
  margin: 0px 4px 12px 4px;
  padding: 1em;
  border: 2px solid var(--canvastext);
  border-top: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  //   &: focus {
  //   outline: 2px solid var(--canvastext);
  //   outline-offset: 2px;
  //  }
`,h=o.span`
  display: block;
  margin: 12px 4px 0px 4px;
  padding: 6px;
  border: 2px solid var(--canvastext);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: var(--mainGray);
  &: focus {
    outline: 2px solid var(--canvastext);
    outline-offset: 2px;
  }
`,V=c.memo(function(t){let{name:v,id:i,SVs:r,children:n,actions:a,callAction:s}=p(t),d=l=>{s({action:a.recordVisibilityChange,args:{isVisible:l}})};if(b.useEffect(()=>()=>{s({action:a.recordVisibilityChange,args:{isVisible:!1}})},[]),r.hidden)return null;let x=e.jsx(m,{icon:f});return e.jsx(u,{partialVisibility:!0,onChange:d,children:e.jsxs(e.Fragment,{children:[e.jsxs(h,{tabIndex:"0",children:[x," Feedback"]}),e.jsxs(g,{id:i,children:[e.jsx("a",{name:i}),r.feedbackText,n]})]})})});export{V as default};
