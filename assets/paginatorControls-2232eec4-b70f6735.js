import{_ as i,u,j as a}from"./index.js";const l=i.memo(function(s){let{name:d,id:n,SVs:e,actions:r,callAction:t}=u(s,!1);return e.hidden?null:a.jsxs("p",{id:n,children:[a.jsx("a",{name:n}),a.jsx("button",{id:n+"_previous",onClick:()=>{t({action:r.setPage,args:{number:e.currentPage-1}})},disabled:e.disabled||!(e.currentPage>1),children:e.previousLabel})," "+e.pageLabel," ",e.currentPage," of ",e.numPages+" ",a.jsx("button",{id:n+"_next",onClick:()=>{t({action:r.setPage,args:{number:e.currentPage+1}})},disabled:e.disabled||!(e.currentPage<e.numPages),children:e.nextLabel})]})});export{l as default};
