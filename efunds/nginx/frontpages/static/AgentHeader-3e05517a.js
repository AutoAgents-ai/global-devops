import{H as g,aJ as b,ah as h,l as t,m as n,p as s,V as d,u as o,S as l,U as i,F as u,a8 as k,I as f,J as C,O as y}from"./vue-82a6b7fc.js";import{u as A}from"./agent-d9a56668.js";import{_ as B}from"./index-75104f98.js";const H={class:"agent-header"},S={class:"back"},V={class:"agent-name"},I=["src"],N={class:"agent-tabs"},w={class:"tab-container"},F=["onClick"],J={class:"btn-box"},$=g({__name:"AgentHeader",props:{step:{},tabs:{},subtitle:{}},emits:["update:step","change"],setup(z,{emit:p}){const m=b(),{agentInfo:c}=A(),_=p,v=e=>{_("update:step",e),_("change",e)};return(e,D)=>{const r=h("svg-icon");return t(),n("div",H,[s("div",S,[d(r,{name:"back",class:"back-icon",onClick:o(m).back},null,8,["onClick"]),s("div",V,[o(c).avatar?(t(),n("img",{key:0,src:o(c).avatar},null,8,I)):l("",!0),s("span",null,i(o(c).name),1),e.subtitle?(t(),n(u,{key:1},[d(r,{name:"arrow-right",class:"arrow"}),s("span",null,i(e.subtitle),1)],64)):l("",!0)])]),s("div",N,[s("div",w,[(t(!0),n(u,null,k(e.tabs,a=>(t(),n("div",{class:C(["tab-item",a.value===e.step?"active":""]),key:a.value,onClick:E=>v(a.value)},[a.icon?(t(),y(r,{key:0,name:a.icon,class:"tab-icon"},null,8,["name"])):l("",!0),s("span",null,i(a.label),1)],10,F))),128))])]),s("div",J,[f(e.$slots,"default",{},void 0,!0)])])}}});const T=B($,[["__scopeId","data-v-7798f6ea"]]);export{T as A};