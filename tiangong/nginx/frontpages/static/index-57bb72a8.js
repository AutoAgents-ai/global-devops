import{l as E,aD as W,ag as C,m as d,p as l,q as t,U as i,O as H,F as R,a7 as S,u as Y,I as z,aH as O,r as I,e as J,d as N,S as B,T as L,R as j,aE as P,aF as Q,a2 as V,c as X}from"./vue-417f18eb.js";import{u as G,a as Z,b as ee,d as te,C as ae}from"./index-894d7188.js";import{_ as T}from"./index-a2c2c23d.js";import{f as se}from"./element-a21ceda4.js";import{l as ne}from"./agent-66e2ff51.js";import"./agent-fcc4219a.js";import"./index-34f9d524.js";import"./steer-6ebbb6d9.js";import"./vxe-84ff863c.js";const oe={class:"aside-angent"},ie={class:"logo-box"},ce={class:"agent-box"},re=["onClick"],de=["src"],le=E({__name:"Aside",props:{agentId:{}},setup(m){const{agentHistory:v}=G(),y=W(),k=g=>{y.push({name:"dialogue",query:{agentId:g}})},u=()=>{y.push({path:"/"})};return(g,w)=>{const c=C("svg-icon"),p=C("el-scrollbar");return d(),l("div",oe,[t("div",ie,[i(c,{name:"LTLogo",color:"#fff",class:"logo",onClick:u})]),t("div",ce,[i(p,null,{default:H(()=>[(d(!0),l(R,null,S(Y(v),s=>(d(),l("div",{class:z(["item",{active:g.agentId==s.agentId}]),key:s.agentId,onClick:D=>k(s.agentId)},[t("img",{src:s.avatar,class:"agent-logo"},null,8,de),i(c,{name:"agent-active",class:"agent-active"})],10,re))),128))]),_:1})])])}}});const ue=T(le,[["__scopeId","data-v-8eff5c61"]]),_e=m=>(P("data-v-aad1732e"),m=m(),Q(),m),ge={class:"dialogue-history"},pe={class:"dialogue-header"},he={class:"history-list"},me={key:0,class:"create"},ve=_e(()=>t("span",null,"新的对话",-1)),fe=["onClick"],Ie={class:"more"},ye={class:"item-dropdown"},we={class:"dropdown-menu"},Ce=["onClick"],ke=["onClick"],De=E({__name:"DialogueList",props:{agentInfo:{},agentId:{}},emits:["refreshHistory"],setup(m,{expose:v,emit:y}){const k=y,u=m,g=W(),w=O(),c=I([]),p=J(()=>w.query.chatId||""),s=async()=>{const{data:a}=await Z({agentUUid:u.agentId});c.value=A(a)},D=a=>{k("refreshHistory"),g.push({name:"dialogue",query:{agentId:u.agentId,chatId:a.id}})};function A(a){const $=new Date,x=new Date($.getTime()-6*24*60*60*1e3),q=a.reduce((o,h)=>{const n=new Date(h.createAt),f=`${n.getFullYear()}-${n.getMonth()+1}`;return n>=x&&n<=$?(o.近7天||(o.近7天=[]),o.近7天.push(h)):(o[f]||(o[f]=[]),o[f].push(h)),o},{});return Object.entries(q).map(([o,h])=>{const n=o==="近7天",f=!n;let r="";if(n)r="近7天";else if(f){const[b,M]=o.split("-").map(Number),K=new Date().getFullYear();b!==K?r=`${b}年${M}月`:r=`${M}月`}return{title:r,items:h}})}const _=()=>{k("refreshHistory"),g.push({name:"dialogue",query:{agentId:u.agentId}})},e=a=>{se.prompt("","自定义历史会话标题",{}).then(async $=>{await ee({chatId:a.id,customTitle:$.value,top:!1}),s()})},U=async a=>{await te({chatId:a.id}),g.push({name:"dialogue",query:{agentId:u.agentId}})};return N(()=>u.agentId,a=>{a&&s()},{immediate:!0}),v({getAgentChatHistory:s}),(a,$)=>{var h;const x=C("svg-icon"),q=C("el-text"),F=C("el-popover"),o=C("el-scrollbar");return d(),l("div",ge,[t("div",pe,[t("h3",null,[B(L((h=a.agentInfo)==null?void 0:h.name)+" ",1),i(x,{name:"Edit",class:"edit-icon",onClick:_})]),t("p",null,[i(q,{"line-clamp":2},{default:H(()=>{var n;return[B(L((n=a.agentInfo)==null?void 0:n.intro),1)]}),_:1})])]),t("div",he,[p.value?j("",!0):(d(),l("div",me,[i(x,{name:"new-dialogue",class:"create-icon"}),ve])),i(o,null,{default:H(()=>[(d(!0),l(R,null,S(c.value,(n,f)=>(d(),l("div",{class:"list",key:f},[t("h4",null,L(n.title),1),(d(!0),l(R,null,S(n.items,r=>(d(),l("div",{class:z(["item",{active:p.value==r.id}]),key:r.id,onClick:b=>D(r)},[t("span",null,L(r.title),1),t("div",Ie,[i(F,{placement:"bottom-end","show-arrow":!1,teleported:!1,width:120,trigger:"hover",offset:0},{reference:H(()=>[t("div",ye,[i(x,{name:"more",class:"more-icon"})])]),default:H(()=>[t("div",we,[t("div",{class:"dropdown-item",onClick:V(b=>e(r),["stop"])},"自定义标题",8,Ce),t("div",{class:"dropdown-item del",onClick:V(b=>U(r),["stop"])},"删除",8,ke)])]),_:2},1024)])],10,fe))),128))]))),128))]),_:1})])])}}});const $e=T(De,[["__scopeId","data-v-aad1732e"]]),xe={class:"dialogue-container"},be={key:0,class:"aside-container"},He=E({__name:"index",setup(m){const v=O(),{setAgentHistory:y,chatAgentId:k}=G(),u=I();let g=I("");const w=I();let c=I(!0);const p=I(""),s=I(),D=async _=>{const{data:e}=await ne(_);e.background&&(g.value=e.background),localStorage.setItem("agentUuid",e.agentUuid),localStorage.setItem("users_id",e.uid),e.uuid=e.agentUuid,p.value=e.agentUuid,e.guides=e.guides.map(U=>({guide:U})),w.value=e,y({avatar:e==null?void 0:e.avatar,name:e==null?void 0:e.name,agentId:e.agentUuid})};X(()=>{window.innerWidth<=1200?c.value=!1:window.innerWidth>1200&&(c.value=!0),window.addEventListener("resize",()=>{window.innerWidth<=1200?c.value=!1:window.innerWidth>1200&&(c.value=!0)})});const A=()=>{s.value=null,s.value="",u.value.getAgentChatHistory()};return N(()=>[v.query.hash,v.query.agentId],_=>{_[0]?D({hash:_[0]}):D({agentUUid:_[1]})},{immediate:!0}),N(()=>v.query.chatId,_=>{s.value=_},{immediate:!0}),(_,e)=>(d(),l("div",xe,[Y(c)===!0?(d(),l("div",be,[i(ue,{agentId:p.value},null,8,["agentId"]),i($e,{ref_key:"dialogueListRef",ref:u,agentInfo:w.value,agentId:p.value,onRefreshHistory:A},null,8,["agentInfo","agentId"])])):j("",!0),i(ae,{class:"chat-container",agentId:p.value,chatId:s.value,agentData:w.value,onRefreshHistory:A},null,8,["agentId","chatId","agentData"])]))}});const Fe=T(He,[["__scopeId","data-v-0ba7a538"]]);export{Fe as default};