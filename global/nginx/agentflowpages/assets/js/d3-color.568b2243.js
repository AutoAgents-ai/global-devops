function m(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function R(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function g(){}var y=.7,M=1/y,o="\\s*([+-]?\\d+)\\s*",w="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",h="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",U=/^#([0-9a-f]{3,8})$/,V=new RegExp(`^rgb\\(${o},${o},${o}\\)$`),W=new RegExp(`^rgb\\(${h},${h},${h}\\)$`),e0=new RegExp(`^rgba\\(${o},${o},${o},${w}\\)$`),t0=new RegExp(`^rgba\\(${h},${h},${h},${w}\\)$`),r0=new RegExp(`^hsl\\(${w},${h},${h}\\)$`),n0=new RegExp(`^hsla\\(${w},${h},${h},${w}\\)$`),z={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};m(g,I,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:j,formatHex:j,formatHex8:a0,formatHsl:i0,formatRgb:O,toString:O});function j(){return this.rgb().formatHex()}function a0(){return this.rgb().formatHex8()}function i0(){return A(this).formatHsl()}function O(){return this.rgb().formatRgb()}function I(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=U.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?S(t):r===3?new a(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?N(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?N(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=V.exec(e))?new a(t[1],t[2],t[3],1):(t=W.exec(e))?new a(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=e0.exec(e))?N(t[1],t[2],t[3],t[4]):(t=t0.exec(e))?N(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=r0.exec(e))?X(t[1],t[2]/100,t[3]/100,1):(t=n0.exec(e))?X(t[1],t[2]/100,t[3]/100,t[4]):z.hasOwnProperty(e)?S(z[e]):e==="transparent"?new a(NaN,NaN,NaN,0):null}function S(e){return new a(e>>16&255,e>>8&255,e&255,1)}function N(e,t,r,n){return n<=0&&(e=t=r=NaN),new a(e,t,r,n)}function Z(e){return e instanceof g||(e=I(e)),e?(e=e.rgb(),new a(e.r,e.g,e.b,e.opacity)):new a}function f0(e,t,r,n){return arguments.length===1?Z(e):new a(e,t,r,n??1)}function a(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}m(a,f0,R(g,{brighter(e){return e=e==null?M:Math.pow(M,e),new a(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?y:Math.pow(y,e),new a(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new a(d(this.r),d(this.g),d(this.b),H(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:L,formatHex:L,formatHex8:s0,formatRgb:K,toString:K}));function L(){return`#${b(this.r)}${b(this.g)}${b(this.b)}`}function s0(){return`#${b(this.r)}${b(this.g)}${b(this.b)}${b((isNaN(this.opacity)?1:this.opacity)*255)}`}function K(){const e=H(this.opacity);return`${e===1?"rgb(":"rgba("}${d(this.r)}, ${d(this.g)}, ${d(this.b)}${e===1?")":`, ${e})`}`}function H(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function d(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function b(e){return e=d(e),(e<16?"0":"")+e.toString(16)}function X(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new f(e,t,r,n)}function A(e){if(e instanceof f)return new f(e.h,e.s,e.l,e.opacity);if(e instanceof g||(e=I(e)),!e)return new f;if(e instanceof f)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,i=Math.min(t,r,n),s=Math.max(t,r,n),l=NaN,u=s-i,$=(s+i)/2;return u?(t===s?l=(r-n)/u+(r<n)*6:r===s?l=(n-t)/u+2:l=(t-r)/u+4,u/=$<.5?s+i:2-s-i,l*=60):u=$>0&&$<1?0:l,new f(l,u,$,e.opacity)}function l0(e,t,r,n){return arguments.length===1?A(e):new f(e,t,r,n??1)}function f(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}m(f,l0,R(g,{brighter(e){return e=e==null?M:Math.pow(M,e),new f(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?y:Math.pow(y,e),new f(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,i=2*r-n;return new a(q(e>=240?e-240:e+120,i,n),q(e,i,n),q(e<120?e+240:e-120,i,n),this.opacity)},clamp(){return new f(Y(this.h),v(this.s),v(this.l),H(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=H(this.opacity);return`${e===1?"hsl(":"hsla("}${Y(this.h)}, ${v(this.s)*100}%, ${v(this.l)*100}%${e===1?")":`, ${e})`}`}}));function Y(e){return e=(e||0)%360,e<0?e+360:e}function v(e){return Math.max(0,Math.min(1,e||0))}function q(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const h0=Math.PI/180,x0=180/Math.PI,k=18,B=.96422,D=1,F=.82521,G=4/29,p=6/29,J=3*p*p,c0=p*p*p;function Q(e){if(e instanceof x)return new x(e.l,e.a,e.b,e.opacity);if(e instanceof c)return T(e);e instanceof a||(e=Z(e));var t=C(e.r),r=C(e.g),n=C(e.b),i=E((.2225045*t+.7168786*r+.0606169*n)/D),s,l;return t===r&&r===n?s=l=i:(s=E((.4360747*t+.3850649*r+.1430804*n)/B),l=E((.0139322*t+.0971045*r+.7141733*n)/F)),new x(116*i-16,500*(s-i),200*(i-l),e.opacity)}function u0(e,t,r,n){return arguments.length===1?Q(e):new x(e,t,r,n??1)}function x(e,t,r,n){this.l=+e,this.a=+t,this.b=+r,this.opacity=+n}m(x,u0,R(g,{brighter(e){return new x(this.l+k*(e??1),this.a,this.b,this.opacity)},darker(e){return new x(this.l-k*(e??1),this.a,this.b,this.opacity)},rgb(){var e=(this.l+16)/116,t=isNaN(this.a)?e:e+this.a/500,r=isNaN(this.b)?e:e-this.b/200;return t=B*P(t),e=D*P(e),r=F*P(r),new a(_(3.1338561*t-1.6168667*e-.4906146*r),_(-.9787684*t+1.9161415*e+.033454*r),_(.0719453*t-.2289914*e+1.4052427*r),this.opacity)}}));function E(e){return e>c0?Math.pow(e,1/3):e/J+G}function P(e){return e>p?e*e*e:J*(e-G)}function _(e){return 255*(e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055)}function C(e){return(e/=255)<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}function b0(e){if(e instanceof c)return new c(e.h,e.c,e.l,e.opacity);if(e instanceof x||(e=Q(e)),e.a===0&&e.b===0)return new c(NaN,0<e.l&&e.l<100?0:NaN,e.l,e.opacity);var t=Math.atan2(e.b,e.a)*x0;return new c(t<0?t+360:t,Math.sqrt(e.a*e.a+e.b*e.b),e.l,e.opacity)}function d0(e,t,r,n){return arguments.length===1?b0(e):new c(e,t,r,n??1)}function c(e,t,r,n){this.h=+e,this.c=+t,this.l=+r,this.opacity=+n}function T(e){if(isNaN(e.h))return new x(e.l,0,0,e.opacity);var t=e.h*h0;return new x(e.l,Math.cos(t)*e.c,Math.sin(t)*e.c,e.opacity)}m(c,d0,R(g,{brighter(e){return new c(this.h,this.c,this.l+k*(e??1),this.opacity)},darker(e){return new c(this.h,this.c,this.l-k*(e??1),this.opacity)},rgb(){return T(this).rgb()}}));export{I as c,d0 as h,f0 as r};
