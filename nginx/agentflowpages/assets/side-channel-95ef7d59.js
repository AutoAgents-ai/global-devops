import{g as v}from"./get-intrinsic-4a38020a.js";import{c}from"./call-bind-6482c9b0.js";import{o as M}from"./object-inspect-fc3d7783.js";var s=v,o=c,$=M,m=s("%TypeError%"),i=s("%WeakMap%",!0),f=s("%Map%",!0),x=o("WeakMap.prototype.get",!0),d=o("WeakMap.prototype.set",!0),h=o("WeakMap.prototype.has",!0),w=o("Map.prototype.get",!0),g=o("Map.prototype.set",!0),G=o("Map.prototype.has",!0),u=function(r,a){for(var n=r,e;(e=n.next)!==null;n=e)if(e.key===a)return n.next=e.next,e.next=r.next,r.next=e,e},S=function(r,a){var n=u(r,a);return n&&n.value},W=function(r,a,n){var e=u(r,a);e?e.value=n:r.next={key:a,next:r.next,value:n}},H=function(r,a){return!!u(r,a)},B=function(){var a,n,e,l={assert:function(t){if(!l.has(t))throw new m("Side channel does not contain "+$(t))},get:function(t){if(i&&t&&(typeof t=="object"||typeof t=="function")){if(a)return x(a,t)}else if(f){if(n)return w(n,t)}else if(e)return S(e,t)},has:function(t){if(i&&t&&(typeof t=="object"||typeof t=="function")){if(a)return h(a,t)}else if(f){if(n)return G(n,t)}else if(e)return H(e,t);return!1},set:function(t,p){i&&t&&(typeof t=="object"||typeof t=="function")?(a||(a=new i),d(a,t,p)):f?(n||(n=new f),g(n,t,p)):(e||(e={key:{},next:null}),W(e,t,p))}};return l};export{B as s};
