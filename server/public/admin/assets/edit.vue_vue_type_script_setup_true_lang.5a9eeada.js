import{$ as I,G as P,H as S,C as $,Z as K,B as H,v as Z,D as j}from"./element-plus.317dd699.js";import{_ as z}from"./picker.vue_vue_type_script_setup_true_lang.1e1ffc48.js";import{a as J,b as Q,c as W,d as X}from"./menu.f91caf30.js";import{n as Y,M as d,o as uu,t as eu}from"./index.cd92a33e.js";import{P as lu}from"./index.3448bf9e.js";import{d as ou,s as y,r as C,e as tu,$ as au,o as p,c as su,U as l,L as o,u as i,K as m,R as F,a,S as c}from"./@vue.e8706010.js";const du={class:"edit-popup"},nu=c("\u76EE\u5F55"),ru=c("\u83DC\u5355"),iu=c("\u6309\u94AE"),pu={class:"flex-1"},mu=a("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934 ",-1),Fu={class:"flex-1"},cu=a("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`user/setting`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B ",-1),_u={class:"flex-1"},Eu=a("div",{class:"form-tips"}," \u8BBF\u95EE\u8BE6\u60C5\u9875\u9762\uFF0C\u7F16\u8F91\u9875\u9762\u65F6\uFF0C\u83DC\u5355\u9AD8\u4EAE\u663E\u793A\uFF0C\u5982`/consumer/lists` ",-1),fu={class:"flex-1"},Bu=a("div",{class:"form-tips"}," \u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`auth.admin/user`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539 ",-1),Cu={class:"flex-1"},Du=a("div",{class:"form-tips"},' \u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin` ',-1),bu=c("\u7F13\u5B58"),Vu=c("\u4E0D\u7F13\u5B58"),Au=a("div",{class:"form-tips"},"\u9009\u62E9\u7F13\u5B58\u5219\u4F1A\u88AB`keep-alive`\u7F13\u5B58",-1),vu=c("\u663E\u793A"),yu=c("\u9690\u85CF"),hu=a("div",{class:"form-tips"}," \u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE ",-1),Uu=c("\u6B63\u5E38"),Tu=c("\u505C\u7528"),gu=a("div",{class:"form-tips"},"\u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE",-1),ku=a("div",{class:"form-tips"},"\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),Lu=ou({__name:"edit",emits:["success","close"],setup(wu,{expose:h,emit:D}){const b=y(),f=y(),B=C("add"),U=tu(()=>B.value=="edit"?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),V=C(Y()),T=(s,u)=>{const n=s?V.value.filter(_=>_.toLowerCase().includes(s.toLowerCase())):V.value;u(n.map(_=>({value:_})))},e=au({id:"",pid:0,type:d.CATALOGUE,icon:"",name:"",sort:0,paths:"",perms:"",component:"",selected:"",params:"",is_cache:0,is_show:1,is_disable:0}),g={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}]},A=C([]),k=async()=>{const s=await J({page_type:0}),u={id:0,name:"\u9876\u7EA7",children:[]};u.children=uu(eu(s.lists).filter(n=>n.type!=d.BUTTON)),A.value.push(u)},w=async()=>{var s,u;await((s=b.value)==null?void 0:s.validate()),B.value=="edit"?await Q(e):await W(e),(u=f.value)==null||u.close(),D("success")},N=(s="add")=>{var u;B.value=s,(u=f.value)==null||u.open()},v=s=>{for(const u in e)s[u]!=null&&s[u]!=null&&(e[u]=s[u])},x=async s=>{const u=await X({id:s.id});v(u)},O=()=>{D("close")};return k(),h({open:N,setFormData:v,getDetail:x}),(s,u)=>{const n=P,_=S,r=$,M=K,E=H,R=z,q=I,L=Z,G=j;return p(),su("div",du,[l(lu,{ref_key:"popupRef",ref:f,title:i(U),async:!0,width:"550px",onConfirm:w,onClose:O},{default:o(()=>[l(G,{ref_key:"formRef",ref:b,model:e,"label-width":"80px",rules:g},{default:o(()=>[l(r,{label:"\u83DC\u5355\u7C7B\u578B",prop:"type",required:""},{default:o(()=>[l(_,{modelValue:e.type,"onUpdate:modelValue":u[0]||(u[0]=t=>e.type=t)},{default:o(()=>[l(n,{label:i(d).CATALOGUE},{default:o(()=>[nu]),_:1},8,["label"]),l(n,{label:i(d).MENU},{default:o(()=>[ru]),_:1},8,["label"]),l(n,{label:i(d).BUTTON},{default:o(()=>[iu]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),l(r,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:o(()=>[l(M,{class:"flex-1",modelValue:e.pid,"onUpdate:modelValue":u[1]||(u[1]=t=>e.pid=t),data:A.value,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),l(r,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:o(()=>[l(E,{modelValue:e.name,"onUpdate:modelValue":u[2]||(u[2]=t=>e.name=t),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),e.type!=i(d).BUTTON?(p(),m(r,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"icon"},{default:o(()=>[l(R,{class:"flex-1",modelValue:e.icon,"onUpdate:modelValue":u[3]||(u[3]=t=>e.icon=t)},null,8,["modelValue"])]),_:1})):F("",!0),e.type!=i(d).BUTTON?(p(),m(r,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:o(()=>[a("div",pu,[l(E,{modelValue:e.paths,"onUpdate:modelValue":u[4]||(u[4]=t=>e.paths=t),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),mu])]),_:1})):F("",!0),e.type==i(d).MENU?(p(),m(r,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:o(()=>[a("div",Fu,[l(q,{class:"w-full",modelValue:e.component,"onUpdate:modelValue":u[5]||(u[5]=t=>e.component=t),"fetch-suggestions":T,clearable:"",placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"]),cu])]),_:1})):F("",!0),e.type==i(d).MENU?(p(),m(r,{key:3,label:"\u9009\u4E2D\u83DC\u5355",prop:"selected"},{default:o(()=>[a("div",_u,[l(E,{modelValue:e.selected,"onUpdate:modelValue":u[6]||(u[6]=t=>e.selected=t),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84",clearable:""},null,8,["modelValue"]),Eu])]),_:1})):F("",!0),e.type!=i(d).CATALOGUE?(p(),m(r,{key:4,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:o(()=>[a("div",fu,[l(E,{modelValue:e.perms,"onUpdate:modelValue":u[7]||(u[7]=t=>e.perms=t),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26",clearable:""},null,8,["modelValue"]),Bu])]),_:1})):F("",!0),e.type==i(d).MENU?(p(),m(r,{key:5,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:o(()=>[a("div",null,[a("div",Cu,[l(E,{modelValue:e.params,"onUpdate:modelValue":u[8]||(u[8]=t=>e.params=t),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570",clearable:""},null,8,["modelValue"])]),Du])]),_:1})):F("",!0),e.type==i(d).MENU?(p(),m(r,{key:6,label:"\u662F\u5426\u7F13\u5B58",prop:"is_cache",required:""},{default:o(()=>[a("div",null,[l(_,{modelValue:e.is_cache,"onUpdate:modelValue":u[9]||(u[9]=t=>e.is_cache=t)},{default:o(()=>[l(n,{label:1},{default:o(()=>[bu]),_:1}),l(n,{label:0},{default:o(()=>[Vu]),_:1})]),_:1},8,["modelValue"]),Au])]),_:1})):F("",!0),e.type!=i(d).BUTTON?(p(),m(r,{key:7,label:"\u662F\u5426\u663E\u793A",prop:"is_show",required:""},{default:o(()=>[a("div",null,[l(_,{modelValue:e.is_show,"onUpdate:modelValue":u[10]||(u[10]=t=>e.is_show=t)},{default:o(()=>[l(n,{label:1},{default:o(()=>[vu]),_:1}),l(n,{label:0},{default:o(()=>[yu]),_:1})]),_:1},8,["modelValue"]),hu])]),_:1})):F("",!0),e.type!=i(d).BUTTON?(p(),m(r,{key:8,label:"\u83DC\u5355\u72B6\u6001",prop:"is_disable",required:""},{default:o(()=>[a("div",null,[l(_,{modelValue:e.is_disable,"onUpdate:modelValue":u[11]||(u[11]=t=>e.is_disable=t)},{default:o(()=>[l(n,{label:0},{default:o(()=>[Uu]),_:1}),l(n,{label:1},{default:o(()=>[Tu]),_:1})]),_:1},8,["modelValue"]),gu])]),_:1})):F("",!0),l(r,{label:"\u83DC\u5355\u6392\u5E8F",prop:"sort"},{default:o(()=>[a("div",null,[l(L,{modelValue:e.sort,"onUpdate:modelValue":u[12]||(u[12]=t=>e.sort=t),min:0,max:9999},null,8,["modelValue"]),ku])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{Lu as _};