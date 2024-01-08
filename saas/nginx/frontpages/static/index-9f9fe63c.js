import{p as X,u as Y,D as ee,A as te}from"./index.vue_vue_type_style_index_0_scoped_c7b71ed8_lang-d8f5fb32.js";import{_ as B,C as oe,u as ae,s as se,a as le,b as ne,c as ce}from"./index-87a8c386.js";import{l as $,Z as re,ag as n,m as s,M as f,O as o,q as m,U as t,S as M,p as v,u as w,aD as ie,r as K,T as U,F as L,a7 as F,aE as ue,aF as de,H as W,e as u,a9 as pe,Q as Z,R as A,I as z,W as _e,aG as me,aH as ve,aI as H}from"./vue-417f18eb.js";import{p as fe,E as ge,f as he}from"./element-a21ceda4.js";import{g as P}from"./index-ca8e71c4.js";import"./vxe-84ff863c.js";const be=["src"],ye={class:"dialog-footer"},ke=$({__name:"EditAccount",props:{dialogAccountVisible:{type:Boolean}},emits:["update:dialogAccountVisible"],setup(d,{emit:e}){const c=e,l=re({avatar:"",userName:"",passWord:"",language:"",timeZone:""}),h=()=>{c("update:dialogAccountVisible",!1)},r=()=>{c("update:dialogAccountVisible",!1)};return(b,a)=>{const S=n("el-icon"),y=n("el-upload"),_=n("el-form-item"),C=n("el-input"),i=n("el-option"),k=n("el-select"),p=n("el-form"),x=n("el-button"),I=n("el-dialog");return s(),f(I,{"model-value":b.dialogAccountVisible,"append-to-body":"",width:480,title:"账户设置"},{footer:o(()=>[m("span",ye,[t(x,{onClick:h},{default:o(()=>[M("取消")]),_:1}),t(x,{type:"primary",onClick:r},{default:o(()=>[M("确认")]),_:1})])]),default:o(()=>[t(p,{ref:"accountFormRef",model:l,rules:b.rules,"label-position":"top"},{default:o(()=>[t(_,{prop:"avatar",class:"form-item-uploader"},{default:o(()=>[t(y,{class:"avatar-uploader",action:"","show-file-list":!1},{default:o(()=>[l.avatar?(s(),v("img",{key:0,src:l.avatar,class:"avatar"},null,8,be)):(s(),f(S,{key:1,size:24,color:"#dcdfe6",class:"avatar-uploader-icon"},{default:o(()=>[t(w(fe))]),_:1}))]),_:1})]),_:1}),t(_,{label:"用户名",prop:"userName"},{default:o(()=>[t(C,{modelValue:l.userName,"onUpdate:modelValue":a[0]||(a[0]=g=>l.userName=g)},null,8,["modelValue"])]),_:1}),t(_,{label:"密码",prop:"passWord"},{default:o(()=>[t(C,{modelValue:l.passWord,"onUpdate:modelValue":a[1]||(a[1]=g=>l.passWord=g),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(_,{label:"语言",prop:"language"},{default:o(()=>[t(k,{modelValue:l.language,"onUpdate:modelValue":a[2]||(a[2]=g=>l.language=g)},{default:o(()=>[t(i,{label:"中文（简体）",value:"中文（简体）"}),t(i,{label:"中文（繁体）",value:"中文（繁体）"})]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"时区",prop:"timeZone"},{default:o(()=>[t(k,{modelValue:l.timeZone,"onUpdate:modelValue":a[3]||(a[3]=g=>l.timeZone=g)},{default:o(()=>[t(i,{label:"中国 北京（GMT+8）",value:"中中国 北京（GMT+8）"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}}),xe=B(ke,[["__scopeId","data-v-0e7427aa"]]),Ve=d=>(ue("data-v-266e1ad6"),d=d(),de(),d),Ce={class:"user-info"},Ie=["src"],Se={class:"text"},Ae={class:"name"},we={class:"popover"},$e={class:"user-setting"},Me={class:"choose-box"},Be=Ve(()=>m("p",null,"当前账号开通多个天工 API Key，请选择应用平台使用的 API Key",-1)),Te={class:"dialog-footer"},Ke=$({__name:"index",setup(d){let e=ie();const c=JSON.parse(localStorage.getItem(oe.USER_INFO)),l=K(!1),h=K(),r=K(!1),b=K(),a=async()=>{await ae().logout(),await e.push("/logout")},S=()=>{c.apiKeys.length==0?he({title:"提醒",customStyle:{width:"560px",maxWidth:"560px"},showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,message:"当前账号未开通天工 API Key，无法进入大模型应用平台。请前往天工平台申请 API Key。",confirmButtonText:"前往申请"}).then(()=>{c.goTg()}):c.apiKeys.length>1&&(l.value=!0)},y=()=>{se(h.value).then(()=>{ge({message:"操作成功",type:"success"})})};return(()=>{le().then(async C=>{C.data.code!==1&&S()})})(),(C,i)=>{const k=n("svg-icon"),p=n("el-option"),x=n("el-select"),I=n("el-button"),g=n("el-dialog");return s(),v("div",Ce,[m("div",{class:"menu-avatar",ref_key:"userAvatarRef",ref:b},[m("img",{src:w(c).avatar,class:"avatar"},null,8,Ie),m("div",Se,[m("h3",Ae,U(w(c).name),1)])],512),m("div",we,[m("div",$e,[m("div",{class:"item logout",onClick:a},[t(k,{name:"Logout",class:"icon"}),M(" 退出登录")])])]),t(g,{modelValue:l.value,"onUpdate:modelValue":i[2]||(i[2]=V=>l.value=V),width:560,title:"API Key设置"},{footer:o(()=>[m("span",Te,[t(I,{onClick:i[1]||(i[1]=V=>l.value=!1)},{default:o(()=>[M("取消")]),_:1}),t(I,{type:"primary",onClick:y},{default:o(()=>[M("确认")]),_:1})])]),default:o(()=>[m("div",Me,[Be,t(x,{modelValue:h.value,"onUpdate:modelValue":i[0]||(i[0]=V=>h.value=V),placeholder:"选择天工 API Key"},{default:o(()=>[(s(!0),v(L,null,F(w(c).apiKeys,(V,E)=>(s(),f(p,{label:V,value:V,key:E},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"]),t(xe,{dialogAccountVisible:r.value,"onUpdate:dialogAccountVisible":i[3]||(i[3]=V=>r.value=V)},null,8,["dialogAccountVisible"])])}}}),Le=B(Ke,[["__scopeId","data-v-266e1ad6"]]),R=d=>/^(https?:|mailto:|tel:)/.test(d),Ee=["href"],Ne=$({__name:"SidebarItemLink",props:{to:{}},setup(d){const e=d;return(c,l)=>{const h=n("router-link");return w(R)(e.to)?(s(),v("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[W(c.$slots,"default")],8,Ee)):(s(),f(h,{key:1,to:e.to},{default:o(()=>[W(c.$slots,"default")]),_:3},8,["to"]))}}}),Pe={key:2},Ue=$({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(d){const e=d,c=u(()=>{var a;return(a=e.item.meta)==null?void 0:a.alwaysShow}),l=u(()=>{var a;return((a=e.item.children)==null?void 0:a.filter(S=>{var y;return!((y=S.meta)!=null&&y.hidden)}))??[]}),h=u(()=>l.value.length),r=u(()=>{const a=h.value;switch(!0){case a>1:return null;case a===1:return l.value[0];default:return{...e.item,path:""}}}),b=a=>{switch(!0){case R(a):return a;case R(e.basePath):return e.basePath;default:return X.resolve(e.basePath,a)}};return(a,S)=>{var k;const y=n("SvgIcon"),_=n("el-menu-item"),C=n("sidebar-item",!0),i=n("el-sub-menu");return(k=e.item.meta)!=null&&k.hidden?A("",!0):(s(),v("div",{key:0,class:z({"simple-mode":e.isCollapse&&!a.isTop,"first-level":e.isFirstLevel})},[!c.value&&r.value&&!r.value.children?(s(),v(L,{key:0},[r.value.meta?(s(),f(Ne,{key:0,to:b(r.value.path)},{default:o(()=>[t(_,{index:b(r.value.path)},pe({default:o(()=>[r.value.meta.svgIcon?(s(),f(y,{key:0,name:r.value.meta.svgIcon},null,8,["name"])):r.value.meta.elIcon?(s(),f(Z(r.value.meta.elIcon),{key:1,class:"el-icon"})):A("",!0)]),_:2},[r.value.meta.title?{name:"title",fn:o(()=>[M(U(r.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):A("",!0)],64)):(s(),f(i,{key:1,index:b(e.item.path),teleported:""},{title:o(()=>{var p,x,I;return[(p=e.item.meta)!=null&&p.svgIcon?(s(),f(y,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(x=e.item.meta)!=null&&x.elIcon?(s(),f(Z(e.item.meta.elIcon),{key:1,class:"el-icon"})):A("",!0),(I=e.item.meta)!=null&&I.title?(s(),v("span",Pe,U(e.item.meta.title),1)):A("",!0)]}),default:o(()=>[e.item.children?(s(!0),v(L,{key:0},F(e.item.children,p=>(s(),f(C,{key:p.path,item:p,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":b(p.path)},null,8,["item","is-collapse","base-path"]))),128)):A("",!0)]),_:1},8,["index"]))],2))}}}),Re=B(Ue,[["__scopeId","data-v-688ba5d0"]]),Fe={class:"layout-logo-container"},Oe={class:"layout-logo-box"},De={class:"beta-box"},We={key:0,class:"layout-logo-text"},Ze=$({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(d){return(e,c)=>{const l=n("router-link");return s(),v("div",Fe,[t(_e,{name:"layout-logo-fade"},{default:o(()=>[t(l,{to:"/"},{default:o(()=>[m("div",Oe,[m("div",De,[e.collapse?A("",!0):(s(),v("h2",We,"灵搭平台"))])])]),_:1})]),_:1})])}}}),He=B(Ze,[["__scopeId","data-v-1fd6d5ab"]]),ze=$({__name:"index",setup(d){me(T=>({"6722f728":J.value,"2f202f4e":G.value,"587add76":q.value,"59ec4889":O.value}));const e=P("--v3-sidebar-menu-bg-color"),c=P("--v3-sidebar-menu-text-color"),l=P("--v3-sidebar-menu-active-text-color"),h=ve(),r=Y(),b=ne(),a=ce(),{sidebar:S,device:y}=H(r),{layoutMode:_,showLogo:C}=H(a),i=u(()=>{const{meta:{activeMenu:T},path:D}=h;return T||D}),k=u(()=>!S.value.opened),p=u(()=>_.value==="left"),x=u(()=>_.value==="top"),I=u(()=>y.value===ee.Mobile),g=u(()=>p.value&&C.value),V=u(()=>p.value?e:void 0),E=u(()=>p.value?c:void 0),O=u(()=>p.value?l:void 0),G=u(()=>_.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),q=u(()=>_.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),J=u(()=>_.value==="top"?"none":"block");return(T,D)=>{const Q=n("el-menu"),j=n("el-scrollbar");return s(),v("div",{class:z({"has-logo":g.value})},[g.value?(s(),f(He,{key:0,collapse:k.value},null,8,["collapse"])):A("",!0),t(j,{"wrap-class":"scrollbar-wrapper"},{default:o(()=>[t(Q,{"default-active":i.value,collapse:k.value&&!x.value,"background-color":V.value,"text-color":E.value,"active-text-color":O.value,"unique-opened":!0,"collapse-transition":!1,mode:x.value&&!I.value?"horizontal":"vertical"},{default:o(()=>[(s(!0),v(L,null,F(w(b).routes,N=>(s(),f(Re,{key:N.path,item:N,"base-path":N.path,"is-collapse":k.value,"is-top":x.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1}),t(Le)],2)}}}),Ge=B(ze,[["__scopeId","data-v-c7b71ed8"]]),qe={class:"app-wrapper"},Je={class:"main-container"},Qe=$({__name:"Left",setup(d){return(e,c)=>(s(),v("div",qe,[t(w(Ge),{class:"sidebar-container"}),m("div",Je,[t(w(te),{class:"app-main"})])]))}});const je=B(Qe,[["__scopeId","data-v-9480337c"]]),st=$({__name:"index",setup(d){return(e,c)=>(s(),v("div",null,[t(je)]))}});export{st as default};