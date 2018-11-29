(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9e6f4e0","chunk-2f2786f0","chunk-c3349d6e"],{"0d0d":function(t,e,n){"use strict";var i=n("a304"),r=n.n(i);r.a},5249:function(t,e,n){"use strict";var i=n("684e"),r=n.n(i);r.a},"5abe":function(t,e){(function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){var e=this._observationTargets.some(function(e){return e.element==t});if(!e){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(a(t,"resize",this._checkForIntersections,!0),a(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(t,"resize",this._checkForIntersections,!0),c(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():d();this._observationTargets.forEach(function(n){var r=n.element,s=u(r),a=this._rootContainsTarget(r),c=n.entry,h=t&&a&&this._computeTargetAndRootIntersection(r,e),d=n.entry=new i({time:o(),target:r,boundingClientRect:s,rootBounds:e,intersectionRect:h});c?t&&a?this._hasCrossedThreshold(c,d)&&this._queuedEntries.push(d):c&&c.isIntersecting&&this._queuedEntries.push(d):this._queuedEntries.push(d)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,i){if("none"!=t.getComputedStyle(n).display){var r=u(n),o=r,s=f(n),a=!1;while(!a){var c=null,d=1==s.nodeType?t.getComputedStyle(s):{};if("none"==d.display)return;if(s==this.root||s==e?(a=!0,c=i):s!=e.body&&s!=e.documentElement&&"visible"!=d.overflow&&(c=u(s)),c&&(o=h(c,o),!o))break;s=f(s)}return o}},r.prototype._getRootRect=function(){var t;if(this.root)t=u(this.root);else{var n=e.documentElement,i=e.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var r=0;r<this.thresholds.length;r++){var o=this.thresholds[r];if(o==n||o==i||o<n!==o<i)return!0}},r.prototype._rootIsInDom=function(){return!this.root||l(e,this.root)},r.prototype._rootContainsTarget=function(t){return l(this.root||e,t)},r.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},r.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=i}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||d(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect,r=i.width*i.height;this.intersectionRatio=n?Number((r/n).toFixed(4)):this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=s(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(){return t.performance&&performance.now&&performance.now()}function s(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function a(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function h(t,e){var n=Math.max(t.top,e.top),i=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),o=Math.min(t.right,e.right),s=o-r,a=i-n;return s>=0&&a>=0&&{top:n,bottom:i,left:r,right:o,width:s,height:a}}function u(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):d()}function d(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t,e){var n=e;while(n){if(n==t)return!0;n=f(n)}return!1}function f(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}})(window,document)},"623f":function(t,e,n){"use strict";n.r(e),n.d(e,"VLazyImagePlugin",function(){return r});var i={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:""},srcset:{type:String},isBackground:{type:Boolean},isEditable:{type:Boolean},intersectionOptions:{type:Object,default:function(){return{}}},defaultText:{type:String}},data:function(){return{observer:null,intersected:!1,loaded:!1}},computed:{srcImage:function(){return this.intersected?this.src:this.srcPlaceholder},srcsetImage:function(){return!(!this.intersected||!this.srcset)&&this.srcset}},render:function(t){return this.isBackground?t("div",{style:{"background-image":"url(".concat(this.srcImage,")")},class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded}},[this.srcImage||!this.isEditable?"":this.defaultText]):t("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded}})},mounted:function(){var t=this;this.$el.addEventListener("load",function(e){t.$el.getAttribute("src")!==t.srcPlaceholder&&(t.loaded=!0,t.$emit("load"))}),"undefined"!==typeof window&&(n("5abe"),this.observer=new IntersectionObserver(function(e){var n=e[0];n.isIntersecting&&(t.intersected=!0,t.observer.disconnect(),t.$emit("intersect"))},this.intersectionOptions),this.observer.observe(this.$el))},destroyed:function(){this.observer.disconnect()}};e["default"]=i;var r={install:function(t,e){t.component("VLazyImage",i)}}},"684e":function(t,e,n){},a304:function(t,e,n){},eaf4:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"donate",on:{click:function(e){t.donate()}}},[t._t("default")],2)},r=[],o=(n("7f7f"),{props:["fundraiserId","trigger","givingLevel","commentId","updateId","nonprofitEin"],methods:{donate:function(){var t={fundraiserId:this.fundraiserId,commentId:this.commentId,fullPath:"".concat(window.location.origin).concat(window.location.pathname),givingLevel:this.givingLevel,nonprofitEin:this.nonprofitEin,referrer:window.location.href,timestamp:Math.floor(Date.now()/1e3),trigger:this.trigger,updateId:this.updateId};this.$store.dispatch("START_DONATION",{initiator:t}),this.nonprofitEin?this.$router.push("/nonprofit/".concat(this.nonprofitEin,"/donate")):this.$router.push({name:"".concat(this.$route.name,"/donate"),params:this.$route.params})}}}),s=o,a=(n("5249"),n("2877")),c=Object(a["a"])(s,i,r,!1,null,"16ec67de",null);c.options.__file="DonateAction.vue";e["default"]=c.exports},f0d4:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.fundraiser.participant?n("div",{staticClass:"fundraiser-nonprofit-organization__wrapper"},[n("p",[n("span",{domProps:{innerHTML:t._s(t.fundraiser.participant.name)}}),t._v(" is raising money for: ")]),n("div",{staticClass:"this-nonprofit__wrapper"},[t.fundraiser.nonprofit?n("figure",{staticClass:"fundraiser-lower__logo-wrapper"},[n("LazyLoadedImage",{staticClass:"fundraiser-lower__logo",attrs:{width:"200",src:t.fundraiser.nonprofit.logo_square}})],1):t._e(),n("div",{staticClass:"this-nonprofit__right-side"},[n("span",{staticClass:"this-nonprofit__title",domProps:{innerHTML:t._s(t.fundraiser.nonprofit.name)}}),n("div",{staticClass:"fundraiser-lower__button-wrapper"},[n("router-link",{attrs:{to:"/nonprofit/"+t.fundraiser.nonprofit.EIN}},[n("button",{staticClass:"button button-style is-warning"},[t._v("View profile")])]),n("button",{staticClass:"button button-style is-info"},[n("DonateAction",{attrs:{"nonprofit-ein":t.fundraiser.nonprofit.EIN,trigger:"fundraiser/lower/left/organization"}},[t._v("\n            Contribute\n          ")])],1)],1),n("p",{staticClass:"help"},[t._v("This is an IRS-approved 501(c)"+t._s(t.fundraiser.nonprofit.SUBSECTION)+" charity, so"),n("br"),t._v("your donation is 100% tax deductible")])])])]):t._e()},r=[],o=n("eaf4"),s=n("623f"),a={props:["fundraiser"],components:{DonateAction:o["default"],LazyLoadedImage:s["default"]}},c=a,h=(n("0d0d"),n("2877")),u=Object(h["a"])(c,i,r,!1,null,"72423ecb",null);u.options.__file="FundraiserNonprofitDetails.vue";e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-b9e6f4e0.90d24963.js.map