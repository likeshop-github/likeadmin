import{_ as V}from"./index.4042e926.js";import{I as b,w as S}from"./element-plus.504c2ead.js";import N from"./menu.4cf86225.js";import P from"./preview.388e7f1a.js";import{_ as C}from"./attr-setting.vue_vue_type_script_setup_true_lang.07991794.js";import{e as h}from"./index.4e837968.js";import{a as I,s as O}from"./decoration.476b869d.js";import{m as k,d as F}from"./index.0c7ef231.js";import{d as w,a0 as J,r as f,b as u,w as W,am as A,o as v,c as R,a as U,W as n,O as c,u as p,j as D,P as j,M as H,T}from"./@vue.2527ecfd.js";import"./@vueuse.b9e34262.js";import"./@element-plus.fec869e0.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.4558177f.js";import"./vue-router.8c5829ce.js";import"./pinia.e120ac86.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.5016c48c.js";import"./zrender.58d022a1.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.df1e15f2.js";import"./attr.c13f5fba.js";import"./index.9c5f1e08.js";import"./picker.29e71450.js";import"./index.vue_vue_type_script_setup_true_lang.6dfc20ab.js";import"./usePaging.fb804618.js";import"./article.b1b12df1.js";import"./index.e8a4af86.js";import"./picker.9a7f9a4c.js";import"./index.5279bb2e.js";import"./index.a3cf6ef4.js";import"./index.vue_vue_type_script_setup_true_lang.4605a344.js";import"./vue3-video-play.370e540b.js";import"./vuedraggable.be58ca86.js";import"./vue.fd43c58d.js";import"./sortablejs.f52b587b.js";import"./content.vue_vue_type_script_setup_true_lang.7e4b7629.js";import"./decoration-img.86f34357.js";import"./attr.vue_vue_type_script_setup_true_lang.9dc62e0e.js";import"./content.aca332c6.js";import"./attr.vue_vue_type_script_setup_true_lang.6669731d.js";import"./content.vue_vue_type_script_setup_true_lang.5b76e851.js";import"./attr.vue_vue_type_script_setup_true_lang.59f29ca1.js";import"./add-nav.vue_vue_type_script_setup_true_lang.b70e0af3.js";import"./content.8498074e.js";import"./attr.vue_vue_type_script_setup_true_lang.b058705d.js";import"./content.vue_vue_type_script_setup_true_lang.9bde94be.js";import"./attr.vue_vue_type_script_setup_true_lang.0ae807b9.js";import"./content.cffe85e7.js";import"./attr.vue_vue_type_script_setup_true_lang.9586e03e.js";import"./index.vue_vue_type_script_setup_true_lang.4d1a9f69.js";import"./content.3c37c5ee.js";import"./attr.113571af.js";import"./content.vue_vue_type_script_setup_true_lang.6477ef6f.js";import"./attr.vue_vue_type_script_setup_true_lang.b6da480d.js";import"./content.3ac47057.js";import"./attr.vue_vue_type_script_setup_true_lang.741b9c99.js";import"./content.vue_vue_type_script_setup_true_lang.82da0202.js";import"./attr.vue_vue_type_script_setup_true_lang.1cccf675.js";import"./content.822a988a.js";const $={class:"decoration-pages min-w-[1100px]"},q={class:"flex flex-1 h-full justify-between"},z=w({name:"decorationPages"}),G=w({...z,setup(K){let d;(e=>{e.HOME="1",e.USER="2",e.SERVICE="3"})(d||(d={}));const m=e=>e.map(t=>{var r;return{id:k(),...((r=h[t])==null?void 0:r.options())||{}}}),a=J({[1]:{id:1,type:1,name:"\u9996\u9875\u88C5\u4FEE",pageMeta:m(["page-meta"]),pageData:m(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageMeta:m(["page-meta"]),pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageMeta:null,pageData:m(["customer-service"])}}),o=f("1"),i=f(-1),g=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),x=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageMeta)!=null?t:null}),M=u(()=>{var e,t,s,r;return i.value===-1?(t=(e=a[o.value])==null?void 0:e.pageMeta[0])!=null?t:"":(r=(s=a[o.value])==null?void 0:s.pageData[i.value])!=null?r:""}),_=async()=>{const e=await I({id:o.value});a[String(e.id)].pageData=JSON.parse(e.data),a[String(e.id)].pageMeta=e!=null&&e.meta?JSON.parse(e==null?void 0:e.meta):null},y=async()=>{const e=a[o.value];await O({...e,data:JSON.stringify(e.pageData),meta:e!=null&&e.pageMeta?JSON.stringify(e==null?void 0:e.pageMeta):null}),_()};return W(o,()=>{i.value=g.value.findIndex(e=>!e.disabled),_()},{immediate:!0}),(e,t)=>{const s=b,r=S,E=V,B=A("perms");return v(),R("div",$,[U("div",q,[n(s,{shadow:"never",class:"!border-none flex scroll-view-content","body-style":{"padding-right":0}},{default:c(()=>[n(N,{modelValue:p(o),"onUpdate:modelValue":t[0]||(t[0]=l=>D(o)?o.value=l:null),menus:p(a)},null,8,["modelValue","menus"])]),_:1}),n(P,{class:"flex-1 scroll-view-content",modelValue:p(i),"onUpdate:modelValue":t[1]||(t[1]=l=>D(i)?i.value=l:null),pageData:p(g),pageMeta:p(x)},null,8,["modelValue","pageData","pageMeta"]),n(C,{class:"w-[560px] scroll-view-content",widget:p(M)},null,8,["widget"])]),j((v(),H(E,{class:"mt-4",fixed:!1},{default:c(()=>[n(r,{type:"primary",onClick:y},{default:c(()=>[T("\u4FDD\u5B58")]),_:1})]),_:1})),[[B,["decorate:pages:save"]]])])}}});const Dt=F(G,[["__scopeId","data-v-007a7a27"]]);export{Dt as default};