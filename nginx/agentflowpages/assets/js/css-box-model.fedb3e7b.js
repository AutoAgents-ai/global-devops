import{i as x}from"./tiny-invariant.dd7d57d2.js";var f=function(t){var o=t.top,r=t.right,i=t.bottom,a=t.left,d=r-a,g=i-o,p={top:o,right:r,bottom:i,left:a,width:d,height:g,x:a,y:o,center:{x:(r+a)/2,y:(i+o)/2}};return p},l=function(t,o){return{top:t.top-o.top,left:t.left-o.left,bottom:t.bottom+o.bottom,right:t.right+o.right}},v=function(t,o){return{top:t.top+o.top,left:t.left+o.left,bottom:t.bottom-o.bottom,right:t.right-o.right}},B=function(t,o){return{top:t.top+o.y,left:t.left+o.x,bottom:t.bottom+o.y,right:t.right+o.x}},b={top:0,right:0,bottom:0,left:0},u=function(t){var o=t.borderBox,r=t.margin,i=r===void 0?b:r,a=t.border,d=a===void 0?b:a,g=t.padding,p=g===void 0?b:g,c=f(l(o,i)),m=f(v(o,d)),h=f(v(m,p));return{marginBox:c,borderBox:f(o),paddingBox:m,contentBox:h,margin:i,border:d,padding:p}},n=function(t){var o=t.slice(0,-2),r=t.slice(-2);if(r!=="px")return 0;var i=Number(o);return isNaN(i)&&x(!1),i},w=function(){return{x:window.pageXOffset,y:window.pageYOffset}},R=function(t,o){var r=t.borderBox,i=t.border,a=t.margin,d=t.padding,g=B(r,o);return u({borderBox:g,border:i,margin:a,padding:d})},L=function(t,o){return o===void 0&&(o=w()),R(t,o)},S=function(t,o){var r={top:n(o.marginTop),right:n(o.marginRight),bottom:n(o.marginBottom),left:n(o.marginLeft)},i={top:n(o.paddingTop),right:n(o.paddingRight),bottom:n(o.paddingBottom),left:n(o.paddingLeft)},a={top:n(o.borderTopWidth),right:n(o.borderRightWidth),bottom:n(o.borderBottomWidth),left:n(o.borderLeftWidth)};return u({borderBox:t,margin:r,padding:i,border:a})},N=function(t){var o=t.getBoundingClientRect(),r=window.getComputedStyle(t);return S(o,r)};export{S as a,f as b,u as c,l as e,N as g,R as o,L as w};
