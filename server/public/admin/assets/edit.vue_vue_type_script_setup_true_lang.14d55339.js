import{Y as J,x as O,t as Y,E as I,L as Z,y as H,J as Q,K as X,W as ee,A as ue}from"./element-plus.32724f3c.js";import{g as le,h as oe,b as te,M as _}from"./index.fb421b84.js";import{d as q,r as $,s as M,$ as W,e as P,w as se,n as S,j as ae,o as r,c as B,U as l,L as o,u as m,a as t,K as f,V as N,a8 as L,P as ne,T as de,Z as R,S as v,R as C}from"./@vue.67e62321.js";import{c as ie}from"./@vueuse.4608b35b.js";import{m as re,a as pe,b as me}from"./menu.3276c024.js";import{P as ce}from"./index.685915dd.js";const Fe={class:"icon-select"},_e={class:"flex justify-between"},Ee=t("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),fe=["onClick"],ve={class:"h-[280px]"},Ce={class:"flex flex-wrap"},be={class:"flex w-4"},Ve=v("\u65E0"),Be=q({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(h,{emit:b}){const V=$(0),D=[{name:"element\u56FE\u6807",icons:le()},{name:"\u672C\u5730\u56FE\u6807",icons:oe()}],E=M(),s=W({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),k=()=>{s.inputFocus=s.popoverVisible=!0},u=()=>{s.inputFocus=!1,s.popoverVisible=s.mouseoverSelect},g=p=>{s.mouseoverSelect=s.popoverVisible=!1,b("update:modelValue",p),b("change",p)},w=()=>{b("update:modelValue",""),b("change","")},U=P(()=>{var F,i;const p=(i=(F=D[V.value])==null?void 0:F.icons)!=null?i:[];if(!s.inputValue)return p;const d=s.inputValue.toLowerCase();return p.filter(e=>{if(e.toLowerCase().indexOf(d)!==-1)return e})}),T=()=>{S(()=>{var d;const p=(d=E.value)==null?void 0:d.$el.offsetWidth;s.popoverWidth=p<300?300:p})};return ie(document.body,"click",()=>{s.popoverVisible=!!(s.inputFocus||s.mouseoverSelect)}),se(()=>s.popoverVisible,async p=>{var d,F;await S(),p?(d=E.value)==null||d.focus():(F=E.value)==null||F.blur()}),ae(()=>{T()}),(p,d)=>{const F=te,i=Y,e=I,x=J;return r(),B("div",Fe,[l(x,{visible:s.popoverVisible,"onUpdate:visible":d[3]||(d[3]=a=>s.popoverVisible=a),width:s.popoverWidth},{reference:o(()=>[l(m(O),{ref_key:"inputRef",ref:E,modelValue:s.inputValue,"onUpdate:modelValue":d[2]||(d[2]=a=>s.inputValue=a),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",disabled:h.disabled,onFocus:k,onBlur:u},{prepend:o(()=>[t("div",be,[h.modelValue?(r(),f(F,{key:h.modelValue,name:h.modelValue},null,8,["name"])):(r(),B(N,{key:1},[Ve],64))])]),append:o(()=>[l(i,null,{default:o(()=>[l(F,{name:"el-icon-Close",size:18,onClick:w})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:o(()=>[t("div",{onMouseover:d[0]||(d[0]=R(a=>s.mouseoverSelect=!0,["stop"])),onMouseout:d[1]||(d[1]=R(a=>s.mouseoverSelect=!1,["stop"]))},[t("div",null,[t("div",_e,[Ee,t("div",null,[(r(),B(N,null,L(D,(a,c)=>t("span",{key:c,class:ne(["cursor-pointer text-sm ml-2",{"text-primary":c==V.value}]),onClick:A=>V.value=c},de(a.name),11,fe)),64))])]),t("div",ve,[l(e,null,{default:o(()=>[t("div",Ce,[(r(!0),B(N,null,L(m(U),a=>(r(),B("div",{key:a,class:"m-1"},[l(i,{onClick:c=>g(a)},{default:o(()=>[l(F,{name:a,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}}),he={class:"edit-popup"},De={class:"h-[400px]"},ye=v("\u76EE\u5F55"),we=v("\u83DC\u5355"),Ae=v("\u6309\u94AE"),ke={class:"w-80"},ge={class:"w-80"},Ue={class:"w-80"},Te=t("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u8DEF\u7531\u5730\u5740\uFF0C\u5982\uFF1A`user`\uFF0C\u5982\u5916\u7F51\u5730\u5740\u9700\u5185\u94FE\u8BBF\u95EE\u5219\u4EE5`http(s)://`\u5F00\u5934 ",-1),xe={class:"w-80"},Ne=t("div",{class:"form-tips"}," \u8BBF\u95EE\u7684\u7EC4\u4EF6\u8DEF\u5F84\uFF0C\u5982\uFF1A`user/setting`\uFF0C\u9ED8\u8BA4\u5728`views`\u76EE\u5F55\u4E0B ",-1),$e={class:"w-80"},Me=t("div",{class:"form-tips"}," \u5C06\u4F5C\u4E3Aserver\u7AEFAPI\u9A8C\u6743\u4F7F\u7528\uFF0C\u5982`auth.admin/user`\uFF0C\u8BF7\u8C28\u614E\u4FEE\u6539 ",-1),Se={class:"w-80"},Le=t("div",{class:"form-tips"},' \u8BBF\u95EE\u8DEF\u7531\u7684\u9ED8\u8BA4\u4F20\u9012\u53C2\u6570\uFF0C\u5982\uFF1A`{"id": 1, "name": "admin"}`\u6216`id=1&name=admin` ',-1),Re=v("\u663E\u793A"),Oe=v("\u9690\u85CF"),Ie=t("div",{class:"form-tips"}," \u9009\u62E9\u9690\u85CF\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4F46\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE ",-1),qe=v("\u6B63\u5E38"),We=v("\u505C\u7528"),Pe=t("div",{class:"form-tips"}," \u9009\u62E9\u505C\u7528\u5219\u8DEF\u7531\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u4FA7\u8FB9\u680F\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u8BBF\u95EE ",-1),Ze=q({__name:"edit",emits:["success","close"],setup(h,{expose:b,emit:V}){const D=M(),E=M(),s=$("add"),k=P(()=>s.value=="edit"?"\u7F16\u8F91\u83DC\u5355":"\u65B0\u589E\u83DC\u5355"),u=W({id:"",pid:0,type:_.CATALOGUE,icon:"",name:"",sort:1,paths:"",perms:"",component:"",selected:"",params:"",is_cache:0,is_show:1,is_disable:0}),g={pid:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:["blur","change"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}],paths:[{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u7531\u5730\u5740",trigger:"blur"}],component:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u5730\u5740",trigger:"blur"}]},w=$([]),U=async()=>{const i=await re({page_type:0}),e={id:0,name:"\u9876\u7EA7",children:[]};e.children=i.lists,w.value.push(e)},T=async()=>{var i,e;await((i=D.value)==null?void 0:i.validate()),s.value=="edit"?await pe(u):await me(u),(e=E.value)==null||e.close(),V("success")},p=(i="add")=>{var e;s.value=i,(e=E.value)==null||e.open()},d=i=>{for(const e in u)i[e]!=null&&i[e]!=null&&(u[e]=i[e])},F=()=>{V("close")};return U(),b({open:p,setFormData:d}),(i,e)=>{const x=Z,a=H,c=Q,A=X,y=O,G=Be,z=ee,j=ue,K=I;return r(),B("div",he,[l(ce,{ref_key:"popupRef",ref:E,title:m(k),async:!0,width:"600px",clickModalClose:!0,onConfirm:T,onClose:F},{default:o(()=>[t("div",De,[l(K,null,{default:o(()=>[l(j,{ref_key:"formRef",ref:D,model:u,"label-width":"100px",rules:g},{default:o(()=>[l(a,{label:"\u7236\u7EA7\u83DC\u5355",prop:"pid"},{default:o(()=>[l(x,{class:"w-80",modelValue:u.pid,"onUpdate:modelValue":e[0]||(e[0]=n=>u.pid=n),data:w.value,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),l(a,{label:"\u83DC\u5355\u7C7B\u578B",prop:"type",required:""},{default:o(()=>[l(A,{modelValue:u.type,"onUpdate:modelValue":e[1]||(e[1]=n=>u.type=n)},{default:o(()=>[l(c,{label:m(_).CATALOGUE},{default:o(()=>[ye]),_:1},8,["label"]),l(c,{label:m(_).MENU},{default:o(()=>[we]),_:1},8,["label"]),l(c,{label:m(_).BUTTON},{default:o(()=>[Ae]),_:1},8,["label"])]),_:1},8,["modelValue"])]),_:1}),l(a,{label:"\u83DC\u5355\u540D\u79F0",prop:"name"},{default:o(()=>[t("div",ke,[l(y,{modelValue:u.name,"onUpdate:modelValue":e[2]||(e[2]=n=>u.name=n),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),u.type!=m(_).BUTTON?(r(),f(a,{key:0,label:"\u83DC\u5355\u56FE\u6807",prop:"icon"},{default:o(()=>[t("div",ge,[l(G,{modelValue:u.icon,"onUpdate:modelValue":e[3]||(e[3]=n=>u.icon=n)},null,8,["modelValue"])])]),_:1})):C("",!0),l(a,{label:"\u83DC\u5355\u6392\u5E8F",prop:"sort"},{default:o(()=>[l(z,{modelValue:u.sort,"onUpdate:modelValue":e[4]||(e[4]=n=>u.sort=n)},null,8,["modelValue"])]),_:1}),u.type!=m(_).BUTTON?(r(),f(a,{key:1,label:"\u8DEF\u7531\u8DEF\u5F84",prop:"paths"},{default:o(()=>[t("div",Ue,[t("div",null,[l(y,{modelValue:u.paths,"onUpdate:modelValue":e[5]||(e[5]=n=>u.paths=n),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u8DEF\u5F84"},null,8,["modelValue"])]),Te])]),_:1})):C("",!0),u.type==m(_).MENU?(r(),f(a,{key:2,label:"\u7EC4\u4EF6\u8DEF\u5F84",prop:"component"},{default:o(()=>[t("div",xe,[t("div",null,[l(y,{modelValue:u.component,"onUpdate:modelValue":e[6]||(e[6]=n=>u.component=n),placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u8DEF\u5F84"},null,8,["modelValue"])]),Ne])]),_:1})):C("",!0),u.type!=m(_).CATALOGUE?(r(),f(a,{key:3,label:"\u6743\u9650\u5B57\u7B26",prop:"perms"},{default:o(()=>[t("div",$e,[t("div",null,[l(y,{modelValue:u.perms,"onUpdate:modelValue":e[7]||(e[7]=n=>u.perms=n),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u5B57\u7B26"},null,8,["modelValue"])]),Me])]),_:1})):C("",!0),u.type==m(_).MENU?(r(),f(a,{key:4,label:"\u8DEF\u7531\u53C2\u6570",prop:"params"},{default:o(()=>[t("div",Se,[t("div",null,[l(y,{modelValue:u.params,"onUpdate:modelValue":e[8]||(e[8]=n=>u.params=n),placeholder:"\u8BF7\u8F93\u5165\u8DEF\u7531\u53C2\u6570"},null,8,["modelValue"])]),Le])]),_:1})):C("",!0),u.type!=m(_).BUTTON?(r(),f(a,{key:5,label:"\u662F\u5426\u663E\u793A",prop:"is_show",required:""},{default:o(()=>[t("div",null,[l(A,{modelValue:u.is_show,"onUpdate:modelValue":e[9]||(e[9]=n=>u.is_show=n)},{default:o(()=>[l(c,{label:1},{default:o(()=>[Re]),_:1}),l(c,{label:0},{default:o(()=>[Oe]),_:1})]),_:1},8,["modelValue"]),Ie])]),_:1})):C("",!0),u.type!=m(_).BUTTON?(r(),f(a,{key:6,label:"\u83DC\u5355\u72B6\u6001",prop:"is_disable",required:""},{default:o(()=>[t("div",null,[l(A,{modelValue:u.is_disable,"onUpdate:modelValue":e[10]||(e[10]=n=>u.is_disable=n)},{default:o(()=>[l(c,{label:0},{default:o(()=>[qe]),_:1}),l(c,{label:1},{default:o(()=>[We]),_:1})]),_:1},8,["modelValue"]),Pe])]),_:1})):C("",!0)]),_:1},8,["model"])]),_:1})])]),_:1},8,["title"])])}}});export{Ze as _};