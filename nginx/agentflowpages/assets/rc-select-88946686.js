import{r as t,a as bn}from"./react-6c224063.js";import{w as lt,e as ct,C as sn,K as E,b as st,m as dt,d as ft,a as vt,p as wn,q as mt,z as pt,c as gt,y as ht}from"./rc-util-ce8c70c6.js";import{c as Be}from"./classnames-5987b41f.js";import{d as dn,c as te,e as J,b as ne,g as Fe,k as Je,q as bt,f as Ee}from"./@babel-2cf8752d.js";import{F as St}from"./rc-overflow-c2580166.js";import{a as wt}from"./@rc-component-50cf775f.js";import{L as Ct}from"./rc-virtual-list-711180ed.js";var fn=function(e){var a=e.className,o=e.customizeIcon,i=e.customizeIconProps,r=e.onMouseDown,s=e.onClick,d=e.children,f;return typeof o=="function"?f=o(i):f=o,t.createElement("span",{className:a,onMouseDown:function(S){S.preventDefault(),r&&r(S)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:s,"aria-hidden":!0},f!==void 0?f:t.createElement("span",{className:Be(a.split(/\s+/).map(function(h){return"".concat(h,"-icon")}))},d))};function yt(n,e,a,o,i){var r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:!1,s=arguments.length>6?arguments[6]:void 0,d=arguments.length>7?arguments[7]:void 0,f=bn.useMemo(function(){if(dn(o)==="object")return o.clearIcon;if(i)return i},[o,i]),h=bn.useMemo(function(){return!!(!r&&o&&(a.length||s)&&!(d==="combobox"&&s===""))},[o,r,a.length,s,d]);return{allowClear:h,clearIcon:bn.createElement(fn,{className:"".concat(n,"-clear"),onMouseDown:e,customizeIcon:f},"×")}}var Fn=t.createContext(null);function It(){return t.useContext(Fn)}function Et(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=t.useState(!1),a=te(e,2),o=a[0],i=a[1],r=t.useRef(null),s=function(){window.clearTimeout(r.current)};t.useEffect(function(){return s},[]);var d=function(h,S){s(),r.current=window.setTimeout(function(){i(h),S&&S()},n)};return[o,d,s]}function kn(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=t.useRef(null),a=t.useRef(null);t.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(i){(i||e.current===null)&&(e.current=i),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},n)}return[function(){return e.current},o]}function Rt(n,e,a,o){var i=t.useRef(null);i.current={open:e,triggerOpen:a,customizedTrigger:o},t.useEffect(function(){function r(s){var d;if(!((d=i.current)!==null&&d!==void 0&&d.customizedTrigger)){var f=s.target;f.shadowRoot&&s.composed&&(f=s.composedPath()[0]||f),i.current.open&&n().filter(function(h){return h}).every(function(h){return!h.contains(f)&&h!==f})&&i.current.triggerOpen(!1)}}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}var Dt=function(e,a){var o,i=e.prefixCls,r=e.id,s=e.inputElement,d=e.disabled,f=e.tabIndex,h=e.autoFocus,S=e.autoComplete,c=e.editable,R=e.activeDescendantId,u=e.value,w=e.maxLength,x=e.onKeyDown,G=e.onMouseDown,P=e.onChange,T=e.onPaste,_=e.onCompositionStart,Z=e.onCompositionEnd,W=e.open,X=e.attrs,Y=s||t.createElement("input",null),q=Y,oe=q.ref,L=q.props,K=L.onKeyDown,z=L.onChange,ae=L.onMouseDown,N=L.onCompositionStart,H=L.onCompositionEnd,A=L.style;return lt(!("maxLength"in Y.props)),Y=t.cloneElement(Y,J(J(J({type:"search"},L),{},{id:r,ref:ct(a,oe),disabled:d,tabIndex:f,autoComplete:S||"off",autoFocus:h,className:Be("".concat(i,"-selection-search-input"),(o=Y)===null||o===void 0||(o=o.props)===null||o===void 0?void 0:o.className),role:"combobox","aria-expanded":W||!1,"aria-haspopup":"listbox","aria-owns":"".concat(r,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(r,"_list"),"aria-activedescendant":W?R:void 0},X),{},{value:c?u:"",maxLength:w,readOnly:!c,unselectable:c?null:"on",style:J(J({},A),{},{opacity:c?null:0}),onKeyDown:function(p){x(p),K&&K(p)},onMouseDown:function(p){G(p),ae&&ae(p)},onChange:function(p){P(p),z&&z(p)},onCompositionStart:function(p){_(p),N&&N(p)},onCompositionEnd:function(p){Z(p),H&&H(p)},onPaste:T})),Y},In=t.forwardRef(Dt);In.displayName="Input";function Kn(n){return Array.isArray(n)?n:n!==void 0?[n]:[]}var Ot=typeof window<"u"&&window.document&&window.document.documentElement,Mt=Ot;function xt(n){return n!=null}function Pt(n){return!n&&n!==0}function Nn(n){return["string","number"].includes(dn(n))}function $n(n){var e=void 0;return n&&(Nn(n.title)?e=n.title.toString():Nn(n.label)&&(e=n.label.toString())),e}function Nt(n,e){Mt?t.useLayoutEffect(n,e):t.useEffect(n,e)}function Vt(n){var e;return(e=n.key)!==null&&e!==void 0?e:n.value}var Vn=function(e){e.preventDefault(),e.stopPropagation()},Tt=function(e){var a=e.id,o=e.prefixCls,i=e.values,r=e.open,s=e.searchValue,d=e.autoClearSearchValue,f=e.inputRef,h=e.placeholder,S=e.disabled,c=e.mode,R=e.showSearch,u=e.autoFocus,w=e.autoComplete,x=e.activeDescendantId,G=e.tabIndex,P=e.removeIcon,T=e.maxTagCount,_=e.maxTagTextLength,Z=e.maxTagPlaceholder,W=Z===void 0?function(C){return"+ ".concat(C.length," ...")}:Z,X=e.tagRender,Y=e.onToggleOpen,q=e.onRemove,oe=e.onInputChange,L=e.onInputPaste,K=e.onInputKeyDown,z=e.onInputMouseDown,ae=e.onInputCompositionStart,N=e.onInputCompositionEnd,H=t.useRef(null),A=t.useState(0),D=te(A,2),p=D[0],le=D[1],Ce=t.useState(!1),ye=te(Ce,2),ce=ye[0],he=ye[1],fe="".concat(o,"-selection"),U=r||c==="multiple"&&d===!1||c==="tags"?s:"",Ve=c==="tags"||c==="multiple"&&d===!1||R&&(r||ce);Nt(function(){le(H.current.scrollWidth)},[U]);function Oe(C,V,j,se,ie){return t.createElement("span",{className:Be("".concat(fe,"-item"),ne({},"".concat(fe,"-item-disabled"),j)),title:$n(C)},t.createElement("span",{className:"".concat(fe,"-item-content")},V),se&&t.createElement(fn,{className:"".concat(fe,"-item-remove"),onMouseDown:Vn,onClick:ie,customizeIcon:P},"×"))}function I(C,V,j,se,ie){var Ie=function(ve){Vn(ve),Y(!r)};return t.createElement("span",{onMouseDown:Ie},X({label:V,value:C,disabled:j,closable:se,onClose:ie}))}function v(C){var V=C.disabled,j=C.label,se=C.value,ie=!S&&!V,Ie=j;if(typeof _=="number"&&(typeof j=="string"||typeof j=="number")){var re=String(Ie);re.length>_&&(Ie="".concat(re.slice(0,_),"..."))}var ve=function(Q){Q&&Q.stopPropagation(),q(C)};return typeof X=="function"?I(se,Ie,V,ie,ve):Oe(C,Ie,V,ie,ve)}function O(C){var V=typeof W=="function"?W(C):W;return Oe({title:V},V,!1)}var F=t.createElement("div",{className:"".concat(fe,"-search"),style:{width:p},onFocus:function(){he(!0)},onBlur:function(){he(!1)}},t.createElement(In,{ref:f,open:r,prefixCls:o,id:a,inputElement:null,disabled:S,autoFocus:u,autoComplete:w,editable:Ve,activeDescendantId:x,value:U,onKeyDown:K,onMouseDown:z,onChange:oe,onPaste:L,onCompositionStart:ae,onCompositionEnd:N,tabIndex:G,attrs:sn(e,!0)}),t.createElement("span",{ref:H,className:"".concat(fe,"-search-mirror"),"aria-hidden":!0},U," ")),k=t.createElement(St,{prefixCls:"".concat(fe,"-overflow"),data:i,renderItem:v,renderRest:O,suffix:F,itemKey:Vt,maxCount:T});return t.createElement(t.Fragment,null,k,!i.length&&!U&&t.createElement("span",{className:"".concat(fe,"-placeholder")},h))},Lt=function(e){var a=e.inputElement,o=e.prefixCls,i=e.id,r=e.inputRef,s=e.disabled,d=e.autoFocus,f=e.autoComplete,h=e.activeDescendantId,S=e.mode,c=e.open,R=e.values,u=e.placeholder,w=e.tabIndex,x=e.showSearch,G=e.searchValue,P=e.activeValue,T=e.maxLength,_=e.onInputKeyDown,Z=e.onInputMouseDown,W=e.onInputChange,X=e.onInputPaste,Y=e.onInputCompositionStart,q=e.onInputCompositionEnd,oe=e.title,L=t.useState(!1),K=te(L,2),z=K[0],ae=K[1],N=S==="combobox",H=N||x,A=R[0],D=G||"";N&&P&&!z&&(D=P),t.useEffect(function(){N&&ae(!1)},[N,P]);var p=S!=="combobox"&&!c&&!x?!1:!!D,le=oe===void 0?$n(A):oe,Ce=function(){if(A)return null;var ce=p?{visibility:"hidden"}:void 0;return t.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:ce},u)};return t.createElement(t.Fragment,null,t.createElement("span",{className:"".concat(o,"-selection-search")},t.createElement(In,{ref:r,prefixCls:o,id:i,open:c,inputElement:a,disabled:s,autoFocus:d,autoComplete:f,editable:H,activeDescendantId:h,value:D,onKeyDown:_,onMouseDown:Z,onChange:function(ce){ae(!0),W(ce)},onPaste:X,onCompositionStart:Y,onCompositionEnd:q,tabIndex:w,attrs:sn(e,!0),maxLength:N?T:void 0})),!N&&A?t.createElement("span",{className:"".concat(o,"-selection-item"),title:le,style:p?{visibility:"hidden"}:void 0},A.label):null,Ce())};function _t(n){return![E.ESC,E.SHIFT,E.BACKSPACE,E.TAB,E.WIN_KEY,E.ALT,E.META,E.WIN_KEY_RIGHT,E.CTRL,E.SEMICOLON,E.EQUALS,E.CAPS_LOCK,E.CONTEXT_MENU,E.F1,E.F2,E.F3,E.F4,E.F5,E.F6,E.F7,E.F8,E.F9,E.F10,E.F11,E.F12].includes(n)}var At=function(e,a){var o=t.useRef(null),i=t.useRef(!1),r=e.prefixCls,s=e.open,d=e.mode,f=e.showSearch,h=e.tokenWithEnter,S=e.autoClearSearchValue,c=e.onSearch,R=e.onSearchSubmit,u=e.onToggleOpen,w=e.onInputKeyDown,x=e.domRef;t.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var G=kn(0),P=te(G,2),T=P[0],_=P[1],Z=function(D){var p=D.which;(p===E.UP||p===E.DOWN)&&D.preventDefault(),w&&w(D),p===E.ENTER&&d==="tags"&&!i.current&&!s&&(R==null||R(D.target.value)),_t(p)&&u(!0)},W=function(){_(!0)},X=t.useRef(null),Y=function(D){c(D,!0,i.current)!==!1&&u(!0)},q=function(){i.current=!0},oe=function(D){i.current=!1,d!=="combobox"&&Y(D.target.value)},L=function(D){var p=D.target.value;if(h&&X.current&&/[\r\n]/.test(X.current)){var le=X.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");p=p.replace(le,X.current)}X.current=null,Y(p)},K=function(D){var p=D.clipboardData,le=p.getData("text");X.current=le},z=function(D){var p=D.target;if(p!==o.current){var le=document.body.style.msTouchAction!==void 0;le?setTimeout(function(){o.current.focus()}):o.current.focus()}},ae=function(D){var p=T();D.target!==o.current&&!p&&d!=="combobox"&&D.preventDefault(),(d!=="combobox"&&(!f||!p)||!s)&&(s&&S!==!1&&c("",!0,!1),u())},N={inputRef:o,onInputKeyDown:Z,onInputMouseDown:W,onInputChange:L,onInputPaste:K,onInputCompositionStart:q,onInputCompositionEnd:oe},H=d==="multiple"||d==="tags"?t.createElement(Tt,Fe({},e,N)):t.createElement(Lt,Fe({},e,N));return t.createElement("div",{ref:x,className:"".concat(r,"-selector"),onClick:z,onMouseDown:ae},H)},Wn=t.forwardRef(At);Wn.displayName="Selector";var Ft=["prefixCls","disabled","visible","children","popupElement","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","builtinPlacements","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],kt=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1},htmlRegion:"scroll"}}},Kt=function(e,a){var o=e.prefixCls;e.disabled;var i=e.visible,r=e.children,s=e.popupElement,d=e.animation,f=e.transitionName,h=e.dropdownStyle,S=e.dropdownClassName,c=e.direction,R=c===void 0?"ltr":c,u=e.placement,w=e.builtinPlacements,x=e.dropdownMatchSelectWidth,G=e.dropdownRender,P=e.dropdownAlign,T=e.getPopupContainer,_=e.empty,Z=e.getTriggerDOMNode,W=e.onPopupVisibleChange,X=e.onPopupMouseEnter,Y=Je(e,Ft),q="".concat(o,"-dropdown"),oe=s;G&&(oe=G(s));var L=t.useMemo(function(){return w||kt(x)},[w,x]),K=d?"".concat(q,"-").concat(d):f,z=typeof x=="number",ae=t.useMemo(function(){return z?null:x===!1?"minWidth":"width"},[x,z]),N=h;z&&(N=J(J({},N),{},{width:x}));var H=t.useRef(null);return t.useImperativeHandle(a,function(){return{getPopupElement:function(){return H.current}}}),t.createElement(wt,Fe({},Y,{showAction:W?["click"]:[],hideAction:W?["click"]:[],popupPlacement:u||(R==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:L,prefixCls:q,popupTransitionName:K,popup:t.createElement("div",{ref:H,onMouseEnter:X},oe),stretch:ae,popupAlign:P,popupVisible:i,getPopupContainer:T,popupClassName:Be(S,ne({},"".concat(q,"-empty"),_)),popupStyle:N,getTriggerDOMNode:Z,onPopupVisibleChange:W}),r)},Bn=t.forwardRef(Kt);Bn.displayName="SelectTrigger";function Tn(n,e){var a=n.key,o;return"value"in n&&(o=n.value),a??(o!==void 0?o:"rc-index-key-".concat(e))}function zn(n,e){var a=n||{},o=a.label,i=a.value,r=a.options,s=a.groupLabel,d=o||(e?"children":"label");return{label:d,value:i||"value",options:r||"options",groupLabel:s||d}}function $t(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,i=[],r=zn(a,!1),s=r.label,d=r.value,f=r.options,h=r.groupLabel;function S(c,R){c.forEach(function(u){if(R||!(f in u)){var w=u[d];i.push({key:Tn(u,i.length),groupOption:R,data:u,label:u[s],value:w})}else{var x=u[h];x===void 0&&o&&(x=u.label),i.push({key:Tn(u,i.length),group:!0,data:u,label:x}),S(u[f],!0)}})}return S(n,!1),i}function Cn(n){var e=J({},n);return"props"in e||Object.defineProperty(e,"props",{get:function(){return st(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}function Wt(n,e){if(!e||!e.length)return null;var a=!1;function o(r,s){var d=bt(s),f=d[0],h=d.slice(1);if(!f)return[r];var S=r.split(f);return a=a||S.length>1,S.reduce(function(c,R){return[].concat(Ee(c),Ee(o(R,h)))},[]).filter(function(c){return c})}var i=o(n,e);return a?i:null}var Bt=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","suffixIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","builtinPlacements","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],zt=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function yn(n){return n==="tags"||n==="multiple"}var Ht=t.forwardRef(function(n,e){var a,o,i=n.id,r=n.prefixCls,s=n.className,d=n.showSearch,f=n.tagRender,h=n.direction,S=n.omitDomProps,c=n.displayValues,R=n.onDisplayValuesChange,u=n.emptyOptions,w=n.notFoundContent,x=w===void 0?"Not Found":w,G=n.onClear,P=n.mode,T=n.disabled,_=n.loading,Z=n.getInputElement,W=n.getRawInputElement,X=n.open,Y=n.defaultOpen,q=n.onDropdownVisibleChange,oe=n.activeValue,L=n.onActiveValueChange,K=n.activeDescendantId,z=n.searchValue,ae=n.autoClearSearchValue,N=n.onSearch,H=n.onSearchSplit,A=n.tokenSeparators,D=n.allowClear,p=n.suffixIcon,le=n.clearIcon,Ce=n.OptionList,ye=n.animation,ce=n.transitionName,he=n.dropdownStyle,fe=n.dropdownClassName,U=n.dropdownMatchSelectWidth,Ve=n.dropdownRender,Oe=n.dropdownAlign,I=n.placement,v=n.builtinPlacements,O=n.getPopupContainer,F=n.showAction,k=F===void 0?[]:F,C=n.onFocus,V=n.onBlur,j=n.onKeyUp,se=n.onKeyDown,ie=n.onMouseDown,Ie=Je(n,Bt),re=yn(P),ve=(d!==void 0?d:re)||P==="combobox",Te=J({},Ie);zt.forEach(function(M){delete Te[M]}),S==null||S.forEach(function(M){delete Te[M]});var Q=t.useState(!1),ze=te(Q,2),Qe=ze[0],be=ze[1];t.useEffect(function(){be(dt())},[]);var me=t.useRef(null),He=t.useRef(null),pe=t.useRef(null),Re=t.useRef(null),Se=t.useRef(null),Me=t.useRef(!1),Le=Et(),Ze=te(Le,3),je=Ze[0],en=Ze[1],Ge=Ze[2];t.useImperativeHandle(e,function(){var M,y;return{focus:(M=Re.current)===null||M===void 0?void 0:M.focus,blur:(y=Re.current)===null||y===void 0?void 0:y.blur,scrollTo:function(ge){var ee;return(ee=Se.current)===null||ee===void 0?void 0:ee.scrollTo(ge)}}});var xe=t.useMemo(function(){var M;if(P!=="combobox")return z;var y=(M=c[0])===null||M===void 0?void 0:M.value;return typeof y=="string"||typeof y=="number"?String(y):""},[z,P,c]),nn=P==="combobox"&&typeof Z=="function"&&Z()||null,Pe=typeof W=="function"&&W(),vn=ft(He,Pe==null||(a=Pe.props)===null||a===void 0?void 0:a.ref),rn=t.useState(!1),tn=te(rn,2),Xe=tn[0],un=tn[1];vt(function(){un(!0)},[]);var mn=wn(!1,{defaultValue:Y,value:X}),ln=te(mn,2),cn=ln[0],on=ln[1],l=Xe?cn:!1,b=!x&&u;(T||b&&l&&P==="combobox")&&(l=!1);var m=b?!1:l,g=t.useCallback(function(M){var y=M!==void 0?M:!l;T||(on(y),l!==y&&(q==null||q(y)))},[T,l,on,q]),$=t.useMemo(function(){return(A||[]).some(function(M){return[`
`,`\r
`].includes(M)})},[A]),B=function(y,de,ge){var ee=!0,we=y;L==null||L(null);var De=ge?null:Wt(y,A);return P!=="combobox"&&De&&(we="",H==null||H(De),g(!1),ee=!1),N&&xe!==we&&N(we,{source:de?"typing":"effect"}),ee},_e=function(y){!y||!y.trim()||N(y,{source:"submit"})};t.useEffect(function(){!l&&!re&&P!=="combobox"&&B("",!1,!1)},[l]),t.useEffect(function(){cn&&T&&on(!1),T&&!Me.current&&en(!1)},[T]);var Ne=kn(),ke=te(Ne,2),ue=ke[0],Ke=ke[1],pn=function(y){var de=ue(),ge=y.which;if(ge===E.ENTER&&(P!=="combobox"&&y.preventDefault(),l||g(!0)),Ke(!!xe),ge===E.BACKSPACE&&!de&&re&&!xe&&c.length){for(var ee=Ee(c),we=null,De=ee.length-1;De>=0;De-=1){var an=ee[De];if(!an.disabled){ee.splice(De,1),we=an;break}}we&&R(ee,{type:"remove",values:[we]})}for(var $e=arguments.length,qe=new Array($e>1?$e-1:0),We=1;We<$e;We++)qe[We-1]=arguments[We];if(l&&Se.current){var Pn;(Pn=Se.current).onKeyDown.apply(Pn,[y].concat(qe))}se==null||se.apply(void 0,[y].concat(qe))},gn=function(y){for(var de=arguments.length,ge=new Array(de>1?de-1:0),ee=1;ee<de;ee++)ge[ee-1]=arguments[ee];if(l&&Se.current){var we;(we=Se.current).onKeyUp.apply(we,[y].concat(ge))}j==null||j.apply(void 0,[y].concat(ge))},En=function(y){var de=c.filter(function(ge){return ge!==y});R(de,{type:"remove",values:[y]})},Ue=t.useRef(!1),Ae=function(){en(!0),T||(C&&!Ue.current&&C.apply(void 0,arguments),k.includes("focus")&&g(!0)),Ue.current=!0},qn=function(){Me.current=!0,en(!1,function(){Ue.current=!1,Me.current=!1,g(!1)}),!T&&(xe&&(P==="tags"?N(xe,{source:"submit"}):P==="multiple"&&N("",{source:"blur"})),V&&V.apply(void 0,arguments))},Ye=[];t.useEffect(function(){return function(){Ye.forEach(function(M){return clearTimeout(M)}),Ye.splice(0,Ye.length)}},[]);var Jn=function(y){var de,ge=y.target,ee=(de=pe.current)===null||de===void 0?void 0:de.getPopupElement();if(ee&&ee.contains(ge)){var we=setTimeout(function(){var qe=Ye.indexOf(we);if(qe!==-1&&Ye.splice(qe,1),Ge(),!Qe&&!ee.contains(document.activeElement)){var We;(We=Re.current)===null||We===void 0||We.focus()}});Ye.push(we)}for(var De=arguments.length,an=new Array(De>1?De-1:0),$e=1;$e<De;$e++)an[$e-1]=arguments[$e];ie==null||ie.apply(void 0,[y].concat(an))},Qn=t.useState({}),Zn=te(Qn,2),et=Zn[1];function nt(){et({})}var Rn;Pe&&(Rn=function(y){g(y)}),Rt(function(){var M;return[me.current,(M=pe.current)===null||M===void 0?void 0:M.getPopupElement()]},m,g,!!Pe);var tt=t.useMemo(function(){return J(J({},n),{},{notFoundContent:x,open:l,triggerOpen:m,id:i,showSearch:ve,multiple:re,toggleOpen:g})},[n,x,m,l,i,ve,re,g]),Dn=!!p||_,On;Dn&&(On=t.createElement(fn,{className:Be("".concat(r,"-arrow"),ne({},"".concat(r,"-arrow-loading"),_)),customizeIcon:p,customizeIconProps:{loading:_,searchValue:xe,open:l,focused:je,showSearch:ve}}));var ot=function(){var y;G==null||G(),(y=Re.current)===null||y===void 0||y.focus(),R([],{type:"clear",values:c}),B("",!1,!1)},Mn=yt(r,ot,c,D,le,T,xe,P),at=Mn.allowClear,rt=Mn.clearIcon,it=t.createElement(Ce,{ref:Se}),ut=Be(r,s,(o={},ne(o,"".concat(r,"-focused"),je),ne(o,"".concat(r,"-multiple"),re),ne(o,"".concat(r,"-single"),!re),ne(o,"".concat(r,"-allow-clear"),D),ne(o,"".concat(r,"-show-arrow"),Dn),ne(o,"".concat(r,"-disabled"),T),ne(o,"".concat(r,"-loading"),_),ne(o,"".concat(r,"-open"),l),ne(o,"".concat(r,"-customize-input"),nn),ne(o,"".concat(r,"-show-search"),ve),o)),xn=t.createElement(Bn,{ref:pe,disabled:T,prefixCls:r,visible:m,popupElement:it,animation:ye,transitionName:ce,dropdownStyle:he,dropdownClassName:fe,direction:h,dropdownMatchSelectWidth:U,dropdownRender:Ve,dropdownAlign:Oe,placement:I,builtinPlacements:v,getPopupContainer:O,empty:u,getTriggerDOMNode:function(){return He.current},onPopupVisibleChange:Rn,onPopupMouseEnter:nt},Pe?t.cloneElement(Pe,{ref:vn}):t.createElement(Wn,Fe({},n,{domRef:He,prefixCls:r,inputElement:nn,ref:Re,id:i,showSearch:ve,autoClearSearchValue:ae,mode:P,activeDescendantId:K,tagRender:f,values:c,open:l,onToggleOpen:g,activeValue:oe,searchValue:xe,onSearch:B,onSearchSubmit:_e,onRemove:En,tokenWithEnter:$}))),hn;return Pe?hn=xn:hn=t.createElement("div",Fe({className:ut},Te,{ref:me,onMouseDown:Jn,onKeyDown:pn,onKeyUp:gn,onFocus:Ae,onBlur:qn}),je&&!l&&t.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(c.map(function(M){var y=M.label,de=M.value;return["number","string"].includes(dn(y))?y:de}).join(", "))),xn,On,at&&rt),t.createElement(Fn.Provider,{value:tt},hn)}),Hn=function(){return null};Hn.isSelectOptGroup=!0;var Un=function(){return null};Un.isSelectOption=!0;var jn=t.createContext(null);function Ut(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var jt=["disabled","title","children","style","className"];function Ln(n){return typeof n=="string"||typeof n=="number"}var Gt=function(e,a){var o=It(),i=o.prefixCls,r=o.id,s=o.open,d=o.multiple,f=o.mode,h=o.searchValue,S=o.toggleOpen,c=o.notFoundContent,R=o.onPopupScroll,u=t.useContext(jn),w=u.flattenOptions,x=u.onActiveValue,G=u.defaultActiveFirstOption,P=u.onSelect,T=u.menuItemSelectedIcon,_=u.rawValues,Z=u.fieldNames,W=u.virtual,X=u.direction,Y=u.listHeight,q=u.listItemHeight,oe=u.optionRender,L="".concat(i,"-item"),K=mt(function(){return w},[s,w],function(I,v){return v[0]&&I[1]!==v[1]}),z=t.useRef(null),ae=function(v){v.preventDefault()},N=function(v){z.current&&z.current.scrollTo(typeof v=="number"?{index:v}:v)},H=function(v){for(var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,F=K.length,k=0;k<F;k+=1){var C=(v+k*O+F)%F,V=K[C],j=V.group,se=V.data;if(!j&&!se.disabled)return C}return-1},A=t.useState(function(){return H(0)}),D=te(A,2),p=D[0],le=D[1],Ce=function(v){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;le(v);var F={source:O?"keyboard":"mouse"},k=K[v];if(!k){x(null,-1,F);return}x(k.value,v,F)};t.useEffect(function(){Ce(G!==!1?H(0):-1)},[K.length,h]);var ye=t.useCallback(function(I){return _.has(I)&&f!=="combobox"},[f,Ee(_).toString(),_.size]);t.useEffect(function(){var I=setTimeout(function(){if(!d&&s&&_.size===1){var O=Array.from(_)[0],F=K.findIndex(function(k){var C=k.data;return C.value===O});F!==-1&&(Ce(F),N(F))}});if(s){var v;(v=z.current)===null||v===void 0||v.scrollTo(void 0)}return function(){return clearTimeout(I)}},[s,h]);var ce=function(v){v!==void 0&&P(v,{selected:!_.has(v)}),d||S(!1)};if(t.useImperativeHandle(a,function(){return{onKeyDown:function(v){var O=v.which,F=v.ctrlKey;switch(O){case E.N:case E.P:case E.UP:case E.DOWN:{var k=0;if(O===E.UP?k=-1:O===E.DOWN?k=1:Ut()&&F&&(O===E.N?k=1:O===E.P&&(k=-1)),k!==0){var C=H(p+k,k);N(C),Ce(C,!0)}break}case E.ENTER:{var V=K[p];V&&!V.data.disabled?ce(V.value):ce(void 0),s&&v.preventDefault();break}case E.ESC:S(!1),s&&v.stopPropagation()}},onKeyUp:function(){},scrollTo:function(v){N(v)}}}),K.length===0)return t.createElement("div",{role:"listbox",id:"".concat(r,"_list"),className:"".concat(L,"-empty"),onMouseDown:ae},c);var he=Object.keys(Z).map(function(I){return Z[I]}),fe=function(v){return v.label};function U(I,v){var O=I.group;return{role:O?"presentation":"option",id:"".concat(r,"_list_").concat(v)}}var Ve=function(v){var O=K[v];if(!O)return null;var F=O.data||{},k=F.value,C=O.group,V=sn(F,!0),j=fe(O);return O?t.createElement("div",Fe({"aria-label":typeof j=="string"&&!C?j:null},V,{key:v},U(O,v),{"aria-selected":ye(k)}),k):null},Oe={role:"listbox",id:"".concat(r,"_list")};return t.createElement(t.Fragment,null,W&&t.createElement("div",Fe({},Oe,{style:{height:0,width:0,overflow:"hidden"}}),Ve(p-1),Ve(p),Ve(p+1)),t.createElement(Ct,{itemKey:"key",ref:z,data:K,height:Y,itemHeight:q,fullHeight:!1,onMouseDown:ae,onScroll:R,virtual:W,direction:X,innerProps:W?null:Oe},function(I,v){var O,F=I.group,k=I.groupOption,C=I.data,V=I.label,j=I.value,se=C.key;if(F){var ie,Ie=(ie=C.title)!==null&&ie!==void 0?ie:Ln(V)?V.toString():void 0;return t.createElement("div",{className:Be(L,"".concat(L,"-group")),title:Ie},V!==void 0?V:se)}var re=C.disabled,ve=C.title;C.children;var Te=C.style,Q=C.className,ze=Je(C,jt),Qe=pt(ze,he),be=ye(j),me="".concat(L,"-option"),He=Be(L,me,Q,(O={},ne(O,"".concat(me,"-grouped"),k),ne(O,"".concat(me,"-active"),p===v&&!re),ne(O,"".concat(me,"-disabled"),re),ne(O,"".concat(me,"-selected"),be),O)),pe=fe(I),Re=!T||typeof T=="function"||be,Se=typeof pe=="number"?pe:pe||j,Me=Ln(Se)?Se.toString():void 0;return ve!==void 0&&(Me=ve),t.createElement("div",Fe({},sn(Qe),W?{}:U(I,v),{"aria-selected":be,className:He,title:Me,onMouseMove:function(){p===v||re||Ce(v)},onClick:function(){re||ce(j)},style:Te}),t.createElement("div",{className:"".concat(me,"-content")},typeof oe=="function"?oe(I,{index:v}):Se),t.isValidElement(T)||be,Re&&t.createElement(fn,{className:"".concat(L,"-option-state"),customizeIcon:T,customizeIconProps:{value:j,disabled:re,isSelected:be}},be?"✓":null))}))},Gn=t.forwardRef(Gt);Gn.displayName="OptionList";const Xt=function(n,e){var a=t.useRef({values:new Map,options:new Map}),o=t.useMemo(function(){var r=a.current,s=r.values,d=r.options,f=n.map(function(c){if(c.label===void 0){var R;return J(J({},c),{},{label:(R=s.get(c.value))===null||R===void 0?void 0:R.label})}return c}),h=new Map,S=new Map;return f.forEach(function(c){h.set(c.value,c),S.set(c.value,e.get(c.value)||d.get(c.value))}),a.current.values=h,a.current.options=S,f},[n,e]),i=t.useCallback(function(r){return e.get(r)||a.current.options.get(r)},[e]);return[o,i]};function Sn(n,e){return Kn(n).join("").toUpperCase().includes(e)}const Yt=function(n,e,a,o,i){return t.useMemo(function(){if(!a||o===!1)return n;var r=e.options,s=e.label,d=e.value,f=[],h=typeof o=="function",S=a.toUpperCase(),c=h?o:function(u,w){return i?Sn(w[i],S):w[r]?Sn(w[s!=="children"?s:"label"],S):Sn(w[d],S)},R=h?function(u){return Cn(u)}:function(u){return u};return n.forEach(function(u){if(u[r]){var w=c(a,R(u));if(w)f.push(u);else{var x=u[r].filter(function(G){return c(a,R(G))});x.length&&f.push(J(J({},u),{},ne({},r,x)))}return}c(a,R(u))&&f.push(u)}),f},[n,o,i,a,e])};var _n=0,qt=gt();function Jt(){var n;return qt?(n=_n,_n+=1):n="TEST_OR_SSR",n}function Qt(n){var e=t.useState(),a=te(e,2),o=a[0],i=a[1];return t.useEffect(function(){i("rc_select_".concat(Jt()))},[]),n||o}var Zt=["children","value"],eo=["children"];function no(n){var e=n,a=e.key,o=e.props,i=o.children,r=o.value,s=Je(o,Zt);return J({key:a,value:r!==void 0?r:a,children:i},s)}function Xn(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return ht(n).map(function(a,o){if(!t.isValidElement(a)||!a.type)return null;var i=a,r=i.type.isSelectOptGroup,s=i.key,d=i.props,f=d.children,h=Je(d,eo);return e||!r?no(a):J(J({key:"__RC_SELECT_GRP__".concat(s===null?o:s,"__"),label:s},h),{},{options:Xn(f)})}).filter(function(a){return a})}function to(n,e,a,o,i){return t.useMemo(function(){var r=n,s=!n;s&&(r=Xn(e));var d=new Map,f=new Map,h=function(R,u,w){w&&typeof w=="string"&&R.set(u[w],u)};function S(c){for(var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=0;u<c.length;u+=1){var w=c[u];!w[a.options]||R?(d.set(w[a.value],w),h(f,w,a.label),h(f,w,o),h(f,w,i)):S(w[a.options],!0)}}return S(r),{options:r,valueOptions:d,labelOptions:f}},[n,e,a,o,i])}function An(n){var e=t.useRef();e.current=n;var a=t.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var oo=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","optionRender","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","direction","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],ao=["inputValue"];function ro(n){return!n||dn(n)!=="object"}var io=t.forwardRef(function(n,e){var a=n.id,o=n.mode,i=n.prefixCls,r=i===void 0?"rc-select":i,s=n.backfill,d=n.fieldNames,f=n.inputValue,h=n.searchValue,S=n.onSearch,c=n.autoClearSearchValue,R=c===void 0?!0:c,u=n.onSelect,w=n.onDeselect,x=n.dropdownMatchSelectWidth,G=x===void 0?!0:x,P=n.filterOption,T=n.filterSort,_=n.optionFilterProp,Z=n.optionLabelProp,W=n.options,X=n.optionRender,Y=n.children,q=n.defaultActiveFirstOption,oe=n.menuItemSelectedIcon,L=n.virtual,K=n.direction,z=n.listHeight,ae=z===void 0?200:z,N=n.listItemHeight,H=N===void 0?20:N,A=n.value,D=n.defaultValue,p=n.labelInValue,le=n.onChange,Ce=Je(n,oo),ye=Qt(a),ce=yn(o),he=!!(!W&&Y),fe=t.useMemo(function(){return P===void 0&&o==="combobox"?!1:P},[P,o]),U=t.useMemo(function(){return zn(d,he)},[JSON.stringify(d),he]),Ve=wn("",{value:h!==void 0?h:f,postState:function(b){return b||""}}),Oe=te(Ve,2),I=Oe[0],v=Oe[1],O=to(W,Y,U,_,Z),F=O.valueOptions,k=O.labelOptions,C=O.options,V=t.useCallback(function(l){var b=Kn(l);return b.map(function(m){var g,$,B,_e,Ne;if(ro(m))g=m;else{var ke;B=m.key,$=m.label,g=(ke=m.value)!==null&&ke!==void 0?ke:B}var ue=F.get(g);if(ue){var Ke;$===void 0&&($=ue==null?void 0:ue[Z||U.label]),B===void 0&&(B=(Ke=ue==null?void 0:ue.key)!==null&&Ke!==void 0?Ke:g),_e=ue==null?void 0:ue.disabled,Ne=ue==null?void 0:ue.title}return{label:$,value:g,key:B,disabled:_e,title:Ne}})},[U,Z,F]),j=wn(D,{value:A}),se=te(j,2),ie=se[0],Ie=se[1],re=t.useMemo(function(){var l,b=V(ie);return o==="combobox"&&Pt((l=b[0])===null||l===void 0?void 0:l.value)?[]:b},[ie,V,o]),ve=Xt(re,F),Te=te(ve,2),Q=Te[0],ze=Te[1],Qe=t.useMemo(function(){if(!o&&Q.length===1){var l=Q[0];if(l.value===null&&(l.label===null||l.label===void 0))return[]}return Q.map(function(b){var m;return J(J({},b),{},{label:(m=b.label)!==null&&m!==void 0?m:b.value})})},[o,Q]),be=t.useMemo(function(){return new Set(Q.map(function(l){return l.value}))},[Q]);t.useEffect(function(){if(o==="combobox"){var l,b=(l=Q[0])===null||l===void 0?void 0:l.value;v(xt(b)?String(b):"")}},[Q]);var me=An(function(l,b){var m,g=b??l;return m={},ne(m,U.value,l),ne(m,U.label,g),m}),He=t.useMemo(function(){if(o!=="tags")return C;var l=Ee(C),b=function(g){return F.has(g)};return Ee(Q).sort(function(m,g){return m.value<g.value?-1:1}).forEach(function(m){var g=m.value;b(g)||l.push(me(g,m.label))}),l},[me,C,F,Q,o]),pe=Yt(He,U,I,fe,_),Re=t.useMemo(function(){return o!=="tags"||!I||pe.some(function(l){return l[_||"value"]===I})||pe.some(function(l){return l[U.value]===I})?pe:[me(I)].concat(Ee(pe))},[me,_,o,pe,I,U]),Se=t.useMemo(function(){return T?Ee(Re).sort(function(l,b){return T(l,b)}):Re},[Re,T]),Me=t.useMemo(function(){return $t(Se,{fieldNames:U,childrenAsData:he})},[Se,U,he]),Le=function(b){var m=V(b);if(Ie(m),le&&(m.length!==Q.length||m.some(function(B,_e){var Ne;return((Ne=Q[_e])===null||Ne===void 0?void 0:Ne.value)!==(B==null?void 0:B.value)}))){var g=p?m:m.map(function(B){return B.value}),$=m.map(function(B){return Cn(ze(B.value))});le(ce?g:g[0],ce?$:$[0])}},Ze=t.useState(null),je=te(Ze,2),en=je[0],Ge=je[1],xe=t.useState(0),nn=te(xe,2),Pe=nn[0],vn=nn[1],rn=q!==void 0?q:o!=="combobox",tn=t.useCallback(function(l,b){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},g=m.source,$=g===void 0?"keyboard":g;vn(b),s&&o==="combobox"&&l!==null&&$==="keyboard"&&Ge(String(l))},[s,o]),Xe=function(b,m,g){var $=function(){var Ue,Ae=ze(b);return[p?{label:Ae==null?void 0:Ae[U.label],value:b,key:(Ue=Ae==null?void 0:Ae.key)!==null&&Ue!==void 0?Ue:b}:b,Cn(Ae)]};if(m&&u){var B=$(),_e=te(B,2),Ne=_e[0],ke=_e[1];u(Ne,ke)}else if(!m&&w&&g!=="clear"){var ue=$(),Ke=te(ue,2),pn=Ke[0],gn=Ke[1];w(pn,gn)}},un=An(function(l,b){var m,g=ce?b.selected:!0;g?m=ce?[].concat(Ee(Q),[l]):[l]:m=Q.filter(function($){return $.value!==l}),Le(m),Xe(l,g),o==="combobox"?Ge(""):(!yn||R)&&(v(""),Ge(""))}),mn=function(b,m){Le(b);var g=m.type,$=m.values;(g==="remove"||g==="clear")&&$.forEach(function(B){Xe(B.value,!1,g)})},ln=function(b,m){if(v(b),Ge(null),m.source==="submit"){var g=(b||"").trim();if(g){var $=Array.from(new Set([].concat(Ee(be),[g])));Le($),Xe(g,!0),v("")}return}m.source!=="blur"&&(o==="combobox"&&Le(b),S==null||S(b))},cn=function(b){var m=b;o!=="tags"&&(m=b.map(function($){var B=k.get($);return B==null?void 0:B.value}).filter(function($){return $!==void 0}));var g=Array.from(new Set([].concat(Ee(be),Ee(m))));Le(g),g.forEach(function($){Xe($,!0)})},on=t.useMemo(function(){var l=L!==!1&&G!==!1;return J(J({},O),{},{flattenOptions:Me,onActiveValue:tn,defaultActiveFirstOption:rn,onSelect:un,menuItemSelectedIcon:oe,rawValues:be,fieldNames:U,virtual:l,direction:K,listHeight:ae,listItemHeight:H,childrenAsData:he,optionRender:X})},[O,Me,tn,rn,un,oe,be,U,L,G,ae,H,he,X]);return t.createElement(jn.Provider,{value:on},t.createElement(Ht,Fe({},Ce,{id:ye,prefixCls:r,ref:e,omitDomProps:ao,mode:o,displayValues:Qe,onDisplayValuesChange:mn,direction:K,searchValue:I,onSearch:ln,autoClearSearchValue:R,onSearchSplit:cn,dropdownMatchSelectWidth:G,OptionList:Gn,emptyOptions:!Me.length,activeValue:en,activeDescendantId:"".concat(ye,"_list_").concat(Pe)})))}),Yn=io;Yn.Option=Un;Yn.OptGroup=Hn;export{Un as O,Yn as T,Hn as a};
