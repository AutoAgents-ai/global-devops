import{s as w}from"./comma-separated-tokens.495b557e.js";import{o as u}from"./devlop.d057c9d1.js";import{s as f,h as C,f as N,a as S}from"./property-information.208585ac.js";import{s as j}from"./space-separated-tokens.eedf1754.js";import{s as A}from"./style-to-object.579c2e7d.js";import{w as T}from"./hast-util-whitespace.675c549c.js";import{p as F}from"./unist-util-position.bb1bbaf7.js";import{V as x}from"./vfile-message.07c7e0ac.js";import{n as h}from"./estree-util-is-identifier-name.e0420bc7.js";const m={}.hasOwnProperty,P=new Map,J=/[A-Z]/g,I=/-([a-z])/g,L=new Set(["table","tbody","thead","tfoot","tr"]),M=new Set(["td","th"]),g="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ie(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const r=e.filePath||void 0;let n;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");n=R(r,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");n=B(r,e.jsx,e.jsxs)}const a={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:n,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:r,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?f:C,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},s=E(a,t,void 0);return s&&typeof s!="string"?s:a.create(t,a.Fragment,{children:s||void 0},void 0)}function E(t,e,r){if(e.type==="element")return V(t,e,r);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return D(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return K(t,e,r);if(e.type==="mdxjsEsm")return O(t,e);if(e.type==="root")return _(t,e,r);if(e.type==="text")return z(t,e)}function V(t,e,r){const n=t.schema;let a=n;e.tagName.toLowerCase()==="svg"&&n.space==="html"&&(a=f,t.schema=a),t.ancestors.push(e);const s=b(t,e.tagName,!1),i=k(t,e);let o=d(t,e);return L.has(e.tagName)&&(o=o.filter(function(l){return typeof l=="string"?!T(l):!0})),v(t,i,s,e),y(i,o),t.ancestors.pop(),t.schema=n,t.create(e,s,i,r)}function D(t,e){if(e.data&&e.data.estree&&t.evaluater){const n=e.data.estree.body[0];return u(n.type==="ExpressionStatement"),t.evaluater.evaluateExpression(n.expression)}p(t,e.position)}function O(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);p(t,e.position)}function K(t,e,r){const n=t.schema;let a=n;e.name==="svg"&&n.space==="html"&&(a=f,t.schema=a),t.ancestors.push(e);const s=e.name===null?t.Fragment:b(t,e.name,!0),i=U(t,e),o=d(t,e);return v(t,i,s,e),y(i,o),t.ancestors.pop(),t.schema=n,t.create(e,s,i,r)}function _(t,e,r){const n={};return y(n,d(t,e)),t.create(e,t.Fragment,n,r)}function z(t,e){return e.value}function v(t,e,r,n){typeof r!="string"&&r!==t.Fragment&&t.passNode&&(e.node=n)}function y(t,e){if(e.length>0){const r=e.length>1?e:e[0];r&&(t.children=r)}}function B(t,e,r){return n;function n(a,s,i,o){const c=Array.isArray(i.children)?r:e;return o?c(s,i,o):c(s,i)}}function R(t,e){return r;function r(n,a,s,i){const o=Array.isArray(s.children),l=F(n);return e(a,s,i,o,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function k(t,e){const r={};let n,a;for(a in e.properties)if(a!=="children"&&m.call(e.properties,a)){const s=X(t,a,e.properties[a]);if(s){const[i,o]=s;t.tableCellAlignToStyle&&i==="align"&&typeof o=="string"&&M.has(e.tagName)?n=o:r[i]=o}}if(n){const s=r.style||(r.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=n}return r}function U(t,e){const r={};for(const n of e.attributes)if(n.type==="mdxJsxExpressionAttribute")if(n.data&&n.data.estree&&t.evaluater){const s=n.data.estree.body[0];u(s.type==="ExpressionStatement");const i=s.expression;u(i.type==="ObjectExpression");const o=i.properties[0];u(o.type==="SpreadElement"),Object.assign(r,t.evaluater.evaluateExpression(o.argument))}else p(t,e.position);else{const a=n.name;let s;if(n.value&&typeof n.value=="object")if(n.value.data&&n.value.data.estree&&t.evaluater){const o=n.value.data.estree.body[0];u(o.type==="ExpressionStatement"),s=t.evaluater.evaluateExpression(o.expression)}else p(t,e.position);else s=n.value===null?!0:n.value;r[a]=s}return r}function d(t,e){const r=[];let n=-1;const a=t.passKeys?new Map:P;for(;++n<e.children.length;){const s=e.children[n];let i;if(t.passKeys){const l=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(l){const c=a.get(l)||0;i=l+"-"+c,a.set(l,c+1)}}const o=E(t,s,i);o!==void 0&&r.push(o)}return r}function X(t,e,r){const n=N(t.schema,e);if(!(r==null||typeof r=="number"&&Number.isNaN(r))){if(Array.isArray(r)&&(r=n.commaSeparated?w(r):j(r)),n.property==="style"){let a=typeof r=="object"?r:Z(t,String(r));return t.stylePropertyNameCase==="css"&&(a=q(a)),["style",a]}return[t.elementAttributeNameCase==="react"&&n.space?S[n.property]||n.property:n.attribute,r]}}function Z(t,e){const r={};try{A(e,n)}catch(a){if(!t.ignoreInvalidStyle){const s=a,i=new x("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:s,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=t.filePath||void 0,i.url=g+"#cannot-parse-style-attribute",i}}return r;function n(a,s){let i=a;i.slice(0,2)!=="--"&&(i.slice(0,4)==="-ms-"&&(i="ms-"+i.slice(4)),i=i.replace(I,H)),r[i]=s}}function b(t,e,r){let n;if(!r)n={type:"Literal",value:e};else if(e.includes(".")){const a=e.split(".");let s=-1,i;for(;++s<a.length;){const o=h(a[s])?{type:"Identifier",name:a[s]}:{type:"Literal",value:a[s]};i=i?{type:"MemberExpression",object:i,property:o,computed:!!(s&&o.type==="Literal"),optional:!1}:o}n=i}else n=h(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(n.type==="Literal"){const a=n.value;return m.call(t.components,a)?t.components[a]:a}if(t.evaluater)return t.evaluater.evaluateExpression(n);p(t)}function p(t,e){const r=new x("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw r.file=t.filePath||void 0,r.url=g+"#cannot-handle-mdx-estrees-without-createevaluater",r}function q(t){const e={};let r;for(r in t)m.call(t,r)&&(e[G(r)]=t[r]);return e}function G(t){let e=t.replace(J,Q);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function H(t,e){return e.toUpperCase()}function Q(t){return"-"+t.toLowerCase()}export{ie as t};
