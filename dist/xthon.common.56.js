((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[56],{

/***/ "906c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaysSupport_vue_vue_type_style_index_0_id_88bca02c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e7ef");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaysSupport_vue_vue_type_style_index_0_id_88bca02c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaysSupport_vue_vue_type_style_index_0_id_88bca02c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaysSupport_vue_vue_type_style_index_0_id_88bca02c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d990":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"18d4bf25-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/explore/WaysSupport.vue?vue&type=template&id=88bca02c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"support__wrapper"},[_c('div',{staticClass:"container"},[_vm._t("heading"),(_vm.version === 1)?_c('div',{staticClass:"columns combo-wrapper is-multiline"},_vm._l((_vm.boxes1),function(box){return _c('ComboBox',{key:box.title,staticClass:"combo-box",attrs:{"iconsrc":box.imgsrc,"large":true,"layout":"standard"},on:{"image:clicked":function($event){_vm.openSocialMediaModal(box)}}},[(box.target === 'app')?_c('h4',[_c('router-link',{attrs:{"to":box.link}},[_vm._v(_vm._s(box.title))])],1):_vm._e(),(box.target === 'external')?_c('h4',[_c('a',{attrs:{"href":box.link,"target":box.target}},[_vm._v(_vm._s(box.title))])]):_vm._e(),(box.target === 'modal')?_c('h4',[_c('a',{on:{"click":function($event){_vm.showSocialMedia = true}}},[_vm._v(_vm._s(box.title))])]):_vm._e(),_c('div',[_c('p',{staticClass:"combo-box-p"},[_vm._v(_vm._s(box.text))]),_c('p',{staticClass:"combo-box-p"},[(box.target === 'external')?_c('a',{attrs:{"href":box.link,"target":box.target}},[_vm._v(_vm._s(box.cta))]):_vm._e(),(box.target === 'app')?_c('router-link',{attrs:{"to":box.link}},[_vm._v(_vm._s(box.cta))]):_vm._e(),(box.target === 'modal')?_c('a',{on:{"click":function($event){_vm.showSocialMedia = true}}},[_vm._v(_vm._s(box.cta))]):_vm._e()],1)]),(box.target === 'modal')?_c('Modal',{attrs:{"prevent-body-scroll":false,"state":_vm.showSocialMedia,"enable-esc":true},on:{"modal:close":function($event){_vm.showSocialMedia = false},"modal:open":function($event){_vm.showSocialMedia = true}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Social Media")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('SpreadSocialMedia',{attrs:{"url-params":null,"text":box.title,"via":"Volunteerathon","title":"Spread the word!"}})],1)]):_vm._e()],1)})):_vm._e(),(_vm.version === 2)?_c('div',{staticClass:"columns combo-wrapper is-multiline"},_vm._l((_vm.boxes2),function(box){return _c('ComboBox',{key:box.title,staticClass:"combo-box",attrs:{"iconsrc":box.imgsrc,"large":true,"layout":"standard"}},[(box.target === 'app')?_c('h4',[_c('router-link',{attrs:{"to":box.link}},[_vm._v(_vm._s(box.title))])],1):_vm._e(),(box.target === 'external')?_c('h4',[_c('a',{attrs:{"href":box.link,"target":box.target}},[_vm._v(_vm._s(box.title))])]):_vm._e(),(box.target === 'modal')?_c('h4',[_c('a',{on:{"click":function($event){_vm.showSocialMedia = true}}},[_vm._v(_vm._s(box.title))])]):_vm._e(),_c('div',[_vm._v("\n          "+_vm._s(box.text)),_c('br'),(box.target === 'external')?_c('a',{attrs:{"href":box.link,"target":box.target}},[_vm._v(_vm._s(box.cta))]):_vm._e(),(box.target === 'app')?_c('router-link',{attrs:{"to":box.link}},[_vm._v(_vm._s(box.cta))]):_vm._e(),(box.target === 'modal')?_c('a',{on:{"click":function($event){_vm.showSocialMedia = true}}},[_vm._v(_vm._s(box.cta))]):_vm._e()],1),(box.target === 'modal')?_c('Modal',{attrs:{"prevent-body-scroll":false,"state":_vm.showSocialMedia},on:{"modal:close":function($event){_vm.showSocialMedia = false},"modal:open":function($event){_vm.showSocialMedia = true}}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Social Media")]),_c('div',{attrs:{"slot":"content"},slot:"content"},[_c('SpreadSocialMedia',{attrs:{"url-params":null,"text":box.title,"via":"Volunteerathon","title":"Spread the word!"}})],1)]):_vm._e()],1)})):_vm._e()],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/explore/WaysSupport.vue?vue&type=template&id=88bca02c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/explore/WaysSupport.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var WaysSupportvue_type_script_lang_js_ = ({
  props: ['headline', 'imgsrc', 'tagline', 'cta', 'version'],

  /**
   * Uses dynamic import to speed up page performance.
   * See https://webpack.js.org/guides/code-splitting/ for reference.
   */
  components: {
    ComboBox: function ComboBox() {
      return __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "3a87"));
    },
    Modal: function Modal() {
      return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.bind(null, "a0d0"));
    },
    SpreadSocialMedia: function SpreadSocialMedia() {
      return __webpack_require__.e(/* import() */ 40).then(__webpack_require__.bind(null, "5559"));
    }
  },
  methods: {
    openSocialMediaModal: function openSocialMediaModal(box) {
      if (box.target === 'modal') {
        this.showSocialMedia = true;
      }
    }
  },
  data: function data() {
    return {
      showSocialMedia: false,
      boxes1: [{
        title: 'Volunteer',
        imgsrc: '/static/assets/images/support/hands-circle.jpeg',
        text: 'We have many volunteer opportunities including writing, marketing, research, web development and more.',
        cta: 'See details.',
        link: 'https://www.volunteermatch.org/search/org63665.jsp',
        target: 'external'
      }, {
        title: 'Donate',
        imgsrc: '/static/assets/images/support/heart-donate.jpeg',
        text: 'We help nonprofits do great things for the world. We rely on donations from kind people like you to make it possible.',
        cta: 'Please donate now.',
        link: '/nonprofit/830374559/donate',
        target: 'app'
      }, {
        title: 'Spread the word',
        imgsrc: '/static/assets/images/support/social-media.png',
        text: 'Please let people know about our nonprofit on social media by clicking the buttons above to follow or like us.',
        cta: 'For more sharing options, click here.',
        link: '/share',
        target: 'modal'
      }],
      boxes2: [{
        title: 'Volunteer',
        imgsrc: '/static/assets/images/support/hands-circle.jpeg',
        text: 'We have many volunteer opportunities including writing, marketing, research, web development and more.',
        cta: 'See details.',
        link: 'https://www.volunteermatch.org/search/org63665.jsp',
        target: 'external'
      }, {
        title: 'Donate',
        imgsrc: '/static/assets/images/support/heart-donate.jpeg',
        text: 'We help nonprofits do great things for the world. We rely on donations from kind people like you to make it possible.',
        cta: 'Please donate now.',
        link: '/nonprofit/830374559/donate',
        target: 'app'
      }, {
        title: 'Spread the word',
        imgsrc: '/static/assets/images/support/social-media.png',
        text: 'Please spread the word on social media with the buttons above to friend and like us.',
        cta: 'To see all sharing options, click here.',
        link: '/share',
        target: 'modal'
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/components/explore/WaysSupport.vue?vue&type=script&lang=js&
 /* harmony default export */ var explore_WaysSupportvue_type_script_lang_js_ = (WaysSupportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/explore/WaysSupport.vue?vue&type=style&index=0&id=88bca02c&scoped=true&lang=scss&
var WaysSupportvue_type_style_index_0_id_88bca02c_scoped_true_lang_scss_ = __webpack_require__("906c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/explore/WaysSupport.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  explore_WaysSupportvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "88bca02c",
  null
  
)

component.options.__file = "WaysSupport.vue"
/* harmony default export */ var WaysSupport = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e7ef":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=xthon.common.56.js.map