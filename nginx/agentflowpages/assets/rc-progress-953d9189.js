import{r as a}from"./react-6c224063.js";import{c as re}from"./classnames-5987b41f.js";import{c as ae,d as _,e as X,k as oe,g as ce}from"./@babel-2cf8752d.js";import{c as ne}from"./rc-util-ce8c70c6.js";var se={percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1,gapPosition:"bottom"},ie=function(){var r=a.useRef([]),e=a.useRef(null);return a.useEffect(function(){var o=Date.now(),c=!1;r.current.forEach(function(i){if(i){c=!0;var n=i.style;n.transitionDuration=".3s, .3s, .3s, .06s",e.current&&o-e.current<100&&(n.transitionDuration="0s, 0s")}}),c&&(e.current=Date.now())}),r.current},Z=0,le=ne();function ue(){var t;return le?(t=Z,Z+=1):t="TEST_OR_SSR",t}const fe=function(t){var r=a.useState(),e=ae(r,2),o=e[0],c=e[1];return a.useEffect(function(){c("rc_progress_".concat(ue()))},[]),t||o};var q=function(r){var e=r.bg,o=r.children;return a.createElement("div",{style:{width:"100%",height:"100%",background:e}},o)};function G(t,r){return Object.keys(t).map(function(e){var o=parseFloat(e),c="".concat(Math.floor(o*r),"%");return"".concat(t[e]," ").concat(c)})}var de=a.forwardRef(function(t,r){var e=t.prefixCls,o=t.color,c=t.gradientId,i=t.radius,n=t.style,h=t.ptg,d=t.strokeLinecap,s=t.strokeWidth,u=t.size,l=t.gapDegree,p=o&&_(o)==="object",y=p?"#FFF":void 0,f=u/2,g=a.createElement("circle",{className:"".concat(e,"-circle-path"),r:i,cx:f,cy:f,stroke:y,strokeLinecap:d,strokeWidth:s,opacity:h===0?0:1,style:n,ref:r});if(!p)return g;var x="".concat(c,"-conic"),F=l?"".concat(180+l/2,"deg"):"0deg",v=G(o,(360-l)/360),R=G(o,1),I="conic-gradient(from ".concat(F,", ").concat(v.join(", "),")"),k="linear-gradient(to ".concat(l?"bottom":"top",", ").concat(R.join(", "),")");return a.createElement(a.Fragment,null,a.createElement("mask",{id:x},g),a.createElement("foreignObject",{x:0,y:0,width:u,height:u,mask:"url(#".concat(x,")")},a.createElement(q,{bg:k},a.createElement(q,{bg:I}))))}),L=100,T=function(r,e,o,c,i,n,h,d,s,u){var l=arguments.length>10&&arguments[10]!==void 0?arguments[10]:0,p=o/100*360*((360-n)/360),y=n===0?0:{bottom:0,top:180,left:90,right:-90}[h],f=(100-c)/100*e;s==="round"&&c!==100&&(f+=u/2,f>=e&&(f=e-.01));var g=L/2;return{stroke:typeof d=="string"?d:void 0,strokeDasharray:"".concat(e,"px ").concat(r),strokeDashoffset:f+l,transform:"rotate(".concat(i+p+y,"deg)"),transformOrigin:"".concat(g,"px ").concat(g,"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",fillOpacity:0}},ge=["id","prefixCls","steps","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"];function H(t){var r=t??[];return Array.isArray(r)?r:[r]}var ye=function(r){var e=X(X({},se),r),o=e.id,c=e.prefixCls,i=e.steps,n=e.strokeWidth,h=e.trailWidth,d=e.gapDegree,s=d===void 0?0:d,u=e.gapPosition,l=e.trailColor,p=e.strokeLinecap,y=e.style,f=e.className,g=e.strokeColor,x=e.percent,F=oe(e,ge),v=L/2,R=fe(o),I="".concat(R,"-gradient"),k=v-n/2,P=Math.PI*2*k,B=s>0?90+s/2:-90,S=P*((360-s)/360),A=_(i)==="object"?i:{count:i,space:2},C=A.count,$=A.space,M=H(x),D=H(g),U=D.find(function(j){return j&&_(j)==="object"}),J=U&&_(U)==="object",W=J?"butt":p,Q=T(P,S,0,100,B,s,u,l,W,n),K=ie(),Y=function(){var w=0;return M.map(function(b,m){var z=D[m]||D[D.length-1],E=T(P,S,w,b,B,s,u,z,W,n);return w+=b,a.createElement(de,{key:m,color:z,ptg:b,radius:k,prefixCls:c,gradientId:I,style:E,strokeLinecap:W,strokeWidth:n,gapDegree:s,ref:function(O){K[m]=O},size:L})}).reverse()},ee=function(){var w=Math.round(C*(M[0]/100)),b=100/C,m=0;return new Array(C).fill(null).map(function(z,E){var N=E<=w-1?D[0]:l,O=N&&_(N)==="object"?"url(#".concat(I,")"):void 0,V=T(P,S,m,b,B,s,u,N,"butt",n,$);return m+=(S-V.strokeDashoffset+$)*100/S,a.createElement("circle",{key:E,className:"".concat(c,"-circle-path"),r:k,cx:v,cy:v,stroke:O,strokeWidth:n,opacity:1,style:V,ref:function(te){K[E]=te}})})};return a.createElement("svg",ce({className:re("".concat(c,"-circle"),f),viewBox:"0 0 ".concat(L," ").concat(L),style:y,id:o,role:"presentation"},F),!C&&a.createElement("circle",{className:"".concat(c,"-circle-trail"),r:k,cx:v,cy:v,stroke:l,strokeLinecap:W,strokeWidth:h||n,style:Q}),C?ee():Y())};export{ye as C};