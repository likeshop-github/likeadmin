import{_ as me}from"./index.a0887c16.js";import{P as se,x as re,G as pe,H as ie,Z as _e,y as ce,I as Fe,C as be,D as fe,L as Ve,B as ve,Q as Be,R as Ee,M as ye,w as Ae,F as Ce}from"./element-plus.5649e4ba.js";import{d as T,b as G,o as p,c as F,T as A,a9 as D,S as H,u as o,r as K,Z as Q,s as Z,U as e,L as u,j as De,a as d,K as y,R as c,Q as I,n as ge,t as M,w as ke}from"./@vue.90bde458.js";import{f as W,b as we}from"./index.c1c37091.js";import{u as Ue,a as he}from"./vue-router.1051b4fa.js";import{t as qe,g as Re}from"./code.789e26d2.js";import{u as xe}from"./useDictOptions.6cefbc82.js";import{d as $e}from"./dict.fdda4eca.js";import{m as Ie}from"./menu.861ba5fe.js";import{_ as Te}from"./relations-add.vue_vue_type_script_setup_true_lang.1c791442.js";import{l as J}from"./lodash.4558177f.js";import"./lodash-es.151604d4.js";import"./async-validator.fb49d0f5.js";import"./@vueuse.c9321399.js";import"./@element-plus.637a59d4.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./@ctrl.b082b0c1.js";import"./normalize-wheel-es.8aeb3683.js";import"./@popperjs.36402333.js";import"./pinia.8db5076b.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.f76f30bc.js";import"./index.7a026a5d.js";const Ne=T({__name:"index",props:{options:{default:()=>[]},value:{},config:{default:()=>({label:"name",value:"value"})}},setup(N){const b=N,q=G(()=>b.value!==null&&typeof b.value<"u"?Array.isArray(b.value)?b.value:String(b.value).split(","):[]),g=G(()=>b.options.filter(v=>q.value.includes(v[b.config.value])));return(v,R)=>(p(),F("div",null,[(p(!0),F(A,null,D(o(g),(t,C)=>(p(),F("span",{key:C},H(C!=0?"\u3001":"")+H(t[v.config.label]),1))),128))]))}}),Pe={class:"code-edit"},Se={class:"w-80"},Oe={class:"w-80"},Le={class:"w-80"},je={class:"w-80"},ze=d("div",{class:"form-tips"},"\u6307\u5B9A\u6811\u8868\u7684\u4E3B\u8981ID\uFF0C\u4E00\u822C\u4E3A\u4E3B\u952E",-1),Ge=d("div",{class:"form-tips"},"\u6307\u5B9A\u6811\u8868\u7684\u7236ID\uFF0C\u6BD4\u5982\uFF1Aparent_id",-1),He={class:"w-80"},Ke=d("div",{class:"form-tips"},[d("div",null," \u4F8B\uFF1A\u586B\u5199test,\u751F\u6210\u6587\u4EF6\u63CF\u8FF0\u4E3Atest\u63A7\u5236\u5668(test\u903B\u8F91/test\u6A21\u578B) ")],-1),Qe={class:"w-80"},Ze=d("div",{class:"form-tips"},"\u751F\u6210\u6587\u4EF6\u6240\u5728\u6A21\u5757",-1),Me={class:"w-80"},We=d("div",{class:"form-tips"},[d("div",null," \u4F8B\uFF1A\u586B\u5199test,\u5219\u5728app/\u6A21\u5757\u540D/controller/test\u4E0B\u751F\u6210\u63A7\u5236\u5668 ")],-1),Je={class:"w-80"},Xe=d("div",{class:"form-tips"}," \u81EA\u52A8\u6784\u5EFA\uFF1A\u81EA\u52A8\u6267\u884C\u751F\u6210\u83DC\u5355sql\u3002\u624B\u52A8\u6DFB\u52A0\uFF1A\u81EA\u884C\u6DFB\u52A0\u83DC\u5355\u3002 ",-1),Ye={class:"mt-4"},el=T({name:"tableEdit"}),Sl=T({...el,setup(N){const b=Ue(),q=he(),g=K("column"),v=K(!1),R=[{name:"\u4E00\u5BF9\u4E00",value:"has_one"},{name:"\u4E00\u5BF9\u591A",value:"has_many"}],t=Q({id:"",table_name:"",table_comment:"",author:"",remark:"",template_type:0,generate_type:0,module_name:"",class_dir:"",class_comment:"",table_column:[],menu:{pid:0,name:"",type:0},tree:{tree_id:0,tree_pid:0,tree_name:0},delete:{name:"",type:0},relations:[]});let C=0;const P=Z(),x=Z(),S=Q({table_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0"}],table_comment:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0"}],module_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D"}],generate_type:[{required:!0,trigger:"change"}],template_type:[{required:!0,trigger:"change"}],["menu.pid"]:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355"}],["menu.name"]:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"}],["delete.type"]:[{required:!0,trigger:"change"}],["delete.name"]:[{required:!0,message:"\u8BF7\u9009\u62E9\u5220\u9664\u5B57\u6BB5"}]}),O=async(i,a,B)=>{var f,_;v.value=!0,await ge(),a&&B!==void 0&&((f=x.value)==null||f.setFormData(a),C=B),(_=x.value)==null||_.open(i)},X=i=>{const a=J.exports.cloneDeep(M(i));t.relations.push(a)},Y=async i=>{const a=J.exports.cloneDeep(M(i));console.log(C),t.relations.splice(C,1,a)},ee=i=>{t.relations.splice(i,1)},le=async()=>{const i=await qe({id:b.query.id});Object.keys(t).forEach(a=>{t[a]=i[a]}),ke(()=>t.generate_type,a=>{a==1&&W.confirm("\u751F\u6210\u5230\u6A21\u5757\u65B9\u5F0F\u5982\u9047\u540C\u540D\u6587\u4EF6\u4F1A\u8986\u76D6\u65E7\u6587\u4EF6\uFF0C\u786E\u5B9A\u8981\u9009\u62E9\u6B64\u65B9\u5F0F\u5417\uFF1F").catch(()=>{t.generate_type=0})})},{optionsData:L}=xe({dict_type:{api:$e},menu:{api:Ie,transformData(i){const a={id:0,name:"\u9876\u7EA7",children:[]};return a.children=i,[a]}}}),ue=async()=>{var i,a;try{await((i=P.value)==null?void 0:i.validate()),await Re(t),q.back()}catch(B){for(const f in B)Object.keys(S).includes(f)&&W.msgError((a=B[f][0])==null?void 0:a.message)}};return le(),(i,a)=>{const B=se,f=Fe,_=be,s=fe,w=re,r=Ve,k=ve,m=Be,E=Ee,j=ye,V=pe,U=ie,ae=_e,te=we,h=Ae,z=Ne,oe=ce,ne=Ce,de=me;return p(),F("div",Pe,[e(f,{class:"!border-none",shadow:"never"},{default:u(()=>[e(B,{content:"\u7F16\u8F91\u6570\u636E\u8868",onBack:a[0]||(a[0]=l=>i.$router.back())})]),_:1}),e(f,{class:"mt-4 !border-none",shadow:"never"},{default:u(()=>[e(ne,{ref_key:"formRef",ref:P,class:"ls-form",model:o(t),"label-width":"100px",rules:o(S)},{default:u(()=>[e(oe,{modelValue:o(g),"onUpdate:modelValue":a[20]||(a[20]=l=>De(g)?g.value=l:null)},{default:u(()=>[e(w,{label:"\u57FA\u7840\u4FE1\u606F",name:"base"},{default:u(()=>[e(s,{label:"\u8868\u540D\u79F0",prop:"table_name"},{default:u(()=>[d("div",Se,[e(_,{modelValue:o(t).table_name,"onUpdate:modelValue":a[1]||(a[1]=l=>o(t).table_name=l),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u8868\u63CF\u8FF0",prop:"table_comment"},{default:u(()=>[d("div",Oe,[e(_,{modelValue:o(t).table_comment,"onUpdate:modelValue":a[2]||(a[2]=l=>o(t).table_comment=l),placeholder:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u4F5C\u8005"},{default:u(()=>[d("div",Le,[e(_,{modelValue:o(t).author,"onUpdate:modelValue":a[3]||(a[3]=l=>o(t).author=l),clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u5907\u6CE8"},{default:u(()=>[d("div",je,[e(_,{modelValue:o(t).remark,"onUpdate:modelValue":a[4]||(a[4]=l=>o(t).remark=l),class:"w-full",type:"textarea",autosize:{minRows:4,maxRows:4},maxlength:"200","show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1})]),_:1}),e(w,{label:"\u5B57\u6BB5\u7BA1\u7406",name:"column"},{default:u(()=>[e(j,{data:o(t).table_column},{default:u(()=>[e(r,{label:"\u5B57\u6BB5\u5217\u540D",prop:"column_name"}),e(r,{label:"\u5B57\u6BB5\u63CF\u8FF0",prop:"column_comment","min-width":"120"},{default:u(({row:l})=>[e(_,{modelValue:l.column_comment,"onUpdate:modelValue":n=>l.column_comment=n,clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u7269\u7406\u7C7B\u578B",prop:"column_type"}),e(r,{label:"\u5FC5\u586B",width:"80"},{default:u(({row:l})=>[e(k,{modelValue:l.is_required,"onUpdate:modelValue":n=>l.is_required=n,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u63D2\u5165",width:"80"},{default:u(({row:l})=>[e(k,{modelValue:l.is_insert,"onUpdate:modelValue":n=>l.is_insert=n,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u7F16\u8F91",width:"80"},{default:u(({row:l})=>[e(k,{modelValue:l.is_update,"onUpdate:modelValue":n=>l.is_update=n,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u5217\u8868",width:"80"},{default:u(({row:l})=>[e(k,{modelValue:l.is_lists,"onUpdate:modelValue":n=>l.is_lists=n,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u67E5\u8BE2",width:"80"},{default:u(({row:l})=>[e(k,{modelValue:l.is_query,"onUpdate:modelValue":n=>l.is_query=n,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u67E5\u8BE2\u65B9\u5F0F"},{default:u(({row:l})=>[e(E,{modelValue:l.query_type,"onUpdate:modelValue":n=>l.query_type=n},{default:u(()=>[e(m,{label:"=",value:"="}),e(m,{label:"!=",value:"!="}),e(m,{label:">",value:">"}),e(m,{label:">=",value:">="}),e(m,{label:"<",value:"<"}),e(m,{label:"<=",value:"<="}),e(m,{label:"LIKE",value:"like"}),e(m,{label:"BETWEEN",value:"between"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u663E\u793A\u7C7B\u578B","min-width":"120"},{default:u(({row:l})=>[e(E,{modelValue:l.view_type,"onUpdate:modelValue":n=>l.view_type=n},{default:u(()=>[e(m,{label:"\u6587\u672C\u6846",value:"input"}),e(m,{label:"\u6587\u672C\u57DF",value:"textarea"}),e(m,{label:"\u4E0B\u62C9\u6846",value:"select"}),e(m,{label:"\u5355\u9009\u6846",value:"radio"}),e(m,{label:"\u590D\u9009\u6846",value:"checkbox"}),e(m,{label:"\u65E5\u671F\u63A7\u4EF6",value:"datetime"}),e(m,{label:"\u56FE\u7247\u9009\u62E9\u63A7\u4EF6",value:"imageSelect"}),e(m,{label:"\u5BCC\u6587\u672C\u63A7\u4EF6",value:"editor"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(r,{label:"\u5B57\u5178\u7C7B\u578B","min-width":"120"},{default:u(({row:l})=>[e(E,{modelValue:l.dict_type,"onUpdate:modelValue":n=>l.dict_type=n,clearable:"",disabled:!(l.view_type=="select"||l.view_type=="radio"||l.view_type=="checkbox"),placeholder:"\u5B57\u5178\u7C7B\u578B"},{default:u(()=>[(p(!0),F(A,null,D(o(L).dict_type,(n,$)=>(p(),y(m,{key:$,label:n.name,value:n.type,disabled:!n.status},null,8,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),_:1},8,["data"])]),_:1}),e(w,{label:"\u751F\u6210\u914D\u7F6E",name:"config"},{default:u(()=>[e(s,{label:"\u6A21\u677F\u7C7B\u578B",prop:"template_type"},{default:u(()=>[e(U,{modelValue:o(t).template_type,"onUpdate:modelValue":a[5]||(a[5]=l=>o(t).template_type=l)},{default:u(()=>[e(V,{label:0},{default:u(()=>[c("\u5355\u8868\uFF08curd\uFF09")]),_:1}),e(V,{label:1},{default:u(()=>[c("\u6811\u8868\uFF08curd\uFF09")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u5220\u9664\u7C7B\u578B",prop:"delete.type"},{default:u(()=>[e(U,{modelValue:o(t).delete.type,"onUpdate:modelValue":a[6]||(a[6]=l=>o(t).delete.type=l)},{default:u(()=>[e(V,{label:0},{default:u(()=>[c("\u7269\u7406\u5220\u9664")]),_:1}),e(V,{label:1},{default:u(()=>[c("\u8F6F\u5220\u9664")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(t).delete.type==1?(p(),y(s,{key:0,label:"\u5220\u9664\u5B57\u6BB5",prop:"delete.name"},{default:u(()=>[e(E,{class:"w-80",modelValue:o(t).delete.name,"onUpdate:modelValue":a[7]||(a[7]=l=>o(t).delete.name=l),clearable:""},{default:u(()=>[(p(!0),F(A,null,D(o(t).table_column,l=>(p(),y(m,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})):I("",!0),o(t).template_type==1?(p(),F(A,{key:1},[e(s,{label:"\u6811\u8868ID",prop:"treePrimary"},{default:u(()=>[d("div",null,[e(E,{class:"w-80",modelValue:o(t).tree.tree_id,"onUpdate:modelValue":a[8]||(a[8]=l=>o(t).tree.tree_id=l),clearable:""},{default:u(()=>[(p(!0),F(A,null,D(o(t).table_column,l=>(p(),y(m,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),ze])]),_:1}),e(s,{label:"\u6811\u8868\u7236ID",prop:"treeParent"},{default:u(()=>[d("div",null,[e(E,{class:"w-80",modelValue:o(t).tree.tree_pid,"onUpdate:modelValue":a[9]||(a[9]=l=>o(t).tree.tree_pid=l),clearable:""},{default:u(()=>[(p(!0),F(A,null,D(o(t).table_column,l=>(p(),y(m,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),Ge])]),_:1}),e(s,{label:"\u6811\u540D\u79F0",prop:"treeName"},{default:u(()=>[e(E,{class:"w-80",modelValue:o(t).tree.tree_name,"onUpdate:modelValue":a[10]||(a[10]=l=>o(t).tree.tree_name=l),clearable:""},{default:u(()=>[(p(!0),F(A,null,D(o(t).table_column,l=>(p(),y(m,{key:l.id,value:l.column_name,label:`${l.column_name}\uFF1A${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)):I("",!0),e(s,{label:"\u7C7B\u63CF\u8FF0"},{default:u(()=>[d("div",He,[d("div",null,[e(_,{modelValue:o(t).class_comment,"onUpdate:modelValue":a[11]||(a[11]=l=>o(t).class_comment=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u63CF\u8FF0",clearable:""},null,8,["modelValue"])]),Ke])]),_:1}),e(s,{label:"\u751F\u6210\u65B9\u5F0F",prop:"generate_type"},{default:u(()=>[e(U,{modelValue:o(t).generate_type,"onUpdate:modelValue":a[12]||(a[12]=l=>o(t).generate_type=l)},{default:u(()=>[e(V,{label:0},{default:u(()=>[c("\u538B\u7F29\u5305\u4E0B\u8F7D")]),_:1}),e(V,{label:1},{default:u(()=>[c("\u751F\u6210\u5230\u6A21\u5757")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(s,{label:"\u6A21\u5757\u540D",prop:"module_name"},{default:u(()=>[d("div",Qe,[e(_,{modelValue:o(t).module_name,"onUpdate:modelValue":a[13]||(a[13]=l=>o(t).module_name=l),placeholder:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D",clearable:""},null,8,["modelValue"]),Ze])]),_:1}),e(s,{label:"\u7C7B\u76EE\u5F55"},{default:u(()=>[d("div",Me,[d("div",null,[e(_,{modelValue:o(t).class_dir,"onUpdate:modelValue":a[14]||(a[14]=l=>o(t).class_dir=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u4EF6\u6240\u5728\u76EE\u5F55",clearable:""},null,8,["modelValue"])]),We])]),_:1}),e(s,{label:"\u7236\u7EA7\u83DC\u5355",prop:"menu.pid"},{default:u(()=>[e(ae,{class:"w-80",modelValue:o(t).menu.pid,"onUpdate:modelValue":a[15]||(a[15]=l=>o(t).menu.pid=l),data:o(L).menu,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":"",placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),e(s,{label:"\u83DC\u5355\u540D\u79F0",prop:"menu.name"},{default:u(()=>[d("div",Je,[e(_,{modelValue:o(t).menu.name,"onUpdate:modelValue":a[16]||(a[16]=l=>o(t).menu.name=l),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",clearable:""},null,8,["modelValue"])])]),_:1}),e(s,{label:"\u83DC\u5355\u6784\u5EFA",prop:"menu.type",required:""},{default:u(()=>[d("div",null,[e(U,{modelValue:o(t).menu.type,"onUpdate:modelValue":a[17]||(a[17]=l=>o(t).menu.type=l)},{default:u(()=>[e(V,{label:1},{default:u(()=>[c("\u81EA\u52A8\u6784\u5EFA")]),_:1}),e(V,{label:0},{default:u(()=>[c("\u624B\u52A8\u6DFB\u52A0")]),_:1})]),_:1},8,["modelValue"]),Xe])]),_:1})]),_:1}),e(w,{label:"\u5173\u8054\u914D\u7F6E",name:"relations"},{default:u(()=>[e(h,{type:"primary",onClick:a[18]||(a[18]=l=>O("add"))},{icon:u(()=>[e(te,{name:"el-icon-Plus"})]),default:u(()=>[c(" \u65B0\u589E\u5173\u8054 ")]),_:1}),d("div",Ye,[e(j,{data:o(t).relations,size:"mini"},{default:u(()=>[e(r,{prop:"type",label:"\u5173\u8054\u7C7B\u578B"},{default:u(({row:l})=>[e(z,{value:l.type,options:R},null,8,["value"])]),_:1}),e(r,{prop:"name",label:"\u5173\u8054\u540D\u79F0"}),e(r,{prop:"model",label:"\u5173\u8054\u6A21\u578B"}),e(r,{prop:"local_key",label:"\u5173\u8054\u952E"},{default:u(({row:l})=>[e(z,{value:l.local_key,options:o(t).table_column,config:{label:"column_comment",value:"column_name"}},null,8,["value","options"])]),_:1}),e(r,{prop:"foreign_key",label:"\u5916\u952E"}),e(r,{label:"\u64CD\u4F5C"},{default:u(({row:l,$index:n})=>[e(h,{link:"",type:"primary",onClick:$=>O("edit",l,n)},{default:u(()=>[c(" \u7F16\u8F91 ")]),_:2},1032,["onClick"]),e(h,{link:"",type:"danger",onClick:$=>ee(n)},{default:u(()=>[c(" \u5220\u9664 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(v)?(p(),y(Te,{key:0,column:o(t).table_column,types:R,ref_key:"editRef",ref:x,onAdd:X,onEdit:Y,onClose:a[19]||(a[19]=l=>v.value=!1)},null,8,["column"])):I("",!0)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model","rules"])]),_:1}),e(de,null,{default:u(()=>[e(h,{type:"primary",onClick:ue},{default:u(()=>[c("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{Sl as default};
