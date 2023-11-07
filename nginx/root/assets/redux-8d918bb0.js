import{g as T}from"./antd-1a1faab0.js";function h(r){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(r)}function x(r,e){if(h(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(h(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function C(r){var e=x(r,"string");return h(e)==="symbol"?e:String(e)}function D(r,e,t){return e=C(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function N(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function S(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?N(Object(t),!0).forEach(function(n){D(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function u(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var A=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),E=function(){return Math.random().toString(36).substring(7).split("").join(".")},w={INIT:"@@redux/INIT"+E(),REPLACE:"@@redux/REPLACE"+E(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+E()}};function L(r){if(typeof r!="object"||r===null)return!1;for(var e=r;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function P(r,e,t){var n;if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(u(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(u(1));return t(P)(r,e)}if(typeof r!="function")throw new Error(u(2));var i=r,c=e,a=[],s=a,f=!1;function v(){s===a&&(s=a.slice())}function l(){if(f)throw new Error(u(3));return c}function d(o){if(typeof o!="function")throw new Error(u(4));if(f)throw new Error(u(5));var p=!0;return v(),s.push(o),function(){if(p){if(f)throw new Error(u(6));p=!1,v();var b=s.indexOf(o);s.splice(b,1),a=null}}}function y(o){if(!L(o))throw new Error(u(7));if(typeof o.type>"u")throw new Error(u(8));if(f)throw new Error(u(9));try{f=!0,c=i(c,o)}finally{f=!1}for(var p=a=s,m=0;m<p.length;m++){var b=p[m];b()}return o}function g(o){if(typeof o!="function")throw new Error(u(10));i=o,y({type:w.REPLACE})}function O(){var o,p=d;return o={subscribe:function(b){if(typeof b!="object"||b===null)throw new Error(u(11));function j(){b.next&&b.next(l())}j();var I=p(j);return{unsubscribe:I}}},o[A]=function(){return this},o}return y({type:w.INIT}),n={dispatch:y,subscribe:d,getState:l,replaceReducer:g},n[A]=O,n}var M=P;function K(r){Object.keys(r).forEach(function(e){var t=r[e],n=t(void 0,{type:w.INIT});if(typeof n>"u")throw new Error(u(12));if(typeof t(void 0,{type:w.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(u(13))})}function U(r){for(var e=Object.keys(r),t={},n=0;n<e.length;n++){var i=e[n];typeof r[i]=="function"&&(t[i]=r[i])}var c=Object.keys(t),a;try{K(t)}catch(s){a=s}return function(f,v){if(f===void 0&&(f={}),a)throw a;for(var l=!1,d={},y=0;y<c.length;y++){var g=c[y],O=t[g],o=f[g],p=O(o,v);if(typeof p>"u")throw v&&v.type,new Error(u(14));d[g]=p,l=l||p!==o}return l=l||c.length!==Object.keys(f).length,l?d:f}}function _(r,e){return function(){return e(r.apply(this,arguments))}}function B(r,e){if(typeof r=="function")return _(r,e);if(typeof r!="object"||r===null)throw new Error(u(16));var t={};for(var n in r){var i=r[n];typeof i=="function"&&(t[n]=_(i,e))}return t}function R(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.length===0?function(n){return n}:e.length===1?e[0]:e.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function W(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(n){return function(){var i=n.apply(void 0,arguments),c=function(){throw new Error(u(15))},a={getState:i.getState,dispatch:function(){return c.apply(void 0,arguments)}},s=e.map(function(f){return f(a)});return c=R.apply(void 0,s)(i.dispatch),S(S({},i),{},{dispatch:c})}}}const $=Object.freeze(Object.defineProperty({__proto__:null,__DO_NOT_USE__ActionTypes:w,applyMiddleware:W,bindActionCreators:B,combineReducers:U,compose:R,createStore:P,legacy_createStore:M},Symbol.toStringTag,{value:"Module"})),z=T($);export{M as l,z as r};
