import{H as ce,aJ as de,r as i,_ as q,ah as r,l as c,m as v,p as n,V as a,P as s,F as I,a8 as F,a3 as M,O as h,aD as ue,aE as pe,u as E,U as J,T as me,J as _e,S as ve}from"./vue-3e7b265f.js";import{D as O}from"./index-2891ba9f.js";import{g as fe,G as ge,a as he,s as be,K as Ce,d as ke}from"./index-b02d4f65.js";import{u as we,a as ye,b as xe}from"./knowledge-1db86c91.js";import{f as Ve,e as Ue}from"./element-af2222c3.js";import{_ as $e}from"./index-60cbbabb.js";import"./vxe-d747ed40.js";const Ie=f=>(ue("data-v-1f53bce8"),f=f(),pe(),f),Fe={class:"app-container"},Me={class:"app-list"},De={class:"app-list-box"},Ne={class:"add-icon"},Ke=Ie(()=>n("h3",null,"创建知识库",-1)),Se=["onClick"],Be={class:"image-slot"},ze={class:"item-dropdown"},Te={class:"dropdown-menu"},Pe=["onClick"],je=["onClick"],qe={class:"avatar"},Ee=["onClick"],Je=["src"],Oe=["onClick","src"],Re=ce({__name:"index",setup(f){const{proxy:b}=we(),C=de(),p=i(!1),k=i(!0),D=i(0),d=i(0),w=i(),N=i(),R=i(),m=i(!1),y=i(!1),K=i("创建知识库"),A={pageNum:1,pageSize:1e4,count:!0,keywords:"",parentId:0},S=i([]),l=q({parentId:0,name:"",vectorModel:"SkyChat-MegaVerse",avatarUrl:"/assets/avatar/18.png",tags:[],type:"kb",description:""}),G=q({name:[{required:!0,message:"请填写知识库名称!",trigger:"blur"}],description:[{required:!0,message:"请填写知识库描述!",trigger:"blur"}]}),x=()=>{fe(A).then(t=>{S.value=t.data.list})};x();const B=()=>{ge("emb_models").then(t=>{N.value=t.data})};B();const L=()=>{p.value=!0,k.value=!0,l.avatarUrl="/assets/avatar/18.png",y.value=!1},Q=t=>{k.value=!1,p.value=!0,y.value=!0,D.value=t,K.value="知识库设置",Ce(t).then(o=>{let u;for(u in l)l.hasOwnProperty(u)&&(l[u]=o.data[u])})},H=t=>{Ue.confirm("此操作将永久删除数据,是否继续?","提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ke(t).then(()=>{x(),b.$message.success("删除成功!")})}).catch(()=>{})},W=()=>{var o;const t=(o=l.avatarUrl)==null?void 0:o.match(/\/([^\/]+)\.[a-z]+$/i);t!=null&&t.length?d.value=Number(t[1]):d.value=0,m.value=!0},X=t=>{d.value=t},Y=async()=>{await w.value.validate(async t=>{t&&(k.value?await he(l).then(()=>{b.$message.success("创建成功!"),C.push({name:"importData"})}):await be(Object.assign(l,{id:D.value})).then(()=>{b.$message.success("修改成功!")}),await x(),await B(),await z(),p.value=!1)})},Z=()=>{l.avatarUrl=`/avatar/${d.value}.${[4,12,16,20,22].includes(d.value)?"jpg":"png"}`,m.value=!1},z=()=>{w.value.resetFields()},ee=()=>{d.value=0,m.value=!1},ae=(t,o)=>{R.value=t,xe().setChatData(o),o.dsNum<=1?C.push({name:"importData"}):C.push({name:"knowledgeTable"})};return(t,o)=>{const u=r("Plus"),V=r("el-icon"),U=r("el-col"),te=r("el-image"),oe=r("el-text"),T=r("svg-icon"),se=r("el-popover"),P=r("el-row"),$=r("el-input"),g=r("el-form-item"),le=r("el-option"),ne=r("el-select"),re=r("el-form"),ie=r("CircleCheckFilled");return c(),v("div",null,[n("div",Fe,[n("div",Me,[n("div",De,[a(P,{gutter:24},{default:s(()=>[a(U,{span:6},{default:s(()=>[n("div",{class:"item add",onClick:L},[n("div",Ne,[a(V,{size:20},{default:s(()=>[a(u)]),_:1})]),Ke])]),_:1}),(c(!0),v(I,null,F(S.value,(e,_)=>(c(),h(U,{span:6,key:_},{default:s(()=>[n("div",{class:"item",onClick:j=>ae(_,e)},[a(te,{src:e.avatarUrl?e.avatarUrl:`${E(ye)("")}`,class:"logo"},{error:s(()=>[n("div",Be,[a(V,{size:"40"},{default:s(()=>[a(E(Ve))]),_:1})])]),_:2},1032,["src"]),n("h3",null,J(e.name),1),n("p",null,[a(oe,{"line-clamp":2},{default:s(()=>[me(J(e.description),1)]),_:2},1024)]),a(se,{placement:"bottom-end","show-arrow":!1,teleported:!1,width:100,trigger:"hover",offset:0},{reference:s(()=>[n("div",ze,[a(T,{name:"more",class:"icon"})])]),default:s(()=>[n("div",Te,[n("div",{class:"dropdown-item",onClick:M(j=>Q(e.id),["stop"])},"编辑",8,Pe),n("div",{class:"dropdown-item del",onClick:M(j=>H(e.id),["stop"])},"删除",8,je)])]),_:2},1024)],8,Se)]),_:2},1024))),128))]),_:1})])])]),a(O,{visible:p.value,"onUpdate:visible":o[4]||(o[4]=e=>p.value=e),title:K.value,confirmName:"确定",closeName:"取消",onConfirm:Y,onClose:z,width:"640px"},{main:s(()=>[n("div",qe,[n("div",{class:"imgiconbox",onClick:M(W,["stop"])},[l.avatarUrl?(c(),v("img",{key:1,src:l.avatarUrl,alt:""},null,8,Je)):(c(),h(T,{key:0,name:"ImgAdd",class:"imgaddicon"}))],8,Ee)]),a(re,{ref_key:"ruleFormRef",ref:w,model:l,"status-icon":"",rules:G,"label-position":"top","label-width":"80px",class:"demo-ruleForm"},{default:s(()=>[a(g,{label:"知识库名称",prop:"name"},{default:s(()=>[a($,{modelValue:l.name,"onUpdate:modelValue":o[0]||(o[0]=e=>l.name=e),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),a(g,{label:"知识库描述",prop:"description"},{default:s(()=>[a($,{modelValue:l.description,"onUpdate:modelValue":o[1]||(o[1]=e=>l.description=e),modelModifiers:{trim:!0},type:"textarea",rows:4,placeholder:"请输入对此知识库的描述"},null,8,["modelValue"])]),_:1}),a(g,{label:"索引模型",prop:"vectorModel"},{default:s(()=>[a(ne,{modelValue:l.vectorModel,"onUpdate:modelValue":o[2]||(o[2]=e=>l.vectorModel=e),placeholder:"选择",disabled:y.value},{default:s(()=>[(c(!0),v(I,null,F(N.value,(e,_)=>(c(),h(le,{label:e.name,value:e.model,key:_},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),a(g,{label:"标签",prop:"tags"},{default:s(()=>[a($,{modelValue:l.tags[0],"onUpdate:modelValue":o[3]||(o[3]=e=>l.tags[0]=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","title"]),a(O,{visible:m.value,"onUpdate:visible":o[5]||(o[5]=e=>m.value=e),title:"选择头像",onConfirm:Z,onClose:ee,width:"640px"},{main:s(()=>[a(P,{span:24,class:"avatrow"},{default:s(()=>[(c(),v(I,null,F(38,e=>a(U,{key:e,span:4,gutter:12,class:"avatcol"},{default:s(()=>[n("img",{onClick:_=>X(e),class:_e(["avatarImg",e==d.value?"active":""]),src:`/assets/avatar/${e}.${[4,12,16,20,22].includes(e)?"jpg":"png"}`,alt:""},null,10,Oe),e==d.value?(c(),h(V,{key:0,color:"#4060FF",size:"18px"},{default:s(()=>[a(ie)]),_:1})):ve("",!0)]),_:2},1024)),64))]),_:1})]),_:1},8,["visible"])])}}});const Ye=$e(Re,[["__scopeId","data-v-1f53bce8"]]);export{Ye as default};
