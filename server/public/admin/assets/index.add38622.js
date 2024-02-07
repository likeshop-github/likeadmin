import{_ as z,C as O,D as Z,Q as j,R as G,w as H,F as J,I as W,L as X,M as Y,N as ee}from"./element-plus.5649e4ba.js";import{f as te,b as ae}from"./index.c1c37091.js";import{d as T,s as F,r as h,Z as oe,i as le,n as g,am as ne,o as p,c as se,U as e,L as t,u as s,aa as ie,R as i,a as ue,M as E,K as c,S as re,Q as N}from"./@vue.90bde458.js";import{_ as pe}from"./edit.vue_vue_type_script_setup_true_lang.99c52531.js";import{e as de,f as me}from"./department.dd95412c.js";import"./lodash-es.151604d4.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.c9321399.js";import"./@element-plus.637a59d4.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./@ctrl.b082b0c1.js";import"./normalize-wheel-es.8aeb3683.js";import"./@popperjs.36402333.js";import"./lodash.4558177f.js";import"./vue-router.1051b4fa.js";import"./pinia.8db5076b.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.f76f30bc.js";import"./index.7a026a5d.js";import"./useDictOptions.6cefbc82.js";const ce={class:"department"},_e=T({name:"department"}),We=T({..._e,setup(fe){const x=F(),_=F(),B=F();let k=!1;const C=h(!1),b=h([]),d=oe({status:"",name:""}),v=h(!1),m=async()=>{C.value=!0,b.value=await de(d),C.value=!1},S=()=>{var o;(o=B.value)==null||o.resetFields(),m()},D=async o=>{var a,n;v.value=!0,await g(),o&&((a=_.value)==null||a.setFormData({pid:o})),(n=_.value)==null||n.open("add")},I=async o=>{var a,n;v.value=!0,await g(),(a=_.value)==null||a.open("edit"),(n=_.value)==null||n.getDetail(o)},K=async o=>{await te.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await me({id:o}),m()},R=()=>{k=!k,V(b.value,k)},V=(o,a=!0)=>{var n;for(const u in o)(n=x.value)==null||n.toggleRowExpansion(o[u],a),o[u].children&&V(o[u].children,a)};return le(async()=>{await m(),g(()=>{R()})}),(o,a)=>{const n=O,u=Z,w=j,M=G,r=H,P=J,$=W,U=ae,f=X,A=z,Q=Y,y=ne("perms"),q=ee;return p(),se("div",ce,[e($,{class:"!border-none",shadow:"never"},{default:t(()=>[e(P,{ref_key:"formRef",ref:B,class:"mb-[-16px]",model:s(d),inline:!0},{default:t(()=>[e(u,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name"},{default:t(()=>[e(n,{class:"w-[280px]",modelValue:s(d).name,"onUpdate:modelValue":a[0]||(a[0]=l=>s(d).name=l),clearable:"",onKeyup:ie(m,["enter"])},null,8,["modelValue"])]),_:1}),e(u,{label:"\u90E8\u95E8\u72B6\u6001",prop:"status"},{default:t(()=>[e(M,{class:"w-[280px]",modelValue:s(d).status,"onUpdate:modelValue":a[1]||(a[1]=l=>s(d).status=l)},{default:t(()=>[e(w,{label:"\u5168\u90E8",value:""}),e(w,{label:"\u6B63\u5E38",value:"1"}),e(w,{label:"\u505C\u7528",value:"0"})]),_:1},8,["modelValue"])]),_:1}),e(u,null,{default:t(()=>[e(r,{type:"primary",onClick:m},{default:t(()=>[i("\u67E5\u8BE2")]),_:1}),e(r,{onClick:S},{default:t(()=>[i("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e($,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[ue("div",null,[E((p(),c(r,{type:"primary",onClick:a[2]||(a[2]=l=>D())},{icon:t(()=>[e(U,{name:"el-icon-Plus"})]),default:t(()=>[i(" \u65B0\u589E ")]),_:1})),[[y,["dept.dept/add"]]]),e(r,{onClick:R},{default:t(()=>[i(" \u5C55\u5F00/\u6298\u53E0 ")]),_:1})]),E((p(),c(Q,{ref_key:"tableRef",ref:x,class:"mt-4",size:"large",data:s(b),"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:t(()=>[e(f,{label:"\u90E8\u95E8\u540D\u79F0",prop:"name","min-width":"150","show-overflow-tooltip":""}),e(f,{label:"\u90E8\u95E8\u72B6\u6001",prop:"status","min-width":"100"},{default:t(({row:l})=>[e(A,{class:"ml-2",type:l.status?"":"danger"},{default:t(()=>[i(re(l.status_desc),1)]),_:2},1032,["type"])]),_:1}),e(f,{label:"\u6392\u5E8F",prop:"sort","min-width":"100"}),e(f,{label:"\u66F4\u65B0\u65F6\u95F4",prop:"update_time","min-width":"180"}),e(f,{label:"\u64CD\u4F5C",width:"160",fixed:"right"},{default:t(({row:l})=>[E((p(),c(r,{type:"primary",link:"",onClick:L=>D(l.id)},{default:t(()=>[i(" \u65B0\u589E ")]),_:2},1032,["onClick"])),[[y,["dept.dept/add"]]]),E((p(),c(r,{type:"primary",link:"",onClick:L=>I(l)},{default:t(()=>[i(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[y,["dept.dept/edit"]]]),l.pid!==0?E((p(),c(r,{key:0,type:"danger",link:"",onClick:L=>K(l.id)},{default:t(()=>[i(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[y,["dept.dept/delete"]]]):N("",!0)]),_:1})]),_:1},8,["data"])),[[q,s(C)]])]),_:1}),s(v)?(p(),c(pe,{key:0,ref_key:"editRef",ref:_,onSuccess:m,onClose:a[3]||(a[3]=l=>v.value=!1)},null,512)):N("",!0)])}}});export{We as default};
