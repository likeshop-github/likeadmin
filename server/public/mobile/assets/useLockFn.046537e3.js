import{z as a}from"./index.a23f7206.js";function t(t){const n=a(!1);return{isLock:n,lockFn:async(...a)=>{if(!n.value){n.value=!0;try{const o=await t(...a);return n.value=!1,o}catch(o){throw n.value=!1,o}}}}}export{t as u};
