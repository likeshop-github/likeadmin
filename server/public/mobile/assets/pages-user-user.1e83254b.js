import{a6 as e,d as t,r as s,a,o as r,c as n,w as l,b as i,m as o,t as c,x as u,f as d,j as p,H as f,l as m,i as x,u as y,e as g,g as v,a7 as _,F as b,h,S as k,k as j,n as w,a8 as C,a9 as O,aa as I}from"./index.c7344c05.js";import{_ as L}from"./u-avatar.d4a32a34.js";import{_ as z}from"./u-icon.2d6e596e.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as U}from"./u-image.f082f42a.js";import{n as F}from"./util.84df4a62.js";import{_ as B}from"./tabbar.da98c06e.js";import{a as H}from"./shop.621dc03d.js";import"./u-badge.866a6e91.js";var J=S(t({__name:"user-info",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},user:{type:Object,default:()=>({})},isLogin:{type:Boolean}},setup(t){const{copy:y}={copy:t=>{e({data:String(t)})}};return(e,g)=>{const v=s(a("u-avatar"),L),_=m,b=x,h=s(a("u-icon"),z);return r(),n(_,{class:"user-info flex px-[50rpx] justify-between py-[50rpx]"},{default:l((()=>[t.isLogin?(r(),n(_,{key:0,class:"flex items-center",onClick:g[1]||(g[1]=e=>{f({url:"/pages/user_data/user_data"})})},{default:l((()=>[i(v,{src:t.user.avatar,size:120},null,8,["src"]),i(_,{class:"text-white ml-[20rpx]"},{default:l((()=>[i(_,{class:"text-2xl"},{default:l((()=>[o(c(t.user.nickname),1)])),_:1}),i(_,{class:"text-xs mt-[18rpx]",onClick:g[0]||(g[0]=u((e=>d(y)(t.user.account)),["stop"]))},{default:l((()=>[o(" 账号："+c(t.user.account),1)])),_:1})])),_:1})])),_:1})):(r(),n(b,{key:1,class:"flex items-center","hover-class":"none",url:"/pages/login/login"},{default:l((()=>[i(v,{src:"/static/images/user/default_avatar.png",size:120}),i(_,{class:"text-white text-3xl ml-[20rpx]"},{default:l((()=>[o("未登录")])),_:1})])),_:1})),t.isLogin?(r(),n(b,{key:2,"hover-class":"none",url:"/pages/user_set/user_set"},{default:l((()=>[i(h,{name:"setting",color:"#fff",size:48})])),_:1})):p("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-4c42a4cc"]]);const N=t({__name:"my-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const t=e,{getImageUrl:n}=y(),l=e=>{F(e)},o=g((()=>{var e;return(null==(e=t.content.data)?void 0:e.filter((e=>"1"==e.is_show)))||[]}));return(t,u)=>{const f=s(a("u-image"),U),m=s(a("u-icon"),z);return r(),v("div",{class:"my-service bg-white mx-[20rpx] mt-[20rpx] rounded-lg"},[e.content.title?(r(),v("div",{key:0,class:"title px-[30rpx] py-[20rpx] font-medium text-xl border-light border-solid border-0 border-b"},[_("div",null,c(e.content.title),1)])):p("v-if",!0),1==e.content.style?(r(),v("div",{key:1,class:"flex flex-wrap pt-[40rpx] pb-[20rpx]"},[(r(!0),v(b,null,h(d(o),((e,t)=>(r(),v("div",{key:t,class:"flex flex-col items-center w-1/4 mb-[15px]",onClick:t=>l(e.link)},[i(f,{width:"52",height:"52",src:d(n)(e.image),alt:""},null,8,["src"]),_("div",{class:"mt-[7px]"},c(e.name),1)],8,["onClick"])))),128))])):p("v-if",!0),2==e.content.style?(r(),v("div",{key:2},[(r(!0),v(b,null,h(d(o),((e,t)=>(r(),v("div",{key:t,class:"flex items-center border-light border-solid border-0 border-b h-[100rpx] px-[24rpx]",onClick:t=>l(e.link)},[i(f,{width:"48",height:"48",src:d(n)(e.image),alt:""},null,8,["src"]),_("div",{class:"ml-[20rpx] flex-1"},c(e.name),1),_("div",{class:"text-muted"},[i(m,{name:"arrow-right"})])],8,["onClick"])))),128))])):p("v-if",!0)])}}}),q=t({__name:"user-banner",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const t=e,{getImageUrl:o}=y(),c=g((()=>{var e;return(null==(e=t.content.data)?void 0:e.filter((e=>"1"==e.is_show)))||[]}));return(t,u)=>{const f=s(a("u-image"),U),x=k,y=j,g=m;return d(c).length&&e.content.enabled?(r(),n(g,{key:0,class:"banner h-[200rpx] mx-[20rpx] mt-[20rpx] translate-y-0"},{default:l((()=>[i(y,{class:"swiper h-full","indicator-dots":d(c).length>1,"indicator-active-color":"#4173ff",autoplay:!0},{default:l((()=>[(r(!0),v(b,null,h(d(c),((e,t)=>(r(),n(x,{key:t,onClick:t=>{return s=e.limk,void F(s);var s}},{default:l((()=>[i(f,{mode:"aspectFit",width:"100%",height:"100%",src:d(o)(e.image),"border-radius":14},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["indicator-dots"])])),_:1})):p("v-if",!0)}}}),A=t({__name:"user",setup(e){const t=w({pages:[]}),o=C(),{userInfo:c,isLogin:u}=O(o);return I((()=>{o.getUser()})),(async()=>{const e=await H({id:2});t.pages=JSON.parse(e.data)})(),(e,o)=>{const f=s(a("w-user-info"),J),x=s(a("w-my-service"),N),y=s(a("w-user-banner"),q),g=m,_=s(a("tabbar"),B);return r(),n(g,{class:"user"},{default:l((()=>[(r(!0),v(b,null,h(t.pages,((e,t)=>(r(),n(g,{key:t},{default:l((()=>["user-info"==e.name?(r(),n(f,{key:0,content:e.content,styles:e.styles,user:d(c),"is-login":d(u)},null,8,["content","styles","user","is-login"])):p("v-if",!0),"my-service"==e.name?(r(),n(x,{key:1,content:e.content,styles:e.styles},null,8,["content","styles"])):p("v-if",!0),"user-banner"==e.name?(r(),n(y,{key:2,content:e.content,styles:e.styles},null,8,["content","styles"])):p("v-if",!0)])),_:2},1024)))),128)),i(_)])),_:1})}}});export{A as default};
