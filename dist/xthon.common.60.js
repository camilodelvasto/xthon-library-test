((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[60],{

/***/ "3f98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9f841f0c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/MediaViewer.vue?vue&type=template&id=4897761a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Modal',{staticClass:"modal-viewer__outer-wrapper",attrs:{"size":"medium","theme":"dark","prevent-body-scroll":false,"state":_vm.modalState,"enable-esc":true},on:{"modal:close":function($event){_vm.closeModals()},"modal:open":function($event){_vm.openModal()}}},[_c('div',{staticClass:"unselectable",attrs:{"slot":"trigger"},slot:"trigger"},[_vm._t("trigger")],2),_c('div',{staticClass:"modal-viewer__wrapper",attrs:{"slot":"content"},slot:"content"},[_c('flickity',{ref:"flickity",staticClass:"nonprofit-extended__media-wrapper",attrs:{"options":_vm.flickityOptions}},[_vm._l((_vm.media),function(item){return (item.type === 'image')?_c('img',{attrs:{"src":item.src}}):_vm._e()}),_vm._l((_vm.media),function(item,index){return (item.type === 'video')?_c('div',{staticClass:"plyr-wrapper"},[(_vm.canRender)?_c('VuePlyrWrapper',[_c('vue-plyr',{ref:("plyr_" + index),refInFor:true},[_c('div',{attrs:{"data-plyr-provider":"youtube","data-plyr-embed-id":item.src}})])],1):_vm._e()],1):_vm._e()})],2)],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/general/MediaViewer.vue?vue&type=template&id=4897761a&

// EXTERNAL MODULE: ./src/components/general/Icons.vue + 4 modules
var Icons = __webpack_require__("4706");

// EXTERNAL MODULE: ./src/components/general/Modal.vue + 4 modules
var Modal = __webpack_require__("a0d0");

// EXTERNAL MODULE: ./src/components/plugins/Flickity.vue + 4 modules
var Flickity = __webpack_require__("fbe1");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/general/MediaViewer.vue?vue&type=script&lang=js&
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




/* harmony default export */ var MediaViewervue_type_script_lang_js_ = ({
  props: ['media'],
  components: {
    Icons: Icons["default"],
    Flickity: Flickity["a" /* default */],
    Modal: Modal["default"],
    VuePlyrWrapper: function VuePlyrWrapper() {
      return Promise.all(/* import() */[__webpack_require__.e(11), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "1096"));
    }
  },
  data: function data() {
    return {
      modalState: false,
      currentCell: null,
      canRender: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        adaptiveHeight: true,
        lazyLoad: true
      }
    };
  },
  methods: {
    openModal: function openModal() {
      this.modalState = true;
      this.$emit('modal:open');
    },
    closeModals: function closeModals() {
      this.modalState = false;
      this.$emit('modal:close'); // On close, pause the current slide if it's a video.

      var flick = this.$refs.flickity;

      if (flick.$flickity.cells[this.currentCell].element.className.indexOf('plyr') > -1) {
        this.$refs["plyr_".concat(this.currentCell)][0].player.pause();
      }
    }
  },
  watch: {
    modalState: function modalState(value) {
      var _this = this;

      if (value) {
        external_commonjs_vue_commonjs2_vue_root_Vue_default.a.nextTick(function () {
          _this.$refs.flickity.resize();
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    var flick = this.$refs.flickity;
    this.currentCell = 0;
    this.canRender = true;
    /** Listen to a flickity event:
     * if there's a slide change and the previous one had a video, pause it.
     */

    flick.on('change', function () {
      // Auto play if there's video in the selected cell.
      if (flick.$flickity.cells[flick.selectedIndex()].element.className.indexOf('plyr') > -1) {
        _this2.$refs["plyr_".concat(flick.selectedIndex())][0].player.play();
      } // Auto pause if there's video in the previously selected cell.


      if (flick.$flickity.cells[_this2.currentCell].element.className.indexOf('plyr') > -1) {
        setTimeout(function () {
          _this2.$refs["plyr_".concat(_this2.currentCell)][0].player.pause();
        }, 50);
      }

      _this2.$emit('slideChange', flick);

      setTimeout(function () {
        _this2.currentCell = flick.selectedIndex();
      }, 50);
    });
  }
});
// CONCATENATED MODULE: ./src/components/general/MediaViewer.vue?vue&type=script&lang=js&
 /* harmony default export */ var general_MediaViewervue_type_script_lang_js_ = (MediaViewervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/general/MediaViewer.vue?vue&type=style&index=0&lang=scss&
var MediaViewervue_type_style_index_0_lang_scss_ = __webpack_require__("c897");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/general/MediaViewer.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  general_MediaViewervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "MediaViewer.vue"
/* harmony default export */ var MediaViewer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b9cb":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "c897":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b9cb");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaViewer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

}]);
//# sourceMappingURL=xthon.common.60.js.map