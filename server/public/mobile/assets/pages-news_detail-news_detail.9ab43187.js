import{_ as a}from"./page-meta.c3ec9a82.js";import{d as e,z as t,I as s,o as l,g as r,e as u,w as c,f as i,l as o,t as m,b as p,F as d,r as n,a as f,p as x,m as _,P as v}from"./index.408c273f.js";import{_ as b}from"./u-parse.ff1b2320.js";import{_ as w}from"./u-icon.2b297aae.js";import{_ as h}from"./icon_visit.21b6ed3b.js";import{b as y,c as g,d as j}from"./news.299f2401.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";var $=k(e({__name:"news_detail",setup(e){const k=t({});let $="";const z=async a=>{k.value=await y({id:a})};return s((a=>{$=a.id,z($)})),(e,t)=>{const s=n(f("page-meta"),a),y=x,F=_,I=v,A=n(f("u-parse"),b),B=n(f("u-icon"),w);return l(),r(d,null,[u(s,{"page-style":e.$theme.pageStyle},null,8,["page-style"]),u(y,{class:"news-detail bg-white"},{default:c((()=>[i(" 标题信心 "),u(y,{class:"news-detail-header py-[20rpx] px-[30rpx]"},{default:c((()=>[u(y,{class:"text-3xl font-medium"},{default:c((()=>[o(m(k.value.title),1)])),_:1}),u(y,{class:"flex mt-[20rpx] text-xs"},{default:c((()=>[k.value.author?(l(),p(y,{key:0,class:"mr-[40rpx]"},{default:c((()=>[o("作者: "+m(k.value.author),1)])),_:1})):i("v-if",!0),u(y,{class:"text-muted mr-[40rpx] flex-1"},{default:c((()=>[o(m(k.value.create_time),1)])),_:1}),u(y,{class:"flex items-center text-muted flex-none"},{default:c((()=>[u(F,{src:h,class:"w-[30rpx] h-[30rpx]"}),u(y,{class:"ml-[10rpx]"},{default:c((()=>[o(m(k.value.click),1)])),_:1})])),_:1})])),_:1})])),_:1}),i(" 咨询内容 "),u(y,{class:"news-detail-section bg-white p-[24rpx]"},{default:c((()=>[i(" 摘要 "),k.value.abstract?(l(),p(y,{key:0,class:"summary p-[20rpx] text-base"},{default:c((()=>[u(I,{class:"font-medium"},{default:c((()=>[o("摘要: ")])),_:1}),o(" "+m(k.value.abstract),1)])),_:1})):i("v-if",!0),i(" 内容 "),u(y,{class:"mt-[20rpx]"},{default:c((()=>[u(A,{html:k.value.content},null,8,["html"])])),_:1})])),_:1}),u(y,{class:"panel-btn flex items-center px-[34rpx]",onClick:t[0]||(t[0]=a=>(async a=>{try{k.value.collect?(await g({id:a}),uni.$u.toast("已取消收藏")):(await j({id:a}),uni.$u.toast("收藏成功")),z($)}catch(e){}})(k.value.id))},{default:c((()=>[u(B,{name:k.value.collect?"star-fill":"star",size:"40",color:k.value.collect?"#F7BA47":"#333"},null,8,["name","color"]),u(I,{class:"ml-[10rpx]"},{default:c((()=>[o("收藏")])),_:1})])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-0691d210"]]);export{$ as default};
