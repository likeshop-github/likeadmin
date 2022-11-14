System.register([],(function(e){"use strict";return{execute:function(){e({a:function(e,r){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=d.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){var t=e.offsetWidth,h=e.offsetHeight,u=new ResizeObserver((function(){(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==t||e.offsetHeight!==h))&&l(e)})),f=n(e),z=f.detached,g=f.rendered;e.__resize_observer_triggered__=!1===z&&!1===g,e.__resize_observer__=u,u.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){l(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(s||(o=function(e){var r=document.createElement("style");return r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(r),r}('.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}')),function(e){var r=_(e,"position");r&&"static"!==r||(e.style.position="relative"),e.__resize_old_position__=r,e.__resize_last__={};var t=i("div",{className:"resize-triggers"}),n=i("div",{className:"resize-expand-trigger"}),s=i("div"),o=i("div",{className:"resize-contract-trigger"});n.appendChild(s),t.appendChild(n),t.appendChild(o),e.appendChild(t),e.__resize_triggers__={triggers:t,expand:n,expandChild:s,contract:o},c(e),e.addEventListener("scroll",a,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=n(e).rendered,window.MutationObserver){var v=new MutationObserver(e.__resize_mutation_handler__);v.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=v}e.__resize_listeners__.push(r),s++},r:function(e,r){var t=e.__resize_listeners__;if(t){if(r&&t.splice(t.indexOf(r),1),!t.length||!r){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",a),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--s&&o&&o.parentNode.removeChild(o)}}});var r=null,t=null;function i(e,r){void 0===r&&(r={});var t=document.createElement(e);return Object.keys(r).forEach((function(e){t[e]=r[e]})),t}function _(e,r,t){return(window.getComputedStyle(e,t||null)||{display:"none"})[r]}function n(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var r=e;r!==document;){if("none"===_(r,"display"))return{detached:!1,rendered:!1};r=r.parentNode}return{detached:!1,rendered:!0}}var s=0,o=null;function d(){var e=n(this),r=e.rendered,t=e.detached;r!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(c(this),this.addEventListener("scroll",a,!0)),this.__resize_rendered__=r,l(this))}function a(){var e,i,_=this;c(this),this.__resize_raf__&&(e=this.__resize_raf__,t||(t=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),t(e)),this.__resize_raf__=(i=function(){var e,r,t,i,n,s,o=(r=(e=_).__resize_last__,t=r.width,i=r.height,n=e.offsetWidth,s=e.offsetHeight,n!==t||s!==i?{width:n,height:s}:null);o&&(_.__resize_last__=o,l(_))},r||(r=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),r(i))}function l(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach((function(r){r.call(e,e)}))}function c(e){var r=e.__resize_triggers__,t=r.expand,i=r.expandChild,_=r.contract,n=_.scrollWidth,s=_.scrollHeight,o=t.offsetWidth,d=t.offsetHeight,a=t.scrollWidth,l=t.scrollHeight;_.scrollLeft=n,_.scrollTop=s,i.style.width=o+1+"px",i.style.height=d+1+"px",t.scrollLeft=a,t.scrollTop=l}}}}));