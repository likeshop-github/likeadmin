import{X as L,C as M,w as W,E as $,a as I}from"./element-plus.5649e4ba.js";import{p as T,q as z,b as R}from"./index.c1c37091.js";import{d as U,r as D,s as O,Z as P,b as j,w as q,i as K,o as i,c as r,U as n,L as a,u as b,K as X,T as _,R as Z,a as u,a3 as h,a9 as k,O as A,S as G,n as C}from"./@vue.90bde458.js";import{u as H}from"./@vueuse.c9321399.js";const J={class:"icon-select"},Q={class:"flex justify-between"},Y=u("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),ee=["onClick"],oe={class:"h-[280px]"},se={class:"flex flex-wrap"},te={key:0,class:"flex items-center"},ce=U({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(le,{emit:E}){const p=E,v=D(0),V=[{name:"element\u56FE\u6807",icons:T()},{name:"\u672C\u5730\u56FE\u6807",icons:z()}],d=O(),e=P({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),w=()=>{e.inputFocus=e.popoverVisible=!0},F=()=>{e.inputFocus=!1,e.popoverVisible=e.mouseoverSelect},y=o=>{e.mouseoverSelect=e.popoverVisible=!1,p("update:modelValue",o),p("change",o)},g=()=>{p("update:modelValue",""),p("change","")},S=j(()=>{var l,c;const o=(c=(l=V[v.value])==null?void 0:l.icons)!=null?c:[];if(!e.inputValue)return o;const s=e.inputValue.toLowerCase();return o.filter(m=>{if(m.toLowerCase().indexOf(s)!==-1)return m})}),x=()=>{C(()=>{var s;const o=(s=d.value)==null?void 0:s.$el.offsetWidth;e.popoverWidth=o<300?300:o})};return H(document.body,"click",()=>{e.popoverVisible=!!(e.inputFocus||e.mouseoverSelect)}),q(()=>e.popoverVisible,async o=>{var s,l;await C(),o?(s=d.value)==null||s.focus():(l=d.value)==null||l.blur()}),K(()=>{x()}),(o,s)=>{const l=R,c=W,m=$,B=I,N=L;return i(),r("div",J,[n(N,{trigger:"contextmenu",visible:e.popoverVisible,"onUpdate:visible":s[3]||(s[3]=t=>e.popoverVisible=t),width:e.popoverWidth},{reference:a(()=>[n(b(M),{ref_key:"inputRef",ref:d,modelValue:e.inputValue,"onUpdate:modelValue":s[2]||(s[2]=t=>e.inputValue=t),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",autofocus:!1,disabled:o.disabled,onFocus:w,onBlur:F,clearable:""},{prepend:a(()=>[o.modelValue?(i(),r("div",te,[n(B,{class:"flex-1 w-20",content:o.modelValue,placement:"top"},{default:a(()=>[(i(),X(l,{class:"mr-1",key:o.modelValue,name:o.modelValue,size:16},null,8,["name"]))]),_:1},8,["content"])])):(i(),r(_,{key:1},[Z("\u65E0")],64))]),append:a(()=>[n(c,null,{default:a(()=>[n(l,{name:"el-icon-Close",size:18,onClick:g})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:a(()=>[u("div",{onMouseover:s[0]||(s[0]=h(t=>e.mouseoverSelect=!0,["stop"])),onMouseout:s[1]||(s[1]=h(t=>e.mouseoverSelect=!1,["stop"]))},[u("div",null,[u("div",Q,[Y,u("div",null,[(i(),r(_,null,k(V,(t,f)=>u("span",{key:f,class:A(["cursor-pointer text-sm ml-2",{"text-primary":f==b(v)}]),onClick:ne=>v.value=f},G(t.name),11,ee)),64))])]),u("div",oe,[n(m,null,{default:a(()=>[u("div",se,[(i(!0),r(_,null,k(S.value,t=>(i(),r("div",{key:t,class:"m-1"},[n(c,{onClick:f=>y(t)},{default:a(()=>[n(l,{name:t,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}});export{ce as _};
