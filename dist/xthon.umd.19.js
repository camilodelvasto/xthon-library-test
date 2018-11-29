((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[19],{

/***/ "126c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaEditor_vue_vue_type_style_index_0_id_4d743da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1d47");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaEditor_vue_vue_type_style_index_0_id_4d743da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaEditor_vue_vue_type_style_index_0_id_4d743da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaEditor_vue_vue_type_style_index_0_id_4d743da8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1d47":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f5df":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"6e672800-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/MediaEditor.vue?vue&type=template&id=4d743da8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"media-editor__wrapper"},[_vm._t("heading",[_c('h2',[_vm._v("Gallery")])]),_vm._t("tagline"),_c('p',{staticClass:"unselectable"},[_c('a',{on:{"click":function($event){_vm.addImage()}}},[_vm._v("Add a photo")]),_vm._v(" or "),_c('a',{on:{"click":function($event){_vm.addVideo()}}},[_vm._v("video")]),_vm._v(" to engage your audience.")]),_vm._l((_vm.newMedia),function(item,index){return _c('div',{staticClass:"media-item"},[(item.type === 'image')?_c('InlineImageEditor',{attrs:{"open-id":_vm.newImageOpenId,"location":_vm.location,"item":item,"open-default":true,"edition-is-enabled":true},on:{"edition:open":function($event){_vm.newImageOpenId = $event},"edition:close":function($event){_vm.newImageOpenId = null},"image:remove":function($event){_vm.removeNewImage()}}}):_vm._e(),(item.type === 'video')?_c('InlineVideoEditor',{key:item.src,attrs:{"open-id":_vm.newImageOpenId,"location":_vm.location,"item":item,"open-default":true},on:{"edition:open":function($event){_vm.newImageOpenId = $event},"edition:close":function($event){_vm.newImageOpenId = null; _vm.removeNewVideo()},"image:remove":function($event){_vm.removeNewVideo()}}}):_vm._e()],1)}),_vm._l((_vm.mediaSource.media),function(item,index){return _c('div',{staticClass:"media-item"},[(item.type === 'video')?_c('InlineVideoEditor',{attrs:{"open-id":_vm.existingImageOpenId,"location":_vm.location,"item":item,"open-default":false},on:{"edition:open":function($event){_vm.existingImageOpenId = $event},"edition:close":function($event){_vm.existingImageOpenId = null}}}):_vm._e(),(item.type === 'image')?_c('InlineImageEditor',{key:item.src,attrs:{"item":item,"open-id":_vm.existingImageOpenId,"location":_vm.location,"edition-is-enabled":true},on:{"edition:open":function($event){_vm.existingImageOpenId = $event},"edition:close":function($event){_vm.existingImageOpenId = null}}}):_vm._e()],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/input/MediaEditor.vue?vue&type=template&id=4d743da8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/input/MediaEditor.vue?vue&type=script&lang=js&
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
/* harmony default export */ var MediaEditorvue_type_script_lang_js_ = ({
  props: ['mediaSource', 'location'],
  data: function data() {
    return {
      existingImageOpenId: null,
      newImageOpenId: null,
      newMedia: []
    };
  },
  components: {
    InlineImageEditor: function InlineImageEditor() {
      return __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, "145d"));
    },
    InlineVideoEditor: function InlineVideoEditor() {
      return __webpack_require__.e(/* import() */ 34).then(__webpack_require__.bind(null, "1028"));
    }
  },
  methods: {
    addImage: function addImage() {
      if (!this.newImageOpenId) {
        this.newMedia.push({
          src: '',
          type: 'image'
        });
      }
    },
    addVideo: function addVideo() {
      if (!this.newImageOpenId) {
        this.newMedia.push({
          src: '',
          type: 'video'
        });
      }
    },
    removeNewImage: function removeNewImage() {
      this.newMedia.pop();
    },
    removeNewVideo: function removeNewVideo() {
      this.newMedia.pop();
    }
  }
});
// CONCATENATED MODULE: ./src/components/input/MediaEditor.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_MediaEditorvue_type_script_lang_js_ = (MediaEditorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/input/MediaEditor.vue?vue&type=style&index=0&id=4d743da8&scoped=true&lang=scss&
var MediaEditorvue_type_style_index_0_id_4d743da8_scoped_true_lang_scss_ = __webpack_require__("126c");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/input/MediaEditor.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_MediaEditorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "4d743da8",
  null
  
)

component.options.__file = "MediaEditor.vue"
/* harmony default export */ var MediaEditor = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=xthon.umd.19.js.map