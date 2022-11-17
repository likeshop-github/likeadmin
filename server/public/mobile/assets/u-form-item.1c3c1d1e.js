import{r as e,a as t,o as r,c as i,w as n,q as a,b as l,h as s,p as o,x as u,aj as f,I as d,k as c,l as p,t as h,E as g,y as m}from"./index.0f7af4f8.js";import{_ as y}from"./u-icon.4e99fe4e.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";function v(e,t,r){}var S={methods:{dispatch(e,t,r){let i=this.$parent||this.$root,n=i.$options.name;for(;i&&(!n||n!==e);)i=i.$parent,i&&(n=i.$options.name);i&&i[t](r)},broadcast(e,t,r){v.call(this,e,t,r)}}};var _=b({name:"u-input",emits:["update:modelValue","input","change","blur","focus","click","touchstart"],mixins:[S],props:{value:{type:[String,Number],default:""},modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:""},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:()=>({})},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:[Boolean,String]},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0},backgroundColor:{type:String},padding:{type:String}},data:()=>({defaultValue:"",inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:"",uForm:{inputAlign:"",clearable:""}}),watch:{valueCom(e,t){this.defaultValue=e,e!=t&&"select"==this.type&&this.handleInput({detail:{value:e}})}},computed:{valueCom(){return this.modelValue},inputAlignCom(){return this.inputAlign||this.uForm.inputAlign||"left"},clearableCom(){return"boolean"==typeof this.clearable?this.clearable:"boolean"!=typeof this.uForm.clearable||this.uForm.clearable},inputMaxlength(){return Number(this.maxlength)},getStyle(){let e={};return e.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",e=Object.assign(e,this.customStyle),e},getCursorSpacing(){return Number(this.cursorSpacing)},uSelectionStart(){return String(this.selectionStart)},uSelectionEnd(){return String(this.selectionEnd)}},created(){this.defaultValue=this.valueCom},mounted(){let e=this.$u.$parent.call(this,"u-form");e&&Object.keys(this.uForm).map((t=>{this.uForm[t]=e[t]}))},methods:{handleInput(e){let t=e.detail.value;this.trim&&(t=this.$u.trim(t)),this.$emit("input",t),this.$emit("update:modelValue",t),this.defaultValue=t,setTimeout((()=>{this.dispatch("u-form-item","onFieldChange",t)}),40)},handleBlur(e){setTimeout((()=>{this.focused=!1}),100),this.$emit("blur",e.detail.value),setTimeout((()=>{this.dispatch("u-form-item","onFieldBlur",e.detail.value)}),40)},onFormItemError(e){this.validateState=e},onFocus(e){this.focused=!0,this.$emit("focus")},onConfirm(e){this.$emit("confirm",e.detail.value)},onClear(e){this.$emit("input",""),this.$emit("update:modelValue","")},inputClick(){this.$emit("click")}}},[["render",function(p,h,g,m,b,v){const S=f,_=d,w=e(t("u-icon"),y),x=c;return r(),i(x,{class:o(["u-input",{"u-input--border":g.border,"u-input--error":b.validateState}]),style:a({padding:g.padding?g.padding:`0 ${g.border?20:0}rpx`,borderColor:g.borderColor,textAlign:v.inputAlignCom,backgroundColor:g.backgroundColor}),onClick:u(v.inputClick,["stop"])},{default:n((()=>["textarea"==g.type?(r(),i(S,{key:0,class:"u-input__input u-input__textarea",style:a([v.getStyle]),value:b.defaultValue,placeholder:g.placeholder,placeholderStyle:g.placeholderStyle,disabled:g.disabled,maxlength:v.inputMaxlength,fixed:g.fixed,focus:g.focus,autoHeight:g.autoHeight,"selection-end":v.uSelectionEnd,"selection-start":v.uSelectionStart,"cursor-spacing":v.getCursorSpacing,onInput:v.handleInput,onBlur:v.handleBlur,onFocus:v.onFocus,onConfirm:v.onConfirm},null,8,["style","value","placeholder","placeholderStyle","disabled","maxlength","fixed","focus","autoHeight","selection-end","selection-start","cursor-spacing","onInput","onBlur","onFocus","onConfirm"])):(r(),i(_,{key:1,class:"u-input__input",type:"password"==g.type?"text":g.type,style:a([v.getStyle]),value:b.defaultValue,password:"password"==g.type&&!b.showPassword,placeholder:g.placeholder,placeholderStyle:g.placeholderStyle,disabled:g.disabled||"select"===g.type,maxlength:v.inputMaxlength,focus:g.focus,confirmType:g.confirmType,"cursor-spacing":v.getCursorSpacing,"selection-end":v.uSelectionEnd,"selection-start":v.uSelectionStart,onFocus:v.onFocus,onBlur:v.handleBlur,onInput:v.handleInput,onConfirm:v.onConfirm},null,8,["type","style","value","password","placeholder","placeholderStyle","disabled","maxlength","focus","confirmType","cursor-spacing","selection-end","selection-start","onFocus","onBlur","onInput","onConfirm"])),l(x,{class:"u-input__right-icon u-flex"},{default:n((()=>[v.clearableCom&&""!=v.valueCom&&b.focused?(r(),i(x,{key:0,class:"u-input__right-icon__clear u-input__right-icon__item",onClick:v.onClear},{default:n((()=>[l(w,{size:"32",name:"close-circle-fill",color:"#c0c4cc"})])),_:1},8,["onClick"])):s("v-if",!0),g.passwordIcon&&"password"==g.type?(r(),i(x,{key:1,class:"u-input__right-icon__clear u-input__right-icon__item"},{default:n((()=>[l(w,{size:"32",name:b.showPassword?"eye-fill":"eye",color:"#c0c4cc",onClick:h[0]||(h[0]=e=>b.showPassword=!b.showPassword)},null,8,["name"])])),_:1})):s("v-if",!0),"select"==g.type?(r(),i(x,{key:2,class:o(["u-input__right-icon--select u-input__right-icon__item",{"u-input__right-icon--select--reverse":g.selectOpen}])},{default:n((()=>[l(w,{name:"arrow-down-fill",size:"26",color:"#c0c4cc"})])),_:1},8,["class"])):s("v-if",!0)])),_:1})])),_:1},8,["class","style","onClick"])}],["__scopeId","data-v-40b2398e"]]);function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},w.apply(this,arguments)}var x=/%[sdj%]/g,q=function(){};function O(e){if(!e||!e.length)return null;var t={};return e.forEach((function(e){var r=e.field;t[r]=t[r]||[],t[r].push(e)})),t}function A(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=1,n=t[0],a=t.length;if("function"==typeof n)return n.apply(null,t.slice(1));if("string"==typeof n){for(var l=String(n).replace(x,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(r){return"[Circular]"}break;default:return e}})),s=t[i];i<a;s=t[++i])l+=" "+s;return l}return n}function F(e,t){return null==e||(!("array"!==t||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"pattern"===e}(t)||"string"!=typeof e||e))}function P(e,t,r){var i=0,n=e.length;!function a(l){if(l&&l.length)r(l);else{var s=i;i+=1,s<n?t(e[s],a):r([])}}([])}function C(e,t,r,i){if(t.first){var n=new Promise((function(t,n){var a=function(e){var t=[];return Object.keys(e).forEach((function(r){t.push.apply(t,e[r])})),t}(e);P(a,r,(function(e){return i(e),e.length?n({errors:e,fields:O(e)}):t()}))}));return n.catch((function(e){return e})),n}var a=t.firstFields||[];!0===a&&(a=Object.keys(e));var l=Object.keys(e),s=l.length,o=0,u=[],f=new Promise((function(t,n){var f=function(e){if(u.push.apply(u,e),++o===s)return i(u),u.length?n({errors:u,fields:O(u)}):t()};l.length||(i(u),t()),l.forEach((function(t){var i=e[t];-1!==a.indexOf(t)?P(i,r,f):function(e,t,r){var i=[],n=0,a=e.length;function l(e){i.push.apply(i,e),++n===a&&r(i)}e.forEach((function(e){t(e,l)}))}(i,r,f)}))}));return f.catch((function(e){return e})),f}function j(e){return function(t){return t&&t.message?(t.field=t.field||e.fullField,t):{message:"function"==typeof t?t():t,field:t.field||e.fullField}}}function k(e,t){if(t)for(var r in t)if(t.hasOwnProperty(r)){var i=t[r];"object"==typeof i&&"object"==typeof e[r]?e[r]=w({},e[r],{},i):e[r]=i}return e}function I(e,t,r,i,n,a){!e.required||r.hasOwnProperty(e.field)&&!F(t,a||e.type)||i.push(A(n.messages.required,e.fullField))}"undefined"!=typeof process&&process.env;var B={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},E={integer:function(e){return E.number(e)&&parseInt(e,10)===e},float:function(e){return E.number(e)&&!E.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(t){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear},number:function(e){return!isNaN(e)&&"number"==typeof+e},object:function(e){return"object"==typeof e&&!E.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(B.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(B.url)},hex:function(e){return"string"==typeof e&&!!e.match(B.hex)}};var $={required:I,whitespace:function(e,t,r,i,n){(/^\s+$/.test(t)||""===t)&&i.push(A(n.messages.whitespace,e.fullField))},type:function(e,t,r,i,n){if(e.required&&void 0===t)I(e,t,r,i,n);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?E[a](t)||i.push(A(n.messages.types[a],e.fullField,e.type)):a&&typeof t!==e.type&&i.push(A(n.messages.types[a],e.fullField,e.type))}},range:function(e,t,r,i,n){var a="number"==typeof e.len,l="number"==typeof e.min,s="number"==typeof e.max,o=t,u=null,f="number"==typeof t,d="string"==typeof t,c=Array.isArray(t);if(f?u="number":d?u="string":c&&(u="array"),!u)return!1;c&&(o=t.length),d&&(o=t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?o!==e.len&&i.push(A(n.messages[u].len,e.fullField,e.len)):l&&!s&&o<e.min?i.push(A(n.messages[u].min,e.fullField,e.min)):s&&!l&&o>e.max?i.push(A(n.messages[u].max,e.fullField,e.max)):l&&s&&(o<e.min||o>e.max)&&i.push(A(n.messages[u].range,e.fullField,e.min,e.max))},enum:function(e,t,r,i,n){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(t)&&i.push(A(n.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,t,r,i,n){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||i.push(A(n.messages.pattern.mismatch,e.fullField,t,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(t)||i.push(A(n.messages.pattern.mismatch,e.fullField,t,e.pattern))}}};function D(e,t,r,i,n){var a=e.type,l=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t,a)&&!e.required)return r();$.required(e,t,i,l,n,a),F(t,a)||$.type(e,t,i,l,n)}r(l)}var V={string:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t,"string")&&!e.required)return r();$.required(e,t,i,a,n,"string"),F(t,"string")||($.type(e,t,i,a,n),$.range(e,t,i,a,n),$.pattern(e,t,i,a,n),!0===e.whitespace&&$.whitespace(e,t,i,a,n))}r(a)},method:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n),void 0!==t&&$.type(e,t,i,a,n)}r(a)},number:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(""===t&&(t=void 0),F(t)&&!e.required)return r();$.required(e,t,i,a,n),void 0!==t&&($.type(e,t,i,a,n),$.range(e,t,i,a,n))}r(a)},boolean:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n),void 0!==t&&$.type(e,t,i,a,n)}r(a)},regexp:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n),F(t)||$.type(e,t,i,a,n)}r(a)},integer:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n),void 0!==t&&($.type(e,t,i,a,n),$.range(e,t,i,a,n))}r(a)},float:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n),void 0!==t&&($.type(e,t,i,a,n),$.range(e,t,i,a,n))}r(a)},array:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t,"array")&&!e.required)return r();$.required(e,t,i,a,n,"array"),F(t,"array")||($.type(e,t,i,a,n),$.range(e,t,i,a,n))}r(a)},object:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n),void 0!==t&&$.type(e,t,i,a,n)}r(a)},enum:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n),void 0!==t&&$.enum(e,t,i,a,n)}r(a)},pattern:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t,"string")&&!e.required)return r();$.required(e,t,i,a,n),F(t,"string")||$.pattern(e,t,i,a,n)}r(a)},date:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();var l;if($.required(e,t,i,a,n),!F(t))l="number"==typeof t?new Date(t):t,$.type(e,l,i,a,n),l&&$.range(e,l.getTime(),i,a,n)}r(a)},url:D,hex:D,email:D,required:function(e,t,r,i,n){var a=[],l=Array.isArray(t)?"array":typeof t;$.required(e,t,i,a,n,l),r(a)},any:function(e,t,r,i,n){var a=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(F(t)&&!e.required)return r();$.required(e,t,i,a,n)}r(a)}};function N(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var T=N();function L(e){this.rules=null,this._messages=T,this.define(e)}L.prototype={messages:function(e){return e&&(this._messages=k(N(),e)),this._messages},define:function(e){if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");var t,r;for(t in this.rules={},e)e.hasOwnProperty(t)&&(r=e[t],this.rules[t]=Array.isArray(r)?r:[r])},validate:function(e,t,r){var i=this;void 0===t&&(t={}),void 0===r&&(r=function(){});var n,a,l=e,s=t,o=r;if("function"==typeof s&&(o=s,s={}),!this.rules||0===Object.keys(this.rules).length)return o&&o(),Promise.resolve();if(s.messages){var u=this.messages();u===T&&(u=N()),k(u,s.messages),s.messages=u}else s.messages=this.messages();var f={};(s.keys||Object.keys(this.rules)).forEach((function(t){n=i.rules[t],a=l[t],n.forEach((function(r){var n=r;"function"==typeof n.transform&&(l===e&&(l=w({},l)),a=l[t]=n.transform(a)),(n="function"==typeof n?{validator:n}:w({},n)).validator=i.getValidationMethod(n),n.field=t,n.fullField=n.fullField||t,n.type=i.getType(n),n.validator&&(f[t]=f[t]||[],f[t].push({rule:n,value:a,source:l,field:t}))}))}));var d={};return C(f,s,(function(e,t){var r,i=e.rule,n=!("object"!==i.type&&"array"!==i.type||"object"!=typeof i.fields&&"object"!=typeof i.defaultField);function a(e,t){return w({},t,{fullField:i.fullField+"."+e})}function l(r){void 0===r&&(r=[]);var l=r;if(Array.isArray(l)||(l=[l]),!s.suppressWarning&&l.length&&L.warning("async-validator:",l),l.length&&i.message&&(l=[].concat(i.message)),l=l.map(j(i)),s.first&&l.length)return d[i.field]=1,t(l);if(n){if(i.required&&!e.value)return l=i.message?[].concat(i.message).map(j(i)):s.error?[s.error(i,A(s.messages.required,i.field))]:[],t(l);var o={};if(i.defaultField)for(var u in e.value)e.value.hasOwnProperty(u)&&(o[u]=i.defaultField);for(var f in o=w({},o,{},e.rule.fields))if(o.hasOwnProperty(f)){var c=Array.isArray(o[f])?o[f]:[o[f]];o[f]=c.map(a.bind(null,f))}var p=new L(o);p.messages(s.messages),e.rule.options&&(e.rule.options.messages=s.messages,e.rule.options.error=s.error),p.validate(e.value,e.rule.options||s,(function(e){var r=[];l&&l.length&&r.push.apply(r,l),e&&e.length&&r.push.apply(r,e),t(r.length?r:null)}))}else t(l)}n=n&&(i.required||!i.required&&e.value),i.field=e.field,i.asyncValidator?r=i.asyncValidator(i,e.value,l,e.source,s):i.validator&&(!0===(r=i.validator(i,e.value,l,e.source,s))?l():!1===r?l(i.message||i.field+" fails"):r instanceof Array?l(r):r instanceof Error&&l(r.message)),r&&r.then&&r.then((function(){return l()}),(function(e){return l(e)}))}),(function(e){!function(e){var t,r,i,n=[],a={};for(t=0;t<e.length;t++)r=e[t],i=void 0,Array.isArray(r)?n=(i=n).concat.apply(i,r):n.push(r);n.length?a=O(n):(n=null,a=null),o(n,a)}(e)}))},getType:function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!V.hasOwnProperty(e.type))throw new Error(A("Unknown rule type %s",e.type));return e.type||"string"},getValidationMethod:function(e){if("function"==typeof e.validator)return e.validator;var t=Object.keys(e),r=t.indexOf("message");return-1!==r&&t.splice(r,1),1===t.length&&"required"===t[0]?V.required:V[this.getType(e)]||!1}},L.register=function(e,t){if("function"!=typeof t)throw new Error("Cannot register a validator by type, validator is not a function");V[e]=t},L.warning=q,L.messages=T;L.warning=function(){};var R=b({name:"u-form-item",mixins:[S],inject:{uForm:{default:()=>null}},props:{label:{type:String,default:""},prop:{type:String,default:""},borderBottom:{type:[String,Boolean],default:""},labelPosition:{type:String,default:""},labelWidth:{type:[String,Number],default:""},labelStyle:{type:Object,default:()=>({})},labelAlign:{type:String,default:""},rightIcon:{type:String,default:""},leftIcon:{type:String,default:""},leftIconStyle:{type:Object,default:()=>({})},rightIconStyle:{type:Object,default:()=>({})},required:{type:Boolean,default:!1},inputAlign:{type:String,default:""}},data:()=>({initialValue:"",validateState:"",validateMessage:"",errorType:["message"],fieldValue:"",parentData:{borderBottom:!0,labelWidth:90,labelPosition:"left",labelStyle:{},labelAlign:"left",inputAlign:"left"}}),watch:{validateState(e){this.broadcastInputError()},"uForm.errorType"(e){this.errorType=e,this.broadcastInputError()}},computed:{uLabelWidth(){return"left"==this.elLabelPosition?"true"===this.label||""===this.label?"auto":this.$u.addUnit(this.elLabelWidth):"100%"},showError(){return e=>!(this.errorType.indexOf("none")>=0)&&this.errorType.indexOf(e)>=0},elLabelWidth(){return 0!=this.labelWidth||""!=this.labelWidth?this.labelWidth:this.parentData.labelWidth?this.parentData.labelWidth:90},elLabelStyle(){return Object.keys(this.labelStyle).length?this.labelStyle:this.parentData.labelStyle?this.parentData.labelStyle:{}},elLabelPosition(){return this.labelPosition?this.labelPosition:this.parentData.labelPosition?this.parentData.labelPosition:"left"},elLabelAlign(){return this.labelAlign?this.labelAlign:this.parentData.labelAlign?this.parentData.labelAlign:"left"},elBorderBottom(){return""!==this.borderBottom?this.borderBottom:!this.parentData.borderBottom||this.parentData.borderBottom},elInputAlign(){return this.inputAlign?this.inputAlign:this.parentData.inputAlign?this.parentData.inputAlign:"left"}},methods:{broadcastInputError(){this.broadcast("u-input","onFormItemError","error"===this.validateState&&this.showError("border"))},setRules(){},getRules(){let e=this.parent.rules;return e=e?e[this.prop]:[],[].concat(e||[])},onFieldBlur(){this.validation("blur")},onFieldChange(){this.validation("change")},getFilteredRule(e=""){let t=this.getRules();return e?t.filter((t=>t.trigger&&-1!==t.trigger.indexOf(e))):t},getData(e,t,r){let i;if(e){i=JSON.parse(JSON.stringify(e));let r="",n=".",a="[",l="]";t=t.replace(/\s+/g,r)+n;let s=r;for(let e=0;e<t.length;e++){let o=t.charAt(e);o!=n&&o!=a&&o!=l?s+=o:i&&(s!=r&&(i=i[s]),s=r)}}return void 0===i&&void 0!==r&&(i=r),i},setData(e,t,r){let i;i="object"==typeof r?JSON.parse(JSON.stringify(r)):r;let n=new RegExp("([\\w$]+)|\\[(:\\d)\\]","g");const a=t.match(n);for(let l=0;l<a.length-1;l++){let t=a[l];"object"!=typeof e[t]&&(e[t]={}),e=e[t]}e[a[a.length-1]]=i},validation(e,t=(()=>{})){this.fieldValue=this.getData(this.parent.model,this.prop);let r=this.getFilteredRule(e);if(!r||0===r.length)return t("");this.validateState="validating",new L({[this.prop]:r}).validate({[this.prop]:this.fieldValue},{firstFields:!0},((e,r)=>{this.validateState=e?"error":"success",this.validateMessage=e?e[0].message:"";let i=e?e[0].field:"";t(this.validateMessage,{state:this.validateState,key:i,msg:this.validateMessage})}))},resetField(){this.setData(this.parent.model,this.prop,this.initialValue),this.validateState="success"}},mounted(){this.parent=this.$u.$parent.call(this,"u-form"),this.parent&&(Object.keys(this.parentData).map((e=>{this.parentData[e]=this.parent[e]})),this.prop&&(this.parent.fields.push(this),this.errorType=this.parent.errorType,this.initialValue=this.fieldValue,this.$nextTick((()=>{this.setRules()}))))},beforeUnmount(){this.parent&&this.prop&&this.parent.fields.map(((e,t)=>{e===this&&this.parent.fields.splice(t,1)}))}},[["render",function(u,f,d,b,v,S){const _=m,w=e(t("u-icon"),y),x=c;return r(),i(x,{class:o(["u-form-item",{"u-border-bottom":S.elBorderBottom,"u-form-item__border-bottom--error":"error"===v.validateState&&S.showError("border-bottom")}])},{default:n((()=>[l(x,{class:"u-form-item__body",style:a({flexDirection:"left"==S.elLabelPosition?"row":"column"})},{default:n((()=>[s(' 微信小程序中，将一个参数设置空字符串，结果会变成字符串"true" '),l(x,{class:"u-form-item--left",style:a({width:S.uLabelWidth,flex:`0 0 ${S.uLabelWidth}`,marginBottom:"left"==S.elLabelPosition?0:"10rpx"})},{default:n((()=>[s(" 为了块对齐 "),d.required||d.leftIcon||d.label?(r(),i(x,{key:0,class:"u-form-item--left__content"},{default:n((()=>[s(" nvue不支持伪元素before "),d.required?(r(),i(_,{key:0,class:"u-form-item--left__content--required"},{default:n((()=>[p("*")])),_:1})):s("v-if",!0),d.leftIcon?(r(),i(x,{key:1,class:"u-form-item--left__content__icon"},{default:n((()=>[l(w,{name:d.leftIcon,"custom-style":d.leftIconStyle},null,8,["name","custom-style"])])),_:1})):s("v-if",!0),l(x,{class:"u-form-item--left__content__label",style:a([S.elLabelStyle,{"justify-content":"left"==S.elLabelAlign?"flex-start":"center"==S.elLabelAlign?"center":"flex-end"}])},{default:n((()=>[p(h(d.label),1)])),_:1},8,["style"])])),_:1})):s("v-if",!0)])),_:1},8,["style"]),l(x,{class:"u-form-item--right u-flex"},{default:n((()=>[l(x,{class:"u-form-item--right__content"},{default:n((()=>[l(x,{class:"u-form-item--right__content__slot",style:a("left"==S.elLabelPosition&&"right"==S.elInputAlign?"text-align:right;display: inline-block;line-height:initial;":"")},{default:n((()=>[g(u.$slots,"default",{},void 0,!0)])),_:3},8,["style"]),u.$slots.right||d.rightIcon?(r(),i(x,{key:0,class:"u-form-item--right__content__icon u-flex"},{default:n((()=>[d.rightIcon?(r(),i(w,{key:0,"custom-style":d.rightIconStyle,name:d.rightIcon},null,8,["custom-style","name"])):s("v-if",!0),g(u.$slots,"right",{},void 0,!0)])),_:3})):s("v-if",!0)])),_:3})])),_:3})])),_:3},8,["style"]),"error"===v.validateState&&S.showError("message")?(r(),i(x,{key:0,class:"u-form-item__message",style:a({paddingLeft:"left"==S.elLabelPosition?u.$u.addUnit(S.elLabelWidth):"0",textAlign:"right"==S.elInputAlign?"right":"left"})},{default:n((()=>[p(h(v.validateMessage),1)])),_:1},8,["style"])):s("v-if",!0)])),_:3},8,["class"])}],["__scopeId","data-v-18d246b8"]]);export{_,R as a};