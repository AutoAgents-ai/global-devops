import{d}from"./decode-named-character-reference.29ded5ae.js";function o(r,c){const e=Number.parseInt(r,c);return e<9||e===11||e>13&&e<32||e>126&&e<160||e>55295&&e<57344||e>64975&&e<65008||(e&65535)===65535||(e&65535)===65534||e>1114111?"�":String.fromCodePoint(e)}const a=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function s(r){return r.replace(a,i)}function i(r,c,e){if(c)return c;if(e.charCodeAt(0)===35){const t=e.charCodeAt(1),n=t===120||t===88;return o(e.slice(n?2:1),n?16:10)}return d(e)||r}export{s as d};
