import{_ as c,u as h,r as p,j as r,V as t}from"./index.js";const j=c.memo(function(u){let{name:x,id:n,SVs:i,children:a,actions:m,callAction:o}=h(u),s=e=>{o({action:m.recordVisibilityChange,args:{isVisible:e}})};if(p.useEffect(()=>()=>{o({action:m.recordVisibilityChange,args:{isVisible:!1}})},[]),i.hidden)return null;if(i.item)return r.jsx(t,{partialVisibility:!0,onChange:s,requireContentsSize:!1,children:r.jsxs(r.Fragment,{children:[r.jsx("a",{name:n}),r.jsx("li",{id:n,children:a})]})});if(i.numbered){let e;return i.marker&&(i.marker[0]==="1"?e="decimal":i.marker[0]==="a"?e="lower-alpha":i.marker[0]==="i"?e="lower-roman":i.marker[0]==="A"?e="upper-alpha":i.marker[0]==="I"&&(e="upper-roman")),e||(e=l.numbered[(i.level-1)%l.numbered.length]),r.jsx(t,{partialVisibility:!0,onChange:s,children:r.jsx(r.Fragment,{children:r.jsxs("ol",{id:n,style:{listStyleType:e},children:[r.jsx("a",{name:n}),a]})})})}else{let e;return i.marker&&(e=i.marker.toLowerCase(),d.includes(e)||(e=null)),e||(e=l.unnumbered[(i.level-1)%l.unnumbered.length]),r.jsx(t,{partialVisibility:!0,onChange:s,children:r.jsx(r.Fragment,{children:r.jsxs("ul",{id:n,style:{listStyleType:e},children:[r.jsx("a",{name:n}),a]})})})}}),d=["disc","circle","square"],l={numbered:["decimal","lower-alpha","lower-roman","upper-alpha","upper-roman"],unnumbered:d};export{j as default};