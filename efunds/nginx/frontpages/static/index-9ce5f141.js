import{p as Q,u as Y,D as ee,A as te}from"./index.vue_vue_type_style_index_0_scoped_c7b71ed8_lang-62b37eef.js";import{_ as M,u as oe,s as ae,a as le,b as se,c as ne}from"./index-60cbbabb.js";import{H as S,_ as re,ah as r,l,O as m,P as o,p as k,V as t,T as $,m as v,u as I,r as B,U as E,F as L,a8 as N,aD as ce,aE as ue,I as D,e as d,aa as ie,R as O,S as w,J as G,X as de,aF as pe,aG as _e,aH as W}from"./vue-3e7b265f.js";import{p as me,E as ve,e as fe}from"./element-af2222c3.js";import{g as K}from"./index-a49f5380.js";import"./vxe-d747ed40.js";const be=["src"],he={class:"dialog-footer"},ge=S({__name:"EditAccount",props:{dialogAccountVisible:{type:Boolean}},emits:["update:dialogAccountVisible"],setup(p,{emit:e}){const u=e,s=re({avatar:"",userName:"",passWord:"",language:"",timeZone:""}),f=()=>{u("update:dialogAccountVisible",!1)},i=()=>{u("update:dialogAccountVisible",!1)};return(g,a)=>{const A=r("el-icon"),b=r("el-upload"),n=r("el-form-item"),x=r("el-input"),V=r("el-option"),h=r("el-select"),_=r("el-form"),c=r("el-button"),C=r("el-dialog");return l(),m(C,{"model-value":g.dialogAccountVisible,"append-to-body":"",width:480,title:"账户设置"},{footer:o(()=>[k("span",he,[t(c,{onClick:f},{default:o(()=>[$("取消")]),_:1}),t(c,{type:"primary",onClick:i},{default:o(()=>[$("确认")]),_:1})])]),default:o(()=>[t(_,{ref:"accountFormRef",model:s,rules:g.rules,"label-position":"top"},{default:o(()=>[t(n,{prop:"avatar",class:"form-item-uploader"},{default:o(()=>[t(b,{class:"avatar-uploader",action:"","show-file-list":!1},{default:o(()=>[s.avatar?(l(),v("img",{key:0,src:s.avatar,class:"avatar"},null,8,be)):(l(),m(A,{key:1,size:24,color:"#dcdfe6",class:"avatar-uploader-icon"},{default:o(()=>[t(I(me))]),_:1}))]),_:1})]),_:1}),t(n,{label:"用户名",prop:"userName"},{default:o(()=>[t(x,{modelValue:s.userName,"onUpdate:modelValue":a[0]||(a[0]=y=>s.userName=y)},null,8,["modelValue"])]),_:1}),t(n,{label:"密码",prop:"passWord"},{default:o(()=>[t(x,{modelValue:s.passWord,"onUpdate:modelValue":a[1]||(a[1]=y=>s.passWord=y),type:"password","show-password":""},null,8,["modelValue"])]),_:1}),t(n,{label:"语言",prop:"language"},{default:o(()=>[t(h,{modelValue:s.language,"onUpdate:modelValue":a[2]||(a[2]=y=>s.language=y)},{default:o(()=>[t(V,{label:"中文（简体）",value:"中文（简体）"}),t(V,{label:"中文（繁体）",value:"中文（繁体）"})]),_:1},8,["modelValue"])]),_:1}),t(n,{label:"时区",prop:"timeZone"},{default:o(()=>[t(h,{modelValue:s.timeZone,"onUpdate:modelValue":a[3]||(a[3]=y=>s.timeZone=y)},{default:o(()=>[t(V,{label:"中国 北京（GMT+8）",value:"中中国 北京（GMT+8）"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["model-value"])}}}),ye=M(ge,[["__scopeId","data-v-0e7427aa"]]),ke=p=>(ce("data-v-a50f5d45"),p=p(),ue(),p),Ve={class:"user-info"},xe=["src"],Ce={class:"text"},Ie={class:"name"},Se={class:"choose-box"},Ae=ke(()=>k("p",null,"当前账号开通多个天工 API Key，请选择应用平台使用的 API Key",-1)),we={class:"dialog-footer"},Me=S({__name:"index",setup(p){const e=oe(),u=B(!1),s=B(),f=B(!1),i=B(),g=()=>{e.apiKeys.length==0?fe({title:"提醒",customStyle:{width:"560px",maxWidth:"560px"},showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,message:"当前账号未开通天工 API Key，无法进入大模型应用平台。请前往天工平台申请 API Key。",confirmButtonText:"前往申请"}).then(()=>{e.goTg()}):e.apiKeys.length>1&&(u.value=!0)},a=()=>{ae(s.value).then(()=>{ve({message:"操作成功",type:"success"})})};return(()=>{le().then(async b=>{b.data.code!==1&&g()})})(),(b,n)=>{const x=r("el-option"),V=r("el-select"),h=r("el-button"),_=r("el-dialog");return l(),v("div",Ve,[k("div",{class:"menu-avatar",ref_key:"userAvatarRef",ref:i},[k("img",{src:I(e).avatar,class:"avatar"},null,8,xe),k("div",Ce,[k("h3",Ie,E(I(e).username),1)])],512),t(_,{modelValue:u.value,"onUpdate:modelValue":n[2]||(n[2]=c=>u.value=c),width:560,title:"API Key设置"},{footer:o(()=>[k("span",we,[t(h,{onClick:n[1]||(n[1]=c=>u.value=!1)},{default:o(()=>[$("取消")]),_:1}),t(h,{type:"primary",onClick:a},{default:o(()=>[$("确认")]),_:1})])]),default:o(()=>[k("div",Se,[Ae,t(V,{modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=c=>s.value=c),placeholder:"选择天工 API Key"},{default:o(()=>[(l(!0),v(L,null,N(I(e).apiKeys,(c,C)=>(l(),m(x,{label:c,value:c,key:C},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"]),t(ye,{dialogAccountVisible:f.value,"onUpdate:dialogAccountVisible":n[3]||(n[3]=c=>f.value=c)},null,8,["dialogAccountVisible"])])}}}),$e=M(Me,[["__scopeId","data-v-a50f5d45"]]),U=p=>/^(https?:|mailto:|tel:)/.test(p),Te=["href"],Be=S({__name:"SidebarItemLink",props:{to:{}},setup(p){const e=p;return(u,s)=>{const f=r("router-link");return I(U)(e.to)?(l(),v("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[D(u.$slots,"default")],8,Te)):(l(),m(f,{key:1,to:e.to},{default:o(()=>[D(u.$slots,"default")]),_:3},8,["to"]))}}}),Le={key:2},Pe=S({__name:"SidebarItem",props:{item:{},isCollapse:{type:Boolean,default:!1},isTop:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{default:""}},setup(p){const e=p,u=d(()=>{var a;return(a=e.item.meta)==null?void 0:a.alwaysShow}),s=d(()=>{var a;return((a=e.item.children)==null?void 0:a.filter(A=>{var b;return!((b=A.meta)!=null&&b.hidden)}))??[]}),f=d(()=>s.value.length),i=d(()=>{const a=f.value;switch(!0){case a>1:return null;case a===1:return s.value[0];default:return{...e.item,path:""}}}),g=a=>{switch(!0){case U(a):return a;case U(e.basePath):return e.basePath;default:return Q.resolve(e.basePath,a)}};return(a,A)=>{var h;const b=r("SvgIcon"),n=r("el-menu-item"),x=r("sidebar-item",!0),V=r("el-sub-menu");return(h=e.item.meta)!=null&&h.hidden?w("",!0):(l(),v("div",{key:0,class:G({"simple-mode":e.isCollapse&&!a.isTop,"first-level":e.isFirstLevel})},[!u.value&&i.value&&!i.value.children?(l(),v(L,{key:0},[i.value.meta?(l(),m(Be,{key:0,to:g(i.value.path)},{default:o(()=>[t(n,{index:g(i.value.path)},ie({default:o(()=>[i.value.meta.svgIcon?(l(),m(b,{key:0,name:i.value.meta.svgIcon},null,8,["name"])):i.value.meta.elIcon?(l(),m(O(i.value.meta.elIcon),{key:1,class:"el-icon"})):w("",!0)]),_:2},[i.value.meta.title?{name:"title",fn:o(()=>[$(E(i.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):w("",!0)],64)):(l(),m(V,{key:1,index:g(e.item.path),teleported:""},{title:o(()=>{var _,c,C;return[(_=e.item.meta)!=null&&_.svgIcon?(l(),m(b,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):(c=e.item.meta)!=null&&c.elIcon?(l(),m(O(e.item.meta.elIcon),{key:1,class:"el-icon"})):w("",!0),(C=e.item.meta)!=null&&C.title?(l(),v("span",Le,E(e.item.meta.title),1)):w("",!0)]}),default:o(()=>[e.item.children?(l(!0),v(L,{key:0},N(e.item.children,_=>(l(),m(x,{key:_.path,item:_,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":g(_.path)},null,8,["item","is-collapse","base-path"]))),128)):w("",!0)]),_:1},8,["index"]))],2))}}}),Ke=M(Pe,[["__scopeId","data-v-688ba5d0"]]),Ee={class:"layout-logo-container"},Ue={class:"layout-logo-box"},Ne=S({__name:"index",props:{collapse:{type:Boolean,default:!0}},setup(p){return(e,u)=>{const s=r("svg-icon"),f=r("router-link");return l(),v("div",Ee,[t(de,{name:"layout-logo-fade"},{default:o(()=>[t(f,{to:"/"},{default:o(()=>[k("div",Ue,[t(s,{name:"Group",color:"#fff",class:"LTLogo"})])]),_:1})]),_:1})])}}}),Fe=M(Ne,[["__scopeId","data-v-e4434bf0"]]),Re=S({__name:"index",setup(p){pe(T=>({"6722f728":J.value,"2f202f4e":z.value,"587add76":q.value,"59ec4889":F.value}));const e=K("--v3-sidebar-menu-bg-color"),u=K("--v3-sidebar-menu-text-color"),s=K("--v3-sidebar-menu-active-text-color"),f=_e(),i=Y(),g=se(),a=ne(),{sidebar:A,device:b}=W(i),{layoutMode:n,showLogo:x}=W(a),V=d(()=>{const{meta:{activeMenu:T},path:R}=f;return T||R}),h=d(()=>!A.value.opened),_=d(()=>n.value==="left"),c=d(()=>n.value==="top"),C=d(()=>b.value===ee.Mobile),y=d(()=>_.value&&x.value),H=d(()=>_.value?e:void 0),Z=d(()=>_.value?u:void 0),F=d(()=>_.value?s:void 0),z=d(()=>n.value!=="top"?"var(--v3-sidebar-menu-item-height)":"var(--v3-navigationbar-height)"),q=d(()=>n.value!=="top"?"var(--v3-sidebar-menu-hover-bg-color)":"transparent"),J=d(()=>n.value==="top"?"none":"block");return(T,R)=>{const X=r("el-menu"),j=r("el-scrollbar");return l(),v("div",{class:G({"has-logo":y.value})},[y.value?(l(),m(Fe,{key:0,collapse:h.value},null,8,["collapse"])):w("",!0),t(j,{"wrap-class":"scrollbar-wrapper"},{default:o(()=>[t(X,{"default-active":V.value,collapse:h.value&&!c.value,"background-color":H.value,"text-color":Z.value,"active-text-color":F.value,"unique-opened":!0,"collapse-transition":!1,mode:c.value&&!C.value?"horizontal":"vertical"},{default:o(()=>[(l(!0),v(L,null,N(I(g).routes,P=>(l(),m(Ke,{key:P.path,item:P,"base-path":P.path,"is-collapse":h.value,"is-top":c.value},null,8,["item","base-path","is-collapse","is-top"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color","mode"])]),_:1}),t($e)],2)}}}),De=M(Re,[["__scopeId","data-v-c7b71ed8"]]),Oe={class:"app-wrapper"},We={class:"main-container"},Ge=S({__name:"Left",setup(p){return(e,u)=>(l(),v("div",Oe,[t(I(De),{class:"sidebar-container"}),k("div",We,[t(I(te),{class:"app-main"})])]))}});const He=M(Ge,[["__scopeId","data-v-32e74378"]]),Qe=S({__name:"index",setup(p){return(e,u)=>(l(),v("div",null,[t(He)]))}});export{Qe as default};