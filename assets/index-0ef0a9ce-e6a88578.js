import{t as browser$1$2,_,D as commonjsGlobal$1,E as getDefaultExportFromCjs$1}from"./doenetml.js";var reactMathquill$1={exports:{}},reactMathquill_min={exports:{}};/*! For license information please see react-mathquill.min.js.LICENSE.txt */var hasRequiredReactMathquill_min;function requireReactMathquill_min(){return hasRequiredReactMathquill_min||(hasRequiredReactMathquill_min=1,function(Ae,at){(function(_t,Ur){Ae.exports=Ur(_)})(commonjsGlobal$1,function(_t){return(()=>{var Ur={991:(ae,ge,K)=>{K.d(ge,{Z:()=>Ze});var N=K(156),ce=K.n(N),se=K(697),pe=K.n(se),me=K(700),tt=["latex","onChange","config","mathquillDidMount"];function We(){return We=Object.assign||function(g){for(var B=1;B<arguments.length;B++){var O=arguments[B];for(var f in O)Object.prototype.hasOwnProperty.call(O,f)&&(g[f]=O[f])}return g},We.apply(this,arguments)}function xe(g,B){var O=Object.keys(g);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(g);B&&(f=f.filter(function($){return Object.getOwnPropertyDescriptor(g,$).enumerable})),O.push.apply(O,f)}return O}function Ye(g){for(var B=1;B<arguments.length;B++){var O=arguments[B]!=null?arguments[B]:{};B%2?xe(Object(O),!0).forEach(function(f){de(g,f,O[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(O)):xe(Object(O)).forEach(function(f){Object.defineProperty(g,f,Object.getOwnPropertyDescriptor(O,f))})}return g}function de(g,B,O){return B in g?Object.defineProperty(g,B,{value:O,enumerable:!0,configurable:!0,writable:!0}):g[B]=O,g}var Je=function(g){var B=g.latex,O=g.onChange,f=g.config,$=g.mathquillDidMount,le=function(s,we){if(s==null)return{};var De,ht,Ie=function(rt,Tt){if(rt==null)return{};var Pt,Mt,$t={},nt=Object.keys(rt);for(Mt=0;Mt<nt.length;Mt++)Pt=nt[Mt],Tt.indexOf(Pt)>=0||($t[Pt]=rt[Pt]);return $t}(s,we);if(Object.getOwnPropertySymbols){var Qe=Object.getOwnPropertySymbols(s);for(ht=0;ht<Qe.length;ht++)De=Qe[ht],we.indexOf(De)>=0||Object.prototype.propertyIsEnumerable.call(s,De)&&(Ie[De]=s[De])}return Ie}(g,tt),Pe=(0,N.useRef)(2),be=(0,N.useRef)(null),lt=(0,N.useRef)(null),a=(0,N.useRef)(O);return(0,N.useEffect)(function(){a.current=O},[O]),(0,N.useEffect)(function(){if(lt.current){var s={restrictMismatchedBrackets:!0,handlers:{}};f&&(s=Ye(Ye({},s),f));var we=s.handlers.edit;s.handlers.edit=function(De){we&&we(),Pe.current>0?Pe.current-=1:a.current&&a.current(De)},be.current=me.Z.MathField(lt.current,s),be.current.latex(B||""),$&&$(be.current)}},[lt]),(0,N.useEffect)(function(){be.current&&be.current.latex()!==B&&be.current.latex(B)},[B]),ce().createElement("span",We({},le,{ref:lt}))};Je.propTypes={latex:pe().string,onChange:pe().func,config:pe().object,mathquillDidMount:pe().func};const Ze=Je},717:(ae,ge,K)=>{K.d(ge,{Z:()=>Ye});var N=K(156),ce=K.n(N),se=K(697),pe=K.n(se),me=K(700),tt=["mathquillDidMount","children"];function We(){return We=Object.assign||function(de){for(var Je=1;Je<arguments.length;Je++){var Ze=arguments[Je];for(var g in Ze)Object.prototype.hasOwnProperty.call(Ze,g)&&(de[g]=Ze[g])}return de},We.apply(this,arguments)}var xe=function(de){var Je=de.mathquillDidMount,Ze=de.children,g=function(f,$){if(f==null)return{};var le,Pe,be=function(a,s){if(a==null)return{};var we,De,ht={},Ie=Object.keys(a);for(De=0;De<Ie.length;De++)we=Ie[De],s.indexOf(we)>=0||(ht[we]=a[we]);return ht}(f,$);if(Object.getOwnPropertySymbols){var lt=Object.getOwnPropertySymbols(f);for(Pe=0;Pe<lt.length;Pe++)le=lt[Pe],$.indexOf(le)>=0||Object.prototype.propertyIsEnumerable.call(f,le)&&(be[le]=f[le])}return be}(de,tt),B=(0,N.useRef)(null),O=(0,N.useRef)(null);return(0,N.useLayoutEffect)(function(){B&&(O.current=me.Z.StaticMath(B.current),Je&&Je(O.current))},[B,Ze]),ce().createElement("span",We({},g,{ref:B}),Ze)};xe.propTypes={children:pe().string,mathquillDidMount:pe().func};const Ye=xe},700:(ae,ge,K)=>{K.d(ge,{Z:()=>N});const N=K(338).getInterface(2)},527:(ae,ge,K)=>{K.d(ge,{Z:()=>me});var N=K(81),ce=K.n(N),se=K(645),pe=K.n(se)()(ce());pe.push([ae.id,`/*
 * MathQuill v0.11.0, by Han, Jeanine, and Mary
 * http://mathquill.com | maintainers@mathquill.com
 *
 * This Source Code Form is subject to the terms of the
 * Mozilla Public License, v. 2.0. If a copy of the MPL
 * was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 */
@font-face {
  /* Heavy fonts have been removed */
  font-family: Symbola;
}
.mq-editable-field {
  display: -moz-inline-box;
  display: inline-block;
}
.mq-editable-field .mq-cursor {
  border-left: 1px solid black;
  margin-left: -1px;
  position: relative;
  z-index: 1;
  padding: 0;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-editable-field .mq-cursor.mq-blink {
  visibility: hidden;
}
.mq-editable-field,
.mq-math-mode .mq-editable-field {
  border: 1px solid gray;
}
.mq-editable-field.mq-focused,
.mq-math-mode .mq-editable-field.mq-focused {
  -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;
  -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;
  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;
  border-color: #709AC0;
  border-radius: 1px;
}
.mq-math-mode .mq-editable-field {
  margin: 1px;
}
.mq-editable-field .mq-latex-command-input {
  color: inherit;
  font-family: "Courier New", monospace;
  border: 1px solid gray;
  padding-right: 1px;
  margin-right: 1px;
  margin-left: 2px;
}
.mq-editable-field .mq-latex-command-input.mq-empty {
  background: transparent;
}
.mq-editable-field .mq-latex-command-input.mq-hasCursor {
  border-color: ActiveBorder;
}
.mq-editable-field.mq-empty:after,
.mq-editable-field.mq-text-mode:after,
.mq-math-mode .mq-empty:after {
  visibility: hidden;
  content: 'c';
}
.mq-editable-field .mq-cursor:only-child:after,
.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {
  visibility: hidden;
  content: 'c';
}
.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {
  content: '';
}
.mq-editable-field.mq-text-mode {
  overflow-x: auto;
  overflow-y: hidden;
}
.mq-root-block,
.mq-math-mode .mq-root-block {
  display: -moz-inline-box;
  display: inline-block;
  width: 100%;
  padding: 2px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  vertical-align: middle;
}
.mq-math-mode {
  font-variant: normal;
  font-weight: normal;
  font-style: normal;
  font-size: 115%;
  line-height: 1;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode .mq-non-leaf,
.mq-math-mode .mq-scaled {
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode var,
.mq-math-mode .mq-text-mode,
.mq-math-mode .mq-nonSymbola {
  font-family: "Times New Roman", Symbola, serif;
  line-height: 0.9;
}
.mq-math-mode * {
  font-size: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  border-color: black;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  box-sizing: border-box;
}
.mq-math-mode .mq-empty {
  background: #ccc;
}
.mq-math-mode .mq-empty.mq-root-block {
  background: transparent;
}
.mq-math-mode.mq-empty {
  background: transparent;
}
.mq-math-mode .mq-text-mode {
  display: inline-block;
  white-space: pre;
}
.mq-math-mode .mq-text-mode.mq-hasCursor {
  box-shadow: inset darkgray 0 0.1em 0.2em;
  padding: 0 0.1em;
  margin: 0 -0.1em;
  min-width: 1ex;
}
.mq-math-mode .mq-font {
  font: 1em "Times New Roman", Symbola, serif;
}
.mq-math-mode .mq-font * {
  font-family: inherit;
  font-style: inherit;
}
.mq-math-mode b,
.mq-math-mode b.mq-font {
  font-weight: bolder;
}
.mq-math-mode var,
.mq-math-mode i,
.mq-math-mode i.mq-font {
  font-style: italic;
}
.mq-math-mode var.mq-f {
  margin-right: 0.2em;
  margin-left: 0.1em;
}
.mq-math-mode .mq-roman var.mq-f {
  margin: 0;
}
.mq-math-mode big {
  font-size: 200%;
}
.mq-math-mode .mq-int > big {
  display: inline-block;
  -webkit-transform: scaleX(0.7);
  -moz-transform: scaleX(0.7);
  -ms-transform: scaleX(0.7);
  -o-transform: scaleX(0.7);
  transform: scaleX(0.7);
  vertical-align: -0.16em;
}
.mq-math-mode .mq-int > .mq-supsub {
  font-size: 80%;
  vertical-align: -1.1em;
  padding-right: 0.2em;
}
.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {
  vertical-align: 1.3em;
}
.mq-math-mode .mq-int > .mq-supsub > .mq-sub {
  margin-left: -0.35em;
}
.mq-math-mode .mq-roman {
  font-style: normal;
}
.mq-math-mode .mq-sans-serif {
  font-family: sans-serif, Symbola, serif;
}
.mq-math-mode .mq-monospace {
  font-family: monospace, Symbola, serif;
}
.mq-math-mode .mq-overline {
  border-top: 1px solid black;
  margin-top: 1px;
}
.mq-math-mode .mq-underline {
  border-bottom: 1px solid black;
  margin-bottom: 1px;
}
.mq-math-mode .mq-binary-operator {
  padding: 0 0.2em;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode .mq-supsub {
  text-align: left;
  font-size: 90%;
  vertical-align: -0.5em;
}
.mq-math-mode .mq-supsub.mq-sup-only {
  vertical-align: 0.5em;
}
.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {
  display: inline-block;
  vertical-align: text-bottom;
}
.mq-math-mode .mq-supsub .mq-sup {
  display: block;
}
.mq-math-mode .mq-supsub .mq-sub {
  display: block;
  float: left;
}
.mq-math-mode .mq-supsub .mq-binary-operator {
  padding: 0 0.1em;
}
.mq-math-mode .mq-supsub .mq-fraction {
  font-size: 70%;
}
.mq-math-mode sup.mq-nthroot {
  font-size: 80%;
  vertical-align: 0.8em;
  margin-right: -0.6em;
  margin-left: 0.2em;
  min-width: 0.5em;
}
.mq-math-mode .mq-paren {
  padding: 0 0.1em;
  vertical-align: top;
  -webkit-transform-origin: center 0.06em;
  -moz-transform-origin: center 0.06em;
  -ms-transform-origin: center 0.06em;
  -o-transform-origin: center 0.06em;
  transform-origin: center 0.06em;
}
.mq-math-mode .mq-paren.mq-ghost {
  color: silver;
}
.mq-math-mode .mq-paren + span {
  margin-top: 0.1em;
  margin-bottom: 0.1em;
}
.mq-math-mode .mq-array {
  vertical-align: middle;
  text-align: center;
}
.mq-math-mode .mq-array > span {
  display: block;
}
.mq-math-mode .mq-operator-name {
  font-family: Symbola, "Times New Roman", serif;
  line-height: 0.9;
  font-style: normal;
}
.mq-math-mode var.mq-operator-name.mq-first {
  padding-left: 0.2em;
}
.mq-math-mode var.mq-operator-name.mq-last,
.mq-math-mode .mq-supsub.mq-after-operator-name {
  padding-right: 0.2em;
}
.mq-math-mode .mq-fraction {
  font-size: 90%;
  text-align: center;
  vertical-align: -0.4em;
  padding: 0 0.2em;
}
.mq-math-mode .mq-fraction,
.mq-math-mode .mq-large-operator,
.mq-math-mode x:-moz-any-link {
  display: -moz-groupbox;
}
.mq-math-mode .mq-fraction,
.mq-math-mode .mq-large-operator,
.mq-math-mode x:-moz-any-link,
.mq-math-mode x:default {
  display: inline-block;
}
.mq-math-mode .mq-numerator,
.mq-math-mode .mq-denominator,
.mq-math-mode .mq-dot-recurring {
  display: block;
}
.mq-math-mode .mq-numerator {
  padding: 0 0.1em;
}
.mq-math-mode .mq-denominator {
  border-top: 1px solid;
  float: right;
  width: 100%;
  padding: 0.1em;
}
.mq-math-mode .mq-dot-recurring {
  text-align: center;
  height: 0.3em;
}
.mq-math-mode .mq-sqrt-prefix {
  padding-top: 0;
  position: relative;
  top: 0.1em;
  vertical-align: top;
  -webkit-transform-origin: top;
  -moz-transform-origin: top;
  -ms-transform-origin: top;
  -o-transform-origin: top;
  transform-origin: top;
}
.mq-math-mode .mq-sqrt-stem {
  border-top: 1px solid;
  margin-top: 1px;
  padding-left: 0.15em;
  padding-right: 0.2em;
  margin-right: 0.1em;
  padding-top: 1px;
}
.mq-math-mode .mq-diacritic-above {
  display: block;
  text-align: center;
  line-height: 0.4em;
}
.mq-math-mode .mq-diacritic-stem {
  display: block;
  text-align: center;
}
.mq-math-mode .mq-hat-prefix {
  display: block;
  text-align: center;
  line-height: 0.95em;
  margin-bottom: -0.7em;
  transform: scaleX(1.5);
  -moz-transform: scaleX(1.5);
  -o-transform: scaleX(1.5);
  -webkit-transform: scaleX(1.5);
}
.mq-math-mode .mq-hat-stem {
  display: block;
}
.mq-math-mode .mq-large-operator {
  vertical-align: -0.2em;
  padding: 0.2em;
  text-align: center;
}
.mq-math-mode .mq-large-operator .mq-from,
.mq-math-mode .mq-large-operator big,
.mq-math-mode .mq-large-operator .mq-to {
  display: block;
}
.mq-math-mode .mq-large-operator .mq-from,
.mq-math-mode .mq-large-operator .mq-to {
  font-size: 80%;
}
.mq-math-mode .mq-large-operator .mq-from {
  float: right;
  /* take out of normal flow to manipulate baseline */
  width: 100%;
}
.mq-math-mode,
.mq-math-mode .mq-editable-field {
  cursor: text;
  font-family: Symbola, "Times New Roman", serif;
}
.mq-math-mode .mq-overarc {
  border-top: 1px solid black;
  -webkit-border-top-right-radius: 50% 0.3em;
  -moz-border-radius-topright: 50% 0.3em;
  border-top-right-radius: 50% 0.3em;
  -webkit-border-top-left-radius: 50% 0.3em;
  -moz-border-radius-topleft: 50% 0.3em;
  border-top-left-radius: 50% 0.3em;
  margin-top: 1px;
  padding-top: 0.15em;
}
.mq-math-mode .mq-overarrow {
  min-width: 0.5em;
  border-top: 1px solid black;
  margin-top: 1px;
  padding-top: 0.2em;
  text-align: center;
}
.mq-math-mode .mq-overarrow:before {
  display: block;
  position: relative;
  top: -0.34em;
  font-size: 0.5em;
  line-height: 0em;
  content: '\\27A4';
  text-align: right;
}
.mq-math-mode .mq-overarrow.mq-arrow-left:before {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.mq-math-mode .mq-overarrow.mq-arrow-both {
  vertical-align: text-bottom;
}
.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty {
  min-height: 1.23em;
}
.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after {
  top: -0.34em;
}
.mq-math-mode .mq-overarrow.mq-arrow-both:before {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}
.mq-math-mode .mq-overarrow.mq-arrow-both:after {
  display: block;
  position: relative;
  top: -2.3em;
  font-size: 0.5em;
  line-height: 0em;
  content: '\\27A4';
  visibility: visible;
  text-align: right;
}
.mq-math-mode .mq-selection,
.mq-editable-field .mq-selection,
.mq-math-mode .mq-selection .mq-non-leaf,
.mq-editable-field .mq-selection .mq-non-leaf,
.mq-math-mode .mq-selection .mq-scaled,
.mq-editable-field .mq-selection .mq-scaled {
  background: #B4D5FE !important;
  background: Highlight !important;
  color: HighlightText;
  border-color: HighlightText;
}
.mq-math-mode .mq-selection .mq-matrixed,
.mq-editable-field .mq-selection .mq-matrixed {
  background: #39F !important;
}
.mq-math-mode .mq-selection .mq-matrixed-container,
.mq-editable-field .mq-selection .mq-matrixed-container {
  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;
}
.mq-math-mode .mq-selection.mq-blur,
.mq-editable-field .mq-selection.mq-blur,
.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,
.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,
.mq-math-mode .mq-selection.mq-blur .mq-scaled,
.mq-editable-field .mq-selection.mq-blur .mq-scaled,
.mq-math-mode .mq-selection.mq-blur .mq-matrixed,
.mq-editable-field .mq-selection.mq-blur .mq-matrixed {
  background: #D4D4D4 !important;
  color: black;
  border-color: black;
}
.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,
.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {
  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;
}
.mq-editable-field .mq-textarea,
.mq-math-mode .mq-textarea {
  position: relative;
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
}
.mq-editable-field .mq-textarea *,
.mq-math-mode .mq-textarea *,
.mq-editable-field .mq-selectable,
.mq-math-mode .mq-selectable {
  -webkit-user-select: text;
  -moz-user-select: text;
  user-select: text;
  position: absolute;
  clip: rect(1em 1em 1em 1em);
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  resize: none;
  width: 1px;
  height: 1px;
  box-sizing: content-box;
}
.mq-math-mode .mq-matrixed {
  background: white;
  display: -moz-inline-box;
  display: inline-block;
}
.mq-math-mode .mq-matrixed-container {
  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');
  margin-top: -0.1em;
}
`,""]);const me=pe},645:ae=>{ae.exports=function(ge){var K=[];return K.toString=function(){return this.map(function(N){var ce="",se=N[5]!==void 0;return N[4]&&(ce+="@supports (".concat(N[4],") {")),N[2]&&(ce+="@media ".concat(N[2]," {")),se&&(ce+="@layer".concat(N[5].length>0?" ".concat(N[5]):""," {")),ce+=ge(N),se&&(ce+="}"),N[2]&&(ce+="}"),N[4]&&(ce+="}"),ce}).join("")},K.i=function(N,ce,se,pe,me){typeof N=="string"&&(N=[[null,N,void 0]]);var tt={};if(se)for(var We=0;We<this.length;We++){var xe=this[We][0];xe!=null&&(tt[xe]=!0)}for(var Ye=0;Ye<N.length;Ye++){var de=[].concat(N[Ye]);se&&tt[de[0]]||(me!==void 0&&(de[5]===void 0||(de[1]="@layer".concat(de[5].length>0?" ".concat(de[5]):""," {").concat(de[1],"}")),de[5]=me),ce&&(de[2]&&(de[1]="@media ".concat(de[2]," {").concat(de[1],"}")),de[2]=ce),pe&&(de[4]?(de[1]="@supports (".concat(de[4],") {").concat(de[1],"}"),de[4]=pe):de[4]="".concat(pe)),K.push(de))}},K}},81:ae=>{ae.exports=function(ge){return ge[1]}},338:(ae,ge,K)=>{var N=K(755);window.jQuery=N,function(){var ce,se=window.jQuery,pe="mathquill-command-id",me="mathquill-block-id",tt=Math.min,We=Math.max;if(!se)throw"MathQuill requires jQuery 1.5.2+ to be loaded first";function xe(){}var Ye=[].slice;function de(c){var d=c.length-1;return function(){var r=Ye.call(arguments,0,d),n=Ye.call(arguments,d);return c.apply(this,r.concat([n]))}}var Je=de(function(c,d){return de(function(r,n){if(c in r)return r[c].apply(r,d.concat(n))})});function Ze(c){return de(function(d,r){return typeof d!="function"&&(d=Je(d)),c.call(this,function(n){return d.apply(n,[n].concat(r))})})}function g(c){var d=Ye.call(arguments,1);return function(){return c.apply(this,d)}}function B(c,d){if(!d)throw new Error("prayer failed: "+c)}var O=function(c,d,r){function n(v){return typeof v=="object"}function l(v){return typeof v=="function"}function y(){}return function v(k,w){function A(){var z=new I;return l(z.init)&&z.init.apply(z,arguments),z}function I(){}w===void 0&&(w=k,k=Object),A.Bare=I;var U,Y=y.prototype=k.prototype,ue=I.prototype=A.prototype=A.p=new y;return ue.constructor=A,A.extend=function(z){return v(A,z)},(A.open=function(z){if(U={},l(z)?U=z.call(A,ue,Y,A,k):n(z)&&(U=z),n(U))for(var fe in U)d.call(U,fe)&&(ue[fe]=U[fe]);return l(ue.init)||(ue.init=k),A})(w)}}(0,{}.hasOwnProperty),f=-1;function $(c){B("a direction was passed",c===f||c===1)}var le=O(se,function(c){c.insDirOf=function(d,r){return d===f?this.insertBefore(r.first()):this.insertAfter(r.last())},c.insAtDirEnd=function(d,r){return d===f?this.prependTo(r):this.appendTo(r)}}),Pe=O(function(c){c.parent=0,c[f]=0,c[1]=0,c.init=function(d,r,n){this.parent=d,this[f]=r,this[1]=n},this.copy=function(d){return Pe(d.parent,d[f],d[1])}}),be=O(function(c){c[f]=0,c[1]=0,c.parent=0;var d=0;this.byId={},c.init=function(){this.id=d+=1,be.byId[this.id]=this,this.ends={},this.ends[f]=0,this.ends[1]=0},c.dispose=function(){delete be.byId[this.id]},c.toString=function(){return"{{ MathQuill Node #"+this.id+" }}"},c.jQ=le(),c.jQadd=function(r){return this.jQ=this.jQ.add(r)},c.jQize=function(r){function n(y){if(y.getAttribute){var v=y.getAttribute("mathquill-command-id"),k=y.getAttribute("mathquill-block-id");v&&be.byId[v].jQadd(y),k&&be.byId[k].jQadd(y)}for(y=y.firstChild;y;y=y.nextSibling)n(y)}r=le(r||this.html());for(var l=0;l<r.length;l+=1)n(r[l]);return r},c.createDir=function(r,n){$(r);var l=this;return l.jQize(),l.jQ.insDirOf(r,n.jQ),n[r]=l.adopt(n.parent,n[f],n[1]),l},c.createLeftOf=function(r){return this.createDir(f,r)},c.selectChildren=function(r,n){return ht(r,n)},c.bubble=Ze(function(r){for(var n=this;n&&r(n)!==!1;n=n.parent);return this}),c.postOrder=Ze(function(r){return function n(l){l.eachChild(n),r(l)}(this),this}),c.isEmpty=function(){return this.ends[f]===0&&this.ends[1]===0},c.isStyleBlock=function(){return!1},c.children=function(){return a(this.ends[f],this.ends[1])},c.eachChild=function(){var r=this.children();return r.each.apply(r,arguments),this},c.foldChildren=function(r,n){return this.children().fold(r,n)},c.withDirAdopt=function(r,n,l,y){return a(this,this).withDirAdopt(r,n,l,y),this},c.adopt=function(r,n,l){return a(this,this).adopt(r,n,l),this},c.disown=function(){return a(this,this).disown(),this},c.remove=function(){return this.jQ.remove(),this.postOrder("dispose"),this.disown()}});function lt(c,d,r){B("a parent is always present",c),B("leftward is properly set up",d?d[1]===r&&d.parent===c:c.ends[f]===r),B("rightward is properly set up",r?r[f]===d&&r.parent===c:c.ends[1]===d)}var a=O(function(c){c.init=function(d,r,n){if(n===ce&&(n=f),$(n),B("no half-empty fragments",!d==!r),this.ends={},d){B("withDir is passed to Fragment",d instanceof be),B("oppDir is passed to Fragment",r instanceof be),B("withDir and oppDir have the same parent",d.parent===r.parent),this.ends[n]=d,this.ends[-n]=r;var l=this.fold([],function(y,v){return y.push.apply(y,v.jQ.get()),y});this.jQ=this.jQ.add(l)}},c.jQ=le(),c.withDirAdopt=function(d,r,n,l){return d===f?this.adopt(r,n,l):this.adopt(r,l,n)},c.adopt=function(d,r,n){lt(d,r,n);var l=this;l.disowned=!1;var y=l.ends[f];if(!y)return this;var v=l.ends[1];return r||(d.ends[f]=y),n?n[f]=v:d.ends[1]=v,l.ends[1][1]=n,l.each(function(k){k[f]=r,k.parent=d,r&&(r[1]=k),r=k}),l},c.disown=function(){var d=this,r=d.ends[f];if(!r||d.disowned)return d;d.disowned=!0;var n=d.ends[1],l=r.parent;return lt(l,r[f],r),lt(l,n,n[1]),r[f]?r[f][1]=n[1]:l.ends[f]=n[1],n[1]?n[1][f]=r[f]:l.ends[1]=r[f],d},c.remove=function(){return this.jQ.remove(),this.each("postOrder","dispose"),this.disown()},c.each=Ze(function(d){var r=this,n=r.ends[f];if(!n)return r;for(;n!==r.ends[1][1]&&d(n)!==!1;n=n[1]);return r}),c.fold=function(d,r){return this.each(function(n){d=r.call(this,d,n)}),d}}),s={},we={},De=O(Pe,function(c){c.init=function(d,r){this.parent=d,this.options=r;var n=this.jQ=this._jQ=le('<span class="mq-cursor">&#8203;</span>');this.blink=function(){n.toggleClass("mq-blink")},this.upDownCache={}},c.show=function(){return this.jQ=this._jQ.removeClass("mq-blink"),"intervalId"in this?clearInterval(this.intervalId):(this[1]?this.selection&&this.selection.ends[f][f]===this[f]?this.jQ.insertBefore(this.selection.jQ):this.jQ.insertBefore(this[1].jQ.first()):this.jQ.appendTo(this.parent.jQ),this.parent.focus()),this.intervalId=setInterval(this.blink,500),this},c.hide=function(){return"intervalId"in this&&clearInterval(this.intervalId),delete this.intervalId,this.jQ.detach(),this.jQ=le(),this},c.withDirInsertAt=function(d,r,n,l){var y=this.parent;this.parent=r,this[d]=n,this[-d]=l,y!==r&&y.blur&&y.blur(this)},c.insDirOf=function(d,r){return $(d),this.jQ.insDirOf(d,r.jQ),this.withDirInsertAt(d,r.parent,r[d],r),this.parent.jQ.addClass("mq-hasCursor"),this},c.insLeftOf=function(d){return this.insDirOf(f,d)},c.insRightOf=function(d){return this.insDirOf(1,d)},c.insAtDirEnd=function(d,r){return $(d),this.jQ.insAtDirEnd(d,r.jQ),this.withDirInsertAt(d,r,0,r.ends[d]),r.focus(),this},c.insAtLeftEnd=function(d){return this.insAtDirEnd(f,d)},c.insAtRightEnd=function(d){return this.insAtDirEnd(1,d)},c.jumpUpDown=function(d,r){var n=this;n.upDownCache[d.id]=Pe.copy(n);var l=n.upDownCache[r.id];if(l)l[1]?n.insLeftOf(l[1]):n.insAtRightEnd(l.parent);else{var y=n.offset().left;r.seek(y,n)}},c.offset=function(){var d=this.jQ.removeClass("mq-cursor").offset();return this.jQ.addClass("mq-cursor"),d},c.unwrapGramp=function(){var d=this.parent.parent,r=d.parent,n=d[1],l=d[f];if(d.disown().eachChild(function(y){y.isEmpty()||(y.children().adopt(r,l,n).each(function(v){v.jQ.insertBefore(d.jQ.first())}),l=y.ends[1])}),!this[1])if(this[f])this[1]=this[f][1];else for(;!this[1];){if(this.parent=this.parent[1],!this.parent){this[1]=d[1],this.parent=r;break}this[1]=this.parent.ends[f]}this[1]?this.insLeftOf(this[1]):this.insAtRightEnd(r),d.jQ.remove(),d[f].siblingDeleted&&d[f].siblingDeleted(this.options,1),d[1].siblingDeleted&&d[1].siblingDeleted(this.options,f)},c.startSelection=function(){for(var d=this.anticursor=Pe.copy(this),r=d.ancestors={},n=d;n.parent;n=n.parent)r[n.parent.id]=n},c.endSelection=function(){delete this.anticursor},c.select=function(){var d=this.anticursor;if(this[f]===d[f]&&this.parent===d.parent)return!1;for(var r=this;r.parent;r=r.parent)if(r.parent.id in d.ancestors){var n=r.parent;break}B("cursor and anticursor in the same tree",n);var l,y,v=d.ancestors[n.id],k=1;if(r[f]!==v){for(var w=r;w;w=w[1])if(w[1]===v[1]){k=f,l=r,y=v;break}}return k===1&&(l=v,y=r),l instanceof Pe&&(l=l[1]),y instanceof Pe&&(y=y[f]),this.hide().selection=n.selectChildren(l,y),this.insDirOf(k,this.selection.ends[k]),this.selectionChanged(),!0},c.clearSelection=function(){return this.selection&&(this.selection.clear(),delete this.selection,this.selectionChanged()),this},c.deleteSelection=function(){this.selection&&(this[f]=this.selection.ends[f][f],this[1]=this.selection.ends[1][1],this.selection.remove(),this.selectionChanged(),delete this.selection)},c.replaceSelection=function(){var d=this.selection;return d&&(this[f]=d.ends[f][f],this[1]=d.ends[1][1],delete this.selection),d},c.depth=function(){for(var d=this,r=0;d=d.parent;)r+=d instanceof Me?1:0;return r},c.isTooDeep=function(d){if(this.options.maxDepth!==ce)return this.depth()+(d||0)>this.options.maxDepth}}),ht=O(a,function(c,d){c.init=function(){d.init.apply(this,arguments),this.jQ=this.jQ.wrapAll('<span class="mq-selection"></span>').parent()},c.adopt=function(){return this.jQ.replaceWith(this.jQ=this.jQ.children()),d.adopt.apply(this,arguments)},c.clear=function(){return this.jQ.replaceWith(this.jQ[0].childNodes),this},c.join=function(r){return this.fold("",function(n,l){return n+l[r]()})}}),Ie=O(function(c){c.init=function(r,n,l){this.id=r.id,this.data={},this.root=r,this.container=n,this.options=l,r.controller=this,this.cursor=r.cursor=De(r,l)},c.handle=function(r,n){var l=this.options.handlers;if(l&&l.fns[r]){var y=l.APIClasses[this.KIND_OF_MQ](this);n===f||n===1?l.fns[r](n,y):l.fns[r](y)}};var d=[];this.onNotify=function(r){d.push(r)},c.notify=function(){for(var r=0;r<d.length;r+=1)d[r].apply(this.cursor,arguments);return this}}),Qe={},rt=O(),Tt={},Pt=O(),Mt={};function $t(){window.console&&console.warn(`You are using the MathQuill API without specifying an interface version, which will fail in v1.0.0. Easiest fix is to do the following before doing anything else:

    MathQuill = MathQuill.getInterface(1);
    // now MathQuill.MathField() works like it used to

See also the "\`dev\` branch (2014–2015) → v0.10.0 Migration Guide" at
  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide`)}function nt(c){return $t(),ur(c)}nt.prototype=Pt.p,nt.VERSION="v0.11.0",nt.interfaceVersion=function(c){if(c!==1)throw"Only interface version 1 supported. You specified: "+c;return($t=function(){window.console&&console.warn(`You called MathQuill.interfaceVersion(1); to specify the interface version, which will fail in v1.0.0. You can fix this easily by doing this before doing anything else:

    MathQuill = MathQuill.getInterface(1);
    // now MathQuill.MathField() works like it used to

See also the "\`dev\` branch (2014–2015) → v0.10.0 Migration Guide" at
  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide`)})(),nt},nt.getInterface=qt;var yr=qt.MIN=1,mt=qt.MAX=2;function qt(c){if(!(yr<=c&&c<=mt))throw"Only interface versions between "+yr+" and "+mt+" supported. You specified: "+c;function d(v){if(!v||!v.nodeType)return null;var k=le(v).children(".mq-root-block").attr(me),w=k&&be.byId[k].controller;return w?r[w.KIND_OF_MQ](w):null}var r={};function n(v,k){for(var w in k&&k.handlers&&(k.handlers={fns:k.handlers,APIClasses:r}),k)if(k.hasOwnProperty(w)){var A=k[w],I=Tt[w];v[w]=I?I(A):A}}d.L=f,d.R=1,d.saneKeyboardEvents=or,d.config=function(v){return n(rt.p,v),this},d.registerEmbed=function(v,k){if(!/^[a-z][a-z0-9]*$/i.test(v))throw"Embed name must start with letter and be only letters and digits";Mt[v]=k};var l=r.AbstractMathQuill=O(Pt,function(v){v.init=function(k){this.__controller=k,this.__options=k.options,this.id=k.id,this.data=k.data},v.__mathquillify=function(k){var w=this.__controller,A=w.root,I=w.container;w.createTextarea();var U=I.addClass(k).contents().detach();A.jQ=le('<span class="mq-root-block"/>').attr(me,A.id).appendTo(I),this.latex(U.text()),this.revert=function(){return I.empty().unbind(".mathquill").removeClass("mq-editable-field mq-math-mode mq-text-mode").append(U)}},v.config=function(k){return n(this.__options,k),this},v.el=function(){return this.__controller.container[0]},v.text=function(){return this.__controller.exportText()},v.latex=function(k){return arguments.length>0?(this.__controller.renderLatexMath(k),this.__controller.blurred&&this.__controller.cursor.hide().parent.blur(),this):this.__controller.exportLatex()},v.html=function(){return this.__controller.root.jQ.html().replace(/ mathquill-(?:command|block)-id="?\d+"?/g,"").replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\/span>/i,"").replace(/ mq-hasCursor|mq-hasCursor ?/,"").replace(/ class=(""|(?= |>))/g,"")},v.reflow=function(){return this.__controller.root.postOrder("reflow"),this}});for(var y in d.prototype=l.prototype,r.EditableField=O(l,function(v,k){v.__mathquillify=function(){return k.__mathquillify.apply(this,arguments),this.__controller.editable=!0,this.__controller.delegateMouseEvents(),this.__controller.editablesTextareaEvents(),this},v.focus=function(){return this.__controller.textarea.focus(),this},v.blur=function(){return this.__controller.textarea.blur(),this},v.write=function(w){return this.__controller.writeLatex(w),this.__controller.scrollHoriz(),this.__controller.blurred&&this.__controller.cursor.hide().parent.blur(),this},v.empty=function(){var w=this.__controller.root,A=this.__controller.cursor;return w.eachChild("postOrder","dispose"),w.ends[f]=w.ends[1]=0,w.jQ.empty(),delete A.selection,A.insAtRightEnd(w),this},v.cmd=function(w){var A=this.__controller.notify(),I=A.cursor;if(/^\\[a-z]+$/i.test(w)&&!I.isTooDeep()){w=w.slice(1);var U=s[w];U&&(w=U(w),I.selection&&w.replaces(I.replaceSelection()),w.createLeftOf(I.show()),this.__controller.scrollHoriz())}else I.parent.write(I,w);return A.blurred&&I.hide().parent.blur(),this},v.select=function(){var w=this.__controller;for(w.notify("move").cursor.insAtRightEnd(w.root);w.cursor[f];)w.selectLeft();return this},v.clearSelection=function(){return this.__controller.cursor.clearSelection(),this},v.moveToDirEnd=function(w){return this.__controller.notify("move").cursor.insAtDirEnd(w,this.__controller.root),this},v.moveToLeftEnd=function(){return this.moveToDirEnd(f)},v.moveToRightEnd=function(){return this.moveToDirEnd(1)},v.keystroke=function(w){w=w.replace(/^\s+|\s+$/g,"").split(/\s+/);for(var A=0;A<w.length;A+=1)this.__controller.keystroke(w[A],{preventDefault:xe});return this},v.typedText=function(w){for(var A=0;A<w.length;A+=1)this.__controller.typedText(w.charAt(A));return this},v.dropEmbedded=function(w,A,I){var U=w-le(window).scrollLeft(),Y=A-le(window).scrollTop(),ue=document.elementFromPoint(U,Y);this.__controller.seek(le(ue),w,A),Ar().setOptions(I).createLeftOf(this.__controller.cursor)},v.clickAt=function(w,A,I){I=I||document.elementFromPoint(w,A);var U=this.__controller,Y=U.root;return se.contains(Y.jQ[0],I)||(I=Y.jQ[0]),U.seek(le(I),w+pageXOffset,A+pageYOffset),U.blurred&&this.focus(),this},v.ignoreNextMousedown=function(w){return this.__controller.cursor.options.ignoreNextMousedown=w,this}}),d.EditableField=function(){throw"wtf don't call me, I'm 'abstract'"},d.EditableField.prototype=r.EditableField.prototype,Qe)(function(v,k){var w=r[v]=k(r);d[v]=function(A,I){var U=d(A);if(U instanceof w||!A||!A.nodeType)return U;var Y=Ie(w.RootBlock(),le(A),rt());return Y.KIND_OF_MQ=v,w(Y).__mathquillify(I,c)},d[v].prototype=w.prototype})(y,Qe[y]);return d}nt.noConflict=function(){return window.MathQuill=ir,nt};var ir=window.MathQuill;function gr(c){for(var d="moveOutOf deleteOutOf selectOutOf upOutOf downOutOf".split(" "),r=0;r<d.length;r+=1)(function(n){c[n]=function(l){this.controller.handle(n,l)}})(d[r]);c.reflow=function(){this.controller.handle("reflow"),this.controller.handle("edited"),this.controller.handle("edit")}}window.MathQuill=nt;var Sr,or=(Sr={8:"Backspace",9:"Tab",10:"Enter",13:"Enter",16:"Shift",17:"Control",18:"Alt",20:"CapsLock",27:"Esc",32:"Spacebar",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",45:"Insert",46:"Del",144:"NumLock"},function(c,d){var r,n=null,l=null,y=se(c),v=se(d.container||y),k=xe;function w(z){k=z,clearTimeout(r),r=setTimeout(z)}function A(z){w(function(fe){k=xe,clearTimeout(r),z(fe)})}v.bind("keydown keypress input keyup focusout paste",function(z){k(z)});var I=!1;function U(){d.keystroke(function(z){var fe,ie=z.which||z.keyCode,Te=Sr[ie],Ke=[];return z.ctrlKey&&Ke.push("Ctrl"),z.originalEvent&&z.originalEvent.metaKey&&Ke.push("Meta"),z.altKey&&Ke.push("Alt"),z.shiftKey&&Ke.push("Shift"),fe=Te||String.fromCharCode(ie),Ke.length||Te?(Ke.push(fe),Ke.join("-")):fe}(n),n)}function Y(){if(!("selectionStart"in(z=y[0]))||z.selectionStart===z.selectionEnd){var z,fe=y.val();fe.length===1?(y.val(""),d.typedText(fe)):fe&&y[0].select&&y[0].select()}}function ue(){var z=y.val();y.val(""),z&&d.paste(z)}return v.bind({keydown:function(z){n=z,l=null,I&&A(function(fe){fe&&fe.type==="focusout"||!y[0].select||y[0].select()}),U()},keypress:function(z){n&&l&&U(),l=z,w(Y)},keyup:function(z){n&&!l&&w(Y)},focusout:function(){n=l=null},cut:function(){A(function(){d.cut()})},copy:function(){A(function(){d.copy()})},paste:function(z){y.focus(),w(ue)}}),{select:function(z){k(),k=xe,clearTimeout(r),y.val(z),z&&y[0].select&&y[0].select(),I=!!z}}}),Z=O(function(c,d,r){function n(k,w){throw"Parse Error: "+w+" at "+(k?"'"+k+"'":"EOF")}c.init=function(k){this._=k},c.parse=function(k){return this.skip(v)._(""+k,function(w,A){return A},n)},c.or=function(k){B("or is passed a parser",k instanceof r);var w=this;return r(function(A,I,U){return w._(A,I,function(Y){return k._(A,I,U)})})},c.then=function(k){var w=this;return r(function(A,I,U){return w._(A,function(Y,ue){var z=k instanceof r?k:k(ue);return B("a parser is returned",z instanceof r),z._(Y,I,U)},U)})},c.many=function(){var k=this;return r(function(w,A,I){for(var U=[];k._(w,Y,ue););return A(w,U);function Y(z,fe){return w=z,U.push(fe),!0}function ue(){return!1}})},c.times=function(k,w){arguments.length<2&&(w=k);var A=this;return r(function(I,U,Y){for(var ue,z=[],fe=!0,ie=0;ie<k;ie+=1)if(!(fe=A._(I,Te,Ke)))return Y(I,ue);for(;ie<w&&fe;ie+=1)fe=A._(I,Te,Yr);return U(I,z);function Te(pr,Yt){return z.push(Yt),I=pr,!0}function Ke(pr,Yt){return ue=Yt,I=pr,!1}function Yr(pr,Yt){return!1}})},c.result=function(k){return this.then(y(k))},c.atMost=function(k){return this.times(0,k)},c.atLeast=function(k){var w=this;return w.times(k).then(function(A){return w.many().map(function(I){return A.concat(I)})})},c.map=function(k){return this.then(function(w){return y(k(w))})},c.skip=function(k){return this.then(function(w){return k.result(w)})},this.string=function(k){var w=k.length,A="expected '"+k+"'";return r(function(I,U,Y){var ue=I.slice(0,w);return ue===k?U(I.slice(w),ue):Y(I,A)})};var l=this.regex=function(k){B("regexp parser is anchored",k.toString().charAt(1)==="^");var w="expected "+k;return r(function(A,I,U){var Y=k.exec(A);if(Y){var ue=Y[0];return I(A.slice(ue.length),ue)}return U(A,w)})},y=r.succeed=function(k){return r(function(w,A){return A(w,k)})},v=(r.fail=function(k){return r(function(w,A,I){return I(w,k)})},r.letter=l(/^[a-z]/i),r.letters=l(/^[a-z]*/i),r.digit=l(/^[0-9]/),r.digits=l(/^[0-9]*/),r.whitespace=l(/^\s+/),r.optWhitespace=l(/^\s*/),r.any=r(function(k,w,A){return k?w(k.slice(1),k.charAt(0)):A(k,"expected any character")}),r.all=r(function(k,w,A){return w("",k)}),r.eof=r(function(k,w,A){return k?A(k,"expected EOF"):w(k,k)}))});Ie.open(function(c){c.focusBlurEvents=function(){var d,r=this,n=r.root,l=r.cursor;function y(){clearTimeout(d),l.selection&&l.selection.jQ.addClass("mq-blur"),v()}function v(){l.hide().parent.blur(),r.container.removeClass("mq-focused"),le(window).unbind("blur",y)}r.textarea.focus(function(){r.blurred=!1,clearTimeout(d),r.container.addClass("mq-focused"),l.parent||l.insAtRightEnd(n),l.selection?(l.selection.jQ.removeClass("mq-blur"),r.selectionChanged()):l.show()}).blur(function(){r.blurred=!0,d=setTimeout(function(){n.postOrder("intentionalBlur"),l.clearSelection().endSelection(),v()}),le(window).bind("blur",y)}),r.blurred=!0,l.hide().parent.blur()}}),Ie.open(function(c,d){c.exportText=function(){return this.root.foldChildren("",function(r,n){return r+n.text()})}}),Ie.open(function(c){rt.p.ignoreNextMousedown=xe,c.delegateMouseEvents=function(){var d=this.root.jQ;this.container.bind("mousedown.mathquill",function(r){var n,l=le(r.target).closest(".mq-root-block"),y=be.byId[l.attr(me)||d.attr(me)].controller,v=y.cursor,k=v.blink,w=y.textareaSpan,A=y.textarea;function I(Y){n=le(Y.target)}function U(Y){v.anticursor||v.startSelection(),y.seek(n,Y.pageX,Y.pageY).cursor.select(),n=ce}r.preventDefault(),r.target.unselectable=!0,v.options.ignoreNextMousedown(r)||(v.options.ignoreNextMousedown=xe,y.blurred&&(y.editable||l.prepend(w),A.focus()),v.blink=xe,y.seek(le(r.target),r.pageX,r.pageY).cursor.startSelection(),l.mousemove(I),le(r.target.ownerDocument).mousemove(U).mouseup(function Y(ue){v.blink=k,v.selection||(y.editable?v.show():w.detach()),l.unbind("mousemove",I),le(ue.target.ownerDocument).unbind("mousemove",U).unbind("mouseup",Y)}))})}}),Ie.open(function(c){c.seek=function(d,r,n){var l=this.notify("select").cursor;if(d){var y=d.attr(me)||d.attr(pe);if(!y){var v=d.parent();y=v.attr(me)||v.attr(pe)}}var k=y?be.byId[y]:this.root;return B("nodeId is the id of some Node that exists",k),l.clearSelection().show(),k.seek(r,l),this.scrollHoriz(),this}}),Ie.open(function(c){c.keystroke=function(d,r){this.cursor.parent.keystroke(d,r,this)}}),be.open(function(c){c.keystroke=function(d,r,n){var l=n.cursor;switch(d){case"Ctrl-Shift-Backspace":case"Ctrl-Backspace":n.ctrlDeleteDir(f);break;case"Shift-Backspace":case"Backspace":n.backspace();break;case"Esc":case"Tab":return void n.escapeDir(1,d,r);case"Shift-Tab":case"Shift-Esc":return void n.escapeDir(f,d,r);case"End":n.notify("move").cursor.insAtRightEnd(l.parent);break;case"Ctrl-End":n.notify("move").cursor.insAtRightEnd(n.root);break;case"Shift-End":for(;l[1];)n.selectRight();break;case"Ctrl-Shift-End":for(;l[1]||l.parent!==n.root;)n.selectRight();break;case"Home":n.notify("move").cursor.insAtLeftEnd(l.parent);break;case"Ctrl-Home":n.notify("move").cursor.insAtLeftEnd(n.root);break;case"Shift-Home":for(;l[f];)n.selectLeft();break;case"Ctrl-Shift-Home":for(;l[f]||l.parent!==n.root;)n.selectLeft();break;case"Left":n.moveLeft();break;case"Shift-Left":n.selectLeft();break;case"Ctrl-Left":break;case"Right":n.moveRight();break;case"Shift-Right":n.selectRight();break;case"Ctrl-Right":break;case"Up":n.moveUp();break;case"Down":n.moveDown();break;case"Shift-Up":if(l[f])for(;l[f];)n.selectLeft();else n.selectLeft();case"Shift-Down":if(l[1])for(;l[1];)n.selectRight();else n.selectRight();case"Ctrl-Up":case"Ctrl-Down":break;case"Ctrl-Shift-Del":case"Ctrl-Del":n.ctrlDeleteDir(1);break;case"Shift-Del":case"Del":n.deleteForward();break;case"Meta-A":case"Ctrl-A":for(n.notify("move").cursor.insAtRightEnd(n.root);l[f];)n.selectLeft();break;default:return}r.preventDefault(),n.scrollHoriz()},c.moveOutOf=c.moveTowards=c.deleteOutOf=c.deleteTowards=c.unselectInto=c.selectOutOf=c.selectTowards=function(){B("overridden or never called on this node")}}),Ie.open(function(c){function d(r,n){var l=r.notify("upDown").cursor,y=n+"Into",v=n+"OutOf";return l[1][y]?l.insAtLeftEnd(l[1][y]):l[f][y]?l.insAtRightEnd(l[f][y]):l.parent.bubble(function(k){var w=k[v];if(w&&(typeof w=="function"&&(w=k[v](l)),w instanceof be&&l.jumpUpDown(k,w),w!==!0))return!1}),r}this.onNotify(function(r){r!=="move"&&r!=="upDown"||this.show().clearSelection()}),c.escapeDir=function(r,n,l){$(r);var y=this.cursor;if(y.parent!==this.root&&l.preventDefault(),y.parent!==this.root)return y.parent.moveOutOf(r,y),this.notify("move")},Tt.leftRightIntoCmdGoes=function(r){if(r&&r!=="up"&&r!=="down")throw'"up" or "down" required for leftRightIntoCmdGoes option, got "'+r+'"';return r},c.moveDir=function(r){$(r);var n=this.cursor,l=n.options.leftRightIntoCmdGoes;return n.selection?n.insDirOf(r,n.selection.ends[r]):n[r]?n[r].moveTowards(r,n,l):n.parent.moveOutOf(r,n,l),this.notify("move")},c.moveLeft=function(){return this.moveDir(f)},c.moveRight=function(){return this.moveDir(1)},c.moveUp=function(){return d(this,"up")},c.moveDown=function(){return d(this,"down")},this.onNotify(function(r){r!=="upDown"&&(this.upDownCache={})}),this.onNotify(function(r){r==="edit"&&this.show().deleteSelection()}),c.deleteDir=function(r){$(r);var n=this.cursor,l=n.selection;return this.notify("edit"),l||(n[r]?n[r].deleteTowards(r,n):n.parent.deleteOutOf(r,n)),n[f].siblingDeleted&&n[f].siblingDeleted(n.options,1),n[1].siblingDeleted&&n[1].siblingDeleted(n.options,f),n.parent.bubble("reflow"),this},c.ctrlDeleteDir=function(r){$(r);var n=this.cursor;return!n[r]||n.selection?this.deleteDir(r):(this.notify("edit"),r===f?a(n.parent.ends[f],n[f]).remove():a(n[1],n.parent.ends[1]).remove(),n.insAtDirEnd(r,n.parent),n[f].siblingDeleted&&n[f].siblingDeleted(n.options,1),n[1].siblingDeleted&&n[1].siblingDeleted(n.options,f),n.parent.bubble("reflow"),this)},c.backspace=function(){return this.deleteDir(f)},c.deleteForward=function(){return this.deleteDir(1)},this.onNotify(function(r){r!=="select"&&this.endSelection()}),c.selectDir=function(r){var n=this.notify("select").cursor,l=n.selection;$(r),n.anticursor||n.startSelection();var y=n[r];y?l&&l.ends[r]===y&&n.anticursor[-r]!==y?y.unselectInto(r,n):y.selectTowards(r,n):n.parent.selectOutOf(r,n),n.clearSelection(),n.select()||n.show()},c.selectLeft=function(){return this.selectDir(f)},c.selectRight=function(){return this.selectDir(1)}}),Ie.open(function(c){rt.p.substituteTextarea=function(){return le("<textarea autocapitalize=off autocomplete=off autocorrect=off spellcheck=false x-palm-disable-ste-all=true />")[0]},c.createTextarea=function(){var d=this.textareaSpan=le('<span class="mq-textarea"></span>'),r=this.options.substituteTextarea();if(!r.nodeType)throw"substituteTextarea() must return a DOM element, got "+r;r=this.textarea=le(r).appendTo(d);var n=this;n.cursor.selectionChanged=function(){n.selectionChanged()}},c.selectionChanged=function(){var d=this;Dt(d.container[0]),d.textareaSelectionTimeout===ce&&(d.textareaSelectionTimeout=setTimeout(function(){d.setTextareaSelection()}))},c.setTextareaSelection=function(){this.textareaSelectionTimeout=ce;var d="";this.cursor.selection&&(d=this.cursor.selection.join("latex"),this.options.statelessClipboard&&(d="$"+d+"$")),this.selectFn(d)},c.staticMathTextareaEvents=function(){var d=this,r=(d.root,d.cursor),n=d.textarea,l=d.textareaSpan;function y(){l.detach(),d.blurred=!0}this.container.prepend(se('<span class="mq-selectable">').text("$"+d.exportLatex()+"$")),d.blurred=!0,n.bind("cut paste",!1).bind("copy",function(){d.setTextareaSelection()}).focus(function(){d.blurred=!1}).blur(function(){r.selection&&r.selection.clear(),setTimeout(y)}),d.selectFn=function(v){n.val(v),v&&n.select()}},rt.p.substituteKeyboardEvents=or,c.editablesTextareaEvents=function(){var d=this.textarea,r=this.textareaSpan,n=this.options.substituteKeyboardEvents(d,this);this.selectFn=function(l){n.select(l)},this.container.prepend(r),this.focusBlurEvents()},c.typedText=function(d){if(d===`
`)return this.handle("enter");var r=this.notify().cursor;r.parent.write(r,d),this.scrollHoriz()},c.cut=function(){var d=this,r=d.cursor;r.selection&&setTimeout(function(){d.notify("edit"),r.parent.bubble("reflow")})},c.copy=function(){this.setTextareaSelection()},c.paste=function(d){this.options.statelessClipboard&&(d=d.slice(0,1)==="$"&&d.slice(-1)==="$"?d.slice(1,-1):"\\text{"+d+"}"),this.writeLatex(d).cursor.show()}});var Re=function(){function c(ie){for(var Te=ie[0]||Me(),Ke=1;Ke<ie.length;Ke+=1)ie[Ke].children().adopt(Te,Te.ends[1],0);return Te}var d=Z.string,r=Z.regex,n=Z.letter,l=Z.any,y=Z.optWhitespace,v=Z.succeed,k=Z.fail,w=n.map(function(ie){return et(ie)}),A=r(/^[^${}\\_^]/).map(function(ie){return S(ie)}),I=r(/^[^\\a-eg-zA-Z]/).or(d("\\").then(r(/^[a-z]+/i).or(r(/^\s+/).result(" ")).or(l))).then(function(ie){var Te=s[ie];return Te?Te(ie).parser():k("unknown command: \\"+ie)}).or(w).or(A),U=d("{").then(function(){return ue}).skip(d("}")),Y=y.then(U.or(I.map(function(ie){var Te=Me();return ie.adopt(Te,0,0),Te}))),ue=Y.many().map(c).skip(y),z=d("[").then(Y.then(function(ie){return ie.join("latex")!=="]"?v(ie):k()}).many().map(c).skip(y)).skip(d("]")),fe=ue;return fe.block=Y,fe.optBlock=z,fe}();Ie.open(function(c,d){c.exportLatex=function(){return this.root.latex().replace(/(\\[a-z]+) (?![a-z])/gi,"$1")},Tt.maxDepth=function(r){return typeof r=="number"?r:ce},c.writeLatex=function(r){var n=this.notify("edit").cursor,l=Z.all,y=Z.eof,v=Re.skip(y).or(l.result(!1)).parse(r);return v&&!v.isEmpty()&&v.prepareInsertionAt(n)&&(v.children().adopt(n.parent,n[f],n[1]),v.jQize().insertBefore(n.jQ),n[f]=v.ends[1],v.finalizeInsert(n.options,n),v.ends[1][1].siblingCreated&&v.ends[1][1].siblingCreated(n.options,f),v.ends[f][f].siblingCreated&&v.ends[f][f].siblingCreated(n.options,1),n.parent.bubble("reflow")),this},c.renderLatexMath=function(r){var n=this.root,l=this.cursor,y=(l.options,n.jQ),v=Z.all,k=Z.eof,w=Re.skip(k).or(v.result(!1)).parse(r);if(n.eachChild("postOrder","dispose"),n.ends[f]=n.ends[1]=0,w&&w.prepareInsertionAt(l)){w.children().adopt(n,0,0);var A=w.join("html");y.html(A),n.jQize(y.children()),n.finalizeInsert(l.options)}else y.empty();delete l.selection,l.insAtRightEnd(n)},c.renderLatexText=function(r){var n=this.root,l=this.cursor;n.jQ.children().slice(1).remove(),n.eachChild("postOrder","dispose"),n.ends[f]=n.ends[1]=0,delete l.selection,l.show().insAtRightEnd(n);var y=Z.regex,v=Z.string,k=Z.eof,w=Z.all,A=v("$").then(Re).skip(v("$").or(k)).map(function(ue){var z=br(l);z.createBlocks();var fe=z.ends[f];return ue.children().adopt(fe,0,0),z}),I=v("\\$").result("$").or(y(/^[^$]/)).map(S),U=A.or(I).many().skip(k).or(w.result(!1)).parse(r);if(U){for(var Y=0;Y<U.length;Y+=1)U[Y].adopt(n,n.ends[1],0);n.jQize().appendTo(n.jQ),n.finalizeInsert(l.options)}}}),Ie.open(function(c){c.scrollHoriz=function(){var d=this.cursor,r=d.selection,n=this.root.jQ[0].getBoundingClientRect();if(r){var l=r.jQ[0].getBoundingClientRect(),y=l.left-(n.left+20),v=l.right-(n.right-20);if(r.ends[f]===d[1])if(y<0)w=y;else{if(!(v>0))return;w=l.left-v<n.left+20?y:v}else if(v>0)w=v;else{if(!(y<0))return;w=l.right-y>n.right-20?v:y}}else{var k=d.jQ[0].getBoundingClientRect().left;if(k>n.right-20)var w=k-(n.right-20);else{if(!(k<n.left+20))return;w=k-(n.left+20)}}this.root.jQ.stop().animate({scrollLeft:"+="+w},100)}});var Er=O(be,function(c,d){c.finalizeInsert=function(r,n){var l=this;l.postOrder("finalizeTree",r),l.postOrder("contactWeld",n),l.postOrder("blur"),l.postOrder("reflow"),l[1].siblingCreated&&l[1].siblingCreated(r,f),l[f].siblingCreated&&l[f].siblingCreated(r,1),l.bubble("reflow")},c.prepareInsertionAt=function(r){var n=r.options.maxDepth;if(n!==ce){var l=r.depth();if(l>n)return!1;this.removeNodesDeeperThan(n-l)}return!0},c.removeNodesDeeperThan=function(r){for(var n,l=0,y=[[this,l]];y.length;)(n=y.shift())[0].children().each(function(v){var k=v instanceof Me?1:0;(l=n[1]+k)<=r?y.push([v,l]):(k?v.children():v).remove()})}}),qe=O(Er,function(c,d){c.init=function(r,n,l){var y=this;d.init.call(y),y.ctrlSeq||(y.ctrlSeq=r),n&&(y.htmlTemplate=n),l&&(y.textTemplate=l)},c.replaces=function(r){r.disown(),this.replacedFragment=r},c.isEmpty=function(){return this.foldChildren(!0,function(r,n){return r&&n.isEmpty()})},c.parser=function(){var r=Re.block,n=this;return r.times(n.numBlocks()).map(function(l){n.blocks=l;for(var y=0;y<l.length;y+=1)l[y].adopt(n,n.ends[1],0);return n})},c.createLeftOf=function(r){var n=this,l=n.replacedFragment;n.createBlocks(),d.createLeftOf.call(n,r),l&&(l.adopt(n.ends[f],0,0),l.jQ.appendTo(n.ends[f].jQ),n.placeCursor(r),n.prepareInsertionAt(r)),n.finalizeInsert(r.options),n.placeCursor(r)},c.createBlocks=function(){for(var r=this,n=r.numBlocks(),l=r.blocks=Array(n),y=0;y<n;y+=1)(l[y]=Me()).adopt(r,r.ends[1],0)},c.placeCursor=function(r){r.insAtRightEnd(this.foldChildren(this.ends[f],function(n,l){return n.isEmpty()?n:l}))},c.moveTowards=function(r,n,l){var y=l&&this[l+"Into"];n.insAtDirEnd(-r,y||this.ends[-r])},c.deleteTowards=function(r,n){this.isEmpty()?n[r]=this.remove()[r]:this.moveTowards(r,n,null)},c.selectTowards=function(r,n){n[-r]=this,n[r]=this[r]},c.selectChildren=function(){return ht(this,this)},c.unselectInto=function(r,n){n.insAtDirEnd(-r,n.anticursor.ancestors[this.id])},c.seek=function(r,n){function l(w){var A={};return A[f]=w.jQ.offset().left,A[1]=A[f]+w.jQ.outerWidth(),A}var y=this,v=l(y);if(r<v[f])return n.insLeftOf(y);if(r>v[1])return n.insRightOf(y);var k=v[f];y.eachChild(function(w){var A=l(w);return r<A[f]?(r-k<A[f]-r?w[f]?n.insAtRightEnd(w[f]):n.insLeftOf(y):n.insAtLeftEnd(w),!1):r>A[1]?void(w[1]?k=A[1]:v[1]-r<r-A[1]?n.insRightOf(y):n.insAtRightEnd(w)):(w.seek(r,n),!1)})},c.numBlocks=function(){var r=this.htmlTemplate.match(/&\d+/g);return r?r.length:0},c.html=function(){var r=this,n=r.blocks,l=" mathquill-command-id="+r.id,y=r.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);B("no unmatched angle brackets",y.join("")===this.htmlTemplate);for(var v=0,k=y[0];k;k=y[v+=1])if(k.slice(-2)==="/>")y[v]=k.slice(0,-2)+l+"/>";else if(k.charAt(0)==="<"){B("not an unmatched top-level close tag",k.charAt(1)!=="/"),y[v]=k.slice(0,-1)+l+">";var w=1;do B("no missing close tags",k=y[v+=1]),k.slice(0,2)==="</"?w-=1:k.charAt(0)==="<"&&k.slice(-2)!=="/>"&&(w+=1);while(w>0)}return y.join("").replace(/>&(\d+)/g,function(A,I){return" mathquill-block-id="+n[I].id+">"+n[I].join("html")})},c.latex=function(){return this.foldChildren(this.ctrlSeq,function(r,n){return r+"{"+(n.latex()||" ")+"}"})},c.textTemplate=[""],c.text=function(){var r=this,n=0;return r.foldChildren(r.textTemplate[n],function(l,y){n+=1;var v=y.text();return l&&r.textTemplate[n]==="("&&v[0]==="("&&v.slice(-1)===")"?l+v.slice(1,-1)+r.textTemplate[n]:l+v+(r.textTemplate[n]||"")})}}),ct=O(qe,function(c,d){c.init=function(r,n,l){l||(l=r&&r.length>1?r.slice(1):r),d.init.call(this,r,n,[l])},c.parser=function(){return Z.succeed(this)},c.numBlocks=function(){return 0},c.replaces=function(r){r.remove()},c.createBlocks=xe,c.moveTowards=function(r,n){n.jQ.insDirOf(r,this.jQ),n[-r]=this,n[r]=this[r]},c.deleteTowards=function(r,n){n[r]=this.remove()[r]},c.seek=function(r,n){r-this.jQ.offset().left<this.jQ.outerWidth()/2?n.insLeftOf(this):n.insRightOf(this)},c.latex=function(){return this.ctrlSeq},c.text=function(){return this.textTemplate},c.placeCursor=xe,c.isEmpty=function(){return!0}}),S=O(ct,function(c,d){c.init=function(r,n){d.init.call(this,r,"<span>"+(n||r)+"</span>")}}),ee=O(ct,function(c,d){c.init=function(r,n,l){d.init.call(this,r,'<span class="mq-binary-operator">'+n+"</span>",l)}}),Me=O(Er,function(c,d){c.join=function(r){return this.foldChildren("",function(n,l){return n+l[r]()})},c.html=function(){return this.join("html")},c.latex=function(){return this.join("latex")},c.text=function(){return this.ends[f]===this.ends[1]&&this.ends[f]!==0?this.ends[f].text():this.join("text")},c.keystroke=function(r,n,l){return!l.options.spaceBehavesLikeTab||r!=="Spacebar"&&r!=="Shift-Spacebar"?d.keystroke.apply(this,arguments):(n.preventDefault(),void l.escapeDir(r==="Shift-Spacebar"?f:1,r,n))},c.moveOutOf=function(r,n,l){l&&this.parent[l+"Into"]||!this[r]?n.insDirOf(r,this.parent):n.insAtDirEnd(-r,this[r])},c.selectOutOf=function(r,n){n.insDirOf(r,this.parent)},c.deleteOutOf=function(r,n){n.unwrapGramp()},c.seek=function(r,n){var l=this.ends[1];if(!l||l.jQ.offset().left+l.jQ.outerWidth()<r)return n.insAtRightEnd(this);if(r<this.ends[f].jQ.offset().left)return n.insAtLeftEnd(this);for(;r<l.jQ.offset().left;)l=l[f];return l.seek(r,n)},c.chToCmd=function(r,n){var l;return r.match(/^[a-eg-zA-Z]$/)?et(r):/^\d$/.test(r)?Pr(r):n&&n.typingSlashWritesDivisionSymbol&&r==="/"?s["÷"](r):n&&n.typingAsteriskWritesTimesSymbol&&r==="*"?s["×"](r):(l=we[r]||s[r])?l(r):S(r)},c.write=function(r,n){var l=this.chToCmd(n,r.options);r.selection&&l.replaces(r.replaceSelection()),r.isTooDeep()||l.createLeftOf(r.show())},c.focus=function(){return this.jQ.addClass("mq-hasCursor"),this.jQ.removeClass("mq-empty"),this},c.blur=function(){return this.jQ.removeClass("mq-hasCursor"),this.isEmpty()&&this.jQ.addClass("mq-empty"),this}});rt.p.mouseEvents=!0,Qe.StaticMath=function(c){return O(c.AbstractMathQuill,function(d,r){this.RootBlock=Me,d.__mathquillify=function(n,l){return this.config(n),r.__mathquillify.call(this,"mq-math-mode"),this.__options.mouseEvents&&(this.__controller.delegateMouseEvents(),this.__controller.staticMathTextareaEvents()),this},d.init=function(){r.init.apply(this,arguments),this.__controller.root.postOrder("registerInnerField",this.innerFields=[],c.MathField)},d.latex=function(){var n=r.latex.apply(this,arguments);return arguments.length>0&&this.__controller.root.postOrder("registerInnerField",this.innerFields=[],c.MathField),n}})};var X=O(Me,gr);Qe.MathField=function(c){return O(c.EditableField,function(d,r){this.RootBlock=X,d.__mathquillify=function(n,l){return this.config(n),l>1&&(this.__controller.root.reflow=xe),r.__mathquillify.call(this,"mq-editable-field mq-math-mode"),delete this.__controller.root.reflow,this}})};var Ve=O(be,function(c,d){function r(n){n.jQ[0].normalize();var l=n.jQ[0].firstChild;if(l){B("only node in TextBlock span is Text node",l.nodeType===3);var y=It(l.data);return y.jQadd(l),n.children().disown(),y.adopt(n,0,0)}}c.ctrlSeq="\\text",c.replaces=function(n){n instanceof a?this.replacedText=n.remove().jQ.text():typeof n=="string"&&(this.replacedText=n)},c.jQadd=function(n){d.jQadd.call(this,n),this.ends[f]&&this.ends[f].jQadd(this.jQ[0].firstChild)},c.createLeftOf=function(n){var l=this;if(d.createLeftOf.call(this,n),l[1].siblingCreated&&l[1].siblingCreated(n.options,f),l[f].siblingCreated&&l[f].siblingCreated(n.options,1),l.bubble("reflow"),n.insAtRightEnd(l),l.replacedText)for(var y=0;y<l.replacedText.length;y+=1)l.write(n,l.replacedText.charAt(y))},c.parser=function(){var n=this,l=Z.string,y=Z.regex;return Z.optWhitespace.then(l("{")).then(y(/^[^}]*/)).skip(l("}")).map(function(v){return v.length===0?a():(It(v).adopt(n,0,0),n)})},c.textContents=function(){return this.foldChildren("",function(n,l){return n+l.text})},c.text=function(){return'"'+this.textContents()+'"'},c.latex=function(){var n=this.textContents();return n.length===0?"":"\\text{"+n.replace(/\\/g,"\\backslash ").replace(/[{}]/g,"\\$&")+"}"},c.html=function(){return'<span class="mq-text-mode" mathquill-command-id='+this.id+">"+this.textContents()+"</span>"},c.moveTowards=function(n,l){l.insAtDirEnd(-n,this)},c.moveOutOf=function(n,l){l.insDirOf(n,this)},c.unselectInto=c.moveTowards,c.selectTowards=qe.prototype.selectTowards,c.deleteTowards=qe.prototype.deleteTowards,c.selectOutOf=function(n,l){l.insDirOf(n,this)},c.deleteOutOf=function(n,l){this.isEmpty()&&l.insRightOf(this)},c.write=function(n,l){if(n.show().deleteSelection(),l!=="$")n[f]?n[f].appendText(l):It(l).createLeftOf(n);else if(this.isEmpty())n.insRightOf(this),S("\\$","$").createLeftOf(n);else if(n[1])if(n[f]){var y=Ve(),v=this.ends[f];v.disown().jQ.detach(),v.adopt(y,0,0),n.insLeftOf(this),d.createLeftOf.call(y,n)}else n.insLeftOf(this);else n.insRightOf(this)},c.seek=function(n,l){l.hide();var y=r(this),v=this.jQ.width()/this.text.length,k=Math.round((n-this.jQ.offset().left)/v);k<=0?l.insAtLeftEnd(this):k>=y.text.length?l.insAtRightEnd(this):l.insLeftOf(y.splitRight(k));for(var w=n-l.show().offset().left,A=w&&w<0?f:1,I=A;l[A]&&w*I>0;)l[A].moveTowards(A,l),I=w,w=n-l.offset().left;if(A*w<-A*I&&l[-A].moveTowards(-A,l),l.anticursor){if(l.anticursor.parent===this){var U=l[f]&&l[f].text.length;if(this.anticursorPosition===U)l.anticursor=Pe.copy(l);else{if(this.anticursorPosition<U){var Y=l[f].splitRight(this.anticursorPosition);l[f]=Y}else Y=l[1].splitRight(this.anticursorPosition-U);l.anticursor=Pe(this,Y[f],Y)}}}else this.anticursorPosition=l[f]&&l[f].text.length},c.blur=function(n){Me.prototype.blur.call(this),n&&(this.textContents()===""?(this.remove(),n[f]===this?n[f]=this[f]:n[1]===this&&(n[1]=this[1])):r(this))},c.focus=Me.prototype.focus}),It=O(be,function(c,d){function r(n,l){return l.charAt(n===f?0:-1+l.length)}c.init=function(n){d.init.call(this),this.text=n},c.jQadd=function(n){this.dom=n,this.jQ=le(n)},c.jQize=function(){return this.jQadd(document.createTextNode(this.text))},c.appendText=function(n){this.text+=n,this.dom.appendData(n)},c.prependText=function(n){this.text=n+this.text,this.dom.insertData(0,n)},c.insTextAtDirEnd=function(n,l){$(l),l===1?this.appendText(n):this.prependText(n)},c.splitRight=function(n){var l=It(this.text.slice(n)).adopt(this.parent,this,this[1]);return l.jQadd(this.dom.splitText(n)),this.text=this.text.slice(0,n),l},c.moveTowards=function(n,l){$(n);var y=r(-n,this.text),v=this[-n];return v?v.insTextAtDirEnd(y,n):It(y).createDir(-n,l),this.deleteTowards(n,l)},c.latex=function(){return this.text},c.deleteTowards=function(n,l){this.text.length>1?n===1?(this.dom.deleteData(0,1),this.text=this.text.slice(1)):(this.dom.deleteData(-1+this.text.length,1),this.text=this.text.slice(0,-1)):(this.remove(),this.jQ.remove(),l[n]=this[n])},c.selectTowards=function(n,l){$(n);var y=l.anticursor,v=r(-n,this.text);if(y[n]===this){var k=It(v).createDir(n,l);y[n]=k,l.insDirOf(n,k)}else{var w=this[-n];w?w.insTextAtDirEnd(v,n):(k=It(v).createDir(-n,l)).jQ.insDirOf(-n,l.selection.jQ),this.text.length===1&&y[-n]===this&&(y[-n]=this[-n])}return this.deleteTowards(n,l)}});function Nt(c,d,r){return O(Ve,{ctrlSeq:c,htmlTemplate:"<"+d+" "+r+">&0</"+d+">"})}s.text=s.textnormal=s.textrm=s.textup=s.textmd=Ve,s.em=s.italic=s.italics=s.emph=s.textit=s.textsl=Nt("\\textit","i",'class="mq-text-mode"'),s.strong=s.bold=s.textbf=Nt("\\textbf","b",'class="mq-text-mode"'),s.sf=s.textsf=Nt("\\textsf","span",'class="mq-sans-serif mq-text-mode"'),s.tt=s.texttt=Nt("\\texttt","span",'class="mq-monospace mq-text-mode"'),s.textsc=Nt("\\textsc","span",'style="font-variant:small-caps" class="mq-text-mode"'),s.uppercase=Nt("\\uppercase","span",'style="text-transform:uppercase" class="mq-text-mode"'),s.lowercase=Nt("\\lowercase","span",'style="text-transform:lowercase" class="mq-text-mode"');var br=O(qe,function(c,d){c.init=function(r){d.init.call(this,"$"),this.cursor=r},c.htmlTemplate='<span class="mq-math-mode">&0</span>',c.createBlocks=function(){d.createBlocks.call(this),this.ends[f].cursor=this.cursor,this.ends[f].write=function(r,n){n!=="$"?Me.prototype.write.call(this,r,n):this.isEmpty()?(r.insRightOf(this.parent),this.parent.deleteTowards(dir,r),S("\\$","$").createLeftOf(r.show())):r[1]?r[f]?Me.prototype.write.call(this,r,n):r.insLeftOf(this.parent):r.insRightOf(this.parent)}},c.latex=function(){return"$"+this.ends[f].latex()+"$"}}),Lr=O(X,function(c,d){c.keystroke=function(r){if(r!=="Spacebar"&&r!=="Shift-Spacebar")return d.keystroke.apply(this,arguments)},c.write=function(r,n){var l;r.show().deleteSelection(),n==="$"?br(r).createLeftOf(r):(n==="<"?l="&lt;":n===">"&&(l="&gt;"),S(n,l).createLeftOf(r))}});Qe.TextField=function(c){return O(c.EditableField,function(d,r){this.RootBlock=Lr,d.__mathquillify=function(){return r.__mathquillify.call(this,"mq-editable-field mq-text-mode")},d.latex=function(n){return arguments.length>0?(this.__controller.renderLatexText(n),this.__controller.blurred&&this.__controller.cursor.hide().parent.blur(),this):this.__controller.exportLatex()}})},we["\\"]=O(qe,function(c,d){c.ctrlSeq="\\",c.replaces=function(r){this._replacedFragment=r.disown(),this.isEmpty=function(){return!1}},c.htmlTemplate='<span class="mq-latex-command-input mq-non-leaf">\\<span>&0</span></span>',c.textTemplate=["\\"],c.createBlocks=function(){d.createBlocks.call(this),this.ends[f].focus=function(){return this.parent.jQ.addClass("mq-hasCursor"),this.isEmpty()&&this.parent.jQ.removeClass("mq-empty"),this},this.ends[f].blur=function(){return this.parent.jQ.removeClass("mq-hasCursor"),this.isEmpty()&&this.parent.jQ.addClass("mq-empty"),this},this.ends[f].write=function(r,n){r.show().deleteSelection(),n.match(/[a-z]/i)?S(n).createLeftOf(r):(this.parent.renderCommand(r),n==="\\"&&this.isEmpty()||r.parent.write(r,n))},this.ends[f].keystroke=function(r,n,l){return r==="Tab"||r==="Enter"||r==="Spacebar"?(this.parent.renderCommand(l.cursor),void n.preventDefault()):d.keystroke.apply(this,arguments)}},c.createLeftOf=function(r){if(d.createLeftOf.call(this,r),this._replacedFragment){var n=this.jQ[0];this.jQ=this._replacedFragment.jQ.addClass("mq-blur").bind("mousedown mousemove",function(l){return le(l.target=n).trigger(l),!1}).insertBefore(this.jQ).add(this.jQ)}},c.latex=function(){return"\\"+this.ends[f].latex()+" "},c.renderCommand=function(r){this.jQ=this.jQ.last(),this.remove(),this[1]?r.insLeftOf(this[1]):r.insAtRightEnd(this.parent);var n=this.ends[f].latex();n||(n=" ");var l=s[n];l?(l=l(n),this._replacedFragment&&l.replaces(this._replacedFragment),l.createLeftOf(r)):((l=Ve()).replaces(n),l.createLeftOf(r),r.insRightOf(l),this._replacedFragment&&this._replacedFragment.remove())}});var jt,ft,Dt=xe,Ft=document.createElement("div").style;for(var Or in{transform:1,WebkitTransform:1,MozTransform:1,OTransform:1,msTransform:1})if(Or in Ft){ft=Or;break}ft?jt=function(c,d,r){c.css(ft,"scale("+d+","+r+")")}:"filter"in Ft?(Dt=function(c){c.className=c.className},jt=function(c,d,r){d/=1+(r-1)/2,c.css("fontSize",r+"em"),c.hasClass("mq-matrixed-container")||c.addClass("mq-matrixed-container").wrapInner('<span class="mq-matrixed"></span>');var n=c.children().css("filter","progid:DXImageTransform.Microsoft.Matrix(M11="+d+",SizingMethod='auto expand')");function l(){c.css("marginRight",(n.width()-1)*(d-1)/d+"px")}l();var y=setInterval(l);le(window).load(function(){clearTimeout(y),l()})}):jt=function(c,d,r){c.css("fontSize",r+"em")};var it=O(qe,function(c,d){c.init=function(r,n,l){d.init.call(this,r,"<"+n+" "+l+">&0</"+n+">")}});s.mathrm=g(it,"\\mathrm","span",'class="mq-roman mq-font"'),s.mathit=g(it,"\\mathit","i",'class="mq-font"'),s.mathbf=g(it,"\\mathbf","b",'class="mq-font"'),s.mathsf=g(it,"\\mathsf","span",'class="mq-sans-serif mq-font"'),s.mathtt=g(it,"\\mathtt","span",'class="mq-monospace mq-font"'),s.underline=g(it,"\\underline","span",'class="mq-non-leaf mq-underline"'),s.overline=s.bar=g(it,"\\overline","span",'class="mq-non-leaf mq-overline"'),s.overrightarrow=g(it,"\\overrightarrow","span",'class="mq-non-leaf mq-overarrow mq-arrow-right"'),s.overleftarrow=g(it,"\\overleftarrow","span",'class="mq-non-leaf mq-overarrow mq-arrow-left"'),s.overleftrightarrow=g(it,"\\overleftrightarrow","span",'class="mq-non-leaf mq-overarrow mq-arrow-both"'),s.overarc=g(it,"\\overarc","span",'class="mq-non-leaf mq-overarc"'),s.dot=O(qe,function(c,d){c.init=function(){d.init.call(this,"\\dot",'<span class="mq-non-leaf"><span class="mq-dot-recurring-inner"><span class="mq-dot-recurring">&#x2d9;</span><span class="mq-empty-box">&0</span></span></span>')}}),s.textcolor=O(qe,function(c,d){c.setColor=function(r){this.color=r,this.htmlTemplate='<span class="mq-textcolor" style="color:'+r+'">&0</span>'},c.latex=function(){return"\\textcolor{"+this.color+"}{"+this.blocks[0].latex()+"}"},c.parser=function(){var r=this,n=Z.optWhitespace,l=Z.string,y=Z.regex;return n.then(l("{")).then(y(/^[#\w\s.,()%-]*/)).skip(l("}")).then(function(v){return r.setColor(v),d.parser.call(r)})},c.isStyleBlock=function(){return!0}}),s.class=O(qe,function(c,d){c.parser=function(){var r=this,n=Z.string,l=Z.regex;return Z.optWhitespace.then(n("{")).then(l(/^[-\w\s\\\xA0-\xFF]*/)).skip(n("}")).then(function(y){return r.cls=y||"",r.htmlTemplate='<span class="mq-class '+y+'">&0</span>',d.parser.call(r)})},c.latex=function(){return"\\class{"+this.cls+"}{"+this.blocks[0].latex()+"}"},c.isStyleBlock=function(){return!0}});var St=O(qe,function(c,d){c.ctrlSeq="_{...}^{...}",c.createLeftOf=function(r){if(this.replacedFragment||r[f]||!r.options.supSubsRequireOperand)return d.createLeftOf.apply(this,arguments)},c.contactWeld=function(r){for(var n=f;n;n=n===f&&1)if(this[n]instanceof St){for(var l="sub";l;l=l==="sub"&&"sup"){var y=this[l],v=this[n][l];if(y){if(v)if(y.isEmpty())w=Pe(v,0,v.ends[f]);else{y.jQ.children().insAtDirEnd(-n,v.jQ);var k=y.children().disown(),w=Pe(v,k.ends[1],v.ends[f]);n===f?k.adopt(v,v.ends[1],0):k.adopt(v,0,v.ends[f])}else this[n].addBlock(y.disown());this.placeCursor=function(A,I){return function(U){U.insAtDirEnd(-n,A||I)}}(v,y)}}this.remove(),r&&r[f]===this&&(n===1&&w?w[f]?r.insRightOf(w[f]):r.insAtLeftEnd(w.parent):r.insRightOf(this[n]));break}},rt.p.charsThatBreakOutOfSupSub="",c.finalizeTree=function(){this.ends[f].write=function(r,n){if(r.options.autoSubscriptNumerals&&this===this.parent.sub){if(n==="_")return;var l=this.chToCmd(n,r.options);return l instanceof ct?r.deleteSelection():r.clearSelection().insRightOf(this.parent),l.createLeftOf(r.show())}r[f]&&!r[1]&&!r.selection&&r.options.charsThatBreakOutOfSupSub.indexOf(n)>-1&&r.insRightOf(this.parent),Me.p.write.apply(this,arguments)}},c.moveTowards=function(r,n,l){n.options.autoSubscriptNumerals&&!this.sup?n.insDirOf(r,this):d.moveTowards.apply(this,arguments)},c.deleteTowards=function(r,n){if(n.options.autoSubscriptNumerals&&this.sub){var l=this.sub.ends[-r];l instanceof ct?l.remove():l&&l.deleteTowards(r,n.insAtDirEnd(-r,this.sub)),this.sub.isEmpty()&&(this.sub.deleteOutOf(f,n.insAtLeftEnd(this.sub)),this.sup&&n.insDirOf(-r,this))}else d.deleteTowards.apply(this,arguments)},c.latex=function(){function r(n,l){var y=l&&l.latex();return l?n+(y.length===1?y:"{"+(y||" ")+"}"):""}return r("_",this.sub)+r("^",this.sup)},c.addBlock=function(r){this.supsub==="sub"?(this.sup=this.upInto=this.sub.upOutOf=r,r.adopt(this,this.sub,0).downOutOf=this.sub,r.jQ=le('<span class="mq-sup"/>').append(r.jQ.children()).attr(me,r.id).prependTo(this.jQ)):(this.sub=this.downInto=this.sup.downOutOf=r,r.adopt(this,0,this.sup).upOutOf=this.sup,r.jQ=le('<span class="mq-sub"></span>').append(r.jQ.children()).attr(me,r.id).appendTo(this.jQ.removeClass("mq-sup-only")),this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>'));for(var n=0;n<2;n+=1)(function(l,y,v,k){l[y].deleteOutOf=function(w,A){if(A.insDirOf(this[w]?-w:w,this.parent),!this.isEmpty()){var I=this.ends[w];this.children().disown().withDirAdopt(w,A.parent,A[w],A[-w]).jQ.insDirOf(-w,A.jQ),A[-w]=I}l.supsub=v,delete l[y],delete l[k+"Into"],l[v][k+"OutOf"]=ar,delete l[v].deleteOutOf,y==="sub"&&le(l.jQ.addClass("mq-sup-only")[0].lastChild).remove(),this.remove()}})(this,"sub sup".split(" ")[n],"sup sub".split(" ")[n],"down up".split(" ")[n])},c.reflow=function(){var r=this.jQ,n=r.prev();if(n.length){var l=r.children(".mq-sup");if(l.length){var y=parseInt(l.css("font-size")),v=l.offset().top+l.height()-n.offset().top-.7*y,k=parseInt(l.css("margin-bottom"));l.css("margin-bottom",k+v)}}}});function ar(c){var d=this.parent,r=c;do{if(r[1])return c.insLeftOf(d);r=r.parent.parent}while(r!==d);c.insRightOf(d)}s.subscript=s._=O(St,function(c,d){c.supsub="sub",c.htmlTemplate='<span class="mq-supsub mq-non-leaf"><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203;</span></span>',c.textTemplate=["_"],c.finalizeTree=function(){this.downInto=this.sub=this.ends[f],this.sub.upOutOf=ar,d.finalizeTree.call(this)}}),s.superscript=s.supscript=s["^"]=O(St,function(c,d){c.supsub="sup",c.htmlTemplate='<span class="mq-supsub mq-non-leaf mq-sup-only"><span class="mq-sup">&0</span></span>',c.textTemplate=["^"],c.finalizeTree=function(){this.upInto=this.sup=this.ends[1],this.sup.downOutOf=ar,d.finalizeTree.call(this)}});var Bt=O(qe,function(c,d){c.init=function(r,n){var l='<span class="mq-large-operator mq-non-leaf"><span class="mq-to"><span>&1</span></span><big>'+n+'</big><span class="mq-from"><span>&0</span></span></span>';ct.prototype.init.call(this,r,l)},c.createLeftOf=function(r){d.createLeftOf.apply(this,arguments),r.options.sumStartsWithNEquals&&(et("n").createLeftOf(r),Wt().createLeftOf(r))},c.latex=function(){function r(n){return n.length===1?n:"{"+(n||" ")+"}"}return this.ctrlSeq+"_"+r(this.ends[f].latex())+"^"+r(this.ends[1].latex())},c.parser=function(){for(var r=Z.string,n=Z.optWhitespace,l=Z.succeed,y=Re.block,v=this,k=v.blocks=[Me(),Me()],w=0;w<k.length;w+=1)k[w].adopt(v,v.ends[1],0);return n.then(r("_").or(r("^"))).then(function(A){var I=k[A==="_"?0:1];return y.then(function(U){return U.children().adopt(I,I.ends[1],0),l(v)})}).many().result(v)},c.finalizeTree=function(){this.downInto=this.ends[f],this.upInto=this.ends[1],this.ends[f].upOutOf=this.ends[1],this.ends[1].downOutOf=this.ends[f]}});s["∑"]=s.sum=s.summation=g(Bt,"\\sum ","&sum;"),s["∏"]=s.prod=s.product=g(Bt,"\\prod ","&prod;"),s.coprod=s.coproduct=g(Bt,"\\coprod ","&#8720;"),s["∫"]=s.int=s.integral=O(Bt,function(c,d){c.init=function(){ct.prototype.init.call(this,"\\int ",'<span class="mq-int mq-non-leaf"><big>&int;</big><span class="mq-supsub mq-non-leaf"><span class="mq-sup"><span class="mq-sup-inner">&1</span></span><span class="mq-sub">&0</span><span style="display:inline-block;width:0">&#8203</span></span></span>')},c.createLeftOf=qe.p.createLeftOf});var Xt=s.frac=s.dfrac=s.cfrac=s.fraction=O(qe,function(c,d){c.ctrlSeq="\\frac",c.htmlTemplate='<span class="mq-fraction mq-non-leaf"><span class="mq-numerator">&0</span><span class="mq-denominator">&1</span><span style="display:inline-block;width:0">&#8203;</span></span>',c.textTemplate=["(",")/(",")"],c.finalizeTree=function(){this.upInto=this.ends[1].upOutOf=this.ends[f],this.downInto=this.ends[f].downOutOf=this.ends[1]}}),Ht=s.over=we["/"]=O(Xt,function(c,d){c.createLeftOf=function(r){if(!this.replacedFragment){for(var n=r[f];n&&!(n instanceof ee||n instanceof(s.text||xe)||n instanceof Bt||n.ctrlSeq==="\\ "||/^[,;:]$/.test(n.ctrlSeq));)n=n[f];n instanceof Bt&&n[1]instanceof St&&(n=n[1])[1]instanceof St&&n[1].ctrlSeq!=n.ctrlSeq&&(n=n[1]),n===r[f]||r.isTooDeep(1)||(this.replaces(a(n[1]||r.parent.ends[f],r[f])),r[f]=n)}d.createLeftOf.call(this,r)}}),sr=s.sqrt=s["√"]=O(qe,function(c,d){c.ctrlSeq="\\sqrt",c.htmlTemplate='<span class="mq-non-leaf"><span class="mq-scaled mq-sqrt-prefix">&radic;</span><span class="mq-non-leaf mq-sqrt-stem">&0</span></span>',c.textTemplate=["sqrt(",")"],c.parser=function(){return Re.optBlock.then(function(r){return Re.block.map(function(n){var l=Kt();return l.blocks=[r,n],r.adopt(l,0,0),n.adopt(l,r,0),l})}).or(d.parser.call(this))},c.reflow=function(){var r=this.ends[1].jQ;jt(r.prev(),1,r.innerHeight()/+r.css("fontSize").slice(0,-2)-.1)}}),Kt=(s.hat=O(qe,function(c,d){c.ctrlSeq="\\hat",c.htmlTemplate='<span class="mq-non-leaf"><span class="mq-hat-prefix">^</span><span class="mq-hat-stem">&0</span></span>',c.textTemplate=["hat(",")"]}),s.nthroot=O(sr,function(c,d){c.htmlTemplate='<sup class="mq-nthroot mq-non-leaf">&0</sup><span class="mq-scaled"><span class="mq-sqrt-prefix mq-scaled">&radic;</span><span class="mq-sqrt-stem mq-non-leaf">&1</span></span>',c.textTemplate=["sqrt[","](",")"],c.latex=function(){return"\\sqrt["+this.ends[f].latex()+"]{"+this.ends[1].latex()+"}"}})),vr=O(qe,function(c,d){c.init=function(r,n,l){var y='<span class="mq-non-leaf"><span class="mq-diacritic-above">'+n+'</span><span class="mq-diacritic-stem">&0</span></span>';d.init.call(this,r,y,l)}});function xr(c,d){c.jQadd=function(){d.jQadd.apply(this,arguments),this.delimjQs=this.jQ.children(":first").add(this.jQ.children(":last")),this.contentjQ=this.jQ.children(":eq(1)")},c.reflow=function(){var r=this.contentjQ.outerHeight()/parseFloat(this.contentjQ.css("fontSize"));jt(this.delimjQs,tt(1+.2*(r-1),1.2),1.2*r)}}s.vec=g(vr,"\\vec","&rarr;",["vec(",")"]),s.tilde=g(vr,"\\tilde","~",["tilde(",")"]);var je=O(O(qe,xr),function(c,d){c.init=function(r,n,l,y,v){d.init.call(this,"\\left"+y,ce,[n,l]),this.side=r,this.sides={},this.sides[f]={ch:n,ctrlSeq:y},this.sides[1]={ch:l,ctrlSeq:v}},c.numBlocks=function(){return 1},c.html=function(){return this.htmlTemplate='<span class="mq-non-leaf"><span class="mq-scaled mq-paren'+(this.side===1?" mq-ghost":"")+'">'+this.sides[f].ch+'</span><span class="mq-non-leaf">&0</span><span class="mq-scaled mq-paren'+(this.side===f?" mq-ghost":"")+'">'+this.sides[1].ch+"</span></span>",d.html.call(this)},c.latex=function(){return"\\left"+this.sides[f].ctrlSeq+this.ends[f].latex()+"\\right"+this.sides[1].ctrlSeq},c.matchBrack=function(r,n,l){return l instanceof je&&l.side&&l.side!==-n&&(!r.restrictMismatchedBrackets||Ne[this.sides[this.side].ch]===l.sides[l.side].ch||{"(":"]","[":")"}[this.sides[f].ch]===l.sides[1].ch)&&l},c.closeOpposing=function(r){r.side=0,r.sides[this.side]=this.sides[this.side],r.delimjQs.eq(this.side===f?0:1).removeClass("mq-ghost").html(this.sides[this.side].ch)},c.createLeftOf=function(r){if(!this.replacedFragment){var n=r.options;if(this.sides[f].ch==="|")var l=this.matchBrack(n,1,r[1])||this.matchBrack(n,f,r[f])||this.matchBrack(n,0,r.parent.parent);else l=this.matchBrack(n,-this.side,r[-this.side])||this.matchBrack(n,-this.side,r.parent.parent)}if(l){var y=this.side=-l.side;this.closeOpposing(l),l===r.parent.parent&&r[y]&&a(r[y],r.parent.ends[y],-y).disown().withDirAdopt(-y,l.parent,l,l[y]).jQ.insDirOf(y,l.jQ),l.bubble("reflow")}else y=(l=this).side,l.replacedFragment?l.side=0:r[-y]&&(l.replaces(a(r[-y],r.parent.ends[-y],y)),r[-y]=0),d.createLeftOf.call(l,r);y===f?r.insAtLeftEnd(l.ends[f]):r.insRightOf(l)},c.placeCursor=xe,c.unwrap=function(){this.ends[f].children().disown().adopt(this.parent,this,this[1]).jQ.insertAfter(this.jQ),this.remove()},c.deleteSide=function(r,n,l){var y=this.parent,v=this[r],k=y.ends[r];if(r===this.side)return this.unwrap(),void(v?l.insDirOf(-r,v):l.insAtDirEnd(r,y));var w=l.options,A=!this.side;if(this.side=-r,this.matchBrack(w,r,this.ends[f].ends[this.side])){this.closeOpposing(this.ends[f].ends[this.side]);var I=this.ends[f].ends[r];this.unwrap(),I.siblingCreated&&I.siblingCreated(l.options,r),v?l.insDirOf(-r,v):l.insAtDirEnd(r,y)}else{if(this.matchBrack(w,r,this.parent.parent))this.parent.parent.closeOpposing(this),this.parent.parent.unwrap();else{if(n&&A)return this.unwrap(),void(v?l.insDirOf(-r,v):l.insAtDirEnd(r,y));this.sides[r]={ch:Ne[this.sides[this.side].ch],ctrlSeq:Ne[this.sides[this.side].ctrlSeq]},this.delimjQs.removeClass("mq-ghost").eq(r===f?0:1).addClass("mq-ghost").html(this.sides[r].ch)}v?(I=this.ends[f].ends[r],a(v,k,-r).disown().withDirAdopt(-r,this.ends[f],I,0).jQ.insAtDirEnd(r,this.ends[f].jQ.removeClass("mq-empty")),I.siblingCreated&&I.siblingCreated(l.options,r),l.insDirOf(-r,v)):n?l.insDirOf(r,this):l.insAtDirEnd(r,this.ends[f])}},c.deleteTowards=function(r,n){this.deleteSide(-r,!1,n)},c.finalizeTree=function(){this.ends[f].deleteOutOf=function(r,n){this.parent.deleteSide(r,!0,n)},this.finalizeTree=this.intentionalBlur=function(){this.delimjQs.eq(this.side===f?1:0).removeClass("mq-ghost"),this.side=0}},c.siblingCreated=function(r,n){n===-this.side&&this.finalizeTree()}}),Ne={"(":")",")":"(","[":"]","]":"[","{":"}","}":"{","\\{":"\\}","\\}":"\\{","&lang;":"&rang;","&rang;":"&lang;","\\langle ":"\\rangle ","\\rangle ":"\\langle ","|":"|","\\lVert ":"\\rVert ","\\rVert ":"\\lVert "};function Gt(c,d){d=d||c;var r=Ne[c],n=Ne[d];we[c]=g(je,f,c,r,d,n),we[r]=g(je,1,c,r,d,n)}Gt("("),Gt("["),Gt("{","\\{"),s.langle=g(je,f,"&lang;","&rang;","\\langle ","\\rangle "),s.rangle=g(je,1,"&lang;","&rang;","\\langle ","\\rangle "),we["|"]=g(je,f,"|","|","|","|"),s.lVert=g(je,f,"&#8741;","&#8741;","\\lVert ","\\rVert "),s.rVert=g(je,1,"&#8741;","&#8741;","\\lVert ","\\rVert "),s.left=O(qe,function(c){c.parser=function(){var d=Z.regex,r=Z.string,n=(Z.succeed,Z.optWhitespace);return n.then(d(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z]))/)).then(function(l){var y=l.charAt(0)==="\\"?l.slice(1):l;return l=="\\langle"&&(y="&lang;",l+=" "),l=="\\lVert"&&(y="&#8741;",l+=" "),Re.then(function(v){return r("\\right").skip(n).then(d(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z]))/)).map(function(k){var w=k.charAt(0)==="\\"?k.slice(1):k;k=="\\rangle"&&(w="&rang;",k+=" "),k=="\\rVert"&&(w="&#8741;",k+=" ");var A=je(0,y,w,l,k);return A.blocks=[v],v.adopt(A,0,0),A})})})}}),s.right=O(qe,function(c){c.parser=function(){return Z.fail("unmatched \\right")}});var Xr=s.binom=s.binomial=O(O(qe,xr),function(c,d){c.ctrlSeq="\\binom",c.htmlTemplate='<span class="mq-non-leaf"><span class="mq-paren mq-scaled">(</span><span class="mq-non-leaf"><span class="mq-array mq-non-leaf"><span>&0</span><span>&1</span></span></span><span class="mq-paren mq-scaled">)</span></span>',c.textTemplate=["choose(",",",")"]});s.choose=O(Xr,function(c){c.createLeftOf=Ht.prototype.createLeftOf}),s.editable=s.MathQuillMathField=O(qe,function(c,d){c.ctrlSeq="\\MathQuillMathField",c.htmlTemplate='<span class="mq-editable-field"><span class="mq-root-block">&0</span></span>',c.parser=function(){var r=this,n=Z.string,l=Z.regex,y=Z.succeed;return n("[").then(l(/^[a-z][a-z0-9]*/i)).skip(n("]")).map(function(v){r.name=v}).or(y()).then(d.parser.call(r))},c.finalizeTree=function(r){var n=Ie(this.ends[f],this.jQ,r);n.KIND_OF_MQ="MathField",n.editable=!0,n.createTextarea(),n.editablesTextareaEvents(),n.cursor.insAtRightEnd(n.root),gr(n.root)},c.registerInnerField=function(r,n){r.push(r[this.name]=n(this.ends[f].controller))},c.latex=function(){return this.ends[f].latex()},c.text=function(){return this.ends[f].text()}});var Ar=s.embed=O(ct,function(c,d){c.setOptions=function(r){function n(){return""}return this.text=r.text||n,this.htmlTemplate=r.htmlString||"",this.latex=r.latex||n,this},c.parser=function(){var r=this,n=Z.string,l=Z.regex,y=Z.succeed;return n("{").then(l(/^[a-z][a-z0-9]*/i)).skip(n("}")).then(function(v){return n("[").then(l(/^[-\w\s]*/)).skip(n("]")).or(y()).map(function(k){return r.setOptions(Mt[v](k))})})}});s.notin=s.cong=s.equiv=s.oplus=s.otimes=O(ee,function(c,d){c.init=function(r){d.init.call(this,"\\"+r+" ","&"+r+";")}}),s["≠"]=s.ne=s.neq=g(ee,"\\ne ","&ne;"),s["∗"]=s.ast=s.star=s.loast=s.lowast=g(ee,"\\ast ","&lowast;"),s.therefor=s.therefore=g(ee,"\\therefore ","&there4;"),s.cuz=s.because=g(ee,"\\because ","&#8757;"),s.prop=s.propto=g(ee,"\\propto ","&prop;"),s["≈"]=s.asymp=s.approx=g(ee,"\\approx ","&asymp;"),s.isin=s.in=g(ee,"\\in ","&isin;"),s.ni=s.contains=g(ee,"\\ni ","&ni;"),s.notni=s.niton=s.notcontains=s.doesnotcontain=g(ee,"\\not\\ni ","&#8716;"),s.sub=s.subset=g(ee,"\\subset ","&sub;"),s.sup=s.supset=s.superset=g(ee,"\\supset ","&sup;"),s.nsub=s.notsub=s.nsubset=s.notsubset=g(ee,"\\not\\subset ","&#8836;"),s.nsup=s.notsup=s.nsupset=s.notsupset=s.nsuperset=s.notsuperset=g(ee,"\\not\\supset ","&#8837;"),s.sube=s.subeq=s.subsete=s.subseteq=g(ee,"\\subseteq ","&sube;"),s.supe=s.supeq=s.supsete=s.supseteq=s.supersete=s.superseteq=g(ee,"\\supseteq ","&supe;"),s.nsube=s.nsubeq=s.notsube=s.notsubeq=s.nsubsete=s.nsubseteq=s.notsubsete=s.notsubseteq=g(ee,"\\not\\subseteq ","&#8840;"),s.nsupe=s.nsupeq=s.notsupe=s.notsupeq=s.nsupsete=s.nsupseteq=s.notsupsete=s.notsupseteq=s.nsupersete=s.nsuperseteq=s.notsupersete=s.notsuperseteq=g(ee,"\\not\\supseteq ","&#8841;"),s.N=s.naturals=s.Naturals=g(S,"\\mathbb{N}","&#8469;"),s.P=s.primes=s.Primes=s.projective=s.Projective=s.probability=s.Probability=g(S,"\\mathbb{P}","&#8473;"),s.Z=s.integers=s.Integers=g(S,"\\mathbb{Z}","&#8484;"),s.Q=s.rationals=s.Rationals=g(S,"\\mathbb{Q}","&#8474;"),s.R=s.reals=s.Reals=g(S,"\\mathbb{R}","&#8477;"),s.C=s.complex=s.Complex=s.complexes=s.Complexes=s.complexplane=s.Complexplane=s.ComplexPlane=g(S,"\\mathbb{C}","&#8450;"),s.H=s.Hamiltonian=s.quaternions=s.Quaternions=g(S,"\\mathbb{H}","&#8461;"),s.quad=s.emsp=g(S,"\\quad ","    "),s.qquad=g(S,"\\qquad ","        "),s.diamond=g(S,"\\diamond ","&#9671;"),s.bigtriangleup=g(S,"\\bigtriangleup ","&#9651;"),s.ominus=g(S,"\\ominus ","&#8854;"),s.uplus=g(S,"\\uplus ","&#8846;"),s.bigtriangledown=g(S,"\\bigtriangledown ","&#9661;"),s.sqcap=g(S,"\\sqcap ","&#8851;"),s.triangleleft=g(S,"\\triangleleft ","&#8882;"),s.sqcup=g(S,"\\sqcup ","&#8852;"),s.triangleright=g(S,"\\triangleright ","&#8883;"),s.odot=s.circledot=g(S,"\\odot ","&#8857;"),s.bigcirc=g(S,"\\bigcirc ","&#9711;"),s.dagger=g(S,"\\dagger ","&#0134;"),s.ddagger=g(S,"\\ddagger ","&#135;"),s.wr=g(S,"\\wr ","&#8768;"),s.amalg=g(S,"\\amalg ","&#8720;"),s.models=g(S,"\\models ","&#8872;"),s.prec=g(S,"\\prec ","&#8826;"),s.succ=g(S,"\\succ ","&#8827;"),s.preceq=g(S,"\\preceq ","&#8828;"),s.succeq=g(S,"\\succeq ","&#8829;"),s.simeq=g(S,"\\simeq ","&#8771;"),s.mid=g(S,"\\mid ","&#8739;"),s.ll=g(S,"\\ll ","&#8810;"),s.gg=g(S,"\\gg ","&#8811;"),s.parallel=g(S,"\\parallel ","&#8741;"),s.nparallel=g(S,"\\nparallel ","&#8742;"),s.bowtie=g(S,"\\bowtie ","&#8904;"),s.sqsubset=g(S,"\\sqsubset ","&#8847;"),s.sqsupset=g(S,"\\sqsupset ","&#8848;"),s.smile=g(S,"\\smile ","&#8995;"),s.sqsubseteq=g(S,"\\sqsubseteq ","&#8849;"),s.sqsupseteq=g(S,"\\sqsupseteq ","&#8850;"),s.doteq=g(S,"\\doteq ","&#8784;"),s.frown=g(S,"\\frown ","&#8994;"),s.vdash=g(S,"\\vdash ","&#8870;"),s.dashv=g(S,"\\dashv ","&#8867;"),s.nless=g(S,"\\nless ","&#8814;"),s.ngtr=g(S,"\\ngtr ","&#8815;"),s.longleftarrow=g(S,"\\longleftarrow ","&#8592;"),s.longrightarrow=g(S,"\\longrightarrow ","&#8594;"),s.Longleftarrow=g(S,"\\Longleftarrow ","&#8656;"),s.Longrightarrow=g(S,"\\Longrightarrow ","&#8658;"),s.longleftrightarrow=g(S,"\\longleftrightarrow ","&#8596;"),s.updownarrow=g(S,"\\updownarrow ","&#8597;"),s.Longleftrightarrow=g(S,"\\Longleftrightarrow ","&#8660;"),s.Updownarrow=g(S,"\\Updownarrow ","&#8661;"),s.mapsto=g(S,"\\mapsto ","&#8614;"),s.nearrow=g(S,"\\nearrow ","&#8599;"),s.hookleftarrow=g(S,"\\hookleftarrow ","&#8617;"),s.hookrightarrow=g(S,"\\hookrightarrow ","&#8618;"),s.searrow=g(S,"\\searrow ","&#8600;"),s.leftharpoonup=g(S,"\\leftharpoonup ","&#8636;"),s.rightharpoonup=g(S,"\\rightharpoonup ","&#8640;"),s.swarrow=g(S,"\\swarrow ","&#8601;"),s.leftharpoondown=g(S,"\\leftharpoondown ","&#8637;"),s.rightharpoondown=g(S,"\\rightharpoondown ","&#8641;"),s.nwarrow=g(S,"\\nwarrow ","&#8598;"),s.ldots=g(S,"\\ldots ","&#8230;"),s.cdots=g(S,"\\cdots ","&#8943;"),s.vdots=g(S,"\\vdots ","&#8942;"),s.ddots=g(S,"\\ddots ","&#8945;"),s.surd=g(S,"\\surd ","&#8730;"),s.triangle=g(S,"\\triangle ","&#9651;"),s.ell=g(S,"\\ell ","&#8467;"),s.top=g(S,"\\top ","&#8868;"),s.flat=g(S,"\\flat ","&#9837;"),s.natural=g(S,"\\natural ","&#9838;"),s.sharp=g(S,"\\sharp ","&#9839;"),s.wp=g(S,"\\wp ","&#8472;"),s.bot=g(S,"\\bot ","&#8869;"),s.clubsuit=g(S,"\\clubsuit ","&#9827;"),s.diamondsuit=g(S,"\\diamondsuit ","&#9826;"),s.heartsuit=g(S,"\\heartsuit ","&#9825;"),s.spadesuit=g(S,"\\spadesuit ","&#9824;"),s.parallelogram=g(S,"\\parallelogram ","&#9649;"),s.square=g(S,"\\square ","&#11036;"),s.oint=g(S,"\\oint ","&#8750;"),s.bigcap=g(S,"\\bigcap ","&#8745;"),s.bigcup=g(S,"\\bigcup ","&#8746;"),s.bigsqcup=g(S,"\\bigsqcup ","&#8852;"),s.bigvee=g(S,"\\bigvee ","&#8744;"),s.bigwedge=g(S,"\\bigwedge ","&#8743;"),s.bigodot=g(S,"\\bigodot ","&#8857;"),s.bigotimes=g(S,"\\bigotimes ","&#8855;"),s.bigoplus=g(S,"\\bigoplus ","&#8853;"),s.biguplus=g(S,"\\biguplus ","&#8846;"),s.lfloor=g(S,"\\lfloor ","&#8970;"),s.rfloor=g(S,"\\rfloor ","&#8971;"),s.lceil=g(S,"\\lceil ","&#8968;"),s.rceil=g(S,"\\rceil ","&#8969;"),s.opencurlybrace=s.lbrace=g(S,"\\lbrace ","{"),s.closecurlybrace=s.rbrace=g(S,"\\rbrace ","}"),s.lbrack=g(S,"["),s.rbrack=g(S,"]"),s.slash=g(S,"/"),s.vert=g(S,"|"),s.perp=s.perpendicular=g(S,"\\perp ","&perp;"),s.nabla=s.del=g(S,"\\nabla ","&nabla;"),s.hbar=g(S,"\\hbar ","&#8463;"),s.AA=s.Angstrom=s.angstrom=g(S,"\\text\\AA ","&#8491;"),s.ring=s.circ=s.circle=g(S,"\\circ ","&#8728;"),s.bull=s.bullet=g(S,"\\bullet ","&bull;"),s.setminus=s.smallsetminus=g(S,"\\setminus ","&#8726;"),s.not=s["¬"]=s.neg=g(S,"\\neg ","&not;"),s["…"]=s.dots=s.ellip=s.hellip=s.ellipsis=s.hellipsis=g(S,"\\dots ","&hellip;"),s.converges=s.darr=s.dnarr=s.dnarrow=s.downarrow=g(S,"\\downarrow ","&darr;"),s.dArr=s.dnArr=s.dnArrow=s.Downarrow=g(S,"\\Downarrow ","&dArr;"),s.diverges=s.uarr=s.uparrow=g(S,"\\uparrow ","&uarr;"),s.uArr=s.Uparrow=g(S,"\\Uparrow ","&uArr;"),s.to=g(ee,"\\to ","&rarr;"),s.rarr=s.rightarrow=g(S,"\\rightarrow ","&rarr;"),s.implies=g(ee,"\\Rightarrow ","&rArr;"),s.rArr=s.Rightarrow=g(S,"\\Rightarrow ","&rArr;"),s.gets=g(ee,"\\gets ","&larr;"),s.larr=s.leftarrow=g(S,"\\leftarrow ","&larr;"),s.impliedby=g(ee,"\\Leftarrow ","&lArr;"),s.lArr=s.Leftarrow=g(S,"\\Leftarrow ","&lArr;"),s.harr=s.lrarr=s.leftrightarrow=g(S,"\\leftrightarrow ","&harr;"),s.iff=g(ee,"\\Leftrightarrow ","&hArr;"),s.hArr=s.lrArr=s.Leftrightarrow=g(S,"\\Leftrightarrow ","&hArr;"),s.Re=s.Real=s.real=g(S,"\\Re ","&real;"),s.Im=s.imag=s.image=s.imagin=s.imaginary=s.Imaginary=g(S,"\\Im ","&image;"),s.part=s.partial=g(S,"\\partial ","&part;"),s.infty=s.infin=s.infinity=g(S,"\\infty ","&infin;"),s.pounds=g(S,"\\pounds ","&pound;"),s.alef=s.alefsym=s.aleph=s.alephsym=g(S,"\\aleph ","&alefsym;"),s.xist=s.xists=s.exist=s.exists=g(S,"\\exists ","&exist;"),s.nexists=s.nexist=g(S,"\\nexists ","&#8708;"),s.and=s.land=s.wedge=g(ee,"\\wedge ","&and;"),s.or=s.lor=s.vee=g(ee,"\\vee ","&or;"),s.o=s.O=s.empty=s.emptyset=s.oslash=s.Oslash=s.nothing=s.varnothing=g(ee,"\\varnothing ","&empty;"),s.cup=s.union=g(ee,"\\cup ","&cup;"),s.cap=s.intersect=s.intersection=g(ee,"\\cap ","&cap;"),s.deg=s.degree=g(S,"\\degree ","&deg;"),s.ang=s.angle=g(S,"\\angle ","&ang;"),s.measuredangle=g(S,"\\measuredangle ","&#8737;");var Pr=O(S,function(c,d){c.createLeftOf=function(r){r.options.autoSubscriptNumerals&&r.parent!==r.parent.parent.sub&&(r[f]instanceof Se&&r[f].isItalic!==!1||r[f]instanceof St&&r[f][f]instanceof Se&&r[f][f].isItalic!==!1)?(s._().createLeftOf(r),d.createLeftOf.call(this,r),r.insRightOf(r.parent.parent)):d.createLeftOf.call(this,r)}}),Se=O(ct,function(c,d){c.init=function(r,n){d.init.call(this,r,"<var>"+(n||r)+"</var>")},c.text=function(){var r=this.ctrlSeq;return this.isPartOfOperator?r[0]=="\\"?r=r.slice(1,r.length):r[r.length-1]==" "&&(r=r.slice(0,-1)):(!this[f]||this[f]instanceof Se||this[f]instanceof ee||this[f].ctrlSeq==="\\ "||(r="*"+r),!this[1]||this[1]instanceof ee||this[1]instanceof St||(r+="*")),r}});rt.p.autoCommands={_maxLength:0},Tt.autoCommands=function(c){if(!/^[a-z]+(?: [a-z]+)*$/i.test(c))throw'"'+c+'" not a space-delimited list of only letters';for(var d=c.split(" "),r={},n=0,l=0;l<d.length;l+=1){var y=d[l];if(y.length<2)throw'autocommand "'+y+'" not minimum length of 2';if(s[y]===Dr)throw'"'+y+'" is a built-in operator name';r[y]=1,n=We(n,y.length)}return r._maxLength=n,r};var et=O(Se,function(c,d){function r(n){return!n||n instanceof ee||n instanceof Bt}c.init=function(n){return d.init.call(this,this.letter=n)},c.createLeftOf=function(n){d.createLeftOf.apply(this,arguments);var l=n.options.autoCommands,y=l._maxLength;if(y>0){for(var v="",k=this,w=0;k instanceof et&&k.ctrlSeq===k.letter&&w<y;)v=k.letter+v,k=k[f],w+=1;for(;v.length;){if(l.hasOwnProperty(v)){for(w=1,k=this;w<v.length;w+=1,k=k[f]);return a(k,this).remove(),n[f]=k[f],s[v](v).createLeftOf(n)}v=v.slice(1)}}},c.italicize=function(n){return this.isItalic=n,this.isPartOfOperator=!n,this.jQ.toggleClass("mq-operator-name",!n),this},c.finalizeTree=c.siblingDeleted=c.siblingCreated=function(n,l){l!==f&&this[1]instanceof et||this.autoUnItalicize(n)},c.autoUnItalicize=function(n){var l=n.autoOperatorNames;if(l._maxLength!==0){for(var y=this.letter,v=this[f];v instanceof et;v=v[f])y=v.letter+y;for(var k=this[1];k instanceof et;k=k[1])y+=k.letter;a(v[1]||this.parent.ends[f],k[f]||this.parent.ends[1]).each(function(Te){Te.italicize(!0).jQ.removeClass("mq-first mq-last mq-followed-by-supsub"),Te.ctrlSeq=Te.letter});e:for(var w=0,A=v[1]||this.parent.ends[f];w<y.length;w+=1,A=A[1])for(var I=tt(l._maxLength,y.length-w);I>0;I-=1){var U=y.slice(w,w+I);if(l.hasOwnProperty(U)){for(var Y=0,ue=A;Y<I;Y+=1,ue=ue[1]){ue.italicize(!1);var z=ue}var fe=wr.hasOwnProperty(U);if(A.ctrlSeq=(fe?"\\":"\\operatorname{")+A.ctrlSeq,z.ctrlSeq+=fe?" ":"}",lr.hasOwnProperty(U)&&z[f][f][f].jQ.addClass("mq-last"),r(A[f])||A.jQ.addClass("mq-first"),!r(z[1]))if(z[1]instanceof St){var ie=z[1];(ie.siblingCreated=ie.siblingDeleted=function(){ie.jQ.toggleClass("mq-after-operator-name",!(ie[1]instanceof je))})()}else z.jQ.toggleClass("mq-last",!(z[1]instanceof je));w+=I-1,A=z;continue e}}}}}),wr={},yt=rt.p.autoOperatorNames={_maxLength:9},lr={limsup:1,liminf:1,projlim:1,injlim:1};(function(){for(var c="arg deg det dim exp gcd hom inf ker lg lim ln log max min sup limsup liminf injlim projlim Pr".split(" "),d=0;d<c.length;d+=1)wr[c[d]]=yt[c[d]]=1;var r="sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth".split(" ");for(d=0;d<r.length;d+=1)wr[r[d]]=1;var n="sin cos tan sec cosec csc cotan cot ctg".split(" ");for(d=0;d<n.length;d+=1)yt[n[d]]=yt["arc"+n[d]]=yt[n[d]+"h"]=yt["ar"+n[d]+"h"]=yt["arc"+n[d]+"h"]=1;var l="gcf hcf lcm proj span".split(" ");for(d=0;d<l.length;d+=1)yt[l[d]]=1})(),Tt.autoOperatorNames=function(c){if(!/^[a-z]+(?: [a-z]+)*$/i.test(c))throw'"'+c+'" not a space-delimited list of only letters';for(var d=c.split(" "),r={},n=0,l=0;l<d.length;l+=1){var y=d[l];if(y.length<2)throw'"'+y+'" not minimum length of 2';r[y]=1,n=We(n,y.length)}return r._maxLength=n,r};var Dr=O(ct,function(c,d){c.init=function(r){this.ctrlSeq=r},c.createLeftOf=function(r){for(var n=this.ctrlSeq,l=0;l<n.length;l+=1)et(n.charAt(l)).createLeftOf(r)},c.parser=function(){for(var r=this.ctrlSeq,n=Me(),l=0;l<r.length;l+=1)et(r.charAt(l)).adopt(n,n.ends[1],0);return Z.succeed(n.children())}});for(var Qr in yt)yt.hasOwnProperty(Qr)&&(s[Qr]=Dr);s.operatorname=O(qe,function(c){c.createLeftOf=xe,c.numBlocks=function(){return 1},c.parser=function(){return Re.block.map(function(d){return d.children()})}}),s.f=O(et,function(c,d){c.init=function(){ct.p.init.call(this,this.letter="f",'<var class="mq-f">f</var>')},c.italicize=function(r){return this.jQ.html("f").toggleClass("mq-f",r),d.italicize.apply(this,arguments)}}),s[" "]=s.space=g(S,"\\ ","&nbsp;"),s["'"]=s.prime=g(S,"'","&prime;"),s["″"]=s.dprime=g(S,"″","&Prime;"),s.backslash=g(S,"\\backslash ","\\"),we["\\"]||(we["\\"]=s.backslash),s.$=g(S,"\\$","$");var Jt=O(ct,function(c,d){c.init=function(r,n){d.init.call(this,r,'<span class="mq-nonSymbola">'+(n||r)+"</span>")}});s["@"]=Jt,s["&"]=g(Jt,"\\&","&amp;"),s["%"]=g(Jt,"\\%","%"),s.alpha=s.beta=s.gamma=s.delta=s.zeta=s.eta=s.theta=s.iota=s.kappa=s.mu=s.nu=s.xi=s.rho=s.sigma=s.tau=s.chi=s.psi=s.omega=O(Se,function(c,d){c.init=function(r){d.init.call(this,"\\"+r+" ","&"+r+";")}}),s.phi=g(Se,"\\phi ","&#981;"),s.phiv=s.varphi=g(Se,"\\varphi ","&phi;"),s.epsilon=g(Se,"\\epsilon ","&#1013;"),s.epsiv=s.varepsilon=g(Se,"\\varepsilon ","&epsilon;"),s.piv=s.varpi=g(Se,"\\varpi ","&piv;"),s.sigmaf=s.sigmav=s.varsigma=g(Se,"\\varsigma ","&sigmaf;"),s.thetav=s.vartheta=s.thetasym=g(Se,"\\vartheta ","&thetasym;"),s.upsilon=s.upsi=g(Se,"\\upsilon ","&upsilon;"),s.gammad=s.Gammad=s.digamma=g(Se,"\\digamma ","&#989;"),s.kappav=s.varkappa=g(Se,"\\varkappa ","&#1008;"),s.rhov=s.varrho=g(Se,"\\varrho ","&#1009;"),s.pi=s.π=g(Jt,"\\pi ","&pi;"),s.lambda=g(Jt,"\\lambda ","&lambda;"),s.Upsilon=s.Upsi=s.upsih=s.Upsih=g(ct,"\\Upsilon ",'<var style="font-family: serif">&upsih;</var>'),s.Gamma=s.Delta=s.Theta=s.Lambda=s.Xi=s.Pi=s.Sigma=s.Phi=s.Psi=s.Omega=s.forall=O(S,function(c,d){c.init=function(r){d.init.call(this,"\\"+r+" ","&"+r+";")}});var zt=O(qe,function(c){c.init=function(d){this.latex=d},c.createLeftOf=function(d){var r=Re.parse(this.latex);r.children().adopt(d.parent,d[f],d[1]),d[f]=r.ends[1],r.jQize().insertBefore(d.jQ),r.finalizeInsert(d.options,d),r.ends[1][1].siblingCreated&&r.ends[1][1].siblingCreated(d.options,f),r.ends[f][f].siblingCreated&&r.ends[f][f].siblingCreated(d.options,1),d.parent.bubble("reflow")},c.parser=function(){var d=Re.parse(this.latex).children();return Z.succeed(d)}});s["¹"]=g(zt,"^1"),s["²"]=g(zt,"^2"),s["³"]=g(zt,"^3"),s["¼"]=g(zt,"\\frac14"),s["½"]=g(zt,"\\frac12"),s["¾"]=g(zt,"\\frac34");var cr=O(ee,function(c){c.init=S.prototype.init,c.contactWeld=c.siblingCreated=c.siblingDeleted=function(d,r){if(r!==1)return this.jQ[0].className=function n(l){return l[f]?l[f]instanceof ee||/^[,;:\(\[]$/.test(l[f].ctrlSeq)?"":"mq-binary-operator":l.parent&&l.parent.parent&&l.parent.parent.isStyleBlock()?n(l.parent.parent):""}(this),this}});s["+"]=g(cr,"+","+"),s["–"]=s["-"]=g(cr,"-","&minus;"),s["±"]=s.pm=s.plusmn=s.plusminus=g(cr,"\\pm ","&plusmn;"),s.mp=s.mnplus=s.minusplus=g(cr,"\\mp ","&#8723;"),we["*"]=s.sdot=s.cdot=g(ee,"\\cdot ","&middot;","*");var Zt=O(ee,function(c,d){c.init=function(r,n){this.data=r,this.strict=n;var l=n?"Strict":"";d.init.call(this,r["ctrlSeq"+l],r["html"+l],r["text"+l])},c.swap=function(r){this.strict=r;var n=r?"Strict":"";this.ctrlSeq=this.data["ctrlSeq"+n],this.jQ.html(this.data["html"+n]),this.textTemplate=[this.data["text"+n]]},c.deleteTowards=function(r,n){if(r===f&&!this.strict)return this.swap(!0),void this.bubble("reflow");d.deleteTowards.apply(this,arguments)}}),kr={ctrlSeq:"\\le ",html:"&le;",text:"≤",ctrlSeqStrict:"<",htmlStrict:"&lt;",textStrict:"<"},Rr={ctrlSeq:"\\ge ",html:"&ge;",text:"≥",ctrlSeqStrict:">",htmlStrict:"&gt;",textStrict:">"};s["<"]=s.lt=g(Zt,kr,!0),s[">"]=s.gt=g(Zt,Rr,!0),s["≤"]=s.le=s.leq=g(Zt,kr,!1),s["≥"]=s.ge=s.geq=g(Zt,Rr,!1);var Wt=O(ee,function(c,d){c.init=function(){d.init.call(this,"=","=")},c.createLeftOf=function(r){if(r[f]instanceof Zt&&r[f].strict)return r[f].swap(!1),void r[f].bubble("reflow");d.createLeftOf.apply(this,arguments)}});s["="]=Wt,s["×"]=s.times=g(ee,"\\times ","&times;","[x]"),s["÷"]=s.div=s.divide=s.divides=g(ee,"\\div ","&divide;","[/]"),we["~"]=s.sim=g(ee,"\\sim ","~","~");var ur=qt(1);for(var dr in ur)(function(c,d){typeof d=="function"?(nt[c]=function(){return $t(),d.apply(this,arguments)},nt[c].prototype=d.prototype):nt[c]=d})(dr,ur[dr])}(),ae.exports=window.MathQuill},755:function(ae,ge){var K;(function(N,ce){typeof ae.exports=="object"?ae.exports=N.document?ce(N,!0):function(se){if(!se.document)throw new Error("jQuery requires a window with a document");return ce(se)}:ce(N)})(typeof window<"u"?window:this,function(N,ce){var se=[],pe=Object.getPrototypeOf,me=se.slice,tt=se.flat?function(e){return se.flat.call(e)}:function(e){return se.concat.apply([],e)},We=se.push,xe=se.indexOf,Ye={},de=Ye.toString,Je=Ye.hasOwnProperty,Ze=Je.toString,g=Ze.call(Object),B={},O=function(e){return typeof e=="function"&&typeof e.nodeType!="number"&&typeof e.item!="function"},f=function(e){return e!=null&&e===e.window},$=N.document,le={type:!0,src:!0,nonce:!0,noModule:!0};function Pe(e,t,i){var o,u,p=(i=i||$).createElement("script");if(p.text=e,t)for(o in le)(u=t[o]||t.getAttribute&&t.getAttribute(o))&&p.setAttribute(o,u);i.head.appendChild(p).parentNode.removeChild(p)}function be(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?Ye[de.call(e)]||"object":typeof e}var lt="3.6.0",a=function(e,t){return new a.fn.init(e,t)};function s(e){var t=!!e&&"length"in e&&e.length,i=be(e);return!O(e)&&!f(e)&&(i==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e)}a.fn=a.prototype={jquery:lt,constructor:a,length:0,toArray:function(){return me.call(this)},get:function(e){return e==null?me.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=a.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return a.each(this,e)},map:function(e){return this.pushStack(a.map(this,function(t,i){return e.call(t,i,t)}))},slice:function(){return this.pushStack(me.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(a.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(a.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,i=+e+(e<0?t:0);return this.pushStack(i>=0&&i<t?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:We,sort:se.sort,splice:se.splice},a.extend=a.fn.extend=function(){var e,t,i,o,u,p,h=arguments[0]||{},x=1,C=arguments.length,j=!1;for(typeof h=="boolean"&&(j=h,h=arguments[x]||{},x++),typeof h=="object"||O(h)||(h={}),x===C&&(h=this,x--);x<C;x++)if((e=arguments[x])!=null)for(t in e)o=e[t],t!=="__proto__"&&h!==o&&(j&&o&&(a.isPlainObject(o)||(u=Array.isArray(o)))?(i=h[t],p=u&&!Array.isArray(i)?[]:u||a.isPlainObject(i)?i:{},u=!1,h[t]=a.extend(j,p,o)):o!==void 0&&(h[t]=o));return h},a.extend({expando:"jQuery"+(lt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,i;return!(!e||de.call(e)!=="[object Object]"||(t=pe(e))&&(typeof(i=Je.call(t,"constructor")&&t.constructor)!="function"||Ze.call(i)!==g))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,i){Pe(e,{nonce:t&&t.nonce},i)},each:function(e,t){var i,o=0;if(s(e))for(i=e.length;o<i&&t.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(t.call(e[o],o,e[o])===!1)break;return e},makeArray:function(e,t){var i=t||[];return e!=null&&(s(Object(e))?a.merge(i,typeof e=="string"?[e]:e):We.call(i,e)),i},inArray:function(e,t,i){return t==null?-1:xe.call(t,e,i)},merge:function(e,t){for(var i=+t.length,o=0,u=e.length;o<i;o++)e[u++]=t[o];return e.length=u,e},grep:function(e,t,i){for(var o=[],u=0,p=e.length,h=!i;u<p;u++)!t(e[u],u)!==h&&o.push(e[u]);return o},map:function(e,t,i){var o,u,p=0,h=[];if(s(e))for(o=e.length;p<o;p++)(u=t(e[p],p,i))!=null&&h.push(u);else for(p in e)(u=t(e[p],p,i))!=null&&h.push(u);return tt(h)},guid:1,support:B}),typeof Symbol=="function"&&(a.fn[Symbol.iterator]=se[Symbol.iterator]),a.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){Ye["[object "+t+"]"]=t.toLowerCase()});var we=function(e){var t,i,o,u,p,h,x,C,j,P,D,E,L,W,G,V,Ee,Ue,gt,ke="sizzle"+1*new Date,ne=e.document,ut=0,ye=0,Le=Br(),qr=Br(),Ir=Br(),bt=Br(),rr=function(m,b){return m===b&&(D=!0),0},hr={}.hasOwnProperty,dt=[],mr=dt.pop,Ct=dt.push,Oe=dt.push,vt=dt.slice,xt=function(m,b){for(var T=0,Q=m.length;T<Q;T++)if(m[T]===b)return T;return-1},Qt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Fe="[\\x20\\t\\r\\n\\f]",ve="(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",$e="\\[[\\x20\\t\\r\\n\\f]*("+ve+")(?:"+Fe+"*([*^$|!~]?=)"+Fe+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ve+"))|)"+Fe+"*\\]",wt=":("+ve+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+$e+")*)|.*)\\)|)",Be=new RegExp(Fe+"+","g"),kt=new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),fr=new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),Nr=new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),Xn=new RegExp(Fe+"|>"),Yn=new RegExp(wt),Kn=new RegExp("^"+ve+"$"),Fr={ID:new RegExp("^#("+ve+")"),CLASS:new RegExp("^\\.("+ve+")"),TAG:new RegExp("^("+ve+"|[*])"),ATTR:new RegExp("^"+$e),PSEUDO:new RegExp("^"+wt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)","i"),bool:new RegExp("^(?:"+Qt+")$","i"),needsContext:new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)","i")},Gn=/HTML$/i,Jn=/^(?:input|select|textarea|button)$/i,Zn=/^h\d$/i,jr=/^[^{]+\{\s*\[native \w/,ei=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,nn=/[+~]/,Vt=new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])","g"),Ut=function(m,b){var T="0x"+m.slice(1)-65536;return b||(T<0?String.fromCharCode(T+65536):String.fromCharCode(T>>10|55296,1023&T|56320))},Cn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Tn=function(m,b){return b?m==="\0"?"�":m.slice(0,-1)+"\\"+m.charCodeAt(m.length-1).toString(16)+" ":"\\"+m},qn=function(){E()},ti=zr(function(m){return m.disabled===!0&&m.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{Oe.apply(dt=vt.call(ne.childNodes),ne.childNodes),dt[ne.childNodes.length].nodeType}catch{Oe={apply:dt.length?function(m,b){Ct.apply(m,vt.call(b))}:function(m,b){for(var T=m.length,Q=0;m[T++]=b[Q++];);m.length=T-1}}}function _e(m,b,T,Q){var q,R,M,F,H,te,re,J=b&&b.ownerDocument,he=b?b.nodeType:9;if(T=T||[],typeof m!="string"||!m||he!==1&&he!==9&&he!==11)return T;if(!Q&&(E(b),b=b||L,G)){if(he!==11&&(H=ei.exec(m)))if(q=H[1]){if(he===9){if(!(M=b.getElementById(q)))return T;if(M.id===q)return T.push(M),T}else if(J&&(M=J.getElementById(q))&&gt(b,M)&&M.id===q)return T.push(M),T}else{if(H[2])return Oe.apply(T,b.getElementsByTagName(m)),T;if((q=H[3])&&i.getElementsByClassName&&b.getElementsByClassName)return Oe.apply(T,b.getElementsByClassName(q)),T}if(i.qsa&&!bt[m+" "]&&(!V||!V.test(m))&&(he!==1||b.nodeName.toLowerCase()!=="object")){if(re=m,J=b,he===1&&(Xn.test(m)||Nr.test(m))){for((J=nn.test(m)&&an(b.parentNode)||b)===b&&i.scope||((F=b.getAttribute("id"))?F=F.replace(Cn,Tn):b.setAttribute("id",F=ke)),R=(te=h(m)).length;R--;)te[R]=(F?"#"+F:":scope")+" "+Hr(te[R]);re=te.join(",")}try{return Oe.apply(T,J.querySelectorAll(re)),T}catch{bt(m,!0)}finally{F===ke&&b.removeAttribute("id")}}}return C(m.replace(kt,"$1"),b,T,Q)}function Br(){var m=[];return function b(T,Q){return m.push(T+" ")>o.cacheLength&&delete b[m.shift()],b[T+" "]=Q}}function Lt(m){return m[ke]=!0,m}function Ot(m){var b=L.createElement("fieldset");try{return!!m(b)}catch{return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function on(m,b){for(var T=m.split("|"),Q=T.length;Q--;)o.attrHandle[T[Q]]=b}function jn(m,b){var T=b&&m,Q=T&&m.nodeType===1&&b.nodeType===1&&m.sourceIndex-b.sourceIndex;if(Q)return Q;if(T){for(;T=T.nextSibling;)if(T===b)return-1}return m?1:-1}function ri(m){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===m}}function ni(m){return function(b){var T=b.nodeName.toLowerCase();return(T==="input"||T==="button")&&b.type===m}}function Sn(m){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===m:b.disabled===m:b.isDisabled===m||b.isDisabled!==!m&&ti(b)===m:b.disabled===m:"label"in b&&b.disabled===m}}function nr(m){return Lt(function(b){return b=+b,Lt(function(T,Q){for(var q,R=m([],T.length,b),M=R.length;M--;)T[q=R[M]]&&(T[q]=!(Q[q]=T[q]))})})}function an(m){return m&&m.getElementsByTagName!==void 0&&m}for(t in i=_e.support={},p=_e.isXML=function(m){var b=m&&m.namespaceURI,T=m&&(m.ownerDocument||m).documentElement;return!Gn.test(b||T&&T.nodeName||"HTML")},E=_e.setDocument=function(m){var b,T,Q=m?m.ownerDocument||m:ne;return Q!=L&&Q.nodeType===9&&Q.documentElement&&(W=(L=Q).documentElement,G=!p(L),ne!=L&&(T=L.defaultView)&&T.top!==T&&(T.addEventListener?T.addEventListener("unload",qn,!1):T.attachEvent&&T.attachEvent("onunload",qn)),i.scope=Ot(function(q){return W.appendChild(q).appendChild(L.createElement("div")),q.querySelectorAll!==void 0&&!q.querySelectorAll(":scope fieldset div").length}),i.attributes=Ot(function(q){return q.className="i",!q.getAttribute("className")}),i.getElementsByTagName=Ot(function(q){return q.appendChild(L.createComment("")),!q.getElementsByTagName("*").length}),i.getElementsByClassName=jr.test(L.getElementsByClassName),i.getById=Ot(function(q){return W.appendChild(q).id=ke,!L.getElementsByName||!L.getElementsByName(ke).length}),i.getById?(o.filter.ID=function(q){var R=q.replace(Vt,Ut);return function(M){return M.getAttribute("id")===R}},o.find.ID=function(q,R){if(R.getElementById!==void 0&&G){var M=R.getElementById(q);return M?[M]:[]}}):(o.filter.ID=function(q){var R=q.replace(Vt,Ut);return function(M){var F=M.getAttributeNode!==void 0&&M.getAttributeNode("id");return F&&F.value===R}},o.find.ID=function(q,R){if(R.getElementById!==void 0&&G){var M,F,H,te=R.getElementById(q);if(te){if((M=te.getAttributeNode("id"))&&M.value===q)return[te];for(H=R.getElementsByName(q),F=0;te=H[F++];)if((M=te.getAttributeNode("id"))&&M.value===q)return[te]}return[]}}),o.find.TAG=i.getElementsByTagName?function(q,R){return R.getElementsByTagName!==void 0?R.getElementsByTagName(q):i.qsa?R.querySelectorAll(q):void 0}:function(q,R){var M,F=[],H=0,te=R.getElementsByTagName(q);if(q==="*"){for(;M=te[H++];)M.nodeType===1&&F.push(M);return F}return te},o.find.CLASS=i.getElementsByClassName&&function(q,R){if(R.getElementsByClassName!==void 0&&G)return R.getElementsByClassName(q)},Ee=[],V=[],(i.qsa=jr.test(L.querySelectorAll))&&(Ot(function(q){var R;W.appendChild(q).innerHTML="<a id='"+ke+"'></a><select id='"+ke+"-\r\\' msallowcapture=''><option selected=''></option></select>",q.querySelectorAll("[msallowcapture^='']").length&&V.push(`[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|"")`),q.querySelectorAll("[selected]").length||V.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|"+Qt+")"),q.querySelectorAll("[id~="+ke+"-]").length||V.push("~="),(R=L.createElement("input")).setAttribute("name",""),q.appendChild(R),q.querySelectorAll("[name='']").length||V.push(`\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|"")`),q.querySelectorAll(":checked").length||V.push(":checked"),q.querySelectorAll("a#"+ke+"+*").length||V.push(".#.+[+~]"),q.querySelectorAll("\\\f"),V.push("[\\r\\n\\f]")}),Ot(function(q){q.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var R=L.createElement("input");R.setAttribute("type","hidden"),q.appendChild(R).setAttribute("name","D"),q.querySelectorAll("[name=d]").length&&V.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),q.querySelectorAll(":enabled").length!==2&&V.push(":enabled",":disabled"),W.appendChild(q).disabled=!0,q.querySelectorAll(":disabled").length!==2&&V.push(":enabled",":disabled"),q.querySelectorAll("*,:x"),V.push(",.*:")})),(i.matchesSelector=jr.test(Ue=W.matches||W.webkitMatchesSelector||W.mozMatchesSelector||W.oMatchesSelector||W.msMatchesSelector))&&Ot(function(q){i.disconnectedMatch=Ue.call(q,"*"),Ue.call(q,"[s!='']:x"),Ee.push("!=",wt)}),V=V.length&&new RegExp(V.join("|")),Ee=Ee.length&&new RegExp(Ee.join("|")),b=jr.test(W.compareDocumentPosition),gt=b||jr.test(W.contains)?function(q,R){var M=q.nodeType===9?q.documentElement:q,F=R&&R.parentNode;return q===F||!(!F||F.nodeType!==1||!(M.contains?M.contains(F):q.compareDocumentPosition&&16&q.compareDocumentPosition(F)))}:function(q,R){if(R){for(;R=R.parentNode;)if(R===q)return!0}return!1},rr=b?function(q,R){if(q===R)return D=!0,0;var M=!q.compareDocumentPosition-!R.compareDocumentPosition;return M||(1&(M=(q.ownerDocument||q)==(R.ownerDocument||R)?q.compareDocumentPosition(R):1)||!i.sortDetached&&R.compareDocumentPosition(q)===M?q==L||q.ownerDocument==ne&&gt(ne,q)?-1:R==L||R.ownerDocument==ne&&gt(ne,R)?1:P?xt(P,q)-xt(P,R):0:4&M?-1:1)}:function(q,R){if(q===R)return D=!0,0;var M,F=0,H=q.parentNode,te=R.parentNode,re=[q],J=[R];if(!H||!te)return q==L?-1:R==L?1:H?-1:te?1:P?xt(P,q)-xt(P,R):0;if(H===te)return jn(q,R);for(M=q;M=M.parentNode;)re.unshift(M);for(M=R;M=M.parentNode;)J.unshift(M);for(;re[F]===J[F];)F++;return F?jn(re[F],J[F]):re[F]==ne?-1:J[F]==ne?1:0}),L},_e.matches=function(m,b){return _e(m,null,null,b)},_e.matchesSelector=function(m,b){if(E(m),i.matchesSelector&&G&&!bt[b+" "]&&(!Ee||!Ee.test(b))&&(!V||!V.test(b)))try{var T=Ue.call(m,b);if(T||i.disconnectedMatch||m.document&&m.document.nodeType!==11)return T}catch{bt(b,!0)}return _e(b,L,null,[m]).length>0},_e.contains=function(m,b){return(m.ownerDocument||m)!=L&&E(m),gt(m,b)},_e.attr=function(m,b){(m.ownerDocument||m)!=L&&E(m);var T=o.attrHandle[b.toLowerCase()],Q=T&&hr.call(o.attrHandle,b.toLowerCase())?T(m,b,!G):void 0;return Q!==void 0?Q:i.attributes||!G?m.getAttribute(b):(Q=m.getAttributeNode(b))&&Q.specified?Q.value:null},_e.escape=function(m){return(m+"").replace(Cn,Tn)},_e.error=function(m){throw new Error("Syntax error, unrecognized expression: "+m)},_e.uniqueSort=function(m){var b,T=[],Q=0,q=0;if(D=!i.detectDuplicates,P=!i.sortStable&&m.slice(0),m.sort(rr),D){for(;b=m[q++];)b===m[q]&&(Q=T.push(q));for(;Q--;)m.splice(T[Q],1)}return P=null,m},u=_e.getText=function(m){var b,T="",Q=0,q=m.nodeType;if(q){if(q===1||q===9||q===11){if(typeof m.textContent=="string")return m.textContent;for(m=m.firstChild;m;m=m.nextSibling)T+=u(m)}else if(q===3||q===4)return m.nodeValue}else for(;b=m[Q++];)T+=u(b);return T},o=_e.selectors={cacheLength:50,createPseudo:Lt,match:Fr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(m){return m[1]=m[1].replace(Vt,Ut),m[3]=(m[3]||m[4]||m[5]||"").replace(Vt,Ut),m[2]==="~="&&(m[3]=" "+m[3]+" "),m.slice(0,4)},CHILD:function(m){return m[1]=m[1].toLowerCase(),m[1].slice(0,3)==="nth"?(m[3]||_e.error(m[0]),m[4]=+(m[4]?m[5]+(m[6]||1):2*(m[3]==="even"||m[3]==="odd")),m[5]=+(m[7]+m[8]||m[3]==="odd")):m[3]&&_e.error(m[0]),m},PSEUDO:function(m){var b,T=!m[6]&&m[2];return Fr.CHILD.test(m[0])?null:(m[3]?m[2]=m[4]||m[5]||"":T&&Yn.test(T)&&(b=h(T,!0))&&(b=T.indexOf(")",T.length-b)-T.length)&&(m[0]=m[0].slice(0,b),m[2]=T.slice(0,b)),m.slice(0,3))}},filter:{TAG:function(m){var b=m.replace(Vt,Ut).toLowerCase();return m==="*"?function(){return!0}:function(T){return T.nodeName&&T.nodeName.toLowerCase()===b}},CLASS:function(m){var b=Le[m+" "];return b||(b=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+m+"("+Fe+"|$)"))&&Le(m,function(T){return b.test(typeof T.className=="string"&&T.className||T.getAttribute!==void 0&&T.getAttribute("class")||"")})},ATTR:function(m,b,T){return function(Q){var q=_e.attr(Q,m);return q==null?b==="!=":!b||(q+="",b==="="?q===T:b==="!="?q!==T:b==="^="?T&&q.indexOf(T)===0:b==="*="?T&&q.indexOf(T)>-1:b==="$="?T&&q.slice(-T.length)===T:b==="~="?(" "+q.replace(Be," ")+" ").indexOf(T)>-1:b==="|="&&(q===T||q.slice(0,T.length+1)===T+"-"))}},CHILD:function(m,b,T,Q,q){var R=m.slice(0,3)!=="nth",M=m.slice(-4)!=="last",F=b==="of-type";return Q===1&&q===0?function(H){return!!H.parentNode}:function(H,te,re){var J,he,He,oe,Xe,Ge,st=R!==M?"nextSibling":"previousSibling",Ce=H.parentNode,Rt=F&&H.nodeName.toLowerCase(),ot=!re&&!F,ze=!1;if(Ce){if(R){for(;st;){for(oe=H;oe=oe[st];)if(F?oe.nodeName.toLowerCase()===Rt:oe.nodeType===1)return!1;Ge=st=m==="only"&&!Ge&&"nextSibling"}return!0}if(Ge=[M?Ce.firstChild:Ce.lastChild],M&&ot){for(ze=(Xe=(J=(he=(He=(oe=Ce)[ke]||(oe[ke]={}))[oe.uniqueID]||(He[oe.uniqueID]={}))[m]||[])[0]===ut&&J[1])&&J[2],oe=Xe&&Ce.childNodes[Xe];oe=++Xe&&oe&&oe[st]||(ze=Xe=0)||Ge.pop();)if(oe.nodeType===1&&++ze&&oe===H){he[m]=[ut,Xe,ze];break}}else if(ot&&(ze=Xe=(J=(he=(He=(oe=H)[ke]||(oe[ke]={}))[oe.uniqueID]||(He[oe.uniqueID]={}))[m]||[])[0]===ut&&J[1]),ze===!1)for(;(oe=++Xe&&oe&&oe[st]||(ze=Xe=0)||Ge.pop())&&((F?oe.nodeName.toLowerCase()!==Rt:oe.nodeType!==1)||!++ze||(ot&&((he=(He=oe[ke]||(oe[ke]={}))[oe.uniqueID]||(He[oe.uniqueID]={}))[m]=[ut,ze]),oe!==H)););return(ze-=q)===Q||ze%Q==0&&ze/Q>=0}}},PSEUDO:function(m,b){var T,Q=o.pseudos[m]||o.setFilters[m.toLowerCase()]||_e.error("unsupported pseudo: "+m);return Q[ke]?Q(b):Q.length>1?(T=[m,m,"",b],o.setFilters.hasOwnProperty(m.toLowerCase())?Lt(function(q,R){for(var M,F=Q(q,b),H=F.length;H--;)q[M=xt(q,F[H])]=!(R[M]=F[H])}):function(q){return Q(q,0,T)}):Q}},pseudos:{not:Lt(function(m){var b=[],T=[],Q=x(m.replace(kt,"$1"));return Q[ke]?Lt(function(q,R,M,F){for(var H,te=Q(q,null,F,[]),re=q.length;re--;)(H=te[re])&&(q[re]=!(R[re]=H))}):function(q,R,M){return b[0]=q,Q(b,null,M,T),b[0]=null,!T.pop()}}),has:Lt(function(m){return function(b){return _e(m,b).length>0}}),contains:Lt(function(m){return m=m.replace(Vt,Ut),function(b){return(b.textContent||u(b)).indexOf(m)>-1}}),lang:Lt(function(m){return Kn.test(m||"")||_e.error("unsupported lang: "+m),m=m.replace(Vt,Ut).toLowerCase(),function(b){var T;do if(T=G?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return(T=T.toLowerCase())===m||T.indexOf(m+"-")===0;while((b=b.parentNode)&&b.nodeType===1);return!1}}),target:function(m){var b=e.location&&e.location.hash;return b&&b.slice(1)===m.id},root:function(m){return m===W},focus:function(m){return m===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(m.type||m.href||~m.tabIndex)},enabled:Sn(!1),disabled:Sn(!0),checked:function(m){var b=m.nodeName.toLowerCase();return b==="input"&&!!m.checked||b==="option"&&!!m.selected},selected:function(m){return m.parentNode&&m.parentNode.selectedIndex,m.selected===!0},empty:function(m){for(m=m.firstChild;m;m=m.nextSibling)if(m.nodeType<6)return!1;return!0},parent:function(m){return!o.pseudos.empty(m)},header:function(m){return Zn.test(m.nodeName)},input:function(m){return Jn.test(m.nodeName)},button:function(m){var b=m.nodeName.toLowerCase();return b==="input"&&m.type==="button"||b==="button"},text:function(m){var b;return m.nodeName.toLowerCase()==="input"&&m.type==="text"&&((b=m.getAttribute("type"))==null||b.toLowerCase()==="text")},first:nr(function(){return[0]}),last:nr(function(m,b){return[b-1]}),eq:nr(function(m,b,T){return[T<0?T+b:T]}),even:nr(function(m,b){for(var T=0;T<b;T+=2)m.push(T);return m}),odd:nr(function(m,b){for(var T=1;T<b;T+=2)m.push(T);return m}),lt:nr(function(m,b,T){for(var Q=T<0?T+b:T>b?b:T;--Q>=0;)m.push(Q);return m}),gt:nr(function(m,b,T){for(var Q=T<0?T+b:T;++Q<b;)m.push(Q);return m})}},o.pseudos.nth=o.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[t]=ri(t);for(t in{submit:!0,reset:!0})o.pseudos[t]=ni(t);function En(){}function Hr(m){for(var b=0,T=m.length,Q="";b<T;b++)Q+=m[b].value;return Q}function zr(m,b,T){var Q=b.dir,q=b.next,R=q||Q,M=T&&R==="parentNode",F=ye++;return b.first?function(H,te,re){for(;H=H[Q];)if(H.nodeType===1||M)return m(H,te,re);return!1}:function(H,te,re){var J,he,He,oe=[ut,F];if(re){for(;H=H[Q];)if((H.nodeType===1||M)&&m(H,te,re))return!0}else for(;H=H[Q];)if(H.nodeType===1||M)if(he=(He=H[ke]||(H[ke]={}))[H.uniqueID]||(He[H.uniqueID]={}),q&&q===H.nodeName.toLowerCase())H=H[Q]||H;else{if((J=he[R])&&J[0]===ut&&J[1]===F)return oe[2]=J[2];if(he[R]=oe,oe[2]=m(H,te,re))return!0}return!1}}function sn(m){return m.length>1?function(b,T,Q){for(var q=m.length;q--;)if(!m[q](b,T,Q))return!1;return!0}:m[0]}function Wr(m,b,T,Q,q){for(var R,M=[],F=0,H=m.length,te=b!=null;F<H;F++)(R=m[F])&&(T&&!T(R,Q,q)||(M.push(R),te&&b.push(F)));return M}function ln(m,b,T,Q,q,R){return Q&&!Q[ke]&&(Q=ln(Q)),q&&!q[ke]&&(q=ln(q,R)),Lt(function(M,F,H,te){var re,J,he,He=[],oe=[],Xe=F.length,Ge=M||function(Rt,ot,ze){for(var At=0,Vr=ot.length;At<Vr;At++)_e(Rt,ot[At],ze);return ze}(b||"*",H.nodeType?[H]:H,[]),st=!m||!M&&b?Ge:Wr(Ge,He,m,H,te),Ce=T?q||(M?m:Xe||Q)?[]:F:st;if(T&&T(st,Ce,H,te),Q)for(re=Wr(Ce,oe),Q(re,[],H,te),J=re.length;J--;)(he=re[J])&&(Ce[oe[J]]=!(st[oe[J]]=he));if(M){if(q||m){if(q){for(re=[],J=Ce.length;J--;)(he=Ce[J])&&re.push(st[J]=he);q(null,Ce=[],re,te)}for(J=Ce.length;J--;)(he=Ce[J])&&(re=q?xt(M,he):He[J])>-1&&(M[re]=!(F[re]=he))}}else Ce=Wr(Ce===F?Ce.splice(Xe,Ce.length):Ce),q?q(null,F,Ce,te):Oe.apply(F,Ce)})}function cn(m){for(var b,T,Q,q=m.length,R=o.relative[m[0].type],M=R||o.relative[" "],F=R?1:0,H=zr(function(J){return J===b},M,!0),te=zr(function(J){return xt(b,J)>-1},M,!0),re=[function(J,he,He){var oe=!R&&(He||he!==j)||((b=he).nodeType?H(J,he,He):te(J,he,He));return b=null,oe}];F<q;F++)if(T=o.relative[m[F].type])re=[zr(sn(re),T)];else{if((T=o.filter[m[F].type].apply(null,m[F].matches))[ke]){for(Q=++F;Q<q&&!o.relative[m[Q].type];Q++);return ln(F>1&&sn(re),F>1&&Hr(m.slice(0,F-1).concat({value:m[F-2].type===" "?"*":""})).replace(kt,"$1"),T,F<Q&&cn(m.slice(F,Q)),Q<q&&cn(m=m.slice(Q)),Q<q&&Hr(m))}re.push(T)}return sn(re)}return En.prototype=o.filters=o.pseudos,o.setFilters=new En,h=_e.tokenize=function(m,b){var T,Q,q,R,M,F,H,te=qr[m+" "];if(te)return b?0:te.slice(0);for(M=m,F=[],H=o.preFilter;M;){for(R in T&&!(Q=fr.exec(M))||(Q&&(M=M.slice(Q[0].length)||M),F.push(q=[])),T=!1,(Q=Nr.exec(M))&&(T=Q.shift(),q.push({value:T,type:Q[0].replace(kt," ")}),M=M.slice(T.length)),o.filter)!(Q=Fr[R].exec(M))||H[R]&&!(Q=H[R](Q))||(T=Q.shift(),q.push({value:T,type:R,matches:Q}),M=M.slice(T.length));if(!T)break}return b?M.length:M?_e.error(m):qr(m,F).slice(0)},x=_e.compile=function(m,b){var T,Q=[],q=[],R=Ir[m+" "];if(!R){for(b||(b=h(m)),T=b.length;T--;)(R=cn(b[T]))[ke]?Q.push(R):q.push(R);R=Ir(m,function(M,F){var H=F.length>0,te=M.length>0,re=function(J,he,He,oe,Xe){var Ge,st,Ce,Rt=0,ot="0",ze=J&&[],At=[],Vr=j,Ln=J||te&&o.find.TAG("*",Xe),On=ut+=Vr==null?1:Math.random()||.1,ii=Ln.length;for(Xe&&(j=he==L||he||Xe);ot!==ii&&(Ge=Ln[ot])!=null;ot++){if(te&&Ge){for(st=0,he||Ge.ownerDocument==L||(E(Ge),He=!G);Ce=M[st++];)if(Ce(Ge,he||L,He)){oe.push(Ge);break}Xe&&(ut=On)}H&&((Ge=!Ce&&Ge)&&Rt--,J&&ze.push(Ge))}if(Rt+=ot,H&&ot!==Rt){for(st=0;Ce=F[st++];)Ce(ze,At,he,He);if(J){if(Rt>0)for(;ot--;)ze[ot]||At[ot]||(At[ot]=mr.call(oe));At=Wr(At)}Oe.apply(oe,At),Xe&&!J&&At.length>0&&Rt+F.length>1&&_e.uniqueSort(oe)}return Xe&&(ut=On,j=Vr),ze};return H?Lt(re):re}(q,Q)),R.selector=m}return R},C=_e.select=function(m,b,T,Q){var q,R,M,F,H,te=typeof m=="function"&&m,re=!Q&&h(m=te.selector||m);if(T=T||[],re.length===1){if((R=re[0]=re[0].slice(0)).length>2&&(M=R[0]).type==="ID"&&b.nodeType===9&&G&&o.relative[R[1].type]){if(!(b=(o.find.ID(M.matches[0].replace(Vt,Ut),b)||[])[0]))return T;te&&(b=b.parentNode),m=m.slice(R.shift().value.length)}for(q=Fr.needsContext.test(m)?0:R.length;q--&&(M=R[q],!o.relative[F=M.type]);)if((H=o.find[F])&&(Q=H(M.matches[0].replace(Vt,Ut),nn.test(R[0].type)&&an(b.parentNode)||b))){if(R.splice(q,1),!(m=Q.length&&Hr(R)))return Oe.apply(T,Q),T;break}}return(te||x(m,re))(Q,b,!G,T,!b||nn.test(m)&&an(b.parentNode)||b),T},i.sortStable=ke.split("").sort(rr).join("")===ke,i.detectDuplicates=!!D,E(),i.sortDetached=Ot(function(m){return 1&m.compareDocumentPosition(L.createElement("fieldset"))}),Ot(function(m){return m.innerHTML="<a href='#'></a>",m.firstChild.getAttribute("href")==="#"})||on("type|href|height|width",function(m,b,T){if(!T)return m.getAttribute(b,b.toLowerCase()==="type"?1:2)}),i.attributes&&Ot(function(m){return m.innerHTML="<input/>",m.firstChild.setAttribute("value",""),m.firstChild.getAttribute("value")===""})||on("value",function(m,b,T){if(!T&&m.nodeName.toLowerCase()==="input")return m.defaultValue}),Ot(function(m){return m.getAttribute("disabled")==null})||on(Qt,function(m,b,T){var Q;if(!T)return m[b]===!0?b.toLowerCase():(Q=m.getAttributeNode(b))&&Q.specified?Q.value:null}),_e}(N);a.find=we,a.expr=we.selectors,a.expr[":"]=a.expr.pseudos,a.uniqueSort=a.unique=we.uniqueSort,a.text=we.getText,a.isXMLDoc=we.isXML,a.contains=we.contains,a.escapeSelector=we.escape;var De=function(e,t,i){for(var o=[],u=i!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(u&&a(e).is(i))break;o.push(e)}return o},ht=function(e,t){for(var i=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&i.push(e);return i},Ie=a.expr.match.needsContext;function Qe(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var rt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Tt(e,t,i){return O(t)?a.grep(e,function(o,u){return!!t.call(o,u,o)!==i}):t.nodeType?a.grep(e,function(o){return o===t!==i}):typeof t!="string"?a.grep(e,function(o){return xe.call(t,o)>-1!==i}):a.filter(t,e,i)}a.filter=function(e,t,i){var o=t[0];return i&&(e=":not("+e+")"),t.length===1&&o.nodeType===1?a.find.matchesSelector(o,e)?[o]:[]:a.find.matches(e,a.grep(t,function(u){return u.nodeType===1}))},a.fn.extend({find:function(e){var t,i,o=this.length,u=this;if(typeof e!="string")return this.pushStack(a(e).filter(function(){for(t=0;t<o;t++)if(a.contains(u[t],this))return!0}));for(i=this.pushStack([]),t=0;t<o;t++)a.find(e,u[t],i);return o>1?a.uniqueSort(i):i},filter:function(e){return this.pushStack(Tt(this,e||[],!1))},not:function(e){return this.pushStack(Tt(this,e||[],!0))},is:function(e){return!!Tt(this,typeof e=="string"&&Ie.test(e)?a(e):e||[],!1).length}});var Pt,Mt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(a.fn.init=function(e,t,i){var o,u;if(!e)return this;if(i=i||Pt,typeof e=="string"){if(!(o=e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?[null,e,null]:Mt.exec(e))||!o[1]&&t)return!t||t.jquery?(t||i).find(e):this.constructor(t).find(e);if(o[1]){if(t=t instanceof a?t[0]:t,a.merge(this,a.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:$,!0)),rt.test(o[1])&&a.isPlainObject(t))for(o in t)O(this[o])?this[o](t[o]):this.attr(o,t[o]);return this}return(u=$.getElementById(o[2]))&&(this[0]=u,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):O(e)?i.ready!==void 0?i.ready(e):e(a):a.makeArray(e,this)}).prototype=a.fn,Pt=a($);var $t=/^(?:parents|prev(?:Until|All))/,nt={children:!0,contents:!0,next:!0,prev:!0};function yr(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}a.fn.extend({has:function(e){var t=a(e,this),i=t.length;return this.filter(function(){for(var o=0;o<i;o++)if(a.contains(this,t[o]))return!0})},closest:function(e,t){var i,o=0,u=this.length,p=[],h=typeof e!="string"&&a(e);if(!Ie.test(e)){for(;o<u;o++)for(i=this[o];i&&i!==t;i=i.parentNode)if(i.nodeType<11&&(h?h.index(i)>-1:i.nodeType===1&&a.find.matchesSelector(i,e))){p.push(i);break}}return this.pushStack(p.length>1?a.uniqueSort(p):p)},index:function(e){return e?typeof e=="string"?xe.call(a(e),this[0]):xe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(a.uniqueSort(a.merge(this.get(),a(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),a.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return De(e,"parentNode")},parentsUntil:function(e,t,i){return De(e,"parentNode",i)},next:function(e){return yr(e,"nextSibling")},prev:function(e){return yr(e,"previousSibling")},nextAll:function(e){return De(e,"nextSibling")},prevAll:function(e){return De(e,"previousSibling")},nextUntil:function(e,t,i){return De(e,"nextSibling",i)},prevUntil:function(e,t,i){return De(e,"previousSibling",i)},siblings:function(e){return ht((e.parentNode||{}).firstChild,e)},children:function(e){return ht(e.firstChild)},contents:function(e){return e.contentDocument!=null&&pe(e.contentDocument)?e.contentDocument:(Qe(e,"template")&&(e=e.content||e),a.merge([],e.childNodes))}},function(e,t){a.fn[e]=function(i,o){var u=a.map(this,t,i);return e.slice(-5)!=="Until"&&(o=i),o&&typeof o=="string"&&(u=a.filter(o,u)),this.length>1&&(nt[e]||a.uniqueSort(u),$t.test(e)&&u.reverse()),this.pushStack(u)}});var mt=/[^\x20\t\r\n\f]+/g;function qt(e){return e}function ir(e){throw e}function gr(e,t,i,o){var u;try{e&&O(u=e.promise)?u.call(e).done(t).fail(i):e&&O(u=e.then)?u.call(e,t,i):t.apply(void 0,[e].slice(o))}catch(p){i.apply(void 0,[p])}}a.Callbacks=function(e){e=typeof e=="string"?function(P){var D={};return a.each(P.match(mt)||[],function(E,L){D[L]=!0}),D}(e):a.extend({},e);var t,i,o,u,p=[],h=[],x=-1,C=function(){for(u=u||e.once,o=t=!0;h.length;x=-1)for(i=h.shift();++x<p.length;)p[x].apply(i[0],i[1])===!1&&e.stopOnFalse&&(x=p.length,i=!1);e.memory||(i=!1),t=!1,u&&(p=i?[]:"")},j={add:function(){return p&&(i&&!t&&(x=p.length-1,h.push(i)),function P(D){a.each(D,function(E,L){O(L)?e.unique&&j.has(L)||p.push(L):L&&L.length&&be(L)!=="string"&&P(L)})}(arguments),i&&!t&&C()),this},remove:function(){return a.each(arguments,function(P,D){for(var E;(E=a.inArray(D,p,E))>-1;)p.splice(E,1),E<=x&&x--}),this},has:function(P){return P?a.inArray(P,p)>-1:p.length>0},empty:function(){return p&&(p=[]),this},disable:function(){return u=h=[],p=i="",this},disabled:function(){return!p},lock:function(){return u=h=[],i||t||(p=i=""),this},locked:function(){return!!u},fireWith:function(P,D){return u||(D=[P,(D=D||[]).slice?D.slice():D],h.push(D),t||C()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!o}};return j},a.extend({Deferred:function(e){var t=[["notify","progress",a.Callbacks("memory"),a.Callbacks("memory"),2],["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),0,"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return u.done(arguments).fail(arguments),this},catch:function(p){return o.then(null,p)},pipe:function(){var p=arguments;return a.Deferred(function(h){a.each(t,function(x,C){var j=O(p[C[4]])&&p[C[4]];u[C[1]](function(){var P=j&&j.apply(this,arguments);P&&O(P.promise)?P.promise().progress(h.notify).done(h.resolve).fail(h.reject):h[C[0]+"With"](this,j?[P]:arguments)})}),p=null}).promise()},then:function(p,h,x){var C=0;function j(P,D,E,L){return function(){var W=this,G=arguments,V=function(){var Ue,gt;if(!(P<C)){if((Ue=E.apply(W,G))===D.promise())throw new TypeError("Thenable self-resolution");gt=Ue&&(typeof Ue=="object"||typeof Ue=="function")&&Ue.then,O(gt)?L?gt.call(Ue,j(C,D,qt,L),j(C,D,ir,L)):(C++,gt.call(Ue,j(C,D,qt,L),j(C,D,ir,L),j(C,D,qt,D.notifyWith))):(E!==qt&&(W=void 0,G=[Ue]),(L||D.resolveWith)(W,G))}},Ee=L?V:function(){try{V()}catch(Ue){a.Deferred.exceptionHook&&a.Deferred.exceptionHook(Ue,Ee.stackTrace),P+1>=C&&(E!==ir&&(W=void 0,G=[Ue]),D.rejectWith(W,G))}};P?Ee():(a.Deferred.getStackHook&&(Ee.stackTrace=a.Deferred.getStackHook()),N.setTimeout(Ee))}}return a.Deferred(function(P){t[0][3].add(j(0,P,O(x)?x:qt,P.notifyWith)),t[1][3].add(j(0,P,O(p)?p:qt)),t[2][3].add(j(0,P,O(h)?h:ir))}).promise()},promise:function(p){return p!=null?a.extend(p,o):o}},u={};return a.each(t,function(p,h){var x=h[2],C=h[5];o[h[1]]=x.add,C&&x.add(function(){i=C},t[3-p][2].disable,t[3-p][3].disable,t[0][2].lock,t[0][3].lock),x.add(h[3].fire),u[h[0]]=function(){return u[h[0]+"With"](this===u?void 0:this,arguments),this},u[h[0]+"With"]=x.fireWith}),o.promise(u),e&&e.call(u,u),u},when:function(e){var t=arguments.length,i=t,o=Array(i),u=me.call(arguments),p=a.Deferred(),h=function(x){return function(C){o[x]=this,u[x]=arguments.length>1?me.call(arguments):C,--t||p.resolveWith(o,u)}};if(t<=1&&(gr(e,p.done(h(i)).resolve,p.reject,!t),p.state()==="pending"||O(u[i]&&u[i].then)))return p.then();for(;i--;)gr(u[i],h(i),p.reject);return p.promise()}});var Sr=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;a.Deferred.exceptionHook=function(e,t){N.console&&N.console.warn&&e&&Sr.test(e.name)&&N.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},a.readyException=function(e){N.setTimeout(function(){throw e})};var or=a.Deferred();function Z(){$.removeEventListener("DOMContentLoaded",Z),N.removeEventListener("load",Z),a.ready()}a.fn.ready=function(e){return or.then(e).catch(function(t){a.readyException(t)}),this},a.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--a.readyWait:a.isReady)||(a.isReady=!0,e!==!0&&--a.readyWait>0||or.resolveWith($,[a]))}}),a.ready.then=or.then,$.readyState==="complete"||$.readyState!=="loading"&&!$.documentElement.doScroll?N.setTimeout(a.ready):($.addEventListener("DOMContentLoaded",Z),N.addEventListener("load",Z));var Re=function(e,t,i,o,u,p,h){var x=0,C=e.length,j=i==null;if(be(i)==="object")for(x in u=!0,i)Re(e,t,x,i[x],!0,p,h);else if(o!==void 0&&(u=!0,O(o)||(h=!0),j&&(h?(t.call(e,o),t=null):(j=t,t=function(P,D,E){return j.call(a(P),E)})),t))for(;x<C;x++)t(e[x],i,h?o:o.call(e[x],x,t(e[x],i)));return u?e:j?t.call(e):C?t(e[0],i):p},Er=/^-ms-/,qe=/-([a-z])/g;function ct(e,t){return t.toUpperCase()}function S(e){return e.replace(Er,"ms-").replace(qe,ct)}var ee=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function Me(){this.expando=a.expando+Me.uid++}Me.uid=1,Me.prototype={cache:function(e){var t=e[this.expando];return t||(t={},ee(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,i){var o,u=this.cache(e);if(typeof t=="string")u[S(t)]=i;else for(o in t)u[S(o)]=t[o];return u},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][S(t)]},access:function(e,t,i){return t===void 0||t&&typeof t=="string"&&i===void 0?this.get(e,t):(this.set(e,t,i),i!==void 0?i:t)},remove:function(e,t){var i,o=e[this.expando];if(o!==void 0){if(t!==void 0)for(i=(t=Array.isArray(t)?t.map(S):(t=S(t))in o?[t]:t.match(mt)||[]).length;i--;)delete o[t[i]];(t===void 0||a.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!a.isEmptyObject(t)}};var X=new Me,Ve=new Me,It=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Nt=/[A-Z]/g;function br(e,t,i){var o;if(i===void 0&&e.nodeType===1)if(o="data-"+t.replace(Nt,"-$&").toLowerCase(),typeof(i=e.getAttribute(o))=="string"){try{i=function(u){return u==="true"||u!=="false"&&(u==="null"?null:u===+u+""?+u:It.test(u)?JSON.parse(u):u)}(i)}catch{}Ve.set(e,t,i)}else i=void 0;return i}a.extend({hasData:function(e){return Ve.hasData(e)||X.hasData(e)},data:function(e,t,i){return Ve.access(e,t,i)},removeData:function(e,t){Ve.remove(e,t)},_data:function(e,t,i){return X.access(e,t,i)},_removeData:function(e,t){X.remove(e,t)}}),a.fn.extend({data:function(e,t){var i,o,u,p=this[0],h=p&&p.attributes;if(e===void 0){if(this.length&&(u=Ve.get(p),p.nodeType===1&&!X.get(p,"hasDataAttrs"))){for(i=h.length;i--;)h[i]&&(o=h[i].name).indexOf("data-")===0&&(o=S(o.slice(5)),br(p,o,u[o]));X.set(p,"hasDataAttrs",!0)}return u}return typeof e=="object"?this.each(function(){Ve.set(this,e)}):Re(this,function(x){var C;if(p&&x===void 0)return(C=Ve.get(p,e))!==void 0||(C=br(p,e))!==void 0?C:void 0;this.each(function(){Ve.set(this,e,x)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ve.remove(this,e)})}}),a.extend({queue:function(e,t,i){var o;if(e)return t=(t||"fx")+"queue",o=X.get(e,t),i&&(!o||Array.isArray(i)?o=X.access(e,t,a.makeArray(i)):o.push(i)),o||[]},dequeue:function(e,t){t=t||"fx";var i=a.queue(e,t),o=i.length,u=i.shift(),p=a._queueHooks(e,t);u==="inprogress"&&(u=i.shift(),o--),u&&(t==="fx"&&i.unshift("inprogress"),delete p.stop,u.call(e,function(){a.dequeue(e,t)},p)),!o&&p&&p.empty.fire()},_queueHooks:function(e,t){var i=t+"queueHooks";return X.get(e,i)||X.access(e,i,{empty:a.Callbacks("once memory").add(function(){X.remove(e,[t+"queue",i])})})}}),a.fn.extend({queue:function(e,t){var i=2;return typeof e!="string"&&(t=e,e="fx",i--),arguments.length<i?a.queue(this[0],e):t===void 0?this:this.each(function(){var o=a.queue(this,e,t);a._queueHooks(this,e),e==="fx"&&o[0]!=="inprogress"&&a.dequeue(this,e)})},dequeue:function(e){return this.each(function(){a.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var i,o=1,u=a.Deferred(),p=this,h=this.length,x=function(){--o||u.resolveWith(p,[p])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";h--;)(i=X.get(p[h],e+"queueHooks"))&&i.empty&&(o++,i.empty.add(x));return x(),u.promise(t)}});var Lr=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,jt=new RegExp("^(?:([+-])=|)("+Lr+")([a-z%]*)$","i"),ft=["Top","Right","Bottom","Left"],Dt=$.documentElement,Ft=function(e){return a.contains(e.ownerDocument,e)},Or={composed:!0};Dt.getRootNode&&(Ft=function(e){return a.contains(e.ownerDocument,e)||e.getRootNode(Or)===e.ownerDocument});var it=function(e,t){return(e=t||e).style.display==="none"||e.style.display===""&&Ft(e)&&a.css(e,"display")==="none"};function St(e,t,i,o){var u,p,h=20,x=o?function(){return o.cur()}:function(){return a.css(e,t,"")},C=x(),j=i&&i[3]||(a.cssNumber[t]?"":"px"),P=e.nodeType&&(a.cssNumber[t]||j!=="px"&&+C)&&jt.exec(a.css(e,t));if(P&&P[3]!==j){for(C/=2,j=j||P[3],P=+C||1;h--;)a.style(e,t,P+j),(1-p)*(1-(p=x()/C||.5))<=0&&(h=0),P/=p;P*=2,a.style(e,t,P+j),i=i||[]}return i&&(P=+P||+C||0,u=i[1]?P+(i[1]+1)*i[2]:+i[2],o&&(o.unit=j,o.start=P,o.end=u)),u}var ar={};function Bt(e){var t,i=e.ownerDocument,o=e.nodeName,u=ar[o];return u||(t=i.body.appendChild(i.createElement(o)),u=a.css(t,"display"),t.parentNode.removeChild(t),u==="none"&&(u="block"),ar[o]=u,u)}function Xt(e,t){for(var i,o,u=[],p=0,h=e.length;p<h;p++)(o=e[p]).style&&(i=o.style.display,t?(i==="none"&&(u[p]=X.get(o,"display")||null,u[p]||(o.style.display="")),o.style.display===""&&it(o)&&(u[p]=Bt(o))):i!=="none"&&(u[p]="none",X.set(o,"display",i)));for(p=0;p<h;p++)u[p]!=null&&(e[p].style.display=u[p]);return e}a.fn.extend({show:function(){return Xt(this,!0)},hide:function(){return Xt(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){it(this)?a(this).show():a(this).hide()})}});var Ht,sr,Kt=/^(?:checkbox|radio)$/i,vr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,xr=/^$|^module$|\/(?:java|ecma)script/i;Ht=$.createDocumentFragment().appendChild($.createElement("div")),(sr=$.createElement("input")).setAttribute("type","radio"),sr.setAttribute("checked","checked"),sr.setAttribute("name","t"),Ht.appendChild(sr),B.checkClone=Ht.cloneNode(!0).cloneNode(!0).lastChild.checked,Ht.innerHTML="<textarea>x</textarea>",B.noCloneChecked=!!Ht.cloneNode(!0).lastChild.defaultValue,Ht.innerHTML="<option></option>",B.option=!!Ht.lastChild;var je={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function Ne(e,t){var i;return i=e.getElementsByTagName!==void 0?e.getElementsByTagName(t||"*"):e.querySelectorAll!==void 0?e.querySelectorAll(t||"*"):[],t===void 0||t&&Qe(e,t)?a.merge([e],i):i}function Gt(e,t){for(var i=0,o=e.length;i<o;i++)X.set(e[i],"globalEval",!t||X.get(t[i],"globalEval"))}je.tbody=je.tfoot=je.colgroup=je.caption=je.thead,je.th=je.td,B.option||(je.optgroup=je.option=[1,"<select multiple='multiple'>","</select>"]);var Xr=/<|&#?\w+;/;function Ar(e,t,i,o,u){for(var p,h,x,C,j,P,D=t.createDocumentFragment(),E=[],L=0,W=e.length;L<W;L++)if((p=e[L])||p===0)if(be(p)==="object")a.merge(E,p.nodeType?[p]:p);else if(Xr.test(p)){for(h=h||D.appendChild(t.createElement("div")),x=(vr.exec(p)||["",""])[1].toLowerCase(),C=je[x]||je._default,h.innerHTML=C[1]+a.htmlPrefilter(p)+C[2],P=C[0];P--;)h=h.lastChild;a.merge(E,h.childNodes),(h=D.firstChild).textContent=""}else E.push(t.createTextNode(p));for(D.textContent="",L=0;p=E[L++];)if(o&&a.inArray(p,o)>-1)u&&u.push(p);else if(j=Ft(p),h=Ne(D.appendChild(p),"script"),j&&Gt(h),i)for(P=0;p=h[P++];)xr.test(p.type||"")&&i.push(p);return D}var Pr=/^([^.]*)(?:\.(.+)|)/;function Se(){return!0}function et(){return!1}function wr(e,t){return e===function(){try{return $.activeElement}catch{}}()==(t==="focus")}function yt(e,t,i,o,u,p){var h,x;if(typeof t=="object"){for(x in typeof i!="string"&&(o=o||i,i=void 0),t)yt(e,x,i,o,t[x],p);return e}if(o==null&&u==null?(u=i,o=i=void 0):u==null&&(typeof i=="string"?(u=o,o=void 0):(u=o,o=i,i=void 0)),u===!1)u=et;else if(!u)return e;return p===1&&(h=u,u=function(C){return a().off(C),h.apply(this,arguments)},u.guid=h.guid||(h.guid=a.guid++)),e.each(function(){a.event.add(this,t,u,o,i)})}function lr(e,t,i){i?(X.set(e,t,!1),a.event.add(e,t,{namespace:!1,handler:function(o){var u,p,h=X.get(this,t);if(1&o.isTrigger&&this[t]){if(h.length)(a.event.special[t]||{}).delegateType&&o.stopPropagation();else if(h=me.call(arguments),X.set(this,t,h),u=i(this,t),this[t](),h!==(p=X.get(this,t))||u?X.set(this,t,!1):p={},h!==p)return o.stopImmediatePropagation(),o.preventDefault(),p&&p.value}else h.length&&(X.set(this,t,{value:a.event.trigger(a.extend(h[0],a.Event.prototype),h.slice(1),this)}),o.stopImmediatePropagation())}})):X.get(e,t)===void 0&&a.event.add(e,t,Se)}a.event={global:{},add:function(e,t,i,o,u){var p,h,x,C,j,P,D,E,L,W,G,V=X.get(e);if(ee(e))for(i.handler&&(i=(p=i).handler,u=p.selector),u&&a.find.matchesSelector(Dt,u),i.guid||(i.guid=a.guid++),(C=V.events)||(C=V.events=Object.create(null)),(h=V.handle)||(h=V.handle=function(Ee){return a!==void 0&&a.event.triggered!==Ee.type?a.event.dispatch.apply(e,arguments):void 0}),j=(t=(t||"").match(mt)||[""]).length;j--;)L=G=(x=Pr.exec(t[j])||[])[1],W=(x[2]||"").split(".").sort(),L&&(D=a.event.special[L]||{},L=(u?D.delegateType:D.bindType)||L,D=a.event.special[L]||{},P=a.extend({type:L,origType:G,data:o,handler:i,guid:i.guid,selector:u,needsContext:u&&a.expr.match.needsContext.test(u),namespace:W.join(".")},p),(E=C[L])||((E=C[L]=[]).delegateCount=0,D.setup&&D.setup.call(e,o,W,h)!==!1||e.addEventListener&&e.addEventListener(L,h)),D.add&&(D.add.call(e,P),P.handler.guid||(P.handler.guid=i.guid)),u?E.splice(E.delegateCount++,0,P):E.push(P),a.event.global[L]=!0)},remove:function(e,t,i,o,u){var p,h,x,C,j,P,D,E,L,W,G,V=X.hasData(e)&&X.get(e);if(V&&(C=V.events)){for(j=(t=(t||"").match(mt)||[""]).length;j--;)if(L=G=(x=Pr.exec(t[j])||[])[1],W=(x[2]||"").split(".").sort(),L){for(D=a.event.special[L]||{},E=C[L=(o?D.delegateType:D.bindType)||L]||[],x=x[2]&&new RegExp("(^|\\.)"+W.join("\\.(?:.*\\.|)")+"(\\.|$)"),h=p=E.length;p--;)P=E[p],!u&&G!==P.origType||i&&i.guid!==P.guid||x&&!x.test(P.namespace)||o&&o!==P.selector&&(o!=="**"||!P.selector)||(E.splice(p,1),P.selector&&E.delegateCount--,D.remove&&D.remove.call(e,P));h&&!E.length&&(D.teardown&&D.teardown.call(e,W,V.handle)!==!1||a.removeEvent(e,L,V.handle),delete C[L])}else for(L in C)a.event.remove(e,L+t[j],i,o,!0);a.isEmptyObject(C)&&X.remove(e,"handle events")}},dispatch:function(e){var t,i,o,u,p,h,x=new Array(arguments.length),C=a.event.fix(e),j=(X.get(this,"events")||Object.create(null))[C.type]||[],P=a.event.special[C.type]||{};for(x[0]=C,t=1;t<arguments.length;t++)x[t]=arguments[t];if(C.delegateTarget=this,!P.preDispatch||P.preDispatch.call(this,C)!==!1){for(h=a.event.handlers.call(this,C,j),t=0;(u=h[t++])&&!C.isPropagationStopped();)for(C.currentTarget=u.elem,i=0;(p=u.handlers[i++])&&!C.isImmediatePropagationStopped();)C.rnamespace&&p.namespace!==!1&&!C.rnamespace.test(p.namespace)||(C.handleObj=p,C.data=p.data,(o=((a.event.special[p.origType]||{}).handle||p.handler).apply(u.elem,x))!==void 0&&(C.result=o)===!1&&(C.preventDefault(),C.stopPropagation()));return P.postDispatch&&P.postDispatch.call(this,C),C.result}},handlers:function(e,t){var i,o,u,p,h,x=[],C=t.delegateCount,j=e.target;if(C&&j.nodeType&&!(e.type==="click"&&e.button>=1)){for(;j!==this;j=j.parentNode||this)if(j.nodeType===1&&(e.type!=="click"||j.disabled!==!0)){for(p=[],h={},i=0;i<C;i++)h[u=(o=t[i]).selector+" "]===void 0&&(h[u]=o.needsContext?a(u,this).index(j)>-1:a.find(u,this,null,[j]).length),h[u]&&p.push(o);p.length&&x.push({elem:j,handlers:p})}}return j=this,C<t.length&&x.push({elem:j,handlers:t.slice(C)}),x},addProp:function(e,t){Object.defineProperty(a.Event.prototype,e,{enumerable:!0,configurable:!0,get:O(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(i){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:i})}})},fix:function(e){return e[a.expando]?e:new a.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Kt.test(t.type)&&t.click&&Qe(t,"input")&&lr(t,"click",Se),!1},trigger:function(e){var t=this||e;return Kt.test(t.type)&&t.click&&Qe(t,"input")&&lr(t,"click"),!0},_default:function(e){var t=e.target;return Kt.test(t.type)&&t.click&&Qe(t,"input")&&X.get(t,"click")||Qe(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},a.removeEvent=function(e,t,i){e.removeEventListener&&e.removeEventListener(t,i)},a.Event=function(e,t){if(!(this instanceof a.Event))return new a.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Se:et,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&a.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[a.expando]=!0},a.Event.prototype={constructor:a.Event,isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Se,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Se,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Se,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},a.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},a.event.addProp),a.each({focus:"focusin",blur:"focusout"},function(e,t){a.event.special[e]={setup:function(){return lr(this,e,wr),!1},trigger:function(){return lr(this,e),!0},_default:function(){return!0},delegateType:t}}),a.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){a.event.special[e]={delegateType:t,bindType:t,handle:function(i){var o,u=this,p=i.relatedTarget,h=i.handleObj;return p&&(p===u||a.contains(u,p))||(i.type=h.origType,o=h.handler.apply(this,arguments),i.type=t),o}}}),a.fn.extend({on:function(e,t,i,o){return yt(this,e,t,i,o)},one:function(e,t,i,o){return yt(this,e,t,i,o,1)},off:function(e,t,i){var o,u;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,a(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof e=="object"){for(u in e)this.off(u,t,e[u]);return this}return t!==!1&&typeof t!="function"||(i=t,t=void 0),i===!1&&(i=et),this.each(function(){a.event.remove(this,e,i,t)})}});var Dr=/<script|<style|<link/i,Qr=/checked\s*(?:[^=]|=\s*.checked.)/i,Jt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function zt(e,t){return Qe(e,"table")&&Qe(t.nodeType!==11?t:t.firstChild,"tr")&&a(e).children("tbody")[0]||e}function cr(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function Zt(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function kr(e,t){var i,o,u,p,h,x;if(t.nodeType===1){if(X.hasData(e)&&(x=X.get(e).events))for(u in X.remove(t,"handle events"),x)for(i=0,o=x[u].length;i<o;i++)a.event.add(t,u,x[u][i]);Ve.hasData(e)&&(p=Ve.access(e),h=a.extend({},p),Ve.set(t,h))}}function Rr(e,t){var i=t.nodeName.toLowerCase();i==="input"&&Kt.test(e.type)?t.checked=e.checked:i!=="input"&&i!=="textarea"||(t.defaultValue=e.defaultValue)}function Wt(e,t,i,o){t=tt(t);var u,p,h,x,C,j,P=0,D=e.length,E=D-1,L=t[0],W=O(L);if(W||D>1&&typeof L=="string"&&!B.checkClone&&Qr.test(L))return e.each(function(G){var V=e.eq(G);W&&(t[0]=L.call(this,G,V.html())),Wt(V,t,i,o)});if(D&&(p=(u=Ar(t,e[0].ownerDocument,!1,e,o)).firstChild,u.childNodes.length===1&&(u=p),p||o)){for(x=(h=a.map(Ne(u,"script"),cr)).length;P<D;P++)C=u,P!==E&&(C=a.clone(C,!0,!0),x&&a.merge(h,Ne(C,"script"))),i.call(e[P],C,P);if(x)for(j=h[h.length-1].ownerDocument,a.map(h,Zt),P=0;P<x;P++)C=h[P],xr.test(C.type||"")&&!X.access(C,"globalEval")&&a.contains(j,C)&&(C.src&&(C.type||"").toLowerCase()!=="module"?a._evalUrl&&!C.noModule&&a._evalUrl(C.src,{nonce:C.nonce||C.getAttribute("nonce")},j):Pe(C.textContent.replace(Jt,""),C,j))}return e}function ur(e,t,i){for(var o,u=t?a.filter(t,e):e,p=0;(o=u[p])!=null;p++)i||o.nodeType!==1||a.cleanData(Ne(o)),o.parentNode&&(i&&Ft(o)&&Gt(Ne(o,"script")),o.parentNode.removeChild(o));return e}a.extend({htmlPrefilter:function(e){return e},clone:function(e,t,i){var o,u,p,h,x=e.cloneNode(!0),C=Ft(e);if(!(B.noCloneChecked||e.nodeType!==1&&e.nodeType!==11||a.isXMLDoc(e)))for(h=Ne(x),o=0,u=(p=Ne(e)).length;o<u;o++)Rr(p[o],h[o]);if(t)if(i)for(p=p||Ne(e),h=h||Ne(x),o=0,u=p.length;o<u;o++)kr(p[o],h[o]);else kr(e,x);return(h=Ne(x,"script")).length>0&&Gt(h,!C&&Ne(e,"script")),x},cleanData:function(e){for(var t,i,o,u=a.event.special,p=0;(i=e[p])!==void 0;p++)if(ee(i)){if(t=i[X.expando]){if(t.events)for(o in t.events)u[o]?a.event.remove(i,o):a.removeEvent(i,o,t.handle);i[X.expando]=void 0}i[Ve.expando]&&(i[Ve.expando]=void 0)}}}),a.fn.extend({detach:function(e){return ur(this,e,!0)},remove:function(e){return ur(this,e)},text:function(e){return Re(this,function(t){return t===void 0?a.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=t)})},null,e,arguments.length)},append:function(){return Wt(this,arguments,function(e){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||zt(this,e).appendChild(e)})},prepend:function(){return Wt(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=zt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Wt(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Wt(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(a.cleanData(Ne(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e!=null&&e,t=t??e,this.map(function(){return a.clone(this,e,t)})},html:function(e){return Re(this,function(t){var i=this[0]||{},o=0,u=this.length;if(t===void 0&&i.nodeType===1)return i.innerHTML;if(typeof t=="string"&&!Dr.test(t)&&!je[(vr.exec(t)||["",""])[1].toLowerCase()]){t=a.htmlPrefilter(t);try{for(;o<u;o++)(i=this[o]||{}).nodeType===1&&(a.cleanData(Ne(i,!1)),i.innerHTML=t);i=0}catch{}}i&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return Wt(this,arguments,function(t){var i=this.parentNode;a.inArray(this,e)<0&&(a.cleanData(Ne(this)),i&&i.replaceChild(t,this))},e)}}),a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){a.fn[e]=function(i){for(var o,u=[],p=a(i),h=p.length-1,x=0;x<=h;x++)o=x===h?this:this.clone(!0),a(p[x])[t](o),We.apply(u,o.get());return this.pushStack(u)}});var dr=new RegExp("^("+Lr+")(?!px)[a-z%]+$","i"),c=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=N),t.getComputedStyle(e)},d=function(e,t,i){var o,u,p={};for(u in t)p[u]=e.style[u],e.style[u]=t[u];for(u in o=i.call(e),t)e.style[u]=p[u];return o},r=new RegExp(ft.join("|"),"i");function n(e,t,i){var o,u,p,h,x=e.style;return(i=i||c(e))&&((h=i.getPropertyValue(t)||i[t])!==""||Ft(e)||(h=a.style(e,t)),!B.pixelBoxStyles()&&dr.test(h)&&r.test(t)&&(o=x.width,u=x.minWidth,p=x.maxWidth,x.minWidth=x.maxWidth=x.width=h,h=i.width,x.width=o,x.minWidth=u,x.maxWidth=p)),h!==void 0?h+"":h}function l(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}(function(){function e(){if(j){C.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",j.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Dt.appendChild(C).appendChild(j);var P=N.getComputedStyle(j);i=P.top!=="1%",x=t(P.marginLeft)===12,j.style.right="60%",p=t(P.right)===36,o=t(P.width)===36,j.style.position="absolute",u=t(j.offsetWidth/3)===12,Dt.removeChild(C),j=null}}function t(P){return Math.round(parseFloat(P))}var i,o,u,p,h,x,C=$.createElement("div"),j=$.createElement("div");j.style&&(j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",B.clearCloneStyle=j.style.backgroundClip==="content-box",a.extend(B,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),p},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),x},scrollboxSize:function(){return e(),u},reliableTrDimensions:function(){var P,D,E,L;return h==null&&(P=$.createElement("table"),D=$.createElement("tr"),E=$.createElement("div"),P.style.cssText="position:absolute;left:-11111px;border-collapse:separate",D.style.cssText="border:1px solid",D.style.height="1px",E.style.height="9px",E.style.display="block",Dt.appendChild(P).appendChild(D).appendChild(E),L=N.getComputedStyle(D),h=parseInt(L.height,10)+parseInt(L.borderTopWidth,10)+parseInt(L.borderBottomWidth,10)===D.offsetHeight,Dt.removeChild(P)),h}}))})();var y=["Webkit","Moz","ms"],v=$.createElement("div").style,k={};function w(e){return a.cssProps[e]||k[e]||(e in v?e:k[e]=function(t){for(var i=t[0].toUpperCase()+t.slice(1),o=y.length;o--;)if((t=y[o]+i)in v)return t}(e)||e)}var A=/^(none|table(?!-c[ea]).+)/,I=/^--/,U={position:"absolute",visibility:"hidden",display:"block"},Y={letterSpacing:"0",fontWeight:"400"};function ue(e,t,i){var o=jt.exec(t);return o?Math.max(0,o[2]-(i||0))+(o[3]||"px"):t}function z(e,t,i,o,u,p){var h=t==="width"?1:0,x=0,C=0;if(i===(o?"border":"content"))return 0;for(;h<4;h+=2)i==="margin"&&(C+=a.css(e,i+ft[h],!0,u)),o?(i==="content"&&(C-=a.css(e,"padding"+ft[h],!0,u)),i!=="margin"&&(C-=a.css(e,"border"+ft[h]+"Width",!0,u))):(C+=a.css(e,"padding"+ft[h],!0,u),i!=="padding"?C+=a.css(e,"border"+ft[h]+"Width",!0,u):x+=a.css(e,"border"+ft[h]+"Width",!0,u));return!o&&p>=0&&(C+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-p-C-x-.5))||0),C}function fe(e,t,i){var o=c(e),u=(!B.boxSizingReliable()||i)&&a.css(e,"boxSizing",!1,o)==="border-box",p=u,h=n(e,t,o),x="offset"+t[0].toUpperCase()+t.slice(1);if(dr.test(h)){if(!i)return h;h="auto"}return(!B.boxSizingReliable()&&u||!B.reliableTrDimensions()&&Qe(e,"tr")||h==="auto"||!parseFloat(h)&&a.css(e,"display",!1,o)==="inline")&&e.getClientRects().length&&(u=a.css(e,"boxSizing",!1,o)==="border-box",(p=x in e)&&(h=e[x])),(h=parseFloat(h)||0)+z(e,t,i||(u?"border":"content"),p,o,h)+"px"}function ie(e,t,i,o,u){return new ie.prototype.init(e,t,i,o,u)}a.extend({cssHooks:{opacity:{get:function(e,t){if(t){var i=n(e,"opacity");return i===""?"1":i}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,i,o){if(e&&e.nodeType!==3&&e.nodeType!==8&&e.style){var u,p,h,x=S(t),C=I.test(t),j=e.style;if(C||(t=w(x)),h=a.cssHooks[t]||a.cssHooks[x],i===void 0)return h&&"get"in h&&(u=h.get(e,!1,o))!==void 0?u:j[t];(p=typeof i)=="string"&&(u=jt.exec(i))&&u[1]&&(i=St(e,t,u),p="number"),i!=null&&i==i&&(p!=="number"||C||(i+=u&&u[3]||(a.cssNumber[x]?"":"px")),B.clearCloneStyle||i!==""||t.indexOf("background")!==0||(j[t]="inherit"),h&&"set"in h&&(i=h.set(e,i,o))===void 0||(C?j.setProperty(t,i):j[t]=i))}},css:function(e,t,i,o){var u,p,h,x=S(t);return I.test(t)||(t=w(x)),(h=a.cssHooks[t]||a.cssHooks[x])&&"get"in h&&(u=h.get(e,!0,i)),u===void 0&&(u=n(e,t,o)),u==="normal"&&t in Y&&(u=Y[t]),i===""||i?(p=parseFloat(u),i===!0||isFinite(p)?p||0:u):u}}),a.each(["height","width"],function(e,t){a.cssHooks[t]={get:function(i,o,u){if(o)return!A.test(a.css(i,"display"))||i.getClientRects().length&&i.getBoundingClientRect().width?fe(i,t,u):d(i,U,function(){return fe(i,t,u)})},set:function(i,o,u){var p,h=c(i),x=!B.scrollboxSize()&&h.position==="absolute",C=(x||u)&&a.css(i,"boxSizing",!1,h)==="border-box",j=u?z(i,t,u,C,h):0;return C&&x&&(j-=Math.ceil(i["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(h[t])-z(i,t,"border",!1,h)-.5)),j&&(p=jt.exec(o))&&(p[3]||"px")!=="px"&&(i.style[t]=o,o=a.css(i,t)),ue(0,o,j)}}}),a.cssHooks.marginLeft=l(B.reliableMarginLeft,function(e,t){if(t)return(parseFloat(n(e,"marginLeft"))||e.getBoundingClientRect().left-d(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),a.each({margin:"",padding:"",border:"Width"},function(e,t){a.cssHooks[e+t]={expand:function(i){for(var o=0,u={},p=typeof i=="string"?i.split(" "):[i];o<4;o++)u[e+ft[o]+t]=p[o]||p[o-2]||p[0];return u}},e!=="margin"&&(a.cssHooks[e+t].set=ue)}),a.fn.extend({css:function(e,t){return Re(this,function(i,o,u){var p,h,x={},C=0;if(Array.isArray(o)){for(p=c(i),h=o.length;C<h;C++)x[o[C]]=a.css(i,o[C],!1,p);return x}return u!==void 0?a.style(i,o,u):a.css(i,o)},e,t,arguments.length>1)}}),a.Tween=ie,ie.prototype={constructor:ie,init:function(e,t,i,o,u,p){this.elem=e,this.prop=i,this.easing=u||a.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=p||(a.cssNumber[i]?"":"px")},cur:function(){var e=ie.propHooks[this.prop];return e&&e.get?e.get(this):ie.propHooks._default.get(this)},run:function(e){var t,i=ie.propHooks[this.prop];return this.options.duration?this.pos=t=a.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):ie.propHooks._default.set(this),this}},ie.prototype.init.prototype=ie.prototype,ie.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=a.css(e.elem,e.prop,""))&&t!=="auto"?t:0},set:function(e){a.fx.step[e.prop]?a.fx.step[e.prop](e):e.elem.nodeType!==1||!a.cssHooks[e.prop]&&e.elem.style[w(e.prop)]==null?e.elem[e.prop]=e.now:a.style(e.elem,e.prop,e.now+e.unit)}}},ie.propHooks.scrollTop=ie.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},a.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},a.fx=ie.prototype.init,a.fx.step={};var Te,Ke,Yr=/^(?:toggle|show|hide)$/,pr=/queueHooks$/;function Yt(){Ke&&($.hidden===!1&&N.requestAnimationFrame?N.requestAnimationFrame(Yt):N.setTimeout(Yt,a.fx.interval),a.fx.tick())}function dn(){return N.setTimeout(function(){Te=void 0}),Te=Date.now()}function Mr(e,t){var i,o=0,u={height:e};for(t=t?1:0;o<4;o+=2-t)u["margin"+(i=ft[o])]=u["padding"+i]=e;return t&&(u.opacity=u.width=e),u}function pn(e,t,i){for(var o,u=(Et.tweeners[t]||[]).concat(Et.tweeners["*"]),p=0,h=u.length;p<h;p++)if(o=u[p].call(i,t,e))return o}function Et(e,t,i){var o,u,p=0,h=Et.prefilters.length,x=a.Deferred().always(function(){delete C.elem}),C=function(){if(u)return!1;for(var D=Te||dn(),E=Math.max(0,j.startTime+j.duration-D),L=1-(E/j.duration||0),W=0,G=j.tweens.length;W<G;W++)j.tweens[W].run(L);return x.notifyWith(e,[j,L,E]),L<1&&G?E:(G||x.notifyWith(e,[j,1,0]),x.resolveWith(e,[j]),!1)},j=x.promise({elem:e,props:a.extend({},t),opts:a.extend(!0,{specialEasing:{},easing:a.easing._default},i),originalProperties:t,originalOptions:i,startTime:Te||dn(),duration:i.duration,tweens:[],createTween:function(D,E){var L=a.Tween(e,j.opts,D,E,j.opts.specialEasing[D]||j.opts.easing);return j.tweens.push(L),L},stop:function(D){var E=0,L=D?j.tweens.length:0;if(u)return this;for(u=!0;E<L;E++)j.tweens[E].run(1);return D?(x.notifyWith(e,[j,1,0]),x.resolveWith(e,[j,D])):x.rejectWith(e,[j,D]),this}}),P=j.props;for(function(D,E){var L,W,G,V,Ee;for(L in D)if(G=E[W=S(L)],V=D[L],Array.isArray(V)&&(G=V[1],V=D[L]=V[0]),L!==W&&(D[W]=V,delete D[L]),(Ee=a.cssHooks[W])&&"expand"in Ee)for(L in V=Ee.expand(V),delete D[W],V)L in D||(D[L]=V[L],E[L]=G);else E[W]=G}(P,j.opts.specialEasing);p<h;p++)if(o=Et.prefilters[p].call(j,e,P,j.opts))return O(o.stop)&&(a._queueHooks(j.elem,j.opts.queue).stop=o.stop.bind(o)),o;return a.map(P,pn,j),O(j.opts.start)&&j.opts.start.call(e,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),a.fx.timer(a.extend(C,{elem:e,anim:j,queue:j.opts.queue})),j}a.Animation=a.extend(Et,{tweeners:{"*":[function(e,t){var i=this.createTween(e,t);return St(i.elem,e,jt.exec(t),i),i}]},tweener:function(e,t){O(e)?(t=e,e=["*"]):e=e.match(mt);for(var i,o=0,u=e.length;o<u;o++)i=e[o],Et.tweeners[i]=Et.tweeners[i]||[],Et.tweeners[i].unshift(t)},prefilters:[function(e,t,i){var o,u,p,h,x,C,j,P,D="width"in t||"height"in t,E=this,L={},W=e.style,G=e.nodeType&&it(e),V=X.get(e,"fxshow");for(o in i.queue||((h=a._queueHooks(e,"fx")).unqueued==null&&(h.unqueued=0,x=h.empty.fire,h.empty.fire=function(){h.unqueued||x()}),h.unqueued++,E.always(function(){E.always(function(){h.unqueued--,a.queue(e,"fx").length||h.empty.fire()})})),t)if(u=t[o],Yr.test(u)){if(delete t[o],p=p||u==="toggle",u===(G?"hide":"show")){if(u!=="show"||!V||V[o]===void 0)continue;G=!0}L[o]=V&&V[o]||a.style(e,o)}if((C=!a.isEmptyObject(t))||!a.isEmptyObject(L))for(o in D&&e.nodeType===1&&(i.overflow=[W.overflow,W.overflowX,W.overflowY],(j=V&&V.display)==null&&(j=X.get(e,"display")),(P=a.css(e,"display"))==="none"&&(j?P=j:(Xt([e],!0),j=e.style.display||j,P=a.css(e,"display"),Xt([e]))),(P==="inline"||P==="inline-block"&&j!=null)&&a.css(e,"float")==="none"&&(C||(E.done(function(){W.display=j}),j==null&&(P=W.display,j=P==="none"?"":P)),W.display="inline-block")),i.overflow&&(W.overflow="hidden",E.always(function(){W.overflow=i.overflow[0],W.overflowX=i.overflow[1],W.overflowY=i.overflow[2]})),C=!1,L)C||(V?"hidden"in V&&(G=V.hidden):V=X.access(e,"fxshow",{display:j}),p&&(V.hidden=!G),G&&Xt([e],!0),E.done(function(){for(o in G||Xt([e]),X.remove(e,"fxshow"),L)a.style(e,o,L[o])})),C=pn(G?V[o]:0,o,E),o in V||(V[o]=C.start,G&&(C.end=C.start,C.start=0))}],prefilter:function(e,t){t?Et.prefilters.unshift(e):Et.prefilters.push(e)}}),a.speed=function(e,t,i){var o=e&&typeof e=="object"?a.extend({},e):{complete:i||!i&&t||O(e)&&e,duration:e,easing:i&&t||t&&!O(t)&&t};return a.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in a.fx.speeds?o.duration=a.fx.speeds[o.duration]:o.duration=a.fx.speeds._default),o.queue!=null&&o.queue!==!0||(o.queue="fx"),o.old=o.complete,o.complete=function(){O(o.old)&&o.old.call(this),o.queue&&a.dequeue(this,o.queue)},o},a.fn.extend({fadeTo:function(e,t,i,o){return this.filter(it).css("opacity",0).show().end().animate({opacity:t},e,i,o)},animate:function(e,t,i,o){var u=a.isEmptyObject(e),p=a.speed(t,i,o),h=function(){var x=Et(this,a.extend({},e),p);(u||X.get(this,"finish"))&&x.stop(!0)};return h.finish=h,u||p.queue===!1?this.each(h):this.queue(p.queue,h)},stop:function(e,t,i){var o=function(u){var p=u.stop;delete u.stop,p(i)};return typeof e!="string"&&(i=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var u=!0,p=e!=null&&e+"queueHooks",h=a.timers,x=X.get(this);if(p)x[p]&&x[p].stop&&o(x[p]);else for(p in x)x[p]&&x[p].stop&&pr.test(p)&&o(x[p]);for(p=h.length;p--;)h[p].elem!==this||e!=null&&h[p].queue!==e||(h[p].anim.stop(i),u=!1,h.splice(p,1));!u&&i||a.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,i=X.get(this),o=i[e+"queue"],u=i[e+"queueHooks"],p=a.timers,h=o?o.length:0;for(i.finish=!0,a.queue(this,e,[]),u&&u.stop&&u.stop.call(this,!0),t=p.length;t--;)p[t].elem===this&&p[t].queue===e&&(p[t].anim.stop(!0),p.splice(t,1));for(t=0;t<h;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete i.finish})}}),a.each(["toggle","show","hide"],function(e,t){var i=a.fn[t];a.fn[t]=function(o,u,p){return o==null||typeof o=="boolean"?i.apply(this,arguments):this.animate(Mr(t,!0),o,u,p)}}),a.each({slideDown:Mr("show"),slideUp:Mr("hide"),slideToggle:Mr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){a.fn[e]=function(i,o,u){return this.animate(t,i,o,u)}}),a.timers=[],a.fx.tick=function(){var e,t=0,i=a.timers;for(Te=Date.now();t<i.length;t++)(e=i[t])()||i[t]!==e||i.splice(t--,1);i.length||a.fx.stop(),Te=void 0},a.fx.timer=function(e){a.timers.push(e),a.fx.start()},a.fx.interval=13,a.fx.start=function(){Ke||(Ke=!0,Yt())},a.fx.stop=function(){Ke=null},a.fx.speeds={slow:600,fast:200,_default:400},a.fn.delay=function(e,t){return e=a.fx&&a.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(i,o){var u=N.setTimeout(i,e);o.stop=function(){N.clearTimeout(u)}})},function(){var e=$.createElement("input"),t=$.createElement("select").appendChild($.createElement("option"));e.type="checkbox",B.checkOn=e.value!=="",B.optSelected=t.selected,(e=$.createElement("input")).value="t",e.type="radio",B.radioValue=e.value==="t"}();var hn,_r=a.expr.attrHandle;a.fn.extend({attr:function(e,t){return Re(this,a.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){a.removeAttr(this,e)})}}),a.extend({attr:function(e,t,i){var o,u,p=e.nodeType;if(p!==3&&p!==8&&p!==2)return e.getAttribute===void 0?a.prop(e,t,i):(p===1&&a.isXMLDoc(e)||(u=a.attrHooks[t.toLowerCase()]||(a.expr.match.bool.test(t)?hn:void 0)),i!==void 0?i===null?void a.removeAttr(e,t):u&&"set"in u&&(o=u.set(e,i,t))!==void 0?o:(e.setAttribute(t,i+""),i):u&&"get"in u&&(o=u.get(e,t))!==null?o:(o=a.find.attr(e,t))==null?void 0:o)},attrHooks:{type:{set:function(e,t){if(!B.radioValue&&t==="radio"&&Qe(e,"input")){var i=e.value;return e.setAttribute("type",t),i&&(e.value=i),t}}}},removeAttr:function(e,t){var i,o=0,u=t&&t.match(mt);if(u&&e.nodeType===1)for(;i=u[o++];)e.removeAttribute(i)}}),hn={set:function(e,t,i){return t===!1?a.removeAttr(e,i):e.setAttribute(i,i),i}},a.each(a.expr.match.bool.source.match(/\w+/g),function(e,t){var i=_r[t]||a.find.attr;_r[t]=function(o,u,p){var h,x,C=u.toLowerCase();return p||(x=_r[C],_r[C]=h,h=i(o,u,p)!=null?C:null,_r[C]=x),h}});var An=/^(?:input|select|textarea|button)$/i,Pn=/^(?:a|area)$/i;function er(e){return(e.match(mt)||[]).join(" ")}function tr(e){return e.getAttribute&&e.getAttribute("class")||""}function Kr(e){return Array.isArray(e)?e:typeof e=="string"&&e.match(mt)||[]}a.fn.extend({prop:function(e,t){return Re(this,a.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[a.propFix[e]||e]})}}),a.extend({prop:function(e,t,i){var o,u,p=e.nodeType;if(p!==3&&p!==8&&p!==2)return p===1&&a.isXMLDoc(e)||(t=a.propFix[t]||t,u=a.propHooks[t]),i!==void 0?u&&"set"in u&&(o=u.set(e,i,t))!==void 0?o:e[t]=i:u&&"get"in u&&(o=u.get(e,t))!==null?o:e[t]},propHooks:{tabIndex:{get:function(e){var t=a.find.attr(e,"tabindex");return t?parseInt(t,10):An.test(e.nodeName)||Pn.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),B.optSelected||(a.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),a.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){a.propFix[this.toLowerCase()]=this}),a.fn.extend({addClass:function(e){var t,i,o,u,p,h,x,C=0;if(O(e))return this.each(function(j){a(this).addClass(e.call(this,j,tr(this)))});if((t=Kr(e)).length){for(;i=this[C++];)if(u=tr(i),o=i.nodeType===1&&" "+er(u)+" "){for(h=0;p=t[h++];)o.indexOf(" "+p+" ")<0&&(o+=p+" ");u!==(x=er(o))&&i.setAttribute("class",x)}}return this},removeClass:function(e){var t,i,o,u,p,h,x,C=0;if(O(e))return this.each(function(j){a(this).removeClass(e.call(this,j,tr(this)))});if(!arguments.length)return this.attr("class","");if((t=Kr(e)).length){for(;i=this[C++];)if(u=tr(i),o=i.nodeType===1&&" "+er(u)+" "){for(h=0;p=t[h++];)for(;o.indexOf(" "+p+" ")>-1;)o=o.replace(" "+p+" "," ");u!==(x=er(o))&&i.setAttribute("class",x)}}return this},toggleClass:function(e,t){var i=typeof e,o=i==="string"||Array.isArray(e);return typeof t=="boolean"&&o?t?this.addClass(e):this.removeClass(e):O(e)?this.each(function(u){a(this).toggleClass(e.call(this,u,tr(this),t),t)}):this.each(function(){var u,p,h,x;if(o)for(p=0,h=a(this),x=Kr(e);u=x[p++];)h.hasClass(u)?h.removeClass(u):h.addClass(u);else e!==void 0&&i!=="boolean"||((u=tr(this))&&X.set(this,"__className__",u),this.setAttribute&&this.setAttribute("class",u||e===!1?"":X.get(this,"__className__")||""))})},hasClass:function(e){var t,i,o=0;for(t=" "+e+" ";i=this[o++];)if(i.nodeType===1&&(" "+er(tr(i))+" ").indexOf(t)>-1)return!0;return!1}});var Dn=/\r/g;a.fn.extend({val:function(e){var t,i,o,u=this[0];return arguments.length?(o=O(e),this.each(function(p){var h;this.nodeType===1&&((h=o?e.call(this,p,a(this).val()):e)==null?h="":typeof h=="number"?h+="":Array.isArray(h)&&(h=a.map(h,function(x){return x==null?"":x+""})),(t=a.valHooks[this.type]||a.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&t.set(this,h,"value")!==void 0||(this.value=h))})):u?(t=a.valHooks[u.type]||a.valHooks[u.nodeName.toLowerCase()])&&"get"in t&&(i=t.get(u,"value"))!==void 0?i:typeof(i=u.value)=="string"?i.replace(Dn,""):i??"":void 0}}),a.extend({valHooks:{option:{get:function(e){var t=a.find.attr(e,"value");return t??er(a.text(e))}},select:{get:function(e){var t,i,o,u=e.options,p=e.selectedIndex,h=e.type==="select-one",x=h?null:[],C=h?p+1:u.length;for(o=p<0?C:h?p:0;o<C;o++)if(((i=u[o]).selected||o===p)&&!i.disabled&&(!i.parentNode.disabled||!Qe(i.parentNode,"optgroup"))){if(t=a(i).val(),h)return t;x.push(t)}return x},set:function(e,t){for(var i,o,u=e.options,p=a.makeArray(t),h=u.length;h--;)((o=u[h]).selected=a.inArray(a.valHooks.option.get(o),p)>-1)&&(i=!0);return i||(e.selectedIndex=-1),p}}}}),a.each(["radio","checkbox"],function(){a.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=a.inArray(a(e).val(),t)>-1}},B.checkOn||(a.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})}),B.focusin="onfocusin"in N;var mn=/^(?:focusinfocus|focusoutblur)$/,fn=function(e){e.stopPropagation()};a.extend(a.event,{trigger:function(e,t,i,o){var u,p,h,x,C,j,P,D,E=[i||$],L=Je.call(e,"type")?e.type:e,W=Je.call(e,"namespace")?e.namespace.split("."):[];if(p=D=h=i=i||$,i.nodeType!==3&&i.nodeType!==8&&!mn.test(L+a.event.triggered)&&(L.indexOf(".")>-1&&(W=L.split("."),L=W.shift(),W.sort()),C=L.indexOf(":")<0&&"on"+L,(e=e[a.expando]?e:new a.Event(L,typeof e=="object"&&e)).isTrigger=o?2:3,e.namespace=W.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+W.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),t=t==null?[e]:a.makeArray(t,[e]),P=a.event.special[L]||{},o||!P.trigger||P.trigger.apply(i,t)!==!1)){if(!o&&!P.noBubble&&!f(i)){for(x=P.delegateType||L,mn.test(x+L)||(p=p.parentNode);p;p=p.parentNode)E.push(p),h=p;h===(i.ownerDocument||$)&&E.push(h.defaultView||h.parentWindow||N)}for(u=0;(p=E[u++])&&!e.isPropagationStopped();)D=p,e.type=u>1?x:P.bindType||L,(j=(X.get(p,"events")||Object.create(null))[e.type]&&X.get(p,"handle"))&&j.apply(p,t),(j=C&&p[C])&&j.apply&&ee(p)&&(e.result=j.apply(p,t),e.result===!1&&e.preventDefault());return e.type=L,o||e.isDefaultPrevented()||P._default&&P._default.apply(E.pop(),t)!==!1||!ee(i)||C&&O(i[L])&&!f(i)&&((h=i[C])&&(i[C]=null),a.event.triggered=L,e.isPropagationStopped()&&D.addEventListener(L,fn),i[L](),e.isPropagationStopped()&&D.removeEventListener(L,fn),a.event.triggered=void 0,h&&(i[C]=h)),e.result}},simulate:function(e,t,i){var o=a.extend(new a.Event,i,{type:e,isSimulated:!0});a.event.trigger(o,null,t)}}),a.fn.extend({trigger:function(e,t){return this.each(function(){a.event.trigger(e,t,this)})},triggerHandler:function(e,t){var i=this[0];if(i)return a.event.trigger(e,t,i,!0)}}),B.focusin||a.each({focus:"focusin",blur:"focusout"},function(e,t){var i=function(o){a.event.simulate(t,o.target,a.event.fix(o))};a.event.special[t]={setup:function(){var o=this.ownerDocument||this.document||this,u=X.access(o,t);u||o.addEventListener(e,i,!0),X.access(o,t,(u||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,u=X.access(o,t)-1;u?X.access(o,t,u):(o.removeEventListener(e,i,!0),X.remove(o,t))}}});var Cr=N.location,yn={guid:Date.now()},Gr=/\?/;a.parseXML=function(e){var t,i;if(!e||typeof e!="string")return null;try{t=new N.DOMParser().parseFromString(e,"text/xml")}catch{}return i=t&&t.getElementsByTagName("parsererror")[0],t&&!i||a.error("Invalid XML: "+(i?a.map(i.childNodes,function(o){return o.textContent}).join(`
`):e)),t};var Qn=/\[\]$/,gn=/\r?\n/g,Rn=/^(?:submit|button|image|reset|file)$/i,Mn=/^(?:input|select|textarea|keygen)/i;function Jr(e,t,i,o){var u;if(Array.isArray(t))a.each(t,function(p,h){i||Qn.test(e)?o(e,h):Jr(e+"["+(typeof h=="object"&&h!=null?p:"")+"]",h,i,o)});else if(i||be(t)!=="object")o(e,t);else for(u in t)Jr(e+"["+u+"]",t[u],i,o)}a.param=function(e,t){var i,o=[],u=function(p,h){var x=O(h)?h():h;o[o.length]=encodeURIComponent(p)+"="+encodeURIComponent(x??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!a.isPlainObject(e))a.each(e,function(){u(this.name,this.value)});else for(i in e)Jr(i,e[i],t,u);return o.join("&")},a.fn.extend({serialize:function(){return a.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=a.prop(this,"elements");return e?a.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!a(this).is(":disabled")&&Mn.test(this.nodeName)&&!Rn.test(e)&&(this.checked||!Kt.test(e))}).map(function(e,t){var i=a(this).val();return i==null?null:Array.isArray(i)?a.map(i,function(o){return{name:t.name,value:o.replace(gn,`\r
`)}}):{name:t.name,value:i.replace(gn,`\r
`)}}).get()}});var In=/%20/g,Nn=/#.*$/,Fn=/([?&])_=[^&]*/,Bn=/^(.*?):[ \t]*([^\r\n]*)$/gm,Hn=/^(?:GET|HEAD)$/,zn=/^\/\//,bn={},Zr={},vn="*/".concat("*"),en=$.createElement("a");function xn(e){return function(t,i){typeof t!="string"&&(i=t,t="*");var o,u=0,p=t.toLowerCase().match(mt)||[];if(O(i))for(;o=p[u++];)o[0]==="+"?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(i)):(e[o]=e[o]||[]).push(i)}}function wn(e,t,i,o){var u={},p=e===Zr;function h(x){var C;return u[x]=!0,a.each(e[x]||[],function(j,P){var D=P(t,i,o);return typeof D!="string"||p||u[D]?p?!(C=D):void 0:(t.dataTypes.unshift(D),h(D),!1)}),C}return h(t.dataTypes[0])||!u["*"]&&h("*")}function tn(e,t){var i,o,u=a.ajaxSettings.flatOptions||{};for(i in t)t[i]!==void 0&&((u[i]?e:o||(o={}))[i]=t[i]);return o&&a.extend(!0,e,o),e}en.href=Cr.href,a.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Cr.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Cr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":vn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":a.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?tn(tn(e,a.ajaxSettings),t):tn(a.ajaxSettings,e)},ajaxPrefilter:xn(bn),ajaxTransport:xn(Zr),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var i,o,u,p,h,x,C,j,P,D,E=a.ajaxSetup({},t),L=E.context||E,W=E.context&&(L.nodeType||L.jquery)?a(L):a.event,G=a.Deferred(),V=a.Callbacks("once memory"),Ee=E.statusCode||{},Ue={},gt={},ke="canceled",ne={readyState:0,getResponseHeader:function(ye){var Le;if(C){if(!p)for(p={};Le=Bn.exec(u);)p[Le[1].toLowerCase()+" "]=(p[Le[1].toLowerCase()+" "]||[]).concat(Le[2]);Le=p[ye.toLowerCase()+" "]}return Le==null?null:Le.join(", ")},getAllResponseHeaders:function(){return C?u:null},setRequestHeader:function(ye,Le){return C==null&&(ye=gt[ye.toLowerCase()]=gt[ye.toLowerCase()]||ye,Ue[ye]=Le),this},overrideMimeType:function(ye){return C==null&&(E.mimeType=ye),this},statusCode:function(ye){var Le;if(ye)if(C)ne.always(ye[ne.status]);else for(Le in ye)Ee[Le]=[Ee[Le],ye[Le]];return this},abort:function(ye){var Le=ye||ke;return i&&i.abort(Le),ut(0,Le),this}};if(G.promise(ne),E.url=((e||E.url||Cr.href)+"").replace(zn,Cr.protocol+"//"),E.type=t.method||t.type||E.method||E.type,E.dataTypes=(E.dataType||"*").toLowerCase().match(mt)||[""],E.crossDomain==null){x=$.createElement("a");try{x.href=E.url,x.href=x.href,E.crossDomain=en.protocol+"//"+en.host!=x.protocol+"//"+x.host}catch{E.crossDomain=!0}}if(E.data&&E.processData&&typeof E.data!="string"&&(E.data=a.param(E.data,E.traditional)),wn(bn,E,t,ne),C)return ne;for(P in(j=a.event&&E.global)&&a.active++==0&&a.event.trigger("ajaxStart"),E.type=E.type.toUpperCase(),E.hasContent=!Hn.test(E.type),o=E.url.replace(Nn,""),E.hasContent?E.data&&E.processData&&(E.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(E.data=E.data.replace(In,"+")):(D=E.url.slice(o.length),E.data&&(E.processData||typeof E.data=="string")&&(o+=(Gr.test(o)?"&":"?")+E.data,delete E.data),E.cache===!1&&(o=o.replace(Fn,"$1"),D=(Gr.test(o)?"&":"?")+"_="+yn.guid+++D),E.url=o+D),E.ifModified&&(a.lastModified[o]&&ne.setRequestHeader("If-Modified-Since",a.lastModified[o]),a.etag[o]&&ne.setRequestHeader("If-None-Match",a.etag[o])),(E.data&&E.hasContent&&E.contentType!==!1||t.contentType)&&ne.setRequestHeader("Content-Type",E.contentType),ne.setRequestHeader("Accept",E.dataTypes[0]&&E.accepts[E.dataTypes[0]]?E.accepts[E.dataTypes[0]]+(E.dataTypes[0]!=="*"?", "+vn+"; q=0.01":""):E.accepts["*"]),E.headers)ne.setRequestHeader(P,E.headers[P]);if(E.beforeSend&&(E.beforeSend.call(L,ne,E)===!1||C))return ne.abort();if(ke="abort",V.add(E.complete),ne.done(E.success),ne.fail(E.error),i=wn(Zr,E,t,ne)){if(ne.readyState=1,j&&W.trigger("ajaxSend",[ne,E]),C)return ne;E.async&&E.timeout>0&&(h=N.setTimeout(function(){ne.abort("timeout")},E.timeout));try{C=!1,i.send(Ue,ut)}catch(ye){if(C)throw ye;ut(-1,ye)}}else ut(-1,"No Transport");function ut(ye,Le,qr,Ir){var bt,rr,hr,dt,mr,Ct=Le;C||(C=!0,h&&N.clearTimeout(h),i=void 0,u=Ir||"",ne.readyState=ye>0?4:0,bt=ye>=200&&ye<300||ye===304,qr&&(dt=function(Oe,vt,xt){for(var Qt,Fe,ve,$e,wt=Oe.contents,Be=Oe.dataTypes;Be[0]==="*";)Be.shift(),Qt===void 0&&(Qt=Oe.mimeType||vt.getResponseHeader("Content-Type"));if(Qt){for(Fe in wt)if(wt[Fe]&&wt[Fe].test(Qt)){Be.unshift(Fe);break}}if(Be[0]in xt)ve=Be[0];else{for(Fe in xt){if(!Be[0]||Oe.converters[Fe+" "+Be[0]]){ve=Fe;break}$e||($e=Fe)}ve=ve||$e}if(ve)return ve!==Be[0]&&Be.unshift(ve),xt[ve]}(E,ne,qr)),!bt&&a.inArray("script",E.dataTypes)>-1&&a.inArray("json",E.dataTypes)<0&&(E.converters["text script"]=function(){}),dt=function(Oe,vt,xt,Qt){var Fe,ve,$e,wt,Be,kt={},fr=Oe.dataTypes.slice();if(fr[1])for($e in Oe.converters)kt[$e.toLowerCase()]=Oe.converters[$e];for(ve=fr.shift();ve;)if(Oe.responseFields[ve]&&(xt[Oe.responseFields[ve]]=vt),!Be&&Qt&&Oe.dataFilter&&(vt=Oe.dataFilter(vt,Oe.dataType)),Be=ve,ve=fr.shift()){if(ve==="*")ve=Be;else if(Be!=="*"&&Be!==ve){if(!($e=kt[Be+" "+ve]||kt["* "+ve])){for(Fe in kt)if((wt=Fe.split(" "))[1]===ve&&($e=kt[Be+" "+wt[0]]||kt["* "+wt[0]])){$e===!0?$e=kt[Fe]:kt[Fe]!==!0&&(ve=wt[0],fr.unshift(wt[1]));break}}if($e!==!0)if($e&&Oe.throws)vt=$e(vt);else try{vt=$e(vt)}catch(Nr){return{state:"parsererror",error:$e?Nr:"No conversion from "+Be+" to "+ve}}}}return{state:"success",data:vt}}(E,dt,ne,bt),bt?(E.ifModified&&((mr=ne.getResponseHeader("Last-Modified"))&&(a.lastModified[o]=mr),(mr=ne.getResponseHeader("etag"))&&(a.etag[o]=mr)),ye===204||E.type==="HEAD"?Ct="nocontent":ye===304?Ct="notmodified":(Ct=dt.state,rr=dt.data,bt=!(hr=dt.error))):(hr=Ct,!ye&&Ct||(Ct="error",ye<0&&(ye=0))),ne.status=ye,ne.statusText=(Le||Ct)+"",bt?G.resolveWith(L,[rr,Ct,ne]):G.rejectWith(L,[ne,Ct,hr]),ne.statusCode(Ee),Ee=void 0,j&&W.trigger(bt?"ajaxSuccess":"ajaxError",[ne,E,bt?rr:hr]),V.fireWith(L,[ne,Ct]),j&&(W.trigger("ajaxComplete",[ne,E]),--a.active||a.event.trigger("ajaxStop")))}return ne},getJSON:function(e,t,i){return a.get(e,t,i,"json")},getScript:function(e,t){return a.get(e,void 0,t,"script")}}),a.each(["get","post"],function(e,t){a[t]=function(i,o,u,p){return O(o)&&(p=p||u,u=o,o=void 0),a.ajax(a.extend({url:i,type:t,dataType:p,data:o,success:u},a.isPlainObject(i)&&i))}}),a.ajaxPrefilter(function(e){var t;for(t in e.headers)t.toLowerCase()==="content-type"&&(e.contentType=e.headers[t]||"")}),a._evalUrl=function(e,t,i){return a.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){a.globalEval(o,t,i)}})},a.fn.extend({wrapAll:function(e){var t;return this[0]&&(O(e)&&(e=e.call(this[0])),t=a(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var i=this;i.firstElementChild;)i=i.firstElementChild;return i}).append(this)),this},wrapInner:function(e){return O(e)?this.each(function(t){a(this).wrapInner(e.call(this,t))}):this.each(function(){var t=a(this),i=t.contents();i.length?i.wrapAll(e):t.append(e)})},wrap:function(e){var t=O(e);return this.each(function(i){a(this).wrapAll(t?e.call(this,i):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){a(this).replaceWith(this.childNodes)}),this}}),a.expr.pseudos.hidden=function(e){return!a.expr.pseudos.visible(e)},a.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},a.ajaxSettings.xhr=function(){try{return new N.XMLHttpRequest}catch{}};var Wn={0:200,1223:204},Tr=a.ajaxSettings.xhr();B.cors=!!Tr&&"withCredentials"in Tr,B.ajax=Tr=!!Tr,a.ajaxTransport(function(e){var t,i;if(B.cors||Tr&&!e.crossDomain)return{send:function(o,u){var p,h=e.xhr();if(h.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(p in e.xhrFields)h[p]=e.xhrFields[p];for(p in e.mimeType&&h.overrideMimeType&&h.overrideMimeType(e.mimeType),e.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)h.setRequestHeader(p,o[p]);t=function(x){return function(){t&&(t=i=h.onload=h.onerror=h.onabort=h.ontimeout=h.onreadystatechange=null,x==="abort"?h.abort():x==="error"?typeof h.status!="number"?u(0,"error"):u(h.status,h.statusText):u(Wn[h.status]||h.status,h.statusText,(h.responseType||"text")!=="text"||typeof h.responseText!="string"?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=t(),i=h.onerror=h.ontimeout=t("error"),h.onabort!==void 0?h.onabort=i:h.onreadystatechange=function(){h.readyState===4&&N.setTimeout(function(){t&&i()})},t=t("abort");try{h.send(e.hasContent&&e.data||null)}catch(x){if(t)throw x}},abort:function(){t&&t()}}}),a.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),a.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return a.globalEval(e),e}}}),a.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),a.ajaxTransport("script",function(e){var t,i;if(e.crossDomain||e.scriptAttrs)return{send:function(o,u){t=a("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",i=function(p){t.remove(),i=null,p&&u(p.type==="error"?404:200,p.type)}),$.head.appendChild(t[0])},abort:function(){i&&i()}}});var kn,_n=[],rn=/(=)\?(?=&|$)|\?\?/;a.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_n.pop()||a.expando+"_"+yn.guid++;return this[e]=!0,e}}),a.ajaxPrefilter("json jsonp",function(e,t,i){var o,u,p,h=e.jsonp!==!1&&(rn.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&rn.test(e.data)&&"data");if(h||e.dataTypes[0]==="jsonp")return o=e.jsonpCallback=O(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,h?e[h]=e[h].replace(rn,"$1"+o):e.jsonp!==!1&&(e.url+=(Gr.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return p||a.error(o+" was not called"),p[0]},e.dataTypes[0]="json",u=N[o],N[o]=function(){p=arguments},i.always(function(){u===void 0?a(N).removeProp(o):N[o]=u,e[o]&&(e.jsonpCallback=t.jsonpCallback,_n.push(o)),p&&O(u)&&u(p[0]),p=u=void 0}),"script"}),B.createHTMLDocument=((kn=$.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",kn.childNodes.length===2),a.parseHTML=function(e,t,i){return typeof e!="string"?[]:(typeof t=="boolean"&&(i=t,t=!1),t||(B.createHTMLDocument?((o=(t=$.implementation.createHTMLDocument("")).createElement("base")).href=$.location.href,t.head.appendChild(o)):t=$),p=!i&&[],(u=rt.exec(e))?[t.createElement(u[1])]:(u=Ar([e],t,p),p&&p.length&&a(p).remove(),a.merge([],u.childNodes)));var o,u,p},a.fn.load=function(e,t,i){var o,u,p,h=this,x=e.indexOf(" ");return x>-1&&(o=er(e.slice(x)),e=e.slice(0,x)),O(t)?(i=t,t=void 0):t&&typeof t=="object"&&(u="POST"),h.length>0&&a.ajax({url:e,type:u||"GET",dataType:"html",data:t}).done(function(C){p=arguments,h.html(o?a("<div>").append(a.parseHTML(C)).find(o):C)}).always(i&&function(C,j){h.each(function(){i.apply(this,p||[C.responseText,j,C])})}),this},a.expr.pseudos.animated=function(e){return a.grep(a.timers,function(t){return e===t.elem}).length},a.offset={setOffset:function(e,t,i){var o,u,p,h,x,C,j=a.css(e,"position"),P=a(e),D={};j==="static"&&(e.style.position="relative"),x=P.offset(),p=a.css(e,"top"),C=a.css(e,"left"),(j==="absolute"||j==="fixed")&&(p+C).indexOf("auto")>-1?(h=(o=P.position()).top,u=o.left):(h=parseFloat(p)||0,u=parseFloat(C)||0),O(t)&&(t=t.call(e,i,a.extend({},x))),t.top!=null&&(D.top=t.top-x.top+h),t.left!=null&&(D.left=t.left-x.left+u),"using"in t?t.using.call(e,D):P.css(D)}},a.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(u){a.offset.setOffset(this,e,u)});var t,i,o=this[0];return o?o.getClientRects().length?(t=o.getBoundingClientRect(),i=o.ownerDocument.defaultView,{top:t.top+i.pageYOffset,left:t.left+i.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,i,o=this[0],u={top:0,left:0};if(a.css(o,"position")==="fixed")t=o.getBoundingClientRect();else{for(t=this.offset(),i=o.ownerDocument,e=o.offsetParent||i.documentElement;e&&(e===i.body||e===i.documentElement)&&a.css(e,"position")==="static";)e=e.parentNode;e&&e!==o&&e.nodeType===1&&((u=a(e).offset()).top+=a.css(e,"borderTopWidth",!0),u.left+=a.css(e,"borderLeftWidth",!0))}return{top:t.top-u.top-a.css(o,"marginTop",!0),left:t.left-u.left-a.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&a.css(e,"position")==="static";)e=e.offsetParent;return e||Dt})}}),a.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var i=t==="pageYOffset";a.fn[e]=function(o){return Re(this,function(u,p,h){var x;if(f(u)?x=u:u.nodeType===9&&(x=u.defaultView),h===void 0)return x?x[t]:u[p];x?x.scrollTo(i?x.pageXOffset:h,i?h:x.pageYOffset):u[p]=h},e,o,arguments.length)}}),a.each(["top","left"],function(e,t){a.cssHooks[t]=l(B.pixelPosition,function(i,o){if(o)return o=n(i,t),dr.test(o)?a(i).position()[t]+"px":o})}),a.each({Height:"height",Width:"width"},function(e,t){a.each({padding:"inner"+e,content:t,"":"outer"+e},function(i,o){a.fn[o]=function(u,p){var h=arguments.length&&(i||typeof u!="boolean"),x=i||(u===!0||p===!0?"margin":"border");return Re(this,function(C,j,P){var D;return f(C)?o.indexOf("outer")===0?C["inner"+e]:C.document.documentElement["client"+e]:C.nodeType===9?(D=C.documentElement,Math.max(C.body["scroll"+e],D["scroll"+e],C.body["offset"+e],D["offset"+e],D["client"+e])):P===void 0?a.css(C,j,x):a.style(C,j,P,x)},t,h?u:void 0,h)}})}),a.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){a.fn[t]=function(i){return this.on(t,i)}}),a.fn.extend({bind:function(e,t,i){return this.on(e,null,t,i)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,i,o){return this.on(t,e,i,o)},undelegate:function(e,t,i){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),a.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){a.fn[t]=function(i,o){return arguments.length>0?this.on(t,null,i,o):this.trigger(t)}});var Vn=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;a.proxy=function(e,t){var i,o,u;if(typeof t=="string"&&(i=e[t],t=e,e=i),O(e))return o=me.call(arguments,2),u=function(){return e.apply(t||this,o.concat(me.call(arguments)))},u.guid=e.guid=e.guid||a.guid++,u},a.holdReady=function(e){e?a.readyWait++:a.ready(!0)},a.isArray=Array.isArray,a.parseJSON=JSON.parse,a.nodeName=Qe,a.isFunction=O,a.isWindow=f,a.camelCase=S,a.type=be,a.now=Date.now,a.isNumeric=function(e){var t=a.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))},a.trim=function(e){return e==null?"":(e+"").replace(Vn,"")},(K=function(){return a}.apply(ge,[]))===void 0||(ae.exports=K);var Un=N.jQuery,$n=N.$;return a.noConflict=function(e){return N.$===a&&(N.$=$n),e&&N.jQuery===a&&(N.jQuery=Un),a},ce===void 0&&(N.jQuery=N.$=a),a})},703:(ae,ge,K)=>{var N=K(414);function ce(){}function se(){}se.resetWarningCache=ce,ae.exports=function(){function pe(We,xe,Ye,de,Je,Ze){if(Ze!==N){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}function me(){return pe}pe.isRequired=pe;var tt={array:pe,bool:pe,func:pe,number:pe,object:pe,string:pe,symbol:pe,any:pe,arrayOf:me,element:pe,elementType:pe,instanceOf:me,node:pe,objectOf:me,oneOf:me,oneOfType:me,shape:me,exact:me,checkPropTypes:se,resetWarningCache:ce};return tt.PropTypes=tt,tt}},697:(ae,ge,K)=>{ae.exports=K(703)()},414:ae=>{ae.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},156:ae=>{ae.exports=_t}},un={};function pt(ae){var ge=un[ae];if(ge!==void 0)return ge.exports;var K=un[ae]={id:ae,exports:{}};return Ur[ae].call(K.exports,K,K.exports,pt),K.exports}pt.n=ae=>{var ge=ae&&ae.__esModule?()=>ae.default:()=>ae;return pt.d(ge,{a:ge}),ge},pt.d=(ae,ge)=>{for(var K in ge)pt.o(ge,K)&&!pt.o(ae,K)&&Object.defineProperty(ae,K,{enumerable:!0,get:ge[K]})},pt.o=(ae,ge)=>Object.prototype.hasOwnProperty.call(ae,ge),pt.r=ae=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(ae,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(ae,"__esModule",{value:!0})};var $r={};return(()=>{pt.r($r),pt.d($r,{addStyles:()=>ge,EditableMathField:()=>K,StaticMathField:()=>N,default:()=>ce});var ae=pt(527);function ge(){if(document.getElementById("react-mathquill-styles")==null){var se=document.createElement("style");se.setAttribute("id","react-mathquill-styles"),se.innerHTML=ae.Z[0][1],document.getElementsByTagName("head")[0].appendChild(se)}}var K=pt(991).Z,N=pt(717).Z;const ce=K})(),$r})()})}(reactMathquill_min)),reactMathquill_min.exports}var reactMathquill={exports:{}},hasRequiredReactMathquill;function requireReactMathquill(){return hasRequiredReactMathquill||(hasRequiredReactMathquill=1,function(module,exports){(function(Ae,at){module.exports=at(_)})(commonjsGlobal$1,function(__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/EditableMathField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mathquill_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathquill-loader */ "./src/mathquill-loader.js");
var _excluded = ["latex", "onChange", "config", "mathquillDidMount"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var EditableMathField = function EditableMathField(_ref) {
  var latex = _ref.latex,
      onChange = _ref.onChange,
      config = _ref.config,
      mathquillDidMount = _ref.mathquillDidMount,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  // MathQuill fire 2 edit events on startup.
  var ignoreEditEvents = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(2);
  var mathField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var wrapperElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // This is required to prevent state closure over the onChange function

  var onChangeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(onChange);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    onChangeRef.current = onChange;
  }, [onChange]); // Setup MathQuill on the wrapperElement

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!wrapperElement.current) return;
    var combinedConfig = {
      restrictMismatchedBrackets: true,
      handlers: {}
    };

    if (config) {
      combinedConfig = _objectSpread(_objectSpread({}, combinedConfig), config);
    }

    var configEditHandler = combinedConfig.handlers.edit;

    combinedConfig.handlers.edit = function (mathField) {
      if (configEditHandler) configEditHandler();

      if (ignoreEditEvents.current > 0) {
        ignoreEditEvents.current -= 1;
      } else {
        if (onChangeRef.current) onChangeRef.current(mathField);
      }
    };

    mathField.current = _mathquill_loader__WEBPACK_IMPORTED_MODULE_2__["default"].MathField(wrapperElement.current, combinedConfig);
    mathField.current.latex(latex || '');
    if (mathquillDidMount) mathquillDidMount(mathField.current);
  }, [wrapperElement]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (mathField.current && mathField.current.latex() !== latex) {
      mathField.current.latex(latex);
    }
  }, [latex]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({}, otherProps, {
    ref: wrapperElement
  }));
};

EditableMathField.propTypes = {
  latex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  config: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  mathquillDidMount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableMathField);

//# sourceURL=webpack://MathquillComponent/./src/EditableMathField.js?`)},"./src/StaticMathField.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mathquill_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathquill-loader */ "./src/mathquill-loader.js");
var _excluded = ["mathquillDidMount", "children"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var StaticMathField = function StaticMathField(_ref) {
  var mathquillDidMount = _ref.mathquillDidMount,
      children = _ref.children,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var wrapperElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var mathField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (!wrapperElement) return;
    mathField.current = _mathquill_loader__WEBPACK_IMPORTED_MODULE_2__["default"].StaticMath(wrapperElement.current);
    if (mathquillDidMount) mathquillDidMount(mathField.current);
  }, [wrapperElement, children]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", _extends({}, otherProps, {
    ref: wrapperElement
  }), children);
};

StaticMathField.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  mathquillDidMount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaticMathField);

//# sourceURL=webpack://MathquillComponent/./src/StaticMathField.js?`)},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addStyles": () => (/* binding */ addStyles),
/* harmony export */   "EditableMathField": () => (/* binding */ EditableMathField),
/* harmony export */   "StaticMathField": () => (/* binding */ StaticMathField),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _edtr_io_mathquill_build_mathquill_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @edtr-io/mathquill/build/mathquill.css */ "./node_modules/@edtr-io/mathquill/build/mathquill.css");

function addStyles() {
  if (document.getElementById('react-mathquill-styles') == null) {
    var styleTag = document.createElement('style');
    styleTag.setAttribute('id', 'react-mathquill-styles');
    styleTag.innerHTML = _edtr_io_mathquill_build_mathquill_css__WEBPACK_IMPORTED_MODULE_0__["default"][0][1];
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(styleTag);
  }
}
var EditableMathField = __webpack_require__(/*! ./EditableMathField */ "./src/EditableMathField.js")["default"];
var StaticMathField = __webpack_require__(/*! ./StaticMathField */ "./src/StaticMathField.js")["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableMathField);

//# sourceURL=webpack://MathquillComponent/./src/index.js?`)},"./src/mathquill-loader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// webpack loaders are used to configure mathquill as a commonjs module, see webpack.config.js
var MathQuill = __webpack_require__(/*! @edtr-io/mathquill/build/mathquill.js */ "./node_modules/@edtr-io/mathquill/build/mathquill.js");

var MQ = MathQuill.getInterface(2);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MQ);

//# sourceURL=webpack://MathquillComponent/./src/mathquill-loader.js?`)},"./node_modules/@edtr-io/mathquill/build/mathquill.css":(module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\\n * MathQuill v0.11.0, by Han, Jeanine, and Mary\\n * http://mathquill.com | maintainers@mathquill.com\\n *\\n * This Source Code Form is subject to the terms of the\\n * Mozilla Public License, v. 2.0. If a copy of the MPL\\n * was not distributed with this file, You can obtain\\n * one at http://mozilla.org/MPL/2.0/.\\n */\\n@font-face {\\n  /* Heavy fonts have been removed */\\n  font-family: Symbola;\\n}\\n.mq-editable-field {\\n  display: -moz-inline-box;\\n  display: inline-block;\\n}\\n.mq-editable-field .mq-cursor {\\n  border-left: 1px solid black;\\n  margin-left: -1px;\\n  position: relative;\\n  z-index: 1;\\n  padding: 0;\\n  display: -moz-inline-box;\\n  display: inline-block;\\n}\\n.mq-editable-field .mq-cursor.mq-blink {\\n  visibility: hidden;\\n}\\n.mq-editable-field,\\n.mq-math-mode .mq-editable-field {\\n  border: 1px solid gray;\\n}\\n.mq-editable-field.mq-focused,\\n.mq-math-mode .mq-editable-field.mq-focused {\\n  -webkit-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\\n  -moz-box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\\n  box-shadow: #8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;\\n  border-color: #709AC0;\\n  border-radius: 1px;\\n}\\n.mq-math-mode .mq-editable-field {\\n  margin: 1px;\\n}\\n.mq-editable-field .mq-latex-command-input {\\n  color: inherit;\\n  font-family: \\"Courier New\\", monospace;\\n  border: 1px solid gray;\\n  padding-right: 1px;\\n  margin-right: 1px;\\n  margin-left: 2px;\\n}\\n.mq-editable-field .mq-latex-command-input.mq-empty {\\n  background: transparent;\\n}\\n.mq-editable-field .mq-latex-command-input.mq-hasCursor {\\n  border-color: ActiveBorder;\\n}\\n.mq-editable-field.mq-empty:after,\\n.mq-editable-field.mq-text-mode:after,\\n.mq-math-mode .mq-empty:after {\\n  visibility: hidden;\\n  content: 'c';\\n}\\n.mq-editable-field .mq-cursor:only-child:after,\\n.mq-editable-field .mq-textarea + .mq-cursor:last-child:after {\\n  visibility: hidden;\\n  content: 'c';\\n}\\n.mq-editable-field .mq-text-mode .mq-cursor:only-child:after {\\n  content: '';\\n}\\n.mq-editable-field.mq-text-mode {\\n  overflow-x: auto;\\n  overflow-y: hidden;\\n}\\n.mq-root-block,\\n.mq-math-mode .mq-root-block {\\n  display: -moz-inline-box;\\n  display: inline-block;\\n  width: 100%;\\n  padding: 2px;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n  white-space: nowrap;\\n  overflow: hidden;\\n  vertical-align: middle;\\n}\\n.mq-math-mode {\\n  font-variant: normal;\\n  font-weight: normal;\\n  font-style: normal;\\n  font-size: 115%;\\n  line-height: 1;\\n  display: -moz-inline-box;\\n  display: inline-block;\\n}\\n.mq-math-mode .mq-non-leaf,\\n.mq-math-mode .mq-scaled {\\n  display: -moz-inline-box;\\n  display: inline-block;\\n}\\n.mq-math-mode var,\\n.mq-math-mode .mq-text-mode,\\n.mq-math-mode .mq-nonSymbola {\\n  font-family: \\"Times New Roman\\", Symbola, serif;\\n  line-height: 0.9;\\n}\\n.mq-math-mode * {\\n  font-size: inherit;\\n  line-height: inherit;\\n  margin: 0;\\n  padding: 0;\\n  border-color: black;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  user-select: none;\\n  box-sizing: border-box;\\n}\\n.mq-math-mode .mq-empty {\\n  background: #ccc;\\n}\\n.mq-math-mode .mq-empty.mq-root-block {\\n  background: transparent;\\n}\\n.mq-math-mode.mq-empty {\\n  background: transparent;\\n}\\n.mq-math-mode .mq-text-mode {\\n  display: inline-block;\\n  white-space: pre;\\n}\\n.mq-math-mode .mq-text-mode.mq-hasCursor {\\n  box-shadow: inset darkgray 0 0.1em 0.2em;\\n  padding: 0 0.1em;\\n  margin: 0 -0.1em;\\n  min-width: 1ex;\\n}\\n.mq-math-mode .mq-font {\\n  font: 1em \\"Times New Roman\\", Symbola, serif;\\n}\\n.mq-math-mode .mq-font * {\\n  font-family: inherit;\\n  font-style: inherit;\\n}\\n.mq-math-mode b,\\n.mq-math-mode b.mq-font {\\n  font-weight: bolder;\\n}\\n.mq-math-mode var,\\n.mq-math-mode i,\\n.mq-math-mode i.mq-font {\\n  font-style: italic;\\n}\\n.mq-math-mode var.mq-f {\\n  margin-right: 0.2em;\\n  margin-left: 0.1em;\\n}\\n.mq-math-mode .mq-roman var.mq-f {\\n  margin: 0;\\n}\\n.mq-math-mode big {\\n  font-size: 200%;\\n}\\n.mq-math-mode .mq-int > big {\\n  display: inline-block;\\n  -webkit-transform: scaleX(0.7);\\n  -moz-transform: scaleX(0.7);\\n  -ms-transform: scaleX(0.7);\\n  -o-transform: scaleX(0.7);\\n  transform: scaleX(0.7);\\n  vertical-align: -0.16em;\\n}\\n.mq-math-mode .mq-int > .mq-supsub {\\n  font-size: 80%;\\n  vertical-align: -1.1em;\\n  padding-right: 0.2em;\\n}\\n.mq-math-mode .mq-int > .mq-supsub > .mq-sup > .mq-sup-inner {\\n  vertical-align: 1.3em;\\n}\\n.mq-math-mode .mq-int > .mq-supsub > .mq-sub {\\n  margin-left: -0.35em;\\n}\\n.mq-math-mode .mq-roman {\\n  font-style: normal;\\n}\\n.mq-math-mode .mq-sans-serif {\\n  font-family: sans-serif, Symbola, serif;\\n}\\n.mq-math-mode .mq-monospace {\\n  font-family: monospace, Symbola, serif;\\n}\\n.mq-math-mode .mq-overline {\\n  border-top: 1px solid black;\\n  margin-top: 1px;\\n}\\n.mq-math-mode .mq-underline {\\n  border-bottom: 1px solid black;\\n  margin-bottom: 1px;\\n}\\n.mq-math-mode .mq-binary-operator {\\n  padding: 0 0.2em;\\n  display: -moz-inline-box;\\n  display: inline-block;\\n}\\n.mq-math-mode .mq-supsub {\\n  text-align: left;\\n  font-size: 90%;\\n  vertical-align: -0.5em;\\n}\\n.mq-math-mode .mq-supsub.mq-sup-only {\\n  vertical-align: 0.5em;\\n}\\n.mq-math-mode .mq-supsub.mq-sup-only .mq-sup {\\n  display: inline-block;\\n  vertical-align: text-bottom;\\n}\\n.mq-math-mode .mq-supsub .mq-sup {\\n  display: block;\\n}\\n.mq-math-mode .mq-supsub .mq-sub {\\n  display: block;\\n  float: left;\\n}\\n.mq-math-mode .mq-supsub .mq-binary-operator {\\n  padding: 0 0.1em;\\n}\\n.mq-math-mode .mq-supsub .mq-fraction {\\n  font-size: 70%;\\n}\\n.mq-math-mode sup.mq-nthroot {\\n  font-size: 80%;\\n  vertical-align: 0.8em;\\n  margin-right: -0.6em;\\n  margin-left: 0.2em;\\n  min-width: 0.5em;\\n}\\n.mq-math-mode .mq-paren {\\n  padding: 0 0.1em;\\n  vertical-align: top;\\n  -webkit-transform-origin: center 0.06em;\\n  -moz-transform-origin: center 0.06em;\\n  -ms-transform-origin: center 0.06em;\\n  -o-transform-origin: center 0.06em;\\n  transform-origin: center 0.06em;\\n}\\n.mq-math-mode .mq-paren.mq-ghost {\\n  color: silver;\\n}\\n.mq-math-mode .mq-paren + span {\\n  margin-top: 0.1em;\\n  margin-bottom: 0.1em;\\n}\\n.mq-math-mode .mq-array {\\n  vertical-align: middle;\\n  text-align: center;\\n}\\n.mq-math-mode .mq-array > span {\\n  display: block;\\n}\\n.mq-math-mode .mq-operator-name {\\n  font-family: Symbola, \\"Times New Roman\\", serif;\\n  line-height: 0.9;\\n  font-style: normal;\\n}\\n.mq-math-mode var.mq-operator-name.mq-first {\\n  padding-left: 0.2em;\\n}\\n.mq-math-mode var.mq-operator-name.mq-last,\\n.mq-math-mode .mq-supsub.mq-after-operator-name {\\n  padding-right: 0.2em;\\n}\\n.mq-math-mode .mq-fraction {\\n  font-size: 90%;\\n  text-align: center;\\n  vertical-align: -0.4em;\\n  padding: 0 0.2em;\\n}\\n.mq-math-mode .mq-fraction,\\n.mq-math-mode .mq-large-operator,\\n.mq-math-mode x:-moz-any-link {\\n  display: -moz-groupbox;\\n}\\n.mq-math-mode .mq-fraction,\\n.mq-math-mode .mq-large-operator,\\n.mq-math-mode x:-moz-any-link,\\n.mq-math-mode x:default {\\n  display: inline-block;\\n}\\n.mq-math-mode .mq-numerator,\\n.mq-math-mode .mq-denominator,\\n.mq-math-mode .mq-dot-recurring {\\n  display: block;\\n}\\n.mq-math-mode .mq-numerator {\\n  padding: 0 0.1em;\\n}\\n.mq-math-mode .mq-denominator {\\n  border-top: 1px solid;\\n  float: right;\\n  width: 100%;\\n  padding: 0.1em;\\n}\\n.mq-math-mode .mq-dot-recurring {\\n  text-align: center;\\n  height: 0.3em;\\n}\\n.mq-math-mode .mq-sqrt-prefix {\\n  padding-top: 0;\\n  position: relative;\\n  top: 0.1em;\\n  vertical-align: top;\\n  -webkit-transform-origin: top;\\n  -moz-transform-origin: top;\\n  -ms-transform-origin: top;\\n  -o-transform-origin: top;\\n  transform-origin: top;\\n}\\n.mq-math-mode .mq-sqrt-stem {\\n  border-top: 1px solid;\\n  margin-top: 1px;\\n  padding-left: 0.15em;\\n  padding-right: 0.2em;\\n  margin-right: 0.1em;\\n  padding-top: 1px;\\n}\\n.mq-math-mode .mq-diacritic-above {\\n  display: block;\\n  text-align: center;\\n  line-height: 0.4em;\\n}\\n.mq-math-mode .mq-diacritic-stem {\\n  display: block;\\n  text-align: center;\\n}\\n.mq-math-mode .mq-hat-prefix {\\n  display: block;\\n  text-align: center;\\n  line-height: 0.95em;\\n  margin-bottom: -0.7em;\\n  transform: scaleX(1.5);\\n  -moz-transform: scaleX(1.5);\\n  -o-transform: scaleX(1.5);\\n  -webkit-transform: scaleX(1.5);\\n}\\n.mq-math-mode .mq-hat-stem {\\n  display: block;\\n}\\n.mq-math-mode .mq-large-operator {\\n  vertical-align: -0.2em;\\n  padding: 0.2em;\\n  text-align: center;\\n}\\n.mq-math-mode .mq-large-operator .mq-from,\\n.mq-math-mode .mq-large-operator big,\\n.mq-math-mode .mq-large-operator .mq-to {\\n  display: block;\\n}\\n.mq-math-mode .mq-large-operator .mq-from,\\n.mq-math-mode .mq-large-operator .mq-to {\\n  font-size: 80%;\\n}\\n.mq-math-mode .mq-large-operator .mq-from {\\n  float: right;\\n  /* take out of normal flow to manipulate baseline */\\n  width: 100%;\\n}\\n.mq-math-mode,\\n.mq-math-mode .mq-editable-field {\\n  cursor: text;\\n  font-family: Symbola, \\"Times New Roman\\", serif;\\n}\\n.mq-math-mode .mq-overarc {\\n  border-top: 1px solid black;\\n  -webkit-border-top-right-radius: 50% 0.3em;\\n  -moz-border-radius-topright: 50% 0.3em;\\n  border-top-right-radius: 50% 0.3em;\\n  -webkit-border-top-left-radius: 50% 0.3em;\\n  -moz-border-radius-topleft: 50% 0.3em;\\n  border-top-left-radius: 50% 0.3em;\\n  margin-top: 1px;\\n  padding-top: 0.15em;\\n}\\n.mq-math-mode .mq-overarrow {\\n  min-width: 0.5em;\\n  border-top: 1px solid black;\\n  margin-top: 1px;\\n  padding-top: 0.2em;\\n  text-align: center;\\n}\\n.mq-math-mode .mq-overarrow:before {\\n  display: block;\\n  position: relative;\\n  top: -0.34em;\\n  font-size: 0.5em;\\n  line-height: 0em;\\n  content: '\\\\27A4';\\n  text-align: right;\\n}\\n.mq-math-mode .mq-overarrow.mq-arrow-left:before {\\n  -moz-transform: scaleX(-1);\\n  -o-transform: scaleX(-1);\\n  -webkit-transform: scaleX(-1);\\n  transform: scaleX(-1);\\n  filter: FlipH;\\n  -ms-filter: \\"FlipH\\";\\n}\\n.mq-math-mode .mq-overarrow.mq-arrow-both {\\n  vertical-align: text-bottom;\\n}\\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty {\\n  min-height: 1.23em;\\n}\\n.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after {\\n  top: -0.34em;\\n}\\n.mq-math-mode .mq-overarrow.mq-arrow-both:before {\\n  -moz-transform: scaleX(-1);\\n  -o-transform: scaleX(-1);\\n  -webkit-transform: scaleX(-1);\\n  transform: scaleX(-1);\\n  filter: FlipH;\\n  -ms-filter: \\"FlipH\\";\\n}\\n.mq-math-mode .mq-overarrow.mq-arrow-both:after {\\n  display: block;\\n  position: relative;\\n  top: -2.3em;\\n  font-size: 0.5em;\\n  line-height: 0em;\\n  content: '\\\\27A4';\\n  visibility: visible;\\n  text-align: right;\\n}\\n.mq-math-mode .mq-selection,\\n.mq-editable-field .mq-selection,\\n.mq-math-mode .mq-selection .mq-non-leaf,\\n.mq-editable-field .mq-selection .mq-non-leaf,\\n.mq-math-mode .mq-selection .mq-scaled,\\n.mq-editable-field .mq-selection .mq-scaled {\\n  background: #B4D5FE !important;\\n  background: Highlight !important;\\n  color: HighlightText;\\n  border-color: HighlightText;\\n}\\n.mq-math-mode .mq-selection .mq-matrixed,\\n.mq-editable-field .mq-selection .mq-matrixed {\\n  background: #39F !important;\\n}\\n.mq-math-mode .mq-selection .mq-matrixed-container,\\n.mq-editable-field .mq-selection .mq-matrixed-container {\\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important;\\n}\\n.mq-math-mode .mq-selection.mq-blur,\\n.mq-editable-field .mq-selection.mq-blur,\\n.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,\\n.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,\\n.mq-math-mode .mq-selection.mq-blur .mq-scaled,\\n.mq-editable-field .mq-selection.mq-blur .mq-scaled,\\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed,\\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed {\\n  background: #D4D4D4 !important;\\n  color: black;\\n  border-color: black;\\n}\\n.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,\\n.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container {\\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important;\\n}\\n.mq-editable-field .mq-textarea,\\n.mq-math-mode .mq-textarea {\\n  position: relative;\\n  -webkit-user-select: text;\\n  -moz-user-select: text;\\n  user-select: text;\\n}\\n.mq-editable-field .mq-textarea *,\\n.mq-math-mode .mq-textarea *,\\n.mq-editable-field .mq-selectable,\\n.mq-math-mode .mq-selectable {\\n  -webkit-user-select: text;\\n  -moz-user-select: text;\\n  user-select: text;\\n  position: absolute;\\n  clip: rect(1em 1em 1em 1em);\\n  -webkit-transform: scale(0);\\n  -moz-transform: scale(0);\\n  -ms-transform: scale(0);\\n  -o-transform: scale(0);\\n  transform: scale(0);\\n  resize: none;\\n  width: 1px;\\n  height: 1px;\\n  box-sizing: content-box;\\n}\\n.mq-math-mode .mq-matrixed {\\n  background: white;\\n  display: -moz-inline-box;\\n  display: inline-block;\\n}\\n.mq-math-mode .mq-matrixed-container {\\n  filter: progid:DXImageTransform.Microsoft.Chroma(color='white');\\n  margin-top: -0.1em;\\n}\\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://MathquillComponent/./node_modules/@edtr-io/mathquill/build/mathquill.css?`)},"./node_modules/css-loader/dist/runtime/api.js":module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://MathquillComponent/./node_modules/css-loader/dist/runtime/api.js?`)},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://MathquillComponent/./node_modules/css-loader/dist/runtime/noSourceMaps.js?`)},"./node_modules/@edtr-io/mathquill/build/mathquill.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`/*** IMPORTS FROM imports-loader ***/
var __webpack_jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

window.jQuery=__webpack_jquery;

/**
 * MathQuill v0.11.0, by Han, Jeanine, and Mary
 * http://mathquill.com | maintainers@mathquill.com
 *
 * This Source Code Form is subject to the terms of the
 * Mozilla Public License, v. 2.0. If a copy of the MPL
 * was not distributed with this file, You can obtain
 * one at http://mozilla.org/MPL/2.0/.
 */

(function() {

var jQuery = window.jQuery,
  undefined,
  mqCmdId = 'mathquill-command-id',
  mqBlockId = 'mathquill-block-id',
  min = Math.min,
  max = Math.max;

if (!jQuery) throw 'MathQuill requires jQuery 1.5.2+ to be loaded first';

function noop() {}

/**
 * A utility higher-order function that makes defining variadic
 * functions more convenient by letting you essentially define functions
 * with the last argument as a splat, i.e. the last argument "gathers up"
 * remaining arguments to the function:
 *   var doStuff = variadic(function(first, rest) { return rest; });
 *   doStuff(1, 2, 3); // => [2, 3]
 */
var __slice = [].slice;
function variadic(fn) {
  var numFixedArgs = fn.length - 1;
  return function() {
    var args = __slice.call(arguments, 0, numFixedArgs);
    var varArg = __slice.call(arguments, numFixedArgs);
    return fn.apply(this, args.concat([ varArg ]));
  };
}

/**
 * A utility higher-order function that makes combining object-oriented
 * programming and functional programming techniques more convenient:
 * given a method name and any number of arguments to be bound, returns
 * a function that calls it's first argument's method of that name (if
 * it exists) with the bound arguments and any additional arguments that
 * are passed:
 *   var sendMethod = send('method', 1, 2);
 *   var obj = { method: function() { return Array.apply(this, arguments); } };
 *   sendMethod(obj, 3, 4); // => [1, 2, 3, 4]
 *   // or more specifically,
 *   var obj2 = { method: function(one, two, three) { return one*two + three; } };
 *   sendMethod(obj2, 3); // => 5
 *   sendMethod(obj2, 4); // => 6
 */
var send = variadic(function(method, args) {
  return variadic(function(obj, moreArgs) {
    if (method in obj) return obj[method].apply(obj, args.concat(moreArgs));
  });
});

/**
 * A utility higher-order function that creates "implicit iterators"
 * from "generators": given a function that takes in a sole argument,
 * a "yield_" function, that calls "yield_" repeatedly with an object as
 * a sole argument (presumably objects being iterated over), returns
 * a function that calls it's first argument on each of those objects
 * (if the first argument is a function, it is called repeatedly with
 * each object as the first argument, otherwise it is stringified and
 * the method of that name is called on each object (if such a method
 * exists)), passing along all additional arguments:
 *   var a = [
 *     { method: function(list) { list.push(1); } },
 *     { method: function(list) { list.push(2); } },
 *     { method: function(list) { list.push(3); } }
 *   ];
 *   a.each = iterator(function(yield_) {
 *     for (var i in this) yield_(this[i]);
 *   });
 *   var list = [];
 *   a.each('method', list);
 *   list; // => [1, 2, 3]
 *   // Note that the for-in loop will yield 'each', but 'each' maps to
 *   // the function object created by iterator() which does not have a
 *   // .method() method, so that just fails silently.
 */
function iterator(generator) {
  return variadic(function(fn, args) {
    if (typeof fn !== 'function') fn = send(fn);
    var yield_ = function(obj) { return fn.apply(obj, [ obj ].concat(args)); };
    return generator.call(this, yield_);
  });
}

/**
 * sugar to make defining lots of commands easier.
 * TODO: rethink this.
 */
function bind(cons /*, args... */) {
  var args = __slice.call(arguments, 1);
  return function() {
    return cons.apply(this, args);
  };
}

/**
 * a development-only debug method.  This definition and all
 * calls to \`pray\` will be stripped from the minified
 * build of mathquill.
 *
 * This function must be called by name to be removed
 * at compile time.  Do not define another function
 * with the same name, and only call this function by
 * name.
 */
function pray(message, cond) {
  if (!cond) throw new Error('prayer failed: '+message);
}
var P = (function(prototype, ownProperty, undefined) {
  // helper functions that also help minification
  function isObject(o) { return typeof o === 'object'; }
  function isFunction(f) { return typeof f === 'function'; }

  // used to extend the prototypes of superclasses (which might not
  // have \`.Bare\`s)
  function SuperclassBare() {}

  return function P(_superclass /* = Object */, definition) {
    // handle the case where no superclass is given
    if (definition === undefined) {
      definition = _superclass;
      _superclass = Object;
    }

    // C is the class to be returned.
    //
    // It delegates to instantiating an instance of \`Bare\`, so that it
    // will always return a new instance regardless of the calling
    // context.
    //
    //  TODO: the Chrome inspector shows all created objects as \`C\`
    //        rather than \`Object\`.  Setting the .name property seems to
    //        have no effect.  Is there a way to override this behavior?
    function C() {
      var self = new Bare;
      if (isFunction(self.init)) self.init.apply(self, arguments);
      return self;
    }

    // C.Bare is a class with a noop constructor.  Its prototype is the
    // same as C, so that instances of C.Bare are also instances of C.
    // New objects can be allocated without initialization by calling
    // \`new MyClass.Bare\`.
    function Bare() {}
    C.Bare = Bare;

    // Set up the prototype of the new class.
    var _super = SuperclassBare[prototype] = _superclass[prototype];
    var proto = Bare[prototype] = C[prototype] = C.p = new SuperclassBare;

    // other variables, as a minifier optimization
    var extensions;


    // set the constructor property on the prototype, for convenience
    proto.constructor = C;

    C.extend = function(def) { return P(C, def); }

    return (C.open = function(def) {
      extensions = {};

      if (isFunction(def)) {
        // call the defining function with all the arguments you need
        // extensions captures the return value.
        extensions = def.call(C, proto, _super, C, _superclass);
      }
      else if (isObject(def)) {
        // if you passed an object instead, we'll take it
        extensions = def;
      }

      // ...and extend it
      if (isObject(extensions)) {
        for (var ext in extensions) {
          if (ownProperty.call(extensions, ext)) {
            proto[ext] = extensions[ext];
          }
        }
      }

      // if there's no init, we assume we're inheriting a non-pjs class, so
      // we default to applying the superclass's constructor.
      if (!isFunction(proto.init)) {
        proto.init = _superclass;
      }

      return C;
    })(definition);
  }

  // as a minifier optimization, we've closured in a few helper functions
  // and the string 'prototype' (C[p] is much shorter than C.prototype)
})('prototype', ({}).hasOwnProperty);
/*************************************************
 * Base classes of edit tree-related objects
 *
 * Only doing tree node manipulation via these
 * adopt/ disown methods guarantees well-formedness
 * of the tree.
 ************************************************/

// L = 'left'
// R = 'right'
//
// the contract is that they can be used as object properties
// and (-L) === R, and (-R) === L.
var L = -1;
var R = 1;

function prayDirection(dir) {
  pray('a direction was passed', dir === L || dir === R);
}

/**
 * Tiny extension of jQuery adding directionalized DOM manipulation methods.
 *
 * Funny how Pjs v3 almost just works with \`jQuery.fn.init\`.
 *
 * jQuery features that don't work on $:
 *   - jQuery.*, like jQuery.ajax, obviously (Pjs doesn't and shouldn't
 *                                            copy constructor properties)
 *
 *   - jQuery(function), the shortcut for \`jQuery(document).ready(function)\`,
 *     because \`jQuery.fn.init\` is idiosyncratic and Pjs doing, essentially,
 *     \`jQuery.fn.init.apply(this, arguments)\` isn't quite right, you need:
 *
 *       _.init = function(s, c) { jQuery.fn.init.call(this, s, c, $(document)); };
 *
 *     if you actually give a shit (really, don't bother),
 *     see https://github.com/jquery/jquery/blob/1.7.2/src/core.js#L889
 *
 *   - jQuery(selector), because jQuery translates that to
 *     \`jQuery(document).find(selector)\`, but Pjs doesn't (should it?) let
 *     you override the result of a constructor call
 *       + note that because of the jQuery(document) shortcut-ness, there's also
 *         the 3rd-argument-needs-to-be-\`$(document)\` thing above, but the fix
 *         for that (as can be seen above) is really easy. This problem requires
 *         a way more intrusive fix
 *
 * And that's it! Everything else just magically works because jQuery internally
 * uses \`this.constructor()\` everywhere (hence calling \`$\`), but never ever does
 * \`this.constructor.find\` or anything like that, always doing \`jQuery.find\`.
 */
var $ = P(jQuery, function(_) {
  _.insDirOf = function(dir, el) {
    return dir === L ?
      this.insertBefore(el.first()) : this.insertAfter(el.last());
  };
  _.insAtDirEnd = function(dir, el) {
    return dir === L ? this.prependTo(el) : this.appendTo(el);
  };
});

var Point = P(function(_) {
  _.parent = 0;
  _[L] = 0;
  _[R] = 0;

  _.init = function(parent, leftward, rightward) {
    this.parent = parent;
    this[L] = leftward;
    this[R] = rightward;
  };

  this.copy = function(pt) {
    return Point(pt.parent, pt[L], pt[R]);
  };
});

/**
 * MathQuill virtual-DOM tree-node abstract base class
 */
var Node = P(function(_) {
  _[L] = 0;
  _[R] = 0
  _.parent = 0;

  var id = 0;
  function uniqueNodeId() { return id += 1; }
  this.byId = {};

  _.init = function() {
    this.id = uniqueNodeId();
    Node.byId[this.id] = this;

    this.ends = {};
    this.ends[L] = 0;
    this.ends[R] = 0;
  };

  _.dispose = function() { delete Node.byId[this.id]; };

  _.toString = function() { return '{{ MathQuill Node #'+this.id+' }}'; };

  _.jQ = $();
  _.jQadd = function(jQ) { return this.jQ = this.jQ.add(jQ); };
  _.jQize = function(jQ) {
    // jQuery-ifies this.html() and links up the .jQ of all corresponding Nodes
    var jQ = $(jQ || this.html());

    function jQadd(el) {
      if (el.getAttribute) {
        var cmdId = el.getAttribute('mathquill-command-id');
        var blockId = el.getAttribute('mathquill-block-id');
        if (cmdId) Node.byId[cmdId].jQadd(el);
        if (blockId) Node.byId[blockId].jQadd(el);
      }
      for (el = el.firstChild; el; el = el.nextSibling) {
        jQadd(el);
      }
    }

    for (var i = 0; i < jQ.length; i += 1) jQadd(jQ[i]);
    return jQ;
  };

  _.createDir = function(dir, cursor) {
    prayDirection(dir);
    var node = this;
    node.jQize();
    node.jQ.insDirOf(dir, cursor.jQ);
    cursor[dir] = node.adopt(cursor.parent, cursor[L], cursor[R]);
    return node;
  };
  _.createLeftOf = function(el) { return this.createDir(L, el); };

  _.selectChildren = function(leftEnd, rightEnd) {
    return Selection(leftEnd, rightEnd);
  };

  _.bubble = iterator(function(yield_) {
    for (var ancestor = this; ancestor; ancestor = ancestor.parent) {
      var result = yield_(ancestor);
      if (result === false) break;
    }

    return this;
  });

  _.postOrder = iterator(function(yield_) {
    (function recurse(descendant) {
      descendant.eachChild(recurse);
      yield_(descendant);
    })(this);

    return this;
  });

  _.isEmpty = function() {
    return this.ends[L] === 0 && this.ends[R] === 0;
  };
  
  _.isStyleBlock = function() {
    return false;
  };

  _.children = function() {
    return Fragment(this.ends[L], this.ends[R]);
  };

  _.eachChild = function() {
    var children = this.children();
    children.each.apply(children, arguments);
    return this;
  };

  _.foldChildren = function(fold, fn) {
    return this.children().fold(fold, fn);
  };

  _.withDirAdopt = function(dir, parent, withDir, oppDir) {
    Fragment(this, this).withDirAdopt(dir, parent, withDir, oppDir);
    return this;
  };

  _.adopt = function(parent, leftward, rightward) {
    Fragment(this, this).adopt(parent, leftward, rightward);
    return this;
  };

  _.disown = function() {
    Fragment(this, this).disown();
    return this;
  };

  _.remove = function() {
    this.jQ.remove();
    this.postOrder('dispose');
    return this.disown();
  };
});

function prayWellFormed(parent, leftward, rightward) {
  pray('a parent is always present', parent);
  pray('leftward is properly set up', (function() {
    // either it's empty and \`rightward\` is the left end child (possibly empty)
    if (!leftward) return parent.ends[L] === rightward;

    // or it's there and its [R] and .parent are properly set up
    return leftward[R] === rightward && leftward.parent === parent;
  })());

  pray('rightward is properly set up', (function() {
    // either it's empty and \`leftward\` is the right end child (possibly empty)
    if (!rightward) return parent.ends[R] === leftward;

    // or it's there and its [L] and .parent are properly set up
    return rightward[L] === leftward && rightward.parent === parent;
  })());
}


/**
 * An entity outside the virtual tree with one-way pointers (so it's only a
 * "view" of part of the tree, not an actual node/entity in the tree) that
 * delimits a doubly-linked list of sibling nodes.
 * It's like a fanfic love-child between HTML DOM DocumentFragment and the Range
 * classes: like DocumentFragment, its contents must be sibling nodes
 * (unlike Range, whose contents are arbitrary contiguous pieces of subtrees),
 * but like Range, it has only one-way pointers to its contents, its contents
 * have no reference to it and in fact may still be in the visible tree (unlike
 * DocumentFragment, whose contents must be detached from the visible tree
 * and have their 'parent' pointers set to the DocumentFragment).
 */
var Fragment = P(function(_) {
  _.init = function(withDir, oppDir, dir) {
    if (dir === undefined) dir = L;
    prayDirection(dir);

    pray('no half-empty fragments', !withDir === !oppDir);

    this.ends = {};

    if (!withDir) return;

    pray('withDir is passed to Fragment', withDir instanceof Node);
    pray('oppDir is passed to Fragment', oppDir instanceof Node);
    pray('withDir and oppDir have the same parent',
         withDir.parent === oppDir.parent);

    this.ends[dir] = withDir;
    this.ends[-dir] = oppDir;

    // To build the jquery collection for a fragment, accumulate elements
    // into an array and then call jQ.add once on the result. jQ.add sorts the
    // collection according to document order each time it is called, so
    // building a collection by folding jQ.add directly takes more than
    // quadratic time in the number of elements.
    //
    // https://github.com/jquery/jquery/blob/2.1.4/src/traversing.js#L112
    var accum = this.fold([], function (accum, el) {
      accum.push.apply(accum, el.jQ.get());
      return accum;
    });

    this.jQ = this.jQ.add(accum);
  };
  _.jQ = $();

  // like Cursor::withDirInsertAt(dir, parent, withDir, oppDir)
  _.withDirAdopt = function(dir, parent, withDir, oppDir) {
    return (dir === L ? this.adopt(parent, withDir, oppDir)
                      : this.adopt(parent, oppDir, withDir));
  };
  _.adopt = function(parent, leftward, rightward) {
    prayWellFormed(parent, leftward, rightward);

    var self = this;
    self.disowned = false;

    var leftEnd = self.ends[L];
    if (!leftEnd) return this;

    var rightEnd = self.ends[R];

    if (leftward) {
      // NB: this is handled in the ::each() block
      // leftward[R] = leftEnd
    } else {
      parent.ends[L] = leftEnd;
    }

    if (rightward) {
      rightward[L] = rightEnd;
    } else {
      parent.ends[R] = rightEnd;
    }

    self.ends[R][R] = rightward;

    self.each(function(el) {
      el[L] = leftward;
      el.parent = parent;
      if (leftward) leftward[R] = el;

      leftward = el;
    });

    return self;
  };

  _.disown = function() {
    var self = this;
    var leftEnd = self.ends[L];

    // guard for empty and already-disowned fragments
    if (!leftEnd || self.disowned) return self;

    self.disowned = true;

    var rightEnd = self.ends[R]
    var parent = leftEnd.parent;

    prayWellFormed(parent, leftEnd[L], leftEnd);
    prayWellFormed(parent, rightEnd, rightEnd[R]);

    if (leftEnd[L]) {
      leftEnd[L][R] = rightEnd[R];
    } else {
      parent.ends[L] = rightEnd[R];
    }

    if (rightEnd[R]) {
      rightEnd[R][L] = leftEnd[L];
    } else {
      parent.ends[R] = leftEnd[L];
    }

    return self;
  };

  _.remove = function() {
    this.jQ.remove();
    this.each('postOrder', 'dispose');
    return this.disown();
  };

  _.each = iterator(function(yield_) {
    var self = this;
    var el = self.ends[L];
    if (!el) return self;

    for (; el !== self.ends[R][R]; el = el[R]) {
      var result = yield_(el);
      if (result === false) break;
    }

    return self;
  });

  _.fold = function(fold, fn) {
    this.each(function(el) {
      fold = fn.call(this, fold, el);
    });

    return fold;
  };
});


/**
 * Registry of LaTeX commands and commands created when typing
 * a single character.
 *
 * (Commands are all subclasses of Node.)
 */
var LatexCmds = {}, CharCmds = {};
/********************************************
 * Cursor and Selection "singleton" classes
 *******************************************/

/* The main thing that manipulates the Math DOM. Makes sure to manipulate the
HTML DOM to match. */

/* Sort of singletons, since there should only be one per editable math
textbox, but any one HTML document can contain many such textboxes, so any one
JS environment could actually contain many instances. */

//A fake cursor in the fake textbox that the math is rendered in.
var Cursor = P(Point, function(_) {
  _.init = function(initParent, options) {
    this.parent = initParent;
    this.options = options;

    var jQ = this.jQ = this._jQ = $('<span class="mq-cursor">&#8203;</span>');
    //closured for setInterval
    this.blink = function(){ jQ.toggleClass('mq-blink'); };

    this.upDownCache = {};
  };

  _.show = function() {
    this.jQ = this._jQ.removeClass('mq-blink');
    if ('intervalId' in this) //already was shown, just restart interval
      clearInterval(this.intervalId);
    else { //was hidden and detached, insert this.jQ back into HTML DOM
      if (this[R]) {
        if (this.selection && this.selection.ends[L][L] === this[L])
          this.jQ.insertBefore(this.selection.jQ);
        else
          this.jQ.insertBefore(this[R].jQ.first());
      }
      else
        this.jQ.appendTo(this.parent.jQ);
      this.parent.focus();
    }
    this.intervalId = setInterval(this.blink, 500);
    return this;
  };
  _.hide = function() {
    if ('intervalId' in this)
      clearInterval(this.intervalId);
    delete this.intervalId;
    this.jQ.detach();
    this.jQ = $();
    return this;
  };

  _.withDirInsertAt = function(dir, parent, withDir, oppDir) {
    var oldParent = this.parent;
    this.parent = parent;
    this[dir] = withDir;
    this[-dir] = oppDir;
    // by contract, .blur() is called after all has been said and done
    // and the cursor has actually been moved
    // FIXME pass cursor to .blur() so text can fix cursor pointers when removing itself
    if (oldParent !== parent && oldParent.blur) oldParent.blur(this);
  };
  _.insDirOf = function(dir, el) {
    prayDirection(dir);
    this.jQ.insDirOf(dir, el.jQ);
    this.withDirInsertAt(dir, el.parent, el[dir], el);
    this.parent.jQ.addClass('mq-hasCursor');
    return this;
  };
  _.insLeftOf = function(el) { return this.insDirOf(L, el); };
  _.insRightOf = function(el) { return this.insDirOf(R, el); };

  _.insAtDirEnd = function(dir, el) {
    prayDirection(dir);
    this.jQ.insAtDirEnd(dir, el.jQ);
    this.withDirInsertAt(dir, el, 0, el.ends[dir]);
    el.focus();
    return this;
  };
  _.insAtLeftEnd = function(el) { return this.insAtDirEnd(L, el); };
  _.insAtRightEnd = function(el) { return this.insAtDirEnd(R, el); };

  /**
   * jump up or down from one block Node to another:
   * - cache the current Point in the node we're jumping from
   * - check if there's a Point in it cached for the node we're jumping to
   *   + if so put the cursor there,
   *   + if not seek a position in the node that is horizontally closest to
   *     the cursor's current position
   */
  _.jumpUpDown = function(from, to) {
    var self = this;
    self.upDownCache[from.id] = Point.copy(self);
    var cached = self.upDownCache[to.id];
    if (cached) {
      cached[R] ? self.insLeftOf(cached[R]) : self.insAtRightEnd(cached.parent);
    }
    else {
      var pageX = self.offset().left;
      to.seek(pageX, self);
    }
  };
  _.offset = function() {
    //in Opera 11.62, .getBoundingClientRect() and hence jQuery::offset()
    //returns all 0's on inline elements with negative margin-right (like
    //the cursor) at the end of their parent, so temporarily remove the
    //negative margin-right when calling jQuery::offset()
    //Opera bug DSK-360043
    //http://bugs.jquery.com/ticket/11523
    //https://github.com/jquery/jquery/pull/717
    var self = this, offset = self.jQ.removeClass('mq-cursor').offset();
    self.jQ.addClass('mq-cursor');
    return offset;
  }
  _.unwrapGramp = function() {
    var gramp = this.parent.parent;
    var greatgramp = gramp.parent;
    var rightward = gramp[R];
    var cursor = this;

    var leftward = gramp[L];
    gramp.disown().eachChild(function(uncle) {
      if (uncle.isEmpty()) return;

      uncle.children()
        .adopt(greatgramp, leftward, rightward)
        .each(function(cousin) {
          cousin.jQ.insertBefore(gramp.jQ.first());
        })
      ;

      leftward = uncle.ends[R];
    });

    if (!this[R]) { //then find something to be rightward to insLeftOf
      if (this[L])
        this[R] = this[L][R];
      else {
        while (!this[R]) {
          this.parent = this.parent[R];
          if (this.parent)
            this[R] = this.parent.ends[L];
          else {
            this[R] = gramp[R];
            this.parent = greatgramp;
            break;
          }
        }
      }
    }
    if (this[R])
      this.insLeftOf(this[R]);
    else
      this.insAtRightEnd(greatgramp);

    gramp.jQ.remove();

    if (gramp[L].siblingDeleted) gramp[L].siblingDeleted(cursor.options, R);
    if (gramp[R].siblingDeleted) gramp[R].siblingDeleted(cursor.options, L);
  };
  _.startSelection = function() {
    var anticursor = this.anticursor = Point.copy(this);
    var ancestors = anticursor.ancestors = {}; // a map from each ancestor of
      // the anticursor, to its child that is also an ancestor; in other words,
      // the anticursor's ancestor chain in reverse order
    for (var ancestor = anticursor; ancestor.parent; ancestor = ancestor.parent) {
      ancestors[ancestor.parent.id] = ancestor;
    }
  };
  _.endSelection = function() {
    delete this.anticursor;
  };
  _.select = function() {
    var anticursor = this.anticursor;
    if (this[L] === anticursor[L] && this.parent === anticursor.parent) return false;

    // Find the lowest common ancestor (\`lca\`), and the ancestor of the cursor
    // whose parent is the LCA (which'll be an end of the selection fragment).
    for (var ancestor = this; ancestor.parent; ancestor = ancestor.parent) {
      if (ancestor.parent.id in anticursor.ancestors) {
        var lca = ancestor.parent;
        break;
      }
    }
    pray('cursor and anticursor in the same tree', lca);
    // The cursor and the anticursor should be in the same tree, because the
    // mousemove handler attached to the document, unlike the one attached to
    // the root HTML DOM element, doesn't try to get the math tree node of the
    // mousemove target, and Cursor::seek() based solely on coordinates stays
    // within the tree of \`this\` cursor's root.

    // The other end of the selection fragment, the ancestor of the anticursor
    // whose parent is the LCA.
    var antiAncestor = anticursor.ancestors[lca.id];

    // Now we have two either Nodes or Points, guaranteed to have a common
    // parent and guaranteed that if both are Points, they are not the same,
    // and we have to figure out which is the left end and which the right end
    // of the selection.
    var leftEnd, rightEnd, dir = R;

    // This is an extremely subtle algorithm.
    // As a special case, \`ancestor\` could be a Point and \`antiAncestor\` a Node
    // immediately to \`ancestor\`'s left.
    // In all other cases,
    // - both Nodes
    // - \`ancestor\` a Point and \`antiAncestor\` a Node
    // - \`ancestor\` a Node and \`antiAncestor\` a Point
    // \`antiAncestor[R] === rightward[R]\` for some \`rightward\` that is
    // \`ancestor\` or to its right, if and only if \`antiAncestor\` is to
    // the right of \`ancestor\`.
    if (ancestor[L] !== antiAncestor) {
      for (var rightward = ancestor; rightward; rightward = rightward[R]) {
        if (rightward[R] === antiAncestor[R]) {
          dir = L;
          leftEnd = ancestor;
          rightEnd = antiAncestor;
          break;
        }
      }
    }
    if (dir === R) {
      leftEnd = antiAncestor;
      rightEnd = ancestor;
    }

    // only want to select Nodes up to Points, can't select Points themselves
    if (leftEnd instanceof Point) leftEnd = leftEnd[R];
    if (rightEnd instanceof Point) rightEnd = rightEnd[L];

    this.hide().selection = lca.selectChildren(leftEnd, rightEnd);
    this.insDirOf(dir, this.selection.ends[dir]);
    this.selectionChanged();
    return true;
  };

  _.clearSelection = function() {
    if (this.selection) {
      this.selection.clear();
      delete this.selection;
      this.selectionChanged();
    }
    return this;
  };
  _.deleteSelection = function() {
    if (!this.selection) return;

    this[L] = this.selection.ends[L][L];
    this[R] = this.selection.ends[R][R];
    this.selection.remove();
    this.selectionChanged();
    delete this.selection;
  };
  _.replaceSelection = function() {
    var seln = this.selection;
    if (seln) {
      this[L] = seln.ends[L][L];
      this[R] = seln.ends[R][R];
      delete this.selection;
    }
    return seln;
  };
  _.depth = function() {
    var node = this;
    var depth = 0;
    while (node = node.parent) {
      depth += (node instanceof MathBlock) ? 1 : 0;
    }
    return depth;
  };
  _.isTooDeep = function(offset) {
    if (this.options.maxDepth !== undefined) {
      return this.depth() + (offset || 0) > this.options.maxDepth;
    }
  };
});

var Selection = P(Fragment, function(_, super_) {
  _.init = function() {
    super_.init.apply(this, arguments);
    this.jQ = this.jQ.wrapAll('<span class="mq-selection"></span>').parent();
      //can't do wrapAll(this.jQ = $(...)) because wrapAll will clone it
  };
  _.adopt = function() {
    this.jQ.replaceWith(this.jQ = this.jQ.children());
    return super_.adopt.apply(this, arguments);
  };
  _.clear = function() {
    // using the browser's native .childNodes property so that we
    // don't discard text nodes.
    this.jQ.replaceWith(this.jQ[0].childNodes);
    return this;
  };
  _.join = function(methodName) {
    return this.fold('', function(fold, child) {
      return fold + child[methodName]();
    });
  };
});
/*********************************************
 * Controller for a MathQuill instance,
 * on which services are registered with
 *
 *   Controller.open(function(_) { ... });
 *
 ********************************************/

var Controller = P(function(_) {
  _.init = function(root, container, options) {
    this.id = root.id;
    this.data = {};

    this.root = root;
    this.container = container;
    this.options = options;

    root.controller = this;

    this.cursor = root.cursor = Cursor(root, options);
    // TODO: stop depending on root.cursor, and rm it
  };

  _.handle = function(name, dir) {
    var handlers = this.options.handlers;
    if (handlers && handlers.fns[name]) {
      var mq = handlers.APIClasses[this.KIND_OF_MQ](this);
      if (dir === L || dir === R) handlers.fns[name](dir, mq);
      else handlers.fns[name](mq);
    }
  };

  var notifyees = [];
  this.onNotify = function(f) { notifyees.push(f); };
  _.notify = function() {
    for (var i = 0; i < notifyees.length; i += 1) {
      notifyees[i].apply(this.cursor, arguments);
    }
    return this;
  };
});
/*********************************************************
 * The publicly exposed MathQuill API.
 ********************************************************/

var API = {}, Options = P(), optionProcessors = {}, Progenote = P(), EMBEDS = {};

/**
 * Interface Versioning (#459, #495) to allow us to virtually guarantee
 * backcompat. v0.10.x introduces it, so for now, don't completely break the
 * API for people who don't know about it, just complain with console.warn().
 *
 * The methods are shimmed in outro.js so that MQ.MathField.prototype etc can
 * be accessed.
 */
function insistOnInterVer() {
  if (window.console) console.warn(
    'You are using the MathQuill API without specifying an interface version, ' +
    'which will fail in v1.0.0. Easiest fix is to do the following before ' +
    'doing anything else:\\n' +
    '\\n' +
    '    MathQuill = MathQuill.getInterface(1);\\n' +
    '    // now MathQuill.MathField() works like it used to\\n' +
    '\\n' +
    'See also the "\`dev\` branch (2014\\u20132015) \\u2192 v0.10.0 Migration Guide" at\\n' +
    '  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide'
  );
}
// globally exported API object
function MathQuill(el) {
  insistOnInterVer();
  return MQ1(el);
};
MathQuill.prototype = Progenote.p;
MathQuill.VERSION = "v0.11.0";
MathQuill.interfaceVersion = function(v) {
  // shim for #459-era interface versioning (ended with #495)
  if (v !== 1) throw 'Only interface version 1 supported. You specified: ' + v;
  insistOnInterVer = function() {
    if (window.console) console.warn(
      'You called MathQuill.interfaceVersion(1); to specify the interface ' +
      'version, which will fail in v1.0.0. You can fix this easily by doing ' +
      'this before doing anything else:\\n' +
      '\\n' +
      '    MathQuill = MathQuill.getInterface(1);\\n' +
      '    // now MathQuill.MathField() works like it used to\\n' +
      '\\n' +
      'See also the "\`dev\` branch (2014\\u20132015) \\u2192 v0.10.0 Migration Guide" at\\n' +
      '  https://github.com/mathquill/mathquill/wiki/%60dev%60-branch-(2014%E2%80%932015)-%E2%86%92-v0.10.0-Migration-Guide'
    );
  };
  insistOnInterVer();
  return MathQuill;
};
MathQuill.getInterface = getInterface;

var MIN = getInterface.MIN = 1, MAX = getInterface.MAX = 2;
function getInterface(v) {
  if (!(MIN <= v && v <= MAX)) throw 'Only interface versions between ' +
    MIN + ' and ' + MAX + ' supported. You specified: ' + v;

  /**
   * Function that takes an HTML element and, if it's the root HTML element of a
   * static math or math or text field, returns an API object for it (else, null).
   *
   *   var mathfield = MQ.MathField(mathFieldSpan);
   *   assert(MQ(mathFieldSpan).id === mathfield.id);
   *   assert(MQ(mathFieldSpan).id === MQ(mathFieldSpan).id);
   *
   */
  function MQ(el) {
    if (!el || !el.nodeType) return null; // check that \`el\` is a HTML element, using the
      // same technique as jQuery: https://github.com/jquery/jquery/blob/679536ee4b7a92ae64a5f58d90e9cc38c001e807/src/core/init.js#L92
    var blockId = $(el).children('.mq-root-block').attr(mqBlockId);
    var ctrlr = blockId && Node.byId[blockId].controller;
    return ctrlr ? APIClasses[ctrlr.KIND_OF_MQ](ctrlr) : null;
  };
  var APIClasses = {};

  MQ.L = L;
  MQ.R = R;
  MQ.saneKeyboardEvents = saneKeyboardEvents;

  function config(currentOptions, newOptions) {
    if (newOptions && newOptions.handlers) {
      newOptions.handlers = { fns: newOptions.handlers, APIClasses: APIClasses };
    }
    for (var name in newOptions) if (newOptions.hasOwnProperty(name)) {
      var value = newOptions[name], processor = optionProcessors[name];
      currentOptions[name] = (processor ? processor(value) : value);
    }
  }
  MQ.config = function(opts) { config(Options.p, opts); return this; };
  MQ.registerEmbed = function(name, options) {
    if (!/^[a-z][a-z0-9]*$/i.test(name)) {
      throw 'Embed name must start with letter and be only letters and digits';
    }
    EMBEDS[name] = options;
  };

  var AbstractMathQuill = APIClasses.AbstractMathQuill = P(Progenote, function(_) {
    _.init = function(ctrlr) {
      this.__controller = ctrlr;
      this.__options = ctrlr.options;
      this.id = ctrlr.id;
      this.data = ctrlr.data;
    };
    _.__mathquillify = function(classNames) {
      var ctrlr = this.__controller, root = ctrlr.root, el = ctrlr.container;
      ctrlr.createTextarea();

      var contents = el.addClass(classNames).contents().detach();
      root.jQ =
        $('<span class="mq-root-block"/>').attr(mqBlockId, root.id).appendTo(el);
      this.latex(contents.text());

      this.revert = function() {
        return el.empty().unbind('.mathquill')
        .removeClass('mq-editable-field mq-math-mode mq-text-mode')
        .append(contents);
      };
    };
    _.config = function(opts) { config(this.__options, opts); return this; };
    _.el = function() { return this.__controller.container[0]; };
    _.text = function() { return this.__controller.exportText(); };
    _.latex = function(latex) {
      if (arguments.length > 0) {
        this.__controller.renderLatexMath(latex);
        if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
        return this;
      }
      return this.__controller.exportLatex();
    };
    _.html = function() {
      return this.__controller.root.jQ.html()
        .replace(/ mathquill-(?:command|block)-id="?\\d+"?/g, '')
        .replace(/<span class="?mq-cursor( mq-blink)?"?>.?<\\/span>/i, '')
        .replace(/ mq-hasCursor|mq-hasCursor ?/, '')
        .replace(/ class=(""|(?= |>))/g, '');
    };
    _.reflow = function() {
      this.__controller.root.postOrder('reflow');
      return this;
    };
  });
  MQ.prototype = AbstractMathQuill.prototype;

  APIClasses.EditableField = P(AbstractMathQuill, function(_, super_) {
    _.__mathquillify = function() {
      super_.__mathquillify.apply(this, arguments);
      this.__controller.editable = true;
      this.__controller.delegateMouseEvents();
      this.__controller.editablesTextareaEvents();
      return this;
    };
    _.focus = function() { this.__controller.textarea.focus(); return this; };
    _.blur = function() { this.__controller.textarea.blur(); return this; };
    _.write = function(latex) {
      this.__controller.writeLatex(latex);
      this.__controller.scrollHoriz();
      if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
      return this;
    };
    _.empty = function() {
      var root = this.__controller.root, cursor = this.__controller.cursor;
      root.eachChild('postOrder', 'dispose');
      root.ends[L] = root.ends[R] = 0;
      root.jQ.empty();
      delete cursor.selection;
      cursor.insAtRightEnd(root);
      return this;
    };
    _.cmd = function(cmd) {
      var ctrlr = this.__controller.notify(), cursor = ctrlr.cursor;
      if (/^\\\\[a-z]+$/i.test(cmd) && !cursor.isTooDeep()) {
        cmd = cmd.slice(1);
        var klass = LatexCmds[cmd];
        if (klass) {
          cmd = klass(cmd);
          if (cursor.selection) cmd.replaces(cursor.replaceSelection());
          cmd.createLeftOf(cursor.show());
          this.__controller.scrollHoriz();
        }
        else /* TODO: API needs better error reporting */;
      }
      else cursor.parent.write(cursor, cmd);
      if (ctrlr.blurred) cursor.hide().parent.blur();
      return this;
    };
    _.select = function() {
      var ctrlr = this.__controller;
      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
      while (ctrlr.cursor[L]) ctrlr.selectLeft();
      return this;
    };
    _.clearSelection = function() {
      this.__controller.cursor.clearSelection();
      return this;
    };

    _.moveToDirEnd = function(dir) {
      this.__controller.notify('move').cursor.insAtDirEnd(dir, this.__controller.root);
      return this;
    };
    _.moveToLeftEnd = function() { return this.moveToDirEnd(L); };
    _.moveToRightEnd = function() { return this.moveToDirEnd(R); };

    _.keystroke = function(keys) {
      var keys = keys.replace(/^\\s+|\\s+$/g, '').split(/\\s+/);
      for (var i = 0; i < keys.length; i += 1) {
        this.__controller.keystroke(keys[i], { preventDefault: noop });
      }
      return this;
    };
    _.typedText = function(text) {
      for (var i = 0; i < text.length; i += 1) this.__controller.typedText(text.charAt(i));
      return this;
    };
    _.dropEmbedded = function(pageX, pageY, options) {
      var clientX = pageX - $(window).scrollLeft();
      var clientY = pageY - $(window).scrollTop();

      var el = document.elementFromPoint(clientX, clientY);
      this.__controller.seek($(el), pageX, pageY);
      var cmd = Embed().setOptions(options);
      cmd.createLeftOf(this.__controller.cursor);
    };
    _.clickAt = function(clientX, clientY, target) {
      target = target || document.elementFromPoint(clientX, clientY);

      var ctrlr = this.__controller, root = ctrlr.root;
      if (!jQuery.contains(root.jQ[0], target)) target = root.jQ[0];
      ctrlr.seek($(target), clientX + pageXOffset, clientY + pageYOffset);
      if (ctrlr.blurred) this.focus();
      return this;
    };
    _.ignoreNextMousedown = function(fn) {
      this.__controller.cursor.options.ignoreNextMousedown = fn;
      return this;
    };
  });
  MQ.EditableField = function() { throw "wtf don't call me, I'm 'abstract'"; };
  MQ.EditableField.prototype = APIClasses.EditableField.prototype;

  /**
   * Export the API functions that MathQuill-ify an HTML element into API objects
   * of each class. If the element had already been MathQuill-ified but into a
   * different kind (or it's not an HTML element), return null.
   */
  for (var kind in API) (function(kind, defAPIClass) {
    var APIClass = APIClasses[kind] = defAPIClass(APIClasses);
    MQ[kind] = function(el, opts) {
      var mq = MQ(el);
      if (mq instanceof APIClass || !el || !el.nodeType) return mq;
      var ctrlr = Controller(APIClass.RootBlock(), $(el), Options());
      ctrlr.KIND_OF_MQ = kind;
      return APIClass(ctrlr).__mathquillify(opts, v);
    };
    MQ[kind].prototype = APIClass.prototype;
  }(kind, API[kind]));

  return MQ;
}

MathQuill.noConflict = function() {
  window.MathQuill = origMathQuill;
  return MathQuill;
};
var origMathQuill = window.MathQuill;
window.MathQuill = MathQuill;

function RootBlockMixin(_) {
  var names = 'moveOutOf deleteOutOf selectOutOf upOutOf downOutOf'.split(' ');
  for (var i = 0; i < names.length; i += 1) (function(name) {
    _[name] = function(dir) { this.controller.handle(name, dir); };
  }(names[i]));
  _.reflow = function() {
    this.controller.handle('reflow');
    this.controller.handle('edited');
    this.controller.handle('edit');
  };
}
/*************************************************
 * Sane Keyboard Events Shim
 *
 * An abstraction layer wrapping the textarea in
 * an object with methods to manipulate and listen
 * to events on, that hides all the nasty cross-
 * browser incompatibilities behind a uniform API.
 *
 * Design goal: This is a *HARD* internal
 * abstraction barrier. Cross-browser
 * inconsistencies are not allowed to leak through
 * and be dealt with by event handlers. All future
 * cross-browser issues that arise must be dealt
 * with here, and if necessary, the API updated.
 *
 * Organization:
 * - key values map and stringify()
 * - saneKeyboardEvents()
 *    + defer() and flush()
 *    + event handler logic
 *    + attach event handlers and export methods
 ************************************************/

var saneKeyboardEvents = (function() {
  // The following [key values][1] map was compiled from the
  // [DOM3 Events appendix section on key codes][2] and
  // [a widely cited report on cross-browser tests of key codes][3],
  // except for 10: 'Enter', which I've empirically observed in Safari on iOS
  // and doesn't appear to conflict with any other known key codes.
  //
  // [1]: http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120614/#keys-keyvalues
  // [2]: http://www.w3.org/TR/2012/WD-DOM-Level-3-Events-20120614/#fixed-virtual-key-codes
  // [3]: http://unixpapa.com/js/key.html
  var KEY_VALUES = {
    8: 'Backspace',
    9: 'Tab',

    10: 'Enter', // for Safari on iOS

    13: 'Enter',

    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    20: 'CapsLock',

    27: 'Esc',

    32: 'Spacebar',

    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',

    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',

    45: 'Insert',

    46: 'Del',

    144: 'NumLock'
  };

  // To the extent possible, create a normalized string representation
  // of the key combo (i.e., key code and modifier keys).
  function stringify(evt) {
    var which = evt.which || evt.keyCode;
    var keyVal = KEY_VALUES[which];
    var key;
    var modifiers = [];

    if (evt.ctrlKey) modifiers.push('Ctrl');
    if (evt.originalEvent && evt.originalEvent.metaKey) modifiers.push('Meta');
    if (evt.altKey) modifiers.push('Alt');
    if (evt.shiftKey) modifiers.push('Shift');

    key = keyVal || String.fromCharCode(which);

    if (!modifiers.length && !keyVal) return key;

    modifiers.push(key);
    return modifiers.join('-');
  }

  // create a keyboard events shim that calls callbacks at useful times
  // and exports useful public methods
  return function saneKeyboardEvents(el, handlers) {
    var keydown = null;
    var keypress = null;

    var textarea = jQuery(el);
    var target = jQuery(handlers.container || textarea);

    // checkTextareaFor() is called after key or clipboard events to
    // say "Hey, I think something was just typed" or "pasted" etc,
    // so that at all subsequent opportune times (next event or timeout),
    // will check for expected typed or pasted text.
    // Need to check repeatedly because #135: in Safari 5.1 (at least),
    // after selecting something and then typing, the textarea is
    // incorrectly reported as selected during the input event (but not
    // subsequently).
    var checkTextarea = noop, timeoutId;
    function checkTextareaFor(checker) {
      checkTextarea = checker;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checker);
    }
    function checkTextareaOnce(checker) {
      checkTextareaFor(function(e) {
        checkTextarea = noop;
        clearTimeout(timeoutId);
        checker(e);
      });
    }
    target.bind('keydown keypress input keyup focusout paste', function(e) { checkTextarea(e); });


    // -*- public methods -*- //
    function select(text) {
      // check textarea at least once/one last time before munging (so
      // no race condition if selection happens after keypress/paste but
      // before checkTextarea), then never again ('cos it's been munged)
      checkTextarea();
      checkTextarea = noop;
      clearTimeout(timeoutId);

      textarea.val(text);
      if (text && textarea[0].select) textarea[0].select();
      shouldBeSelected = !!text;
    }
    var shouldBeSelected = false;

    // -*- helper subroutines -*- //

    // Determine whether there's a selection in the textarea.
    // This will always return false in IE < 9, which don't support
    // HTMLTextareaElement::selection{Start,End}.
    function hasSelection() {
      var dom = textarea[0];

      if (!('selectionStart' in dom)) return false;
      return dom.selectionStart !== dom.selectionEnd;
    }

    function handleKey() {
      handlers.keystroke(stringify(keydown), keydown);
    }

    // -*- event handlers -*- //
    function onKeydown(e) {
      keydown = e;
      keypress = null;

      if (shouldBeSelected) checkTextareaOnce(function(e) {
        if (!(e && e.type === 'focusout') && textarea[0].select) {
          // re-select textarea in case it's an unrecognized key that clears
          // the selection, then never again, 'cos next thing might be blur
          textarea[0].select();
        }
      });

      handleKey();
    }

    function onKeypress(e) {
      // call the key handler for repeated keypresses.
      // This excludes keypresses that happen directly
      // after keydown.  In that case, there will be
      // no previous keypress, so we skip it here
      if (keydown && keypress) handleKey();

      keypress = e;

      checkTextareaFor(typedText);
    }
    function onKeyup(e) {
      // Handle case of no keypress event being sent
      if (!!keydown && !keypress) checkTextareaFor(typedText);
    }
    function typedText() {
      // If there is a selection, the contents of the textarea couldn't
      // possibly have just been typed in.
      // This happens in browsers like Firefox and Opera that fire
      // keypress for keystrokes that are not text entry and leave the
      // selection in the textarea alone, such as Ctrl-C.
      // Note: we assume that browsers that don't support hasSelection()
      // also never fire keypress on keystrokes that are not text entry.
      // This seems reasonably safe because:
      // - all modern browsers including IE 9+ support hasSelection(),
      //   making it extremely unlikely any browser besides IE < 9 won't
      // - as far as we know IE < 9 never fires keypress on keystrokes
      //   that aren't text entry, which is only as reliable as our
      //   tests are comprehensive, but the IE < 9 way to do
      //   hasSelection() is poorly documented and is also only as
      //   reliable as our tests are comprehensive
      // If anything like #40 or #71 is reported in IE < 9, see
      // b1318e5349160b665003e36d4eedd64101ceacd8
      if (hasSelection()) return;

      var text = textarea.val();
      if (text.length === 1) {
        textarea.val('');
        handlers.typedText(text);
      } // in Firefox, keys that don't type text, just clear seln, fire keypress
      // https://github.com/mathquill/mathquill/issues/293#issuecomment-40997668
      else if (text && textarea[0].select) textarea[0].select(); // re-select if that's why we're here
    }

    function onBlur() { keydown = keypress = null; }

    function onPaste(e) {
      // browsers are dumb.
      //
      // In Linux, middle-click pasting causes onPaste to be called,
      // when the textarea is not necessarily focused.  We focus it
      // here to ensure that the pasted text actually ends up in the
      // textarea.
      //
      // It's pretty nifty that by changing focus in this handler,
      // we can change the target of the default action.  (This works
      // on keydown too, FWIW).
      //
      // And by nifty, we mean dumb (but useful sometimes).
      textarea.focus();

      checkTextareaFor(pastedText);
    }
    function pastedText() {
      var text = textarea.val();
      textarea.val('');
      if (text) handlers.paste(text);
    }

    // -*- attach event handlers -*- //
    target.bind({
      keydown: onKeydown,
      keypress: onKeypress,
      keyup: onKeyup,
      focusout: onBlur,
      cut: function() { checkTextareaOnce(function() { handlers.cut(); }); },
      copy: function() { checkTextareaOnce(function() { handlers.copy(); }); },
      paste: onPaste
    });

    // -*- export public methods -*- //
    return {
      select: select
    };
  };
}());
var Parser = P(function(_, super_, Parser) {
  // The Parser object is a wrapper for a parser function.
  // Externally, you use one to parse a string by calling
  //   var result = SomeParser.parse('Me Me Me! Parse Me!');
  // You should never call the constructor, rather you should
  // construct your Parser from the base parsers and the
  // parser combinator methods.

  function parseError(stream, message) {
    if (stream) {
      stream = "'"+stream+"'";
    }
    else {
      stream = 'EOF';
    }

    throw 'Parse Error: '+message+' at '+stream;
  }

  _.init = function(body) { this._ = body; };

  _.parse = function(stream) {
    return this.skip(eof)._(''+stream, success, parseError);

    function success(stream, result) { return result; }
  };

  // -*- primitive combinators -*- //
  _.or = function(alternative) {
    pray('or is passed a parser', alternative instanceof Parser);

    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      return self._(stream, onSuccess, failure);

      function failure(newStream) {
        return alternative._(stream, onSuccess, onFailure);
      }
    });
  };

  _.then = function(next) {
    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      return self._(stream, success, onFailure);

      function success(newStream, result) {
        var nextParser = (next instanceof Parser ? next : next(result));
        pray('a parser is returned', nextParser instanceof Parser);
        return nextParser._(newStream, onSuccess, onFailure);
      }
    });
  };

  // -*- optimized iterative combinators -*- //
  _.many = function() {
    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      var xs = [];
      while (self._(stream, success, failure));
      return onSuccess(stream, xs);

      function success(newStream, x) {
        stream = newStream;
        xs.push(x);
        return true;
      }

      function failure() {
        return false;
      }
    });
  };

  _.times = function(min, max) {
    if (arguments.length < 2) max = min;
    var self = this;

    return Parser(function(stream, onSuccess, onFailure) {
      var xs = [];
      var result = true;
      var failure;

      for (var i = 0; i < min; i += 1) {
        result = self._(stream, success, firstFailure);
        if (!result) return onFailure(stream, failure);
      }

      for (; i < max && result; i += 1) {
        result = self._(stream, success, secondFailure);
      }

      return onSuccess(stream, xs);

      function success(newStream, x) {
        xs.push(x);
        stream = newStream;
        return true;
      }

      function firstFailure(newStream, msg) {
        failure = msg;
        stream = newStream;
        return false;
      }

      function secondFailure(newStream, msg) {
        return false;
      }
    });
  };

  // -*- higher-level combinators -*- //
  _.result = function(res) { return this.then(succeed(res)); };
  _.atMost = function(n) { return this.times(0, n); };
  _.atLeast = function(n) {
    var self = this;
    return self.times(n).then(function(start) {
      return self.many().map(function(end) {
        return start.concat(end);
      });
    });
  };

  _.map = function(fn) {
    return this.then(function(result) { return succeed(fn(result)); });
  };

  _.skip = function(two) {
    return this.then(function(result) { return two.result(result); });
  };

  // -*- primitive parsers -*- //
  var string = this.string = function(str) {
    var len = str.length;
    var expected = "expected '"+str+"'";

    return Parser(function(stream, onSuccess, onFailure) {
      var head = stream.slice(0, len);

      if (head === str) {
        return onSuccess(stream.slice(len), head);
      }
      else {
        return onFailure(stream, expected);
      }
    });
  };

  var regex = this.regex = function(re) {
    pray('regexp parser is anchored', re.toString().charAt(1) === '^');

    var expected = 'expected '+re;

    return Parser(function(stream, onSuccess, onFailure) {
      var match = re.exec(stream);

      if (match) {
        var result = match[0];
        return onSuccess(stream.slice(result.length), result);
      }
      else {
        return onFailure(stream, expected);
      }
    });
  };

  var succeed = Parser.succeed = function(result) {
    return Parser(function(stream, onSuccess) {
      return onSuccess(stream, result);
    });
  };

  var fail = Parser.fail = function(msg) {
    return Parser(function(stream, _, onFailure) {
      return onFailure(stream, msg);
    });
  };

  var letter = Parser.letter = regex(/^[a-z]/i);
  var letters = Parser.letters = regex(/^[a-z]*/i);
  var digit = Parser.digit = regex(/^[0-9]/);
  var digits = Parser.digits = regex(/^[0-9]*/);
  var whitespace = Parser.whitespace = regex(/^\\s+/);
  var optWhitespace = Parser.optWhitespace = regex(/^\\s*/);

  var any = Parser.any = Parser(function(stream, onSuccess, onFailure) {
    if (!stream) return onFailure(stream, 'expected any character');

    return onSuccess(stream.slice(1), stream.charAt(0));
  });

  var all = Parser.all = Parser(function(stream, onSuccess, onFailure) {
    return onSuccess('', stream);
  });

  var eof = Parser.eof = Parser(function(stream, onSuccess, onFailure) {
    if (stream) return onFailure(stream, 'expected EOF');

    return onSuccess(stream, stream);
  });
});
Controller.open(function(_) {
  _.focusBlurEvents = function() {
    var ctrlr = this, root = ctrlr.root, cursor = ctrlr.cursor;
    var blurTimeout;
    ctrlr.textarea.focus(function() {
      ctrlr.blurred = false;
      clearTimeout(blurTimeout);
      ctrlr.container.addClass('mq-focused');
      if (!cursor.parent)
        cursor.insAtRightEnd(root);
      if (cursor.selection) {
        cursor.selection.jQ.removeClass('mq-blur');
        ctrlr.selectionChanged(); //re-select textarea contents after tabbing away and back
      }
      else
        cursor.show();
    }).blur(function() {
      ctrlr.blurred = true;
      blurTimeout = setTimeout(function() { // wait for blur on window; if
        root.postOrder('intentionalBlur'); // none, intentional blur: #264
        cursor.clearSelection().endSelection();
        blur();
      });
      $(window).bind('blur', windowBlur);
    });
    function windowBlur() { // blur event also fired on window, just switching
      clearTimeout(blurTimeout); // tabs/windows, not intentional blur
      if (cursor.selection) cursor.selection.jQ.addClass('mq-blur');
      blur();
    }
    function blur() { // not directly in the textarea blur handler so as to be
      cursor.hide().parent.blur(); // synchronous with/in the same frame as
      ctrlr.container.removeClass('mq-focused'); // clearing/blurring selection
      $(window).unbind('blur', windowBlur);
    }
    ctrlr.blurred = true;
    cursor.hide().parent.blur();
  };
});

/**
 * TODO: I wanted to move MathBlock::focus and blur here, it would clean
 * up lots of stuff like, TextBlock::focus is set to MathBlock::focus
 * and TextBlock::blur calls MathBlock::blur, when instead they could
 * use inheritance and super_.
 *
 * Problem is, there's lots of calls to .focus()/.blur() on nodes
 * outside Controller::focusBlurEvents(), such as .postOrder('blur') on
 * insertion, which if MathBlock::blur becomes Node::blur, would add the
 * 'blur' CSS class to all Symbol's (because .isEmpty() is true for all
 * of them).
 *
 * I'm not even sure there aren't other troublesome calls to .focus() or
 * .blur(), so this is TODO for now.
 */
/***********************************************
 * Export math in a human-readable text format
 * As you can see, only half-baked so far.
 **********************************************/

Controller.open(function(_, super_) {
  _.exportText = function() {
    return this.root.foldChildren('', function(text, child) {
      return text + child.text();
    });
  };
});
/********************************************************
 * Deals with mouse events for clicking, drag-to-select
 *******************************************************/

Controller.open(function(_) {
  Options.p.ignoreNextMousedown = noop;
  _.delegateMouseEvents = function() {
    var ultimateRootjQ = this.root.jQ;
    //drag-to-select event handling
    this.container.bind('mousedown.mathquill', function(e) {
      var rootjQ = $(e.target).closest('.mq-root-block');
      var root = Node.byId[rootjQ.attr(mqBlockId) || ultimateRootjQ.attr(mqBlockId)];
      var ctrlr = root.controller, cursor = ctrlr.cursor, blink = cursor.blink;
      var textareaSpan = ctrlr.textareaSpan, textarea = ctrlr.textarea;

      e.preventDefault(); // doesn't work in IE\\u22648, but it's a one-line fix:
      e.target.unselectable = true; // http://jsbin.com/yagekiji/1

      if (cursor.options.ignoreNextMousedown(e)) return;
      else cursor.options.ignoreNextMousedown = noop;

      var target;
      function mousemove(e) { target = $(e.target); }
      function docmousemove(e) {
        if (!cursor.anticursor) cursor.startSelection();
        ctrlr.seek(target, e.pageX, e.pageY).cursor.select();
        target = undefined;
      }
      // outside rootjQ, the MathQuill node corresponding to the target (if any)
      // won't be inside this root, so don't mislead Controller::seek with it

      function mouseup(e) {
        cursor.blink = blink;
        if (!cursor.selection) {
          if (ctrlr.editable) {
            cursor.show();
          }
          else {
            textareaSpan.detach();
          }
        }

        // delete the mouse handlers now that we're not dragging anymore
        rootjQ.unbind('mousemove', mousemove);
        $(e.target.ownerDocument).unbind('mousemove', docmousemove).unbind('mouseup', mouseup);
      }

      if (ctrlr.blurred) {
        if (!ctrlr.editable) rootjQ.prepend(textareaSpan);
        textarea.focus();
      }

      cursor.blink = noop;
      ctrlr.seek($(e.target), e.pageX, e.pageY).cursor.startSelection();

      rootjQ.mousemove(mousemove);
      $(e.target.ownerDocument).mousemove(docmousemove).mouseup(mouseup);
      // listen on document not just body to not only hear about mousemove and
      // mouseup on page outside field, but even outside page, except iframes: https://github.com/mathquill/mathquill/commit/8c50028afcffcace655d8ae2049f6e02482346c5#commitcomment-6175800
    });
  }
});

Controller.open(function(_) {
  _.seek = function(target, pageX, pageY) {
    var cursor = this.notify('select').cursor;

    if (target) {
      var nodeId = target.attr(mqBlockId) || target.attr(mqCmdId);
      if (!nodeId) {
        var targetParent = target.parent();
        nodeId = targetParent.attr(mqBlockId) || targetParent.attr(mqCmdId);
      }
    }
    var node = nodeId ? Node.byId[nodeId] : this.root;
    pray('nodeId is the id of some Node that exists', node);

    // don't clear selection until after getting node from target, in case
    // target was selection span, otherwise target will have no parent and will
    // seek from root, which is less accurate (e.g. fraction)
    cursor.clearSelection().show();

    node.seek(pageX, cursor);
    this.scrollHoriz(); // before .selectFrom when mouse-selecting, so
                        // always hits no-selection case in scrollHoriz and scrolls slower
    return this;
  };
});
/*****************************************
 * Deals with the browser DOM events from
 * interaction with the typist.
 ****************************************/

Controller.open(function(_) {
  _.keystroke = function(key, evt) {
    this.cursor.parent.keystroke(key, evt, this);
  };
});

Node.open(function(_) {
  _.keystroke = function(key, e, ctrlr) {
    var cursor = ctrlr.cursor;

    switch (key) {
    case 'Ctrl-Shift-Backspace':
    case 'Ctrl-Backspace':
      ctrlr.ctrlDeleteDir(L);
      break;

    case 'Shift-Backspace':
    case 'Backspace':
      ctrlr.backspace();
      break;

    // Tab or Esc -> go one block right if it exists, else escape right.
    case 'Esc':
    case 'Tab':
      ctrlr.escapeDir(R, key, e);
      return;

    // Shift-Tab -> go one block left if it exists, else escape left.
    case 'Shift-Tab':
    case 'Shift-Esc':
      ctrlr.escapeDir(L, key, e);
      return;

    // End -> move to the end of the current block.
    case 'End':
      ctrlr.notify('move').cursor.insAtRightEnd(cursor.parent);
      break;

    // Ctrl-End -> move all the way to the end of the root block.
    case 'Ctrl-End':
      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
      break;

    // Shift-End -> select to the end of the current block.
    case 'Shift-End':
      while (cursor[R]) {
        ctrlr.selectRight();
      }
      break;

    // Ctrl-Shift-End -> select to the end of the root block.
    case 'Ctrl-Shift-End':
      while (cursor[R] || cursor.parent !== ctrlr.root) {
        ctrlr.selectRight();
      }
      break;

    // Home -> move to the start of the root block or the current block.
    case 'Home':
      ctrlr.notify('move').cursor.insAtLeftEnd(cursor.parent);
      break;

    // Ctrl-Home -> move to the start of the current block.
    case 'Ctrl-Home':
      ctrlr.notify('move').cursor.insAtLeftEnd(ctrlr.root);
      break;

    // Shift-Home -> select to the start of the current block.
    case 'Shift-Home':
      while (cursor[L]) {
        ctrlr.selectLeft();
      }
      break;

    // Ctrl-Shift-Home -> move to the start of the root block.
    case 'Ctrl-Shift-Home':
      while (cursor[L] || cursor.parent !== ctrlr.root) {
        ctrlr.selectLeft();
      }
      break;

    case 'Left': ctrlr.moveLeft(); break;
    case 'Shift-Left': ctrlr.selectLeft(); break;
    case 'Ctrl-Left': break;

    case 'Right': ctrlr.moveRight(); break;
    case 'Shift-Right': ctrlr.selectRight(); break;
    case 'Ctrl-Right': break;

    case 'Up': ctrlr.moveUp(); break;
    case 'Down': ctrlr.moveDown(); break;

    case 'Shift-Up':
      if (cursor[L]) {
        while (cursor[L]) ctrlr.selectLeft();
      } else {
        ctrlr.selectLeft();
      }

    case 'Shift-Down':
      if (cursor[R]) {
        while (cursor[R]) ctrlr.selectRight();
      }
      else {
        ctrlr.selectRight();
      }

    case 'Ctrl-Up': break;
    case 'Ctrl-Down': break;

    case 'Ctrl-Shift-Del':
    case 'Ctrl-Del':
      ctrlr.ctrlDeleteDir(R);
      break;

    case 'Shift-Del':
    case 'Del':
      ctrlr.deleteForward();
      break;

    case 'Meta-A':
    case 'Ctrl-A':
      ctrlr.notify('move').cursor.insAtRightEnd(ctrlr.root);
      while (cursor[L]) ctrlr.selectLeft();
      break;

    default:
      return;
    }
    e.preventDefault();
    ctrlr.scrollHoriz();
  };

  _.moveOutOf = // called by Controller::escapeDir, moveDir
  _.moveTowards = // called by Controller::moveDir
  _.deleteOutOf = // called by Controller::deleteDir
  _.deleteTowards = // called by Controller::deleteDir
  _.unselectInto = // called by Controller::selectDir
  _.selectOutOf = // called by Controller::selectDir
  _.selectTowards = // called by Controller::selectDir
    function() { pray('overridden or never called on this node'); };
});

Controller.open(function(_) {
  this.onNotify(function(e) {
    if (e === 'move' || e === 'upDown') this.show().clearSelection();
  });
  _.escapeDir = function(dir, key, e) {
    prayDirection(dir);
    var cursor = this.cursor;

    // only prevent default of Tab if not in the root editable
    if (cursor.parent !== this.root) e.preventDefault();

    // want to be a noop if in the root editable (in fact, Tab has an unrelated
    // default browser action if so)
    if (cursor.parent === this.root) return;

    cursor.parent.moveOutOf(dir, cursor);
    return this.notify('move');
  };

  optionProcessors.leftRightIntoCmdGoes = function(updown) {
    if (updown && updown !== 'up' && updown !== 'down') {
      throw '"up" or "down" required for leftRightIntoCmdGoes option, '
            + 'got "'+updown+'"';
    }
    return updown;
  };
  _.moveDir = function(dir) {
    prayDirection(dir);
    var cursor = this.cursor, updown = cursor.options.leftRightIntoCmdGoes;

    if (cursor.selection) {
      cursor.insDirOf(dir, cursor.selection.ends[dir]);
    }
    else if (cursor[dir]) cursor[dir].moveTowards(dir, cursor, updown);
    else cursor.parent.moveOutOf(dir, cursor, updown);

    return this.notify('move');
  };
  _.moveLeft = function() { return this.moveDir(L); };
  _.moveRight = function() { return this.moveDir(R); };

  /**
   * moveUp and moveDown have almost identical algorithms:
   * - first check left and right, if so insAtLeft/RightEnd of them
   * - else check the parent's 'upOutOf'/'downOutOf' property:
   *   + if it's a function, call it with the cursor as the sole argument and
   *     use the return value as if it were the value of the property
   *   + if it's a Node, jump up or down into it:
   *     - if there is a cached Point in the block, insert there
   *     - else, seekHoriz within the block to the current x-coordinate (to be
   *       as close to directly above/below the current position as possible)
   *   + unless it's exactly \`true\`, stop bubbling
   */
  _.moveUp = function() { return moveUpDown(this, 'up'); };
  _.moveDown = function() { return moveUpDown(this, 'down'); };
  function moveUpDown(self, dir) {
    var cursor = self.notify('upDown').cursor;
    var dirInto = dir+'Into', dirOutOf = dir+'OutOf';
    if (cursor[R][dirInto]) cursor.insAtLeftEnd(cursor[R][dirInto]);
    else if (cursor[L][dirInto]) cursor.insAtRightEnd(cursor[L][dirInto]);
    else {
      cursor.parent.bubble(function(ancestor) {
        var prop = ancestor[dirOutOf];
        if (prop) {
          if (typeof prop === 'function') prop = ancestor[dirOutOf](cursor);
          if (prop instanceof Node) cursor.jumpUpDown(ancestor, prop);
          if (prop !== true) return false;
        }
      });
    }
    return self;
  }
  this.onNotify(function(e) { if (e !== 'upDown') this.upDownCache = {}; });

  this.onNotify(function(e) { if (e === 'edit') this.show().deleteSelection(); });
  _.deleteDir = function(dir) {
    prayDirection(dir);
    var cursor = this.cursor;

    var hadSelection = cursor.selection;
    this.notify('edit'); // deletes selection if present
    if (!hadSelection) {
      if (cursor[dir]) cursor[dir].deleteTowards(dir, cursor);
      else cursor.parent.deleteOutOf(dir, cursor);
    }

    if (cursor[L].siblingDeleted) cursor[L].siblingDeleted(cursor.options, R);
    if (cursor[R].siblingDeleted) cursor[R].siblingDeleted(cursor.options, L);
    cursor.parent.bubble('reflow');

    return this;
  };
  _.ctrlDeleteDir = function(dir) {
    prayDirection(dir);
    var cursor = this.cursor;
    if (!cursor[dir] || cursor.selection) return this.deleteDir(dir);

    this.notify('edit');
    if (dir === L) {
      Fragment(cursor.parent.ends[L], cursor[L]).remove();
    } else {
      Fragment(cursor[R], cursor.parent.ends[R]).remove();
    };
    cursor.insAtDirEnd(dir, cursor.parent);

    if (cursor[L].siblingDeleted) cursor[L].siblingDeleted(cursor.options, R);
    if (cursor[R].siblingDeleted) cursor[R].siblingDeleted(cursor.options, L);
    cursor.parent.bubble('reflow');

    return this;
  };
  _.backspace = function() { return this.deleteDir(L); };
  _.deleteForward = function() { return this.deleteDir(R); };

  this.onNotify(function(e) { if (e !== 'select') this.endSelection(); });
  _.selectDir = function(dir) {
    var cursor = this.notify('select').cursor, seln = cursor.selection;
    prayDirection(dir);

    if (!cursor.anticursor) cursor.startSelection();

    var node = cursor[dir];
    if (node) {
      // "if node we're selecting towards is inside selection (hence retracting)
      // and is on the *far side* of the selection (hence is only node selected)
      // and the anticursor is *inside* that node, not just on the other side"
      if (seln && seln.ends[dir] === node && cursor.anticursor[-dir] !== node) {
        node.unselectInto(dir, cursor);
      }
      else node.selectTowards(dir, cursor);
    }
    else cursor.parent.selectOutOf(dir, cursor);

    cursor.clearSelection();
    cursor.select() || cursor.show();
  };
  _.selectLeft = function() { return this.selectDir(L); };
  _.selectRight = function() { return this.selectDir(R); };
});
/*********************************************
 * Manage the MathQuill instance's textarea
 * (as owned by the Controller)
 ********************************************/

Controller.open(function(_) {
  Options.p.substituteTextarea = function() {
    return $('<textarea autocapitalize=off autocomplete=off autocorrect=off ' +
               'spellcheck=false x-palm-disable-ste-all=true />')[0];
  };
  _.createTextarea = function() {
    var textareaSpan = this.textareaSpan = $('<span class="mq-textarea"></span>'),
      textarea = this.options.substituteTextarea();
    if (!textarea.nodeType) {
      throw 'substituteTextarea() must return a DOM element, got ' + textarea;
    }
    textarea = this.textarea = $(textarea).appendTo(textareaSpan);

    var ctrlr = this;
    ctrlr.cursor.selectionChanged = function() { ctrlr.selectionChanged(); };
  };
  _.selectionChanged = function() {
    var ctrlr = this;
    forceIERedraw(ctrlr.container[0]);

    // throttle calls to setTextareaSelection(), because setting textarea.value
    // and/or calling textarea.select() can have anomalously bad performance:
    // https://github.com/mathquill/mathquill/issues/43#issuecomment-1399080
    if (ctrlr.textareaSelectionTimeout === undefined) {
      ctrlr.textareaSelectionTimeout = setTimeout(function() {
        ctrlr.setTextareaSelection();
      });
    }
  };
  _.setTextareaSelection = function() {
    this.textareaSelectionTimeout = undefined;
    var latex = '';
    if (this.cursor.selection) {
      latex = this.cursor.selection.join('latex');
      if (this.options.statelessClipboard) {
        // FIXME: like paste, only this works for math fields; should ask parent
        latex = '$' + latex + '$';
      }
    }
    this.selectFn(latex);
  };
  _.staticMathTextareaEvents = function() {
    var ctrlr = this, root = ctrlr.root, cursor = ctrlr.cursor,
      textarea = ctrlr.textarea, textareaSpan = ctrlr.textareaSpan;

    this.container.prepend(jQuery('<span class="mq-selectable">')
      .text('$'+ctrlr.exportLatex()+'$'));
    ctrlr.blurred = true;
    textarea.bind('cut paste', false)
    .bind('copy', function() { ctrlr.setTextareaSelection(); })
    .focus(function() { ctrlr.blurred = false; }).blur(function() {
      if (cursor.selection) cursor.selection.clear();
      setTimeout(detach); //detaching during blur explodes in WebKit
    });
    function detach() {
      textareaSpan.detach();
      ctrlr.blurred = true;
    }

    ctrlr.selectFn = function(text) {
      textarea.val(text);
      if (text) textarea.select();
    };
  };
  Options.p.substituteKeyboardEvents = saneKeyboardEvents;
  _.editablesTextareaEvents = function() {
    var ctrlr = this, textarea = ctrlr.textarea, textareaSpan = ctrlr.textareaSpan;

    var keyboardEventsShim = this.options.substituteKeyboardEvents(textarea, this);
    this.selectFn = function(text) { keyboardEventsShim.select(text); };
    this.container.prepend(textareaSpan);
    this.focusBlurEvents();
  };
  _.typedText = function(ch) {
    if (ch === '\\n') return this.handle('enter');
    var cursor = this.notify().cursor;
    cursor.parent.write(cursor, ch);
    this.scrollHoriz();
  };
  _.cut = function() {
    var ctrlr = this, cursor = ctrlr.cursor;
    if (cursor.selection) {
      setTimeout(function() {
        ctrlr.notify('edit'); // deletes selection if present
        cursor.parent.bubble('reflow');
      });
    }
  };
  _.copy = function() {
    this.setTextareaSelection();
  };
  _.paste = function(text) {
    // TODO: document \`statelessClipboard\` config option in README, after
    // making it work like it should, that is, in both text and math mode
    // (currently only works in math fields, so worse than pointless, it
    //  only gets in the way by \\text{}-ifying pasted stuff and $-ifying
    //  cut/copied LaTeX)
    if (this.options.statelessClipboard) {
      if (text.slice(0,1) === '$' && text.slice(-1) === '$') {
        text = text.slice(1, -1);
      }
      else {
        text = '\\\\text{'+text+'}';
      }
    }
    // FIXME: this always inserts math or a TextBlock, even in a RootTextBlock
    this.writeLatex(text).cursor.show();
  };
});
// Parser MathBlock
var latexMathParser = (function() {
  function commandToBlock(cmd) { // can also take in a Fragment
    var block = MathBlock();
    cmd.adopt(block, 0, 0);
    return block;
  }
  function joinBlocks(blocks) {
    var firstBlock = blocks[0] || MathBlock();

    for (var i = 1; i < blocks.length; i += 1) {
      blocks[i].children().adopt(firstBlock, firstBlock.ends[R], 0);
    }

    return firstBlock;
  }

  var string = Parser.string;
  var regex = Parser.regex;
  var letter = Parser.letter;
  var any = Parser.any;
  var optWhitespace = Parser.optWhitespace;
  var succeed = Parser.succeed;
  var fail = Parser.fail;

  // Parsers yielding either MathCommands, or Fragments of MathCommands
  //   (either way, something that can be adopted by a MathBlock)
  var variable = letter.map(function(c) { return Letter(c); });
  var symbol = regex(/^[^\${}\\\\_^]/).map(function(c) { return VanillaSymbol(c); });

  var controlSequence =
    regex(/^[^\\\\a-eg-zA-Z]/) // hotfix #164; match MathBlock::write
    .or(string('\\\\').then(
      regex(/^[a-z]+/i)
      .or(regex(/^\\s+/).result(' '))
      .or(any)
    )).then(function(ctrlSeq) {
      var cmdKlass = LatexCmds[ctrlSeq];

      if (cmdKlass) {
        return cmdKlass(ctrlSeq).parser();
      }
      else {
        return fail('unknown command: \\\\'+ctrlSeq);
      }
    })
  ;

  var command =
    controlSequence
    .or(variable)
    .or(symbol)
  ;

  // Parsers yielding MathBlocks
  var mathGroup = string('{').then(function() { return mathSequence; }).skip(string('}'));
  var mathBlock = optWhitespace.then(mathGroup.or(command.map(commandToBlock)));
  var mathSequence = mathBlock.many().map(joinBlocks).skip(optWhitespace);

  var optMathBlock =
    string('[').then(
      mathBlock.then(function(block) {
        return block.join('latex') !== ']' ? succeed(block) : fail();
      })
      .many().map(joinBlocks).skip(optWhitespace)
    ).skip(string(']'))
  ;

  var latexMath = mathSequence;

  latexMath.block = mathBlock;
  latexMath.optBlock = optMathBlock;
  return latexMath;
})();

Controller.open(function(_, super_) {
  _.exportLatex = function() {
    return this.root.latex().replace(/(\\\\[a-z]+) (?![a-z])/ig,'$1');
  };

  optionProcessors.maxDepth = function(depth) {
    return (typeof depth === 'number') ? depth : undefined;
  };
  _.writeLatex = function(latex) {
    var cursor = this.notify('edit').cursor;

    var all = Parser.all;
    var eof = Parser.eof;

    var block = latexMathParser.skip(eof).or(all.result(false)).parse(latex);

    if (block && !block.isEmpty() && block.prepareInsertionAt(cursor)) {
      block.children().adopt(cursor.parent, cursor[L], cursor[R]);
      var jQ = block.jQize();
      jQ.insertBefore(cursor.jQ);
      cursor[L] = block.ends[R];
      block.finalizeInsert(cursor.options, cursor);
      if (block.ends[R][R].siblingCreated) block.ends[R][R].siblingCreated(cursor.options, L);
      if (block.ends[L][L].siblingCreated) block.ends[L][L].siblingCreated(cursor.options, R);
      cursor.parent.bubble('reflow');
    }

    return this;
  };
  _.renderLatexMath = function(latex) {
    var root = this.root;
    var cursor = this.cursor;
    var options = cursor.options;
    var jQ = root.jQ;

    var all = Parser.all;
    var eof = Parser.eof;

    var block = latexMathParser.skip(eof).or(all.result(false)).parse(latex);

    root.eachChild('postOrder', 'dispose');
    root.ends[L] = root.ends[R] = 0;

    if (block && block.prepareInsertionAt(cursor)) {
      block.children().adopt(root, 0, 0);
      var html = block.join('html');
      jQ.html(html);
      root.jQize(jQ.children());
      root.finalizeInsert(cursor.options);
    }
    else {
      jQ.empty();
    }

    delete cursor.selection;
    cursor.insAtRightEnd(root);
  };
  _.renderLatexText = function(latex) {
    var root = this.root, cursor = this.cursor;

    root.jQ.children().slice(1).remove();
    root.eachChild('postOrder', 'dispose');
    root.ends[L] = root.ends[R] = 0;
    delete cursor.selection;
    cursor.show().insAtRightEnd(root);

    var regex = Parser.regex;
    var string = Parser.string;
    var eof = Parser.eof;
    var all = Parser.all;

    // Parser RootMathCommand
    var mathMode = string('$').then(latexMathParser)
      // because TeX is insane, math mode doesn't necessarily
      // have to end.  So we allow for the case that math mode
      // continues to the end of the stream.
      .skip(string('$').or(eof))
      .map(function(block) {
        // HACK FIXME: this shouldn't have to have access to cursor
        var rootMathCommand = RootMathCommand(cursor);

        rootMathCommand.createBlocks();
        var rootMathBlock = rootMathCommand.ends[L];
        block.children().adopt(rootMathBlock, 0, 0);

        return rootMathCommand;
      })
    ;

    var escapedDollar = string('\\\\$').result('$');
    var textChar = escapedDollar.or(regex(/^[^$]/)).map(VanillaSymbol);
    var latexText = mathMode.or(textChar).many();
    var commands = latexText.skip(eof).or(all.result(false)).parse(latex);

    if (commands) {
      for (var i = 0; i < commands.length; i += 1) {
        commands[i].adopt(root, root.ends[R], 0);
      }

      root.jQize().appendTo(root.jQ);

      root.finalizeInsert(cursor.options);
    }
  };
});
/***********************************************
 * Horizontal panning for editable fields that
 * overflow their width
 **********************************************/

Controller.open(function(_) {
  _.scrollHoriz = function() {
    var cursor = this.cursor, seln = cursor.selection;
    var rootRect = this.root.jQ[0].getBoundingClientRect();
    if (!seln) {
      var x = cursor.jQ[0].getBoundingClientRect().left;
      if (x > rootRect.right - 20) var scrollBy = x - (rootRect.right - 20);
      else if (x < rootRect.left + 20) var scrollBy = x - (rootRect.left + 20);
      else return;
    }
    else {
      var rect = seln.jQ[0].getBoundingClientRect();
      var overLeft = rect.left - (rootRect.left + 20);
      var overRight = rect.right - (rootRect.right - 20);
      if (seln.ends[L] === cursor[R]) {
        if (overLeft < 0) var scrollBy = overLeft;
        else if (overRight > 0) {
          if (rect.left - overRight < rootRect.left + 20) var scrollBy = overLeft;
          else var scrollBy = overRight;
        }
        else return;
      }
      else {
        if (overRight > 0) var scrollBy = overRight;
        else if (overLeft < 0) {
          if (rect.right - overLeft > rootRect.right - 20) var scrollBy = overRight;
          else var scrollBy = overLeft;
        }
        else return;
      }
    }
    this.root.jQ.stop().animate({ scrollLeft: '+=' + scrollBy}, 100);
  };
});
/*************************************************
 * Abstract classes of math blocks and commands.
 ************************************************/

/**
 * Math tree node base class.
 * Some math-tree-specific extensions to Node.
 * Both MathBlock's and MathCommand's descend from it.
 */
var MathElement = P(Node, function(_, super_) {
  _.finalizeInsert = function(options, cursor) { // \`cursor\` param is only for
      // SupSub::contactWeld, and is deliberately only passed in by writeLatex,
      // see ea7307eb4fac77c149a11ffdf9a831df85247693
    var self = this;
    self.postOrder('finalizeTree', options);
    self.postOrder('contactWeld', cursor);

    // note: this order is important.
    // empty elements need the empty box provided by blur to
    // be present in order for their dimensions to be measured
    // correctly by 'reflow' handlers.
    self.postOrder('blur');

    self.postOrder('reflow');
    if (self[R].siblingCreated) self[R].siblingCreated(options, L);
    if (self[L].siblingCreated) self[L].siblingCreated(options, R);
    self.bubble('reflow');
  };
  // If the maxDepth option is set, make sure
  // deeply nested content is truncated. Just return
  // false if the cursor is already too deep.
  _.prepareInsertionAt = function(cursor) {
    var maxDepth = cursor.options.maxDepth;
    if (maxDepth !== undefined) {
      var cursorDepth = cursor.depth();
      if (cursorDepth > maxDepth) {
        return false;
      }
      this.removeNodesDeeperThan(maxDepth-cursorDepth);
    }
    return true;
  };
  // Remove nodes that are more than \`cutoff\`
  // blocks deep from this node.
  _.removeNodesDeeperThan = function (cutoff) {
    var depth = 0;
    var queue = [[this, depth]];
    var current;

    // Do a breadth-first search of this node's descendants
    // down to cutoff, removing anything deeper.
    while (queue.length) {
      current = queue.shift();
      current[0].children().each(function (child) {
        var i = (child instanceof MathBlock) ? 1 : 0;
        depth = current[1]+i;

        if (depth <= cutoff) {
          queue.push([child, depth]);
        } else {
          (i ? child.children() : child).remove();
        }
      });
    }
  };
});

/**
 * Commands and operators, like subscripts, exponents, or fractions.
 * Descendant commands are organized into blocks.
 */
var MathCommand = P(MathElement, function(_, super_) {
  _.init = function(ctrlSeq, htmlTemplate, textTemplate) {
    var cmd = this;
    super_.init.call(cmd);

    if (!cmd.ctrlSeq) cmd.ctrlSeq = ctrlSeq;
    if (htmlTemplate) cmd.htmlTemplate = htmlTemplate;
    if (textTemplate) cmd.textTemplate = textTemplate;
  };

  // obvious methods
  _.replaces = function(replacedFragment) {
    replacedFragment.disown();
    this.replacedFragment = replacedFragment;
  };
  _.isEmpty = function() {
    return this.foldChildren(true, function(isEmpty, child) {
      return isEmpty && child.isEmpty();
    });
  };

  _.parser = function() {
    var block = latexMathParser.block;
    var self = this;

    return block.times(self.numBlocks()).map(function(blocks) {
      self.blocks = blocks;

      for (var i = 0; i < blocks.length; i += 1) {
        blocks[i].adopt(self, self.ends[R], 0);
      }

      return self;
    });
  };

  // createLeftOf(cursor) and the methods it calls
  _.createLeftOf = function(cursor) {
    var cmd = this;
    var replacedFragment = cmd.replacedFragment;

    cmd.createBlocks();
    super_.createLeftOf.call(cmd, cursor);
    if (replacedFragment) {
      replacedFragment.adopt(cmd.ends[L], 0, 0);
      replacedFragment.jQ.appendTo(cmd.ends[L].jQ);
      cmd.placeCursor(cursor);
      cmd.prepareInsertionAt(cursor);
    }
    cmd.finalizeInsert(cursor.options);
    cmd.placeCursor(cursor);
  };
  _.createBlocks = function() {
    var cmd = this,
      numBlocks = cmd.numBlocks(),
      blocks = cmd.blocks = Array(numBlocks);

    for (var i = 0; i < numBlocks; i += 1) {
      var newBlock = blocks[i] = MathBlock();
      newBlock.adopt(cmd, cmd.ends[R], 0);
    }
  };
  _.placeCursor = function(cursor) {
    //insert the cursor at the right end of the first empty child, searching
    //left-to-right, or if none empty, the right end child
    cursor.insAtRightEnd(this.foldChildren(this.ends[L], function(leftward, child) {
      return leftward.isEmpty() ? leftward : child;
    }));
  };

  // editability methods: called by the cursor for editing, cursor movements,
  // and selection of the MathQuill tree, these all take in a direction and
  // the cursor
  _.moveTowards = function(dir, cursor, updown) {
    var updownInto = updown && this[updown+'Into'];
    cursor.insAtDirEnd(-dir, updownInto || this.ends[-dir]);
  };
  _.deleteTowards = function(dir, cursor) {
    if (this.isEmpty()) cursor[dir] = this.remove()[dir];
    else this.moveTowards(dir, cursor, null);
  };
  _.selectTowards = function(dir, cursor) {
    cursor[-dir] = this;
    cursor[dir] = this[dir];
  };
  _.selectChildren = function() {
    return Selection(this, this);
  };
  _.unselectInto = function(dir, cursor) {
    cursor.insAtDirEnd(-dir, cursor.anticursor.ancestors[this.id]);
  };
  _.seek = function(pageX, cursor) {
    function getBounds(node) {
      var bounds = {}
      bounds[L] = node.jQ.offset().left;
      bounds[R] = bounds[L] + node.jQ.outerWidth();
      return bounds;
    }

    var cmd = this;
    var cmdBounds = getBounds(cmd);

    if (pageX < cmdBounds[L]) return cursor.insLeftOf(cmd);
    if (pageX > cmdBounds[R]) return cursor.insRightOf(cmd);

    var leftLeftBound = cmdBounds[L];
    cmd.eachChild(function(block) {
      var blockBounds = getBounds(block);
      if (pageX < blockBounds[L]) {
        // closer to this block's left bound, or the bound left of that?
        if (pageX - leftLeftBound < blockBounds[L] - pageX) {
          if (block[L]) cursor.insAtRightEnd(block[L]);
          else cursor.insLeftOf(cmd);
        }
        else cursor.insAtLeftEnd(block);
        return false;
      }
      else if (pageX > blockBounds[R]) {
        if (block[R]) leftLeftBound = blockBounds[R]; // continue to next block
        else { // last (rightmost) block
          // closer to this block's right bound, or the cmd's right bound?
          if (cmdBounds[R] - pageX < pageX - blockBounds[R]) {
            cursor.insRightOf(cmd);
          }
          else cursor.insAtRightEnd(block);
        }
      }
      else {
        block.seek(pageX, cursor);
        return false;
      }
    });
  }

  // methods involved in creating and cross-linking with HTML DOM nodes
  /*
    They all expect an .htmlTemplate like
      '<span>&0</span>'
    or
      '<span><span>&0</span><span>&1</span></span>'

    See html.test.js for more examples.

    Requirements:
    - For each block of the command, there must be exactly one "block content
      marker" of the form '&<number>' where <number> is the 0-based index of the
      block. (Like the LaTeX \\newcommand syntax, but with a 0-based rather than
      1-based index, because JavaScript because C because Dijkstra.)
    - The block content marker must be the sole contents of the containing
      element, there can't even be surrounding whitespace, or else we can't
      guarantee sticking to within the bounds of the block content marker when
      mucking with the HTML DOM.
    - The HTML not only must be well-formed HTML (of course), but also must
      conform to the XHTML requirements on tags, specifically all tags must
      either be self-closing (like '<br/>') or come in matching pairs.
      Close tags are never optional.

    Note that &<number> isn't well-formed HTML; if you wanted a literal '&123',
    your HTML template would have to have '&amp;123'.
  */
  _.numBlocks = function() {
    var matches = this.htmlTemplate.match(/&\\d+/g);
    return matches ? matches.length : 0;
  };
  _.html = function() {
    // Render the entire math subtree rooted at this command, as HTML.
    // Expects .createBlocks() to have been called already, since it uses the
    // .blocks array of child blocks.
    //
    // See html.test.js for example templates and intended outputs.
    //
    // Given an .htmlTemplate as described above,
    // - insert the mathquill-command-id attribute into all top-level tags,
    //   which will be used to set this.jQ in .jQize().
    //   This is straightforward:
    //     * tokenize into tags and non-tags
    //     * loop through top-level tokens:
    //         * add #cmdId attribute macro to top-level self-closing tags
    //         * else add #cmdId attribute macro to top-level open tags
    //             * skip the matching top-level close tag and all tag pairs
    //               in between
    // - for each block content marker,
    //     + replace it with the contents of the corresponding block,
    //       rendered as HTML
    //     + insert the mathquill-block-id attribute into the containing tag
    //   This is even easier, a quick regex replace, since block tags cannot
    //   contain anything besides the block content marker.
    //
    // Two notes:
    // - The outermost loop through top-level tokens should never encounter any
    //   top-level close tags, because we should have first encountered a
    //   matching top-level open tag, all inner tags should have appeared in
    //   matching pairs and been skipped, and then we should have skipped the
    //   close tag in question.
    // - All open tags should have matching close tags, which means our inner
    //   loop should always encounter a close tag and drop nesting to 0. If
    //   a close tag is missing, the loop will continue until i >= tokens.length
    //   and token becomes undefined. This will not infinite loop, even in
    //   production without pray(), because it will then TypeError on .slice().

    var cmd = this;
    var blocks = cmd.blocks;
    var cmdId = ' mathquill-command-id=' + cmd.id;
    var tokens = cmd.htmlTemplate.match(/<[^<>]+>|[^<>]+/g);

    pray('no unmatched angle brackets', tokens.join('') === this.htmlTemplate);

    // add cmdId to all top-level tags
    for (var i = 0, token = tokens[0]; token; i += 1, token = tokens[i]) {
      // top-level self-closing tags
      if (token.slice(-2) === '/>') {
        tokens[i] = token.slice(0,-2) + cmdId + '/>';
      }
      // top-level open tags
      else if (token.charAt(0) === '<') {
        pray('not an unmatched top-level close tag', token.charAt(1) !== '/');

        tokens[i] = token.slice(0,-1) + cmdId + '>';

        // skip matching top-level close tag and all tag pairs in between
        var nesting = 1;
        do {
          i += 1, token = tokens[i];
          pray('no missing close tags', token);
          // close tags
          if (token.slice(0,2) === '</') {
            nesting -= 1;
          }
          // non-self-closing open tags
          else if (token.charAt(0) === '<' && token.slice(-2) !== '/>') {
            nesting += 1;
          }
        } while (nesting > 0);
      }
    }
    return tokens.join('').replace(/>&(\\d+)/g, function($0, $1) {
      return ' mathquill-block-id=' + blocks[$1].id + '>' + blocks[$1].join('html');
    });
  };

  // methods to export a string representation of the math tree
  _.latex = function() {
    return this.foldChildren(this.ctrlSeq, function(latex, child) {
      return latex + '{' + (child.latex() || ' ') + '}';
    });
  };
  _.textTemplate = [''];
  _.text = function() {
    var cmd = this, i = 0;
    return cmd.foldChildren(cmd.textTemplate[i], function(text, child) {
      i += 1;
      var child_text = child.text();
      if (text && cmd.textTemplate[i] === '('
          && child_text[0] === '(' && child_text.slice(-1) === ')')
        return text + child_text.slice(1, -1) + cmd.textTemplate[i];
      return text + child_text + (cmd.textTemplate[i] || '');
    });
  };
});

/**
 * Lightweight command without blocks or children.
 */
var Symbol = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, html, text) {
    if (!text) text = ctrlSeq && ctrlSeq.length > 1 ? ctrlSeq.slice(1) : ctrlSeq;

    super_.init.call(this, ctrlSeq, html, [ text ]);
  };

  _.parser = function() { return Parser.succeed(this); };
  _.numBlocks = function() { return 0; };

  _.replaces = function(replacedFragment) {
    replacedFragment.remove();
  };
  _.createBlocks = noop;

  _.moveTowards = function(dir, cursor) {
    cursor.jQ.insDirOf(dir, this.jQ);
    cursor[-dir] = this;
    cursor[dir] = this[dir];
  };
  _.deleteTowards = function(dir, cursor) {
    cursor[dir] = this.remove()[dir];
  };
  _.seek = function(pageX, cursor) {
    // insert at whichever side the click was closer to
    if (pageX - this.jQ.offset().left < this.jQ.outerWidth()/2)
      cursor.insLeftOf(this);
    else
      cursor.insRightOf(this);
  };

  _.latex = function(){ return this.ctrlSeq; };
  _.text = function(){ return this.textTemplate; };
  _.placeCursor = noop;
  _.isEmpty = function(){ return true; };
});
var VanillaSymbol = P(Symbol, function(_, super_) {
  _.init = function(ch, html) {
    super_.init.call(this, ch, '<span>'+(html || ch)+'</span>');
  };
});
var BinaryOperator = P(Symbol, function(_, super_) {
  _.init = function(ctrlSeq, html, text) {
    super_.init.call(this,
      ctrlSeq, '<span class="mq-binary-operator">'+html+'</span>', text
    );
  };
});

/**
 * Children and parent of MathCommand's. Basically partitions all the
 * symbols and operators that descend (in the Math DOM tree) from
 * ancestor operators.
 */
var MathBlock = P(MathElement, function(_, super_) {
  _.join = function(methodName) {
    return this.foldChildren('', function(fold, child) {
      return fold + child[methodName]();
    });
  };
  _.html = function() { return this.join('html'); };
  _.latex = function() { return this.join('latex'); };
  _.text = function() {
    return (this.ends[L] === this.ends[R] && this.ends[L] !== 0) ?
      this.ends[L].text() :
      this.join('text')
    ;
  };

  _.keystroke = function(key, e, ctrlr) {
    if (ctrlr.options.spaceBehavesLikeTab
        && (key === 'Spacebar' || key === 'Shift-Spacebar')) {
      e.preventDefault();
      ctrlr.escapeDir(key === 'Shift-Spacebar' ? L : R, key, e);
      return;
    }
    return super_.keystroke.apply(this, arguments);
  };

  // editability methods: called by the cursor for editing, cursor movements,
  // and selection of the MathQuill tree, these all take in a direction and
  // the cursor
  _.moveOutOf = function(dir, cursor, updown) {
    var updownInto = updown && this.parent[updown+'Into'];
    if (!updownInto && this[dir]) cursor.insAtDirEnd(-dir, this[dir]);
    else cursor.insDirOf(dir, this.parent);
  };
  _.selectOutOf = function(dir, cursor) {
    cursor.insDirOf(dir, this.parent);
  };
  _.deleteOutOf = function(dir, cursor) {
    cursor.unwrapGramp();
  };
  _.seek = function(pageX, cursor) {
    var node = this.ends[R];
    if (!node || node.jQ.offset().left + node.jQ.outerWidth() < pageX) {
      return cursor.insAtRightEnd(this);
    }
    if (pageX < this.ends[L].jQ.offset().left) return cursor.insAtLeftEnd(this);
    while (pageX < node.jQ.offset().left) node = node[L];
    return node.seek(pageX, cursor);
  };
  _.chToCmd = function(ch, options) {
    var cons;
    // exclude f because it gets a dedicated command with more spacing
    if (ch.match(/^[a-eg-zA-Z]$/))
      return Letter(ch);
    else if (/^\\d$/.test(ch))
      return Digit(ch);
    else if (options && options.typingSlashWritesDivisionSymbol && ch === '/')
      return LatexCmds['\\u00f7'](ch);
    else if (options && options.typingAsteriskWritesTimesSymbol && ch === '*')
      return LatexCmds['\\u00d7'](ch);
    else if (cons = CharCmds[ch] || LatexCmds[ch])
      return cons(ch);
    else
      return VanillaSymbol(ch);
  };
  _.write = function(cursor, ch) {
    var cmd = this.chToCmd(ch, cursor.options);
    if (cursor.selection) cmd.replaces(cursor.replaceSelection());
    if (!cursor.isTooDeep()) {
      cmd.createLeftOf(cursor.show());
    }
  };

  _.focus = function() {
    this.jQ.addClass('mq-hasCursor');
    this.jQ.removeClass('mq-empty');

    return this;
  };
  _.blur = function() {
    this.jQ.removeClass('mq-hasCursor');
    if (this.isEmpty())
      this.jQ.addClass('mq-empty');

    return this;
  };
});

Options.p.mouseEvents = true;
API.StaticMath = function(APIClasses) {
  return P(APIClasses.AbstractMathQuill, function(_, super_) {
    this.RootBlock = MathBlock;
    _.__mathquillify = function(opts, interfaceVersion) {
      this.config(opts);
      super_.__mathquillify.call(this, 'mq-math-mode');
      if (this.__options.mouseEvents) {
        this.__controller.delegateMouseEvents();
        this.__controller.staticMathTextareaEvents();
      }
      return this;
    };
    _.init = function() {
      super_.init.apply(this, arguments);
      this.__controller.root.postOrder(
        'registerInnerField', this.innerFields = [], APIClasses.MathField);
    };
    _.latex = function() {
      var returned = super_.latex.apply(this, arguments);
      if (arguments.length > 0) {
        this.__controller.root.postOrder(
          'registerInnerField', this.innerFields = [], APIClasses.MathField);
      }
      return returned;
    };
  });
};

var RootMathBlock = P(MathBlock, RootBlockMixin);
API.MathField = function(APIClasses) {
  return P(APIClasses.EditableField, function(_, super_) {
    this.RootBlock = RootMathBlock;
    _.__mathquillify = function(opts, interfaceVersion) {
      this.config(opts);
      if (interfaceVersion > 1) this.__controller.root.reflow = noop;
      super_.__mathquillify.call(this, 'mq-editable-field mq-math-mode');
      delete this.__controller.root.reflow;
      return this;
    };
  });
};
/*************************************************
 * Abstract classes of text blocks
 ************************************************/

/**
 * Blocks of plain text, with one or two TextPiece's as children.
 * Represents flat strings of typically serif-font Roman characters, as
 * opposed to hierchical, nested, tree-structured math.
 * Wraps a single HTMLSpanElement.
 */
var TextBlock = P(Node, function(_, super_) {
  _.ctrlSeq = '\\\\text';

  _.replaces = function(replacedText) {
    if (replacedText instanceof Fragment)
      this.replacedText = replacedText.remove().jQ.text();
    else if (typeof replacedText === 'string')
      this.replacedText = replacedText;
  };

  _.jQadd = function(jQ) {
    super_.jQadd.call(this, jQ);
    if (this.ends[L]) this.ends[L].jQadd(this.jQ[0].firstChild);
  };

  _.createLeftOf = function(cursor) {
    var textBlock = this;
    super_.createLeftOf.call(this, cursor);

    if (textBlock[R].siblingCreated) textBlock[R].siblingCreated(cursor.options, L);
    if (textBlock[L].siblingCreated) textBlock[L].siblingCreated(cursor.options, R);
    textBlock.bubble('reflow');

    cursor.insAtRightEnd(textBlock);

    if (textBlock.replacedText)
      for (var i = 0; i < textBlock.replacedText.length; i += 1)
        textBlock.write(cursor, textBlock.replacedText.charAt(i));
  };

  _.parser = function() {
    var textBlock = this;

    // TODO: correctly parse text mode
    var string = Parser.string;
    var regex = Parser.regex;
    var optWhitespace = Parser.optWhitespace;
    return optWhitespace
      .then(string('{')).then(regex(/^[^}]*/)).skip(string('}'))
      .map(function(text) {
        if (text.length === 0) return Fragment();

        TextPiece(text).adopt(textBlock, 0, 0);
        return textBlock;
      })
    ;
  };

  _.textContents = function() {
    return this.foldChildren('', function(text, child) {
      return text + child.text;
    });
  };
  _.text = function() { return '"' + this.textContents() + '"'; };
  _.latex = function() {
    var contents = this.textContents();
    if (contents.length === 0) return '';
    return '\\\\text{' + contents.replace(/\\\\/g, '\\\\backslash ').replace(/[{}]/g, '\\\\$&') + '}';
  };
  _.html = function() {
    return (
        '<span class="mq-text-mode" mathquill-command-id='+this.id+'>'
      +   this.textContents()
      + '</span>'
    );
  };

  // editability methods: called by the cursor for editing, cursor movements,
  // and selection of the MathQuill tree, these all take in a direction and
  // the cursor
  _.moveTowards = function(dir, cursor) { cursor.insAtDirEnd(-dir, this); };
  _.moveOutOf = function(dir, cursor) { cursor.insDirOf(dir, this); };
  _.unselectInto = _.moveTowards;

  // TODO: make these methods part of a shared mixin or something.
  _.selectTowards = MathCommand.prototype.selectTowards;
  _.deleteTowards = MathCommand.prototype.deleteTowards;

  _.selectOutOf = function(dir, cursor) {
    cursor.insDirOf(dir, this);
  };
  _.deleteOutOf = function(dir, cursor) {
    // backspace and delete at ends of block don't unwrap
    if (this.isEmpty()) cursor.insRightOf(this);
  };
  _.write = function(cursor, ch) {
    cursor.show().deleteSelection();

    if (ch !== '$') {
      if (!cursor[L]) TextPiece(ch).createLeftOf(cursor);
      else cursor[L].appendText(ch);
    }
    else if (this.isEmpty()) {
      cursor.insRightOf(this);
      VanillaSymbol('\\\\$','$').createLeftOf(cursor);
    }
    else if (!cursor[R]) cursor.insRightOf(this);
    else if (!cursor[L]) cursor.insLeftOf(this);
    else { // split apart
      var leftBlock = TextBlock();
      var leftPc = this.ends[L];
      leftPc.disown().jQ.detach();
      leftPc.adopt(leftBlock, 0, 0);

      cursor.insLeftOf(this);
      super_.createLeftOf.call(leftBlock, cursor);
    }
  };

  _.seek = function(pageX, cursor) {
    cursor.hide();
    var textPc = fuseChildren(this);

    // insert cursor at approx position in DOMTextNode
    var avgChWidth = this.jQ.width()/this.text.length;
    var approxPosition = Math.round((pageX - this.jQ.offset().left)/avgChWidth);
    if (approxPosition <= 0) cursor.insAtLeftEnd(this);
    else if (approxPosition >= textPc.text.length) cursor.insAtRightEnd(this);
    else cursor.insLeftOf(textPc.splitRight(approxPosition));

    // move towards mousedown (pageX)
    var displ = pageX - cursor.show().offset().left; // displacement
    var dir = displ && displ < 0 ? L : R;
    var prevDispl = dir;
    // displ * prevDispl > 0 iff displacement direction === previous direction
    while (cursor[dir] && displ * prevDispl > 0) {
      cursor[dir].moveTowards(dir, cursor);
      prevDispl = displ;
      displ = pageX - cursor.offset().left;
    }
    if (dir*displ < -dir*prevDispl) cursor[-dir].moveTowards(-dir, cursor);

    if (!cursor.anticursor) {
      // about to start mouse-selecting, the anticursor is gonna get put here
      this.anticursorPosition = cursor[L] && cursor[L].text.length;
      // ^ get it? 'cos if there's no cursor[L], it's 0... I'm a terrible person.
    }
    else if (cursor.anticursor.parent === this) {
      // mouse-selecting within this TextBlock, re-insert the anticursor
      var cursorPosition = cursor[L] && cursor[L].text.length;;
      if (this.anticursorPosition === cursorPosition) {
        cursor.anticursor = Point.copy(cursor);
      }
      else {
        if (this.anticursorPosition < cursorPosition) {
          var newTextPc = cursor[L].splitRight(this.anticursorPosition);
          cursor[L] = newTextPc;
        }
        else {
          var newTextPc = cursor[R].splitRight(this.anticursorPosition - cursorPosition);
        }
        cursor.anticursor = Point(this, newTextPc[L], newTextPc);
      }
    }
  };

  _.blur = function(cursor) {
    MathBlock.prototype.blur.call(this);
    if (!cursor) return;
    if (this.textContents() === '') {
      this.remove();
      if (cursor[L] === this) cursor[L] = this[L];
      else if (cursor[R] === this) cursor[R] = this[R];
    }
    else fuseChildren(this);
  };

  function fuseChildren(self) {
    self.jQ[0].normalize();

    var textPcDom = self.jQ[0].firstChild;
    if (!textPcDom) return;
    pray('only node in TextBlock span is Text node', textPcDom.nodeType === 3);
    // nodeType === 3 has meant a Text node since ancient times:
    //   http://reference.sitepoint.com/javascript/Node/nodeType

    var textPc = TextPiece(textPcDom.data);
    textPc.jQadd(textPcDom);

    self.children().disown();
    return textPc.adopt(self, 0, 0);
  }

  _.focus = MathBlock.prototype.focus;
});

/**
 * Piece of plain text, with a TextBlock as a parent and no children.
 * Wraps a single DOMTextNode.
 * For convenience, has a .text property that's just a JavaScript string
 * mirroring the text contents of the DOMTextNode.
 * Text contents must always be nonempty.
 */
var TextPiece = P(Node, function(_, super_) {
  _.init = function(text) {
    super_.init.call(this);
    this.text = text;
  };
  _.jQadd = function(dom) { this.dom = dom; this.jQ = $(dom); };
  _.jQize = function() {
    return this.jQadd(document.createTextNode(this.text));
  };
  _.appendText = function(text) {
    this.text += text;
    this.dom.appendData(text);
  };
  _.prependText = function(text) {
    this.text = text + this.text;
    this.dom.insertData(0, text);
  };
  _.insTextAtDirEnd = function(text, dir) {
    prayDirection(dir);
    if (dir === R) this.appendText(text);
    else this.prependText(text);
  };
  _.splitRight = function(i) {
    var newPc = TextPiece(this.text.slice(i)).adopt(this.parent, this, this[R]);
    newPc.jQadd(this.dom.splitText(i));
    this.text = this.text.slice(0, i);
    return newPc;
  };

  function endChar(dir, text) {
    return text.charAt(dir === L ? 0 : -1 + text.length);
  }

  _.moveTowards = function(dir, cursor) {
    prayDirection(dir);

    var ch = endChar(-dir, this.text)

    var from = this[-dir];
    if (from) from.insTextAtDirEnd(ch, dir);
    else TextPiece(ch).createDir(-dir, cursor);

    return this.deleteTowards(dir, cursor);
  };

  _.latex = function() { return this.text; };

  _.deleteTowards = function(dir, cursor) {
    if (this.text.length > 1) {
      if (dir === R) {
        this.dom.deleteData(0, 1);
        this.text = this.text.slice(1);
      }
      else {
        // note that the order of these 2 lines is annoyingly important
        // (the second line mutates this.text.length)
        this.dom.deleteData(-1 + this.text.length, 1);
        this.text = this.text.slice(0, -1);
      }
    }
    else {
      this.remove();
      this.jQ.remove();
      cursor[dir] = this[dir];
    }
  };

  _.selectTowards = function(dir, cursor) {
    prayDirection(dir);
    var anticursor = cursor.anticursor;

    var ch = endChar(-dir, this.text)

    if (anticursor[dir] === this) {
      var newPc = TextPiece(ch).createDir(dir, cursor);
      anticursor[dir] = newPc;
      cursor.insDirOf(dir, newPc);
    }
    else {
      var from = this[-dir];
      if (from) from.insTextAtDirEnd(ch, dir);
      else {
        var newPc = TextPiece(ch).createDir(-dir, cursor);
        newPc.jQ.insDirOf(-dir, cursor.selection.jQ);
      }

      if (this.text.length === 1 && anticursor[-dir] === this) {
        anticursor[-dir] = this[-dir]; // \`this\` will be removed in deleteTowards
      }
    }

    return this.deleteTowards(dir, cursor);
  };
});

LatexCmds.text =
LatexCmds.textnormal =
LatexCmds.textrm =
LatexCmds.textup =
LatexCmds.textmd = TextBlock;

function makeTextBlock(latex, tagName, attrs) {
  return P(TextBlock, {
    ctrlSeq: latex,
    htmlTemplate: '<'+tagName+' '+attrs+'>&0</'+tagName+'>'
  });
}

LatexCmds.em = LatexCmds.italic = LatexCmds.italics =
LatexCmds.emph = LatexCmds.textit = LatexCmds.textsl =
  makeTextBlock('\\\\textit', 'i', 'class="mq-text-mode"');
LatexCmds.strong = LatexCmds.bold = LatexCmds.textbf =
  makeTextBlock('\\\\textbf', 'b', 'class="mq-text-mode"');
LatexCmds.sf = LatexCmds.textsf =
  makeTextBlock('\\\\textsf', 'span', 'class="mq-sans-serif mq-text-mode"');
LatexCmds.tt = LatexCmds.texttt =
  makeTextBlock('\\\\texttt', 'span', 'class="mq-monospace mq-text-mode"');
LatexCmds.textsc =
  makeTextBlock('\\\\textsc', 'span', 'style="font-variant:small-caps" class="mq-text-mode"');
LatexCmds.uppercase =
  makeTextBlock('\\\\uppercase', 'span', 'style="text-transform:uppercase" class="mq-text-mode"');
LatexCmds.lowercase =
  makeTextBlock('\\\\lowercase', 'span', 'style="text-transform:lowercase" class="mq-text-mode"');


var RootMathCommand = P(MathCommand, function(_, super_) {
  _.init = function(cursor) {
    super_.init.call(this, '$');
    this.cursor = cursor;
  };
  _.htmlTemplate = '<span class="mq-math-mode">&0</span>';
  _.createBlocks = function() {
    super_.createBlocks.call(this);

    this.ends[L].cursor = this.cursor;
    this.ends[L].write = function(cursor, ch) {
      if (ch !== '$')
        MathBlock.prototype.write.call(this, cursor, ch);
      else if (this.isEmpty()) {
        cursor.insRightOf(this.parent);
        this.parent.deleteTowards(dir, cursor);
        VanillaSymbol('\\\\$','$').createLeftOf(cursor.show());
      }
      else if (!cursor[R])
        cursor.insRightOf(this.parent);
      else if (!cursor[L])
        cursor.insLeftOf(this.parent);
      else
        MathBlock.prototype.write.call(this, cursor, ch);
    };
  };
  _.latex = function() {
    return '$' + this.ends[L].latex() + '$';
  };
});

var RootTextBlock = P(RootMathBlock, function(_, super_) {
  _.keystroke = function(key) {
    if (key === 'Spacebar' || key === 'Shift-Spacebar') return;
    return super_.keystroke.apply(this, arguments);
  };
  _.write = function(cursor, ch) {
    cursor.show().deleteSelection();
    if (ch === '$')
      RootMathCommand(cursor).createLeftOf(cursor);
    else {
      var html;
      if (ch === '<') html = '&lt;';
      else if (ch === '>') html = '&gt;';
      VanillaSymbol(ch, html).createLeftOf(cursor);
    }
  };
});
API.TextField = function(APIClasses) {
  return P(APIClasses.EditableField, function(_, super_) {
    this.RootBlock = RootTextBlock;
    _.__mathquillify = function() {
      return super_.__mathquillify.call(this, 'mq-editable-field mq-text-mode');
    };
    _.latex = function(latex) {
      if (arguments.length > 0) {
        this.__controller.renderLatexText(latex);
        if (this.__controller.blurred) this.__controller.cursor.hide().parent.blur();
        return this;
      }
      return this.__controller.exportLatex();
    };
  });
};
/****************************************
 * Input box to type backslash commands
 ***************************************/

var LatexCommandInput =
CharCmds['\\\\'] = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\\\';
  _.replaces = function(replacedFragment) {
    this._replacedFragment = replacedFragment.disown();
    this.isEmpty = function() { return false; };
  };
  _.htmlTemplate = '<span class="mq-latex-command-input mq-non-leaf">\\\\<span>&0</span></span>';
  _.textTemplate = ['\\\\'];
  _.createBlocks = function() {
    super_.createBlocks.call(this);
    this.ends[L].focus = function() {
      this.parent.jQ.addClass('mq-hasCursor');
      if (this.isEmpty())
        this.parent.jQ.removeClass('mq-empty');

      return this;
    };
    this.ends[L].blur = function() {
      this.parent.jQ.removeClass('mq-hasCursor');
      if (this.isEmpty())
        this.parent.jQ.addClass('mq-empty');

      return this;
    };
    this.ends[L].write = function(cursor, ch) {
      cursor.show().deleteSelection();

      if (ch.match(/[a-z]/i)) VanillaSymbol(ch).createLeftOf(cursor);
      else {
        this.parent.renderCommand(cursor);
        if (ch !== '\\\\' || !this.isEmpty()) cursor.parent.write(cursor, ch);
      }
    };
    this.ends[L].keystroke = function(key, e, ctrlr) {
      if (key === 'Tab' || key === 'Enter' || key === 'Spacebar') {
        this.parent.renderCommand(ctrlr.cursor);
        e.preventDefault();
        return;
      }
      return super_.keystroke.apply(this, arguments);
    };
  };
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.call(this, cursor);

    if (this._replacedFragment) {
      var el = this.jQ[0];
      this.jQ =
        this._replacedFragment.jQ.addClass('mq-blur').bind(
          'mousedown mousemove', //FIXME: is monkey-patching the mousedown and mousemove handlers the right way to do this?
          function(e) {
            $(e.target = el).trigger(e);
            return false;
          }
        ).insertBefore(this.jQ).add(this.jQ);
    }
  };
  _.latex = function() {
    return '\\\\' + this.ends[L].latex() + ' ';
  };
  _.renderCommand = function(cursor) {
    this.jQ = this.jQ.last();
    this.remove();
    if (this[R]) {
      cursor.insLeftOf(this[R]);
    } else {
      cursor.insAtRightEnd(this.parent);
    }

    var latex = this.ends[L].latex();
    if (!latex) latex = ' ';
    var cmd = LatexCmds[latex];
    if (cmd) {
      cmd = cmd(latex);
      if (this._replacedFragment) cmd.replaces(this._replacedFragment);
      cmd.createLeftOf(cursor);
    }
    else {
      cmd = TextBlock();
      cmd.replaces(latex);
      cmd.createLeftOf(cursor);
      cursor.insRightOf(cmd);
      if (this._replacedFragment)
        this._replacedFragment.remove();
    }
  };
});

/***************************
 * Commands and Operators.
 **************************/

var scale, // = function(jQ, x, y) { ... }
//will use a CSS 2D transform to scale the jQuery-wrapped HTML elements,
//or the filter matrix transform fallback for IE 5.5-8, or gracefully degrade to
//increasing the fontSize to match the vertical Y scaling factor.

//ideas from http://github.com/louisremi/jquery.transform.js
//see also http://msdn.microsoft.com/en-us/library/ms533014(v=vs.85).aspx

  forceIERedraw = noop,
  div = document.createElement('div'),
  div_style = div.style,
  transformPropNames = {
    transform:1,
    WebkitTransform:1,
    MozTransform:1,
    OTransform:1,
    msTransform:1
  },
  transformPropName;

for (var prop in transformPropNames) {
  if (prop in div_style) {
    transformPropName = prop;
    break;
  }
}

if (transformPropName) {
  scale = function(jQ, x, y) {
    jQ.css(transformPropName, 'scale('+x+','+y+')');
  };
}
else if ('filter' in div_style) { //IE 6, 7, & 8 fallback, see https://github.com/laughinghan/mathquill/wiki/Transforms
  forceIERedraw = function(el){ el.className = el.className; };
  scale = function(jQ, x, y) { //NOTE: assumes y > x
    x /= (1+(y-1)/2);
    jQ.css('fontSize', y + 'em');
    if (!jQ.hasClass('mq-matrixed-container')) {
      jQ.addClass('mq-matrixed-container')
      .wrapInner('<span class="mq-matrixed"></span>');
    }
    var innerjQ = jQ.children()
    .css('filter', 'progid:DXImageTransform.Microsoft'
        + '.Matrix(M11=' + x + ",SizingMethod='auto expand')"
    );
    function calculateMarginRight() {
      jQ.css('marginRight', (innerjQ.width()-1)*(x-1)/x + 'px');
    }
    calculateMarginRight();
    var intervalId = setInterval(calculateMarginRight);
    $(window).load(function() {
      clearTimeout(intervalId);
      calculateMarginRight();
    });
  };
}
else {
  scale = function(jQ, x, y) {
    jQ.css('fontSize', y + 'em');
  };
}

var Style = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, tagName, attrs) {
    super_.init.call(this, ctrlSeq, '<'+tagName+' '+attrs+'>&0</'+tagName+'>');
  };
});

//fonts
LatexCmds.mathrm = bind(Style, '\\\\mathrm', 'span', 'class="mq-roman mq-font"');
LatexCmds.mathit = bind(Style, '\\\\mathit', 'i', 'class="mq-font"');
LatexCmds.mathbf = bind(Style, '\\\\mathbf', 'b', 'class="mq-font"');
LatexCmds.mathsf = bind(Style, '\\\\mathsf', 'span', 'class="mq-sans-serif mq-font"');
LatexCmds.mathtt = bind(Style, '\\\\mathtt', 'span', 'class="mq-monospace mq-font"');
//text-decoration
LatexCmds.underline = bind(Style, '\\\\underline', 'span', 'class="mq-non-leaf mq-underline"');
LatexCmds.overline = LatexCmds.bar = bind(Style, '\\\\overline', 'span', 'class="mq-non-leaf mq-overline"');
LatexCmds.overrightarrow = bind(Style, '\\\\overrightarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-right"');
LatexCmds.overleftarrow = bind(Style, '\\\\overleftarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-left"');
LatexCmds.overleftrightarrow = bind(Style, '\\\\overleftrightarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-both"');
LatexCmds.overarc = bind(Style, '\\\\overarc', 'span', 'class="mq-non-leaf mq-overarc"');
LatexCmds.dot = P(MathCommand, function(_, super_) {
    _.init = function() {
        super_.init.call(this, '\\\\dot', '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner">'
            + '<span class="mq-dot-recurring">&#x2d9;</span>'
            + '<span class="mq-empty-box">&0</span>'
            + '</span></span>'
        );
    };
});

// \`\\textcolor{color}{math}\` will apply a color to the given math content, where
// \`color\` is any valid CSS Color Value (see [SitePoint docs][] (recommended),
// [Mozilla docs][], or [W3C spec][]).
//
// [SitePoint docs]: http://reference.sitepoint.com/css/colorvalues
// [Mozilla docs]: https://developer.mozilla.org/en-US/docs/CSS/color_value#Values
// [W3C spec]: http://dev.w3.org/csswg/css3-color/#colorunits
var TextColor = LatexCmds.textcolor = P(MathCommand, function(_, super_) {
  _.setColor = function(color) {
    this.color = color;
    this.htmlTemplate =
      '<span class="mq-textcolor" style="color:' + color + '">&0</span>';
  };
  _.latex = function() {
    return '\\\\textcolor{' + this.color + '}{' + this.blocks[0].latex() + '}';
  };
  _.parser = function() {
    var self = this;
    var optWhitespace = Parser.optWhitespace;
    var string = Parser.string;
    var regex = Parser.regex;

    return optWhitespace
      .then(string('{'))
      .then(regex(/^[#\\w\\s.,()%-]*/))
      .skip(string('}'))
      .then(function(color) {
        self.setColor(color);
        return super_.parser.call(self);
      })
    ;
  };
  _.isStyleBlock = function() {
    return true;
  };
});

// Very similar to the \\textcolor command, but will add the given CSS class.
// Usage: \\class{classname}{math}
// Note regex that whitelists valid CSS classname characters:
// https://github.com/mathquill/mathquill/pull/191#discussion_r4327442
var Class = LatexCmds['class'] = P(MathCommand, function(_, super_) {
  _.parser = function() {
    var self = this, string = Parser.string, regex = Parser.regex;
    return Parser.optWhitespace
      .then(string('{'))
      .then(regex(/^[-\\w\\s\\\\\\xA0-\\xFF]*/))
      .skip(string('}'))
      .then(function(cls) {
        self.cls = cls || '';
        self.htmlTemplate = '<span class="mq-class '+cls+'">&0</span>';
        return super_.parser.call(self);
      })
    ;
  };
  _.latex = function() {
    return '\\\\class{' + this.cls + '}{' + this.blocks[0].latex() + '}';
  };
  _.isStyleBlock = function() {
    return true;
  };
});

var SupSub = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '_{...}^{...}';
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment && !cursor[L] && cursor.options.supSubsRequireOperand) return;
    return super_.createLeftOf.apply(this, arguments);
  };
  _.contactWeld = function(cursor) {
    // Look on either side for a SupSub, if one is found compare my
    // .sub, .sup with its .sub, .sup. If I have one that it doesn't,
    // then call .addBlock() on it with my block; if I have one that
    // it also has, then insert my block's children into its block,
    // unless my block has none, in which case insert the cursor into
    // its block (and not mine, I'm about to remove myself) in the case
    // I was just typed.
    // TODO: simplify

    // equiv. to [L, R].forEach(function(dir) { ... });
    for (var dir = L; dir; dir = (dir === L ? R : false)) {
      if (this[dir] instanceof SupSub) {
        // equiv. to 'sub sup'.split(' ').forEach(function(supsub) { ... });
        for (var supsub = 'sub'; supsub; supsub = (supsub === 'sub' ? 'sup' : false)) {
          var src = this[supsub], dest = this[dir][supsub];
          if (!src) continue;
          if (!dest) this[dir].addBlock(src.disown());
          else if (!src.isEmpty()) { // ins src children at -dir end of dest
            src.jQ.children().insAtDirEnd(-dir, dest.jQ);
            var children = src.children().disown();
            var pt = Point(dest, children.ends[R], dest.ends[L]);
            if (dir === L) children.adopt(dest, dest.ends[R], 0);
            else children.adopt(dest, 0, dest.ends[L]);
          }
          else var pt = Point(dest, 0, dest.ends[L]);
          this.placeCursor = (function(dest, src) { // TODO: don't monkey-patch
            return function(cursor) { cursor.insAtDirEnd(-dir, dest || src); };
          }(dest, src));
        }
        this.remove();
        if (cursor && cursor[L] === this) {
          if (dir === R && pt) {
            pt[L] ? cursor.insRightOf(pt[L]) : cursor.insAtLeftEnd(pt.parent);
          }
          else cursor.insRightOf(this[dir]);
        }
        break;
      }
    }
  };
  Options.p.charsThatBreakOutOfSupSub = '';
  _.finalizeTree = function() {
    this.ends[L].write = function(cursor, ch) {
      if (cursor.options.autoSubscriptNumerals && this === this.parent.sub) {
        if (ch === '_') return;
        var cmd = this.chToCmd(ch, cursor.options);
        if (cmd instanceof Symbol) cursor.deleteSelection();
        else cursor.clearSelection().insRightOf(this.parent);
        return cmd.createLeftOf(cursor.show());
      }
      if (cursor[L] && !cursor[R] && !cursor.selection
          && cursor.options.charsThatBreakOutOfSupSub.indexOf(ch) > -1) {
        cursor.insRightOf(this.parent);
      }
      MathBlock.p.write.apply(this, arguments);
    };
  };
  _.moveTowards = function(dir, cursor, updown) {
    if (cursor.options.autoSubscriptNumerals && !this.sup) {
      cursor.insDirOf(dir, this);
    }
    else super_.moveTowards.apply(this, arguments);
  };
  _.deleteTowards = function(dir, cursor) {
    if (cursor.options.autoSubscriptNumerals && this.sub) {
      var cmd = this.sub.ends[-dir];
      if (cmd instanceof Symbol) cmd.remove();
      else if (cmd) cmd.deleteTowards(dir, cursor.insAtDirEnd(-dir, this.sub));

      // TODO: factor out a .removeBlock() or something
      if (this.sub.isEmpty()) {
        this.sub.deleteOutOf(L, cursor.insAtLeftEnd(this.sub));
        if (this.sup) cursor.insDirOf(-dir, this);
        // Note \`-dir\` because in e.g. x_1^2| want backspacing (leftward)
        // to delete the 1 but to end up rightward of x^2; with non-negated
        // \`dir\` (try it), the cursor appears to have gone "through" the ^2.
      }
    }
    else super_.deleteTowards.apply(this, arguments);
  };
  _.latex = function() {
    function latex(prefix, block) {
      var l = block && block.latex();
      return block ? prefix + (l.length === 1 ? l : '{' + (l || ' ') + '}') : '';
    }
    return latex('_', this.sub) + latex('^', this.sup);
  };
  _.addBlock = function(block) {
    if (this.supsub === 'sub') {
      this.sup = this.upInto = this.sub.upOutOf = block;
      block.adopt(this, this.sub, 0).downOutOf = this.sub;
      block.jQ = $('<span class="mq-sup"/>').append(block.jQ.children())
        .attr(mqBlockId, block.id).prependTo(this.jQ);
    }
    else {
      this.sub = this.downInto = this.sup.downOutOf = block;
      block.adopt(this, 0, this.sup).upOutOf = this.sup;
      block.jQ = $('<span class="mq-sub"></span>').append(block.jQ.children())
        .attr(mqBlockId, block.id).appendTo(this.jQ.removeClass('mq-sup-only'));
      this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>');
    }
    // like 'sub sup'.split(' ').forEach(function(supsub) { ... });
    for (var i = 0; i < 2; i += 1) (function(cmd, supsub, oppositeSupsub, updown) {
      cmd[supsub].deleteOutOf = function(dir, cursor) {
        cursor.insDirOf((this[dir] ? -dir : dir), this.parent);
        if (!this.isEmpty()) {
          var end = this.ends[dir];
          this.children().disown()
            .withDirAdopt(dir, cursor.parent, cursor[dir], cursor[-dir])
            .jQ.insDirOf(-dir, cursor.jQ);
          cursor[-dir] = end;
        }
        cmd.supsub = oppositeSupsub;
        delete cmd[supsub];
        delete cmd[updown+'Into'];
        cmd[oppositeSupsub][updown+'OutOf'] = insLeftOfMeUnlessAtEnd;
        delete cmd[oppositeSupsub].deleteOutOf;
        if (supsub === 'sub') $(cmd.jQ.addClass('mq-sup-only')[0].lastChild).remove();
        this.remove();
      };
    }(this, 'sub sup'.split(' ')[i], 'sup sub'.split(' ')[i], 'down up'.split(' ')[i]));
  };
  _.reflow = function() {
    var $block = this.jQ ;//mq-supsub
    var $prev = $block.prev() ;

    if ( !$prev.length ) {
        //we cant normalize it without having prev. element (which is base)
        return ;
    }

    var $sup = $block.children( '.mq-sup' );//mq-supsub -> mq-sup
    if ( $sup.length ) {
        var sup_fontsize = parseInt( $sup.css('font-size') ) ;
        var sup_bottom = $sup.offset().top + $sup.height() ;
        //we want that superscript overlaps top of base on 0.7 of its font-size
        //this way small superscripts like x^2 look ok, but big ones like x^(1/2/3) too
        var needed = sup_bottom - $prev.offset().top  - 0.7*sup_fontsize ;
        var cur_margin = parseInt( $sup.css('margin-bottom' ) ) ;
        //we lift it up with margin-bottom
        $sup.css( 'margin-bottom', cur_margin + needed ) ;
    }
  } ;

});

function insLeftOfMeUnlessAtEnd(cursor) {
  // cursor.insLeftOf(cmd), unless cursor at the end of block, and every
  // ancestor cmd is at the end of every ancestor block
  var cmd = this.parent, ancestorCmd = cursor;
  do {
    if (ancestorCmd[R]) return cursor.insLeftOf(cmd);
    ancestorCmd = ancestorCmd.parent.parent;
  } while (ancestorCmd !== cmd);
  cursor.insRightOf(cmd);
}

LatexCmds.subscript =
LatexCmds._ = P(SupSub, function(_, super_) {
  _.supsub = 'sub';
  _.htmlTemplate =
      '<span class="mq-supsub mq-non-leaf">'
    +   '<span class="mq-sub">&0</span>'
    +   '<span style="display:inline-block;width:0">&#8203;</span>'
    + '</span>'
  ;
  _.textTemplate = [ '_' ];
  _.finalizeTree = function() {
    this.downInto = this.sub = this.ends[L];
    this.sub.upOutOf = insLeftOfMeUnlessAtEnd;
    super_.finalizeTree.call(this);
  };
});

LatexCmds.superscript =
LatexCmds.supscript =
LatexCmds['^'] = P(SupSub, function(_, super_) {
  _.supsub = 'sup';
  _.htmlTemplate =
      '<span class="mq-supsub mq-non-leaf mq-sup-only">'
    +   '<span class="mq-sup">&0</span>'
    + '</span>'
  ;
  _.textTemplate = [ '^' ];
  _.finalizeTree = function() {
    this.upInto = this.sup = this.ends[R];
    this.sup.downOutOf = insLeftOfMeUnlessAtEnd;
    super_.finalizeTree.call(this);
  };
});

var SummationNotation = P(MathCommand, function(_, super_) {
  _.init = function(ch, html) {
    var htmlTemplate =
      '<span class="mq-large-operator mq-non-leaf">'
    +   '<span class="mq-to"><span>&1</span></span>'
    +   '<big>'+html+'</big>'
    +   '<span class="mq-from"><span>&0</span></span>'
    + '</span>'
    ;
    Symbol.prototype.init.call(this, ch, htmlTemplate);
  };
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.apply(this, arguments);
    if (cursor.options.sumStartsWithNEquals) {
      Letter('n').createLeftOf(cursor);
      Equality().createLeftOf(cursor);
    }
  };
  _.latex = function() {
    function simplify(latex) {
      return latex.length === 1 ? latex : '{' + (latex || ' ') + '}';
    }
    return this.ctrlSeq + '_' + simplify(this.ends[L].latex()) +
      '^' + simplify(this.ends[R].latex());
  };
  _.parser = function() {
    var string = Parser.string;
    var optWhitespace = Parser.optWhitespace;
    var succeed = Parser.succeed;
    var block = latexMathParser.block;

    var self = this;
    var blocks = self.blocks = [ MathBlock(), MathBlock() ];
    for (var i = 0; i < blocks.length; i += 1) {
      blocks[i].adopt(self, self.ends[R], 0);
    }

    return optWhitespace.then(string('_').or(string('^'))).then(function(supOrSub) {
      var child = blocks[supOrSub === '_' ? 0 : 1];
      return block.then(function(block) {
        block.children().adopt(child, child.ends[R], 0);
        return succeed(self);
      });
    }).many().result(self);
  };
  _.finalizeTree = function() {
    this.downInto = this.ends[L];
    this.upInto = this.ends[R];
    this.ends[L].upOutOf = this.ends[R];
    this.ends[R].downOutOf = this.ends[L];
  };
});

LatexCmds['\\u2211'] =
LatexCmds.sum =
LatexCmds.summation = bind(SummationNotation,'\\\\sum ','&sum;');

LatexCmds['\\u220f'] =
LatexCmds.prod =
LatexCmds.product = bind(SummationNotation,'\\\\prod ','&prod;');

LatexCmds.coprod =
LatexCmds.coproduct = bind(SummationNotation,'\\\\coprod ','&#8720;');

LatexCmds['\\u222b'] =
LatexCmds['int'] =
LatexCmds.integral = P(SummationNotation, function(_, super_) {
  _.init = function() {
    var htmlTemplate =
      '<span class="mq-int mq-non-leaf">'
    +   '<big>&int;</big>'
    +   '<span class="mq-supsub mq-non-leaf">'
    +     '<span class="mq-sup"><span class="mq-sup-inner">&1</span></span>'
    +     '<span class="mq-sub">&0</span>'
    +     '<span style="display:inline-block;width:0">&#8203</span>'
    +   '</span>'
    + '</span>'
    ;
    Symbol.prototype.init.call(this, '\\\\int ', htmlTemplate);
  };
  // FIXME: refactor rather than overriding
  _.createLeftOf = MathCommand.p.createLeftOf;
});

var Fraction =
LatexCmds.frac =
LatexCmds.dfrac =
LatexCmds.cfrac =
LatexCmds.fraction = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\\\frac';
  _.htmlTemplate =
      '<span class="mq-fraction mq-non-leaf">'
    +   '<span class="mq-numerator">&0</span>'
    +   '<span class="mq-denominator">&1</span>'
    +   '<span style="display:inline-block;width:0">&#8203;</span>'
    + '</span>'
  ;
  _.textTemplate = ['(', ')/(', ')'];
  _.finalizeTree = function() {
    this.upInto = this.ends[R].upOutOf = this.ends[L];
    this.downInto = this.ends[L].downOutOf = this.ends[R];
  };
});

var LiveFraction =
LatexCmds.over =
CharCmds['/'] = P(Fraction, function(_, super_) {
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment) {
      var leftward = cursor[L];
      while (leftward &&
        !(
          leftward instanceof BinaryOperator ||
          leftward instanceof (LatexCmds.text || noop) ||
          leftward instanceof SummationNotation ||
          leftward.ctrlSeq === '\\\\ ' ||
          /^[,;:]$/.test(leftward.ctrlSeq)
        ) //lookbehind for operator
      ) leftward = leftward[L];

      if (leftward instanceof SummationNotation && leftward[R] instanceof SupSub) {
        leftward = leftward[R];
        if (leftward[R] instanceof SupSub && leftward[R].ctrlSeq != leftward.ctrlSeq)
          leftward = leftward[R];
      }

      if (leftward !== cursor[L] && !cursor.isTooDeep(1)) {
        this.replaces(Fragment(leftward[R] || cursor.parent.ends[L], cursor[L]));
        cursor[L] = leftward;
      }
    }
    super_.createLeftOf.call(this, cursor);
  };
});

var SquareRoot =
LatexCmds.sqrt =
LatexCmds['\\u221a'] = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\\\sqrt';
  _.htmlTemplate =
      '<span class="mq-non-leaf">'
    +   '<span class="mq-scaled mq-sqrt-prefix">&radic;</span>'
    +   '<span class="mq-non-leaf mq-sqrt-stem">&0</span>'
    + '</span>'
  ;
  _.textTemplate = ['sqrt(', ')'];
  _.parser = function() {
    return latexMathParser.optBlock.then(function(optBlock) {
      return latexMathParser.block.map(function(block) {
        var nthroot = NthRoot();
        nthroot.blocks = [ optBlock, block ];
        optBlock.adopt(nthroot, 0, 0);
        block.adopt(nthroot, optBlock, 0);
        return nthroot;
      });
    }).or(super_.parser.call(this));
  };
  _.reflow = function() {
    var block = this.ends[R].jQ;
    scale(block.prev(), 1, block.innerHeight()/+block.css('fontSize').slice(0,-2) - .1);
  };
});

var Hat = LatexCmds.hat = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\\\hat';
  _.htmlTemplate =
      '<span class="mq-non-leaf">'
    +   '<span class="mq-hat-prefix">^</span>'
    +   '<span class="mq-hat-stem">&0</span>'
    + '</span>'
  ;
  _.textTemplate = ['hat(', ')'];
});

var NthRoot =
LatexCmds.nthroot = P(SquareRoot, function(_, super_) {
  _.htmlTemplate =
      '<sup class="mq-nthroot mq-non-leaf">&0</sup>'
    + '<span class="mq-scaled">'
    +   '<span class="mq-sqrt-prefix mq-scaled">&radic;</span>'
    +   '<span class="mq-sqrt-stem mq-non-leaf">&1</span>'
    + '</span>'
  ;
  _.textTemplate = ['sqrt[', '](', ')'];
  _.latex = function() {
    return '\\\\sqrt['+this.ends[L].latex()+']{'+this.ends[R].latex()+'}';
  };
});

var DiacriticAbove = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, symbol, textTemplate) {
    var htmlTemplate =
      '<span class="mq-non-leaf">'
      +   '<span class="mq-diacritic-above">'+symbol+'</span>'
      +   '<span class="mq-diacritic-stem">&0</span>'
      + '</span>'
    ;

    super_.init.call(this, ctrlSeq, htmlTemplate, textTemplate);
  };
});
LatexCmds.vec = bind(DiacriticAbove, '\\\\vec', '&rarr;', ['vec(', ')']);
LatexCmds.tilde = bind(DiacriticAbove, '\\\\tilde', '~', ['tilde(', ')']);

function DelimsMixin(_, super_) {
  _.jQadd = function() {
    super_.jQadd.apply(this, arguments);
    this.delimjQs = this.jQ.children(':first').add(this.jQ.children(':last'));
    this.contentjQ = this.jQ.children(':eq(1)');
  };
  _.reflow = function() {
    var height = this.contentjQ.outerHeight()
                 / parseFloat(this.contentjQ.css('fontSize'));
    scale(this.delimjQs, min(1 + .2*(height - 1), 1.2), 1.2*height);
  };
}

// Round/Square/Curly/Angle Brackets (aka Parens/Brackets/Braces)
//   first typed as one-sided bracket with matching "ghost" bracket at
//   far end of current block, until you type an opposing one
var Bracket = P(P(MathCommand, DelimsMixin), function(_, super_) {
  _.init = function(side, open, close, ctrlSeq, end) {
    super_.init.call(this, '\\\\left'+ctrlSeq, undefined, [open, close]);
    this.side = side;
    this.sides = {};
    this.sides[L] = { ch: open, ctrlSeq: ctrlSeq };
    this.sides[R] = { ch: close, ctrlSeq: end };
  };
  _.numBlocks = function() { return 1; };
  _.html = function() { // wait until now so that .side may
    this.htmlTemplate = // be set by createLeftOf or parser
        '<span class="mq-non-leaf">'
      +   '<span class="mq-scaled mq-paren'+(this.side === R ? ' mq-ghost' : '')+'">'
      +     this.sides[L].ch
      +   '</span>'
      +   '<span class="mq-non-leaf">&0</span>'
      +   '<span class="mq-scaled mq-paren'+(this.side === L ? ' mq-ghost' : '')+'">'
      +     this.sides[R].ch
      +   '</span>'
      + '</span>'
    ;
    return super_.html.call(this);
  };
  _.latex = function() {
    return '\\\\left'+this.sides[L].ctrlSeq+this.ends[L].latex()+'\\\\right'+this.sides[R].ctrlSeq;
  };
  _.matchBrack = function(opts, expectedSide, node) {
    // return node iff it's a matching 1-sided bracket of expected side (if any)
    return node instanceof Bracket && node.side && node.side !== -expectedSide
      && (!opts.restrictMismatchedBrackets
        || OPP_BRACKS[this.sides[this.side].ch] === node.sides[node.side].ch
        || { '(': ']', '[': ')' }[this.sides[L].ch] === node.sides[R].ch) && node;
  };
  _.closeOpposing = function(brack) {
    brack.side = 0;
    brack.sides[this.side] = this.sides[this.side]; // copy over my info (may be
    brack.delimjQs.eq(this.side === L ? 0 : 1) // mismatched, like [a, b))
      .removeClass('mq-ghost').html(this.sides[this.side].ch);
  };
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment) { // unless wrapping seln in brackets,
        // check if next to or inside an opposing one-sided bracket
      var opts = cursor.options;
      if (this.sides[L].ch === '|') { // check both sides if I'm a pipe
        var brack = this.matchBrack(opts, R, cursor[R])
                 || this.matchBrack(opts, L, cursor[L])
                 || this.matchBrack(opts, 0, cursor.parent.parent);
      }
      else {
        var brack = this.matchBrack(opts, -this.side, cursor[-this.side])
                 || this.matchBrack(opts, -this.side, cursor.parent.parent);
      }
    }
    if (brack) {
      var side = this.side = -brack.side; // may be pipe with .side not yet set
      this.closeOpposing(brack);
      if (brack === cursor.parent.parent && cursor[side]) { // move the stuff between
        Fragment(cursor[side], cursor.parent.ends[side], -side) // me and ghost outside
          .disown().withDirAdopt(-side, brack.parent, brack, brack[side])
          .jQ.insDirOf(side, brack.jQ);
      }
      brack.bubble('reflow');
    }
    else {
      brack = this, side = brack.side;
      if (brack.replacedFragment) brack.side = 0; // wrapping seln, don't be one-sided
      else if (cursor[-side]) { // elsewise, auto-expand so ghost is at far end
        brack.replaces(Fragment(cursor[-side], cursor.parent.ends[-side], side));
        cursor[-side] = 0;
      }
      super_.createLeftOf.call(brack, cursor);
    }
    if (side === L) cursor.insAtLeftEnd(brack.ends[L]);
    else cursor.insRightOf(brack);
  };
  _.placeCursor = noop;
  _.unwrap = function() {
    this.ends[L].children().disown().adopt(this.parent, this, this[R])
      .jQ.insertAfter(this.jQ);
    this.remove();
  };
  _.deleteSide = function(side, outward, cursor) {
    var parent = this.parent, sib = this[side], farEnd = parent.ends[side];

    if (side === this.side) { // deleting non-ghost of one-sided bracket, unwrap
      this.unwrap();
      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
      return;
    }

    var opts = cursor.options, wasSolid = !this.side;
    this.side = -side;
    // if deleting like, outer close-brace of [(1+2)+3} where inner open-paren
    if (this.matchBrack(opts, side, this.ends[L].ends[this.side])) { // is ghost,
      this.closeOpposing(this.ends[L].ends[this.side]); // then become [1+2)+3
      var origEnd = this.ends[L].ends[side];
      this.unwrap();
      if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
    }
    else { // if deleting like, inner close-brace of ([1+2}+3) where outer
      if (this.matchBrack(opts, side, this.parent.parent)) { // open-paren is
        this.parent.parent.closeOpposing(this); // ghost, then become [1+2+3)
        this.parent.parent.unwrap();
      } // else if deleting outward from a solid pair, unwrap
      else if (outward && wasSolid) {
        this.unwrap();
        sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
        return;
      }
      else { // else deleting just one of a pair of brackets, become one-sided
        this.sides[side] = { ch: OPP_BRACKS[this.sides[this.side].ch],
                             ctrlSeq: OPP_BRACKS[this.sides[this.side].ctrlSeq] };
        this.delimjQs.removeClass('mq-ghost')
          .eq(side === L ? 0 : 1).addClass('mq-ghost').html(this.sides[side].ch);
      }
      if (sib) { // auto-expand so ghost is at far end
        var origEnd = this.ends[L].ends[side];
        Fragment(sib, farEnd, -side).disown()
          .withDirAdopt(-side, this.ends[L], origEnd, 0)
          .jQ.insAtDirEnd(side, this.ends[L].jQ.removeClass('mq-empty'));
        if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
        cursor.insDirOf(-side, sib);
      } // didn't auto-expand, cursor goes just outside or just inside parens
      else (outward ? cursor.insDirOf(side, this)
                    : cursor.insAtDirEnd(side, this.ends[L]));
    }
  };
  _.deleteTowards = function(dir, cursor) {
    this.deleteSide(-dir, false, cursor);
  };
  _.finalizeTree = function() {
    this.ends[L].deleteOutOf = function(dir, cursor) {
      this.parent.deleteSide(dir, true, cursor);
    };
    // FIXME HACK: after initial creation/insertion, finalizeTree would only be
    // called if the paren is selected and replaced, e.g. by LiveFraction
    this.finalizeTree = this.intentionalBlur = function() {
      this.delimjQs.eq(this.side === L ? 1 : 0).removeClass('mq-ghost');
      this.side = 0;
    };
  };
  _.siblingCreated = function(opts, dir) { // if something typed between ghost and far
    if (dir === -this.side) this.finalizeTree(); // end of its block, solidify
  };
});

var OPP_BRACKS = {
  '(': ')',
  ')': '(',
  '[': ']',
  ']': '[',
  '{': '}',
  '}': '{',
  '\\\\{': '\\\\}',
  '\\\\}': '\\\\{',
  '&lang;': '&rang;',
  '&rang;': '&lang;',
  '\\\\langle ': '\\\\rangle ',
  '\\\\rangle ': '\\\\langle ',
  '|': '|',
  '\\\\lVert ' : '\\\\rVert ',
  '\\\\rVert ' : '\\\\lVert ',
};

function bindCharBracketPair(open, ctrlSeq) {
  var ctrlSeq = ctrlSeq || open, close = OPP_BRACKS[open], end = OPP_BRACKS[ctrlSeq];
  CharCmds[open] = bind(Bracket, L, open, close, ctrlSeq, end);
  CharCmds[close] = bind(Bracket, R, open, close, ctrlSeq, end);
}
bindCharBracketPair('(');
bindCharBracketPair('[');
bindCharBracketPair('{', '\\\\{');
LatexCmds.langle = bind(Bracket, L, '&lang;', '&rang;', '\\\\langle ', '\\\\rangle ');
LatexCmds.rangle = bind(Bracket, R, '&lang;', '&rang;', '\\\\langle ', '\\\\rangle ');
CharCmds['|'] = bind(Bracket, L, '|', '|', '|', '|');
LatexCmds.lVert = bind(Bracket, L, '&#8741;', '&#8741;', '\\\\lVert ', '\\\\rVert ');
LatexCmds.rVert = bind(Bracket, R, '&#8741;', '&#8741;', '\\\\lVert ', '\\\\rVert ');

LatexCmds.left = P(MathCommand, function(_) {
  _.parser = function() {
    var regex = Parser.regex;
    var string = Parser.string;
    var succeed = Parser.succeed;
    var optWhitespace = Parser.optWhitespace;

    return optWhitespace.then(regex(/^(?:[([|]|\\\\\\{|\\\\langle(?![a-zA-Z])|\\\\lVert(?![a-zA-Z]))/))
      .then(function(ctrlSeq) {
        var open = (ctrlSeq.charAt(0) === '\\\\' ? ctrlSeq.slice(1) : ctrlSeq);
	if (ctrlSeq=="\\\\langle") { open = '&lang;'; ctrlSeq = ctrlSeq + ' '; }
	if (ctrlSeq=="\\\\lVert") { open = '&#8741;'; ctrlSeq = ctrlSeq + ' '; }
        return latexMathParser.then(function (block) {
          return string('\\\\right').skip(optWhitespace)
            .then(regex(/^(?:[\\])|]|\\\\\\}|\\\\rangle(?![a-zA-Z])|\\\\rVert(?![a-zA-Z]))/)).map(function(end) {
              var close = (end.charAt(0) === '\\\\' ? end.slice(1) : end);
	      if (end=="\\\\rangle") { close = '&rang;'; end = end + ' '; }
	      if (end=="\\\\rVert") { close = '&#8741;'; end = end + ' '; }
              var cmd = Bracket(0, open, close, ctrlSeq, end);
              cmd.blocks = [ block ];
              block.adopt(cmd, 0, 0);
              return cmd;
            })
          ;
        });
      })
    ;
  };
});

LatexCmds.right = P(MathCommand, function(_) {
  _.parser = function() {
    return Parser.fail('unmatched \\\\right');
  };
});

var Binomial =
LatexCmds.binom =
LatexCmds.binomial = P(P(MathCommand, DelimsMixin), function(_, super_) {
  _.ctrlSeq = '\\\\binom';
  _.htmlTemplate =
      '<span class="mq-non-leaf">'
    +   '<span class="mq-paren mq-scaled">(</span>'
    +   '<span class="mq-non-leaf">'
    +     '<span class="mq-array mq-non-leaf">'
    +       '<span>&0</span>'
    +       '<span>&1</span>'
    +     '</span>'
    +   '</span>'
    +   '<span class="mq-paren mq-scaled">)</span>'
    + '</span>'
  ;
  _.textTemplate = ['choose(',',',')'];
});

var Choose =
LatexCmds.choose = P(Binomial, function(_) {
  _.createLeftOf = LiveFraction.prototype.createLeftOf;
});

LatexCmds.editable = // backcompat with before cfd3620 on #233
LatexCmds.MathQuillMathField = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\\\MathQuillMathField';
  _.htmlTemplate =
      '<span class="mq-editable-field">'
    +   '<span class="mq-root-block">&0</span>'
    + '</span>'
  ;
  _.parser = function() {
    var self = this,
      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
    return string('[').then(regex(/^[a-z][a-z0-9]*/i)).skip(string(']'))
      .map(function(name) { self.name = name; }).or(succeed())
      .then(super_.parser.call(self));
  };
  _.finalizeTree = function(options) {
    var ctrlr = Controller(this.ends[L], this.jQ, options);
    ctrlr.KIND_OF_MQ = 'MathField';
    ctrlr.editable = true;
    ctrlr.createTextarea();
    ctrlr.editablesTextareaEvents();
    ctrlr.cursor.insAtRightEnd(ctrlr.root);
    RootBlockMixin(ctrlr.root);
  };
  _.registerInnerField = function(innerFields, MathField) {
    innerFields.push(innerFields[this.name] = MathField(this.ends[L].controller));
  };
  _.latex = function(){ return this.ends[L].latex(); };
  _.text = function(){ return this.ends[L].text(); };
});

// Embed arbitrary things
// Probably the closest DOM analogue would be an iframe?
// From MathQuill's perspective, it's a Symbol, it can be
// anywhere and the cursor can go around it but never in it.
// Create by calling public API method .dropEmbedded(),
// or by calling the global public API method .registerEmbed()
// and rendering LaTeX like \\embed{registeredName} (see test).
var Embed = LatexCmds.embed = P(Symbol, function(_, super_) {
  _.setOptions = function(options) {
    function noop () { return ""; }
    this.text = options.text || noop;
    this.htmlTemplate = options.htmlString || "";
    this.latex = options.latex || noop;
    return this;
  };
  _.parser = function() {
    var self = this,
      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
    return string('{').then(regex(/^[a-z][a-z0-9]*/i)).skip(string('}'))
      .then(function(name) {
        // the chars allowed in the optional data block are arbitrary other than
        // excluding curly braces and square brackets (which'd be too confusing)
        return string('[').then(regex(/^[-\\w\\s]*/)).skip(string(']'))
          .or(succeed()).map(function(data) {
            return self.setOptions(EMBEDS[name](data));
          })
        ;
      })
    ;
  };
});
/************************************
 * Symbols for Advanced Mathematics
 ***********************************/

LatexCmds.notin =
LatexCmds.cong =
LatexCmds.equiv =
LatexCmds.oplus =
LatexCmds.otimes = P(BinaryOperator, function(_, super_) {
  _.init = function(latex) {
    super_.init.call(this, '\\\\'+latex+' ', '&'+latex+';');
  };
});

LatexCmds['\\u2260'] = LatexCmds.ne = LatexCmds.neq = bind(BinaryOperator,'\\\\ne ','&ne;');

LatexCmds['\\u2217'] = LatexCmds.ast = LatexCmds.star = LatexCmds.loast = LatexCmds.lowast =
  bind(BinaryOperator,'\\\\ast ','&lowast;');

LatexCmds.therefor = LatexCmds.therefore =
  bind(BinaryOperator,'\\\\therefore ','&there4;');

LatexCmds.cuz = // l33t
LatexCmds.because = bind(BinaryOperator,'\\\\because ','&#8757;');

LatexCmds.prop = LatexCmds.propto = bind(BinaryOperator,'\\\\propto ','&prop;');

LatexCmds['\\u2248'] = LatexCmds.asymp = LatexCmds.approx = bind(BinaryOperator,'\\\\approx ','&asymp;');

LatexCmds.isin = LatexCmds['in'] = bind(BinaryOperator,'\\\\in ','&isin;');

LatexCmds.ni = LatexCmds.contains = bind(BinaryOperator,'\\\\ni ','&ni;');

LatexCmds.notni = LatexCmds.niton = LatexCmds.notcontains = LatexCmds.doesnotcontain =
  bind(BinaryOperator,'\\\\not\\\\ni ','&#8716;');

LatexCmds.sub = LatexCmds.subset = bind(BinaryOperator,'\\\\subset ','&sub;');

LatexCmds.sup = LatexCmds.supset = LatexCmds.superset =
  bind(BinaryOperator,'\\\\supset ','&sup;');

LatexCmds.nsub = LatexCmds.notsub =
LatexCmds.nsubset = LatexCmds.notsubset =
  bind(BinaryOperator,'\\\\not\\\\subset ','&#8836;');

LatexCmds.nsup = LatexCmds.notsup =
LatexCmds.nsupset = LatexCmds.notsupset =
LatexCmds.nsuperset = LatexCmds.notsuperset =
  bind(BinaryOperator,'\\\\not\\\\supset ','&#8837;');

LatexCmds.sube = LatexCmds.subeq = LatexCmds.subsete = LatexCmds.subseteq =
  bind(BinaryOperator,'\\\\subseteq ','&sube;');

LatexCmds.supe = LatexCmds.supeq =
LatexCmds.supsete = LatexCmds.supseteq =
LatexCmds.supersete = LatexCmds.superseteq =
  bind(BinaryOperator,'\\\\supseteq ','&supe;');

LatexCmds.nsube = LatexCmds.nsubeq =
LatexCmds.notsube = LatexCmds.notsubeq =
LatexCmds.nsubsete = LatexCmds.nsubseteq =
LatexCmds.notsubsete = LatexCmds.notsubseteq =
  bind(BinaryOperator,'\\\\not\\\\subseteq ','&#8840;');

LatexCmds.nsupe = LatexCmds.nsupeq =
LatexCmds.notsupe = LatexCmds.notsupeq =
LatexCmds.nsupsete = LatexCmds.nsupseteq =
LatexCmds.notsupsete = LatexCmds.notsupseteq =
LatexCmds.nsupersete = LatexCmds.nsuperseteq =
LatexCmds.notsupersete = LatexCmds.notsuperseteq =
  bind(BinaryOperator,'\\\\not\\\\supseteq ','&#8841;');


//the canonical sets of numbers
LatexCmds.N = LatexCmds.naturals = LatexCmds.Naturals =
  bind(VanillaSymbol,'\\\\mathbb{N}','&#8469;');

LatexCmds.P =
LatexCmds.primes = LatexCmds.Primes =
LatexCmds.projective = LatexCmds.Projective =
LatexCmds.probability = LatexCmds.Probability =
  bind(VanillaSymbol,'\\\\mathbb{P}','&#8473;');

LatexCmds.Z = LatexCmds.integers = LatexCmds.Integers =
  bind(VanillaSymbol,'\\\\mathbb{Z}','&#8484;');

LatexCmds.Q = LatexCmds.rationals = LatexCmds.Rationals =
  bind(VanillaSymbol,'\\\\mathbb{Q}','&#8474;');

LatexCmds.R = LatexCmds.reals = LatexCmds.Reals =
  bind(VanillaSymbol,'\\\\mathbb{R}','&#8477;');

LatexCmds.C =
LatexCmds.complex = LatexCmds.Complex =
LatexCmds.complexes = LatexCmds.Complexes =
LatexCmds.complexplane = LatexCmds.Complexplane = LatexCmds.ComplexPlane =
  bind(VanillaSymbol,'\\\\mathbb{C}','&#8450;');

LatexCmds.H = LatexCmds.Hamiltonian = LatexCmds.quaternions = LatexCmds.Quaternions =
  bind(VanillaSymbol,'\\\\mathbb{H}','&#8461;');

//spacing
LatexCmds.quad = LatexCmds.emsp = bind(VanillaSymbol,'\\\\quad ','    ');
LatexCmds.qquad = bind(VanillaSymbol,'\\\\qquad ','        ');
/* spacing special characters, gonna have to implement this in LatexCommandInput::onText somehow
case ',':
  return VanillaSymbol('\\\\, ',' ');
case ':':
  return VanillaSymbol('\\\\: ','  ');
case ';':
  return VanillaSymbol('\\\\; ','   ');
case '!':
  return Symbol('\\\\! ','<span style="margin-right:-.2em"></span>');
*/

//binary operators
LatexCmds.diamond = bind(VanillaSymbol, '\\\\diamond ', '&#9671;');
LatexCmds.bigtriangleup = bind(VanillaSymbol, '\\\\bigtriangleup ', '&#9651;');
LatexCmds.ominus = bind(VanillaSymbol, '\\\\ominus ', '&#8854;');
LatexCmds.uplus = bind(VanillaSymbol, '\\\\uplus ', '&#8846;');
LatexCmds.bigtriangledown = bind(VanillaSymbol, '\\\\bigtriangledown ', '&#9661;');
LatexCmds.sqcap = bind(VanillaSymbol, '\\\\sqcap ', '&#8851;');
LatexCmds.triangleleft = bind(VanillaSymbol, '\\\\triangleleft ', '&#8882;');
LatexCmds.sqcup = bind(VanillaSymbol, '\\\\sqcup ', '&#8852;');
LatexCmds.triangleright = bind(VanillaSymbol, '\\\\triangleright ', '&#8883;');
//circledot is not a not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
LatexCmds.odot = LatexCmds.circledot = bind(VanillaSymbol, '\\\\odot ', '&#8857;');
LatexCmds.bigcirc = bind(VanillaSymbol, '\\\\bigcirc ', '&#9711;');
LatexCmds.dagger = bind(VanillaSymbol, '\\\\dagger ', '&#0134;');
LatexCmds.ddagger = bind(VanillaSymbol, '\\\\ddagger ', '&#135;');
LatexCmds.wr = bind(VanillaSymbol, '\\\\wr ', '&#8768;');
LatexCmds.amalg = bind(VanillaSymbol, '\\\\amalg ', '&#8720;');

//relationship symbols
LatexCmds.models = bind(VanillaSymbol, '\\\\models ', '&#8872;');
LatexCmds.prec = bind(VanillaSymbol, '\\\\prec ', '&#8826;');
LatexCmds.succ = bind(VanillaSymbol, '\\\\succ ', '&#8827;');
LatexCmds.preceq = bind(VanillaSymbol, '\\\\preceq ', '&#8828;');
LatexCmds.succeq = bind(VanillaSymbol, '\\\\succeq ', '&#8829;');
LatexCmds.simeq = bind(VanillaSymbol, '\\\\simeq ', '&#8771;');
LatexCmds.mid = bind(VanillaSymbol, '\\\\mid ', '&#8739;');
LatexCmds.ll = bind(VanillaSymbol, '\\\\ll ', '&#8810;');
LatexCmds.gg = bind(VanillaSymbol, '\\\\gg ', '&#8811;');
LatexCmds.parallel = bind(VanillaSymbol, '\\\\parallel ', '&#8741;');
LatexCmds.nparallel = bind(VanillaSymbol, '\\\\nparallel ', '&#8742;');
LatexCmds.bowtie = bind(VanillaSymbol, '\\\\bowtie ', '&#8904;');
LatexCmds.sqsubset = bind(VanillaSymbol, '\\\\sqsubset ', '&#8847;');
LatexCmds.sqsupset = bind(VanillaSymbol, '\\\\sqsupset ', '&#8848;');
LatexCmds.smile = bind(VanillaSymbol, '\\\\smile ', '&#8995;');
LatexCmds.sqsubseteq = bind(VanillaSymbol, '\\\\sqsubseteq ', '&#8849;');
LatexCmds.sqsupseteq = bind(VanillaSymbol, '\\\\sqsupseteq ', '&#8850;');
LatexCmds.doteq = bind(VanillaSymbol, '\\\\doteq ', '&#8784;');
LatexCmds.frown = bind(VanillaSymbol, '\\\\frown ', '&#8994;');
LatexCmds.vdash = bind(VanillaSymbol, '\\\\vdash ', '&#8870;');
LatexCmds.dashv = bind(VanillaSymbol, '\\\\dashv ', '&#8867;');
LatexCmds.nless = bind(VanillaSymbol, '\\\\nless ', '&#8814;');
LatexCmds.ngtr = bind(VanillaSymbol, '\\\\ngtr ', '&#8815;');

//arrows
LatexCmds.longleftarrow = bind(VanillaSymbol, '\\\\longleftarrow ', '&#8592;');
LatexCmds.longrightarrow = bind(VanillaSymbol, '\\\\longrightarrow ', '&#8594;');
LatexCmds.Longleftarrow = bind(VanillaSymbol, '\\\\Longleftarrow ', '&#8656;');
LatexCmds.Longrightarrow = bind(VanillaSymbol, '\\\\Longrightarrow ', '&#8658;');
LatexCmds.longleftrightarrow = bind(VanillaSymbol, '\\\\longleftrightarrow ', '&#8596;');
LatexCmds.updownarrow = bind(VanillaSymbol, '\\\\updownarrow ', '&#8597;');
LatexCmds.Longleftrightarrow = bind(VanillaSymbol, '\\\\Longleftrightarrow ', '&#8660;');
LatexCmds.Updownarrow = bind(VanillaSymbol, '\\\\Updownarrow ', '&#8661;');
LatexCmds.mapsto = bind(VanillaSymbol, '\\\\mapsto ', '&#8614;');
LatexCmds.nearrow = bind(VanillaSymbol, '\\\\nearrow ', '&#8599;');
LatexCmds.hookleftarrow = bind(VanillaSymbol, '\\\\hookleftarrow ', '&#8617;');
LatexCmds.hookrightarrow = bind(VanillaSymbol, '\\\\hookrightarrow ', '&#8618;');
LatexCmds.searrow = bind(VanillaSymbol, '\\\\searrow ', '&#8600;');
LatexCmds.leftharpoonup = bind(VanillaSymbol, '\\\\leftharpoonup ', '&#8636;');
LatexCmds.rightharpoonup = bind(VanillaSymbol, '\\\\rightharpoonup ', '&#8640;');
LatexCmds.swarrow = bind(VanillaSymbol, '\\\\swarrow ', '&#8601;');
LatexCmds.leftharpoondown = bind(VanillaSymbol, '\\\\leftharpoondown ', '&#8637;');
LatexCmds.rightharpoondown = bind(VanillaSymbol, '\\\\rightharpoondown ', '&#8641;');
LatexCmds.nwarrow = bind(VanillaSymbol, '\\\\nwarrow ', '&#8598;');

//Misc
LatexCmds.ldots = bind(VanillaSymbol, '\\\\ldots ', '&#8230;');
LatexCmds.cdots = bind(VanillaSymbol, '\\\\cdots ', '&#8943;');
LatexCmds.vdots = bind(VanillaSymbol, '\\\\vdots ', '&#8942;');
LatexCmds.ddots = bind(VanillaSymbol, '\\\\ddots ', '&#8945;');
LatexCmds.surd = bind(VanillaSymbol, '\\\\surd ', '&#8730;');
LatexCmds.triangle = bind(VanillaSymbol, '\\\\triangle ', '&#9651;');
LatexCmds.ell = bind(VanillaSymbol, '\\\\ell ', '&#8467;');
LatexCmds.top = bind(VanillaSymbol, '\\\\top ', '&#8868;');
LatexCmds.flat = bind(VanillaSymbol, '\\\\flat ', '&#9837;');
LatexCmds.natural = bind(VanillaSymbol, '\\\\natural ', '&#9838;');
LatexCmds.sharp = bind(VanillaSymbol, '\\\\sharp ', '&#9839;');
LatexCmds.wp = bind(VanillaSymbol, '\\\\wp ', '&#8472;');
LatexCmds.bot = bind(VanillaSymbol, '\\\\bot ', '&#8869;');
LatexCmds.clubsuit = bind(VanillaSymbol, '\\\\clubsuit ', '&#9827;');
LatexCmds.diamondsuit = bind(VanillaSymbol, '\\\\diamondsuit ', '&#9826;');
LatexCmds.heartsuit = bind(VanillaSymbol, '\\\\heartsuit ', '&#9825;');
LatexCmds.spadesuit = bind(VanillaSymbol, '\\\\spadesuit ', '&#9824;');
//not real LaTex command see https://github.com/mathquill/mathquill/pull/552 for more details
LatexCmds.parallelogram = bind(VanillaSymbol, '\\\\parallelogram ', '&#9649;');
LatexCmds.square = bind(VanillaSymbol, '\\\\square ', '&#11036;');

//variable-sized
LatexCmds.oint = bind(VanillaSymbol, '\\\\oint ', '&#8750;');
LatexCmds.bigcap = bind(VanillaSymbol, '\\\\bigcap ', '&#8745;');
LatexCmds.bigcup = bind(VanillaSymbol, '\\\\bigcup ', '&#8746;');
LatexCmds.bigsqcup = bind(VanillaSymbol, '\\\\bigsqcup ', '&#8852;');
LatexCmds.bigvee = bind(VanillaSymbol, '\\\\bigvee ', '&#8744;');
LatexCmds.bigwedge = bind(VanillaSymbol, '\\\\bigwedge ', '&#8743;');
LatexCmds.bigodot = bind(VanillaSymbol, '\\\\bigodot ', '&#8857;');
LatexCmds.bigotimes = bind(VanillaSymbol, '\\\\bigotimes ', '&#8855;');
LatexCmds.bigoplus = bind(VanillaSymbol, '\\\\bigoplus ', '&#8853;');
LatexCmds.biguplus = bind(VanillaSymbol, '\\\\biguplus ', '&#8846;');

//delimiters
LatexCmds.lfloor = bind(VanillaSymbol, '\\\\lfloor ', '&#8970;');
LatexCmds.rfloor = bind(VanillaSymbol, '\\\\rfloor ', '&#8971;');
LatexCmds.lceil = bind(VanillaSymbol, '\\\\lceil ', '&#8968;');
LatexCmds.rceil = bind(VanillaSymbol, '\\\\rceil ', '&#8969;');
LatexCmds.opencurlybrace = LatexCmds.lbrace = bind(VanillaSymbol, '\\\\lbrace ', '{');
LatexCmds.closecurlybrace = LatexCmds.rbrace = bind(VanillaSymbol, '\\\\rbrace ', '}');
LatexCmds.lbrack = bind(VanillaSymbol, '[');
LatexCmds.rbrack = bind(VanillaSymbol, ']');

//various symbols
LatexCmds.slash = bind(VanillaSymbol, '/');
LatexCmds.vert = bind(VanillaSymbol,'|');
LatexCmds.perp = LatexCmds.perpendicular = bind(VanillaSymbol,'\\\\perp ','&perp;');
LatexCmds.nabla = LatexCmds.del = bind(VanillaSymbol,'\\\\nabla ','&nabla;');
LatexCmds.hbar = bind(VanillaSymbol,'\\\\hbar ','&#8463;');

LatexCmds.AA = LatexCmds.Angstrom = LatexCmds.angstrom =
  bind(VanillaSymbol,'\\\\text\\\\AA ','&#8491;');

LatexCmds.ring = LatexCmds.circ = LatexCmds.circle =
  bind(VanillaSymbol,'\\\\circ ','&#8728;');

LatexCmds.bull = LatexCmds.bullet = bind(VanillaSymbol,'\\\\bullet ','&bull;');

LatexCmds.setminus = LatexCmds.smallsetminus =
  bind(VanillaSymbol,'\\\\setminus ','&#8726;');

LatexCmds.not = //bind(Symbol,'\\\\not ','<span class="not">/</span>');
LatexCmds['\\u00ac'] = LatexCmds.neg = bind(VanillaSymbol,'\\\\neg ','&not;');

LatexCmds['\\u2026'] = LatexCmds.dots = LatexCmds.ellip = LatexCmds.hellip =
LatexCmds.ellipsis = LatexCmds.hellipsis =
  bind(VanillaSymbol,'\\\\dots ','&hellip;');

LatexCmds.converges =
LatexCmds.darr = LatexCmds.dnarr = LatexCmds.dnarrow = LatexCmds.downarrow =
  bind(VanillaSymbol,'\\\\downarrow ','&darr;');

LatexCmds.dArr = LatexCmds.dnArr = LatexCmds.dnArrow = LatexCmds.Downarrow =
  bind(VanillaSymbol,'\\\\Downarrow ','&dArr;');

LatexCmds.diverges = LatexCmds.uarr = LatexCmds.uparrow =
  bind(VanillaSymbol,'\\\\uparrow ','&uarr;');

LatexCmds.uArr = LatexCmds.Uparrow = bind(VanillaSymbol,'\\\\Uparrow ','&uArr;');

LatexCmds.to = bind(BinaryOperator,'\\\\to ','&rarr;');

LatexCmds.rarr = LatexCmds.rightarrow = bind(VanillaSymbol,'\\\\rightarrow ','&rarr;');

LatexCmds.implies = bind(BinaryOperator,'\\\\Rightarrow ','&rArr;');

LatexCmds.rArr = LatexCmds.Rightarrow = bind(VanillaSymbol,'\\\\Rightarrow ','&rArr;');

LatexCmds.gets = bind(BinaryOperator,'\\\\gets ','&larr;');

LatexCmds.larr = LatexCmds.leftarrow = bind(VanillaSymbol,'\\\\leftarrow ','&larr;');

LatexCmds.impliedby = bind(BinaryOperator,'\\\\Leftarrow ','&lArr;');

LatexCmds.lArr = LatexCmds.Leftarrow = bind(VanillaSymbol,'\\\\Leftarrow ','&lArr;');

LatexCmds.harr = LatexCmds.lrarr = LatexCmds.leftrightarrow =
  bind(VanillaSymbol,'\\\\leftrightarrow ','&harr;');

LatexCmds.iff = bind(BinaryOperator,'\\\\Leftrightarrow ','&hArr;');

LatexCmds.hArr = LatexCmds.lrArr = LatexCmds.Leftrightarrow =
  bind(VanillaSymbol,'\\\\Leftrightarrow ','&hArr;');

LatexCmds.Re = LatexCmds.Real = LatexCmds.real = bind(VanillaSymbol,'\\\\Re ','&real;');

LatexCmds.Im = LatexCmds.imag =
LatexCmds.image = LatexCmds.imagin = LatexCmds.imaginary = LatexCmds.Imaginary =
  bind(VanillaSymbol,'\\\\Im ','&image;');

LatexCmds.part = LatexCmds.partial = bind(VanillaSymbol,'\\\\partial ','&part;');

LatexCmds.infty = LatexCmds.infin = LatexCmds.infinity =
  bind(VanillaSymbol,'\\\\infty ','&infin;');

LatexCmds.pounds = bind(VanillaSymbol,'\\\\pounds ','&pound;');

LatexCmds.alef = LatexCmds.alefsym = LatexCmds.aleph = LatexCmds.alephsym =
  bind(VanillaSymbol,'\\\\aleph ','&alefsym;');

LatexCmds.xist = //LOL
LatexCmds.xists = LatexCmds.exist = LatexCmds.exists =
  bind(VanillaSymbol,'\\\\exists ','&exist;');

LatexCmds.nexists = LatexCmds.nexist =
      bind(VanillaSymbol, '\\\\nexists ', '&#8708;');

LatexCmds.and = LatexCmds.land = LatexCmds.wedge =
  bind(BinaryOperator,'\\\\wedge ','&and;');

LatexCmds.or = LatexCmds.lor = LatexCmds.vee = bind(BinaryOperator,'\\\\vee ','&or;');

LatexCmds.o = LatexCmds.O =
LatexCmds.empty = LatexCmds.emptyset =
LatexCmds.oslash = LatexCmds.Oslash =
LatexCmds.nothing = LatexCmds.varnothing =
  bind(BinaryOperator,'\\\\varnothing ','&empty;');

LatexCmds.cup = LatexCmds.union = bind(BinaryOperator,'\\\\cup ','&cup;');

LatexCmds.cap = LatexCmds.intersect = LatexCmds.intersection =
  bind(BinaryOperator,'\\\\cap ','&cap;');

// FIXME: the correct LaTeX would be ^\\circ but we can't parse that
LatexCmds.deg = LatexCmds.degree = bind(VanillaSymbol,'\\\\degree ','&deg;');

LatexCmds.ang = LatexCmds.angle = bind(VanillaSymbol,'\\\\angle ','&ang;');
LatexCmds.measuredangle = bind(VanillaSymbol,'\\\\measuredangle ','&#8737;');
/*********************************
 * Symbols for Basic Mathematics
 ********************************/

var Digit = P(VanillaSymbol, function(_, super_) {
  _.createLeftOf = function(cursor) {
    if (cursor.options.autoSubscriptNumerals
        && cursor.parent !== cursor.parent.parent.sub
        && ((cursor[L] instanceof Variable && cursor[L].isItalic !== false)
            || (cursor[L] instanceof SupSub
                && cursor[L][L] instanceof Variable
                && cursor[L][L].isItalic !== false))) {
      LatexCmds._().createLeftOf(cursor);
      super_.createLeftOf.call(this, cursor);
      cursor.insRightOf(cursor.parent.parent);
    }
    else super_.createLeftOf.call(this, cursor);
  };
});

var Variable = P(Symbol, function(_, super_) {
  _.init = function(ch, html) {
    super_.init.call(this, ch, '<var>'+(html || ch)+'</var>');
  };
  _.text = function() {
    var text = this.ctrlSeq;
    if (this.isPartOfOperator) {
      if (text[0] == '\\\\') {
        text = text.slice(1, text.length);
      }
      else if (text[text.length-1] == ' ') {
        text = text.slice (0, -1);
      }
    } else {
      if (this[L] && !(this[L] instanceof Variable)
          && !(this[L] instanceof BinaryOperator)
          && this[L].ctrlSeq !== '\\\\ ')
        text = '*' + text;
      if (this[R] && !(this[R] instanceof BinaryOperator)
          && !(this[R] instanceof SupSub))
        text += '*';
    }
    return text;
  };
});

Options.p.autoCommands = { _maxLength: 0 };
optionProcessors.autoCommands = function(cmds) {
  if (!/^[a-z]+(?: [a-z]+)*$/i.test(cmds)) {
    throw '"'+cmds+'" not a space-delimited list of only letters';
  }
  var list = cmds.split(' '), dict = {}, maxLength = 0;
  for (var i = 0; i < list.length; i += 1) {
    var cmd = list[i];
    if (cmd.length < 2) {
      throw 'autocommand "'+cmd+'" not minimum length of 2';
    }
    if (LatexCmds[cmd] === OperatorName) {
      throw '"' + cmd + '" is a built-in operator name';
    }
    dict[cmd] = 1;
    maxLength = max(maxLength, cmd.length);
  }
  dict._maxLength = maxLength;
  return dict;
};

var Letter = P(Variable, function(_, super_) {
  _.init = function(ch) { return super_.init.call(this, this.letter = ch); };
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.apply(this, arguments);
    var autoCmds = cursor.options.autoCommands, maxLength = autoCmds._maxLength;
    if (maxLength > 0) {
      // want longest possible autocommand, so join together longest
      // sequence of letters
      var str = '', l = this, i = 0;
      // FIXME: l.ctrlSeq === l.letter checks if first or last in an operator name
      while (l instanceof Letter && l.ctrlSeq === l.letter && i < maxLength) {
        str = l.letter + str, l = l[L], i += 1;
      }
      // check for an autocommand, going thru substrings longest to shortest
      while (str.length) {
        if (autoCmds.hasOwnProperty(str)) {
          for (var i = 1, l = this; i < str.length; i += 1, l = l[L]);
          Fragment(l, this).remove();
          cursor[L] = l[L];
          return LatexCmds[str](str).createLeftOf(cursor);
        }
        str = str.slice(1);
      }
    }
  };
  _.italicize = function(bool) {
    this.isItalic = bool;
    this.isPartOfOperator = !bool;
    this.jQ.toggleClass('mq-operator-name', !bool);
    return this;
  };
  _.finalizeTree = _.siblingDeleted = _.siblingCreated = function(opts, dir) {
    // don't auto-un-italicize if the sibling to my right changed (dir === R or
    // undefined) and it's now a Letter, it will un-italicize everyone
    if (dir !== L && this[R] instanceof Letter) return;
    this.autoUnItalicize(opts);
  };
  _.autoUnItalicize = function(opts) {
    var autoOps = opts.autoOperatorNames;
    if (autoOps._maxLength === 0) return;
    // want longest possible operator names, so join together entire contiguous
    // sequence of letters
    var str = this.letter;
    for (var l = this[L]; l instanceof Letter; l = l[L]) str = l.letter + str;
    for (var r = this[R]; r instanceof Letter; r = r[R]) str += r.letter;

    // removeClass and delete flags from all letters before figuring out
    // which, if any, are part of an operator name
    Fragment(l[R] || this.parent.ends[L], r[L] || this.parent.ends[R]).each(function(el) {
      el.italicize(true).jQ.removeClass('mq-first mq-last mq-followed-by-supsub');
      el.ctrlSeq = el.letter;
    });

    // check for operator names: at each position from left to right, check
    // substrings from longest to shortest
    outer: for (var i = 0, first = l[R] || this.parent.ends[L]; i < str.length; i += 1, first = first[R]) {
      for (var len = min(autoOps._maxLength, str.length - i); len > 0; len -= 1) {
        var word = str.slice(i, i + len);
        if (autoOps.hasOwnProperty(word)) {
          for (var j = 0, letter = first; j < len; j += 1, letter = letter[R]) {
            letter.italicize(false);
            var last = letter;
          }

          var isBuiltIn = BuiltInOpNames.hasOwnProperty(word);
          first.ctrlSeq = (isBuiltIn ? '\\\\' : '\\\\operatorname{') + first.ctrlSeq;
          last.ctrlSeq += (isBuiltIn ? ' ' : '}');
          if (TwoWordOpNames.hasOwnProperty(word)) last[L][L][L].jQ.addClass('mq-last');
          if (!shouldOmitPadding(first[L])) first.jQ.addClass('mq-first');
          if (!shouldOmitPadding(last[R])) {
            if (last[R] instanceof SupSub) {
              var supsub = last[R]; // XXX monkey-patching, but what's the right thing here?
              // Have operatorname-specific code in SupSub? A CSS-like language to style the
              // math tree, but which ignores cursor and selection (which CSS can't)?
              var respace = supsub.siblingCreated = supsub.siblingDeleted = function() {
                supsub.jQ.toggleClass('mq-after-operator-name', !(supsub[R] instanceof Bracket));
              };
              respace();
            }
            else {
              last.jQ.toggleClass('mq-last', !(last[R] instanceof Bracket));
            }
          }

          i += len - 1;
          first = last;
          continue outer;
        }
      }
    }
  };
  function shouldOmitPadding(node) {
    // omit padding if no node, or if node already has padding (to avoid double-padding)
    return !node || (node instanceof BinaryOperator) || (node instanceof SummationNotation);
  }
});
var BuiltInOpNames = {}; // the set of operator names like \\sin, \\cos, etc that
  // are built-into LaTeX, see Section 3.17 of the Short Math Guide: http://tinyurl.com/jm9okjc
  // MathQuill auto-unitalicizes some operator names not in that set, like 'hcf'
  // and 'arsinh', which must be exported as \\operatorname{hcf} and
  // \\operatorname{arsinh}. Note: over/under line/arrow \\lim variants like
  // \\varlimsup are not supported
var AutoOpNames = Options.p.autoOperatorNames = { _maxLength: 9 }; // the set
  // of operator names that MathQuill auto-unitalicizes by default; overridable
var TwoWordOpNames = { limsup: 1, liminf: 1, projlim: 1, injlim: 1 };
(function() {
  var mostOps = ('arg deg det dim exp gcd hom inf ker lg lim ln log max min sup'
                 + ' limsup liminf injlim projlim Pr').split(' ');
  for (var i = 0; i < mostOps.length; i += 1) {
    BuiltInOpNames[mostOps[i]] = AutoOpNames[mostOps[i]] = 1;
  }

  var builtInTrigs = // why coth but not sech and csch, LaTeX?
    'sin cos tan arcsin arccos arctan sinh cosh tanh sec csc cot coth'.split(' ');
  for (var i = 0; i < builtInTrigs.length; i += 1) {
    BuiltInOpNames[builtInTrigs[i]] = 1;
  }

  var autoTrigs = 'sin cos tan sec cosec csc cotan cot ctg'.split(' ');
  for (var i = 0; i < autoTrigs.length; i += 1) {
    AutoOpNames[autoTrigs[i]] =
    AutoOpNames['arc'+autoTrigs[i]] =
    AutoOpNames[autoTrigs[i]+'h'] =
    AutoOpNames['ar'+autoTrigs[i]+'h'] =
    AutoOpNames['arc'+autoTrigs[i]+'h'] = 1;
  }

  // compat with some of the nonstandard LaTeX exported by MathQuill
  // before #247. None of these are real LaTeX commands so, seems safe
  var moreNonstandardOps = 'gcf hcf lcm proj span'.split(' ');
  for (var i = 0; i < moreNonstandardOps.length; i += 1) {
    AutoOpNames[moreNonstandardOps[i]] = 1;
  }
}());
optionProcessors.autoOperatorNames = function(cmds) {
  if (!/^[a-z]+(?: [a-z]+)*$/i.test(cmds)) {
    throw '"'+cmds+'" not a space-delimited list of only letters';
  }
  var list = cmds.split(' '), dict = {}, maxLength = 0;
  for (var i = 0; i < list.length; i += 1) {
    var cmd = list[i];
    if (cmd.length < 2) {
      throw '"'+cmd+'" not minimum length of 2';
    }
    dict[cmd] = 1;
    maxLength = max(maxLength, cmd.length);
  }
  dict._maxLength = maxLength;
  return dict;
};
var OperatorName = P(Symbol, function(_, super_) {
  _.init = function(fn) { this.ctrlSeq = fn; };
  _.createLeftOf = function(cursor) {
    var fn = this.ctrlSeq;
    for (var i = 0; i < fn.length; i += 1) {
      Letter(fn.charAt(i)).createLeftOf(cursor);
    }
  };
  _.parser = function() {
    var fn = this.ctrlSeq;
    var block = MathBlock();
    for (var i = 0; i < fn.length; i += 1) {
      Letter(fn.charAt(i)).adopt(block, block.ends[R], 0);
    }
    return Parser.succeed(block.children());
  };
});
for (var fn in AutoOpNames) if (AutoOpNames.hasOwnProperty(fn)) {
  LatexCmds[fn] = OperatorName;
}
LatexCmds.operatorname = P(MathCommand, function(_) {
  _.createLeftOf = noop;
  _.numBlocks = function() { return 1; };
  _.parser = function() {
    return latexMathParser.block.map(function(b) { return b.children(); });
  };
});

LatexCmds.f = P(Letter, function(_, super_) {
  _.init = function() {
    Symbol.p.init.call(this, this.letter = 'f', '<var class="mq-f">f</var>');
  };
  _.italicize = function(bool) {
    this.jQ.html('f').toggleClass('mq-f', bool);
    return super_.italicize.apply(this, arguments);
  };
});

// VanillaSymbol's
LatexCmds[' '] = LatexCmds.space = bind(VanillaSymbol, '\\\\ ', '&nbsp;');

LatexCmds["'"] = LatexCmds.prime = bind(VanillaSymbol, "'", '&prime;');
LatexCmds['\\u2033'] = LatexCmds.dprime = bind(VanillaSymbol, '\\u2033', '&Prime;');

LatexCmds.backslash = bind(VanillaSymbol,'\\\\backslash ','\\\\');
if (!CharCmds['\\\\']) CharCmds['\\\\'] = LatexCmds.backslash;

LatexCmds.$ = bind(VanillaSymbol, '\\\\$', '$');

// does not use Symbola font
var NonSymbolaSymbol = P(Symbol, function(_, super_) {
  _.init = function(ch, html) {
    super_.init.call(this, ch, '<span class="mq-nonSymbola">'+(html || ch)+'</span>');
  };
});

LatexCmds['@'] = NonSymbolaSymbol;
LatexCmds['&'] = bind(NonSymbolaSymbol, '\\\\&', '&amp;');
LatexCmds['%'] = bind(NonSymbolaSymbol, '\\\\%', '%');

//the following are all Greek to me, but this helped a lot: http://www.ams.org/STIX/ion/stixsig03.html

//lowercase Greek letter variables
LatexCmds.alpha =
LatexCmds.beta =
LatexCmds.gamma =
LatexCmds.delta =
LatexCmds.zeta =
LatexCmds.eta =
LatexCmds.theta =
LatexCmds.iota =
LatexCmds.kappa =
LatexCmds.mu =
LatexCmds.nu =
LatexCmds.xi =
LatexCmds.rho =
LatexCmds.sigma =
LatexCmds.tau =
LatexCmds.chi =
LatexCmds.psi =
LatexCmds.omega = P(Variable, function(_, super_) {
  _.init = function(latex) {
    super_.init.call(this,'\\\\'+latex+' ','&'+latex+';');
  };
});

//why can't anybody FUCKING agree on these
LatexCmds.phi = //W3C or Unicode?
  bind(Variable,'\\\\phi ','&#981;');

LatexCmds.phiv = //Elsevier and 9573-13
LatexCmds.varphi = //AMS and LaTeX
  bind(Variable,'\\\\varphi ','&phi;');

LatexCmds.epsilon = //W3C or Unicode?
  bind(Variable,'\\\\epsilon ','&#1013;');

LatexCmds.epsiv = //Elsevier and 9573-13
LatexCmds.varepsilon = //AMS and LaTeX
  bind(Variable,'\\\\varepsilon ','&epsilon;');

LatexCmds.piv = //W3C/Unicode and Elsevier and 9573-13
LatexCmds.varpi = //AMS and LaTeX
  bind(Variable,'\\\\varpi ','&piv;');

LatexCmds.sigmaf = //W3C/Unicode
LatexCmds.sigmav = //Elsevier
LatexCmds.varsigma = //LaTeX
  bind(Variable,'\\\\varsigma ','&sigmaf;');

LatexCmds.thetav = //Elsevier and 9573-13
LatexCmds.vartheta = //AMS and LaTeX
LatexCmds.thetasym = //W3C/Unicode
  bind(Variable,'\\\\vartheta ','&thetasym;');

LatexCmds.upsilon = //AMS and LaTeX and W3C/Unicode
LatexCmds.upsi = //Elsevier and 9573-13
  bind(Variable,'\\\\upsilon ','&upsilon;');

//these aren't even mentioned in the HTML character entity references
LatexCmds.gammad = //Elsevier
LatexCmds.Gammad = //9573-13 -- WTF, right? I dunno if this was a typo in the reference (see above)
LatexCmds.digamma = //LaTeX
  bind(Variable,'\\\\digamma ','&#989;');

LatexCmds.kappav = //Elsevier
LatexCmds.varkappa = //AMS and LaTeX
  bind(Variable,'\\\\varkappa ','&#1008;');

LatexCmds.rhov = //Elsevier and 9573-13
LatexCmds.varrho = //AMS and LaTeX
  bind(Variable,'\\\\varrho ','&#1009;');

//Greek constants, look best in non-italicized Times New Roman
LatexCmds.pi = LatexCmds['\\u03c0'] = bind(NonSymbolaSymbol,'\\\\pi ','&pi;');
LatexCmds.lambda = bind(NonSymbolaSymbol,'\\\\lambda ','&lambda;');

//uppercase greek letters

LatexCmds.Upsilon = //LaTeX
LatexCmds.Upsi = //Elsevier and 9573-13
LatexCmds.upsih = //W3C/Unicode "upsilon with hook"
LatexCmds.Upsih = //'cos it makes sense to me
  bind(Symbol,'\\\\Upsilon ','<var style="font-family: serif">&upsih;</var>'); //Symbola's 'upsilon with a hook' is a capital Y without hooks :(

//other symbols with the same LaTeX command and HTML character entity reference
LatexCmds.Gamma =
LatexCmds.Delta =
LatexCmds.Theta =
LatexCmds.Lambda =
LatexCmds.Xi =
LatexCmds.Pi =
LatexCmds.Sigma =
LatexCmds.Phi =
LatexCmds.Psi =
LatexCmds.Omega =
LatexCmds.forall = P(VanillaSymbol, function(_, super_) {
  _.init = function(latex) {
    super_.init.call(this,'\\\\'+latex+' ','&'+latex+';');
  };
});

// symbols that aren't a single MathCommand, but are instead a whole
// Fragment. Creates the Fragment from a LaTeX string
var LatexFragment = P(MathCommand, function(_) {
  _.init = function(latex) { this.latex = latex; };
  _.createLeftOf = function(cursor) {
    var block = latexMathParser.parse(this.latex);
    block.children().adopt(cursor.parent, cursor[L], cursor[R]);
    cursor[L] = block.ends[R];
    block.jQize().insertBefore(cursor.jQ);
    block.finalizeInsert(cursor.options, cursor);
    if (block.ends[R][R].siblingCreated) block.ends[R][R].siblingCreated(cursor.options, L);
    if (block.ends[L][L].siblingCreated) block.ends[L][L].siblingCreated(cursor.options, R);
    cursor.parent.bubble('reflow');
  };
  _.parser = function() {
    var frag = latexMathParser.parse(this.latex).children();
    return Parser.succeed(frag);
  };
});

// for what seems to me like [stupid reasons][1], Unicode provides
// subscripted and superscripted versions of all ten Arabic numerals,
// as well as [so-called "vulgar fractions"][2].
// Nobody really cares about most of them, but some of them actually
// predate Unicode, dating back to [ISO-8859-1][3], apparently also
// known as "Latin-1", which among other things [Windows-1252][4]
// largely coincides with, so Microsoft Word sometimes inserts them
// and they get copy-pasted into MathQuill.
//
// (Irrelevant but funny story: though not a superset of Latin-1 aka
// ISO-8859-1, Windows-1252 **is** a strict superset of the "closely
// related but distinct"[3] "ISO 8859-1" -- see the lack of a dash
// after "ISO"? Completely different character set, like elephants vs
// elephant seals, or "Zombies" vs "Zombie Redneck Torture Family".
// What kind of idiot would get them confused.
// People in fact got them confused so much, it was so common to
// mislabel Windows-1252 text as ISO-8859-1, that most modern web
// browsers and email clients treat the MIME charset of ISO-8859-1
// as actually Windows-1252, behavior now standard in the HTML5 spec.)
//
// [1]: http://en.wikipedia.org/wiki/Unicode_subscripts_andsuper_scripts
// [2]: http://en.wikipedia.org/wiki/Number_Forms
// [3]: http://en.wikipedia.org/wiki/ISO/IEC_8859-1
// [4]: http://en.wikipedia.org/wiki/Windows-1252
LatexCmds['\\u00b9'] = bind(LatexFragment, '^1');
LatexCmds['\\u00b2'] = bind(LatexFragment, '^2');
LatexCmds['\\u00b3'] = bind(LatexFragment, '^3');
LatexCmds['\\u00bc'] = bind(LatexFragment, '\\\\frac14');
LatexCmds['\\u00bd'] = bind(LatexFragment, '\\\\frac12');
LatexCmds['\\u00be'] = bind(LatexFragment, '\\\\frac34');

var PlusMinus = P(BinaryOperator, function(_) {
  _.init = VanillaSymbol.prototype.init;

  _.contactWeld = _.siblingCreated = _.siblingDeleted = function(opts, dir) {
    function determineOpClassType(node) {
      if (node[L]) {
        // If the left sibling is a binary operator or a separator (comma, semicolon, colon)
        // or an open bracket (open parenthesis, open square bracket)
        // consider the operator to be unary
        if (node[L] instanceof BinaryOperator || /^[,;:\\(\\[]$/.test(node[L].ctrlSeq)) {
          return '';
        }
      } else if (node.parent && node.parent.parent && node.parent.parent.isStyleBlock()) {
        //if we are in a style block at the leftmost edge, determine unary/binary based on
        //the style block
        //this allows style blocks to be transparent for unary/binary purposes
        return determineOpClassType(node.parent.parent);
      } else {
        return '';
      }

      return 'mq-binary-operator';
    };
    
    if (dir === R) return; // ignore if sibling only changed on the right
    this.jQ[0].className = determineOpClassType(this);
    return this;
  };
});

LatexCmds['+'] = bind(PlusMinus, '+', '+');
//yes, these are different dashes, I think one is an en dash and the other is a hyphen
LatexCmds['\\u2013'] = LatexCmds['-'] = bind(PlusMinus, '-', '&minus;');
LatexCmds['\\u00b1'] = LatexCmds.pm = LatexCmds.plusmn = LatexCmds.plusminus =
  bind(PlusMinus,'\\\\pm ','&plusmn;');
LatexCmds.mp = LatexCmds.mnplus = LatexCmds.minusplus =
  bind(PlusMinus,'\\\\mp ','&#8723;');

CharCmds['*'] = LatexCmds.sdot = LatexCmds.cdot =
  bind(BinaryOperator, '\\\\cdot ', '&middot;', '*');
//semantically should be &sdot;, but &middot; looks better

var Inequality = P(BinaryOperator, function(_, super_) {
  _.init = function(data, strict) {
    this.data = data;
    this.strict = strict;
    var strictness = (strict ? 'Strict' : '');
    super_.init.call(this, data['ctrlSeq'+strictness], data['html'+strictness],
                     data['text'+strictness]);
  };
  _.swap = function(strict) {
    this.strict = strict;
    var strictness = (strict ? 'Strict' : '');
    this.ctrlSeq = this.data['ctrlSeq'+strictness];
    this.jQ.html(this.data['html'+strictness]);
    this.textTemplate = [ this.data['text'+strictness] ];
  };
  _.deleteTowards = function(dir, cursor) {
    if (dir === L && !this.strict) {
      this.swap(true);
      this.bubble('reflow');
      return;
    }
    super_.deleteTowards.apply(this, arguments);
  };
});

var less = { ctrlSeq: '\\\\le ', html: '&le;', text: '\\u2264',
             ctrlSeqStrict: '<', htmlStrict: '&lt;', textStrict: '<' };
var greater = { ctrlSeq: '\\\\ge ', html: '&ge;', text: '\\u2265',
                ctrlSeqStrict: '>', htmlStrict: '&gt;', textStrict: '>' };

LatexCmds['<'] = LatexCmds.lt = bind(Inequality, less, true);
LatexCmds['>'] = LatexCmds.gt = bind(Inequality, greater, true);
LatexCmds['\\u2264'] = LatexCmds.le = LatexCmds.leq = bind(Inequality, less, false);
LatexCmds['\\u2265'] = LatexCmds.ge = LatexCmds.geq = bind(Inequality, greater, false);

var Equality = P(BinaryOperator, function(_, super_) {
  _.init = function() {
    super_.init.call(this, '=', '=');
  };
  _.createLeftOf = function(cursor) {
    if (cursor[L] instanceof Inequality && cursor[L].strict) {
      cursor[L].swap(false);
      cursor[L].bubble('reflow');
      return;
    }
    super_.createLeftOf.apply(this, arguments);
  };
});
LatexCmds['='] = Equality;

LatexCmds['\\u00d7'] = LatexCmds.times = bind(BinaryOperator, '\\\\times ', '&times;', '[x]');

LatexCmds['\\u00f7'] = LatexCmds.div = LatexCmds.divide = LatexCmds.divides =
  bind(BinaryOperator,'\\\\div ','&divide;', '[/]');

CharCmds['~'] = LatexCmds.sim = bind(BinaryOperator, '\\\\sim ', '~', '~');
var MQ1 = getInterface(1);
for (var key in MQ1) (function(key, val) {
  if (typeof val === 'function') {
    MathQuill[key] = function() {
      insistOnInterVer();
      return val.apply(this, arguments);
    };
    MathQuill[key].prototype = val.prototype;
  }
  else MathQuill[key] = val;
}(key, MQ1[key]));

}());

/*** EXPORTS FROM exports-loader ***/
module.exports = window.MathQuill;


//# sourceURL=webpack://MathquillComponent/./node_modules/@edtr-io/mathquill/build/mathquill.js?`)},"./node_modules/jquery/dist/jquery.js":function(module,exports){eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper \`window\`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a \`window\` with a \`document\`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real \`window\`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., \`typeof document.createElement( "object" ) === "function"\`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., \`typeof document.getElementsByTagName("div") === "function"\`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using \`getAttribute\` is not enough as
				// the \`nonce\` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The \`node.getAttribute\` check was added for the sake of
				// \`jQuery.globalEval\` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., \`Object.create( null )\`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// \`in\` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\\\x20\\\\t\\\\r\\\\n\\\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\\\\\[\\\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\\\\\[^\\\\r\\\\n\\\\f]|[\\\\w-]|[^\\0-\\\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\"|(" + identifier + "))|)" +
		whitespace + "*\\\\]",

	pseudos = ":(" + identifier + ")(?:\\\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\\\\\.|[^\\\\\\\\'])*)'|\\"((?:\\\\\\\\.|[^\\\\\\\\\\"])*)\\")|" +

		// 2. simple (capture 6)
		"((?:\\\\\\\\.|[^\\\\\\\\()[\\\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\\\\\])(?:\\\\\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\\\d+)|))" + whitespace + "*\\\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in \`select\`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\\\(" + whitespace +
			"*((?:-\\\\d)?\\\\d*)" + whitespace + "*\\\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\\d$/i,

	rnative = /^[^{]+\\{\\s*\\[native \\w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\\w-]+)|(\\w+)|\\.([\\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\\\\\[\\\\da-fA-F]{1,6}" + whitespace + "?|\\\\\\\\([^\\\\r\\\\n\\\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\\0-\\x1f\\x7f]|^-?\\d)|^-$|[^\\0-\\x1f\\x7f-\\uFFFF\\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\\0" ) {
				return "\\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever \`document.activeElement\` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\\r\\\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\\"\\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a \`[name='']\` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\\"\\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page \`selector#id sibling-combinator selector\` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\\\\f" );
			rbuggyQSA.push( "[\\\\r\\\\n\\\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\\d*|\\d*n([+-]\\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on \`parent\`
						if ( forward && useCache ) {

							// Seek \`elem\` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking \`elem\` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on \`parent\` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek \`elem\` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by \`matcher\`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element \`*\`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// \`i\` is now the count of elements visited above, and adding it to \`matchedCount\`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., \`matchedCount\`
			// equals \`i\`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" \`i\` allows \`i\` to remain a string only in that
			// case, which will result in a "00" \`matchedCount\` that differs from \`i\` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide \`match\` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\\/\\0>:\\x20\\t\\r\\n\\f]*)[\\x20\\t\\r\\n\\f]*\\/?>(?:<\\/\\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\\s*(<[\\w\\W]+>)[^>]*|#([\\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no \`data\` attribute has an object
			// \`contentDocument\` with a \`null\` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\\x20\\t\\r\\n\\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control \`resolve\` arguments by letting Array#slice cast boolean \`noValue\` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve \`then\` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\\{[\\w\\W]*\\}|\\[[\\w\\W]*\\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// \`value\` parameter was not undefined. An empty jQuery object
			// will result in \`undefined\` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support \`attachShadow\` but not \`getRootNode\`,
	// leading to errors. We need to check for \`getRootNode\`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\\/\\0>\\x20\\t\\r\\n\\f]*)/i );

var rscriptType = ( /^$|^module$|\\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// \`name\` and \`type\` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\\\.)" + namespaces.join( "\\\\.(?:.*\\\\.|)" ) + "(\\\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have \`button\` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace \`this\` access with a local var.
				// \`|| data\` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace \`this\` access with a local var.
				// \`|| data\` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls \`.remove()\` on the element, the data is cleared,
						// leaving \`result\` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to \`.trigger()\` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\\s*(?:[^=]|=\\s*.checked.)/i,
	rcleanScript = /^\\s*<!(?:\\[CDATA\\[|--)|(?:\\]\\]|--)>\\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport \`getComputedStyle\` of table rows with width/height
		// set in CSS while \`offset*\` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport \`getComputedStyle\` of table rows with width/height
		// set in CSS while \`offset*\` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so \`.stop().toggle()\` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use \`1 - ( 0.5 || 0 )\` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed \`false\`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\\\.)" + namespaces.join( "\\\\.(?:.*\\\\.|)" ) + "(\\\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for \`focus(in | out)\` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via \`this.ownerDocument\`), window
				// (via \`this.document\`) & document (via \`this\`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\\[\\]$/,
	rCRLF = /\\r?\\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\\r\\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\\r\\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \\t]*([^\\r\\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\\/\\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\\bxml\\b/,
			html: /\\bhtml/,
			json: /\\bjson\\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\\b(?:java|ecma)script\\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\\?(?=&|$)|\\?\\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\\s\\uFEFF\\xA0]+|[\\s\\uFEFF\\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


//# sourceURL=webpack://MathquillComponent/./node_modules/jquery/dist/jquery.js?`)},"./node_modules/object-assign/index.js":module=>{eval(`/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


//# sourceURL=webpack://MathquillComponent/./node_modules/object-assign/index.js?`)},"./node_modules/prop-types/checkPropTypes.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type \`' + typeSpecName + '\` is invalid; ' +
              'it must be a function, usually from the \`prop-types\` package, but received \`' + typeof typeSpecs[typeSpecName] + '\`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' \`' + typeSpecName + '\` is invalid; the type checker ' +
            'function must return \`null\` or an \`Error\` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


//# sourceURL=webpack://MathquillComponent/./node_modules/prop-types/checkPropTypes.js?`)},"./node_modules/prop-types/factoryWithTypeCheckers.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in \`./factoryWithThrowingShims.js\`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make \`instanceof Error\` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of \`prop-types\` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the \`prop-types\` package. ' +
            'Use \`PropTypes.checkPropTypes()\` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the \`' + propFullName + '\` prop on \`' + componentName  + '\`. This is deprecated ' +
              'and will throw in the standalone \`prop-types\` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' \`' + propFullName + '\` is marked as required ' + ('in \`' + componentName + '\`, but its value is \`null\`.'));
          }
          return new PropTypeError('The ' + location + ' \`' + propFullName + '\` is marked as required in ' + ('\`' + componentName + '\`, but its value is \`undefined\`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // \`propValue\` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type \`object\`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type ' + ('\`' + preciseType + '\` supplied to \`' + componentName + '\`, expected ') + ('\`' + expectedType + '\`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property \`' + propFullName + '\` of component \`' + componentName + '\` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type ' + ('\`' + propType + '\` supplied to \`' + componentName + '\`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type ' + ('\`' + propType + '\` supplied to \`' + componentName + '\`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type ' + ('\`' + propType + '\` supplied to \`' + componentName + '\`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type ' + ('\`' + actualClassName + '\` supplied to \`' + componentName + '\`, expected ') + ('instance of \`' + expectedClassName + '\`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of value \`' + String(propValue) + '\` ' + ('supplied to \`' + componentName + '\`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property \`' + propFullName + '\` of component \`' + componentName + '\` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type ' + ('\`' + propType + '\` supplied to \`' + componentName + '\`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` supplied to ' + ('\`' + componentName + '\`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` supplied to ' + ('\`' + componentName + '\`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type \`' + propType + '\` ' + ('supplied to \`' + componentName + '\`, expected \`object\`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' \`' + propFullName + '\` of type \`' + propType + '\` ' + ('supplied to \`' + componentName + '\`, expected \`object\`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' \`' + propFullName + '\` key \`' + key + '\` supplied to \`' + componentName + '\`.' +
            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of \`typeof\` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than \`getPropType\`. Only used for error messages.
  // See \`createPrimitiveTypeChecker\`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


//# sourceURL=webpack://MathquillComponent/./node_modules/prop-types/factoryWithTypeCheckers.js?`)},"./node_modules/prop-types/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using \`prop-types\` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


//# sourceURL=webpack://MathquillComponent/./node_modules/prop-types/index.js?`)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":module=>{eval(`/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


//# sourceURL=webpack://MathquillComponent/./node_modules/prop-types/lib/ReactPropTypesSecret.js?`)},"./node_modules/react-is/cjs/react-is.development.js":(__unused_webpack_module,exports)=>{eval(`/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


//# sourceURL=webpack://MathquillComponent/./node_modules/react-is/cjs/react-is.development.js?`)},"./node_modules/react-is/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


//# sourceURL=webpack://MathquillComponent/./node_modules/react-is/index.js?`)},react:Ae=>{Ae.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(Ae){var at=__webpack_module_cache__[Ae];if(at!==void 0)return at.exports;var _t=__webpack_module_cache__[Ae]={id:Ae,exports:{}};return __webpack_modules__[Ae].call(_t.exports,_t,_t.exports,__webpack_require__),_t.exports}__webpack_require__.n=Ae=>{var at=Ae&&Ae.__esModule?()=>Ae.default:()=>Ae;return __webpack_require__.d(at,{a:at}),at},__webpack_require__.d=(Ae,at)=>{for(var _t in at)__webpack_require__.o(at,_t)&&!__webpack_require__.o(Ae,_t)&&Object.defineProperty(Ae,_t,{enumerable:!0,get:at[_t]})},__webpack_require__.o=(Ae,at)=>Object.prototype.hasOwnProperty.call(Ae,at),__webpack_require__.r=Ae=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(Ae,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(Ae,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js");return __webpack_exports__})()})}(reactMathquill)),reactMathquill.exports}browser$1$2.env.NODE_ENV==="production"?reactMathquill$1.exports=requireReactMathquill_min():reactMathquill$1.exports=requireReactMathquill();var reactMathquillExports=reactMathquill$1.exports;const mathquill=getDefaultExportFromCjs$1(reactMathquillExports);export{mathquill as m,reactMathquillExports as r};
