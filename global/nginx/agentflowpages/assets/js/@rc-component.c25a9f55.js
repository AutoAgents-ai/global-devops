import{c as Ee}from"./classnames.b332fe9e.js";import{r as n,a as ne}from"./react.f4964a8e.js";import{c as E,f as Ut,g as Me,e as B,k as Dr,d as Tr}from"./@babel.c9e56d28.js";import{c as jt,a as U,g as Br,u as Fr,r as mr,s as qt,d as Ir,e as Ar,f as Ur,h as _e,i as cr,j as jr,k as hr,l as fr,m as qr,n as $r,o as Qr,p as gr}from"./rc-util.53097492.js";import{r as Lr}from"./react-dom.4c9f8b83.js";import{R as _r}from"./rc-resize-observer.f1d3fb20.js";import{C as zr}from"./rc-motion.d8194038.js";var Wr=n.createContext(null),yr=[];function Jr(e,r){var t=n.useState(function(){if(!jt())return null;var g=document.createElement("div");return g}),o=E(t,1),a=o[0],i=n.useRef(!1),l=n.useContext(Wr),s=n.useState(yr),m=E(s,2),f=m[0],h=m[1],u=l||(i.current?void 0:function(g){h(function(w){var M=[g].concat(Ut(w));return M})});function y(){a.parentElement||document.body.appendChild(a),i.current=!0}function v(){var g;(g=a.parentElement)===null||g===void 0||g.removeChild(a),i.current=!1}return U(function(){return e?l?l(y):y():v(),v},[e]),U(function(){f.length&&(f.forEach(function(g){return g()}),h(yr))},[f]),[a,u]}function Gr(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Kr="rc-util-locker-".concat(Date.now()),Cr=0;function Zr(e){var r=!!e,t=n.useState(function(){return Cr+=1,"".concat(Kr,"_").concat(Cr)}),o=E(t,1),a=o[0];U(function(){if(r){var i=Br(document.body).width,l=Gr();Fr(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(i,"px);"):"",`
}`),a)}else mr(a);return function(){mr(a)}},[r,a])}var wr=!1;function Or(e){return typeof e=="boolean"&&(wr=e),wr}var br=function(r){return r===!1?!1:!jt()||!r?null:typeof r=="string"?document.querySelector(r):typeof r=="function"?r():r},Qt=n.forwardRef(function(e,r){var t=e.open,o=e.autoLock,a=e.getContainer;e.debug;var i=e.autoDestroy,l=i===void 0?!0:i,s=e.children,m=n.useState(t),f=E(m,2),h=f[0],u=f[1],y=h||t;n.useEffect(function(){(l||t)&&u(t)},[t,l]);var v=n.useState(function(){return br(a)}),g=E(v,2),w=g[0],M=g[1];n.useEffect(function(){var q=br(a);M(q??null)});var k=Jr(y&&!w),N=E(k,2),S=N[0],d=N[1],R=w??S;Zr(o&&t&&jt()&&(R===S||R===document.body));var J=null;if(s&&qt(s)&&r){var G=s;J=G.ref}var p=Ir(J,r);if(!y||!jt()||w===void 0)return null;var ae=R===!1||Or(),j=s;return r&&(j=n.cloneElement(s,{ref:p})),n.createElement(Wr.Provider,{value:d},ae?j:Lr.createPortal(j,R))});function Yr(e){var r=e.prefixCls,t=e.align,o=e.arrow,a=e.arrowPos,i=o||{},l=i.className,s=i.content,m=a.x,f=m===void 0?0:m,h=a.y,u=h===void 0?0:h,y=n.useRef();if(!t||!t.points)return null;var v={position:"absolute"};if(t.autoArrow!==!1){var g=t.points[0],w=t.points[1],M=g[0],k=g[1],N=w[0],S=w[1];M===N||!["t","b"].includes(M)?v.top=u:M==="t"?v.top=0:v.bottom=0,k===S||!["l","r"].includes(k)?v.left=f:k==="l"?v.left=0:v.right=0}return n.createElement("div",{ref:y,className:Ee("".concat(r,"-arrow"),l),style:v},s)}function Xr(e){var r=e.prefixCls,t=e.open,o=e.zIndex,a=e.mask,i=e.motion;return a?n.createElement(zr,Me({},i,{motionAppear:!0,visible:t,removeOnLeave:!0}),function(l){var s=l.className;return n.createElement("div",{style:{zIndex:o},className:Ee("".concat(r,"-mask"),s)})}):null}var pr=n.memo(function(e){var r=e.children;return r},function(e,r){return r.cache}),en=n.forwardRef(function(e,r){var t=e.popup,o=e.className,a=e.prefixCls,i=e.style,l=e.target,s=e.onVisibleChanged,m=e.open,f=e.keepDom,h=e.fresh,u=e.onClick,y=e.mask,v=e.arrow,g=e.arrowPos,w=e.align,M=e.motion,k=e.maskMotion,N=e.forceRender,S=e.getPopupContainer,d=e.autoDestroy,R=e.portal,J=e.zIndex,G=e.onMouseEnter,p=e.onMouseLeave,ae=e.onPointerEnter,j=e.ready,q=e.offsetX,me=e.offsetY,se=e.offsetR,W=e.offsetB,Q=e.onAlign,D=e.onPrepare,P=e.stretch,T=e.targetWidth,x=e.targetHeight,K=typeof t=="function"?t():t,te=m||f,oe=(S==null?void 0:S.length)>0,qe=n.useState(!S||!oe),ze=E(qe,2),ie=ze[0],We=ze[1];if(U(function(){!ie&&oe&&l&&We(!0)},[ie,oe,l]),!ie)return null;var F="auto",I={left:"-1000vw",top:"-1000vh",right:F,bottom:F};if(j||!m){var ee,Z=w.points,Ve=w.dynamicInset||((ee=w._experimental)===null||ee===void 0?void 0:ee.dynamicInset),He=Ve&&Z[0][1]==="r",he=Ve&&Z[0][0]==="b";He?(I.right=se,I.left=F):(I.left=q,I.right=F),he?(I.bottom=W,I.top=F):(I.top=me,I.bottom=F)}var O={};return P&&(P.includes("height")&&x?O.height=x:P.includes("minHeight")&&x&&(O.minHeight=x),P.includes("width")&&T?O.width=T:P.includes("minWidth")&&T&&(O.minWidth=T)),m||(O.pointerEvents="none"),n.createElement(R,{open:N||te,getContainer:S&&function(){return S(l)},autoDestroy:d},n.createElement(Xr,{prefixCls:a,open:m,zIndex:J,mask:y,motion:k}),n.createElement(_r,{onResize:Q,disabled:!m},function(ke){return n.createElement(zr,Me({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:N,leavedClassName:"".concat(a,"-hidden")},M,{onAppearPrepare:D,onEnterPrepare:D,visible:m,onVisibleChanged:function(ge){var b;M==null||(b=M.onVisibleChanged)===null||b===void 0||b.call(M,ge),s(ge)}}),function(Y,ge){var b=Y.className,Ne=Y.style,ce=Ee(a,b,o);return n.createElement("div",{ref:Ar(ke,r,ge),className:ce,style:B(B(B(B({"--arrow-x":"".concat(g.x||0,"px"),"--arrow-y":"".concat(g.y||0,"px")},I),O),Ne),{},{boxSizing:"border-box",zIndex:J},i),onMouseEnter:G,onMouseLeave:p,onPointerEnter:ae,onClick:u},v&&n.createElement(Yr,{prefixCls:a,arrow:v,arrowPos:g,align:w}),n.createElement(pr,{cache:!m&&!h},K))})}))}),tn=n.forwardRef(function(e,r){var t=e.children,o=e.getTriggerDOMNode,a=qt(t),i=n.useCallback(function(s){Ur(r,o?o(s):s)},[o]),l=Ir(i,t.ref);return a?n.cloneElement(t,{ref:l}):t}),Mr=n.createContext(null);function Sr(e){return e?Array.isArray(e)?e:[e]:[]}function rn(e,r,t,o){return n.useMemo(function(){var a=Sr(t??r),i=Sr(o??r),l=new Set(a),s=new Set(i);return e&&(l.has("hover")&&(l.delete("hover"),l.add("click")),s.has("hover")&&(s.delete("hover"),s.add("click"))),[l,s]},[e,r,t,o])}function nn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0;return t?e[0]===r[0]:e[0]===r[0]&&e[1]===r[1]}function an(e,r,t,o){for(var a=t.points,i=Object.keys(e),l=0;l<i.length;l+=1){var s,m=i[l];if(nn((s=e[m])===null||s===void 0?void 0:s.points,a,o))return"".concat(r,"-placement-").concat(m)}return""}function Pr(e,r,t,o){return r||(t?{motionName:"".concat(e,"-").concat(t)}:o?{motionName:o}:null)}function wt(e){return e.ownerDocument.defaultView}function vr(e){for(var r=[],t=e==null?void 0:e.parentElement,o=["hidden","scroll","clip","auto"];t;){var a=wt(t).getComputedStyle(t),i=a.overflowX,l=a.overflowY,s=a.overflow;[i,l,s].some(function(m){return o.includes(m)})&&r.push(t),t=t.parentElement}return r}function Ct(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?r:e}function yt(e){return Ct(parseFloat(e),0)}function Er(e,r){var t=B({},e);return(r||[]).forEach(function(o){if(!(o instanceof HTMLBodyElement||o instanceof HTMLHtmlElement)){var a=wt(o).getComputedStyle(o),i=a.overflow,l=a.overflowClipMargin,s=a.borderTopWidth,m=a.borderBottomWidth,f=a.borderLeftWidth,h=a.borderRightWidth,u=o.getBoundingClientRect(),y=o.offsetHeight,v=o.clientHeight,g=o.offsetWidth,w=o.clientWidth,M=yt(s),k=yt(m),N=yt(f),S=yt(h),d=Ct(Math.round(u.width/g*1e3)/1e3),R=Ct(Math.round(u.height/y*1e3)/1e3),J=(g-w-N-S)*d,G=(y-v-M-k)*R,p=M*R,ae=k*R,j=N*d,q=S*d,me=0,se=0;if(i==="clip"){var W=yt(l);me=W*d,se=W*R}var Q=u.x+j-me,D=u.y+p-se,P=Q+u.width+2*me-j-q-J,T=D+u.height+2*se-p-ae-G;t.left=Math.max(t.left,Q),t.top=Math.max(t.top,D),t.right=Math.min(t.right,P),t.bottom=Math.min(t.bottom,T)}}),t}function kr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t="".concat(r),o=t.match(/^(.*)\%$/);return o?e*(parseFloat(o[1])/100):parseFloat(t)}function Nr(e,r){var t=r||[],o=E(t,2),a=o[0],i=o[1];return[kr(e.width,a),kr(e.height,i)]}function xr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function ut(e,r){var t=r[0],o=r[1],a,i;return t==="t"?i=e.y:t==="b"?i=e.y+e.height:i=e.y+e.height/2,o==="l"?a=e.x:o==="r"?a=e.x+e.width:a=e.x+e.width/2,{x:a,y:i}}function je(e,r){var t={t:"b",b:"t",l:"r",r:"l"};return e.map(function(o,a){return a===r?t[o]||"c":o}).join("")}function on(e,r,t,o,a,i,l){var s=n.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[o]||{}}),m=E(s,2),f=m[0],h=m[1],u=n.useRef(0),y=n.useMemo(function(){return r?vr(r):[]},[r]),v=n.useRef({}),g=function(){v.current={}};e||g();var w=_e(function(){if(r&&t&&e){let ve=function(zt,de){var it=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ne,Wt=x.x+zt,lt=x.y+de,Vt=Wt+I,gt=lt+F,Ht=Math.max(Wt,it.left),ir=Math.max(lt,it.top),lr=Math.min(Vt,it.right),ur=Math.min(gt,it.bottom);return Math.max(0,(lr-Ht)*(ur-ir))},_t=function(){Ke=x.y+_,Ze=Ke+F,Ie=x.x+H,Oe=Ie+I};var N,S,d=r,R=d.ownerDocument,J=wt(d),G=J.getComputedStyle(d),p=G.width,ae=G.height,j=G.position,q=d.style.left,me=d.style.top,se=d.style.right,W=d.style.bottom,Q=B(B({},a[o]),i),D=R.createElement("div");(N=d.parentElement)===null||N===void 0||N.appendChild(D),D.style.left="".concat(d.offsetLeft,"px"),D.style.top="".concat(d.offsetTop,"px"),D.style.position=j,D.style.height="".concat(d.offsetHeight,"px"),D.style.width="".concat(d.offsetWidth,"px"),d.style.left="0",d.style.top="0",d.style.right="auto",d.style.bottom="auto";var P;if(Array.isArray(t))P={x:t[0],y:t[1],width:0,height:0};else{var T=t.getBoundingClientRect();P={x:T.x,y:T.y,width:T.width,height:T.height}}var x=d.getBoundingClientRect(),K=R.documentElement,te=K.clientWidth,oe=K.clientHeight,qe=K.scrollWidth,ze=K.scrollHeight,ie=K.scrollTop,We=K.scrollLeft,F=x.height,I=x.width,ee=P.height,Z=P.width,Ve={left:0,top:0,right:te,bottom:oe},He={left:-We,top:-ie,right:qe-We,bottom:ze-ie},he=Q.htmlRegion,O="visible",ke="visibleFirst";he!=="scroll"&&he!==ke&&(he=O);var Y=he===ke,ge=Er(He,y),b=Er(Ve,y),Ne=he===O?b:ge,ce=Y?b:Ne;d.style.left="auto",d.style.top="auto",d.style.right="0",d.style.bottom="0";var le=d.getBoundingClientRect();d.style.left=q,d.style.top=me,d.style.right=se,d.style.bottom=W,(S=d.parentElement)===null||S===void 0||S.removeChild(D);var xe=Ct(Math.round(I/parseFloat(p)*1e3)/1e3),Re=Ct(Math.round(F/parseFloat(ae)*1e3)/1e3);if(xe===0||Re===0||cr(t)&&!jr(t))return;var Se=Q.offset,tt=Q.targetOffset,V=Nr(x,Se),X=E(V,2),ye=X[0],Ce=X[1],bt=Nr(P,tt),we=E(bt,2),Jt=we[0],Mt=we[1];P.x-=Jt,P.y-=Mt;var Gt=Q.points||[],Qe=E(Gt,2),fe=Qe[0],Be=Qe[1],De=xr(Be),ue=xr(fe),St=ut(P,De),Pt=ut(x,ue),Te=B({},Q),H=St.x-Pt.x+ye,_=St.y-Pt.y+Ce,z=ve(H,_),rt=ve(H,_,b),Fe=ut(P,["t","l"]),Je=ut(x,["t","l"]),st=ut(P,["b","r"]),ct=ut(x,["b","r"]),Ge=Q.overflow||{},be=Ge.adjustX,Kt=Ge.adjustY,ft=Ge.shiftX,nt=Ge.shiftY,vt=function(de){return typeof de=="boolean"?de:de>=0},Ke,Ze,Ie,Oe;_t();var Et=vt(Kt),dt=ue[0]===De[0];if(Et&&ue[0]==="t"&&(Ze>ce.bottom||v.current.bt)){var Ae=_;dt?Ae-=F-ee:Ae=Fe.y-ct.y-Ce;var kt=ve(H,Ae),at=ve(H,Ae,b);kt>z||kt===z&&(!Y||at>=rt)?(v.current.bt=!0,_=Ae,Ce=-Ce,Te.points=[je(ue,0),je(De,0)]):v.current.bt=!1}if(Et&&ue[0]==="b"&&(Ke<ce.top||v.current.tb)){var Ye=_;dt?Ye+=F-ee:Ye=st.y-Je.y-Ce;var re=ve(H,Ye),Zt=ve(H,Ye,b);re>z||re===z&&(!Y||Zt>=rt)?(v.current.tb=!0,_=Ye,Ce=-Ce,Te.points=[je(ue,0),je(De,0)]):v.current.tb=!1}var Nt=vt(be),xt=ue[1]===De[1];if(Nt&&ue[1]==="l"&&(Oe>ce.right||v.current.rl)){var Xe=H;xt?Xe-=I-Z:Xe=Fe.x-ct.x-ye;var Rt=ve(Xe,_),Ot=ve(Xe,_,b);Rt>z||Rt===z&&(!Y||Ot>=rt)?(v.current.rl=!0,H=Xe,ye=-ye,Te.points=[je(ue,1),je(De,1)]):v.current.rl=!1}if(Nt&&ue[1]==="r"&&(Ie<ce.left||v.current.lr)){var pe=H;xt?pe+=I-Z:pe=st.x-Je.x-ye;var Dt=ve(pe,_),Yt=ve(pe,_,b);Dt>z||Dt===z&&(!Y||Yt>=rt)?(v.current.lr=!0,H=pe,ye=-ye,Te.points=[je(ue,1),je(De,1)]):v.current.lr=!1}_t();var Pe=ft===!0?0:ft;typeof Pe=="number"&&(Ie<b.left&&(H-=Ie-b.left-ye,P.x+Z<b.left+Pe&&(H+=P.x-b.left+Z-Pe)),Oe>b.right&&(H-=Oe-b.right-ye,P.x>b.right-Pe&&(H+=P.x-b.right+Pe)));var $e=nt===!0?0:nt;typeof $e=="number"&&(Ke<b.top&&(_-=Ke-b.top-Ce,P.y+ee<b.top+$e&&(_+=P.y-b.top+ee-$e)),Ze>b.bottom&&(_-=Ze-b.bottom-Ce,P.y>b.bottom-$e&&(_+=P.y-b.bottom+$e)));var mt=x.x+H,Tt=mt+I,Ue=x.y+_,et=Ue+F,ht=P.x,ot=ht+Z,Le=P.y,Xt=Le+ee,pt=Math.max(mt,ht),er=Math.min(Tt,ot),It=(pt+er)/2,tr=It-mt,rr=Math.max(Ue,Le),nr=Math.min(et,Xt),$t=(rr+nr)/2,ar=$t-Ue;l==null||l(r,Te);var or=le.right-x.x-(H+x.width),Lt=le.bottom-x.y-(_+x.height);h({ready:!0,offsetX:H/xe,offsetY:_/Re,offsetR:or/xe,offsetB:Lt/Re,arrowX:tr/xe,arrowY:ar/Re,scaleX:xe,scaleY:Re,align:Te})}}),M=function(){u.current+=1;var S=u.current;Promise.resolve().then(function(){u.current===S&&w()})},k=function(){h(function(S){return B(B({},S),{},{ready:!1})})};return U(k,[o]),U(function(){e||k()},[e]),[f.ready,f.offsetX,f.offsetY,f.offsetR,f.offsetB,f.arrowX,f.arrowY,f.scaleX,f.scaleY,f.align,M]}function ln(e,r,t,o,a){U(function(){if(e&&r&&t){let u=function(){o(),a()};var i=r,l=t,s=vr(i),m=vr(l),f=wt(l),h=new Set([f].concat(Ut(s),Ut(m)));return h.forEach(function(y){y.addEventListener("scroll",u,{passive:!0})}),f.addEventListener("resize",u,{passive:!0}),o(),function(){h.forEach(function(y){y.removeEventListener("scroll",u),f.removeEventListener("resize",u)})}}},[e,r,t])}function un(e,r,t,o,a,i,l,s){var m=n.useRef(e),f=n.useRef(!1);m.current!==e&&(f.current=!0,m.current=e),n.useEffect(function(){var h=hr(function(){f.current=!1});return function(){hr.cancel(h)}},[e]),n.useEffect(function(){if(r&&o&&(!a||i)){var h=function(){var J=!1,G=function(j){var q=j.target;J=l(q)},p=function(j){var q=j.target;!f.current&&m.current&&!J&&!l(q)&&s(!1)};return[G,p]},u=h(),y=E(u,2),v=y[0],g=y[1],w=h(),M=E(w,2),k=M[0],N=M[1],S=wt(o);S.addEventListener("mousedown",v,!0),S.addEventListener("click",g,!0),S.addEventListener("contextmenu",g,!0);var d=fr(t);return d&&(d.addEventListener("mousedown",k,!0),d.addEventListener("click",N,!0),d.addEventListener("contextmenu",N,!0)),function(){S.removeEventListener("mousedown",v,!0),S.removeEventListener("click",g,!0),S.removeEventListener("contextmenu",g,!0),d&&(d.removeEventListener("mousedown",k,!0),d.removeEventListener("click",N,!0),d.removeEventListener("contextmenu",N,!0))}}},[r,t,o,a,i])}var sn=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function cn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Qt,r=n.forwardRef(function(t,o){var a=t.prefixCls,i=a===void 0?"rc-trigger-popup":a,l=t.children,s=t.action,m=s===void 0?"hover":s,f=t.showAction,h=t.hideAction,u=t.popupVisible,y=t.defaultPopupVisible,v=t.onPopupVisibleChange,g=t.afterPopupVisibleChange,w=t.mouseEnterDelay,M=t.mouseLeaveDelay,k=M===void 0?.1:M,N=t.focusDelay,S=t.blurDelay,d=t.mask,R=t.maskClosable,J=R===void 0?!0:R,G=t.getPopupContainer,p=t.forceRender,ae=t.autoDestroy,j=t.destroyPopupOnHide,q=t.popup,me=t.popupClassName,se=t.popupStyle,W=t.popupPlacement,Q=t.builtinPlacements,D=Q===void 0?{}:Q,P=t.popupAlign,T=t.zIndex,x=t.stretch,K=t.getPopupClassNameFromAlign,te=t.fresh,oe=t.alignPoint,qe=t.onPopupClick,ze=t.onPopupAlign,ie=t.arrow,We=t.popupMotion,F=t.maskMotion,I=t.popupTransitionName,ee=t.popupAnimation,Z=t.maskTransitionName,Ve=t.maskAnimation,He=t.className,he=t.getTriggerDOMNode,O=Dr(t,sn),ke=ae||j||!1,Y=n.useState(!1),ge=E(Y,2),b=ge[0],Ne=ge[1];U(function(){Ne(qr())},[]);var ce=n.useRef({}),le=n.useContext(Mr),xe=n.useMemo(function(){return{registerSubPopup:function(C,$){ce.current[C]=$,le==null||le.registerSubPopup(C,$)}}},[le]),Re=$r(),Se=n.useState(null),tt=E(Se,2),V=tt[0],X=tt[1],ye=_e(function(c){cr(c)&&V!==c&&X(c),le==null||le.registerSubPopup(Re,c)}),Ce=n.useState(null),bt=E(Ce,2),we=bt[0],Jt=bt[1],Mt=n.useRef(null),Gt=_e(function(c){cr(c)&&we!==c&&(Jt(c),Mt.current=c)}),Qe=n.Children.only(l),fe=(Qe==null?void 0:Qe.props)||{},Be={},De=_e(function(c){var C,$,A=we;return(A==null?void 0:A.contains(c))||((C=fr(A))===null||C===void 0?void 0:C.host)===c||c===A||(V==null?void 0:V.contains(c))||(($=fr(V))===null||$===void 0?void 0:$.host)===c||c===V||Object.values(ce.current).some(function(L){return(L==null?void 0:L.contains(c))||c===L})}),ue=Pr(i,We,ee,I),St=Pr(i,F,Ve,Z),Pt=n.useState(y||!1),Te=E(Pt,2),H=Te[0],_=Te[1],z=u??H,rt=_e(function(c){u===void 0&&_(c)});U(function(){_(u||!1)},[u]);var Fe=n.useRef(z);Fe.current=z;var Je=n.useRef([]);Je.current=[];var st=_e(function(c){var C;rt(c),((C=Je.current[Je.current.length-1])!==null&&C!==void 0?C:z)!==c&&(Je.current.push(c),v==null||v(c))}),ct=n.useRef(),Ge=function(){clearTimeout(ct.current)},be=function(C){var $=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;Ge(),$===0?st(C):ct.current=setTimeout(function(){st(C)},$*1e3)};n.useEffect(function(){return Ge},[]);var Kt=n.useState(!1),ft=E(Kt,2),nt=ft[0],vt=ft[1];U(function(c){(!c||z)&&vt(!0)},[z]);var Ke=n.useState(null),Ze=E(Ke,2),Ie=Ze[0],Oe=Ze[1],Et=n.useState([0,0]),dt=E(Et,2),Ae=dt[0],kt=dt[1],at=function(C){kt([C.clientX,C.clientY])},Ye=on(z,V,oe?Ae:we,W,D,P,ze),re=E(Ye,11),Zt=re[0],Nt=re[1],xt=re[2],Xe=re[3],Rt=re[4],Ot=re[5],pe=re[6],Dt=re[7],Yt=re[8],Pe=re[9],$e=re[10],mt=rn(b,m,f,h),Tt=E(mt,2),Ue=Tt[0],et=Tt[1],ht=Ue.has("click"),ot=et.has("click")||et.has("contextMenu"),Le=_e(function(){nt||$e()}),Xt=function(){Fe.current&&oe&&ot&&be(!1)};ln(z,we,V,Le,Xt),U(function(){Le()},[Ae,W]),U(function(){z&&!(D!=null&&D[W])&&Le()},[JSON.stringify(P)]);var pt=n.useMemo(function(){var c=an(D,i,Pe,oe);return Ee(c,K==null?void 0:K(Pe))},[Pe,K,D,i,oe]);n.useImperativeHandle(o,function(){return{nativeElement:Mt.current,forceAlign:Le}});var er=n.useState(0),It=E(er,2),tr=It[0],rr=It[1],nr=n.useState(0),$t=E(nr,2),ar=$t[0],or=$t[1],Lt=function(){if(x&&we){var C=we.getBoundingClientRect();rr(C.width),or(C.height)}},ve=function(){Lt(),Le()},_t=function(C){vt(!1),$e(),g==null||g(C)},zt=function(){return new Promise(function(C){Lt(),Oe(function(){return C})})};U(function(){Ie&&($e(),Ie(),Oe(null))},[Ie]);function de(c,C,$,A){Be[c]=function(L){var Bt;A==null||A(L),be(C,$);for(var sr=arguments.length,dr=new Array(sr>1?sr-1:0),Ft=1;Ft<sr;Ft++)dr[Ft-1]=arguments[Ft];(Bt=fe[c])===null||Bt===void 0||Bt.call.apply(Bt,[fe,L].concat(dr))}}(ht||ot)&&(Be.onClick=function(c){var C;Fe.current&&ot?be(!1):!Fe.current&&ht&&(at(c),be(!0));for(var $=arguments.length,A=new Array($>1?$-1:0),L=1;L<$;L++)A[L-1]=arguments[L];(C=fe.onClick)===null||C===void 0||C.call.apply(C,[fe,c].concat(A))}),un(z,ot,we,V,d,J,De,be);var it=Ue.has("hover"),Wt=et.has("hover"),lt,Vt;it&&(de("onMouseEnter",!0,w,function(c){at(c)}),de("onPointerEnter",!0,w,function(c){at(c)}),lt=function(){(z||nt)&&be(!0,w)},oe&&(Be.onMouseMove=function(c){var C;(C=fe.onMouseMove)===null||C===void 0||C.call(fe,c)})),Wt&&(de("onMouseLeave",!1,k),de("onPointerLeave",!1,k),Vt=function(){be(!1,k)}),Ue.has("focus")&&de("onFocus",!0,N),et.has("focus")&&de("onBlur",!1,S),Ue.has("contextMenu")&&(Be.onContextMenu=function(c){var C;Fe.current&&et.has("contextMenu")?be(!1):(at(c),be(!0)),c.preventDefault();for(var $=arguments.length,A=new Array($>1?$-1:0),L=1;L<$;L++)A[L-1]=arguments[L];(C=fe.onContextMenu)===null||C===void 0||C.call.apply(C,[fe,c].concat(A))}),He&&(Be.className=Ee(fe.className,He));var gt=B(B({},fe),Be),Ht={},ir=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];ir.forEach(function(c){O[c]&&(Ht[c]=function(){for(var C,$=arguments.length,A=new Array($),L=0;L<$;L++)A[L]=arguments[L];(C=gt[c])===null||C===void 0||C.call.apply(C,[gt].concat(A)),O[c].apply(O,A)})});var lr=n.cloneElement(Qe,B(B({},gt),Ht)),ur={x:Ot,y:pe},Hr=ie?B({},ie!==!0?ie:{}):null;return n.createElement(n.Fragment,null,n.createElement(_r,{disabled:!z,ref:Gt,onResize:ve},n.createElement(tn,{getTriggerDOMNode:he},lr)),n.createElement(Mr.Provider,{value:xe},n.createElement(en,{portal:e,ref:ye,prefixCls:i,popup:q,className:Ee(me,pt),style:se,target:we,onMouseEnter:lt,onMouseLeave:Vt,onPointerEnter:lt,zIndex:T,open:z,keepDom:nt,fresh:te,onClick:qe,mask:d,motion:ue,maskMotion:St,onVisibleChanged:_t,onPrepare:zt,forceRender:p,autoDestroy:ke,getPopupContainer:G,align:Pe,arrow:Hr,arrowPos:ur,ready:Zt,offsetX:Nt,offsetY:xt,offsetR:Xe,offsetB:Rt,onAlign:Le,stretch:x,targetWidth:tr/Dt,targetHeight:ar/Yt})))});return r}const fn=cn(Qt);function Rn(e){var r=n.createContext(void 0),t=function(a){var i=a.value,l=a.children,s=n.useRef(i);s.current=i;var m=n.useState(function(){return{getValue:function(){return s.current},listeners:new Set}}),f=E(m,1),h=f[0];return U(function(){Lr.unstable_batchedUpdates(function(){h.listeners.forEach(function(u){u(i)})})},[i]),n.createElement(r.Provider,{value:h},l)};return{Context:r,Provider:t,defaultValue:e}}function Dn(e,r){var t=_e(typeof r=="function"?r:function(u){if(r===void 0)return u;if(!Array.isArray(r))return u[r];var y={};return r.forEach(function(v){y[v]=u[v]}),y}),o=n.useContext(e==null?void 0:e.Context),a=o||{},i=a.listeners,l=a.getValue,s=n.useRef();s.current=t(o?l():e==null?void 0:e.defaultValue);var m=n.useState({}),f=E(m,2),h=f[1];return U(function(){if(!o)return;function u(y){var v=t(y);Qr(s.current,v,!0)||h({})}return i.add(u),function(){i.delete(u)}},[o]),s.current}function Tn(){var e=n.createContext(null);function r(){return n.useContext(e)}function t(a,i){var l=qt(a),s=function(f,h){var u=l?{ref:h}:{},y=n.useRef(0),v=n.useRef(f),g=r();return g!==null?n.createElement(a,Me({},f,u)):((!i||i(v.current,f))&&(y.current+=1),v.current=f,n.createElement(e.Provider,{value:y.current},n.createElement(a,Me({},f,u))))};return l?n.forwardRef(s):s}function o(a,i){var l=qt(a),s=function(f,h){var u=l?{ref:h}:{};return r(),n.createElement(a,Me({},f,u))};return l?n.memo(n.forwardRef(s),i):n.memo(s,i)}return{makeImmutable:t,responseImmutable:o,useImmutableMark:r}}function vn(e){var r=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight,o=e.getBoundingClientRect(),a=o.top,i=o.right,l=o.bottom,s=o.left;return a>=0&&s>=0&&i<=r&&l<=t}function dn(e,r,t){var o;return(o=t??r)!==null&&o!==void 0?o:e===null?"center":"bottom"}function mn(e,r,t,o){var a=n.useState(void 0),i=E(a,2),l=i[0],s=i[1];U(function(){var w=typeof e=="function"?e():e;s(w||null)});var m=n.useState(null),f=E(m,2),h=f[0],u=f[1],y=_e(function(){if(l){!vn(l)&&r&&l.scrollIntoView(o);var w=l.getBoundingClientRect(),M=w.left,k=w.top,N=w.width,S=w.height,d={left:M,top:k,width:N,height:S,radius:0};u(function(R){return JSON.stringify(R)!==JSON.stringify(d)?d:R})}else u(null)}),v=function(M){var k;return(k=Array.isArray(t==null?void 0:t.offset)?t==null?void 0:t.offset[M]:t==null?void 0:t.offset)!==null&&k!==void 0?k:6};U(function(){return y(),window.addEventListener("resize",y),function(){window.removeEventListener("resize",y)}},[l,r,y]);var g=n.useMemo(function(){if(!h)return h;var w=v(0),M=v(1),k=(t==null?void 0:t.radius)||2;return{left:h.left-w,top:h.top-M,width:h.width+w*2,height:h.height+M*2,radius:k}},[h,t]);return[g,l]}var At={fill:"transparent",pointerEvents:"auto"},hn=function(r){var t=r.prefixCls,o=r.rootClassName,a=r.pos,i=r.showMask,l=r.style,s=l===void 0?{}:l,m=r.fill,f=m===void 0?"rgba(0,0,0,0.5)":m,h=r.open,u=r.animated,y=r.zIndex,v=$r(),g="".concat(t,"-mask-").concat(v),w=Tr(u)==="object"?u==null?void 0:u.placeholder:u;return ne.createElement(Qt,{open:h,autoLock:!0},ne.createElement("div",{className:Ee("".concat(t,"-mask"),o),style:B({position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:y,pointerEvents:"none"},s)},i?ne.createElement("svg",{style:{width:"100%",height:"100%"}},ne.createElement("defs",null,ne.createElement("mask",{id:g},ne.createElement("rect",{x:"0",y:"0",width:"100vw",height:"100vh",fill:"white"}),a&&ne.createElement("rect",{x:a.left,y:a.top,rx:a.radius,width:a.width,height:a.height,fill:"black",className:w?"".concat(t,"-placeholder-animated"):""}))),ne.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:f,mask:"url(#".concat(g,")")}),a&&ne.createElement(ne.Fragment,null,ne.createElement("rect",Me({},At,{x:"0",y:"0",width:"100%",height:a.top})),ne.createElement("rect",Me({},At,{x:"0",y:"0",width:a.left,height:"100%"})),ne.createElement("rect",Me({},At,{x:"0",y:a.top+a.height,width:"100%",height:"calc(100vh - ".concat(a.top+a.height,"px)")})),ne.createElement("rect",Me({},At,{x:a.left+a.width,y:"0",width:"calc(100vw - ".concat(a.left+a.width,"px)"),height:"100%"})))):null))},gn=[0,0],Rr={left:{points:["cr","cl"],offset:[-8,0]},right:{points:["cl","cr"],offset:[8,0]},top:{points:["bc","tc"],offset:[0,-8]},bottom:{points:["tc","bc"],offset:[0,8]},topLeft:{points:["bl","tl"],offset:[0,-8]},leftTop:{points:["tr","tl"],offset:[-8,0]},topRight:{points:["br","tr"],offset:[0,-8]},rightTop:{points:["tl","tr"],offset:[8,0]},bottomRight:{points:["tr","br"],offset:[0,8]},rightBottom:{points:["bl","br"],offset:[8,0]},bottomLeft:{points:["tl","bl"],offset:[0,8]},leftBottom:{points:["br","bl"],offset:[-8,0]}};function Vr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,r={};return Object.keys(Rr).forEach(function(t){r[t]=B(B({},Rr[t]),{},{autoArrow:e,targetOffset:gn})}),r}Vr();function yn(e){var r=e.prefixCls,t=e.current,o=e.total,a=e.title,i=e.description,l=e.onClose,s=e.onPrev,m=e.onNext,f=e.onFinish,h=e.className,u=e.closeIcon,y=u!==!1&&u!==null,v=u!==void 0&&u!==!0?u:n.createElement("span",{className:"".concat(r,"-close-x")},"×");return n.createElement("div",{className:Ee("".concat(r,"-content"),h)},n.createElement("div",{className:"".concat(r,"-inner")},y&&n.createElement("button",{type:"button",onClick:l,"aria-label":"Close",className:"".concat(r,"-close")},v),n.createElement("div",{className:"".concat(r,"-header")},n.createElement("div",{className:"".concat(r,"-title")},a)),n.createElement("div",{className:"".concat(r,"-description")},i),n.createElement("div",{className:"".concat(r,"-footer")},n.createElement("div",{className:"".concat(r,"-sliders")},o>1?Ut(Array.from({length:o}).keys()).map(function(g,w){return n.createElement("span",{key:g,className:w===t?"active":""})}):null),n.createElement("div",{className:"".concat(r,"-buttons")},t!==0?n.createElement("button",{className:"".concat(r,"-prev-btn"),onClick:s},"Prev"):null,t===o-1?n.createElement("button",{className:"".concat(r,"-finish-btn"),onClick:f},"Finish"):n.createElement("button",{className:"".concat(r,"-next-btn"),onClick:m},"Next")))))}var Cn=function(r){var t=r.current,o=r.renderPanel;return n.createElement(n.Fragment,null,typeof o=="function"?o(r,t):n.createElement(yn,r))},wn=["prefixCls","steps","defaultCurrent","current","onChange","onClose","onFinish","open","mask","arrow","rootClassName","placement","renderPanel","gap","animated","scrollIntoViewOptions","zIndex","closeIcon"],bn={left:"50%",top:"50%",width:1,height:1},In=function(r){var t=r.prefixCls,o=t===void 0?"rc-tour":t,a=r.steps,i=a===void 0?[]:a,l=r.defaultCurrent,s=r.current,m=r.onChange,f=r.onClose,h=r.onFinish,u=r.open,y=r.mask,v=y===void 0?!0:y,g=r.arrow,w=g===void 0?!0:g,M=r.rootClassName,k=r.placement,N=r.renderPanel,S=r.gap,d=r.animated,R=r.scrollIntoViewOptions,J=R===void 0?!0:R,G=r.zIndex,p=G===void 0?1001:G,ae=r.closeIcon,j=Dr(r,wn),q=n.useRef(),me=gr(0,{value:s,defaultValue:l}),se=E(me,2),W=se[0],Q=se[1],D=gr(void 0,{value:u,postState:function(X){return W<0||W>=i.length?!1:X??!0}}),P=E(D,2),T=P[0],x=P[1],K=n.useRef(T);U(function(){T&&!K.current&&Q(0),K.current=T},[T]);var te=i[W]||{},oe=te.target,qe=te.placement,ze=te.style,ie=te.arrow,We=te.className,F=te.mask,I=te.scrollIntoViewOptions,ee=te.closeIcon,Z=T&&(F??v),Ve=ee??ae,He=I??J,he=mn(oe,u,S,He),O=E(he,2),ke=O[0],Y=O[1],ge=dn(Y,k,qe),b=Y?typeof ie>"u"?w:ie:!1,Ne=Tr(b)==="object"?b.pointAtCenter:!1;U(function(){var V;(V=q.current)===null||V===void 0||V.forceAlign()},[Ne,W]);var ce=function(X){Q(X),m==null||m(X)};if(Y===void 0)return null;var le=function(){x(!1),f==null||f(W)},xe=function(){return n.createElement(Cn,Me({arrow:b,key:"content",prefixCls:o,total:i.length,renderPanel:N,onPrev:function(){ce(W-1)},onNext:function(){ce(W+1)},onClose:le,current:W,onFinish:function(){le(),h==null||h()},closeIcon:Ve},i[W]))},Re=typeof Z=="boolean"?Z:!!Z,Se=typeof Z=="boolean"?void 0:Z,tt=function(X){return X||Y||document.body};return n.createElement(n.Fragment,null,n.createElement(hn,{zIndex:p,prefixCls:o,pos:ke,showMask:Re,style:Se==null?void 0:Se.style,fill:Se==null?void 0:Se.color,open:T,animated:d,rootClassName:M}),n.createElement(fn,Me({builtinPlacements:Vr(Ne)},j,{ref:q,popupStyle:ze,popupPlacement:ge,popupVisible:T,popupClassName:Ee(M,We),prefixCls:o,popup:xe,forceRender:!1,destroyPopupOnHide:!0,zIndex:p,getTriggerDOMNode:tt,arrow:!!b}),n.createElement(Qt,{open:T,autoLock:!0},n.createElement("div",{className:Ee(M,"".concat(o,"-target-placeholder")),style:B(B({},ke||bn),{},{position:"fixed",pointerEvents:"none"})}))))};export{Qt as P,In as T,fn as a,Rn as b,Tn as c,Dn as u};
