import{k as he,c as F,d as Pe,e as B,g as Se,b as de,f as Me}from"./@babel-2cf8752d.js";import{c as U}from"./classnames-5987b41f.js";import{u as _e,B as $e,r as me}from"./rc-input-0eb813d3.js";import{p as xe,a as ge,k as pe}from"./rc-util-ce8c70c6.js";import{r as d,a as h}from"./react-6c224063.js";import{R as Le}from"./rc-resize-observer-f0e14da0.js";var Be=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,He=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],ie={},f;function De(e){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(w&&ie[a])return ie[a];var n=window.getComputedStyle(e),v=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),m=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),r=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),i=He.map(function(s){return"".concat(s,":").concat(n.getPropertyValue(s))}).join(";"),b={sizingStyle:i,paddingSize:m,borderSize:r,boxSizing:v};return w&&a&&(ie[a]=b),b}function ke(e){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;f||(f=document.createElement("textarea"),f.setAttribute("tab-index","-1"),f.setAttribute("aria-hidden","true"),document.body.appendChild(f)),e.getAttribute("wrap")?f.setAttribute("wrap",e.getAttribute("wrap")):f.removeAttribute("wrap");var v=De(e,w),m=v.paddingSize,r=v.borderSize,i=v.boxSizing,b=v.sizingStyle;f.setAttribute("style","".concat(b,";").concat(Be)),f.value=e.value||e.placeholder||"";var s=void 0,c=void 0,S,l=f.scrollHeight;if(i==="border-box"?l+=r:i==="content-box"&&(l-=m),a!==null||n!==null){f.value=" ";var M=f.scrollHeight-m;a!==null&&(s=M*a,i==="border-box"&&(s=s+m+r),l=Math.max(s,l)),n!==null&&(c=M*n,i==="border-box"&&(c=c+m+r),S=l>c?"":"hidden",l=Math.min(c,l))}var R={height:l,overflowY:S,resize:"none"};return s&&(R.minHeight=s),c&&(R.maxHeight=c),R}var Ke=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],se=0,le=1,ue=2,Ye=d.forwardRef(function(e,w){var a=e,n=a.prefixCls;a.onPressEnter;var v=a.defaultValue,m=a.value,r=a.autoSize,i=a.onResize,b=a.className,s=a.style,c=a.disabled,S=a.onChange;a.onInternalAutoSize;var l=he(a,Ke),M=xe(v,{value:m,postState:function(u){return u??""}}),R=F(M,2),E=R[0],H=R[1],D=function(u){H(u.target.value),S==null||S(u)},z=d.useRef();d.useImperativeHandle(w,function(){return{textArea:z.current}});var ee=d.useMemo(function(){return r&&Pe(r)==="object"?[r.minRows,r.maxRows]:[]},[r]),V=F(ee,2),N=V[0],q=V[1],x=!!r,A=function(){try{if(document.activeElement===z.current){var u=z.current,Z=u.selectionStart,C=u.selectionEnd,Q=u.scrollTop;z.current.setSelectionRange(Z,C),z.current.scrollTop=Q}}catch{}},k=d.useState(ue),P=F(k,2),I=P[0],_=P[1],K=d.useState(),Y=F(K,2),j=Y[0],te=Y[1],O=function(){_(se)};ge(function(){x&&O()},[m,N,q,x]),ge(function(){if(I===se)_(le);else if(I===le){var y=ke(z.current,!1,N,q);_(ue),te(y)}else A()},[I]);var J=d.useRef(),$=function(){pe.cancel(J.current)},W=function(u){I===ue&&(i==null||i(u),r&&($(),J.current=pe(function(){O()})))};d.useEffect(function(){return $},[]);var ae=x?j:null,L=B(B({},s),ae);return(I===se||I===le)&&(L.overflowY="hidden",L.overflowX="hidden"),d.createElement(Le,{onResize:W,disabled:!(r||i)},d.createElement("textarea",Se({},l,{ref:z,style:L,className:U(n,b,de({},"".concat(n,"-disabled"),c)),disabled:c,value:E,onChange:D})))}),je=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","count","className","style","disabled","hidden","classNames","styles","onResize"],qe=h.forwardRef(function(e,w){var a,n,v=e.defaultValue,m=e.value,r=e.onFocus,i=e.onBlur,b=e.onChange,s=e.allowClear,c=e.maxLength,S=e.onCompositionStart,l=e.onCompositionEnd,M=e.suffix,R=e.prefixCls,E=R===void 0?"rc-textarea":R,H=e.classes,D=e.showCount,z=e.count,ee=e.className,V=e.style,N=e.disabled,q=e.hidden,x=e.classNames,A=e.styles,k=e.onResize,P=he(e,je),I=xe(v,{value:m,defaultValue:v}),_=F(I,2),K=_[0],Y=_[1],j=K==null?"":String(K),te=h.useState(!1),O=F(te,2),J=O[0],$=O[1],W=h.useRef(!1),ae=h.useState(null),L=F(ae,2),y=L[0],u=L[1],Z=d.useRef(null),C=function(){var t;return(t=Z.current)===null||t===void 0?void 0:t.textArea},Q=function(){C().focus()};d.useImperativeHandle(w,function(){return{resizableTextArea:Z.current,focus:Q,blur:function(){C().blur()}}}),d.useEffect(function(){$(function(o){return!N&&o})},[N]);var ce=h.useState(null),fe=F(ce,2),ne=fe[0],be=fe[1];h.useEffect(function(){if(ne){var o;(o=C()).setSelectionRange.apply(o,Me(ne))}},[ne]);var g=_e(z,D),G=(a=g.max)!==null&&a!==void 0?a:c,Re=Number(G)>0,re=g.strategy(j),ze=!!G&&re>G,ve=function(t,p){var T=p;!W.current&&g.exceedFormatter&&g.max&&g.strategy(p)>g.max&&(T=g.exceedFormatter(p,{max:g.max}),p!==T&&be([C().selectionStart||0,C().selectionEnd||0])),Y(T),me(t.currentTarget,t,b,T)},ye=function(t){W.current=!0,S==null||S(t)},Ce=function(t){W.current=!1,ve(t,t.currentTarget.value),l==null||l(t)},we=function(t){ve(t,t.target.value)},Ee=function(t){var p=P.onPressEnter,T=P.onKeyDown;t.key==="Enter"&&p&&p(t),T==null||T(t)},Ae=function(t){$(!0),r==null||r(t)},Ie=function(t){$(!1),i==null||i(t)},Te=function(t){Y(""),Q(),me(C(),t,b)},oe=M,X;g.show&&(g.showFormatter?X=g.showFormatter({value:j,count:re,maxLength:G}):X="".concat(re).concat(Re?" / ".concat(G):""),oe=h.createElement(h.Fragment,null,oe,h.createElement("span",{className:U("".concat(E,"-data-count"),x==null?void 0:x.count),style:A==null?void 0:A.count},X)));var Fe=function(t){var p;k==null||k(t),(p=C())!==null&&p!==void 0&&p.style.height&&u(!0)},Ve=!P.autoSize&&!D&&!s,Ne=h.createElement($e,{value:j,allowClear:s,handleReset:Te,suffix:oe,prefixCls:E,classes:{affixWrapper:U(H==null?void 0:H.affixWrapper,(n={},de(n,"".concat(E,"-show-count"),D),de(n,"".concat(E,"-textarea-allow-clear"),s),n))},disabled:N,focused:J,className:U(ee,ze&&"".concat(E,"-out-of-range")),style:B(B({},V),y&&!Ve?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof X=="string"?X:void 0}},hidden:q,inputElement:h.createElement(Ye,Se({},P,{onKeyDown:Ee,onChange:we,onFocus:Ae,onBlur:Ie,onCompositionStart:ye,onCompositionEnd:Ce,className:U(x==null?void 0:x.textarea),style:B(B({},A==null?void 0:A.textarea),{},{resize:V==null?void 0:V.resize}),disabled:N,prefixCls:E,onResize:Fe,ref:Z}))});return Ne});export{qe as T};
