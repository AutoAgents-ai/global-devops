import{k as I,m as b}from"./index-87a8c386.js";import{aC as h,r as c}from"./vue-417f18eb.js";const v=["https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/1.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/10.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/11.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/12.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/13.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/14.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/15.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/16.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/17.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/18.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/19.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/2.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/20.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/21.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/22.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/23.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/24.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/25.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/26.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/27.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/28.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/29.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/3.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/30.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/31.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/32.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/33.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/34.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/35.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/36.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/37.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/38.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/39.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/40.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/41.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/4.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/5.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/6.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/7.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/8.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/9.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/tianquan.png"],L=["https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/love.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/family.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/friend.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/1222-1.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/1222-2.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/1222-3.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/1222-4.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/1222-5.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/1228-1.jpeg","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/1228-2.jpeg"],u=(a,e)=>a.find(i=>i.moduleType===e),j=h("flow",()=>{const a=c([]),e=c([]),i=c();return{appSystemModuleList:a,appToolModuleList:e,initTemplate:i,setInitTemplate:()=>{i.value={initInputNodes:{id:"simpleInputId",type:"custom",data:u(a.value,"questionInput"),position:{x:-172,y:415}},initAiNodes:{id:"simpleAichatId",type:"custom",data:u(a.value,"aiChat"),position:{x:685,y:364}},initKnowledgeNodes:{id:"simpleKnowledgeId",type:"custom",data:u(a.value,"knowledgesSearch"),position:{x:211,y:119}},initConfirmreplyNodes:{id:"simpleConfirmreplyId",type:"custom",data:u(a.value,"confirmreply"),position:{x:684,y:39}},initInputAiEdges:[{id:"vueflow__edge-input-ai",sourceHandle:"userChatInput",targetHandle:"text",type:"custom",source:"simpleInputId",target:"simpleAichatId",animated:!1}],initInputAiKdEdges:[{id:"vueflow__edge-input-kd",sourceHandle:"userChatInput",targetHandle:"text",type:"custom",source:"simpleInputId",target:"simpleKnowledgeId",animated:!1},{id:"vueflow__edge-kd-reply",sourceHandle:"isEmpty",targetHandle:"switch",type:"custom",source:"simpleKnowledgeId",target:"simpleConfirmreplyId",animated:!1},{id:"vueflow__edge-kd-ai2",sourceHandle:"unEmpty",targetHandle:"switch",type:"custom",source:"simpleKnowledgeId",target:"simpleAichatId",animated:!1},{id:"vueflow__edge-kd-ai3",sourceHandle:"quoteQA",targetHandle:"knSearch",type:"custom",source:"simpleKnowledgeId",target:"simpleAichatId",animated:!1}]}},setAppSystemModuleList:g=>{a.value=g},setAppToolModuleList:g=>{e.value=g,e.value}}}),H=h("agent",()=>{const a=c({avatar:"",name:"新的Agent",intro:"",uuid:"",guides:[],chatAvatar:"",shareAble:!1,searchInWeb:!1,createImage:!1,appModel:{nodes:[],edges:[]}}),e=c(I()),i=t=>{e.value=t,b(t)},d=c([]),p=c([]);return{agentInfo:a,setAgentInfo:t=>{a.value.name=t.name||"新的Agent",a.value.avatar=t.avatar||v[A(0,v.length-1)],a.value.intro=t.intro||"",a.value.uuid=t.uuid||"",a.value.chatAvatar=t.chatAvatar||"",a.value.shareAble=t.shareAble||!1,a.value.guides=t.guides||[],a.value.searchInWeb=t.searchInWeb||!1,a.value.createImage=t.createImage||!1,a.value.appModel=t.appModel?JSON.parse(t.appModel):{nodes:[],edges:[]}},setAgentModel:t=>{a.value.appModel=t},changeAgentInfo:t=>{a.value.name=t.name||"新的Agent",a.value.avatar=t.avatar,a.value.intro=t.intro,a.value.chatAvatar=t.chatAvatar||"",a.value.guides=t.guides,a.value.searchInWeb=t.searchInWeb,a.value.createImage=t.createImage;const{initTemplate:r}=j();if(r){const n=JSON.parse(JSON.stringify(r));o(a.value.appModel.nodes,"simpleInputId")||a.value.appModel.nodes.push(n.initInputNodes);const m=o(a.value.appModel.nodes,"simpleAichatId");if(m?m.data.inputs.map(s=>{s.key==="model"&&(s.value=t.aiModelName||p.value[0].model),s.key==="quotePrompt"&&(s.value=t.aiPrompt)}):(n.initAiNodes.data.inputs.map(s=>{s.key==="model"&&(s.value=t.aiModelName||p.value[0].model),s.key==="quotePrompt"&&(s.value=t.aiPrompt)}),a.value.appModel.nodes.push(n.initAiNodes)),t.datasets.length>0){const s=o(a.value.appModel.nodes,"simpleKnowledgeId");o(a.value.appModel.nodes,"simpleConfirmreplyId")||a.value.appModel.nodes.push(n.initConfirmreplyNodes),s?s.data.inputs.map(l=>{l.key==="datasets"&&(l.value=t.datasets)}):(n.initKnowledgeNodes.data.inputs.map(l=>{l.key==="datasets"&&(l.value=t.datasets)}),a.value.appModel.nodes.push(n.initKnowledgeNodes)),s||(o(a.value.appModel.edges,"vueflow__edge-input-kd")||a.value.appModel.edges.push(n.initInputAiKdEdges[0]),o(a.value.appModel.edges,"vueflow__edge-kd-reply")||a.value.appModel.edges.push(n.initInputAiKdEdges[1]),o(a.value.appModel.edges,"vueflow__edge-kd-ai2")||a.value.appModel.edges.push(n.initInputAiKdEdges[2]),o(a.value.appModel.edges,"vueflow__edge-kd-ai3")||a.value.appModel.edges.push(n.initInputAiKdEdges[3]))}else a.value.appModel.nodes=a.value.appModel.nodes.filter(s=>s.id!=="simpleKnowledgeId"),a.value.appModel.nodes=a.value.appModel.nodes.filter(s=>s.id!=="simpleConfirmreplyId")}},knowDataList:d,allChatList:p,setKnowDataList:t=>{d.value=t},setAllChatList:t=>{p.value=t},shareAgent:e,setShareAgent:i}});function o(a,e){return a.find(i=>i.id===e)}function A(a,e){return Math.floor(Math.random()*(e-a))+a}export{j as a,L as b,v as l,H as u};
