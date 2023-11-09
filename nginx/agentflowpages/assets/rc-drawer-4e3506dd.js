import{g as H,e as u,c as se,b as de}from"./@babel-2cf8752d.js";import{P as Ee}from"./@rc-component-50cf775f.js";import{d as Se,b as xe,C as Ne,K as ie,a as ve}from"./rc-util-ce8c70c6.js";import{r as a}from"./react-6c224063.js";import{c as p}from"./classnames-5987b41f.js";import{C as fe}from"./rc-motion-145d3cf8.js";var me=a.createContext(null),he=a.createContext({}),Re=function(n){var v=n.prefixCls,h=n.className,f=n.style,m=n.children,s=n.containerRef,c=n.id,d=n.onMouseEnter,D=n.onMouseOver,y=n.onMouseLeave,O=n.onClick,b=n.onKeyDown,P=n.onKeyUp,r={onMouseEnter:d,onMouseOver:D,onMouseLeave:y,onClick:O,onKeyDown:b,onKeyUp:P},g=a.useContext(he),E=g.panel,S=Se(E,s);return a.createElement(a.Fragment,null,a.createElement("div",H({id:c,className:p("".concat(v,"-content"),h),style:u({},f),"aria-modal":"true",role:"dialog",ref:S},r),m))};function ye(e){return typeof e=="string"&&String(Number(e))===e?(xe(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var Ce={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Ke(e,n){var v,h,f,m,s=e.prefixCls,c=e.open,d=e.placement,D=e.inline,y=e.push,O=e.forceRender,b=e.autoFocus,P=e.keyboard,r=e.classNames,g=e.rootClassName,E=e.rootStyle,S=e.zIndex,z=e.className,T=e.id,L=e.style,_=e.motion,j=e.width,q=e.height,G=e.children,J=e.contentWrapperStyle,Q=e.mask,Z=e.maskClosable,W=e.maskMotion,ee=e.maskClassName,B=e.maskStyle,k=e.afterOpenChange,U=e.onClose,ne=e.onMouseEnter,V=e.onMouseOver,ae=e.onMouseLeave,te=e.onClick,C=e.onKeyDown,X=e.onKeyUp,l=e.styles,I=a.useRef(),F=a.useRef(),A=a.useRef();a.useImperativeHandle(n,function(){return I.current});var oe=function(i){var R=i.keyCode,K=i.shiftKey;switch(R){case ie.TAB:{if(R===ie.TAB){if(!K&&document.activeElement===A.current){var re;(re=F.current)===null||re===void 0||re.focus({preventScroll:!0})}else if(K&&document.activeElement===F.current){var le;(le=A.current)===null||le===void 0||le.focus({preventScroll:!0})}}break}case ie.ESC:{U&&P&&(i.stopPropagation(),U(i));break}}};a.useEffect(function(){if(c&&b){var t;(t=I.current)===null||t===void 0||t.focus({preventScroll:!0})}},[c]);var ue=a.useState(!1),x=se(ue,2),$=x[0],N=x[1],o=a.useContext(me),Y;y===!1?Y={distance:0}:y===!0?Y={}:Y=y||{};var w=(v=(h=(f=Y)===null||f===void 0?void 0:f.distance)!==null&&h!==void 0?h:o==null?void 0:o.pushDistance)!==null&&v!==void 0?v:180,ke=a.useMemo(function(){return{pushDistance:w,push:function(){N(!0)},pull:function(){N(!1)}}},[w]);a.useEffect(function(){if(c){var t;o==null||(t=o.push)===null||t===void 0||t.call(o)}else{var i;o==null||(i=o.pull)===null||i===void 0||i.call(o)}},[c]),a.useEffect(function(){return function(){var t;o==null||(t=o.pull)===null||t===void 0||t.call(o)}},[]);var we=Q&&a.createElement(fe,H({key:"mask"},W,{visible:c}),function(t,i){var R=t.className,K=t.style;return a.createElement("div",{className:p("".concat(s,"-mask"),R,r==null?void 0:r.mask,ee),style:u(u(u({},K),B),l==null?void 0:l.mask),onClick:Z&&c?U:void 0,ref:i})}),Me=typeof _=="function"?_(d):_,M={};if($&&w)switch(d){case"top":M.transform="translateY(".concat(w,"px)");break;case"bottom":M.transform="translateY(".concat(-w,"px)");break;case"left":M.transform="translateX(".concat(w,"px)");break;default:M.transform="translateX(".concat(-w,"px)");break}d==="left"||d==="right"?M.width=ye(j):M.height=ye(q);var be={onMouseEnter:ne,onMouseOver:V,onMouseLeave:ae,onClick:te,onKeyDown:C,onKeyUp:X},ge=a.createElement(fe,H({key:"panel"},Me,{visible:c,forceRender:O,onVisibleChanged:function(i){k==null||k(i)},removeOnLeave:!1,leavedClassName:"".concat(s,"-content-wrapper-hidden")}),function(t,i){var R=t.className,K=t.style;return a.createElement("div",H({className:p("".concat(s,"-content-wrapper"),r==null?void 0:r.wrapper,R),style:u(u(u(u({},M),K),J),l==null?void 0:l.wrapper)},Ne(e,{data:!0})),a.createElement(Re,H({id:T,containerRef:i,prefixCls:s,className:p(z,r==null?void 0:r.content),style:u(u({},L),l==null?void 0:l.content)},be),G))}),ce=u({},E);return S&&(ce.zIndex=S),a.createElement(me.Provider,{value:ke},a.createElement("div",{className:p(s,"".concat(s,"-").concat(d),g,(m={},de(m,"".concat(s,"-open"),c),de(m,"".concat(s,"-inline"),D),m)),style:ce,tabIndex:-1,ref:I,onKeyDown:oe},we,a.createElement("div",{tabIndex:0,ref:F,style:Ce,"aria-hidden":"true","data-sentinel":"start"}),ge,a.createElement("div",{tabIndex:0,ref:A,style:Ce,"aria-hidden":"true","data-sentinel":"end"})))}var De=a.forwardRef(Ke),Fe=function(n){var v=n.open,h=v===void 0?!1:v,f=n.prefixCls,m=f===void 0?"rc-drawer":f,s=n.placement,c=s===void 0?"right":s,d=n.autoFocus,D=d===void 0?!0:d,y=n.keyboard,O=y===void 0?!0:y,b=n.width,P=b===void 0?378:b,r=n.mask,g=r===void 0?!0:r,E=n.maskClosable,S=E===void 0?!0:E,z=n.getContainer,T=n.forceRender,L=n.afterOpenChange,_=n.destroyOnClose,j=n.onMouseEnter,q=n.onMouseOver,G=n.onMouseLeave,J=n.onClick,Q=n.onKeyDown,Z=n.onKeyUp,W=n.panelRef,ee=a.useState(!1),B=se(ee,2),k=B[0],U=B[1],ne=a.useState(!1),V=se(ne,2),ae=V[0],te=V[1];ve(function(){te(!0)},[]);var C=ae?h:!1,X=a.useRef(),l=a.useRef();ve(function(){C&&(l.current=document.activeElement)},[C]);var I=function(x){var $;if(U(x),L==null||L(x),!x&&l.current&&!(($=X.current)!==null&&$!==void 0&&$.contains(l.current))){var N;(N=l.current)===null||N===void 0||N.focus({preventScroll:!0})}},F=a.useMemo(function(){return{panel:W}},[W]);if(!T&&!k&&!C&&_)return null;var A={onMouseEnter:j,onMouseOver:q,onMouseLeave:G,onClick:J,onKeyDown:Q,onKeyUp:Z},oe=u(u({},n),{},{open:C,prefixCls:m,placement:c,autoFocus:D,keyboard:O,width:P,mask:g,maskClosable:S,inline:z===!1,afterOpenChange:I,ref:X},A);return a.createElement(he.Provider,{value:F},a.createElement(Ee,{open:C||T||k,autoDestroy:!1,getContainer:z,autoLock:g&&(C||k)},a.createElement(De,oe)))};export{Fe as D};
