import{H as J,r,d as oe,ah as i,ar as se,Q as ne,u as $,l as _,O as M,P as l,I as re,aJ as ie,_ as R,m as D,p as s,V as e,F as z,a8 as O,aD as de,aE as ue,U as E,T as ce,a3 as q}from"./vue-82a6b7fc.js";import{f as pe,D as me}from"./upload-4653cee1.js";import{g as fe,G as _e,a as ve,s as ge,K as he,d as be}from"./index-3ac11b30.js";import{u as P,a as we,b as ye}from"./knowledge-5db61844.js";import{h as Ce,f as ke}from"./element-155f1a92.js";import{_ as xe}from"./index-6dd22477.js";import"./vxe-fc542a86.js";const Ue=J({__name:"index",props:{files:{type:Array,default:()=>[]},accept:{type:String,default:""},showFileList:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},numLimit:{type:Number,default:1},fileSize:{type:Number,default:10},audioBaseUrl:{type:String,default:"/api/fs/upload"}},emits:["upload-success"],setup(c,{emit:b}){const{proxy:w}=P();let v=b,y=r(!1),g=r(!1),p=r([]),C=r("");const m=c;oe(()=>[m.files],()=>{Array.isArray(m.files)&&m.files.length>0?(p.value=JSON.parse(JSON.stringify(m.files)),C.value=p.value[0].url):p.value=[]},{deep:!0,immediate:!0});const k=d=>(C.value=d.url,y.value=!0,!0),U=d=>{const u=d.size/1024/1024<m.fileSize;return t(d),u||(w.$message.error(`上传文件大小不能超过 ${m.fileSize}MB!`),p.value=[]),u},B=()=>!0,S=d=>{g.value=!0;const u=new FormData;u.append("file",d.file),pe(u,{returnType:"url"}).then(f=>{v("upload-success",f.data),w.$message.success("上传成功"),p.value=[],g.value=!1}).catch(()=>{g.value=!1})},t=d=>{var u=d,f=URL.createObjectURL(u),x=new Audio(f);x.addEventListener("loadedmetadata",()=>{})};return(d,u)=>{const f=i("el-upload"),x=se("loading");return ne((_(),M(f,{id:"audioUpload",class:"avatar-uploader",action:"#","show-file-list":c.showFileList,multiple:c.multiple,"file-list":$(p),limit:c.numLimit,accept:c.accept,"http-request":S,"before-upload":U,"before-remove":B,"on-preview":k},{default:l(()=>[re(d.$slots,"default")]),_:3},8,["show-file-list","multiple","file-list","limit","accept"])),[[x,$(g)]])}}}),Se=c=>(de("data-v-deae54e1"),c=c(),ue(),c),Ve={class:"app-container"},De={class:"app-list"},Me={class:"app-list-box"},$e={class:"add-icon"},Be=Se(()=>s("h3",null,"创建知识库",-1)),Fe=["onClick"],Ie={class:"image-slot"},Le={class:"item-dropdown"},Ne={class:"dropdown-menu"},Ae=["onClick"],Ke=["onClick"],Te={class:"avatar"},Re={class:"imgiconbox"},ze=["src"],Oe=J({__name:"index",setup(c){const{proxy:b}=P(),w=ie(),v=r(!1);r(!1);const y=r(!0),g=r(0);r(0);const p=r(),C=r(),m=r(),k=r(!1),U=r("创建知识库"),B={pageNum:1,pageSize:1e4,count:!0,keywords:"",parentId:0},S=r([]),t=R({parentId:0,name:"",vectorModel:"SkyChat-MegaVerse",avatarUrl:"",tags:[],type:"kb",description:""}),d=R({name:[{required:!0,message:"请填写知识库名称!",trigger:"blur"}],description:[{required:!0,message:"请填写知识库描述!",trigger:"blur"}]}),u=()=>{fe(B).then(n=>{S.value=n.data.list})};u();const f=()=>{_e("emb_models").then(n=>{C.value=n.data})};f();const x=()=>{v.value=!0,y.value=!0,k.value=!1},Q=n=>{y.value=!1,v.value=!0,k.value=!0,g.value=n,U.value="知识库设置",he(n).then(o=>{let h;for(h in t)t.hasOwnProperty(h)&&(t[h]=o.data[h])})},j=n=>{ke.confirm("此操作将永久删除数据,是否继续?","提醒",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{be(n).then(o=>{u(),b.$message.success("删除成功!")})}).catch(()=>{})},G=n=>{t.avatarUrl=n},H=async()=>{await p.value.validate(async n=>{n&&(y.value?await ve(t).then(()=>{b.$message.success("创建成功!")}):await ge(Object.assign(t,{id:g.value})).then(()=>{b.$message.success("修改成功!")}),await u(),await f(),await I(),v.value=!1)})},I=()=>{t.avatarUrl="",p.value.resetFields()},W=(n,o)=>{m.value=n,ye().setChatData(o),o.dsNum<=1?w.push({name:"importData"}):w.push({name:"knowledgeTable"})};return(n,o)=>{const h=i("Plus"),L=i("el-icon"),N=i("el-col"),X=i("el-image"),Y=i("el-text"),A=i("svg-icon"),Z=i("el-popover"),ee=i("el-row"),F=i("el-input"),V=i("el-form-item"),te=i("el-option"),ae=i("el-select"),le=i("el-form");return _(),D("div",null,[s("div",Ve,[s("div",De,[s("div",Me,[e(ee,{gutter:24},{default:l(()=>[e(N,{span:6},{default:l(()=>[s("div",{class:"item add",onClick:x},[s("div",$e,[e(L,{size:20},{default:l(()=>[e(h)]),_:1})]),Be])]),_:1}),(_(!0),D(z,null,O(S.value,(a,K)=>(_(),M(N,{span:6,key:K},{default:l(()=>[s("div",{class:"item",onClick:T=>W(K,a)},[e(X,{src:a.avatarUrl?a.avatarUrl:`${$(we)("")}`,class:"logo"},{error:l(()=>[s("div",Ie,[e(L,null,{default:l(()=>[e($(Ce))]),_:1})])]),_:2},1032,["src"]),s("h3",null,E(a.name),1),s("p",null,[e(Y,{"line-clamp":2},{default:l(()=>[ce(E(a.description),1)]),_:2},1024)]),e(Z,{placement:"bottom-end","show-arrow":!1,teleported:!1,width:100,trigger:"hover",offset:0},{reference:l(()=>[s("div",Le,[e(A,{name:"more",class:"icon"})])]),default:l(()=>[s("div",Ne,[s("div",{class:"dropdown-item",onClick:q(T=>Q(a.id),["stop"])},"编辑",8,Ae),s("div",{class:"dropdown-item del",onClick:q(T=>j(a.id),["stop"])},"删除",8,Ke)])]),_:2},1024)],8,Fe)]),_:2},1024))),128))]),_:1})])])]),e(me,{visible:v.value,"onUpdate:visible":o[4]||(o[4]=a=>v.value=a),title:U.value,confirmName:"确定",closeName:"取消",onConfirm:H,onClose:I,width:"640px"},{main:l(()=>[s("div",Te,[e(Ue,{onUploadSuccess:G},{default:l(()=>[s("div",Re,[t.avatarUrl?(_(),D("img",{key:1,src:t.avatarUrl,alt:""},null,8,ze)):(_(),M(A,{key:0,name:"ImgAdd",class:"imgaddicon"}))])]),_:1})]),e(le,{ref_key:"ruleFormRef",ref:p,model:t,"status-icon":"",rules:d,"label-position":"top","label-width":"80px",class:"demo-ruleForm"},{default:l(()=>[e(V,{label:"知识库名称",prop:"name"},{default:l(()=>[e(F,{modelValue:t.name,"onUpdate:modelValue":o[0]||(o[0]=a=>t.name=a),modelModifiers:{trim:!0}},null,8,["modelValue"])]),_:1}),e(V,{label:"知识库描述",prop:"description"},{default:l(()=>[e(F,{modelValue:t.description,"onUpdate:modelValue":o[1]||(o[1]=a=>t.description=a),modelModifiers:{trim:!0},type:"textarea",rows:4,placeholder:"请输入对此知识库的描述"},null,8,["modelValue"])]),_:1}),e(V,{label:"索引模型",prop:"vectorModel"},{default:l(()=>[e(ae,{modelValue:t.vectorModel,"onUpdate:modelValue":o[2]||(o[2]=a=>t.vectorModel=a),placeholder:"选择",disabled:k.value},{default:l(()=>[(_(!0),D(z,null,O(C.value,a=>(_(),M(te,{label:a.name,value:a.model},null,8,["label","value"]))),256))]),_:1},8,["modelValue","disabled"])]),_:1}),e(V,{label:"标签",prop:"tags"},{default:l(()=>[e(F,{modelValue:t.tags[0],"onUpdate:modelValue":o[3]||(o[3]=a=>t.tags[0]=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["visible","title"])])}}});const He=xe(Oe,[["__scopeId","data-v-deae54e1"]]);export{He as default};
