import{H as y,r as l,aJ as I,c as k,_ as V,ah as i,l as m,m as h,u as E,S as L,p as e,V as t,P as c,a9 as N,a3 as C,aD as O,aE as S}from"./vue-82a6b7fc.js";import{q as F,t as M,_ as R}from"./index-a988125f.js";import"./element-2e0f0011.js";import"./vxe-b8ddea67.js";const f=n=>(O("data-v-286d3ec2"),n=n(),S(),n),W={class:"mobileLogin"},q={key:0,class:"mobileLogin-left"},z={class:"mobileLogin-right"},B={class:"right-head"},K={class:"head"},U={class:"head-logo"},D=f(()=>e("div",{class:"head-fool"},[e("span",null,"欢迎来到灵搭")],-1)),A={class:"right-form"},G={class:"form-con"},H=f(()=>e("div",{class:"con-head"},[e("div",{class:"head-span"},"账号登录"),e("div",{class:"head-el-tabs__active-bar"})],-1)),J={class:"con-input"},P={class:"con-button"},j=["onClick"],Q=y({__name:"mobileLogin",setup(n){let a=l(!0);const g=I();k(()=>{window.innerWidth<=1200?a.value=!1:window.innerWidth>1200&&(a.value=!0),window.addEventListener("resize",()=>{window.innerWidth<=1200?a.value=!1:window.innerWidth>1200&&(a.value=!0)})});const v=l(null);l(!1);const o=V({userNameOrExternalId:"",password:""}),w={userNameOrExternalId:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},_=async()=>{const r=F.hashSync(o.password);let{data:s}=await M({userNameOrExternalId:o.userNameOrExternalId,password:r});s.token&&(localStorage.setItem("token",s.token),g.push("/home/agent"))};return(r,s)=>{const x=i("svg-icon"),p=i("el-input"),u=i("el-form-item"),b=i("el-form");return m(),h("div",W,[E(a)===!0?(m(),h("div",q)):L("",!0),e("div",z,[e("div",B,[e("div",K,[e("div",U,[t(x,{name:"Group",class:"share"})]),D])]),e("div",A,[e("div",G,[H,e("div",J,[t(b,{ref_key:"loginFormRef",ref:v,model:o,rules:w,onKeyup:N(_,["enter"])},{default:c(()=>[t(u,{prop:"username"},{default:c(()=>[t(p,{modelValue:o.userNameOrExternalId,"onUpdate:modelValue":s[0]||(s[0]=d=>o.userNameOrExternalId=d),modelModifiers:{trim:!0},placeholder:"用户名",type:"text",tabindex:"1","prefix-icon":r.User,size:"large"},null,8,["modelValue","prefix-icon"])]),_:1}),t(u,{prop:"password"},{default:c(()=>[t(p,{modelValue:o.password,"onUpdate:modelValue":s[1]||(s[1]=d=>o.password=d),modelModifiers:{trim:!0},placeholder:"密码",type:"password",tabindex:"2","prefix-icon":r.Lock,size:"large","show-password":""},null,8,["modelValue","prefix-icon"])]),_:1})]),_:1},8,["model","onKeyup"])]),e("div",P,[e("button",{onClick:C(_,["prevent"])},"登录",8,j)])])])])])}}});const $=R(Q,[["__scopeId","data-v-286d3ec2"]]);export{$ as default};
