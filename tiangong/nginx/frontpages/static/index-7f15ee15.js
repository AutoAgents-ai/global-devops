import{n as a}from"./element-3f409242.js";const s=e=>e?a(new Date(e)).format("YYYY-MM-DD HH:mm:ss"):"N/A",n=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(r){console.error(r)}return t},c=e=>{if(typeof e=="string")try{const t=JSON.parse(e);return!!(typeof t=="object"&&t)}catch{return!1}return!1};export{s as f,n as g,c as t};
