import{c as y}from"./classnames-25f5e917.js";import{r as C,a as c}from"./react-f8c4b268.js";import{e as z,b as S,g as Y,d as ae,h as ue,c as Z,f as re}from"./@babel-8debb48f.js";import{p as oe,D as ie}from"./rc-util-35a1817f.js";function D(e){return!!(e.addonBefore||e.addonAfter)}function X(e){return!!(e.prefix||e.suffix||e.allowClear)}function ee(e,n,s,d){if(s){var t=n;if(n.type==="click"){var u=e.cloneNode(!0);t=Object.create(n,{target:{value:u},currentTarget:{value:u}}),u.value="",s(t);return}if(d!==void 0){t=Object.create(n,{target:{value:e},currentTarget:{value:e}}),e.value=d,s(t);return}s(t)}}function ce(e,n){if(e){e.focus(n);var s=n||{},d=s.cursor;if(d){var t=e.value.length;switch(d){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}}function ne(e){return typeof e>"u"||e===null?"":String(e)}var se=function(n){var s,d,t=n.inputElement,u=n.prefixCls,$=n.prefix,E=n.suffix,k=n.addonBefore,N=n.addonAfter,b=n.className,j=n.style,O=n.disabled,I=n.readOnly,K=n.focused,w=n.triggerFocus,v=n.allowClear,B=n.value,T=n.handleReset,m=n.hidden,l=n.classes,h=n.classNames,M=n.dataAttrs,f=n.styles,r=n.components,L=(r==null?void 0:r.affixWrapper)||"span",q=(r==null?void 0:r.groupWrapper)||"span",P=(r==null?void 0:r.wrapper)||"span",V=(r==null?void 0:r.groupAddon)||"span",A=C.useRef(null),i=function(g){var x;(x=A.current)!==null&&x!==void 0&&x.contains(g.target)&&(w==null||w())},W=function(){var g;if(!v)return null;var x=!O&&!I&&B,U="".concat(u,"-clear-icon"),te=ae(v)==="object"&&v!==null&&v!==void 0&&v.clearIcon?v.clearIcon:"✖";return c.createElement("span",{onClick:T,onMouseDown:function(le){return le.preventDefault()},className:y(U,(g={},S(g,"".concat(U,"-hidden"),!x),S(g,"".concat(U,"-has-suffix"),!!E),g)),role:"button",tabIndex:-1},te)},p=C.cloneElement(t,{value:B,hidden:m,className:y((s=t.props)===null||s===void 0?void 0:s.className,!X(n)&&!D(n)&&b)||null,style:z(z({},(d=t.props)===null||d===void 0?void 0:d.style),!X(n)&&!D(n)?j:{})});if(X(n)){var R,_="".concat(u,"-affix-wrapper"),J=y(_,(R={},S(R,"".concat(_,"-disabled"),O),S(R,"".concat(_,"-focused"),K),S(R,"".concat(_,"-readonly"),I),S(R,"".concat(_,"-input-with-clear-btn"),E&&v&&B),R),!D(n)&&b,l==null?void 0:l.affixWrapper,h==null?void 0:h.affixWrapper),Q=(E||v)&&c.createElement("span",{className:y("".concat(u,"-suffix"),h==null?void 0:h.suffix),style:f==null?void 0:f.suffix},W(),E);p=c.createElement(L,Y({className:J,style:z(z({},D(n)?void 0:j),f==null?void 0:f.affixWrapper),hidden:!D(n)&&m,onClick:i},M==null?void 0:M.affixWrapper,{ref:A}),$&&c.createElement("span",{className:y("".concat(u,"-prefix"),h==null?void 0:h.prefix),style:f==null?void 0:f.prefix},$),C.cloneElement(t,{value:B,hidden:null}),Q)}if(D(n)){var G="".concat(u,"-group"),H="".concat(G,"-addon"),o=y("".concat(u,"-wrapper"),G,l==null?void 0:l.wrapper),a=y("".concat(u,"-group-wrapper"),b,l==null?void 0:l.group);return c.createElement(q,{className:a,style:j,hidden:m},c.createElement(P,{className:o},k&&c.createElement(V,{className:H},k),C.cloneElement(p,{hidden:null}),N&&c.createElement(V,{className:H},N)))}return p},de=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","classes","classNames","styles"],xe=C.forwardRef(function(e,n){var s=e.autoComplete,d=e.onChange,t=e.onFocus,u=e.onBlur,$=e.onPressEnter,E=e.onKeyDown,k=e.prefixCls,N=k===void 0?"rc-input":k,b=e.disabled,j=e.htmlSize,O=e.className,I=e.maxLength,K=e.suffix,w=e.showCount,v=e.type,B=v===void 0?"text":v,T=e.classes,m=e.classNames,l=e.styles,h=ue(e,de),M=oe(e.defaultValue,{value:e.value}),f=Z(M,2),r=f[0],L=f[1],q=C.useState(!1),P=Z(q,2),V=P[0],A=P[1],i=C.useRef(null),W=function(a){i.current&&ce(i.current,a)};C.useImperativeHandle(n,function(){return{focus:W,blur:function(){var a;(a=i.current)===null||a===void 0||a.blur()},setSelectionRange:function(a,F,g){var x;(x=i.current)===null||x===void 0||x.setSelectionRange(a,F,g)},select:function(){var a;(a=i.current)===null||a===void 0||a.select()},input:i.current}}),C.useEffect(function(){A(function(o){return o&&b?!1:o})},[b]);var p=function(a){e.value===void 0&&L(a.target.value),i.current&&ee(i.current,a,d)},R=function(a){$&&a.key==="Enter"&&$(a),E==null||E(a)},_=function(a){A(!0),t==null||t(a)},J=function(a){A(!1),u==null||u(a)},Q=function(a){L(""),W(),i.current&&ee(i.current,a,d)},G=function(){var a=ie(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","classes","htmlSize","styles","classNames"]);return c.createElement("input",Y({autoComplete:s},a,{onChange:p,onFocus:_,onBlur:J,onKeyDown:R,className:y(N,S({},"".concat(N,"-disabled"),b),m==null?void 0:m.input),style:l==null?void 0:l.input,ref:i,size:j,type:B}))},H=function(){var a=Number(I)>0;if(K||w){var F=ne(r),g=re(F).length,x=ae(w)==="object"?w.formatter({value:F,count:g,maxLength:I}):"".concat(g).concat(a?" / ".concat(I):"");return c.createElement(c.Fragment,null,!!w&&c.createElement("span",{className:y("".concat(N,"-show-count-suffix"),S({},"".concat(N,"-show-count-has-suffix"),!!K),m==null?void 0:m.count),style:z({},l==null?void 0:l.count)},x),K)}return null};return c.createElement(se,Y({},h,{prefixCls:N,className:O,inputElement:G(),handleReset:Q,value:ne(r),focused:V,triggerFocus:W,suffix:H(),disabled:b,classes:T,classNames:m,styles:l}))});export{se as B,xe as I,ne as f,ee as r};
