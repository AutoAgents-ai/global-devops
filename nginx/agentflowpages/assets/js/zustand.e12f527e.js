import{r as E}from"./react.4ec6b4a2.js";import{u as p}from"./use-sync-external-store.adb9b08a.js";const l=e=>{let t;const n=new Set,s=(c,a)=>{const o=typeof c=="function"?c(t):c;if(!Object.is(o,t)){const y=t;t=a??typeof o!="object"?o:Object.assign({},t,o),n.forEach(S=>S(t,y))}},r=()=>t,i={setState:s,getState:r,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{n.clear()}};return t=e(s,r,i),i},d=e=>e?l(e):l,{useSyncExternalStoreWithSelector:g}=p;function h(e,t=e.getState,n){const s=g(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return E.useDebugValue(s),s}const f=(e,t)=>{const n=d(e),s=(r,u=t)=>h(n,r,u);return Object.assign(s,n),s},b=(e,t)=>e?f(e,t):f;function m(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[s,r]of e)if(!Object.is(r,t.get(s)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const s of e)if(!t.has(s))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let s=0;s<n.length;s++)if(!Object.prototype.hasOwnProperty.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}export{b as c,m as s,h as u};
