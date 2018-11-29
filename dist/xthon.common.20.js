((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[20],{

/***/ "26d1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateView_vue_vue_type_style_index_0_id_0328eb8d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("34cb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateView_vue_vue_type_style_index_0_id_0328eb8d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateView_vue_vue_type_style_index_0_id_0328eb8d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonateView_vue_vue_type_style_index_0_id_0328eb8d_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "34cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f715":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f941195e-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/DonateView.vue?vue&type=template&id=0328eb8d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal is-active",class:("parent__" + _vm.parent)},[_c('div',{staticClass:"modal-background"}),_c('div',{staticClass:"modal-content donate-view donate-view__wrapper",attrs:{"id":"donate-view-modal-wrapper"}},[_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.donationStatus === 'started')?_c('DonateForm',{attrs:{"trigger":_vm.donationData.initiator.trigger,"parent":_vm.parent,"nonprofit":_vm.nonprofit,"fundraiser":_vm.fundraiser,"giving-levels":typeof _vm.fundraiser !== 'undefined' ? _vm.fundraiser.giving_levels : null},on:{"success":function($event){_vm.donationStatus = 'thanks'},"logged:in":function($event){_vm.scrollModalTop()},"close":function($event){_vm.$emit('close')}}}):_vm._e()],1),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.donationStatus === 'thanks')?_c('DonateThankYou',{attrs:{"parent":_vm.parent,"fundraiser":_vm.fundraiser,"nonprofit":_vm.nonprofit},on:{"success":function($event){_vm.donationStatus = 'userCreated'}}}):_vm._e()],1),_c('transition',{attrs:{"name":"fade","mode":"out-in"}},[(_vm.donationStatus === 'userCreated')?_c('DonateUserCreated',{on:{"success":function($event){_vm.$emit('close')}}}):_vm._e()],1),_c('button',{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{"click":function($event){_vm.$emit('close')}}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/DonateView.vue?vue&type=template&id=0328eb8d&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-meta/lib/vue-meta.js
var vue_meta = __webpack_require__("0a89");
var vue_meta_default = /*#__PURE__*/__webpack_require__.n(vue_meta);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/DonateView.vue?vue&type=script&lang=js&

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


external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_meta_default.a);
/* harmony default export */ var DonateViewvue_type_script_lang_js_ = ({
  props: ['parent'],

  /**
   * Uses dynamic import to speed up page performance.
   * See https://webpack.js.org/guides/code-splitting/ for reference.
   */
  components: {
    DonateForm: function DonateForm() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "880d"));
    },
    DonateThankYou: function DonateThankYou() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(43)]).then(__webpack_require__.bind(null, "85e6"));
    },
    DonateUserCreated: function DonateUserCreated() {
      return __webpack_require__.e(/* import() */ 55).then(__webpack_require__.bind(null, "95b0"));
    }
  },
  data: function data() {
    return {
      donationStatus: 'started'
    };
  },
  computed: {
    fundraiser: function fundraiser() {
      return this.$store.state.fundraiser;
    },
    nonprofit: function nonprofit() {
      var ein = this.$route.params.ein;
      return this.$store.state.nonprofit[ein];
    },
    donationData: function donationData() {
      return this.$store.state.userActions.donation;
    },
    common: function common() {
      return this.$store.state.common;
    }
  },
  mounted: function mounted() {
    document.body.classList.add('no-scroll');
  },
  destroyed: function destroyed() {
    document.body.classList.remove('no-scroll');
  },
  methods: {
    scrollModalTop: function scrollModalTop() {
      var wrapper = this.$el.querySelector('#donate-view-modal-wrapper');
      wrapper.scrollTop = 0;
    }
  },
  metaInfo: function metaInfo() {
    var description = this.parent === 'nonprofit' ? "Donate to this tax exempt organization. ".concat(this.nonprofit.NTEE_CD || this.nonprofit.ACTIVITY) : "Support ".concat(this.fundraiser.participant.name, "'s volunteerathon: ").concat(this.fundraiser.name, " for the nonprofit ").concat(this.fundraiser.nonprofit.name);
    var title = this.parent === 'nonprofit' ? this.nonprofit.NAME : this.fundraiser.name;
    var imgSrc = this.parent === 'nonprofit' ? this.nonprofit.data.hero ? this.nonprofit.data.hero.src : this.nonprofit.data.default_hero.src : this.fundraiser.data.media[0].src;
    var img = "".concat(this.$store.state.extra.request.protocol, "://").concat(this.$store.state.extra.request.host).concat(imgSrc);
    var imgWidth = this.parent === 'nonprofit' ? 1024 : 800;
    var imgHeight = this.parent === 'nonprofit' ? 340 : 533;
    return {
      title: "Donate | ".concat(title),
      meta: [{
        vmid: 'description',
        name: 'description',
        content: description
      }, {
        vmid: 'title',
        property: 'title',
        content: title
      }, {
        vmid: 'og:title',
        property: 'og:title',
        content: title
      }, {
        vmid: 'og:description',
        property: 'og:description',
        content: description
      }, {
        vmid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      }, {
        vmid: 'og:image',
        property: 'og:image',
        content: img
      }, {
        vmid: 'og:image:width',
        property: 'og:image:width',
        content: imgWidth
      }, {
        vmid: 'og:image:height',
        property: 'og:image:height',
        content: imgHeight
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/views/DonateView.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_DonateViewvue_type_script_lang_js_ = (DonateViewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/DonateView.vue?vue&type=style&index=0&id=0328eb8d&scoped=true&lang=scss&
var DonateViewvue_type_style_index_0_id_0328eb8d_scoped_true_lang_scss_ = __webpack_require__("26d1");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/DonateView.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  views_DonateViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0328eb8d",
  null
  
)

component.options.__file = "DonateView.vue"
/* harmony default export */ var DonateView = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.common.20.js.map