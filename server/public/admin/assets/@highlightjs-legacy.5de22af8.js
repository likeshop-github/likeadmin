System.register(["./highlight.js-legacy.1a13e67a.js","./@vue-legacy.6b85f8d1.js"],(function(e){"use strict";var t,a,n,l,u,r;return{setters:[e=>{t=e.H},e=>{a=e.d,n=e.r,l=e.w,u=e.e,r=e.h}],execute:function(){var g=a({props:{code:{type:String,required:!0},language:{type:String,default:""},autodetect:{type:Boolean,default:!0},ignoreIllegals:{type:Boolean,default:!0}},setup:function(e){var a=n(e.language);l((function(){return e.language}),(function(e){a.value=e}));var r=u((function(){return e.autodetect||!a.value})),g=u((function(){return!r.value&&!t.getLanguage(a.value)}));return{className:u((function(){return g.value?"":"hljs "+a.value})),highlightedCode:u((function(){var n;if(g.value)return console.warn('The language "'+a.value+'" you specified could not be found.'),e.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;");if(r.value){var l=t.highlightAuto(e.code);return a.value=null!==(n=l.language)&&void 0!==n?n:"",l.value}return(l=t.highlight(e.code,{language:a.value,ignoreIllegals:e.ignoreIllegals})).value}))}},render:function(){return r("pre",{},[r("code",{class:this.className,innerHTML:this.highlightedCode})])}});e("o",{install:function(e){e.component("highlightjs",g)},component:g})}}}));