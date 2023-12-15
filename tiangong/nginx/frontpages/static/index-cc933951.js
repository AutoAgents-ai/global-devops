import{a as H,o as P}from"./agent-2db461de.js";import{H as R,aJ as U,ah as a,l as d,m as f,p as e,V as t,P as o,T as C,F as q,a8 as T,aD as B,aE as E,O as D,U as A,r as y,_ as O,S as j,J as G}from"./vue-82a6b7fc.js";import{_ as F}from"./index-88637bc4.js";import{u as K,l as L}from"./agent-90c66e61.js";import"./element-4990942a.js";import"./vxe-45effba2.js";const Q="/static/more1-1fcfebe0.png",W="/static/more2-dc48cf2f.png",X="/static/more3-50d97726.png",Y="/static/more4-aa753672.png",S=c=>(B("data-v-c944a593"),c=c(),E(),c),Z={class:"app-list"},ee=S(()=>e("div",{class:"app-list-name"},"我的Agents",-1)),te={class:"app-list-box"},oe={class:"create-item"},se=S(()=>e("div",{class:"logo-box"},[e("div",{class:"wrapper"},[e("img",{src:Q})]),e("div",{class:"wrapper"},[e("img",{src:W})]),e("div",{class:"wrapper"},[e("img",{src:X})]),e("div",{class:"wrapper"},[e("img",{src:Y})])],-1)),ae=S(()=>e("h3",null,"属于你自己的 Agents，在方方面面更好地帮助你",-1)),le=S(()=>e("p",null,"配置灵活，多种训练模式，免费试用体验",-1)),ne=["onClick"],ie={class:"image-slot"},ce=R({__name:"MyApp",props:{list:{default:()=>[]}},emits:["refresh"],setup(c,{emit:u}){const _=U(),m=()=>{_.push({name:"AgentCreate"})},g=r=>{_.push({name:"AgentEdit",query:{id:r.id}})};return(r,x)=>{const p=a("el-button"),s=a("el-col"),w=a("icon-picture"),v=a("el-icon"),$=a("el-image"),V=a("el-text"),k=a("el-row");return d(),f("div",Z,[ee,e("div",te,[t(k,{gutter:24},{default:o(()=>[t(s,{span:12},{default:o(()=>[e("div",oe,[se,ae,le,t(p,{type:"primary",class:"create-btn",onClick:m},{default:o(()=>[C("立即创建")]),_:1})])]),_:1}),(d(!0),f(q,null,T(r.list,(l,n)=>(d(),D(s,{span:6,key:n},{default:o(()=>[e("div",{class:"item",onClick:i=>g(l)},[t($,{src:l.avatar,class:"logo"},{error:o(()=>[e("div",ie,[t(v,null,{default:o(()=>[t(w)]),_:1})])]),_:2},1032,["src"]),e("h3",null,A(l.name),1),e("p",null,[t(V,{"line-clamp":2},{default:o(()=>[C(A(l.intro),1)]),_:2},1024)])],8,ne)]),_:2},1024))),128))]),_:1})])])}}});const re=F(ce,[["__scopeId","data-v-c944a593"]]),_e={class:"logo-uploader"},de=["src"],pe={class:"dialog-footer"},ue=R({__name:"exampleCreateDialog",props:{dialogCreateVisible:{type:Boolean},id:{}},emits:["update:dialogCreateVisible","refresh"],setup(c,{emit:u}){const _=u,m=c,{setShareAgent:g}=K(),r=U(),x=y(),p={name:"",yourName:"",hisName:"",words:"",avatar:L[V(0,L.length-1)]},s=O(p),w=O({name:[{required:!0,message:"请输入内容",trigger:"blur"}],yourName:[{required:!0,message:"请输入内容",trigger:"blur"}],hisName:[{required:!0,message:"请输入内容",trigger:"blur"}],words:[{required:!0,message:"请输入内容",trigger:"blur"}]}),v=()=>{_("update:dialogCreateVisible",!1)},$=()=>{const l=V(0,L.length-1);s.avatar=L[l]};function V(l,n){return Math.floor(Math.random()*(n-l))+l}const k=()=>{x.value.validate(l=>{l&&(g(s),r.push({name:"AgentCreate",query:{exampleId:m.id}}),v())})};return(l,n)=>{const i=a("Refresh"),N=a("el-icon"),h=a("el-form-item"),I=a("el-input"),z=a("el-form"),M=a("el-button"),J=a("el-dialog");return d(),D(J,{"model-value":l.dialogCreateVisible,width:560,title:"创建同款Agent",onClose:v},{footer:o(()=>[e("span",pe,[t(M,{onClick:v},{default:o(()=>[C("取 消")]),_:1}),t(M,{type:"primary",onClick:k},{default:o(()=>[C("创 建")]),_:1})])]),default:o(()=>[t(z,{ref_key:"createFormRef",ref:x,model:s,rules:w,"label-position":"top","require-asterisk-position":"right"},{default:o(()=>[t(h,{class:"uploader",prop:"avatar"},{default:o(()=>[e("div",_e,[s.avatar?(d(),f("img",{key:0,src:s.avatar,class:"logo"},null,8,de)):j("",!0),e("div",{class:"change",onClick:$},[t(N,{class:"icon"},{default:o(()=>[t(i)]),_:1}),C(" 换一换 ")])])]),_:1}),t(h,{label:"Agent 名称",prop:"name"},{default:o(()=>[t(I,{modelValue:s.name,"onUpdate:modelValue":n[0]||(n[0]=b=>s.name=b),placeholder:"为你的Agent命名",maxlength:"10"},null,8,["modelValue"])]),_:1}),t(h,{label:"你是谁",prop:"yourName"},{default:o(()=>[t(I,{modelValue:s.yourName,"onUpdate:modelValue":n[1]||(n[1]=b=>s.yourName=b),placeholder:"说出你的名字或者TA知道的昵称，例如王维、小维、老公...",maxlength:"10"},null,8,["modelValue"])]),_:1}),t(h,{label:"分享给谁",prop:"hisName"},{default:o(()=>[t(I,{modelValue:s.hisName,"onUpdate:modelValue":n[2]||(n[2]=b=>s.hisName=b),placeholder:"说出TA的名字或者角色，例如王先生，王维，女儿",maxlength:"10"},null,8,["modelValue"])]),_:1}),t(h,{label:"你想对TA说",prop:"words"},{default:o(()=>[t(I,{modelValue:s.words,"onUpdate:modelValue":n[3]||(n[3]=b=>s.words=b),type:"textarea",row:3,placeholder:"写上你的新年祝福",maxlength:"300"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}});const me=F(ue,[["__scopeId","data-v-187791e6"]]),ge=c=>(B("data-v-98200606"),c=c(),E(),c),ve={class:"app-list"},fe=ge(()=>e("div",{class:"app-list-name"},"示例Agents",-1)),he={class:"app-list-box"},be={class:"tabs"},ye=["onClick"],Ce={class:"item"},xe={class:"image-slot"},Ve={class:"hover-box"},we={class:"btns"},$e={class:"view"},ke=R({__name:"Official",props:{list:{default:()=>[]}},setup(c){const u=y(),_=y(!1),m=y([{label:"所有类别",value:""}]),g=y(""),r=p=>{g.value=p},x=p=>{u.value=p};return(p,s)=>{const w=a("icon-picture"),v=a("el-icon"),$=a("el-image"),V=a("el-text"),k=a("CaretRight"),l=a("el-col"),n=a("el-row");return d(),f("div",ve,[fe,e("div",he,[e("div",be,[(d(!0),f(q,null,T(m.value,i=>(d(),f("div",{class:G(["tab-item",g.value===i.value?"active":""]),key:i.value,onClick:N=>r(i.value)},A(i.label),11,ye))),128))]),t(n,{gutter:24},{default:o(()=>[(d(!0),f(q,null,T(p.list,(i,N)=>(d(),D(l,{span:6,key:N,onClick:h=>x(i.id)},{default:o(()=>[e("div",Ce,[t($,{src:i.avatar,class:"logo"},{error:o(()=>[e("div",xe,[t(v,null,{default:o(()=>[t(w)]),_:1})])]),_:2},1032,["src"]),e("h3",null,A(i.name),1),e("p",null,[t(V,{"line-clamp":2},{default:o(()=>[C(A(i.intro),1)]),_:2},1024)]),e("div",Ve,[e("div",we,[e("div",$e,[t(v,{size:18,class:"icon"},{default:o(()=>[t(k)]),_:1}),C("预览 ")]),e("div",{class:"view create",onClick:s[0]||(s[0]=h=>_.value=!0)},"定制同款")])])])]),_:2},1032,["onClick"]))),128))]),_:1})]),t(me,{dialogCreateVisible:_.value,"onUpdate:dialogCreateVisible":s[1]||(s[1]=i=>_.value=i),id:u.value},null,8,["dialogCreateVisible","id"])])}}});const Ae=F(ke,[["__scopeId","data-v-98200606"]]),Ne={class:"app-container"},De=R({__name:"index",setup(c){const u=y([]),_=y([]),m=async()=>{const{data:r}=await H();u.value=r},g=async()=>{const{data:r}=await P();_.value=r};return m(),g(),(r,x)=>(d(),f("div",Ne,[t(re,{list:u.value,onRefresh:m},null,8,["list"]),t(Ae,{list:_.value},null,8,["list"])]))}});export{De as default};
