import{m as E,n as P}from"./@babel-2cf8752d.js";import{r as _}from"./react-6c224063.js";var O={exports:{}};(function(x,C){(function(h,s){x.exports=s(_)})(typeof self<"u"?self:E,function(h){return function(s){function o(t){if(i[t])return i[t].exports;var c=i[t]={i:t,l:!1,exports:{}};return s[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}var i={};return o.m=s,o.c=i,o.d=function(t,c,f){o.o(t,c)||Object.defineProperty(t,c,{configurable:!1,enumerable:!0,get:f})},o.n=function(t){var c=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(c,"a",c),c},o.o=function(t,c){return Object.prototype.hasOwnProperty.call(t,c)},o.p="",o(o.s=0)}([function(s,o,i){function t(){return t=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])}return r},t.apply(this,arguments)}function c(r){return A(r)||T(r)||S(r)||f()}function f(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S(r,e){if(r){if(typeof r=="string")return p(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set"?Array.from(r):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(r,e):void 0}}function T(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function A(r){if(Array.isArray(r))return p(r)}function p(r,e){(e==null||e>r.length)&&(e=r.length);for(var n=0,u=new Array(e);n<e;n++)u[n]=r[n];return u}function d(r){"@babel/helpers - typeof";return(d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}Object.defineProperty(o,"__esModule",{value:!0}),i.d(o,"HighchartsReact",function(){return b});var a=i(1),R=i.n(a),m=typeof window<"u"?a.useLayoutEffect:a.useEffect,b=Object(a.memo)(Object(a.forwardRef)(function(r,e){var n=Object(a.useRef)(),u=Object(a.useRef)(),g=Object(a.useRef)(r.constructorType),w=Object(a.useRef)(r.highcharts);return m(function(){function l(){var y=r.highcharts||(typeof window>"u"?"undefined":d(window))==="object"&&window.Highcharts,j=r.constructorType||"chart";y?y[j]?r.options?u.current=y[j](n.current,r.options,r.callback):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(u.current){if(r.allowChartUpdate!==!1)if(r.constructorType!==g.current||r.highcharts!==w.current)g.current=r.constructorType,w.current=r.highcharts,l();else if(!r.immutable&&u.current){var v;(v=u.current).update.apply(v,[r.options].concat(c(r.updateArgs||[!0,!0])))}else l()}else l()},[r.options,r.allowChartUpdate,r.updateArgs,r.containerProps,r.highcharts,r.constructorType]),m(function(){return function(){u.current&&(u.current.destroy(),u.current=null)}},[]),Object(a.useImperativeHandle)(e,function(){return{get chart(){return u.current},container:n}},[]),R.a.createElement("div",t({},r.containerProps,{ref:n}))}));o.default=b},function(s,o){s.exports=h}])})})(O);var H=O.exports;const U=P(H);export{U as H};
