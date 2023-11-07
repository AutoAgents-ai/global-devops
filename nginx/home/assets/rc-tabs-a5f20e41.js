import{b as U,h as Ce,g as ce,e as G,c as k,d as De,f as Ze}from"./@babel-8debb48f.js";import{r as t}from"./react-f8c4b268.js";import{c as _}from"./classnames-25f5e917.js";import{L as Rt,K as Z,j as qe,f as Nt,e as Pt,m as wt,p as Je}from"./rc-util-35a1817f.js";import{C as It}from"./rc-motion-6af00954.js";import{R as Be}from"./rc-resize-observer-db8399b3.js";import{D as Mt}from"./rc-dropdown-785e5a33.js";import{E as Lt,M as At}from"./rc-menu-20a2febd.js";const xe=t.createContext(null);var lt=t.forwardRef(function(e,a){var n=e.prefixCls,i=e.className,o=e.style,r=e.id,s=e.active,c=e.tabKey,l=e.children;return t.createElement("div",{id:r&&"".concat(r,"-panel-").concat(c),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":r&&"".concat(r,"-tab-").concat(c),"aria-hidden":!s,style:o,className:_(n,s&&"".concat(n,"-active"),i),ref:a},l)}),zt=["key","forceRender","style","className"];function Bt(e){var a=e.id,n=e.activeKey,i=e.animated,o=e.tabPosition,r=e.destroyInactiveTabPane,s=t.useContext(xe),c=s.prefixCls,l=s.tabs,h=i.tabPane,y="".concat(c,"-tabpane");return t.createElement("div",{className:_("".concat(c,"-content-holder"))},t.createElement("div",{className:_("".concat(c,"-content"),"".concat(c,"-content-").concat(o),U({},"".concat(c,"-content-animated"),h))},l.map(function(u){var b=u.key,f=u.forceRender,S=u.style,I=u.className,z=Ce(u,zt),R=b===n;return t.createElement(It,ce({key:b,visible:R,forceRender:f,removeOnLeave:!!r,leavedClassName:"".concat(y,"-hidden")},i.tabPaneMotion),function(M,B){var H=M.style,O=M.className;return t.createElement(lt,ce({},z,{prefixCls:y,id:a,tabKey:b,animated:h,active:R,style:G(G({},S),H),className:_(I,O),ref:B}))})})))}var et={width:0,height:0,left:0,top:0};function Dt(e,a,n){return t.useMemo(function(){for(var i,o=new Map,r=a.get((i=e[0])===null||i===void 0?void 0:i.key)||et,s=r.left+r.width,c=0;c<e.length;c+=1){var l=e[c].key,h=a.get(l);if(!h){var y;h=a.get((y=e[c-1])===null||y===void 0?void 0:y.key)||et}var u=o.get(l)||G({},h);u.right=s-u.left-u.width,o.set(l,u)}return o},[e.map(function(i){return i.key}).join("_"),a,n])}function tt(e,a){var n=t.useRef(e),i=t.useState({}),o=k(i,2),r=o[1];function s(c){var l=typeof c=="function"?c(n.current):c;l!==n.current&&a(l,n.current),n.current=l,r({})}return[n.current,s]}var Kt=.1,at=.01,Ee=20,nt=Math.pow(.995,Ee);function Ot(e,a){var n=t.useState(),i=k(n,2),o=i[0],r=i[1],s=t.useState(0),c=k(s,2),l=c[0],h=c[1],y=t.useState(0),u=k(y,2),b=u[0],f=u[1],S=t.useState(),I=k(S,2),z=I[0],R=I[1],M=t.useRef();function B(p){var E=p.touches[0],C=E.screenX,d=E.screenY;r({x:C,y:d}),window.clearInterval(M.current)}function H(p){if(o){p.preventDefault();var E=p.touches[0],C=E.screenX,d=E.screenY;r({x:C,y:d});var g=C-o.x,x=d-o.y;a(g,x);var A=Date.now();h(A),f(A-l),R({x:g,y:x})}}function O(){if(o&&(r(null),R(null),z)){var p=z.x/b,E=z.y/b,C=Math.abs(p),d=Math.abs(E);if(Math.max(C,d)<Kt)return;var g=p,x=E;M.current=window.setInterval(function(){if(Math.abs(g)<at&&Math.abs(x)<at){window.clearInterval(M.current);return}g*=nt,x*=nt,a(g*Ee,x*Ee)},Ee)}}var N=t.useRef();function L(p){var E=p.deltaX,C=p.deltaY,d=0,g=Math.abs(E),x=Math.abs(C);g===x?d=N.current==="x"?E:C:g>x?(d=E,N.current="x"):(d=C,N.current="y"),a(-d,-d)&&p.preventDefault()}var D=t.useRef(null);D.current={onTouchStart:B,onTouchMove:H,onTouchEnd:O,onWheel:L},t.useEffect(function(){function p(g){D.current.onTouchStart(g)}function E(g){D.current.onTouchMove(g)}function C(g){D.current.onTouchEnd(g)}function d(g){D.current.onWheel(g)}return document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",C,{passive:!1}),e.current.addEventListener("touchstart",p,{passive:!1}),e.current.addEventListener("wheel",d),function(){document.removeEventListener("touchmove",E),document.removeEventListener("touchend",C)}},[])}function ut(e){var a=t.useState(0),n=k(a,2),i=n[0],o=n[1],r=t.useRef(0),s=t.useRef();return s.current=e,Rt(function(){var c;(c=s.current)===null||c===void 0||c.call(s)},[i]),function(){r.current===i&&(r.current+=1,o(r.current))}}function $t(e){var a=t.useRef([]),n=t.useState({}),i=k(n,2),o=i[1],r=t.useRef(typeof e=="function"?e():e),s=ut(function(){var l=r.current;a.current.forEach(function(h){l=h(l)}),a.current=[],r.current=l,o({})});function c(l){a.current.push(l),s()}return[r.current,c]}var rt={width:0,height:0,left:0,top:0,right:0};function Wt(e,a,n,i,o,r,s){var c=s.tabs,l=s.tabPosition,h=s.rtl,y,u,b;return["top","bottom"].includes(l)?(y="width",u=h?"right":"left",b=Math.abs(n)):(y="height",u="top",b=-n),t.useMemo(function(){if(!c.length)return[0,0];for(var f=c.length,S=f,I=0;I<f;I+=1){var z=e.get(c[I].key)||rt;if(z[u]+z[y]>b+a){S=I-1;break}}for(var R=0,M=f-1;M>=0;M-=1){var B=e.get(c[M].key)||rt;if(B[u]<b){R=M+1;break}}return R>=S?[0,0]:[R,S]},[e,a,i,o,r,b,l,c.map(function(f){return f.key}).join("_"),h])}function ot(e){var a;return e instanceof Map?(a={},e.forEach(function(n,i){a[i]=n})):a=e,JSON.stringify(a)}var Ut="TABS_DQ";function dt(e){return String(e).replace(/"/g,Ut)}function ft(e,a,n,i){return!(!n||i||e===!1||e===void 0&&(a===!1||a===null))}function Vt(e,a){var n=e.prefixCls,i=e.editable,o=e.locale,r=e.style;return!i||i.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(n,"-nav-add"),style:r,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(c){i.onEdit("add",{event:c})}},i.addIcon||"+")}const vt=t.forwardRef(Vt);var it=t.forwardRef(function(e,a){var n=e.position,i=e.prefixCls,o=e.extra;if(!o)return null;var r,s={};return De(o)==="object"&&!t.isValidElement(o)?s=o:s.right=o,n==="right"&&(r=s.right),n==="left"&&(r=s.left),r?t.createElement("div",{className:"".concat(i,"-extra-content"),ref:a},r):null});function Ft(e,a){var n=e.prefixCls,i=e.id,o=e.tabs,r=e.locale,s=e.mobile,c=e.moreIcon,l=c===void 0?"More":c,h=e.moreTransitionName,y=e.style,u=e.className,b=e.editable,f=e.tabBarGutter,S=e.rtl,I=e.removeAriaLabel,z=e.onTabClick,R=e.getPopupContainer,M=e.popupClassName,B=t.useState(!1),H=k(B,2),O=H[0],N=H[1],L=t.useState(null),D=k(L,2),p=D[0],E=D[1],C="".concat(i,"-more-popup"),d="".concat(n,"-dropdown"),g=p!==null?"".concat(C,"-").concat(p):null,x=r==null?void 0:r.dropdownAriaLabel;function A(m,w){m.preventDefault(),m.stopPropagation(),b.onEdit("remove",{key:w,event:m})}var J=t.createElement(Lt,{onClick:function(w){var V=w.key,j=w.domEvent;z(V,j),N(!1)},prefixCls:"".concat(d,"-menu"),id:C,tabIndex:-1,role:"listbox","aria-activedescendant":g,selectedKeys:[p],"aria-label":x!==void 0?x:"expanded dropdown"},o.map(function(m){var w=m.closable,V=m.disabled,j=m.closeIcon,F=m.key,X=m.label,q=ft(w,j,b,V);return t.createElement(At,{key:F,id:"".concat(C,"-").concat(F),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(F),disabled:V},t.createElement("span",null,X),q&&t.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(d,"-menu-item-remove"),onClick:function(ee){ee.stopPropagation(),A(ee,F)}},j||b.removeIcon||"×"))}));function se(m){for(var w=o.filter(function(q){return!q.disabled}),V=w.findIndex(function(q){return q.key===p})||0,j=w.length,F=0;F<j;F+=1){V=(V+m+j)%j;var X=w[V];if(!X.disabled){E(X.key);return}}}function ne(m){var w=m.which;if(!O){[Z.DOWN,Z.SPACE,Z.ENTER].includes(w)&&(N(!0),m.preventDefault());return}switch(w){case Z.UP:se(-1),m.preventDefault();break;case Z.DOWN:se(1),m.preventDefault();break;case Z.ESC:N(!1);break;case Z.SPACE:case Z.ENTER:p!==null&&z(p,m);break}}t.useEffect(function(){var m=document.getElementById(g);m&&m.scrollIntoView&&m.scrollIntoView(!1)},[p]),t.useEffect(function(){O||E(null)},[O]);var W=U({},S?"marginRight":"marginLeft",f);o.length||(W.visibility="hidden",W.order=1);var re=_(U({},"".concat(d,"-rtl"),S)),de=s?null:t.createElement(Mt,{prefixCls:d,overlay:J,trigger:["hover"],visible:o.length?O:!1,transitionName:h,onVisibleChange:N,overlayClassName:_(re,M),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:R},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:W,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":C,id:"".concat(i,"-more"),"aria-expanded":O,onKeyDown:ne},l));return t.createElement("div",{className:_("".concat(n,"-nav-operations"),u),style:y,ref:a},de,t.createElement(vt,{prefixCls:n,locale:r,editable:b}))}const Ht=t.memo(t.forwardRef(Ft),function(e,a){return a.tabMoving});function jt(e){var a,n=e.prefixCls,i=e.id,o=e.active,r=e.tab,s=r.key,c=r.label,l=r.disabled,h=r.closeIcon,y=e.closable,u=e.renderWrapper,b=e.removeAriaLabel,f=e.editable,S=e.onClick,I=e.onFocus,z=e.style,R="".concat(n,"-tab"),M=ft(y,h,f,l);function B(N){l||S(N)}function H(N){N.preventDefault(),N.stopPropagation(),f.onEdit("remove",{key:s,event:N})}var O=t.createElement("div",{key:s,"data-node-key":dt(s),className:_(R,(a={},U(a,"".concat(R,"-with-remove"),M),U(a,"".concat(R,"-active"),o),U(a,"".concat(R,"-disabled"),l),a)),style:z,onClick:B},t.createElement("div",{role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(s),className:"".concat(R,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(s),"aria-disabled":l,tabIndex:l?null:0,onClick:function(L){L.stopPropagation(),B(L)},onKeyDown:function(L){[Z.SPACE,Z.ENTER].includes(L.which)&&(L.preventDefault(),B(L))},onFocus:I},c),M&&t.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(R,"-remove"),onClick:function(L){L.stopPropagation(),H(L)}},h||f.removeIcon||"×"));return u?u(O):O}var Gt=function(a){var n=a.activeTabOffset,i=a.horizontal,o=a.rtl,r=a.indicatorSize,s=t.useState(),c=k(s,2),l=c[0],h=c[1],y=t.useRef(),u=function(S){return typeof r=="function"?r(S):typeof r=="number"?r:S};function b(){qe.cancel(y.current)}return t.useEffect(function(){var f={};return n&&(i?(o?(f.right=n.right+n.width/2,f.transform="translateX(50%)"):(f.left=n.left+n.width/2,f.transform="translateX(-50%)"),f.width=u(n.width)):(f.top=n.top+n.height/2,f.transform="translateY(-50%)",f.height=u(n.height))),b(),y.current=qe(function(){h(f)}),b},[n,i,o,r]),{style:l}},ue=function(a){var n=a.current||{},i=n.offsetWidth,o=i===void 0?0:i,r=n.offsetHeight,s=r===void 0?0:r;return[o,s]},ge=function(a,n){return a[n?0:1]};function _t(e,a){var n,i=t.useContext(xe),o=i.prefixCls,r=i.tabs,s=e.className,c=e.style,l=e.id,h=e.animated,y=e.activeKey,u=e.rtl,b=e.extra,f=e.editable,S=e.locale,I=e.tabPosition,z=e.tabBarGutter,R=e.children,M=e.onTabClick,B=e.onTabScroll,H=e.indicatorSize,O=t.useRef(),N=t.useRef(),L=t.useRef(),D=t.useRef(),p=t.useRef(),E=t.useRef(),C=t.useRef(),d=I==="top"||I==="bottom",g=tt(0,function(P,v){d&&B&&B({direction:P>v?"left":"right"})}),x=k(g,2),A=x[0],J=x[1],se=tt(0,function(P,v){!d&&B&&B({direction:P>v?"top":"bottom"})}),ne=k(se,2),W=ne[0],re=ne[1],de=t.useState([0,0]),m=k(de,2),w=m[0],V=m[1],j=t.useState([0,0]),F=k(j,2),X=F[0],q=F[1],be=t.useState([0,0]),ee=k(be,2),Te=ee[0],ke=ee[1],Re=t.useState([0,0]),fe=k(Re,2),Ne=fe[0],T=fe[1],oe=$t(new Map),le=k(oe,2),mt=le[0],bt=le[1],pe=Dt(r,mt,X[0]),Pe=ge(w,d),ve=ge(X,d),we=ge(Te,d),Ke=ge(Ne,d),Oe=Pe<ve+we,Y=Oe?Pe-Ke:Pe-we,pt="".concat(o,"-nav-operations-hidden"),te=0,ie=0;d&&u?(te=0,ie=Math.max(0,ve-Y)):(te=Math.min(0,Y-ve),ie=0);function Ie(P){return P<te?te:P>ie?ie:P}var $e=t.useRef(),ht=t.useState(),We=k(ht,2),he=We[0],Ue=We[1];function Me(){Ue(Date.now())}function Le(){window.clearTimeout($e.current)}Ot(D,function(P,v){function K($,ae){$(function(Q){var kt=Ie(Q+ae);return kt})}return Oe?(d?K(J,P):K(re,v),Le(),Me(),!0):!1}),t.useEffect(function(){return Le(),he&&($e.current=window.setTimeout(function(){Ue(0)},100)),Le},[he]);var yt=Wt(pe,Y,d?A:W,ve,we,Ke,G(G({},e),{},{tabs:r})),Ve=k(yt,2),St=Ve[0],gt=Ve[1],Fe=Nt(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:y,v=pe.get(P)||{width:0,height:0,left:0,right:0,top:0};if(d){var K=A;u?v.right<A?K=v.right:v.right+v.width>A+Y&&(K=v.right+v.width-Y):v.left<-A?K=-v.left:v.left+v.width>-A+Y&&(K=-(v.left+v.width-Y)),re(0),J(Ie(K))}else{var $=W;v.top<-W?$=-v.top:v.top+v.height>-W+Y&&($=-(v.top+v.height-Y)),J(0),re(Ie($))}}),ye={};I==="top"||I==="bottom"?ye[u?"marginRight":"marginLeft"]=z:ye.marginTop=z;var He=r.map(function(P,v){var K=P.key;return t.createElement(jt,{id:l,prefixCls:o,key:K,tab:P,style:v===0?void 0:ye,closable:P.closable,editable:f,active:K===y,renderWrapper:R,removeAriaLabel:S==null?void 0:S.removeAriaLabel,onClick:function(ae){M(K,ae)},onFocus:function(){Fe(K),Me(),D.current&&(u||(D.current.scrollLeft=0),D.current.scrollTop=0)}})}),je=function(){return bt(function(){var v=new Map;return r.forEach(function(K){var $,ae=K.key,Q=($=p.current)===null||$===void 0?void 0:$.querySelector('[data-node-key="'.concat(dt(ae),'"]'));Q&&v.set(ae,{width:Q.offsetWidth,height:Q.offsetHeight,left:Q.offsetLeft,top:Q.offsetTop})}),v})};t.useEffect(function(){je()},[r.map(function(P){return P.key}).join("_")]);var Se=ut(function(){var P=ue(O),v=ue(N),K=ue(L);V([P[0]-v[0]-K[0],P[1]-v[1]-K[1]]);var $=ue(C);ke($);var ae=ue(E);T(ae);var Q=ue(p);q([Q[0]-$[0],Q[1]-$[1]]),je()}),Et=r.slice(0,St),Ct=r.slice(gt+1),Ge=[].concat(Ze(Et),Ze(Ct)),_e=pe.get(y),xt=Gt({activeTabOffset:_e,horizontal:d,rtl:u,indicatorSize:H}),Tt=xt.style;t.useEffect(function(){Fe()},[y,te,ie,ot(_e),ot(pe),d]),t.useEffect(function(){Se()},[u]);var Xe=!!Ge.length,me="".concat(o,"-nav-wrap"),Ae,ze,Ye,Qe;return d?u?(ze=A>0,Ae=A!==ie):(Ae=A<0,ze=A!==te):(Ye=W<0,Qe=W!==te),t.createElement(Be,{onResize:Se},t.createElement("div",{ref:Pt(a,O),role:"tablist",className:_("".concat(o,"-nav"),s),style:c,onKeyDown:function(){Me()}},t.createElement(it,{ref:N,position:"left",extra:b,prefixCls:o}),t.createElement(Be,{onResize:Se},t.createElement("div",{className:_(me,(n={},U(n,"".concat(me,"-ping-left"),Ae),U(n,"".concat(me,"-ping-right"),ze),U(n,"".concat(me,"-ping-top"),Ye),U(n,"".concat(me,"-ping-bottom"),Qe),n)),ref:D},t.createElement(Be,{onResize:Se},t.createElement("div",{ref:p,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(A,"px, ").concat(W,"px)"),transition:he?"none":void 0}},He,t.createElement(vt,{ref:C,prefixCls:o,locale:S,editable:f,style:G(G({},He.length===0?void 0:ye),{},{visibility:Xe?"hidden":null})}),t.createElement("div",{className:_("".concat(o,"-ink-bar"),U({},"".concat(o,"-ink-bar-animated"),h.inkBar)),style:Tt}))))),t.createElement(Ht,ce({},e,{removeAriaLabel:S==null?void 0:S.removeAriaLabel,ref:E,prefixCls:o,tabs:Ge,className:!Xe&&pt,tabMoving:!!he})),t.createElement(it,{ref:L,position:"right",extra:b,prefixCls:o})))}const ct=t.forwardRef(_t);var Xt=["renderTabBar"],Yt=["label","key"];function Qt(e){var a=e.renderTabBar,n=Ce(e,Xt),i=t.useContext(xe),o=i.tabs;if(a){var r=G(G({},n),{},{panes:o.map(function(s){var c=s.label,l=s.key,h=Ce(s,Yt);return t.createElement(lt,ce({tab:c,key:l,tabKey:l},h))})});return a(r,ct)}return t.createElement(ct,n)}function Zt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=G({inkBar:!0},De(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var qt=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicatorSize"],st=0;function Jt(e,a){var n,i=e.id,o=e.prefixCls,r=o===void 0?"rc-tabs":o,s=e.className,c=e.items,l=e.direction,h=e.activeKey,y=e.defaultActiveKey,u=e.editable,b=e.animated,f=e.tabPosition,S=f===void 0?"top":f,I=e.tabBarGutter,z=e.tabBarStyle,R=e.tabBarExtraContent,M=e.locale,B=e.moreIcon,H=e.moreTransitionName,O=e.destroyInactiveTabPane,N=e.renderTabBar,L=e.onChange,D=e.onTabClick,p=e.onTabScroll,E=e.getPopupContainer,C=e.popupClassName,d=e.indicatorSize,g=Ce(e,qt),x=t.useMemo(function(){return(c||[]).filter(function(T){return T&&De(T)==="object"&&"key"in T})},[c]),A=l==="rtl",J=Zt(b),se=t.useState(!1),ne=k(se,2),W=ne[0],re=ne[1];t.useEffect(function(){re(wt())},[]);var de=Je(function(){var T;return(T=x[0])===null||T===void 0?void 0:T.key},{value:h,defaultValue:y}),m=k(de,2),w=m[0],V=m[1],j=t.useState(function(){return x.findIndex(function(T){return T.key===w})}),F=k(j,2),X=F[0],q=F[1];t.useEffect(function(){var T=x.findIndex(function(le){return le.key===w});if(T===-1){var oe;T=Math.max(0,Math.min(X,x.length-1)),V((oe=x[T])===null||oe===void 0?void 0:oe.key)}q(T)},[x.map(function(T){return T.key}).join("_"),w,X]);var be=Je(null,{value:i}),ee=k(be,2),Te=ee[0],ke=ee[1];t.useEffect(function(){i||(ke("rc-tabs-".concat(st)),st+=1)},[]);function Re(T,oe){D==null||D(T,oe);var le=T!==w;V(T),le&&(L==null||L(T))}var fe={id:Te,activeKey:w,animated:J,tabPosition:S,rtl:A,mobile:W},Ne=G(G({},fe),{},{editable:u,locale:M,moreIcon:B,moreTransitionName:H,tabBarGutter:I,onTabClick:Re,onTabScroll:p,extra:R,style:z,panes:null,getPopupContainer:E,popupClassName:C,indicatorSize:d});return t.createElement(xe.Provider,{value:{tabs:x,prefixCls:r}},t.createElement("div",ce({ref:a,id:i,className:_(r,"".concat(r,"-").concat(S),(n={},U(n,"".concat(r,"-mobile"),W),U(n,"".concat(r,"-editable"),u),U(n,"".concat(r,"-rtl"),A),n),s)},g),t.createElement(Qt,ce({},Ne,{renderTabBar:N})),t.createElement(Bt,ce({destroyInactiveTabPane:O},fe,{animated:J}))))}var sa=t.forwardRef(Jt);export{sa as F};
