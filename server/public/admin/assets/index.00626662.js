import{_ as x,m,p as y}from"./index.f87774a5.js";import{P as V,a as k,u as B}from"./index.4b67b099.js";import{d as $,r as j,o as w,a,a7 as z,b as f,c as g,f as e,w as t,a8 as E,e as b,m as d}from"./vendor.af1b6401.js";const P=$({components:{Pagination:V,Popup:k},setup(){const o=j({id:0,name:"",desc:"",create_time:"",num:0}),{pager:s,requestApi:l}=B({callback:m,params:o}),u=c=>{y({id:c}).then(i=>{console.log("res",i),l()}).catch(i=>{console.log("err",i)})};return w(()=>{l()}),{formData:o,apiRoleLists:m,handleDelete:u,pager:s,requestApi:l}}}),q={class:"role"},A=d("\u65B0\u589E\u89D2\u8272"),N={class:"m-t-15"},R={class:"m-t-15"},I=d("\u7F16\u8F91"),L=d("\u5220\u9664"),M={class:"flex row-right"};function T(o,s,l,u,c,i){const p=a("el-button"),_=a("router-link"),n=a("el-table-column"),h=a("popup"),v=a("el-table"),C=a("pagination"),D=a("el-card"),F=z("loading");return f(),g("div",q,[e(D,{shadow:"never"},{default:t(()=>[e(_,{to:"/permission/role/edit"},{default:t(()=>[e(p,{type:"primary",size:"small"},{default:t(()=>[A]),_:1})]),_:1}),E((f(),g("div",N,[b("div",R,[e(v,{data:o.pager.lists,size:"medium"},{default:t(()=>[e(n,{prop:"id",label:"ID"}),e(n,{prop:"name",label:"\u540D\u79F0"}),e(n,{prop:"desc",label:"\u5907\u6CE8"}),e(n,{prop:"",label:"\u6743\u9650"}),e(n,{prop:"create_time",label:"\u521B\u5EFA\u65F6\u95F4"}),e(n,{prop:"",label:"\u64CD\u4F5C"},{default:t(({row:r})=>[e(_,{class:"m-r-10",to:{path:"/permission/role/edit",query:{id:r.id}}},{default:t(()=>[e(p,{type:"text",size:"mini"},{default:t(()=>[I]),_:1})]),_:2},1032,["to"]),e(h,{class:"m-r-10 inline",onConfirm:U=>o.handleDelete(r.id)},{trigger:t(()=>[e(p,{type:"text",size:"mini"},{default:t(()=>[L]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),b("div",M,[e(C,{modelValue:o.pager,"onUpdate:modelValue":s[0]||(s[0]=r=>o.pager=r),onChange:o.requestApi,layout:"total, prev, pager, next, jumper"},null,8,["modelValue","onChange"])])])),[[F,o.pager.loading]])]),_:1})])}var K=x(P,[["render",T]]);export{K as default};