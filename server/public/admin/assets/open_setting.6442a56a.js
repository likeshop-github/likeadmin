import{_ as w}from"./index.a0887c16.js";import{K as C,I as b,C as V,D as y,F as k,w as x}from"./element-plus.5649e4ba.js";import{r as F}from"./index.c1c37091.js";import{d as f,Z as I,s as S,am as R,o as d,c as q,U as e,L as u,a,u as n,M as N,K as U,R as K}from"./@vue.90bde458.js";import"./lodash-es.151604d4.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.c9321399.js";import"./@element-plus.637a59d4.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./@ctrl.b082b0c1.js";import"./normalize-wheel-es.8aeb3683.js";import"./@popperjs.36402333.js";import"./lodash.4558177f.js";import"./vue-router.1051b4fa.js";import"./pinia.8db5076b.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.f76f30bc.js";function O(s){return F.post({url:"/channel.open_setting/setConfig",params:s})}function L(){return F.get({url:"/channel.open_setting/getConfig"})}const M=a("div",{class:"font-medium mb-7"},"\u7F51\u7AD9\u5E94\u7528",-1),T={class:"w-80"},Z={class:"w-80"},j=f({name:"wxDevConfig"}),ve=f({...j,setup(s){const t=I({app_id:"",app_secret:""}),i=S(),E={app_id:[{required:!0,message:"\u8BF7\u8F93\u5165AppID",trigger:["blur","change"]}],app_secret:[{required:!0,message:"\u8BF7\u8F93\u5165AppSecret",trigger:["blur","change"]}]},l=async()=>{const r=await L();for(const o in t)t[o]=r[o]},g=async()=>{var r;await((r=i.value)==null?void 0:r.validate()),await O(t),l()};return l(),(r,o)=>{const D=C,m=b,c=V,_=y,A=k,B=x,v=w,h=R("perms");return d(),q("div",null,[e(m,{class:"!border-none",shadow:"never"},{default:u(()=>[e(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u586B\u5199\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5F00\u53D1\u914D\u7F6E\uFF0C\u8BF7\u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u521B\u5EFA\u5E94\u7528\u5E76\u5B8C\u6210\u8BA4\u8BC1\uFF1B\u7F51\u7AD9\u5E94\u7528\u914D\u7F6E\u4E3B\u8981\u7528\u4E8E\u7F51\u7AD9\u5FAE\u4FE1\u767B\u5F55\u548C\u5FAE\u4FE1\u652F\u4ED8",closable:!1,"show-icon":""})]),_:1}),e(A,{ref_key:"formRef",ref:i,model:n(t),rules:E,"label-width":"160px"},{default:u(()=>[e(m,{class:"!border-none mt-4",shadow:"never"},{default:u(()=>[M,e(_,{label:"AppID",prop:"app_id"},{default:u(()=>[a("div",T,[e(c,{modelValue:n(t).app_id,"onUpdate:modelValue":o[0]||(o[0]=p=>n(t).app_id=p),placeholder:"\u8BF7\u8F93\u5165AppID"},null,8,["modelValue"])])]),_:1}),e(_,{label:"AppSecret",prop:"app_secret"},{default:u(()=>[a("div",null,[a("div",Z,[e(c,{modelValue:n(t).app_secret,"onUpdate:modelValue":o[1]||(o[1]=p=>n(t).app_secret=p),placeholder:"\u8BF7\u8F93\u5165AppSecret"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1},8,["model"]),N((d(),U(v,null,{default:u(()=>[e(B,{type:"primary",onClick:g},{default:u(()=>[K("\u4FDD\u5B58")]),_:1})]),_:1})),[[h,["channel.open_setting/setConfig"]]])])}}});export{ve as default};
