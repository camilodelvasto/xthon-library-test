(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c1aaf32"],{"13c2":function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{ref:"nonpToolbar"},[i("div",{staticClass:"share-toolbar__outer-wrapper",class:{"toolbar-visible":t.isVisible}},[i("h5",[t._v("Share")]),i("div",{staticClass:"share-toolbar__share-wrapper"},[i("div",{staticClass:"share-toolbar__share-item share-toolbar__share-share",on:{click:function(n){t.fb()}}},[i("Icons",{staticClass:"icon",attrs:{iconwidth:"24px",iconheight:"24px",icon:"facebook",color:"#666"}})],1),i("div",{staticClass:"share-toolbar__share-item share-toolbar__share-comment",on:{click:function(n){t.tweet()}}},[i("Icons",{staticClass:"icon",attrs:{iconwidth:"24px",iconheight:"24px",icon:"twitter",color:"#666"}})],1),i("div",{staticClass:"share-toolbar__share-item share-toolbar__share-donate",on:{click:function(n){t.linkedIn()}}},[i("Icons",{staticClass:"icon",attrs:{iconwidth:"24px",iconheight:"24px",icon:"linkedin",color:"#666"}})],1)])])])},o=[],c=i("4706"),a=i("3372"),s={props:["urlParams","text","via","title"],components:{Icons:c["default"]},data:function(){return{isVisible:!1}},methods:{handleScroll:function(){var t=this.$refs.nonpToolbar.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop,i=void 0!==document.height?document.height:document.body.offsetHeight;t.y<93&&n<i-1e3?this.isVisible=!0:this.isVisible=!1},fb:function(){this.isVisible&&a["b"](this.urlParams,this.text,this.via,this.title)},tweet:function(){this.isVisible&&a["d"](this.urlParams,this.text,this.via,this.title)},linkedIn:function(){this.isVisible&&a["c"](this.urlParams,this.text,this.via,this.title)},email:function(){this.isVisible&&a["a"](this.urlParams,this.text,this.via,this.title)}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},r=s,l=(i("81b1"),i("2877")),d=Object(l["a"])(r,e,o,!1,null,"9b2e3270",null);d.options.__file="FloatingShareTools.vue";n["default"]=d.exports},3372:function(t,n,i){"use strict";i.d(n,"d",function(){return e}),i.d(n,"c",function(){return o}),i.d(n,"a",function(){return c}),i.d(n,"b",function(){return a});i("a481");function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,e=arguments.length>3?arguments[3]:void 0,o="".concat(window.location.origin).concat(window.location.pathname),c=r(n);t&&(o+="?".concat(t)),c.length>111&&(c="".concat(c.substring(0,111),"..."));var a="https://twitter.com/intent/tweet/";s("".concat(a,"?url=").concat(encodeURIComponent(o),"&text=").concat(encodeURI(c),"&via=").concat(encodeURI(i)),"".concat(encodeURI(e)),450,320)}function o(t,n,i,e){var o="".concat(window.location.origin).concat(window.location.pathname),c="http://www.linkedin.com/shareArticle/",a=r(n);t&&(o+="?".concat(t)),a.length>211&&(a="".concat(a.substring(0,211),"...")),s("".concat(c,"?mini=true&url=").concat(encodeURIComponent(o),"&text=").concat(encodeURI(a)),"".concat(encodeURI(e)),650,420)}function c(t,n,i,e){document.querySelector(".at-share-btn").click()}function a(t,n,i,e){var o="".concat(window.location.origin).concat(window.location.pathname);t&&(o+="?".concat(t));var c=r(n);c.length>140&&(c="".concat(c.substring(0,140),"...")),window&&window.FB.ui({method:"share",href:encodeURIComponent(o),quote:encodeURI(c),hashtag:"#".concat(i)},function(t){return t})}function s(t,n,i,e){var o=void 0!==window.screenLeft?window.screenLeft:window.screenX,c=void 0!==window.screenTop?window.screenTop:window.screenY,a=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,r=a/2-i/2+o,l=s/2-e/2+c,d=window.open(t,n,"scrollbars=yes, width=".concat(i,", height=").concat(e,", top=").concat(l,", left=").concat(r));window.focus&&d.focus()}function r(t){return t.replace(/(<([^>]+)>)/gi,"")}},"81b1":function(t,n,i){"use strict";var e=i("df89"),o=i.n(e);o.a},df89:function(t,n,i){}}]);
//# sourceMappingURL=chunk-2c1aaf32.ac929641.js.map