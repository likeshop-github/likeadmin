System.register(["./index-legacy.932142c8.js","./element-plus-legacy.9a978554.js","./vue-router-legacy.4ee22123.js","./code-legacy.ebe33e2d.js","./index-legacy.bb301f21.js","./useDictOptions-legacy.07b6ef59.js","./dict-legacy.9ef93c55.js","./menu-legacy.7d6c9a85.js","./@vue-legacy.6b85f8d1.js","./@vueuse-legacy.157488cf.js","./@element-plus-legacy.d952503a.js","./lodash-es-legacy.55fbc42a.js","./dayjs-legacy.79633238.js","./axios-legacy.770d9bb0.js","./async-validator-legacy.36fe4908.js","./@ctrl-legacy.c91dabf1.js","./@popperjs-legacy.e05acee0.js","./escape-html-legacy.ff6604b3.js","./normalize-wheel-es-legacy.b0eca4cb.js","./lodash-legacy.ed0945d2.js","./pinia-legacy.98b0b201.js","./vue-demi-legacy.ade83891.js","./css-color-function-legacy.b6dd1ba0.js","./color-legacy.b068fdf4.js","./clone-legacy.2819e742.js","./color-convert-legacy.24fd1954.js","./color-string-legacy.f1460f94.js","./color-name-legacy.592a2748.js","./nprogress-legacy.124f3b37.js","./vue-clipboard3-legacy.c012a06d.js","./clipboard-legacy.4032b320.js","./echarts-legacy.4a09bb08.js","./zrender-legacy.f9b1c945.js","./highlight.js-legacy.1a13e67a.js","./@highlightjs-legacy.5de22af8.js"],(function(e){"use strict";var l,a,d,t,u,o,m,n,r,s,c,i,p,b,_,f,y,g,V,v,w,h,j,U,x,k,q,E,O,C,D,R,z,B,I,K,N,S,W,F;return{setters:[e=>{l=e._},e=>{a=e.N,d=e.x,t=e.O,u=e.P,o=e.Z,m=e.y,n=e.I,r=e.C,s=e.D,c=e.J,i=e.B,p=e.Q,b=e.R,_=e.K,f=e.F,y=e.w},e=>{g=e.u,V=e.a},e=>{v=e.t,w=e.g},e=>{h=e.f},e=>{j=e.u},e=>{U=e.d},e=>{x=e.m},e=>{k=e.d,q=e.r,E=e.a1,O=e.s,C=e.o,D=e.c,R=e.W,z=e.O,B=e.a,I=e.X,K=e.a9,N=e.M,S=e.u,W=e.U,F=e.w},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const J={class:"code-edit"},L={class:"w-80"},M={class:"w-80"},P={class:"w-80"},Q={class:"w-80"},T=W("单表（curd）"),X=W("压缩包下载"),Z=W("生成到模块"),$={class:"w-80"},A=B("div",{class:"form-tips"},"生成文件所在模块",-1),G={class:"w-80"},H=B("div",{class:"form-tips"},[B("div",null,"生成文件所在目录名,不填则在模块对应文件夹内生成。"),B("div",null," 例：填写test，则控制器xxxControlle文件生成在app/模块名/controller/test文件夹下。 "),B("div",null," 不填时，xxxController生成在app/模块名/controller文件夹下。 ")],-1),Y={class:"w-80"},ee=B("div",{class:"form-tips"},[B("div",null,"生成文件描述。"),B("div",null," 例：填写用户，生成控制器名/逻辑/模型等，文件内描述为用户控制器/用户逻辑/用户模型 ")],-1),le={class:"w-80"},ae=W("自动构建"),de=W("手动添加"),te=B("div",{class:"form-tips"}," 自动构建：自动执行生成菜单sql。手动添加：自行添加菜单。 ",-1),ue=W("保存"),oe=k({name:"tableEdit"});e("default",k({...oe,setup(e){const k=g(),W=V(),oe=q("column"),me=E({id:"",table_name:"",table_comment:"",author:"",remark:"",template_type:0,generate_type:0,module_name:"",class_dir:"",class_comment:"",table_column:[],menu:{pid:0,name:"",type:0}}),ne=O(),re=E({table_name:[{required:!0,message:"请输入表名称",trigger:"blur"}],table_comment:[{required:!0,message:"请输入表描述",trigger:"blur"}],module_name:[{required:!0,message:"请输入模块名",trigger:"blur"}],generate_type:[{required:!0,trigger:"change"}],template_type:[{required:!0,trigger:"change"}],"menu.pid":[{required:!0,message:"请选择父级菜单",trigger:"blur"}],"menu.name":[{required:!0,message:"请输入菜单名称",trigger:"blur"}]}),{optionsData:se}=j({dict_type:{api:U},menu:{api:x,transformData(e){const l={id:0,name:"顶级",children:[]};return l.children=e,[l]}}}),ce=async()=>{try{await(ne.value?.validate()),await w(me),W.back()}catch(e){for(const l in e)Object.keys(re).includes(l)&&h.msgError(e[l][0]?.message)}};return(async()=>{const e=await v({id:k.query.id});Object.keys(me).forEach((l=>{me[l]=e[l]})),F((()=>me.generate_type),(e=>{1==e&&h.confirm("生成到模块方式如遇同名文件会覆盖旧文件，确定要选择此方式吗？").catch((()=>{me.generate_type=0}))}))})(),(e,g)=>{const V=a,v=n,w=r,h=s,j=d,U=c,x=i,k=p,q=b,E=_,O=t,W=u,F=o,ie=m,pe=f,be=y,_e=l;return C(),D("div",J,[R(v,{class:"!border-none",shadow:"never"},{default:z((()=>[R(V,{content:"编辑数据表",onBack:g[0]||(g[0]=l=>e.$router.back())})])),_:1}),R(v,{class:"mt-4 !border-none",shadow:"never"},{default:z((()=>[R(pe,{ref_key:"formRef",ref:ne,class:"ls-form",model:me,"label-width":"100px",rules:re},{default:z((()=>[R(ie,{modelValue:oe.value,"onUpdate:modelValue":g[13]||(g[13]=e=>oe.value=e)},{default:z((()=>[R(j,{label:"基础信息",name:"base"},{default:z((()=>[R(h,{label:"表名称",prop:"table_name"},{default:z((()=>[B("div",L,[R(w,{modelValue:me.table_name,"onUpdate:modelValue":g[1]||(g[1]=e=>me.table_name=e),placeholder:"请输入表名称",clearable:""},null,8,["modelValue"])])])),_:1}),R(h,{label:"表描述",prop:"table_comment"},{default:z((()=>[B("div",M,[R(w,{modelValue:me.table_comment,"onUpdate:modelValue":g[2]||(g[2]=e=>me.table_comment=e),placeholder:"请输入表描述",clearable:""},null,8,["modelValue"])])])),_:1}),R(h,{label:"作者"},{default:z((()=>[B("div",P,[R(w,{modelValue:me.author,"onUpdate:modelValue":g[3]||(g[3]=e=>me.author=e),clearable:""},null,8,["modelValue"])])])),_:1}),R(h,{label:"备注"},{default:z((()=>[B("div",Q,[R(w,{modelValue:me.remark,"onUpdate:modelValue":g[4]||(g[4]=e=>me.remark=e),class:"w-full",type:"textarea",autosize:{minRows:4,maxRows:4},maxlength:"200","show-word-limit":"",clearable:""},null,8,["modelValue"])])])),_:1})])),_:1}),R(j,{label:"字段管理",name:"column"},{default:z((()=>[R(E,{data:me.table_column},{default:z((()=>[R(U,{label:"字段列名",prop:"column_name"}),R(U,{label:"字段描述",prop:"column_comment","min-width":"120"},{default:z((({row:e})=>[R(w,{modelValue:e.column_comment,"onUpdate:modelValue":l=>e.column_comment=l,clearable:""},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"物理类型",prop:"column_type"}),R(U,{label:"必填",width:"80"},{default:z((({row:e})=>[R(x,{modelValue:e.is_required,"onUpdate:modelValue":l=>e.is_required=l,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"插入",width:"80"},{default:z((({row:e})=>[R(x,{modelValue:e.is_insert,"onUpdate:modelValue":l=>e.is_insert=l,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"编辑",width:"80"},{default:z((({row:e})=>[R(x,{modelValue:e.is_update,"onUpdate:modelValue":l=>e.is_update=l,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"列表",width:"80"},{default:z((({row:e})=>[R(x,{modelValue:e.is_lists,"onUpdate:modelValue":l=>e.is_lists=l,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"查询",width:"80"},{default:z((({row:e})=>[R(x,{modelValue:e.is_query,"onUpdate:modelValue":l=>e.is_query=l,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"查询方式"},{default:z((({row:e})=>[R(q,{modelValue:e.query_type,"onUpdate:modelValue":l=>e.query_type=l},{default:z((()=>[R(k,{label:"=",value:"="}),R(k,{label:"!=",value:"!="}),R(k,{label:">",value:">"}),R(k,{label:">=",value:">="}),R(k,{label:"<",value:"<"}),R(k,{label:"<=",value:"<="}),R(k,{label:"LIKE",value:"like"}),R(k,{label:"BETWEEN",value:"between"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"显示类型","min-width":"120"},{default:z((({row:e})=>[R(q,{modelValue:e.view_type,"onUpdate:modelValue":l=>e.view_type=l},{default:z((()=>[R(k,{label:"文本框",value:"input"}),R(k,{label:"文本域",value:"textarea"}),R(k,{label:"下拉框",value:"select"}),R(k,{label:"单选框",value:"radio"}),R(k,{label:"复选框",value:"checkbox"}),R(k,{label:"日期控件",value:"datetime"}),R(k,{label:"图片选择控件",value:"imageSelect"}),R(k,{label:"富文本控件",value:"editor"})])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:1}),R(U,{label:"字典类型","min-width":"120"},{default:z((({row:e})=>[R(q,{modelValue:e.dict_type,"onUpdate:modelValue":l=>e.dict_type=l,clearable:"",disabled:!("select"==e.view_type||"radio"==e.view_type||"checkbox"==e.view_type),placeholder:"字典类型"},{default:z((()=>[(C(!0),D(I,null,K(S(se).dict_type,((e,l)=>(C(),N(k,{key:l,label:e.name,value:e.type,disabled:!e.status},null,8,["label","value","disabled"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])])),_:1})])),_:1},8,["data"])])),_:1}),R(j,{label:"生成配置",name:"config"},{default:z((()=>[R(h,{label:"模板类型",prop:"template_type"},{default:z((()=>[R(W,{modelValue:me.template_type,"onUpdate:modelValue":g[5]||(g[5]=e=>me.template_type=e)},{default:z((()=>[R(O,{label:0},{default:z((()=>[T])),_:1})])),_:1},8,["modelValue"])])),_:1}),R(h,{label:"生成方式",prop:"generate_type"},{default:z((()=>[R(W,{modelValue:me.generate_type,"onUpdate:modelValue":g[6]||(g[6]=e=>me.generate_type=e)},{default:z((()=>[R(O,{label:0},{default:z((()=>[X])),_:1}),R(O,{label:1},{default:z((()=>[Z])),_:1})])),_:1},8,["modelValue"])])),_:1}),R(h,{label:"模块名",prop:"module_name"},{default:z((()=>[B("div",$,[R(w,{modelValue:me.module_name,"onUpdate:modelValue":g[7]||(g[7]=e=>me.module_name=e),placeholder:"请输入模块名",clearable:""},null,8,["modelValue"]),A])])),_:1}),R(h,{label:"类目录"},{default:z((()=>[B("div",G,[B("div",null,[R(w,{modelValue:me.class_dir,"onUpdate:modelValue":g[8]||(g[8]=e=>me.class_dir=e),clearable:""},null,8,["modelValue"])]),H])])),_:1}),R(h,{label:"类描述"},{default:z((()=>[B("div",Y,[B("div",null,[R(w,{modelValue:me.class_comment,"onUpdate:modelValue":g[9]||(g[9]=e=>me.class_comment=e),clearable:""},null,8,["modelValue"])]),ee])])),_:1}),R(h,{label:"父级菜单",prop:"menu.pid"},{default:z((()=>[R(F,{class:"w-80",modelValue:me.menu.pid,"onUpdate:modelValue":g[10]||(g[10]=e=>me.menu.pid=e),data:S(se).menu,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":"",placeholder:"请选择父级菜单","check-strictly":""},null,8,["modelValue","data"])])),_:1}),R(h,{label:"菜单名称",prop:"menu.name"},{default:z((()=>[B("div",le,[R(w,{modelValue:me.menu.name,"onUpdate:modelValue":g[11]||(g[11]=e=>me.menu.name=e),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])])])),_:1}),R(h,{label:"菜单构建",prop:"menu.type",required:""},{default:z((()=>[B("div",null,[R(W,{modelValue:me.menu.type,"onUpdate:modelValue":g[12]||(g[12]=e=>me.menu.type=e)},{default:z((()=>[R(O,{label:1},{default:z((()=>[ae])),_:1}),R(O,{label:0},{default:z((()=>[de])),_:1})])),_:1},8,["modelValue"]),te])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["model","rules"])])),_:1}),R(_e,null,{default:z((()=>[R(be,{type:"primary",onClick:ce},{default:z((()=>[ue])),_:1})])),_:1})])}}}))}}}));