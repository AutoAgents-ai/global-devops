import{l as I,m as b}from"./index-d46489e5.js";import{aC as h,r as p}from"./vue-25cdfb55.js";const v=["https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/1.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/10.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/11.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/12.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/13.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/14.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/15.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/16.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/17.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/18.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/19.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/2.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/20.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/21.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/22.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/23.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/24.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/25.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/26.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/27.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/28.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/29.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/3.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/30.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/31.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/32.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/33.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/34.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/35.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/36.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/37.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/38.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/39.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/40.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/41.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/4.jpg","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/5.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/6.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/7.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/8.png","https://autoagents.oss-cn-beijing.aliyuncs.com/static/avatar/9.png"],T=["https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/love.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/family.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/friend.png","https://skyagents.oss-rg-china-mainland.aliyuncs.com/assets/agent/fawn.png"],g=(a,s)=>a.find(o=>o.moduleType===s),A=h("flow",()=>{const a=p([]),s=p([]),o=p();return{appSystemModuleList:a,appToolModuleList:s,initTemplate:o,setInitTemplate:()=>{o.value={initInputNodes:{id:"simpleInputId",type:"custom",data:g(a.value,"questionInput"),position:{x:-172,y:415}},initAiNodes:{id:"simpleAichatId",type:"custom",data:g(a.value,"aiChat"),position:{x:685,y:364}},initKnowledgeNodes:{id:"simpleKnowledgeId",type:"custom",data:g(a.value,"knowledgesSearch"),position:{x:211,y:119}},initConfirmreplyNodes:{id:"simpleConfirmreplyId",type:"custom",data:g(a.value,"confirmreply"),position:{x:684,y:39}},initInputAiEdges:[{id:"vueflow__edge-input-ai",sourceHandle:"userChatInput",targetHandle:"text",type:"custom",source:"simpleInputId",target:"simpleAichatId",animated:!1}],initInputAiKdEdges:[{id:"vueflow__edge-input-kd",sourceHandle:"userChatInput",targetHandle:"text",type:"custom",source:"simpleInputId",target:"simpleKnowledgeId",animated:!1},{id:"vueflow__edge-kd-reply",sourceHandle:"isEmpty",targetHandle:"switch",type:"custom",source:"simpleKnowledgeId",target:"simpleConfirmreplyId",animated:!1},{id:"vueflow__edge-kd-ai2",sourceHandle:"unEmpty",targetHandle:"switch",type:"custom",source:"simpleKnowledgeId",target:"simpleAichatId",animated:!1},{id:"vueflow__edge-kd-ai3",sourceHandle:"quoteQA",targetHandle:"knSearch",type:"custom",source:"simpleKnowledgeId",target:"simpleAichatId",animated:!1}]}},setAppSystemModuleList:u=>{a.value=u},setAppToolModuleList:u=>{s.value=u,s.value}}}),x=h("agent",()=>{const a=p({avatar:"",name:"新的Agent",intro:"",uuid:"",guides:[],chatAvatar:"",shareAble:!1,searchInWeb:!1,createImage:!1,appModel:{nodes:[],edges:[]}}),s=p(I()),o=t=>{s.value=t,b(t)},d=p([]),l=p([]);return{agentInfo:a,setAgentInfo:t=>{a.value.name=t.name||"新的Agent",a.value.avatar=t.avatar||v[f(0,v.length-1)],a.value.intro=t.intro||"",a.value.uuid=t.uuid||"",a.value.chatAvatar=t.chatAvatar||"",a.value.shareAble=t.shareAble||!1,a.value.guides=t.guides||[],a.value.searchInWeb=t.searchInWeb||!1,a.value.createImage=t.createImage||!1,a.value.appModel=t.appModel?JSON.parse(t.appModel):{nodes:[],edges:[]}},setAgentModel:t=>{a.value.appModel=t},changeAgentInfo:t=>{a.value.name=t.name||"新的Agent",a.value.avatar=t.avatar,a.value.intro=t.intro,a.value.chatAvatar=t.chatAvatar||"",a.value.guides=t.guides,a.value.searchInWeb=t.searchInWeb,a.value.createImage=t.createImage;const{initTemplate:r}=A();if(r){const n=JSON.parse(JSON.stringify(r));i(a.value.appModel.nodes,"simpleInputId")||a.value.appModel.nodes.push(n.initInputNodes);const m=i(a.value.appModel.nodes,"simpleAichatId");if(m?m.data.inputs.map(e=>{e.key==="model"&&(e.value=t.aiModelName||l.value[0].model),e.key==="quotePrompt"&&(e.value=t.aiPrompt)}):(n.initAiNodes.data.inputs.map(e=>{e.key==="model"&&(e.value=t.aiModelName||l.value[0].model),e.key==="quotePrompt"&&(e.value=t.aiPrompt)}),a.value.appModel.nodes.push(n.initAiNodes)),i(a.value.appModel.edges,"vueflow__edge-input-ai")||a.value.appModel.edges.push(n.initInputAiEdges[0]),t.datasets.length>0){const e=i(a.value.appModel.nodes,"simpleKnowledgeId");i(a.value.appModel.nodes,"simpleConfirmreplyId")||a.value.appModel.nodes.push(n.initConfirmreplyNodes),e?e.data.inputs.map(c=>{c.key==="datasets"&&(c.value=t.datasets)}):(n.initKnowledgeNodes.data.inputs.map(c=>{c.key==="datasets"&&(c.value=t.datasets)}),a.value.appModel.nodes.push(n.initKnowledgeNodes)),i(a.value.appModel.edges,"vueflow__edge-input-kd")||a.value.appModel.edges.push(n.initInputAiKdEdges[0]),i(a.value.appModel.edges,"vueflow__edge-kd-reply")||a.value.appModel.edges.push(n.initInputAiKdEdges[1]),i(a.value.appModel.edges,"vueflow__edge-kd-ai2")||a.value.appModel.edges.push(n.initInputAiKdEdges[2]),i(a.value.appModel.edges,"vueflow__edge-kd-ai3")||a.value.appModel.edges.push(n.initInputAiKdEdges[3])}else a.value.appModel.nodes=a.value.appModel.nodes.filter(e=>e.id!=="simpleKnowledgeId"),a.value.appModel.nodes=a.value.appModel.nodes.filter(e=>e.id!=="simpleConfirmreplyId")}},knowDataList:d,allChatList:l,setKnowDataList:t=>{d.value=t},setAllChatList:t=>{l.value=t},shareAgent:s,setShareAgent:o}});function i(a,s){return a.find(o=>o.id===s)}function f(a,s){return Math.floor(Math.random()*(s-a))+a}export{A as a,T as b,v as l,x as u};
