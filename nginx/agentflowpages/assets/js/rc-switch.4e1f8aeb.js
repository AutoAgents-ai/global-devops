import{k as M,c as P,b as m,g as T}from"./@babel.1753ff2f.js";import{r as c}from"./react.4ec6b4a2.js";import{c as R}from"./classnames.087671f5.js";import{p as j,K as p}from"./rc-util.dd03d07c.js";var A=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],F=c.forwardRef(function(e,v){var d,u=e.prefixCls,a=u===void 0?"rc-switch":u,f=e.className,g=e.checked,w=e.defaultChecked,i=e.disabled,y=e.loadingIcon,N=e.checkedChildren,b=e.unCheckedChildren,t=e.onClick,l=e.onChange,r=e.onKeyDown,x=M(e,A),I=j(!1,{value:g,defaultValue:w}),k=P(I,2),o=k[0],K=k[1];function h(n,C){var s=o;return i||(s=n,K(s),l==null||l(s,C)),s}function E(n){n.which===p.LEFT?h(!1,n):n.which===p.RIGHT&&h(!0,n),r==null||r(n)}function S(n){var C=h(!o,n);t==null||t(C,n)}var D=R(a,f,(d={},m(d,"".concat(a,"-checked"),o),m(d,"".concat(a,"-disabled"),i),d));return c.createElement("button",T({},x,{type:"button",role:"switch","aria-checked":o,disabled:i,className:D,ref:v,onKeyDown:E,onClick:S}),y,c.createElement("span",{className:"".concat(a,"-inner")},c.createElement("span",{className:"".concat(a,"-inner-checked")},N),c.createElement("span",{className:"".concat(a,"-inner-unchecked")},b)))});F.displayName="Switch";export{F as S};
