import"./index.cd92a33e.js";import{$ as p,t as f}from"./@vue.e8706010.js";function d(a){const s=p({}),e=Object.keys(a),i=e.map(o=>{const t=a[o];return s[o]=[],()=>t.api(f(t.params)||{})}),r=async()=>{(await Promise.allSettled(i.map(t=>t()))).forEach((t,u)=>{const n=e[u];if(t.status=="fulfilled"){const{transformData:c}=a[n],l=c?c(t.value):t.value;s[n]=l}})};return r(),{optionsData:s,refresh:r}}export{d as u};