import{b as ke,aC as be}from"./vue-3e7b265f.js";import{c as Ee,g as we,E as Ce}from"./element-f6a868e5.js";function Ae(){const{appContext:A}=ke();return{proxy:A.config.globalProperties}}var me={exports:{}};(function(A,P){(function(x,c){A.exports=c()})(Ee,function x(){var c=typeof self<"u"?self:typeof window<"u"?window:c!==void 0?c:{},z=!c.document&&!!c.postMessage,V=c.IS_PAPA_WORKER||!1,se={},ve=0,f={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(g(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!g(e.transform)&&e.transform,e.worker&&f.WORKERS_SUPPORTED){var n=function(){if(!f.WORKERS_SUPPORTED)return!1;var h=(S=c.URL||c.webkitURL||null,b=x.toString(),f.BLOB_URL||(f.BLOB_URL=S.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",b,")();"],{type:"text/javascript"})))),l=new c.Worker(h),S,b;return l.onmessage=ye,l.id=ve++,se[l.id]=l}();return n.userStep=e.step,n.userChunk=e.chunk,n.userComplete=e.complete,n.userError=e.error,e.step=g(e.step),e.chunk=g(e.chunk),e.complete=g(e.complete),e.error=g(e.error),delete e.worker,void n.postMessage({input:t,config:e,workerId:n.id})}var s=null;return f.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),s=e.download?new ae(e):new ne(e)):t.readable===!0&&g(t.read)&&g(t.on)?s=new ue(e):(c.File&&t instanceof File||t instanceof Object)&&(s=new oe(e)),s.stream(t)},unparse:function(t,e){var r=!1,n=!0,s=",",h=`\r
`,l='"',S=l+l,b=!1,a=null,w=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||f.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(b=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(l=e.quoteChar),typeof e.header=="boolean"&&(n=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(S=e.escapeChar+l),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(w=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(ie(l),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return N(null,t,b);if(typeof t[0]=="object")return N(a||Object.keys(t[0]),t,b)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),N(t.fields||[],t.data||[],b);throw new Error("Unable to serialize unrecognized input");function N(i,v,F){var E="";typeof i=="string"&&(i=JSON.parse(i)),typeof v=="string"&&(v=JSON.parse(v));var D=Array.isArray(i)&&0<i.length,I=!Array.isArray(v[0]);if(D&&n){for(var T=0;T<i.length;T++)0<T&&(E+=s),E+=L(i[T],T);0<v.length&&(E+=h)}for(var o=0;o<v.length;o++){var d=D?i.length:v[o].length,y=!1,O=D?Object.keys(v[o]).length===0:v[o].length===0;if(F&&!D&&(y=F==="greedy"?v[o].join("").trim()==="":v[o].length===1&&v[o][0].length===0),F==="greedy"&&D){for(var _=[],M=0;M<d;M++){var C=I?i[M]:M;_.push(v[o][C])}y=_.join("").trim()===""}if(!y){for(var m=0;m<d;m++){0<m&&!O&&(E+=s);var j=D&&I?i[m]:m;E+=L(v[o][j],m)}o<v.length-1&&(!F||0<d&&!O)&&(E+=h)}}return E}function L(i,v){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var F=!1;w&&typeof i=="string"&&w.test(i)&&(i="'"+i,F=!0);var E=i.toString().replace(u,S);return(F=F||r===!0||typeof r=="function"&&r(i,v)||Array.isArray(r)&&r[v]||function(D,I){for(var T=0;T<I.length;T++)if(-1<D.indexOf(I[T]))return!0;return!1}(E,f.BAD_DELIMITERS)||-1<E.indexOf(s)||E.charAt(0)===" "||E.charAt(E.length-1)===" ")?l+E+l:E}}};if(f.RECORD_SEP=String.fromCharCode(30),f.UNIT_SEP=String.fromCharCode(31),f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!z&&!!c.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=fe,f.ParserHandle=de,f.NetworkStreamer=ae,f.FileStreamer=oe,f.StringStreamer=ne,f.ReadableStreamStreamer=ue,c.jQuery){var re=c.jQuery;re.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(re(this).prop("tagName").toUpperCase()==="INPUT"&&re(this).attr("type").toLowerCase()==="file"&&c.FileReader)||!this.files||this.files.length===0)return!0;for(var l=0;l<this.files.length;l++)r.push({file:this.files[l],inputElem:this,instanceConfig:re.extend({},e)})}),n(),this;function n(){if(r.length!==0){var h,l,S,b,a=r[0];if(g(t.before)){var w=t.before(a.file,a.inputElem);if(typeof w=="object"){if(w.action==="abort")return h="AbortError",l=a.file,S=a.inputElem,b=w.reason,void(g(t.error)&&t.error({name:h},l,S,b));if(w.action==="skip")return void s();typeof w.config=="object"&&(a.instanceConfig=re.extend(a.instanceConfig,w.config))}else if(w==="skip")return void s()}var u=a.instanceConfig.complete;a.instanceConfig.complete=function(N){g(u)&&u(N,a.file,a.inputElem),s()},f.parse(a.file,a.instanceConfig)}else g(t.complete)&&t.complete()}function s(){r.splice(0,1),n()}}}function H(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var r=ce(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new de(r),(this._handle.streamer=this)._config=r}).call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&g(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);n!==void 0&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var h=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=h.meta.cursor;this._finished||(this._partialLine=s.substring(l-this._baseIndex),this._baseIndex=l),h&&h.data&&(this._rowCount+=h.data.length);var S=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(V)c.postMessage({results:h,workerId:f.WORKER_ID,finished:S});else if(g(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!S||!g(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),S||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){g(this._config.error)?this._config.error(e):V&&this._config.error&&c.postMessage({workerId:f.WORKER_ID,error:e,finished:!1})}}function ae(t){var e;(t=t||{}).chunkSize||(t.chunkSize=f.RemoteChunkSize),H.call(this,t),this._nextChunk=z?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),z||(e.onload=$(this._chunkLoaded,this),e.onerror=$(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!z),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var n in r)e.setRequestHeader(n,r[n])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}z&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var n=r.getResponseHeader("Content-Range");return n===null?-1:parseInt(n.substring(n.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var n=e.statusText||r;this._sendError(new Error(n))}}function oe(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=f.LocalChunkSize),H.call(this,t);var n=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,n?((e=new FileReader).onload=$(this._chunkLoaded,this),e.onerror=$(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,h)}var l=e.readAsText(s,this._config.encoding);n||this._chunkLoaded({target:{result:l}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function ne(t){var e;H.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,n=this._config.chunkSize;return n?(r=e.substring(0,n),e=e.substring(n)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function ue(t){H.call(this,t=t||{});var e=[],r=!0,n=!1;this.pause=function(){H.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){H.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=$(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=$(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=$(function(){this._streamCleanUp(),n=!0,this._streamData("")},this),this._streamCleanUp=$(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function de(t){var e,r,n,s=Math.pow(2,53),h=-s,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,S=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,b=this,a=0,w=0,u=!1,N=!1,L=[],i={data:[],errors:[],meta:{}};if(g(t.step)){var v=t.step;t.step=function(o){if(i=o,D())E();else{if(E(),i.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(i.data=i.data[0],v(i,b))}}}function F(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function E(){return i&&n&&(T("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),n=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!F(o)})),D()&&function(){if(!i)return;function o(y,O){g(t.transformHeader)&&(y=t.transformHeader(y,O)),L.push(y)}if(Array.isArray(i.data[0])){for(var d=0;D()&&d<i.data.length;d++)i.data[d].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(y,O){var _,M=t.header?{}:[];for(_=0;_<y.length;_++){var C=_,m=y[_];t.header&&(C=_>=L.length?"__parsed_extra":L[_]),t.transform&&(m=t.transform(m,C)),m=I(C,m),C==="__parsed_extra"?(M[C]=M[C]||[],M[C].push(m)):M[C]=m}return t.header&&(_>L.length?T("FieldMismatch","TooManyFields","Too many fields: expected "+L.length+" fields but parsed "+_,w+O):_<L.length&&T("FieldMismatch","TooFewFields","Too few fields: expected "+L.length+" fields but parsed "+_,w+O)),M}var d=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),d=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=L),w+=d,i}()}function D(){return t.header&&L.length===0}function I(o,d){return y=o,t.dynamicTypingFunction&&t.dynamicTyping[y]===void 0&&(t.dynamicTyping[y]=t.dynamicTypingFunction(y)),(t.dynamicTyping[y]||t.dynamicTyping)===!0?d==="true"||d==="TRUE"||d!=="false"&&d!=="FALSE"&&(function(O){if(l.test(O)){var _=parseFloat(O);if(h<_&&_<s)return!0}return!1}(d)?parseFloat(d):S.test(d)?new Date(d):d===""?null:d):d;var y}function T(o,d,y,O){var _={type:o,code:d,message:y};O!==void 0&&(_.row=O),i.errors.push(_)}this.parse=function(o,d,y){var O=t.quoteChar||'"';if(t.newline||(t.newline=function(C,m){C=C.substring(0,1048576);var j=new RegExp(ie(m)+"([^]*?)"+ie(m),"gm"),U=(C=C.replace(j,"")).split("\r"),W=C.split(`
`),Q=1<W.length&&W[0].length<U[0].length;if(U.length===1||Q)return`
`;for(var q=0,k=0;k<U.length;k++)U[k][0]===`
`&&q++;return q>=U.length/2?`\r
`:"\r"}(o,O)),n=!1,t.delimiter)g(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var _=function(C,m,j,U,W){var Q,q,k,R;W=W||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var X=0;X<W.length;X++){var p=W[X],te=0,J=0,ee=0;k=void 0;for(var G=new fe({comments:U,delimiter:p,newline:m,preview:10}).parse(C),Z=0;Z<G.data.length;Z++)if(j&&F(G.data[Z]))ee++;else{var Y=G.data[Z].length;J+=Y,k!==void 0?0<Y&&(te+=Math.abs(Y-k),k=Y):k=Y}0<G.data.length&&(J/=G.data.length-ee),(q===void 0||te<=q)&&(R===void 0||R<J)&&1.99<J&&(q=te,Q=p,R=J)}return{successful:!!(t.delimiter=Q),bestDelimiter:Q}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);_.successful?t.delimiter=_.bestDelimiter:(n=!0,t.delimiter=f.DefaultDelimiter),i.meta.delimiter=t.delimiter}var M=ce(t);return t.preview&&t.header&&M.preview++,e=o,r=new fe(M),i=r.parse(e,d,y),E(),u?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),e=g(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){b.streamer._halted?(u=!1,b.streamer.parseChunk(e,!0)):setTimeout(b.resume,3)},this.aborted=function(){return N},this.abort=function(){N=!0,r.abort(),i.meta.aborted=!0,g(t.complete)&&t.complete(i),e=""}}function ie(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function fe(t){var e,r=(t=t||{}).delimiter,n=t.newline,s=t.comments,h=t.step,l=t.preview,S=t.fastMode,b=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(b=t.escapeChar),(typeof r!="string"||-1<f.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<f.BAD_DELIMITERS.indexOf(s))&&(s=!1),n!==`
`&&n!=="\r"&&n!==`\r
`&&(n=`
`);var a=0,w=!1;this.parse=function(u,N,L){if(typeof u!="string")throw new Error("Input must be a string");var i=u.length,v=r.length,F=n.length,E=s.length,D=g(h),I=[],T=[],o=[],d=a=0;if(!u)return B();if(t.header&&!N){var y=u.split(n)[0].split(r),O=[],_={},M=!1;for(var C in y){var m=y[C];g(t.transformHeader)&&(m=t.transformHeader(m,C));var j=m,U=_[m]||0;for(0<U&&(M=!0,j=m+"_"+U),_[m]=U+1;O.includes(j);)j=j+"_"+U;O.push(j)}if(M){var W=u.split(n);W[0]=O.join(r),u=W.join(n)}}if(S||S!==!1&&u.indexOf(e)===-1){for(var Q=u.split(n),q=0;q<Q.length;q++){if(o=Q[q],a+=o.length,q!==Q.length-1)a+=n.length;else if(L)return B();if(!s||o.substring(0,E)!==s){if(D){if(I=[],ee(o.split(r)),he(),w)return B()}else ee(o.split(r));if(l&&l<=q)return I=I.slice(0,l),B(!0)}}return B()}for(var k=u.indexOf(r,a),R=u.indexOf(n,a),X=new RegExp(ie(b)+ie(e),"g"),p=u.indexOf(e,a);;)if(u[a]!==e)if(s&&o.length===0&&u.substring(a,a+E)===s){if(R===-1)return B();a=R+F,R=u.indexOf(n,a),k=u.indexOf(r,a)}else if(k!==-1&&(k<R||R===-1))o.push(u.substring(a,k)),a=k+v,k=u.indexOf(r,a);else{if(R===-1)break;if(o.push(u.substring(a,R)),Y(R+F),D&&(he(),w))return B();if(l&&I.length>=l)return B(!0)}else for(p=a,a++;;){if((p=u.indexOf(e,p+1))===-1)return L||T.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:I.length,index:a}),Z();if(p===i-1)return Z(u.substring(a,p).replace(X,e));if(e!==b||u[p+1]!==b){if(e===b||p===0||u[p-1]!==b){k!==-1&&k<p+1&&(k=u.indexOf(r,p+1)),R!==-1&&R<p+1&&(R=u.indexOf(n,p+1));var te=G(R===-1?k:Math.min(k,R));if(u.substr(p+1+te,v)===r){o.push(u.substring(a,p).replace(X,e)),u[a=p+1+te+v]!==e&&(p=u.indexOf(e,a)),k=u.indexOf(r,a),R=u.indexOf(n,a);break}var J=G(R);if(u.substring(p+1+J,p+1+J+F)===n){if(o.push(u.substring(a,p).replace(X,e)),Y(p+1+J+F),k=u.indexOf(r,a),p=u.indexOf(e,a),D&&(he(),w))return B();if(l&&I.length>=l)return B(!0);break}T.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:I.length,index:a}),p++}}else p++}return Z();function ee(K){I.push(K),d=a}function G(K){var _e=0;if(K!==-1){var le=u.substring(p+1,K);le&&le.trim()===""&&(_e=le.length)}return _e}function Z(K){return L||(K===void 0&&(K=u.substring(a)),o.push(K),a=i,ee(o),D&&he()),B()}function Y(K){a=K,ee(o),o=[],R=u.indexOf(n,a)}function B(K){return{data:I,errors:T,meta:{delimiter:r,linebreak:n,aborted:w,truncated:!!K,cursor:d+(N||0)}}}function he(){h(B()),I=[],T=[]}},this.abort=function(){w=!0},this.getCharIndex=function(){return a}}function ye(t){var e=t.data,r=se[e.workerId],n=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){n=!0,pe(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:ge,resume:ge};if(g(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},s),!n);h++);delete e.results}else g(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!n&&pe(e.workerId,e.results)}function pe(t,e){var r=se[t];g(r.userComplete)&&r.userComplete(e),r.terminate(),delete se[t]}function ge(){throw new Error("Not implemented.")}function ce(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=ce(t[r]);return e}function $(t,e){return function(){t.apply(e,arguments)}}function g(t){return typeof t=="function"}return V&&(c.onmessage=function(t){var e=t.data;if(f.WORKER_ID===void 0&&e&&(f.WORKER_ID=e.workerId),typeof e.input=="string")c.postMessage({workerId:f.WORKER_ID,results:f.parse(e.input,e.config),finished:!0});else if(c.File&&e.input instanceof File||e.input instanceof Object){var r=f.parse(e.input,e.config);r&&c.postMessage({workerId:f.WORKER_ID,results:r,finished:!0})}}),(ae.prototype=Object.create(H.prototype)).constructor=ae,(oe.prototype=Object.create(H.prototype)).constructor=oe,(ne.prototype=Object.create(ne.prototype)).constructor=ne,(ue.prototype=Object.create(H.prototype)).constructor=ue,f})})(me);var xe=me.exports;const Re=we(xe),Se=A=>{try{return A?`/assets/${A}`:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"}catch(P){return console.warn(P),""}},De=(A,P=700,x=.25)=>{const c=[];let z=0;for(;z<A.length;){const V=A.slice(z,z+P);c.push(V),z+=Math.round(P*(1-x))}return c},Le=async(A,P)=>{try{Oe(A).then(x=>{const c=Re.parse(x).data,z=x==null?void 0:x.slice(4,4+(x==null?void 0:x.length)/2);if(z.indexOf("�")!==-1||c.length,z.indexOf("�")!==-1||c.length===0)throw Ce({message:"csv 解析失败,请将 CSV 转成 UTF-8 解码格式",type:"warning"}),"csv 解析失败";P({header:c.shift(),data:c.map(V=>V)})})}catch{return Promise.reject("解析 csv 文件失败")}},Oe=A=>new Promise((P,x)=>{try{const c=new FileReader;c.onload=()=>{P(c.result)},c.onerror=z=>{x("读取 txt 文件失败")},c.readAsText(A)}catch{x("浏览器不支持文件内容读取")}}),Fe=(A,P=!0)=>{const x=A/1024;if(x<1024)return Math.ceil(x)+(P?" KB":"");{const c=x/1024;return Math.ceil(c)+(P?" MB":"")}},Me=be("useKnowStore",{state:()=>({knowInfo:{},textMessage:!0,answersMessage:!0,LinkMessage:!0}),actions:{setChatData(A){this.knowInfo=A}},persist:{enabled:!0}});export{Se as a,Me as b,Fe as g,Le as r,De as s,Ae as u};
