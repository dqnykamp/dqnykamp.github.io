import{_ as l,u as h,j as r}from"./index.js";const a=l.memo(function(d){let{name:m,id:o,SVs:t,children:n}=h(d);if(t.hidden)return null;let e={style:{padding:"3px 10px"}};t.colSpan!==1&&(e.colSpan=t.colSpan),t.halign!==null&&(e.style.textAlign=t.halign),t.bottom!=="none"&&(e.style.borderBottomStyle="solid",t.bottom==="minor"?e.style.borderBottomWidth="thin":t.bottom==="medium"?e.style.borderBottomWidth="medium":e.style.borderBottomWidth="thick"),t.right!=="none"&&(e.style.borderRightStyle="solid",t.right==="minor"?e.style.borderRightWidth="thin":t.right==="medium"?e.style.borderRightWidth="medium":e.style.borderRightWidth="thick");let i=n;return i.length===0&&(i=t.text),t.inHeader?r.jsx("th",{id:o,...e,children:i}):r.jsx("td",{id:o,...e,children:i})});export{a as default};