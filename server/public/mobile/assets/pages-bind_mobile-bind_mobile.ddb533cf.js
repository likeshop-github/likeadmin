import{d as e,V as a,z as o,a8 as l,m as t,o as r,c as s,w as u,b as i,l as d,t as m,aj as n,ak as c,aK as b,ag as f,r as p,a as _,k as x}from"./index.fe5c5ea8.js";import{a as v,_ as h}from"./u-form-item.b3386237.js";import{_ as j}from"./u-verification-code.576f1bbe.js";import{_ as g}from"./u-form.a3babc62.js";import{_ as k}from"./u-button.3c975ba5.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.75404696.js";import"./emitter.5b880544.js";var V=w(e({__name:"bind_mobile",setup(e){const w=a(),V=o(""),y=l(),B=e=>{V.value=e},C=t({type:"bind",mobile:"",code:""}),$=async()=>{var e,a;if(!C.mobile)return uni.$u.toast("请输入手机号码");(null==(e=w.value)?void 0:e.canGetCode)&&(await n({scene:c.BIND_MOBILE,mobile:C.mobile}),uni.$u.toast("发送成功"),null==(a=w.value)||a.start())},I=async()=>C.mobile?C.code?(await b(C,{token:y.temToken}),uni.$u.toast("绑定成功"),y.login(y.temToken),void setTimeout((()=>{f()}),1500)):uni.$u.toast("请输入验证码"):uni.$u.toast("请输入手机号码");return(e,a)=>{const o=p(_("u-input"),v),l=p(_("u-form-item"),h),t=p(_("u-verification-code"),j),n=x,c=p(_("u-form"),g),b=p(_("u-button"),k);return r(),s(n,{class:"bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"},{default:u((()=>[i(n,{class:"w-full"},{default:u((()=>[i(c,{borderBottom:"","label-width":150},{default:u((()=>[i(l,{label:"手机号",borderBottom:""},{default:u((()=>[i(o,{class:"flex-1",modelValue:C.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>C.mobile=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),i(l,{label:"验证码",borderBottom:""},{default:u((()=>[i(o,{class:"flex-1",modelValue:C.code,"onUpdate:modelValue":a[1]||(a[1]=e=>C.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),i(n,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3 w-[180rpx]",onClick:$},{default:u((()=>[i(t,{ref_key:"uCodeRef",ref:w,seconds:60,onChange:B,"change-text":"x秒"},null,512),d(" "+m(V.value),1)])),_:1})])),_:1})])),_:1}),i(n,{class:"mt-[40rpx]"},{default:u((()=>[i(b,{type:"primary",shape:"circle",onClick:I},{default:u((()=>[d(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-76211013"]]);export{V as default};
