import{w as l}from"./element-plus.5649e4ba.js";import{a as u}from"./vue-router.1051b4fa.js";import{d,r as _,Y as v,o as n,c as f,a as r,H as B,S as s,K as x,L as y,R as g,u as E,Q as h}from"./@vue.90bde458.js";import{d as k}from"./index.c1c37091.js";import"./lodash-es.151604d4.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.c9321399.js";import"./@element-plus.637a59d4.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./@ctrl.b082b0c1.js";import"./normalize-wheel-es.8aeb3683.js";import"./@popperjs.36402333.js";import"./lodash.4558177f.js";import"./pinia.8db5076b.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.f76f30bc.js";const w={class:"error"},S={class:"error-code"},C={class:"text-lg text-tx-secondary mt-7 mb-7"},D=d({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const m=t;let o=null;const e=_(5),i=u();return m.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),i.go(-1)):e.value--},1e3)),v(()=>{o&&clearInterval(o)}),(p,a)=>{const c=l;return n(),f("div",w,[r("div",null,[B(p.$slots,"content",{},()=>[r("div",S,s(t.code),1)],!0),r("div",C,s(t.title),1),t.showBtn?(n(),x(c,{key:0,type:"primary",onClick:a[0]||(a[0]=I=>E(i).go(-1))},{default:y(()=>[g(s(e.value)+" \u79D2\u540E\u8FD4\u56DE\u4E0A\u4E00\u9875 ",1)]),_:1})):h("",!0)])])}}});const at=k(D,[["__scopeId","data-v-a47523cc"]]);export{at as default};
