import{_ as O,w as V,J as P,K as z,I as S,L as G}from"./element-plus.994d4e5d.js";import{M as h,f as I,b as J}from"./index.13f7fcd7.js";import{e as K,a as W}from"./menu.48f8cb75.js";import{u as j}from"./usePaging.01638e85.js";import{_ as q}from"./edit.vue_vue_type_script_setup_true_lang.aaa41529.js";import{d as N,s as x,r as H,ah as Q,o as i,c as v,W as n,O as t,a as T,P as c,M as r,u as d,T as E,U as p,n as D}from"./@vue.af680e04.js";import"./@vueuse.8c34eaea.js";import"./@element-plus.034bf3af.js";import"./lodash-es.70b90cb6.js";import"./dayjs.f7363e4f.js";import"./axios.3af9fe4b.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.873faf2b.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.e12a99db.js";import"./color.cb877126.js";import"./clone.3b081931.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.fd69c5bf.js";import"./vue-clipboard3.9796a14d.js";import"./clipboard.2bdac801.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./index.b0b02ed8.js";const X={class:"menu-lists"},Y=p(" \u65B0\u589E "),Z=p(" \u5C55\u5F00/\u6298\u53E0 "),ee={key:0},te={key:1},oe={key:2},ae={class:"flex"},ie=p("\u6B63\u5E38"),ne=p("\u505C\u7528"),se=p(" \u65B0\u589E "),le=p(" \u7F16\u8F91 "),ue=p(" \u5220\u9664 "),re=N({name:"menu"}),Ke=N({...re,setup(de){const b=x(),m=x();let y=!1;const _=H(!1),{pager:k,getLists:C}=j({fetchFun:W,params:{page_type:0}}),g=async a=>{var o,s;_.value=!0,await D(),a&&((o=m.value)==null||o.setFormData({pid:a})),(s=m.value)==null||s.open("add")},$=async a=>{var o,s;_.value=!0,await D(),(o=m.value)==null||o.open("edit"),(s=m.value)==null||s.getDetail(a)},R=async a=>{await I.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await K({id:a}),C()},A=()=>{y=!y,w(k.lists,y)},w=(a,o=!0)=>{var s;for(const l in a)(s=b.value)==null||s.toggleRowExpansion(a[l],o),a[l].children&&w(a[l].children,o)};return C(),(a,o)=>{const s=J,l=V,u=P,B=O,L=z,U=S,f=Q("perms"),M=G;return i(),v("div",X,[n(U,{class:"!border-none",shadow:"never"},{default:t(()=>[T("div",null,[c((i(),r(l,{type:"primary",onClick:o[0]||(o[0]=e=>g())},{icon:t(()=>[n(s,{name:"el-icon-Plus"})]),default:t(()=>[Y]),_:1})),[[f,["auth.menu/add"]]]),n(l,{onClick:A},{default:t(()=>[Z]),_:1})]),c((i(),r(L,{ref_key:"tableRef",ref:b,class:"mt-4",size:"large",data:d(k).lists,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[n(u,{label:"\u83DC\u5355\u540D\u79F0",prop:"name","min-width":"150","show-overflow-tooltip":""}),n(u,{label:"\u7C7B\u578B",prop:"type","min-width":"80"},{default:t(({row:e})=>[e.type==d(h).CATALOGUE?(i(),v("div",ee,"\u76EE\u5F55")):e.type==d(h).MENU?(i(),v("div",te,"\u83DC\u5355")):e.type==d(h).BUTTON?(i(),v("div",oe,"\u6309\u94AE")):E("",!0)]),_:1}),n(u,{label:"\u56FE\u6807",prop:"icon","min-width":"80"},{default:t(({row:e})=>[T("div",ae,[n(s,{name:e.icon,size:20},null,8,["name"])])]),_:1}),n(u,{label:"\u6743\u9650\u6807\u8BC6",prop:"perms","min-width":"150","show-overflow-tooltip":""}),n(u,{label:"\u72B6\u6001",prop:"is_disable","min-width":"100"},{default:t(({row:e})=>[e.is_disable==0?(i(),r(B,{key:0},{default:t(()=>[ie]),_:1})):(i(),r(B,{key:1,type:"danger"},{default:t(()=>[ne]),_:1}))]),_:1}),n(u,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),n(u,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"180"}),n(u,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:e})=>[e.type!==d(h).BUTTON?c((i(),r(l,{key:0,type:"primary",link:"",onClick:F=>g(e.id)},{default:t(()=>[se]),_:2},1032,["onClick"])),[[f,["auth.menu/add"]]]):E("",!0),c((i(),r(l,{type:"primary",link:"",onClick:F=>$(e)},{default:t(()=>[le]),_:2},1032,["onClick"])),[[f,["auth.menu/edit"]]]),c((i(),r(l,{type:"danger",link:"",onClick:F=>R(e.id)},{default:t(()=>[ue]),_:2},1032,["onClick"])),[[f,["auth.menu/delete"]]])]),_:1})]),_:1},8,["data"])),[[M,d(k).loading]])]),_:1}),_.value?(i(),r(q,{key:0,ref_key:"editRef",ref:m,onSuccess:d(C),onClose:o[1]||(o[1]=e=>_.value=!1)},null,8,["onSuccess"])):E("",!0)])}}});export{Ke as default};