import{u as _}from"./index-34f9d524.js";import{E as t}from"./element-a21ceda4.js";import{l,ag as p,m as d,p as r,q as s,U as m,O as u,S as c,u as f,F as g,aE as h,aF as b}from"./vue-417f18eb.js";import{_ as v}from"./index-a2c2c23d.js";import"./vxe-84ff863c.js";const y="/static/success_icon-7ef1533f.svg",o=e=>(h("data-v-ba79e997"),e=e(),b(),e),C={class:"mobile-login-success"},k={class:"box"},x=o(()=>s("div",{class:"success-icon"},[s("img",{src:y})],-1)),S=o(()=>s("div",{class:"success"},"登录成功",-1)),E=o(()=>s("div",{class:"tip"},"为了让您有更好的使用体验，我们建议您在电脑上使用",-1)),I={class:"footer"},L=l({__name:"mobileLoginSucceed",setup(e){const{toClipboard:a}=_();let n=async()=>{try{await a("https://model-platform-skyagents.tiangong.cn/home/agent"),t.success("已复制至剪贴板")}catch{t.success("复制失败")}};return(w,B)=>{const i=p("el-button");return d(),r(g,null,[s("div",C,[s("div",k,[x,S,E,s("div",I,[m(i,{class:"copy-link",type:"primary",onClick:f(n)},{default:u(()=>[c(" 复制链接 ")]),_:1},8,["onClick"])])])]),c(" @ ")],64)}}});const O=v(L,[["__scopeId","data-v-ba79e997"]]);export{O as default};
