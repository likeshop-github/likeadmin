import{a as d,G as o,o as r,h as a,i as f,Z as g,u as s,cs as p,c,k as _,ac as h,n as i,aL as y,T as N,p as l,ct as $,j as k,g as x,$ as C}from"./entry.32a45fa5.js";import{_ as I}from"./_plugin-vue_export-helper.c27b6911.js";const u=(e,t="px")=>Object.is(Number(e),NaN)?e:`${e}${t}`;function F(e){if(e.length===0||!e||e=="undefined")return e;const t=e.replace("//","/"),n=t.length;return t[n-1]==="/"?t.slice(0,n-1):t}const S=d({props:{name:{type:String,required:!0},size:{type:[Number,String],default:16},color:{type:String,default:"inherit"}},setup(e){const t=o(()=>`#${e.name}`),n=o(()=>({width:u(e.size),height:u(e.size),color:e.color}));return{symbolId:t,styles:n}}}),P=["xlink:href"];function b(e,t,n,m,B,L){return r(),a("svg",{"aria-hidden":"true",style:g(e.styles)},[f("use",{"xlink:href":e.symbolId,fill:"currentColor"},null,8,P)],4)}const z=I(S,[["render",b]]),E={key:1,class:"local-icon"},R=d({__name:"index",props:{name:{type:String,default:""},size:{type:[String,Number],default:"14px"},color:{type:String,default:"inherit"}},setup(e){const t=e;return(n,m)=>(r(),a(C,null,[e.name.includes(s(p))?(r(),c(s(N),i(y({key:0},t)),{default:_(()=>[(r(),c(h(e.name)))]),_:1},16)):l("",!0),e.name.includes(s($))?(r(),a("span",E,[k(z,i(x(t)),null,16)])):l("",!0)],64))}});export{R as _,F as g};
