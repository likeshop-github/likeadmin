import{d as L,v as O,x as $,r as j,m as z,e as a,z as x,o,c as f,a as e,w as t,i as n,f as V,y as h,g as m,E as v,j as G,bW as W,h as s,L as H}from"./index.6235ba03.js";import{n as I,a as J}from"./auth.4c42682d.js";import{u as K}from"./pages.9569697b.js";const Q={class:"menu-lists"},S=s("\u67E5\u8BE2"),X=s("\u6E05\u7A7A\u67E5\u8BE2"),Y=s("\u65B0\u589E"),Z=s("\u5168\u90E8\u5C55\u5F00/\u6298\u53E0"),ee={key:0},te={key:1},le={key:2},ae={class:"flex"},oe=s("\u6B63\u5E38"),ue=s("\u505C\u7528"),ne=s("\u7F16\u8F91"),se=s("\u5220\u9664"),me=L({__name:"index",setup(ie){O();const k=$(),b=j(!1),r=z({page_type:0,name:"",is_disable:""}),{pager:y,requestApi:B,resetPage:A,resetParams:N}=K({callback:J,params:r}),R=async i=>{await I({id:i}),B()},T=()=>{b.value=!b.value,g(y.lists,b.value)},g=(i,d=!0)=>{var p;for(const _ in i)(p=k.value)==null||p.toggleRowExpansion(i[_],d),i[_].children&&g(i[_].children,d)};return B(),(i,d)=>{const p=a("el-input"),_=a("el-form-item"),C=a("el-option"),U=a("el-select"),c=a("el-button"),M=a("el-form"),F=a("el-card"),w=a("router-link"),u=a("el-table-column"),P=H,D=a("el-tag"),E=x("perms"),q=x("loading");return o(),f("div",Q,[e(F,{shadow:"never"},{default:t(()=>[e(M,{ref:"formRef",style:{"margin-bottom":"-16px"},model:r,inline:!0},{default:t(()=>[e(_,{label:"\u83DC\u5355\u540D\u79F0"},{default:t(()=>[e(p,{modelValue:r.name,"onUpdate:modelValue":d[0]||(d[0]=l=>r.name=l),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u83DC\u5355\u72B6\u6001"},{default:t(()=>[e(U,{modelValue:r.is_disable,"onUpdate:modelValue":d[1]||(d[1]=l=>r.is_disable=l),placeholder:"\u8BF7\u9009\u62E9\u83DC\u5355\u72B6\u6001"},{default:t(()=>[e(C,{label:"\u5168\u90E8",value:""}),e(C,{label:"\u6B63\u5E38",value:"0"}),e(C,{label:"\u505C\u7528",value:"1"})]),_:1},8,["modelValue"])]),_:1}),e(_,null,{default:t(()=>[e(c,{type:"primary",onClick:n(A)},{default:t(()=>[S]),_:1},8,["onClick"]),e(c,{onClick:n(N)},{default:t(()=>[X]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(F,{class:"m-t-16",shadow:"never"},{default:t(()=>[V("div",null,[h((o(),m(w,{class:"m-r-10",to:"/permission/menu/edit"},{default:t(()=>[e(c,{type:"primary"},{default:t(()=>[Y]),_:1})]),_:1})),[[E,["auth.menu/add"]]]),e(c,{onClick:T},{default:t(()=>[Z]),_:1})]),h((o(),m(n(W),{ref_key:"tableRef",ref:k,data:n(y).lists,class:"m-t-16","row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(u,{label:"\u83DC\u5355\u540D\u79F0",prop:"name","min-width":"150"}),e(u,{label:"\u7C7B\u578B",prop:"type","min-width":"80"},{default:t(({row:l})=>[l.type==n(v).CATALOGUE?(o(),f("div",ee,"\u76EE\u5F55")):l.type==n(v).MENU?(o(),f("div",te,"\u83DC\u5355")):l.type==n(v).BUTTON?(o(),f("div",le,"\u6309\u94AE")):G("",!0)]),_:1}),e(u,{label:"\u56FE\u6807",prop:"icon","min-width":"80"},{default:t(({row:l})=>[V("div",ae,[e(P,{name:l.icon},null,8,["name"])])]),_:1}),e(u,{label:"\u6743\u9650\u6807\u8BC6",prop:"perms","min-width":"150"}),e(u,{label:"\u72B6\u6001",prop:"is_disable","min-width":"100"},{default:t(({row:l})=>[l.is_disable==0?(o(),m(D,{key:0},{default:t(()=>[oe]),_:1})):(o(),m(D,{key:1,type:"danger"},{default:t(()=>[ue]),_:1}))]),_:1}),e(u,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(u,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"180"}),e(u,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:t(({row:l})=>[h((o(),m(w,{class:"m-r-10",to:{path:"/permission/menu/edit",query:{id:l.id}}},{default:t(()=>[e(c,{type:"primary",link:""},{default:t(()=>[ne]),_:1})]),_:2},1032,["to"])),[[E,["auth.menu/edit"]]]),h((o(),m(c,{type:"primary",link:"",onClick:de=>R(l.id)},{default:t(()=>[se]),_:2},1032,["onClick"])),[[E,["auth.menu/delete"]]])]),_:1})]),_:1},8,["data"])),[[q,n(y).loading]])]),_:1})])}}});export{me as default};
