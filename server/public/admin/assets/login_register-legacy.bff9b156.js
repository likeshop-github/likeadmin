System.register(["./index-legacy.932142c8.js","./element-plus-legacy.9a978554.js","./user-legacy.9fbe92c7.js","./@vue-legacy.6b85f8d1.js","./index-legacy.bb301f21.js","./@vueuse-legacy.157488cf.js","./lodash-legacy.ed0945d2.js","./axios-legacy.770d9bb0.js","./vue-router-legacy.4ee22123.js","./pinia-legacy.98b0b201.js","./vue-demi-legacy.ade83891.js","./css-color-function-legacy.b6dd1ba0.js","./color-legacy.b068fdf4.js","./clone-legacy.2819e742.js","./color-convert-legacy.24fd1954.js","./color-string-legacy.f1460f94.js","./color-name-legacy.592a2748.js","./@element-plus-legacy.d952503a.js","./nprogress-legacy.124f3b37.js","./vue-clipboard3-legacy.c012a06d.js","./clipboard-legacy.4032b320.js","./echarts-legacy.4a09bb08.js","./zrender-legacy.f9b1c945.js","./highlight.js-legacy.1a13e67a.js","./@highlightjs-legacy.5de22af8.js","./lodash-es-legacy.55fbc42a.js","./dayjs-legacy.79633238.js","./async-validator-legacy.36fe4908.js","./@ctrl-legacy.c91dabf1.js","./@popperjs-legacy.e05acee0.js","./escape-html-legacy.ff6604b3.js","./normalize-wheel-es-legacy.b0eca4cb.js"],(function(e){"use strict";var l,a,t,s,r,c,o,i,d,n,u,g,m,f,y,b,_,v,h,p,j,w,V;return{setters:[e=>{l=e._},e=>{a=e.B,t=e.a0,s=e.D,r=e.t,c=e.I,o=e.w,i=e.F},e=>{d=e.g,n=e.s},e=>{u=e.d,g=e.r,m=e.a1,f=e.ah,y=e.o,b=e.c,_=e.W,v=e.O,h=e.a,p=e.V,j=e.P,w=e.M,V=e.U},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const q={class:"login-register"},x=h("div",{class:"font-medium mb-7"},"通用设置",-1),U=V("账号密码登录"),k=V("手机验证码登录"),P=h("div",{class:"form-tips"},"系统通用登录方式，至少选择一项",-1),R={class:"mt-1 ml-2"},W=h("div",{class:"form-tips"},[V(" 1、如果开启，则新用户在注册完成之后要强制绑定手机号"),h("br"),V(" 2、老用户登录时如果检测到没有绑定手机，则要重新绑定手机号 ")],-1),z={class:"mt-1 ml-2"},C=h("div",{class:"form-tips"},"登录/注册会员时，是否显示服务协议和隐私政策",-1),F=h("div",{class:"font-medium mb-7"},"第三方设置",-1),A={class:"mt-1 ml-2"},B=h("div",{class:"form-tips"},"登录时支持第三方登录，新用户授权即自动注册账号",-1),D=V(" 微信登录 "),E={href:"https://open.weixin.qq.com/",target:"_blank"},I=V(" 前往微信开放平台 "),M=h("div",{class:"form-tips"},[V(" 1、在各渠道使用微信授权登录时，强烈建议配置微信开放平台"),h("br"),V(" 2、微信开放平台关联公众号、小程序和APP后，可实现各端用户账号统一，识别买家唯一微信身份"),h("br"),V(" 3、没有配置微信开放平台，同一微信号会生成多个用户，配置微信开放平台后已生成的用户账号无法合并 ")],-1),O=V("保存"),S=u({name:"loginRegister"});e("default",u({...S,setup(e){const u=g(),V=m({login_way:[],coerce_mobile:0,login_agreement:0,third_auth:0,wechat_auth:0,qq_auth:0}),S=m({loginWay:[{required:!0,validator:(e,l,a)=>{if(0===V.login_way.join("").length)a(new Error("登录方式至少选择一项！"));else{if(""!==V.login_way){if(!u.value)return;u.value.validateField("checkPass",(()=>null))}a()}},trigger:"change"}],coerce_mobile:[{required:!0,trigger:"blur"}],login_agreement:[{required:!0,trigger:"blur"}],third_auth:[{required:!0,trigger:"blur"}]}),G=async()=>{try{const e=await d();for(const l in V)V[l]=e[l]}catch(e){console.log("获取=>",e)}},H=async()=>{await(u.value?.validate());try{await n(V),G()}catch(e){console.log("保存=>",e)}};return G(),(e,d)=>{const n=a,g=t,m=s,G=r,J=c,K=o,L=i,N=l,Q=f("perms");return y(),b("div",q,[_(L,{ref_key:"formRef",ref:u,rules:S,model:V,"label-width":"120px"},{default:v((()=>[_(J,{shadow:"never",class:"!border-none"},{default:v((()=>[x,_(m,{label:"登录方式",prop:"loginWay"},{default:v((()=>[h("div",null,[_(g,{modelValue:V.login_way,"onUpdate:modelValue":d[0]||(d[0]=e=>V.login_way=e)},{default:v((()=>[_(n,{label:"1"},{default:v((()=>[U])),_:1}),_(n,{label:"2"},{default:v((()=>[k])),_:1})])),_:1},8,["modelValue"]),P])])),_:1}),_(m,{label:"强制绑定手机",prop:"coerce_mobile"},{default:v((()=>[h("div",null,[_(G,{modelValue:V.coerce_mobile,"onUpdate:modelValue":d[1]||(d[1]=e=>V.coerce_mobile=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),h("span",R,p(V.coerce_mobile?"开启":"关闭"),1),W])])),_:1}),_(m,{label:"政策协议",prop:"login_agreement"},{default:v((()=>[h("div",null,[_(G,{modelValue:V.login_agreement,"onUpdate:modelValue":d[2]||(d[2]=e=>V.login_agreement=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),h("span",z,p(V.login_agreement?"开启":"关闭"),1),C])])),_:1})])),_:1}),_(J,{shadow:"never",class:"!border-none mt-4"},{default:v((()=>[F,_(m,{label:"第三方登录",prop:"third_auth"},{default:v((()=>[h("div",null,[_(G,{modelValue:V.third_auth,"onUpdate:modelValue":d[3]||(d[3]=e=>V.third_auth=e),"active-value":1,"inactive-value":0},null,8,["modelValue"]),h("span",A,p(V.third_auth?"开启":"关闭"),1),B,h("div",null,[_(n,{modelValue:V.wechat_auth,"onUpdate:modelValue":d[4]||(d[4]=e=>V.wechat_auth=e),"true-label":1,"false-label":0},{default:v((()=>[D])),_:1},8,["modelValue"])])])])),_:1}),_(m,{label:"微信开放平台"},{default:v((()=>[h("div",null,[h("a",E,[_(K,{type:"primary",link:"",class:"underline"},{default:v((()=>[I])),_:1})]),M])])),_:1})])),_:1})])),_:1},8,["rules","model"]),j((y(),w(N,null,{default:v((()=>[_(K,{type:"primary",onClick:H},{default:v((()=>[O])),_:1})])),_:1})),[[Q,["setting.user.user/setRegisterConfig"]]])])}}}))}}}));