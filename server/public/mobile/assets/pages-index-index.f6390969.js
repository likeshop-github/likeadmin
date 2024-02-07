import{_ as e}from"./u-search.4c696827.js";import{r as t,a,o as s,c as n,w as l,b as r,i as c,d as i,u as o,e as d,f as u,g as p,h as f,F as m,j as h,S as y,k as v,l as _,m as g,t as b,n as x}from"./index.c7344c05.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as k}from"./u-image.f082f42a.js";import{n as j}from"./util.84df4a62.js";import{_ as O}from"./news-card.e0e7e7c3.js";import{_ as C}from"./tabbar.da98c06e.js";import{g as I}from"./shop.621dc03d.js";import"./u-icon.2d6e596e.js";import"./icon_visit.21b6ed3b.js";import"./u-badge.866a6e91.js";var F=w({},[["render",function(i,o){const d=t(a("u-search"),e),u=c;return s(),n(u,{url:"/pages/search/search",class:"search px-[24rpx] py-[14rpx] bg-white","hover-class":"none"},{default:l((()=>[r(d,{placeholder:"请输入关键词搜索",disabled:"","show-action":!1})])),_:1})}]]);const S=i({__name:"banner",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const c=e,{getImageUrl:i}=o(),g=d((()=>{var e;return(null==(e=c.content.data)?void 0:e.filter((e=>"1"==e.is_show)))||[]}));return(c,o)=>{const d=t(a("u-image"),k),b=y,x=v,w=_;return u(g).length&&e.content.enabled?(s(),n(w,{key:0,class:"banner h-[340rpx] bg-white translate-y-0"},{default:l((()=>[r(x,{class:"swiper h-full","indicator-dots":u(g).length>1,"indicator-active-color":"#4173ff",autoplay:!0},{default:l((()=>[(s(!0),p(m,null,f(u(g),((e,t)=>(s(),n(b,{key:t,onClick:t=>{return a=e.link,void j(a);var a}},{default:l((()=>[r(d,{mode:"aspectFit",width:"100%",height:"100%",src:u(i)(e.image)},null,8,["src"])])),_:2},1032,["onClick"])))),128))])),_:1},8,["indicator-dots"])])),_:1})):h("v-if",!0)}}}),U=i({__name:"nav",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const c=e,i=d((()=>{var e;return(null==(e=c.content.data)?void 0:e.filter((e=>"1"==e.is_show)))||[]})),{getImageUrl:y}=o();return(c,o)=>{const d=t(a("u-image"),k),v=_;return u(i).length&&e.content.enabled?(s(),n(v,{key:0,class:"nav pt-[30rpx] pb-[16rpx] bg-white"},{default:l((()=>[r(v,{class:"nav-item flex flex-wrap"},{default:l((()=>[(s(!0),p(m,null,f(u(i),((e,t)=>(s(),n(v,{key:t,class:"flex flex-col items-center w-1/5 mb-[30rpx]",onClick:t=>{return a=e.link,void j(a);var a}},{default:l((()=>[r(d,{width:"41px",height:"41px",src:u(y)(e.image),alt:""},null,8,["src"]),r(v,{class:"mt-[14rpx]"},{default:l((()=>[g(b(e.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):h("v-if",!0)}}});var J=w(i({__name:"index",setup(e){const c=x({pages:[],article:[]});return(async()=>{var e;const t=await I();c.pages=JSON.parse(null==(e=null==t?void 0:t.page)?void 0:e.data),c.article=t.article})(),(e,i)=>{const o=t(a("w-search"),F),d=t(a("w-banner"),S),u=t(a("w-nav"),U),y=_,v=t(a("news-card"),O),b=t(a("tabbar"),C);return s(),n(y,{class:"index"},{default:l((()=>[(s(!0),p(m,null,f(c.pages,((e,t)=>(s(),n(y,{key:t},{default:l((()=>["search"==e.name?(s(),n(o,{key:0,content:e.content,styles:e.styles},null,8,["content","styles"])):h("v-if",!0),"banner"==e.name?(s(),n(d,{key:1,content:e.content,styles:e.styles},null,8,["content","styles"])):h("v-if",!0),"nav"==e.name?(s(),n(u,{key:2,content:e.content,styles:e.styles},null,8,["content","styles"])):h("v-if",!0)])),_:2},1024)))),128)),c.article.length?(s(),n(y,{key:0,class:"article"},{default:l((()=>[r(y,{class:"flex items-center article-title mx-[20rpx] my-[30rpx] text-2xl font-medium"},{default:l((()=>[g(" 最新资讯 ")])),_:1}),(s(!0),p(m,null,f(c.article,(e=>(s(),n(v,{key:e.id,"news-id":e.id,item:e},null,8,["news-id","item"])))),128))])),_:1})):h("v-if",!0),r(b)])),_:1})}}}),[["__scopeId","data-v-d9ebebdc"]]);export{J as default};
