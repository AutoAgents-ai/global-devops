import{l as C}from"./agent-018e9e38.js";import{H as k,ah as e,l,O as c,P as o,V as i,m as D,a8 as V,u as F,F as w,aE as b,aF as y,p as _,J as B,S as I}from"./vue-25cdfb55.js";import{_ as A}from"./index-08e8ac36.js";const S=t=>(b("data-v-8ed653f4"),t=t(),y(),t),x=["src","onClick"],N=S(()=>_("span",{class:"dialog-footer"},null,-1)),z=k({__name:"AvatarDialog",props:{avatarDialogVisible:{type:Boolean},avatar:{}},emits:["update:avatarDialogVisible","change"],setup(t,{emit:p}){const n=p,r=()=>{n("update:avatarDialogVisible",!1)},d=a=>{n("change",a),r()};return(a,E)=>{const m=e("CircleCheckFilled"),u=e("el-icon"),v=e("el-col"),g=e("el-row"),f=e("el-dialog");return l(),c(f,{"model-value":a.avatarDialogVisible,width:640,title:"选择头像",onClose:r},{footer:o(()=>[N]),default:o(()=>[i(g,{span:24,class:"avatrow"},{default:o(()=>[(l(!0),D(w,null,V(F(C),(s,h)=>(l(),c(v,{key:h,span:4,gutter:12,class:"avatcol"},{default:o(()=>[_("img",{src:s,class:B(["avatarImg",{active:a.avatar===s}]),onClick:H=>d(s)},null,10,x),s===a.avatar?(l(),c(u,{key:0,color:"#4060FF",size:"18px"},{default:o(()=>[i(m)]),_:1})):I("",!0)]),_:2},1024))),128))]),_:1})]),_:1},8,["model-value"])}}});const P=A(z,[["__scopeId","data-v-8ed653f4"]]);export{P as A};