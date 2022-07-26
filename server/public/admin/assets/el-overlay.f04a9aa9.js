import{m as ee,c4 as ie,ad as re,ai as V,S as ue,ac as ce,aB as oe,cV as P,L as G,cW as Z,cX as fe,a$ as me,cY as pe,aA as U,a8 as q,a9 as K,d as j,P as te,a as R,U as g,by as ve,al as ye,cx as Ee,y as J,cZ as Ce,k as H,o as I,c as X,e as _,T,h as o,t as be,w as h,f as W,W as ge,p as Te,i as x,q as Se,az as ke,X as se,c_ as Me,c$ as we,G as he,d0 as Ae,ag as Q,r as A,d1 as De,d2 as Le,K as Ie,N as Be,d3 as F,O as Oe,d4 as Ne,Y as Re,Q as $e,aw as Ye,d5 as _e,bp as ze,ak as He,bg as Ue,$ as Xe}from"./index.fe71d24f.js";import{U as ne}from"./event.776e7e11.js";import{g as Ve}from"./scroll.4a599799.js";var z=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(z||{});const le=Symbol("dialogInjectionKey"),Ge=(e,t,i)=>{let a={offsetX:0,offsetY:0};const u=l=>{const r=l.clientX,y=l.clientY,{offsetX:m,offsetY:p}=a,s=e.value.getBoundingClientRect(),f=s.left,S=s.top,B=s.width,O=s.height,D=document.documentElement.clientWidth,N=document.documentElement.clientHeight,L=-f+m,k=-S+p,M=D-f-B+m,E=N-S-O+p,w=v=>{const C=Math.min(Math.max(m+v.clientX-r,L),M),$=Math.min(Math.max(p+v.clientY-y,k),E);a={offsetX:C,offsetY:$},e.value.style.transform=`translate(${V(C)}, ${V($)})`},n=()=>{document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",w),document.addEventListener("mouseup",n)},c=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",u)},d=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",u)};ee(()=>{ie(()=>{i.value?c():d()})}),re(()=>{d()})},Ke=e=>{if(ue(e)||ce("[useLockscreen]","You need to pass a ref param to this function"),!oe||P(document.body,"el-popup-parent--hidden"))return;let t=0,i=!1,a="0",u=0;const c=()=>{pe(document.body,"el-popup-parent--hidden"),i&&(document.body.style.paddingRight=a)};G(e,d=>{if(!d){c();return}i=!P(document.body,"el-popup-parent--hidden"),i&&(a=document.body.style.paddingRight,u=Number.parseInt(Z(document.body,"paddingRight"),10)),t=Ve();const l=document.documentElement.clientHeight<document.body.scrollHeight,r=Z(document.body,"overflowY");t>0&&(l||r==="scroll")&&i&&(document.body.style.paddingRight=`${u+t}px`),fe(document.body,"el-popup-parent--hidden")}),me(()=>c())},ae=e=>{if(!e)return{onClick:U,onMousedown:U,onMouseup:U};let t=!1,i=!1;return{onClick:d=>{t&&i&&e(d),t=i=!1},onMousedown:d=>{t=d.target===d.currentTarget},onMouseup:d=>{i=d.target===d.currentTarget}}},We=q({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:K([String,Array,Object])},zIndex:{type:K([String,Number])}}),xe={click:e=>e instanceof MouseEvent};var qe=j({name:"ElOverlay",props:We,emits:xe,setup(e,{slots:t,emit:i}){const a=te("overlay"),u=r=>{i("click",r)},{onClick:c,onMousedown:d,onMouseup:l}=ae(e.customMaskEvent?void 0:u);return()=>e.mask?R("div",{class:[a.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:d,onMouseup:l},[g(t,"default")],z.STYLE|z.CLASS|z.PROPS,["onClick","onMouseup","onMousedown"]):ve("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[g(t,"default")])}});const je=qe,de=q({center:{type:Boolean,default:!1},closeIcon:{type:ye,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Pe={close:()=>!0},Ze=["aria-label"],Je=["id"],Qe={name:"ElDialogContent"},Fe=j({...Qe,props:de,emits:Pe,setup(e){const t=e,{t:i}=Ee(),{Close:a}=Me,{dialogRef:u,headerRef:c,bodyId:d,ns:l,style:r}=J(le),{focusTrapRef:y}=J(Ce),m=we(y,u),p=H(()=>t.draggable);return Ge(u,c,p),(s,f)=>(I(),X("div",{ref:o(m),class:T([o(l).b(),o(l).is("fullscreen",s.fullscreen),o(l).is("draggable",o(p)),{[o(l).m("center")]:s.center},s.customClass]),style:Se(o(r)),tabindex:"-1",onClick:f[1]||(f[1]=ke(()=>{},["stop"]))},[_("header",{ref_key:"headerRef",ref:c,class:T(o(l).e("header"))},[g(s.$slots,"header",{},()=>[_("span",{role:"heading",class:T(o(l).e("title"))},be(s.title),3)]),s.showClose?(I(),X("button",{key:0,"aria-label":o(i)("el.dialog.close"),class:T(o(l).e("headerbtn")),type:"button",onClick:f[0]||(f[0]=S=>s.$emit("close"))},[R(o(Te),{class:T(o(l).e("close"))},{default:h(()=>[(I(),W(ge(s.closeIcon||o(a))))]),_:1},8,["class"])],10,Ze)):x("v-if",!0)],2),_("div",{id:o(d),class:T(o(l).e("body"))},[g(s.$slots,"default")],10,Je),s.$slots.footer?(I(),X("footer",{key:0,class:T(o(l).e("footer"))},[g(s.$slots,"footer")],2)):x("v-if",!0)],6))}});var eo=se(Fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const oo=q({...de,appendToBody:{type:Boolean,default:!1},beforeClose:{type:K(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),to={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ne]:e=>he(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},so=(e,t)=>{const a=Be().emit,{nextZIndex:u}=Ae();let c="";const d=Q(),l=Q(),r=A(!1),y=A(!1),m=A(!1),p=A(e.zIndex||u());let s,f;const S=De("namespace",Le),B=H(()=>{const b={},Y=`--${S.value}-dialog`;return e.fullscreen||(e.top&&(b[`${Y}-margin-top`]=e.top),e.width&&(b[`${Y}-width`]=V(e.width))),b});function O(){a("opened")}function D(){a("closed"),a(ne,!1),e.destroyOnClose&&(m.value=!1)}function N(){a("close")}function L(){f==null||f(),s==null||s(),e.openDelay&&e.openDelay>0?{stop:s}=F(()=>w(),e.openDelay):w()}function k(){s==null||s(),f==null||f(),e.closeDelay&&e.closeDelay>0?{stop:f}=F(()=>n(),e.closeDelay):n()}function M(){function b(Y){Y||(y.value=!0,r.value=!1)}e.beforeClose?e.beforeClose(b):k()}function E(){e.closeOnClickModal&&M()}function w(){!oe||(r.value=!0)}function n(){r.value=!1}function v(){a("openAutoFocus")}function C(){a("closeAutoFocus")}e.lockScroll&&Ke(r);function $(){e.closeOnPressEscape&&M()}return G(()=>e.modelValue,b=>{b?(y.value=!1,L(),m.value=!0,a("open"),p.value=e.zIndex?p.value++:u(),Ie(()=>{t.value&&(t.value.scrollTop=0)})):r.value&&k()}),G(()=>e.fullscreen,b=>{!t.value||(b?(c=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=c)}),ee(()=>{e.modelValue&&(r.value=!0,m.value=!0,L())}),{afterEnter:O,afterLeave:D,beforeLeave:N,handleClose:M,onModalClick:E,close:k,doClose:n,onOpenAutoFocus:v,onCloseAutoFocus:C,onCloseRequested:$,titleId:d,bodyId:l,closed:y,style:B,rendered:m,visible:r,zIndex:p}},no=["aria-label","aria-labelledby","aria-describedby"],lo={name:"ElDialog"},ao=j({...lo,props:oo,emits:to,setup(e,{expose:t}){const i=e,a=Oe();Ne({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},H(()=>!!a.title));const u=te("dialog"),c=A(),d=A(),l=A(),{visible:r,titleId:y,bodyId:m,style:p,rendered:s,zIndex:f,afterEnter:S,afterLeave:B,beforeLeave:O,handleClose:D,onModalClick:N,onOpenAutoFocus:L,onCloseAutoFocus:k,onCloseRequested:M}=so(i,c);Re(le,{dialogRef:c,headerRef:d,bodyId:m,ns:u,rendered:s,style:p});const E=ae(N),w=H(()=>i.draggable&&!i.fullscreen);return t({visible:r,dialogContentRef:l}),(n,v)=>(I(),W(Ue,{to:"body",disabled:!n.appendToBody},[R(He,{name:"dialog-fade",onAfterEnter:o(S),onAfterLeave:o(B),onBeforeLeave:o(O),persisted:""},{default:h(()=>[$e(R(o(je),{"custom-mask-event":"",mask:n.modal,"overlay-class":n.modalClass,"z-index":o(f)},{default:h(()=>[_("div",{role:"dialog","aria-modal":"true","aria-label":n.title||void 0,"aria-labelledby":n.title?void 0:o(y),"aria-describedby":o(m),class:T(`${o(u).namespace.value}-overlay-dialog`),onClick:v[0]||(v[0]=(...C)=>o(E).onClick&&o(E).onClick(...C)),onMousedown:v[1]||(v[1]=(...C)=>o(E).onMousedown&&o(E).onMousedown(...C)),onMouseup:v[2]||(v[2]=(...C)=>o(E).onMouseup&&o(E).onMouseup(...C))},[R(o(_e),{loop:"",trapped:o(r),"focus-start-el":"container",onFocusAfterTrapped:o(L),onFocusAfterReleased:o(k),onReleaseRequested:o(M)},{default:h(()=>[o(s)?(I(),W(eo,{key:0,ref_key:"dialogContentRef",ref:l,"custom-class":n.customClass,center:n.center,"close-icon":n.closeIcon,draggable:o(w),fullscreen:n.fullscreen,"show-close":n.showClose,title:n.title,onClose:o(D)},ze({header:h(()=>[n.$slots.title?g(n.$slots,"title",{key:1}):g(n.$slots,"header",{key:0,close:o(D),titleId:o(y),titleClass:o(u).e("title")})]),default:h(()=>[g(n.$slots,"default")]),_:2},[n.$slots.footer?{name:"footer",fn:h(()=>[g(n.$slots,"footer")])}:void 0]),1032,["custom-class","center","close-icon","draggable","fullscreen","show-close","title","onClose"])):x("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onReleaseRequested"])],42,no)]),_:3},8,["mask","overlay-class","z-index"]),[[Ye,o(r)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var io=se(ao,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const fo=Xe(io);export{fo as E};