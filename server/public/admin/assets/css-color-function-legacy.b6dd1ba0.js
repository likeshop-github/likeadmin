System.register(["./color-legacy.b068fdf4.js"],(function(e){"use strict";var n;return{setters:[e=>{n=e.c}],execute:function(){var t,r,s=e("l",{}),o=function(e,n,t){for(var r=0,s={},o=0;o<t.length;o++)if(e==t.substr(o,e.length))"start"in s||(s.start=o),r++;else if(n==t.substr(o,n.length)&&"start"in s&&!--r)return s.end=o,s.pre=t.substr(0,s.start),s.body=s.end-s.start>1?t.substring(s.start+e.length,s.end):"",s.post=t.slice(s.end+n.length),s},a={exports:{}};function i(){if(r)return t;r=1;var e=1e3,n=60*e,s=60*n,o=24*s,a=7*o,i=365.25*o;function u(e,n,t,r){var s=n>=1.5*t;return Math.round(e/t)+" "+r+(s?"s":"")}return t=function(t,r){r=r||{};var c=typeof t;if("string"===c&&t.length>0)return function(t){if(!((t=String(t)).length>100)){var r=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(r){var u=parseFloat(r[1]);switch((r[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return u*i;case"weeks":case"week":case"w":return u*a;case"days":case"day":case"d":return u*o;case"hours":case"hour":case"hrs":case"hr":case"h":return u*s;case"minutes":case"minute":case"mins":case"min":case"m":return u*n;case"seconds":case"second":case"secs":case"sec":case"s":return u*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}(t);if("number"===c&&isFinite(t))return r.long?function(t){var r=Math.abs(t);return r>=o?u(t,r,o,"day"):r>=s?u(t,r,s,"hour"):r>=n?u(t,r,n,"minute"):r>=e?u(t,r,e,"second"):t+" ms"}(t):function(t){var r=Math.abs(t);return r>=o?Math.round(t/o)+"d":r>=s?Math.round(t/s)+"h":r>=n?Math.round(t/n)+"m":r>=e?Math.round(t/e)+"s":t+"ms"}(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}}var u=function(e){function n(e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}function t(e){var o;function a(){if(a.enabled){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=a,i=Number(new Date),u=i-(o||i);s.diff=u,s.prev=o,s.curr=i,o=i,n[0]=t.coerce(n[0]),"string"!=typeof n[0]&&n.unshift("%O");var c=0;n[0]=n[0].replace(/%([a-zA-Z%])/g,(function(e,r){if("%%"===e)return e;c++;var o=t.formatters[r];if("function"==typeof o){var a=n[c];e=o.call(s,a),n.splice(c,1),c--}return e})),t.formatArgs.call(s,n);var f=s.log||t.log;f.apply(s,n)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=n(e),a.destroy=r,a.extend=s,"function"==typeof t.init&&t.init(a),t.instances.push(a),a}function r(){var e=t.instances.indexOf(this);return-1!==e&&(t.instances.splice(e,1),!0)}function s(e,n){return t(this.namespace+(void 0===n?":":n)+e)}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){var n;t.save(e),t.names=[],t.skips=[];var r=("string"==typeof e?e:"").split(/[\s,]+/),s=r.length;for(n=0;n<s;n++)r[n]&&("-"===(e=r[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")));for(n=0;n<t.instances.length;n++){var o=t.instances[n];o.enabled=t.enabled(o.namespace)}},t.enabled=function(e){if("*"===e[e.length-1])return!0;var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=i(),Object.keys(e).forEach((function(n){t[n]=e[n]})),t.instances=[],t.names=[],t.skips=[],t.formatters={},t.selectColor=n,t.enable(t.load()),t};!function(e,n){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}n.log=function(){var e;return"object"===("undefined"==typeof console?"undefined":t(console))&&console.log&&(e=console).log.apply(e,arguments)},n.formatArgs=function(n){if(n[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+n[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),this.useColors){var t="color: "+this.color;n.splice(1,0,t,"color: inherit");var r=0,s=0;n[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),n.splice(s,0,t)}},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")}catch(t){}},n.load=function(){var e;try{e=n.storage.getItem("debug")}catch(t){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e},n.useColors=function(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||("undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},n.storage=function(){try{return localStorage}catch(e){}}(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=u(n),e.exports.formatters.j=function(e){try{return JSON.stringify(e)}catch(n){return"[UnexpectedJSONParseError]: "+n.message}}}(a,a.exports);var c=o,f=a.exports("css-color-function:parse"),l=function(e){function n(n){var t=n.exec(e);if(t)return e=e.slice(t[0].length),t.slice(1)}function t(){n(/^\s+/)}function r(){var e=n(/^([\+\-\*])/);if(e){var t={type:"modifier"};return t.value=e[0],f("modifier %o",t),t}}function s(){var e=n(/^([^\)\s]+)/);if(e){var t={type:"number"};return t.value=e[0],f("number %o",t),t}}function o(){var e=n(/^(\w+)\(/);if(e){t();var o={type:"function"};return o.name=e[0],o.arguments=function(){for(var e,n=[];e=r()||i()||s();)n.push(e),t();return f("args %o",n),n}(),function(){var e=n(/^\)/);e&&f("rparen")}(),f("adjuster %o",o),o}}function a(){var e={type:"color"},r=n(/([^\)\s]+)/)[0];return-1!=r.indexOf("(")&&(r+=n(/([^\)]*?\))/)[0]),e.value=r,t(),e}function i(){if(e.match(/^color\(/)){var n=c("(",")",e);if(!n)throw new SyntaxError("Missing closing parenthese for '"+e+"'");if(""===n.body)throw new SyntaxError("color() function cannot be empty");e=n.body,t();var r,s={type:"function",name:"color"};for(s.arguments=[i()||a()],f("function arguments %o",s.arguments);r=o();)s.arguments.push(r),t();return e=n.post,t(),f("function %o",s),s}}return"string"!=typeof e&&(e=e.toString()),f("string %s",e),i()},C={};!function(e){var t=n;function r(e){return function(n,t){var r;"modifier"==t[0].type&&(r=t.shift().value);var s=t[0].value;-1!=s.indexOf("%")?(s=parseInt(s,10)/100,r?"*"!=r&&(s=n[e]()*s):s*="alpha"==e?1:255):s=Number(s),n[e](o(n[e](),s,r))}}function s(e){return function(n,t){var r;"modifier"==t[0].type&&(r=t.shift().value);var s=parseFloat(t[0].value,10);n[e](o(n[e](),s,r))}}function o(e,n,t){switch(t){case"+":return e+n;case"-":return e-n;case"*":return e*n;default:return n}}e.red=r("red"),e.blue=r("blue"),e.green=r("green"),e.alpha=e.a=r("alpha"),e.rgb=function(){},e.hue=e.h=s("hue"),e.saturation=e.s=s("saturation"),e.lightness=e.l=s("lightness"),e.whiteness=e.w=s("whiteness"),e.blackness=e.b=s("blackness"),e.blend=function(e,n){var r=e.alpha();e.alpha(1);var s=new t(n[0].value),o=1-parseInt(n[1].value,10)/100;e.mix(s,o).alpha(r)},e.tint=function(n,t){t.unshift({type:"argument",value:"white"}),e.blend(n,t)},e.shade=function(n,t){t.unshift({type:"argument",value:"black"}),e.blend(n,t)},e.contrast=function(e,n){0==n.length&&n.push({type:"argument",value:"100%"});var r=1-parseInt(n[0].value,10)/100,s=e.luminosity()<.5?new t({h:e.hue(),w:100,b:0}):new t({h:e.hue(),w:0,b:100}),o=s;if(e.contrast(s)>4.5){o=function(e,n,t){n.hue();for(var r=n.clone(),s=n.whiteness(),o=n.blackness(),a=t.whiteness(),i=t.blackness();Math.abs(s-a)>1||Math.abs(o-i)>1;){var u=Math.round((a+s)/2),c=Math.round((i+o)/2);r.whiteness(u),r.blackness(c),r.contrast(n)>e?(a=u,i=c):(s=u,o=c)}return r}(4.5,e,s);var a=o.alpha();o.alpha(1),o.mix(s,r).alpha(a)}e.hwb(o.hwb())}}(C);var d=o,h=n,p=l,g=C,m=function e(n){var t=n.indexOf("color(");if(-1==t)return n;if(n=n.slice(t),!(n=d("(",")",n)))throw new SyntaxError("Missing closing parenthese for '"+n+"'");return v(p("color("+n.body+")"))+e(n.post)};function v(e){var n=new h("function"==e.arguments[0].type?v(e.arguments[0]):e.arguments[0].value);return e.arguments.slice(1).forEach((function(e){var t=e.name;if(!g[t])throw new Error("Unknown <color-adjuster> '"+t+"'");e.arguments.forEach((function(e){"function"==e.type&&"color"==e.name&&(e.value=v(e),e.type="color",delete e.name)})),g[t](n,e.arguments)})),n.rgbString()}var y=m,F=l;s.convert=y,s.parse=F}}}));