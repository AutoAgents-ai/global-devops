import{p as ee,u as te,D as oe,A as ae}from"./index.vue_vue_type_style_index_0_scoped_64ec0f08_lang-60953624.js";import{_ as L,u as se,s as le,a as ne,b as ce,c as re}from"./index-7e374683.js";import{H as $,_ as ie,ah as n,l as s,O as g,P as o,p as _,V as t,T as M,m as v,u as w,aD as ue,r as B,U as N,F as P,a8 as F,aE as z,aF as G,I as W,e as d,aa as de,R as H,S as A,J as q,X as pe,aG as _e,aH as me,aI as Z}from"./vue-25cdfb55.js";import{p as ve,E as fe,f as ge}from"./element-e5236e8d.js";import{g as U}from"./index-15a1f59c.js";import"./vxe-9027ceee.js";const he=["src"],be={class:"dialog-footer"},ye=$({__name:"EditAccount",props:{dialogAccountVisible:{type:Boolean}},emits:["update:dialogAccountVisible"],setup(r,{emit:e}){const c=e,l=ie({avatar:"",userName:"",passWord:"",language:"",timeZone:""}),f=()=>{c("update:dialogAccountVisible",!1)},i=()=>{c("update:dialogAccountVisible",!1)};return(b,a)=>{const S=n("el-icon"),y=n("el-upload"),m=n("el-form-item"),I=n("el-input"),u=n("el-option"),k=n("el-select"),p=n("el-form"),x=n("el-button"),C=n("el-dialog");return s(),g(C,{"model-value":b.dialogAccountVisible,"append-to-body":"",width:480,title:"账户设置"},{footer:o(()=>[_("span",be,[t(x,{onClick:f},{default:o(()=>[M("取消")]),_:1}),t(x,{type:"primary",onClick:i},{default:o(()=>[M("确认")]),_:1})])]),default:o(()=>[t(p,{ref:"accountFormRef",model:l,rules:b.rules,"label-position":"top"},{default:o(()=>[t(m,{prop:"avatar",class:"form-item-uploader"},{default:o(()=>[t(y,{class:"avatar-uploader",action:"","show-file-list":!1},{default:o(()=>[l.avatar?(s(),v("img",{key:0,src:l.avatar,class:"avatar"},null,8,he)):(s(),g(S,{key:1,size:24,color:"#dcdfe6",class:"avatar-uploader-icon"},{default:o(()=>[t(w(ve))]),_:1}))]),_:1})]),_:1}),t(m,{label:"用户名",prop:"userName"},{default:o(()=>[t(I,{modelValue:l.userName,"onUpdate:modelValue":a[0]||(a[0]=h=>l.userName=h)},null,8,["modelValue"])]),_:1}),t(m,{label:"密码",prop:"passWord"},{default:o(()=>[t(I,{modelValue:l.passWord,"onUpdate:modelValue":a[1]||(a[1]=h=>l.passWord=h),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(m,{label:"语言",prop:"language"},{default:o(()=>[t(k,{modelValue:l.language,"onUpdate:modelValue":a[2]||(a[2]=h=>l.language=h)},{default:o(()=>[t(u,{label:"中文（简体）",value:"中文（简体）"}),t(u,{label:"中文（繁体）",value:"中文（繁体）"})]),_:1},8,["modelValue"])]),_:1}),t(m,{label:"时区",prop:"timeZone"},{default:o(()=>[t(k,{modelValue:l.timeZone,"onUpdate:modelValue":a[3]||(a[3]=h=>l.timeZone=h)},{default:o(()=>[t(u,{label:"中国 北京（GMT+8）",value:"中中国 北京（GMT+8）"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}}),ke=L(ye,[["__scopeId","data-v-da805ec3"]]),xe=r=>(z("data-v-6142339b"),r=r(),G(),r),Ve={class:"user-info"},Ie=["src"],Ce={class:"text"},Se={class:"name"},Ae={class:"popover"},we={class:"user-setting"},$e={class:"choose-box"},Me=xe(()=>_("p",null,"当前账号开通多个天工 API Key，请选择应用平台使用的 API Key",-1)),Le={class:"dialog-footer"},Te=$({__name:"index",setup(r){let e=ue();const c=se(),l=B(!1),f=B(),i=B(!1),b=B(),a=async()=>{await c.logout(),await e.push("/logout")},S=()=>{c.apiKeys.length==0?ge({title:"提醒",customStyle:{width:"560px",maxWidth:"560px"},showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,message:"当前账号未开通天工 API Key，无法进入大模型应用平台。请前往天工平台申请 API Key。",confirmButtonText:"前往申请"}).then(()=>{c.goTg()}):c.apiKeys.length>1&&(l.value=!0)},y=()=>{le(f.value).then(()=>{fe({message:"操作成功",type:"success"})})};return(()=>{ne().then(async I=>{I.data.code!==1&&S()})})(),(I,u)=>{const k=n("svg-icon"),p=n("el-option"),x=n("el-select"),C=n("el-button"),h=n("el-dialog");return s(),v("div",Ve,[_("div",{class:"menu-avatar",ref_key:"userAvatarRef",ref:b},[_("img",{src:w(c).avatar,class:"avatar"},null,8,Ie),_("div",Ce,[_("h3",Se,N(w(c).username),1)])],512),_("div",Ae,[_("div",we,[_("div",{class:"item logout",onClick:a},[t(k,{name:"Logout",class:"icon"}),M(" 退出登录")])])]),t(h,{modelValue:l.value,"onUpdate:modelValue":u[2]||(u[2]=V=>l.value=V),width:560,title:"API Key设置"},{footer:o(()=>[_("span",Le,[t(C,{onClick:u[1]||(u[1]=V=>l.value=!1)},{default:o(()=>[M("取消")]),_:1}),t(C,{type:"primary",onClick:y},{default:o(()=>[M("确认")]),_:1})])]),default:o(()=>[_("div",$e,[Me,t(x,{modelValue:f.value,"onUpdate:modelValue":u[0]||(u[0]=V=>f.value=V),placeholder:"选择天工 API Key"},{default:o(()=>[(s(!0),v(P,null,F(w(c).apiKeys,(V,K)=>(s(),g(p,{label:V,value:V,key:K},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"]),t(ke,{dialogAccountVisible:i.value,"onUpdate:dialogAccountVisible":u[3]||(u[3]=V=>i.value=V)},null,8,["dialogAccountVisible"])])}}}),Be=L(Te,[["__scopeId","data-v-6142339b"]]),R=r=>/^(https?:|mailto:|tel:)/.test(r),Pe=["href"],Ke=$({__name:"SidebarItemLink",props:{to:{}},setup(r){const e=r;return(c,l)=>{const f=n("router-link");return w(R)(e.to)?(s(),v("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[W(c.$slots,"default")],8,Pe)):(s(),g(f,{key:1,to:e.to},{default:o(()=>[W(c.$slots,"default")]),_:3},8,["to"]))}}}),Ee={key:2},Ue=$({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(r){const e=r,c=d(()=>{var a;return(a=e.item.meta)==null?void 0:a.alwaysShow}),l=d(()=>{var a;return((a=e.item.children)==null?void 0:a.filter(S=>{var y;return!((y=S.meta)!=null&&y.hidden)}))??[]}),f=d(()=>l.value.length),i=d(()=>{const a=f.value;switch(!0){case a>1:return null;case a===1:return l.value[0];default:return{...e.item,path:""}}}),b=a=>{switch(!0){case R(a):return a;case R(e.basePath):return e.basePath;default:return ee.resolve(e.basePath,a)}};return(a,S)=>{var k;const y=n("SvgIcon"),m=n("el-menu-item"),I=n("sidebar-item",!0),u=n("el-sub-menu");return(k=e.item.meta)!=null&&k.hidden?A("",!0):(s(),v("div",{key:0,class:q({"simple-mode":e.isCollapse&&!a.isTop,"first-level":e.isFirstLevel})},[!c.value&&i.value&&!i.value.children?(s(),v(P,{key:0},[i.value.meta?(s(),g(Ke,{key:0,to:b(i.value.path)},{default:o(()=>[t(m,{index:b(i.value.path)},de({default:o(()=>[i.value.meta.svgIcon?(s(),g(y,{key:0,name:i.value.meta.svgIcon},null,8,["name"])):i.value.meta.elIcon?(s(),g(H(i.value.meta.elIcon),{key:1,class:"el-icon"})):A("",!0)]),_:2},[i.value.meta.title?{name:"title",fn:o(()=>[M(N(i.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):A("",!0)],64)):(s(),g(u,{key:1,index:b(e.item.path),teleported:""},{title:o(()=>{var p,x,C;return[(p=e.item.meta)!=null&&p.svgIcon?(s(),g(y,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(x=e.item.meta)!=null&&x.elIcon?(s(),g(H(e.item.meta.elIcon),{key:1,class:"el-icon"})):A("",!0),(C=e.item.meta)!=null&&C.title?(s(),v("span",Ee,N(e.item.meta.title),1)):A("",!0)]}),default:o(()=>[e.item.children?(s(!0),v(P,{key:0},F(e.item.children,p=>(s(),g(I,{key:p.path,item:p,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":b(p.path)},null,8,["item","is-collapse","base-path"]))),128)):A("",!0)]),_:1},8,["index"]))],2))}}}),Ne=L(Ue,[["__scopeId","data-v-112e9fa3"]]),Re=r=>(z("data-v-80aba090"),r=r(),G(),r),Fe={class:"layout-logo-container"},De={class:"layout-logo-box"},Oe={class:"beta-box"},We=Re(()=>_("span",{class:"beta"},"beta",-1)),He={key:0,class:"layout-logo-text"},Ze=$({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(r){return(e,c)=>{const l=n("svg-icon"),f=n("router-link");return s(),v("div",Fe,[t(pe,{name:"layout-logo-fade"},{default:o(()=>[t(f,{to:"/"},{default:o(()=>[_("div",De,[t(l,{name:"LTLogo",color:"#fff",class:"LTLogo"}),_("div",Oe,[We,e.collapse?A("",!0):(s(),v("h2",He,"SkyAgents"))])])]),_:1})]),_:1})])}}}),ze=L(Ze,[["__scopeId","data-v-80aba090"]]),Ge=$({__name:"index",setup(r){_e(T=>({c471a3de:j.value,"7cad8ac5":J.value,"781f372d":X.value,"45a54940":D.value}));const e=U("--v3-sidebar-menu-bg-color"),c=U("--v3-sidebar-menu-text-color"),l=U("--v3-sidebar-menu-active-text-color"),f=me(),i=te(),b=ce(),a=re(),{sidebar:S,device:y}=Z(i),{layoutMode:m,showLogo:I}=Z(a),u=d(()=>{const{meta:{activeMenu:T},path:O}=f;return T||O}),k=d(()=>!S.value.opened),p=d(()=>m.value==="left"),x=d(()=>m.value==="top"),C=d(()=>y.value===oe.Mobile),h=d(()=>p.value&&I.value),V=d(()=>p.value?e:void 0),K=d(()=>p.value?c:void 0),D=d(()=>p.value?l:void 0),J=d(()=>m.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),X=d(()=>m.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),j=d(()=>m.value==="top"?"none":"block");return(T,O)=>{const Q=n("el-menu"),Y=n("el-scrollbar");return s(),v("div",{class:q({"has-logo":h.value})},[h.value?(s(),g(ze,{key:0,collapse:k.value},null,8,["collapse"])):A("",!0),t(Y,{"wrap-class":"scrollbar-wrapper"},{default:o(()=>[t(Q,{"default-active":u.value,collapse:k.value&&!x.value,"background-color":V.value,"text-color":K.value,"active-text-color":D.value,"unique-opened":!0,"collapse-transition":!1,mode:x.value&&!C.value?"horizontal":"vertical"},{default:o(()=>[(s(!0),v(P,null,F(w(b).routes,E=>(s(),g(Ne,{key:E.path,item:E,"base-path":E.path,"is-collapse":k.value,"is-top":x.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1}),t(Be)],2)}}}),qe=L(Ge,[["__scopeId","data-v-64ec0f08"]]),Je={class:"app-wrapper"},Xe={class:"main-container"},je=$({__name:"Left",setup(r){return(e,c)=>(s(),v("div",Je,[t(w(qe),{class:"sidebar-container"}),_("div",Xe,[t(w(ae),{class:"app-main"})])]))}});const Qe=L(je,[["__scopeId","data-v-658ad307"]]),lt=$({__name:"index",setup(r){return(e,c)=>(s(),v("div",null,[t(Qe)]))}});export{lt as default};
