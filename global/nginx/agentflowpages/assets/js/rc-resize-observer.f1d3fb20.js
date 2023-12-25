import{h as L,i as N,a as $,_ as j,e as I,d as A,g as F}from"./@babel.c9e56d28.js";import{r as t}from"./react.f4964a8e.js";import{s as K,d as T,L as C,y as V}from"./rc-util.53097492.js";import{i as X}from"./resize-observer-polyfill.0f9f8adb.js";var b=t.createContext(null);function Y(e){var i=e.children,r=e.onBatchResize,o=t.useRef(0),n=t.useRef([]),a=t.useContext(b),l=t.useCallback(function(d,s,u){o.current+=1;var h=o.current;n.current.push({size:d,element:s,data:u}),Promise.resolve().then(function(){h===o.current&&(r==null||r(n.current),n.current=[])}),a==null||a(d,s,u)},[r,a]);return t.createElement(b.Provider,{value:l},i)}var c=new Map;function q(e){e.forEach(function(i){var r,o=i.target;(r=c.get(o))===null||r===void 0||r.forEach(function(n){return n(o)})})}var M=new X(q);function G(e,i){c.has(e)||(c.set(e,new Set),M.observe(e)),c.get(e).add(i)}function J(e,i){c.has(e)&&(c.get(e).delete(i),c.get(e).size||(M.unobserve(e),c.delete(e)))}var Q=function(e){L(r,e);var i=N(r);function r(){return $(this,r),i.apply(this,arguments)}return j(r,[{key:"render",value:function(){return this.props.children}}]),r}(t.Component);function U(e,i){var r=e.children,o=e.disabled,n=t.useRef(null),a=t.useRef(null),l=t.useContext(b),d=typeof r=="function",s=d?r(n):r,u=t.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),h=!d&&t.isValidElement(s)&&K(s),O=h?s.ref:null,D=T(O,n),z=function(){var v;return C(n.current)||(n.current&&A(n.current)==="object"?C((v=n.current)===null||v===void 0?void 0:v.nativeElement):null)||C(a.current)};t.useImperativeHandle(i,function(){return z()});var E=t.useRef(e);E.current=e;var _=t.useCallback(function(f){var v=E.current,w=v.onResize,P=v.data,y=f.getBoundingClientRect(),p=y.width,m=y.height,R=f.offsetWidth,g=f.offsetHeight,x=Math.floor(p),W=Math.floor(m);if(u.current.width!==x||u.current.height!==W||u.current.offsetWidth!==R||u.current.offsetHeight!==g){var k={width:x,height:W,offsetWidth:R,offsetHeight:g};u.current=k;var S=R===Math.round(p)?p:R,B=g===Math.round(m)?m:g,H=I(I({},k),{},{offsetWidth:S,offsetHeight:B});l==null||l(H,f,P),w&&Promise.resolve().then(function(){w(H,f)})}},[]);return t.useEffect(function(){var f=z();return f&&!o&&G(f,_),function(){return J(f,_)}},[n.current,o]),t.createElement(Q,{ref:a},h?t.cloneElement(s,{ref:D}):s)}var Z=t.forwardRef(U),ee="rc-observer-key";function re(e,i){var r=e.children,o=typeof r=="function"?[r]:V(r);return o.map(function(n,a){var l=(n==null?void 0:n.key)||"".concat(ee,"-").concat(a);return t.createElement(Z,F({},e,{key:l,ref:a===0?i:void 0}),n)})}var te=t.forwardRef(re);te.Collection=Y;export{te as R};
