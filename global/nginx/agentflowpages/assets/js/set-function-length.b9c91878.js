import{g as p}from"./get-intrinsic.b5ca899c.js";import{d as g}from"./define-data-property.aa14051b.js";import{h as m}from"./has-property-descriptors.e9c6f9e2.js";import{g as v}from"./gopd.f9f19eaa.js";var f=p,a=g,h=m(),n=v,s=f("%TypeError%"),l=f("%Math.floor%"),D=function(t,r){if(typeof t!="function")throw new s("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||l(r)!==r)throw new s("`length` must be a positive 32-bit integer");var u=arguments.length>2&&!!arguments[2],o=!0,i=!0;if("length"in t&&n){var e=n(t,"length");e&&!e.configurable&&(o=!1),e&&!e.writable&&(i=!1)}return(o||i||!u)&&(h?a(t,"length",r,!0,!0):a(t,"length",r)),t};export{D as s};
