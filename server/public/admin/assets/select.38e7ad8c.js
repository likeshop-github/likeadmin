import{d as E,x as S,m as N,l as W,C as L,D as M,F as V,n as $,e as m,o as i,c as p,a as s,w as n,i as _,G as I,f as u,g as R,H as b,I as z,J as h,h as D,K as T,L as U}from"./index.6235ba03.js";const G={class:"icon-select"},H=u("div",{class:"m-b-12"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),J={style:{height:"300px"}},K={class:"flex flex-wrap"},O={class:"flex w-4"},P=D("\u65E0"),A=E({__name:"select",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(d,{emit:r}){const v=T(),c=S(),e=N({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),k=()=>{e.inputFocus=e.popoverVisible=!0},w=()=>{e.inputFocus=!1,e.popoverVisible=e.mouseoverSelect},C=t=>{e.mouseoverSelect=e.popoverVisible=!1,r("update:modelValue",t),r("change",t)},F=()=>{r("update:modelValue",""),r("change","")},x=W(()=>{if(!e.inputValue)return v;const t=e.inputValue.toLowerCase();return v.filter(o=>{if(o.toLowerCase().indexOf(t)!==-1)return o})}),g=()=>{V(()=>{var o;const t=(o=c.value)==null?void 0:o.$el.offsetWidth;e.popoverWidth=t<300?300:t})};return L(document.body,"click",()=>{e.popoverVisible=!!(e.inputFocus||e.mouseoverSelect)}),M(()=>e.popoverVisible,async t=>{var o,a;await V(),t?(o=c.value)==null||o.focus():(a=c.value)==null||a.blur()}),$(()=>{g()}),(t,o)=>{const a=U,f=m("el-button"),y=m("el-scrollbar"),B=m("el-popover");return i(),p("div",G,[s(B,{visible:e.popoverVisible,"onUpdate:visible":o[3]||(o[3]=l=>e.popoverVisible=l),width:e.popoverWidth},{reference:n(()=>[s(_(I),{ref_key:"inputRef",ref:c,modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=l=>e.inputValue=l),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",disabled:d.disabled,onFocus:k,onBlur:w},{prepend:n(()=>[u("div",O,[d.modelValue?(i(),R(a,{key:d.modelValue,name:d.modelValue},null,8,["name"])):(i(),p(b,{key:1},[P],64))])]),append:n(()=>[s(f,{link:""},{default:n(()=>[s(a,{name:"el-icon-Close",size:18,onClick:F})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:n(()=>[u("div",{onMouseover:o[0]||(o[0]=h(l=>e.mouseoverSelect=!0,["stop"])),onMouseout:o[1]||(o[1]=h(l=>e.mouseoverSelect=!1,["stop"]))},[u("div",null,[H,u("div",J,[s(y,null,{default:n(()=>[u("div",K,[(i(!0),p(b,null,z(_(x),l=>(i(),p("div",{key:l,class:"m-4"},[s(f,{onClick:j=>C(l)},{default:n(()=>[s(a,{name:l,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}});export{A as _};
