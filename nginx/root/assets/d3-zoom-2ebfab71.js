import{i as j}from"./d3-transition-59b52f5f.js";import{d as et}from"./d3-dispatch-4199cc96.js";import{e as nt}from"./d3-interpolate-2a5bb011.js";import{s as X,p as x}from"./d3-selection-a6bf8644.js";import{a as it,y as ot}from"./d3-drag-bcb163b8.js";const P=n=>()=>n;function ut(n,{sourceEvent:l,target:m,transform:z,dispatch:w}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:l,enumerable:!0,configurable:!0},target:{value:m,enumerable:!0,configurable:!0},transform:{value:z,enumerable:!0,configurable:!0},_:{value:w}})}function T(n,l,m){this.k=n,this.x=l,this.y=m}T.prototype={constructor:T,scale:function(n){return n===1?this:new T(this.k*n,this.x,this.y)},translate:function(n,l){return n===0&l===0?this:new T(this.k,this.x+this.k*n,this.y+this.k*l)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var J=new T(1,0,0);T.prototype;function A(n){n.stopImmediatePropagation()}function I(n){n.preventDefault(),n.stopImmediatePropagation()}function rt(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function st(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function O(){return this.__zoom||J}function at(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function ht(){return navigator.maxTouchPoints||"ontouchstart"in this}function ct(n,l,m){var z=n.invertX(l[0][0])-m[0][0],w=n.invertX(l[1][0])-m[1][0],g=n.invertY(l[0][1])-m[0][1],f=n.invertY(l[1][1])-m[1][1];return n.translate(w>z?(z+w)/2:Math.min(0,z)||Math.max(0,w),f>g?(g+f)/2:Math.min(0,g)||Math.max(0,f))}function dt(){var n=rt,l=st,m=ct,z=at,w=ht,g=[0,1/0],f=[[-1/0,-1/0],[1/0,1/0]],V=250,G=nt,D=et("start","zoom","end"),M,K,E,C=500,L=150,S=0,q=10;function r(t){t.property("__zoom",O).on("wheel.zoom",N,{passive:!1}).on("mousedown.zoom",Q).on("dblclick.zoom",R).filter(w).on("touchstart.zoom",U).on("touchmove.zoom",$).on("touchend.zoom touchcancel.zoom",tt).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}r.transform=function(t,i,e,o){var u=t.selection?t.selection():t;u.property("__zoom",O),t!==u?F(t,i,e,o):u.interrupt().each(function(){_(this,arguments).event(o).start().zoom(null,typeof i=="function"?i.apply(this,arguments):i).end()})},r.scaleBy=function(t,i,e,o){r.scaleTo(t,function(){var u=this.__zoom.k,s=typeof i=="function"?i.apply(this,arguments):i;return u*s},e,o)},r.scaleTo=function(t,i,e,o){r.transform(t,function(){var u=l.apply(this,arguments),s=this.__zoom,a=e==null?W(u):typeof e=="function"?e.apply(this,arguments):e,h=s.invert(a),c=typeof i=="function"?i.apply(this,arguments):i;return m(Y(B(s,c),a,h),u,f)},e,o)},r.translateBy=function(t,i,e,o){r.transform(t,function(){return m(this.__zoom.translate(typeof i=="function"?i.apply(this,arguments):i,typeof e=="function"?e.apply(this,arguments):e),l.apply(this,arguments),f)},null,o)},r.translateTo=function(t,i,e,o,u){r.transform(t,function(){var s=l.apply(this,arguments),a=this.__zoom,h=o==null?W(s):typeof o=="function"?o.apply(this,arguments):o;return m(J.translate(h[0],h[1]).scale(a.k).translate(typeof i=="function"?-i.apply(this,arguments):-i,typeof e=="function"?-e.apply(this,arguments):-e),s,f)},o,u)};function B(t,i){return i=Math.max(g[0],Math.min(g[1],i)),i===t.k?t:new T(i,t.x,t.y)}function Y(t,i,e){var o=i[0]-e[0]*t.k,u=i[1]-e[1]*t.k;return o===t.x&&u===t.y?t:new T(t.k,o,u)}function W(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function F(t,i,e,o){t.on("start.zoom",function(){_(this,arguments).event(o).start()}).on("interrupt.zoom end.zoom",function(){_(this,arguments).event(o).end()}).tween("zoom",function(){var u=this,s=arguments,a=_(u,s).event(o),h=l.apply(u,s),c=e==null?W(h):typeof e=="function"?e.apply(u,s):e,v=Math.max(h[1][0]-h[0][0],h[1][1]-h[0][1]),p=u.__zoom,d=typeof i=="function"?i.apply(u,s):i,b=G(p.invert(c).concat(v/p.k),d.invert(c).concat(v/d.k));return function(y){if(y===1)y=d;else{var k=b(y),Z=v/k[2];y=new T(Z,c[0]-k[0]*Z,c[1]-k[1]*Z)}a.zoom(null,y)}})}function _(t,i,e){return!e&&t.__zooming||new H(t,i)}function H(t,i){this.that=t,this.args=i,this.active=0,this.sourceEvent=null,this.extent=l.apply(t,i),this.taps=0}H.prototype={event:function(t){return t&&(this.sourceEvent=t),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(t,i){return this.mouse&&t!=="mouse"&&(this.mouse[1]=i.invert(this.mouse[0])),this.touch0&&t!=="touch"&&(this.touch0[1]=i.invert(this.touch0[0])),this.touch1&&t!=="touch"&&(this.touch1[1]=i.invert(this.touch1[0])),this.that.__zoom=i,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(t){var i=X(this.that).datum();D.call(t,this.that,new ut(t,{sourceEvent:this.sourceEvent,target:r,type:t,transform:this.that.__zoom,dispatch:D}),i)}};function N(t,...i){if(!n.apply(this,arguments))return;var e=_(this,i).event(t),o=this.__zoom,u=Math.max(g[0],Math.min(g[1],o.k*Math.pow(2,z.apply(this,arguments)))),s=x(t);if(e.wheel)(e.mouse[0][0]!==s[0]||e.mouse[0][1]!==s[1])&&(e.mouse[1]=o.invert(e.mouse[0]=s)),clearTimeout(e.wheel);else{if(o.k===u)return;e.mouse=[s,o.invert(s)],j(this),e.start()}I(t),e.wheel=setTimeout(a,L),e.zoom("mouse",m(Y(B(o,u),e.mouse[0],e.mouse[1]),e.extent,f));function a(){e.wheel=null,e.end()}}function Q(t,...i){if(E||!n.apply(this,arguments))return;var e=t.currentTarget,o=_(this,i,!0).event(t),u=X(t.view).on("mousemove.zoom",c,!0).on("mouseup.zoom",v,!0),s=x(t,e),a=t.clientX,h=t.clientY;it(t.view),A(t),o.mouse=[s,this.__zoom.invert(s)],j(this),o.start();function c(p){if(I(p),!o.moved){var d=p.clientX-a,b=p.clientY-h;o.moved=d*d+b*b>S}o.event(p).zoom("mouse",m(Y(o.that.__zoom,o.mouse[0]=x(p,e),o.mouse[1]),o.extent,f))}function v(p){u.on("mousemove.zoom mouseup.zoom",null),ot(p.view,o.moved),I(p),o.event(p).end()}}function R(t,...i){if(n.apply(this,arguments)){var e=this.__zoom,o=x(t.changedTouches?t.changedTouches[0]:t,this),u=e.invert(o),s=e.k*(t.shiftKey?.5:2),a=m(Y(B(e,s),o,u),l.apply(this,i),f);I(t),V>0?X(this).transition().duration(V).call(F,a,o,t):X(this).call(r.transform,a,o,t)}}function U(t,...i){if(n.apply(this,arguments)){var e=t.touches,o=e.length,u=_(this,i,t.changedTouches.length===o).event(t),s,a,h,c;for(A(t),a=0;a<o;++a)h=e[a],c=x(h,this),c=[c,this.__zoom.invert(c),h.identifier],u.touch0?!u.touch1&&u.touch0[2]!==c[2]&&(u.touch1=c,u.taps=0):(u.touch0=c,s=!0,u.taps=1+!!M);M&&(M=clearTimeout(M)),s&&(u.taps<2&&(K=c[0],M=setTimeout(function(){M=null},C)),j(this),u.start())}}function $(t,...i){if(this.__zooming){var e=_(this,i).event(t),o=t.changedTouches,u=o.length,s,a,h,c;for(I(t),s=0;s<u;++s)a=o[s],h=x(a,this),e.touch0&&e.touch0[2]===a.identifier?e.touch0[0]=h:e.touch1&&e.touch1[2]===a.identifier&&(e.touch1[0]=h);if(a=e.that.__zoom,e.touch1){var v=e.touch0[0],p=e.touch0[1],d=e.touch1[0],b=e.touch1[1],y=(y=d[0]-v[0])*y+(y=d[1]-v[1])*y,k=(k=b[0]-p[0])*k+(k=b[1]-p[1])*k;a=B(a,Math.sqrt(y/k)),h=[(v[0]+d[0])/2,(v[1]+d[1])/2],c=[(p[0]+b[0])/2,(p[1]+b[1])/2]}else if(e.touch0)h=e.touch0[0],c=e.touch0[1];else return;e.zoom("touch",m(Y(a,h,c),e.extent,f))}}function tt(t,...i){if(this.__zooming){var e=_(this,i).event(t),o=t.changedTouches,u=o.length,s,a;for(A(t),E&&clearTimeout(E),E=setTimeout(function(){E=null},C),s=0;s<u;++s)a=o[s],e.touch0&&e.touch0[2]===a.identifier?delete e.touch0:e.touch1&&e.touch1[2]===a.identifier&&delete e.touch1;if(e.touch1&&!e.touch0&&(e.touch0=e.touch1,delete e.touch1),e.touch0)e.touch0[1]=this.__zoom.invert(e.touch0[0]);else if(e.end(),e.taps===2&&(a=x(a,this),Math.hypot(K[0]-a[0],K[1]-a[1])<q)){var h=X(this).on("dblclick.zoom");h&&h.apply(this,arguments)}}}return r.wheelDelta=function(t){return arguments.length?(z=typeof t=="function"?t:P(+t),r):z},r.filter=function(t){return arguments.length?(n=typeof t=="function"?t:P(!!t),r):n},r.touchable=function(t){return arguments.length?(w=typeof t=="function"?t:P(!!t),r):w},r.extent=function(t){return arguments.length?(l=typeof t=="function"?t:P([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),r):l},r.scaleExtent=function(t){return arguments.length?(g[0]=+t[0],g[1]=+t[1],r):[g[0],g[1]]},r.translateExtent=function(t){return arguments.length?(f[0][0]=+t[0][0],f[1][0]=+t[1][0],f[0][1]=+t[0][1],f[1][1]=+t[1][1],r):[[f[0][0],f[0][1]],[f[1][0],f[1][1]]]},r.constrain=function(t){return arguments.length?(m=t,r):m},r.duration=function(t){return arguments.length?(V=+t,r):V},r.interpolate=function(t){return arguments.length?(G=t,r):G},r.on=function(){var t=D.on.apply(D,arguments);return t===D?r:t},r.clickDistance=function(t){return arguments.length?(S=(t=+t)*t,r):Math.sqrt(S)},r.tapDistance=function(t){return arguments.length?(q=+t,r):q},r}export{J as i,dt as z};
