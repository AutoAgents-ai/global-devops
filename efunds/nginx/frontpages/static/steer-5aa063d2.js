import{i as n,_ as m}from"./index-8c95a84b.js";import{H as p,r,aJ as k,c as h,l as f,m as y,K as v,u as S}from"./vue-3e7b265f.js";import{l as w}from"./steer-dd6d2c2f.js";import"./element-f6a868e5.js";import"./vxe-49ae37d0.js";const a="/static/stee-d49d179a.svg",c="/static/steer-cf8c4ec0.svg",I=p({__name:"steer",setup(T){let s=r(window.location.href.split("?")[1].split("=")[1]);const i=k();let u=async t=>{let{data:o}=await w("?token="+t);localStorage.setItem("SkyAgents-token-ky",JSON.stringify(o.data.token))},e=r(a);return h(()=>{window.innerWidth<=500?e.value=a:e.value=c,window.addEventListener("resize",l=>{window.innerWidth<=500?e.value=a:e.value=c}),n.set("hash",s.value);let t=n.get("k_sso_token");n.get("SkyAgents-token-key")?setTimeout(()=>{i.push("/agent/outlink?hash="+s.value)},5e3):t?(u(t),setTimeout(()=>{i.push("/agent/outlink?hash="+s.value)},5e3)):setTimeout(()=>{let l=localStorage.getItem("agentUuid"),d=localStorage.getItem("users_id");const g=encodeURIComponent("https://model-platform-skyagents.tiangong.cn/#/agent/outlink?hash="+s+"&agentUuid="+l+"&uid="+d),_=encodeURI(`redirect=${g}&client_id=200005`);location.href=`https://sso.tiangong.cn?${_}`},5e3)}),(t,o)=>(f(),y("div",{class:"steer",style:v({backgroundImage:`url(' ${S(e)} ')`})},null,4))}});const K=m(I,[["__scopeId","data-v-59187282"]]);export{K as default};
