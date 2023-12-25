import{e as O,b as k,g as Qe,c as T,_ as Mt,a as pt,d as Pe,k as bt}from"./@babel.c9e56d28.js";import{r as t}from"./react.f4964a8e.js";import{r as Ge}from"./react-dom.4c9f8b83.js";import{c as be}from"./classnames.b332fe9e.js";import{R as et}from"./rc-resize-observer.f1d3fb20.js";import{k as B,L as yt,a as Re,h as Ue}from"./rc-util.53097492.js";var tt=t.forwardRef(function(e,s){var r=e.height,c=e.offsetY,g=e.offsetX,a=e.children,f=e.prefixCls,d=e.onInnerResize,m=e.innerProps,y=e.rtl,h=e.extra,n={},u={display:"flex",flexDirection:"column"};if(c!==void 0){var i;n={height:r,position:"relative",overflow:"hidden"},u=O(O({},u),{},(i={transform:"translateY(".concat(c,"px)")},k(i,y?"marginRight":"marginLeft",-g),k(i,"position","absolute"),k(i,"left",0),k(i,"right",0),k(i,"top",0),i))}return t.createElement("div",{style:n},t.createElement(et,{onResize:function(S){var v=S.offsetHeight;v&&d&&d()}},t.createElement("div",Qe({style:u,className:be(k({},"".concat(f,"-holder-inner"),f)),ref:s},m),a,h)))});tt.displayName="Filler";function je(e,s){var r="touches"in e?e.touches[0]:e;return r[s?"pageX":"pageY"]}var Ze=t.forwardRef(function(e,s){var r,c=e.prefixCls,g=e.rtl,a=e.scrollOffset,f=e.scrollRange,d=e.onStartMove,m=e.onStopMove,y=e.onScroll,h=e.horizontal,n=e.spinSize,u=e.containerSize,i=e.style,R=e.thumbStyle,S=t.useState(!1),v=T(S,2),p=v[0],b=v[1],C=t.useState(null),_=T(C,2),N=_[0],W=_[1],x=t.useState(null),K=T(x,2),D=K[0],Y=K[1],P=!g,J=t.useRef(),E=t.useRef(),F=t.useState(!1),Q=T(F,2),ee=Q[0],U=Q[1],I=t.useRef(),te=function(){clearTimeout(I.current),U(!0),I.current=setTimeout(function(){U(!1)},3e3)},re=f-u||0,oe=u-n||0,ne=re>0,X=t.useMemo(function(){if(a===0||re===0)return 0;var H=a/re;return H*oe},[a,re,oe]),ye=function(z){z.stopPropagation(),z.preventDefault()},le=t.useRef({top:X,dragging:p,pageY:N,startTop:D});le.current={top:X,dragging:p,pageY:N,startTop:D};var se=function(z){b(!0),W(je(z,h)),Y(le.current.top),d(),z.stopPropagation(),z.preventDefault()};t.useEffect(function(){var H=function(ve){ve.preventDefault()},z=J.current,G=E.current;return z.addEventListener("touchstart",H),G.addEventListener("touchstart",se),function(){z.removeEventListener("touchstart",H),G.removeEventListener("touchstart",se)}},[]);var ce=t.useRef();ce.current=re;var fe=t.useRef();fe.current=oe,t.useEffect(function(){if(p){var H,z=function(ve){var de=le.current,xe=de.dragging,ue=de.pageY,Ee=de.startTop;if(B.cancel(H),xe){var he=je(ve,h)-ue,ae=Ee;!P&&h?ae-=he:ae+=he;var pe=ce.current,ie=fe.current,j=ie?ae/ie:0,$=Math.ceil(j*pe);$=Math.max($,0),$=Math.min($,pe),H=B(function(){y($,h)})}},G=function(){b(!1),m()};return window.addEventListener("mousemove",z),window.addEventListener("touchmove",z),window.addEventListener("mouseup",G),window.addEventListener("touchend",G),function(){window.removeEventListener("mousemove",z),window.removeEventListener("touchmove",z),window.removeEventListener("mouseup",G),window.removeEventListener("touchend",G),B.cancel(H)}}},[p]),t.useEffect(function(){te()},[a]),t.useImperativeHandle(s,function(){return{delayHidden:te}});var A="".concat(c,"-scrollbar"),w={position:"absolute",visibility:ee&&ne?null:"hidden"},V={position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"};return h?(w.height=8,w.left=0,w.right=0,w.bottom=0,V.height="100%",V.width=n,P?V.left=X:V.right=X):(w.width=8,w.top=0,w.bottom=0,P?w.right=0:w.left=0,V.width="100%",V.height=n,V.top=X),t.createElement("div",{ref:J,className:be(A,(r={},k(r,"".concat(A,"-horizontal"),h),k(r,"".concat(A,"-vertical"),!h),k(r,"".concat(A,"-visible"),ee),r)),style:O(O({},w),i),onMouseDown:ye,onMouseMove:te},t.createElement("div",{ref:E,className:be("".concat(A,"-thumb"),k({},"".concat(A,"-thumb-moving"),p)),style:O(O({},V),R),onMouseDown:se}))});function xt(e){var s=e.children,r=e.setRef,c=t.useCallback(function(g){r(g)},[]);return t.cloneElement(s,{ref:c})}function Et(e,s,r,c,g,a,f){var d=f.getKey;return e.slice(s,r+1).map(function(m,y){var h=s+y,n=a(m,h,{style:{width:c}}),u=d(m);return t.createElement(xt,{key:u,setRef:function(R){return g(m,R)}},n)})}var wt=function(){function e(){pt(this,e),this.maps=void 0,this.id=0,this.maps=Object.create(null)}return Mt(e,[{key:"set",value:function(r,c){this.maps[r]=c,this.id+=1}},{key:"get",value:function(r){return this.maps[r]}}]),e}();function zt(e,s,r){var c=t.useState(0),g=T(c,2),a=g[0],f=g[1],d=t.useRef(new Map),m=t.useRef(new wt),y=t.useRef();function h(){B.cancel(y.current)}function n(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;h();var R=function(){d.current.forEach(function(v,p){if(v&&v.offsetParent){var b=yt(v),C=b.offsetHeight;m.current.get(p)!==C&&m.current.set(p,b.offsetHeight)}}),f(function(v){return v+1})};i?R():y.current=B(R)}function u(i,R){var S=e(i),v=d.current.get(S);R?(d.current.set(S,R),n()):d.current.delete(S),!v!=!R&&(R?s==null||s(i):r==null||r(i))}return t.useEffect(function(){return h},[]),[u,n,m.current,a]}var Lt=10;function _t(e,s,r,c,g,a,f,d){var m=t.useRef(),y=t.useState(null),h=T(y,2),n=h[0],u=h[1];return Re(function(){if(n&&n.times<Lt){if(!e.current){u(function(te){return O({},te)});return}a();var i=n.targetAlign,R=n.originAlign,S=n.index,v=n.offset,p=e.current.clientHeight,b=!1,C=i,_=null;if(p){for(var N=i||R,W=0,x=0,K=0,D=Math.min(s.length-1,S),Y=0;Y<=D;Y+=1){var P=g(s[Y]);x=W;var J=r.get(P);K=x+(J===void 0?c:J),W=K}for(var E=N==="top"?v:p-v,F=D;F>=0;F-=1){var Q=g(s[F]),ee=r.get(Q);if(ee===void 0){b=!0;break}if(E-=ee,E<=0)break}switch(N){case"top":_=x-v;break;case"bottom":_=K-p+v;break;default:{var U=e.current.scrollTop,I=U+p;x<U?C="top":K>I&&(C="bottom")}}_!==null&&f(_),_!==n.lastTop&&(b=!0)}b&&u(O(O({},n),{},{times:n.times+1,targetAlign:C,lastTop:_}))}},[n,e.current]),function(i){if(i==null){d();return}if(B.cancel(m.current),typeof i=="number")f(i);else if(i&&Pe(i)==="object"){var R,S=i.align;"index"in i?R=i.index:R=s.findIndex(function(b){return g(b)===i.key});var v=i.offset,p=v===void 0?0:v;u({times:0,index:R,offset:p,originAlign:S})}}}function Ht(e,s,r){var c=e.length,g=s.length,a,f;if(c===0&&g===0)return null;c<g?(a=e,f=s):(a=s,f=e);var d={__EMPTY_ITEM__:!0};function m(R){return R!==void 0?r(R):d}for(var y=null,h=Math.abs(c-g)!==1,n=0;n<f.length;n+=1){var u=m(a[n]),i=m(f[n]);if(u!==i){y=n,h=h||u!==m(f[n+1]);break}}return y===null?null:{index:y,multiple:h}}function Tt(e,s,r){var c=t.useState(e),g=T(c,2),a=g[0],f=g[1],d=t.useState(null),m=T(d,2),y=m[0],h=m[1];return t.useEffect(function(){var n=Ht(a||[],e||[],s);(n==null?void 0:n.index)!==void 0&&(r==null||r(n.index),h(e[n.index])),f(e)},[e]),[y]}var qe=(typeof navigator>"u"?"undefined":Pe(navigator))==="object"&&/Firefox/i.test(navigator.userAgent);const rt=function(e,s){var r=t.useRef(!1),c=t.useRef(null);function g(){clearTimeout(c.current),r.current=!0,c.current=setTimeout(function(){r.current=!1},50)}var a=t.useRef({top:e,bottom:s});return a.current.top=e,a.current.bottom=s,function(f){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=f<0&&a.current.top||f>0&&a.current.bottom;return d&&m?(clearTimeout(c.current),r.current=!1):(!m||r.current)&&g(),!r.current&&m}};function Ct(e,s,r,c,g){var a=t.useRef(0),f=t.useRef(null),d=t.useRef(null),m=t.useRef(!1),y=rt(s,r);function h(v,p){B.cancel(f.current),a.current+=p,d.current=p,!y(p)&&(qe||v.preventDefault(),f.current=B(function(){var b=m.current?10:1;g(a.current*b),a.current=0}))}function n(v,p){g(p,!0),qe||v.preventDefault()}var u=t.useRef(null),i=t.useRef(null);function R(v){if(e){B.cancel(i.current),i.current=B(function(){u.current=null},2);var p=v.deltaX,b=v.deltaY,C=v.shiftKey,_=p,N=b;(u.current==="sx"||!u.current&&C&&b&&!p)&&(_=b,N=0,u.current="sx");var W=Math.abs(_),x=Math.abs(N);u.current===null&&(u.current=c&&W>x?"x":"y"),u.current==="y"?h(v,N):n(v,_)}}function S(v){e&&(m.current=v.detail===d.current)}return[R,S]}var Dt=14/15;function Pt(e,s,r){var c=t.useRef(!1),g=t.useRef(0),a=t.useRef(null),f=t.useRef(null),d,m=function(u){if(c.current){var i=Math.ceil(u.touches[0].pageY),R=g.current-i;g.current=i,r(R)&&u.preventDefault(),clearInterval(f.current),f.current=setInterval(function(){R*=Dt,(!r(R,!0)||Math.abs(R)<=.1)&&clearInterval(f.current)},16)}},y=function(){c.current=!1,d()},h=function(u){d(),u.touches.length===1&&!c.current&&(c.current=!0,g.current=Math.ceil(u.touches[0].pageY),a.current=u.target,a.current.addEventListener("touchmove",m),a.current.addEventListener("touchend",y))};d=function(){a.current&&(a.current.removeEventListener("touchmove",m),a.current.removeEventListener("touchend",y))},Re(function(){return e&&s.current.addEventListener("touchstart",h),function(){var n;(n=s.current)===null||n===void 0||n.removeEventListener("touchstart",h),d(),clearInterval(f.current)}},[e])}var It=20;function Je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e/s*100;return isNaN(r)&&(r=0),r=Math.max(r,It),r=Math.min(r,e/2),Math.floor(r)}function kt(e,s,r,c){var g=t.useMemo(function(){return[new Map,[]]},[e,r.id,c]),a=T(g,2),f=a[0],d=a[1],m=function(h){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:h,u=f.get(h),i=f.get(n);if(u===void 0||i===void 0)for(var R=e.length,S=d.length;S<R;S+=1){var v,p=e[S],b=s(p);f.set(b,S);var C=(v=r.get(b))!==null&&v!==void 0?v:c;if(d[S]=(d[S-1]||0)+C,b===h&&(u=S),b===n&&(i=S),u!==void 0&&i!==void 0)break}return{top:d[u-1]||0,bottom:d[i]}};return m}var Ot=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","scrollWidth","component","onScroll","onVirtualScroll","onVisibleChange","innerProps","extraRender","styles"],Nt=[],Yt={overflowY:"auto",overflowAnchor:"none"};function Ft(e,s){var r=e.prefixCls,c=r===void 0?"rc-virtual-list":r,g=e.className,a=e.height,f=e.itemHeight,d=e.fullHeight,m=d===void 0?!0:d,y=e.style,h=e.data,n=e.children,u=e.itemKey,i=e.virtual,R=e.direction,S=e.scrollWidth,v=e.component,p=v===void 0?"div":v,b=e.onScroll,C=e.onVirtualScroll,_=e.onVisibleChange,N=e.innerProps,W=e.extraRender,x=e.styles,K=bt(e,Ot),D=!!(i!==!1&&a&&f),Y=D&&h&&(f*h.length>a||!!S),P=R==="rtl",J=be(c,k({},"".concat(c,"-rtl"),P),g),E=h||Nt,F=t.useRef(),Q=t.useRef(),ee=t.useState(0),U=T(ee,2),I=U[0],te=U[1],re=t.useState(0),oe=T(re,2),ne=oe[0],X=oe[1],ye=t.useState(!1),le=T(ye,2),se=le[0],ce=le[1],fe=function(){ce(!0)},A=function(){ce(!1)},w=t.useCallback(function(o){return typeof u=="function"?u(o):o==null?void 0:o[u]},[u]),V={getKey:w};function H(o){te(function(l){var M;typeof o=="function"?M=o(l):M=o;var L=ut(M);return F.current.scrollTop=L,L})}var z=t.useRef({start:0,end:E.length}),G=t.useRef(),Me=Tt(E,w),ve=T(Me,1),de=ve[0];G.current=de;var xe=zt(w,null,null),ue=T(xe,4),Ee=ue[0],he=ue[1],ae=ue[2],pe=ue[3],ie=t.useMemo(function(){if(!D)return{scrollHeight:void 0,start:0,end:E.length-1,offset:void 0};if(!Y){var o;return{scrollHeight:((o=Q.current)===null||o===void 0?void 0:o.offsetHeight)||0,start:0,end:E.length-1,offset:void 0}}for(var l=0,M,L,q,gt=E.length,me=0;me<gt;me+=1){var mt=E[me],Rt=w(mt),Ae=ae.get(Rt),De=l+(Ae===void 0?f:Ae);De>=I&&M===void 0&&(M=me,L=l),De>I+a&&q===void 0&&(q=me),l=De}return M===void 0&&(M=0,L=0,q=Math.ceil(a/f)),q===void 0&&(q=E.length-1),q=Math.min(q+1,E.length-1),{scrollHeight:l,start:M,end:q,offset:L}},[Y,D,I,E,pe,a]),j=ie.scrollHeight,$=ie.start,Se=ie.end,Ie=ie.offset;z.current.start=$,z.current.end=Se;var nt=t.useState({width:0,height:a}),ke=T(nt,2),Z=ke[0],at=ke[1],it=function(l){at({width:l.width||l.offsetWidth,height:l.height||l.offsetHeight})},Oe=t.useRef(),Ne=t.useRef(),ot=t.useMemo(function(){return Je(Z.width,S)},[Z.width,S]),lt=t.useMemo(function(){return Je(Z.height,j)},[Z.height,j]),we=j-a,ze=t.useRef(we);ze.current=we;function ut(o){var l=o;return Number.isNaN(ze.current)||(l=Math.min(l,ze.current)),l=Math.max(l,0),l}var Ye=I<=0,Fe=I>=we,st=rt(Ye,Fe),Le=function(){return{x:P?-ne:ne,y:I}},_e=t.useRef(Le()),He=Ue(function(){if(C){var o=Le();(_e.current.x!==o.x||_e.current.y!==o.y)&&(C(o),_e.current=o)}});function $e(o,l){var M=o;l?(Ge.flushSync(function(){X(M)}),He()):H(M)}function ct(o){var l=o.currentTarget.scrollTop;l!==I&&H(l),b==null||b(o),He()}var Te=function(l){var M=l,L=S-Z.width;return M=Math.max(M,0),M=Math.min(M,L),M},ft=Ue(function(o,l){l?(Ge.flushSync(function(){X(function(M){var L=M+(P?-o:o);return Te(L)})}),He()):H(function(M){var L=M+o;return L})}),vt=Ct(D,Ye,Fe,!!S,ft),We=T(vt,2),Ce=We[0],Xe=We[1];Pt(D,F,function(o,l){return st(o,l)?!1:(Ce({preventDefault:function(){},deltaY:o}),!0)}),Re(function(){function o(M){D&&M.preventDefault()}var l=F.current;return l.addEventListener("wheel",Ce),l.addEventListener("DOMMouseScroll",Xe),l.addEventListener("MozMousePixelScroll",o),function(){l.removeEventListener("wheel",Ce),l.removeEventListener("DOMMouseScroll",Xe),l.removeEventListener("MozMousePixelScroll",o)}},[D]),Re(function(){S&&X(function(o){return Te(o)})},[Z.width,S]);var Ve=function(){var l,M;(l=Oe.current)===null||l===void 0||l.delayHidden(),(M=Ne.current)===null||M===void 0||M.delayHidden()},Be=_t(F,E,ae,f,w,function(){return he(!0)},H,Ve);t.useImperativeHandle(s,function(){return{getScrollInfo:Le,scrollTo:function(l){function M(L){return L&&Pe(L)==="object"&&("left"in L||"top"in L)}M(l)?(l.left!==void 0&&X(Te(l.left)),Be(l.top)):Be(l)}}}),Re(function(){if(_){var o=E.slice($,Se+1);_(o,E)}},[$,Se,E]);var dt=kt(E,w,ae,f),ht=W==null?void 0:W({start:$,end:Se,virtual:Y,offsetX:ne,offsetY:Ie,rtl:P,getSize:dt}),St=Et(E,$,Se,S,Ee,n,V),ge=null;a&&(ge=O(k({},m?"height":"maxHeight",a),Yt),D&&(ge.overflowY="hidden",S&&(ge.overflowX="hidden"),se&&(ge.pointerEvents="none")));var Ke={};return P&&(Ke.dir="rtl"),t.createElement("div",Qe({style:O(O({},y),{},{position:"relative"}),className:J},Ke,K),t.createElement(et,{onResize:it},t.createElement(p,{className:"".concat(c,"-holder"),style:ge,ref:F,onScroll:ct,onMouseEnter:Ve},t.createElement(tt,{prefixCls:c,height:j,offsetX:ne,offsetY:Ie,scrollWidth:S,onInnerResize:he,ref:Q,innerProps:N,rtl:P,extra:ht},St))),Y&&j>a&&t.createElement(Ze,{ref:Oe,prefixCls:c,scrollOffset:I,scrollRange:j,rtl:P,onScroll:$e,onStartMove:fe,onStopMove:A,spinSize:lt,containerSize:Z.height,style:x==null?void 0:x.verticalScrollBar,thumbStyle:x==null?void 0:x.verticalScrollBarThumb}),Y&&S&&t.createElement(Ze,{ref:Ne,prefixCls:c,scrollOffset:ne,scrollRange:S,rtl:P,onScroll:$e,onStartMove:fe,onStopMove:A,spinSize:ot,containerSize:Z.width,horizontal:!0,style:x==null?void 0:x.horizontalScrollBar,thumbStyle:x==null?void 0:x.horizontalScrollBarThumb}))}var $t=t.forwardRef(Ft);$t.displayName="List";export{$t as L};
