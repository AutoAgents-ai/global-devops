import{k as n,_ as m}from"./index-7e374683.js";import{H as p,r,aD as k,c as f,l as h,m as y,K as v,u as S}from"./vue-25cdfb55.js";import{l as w}from"./steer-5fb8e71e.js";import"./element-e5236e8d.js";import"./vxe-9027ceee.js";const a="/static/stee-510e0bff.png",c="/static/steer-f240d939.jpg",I=p({__name:"steer",setup(T){let s=r(window.location.href.split("?")[1].split("=")[1]);const i=k();let u=async t=>{let{data:o}=await w("?token="+t);localStorage.setItem("SkyAgents-token-ky",JSON.stringify(o.data.token))},e=r(a);return f(()=>{window.innerWidth<=500?e.value=a:e.value=c,window.addEventListener("resize",l=>{window.innerWidth<=500?e.value=a:e.value=c}),n.set("hash",s.value);let t=n.get("k_sso_token");n.get("SkyAgents-token-key")?setTimeout(()=>{i.push("/agent/outlink?hash="+s.value)},5e3):t?(u(t),setTimeout(()=>{i.push("/agent/outlink?hash="+s.value)},5e3)):setTimeout(()=>{let l=localStorage.getItem("agentUuid"),d=localStorage.getItem("users_id");const g=encodeURIComponent("https://model-platform-skyagents.tiangong.cn/#/agent/outlink?hash="+s+"&agentUuid="+l+"&uid="+d),_=encodeURI(`redirect=${g}&client_id=200005`);location.href=`https://sso.tiangong.cn?${_}`},5e3)}),(t,o)=>(h(),y("div",{class:"steer",style:v({backgroundImage:`url(' ${S(e)} ')`})},null,4))}});const K=m(I,[["__scopeId","data-v-9c79ea54"]]);export{K as default};
