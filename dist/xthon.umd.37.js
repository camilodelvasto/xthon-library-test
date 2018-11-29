((typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || []).push([[37],{

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "267e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserLowerBody_vue_vue_type_style_index_0_id_3529afe2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6102");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserLowerBody_vue_vue_type_style_index_0_id_3529afe2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserLowerBody_vue_vue_type_style_index_0_id_3529afe2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FundraiserLowerBody_vue_vue_type_style_index_0_id_3529afe2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "6102":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "d36e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4443aff0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fundraiser/FundraiserLowerBody.vue?vue&type=template&id=3529afe2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container is-fluid white-bg"},[_c('div',{staticClass:"fundraiser-body__tab-section"},[_c('div',{staticClass:"fundraiser-lower__body-wrapper"},[_c('div',{staticClass:"tabs is-toggle"},[_c('div',{staticClass:"tabs__bottom-line"}),_c('ul',[_c('li',{class:{'is-active': _vm.currentTab === 1},on:{"click":function($event){_vm.currentTab = 1}}},[_c('a',[_vm._v("Home")])]),_c('li',{class:{'is-active': _vm.currentTab === 2},on:{"click":function($event){_vm.currentTab = 2}}},[_c('a',[_vm._v("Donors ("+_vm._s(_vm.donationsByAmount.length)+")")])]),_c('li',{class:{'is-active': _vm.currentTab === 3},on:{"click":function($event){_vm.currentTab = 3}}},[_c('a',[_vm._v("Shares ("+_vm._s(_vm.fundraiser.shared_count)+")")])]),_c('li',{class:{'is-active': _vm.currentTab === 4},on:{"click":function($event){_vm.currentTab = 4}}},[_c('a',[_vm._v("Comments ("+_vm._s(_vm.fundraiser.comments_count)+")")])]),_c('li',{class:{'is-active': _vm.currentTab === 5},on:{"click":function($event){_vm.currentTab = 5}}},[_c('a',[_vm._v("Updates ("+_vm._s(_vm.fundraiser.updates_count)+")")])])])]),_c('div',{staticClass:"columns fundraiser-lower__columns"},[_c('div',{staticClass:"column is-8 fundraiser-lower__left-column"},[_c('transition-group',{attrs:{"name":"stretch"}},[(_vm.currentTab === 1)?_c('div',{key:"1",staticClass:"fundraiser-lower__tabs-tab"},[_c('div',{staticClass:"tab-section tab-section__updates"},[(_vm.canEdit)?_c('p',{},[(_vm.editing)?_c('a',{staticClass:"button is-light is-rounded is-medium",on:{"click":function($event){_vm.closeEditor()}}},[_vm._v("Stop editing")]):_vm._e(),(!_vm.editing)?_c('a',{staticClass:"button is-light is-rounded is-medium",on:{"click":function($event){_vm.openEditor()}}},[_vm._v("Edit this section")]):_vm._e()]):_vm._e(),_c('h2',[_vm._v("More Info")]),_c('InlineRichTextEditor',{ref:"fundraiserParticipant",attrs:{"error-text":"This field can't be empty","value":_vm.fundraiser.intro_text,"edition-is-enabled":_vm.editing,"placeholder":"Add an intro text for this fundraiser","location":"fundraiser.intro_text"}})],1),_c('div',{staticClass:"tab-section tab-section__updates"},[_c('h2',[_vm._v("Updates "),_c('span',[(_vm.editing)?_c('a',{staticClass:"button is-rounded is-outlined is-medium is-pulled-right",on:{"click":function($event){_vm.addNewUpdate()}}},[_vm._v("Add a new update")]):_vm._e()])]),(_vm.newUpdate)?_c('InlineRichTextEditor',{ref:"newUpdate",staticClass:"new-update-wrapper",attrs:{"error-text":"This field can't be empty","value":_vm.tempUpdateContent,"edition-is-enabled":_vm.editing,"default-open":true,"placeholder":"Add an update"},on:{"edit:close":function($event){_vm.closeNewUpdate()},"edit:save":function($event){_vm.saveNewUpdate()}}}):_vm._e(),_c('div',{staticClass:"user-optional__updates-wrapper"},[_c('FundraiserUpdates',{attrs:{"updates":_vm.updates,"count":_vm.updatesCount,"fundraiser-id":_vm.fundraiser.fundraiser_id,"maxchar":"700"}}),(_vm.moreUpdates)?_c('button',{staticClass:"button is-warning is-load-more",on:{"click":function($event){_vm.loadMoreUpdates()}}},[_vm._v("Load more updates")]):_vm._e()],1)],1),(_vm.canEdit)?_c('p',[(_vm.editing)?_c('a',{staticClass:"button is-light is-rounded is-medium",on:{"click":function($event){_vm.closeEditor()}}},[_vm._v("Stop editing")]):_vm._e()]):_vm._e(),_c('h2',[_vm._v("Nonprofit Organization")]),_c('div',{staticClass:"tab-section tab-section__header"},[_c('FundraiserNonprofitDetails',{attrs:{"fundraiser":_vm.fundraiser}})],1),_c('div',{staticClass:"tab-section tab-section__comments"},[_c('h2',[_vm._v("Comments")]),_c('Comments',{attrs:{"comments":_vm.comments,"more-comments":_vm.moreComments,"fundraiser-id":_vm.fundraiser.fundraiser_id},on:{"loadMoreComments":function($event){_vm.loadMoreComments()}}}),_c('router-link',{staticClass:"button fundraiser-lower__cta-start is-info is-large",attrs:{"to":"/fundraiser/create"}},[_vm._v("Start your own fundraiser")])],1)]):_vm._e(),(_vm.currentTab === 2)?_c('div',{key:"2",staticClass:"fundraiser-lower__tabs-tab"},[_c('DonorsList',{attrs:{"section-title":"Donors","view-all-cta":"View all","donations":_vm.donationsByAmount,"layout":"horizontal"},on:{"loadDonationsTab":function($event){_vm.loadTab(2)}}})],1):_vm._e(),(_vm.currentTab === 4)?_c('div',{key:"4",staticClass:"fundraiser-lower__tabs-tab"},[_c('h2',[_vm._v("Comments")]),_c('Comments',{attrs:{"comments":_vm.comments,"more-comments":_vm.moreComments,"fundraiser-id":_vm.fundraiser.fundraiser_id},on:{"loadMoreComments":function($event){_vm.loadMoreComments()}}}),_c('div',{staticClass:"button fundraiser-lower__cta-start is-info is-large"},[_vm._v("\n                Start your own fundraiser\n              ")])],1):_vm._e(),(_vm.currentTab === 5)?_c('div',{key:"5",staticClass:"fundraiser-lower__tabs-tab"},[_c('div',{staticClass:"tab-section tab-section__updates"},[(_vm.canEdit)?_c('p',{},[(_vm.editing)?_c('a',{staticClass:"button is-light is-rounded is-medium",on:{"click":function($event){_vm.closeEditor()}}},[_vm._v("Stop editing")]):_vm._e(),(!_vm.editing)?_c('a',{staticClass:"button is-light is-rounded is-medium",on:{"click":function($event){_vm.openEditor()}}},[_vm._v("Edit this section")]):_vm._e()]):_vm._e(),_c('h2',[_vm._v("Updates "),_c('span',[(_vm.editing)?_c('a',{staticClass:"button is-rounded is-outlined is-medium is- is-pulled-right",on:{"click":function($event){_vm.addNewUpdate()}}},[_vm._v("Add a new update")]):_vm._e()])]),(_vm.newUpdate)?_c('InlineRichTextEditor',{ref:"newUpdate",attrs:{"error-text":"This field can't be empty","value":_vm.tempUpdateContent,"edition-is-enabled":_vm.editing,"default-open":true,"placeholder":"Add an update"},on:{"edit:close":function($event){_vm.closeNewUpdate()},"edit:save":function($event){_vm.saveNewUpdate()}}}):_vm._e(),_c('div',{staticClass:"user-optional__updates-wrapper"},[_c('FundraiserUpdates',{attrs:{"updates":_vm.updates,"count":_vm.updatesCount,"fundraiser-id":_vm.fundraiser.fundraiser_id,"maxchar":"700"}}),(_vm.moreUpdates)?_c('button',{staticClass:"button is-warning is-load-more",on:{"click":function($event){_vm.loadMoreUpdates()}}},[_vm._v("Load more updates")]):_vm._e()],1)],1)]):_vm._e()])],1),_c('transition',{attrs:{"name":"fade"}},[(_vm.currentTab === 1)?_c('div',{key:"2",staticClass:"column is-4 fundraiser-lower__right-column"},[(_vm.fundraiser.giving_levels)?_c('div',{staticClass:"tab-section tab-section__giving-level"},[_c('h4',{staticClass:"lower-body-right-column__title"},[_vm._v("Choose a giving level")]),_c('div',{staticClass:"user-optional__giving-level-wrapper"},_vm._l((_vm.fundraiser.giving_levels),function(givingLevel,index){return _c('FundraiserGivingLevel',{key:index,attrs:{"level":givingLevel,"fundraiser":_vm.fundraiser}})}))]):_vm._e(),_c('div',{staticClass:"top-donors"},[_c('DonorsList',{attrs:{"section-title":"Donors","view-all-cta":"View all","donations":_vm.donationsByAmount,"layout":"top"},on:{"loadDonationsTab":function($event){_vm.loadTab(2)}}})],1),_c('div',{staticClass:"recent-donations"},[_c('DonorsList',{attrs:{"section-title":"Recent Donations","view-all-cta":"View all","donations":_vm.donationsByDate,"layout":"recent"},on:{"loadDonationsTab":function($event){_vm.loadTab(2)}}}),(_vm.moreDonations)?_c('button',{staticClass:"button is-warning is-load-more",on:{"click":function($event){_vm.loadMoreDonations()}}},[_vm._v("Load more donations")]):_vm._e()],1),_c('div',{staticClass:"raised-through-sharing"},[_c('DonorsList',{attrs:{"section-title":"Raised Through Sharing","view-all-cta":"View all","donations":_vm.donationsBySharing,"limit":3,"layout":"sharing"},on:{"loadDonationsTab":function($event){_vm.loadTab(3)}}}),(_vm.moreDonations)?_c('button',{staticClass:"button is-warning is-load-more",on:{"click":function($event){_vm.loadMoreDonations()}}},[_vm._v("Load more donations")]):_vm._e()],1),_c('div',{staticClass:"button fundraiser-pledge__cta is-success is-large"},[_c('DonateAction',{attrs:{"fundraiser-id":_vm.fundraiser.fundraiser_id,"trigger":"fundraiser/lower/right/donors"}},[_vm._v("\n                Donate now\n              ")])],1)]):_vm._e()])],1)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/fundraiser/FundraiserLowerBody.vue?vue&type=template&id=3529afe2&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/fundraiser/FundraiserLowerBody.vue?vue&type=script&lang=js&





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
//
/* harmony default export */ var FundraiserLowerBodyvue_type_script_lang_js_ = ({
  props: ['fundraiser', 'editing', 'canEdit'],
  components: {
    FundraiserGivingLevel: function FundraiserGivingLevel() {
      return __webpack_require__.e(/* import() */ 44).then(__webpack_require__.bind(null, "fb73"));
    },
    FundraiserNonprofitDetails: function FundraiserNonprofitDetails() {
      return __webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(null, "f0d4"));
    },
    FundraiserUpdates: function FundraiserUpdates() {
      return __webpack_require__.e(/* import() */ 26).then(__webpack_require__.bind(null, "5b1f"));
    },
    Comments: function Comments() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, "74e1"));
    },
    DonateAction: function DonateAction() {
      return __webpack_require__.e(/* import() */ 57).then(__webpack_require__.bind(null, "eaf4"));
    },
    DonorsList: function DonorsList() {
      return __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "e1cb"));
    },
    InlineRichTextEditor: function InlineRichTextEditor() {
      return Promise.all(/* import() */[__webpack_require__.e(71), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, "1573"));
    }
  },
  data: function data() {
    return {
      currentTab: 1,
      mounted: false,
      tempUpdateContent: '',
      newUpdate: false
    };
  },
  computed: {
    moreComments: function moreComments() {
      return false;
      return showMoreButton(this.$store.state, 'comments');
    },
    moreDonations: function moreDonations() {
      return false;
      return showMoreButton(this.$store.state, 'donations');
    },
    moreUpdates: function moreUpdates() {
      return false;
      return showMoreButton(this.$store.state, 'updates');
    },
    donationsByAmount: function donationsByAmount() {
      var donations = this.$store.state.donations.data;

      if (!donations) {
        return [];
      }

      var sorted = donations.sort(function (a, b) {
        return b.amount - a.amount;
      });
      return sorted;
    },
    donationsByDate: function donationsByDate() {
      var donations = this.$store.state.donations.data;
      var sorted = donations.slice().sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });
      return sorted;
    },
    donationsBySharing: function donationsBySharing() {
      var donations = this.$store.state.donations.data;

      if (!donations) {
        return [];
      }

      var sorted = donations.slice().sort(function (a, b) {
        return a.amount > b.amount;
      });
      var modified = [];

      if (sorted.length) {
        donations.map(function (part) {
          var p = Object.assign({}, part);
          p.amount *= 2.2;
          modified.push(p);
        });
        return modified;
      }

      return [];
    },
    updatesCount: function updatesCount() {
      return this.$store.state.updates.data.length;
    },
    updates: function updates() {
      return this.$store.state.updates.data;
    },
    comments: function comments() {
      return this.$store.state.comments.data;
    },
    common: function common() {
      return this.$store.state.common;
    }
  },
  methods: {
    /**
     * Fetch the comments for this fundraiser.
     * This was abstracted to a function so that it can be reused.
     */
    loadMoreComments: function loadMoreComments() {
      var paginated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.moreComments) {
        var fundraiserId = this.$route.params.id;
        return this.$store.dispatch('FETCH_COMMENTS', {
          fundraiserId: fundraiserId,
          paginated: paginated
        }).then(function (data) {
          return data;
        }).catch(function (err) {
          console.log(err);
        });
      }
    },

    /**
     * Fetch the donations for this fundraiser.
     * This was abstracted to a function so that it can be reused.
     */
    loadMoreDonations: function loadMoreDonations() {
      var paginated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (this.moreDonations) {
        var fundraiserId = this.$route.params.id;
        return this.$store.dispatch('FETCH_DONATIONS', {
          fundraiserId: fundraiserId,
          paginated: paginated
        }).then(function (data) {
          return data;
        }).catch(function (err) {
          console.log(err);
        });
      }
    },

    /**
     * Fetch the updates for this fundraiser.
     * This was abstracted to a function so that it can be reused.
     */
    loadMoreUpdates: function loadMoreUpdates() {
      var _this = this;

      var paginated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return new Promise(function (resolve, reject) {
        var fundraiserId = _this.$route.params.id;

        if (_this.moreUpdates) {
          return _this.$store.dispatch('FETCH_UPDATES', {
            fundraiserId: fundraiserId,
            paginated: paginated
          }).then(function (data) {
            resolve(data);
          }).catch(function (err) {
            reject(err);
          });
        }
      });
    },

    /**
     * Select the active tab.
     */
    loadTab: function loadTab(tab) {
      this.currentTab = tab;
    },

    /**
     * Recursively keep loading updates until the update in the params is found.
     * Or until there are no more updates to load from the DB.
     * This is needed when the visiting URL includes an update parameter,
     * which indicates a visitor coming from a shared update in the fundraiser page.
     */
    loadUpdatesAndScrollTo: function loadUpdatesAndScrollTo(itemId) {
      var _this2 = this;

      var target = "#update_".concat(itemId);
      var targetExists = this.updates.find(function (update) {
        return update.id === parseInt(itemId, 10);
      });

      if (targetExists) {
        this.$scrollTo(target, {
          offset: -200
        });
      } else if (this.moreUpdates) {
        return this.loadMoreUpdates().then(function (data) {
          if (data) {
            return _this2.loadUpdatesAndScrollTo(itemId);
          }
        }).catch(function (err) {
          return err;
        });
      } else {
        return {
          code: 404
        };
      }
    },

    /**
     * Recursively keep loading comments until the selected one in the params is found.
     * Or until there are no more comments to load from the DB.
     * This is needed when the visiting URL includes a comment parameter,
     * which indicates a visitor coming from a shared comment in the fundraiser page.
     */
    loadCommentsAndScrollTo: function loadCommentsAndScrollTo(itemId) {
      var _this3 = this;

      var target = "#comment_".concat(itemId);
      var targetExists = false;
      this.comments.forEach(function (comment) {
        if (comment.id === parseInt(itemId, 10)) {
          targetExists = true;
        }

        if (comment.replies && comment.replies.length) {
          var a = comment.replies.find(function (reply) {
            return reply.id === parseInt(itemId, 10);
          });

          if (a) {
            targetExists = true;
          }
        }
      });

      if (targetExists) {
        this.$scrollTo(target, {
          offset: -200
        });
      } else if (this.moreComments && this.mounted) {
        return this.loadMoreComments().then(function (data) {
          if (data) {
            return _this3.loadCommentsAndScrollTo(itemId);
          }
        }).catch(function (err) {
          return err;
        });
      } else {
        return {
          code: 404
        };
      }
    },
    closeEditor: function closeEditor() {
      this.$emit('edit:close');
    },
    openEditor: function openEditor() {
      this.$emit('edit:open');
    },
    addNewUpdate: function addNewUpdate() {
      this.newUpdate = true;
    },
    closeNewUpdate: function closeNewUpdate() {
      this.newUpdate = false;
      this.tempUpdateContent = '';
    },
    saveNewUpdate: function saveNewUpdate() {
      this.$store.dispatch('ADD_NEW_UPDATE', {
        fundraiserId: this.fundraiser.fundraiser_id,
        update: this.tempUpdateContent
      }).then(function () {
        console.log('update added');
      }).catch(function (err) {
        console.log(err);
      });
    }
  },

  /**
   * Load updates, comments and donations on the mounted hook.
   * Below-the-fold items, are only loaded in the client, not in the server.
   */
  mounted: function mounted() {
    var _this4 = this;

    if (this.moreUpdates && this.$store.state.updates.current === 1) {
      this.loadMoreUpdates();
    }

    if (this.moreComments && this.$store.state.comments.current === 1) {
      this.loadMoreComments();
    }

    if (this.moreDonations && this.$store.state.donations.current === 1) {
      this.loadMoreDonations();
    }
    /**
     * If there's an update ID in the URL params, recursively load updates and scroll to them.
     */


    var updateId = this.$route.query.update_id;

    if (updateId && this.moreUpdates) {
      this.currentTab = 5;
      setTimeout(function () {
        _this4.loadUpdatesAndScrollTo(updateId);
      }, 4500);
    }
    /**
     * If there's a comment ID in the URL params, recursively load comments and scroll to them.
     */


    var commentId = this.$route.query.comment_id;

    if (commentId && this.moreComments) {
      this.currentTab = 4;
      setTimeout(function () {
        _this4.loadCommentsAndScrollTo(commentId);
      }, 4500);
    }
  },
  watch: {
    /**
     * Automatically load a new set of updates if the user chooses the Updates tab.
     * This way there are 2x updates shown in the tab compared to the main (default) home view,
     * where there are by default just 1x updates being shown.
     */
    currentTab: function currentTab(newVal) {
      if (newVal === 5) {
        if (this.moreUpdates) {
          this.loadMoreUpdates();
        }
      }
    }
  }
});
/**
 * Helper function to determine if the show more button should appear or not.
 */

function showMoreButton(state, arg) {
  var limit = state[arg].limit;
  var current = state[arg].current;
  var count = state.fundraiser["".concat(arg, "_count")];
  var totalPages = Math.ceil(count / limit);
  return totalPages >= current;
}
// CONCATENATED MODULE: ./src/components/fundraiser/FundraiserLowerBody.vue?vue&type=script&lang=js&
 /* harmony default export */ var fundraiser_FundraiserLowerBodyvue_type_script_lang_js_ = (FundraiserLowerBodyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/fundraiser/FundraiserLowerBody.vue?vue&type=style&index=0&id=3529afe2&scoped=true&lang=scss&
var FundraiserLowerBodyvue_type_style_index_0_id_3529afe2_scoped_true_lang_scss_ = __webpack_require__("267e");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/fundraiser/FundraiserLowerBody.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  fundraiser_FundraiserLowerBodyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "3529afe2",
  null
  
)

component.options.__file = "FundraiserLowerBody.vue"
/* harmony default export */ var FundraiserLowerBody = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ })

}]);
//# sourceMappingURL=xthon.umd.37.js.map