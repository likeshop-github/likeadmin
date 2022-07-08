import{d as ue,P as te,bx as oa,p as Ee,cr as Be,dj as Ke,d4 as na,y as me,k as w,X as ye,s as T,o as f,c as M,i as j,f as H,az as ie,w as I,a as W,T as x,V as se,e as oe,cM as Fe,ct as Oe,r as V,dP as sa,bQ as de,g as ta,t as ae,N as ra,dQ as we,ab as Pe,dI as ia,b7 as De,aA as da,dR as ca,Y as ua,l as pa,L as le,bG as ha,m as qe,K as ne,aB as Ue,dd as K,dS as fe,dT as Re,de as fa,ay as va,dJ as ga,df as ma,z as ba,B as ka,I as ya,M as Ca,dO as wa,af as Na,bR as Ea,Q as he,v as $a,co as _a,q as Sa,aw as Le,U as Va}from"./index.ee88eab4.js";import{E as Ta}from"./el-checkbox.33ba28d3.js";import{E as za}from"./el-radio.998073d2.js";import{l as ce}from"./isEqual.07108840.js";import{U as be,C as ke}from"./event.776e7e11.js";import{u as Ie,c as Me}from"./arrays.6dddb988.js";import{s as xa}from"./scroll.5978826a.js";import{b as Pa}from"./_baseFlatten.81e5edf0.js";import{E as Da,i as La}from"./el-input.4658d917.js";import{E as Ia,t as Ma}from"./index.b3241040.js";import{C as Ha,d as Aa}from"./el-tag.9cb9c8f3.js";import{i as Ba}from"./validator.5e187f49.js";var Ka=1/0;function Fa(e){var a=e==null?0:e.length;return a?Pa(e,Ka):[]}var Oa=ue({name:"NodeContent",setup(){return{ns:te("cascader-node")}},render(){const{ns:e}=this,{node:a,panel:l}=this.$parent,{data:n,label:s}=a,{renderLabelFn:c}=l;return oa("span",{class:e.e("label")},c?c({node:a,data:n}):s)}});const $e=Symbol(),qa=ue({name:"ElCascaderNode",components:{ElCheckbox:Ta,ElRadio:za,NodeContent:Oa,ElIcon:Ee,Check:Be,Loading:Ke,ArrowRight:na},props:{node:{type:Object,required:!0},menuId:String},emits:["expand"],setup(e,{emit:a}){const l=me($e),n=te("cascader-node"),s=w(()=>l.isHoverMenu),c=w(()=>l.config.multiple),d=w(()=>l.config.checkStrictly),u=w(()=>{var k;return(k=l.checkedNodes[0])==null?void 0:k.uid}),v=w(()=>e.node.isDisabled),g=w(()=>e.node.isLeaf),b=w(()=>d.value&&!g.value||!v.value),_=w(()=>z(l.expandingNode)),y=w(()=>d.value&&l.checkedNodes.some(z)),z=k=>{var D;const{level:G,uid:ee}=e.node;return((D=k==null?void 0:k.pathNodes[G-1])==null?void 0:D.uid)===ee},P=()=>{_.value||l.expandNode(e.node)},O=k=>{const{node:D}=e;k!==D.checked&&l.handleCheckChange(D,k)},t=()=>{l.lazyLoad(e.node,()=>{g.value||P()})},S=k=>{!s.value||(A(),!g.value&&a("expand",k))},A=()=>{const{node:k}=e;!b.value||k.loading||(k.loaded?P():t())},B=()=>{s.value&&!g.value||(g.value&&!v.value&&!d.value&&!c.value?q(!0):A())},Z=k=>{d.value?(O(k),e.node.loaded&&P()):q(k)},q=k=>{e.node.loaded?(O(k),!d.value&&P()):t()};return{panel:l,isHoverMenu:s,multiple:c,checkStrictly:d,checkedNodeId:u,isDisabled:v,isLeaf:g,expandable:b,inExpandingPath:_,inCheckedPath:y,ns:n,handleHoverExpand:S,handleExpand:A,handleClick:B,handleCheck:q,handleSelectCheck:Z}}}),Ua=["id","aria-haspopup","aria-owns","aria-expanded","tabindex"],Ra=oe("span",null,null,-1);function ja(e,a,l,n,s,c){const d=T("el-checkbox"),u=T("el-radio"),v=T("check"),g=T("el-icon"),b=T("node-content"),_=T("loading"),y=T("arrow-right");return f(),M("li",{id:`${e.menuId}-${e.node.uid}`,role:"menuitem","aria-haspopup":!e.isLeaf,"aria-owns":e.isLeaf?null:e.menuId,"aria-expanded":e.inExpandingPath,tabindex:e.expandable?-1:void 0,class:x([e.ns.b(),e.ns.is("selectable",e.checkStrictly),e.ns.is("active",e.node.checked),e.ns.is("disabled",!e.expandable),e.inExpandingPath&&"in-active-path",e.inCheckedPath&&"in-checked-path"]),onMouseenter:a[2]||(a[2]=(...z)=>e.handleHoverExpand&&e.handleHoverExpand(...z)),onFocus:a[3]||(a[3]=(...z)=>e.handleHoverExpand&&e.handleHoverExpand(...z)),onClick:a[4]||(a[4]=(...z)=>e.handleClick&&e.handleClick(...z))},[j(" prefix "),e.multiple?(f(),H(d,{key:0,"model-value":e.node.checked,indeterminate:e.node.indeterminate,disabled:e.isDisabled,onClick:a[0]||(a[0]=ie(()=>{},["stop"])),"onUpdate:modelValue":e.handleSelectCheck},null,8,["model-value","indeterminate","disabled","onUpdate:modelValue"])):e.checkStrictly?(f(),H(u,{key:1,"model-value":e.checkedNodeId,label:e.node.uid,disabled:e.isDisabled,"onUpdate:modelValue":e.handleSelectCheck,onClick:a[1]||(a[1]=ie(()=>{},["stop"]))},{default:I(()=>[j(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),Ra]),_:1},8,["model-value","label","disabled","onUpdate:modelValue"])):e.isLeaf&&e.node.checked?(f(),H(g,{key:2,class:x(e.ns.e("prefix"))},{default:I(()=>[W(v)]),_:1},8,["class"])):j("v-if",!0),j(" content "),W(b),j(" postfix "),e.isLeaf?j("v-if",!0):(f(),M(se,{key:3},[e.node.loading?(f(),H(g,{key:0,class:x([e.ns.is("loading"),e.ns.e("postfix")])},{default:I(()=>[W(_)]),_:1},8,["class"])):(f(),H(g,{key:1,class:x(["arrow-right",e.ns.e("postfix")])},{default:I(()=>[W(y)]),_:1},8,["class"]))],64))],42,Ua)}var Wa=ye(qa,[["render",ja],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);const Za=ue({name:"ElCascaderMenu",components:{Loading:Ke,ElIcon:Ee,ElScrollbar:Fe,ElCascaderNode:Wa},props:{nodes:{type:Array,required:!0},index:{type:Number,required:!0}},setup(e){const a=ra(),l=te("cascader-menu"),{t:n}=Oe(),s=sa();let c=null,d=null;const u=me($e),v=V(null),g=w(()=>!e.nodes.length),b=w(()=>!u.initialLoaded),_=w(()=>`cascader-menu-${s}-${e.index}`),y=t=>{c=t.target},z=t=>{if(!(!u.isHoverMenu||!c||!v.value))if(c.contains(t.target)){P();const S=a.vnode.el,{left:A}=S.getBoundingClientRect(),{offsetWidth:B,offsetHeight:Z}=S,q=t.clientX-A,k=c.offsetTop,D=k+c.offsetHeight;v.value.innerHTML=`
          <path style="pointer-events: auto;" fill="transparent" d="M${q} ${k} L${B} 0 V${k} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${q} ${D} L${B} ${Z} V${D} Z" />
        `}else d||(d=window.setTimeout(O,u.config.hoverThreshold))},P=()=>{!d||(clearTimeout(d),d=null)},O=()=>{!v.value||(v.value.innerHTML="",P())};return{ns:l,panel:u,hoverZone:v,isEmpty:g,isLoading:b,menuId:_,t:n,handleExpand:y,handleMouseMove:z,clearHoverZone:O}}});function Ga(e,a,l,n,s,c){const d=T("el-cascader-node"),u=T("loading"),v=T("el-icon"),g=T("el-scrollbar");return f(),H(g,{key:e.menuId,tag:"ul",role:"menu",class:x(e.ns.b()),"wrap-class":e.ns.e("wrap"),"view-class":[e.ns.e("list"),e.ns.is("empty",e.isEmpty)],onMousemove:e.handleMouseMove,onMouseleave:e.clearHoverZone},{default:I(()=>{var b;return[(f(!0),M(se,null,de(e.nodes,_=>(f(),H(d,{key:_.uid,node:_,"menu-id":e.menuId,onExpand:e.handleExpand},null,8,["node","menu-id","onExpand"]))),128)),e.isLoading?(f(),M("div",{key:0,class:x(e.ns.e("empty-text"))},[W(v,{size:"14",class:x(e.ns.is("loading"))},{default:I(()=>[W(u)]),_:1},8,["class"]),ta(" "+ae(e.t("el.cascader.loading")),1)],2)):e.isEmpty?(f(),M("div",{key:1,class:x(e.ns.e("empty-text"))},ae(e.t("el.cascader.noData")),3)):(b=e.panel)!=null&&b.isHoverMenu?(f(),M("svg",{key:2,ref:"hoverZone",class:x(e.ns.e("hover-zone"))},null,2)):j("v-if",!0)]}),_:1},8,["class","wrap-class","view-class","onMousemove","onMouseleave"])}var Ya=ye(Za,[["render",Ga],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]),_e=(e=>(e.CLICK="click",e.HOVER="hover",e))(_e||{});let Qa=0;const Xa=e=>{const a=[e];let{parent:l}=e;for(;l;)a.unshift(l),l=l.parent;return a};class re{constructor(a,l,n,s=!1){this.data=a,this.config=l,this.parent=n,this.root=s,this.uid=Qa++,this.checked=!1,this.indeterminate=!1,this.loading=!1;const{value:c,label:d,children:u}=l,v=a[u],g=Xa(this);this.level=s?0:n?n.level+1:1,this.value=a[c],this.label=a[d],this.pathNodes=g,this.pathValues=g.map(b=>b.value),this.pathLabels=g.map(b=>b.label),this.childrenData=v,this.children=(v||[]).map(b=>new re(b,l,this)),this.loaded=!l.lazy||this.isLeaf||!we(v)}get isDisabled(){const{data:a,parent:l,config:n}=this,{disabled:s,checkStrictly:c}=n;return(Pe(s)?s(a,this):!!a[s])||!c&&(l==null?void 0:l.isDisabled)}get isLeaf(){const{data:a,config:l,childrenData:n,loaded:s}=this,{lazy:c,leaf:d}=l,u=Pe(d)?d(a,this):a[d];return ia(u)?c&&!s?!1:!(Array.isArray(n)&&n.length):!!u}get valueByOption(){return this.config.emitPath?this.pathValues:this.value}appendChild(a){const{childrenData:l,children:n}=this,s=new re(a,this.config,this);return Array.isArray(l)?l.push(a):this.childrenData=[a],n.push(s),s}calcText(a,l){const n=a?this.pathLabels.join(l):this.label;return this.text=n,n}broadcast(a,...l){const n=`onParent${De(a)}`;this.children.forEach(s=>{s&&(s.broadcast(a,...l),s[n]&&s[n](...l))})}emit(a,...l){const{parent:n}=this,s=`onChild${De(a)}`;n&&(n[s]&&n[s](...l),n.emit(a,...l))}onParentCheck(a){this.isDisabled||this.setCheckState(a)}onChildCheck(){const{children:a}=this,l=a.filter(s=>!s.isDisabled),n=l.length?l.every(s=>s.checked):!1;this.setCheckState(n)}setCheckState(a){const l=this.children.length,n=this.children.reduce((s,c)=>{const d=c.checked?1:c.indeterminate?.5:0;return s+d},0);this.checked=this.loaded&&this.children.filter(s=>!s.isDisabled).every(s=>s.loaded&&s.checked)&&a,this.indeterminate=this.loaded&&n!==l&&n>0}doCheck(a){if(this.checked===a)return;const{checkStrictly:l,multiple:n}=this.config;l||!n?this.checked=a:(this.broadcast("check",a),this.setCheckState(a),this.emit("check"))}}const Ne=(e,a)=>e.reduce((l,n)=>(n.isLeaf?l.push(n):(!a&&l.push(n),l=l.concat(Ne(n.children,a))),l),[]);class He{constructor(a,l){this.config=l;const n=(a||[]).map(s=>new re(s,this.config));this.nodes=n,this.allNodes=Ne(n,!1),this.leafNodes=Ne(n,!0)}getNodes(){return this.nodes}getFlattedNodes(a){return a?this.leafNodes:this.allNodes}appendNode(a,l){const n=l?l.appendChild(a):new re(a,this.config);l||this.nodes.push(n),this.allNodes.push(n),n.isLeaf&&this.leafNodes.push(n)}appendNodes(a,l){a.forEach(n=>this.appendNode(n,l))}getNodeByValue(a,l=!1){return!a&&a!==0?null:this.getFlattedNodes(l).find(s=>ce(s.value,a)||ce(s.pathValues,a))||null}getSameNode(a){return a&&this.getFlattedNodes(!1).find(({value:n,level:s})=>ce(a.value,n)&&a.level===s)||null}}const je={modelValue:[Number,String,Array],options:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})}},Ja={expandTrigger:_e.CLICK,multiple:!1,checkStrictly:!1,emitPath:!0,lazy:!1,lazyLoad:da,value:"value",label:"label",children:"children",leaf:"leaf",disabled:"disabled",hoverThreshold:500},el=e=>w(()=>({...Ja,...e.props})),Ae=e=>{if(!e)return 0;const a=e.id.split("-");return Number(a[a.length-2])},al=e=>{if(!e)return;const a=e.querySelector("input");a?a.click():ca(e)&&e.click()},ll=(e,a)=>{const l=a.slice(0),n=l.map(c=>c.uid),s=e.reduce((c,d)=>{const u=n.indexOf(d.uid);return u>-1&&(c.push(d),l.splice(u,1),n.splice(u,1)),c},[]);return s.push(...l),s},ol=ue({name:"ElCascaderPanel",components:{ElCascaderMenu:Ya},props:{...je,border:{type:Boolean,default:!0},renderLabel:Function},emits:[be,ke,"close","expand-change"],setup(e,{emit:a,slots:l}){let n=!1;const s=te("cascader"),c=el(e);let d=null;const u=V(!0),v=V([]),g=V(null),b=V([]),_=V(null),y=V([]),z=w(()=>c.value.expandTrigger===_e.HOVER),P=w(()=>e.renderLabel||l.default),O=()=>{const{options:i}=e,p=c.value;n=!1,d=new He(i,p),b.value=[d.getNodes()],p.lazy&&we(e.options)?(u.value=!1,t(void 0,h=>{h&&(d=new He(h,p),b.value=[d.getNodes()]),u.value=!0,G(!1,!0)})):G(!1,!0)},t=(i,p)=>{const h=c.value;i=i||new re({},h,void 0,!0),i.loading=!0;const N=C=>{const E=i,U=E.root?null:E;C&&(d==null||d.appendNodes(C,U)),E.loading=!1,E.loaded=!0,E.childrenData=E.childrenData||[],p&&p(C)};h.lazyLoad(i,N)},S=(i,p)=>{var h;const{level:N}=i,C=b.value.slice(0,N);let E;i.isLeaf?E=i.pathNodes[N-2]:(E=i,C.push(i.children)),((h=_.value)==null?void 0:h.uid)!==(E==null?void 0:E.uid)&&(_.value=i,b.value=C,!p&&a("expand-change",(i==null?void 0:i.pathValues)||[]))},A=(i,p,h=!0)=>{const{checkStrictly:N,multiple:C}=c.value,E=y.value[0];n=!0,!C&&(E==null||E.doCheck(!1)),i.doCheck(p),D(),h&&!C&&!N&&a("close"),!h&&!C&&!N&&B(i)},B=i=>{!i||(i=i.parent,B(i),i&&S(i))},Z=i=>d==null?void 0:d.getFlattedNodes(i),q=i=>{var p;return(p=Z(i))==null?void 0:p.filter(h=>h.checked!==!1)},k=()=>{y.value.forEach(i=>i.doCheck(!1)),D()},D=()=>{var i;const{checkStrictly:p,multiple:h}=c.value,N=y.value,C=q(!p),E=ll(N,C),U=E.map($=>$.valueByOption);y.value=E,g.value=h?U:(i=U[0])!=null?i:null},G=(i=!1,p=!1)=>{const{modelValue:h}=e,{lazy:N,multiple:C,checkStrictly:E}=c.value,U=!E;if(!(!u.value||n||!p&&ce(h,g.value)))if(N&&!i){const Y=Ie(Fa(Me(h))).map(F=>d==null?void 0:d.getNodeByValue(F)).filter(F=>!!F&&!F.loaded&&!F.loading);Y.length?Y.forEach(F=>{t(F,()=>G(!1,p))}):G(!0,p)}else{const $=C?Me(h):[h],Y=Ie($.map(F=>d==null?void 0:d.getNodeByValue(F,U)));ee(Y,!1),g.value=h}},ee=(i,p=!0)=>{const{checkStrictly:h}=c.value,N=y.value,C=i.filter($=>!!$&&(h||$.isLeaf)),E=d==null?void 0:d.getSameNode(_.value),U=p&&E||C[0];U?U.pathNodes.forEach($=>S($,!0)):_.value=null,N.forEach($=>$.doCheck(!1)),C.forEach($=>$.doCheck(!0)),y.value=C,ne(pe)},pe=()=>{!Ue||v.value.forEach(i=>{const p=i==null?void 0:i.$el;if(p){const h=p.querySelector(`.${s.namespace.value}-scrollbar__wrap`),N=p.querySelector(`.${s.b("node")}.${s.is("active")}`)||p.querySelector(`.${s.b("node")}.in-active-path`);xa(h,N)}})},X=i=>{const p=i.target,{code:h}=i;switch(h){case K.up:case K.down:{i.preventDefault();const N=h===K.up?-1:1;fe(Re(p,N,`.${s.b("node")}[tabindex="-1"]`));break}case K.left:{i.preventDefault();const N=v.value[Ae(p)-1],C=N==null?void 0:N.$el.querySelector(`.${s.b("node")}[aria-expanded="true"]`);fe(C);break}case K.right:{i.preventDefault();const N=v.value[Ae(p)+1],C=N==null?void 0:N.$el.querySelector(`.${s.b("node")}[tabindex="-1"]`);fe(C);break}case K.enter:al(p);break}};return ua($e,pa({config:c,expandingNode:_,checkedNodes:y,isHoverMenu:z,initialLoaded:u,renderLabelFn:P,lazyLoad:t,expandNode:S,handleCheckChange:A})),le([c,()=>e.options],O,{deep:!0,immediate:!0}),le(()=>e.modelValue,()=>{n=!1,G()}),le(g,i=>{ce(i,e.modelValue)||(a(be,i),a(ke,i))}),ha(()=>v.value=[]),qe(()=>!we(e.modelValue)&&G()),{ns:s,menuList:v,menus:b,checkedNodes:y,handleKeyDown:X,handleCheckChange:A,getFlattedNodes:Z,getCheckedNodes:q,clearCheckedNodes:k,calculateCheckedValue:D,scrollToExpandingNode:pe}}});function nl(e,a,l,n,s,c){const d=T("el-cascader-menu");return f(),M("div",{class:x([e.ns.b("panel"),e.ns.is("bordered",e.border)]),onKeydown:a[0]||(a[0]=(...u)=>e.handleKeyDown&&e.handleKeyDown(...u))},[(f(!0),M(se,null,de(e.menus,(u,v)=>(f(),H(d,{key:v,ref_for:!0,ref:g=>e.menuList[v]=g,index:v,nodes:[...u]},null,8,["index","nodes"]))),128))],34)}var ve=ye(ol,[["render",nl],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);ve.install=e=>{e.component(ve.name,ve)};const sl=ve,tl=40,rl={large:36,default:32,small:28},il={modifiers:[{name:"arrowPosition",enabled:!0,phase:"main",fn:({state:e})=>{const{modifiersData:a,placement:l}=e;["right","left","bottom","top"].includes(l)||(a.arrow.x=35)},requires:["arrow"]}]},dl="ElCascader",cl=ue({name:dl,components:{ElCascaderPanel:sl,ElInput:Da,ElTooltip:fa,ElScrollbar:Fe,ElTag:Ia,ElIcon:Ee,CircleClose:va,Check:Be,ArrowDown:ga},directives:{Clickoutside:Ha},props:{...je,size:{type:String,validator:Ba},placeholder:{type:String},disabled:Boolean,clearable:Boolean,filterable:Boolean,filterMethod:{type:Function,default:(e,a)=>e.text.includes(a)},separator:{type:String,default:" / "},showAllLevels:{type:Boolean,default:!0},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},debounce:{type:Number,default:300},beforeFilter:{type:Function,default:()=>!0},popperClass:{type:String,default:""},teleported:ma.teleported,tagType:{...Ma.type,default:"info"}},emits:[be,ke,"focus","blur","visible-change","expand-change","remove-tag"],setup(e,{emit:a}){let l=0,n=0;const s=te("cascader"),c=te("input"),{t:d}=Oe(),u=me(ba,{}),v=me(ka,{}),g=V(null),b=V(null),_=V(null),y=V(null),z=V(null),P=V(!1),O=V(!1),t=V(!1),S=V(""),A=V(""),B=V([]),Z=V([]),q=V([]),k=V(!1),D=w(()=>e.disabled||u.disabled),G=w(()=>e.placeholder||d("el.cascader.placeholder")),ee=ya(),pe=w(()=>["small"].includes(ee.value)?"small":"default"),X=w(()=>!!e.props.multiple),i=w(()=>!e.filterable||X.value),p=w(()=>X.value?A.value:S.value),h=w(()=>{var o;return((o=y.value)==null?void 0:o.checkedNodes)||[]}),N=w(()=>!e.clearable||D.value||t.value||!O.value?!1:!!h.value.length),C=w(()=>{const{showAllLevels:o,separator:r}=e,m=h.value;return m.length?X.value?" ":m[0].calcText(o,r):""}),E=w({get(){return e.modelValue},set(o){var r;a(be,o),a(ke,o),(r=v.validate)==null||r.call(v,"change").catch(m=>Ca())}}),U=w(()=>{var o,r;return(r=(o=g.value)==null?void 0:o.popperRef)==null?void 0:r.contentRef}),$=o=>{var r,m,L;if(!D.value&&(o=o!=null?o:!P.value,o!==P.value)){if(P.value=o,(m=(r=b.value)==null?void 0:r.input)==null||m.setAttribute("aria-expanded",`${o}`),o)Y(),ne((L=y.value)==null?void 0:L.scrollToExpandingNode);else if(e.filterable){const{value:Q}=C;S.value=Q,A.value=Q}a("visible-change",o)}},Y=()=>{ne(()=>{var o;(o=g.value)==null||o.updatePopper()})},F=()=>{t.value=!1},Ce=o=>{const{showAllLevels:r,separator:m}=e;return{node:o,key:o.uid,text:o.calcText(r,m),hitState:!1,closable:!D.value&&!o.isDisabled,isCollapseTag:!1}},Se=o=>{var r;const m=o.node;m.doCheck(!1),(r=y.value)==null||r.calculateCheckedValue(),a("remove-tag",m.valueByOption)},We=()=>{if(!X.value)return;const o=h.value,r=[],m=[];if(o.forEach(L=>m.push(Ce(L))),Z.value=m,o.length){const[L,...Q]=o,J=Q.length;r.push(Ce(L)),J&&(e.collapseTags?r.push({key:-1,text:`+ ${J}`,closable:!1,isCollapseTag:!0}):Q.forEach(R=>r.push(Ce(R))))}B.value=r},Ve=()=>{var o,r;const{filterMethod:m,showAllLevels:L,separator:Q}=e,J=(r=(o=y.value)==null?void 0:o.getFlattedNodes(!e.props.checkStrictly))==null?void 0:r.filter(R=>R.isDisabled?!1:(R.calcText(L,Q),m(R,p.value)));X.value&&(B.value.forEach(R=>{R.hitState=!1}),Z.value.forEach(R=>{R.hitState=!1})),t.value=!0,q.value=J,Y()},Te=()=>{var o;let r;t.value&&z.value?r=z.value.$el.querySelector(`.${s.e("suggestion-item")}`):r=(o=y.value)==null?void 0:o.$el.querySelector(`.${s.b("node")}[tabindex="-1"]`),r&&(r.focus(),!t.value&&r.click())},ze=()=>{var o,r;const m=(o=b.value)==null?void 0:o.input,L=_.value,Q=(r=z.value)==null?void 0:r.$el;if(!(!Ue||!m)){if(Q){const J=Q.querySelector(`.${s.e("suggestion-list")}`);J.style.minWidth=`${m.offsetWidth}px`}if(L){const{offsetHeight:J}=L,R=B.value.length>0?`${Math.max(J+6,l)}px`:`${l}px`;m.style.height=R,Y()}}},Ze=o=>{var r;return(r=y.value)==null?void 0:r.getCheckedNodes(o)},Ge=o=>{Y(),a("expand-change",o)},Ye=o=>{var r;const m=(r=o.target)==null?void 0:r.value;if(o.type==="compositionend")k.value=!1,ne(()=>xe(m));else{const L=m[m.length-1]||"";k.value=!La(L)}},Qe=o=>{if(!k.value)switch(o.code){case K.enter:$();break;case K.down:$(!0),ne(Te),o.preventDefault();break;case K.esc:P.value===!0&&(o.preventDefault(),o.stopPropagation(),$(!1));break;case K.tab:$(!1);break}},Xe=()=>{var o;(o=y.value)==null||o.clearCheckedNodes(),$(!1)},Je=o=>{var r,m;const{checked:L}=o;X.value?(r=y.value)==null||r.handleCheckChange(o,!L,!1):(!L&&((m=y.value)==null||m.handleCheckChange(o,!0,!1)),$(!1))},ea=o=>{const r=o.target,{code:m}=o;switch(m){case K.up:case K.down:{const L=m===K.up?-1:1;fe(Re(r,L,`.${s.e("suggestion-item")}[tabindex="-1"]`));break}case K.enter:r.click();break}},aa=()=>{const o=B.value,r=o[o.length-1];n=A.value?0:n+1,!(!r||!n)&&(r.hitState?Se(r):r.hitState=!0)},la=Aa(()=>{const{value:o}=p;if(!o)return;const r=e.beforeFilter(o);wa(r)?r.then(Ve).catch(()=>{}):r!==!1?Ve():F()},e.debounce),xe=(o,r)=>{!P.value&&$(!0),!(r!=null&&r.isComposing)&&(o?la():F())};return le(t,Y),le([h,D],We),le(B,()=>{ne(()=>ze())}),le(C,o=>S.value=o,{immediate:!0}),qe(()=>{var o;const r=(o=b.value)==null?void 0:o.$el;l=(r==null?void 0:r.offsetHeight)||rl[ee.value]||tl,Na(r,ze)}),{popperOptions:il,tooltipRef:g,popperPaneRef:U,input:b,tagWrapper:_,panel:y,suggestionPanel:z,popperVisible:P,inputHover:O,inputPlaceholder:G,filtering:t,presentText:C,checkedValue:E,inputValue:S,searchInputValue:A,presentTags:B,allPresentTags:Z,suggestions:q,isDisabled:D,isOnComposition:k,realSize:ee,tagSize:pe,multiple:X,readonly:i,clearBtnVisible:N,nsCascader:s,nsInput:c,t:d,togglePopperVisible:$,hideSuggestionPanel:F,deleteTag:Se,focusFirstNode:Te,getCheckedNodes:Ze,handleExpandChange:Ge,handleKeyDown:Qe,handleComposition:Ye,handleClear:Xe,handleSuggestionClick:Je,handleSuggestionKeyDown:ea,handleDelete:aa,handleInput:xe}}}),ul={key:0},pl={class:"el-cascader__collapse-tags"},hl=["placeholder"],fl=["onClick"];function vl(e,a,l,n,s,c){const d=T("circle-close"),u=T("el-icon"),v=T("arrow-down"),g=T("el-input"),b=T("el-tag"),_=T("el-tooltip"),y=T("el-cascader-panel"),z=T("check"),P=T("el-scrollbar"),O=Ea("clickoutside");return f(),H(_,{ref:"tooltipRef",visible:e.popperVisible,"onUpdate:visible":a[17]||(a[17]=t=>e.popperVisible=t),teleported:e.teleported,"popper-class":[e.nsCascader.e("dropdown"),e.popperClass],"popper-options":e.popperOptions,"fallback-placements":["bottom-start","bottom","top-start","top","right","left"],"stop-popper-mouse-event":!1,"gpu-acceleration":!1,placement:"bottom-start",transition:`${e.nsCascader.namespace.value}-zoom-in-top`,effect:"light",pure:"",persistent:"",onHide:e.hideSuggestionPanel},{default:I(()=>[he((f(),M("div",{class:x([e.nsCascader.b(),e.nsCascader.m(e.realSize),e.nsCascader.is("disabled",e.isDisabled),e.$attrs.class]),style:Sa(e.$attrs.style),onClick:a[11]||(a[11]=()=>e.togglePopperVisible(e.readonly?void 0:!0)),onKeydown:a[12]||(a[12]=(...t)=>e.handleKeyDown&&e.handleKeyDown(...t)),onMouseenter:a[13]||(a[13]=t=>e.inputHover=!0),onMouseleave:a[14]||(a[14]=t=>e.inputHover=!1)},[W(g,{ref:"input",modelValue:e.inputValue,"onUpdate:modelValue":a[1]||(a[1]=t=>e.inputValue=t),placeholder:e.searchInputValue?"":e.inputPlaceholder,readonly:e.readonly,disabled:e.isDisabled,"validate-event":!1,size:e.realSize,class:x(e.nsCascader.is("focus",e.popperVisible)),onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onFocus:a[2]||(a[2]=t=>e.$emit("focus",t)),onBlur:a[3]||(a[3]=t=>e.$emit("blur",t)),onInput:e.handleInput},{suffix:I(()=>[e.clearBtnVisible?(f(),H(u,{key:"clear",class:x([e.nsInput.e("icon"),"icon-circle-close"]),onClick:ie(e.handleClear,["stop"])},{default:I(()=>[W(d)]),_:1},8,["class","onClick"])):(f(),H(u,{key:"arrow-down",class:x([e.nsInput.e("icon"),"icon-arrow-down",e.nsCascader.is("reverse",e.popperVisible)]),onClick:a[0]||(a[0]=ie(t=>e.togglePopperVisible(),["stop"]))},{default:I(()=>[W(v)]),_:1},8,["class"]))]),_:1},8,["modelValue","placeholder","readonly","disabled","size","class","onCompositionstart","onCompositionupdate","onCompositionend","onInput"]),e.multiple?(f(),M("div",{key:0,ref:"tagWrapper",class:x(e.nsCascader.e("tags"))},[(f(!0),M(se,null,de(e.presentTags,t=>(f(),H(b,{key:t.key,type:e.tagType,size:e.tagSize,hit:t.hitState,closable:t.closable,"disable-transitions":"",onClose:S=>e.deleteTag(t)},{default:I(()=>[t.isCollapseTag===!1?(f(),M("span",ul,ae(t.text),1)):(f(),H(_,{key:1,teleported:!1,disabled:e.popperVisible||!e.collapseTagsTooltip,"fallback-placements":["bottom","top","right","left"],placement:"bottom",effect:"light"},{default:I(()=>[oe("span",null,ae(t.text),1)]),content:I(()=>[oe("div",pl,[(f(!0),M(se,null,de(e.allPresentTags,(S,A)=>(f(),M("div",{key:A,class:"el-cascader__collapse-tag"},[(f(),H(b,{key:S.key,class:"in-tooltip",type:e.tagType,size:e.tagSize,hit:S.hitState,closable:S.closable,"disable-transitions":"",onClose:B=>e.deleteTag(S)},{default:I(()=>[oe("span",null,ae(S.text),1)]),_:2},1032,["type","size","hit","closable","onClose"]))]))),128))])]),_:2},1032,["disabled"]))]),_:2},1032,["type","size","hit","closable","onClose"]))),128)),e.filterable&&!e.isDisabled?he((f(),M("input",{key:0,"onUpdate:modelValue":a[4]||(a[4]=t=>e.searchInputValue=t),type:"text",class:x(e.nsCascader.e("search-input")),placeholder:e.presentText?"":e.inputPlaceholder,onInput:a[5]||(a[5]=t=>e.handleInput(e.searchInputValue,t)),onClick:a[6]||(a[6]=ie(t=>e.togglePopperVisible(!0),["stop"])),onKeydown:a[7]||(a[7]=$a((...t)=>e.handleDelete&&e.handleDelete(...t),["delete"])),onCompositionstart:a[8]||(a[8]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:a[9]||(a[9]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:a[10]||(a[10]=(...t)=>e.handleComposition&&e.handleComposition(...t))},null,42,hl)),[[_a,e.searchInputValue]]):j("v-if",!0)],2)):j("v-if",!0)],38)),[[O,()=>e.togglePopperVisible(!1),e.popperPaneRef]])]),content:I(()=>[he(W(y,{ref:"panel",modelValue:e.checkedValue,"onUpdate:modelValue":a[15]||(a[15]=t=>e.checkedValue=t),options:e.options,props:e.props,border:!1,"render-label":e.$slots.default,onExpandChange:e.handleExpandChange,onClose:a[16]||(a[16]=t=>e.$nextTick(()=>e.togglePopperVisible(!1)))},null,8,["modelValue","options","props","render-label","onExpandChange"]),[[Le,!e.filtering]]),e.filterable?he((f(),H(P,{key:0,ref:"suggestionPanel",tag:"ul",class:x(e.nsCascader.e("suggestion-panel")),"view-class":e.nsCascader.e("suggestion-list"),onKeydown:e.handleSuggestionKeyDown},{default:I(()=>[e.suggestions.length?(f(!0),M(se,{key:0},de(e.suggestions,t=>(f(),M("li",{key:t.uid,class:x([e.nsCascader.e("suggestion-item"),e.nsCascader.is("checked",t.checked)]),tabindex:-1,onClick:S=>e.handleSuggestionClick(t)},[oe("span",null,ae(t.text),1),t.checked?(f(),H(u,{key:0},{default:I(()=>[W(z)]),_:1})):j("v-if",!0)],10,fl))),128)):Va(e.$slots,"empty",{key:1},()=>[oe("li",{class:x(e.nsCascader.e("empty-text"))},ae(e.t("el.cascader.noMatch")),3)])]),_:3},8,["class","view-class","onKeydown"])),[[Le,e.filtering]]):j("v-if",!0)]),_:3},8,["visible","teleported","popper-class","popper-options","transition","onHide"])}var ge=ye(cl,[["render",vl],["__file","/home/runner/work/element-plus/element-plus/packages/components/cascader/src/index.vue"]]);ge.install=e=>{e.component(ge.name,ge)};const gl=ge,Tl=gl;export{Tl as E};