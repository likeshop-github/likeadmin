import{F as w}from"./index.319a77f2.js";import{g as x,h as y,i as E}from"./organization.836dafbb.js";import{_ as A,d as U,r as f,k as R,l as I,N,m as S,n as q,e as r,z as J,o as v,c as T,a as e,w as l,i as a,y as z,g as $,O as M,aX as O,aV as X,h as j,f as G}from"./index.6235ba03.js";const H=i=>(O("data-v-0aec7d72"),i=i(),X(),i),K={class:"post-edit"},L=H(()=>G("div",{class:"muted"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1)),P=j("\u4FDD\u5B58"),Q=U({__name:"edit",setup(i){const c=f(null),{router:D,route:V}=R(),d=I(()=>{var s;return(s=V.query)==null?void 0:s.id}),p=f(!1),{formData:u,rules:C}=N(S({formData:{name:"",code:"",sort:0,remark:"",status:0},rules:{code:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",trigger:["blur"]}]}})),b=()=>{!d.value||(p.value=!0,x({id:d.value}).then(s=>{u.value=s}).finally(()=>{p.value=!1}))},g=()=>{var s;(s=c.value)==null||s.validate(t=>{if(!t)return;(d.value?y({...u.value,id:d.value}):E(u.value)).then(()=>{setTimeout(()=>D.go(-1),500)})})};return q(()=>{b()}),(s,t)=>{const _=r("el-page-header"),F=r("el-card"),m=r("el-input"),n=r("el-form-item"),B=r("el-switch"),h=r("el-button"),k=J("loading");return v(),T("div",K,[e(F,{shadow:"never"},{default:l(()=>[e(_,{content:a(d)?"\u7F16\u8F91\u5C97\u4F4D":"\u65B0\u589E\u5C97\u4F4D",onBack:t[0]||(t[0]=o=>s.$router.back())},null,8,["content"])]),_:1}),z((v(),$(F,{shadow:"never",class:"m-t-15"},{default:l(()=>[e(a(M),{ref_key:"formRefs",ref:c,rules:a(C),class:"ls-form",model:a(u),"label-width":"150px"},{default:l(()=>[e(n,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name"},{default:l(()=>[e(m,{modelValue:a(u).name,"onUpdate:modelValue":t[1]||(t[1]=o=>a(u).name=o),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code"},{default:l(()=>[e(m,{modelValue:a(u).code,"onUpdate:modelValue":t[2]||(t[2]=o=>a(u).code=o),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u6392\u5E8F",prop:"sort"},{default:l(()=>[e(m,{modelValue:a(u).sort,"onUpdate:modelValue":t[3]||(t[3]=o=>a(u).sort=o),placeholder:"\u8BF7\u8F93\u5165\u6392\u5E8F",type:"number"},null,8,["modelValue"]),L]),_:1}),e(n,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[e(m,{modelValue:a(u).remark,"onUpdate:modelValue":t[4]||(t[4]=o=>a(u).remark=o),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6}},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5C97\u4F4D\u72B6\u6001"},{default:l(()=>[e(B,{modelValue:a(u).status,"onUpdate:modelValue":t[5]||(t[5]=o=>a(u).status=o),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])]),_:1})),[[k,p.value]]),e(w,null,{default:l(()=>[e(h,{type:"primary",onClick:g},{default:l(()=>[P]),_:1})]),_:1})])}}});var ee=A(Q,[["__scopeId","data-v-0aec7d72"]]);export{ee as default};
