import{c as p}from"./hast-util-is-element.29e512ec.js";import{f as h}from"./unist-util-find-after.afeeaa0c.js";const f=/\n/g,d=/[\t ]+/g,u=p("br"),g=p(E),A=p("p"),m=p("tr"),y=p(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",v,N]),x=p(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function F(e,c={}){const r="children"in e?e.children:[],s=x(e),i=k(e,{whitespace:c.whitespace||"normal",breakBefore:!1,breakAfter:!1}),n=[];(e.type==="text"||e.type==="comment")&&n.push(...w(e,{whitespace:i,breakBefore:!0,breakAfter:!0}));let t=-1;for(;++t<r.length;)n.push(...b(r[t],e,{whitespace:i,breakBefore:t?void 0:s,breakAfter:t<r.length-1?u(r[t+1]):s}));const a=[];let l;for(t=-1;++t<n.length;){const o=n[t];typeof o=="number"?l!==void 0&&o>l&&(l=o):o&&(l!==void 0&&l>-1&&a.push(`
`.repeat(l)||" "),l=-1,a.push(o))}return a.join("")}function b(e,c,r){return e.type==="element"?C(e,c,r):e.type==="text"?r.whitespace==="normal"?w(e,r):B(e):[]}function C(e,c,r){const s=k(e,r),i=e.children||[];let n=-1,t=[];if(y(e))return t;let a,l;for(u(e)||m(e)&&h(c,e,m)?l=`
`:A(e)?(a=2,l=2):x(e)&&(a=1,l=1);++n<i.length;)t=t.concat(b(i[n],e,{whitespace:s,breakBefore:n?void 0:a,breakAfter:n<i.length-1?u(i[n+1]):l}));return g(e)&&h(c,e,g)&&t.push("	"),a&&t.unshift(a),l&&t.push(l),t}function w(e,c){const r=String(e.value),s=[],i=[];let n=0;for(;n<=r.length;){f.lastIndex=n;const l=f.exec(r),o=l&&"index"in l?l.index:r.length;s.push(T(r.slice(n,o).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),n===0?c.breakBefore:!0,o===r.length?c.breakAfter:!0)),n=o+1}let t=-1,a;for(;++t<s.length;)s[t].charCodeAt(s[t].length-1)===8203||t<s.length-1&&s[t+1].charCodeAt(0)===8203?(i.push(s[t]),a=void 0):s[t]?(typeof a=="number"&&i.push(a),i.push(s[t]),a=0):(t===0||t===s.length-1)&&i.push(0);return i}function B(e){return[String(e.value)]}function T(e,c,r){const s=[];let i=0,n;for(;i<e.length;){d.lastIndex=i;const t=d.exec(e);n=t?t.index:e.length,!i&&!n&&t&&!c&&s.push(""),i!==n&&s.push(e.slice(i,n)),i=t?n+t[0].length:n}return i!==n&&!r&&s.push(""),s.join(" ")}function k(e,c){if(e.type==="element"){const r=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return r.wrap?"pre-wrap":"pre";case"td":case"th":return r.noWrap?"nowrap":c.whitespace;case"textarea":return"pre-wrap"}}return c.whitespace}function v(e){return!!(e.properties||{}).hidden}function E(e){return e.tagName==="td"||e.tagName==="th"}function N(e){return e.tagName==="dialog"&&!(e.properties||{}).open}export{F as t};
