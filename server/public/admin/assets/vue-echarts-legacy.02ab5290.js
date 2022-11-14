System.register(["./resize-detector-legacy.4af1ec2e.js","./echarts-legacy.4a09bb08.js","./@vue-legacy.6b85f8d1.js"],(function(e){"use strict";var t,n,r,o,a,i,u,c,s,l,f,v,p,d,g,h,O;return{setters:[e=>{t=e.a,n=e.r},e=>{r=e.i,o=e.t},e=>{a=e.d,i=e.s,u=e.D,c=e.a5,s=e.e,l=e.u,f=e.i,v=e.w,p=e.l,d=e.j,g=e.H,h=e.h,O=e.n}],execute:function(){var b=function(){return b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},b.apply(this,arguments)},y=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function m(e){return t=Object.create(null),y.forEach((function(n){t[n]=function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[t].apply(e.value,n)}}(n)})),t;var t}var j={autoresize:Boolean},x={loading:Boolean,loadingOptions:Object},_=/^on[^a-z]/,A=function(e){return _.test(e)},E=[],z=[];!function(e,t){if(e&&"undefined"!=typeof document){var n,r=!0===t.prepend?"prepend":"append",o=!0===t.singleTag,a="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var i=E.indexOf(a);-1===i&&(i=E.push(a)-1,z[i]={}),n=z[i]&&z[i][r]?z[i][r]:z[i][r]=u()}else n=u();65279===e.charCodeAt(0)&&(e=e.substring(1)),n.styleSheet?n.styleSheet.cssText+=e:n.appendChild(document.createTextNode(e))}function u(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var n=Object.keys(t.attributes),o=0;o<n.length;o++)e.setAttribute(n[o],t.attributes[n[o]]);var i="prepend"===r?"afterbegin":"beforeend";return a.insertAdjacentElement(i,e),e}}("x-vue-echarts{display:block;width:100%;height:100%}",{}),e("C",a({name:"echarts",props:b(b({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},j),x),inheritAttrs:!1,setup:function(e,a){var h=a.attrs,y=i(),j=i(),x=i(),_=u("ecTheme",null),E=u("ecInitOptions",null),z=u("ecUpdateOptions",null),w=c(e),C=w.autoresize,D=w.manualUpdate,L=w.loading,S=w.loadingOptions,T=s((function(){return x.value||e.option||null})),U=s((function(){return e.theme||l(_)||{}})),k=s((function(){return e.initOptions||l(E)||{}})),B=s((function(){return e.updateOptions||l(z)||{}})),P=s((function(){return function(e){var t={};for(var n in e)A(n)||(t[n]=e[n]);return t}(h)})),H=f().proxy.$listeners;function N(t){if(y.value){var n=j.value=r(y.value,U.value,k.value);e.group&&(n.group=e.group);var o=H;o||(o={},Object.keys(h).filter((function(e){return 0===e.indexOf("on")&&e.length>2})).forEach((function(e){var t=e.charAt(2).toLowerCase()+e.slice(3);"Once"===t.substring(t.length-4)&&(t="~".concat(t.substring(0,t.length-4))),o[t]=h[e]}))),Object.keys(o).forEach((function(e){var t=o[e];if(t){var r=e.toLowerCase();"~"===r.charAt(0)&&(r=r.substring(1),t.__once__=!0);var a=n;if(0===r.indexOf("zr:")&&(a=n.getZr(),r=r.substring(3)),t.__once__){delete t.__once__;var i=t;t=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];i.apply(void 0,e),a.off(r,t)}}a.on(r,t)}})),C.value?O((function(){n&&!n.isDisposed()&&n.resize(),a()})):a()}function a(){var e=t||T.value;e&&n.setOption(e,B.value)}}function R(){j.value&&(j.value.dispose(),j.value=void 0)}var q=null;v(D,(function(t){"function"==typeof q&&(q(),q=null),t||(q=v((function(){return e.option}),(function(e,t){e&&(j.value?j.value.setOption(e,b({notMerge:e.value!==(null==t?void 0:t.value)},B.value)):N())}),{deep:!0}))}),{immediate:!0}),v([U,k],(function(){R(),N()}),{deep:!0}),p((function(){e.group&&j.value&&(j.value.group=e.group)}));var F,I=m(j);return function(e,t,n){var r=u("ecLoadingOptions",{}),o=s((function(){return b(b({},l(r)),null==n?void 0:n.value)}));p((function(){var n=e.value;n&&(t.value?n.showLoading(o.value):n.hideLoading())}))}(j,L,S),F=null,v([y,j,C],(function(e,r,a){var i=e[0],u=e[1],c=e[2];i&&u&&c&&(F=o((function(){u.resize()}),100),t(i,F)),a((function(){F&&i&&n(i,F)}))})),d((function(){N()})),g(R),b({chart:j,root:y,setOption:function(t,n){e.manualUpdate&&(x.value=t),j.value?j.value.setOption(t,n||{}):N(t)},nonEventAttrs:P},I)},render:function(){var e=b({},this.nonEventAttrs);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",h("x-vue-echarts",e)}}))}}}));