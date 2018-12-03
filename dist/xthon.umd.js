(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue-axios"), require("vuex"), require("vue-router"), require("vue"), require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["vue-axios", "vuex", "vue-router", , "axios"], factory);
	else if(typeof exports === 'object')
		exports["xthon"] = factory(require("vue-axios"), require("vuex"), require("vue-router"), require("vue"), require("axios"));
	else
		root["xthon"] = factory(root["vue-axios"], root["vuex"], root["vue-router"], root["Vue"], root["axios"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__379e__, __WEBPACK_EXTERNAL_MODULE__5880__, __WEBPACK_EXTERNAL_MODULE__6389__, __WEBPACK_EXTERNAL_MODULE__8bbf__, __WEBPACK_EXTERNAL_MODULE_cebe__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		21: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		21: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "xthon.umd." + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"0":1,"1":1,"2":1,"3":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"71":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"0":"e7f8aca2","1":"6ce1bd9f","2":"f55ad979","3":"54dd8a39","4":"31d6cfe0","5":"012d39aa","6":"8e84def5","7":"7cfd168c","8":"d725d0fd","9":"24e94664","10":"9f8a80b6","11":"31d6cfe0","12":"31d6cfe0","13":"2d030178","14":"de174fcf","15":"e483d5d3","16":"9124119a","17":"46202147","18":"fda3bfbd","19":"de9cafe2","20":"6648bb69","22":"d970b23d","23":"7727a463","24":"501e5d45","25":"0d1d4784","26":"0644aa8d","27":"b9addc4d","28":"55b0ab90","29":"97ae4208","30":"81928974","31":"fb8b3d1c","32":"9ea829f7","33":"1a15fe6d","34":"79aeb586","35":"645fb9c6","36":"065b8a01","37":"44293522","38":"950d702e","39":"c9e88ac6","40":"20ab9837","41":"24e94664","42":"0e433876","43":"11c39511","44":"daa03c1b","45":"7c3a89b9","46":"630fb3db","47":"852c0dd7","48":"2c6fc9d7","49":"cba31684","50":"958f2355","51":"fe35807c","52":"6ae95e53","53":"0dac530d","54":"68a3dc4a","55":"0e433876","56":"589a5c17","57":"643593ee","58":"0e433876","59":"5a2bd5a5","60":"3a84bae9","61":"0b60d008","62":"4656f93c","63":"2c6fc9d7","64":"34a4ba9a","65":"49166b17","66":"0e433876","67":"0e433876","68":"8f3f30d7","69":"0e433876","70":"31d6cfe0","71":"6f7f0e0d","72":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.request = request;
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] = (typeof self !== 'undefined' ? self : this)["webpackJsonpxthon"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0a89":
/***/ (function(module, exports, __webpack_require__) {

/**
 * vue-meta v1.5.5
 * (c) 2018 Declan de Wet & Sébastien Chopin (@Atinux)
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var arguments$1 = arguments;

	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments$1[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return (clone && isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, optionsArgument)
		: value
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument)
	})
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument)
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument)
	} else {
		return mergeObject(target, source, optionsArgument)
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, optionsArgument)
	}, {})
};

var deepmerge_1 = deepmerge;

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

var lodash_isplainobject = isPlainObject;

/**
 * checks if passed argument is an array
 * @param  {any}  arr - the object to check
 * @return {Boolean} - true if `arr` is an array
 */
function isArray (arr) {
  return Array.isArray
    ? Array.isArray(arr)
    : Object.prototype.toString.call(arr) === '[object Array]'
}

/**
 * Returns the `opts.option` $option value of the given `opts.component`.
 * If methods are encountered, they will be bound to the component context.
 * If `opts.deep` is true, will recursively merge all child component
 * `opts.option` $option values into the returned result.
 *
 * @param  {Object} opts - options
 * @param  {Object} opts.component - Vue component to fetch option data from
 * @param  {String} opts.option - what option to look for
 * @param  {Boolean} opts.deep - look for data in child components as well?
 * @param  {Function} opts.arrayMerge - how should arrays be merged?
 * @param  {Object} [result={}] - result so far
 * @return {Object} result - final aggregated result
 */
function getComponentOption (opts, result) {
  if ( result === void 0 ) result = {};

  var component = opts.component;
  var option = opts.option;
  var deep = opts.deep;
  var arrayMerge = opts.arrayMerge;
  var metaTemplateKeyName = opts.metaTemplateKeyName;
  var contentKeyName = opts.contentKeyName;
  var $options = component.$options;

  if (component._inactive) { return result }

  // only collect option data if it exists
  if (typeof $options[option] !== 'undefined' && $options[option] !== null) {
    var data = $options[option];

    // if option is a function, replace it with it's result
    if (typeof data === 'function') {
      data = data.call(component);
    }

    if (typeof data === 'object') {
      // merge with existing options
      result = deepmerge_1(result, data, { arrayMerge: arrayMerge });
    } else {
      result = data;
    }
  }

  // collect & aggregate child options if deep = true
  if (deep && component.$children.length) {
    component.$children.forEach(function (childComponent) {
      result = getComponentOption({
        component: childComponent,
        option: option,
        deep: deep,
        arrayMerge: arrayMerge
      }, result);
    });
  }
  if (metaTemplateKeyName && result.hasOwnProperty('meta')) {
    result.meta = Object.keys(result.meta).map(function (metaKey) {
      var metaObject = result.meta[metaKey];
      if (!metaObject.hasOwnProperty(metaTemplateKeyName) || !metaObject.hasOwnProperty(contentKeyName) || typeof metaObject[metaTemplateKeyName] === 'undefined') {
        return result.meta[metaKey]
      }

      var template = metaObject[metaTemplateKeyName];
      delete metaObject[metaTemplateKeyName];

      if (template) {
        metaObject.content = typeof template === 'function' ? template(metaObject.content) : template.replace(/%s/g, metaObject.content);
      }

      return metaObject
    });
  }
  return result
}

var escapeHTML = function (str) { return typeof window === 'undefined'
  // server-side escape sequence
  ? String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
  // client-side escape sequence
  : String(str)
    .replace(/&/g, '\u0026')
    .replace(/</g, '\u003c')
    .replace(/>/g, '\u003e')
    .replace(/"/g, '\u0022')
    .replace(/'/g, '\u0027'); };

function _getMetaInfo (options) {
  if ( options === void 0 ) options = {};

  var keyName = options.keyName;
  var tagIDKeyName = options.tagIDKeyName;
  var metaTemplateKeyName = options.metaTemplateKeyName;
  var contentKeyName = options.contentKeyName;
  /**
   * Returns the correct meta info for the given component
   * (child components will overwrite parent meta info)
   *
   * @param  {Object} component - the Vue instance to get meta info from
   * @return {Object} - returned meta info
   */
  return function getMetaInfo (component) {
    // set some sane defaults
    var defaultInfo = {
      title: '',
      titleChunk: '',
      titleTemplate: '%s',
      htmlAttrs: {},
      bodyAttrs: {},
      headAttrs: {},
      meta: [],
      base: [],
      link: [],
      style: [],
      script: [],
      noscript: [],
      __dangerouslyDisableSanitizers: [],
      __dangerouslyDisableSanitizersByTagID: {}
    };

    // collect & aggregate all metaInfo $options
    var info = getComponentOption({
      component: component,
      option: keyName,
      deep: true,
      metaTemplateKeyName: metaTemplateKeyName,
      contentKeyName: contentKeyName,
      arrayMerge: function arrayMerge (target, source) {
        // we concat the arrays without merging objects contained in,
        // but we check for a `vmid` property on each object in the array
        // using an O(1) lookup associative array exploit
        // note the use of "for in" - we are looping through arrays here, not
        // plain objects
        var destination = [];
        for (var targetIndex in target) {
          var targetItem = target[targetIndex];
          var shared = false;
          for (var sourceIndex in source) {
            var sourceItem = source[sourceIndex];
            if (targetItem[tagIDKeyName] && targetItem[tagIDKeyName] === sourceItem[tagIDKeyName]) {
              var targetTemplate = targetItem[metaTemplateKeyName];
              var sourceTemplate = sourceItem[metaTemplateKeyName];
              if (targetTemplate && !sourceTemplate) {
                sourceItem[contentKeyName] = applyTemplate(component)(targetTemplate)(sourceItem[contentKeyName]);
              }
              // If template defined in child but content in parent
              if (targetTemplate && sourceTemplate && !sourceItem[contentKeyName]) {
                sourceItem[contentKeyName] = applyTemplate(component)(sourceTemplate)(targetItem[contentKeyName]);
                delete sourceItem[metaTemplateKeyName];
              }
              shared = true;
              break
            }
          }

          if (!shared) {
            destination.push(targetItem);
          }
        }

        return destination.concat(source)
      }
    });

    // Remove all "template" tags from meta

    // backup the title chunk in case user wants access to it
    if (info.title) {
      info.titleChunk = info.title;
    }

    // replace title with populated template
    if (info.titleTemplate) {
      info.title = applyTemplate(component)(info.titleTemplate)(info.titleChunk);
    }

    // convert base tag to an array so it can be handled the same way
    // as the other tags
    if (info.base) {
      info.base = Object.keys(info.base).length ? [info.base] : [];
    }

    var ref = info.__dangerouslyDisableSanitizers;
    var refByTagID = info.__dangerouslyDisableSanitizersByTagID;

    // sanitizes potentially dangerous characters
    var escape = function (info) { return Object.keys(info).reduce(function (escaped, key) {
      var isDisabled = ref && ref.indexOf(key) > -1;
      var tagID = info[tagIDKeyName];
      if (!isDisabled && tagID) {
        isDisabled = refByTagID && refByTagID[tagID] && refByTagID[tagID].indexOf(key) > -1;
      }
      var val = info[key];
      escaped[key] = val;
      if (key === '__dangerouslyDisableSanitizers' || key === '__dangerouslyDisableSanitizersByTagID') {
        return escaped
      }
      if (!isDisabled) {
        if (typeof val === 'string') {
          escaped[key] = escapeHTML(val);
        } else if (lodash_isplainobject(val)) {
          escaped[key] = escape(val);
        } else if (isArray(val)) {
          escaped[key] = val.map(escape);
        } else {
          escaped[key] = val;
        }
      } else {
        escaped[key] = val;
      }

      return escaped
    }, {}); };

    // merge with defaults
    info = deepmerge_1(defaultInfo, info);

    // begin sanitization
    info = escape(info);

    return info
  }
}

var applyTemplate = function (component) { return function (template) { return function (chunk) { return typeof template === 'function' ? template.call(component, chunk) : template.replace(/%s/g, chunk); }; }; };

function _titleGenerator (options) {
  if ( options === void 0 ) options = {};

  var attribute = options.attribute;

  /**
   * Generates title output for the server
   *
   * @param  {'title'} type - the string "title"
   * @param  {String} data - the title text
   * @return {Object} - the title generator
   */
  return function titleGenerator (type, data) {
    return {
      text: function text () {
        return ("<" + type + " " + attribute + "=\"true\">" + data + "</" + type + ">")
      }
    }
  }
}

function _attrsGenerator (options) {
  if ( options === void 0 ) options = {};

  var attribute = options.attribute;

  /**
   * Generates tag attributes for use on the server.
   *
   * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
   * @param  {Object} data - the attributes to generate
   * @return {Object} - the attribute generator
   */
  return function attrsGenerator (type, data) {
    return {
      text: function text () {
        var attributeStr = '';
        var watchedAttrs = [];
        for (var attr in data) {
          if (data.hasOwnProperty(attr)) {
            watchedAttrs.push(attr);
            attributeStr += (typeof data[attr] !== 'undefined'
                ? (attr + "=\"" + (data[attr]) + "\"")
                : attr) + " ";
          }
        }
        attributeStr += attribute + "=\"" + (watchedAttrs.join(',')) + "\"";
        return attributeStr.trim()
      }
    }
  }
}

function _tagGenerator (options) {
  if ( options === void 0 ) options = {};

  var attribute = options.attribute;

  /**
   * Generates meta, base, link, style, script, noscript tags for use on the server
   *
   * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
   * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
   * @return {Object} - the tag generator
   */
  return function tagGenerator (type, tags) {
    return {
      text: function text (ref) {
        if ( ref === void 0 ) ref = {};
        var body = ref.body; if ( body === void 0 ) body = false;

        // build a string containing all tags of this type
        return tags.reduce(function (tagsStr, tag) {
          if (!!tag.body !== body) { return tagsStr }
          // build a string containing all attributes of this tag
          var attrs = Object.keys(tag).reduce(function (attrsStr, attr) {
            switch (attr) {
              // these attributes are treated as children on the tag
              case 'innerHTML':
              case 'cssText':
              case 'once':
                return attrsStr
              // these form the attribute list for this tag
              default:
                if ([options.tagIDKeyName, 'body'].indexOf(attr) !== -1) {
                  return (attrsStr + " data-" + attr + "=\"" + (tag[attr]) + "\"")
                }
                return typeof tag[attr] === 'undefined'
                  ? (attrsStr + " " + attr)
                  : (attrsStr + " " + attr + "=\"" + (tag[attr]) + "\"")
            }
          }, '').trim();

          // grab child content from one of these attributes, if possible
          var content = tag.innerHTML || tag.cssText || '';

          // these tag types will have content inserted
          var closed = ['noscript', 'script', 'style'].indexOf(type) === -1;

          // generate tag exactly without any other redundant attribute
          var observeTag = tag.once
            ? ''
            : (attribute + "=\"true\" ");

          // the final string for this specific tag
          return closed
            ? (tagsStr + "<" + type + " " + observeTag + attrs + "/>")
            : (tagsStr + "<" + type + " " + observeTag + attrs + ">" + content + "</" + type + ">")
        }, '')
      }
    }
  }
}

function _generateServerInjector (options) {
  if ( options === void 0 ) options = {};

  /**
   * Converts a meta info property to one that can be stringified on the server
   *
   * @param  {String} type - the type of data to convert
   * @param  {(String|Object|Array<Object>)} data - the data value
   * @return {Object} - the new injector
   */
  return function generateServerInjector (type, data) {
    switch (type) {
      case 'title':
        return _titleGenerator(options)(type, data)
      case 'htmlAttrs':
      case 'bodyAttrs':
      case 'headAttrs':
        return _attrsGenerator(options)(type, data)
      default:
        return _tagGenerator(options)(type, data)
    }
  }
}

function _inject (options) {
  if ( options === void 0 ) options = {};

  /**
   * Converts the state of the meta info object such that each item
   * can be compiled to a tag string on the server
   *
   * @this {Object} - Vue instance - ideally the root component
   * @return {Object} - server meta info with `toString` methods
   */
  return function inject () {
    // get meta info with sensible defaults
    var info = _getMetaInfo(options)(this.$root);

    // generate server injectors
    for (var key in info) {
      if (info.hasOwnProperty(key) && key !== 'titleTemplate' && key !== 'titleChunk') {
        info[key] = _generateServerInjector(options)(key, info[key]);
      }
    }

    return info
  }
}

function _updateTitle () {
  /**
   * Updates the document title
   *
   * @param  {String} title - the new title of the document
   */
  return function updateTitle (title) {
    if ( title === void 0 ) title = document.title;

    document.title = title;
  }
}

function _updateTagAttributes (options) {
  if ( options === void 0 ) options = {};

  var attribute = options.attribute;

  /**
   * Updates the document's html tag attributes
   *
   * @param  {Object} attrs - the new document html attributes
   * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
   */
  return function updateTagAttributes (attrs, tag) {
    var vueMetaAttrString = tag.getAttribute(attribute);
    var vueMetaAttrs = vueMetaAttrString ? vueMetaAttrString.split(',') : [];
    var toRemove = [].concat(vueMetaAttrs);
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        var val = attrs[attr] || '';
        tag.setAttribute(attr, val);
        if (vueMetaAttrs.indexOf(attr) === -1) {
          vueMetaAttrs.push(attr);
        }
        var saveIndex = toRemove.indexOf(attr);
        if (saveIndex !== -1) {
          toRemove.splice(saveIndex, 1);
        }
      }
    }
    var i = toRemove.length - 1;
    for (; i >= 0; i--) {
      tag.removeAttribute(toRemove[i]);
    }
    if (vueMetaAttrs.length === toRemove.length) {
      tag.removeAttribute(attribute);
    } else {
      tag.setAttribute(attribute, vueMetaAttrs.join(','));
    }
  }
}

// borrow the slice method
var toArray = Function.prototype.call.bind(Array.prototype.slice);

function _updateTags (options) {
  if ( options === void 0 ) options = {};

  var attribute = options.attribute;

  /**
   * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
   * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
   *
   * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
   * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
   * @return {Object} - a representation of what tags changed
   */
  return function updateTags (type, tags, headTag, bodyTag) {
    var oldHeadTags = toArray(headTag.querySelectorAll((type + "[" + attribute + "]")));
    var oldBodyTags = toArray(bodyTag.querySelectorAll((type + "[" + attribute + "][data-body=\"true\"]")));
    var newTags = [];
    var indexToDelete;

    if (tags.length > 1) {
      // remove duplicates that could have been found by merging tags
      // which include a mixin with metaInfo and that mixin is used
      // by multiple components on the same page
      var found = [];
      tags = tags.map(function (x) {
        var k = JSON.stringify(x);
        if (found.indexOf(k) < 0) {
          found.push(k);
          return x
        }
      }).filter(function (x) { return x; });
    }

    if (tags && tags.length) {
      tags.forEach(function (tag) {
        var newElement = document.createElement(type);
        var oldTags = tag.body !== true ? oldHeadTags : oldBodyTags;

        for (var attr in tag) {
          if (tag.hasOwnProperty(attr)) {
            if (attr === 'innerHTML') {
              newElement.innerHTML = tag.innerHTML;
            } else if (attr === 'cssText') {
              if (newElement.styleSheet) {
                newElement.styleSheet.cssText = tag.cssText;
              } else {
                newElement.appendChild(document.createTextNode(tag.cssText));
              }
            } else if ([options.tagIDKeyName, 'body'].indexOf(attr) !== -1) {
              var _attr = "data-" + attr;
              var value = (typeof tag[attr] === 'undefined') ? '' : tag[attr];
              newElement.setAttribute(_attr, value);
            } else {
              var value$1 = (typeof tag[attr] === 'undefined') ? '' : tag[attr];
              newElement.setAttribute(attr, value$1);
            }
          }
        }

        newElement.setAttribute(attribute, 'true');

        // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
        if (oldTags.some(function (existingTag, index) {
          indexToDelete = index;
          return newElement.isEqualNode(existingTag)
        })) {
          oldTags.splice(indexToDelete, 1);
        } else {
          newTags.push(newElement);
        }
      });
    }
    var oldTags = oldHeadTags.concat(oldBodyTags);
    oldTags.forEach(function (tag) { return tag.parentNode.removeChild(tag); });
    newTags.forEach(function (tag) {
      if (tag.getAttribute('data-body') === 'true') {
        bodyTag.appendChild(tag);
      } else {
        headTag.appendChild(tag);
      }
    });

    return { oldTags: oldTags, newTags: newTags }
  }
}

function _updateClientMetaInfo (options) {
  if ( options === void 0 ) options = {};

  var ssrAttribute = options.ssrAttribute;

  /**
   * Performs client-side updates when new meta info is received
   *
   * @param  {Object} newInfo - the meta info to update to
   */
  return function updateClientMetaInfo (newInfo) {
    var htmlTag = document.getElementsByTagName('html')[0];
    // if this is not a server render, then update
    if (htmlTag.getAttribute(ssrAttribute) === null) {
      // initialize tracked changes
      var addedTags = {};
      var removedTags = {};

      Object.keys(newInfo).forEach(function (key) {
        switch (key) {
          // update the title
          case 'title':
            _updateTitle(options)(newInfo.title);
            break
          // update attributes
          case 'htmlAttrs':
            _updateTagAttributes(options)(newInfo[key], htmlTag);
            break
          case 'bodyAttrs':
            _updateTagAttributes(options)(newInfo[key], document.getElementsByTagName('body')[0]);
            break
          case 'headAttrs':
            _updateTagAttributes(options)(newInfo[key], document.getElementsByTagName('head')[0]);
            break
          // ignore these
          case 'titleChunk':
          case 'titleTemplate':
          case 'changed':
          case '__dangerouslyDisableSanitizers':
            break
          // catch-all update tags
          default:
            var headTag = document.getElementsByTagName('head')[0];
            var bodyTag = document.getElementsByTagName('body')[0];
            var ref = _updateTags(options)(key, newInfo[key], headTag, bodyTag);
        var oldTags = ref.oldTags;
        var newTags = ref.newTags;
            if (newTags.length) {
              addedTags[key] = newTags;
              removedTags[key] = oldTags;
            }
        }
      });

      // emit "event" with new info
      if (typeof newInfo.changed === 'function') {
        newInfo.changed.call(this, newInfo, addedTags, removedTags);
      }
    } else {
      // remove the server render attribute so we can update on changes
      htmlTag.removeAttribute(ssrAttribute);
    }
  }
}

function _refresh (options) {
  if ( options === void 0 ) options = {};

  /**
   * When called, will update the current meta info with new meta info.
   * Useful when updating meta info as the result of an asynchronous
   * action that resolves after the initial render takes place.
   *
   * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
   * to implement this method.
   *
   * @return {Object} - new meta info
   */
  return function refresh () {
    var info = _getMetaInfo(options)(this.$root);
    _updateClientMetaInfo(options).call(this, info);
    return info
  }
}

function _$meta (options) {
  if ( options === void 0 ) options = {};

  /**
   * Returns an injector for server-side rendering.
   * @this {Object} - the Vue instance (a root component)
   * @return {Object} - injector
   */
  return function $meta () {
    return {
      inject: _inject(options).bind(this),
      refresh: _refresh(options).bind(this)
    }
  }
}

// fallback to timers if rAF not present
var stopUpdate = (typeof window !== 'undefined' ? window.cancelAnimationFrame : null) || clearTimeout;
var startUpdate = (typeof window !== 'undefined' ? window.requestAnimationFrame : null) || (function (cb) { return setTimeout(cb, 0); });

/**
 * Performs a batched update. Uses requestAnimationFrame to prevent
 * calling a function too many times in quick succession.
 * You need to pass it an ID (which can initially be `null`),
 * but be sure to overwrite that ID with the return value of batchUpdate.
 *
 * @param  {(null|Number)} id - the ID of this update
 * @param  {Function} callback - the update to perform
 * @return {Number} id - a new ID
 */
function batchUpdate (id, callback) {
  stopUpdate(id);
  return startUpdate(function () {
    id = null;
    callback();
  })
}

/**
 * These are constant variables used throughout the application.
 */

// This is the name of the component option that contains all the information that
// gets converted to the various meta tags & attributes for the page.
var VUE_META_KEY_NAME = 'metaInfo';

// This is the attribute vue-meta augments on elements to know which it should
// manage and which it should ignore.
var VUE_META_ATTRIBUTE = 'data-vue-meta';

// This is the attribute that goes on the `html` tag to inform `vue-meta`
// that the server has already generated the meta tags for the initial render.
var VUE_META_SERVER_RENDERED_ATTRIBUTE = 'data-vue-meta-server-rendered';

// This is the property that tells vue-meta to overwrite (instead of append)
// an item in a tag list. For example, if you have two `meta` tag list items
// that both have `vmid` of "description", then vue-meta will overwrite the
// shallowest one with the deepest one.
var VUE_META_TAG_LIST_ID_KEY_NAME = 'vmid';

// This is the key name for possible meta templates
var VUE_META_TEMPLATE_KEY_NAME = 'template';

// This is the key name for the content-holding property
var VUE_META_CONTENT_KEY = 'content';

// automatic install
if (typeof window !== 'undefined' && typeof window.Vue !== 'undefined') {
  Vue.use(VueMeta);
}

/**
 * Plugin install function.
 * @param {Function} Vue - the Vue constructor.
 */
function VueMeta (Vue, options) {
  if ( options === void 0 ) options = {};

  // set some default options
  var defaultOptions = {
    keyName: VUE_META_KEY_NAME,
    contentKeyName: VUE_META_CONTENT_KEY,
    metaTemplateKeyName: VUE_META_TEMPLATE_KEY_NAME,
    attribute: VUE_META_ATTRIBUTE,
    ssrAttribute: VUE_META_SERVER_RENDERED_ATTRIBUTE,
    tagIDKeyName: VUE_META_TAG_LIST_ID_KEY_NAME
  };
  // combine options
  options = objectAssign(defaultOptions, options);

  // bind the $meta method to this component instance
  Vue.prototype.$meta = _$meta(options);

  // store an id to keep track of DOM updates
  var batchID = null;

  // watch for client side component updates
  Vue.mixin({
    beforeCreate: function beforeCreate () {
      // Add a marker to know if it uses metaInfo
      // _vnode is used to know that it's attached to a real component
      // useful if we use some mixin to add some meta tags (like nuxt-i18n)
      if (typeof this.$options[options.keyName] !== 'undefined') {
        this._hasMetaInfo = true;
      }
      // coerce function-style metaInfo to a computed prop so we can observe
      // it on creation
      if (typeof this.$options[options.keyName] === 'function') {
        if (typeof this.$options.computed === 'undefined') {
          this.$options.computed = {};
        }
        this.$options.computed.$metaInfo = this.$options[options.keyName];
      }
    },
    created: function created () {
      var this$1 = this;

      // if computed $metaInfo exists, watch it for updates & trigger a refresh
      // when it changes (i.e. automatically handle async actions that affect metaInfo)
      // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
      if (!this.$isServer && this.$metaInfo) {
        this.$watch('$metaInfo', function () {
          // batch potential DOM updates to prevent extraneous re-rendering
          batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
        });
      }
    },
    activated: function activated () {
      var this$1 = this;

      if (this._hasMetaInfo) {
        // batch potential DOM updates to prevent extraneous re-rendering
        batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
      }
    },
    deactivated: function deactivated () {
      var this$1 = this;

      if (this._hasMetaInfo) {
        // batch potential DOM updates to prevent extraneous re-rendering
        batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
      }
    },
    beforeMount: function beforeMount () {
      var this$1 = this;

      // batch potential DOM updates to prevent extraneous re-rendering
      if (this._hasMetaInfo) {
        batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
      }
    },
    destroyed: function destroyed () {
      var this$1 = this;

      // do not trigger refresh on the server side
      if (this.$isServer) { return }
      // re-render meta data when returning from a child component to parent
      if (this._hasMetaInfo) {
        // Wait that element is hidden before refreshing meta tags (to support animations)
        var interval = setInterval(function () {
          if (this$1.$el && this$1.$el.offsetParent !== null) { return }
          clearInterval(interval);
          if (!this$1.$parent) { return }
          batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
        }, 50);
      }
    }
  });
}

var version = "1.5.5";

VueMeta.version = version;

return VueMeta;

})));


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0fec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grade = __webpack_require__("e4be");

var _grade2 = _interopRequireDefault(_grade);

var _locale = __webpack_require__("62d5");

var _locale2 = _interopRequireDefault(_locale);

var _style = __webpack_require__("13b1");

var _RelativeTimeFormat = __webpack_require__("87bd");

var _RelativeTimeFormat2 = _interopRequireDefault(_RelativeTimeFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JavascriptTimeAgo = function () {

	/**
  * @param {(string|string[])} locales=[] - Preferred locales (or locale).
  */

	// Fallback locale
	// (when not a single supplied preferred locale is available)
	function JavascriptTimeAgo() {
		var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

		_classCallCheck(this, JavascriptTimeAgo);

		// Convert `locales` to an array.
		if (typeof locales === 'string') {
			locales = [locales];
		}

		// Choose the most appropriate locale
		// (one of the previously added ones)
		// based on the list of preferred `locales` supplied by the user.
		this.locale = (0, _locale2.default)(locales.concat(JavascriptTimeAgo.default_locale), JavascriptTimeAgo.locales);
	}

	// Formats the relative date/time.
	//
	// @return {string} Returns the formatted relative date/time.
	//
	// @param {(Object|string)} [style] - Relative date/time formatting style.
	//
	// @param {string[]} [style.units] - A list of allowed time units
	//                                  (e.g. ['second', 'minute', 'hour', …])
	//
	// @param {Function} [style.custom] - `function ({ elapsed, time, date, now })`.
	//                                    If this function returns a value, then
	//                                    the `.format()` call will return that value.
	//                                    Otherwise it has no effect.
	//
	// @param {string} [style.flavour] - e.g. "long", "short", "tiny", etc.
	//
	// @param {Object[]} [style.gradation] - Time scale gradation steps.
	//
	// @param {string} style.gradation[].unit - Time interval measurement unit.
	//                                          (e.g. ['second', 'minute', 'hour', …])
	//
	// @param {Number} style.gradation[].factor - Time interval measurement unit factor.
	//                                            (e.g. `60` for 'minute')
	//
	// @param {Number} [style.gradation[].granularity] - A step for the unit's "amount" value.
	//                                                   (e.g. `5` for '0 minutes', '5 minutes', etc)
	//
	// @param {Number} [style.gradation[].threshold] - Time interval measurement unit threshold.
	//                                                 (e.g. `45` seconds for 'minute').
	//                                                 There can also be specific `threshold_[unit]`
	//                                                 thresholds for fine-tuning.
	//


	// For all configured locales
	// their relative time formatter messages will be stored here


	_createClass(JavascriptTimeAgo, [{
		key: 'format',
		value: function format(input) {
			var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _style.defaultStyle;

			if (typeof style === 'string') {
				switch (style) {
					case 'twitter':
						style = _style.twitterStyle;
						break;
					case 'time':
						style = _style.timeStyle;
						break;
					default:
						style = _style.defaultStyle;
				}
			}

			var _getDateAndTimeBeingF = getDateAndTimeBeingFormatted(input),
			    date = _getDateAndTimeBeingF.date,
			    time = _getDateAndTimeBeingF.time;

			// Get locale messages for this formatting flavour


			var _getLocaleData = this.getLocaleData(style.flavour),
			    flavour = _getLocaleData.flavour,
			    localeData = _getLocaleData.localeData;

			// Can pass a custom `now`, e.g. for testing purposes.
			// Technically it doesn't belong to `style`
			// but since this is an undocumented internal feature,
			// taking it from the `style` argument will do (for now).


			var now = style.now || Date.now();

			// how much time elapsed (in seconds)
			var elapsed = (now - time) / 1000; // in seconds

			// `custom` – A function of `{ elapsed, time, date, now, locale }`.
			// If this function returns a value, then the `.format()` call will return that value.
			// Otherwise the relative date/time is formatted as usual.
			// This feature is currently not used anywhere and is here
			// just for providing the ultimate customization point
			// in case anyone would ever need that. Prefer using
			// `gradation[step].format(value, locale)` instead.
			//
			// I guess `custom` is deprecated and will be removed
			// in some future major version release.
			//
			if (style.custom) {
				var custom = style.custom({
					now: now,
					date: date,
					time: time,
					elapsed: elapsed,
					locale: this.locale
				});

				if (custom !== undefined) {
					return custom;
				}
			}

			// Available time interval measurement units.
			var units = getTimeIntervalMeasurementUnits(localeData, style.units);

			// If no available time unit is suitable, just output an empty string.
			if (units.length === 0) {
				console.error('Units "' + units.join(', ') + '" were not found in locale data for "' + this.locale + '".');
				return '';
			}

			// Choose the appropriate time measurement unit
			// and get the corresponding rounded time amount.
			var step = (0, _grade2.default)(Math.abs(elapsed), now, units, style.gradation);

			// If no time unit is suitable, just output an empty string.
			// E.g. when "now" unit is not available
			// and "second" has a threshold of `0.5`
			// (e.g. the "canonical" grading scale).
			if (!step) {
				return '';
			}

			if (step.format) {
				return step.format(date || time, this.locale);
			}

			var unit = step.unit,
			    factor = step.factor,
			    granularity = step.granularity;


			var amount = Math.abs(elapsed) / factor;

			// Apply granularity to the time amount
			// (and fallback to the previous step
			//  if the first level of granularity
			//  isn't met by this amount)
			if (granularity) {
				// Recalculate the elapsed time amount based on granularity
				amount = Math.round(amount / granularity) * granularity;
			}

			// Format the time elapsed.
			// Using `Intl.RelativeTimeFormat` proposal polyfill.
			//
			// TODO: Should cache `Intl.RelativeTimeFormat` instances
			// for given `this.locale` and `flavour`.
			//
			// ```js
			// import Cache from './cache'
			// const cache = new Cache()
			// const formatter = this.cache.get(this.locale, flavour) ||
			//   this.cache.put(this.locale, flavour, new Intl.RelativeTimeFormat(...))
			// return formatter.format(...)
			// ```
			//
			return new _RelativeTimeFormat2.default(this.locale, { style: flavour }).format(-1 * Math.sign(elapsed) * Math.round(amount), unit);
		}

		/**
   * Gets locale messages for this formatting flavour
   *
   * @param {(string|string[])} flavour - Relative date/time formatting flavour.
   *                                      If it's an array then all flavours are tried in order.
   *
   * @returns {Object} Returns an object of shape { flavour, localeData }
   */

	}, {
		key: 'getLocaleData',
		value: function getLocaleData() {
			var flavour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

			// Get relative time formatting rules for this locale
			var localeData = JavascriptTimeAgo.locales[this.locale];

			// Convert `flavour` to an array.
			if (typeof flavour === 'string') {
				flavour = [flavour];
			}

			// "long" flavour is the default one.
			// (it's always present)
			flavour = flavour.concat('long');

			// Find a suitable flavour.
			for (var _iterator = flavour, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
				var _ref;

				if (_isArray) {
					if (_i >= _iterator.length) break;
					_ref = _iterator[_i++];
				} else {
					_i = _iterator.next();
					if (_i.done) break;
					_ref = _i.value;
				}

				var _ = _ref;

				if (localeData[_]) {
					return {
						flavour: _,
						localeData: localeData[_]
					};
				}
			}

			// Can't happen - "long" flavour is always present.
			// throw new Error(`None of the flavours - ${flavour.join(', ')} - was found for locale "${this.locale}".`)
		}
	}]);

	return JavascriptTimeAgo;
}();

/**
 * Sets default locale.
 * @param  {string} locale
 */


JavascriptTimeAgo.default_locale = 'en';
JavascriptTimeAgo.locales = {};
exports.default = JavascriptTimeAgo;
JavascriptTimeAgo.setDefaultLocale = function (locale) {
	JavascriptTimeAgo.default_locale = locale;
};

/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */
JavascriptTimeAgo.addLocale = function (localeData) {
	if (!localeData) {
		throw new Error('[javascript-time-ago] Invalid locale data passed.');
	}
	// This locale data is stored in a global variable
	// and later used when calling `.format(time)`.
	JavascriptTimeAgo.locales[localeData.locale] = localeData;
};

/**
 * (legacy alias)
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 * @deprecated
 */
JavascriptTimeAgo.locale = JavascriptTimeAgo.addLocale;

// Normalizes `.format()` `time` argument.
function getDateAndTimeBeingFormatted(input) {
	if (input.constructor === Date) {
		return {
			date: input,
			time: input.getTime()
		};
	}

	if (typeof input === 'number') {
		return {
			time: input
			// `date` is not required for formatting
			// relative times unless "twitter" preset is used.
			// date : new Date(input)
		};
	}

	// For some weird reason istanbul doesn't see this `throw` covered.
	/* istanbul ignore next */
	throw new Error('Unsupported relative time formatter input: ' + (typeof input === 'undefined' ? 'undefined' : _typeof(input)) + ', ' + input);
}

// Get available time interval measurement units.
function getTimeIntervalMeasurementUnits(localeData, restrictedSetOfUnits) {
	// All available time interval measurement units.
	var units = Object.keys(localeData);

	// If only a specific set of available
	// time measurement units can be used.
	if (restrictedSetOfUnits) {
		// Reduce available time interval measurement units
		// based on user's preferences.
		return restrictedSetOfUnits.filter(function (_) {
			return units.indexOf(_) >= 0;
		});
	}

	return units;
}
//# sourceMappingURL=JavascriptTimeAgo.js.map

/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1315":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/*
  This is just a junk drawer, containing anything used across multiple classes.
  Because Luxon is small(ish), this should stay small and we won't worry about splitting
  it up into, say, parsingUtil.js and basicUtil.js and so on. But they are divided up by feature area.
*/

/**
 * @private
 */
// TYPES
function isUndefined(o) {
  return typeof o === "undefined";
}
function isNumber(o) {
  return typeof o === "number";
}
function isString(o) {
  return typeof o === "string";
}
function isDate(o) {
  return Object.prototype.toString.call(o) === "[object Date]";
} // CAPABILITIES

function hasIntl() {
  return typeof Intl !== "undefined" && Intl.DateTimeFormat;
}
function hasFormatToParts() {
  return !isUndefined(Intl.DateTimeFormat.prototype.formatToParts);
} // OBJECTS AND ARRAYS

function maybeArray(thing) {
  return Array.isArray(thing) ? thing : [thing];
}
function bestBy(arr, by, compare) {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce(function (best, next) {
    var pair = [by(next), next];

    if (!best) {
      return pair;
    } else if (compare(best[0], pair[0]) === best[0]) {
      return best;
    } else {
      return pair;
    }
  }, null)[1];
}
function pick(obj, keys) {
  return keys.reduce(function (a, k) {
    a[k] = obj[k];
    return a;
  }, {});
} // NUMBERS AND STRINGS

function numberBetween(thing, bottom, top) {
  return isNumber(thing) && thing >= bottom && thing <= top;
} // x % n but takes the sign of n instead of x

function floorMod(x, n) {
  return x - n * Math.floor(x / n);
}
function padStart(input, n) {
  if (n === void 0) {
    n = 2;
  }

  if (input.toString().length < n) {
    return ("0".repeat(n) + input).slice(-n);
  } else {
    return input.toString();
  }
}
function parseMillis(fraction) {
  if (isUndefined(fraction)) {
    return NaN;
  } else {
    var f = parseFloat("0." + fraction) * 1000;
    return Math.floor(f);
  }
}
function roundTo(number, digits) {
  var factor = Math.pow(10, digits);
  return Math.round(number * factor) / factor;
} // DATE BASICS

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}
function daysInMonth(year, month) {
  var modMonth = floorMod(month - 1, 12) + 1,
      modYear = year + (month - modMonth) / 12;

  if (modMonth === 2) {
    return isLeapYear(modYear) ? 29 : 28;
  } else {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][modMonth - 1];
  }
}
function weeksInWeekYear(weekYear) {
  var p1 = (weekYear + Math.floor(weekYear / 4) - Math.floor(weekYear / 100) + Math.floor(weekYear / 400)) % 7,
      last = weekYear - 1,
      p2 = (last + Math.floor(last / 4) - Math.floor(last / 100) + Math.floor(last / 400)) % 7;
  return p1 === 4 || p2 === 3 ? 53 : 52;
}
function untruncateYear(year) {
  if (year > 99) {
    return year;
  } else return year > 60 ? 1900 + year : 2000 + year;
} // PARSING

function parseZoneInfo(ts, offsetFormat, locale, timeZone) {
  if (timeZone === void 0) {
    timeZone = null;
  }

  var date = new Date(ts),
      intlOpts = {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };

  if (timeZone) {
    intlOpts.timeZone = timeZone;
  }

  var modified = Object.assign({
    timeZoneName: offsetFormat
  }, intlOpts),
      intl = hasIntl();

  if (intl && hasFormatToParts()) {
    var parsed = new Intl.DateTimeFormat(locale, modified).formatToParts(date).find(function (m) {
      return m.type.toLowerCase() === "timezonename";
    });
    return parsed ? parsed.value : null;
  } else if (intl) {
    // this probably doesn't work for all locales
    var without = new Intl.DateTimeFormat(locale, intlOpts).format(date),
        included = new Intl.DateTimeFormat(locale, modified).format(date),
        diffed = included.substring(without.length),
        trimmed = diffed.replace(/^[, ]+/, "");
    return trimmed;
  } else {
    return null;
  }
} // signedOffset('-5', '30') -> -330

function signedOffset(offHourStr, offMinuteStr) {
  var offHour = parseInt(offHourStr, 10) || 0,
      offMin = parseInt(offMinuteStr, 10) || 0,
      offMinSigned = offHour < 0 ? -offMin : offMin;
  return offHour * 60 + offMinSigned;
} // COERCION

function normalizeObject(obj, normalizer, ignoreUnknown) {
  if (ignoreUnknown === void 0) {
    ignoreUnknown = false;
  }

  var normalized = {};

  for (var u in obj) {
    if (obj.hasOwnProperty(u)) {
      var v = obj[u];

      if (v !== null && !isUndefined(v) && !Number.isNaN(v)) {
        var mapped = normalizer(u, ignoreUnknown);

        if (mapped) {
          normalized[mapped] = v;
        }
      }
    }
  }

  return normalized;
}
function timeObject(obj) {
  return pick(obj, ["hour", "minute", "second", "millisecond"]);
}

/**
 * @private
 */
var n = "numeric",
    s = "short",
    l = "long",
    d2 = "2-digit";
var DATE_SHORT = {
  year: n,
  month: n,
  day: n
};
var DATE_MED = {
  year: n,
  month: s,
  day: n
};
var DATE_FULL = {
  year: n,
  month: l,
  day: n
};
var DATE_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l
};
var TIME_SIMPLE = {
  hour: n,
  minute: d2
};
var TIME_WITH_SECONDS = {
  hour: n,
  minute: d2,
  second: d2
};
var TIME_WITH_SHORT_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: s
};
var TIME_WITH_LONG_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: l
};
var TIME_24_SIMPLE = {
  hour: n,
  minute: d2,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23', always 24-hour.
 */

var TIME_24_WITH_SECONDS = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false
};
/**
 * {@link toLocaleString}; format like '09:30:23 EDT', always 24-hour.
 */

var TIME_24_WITH_SHORT_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false,
  timeZoneName: s
};
/**
 * {@link toLocaleString}; format like '09:30:23 Eastern Daylight Time', always 24-hour.
 */

var TIME_24_WITH_LONG_OFFSET = {
  hour: n,
  minute: d2,
  second: d2,
  hour12: false,
  timeZoneName: l
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: d2
};
/**
 * {@link toLocaleString}; format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
 */

var DATETIME_SHORT_WITH_SECONDS = {
  year: n,
  month: n,
  day: n,
  hour: n,
  minute: d2,
  second: d2
};
var DATETIME_MED = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: d2
};
var DATETIME_MED_WITH_SECONDS = {
  year: n,
  month: s,
  day: n,
  hour: n,
  minute: d2,
  second: d2
};
var DATETIME_FULL = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: d2,
  timeZoneName: s
};
var DATETIME_FULL_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: s
};
var DATETIME_HUGE = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: d2,
  timeZoneName: l
};
var DATETIME_HUGE_WITH_SECONDS = {
  year: n,
  month: l,
  day: n,
  weekday: l,
  hour: n,
  minute: d2,
  second: d2,
  timeZoneName: l
};

function stringify(obj) {
  return JSON.stringify(obj, Object.keys(obj).sort());
}
/**
 * @private
 */


var monthsLong = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var monthsNarrow = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function months(length) {
  switch (length) {
    case "narrow":
      return monthsNarrow;

    case "short":
      return monthsShort;

    case "long":
      return monthsLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

    default:
      return null;
  }
}
var weekdaysLong = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var weekdaysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var weekdaysNarrow = ["M", "T", "W", "T", "F", "S", "S"];
function weekdays(length) {
  switch (length) {
    case "narrow":
      return weekdaysNarrow;

    case "short":
      return weekdaysShort;

    case "long":
      return weekdaysLong;

    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];

    default:
      return null;
  }
}
var meridiems = ["AM", "PM"];
var erasLong = ["Before Christ", "Anno Domini"];
var erasShort = ["BC", "AD"];
var erasNarrow = ["B", "A"];
function eras(length) {
  switch (length) {
    case "narrow":
      return erasNarrow;

    case "short":
      return erasShort;

    case "long":
      return erasLong;

    default:
      return null;
  }
}
function meridiemForDateTime(dt) {
  return meridiems[dt.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(dt, length) {
  return weekdays(length)[dt.weekday - 1];
}
function monthForDateTime(dt, length) {
  return months(length)[dt.month - 1];
}
function eraForDateTime(dt, length) {
  return eras(length)[dt.year < 0 ? 0 : 1];
}
function formatString(knownFormat) {
  // these all have the offsets removed because we don't have access to them
  // without all the intl stuff this is backfilling
  var filtered = pick(knownFormat, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]),
      key = stringify(filtered),
      dateTimeHuge = "EEEE, LLLL d, yyyy, h:mm a";

  switch (key) {
    case stringify(DATE_SHORT):
      return "M/d/yyyy";

    case stringify(DATE_MED):
      return "LLL d, yyyy";

    case stringify(DATE_FULL):
      return "LLLL d, yyyy";

    case stringify(DATE_HUGE):
      return "EEEE, LLLL d, yyyy";

    case stringify(TIME_SIMPLE):
      return "h:mm a";

    case stringify(TIME_WITH_SECONDS):
      return "h:mm:ss a";

    case stringify(TIME_WITH_SHORT_OFFSET):
      return "h:mm a";

    case stringify(TIME_WITH_LONG_OFFSET):
      return "h:mm a";

    case stringify(TIME_24_SIMPLE):
      return "HH:mm";

    case stringify(TIME_24_WITH_SECONDS):
      return "HH:mm:ss";

    case stringify(TIME_24_WITH_SHORT_OFFSET):
      return "HH:mm";

    case stringify(TIME_24_WITH_LONG_OFFSET):
      return "HH:mm";

    case stringify(DATETIME_SHORT):
      return "M/d/yyyy, h:mm a";

    case stringify(DATETIME_MED):
      return "LLL d, yyyy, h:mm a";

    case stringify(DATETIME_FULL):
      return "LLLL d, yyyy, h:mm a";

    case stringify(DATETIME_HUGE):
      return dateTimeHuge;

    case stringify(DATETIME_SHORT_WITH_SECONDS):
      return "M/d/yyyy, h:mm:ss a";

    case stringify(DATETIME_MED_WITH_SECONDS):
      return "LLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_FULL_WITH_SECONDS):
      return "LLLL d, yyyy, h:mm:ss a";

    case stringify(DATETIME_HUGE_WITH_SECONDS):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";

    default:
      return dateTimeHuge;
  }
}

// these aren't really private, but nor are they really useful to document

/**
 * @private
 */
var LuxonError =
/*#__PURE__*/
function (_Error) {
  _inheritsLoose(LuxonError, _Error);

  function LuxonError() {
    return _Error.apply(this, arguments) || this;
  }

  return LuxonError;
}(_wrapNativeSuper(Error));
/**
 * @private
 */


var InvalidDateTimeError =
/*#__PURE__*/
function (_LuxonError) {
  _inheritsLoose(InvalidDateTimeError, _LuxonError);

  function InvalidDateTimeError(reason) {
    return _LuxonError.call(this, "Invalid DateTime: " + reason.toMessage()) || this;
  }

  return InvalidDateTimeError;
}(LuxonError);
/**
 * @private
 */

var InvalidIntervalError =
/*#__PURE__*/
function (_LuxonError2) {
  _inheritsLoose(InvalidIntervalError, _LuxonError2);

  function InvalidIntervalError(reason) {
    return _LuxonError2.call(this, "Invalid Interval: " + reason.toMessage()) || this;
  }

  return InvalidIntervalError;
}(LuxonError);
/**
 * @private
 */

var InvalidDurationError =
/*#__PURE__*/
function (_LuxonError3) {
  _inheritsLoose(InvalidDurationError, _LuxonError3);

  function InvalidDurationError(reason) {
    return _LuxonError3.call(this, "Invalid Duration: " + reason.toMessage()) || this;
  }

  return InvalidDurationError;
}(LuxonError);
/**
 * @private
 */

var ConflictingSpecificationError =
/*#__PURE__*/
function (_LuxonError4) {
  _inheritsLoose(ConflictingSpecificationError, _LuxonError4);

  function ConflictingSpecificationError() {
    return _LuxonError4.apply(this, arguments) || this;
  }

  return ConflictingSpecificationError;
}(LuxonError);
/**
 * @private
 */

var InvalidUnitError =
/*#__PURE__*/
function (_LuxonError5) {
  _inheritsLoose(InvalidUnitError, _LuxonError5);

  function InvalidUnitError(unit) {
    return _LuxonError5.call(this, "Invalid unit " + unit) || this;
  }

  return InvalidUnitError;
}(LuxonError);
/**
 * @private
 */

var InvalidArgumentError =
/*#__PURE__*/
function (_LuxonError6) {
  _inheritsLoose(InvalidArgumentError, _LuxonError6);

  function InvalidArgumentError() {
    return _LuxonError6.apply(this, arguments) || this;
  }

  return InvalidArgumentError;
}(LuxonError);
/**
 * @private
 */

var ZoneIsAbstractError =
/*#__PURE__*/
function (_LuxonError7) {
  _inheritsLoose(ZoneIsAbstractError, _LuxonError7);

  function ZoneIsAbstractError() {
    return _LuxonError7.call(this, "Zone is an abstract class") || this;
  }

  return ZoneIsAbstractError;
}(LuxonError);

/**
 * @interface
 */

var Zone =
/*#__PURE__*/
function () {
  function Zone() {}

  var _proto = Zone.prototype;

  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  _proto.offsetName = function offsetName(ts, opts) {
    throw new ZoneIsAbstractError();
  };
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */


  _proto.offset = function offset(ts) {
    throw new ZoneIsAbstractError();
  };
  /**
   * Return whether this Zone is equal to another zoner
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */


  _proto.equals = function equals(otherZone) {
    throw new ZoneIsAbstractError();
  };
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */


  _createClass(Zone, [{
    key: "type",

    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */

  }, {
    key: "name",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */

  }, {
    key: "universal",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }, {
    key: "isValid",
    get: function get() {
      throw new ZoneIsAbstractError();
    }
  }]);

  return Zone;
}();

var singleton = null;

var LocalZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(LocalZone, _Zone);

  function LocalZone() {
    return _Zone.apply(this, arguments) || this;
  }

  var _proto = LocalZone.prototype;

  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale);
  };

  _proto.offset = function offset(ts) {
    return -new Date(ts).getTimezoneOffset();
  };

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "local";
  };

  _createClass(LocalZone, [{
    key: "type",
    get: function get() {
      return "local";
    }
  }, {
    key: "name",
    get: function get() {
      if (hasIntl()) {
        return new Intl.DateTimeFormat().resolvedOptions().timeZone;
      } else return "local";
    }
  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }], [{
    key: "instance",
    get: function get() {
      if (singleton === null) {
        singleton = new LocalZone();
      }

      return singleton;
    }
  }]);

  return LocalZone;
}(Zone);

var dtfCache = {};

function makeDTF(zone) {
  if (!dtfCache[zone]) {
    dtfCache[zone] = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: zone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }

  return dtfCache[zone];
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, ""),
      parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),
      fMonth = parsed[1],
      fDay = parsed[2],
      fYear = parsed[3],
      fHour = parsed[4],
      fMinute = parsed[5],
      fSecond = parsed[6];
  return [fYear, fMonth, fDay, fHour, fMinute, fSecond];
}

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date),
      filled = [];

  for (var i = 0; i < formatted.length; i++) {
    var _formatted$i = formatted[i],
        type = _formatted$i.type,
        value = _formatted$i.value,
        pos = typeToPos[type];

    if (!isUndefined(pos)) {
      filled[pos] = parseInt(value, 10);
    }
  }

  return filled;
}

var IANAZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(IANAZone, _Zone);

  IANAZone.isValidSpecifier = function isValidSpecifier(s) {
    return s && s.match(/^[a-z_+-]{1,256}(\/[a-z_+-]{1,256}(\/[a-z_+-]{1,256})?)?$/i);
  };

  IANAZone.isValidZone = function isValidZone(zone) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: zone
      }).format();
      return true;
    } catch (e) {
      return false;
    }
  }; // Etc/GMT+8 -> -480


  IANAZone.parseGMTOffset = function parseGMTOffset(specifier) {
    if (specifier) {
      var match = specifier.match(/^Etc\/GMT([+-]\d{1,2})$/i);

      if (match) {
        return -60 * parseInt(match[1]);
      }
    }

    return null;
  };

  function IANAZone(name) {
    var _this;

    _this = _Zone.call(this) || this;
    _this.zoneName = name;
    _this.valid = IANAZone.isValidZone(name);
    return _this;
  }

  var _proto = IANAZone.prototype;

  _proto.offsetName = function offsetName(ts, _ref) {
    var format = _ref.format,
        locale = _ref.locale;
    return parseZoneInfo(ts, format, locale, this.zoneName);
  };

  _proto.offset = function offset(ts) {
    var date = new Date(ts),
        dtf = makeDTF(this.zoneName),
        _ref2 = dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date),
        fYear = _ref2[0],
        fMonth = _ref2[1],
        fDay = _ref2[2],
        fHour = _ref2[3],
        fMinute = _ref2[4],
        fSecond = _ref2[5],
        asUTC = Date.UTC(fYear, fMonth - 1, fDay, fHour, fMinute, fSecond);

    var asTS = date.valueOf();
    asTS -= asTS % 1000;
    return (asUTC - asTS) / (60 * 1000);
  };

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "iana" && otherZone.zoneName === this.zoneName;
  };

  _createClass(IANAZone, [{
    key: "type",
    get: function get() {
      return "iana";
    }
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return this.valid;
    }
  }]);

  return IANAZone;
}(Zone);

var singleton$1 = null;

function hoursMinutesOffset(z) {
  var hours = Math.trunc(z.fixed / 60),
      minutes = Math.abs(z.fixed % 60),
      sign = hours > 0 ? "+" : "-",
      base = sign + Math.abs(hours);
  return minutes > 0 ? base + ":" + padStart(minutes, 2) : base;
}

var FixedOffsetZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(FixedOffsetZone, _Zone);

  FixedOffsetZone.instance = function instance(offset) {
    return offset === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(offset);
  };

  FixedOffsetZone.parseSpecifier = function parseSpecifier(s) {
    if (s) {
      var r = s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);

      if (r) {
        return new FixedOffsetZone(signedOffset(r[1], r[2]));
      }
    }

    return null;
  };

  _createClass(FixedOffsetZone, null, [{
    key: "utcInstance",
    get: function get() {
      if (singleton$1 === null) {
        singleton$1 = new FixedOffsetZone(0);
      }

      return singleton$1;
    }
  }]);

  function FixedOffsetZone(offset) {
    var _this;

    _this = _Zone.call(this) || this;
    _this.fixed = offset;
    return _this;
  }

  var _proto = FixedOffsetZone.prototype;

  _proto.offsetName = function offsetName() {
    return this.name;
  };

  _proto.offset = function offset() {
    return this.fixed;
  };

  _proto.equals = function equals(otherZone) {
    return otherZone.type === "fixed" && otherZone.fixed === this.fixed;
  };

  _createClass(FixedOffsetZone, [{
    key: "type",
    get: function get() {
      return "fixed";
    }
  }, {
    key: "name",
    get: function get() {
      return this.fixed === 0 ? "UTC" : "UTC" + hoursMinutesOffset(this);
    }
  }, {
    key: "universal",
    get: function get() {
      return true;
    }
  }, {
    key: "isValid",
    get: function get() {
      return true;
    }
  }]);

  return FixedOffsetZone;
}(Zone);

var InvalidZone =
/*#__PURE__*/
function (_Zone) {
  _inheritsLoose(InvalidZone, _Zone);

  function InvalidZone(zoneName) {
    var _this;

    _this = _Zone.call(this) || this;
    _this.zoneName = zoneName;
    return _this;
  }

  var _proto = InvalidZone.prototype;

  _proto.offsetName = function offsetName() {
    return null;
  };

  _proto.offset = function offset() {
    return NaN;
  };

  _proto.equals = function equals() {
    return false;
  };

  _createClass(InvalidZone, [{
    key: "type",
    get: function get() {
      return "invalid";
    }
  }, {
    key: "name",
    get: function get() {
      return this.zoneName;
    }
  }, {
    key: "universal",
    get: function get() {
      return false;
    }
  }, {
    key: "isValid",
    get: function get() {
      return false;
    }
  }]);

  return InvalidZone;
}(Zone);

/**
 * @private
 */
function normalizeZone(input, defaultZone) {
  var offset;

  if (isUndefined(input) || input === null) {
    return defaultZone;
  } else if (input instanceof Zone) {
    return input;
  } else if (isString(input)) {
    var lowered = input.toLowerCase();
    if (lowered === "local") return LocalZone.instance;else if (lowered === "utc" || lowered === "gmt") return FixedOffsetZone.utcInstance;else if ((offset = IANAZone.parseGMTOffset(input)) != null) {
      // handle Etc/GMT-4, which V8 chokes on
      return FixedOffsetZone.instance(offset);
    } else if (IANAZone.isValidSpecifier(lowered)) return new IANAZone(input);else return FixedOffsetZone.parseSpecifier(lowered) || new InvalidZone(input);
  } else if (isNumber(input)) {
    return FixedOffsetZone.instance(input);
  } else if (typeof input === "object" && input.offset && typeof input.offset === "number") {
    // This is dumb, but the instanceof check above doesn't seem to really work
    // so we're duck checking it
    return input;
  } else {
    return new InvalidZone(input);
  }
}

var now = function now() {
  return Date.now();
},
    defaultZone = null,
    // not setting this directly to LocalZone.instance bc loading order issues
defaultLocale = null,
    defaultNumberingSystem = null,
    defaultOutputCalendar = null,
    throwOnInvalid = false;
/**
 * Settings contains static getters and setters that control Luxon's overall behavior. Luxon is a simple library with few options, but the ones it does have live here.
 */


var Settings =
/*#__PURE__*/
function () {
  function Settings() {}

  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  Settings.resetCaches = function resetCaches() {
    Locale.resetCache();
  };

  _createClass(Settings, null, [{
    key: "now",

    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function get() {
      return now;
    }
    /**
     * Set the callback for returning the current timestamp.
     * The function should return a number, which will be interpreted as an Epoch millisecond count
     * @type {function}
     * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
     * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
     */
    ,
    set: function set(n) {
      now = n;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */

  }, {
    key: "defaultZoneName",
    get: function get() {
      return (defaultZone || LocalZone.instance).name;
    }
    /**
     * Set the default time zone to create DateTimes in. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(z) {
      if (!z) {
        defaultZone = null;
      } else {
        defaultZone = normalizeZone(z);
      }
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */

  }, {
    key: "defaultZone",
    get: function get() {
      return defaultZone || LocalZone.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultLocale",
    get: function get() {
      return defaultLocale;
    }
    /**
     * Set the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(locale) {
      defaultLocale = locale;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultNumberingSystem",
    get: function get() {
      return defaultNumberingSystem;
    }
    /**
     * Set the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(numberingSystem) {
      defaultNumberingSystem = numberingSystem;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */

  }, {
    key: "defaultOutputCalendar",
    get: function get() {
      return defaultOutputCalendar;
    }
    /**
     * Set the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
    ,
    set: function set(outputCalendar) {
      defaultOutputCalendar = outputCalendar;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */

  }, {
    key: "throwOnInvalid",
    get: function get() {
      return throwOnInvalid;
    }
    /**
     * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
    ,
    set: function set(t) {
      throwOnInvalid = t;
    }
  }]);

  return Settings;
}();

function stringifyTokens(splits, tokenToString) {
  var s = "";

  for (var _iterator = splits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var token = _ref;

    if (token.literal) {
      s += token.val;
    } else {
      s += tokenToString(token.val);
    }
  }

  return s;
}

var tokenToObject = {
  D: DATE_SHORT,
  DD: DATE_MED,
  DDD: DATE_FULL,
  DDDD: DATE_HUGE,
  t: TIME_SIMPLE,
  tt: TIME_WITH_SECONDS,
  ttt: TIME_WITH_SHORT_OFFSET,
  tttt: TIME_WITH_LONG_OFFSET,
  T: TIME_24_SIMPLE,
  TT: TIME_24_WITH_SECONDS,
  TTT: TIME_24_WITH_SHORT_OFFSET,
  TTTT: TIME_24_WITH_LONG_OFFSET,
  f: DATETIME_SHORT,
  ff: DATETIME_MED,
  fff: DATETIME_FULL,
  ffff: DATETIME_HUGE,
  F: DATETIME_SHORT_WITH_SECONDS,
  FF: DATETIME_MED_WITH_SECONDS,
  FFF: DATETIME_FULL_WITH_SECONDS,
  FFFF: DATETIME_HUGE_WITH_SECONDS
};
/**
 * @private
 */

var Formatter =
/*#__PURE__*/
function () {
  Formatter.create = function create(locale, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var formatOpts = Object.assign({}, {
      round: true
    }, opts);
    return new Formatter(locale, formatOpts);
  };

  Formatter.parseFormat = function parseFormat(fmt) {
    var current = null,
        currentFull = "",
        bracketed = false;
    var splits = [];

    for (var i = 0; i < fmt.length; i++) {
      var c = fmt.charAt(i);

      if (c === "'") {
        if (currentFull.length > 0) {
          splits.push({
            literal: bracketed,
            val: currentFull
          });
        }

        current = null;
        currentFull = "";
        bracketed = !bracketed;
      } else if (bracketed) {
        currentFull += c;
      } else if (c === current) {
        currentFull += c;
      } else {
        if (currentFull.length > 0) {
          splits.push({
            literal: false,
            val: currentFull
          });
        }

        currentFull = c;
        current = c;
      }
    }

    if (currentFull.length > 0) {
      splits.push({
        literal: bracketed,
        val: currentFull
      });
    }

    return splits;
  };

  function Formatter(locale, formatOpts) {
    this.opts = formatOpts;
    this.loc = locale;
    this.systemLoc = null;
  }

  var _proto = Formatter.prototype;

  _proto.formatWithSystemDefault = function formatWithSystemDefault(dt, opts) {
    if (this.systemLoc === null) {
      this.systemLoc = this.loc.redefaultToSystem();
    }

    var df = this.systemLoc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTime = function formatDateTime(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.format();
  };

  _proto.formatDateTimeParts = function formatDateTimeParts(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.formatToParts();
  };

  _proto.resolvedOptions = function resolvedOptions(dt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var df = this.loc.dtFormatter(dt, Object.assign({}, this.opts, opts));
    return df.resolvedOptions();
  };

  _proto.num = function num(n, p) {
    if (p === void 0) {
      p = 0;
    }

    // we get some perf out of doing this here, annoyingly
    if (this.opts.forceSimple) {
      return padStart(n, p);
    }

    var opts = Object.assign({}, this.opts);

    if (p > 0) {
      opts.padTo = p;
    }

    return this.loc.numberFormatter(opts).format(n);
  };

  _proto.formatDateTimeFromString = function formatDateTimeFromString(dt, fmt) {
    var _this = this;

    var knownEnglish = this.loc.listingMode() === "en";

    var string = function string(opts, extract) {
      return _this.loc.extract(dt, opts, extract);
    },
        formatOffset = function formatOffset(opts) {
      if (dt.isOffsetFixed && dt.offset === 0 && opts.allowZ) {
        return "Z";
      }

      var hours = Math.trunc(dt.offset / 60),
          minutes = Math.abs(dt.offset % 60),
          sign = hours >= 0 ? "+" : "-",
          base = "" + sign + Math.abs(hours);

      switch (opts.format) {
        case "short":
          return "" + sign + _this.num(Math.abs(hours), 2) + ":" + _this.num(minutes, 2);

        case "narrow":
          return minutes > 0 ? base + ":" + minutes : base;

        case "techie":
          return "" + sign + _this.num(Math.abs(hours), 2) + _this.num(minutes, 2);

        default:
          throw new RangeError("Value format " + opts.format + " is out of range for property format");
      }
    },
        meridiem = function meridiem() {
      return knownEnglish ? meridiemForDateTime(dt) : string({
        hour: "numeric",
        hour12: true
      }, "dayperiod");
    },
        month = function month(length, standalone) {
      return knownEnglish ? monthForDateTime(dt, length) : string(standalone ? {
        month: length
      } : {
        month: length,
        day: "numeric"
      }, "month");
    },
        weekday = function weekday(length, standalone) {
      return knownEnglish ? weekdayForDateTime(dt, length) : string(standalone ? {
        weekday: length
      } : {
        weekday: length,
        month: "long",
        day: "numeric"
      }, "weekday");
    },
        maybeMacro = function maybeMacro(token) {
      var macro = tokenToObject[token];

      if (macro) {
        return _this.formatWithSystemDefault(dt, macro);
      } else {
        return token;
      }
    },
        era = function era(length) {
      return knownEnglish ? eraForDateTime(dt, length) : string({
        era: length
      }, "era");
    },
        tokenToString = function tokenToString(token) {
      var outputCal = _this.loc.outputCalendar; // Where possible: http://cldr.unicode.org/translation/date-time#TOC-Stand-Alone-vs.-Format-Styles

      switch (token) {
        // ms
        case "S":
          return _this.num(dt.millisecond);

        case "u": // falls through

        case "SSS":
          return _this.num(dt.millisecond, 3);
        // seconds

        case "s":
          return _this.num(dt.second);

        case "ss":
          return _this.num(dt.second, 2);
        // minutes

        case "m":
          return _this.num(dt.minute);

        case "mm":
          return _this.num(dt.minute, 2);
        // hours

        case "h":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12);

        case "hh":
          return _this.num(dt.hour % 12 === 0 ? 12 : dt.hour % 12, 2);

        case "H":
          return _this.num(dt.hour);

        case "HH":
          return _this.num(dt.hour, 2);
        // offset

        case "Z":
          // like +6
          return formatOffset({
            format: "narrow",
            allowZ: _this.opts.allowZ
          });

        case "ZZ":
          // like +06:00
          return formatOffset({
            format: "short",
            allowZ: _this.opts.allowZ
          });

        case "ZZZ":
          // like +0600
          return formatOffset({
            format: "techie",
            allowZ: false
          });

        case "ZZZZ":
          // like EST
          return dt.offsetNameShort;

        case "ZZZZZ":
          // like Eastern Standard Time
          return dt.offsetNameLong;
        // zone

        case "z":
          // like America/New_York
          return dt.zoneName;
        // meridiems

        case "a":
          return meridiem();
        // dates

        case "d":
          return outputCal ? string({
            day: "numeric"
          }, "day") : _this.num(dt.day);

        case "dd":
          return outputCal ? string({
            day: "2-digit"
          }, "day") : _this.num(dt.day, 2);
        // weekdays - standalone

        case "c":
          // like 1
          return _this.num(dt.weekday);

        case "ccc":
          // like 'Tues'
          return weekday("short", true);

        case "cccc":
          // like 'Tuesday'
          return weekday("long", true);

        case "ccccc":
          // like 'T'
          return weekday("narrow", true);
        // weekdays - format

        case "E":
          // like 1
          return _this.num(dt.weekday);

        case "EEE":
          // like 'Tues'
          return weekday("short", false);

        case "EEEE":
          // like 'Tuesday'
          return weekday("long", false);

        case "EEEEE":
          // like 'T'
          return weekday("narrow", false);
        // months - standalone

        case "L":
          // like 1
          return outputCal ? string({
            month: "numeric",
            day: "numeric"
          }, "month") : _this.num(dt.month);

        case "LL":
          // like 01, doesn't seem to work
          return outputCal ? string({
            month: "2-digit",
            day: "numeric"
          }, "month") : _this.num(dt.month, 2);

        case "LLL":
          // like Jan
          return month("short", true);

        case "LLLL":
          // like January
          return month("long", true);

        case "LLLLL":
          // like J
          return month("narrow", true);
        // months - format

        case "M":
          // like 1
          return outputCal ? string({
            month: "numeric"
          }, "month") : _this.num(dt.month);

        case "MM":
          // like 01
          return outputCal ? string({
            month: "2-digit"
          }, "month") : _this.num(dt.month, 2);

        case "MMM":
          // like Jan
          return month("short", false);

        case "MMMM":
          // like January
          return month("long", false);

        case "MMMMM":
          // like J
          return month("narrow", false);
        // years

        case "y":
          // like 2014
          return outputCal ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year);

        case "yy":
          // like 14
          return outputCal ? string({
            year: "2-digit"
          }, "year") : _this.num(dt.year.toString().slice(-2), 2);

        case "yyyy":
          // like 0012
          return outputCal ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 4);

        case "yyyyyy":
          // like 000012
          return outputCal ? string({
            year: "numeric"
          }, "year") : _this.num(dt.year, 6);
        // eras

        case "G":
          // like AD
          return era("short");

        case "GG":
          // like Anno Domini
          return era("long");

        case "GGGGG":
          return era("narrow");

        case "kk":
          return _this.num(dt.weekYear.toString().slice(-2), 2);

        case "kkkk":
          return _this.num(dt.weekYear, 4);

        case "W":
          return _this.num(dt.weekNumber);

        case "WW":
          return _this.num(dt.weekNumber, 2);

        case "o":
          return _this.num(dt.ordinal);

        case "ooo":
          return _this.num(dt.ordinal, 3);

        case "q":
          // like 1
          return _this.num(dt.quarter);

        case "qq":
          // like 01
          return _this.num(dt.quarter, 2);

        case "X":
          return _this.num(dt.ts / 1000);

        case "x":
          return _this.num(dt.ts);

        default:
          return maybeMacro(token);
      }
    };

    return stringifyTokens(Formatter.parseFormat(fmt), tokenToString);
  };

  _proto.formatDurationFromString = function formatDurationFromString(dur, fmt) {
    var _this2 = this;

    var tokenToField = function tokenToField(token) {
      switch (token[0]) {
        case "S":
          return "millisecond";

        case "s":
          return "second";

        case "m":
          return "minute";

        case "h":
          return "hour";

        case "d":
          return "day";

        case "M":
          return "month";

        case "y":
          return "year";

        default:
          return null;
      }
    },
        tokenToString = function tokenToString(lildur) {
      return function (token) {
        var mapped = tokenToField(token);

        if (mapped) {
          return _this2.num(lildur.get(mapped), token.length);
        } else {
          return token;
        }
      };
    },
        tokens = Formatter.parseFormat(fmt),
        realTokens = tokens.reduce(function (found, _ref2) {
      var literal = _ref2.literal,
          val = _ref2.val;
      return literal ? found : found.concat(val);
    }, []),
        collapsed = dur.shiftTo.apply(dur, realTokens.map(tokenToField).filter(function (t) {
      return t;
    }));

    return stringifyTokens(tokens, tokenToString(collapsed));
  };

  return Formatter;
}();

var intlDTCache = {};

function getCachedDTF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];

  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }

  return dtf;
}

var intlNumCache = {};

function getCachendINF(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }

  var key = JSON.stringify([locString, opts]);
  var inf = intlNumCache[key];

  if (!inf) {
    inf = new Intl.NumberFormat(locString, opts);
    intlNumCache[key] = inf;
  }

  return inf;
}

var sysLocaleCache = null;

function systemLocale() {
  if (sysLocaleCache) {
    return sysLocaleCache;
  } else if (hasIntl()) {
    var computedSys = new Intl.DateTimeFormat().resolvedOptions().locale; // node sometimes defaults to "und". Override that because that is dumb

    sysLocaleCache = computedSys === "und" ? "en-US" : computedSys;
    return sysLocaleCache;
  } else {
    sysLocaleCache = "en-US";
    return sysLocaleCache;
  }
}

function parseLocaleString(localeStr) {
  // I really want to avoid writing a BCP 47 parser
  // see, e.g. https://github.com/wooorm/bcp-47
  // Intead, we'll do this:
  // a) if the string has no -u extensions, just leave it alone
  // b) if it does, use Intl to resolve everything
  // c) if Intl fails, try again without the -u
  var uIndex = localeStr.indexOf("-u-");

  if (uIndex === -1) {
    return [localeStr];
  } else {
    var options;
    var smaller = localeStr.substring(0, uIndex);

    try {
      options = getCachedDTF(localeStr).resolvedOptions();
    } catch (e) {
      options = getCachedDTF(smaller).resolvedOptions();
    }

    var _options = options,
        numberingSystem = _options.numberingSystem,
        calendar = _options.calendar; // return the smaller one so that we can append the calendar and numbering overrides to it

    return [smaller, numberingSystem, calendar];
  }
}

function intlConfigString(localeStr, numberingSystem, outputCalendar) {
  if (hasIntl()) {
    if (outputCalendar || numberingSystem) {
      localeStr += "-u";

      if (outputCalendar) {
        localeStr += "-ca-" + outputCalendar;
      }

      if (numberingSystem) {
        localeStr += "-nu-" + numberingSystem;
      }

      return localeStr;
    } else {
      return localeStr;
    }
  } else {
    return [];
  }
}

function mapMonths(f) {
  var ms = [];

  for (var i = 1; i <= 12; i++) {
    var dt = DateTime.utc(2016, i, 1);
    ms.push(f(dt));
  }

  return ms;
}

function mapWeekdays(f) {
  var ms = [];

  for (var i = 1; i <= 7; i++) {
    var dt = DateTime.utc(2016, 11, 13 + i);
    ms.push(f(dt));
  }

  return ms;
}

function listStuff(loc, length, defaultOK, englishFn, intlFn) {
  var mode = loc.listingMode(defaultOK);

  if (mode === "error") {
    return null;
  } else if (mode === "en") {
    return englishFn(length);
  } else {
    return intlFn(length);
  }
}

function supportsFastNumbers(loc) {
  if (loc.numberingSystem && loc.numberingSystem !== "latn") {
    return false;
  } else {
    return loc.numberingSystem === "latn" || !loc.locale || loc.locale.startsWith("en") || hasIntl() && Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem === "latn";
  }
}
/**
 * @private
 */


var SimpleNumberFormatter =
/*#__PURE__*/
function () {
  function SimpleNumberFormatter(opts) {
    this.padTo = opts.padTo || 0;
    this.round = opts.round || false;
    this.floor = opts.floor || false;
  }

  var _proto = SimpleNumberFormatter.prototype;

  _proto.format = function format(i) {
    // to match the browser's numberformatter defaults
    var fixed = this.floor ? Math.floor(i) : roundTo(i, this.round ? 0 : 3);
    return padStart(fixed, this.padTo);
  };

  return SimpleNumberFormatter;
}();

var IntlNumberFormatter =
/*#__PURE__*/
function () {
  function IntlNumberFormatter(intl, opts) {
    var intlOpts = {
      useGrouping: false
    };

    if (opts.padTo > 0) {
      intlOpts.minimumIntegerDigits = opts.padTo;
    }

    if (opts.round) {
      intlOpts.maximumFractionDigits = 0;
    }

    this.floor = opts.floor;
    this.inf = getCachendINF(intl, intlOpts);
  }

  var _proto2 = IntlNumberFormatter.prototype;

  _proto2.format = function format(i) {
    var fixed = this.floor ? Math.floor(i) : i;
    return this.inf.format(fixed);
  };

  return IntlNumberFormatter;
}();
/**
 * @private
 */


var PolyDateFormatter =
/*#__PURE__*/
function () {
  function PolyDateFormatter(dt, intl, opts) {
    this.opts = opts;
    this.hasIntl = hasIntl();
    var z;

    if (dt.zone.universal && this.hasIntl) {
      // Chromium doesn't support fixed-offset zones like Etc/GMT+8 in its formatter,
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=364374.
      // So we have to make do. Two cases:
      // 1. The format options tell us to show the zone. We can't do that, so the best
      // we can do is format the date in UTC.
      // 2. The format options don't tell us to show the zone. Then we can adjust them
      // the time and tell the formatter to show it to us in UTC, so that the time is right
      // and the bad zone doesn't show up.
      // We can clean all this up when Chrome fixes this.
      z = "UTC";

      if (opts.timeZoneName) {
        this.dt = dt;
      } else {
        this.dt = dt.offset === 0 ? dt : DateTime.fromMillis(dt.ts + dt.offset * 60 * 1000);
      }
    } else if (dt.zone.type === "local") {
      this.dt = dt;
    } else {
      this.dt = dt;
      z = dt.zone.name;
    }

    if (this.hasIntl) {
      var intlOpts = Object.assign({}, this.opts);

      if (z) {
        intlOpts.timeZone = z;
      }

      this.dtf = getCachedDTF(intl, intlOpts);
    }
  }

  var _proto3 = PolyDateFormatter.prototype;

  _proto3.format = function format() {
    if (this.hasIntl) {
      return this.dtf.format(this.dt.toJSDate());
    } else {
      var tokenFormat = formatString(this.opts),
          loc = Locale.create("en-US");
      return Formatter.create(loc).formatDateTimeFromString(this.dt, tokenFormat);
    }
  };

  _proto3.formatToParts = function formatToParts() {
    if (this.hasIntl && hasFormatToParts()) {
      return this.dtf.formatToParts(this.dt.toJSDate());
    } else {
      // This is kind of a cop out. We actually could do this for English. However, we couldn't do it for intl strings
      // and IMO it's too weird to have an uncanny valley like that
      return [];
    }
  };

  _proto3.resolvedOptions = function resolvedOptions() {
    if (this.hasIntl) {
      return this.dtf.resolvedOptions();
    } else {
      return {
        locale: "en-US",
        numberingSystem: "latn",
        outputCalendar: "gregory"
      };
    }
  };

  return PolyDateFormatter;
}();
/**
 * @private
 */


var Locale =
/*#__PURE__*/
function () {
  Locale.fromOpts = function fromOpts(opts) {
    return Locale.create(opts.locale, opts.numberingSystem, opts.outputCalendar, opts.defaultToEN);
  };

  Locale.create = function create(locale, numberingSystem, outputCalendar, defaultToEN) {
    if (defaultToEN === void 0) {
      defaultToEN = false;
    }

    var specifiedLocale = locale || Settings.defaultLocale,
        // the system locale is useful for human readable strings but annoying for parsing/formatting known formats
    localeR = specifiedLocale || (defaultToEN ? "en-US" : systemLocale()),
        numberingSystemR = numberingSystem || Settings.defaultNumberingSystem,
        outputCalendarR = outputCalendar || Settings.defaultOutputCalendar;
    return new Locale(localeR, numberingSystemR, outputCalendarR, specifiedLocale);
  };

  Locale.resetCache = function resetCache() {
    sysLocaleCache = null;
    intlDTCache = {};
    intlNumCache = {};
  };

  Locale.fromObject = function fromObject(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        outputCalendar = _ref.outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar);
  };

  function Locale(locale, numbering, outputCalendar, specifiedLocale) {
    var _parseLocaleString = parseLocaleString(locale),
        parsedLocale = _parseLocaleString[0],
        parsedNumberingSystem = _parseLocaleString[1],
        parsedOutputCalendar = _parseLocaleString[2];

    this.locale = parsedLocale;
    this.numberingSystem = numbering || parsedNumberingSystem || null;
    this.outputCalendar = outputCalendar || parsedOutputCalendar || null;
    this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar);
    this.weekdaysCache = {
      format: {},
      standalone: {}
    };
    this.monthsCache = {
      format: {},
      standalone: {}
    };
    this.meridiemCache = null;
    this.eraCache = {};
    this.specifiedLocale = specifiedLocale;
    this.fastNumbersCached = null;
  }

  var _proto4 = Locale.prototype;

  _proto4.listingMode = function listingMode(defaultOK) {
    if (defaultOK === void 0) {
      defaultOK = true;
    }

    var intl = hasIntl(),
        hasFTP = intl && hasFormatToParts(),
        isActuallyEn = this.locale === "en" || this.locale.toLowerCase() === "en-us" || intl && Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us"),
        hasNoWeirdness = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");

    if (!hasFTP && !(isActuallyEn && hasNoWeirdness) && !defaultOK) {
      return "error";
    } else if (!hasFTP || isActuallyEn && hasNoWeirdness) {
      return "en";
    } else {
      return "intl";
    }
  };

  _proto4.clone = function clone(alts) {
    if (!alts || Object.getOwnPropertyNames(alts).length === 0) {
      return this;
    } else {
      return Locale.create(alts.locale || this.specifiedLocale, alts.numberingSystem || this.numberingSystem, alts.outputCalendar || this.outputCalendar, alts.defaultToEN || false);
    }
  };

  _proto4.redefaultToEN = function redefaultToEN(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: true
    }));
  };

  _proto4.redefaultToSystem = function redefaultToSystem(alts) {
    if (alts === void 0) {
      alts = {};
    }

    return this.clone(Object.assign({}, alts, {
      defaultToEN: false
    }));
  };

  _proto4.months = function months$$1(length, format, defaultOK) {
    var _this = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, months, function () {
      var intl = format ? {
        month: length,
        day: "numeric"
      } : {
        month: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this.monthsCache[formatStr][length]) {
        _this.monthsCache[formatStr][length] = mapMonths(function (dt) {
          return _this.extract(dt, intl, "month");
        });
      }

      return _this.monthsCache[formatStr][length];
    });
  };

  _proto4.weekdays = function weekdays$$1(length, format, defaultOK) {
    var _this2 = this;

    if (format === void 0) {
      format = false;
    }

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, weekdays, function () {
      var intl = format ? {
        weekday: length,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: length
      },
          formatStr = format ? "format" : "standalone";

      if (!_this2.weekdaysCache[formatStr][length]) {
        _this2.weekdaysCache[formatStr][length] = mapWeekdays(function (dt) {
          return _this2.extract(dt, intl, "weekday");
        });
      }

      return _this2.weekdaysCache[formatStr][length];
    });
  };

  _proto4.meridiems = function meridiems$$1(defaultOK) {
    var _this3 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, undefined, defaultOK, function () {
      return meridiems;
    }, function () {
      // In theory there could be aribitrary day periods. We're gonna assume there are exactly two
      // for AM and PM. This is probably wrong, but it's makes parsing way easier.
      if (!_this3.meridiemCache) {
        var intl = {
          hour: "numeric",
          hour12: true
        };
        _this3.meridiemCache = [DateTime.utc(2016, 11, 13, 9), DateTime.utc(2016, 11, 13, 19)].map(function (dt) {
          return _this3.extract(dt, intl, "dayperiod");
        });
      }

      return _this3.meridiemCache;
    });
  };

  _proto4.eras = function eras$$1(length, defaultOK) {
    var _this4 = this;

    if (defaultOK === void 0) {
      defaultOK = true;
    }

    return listStuff(this, length, defaultOK, eras, function () {
      var intl = {
        era: length
      }; // This is utter bullshit. Different calendars are going to define eras totally differently. What I need is the minimum set of dates
      // to definitely enumerate them.

      if (!_this4.eraCache[length]) {
        _this4.eraCache[length] = [DateTime.utc(-40, 1, 1), DateTime.utc(2017, 1, 1)].map(function (dt) {
          return _this4.extract(dt, intl, "era");
        });
      }

      return _this4.eraCache[length];
    });
  };

  _proto4.extract = function extract(dt, intlOpts, field) {
    var df = this.dtFormatter(dt, intlOpts),
        results = df.formatToParts(),
        matching = results.find(function (m) {
      return m.type.toLowerCase() === field;
    });
    return matching ? matching.value : null;
  };

  _proto4.numberFormatter = function numberFormatter(opts) {
    if (opts === void 0) {
      opts = {};
    }

    // this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
    // (in contrast, the rest of the condition is used heavily)
    if (opts.forceSimple || this.fastNumbers || !hasIntl()) {
      return new SimpleNumberFormatter(opts);
    } else {
      return new IntlNumberFormatter(this.intl, opts);
    }
  };

  _proto4.dtFormatter = function dtFormatter(dt, intlOpts) {
    if (intlOpts === void 0) {
      intlOpts = {};
    }

    return new PolyDateFormatter(dt, this.intl, intlOpts);
  };

  _proto4.equals = function equals(other) {
    return this.locale === other.locale && this.numberingSystem === other.numberingSystem && this.outputCalendar === other.outputCalendar;
  };

  _createClass(Locale, [{
    key: "fastNumbers",
    get: function get() {
      if (this.fastNumbersCached == null) {
        this.fastNumbersCached = supportsFastNumbers(this);
      }

      return this.fastNumbersCached;
    }
  }]);

  return Locale;
}();

/*
 * This file handles parsing for well-specified formats. Here's how it works:
 * Two things go into parsing: a regex to match with and an extractor to take apart the groups in the match.
 * An extractor is just a function that takes a regex match array and returns a { year: ..., month: ... } object
 * parse() does the work of executing the regex and applying the extractor. It takes multiple regex/extractor pairs to try in sequence.
 * Extractors can take a "cursor" representing the offset in the match to look at. This makes it easy to combine extractors.
 * combineExtractors() does the work of combining them, keeping track of the cursor through multiple extractions.
 * Some extractions are super dumb and simpleParse and fromStrings help DRY them.
 */

function combineRegexes() {
  for (var _len = arguments.length, regexes = new Array(_len), _key = 0; _key < _len; _key++) {
    regexes[_key] = arguments[_key];
  }

  var full = regexes.reduce(function (f, r) {
    return f + r.source;
  }, "");
  return RegExp("^" + full + "$");
}

function combineExtractors() {
  for (var _len2 = arguments.length, extractors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    extractors[_key2] = arguments[_key2];
  }

  return function (m) {
    return extractors.reduce(function (_ref, ex) {
      var mergedVals = _ref[0],
          mergedZone = _ref[1],
          cursor = _ref[2];

      var _ex = ex(m, cursor),
          val = _ex[0],
          zone = _ex[1],
          next = _ex[2];

      return [Object.assign(mergedVals, val), mergedZone || zone, next];
    }, [{}, null, 1]).slice(0, 2);
  };
}

function parse(s) {
  if (s == null) {
    return [null, null];
  }

  for (var _len3 = arguments.length, patterns = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    patterns[_key3 - 1] = arguments[_key3];
  }

  for (var _i = 0; _i < patterns.length; _i++) {
    var _patterns$_i = patterns[_i],
        regex = _patterns$_i[0],
        extractor = _patterns$_i[1];
    var m = regex.exec(s);

    if (m) {
      return extractor(m);
    }
  }

  return [null, null];
}

function simpleParse() {
  for (var _len4 = arguments.length, keys = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    keys[_key4] = arguments[_key4];
  }

  return function (match, cursor) {
    var ret = {};
    var i;

    for (i = 0; i < keys.length; i++) {
      ret[keys[i]] = parseInt(match[cursor + i]);
    }

    return [ret, null, cursor + i];
  };
} // ISO and SQL parsing


var offsetRegex = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
    isoTimeBaseRegex = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,9}))?)?)?/,
    isoTimeRegex = RegExp("" + isoTimeBaseRegex.source + offsetRegex.source + "?"),
    isoTimeExtensionRegex = RegExp("(?:T" + isoTimeRegex.source + ")?"),
    isoYmdRegex = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,
    isoWeekRegex = /(\d{4})-?W(\d\d)(?:-?(\d))?/,
    isoOrdinalRegex = /(\d{4})-?(\d{3})/,
    extractISOWeekData = simpleParse("weekYear", "weekNumber", "weekDay"),
    extractISOOrdinalData = simpleParse("year", "ordinal"),
    sqlYmdRegex = /(\d{4})-(\d\d)-(\d\d)/,
    // dumbed-down version of the ISO one
sqlTimeRegex = RegExp(isoTimeBaseRegex.source + " ?(?:" + offsetRegex.source + "|([a-zA-Z_]{1,256}/[a-zA-Z_]{1,256}))?"),
    sqlTimeExtensionRegex = RegExp("(?: " + sqlTimeRegex.source + ")?");

function extractISOYmd(match, cursor) {
  var item = {
    year: parseInt(match[cursor]),
    month: parseInt(match[cursor + 1]) || 1,
    day: parseInt(match[cursor + 2]) || 1
  };
  return [item, null, cursor + 3];
}

function extractISOTime(match, cursor) {
  var item = {
    hour: parseInt(match[cursor]) || 0,
    minute: parseInt(match[cursor + 1]) || 0,
    second: parseInt(match[cursor + 2]) || 0,
    millisecond: parseMillis(match[cursor + 3])
  };
  return [item, null, cursor + 4];
}

function extractISOOffset(match, cursor) {
  var local = !match[cursor] && !match[cursor + 1],
      fullOffset = signedOffset(match[cursor + 1], match[cursor + 2]),
      zone = local ? null : FixedOffsetZone.instance(fullOffset);
  return [{}, zone, cursor + 3];
}

function extractIANAZone(match, cursor) {
  var zone = match[cursor] ? new IANAZone(match[cursor]) : null;
  return [{}, zone, cursor + 1];
} // ISO duration parsing


var isoDuration = /^P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})(?:[.,](-?\d{1,9}))?S)?)?|(-?\d{1,9})W)$/;

function extractISODuration(match) {
  var yearStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      millisecondsStr = match[7],
      weekStr = match[8];
  return [{
    years: parseInt(yearStr),
    months: parseInt(monthStr),
    weeks: parseInt(weekStr),
    days: parseInt(dayStr),
    hours: parseInt(hourStr),
    minutes: parseInt(minuteStr),
    seconds: parseInt(secondStr),
    milliseconds: parseMillis(millisecondsStr)
  }];
} // These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that


var obsOffsets = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};

function fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  var result = {
    year: yearStr.length === 2 ? untruncateYear(parseInt(yearStr)) : parseInt(yearStr),
    month: monthStr.length === 2 ? parseInt(monthStr, 10) : monthsShort.indexOf(monthStr) + 1,
    day: parseInt(dayStr),
    hour: parseInt(hourStr),
    minute: parseInt(minuteStr)
  };
  if (secondStr) result.second = parseInt(secondStr);

  if (weekdayStr) {
    result.weekday = weekdayStr.length > 3 ? weekdaysLong.indexOf(weekdayStr) + 1 : weekdaysShort.indexOf(weekdayStr) + 1;
  }

  return result;
} // RFC 2822/5322


var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;

function extractRFC2822(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      obsOffset = match[8],
      milOffset = match[9],
      offHourStr = match[10],
      offMinuteStr = match[11],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  var offset;

  if (obsOffset) {
    offset = obsOffsets[obsOffset];
  } else if (milOffset) {
    offset = 0;
  } else {
    offset = signedOffset(offHourStr, offMinuteStr);
  }

  return [result, new FixedOffsetZone(offset)];
}

function preprocessRFC2822(s) {
  // Remove comments and folding whitespace and replace multiple-spaces with a single space
  return s.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
} // http date


var rfc1123 = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
    rfc850 = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
    ascii = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;

function extractRFC1123Or850(match) {
  var weekdayStr = match[1],
      dayStr = match[2],
      monthStr = match[3],
      yearStr = match[4],
      hourStr = match[5],
      minuteStr = match[6],
      secondStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}

function extractASCII(match) {
  var weekdayStr = match[1],
      monthStr = match[2],
      dayStr = match[3],
      hourStr = match[4],
      minuteStr = match[5],
      secondStr = match[6],
      yearStr = match[7],
      result = fromStrings(weekdayStr, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr);
  return [result, FixedOffsetZone.utcInstance];
}
/**
 * @private
 */


function parseISODate(s) {
  return parse(s, [combineRegexes(isoYmdRegex, isoTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset)], [combineRegexes(isoWeekRegex, isoTimeExtensionRegex), combineExtractors(extractISOWeekData, extractISOTime, extractISOOffset)], [combineRegexes(isoOrdinalRegex, isoTimeExtensionRegex), combineExtractors(extractISOOrdinalData, extractISOTime)], [combineRegexes(isoTimeRegex), combineExtractors(extractISOTime, extractISOOffset)]);
}
function parseRFC2822Date(s) {
  return parse(preprocessRFC2822(s), [rfc2822, extractRFC2822]);
}
function parseHTTPDate(s) {
  return parse(s, [rfc1123, extractRFC1123Or850], [rfc850, extractRFC1123Or850], [ascii, extractASCII]);
}
function parseISODuration(s) {
  return parse(s, [isoDuration, extractISODuration]);
}
function parseSQL(s) {
  return parse(s, [combineRegexes(sqlYmdRegex, sqlTimeExtensionRegex), combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone)], [combineRegexes(sqlTimeRegex), combineExtractors(extractISOTime, extractISOOffset, extractIANAZone)]);
}

var Invalid =
/*#__PURE__*/
function () {
  function Invalid(reason, explanation) {
    this.reason = reason;
    this.explanation = explanation;
  }

  var _proto = Invalid.prototype;

  _proto.toMessage = function toMessage() {
    if (this.explanation) {
      return this.reason + ": " + this.explanation;
    } else {
      return this.reason;
    }
  };

  return Invalid;
}();

var INVALID = "Invalid Duration"; // unit conversion constants

var lowOrderMatrix = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1000
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1000
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1000
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1000
  },
  seconds: {
    milliseconds: 1000
  }
},
    casualMatrix = Object.assign({
  years: {
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1000
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix),
    daysInYearAccurate = 146097.0 / 400,
    daysInMonthAccurate = 146097.0 / 4800,
    accurateMatrix = Object.assign({
  years: {
    months: 12,
    weeks: daysInYearAccurate / 7,
    days: daysInYearAccurate,
    hours: daysInYearAccurate * 24,
    minutes: daysInYearAccurate * 24 * 60,
    seconds: daysInYearAccurate * 24 * 60 * 60,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000
  },
  quarters: {
    months: 3,
    weeks: daysInYearAccurate / 28,
    days: daysInYearAccurate / 4,
    hours: daysInYearAccurate * 24 / 4,
    minutes: daysInYearAccurate * 24 * 60 / 4,
    seconds: daysInYearAccurate * 24 * 60 * 60 / 4,
    milliseconds: daysInYearAccurate * 24 * 60 * 60 * 1000 / 4
  },
  months: {
    weeks: daysInMonthAccurate / 7,
    days: daysInMonthAccurate,
    hours: daysInMonthAccurate * 24,
    minutes: daysInMonthAccurate * 24 * 60,
    seconds: daysInMonthAccurate * 24 * 60 * 60,
    milliseconds: daysInMonthAccurate * 24 * 60 * 60 * 1000
  }
}, lowOrderMatrix); // units ordered by size

var orderedUnits = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"];
var reverseUnits = orderedUnits.slice(0).reverse(); // clone really means "create another instance just like this one, but with these changes"

function clone(dur, alts, clear) {
  if (clear === void 0) {
    clear = false;
  }

  // deep merge for vals
  var conf = {
    values: clear ? alts.values : Object.assign({}, dur.values, alts.values || {}),
    loc: dur.loc.clone(alts.loc),
    conversionAccuracy: alts.conversionAccuracy || dur.conversionAccuracy
  };
  return new Duration(conf);
}

function antiTrunc(n) {
  return n < 0 ? Math.floor(n) : Math.ceil(n);
} // NB: mutates parameters


function convert(matrix, fromMap, fromUnit, toMap, toUnit) {
  var conv = matrix[toUnit][fromUnit],
      raw = fromMap[fromUnit] / conv,
      sameSign = Math.sign(raw) === Math.sign(toMap[toUnit]),
      // ok, so this is wild, but see the matrix in the tests
  added = !sameSign && toMap[toUnit] !== 0 && Math.abs(raw) <= 1 ? antiTrunc(raw) : Math.trunc(raw);
  toMap[toUnit] += added;
  fromMap[fromUnit] -= added * conv;
} // NB: mutates parameters


function normalizeValues(matrix, vals) {
  reverseUnits.reduce(function (previous, current) {
    if (!isUndefined(vals[current])) {
      if (previous) {
        convert(matrix, vals, previous, vals, current);
      }

      return current;
    } else {
      return previous;
    }
  }, null);
}
/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime.plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration.years}, {@link Duration.months}, {@link Duration.weeks}, {@link Duration.days}, {@link Duration.hours}, {@link Duration.minutes}, {@link Duration.seconds}, {@link Duration.milliseconds} accessors.
 * * **Configuration** See  {@link Duration.locale} and {@link Duration.numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration.plus}, {@link Duration.minus}, {@link Duration.normalize}, {@link Duration.set}, {@link Duration.reconfigure}, {@link Duration.shiftTo}, and {@link Duration.negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration.as}, {@link Duration.toISO}, {@link Duration.toFormat}, and {@link Duration.toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */


var Duration =
/*#__PURE__*/
function () {
  /**
   * @private
   */
  function Duration(config) {
    var accurate = config.conversionAccuracy === "longterm" || false;
    /**
     * @access private
     */

    this.values = config.values;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.conversionAccuracy = accurate ? "longterm" : "casual";
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.matrix = accurate ? accurateMatrix : casualMatrix;
    /**
     * @access private
     */

    this.isLuxonDuration = true;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromMillis = function fromMillis(count, opts) {
    return Duration.fromObject(Object.assign({
      milliseconds: count
    }, opts));
  };
  /**
   * Create a Duration from a Javascript object with keys like 'years' and 'hours.
   * If this object is empty then zero  milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {string} [obj.locale='en-US'] - the locale to use
   * @param {string} obj.numberingSystem - the numbering system to use
   * @param {string} [obj.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  Duration.fromObject = function fromObject(obj) {
    if (obj == null || typeof obj !== "object") {
      throw new InvalidArgumentError("Duration.fromObject: argument expected to be an object, got " + typeof obj);
    }

    return new Duration({
      values: normalizeObject(obj, Duration.normalizeUnit, true),
      loc: Locale.fromObject(obj),
      conversionAccuracy: obj.conversionAccuracy
    });
  };
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M4DT12H30M5S').toObject() //=> { years: 3, months: 6, day: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */


  Duration.fromISO = function fromISO(text, opts) {
    var _parseISODuration = parseISODuration(text),
        parsed = _parseISODuration[0];

    if (parsed) {
      var obj = Object.assign(parsed, opts);
      return Duration.fromObject(obj);
    } else {
      return Duration.invalid("unparsable", "the input \"" + text + "\" can't be parsed as ISO 8601");
    }
  };
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */


  Duration.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Duration is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDurationError(invalid);
    } else {
      return new Duration({
        invalid: invalid
      });
    }
  };
  /**
   * @private
   */


  Duration.normalizeUnit = function normalizeUnit(unit, ignoreUnknown) {
    if (ignoreUnknown === void 0) {
      ignoreUnknown = false;
    }

    var normalized = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[unit ? unit.toLowerCase() : unit];
    if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);
    return normalized;
  };
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */


  Duration.isDuration = function isDuration(o) {
    return o.isLuxonDuration;
  };
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */


  var _proto = Duration.prototype;

  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * The duration will be converted to the set of units in the format string using {@link Duration.shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    // reverse-compat since 1.2; we always round down now, never up, and we do it by default. So:
    // 1. always turn off rounding in the underlying formatter
    // 2. turn off flooring if either rounding is turned off or flooring is turned off, otherwise leave it on
    var fmtOpts = Object.assign({}, opts, {
      floor: true,
      round: false
    });

    if (opts.round === false || opts.floor === false) {
      fmtOpts.floor = false;
    }

    return this.isValid ? Formatter.create(this.loc, fmtOpts).formatDurationFromString(this, fmt) : INVALID;
  };
  /**
   * Returns a Javascript object with this Duration's values.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */


  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.values);

    if (opts.includeConfig) {
      base.conversionAccuracy = this.conversionAccuracy;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  };
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */


  _proto.toISO = function toISO() {
    // we could use the formatter, but this is an easier way to get the minimum string
    if (!this.isValid) return null;
    var s = "P";
    if (this.years !== 0) s += this.years + "Y";
    if (this.months !== 0 || this.quarters !== 0) s += this.months + this.quarters * 3 + "M";
    if (this.days !== 0 || this.weeks !== 0) s += this.days + this.weeks * 7 + "D";
    if (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) s += "T";
    if (this.hours !== 0) s += this.hours + "H";
    if (this.minutes !== 0) s += this.minutes + "M";
    if (this.seconds !== 0 || this.milliseconds !== 0) s += this.seconds + this.milliseconds / 1000 + "S";
    return s;
  };
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */


  _proto.toJSON = function toJSON() {
    return this.toISO();
  };
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */


  _proto.toString = function toString() {
    return this.toISO();
  };
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */


  _proto.valueOf = function valueOf() {
    return this.as("milliseconds");
  };
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */


  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration),
        result = {};

    for (var _i = 0; _i < orderedUnits.length; _i++) {
      var k = orderedUnits[_i];

      if (dur.values.hasOwnProperty(k) || this.values.hasOwnProperty(k)) {
        result[k] = dur.get(k) + this.get(k);
      }
    }

    return clone(this, {
      values: result
    }, true);
  };
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */


  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return this.plus(dur.negate());
  };
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).years //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).months //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).days //=> 3
   * @return {number}
   */


  _proto.get = function get(unit) {
    return this[Duration.normalizeUnit(unit)];
  };
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */


  _proto.set = function set(values) {
    var mixed = Object.assign(this.values, normalizeObject(values, Duration.normalizeUnit));
    return clone(this, {
      values: mixed
    });
  };
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */


  _proto.reconfigure = function reconfigure(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        locale = _ref.locale,
        numberingSystem = _ref.numberingSystem,
        conversionAccuracy = _ref.conversionAccuracy;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem
    }),
        opts = {
      loc: loc
    };

    if (conversionAccuracy) {
      opts.conversionAccuracy = conversionAccuracy;
    }

    return clone(this, opts);
  };
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */


  _proto.as = function as(unit) {
    return this.isValid ? this.shiftTo(unit).get(unit) : NaN;
  };
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */


  _proto.normalize = function normalize() {
    if (!this.isValid) return this;
    var vals = this.toObject();
    normalizeValues(this.matrix, vals);
    return Duration.fromObject(vals);
  };
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */


  _proto.shiftTo = function shiftTo() {
    for (var _len = arguments.length, units = new Array(_len), _key = 0; _key < _len; _key++) {
      units[_key] = arguments[_key];
    }

    if (!this.isValid) return this;

    if (units.length === 0) {
      return this;
    }

    units = units.map(function (u) {
      return Duration.normalizeUnit(u);
    });
    var built = {},
        accumulated = {},
        vals = this.toObject();
    var lastUnit;
    normalizeValues(this.matrix, vals);

    for (var _i2 = 0; _i2 < orderedUnits.length; _i2++) {
      var k = orderedUnits[_i2];

      if (units.indexOf(k) >= 0) {
        lastUnit = k;
        var own = 0; // anything we haven't boiled down yet should get boiled to this unit

        for (var ak in accumulated) {
          if (accumulated.hasOwnProperty(ak)) {
            own += this.matrix[ak][k] * accumulated[ak];
            accumulated[ak] = 0;
          }
        } // plus anything that's already in this unit


        if (isNumber(vals[k])) {
          own += vals[k];
        }

        var i = Math.trunc(own);
        built[k] = i;
        accumulated[k] = own - i; // we'd like to absorb these fractions in another unit
        // plus anything further down the chain that should be rolled up in to this

        for (var down in vals) {
          if (orderedUnits.indexOf(down) > orderedUnits.indexOf(k)) {
            convert(this.matrix, vals, down, built, k);
          }
        } // otherwise, keep it in the wings to boil it later

      } else if (isNumber(vals[k])) {
        accumulated[k] = vals[k];
      }
    } // anything leftover becomes the decimal for the last unit


    if (lastUnit) {
      for (var key in accumulated) {
        if (accumulated.hasOwnProperty(key)) {
          if (accumulated[key] !== 0) {
            built[lastUnit] += key === lastUnit ? accumulated[key] : accumulated[key] / this.matrix[lastUnit][key];
          }
        }
      }
    }

    return clone(this, {
      values: built
    }, true);
  };
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */


  _proto.negate = function negate() {
    if (!this.isValid) return this;
    var negated = {};

    var _arr = Object.keys(this.values);

    for (var _i3 = 0; _i3 < _arr.length; _i3++) {
      var k = _arr[_i3];
      negated[k] = -this.values[k];
    }

    return clone(this, {
      values: negated
    }, true);
  };
  /**
   * Get the years.
   * @type {number}
   */


  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    if (!this.loc.equals(other.loc)) {
      return false;
    }

    for (var _i4 = 0; _i4 < orderedUnits.length; _i4++) {
      var u = orderedUnits[_i4];

      if (this.values[u] !== other.values[u]) {
        return false;
      }
    }

    return true;
  };

  _createClass(Duration, [{
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function get() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */

  }, {
    key: "quarters",
    get: function get() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */

  }, {
    key: "months",
    get: function get() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */

  }, {
    key: "weeks",
    get: function get() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */

  }, {
    key: "days",
    get: function get() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */

  }, {
    key: "hours",
    get: function get() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */

  }, {
    key: "minutes",
    get: function get() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */

  }, {
    key: "seconds",
    get: function get() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */

  }, {
    key: "milliseconds",
    get: function get() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Duration;
}();
function friendlyDuration(durationish) {
  if (isNumber(durationish)) {
    return Duration.fromMillis(durationish);
  } else if (Duration.isDuration(durationish)) {
    return durationish;
  } else if (typeof durationish === "object") {
    return Duration.fromObject(durationish);
  } else {
    throw new InvalidArgumentError("Unknown duration argument " + durationish + " of type " + typeof durationish);
  }
}

var INVALID$1 = "Invalid Interval"; // checks if the start is equal to or before the end

function validateStartEnd(start, end) {
  if (!start || !start.isValid) {
    return new Invalid("missing or invalid start");
  } else if (!end || !end.isValid) {
    return new Invalid("missing or invalid end");
  } else if (end < start) {
    return new Invalid("end before start", "The end of an interval must be after its start, but you had start=" + start.toISO() + " and end=" + end.toISO());
  } else {
    return null;
  }
}
/**
 * An Interval object represents a half-open interval of time, where each endpoint is a {@link DateTime}. Conceptually, it's a container for those two endpoints, accompanied by methods for creating, parsing, interrogating, comparing, transforming, and formatting them.
 *
 * Here is a brief overview of the most commonly used methods and getters in Interval:
 *
 * * **Creation** To create an Interval, use {@link fromDateTimes}, {@link after}, {@link before}, or {@link fromISO}.
 * * **Accessors** Use {@link start} and {@link end} to get the start and end.
 * * **Interrogation** To analyze the Interval, use {@link count}, {@link length}, {@link hasSame}, {@link contains}, {@link isAfter}, or {@link isBefore}.
 * * **Transformation** To create other Intervals out of this one, use {@link set}, {@link splitAt}, {@link splitBy}, {@link divideEqually}, {@link merge}, {@link xor}, {@link union}, {@link intersection}, or {@link difference}.
 * * **Comparison** To compare this Interval to another one, use {@link equals}, {@link overlaps}, {@link abutsStart}, {@link abutsEnd}, {@link engulfs}
 * * **Output*** To convert the Interval into other representations, see {@link toString}, {@link toISO}, {@link toFormat}, and {@link toDuration}.
 */


var Interval =
/*#__PURE__*/
function () {
  /**
   * @private
   */
  function Interval(config) {
    /**
     * @access private
     */
    this.s = config.start;
    /**
     * @access private
     */

    this.e = config.end;
    /**
     * @access private
     */

    this.invalid = config.invalid || null;
    /**
     * @access private
     */

    this.isLuxonInterval = true;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */


  Interval.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the Interval is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidIntervalError(invalid);
    } else {
      return new Interval({
        invalid: invalid
      });
    }
  };
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */


  Interval.fromDateTimes = function fromDateTimes(start, end) {
    var builtStart = friendlyDateTime(start),
        builtEnd = friendlyDateTime(end);
    return new Interval({
      start: builtStart,
      end: builtEnd,
      invalid: validateStartEnd(builtStart, builtEnd)
    });
  };
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */


  Interval.after = function after(start, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(start);
    return Interval.fromDateTimes(dt, dt.plus(dur));
  };
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */


  Interval.before = function before(end, duration) {
    var dur = friendlyDuration(duration),
        dt = friendlyDateTime(end);
    return Interval.fromDateTimes(dt.minus(dur), dt);
  };
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */


  Interval.fromISO = function fromISO(text, opts) {
    var _split = (text || "").split("/", 2),
        s = _split[0],
        e = _split[1];

    if (s && e) {
      var start = DateTime.fromISO(s, opts),
          end = DateTime.fromISO(e, opts);

      if (start.isValid && end.isValid) {
        return Interval.fromDateTimes(start, end);
      }

      if (start.isValid) {
        var dur = Duration.fromISO(e, opts);

        if (dur.isValid) {
          return Interval.after(start, dur);
        }
      } else if (end.isValid) {
        var _dur = Duration.fromISO(s, opts);

        if (_dur.isValid) {
          return Interval.before(end, _dur);
        }
      }
    }

    return Interval.invalid("unparsable", "the input \"" + text + "\" can't be parsed asISO 8601");
  };
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */


  Interval.isInterval = function isInterval(o) {
    return o instanceof Interval || o.isLuxonInterval;
  };
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */


  var _proto = Interval.prototype;

  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  _proto.length = function length(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    return this.isValid ? this.toDuration.apply(this, [unit]).get(unit) : NaN;
  };
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */


  _proto.count = function count(unit) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (!this.isValid) return NaN;
    var start = this.start.startOf(unit),
        end = this.end.startOf(unit);
    return Math.floor(end.diff(start, unit).get(unit)) + 1;
  };
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */


  _proto.hasSame = function hasSame(unit) {
    return this.isValid ? this.e.minus(1).hasSame(this.s, unit) : false;
  };
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */


  _proto.isEmpty = function isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  };
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */


  _proto.isAfter = function isAfter(dateTime) {
    if (!this.isValid) return false;
    return this.s > dateTime;
  };
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */


  _proto.isBefore = function isBefore(dateTime) {
    if (!this.isValid) return false;
    return this.e <= dateTime;
  };
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */


  _proto.contains = function contains(dateTime) {
    if (!this.isValid) return false;
    return this.s <= dateTime && this.e > dateTime;
  };
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */


  _proto.set = function set(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        start = _ref.start,
        end = _ref.end;

    if (!this.isValid) return this;
    return Interval.fromDateTimes(start || this.s, end || this.e);
  };
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {[Interval]}
   */


  _proto.splitAt = function splitAt() {
    if (!this.isValid) return [];

    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    var sorted = dateTimes.map(friendlyDateTime).sort(),
        results = [];
    var s = this.s,
        i = 0;

    while (s < this.e) {
      var added = sorted[i] || this.e,
          next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
      i += 1;
    }

    return results;
  };
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {[Interval]}
   */


  _proto.splitBy = function splitBy(duration) {
    var dur = friendlyDuration(duration);

    if (!this.isValid || !dur.isValid || dur.as("milliseconds") === 0) {
      return [];
    }

    var s = this.s,
        added,
        next;
    var results = [];

    while (s < this.e) {
      added = s.plus(dur);
      next = +added > +this.e ? this.e : added;
      results.push(Interval.fromDateTimes(s, next));
      s = next;
    }

    return results;
  };
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {[Interval]}
   */


  _proto.divideEqually = function divideEqually(numberOfParts) {
    if (!this.isValid) return [];
    return this.splitBy(this.length() / numberOfParts).slice(0, numberOfParts);
  };
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */


  _proto.overlaps = function overlaps(other) {
    return this.e > other.s && this.s < other.e;
  };
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */


  _proto.abutsStart = function abutsStart(other) {
    if (!this.isValid) return false;
    return +this.e === +other.s;
  };
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */


  _proto.abutsEnd = function abutsEnd(other) {
    if (!this.isValid) return false;
    return +other.e === +this.s;
  };
  /**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */


  _proto.engulfs = function engulfs(other) {
    if (!this.isValid) return false;
    return this.s <= other.s && this.e >= other.e;
  };
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */


  _proto.equals = function equals(other) {
    if (!this.isValid || !other.isValid) {
      return false;
    }

    return this.s.equals(other.s) && this.e.equals(other.e);
  };
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, i.e., the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */


  _proto.intersection = function intersection(other) {
    if (!this.isValid) return this;
    var s = this.s > other.s ? this.s : other.s,
        e = this.e < other.e ? this.e : other.e;

    if (s > e) {
      return null;
    } else {
      return Interval.fromDateTimes(s, e);
    }
  };
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */


  _proto.union = function union(other) {
    if (!this.isValid) return this;
    var s = this.s < other.s ? this.s : other.s,
        e = this.e > other.e ? this.e : other.e;
    return Interval.fromDateTimes(s, e);
  };
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */


  Interval.merge = function merge(intervals) {
    var _intervals$sort$reduc = intervals.sort(function (a, b) {
      return a.s - b.s;
    }).reduce(function (_ref2, item) {
      var sofar = _ref2[0],
          current = _ref2[1];

      if (!current) {
        return [sofar, item];
      } else if (current.overlaps(item) || current.abutsStart(item)) {
        return [sofar, current.union(item)];
      } else {
        return [sofar.concat([current]), item];
      }
    }, [[], null]),
        found = _intervals$sort$reduc[0],
        final = _intervals$sort$reduc[1];

    if (final) {
      found.push(final);
    }

    return found;
  };
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {[Interval]} intervals
   * @return {[Interval]}
   */


  Interval.xor = function xor(intervals) {
    var _Array$prototype;

    var start = null,
        currentCount = 0;

    var results = [],
        ends = intervals.map(function (i) {
      return [{
        time: i.s,
        type: "s"
      }, {
        time: i.e,
        type: "e"
      }];
    }),
        flattened = (_Array$prototype = Array.prototype).concat.apply(_Array$prototype, ends),
        arr = flattened.sort(function (a, b) {
      return a.time - b.time;
    });

    for (var _iterator = arr, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref3 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref3 = _i.value;
      }

      var i = _ref3;
      currentCount += i.type === "s" ? 1 : -1;

      if (currentCount === 1) {
        start = i.time;
      } else {
        if (start && +start !== +i.time) {
          results.push(Interval.fromDateTimes(start, i.time));
        }

        start = null;
      }
    }

    return Interval.merge(results);
  };
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {[Interval]}
   */


  _proto.difference = function difference() {
    var _this = this;

    for (var _len2 = arguments.length, intervals = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      intervals[_key2] = arguments[_key2];
    }

    return Interval.xor([this].concat(intervals)).map(function (i) {
      return _this.intersection(i);
    }).filter(function (i) {
      return i && !i.isEmpty();
    });
  };
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */


  _proto.toString = function toString() {
    if (!this.isValid) return INVALID$1;
    return "[" + this.s.toISO() + " \u2013 " + this.e.toISO() + ")";
  };
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime.toISO}
   * @return {string}
   */


  _proto.toISO = function toISO(opts) {
    if (!this.isValid) return INVALID$1;
    return this.s.toISO(opts) + "/" + this.e.toISO(opts);
  };
  /**
   * Returns a string representation of this Interval formatted according to the specified format string.
   * @param {string} dateFormat - the format string. This string formats the start and end time. See {@link DateTime.toFormat} for details.
   * @param {Object} opts - options
   * @param {string} [opts.separator =  ' – '] - a separator to place between the start and end representations
   * @return {string}
   */


  _proto.toFormat = function toFormat(dateFormat, _temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        _ref4$separator = _ref4.separator,
        separator = _ref4$separator === void 0 ? " – " : _ref4$separator;

    if (!this.isValid) return INVALID$1;
    return "" + this.s.toFormat(dateFormat) + separator + this.e.toFormat(dateFormat);
  };
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */


  _proto.toDuration = function toDuration(unit, opts) {
    if (!this.isValid) {
      return Duration.invalid(this.invalidReason);
    }

    return this.e.diff(this.s, unit, opts);
  };

  _createClass(Interval, [{
    key: "start",
    get: function get() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */

  }, {
    key: "end",
    get: function get() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, i.e. that the Interval isn't 'backwards'.
     * @type {boolean}
     */

  }, {
    key: "isValid",
    get: function get() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]);

  return Interval;
}();

/**
 * The Info class contains static methods for retrieving general time and date related data. For example, it has methods for finding out if a time zone has a DST, for listing the months in any supported locale, and for discovering which of Luxon features are available in the current environment.
 */

var Info =
/*#__PURE__*/
function () {
  function Info() {}

  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  Info.hasDST = function hasDST(zone) {
    if (zone === void 0) {
      zone = Settings.defaultZone;
    }

    var proto = DateTime.local().setZone(zone).set({
      month: 12
    });
    return !zone.universal && proto.offset !== proto.set({
      month: 6
    }).offset;
  };
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */


  Info.isValidIANAZone = function isValidIANAZone(zone) {
    return !!IANAZone.isValidSpecifier(zone) && IANAZone.isValidZone(zone);
  };
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {[string]}
   */


  Info.months = function months(length, _temp) {
    if (length === void 0) {
      length = "long";
    }

    var _ref = _temp === void 0 ? {} : _temp,
        _ref$locale = _ref.locale,
        locale = _ref$locale === void 0 ? null : _ref$locale,
        _ref$numberingSystem = _ref.numberingSystem,
        numberingSystem = _ref$numberingSystem === void 0 ? null : _ref$numberingSystem,
        _ref$outputCalendar = _ref.outputCalendar,
        outputCalendar = _ref$outputCalendar === void 0 ? "gregory" : _ref$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length);
  };
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {[string]}
   */


  Info.monthsFormat = function monthsFormat(length, _temp2) {
    if (length === void 0) {
      length = "long";
    }

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$locale = _ref2.locale,
        locale = _ref2$locale === void 0 ? null : _ref2$locale,
        _ref2$numberingSystem = _ref2.numberingSystem,
        numberingSystem = _ref2$numberingSystem === void 0 ? null : _ref2$numberingSystem,
        _ref2$outputCalendar = _ref2.outputCalendar,
        outputCalendar = _ref2$outputCalendar === void 0 ? "gregory" : _ref2$outputCalendar;

    return Locale.create(locale, numberingSystem, outputCalendar).months(length, true);
  };
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {[string]}
   */


  Info.weekdays = function weekdays(length, _temp3) {
    if (length === void 0) {
      length = "long";
    }

    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$locale = _ref3.locale,
        locale = _ref3$locale === void 0 ? null : _ref3$locale,
        _ref3$numberingSystem = _ref3.numberingSystem,
        numberingSystem = _ref3$numberingSystem === void 0 ? null : _ref3$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length);
  };
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @return {[string]}
   */


  Info.weekdaysFormat = function weekdaysFormat(length, _temp4) {
    if (length === void 0) {
      length = "long";
    }

    var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$locale = _ref4.locale,
        locale = _ref4$locale === void 0 ? null : _ref4$locale,
        _ref4$numberingSystem = _ref4.numberingSystem,
        numberingSystem = _ref4$numberingSystem === void 0 ? null : _ref4$numberingSystem;

    return Locale.create(locale, numberingSystem, null).weekdays(length, true);
  };
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {[string]}
   */


  Info.meridiems = function meridiems(_temp5) {
    var _ref5 = _temp5 === void 0 ? {} : _temp5,
        _ref5$locale = _ref5.locale,
        locale = _ref5$locale === void 0 ? null : _ref5$locale;

    return Locale.create(locale).meridiems();
  };
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {[string]}
   */


  Info.eras = function eras(length, _temp6) {
    if (length === void 0) {
      length = "short";
    }

    var _ref6 = _temp6 === void 0 ? {} : _temp6,
        _ref6$locale = _ref6.locale,
        locale = _ref6$locale === void 0 ? null : _ref6$locale;

    return Locale.create(locale, null, "gregory").eras(length);
  };
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, timezone support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `zones`: whether this environment supports IANA timezones
   * * `intlTokens`: whether this environment supports internationalized token-based formatting/parsing
   * * `intl`: whether this environment supports general internationalization
   * @example Info.features() //=> { intl: true, intlTokens: false, zones: true }
   * @return {Object}
   */


  Info.features = function features() {
    var intl = false,
        intlTokens = false,
        zones = false;

    if (hasIntl()) {
      intl = true;
      intlTokens = hasFormatToParts();

      try {
        zones = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch (e) {
        zones = false;
      }
    }

    return {
      intl: intl,
      intlTokens: intlTokens,
      zones: zones
    };
  };

  return Info;
}();

function dayDiff(earlier, later) {
  var utcDayStart = function utcDayStart(dt) {
    return dt.toUTC(0, {
      keepLocalTime: true
    }).startOf("day").valueOf();
  },
      ms = utcDayStart(later) - utcDayStart(earlier);

  return Math.floor(Duration.fromMillis(ms).as("days"));
}

function highOrderDiffs(cursor, later, units) {
  var differs = [["years", function (a, b) {
    return b.year - a.year;
  }], ["months", function (a, b) {
    return b.month - a.month + (b.year - a.year) * 12;
  }], ["weeks", function (a, b) {
    var days = dayDiff(a, b);
    return (days - days % 7) / 7;
  }], ["days", dayDiff]];
  var results = {};
  var lowestOrder, highWater;

  for (var _i = 0; _i < differs.length; _i++) {
    var _differs$_i = differs[_i],
        unit = _differs$_i[0],
        differ = _differs$_i[1];

    if (units.indexOf(unit) >= 0) {
      var _cursor$plus;

      lowestOrder = unit;
      var delta = differ(cursor, later);
      highWater = cursor.plus((_cursor$plus = {}, _cursor$plus[unit] = delta, _cursor$plus));

      if (highWater > later) {
        var _highWater$minus;

        cursor = highWater.minus((_highWater$minus = {}, _highWater$minus[unit] = 1, _highWater$minus));
        delta -= 1;
      } else {
        cursor = highWater;
      }

      results[unit] = delta;
    }
  }

  return [cursor, results, highWater, lowestOrder];
}

function _diff (earlier, later, units, opts) {
  var _highOrderDiffs = highOrderDiffs(earlier, later, units),
      cursor = _highOrderDiffs[0],
      results = _highOrderDiffs[1],
      highWater = _highOrderDiffs[2],
      lowestOrder = _highOrderDiffs[3];

  var remainingMillis = later - cursor;
  var lowerOrderUnits = units.filter(function (u) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(u) >= 0;
  });

  if (lowerOrderUnits.length === 0) {
    if (highWater < later) {
      var _cursor$plus2;

      highWater = cursor.plus((_cursor$plus2 = {}, _cursor$plus2[lowestOrder] = 1, _cursor$plus2));
    }

    if (highWater !== cursor) {
      results[lowestOrder] = (results[lowestOrder] || 0) + remainingMillis / (highWater - cursor);
    }
  }

  var duration = Duration.fromObject(Object.assign(results, opts));

  if (lowerOrderUnits.length > 0) {
    var _Duration$fromMillis;

    return (_Duration$fromMillis = Duration.fromMillis(remainingMillis, opts)).shiftTo.apply(_Duration$fromMillis, lowerOrderUnits).plus(duration);
  } else {
    return duration;
  }
}

var MISSING_FTP = "missing Intl.DateTimeFormat.formatToParts support";

function intUnit(regex, post) {
  if (post === void 0) {
    post = function post(i) {
      return i;
    };
  }

  return {
    regex: regex,
    deser: function deser(_ref) {
      var s = _ref[0];
      return post(parseInt(s));
    }
  };
}

function fixListRegex(s) {
  // make dots optional and also make them literal
  return s.replace(/\./, "\\.?");
}

function stripInsensitivities(s) {
  return s.replace(/\./, "").toLowerCase();
}

function oneOf(strings, startIndex) {
  if (strings === null) {
    return null;
  } else {
    return {
      regex: RegExp(strings.map(fixListRegex).join("|")),
      deser: function deser(_ref2) {
        var s = _ref2[0];
        return strings.findIndex(function (i) {
          return stripInsensitivities(s) === stripInsensitivities(i);
        }) + startIndex;
      }
    };
  }
}

function offset(regex, groups) {
  return {
    regex: regex,
    deser: function deser(_ref3) {
      var h = _ref3[1],
          m = _ref3[2];
      return signedOffset(h, m);
    },
    groups: groups
  };
}

function simple(regex) {
  return {
    regex: regex,
    deser: function deser(_ref4) {
      var s = _ref4[0];
      return s;
    }
  };
}

function unitForToken(token, loc) {
  var one = /\d/,
      two = /\d{2}/,
      three = /\d{3}/,
      four = /\d{4}/,
      oneOrTwo = /\d{1,2}/,
      oneToThree = /\d{1,3}/,
      twoToFour = /\d{2,4}/,
      literal = function literal(t) {
    return {
      regex: RegExp(t.val),
      deser: function deser(_ref5) {
        var s = _ref5[0];
        return s;
      },
      literal: true
    };
  },
      unitate = function unitate(t) {
    if (token.literal) {
      return literal(t);
    }

    switch (t.val) {
      // era
      case "G":
        return oneOf(loc.eras("short", false), 0);

      case "GG":
        return oneOf(loc.eras("long", false), 0);
      // years

      case "y":
        return intUnit(/\d{1,6}/);

      case "yy":
        return intUnit(twoToFour, untruncateYear);

      case "yyyy":
        return intUnit(four);

      case "yyyyy":
        return intUnit(/\d{4,6}/);

      case "yyyyyy":
        return intUnit(/\d{6}/);
      // months

      case "M":
        return intUnit(oneOrTwo);

      case "MM":
        return intUnit(two);

      case "MMM":
        return oneOf(loc.months("short", false, false), 1);

      case "MMMM":
        return oneOf(loc.months("long", false, false), 1);

      case "L":
        return intUnit(oneOrTwo);

      case "LL":
        return intUnit(two);

      case "LLL":
        return oneOf(loc.months("short", true, false), 1);

      case "LLLL":
        return oneOf(loc.months("long", true, false), 1);
      // dates

      case "d":
        return intUnit(oneOrTwo);

      case "dd":
        return intUnit(two);
      // ordinals

      case "o":
        return intUnit(oneToThree);

      case "ooo":
        return intUnit(three);
      // time

      case "HH":
        return intUnit(two);

      case "H":
        return intUnit(oneOrTwo);

      case "hh":
        return intUnit(two);

      case "h":
        return intUnit(oneOrTwo);

      case "mm":
        return intUnit(two);

      case "m":
        return intUnit(oneOrTwo);

      case "s":
        return intUnit(oneOrTwo);

      case "ss":
        return intUnit(two);

      case "S":
        return intUnit(oneToThree);

      case "SSS":
        return intUnit(three);

      case "u":
        return simple(/\d{1,9}/);
      // meridiem

      case "a":
        return oneOf(loc.meridiems(), 0);
      // weekYear (k)

      case "kkkk":
        return intUnit(four);

      case "kk":
        return intUnit(twoToFour, untruncateYear);
      // weekNumber (W)

      case "W":
        return intUnit(oneOrTwo);

      case "WW":
        return intUnit(two);
      // weekdays

      case "E":
      case "c":
        return intUnit(one);

      case "EEE":
        return oneOf(loc.weekdays("short", false, false), 1);

      case "EEEE":
        return oneOf(loc.weekdays("long", false, false), 1);

      case "ccc":
        return oneOf(loc.weekdays("short", true, false), 1);

      case "cccc":
        return oneOf(loc.weekdays("long", true, false), 1);
      // offset/zone

      case "Z":
      case "ZZ":
        return offset(/([+-]\d{1,2})(?::(\d{2}))?/, 2);

      case "ZZZ":
        return offset(/([+-]\d{1,2})(\d{2})?/, 2);
      // we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
      // because we don't have any way to figure out what they are

      case "z":
        return simple(/[a-z_+-]{1,256}(\/[a-z_+-]{1,256}(\/[a-z_+-]{1,256})?)?/i);

      default:
        return literal(t);
    }
  };

  var unit = unitate(token) || {
    invalidReason: MISSING_FTP
  };
  unit.token = token;
  return unit;
}

function buildRegex(units) {
  var re = units.map(function (u) {
    return u.regex;
  }).reduce(function (f, r) {
    return f + "(" + r.source + ")";
  }, "");
  return ["^" + re + "$", units];
}

function match(input, regex, handlers) {
  var matches = input.match(regex);

  if (matches) {
    var all = {};
    var matchIndex = 1;

    for (var i in handlers) {
      if (handlers.hasOwnProperty(i)) {
        var h = handlers[i],
            groups = h.groups ? h.groups + 1 : 1;

        if (!h.literal && h.token) {
          all[h.token.val[0]] = h.deser(matches.slice(matchIndex, matchIndex + groups));
        }

        matchIndex += groups;
      }
    }

    return [matches, all];
  } else {
    return [matches, {}];
  }
}

function dateTimeFromMatches(matches) {
  var toField = function toField(token) {
    switch (token) {
      case "S":
        return "millisecond";

      case "s":
        return "second";

      case "m":
        return "minute";

      case "h":
      case "H":
        return "hour";

      case "d":
        return "day";

      case "o":
        return "ordinal";

      case "L":
      case "M":
        return "month";

      case "y":
        return "year";

      case "E":
      case "c":
        return "weekday";

      case "W":
        return "weekNumber";

      case "k":
        return "weekYear";

      default:
        return null;
    }
  };

  var zone;

  if (!isUndefined(matches.Z)) {
    zone = new FixedOffsetZone(matches.Z);
  } else if (!isUndefined(matches.z)) {
    zone = new IANAZone(matches.z);
  } else {
    zone = null;
  }

  if (!isUndefined(matches.h)) {
    if (matches.h < 12 && matches.a === 1) {
      matches.h += 12;
    } else if (matches.h === 12 && matches.a === 0) {
      matches.h = 0;
    }
  }

  if (matches.G === 0 && matches.y) {
    matches.y = -matches.y;
  }

  if (!isUndefined(matches.u)) {
    matches.S = parseMillis(matches.u);
  }

  var vals = Object.keys(matches).reduce(function (r, k) {
    var f = toField(k);

    if (f) {
      r[f] = matches[k];
    }

    return r;
  }, {});
  return [vals, zone];
}
/**
 * @private
 */


function explainFromTokens(locale, input, format) {
  var tokens = Formatter.parseFormat(format),
      units = tokens.map(function (t) {
    return unitForToken(t, locale);
  }),
      disqualifyingUnit = units.find(function (t) {
    return t.invalidReason;
  });

  if (disqualifyingUnit) {
    return {
      input: input,
      tokens: tokens,
      invalidReason: disqualifyingUnit.invalidReason
    };
  } else {
    var _buildRegex = buildRegex(units),
        regexString = _buildRegex[0],
        handlers = _buildRegex[1],
        regex = RegExp(regexString, "i"),
        _match = match(input, regex, handlers),
        rawMatches = _match[0],
        matches = _match[1],
        _ref6 = matches ? dateTimeFromMatches(matches) : [null, null],
        result = _ref6[0],
        zone = _ref6[1];

    return {
      input: input,
      tokens: tokens,
      regex: regex,
      rawMatches: rawMatches,
      matches: matches,
      result: result,
      zone: zone
    };
  }
}
function parseFromTokens(locale, input, format) {
  var _explainFromTokens = explainFromTokens(locale, input, format),
      result = _explainFromTokens.result,
      zone = _explainFromTokens.zone,
      invalidReason = _explainFromTokens.invalidReason;

  return [result, zone, invalidReason];
}

var nonLeapLadder = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
    leapLadder = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];

function unitOutOfRange(unit, value) {
  return new Invalid("unit out of range", "you specified " + value + " (of type " + typeof value + ") as a " + unit + ", which is invalid");
}

function dayOfWeek(year, month, day) {
  var js = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
  return js === 0 ? 7 : js;
}

function computeOrdinal(year, month, day) {
  return day + (isLeapYear(year) ? leapLadder : nonLeapLadder)[month - 1];
}

function uncomputeOrdinal(year, ordinal) {
  var table = isLeapYear(year) ? leapLadder : nonLeapLadder,
      month0 = table.findIndex(function (i) {
    return i < ordinal;
  }),
      day = ordinal - table[month0];
  return {
    month: month0 + 1,
    day: day
  };
}
/**
 * @private
 */


function gregorianToWeek(gregObj) {
  var year = gregObj.year,
      month = gregObj.month,
      day = gregObj.day,
      ordinal = computeOrdinal(year, month, day),
      weekday = dayOfWeek(year, month, day);
  var weekNumber = Math.floor((ordinal - weekday + 10) / 7),
      weekYear;

  if (weekNumber < 1) {
    weekYear = year - 1;
    weekNumber = weeksInWeekYear(weekYear);
  } else if (weekNumber > weeksInWeekYear(year)) {
    weekYear = year + 1;
    weekNumber = 1;
  } else {
    weekYear = year;
  }

  return Object.assign({
    weekYear: weekYear,
    weekNumber: weekNumber,
    weekday: weekday
  }, timeObject(gregObj));
}
function weekToGregorian(weekData) {
  var weekYear = weekData.weekYear,
      weekNumber = weekData.weekNumber,
      weekday = weekData.weekday,
      weekdayOfJan4 = dayOfWeek(weekYear, 1, 4),
      yearInDays = daysInYear(weekYear);
  var ordinal = weekNumber * 7 + weekday - weekdayOfJan4 - 3,
      year;

  if (ordinal < 1) {
    year = weekYear - 1;
    ordinal += daysInYear(year);
  } else if (ordinal > yearInDays) {
    year = weekYear + 1;
    ordinal -= daysInYear(weekYear);
  } else {
    year = weekYear;
  }

  var _uncomputeOrdinal = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal.month,
      day = _uncomputeOrdinal.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(weekData));
}
function gregorianToOrdinal(gregData) {
  var year = gregData.year,
      month = gregData.month,
      day = gregData.day,
      ordinal = computeOrdinal(year, month, day);
  return Object.assign({
    year: year,
    ordinal: ordinal
  }, timeObject(gregData));
}
function ordinalToGregorian(ordinalData) {
  var year = ordinalData.year,
      ordinal = ordinalData.ordinal,
      _uncomputeOrdinal2 = uncomputeOrdinal(year, ordinal),
      month = _uncomputeOrdinal2.month,
      day = _uncomputeOrdinal2.day;

  return Object.assign({
    year: year,
    month: month,
    day: day
  }, timeObject(ordinalData));
}
function hasInvalidWeekData(obj) {
  var validYear = isNumber(obj.weekYear),
      validWeek = numberBetween(obj.weekNumber, 1, weeksInWeekYear(obj.weekYear)),
      validWeekday = numberBetween(obj.weekday, 1, 7);

  if (!validYear) {
    return unitOutOfRange("weekYear", obj.weekYear);
  } else if (!validWeek) {
    return unitOutOfRange("week", obj.week);
  } else if (!validWeekday) {
    return unitOutOfRange("weekday", obj.weekday);
  } else return false;
}
function hasInvalidOrdinalData(obj) {
  var validYear = isNumber(obj.year),
      validOrdinal = numberBetween(obj.ordinal, 1, daysInYear(obj.year));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validOrdinal) {
    return unitOutOfRange("ordinal", obj.ordinal);
  } else return false;
}
function hasInvalidGregorianData(obj) {
  var validYear = isNumber(obj.year),
      validMonth = numberBetween(obj.month, 1, 12),
      validDay = numberBetween(obj.day, 1, daysInMonth(obj.year, obj.month));

  if (!validYear) {
    return unitOutOfRange("year", obj.year);
  } else if (!validMonth) {
    return unitOutOfRange("month", obj.month);
  } else if (!validDay) {
    return unitOutOfRange("day", obj.day);
  } else return false;
}
function hasInvalidTimeData(obj) {
  var validHour = numberBetween(obj.hour, 0, 23),
      validMinute = numberBetween(obj.minute, 0, 59),
      validSecond = numberBetween(obj.second, 0, 59),
      validMillisecond = numberBetween(obj.millisecond, 0, 999);

  if (!validHour) {
    return unitOutOfRange("hour", obj.hour);
  } else if (!validMinute) {
    return unitOutOfRange("minute", obj.minute);
  } else if (!validSecond) {
    return unitOutOfRange("second", obj.secon);
  } else if (!validMillisecond) {
    return unitOutOfRange("millisecond", obj.millisecond);
  } else return false;
}

var INVALID$2 = "Invalid DateTime";

function unsupportedZone(zone) {
  return new Invalid("unsupported zone", "the zone \"" + zone.name + "\" is not supported");
} // we cache week data on the DT object and this intermediates the cache


function possiblyCachedWeekData(dt) {
  if (dt.weekData === null) {
    dt.weekData = gregorianToWeek(dt.c);
  }

  return dt.weekData;
} // clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties


function clone$1(inst, alts) {
  var current = {
    ts: inst.ts,
    zone: inst.zone,
    c: inst.c,
    o: inst.o,
    loc: inst.loc,
    invalid: inst.invalid
  };
  return new DateTime(Object.assign({}, current, alts, {
    old: current
  }));
} // find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)


function fixOffset(localTS, o, tz) {
  // Our UTC time is just a guess because our offset is just a guess
  var utcGuess = localTS - o * 60 * 1000; // Test whether the zone matches the offset for this ts

  var o2 = tz.offset(utcGuess); // If so, offset didn't change and we're done

  if (o === o2) {
    return [utcGuess, o];
  } // If not, change the ts by the difference in the offset


  utcGuess -= (o2 - o) * 60 * 1000; // If that gives us the local time we want, we're done

  var o3 = tz.offset(utcGuess);

  if (o2 === o3) {
    return [utcGuess, o2];
  } // If it's different, we're in a hole time. The offset has changed, but the we don't adjust the time


  return [localTS - Math.min(o2, o3) * 60 * 1000, Math.max(o2, o3)];
} // convert an epoch timestamp into a calendar object with the given offset


function tsToObj(ts, offset) {
  ts += offset * 60 * 1000;
  var d = new Date(ts);
  return {
    year: d.getUTCFullYear(),
    month: d.getUTCMonth() + 1,
    day: d.getUTCDate(),
    hour: d.getUTCHours(),
    minute: d.getUTCMinutes(),
    second: d.getUTCSeconds(),
    millisecond: d.getUTCMilliseconds()
  };
} // covert a calendar object to a local timestamp (epoch, but with the offset baked in)


function objToLocalTS(obj) {
  var d = Date.UTC(obj.year, obj.month - 1, obj.day, obj.hour, obj.minute, obj.second, obj.millisecond); // for legacy reasons, years between 0 and 99 are interpreted as 19XX; revert that

  if (obj.year < 100 && obj.year >= 0) {
    d = new Date(d);
    d.setUTCFullYear(obj.year);
  }

  return +d;
} // convert a calendar object to a epoch timestamp


function objToTS(obj, offset, zone) {
  return fixOffset(objToLocalTS(obj), offset, zone);
} // create a new DT instance by adding a duration, adjusting for DSTs


function adjustTime(inst, dur) {
  var oPre = inst.o,
      year = inst.c.year + dur.years,
      month = inst.c.month + dur.months + dur.quarters * 3,
      c = Object.assign({}, inst.c, {
    year: year,
    month: month,
    day: Math.min(inst.c.day, daysInMonth(year, month)) + dur.days + dur.weeks * 7
  }),
      millisToAdd = Duration.fromObject({
    hours: dur.hours,
    minutes: dur.minutes,
    seconds: dur.seconds,
    milliseconds: dur.milliseconds
  }).as("milliseconds"),
      localTS = objToLocalTS(c);

  var _fixOffset = fixOffset(localTS, oPre, inst.zone),
      ts = _fixOffset[0],
      o = _fixOffset[1];

  if (millisToAdd !== 0) {
    ts += millisToAdd; // that could have changed the offset by going over a DST, but we want to keep the ts the same

    o = inst.zone.offset(ts);
  }

  return {
    ts: ts,
    o: o
  };
} // helper useful in turning the results of parsing into real dates
// by handling the zone options


function parseDataToDateTime(parsed, parsedZone, opts, format, text) {
  var setZone = opts.setZone,
      zone = opts.zone;

  if (parsed && Object.keys(parsed).length !== 0) {
    var interpretationZone = parsedZone || zone,
        inst = DateTime.fromObject(Object.assign(parsed, opts, {
      zone: interpretationZone
    }));
    return setZone ? inst : inst.setZone(zone);
  } else {
    return DateTime.invalid(new Invalid("unparsable", "the input \"" + text + "\" can't be parsed as " + format));
  }
} // if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details


function toTechFormat(dt, format) {
  return dt.isValid ? Formatter.create(Locale.create("en-US"), {
    allowZ: true,
    forceSimple: true
  }).formatDateTimeFromString(dt, format) : null;
} // technical time formats (e.g. the time part of ISO 8601), take some options
// and this commonizes their handling


function toTechTimeFormat(dt, _ref) {
  var _ref$suppressSeconds = _ref.suppressSeconds,
      suppressSeconds = _ref$suppressSeconds === void 0 ? false : _ref$suppressSeconds,
      _ref$suppressMillisec = _ref.suppressMilliseconds,
      suppressMilliseconds = _ref$suppressMillisec === void 0 ? false : _ref$suppressMillisec,
      _ref$includeOffset = _ref.includeOffset,
      includeOffset = _ref$includeOffset === void 0 ? true : _ref$includeOffset,
      _ref$includeZone = _ref.includeZone,
      includeZone = _ref$includeZone === void 0 ? false : _ref$includeZone,
      _ref$spaceZone = _ref.spaceZone,
      spaceZone = _ref$spaceZone === void 0 ? false : _ref$spaceZone;
  var fmt = "HH:mm";

  if (!suppressSeconds || dt.second !== 0 || dt.millisecond !== 0) {
    fmt += ":ss";

    if (!suppressMilliseconds || dt.millisecond !== 0) {
      fmt += ".SSS";
    }
  }

  if ((includeZone || includeOffset) && spaceZone) {
    fmt += " ";
  }

  if (includeZone) {
    fmt += "z";
  } else if (includeOffset) {
    fmt += "ZZ";
  }

  return toTechFormat(dt, fmt);
} // defaults for unspecified units in the supported calendars


var defaultUnitValues = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultWeekUnitValues = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
},
    defaultOrdinalUnitValues = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}; // Units in the supported calendars, sorted by bigness

var orderedUnits$1 = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    orderedWeekUnits = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"],
    orderedOrdinalUnits = ["year", "ordinal", "hour", "minute", "second", "millisecond"]; // standardize case and plurality in units

function normalizeUnit(unit, ignoreUnknown) {
  if (ignoreUnknown === void 0) {
    ignoreUnknown = false;
  }

  var normalized = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[unit ? unit.toLowerCase() : unit];
  if (!ignoreUnknown && !normalized) throw new InvalidUnitError(unit);
  return normalized;
} // this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.


function quickDT(obj, zone) {
  // assume we have the higher-order units
  for (var _i = 0; _i < orderedUnits$1.length; _i++) {
    var u = orderedUnits$1[_i];

    if (isUndefined(obj[u])) {
      obj[u] = defaultUnitValues[u];
    }
  }

  var invalid = hasInvalidGregorianData(obj) || hasInvalidTimeData(obj);

  if (invalid) {
    return DateTime.invalid(invalid);
  }

  var tsNow = Settings.now(),
      offsetProvis = zone.offset(tsNow),
      _objToTS = objToTS(obj, offsetProvis, zone),
      ts = _objToTS[0],
      o = _objToTS[1];

  return new DateTime({
    ts: ts,
    zone: zone,
    o: o
  });
}
/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link local}, {@link utc}, and (most flexibly) {@link fromObject}. To create one from a standard string format, use {@link fromISO}, {@link fromHTTP}, and {@link fromRFC2822}. To create one from a custom string format, use {@link fromFormat}. To create one from a native JS date, use {@link fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link toObject}), use the {@link year}, {@link month},
 * {@link day}, {@link hour}, {@link minute}, {@link second}, {@link millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link weekYear}, {@link weekNumber}, and {@link weekday} accessors.
 * * **Configuration** See the {@link locale} and {@link numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link set}, {@link reconfigure}, {@link setZone}, {@link setLocale}, {@link plus}, {@link minus}, {@link endOf}, {@link startOf}, {@link toUTC}, and {@link toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link toJSON}, {@link toISO}, {@link toHTTP}, {@link toObject}, {@link toRFC2822}, {@link toString}, {@link toLocaleString}, {@link toFormat}, {@link toMillis} and {@link toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */


var DateTime =
/*#__PURE__*/
function () {
  /**
   * @access private
   */
  function DateTime(config) {
    var zone = config.zone || Settings.defaultZone,
        invalid = config.invalid || (Number.isNaN(config.ts) ? new Invalid("invalid input") : null) || (!zone.isValid ? unsupportedZone(zone) : null);
    /**
     * @access private
     */

    this.ts = isUndefined(config.ts) ? Settings.now() : config.ts;
    var c = null,
        o = null;

    if (!invalid) {
      var unchanged = config.old && config.old.ts === this.ts && config.old.zone.equals(zone);
      c = unchanged ? config.old.c : tsToObj(this.ts, zone.offset(this.ts));
      o = unchanged ? config.old.o : zone.offset(this.ts);
    }
    /**
     * @access private
     */


    this.zone = zone;
    /**
     * @access private
     */

    this.loc = config.loc || Locale.create();
    /**
     * @access private
     */

    this.invalid = invalid;
    /**
     * @access private
     */

    this.weekData = null;
    /**
     * @access private
     */

    this.c = c;
    /**
     * @access private
     */

    this.o = o;
    /**
     * @access private
     */

    this.isLuxonDateTime = true;
  } // CONSTRUCT

  /**
   * Create a local DateTime
   * @param {number} year - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
   * @example DateTime.local()                            //~> now
   * @example DateTime.local(2017)                        //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                     //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12)                 //~> 2017-03-12T00:00:00
   * @example DateTime.local(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */


  DateTime.local = function local(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now()
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, Settings.defaultZone);
    }
  };
  /**
   * Create a DateTime in UTC
   * @param {number} year - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, i.e. a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, i.e. a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, i.e. a number between 0 and 999
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */


  DateTime.utc = function utc(year, month, day, hour, minute, second, millisecond) {
    if (isUndefined(year)) {
      return new DateTime({
        ts: Settings.now(),
        zone: FixedOffsetZone.utcInstance
      });
    } else {
      return quickDT({
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        millisecond: millisecond
      }, FixedOffsetZone.utcInstance);
    }
  };
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */


  DateTime.fromJSDate = function fromJSDate(date, options) {
    if (options === void 0) {
      options = {};
    }

    return new DateTime({
      ts: isDate(date) ? date.valueOf() : NaN,
      zone: normalizeZone(options.zone, Settings.defaultZone),
      loc: Locale.fromObject(options)
    });
  };
  /**
   * Create a DateTime from a number of milliseconds since the epoch (i.e. since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */


  DateTime.fromMillis = function fromMillis(milliseconds, options) {
    if (options === void 0) {
      options = {};
    }

    if (!isNumber(milliseconds)) {
      throw new InvalidArgumentError("fromMillis requires a numerical input");
    } else {
      return new DateTime({
        ts: milliseconds,
        zone: normalizeZone(options.zone, Settings.defaultZone),
        loc: Locale.fromObject(options)
      });
    }
  };
  /**
   * Create a DateTime from a Javascript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {string|Zone} [obj.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [obj.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} obj.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} obj.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01T00'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6, zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */


  DateTime.fromObject = function fromObject(obj) {
    var zoneToUse = normalizeZone(obj.zone, Settings.defaultZone);

    if (!zoneToUse.isValid) {
      return DateTime.invalid(unsupportedZone(zoneToUse));
    }

    var tsNow = Settings.now(),
        offsetProvis = zoneToUse.offset(tsNow),
        normalized = normalizeObject(obj, normalizeUnit, true),
        containsOrdinal = !isUndefined(normalized.ordinal),
        containsGregorYear = !isUndefined(normalized.year),
        containsGregorMD = !isUndefined(normalized.month) || !isUndefined(normalized.day),
        containsGregor = containsGregorYear || containsGregorMD,
        definiteWeekDef = normalized.weekYear || normalized.weekNumber,
        loc = Locale.fromObject(obj); // cases:
    // just a weekday -> this week's instance of that weekday, no worries
    // (gregorian data or ordinal) + (weekYear or weekNumber) -> error
    // (gregorian month or day) + ordinal -> error
    // otherwise just use weeks or ordinals or gregorian, depending on what's specified

    if ((containsGregor || containsOrdinal) && definiteWeekDef) {
      throw new ConflictingSpecificationError("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    }

    if (containsGregorMD && containsOrdinal) {
      throw new ConflictingSpecificationError("Can't mix ordinal dates with month/day");
    }

    var useWeekData = definiteWeekDef || normalized.weekday && !containsGregor; // configure ourselves to deal with gregorian dates or week stuff

    var units,
        defaultValues,
        objNow = tsToObj(tsNow, offsetProvis);

    if (useWeekData) {
      units = orderedWeekUnits;
      defaultValues = defaultWeekUnitValues;
      objNow = gregorianToWeek(objNow);
    } else if (containsOrdinal) {
      units = orderedOrdinalUnits;
      defaultValues = defaultOrdinalUnitValues;
      objNow = gregorianToOrdinal(objNow);
    } else {
      units = orderedUnits$1;
      defaultValues = defaultUnitValues;
    } // set default values for missing stuff


    var foundFirst = false;

    for (var _iterator = units, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i2 >= _iterator.length) break;
        _ref2 = _iterator[_i2++];
      } else {
        _i2 = _iterator.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var u = _ref2;
      var v = normalized[u];

      if (!isUndefined(v)) {
        foundFirst = true;
      } else if (foundFirst) {
        normalized[u] = defaultValues[u];
      } else {
        normalized[u] = objNow[u];
      }
    } // make sure the values we have are in range


    var higherOrderInvalid = useWeekData ? hasInvalidWeekData(normalized) : containsOrdinal ? hasInvalidOrdinalData(normalized) : hasInvalidGregorianData(normalized),
        invalid = higherOrderInvalid || hasInvalidTimeData(normalized);

    if (invalid) {
      return DateTime.invalid(invalid);
    } // compute the actual time


    var gregorian = useWeekData ? weekToGregorian(normalized) : containsOrdinal ? ordinalToGregorian(normalized) : normalized,
        _objToTS2 = objToTS(gregorian, offsetProvis, zoneToUse),
        tsFinal = _objToTS2[0],
        offsetFinal = _objToTS2[1],
        inst = new DateTime({
      ts: tsFinal,
      zone: zoneToUse,
      o: offsetFinal,
      loc: loc
    }); // gregorian data + weekday serves only to validate


    if (normalized.weekday && containsGregor && obj.weekday !== inst.weekday) {
      return DateTime.invalid("mismatched weekday", "you can't specify both a weekday of " + normalized.weekday + " and a date of " + inst.toISO());
    }

    return inst;
  };
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */


  DateTime.fromISO = function fromISO(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseISODate = parseISODate(text),
        vals = _parseISODate[0],
        parsedZone = _parseISODate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "ISO 8601", text);
  };
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Tue, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */


  DateTime.fromRFC2822 = function fromRFC2822(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseRFC2822Date = parseRFC2822Date(text),
        vals = _parseRFC2822Date[0],
        parsedZone = _parseRFC2822Date[1];

    return parseDataToDateTime(vals, parsedZone, opts, "RFC 2822", text);
  };
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='en-US'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */


  DateTime.fromHTTP = function fromHTTP(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseHTTPDate = parseHTTPDate(text),
        vals = _parseHTTPDate[0],
        parsedZone = _parseHTTPDate[1];

    return parseDataToDateTime(vals, parsedZone, opts, "HTTP", opts);
  };
  /**
   * Create a DateTime from an input string and format string
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */


  DateTime.fromFormat = function fromFormat(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (isUndefined(text) || isUndefined(fmt)) {
      throw new InvalidArgumentError("fromFormat requires an input string and a format");
    }

    var _opts = opts,
        _opts$locale = _opts.locale,
        locale = _opts$locale === void 0 ? null : _opts$locale,
        _opts$numberingSystem = _opts.numberingSystem,
        numberingSystem = _opts$numberingSystem === void 0 ? null : _opts$numberingSystem,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    }),
        _parseFromTokens = parseFromTokens(localeToUse, text, fmt),
        vals = _parseFromTokens[0],
        parsedZone = _parseFromTokens[1],
        invalid = _parseFromTokens[2];

    if (invalid) {
      return DateTime.invalid(invalid);
    } else {
      return parseDataToDateTime(vals, parsedZone, opts, "format " + fmt, text);
    }
  };
  /**
   * @deprecated use fromFormat instead
   */


  DateTime.fromString = function fromString(text, fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return DateTime.fromFormat(text, fmt, opts);
  };
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */


  DateTime.fromSQL = function fromSQL(text, opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _parseSQL = parseSQL(text),
        vals = _parseSQL[0],
        parsedZone = _parseSQL[1];

    return parseDataToDateTime(vals, parsedZone, opts, "SQL", text);
  };
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */


  DateTime.invalid = function invalid(reason, explanation) {
    if (explanation === void 0) {
      explanation = null;
    }

    if (!reason) {
      throw new InvalidArgumentError("need to specify a reason the DateTime is invalid");
    }

    var invalid = reason instanceof Invalid ? reason : new Invalid(reason, explanation);

    if (Settings.throwOnInvalid) {
      throw new InvalidDateTimeError(invalid);
    } else {
      return new DateTime({
        invalid: invalid
      });
    }
  };
  /**
   * Check if an object is a DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */


  DateTime.isDateTime = function isDateTime(o) {
    return o.isLuxonDateTime;
  }; // INFO

  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */


  var _proto = DateTime.prototype;

  _proto.get = function get(unit) {
    return this[unit];
  };
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */


  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  _proto.resolvedLocaleOpts = function resolvedLocaleOpts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    var _Formatter$create$res = Formatter.create(this.loc.clone(opts), opts).resolvedOptions(this),
        locale = _Formatter$create$res.locale,
        numberingSystem = _Formatter$create$res.numberingSystem,
        calendar = _Formatter$create$res.calendar;

    return {
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: calendar
    };
  }; // TRANSFORM

  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */


  _proto.toUTC = function toUTC(offset, opts) {
    if (offset === void 0) {
      offset = 0;
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.setZone(FixedOffsetZone.instance(offset), opts);
  };
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */


  _proto.toLocal = function toLocal() {
    return this.setZone(new LocalZone());
  };
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same UTC timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link plus}. You may wish to use {@link toLocal} and {@link toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'utc+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */


  _proto.setZone = function setZone(zone, _temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$keepLocalTime = _ref3.keepLocalTime,
        keepLocalTime = _ref3$keepLocalTime === void 0 ? false : _ref3$keepLocalTime,
        _ref3$keepCalendarTim = _ref3.keepCalendarTime,
        keepCalendarTime = _ref3$keepCalendarTim === void 0 ? false : _ref3$keepCalendarTim;

    zone = normalizeZone(zone, Settings.defaultZone);

    if (zone.equals(this.zone)) {
      return this;
    } else if (!zone.isValid) {
      return DateTime.invalid(unsupportedZone(zone));
    } else {
      var newTS = keepLocalTime || keepCalendarTime // keepCalendarTime is the deprecated name for keepLocalTime
      ? this.ts + (this.o - zone.offset(this.ts)) * 60 * 1000 : this.ts;
      return clone$1(this, {
        ts: newTS,
        zone: zone
      });
    }
  };
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */


  _proto.reconfigure = function reconfigure(_temp2) {
    var _ref4 = _temp2 === void 0 ? {} : _temp2,
        locale = _ref4.locale,
        numberingSystem = _ref4.numberingSystem,
        outputCalendar = _ref4.outputCalendar;

    var loc = this.loc.clone({
      locale: locale,
      numberingSystem: numberingSystem,
      outputCalendar: outputCalendar
    });
    return clone$1(this, {
      loc: loc
    });
  };
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */


  _proto.setLocale = function setLocale(locale) {
    return this.reconfigure({
      locale: locale
    });
  };
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link reconfigure} and {@link setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */


  _proto.set = function set(values) {
    if (!this.isValid) return this;
    var normalized = normalizeObject(values, normalizeUnit),
        settingWeekStuff = !isUndefined(normalized.weekYear) || !isUndefined(normalized.weekNumber) || !isUndefined(normalized.weekday);
    var mixed;

    if (settingWeekStuff) {
      mixed = weekToGregorian(Object.assign(gregorianToWeek(this.c), normalized));
    } else if (!isUndefined(normalized.ordinal)) {
      mixed = ordinalToGregorian(Object.assign(gregorianToOrdinal(this.c), normalized));
    } else {
      mixed = Object.assign(this.toObject(), normalized); // if we didn't set the day but we ended up on an overflow date,
      // use the last day of the right month

      if (isUndefined(normalized.day)) {
        mixed.day = Math.min(daysInMonth(mixed.year, mixed.month), mixed.day);
      }
    }

    var _objToTS3 = objToTS(mixed, this.o, this.zone),
        ts = _objToTS3[0],
        o = _objToTS3[1];

    return clone$1(this, {
      ts: ts,
      o: o
    });
  };
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.local().plus(123) //~> in 123 milliseconds
   * @example DateTime.local().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.local().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.local().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.local().plus({ hours: 3, minutes: 13 }) //~> in 1 hr, 13 min
   * @example DateTime.local().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 1 hr, 13 min
   * @return {DateTime}
   */


  _proto.plus = function plus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration);
    return clone$1(this, adjustTime(this, dur));
  };
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
  */


  _proto.minus = function minus(duration) {
    if (!this.isValid) return this;
    var dur = friendlyDuration(duration).negate();
    return clone$1(this, adjustTime(this, dur));
  };
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */


  _proto.startOf = function startOf(unit) {
    if (!this.isValid) return this;
    var o = {},
        normalizedUnit = Duration.normalizeUnit(unit);

    switch (normalizedUnit) {
      case "years":
        o.month = 1;
      // falls through

      case "quarters":
      case "months":
        o.day = 1;
      // falls through

      case "weeks":
      case "days":
        o.hour = 0;
      // falls through

      case "hours":
        o.minute = 0;
      // falls through

      case "minutes":
        o.second = 0;
      // falls through

      case "seconds":
        o.millisecond = 0;
        break;

      case "milliseconds":
        break;

      default:
        throw new InvalidUnitError(unit);
    }

    if (normalizedUnit === "weeks") {
      o.weekday = 1;
    }

    if (normalizedUnit === "quarters") {
      var q = Math.ceil(this.month / 3);
      o.month = (q - 1) * 3 + 1;
    }

    return this.set(o);
  };
  /**
   * "Set" this DateTime to the end (i.e. the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'month', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */


  _proto.endOf = function endOf(unit) {
    var _this$startOf$plus;

    return this.isValid ? this.startOf(unit).plus((_this$startOf$plus = {}, _this$startOf$plus[unit] = 1, _this$startOf$plus)).minus(1) : this;
  }; // OUTPUT

  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} opts.round - round numerical values
   * @example DateTime.local().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.local().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.local().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */


  _proto.toFormat = function toFormat(fmt, opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.redefaultToEN(), opts).formatDateTimeFromString(this, fmt) : INVALID$2;
  };
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation.
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param opts {Object} - Intl.DateTimeFormat constructor options
   * @example DateTime.local().toLocaleString(); //=> 4/20/2017
   * @example DateTime.local().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.local().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.local().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.local().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit'}); //=> 'Thu, Apr 20'
   * @example DateTime.local().toLocaleString({weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit'}); //=> 'Thu, Apr 20, 11:27'
   * @example DateTime.local().toLocaleString({hour: '2-digit', minute: '2-digit'}); //=> '11:32'
   * @return {string}
   */


  _proto.toLocaleString = function toLocaleString(opts) {
    if (opts === void 0) {
      opts = DATE_SHORT;
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTime(this) : INVALID$2;
  };
  /**
   * Returns an array of format "parts", i.e. individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.local().toLocaleString(); //=> [
   *                                    //=>   { type: 'day', value: '25' },
   *                                    //=>   { type: 'literal', value: '/' },
   *                                    //=>   { type: 'month', value: '05' },
   *                                    //=>   { type: 'literal', value: '/' },
   *                                    //=>   { type: 'year', value: '1982' }
   *                                    //=> ]
   */


  _proto.toLocaleParts = function toLocaleParts(opts) {
    if (opts === void 0) {
      opts = {};
    }

    return this.isValid ? Formatter.create(this.loc.clone(opts), opts).formatDateTimeParts(this) : [];
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(1982, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.local().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.local().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @return {string}
   */


  _proto.toISO = function toISO(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toISODate() + "T" + this.toISOTime(opts);
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @return {string}
   */


  _proto.toISODate = function toISODate() {
    return toTechFormat(this, "yyyy-MM-dd");
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */


  _proto.toISOWeekDate = function toISOWeekDate() {
    return toTechFormat(this, "kkkk-'W'WW-c");
  };
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().hour(7).minute(34).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().hour(7).minute(34).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @return {string}
   */


  _proto.toISOTime = function toISOTime(_temp3) {
    var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$suppressMillise = _ref5.suppressMilliseconds,
        suppressMilliseconds = _ref5$suppressMillise === void 0 ? false : _ref5$suppressMillise,
        _ref5$suppressSeconds = _ref5.suppressSeconds,
        suppressSeconds = _ref5$suppressSeconds === void 0 ? false : _ref5$suppressSeconds,
        _ref5$includeOffset = _ref5.includeOffset,
        includeOffset = _ref5$includeOffset === void 0 ? true : _ref5$includeOffset;

    return toTechTimeFormat(this, {
      suppressSeconds: suppressSeconds,
      suppressMilliseconds: suppressMilliseconds,
      includeOffset: includeOffset
    });
  };
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime, always in UTC
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */


  _proto.toRFC2822 = function toRFC2822() {
    return toTechFormat(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ");
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */


  _proto.toHTTP = function toHTTP() {
    return toTechFormat(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */


  _proto.toSQLDate = function toSQLDate() {
    return toTechFormat(this, "yyyy-MM-dd");
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.local().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.local().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.local().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */


  _proto.toSQLTime = function toSQLTime(_temp4) {
    var _ref6 = _temp4 === void 0 ? {} : _temp4,
        _ref6$includeOffset = _ref6.includeOffset,
        includeOffset = _ref6$includeOffset === void 0 ? true : _ref6$includeOffset,
        _ref6$includeZone = _ref6.includeZone,
        includeZone = _ref6$includeZone === void 0 ? false : _ref6$includeZone;

    return toTechTimeFormat(this, {
      includeOffset: includeOffset,
      includeZone: includeZone,
      spaceZone: true
    });
  };
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */


  _proto.toSQL = function toSQL(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) {
      return null;
    }

    return this.toSQLDate() + " " + this.toSQLTime(opts);
  };
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */


  _proto.toString = function toString() {
    return this.isValid ? this.toISO() : INVALID$2;
  };
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link toMillis}
   * @return {number}
   */


  _proto.valueOf = function valueOf() {
    return this.toMillis();
  };
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */


  _proto.toMillis = function toMillis() {
    return this.isValid ? this.ts : NaN;
  };
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */


  _proto.toJSON = function toJSON() {
    return this.toISO();
  };
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */


  _proto.toBSON = function toBSON() {
    return this.toJSDate();
  };
  /**
   * Returns a Javascript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.local().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */


  _proto.toObject = function toObject(opts) {
    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid) return {};
    var base = Object.assign({}, this.c);

    if (opts.includeConfig) {
      base.outputCalendar = this.outputCalendar;
      base.numberingSystem = this.loc.numberingSystem;
      base.locale = this.loc.locale;
    }

    return base;
  };
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */


  _proto.toJSDate = function toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }; // COMPARE

  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */


  _proto.diff = function diff(otherDateTime, unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    if (!this.isValid || !otherDateTime.isValid) return Duration.invalid(this.invalid || otherDateTime.invalid);

    var units = maybeArray(unit).map(Duration.normalizeUnit),
        otherIsLater = otherDateTime.valueOf() > this.valueOf(),
        earlier = otherIsLater ? this : otherDateTime,
        later = otherIsLater ? otherDateTime : this,
        diffed = _diff(earlier, later, units, opts);

    return otherIsLater ? diffed.negate() : diffed;
  };
  /**
   * Return the difference between this DateTime and right now.
   * See {@link diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */


  _proto.diffNow = function diffNow(unit, opts) {
    if (unit === void 0) {
      unit = "milliseconds";
    }

    if (opts === void 0) {
      opts = {};
    }

    return this.diff(DateTime.local(), unit, opts);
  };
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */


  _proto.until = function until(otherDateTime) {
    return this.isValid ? Interval.fromDateTimes(this, otherDateTime) : this;
  };
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.local().hasSame(otherDT, 'day'); //~> true if both the same calendar day
   * @return {boolean}
   */


  _proto.hasSame = function hasSame(otherDateTime, unit) {
    if (!this.isValid) return false;

    if (unit === "millisecond") {
      return this.valueOf() === otherDateTime.valueOf();
    } else {
      var inputMs = otherDateTime.valueOf();
      return this.startOf(unit) <= inputMs && inputMs <= this.endOf(unit);
    }
  };
  /**
   * Equality check
   * Two DateTimes are equal iff they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === ~dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */


  _proto.equals = function equals(other) {
    return this.isValid && other.isValid && this.valueOf() === other.valueOf() && this.zone.equals(other.zone) && this.loc.equals(other.loc);
  };
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */


  DateTime.min = function min() {
    for (var _len = arguments.length, dateTimes = new Array(_len), _key = 0; _key < _len; _key++) {
      dateTimes[_key] = arguments[_key];
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.min);
  };
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */


  DateTime.max = function max() {
    for (var _len2 = arguments.length, dateTimes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      dateTimes[_key2] = arguments[_key2];
    }

    return bestBy(dateTimes, function (i) {
      return i.valueOf();
    }, Math.max);
  }; // MISC

  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */


  DateTime.fromFormatExplain = function fromFormatExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$locale = _options.locale,
        locale = _options$locale === void 0 ? null : _options$locale,
        _options$numberingSys = _options.numberingSystem,
        numberingSystem = _options$numberingSys === void 0 ? null : _options$numberingSys,
        localeToUse = Locale.fromOpts({
      locale: locale,
      numberingSystem: numberingSystem,
      defaultToEN: true
    });
    return explainFromTokens(localeToUse, text, fmt);
  };
  /**
   * @deprecated use fromFormatExplain instead
   */


  DateTime.fromStringExplain = function fromStringExplain(text, fmt, options) {
    if (options === void 0) {
      options = {};
    }

    return DateTime.fromFormatExplain(text, fmt, options);
  }; // FORMAT PRESETS

  /**
   * {@link toLocaleString} format like 10/14/1983
   * @type {Object}
   */


  _createClass(DateTime, [{
    key: "isValid",
    get: function get() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidReason",
    get: function get() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */

  }, {
    key: "invalidExplanation",
    get: function get() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "locale",
    get: function get() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "numberingSystem",
    get: function get() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */

  }, {
    key: "outputCalendar",
    get: function get() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */

  }, {
    key: "zoneName",
    get: function get() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */

  }, {
    key: "year",
    get: function get() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */

  }, {
    key: "quarter",
    get: function get() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */

  }, {
    key: "month",
    get: function get() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */

  }, {
    key: "day",
    get: function get() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */

  }, {
    key: "hour",
    get: function get() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */

  }, {
    key: "minute",
    get: function get() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */

  }, {
    key: "second",
    get: function get() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */

  }, {
    key: "millisecond",
    get: function get() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekYear //=> 2015
     * @type {number}
     */

  }, {
    key: "weekYear",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */

  }, {
    key: "weekNumber",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */

  }, {
    key: "weekday",
    get: function get() {
      return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
    }
    /**
     * Get the ordinal (i.e. the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */

  }, {
    key: "ordinal",
    get: function get() {
      return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */

  }, {
    key: "monthShort",
    get: function get() {
      return this.isValid ? Info.months("short", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */

  }, {
    key: "monthLong",
    get: function get() {
      return this.isValid ? Info.months("long", {
        locale: this.locale
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */

  }, {
    key: "weekdayShort",
    get: function get() {
      return this.isValid ? Info.weekdays("short", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */

  }, {
    key: "weekdayLong",
    get: function get() {
      return this.isValid ? Info.weekdays("long", {
        locale: this.locale
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.local().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */

  }, {
    key: "offset",
    get: function get() {
      return this.isValid ? this.zone.offset(this.ts) : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameShort",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "short",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */

  }, {
    key: "offsetNameLong",
    get: function get() {
      if (this.isValid) {
        return this.zone.offsetName(this.ts, {
          format: "long",
          locale: this.locale
        });
      } else {
        return null;
      }
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */

  }, {
    key: "isOffsetFixed",
    get: function get() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */

  }, {
    key: "isInDST",
    get: function get() {
      if (this.isOffsetFixed) {
        return false;
      } else {
        return this.offset > this.set({
          month: 1
        }).offset || this.offset > this.set({
          month: 5
        }).offset;
      }
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */

  }, {
    key: "isInLeapYear",
    get: function get() {
      return isLeapYear(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */

  }, {
    key: "daysInMonth",
    get: function get() {
      return daysInMonth(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */

  }, {
    key: "daysInYear",
    get: function get() {
      return this.isValid ? daysInYear(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */

  }, {
    key: "weeksInWeekYear",
    get: function get() {
      return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function get() {
      return DATE_SHORT;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_MED",
    get: function get() {
      return DATE_MED;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_FULL",
    get: function get() {
      return DATE_FULL;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */

  }, {
    key: "DATE_HUGE",
    get: function get() {
      return DATE_HUGE;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_SIMPLE",
    get: function get() {
      return TIME_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SECONDS",
    get: function get() {
      return TIME_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_SIMPLE",
    get: function get() {
      return TIME_24_SIMPLE;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function get() {
      return TIME_24_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function get() {
      return TIME_24_WITH_SHORT_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */

  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function get() {
      return TIME_24_WITH_LONG_OFFSET;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT",
    get: function get() {
      return DATETIME_SHORT;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function get() {
      return DATETIME_SHORT_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED",
    get: function get() {
      return DATETIME_MED;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function get() {
      return DATETIME_MED_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL",
    get: function get() {
      return DATETIME_FULL;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function get() {
      return DATETIME_FULL_WITH_SECONDS;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE",
    get: function get() {
      return DATETIME_HUGE;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */

  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function get() {
      return DATETIME_HUGE_WITH_SECONDS;
    }
  }]);

  return DateTime;
}();
function friendlyDateTime(dateTimeish) {
  if (DateTime.isDateTime(dateTimeish)) {
    return dateTimeish;
  } else if (dateTimeish && dateTimeish.valueOf && isNumber(dateTimeish.valueOf())) {
    return DateTime.fromJSDate(dateTimeish);
  } else if (dateTimeish && typeof dateTimeish === "object") {
    return DateTime.fromObject(dateTimeish);
  } else {
    throw new InvalidArgumentError("Unknown datetime argument: " + dateTimeish + ", of type " + typeof dateTimeish);
  }
}

exports.DateTime = DateTime;
exports.Duration = Duration;
exports.Interval = Interval;
exports.Info = Info;
exports.Zone = Zone;
exports.FixedOffsetZone = FixedOffsetZone;
exports.IANAZone = IANAZone;
exports.LocalZone = LocalZone;
exports.Settings = Settings;
//# sourceMappingURL=luxon.js.map


/***/ }),

/***/ "13a5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_main_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c8f9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_main_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_main_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_main_scss_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "13b1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _time = __webpack_require__("d557");

Object.defineProperty(exports, 'timeStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_time).default;
  }
});

var _twitter = __webpack_require__("a01c");

Object.defineProperty(exports, 'twitterStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_twitter).default;
  }
});

var _default = __webpack_require__("37ef");

Object.defineProperty(exports, 'defaultStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_default).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1564":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("88fe");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "2292":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStep = getStep;
exports.getDate = getDate;
var minute = exports.minute = 60; // in seconds

var hour = exports.hour = 60 * minute; // in seconds

var day = exports.day = 24 * hour; // in seconds

// https://www.quora.com/What-is-the-average-number-of-days-in-a-month
var month = exports.month = 30.44 * day; // in seconds

// "400 years have 146097 days (taking into account leap year rules)"
var year = exports.year = 146097 / 400 * day; // in seconds

/**
 * Returns a step of gradation corresponding to the unit.
 * @param  {Object[]} gradation
 * @param  {string} unit
 * @return {?Object}
 */
function getStep(gradation, unit) {
  for (var _iterator = gradation, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var step = _ref;

    if (step.unit === unit) {
      return step;
    }
  }
}

/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "31c7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "379e":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__379e__;

/***/ }),

/***/ "37ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gradation = __webpack_require__("4e84");

exports.default = {
	gradation: _gradation.convenient,
	flavour: ['long_convenient', 'long'],
	units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};
//# sourceMappingURL=default.js.map

/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4b41":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("31c7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4d4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderx_vue_vue_type_style_index_0_id_5fe8b024_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6432");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderx_vue_vue_type_style_index_0_id_5fe8b024_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderx_vue_vue_type_style_index_0_id_5fe8b024_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeaderx_vue_vue_type_style_index_0_id_5fe8b024_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4e84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _canonical = __webpack_require__("567f");

Object.defineProperty(exports, 'canonical', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_canonical).default;
  }
});

var _convenient = __webpack_require__("9d91");

Object.defineProperty(exports, 'convenient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_convenient).default;
  }
});

var _helpers = __webpack_require__("2292");

Object.defineProperty(exports, 'minute', {
  enumerable: true,
  get: function get() {
    return _helpers.minute;
  }
});
Object.defineProperty(exports, 'hour', {
  enumerable: true,
  get: function get() {
    return _helpers.hour;
  }
});
Object.defineProperty(exports, 'day', {
  enumerable: true,
  get: function get() {
    return _helpers.day;
  }
});
Object.defineProperty(exports, 'month', {
  enumerable: true,
  get: function get() {
    return _helpers.month;
  }
});
Object.defineProperty(exports, 'year', {
  enumerable: true,
  get: function get() {
    return _helpers.year;
  }
});
Object.defineProperty(exports, 'getStep', {
  enumerable: true,
  get: function get() {
    return _helpers.getStep;
  }
});
Object.defineProperty(exports, 'getDate', {
  enumerable: true,
  get: function get() {
    return _helpers.getDate;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "567f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helpers = __webpack_require__("2292");

// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 7 days ago
// 1 week ago
// 2 weeks ago
// …
// 3 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
exports.default = [{
	factor: 1,
	unit: 'now'
}, {
	threshold: 0.5,
	factor: 1,
	unit: 'second'
}, {
	threshold: 59.5,
	factor: 60,
	unit: 'minute'
}, {
	threshold: 59.5 * 60,
	factor: 60 * 60,
	unit: 'hour'
}, {
	threshold: 23.5 * 60 * 60,
	factor: _helpers.day,
	unit: 'day'
}, {
	threshold: 6.5 * _helpers.day,
	factor: 7 * _helpers.day,
	unit: 'week'
}, {
	threshold: 3.5 * 7 * _helpers.day,
	factor: _helpers.month,
	unit: 'month'
}, {
	threshold: 11.5 * _helpers.month,
	factor: _helpers.year,
	unit: 'year'
}];
//# sourceMappingURL=canonical.js.map

/***/ }),

/***/ "5880":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5880__;

/***/ }),

/***/ "5c18":
/***/ (function(module) {

module.exports = {"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."},"now":"now"};

/***/ }),

/***/ "5c64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("61ce");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "61ce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = chooseLocale;
exports.intlDateTimeFormatSupportedLocale = intlDateTimeFormatSupportedLocale;
exports.intlDateTimeFormatSupported = intlDateTimeFormatSupported;
// Chooses the most appropriate locale
// (one of the registered ones)
// based on the list of preferred `locales` supplied by the user.
//
// @param {string[]} locales - the list of preferable locales (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)).
// @param {Object} availableLocales - a map of available locales.
//
// @returns {string} The most suitable locale
//
// @example
// // Returns 'en'
// chooseLocale(['en-US'], undefined, { 'ru', 'en' })
//
function chooseLocale(locales, availableLocales) {
	// This is not an intelligent algorythm,
	// but it will do for this library's case.
	// `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
	for (var _iterator = locales, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
		var _ref;

		if (_isArray) {
			if (_i >= _iterator.length) break;
			_ref = _iterator[_i++];
		} else {
			_i = _iterator.next();
			if (_i.done) break;
			_ref = _i.value;
		}

		var locale = _ref;

		if (availableLocales[locale]) {
			return locale;
		}

		var parts = locale.split('-');
		while (parts.length > 1) {
			parts.pop();
			locale = parts.join('-');
			if (availableLocales[locale]) {
				return locale;
			}
		}
	}

	throw new Error('No locale data has been registered for any of the locales: ' + locales.join(', '));
}

/**
 * Whether can use `Intl.DateTimeFormat` for these `locales`.
 * Returns the first suitable one.
 * @param  {(string|string[])} locales
 * @return {?string} The first locale that can be used.
 */
function intlDateTimeFormatSupportedLocale(locales) {
	/* istanbul ignore else */
	if (intlDateTimeFormatSupported()) {
		return Intl.DateTimeFormat.supportedLocalesOf(locales)[0];
	}
}
/**
 * Whether can use `Intl.DateTimeFormat`.
 * @return {boolean}
 */
function intlDateTimeFormatSupported() {
	// Babel transforms `typeof` into some "branches"
	// so istanbul will show this as "branch not covered".
	/* istanbul ignore next */
	var isIntlAvailable = (typeof Intl === 'undefined' ? 'undefined' : _typeof(Intl)) === 'object';

	return isIntlAvailable && typeof Intl.DateTimeFormat === 'function';
}
//# sourceMappingURL=locale.js.map

/***/ }),

/***/ "6389":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6389__;

/***/ }),

/***/ "6432":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "71bf":
/***/ (function(module, exports) {

module.exports=function(n){var r=!String(n).split(".")[1];return 1==n&&r?"one":"other"}

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7b15":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-rideforgood-400x139.01db991d.png";

/***/ }),

/***/ "7d1a":
/***/ (function(module, exports, __webpack_require__) {

module.exports =
{
	locale: 'en',
	long: __webpack_require__("cc69"),
	long_time: __webpack_require__("918e"),
	long_convenient: __webpack_require__("a296"),
	short: __webpack_require__("5c18"),
	short_time: __webpack_require__("f8da"),
	short_convenient: __webpack_require__("e5e4"),
	narrow: __webpack_require__("b96c"),
	tiny: __webpack_require__("dd80"),
	quantify: __webpack_require__("71bf")
}

/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "859b":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * vue-datetime v1.0.0-beta.8
 * (c) 2018 Mario Juárez
 * Released under the MIT License.
 */

(function (global, factory) {
	 true ? factory(exports, __webpack_require__("1315")) :
	undefined;
}(this, (function (exports,luxon) { 'use strict';

var FlowManager = function FlowManager (flow, endStatus) {
  if ( flow === void 0 ) flow = [];
  if ( endStatus === void 0 ) endStatus = null;

  this.flow = flow;
  this.endStatus = endStatus;
  this.diversionNext = null;
};

FlowManager.prototype.step = function step (index) {
  return this.flow.length > index ? this.flow[index] : this.endStatus
};

FlowManager.prototype.first = function first () {
  return this.step(0)
};

FlowManager.prototype.next = function next (current) {
  if (this.diversionNext) {
    var next = this.diversionNext;
    this.diversionNext = null;

    return next
  }

  return this.step(this.flow.indexOf(current) + 1)
};

FlowManager.prototype.diversion = function diversion (next) {
  this.diversionNext = next;
};

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function datetimeFromISO (string) {
  var datetime = luxon.DateTime.fromISO(string).toUTC();

  return datetime.isValid ? datetime : null
}

function monthDays (year, month, weekStart) {
  var monthDate = luxon.DateTime.local(year, month, 1);
  var firstDay = monthDate.weekday - weekStart;

  if (firstDay < 0) {
    firstDay += 7;
  }
  var lastDay = (weekStart - monthDate.weekday - monthDate.daysInMonth) % 7;
  if (lastDay < 0) {
    lastDay += 7;
  }

  return new Array(monthDate.daysInMonth + firstDay + lastDay)
    .fill(null)
    .map(function (value, index) { return (index + 1 <= firstDay || index >= firstDay + monthDate.daysInMonth) ? null : (index + 1 - firstDay); }
    )
}

function monthDayIsDisabled (minDate, maxDate, year, month, day) {
  var date = luxon.DateTime.fromObject({ year: year, month: month, day: day, zone: 'UTC' });

  minDate = minDate ? startOfDay(minDate) : null;
  maxDate = maxDate ? startOfDay(maxDate) : null;

  return (minDate && date < minDate) ||
         (maxDate && date > maxDate)
}

function yearIsDisabled (minDate, maxDate, year) {
  var minYear = minDate ? minDate.year : null;
  var maxYear = maxDate ? maxDate.year : null;

  return (minYear && year < minYear) ||
         (maxYear && year > maxYear)
}

function timeComponentIsDisabled (min, max, component) {
  return (min && component < min) ||
         (max && component > max)
}

function weekdays (weekStart) {
  if (--weekStart < 0) {
    weekStart = 6;
  }

  var weekDays = luxon.Info.weekdays('short').map(function (weekday) { return capitalize(weekday); });

  weekDays = weekDays.concat(weekDays.splice(0, weekStart));

  return weekDays
}

function months () {
  return luxon.Info.months().map(function (month) { return capitalize(month); })
}

function hours (step) {
  return new Array(Math.ceil(24 / step)).fill(null).map(function (item, index) { return index * step; })
}

function minutes (step) {
  return new Array(Math.ceil(60 / step)).fill(null).map(function (item, index) { return index * step; })
}

function years (current) {
  return new Array(201).fill(null).map(function (item, index) { return current - 100 + index; })
}

function pad (number) {
  return number < 10 ? '0' + number : number
}

function startOfDay (datetime) {
  return datetime.startOf('day')
}

function createFlowManagerFromType (type) {
  var flow = [];

  switch (type) {
    case 'datetime':
      flow = ['date', 'time'];
      break
    case 'time':
      flow = ['time'];
      break
    default:
      flow = ['date'];
  }

  return new FlowManager(flow, 'end')
}

function weekStart () {
  var weekstart;

  try {
    weekstart = __webpack_require__("b603");
  } catch (e) {
    weekstart = window.weekstart;
  }

  var firstDay = weekstart ? weekstart.getWeekStartByLocale(luxon.Settings.defaultLocale) : 1;

  return firstDay === 0 ? 7 : firstDay
}

var DatetimeCalendar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vdatetime-calendar"},[_c('div',{staticClass:"vdatetime-calendar__navigation"},[_c('div',{staticClass:"vdatetime-calendar__navigation--previous",on:{"click":_vm.previousMonth}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 61.3 102.8"}},[_c('path',{attrs:{"fill":"none","stroke":"#444","stroke-width":"14","stroke-miterlimit":"10","d":"M56.3 97.8L9.9 51.4 56.3 5"}})])]),_vm._v(" "),_c('div',{staticClass:"vdatetime-calendar__current--month"},[_vm._v(_vm._s(_vm.monthName)+" "+_vm._s(_vm.newYear))]),_vm._v(" "),_c('div',{staticClass:"vdatetime-calendar__navigation--next",on:{"click":_vm.nextMonth}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 61.3 102.8"}},[_c('path',{attrs:{"fill":"none","stroke":"#444","stroke-width":"14","stroke-miterlimit":"10","d":"M56.3 97.8L9.9 51.4 56.3 5"}})])])]),_vm._v(" "),_c('div',{staticClass:"vdatetime-calendar__month"},[_vm._l((_vm.weekdays),function(weekday){return _c('div',{staticClass:"vdatetime-calendar__month__weekday"},[_vm._v(_vm._s(weekday))])}),_vm._v(" "),_vm._l((_vm.days),function(day){return _c('div',{staticClass:"vdatetime-calendar__month__day",class:{'vdatetime-calendar__month__day--selected': day.selected, 'vdatetime-calendar__month__day--disabled': day.disabled},on:{"click":function($event){_vm.selectDay(day);}}},[_c('span',[_c('span',[_vm._v(_vm._s(day.number))])])])})],2)])},staticRenderFns: [],
  props: {
    year: {
      type: Number,
      required: true
    },
    month: {
      type: Number,
      required: true
    },
    day: {
      type: Number,
      default: null
    },
    disabled: {
      type: Array
    },
    minDate: {
      type: luxon.DateTime,
      default: null
    },
    maxDate: {
      type: luxon.DateTime,
      default: null
    },
    weekStart: {
      type: Number,
      default: 1
    }
  },

  data: function data () {
    return {
      newDate: luxon.DateTime.fromObject({ year: this.year, month: this.month, zone: 'UTC' }),
      weekdays: weekdays(this.weekStart),
      months: months()
    }
  },

  computed: {
    newYear: function newYear () {
      return this.newDate.year
    },
    newMonth: function newMonth () {
      return this.newDate.month
    },
    monthName: function monthName () {
      return this.months[this.newMonth - 1]
    },
    days: function days () {
      var this$1 = this;

      return monthDays(this.newYear, this.newMonth, this.weekStart).map(function (day) { return ({
        number: day,
        selected: day && this$1.year === this$1.newYear && this$1.month === this$1.newMonth && this$1.day === day,
        disabled: !day || monthDayIsDisabled(this$1.minDate, this$1.maxDate, this$1.newYear, this$1.newMonth, day)
      }); })
    }
  },

  methods: {
    selectDay: function selectDay (day) {
      if (day.disabled) {
        return
      }

      this.$emit('change', this.newYear, this.newMonth, day.number);
    },
    previousMonth: function previousMonth () {
      this.newDate = this.newDate.minus({ months: 1 });
    },
    nextMonth: function nextMonth () {
      this.newDate = this.newDate.plus({ months: 1 });
    }
  }
};

var DatetimeTimePicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'vdatetime-time-picker': true, 'vdatetime-time-picker__with-suffix': _vm.use12Hour}},[_c('div',{ref:"hourList",staticClass:"vdatetime-time-picker__list vdatetime-time-picker__list--hours"},_vm._l((_vm.hours),function(hour){return _c('div',{staticClass:"vdatetime-time-picker__item",class:{'vdatetime-time-picker__item--selected': hour.selected, 'vdatetime-time-picker__item--disabled': hour.disabled},on:{"click":function($event){_vm.selectHour(hour);}}},[_vm._v(_vm._s(_vm.formatHour(hour.number)))])})),_vm._v(" "),_c('div',{ref:"minuteList",staticClass:"vdatetime-time-picker__list vdatetime-time-picker__list--minutes"},_vm._l((_vm.minutes),function(minute){return _c('div',{staticClass:"vdatetime-time-picker__item",class:{'vdatetime-time-picker__item--selected': minute.selected, 'vdatetime-time-picker__item--disabled': minute.disabled},on:{"click":function($event){_vm.selectMinute(minute);}}},[_vm._v(_vm._s(minute.number))])})),_vm._v(" "),(_vm.use12Hour)?_c('div',{ref:"suffixList",staticClass:"vdatetime-time-picker__list vdatetime-time-picker__list--suffix"},[_c('div',{staticClass:"vdatetime-time-picker__item",class:{'vdatetime-time-picker__item--selected': _vm.hour < 12},on:{"click":function($event){_vm.selectSuffix('am');}}},[_vm._v("am")]),_vm._v(" "),_c('div',{staticClass:"vdatetime-time-picker__item",class:{'vdatetime-time-picker__item--selected': _vm.hour >= 12},on:{"click":function($event){_vm.selectSuffix('pm');}}},[_vm._v("pm")])]):_vm._e()])},staticRenderFns: [],
  props: {
    hour: {
      type: Number,
      required: true
    },
    minute: {
      type: Number,
      required: true
    },
    use12Hour: {
      type: Boolean,
      default: false
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minTime: {
      type: String,
      default: null
    },
    maxTime: {
      type: String,
      default: null
    }
  },

  computed: {
    hours: function hours$1 () {
      var this$1 = this;

      return hours(this.hourStep).filter(function (hour) {
        if (!this$1.use12Hour) {
          return true
        } else {
          if (this$1.hour < 12) {
            return hour < 12
          } else {
            return hour >= 12
          }
        }
      }).map(function (hour) { return ({
        number: pad(hour),
        selected: hour === this$1.hour,
        disabled: timeComponentIsDisabled(this$1.minHour, this$1.maxHour, hour)
      }); })
    },
    minutes: function minutes$1 () {
      var this$1 = this;

      return minutes(this.minuteStep).map(function (minute) { return ({
        number: pad(minute),
        selected: minute === this$1.minute,
        disabled: timeComponentIsDisabled(this$1.minMinute, this$1.maxMinute, minute)
      }); })
    },
    minHour: function minHour () {
      return this.minTime ? parseInt(this.minTime.split(':')[0]) : null
    },
    minMinute: function minMinute () {
      return this.minTime && this.minHour === this.hour ? parseInt(this.minTime.split(':')[1]) : null
    },
    maxHour: function maxHour () {
      return this.maxTime ? parseInt(this.maxTime.split(':')[0]) : null
    },
    maxMinute: function maxMinute () {
      return this.maxTime && this.maxHour === this.hour ? parseInt(this.maxTime.split(':')[1]) : null
    }
  },

  methods: {
    selectHour: function selectHour (hour) {
      if (hour.disabled) {
        return
      }

      this.$emit('change', { hour: parseInt(hour.number) });
    },
    selectMinute: function selectMinute (minute) {
      if (minute.disabled) {
        return
      }

      this.$emit('change', { minute: parseInt(minute.number) });
    },
    selectSuffix: function selectSuffix (suffix) {
      if (suffix === 'am') {
        if (this.hour >= 12) {
          this.$emit('change', { hour: parseInt(this.hour - 12), suffixTouched: true });
        }
      }
      if (suffix === 'pm') {
        if (this.hour < 12) {
          this.$emit('change', { hour: parseInt(this.hour + 12), suffixTouched: true });
        }
      }
    },
    formatHour: function formatHour (hour) {
      var numHour = Number(hour);
      if (this.use12Hour) {
        if (numHour === 0) {
          return 12
        }
        if (numHour > 12) {
          return numHour - 12
        }
        return numHour
      }
      return hour
    }
  },

  mounted: function mounted () {
    var selectedHour = this.$refs.hourList.querySelector('.vdatetime-time-picker__item--selected');
    var selectedMinute = this.$refs.minuteList.querySelector('.vdatetime-time-picker__item--selected');
    this.$refs.hourList.scrollTop = selectedHour ? selectedHour.offsetTop - 250 : 0;
    this.$refs.minuteList.scrollTop = selectedMinute ? selectedMinute.offsetTop - 250 : 0;
  }
};

var DatetimeYearPicker = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vdatetime-year-picker"},[_c('div',{ref:"yearList",staticClass:"vdatetime-year-picker__list vdatetime-year-picker__list"},_vm._l((_vm.years),function(year){return _c('div',{staticClass:"vdatetime-year-picker__item",class:{'vdatetime-year-picker__item--selected': year.selected, 'vdatetime-year-picker__item--disabled': year.disabled},on:{"click":function($event){_vm.select(year);}}},[_vm._v(_vm._s(year.number)+" ")])}))])},staticRenderFns: [],
  props: {
    year: {
      type: Number,
      required: true
    },
    minDate: {
      type: luxon.DateTime,
      default: null
    },
    maxDate: {
      type: luxon.DateTime,
      default: null
    }
  },

  computed: {
    years: function years$1 () {
      var this$1 = this;

      return years(this.year).map(function (year) { return ({
        number: year,
        selected: year === this$1.year,
        disabled: !year || yearIsDisabled(this$1.minDate, this$1.maxDate, year)
      }); })
    }
  },

  methods: {
    select: function select (year) {
      if (year.disabled) {
        return
      }

      this.$emit('change', parseInt(year.number));
    },

    scrollToCurrent: function scrollToCurrent () {
      var selectedYear = this.$refs.yearList.querySelector('.vdatetime-year-picker__item--selected');
      this.$refs.yearList.scrollTop = selectedYear ? selectedYear.offsetTop - 250 : 0;
    }
  },

  mounted: function mounted () {
    this.scrollToCurrent();
  },

  updated: function updated () {
    this.scrollToCurrent();
  }
};

var KEY_TAB = 9;
var KEY_ENTER = 13;
var KEY_ESC = 27;

var DatetimePopup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vdatetime-popup"},[_c('div',{staticClass:"vdatetime-popup__header"},[(_vm.type !== 'time')?_c('div',{staticClass:"vdatetime-popup__year",on:{"click":_vm.showYear}},[_vm._v(_vm._s(_vm.year))]):_vm._e(),_vm._v(" "),(_vm.type !== 'time')?_c('div',{staticClass:"vdatetime-popup__date"},[_vm._v(_vm._s(_vm.dateFormatted))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"vdatetime-popup__body"},[(_vm.step === 'year')?_c('datetime-year-picker',{attrs:{"min-date":_vm.minDatetimeUTC,"max-date":_vm.maxDatetimeUTC,"year":_vm.year},on:{"change":_vm.onChangeYear}}):_vm._e(),_vm._v(" "),(_vm.step === 'date')?_c('datetime-calendar',{attrs:{"year":_vm.year,"month":_vm.month,"day":_vm.day,"min-date":_vm.minDatetimeUTC,"max-date":_vm.maxDatetimeUTC,"week-start":_vm.weekStart},on:{"change":_vm.onChangeDate}}):_vm._e(),_vm._v(" "),(_vm.step === 'time')?_c('datetime-time-picker',{attrs:{"hour":_vm.hour,"minute":_vm.minute,"use12-hour":_vm.use12Hour,"hour-step":_vm.hourStep,"minute-step":_vm.minuteStep,"min-time":_vm.minTime,"max-time":_vm.maxTime},on:{"change":_vm.onChangeTime}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"vdatetime-popup__actions"},[_c('div',{staticClass:"vdatetime-popup__actions__button vdatetime-popup__actions__button--cancel",on:{"click":_vm.cancel}},[_vm._v(_vm._s(_vm.phrases.cancel))]),_vm._v(" "),_c('div',{staticClass:"vdatetime-popup__actions__button vdatetime-popup__actions__button--confirm",on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.phrases.ok))])])])},staticRenderFns: [],
  components: {
    DatetimeCalendar: DatetimeCalendar,
    DatetimeTimePicker: DatetimeTimePicker,
    DatetimeYearPicker: DatetimeYearPicker
  },

  props: {
    datetime: {
      type: luxon.DateTime,
      required: true
    },
    phrases: {
      type: Object,
      default: function default$1 () {
        return {
          cancel: 'Cancel',
          ok: 'Ok'
        }
      }
    },
    type: {
      type: String,
      default: 'date'
    },
    use12Hour: {
      type: Boolean,
      default: false
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDatetime: {
      type: luxon.DateTime,
      default: null
    },
    maxDatetime: {
      type: luxon.DateTime,
      default: null
    },
    auto: {
      type: Boolean,
      default: false
    },
    weekStart: {
      type: Number,
      default: 1
    }
  },

  data: function data () {
    var flow = createFlowManagerFromType(this.type);

    return {
      newDatetime: this.datetime,
      flow: flow,
      step: flow.first(),
      timePartsTouched: []
    }
  },

  created: function created () {
    document.addEventListener('keydown', this.onKeyDown);
  },

  beforeDestroy: function beforeDestroy () {
    document.removeEventListener('keydown', this.onKeyDown);
  },

  computed: {
    year: function year () {
      return this.newDatetime.year
    },
    month: function month () {
      return this.newDatetime.month
    },
    day: function day () {
      return this.newDatetime.day
    },
    hour: function hour () {
      return this.newDatetime.hour
    },
    minute: function minute () {
      return this.newDatetime.minute
    },
    dateFormatted: function dateFormatted () {
      return this.newDatetime.toLocaleString({
        month: 'long',
        day: 'numeric'
      })
    },
    minDatetimeUTC: function minDatetimeUTC () {
      return this.minDatetime ? this.minDatetime.toUTC() : null
    },
    maxDatetimeUTC: function maxDatetimeUTC () {
      return this.maxDatetime ? this.maxDatetime.toUTC() : null
    },
    minTime: function minTime () {
      return (
        this.minDatetime &&
        this.minDatetime.year === this.year &&
        this.minDatetime.month === this.month &&
        this.minDatetime.day === this.day
      ) ? this.minDatetime.toFormat('HH:mm') : null
    },
    maxTime: function maxTime () {
      return (
        this.maxDatetime &&
        this.maxDatetime.year === this.year &&
        this.maxDatetime.month === this.month &&
        this.maxDatetime.day === this.day
      ) ? this.maxDatetime.toFormat('HH:mm') : null
    }
  },

  methods: {
    nextStep: function nextStep () {
      this.step = this.flow.next(this.step);
      this.timePartsTouched = [];

      if (this.step === 'end') {
        this.$emit('confirm', this.newDatetime);
      }
    },
    showYear: function showYear () {
      this.step = 'year';
      this.flow.diversion('date');
    },
    confirm: function confirm () {
      this.nextStep();
    },
    cancel: function cancel () {
      this.$emit('cancel');
    },
    onChangeYear: function onChangeYear (year) {
      this.newDatetime = this.newDatetime.set({ year: year });

      if (this.auto) {
        this.nextStep();
      }
    },
    onChangeDate: function onChangeDate (year, month, day) {
      this.newDatetime = this.newDatetime.set({ year: year, month: month, day: day });

      if (this.auto) {
        this.nextStep();
      }
    },
    onChangeTime: function onChangeTime (ref) {
      var hour = ref.hour;
      var minute = ref.minute;
      var suffixTouched = ref.suffixTouched;

      if (suffixTouched) {
        this.timePartsTouched['suffix'] = true;
      }

      if (Number.isInteger(hour)) {
        this.newDatetime = this.newDatetime.set({ hour: hour });
        this.timePartsTouched['hour'] = true;
      }

      if (Number.isInteger(minute)) {
        this.newDatetime = this.newDatetime.set({ minute: minute });
        this.timePartsTouched['minute'] = true;
      }

      var goNext = this.auto && this.timePartsTouched['hour'] && this.timePartsTouched['minute'] && (
        this.timePartsTouched['suffix'] ||
        !this.use12Hour
      );

      if (goNext) {
        this.nextStep();
      }
    },
    onKeyDown: function onKeyDown (event) {
      switch (event.keyCode) {
        case KEY_ESC:
        case KEY_TAB:
          this.cancel();
          break

        case KEY_ENTER:
          this.nextStep();
          break
      }
    }
  }
};

var Datetime = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vdatetime"},[_vm._t("before"),_vm._v(" "),_c('input',_vm._g(_vm._b({staticClass:"vdatetime-input",class:_vm.inputClass,attrs:{"id":_vm.inputId,"type":"text"},domProps:{"value":_vm.inputValue},on:{"click":_vm.open,"focus":_vm.open}},'input',_vm.$attrs,false),_vm.$listeners)),_vm._v(" "),(_vm.hiddenName)?_c('input',{attrs:{"type":"hidden","name":_vm.hiddenName},domProps:{"value":_vm.value},on:{"input":_vm.setValue}}):_vm._e(),_vm._v(" "),_vm._t("after"),_vm._v(" "),_c('transition-group',{attrs:{"name":"vdatetime-fade","tag":"div"}},[(_vm.isOpen)?_c('div',{key:"overlay",staticClass:"vdatetime-overlay",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.cancel($event);}}}):_vm._e(),_vm._v(" "),(_vm.isOpen)?_c('datetime-popup',{key:"popup",attrs:{"type":_vm.type,"datetime":_vm.popupDate,"phrases":_vm.phrases,"use12-hour":_vm.use12Hour,"hour-step":_vm.hourStep,"minute-step":_vm.minuteStep,"min-datetime":_vm.popupMinDatetime,"max-datetime":_vm.popupMaxDatetime,"auto":_vm.auto,"week-start":_vm.weekStart},on:{"confirm":_vm.confirm,"cancel":_vm.cancel}}):_vm._e()],1)],2)},staticRenderFns: [],
  components: {
    DatetimePopup: DatetimePopup
  },

  props: {
    value: {
      type: String
    },
    valueZone: {
      type: String,
      default: 'UTC'
    },
    inputId: {
      type: String,
      default: ''
    },
    inputClass: {
      type: String,
      default: ''
    },
    hiddenName: {
      type: String
    },
    zone: {
      type: String,
      default: 'local'
    },
    format: {
      type: [Object, String],
      default: null
    },
    type: {
      type: String,
      default: 'date'
    },
    phrases: {
      type: Object,
      default: function default$1 () {
        return {
          cancel: 'Cancel',
          ok: 'Ok'
        }
      }
    },
    use12Hour: {
      type: Boolean,
      default: false
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDatetime: {
      type: String,
      default: null
    },
    maxDatetime: {
      type: String,
      default: null
    },
    auto: {
      type: Boolean,
      default: false
    },
    weekStart: {
      type: Number,
      default: function default$2 () {
        return weekStart()
      }
    }
  },

  data: function data () {
    return {
      isOpen: false,
      datetime: datetimeFromISO(this.value)
    }
  },

  watch: {
    value: function value (newValue) {
      this.datetime = datetimeFromISO(newValue);
    }
  },

  created: function created () {
    this.emitInput();
  },

  computed: {
    inputValue: function inputValue () {
      var format = this.format;

      if (!format) {
        switch (this.type) {
          case 'date':
            format = luxon.DateTime.DATE_MED;
            break
          case 'time':
            format = luxon.DateTime.TIME_24_SIMPLE;
            break
          case 'datetime':
          case 'default':
            format = luxon.DateTime.DATETIME_MED;
            break
        }
      }

      if (typeof format === 'string') {
        return this.datetime ? luxon.DateTime.fromISO(this.datetime).setZone(this.zone).toFormat(format) : ''
      } else {
        return this.datetime ? this.datetime.setZone(this.zone).toLocaleString(format) : ''
      }
    },
    popupDate: function popupDate () {
      return this.datetime ? this.datetime.setZone(this.zone) : this.newPopupDatetime()
    },
    popupMinDatetime: function popupMinDatetime () {
      return this.minDatetime ? luxon.DateTime.fromISO(this.minDatetime).setZone(this.zone) : null
    },
    popupMaxDatetime: function popupMaxDatetime () {
      return this.maxDatetime ? luxon.DateTime.fromISO(this.maxDatetime).setZone(this.zone) : null
    }
  },

  methods: {
    emitInput: function emitInput () {
      var datetime = this.datetime ? this.datetime.setZone(this.valueZone) : null;

      if (datetime && this.type === 'date') {
        datetime = startOfDay(datetime);
      }

      this.$emit('input', datetime ? datetime.toISO() : '');
    },
    open: function open (event) {
      event.target.blur();

      this.isOpen = true;
    },
    close: function close () {
      this.isOpen = false;
      this.$emit('close');
    },
    confirm: function confirm (datetime) {
      this.datetime = datetime.toUTC();
      this.emitInput();
      this.close();
    },
    cancel: function cancel () {
      this.close();
    },
    newPopupDatetime: function newPopupDatetime () {
      var datetime = luxon.DateTime.utc().setZone(this.zone).set({ seconds: 0, milliseconds: 0 });

      if (this.popupMinDatetime && datetime < this.popupMinDatetime) {
        datetime = this.popupMinDatetime.set({ seconds: 0, milliseconds: 0 });
      }

      if (this.popupMaxDatetime && datetime > this.popupMaxDatetime) {
        datetime = this.popupMaxDatetime.set({ seconds: 0, milliseconds: 0 });
      }

      if (this.minuteStep === 1) {
        return datetime
      }

      var roundedMinute = Math.round(datetime.minute / this.minuteStep) * this.minuteStep;

      if (roundedMinute === 60) {
        return datetime.plus({ hours: 1 }).set({ minute: 0 })
      }

      return datetime.set({ minute: roundedMinute })
    },
    setValue: function setValue (event) {
      this.datetime = datetimeFromISO(event.target.value);
      this.emitInput();
    }
  }
};

function plugin (Vue) {
  Vue.component('datetime', Datetime);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

var version = '1.0.0-beta.8';

exports['default'] = plugin;
exports.Datetime = Datetime;
exports.version = version;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "87bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _JavascriptTimeAgo = __webpack_require__("0fec");

var _JavascriptTimeAgo2 = _interopRequireDefault(_JavascriptTimeAgo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */
var RelativeTimeFormat = function () {
  /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.type="numeric"] - One of: "numeric", "text".
   * @param {string} [options.localeMatcher="best fit"] - One of: "lookup", "best fit".
   */
  function RelativeTimeFormat(locales) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, RelativeTimeFormat);

    var style = options.style;

    this.style = style || 'long';

    // Choose the most appropriate locale.
    // This could implement some kind of a "best-fit" algorythm.
    if (locales) {
      this.locale = RelativeTimeFormat.supportedLocalesOf(locales)[0];
    }
    this.locale = this.locale ? resolveLocale(this.locale) : getDefaultLocale();
  }

  /**
   * Formats time `value` in `units` (either in past or in future).
   * @param {number} value - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */


  _createClass(RelativeTimeFormat, [{
    key: 'format',
    value: function format(value, unit) {
      return this.getRule(value, unit).replace('{0}', Math.abs(value));
    }

    /**
     * Formats time `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns [
     * //   { type: "literal", value: "in "},
     * //   { type: "day", value: "100"},
     * //   { type: "literal", value: " days"}
     * // ]
     * rtf.formatToParts(100, "day")
     */

  }, {
    key: 'formatToParts',
    value: function formatToParts(value, unit) {
      var rule = this.getRule(value, unit);
      var valueIndex = rule.indexOf("{0}");
      var parts = [];
      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }
      parts.push({
        type: unit,
        value: String(Math.abs(value))
      });
      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }
      return parts;
    }

    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */

  }, {
    key: 'getRule',
    value: function getRule(value, unit) {
      // "now" is used in `javascript-time-ago`.
      if (["now", "second", "minute", "hour", "day", "week", "month", "quarter", "year"].indexOf(unit) < 0) {
        throw new RangeError('Unknown time unit: ' + unit + '.');
      }
      // Get locale-specific time interval formatting rules
      // of a given `style` for the given value of measurement `unit`.
      //
      // E.g.:
      //
      // ```json
      // {
      //  "past": {
      //    "one": "a second ago",
      //    "other": "{0} seconds ago"
      //  },
      //  "future": {
      //    "one": "in a second",
      //    "other": "in {0} seconds"
      //  }
      // }
      // ```
      //
      var unitRules = getLocales()[this.locale][this.style][unit];
      if (typeof unitRules === "string") {
        return unitRules;
      }
      // Choose either "past" or "future" based on time `value` sign.
      // If "past" is same as "future" then they're stored as "other".
      // If there's only "other" then it's being collapsed.
      var quantifierRules = unitRules[value <= 0 ? "past" : "future"] || unitRules;
      if (typeof quantifierRules === "string") {
        return quantifierRules;
      }
      // Quantify `value`.
      var quantify = getLocales()[this.locale].quantify;
      var quantifier = quantify && quantify(Math.abs(value));
      // There seems to be no such locale in CLDR
      // for which `quantify` is missing
      // and still `past` and `future` messages
      // contain something other than "other".
      /* istanbul ignore next */
      quantifier = quantifier || 'other';
      // "other" rule is supposed to always be present.
      // If only "other" rule is present then "rules" is not an object and is a string.
      return quantifierRules[quantifier] || quantifierRules.other;
    }

    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */

  }, {
    key: 'resolvedOptions',
    value: function resolvedOptions() {
      return {
        locale: this.locale
      };
    }
  }]);

  return RelativeTimeFormat;
}();

/**
 * Returns an array containing those of the provided locales
 * that are supported in collation without having to fall back
 * to the runtime's default locale.
 * @param {(string|string[])} locale - A string with a BCP 47 language tag, or an array of such strings. For the general form of the locales argument, see the Intl page.
 * @param {Object} [options] - An object that may have the following property:
 * @param {Function} [options.localeMatcher] - The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.
 * @return {string[]} An array of strings representing a subset of the given locale tags that are supported in collation without having to fall back to the runtime's default locale.
 * @example
 * var locales = ['ban', 'id-u-co-pinyin', 'de-ID'];
 * var options = { localeMatcher: 'lookup' };
 * console.log(Intl.RelativeTimeFormat.supportedLocalesOf(locales, options).join(', '));
 * // → "id-u-co-pinyin, de-ID"
 */


exports.default = RelativeTimeFormat;
RelativeTimeFormat.supportedLocalesOf = function (locales, options) {
  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales];
  }
  // This is not an intelligent algorythm,
  // but it will do for the polyfill purposes.
  // This could implement some kind of a "best-fit" algorythm.
  return locales.filter(resolveLocale);
};

/**
 * Resolves a locale to a supported one.
 * @param  {string} locale
 * @return {string}
 */
function resolveLocale(locale) {
  if (getLocales()[locale]) {
    return locale;
  }
  // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
  var parts = locale.split('-');
  while (locale.length > 1) {
    parts.pop();
    locale = parts.join('-');
    if (getLocales()[locale]) {
      return locale;
    }
  }
}

// Due to the cyclic `import` dependency the one-liner won't work.
// RelativeTimeFormat.addLocale = JavascriptTimeAgo.addLocale
RelativeTimeFormat.addLocale = function (localeData) {
  _JavascriptTimeAgo2.default.addLocale(localeData);
};

function getLocales() {
  return _JavascriptTimeAgo2.default.locales;
}

function getDefaultLocale() {
  return _JavascriptTimeAgo2.default.default_locale;
}

/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */
// export function getLanguageFromLanguageTag(languageTag) {
//   const hyphenIndex = languageTag.indexOf('-')
//   if (hyphenIndex > 0) {
//     return languageTag.slice(0, hyphenIndex)
//   }
//   return languageTag
// }
//# sourceMappingURL=RelativeTimeFormat.js.map

/***/ }),

/***/ "88fe":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "918e":
/***/ (function(module) {

module.exports = {"year":{"one":"{0} year","other":"{0} years"},"month":{"one":"{0} month","other":"{0} months"},"week":{"one":"{0} week","other":"{0} weeks"},"day":{"one":"{0} day","other":"{0} days"},"hour":{"one":"{0} hour","other":"{0} hours"},"minute":{"one":"{0} minute","other":"{0} minutes"},"second":{"one":"{0} second","other":"{0} seconds"},"now":{"future":"in a moment","past":"just now"}};

/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "9d91":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helpers = __webpack_require__("2292");

// just now
// 1 minute ago
// 2 minutes ago
// 5 minutes ago
// 10 minutes ago
// 15 minutes ago
// 20 minutes ago
// an hour ago
// 2 hours ago
// …
// 20 hours ago
// a day ago
// 2 days ago
// 5 days ago
// a week ago
// 2 weeks ago
// 3 weeks ago
// a month ago
// 2 months ago
// 4 months ago
// a year ago
// 2 years ago
// …
exports.default = [{
	factor: 1,
	unit: 'now'
}, {
	threshold: 1,
	threshold_for_now: 45,
	factor: 1,
	unit: 'second'
}, {
	threshold: 45,
	factor: 60,
	unit: 'minute'
}, {
	threshold: 2.5 * 60,
	factor: 60,
	granularity: 5,
	unit: 'minute'
}, {
	threshold: 22.5 * 60,
	factor: 30 * 60,
	unit: 'half-hour'
}, {
	threshold: 42.5 * 60,
	threshold_for_minute: 52.5 * 60,
	factor: 60 * 60,
	unit: 'hour'
}, {
	threshold: 20.5 / 24 * _helpers.day,
	factor: _helpers.day,
	unit: 'day'
}, {
	threshold: 5.5 * _helpers.day,
	factor: 7 * _helpers.day,
	unit: 'week'
}, {
	threshold: 3.5 * 7 * _helpers.day,
	factor: _helpers.month,
	unit: 'month'
}, {
	threshold: 10.5 * _helpers.month,
	factor: _helpers.year,
	unit: 'year'
}];
//# sourceMappingURL=convenient.js.map

/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a01c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _gradation = __webpack_require__("4e84");

var _locale = __webpack_require__("62d5");

// A cache for `Intl.DateTimeFormat` twitter formatters
// for various locales (is a global variable).
var formatters = {};

// Twitter style relative time formatting.
// ("1m", "2h", "Mar 3", "Apr 4, 2012").
// Seconds, minutes and hours are shown relatively,
// and other intervals can be shown using full date format.
exports.default = {
	// Twitter gradation is derived from "canonical" gradation
	// adjusting its "minute" `threshold` to be 45.
	gradation: [
	// Minutes
	_extends({}, (0, _gradation.getStep)(_gradation.canonical, 'minute'), {
		threshold: 45
	}),
	// Hours
	(0, _gradation.getStep)(_gradation.canonical, 'hour'),
	// If `date` and `now` happened the same year,
	// then only output month and day.
	{
		threshold: _gradation.day - 0.5 * _gradation.hour,
		format: function format(value, locale) {
			// Whether can use `Intl.DateTimeFormat`.
			// If `Intl` is not available,
			// or the locale is not supported,
			// then don't override the default labels.
			/* istanbul ignore if */
			if (!(0, _locale.intlDateTimeFormatSupported)()) {
				return;
			}
			/* istanbul ignore else */
			if (!formatters[locale]) {
				formatters[locale] = {};
			}
			/* istanbul ignore else */
			if (!formatters[locale].this_year) {
				// "Apr 11" (MMMd)
				formatters[locale].this_year = new Intl.DateTimeFormat(locale, {
					month: 'short',
					day: 'numeric'
				});
			}
			// Output month and day.
			return formatters[locale].this_year.format((0, _gradation.getDate)(value));
		}
	},
	// If `date` and `now` happened in defferent years,
	// then output day, month and year.
	{
		threshold: function threshold(now) {
			// Jan 1st of the next year.
			var nextYear = new Date(new Date(now).getFullYear() + 1, 0);
			return (nextYear.getTime() - now) / 1000;
		},
		format: function format(value, locale) {
			// Whether can use `Intl.DateTimeFormat`.
			// If `Intl` is not available,
			// or the locale is not supported,
			// then don't override the default labels.
			/* istanbul ignore if */
			if (!(0, _locale.intlDateTimeFormatSupported)()) {
				return;
			}
			/* istanbul ignore if */
			if (!formatters[locale]) {
				formatters[locale] = {};
			}
			/* istanbul ignore else */
			if (!formatters[locale].other) {
				// "Apr 11, 2017" (yMMMd)
				formatters[locale].other = new Intl.DateTimeFormat(locale, {
					year: 'numeric',
					month: 'short',
					day: 'numeric'
				});
			}
			// Output day, month and year.
			return formatters[locale].other.format((0, _gradation.getDate)(value));
		}
	}],

	flavour: ['tiny', 'short_time', 'narrow', 'short']
};
//# sourceMappingURL=twitter.js.map

/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a296":
/***/ (function(module) {

module.exports = {"year":{"previous":"last year","current":"this year","next":"next year","past":{"one":"a year ago","other":"{0} years ago"},"future":{"one":"in a year","other":"in {0} years"}},"quarter":{"previous":"last quarter","current":"this quarter","next":"next quarter","past":{"one":"a quarter ago","other":"{0} quarters ago"},"future":{"one":"in a quarter","other":"in {0} quarters"}},"month":{"previous":"last month","current":"this month","next":"next month","past":{"one":"a month ago","other":"{0} months ago"},"future":{"one":"in a month","other":"in {0} months"}},"week":{"previous":"last week","current":"this week","next":"next week","past":{"one":"a week ago","other":"{0} weeks ago"},"future":{"one":"in a week","other":"in {0} weeks"}},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"a day ago","other":"{0} days ago"},"future":{"one":"in a day","other":"in {0} days"}},"hour":{"current":"this hour","past":{"one":"an hour ago","other":"{0} hours ago"},"future":{"one":"in an hour","other":"in {0} hours"}},"minute":{"current":"this minute","past":{"one":"a minute ago","other":"{0} minutes ago"},"future":{"one":"in a minute","other":"in {0} minutes"}},"second":{"current":"now","past":{"one":"a second ago","other":"{0} seconds ago"},"future":{"one":"in a second","other":"in {0} seconds"}},"now":{"future":"in a moment","past":"just now"}};

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b603":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/weekstart/dist/es-module/api.js
function getWeekStartByRegion(regionCode, regionDayMap) {
    var code = regionDayMap[typeof regionCode === 'string' ? regionCode.toUpperCase() : regionCode];
    return typeof code === 'number' ? code : 1;
}

function getWeekStartByLocale(locale, langRegionMap, regionDayMap) {
    if (locale) {
        var data = locale.toLowerCase().split(/[-_]/);
        var language = data[0];
        var country;
        if (data[1] && data[1].length === 4) {
            language += "_" + (data[1]);
            country = data[2];
        } else {
            country = data[1];
        }
        if (!country) {
            country = langRegionMap[language];
        }
        if (country) {
            return getWeekStartByRegion(country.match(/^\d+$/) ? Number(country) : country, regionDayMap);
        }
    }
    return 1;
}


//# sourceMappingURL=api.js.map

// CONCATENATED MODULE: ./node_modules/weekstart/dist/es-module/langRegionMap.js
var langRegionMap = {
    en: 'US',
    zh: 'CN',
    zh_hans: 'CN',
    hans: 'CN',
    wuu: 'CN',
    hsn: 'CN',
    hak: 'CN',
    nan: 'CN',
    gan: 'CN',
    hi: 'IN',
    te: 'IN',
    mr: 'IN',
    ta: 'IN',
    gu: 'IN',
    kn: 'IN',
    or: 'IN',
    ml: 'IN',
    pa_guru: 'IN',
    bho: 'IN',
    awa: 'IN',
    as: 'IN',
    mwr: 'IN',
    mai: 'IN',
    mag: 'IN',
    bgc: 'IN',
    hne: 'IN',
    dcc: 'IN',
    dz: 'BT',
    tn: 'BW',
    am: 'ET',
    om: 'ET',
    quc: 'GT',
    id: 'ID',
    jv: 'ID',
    su: 'ID',
    mad: 'ID',
    ms_arab: 'ID',
    ga: 'IE',
    he: 'IL',
    jam: 'JM',
    ja: 'JP',
    km: 'KH',
    ko: 'KR',
    lo: 'LA',
    mh: 'MH',
    my: 'MM',
    mt: 'MT',
    ne: 'NP',
    fil: 'PH',
    ceb: 'PH',
    ilo: 'PH',
    ur: 'PK',
    pa: 'PK',
    pa_arab: 'PK',
    arab: 'PK',
    lah: 'PK',
    ps: 'PK',
    sd: 'PK',
    sd_arab: 'PK',
    skr: 'PK',
    gn: 'PY',
    th: 'TH',
    tts: 'TH',
    aeb: 'TN',
    zh_hant: 'TW',
    hant: 'TW',
    sm: 'WS',
    zu: 'ZA',
    sn: 'ZW',
    arq: 'DZ',
    ar: 'EG',
    arz: 'EG',
    fa: 'IR',
    az_arab: 'IR',
    ary: 'MA',
    bn: 'BD',
    rkt: 'BD',
    dv: 'MV'
};

/* harmony default export */ var es_module_langRegionMap = (langRegionMap);
//# sourceMappingURL=langRegionMap.js.map

// CONCATENATED MODULE: ./node_modules/weekstart/dist/es-module/regionDayMap.js
var regionDayMap = {
    AG: 0,
    ATG: 0,
    28: 0,
    AR: 0,
    ARG: 0,
    32: 0,
    AS: 0,
    ASM: 0,
    16: 0,
    AU: 0,
    AUS: 0,
    36: 0,
    BR: 0,
    BRA: 0,
    76: 0,
    BS: 0,
    BHS: 0,
    44: 0,
    BT: 0,
    BTN: 0,
    64: 0,
    BW: 0,
    BWA: 0,
    72: 0,
    BZ: 0,
    BLZ: 0,
    84: 0,
    CA: 0,
    CAN: 0,
    124: 0,
    CN: 0,
    CHN: 0,
    156: 0,
    CO: 0,
    COL: 0,
    170: 0,
    DM: 0,
    DMA: 0,
    212: 0,
    DO: 0,
    DOM: 0,
    214: 0,
    ET: 0,
    ETH: 0,
    231: 0,
    GT: 0,
    GTM: 0,
    320: 0,
    GU: 0,
    GUM: 0,
    316: 0,
    HK: 0,
    HKG: 0,
    344: 0,
    HN: 0,
    HND: 0,
    340: 0,
    ID: 0,
    IDN: 0,
    360: 0,
    IE: 0,
    IRL: 0,
    372: 0,
    IL: 0,
    ISR: 0,
    376: 0,
    IN: 0,
    IND: 0,
    356: 0,
    JM: 0,
    JAM: 0,
    388: 0,
    JP: 0,
    JPN: 0,
    392: 0,
    KE: 0,
    KEN: 0,
    404: 0,
    KH: 0,
    KHM: 0,
    116: 0,
    KR: 0,
    KOR: 0,
    410: 0,
    LA: 0,
    LA0: 0,
    418: 0,
    MH: 0,
    MHL: 0,
    584: 0,
    MM: 0,
    MMR: 0,
    104: 0,
    MO: 0,
    MAC: 0,
    446: 0,
    MT: 0,
    MLT: 0,
    470: 0,
    MX: 0,
    MEX: 0,
    484: 0,
    MZ: 0,
    MOZ: 0,
    508: 0,
    NI: 0,
    NIC: 0,
    558: 0,
    NP: 0,
    NPL: 0,
    524: 0,
    NZ: 0,
    NZL: 0,
    554: 0,
    PA: 0,
    PAN: 0,
    591: 0,
    PE: 0,
    PER: 0,
    604: 0,
    PH: 0,
    PHL: 0,
    608: 0,
    PK: 0,
    PAK: 0,
    586: 0,
    PR: 0,
    PRI: 0,
    630: 0,
    PY: 0,
    PRY: 0,
    600: 0,
    SA: 0,
    SAU: 0,
    682: 0,
    SG: 0,
    SGP: 0,
    702: 0,
    SV: 0,
    SLV: 0,
    222: 0,
    TH: 0,
    THA: 0,
    764: 0,
    TN: 0,
    TUN: 0,
    788: 0,
    TT: 0,
    TTO: 0,
    780: 0,
    TW: 0,
    TWN: 0,
    158: 0,
    UM: 0,
    UMI: 0,
    581: 0,
    US: 0,
    USA: 0,
    840: 0,
    VE: 0,
    VEN: 0,
    862: 0,
    VI: 0,
    VIR: 0,
    850: 0,
    WS: 0,
    WSM: 0,
    882: 0,
    YE: 0,
    YEM: 0,
    887: 0,
    ZA: 0,
    ZAF: 0,
    710: 0,
    ZW: 0,
    ZWE: 0,
    716: 0,
    AE: 6,
    ARE: 6,
    784: 6,
    AF: 6,
    AFG: 6,
    4: 6,
    BH: 6,
    BHR: 6,
    48: 6,
    DJ: 6,
    DJI: 6,
    262: 6,
    DZ: 6,
    DZA: 6,
    12: 6,
    EG: 6,
    EGY: 6,
    818: 6,
    IQ: 6,
    IRQ: 6,
    368: 6,
    IR: 6,
    IRN: 6,
    364: 6,
    JO: 6,
    JOR: 6,
    400: 6,
    KW: 6,
    KWT: 6,
    414: 6,
    LY: 6,
    LBY: 6,
    434: 6,
    MA: 6,
    MAR: 6,
    504: 6,
    OM: 6,
    OMN: 6,
    512: 6,
    QA: 6,
    QAT: 6,
    634: 6,
    SD: 6,
    SDN: 6,
    729: 6,
    SY: 6,
    SYR: 6,
    760: 6,
    BD: 5,
    BGD: 5,
    50: 5,
    MV: 5,
    MDV: 5,
    462: 5
};

/* harmony default export */ var es_module_regionDayMap = (regionDayMap);
//# sourceMappingURL=regionDayMap.js.map

// CONCATENATED MODULE: ./node_modules/weekstart/dist/es-module/main.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekStartByRegion", function() { return getWeekStartByRegion$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekStartByLocale", function() { return getWeekStartByLocale$1; });




function getWeekStartByRegion$1(regionCode) {
    return getWeekStartByRegion(regionCode, es_module_regionDayMap);
}

function getWeekStartByLocale$1(locale) {
    return getWeekStartByLocale(locale, es_module_langRegionMap, es_module_regionDayMap);
}


//# sourceMappingURL=main.js.map


/***/ }),

/***/ "b96c":
/***/ (function(module) {

module.exports = {"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."},"now":"now"};

/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c8f9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cc69":
/***/ (function(module) {

module.exports = {"year":{"previous":"last year","current":"this year","next":"next year","past":{"one":"{0} year ago","other":"{0} years ago"},"future":{"one":"in {0} year","other":"in {0} years"}},"quarter":{"previous":"last quarter","current":"this quarter","next":"next quarter","past":{"one":"{0} quarter ago","other":"{0} quarters ago"},"future":{"one":"in {0} quarter","other":"in {0} quarters"}},"month":{"previous":"last month","current":"this month","next":"next month","past":{"one":"{0} month ago","other":"{0} months ago"},"future":{"one":"in {0} month","other":"in {0} months"}},"week":{"previous":"last week","current":"this week","next":"next week","past":{"one":"{0} week ago","other":"{0} weeks ago"},"future":{"one":"in {0} week","other":"in {0} weeks"}},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":{"one":"{0} hour ago","other":"{0} hours ago"},"future":{"one":"in {0} hour","other":"in {0} hours"}},"minute":{"current":"this minute","past":{"one":"{0} minute ago","other":"{0} minutes ago"},"future":{"one":"in {0} minute","other":"in {0} minutes"}},"second":{"current":"now","past":{"one":"{0} second ago","other":"{0} seconds ago"},"future":{"one":"in {0} second","other":"in {0} seconds"}},"now":"now"};

/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cebe":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cebe__;

/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d355":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d557":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _gradation = __webpack_require__("4e84");

// Similar to the default style but with "ago" omitted.
//
// just now
// 5 minutes
// 10 minutes
// 15 minutes
// 20 minutes
// an hour
// 2 hours
// …
// 20 hours
// 1 day
// 2 days
// a week
// 2 weeks
// 3 weeks
// a month
// 2 months
// 3 months
// 4 months
// a year
// 2 years
//
exports.default = {
	gradation: _gradation.convenient,
	flavour: 'long_time',
	units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};
//# sourceMappingURL=time.js.map

/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "dd80":
/***/ (function(module) {

module.exports = {"year":"{0}yr","month":"{0}mo","week":"{0}wk","day":"{0}d","hour":"{0}h","minute":"{0}m","second":"{0}s","now":"now"};

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e4be":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = grade;

var _gradation = __webpack_require__("4e84");

/**
 * Takes seconds `elapsed` and measures them against
 * `gradation` to return the suitable `gradation` step.
 *
 * @param {number} elapsed - Time interval (in seconds)
 *
 * @param {string[]} units - A list of allowed time units
 *                           (e.g. ['second', 'minute', 'hour', …])
 *
 * @param {Object} [gradation] - Time scale gradation steps.
 *
 *                               E.g.:
 *                               [
 *                                 { unit: 'second', factor: 1 },
 *                                 { unit: 'minute', factor: 60, threshold: 60 },
 *                                 { format(), threshold: 24 * 60 * 60 },
 *                                 …
 *                               ]
 *
 * @return {?Object} `gradation` step.
 */
function grade(elapsed, now, units) {
	var gradation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _gradation.convenient;

	// Leave only allowed time measurement units.
	// E.g. omit "quarter" unit.
	gradation = getAllowedSteps(gradation, units);

	// If no steps of gradation fit the conditions
	// then return nothing.
	if (gradation.length === 0) {
		return;
	}

	// Find the most appropriate gradation step
	var i = findGradationStep(elapsed, now, gradation);
	var step = gradation[i];

	// If time elapsed is too small and even
	// the first gradation step doesn't suit it
	// then return nothing.
	if (i === -1) {
		return;
	}

	// Apply granularity to the time amount
	// (and fall back to the previous step
	//  if the first level of granularity
	//  isn't met by this amount)
	if (step.granularity) {
		// Recalculate the elapsed time amount based on granularity
		var amount = Math.round(elapsed / step.factor / step.granularity) * step.granularity;
		// If the granularity for this step
		// is too high, then fallback
		// to the previous step of gradation.
		// (if there is any previous step of gradation)
		if (amount === 0 && i > 0) {
			return gradation[i - 1];
		}
	}

	return step;
}

/**
 * Gets threshold for moving from `fromStep` to `next_step`.
 * @param  {Object} fromStep - From step.
 * @param  {Object} next_step - To step.
 * @param  {number} now - The current timestamp.
 * @return {number}
 * @throws Will throw if no threshold is found.
 */
function getThreshold(fromStep, toStep, now) {
	var threshold = void 0;

	// Allows custom thresholds when moving
	// from a specific step to a specific step.
	if (fromStep && (fromStep.id || fromStep.unit)) {
		threshold = toStep['threshold_for_' + (fromStep.id || fromStep.unit)];
	}

	// If no custom threshold is set for this transition
	// then use the usual threshold for the next step.
	if (threshold === undefined) {
		threshold = toStep.threshold;
	}

	// Convert threshold to a number.
	if (typeof threshold === 'function') {
		threshold = threshold(now);
	}

	// Throw if no threshold is found.
	if (fromStep && typeof threshold !== 'number') {
		// Babel transforms `typeof` into some "branches"
		// so istanbul will show this as "branch not covered".
		/* istanbul ignore next */
		var type = typeof threshold === 'undefined' ? 'undefined' : _typeof(threshold);
		throw new Error('Each step of a gradation must have a threshold defined except for the first one. Got "' + threshold + '", ' + type + '. Step: ' + JSON.stringify(toStep));
	}

	return threshold;
}

/**
 * @param  {number} elapsed - Time elapsed (in seconds).
 * @param  {number} now - Current timestamp.
 * @param  {Object} gradation - Gradation.
 * @param  {number} i - Gradation step currently being tested.
 * @return {number} Gradation step index.
 */
function findGradationStep(elapsed, now, gradation) {
	var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

	// If the threshold for moving from previous step
	// to this step is too high then return the previous step.
	if (elapsed < getThreshold(gradation[i - 1], gradation[i], now)) {
		return i - 1;
	}
	// If it's the last step of gradation then return it.
	if (i === gradation.length - 1) {
		return i;
	}
	// Move to the next step.
	return findGradationStep(elapsed, now, gradation, i + 1);
}

/**
 * Leaves only allowed gradation steps.
 * @param  {Object[]} gradation
 * @param  {string[]} units - Allowed time units.
 * @return {Object[]}
 */
function getAllowedSteps(gradation, units) {
	return gradation.filter(function (_ref) {
		var unit = _ref.unit;

		// If this step has a `unit` defined
		// then this `unit` must be in the list of `units` allowed.
		if (unit) {
			return units.indexOf(unit) >= 0;
		}
		// A gradation step is not required to specify a `unit`.
		// E.g. for Twitter gradation it specifies `format()` instead.
		return true;
	});
}
//# sourceMappingURL=grade.js.map

/***/ }),

/***/ "e5e4":
/***/ (function(module) {

module.exports = {"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."},"now":{"future":"in a moment","past":"just now"}};

/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f8da":
/***/ (function(module) {

module.exports = {"year":"{0} yr.","month":"{0} mo.","week":"{0} wk.","day":{"one":"{0} day","other":"{0} days"},"hour":"{0} hr.","minute":"{0} min.","second":"{0} sec.","now":"now"};

/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var filters_namespaceObject = {};
__webpack_require__.r(filters_namespaceObject);
__webpack_require__.d(filters_namespaceObject, "host", function() { return host; });
__webpack_require__.d(filters_namespaceObject, "timeAgo", function() { return filters_timeAgo; });
__webpack_require__.d(filters_namespaceObject, "booleanToBinary", function() { return booleanToBinary; });
__webpack_require__.d(filters_namespaceObject, "formattedDate", function() { return formattedDate; });
__webpack_require__.d(filters_namespaceObject, "usd", function() { return usd; });
__webpack_require__.d(filters_namespaceObject, "people", function() { return people; });
__webpack_require__.d(filters_namespaceObject, "currencyFormat", function() { return currencyFormat; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=5cee3840&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('div',{staticClass:"fake-menu",attrs:{"id":"nav"}},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Home")]),_vm._v(" |\n    "),_c('router-link',{attrs:{"to":"/fundraiser/254"}},[_vm._v("Fundraiser")]),_vm._v(" |\n    "),_c('router-link',{attrs:{"to":"/nonprofit/237069110"}},[_vm._v("Nonprofit")])],1),_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=5cee3840&

// EXTERNAL MODULE: ./src/assets/scss/main.scss?vue&type=style&index=0&lang=scss&
var mainvue_type_style_index_0_lang_scss_ = __webpack_require__("13a5");

// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=1&lang=scss&
var Appvue_type_style_index_1_lang_scss_ = __webpack_require__("5c64");

// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=2&lang=scss&
var Appvue_type_style_index_2_lang_scss_ = __webpack_require__("1564");

// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=3&lang=scss&
var Appvue_type_style_index_3_lang_scss_ = __webpack_require__("4b41");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue

var script = {}






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "App.vue"
/* harmony default export */ var App = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5d2593d3-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RideForGood/AppHeaderx.vue?vue&type=template&id=5fe8b024&scoped=true&
var AppHeaderxvue_type_template_id_5fe8b024_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"site-header",attrs:{"id":"site-header"}},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"header-top d-flex justify-content-between align-items-center py-1"},[_c('router-link',{staticClass:"logo-link",attrs:{"to":"/"}},[_c('img',{attrs:{"src":__webpack_require__("7b15"),"alt":"CalendarForGood"}})]),_c('div',{staticClass:"header-top__nav-section"},[_c('ul',{staticClass:"nav justify-content-end"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link px-1",attrs:{"to":"/register"}},[_vm._v("RegisterX")])],1),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link px-1 pr-0",attrs:{"to":"/login"}},[_vm._v("LoginX")])],1)]),_vm._m(0)])],1)]),_c('div',{staticClass:"header-nav bg-primary"},[_c('nav',{staticClass:"navbar navbar-expand-lg py-0"},[_c('div',{staticClass:"container"},[_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"navbar-content"}},[_c('ul',{staticClass:"navbar-nav w-100"},[_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Home")])],1),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("About Us")])],1),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/fundraiser/6"}},[_vm._v("Fundraiser")])],1),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Nonprofits")])],1),_c('li',{staticClass:"nav-item"},[_c('router-link',{staticClass:"nav-link",attrs:{"to":"/"}},[_vm._v("Contact Us")])],1),_c('li',{staticClass:"nav-item ml-auto"},[_c('router-link',{staticClass:"nav-link bg-secondary",attrs:{"to":"/"}},[_vm._v("Donate")])],1)])])])])])])}
var AppHeaderxvue_type_template_id_5fe8b024_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"nav social-nav justify-content-end"},[_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link bg-facebook",attrs:{"href":"#"}},[_c('i',{staticClass:"fab fa-facebook-f"}),_c('span',{staticClass:"sr-only"},[_vm._v("Facebook")])])]),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link bg-twitter",attrs:{"href":"#"}},[_c('i',{staticClass:"fab fa-twitter"}),_c('span',{staticClass:"sr-only"},[_vm._v("Twitter")])])]),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link bg-instagram",attrs:{"href":"#"}},[_c('i',{staticClass:"fab fa-instagram"}),_c('span',{staticClass:"sr-only"},[_vm._v("Instagram")])])])])}]


// CONCATENATED MODULE: ./src/components/RideForGood/AppHeaderx.vue?vue&type=template&id=5fe8b024&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RideForGood/AppHeaderx.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AppHeaderxvue_type_script_lang_js_ = ({
  name: 'AppHeaderx'
});
// CONCATENATED MODULE: ./src/components/RideForGood/AppHeaderx.vue?vue&type=script&lang=js&
 /* harmony default export */ var RideForGood_AppHeaderxvue_type_script_lang_js_ = (AppHeaderxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/RideForGood/AppHeaderx.vue?vue&type=style&index=0&id=5fe8b024&scoped=true&lang=scss&
var AppHeaderxvue_type_style_index_0_id_5fe8b024_scoped_true_lang_scss_ = __webpack_require__("4d4d");

// CONCATENATED MODULE: ./src/components/RideForGood/AppHeaderx.vue






/* normalize component */

var AppHeaderx_component = Object(componentNormalizer["a" /* default */])(
  RideForGood_AppHeaderxvue_type_script_lang_js_,
  AppHeaderxvue_type_template_id_5fe8b024_scoped_true_render,
  AppHeaderxvue_type_template_id_5fe8b024_scoped_true_staticRenderFns,
  false,
  null,
  "5fe8b024",
  null
  
)

AppHeaderx_component.options.__file = "AppHeaderx.vue"
/* harmony default export */ var AppHeaderx = (AppHeaderx_component.exports);
// EXTERNAL MODULE: ./node_modules/vue-datetime/dist/vue-datetime.js
var vue_datetime = __webpack_require__("859b");
var vue_datetime_default = /*#__PURE__*/__webpack_require__.n(vue_datetime);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__("6389");
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// EXTERNAL MODULE: ./node_modules/vue-meta/lib/vue-meta.js
var vue_meta = __webpack_require__("0a89");
var vue_meta_default = /*#__PURE__*/__webpack_require__.n(vue_meta);

// CONCATENATED MODULE: ./src/router.js





 // import { Store } from "../store"
// const store = Store()

external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(external_vue_router_default.a);
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_meta_default.a, {
  ssrAttribute: 'data-vue-meta-server-rendered'
}); // route-level code splitting

var Nonprofit = function Nonprofit() {
  return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, "8956"));
};

var HomePage = function HomePage() {
  return __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "f4a9"));
};

var ExplorePage = function ExplorePage() {
  return __webpack_require__.e(/* import() */ 47).then(__webpack_require__.bind(null, "73e9"));
};

var VolunteerPage = function VolunteerPage() {
  return __webpack_require__.e(/* import() */ 69).then(__webpack_require__.bind(null, "480d"));
};

var Fundraiser = function Fundraiser() {
  return __webpack_require__.e(/* import() */ 36).then(__webpack_require__.bind(null, "dba2"));
};

var Default404 = function Default404() {
  return __webpack_require__.e(/* import() */ 67).then(__webpack_require__.bind(null, "f00c"));
};

var MyAccount = function MyAccount() {
  return __webpack_require__.e(/* import() */ 68).then(__webpack_require__.bind(null, "fc1b"));
};

var CreateFundraiser = function CreateFundraiser() {
  return __webpack_require__.e(/* import() */ 66).then(__webpack_require__.bind(null, "0ac7"));
};

/* harmony default export */ var router = (new external_vue_router_default.a({
  mode: 'history',
  fallback: false,
  saveScrollPosition: true,
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    if (!to.name.includes('/donate')) {
      // Retain position if we are opening a donate (modal) route
      return {
        y: 0
      };
    }
  },
  routes: [{
    path: '/',
    name: 'home',
    component: HomePage
  }, {
    path: '/explore',
    name: 'explore',
    component: ExplorePage
  }, {
    path: '/volunteer',
    name: 'volunteer',
    component: VolunteerPage
  }, {
    path: '/nonprofit',
    redirect: '/explore'
  }, {
    path: '/nonprofit/:ein',
    name: 'nonprofit',
    component: Nonprofit
  }, {
    path: '/nonprofit/:ein/donate',
    name: 'nonprofit/donate',
    component: Nonprofit
  }, {
    path: '/fundraiser',
    redirect: '/explore'
  }, {
    path: '/fundraiser/create',
    name: 'fundraiser/create',
    component: CreateFundraiser
  }, {
    path: '/fundraiser/:id',
    name: 'fundraiser',
    component: Fundraiser
  }, {
    path: '/fundraiser/:id/donate',
    name: 'fundraiser/donate',
    component: Fundraiser
  }, {
    path: '/404',
    name: 'Default',
    component: Default404
  }, {
    path: '/account',
    redirect: '/account/settings'
  }, {
    path: '/account/:path',
    name: 'account',
    component: MyAccount
  }]
}));
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__("5880");
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("cebe");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue-axios"
var external_vue_axios_ = __webpack_require__("379e");
var external_vue_axios_default = /*#__PURE__*/__webpack_require__.n(external_vue_axios_);

// CONCATENATED MODULE: ./src/api/index.js




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(external_vue_axios_default.a, external_axios_default.a);
var baseURL = "https://vthon-vue-ssr.herokuapp.com/api";
var IRSSearchAPI = "https://irs-eomf-search-api.herokuapp.com/v1";
var commentAPI = "https://wt-9c78551d704acfbbfbeb0bb6cca86e9a-0.sandbox.auth0-extend.com/volunteerathon-comment";
/*
 * Fetch nonprofit. This will return the nonprofit data from the API, or
 * will default to the IRS search API service if it can't be found in the main system.
 * It will reject with a 404 if the EIN does not represent a valid nonprofit.
 */

function fetchNonprofit(ein) {
  return new Promise(function (resolve, reject) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(IRSSearchAPI, "/nonprofits/").concat(ein)).then(function (response) {
      resolve(response.data[0]);
    }).catch(function () {
      reject({
        code: 404
      });
    });
  });
}
/*
 * Fetch a fundraiser and return the data or a 404 code if not found.
 */

function fetchFundraiser(id) {
  return new Promise(function (resolve, reject) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/fundraisers?fundraiser_id=").concat(id)).then(function (response) {
      if (response.data.length) {
        resolve(response.data[0]);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch fundraisers for a given EIN. Return a 404 code if no fundraisers found.
 */

function fetchFundraisers(ein, page, limit) {
  var paginated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise(function (resolve, reject) {
    if (!paginated) {
      page = 1;
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/fundraisers?nonprofit_ein=").concat(ein, "&_limit=").concat(limit, "&_page=").concat(page++)).then(function (response) {
      if (response.data.length) {
        resolve(response.data);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch fundraisers for the explore page. Return a 404 code if no fundraisers found.
 */

function fetchExploreFundraisers(page, limit) {
  var paginated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return new Promise(function (resolve, reject) {
    if (!paginated) {
      page = 1;
    } // TODO: create algorithm to display varied fundraisers.


    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/fundraisers?&_limit=").concat(limit, "&_page=").concat(page++)).then(function (response) {
      if (response.data.length) {
        resolve(response.data);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch common data for large/editable chunks of content.
 */

function fetchCommonData(id) {
  return new Promise(function (resolve, reject) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/common")).then(function (response) {
      resolve(response.data);
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch updates for a given fundraiser. Return from most recent to least recent, paginating.
 */

function fetchUpdates(fundraiserId, page, limit) {
  var paginated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise(function (resolve, reject) {
    if (!paginated) {
      page = 1;
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/updates?_sort=timestamp&_order=desc&fundraiser_id=").concat(fundraiserId, "&_limit=").concat(limit, "&_page=").concat(page++)).then(function (response) {
      if (response.data.length) {
        resolve(response.data);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch comments for a given fundraiser. Return from most recent to least recent, paginating.
 */

function fetchComments(fundraiserId, page, limit) {
  var paginated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise(function (resolve, reject) {
    if (!paginated) {
      page = 1;
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/comments?fundraiser_id=").concat(fundraiserId, "&_limit=").concat(limit, "&_page=").concat(page++)).then(function (response) {
      if (response.data.length) {
        resolve(response.data);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch donations for a given nonprofit or fundraiser.
 */

function fetchDonations(query, page, limit) {
  var paginated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  return new Promise(function (resolve, reject) {
    if (!paginated) {
      page = 1;
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/donations?").concat(query, "&_limit=").concat(limit, "&_page=").concat(page++)).then(function (response) {
      if (response.data.length) {
        resolve(response.data);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch public donor data and sort them by total raised, descending.
 */

function fetchTopFundraisers() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var limit = arguments.length > 1 ? arguments[1] : undefined;
  var paginated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return new Promise(function (resolve, reject) {
    if (!paginated) {
      page = 1;
    }

    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/donors?_sort=total_raised&_order=desc&_limit=").concat(limit, "&_page=").concat(page++)).then(function (response) {
      if (response.data.length) {
        resolve(response.data);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Fetch data for the home page.
 */

function fetchHomePage() {
  return new Promise(function (resolve, reject) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/pages?page_name=home")).then(function (response) {
      if (response.data) {
        resolve(response.data[0]);
      } else {
        reject({
          code: 404
        });
      }
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Send comment to the API. This can be another API, therefore the .env var on top.
 */

function sendComment(commentBody, inReplyTo, fullName, fundraiserId, honeypot) {
  return new Promise(function (resolve, reject) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.post(commentAPI, {
      comment: commentBody,
      reply: inReplyTo,
      fullName: fullName,
      fundraiser_id: fundraiserId,
      fax: honeypot
    }).then(function (data) {
      resolve(data);
    }).catch(function (e) {
      reject(e);
    });
  });
}
/*
 * Send donation to the API. For now, mock a server response, randomly rejecting a donation.
 */

function sendDonation(donation) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (Math.random() > 0.5) {
        reject({
          code: 401
        });
      } else {
        resolve({
          data: {
            donation: donation
          }
        });
      }
    }, 3000);
  });
}
/*
 * Mock a new user creation in the store. This should actually perform an API call.
 */

function createUser(email, password) {
  return new Promise(function (resolve, reject) {
    resolve({
      data: {
        email: {
          email: email
        }
      }
    });
  });
}
/*
 * Authenticate user. Temporarily allow a given password and return data from the DB for that user.
 */

function authenticateUser(email, password) {
  return new Promise(function (resolve, reject) {
    // temporarily allow any user
    if (password === 'qqQQ11!!') {
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/users_protected?email=").concat(email)).then(function (data) {
        if (data.data.length) {
          resolve(data.data[0]);
        } else {
          resolve(null);
        }
      }).catch(function (e) {
        console.log('err: ', e);
        reject(e);
      });
    } else {
      resolve({
        code: 401
      });
    }
  });
}
/*
 * Submit a password change request to the backend.
 */

function submitPasswordChangeRequest(form) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call. Reject a portion of the requests.
    setTimeout(function () {
      // reject if password is incorrect
      if (form.currentPassword !== 'qqQQ11!!') {
        reject({
          code: 401
        });
      }

      if (form.currentPassword === form.password) {
        reject({
          message: 'Please use a different password'
        });
      }

      if (Math.random() > 0.9) {
        reject({
          message: 'Remote API error'
        });
      }

      resolve();
    }, 1000);
  });
}
/*
 * Find if a given email is already in use.
 * Note for the backend: this should return only the email and the service used.
 * It also shouldn't return something under /users, only if the query is successful.
 */

function lookUpEmail(email) {
  return new Promise(function (resolve, reject) {
    external_commonjs_vue_commonjs2_vue_root_Vue_default.a.axios.get("".concat(baseURL, "/users_public?email=").concat(email)).then(function (data) {
      if (data.data.length) {
        resolve(data.data[0]);
      } else {
        resolve(null);
      }
    }).catch(function (e) {
      console.log('err: ', e);
      reject(e);
    });
  });
}
/*
 * Remove a payment method.
 * TODO: the complete call. This also needs to be protected behind auth and restricted to the user.
 */

function removePaymentMethod(id) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call. Randomly reject some calls.
    setTimeout(function () {
      if (Math.random > 0.5) {
        reject({
          code: 401
        });
      }

      resolve(id);
    }, 4000);
  });
}
/*
 * Remove a payment method.
 * TODO: the complete call. This also needs to be protected behind auth and restricted to the user.
 */

function updateUserField(field, value) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve(value);
    }, 1000);
  });
}
/*
 * Send a nonprofit form.
 * TODO: the complete call. This also requires a second page of data for the fundraiser to be created.
 */

function submitNonprofitForm(form) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve(form);
    }, 1000);
  });
}
/*
 * Set a temporary password
 */

function setTemporaryPassword(email) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve(email);
    }, 1000);
  });
}
/*
 * Save a specific field
 */

function saveInlineField(location, route, value) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve({
        location: location,
        value: value
      });
    }, 1000);
  });
}
/*
 * Save an image to the user's library.
 */

function saveImageField(location, route, blob) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      console.log('save image: ', route.fullPath + blob);
      resolve({
        location: location
      });
    }, 1000);
  });
}
/*
 * Remove an image.
 */

function removeImage(location, route, src) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve({
        location: location
      });
    }, 1000);
  });
}
/*
 * Remove a video.
 */

function removeVideo(location, route, youTubeID) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve({
        location: location
      });
      console.log('remove video: ', route.fullPath + youTubeID);
    }, 1000);
  });
}
/*
 * Add a video.
 */

function addVideo(location, route, youTubeID) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve({
        location: location
      });
      console.log('add video: ', route.fullPath + youTubeID);
    }, 1000);
  });
}
/*
 * Update a video.
 */

function updateVideo(location, route, oldSrc, newSrc) {
  return new Promise(function (resolve, reject) {
    // Emulate an API call.
    // Randomly reject some calls
    setTimeout(function () {
      if (Math.random() > 0.95) {
        reject({
          code: 401
        });
      }

      resolve({
        location: location
      });
      console.log('update video: ', "".concat(route.fullPath, "/").concat(oldSrc));
    }, 1000);
  });
}
// CONCATENATED MODULE: ./src/store/actions.js


/* harmony default export */ var actions = ({
  /**
   * Fetch nonprofit for the given EIN.
   * Store the response or reject the promise if not found.
   * Same for most functions below.
   */
  FETCH_NONPROFIT: function FETCH_NONPROFIT(_ref, _ref2) {
    var commit = _ref.commit,
        dispatch = _ref.dispatch,
        state = _ref.state;
    var ein = _ref2.ein;
    return new Promise(function (resolve, reject) {
      return fetchNonprofit(ein).then(function (data) {
        commit('ADD_NEW_NONPROFIT', {
          nonprofit: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  FETCH_FUNDRAISER: function FETCH_FUNDRAISER(_ref3, _ref4) {
    var commit = _ref3.commit,
        dispatch = _ref3.dispatch,
        state = _ref3.state;
    var id = _ref4.id;
    return new Promise(function (resolve, reject) {
      return fetchFundraiser(id).then(function (data) {
        commit('SET_FUNDRAISER', {
          fundraiser: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  FETCH_FUNDRAISERS: function FETCH_FUNDRAISERS(_ref5, _ref6) {
    var commit = _ref5.commit,
        dispatch = _ref5.dispatch,
        state = _ref5.state;
    var ein = _ref6.ein;
    return new Promise(function (resolve, reject) {
      return fetchFundraisers(ein).then(function (data) {
        commit('SET_FUNDRAISERS', {
          fundraisers: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  FETCH_COMMON_DATA: function FETCH_COMMON_DATA(_ref7) {
    var commit = _ref7.commit,
        dispatch = _ref7.dispatch,
        state = _ref7.state;
    return new Promise(function (resolve, reject) {
      return fetchCommonData().then(function (data) {
        commit('SET_COMMON_DATA', {
          common: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },

  /**
   * Fetch updates for a given fundraiser.
   * If no data is returned, delete the stored object (meaning the fundraiser doesn't have any updates).
   */
  FETCH_UPDATES: function FETCH_UPDATES(_ref8, _ref9) {
    var commit = _ref8.commit,
        dispatch = _ref8.dispatch,
        state = _ref8.state;
    var fundraiserId = _ref9.fundraiserId,
        paginated = _ref9.paginated;
    return new Promise(function (resolve, reject) {
      return fetchUpdates(fundraiserId, state.updates.current, state.updates.limit, paginated).then(function (data) {
        commit('ADD_UPDATES', {
          updates: data
        });
        resolve(data);
      }).catch(function (err) {
        commit('ADD_UPDATES', {
          updates: []
        });
        reject(err);
      });
    });
  },
  FETCH_COMMENTS: function FETCH_COMMENTS(_ref10, _ref11) {
    var commit = _ref10.commit,
        dispatch = _ref10.dispatch,
        state = _ref10.state;
    var fundraiserId = _ref11.fundraiserId,
        paginated = _ref11.paginated;
    return new Promise(function (resolve, reject) {
      return fetchComments(fundraiserId, state.comments.current, state.comments.limit, paginated).then(function (data) {
        commit('ADD_COMMENTS', {
          comments: data
        });
        resolve(data);
      }).catch(function (err) {
        commit('ADD_COMMENTS', {
          comments: []
        });
        reject(err);
      });
    });
  },

  /**
   * Fetch donors data.
   * The query is modified depending on the target: if it's nonprofit or a fundraiser.
   * If no data is returned, delete the stored object.
   */
  FETCH_DONATIONS: function FETCH_DONATIONS(_ref12, _ref13) {
    var commit = _ref12.commit,
        dispatch = _ref12.dispatch,
        state = _ref12.state;
    var fundraiserId = _ref13.fundraiserId,
        nonprofitEIN = _ref13.nonprofitEIN,
        paginated = _ref13.paginated;
    return new Promise(function (resolve, reject) {
      var query = '';

      if (fundraiserId) {
        query = "fundraiser_id=".concat(fundraiserId);
      }

      if (nonprofitEIN) {
        query = "nonprofit_ein=".concat(nonprofitEIN);
      }

      return fetchDonations(query, state.donations.current, state.donations.limit, paginated).then(function (data) {
        commit('ADD_DONATIONS', {
          donations: data
        });
        resolve(data);
      }).catch(function (err) {
        commit('ADD_DONATIONS', {
          donations: []
        });
        reject(err);
      });
    });
  },
  FETCH_TOP_FUNDRAISERS: function FETCH_TOP_FUNDRAISERS(_ref14, _ref15) {
    var commit = _ref14.commit,
        dispatch = _ref14.dispatch,
        state = _ref14.state;
    var paginated = _ref15.paginated;
    return new Promise(function (resolve, reject) {
      return fetchTopFundraisers(state.topFundraisers.current, state.topFundraisers.limit, paginated).then(function (data) {
        commit('ADD_TOP_FUNDRAISERS', {
          fundraisers: data
        });
        resolve(data);
      }).catch(function (err) {
        commit('ADD_TOP_FUNDRAISERS', {
          fundraisers: []
        });
        reject(err);
      });
    });
  },
  FETCH_HOME_PAGE: function FETCH_HOME_PAGE(_ref16) {
    var commit = _ref16.commit,
        dispatch = _ref16.dispatch,
        state = _ref16.state;
    return new Promise(function (resolve, reject) {
      return fetchHomePage().then(function (data) {
        commit('SET_HOME_PAGE', {
          home: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  FETCH_EXPLORE_FUNDRAISERS: function FETCH_EXPLORE_FUNDRAISERS(_ref17) {
    var commit = _ref17.commit,
        dispatch = _ref17.dispatch,
        state = _ref17.state;
    return new Promise(function (resolve, reject) {
      return fetchExploreFundraisers().then(function (data) {
        commit('SET_EXPLORE_FUNDRAISERS', {
          fundraisers: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },

  /**
   * This just stores the donation trigger, to be further sent with the donation to the backend.
   */
  START_DONATION: function START_DONATION(_ref18, _ref19) {
    var commit = _ref18.commit,
        dispatch = _ref18.dispatch,
        state = _ref18.state;
    var initiator = _ref19.initiator;
    commit('START_DONATION', {
      initiator: initiator
    });
  },
  WRITE_COMMENT: function WRITE_COMMENT(_ref20, _ref21) {
    var commit = _ref20.commit,
        dispatch = _ref20.dispatch,
        state = _ref20.state;
    var comment = _ref21.comment,
        reply = _ref21.reply,
        fullName = _ref21.fullName,
        fundraiserId = _ref21.fundraiserId,
        honeypot = _ref21.honeypot;
    return new Promise(function (resolve, reject) {
      return sendComment(comment, reply, fullName, fundraiserId, honeypot).then(function (data) {
        commit('UPDATE_COMMENTS', {
          comment: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  SEND_DONATION: function SEND_DONATION(_ref22, _ref23) {
    var commit = _ref22.commit,
        dispatch = _ref22.dispatch,
        state = _ref22.state;
    var donation = _ref23.donation;
    return new Promise(function (resolve, reject) {
      return sendDonation(donation).then(function (data) {
        commit('UPDATE_DONATION', {
          donation: data
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },

  /**
   * This should create a new user. For now, create a fake user and authenticate it.
   */
  CREATE_USER: function CREATE_USER(_ref24, _ref25) {
    var commit = _ref24.commit,
        dispatch = _ref24.dispatch,
        state = _ref24.state;
    var email = _ref25.email,
        password = _ref25.password,
        firstname = _ref25.firstname,
        lastname = _ref25.lastname;
    return new Promise(function (resolve, reject) {
      return createUser({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
      }).then(function (data) {
        if (data && data.code !== 401) {
          // temporarily use a standard email to authentica a newly created user.
          dispatch('AUTHENTICATE_USER', {
            email: 'john@doe.com',
            password: 'qqQQ11!!'
          }).then(function (data) {
            if (data && data.code !== 401) {
              resolve(data);
            } else {
              resolve({
                code: 401
              });
            }
          }).catch(function (err) {
            console.log(err);
          });
        } else {
          resolve(null);
        }
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  AUTHENTICATE_USER: function AUTHENTICATE_USER(_ref26, _ref27) {
    var commit = _ref26.commit,
        dispatch = _ref26.dispatch,
        state = _ref26.state;
    var email = _ref27.email,
        password = _ref27.password;
    return new Promise(function (resolve, reject) {
      return authenticateUser(email, password).then(function (data) {
        if (data && data.code !== 401) {
          commit('AUTHENTICATE_USER', {
            data: data
          });
          setTimeout(function () {
            resolve(data);
          }, 3000);
        } else {
          setTimeout(function () {
            resolve(null);
          }, 3000);
        }
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  LOOK_UP_EMAIL: function LOOK_UP_EMAIL(_ref28, _ref29) {
    var commit = _ref28.commit,
        dispatch = _ref28.dispatch,
        state = _ref28.state;
    var email = _ref29.email;
    return new Promise(function (resolve, reject) {
      return lookUpEmail(email).then(function (data) {
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  REMOVE_PAYMENT_METHOD: function REMOVE_PAYMENT_METHOD(_ref30, _ref31) {
    var commit = _ref30.commit,
        dispatch = _ref30.dispatch,
        state = _ref30.state;
    var id = _ref31.id;
    return new Promise(function (resolve, reject) {
      return removePaymentMethod(id).then(function (id) {
        commit('REMOVE_PAYMENT_METHOD', {
          id: id
        });
        resolve(id);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  UPDATE_USER_FIELD: function UPDATE_USER_FIELD(_ref32, _ref33) {
    var commit = _ref32.commit,
        dispatch = _ref32.dispatch,
        state = _ref32.state;
    var field = _ref33.field,
        value = _ref33.value;
    return new Promise(function (resolve, reject) {
      return updateUserField(field, value).then(function (value) {
        commit('UPDATE_USER_FIELD', {
          field: field,
          value: value
        });
        resolve(value);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  SUBMIT_NONPROFIT_FORM: function SUBMIT_NONPROFIT_FORM(_ref34, _ref35) {
    var commit = _ref34.commit,
        dispatch = _ref34.dispatch,
        state = _ref34.state;
    var form = _ref35.form;
    return new Promise(function (resolve, reject) {
      return submitNonprofitForm(form).then(function (data) {
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  SUBMIT_PASSWORD_CHANGE_REQUEST: function SUBMIT_PASSWORD_CHANGE_REQUEST(_ref36, _ref37) {
    var commit = _ref36.commit,
        dispatch = _ref36.dispatch,
        state = _ref36.state;
    var form = _ref37.form;
    return new Promise(function (resolve, reject) {
      submitPasswordChangeRequest(form).then(function () {
        resolve();
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  SET_TEMPORARY_PASSWORD: function SET_TEMPORARY_PASSWORD(_ref38, _ref39) {
    var commit = _ref38.commit,
        dispatch = _ref38.dispatch,
        state = _ref38.state;
    var email = _ref39.email;
    return new Promise(function (resolve, reject) {
      setTemporaryPassword(email).then(function () {
        resolve();
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  SAVE_INLINE_FIELD: function SAVE_INLINE_FIELD(_ref40, _ref41) {
    var commit = _ref40.commit,
        dispatch = _ref40.dispatch,
        state = _ref40.state;
    var location = _ref41.location,
        value = _ref41.value;
    return new Promise(function (resolve, reject) {
      saveInlineField(location, value).then(function (data) {
        commit('SAVE_INLINE_FIELD', {
          location: location,
          value: value
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  SAVE_IMAGE_FIELD: function SAVE_IMAGE_FIELD(_ref42, _ref43) {
    var commit = _ref42.commit,
        dispatch = _ref42.dispatch,
        state = _ref42.state;
    var location = _ref43.location,
        route = _ref43.route,
        blob = _ref43.blob;
    return new Promise(function (resolve, reject) {
      saveImageField(location, route, blob).then(function (data) {
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  REMOVE_IMAGE: function REMOVE_IMAGE(_ref44, _ref45) {
    var commit = _ref44.commit,
        dispatch = _ref44.dispatch,
        state = _ref44.state;
    var location = _ref45.location,
        route = _ref45.route,
        id = _ref45.id;
    return new Promise(function (resolve, reject) {
      removeImage(location, route, id).then(function (data) {
        commit('REMOVE_IMAGE', {
          location: location,
          id: id
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  REMOVE_VIDEO: function REMOVE_VIDEO(_ref46, _ref47) {
    var commit = _ref46.commit,
        dispatch = _ref46.dispatch,
        state = _ref46.state;
    var location = _ref47.location,
        route = _ref47.route,
        id = _ref47.id;
    return new Promise(function (resolve, reject) {
      removeVideo(location, route, id).then(function (data) {
        commit('REMOVE_VIDEO', {
          location: location,
          id: id
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  ADD_VIDEO: function ADD_VIDEO(_ref48, _ref49) {
    var commit = _ref48.commit,
        dispatch = _ref48.dispatch,
        state = _ref48.state;
    var location = _ref49.location,
        route = _ref49.route,
        youTubeID = _ref49.youTubeID;
    return new Promise(function (resolve, reject) {
      addVideo(location, route, youTubeID).then(function (data) {
        commit('ADD_VIDEO', {
          location: location,
          youTubeID: youTubeID
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  },
  UPDATE_VIDEO: function UPDATE_VIDEO(_ref50, _ref51) {
    var commit = _ref50.commit,
        dispatch = _ref50.dispatch,
        state = _ref50.state;
    var location = _ref51.location,
        route = _ref51.route,
        oldSrc = _ref51.oldSrc,
        newSrc = _ref51.newSrc;
    return new Promise(function (resolve, reject) {
      updateVideo(location, route, oldSrc, newSrc).then(function (data) {
        commit('UPDATE_VIDEO', {
          location: location,
          oldSrc: oldSrc,
          newSrc: newSrc
        });
        resolve(data);
      }).catch(function (err) {
        reject(err);
      });
    });
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// CONCATENATED MODULE: ./src/store/mutations.js



/* harmony default export */ var mutations = ({
  SET_HOME_PAGE: function SET_HOME_PAGE(state, _ref) {
    var home = _ref.home;
    state.home = home;
  },
  SET_NONPROFIT: function SET_NONPROFIT(state, _ref2) {
    var nonprofit = _ref2.nonprofit;
    state.nonprofit = nonprofit;
  },
  ADD_NEW_NONPROFIT: function ADD_NEW_NONPROFIT(state, _ref3) {
    var nonprofit = _ref3.nonprofit;
    nonprofit['data'] = {};
    state.nonprofit[nonprofit.EIN] = nonprofit;
  },
  SET_FUNDRAISER: function SET_FUNDRAISER(state, _ref4) {
    var fundraiser = _ref4.fundraiser;
    state.fundraiser = fundraiser;
  },
  ADD_UPDATES: function ADD_UPDATES(state, _ref5) {
    var updates = _ref5.updates;
    state.updates.data = state.updates.data.concat(updates);
    state.updates.current++;
  },
  RESET_FUNDRAISERS: function RESET_FUNDRAISERS(state) {
    state.fundraisers.data = [];
  },
  ADD_COMMENTS: function ADD_COMMENTS(state, _ref6) {
    var comments = _ref6.comments;
    state.comments.data = state.comments.data.concat(comments);
    state.comments.current++;
  },

  /**
   * Add fetched data to store.
   * If no data is returned, delete the current stored data.
   */
  ADD_DONATIONS: function ADD_DONATIONS(state, _ref7) {
    var donations = _ref7.donations;

    if (donations.length) {
      state.donations.data = state.donations.data.concat(donations);
      state.donations.current++;
    } else {
      state.donations.data = [];
      state.donations.current = 1;
    }
  },
  ADD_TOP_FUNDRAISERS: function ADD_TOP_FUNDRAISERS(state, _ref8) {
    var fundraisers = _ref8.fundraisers;
    state.topFundraisers.data = state.topFundraisers.data.concat(fundraisers);
    state.topFundraisers.current++;
  },
  SET_FUNDRAISERS: function SET_FUNDRAISERS(state, _ref9) {
    var fundraisers = _ref9.fundraisers;
    state.fundraisers.data = fundraisers;
  },
  SET_EXPLORE_FUNDRAISERS: function SET_EXPLORE_FUNDRAISERS(state, _ref10) {
    var fundraisers = _ref10.fundraisers;
    state.explore.fundraisers.data = fundraisers;
  },
  SET_COMMON_DATA: function SET_COMMON_DATA(state, _ref11) {
    var common = _ref11.common;
    state.common = common;
  },
  UPDATE_COMMENTS: function UPDATE_COMMENTS(state, _ref12) {
    var comment = _ref12.comment;
    console.log(comment);
  },
  UPDATE_DONATION: function UPDATE_DONATION(state, _ref13) {
    var donation = _ref13.donation;
    state.userActions.donation.status = 'completed';
    state.userActions.donation.email = donation.data.donation.email;
  },
  AUTHENTICATE_USER: function AUTHENTICATE_USER(state, data) {
    state.user = data.data;
    state.user.loggedIn = true;
  },
  START_DONATION: function START_DONATION(state, _ref14) {
    var initiator = _ref14.initiator;
    state.userActions.donation.status = 'started';
    state.userActions.donation.amount = initiator.givingLevel ? initiator.givingLevel.amount : state.userActions.donation.amount;
    state.userActions.donation.initiator = initiator;
    state.userActions.donation.fundraiserId = initiator.fundraiserId;
    state.userActions.donation.nonprofitEin = initiator.nonprofitEin;
  },
  LOG_OFF: function LOG_OFF(state) {
    // TODO: also delete all the cookies when logging user out
    state.user = {};
    state.user.loggedIn = false;
  },
  STORE_REQUEST: function STORE_REQUEST(state, req) {
    state.extra.request = req;
  },
  SET_USER_ACCOUNT_DATA: function SET_USER_ACCOUNT_DATA(state, _ref15) {
    var userData = _ref15.userData;
    state.user.data = userData;
  },
  REMOVE_PAYMENT_METHOD: function REMOVE_PAYMENT_METHOD(state, _ref16) {
    var id = _ref16.id;
    state.user.payment_methods.splice(state.user.payment_methods.findIndex(function (item) {
      return item.id === id;
    }), 1);
  },
  UPDATE_USER_FIELD: function UPDATE_USER_FIELD(state, _ref17) {
    var field = _ref17.field,
        value = _ref17.value;
    state.user[field] = value;
  },
  SAVE_INLINE_FIELD: function SAVE_INLINE_FIELD(state, _ref18) {
    var location = _ref18.location,
        value = _ref18.value;
    mutations_nestedObjectSet(state, location, value);
  },
  REMOVE_IMAGE: function REMOVE_IMAGE(state, _ref19) {
    var location = _ref19.location,
        id = _ref19.id;
    mutations_nestedObjectRemove(state, location, id);
  },
  REMOVE_VIDEO: function REMOVE_VIDEO(state, _ref20) {
    var location = _ref20.location,
        id = _ref20.id;
    mutations_nestedObjectRemove(state, location, id);
  },
  ADD_VIDEO: function ADD_VIDEO(state, _ref21) {
    var location = _ref21.location,
        youTubeID = _ref21.youTubeID;
    mutations_nestedObjectAdd(state, location, {
      type: 'video',
      src: youTubeID
    });
  },
  UPDATE_VIDEO: function UPDATE_VIDEO(state, _ref22) {
    var location = _ref22.location,
        oldSrc = _ref22.oldSrc,
        newSrc = _ref22.newSrc;
    mutations_nestedObjectRemove(state, location, oldSrc);
    mutations_nestedObjectAdd(state, location, {
      type: 'video',
      src: newSrc
    });
  }
});
/*
 * Helper function that dynamically creates the nested object path to be saved.
 */

/* eslint-disable */

var getNestedObject = function getNestedObject(obj, path) {
  var keys = path.split(".");
  var lastKey = keys.pop();
  var lastObj = keys.reduce(function (obj, key) {
    return obj[key] = obj[key] || {};
  }, obj);
  return {
    lastObj: lastObj,
    lastKey: lastKey
  };
};
/* eslint-enable */


var mutations_nestedObjectRemove = function nestedObjectRemove(obj, path, id) {
  var _getNestedObject = getNestedObject(obj, path),
      lastObj = _getNestedObject.lastObj,
      lastKey = _getNestedObject.lastKey;

  var newObj = [];

  if (lastObj.hasOwnProperty(lastKey)) {
    if (Array.isArray(lastObj[lastKey])) {
      newObj = lastObj[lastKey].filter(function (item) {
        return item.id !== id;
      });
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(lastObj, lastKey, newObj);
    } else {
      external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(lastObj, lastKey, {});
    }
  } else {
    console.log('nothing to remove');
  }
};

var mutations_nestedObjectSet = function nestedObjectSet(obj, path, value) {
  var _getNestedObject2 = getNestedObject(obj, path),
      lastObj = _getNestedObject2.lastObj,
      lastKey = _getNestedObject2.lastKey;

  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(lastObj, lastKey, value);
};

var mutations_nestedObjectAdd = function nestedObjectAdd(obj, path, value) {
  var _getNestedObject3 = getNestedObject(obj, path),
      lastObj = _getNestedObject3.lastObj,
      lastKey = _getNestedObject3.lastKey;

  var newObj = [];

  if (lastObj.hasOwnProperty(lastKey)) {
    newObj = lastObj[lastKey].concat(value);
  } else {
    newObj.push(value);
  }

  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.set(lastObj, lastKey, newObj);
};
// CONCATENATED MODULE: ./src/store/index.js




external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(external_vuex_default.a);
var baseUrl = "/";
/* harmony default export */ var store = (new external_vuex_default.a.Store({
  state: {
    fullPath: '',
    common: {},
    nonprofit: {
      "43138428": {
        EIN: 43138428,
        NAME: 'MELROSE MASSACHUSETTS TELEVISION',
        STREET: '360 MAIN ST',
        CITY: 'MELROSE',
        STATE: 'MA',
        ZIP: '02176-4623',
        ACTIVITY: 'Described in section 170(b)1)(a)(vi) of the Code; Radio or television broadcasting',
        CLASSIFICATION: 'Charitable Organization',
        DEDUCTIBILITY: 1,
        SUBSECTION: 3,
        NTEE_CD: '0',
        SORT_NAME: '0',
        validated: true,
        data: {
          name: 'MELROSE MASSACHUSETTS TELEVISION',
          hero: {
            src: "".concat(baseUrl, "img/5672087be97cb2bb8e59ad897a14ea35.jpg")
          },
          default_hero: {
            src: "".concat(baseUrl, "img/nonoprofit-base-hero.jpg")
          },
          about: 'We are an international confederation of 17 like-minded charitable organizations working together to bring about lasting solutions to poverty and injustice. We work with partners around the world to make a difference in the lives of people in need.',
          slogan: '',
          website: 'https://www.oxfam.org',
          city: 'MELROSE, MA',
          email: 'info@oxfam.org',
          ein: '20-1059569',
          background_cover: "".concat(baseUrl, "img/nonprofit-base-hero.jpg"),
          media: [{
            id: '1',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-1.jpg")
          }, {
            id: '2',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-2.jpg")
          }, {
            id: '3',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-3.jpg")
          }, {
            id: '4',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-4.png")
          }, {
            id: '5',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-5.png")
          }, {
            id: '6',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-6.jpg")
          }, {
            id: '7',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-7.jpg")
          }, {
            id: '8',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-8.jpg")
          }, {
            id: '9',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-9.jpg")
          }, {
            id: '10',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-10.jpg")
          }, {
            id: '11',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-11.jpg")
          }, {
            id: '12',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-12.jpg")
          }, {
            id: '13',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-13.jpg")
          }, {
            id: '14',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-14.jpg")
          }, {
            id: '15',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-15.jpg")
          }, {
            id: '16',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-16.jpg")
          }, {
            id: '17',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-17.jpg")
          }, {
            id: '18',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-18.png")
          }, {
            id: '19',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-19.jpg")
          }, {
            id: '20',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-20.jpg")
          }, {
            id: '21',
            type: 'video',
            src: 'qXPzeJQua5k'
          }, {
            id: '22',
            type: 'video',
            src: 'lE-y7FuJT8E'
          }]
        }
      },
      "237069110": {
        EIN: 237069110,
        NAME: 'OXFAM AMERICA',
        STREET: '360 MAIN ST',
        CITY: 'MELROSE',
        STATE: 'MA',
        ZIP: '02176-4623',
        ACTIVITY: 'Described in section 170(b)1)(a)(vi) of the Code; Radio or television broadcasting',
        CLASSIFICATION: 'Charitable Organization',
        DEDUCTIBILITY: 1,
        SUBSECTION: 3,
        NTEE_CD: '0',
        SORT_NAME: '0',
        validated: true,
        data: {
          name: 'OXFAM AMERICA',
          hero: {
            src: "".concat(baseUrl, "img/nonoprofit-base-hero-oxfam.jpg")
          },
          default_hero: {
            src: "".concat(baseUrl, "img/nonoprofit-base-hero.jpg")
          },
          about: 'We are an international confederation of 17 like-minded charitable organizations working together to bring about lasting solutions to poverty and injustice. We work with partners around the world to make a difference in the lives of people in need.',
          slogan: '',
          website: 'https://www.oxfam.org',
          city: 'MELROSE, MA',
          email: 'info@oxfam.org',
          ein: '20-1059569',
          background_cover: "".concat(baseUrl, "img/nonprofit-base-hero.jpg"),
          logo: {
            src: "".concat(baseUrl, "img/nonprofit-base-logo.png")
          },
          media: [{
            id: '1',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-1.jpg")
          }, {
            id: '2',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-2.jpg")
          }, {
            id: '3',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-3.jpg")
          }, {
            id: '4',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-4.png")
          }, {
            id: '5',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-5.png")
          }, {
            id: '6',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-6.jpg")
          }, {
            id: '7',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-7.jpg")
          }, {
            id: '8',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-8.jpg")
          }, {
            id: '9',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-9.jpg")
          }, {
            id: '10',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-10.jpg")
          }, {
            id: '11',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-11.jpg")
          }, {
            id: '12',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-12.jpg")
          }, {
            id: '13',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-13.jpg")
          }, {
            id: '14',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-14.jpg")
          }, {
            id: '15',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-15.jpg")
          }, {
            id: '16',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-16.jpg")
          }, {
            id: '17',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-17.jpg")
          }, {
            id: '18',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-18.png")
          }, {
            id: '19',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-19.jpg")
          }, {
            id: '20',
            type: 'image',
            src: "".concat(baseUrl, "img/nonprofit-image-20.jpg")
          }, {
            id: '21',
            type: 'video',
            src: 'qXPzeJQua5k'
          }, {
            id: '22',
            type: 'video',
            src: 'lE-y7FuJT8E'
          }]
        }
      }
    },
    fundraiser: {
      fundraiser_id: 254,
      user_id: 721,
      nonprofit_ein: 43138428,
      name: 'Tutoring children for the future',
      description: 'Praesent bibendum gravida diam faucibus lobortis. Nulla a leo id mauris fringilla dictum dictum vitae ligula. Etiam maximus turpis vel dolor venenatis malesuada. Duis eget rutrum elit. Fusce elementum tempor condimentum. Cras feugiat consectetur sem, non scelerisque nisi. Donec eu magna a ante imperdiet accumsan. In tempus laoreet mi aliquet fermentum. Nullam nec cursus est. Nulla dapibus dolor fermentum hendrerit lobortis. ',
      intro_text: '<p>Mauris nec pharetra massa. Nulla facilisi. Nulla at scelerisque ante. Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Quisque feugiat gravida faucibus. Praesent eget nisl bibendum, suscipit odio vitae, euismod nisl. Ut varius aliquam semper. Quisque ac aliquam leo. Suspendisse et rhoncus neque.</p><p>Ut eleifend leo eu est lobortis, nec lobortis magna fringilla. Nullam nec condimentum libero. Vivamus et tristique est, vitae venenatis tellus. Duis tempus nibh justo, at mattis turpis rhoncus ut. Morbi ac est id ex feugiat lacinia a sit amet arcu. Maecenas sit amet eros tellus. Ut sit amet mattis neque. Nunc leo risus, vulputate pellentesque interdum facilisis, suscipit ac sapien. Morbi volutpat ac turpis a blandit. Maecenas ultricies quis nunc vitae aliquam.</p><p>Nulla facilisi. Proin congue imperdiet volutpat. Vivamus quis enim a neque consequat dictum et sed lacus. Vestibulum aliquam vel metus non egestas. Duis ligula lacus, tincidunt a quam non, porta cursus elit. Nunc at fermentum quam. Duis ut elit justo. In eget pulvinar sapien. Cras interdum orci a pellentesque faucibus. Maecenas nec enim ac velit commodo faucibus. Nam vitae lorem sollicitudin, sodales eros ac, congue nibh. Aenean laoreet semper convallis. Vestibulum pharetra, purus non elementum convallis, lectus neque consequat magna, et dictum metus ante non lacus. Quisque scelerisque ex sit amet euismod semper.</p><p>Integer sed ante vitae arcu luctus ultrices. Donec iaculis est ut turpis malesuada, eu bibendum libero malesuada. Sed et fermentum est. Sed sit amet consequat nibh. Mauris posuere mi eu sapien vestibulum, ac viverra urna dictum. Vestibulum finibus enim et pharetra fringilla. Curabitur molestie, dui vitae lobortis dignissim, elit massa facilisis arcu, a lobortis odio felis et sem. Mauris lectus quam, varius in scelerisque ac, condimentum eget nisi. Sed ac vulputate purus, sit amet aliquam lacus. Sed eget euismod arcu. Quisque maximus, sapien at blandit vestibulum, lectus purus sagittis dui, vitae lacinia arcu sapien ut urna. Nunc laoreet mi eget libero condimentum ultricies. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p><p>Nam quis ligula nibh. Duis viverra at diam a sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque ullamcorper nisl et metus dictum viverra. Nam vel iaculis est. Nunc elementum in mauris convallis auctor. Mauris ac enim felis. Sed eget venenatis purus. Nam varius mattis massa.</p><p>Integer rhoncus pretium molestie. Morbi bibendum iaculis volutpat. Morbi id velit lobortis, porttitor neque et, ornare turpis. Sed at tincidunt enim, nec lobortis sapien. Donec posuere, ante at rhoncus euismod, enim libero porta turpis, vel blandit lacus lacus tempus urna. Ut quis lacus eleifend, interdum lorem at, sollicitudin ligula. Suspendisse vel lectus consectetur, gravida dui blandit, molestie erat. Phasellus sit amet mauris sapien. Curabitur vitae tempor elit. Duis id ultricies leo. Nunc quam erat, euismod viverra facilisis eu, rutrum viverra arcu. Quisque porta, orci eget congue hendrerit, quam libero porta diam, vel dictum mauris risus eget nibh. Ut at mi risus. Aliquam in dignissim augue. Vestibulum eros leo, sollicitudin consectetur ipsum ac, rutrum lacinia tortor.</p><p>Nam ullamcorper arcu sed euismod cursus. Nam pretium ultricies lacus. Aliquam auctor diam velit, id consectetur nulla ultrices a. Maecenas pretium arcu in placerat rutrum. Morbi fringilla lectus id magna ullamcorper, eget gravida odio hendrerit. Vivamus non aliquet eros. Phasellus eget lectus at libero tincidunt sollicitudin. Nam interdum vitae justo molestie imperdiet.</p>',
      picture: "".concat(baseUrl, "img/fundraiser-hero-3x2.jpg"),
      data: {
        media: [{
          id: '1',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-3x2.jpg")
        }, {
          id: '2',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-1.jpg")
        }, {
          id: '3',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-1x1.jpg")
        }, {
          id: '4',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-2.jpg")
        }, {
          id: '5',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-4.jpg")
        }, {
          id: '6',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-4x3.jpg")
        }, {
          id: '7',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-5.jpg")
        }, {
          id: '8',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-9x16.jpg")
        }, {
          id: '9',
          type: 'image',
          src: "".concat(baseUrl, "img/fundraiser-hero-16x9.jpg")
        }, {
          id: '10',
          type: 'video',
          src: 'NbpRu-yzNfs'
        }]
      },
      participant: {
        name: 'Carol',
        fullname: 'Joan Engelman',
        location: 'Youngstown, Ohio, US',
        email: 'john@email.com',
        avatar: {
          id: '1',
          type: 'image',
          src: "".concat(baseUrl, "img/donor-8.jpg")
        }
      },
      nonprofit: {
        logo_square: "".concat(baseUrl, "img/fundraiser-feed-the-children-logo-square.png"),
        logo: {
          src: "".concat(baseUrl, "img/fundraiser-feed-the-children-logo.png")
        },
        name: 'MELROSE MASSACHUSETTS TELEVISION',
        website: 'https://melrose-massachusetts.tv',
        EIN: 43138428,
        STREET: '360 MAIN ST',
        CITY: 'MELROSE',
        STATE: 'MA',
        ZIP: '02176-4623',
        ACTIVITY: 'Described in section 170(b)1)(a)(vi) of the Code; Radio or television broadcasting',
        CLASSIFICATION: 'Charitable Organization',
        DEDUCTIBILITY: 1,
        SUBSECTION: 3,
        NTEE_CD: '0',
        SORT_NAME: '0'
      },
      giving_levelsx: [{
        id: 231,
        amount: 10,
        tagline: 'Per mile',
        description: 'For every 10 dollars spent, I will run a mile!'
      }, {
        id: 232,
        amount: 25,
        tagline: 'Donor',
        description: 'Thank you for your donation!'
      }, {
        id: 233,
        amount: 50,
        tagline: 'Shirt sponsor',
        description: 'Donate $50 and your name will go on the back of my race shirt as a sponsor!'
      }, {
        id: 234,
        amount: 100,
        tagline: 'Per mile',
        description: "If you donate $100, your name will go on the back of my shirt as a sponsor and you'll get a t-shirt!"
      }],
      profilePicUrl: 'https://vthon__nonprofit-generic.surge.sh/feed-the-children/profile-pic.jpg',
      currentStats: {
        hours: 100,
        donated: 1250,
        donors: 6,
        goal: 12000,
        daysLeft: 131
      },
      updates_count: 5,
      comments_count: 6,
      donations_count: 6,
      shared_count: 12
    },
    fundraisers: {
      data: JSON.parse("[{\"fundraiser_id\":254,\"user_id\":721,\"nonprofit_ein\":237069110,\"name\":\"Ride 200 miles around Boston\",\"description\":\"I'm going to volunteer 100 hours cleaning up Payson Park, which is a popular place that many families go to. I don't think children should have to come across empty beer bottles and other trash when they're playing in nature. I also think that children have the right to live and eat food, which is why the nonprofit that I'm raising money for is Oxfam America. They are a great nonprofit that does lots of great work helping people who are very poor. I hope you will support my efforts. Please see the section below for more details.\",\"intro_text\":\"<p>I'm going to do a Volunteerathon in which I give 80 hours to the Lowell Food Pantry and raise money for Oxfam America. The food pantry helps feed people locally and Oxfam helps feed children in poor countries. So it's a win-win. I love serving people, so I'm excited for it. My friend Elizabeth is joining me in the effort. Some of you may know her because she was a brides maid at my wedding and we go way back.</p><p>Click on my profile link to check out these other fundraisers I'm doing now or will do in the future:</p><p>Young people are the future of our world, so I'm also doing a Give It Up for Good fundraiser to raise money for Tutor the Children, an organization that matches youth with tutors and mentors. I will be giving up drinking coffee for four months. I will donate all the money I save on coffee to the nonprofit, and all donations to my campaign will go to it too. You know I love my coffee, so I'm going to miss it, but it will be worth it to know kids are going to have a brighter future. </p><p>I'm doing a Run for Good in March to raise money for cancer research. Breast cancer effects everyone. Nonprofits such as the Cancer Research Association are what give us hope for a brighter future by allowing for new research and treatments! Let's make best cancer history! I'm going to run 15 miles from Denver to Boulder. I will post photos me starting and finishing the run after it's over. Please support my efforts and help those who are in need by making a donation to my run.</p><p>Everyone has a right to realize their potential, and to live in freedom with basic human rights. To make our world a better place and help people to have these rights, I'm going to volunteer 150 hours for Amnesty International with all of the proceeds of my fundraiser going to Amnesty. They are a great nonprofit that does lots of great work.</p><p>I'm also going to do a Noble New Year in 2019. I think that pets should not be hurt or abandoned without homes, which is why the nonprofit that I'm raising money for is The Society for the Prevention of Cruelty to Animals. Here is information about them: </p><p>Rescuing, rehabilitating & re-homing shelter, homeless and abandoned animals. We are a non-profit 501(c)(3) & rely heavily on donations to continue help animals in need. Funding received will be used 100% for this purpose. </p><p>For my annual Quitathon, I will be quitting smoking and donating all of the money I save to the global Red Cross, with all donations to my fundraiser also going to it. I could really use your support in quitting, whether it be supporting my campaign or giving me encouragement when I'm going through withdrawal. Besides adding years to my life, this will also help save the lives of others through medical care. Big thanks and love to you all.</p>\",\"picture\":\"".concat(baseUrl, "img/fundraiser-hero-3x2.jpg\",\"data\":{\"media\":[{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-3x2.jpg\"},{\"id\":\"2\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-1.jpg\"},{\"id\":\"3\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-1x1.jpg\"},{\"id\":\"4\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-2.jpg\"},{\"id\":\"5\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4.jpg\"},{\"id\":\"6\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4x3.jpg\"},{\"id\":\"7\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-5.jpg\"},{\"id\":\"8\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-9x16.jpg\"},{\"id\":\"9\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-16x9.jpg\"},{\"id\":\"10\",\"type\":\"video\",\"src\":\"NbpRu-yzNfs\"}]},\"participant\":{\"name\":\"Joan\",\"fullname\":\"Joan Engelman\",\"location\":\"Youngstown, Ohio, US\",\"email\":\"john@email.com\",\"avatar\":{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/donor-8.jpg\"}},\"nonprofit\":{\"logo_square\":\"").concat(baseUrl, "img/oxfam-square.png\",\"logo\":{\"src\":\"").concat(baseUrl, "img/fundraiser-feed-the-children-logo.png\"},\"name\":\"OXFAM AMERICA\",\"website\":\"https://oxfam.org\",\"EIN\":237069110,\"STREET\":\"360 MAIN ST\",\"CITY\":\"MELROSE\",\"STATE\":\"MA\",\"ZIP\":\"02176-4623\",\"ACTIVITY\":\"Described in section 170(b)1)(a)(vi) of the Code; Radio or television broadcasting\",\"CLASSIFICATION\":\"Charitable Organization\",\"DEDUCTIBILITY\":1,\"SUBSECTION\":3,\"NTEE_CD\":\"0\",\"SORT_NAME\":\"0\"},\"giving_levelsx\":[{\"id\":231,\"amount\":10,\"tagline\":\"Per mile\",\"description\":\"For every 10 dollars spent, I will run a mile!\"},{\"id\":232,\"amount\":25,\"tagline\":\"Donor\",\"description\":\"Thank you for your donation!\"},{\"id\":233,\"amount\":50,\"tagline\":\"Shirt sponsor\",\"description\":\"Donate $50 and your name will go on the back of my race shirt as a sponsor!\"},{\"id\":234,\"amount\":100,\"tagline\":\"Per mile\",\"description\":\"If you donate $100, your name will go on the back of my shirt as a sponsor and you'll get a t-shirt!\"}],\"profilePicUrl\":\"https://vthon__nonprofit-generic.surge.sh/feed-the-children/profile-pic.jpg\",\"currentStats\":{\"hours\":100,\"donated\":145,\"donors\":6,\"goal\":1200,\"daysLeft\":131},\"updates_count\":5,\"comments_count\":6,\"donations_count\":6,\"shared_count\":12},{\"fundraiser_id\":255,\"nonprofit_ein\":237069110,\"user_id\":721,\"name\":\"Volunteering for freedom\",\"description\":\"Praesent bibendum gravida diam faucibus lobortis. Nulla a leo id mauris fringilla dictum dictum vitae ligula. Etiam maximus turpis vel dolor venenatis malesuada. Duis eget rutrum elit. Fusce elementum tempor condimentum. Cras feugiat consectetur sem, non scelerisque nisi. Donec eu magna a ante imperdiet accumsan. In tempus laoreet mi aliquet fermentum. Nullam nec cursus est. Nulla dapibus dolor fermentum hendrerit lobortis. \",\"data\":{\"media\":[{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-1.jpg\"},{\"id\":\"2\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-1x1.jpg\"},{\"id\":\"3\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-2.jpg\"},{\"id\":\"4\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4.jpg\"},{\"id\":\"5\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4x3.jpg\"},{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-5.jpg\"},{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-9x16.jpg\"},{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-16x9.jpg\"},{\"id\":\"1\",\"type\":\"video\",\"src\":\"NbpRu-yzNfs\"}]},\"participant\":{\"name\":\"Martina\",\"fullname\":\"Martina Friedrichstrasse\",\"location\":\"Youngstown, Ohio, US\"},\"profilePicUrl\":\"https://vthon__nonprofit-generic.surge.sh/feed-the-children/profile-pic.jpg\",\"currentStats\":{\"hours\":100,\"donated\":3250,\"donors\":6,\"goal\":9400,\"daysLeft\":31}},{\"fundraiser_id\":722,\"nonprofit_ein\":237069110,\"name\":\"Haiti earthquake relief\",\"description\":\"Praesent bibendum gravida diam faucibus lobortis. Nulla a leo id mauris fringilla dictum dictum vitae ligula. Etiam maximus turpis vel dolor venenatis malesuada. Duis eget rutrum elit. Fusce elementum tempor condimentum. Cras feugiat consectetur sem, non scelerisque nisi. Donec eu magna a ante imperdiet accumsan. In tempus laoreet mi aliquet fermentum. Nullam nec cursus est. Nulla dapibus dolor fermentum hendrerit lobortis. \",\"data\":{\"media\":[{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-1x1.jpg\"},{\"id\":\"2\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-2.jpg\"},{\"id\":\"3\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4.jpg\"},{\"id\":\"4\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4x3.jpg\"},{\"id\":\"5\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-5.jpg\"},{\"id\":\"6\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-9x16.jpg\"},{\"id\":\"7\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-16x9.jpg\"},{\"id\":\"8\",\"type\":\"video\",\"src\":\"NbpRu-yzNfs\"}]},\"participant\":{\"name\":\"Ingrid\",\"fullname\":\"Ingrid Kertzman\",\"location\":\"Youngstown, Ohio, US\"},\"profilePicUrl\":\"https://vthon__nonprofit-generic.surge.sh/feed-the-children/profile-pic.jpg\",\"currentStats\":{\"hours\":100,\"donated\":250,\"donors\":6,\"goal\":1900,\"daysLeft\":131}},{\"fundraiser_id\":257,\"nonprofit_ein\":237069110,\"name\":\"Never lost: restoring hope for abused children\",\"description\":\"Praesent bibendum gravida diam faucibus lobortis. Nulla a leo id mauris fringilla dictum dictum vitae ligula. Etiam maximus turpis vel dolor venenatis malesuada. Duis eget rutrum elit. Fusce elementum tempor condimentum. Cras feugiat consectetur sem, non scelerisque nisi. Donec eu magna a ante imperdiet accumsan. In tempus laoreet mi aliquet fermentum. Nullam nec cursus est. Nulla dapibus dolor fermentum hendrerit lobortis. \",\"data\":{\"media\":[{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-2.jpg\"},{\"id\":\"2\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4.jpg\"},{\"id\":\"3\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4x3.jpg\"},{\"id\":\"4\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-5.jpg\"},{\"id\":\"5\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-9x16.jpg\"},{\"id\":\"6\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-16x9.jpg\"},{\"id\":\"7\",\"type\":\"video\",\"src\":\"NbpRu-yzNfs\"}]},\"participant\":{\"name\":\"Sabina\",\"fullname\":\"Sabina R\xFCckbauer\",\"location\":\"Youngstown, Ohio, US\"},\"profilePicUrl\":\"https://vthon__nonprofit-generic.surge.sh/feed-the-children/profile-pic.jpg\",\"currentStats\":{\"hours\":100,\"donated\":3250,\"donors\":6,\"goal\":6000,\"daysLeft\":131}},{\"fundraiser_id\":258,\"nonprofit_ein\":237069110,\"name\":\"Tutoring children for the future\",\"description\":\"Praesent bibendum gravida diam faucibus lobortis. Nulla a leo id mauris fringilla dictum dictum vitae ligula. Etiam maximus turpis vel dolor venenatis malesuada. Duis eget rutrum elit. Fusce elementum tempor condimentum. Cras feugiat consectetur sem, non scelerisque nisi. Donec eu magna a ante imperdiet accumsan. In tempus laoreet mi aliquet fermentum. Nullam nec cursus est. Nulla dapibus dolor fermentum hendrerit lobortis. \",\"data\":{\"media\":[{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4.jpg\"},{\"id\":\"2\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4x3.jpg\"},{\"id\":\"3\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-5.jpg\"},{\"id\":\"4\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-9x16.jpg\"},{\"id\":\"5\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-16x9.jpg\"},{\"id\":\"6\",\"type\":\"video\",\"src\":\"NbpRu-yzNfs\"}]},\"participant\":{\"name\":\"Carol\",\"fullname\":\"Carol Engelman\",\"location\":\"Youngstown, Ohio, US\"},\"profilePicUrl\":\"https://vthon__nonprofit-generic.surge.sh/feed-the-children/profile-pic.jpg\",\"currentStats\":{\"hours\":100,\"donated\":1250,\"donors\":6,\"goal\":12000,\"daysLeft\":131}},{\"fundraiser_id\":259,\"nonprofit_ein\":237069110,\"name\":\"Help give children life and love\",\"description\":\"Praesent bibendum gravida diam faucibus lobortis. Nulla a leo id mauris fringilla dictum dictum vitae ligula. Etiam maximus turpis vel dolor venenatis malesuada. Duis eget rutrum elit. Fusce elementum tempor condimentum. Cras feugiat consectetur sem, non scelerisque nisi. Donec eu magna a ante imperdiet accumsan. In tempus laoreet mi aliquet fermentum. Nullam nec cursus est. Nulla dapibus dolor fermentum hendrerit lobortis. \",\"data\":{\"media\":[{\"id\":\"1\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-4x3.jpg\"},{\"id\":\"2\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-5.jpg\"},{\"id\":\"3\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-9x16.jpg\"},{\"id\":\"4\",\"type\":\"image\",\"src\":\"").concat(baseUrl, "img/fundraiser-hero-16x9.jpg\"},{\"id\":\"5\",\"type\":\"video\",\"src\":\"NbpRu-yzNfs\"}]},\"participant\":{\"name\":\"Carol\",\"fullname\":\"Carol Engelman\",\"location\":\"Youngstown, Ohio, US\"},\"profilePicUrl\":\"https://vthon__nonprofit-generic.surge.sh/feed-the-children/profile-pic.jpg\",\"currentStats\":{\"hours\":100,\"donated\":1250,\"donors\":6,\"goal\":12000,\"daysLeft\":131}}]")),
      current: 1,
      limit: 6
    },
    updates: {
      data: [{
        id: 18,
        author_id: 24,
        fundraiser_id: 254,
        content: '<p>Latest update. Mauris nec pharetra massa. Nulla facilisi. Nulla at scelerisque ante. Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Quisque feugiat gravida faucibus. Praesent eget nisl bibendum, suscipit odio vitae, euismod nisl. Ut varius aliquam semper. Quisque ac aliquam leo. Suspendisse et rhoncus neque.</p><p>Ut eleifend leo eu est lobortis, nec lobortis magna fringilla. Nullam nec condimentum libero. Vivamus et tristique est, vitae venenatis tellus. Duis tempus nibh justo, at mattis turpis rhoncus ut. Morbi ac est id ex feugiat lacinia a sit amet arcu. Maecenas sit amet eros tellus. Ut sit amet mattis neque. Nunc leo risus, vulputate pellentesque interdum facilisis, suscipit ac sapien. Morbi volutpat ac turpis a blandit. Maecenas ultricies quis nunc vitae aliquam.</p><p>Nulla facilisi. Proin congue imperdiet volutpat. Vivamus quis enim a neque consequat dictum et sed lacus. Vestibulum aliquam vel metus non egestas. Duis ligula lacus, tincidunt a quam non, porta cursus elit. Nunc at fermentum quam. Duis ut elit justo. In eget pulvinar sapien. Cras interdum orci a pellentesque faucibus. Maecenas nec enim ac velit commodo faucibus. Nam vitae lorem sollicitudin, sodales eros ac, congue nibh. Aenean laoreet semper convallis. Vestibulum pharetra, purus non elementum convallis, lectus neque consequat magna, et dictum metus ante non lacus. Quisque scelerisque ex sit amet euismod semper.</p><p>Integer sed ante vitae arcu luctus ultrices. Donec iaculis est ut turpis malesuada, eu bibendum libero malesuada. Sed et fermentum est. Sed sit amet consequat nibh. Mauris posuere mi eu sapien vestibulum, ac viverra urna dictum. Vestibulum finibus enim et pharetra fringilla. Curabitur molestie, dui vitae lobortis dignissim, elit massa facilisis arcu, a lobortis odio felis et sem. Mauris lectus quam, varius in scelerisque ac, condimentum eget nisi. Sed ac vulputate purus, sit amet aliquam lacus. Sed eget euismod arcu. Quisque maximus, sapien at blandit vestibulum, lectus purus sagittis dui, vitae lacinia arcu sapien ut urna. Nunc laoreet mi eget libero condimentum ultricies. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p>',
        timestamp: 1517915925000,
        fullname: 'Alison Baxley',
        name: 'Alison',
        title: 'My fourth week of volunteering'
      }, {
        id: 12,
        author_id: 24,
        fundraiser_id: 254,
        content: '<p>Mauris nec pharetra massa. Nulla facilisi. Nulla at scelerisque ante. Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Quisque feugiat gravida faucibus. Praesent eget nisl bibendum, suscipit odio vitae, euismod nisl. Ut varius aliquam semper. Quisque ac aliquam leo. Suspendisse et rhoncus neque.</p><p>Ut eleifend leo eu est lobortis, nec lobortis magna fringilla. Nullam nec condimentum libero. Vivamus et tristique est, vitae venenatis tellus. Duis tempus nibh justo, at mattis turpis rhoncus ut. Morbi ac est id ex feugiat lacinia a sit amet arcu. Maecenas sit amet eros tellus. Ut sit amet mattis neque. Nunc leo risus, vulputate pellentesque interdum facilisis, suscipit ac sapien. Morbi volutpat ac turpis a blandit. Maecenas ultricies quis nunc vitae aliquam.</p><p>Nulla facilisi. Proin congue imperdiet volutpat. Vivamus quis enim a neque consequat dictum et sed lacus. Vestibulum aliquam vel metus non egestas. Duis ligula lacus, tincidunt a quam non, porta cursus elit. Nunc at fermentum quam. Duis ut elit justo. In eget pulvinar sapien. Cras interdum orci a pellentesque faucibus. Maecenas nec enim ac velit commodo faucibus. Nam vitae lorem sollicitudin, sodales eros ac, congue nibh. Aenean laoreet semper convallis. Vestibulum pharetra, purus non elementum convallis, lectus neque consequat magna, et dictum metus ante non lacus. Quisque scelerisque ex sit amet euismod semper.</p><p>Integer sed ante vitae arcu luctus ultrices. Donec iaculis est ut turpis malesuada, eu bibendum libero malesuada. Sed et fermentum est. Sed sit amet consequat nibh. Mauris posuere mi eu sapien vestibulum, ac viverra urna dictum. Vestibulum finibus enim et pharetra fringilla. Curabitur molestie, dui vitae lobortis dignissim, elit massa facilisis arcu, a lobortis odio felis et sem. Mauris lectus quam, varius in scelerisque ac, condimentum eget nisi. Sed ac vulputate purus, sit amet aliquam lacus. Sed eget euismod arcu. Quisque maximus, sapien at blandit vestibulum, lectus purus sagittis dui, vitae lacinia arcu sapien ut urna. Nunc laoreet mi eget libero condimentum ultricies. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p>',
        timestamp: 1517415125000,
        fullname: 'Alison Baxley',
        name: 'Alison',
        title: 'My first week of volunteering'
      }, {
        id: 13,
        author_id: 24,
        fundraiser_id: 254,
        content: '<p>Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p>',
        timestamp: 1517395125000,
        fullname: 'Alison Baxley',
        name: 'Alison',
        title: 'My second week of volunteering'
      }, {
        id: 15,
        author_id: 24,
        fundraiser_id: 254,
        content: '<p>Y Mauris nec pharetra massa. Nulla facilisi. Nulla at scelerisque ante. Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Quisque feugiat gravida faucibus. Praesent eget nisl bibendum, suscipit odio vitae, euismod nisl. Ut varius aliquam semper. Quisque ac aliquam leo. Suspendisse et rhoncus neque.</p><p>Ut eleifend leo eu est lobortis, nec lobortis magna fringilla. Nullam nec condimentum libero. Vivamus et tristique est, vitae venenatis tellus. Duis tempus nibh justo, at mattis turpis rhoncus ut. Morbi ac est id ex feugiat lacinia a sit amet arcu. Maecenas sit amet eros tellus. Ut sit amet mattis neque. Nunc leo risus, vulputate pellentesque interdum facilisis, suscipit ac sapien. Morbi volutpat ac turpis a blandit. Maecenas ultricies quis nunc vitae aliquam.</p><p>Nulla facilisi. Proin congue imperdiet volutpat. Vivamus quis enim a neque consequat dictum et sed lacus. Vestibulum aliquam vel metus non egestas. Duis ligula lacus, tincidunt a quam non, porta cursus elit. Nunc at fermentum quam. Duis ut elit justo. In eget pulvinar sapien. Cras interdum orci a pellentesque faucibus. Maecenas nec enim ac velit commodo faucibus. Nam vitae lorem sollicitudin, sodales eros ac, congue nibh. Aenean laoreet semper convallis. Vestibulum pharetra, purus non elementum convallis, lectus neque consequat magna, et dictum metus ante non lacus. Quisque scelerisque ex sit amet euismod semper.</p><p>Integer sed ante vitae arcu luctus ultrices. Donec iaculis est ut turpis malesuada, eu bibendum libero malesuada. Sed et fermentum est. Sed sit amet consequat nibh. Mauris posuere mi eu sapien vestibulum, ac viverra urna dictum. Vestibulum finibus enim et pharetra fringilla. Curabitur molestie, dui vitae lobortis dignissim, elit massa facilisis arcu, a lobortis odio felis et sem. Mauris lectus quam, varius in scelerisque ac, condimentum eget nisi. Sed ac vulputate purus, sit amet aliquam lacus. Sed eget euismod arcu. Quisque maximus, sapien at blandit vestibulum, lectus purus sagittis dui, vitae lacinia arcu sapien ut urna. Nunc laoreet mi eget libero condimentum ultricies. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p>',
        timestamp: 1517415125000,
        fullname: 'Alison Baxley',
        name: 'Alison',
        title: 'My first week of volunteering'
      }, {
        id: 16,
        author_id: 24,
        fundraiser_id: 254,
        content: '<p>X Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p>',
        timestamp: 1517395125000,
        fullname: 'Alison Baxley',
        name: 'Alison',
        title: 'My second week of volunteering'
      }],
      current: 1,
      limit: 2
    },
    comments: {
      data: [{
        id: 22,
        author_id: 24,
        fundraiser_id: 254,
        avatar: 'https://volunteerathon__fundraiser2.surge.sh/fundraiser/avatar.png',
        comment: '<p>This is great that you’re doing this good deed to help other people in need. I myself have needed help in the past and gladly, I have found this site.</p>',
        timestamp: 1517415125000,
        fullname: 'Mark Twain',
        name: 'Alison',
        replies: [{
          id: 23,
          author_id: 24,
          fundraiser_id: 254,
          reply_to: 22,
          avatar: null,
          comment: '<p>Indeed, that’s fantastic.</p>',
          timestamp: 1526504544000,
          fullname: 'George Gerschwinn',
          name: 'George'
        }, {
          id: 24,
          author_id: 24,
          fundraiser_id: 254,
          reply_to: 22,
          avatar: null,
          comment: '<p>Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p>',
          timestamp: 1521504544000,
          fullname: 'Dave Weckl',
          name: 'Dave'
        }]
      }, {
        id: 25,
        author_id: 24,
        fundraiser_id: 254,
        reply_to: 22,
        avatar: null,
        comment: '<p>Indeed, that’s fantastic.</p>',
        timestamp: 1526504544000,
        fullname: 'Jen Zuckerberg',
        name: 'Jen'
      }, {
        id: 26,
        author_id: 24,
        fundraiser_id: 254,
        reply_to: 22,
        avatar: null,
        comment: '<p>Nam at nisi vel odio fringilla ultrices. Phasellus quis nunc consectetur, ullamcorper sapien ut, condimentum risus. Phasellus quam augue, congue ac est ac, rutrum tincidunt nibh.</p>',
        timestamp: 1521504544000,
        fullname: 'Martin Luc-Defau',
        name: 'Martin'
      }],
      current: 1,
      limit: 3,
      latest: null
    },
    donations: {
      data: [{
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 721,
        amount: 45,
        fullname: 'Francisca Morana',
        firstname: 'Francisca',
        lastname: 'Morana',
        avatar: "".concat(baseUrl, "img/donor-1.jpg"),
        timestamp: 1521504544000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 722,
        amount: 30,
        fullname: 'Ariadna Beckenbauer',
        firstname: 'Ariadna',
        lastname: 'Beckenbauer',
        avatar: "".concat(baseUrl, "img/donor-3.jpg"),
        timestamp: 1526504544000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 723,
        amount: 35,
        fullname: 'Andreas Higgins',
        firstname: 'Andreas',
        lastname: 'Higgins',
        avatar: "".concat(baseUrl, "img/donor-4.jpg"),
        timestamp: 1539504944000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 724,
        amount: 40,
        fullname: 'Luisa Lane',
        firstname: 'Luisa',
        lastname: 'Lane',
        avatar: "".concat(baseUrl, "img/donor-5.jpg"),
        timestamp: 1536504944000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 725,
        amount: 25,
        fullname: 'Martin Fitzgerald',
        firstname: 'Martin',
        lastname: 'Fitzgerald',
        avatar: "".concat(baseUrl, "img/donor-6.jpg"),
        timestamp: 1516504944000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 726,
        amount: 25,
        fullname: 'Sandra Martignon',
        firstname: 'Sandra',
        lastname: 'Martignon',
        avatar: "".concat(baseUrl, "img/donor-10.jpg"),
        timestamp: 1540504944000,
        public: true
      }],
      current: 1,
      limit: 2
    },
    topFundraisers: {
      data: [{
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 721,
        amount: 625,
        fullname: 'Francisca Morana',
        firstname: 'Francisca',
        lastname: 'Morana',
        avatar: "".concat(baseUrl, "img/donor-1.jpg"),
        timestamp: 1521504544000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 722,
        amount: 550,
        fullname: 'Ariadna Beckenbauer',
        firstname: 'Ariadna',
        lastname: 'Beckenbauer',
        avatar: "".concat(baseUrl, "img/donor-3.jpg"),
        timestamp: 1526504544000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 723,
        amount: 400,
        fullname: 'Andreas Higgins',
        firstname: 'Andreas',
        lastname: 'Higgins',
        avatar: "".concat(baseUrl, "img/donor-4.jpg"),
        timestamp: 1526504944000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 724,
        amount: 350,
        fullname: 'Luisa Lane',
        firstname: 'Luisa',
        lastname: 'Lane',
        avatar: "".concat(baseUrl, "img/donor-5.jpg"),
        timestamp: 1526504944000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 725,
        amount: 220,
        fullname: 'Martin Fitzgerald',
        firstname: 'Martin',
        lastname: 'Fitzgerald',
        avatar: "".concat(baseUrl, "img/donor-6.jpg"),
        timestamp: 1526504944000,
        public: true
      }, {
        fundraiser_id: 254,
        nonprofit_ein: 43138428,
        user_id: 726,
        amount: 180,
        fullname: 'Sandra Martignon',
        firstname: 'Sandra',
        lastname: 'Martignon',
        avatar: "".concat(baseUrl, "img/donor-10.jpg"),
        timestamp: 1526504944000,
        public: true
      }, {
        fundraiser_id: 255,
        nonprofit_ein: 43138427,
        user_id: 726,
        amount: 180,
        fullname: 'Sandra Martignon',
        firstname: 'Sandra',
        lastname: 'Martignon',
        avatar: "".concat(baseUrl, "img/donor-10.jpg"),
        timestamp: 1526504944000,
        public: true
      }],
      current: 1,
      limit: 6
    },
    home: {},
    explore: {
      fundraisers: {
        data: []
      }
    },
    user: {
      id: null,
      loggedIn: false,
      email: null,
      fullName: null,
      firstname: null,
      paymentMethods: [],
      data: {}
    },
    userActions: {
      donation: {
        status: '',
        amount: 350,
        email: null,
        initiator: {}
      }
    },
    extra: {
      request: {}
    }
  },
  actions: actions,
  mutations: mutations
}));
// CONCATENATED MODULE: ./node_modules/register-service-worker/index.js
// Register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

var isLocalhost = function () { return Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
); }

function register (swUrl, hooks) {
  var emit = function (hook) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (hooks && hooks[hook]) {
      hooks[hook].apply(hooks, args)
    }
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      if (isLocalhost()) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, emit)
        navigator.serviceWorker.ready.then(function (registration) {
          emit('ready', registration)
        })
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl, emit)
      }
    })
  }
}

function registerValidSW (swUrl, emit) {
  navigator.serviceWorker
    .register(swUrl)
    .then(function (registration) {
      emit('registered', registration)
      if (registration.waiting) {
        emit('updated', registration)
        return
      }
      registration.onupdatefound = function () {
        emit('updatefound', registration)
        var installingWorker = registration.installing
        installingWorker.onstatechange = function () {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              emit('updated', registration)
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              emit('cached', registration)
            }
          }
        }
      }
    })
    .catch(function (error) {
      emit('error', error)
    })
}

function checkValidServiceWorker (swUrl, emit) {
  // Check if the service worker can be found.
  fetch(swUrl)
    .then(function (response) {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
        // No service worker found.
        emit('error', new Error(("Service worker not found at " + swUrl)))
        unregister()
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, emit)
      }
    })
    .catch(function (error) {
      if (!navigator.onLine) {
        emit('offline')
      } else {
        emit('error', error)
      }
    })
}

function unregister () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister()
    })
  }
}

// CONCATENATED MODULE: ./src/registerServiceWorker.js
/* eslint-disable no-console */


if (true) {
  register("".concat("/", "service-worker.js"), {
    ready: function ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
    },
    cached: function cached() {
      console.log('Content has been cached for offline use.');
    },
    updated: function updated() {
      console.log('New content is available; please refresh.');
    },
    offline: function offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error: function error(_error) {
      console.error('Error during service worker registration:', _error);
    }
  });
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/javascript-time-ago/modules/JavascriptTimeAgo.js
var JavascriptTimeAgo = __webpack_require__("0fec");
var JavascriptTimeAgo_default = /*#__PURE__*/__webpack_require__.n(JavascriptTimeAgo);

// CONCATENATED MODULE: ./node_modules/javascript-time-ago/index.js





// EXTERNAL MODULE: ./node_modules/javascript-time-ago/locale/en/index.js
var en = __webpack_require__("7d1a");
var en_default = /*#__PURE__*/__webpack_require__.n(en);

// CONCATENATED MODULE: ./src/util/filters.js




JavascriptTimeAgo_default.a.locale(en_default.a);
function host(url) {
  var host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
  var parts = host.split('.').slice(-3);
  if (parts[0] === 'www') parts.shift();
  return parts.join('.');
}
function filters_timeAgo(timestamp) {
  var timeAgo = new JavascriptTimeAgo_default.a('en-US');
  var formedString = timeAgo.format(timestamp);
  return formedString;
}
function booleanToBinary(bool) {
  if (bool) {
    return 'Yes';
  }

  return 'No';
}
function formattedDate(timestamp) {
  var date = new Date(timestamp);
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return date.toLocaleString('en-US', options);
}
function usd(amount) {
  if (!isNaN(amount)) {
    var newValue = amount.toLocaleString('en-US');
    return "$".concat(newValue);
  }
}
function people(number) {
  if (!isNaN(number)) {
    if (number === 1) {
      return "".concat(number, " person");
    }

    return "".concat(number, " people");
  }
} // This filter was added for the GiveItUp version

function currencyFormat(value) {
  if (typeof value !== 'number') return value;
  var formatter = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 3
  });
  return formatter.format(value);
}
// CONCATENATED MODULE: ./src/components/plugins/smoothScroll.js
/* harmony default export */ var smoothScroll = ({
  install: function install(Vue) {
    /**
     * SmoothScroll function from vue2-smooth-scroll plugin.
     *
     * @see https://github.com/Yuliang-Lee/vue2-smooth-scroll/blob/master/src/index.js
     */
    Vue.prototype.smoothScroll = function (to) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var container = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

      if (!window) {
        return;
      }

      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
        window.setTimeout(fn, 16);
      };

      var getTop = function getTop(el, start) {
        if (el.nodeName === 'HTML') return -start;
        return el.getBoundingClientRect().top + start;
      };
      /**
       * ease in out function
       * @see https://gist.github.com/gre/1650294
       */


      var easeInOutCubic = function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      };

      if (typeof container === 'string') {
        container = document.querySelector(container);
      }

      var scrollTo = document.getElementById(to);
      if (!scrollTo) return;
      var startPoint = container.scrollTop || window.pageYOffset;
      var end = getTop(scrollTo, startPoint);
      end += offset;
      var clock = Date.now();

      var step = function step() {
        var elapsed = Date.now() - clock;
        var position = end;

        if (elapsed < duration) {
          position = startPoint + (end - startPoint) * easeInOutCubic(elapsed / duration);
          requestAnimationFrame(step);
        }

        container === window ? container.scrollTo(0, position) : container.scrollTop = position;
      };

      step();
    };
  }
});
// EXTERNAL MODULE: ./node_modules/vue-datetime/dist/vue-datetime.css
var dist_vue_datetime = __webpack_require__("d355");

// CONCATENATED MODULE: ./src/lib.js














external_commonjs_vue_commonjs2_vue_root_Vue_default.a.config.productionTip = false;
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(vue_datetime_default.a); // register global utility filters.

Object.keys(filters_namespaceObject).forEach(function (key) {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.filter(key, filters_namespaceObject[key]);
});
external_commonjs_vue_commonjs2_vue_root_Vue_default.a.use(smoothScroll);
var Components = {
  AppHeaderx: AppHeaderx
};
Object.keys(Components).forEach(function (name) {
  external_commonjs_vue_commonjs2_vue_root_Vue_default.a.component(name, Components[name]);
});
/* harmony default export */ var lib = (Components);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (lib);



/***/ })

/******/ });
});
//# sourceMappingURL=xthon.umd.js.map