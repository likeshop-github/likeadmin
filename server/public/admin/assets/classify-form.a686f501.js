import{d as T,e as E,f as N}from"./information.87d2c61c.js";import{P as R}from"./index.a594d598.js";import{d as U,r as f,m as z,e as n,o as m,g as p,w as l,h as _,t as x,j as C,a as s,f as O}from"./index.6235ba03.js";const P=O("div",{class:"muted"},"\u9ED8\u8BA4\u6392\u5E8F\u4E3A0\uFF0C\u6570\u5B57\u8D8A\u5927\uFF0C\u6392\u5E8F\u8D8A\u9760\u524D",-1),q=U({__name:"classify-form",props:{type:{default:"add"},id:{default:""},btnText:{default:""}},emits:["refresh"],setup(o,{emit:c}){const i=o,r=f(),t=f({name:"",sort:0,is_show:""}),g=z({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D44\u8BAF\u5206\u7C7B",trigger:"blur"}]}),v=f(null),w=a=>{!a||a.resetFields()},b=()=>{i.id&&A(i.id)},A=async a=>{t.value=await T({id:a})},B=async()=>{await E({...t.value}),c("refresh")},V=async()=>{await N({...t.value,id:i.id}),c("refresh")},h=a=>{!a||a.validate(e=>{if(!e)return!1;i.id?V():B(),v.value.visible=!1})};return(a,e)=>{const y=n("el-button"),F=n("el-input"),d=n("el-form-item"),D=n("el-switch"),k=n("el-form");return m(),p(R,{class:"m-r-10 inline",ref_key:"popupRef",ref:v,async:!0,clickModalClose:!1,title:o.btnText,center:!0,onClose:e[3]||(e[3]=u=>w(r.value)),onOpen:b,onConfirm:e[4]||(e[4]=u=>h(r.value)),width:"40vw"},{trigger:l(()=>[o.type==="primary"?(m(),p(y,{key:0,type:"primary"},{default:l(()=>[_(x(o.btnText),1)]),_:1})):C("",!0),o.type==="text"?(m(),p(y,{key:1,type:"text"},{default:l(()=>[_(x(o.btnText),1)]),_:1})):C("",!0)]),default:l(()=>[s(k,{model:t.value,ref_key:"classifyFormRef",ref:r,class:"classify-form",rules:g,size:"mini","label-width":"90px"},{default:l(()=>[s(d,{label:"\u8D44\u8BAF\u5206\u7C7B\uFF1A",prop:"name"},{default:l(()=>[s(F,{class:"ls-input",modelValue:t.value.name,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value.name=u),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"])]),_:1}),s(d,{label:"\u6392\u5E8F\uFF1A"},{default:l(()=>[s(F,{class:"ls-input",modelValue:t.value.sort,"onUpdate:modelValue":e[1]||(e[1]=u=>t.value.sort=u),placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue"]),P]),_:1}),s(d,{label:"\u72B6\u6001\uFF1A"},{default:l(()=>[s(D,{modelValue:t.value.is_show,"onUpdate:modelValue":e[2]||(e[2]=u=>t.value.is_show=u),"active-text":t.value.is_show?"\u542F\u7528":"\u5173\u95ED","active-value":1,"inactive-value":0},null,8,["modelValue","active-text"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])}}});export{q as default};
