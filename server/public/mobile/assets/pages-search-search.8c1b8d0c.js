import{d as e,o as a,c as s,w as t,h as r,b as l,l as c,e as o,f as h,t as u,F as i,k as d,m as n,z as p,X as _,ag as f,aF as m,aG as g,aH as x,au as y,r as w,a as b}from"./index.b9f5d16c.js";import{_ as v}from"./u-search.6f8d8b2c.js";import{_ as k}from"./news-card.aa40fac9.js";import{_ as j}from"./z-paging.9227f9dd.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{b as V}from"./shop.312407f9.js";import{g as z}from"./news.2864f7e9.js";import"./u-icon.b324dce2.js";import"./u-image.25a9e49b.js";import"./icon_visit.45de9dde.js";var I=C(e({__name:"suggest",props:{hot_search:{default:()=>({data:[],status:0})},his_search:{default:()=>[]}},emits:["search","clear"],setup(e,{emit:n}){const p=e=>{n("search",e)};return(_,f)=>{const m=d;return a(),s(m,{class:"suggest bg-white"},{default:t((()=>[r(" 热门搜索 "),1==e.hot_search.status&&e.hot_search.data.length?(a(),s(m,{key:0,class:"hot"},{default:t((()=>[l(m,{class:"font-medium pl-[24rpx] pt-[26rpx] pb-[6rpx] text-lg"},{default:t((()=>[c("热门搜索")])),_:1}),l(m,{class:"w-full px-[24rpx]"},{default:t((()=>[(a(!0),o(i,null,h(e.hot_search.data,((e,r)=>(a(),s(m,{key:r,class:"keyword truncate max-w-full",onClick:a=>p(e.keyword)},{default:t((()=>[c(u(e.keyword),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):r("v-if",!0),1==e.hot_search.status&&e.hot_search.data.length&&e.his_search.length?(a(),s(m,{key:1,class:"mx-[24rpx] my-[40rpx] border-b border-solid border-0 border-light"})):r("v-if",!0),r(" 历史搜索 "),e.his_search.length?(a(),s(m,{key:2,class:"history"},{default:t((()=>[l(m,{class:"flex justify-between px-[24rpx] pb-[6rpx] pt-[26rpx]"},{default:t((()=>[l(m,{class:"text-lg font-medium"},{default:t((()=>[c("历史搜索")])),_:1}),l(m,{class:"text-xs text-muted",onClick:f[0]||(f[0]=()=>n("clear"))},{default:t((()=>[c("清空")])),_:1})])),_:1}),l(m,{class:"w-full px-[24rpx]"},{default:t((()=>[(a(!0),o(i,null,h(e.his_search,((e,r)=>(a(),s(m,{key:r,class:"keyword truncate",onClick:a=>p(e)},{default:t((()=>[c(u(e),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):r("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-00767589"]]);var S=C(e({__name:"search",setup(e){const c=n({hot_search:{data:[],status:1},his_search:[],result:[],searching:!1}),u=p(""),C=_(),S=e=>{u.value=e,u.value&&(c.his_search.includes(u.value)||(c.his_search.unshift(u.value),f.set(m,c.his_search))),C.value.reload(),c.searching=!0},F=async()=>{(await y({title:"温馨提示",content:"是否清空历史记录？"})).confirm&&(f.set(m,""),c.his_search=[])},U=async(e,a)=>{try{const{lists:s}=await z({keyword:u.value,pageNo:e,pageSize:a});C.value.complete(s)}catch(s){console.log("报错=>",s),C.value.complete(!1)}};return(async()=>{try{c.hot_search=await V()}catch(e){console.log("获取热门搜索失败=>",e)}})(),c.his_search=f.get(m)||[],(e,n)=>{const p=w(b("u-search"),v),_=d,f=w(b("news-card"),k),m=w(b("z-paging"),j);return a(),s(_,{class:"search"},{default:t((()=>[r(" 搜索框 "),l(_,{class:"px-[24rpx] py-[14rpx] bg-white"},{default:t((()=>[l(p,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=e=>u.value=e),placeholder:"请输入关键词搜索",height:"72",onSearch:S,onCustom:S,onClear:n[1]||(n[1]=e=>c.searching=!1)},null,8,["modelValue"])])),_:1}),r(" 搜索 "),l(_,{class:"search-content"},{default:t((()=>[r("  "),g(l(I,{onSearch:S,onClear:F,hot_search:c.hot_search,his_search:c.his_search},null,8,["hot_search","his_search"]),[[x,!c.searching]]),r("  "),g(l(_,{class:"search-content-s pt-[20rpx]"},{default:t((()=>[l(m,{ref_key:"paging",ref:C,modelValue:c.result,"onUpdate:modelValue":n[2]||(n[2]=e=>c.result=e),onQuery:U,fixed:!1,height:"100%"},{default:t((()=>[(a(!0),o(i,null,h(c.result,(e=>(a(),s(f,{key:e.id,item:e,newsId:e.id},null,8,["item","newsId"])))),128))])),_:1},8,["modelValue"])])),_:1},512),[[x,c.searching]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-7990b5bb"]]);export{S as default};