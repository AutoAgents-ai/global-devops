import{p as Q,u as Y,D as ee,A as te}from"./index.vue_vue_type_style_index_0_scoped_64ec0f08_lang-c07c0461.js";import{_ as L,u as oe,s as ae,a as se,b as le,c as ne}from"./index-63ae66d1.js";import{H as w,_ as ce,ah as n,l as s,O as g,P as o,p as v,V as t,T as $,m as f,u as A,r as T,U as E,F as B,a8 as F,aD as re,aE as ie,I as H,e as d,aa as ue,R as W,S,J as z,X as de,aF as pe,aG as _e,aH as Z}from"./vue-82a6b7fc.js";import{p as me,E as ve}from"./element-4990942a.js";import{g as N}from"./index-7b02960f.js";import"./vxe-45effba2.js";const fe=["src"],ge={class:"dialog-footer"},be=w({__name:"EditAccount",props:{dialogAccountVisible:{type:Boolean}},emits:["update:dialogAccountVisible"],setup(p,{emit:e}){const i=e,l=ce({avatar:"",userName:"",passWord:"",language:"",timeZone:""}),b=()=>{i("update:dialogAccountVisible",!1)},r=()=>{i("update:dialogAccountVisible",!1)};return(y,a)=>{const C=n("el-icon"),V=n("el-upload"),u=n("el-form-item"),_=n("el-input"),x=n("el-option"),k=n("el-select"),m=n("el-form"),h=n("el-button"),I=n("el-dialog");return s(),g(I,{"model-value":y.dialogAccountVisible,"append-to-body":"",width:480,title:"账户设置"},{footer:o(()=>[v("span",ge,[t(h,{onClick:b},{default:o(()=>[$("取消")]),_:1}),t(h,{type:"primary",onClick:r},{default:o(()=>[$("确认")]),_:1})])]),default:o(()=>[t(m,{ref:"accountFormRef",model:l,rules:y.rules,"label-position":"top"},{default:o(()=>[t(u,{prop:"avatar",class:"form-item-uploader"},{default:o(()=>[t(V,{class:"avatar-uploader",action:"","show-file-list":!1},{default:o(()=>[l.avatar?(s(),f("img",{key:0,src:l.avatar,class:"avatar"},null,8,fe)):(s(),g(C,{key:1,size:24,color:"#dcdfe6",class:"avatar-uploader-icon"},{default:o(()=>[t(A(me))]),_:1}))]),_:1})]),_:1}),t(u,{label:"用户名",prop:"userName"},{default:o(()=>[t(_,{modelValue:l.userName,"onUpdate:modelValue":a[0]||(a[0]=c=>l.userName=c)},null,8,["modelValue"])]),_:1}),t(u,{label:"密码",prop:"passWord"},{default:o(()=>[t(_,{modelValue:l.passWord,"onUpdate:modelValue":a[1]||(a[1]=c=>l.passWord=c),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(u,{label:"语言",prop:"language"},{default:o(()=>[t(k,{modelValue:l.language,"onUpdate:modelValue":a[2]||(a[2]=c=>l.language=c)},{default:o(()=>[t(x,{label:"中文（简体）",value:"中文（简体）"}),t(x,{label:"中文（繁体）",value:"中文（繁体）"})]),_:1},8,["modelValue"])]),_:1}),t(u,{label:"时区",prop:"timeZone"},{default:o(()=>[t(k,{modelValue:l.timeZone,"onUpdate:modelValue":a[3]||(a[3]=c=>l.timeZone=c)},{default:o(()=>[t(x,{label:"中国 北京（GMT+8）",value:"中中国 北京（GMT+8）"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}}),he=L(be,[["__scopeId","data-v-da805ec3"]]),ye=p=>(re("data-v-2d3da2ef"),p=p(),ie(),p),ke={class:"user-info"},Ve=["src"],xe={class:"text"},Ce={class:"name"},Ie={class:"popover"},Se={class:"user-setting"},Ae={class:"choose-box"},we=ye(()=>v("p",null,"当前账号开通多个天工 API Key，请选择应用平台使用的 API Key",-1)),$e={class:"dialog-footer"},Le=w({__name:"index",setup(p){const e=oe(),i=T(!1),l=T(),b=T(!1),r=T(),y=()=>{},a=()=>{},C=()=>{ae(l.value).then(()=>{ve({message:"操作成功",type:"success"})})};return(()=>{se().then(async u=>{u.data.code})})(),(u,_)=>{const x=n("svg-icon"),k=n("el-option"),m=n("el-select"),h=n("el-button"),I=n("el-dialog");return s(),f("div",ke,[v("div",{class:"menu-avatar",ref_key:"userAvatarRef",ref:r},[v("img",{src:A(e).avatar,class:"avatar"},null,8,Ve),v("div",xe,[v("h3",Ce,E(A(e).username),1)])],512),v("div",Ie,[v("div",Se,[v("div",{class:"item",onClick:a},[t(x,{name:"key",class:"icon"}),$(" API Key 设置")]),v("div",{class:"item logout",onClick:y},[t(x,{name:"Logout",class:"icon"}),$(" 退出登录")])])]),t(I,{modelValue:i.value,"onUpdate:modelValue":_[2]||(_[2]=c=>i.value=c),width:560,title:"API Key设置"},{footer:o(()=>[v("span",$e,[t(h,{onClick:_[1]||(_[1]=c=>i.value=!1)},{default:o(()=>[$("取消")]),_:1}),t(h,{type:"primary",onClick:C},{default:o(()=>[$("确认")]),_:1})])]),default:o(()=>[v("div",Ae,[we,t(m,{modelValue:l.value,"onUpdate:modelValue":_[0]||(_[0]=c=>l.value=c),placeholder:"选择天工 API Key"},{default:o(()=>[(s(!0),f(B,null,F(A(e).apiKeys,(c,P)=>(s(),g(k,{label:c,value:c,key:P},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"]),t(he,{dialogAccountVisible:b.value,"onUpdate:dialogAccountVisible":_[3]||(_[3]=c=>b.value=c)},null,8,["dialogAccountVisible"])])}}}),Me=L(Le,[["__scopeId","data-v-2d3da2ef"]]),K=p=>/^(https?:|mailto:|tel:)/.test(p),Te=["href"],Be=w({__name:"SidebarItemLink",props:{to:{}},setup(p){const e=p;return(i,l)=>{const b=n("router-link");return A(K)(e.to)?(s(),f("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[H(i.$slots,"default")],8,Te)):(s(),g(b,{key:1,to:e.to},{default:o(()=>[H(i.$slots,"default")]),_:3},8,["to"]))}}}),Pe={key:2},Ue=w({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(p){const e=p,i=d(()=>{var a;return(a=e.item.meta)==null?void 0:a.alwaysShow}),l=d(()=>{var a;return((a=e.item.children)==null?void 0:a.filter(C=>{var V;return!((V=C.meta)!=null&&V.hidden)}))??[]}),b=d(()=>l.value.length),r=d(()=>{const a=b.value;switch(!0){case a>1:return null;case a===1:return l.value[0];default:return{...e.item,path:""}}}),y=a=>{switch(!0){case K(a):return a;case K(e.basePath):return e.basePath;default:return Q.resolve(e.basePath,a)}};return(a,C)=>{var k;const V=n("SvgIcon"),u=n("el-menu-item"),_=n("sidebar-item",!0),x=n("el-sub-menu");return(k=e.item.meta)!=null&&k.hidden?S("",!0):(s(),f("div",{key:0,class:z({"simple-mode":e.isCollapse&&!a.isTop,"first-level":e.isFirstLevel})},[!i.value&&r.value&&!r.value.children?(s(),f(B,{key:0},[r.value.meta?(s(),g(Be,{key:0,to:y(r.value.path)},{default:o(()=>[t(u,{index:y(r.value.path)},ue({default:o(()=>[r.value.meta.svgIcon?(s(),g(V,{key:0,name:r.value.meta.svgIcon},null,8,["name"])):r.value.meta.elIcon?(s(),g(W(r.value.meta.elIcon),{key:1,class:"el-icon"})):S("",!0)]),_:2},[r.value.meta.title?{name:"title",fn:o(()=>[$(E(r.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):S("",!0)],64)):(s(),g(x,{key:1,index:y(e.item.path),teleported:""},{title:o(()=>{var m,h,I;return[(m=e.item.meta)!=null&&m.svgIcon?(s(),g(V,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(h=e.item.meta)!=null&&h.elIcon?(s(),g(W(e.item.meta.elIcon),{key:1,class:"el-icon"})):S("",!0),(I=e.item.meta)!=null&&I.title?(s(),f("span",Pe,E(e.item.meta.title),1)):S("",!0)]}),default:o(()=>[e.item.children?(s(!0),f(B,{key:0},F(e.item.children,m=>(s(),g(_,{key:m.path,item:m,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":y(m.path)},null,8,["item","is-collapse","base-path"]))),128)):S("",!0)]),_:1},8,["index"]))],2))}}}),Ne=L(Ue,[["__scopeId","data-v-112e9fa3"]]),Ee={class:"layout-logo-container"},Ke={class:"layout-logo-box"},Fe={key:0,class:"layout-logo-text"},Re=w({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(p){return(e,i)=>{const l=n("svg-icon"),b=n("router-link");return s(),f("div",Ee,[t(de,{name:"layout-logo-fade"},{default:o(()=>[t(b,{to:"/"},{default:o(()=>[v("div",Ke,[t(l,{name:"LTLogo",color:"#fff",class:"LTLogo"}),e.collapse?S("",!0):(s(),f("h2",Fe,"SkyAgents"))])]),_:1})]),_:1})])}}}),De=L(Re,[["__scopeId","data-v-93af50d9"]]),He=w({__name:"index",setup(p){pe(M=>({c471a3de:J.value,"7cad8ac5":O.value,"781f372d":q.value,"45a54940":R.value}));const e=N("--v3-sidebar-menu-bg-color"),i=N("--v3-sidebar-menu-text-color"),l=N("--v3-sidebar-menu-active-text-color"),b=_e(),r=Y(),y=le(),a=ne(),{sidebar:C,device:V}=Z(r),{layoutMode:u,showLogo:_}=Z(a),x=d(()=>{const{meta:{activeMenu:M},path:D}=b;return M||D}),k=d(()=>!C.value.opened),m=d(()=>u.value==="left"),h=d(()=>u.value==="top"),I=d(()=>V.value===ee.Mobile),c=d(()=>m.value&&_.value),P=d(()=>m.value?e:void 0),G=d(()=>m.value?i:void 0),R=d(()=>m.value?l:void 0),O=d(()=>u.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),q=d(()=>u.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),J=d(()=>u.value==="top"?"none":"block");return(M,D)=>{const X=n("el-menu"),j=n("el-scrollbar");return s(),f("div",{class:z({"has-logo":c.value})},[c.value?(s(),g(De,{key:0,collapse:k.value},null,8,["collapse"])):S("",!0),t(j,{"wrap-class":"scrollbar-wrapper"},{default:o(()=>[t(X,{"default-active":x.value,collapse:k.value&&!h.value,"background-color":P.value,"text-color":G.value,"active-text-color":R.value,"unique-opened":!0,"collapse-transition":!1,mode:h.value&&!I.value?"horizontal":"vertical"},{default:o(()=>[(s(!0),f(B,null,F(A(y).routes,U=>(s(),g(Ne,{key:U.path,item:U,"base-path":U.path,"is-collapse":k.value,"is-top":h.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1}),t(Me)],2)}}}),We=L(He,[["__scopeId","data-v-64ec0f08"]]),Ze={class:"app-wrapper"},ze={class:"main-container"},Ge=w({__name:"Left",setup(p){return(e,i)=>(s(),f("div",Ze,[t(A(We),{class:"sidebar-container"}),v("div",ze,[t(A(te),{class:"app-main"})])]))}});const Oe=L(Ge,[["__scopeId","data-v-6af6aa62"]]),et=w({__name:"index",setup(p){return(e,i)=>(s(),f("div",null,[t(Oe)]))}});export{et as default};