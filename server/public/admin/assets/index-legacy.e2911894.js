!function(){var e=document.createElement("style");e.innerHTML=".dialog-body[data-v-b8e715d9]{white-space:pre-line}\n",document.head.appendChild(e),System.register(["./element-plus-legacy.9a978554.js","./@vue-legacy.6b85f8d1.js","./index-legacy.bb301f21.js"],(function(e){"use strict";var t,l,n,o,a,c,d,i,s,r,u,p,f,m,y,v,g,b;return{setters:[e=>{t=e.w,l=e.G},e=>{n=e.d,o=e.r,a=e.n,c=e.E,d=e.o,i=e.c,s=e.a,r=e.J,u=e.W,p=e.aa,f=e.O,m=e.U,y=e.V,v=e.M,g=e.T},e=>{b=e.d}],execute:function(){const B=n({props:{title:{type:String,default:""},content:{type:String,default:""},confirmButtonText:{type:[String,Boolean],default:"确定"},cancelButtonText:{type:[String,Boolean],default:"取消"},width:{type:String,default:"400px"},disabled:{type:Boolean,default:!1},async:{type:Boolean,default:!1},clickModalClose:{type:Boolean,default:!1},center:{type:Boolean,default:!1},customClass:{type:String,default:""}},emits:["confirm","cancel","close","open"],setup(e,{emit:t}){const l=o(!1),n=()=>{l.value=!1,a((()=>{t("close")}))};return c("visible",l),{visible:l,handleEvent:l=>{t(l),e.async&&"cancel"!==l||n()},close:n,open:()=>{e.disabled||(t("open"),l.value=!0)}}}}),h={class:"dialog"},C={class:"dialog-footer"};e("P",b(B,[["render",function(e,n,o,a,c,b){const B=t,k=l;return d(),i("div",h,[s("div",{class:"dialog__trigger",onClick:n[0]||(n[0]=(...t)=>e.open&&e.open(...t))},[r(e.$slots,"trigger",{},void 0,!0)]),u(k,{modelValue:e.visible,"onUpdate:modelValue":n[3]||(n[3]=t=>e.visible=t),"custom-class":e.customClass,center:e.center,"append-to-body":!0,width:e.width,"close-on-click-modal":e.clickModalClose,onClosed:e.close},p({footer:f((()=>[s("div",C,[e.cancelButtonText?(d(),v(B,{key:0,onClick:n[1]||(n[1]=t=>e.handleEvent("cancel"))},{default:f((()=>[m(y(e.cancelButtonText),1)])),_:1})):g("",!0),e.confirmButtonText?(d(),v(B,{key:1,type:"primary",onClick:n[2]||(n[2]=t=>e.handleEvent("confirm"))},{default:f((()=>[m(y(e.confirmButtonText),1)])),_:1})):g("",!0)])])),default:f((()=>[r(e.$slots,"default",{},(()=>[m(y(e.content),1)]),!0)])),_:2},[e.title?{name:"header",fn:f((()=>[m(y(e.title),1)]))}:void 0]),1032,["modelValue","custom-class","center","width","close-on-click-modal","onClosed"])])}],["__scopeId","data-v-b8e715d9"]]))}}}))}();