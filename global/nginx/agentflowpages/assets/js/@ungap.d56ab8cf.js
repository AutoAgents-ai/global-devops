const y=typeof self=="object"?self:globalThis,h=(c,o)=>{const s=(n,f)=>(c.set(f,n),n),a=n=>{if(c.has(n))return c.get(n);const[f,t]=o[n];switch(f){case 0:case-1:return s(t,n);case 1:{const r=s([],n);for(const e of t)r.push(a(e));return r}case 2:{const r=s({},n);for(const[e,I]of t)r[a(e)]=a(I);return r}case 3:return s(new Date(t),n);case 4:{const{source:r,flags:e}=t;return s(new RegExp(r,e),n)}case 5:{const r=s(new Map,n);for(const[e,I]of t)r.set(a(e),a(I));return r}case 6:{const r=s(new Set,n);for(const e of t)r.add(a(e));return r}case 7:{const{name:r,message:e}=t;return s(new y[r](e),n)}case 8:return s(BigInt(t),n);case"BigInt":return s(Object(BigInt(t)),n)}return s(new y[f](t),n)};return a},A=c=>h(new Map,c)(0),R="",{toString:S}={},{keys:w}=Object,T=c=>{const o=typeof c;if(o!=="object"||!c)return[0,o];const s=S.call(c).slice(8,-1);switch(s){case"Array":return[1,R];case"Object":return[2,R];case"Date":return[3,R];case"RegExp":return[4,R];case"Map":return[5,R];case"Set":return[6,R]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},p=([c,o])=>c===0&&(o==="function"||o==="symbol"),P=(c,o,s,a)=>{const n=(t,r)=>{const e=a.push(t)-1;return s.set(r,e),e},f=t=>{if(s.has(t))return s.get(t);let[r,e]=T(t);switch(r){case 0:{let i=t;switch(e){case"bigint":r=8,i=t.toString();break;case"function":case"symbol":if(c)throw new TypeError("unable to serialize "+e);i=null;break;case"undefined":return n([-1],t)}return n([r,i],t)}case 1:{if(e)return n([e,[...t]],t);const i=[],E=n([r,i],t);for(const u of t)i.push(f(u));return E}case 2:{if(e)switch(e){case"BigInt":return n([e,t.toString()],t);case"Boolean":case"Number":case"String":return n([e,t.valueOf()],t)}if(o&&"toJSON"in t)return f(t.toJSON());const i=[],E=n([r,i],t);for(const u of w(t))(c||!p(T(t[u])))&&i.push([f(u),f(t[u])]);return E}case 3:return n([r,t.toISOString()],t);case 4:{const{source:i,flags:E}=t;return n([r,{source:i,flags:E}],t)}case 5:{const i=[],E=n([r,i],t);for(const[u,g]of t)(c||!(p(T(u))||p(T(g))))&&i.push([f(u),f(g)]);return E}case 6:{const i=[],E=n([r,i],t);for(const u of t)(c||!p(T(u)))&&i.push(f(u));return E}}const{message:I}=t;return n([r,{name:e,message:I}],t)};return f},O=(c,{json:o,lossy:s}={})=>{const a=[];return P(!(o||s),!!o,new Map,a)(c),a},b=typeof structuredClone=="function"?(c,o)=>o&&("json"in o||"lossy"in o)?A(O(c,o)):structuredClone(c):(c,o)=>A(O(c,o));export{b as s};
