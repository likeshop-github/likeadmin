import{bj as u,cu as c}from"./index.c3aea19d.js";var v={beforeMount(n,t){let e=null,a;const l=()=>t.value&&t.value(),o=()=>{Date.now()-a<100&&l(),clearInterval(e),e=null};u(n,"mousedown",r=>{r.button===0&&(a=Date.now(),c(document,"mouseup",o),clearInterval(e),e=setInterval(l,100))})}};export{v};