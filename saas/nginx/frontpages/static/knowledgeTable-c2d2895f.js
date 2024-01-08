import{l as K,aI as U,aD as q,r as m,ag as o,m as A,p as R,q as s,U as e,u as l,O as n,T as _,a8 as E,S as i,F}from"./vue-417f18eb.js";import{k as M,D as P,b as Q}from"./index-bef0dd8b.js";import{f as O}from"./index-ca8e71c4.js";import{u as j,a as G,b as H}from"./knowledge-6c2a8bde.js";import{h as J,f as x}from"./element-a21ceda4.js";import{_ as L}from"./index-87a8c386.js";import"./vxe-84ff863c.js";const W={class:"knowledge-header"},X={class:"back"},Y={class:"knowledge-name"},Z={class:"image-slot"},ee={class:"knowledge-tabs"},te={class:"tab-container"},ae={class:"btn-box"},ne=K({__name:"knowledgeTable",setup(oe){const{proxy:f}=j(),{knowInfo:u}=U(G()),h=q(),g=m(),w=m([]),k=m(0),d=m({pageNum:1,pageSize:10,count:!0,keywords:"",kbId:u.value.id,parentId:u.value.parentId}),T=t=>{x.confirm(`您确定${t.state=="2"?"启用":"弃用"}该文件吗？`,"提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{M({id:t.id,name:t.name,state:t.state=="1"?"2":"1"}).then(()=>{f.$message.success("操作成功"),p()})}).catch(()=>{})},C=t=>{x.confirm("此操作将永久删除数据,是否继续?","提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{P(t).then(()=>{f.$message.success("删除成功"),p()})}).catch(()=>{})},p=async()=>{d.value.keywords=g.value,Q(d.value).then(t=>{w.value=t.data.list,k.value=t.data.total})};p();const b=()=>{p()},D=t=>{d.value.pageNum=t,p()},B=t=>{switch(t){case"folder":return"数据文件夹";case"file":return"文件";case"uri":return"链接";case"virtual":return"手工录入"}};return(t,r)=>{const y=o("svg-icon"),$=o("el-icon"),I=o("el-image"),z=o("el-input"),v=o("el-button"),c=o("el-table-column"),N=o("el-table"),V=o("el-pagination");return A(),R(F,null,[s("div",W,[s("div",X,[e(y,{name:"back",class:"back-icon",onClick:r[0]||(r[0]=a=>l(h).push({name:"knowledge"}))}),s("div",Y,[e(I,{src:l(u).avatarUrl?l(u).avatarUrl:`${l(H)("")}`,class:"logo"},{error:n(()=>[s("div",Z,[e($,null,{default:n(()=>[e(l(J))]),_:1})])]),_:1},8,["src"]),s("div",null,_(l(u).name),1)])]),s("div",ee,[s("div",te,[e(y,{name:"search-knowledge",class:"search"}),e(z,{class:"inp",modelValue:g.value,"onUpdate:modelValue":r[1]||(r[1]=a=>g.value=a),onBlur:b,onKeydown:E(b,["enter"]),placeholder:"搜索知识库中的文档"},null,8,["modelValue","onKeydown"])])]),s("div",ae,[e(v,{type:"primary",class:"save-btn",onClick:r[2]||(r[2]=a=>l(h).push({name:"importData"}))},{default:n(()=>[i("导入数据")]),_:1})])]),e(N,{data:w.value,style:{width:"1280px"},"row-style":{height:"56px"},"header-row-style":{height:"48px"}},{default:n(()=>[e(c,{prop:"name",label:"名称",width:"320"}),e(c,{prop:"type",label:"类型",width:"120"},{default:n(a=>[i(_(B(a.row.type)),1)]),_:1}),e(c,{prop:"dataAmount",label:"切片数量",width:"120"}),e(c,{prop:"createAt",label:"创建时间"},{default:n(a=>[i(_(l(O)(a.row.createAt)),1)]),_:1}),e(c,{prop:"state",label:"状态",width:"120"},{default:n(a=>[i(_(a.row.state==1?"启用":"弃用"),1)]),_:1}),e(c,{fixed:"right",label:"操作",width:"160"},{default:n(a=>[e(v,{link:"",type:"primary",size:"small",onClick:S=>T(a.row)},{default:n(()=>[i(_(a.row.state==1?"弃用":"启用"),1)]),_:2},1032,["onClick"]),e(v,{link:"",type:"danger",size:"small",onClick:S=>C(a.row.id)},{default:n(()=>[i("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(V,{class:"pagination",small:"",background:"",layout:"prev, pager, next",total:k.value,"page-size":d.value.pageSize,"current-page":d.value.pageNum,onCurrentChange:D},null,8,["total","page-size","current-page"])],64)}}});const pe=L(ne,[["__scopeId","data-v-a03602d9"]]);export{pe as default};
