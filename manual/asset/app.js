(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("markdown-it-attrs"), require("markdown-it"), require("animated-scroll-to"), require("lodash"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["markdown-it-attrs", "markdown-it", "animated-scroll-to", "lodash", "vue"], factory);
	else if(typeof exports === 'object')
		exports["jumbogrove"] = factory(require("markdown-it-attrs"), require("markdown-it"), require("animated-scroll-to"), require("lodash"), require("vue"));
	else
		root["jumbogrove"] = factory(root["markdown-it-attrs"], root["markdown-it"], root["animated-scroll-to"], root["lodash"], root["vue"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__Zal__, __WEBPACK_EXTERNAL_MODULE__wPN__, __WEBPACK_EXTERNAL_MODULE_2EMb__, __WEBPACK_EXTERNAL_MODULE_PbPb__, __WEBPACK_EXTERNAL_MODULE_lRwf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "NHnr");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+E39":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("S82l")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "+ZMJ":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("lOnJ");
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

/***/ "+tPU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("xGkn");
var global = __webpack_require__("7KvD");
var hide = __webpack_require__("hJx8");
var Iterators = __webpack_require__("/bQp");
var TO_STRING_TAG = __webpack_require__("dSzd")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "//Fk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("U5ju"), __esModule: true };

/***/ }),

/***/ "/Zal":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__Zal__;

/***/ }),

/***/ "/bQp":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "/n6Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zQR9");
__webpack_require__("+tPU");
module.exports = __webpack_require__("Kh4W").f('iterator');


/***/ }),

/***/ "/wPN":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__wPN__;

/***/ }),

/***/ "06OY":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("3Eo+")('meta');
var isObject = __webpack_require__("EqjI");
var has = __webpack_require__("D2L2");
var setDesc = __webpack_require__("evD5").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("S82l")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "1kS7":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2EMb":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2EMb__;

/***/ }),

/***/ "2KxR":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "3Eo+":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "3fs2":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("RY/4");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var Iterators = __webpack_require__("/bQp");
module.exports = __webpack_require__("FeBl").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "4mcu":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "52gC":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "5QVw":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("BwfY"), __esModule: true };

/***/ }),

/***/ "5zde":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("zQR9");
__webpack_require__("qyJz");
module.exports = __webpack_require__("FeBl").Array.from;


/***/ }),

/***/ "77Pl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "7KvD":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "7UMu":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("R9M2");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "82Mu":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var macrotask = __webpack_require__("L42u").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("R9M2")(process) == 'process';

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
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
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

/***/ "880/":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJx8");


/***/ }),

/***/ "94VQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("Yobk");
var descriptor = __webpack_require__("X8DO");
var setToStringTag = __webpack_require__("e6n0");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("hJx8")(IteratorPrototype, __webpack_require__("dSzd")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9bBU":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("mClu");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "BO1k":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("fxRn"), __esModule: true };

/***/ }),

/***/ "BwfY":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fWfb");
__webpack_require__("M6a0");
__webpack_require__("OYls");
__webpack_require__("QWe/");
module.exports = __webpack_require__("FeBl").Symbol;


/***/ }),

/***/ "C4MV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("9bBU"), __esModule: true };

/***/ }),

/***/ "CXw9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var global = __webpack_require__("7KvD");
var ctx = __webpack_require__("+ZMJ");
var classof = __webpack_require__("RY/4");
var $export = __webpack_require__("kM2E");
var isObject = __webpack_require__("EqjI");
var aFunction = __webpack_require__("lOnJ");
var anInstance = __webpack_require__("2KxR");
var forOf = __webpack_require__("NWt+");
var speciesConstructor = __webpack_require__("t8x9");
var task = __webpack_require__("L42u").set;
var microtask = __webpack_require__("82Mu")();
var newPromiseCapabilityModule = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");
var promiseResolve = __webpack_require__("fJUb");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("dSzd")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
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
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
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
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
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
  Internal.prototype = __webpack_require__("xH/j")($Promise.prototype, {
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
__webpack_require__("e6n0")($Promise, PROMISE);
__webpack_require__("bRrM")(PROMISE);
Wrapper = __webpack_require__("FeBl")[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("dY0y")(function (iter) {
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

/***/ "Cdx3":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("sB3e");
var $keys = __webpack_require__("lktj");

__webpack_require__("uqUo")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "D2L2":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "Dd8w":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "EGZi":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "EqBC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var global = __webpack_require__("7KvD");
var speciesConstructor = __webpack_require__("t8x9");
var promiseResolve = __webpack_require__("fJUb");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "EqjI":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "FeBl":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "Gu7T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__("c/Tr");

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),

/***/ "Ibhu":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("D2L2");
var toIObject = __webpack_require__("TcQ7");
var arrayIndexOf = __webpack_require__("vFc/")(false);
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');

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

/***/ "Jz3y":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "K6ED":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("cnlX"), __esModule: true };

/***/ }),

/***/ "Kh4W":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("dSzd");


/***/ }),

/***/ "Kh5d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__("sB3e");
var $getPrototypeOf = __webpack_require__("PzxK");

__webpack_require__("uqUo")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),

/***/ "L42u":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var invoke = __webpack_require__("knuC");
var html = __webpack_require__("RPLV");
var cel = __webpack_require__("ON07");
var global = __webpack_require__("7KvD");
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
  if (__webpack_require__("R9M2")(process) == 'process') {
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

/***/ "LKZe":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("NpIQ");
var createDesc = __webpack_require__("X8DO");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var has = __webpack_require__("D2L2");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("+E39") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "M6a0":
/***/ (function(module, exports) {



/***/ }),

/***/ "MU5D":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("R9M2");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "Mhyx":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("/bQp");
var ITERATOR = __webpack_require__("dSzd")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "MmMw":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("EqjI");
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

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "vue"
var external__vue_ = __webpack_require__("lRwf");
var external__vue__default = /*#__PURE__*/__webpack_require__.n(external__vue_);

// EXTERNAL MODULE: external "lodash"
var external__lodash_ = __webpack_require__("PbPb");
var external__lodash__default = /*#__PURE__*/__webpack_require__.n(external__lodash_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/JGNav.vue
//
//
//
//
//
//



/* harmony default export */ var JGNav = ({
  name: 'JGNav',
  props: ['model'],
  methods: {
    getManagedAnchors: function getManagedAnchors(parent) {
      var _this = this;

      parent = parent || this.$el;
      return external__lodash__default.a.toArray(this.$el.querySelectorAll('a')).filter(function (el) {
        var href = el.attributes.href;
        if (!href) return false;
        if (!_this.model.isManagedLink(href.value)) return false;
        return true;
      });
    },

    bindLinks: function bindLinks(anchors) {
      var _this2 = this;

      anchors.forEach(function (el) {
        if (el.dataset.isbound) return;
        el.dataset.isbound = "true";
        el.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          if (!el.parentElement) return;
          var href = el.attributes.href;
          _this2.model.do(href.value);
        });
      });
    }
  },
  mounted: function mounted() {
    this.bindLinks(this.getManagedAnchors());
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c405e44","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGNav.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('div',{staticClass:"NavHeader",domProps:{"innerHTML":_vm._s(_vm.model.navHeaderHTML)}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_JGNav = (esExports);
// CONCATENATED MODULE: ./src/components/JGNav.vue
function injectStyle (ssrContext) {
  __webpack_require__("Jz3y")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c405e44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  JGNav,
  components_JGNav,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_JGNav = (Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/JGAside.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var JGAside = ({
  name: 'JGAside',
  components: { JGNav: src_components_JGNav },
  props: ['model'],
  data: function data() {
    return { isOpen: false };
  },
  methods: {
    onToggleVisibility: function onToggleVisibility() {
      this.isOpen = !this.isOpen;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b190c190","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGAside.vue
var JGAside_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{class:{'JGAside': true, 'm-open': _vm.isOpen, 'm-closed': !_vm.isOpen}},[_c('div',{staticClass:"JGAsideToggle",on:{"click":function($event){$event.stopPropagation();_vm.onToggleVisibility($event)}}},[_vm._v("\n    "+_vm._s(_vm.isOpen ? '×' : 'i')+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"JGAsideContents"},[_c('JGNav',{staticClass:"m-within-aside",attrs:{"model":_vm.model}}),_vm._v(" "),_c('hgroup',[_c('div',{domProps:{"innerHTML":_vm._s(_vm.model.asideHeaderHTML())}}),_vm._v(" "),_c('ul',{staticClass:"Characters"},_vm._l((_vm.model.allCharacters),function(character){return (character.showInSidebar)?_c('li',{key:character.id},[_c('h2',[_vm._v(_vm._s(character.name))]),_vm._v(" "),_c('ul',{staticClass:"CharacterQualityGroups"},_vm._l((character.sortedQualityGroups),function(group){return (!group.hidden)?_c('li',{key:group.id},[_c('h3',[_vm._v(_vm._s(group.name))]),_vm._v(" "),_c('ul',{staticClass:"CharacterQualities"},_vm._l((character.sortedQualities(group.id)),function(quality){return ((
                      !quality.hidden &&
                      (!quality.isVisible || quality.isVisible(character, quality, quality.value))
                    ))?_c('li',{key:quality.id},[(quality.isLabeled && quality.isLabeled(character, quality, quality.value))?[_vm._v("\n                    "+_vm._s(character.formatQuality(quality.id))+"\n                  ")]:[_c('strong',[_vm._v(_vm._s(quality.name)+":")]),_vm._v(" "+_vm._s(character.formatQuality(quality.id)))]],2):_vm._e()}))]):_vm._e()}))]):_vm._e()}))])],1)])}
var JGAside_staticRenderFns = []
var JGAside_esExports = { render: JGAside_render, staticRenderFns: JGAside_staticRenderFns }
/* harmony default export */ var components_JGAside = (JGAside_esExports);
// CONCATENATED MODULE: ./src/components/JGAside.vue
function JGAside_injectStyle (ssrContext) {
  __webpack_require__("jzjE")
}
var JGAside_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var JGAside___vue_template_functional__ = false
/* styles */
var JGAside___vue_styles__ = JGAside_injectStyle
/* scopeId */
var JGAside___vue_scopeId__ = "data-v-b190c190"
/* moduleIdentifier (server only) */
var JGAside___vue_module_identifier__ = null
var JGAside_Component = JGAside_normalizeComponent(
  JGAside,
  components_JGAside,
  JGAside___vue_template_functional__,
  JGAside___vue_styles__,
  JGAside___vue_scopeId__,
  JGAside___vue_module_identifier__
)

/* harmony default export */ var src_components_JGAside = (JGAside_Component.exports);

// EXTERNAL MODULE: external "animated-scroll-to"
var external__animated_scroll_to_ = __webpack_require__("2EMb");
var external__animated_scroll_to__default = /*#__PURE__*/__webpack_require__.n(external__animated_scroll_to_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/JGUI.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var JGUI = ({
  name: 'JGUI',
  props: ['director', 'ui'],
  components: { JGAside: src_components_JGAside, JGNav: src_components_JGNav },
  data: function data() {
    return {
      model: this.director.model,
      mobileSelectedTab: 'log' // or 'menu', 'aside'
    };
  },
  computed: {
    currentItemId: function currentItemId() {
      return this.ui.currentItemId;
    }
  },
  mounted: function mounted() {
    this.director.start();
    this.ui.bus.$on('refocus', function () {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    });
  },
  watch: {
    currentItemId: function currentItemId() {
      if (!this.director.autoScroll) return;
      this.$nextTick(function () {
        var topEl = external__lodash__default.a.first(document.querySelectorAll('.m-active-group'));
        var bottomEl = external__lodash__default.a.last(document.querySelectorAll('.m-active-group'));
        if (!bottomEl) return;
        var bottomBottom = bottomEl.offsetTop + bottomEl.offsetHeight + 16;
        if (bottomBottom - topEl.offsetTop > window.innerHeight) {
          external__animated_scroll_to__default()(topEl);
        } else {
          external__animated_scroll_to__default()(bottomBottom - window.innerHeight);
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4196897b","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGUI.vue
var JGUI_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
  'JGUI': true,
  }},[(_vm.director.showNav)?_c('JGNav',{attrs:{"model":_vm.model}}):_vm._e(),_vm._v(" "),_c('article',[_c('hgroup',_vm._l((_vm.ui.content),function(item){return _c(_vm.ui.componentMap[item.type],{key:item.id,tag:"component",class:{
          'm-active': item.id === _vm.currentItemId,
          'm-inactive': item.id !== _vm.currentItemId,
          'm-active-group': item.groupId == _vm.ui.currentGroupId,
        },attrs:{"isActive":item.id === _vm.currentItemId,"isActiveGroup":item.groupId === _vm.ui.currentGroupId,"item":item,"director":_vm.director,"ui":_vm.ui}})})),_vm._v(" "),(_vm.director.autoScroll)?_c('div',{staticClass:"JGUIScrollSpacer"}):_vm._e()]),_vm._v(" "),(_vm.director.showAside)?_c('JGAside',{attrs:{"model":_vm.model}}):_vm._e()],1)}
var JGUI_staticRenderFns = []
var JGUI_esExports = { render: JGUI_render, staticRenderFns: JGUI_staticRenderFns }
/* harmony default export */ var components_JGUI = (JGUI_esExports);
// CONCATENATED MODULE: ./src/components/JGUI.vue
function JGUI_injectStyle (ssrContext) {
  __webpack_require__("pvc8")
}
var JGUI_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var JGUI___vue_template_functional__ = false
/* styles */
var JGUI___vue_styles__ = JGUI_injectStyle
/* scopeId */
var JGUI___vue_scopeId__ = "data-v-4196897b"
/* moduleIdentifier (server only) */
var JGUI___vue_module_identifier__ = null
var JGUI_Component = JGUI_normalizeComponent(
  JGUI,
  components_JGUI,
  JGUI___vue_template_functional__,
  JGUI___vue_styles__,
  JGUI___vue_scopeId__,
  JGUI___vue_module_identifier__
)

/* harmony default export */ var src_components_JGUI = (JGUI_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/App.vue
//
//
//
//
//
//
//
//
//


/* harmony default export */ var App = ({
  name: 'app',
  props: ['director', 'ui'],
  components: { JGUI: src_components_JGUI }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7eb6480c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/App.vue
var App_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
  'JumboGrove': true,
  'jg-default-styles': _vm.director.defaultStylesheet
}},[_c('JGUI',{attrs:{"director":_vm.director,"ui":_vm.ui}})],1)}
var App_staticRenderFns = []
var App_esExports = { render: App_render, staticRenderFns: App_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_App = (App_esExports);
// CONCATENATED MODULE: ./src/App.vue
function App_injectStyle (ssrContext) {
  __webpack_require__("YQO/")
}
var App_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var App___vue_template_functional__ = false
/* styles */
var App___vue_styles__ = App_injectStyle
/* scopeId */
var App___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var App___vue_module_identifier__ = null
var App_Component = App_normalizeComponent(
  App,
  selectortype_template_index_0_src_App,
  App___vue_template_functional__,
  App___vue_styles__,
  App___vue_scopeId__,
  App___vue_module_identifier__
)

/* harmony default export */ var src_App = (App_Component.exports);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("Gu7T");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/get-iterator.js
var get_iterator = __webpack_require__("BO1k");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__("mvHQ");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__("woOf");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/values.js
var values = __webpack_require__("gRE1");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__("fZjL");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./src/jg/qualities/flag.js
/**
 * If `value` is true, some text appears. Otherwise, no text appears.
 * @type {Quality}
 * @example
 * {
 *    initialValue: true|false,
 *    name: 'This text appears in the sidebar if true, otherwise nothing'
 * }
 */
var flag = {
    isVisible: function isVisible(character, quality, value) {
        return !!value;
    },
    isLabeled: function isLabeled(character, quality, value) {
        return false;
    },
    format: function format(character, quality, value) {
        return value ? quality.name : '';
    }
};
/* harmony default export */ var qualities_flag = (flag);
// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__("Dd8w");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./src/jg/qualities/wordScale.js

/**
 * Map an integer value to a word list, with optional offset.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 *    words: ['bad', 'ok', 'good'],
 *    offset: 0  // rendered text = words[value + offset]
 * }
 */
var wordScale = {
    format: function format(character, quality, value) {
        if (!quality.words) return '';
        var offsetValue = value;
        if (quality.offset) offsetValue += quality.offset;
        if (offsetValue >= 0 && offsetValue < quality.words.length) {
            return quality.words[offsetValue];
        } else if (offsetValue >= quality.words.length && quality.useBonuses) {
            return external__lodash__default.a.last(quality.words) + '+' + (offsetValue - quality.words.length + 1);
        } else if (offsetValue < 0 && quality.useBonuses) {
            return quality.words[0] + offsetValue;
        } else {
            return '';
        }
    }
};
/* harmony default export */ var qualities_wordScale = (wordScale);
// CONCATENATED MODULE: ./src/jg/qualities/fudgeAdjective.js


/**
 * Shortcut for `wordScale` with a word list of 'terrible', 'poor', 'mediocre', 'fair', 'good', 'great', 'superb'
 * where -3 = terrible, 0 = fair, and 3 = superb.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 * }
 */
var fudgeAdjective = {
    format: function format(character, quality, value) {
        return qualities_wordScale.format(character, extends_default()({}, quality, {
            offset: 3,
            words: ['terrible', 'poor', 'mediocre', 'fair', 'good', 'great', 'superb']
        }), value);
    }
};
/* harmony default export */ var qualities_fudgeAdjective = (fudgeAdjective);
// CONCATENATED MODULE: ./src/jg/qualities/integer.js
/**
 * Decimals are truncated from the value when displaying.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 * }
 */
var integer = {
  format: function format(character, quality, value) {
    return Math.floor(value).toString();
  }
};
/* harmony default export */ var qualities_integer = (integer);
// CONCATENATED MODULE: ./src/jg/qualities/namedChoice.js
/**
 * Simple transform of one value to another.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 'foo',  // anything
 *    labelMap: {'foo': 'bar'},  // renders 'foo' as 'bar'
 * }
 */
var namedChoice = {
    format: function format(character, quality, value) {
        return quality.labelMap[value];
    }
};
/* harmony default export */ var qualities_namedChoice = (namedChoice);
// CONCATENATED MODULE: ./src/jg/qualities/nonZeroInteger.js
/**
 * Same as `integer`, but doesn't appear in sidebar if equal to zero.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 0,  // a number
 * }
 */
var nonZeroInteger = {
    isVisible: function isVisible(character, quality, value) {
        return !!value;
    },
    format: function format(character, quality, value) {
        if (value === 0) return '';
        return Math.floor(value).toString();
    }
};
/* harmony default export */ var qualities_nonZeroInteger = (nonZeroInteger);
// CONCATENATED MODULE: ./src/jg/qualities/onOff.js
/**
 * Displays `on`/`off` based on `value` truthiness (if no `words` provided), or
 * `words[0]`/`words[1]` (falsey word comes first)
 * @type {Quality}
 * @example
 * {
 *    initialValue: true|false,
 *    words: ['nope', 'yep']
 * }
 */
var onOff = {
  format: function format(character, quality, value) {
    var words = quality.words || ['off', 'on'];
    return words[value ? 1 : 0];
  }
};
/* harmony default export */ var qualities_onOff = (onOff);
// CONCATENATED MODULE: ./src/jg/qualities/raw.js
/**
 * Displays the value unchanged.
 * @type {Quality}
 * @example
 * {
 *    initialValue: 'whatever',
 * }
 */
var raw = {
  format: function format(character, quality, value) {
    return value;
  }
};
/* harmony default export */ var qualities_raw = (raw);
// CONCATENATED MODULE: ./src/jg/qualities/yesNo.js

/**
 * Same oas `onOf`, but defaults to `yes` / `no`.
 * @type {Quality}
 * @example
 * {
 *    initialValue: true|false,
 * }
 */
var yesNo = {
  format: function format(character, quality, value) {
    return qualities_onOff.format(character, { words: ['no', 'yes'] }, value);
  }
};
/* harmony default export */ var qualities_yesNo = (yesNo);
// CONCATENATED MODULE: ./src/jg/qualities/index.js
/** @ignore */










/**
 * Object containing all qualities indexed by key.
 * @type {object}
 */
var qualities_qualities = {
  flag: qualities_flag,
  fudgeAdjective: qualities_fudgeAdjective,
  integer: qualities_integer,
  namedChoice: qualities_namedChoice,
  nonZeroInteger: qualities_nonZeroInteger,
  onOff: qualities_onOff,
  raw: qualities_raw,
  wordScale: qualities_wordScale,
  yesNo: qualities_yesNo
};
/* harmony default export */ var jg_qualities = (qualities_qualities);
// CONCATENATED MODULE: ./src/jg/character.js









var _prioritySort = function _prioritySort(_ref) {
    var priority = _ref.priority;
    return priority || 0;
};
var _groupOmitKeys = ['id', 'name', 'priority', 'hidden'];

/**
 * This class is created from the character object you specify in your game.
 */

var character_Character = function () {
    /**
     * 
     * @param {object} args 
     * @param {string} args.id
     * @param {string} args.name
     * @param {number} args.priority
     * @param {Boolean} args.showInSidebar
     * @param {string|function(): string} args.description Currently unused
     * @param {quality[]} args.qualities
     * @param {*} args.state Initial value of {@link state}
     */
    function Character(_ref2) {
        var qualities = _ref2.qualities,
            id = _ref2.id,
            name = _ref2.name,
            _ref2$priority = _ref2.priority,
            priority = _ref2$priority === undefined ? 0 : _ref2$priority,
            _ref2$showInSidebar = _ref2.showInSidebar,
            showInSidebar = _ref2$showInSidebar === undefined ? true : _ref2$showInSidebar,
            _ref2$description = _ref2.description,
            description = _ref2$description === undefined ? '' : _ref2$description,
            _ref2$state = _ref2.state,
            state = _ref2$state === undefined ? {} : _ref2$state;

        classCallCheck_default()(this, Character);

        /**
         * The ID you specified for this character. Must be unique across all characters.
         * @type {string}
         */
        this.id = id;

        /**
         * The name you specified for this character.
         * @type {string}
         */
        this.name = name;

        /**
         * Arbitrary, JSON-safe data about this character. You may update it any time you want.
         * @type {*}
         */
        this.state = external__lodash__default.a.cloneDeep(state);

        assign_default()(this, { qualities: qualities, description: description, showInSidebar: showInSidebar, priority: priority });

        this.updateQualities();
    }

    /** @ignore */


    createClass_default()(Character, [{
        key: 'updateQualities',
        value: function updateQualities() {
            var _this = this;

            this._shallowQualities = {};
            keys_default()(this.qualities).forEach(function (k) {
                var group = _this.qualities[k];
                group.id = k;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = get_iterator_default()(external__lodash__default.a.keys(external__lodash__default.a.omit(group, _groupOmitKeys))), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var k2 = _step.value;

                        if (_this._shallowQualities[k2]) {
                            throw Error("You have two qualities with the same ID. Please don't do that.");
                        }
                        group[k2].id = k2;
                        _this._shallowQualities[k2] = group[k2];
                        if (group[k2].value === undefined) group[k2].value = group[k2].initialValue;
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
            /** @ignore */
            this.sortedQualityGroups = external__lodash__default.a.sortBy(values_default()(this.qualities), _prioritySort);
        }

        /** @ignore */

    }, {
        key: 'toSave',
        value: function toSave() {
            return external__lodash__default.a.pick(this, ['id', 'qualities', 'name', 'showInSidebar', 'description', 'state']);
        }

        /** @ignore */

    }, {
        key: 'loadSave',
        value: function loadSave(obj) {
            external__lodash__default.a.assign(this, obj);
            this.updateQualities();
        }

        /** @ignore */

    }, {
        key: 'getDescription',
        value: function getDescription() {
            if (external__lodash__default.a.isFunction(this.description)) {
                return this.description.apply(this, arguments);
            } else {
                return this.description || this.id;
            }
        }

        /** @ignore */

    }, {
        key: 'sortedQualities',
        value: function sortedQualities(groupName) {
            return external__lodash__default.a.sortBy(values_default()(external__lodash__default.a.omit(this.qualities[groupName], _groupOmitKeys)), _prioritySort);
        }

        /**
         * Return the current value of this quality (without formatting it)
         * 
         * @param {string} id ID of the quality whose value you want
         * @returns {*}
         */

    }, {
        key: 'getQuality',
        value: function getQuality(id) {
            return this._shallowQualities[id].value;
        }

        /**
         * Return the _initial_ value of this quality from the start of the game(without formatting it).
         * You can use this to see how the value has changed since the start of the game.
         * 
         * @param {string} id ID of the quality whose value you want
         * @returns {*}
         */

    }, {
        key: 'getQualityInitial',
        value: function getQualityInitial(id) {
            return this._shallowQualities[id].initialValue;
        }

        /**
         * Returns the formatted value of the given quality.
         * 
         * @param {string} id ID of the quality whose value you want
         * @returns {string}
         */

    }, {
        key: 'formatQuality',
        value: function formatQuality(id) {
            var quality = this._shallowQualities[id];
            if (!jg_qualities[quality.type]) {
                console.error("Undefined quality type:", quality.type);
                return '';
            }
            return jg_qualities[quality.type].format(this, quality, quality.value);
        }

        /**
         * Return the human-readable name for the given quality ID.
         * 
         * @param {string} id ID of the quality whose value you want
         * @returns {string}
         */

    }, {
        key: 'formatQualityName',
        value: function formatQualityName(id) {
            var quality = this._shallowQualities[id];
            return quality.name;
        }

        /**
         * Qualities **must** be modified using this method.
         * 
         * @param {string} id ID of the quality to modify on this character
         * @param {*} value New value for the quality
         */

    }, {
        key: 'setQuality',
        value: function setQuality(id, value) {
            this._shallowQualities[id].value = value;
        }

        /**
         * Add an integer value to the given quality.
         * 
         * @param {string} id ID of the quality to modify on this character
         * @param {number} value Amount to add
         * @returns {number} The new value
         */

    }, {
        key: 'addToQuality',
        value: function addToQuality(id, delta) {
            this._shallowQualities[id].value += delta;
            return this._shallowQualities[id].value += delta;
        }
    }]);

    return Character;
}();

/* harmony default export */ var jg_character = (character_Character);
// CONCATENATED MODULE: ./src/jg/situation.js





var nop = function nop() {};
var tru = function tru() {
    return true;
};
/**
 */

var situation_Situation = function () {
    /**
     * 
     * @param {object} args
     * @param {string} args.id
     * @param {Boolean} args.autosave If true, game will save when scene is
     *                                entered. Default false.
     * @param {string} args.content
     *      Markdown template to be rendered to the transcript when this
     *      situation is entered. {@see /markup.html}
     * @param {string[]} args.choices
     *      List of situation IDs or tags. See
     *      {@link model#interpretChoices} for how this works.
     * @param {Map<string,string>} args.snippets
     *      Snippets used by writers/replacers. {@see /writers_replacers.html}.
     * @param {object|null} args.input 
     *      If provided, prompts user for input. Looks like
     *      `input: {placeholder: "Your name", next: "situation-id", store: function(model, value)}`
     * @param {string|null} args.input.placeholder
     *      Placeholder value for the HTML input field 
     * @param {string} args.input.next
     *      Situation or action to go to after user enters a value.
     *      Must start with either `@` (for situation IDs) or `>`
     *      (for actions).
     * @param {function(model: model, value: string)} args.input.store
     *      Your chance to do something with the given alue
     * @param {Boolean} args.debugChoices See {@link debugChoices}
     * @param {function(model: model, hostSituation: Situation): Boolean} getCanChoose
     *      If this function is provided and returns `false`, this situation
     *      is not linkified in the choices list.
     * @param {function(model: model, hostSituation: Situation): Boolean} getCanSee
     *      If this function is provided and returns `false`, the situation
     *      will not show up in the choices list for the situation presenting
     *      the choice.
     * @param {number|function(model: model, hostSituation: Situation): number} priority
     *      May be a constant number, or function returning a number. This value
     *      is used by {@link model#interpretChoices}.
     * @param {number|function(model: model, hostSituation: Situation): number} displayOrder
     *      May be a constant number, or function returning a number. This value
     *      is used by {@link model#interpretChoices}.
     * @param {string|function(model: model, hostSituation: Situation): string} optionText
     *      Text shown to user when being presented as a choice.
     * @param {function(model: model, ui: ui, fromSituation: Situation): Boolean} willEnter
     *      This situation will enter, unless this function returns `false`. It
     *      is safe to call `model.do()` from here, as long as you then return
     *      `false`.
     * @param {function(model: model, ui: ui, fromSituation: Situation)} enter
     *      The situation has been entered, and {@link Situation#content} has
     *      been written to the transcript.
     * @param {function(model: model, ui: ui, toSituation: Situation)} exit
     *      The situation is being exited, but the next situation has not yet
     *      been entered.
     * @param {function(model: model, ui: ui, action: String)} act
     *      An action-based link has been clicked. You might just want to use
     *      the `actions` key instead of this function if you're just mapping
     *      action names to functions.
     * @param {Map<string,function>} actions
     *      Map of action name to function that is called when the user invokes
     *      the action.
     * 
     * @example
     *  jumbogrove('#app', {
     *      id: 'situations-example',
     *      autosave: true,
     * 
     *      // stuff related to this situation being a choice in another situation:
     *      optionText: "Proclaim hungriness",
     *      getCanChoose: (model, host) => true,
     *      getCanSee: (model, host) => true,
     *      priority: 1,
     *      displayOrder: 1,
     * 
     *      // stuff related to content and what happens inside the situation:
     *      content: `
     *      I am [very](>replaceself:more_adjectives) hungry.
     * 
     *      [Eat](>eat)
     * 
     *      [Go to restaurant](@restaurant)
     *      `,
     *      snippets: {
     *          more_adjectives: "very, very, very, very"
     *      },
     *      act: (model, ui, action) => console.log("did action", action),
     *      actions: {
     *          eat: () => console.log("OM NOM NOM"),
     *      },
     * 
     *      // going to other situations:
     *      choices: ['next-situation', '#situations-involving-food'],
     *      // normally you wouldn't have 'choices' and 'input' in the same situation.
     *      input: {
     *          placeholder: "Please enter your favorite food.",
     *          next: "@restaurant",
     *      },
     *      debugChoices: false,
     * 
     *      // lifecycle
     *      willEnter: (model, ui, from) => true,
     *      enter: (model, ui, from) => console.log("entered"),
     *      exit: (model, ui, from) => console.log("exited"),
     *  });
     */
    function Situation(_ref) {
        var id = _ref.id,
            _ref$tags = _ref.tags,
            tags = _ref$tags === undefined ? [] : _ref$tags,
            _ref$totalVisits = _ref.totalVisits,
            totalVisits = _ref$totalVisits === undefined ? 0 : _ref$totalVisits,
            _ref$autosave = _ref.autosave,
            autosave = _ref$autosave === undefined ? false : _ref$autosave,
            _ref$content = _ref.content,
            content = _ref$content === undefined ? null : _ref$content,
            _ref$choices = _ref.choices,
            choices = _ref$choices === undefined ? null : _ref$choices,
            _ref$snippets = _ref.snippets,
            snippets = _ref$snippets === undefined ? {} : _ref$snippets,
            _ref$input = _ref.input,
            input = _ref$input === undefined ? null : _ref$input,
            _ref$debugChoices = _ref.debugChoices,
            debugChoices = _ref$debugChoices === undefined ? false : _ref$debugChoices,
            _ref$getCanChoose = _ref.getCanChoose,
            getCanChoose = _ref$getCanChoose === undefined ? tru : _ref$getCanChoose,
            _ref$getCanSee = _ref.getCanSee,
            getCanSee = _ref$getCanSee === undefined ? tru : _ref$getCanSee,
            _ref$priority = _ref.priority,
            priority = _ref$priority === undefined ? 0 : _ref$priority,
            _ref$displayOrder = _ref.displayOrder,
            displayOrder = _ref$displayOrder === undefined ? 0 : _ref$displayOrder,
            _ref$optionText = _ref.optionText,
            optionText = _ref$optionText === undefined ? null : _ref$optionText,
            _ref$willEnter = _ref.willEnter,
            willEnter = _ref$willEnter === undefined ? tru : _ref$willEnter,
            _ref$enter = _ref.enter,
            enter = _ref$enter === undefined ? nop : _ref$enter,
            _ref$act = _ref.act,
            act = _ref$act === undefined ? nop : _ref$act,
            _ref$actions = _ref.actions,
            actions = _ref$actions === undefined ? {} : _ref$actions,
            _ref$exit = _ref.exit,
            exit = _ref$exit === undefined ? nop : _ref$exit;

        classCallCheck_default()(this, Situation);

        /**
         * ID of this situation.
         * @type {string}
         */
        this.id = id;

        /**
         * Tags associated with this situation.
         * @type {string[]}
         */
        this.tags = tags;

        /**
         * Number of times this situation has been successfully entered.
         * This value persists when saving and loading.
         * @type {number}
         */
        this.totalVisits = totalVisits;

        /**
         * If `true`, then presenting choices from this situation will call `debugger`
         * so you can step through the code and see what's up.
         * @type {Boolean}
         */
        this.debugChoices = debugChoices;

        assign_default()(this, {
            getCanChoose: getCanChoose, getCanSee: getCanSee, priority: priority,
            displayOrder: displayOrder, optionText: optionText, enter: enter, act: act, exit: exit, content: content, actions: actions, choices: choices,
            snippets: snippets, input: input, willEnter: willEnter, autosave: autosave
        });
    }

    /** @ignore */


    createClass_default()(Situation, [{
        key: 'toSave',
        value: function toSave() {
            return external__lodash__default.a.pick(this, ['totalVisits', 'id']);
        }

        /** @ignore */

    }, {
        key: 'loadSave',
        value: function loadSave(obj) {
            external__lodash__default.a.assign(this, obj);
        }

        /** @ignore */

    }, {
        key: 'doEnter',
        value: function doEnter(model, ui) {
            var _this = this;

            this.totalVisits += 1;
            if (this.content) {
                ui.writeMarkdown(this.content);
            }
            this.enter.apply(this, arguments);
            if (this.input) {
                ui.promptInput({ placeholder: this.input.placeholder }).then(function (value) {
                    _this.input.store(model, value);
                    model.do(_this.input.next);
                });
            }
            if (this.choices) {
                ui.presentChoices(this.choices).then(function (_ref2) {
                    var situationId = _ref2.situationId,
                        itemId = _ref2.itemId;

                    model.do('@' + situationId, itemId, 'fake');
                });
            }
        }

        /** @ignore */

    }, {
        key: 'doExit',
        value: function doExit(model, ui, toSituation) {
            ui.nextGroup();
            this.exit.apply(this, arguments);
        }

        /** @ignore */

    }, {
        key: 'doAct',
        value: function doAct(model, ui, action) {
            if (this.actions && this.actions[action]) {
                var _actions;

                for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                    args[_key - 3] = arguments[_key];
                }

                (_actions = this.actions)[action].apply(_actions, [model, ui].concat(args));
            } else {
                this.act(model, ui, action);
            }
        }

        /** @ignore */

    }, {
        key: 'getOptionText',
        value: function getOptionText() {
            if (external__lodash__default.a.isFunction(this.optionText)) {
                return this.optionText.apply(this, arguments);
            } else {
                return this.optionText || this.id;
            }
        }

        /** @ignore */

    }, {
        key: 'getPriority',
        value: function getPriority() {
            if (external__lodash__default.a.isFunction(this.priority)) {
                return this.priority.apply(this, arguments);
            } else {
                return this.priority;
            }
        }

        /** @ignore */

    }, {
        key: 'getDisplayOrder',
        value: function getDisplayOrder() {
            if (external__lodash__default.a.isFunction(this.displayOrder)) {
                return this.displayOrder.apply(this, arguments);
            } else {
                return this.displayOrder;
            }
        }
    }]);

    return Situation;
}();

/* harmony default export */ var situation = (situation_Situation);
// CONCATENATED MODULE: ./src/jg/model.js





/**
 * @module model
 * @memberof module:jumbogrove
 */




/**
 * Maintains game state and allows you to make changes to it.
 * 
 * The model object is the primary way for you to interact with Jumbo Grove.
 */

var model_model = function () {
    /**
     * @ignore
     * 
     * @param {object} args Arguments object
     * @param {object[]} args.characters
     * @param {object} args.globalState
     * @param {object[]} args.situations
     * @param {string} args.initialSituation
     */
    function model(director, _ref) {
        var _this = this;

        var characters = _ref.characters,
            globalState = _ref.globalState,
            situations = _ref.situations,
            initialSituation = _ref.initialSituation;

        classCallCheck_default()(this, model);

        /** @ignore */
        this._director = director;
        /** @ignore */
        this._characters = {};
        /** @ignore */
        this._situations = {};
        /** @ignore */
        this._initialSituationId = initialSituation;
        /** @ignore */
        this.templateHelperFunctions = {};
        /** @ignore */
        this.templateHelperGetters = {};

        // These will be injected when the UI is bound to the director
        /** @ignore */
        this.navHeaderHTML = null;
        /** @ignore */
        this.asideHeaderHTML = null;

        /**
         * The situation currently being run, or last seen by the user.
         * @member
         * @type {Situation|null} */
        this.currentSituation = null;

        characters.forEach(function (c) {
            return _this._characters[c.id] = new jg_character(c);
        });

        /**
         * Store all non-character game state here; **Must be JSON-safe!** You may mutate
         * this object freely as long as it is safe to convert it to JSON and back.
         * @member
         * 
         */
        this.globalState = external__lodash__default.a.cloneDeep(globalState);

        /**
         * The character with ID `'player'`.
         * @member
         * @type {Character|null} */
        this.player = this.character('player') || null;

        situations.forEach(function (s) {
            if (_this._situations[s.id]) throw new Error('Duplicate situation id: ' + s.id);
            _this._situations[s.id] = new situation(s);
        });

        /**
         * List of all characters in the game.
         * @member
         * @type {Character[]} */
        this.allCharacters = external__lodash__default.a.sortBy(values_default()(this._characters), function (_ref2) {
            var priority = _ref2.priority;
            return priority || 0;
        });
    }

    /**
     * Follow a Jumbo Grove link (`@situation-id` or `>action`).
     * @param {command} string
     */


    createClass_default()(model, [{
        key: 'do',
        value: function _do() {
            var _director;

            return (_director = this._director).handleCommandString.apply(_director, arguments);
        }

        /**
         * Go to the given sitaution (no `@`).
         * @param {string} id
         */

    }, {
        key: 'goTo',
        value: function goTo() {
            var _director2;

            return (_director2 = this._director).goTo.apply(_director2, arguments);
        }

        /**
         * Returns true iff the given string can be handled by Jumbo Grove (rather than being a normal HTML link)
         * @param {string} string A string to check
         * @returns {Boolean} 
         */

    }, {
        key: 'isManagedLink',
        value: function isManagedLink() {
            var _director3;

            return (_director3 = this._director).isManagedLink.apply(_director3, arguments);
        }

        /**
         * Add arbitrary methods to the model object. Since the model is passed to
         * all callbacks, this is a good way to make convenient functions accessible.
         * 
         * Also, anything you pass here will also be provided to the template context.
         * 
         * @param {Map<string, function>} fns Mapping of name to function
         */

    }, {
        key: 'extend',
        value: function extend(fns) {
            assign_default()(this, fns);
            assign_default()(this.templateHelperFunctions, fns);
        }

        /**
         * Make dynamically-evaluated values available to templates.
         * 
         * For example, if you do this:
         * 
         * ```
         * model.addTemplateGetters({minutes: () => new Date().getMinutes()});
         * ```
         * 
         * then whenever you write `<%= minutes %>` in your template, the return
         * value of the function will appear in the text.
         * 
         * @param {Map<string, function>} fns Mapping of name to getter
         */

    }, {
        key: 'addTemplateGetters',
        value: function addTemplateGetters(fns) {
            assign_default()(this.templateHelperGetters, fns);
        }

        /**
         * @ignore
         */

    }, {
        key: 'toSave',
        value: function toSave() {
            return {
                globalState: this.globalState,
                currentSituationId: this.currentSituation ? this.currentSituation.id : null,
                characters: this.allCharacters.map(function (c) {
                    return c.toSave();
                }),
                situations: values_default()(this._situations).map(function (s) {
                    return s.toSave();
                })
            };
        }

        /**
         * @ignore
         */

    }, {
        key: 'loadSave',
        value: function loadSave(obj) {
            this.globalState = obj.globalState;
            this.currentSituation = this._situations[obj.currentSituationId] || null;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = get_iterator_default()(obj.characters), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var data = _step.value;

                    this.character(data.id).loadSave(data);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = get_iterator_default()(obj.situations), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var s = _step2.value;

                    this.situation(s.id).loadSave(s);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        /**
         * @ignore
         */

    }, {
        key: 'toString',
        value: function toString() {
            return 'Model(globalState=' + this.globalState + ', characters=' + this.characters + ')';
        }

        /**
         * Looks up a situation by ID. Prints an error to the console if there isn't one.
         * @param {string} id 
         * @returns {Situation|null} Situation with the given ID
         */

    }, {
        key: 'situation',
        value: function situation(id) {
            if (!this._situations[id]) console.error('Situation not found: ' + id);
            return this._situations[id];
        }

        /**
         * Returns a list of all situations matching the given ID (`foo`) or tag (`#foo`).
         * @param {string} idOrTag 
         * @returns {Situation[]}
         */

    }, {
        key: 'situations',
        value: function situations(idOrTag) {
            if (idOrTag.startsWith("#")) {
                var tag = idOrTag.slice(1);
                return values_default()(this._situations).filter(function (s) {
                    return s.tags.indexOf(tag) !== -1;
                });
            } else {
                return [this._situations[idOrTag]];
            }
        }

        /**
         * Look up a character by ID. Returns `undefined` if there isn't one.
         * @param {string} id 
         */

    }, {
        key: 'character',
        value: function character(id) {
            return this._characters[id];
        }

        /**
         * Return a random number 0-1. Currently this just calls `Math.random()`, but
         * in the future it might do something fancy with seeds that let you avoid
         * save scumming.
         */

    }, {
        key: 'random',
        value: function random() {
            return Math.random();
        }

        /**
         * Given a set of situations, do some smart stuff and return the situations
         * that match the filter.
         * 
         * 1. Filter out all situations for which `situation.getCanSee(model, model.currentSituation, situation)` returns `false`.
         * 2. Find the highest priority that matches a list of situations at least as big as `atLeast`.
         * 3. If there are more situations left than there are `atMost`, randomly remove some.
         * 4. Sort by `situation.displayOrder`.
         * 
         * Note that it is possible to end up with a list of situations for which `getCanChoose()` returned `false` for all of them!
         * 
         * This logic has been shamelessly stolen from Undum.
         * 
         * @param {string[]} arrayOfSituationIdsOrTags Like `['one-situation', '#situations-matching-this-tag']`
         * @param {number} atLeast 
         * @param {number} atMost 
         */

    }, {
        key: 'interpretChoices',
        value: function interpretChoices(arrayOfSituationIdsOrTags) {
            var _this2 = this;

            var atLeast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var atMost = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.MAX_VALUE;

            var host = this.currentSituation;
            if (host.debugChoices) debugger; // eslint-disable-line no-debugger
            var situations = [].concat.apply([], arrayOfSituationIdsOrTags.map(this.situations.bind(this)));
            // remove invisible situations
            var visibleSituations = situations.filter(function (s) {
                return s.getCanSee(_this2, host, s);
            });

            // sort by display order
            var sortedSituations = external__lodash__default.a.sortBy(visibleSituations, function (s) {
                return s.getDisplayOrder(_this2, host);
            });

            // index by priority; figure out what priorities are being used
            var sortedSituationsByPriority = {};
            var prioritiesSeen = [];
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = get_iterator_default()(sortedSituations), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var s = _step3.value;

                    var p = s.getPriority(this, host);
                    if (!sortedSituationsByPriority[p]) sortedSituationsByPriority[p] = [];
                    sortedSituationsByPriority[p].push(s);
                    prioritiesSeen.push(p);
                }

                // figure out what priority we want to use (only one!)
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            var chosenPriority = Number.MAX_VALUE;
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = get_iterator_default()(external__lodash__default.a.uniq(prioritiesSeen.sort().reverse())), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var p = _step4.value;

                    if (sortedSituationsByPriority[p].length >= atLeast) {
                        chosenPriority = p;
                        break;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            var chosenSituations = sortedSituationsByPriority[chosenPriority];
            if (!chosenSituations) {
                return []; // Uh oh!
            }

            // Remove random array items until we are under the limit
            while (chosenSituations.length > atMost) {
                var i = Math.floor(this.random() * chosenSituations.length);
                chosenSituations.splice(i, 1);
            }

            // return the chosen situations and provide more info for each
            var allChoices = chosenSituations.map(function (s) {
                return {
                    situationId: s.id,
                    text: s.getOptionText(_this2, host),
                    isEnabled: s.getCanChoose(_this2, host)
                };
            });
            return allChoices.filter(function (_ref3) {
                var isEnabled = _ref3.isEnabled;
                return isEnabled;
            }).concat(allChoices.filter(function (_ref4) {
                var isEnabled = _ref4.isEnabled;
                return !isEnabled;
            }));
        }
    }]);

    return model;
}();

/* harmony default export */ var jg_model = (model_model);
// CONCATENATED MODULE: ./src/jg/commands.js
/* harmony default export */ var commands = ({
  runAction: {
    name: 'runAction',
    create: function create(name, args) {
      return { 'type': 'runAction', name: name, args: args };
    }
  },
  write: {
    name: 'write',
    create: function create(itemId, snippetId) {
      return { 'type': 'write', itemId: itemId, snippetId: snippetId };
    }
  },
  replace: {
    name: 'replace',
    create: function create(itemId, snippetId, elId) {
      return { 'type': 'replace', itemId: itemId, snippetId: snippetId, elId: elId };
    }
  },
  goToSituation: {
    name: 'goToSituation',
    create: function create(id) {
      return { 'type': 'goToSituation', id: id };
    }
  },
  resetGame: {
    name: 'resetGame',
    create: function create() {
      return { 'type': 'resetGame' };
    }
  }
});
// CONCATENATED MODULE: ./src/jg/gamepad.js
/** @ignore */
function bindGamepad(director) {
  var selectActiveElement = function selectActiveElement() {
    if (document.activeElement) document.activeElement.click();
  };

  var axisState = ['rest', 'rest', 'rest', 'rest'];
  var buttonState = [false, false];
  var update = function update() {
    window.requestAnimationFrame(update);

    if (!navigator.getGamepads) return;
    var gp = navigator.getGamepads()[0];
    if (!gp) return;
    // const isXbox = gp.id.indexOf('360') !== -1 && gp.id.indexOf('45e') !== -1 && gp.id.indexOf('28e') !== -1;

    axisState.forEach(function (oldState, axis) {
      var newState = 'rest';
      if (gp.axes[axis] > 0.5) {
        newState = 'right';
      } else if (gp.axes[axis] < -0.5) {
        newState = 'left';
      } else {
        newState = 'rest';
      }
      if (oldState === 'rest' && newState === 'right') {
        director.focusNextElement();
      } else if (oldState === 'rest' && newState === 'left') {
        director.focusPreviousElement();
      }
      axisState[axis] = newState;
    });

    buttonState.forEach(function (oldState, i) {
      if (gp.buttons[i].pressed !== oldState) {
        buttonState[i] = gp.buttons[i].pressed;
        if (buttonState[i]) selectActiveElement();
      }
    });
  };
  update();
}


// CONCATENATED MODULE: ./src/jg/director.js











var director_getAnchors = function getAnchors() {
    return external__lodash__default.a.toArray(document.querySelectorAll('a')).filter(function (a) {
        return !!a.attributes.href.value;
    }).filter(function (a) {
        return !!a.offsetParent;
    });
};

var director_focus = function focus(allAnchors, i) {
    var i2 = (i + allAnchors.length) % allAnchors.length;
    allAnchors[i2].focus();
};

var _focusNextElement = function _focusNextElement() {
    var allAnchors = director_getAnchors();
    if (!allAnchors.length) return;
    var i = allAnchors.indexOf(document.activeElement);
    if (i > -1) {
        director_focus(allAnchors, i + 1);
    } else {
        allAnchors[0].focus();
    }
};

var _focusPreviousElement = function _focusPreviousElement() {
    var allAnchors = director_getAnchors();
    if (!allAnchors.length) return;
    var i = allAnchors.indexOf(document.activeElement);
    if (i > -1) {
        director_focus(allAnchors, i - 1);
    } else {
        allAnchors[allAnchors.length - 1].focus();
    }
};

var director_nop = function nop() {};
/** @ignore */

var director_JumboGroveDirector = function () {
    function JumboGroveDirector(_ref) {
        var id = _ref.id,
            _ref$version = _ref.version,
            version = _ref$version === undefined ? 1 : _ref$version,
            _ref$initialSituation = _ref.initialSituation,
            initialSituation = _ref$initialSituation === undefined ? 'start' : _ref$initialSituation,
            _ref$navHeader = _ref.navHeader,
            navHeader = _ref$navHeader === undefined ? '' : _ref$navHeader,
            _ref$asideHeader = _ref.asideHeader,
            asideHeader = _ref$asideHeader === undefined ? '' : _ref$asideHeader,
            _ref$showNav = _ref.showNav,
            showNav = _ref$showNav === undefined ? true : _ref$showNav,
            _ref$showAside = _ref.showAside,
            showAside = _ref$showAside === undefined ? true : _ref$showAside,
            _ref$defaultStyleshee = _ref.defaultStylesheet,
            defaultStylesheet = _ref$defaultStyleshee === undefined ? true : _ref$defaultStyleshee,
            _ref$autoScroll = _ref.autoScroll,
            autoScroll = _ref$autoScroll === undefined ? true : _ref$autoScroll,
            _ref$autoMoveFocus = _ref.autoMoveFocus,
            autoMoveFocus = _ref$autoMoveFocus === undefined ? true : _ref$autoMoveFocus,
            _ref$globalState = _ref.globalState,
            globalState = _ref$globalState === undefined ? {} : _ref$globalState,
            _ref$characters = _ref.characters,
            characters = _ref$characters === undefined ? [] : _ref$characters,
            _ref$situations = _ref.situations,
            situations = _ref$situations === undefined ? [] : _ref$situations,
            _ref$init = _ref.init,
            init = _ref$init === undefined ? director_nop : _ref$init,
            _ref$willEnter = _ref.willEnter,
            willEnter = _ref$willEnter === undefined ? function () {
            return true;
        } : _ref$willEnter,
            _ref$didEnter = _ref.didEnter,
            didEnter = _ref$didEnter === undefined ? director_nop : _ref$didEnter,
            _ref$willExit = _ref.willExit,
            willExit = _ref$willExit === undefined ? director_nop : _ref$willExit,
            _ref$didExit = _ref.didExit,
            didExit = _ref$didExit === undefined ? director_nop : _ref$didExit,
            _ref$willAct = _ref.willAct,
            willAct = _ref$willAct === undefined ? director_nop : _ref$willAct,
            _ref$didAct = _ref.didAct,
            didAct = _ref$didAct === undefined ? director_nop : _ref$didAct;

        classCallCheck_default()(this, JumboGroveDirector);

        if (!id) throw new Error("You must provide an id");
        assign_default()(this, {
            id: id, willEnter: willEnter, didEnter: didEnter, willExit: willExit, didExit: didExit, willAct: willAct, didAct: didAct,
            navHeader: navHeader, asideHeader: asideHeader, init: init, showNav: showNav, showAside: showAside, defaultStylesheet: defaultStylesheet, autoScroll: autoScroll,
            autoMoveFocus: autoMoveFocus
        });
        this.modelArgs = { characters: characters, globalState: globalState, situations: situations, initialSituation: initialSituation, version: version };

        this.recreateModel();
        this.interactive = true;
    }

    createClass_default()(JumboGroveDirector, [{
        key: 'recreateModel',
        value: function recreateModel() {
            this.model = new jg_model(this, this.modelArgs);
        }
    }, {
        key: 'toString',
        value: function toString() {
            return 'Director(id=' + this.id + ')';
        }
    }, {
        key: 'bindToUI',
        value: function bindToUI(ui) {
            var _this = this;

            var wasBound = !!this.ui;
            this.ui = ui;
            ui.bind(this);
            this.model.navHeaderHTML = ui.renderMarkdown(this.navHeader);
            this.model.asideHeaderHTML = function () {
                return ui.renderMarkdownTemplate(_this.asideHeader);
            };
            if (!wasBound) {
                this.init(this.model, this.ui, this.ui.md);
            }
        }
    }, {
        key: 'start',
        value: function start() {
            if (this.model.currentSituation) {
                return; // vue.js is hot-reloading us
            }
            if (!this.load()) {
                this.goTo(this.model._initialSituationId);
            }
            bindGamepad(this);
        }
    }, {
        key: 'save',
        value: function save(toSituationId) {
            var saveId = this.id + '-' + this.version;
            localStorage[saveId] = stringify_default()({ toSituationId: toSituationId, model: this.model.toSave() });
        }
    }, {
        key: 'load',
        value: function load() {
            var saveId = this.id + '-' + this.version;
            if (!localStorage[saveId]) return false;
            var json = null;
            try {
                json = JSON.parse(localStorage[saveId]);
            } catch (e) {
                return false;
            }
            if (!json.model) return false;
            if (!json.toSituationId) return false;

            try {
                this.model.loadSave(json.model);
                this.goTo(json.toSituationId, true);
            } catch (e) {
                delete localStorage[saveId];
                this.recreateModel();
                this.start();
                return false;
            }
            return true;
        }
    }, {
        key: 'isManagedLink',
        value: function isManagedLink(href) {
            return commandsFromString(href).length > 0;
        }
    }, {
        key: 'getSnippetWrapperTag',
        value: function getSnippetWrapperTag(id) {
            if (!this.model.currentSituation.snippets[id]) {
                throw new Error('Snippet ' + this.model.currentSituation.id + '.' + id + ' doesn\'t exist');
            }
            return this.model.currentSituation.snippets[id].indexOf('\n') === -1 ? 'span' : 'div';
        }
    }, {
        key: 'getSnippetHTML',
        value: function getSnippetHTML(id) {
            if (!this.model.currentSituation.snippets[id]) {
                throw new Error('Snippet ' + this.model.currentSituation.id + '.' + id + ' doesn\'t exist');
            }
            return this.ui.renderMarkdownTemplateMaybeInline(this.model.currentSituation.snippets[id]);
        }
    }, {
        key: 'getSnippet',
        value: function getSnippet(id) {
            if (!this.model.currentSituation.snippets[id]) {
                throw new Error('Snippet ' + this.model.currentSituation.id + '.' + id + ' doesn\'t exist');
            }
            return this.ui.renderTemplate(this.model.currentSituation.snippets[id]);
        }
    }, {
        key: 'handleCommandString',
        value: function handleCommandString(s) {
            var itemId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var sourceElId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

            var restore = false;
            if (itemId !== null) {
                restore = true;
                this.activeItemId = itemId;
                this.activeSourceElId = sourceElId;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = get_iterator_default()(commandsFromString(s, this.activeItemId, this.activeSourceElId)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var cmd = _step.value;

                    this.handleCommand(cmd);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            if (restore) {
                this.activeItemId = null;
                this.activeSourceElId = null;
            }
        }
    }, {
        key: 'handleCommand',
        value: function handleCommand(cmd) {
            // console.log(cmd);
            switch (cmd.type) {
                case commands.runAction.name:
                    this.runAction(cmd.name, cmd.args);
                    break;
                case commands.goToSituation.name:
                    this.goTo(cmd.id);
                    break;
                case commands.write.name:
                    this.performWrite(cmd);
                    break;
                case commands.replace.name:
                    this.performReplace(cmd);
                    break;
                case commands.resetGame.name:
                    this.performResetGame(cmd);
                    break;
                default:
                    throw new Error("Unknown command: " + cmd);
            }
        }
    }, {
        key: 'performWrite',
        value: function performWrite(_ref2) {
            var itemId = _ref2.itemId,
                snippetId = _ref2.snippetId;

            this.ui.bus.$emit('write', {
                'itemId': itemId,
                'html': this.getSnippetHTML(snippetId)
            });
        }
    }, {
        key: 'performReplace',
        value: function performReplace(_ref3) {
            var itemId = _ref3.itemId,
                snippetId = _ref3.snippetId,
                elId = _ref3.elId;

            this.ui.bus.$emit('replace', {
                'itemId': itemId,
                'id': elId,
                'tag': this.getSnippetWrapperTag(snippetId),
                'html': this.getSnippetHTML(snippetId)
            });
        }
    }, {
        key: 'runAction',
        value: function runAction(name, args) {
            var _model$currentSituati;

            this.willAct.apply(this, [this.model, this.ui, this.model.currentSituation, name].concat(toConsumableArray_default()(args)));
            (_model$currentSituati = this.model.currentSituation).doAct.apply(_model$currentSituati, [this.model, this.ui, name].concat(toConsumableArray_default()(args)));
            this.didAct.apply(this, [this.model, this.ui, this.model.currentSituation, name].concat(toConsumableArray_default()(args)));
        }
    }, {
        key: 'performResetGame',
        value: function performResetGame() {
            var saveId = this.id + '-' + this.version;
            delete localStorage[saveId];
            location.reload();
        }
    }, {
        key: 'goTo',
        value: function goTo(id) {
            var isFromLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var next = this.model.situation(id);
            var previous = this.model.currentSituation;
            var previousId = previous ? previous.id : null;
            if (next.autosave && !isFromLoad) {
                this.save(id);
                this.ui.writeMarkdown('> Game saved.\n');
            }
            if (this.model.currentSituation) {
                this.willExit(this.model, this.ui, previousId, id);
                this.model.currentSituation.doExit(this.model, this.ui, next);
                this.didExit(this.model, this.ui, previousId, id);
            }
            this.model.currentSituation = null;

            // willEnter() may redirect us
            if (!this.willEnter(this.model, this.ui, previousId, id)) {
                return;
            }
            if (!next.willEnter(this.model, this.ui, previousId, id)) {
                return;
            }

            this.model.currentSituation = next;
            next.doEnter(this.model, this.ui, this, previous);
            this.didEnter(this.model, this.ui, previousId, id);
        }
    }, {
        key: 'focusNextElement',
        value: function focusNextElement() {
            if (this.autoMoveFocus) _focusNextElement();
        }
    }, {
        key: 'focusPreviousElement',
        value: function focusPreviousElement() {
            if (this.autoMoveFocus) _focusPreviousElement();
        }
    }]);

    return JumboGroveDirector;
}();

function parseAction(s) {
    return s.split(':');
}

function commandsFromString(str) {
    var itemId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var elId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    str = window.decodeURIComponent(str);
    return str.split(';').map(function (s) {
        if (s.startsWith('@')) {
            return commands.goToSituation.create(s.slice(1));
        }
        if (s.startsWith('>')) {
            var nameAndArgs = parseAction(s.slice(1));
            var name = nameAndArgs[0];
            var args = external__lodash__default.a.tail(nameAndArgs);
            switch (name.toLowerCase()) {
                case 'write':
                    return commands.write.create(itemId, args[0]);
                case 'replace':
                    return commands.replace.create(itemId, args[0], args[0]);
                case 'replaceself':
                    return commands.replace.create(itemId, args[0], elId);
                case 'resetgame':
                    return commands.resetGame.create();
                default:
                    return commands.runAction.create(name, args);
            }
        }
        return null;
    }).filter(function (cmd) {
        return cmd !== null;
    });
}

/* harmony default export */ var jg_director = (director_JumboGroveDirector);
// CONCATENATED MODULE: ./src/jg/index.js

/* harmony default export */ var jg = (jg_director);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Zx67");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("zwoO");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/get.js
var get = __webpack_require__("yEsh");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__("Pf15");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/promise.js
var promise = __webpack_require__("//Fk");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: external "markdown-it"
var external__markdown_it_ = __webpack_require__("/wPN");
var external__markdown_it__default = /*#__PURE__*/__webpack_require__.n(external__markdown_it_);

// EXTERNAL MODULE: external "markdown-it-attrs"
var external__markdown_it_attrs_ = __webpack_require__("/Zal");
var external__markdown_it_attrs__default = /*#__PURE__*/__webpack_require__.n(external__markdown_it_attrs_);

// CONCATENATED MODULE: ./src/jg/dataui.js









/**
 * @external {MarkdownIt} https://github.com/markdown-it/markdown-it
 */

/** @ignore */
function normalizeIndent(text) {
  if (!text) return text;

  var lines = external__lodash__default.a.trimEnd(text).split('\n');
  var indents = lines.filter(function (l) {
    return l !== '';
  }) // Ignore empty lines
  .map(function (l) {
    return l.match(/^\s+/);
  }).map(function (m) {
    if (m === null) return '';
    return m[0];
  });
  if (!indents.length) return text;
  var smallestIndent = indents.reduce(function (max, curr) {
    if (curr.length < max.length) return curr;
    return max;
  }); // Find the "bottom" indentation level
  return lines.map(function (l) {
    return l.replace(new RegExp('^' + smallestIndent), '');
  }).join('\n');
}

/**
 * Direct access to the HTML transcript.
 */

var dataui_ui = function () {
  /** @ignore */
  function ui() {
    var _this = this;

    classCallCheck_default()(this, ui);

    /** @ignore */
    this.content = [];
    /** @ignore */
    this.currentItemId = null;
    /** @ignore */
    this.currentGroupId = 0;
    /** @ignore */
    this.nextItemId = 0;
    /** @ignore */
    this.templateHelperGetters = {};

    /**
     * `MarkdownIt` instance used to render Markdown. You may register additional plugins here.
     * @type {MarkdownIt}
     */
    this.md = new external__markdown_it__default.a({ html: true, linkify: false, typographer: true });
    this.md.use(external__markdown_it_attrs__default.a);

    /** @ignore */
    this.templateHelperFunctions = {
      ifThen: function ifThen(condition, snippetTrue, snippetFalse) {
        return _this.director.getSnippet(condition ? snippetTrue : snippetFalse);
      },
      list: function list(conjunction) {
        for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          items[_key - 1] = arguments[_key];
        }

        if (items.length < 1) return '';
        if (items.length === 1) return items[0];
        return external__lodash__default.a.initial(items).join(', ') + ', ' + conjunction + ' ' + external__lodash__default.a.last(items);
      },
      listWithAction: function listWithAction(action, conjunction) {
        for (var _len2 = arguments.length, items = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          items[_key2 - 2] = arguments[_key2];
        }

        if (items.length < 1) return '';
        items = items.map(function (item) {
          return '[' + item + '](>' + action + ':' + window.encodeURIComponent(item) + ')';
        });
        if (items.length === 1) return items[0];
        return external__lodash__default.a.initial(items).join(', ') + ', ' + conjunction + ' ' + external__lodash__default.a.last(items);
      }
    };
  }

  /**
   * Make the given functions (or constants) available to the template context.
   * @param {Map<string, function>} fns 
   */


  createClass_default()(ui, [{
    key: 'addTemplateFunctions',
    value: function addTemplateFunctions(fns) {
      this.templateHelperFunctions = extends_default()({}, this.templateHelperFunctions, fns);
    }

    /**
     * Whenever a template is rendered, evaluate all these functions and make their
     * return values available to the template context.
     * @param {Map<string, function>} fns 
     */

  }, {
    key: 'addTemplateGetters',
    value: function addTemplateGetters(fns) {
      this.templateHelperGetters = extends_default()({}, this.templateHelperGetters, fns);
    }

    /** @ignore */

  }, {
    key: 'bind',
    value: function bind(director) {
      this.director = director;
    }

    /** @ignore */

  }, {
    key: 'templateContext',
    value: function templateContext() {
      var getters = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = get_iterator_default()(keys_default()(this.templateHelperGetters)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var k = _step.value;

          getters[k] = this.templateHelperGetters[k]();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = get_iterator_default()(keys_default()(this.director.model.templateHelperGetters)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _k = _step2.value;

          getters[_k] = this.director.model.templateHelperGetters[_k]();
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return extends_default()({}, this.director.model, {
        model: this.director.model,
        ui: this
      }, getters, this.templateHelperFunctions, this.director.model.templateHelperFunctions);
    }

    /**
     * Render the given Markdown text to HTML. Automatically dedents the text to the 
     * minimum indent level.
     * @param {string} text 
     * @param {Boolean} inline If true, do not parse any block-level markup or wrap in a paragraph.
     */

  }, {
    key: 'renderMarkdown',
    value: function renderMarkdown(text) {
      var inline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (inline) {
        // console.log('inline', text, '---', this.md.renderInline(normalizeIndent(text)))
        return this.md.renderInline(normalizeIndent(text));
      } else {
        // console.log('div', text, '---', this.md.render(normalizeIndent(text)));
        return this.md.render(normalizeIndent(text));
      }
    }

    /**
     * Process the text as a template and return the result.
     * @param {string} src 
     * @param {Map<string,*>|null} args Additional template context
     */

  }, {
    key: 'renderTemplate',
    value: function renderTemplate(src) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      try {
        return external__lodash__default.a.template(src)(extends_default()({}, args, this.templateContext()));
      } catch (e) {
        console.error(src);
        throw e;
      }
    }

    /**
     * Process the text as a template, render the resulting Markdown to HTML, and
     * return the result. Automatically dedents the text to the minimum indent level.
     * @param {string} src 
     * @param {Map<string,*>} args Additional template context
     * @param {Boolean} inline If true, do not parse any block-level markup or wrap in a paragraph.
     */

  }, {
    key: 'renderMarkdownTemplate',
    value: function renderMarkdownTemplate(src) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var inline = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      return this.renderMarkdown(this.renderTemplate(src, args), inline);
    }

    /**
     * Like {@link renderMarkdownTemplate}, but automatically sets `inline` flag based on
     * presence of line breaks.
     * @param {string} src 
     * @param {Map<string,*>} args Additional template context
     * @param {Boolean} inline If true, do not parse any block-level markup or wrap in a paragraph.
     */

  }, {
    key: 'renderMarkdownTemplateMaybeInline',
    value: function renderMarkdownTemplateMaybeInline(src) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var inline = src.indexOf('\n') === -1;
      return this.renderMarkdownTemplate(src, args, inline);
    }

    /** @ignore */

  }, {
    key: 'nextGroup',
    value: function nextGroup() {
      this.currentGroupId += 1;
    }

    /** @ignore */

  }, {
    key: 'append',
    value: function append(item) {
      item.id = this.nextItemId;
      this.nextItemId += 1;
      item.groupId = this.currentGroupId;
      this.content.push(item);
      this.currentItemId = item.id;
    }

    /**
     * Encode the given string so it doesn't mess up Markdown link parsing
     * @param {String} s 
     * @ignore
     */

  }, {
    key: 'encode',
    value: function encode(s) {
      return window.encodeURIComponent;
    }

    /**
     * Render the given HTML as a template and write it to the transcript.
     * Links are automatically bound to actions and situation transitions.
     * @param {string} html 
     * @param {Map<string,*>} args Additional template contet
     */

  }, {
    key: 'writeHTML',
    value: function writeHTML(html) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.append({
        'type': 'html',
        html: this.renderTemplate(html, args)
      });
    }

    /**
     * Render the given string as a template, render the resulting Markdown as HTML, and
     * write it to the transcript.
     * @param {string} markdown 
     * @param {Map<string,*>} args Additional template context
     */

  }, {
    key: 'writeMarkdown',
    value: function writeMarkdown(markdown) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      this.append({
        'type': 'html',
        html: this.renderMarkdownTemplate(markdown, args) });
    }

    /**
     * Given an array of tags or situation IDs (can be both in the same array), present
     * the relevant choices in the transcript using the logic in {@link model.interpretChoices}.
     * @param {string[]} arrayOfSituationIdsOrTags Array of strings containing either `#tags` or `situation-ids`.
     */

  }, {
    key: 'presentChoices',
    value: function presentChoices(arrayOfSituationIdsOrTags) {
      var _this2 = this;

      return new promise_default.a(function (resolve, reject) {
        var item = {
          'type': 'choice',
          choices: _this2.director.model.interpretChoices(arrayOfSituationIdsOrTags)
        };
        item.callback = function (situationId) {
          item.situationId = situationId;
          resolve({ situationId: situationId, itemId: item.id });
        };
        _this2.append(item);
      });
    }

    /**
     * Force the user to enter some text to continue.
     * @param {Map<string,*>} options
     * @param {string} options.placeholder Placeholder text for the input field
     * @returns {Promise<string>}
     */

  }, {
    key: 'promptInput',
    value: function promptInput(_ref) {
      var _this3 = this;

      var placeholder = _ref.placeholder;

      return new promise_default.a(function (resolve, reject) {
        _this3.append({ 'type': 'input', placeholder: placeholder, callback: resolve });
      });
    }
  }]);

  return ui;
}();

/* harmony default export */ var dataui = (dataui_ui);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/JGHTMLItem.vue
//
//
//
//
//
//
//




function removeLink(el) {
  var extraClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var sibling = document.createElement('span');
  sibling.id = el.id;
  sibling.className = "JGHTMLAddition m-disabled-link " + extraClass;
  el.style.display = 'none';
  el.id = null;
  while (el.childNodes.length > 0) {
    sibling.appendChild(el.childNodes[0]);
  }el.parentElement.insertBefore(sibling, el);
  el.parentElement.removeChild(el);
  return sibling;
}

function replace(el, tag, html) {
  var sibling = document.createElement(tag);
  sibling.className = "JGHTMLAddition m-replacement";
  sibling.innerHTML = html;
  el.style.display = 'none';
  el.parentElement.insertBefore(sibling, el);
  return sibling;
}

/* harmony default export */ var JGHTMLItem = ({
  name: 'JGHTMLItem',
  props: ['item', 'director', 'isActiveGroup', 'ui'],
  data: function data() {
    return { writerOutputs: [], uniqueId: 0 };
  },
  methods: {

    getManagedAnchors: function getManagedAnchors(parent) {
      var _this = this;

      parent = parent || this.$el;
      return external__lodash__default.a.toArray(this.$el.querySelectorAll('a')).filter(function (el) {
        var href = el.attributes.href;
        if (!href) return false;
        if (!_this.director.isManagedLink(href.value)) return false;
        return true;
      });
    },

    removeLinks: function removeLinks() {
      this.getManagedAnchors().forEach(removeLink);
    },

    bindLinks: function bindLinks(anchors) {
      var _this2 = this;

      anchors.forEach(function (el) {
        if (el.dataset.isbound) return;
        _this2.uniqueId += 1;
        el.id = 'JGHTML-' + _this2.item.id + '-' + _this2.uniqueId;
        el.dataset.isbound = "true";
        el.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          // somehow dead elements are getting click events. Stop the madness.
          if (!el.parentElement) return;
          var href = el.attributes.href;
          _this2.director.focusNextElement();
          var replacement = removeLink(el, 'm-unavailable');
          _this2.director.handleCommandString(href.value, _this2.item.id, replacement.id);
        });
      });
    },

    doAnimations: function doAnimations() {
      external__lodash__default.a.toArray(this.$el.querySelectorAll('.JGHTMLAddition')).forEach(function (child) {
        if (child.className.indexOf('m-animated') === -1) {
          child.className += ' m-animated';
        }
      });

      if (this.$el.className.indexOf('m-animated') === -1) {
        this.$el.className += ' m-animated';
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.bindLinks(this.getManagedAnchors());
    this.doAnimations();

    this.ui.bus.$on('write', function (_ref) {
      var itemId = _ref.itemId,
          html = _ref.html;

      if (itemId !== _this3.item.id) return;
      _this3.writerOutputs.push(html);
      _this3.$nextTick(function () {
        _this3.bindLinks(_this3.getManagedAnchors(_this3.$el));
        if (!_this3.director.autoScroll) return;
        _this3.doAnimations();
        var bottomEl = external__lodash__default.a.last(document.querySelectorAll('.m-addition'));
        if (!bottomEl) return;
        var bottomBottom = bottomEl.offsetTop + bottomEl.offsetHeight + 16;
        external__animated_scroll_to__default()(bottomBottom - window.innerHeight);
      });
    });

    this.ui.bus.$on('replace', function (_ref2) {
      var itemId = _ref2.itemId,
          html = _ref2.html,
          id = _ref2.id,
          tag = _ref2.tag;

      if (itemId !== _this3.item.id) return;
      var el = _this3.$el.querySelector('#' + id);
      if (!el) {
        console.warn("id not found:", id);
        return;
      }
      var replacement = replace(el, tag, html);
      _this3.bindLinks(_this3.getManagedAnchors(replacement));
      _this3.$nextTick(function () {
        return _this3.doAnimations();
      });
    });
  },

  updated: function updated() {
    this.doAnimations();
  },

  watch: {
    isActiveGroup: function isActiveGroup() {
      if (this.isActiveGroup) return;
      this.removeLinks();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-119fe3a5","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGHTMLItem.vue
var JGHTMLItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"JGHTMLItem",attrs:{"data-itemid":_vm.item.id}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.item.html)}}),_vm._v(" "),_vm._l((_vm.writerOutputs),function(html,i){return _c('div',{key:i,staticClass:"JGHTMLAddition m-addition",domProps:{"innerHTML":_vm._s(html)}})})],2)}
var JGHTMLItem_staticRenderFns = []
var JGHTMLItem_esExports = { render: JGHTMLItem_render, staticRenderFns: JGHTMLItem_staticRenderFns }
/* harmony default export */ var components_JGHTMLItem = (JGHTMLItem_esExports);
// CONCATENATED MODULE: ./src/components/JGHTMLItem.vue
function JGHTMLItem_injectStyle (ssrContext) {
  __webpack_require__("v/P1")
}
var JGHTMLItem_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var JGHTMLItem___vue_template_functional__ = false
/* styles */
var JGHTMLItem___vue_styles__ = JGHTMLItem_injectStyle
/* scopeId */
var JGHTMLItem___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var JGHTMLItem___vue_module_identifier__ = null
var JGHTMLItem_Component = JGHTMLItem_normalizeComponent(
  JGHTMLItem,
  components_JGHTMLItem,
  JGHTMLItem___vue_template_functional__,
  JGHTMLItem___vue_styles__,
  JGHTMLItem___vue_scopeId__,
  JGHTMLItem___vue_module_identifier__
)

/* harmony default export */ var src_components_JGHTMLItem = (JGHTMLItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/JGChoiceItem.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var JGChoiceItem = ({
  name: 'JGChoiceItem',
  props: ['item', 'isActiveGroup'],
  methods: {
    onClick: function onClick(e) {
      if (!e.target.dataset.isenabled === 'true') return;
      this.item.callback(e.target.dataset.situationid);
    },
    focus: function focus() {
      var _window = window,
          scrollX = _window.scrollX,
          scrollY = _window.scrollY;

      if (this.isActiveGroup && this.$el.querySelector('a')) this.$el.querySelector('a').focus();
      window.scrollTo(scrollX, scrollY);
    }
  },
  mounted: function mounted() {
    this.focus();
  },
  updated: function updated() {
    this.focus();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-519e8623","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGChoiceItem.vue
var JGChoiceItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"JGChoiceItem",attrs:{"data-itemid":_vm.item.id}},[_c('ul',_vm._l((_vm.item.choices),function(choice){return _c('li',{key:choice.situationId},[(_vm.isActiveGroup && choice.isEnabled)?_c('a',{class:{ 'm-disabled': !choice.isEnabled },attrs:{"data-situationid":choice.situationId,"data-isenabled":choice.isEnabled,"href":'@' + choice.situationId},on:{"click":function($event){$event.preventDefault();_vm.onClick($event)}}},[_vm._v("\n         "+_vm._s(choice.text)+"\n      ")]):(_vm.isActiveGroup)?_c('span',{class:{
        'm-disabled-link': true,
      }},[_vm._v("\n        "+_vm._s(choice.text)+"\n      ")]):_c('span',{class:{
        'm-disabled-link': true,
        'm-selected': _vm.item.situationId === choice.situationId,
        'm-unavailable': _vm.item.situationId !== choice.situationId,
      }},[_vm._v("\n        "+_vm._s(choice.text)+"\n      ")])])}))])}
var JGChoiceItem_staticRenderFns = []
var JGChoiceItem_esExports = { render: JGChoiceItem_render, staticRenderFns: JGChoiceItem_staticRenderFns }
/* harmony default export */ var components_JGChoiceItem = (JGChoiceItem_esExports);
// CONCATENATED MODULE: ./src/components/JGChoiceItem.vue
function JGChoiceItem_injectStyle (ssrContext) {
  __webpack_require__("ToLL")
}
var JGChoiceItem_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var JGChoiceItem___vue_template_functional__ = false
/* styles */
var JGChoiceItem___vue_styles__ = JGChoiceItem_injectStyle
/* scopeId */
var JGChoiceItem___vue_scopeId__ = "data-v-519e8623"
/* moduleIdentifier (server only) */
var JGChoiceItem___vue_module_identifier__ = null
var JGChoiceItem_Component = JGChoiceItem_normalizeComponent(
  JGChoiceItem,
  components_JGChoiceItem,
  JGChoiceItem___vue_template_functional__,
  JGChoiceItem___vue_styles__,
  JGChoiceItem___vue_scopeId__,
  JGChoiceItem___vue_module_identifier__
)

/* harmony default export */ var src_components_JGChoiceItem = (JGChoiceItem_Component.exports);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/JGInputItem.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var JGInputItem = ({
  name: 'JGInputItem',
  props: ['item', 'isActiveGroup'],
  data: function data() {
    return { text: '' };
  },
  methods: {
    onSubmit: function onSubmit() {
      this.item.callback(this.text);
    }
  },
  mounted: function mounted() {
    var _window = window,
        scrollX = _window.scrollX,
        scrollY = _window.scrollY;

    if (this.isActiveGroup) this.$el.querySelector('input').focus();
    window.scrollTo(scrollX, scrollY);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-126724b2","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGInputItem.vue
var JGInputItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"JGInputItem"},[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.onSubmit($event)}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.text),expression:"text"}],attrs:{"placeholder":_vm.item.placeholder,"disabled":!_vm.isActiveGroup},domProps:{"value":(_vm.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.text=$event.target.value}}})])])}
var JGInputItem_staticRenderFns = []
var JGInputItem_esExports = { render: JGInputItem_render, staticRenderFns: JGInputItem_staticRenderFns }
/* harmony default export */ var components_JGInputItem = (JGInputItem_esExports);
// CONCATENATED MODULE: ./src/components/JGInputItem.vue
function JGInputItem_injectStyle (ssrContext) {
  __webpack_require__("WsSS")
}
var JGInputItem_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var JGInputItem___vue_template_functional__ = false
/* styles */
var JGInputItem___vue_styles__ = JGInputItem_injectStyle
/* scopeId */
var JGInputItem___vue_scopeId__ = "data-v-126724b2"
/* moduleIdentifier (server only) */
var JGInputItem___vue_module_identifier__ = null
var JGInputItem_Component = JGInputItem_normalizeComponent(
  JGInputItem,
  components_JGInputItem,
  JGInputItem___vue_template_functional__,
  JGInputItem___vue_styles__,
  JGInputItem___vue_scopeId__,
  JGInputItem___vue_module_identifier__
)

/* harmony default export */ var src_components_JGInputItem = (JGInputItem_Component.exports);

// CONCATENATED MODULE: ./src/jg/vueui.js












/** @ignore */

var vueui_VueUI = function (_DataUI) {
  inherits_default()(VueUI, _DataUI);

  function VueUI() {
    classCallCheck_default()(this, VueUI);

    var _this = possibleConstructorReturn_default()(this, (VueUI.__proto__ || get_prototype_of_default()(VueUI)).apply(this, arguments));

    _this.componentMap = {
      'html': src_components_JGHTMLItem,
      'choice': src_components_JGChoiceItem,
      'input': src_components_JGInputItem
    };
    _this.bus = new external__vue__default.a();
    return _this;
  }

  createClass_default()(VueUI, [{
    key: "append",
    value: function append() {
      if (!this.componentMap[arguments[0].type]) {
        throw Error("Missing component for type " + arguments[0].type);
      }
      this.bus.$emit('refocus');
      get_default()(VueUI.prototype.__proto__ || get_prototype_of_default()(VueUI.prototype), "append", this).apply(this, arguments);
    }
  }, {
    key: "register",
    value: function register(type, VueComponentClass) {
      this.componentMap[type] = VueComponentClass;
    }
  }]);

  return VueUI;
}(dataui);

/* harmony default export */ var vueui = (vueui_VueUI);
// CONCATENATED MODULE: ./src/main.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jumbogrove", function() { return main_jumbogrove; });
/** @module jumbogrove */





external__vue__default.a.config.productionTip = false;

/* eslint-disable no-new */

/**
 * The main entry point for Jumbo Grove.
 * 
 * @example
 * import { jumbogrove } from 'jumbogrove';
 * jumbogrove('#game', {
 *  // your game here
 * });
 * 
 * @param {string} selector A CSS selector for the element you want the story to be rendered in.
 * @param {object} data Your story
 */
var main_jumbogrove = function jumbogrove(selector, data) {
  var director = new jg(data);
  var ui = new vueui();
  director.bindToUI(ui);
  var existingClasses = document.querySelector(selector).className;
  new external__vue__default.a({
    el: selector,
    template: '<App :director="director" :ui="ui" :class="existingClasses" />',
    components: { App: src_App },
    data: { director: director, ui: ui, existingClasses: existingClasses }
  });
};

window.jumbogrove = {
  jumbogrove: main_jumbogrove
};



/***/ }),

/***/ "NWt+":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("+ZMJ");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var anObject = __webpack_require__("77Pl");
var toLength = __webpack_require__("QRG4");
var getIterFn = __webpack_require__("3fs2");
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

/***/ "NpIQ":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "O4g8":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ON07":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("EqjI");
var document = __webpack_require__("7KvD").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "OYls":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("crlp")('asyncIterator');


/***/ }),

/***/ "OvRC":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("oM7Q"), __esModule: true };

/***/ }),

/***/ "PbPb":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_PbPb__;

/***/ }),

/***/ "Pf15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("kiBT");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("OvRC");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "PzxK":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("D2L2");
var toObject = __webpack_require__("sB3e");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "QRG4":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("UuGF");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "QWe/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("crlp")('observable');


/***/ }),

/***/ "R4wc":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("kM2E");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("To3L") });


/***/ }),

/***/ "R9M2":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "RPLV":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7KvD").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "RY/4":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("R9M2");
var TAG = __webpack_require__("dSzd")('toStringTag');
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

/***/ "Rrel":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("TcQ7");
var gOPN = __webpack_require__("n0T6").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "S82l":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "SfB7":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("+E39") && !__webpack_require__("S82l")(function () {
  return Object.defineProperty(__webpack_require__("ON07")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "TcQ7":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("MU5D");
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "TmV0":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("fZOM");
module.exports = __webpack_require__("FeBl").Object.values;


/***/ }),

/***/ "To3L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
var toObject = __webpack_require__("sB3e");
var IObject = __webpack_require__("MU5D");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("S82l")(function () {
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

/***/ "ToLL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U5ju":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("M6a0");
__webpack_require__("zQR9");
__webpack_require__("+tPU");
__webpack_require__("CXw9");
__webpack_require__("EqBC");
__webpack_require__("jKW+");
module.exports = __webpack_require__("FeBl").Promise;


/***/ }),

/***/ "UuGF":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "V3tA":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("R4wc");
module.exports = __webpack_require__("FeBl").Object.assign;


/***/ }),

/***/ "VU/8":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "WsSS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "X8DO":
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

/***/ "Xc4G":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("lktj");
var gOPS = __webpack_require__("1kS7");
var pIE = __webpack_require__("NpIQ");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "YQO/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Yobk":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("77Pl");
var dPs = __webpack_require__("qio6");
var enumBugKeys = __webpack_require__("xnc9");
var IE_PROTO = __webpack_require__("ax3d")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("ON07")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("RPLV").appendChild(iframe);
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

/***/ "ZaQb":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("EqjI");
var anObject = __webpack_require__("77Pl");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("+ZMJ")(Function.call, __webpack_require__("LKZe").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "Zrlr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "Zx67":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("fS6E"), __esModule: true };

/***/ }),

/***/ "Zzip":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("/n6Q"), __esModule: true };

/***/ }),

/***/ "ax3d":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("e8AB")('keys');
var uid = __webpack_require__("3Eo+");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "bRrM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var dP = __webpack_require__("evD5");
var DESCRIPTORS = __webpack_require__("+E39");
var SPECIES = __webpack_require__("dSzd")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "c/Tr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("5zde"), __esModule: true };

/***/ }),

/***/ "cnlX":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("iInB");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),

/***/ "crlp":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var LIBRARY = __webpack_require__("O4g8");
var wksExt = __webpack_require__("Kh4W");
var defineProperty = __webpack_require__("evD5").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "dNDb":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "dSzd":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("e8AB")('wks');
var uid = __webpack_require__("3Eo+");
var Symbol = __webpack_require__("7KvD").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "dY0y":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("dSzd")('iterator');
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

/***/ "e6n0":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("evD5").f;
var has = __webpack_require__("D2L2");
var TAG = __webpack_require__("dSzd")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "e8AB":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "evD5":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var IE8_DOM_DEFINE = __webpack_require__("SfB7");
var toPrimitive = __webpack_require__("MmMw");
var dP = Object.defineProperty;

exports.f = __webpack_require__("+E39") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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

/***/ "exh5":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__("kM2E");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZaQb").set });


/***/ }),

/***/ "fBQ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "fJUb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var isObject = __webpack_require__("EqjI");
var newPromiseCapability = __webpack_require__("qARP");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "fS6E":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Kh5d");
module.exports = __webpack_require__("FeBl").Object.getPrototypeOf;


/***/ }),

/***/ "fWfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7KvD");
var has = __webpack_require__("D2L2");
var DESCRIPTORS = __webpack_require__("+E39");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var META = __webpack_require__("06OY").KEY;
var $fails = __webpack_require__("S82l");
var shared = __webpack_require__("e8AB");
var setToStringTag = __webpack_require__("e6n0");
var uid = __webpack_require__("3Eo+");
var wks = __webpack_require__("dSzd");
var wksExt = __webpack_require__("Kh4W");
var wksDefine = __webpack_require__("crlp");
var enumKeys = __webpack_require__("Xc4G");
var isArray = __webpack_require__("7UMu");
var anObject = __webpack_require__("77Pl");
var toIObject = __webpack_require__("TcQ7");
var toPrimitive = __webpack_require__("MmMw");
var createDesc = __webpack_require__("X8DO");
var _create = __webpack_require__("Yobk");
var gOPNExt = __webpack_require__("Rrel");
var $GOPD = __webpack_require__("LKZe");
var $DP = __webpack_require__("evD5");
var $keys = __webpack_require__("lktj");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("n0T6").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("NpIQ").f = $propertyIsEnumerable;
  __webpack_require__("1kS7").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("O4g8")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("hJx8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "fZOM":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("kM2E");
var $values = __webpack_require__("mbce")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "fZjL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("jFbC"), __esModule: true };

/***/ }),

/***/ "fkB2":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "fxRn":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+tPU");
__webpack_require__("zQR9");
module.exports = __webpack_require__("g8Ux");


/***/ }),

/***/ "g8Ux":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("77Pl");
var get = __webpack_require__("3fs2");
module.exports = __webpack_require__("FeBl").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "gRE1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("TmV0"), __esModule: true };

/***/ }),

/***/ "h65t":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("UuGF");
var defined = __webpack_require__("52gC");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "hJx8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var createDesc = __webpack_require__("X8DO");
module.exports = __webpack_require__("+E39") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "i/C/":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("exh5");
module.exports = __webpack_require__("FeBl").Object.setPrototypeOf;


/***/ }),

/***/ "iInB":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__("TcQ7");
var $getOwnPropertyDescriptor = __webpack_require__("LKZe").f;

__webpack_require__("uqUo")('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),

/***/ "jFbC":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("Cdx3");
module.exports = __webpack_require__("FeBl").Object.keys;


/***/ }),

/***/ "jKW+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__("kM2E");
var newPromiseCapability = __webpack_require__("qARP");
var perform = __webpack_require__("dNDb");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "jzjE":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kM2E":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7KvD");
var core = __webpack_require__("FeBl");
var ctx = __webpack_require__("+ZMJ");
var hide = __webpack_require__("hJx8");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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

/***/ "kiBT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("i/C/"), __esModule: true };

/***/ }),

/***/ "knuC":
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

/***/ "lOnJ":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "lRwf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lRwf__;

/***/ }),

/***/ "lktj":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("Ibhu");
var enumBugKeys = __webpack_require__("xnc9");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "mClu":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("+E39"), 'Object', { defineProperty: __webpack_require__("evD5").f });


/***/ }),

/***/ "mbce":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("lktj");
var toIObject = __webpack_require__("TcQ7");
var isEnum = __webpack_require__("NpIQ").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "msXi":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("77Pl");
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

/***/ "mvHQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("qkKv"), __esModule: true };

/***/ }),

/***/ "n0T6":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("Ibhu");
var hiddenKeys = __webpack_require__("xnc9").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "oM7Q":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("sF+V");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),

/***/ "pFYg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("Zzip");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("5QVw");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "pvc8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "qARP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("lOnJ");

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

/***/ "qio6":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("evD5");
var anObject = __webpack_require__("77Pl");
var getKeys = __webpack_require__("lktj");

module.exports = __webpack_require__("+E39") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "qkKv":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "qyJz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("+ZMJ");
var $export = __webpack_require__("kM2E");
var toObject = __webpack_require__("sB3e");
var call = __webpack_require__("msXi");
var isArrayIter = __webpack_require__("Mhyx");
var toLength = __webpack_require__("QRG4");
var createProperty = __webpack_require__("fBQ2");
var getIterFn = __webpack_require__("3fs2");

$export($export.S + $export.F * !__webpack_require__("dY0y")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "sB3e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("52gC");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "sF+V":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("kM2E");
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__("Yobk") });


/***/ }),

/***/ "t8x9":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("77Pl");
var aFunction = __webpack_require__("lOnJ");
var SPECIES = __webpack_require__("dSzd")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "uqUo":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("kM2E");
var core = __webpack_require__("FeBl");
var fails = __webpack_require__("S82l");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "v/P1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vFc/":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("TcQ7");
var toLength = __webpack_require__("QRG4");
var toAbsoluteIndex = __webpack_require__("fkB2");
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

/***/ "vIB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("O4g8");
var $export = __webpack_require__("kM2E");
var redefine = __webpack_require__("880/");
var hide = __webpack_require__("hJx8");
var has = __webpack_require__("D2L2");
var Iterators = __webpack_require__("/bQp");
var $iterCreate = __webpack_require__("94VQ");
var setToStringTag = __webpack_require__("e6n0");
var getPrototypeOf = __webpack_require__("PzxK");
var ITERATOR = __webpack_require__("dSzd")('iterator');
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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

/***/ "woOf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("V3tA"), __esModule: true };

/***/ }),

/***/ "wxAW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("C4MV");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "xGkn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("4mcu");
var step = __webpack_require__("EGZi");
var Iterators = __webpack_require__("/bQp");
var toIObject = __webpack_require__("TcQ7");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("vIB/")(Array, 'Array', function (iterated, kind) {
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

/***/ "xH/j":
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__("hJx8");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),

/***/ "xnc9":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "yEsh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__("K6ED");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ }),

/***/ "zQR9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("h65t")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("vIB/")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "zwoO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ })

/******/ });
});
//# sourceMappingURL=app.js.map