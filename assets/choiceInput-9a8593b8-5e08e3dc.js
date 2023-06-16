import{s as H,_ as L,u as $,r as w,R as G,d as O,j as e,M as T,F as x,a as F,b as S,c as I,f as N}from"./index.js";const o=H.button`
  position: relative;
  /* width: 24px; */
  height: 24px;
  color: #ffffff;
  background-color: var(--mainBlue);
  display: inline-block;
  text-align: center;
  padding: 2px;
  z-index: 0;
  /* border: var(--mainBorder); */
  border: none;
  border-radius: var(--mainBorderRadius);
  margin: 0px 4px 4px 0px;

  &:hover {
    background-color: var(--lightBlue);
    color: black;
  }
`,z=L.memo(function V(E){let{name:U,id:r,SVs:t,actions:g,children:M,sourceOfUpdate:K,ignoreUpdate:R,rendererName:P,callAction:f}=$(E);V.baseStateVariable="selectedIndices";const[b,_]=w.useState(t.selectedIndices),D=G(O(P));let y=w.useRef(null);!R&&y.current!==t.selectedIndices?(_(t.selectedIndices),y.current=t.selectedIndices):y.current=null;let d="unvalidated";(t.valueHasBeenValidated||t.numAttemptsLeft<1)&&(t.creditAchieved===1?d="correct":t.creditAchieved===0?d="incorrect":d="partialcorrect");function A(i){let n=[];if(t.inline)i.target.value&&(n=Array.from(i.target.selectedOptions,s=>Number(s.value)));else if(t.selectMultiple){n=[...b];let s=Number(i.target.value);if(i.target.checked)n.includes(s)||(n.push(s),n.sort((a,c)=>a-c));else{let a=n.indexOf(s);a!==-1&&n.splice(a,1)}}else n=[Number(i.target.value)];(b.length!==n.length||b.some((s,a)=>s!=n[a]))&&(_(n),y.current=t.selectedIndices,D(s=>{let a={...s};return a.ignoreUpdate=!0,a}),f({action:g.updateSelectedIndices,args:{selectedIndices:n},baseVariableValue:n}))}if(t.hidden)return null;let h=t.disabled,C=t.label;if(t.labelHasLatex&&(C=e.jsx(T,{hideUntilTypeset:"first",inline:!0,dynamic:!0,children:C})),t.inline){let i={cursor:"pointer",padding:"1px 6px 1px 6px",width:"24px"},n=null;if(t.includeCheckWork&&!t.suppressCheckwork){if(d==="unvalidated")h&&(i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray")),n=e.jsx(o,{id:r+"_submit",disabled:h,tabIndex:"0",style:i,onClick:()=>f({action:g.submitAnswer}),onKeyPress:u=>{u.key==="Enter"&&f({action:g.submitAnswer})},children:e.jsx(x,{style:{},icon:F,transform:{rotate:90}})});else if(t.showCorrectness)if(d==="correct")i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),n=e.jsx(o,{id:r+"_correct",style:i,children:e.jsx(x,{icon:S})});else if(d==="partialcorrect"){let u=`${Math.round(t.creditAchieved*100)} %`;i.width="44px",i.backgroundColor="#efab34",n=e.jsx(o,{id:r+"_partial",style:i,children:u})}else i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),n=e.jsx(o,{id:r+"_incorrect",style:i,children:e.jsx(x,{icon:I})});else i.backgroundColor="rgb(74, 3, 217)",i.padding="1px 8px 1px 4px",n=e.jsx(o,{id:r+"_saved",style:i,children:e.jsx(x,{icon:N})});t.numAttemptsLeft<0?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(no attempts remaining)"})]}):t.numAttemptsLeft==1?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(t.numAttemptsLeft)&&(n=e.jsxs(e.Fragment,{children:[n,e.jsxs("span",{children:["(",t.numAttemptsLeft," attempts remaining)"]})]}))}let s=t,a=t.choiceTexts.map(function(u,m){return s.choicesHidden[m]?null:e.jsx("option",{value:m+1,disabled:s.choicesDisabled[m],children:u},m+1)}),c=b;return c===void 0?c="":t.selectMultiple||(c=c[0],c===void 0&&(c="")),e.jsxs(L.Fragment,{children:[e.jsx("a",{name:r}),e.jsxs("label",{style:{display:"inline-flex",maxWidth:"100%"},id:r+"-label",children:[C,e.jsxs("select",{className:"custom-select",id:r,onChange:A,value:c,disabled:h,multiple:t.selectMultiple,children:[e.jsx("option",{hidden:!0,value:"",children:t.placeHolder}),a]})]}),n]})}else{let i={height:"24px",display:"inline-block",padding:"1px 6px 1px 6px",cursor:"pointer"},n=null;if(t.includeCheckWork&&!t.suppressCheckwork)if(d==="unvalidated"){let p=t.submitLabel;t.showCorrectness||(p=t.submitLabelNoCorrectness),h&&(i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGray")),n=e.jsxs(o,{id:r+"_submit",tabIndex:"0",disabled:h,style:i,onClick:()=>f({action:g.submitAnswer}),onKeyPress:l=>{l.key==="Enter"&&f({action:g.submitAnswer})},children:[e.jsx(x,{style:{},icon:F,transform:{rotate:90}})," ",p]})}else if(t.showCorrectness){if(d==="correct")i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainGreen"),n=e.jsxs(o,{id:r+"_correct",style:i,children:[e.jsx(x,{icon:S}),"  Correct"]});else if(d==="incorrect")i.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue("--mainRed"),n=e.jsxs(o,{id:r+"_incorrect",style:i,children:[e.jsx(x,{icon:I}),"  Incorrect"]});else if(d==="partialcorrect"){i.backgroundColor="#efab34";let p=`${Math.round(t.creditAchieved*100)}% Correct`;n=e.jsx(o,{id:r+"_partial",style:i,children:p})}}else i.backgroundColor="rgb(74, 3, 217)",n=e.jsxs(o,{id:r+"_saved",style:i,children:[e.jsx(x,{icon:N}),"  Response Saved"]});t.numAttemptsLeft<0?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(no attempts remaining)"})]}):t.numAttemptsLeft==1?n=e.jsxs(e.Fragment,{children:[n,e.jsx("span",{children:"(1 attempt remaining)"})]}):Number.isFinite(t.numAttemptsLeft)&&(n=e.jsxs(e.Fragment,{children:[n,e.jsxs("span",{children:["(",t.numAttemptsLeft," attempts remaining)"]})]}));let s=r,a={listStyleType:"none"},c=s+"_choice",u="radio";t.selectMultiple&&(u="checkbox");let m=t,B=t.choiceOrder.map(p=>M[p-1]).map(function(p,l){if(m.choicesHidden[l])return null;if(u=="radio"){let v=h||m.choicesDisabled[l],j="radio-container",k="radio-checkmark";return v&&(j+=" radio-container-disabled",k+=" radio-checkmark-disabled"),e.jsxs("label",{className:j,children:[e.jsx("input",{type:"radio",id:c+(l+1)+"_input",name:s,value:l+1,checked:b.includes(l+1),onChange:A,disabled:v}),e.jsx("span",{className:k}),e.jsx("label",{htmlFor:c+(l+1)+"_input",style:{marginLeft:"2px"},children:p})]},s+"_choice"+(l+1))}else if(u=="checkbox"){let v=h||m.choicesDisabled[l],j="checkbox-container",k="checkbox-checkmark";return v&&(j+=" checkbox-container-disabled",k+=" checkbox-checkmark-disabled"),e.jsxs("label",{className:j,children:[e.jsx("input",{type:"checkbox",id:c+(l+1)+"_input",name:s,value:l+1,checked:b.includes(l+1),onChange:A,disabled:h||m.choicesDisabled[l]}),e.jsx("span",{className:k}),e.jsx("label",{htmlFor:c+(l+1)+"_input",style:{marginLeft:"2px"},children:p})]},s+"_choice"+(l+1))}});return e.jsxs("div",{id:s+"-label",children:[C,e.jsxs("ol",{id:s,style:a,children:[e.jsx("a",{name:r}),B]}),n]})}});export{z as default};