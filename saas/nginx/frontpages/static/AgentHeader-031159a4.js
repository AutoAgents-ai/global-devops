import{H as b,aD as g,ah as h,l as t,m as n,p as s,V as _,u as o,S as l,U as i,F as u,a8 as k,I as f,J as C,O as y}from"./vue-25cdfb55.js";import{u as A}from"./agent-fd8072b9.js";import{_ as B}from"./index-9da4dcd3.js";const H={class:"agent-header"},S={class:"back"},V={class:"agent-name"},I=["src"],N={class:"agent-tabs"},w={class:"tab-container"},D=["onClick"],F={class:"btn-box"},$=b({__name:"AgentHeader",props:{step:{},tabs:{},subtitle:{}},emits:["update:step","change"],setup(z,{emit:p}){const m=g(),{agentInfo:c}=A(),d=p,v=e=>{d("update:step",e),d("change",e)};return(e,E)=>{const r=h("svg-icon");return t(),n("div",H,[s("div",S,[_(r,{name:"back",class:"back-icon",onClick:o(m).back},null,8,["onClick"]),s("div",V,[o(c).avatar?(t(),n("img",{key:0,src:o(c).avatar},null,8,I)):l("",!0),s("span",null,i(o(c).name),1),e.subtitle?(t(),n(u,{key:1},[_(r,{name:"arrow-right",class:"arrow"}),s("span",null,i(e.subtitle),1)],64)):l("",!0)])]),s("div",N,[s("div",w,[(t(!0),n(u,null,k(e.tabs,a=>(t(),n("div",{class:C(["tab-item",a.value===e.step?"active":""]),key:a.value,onClick:J=>v(a.value)},[a.icon?(t(),y(r,{key:0,name:a.icon,class:"tab-icon"},null,8,["name"])):l("",!0),s("span",null,i(a.label),1)],10,D))),128))])]),s("div",F,[f(e.$slots,"default",{},void 0,!0)])])}}});const T=B($,[["__scopeId","data-v-61fb6d5c"]]);export{T as A};