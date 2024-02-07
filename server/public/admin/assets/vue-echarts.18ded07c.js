import{a as X,r as Y}from"./resize-detector.4e96b72b.js";import{i as ee,t as te}from"./echarts.5016c48c.js";import{d as ne,s as A,D as T,_ as re,b as y,f as ae,w as k,k as I,i as ie,C as oe,h as N,u as ue,n as se}from"./@vue.90bde458.js";var g=function(){return g=Object.assign||function(e){for(var r,n=1,l=arguments.length;n<l;n++)for(var c in r=arguments[n])Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);return e},g.apply(this,arguments)};var ce=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function le(e){return r=Object.create(null),ce.forEach(function(n){r[n]=function(l){return function(){for(var c=[],t=0;t<arguments.length;t++)c[t]=arguments[t];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[l].apply(e.value,c)}}(n)}),r;var r}var fe={autoresize:[Boolean,Object]},pe=/^on[^a-z]/,ve=function(e){return pe.test(e)};function D(e,r){var n=ue(e);return n&&typeof n=="object"&&"value"in n?n.value||r:n||r}var de="ecLoadingOptions",ge={loading:Boolean,loadingOptions:Object},E=null,W="x-vue-echarts",q=[],j=[];(function(e,r){if(e&&typeof document<"u"){var n,l=r.prepend===!0?"prepend":"append",c=r.singleTag===!0,t=typeof r.container=="string"?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(c){var f=q.indexOf(t);f===-1&&(f=q.push(t)-1,j[f]={}),n=j[f]&&j[f][l]?j[f][l]:j[f][l]=x()}else n=x();e.charCodeAt(0)===65279&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function x(){var O=document.createElement("style");if(O.setAttribute("type","text/css"),r.attributes)for(var _=Object.keys(r.attributes),v=0;v<_.length;v++)O.setAttribute(_[v],r.attributes[_[v]]);var w=l==="prepend"?"afterbegin":"beforeend";return t.insertAdjacentElement(w,O),O}})(`x-vue-echarts,.echarts-inner{display:block;width:100%;height:100%;min-width:0}
`,{});var he=function(){if(E!=null)return E;if(typeof HTMLElement>"u"||typeof customElements>"u")return E=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)(W)}catch{return E=!1}return E=!0}(),me="ecTheme",Oe="ecInitOptions",be="ecUpdateOptions",je=ne({name:"echarts",props:g(g({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},fe),ge),emits:{},inheritAttrs:!1,setup:function(e,r){var n=r.attrs,l=A(),c=A(),t=A(),f=A(),x=T(me,null),O=T(Oe,null),_=T(be,null),v=re(e),w=v.autoresize,Z=v.manualUpdate,$=v.loading,G=v.loadingOptions,J=y(function(){return f.value||e.option||null}),U=y(function(){return e.theme||D(x,{})}),B=y(function(){return e.initOptions||D(O,{})}),R=y(function(){return e.updateOptions||D(_,{})}),K=y(function(){return function(s){var a={};for(var u in s)ve(u)||(a[u]=s[u]);return a}(n)}),Q=ae().proxy.$listeners;function C(s){if(c.value){var a=t.value=ee(c.value,U.value,B.value);e.group&&(a.group=e.group);var u=Q;u||(u={},Object.keys(n).filter(function(o){return o.indexOf("on")===0&&o.length>2}).forEach(function(o){var i=o.charAt(2).toLowerCase()+o.slice(3);i.substring(i.length-4)==="Once"&&(i="~".concat(i.substring(0,i.length-4))),u[i]=n[o]})),Object.keys(u).forEach(function(o){var i=u[o];if(i){var p=o.toLowerCase();p.charAt(0)==="~"&&(p=p.substring(1),i.__once__=!0);var h=a;if(p.indexOf("zr:")===0&&(h=a.getZr(),p=p.substring(3)),i.__once__){delete i.__once__;var z=i;i=function(){for(var b=[],m=0;m<arguments.length;m++)b[m]=arguments[m];z.apply(void 0,b),h.off(p,i)}}h.on(p,i)}}),w.value?se(function(){a&&!a.isDisposed()&&a.resize(),d()}):d()}function d(){var o=s||J.value;o&&a.setOption(o,R.value)}}function S(){t.value&&(t.value.dispose(),t.value=void 0)}var L=null;k(Z,function(s){typeof L=="function"&&(L(),L=null),s||(L=k(function(){return e.option},function(a,u){a&&(t.value?t.value.setOption(a,g({notMerge:a!==u},R.value)):C())},{deep:!0}))},{immediate:!0}),k([U,B],function(){S(),C()},{deep:!0}),I(function(){e.group&&t.value&&(t.value.group=e.group)});var V=le(t);return function(s,a,u){var d=T(de,{}),o=y(function(){return g(g({},D(d,{})),u==null?void 0:u.value)});I(function(){var i=s.value;i&&(a.value?i.showLoading(o.value):i.hideLoading())})}(t,$,G),function(s,a,u){var d=null;k([u,s,a],function(o,i,p){var h=o[0],z=o[1],b=o[2];if(h&&z&&b){var m=b===!0?{}:b,M=m.throttle,P=M===void 0?100:M,H=m.onResize,F=function(){z.resize(),H==null||H()};d=P?te(F,P):F,X(h,d)}p(function(){h&&d&&Y(h,d)})})}(t,w,c),ie(function(){C()}),oe(function(){he&&l.value?l.value.__dispose=S:S()}),g({chart:t,root:l,inner:c,setOption:function(s,a){e.manualUpdate&&(f.value=s),t.value?t.value.setOption(s,a||{}):C(s)},nonEventAttrs:K},V)},render:function(){var e=g({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",N(W,e,[N("div",{ref:"inner",class:"echarts-inner"})])}});export{je as B};
