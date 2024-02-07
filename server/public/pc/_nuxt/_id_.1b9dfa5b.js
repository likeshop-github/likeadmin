import{_ as D}from"./index.vue.6b923661.js";import{_ as V}from"./nuxt-link.6231fccb.js";import{_ as j}from"./card.vue.4e925d4a.js";import{u as M}from"./asyncData.0504d030.js";import{C as S,aa as q,a as x,O as E,r as N,L as H,I as K,o as s,h as i,Y as L,R as h,u as e,a1 as F,ab as O,a2 as R,i as a,c as v,k as l,ac as G,T as Y,t as n,N as J,a5 as Q,a6 as U,a8 as W,w as X,G as Z,l as u,j as c,p as B,E as ee,ad as $}from"./entry.32a45fa5.js";import{u as te}from"./useLockFn.7e4ba3f7.js";import{a as ae,c as se,b as oe}from"./news.fce18aa1.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./items.vue.12e19e66.js";import"./empty_news.626a5191.js";import"./debounce.09d872f8.js";const P=Symbol("breadcrumbKey"),re=S({separator:{type:String,default:"/"},separatorIcon:{type:q}}),ne=x({name:"ElBreadcrumb"}),ce=x({...ne,props:re,setup(y){const o=y,d=E("breadcrumb"),r=N();return H(P,o),K(()=>{const t=r.value.querySelectorAll(`.${d.e("item")}`);t.length&&t[t.length-1].setAttribute("aria-current","page")}),(t,m)=>(s(),i("div",{ref_key:"breadcrumb",ref:r,class:h(e(d).b()),"aria-label":"Breadcrumb",role:"navigation"},[L(t.$slots,"default")],2))}});var le=F(ce,[["__file","breadcrumb.vue"]]);const ie=S({to:{type:O([String,Object]),default:""},replace:{type:Boolean,default:!1}}),de=x({name:"ElBreadcrumbItem"}),ue=x({...de,props:ie,setup(y){const o=y,d=J(),r=R(P,void 0),t=E("breadcrumb"),m=d.appContext.config.globalProperties.$router,k=N(),g=()=>{!o.to||!m||(o.replace?m.replace(o.to):m.push(o.to))};return(_,z)=>{var p,f;return s(),i("span",{class:h(e(t).e("item"))},[a("span",{ref_key:"link",ref:k,class:h([e(t).e("inner"),e(t).is("link",!!_.to)]),role:"link",onClick:g},[L(_.$slots,"default")],2),(p=e(r))!=null&&p.separatorIcon?(s(),v(e(Y),{key:0,class:h(e(t).e("separator"))},{default:l(()=>[(s(),v(G(e(r).separatorIcon)))]),_:1},8,["class"])):(s(),i("span",{key:1,class:h(e(t).e("separator")),role:"presentation"},n((f=e(r))==null?void 0:f.separator),3))],2)}}});var T=F(ue,[["__file","breadcrumb-item.vue"]]);const me=Q(le,{BreadcrumbItem:T}),w=U(T),_e={class:"flex items-center"},pe={class:"flex gap-4 mt-5"},fe={class:"w-[750px] bg-body rounded-[8px] flex-none p-5"},be={class:"border-b border-br pb-4"},he={class:"font-medium text-[22px]"},xe={class:"mt-3 text-tx-secondary flex items-center flex-wrap"},ye={key:0},ve={class:"mr-5"},ke={class:"flex items-center"},ge={key:0,class:"bg-page mt-4 p-3 rounded-lg"},we=["innerHTML"],Ce={class:"flex justify-center mt-[40px]"},Ie={class:"border-t border-br mt-[30px]"},Be={class:"mt-5 flex"},$e=a("span",{class:"text-tx-regular"},"上一篇：",-1),Se={key:1},Ee={class:"mt-5 flex"},Ne=a("span",{class:"text-tx-regular"},"下一篇：",-1),Le={key:1},Ke=x({__name:"[id]",async setup(y){let o,d;const r=W(),{data:t,refresh:m}=([o,d]=X(()=>M(()=>ae({id:r.params.id,source:r.params.source}),{initialCache:!1},"$hLmIawyfea")),o=await o,d(),o);Z(()=>{switch(r.params.source){case"hot":return"热门资讯";case"new":return" 最新资讯";default:return"全部资讯"}});const k=async()=>{const _=r.params.id;t.value.collect?(await se({id:_}),$.msgSuccess("已取消收藏")):(await oe({id:_}),$.msgSuccess("收藏成功")),m()},{lockFn:g}=te(k);return(_,z)=>{var C,I;const p=D,f=V,A=j;return s(),i("div",null,[a("div",_e,[u(" 当前位置： "),c(e(me),{separator:"/"},{default:l(()=>[c(e(w),{to:{path:"/information"}},{default:l(()=>[u(" 资讯中心 ")]),_:1}),c(e(w),{to:{path:"/information/default",query:{cid:e(t).cid,name:e(t).cate_name}}},{default:l(()=>[u(n(e(t).cate_name),1)]),_:1},8,["to"]),c(e(w),null,{default:l(()=>[u("文章详情")]),_:1})]),_:1})]),a("div",pe,[a("div",fe,[a("div",be,[a("span",he,n(e(t).title),1),a("div",xe,[e(t).author?(s(),i("span",ye,n(e(t).author)+" |  ",1)):B("",!0),a("span",ve,n(e(t).create_time),1),a("div",ke,[c(p,{name:"el-icon-View"}),a("span",null," "+n(e(t).click)+"人浏览",1)])])]),e(t).abstract?(s(),i("div",ge," 摘要："+n(e(t).abstract),1)):B("",!0),a("div",{class:"py-4",innerHTML:e(t).content},null,8,we),a("div",Ce,[c(e(ee),{size:"large",round:"",onClick:e(g)},{default:l(()=>[c(p,{name:`el-icon-${e(t).collect?"StarFilled":"Star"}`,size:e(t).collect?20:16,color:e(t).collect?"#FF2C2F":"inherit"},null,8,["name","size","color"]),u(" "+n(e(t).collect?"取消收藏":"点击收藏"),1)]),_:1},8,["onClick"])]),a("div",Ie,[a("div",Be,[$e,e(t).last.id?(s(),v(f,{key:0,class:"flex-1 hover:underline",to:`/information/detail/${(C=e(t).last)==null?void 0:C.id}`},{default:l(()=>{var b;return[u(n((b=e(t).last)==null?void 0:b.title),1)]}),_:1},8,["to"])):(s(),i("span",Se," 暂无相关文章 "))]),a("div",Ee,[Ne,e(t).next.id?(s(),v(f,{key:0,class:"flex-1 hover:underline",to:`/information/detail/${(I=e(t).next)==null?void 0:I.id}`},{default:l(()=>{var b;return[u(n((b=e(t).next)==null?void 0:b.title),1)]}),_:1},8,["to"])):(s(),i("span",Le," 暂无相关文章 "))])])]),c(A,{class:"flex-1",header:"相关资讯",data:e(t).new,"only-title":!1,"image-size":"mini","show-author":!1,"show-desc":!1,"show-click":!1,border:!1,"title-line":2,source:"new"},null,8,["data"])])])}}});export{Ke as default};
