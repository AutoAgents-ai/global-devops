import{g as d,c as A}from"./lowlight.f7f4c8b1.js";import{v as w}from"./unist-util-visit.85fff0b7.js";import{t as p}from"./hast-util-to-text.1fa61daa.js";const v={};function C(c){const e=c||v,n=e.aliases,i=e.detect||!1,m=e.languages||d,f=e.plainText,a=e.prefix,y=e.subset;let o="hljs";const h=A(m);if(n&&h.registerAlias(n),a){const g=a.indexOf("-");o=g>-1?a.slice(0,g):a}return function(g,N){w(g,"element",function(s,b,r){if(s.tagName!=="code"||!r||r.type!=="element"||r.tagName!=="pre")return;const t=T(s);if(t===!1||!t&&!i||t&&f&&f.includes(t))return;Array.isArray(s.properties.className)||(s.properties.className=[]),s.properties.className.includes(o)||s.properties.className.unshift(o);let l;try{l=t?h.highlight(t,p(r),{prefix:a}):h.highlightAuto(p(r),{prefix:a,subset:y})}catch(x){const u=x;if(t&&/Unknown language/.test(u.message)){N.message("Cannot highlight as `"+t+"`, it’s not registered",{ancestors:[r,s],cause:u,place:s.position,ruleId:"missing-language",source:"rehype-highlight"});return}throw u}!t&&l.data&&l.data.language&&s.properties.className.push("language-"+l.data.language),l.children.length>0&&(s.children=l.children)})}}function T(c){const e=c.properties.className;let n=-1;if(Array.isArray(e))for(;++n<e.length;){const i=String(e[n]);if(i==="no-highlight"||i==="nohighlight")return!1;if(i.slice(0,5)==="lang-")return i.slice(5);if(i.slice(0,9)==="language-")return i.slice(9)}}export{C as r};