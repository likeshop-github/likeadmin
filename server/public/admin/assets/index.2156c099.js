import{_ as V}from"./index.cb93648f.js";import{I as b,w as S}from"./element-plus.47dbc6c1.js";import N from"./menu.2ac0c1b6.js";import P from"./preview.e026b640.js";import{_ as C}from"./attr-setting.vue_vue_type_script_setup_true_lang.99c6a834.js";import{e as h}from"./index.a4d27654.js";import{a as I,s as O}from"./decoration.ee2d4cce.js";import{m as k,d as F}from"./index.b44a590f.js";import{d as w,a0 as J,r as f,b as u,w as W,am as A,o as v,c as R,a as U,W as n,O as c,u as p,j as D,P as j,M as H,T}from"./@vue.c3e77981.js";import"./@vueuse.a48d0173.js";import"./@element-plus.12c58ce2.js";import"./lodash-es.2b4cc642.js";import"./dayjs.f6b311c4.js";import"./axios.0043c060.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.4558177f.js";import"./vue-router.995b143f.js";import"./pinia.b5130627.js";import"./css-color-function.4c79dc15.js";import"./color.a28dd44c.js";import"./clone.238ad270.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.6fbc6031.js";import"./vue-clipboard3.f565fd84.js";import"./clipboard.a7169b77.js";import"./echarts.8535e5a6.js";import"./zrender.3eba8991.js";import"./tslib.60310f1a.js";import"./highlight.js.31cd7941.js";import"./@highlightjs.b8b719e9.js";import"./attr.1fb88b7c.js";import"./index.2af4968f.js";import"./picker.7f22eb38.js";import"./index.vue_vue_type_script_setup_true_lang.888f77b2.js";import"./usePaging.d25ebf19.js";import"./article.94b0cf58.js";import"./index.0d3b3a96.js";import"./picker.68d2d782.js";import"./index.9e75a7e5.js";import"./index.a29cc25f.js";import"./index.vue_vue_type_script_setup_true_lang.f14c18ae.js";import"./vue3-video-play.4813c60b.js";import"./vuedraggable.f5d349cf.js";import"./vue.5e78aba2.js";import"./sortablejs.f52b587b.js";import"./content.vue_vue_type_script_setup_true_lang.72260502.js";import"./decoration-img.2fca7861.js";import"./attr.vue_vue_type_script_setup_true_lang.475f9ec9.js";import"./content.bae61fb4.js";import"./attr.vue_vue_type_script_setup_true_lang.e1507a86.js";import"./content.vue_vue_type_script_setup_true_lang.fa92b3c5.js";import"./attr.vue_vue_type_script_setup_true_lang.b7ddb810.js";import"./add-nav.vue_vue_type_script_setup_true_lang.bc2e0a02.js";import"./content.a3a3c7c3.js";import"./attr.vue_vue_type_script_setup_true_lang.be223c7b.js";import"./content.vue_vue_type_script_setup_true_lang.afb765da.js";import"./attr.vue_vue_type_script_setup_true_lang.4f1b3bc4.js";import"./content.5eba4fc4.js";import"./attr.vue_vue_type_script_setup_true_lang.2d60ba7a.js";import"./index.vue_vue_type_script_setup_true_lang.7cea6821.js";import"./content.e5af695b.js";import"./attr.641a6444.js";import"./content.vue_vue_type_script_setup_true_lang.a4fa9b1f.js";import"./attr.vue_vue_type_script_setup_true_lang.c1356dc8.js";import"./content.16f309e9.js";import"./attr.vue_vue_type_script_setup_true_lang.53f9e273.js";import"./content.vue_vue_type_script_setup_true_lang.a9c4c100.js";import"./attr.vue_vue_type_script_setup_true_lang.3ed965a5.js";import"./content.14bfd908.js";const $={class:"decoration-pages min-w-[1100px]"},q={class:"flex flex-1 h-full justify-between"},z=w({name:"decorationPages"}),G=w({...z,setup(K){let d;(e=>{e.HOME="1",e.USER="2",e.SERVICE="3"})(d||(d={}));const m=e=>e.map(t=>{var r;return{id:k(),...((r=h[t])==null?void 0:r.options())||{}}}),a=J({[1]:{id:1,type:1,name:"\u9996\u9875\u88C5\u4FEE",pageMeta:m(["page-meta"]),pageData:m(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageMeta:m(["page-meta"]),pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageMeta:null,pageData:m(["customer-service"])}}),o=f("1"),i=f(-1),g=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),x=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageMeta)!=null?t:null}),M=u(()=>{var e,t,s,r;return i.value===-1?(t=(e=a[o.value])==null?void 0:e.pageMeta[0])!=null?t:"":(r=(s=a[o.value])==null?void 0:s.pageData[i.value])!=null?r:""}),_=async()=>{const e=await I({id:o.value});a[String(e.id)].pageData=JSON.parse(e.data),a[String(e.id)].pageMeta=e!=null&&e.meta?JSON.parse(e==null?void 0:e.meta):null},y=async()=>{const e=a[o.value];await O({...e,data:JSON.stringify(e.pageData),meta:e!=null&&e.pageMeta?JSON.stringify(e==null?void 0:e.pageMeta):null}),_()};return W(o,()=>{i.value=g.value.findIndex(e=>!e.disabled),_()},{immediate:!0}),(e,t)=>{const s=b,r=S,E=V,B=A("perms");return v(),R("div",$,[U("div",q,[n(s,{shadow:"never",class:"!border-none flex scroll-view-content","body-style":{"padding-right":0}},{default:c(()=>[n(N,{modelValue:p(o),"onUpdate:modelValue":t[0]||(t[0]=l=>D(o)?o.value=l:null),menus:p(a)},null,8,["modelValue","menus"])]),_:1}),n(P,{class:"flex-1 scroll-view-content",modelValue:p(i),"onUpdate:modelValue":t[1]||(t[1]=l=>D(i)?i.value=l:null),pageData:p(g),pageMeta:p(x)},null,8,["modelValue","pageData","pageMeta"]),n(C,{class:"w-[560px] scroll-view-content",widget:p(M)},null,8,["widget"])]),j((v(),H(E,{class:"mt-4",fixed:!1},{default:c(()=>[n(r,{type:"primary",onClick:y},{default:c(()=>[T("\u4FDD\u5B58")]),_:1})]),_:1})),[[B,["decorate:pages:save"]]])])}}});const Dt=F(G,[["__scopeId","data-v-007a7a27"]]);export{Dt as default};