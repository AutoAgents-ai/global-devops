import{c as Se,g as wt}from"./bcryptjs.c9f6ecc4.js";import{r as Oe}from"./react.3139565a.js";import{c as Xe}from"./deepmerge.89e33937.js";import{r as Tt}from"./memoize-one.285be827.js";import{r as ze}from"./react-fast-compare.b6572a53.js";import{p as St}from"./prop-types.387d7a00.js";import{l as Rt}from"./load-script.d550e3b0.js";var we={},ne={};Object.defineProperty(ne,"__esModule",{value:!0});ne.defaultProps=ne.propTypes=void 0;var te=At(St);function At(e){return e&&e.__esModule?e:{default:e}}var K=te.default.string,F=te.default.bool,ie=te.default.number,Re=te.default.array,de=te.default.oneOfType,Z=te.default.shape,q=te.default.object,$=te.default.func,$e=te.default.node,Et={url:de([K,Re,q]),playing:F,loop:F,controls:F,volume:ie,muted:F,playbackRate:ie,width:de([K,ie]),height:de([K,ie]),style:q,progressInterval:ie,playsinline:F,pip:F,stopOnUnmount:F,light:de([F,K,q]),playIcon:$e,previewTabIndex:ie,fallback:$e,oEmbedUrl:K,wrapper:de([K,$,Z({render:$.isRequired})]),config:Z({soundcloud:Z({options:q}),youtube:Z({playerVars:q,embedOptions:q,onUnstarted:$}),facebook:Z({appId:K,version:K,playerId:K,attributes:q}),dailymotion:Z({params:q}),vimeo:Z({playerOptions:q,title:K}),file:Z({attributes:q,tracks:Re,forceVideo:F,forceAudio:F,forceHLS:F,forceSafariHLS:F,forceDisableHls:F,forceDASH:F,forceFLV:F,hlsOptions:q,hlsVersion:K,dashVersion:K,flvVersion:K}),wistia:Z({options:q,playerId:K,customControls:Re}),mixcloud:Z({options:q}),twitch:Z({options:q,playerId:K}),vidyard:Z({options:q})}),onReady:$,onStart:$,onPlay:$,onPause:$,onBuffer:$,onBufferEnd:$,onEnded:$,onError:$,onDuration:$,onSeek:$,onPlaybackRateChange:$,onPlaybackQualityChange:$,onProgress:$,onClickPreview:$,onEnablePIP:$,onDisablePIP:$};ne.propTypes=Et;var W=function(){},It={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:W},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:W,onStart:W,onPlay:W,onPause:W,onBuffer:W,onBufferEnd:W,onEnded:W,onError:W,onDuration:W,onSeek:W,onPlaybackRateChange:W,onPlaybackQualityChange:W,onProgress:W,onClickPreview:W,onEnablePIP:W,onDisablePIP:W};ne.defaultProps=It;var B={};Object.defineProperty(B,"__esModule",{value:!0});B.parseStartTime=Wt;B.parseEndTime=jt;B.randomString=Bt;B.queryString=Kt;B.getSDK=Ft;B.getConfig=qt;B.omit=Yt;B.callPlayer=Xt;B.isMediaStream=zt;B.isBlobUrl=Gt;B.supportsWebKitPresentationMode=Zt;var Ct=Ge(Rt),Dt=Ge(Xe);function Ge(e){return e&&e.__esModule?e:{default:e}}function Lt(e,t){return Ht(e)||kt(e,t)||Mt(e,t)||Ut()}function Ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(e,t){if(e){if(typeof e=="string")return xe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return xe(e,t)}}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=e[r];return u}function kt(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],u=!0,m=!1,_=void 0;try{for(var O=e[Symbol.iterator](),w;!(u=(w=O.next()).done)&&(r.push(w.value),!(t&&r.length===t));u=!0);}catch(f){m=!0,_=f}finally{try{!u&&O.return!=null&&O.return()}finally{if(m)throw _}}return r}}function Ht(e){if(Array.isArray(e))return e}var Nt=/[?&#](?:start|t)=([0-9hms]+)/,$t=/[?&#]end=([0-9hms]+)/,De=/(\d+)(h|m|s)/g,xt=/^\d+$/;function Ze(e,t){if(!(e instanceof Array)){var r=e.match(t);if(r){var u=r[1];if(u.match(De))return Vt(u);if(xt.test(u))return parseInt(u)}}}function Vt(e){for(var t=0,r=De.exec(e);r!==null;){var u=r,m=Lt(u,3),_=m[1],O=m[2];O==="h"&&(t+=parseInt(_,10)*60*60),O==="m"&&(t+=parseInt(_,10)*60),O==="s"&&(t+=parseInt(_,10)),r=De.exec(e)}return t}function Wt(e){return Ze(e,Nt)}function jt(e){return Ze(e,$t)}function Bt(){return Math.random().toString(36).substr(2,5)}function Kt(e){return Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&")}function Ae(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}var ue={};function Ft(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:function(){return!0},m=arguments.length>4&&arguments[4]!==void 0?arguments[4]:Ct.default,_=Ae(t);return _&&u(_)?Promise.resolve(_):new Promise(function(O,w){if(ue[e]){ue[e].push({resolve:O,reject:w});return}ue[e]=[{resolve:O,reject:w}];var f=function(H){ue[e].forEach(function(S){return S.resolve(H)})};if(r){var b=window[r];window[r]=function(){b&&b(),f(Ae(t))}}m(e,function(T){T?(ue[e].forEach(function(H){return H.reject(T)}),ue[e]=null):r||f(Ae(t))})})}function qt(e,t){return(0,Dt.default)(t.config,e.config)}function Yt(e){for(var t,r=arguments.length,u=new Array(r>1?r-1:0),m=1;m<r;m++)u[m-1]=arguments[m];for(var _=(t=[]).concat.apply(t,u),O={},w=Object.keys(e),f=0,b=w;f<b.length;f++){var T=b[f];_.indexOf(T)===-1&&(O[T]=e[T])}return O}function Xt(e){var t;if(!this.player||!this.player[e]){var r="ReactPlayer: ".concat(this.constructor.displayName," player could not call %c").concat(e,"%c – ");return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}for(var u=arguments.length,m=new Array(u>1?u-1:0),_=1;_<u;_++)m[_-1]=arguments[_];return(t=this.player)[e].apply(t,m)}function zt(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Gt(e){return/^blob:/.test(e)}function Zt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document.createElement("video"),t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var Qe={};(function(e){function t(a){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(l){return typeof l}:t=function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},t(a)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=f(Oe),u=O(ze),m=ne,_=B;function O(a){return a&&a.__esModule?a:{default:a}}function w(){if(typeof WeakMap!="function")return null;var a=new WeakMap;return w=function(){return a},a}function f(a){if(a&&a.__esModule)return a;if(a===null||t(a)!=="object"&&typeof a!="function")return{default:a};var i=w();if(i&&i.has(a))return i.get(a);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(Object.prototype.hasOwnProperty.call(a,h)){var E=n?Object.getOwnPropertyDescriptor(a,h):null;E&&(E.get||E.set)?Object.defineProperty(l,h,E):l[h]=a[h]}return l.default=a,i&&i.set(a,l),l}function b(){return b=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(a[n]=l[n])}return a},b.apply(this,arguments)}function T(a,i){if(!(a instanceof i))throw new TypeError("Cannot call a class as a function")}function H(a,i){for(var l=0;l<i.length;l++){var n=i[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function S(a,i,l){return i&&H(a.prototype,i),l&&H(a,l),a}function R(a,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(i&&i.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),i&&L(a,i)}function L(a,i){return L=Object.setPrototypeOf||function(n,h){return n.__proto__=h,n},L(a,i)}function Q(a){var i=ee();return function(){var n=Y(a),h;if(i){var E=Y(this).constructor;h=Reflect.construct(n,arguments,E)}else h=n.apply(this,arguments);return J(this,h)}}function J(a,i){return i&&(t(i)==="object"||typeof i=="function")?i:A(a)}function A(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function ee(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Y(a){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(l){return l.__proto__||Object.getPrototypeOf(l)},Y(a)}function D(a,i,l){return i in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l,a}var p=5e3,d=function(a){R(l,a);var i=Q(l);function l(){var n;T(this,l);for(var h=arguments.length,E=new Array(h),I=0;I<h;I++)E[I]=arguments[I];return n=i.call.apply(i,[this].concat(E)),D(A(n),"mounted",!1),D(A(n),"isReady",!1),D(A(n),"isPlaying",!1),D(A(n),"isLoading",!0),D(A(n),"loadOnReady",null),D(A(n),"startOnPlay",!0),D(A(n),"seekOnPlay",null),D(A(n),"onDurationCalled",!1),D(A(n),"handlePlayerMount",function(g){if(n.player){n.progress();return}n.player=g,n.player.load(n.props.url),n.progress()}),D(A(n),"getInternalPlayer",function(g){return n.player?n.player[g]:null}),D(A(n),"progress",function(){if(n.props.url&&n.player&&n.isReady){var g=n.getCurrentTime()||0,M=n.getSecondsLoaded(),U=n.getDuration();if(U){var C={playedSeconds:g,played:g/U};M!==null&&(C.loadedSeconds=M,C.loaded=M/U),(C.playedSeconds!==n.prevPlayed||C.loadedSeconds!==n.prevLoaded)&&n.props.onProgress(C),n.prevPlayed=C.playedSeconds,n.prevLoaded=C.loadedSeconds}}n.progressTimeout=setTimeout(n.progress,n.props.progressFrequency||n.props.progressInterval)}),D(A(n),"handleReady",function(){if(n.mounted){n.isReady=!0,n.isLoading=!1;var g=n.props,M=g.onReady,U=g.playing,C=g.volume,o=g.muted;M(),!o&&C!==null&&n.player.setVolume(C),n.loadOnReady?(n.player.load(n.loadOnReady,!0),n.loadOnReady=null):U&&n.player.play(),n.handleDurationCheck()}}),D(A(n),"handlePlay",function(){n.isPlaying=!0,n.isLoading=!1;var g=n.props,M=g.onStart,U=g.onPlay,C=g.playbackRate;n.startOnPlay&&(n.player.setPlaybackRate&&C!==1&&n.player.setPlaybackRate(C),M(),n.startOnPlay=!1),U(),n.seekOnPlay&&(n.seekTo(n.seekOnPlay),n.seekOnPlay=null),n.handleDurationCheck()}),D(A(n),"handlePause",function(g){n.isPlaying=!1,n.isLoading||n.props.onPause(g)}),D(A(n),"handleEnded",function(){var g=n.props,M=g.activePlayer,U=g.loop,C=g.onEnded;M.loopOnEnded&&U&&n.seekTo(0),U||(n.isPlaying=!1,C())}),D(A(n),"handleError",function(){var g;n.isLoading=!1,(g=n.props).onError.apply(g,arguments)}),D(A(n),"handleDurationCheck",function(){clearTimeout(n.durationCheckTimeout);var g=n.getDuration();g?n.onDurationCalled||(n.props.onDuration(g),n.onDurationCalled=!0):n.durationCheckTimeout=setTimeout(n.handleDurationCheck,100)}),D(A(n),"handleLoaded",function(){n.isLoading=!1}),n}return S(l,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}},{key:"componentDidUpdate",value:function(h){var E=this;if(this.player){var I=this.props,g=I.url,M=I.playing,U=I.volume,C=I.muted,o=I.playbackRate,s=I.pip,y=I.loop,c=I.activePlayer,v=I.disableDeferredLoading;if(!(0,u.default)(h.url,g)){if(this.isLoading&&!c.forceLoad&&!v&&!(0,_.isMediaStream)(g)){console.warn("ReactPlayer: the attempt to load ".concat(g," is being deferred until the player has loaded")),this.loadOnReady=g;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(g,this.isReady)}!h.playing&&M&&!this.isPlaying&&this.player.play(),h.playing&&!M&&this.isPlaying&&this.player.pause(),!h.pip&&s&&this.player.enablePIP&&this.player.enablePIP(),h.pip&&!s&&this.player.disablePIP&&this.player.disablePIP(),h.volume!==U&&U!==null&&this.player.setVolume(U),h.muted!==C&&(C?this.player.mute():(this.player.unmute(),U!==null&&setTimeout(function(){return E.player.setVolume(U)}))),h.playbackRate!==o&&this.player.setPlaybackRate&&this.player.setPlaybackRate(o),h.loop!==y&&this.player.setLoop&&this.player.setLoop(y)}}},{key:"getDuration",value:function(){return this.isReady?this.player.getDuration():null}},{key:"getCurrentTime",value:function(){return this.isReady?this.player.getCurrentTime():null}},{key:"getSecondsLoaded",value:function(){return this.isReady?this.player.getSecondsLoaded():null}},{key:"seekTo",value:function(h,E,I){var g=this;if(!this.isReady){h!==0&&(this.seekOnPlay=h,setTimeout(function(){g.seekOnPlay=null},p));return}var M=E?E==="fraction":h>0&&h<1;if(M){var U=this.player.getDuration();if(!U){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(U*h,I);return}this.player.seekTo(h,I)}},{key:"render",value:function(){var h=this.props.activePlayer;return h?r.default.createElement(h,b({},this.props,{onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError})):null}}]),l}(r.Component);e.default=d,D(d,"displayName","Player"),D(d,"propTypes",m.propTypes),D(d,"defaultProps",m.defaultProps)})(Qe);var Ee={},Ve;function Qt(){return Ve||(Ve=1,function(e){function t(p){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(a){return typeof a}:t=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(p)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=m(Oe);function u(){if(typeof WeakMap!="function")return null;var p=new WeakMap;return u=function(){return p},p}function m(p){if(p&&p.__esModule)return p;if(p===null||t(p)!=="object"&&typeof p!="function")return{default:p};var d=u();if(d&&d.has(p))return d.get(p);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in p)if(Object.prototype.hasOwnProperty.call(p,l)){var n=i?Object.getOwnPropertyDescriptor(p,l):null;n&&(n.get||n.set)?Object.defineProperty(a,l,n):a[l]=p[l]}return a.default=p,d&&d.set(p,a),a}function _(p,d){var a=Object.keys(p);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(p);d&&(i=i.filter(function(l){return Object.getOwnPropertyDescriptor(p,l).enumerable})),a.push.apply(a,i)}return a}function O(p){for(var d=1;d<arguments.length;d++){var a=arguments[d]!=null?arguments[d]:{};d%2?_(Object(a),!0).forEach(function(i){A(p,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach(function(i){Object.defineProperty(p,i,Object.getOwnPropertyDescriptor(a,i))})}return p}function w(p,d){if(!(p instanceof d))throw new TypeError("Cannot call a class as a function")}function f(p,d){for(var a=0;a<d.length;a++){var i=d[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(p,i.key,i)}}function b(p,d,a){return d&&f(p.prototype,d),a&&f(p,a),p}function T(p,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(d&&d.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),d&&H(p,d)}function H(p,d){return H=Object.setPrototypeOf||function(i,l){return i.__proto__=l,i},H(p,d)}function S(p){var d=Q();return function(){var i=J(p),l;if(d){var n=J(this).constructor;l=Reflect.construct(i,arguments,n)}else l=i.apply(this,arguments);return R(this,l)}}function R(p,d){return d&&(t(d)==="object"||typeof d=="function")?d:L(p)}function L(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function Q(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function J(p){return J=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},J(p)}function A(p,d,a){return d in p?Object.defineProperty(p,d,{value:a,enumerable:!0,configurable:!0,writable:!0}):p[d]=a,p}var ee="64px",Y={},D=function(p){T(a,p);var d=S(a);function a(){var i;w(this,a);for(var l=arguments.length,n=new Array(l),h=0;h<l;h++)n[h]=arguments[h];return i=d.call.apply(d,[this].concat(n)),A(L(i),"mounted",!1),A(L(i),"state",{image:null}),A(L(i),"handleKeyPress",function(E){(E.key==="Enter"||E.key===" ")&&i.props.onClick()}),i}return b(a,[{key:"componentDidMount",value:function(){this.mounted=!0,this.fetchImage(this.props)}},{key:"componentDidUpdate",value:function(l){var n=this.props,h=n.url,E=n.light;(l.url!==h||l.light!==E)&&this.fetchImage(this.props)}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"fetchImage",value:function(l){var n=this,h=l.url,E=l.light,I=l.oEmbedUrl;if(!r.default.isValidElement(E)){if(typeof E=="string"){this.setState({image:E});return}if(Y[h]){this.setState({image:Y[h]});return}return this.setState({image:null}),window.fetch(I.replace("{url}",h)).then(function(g){return g.json()}).then(function(g){if(g.thumbnail_url&&n.mounted){var M=g.thumbnail_url.replace("height=100","height=480").replace("-d_295x166","-d_640");n.setState({image:M}),Y[h]=M}})}}},{key:"render",value:function(){var l=this.props,n=l.light,h=l.onClick,E=l.playIcon,I=l.previewTabIndex,g=this.state.image,M=r.default.isValidElement(n),U={display:"flex",alignItems:"center",justifyContent:"center"},C={preview:O({width:"100%",height:"100%",backgroundImage:g&&!M?"url(".concat(g,")"):void 0,backgroundSize:"cover",backgroundPosition:"center",cursor:"pointer"},U),shadow:O({background:"radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",borderRadius:ee,width:ee,height:ee,position:M?"absolute":void 0},U),playIcon:{borderStyle:"solid",borderWidth:"16px 0 16px 26px",borderColor:"transparent transparent transparent white",marginLeft:"7px"}},o=r.default.createElement("div",{style:C.shadow,className:"react-player__shadow"},r.default.createElement("div",{style:C.playIcon,className:"react-player__play-icon"}));return r.default.createElement("div",{style:C.preview,className:"react-player__preview",onClick:h,tabIndex:I,onKeyPress:this.handleKeyPress},M?n:null,E||o)}}]),a}(r.Component);e.default=D}(Ee)),Ee}Object.defineProperty(we,"__esModule",{value:!0});we.createReactPlayer=void 0;var re=et(Oe),Jt=Te(Xe),Ie=Te(Tt),We=Te(ze),ve=ne,er=B,tr=Te(Qe);function Te(e){return e&&e.__esModule?e:{default:e}}function me(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?me=function(r){return typeof r}:me=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},me(e)}function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);t&&(u=u.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),r.push.apply(r,u)}return r}function Be(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?je(Object(r),!0).forEach(function(u){k(e,u,r[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach(function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(r,u))})}return e}function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(e[u]=r[u])}return e},Pe.apply(this,arguments)}function Ce(e){return or(e)||ar(e)||nr(e)||rr()}function rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nr(e,t){if(e){if(typeof e=="string")return Le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Le(e,t)}}function ar(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function or(e){if(Array.isArray(e))return Le(e)}function Le(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=e[r];return u}function ir(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ke(e,t){for(var r=0;r<t.length;r++){var u=t[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}function ur(e,t,r){return t&&Ke(e.prototype,t),r&&Ke(e,r),e}function lr(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ue(e,t)}function Ue(e,t){return Ue=Object.setPrototypeOf||function(u,m){return u.__proto__=m,u},Ue(e,t)}function fr(e){var t=cr();return function(){var u=be(e),m;if(t){var _=be(this).constructor;m=Reflect.construct(u,arguments,_)}else m=u.apply(this,arguments);return sr(this,m)}}function sr(e,t){return t&&(me(t)==="object"||typeof t=="function")?t:j(e)}function j(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function cr(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function be(e){return be=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},be(e)}function k(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Je(){if(typeof WeakMap!="function")return null;var e=new WeakMap;return Je=function(){return e},e}function et(e){if(e&&e.__esModule)return e;if(e===null||me(e)!=="object"&&typeof e!="function")return{default:e};var t=Je();if(t&&t.has(e))return t.get(e);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if(Object.prototype.hasOwnProperty.call(e,m)){var _=u?Object.getOwnPropertyDescriptor(e,m):null;_&&(_.get||_.set)?Object.defineProperty(r,m,_):r[m]=e[m]}return r.default=e,t&&t.set(e,r),r}var pr=(0,re.lazy)(function(){return Promise.resolve().then(function(){return et(Qt())})}),yr=typeof window<"u"&&window.document,dr=typeof Se<"u"&&Se.window&&Se.window.document,hr=Object.keys(ve.propTypes),vr=yr||dr?re.Suspense:function(){return null},he=[],mr=function(t,r){var u,m;return m=u=function(_){lr(w,_);var O=fr(w);function w(){var f;ir(this,w);for(var b=arguments.length,T=new Array(b),H=0;H<b;H++)T[H]=arguments[H];return f=O.call.apply(O,[this].concat(T)),k(j(f),"state",{showPreview:!!f.props.light}),k(j(f),"references",{wrapper:function(R){f.wrapper=R},player:function(R){f.player=R}}),k(j(f),"handleClickPreview",function(S){f.setState({showPreview:!1}),f.props.onClickPreview(S)}),k(j(f),"showPreview",function(){f.setState({showPreview:!0})}),k(j(f),"getDuration",function(){return f.player?f.player.getDuration():null}),k(j(f),"getCurrentTime",function(){return f.player?f.player.getCurrentTime():null}),k(j(f),"getSecondsLoaded",function(){return f.player?f.player.getSecondsLoaded():null}),k(j(f),"getInternalPlayer",function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"player";return f.player?f.player.getInternalPlayer(S):null}),k(j(f),"seekTo",function(S,R,L){if(!f.player)return null;f.player.seekTo(S,R,L)}),k(j(f),"handleReady",function(){f.props.onReady(j(f))}),k(j(f),"getActivePlayer",(0,Ie.default)(function(S){for(var R=0,L=[].concat(he,Ce(t));R<L.length;R++){var Q=L[R];if(Q.canPlay(S))return Q}return r||null})),k(j(f),"getConfig",(0,Ie.default)(function(S,R){var L=f.props.config;return Jt.default.all([ve.defaultProps.config,ve.defaultProps.config[R]||{},L,L[R]||{}])})),k(j(f),"getAttributes",(0,Ie.default)(function(S){return(0,er.omit)(f.props,hr)})),k(j(f),"renderActivePlayer",function(S){if(!S)return null;var R=f.getActivePlayer(S);if(!R)return null;var L=f.getConfig(S,R.key);return re.default.createElement(tr.default,Pe({},f.props,{key:R.key,ref:f.references.player,config:L,activePlayer:R.lazyPlayer||R,onReady:f.handleReady}))}),f}return ur(w,[{key:"shouldComponentUpdate",value:function(b,T){return!(0,We.default)(this.props,b)||!(0,We.default)(this.state,T)}},{key:"componentDidUpdate",value:function(b){var T=this.props.light;!b.light&&T&&this.setState({showPreview:!0}),b.light&&!T&&this.setState({showPreview:!1})}},{key:"renderPreview",value:function(b){if(!b)return null;var T=this.props,H=T.light,S=T.playIcon,R=T.previewTabIndex,L=T.oEmbedUrl;return re.default.createElement(pr,{url:b,light:H,playIcon:S,previewTabIndex:R,oEmbedUrl:L,onClick:this.handleClickPreview})}},{key:"render",value:function(){var b=this.props,T=b.url,H=b.style,S=b.width,R=b.height,L=b.fallback,Q=b.wrapper,J=this.state.showPreview,A=this.getAttributes(T),ee=typeof Q=="string"?this.references.wrapper:void 0;return re.default.createElement(Q,Pe({ref:ee,style:Be(Be({},H),{},{width:S,height:R})},A),re.default.createElement(vr,{fallback:L},J?this.renderPreview(T):this.renderActivePlayer(T)))}}]),w}(re.Component),k(u,"displayName","ReactPlayer"),k(u,"propTypes",ve.propTypes),k(u,"defaultProps",ve.defaultProps),k(u,"addCustomPlayer",function(_){he.push(_)}),k(u,"removeCustomPlayers",function(){he.length=0}),k(u,"canPlay",function(_){for(var O=0,w=[].concat(he,Ce(t));O<w.length;O++){var f=w[O];if(f.canPlay(_))return!0}return!1}),k(u,"canEnablePIP",function(_){for(var O=0,w=[].concat(he,Ce(t));O<w.length;O++){var f=w[O];if(f.canEnablePIP&&f.canEnablePIP(_))return!0}return!1}),m};we.createReactPlayer=mr;var tt={},P={};Object.defineProperty(P,"__esModule",{value:!0});P.canPlay=P.FLV_EXTENSIONS=P.DASH_EXTENSIONS=P.HLS_EXTENSIONS=P.VIDEO_EXTENSIONS=P.AUDIO_EXTENSIONS=P.MATCH_URL_KALTURA=P.MATCH_URL_VIDYARD=P.MATCH_URL_MIXCLOUD=P.MATCH_URL_DAILYMOTION=P.MATCH_URL_TWITCH_CHANNEL=P.MATCH_URL_TWITCH_VIDEO=P.MATCH_URL_WISTIA=P.MATCH_URL_STREAMABLE=P.MATCH_URL_FACEBOOK_WATCH=P.MATCH_URL_FACEBOOK=P.MATCH_URL_VIMEO=P.MATCH_URL_SOUNDCLOUD=P.MATCH_URL_YOUTUBE=void 0;var Fe=B;function gr(e,t){var r;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=_r(e))||t&&e&&typeof e.length=="number"){r&&(e=r);var u=0,m=function(){};return{s:m,n:function(){return u>=e.length?{done:!0}:{done:!1,value:e[u++]}},e:function(b){throw b},f:m}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _=!0,O=!1,w;return{s:function(){r=e[Symbol.iterator]()},n:function(){var b=r.next();return _=b.done,b},e:function(b){O=!0,w=b},f:function(){try{!_&&r.return!=null&&r.return()}finally{if(O)throw w}}}}function _r(e,t){if(e){if(typeof e=="string")return qe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return qe(e,t)}}function qe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,u=new Array(t);r<t;r++)u[r]=e[r];return u}var Me=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;P.MATCH_URL_YOUTUBE=Me;var rt=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/;P.MATCH_URL_SOUNDCLOUD=rt;var nt=/vimeo\.com\/(?!progressive_redirect).+/;P.MATCH_URL_VIMEO=nt;var at=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;P.MATCH_URL_FACEBOOK=at;var ot=/^https?:\/\/fb\.watch\/.+$/;P.MATCH_URL_FACEBOOK_WATCH=ot;var it=/streamable\.com\/([a-z0-9]+)$/;P.MATCH_URL_STREAMABLE=it;var ut=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/;P.MATCH_URL_WISTIA=ut;var lt=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;P.MATCH_URL_TWITCH_VIDEO=lt;var ft=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;P.MATCH_URL_TWITCH_CHANNEL=ft;var st=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/;P.MATCH_URL_DAILYMOTION=st;var ct=/mixcloud\.com\/([^/]+\/[^/]+)/;P.MATCH_URL_MIXCLOUD=ct;var pt=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;P.MATCH_URL_VIDYARD=pt;var yt=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/;P.MATCH_URL_KALTURA=yt;var ke=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;P.AUDIO_EXTENSIONS=ke;var He=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;P.VIDEO_EXTENSIONS=He;var Ne=/\.(m3u8)($|\?)/i;P.HLS_EXTENSIONS=Ne;var dt=/\.(mpd)($|\?)/i;P.DASH_EXTENSIONS=dt;var ht=/\.(flv)($|\?)/i;P.FLV_EXTENSIONS=ht;var Pr=function e(t){if(t instanceof Array){var r=gr(t),u;try{for(r.s();!(u=r.n()).done;){var m=u.value;if(typeof m=="string"&&e(m)||e(m.src))return!0}}catch(_){r.e(_)}finally{r.f()}return!1}return(0,Fe.isMediaStream)(t)||(0,Fe.isBlobUrl)(t)?!0:ke.test(t)||He.test(t)||Ne.test(t)||dt.test(t)||ht.test(t)},br={youtube:function(t){return t instanceof Array?t.every(function(r){return Me.test(r)}):Me.test(t)},soundcloud:function(t){return rt.test(t)&&!ke.test(t)},vimeo:function(t){return nt.test(t)&&!He.test(t)&&!Ne.test(t)},facebook:function(t){return at.test(t)||ot.test(t)},streamable:function(t){return it.test(t)},wistia:function(t){return ut.test(t)},twitch:function(t){return lt.test(t)||ft.test(t)},dailymotion:function(t){return st.test(t)},mixcloud:function(t){return ct.test(t)},vidyard:function(t){return pt.test(t)},kaltura:function(t){return yt.test(t)},file:Pr};P.canPlay=br;(function(e){function t(o){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(y){return typeof y}:t=function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},t(o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=O(Oe),u=B,m=P;function _(){if(typeof WeakMap!="function")return null;var o=new WeakMap;return _=function(){return o},o}function O(o){if(o&&o.__esModule)return o;if(o===null||t(o)!=="object"&&typeof o!="function")return{default:o};var s=_();if(s&&s.has(o))return s.get(o);var y={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(Object.prototype.hasOwnProperty.call(o,v)){var x=c?Object.getOwnPropertyDescriptor(o,v):null;x&&(x.get||x.set)?Object.defineProperty(y,v,x):y[v]=o[v]}return y.default=o,s&&s.set(o,y),y}function w(o,s){var y=Object.keys(o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(o);s&&(c=c.filter(function(v){return Object.getOwnPropertyDescriptor(o,v).enumerable})),y.push.apply(y,c)}return y}function f(o){for(var s=1;s<arguments.length;s++){var y=arguments[s]!=null?arguments[s]:{};s%2?w(Object(y),!0).forEach(function(c){l(o,c,y[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(y)):w(Object(y)).forEach(function(c){Object.defineProperty(o,c,Object.getOwnPropertyDescriptor(y,c))})}return o}function b(o,s){return L(o)||R(o,s)||H(o,s)||T()}function T(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function H(o,s){if(o){if(typeof o=="string")return S(o,s);var y=Object.prototype.toString.call(o).slice(8,-1);if(y==="Object"&&o.constructor&&(y=o.constructor.name),y==="Map"||y==="Set")return Array.from(o);if(y==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))return S(o,s)}}function S(o,s){(s==null||s>o.length)&&(s=o.length);for(var y=0,c=new Array(s);y<s;y++)c[y]=o[y];return c}function R(o,s){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(o)))){var y=[],c=!0,v=!1,x=void 0;try{for(var V=o[Symbol.iterator](),N;!(c=(N=V.next()).done)&&(y.push(N.value),!(s&&y.length===s));c=!0);}catch(X){v=!0,x=X}finally{try{!c&&V.return!=null&&V.return()}finally{if(v)throw x}}return y}}function L(o){if(Array.isArray(o))return o}function Q(o,s){if(!(o instanceof s))throw new TypeError("Cannot call a class as a function")}function J(o,s){for(var y=0;y<s.length;y++){var c=s[y];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(o,c.key,c)}}function A(o,s,y){return s&&J(o.prototype,s),y&&J(o,y),o}function ee(o,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(s&&s.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),s&&Y(o,s)}function Y(o,s){return Y=Object.setPrototypeOf||function(c,v){return c.__proto__=v,c},Y(o,s)}function D(o){var s=a();return function(){var c=i(o),v;if(s){var x=i(this).constructor;v=Reflect.construct(c,arguments,x)}else v=c.apply(this,arguments);return p(this,v)}}function p(o,s){return s&&(t(s)==="object"||typeof s=="function")?s:d(o)}function d(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function a(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function i(o){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(y){return y.__proto__||Object.getPrototypeOf(y)},i(o)}function l(o,s,y){return s in o?Object.defineProperty(o,s,{value:y,enumerable:!0,configurable:!0,writable:!0}):o[s]=y,o}var n="https://www.youtube.com/iframe_api",h="YT",E="onYouTubeIframeAPIReady",I=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,g=/user\/([a-zA-Z0-9_-]+)\/?/,M=/youtube-nocookie\.com/,U="https://www.youtube-nocookie.com",C=function(o){ee(y,o);var s=D(y);function y(){var c;Q(this,y);for(var v=arguments.length,x=new Array(v),V=0;V<v;V++)x[V]=arguments[V];return c=s.call.apply(s,[this].concat(x)),l(d(c),"callPlayer",u.callPlayer),l(d(c),"parsePlaylist",function(N){if(N instanceof Array)return{listType:"playlist",playlist:N.map(c.getID).join(",")};if(I.test(N)){var X=N.match(I),z=b(X,2),le=z[1];return{listType:"playlist",list:le.replace(/^UC/,"UU")}}if(g.test(N)){var fe=N.match(g),se=b(fe,2),ae=se[1];return{listType:"user_uploads",list:ae}}return{}}),l(d(c),"onStateChange",function(N){var X=N.data,z=c.props,le=z.onPlay,fe=z.onPause,se=z.onBuffer,ae=z.onBufferEnd,ge=z.onEnded,ce=z.onReady,_e=z.loop,pe=z.config,oe=pe.playerVars,ye=pe.onUnstarted,G=window[h].PlayerState,vt=G.UNSTARTED,mt=G.PLAYING,gt=G.PAUSED,_t=G.BUFFERING,Pt=G.ENDED,bt=G.CUED;if(X===vt&&ye(),X===mt&&(le(),ae()),X===gt&&fe(),X===_t&&se(),X===Pt){var Ot=!!c.callPlayer("getPlaylist");_e&&!Ot&&(oe.start?c.seekTo(oe.start):c.play()),ge()}X===bt&&ce()}),l(d(c),"mute",function(){c.callPlayer("mute")}),l(d(c),"unmute",function(){c.callPlayer("unMute")}),l(d(c),"ref",function(N){c.container=N}),c}return A(y,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"getID",value:function(v){return!v||v instanceof Array||I.test(v)?null:v.match(m.MATCH_URL_YOUTUBE)[1]}},{key:"load",value:function(v,x){var V=this,N=this.props,X=N.playing,z=N.muted,le=N.playsinline,fe=N.controls,se=N.loop,ae=N.config,ge=N.onError,ce=ae.playerVars,_e=ae.embedOptions,pe=this.getID(v);if(x){if(I.test(v)||g.test(v)||v instanceof Array){this.player.loadPlaylist(this.parsePlaylist(v));return}this.player.cueVideoById({videoId:pe,startSeconds:(0,u.parseStartTime)(v)||ce.start,endSeconds:(0,u.parseEndTime)(v)||ce.end});return}(0,u.getSDK)(n,h,E,function(oe){return oe.loaded}).then(function(oe){V.container&&(V.player=new oe.Player(V.container,f({width:"100%",height:"100%",videoId:pe,playerVars:f(f({autoplay:X?1:0,mute:z?1:0,controls:fe?1:0,start:(0,u.parseStartTime)(v),end:(0,u.parseEndTime)(v),origin:window.location.origin,playsinline:le?1:0},V.parsePlaylist(v)),ce),events:{onReady:function(){se&&V.player.setLoop(!0),V.props.onReady()},onPlaybackRateChange:function(G){return V.props.onPlaybackRateChange(G.data)},onPlaybackQualityChange:function(G){return V.props.onPlaybackQualityChange(G)},onStateChange:V.onStateChange,onError:function(G){return ge(G.data)}},host:M.test(v)?U:void 0},_e)))},ge),_e.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}},{key:"play",value:function(){this.callPlayer("playVideo")}},{key:"pause",value:function(){this.callPlayer("pauseVideo")}},{key:"stop",value:function(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}},{key:"seekTo",value:function(v){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;this.callPlayer("seekTo",v),!x&&!this.props.playing&&this.pause()}},{key:"setVolume",value:function(v){this.callPlayer("setVolume",v*100)}},{key:"setPlaybackRate",value:function(v){this.callPlayer("setPlaybackRate",v)}},{key:"setLoop",value:function(v){this.callPlayer("setLoop",v)}},{key:"getDuration",value:function(){return this.callPlayer("getDuration")}},{key:"getCurrentTime",value:function(){return this.callPlayer("getCurrentTime")}},{key:"getSecondsLoaded",value:function(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}},{key:"render",value:function(){var v=this.props.display,x={width:"100%",height:"100%",display:v};return r.default.createElement("div",{style:x},r.default.createElement("div",{ref:this.ref}))}}]),y}(r.Component);e.default=C,l(C,"displayName","YouTube"),l(C,"canPlay",m.canPlay.youtube)})(tt);var Or=we.createReactPlayer,Ye=tt.default,wr=Or([{key:"youtube",canPlay:Ye.canPlay,lazyPlayer:Ye}]);const Dr=wt(wr);export{Dr as R};