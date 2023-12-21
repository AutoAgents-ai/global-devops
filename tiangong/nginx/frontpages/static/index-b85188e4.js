import{a as Y,o as Z}from"./agent-17a4959b.js";import{H as D,aD as W,ah as l,l as c,m,p as e,T as u,V as t,u as ee,P as o,F as O,a8 as B,aE as G,aF as E,O as H,U as L,r as C,_ as j,S as V,J as z,c as te}from"./vue-25cdfb55.js";import{_ as U,f as Q,h as F}from"./index-ed0a270d.js";import{u as se,l as q}from"./agent-fc7cf0d3.js";import{A as oe}from"./AvatarDialog-7af24755.js";import"./element-e5236e8d.js";import"./vxe-9027ceee.js";const ae="/static/agent-iocn4-8e4b9260.svg",le="/static/agent-iocn3-dd012dff.svg",ne="/static/agent-iocn2-5afa7474.svg",ce="/static/agent-iocn1-569a1976.svg",J=i=>(G("data-v-54177a11"),i=i(),E(),i),ie={class:"app-list"},de={class:"app-list-name"},re={class:"app-list-box"},_e=J(()=>e("div",{class:"logo-box"},[e("img",{src:ae,class:"icon"}),e("img",{src:le,class:"icon"}),e("img",{src:ne,class:"icon"}),e("img",{src:ce,class:"icon"})],-1)),ue=J(()=>e("h3",null,[u("2024年，乐享你的SkyAgents，让创新无处不在！"),e("i",null,"Joy Work,Joy Life")],-1)),pe=J(()=>e("p",null,"配置灵活，多种体验模式，新年活动火热进行中...",-1)),me=["onClick"],ve={class:"image-slot"},ge=D({__name:"MyApp",props:{list:{default:()=>[]}},emits:["refresh"],setup(i,{emit:h}){let f=()=>{location.href="https://uxkpl4cba3j.feishu.cn/share/base/form/shrcn3tg4gDwg1jHTkxbPJT3dgc"};const a=W(),b=()=>{window.open("https://www.yuque.com/skyagents/glwn9v")},v=()=>{a.push({name:"AgentCreate"})},p=d=>{a.push({name:"AgentEdit",query:{id:d.id}})};return(d,k)=>{const s=l("SvgIcon"),$=l("el-col"),y=l("el-row"),A=l("icon-picture"),S=l("el-icon"),N=l("el-image"),I=l("el-text");return c(),m("div",ie,[e("div",de,[u(" 我的Agents"),e("span",{class:"help-center",onClick:b},[t(s,{name:"help",style:{"margin-right":"2px"}}),u(" 帮助中心 ")]),e("span",{class:"Medial",onClick:k[0]||(k[0]=()=>{ee(f)()})},"申请内测")]),e("div",re,[t(y,{gutter:24},{default:o(()=>[t($,{span:24},{default:o(()=>[e("div",{class:"create-item"},[_e,ue,pe,e("div",{class:"create-btn",onClick:v},"立即创建")])]),_:1})]),_:1}),t(y,{gutter:24},{default:o(()=>[(c(!0),m(O,null,B(d.list,(r,n)=>(c(),H($,{sm:12,md:8,lg:6,key:n},{default:o(()=>[e("div",{class:"item",onClick:_=>p(r)},[t(N,{src:r.avatar,class:"logo"},{error:o(()=>[e("div",ve,[t(S,null,{default:o(()=>[t(A)]),_:1})])]),_:2},1032,["src"]),e("h3",null,L(r.name),1),e("p",null,[t(I,{"line-clamp":2},{default:o(()=>[u(L(r.intro),1)]),_:2},1024)])],8,me)]),_:2},1024))),128))]),_:1})])])}}});const he=U(ge,[["__scopeId","data-v-54177a11"]]),fe={class:"logo-uploader"},be=["src"],Ce={class:"dialog-footer"},xe=D({__name:"exampleCreateDialog",props:{dialogCreateVisible:{type:Boolean},id:{},theme:{}},emits:["update:dialogCreateVisible","refresh"],setup(i,{emit:h}){const f=h,a=i,{setShareAgent:b}=se(),v=W(),p=C(!1),d=C(),k={name:"",yourName:"",hisName:"",words:"",theme:a.theme,avatar:q[N(0,q.length-1)]},s=j(k),$=j({name:[{required:!0,message:"请输入内容",trigger:"blur"}],yourName:[{required:!0,message:"请输入内容",trigger:"blur"}],hisName:[{required:!0,message:"请输入内容",trigger:"blur"}],words:[{required:!0,message:"请输入内容",trigger:"blur"}]}),y=()=>{f("update:dialogCreateVisible",!1)},A=()=>{const r=N(0,q.length-1);s.avatar=q[r]},S=r=>{s.avatar=r};function N(r,n){return Math.floor(Math.random()*(n-r))+r}const I=()=>{d.value.validate(r=>{r&&(s.theme=a.theme,b(s),v.push({name:"AgentCreate",query:{exampleId:a.id}}),y())})};return(r,n)=>{const _=l("Refresh"),R=l("el-icon"),w=l("el-form-item"),T=l("el-input"),K=l("el-form"),P=l("el-button"),X=l("el-dialog");return c(),m("div",null,[t(X,{"model-value":r.dialogCreateVisible,width:560,title:"创建同款Agent",onClose:y},{footer:o(()=>[e("span",Ce,[t(P,{onClick:y},{default:o(()=>[u("取 消")]),_:1}),t(P,{type:"primary",onClick:I},{default:o(()=>[u("创 建")]),_:1})])]),default:o(()=>[t(K,{ref_key:"createFormRef",ref:d,model:s,rules:$,"label-position":"top","require-asterisk-position":"right"},{default:o(()=>[t(w,{class:"uploader",prop:"avatar"},{default:o(()=>[e("div",fe,[s.avatar?(c(),m("img",{key:0,src:s.avatar,class:"logo",onClick:n[0]||(n[0]=x=>p.value=!0)},null,8,be)):V("",!0),e("div",{class:"change",onClick:A},[t(R,{class:"icon"},{default:o(()=>[t(_)]),_:1}),u(" 换一换 ")])])]),_:1}),t(w,{label:"Agent 名称",prop:"name"},{default:o(()=>[t(T,{modelValue:s.name,"onUpdate:modelValue":n[1]||(n[1]=x=>s.name=x),placeholder:"为你的Agent命名",maxlength:"20"},null,8,["modelValue"])]),_:1}),t(w,{label:"你是谁",prop:"yourName"},{default:o(()=>[t(T,{modelValue:s.yourName,"onUpdate:modelValue":n[2]||(n[2]=x=>s.yourName=x),placeholder:"说出你的名字或者TA知道的昵称，例如王维、小维、老公...",maxlength:"10"},null,8,["modelValue"])]),_:1}),t(w,{label:"分享给谁",prop:"hisName"},{default:o(()=>[t(T,{modelValue:s.hisName,"onUpdate:modelValue":n[3]||(n[3]=x=>s.hisName=x),placeholder:"说出TA的名字或者角色，例如王先生，王维，女儿",maxlength:"10"},null,8,["modelValue"])]),_:1}),t(w,{label:"你想对TA说",prop:"words"},{default:o(()=>[t(T,{modelValue:s.words,"onUpdate:modelValue":n[4]||(n[4]=x=>s.words=x),type:"textarea",row:3,placeholder:"写上你的新年祝福",maxlength:"300"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"]),t(oe,{avatarDialogVisible:p.value,"onUpdate:avatarDialogVisible":n[5]||(n[5]=x=>p.value=x),avatar:s.avatar,onChange:S},null,8,["avatarDialogVisible","avatar"])])}}});const ke=U(xe,[["__scopeId","data-v-74c42b40"]]),ye=i=>(G("data-v-23014cdd"),i=i(),E(),i),$e={class:"app-list"},we=ye(()=>e("div",{class:"app-list-name"},"示例Agents",-1)),Ve={class:"app-list-box"},Ae={class:"tabs"},Ne=["onClick"],Se={class:"image-slot"},Ie={class:"hover-box"},Le={class:"btns"},De=["onClick"],Re=["onClick"],Te=D({__name:"Official",props:{list:{default:()=>[]},appLength:{}},setup(i){const h=C(),f=C(),a=C(!1),b=C([{label:"所有类别",value:""}]),v=C(""),p=s=>{v.value=s},d=s=>{window.open(s)},k=s=>{h.value=s.id,f.value=s.theme,a.value=!0};return(s,$)=>{const y=l("icon-picture"),A=l("el-icon"),S=l("el-image"),N=l("el-text"),I=l("CaretRight"),r=l("el-col"),n=l("el-row");return c(),m("div",$e,[we,e("div",Ve,[e("div",Ae,[(c(!0),m(O,null,B(b.value,_=>(c(),m("div",{class:z(["tab-item",v.value===_.value?"active":""]),key:_.value,onClick:R=>p(_.value)},L(_.label),11,Ne))),128))]),t(n,{gutter:24},{default:o(()=>[(c(!0),m(O,null,B(s.list,(_,R)=>(c(),H(r,{sm:12,md:8,lg:6,key:R},{default:o(()=>[e("div",{class:z(["item",_.theme])},[t(S,{src:_.avatar,class:"logo"},{error:o(()=>[e("div",Se,[t(A,null,{default:o(()=>[t(y)]),_:1})])]),_:2},1032,["src"]),e("h3",null,L(_.name),1),e("p",null,[t(N,{"line-clamp":2},{default:o(()=>[u(L(_.intro),1)]),_:2},1024)]),e("div",Ie,[e("div",Le,[e("div",{class:"view",onClick:w=>d(_.link)},[t(A,{size:18,class:"icon"},{default:o(()=>[t(I)]),_:1}),u("预览 ")],8,De),_.theme?(c(),m("div",{key:0,class:"view create",onClick:w=>k(_)},"定制同款",8,Re)):V("",!0)])])],2)]),_:2},1024))),128))]),_:1})]),t(ke,{dialogCreateVisible:a.value,"onUpdate:dialogCreateVisible":$[0]||($[0]=_=>a.value=_),id:h.value,theme:f.value},null,8,["dialogCreateVisible","id","theme"])])}}});const qe=U(Te,[["__scopeId","data-v-23014cdd"]]),Me="/static/guide-card1-1c8a30c7.svg",M="/static/close-229e6ec9.svg",Ue="/static/guide-card2-8bbe34b9.svg",Fe="/static/guide-card3-a70b1097.svg",Oe="/static/guide-card4-bd133c76.svg",g=i=>(G("data-v-8ed3d0c8"),i=i(),E(),i),Be={class:"novice-guide"},Ge={key:0,class:"guide-one"},Ee={class:"guide-one-box"},He=g(()=>e("img",{class:"guide-card1",src:Me,alt:""},null,-1)),Je={class:"step-box"},Pe=g(()=>e("div",{class:"title"},"第一步：定制同款主题agent",-1)),je=g(()=>e("div",{class:"content"},"点击定制同款按钮，进入agent个性化配置页",-1)),ze={class:"footer"},Qe={key:1,class:"guide-two"},We={class:"guide-two-box"},Ke=g(()=>e("img",{class:"guide-card1",src:Ue,alt:""},null,-1)),Xe={class:"step-box"},Ye=g(()=>e("div",{class:"title"},"第二步：agent个性化配置",-1)),Ze=g(()=>e("div",{class:"content"},"输入你是谁，你要送给谁，你的祝福定制agent",-1)),et={class:"footer"},tt={key:2,class:"guide-three"},st={class:"guide-three-box"},ot=g(()=>e("img",{class:"guide-card1",src:Fe,alt:""},null,-1)),at={class:"step-box"},lt=g(()=>e("div",{class:"title"},"第三步：调试并分享agent",-1)),nt=g(()=>e("div",{class:"content"},"配置完专属agent后，点击右上角分享自动获取分享链接",-1)),ct={class:"footer"},it={key:3,class:"guide-four"},dt={class:"guide-four-box"},rt=g(()=>e("img",{class:"guide-card1",src:Oe,alt:""},null,-1)),_t={class:"step-box"},ut=g(()=>e("div",{class:"title"},"第四步：复制分享链接",-1)),pt=g(()=>e("div",{class:"content"},"获取链接后可以复制到微信/QQ，分享给好友",-1)),mt={class:"footer"},vt=D({__name:"NoviceGuide",emits:["stepClose"],setup(i,{emit:h}){const f=h,a=C(1),b=()=>{a.value>=4||(a.value,a.value=++a.value)},v=()=>{a.value<=1||(a.value=--a.value)},p=()=>{f("stepClose")};return(d,k)=>{const s=l("el-button");return c(),m("div",Be,[a.value===1?(c(),m("div",Ge,[e("div",Ee,[He,e("div",Je,[e("img",{class:"step-box-close",src:M,alt:"",onClick:p}),Pe,je,e("div",ze,[t(s,{color:"#000000",round:"",class:"btn-next",onClick:b},{default:o(()=>[u("下一步")]),_:1})])])])])):V("",!0),a.value===2?(c(),m("div",Qe,[e("div",We,[Ke,e("div",Xe,[e("img",{class:"step-box-close",src:M,alt:"",onClick:p}),Ye,Ze,e("div",et,[t(s,{color:"#dddddd",round:"",class:"btn-prev",onClick:v},{default:o(()=>[u("上一步")]),_:1}),t(s,{color:"#000000",round:"",class:"btn-next",onClick:b},{default:o(()=>[u("下一步")]),_:1})])])])])):V("",!0),a.value===3?(c(),m("div",tt,[e("div",st,[ot,e("div",at,[e("img",{class:"step-box-close",src:M,alt:"",onClick:p}),lt,nt,e("div",ct,[t(s,{color:"#dddddd",round:"",class:"btn-prev",onClick:v},{default:o(()=>[u("上一步")]),_:1}),t(s,{color:"#000000",round:"",class:"btn-next",onClick:b},{default:o(()=>[u("下一步")]),_:1})])])])])):V("",!0),a.value===4?(c(),m("div",it,[e("div",dt,[rt,e("div",_t,[e("img",{class:"step-box-close",src:M,alt:"",onClick:p}),ut,pt,e("div",mt,[t(s,{color:"#dddddd",class:"btn-prev",round:"",onClick:v},{default:o(()=>[u("上一步")]),_:1}),t(s,{color:"#000000",class:"btn-finish",round:"",onClick:p},{default:o(()=>[u("完成")]),_:1})])])])])):V("",!0)])}}});const gt=U(vt,[["__scopeId","data-v-8ed3d0c8"]]),ht={class:"app-container"},wt=D({__name:"index",setup(i){const h=C([]),f=C([]),a=C(!1);te(()=>{let d=Q()?Q():"new";d&&d==="new"?(F("new"),a.value=!0):(F("old"),a.value=!1)});const b=()=>{a.value=!1,F("old")},v=async()=>{const{data:d}=await Y();h.value=d},p=async()=>{const{data:d}=await Z();f.value=d};return v(),p(),(d,k)=>(c(),m("div",ht,[a.value?(c(),H(gt,{key:0,onStepClose:b})):V("",!0),t(he,{list:h.value,onRefresh:v},null,8,["list"]),t(qe,{list:f.value,appLength:h.value.length},null,8,["list","appLength"])]))}});export{wt as default};