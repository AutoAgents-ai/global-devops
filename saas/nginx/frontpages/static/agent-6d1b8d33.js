import{r as e}from"./index-7e374683.js";function u(){return e({url:"agent/my",method:"get"})}function r(){return e({url:"agent/official",method:"get"})}function a(t){return e({url:"agent/create",method:"post",data:t})}function i(t,n){return e({url:`agent/update?agentId=${t}`,method:"post",data:n})}function l(t){return e({url:"agent/del",method:"post",params:t})}function g(){return e({url:"agent/allChats",method:"get"})}function s(t){return e({url:"agent/detail",method:"get",params:t})}function f(){return e({url:"agent/getAgentConfig",method:"get"})}function d(){return e({url:"config/agent_tools",method:"get"})}function c(t){return e({url:"outlink/list",method:"get",params:t})}function m(t){return e({url:"outlink/create",method:"post",data:t})}function h(t){return e({url:"outlink/delete",method:"get",params:t})}function k(t){return e({url:"outlink/update",method:"post",data:t})}function p(t){return e({url:"outlink/agent/info",method:"get",params:t})}export{u as a,g as b,m as c,i as d,a as e,l as f,f as g,s as h,c as i,h as j,k,p as l,r as o,d as t};