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

/***/ "162o":
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__("mypn");
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


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

/***/ "DuR2":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-73f405de","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGAside.vue
var JGAside_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{class:{'JGAside': true, 'm-open': _vm.isOpen, 'm-closed': !_vm.isOpen}},[_c('div',{staticClass:"JGAsideToggle",on:{"click":function($event){$event.stopPropagation();_vm.onToggleVisibility($event)}}},[_vm._v("\n    "+_vm._s(_vm.isOpen ? '×' : 'i')+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"JGAsideContents"},[_c('JGNav',{staticClass:"m-within-aside",attrs:{"model":_vm.model}}),_vm._v(" "),_c('hgroup',[_c('div',{domProps:{"innerHTML":_vm._s(_vm.model.asideHeaderHTML())}}),_vm._v(" "),_c('ul',{staticClass:"Characters"},_vm._l((_vm.model.allCharacters),function(character){return (character.showInSidebar)?_c('li',{key:character.id},[_c('h2',[_vm._v(_vm._s(character.name))]),_vm._v(" "),_c('ul',{staticClass:"CharacterQualityGroups"},_vm._l((character.sortedQualityGroups),function(group){return (!group.hidden)?_c('li',{key:group.id},[(group.name)?_c('h3',[_vm._v(_vm._s(group.name))]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"CharacterQualities"},_vm._l((character.sortedQualities(group.id)),function(quality){return ((
                      !quality.hidden &&
                      (!quality.isVisible ||
                       quality.isVisible(character, quality, quality.value))
                    ))?_c('li',{key:quality.id},[((
                    quality.isLabeled &&
                    quality.isLabeled(character, quality, quality.value)))?[_vm._v("\n                    "+_vm._s(character.formatQuality(quality.id))+"\n                  ")]:[_c('strong',[_vm._v(_vm._s(quality.name)+":")]),_vm._v("\n                    "+_vm._s(character.formatQuality(quality.id))+"\n                  ")]],2):_vm._e()}))]):_vm._e()}))]):_vm._e()}))])],1)])}
var JGAside_staticRenderFns = []
var JGAside_esExports = { render: JGAside_render, staticRenderFns: JGAside_staticRenderFns }
/* harmony default export */ var components_JGAside = (JGAside_esExports);
// CONCATENATED MODULE: ./src/components/JGAside.vue
function JGAside_injectStyle (ssrContext) {
  __webpack_require__("PaGb")
}
var JGAside_normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var JGAside___vue_template_functional__ = false
/* styles */
var JGAside___vue_styles__ = JGAside_injectStyle
/* scopeId */
var JGAside___vue_scopeId__ = "data-v-73f405de"
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
    return -priority || 0;
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
     * @param {Boolean} args.autosave If true, transcript will be cleared when
     *                                scene is entered. Default false.
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
            _ref$clear = _ref.clear,
            clear = _ref$clear === undefined ? false : _ref$clear,
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
            getCanChoose: getCanChoose, getCanSee: getCanSee, priority: priority, clear: clear,
            displayOrder: displayOrder, optionText: optionText, enter: enter, act: act, exit: exit, content: content, actions: actions, choices: choices,
            snippets: snippets, input: input, willEnter: willEnter, autosave: autosave
        });
    }

    /**
     * Returns `true` if this situation has the given tag, otherwise `false`.
     * @param {string} tag The tag to check for
     * @returns {bool}
     */


    createClass_default()(Situation, [{
        key: 'hasTag',
        value: function hasTag(tag) {
            return this.tags.indexOf(tag) !== -1;
        }

        /** @ignore */

    }, {
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
            if (this.clear) {
                ui.clear();
            }
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

        /**
         * Given an array of tags or situation IDs (can be both in the same array),
         * present the relevant choices in the transcript using the logic in
         * {@link model.interpretChoices}, then go to the situation chosen by the
         * player.
         * @param {string[]} arrayOfSituationIdsOrTags Array of strings containing either `#tags` or `situation-ids`.
         */

    }, {
        key: 'presentChoices',
        value: function presentChoices(arrayOfSituationIdsOrTags) {
            var _this3 = this;

            this._director.ui.presentChoices(arrayOfSituationIdsOrTags).then(function (_ref5) {
                var situationId = _ref5.situationId,
                    itemId = _ref5.itemId;

                _this3.do('@' + situationId, itemId, 'fake');
            });
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
            _ref$gameSaveMessage = _ref.gameSaveMessage,
            gameSaveMessage = _ref$gameSaveMessage === undefined ? null : _ref$gameSaveMessage,
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
            navHeader: navHeader, asideHeader: asideHeader, init: init, showNav: showNav, showAside: showAside,
            defaultStylesheet: defaultStylesheet, autoScroll: autoScroll, autoMoveFocus: autoMoveFocus, gameSaveMessage: gameSaveMessage
        });
        this.modelArgs = { characters: characters, globalState: globalState, situations: situations, initialSituation: initialSituation, version: version };

        this.activeItemId = null;

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
            this.init(this.model, this.ui, wasBound);
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
                if (this.gameSaveMessage) {
                    this.ui.writeMarkdown(this.gameSaveMessage);
                }
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

// EXTERNAL MODULE: ./node_modules/nunjucks/browser/nunjucks.js
var nunjucks = __webpack_require__("X2Rv");
var nunjucks_default = /*#__PURE__*/__webpack_require__.n(nunjucks);

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
     * {@link MarkdownIt} instance used to render Markdown. You may use it
     * to register additional plugins.
     * @type {MarkdownIt}
     */
    this.md = new external__markdown_it__default.a({ html: true, linkify: false, typographer: true });
    this.md.use(external__markdown_it_attrs__default.a);

    /**
     * {@link nunjucks} instance used to render templates. You may use it
     * to add custom tags, filters, or globals. (See [the "Environment" section
     * of this page.](https://mozilla.github.io/nunjucks/api.html))
     */
    this.nunjucks = new nunjucks_default.a.Environment([], {
      autoescape: false,
      tags: {
        commentStart: '{##',
        commentEnd: '##}'
      }
    });

    this.nunjucks.addFilter('qualityName', function (char, q) {
      return char.formatQualityName(q);
    });

    this.nunjucks.addFilter('quality', function (char, q) {
      return char.formatQuality(q);
    });

    /**
     * You may replace this property if you want to use a template
     * language other than [Nunjucks](https://mozilla.github.io/nunjucks/).
     * 
     * It is a function that takes a string and returns a function that takes
     * attrs and returns a rendered string. Like this:
     * 
     * ```
     * (src) => (attrs) => render(src, attrs)
     * ```
     * @param {function(src: string): function} src 
     */
    this.createTemplate = function (src) {
      return function (attrs) {
        return _this.nunjucks.renderString(src, attrs);
      };
    };

    /** @ignore */
    this.templateHelperFunctions = {};
  }

  /**
   * Make the given objects or values available to the template context.
   * @param {Map<string, function>} fns 
   */


  createClass_default()(ui, [{
    key: 'addTemplateContext',
    value: function addTemplateContext(fns) {
      this.templateHelperFunctions = extends_default()({}, this.templateHelperFunctions, fns);
    }

    /**
     * Whenever a template is rendered, evaluate all these functions and make their
     * return values available to the template context.
     * 
     * **All template getters are called whenever you render any template.**
     * 
     * @example
     * 
     * // If you add a getter like this:
     * jumbogrove.jumbogrove('#game', {
     *   init: (model, ui) => {
     *     ui.addTemplateGetters({
     *       randomNumber: () => Math.random()
     *     });
     *   }
     * });
     * 
     * // Then you may use it in a template like this:
     * 
     * `
     * {{ randomNumber }}
     * `
     * 
     * // and it will show the function's return value (in this case, a random
     * // number 0-1).
     * 
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

      return extends_default()({}, this.director.model.globalState, this.director.model, getters, this.templateHelperFunctions, {
        model: this.director.model,
        ui: this
      });
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
        return this.createTemplate(src)(extends_default()({}, args, this.templateContext()));
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
     * 
     * The output comes after ALL HTML in the current section, If you are
     * presenting a choice, the HTML will be written BELOW the choice.
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
     * 
     * The output comes after ALL HTML in the current section, If you are
     * presenting a choice, the text will be written BELOW the choice.
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
     * Render the given HTML as a template and write it to the transcript
     * WITHIN THE CURRENT SECTION. If you are writing HTML from inside
     * an action function, this is probably what you want.
     * 
     * @param {string} markdown 
     * @param {Map<string,*>} args Additional template context
     */

  }, {
    key: 'write',
    value: function write(markdown, args) {
      if (this.director.activeItemId !== null) {
        this.bus.$emit('write', {
          'itemId': this.director.activeItemId,
          'html': this.renderMarkdownTemplate(markdown, args)
        });
      } else {
        this.writeMarkdown(markdown, args);
      }
    }

    /**
     * Remove all content from the transcript and start fresh.
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.content = [];
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
          _this2.$nextTick(function () {
            return _this2.doAnimations();
          });
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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b072e0e8","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/JGHTMLItem.vue
var JGHTMLItem_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"JGHTMLItem",attrs:{"data-itemid":_vm.item.id}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.item.html)}}),_vm._v(" "),_vm._l((_vm.writerOutputs),function(html,i){return _c('div',{key:i,staticClass:"JGHTMLAddition m-addition",domProps:{"innerHTML":_vm._s(html)}})})],2)}
var JGHTMLItem_staticRenderFns = []
var JGHTMLItem_esExports = { render: JGHTMLItem_render, staticRenderFns: JGHTMLItem_staticRenderFns }
/* harmony default export */ var components_JGHTMLItem = (JGHTMLItem_esExports);
// CONCATENATED MODULE: ./src/components/JGHTMLItem.vue
function JGHTMLItem_injectStyle (ssrContext) {
  __webpack_require__("h0y4")
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
 * The main entry point for Jumbo Grove; call `jumbogrove.jumbogrove(selector, data)`
 * 
 * @example
 * import { jumbogrove } from 'jumbogrove';
 * jumbogrove('#game', {
 *  // your game here
 * });
 * 
 * @param {string} selector A CSS selector for the element you want the story to be rendered in.
 * @param {game} data Your story
 */
var main_jumbogrove = function jumbogrove(selector, data) {
  var director = new jg(data);
  var ui = new vueui();
  director.bindToUI(ui);
  if (!document.querySelector(selector)) {
    throw new Error('Can\'t run Jumbo Grove; no selector matches ' + selector);
  }
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

/***/ "PaGb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "W2nU":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "WsSS":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "X2Rv":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {/*! Browser bundle of nunjucks 3.0.1  */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nunjucks"] = factory();
	else
		root["nunjucks"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var lib = __webpack_require__(1);
	var env = __webpack_require__(2);
	var Loader = __webpack_require__(16);
	var loaders = __webpack_require__(15);
	var precompile = __webpack_require__(3);

	module.exports = {};
	module.exports.Environment = env.Environment;
	module.exports.Template = env.Template;

	module.exports.Loader = Loader;
	module.exports.FileSystemLoader = loaders.FileSystemLoader;
	module.exports.PrecompiledLoader = loaders.PrecompiledLoader;
	module.exports.WebLoader = loaders.WebLoader;

	module.exports.compiler = __webpack_require__(7);
	module.exports.parser = __webpack_require__(8);
	module.exports.lexer = __webpack_require__(9);
	module.exports.runtime = __webpack_require__(13);
	module.exports.lib = lib;
	module.exports.nodes = __webpack_require__(10);

	module.exports.installJinjaCompat = __webpack_require__(22);

	// A single instance of an environment, since this is so commonly used

	var e;
	module.exports.configure = function(templatesPath, opts) {
	    opts = opts || {};
	    if(lib.isObject(templatesPath)) {
	        opts = templatesPath;
	        templatesPath = null;
	    }

	    var TemplateLoader;
	    if(loaders.FileSystemLoader) {
	        TemplateLoader = new loaders.FileSystemLoader(templatesPath, {
	            watch: opts.watch,
	            noCache: opts.noCache
	        });
	    }
	    else if(loaders.WebLoader) {
	        TemplateLoader = new loaders.WebLoader(templatesPath, {
	            useCache: opts.web && opts.web.useCache,
	            async: opts.web && opts.web.async
	        });
	    }

	    e = new env.Environment(TemplateLoader, opts);

	    if(opts && opts.express) {
	        e.express(opts.express);
	    }

	    return e;
	};

	module.exports.compile = function(src, env, path, eagerCompile) {
	    if(!e) {
	        module.exports.configure();
	    }
	    return new module.exports.Template(src, env, path, eagerCompile);
	};

	module.exports.render = function(name, ctx, cb) {
	    if(!e) {
	        module.exports.configure();
	    }

	    return e.render(name, ctx, cb);
	};

	module.exports.renderString = function(src, ctx, cb) {
	    if(!e) {
	        module.exports.configure();
	    }

	    return e.renderString(src, ctx, cb);
	};

	if(precompile) {
	    module.exports.precompile = precompile.precompile;
	    module.exports.precompileString = precompile.precompileString;
	}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var ArrayProto = Array.prototype;
	var ObjProto = Object.prototype;

	var escapeMap = {
	    '&': '&amp;',
	    '"': '&quot;',
	    '\'': '&#39;',
	    '<': '&lt;',
	    '>': '&gt;'
	};

	var escapeRegex = /[&"'<>]/g;

	var lookupEscape = function(ch) {
	    return escapeMap[ch];
	};

	var exports = module.exports = {};

	exports.prettifyError = function(path, withInternals, err) {
	    // jshint -W022
	    // http://jslinterrors.com/do-not-assign-to-the-exception-parameter
	    if (!err.Update) {
	        // not one of ours, cast it
	        err = new exports.TemplateError(err);
	    }
	    err.Update(path);

	    // Unless they marked the dev flag, show them a trace from here
	    if (!withInternals) {
	        var old = err;
	        err = new Error(old.message);
	        err.name = old.name;
	    }

	    return err;
	};

	exports.TemplateError = function(message, lineno, colno) {
	    var err = this;

	    if (message instanceof Error) { // for casting regular js errors
	        err = message;
	        message = message.name + ': ' + message.message;

	        try {
	            if(err.name = '') {}
	        }
	        catch(e) {
	            // If we can't set the name of the error object in this
	            // environment, don't use it
	            err = this;
	        }
	    } else {
	        if(Error.captureStackTrace) {
	            Error.captureStackTrace(err);
	        }
	    }

	    err.name = 'Template render error';
	    err.message = message;
	    err.lineno = lineno;
	    err.colno = colno;
	    err.firstUpdate = true;

	    err.Update = function(path) {
	        var message = '(' + (path || 'unknown path') + ')';

	        // only show lineno + colno next to path of template
	        // where error occurred
	        if (this.firstUpdate) {
	            if(this.lineno && this.colno) {
	                message += ' [Line ' + this.lineno + ', Column ' + this.colno + ']';
	            }
	            else if(this.lineno) {
	                message += ' [Line ' + this.lineno + ']';
	            }
	        }

	        message += '\n ';
	        if (this.firstUpdate) {
	            message += ' ';
	        }

	        this.message = message + (this.message || '');
	        this.firstUpdate = false;
	        return this;
	    };

	    return err;
	};

	exports.TemplateError.prototype = Error.prototype;

	exports.escape = function(val) {
	  return val.replace(escapeRegex, lookupEscape);
	};

	exports.isFunction = function(obj) {
	    return ObjProto.toString.call(obj) === '[object Function]';
	};

	exports.isArray = Array.isArray || function(obj) {
	    return ObjProto.toString.call(obj) === '[object Array]';
	};

	exports.isString = function(obj) {
	    return ObjProto.toString.call(obj) === '[object String]';
	};

	exports.isObject = function(obj) {
	    return ObjProto.toString.call(obj) === '[object Object]';
	};

	exports.groupBy = function(obj, val) {
	    var result = {};
	    var iterator = exports.isFunction(val) ? val : function(obj) { return obj[val]; };
	    for(var i=0; i<obj.length; i++) {
	        var value = obj[i];
	        var key = iterator(value, i);
	        (result[key] || (result[key] = [])).push(value);
	    }
	    return result;
	};

	exports.toArray = function(obj) {
	    return Array.prototype.slice.call(obj);
	};

	exports.without = function(array) {
	    var result = [];
	    if (!array) {
	        return result;
	    }
	    var index = -1,
	    length = array.length,
	    contains = exports.toArray(arguments).slice(1);

	    while(++index < length) {
	        if(exports.indexOf(contains, array[index]) === -1) {
	            result.push(array[index]);
	        }
	    }
	    return result;
	};

	exports.extend = function(obj, obj2) {
	    for(var k in obj2) {
	        obj[k] = obj2[k];
	    }
	    return obj;
	};

	exports.repeat = function(char_, n) {
	    var str = '';
	    for(var i=0; i<n; i++) {
	        str += char_;
	    }
	    return str;
	};

	exports.each = function(obj, func, context) {
	    if(obj == null) {
	        return;
	    }

	    if(ArrayProto.each && obj.each === ArrayProto.each) {
	        obj.forEach(func, context);
	    }
	    else if(obj.length === +obj.length) {
	        for(var i=0, l=obj.length; i<l; i++) {
	            func.call(context, obj[i], i, obj);
	        }
	    }
	};

	exports.map = function(obj, func) {
	    var results = [];
	    if(obj == null) {
	        return results;
	    }

	    if(ArrayProto.map && obj.map === ArrayProto.map) {
	        return obj.map(func);
	    }

	    for(var i=0; i<obj.length; i++) {
	        results[results.length] = func(obj[i], i);
	    }

	    if(obj.length === +obj.length) {
	        results.length = obj.length;
	    }

	    return results;
	};

	exports.asyncIter = function(arr, iter, cb) {
	    var i = -1;

	    function next() {
	        i++;

	        if(i < arr.length) {
	            iter(arr[i], i, next, cb);
	        }
	        else {
	            cb();
	        }
	    }

	    next();
	};

	exports.asyncFor = function(obj, iter, cb) {
	    var keys = exports.keys(obj);
	    var len = keys.length;
	    var i = -1;

	    function next() {
	        i++;
	        var k = keys[i];

	        if(i < len) {
	            iter(k, obj[k], i, len, next);
	        }
	        else {
	            cb();
	        }
	    }

	    next();
	};

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
	exports.indexOf = Array.prototype.indexOf ?
	    function (arr, searchElement, fromIndex) {
	        return Array.prototype.indexOf.call(arr, searchElement, fromIndex);
	    } :
	    function (arr, searchElement, fromIndex) {
	        var length = this.length >>> 0; // Hack to convert object.length to a UInt32

	        fromIndex = +fromIndex || 0;

	        if(Math.abs(fromIndex) === Infinity) {
	            fromIndex = 0;
	        }

	        if(fromIndex < 0) {
	            fromIndex += length;
	            if (fromIndex < 0) {
	                fromIndex = 0;
	            }
	        }

	        for(;fromIndex < length; fromIndex++) {
	            if (arr[fromIndex] === searchElement) {
	                return fromIndex;
	            }
	        }

	        return -1;
	    };

	if(!Array.prototype.map) {
	    Array.prototype.map = function() {
	        throw new Error('map is unimplemented for this js engine');
	    };
	}

	exports.keys = function(obj) {
	    if(Object.prototype.keys) {
	        return obj.keys();
	    }
	    else {
	        var keys = [];
	        for(var k in obj) {
	            if(obj.hasOwnProperty(k)) {
	                keys.push(k);
	            }
	        }
	        return keys;
	    }
	};

	exports.inOperator = function (key, val) {
	    if (exports.isArray(val)) {
	        return exports.indexOf(val, key) !== -1;
	    } else if (exports.isObject(val)) {
	        return key in val;
	    } else if (exports.isString(val)) {
	        return val.indexOf(key) !== -1;
	    } else {
	        throw new Error('Cannot use "in" operator to search for "'
	            + key + '" in unexpected types.');
	    }
	};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var path = __webpack_require__(3);
	var asap = __webpack_require__(4);
	var lib = __webpack_require__(1);
	var Obj = __webpack_require__(6);
	var compiler = __webpack_require__(7);
	var builtin_filters = __webpack_require__(14);
	var builtin_loaders = __webpack_require__(15);
	var runtime = __webpack_require__(13);
	var globals = __webpack_require__(18);
	var waterfall = __webpack_require__(19);
	var Frame = runtime.Frame;
	var Template;

	// Unconditionally load in this loader, even if no other ones are
	// included (possible in the slim browser build)
	builtin_loaders.PrecompiledLoader = __webpack_require__(17);

	// If the user is using the async API, *always* call it
	// asynchronously even if the template was synchronous.
	function callbackAsap(cb, err, res) {
	    asap(function() { cb(err, res); });
	}

	var Environment = Obj.extend({
	    init: function(loaders, opts) {
	        // The dev flag determines the trace that'll be shown on errors.
	        // If set to true, returns the full trace from the error point,
	        // otherwise will return trace starting from Template.render
	        // (the full trace from within nunjucks may confuse developers using
	        //  the library)
	        // defaults to false
	        opts = this.opts = opts || {};
	        this.opts.dev = !!opts.dev;

	        // The autoescape flag sets global autoescaping. If true,
	        // every string variable will be escaped by default.
	        // If false, strings can be manually escaped using the `escape` filter.
	        // defaults to true
	        this.opts.autoescape = opts.autoescape != null ? opts.autoescape : true;

	        // If true, this will make the system throw errors if trying
	        // to output a null or undefined value
	        this.opts.throwOnUndefined = !!opts.throwOnUndefined;
	        this.opts.trimBlocks = !!opts.trimBlocks;
	        this.opts.lstripBlocks = !!opts.lstripBlocks;

	        this.loaders = [];

	        if(!loaders) {
	            // The filesystem loader is only available server-side
	            if(builtin_loaders.FileSystemLoader) {
	                this.loaders = [new builtin_loaders.FileSystemLoader('views')];
	            }
	            else if(builtin_loaders.WebLoader) {
	                this.loaders = [new builtin_loaders.WebLoader('/views')];
	            }
	        }
	        else {
	            this.loaders = lib.isArray(loaders) ? loaders : [loaders];
	        }

	        // It's easy to use precompiled templates: just include them
	        // before you configure nunjucks and this will automatically
	        // pick it up and use it
	        if((true) && window.nunjucksPrecompiled) {
	            this.loaders.unshift(
	                new builtin_loaders.PrecompiledLoader(window.nunjucksPrecompiled)
	            );
	        }

	        this.initCache();

	        this.globals = globals();
	        this.filters = {};
	        this.asyncFilters = [];
	        this.extensions = {};
	        this.extensionsList = [];

	        for(var name in builtin_filters) {
	            this.addFilter(name, builtin_filters[name]);
	        }
	    },

	    initCache: function() {
	        // Caching and cache busting
	        lib.each(this.loaders, function(loader) {
	            loader.cache = {};

	            if(typeof loader.on === 'function') {
	                loader.on('update', function(template) {
	                    loader.cache[template] = null;
	                });
	            }
	        });
	    },

	    addExtension: function(name, extension) {
	        extension._name = name;
	        this.extensions[name] = extension;
	        this.extensionsList.push(extension);
	        return this;
	    },

	    removeExtension: function(name) {
	        var extension = this.getExtension(name);
	        if (!extension) return;

	        this.extensionsList = lib.without(this.extensionsList, extension);
	        delete this.extensions[name];
	    },

	    getExtension: function(name) {
	        return this.extensions[name];
	    },

	    hasExtension: function(name) {
	        return !!this.extensions[name];
	    },

	    addGlobal: function(name, value) {
	        this.globals[name] = value;
	        return this;
	    },

	    getGlobal: function(name) {
	        if(typeof this.globals[name] === 'undefined') {
	            throw new Error('global not found: ' + name);
	        }
	        return this.globals[name];
	    },

	    addFilter: function(name, func, async) {
	        var wrapped = func;

	        if(async) {
	            this.asyncFilters.push(name);
	        }
	        this.filters[name] = wrapped;
	        return this;
	    },

	    getFilter: function(name) {
	        if(!this.filters[name]) {
	            throw new Error('filter not found: ' + name);
	        }
	        return this.filters[name];
	    },

	    resolveTemplate: function(loader, parentName, filename) {
	        var isRelative = (loader.isRelative && parentName)? loader.isRelative(filename) : false;
	        return (isRelative && loader.resolve)? loader.resolve(parentName, filename) : filename;
	    },

	    getTemplate: function(name, eagerCompile, parentName, ignoreMissing, cb) {
	        var that = this;
	        var tmpl = null;
	        if(name && name.raw) {
	            // this fixes autoescape for templates referenced in symbols
	            name = name.raw;
	        }

	        if(lib.isFunction(parentName)) {
	            cb = parentName;
	            parentName = null;
	            eagerCompile = eagerCompile || false;
	        }

	        if(lib.isFunction(eagerCompile)) {
	            cb = eagerCompile;
	            eagerCompile = false;
	        }

	        if (name instanceof Template) {
	             tmpl = name;
	        }
	        else if(typeof name !== 'string') {
	            throw new Error('template names must be a string: ' + name);
	        }
	        else {
	            for (var i = 0; i < this.loaders.length; i++) {
	                var _name = this.resolveTemplate(this.loaders[i], parentName, name);
	                tmpl = this.loaders[i].cache[_name];
	                if (tmpl) break;
	            }
	        }

	        if(tmpl) {
	            if(eagerCompile) {
	                tmpl.compile();
	            }

	            if(cb) {
	                cb(null, tmpl);
	            }
	            else {
	                return tmpl;
	            }
	        } else {
	            var syncResult;
	            var _this = this;

	            var createTemplate = function(err, info) {
	                if(!info && !err) {
	                    if(!ignoreMissing) {
	                        err = new Error('template not found: ' + name);
	                    }
	                }

	                if (err) {
	                    if(cb) {
	                        cb(err);
	                    }
	                    else {
	                        throw err;
	                    }
	                }
	                else {
	                    var tmpl;
	                    if(info) {
	                        tmpl = new Template(info.src, _this,
	                                            info.path, eagerCompile);

	                        if(!info.noCache) {
	                            info.loader.cache[name] = tmpl;
	                        }
	                    }
	                    else {
	                        tmpl = new Template('', _this,
	                                            '', eagerCompile);
	                    }

	                    if(cb) {
	                        cb(null, tmpl);
	                    }
	                    else {
	                        syncResult = tmpl;
	                    }
	                }
	            };

	            lib.asyncIter(this.loaders, function(loader, i, next, done) {
	                function handle(err, src) {
	                    if(err) {
	                        done(err);
	                    }
	                    else if(src) {
	                        src.loader = loader;
	                        done(null, src);
	                    }
	                    else {
	                        next();
	                    }
	                }

	                // Resolve name relative to parentName
	                name = that.resolveTemplate(loader, parentName, name);

	                if(loader.async) {
	                    loader.getSource(name, handle);
	                }
	                else {
	                    handle(null, loader.getSource(name));
	                }
	            }, createTemplate);

	            return syncResult;
	        }
	    },

	    express: function(app) {
	        var env = this;

	        function NunjucksView(name, opts) {
	            this.name          = name;
	            this.path          = name;
	            this.defaultEngine = opts.defaultEngine;
	            this.ext           = path.extname(name);
	            if (!this.ext && !this.defaultEngine) throw new Error('No default engine was specified and no extension was provided.');
	            if (!this.ext) this.name += (this.ext = ('.' !== this.defaultEngine[0] ? '.' : '') + this.defaultEngine);
	        }

	        NunjucksView.prototype.render = function(opts, cb) {
	          env.render(this.name, opts, cb);
	        };

	        app.set('view', NunjucksView);
	        app.set('nunjucksEnv', this);
	        return this;
	    },

	    render: function(name, ctx, cb) {
	        if(lib.isFunction(ctx)) {
	            cb = ctx;
	            ctx = null;
	        }

	        // We support a synchronous API to make it easier to migrate
	        // existing code to async. This works because if you don't do
	        // anything async work, the whole thing is actually run
	        // synchronously.
	        var syncResult = null;

	        this.getTemplate(name, function(err, tmpl) {
	            if(err && cb) {
	                callbackAsap(cb, err);
	            }
	            else if(err) {
	                throw err;
	            }
	            else {
	                syncResult = tmpl.render(ctx, cb);
	            }
	        });

	        return syncResult;
	    },

	    renderString: function(src, ctx, opts, cb) {
	        if(lib.isFunction(opts)) {
	            cb = opts;
	            opts = {};
	        }
	        opts = opts || {};

	        var tmpl = new Template(src, this, opts.path);
	        return tmpl.render(ctx, cb);
	    },

	    waterfall: waterfall
	});

	var Context = Obj.extend({
	    init: function(ctx, blocks, env) {
	        // Has to be tied to an environment so we can tap into its globals.
	        this.env = env || new Environment();

	        // Make a duplicate of ctx
	        this.ctx = {};
	        for(var k in ctx) {
	            if(ctx.hasOwnProperty(k)) {
	                this.ctx[k] = ctx[k];
	            }
	        }

	        this.blocks = {};
	        this.exported = [];

	        for(var name in blocks) {
	            this.addBlock(name, blocks[name]);
	        }
	    },

	    lookup: function(name) {
	        // This is one of the most called functions, so optimize for
	        // the typical case where the name isn't in the globals
	        if(name in this.env.globals && !(name in this.ctx)) {
	            return this.env.globals[name];
	        }
	        else {
	            return this.ctx[name];
	        }
	    },

	    setVariable: function(name, val) {
	        this.ctx[name] = val;
	    },

	    getVariables: function() {
	        return this.ctx;
	    },

	    addBlock: function(name, block) {
	        this.blocks[name] = this.blocks[name] || [];
	        this.blocks[name].push(block);
	        return this;
	    },

	    getBlock: function(name) {
	        if(!this.blocks[name]) {
	            throw new Error('unknown block "' + name + '"');
	        }

	        return this.blocks[name][0];
	    },

	    getSuper: function(env, name, block, frame, runtime, cb) {
	        var idx = lib.indexOf(this.blocks[name] || [], block);
	        var blk = this.blocks[name][idx + 1];
	        var context = this;

	        if(idx === -1 || !blk) {
	            throw new Error('no super block available for "' + name + '"');
	        }

	        blk(env, context, frame, runtime, cb);
	    },

	    addExport: function(name) {
	        this.exported.push(name);
	    },

	    getExported: function() {
	        var exported = {};
	        for(var i=0; i<this.exported.length; i++) {
	            var name = this.exported[i];
	            exported[name] = this.ctx[name];
	        }
	        return exported;
	    }
	});

	Template = Obj.extend({
	    init: function (src, env, path, eagerCompile) {
	        this.env = env || new Environment();

	        if(lib.isObject(src)) {
	            switch(src.type) {
	            case 'code': this.tmplProps = src.obj; break;
	            case 'string': this.tmplStr = src.obj; break;
	            }
	        }
	        else if(lib.isString(src)) {
	            this.tmplStr = src;
	        }
	        else {
	            throw new Error('src must be a string or an object describing ' +
	                            'the source');
	        }

	        this.path = path;

	        if(eagerCompile) {
	            var _this = this;
	            try {
	                _this._compile();
	            }
	            catch(err) {
	                throw lib.prettifyError(this.path, this.env.opts.dev, err);
	            }
	        }
	        else {
	            this.compiled = false;
	        }
	    },

	    render: function(ctx, parentFrame, cb) {
	        if (typeof ctx === 'function') {
	            cb = ctx;
	            ctx = {};
	        }
	        else if (typeof parentFrame === 'function') {
	            cb = parentFrame;
	            parentFrame = null;
	        }

	        var forceAsync = true;
	        if(parentFrame) {
	            // If there is a frame, we are being called from internal
	            // code of another template, and the internal system
	            // depends on the sync/async nature of the parent template
	            // to be inherited, so force an async callback
	            forceAsync = false;
	        }

	        var _this = this;
	        // Catch compile errors for async rendering
	        try {
	            _this.compile();
	        } catch (_err) {
	            var err = lib.prettifyError(this.path, this.env.opts.dev, _err);
	            if (cb) return callbackAsap(cb, err);
	            else throw err;
	        }

	        var context = new Context(ctx || {}, _this.blocks, _this.env);
	        var frame = parentFrame ? parentFrame.push(true) : new Frame();
	        frame.topLevel = true;
	        var syncResult = null;

	        _this.rootRenderFunc(
	            _this.env,
	            context,
	            frame || new Frame(),
	            runtime,
	            function(err, res) {
	                if(err) {
	                    err = lib.prettifyError(_this.path, _this.env.opts.dev, err);
	                }

	                if(cb) {
	                    if(forceAsync) {
	                        callbackAsap(cb, err, res);
	                    }
	                    else {
	                        cb(err, res);
	                    }
	                }
	                else {
	                    if(err) { throw err; }
	                    syncResult = res;
	                }
	            }
	        );

	        return syncResult;
	    },


	    getExported: function(ctx, parentFrame, cb) {
	        if (typeof ctx === 'function') {
	            cb = ctx;
	            ctx = {};
	        }

	        if (typeof parentFrame === 'function') {
	            cb = parentFrame;
	            parentFrame = null;
	        }

	        // Catch compile errors for async rendering
	        try {
	            this.compile();
	        } catch (e) {
	            if (cb) return cb(e);
	            else throw e;
	        }

	        var frame = parentFrame ? parentFrame.push() : new Frame();
	        frame.topLevel = true;

	        // Run the rootRenderFunc to populate the context with exported vars
	        var context = new Context(ctx || {}, this.blocks, this.env);
	        this.rootRenderFunc(this.env,
	                            context,
	                            frame,
	                            runtime,
	                            function(err) {
	        		        if ( err ) {
	        			    cb(err, null);
	        		        } else {
	        			    cb(null, context.getExported());
	        		        }
	                            });
	    },

	    compile: function() {
	        if(!this.compiled) {
	            this._compile();
	        }
	    },

	    _compile: function() {
	        var props;

	        if(this.tmplProps) {
	            props = this.tmplProps;
	        }
	        else {
	            var source = compiler.compile(this.tmplStr,
	                                          this.env.asyncFilters,
	                                          this.env.extensionsList,
	                                          this.path,
	                                          this.env.opts);

	            /* jslint evil: true */
	            var func = new Function(source);
	            props = func();
	        }

	        this.blocks = this._getBlocks(props);
	        this.rootRenderFunc = props.root;
	        this.compiled = true;
	    },

	    _getBlocks: function(props) {
	        var blocks = {};

	        for(var k in props) {
	            if(k.slice(0, 2) === 'b_') {
	                blocks[k.slice(2)] = props[k];
	            }
	        }

	        return blocks;
	    }
	});

	module.exports = {
	    Environment: Environment,
	    Template: Template
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	// rawAsap provides everything we need except exception management.
	var rawAsap = __webpack_require__(5);
	// RawTasks are recycled to reduce GC churn.
	var freeTasks = [];
	// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors = [];
	var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

	function throwFirstError() {
	    if (pendingErrors.length) {
	        throw pendingErrors.shift();
	    }
	}

	/**
	 * Calls a task as soon as possible after returning, in its own event, with priority
	 * over other events like animation, reflow, and repaint. An error thrown from an
	 * event will not interrupt, nor even substantially slow down the processing of
	 * other events, but will be rather postponed to a lower priority event.
	 * @param {{call}} task A callable object, typically a function that takes no
	 * arguments.
	 */
	module.exports = asap;
	function asap(task) {
	    var rawTask;
	    if (freeTasks.length) {
	        rawTask = freeTasks.pop();
	    } else {
	        rawTask = new RawTask();
	    }
	    rawTask.task = task;
	    rawAsap(rawTask);
	}

	// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask() {
	    this.task = null;
	}

	// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call = function () {
	    try {
	        this.task.call();
	    } catch (error) {
	        if (asap.onerror) {
	            // This hook exists purely for testing purposes.
	            // Its name will be periodically randomized to break any code that
	            // depends on its existence.
	            asap.onerror(error);
	        } else {
	            // In a web browser, exceptions are not fatal. However, to avoid
	            // slowing down the queue of pending tasks, we rethrow the error in a
	            // lower priority turn.
	            pendingErrors.push(error);
	            requestErrorThrow();
	        }
	    } finally {
	        this.task = null;
	        freeTasks[freeTasks.length] = this;
	    }
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	// A simple class system, more documentation to come

	function extend(cls, name, props) {
	    // This does that same thing as Object.create, but with support for IE8
	    var F = function() {};
	    F.prototype = cls.prototype;
	    var prototype = new F();

	    // jshint undef: false
	    var fnTest = /xyz/.test(function(){ xyz; }) ? /\bparent\b/ : /.*/;
	    props = props || {};

	    for(var k in props) {
	        var src = props[k];
	        var parent = prototype[k];

	        if(typeof parent === 'function' &&
	           typeof src === 'function' &&
	           fnTest.test(src)) {
	            /*jshint -W083 */
	            prototype[k] = (function (src, parent) {
	                return function() {
	                    // Save the current parent method
	                    var tmp = this.parent;

	                    // Set parent to the previous method, call, and restore
	                    this.parent = parent;
	                    var res = src.apply(this, arguments);
	                    this.parent = tmp;

	                    return res;
	                };
	            })(src, parent);
	        }
	        else {
	            prototype[k] = src;
	        }
	    }

	    prototype.typename = name;

	    var new_cls = function() {
	        if(prototype.init) {
	            prototype.init.apply(this, arguments);
	        }
	    };

	    new_cls.prototype = prototype;
	    new_cls.prototype.constructor = new_cls;

	    new_cls.extend = function(name, props) {
	        if(typeof name === 'object') {
	            props = name;
	            name = 'anonymous';
	        }
	        return extend(new_cls, name, props);
	    };

	    return new_cls;
	}

	module.exports = extend(Object, 'Object', {});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var lib = __webpack_require__(1);
	var parser = __webpack_require__(8);
	var transformer = __webpack_require__(12);
	var nodes = __webpack_require__(10);
	// jshint -W079
	var Object = __webpack_require__(6);
	var Frame = __webpack_require__(13).Frame;

	// These are all the same for now, but shouldn't be passed straight
	// through
	var compareOps = {
	    '==': '==',
	    '===': '===',
	    '!=': '!=',
	    '!==': '!==',
	    '<': '<',
	    '>': '>',
	    '<=': '<=',
	    '>=': '>='
	};

	// A common pattern is to emit binary operators
	function binOpEmitter(str) {
	    return function(node, frame) {
	        this.compile(node.left, frame);
	        this.emit(str);
	        this.compile(node.right, frame);
	    };
	}

	var Compiler = Object.extend({
	    init: function(templateName, throwOnUndefined) {
	        this.templateName = templateName;
	        this.codebuf = [];
	        this.lastId = 0;
	        this.buffer = null;
	        this.bufferStack = [];
	        this.scopeClosers = '';
	        this.inBlock = false;
	        this.throwOnUndefined = throwOnUndefined;
	    },

	    fail: function (msg, lineno, colno) {
	        if (lineno !== undefined) lineno += 1;
	        if (colno !== undefined) colno += 1;

	        throw new lib.TemplateError(msg, lineno, colno);
	    },

	    pushBufferId: function(id) {
	        this.bufferStack.push(this.buffer);
	        this.buffer = id;
	        this.emit('var ' + this.buffer + ' = "";');
	    },

	    popBufferId: function() {
	        this.buffer = this.bufferStack.pop();
	    },

	    emit: function(code) {
	        this.codebuf.push(code);
	    },

	    emitLine: function(code) {
	        this.emit(code + '\n');
	    },

	    emitLines: function() {
	        lib.each(lib.toArray(arguments), function(line) {
	            this.emitLine(line);
	        }, this);
	    },

	    emitFuncBegin: function(name) {
	        this.buffer = 'output';
	        this.scopeClosers = '';
	        this.emitLine('function ' + name + '(env, context, frame, runtime, cb) {');
	        this.emitLine('var lineno = null;');
	        this.emitLine('var colno = null;');
	        this.emitLine('var ' + this.buffer + ' = "";');
	        this.emitLine('try {');
	    },

	    emitFuncEnd: function(noReturn) {
	        if(!noReturn) {
	            this.emitLine('cb(null, ' + this.buffer +');');
	        }

	        this.closeScopeLevels();
	        this.emitLine('} catch (e) {');
	        this.emitLine('  cb(runtime.handleError(e, lineno, colno));');
	        this.emitLine('}');
	        this.emitLine('}');
	        this.buffer = null;
	    },

	    addScopeLevel: function() {
	        this.scopeClosers += '})';
	    },

	    closeScopeLevels: function() {
	        this.emitLine(this.scopeClosers + ';');
	        this.scopeClosers = '';
	    },

	    withScopedSyntax: function(func) {
	        var scopeClosers = this.scopeClosers;
	        this.scopeClosers = '';

	        func.call(this);

	        this.closeScopeLevels();
	        this.scopeClosers = scopeClosers;
	    },

	    makeCallback: function(res) {
	        var err = this.tmpid();

	        return 'function(' + err + (res ? ',' + res : '') + ') {\n' +
	            'if(' + err + ') { cb(' + err + '); return; }';
	    },

	    tmpid: function() {
	        this.lastId++;
	        return 't_' + this.lastId;
	    },

	    _templateName: function() {
	        return this.templateName == null? 'undefined' : JSON.stringify(this.templateName);
	    },

	    _compileChildren: function(node, frame) {
	        var children = node.children;
	        for(var i=0, l=children.length; i<l; i++) {
	            this.compile(children[i], frame);
	        }
	    },

	    _compileAggregate: function(node, frame, startChar, endChar) {
	        if(startChar) {
	            this.emit(startChar);
	        }

	        for(var i=0; i<node.children.length; i++) {
	            if(i > 0) {
	                this.emit(',');
	            }

	            this.compile(node.children[i], frame);
	        }

	        if(endChar) {
	            this.emit(endChar);
	        }
	    },

	    _compileExpression: function(node, frame) {
	        // TODO: I'm not really sure if this type check is worth it or
	        // not.
	        this.assertType(
	            node,
	            nodes.Literal,
	            nodes.Symbol,
	            nodes.Group,
	            nodes.Array,
	            nodes.Dict,
	            nodes.FunCall,
	            nodes.Caller,
	            nodes.Filter,
	            nodes.LookupVal,
	            nodes.Compare,
	            nodes.InlineIf,
	            nodes.In,
	            nodes.And,
	            nodes.Or,
	            nodes.Not,
	            nodes.Add,
	            nodes.Concat,
	            nodes.Sub,
	            nodes.Mul,
	            nodes.Div,
	            nodes.FloorDiv,
	            nodes.Mod,
	            nodes.Pow,
	            nodes.Neg,
	            nodes.Pos,
	            nodes.Compare,
	            nodes.NodeList
	        );
	        this.compile(node, frame);
	    },

	    assertType: function(node /*, types */) {
	        var types = lib.toArray(arguments).slice(1);
	        var success = false;

	        for(var i=0; i<types.length; i++) {
	            if(node instanceof types[i]) {
	                success = true;
	            }
	        }

	        if(!success) {
	            this.fail('assertType: invalid type: ' + node.typename,
	                      node.lineno,
	                      node.colno);
	        }
	    },

	    compileCallExtension: function(node, frame, async) {
	        var args = node.args;
	        var contentArgs = node.contentArgs;
	        var autoescape = typeof node.autoescape === 'boolean' ? node.autoescape : true;

	        if(!async) {
	            this.emit(this.buffer + ' += runtime.suppressValue(');
	        }

	        this.emit('env.getExtension("' + node.extName + '")["' + node.prop + '"](');
	        this.emit('context');

	        if(args || contentArgs) {
	            this.emit(',');
	        }

	        if(args) {
	            if(!(args instanceof nodes.NodeList)) {
	                this.fail('compileCallExtension: arguments must be a NodeList, ' +
	                          'use `parser.parseSignature`');
	            }

	            lib.each(args.children, function(arg, i) {
	                // Tag arguments are passed normally to the call. Note
	                // that keyword arguments are turned into a single js
	                // object as the last argument, if they exist.
	                this._compileExpression(arg, frame);

	                if(i !== args.children.length - 1 || contentArgs.length) {
	                    this.emit(',');
	                }
	            }, this);
	        }

	        if(contentArgs.length) {
	            lib.each(contentArgs, function(arg, i) {
	                if(i > 0) {
	                    this.emit(',');
	                }

	                if(arg) {
	                    var id = this.tmpid();

	                    this.emitLine('function(cb) {');
	                    this.emitLine('if(!cb) { cb = function(err) { if(err) { throw err; }}}');
	                    this.pushBufferId(id);

	                    this.withScopedSyntax(function() {
	                        this.compile(arg, frame);
	                        this.emitLine('cb(null, ' + id + ');');
	                    });

	                    this.popBufferId();
	                    this.emitLine('return ' + id + ';');
	                    this.emitLine('}');
	                }
	                else {
	                    this.emit('null');
	                }
	            }, this);
	        }

	        if(async) {
	            var res = this.tmpid();
	            this.emitLine(', ' + this.makeCallback(res));
	            this.emitLine(this.buffer + ' += runtime.suppressValue(' + res + ', ' + autoescape + ' && env.opts.autoescape);');
	            this.addScopeLevel();
	        }
	        else {
	            this.emit(')');
	            this.emit(', ' + autoescape + ' && env.opts.autoescape);\n');
	        }
	    },

	    compileCallExtensionAsync: function(node, frame) {
	        this.compileCallExtension(node, frame, true);
	    },

	    compileNodeList: function(node, frame) {
	        this._compileChildren(node, frame);
	    },

	    compileLiteral: function(node) {
	        if(typeof node.value === 'string') {
	            var val = node.value.replace(/\\/g, '\\\\');
	            val = val.replace(/"/g, '\\"');
	            val = val.replace(/\n/g, '\\n');
	            val = val.replace(/\r/g, '\\r');
	            val = val.replace(/\t/g, '\\t');
	            this.emit('"' + val  + '"');
	        }
	        else if (node.value === null) {
	            this.emit('null');
	        }
	        else {
	            this.emit(node.value.toString());
	        }
	    },

	    compileSymbol: function(node, frame) {
	        var name = node.value;
	        var v;

	        if((v = frame.lookup(name))) {
	            this.emit(v);
	        }
	        else {
	            this.emit('runtime.contextOrFrameLookup(' +
	                      'context, frame, "' + name + '")');
	        }
	    },

	    compileGroup: function(node, frame) {
	        this._compileAggregate(node, frame, '(', ')');
	    },

	    compileArray: function(node, frame) {
	        this._compileAggregate(node, frame, '[', ']');
	    },

	    compileDict: function(node, frame) {
	        this._compileAggregate(node, frame, '{', '}');
	    },

	    compilePair: function(node, frame) {
	        var key = node.key;
	        var val = node.value;

	        if(key instanceof nodes.Symbol) {
	            key = new nodes.Literal(key.lineno, key.colno, key.value);
	        }
	        else if(!(key instanceof nodes.Literal &&
	                  typeof key.value === 'string')) {
	            this.fail('compilePair: Dict keys must be strings or names',
	                      key.lineno,
	                      key.colno);
	        }

	        this.compile(key, frame);
	        this.emit(': ');
	        this._compileExpression(val, frame);
	    },

	    compileInlineIf: function(node, frame) {
	        this.emit('(');
	        this.compile(node.cond, frame);
	        this.emit('?');
	        this.compile(node.body, frame);
	        this.emit(':');
	        if(node.else_ !== null)
	            this.compile(node.else_, frame);
	        else
	            this.emit('""');
	        this.emit(')');
	    },

	    compileIn: function(node, frame) {
	      this.emit('runtime.inOperator(');
	      this.compile(node.left, frame);
	      this.emit(',');
	      this.compile(node.right, frame);
	      this.emit(')');
	    },

	    compileOr: binOpEmitter(' || '),
	    compileAnd: binOpEmitter(' && '),
	    compileAdd: binOpEmitter(' + '),
	    // ensure concatenation instead of addition
	    // by adding empty string in between
	    compileConcat: binOpEmitter(' + "" + '),
	    compileSub: binOpEmitter(' - '),
	    compileMul: binOpEmitter(' * '),
	    compileDiv: binOpEmitter(' / '),
	    compileMod: binOpEmitter(' % '),

	    compileNot: function(node, frame) {
	        this.emit('!');
	        this.compile(node.target, frame);
	    },

	    compileFloorDiv: function(node, frame) {
	        this.emit('Math.floor(');
	        this.compile(node.left, frame);
	        this.emit(' / ');
	        this.compile(node.right, frame);
	        this.emit(')');
	    },

	    compilePow: function(node, frame) {
	        this.emit('Math.pow(');
	        this.compile(node.left, frame);
	        this.emit(', ');
	        this.compile(node.right, frame);
	        this.emit(')');
	    },

	    compileNeg: function(node, frame) {
	        this.emit('-');
	        this.compile(node.target, frame);
	    },

	    compilePos: function(node, frame) {
	        this.emit('+');
	        this.compile(node.target, frame);
	    },

	    compileCompare: function(node, frame) {
	        this.compile(node.expr, frame);

	        for(var i=0; i<node.ops.length; i++) {
	            var n = node.ops[i];
	            this.emit(' ' + compareOps[n.type] + ' ');
	            this.compile(n.expr, frame);
	        }
	    },

	    compileLookupVal: function(node, frame) {
	        this.emit('runtime.memberLookup((');
	        this._compileExpression(node.target, frame);
	        this.emit('),');
	        this._compileExpression(node.val, frame);
	        this.emit(')');
	    },

	    _getNodeName: function(node) {
	        switch (node.typename) {
	            case 'Symbol':
	                return node.value;
	            case 'FunCall':
	                return 'the return value of (' + this._getNodeName(node.name) + ')';
	            case 'LookupVal':
	                return this._getNodeName(node.target) + '["' +
	                       this._getNodeName(node.val) + '"]';
	            case 'Literal':
	                return node.value.toString();
	            default:
	                return '--expression--';
	        }
	    },

	    compileFunCall: function(node, frame) {
	        // Keep track of line/col info at runtime by settings
	        // variables within an expression. An expression in javascript
	        // like (x, y, z) returns the last value, and x and y can be
	        // anything
	        this.emit('(lineno = ' + node.lineno +
	                  ', colno = ' + node.colno + ', ');

	        this.emit('runtime.callWrap(');
	        // Compile it as normal.
	        this._compileExpression(node.name, frame);

	        // Output the name of what we're calling so we can get friendly errors
	        // if the lookup fails.
	        this.emit(', "' + this._getNodeName(node.name).replace(/"/g, '\\"') + '", context, ');

	        this._compileAggregate(node.args, frame, '[', '])');

	        this.emit(')');
	    },

	    compileFilter: function(node, frame) {
	        var name = node.name;
	        this.assertType(name, nodes.Symbol);
	        this.emit('env.getFilter("' + name.value + '").call(context, ');
	        this._compileAggregate(node.args, frame);
	        this.emit(')');
	    },

	    compileFilterAsync: function(node, frame) {
	        var name = node.name;
	        this.assertType(name, nodes.Symbol);

	        var symbol = node.symbol.value;
	        frame.set(symbol, symbol);

	        this.emit('env.getFilter("' + name.value + '").call(context, ');
	        this._compileAggregate(node.args, frame);
	        this.emitLine(', ' + this.makeCallback(symbol));

	        this.addScopeLevel();
	    },

	    compileKeywordArgs: function(node, frame) {
	        var names = [];

	        lib.each(node.children, function(pair) {
	            names.push(pair.key.value);
	        });

	        this.emit('runtime.makeKeywordArgs(');
	        this.compileDict(node, frame);
	        this.emit(')');
	    },

	    compileSet: function(node, frame) {
	        var ids = [];

	        // Lookup the variable names for each identifier and create
	        // new ones if necessary
	        lib.each(node.targets, function(target) {
	            var name = target.value;
	            var id = frame.lookup(name);

	            if (id === null || id === undefined) {
	                id = this.tmpid();

	                // Note: This relies on js allowing scope across
	                // blocks, in case this is created inside an `if`
	                this.emitLine('var ' + id + ';');
	            }

	            ids.push(id);
	        }, this);

	        if (node.value) {
	          this.emit(ids.join(' = ') + ' = ');
	          this._compileExpression(node.value, frame);
	          this.emitLine(';');
	        }
	        else {
	          this.emit(ids.join(' = ') + ' = ');
	          this.compile(node.body, frame);
	          this.emitLine(';');
	        }

	        lib.each(node.targets, function(target, i) {
	            var id = ids[i];
	            var name = target.value;

	            // We are running this for every var, but it's very
	            // uncommon to assign to multiple vars anyway
	            this.emitLine('frame.set("' + name + '", ' + id + ', true);');

	            this.emitLine('if(frame.topLevel) {');
	            this.emitLine('context.setVariable("' + name + '", ' + id + ');');
	            this.emitLine('}');

	            if(name.charAt(0) !== '_') {
	                this.emitLine('if(frame.topLevel) {');
	                this.emitLine('context.addExport("' + name + '", ' + id + ');');
	                this.emitLine('}');
	            }
	        }, this);
	    },

	    compileIf: function(node, frame, async) {
	        this.emit('if(');
	        this._compileExpression(node.cond, frame);
	        this.emitLine(') {');

	        this.withScopedSyntax(function() {
	            this.compile(node.body, frame);

	            if(async) {
	                this.emit('cb()');
	            }
	        });

	        if(node.else_) {
	            this.emitLine('}\nelse {');

	            this.withScopedSyntax(function() {
	                this.compile(node.else_, frame);

	                if(async) {
	                    this.emit('cb()');
	                }
	            });
	        } else if(async) {
	            this.emitLine('}\nelse {');
	            this.emit('cb()');
	        }

	        this.emitLine('}');
	    },

	    compileIfAsync: function(node, frame) {
	        this.emit('(function(cb) {');
	        this.compileIf(node, frame, true);
	        this.emit('})(' + this.makeCallback());
	        this.addScopeLevel();
	    },

	    emitLoopBindings: function(node, arr, i, len) {
	        var bindings = {
	            index: i + ' + 1',
	            index0: i,
	            revindex: len + ' - ' + i,
	            revindex0: len + ' - ' + i + ' - 1',
	            first: i + ' === 0',
	            last: i + ' === ' + len + ' - 1',
	            length: len
	        };

	        for (var name in bindings) {
	            this.emitLine('frame.set("loop.' + name + '", ' + bindings[name] + ');');
	        }
	    },

	    compileFor: function(node, frame) {
	        // Some of this code is ugly, but it keeps the generated code
	        // as fast as possible. ForAsync also shares some of this, but
	        // not much.

	        var v;
	        var i = this.tmpid();
	        var len = this.tmpid();
	        var arr = this.tmpid();
	        frame = frame.push();

	        this.emitLine('frame = frame.push();');

	        this.emit('var ' + arr + ' = ');
	        this._compileExpression(node.arr, frame);
	        this.emitLine(';');

	        this.emit('if(' + arr + ') {');

	        // If multiple names are passed, we need to bind them
	        // appropriately
	        if(node.name instanceof nodes.Array) {
	            this.emitLine('var ' + i + ';');

	            // The object could be an arroy or object. Note that the
	            // body of the loop is duplicated for each condition, but
	            // we are optimizing for speed over size.
	            this.emitLine('if(runtime.isArray(' + arr + ')) {'); {
	                this.emitLine('var ' + len + ' = ' + arr + '.length;');
	                this.emitLine('for(' + i + '=0; ' + i + ' < ' + arr + '.length; '
	                              + i + '++) {');

	                // Bind each declared var
	                for (var u=0; u < node.name.children.length; u++) {
	                    var tid = this.tmpid();
	                    this.emitLine('var ' + tid + ' = ' + arr + '[' + i + '][' + u + ']');
	                    this.emitLine('frame.set("' + node.name.children[u].value
	                                  + '", ' + arr + '[' + i + '][' + u + ']' + ');');
	                    frame.set(node.name.children[u].value, tid);
	                }

	                this.emitLoopBindings(node, arr, i, len);
	                this.withScopedSyntax(function() {
	                    this.compile(node.body, frame);
	                });
	                this.emitLine('}');
	            }

	            this.emitLine('} else {'); {
	                // Iterate over the key/values of an object
	                var key = node.name.children[0];
	                var val = node.name.children[1];
	                var k = this.tmpid();
	                v = this.tmpid();
	                frame.set(key.value, k);
	                frame.set(val.value, v);

	                this.emitLine(i + ' = -1;');
	                this.emitLine('var ' + len + ' = runtime.keys(' + arr + ').length;');
	                this.emitLine('for(var ' + k + ' in ' + arr + ') {');
	                this.emitLine(i + '++;');
	                this.emitLine('var ' + v + ' = ' + arr + '[' + k + '];');
	                this.emitLine('frame.set("' + key.value + '", ' + k + ');');
	                this.emitLine('frame.set("' + val.value + '", ' + v + ');');

	                this.emitLoopBindings(node, arr, i, len);
	                this.withScopedSyntax(function() {
	                    this.compile(node.body, frame);
	                });
	                this.emitLine('}');
	            }

	            this.emitLine('}');
	        }
	        else {
	            // Generate a typical array iteration
	            v = this.tmpid();
	            frame.set(node.name.value, v);

	            this.emitLine('var ' + len + ' = ' + arr + '.length;');
	            this.emitLine('for(var ' + i + '=0; ' + i + ' < ' + arr + '.length; ' +
	                          i + '++) {');
	            this.emitLine('var ' + v + ' = ' + arr + '[' + i + '];');
	            this.emitLine('frame.set("' + node.name.value + '", ' + v + ');');

	            this.emitLoopBindings(node, arr, i, len);

	            this.withScopedSyntax(function() {
	                this.compile(node.body, frame);
	            });

	            this.emitLine('}');
	        }

	        this.emitLine('}');
	        if (node.else_) {
	          this.emitLine('if (!' + len + ') {');
	          this.compile(node.else_, frame);
	          this.emitLine('}');
	        }

	        this.emitLine('frame = frame.pop();');
	    },

	    _compileAsyncLoop: function(node, frame, parallel) {
	        // This shares some code with the For tag, but not enough to
	        // worry about. This iterates across an object asynchronously,
	        // but not in parallel.

	        var i = this.tmpid();
	        var len = this.tmpid();
	        var arr = this.tmpid();
	        var asyncMethod = parallel ? 'asyncAll' : 'asyncEach';
	        frame = frame.push();

	        this.emitLine('frame = frame.push();');

	        this.emit('var ' + arr + ' = ');
	        this._compileExpression(node.arr, frame);
	        this.emitLine(';');

	        if(node.name instanceof nodes.Array) {
	            this.emit('runtime.' + asyncMethod + '(' + arr + ', ' +
	                      node.name.children.length + ', function(');

	            lib.each(node.name.children, function(name) {
	                this.emit(name.value + ',');
	            }, this);

	            this.emit(i + ',' + len + ',next) {');

	            lib.each(node.name.children, function(name) {
	                var id = name.value;
	                frame.set(id, id);
	                this.emitLine('frame.set("' + id + '", ' + id + ');');
	            }, this);
	        }
	        else {
	            var id = node.name.value;
	            this.emitLine('runtime.' + asyncMethod + '(' + arr + ', 1, function(' + id + ', ' + i + ', ' + len + ',next) {');
	            this.emitLine('frame.set("' + id + '", ' + id + ');');
	            frame.set(id, id);
	        }

	        this.emitLoopBindings(node, arr, i, len);

	        this.withScopedSyntax(function() {
	            var buf;
	            if(parallel) {
	                buf = this.tmpid();
	                this.pushBufferId(buf);
	            }

	            this.compile(node.body, frame);
	            this.emitLine('next(' + i + (buf ? ',' + buf : '') + ');');

	            if(parallel) {
	                this.popBufferId();
	            }
	        });

	        var output = this.tmpid();
	        this.emitLine('}, ' + this.makeCallback(output));
	        this.addScopeLevel();

	        if(parallel) {
	            this.emitLine(this.buffer + ' += ' + output + ';');
	        }

	        if (node.else_) {
	          this.emitLine('if (!' + arr + '.length) {');
	          this.compile(node.else_, frame);
	          this.emitLine('}');
	        }

	        this.emitLine('frame = frame.pop();');
	    },

	    compileAsyncEach: function(node, frame) {
	        this._compileAsyncLoop(node, frame);
	    },

	    compileAsyncAll: function(node, frame) {
	        this._compileAsyncLoop(node, frame, true);
	    },

	    _compileMacro: function(node, frame) {
	        var args = [];
	        var kwargs = null;
	        var funcId = 'macro_' + this.tmpid();
	        var keepFrame = (frame !== undefined);

	        // Type check the definition of the args
	        lib.each(node.args.children, function(arg, i) {
	            if(i === node.args.children.length - 1 &&
	               arg instanceof nodes.Dict) {
	                kwargs = arg;
	            }
	            else {
	                this.assertType(arg, nodes.Symbol);
	                args.push(arg);
	            }
	        }, this);

	        var realNames = lib.map(args, function(n) { return 'l_' + n.value; });
	        realNames.push('kwargs');

	        // Quoted argument names
	        var argNames = lib.map(args, function(n) { return '"' + n.value + '"'; });
	        var kwargNames = lib.map((kwargs && kwargs.children) || [],
	                                 function(n) { return '"' + n.key.value + '"'; });

	        // We pass a function to makeMacro which destructures the
	        // arguments so support setting positional args with keywords
	        // args and passing keyword args as positional args
	        // (essentially default values). See runtime.js.
	        if (keepFrame) {
	            frame = frame.push(true);
	        } else {
	            frame = new Frame();
	        }
	        this.emitLines(
	            'var ' + funcId + ' = runtime.makeMacro(',
	            '[' + argNames.join(', ') + '], ',
	            '[' + kwargNames.join(', ') + '], ',
	            'function (' + realNames.join(', ') + ') {',
	            'var callerFrame = frame;',
	            'frame = ' + ((keepFrame) ? 'frame.push(true);' : 'new runtime.Frame();'),
	            'kwargs = kwargs || {};',
	            'if (kwargs.hasOwnProperty("caller")) {',
	            'frame.set("caller", kwargs.caller); }'
	        );

	        // Expose the arguments to the template. Don't need to use
	        // random names because the function
	        // will create a new run-time scope for us
	        lib.each(args, function(arg) {
	            this.emitLine('frame.set("' + arg.value + '", ' +
	                          'l_' + arg.value + ');');
	            frame.set(arg.value, 'l_' + arg.value);
	        }, this);

	        // Expose the keyword arguments
	        if(kwargs) {
	            lib.each(kwargs.children, function(pair) {
	                var name = pair.key.value;
	                this.emit('frame.set("' + name + '", ' +
	                          'kwargs.hasOwnProperty("' + name + '") ? ' +
	                          'kwargs["' + name + '"] : ');
	                this._compileExpression(pair.value, frame);
	                this.emitLine(');');
	            }, this);
	        }

	        var bufferId = this.tmpid();
	        this.pushBufferId(bufferId);

	        this.withScopedSyntax(function () {
	          this.compile(node.body, frame);
	        });

	        this.emitLine('frame = ' + ((keepFrame) ? 'frame.pop();' : 'callerFrame;'));
	        this.emitLine('return new runtime.SafeString(' + bufferId + ');');
	        this.emitLine('});');
	        this.popBufferId();

	        return funcId;
	    },

	    compileMacro: function(node, frame) {
	        var funcId = this._compileMacro(node);

	        // Expose the macro to the templates
	        var name = node.name.value;
	        frame.set(name, funcId);

	        if(frame.parent) {
	            this.emitLine('frame.set("' + name + '", ' + funcId + ');');
	        }
	        else {
	            if(node.name.value.charAt(0) !== '_') {
	                this.emitLine('context.addExport("' + name + '");');
	            }
	            this.emitLine('context.setVariable("' + name + '", ' + funcId + ');');
	        }
	    },

	    compileCaller: function(node, frame) {
	        // basically an anonymous "macro expression"
	        this.emit('(function (){');
	        var funcId = this._compileMacro(node, frame);
	        this.emit('return ' + funcId + ';})()');
	    },

	    compileImport: function(node, frame) {
	        var id = this.tmpid();
	        var target = node.target.value;

	        this.emit('env.getTemplate(');
	        this._compileExpression(node.template, frame);
	        this.emitLine(', false, '+this._templateName()+', false, ' + this.makeCallback(id));
	        this.addScopeLevel();

	        this.emitLine(id + '.getExported(' +
	            (node.withContext ? 'context.getVariables(), frame, ' : '') +
	            this.makeCallback(id));
	        this.addScopeLevel();

	        frame.set(target, id);

	        if(frame.parent) {
	            this.emitLine('frame.set("' + target + '", ' + id + ');');
	        }
	        else {
	            this.emitLine('context.setVariable("' + target + '", ' + id + ');');
	        }
	    },

	    compileFromImport: function(node, frame) {
	        var importedId = this.tmpid();

	        this.emit('env.getTemplate(');
	        this._compileExpression(node.template, frame);
	        this.emitLine(', false, '+this._templateName()+', false, ' + this.makeCallback(importedId));
	        this.addScopeLevel();

	        this.emitLine(importedId + '.getExported(' +
	            (node.withContext ? 'context.getVariables(), frame, ' : '') +
	            this.makeCallback(importedId));
	        this.addScopeLevel();

	        lib.each(node.names.children, function(nameNode) {
	            var name;
	            var alias;
	            var id = this.tmpid();

	            if(nameNode instanceof nodes.Pair) {
	                name = nameNode.key.value;
	                alias = nameNode.value.value;
	            }
	            else {
	                name = nameNode.value;
	                alias = name;
	            }

	            this.emitLine('if(' + importedId + '.hasOwnProperty("' + name + '")) {');
	            this.emitLine('var ' + id + ' = ' + importedId + '.' + name + ';');
	            this.emitLine('} else {');
	            this.emitLine('cb(new Error("cannot import \'' + name + '\'")); return;');
	            this.emitLine('}');

	            frame.set(alias, id);

	            if(frame.parent) {
	                this.emitLine('frame.set("' + alias + '", ' + id + ');');
	            }
	            else {
	                this.emitLine('context.setVariable("' + alias + '", ' + id + ');');
	            }
	        }, this);
	    },

	    compileBlock: function(node) {
	        var id = this.tmpid();

	        // If we are executing outside a block (creating a top-level
	        // block), we really don't want to execute its code because it
	        // will execute twice: once when the child template runs and
	        // again when the parent template runs. Note that blocks
	        // within blocks will *always* execute immediately *and*
	        // wherever else they are invoked (like used in a parent
	        // template). This may have behavioral differences from jinja
	        // because blocks can have side effects, but it seems like a
	        // waste of performance to always execute huge top-level
	        // blocks twice
	        if(!this.inBlock) {
	            this.emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : ');
	        }
	        this.emit('context.getBlock("' + node.name.value + '")');
	        if(!this.inBlock) {
	            this.emit(')');
	        }
	        this.emitLine('(env, context, frame, runtime, ' + this.makeCallback(id));
	        this.emitLine(this.buffer + ' += ' + id + ';');
	        this.addScopeLevel();
	    },

	    compileSuper: function(node, frame) {
	        var name = node.blockName.value;
	        var id = node.symbol.value;

	        this.emitLine('context.getSuper(env, ' +
	                      '"' + name + '", ' +
	                      'b_' + name + ', ' +
	                      'frame, runtime, '+
	                      this.makeCallback(id));
	        this.emitLine(id + ' = runtime.markSafe(' + id + ');');
	        this.addScopeLevel();
	        frame.set(id, id);
	    },

	    compileExtends: function(node, frame) {
	        var k = this.tmpid();

	        this.emit('env.getTemplate(');
	        this._compileExpression(node.template, frame);
	        this.emitLine(', true, '+this._templateName()+', false, ' + this.makeCallback('_parentTemplate'));

	        // extends is a dynamic tag and can occur within a block like
	        // `if`, so if this happens we need to capture the parent
	        // template in the top-level scope
	        this.emitLine('parentTemplate = _parentTemplate');

	        this.emitLine('for(var ' + k + ' in parentTemplate.blocks) {');
	        this.emitLine('context.addBlock(' + k +
	                      ', parentTemplate.blocks[' + k + ']);');
	        this.emitLine('}');

	        this.addScopeLevel();
	    },

	    compileInclude: function(node, frame) {
	        var id = this.tmpid();
	        var id2 = this.tmpid();

	        this.emitLine('var tasks = [];');
	        this.emitLine('tasks.push(');
	        this.emitLine('function(callback) {');
	        this.emit('env.getTemplate(');
	        this._compileExpression(node.template, frame);
	        this.emitLine(', false, '+this._templateName()+', ' + node.ignoreMissing + ', ' + this.makeCallback(id));
	        this.emitLine('callback(null,' + id + ');});');
	        this.emitLine('});');

	        this.emitLine('tasks.push(');
	        this.emitLine('function(template, callback){');
	        this.emitLine('template.render(' +
	            'context.getVariables(), frame, ' + this.makeCallback(id2));
	        this.emitLine('callback(null,' + id2 + ');});');
	        this.emitLine('});');

	        this.emitLine('tasks.push(');
	        this.emitLine('function(result, callback){');
	        this.emitLine(this.buffer + ' += result;');
	        this.emitLine('callback(null);');
	        this.emitLine('});');
	        this.emitLine('env.waterfall(tasks, function(){');
	        this.addScopeLevel();
	    },

	    compileTemplateData: function(node, frame) {
	        this.compileLiteral(node, frame);
	    },

	    compileCapture: function(node, frame) {
	        // we need to temporarily override the current buffer id as 'output'
	        // so the set block writes to the capture output instead of the buffer
	        var buffer = this.buffer;
	        this.buffer = 'output';
	        this.emitLine('(function() {');
	        this.emitLine('var output = "";');
	        this.withScopedSyntax(function () {
	            this.compile(node.body, frame);
	        });
	        this.emitLine('return output;');
	        this.emitLine('})()');
	        // and of course, revert back to the old buffer id
	        this.buffer = buffer;
	    },

	    compileOutput: function(node, frame) {
	        var children = node.children;
	        for(var i=0, l=children.length; i<l; i++) {
	            // TemplateData is a special case because it is never
	            // autoescaped, so simply output it for optimization
	            if(children[i] instanceof nodes.TemplateData) {
	                if(children[i].value) {
	                    this.emit(this.buffer + ' += ');
	                    this.compileLiteral(children[i], frame);
	                    this.emitLine(';');
	                }
	            }
	            else {
	                this.emit(this.buffer + ' += runtime.suppressValue(');
	                if(this.throwOnUndefined) {
	                    this.emit('runtime.ensureDefined(');
	                }
	                this.compile(children[i], frame);
	                if(this.throwOnUndefined) {
	                    this.emit(',' + node.lineno + ',' + node.colno + ')');
	                }
	                this.emit(', env.opts.autoescape);\n');
	            }
	        }
	    },

	    compileRoot: function(node, frame) {
	        if(frame) {
	            this.fail('compileRoot: root node can\'t have frame');
	        }

	        frame = new Frame();

	        this.emitFuncBegin('root');
	        this.emitLine('var parentTemplate = null;');
	        this._compileChildren(node, frame);
	        this.emitLine('if(parentTemplate) {');
	        this.emitLine('parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);');
	        this.emitLine('} else {');
	        this.emitLine('cb(null, ' + this.buffer +');');
	        this.emitLine('}');
	        this.emitFuncEnd(true);

	        this.inBlock = true;

	        var blockNames = [];

	        var i, name, block, blocks = node.findAll(nodes.Block);
	        for (i = 0; i < blocks.length; i++) {
	            block = blocks[i];
	            name = block.name.value;

	            if (blockNames.indexOf(name) !== -1) {
	                throw new Error('Block "' + name + '" defined more than once.');
	            }
	            blockNames.push(name);

	            this.emitFuncBegin('b_' + name);

	            var tmpFrame = new Frame();
	            this.emitLine('var frame = frame.push(true);');
	            this.compile(block.body, tmpFrame);
	            this.emitFuncEnd();
	        }

	        this.emitLine('return {');
	        for (i = 0; i < blocks.length; i++) {
	            block = blocks[i];
	            name = 'b_' + block.name.value;
	            this.emitLine(name + ': ' + name + ',');
	        }
	        this.emitLine('root: root\n};');
	    },

	    compile: function (node, frame) {
	        var _compile = this['compile' + node.typename];
	        if(_compile) {
	            _compile.call(this, node, frame);
	        }
	        else {
	            this.fail('compile: Cannot compile node: ' + node.typename,
	                      node.lineno,
	                      node.colno);
	        }
	    },

	    getCode: function() {
	        return this.codebuf.join('');
	    }
	});

	// var c = new Compiler();
	// var src = 'hello {% filter title %}' +
	//     'Hello madam how are you' +
	//     '{% endfilter %}'
	// var ast = transformer.transform(parser.parse(src));
	// nodes.printNodes(ast);
	// c.compile(ast);
	// var tmpl = c.getCode();
	// console.log(tmpl);

	module.exports = {
	    compile: function(src, asyncFilters, extensions, name, opts) {
	        var c = new Compiler(name, opts.throwOnUndefined);

	        // Run the extension preprocessors against the source.
	        if(extensions && extensions.length) {
	            for(var i=0; i<extensions.length; i++) {
	                if('preprocess' in extensions[i]) {
	                    src = extensions[i].preprocess(src, name);
	                }
	            }
	        }

	        c.compile(transformer.transform(
	            parser.parse(src,
	                         extensions,
	                         opts),
	            asyncFilters,
	            name
	        ));
	        return c.getCode();
	    },

	    Compiler: Compiler
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var lexer = __webpack_require__(9);
	var nodes = __webpack_require__(10);
	// jshint -W079
	var Object = __webpack_require__(6);
	var lib = __webpack_require__(1);

	var Parser = Object.extend({
	    init: function (tokens) {
	        this.tokens = tokens;
	        this.peeked = null;
	        this.breakOnBlocks = null;
	        this.dropLeadingWhitespace = false;

	        this.extensions = [];
	    },

	    nextToken: function (withWhitespace) {
	        var tok;

	        if(this.peeked) {
	            if(!withWhitespace && this.peeked.type === lexer.TOKEN_WHITESPACE) {
	                this.peeked = null;
	            }
	            else {
	                tok = this.peeked;
	                this.peeked = null;
	                return tok;
	            }
	        }

	        tok = this.tokens.nextToken();

	        if(!withWhitespace) {
	            while(tok && tok.type === lexer.TOKEN_WHITESPACE) {
	                tok = this.tokens.nextToken();
	            }
	        }

	        return tok;
	    },

	    peekToken: function () {
	        this.peeked = this.peeked || this.nextToken();
	        return this.peeked;
	    },

	    pushToken: function(tok) {
	        if(this.peeked) {
	            throw new Error('pushToken: can only push one token on between reads');
	        }
	        this.peeked = tok;
	    },

	    fail: function (msg, lineno, colno) {
	        if((lineno === undefined || colno === undefined) && this.peekToken()) {
	            var tok = this.peekToken();
	            lineno = tok.lineno;
	            colno = tok.colno;
	        }
	        if (lineno !== undefined) lineno += 1;
	        if (colno !== undefined) colno += 1;

	        throw new lib.TemplateError(msg, lineno, colno);
	    },

	    skip: function(type) {
	        var tok = this.nextToken();
	        if(!tok || tok.type !== type) {
	            this.pushToken(tok);
	            return false;
	        }
	        return true;
	    },

	    expect: function(type) {
	        var tok = this.nextToken();
	        if(tok.type !== type) {
	            this.fail('expected ' + type + ', got ' + tok.type,
	                      tok.lineno,
	                      tok.colno);
	        }
	        return tok;
	    },

	    skipValue: function(type, val) {
	        var tok = this.nextToken();
	        if(!tok || tok.type !== type || tok.value !== val) {
	            this.pushToken(tok);
	            return false;
	        }
	        return true;
	    },

	    skipSymbol: function(val) {
	        return this.skipValue(lexer.TOKEN_SYMBOL, val);
	    },

	    advanceAfterBlockEnd: function(name) {
	        var tok;
	        if(!name) {
	            tok = this.peekToken();

	            if(!tok) {
	                this.fail('unexpected end of file');
	            }

	            if(tok.type !== lexer.TOKEN_SYMBOL) {
	                this.fail('advanceAfterBlockEnd: expected symbol token or ' +
	                          'explicit name to be passed');
	            }

	            name = this.nextToken().value;
	        }

	        tok = this.nextToken();

	        if(tok && tok.type === lexer.TOKEN_BLOCK_END) {
	            if(tok.value.charAt(0) === '-') {
	                this.dropLeadingWhitespace = true;
	            }
	        }
	        else {
	            this.fail('expected block end in ' + name + ' statement');
	        }

	        return tok;
	    },

	    advanceAfterVariableEnd: function() {
	        var tok = this.nextToken();

	        if(tok && tok.type === lexer.TOKEN_VARIABLE_END) {
	            this.dropLeadingWhitespace = tok.value.charAt(
	                tok.value.length - this.tokens.tags.VARIABLE_END.length - 1
	            ) === '-';
	        } else {
	            this.pushToken(tok);
	            this.fail('expected variable end');
	        }
	    },

	    parseFor: function() {
	        var forTok = this.peekToken();
	        var node;
	        var endBlock;

	        if(this.skipSymbol('for')) {
	            node = new nodes.For(forTok.lineno, forTok.colno);
	            endBlock = 'endfor';
	        }
	        else if(this.skipSymbol('asyncEach')) {
	            node = new nodes.AsyncEach(forTok.lineno, forTok.colno);
	            endBlock = 'endeach';
	        }
	        else if(this.skipSymbol('asyncAll')) {
	            node = new nodes.AsyncAll(forTok.lineno, forTok.colno);
	            endBlock = 'endall';
	        }
	        else {
	            this.fail('parseFor: expected for{Async}', forTok.lineno, forTok.colno);
	        }

	        node.name = this.parsePrimary();

	        if(!(node.name instanceof nodes.Symbol)) {
	            this.fail('parseFor: variable name expected for loop');
	        }

	        var type = this.peekToken().type;
	        if(type === lexer.TOKEN_COMMA) {
	            // key/value iteration
	            var key = node.name;
	            node.name = new nodes.Array(key.lineno, key.colno);
	            node.name.addChild(key);

	            while(this.skip(lexer.TOKEN_COMMA)) {
	                var prim = this.parsePrimary();
	                node.name.addChild(prim);
	            }
	        }

	        if(!this.skipSymbol('in')) {
	            this.fail('parseFor: expected "in" keyword for loop',
	                      forTok.lineno,
	                      forTok.colno);
	        }

	        node.arr = this.parseExpression();
	        this.advanceAfterBlockEnd(forTok.value);

	        node.body = this.parseUntilBlocks(endBlock, 'else');

	        if(this.skipSymbol('else')) {
	            this.advanceAfterBlockEnd('else');
	            node.else_ = this.parseUntilBlocks(endBlock);
	        }

	        this.advanceAfterBlockEnd();

	        return node;
	    },

	    parseMacro: function() {
	        var macroTok = this.peekToken();
	        if(!this.skipSymbol('macro')) {
	            this.fail('expected macro');
	        }

	        var name = this.parsePrimary(true);
	        var args = this.parseSignature();
	        var node = new nodes.Macro(macroTok.lineno,
	                                   macroTok.colno,
	                                   name,
	                                   args);

	        this.advanceAfterBlockEnd(macroTok.value);
	        node.body = this.parseUntilBlocks('endmacro');
	        this.advanceAfterBlockEnd();

	        return node;
	    },

	    parseCall: function() {
	        // a call block is parsed as a normal FunCall, but with an added
	        // 'caller' kwarg which is a Caller node.
	        var callTok = this.peekToken();
	        if(!this.skipSymbol('call')) {
	            this.fail('expected call');
	        }

	        var callerArgs = this.parseSignature(true) || new nodes.NodeList();
	        var macroCall = this.parsePrimary();

	        this.advanceAfterBlockEnd(callTok.value);
	        var body = this.parseUntilBlocks('endcall');
	        this.advanceAfterBlockEnd();

	        var callerName = new nodes.Symbol(callTok.lineno,
	                                          callTok.colno,
	                                          'caller');
	        var callerNode = new nodes.Caller(callTok.lineno,
	                                          callTok.colno,
	                                          callerName,
	                                          callerArgs,
	                                          body);

	        // add the additional caller kwarg, adding kwargs if necessary
	        var args = macroCall.args.children;
	        if (!(args[args.length-1] instanceof nodes.KeywordArgs)) {
	          args.push(new nodes.KeywordArgs());
	        }
	        var kwargs = args[args.length - 1];
	        kwargs.addChild(new nodes.Pair(callTok.lineno,
	                                       callTok.colno,
	                                       callerName,
	                                       callerNode));

	        return new nodes.Output(callTok.lineno,
	                                callTok.colno,
	                                [macroCall]);
	    },

	    parseWithContext: function() {
	        var tok = this.peekToken();

	        var withContext = null;

	        if(this.skipSymbol('with')) {
	            withContext = true;
	        }
	        else if(this.skipSymbol('without')) {
	            withContext = false;
	        }

	        if(withContext !== null) {
	            if(!this.skipSymbol('context')) {
	                this.fail('parseFrom: expected context after with/without',
	                            tok.lineno,
	                            tok.colno);
	            }
	        }

	        return withContext;
	    },

	    parseImport: function() {
	        var importTok = this.peekToken();
	        if(!this.skipSymbol('import')) {
	            this.fail('parseImport: expected import',
	                      importTok.lineno,
	                      importTok.colno);
	        }

	        var template = this.parseExpression();

	        if(!this.skipSymbol('as')) {
	            this.fail('parseImport: expected "as" keyword',
	                            importTok.lineno,
	                            importTok.colno);
	        }

	        var target = this.parseExpression();

	        var withContext = this.parseWithContext();

	        var node = new nodes.Import(importTok.lineno,
	                                    importTok.colno,
	                                    template,
	                                    target,
	                                    withContext);

	        this.advanceAfterBlockEnd(importTok.value);

	        return node;
	    },

	    parseFrom: function() {
	        var fromTok = this.peekToken();
	        if(!this.skipSymbol('from')) {
	            this.fail('parseFrom: expected from');
	        }

	        var template = this.parseExpression();

	        if(!this.skipSymbol('import')) {
	            this.fail('parseFrom: expected import',
	                            fromTok.lineno,
	                            fromTok.colno);
	        }

	        var names = new nodes.NodeList(),
	            withContext;

	        while(1) {
	            var nextTok = this.peekToken();
	            if(nextTok.type === lexer.TOKEN_BLOCK_END) {
	                if(!names.children.length) {
	                    this.fail('parseFrom: Expected at least one import name',
	                              fromTok.lineno,
	                              fromTok.colno);
	                }

	                // Since we are manually advancing past the block end,
	                // need to keep track of whitespace control (normally
	                // this is done in `advanceAfterBlockEnd`
	                if(nextTok.value.charAt(0) === '-') {
	                    this.dropLeadingWhitespace = true;
	                }

	                this.nextToken();
	                break;
	            }

	            if(names.children.length > 0 && !this.skip(lexer.TOKEN_COMMA)) {
	                this.fail('parseFrom: expected comma',
	                                fromTok.lineno,
	                                fromTok.colno);
	            }

	            var name = this.parsePrimary();
	            if(name.value.charAt(0) === '_') {
	                this.fail('parseFrom: names starting with an underscore ' +
	                          'cannot be imported',
	                          name.lineno,
	                          name.colno);
	            }

	            if(this.skipSymbol('as')) {
	                var alias = this.parsePrimary();
	                names.addChild(new nodes.Pair(name.lineno,
	                                              name.colno,
	                                              name,
	                                              alias));
	            }
	            else {
	                names.addChild(name);
	            }

	            withContext = this.parseWithContext();
	        }

	        return new nodes.FromImport(fromTok.lineno,
	                                    fromTok.colno,
	                                    template,
	                                    names,
	                                    withContext);
	    },

	    parseBlock: function() {
	        var tag = this.peekToken();
	        if(!this.skipSymbol('block')) {
	            this.fail('parseBlock: expected block', tag.lineno, tag.colno);
	        }

	        var node = new nodes.Block(tag.lineno, tag.colno);

	        node.name = this.parsePrimary();
	        if(!(node.name instanceof nodes.Symbol)) {
	            this.fail('parseBlock: variable name expected',
	                      tag.lineno,
	                      tag.colno);
	        }

	        this.advanceAfterBlockEnd(tag.value);

	        node.body = this.parseUntilBlocks('endblock');
	        this.skipSymbol('endblock');
	        this.skipSymbol(node.name.value);

	        var tok = this.peekToken();
	        if(!tok) {
	            this.fail('parseBlock: expected endblock, got end of file');
	        }

	        this.advanceAfterBlockEnd(tok.value);

	        return node;
	    },

	    parseExtends: function() {
	        var tagName = 'extends';
	        var tag = this.peekToken();
	        if(!this.skipSymbol(tagName)) {
	            this.fail('parseTemplateRef: expected '+ tagName);
	        }

	        var node = new nodes.Extends(tag.lineno, tag.colno);
	        node.template = this.parseExpression();

	        this.advanceAfterBlockEnd(tag.value);
	        return node;
	    },

	    parseInclude: function() {
	        var tagName = 'include';
	        var tag = this.peekToken();
	        if(!this.skipSymbol(tagName)) {
	            this.fail('parseInclude: expected '+ tagName);
	        }

	        var node = new nodes.Include(tag.lineno, tag.colno);
	        node.template = this.parseExpression();

	        if(this.skipSymbol('ignore') && this.skipSymbol('missing')) {
	            node.ignoreMissing = true;
	        }

	        this.advanceAfterBlockEnd(tag.value);
	        return node;
	    },

	    parseIf: function() {
	        var tag = this.peekToken();
	        var node;

	        if(this.skipSymbol('if') || this.skipSymbol('elif') || this.skipSymbol('elseif')) {
	            node = new nodes.If(tag.lineno, tag.colno);
	        }
	        else if(this.skipSymbol('ifAsync')) {
	            node = new nodes.IfAsync(tag.lineno, tag.colno);
	        }
	        else {
	            this.fail('parseIf: expected if, elif, or elseif',
	                      tag.lineno,
	                      tag.colno);
	        }

	        node.cond = this.parseExpression();
	        this.advanceAfterBlockEnd(tag.value);

	        node.body = this.parseUntilBlocks('elif', 'elseif', 'else', 'endif');
	        var tok = this.peekToken();

	        switch(tok && tok.value) {
	        case 'elseif':
	        case 'elif':
	            node.else_ = this.parseIf();
	            break;
	        case 'else':
	            this.advanceAfterBlockEnd();
	            node.else_ = this.parseUntilBlocks('endif');
	            this.advanceAfterBlockEnd();
	            break;
	        case 'endif':
	            node.else_ = null;
	            this.advanceAfterBlockEnd();
	            break;
	        default:
	            this.fail('parseIf: expected elif, else, or endif, ' +
	                      'got end of file');
	        }

	        return node;
	    },

	    parseSet: function() {
	        var tag = this.peekToken();
	        if(!this.skipSymbol('set')) {
	            this.fail('parseSet: expected set', tag.lineno, tag.colno);
	        }

	        var node = new nodes.Set(tag.lineno, tag.colno, []);

	        var target;
	        while((target = this.parsePrimary())) {
	            node.targets.push(target);

	            if(!this.skip(lexer.TOKEN_COMMA)) {
	                break;
	            }
	        }

	        if(!this.skipValue(lexer.TOKEN_OPERATOR, '=')) {
	            if (!this.skip(lexer.TOKEN_BLOCK_END)) {
	                this.fail('parseSet: expected = or block end in set tag',
	                          tag.lineno,
	                          tag.colno);
	            }
	            else {
	                node.body = new nodes.Capture(
	                    tag.lineno,
	                    tag.colno,
	                    this.parseUntilBlocks('endset')
	                );
	                node.value = null;
	                this.advanceAfterBlockEnd();
	            }
	        }
	        else {
	            node.value = this.parseExpression();
	            this.advanceAfterBlockEnd(tag.value);
	        }

	        return node;
	    },

	    parseStatement: function () {
	        var tok = this.peekToken();
	        var node;

	        if(tok.type !== lexer.TOKEN_SYMBOL) {
	            this.fail('tag name expected', tok.lineno, tok.colno);
	        }

	        if(this.breakOnBlocks &&
	           lib.indexOf(this.breakOnBlocks, tok.value) !== -1) {
	            return null;
	        }

	        switch(tok.value) {
	        case 'raw': return this.parseRaw();
	        case 'verbatim': return this.parseRaw('verbatim');
	        case 'if':
	        case 'ifAsync':
	            return this.parseIf();
	        case 'for':
	        case 'asyncEach':
	        case 'asyncAll':
	            return this.parseFor();
	        case 'block': return this.parseBlock();
	        case 'extends': return this.parseExtends();
	        case 'include': return this.parseInclude();
	        case 'set': return this.parseSet();
	        case 'macro': return this.parseMacro();
	        case 'call': return this.parseCall();
	        case 'import': return this.parseImport();
	        case 'from': return this.parseFrom();
	        case 'filter': return this.parseFilterStatement();
	        default:
	            if (this.extensions.length) {
	                for (var i = 0; i < this.extensions.length; i++) {
	                    var ext = this.extensions[i];
	                    if (lib.indexOf(ext.tags || [], tok.value) !== -1) {
	                        return ext.parse(this, nodes, lexer);
	                    }
	                }
	            }
	            this.fail('unknown block tag: ' + tok.value, tok.lineno, tok.colno);
	        }

	        return node;
	    },

	    parseRaw: function(tagName) {
	        tagName = tagName || 'raw';
	        var endTagName = 'end' + tagName;
	        // Look for upcoming raw blocks (ignore all other kinds of blocks)
	        var rawBlockRegex = new RegExp('([\\s\\S]*?){%\\s*(' + tagName + '|' + endTagName + ')\\s*(?=%})%}');
	        var rawLevel = 1;
	        var str = '';
	        var matches = null;

	        // Skip opening raw token
	        // Keep this token to track line and column numbers
	        var begun = this.advanceAfterBlockEnd();

	        // Exit when there's nothing to match
	        // or when we've found the matching "endraw" block
	        while((matches = this.tokens._extractRegex(rawBlockRegex)) && rawLevel > 0) {
	            var all = matches[0];
	            var pre = matches[1];
	            var blockName = matches[2];

	            // Adjust rawlevel
	            if(blockName === tagName) {
	                rawLevel += 1;
	            } else if(blockName === endTagName) {
	                rawLevel -= 1;
	            }

	            // Add to str
	            if(rawLevel === 0) {
	                // We want to exclude the last "endraw"
	                str += pre;
	                // Move tokenizer to beginning of endraw block
	                this.tokens.backN(all.length - pre.length);
	            } else {
	                str += all;
	            }
	        }

	        return new nodes.Output(
	            begun.lineno,
	            begun.colno,
	            [new nodes.TemplateData(begun.lineno, begun.colno, str)]
	        );
	    },

	    parsePostfix: function(node) {
	        var lookup, tok = this.peekToken();

	        while(tok) {
	            if(tok.type === lexer.TOKEN_LEFT_PAREN) {
	                // Function call
	                node = new nodes.FunCall(tok.lineno,
	                                         tok.colno,
	                                         node,
	                                         this.parseSignature());
	            }
	            else if(tok.type === lexer.TOKEN_LEFT_BRACKET) {
	                // Reference
	                lookup = this.parseAggregate();
	                if(lookup.children.length > 1) {
	                    this.fail('invalid index');
	                }

	                node =  new nodes.LookupVal(tok.lineno,
	                                            tok.colno,
	                                            node,
	                                            lookup.children[0]);
	            }
	            else if(tok.type === lexer.TOKEN_OPERATOR && tok.value === '.') {
	                // Reference
	                this.nextToken();
	                var val = this.nextToken();

	                if(val.type !== lexer.TOKEN_SYMBOL) {
	                    this.fail('expected name as lookup value, got ' + val.value,
	                              val.lineno,
	                              val.colno);
	                }

	                // Make a literal string because it's not a variable
	                // reference
	                lookup = new nodes.Literal(val.lineno,
	                                               val.colno,
	                                               val.value);

	                node =  new nodes.LookupVal(tok.lineno,
	                                            tok.colno,
	                                            node,
	                                            lookup);
	            }
	            else {
	                break;
	            }

	            tok = this.peekToken();
	        }

	        return node;
	    },

	    parseExpression: function() {
	        var node = this.parseInlineIf();
	        return node;
	    },

	    parseInlineIf: function() {
	        var node = this.parseOr();
	        if(this.skipSymbol('if')) {
	            var cond_node = this.parseOr();
	            var body_node = node;
	            node = new nodes.InlineIf(node.lineno, node.colno);
	            node.body = body_node;
	            node.cond = cond_node;
	            if(this.skipSymbol('else')) {
	                node.else_ = this.parseOr();
	            } else {
	                node.else_ = null;
	            }
	        }

	        return node;
	    },

	    parseOr: function() {
	        var node = this.parseAnd();
	        while(this.skipSymbol('or')) {
	            var node2 = this.parseAnd();
	            node = new nodes.Or(node.lineno,
	                                node.colno,
	                                node,
	                                node2);
	        }
	        return node;
	    },

	    parseAnd: function() {
	        var node = this.parseNot();
	        while(this.skipSymbol('and')) {
	            var node2 = this.parseNot();
	            node = new nodes.And(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parseNot: function() {
	        var tok = this.peekToken();
	        if(this.skipSymbol('not')) {
	            return new nodes.Not(tok.lineno,
	                                 tok.colno,
	                                 this.parseNot());
	        }
	        return this.parseIn();
	    },

	    parseIn: function() {
	      var node = this.parseCompare();
	      while(1) {
	        // check if the next token is 'not'
	        var tok = this.nextToken();
	        if (!tok) { break; }
	        var invert = tok.type === lexer.TOKEN_SYMBOL && tok.value === 'not';
	        // if it wasn't 'not', put it back
	        if (!invert) { this.pushToken(tok); }
	        if (this.skipSymbol('in')) {
	          var node2 = this.parseCompare();
	          node = new nodes.In(node.lineno,
	                              node.colno,
	                              node,
	                              node2);
	          if (invert) {
	            node = new nodes.Not(node.lineno,
	                                 node.colno,
	                                 node);
	          }
	        }
	        else {
	          // if we'd found a 'not' but this wasn't an 'in', put back the 'not'
	          if (invert) { this.pushToken(tok); }
	          break;
	        }
	      }
	      return node;
	    },

	    parseCompare: function() {
	        var compareOps = ['==', '===', '!=', '!==', '<', '>', '<=', '>='];
	        var expr = this.parseConcat();
	        var ops = [];

	        while(1) {
	            var tok = this.nextToken();

	            if(!tok) {
	                break;
	            }
	            else if(lib.indexOf(compareOps, tok.value) !== -1) {
	                ops.push(new nodes.CompareOperand(tok.lineno,
	                                                  tok.colno,
	                                                  this.parseConcat(),
	                                                  tok.value));
	            }
	            else {
	                this.pushToken(tok);
	                break;
	            }
	        }

	        if(ops.length) {
	            return new nodes.Compare(ops[0].lineno,
	                                     ops[0].colno,
	                                     expr,
	                                     ops);
	        }
	        else {
	            return expr;
	        }
	    },

	    // finds the '~' for string concatenation
	    parseConcat: function(){
	        var node = this.parseAdd();
	        while(this.skipValue(lexer.TOKEN_TILDE, '~')) {
	            var node2 = this.parseAdd();
	            node = new nodes.Concat(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parseAdd: function() {
	        var node = this.parseSub();
	        while(this.skipValue(lexer.TOKEN_OPERATOR, '+')) {
	            var node2 = this.parseSub();
	            node = new nodes.Add(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parseSub: function() {
	        var node = this.parseMul();
	        while(this.skipValue(lexer.TOKEN_OPERATOR, '-')) {
	            var node2 = this.parseMul();
	            node = new nodes.Sub(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parseMul: function() {
	        var node = this.parseDiv();
	        while(this.skipValue(lexer.TOKEN_OPERATOR, '*')) {
	            var node2 = this.parseDiv();
	            node = new nodes.Mul(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parseDiv: function() {
	        var node = this.parseFloorDiv();
	        while(this.skipValue(lexer.TOKEN_OPERATOR, '/')) {
	            var node2 = this.parseFloorDiv();
	            node = new nodes.Div(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parseFloorDiv: function() {
	        var node = this.parseMod();
	        while(this.skipValue(lexer.TOKEN_OPERATOR, '//')) {
	            var node2 = this.parseMod();
	            node = new nodes.FloorDiv(node.lineno,
	                                      node.colno,
	                                      node,
	                                      node2);
	        }
	        return node;
	    },

	    parseMod: function() {
	        var node = this.parsePow();
	        while(this.skipValue(lexer.TOKEN_OPERATOR, '%')) {
	            var node2 = this.parsePow();
	            node = new nodes.Mod(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parsePow: function() {
	        var node = this.parseUnary();
	        while(this.skipValue(lexer.TOKEN_OPERATOR, '**')) {
	            var node2 = this.parseUnary();
	            node = new nodes.Pow(node.lineno,
	                                 node.colno,
	                                 node,
	                                 node2);
	        }
	        return node;
	    },

	    parseUnary: function(noFilters) {
	        var tok = this.peekToken();
	        var node;

	        if(this.skipValue(lexer.TOKEN_OPERATOR, '-')) {
	            node = new nodes.Neg(tok.lineno,
	                                 tok.colno,
	                                 this.parseUnary(true));
	        }
	        else if(this.skipValue(lexer.TOKEN_OPERATOR, '+')) {
	            node = new nodes.Pos(tok.lineno,
	                                 tok.colno,
	                                 this.parseUnary(true));
	        }
	        else {
	            node = this.parsePrimary();
	        }

	        if(!noFilters) {
	            node = this.parseFilter(node);
	        }

	        return node;
	    },

	    parsePrimary: function (noPostfix) {
	        var tok = this.nextToken();
	        var val;
	        var node = null;

	        if(!tok) {
	            this.fail('expected expression, got end of file');
	        }
	        else if(tok.type === lexer.TOKEN_STRING) {
	            val = tok.value;
	        }
	        else if(tok.type === lexer.TOKEN_INT) {
	            val = parseInt(tok.value, 10);
	        }
	        else if(tok.type === lexer.TOKEN_FLOAT) {
	            val = parseFloat(tok.value);
	        }
	        else if(tok.type === lexer.TOKEN_BOOLEAN) {
	            if(tok.value === 'true') {
	                val = true;
	            }
	            else if(tok.value === 'false') {
	                val = false;
	            }
	            else {
	                this.fail('invalid boolean: ' + tok.value,
	                          tok.lineno,
	                          tok.colno);
	            }
	        }
	        else if(tok.type === lexer.TOKEN_NONE) {
	            val = null;
	        }
	        else if (tok.type === lexer.TOKEN_REGEX) {
	            val = new RegExp(tok.value.body, tok.value.flags);
	        }

	        if(val !== undefined) {
	            node = new nodes.Literal(tok.lineno, tok.colno, val);
	        }
	        else if(tok.type === lexer.TOKEN_SYMBOL) {
	            node = new nodes.Symbol(tok.lineno, tok.colno, tok.value);
	        }
	        else {
	            // See if it's an aggregate type, we need to push the
	            // current delimiter token back on
	            this.pushToken(tok);
	            node = this.parseAggregate();
	        }

	        if(!noPostfix) {
	            node = this.parsePostfix(node);
	        }

	        if(node) {
	            return node;
	        }
	        else {
	            this.fail('unexpected token: ' + tok.value,
	                      tok.lineno,
	                      tok.colno);
	        }
	    },

	    parseFilterName: function() {
	        var tok = this.expect(lexer.TOKEN_SYMBOL);
	        var name = tok.value;

	        while(this.skipValue(lexer.TOKEN_OPERATOR, '.')) {
	            name += '.' + this.expect(lexer.TOKEN_SYMBOL).value;
	        }

	        return new nodes.Symbol(tok.lineno, tok.colno, name);
	    },

	    parseFilterArgs: function(node) {
	        if(this.peekToken().type === lexer.TOKEN_LEFT_PAREN) {
	            // Get a FunCall node and add the parameters to the
	            // filter
	            var call = this.parsePostfix(node);
	            return call.args.children;
	        }
	        return [];
	    },

	    parseFilter: function(node) {
	        while(this.skip(lexer.TOKEN_PIPE)) {
	            var name = this.parseFilterName();

	            node = new nodes.Filter(
	                name.lineno,
	                name.colno,
	                name,
	                new nodes.NodeList(
	                    name.lineno,
	                    name.colno,
	                    [node].concat(this.parseFilterArgs(node))
	                )
	            );
	        }

	        return node;
	    },

	    parseFilterStatement: function() {
	        var filterTok = this.peekToken();
	        if(!this.skipSymbol('filter')) {
	            this.fail('parseFilterStatement: expected filter');
	        }

	        var name = this.parseFilterName();
	        var args = this.parseFilterArgs(name);

	        this.advanceAfterBlockEnd(filterTok.value);
	        var body = new nodes.Capture(
	            name.lineno,
	            name.colno,
	            this.parseUntilBlocks('endfilter')
	        );
	        this.advanceAfterBlockEnd();

	        var node = new nodes.Filter(
	            name.lineno,
	            name.colno,
	            name,
	            new nodes.NodeList(
	                name.lineno,
	                name.colno,
	                [body].concat(args)
	            )
	        );

	        return new nodes.Output(
	            name.lineno,
	            name.colno,
	            [node]
	        );
	    },

	    parseAggregate: function() {
	        var tok = this.nextToken();
	        var node;

	        switch(tok.type) {
	        case lexer.TOKEN_LEFT_PAREN:
	            node = new nodes.Group(tok.lineno, tok.colno); break;
	        case lexer.TOKEN_LEFT_BRACKET:
	            node = new nodes.Array(tok.lineno, tok.colno); break;
	        case lexer.TOKEN_LEFT_CURLY:
	            node = new nodes.Dict(tok.lineno, tok.colno); break;
	        default:
	            return null;
	        }

	        while(1) {
	            var type = this.peekToken().type;
	            if(type === lexer.TOKEN_RIGHT_PAREN ||
	               type === lexer.TOKEN_RIGHT_BRACKET ||
	               type === lexer.TOKEN_RIGHT_CURLY) {
	                this.nextToken();
	                break;
	            }

	            if(node.children.length > 0) {
	                if(!this.skip(lexer.TOKEN_COMMA)) {
	                    this.fail('parseAggregate: expected comma after expression',
	                              tok.lineno,
	                              tok.colno);
	                }
	            }

	            if(node instanceof nodes.Dict) {
	                // TODO: check for errors
	                var key = this.parsePrimary();

	                // We expect a key/value pair for dicts, separated by a
	                // colon
	                if(!this.skip(lexer.TOKEN_COLON)) {
	                    this.fail('parseAggregate: expected colon after dict key',
	                        tok.lineno,
	                        tok.colno);
	                }

	                // TODO: check for errors
	                var value = this.parseExpression();
	                node.addChild(new nodes.Pair(key.lineno,
	                                             key.colno,
	                                             key,
	                                             value));
	            }
	            else {
	                // TODO: check for errors
	                var expr = this.parseExpression();
	                node.addChild(expr);
	            }
	        }

	        return node;
	    },

	    parseSignature: function(tolerant, noParens) {
	        var tok = this.peekToken();
	        if(!noParens && tok.type !== lexer.TOKEN_LEFT_PAREN) {
	            if(tolerant) {
	                return null;
	            }
	            else {
	                this.fail('expected arguments', tok.lineno, tok.colno);
	            }
	        }

	        if(tok.type === lexer.TOKEN_LEFT_PAREN) {
	            tok = this.nextToken();
	        }

	        var args = new nodes.NodeList(tok.lineno, tok.colno);
	        var kwargs = new nodes.KeywordArgs(tok.lineno, tok.colno);
	        var checkComma = false;

	        while(1) {
	            tok = this.peekToken();
	            if(!noParens && tok.type === lexer.TOKEN_RIGHT_PAREN) {
	                this.nextToken();
	                break;
	            }
	            else if(noParens && tok.type === lexer.TOKEN_BLOCK_END) {
	                break;
	            }

	            if(checkComma && !this.skip(lexer.TOKEN_COMMA)) {
	                this.fail('parseSignature: expected comma after expression',
	                          tok.lineno,
	                          tok.colno);
	            }
	            else {
	                var arg = this.parseExpression();

	                if(this.skipValue(lexer.TOKEN_OPERATOR, '=')) {
	                    kwargs.addChild(
	                        new nodes.Pair(arg.lineno,
	                                       arg.colno,
	                                       arg,
	                                       this.parseExpression())
	                    );
	                }
	                else {
	                    args.addChild(arg);
	                }
	            }

	            checkComma = true;
	        }

	        if(kwargs.children.length) {
	            args.addChild(kwargs);
	        }

	        return args;
	    },

	    parseUntilBlocks: function(/* blockNames */) {
	        var prev = this.breakOnBlocks;
	        this.breakOnBlocks = lib.toArray(arguments);

	        var ret = this.parse();

	        this.breakOnBlocks = prev;
	        return ret;
	    },

	    parseNodes: function () {
	        var tok;
	        var buf = [];

	        while((tok = this.nextToken())) {
	            if(tok.type === lexer.TOKEN_DATA) {
	                var data = tok.value;
	                var nextToken = this.peekToken();
	                var nextVal = nextToken && nextToken.value;

	                // If the last token has "-" we need to trim the
	                // leading whitespace of the data. This is marked with
	                // the `dropLeadingWhitespace` variable.
	                if(this.dropLeadingWhitespace) {
	                    // TODO: this could be optimized (don't use regex)
	                    data = data.replace(/^\s*/, '');
	                    this.dropLeadingWhitespace = false;
	                }

	                // Same for the succeeding block start token
	                if(nextToken &&
	                    ((nextToken.type === lexer.TOKEN_BLOCK_START &&
	                      nextVal.charAt(nextVal.length - 1) === '-') ||
	                    (nextToken.type === lexer.TOKEN_VARIABLE_START &&
	                      nextVal.charAt(this.tokens.tags.VARIABLE_START.length)
	                        === '-') ||
	                    (nextToken.type === lexer.TOKEN_COMMENT &&
	                      nextVal.charAt(this.tokens.tags.COMMENT_START.length)
	                        === '-'))) {
	                    // TODO: this could be optimized (don't use regex)
	                    data = data.replace(/\s*$/, '');
	                }

	                buf.push(new nodes.Output(tok.lineno,
	                                          tok.colno,
	                                          [new nodes.TemplateData(tok.lineno,
	                                                                  tok.colno,
	                                                                  data)]));
	            }
	            else if(tok.type === lexer.TOKEN_BLOCK_START) {
	                this.dropLeadingWhitespace = false;
	                var n = this.parseStatement();
	                if(!n) {
	                    break;
	                }
	                buf.push(n);
	            }
	            else if(tok.type === lexer.TOKEN_VARIABLE_START) {
	                var e = this.parseExpression();
	                this.dropLeadingWhitespace = false;
	                this.advanceAfterVariableEnd();
	                buf.push(new nodes.Output(tok.lineno, tok.colno, [e]));
	            }
	            else if(tok.type === lexer.TOKEN_COMMENT) {
	                this.dropLeadingWhitespace = tok.value.charAt(
	                    tok.value.length - this.tokens.tags.COMMENT_END.length - 1
	                ) === '-';
	            } else {
	                // Ignore comments, otherwise this should be an error
	                this.fail('Unexpected token at top-level: ' +
	                                tok.type, tok.lineno, tok.colno);

	            }
	        }

	        return buf;
	    },

	    parse: function() {
	        return new nodes.NodeList(0, 0, this.parseNodes());
	    },

	    parseAsRoot: function() {
	        return new nodes.Root(0, 0, this.parseNodes());
	    }
	});

	// var util = require('util');

	// var l = lexer.lex('{%- if x -%}\n hello {% endif %}');
	// var t;
	// while((t = l.nextToken())) {
	//     console.log(util.inspect(t));
	// }

	// var p = new Parser(lexer.lex('hello {% filter title %}' +
	//                              'Hello madam how are you' +
	//                              '{% endfilter %}'));
	// var n = p.parseAsRoot();
	// nodes.printNodes(n);

	module.exports = {
	    parse: function(src, extensions, opts) {
	        var p = new Parser(lexer.lex(src, opts));
	        if (extensions !== undefined) {
	            p.extensions = extensions;
	        }
	        return p.parseAsRoot();
	    },
	    Parser: Parser
	};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var lib = __webpack_require__(1);

	var whitespaceChars = ' \n\t\r\u00A0';
	var delimChars = '()[]{}%*-+~/#,:|.<>=!';
	var intChars = '0123456789';

	var BLOCK_START = '{%';
	var BLOCK_END = '%}';
	var VARIABLE_START = '{{';
	var VARIABLE_END = '}}';
	var COMMENT_START = '{#';
	var COMMENT_END = '#}';

	var TOKEN_STRING = 'string';
	var TOKEN_WHITESPACE = 'whitespace';
	var TOKEN_DATA = 'data';
	var TOKEN_BLOCK_START = 'block-start';
	var TOKEN_BLOCK_END = 'block-end';
	var TOKEN_VARIABLE_START = 'variable-start';
	var TOKEN_VARIABLE_END = 'variable-end';
	var TOKEN_COMMENT = 'comment';
	var TOKEN_LEFT_PAREN = 'left-paren';
	var TOKEN_RIGHT_PAREN = 'right-paren';
	var TOKEN_LEFT_BRACKET = 'left-bracket';
	var TOKEN_RIGHT_BRACKET = 'right-bracket';
	var TOKEN_LEFT_CURLY = 'left-curly';
	var TOKEN_RIGHT_CURLY = 'right-curly';
	var TOKEN_OPERATOR = 'operator';
	var TOKEN_COMMA = 'comma';
	var TOKEN_COLON = 'colon';
	var TOKEN_TILDE = 'tilde';
	var TOKEN_PIPE = 'pipe';
	var TOKEN_INT = 'int';
	var TOKEN_FLOAT = 'float';
	var TOKEN_BOOLEAN = 'boolean';
	var TOKEN_NONE = 'none';
	var TOKEN_SYMBOL = 'symbol';
	var TOKEN_SPECIAL = 'special';
	var TOKEN_REGEX = 'regex';

	function token(type, value, lineno, colno) {
	    return {
	        type: type,
	        value: value,
	        lineno: lineno,
	        colno: colno
	    };
	}

	function Tokenizer(str, opts) {
	    this.str = str;
	    this.index = 0;
	    this.len = str.length;
	    this.lineno = 0;
	    this.colno = 0;

	    this.in_code = false;

	    opts = opts || {};

	    var tags = opts.tags || {};
	    this.tags = {
	        BLOCK_START: tags.blockStart || BLOCK_START,
	        BLOCK_END: tags.blockEnd || BLOCK_END,
	        VARIABLE_START: tags.variableStart || VARIABLE_START,
	        VARIABLE_END: tags.variableEnd || VARIABLE_END,
	        COMMENT_START: tags.commentStart || COMMENT_START,
	        COMMENT_END: tags.commentEnd || COMMENT_END
	    };

	    this.trimBlocks = !!opts.trimBlocks;
	    this.lstripBlocks = !!opts.lstripBlocks;
	}

	Tokenizer.prototype.nextToken = function() {
	    var lineno = this.lineno;
	    var colno = this.colno;
	    var tok;

	    if(this.in_code) {
	        // Otherwise, if we are in a block parse it as code
	        var cur = this.current();

	        if(this.is_finished()) {
	            // We have nothing else to parse
	            return null;
	        }
	        else if(cur === '"' || cur === '\'') {
	            // We've hit a string
	            return token(TOKEN_STRING, this.parseString(cur), lineno, colno);
	        }
	        else if((tok = this._extract(whitespaceChars))) {
	            // We hit some whitespace
	            return token(TOKEN_WHITESPACE, tok, lineno, colno);
	        }
	        else if((tok = this._extractString(this.tags.BLOCK_END)) ||
	                (tok = this._extractString('-' + this.tags.BLOCK_END))) {
	            // Special check for the block end tag
	            //
	            // It is a requirement that start and end tags are composed of
	            // delimiter characters (%{}[] etc), and our code always
	            // breaks on delimiters so we can assume the token parsing
	            // doesn't consume these elsewhere
	            this.in_code = false;
	            if(this.trimBlocks) {
	                cur = this.current();
	                if(cur === '\n') {
	                    // Skip newline
	                    this.forward();
	                }else if(cur === '\r'){
	                    // Skip CRLF newline
	                    this.forward();
	                    cur = this.current();
	                    if(cur === '\n'){
	                        this.forward();
	                    }else{
	                        // Was not a CRLF, so go back
	                        this.back();
	                    }
	                }
	            }
	            return token(TOKEN_BLOCK_END, tok, lineno, colno);
	        }
	        else if((tok = this._extractString(this.tags.VARIABLE_END)) ||
	                (tok = this._extractString('-' + this.tags.VARIABLE_END))) {
	            // Special check for variable end tag (see above)
	            this.in_code = false;
	            return token(TOKEN_VARIABLE_END, tok, lineno, colno);
	        }
	        else if (cur === 'r' && this.str.charAt(this.index + 1) === '/') {
	            // Skip past 'r/'.
	            this.forwardN(2);

	            // Extract until the end of the regex -- / ends it, \/ does not.
	            var regexBody = '';
	            while (!this.is_finished()) {
	                if (this.current() === '/' && this.previous() !== '\\') {
	                    this.forward();
	                    break;
	                } else {
	                    regexBody += this.current();
	                    this.forward();
	                }
	            }

	            // Check for flags.
	            // The possible flags are according to https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
	            var POSSIBLE_FLAGS = ['g', 'i', 'm', 'y'];
	            var regexFlags = '';
	            while (!this.is_finished()) {
	                var isCurrentAFlag = POSSIBLE_FLAGS.indexOf(this.current()) !== -1;
	                if (isCurrentAFlag) {
	                    regexFlags += this.current();
	                    this.forward();
	                } else {
	                    break;
	                }
	            }

	            return token(TOKEN_REGEX, {body: regexBody, flags: regexFlags}, lineno, colno);
	        }
	        else if(delimChars.indexOf(cur) !== -1) {
	            // We've hit a delimiter (a special char like a bracket)
	            this.forward();
	            var complexOps = ['==', '===', '!=', '!==', '<=', '>=', '//', '**'];
	            var curComplex = cur + this.current();
	            var type;

	            if(lib.indexOf(complexOps, curComplex) !== -1) {
	                this.forward();
	                cur = curComplex;

	                // See if this is a strict equality/inequality comparator
	                if(lib.indexOf(complexOps, curComplex + this.current()) !== -1) {
	                    cur = curComplex + this.current();
	                    this.forward();
	                }
	            }

	            switch(cur) {
	            case '(': type = TOKEN_LEFT_PAREN; break;
	            case ')': type = TOKEN_RIGHT_PAREN; break;
	            case '[': type = TOKEN_LEFT_BRACKET; break;
	            case ']': type = TOKEN_RIGHT_BRACKET; break;
	            case '{': type = TOKEN_LEFT_CURLY; break;
	            case '}': type = TOKEN_RIGHT_CURLY; break;
	            case ',': type = TOKEN_COMMA; break;
	            case ':': type = TOKEN_COLON; break;
	            case '~': type = TOKEN_TILDE; break;
	            case '|': type = TOKEN_PIPE; break;
	            default: type = TOKEN_OPERATOR;
	            }

	            return token(type, cur, lineno, colno);
	        }
	        else {
	            // We are not at whitespace or a delimiter, so extract the
	            // text and parse it
	            tok = this._extractUntil(whitespaceChars + delimChars);

	            if(tok.match(/^[-+]?[0-9]+$/)) {
	                if(this.current() === '.') {
	                    this.forward();
	                    var dec = this._extract(intChars);
	                    return token(TOKEN_FLOAT, tok + '.' + dec, lineno, colno);
	                }
	                else {
	                    return token(TOKEN_INT, tok, lineno, colno);
	                }
	            }
	            else if(tok.match(/^(true|false)$/)) {
	                return token(TOKEN_BOOLEAN, tok, lineno, colno);
	            }
	            else if(tok === 'none') {
	                return token(TOKEN_NONE, tok, lineno, colno);
	            }
	            else if(tok) {
	                return token(TOKEN_SYMBOL, tok, lineno, colno);
	            }
	            else {
	                throw new Error('Unexpected value while parsing: ' + tok);
	            }
	        }
	    }
	    else {
	        // Parse out the template text, breaking on tag
	        // delimiters because we need to look for block/variable start
	        // tags (don't use the full delimChars for optimization)
	        var beginChars = (this.tags.BLOCK_START.charAt(0) +
	                          this.tags.VARIABLE_START.charAt(0) +
	                          this.tags.COMMENT_START.charAt(0) +
	                          this.tags.COMMENT_END.charAt(0));

	        if(this.is_finished()) {
	            return null;
	        }
	        else if((tok = this._extractString(this.tags.BLOCK_START + '-')) ||
	                (tok = this._extractString(this.tags.BLOCK_START))) {
	            this.in_code = true;
	            return token(TOKEN_BLOCK_START, tok, lineno, colno);
	        }
	        else if((tok = this._extractString(this.tags.VARIABLE_START + '-')) ||
	                (tok = this._extractString(this.tags.VARIABLE_START))) {
	            this.in_code = true;
	            return token(TOKEN_VARIABLE_START, tok, lineno, colno);
	        }
	        else {
	            tok = '';
	            var data;
	            var in_comment = false;

	            if(this._matches(this.tags.COMMENT_START)) {
	                in_comment = true;
	                tok = this._extractString(this.tags.COMMENT_START);
	            }

	            // Continually consume text, breaking on the tag delimiter
	            // characters and checking to see if it's a start tag.
	            //
	            // We could hit the end of the template in the middle of
	            // our looping, so check for the null return value from
	            // _extractUntil
	            while((data = this._extractUntil(beginChars)) !== null) {
	                tok += data;

	                if((this._matches(this.tags.BLOCK_START) ||
	                    this._matches(this.tags.VARIABLE_START) ||
	                    this._matches(this.tags.COMMENT_START)) &&
	                  !in_comment) {
	                    if(this.lstripBlocks &&
	                        this._matches(this.tags.BLOCK_START) &&
	                        this.colno > 0 &&
	                        this.colno <= tok.length) {
	                        var lastLine = tok.slice(-this.colno);
	                        if(/^\s+$/.test(lastLine)) {
	                            // Remove block leading whitespace from beginning of the string
	                            tok = tok.slice(0, -this.colno);
	                            if(!tok.length) {
	                                // All data removed, collapse to avoid unnecessary nodes
	                                // by returning next token (block start)
	                                return this.nextToken();
	                            }
	                        }
	                    }
	                    // If it is a start tag, stop looping
	                    break;
	                }
	                else if(this._matches(this.tags.COMMENT_END)) {
	                    if(!in_comment) {
	                        throw new Error('unexpected end of comment');
	                    }
	                    tok += this._extractString(this.tags.COMMENT_END);
	                    break;
	                }
	                else {
	                    // It does not match any tag, so add the character and
	                    // carry on
	                    tok += this.current();
	                    this.forward();
	                }
	            }

	            if(data === null && in_comment) {
	                throw new Error('expected end of comment, got end of file');
	            }

	            return token(in_comment ? TOKEN_COMMENT : TOKEN_DATA,
	                         tok,
	                         lineno,
	                         colno);
	        }
	    }

	    throw new Error('Could not parse text');
	};

	Tokenizer.prototype.parseString = function(delimiter) {
	    this.forward();

	    var str = '';

	    while(!this.is_finished() && this.current() !== delimiter) {
	        var cur = this.current();

	        if(cur === '\\') {
	            this.forward();
	            switch(this.current()) {
	            case 'n': str += '\n'; break;
	            case 't': str += '\t'; break;
	            case 'r': str += '\r'; break;
	            default:
	                str += this.current();
	            }
	            this.forward();
	        }
	        else {
	            str += cur;
	            this.forward();
	        }
	    }

	    this.forward();
	    return str;
	};

	Tokenizer.prototype._matches = function(str) {
	    if(this.index + str.length > this.len) {
	        return null;
	    }

	    var m = this.str.slice(this.index, this.index + str.length);
	    return m === str;
	};

	Tokenizer.prototype._extractString = function(str) {
	    if(this._matches(str)) {
	        this.index += str.length;
	        return str;
	    }
	    return null;
	};

	Tokenizer.prototype._extractUntil = function(charString) {
	    // Extract all non-matching chars, with the default matching set
	    // to everything
	    return this._extractMatching(true, charString || '');
	};

	Tokenizer.prototype._extract = function(charString) {
	    // Extract all matching chars (no default, so charString must be
	    // explicit)
	    return this._extractMatching(false, charString);
	};

	Tokenizer.prototype._extractMatching = function (breakOnMatch, charString) {
	    // Pull out characters until a breaking char is hit.
	    // If breakOnMatch is false, a non-matching char stops it.
	    // If breakOnMatch is true, a matching char stops it.

	    if(this.is_finished()) {
	        return null;
	    }

	    var first = charString.indexOf(this.current());

	    // Only proceed if the first character doesn't meet our condition
	    if((breakOnMatch && first === -1) ||
	       (!breakOnMatch && first !== -1)) {
	        var t = this.current();
	        this.forward();

	        // And pull out all the chars one at a time until we hit a
	        // breaking char
	        var idx = charString.indexOf(this.current());

	        while(((breakOnMatch && idx === -1) ||
	               (!breakOnMatch && idx !== -1)) && !this.is_finished()) {
	            t += this.current();
	            this.forward();

	            idx = charString.indexOf(this.current());
	        }

	        return t;
	    }

	    return '';
	};

	Tokenizer.prototype._extractRegex = function(regex) {
	    var matches = this.currentStr().match(regex);
	    if(!matches) {
	        return null;
	    }

	    // Move forward whatever was matched
	    this.forwardN(matches[0].length);

	    return matches;
	};

	Tokenizer.prototype.is_finished = function() {
	    return this.index >= this.len;
	};

	Tokenizer.prototype.forwardN = function(n) {
	    for(var i=0; i<n; i++) {
	        this.forward();
	    }
	};

	Tokenizer.prototype.forward = function() {
	    this.index++;

	    if(this.previous() === '\n') {
	        this.lineno++;
	        this.colno = 0;
	    }
	    else {
	        this.colno++;
	    }
	};

	Tokenizer.prototype.backN = function(n) {
	    for(var i=0; i<n; i++) {
	        this.back();
	    }
	};

	Tokenizer.prototype.back = function() {
	    this.index--;

	    if(this.current() === '\n') {
	        this.lineno--;

	        var idx = this.src.lastIndexOf('\n', this.index-1);
	        if(idx === -1) {
	            this.colno = this.index;
	        }
	        else {
	            this.colno = this.index - idx;
	        }
	    }
	    else {
	        this.colno--;
	    }
	};

	// current returns current character
	Tokenizer.prototype.current = function() {
	    if(!this.is_finished()) {
	        return this.str.charAt(this.index);
	    }
	    return '';
	};

	// currentStr returns what's left of the unparsed string
	Tokenizer.prototype.currentStr = function() {
	    if(!this.is_finished()) {
	        return this.str.substr(this.index);
	    }
	    return '';
	};

	Tokenizer.prototype.previous = function() {
	    return this.str.charAt(this.index-1);
	};

	module.exports = {
	    lex: function(src, opts) {
	        return new Tokenizer(src, opts);
	    },

	    TOKEN_STRING: TOKEN_STRING,
	    TOKEN_WHITESPACE: TOKEN_WHITESPACE,
	    TOKEN_DATA: TOKEN_DATA,
	    TOKEN_BLOCK_START: TOKEN_BLOCK_START,
	    TOKEN_BLOCK_END: TOKEN_BLOCK_END,
	    TOKEN_VARIABLE_START: TOKEN_VARIABLE_START,
	    TOKEN_VARIABLE_END: TOKEN_VARIABLE_END,
	    TOKEN_COMMENT: TOKEN_COMMENT,
	    TOKEN_LEFT_PAREN: TOKEN_LEFT_PAREN,
	    TOKEN_RIGHT_PAREN: TOKEN_RIGHT_PAREN,
	    TOKEN_LEFT_BRACKET: TOKEN_LEFT_BRACKET,
	    TOKEN_RIGHT_BRACKET: TOKEN_RIGHT_BRACKET,
	    TOKEN_LEFT_CURLY: TOKEN_LEFT_CURLY,
	    TOKEN_RIGHT_CURLY: TOKEN_RIGHT_CURLY,
	    TOKEN_OPERATOR: TOKEN_OPERATOR,
	    TOKEN_COMMA: TOKEN_COMMA,
	    TOKEN_COLON: TOKEN_COLON,
	    TOKEN_TILDE: TOKEN_TILDE,
	    TOKEN_PIPE: TOKEN_PIPE,
	    TOKEN_INT: TOKEN_INT,
	    TOKEN_FLOAT: TOKEN_FLOAT,
	    TOKEN_BOOLEAN: TOKEN_BOOLEAN,
	    TOKEN_NONE: TOKEN_NONE,
	    TOKEN_SYMBOL: TOKEN_SYMBOL,
	    TOKEN_SPECIAL: TOKEN_SPECIAL,
	    TOKEN_REGEX: TOKEN_REGEX
	};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var lib = __webpack_require__(1);
	// jshint -W079
	var Object = __webpack_require__(6);

	function traverseAndCheck(obj, type, results) {
	    if(obj instanceof type) {
	        results.push(obj);
	    }

	    if(obj instanceof Node) {
	        obj.findAll(type, results);
	    }
	}

	var Node = Object.extend('Node', {
	    init: function(lineno, colno) {
	        this.lineno = lineno;
	        this.colno = colno;

	        var fields = this.fields;
	        for(var i = 0, l = fields.length; i < l; i++) {
	            var field = fields[i];

	            // The first two args are line/col numbers, so offset by 2
	            var val = arguments[i + 2];

	            // Fields should never be undefined, but null. It makes
	            // testing easier to normalize values.
	            if(val === undefined) {
	                val = null;
	            }

	            this[field] = val;
	        }
	    },

	    findAll: function(type, results) {
	        results = results || [];

	        var i, l;
	        if(this instanceof NodeList) {
	            var children = this.children;

	            for(i = 0, l = children.length; i < l; i++) {
	                traverseAndCheck(children[i], type, results);
	            }
	        }
	        else {
	            var fields = this.fields;

	            for(i = 0, l = fields.length; i < l; i++) {
	                traverseAndCheck(this[fields[i]], type, results);
	            }
	        }

	        return results;
	    },

	    iterFields: function(func) {
	        lib.each(this.fields, function(field) {
	            func(this[field], field);
	        }, this);
	    }
	});

	// Abstract nodes
	var Value = Node.extend('Value', { fields: ['value'] });

	// Concrete nodes
	var NodeList = Node.extend('NodeList', {
	    fields: ['children'],

	    init: function(lineno, colno, nodes) {
	        this.parent(lineno, colno, nodes || []);
	    },

	    addChild: function(node) {
	        this.children.push(node);
	    }
	});

	var Root = NodeList.extend('Root');
	var Literal = Value.extend('Literal');
	var Symbol = Value.extend('Symbol');
	var Group = NodeList.extend('Group');
	var Array = NodeList.extend('Array');
	var Pair = Node.extend('Pair', { fields: ['key', 'value'] });
	var Dict = NodeList.extend('Dict');
	var LookupVal = Node.extend('LookupVal', { fields: ['target', 'val'] });
	var If = Node.extend('If', { fields: ['cond', 'body', 'else_'] });
	var IfAsync = If.extend('IfAsync');
	var InlineIf = Node.extend('InlineIf', { fields: ['cond', 'body', 'else_'] });
	var For = Node.extend('For', { fields: ['arr', 'name', 'body', 'else_'] });
	var AsyncEach = For.extend('AsyncEach');
	var AsyncAll = For.extend('AsyncAll');
	var Macro = Node.extend('Macro', { fields: ['name', 'args', 'body'] });
	var Caller = Macro.extend('Caller');
	var Import = Node.extend('Import', { fields: ['template', 'target', 'withContext'] });
	var FromImport = Node.extend('FromImport', {
	    fields: ['template', 'names', 'withContext'],

	    init: function(lineno, colno, template, names, withContext) {
	        this.parent(lineno, colno,
	                    template,
	                    names || new NodeList(), withContext);
	    }
	});
	var FunCall = Node.extend('FunCall', { fields: ['name', 'args'] });
	var Filter = FunCall.extend('Filter');
	var FilterAsync = Filter.extend('FilterAsync', {
	    fields: ['name', 'args', 'symbol']
	});
	var KeywordArgs = Dict.extend('KeywordArgs');
	var Block = Node.extend('Block', { fields: ['name', 'body'] });
	var Super = Node.extend('Super', { fields: ['blockName', 'symbol'] });
	var TemplateRef = Node.extend('TemplateRef', { fields: ['template'] });
	var Extends = TemplateRef.extend('Extends');
	var Include = Node.extend('Include', { fields: ['template', 'ignoreMissing'] });
	var Set = Node.extend('Set', { fields: ['targets', 'value'] });
	var Output = NodeList.extend('Output');
	var Capture = Node.extend('Capture', { fields: ['body'] });
	var TemplateData = Literal.extend('TemplateData');
	var UnaryOp = Node.extend('UnaryOp', { fields: ['target'] });
	var BinOp = Node.extend('BinOp', { fields: ['left', 'right'] });
	var In = BinOp.extend('In');
	var Or = BinOp.extend('Or');
	var And = BinOp.extend('And');
	var Not = UnaryOp.extend('Not');
	var Add = BinOp.extend('Add');
	var Concat = BinOp.extend('Concat');
	var Sub = BinOp.extend('Sub');
	var Mul = BinOp.extend('Mul');
	var Div = BinOp.extend('Div');
	var FloorDiv = BinOp.extend('FloorDiv');
	var Mod = BinOp.extend('Mod');
	var Pow = BinOp.extend('Pow');
	var Neg = UnaryOp.extend('Neg');
	var Pos = UnaryOp.extend('Pos');
	var Compare = Node.extend('Compare', { fields: ['expr', 'ops'] });
	var CompareOperand = Node.extend('CompareOperand', {
	    fields: ['expr', 'type']
	});

	var CallExtension = Node.extend('CallExtension', {
	    fields: ['extName', 'prop', 'args', 'contentArgs'],

	    init: function(ext, prop, args, contentArgs) {
	        this.extName = ext._name || ext;
	        this.prop = prop;
	        this.args = args || new NodeList();
	        this.contentArgs = contentArgs || [];
	        this.autoescape = ext.autoescape;
	    }
	});

	var CallExtensionAsync = CallExtension.extend('CallExtensionAsync');

	// Print the AST in a nicely formatted tree format for debuggin
	function printNodes(node, indent) {
	    indent = indent || 0;

	    // This is hacky, but this is just a debugging function anyway
	    function print(str, indent, inline) {
	        var lines = str.split('\n');

	        for(var i=0; i<lines.length; i++) {
	            if(lines[i]) {
	                if((inline && i > 0) || !inline) {
	                    for(var j=0; j<indent; j++) {
	                        process.stdout.write(' ');
	                    }
	                }
	            }

	            if(i === lines.length-1) {
	                process.stdout.write(lines[i]);
	            }
	            else {
	                process.stdout.write(lines[i] + '\n');
	            }
	        }
	    }

	    print(node.typename + ': ', indent);

	    if(node instanceof NodeList) {
	        print('\n');
	        lib.each(node.children, function(n) {
	            printNodes(n, indent + 2);
	        });
	    }
	    else if(node instanceof CallExtension) {
	        print(node.extName + '.' + node.prop);
	        print('\n');

	        if(node.args) {
	            printNodes(node.args, indent + 2);
	        }

	        if(node.contentArgs) {
	            lib.each(node.contentArgs, function(n) {
	                printNodes(n, indent + 2);
	            });
	        }
	    }
	    else {
	        var nodes = null;
	        var props = null;

	        node.iterFields(function(val, field) {
	            if(val instanceof Node) {
	                nodes = nodes || {};
	                nodes[field] = val;
	            }
	            else {
	                props = props || {};
	                props[field] = val;
	            }
	        });

	        if(props) {
	            print(JSON.stringify(props, null, 2) + '\n', null, true);
	        }
	        else {
	            print('\n');
	        }

	        if(nodes) {
	            for(var k in nodes) {
	                printNodes(nodes[k], indent + 2);
	            }
	        }

	    }
	}

	// var t = new NodeList(0, 0,
	//                      [new Value(0, 0, 3),
	//                       new Value(0, 0, 10),
	//                       new Pair(0, 0,
	//                                new Value(0, 0, 'key'),
	//                                new Value(0, 0, 'value'))]);
	// printNodes(t);

	module.exports = {
	    Node: Node,
	    Root: Root,
	    NodeList: NodeList,
	    Value: Value,
	    Literal: Literal,
	    Symbol: Symbol,
	    Group: Group,
	    Array: Array,
	    Pair: Pair,
	    Dict: Dict,
	    Output: Output,
	    Capture: Capture,
	    TemplateData: TemplateData,
	    If: If,
	    IfAsync: IfAsync,
	    InlineIf: InlineIf,
	    For: For,
	    AsyncEach: AsyncEach,
	    AsyncAll: AsyncAll,
	    Macro: Macro,
	    Caller: Caller,
	    Import: Import,
	    FromImport: FromImport,
	    FunCall: FunCall,
	    Filter: Filter,
	    FilterAsync: FilterAsync,
	    KeywordArgs: KeywordArgs,
	    Block: Block,
	    Super: Super,
	    Extends: Extends,
	    Include: Include,
	    Set: Set,
	    LookupVal: LookupVal,
	    BinOp: BinOp,
	    In: In,
	    Or: Or,
	    And: And,
	    Not: Not,
	    Add: Add,
	    Concat: Concat,
	    Sub: Sub,
	    Mul: Mul,
	    Div: Div,
	    FloorDiv: FloorDiv,
	    Mod: Mod,
	    Pow: Pow,
	    Neg: Neg,
	    Pos: Pos,
	    Compare: Compare,
	    CompareOperand: CompareOperand,

	    CallExtension: CallExtension,
	    CallExtensionAsync: CallExtensionAsync,

	    printNodes: printNodes
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var nodes = __webpack_require__(10);
	var lib = __webpack_require__(1);

	var sym = 0;
	function gensym() {
	    return 'hole_' + sym++;
	}

	// copy-on-write version of map
	function mapCOW(arr, func) {
	    var res = null;

	    for(var i=0; i<arr.length; i++) {
	        var item = func(arr[i]);

	        if(item !== arr[i]) {
	            if(!res) {
	                res = arr.slice();
	            }

	            res[i] = item;
	        }
	    }

	    return res || arr;
	}

	function walk(ast, func, depthFirst) {
	    if(!(ast instanceof nodes.Node)) {
	        return ast;
	    }

	    if(!depthFirst) {
	        var astT = func(ast);

	        if(astT && astT !== ast) {
	            return astT;
	        }
	    }

	    if(ast instanceof nodes.NodeList) {
	        var children = mapCOW(ast.children, function(node) {
	            return walk(node, func, depthFirst);
	        });

	        if(children !== ast.children) {
	            ast = new nodes[ast.typename](ast.lineno, ast.colno, children);
	        }
	    }
	    else if(ast instanceof nodes.CallExtension) {
	        var args = walk(ast.args, func, depthFirst);

	        var contentArgs = mapCOW(ast.contentArgs, function(node) {
	            return walk(node, func, depthFirst);
	        });

	        if(args !== ast.args || contentArgs !== ast.contentArgs) {
	            ast = new nodes[ast.typename](ast.extName,
	                                          ast.prop,
	                                          args,
	                                          contentArgs);
	        }
	    }
	    else {
	        var props = ast.fields.map(function(field) {
	            return ast[field];
	        });

	        var propsT = mapCOW(props, function(prop) {
	            return walk(prop, func, depthFirst);
	        });

	        if(propsT !== props) {
	            ast = new nodes[ast.typename](ast.lineno, ast.colno);

	            propsT.forEach(function(prop, i) {
	                ast[ast.fields[i]] = prop;
	            });
	        }
	    }

	    return depthFirst ? (func(ast) || ast) : ast;
	}

	function depthWalk(ast, func) {
	    return walk(ast, func, true);
	}

	function _liftFilters(node, asyncFilters, prop) {
	    var children = [];

	    var walked = depthWalk(prop ? node[prop] : node, function(node) {
	        if(node instanceof nodes.Block) {
	            return node;
	        }
	        else if((node instanceof nodes.Filter &&
	                 lib.indexOf(asyncFilters, node.name.value) !== -1) ||
	                node instanceof nodes.CallExtensionAsync) {
	            var symbol = new nodes.Symbol(node.lineno,
	                                          node.colno,
	                                          gensym());

	            children.push(new nodes.FilterAsync(node.lineno,
	                                                node.colno,
	                                                node.name,
	                                                node.args,
	                                                symbol));
	            return symbol;
	        }
	    });

	    if(prop) {
	        node[prop] = walked;
	    }
	    else {
	        node = walked;
	    }

	    if(children.length) {
	        children.push(node);

	        return new nodes.NodeList(
	            node.lineno,
	            node.colno,
	            children
	        );
	    }
	    else {
	        return node;
	    }
	}

	function liftFilters(ast, asyncFilters) {
	    return depthWalk(ast, function(node) {
	        if(node instanceof nodes.Output) {
	            return _liftFilters(node, asyncFilters);
	        }
	        else if(node instanceof nodes.Set) {
	            return _liftFilters(node, asyncFilters, 'value');
	        }
	        else if(node instanceof nodes.For) {
	            return _liftFilters(node, asyncFilters, 'arr');
	        }
	        else if(node instanceof nodes.If) {
	            return _liftFilters(node, asyncFilters, 'cond');
	        }
	        else if(node instanceof nodes.CallExtension) {
	            return _liftFilters(node, asyncFilters, 'args');
	        }
	    });
	}

	function liftSuper(ast) {
	    return walk(ast, function(blockNode) {
	        if(!(blockNode instanceof nodes.Block)) {
	            return;
	        }

	        var hasSuper = false;
	        var symbol = gensym();

	        blockNode.body = walk(blockNode.body, function(node) {
	            if(node instanceof nodes.FunCall &&
	               node.name.value === 'super') {
	                hasSuper = true;
	                return new nodes.Symbol(node.lineno, node.colno, symbol);
	            }
	        });

	        if(hasSuper) {
	            blockNode.body.children.unshift(new nodes.Super(
	                0, 0, blockNode.name, new nodes.Symbol(0, 0, symbol)
	            ));
	        }
	    });
	}

	function convertStatements(ast) {
	    return depthWalk(ast, function(node) {
	        if(!(node instanceof nodes.If) &&
	           !(node instanceof nodes.For)) {
	            return;
	        }

	        var async = false;
	        walk(node, function(node) {
	            if(node instanceof nodes.FilterAsync ||
	               node instanceof nodes.IfAsync ||
	               node instanceof nodes.AsyncEach ||
	               node instanceof nodes.AsyncAll ||
	               node instanceof nodes.CallExtensionAsync) {
	                async = true;
	                // Stop iterating by returning the node
	                return node;
	            }
	        });

	        if(async) {
		        if(node instanceof nodes.If) {
	                return new nodes.IfAsync(
	                    node.lineno,
	                    node.colno,
	                    node.cond,
	                    node.body,
	                    node.else_
	                );
	            }
	            else if(node instanceof nodes.For) {
	                return new nodes.AsyncEach(
	                    node.lineno,
	                    node.colno,
	                    node.arr,
	                    node.name,
	                    node.body,
	                    node.else_
	                );
	            }
	        }
	    });
	}

	function cps(ast, asyncFilters) {
	    return convertStatements(liftSuper(liftFilters(ast, asyncFilters)));
	}

	function transform(ast, asyncFilters) {
	    return cps(ast, asyncFilters || []);
	}

	// var parser = require('./parser');
	// var src = 'hello {% foo %}{% endfoo %} end';
	// var ast = transform(parser.parse(src, [new FooExtension()]), ['bar']);
	// nodes.printNodes(ast);

	module.exports = {
	    transform: transform
	};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var lib = __webpack_require__(1);
	var Obj = __webpack_require__(6);

	// Frames keep track of scoping both at compile-time and run-time so
	// we know how to access variables. Block tags can introduce special
	// variables, for example.
	var Frame = Obj.extend({
	    init: function(parent, isolateWrites) {
	        this.variables = {};
	        this.parent = parent;
	        this.topLevel = false;
	        // if this is true, writes (set) should never propagate upwards past
	        // this frame to its parent (though reads may).
	        this.isolateWrites = isolateWrites;
	    },

	    set: function(name, val, resolveUp) {
	        // Allow variables with dots by automatically creating the
	        // nested structure
	        var parts = name.split('.');
	        var obj = this.variables;
	        var frame = this;

	        if(resolveUp) {
	            if((frame = this.resolve(parts[0], true))) {
	                frame.set(name, val);
	                return;
	            }
	        }

	        for(var i=0; i<parts.length - 1; i++) {
	            var id = parts[i];

	            if(!obj[id]) {
	                obj[id] = {};
	            }
	            obj = obj[id];
	        }

	        obj[parts[parts.length - 1]] = val;
	    },

	    get: function(name) {
	        var val = this.variables[name];
	        if(val !== undefined) {
	            return val;
	        }
	        return null;
	    },

	    lookup: function(name) {
	        var p = this.parent;
	        var val = this.variables[name];
	        if(val !== undefined) {
	            return val;
	        }
	        return p && p.lookup(name);
	    },

	    resolve: function(name, forWrite) {
	        var p = (forWrite && this.isolateWrites) ? undefined : this.parent;
	        var val = this.variables[name];
	        if(val !== undefined) {
	            return this;
	        }
	        return p && p.resolve(name);
	    },

	    push: function(isolateWrites) {
	        return new Frame(this, isolateWrites);
	    },

	    pop: function() {
	        return this.parent;
	    }
	});

	function makeMacro(argNames, kwargNames, func) {
	    return function() {
	        var argCount = numArgs(arguments);
	        var args;
	        var kwargs = getKeywordArgs(arguments);
	        var i;

	        if(argCount > argNames.length) {
	            args = Array.prototype.slice.call(arguments, 0, argNames.length);

	            // Positional arguments that should be passed in as
	            // keyword arguments (essentially default values)
	            var vals = Array.prototype.slice.call(arguments, args.length, argCount);
	            for(i = 0; i < vals.length; i++) {
	                if(i < kwargNames.length) {
	                    kwargs[kwargNames[i]] = vals[i];
	                }
	            }

	            args.push(kwargs);
	        }
	        else if(argCount < argNames.length) {
	            args = Array.prototype.slice.call(arguments, 0, argCount);

	            for(i = argCount; i < argNames.length; i++) {
	                var arg = argNames[i];

	                // Keyword arguments that should be passed as
	                // positional arguments, i.e. the caller explicitly
	                // used the name of a positional arg
	                args.push(kwargs[arg]);
	                delete kwargs[arg];
	            }

	            args.push(kwargs);
	        }
	        else {
	            args = arguments;
	        }

	        return func.apply(this, args);
	    };
	}

	function makeKeywordArgs(obj) {
	    obj.__keywords = true;
	    return obj;
	}

	function getKeywordArgs(args) {
	    var len = args.length;
	    if(len) {
	        var lastArg = args[len - 1];
	        if(lastArg && lastArg.hasOwnProperty('__keywords')) {
	            return lastArg;
	        }
	    }
	    return {};
	}

	function numArgs(args) {
	    var len = args.length;
	    if(len === 0) {
	        return 0;
	    }

	    var lastArg = args[len - 1];
	    if(lastArg && lastArg.hasOwnProperty('__keywords')) {
	        return len - 1;
	    }
	    else {
	        return len;
	    }
	}

	// A SafeString object indicates that the string should not be
	// autoescaped. This happens magically because autoescaping only
	// occurs on primitive string objects.
	function SafeString(val) {
	    if(typeof val !== 'string') {
	        return val;
	    }

	    this.val = val;
	    this.length = val.length;
	}

	SafeString.prototype = Object.create(String.prototype, {
	    length: { writable: true, configurable: true, value: 0 }
	});
	SafeString.prototype.valueOf = function() {
	    return this.val;
	};
	SafeString.prototype.toString = function() {
	    return this.val;
	};

	function copySafeness(dest, target) {
	    if(dest instanceof SafeString) {
	        return new SafeString(target);
	    }
	    return target.toString();
	}

	function markSafe(val) {
	    var type = typeof val;

	    if(type === 'string') {
	        return new SafeString(val);
	    }
	    else if(type !== 'function') {
	        return val;
	    }
	    else {
	        return function() {
	            var ret = val.apply(this, arguments);

	            if(typeof ret === 'string') {
	                return new SafeString(ret);
	            }

	            return ret;
	        };
	    }
	}

	function suppressValue(val, autoescape) {
	    val = (val !== undefined && val !== null) ? val : '';

	    if(autoescape && !(val instanceof SafeString)) {
	        val = lib.escape(val.toString());
	    }

	    return val;
	}

	function ensureDefined(val, lineno, colno) {
	    if(val === null || val === undefined) {
	        throw new lib.TemplateError(
	            'attempted to output null or undefined value',
	            lineno + 1,
	            colno + 1
	        );
	    }
	    return val;
	}

	function memberLookup(obj, val) {
	    obj = obj || {};

	    if(typeof obj[val] === 'function') {
	        return function() {
	            return obj[val].apply(obj, arguments);
	        };
	    }

	    return obj[val];
	}

	function callWrap(obj, name, context, args) {
	    if(!obj) {
	        throw new Error('Unable to call `' + name + '`, which is undefined or falsey');
	    }
	    else if(typeof obj !== 'function') {
	        throw new Error('Unable to call `' + name + '`, which is not a function');
	    }

	    // jshint validthis: true
	    return obj.apply(context, args);
	}

	function contextOrFrameLookup(context, frame, name) {
	    var val = frame.lookup(name);
	    return (val !== undefined) ?
	        val :
	        context.lookup(name);
	}

	function handleError(error, lineno, colno) {
	    if(error.lineno) {
	        return error;
	    }
	    else {
	        return new lib.TemplateError(error, lineno, colno);
	    }
	}

	function asyncEach(arr, dimen, iter, cb) {
	    if(lib.isArray(arr)) {
	        var len = arr.length;

	        lib.asyncIter(arr, function(item, i, next) {
	            switch(dimen) {
	            case 1: iter(item, i, len, next); break;
	            case 2: iter(item[0], item[1], i, len, next); break;
	            case 3: iter(item[0], item[1], item[2], i, len, next); break;
	            default:
	                item.push(i, next);
	                iter.apply(this, item);
	            }
	        }, cb);
	    }
	    else {
	        lib.asyncFor(arr, function(key, val, i, len, next) {
	            iter(key, val, i, len, next);
	        }, cb);
	    }
	}

	function asyncAll(arr, dimen, func, cb) {
	    var finished = 0;
	    var len, i;
	    var outputArr;

	    function done(i, output) {
	        finished++;
	        outputArr[i] = output;

	        if(finished === len) {
	            cb(null, outputArr.join(''));
	        }
	    }

	    if(lib.isArray(arr)) {
	        len = arr.length;
	        outputArr = new Array(len);

	        if(len === 0) {
	            cb(null, '');
	        }
	        else {
	            for(i = 0; i < arr.length; i++) {
	                var item = arr[i];

	                switch(dimen) {
	                case 1: func(item, i, len, done); break;
	                case 2: func(item[0], item[1], i, len, done); break;
	                case 3: func(item[0], item[1], item[2], i, len, done); break;
	                default:
	                    item.push(i, done);
	                    // jshint validthis: true
	                    func.apply(this, item);
	                }
	            }
	        }
	    }
	    else {
	        var keys = lib.keys(arr);
	        len = keys.length;
	        outputArr = new Array(len);

	        if(len === 0) {
	            cb(null, '');
	        }
	        else {
	            for(i = 0; i < keys.length; i++) {
	                var k = keys[i];
	                func(k, arr[k], i, len, done);
	            }
	        }
	    }
	}

	module.exports = {
	    Frame: Frame,
	    makeMacro: makeMacro,
	    makeKeywordArgs: makeKeywordArgs,
	    numArgs: numArgs,
	    suppressValue: suppressValue,
	    ensureDefined: ensureDefined,
	    memberLookup: memberLookup,
	    contextOrFrameLookup: contextOrFrameLookup,
	    callWrap: callWrap,
	    handleError: handleError,
	    isArray: lib.isArray,
	    keys: lib.keys,
	    SafeString: SafeString,
	    copySafeness: copySafeness,
	    markSafe: markSafe,
	    asyncEach: asyncEach,
	    asyncAll: asyncAll,
	    inOperator: lib.inOperator
	};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var lib = __webpack_require__(1);
	var r = __webpack_require__(13);

	function normalize(value, defaultValue) {
	    if(value === null || value === undefined || value === false) {
	        return defaultValue;
	    }
	    return value;
	}

	var filters = {
	    abs: Math.abs,

	    batch: function(arr, linecount, fill_with) {
	        var i;
	        var res = [];
	        var tmp = [];

	        for(i = 0; i < arr.length; i++) {
	            if(i % linecount === 0 && tmp.length) {
	                res.push(tmp);
	                tmp = [];
	            }

	            tmp.push(arr[i]);
	        }

	        if(tmp.length) {
	            if(fill_with) {
	                for(i = tmp.length; i < linecount; i++) {
	                    tmp.push(fill_with);
	                }
	            }

	            res.push(tmp);
	        }

	        return res;
	    },

	    capitalize: function(str) {
	        str = normalize(str, '');
	        var ret = str.toLowerCase();
	        return r.copySafeness(str, ret.charAt(0).toUpperCase() + ret.slice(1));
	    },

	    center: function(str, width) {
	        str = normalize(str, '');
	        width = width || 80;

	        if(str.length >= width) {
	            return str;
	        }

	        var spaces = width - str.length;
	        var pre = lib.repeat(' ', spaces/2 - spaces % 2);
	        var post = lib.repeat(' ', spaces/2);
	        return r.copySafeness(str, pre + str + post);
	    },

	    'default': function(val, def, bool) {
	        if(bool) {
	            return val ? val : def;
	        }
	        else {
	            return (val !== undefined) ? val : def;
	        }
	    },

	    dictsort: function(val, case_sensitive, by) {
	        if (!lib.isObject(val)) {
	            throw new lib.TemplateError('dictsort filter: val must be an object');
	        }

	        var array = [];
	        for (var k in val) {
	            // deliberately include properties from the object's prototype
	            array.push([k,val[k]]);
	        }

	        var si;
	        if (by === undefined || by === 'key') {
	            si = 0;
	        } else if (by === 'value') {
	            si = 1;
	        } else {
	            throw new lib.TemplateError(
	                'dictsort filter: You can only sort by either key or value');
	        }

	        array.sort(function(t1, t2) {
	            var a = t1[si];
	            var b = t2[si];

	            if (!case_sensitive) {
	                if (lib.isString(a)) {
	                    a = a.toUpperCase();
	                }
	                if (lib.isString(b)) {
	                    b = b.toUpperCase();
	                }
	            }

	            return a > b ? 1 : (a === b ? 0 : -1);
	        });

	        return array;
	    },

	    dump: function(obj, spaces) {
	        return JSON.stringify(obj, null, spaces);
	    },

	    escape: function(str) {
	        if(str instanceof r.SafeString) {
	            return str;
	        }
	        str = (str === null || str === undefined) ? '' : str;
	        return r.markSafe(lib.escape(str.toString()));
	    },

	    safe: function(str) {
	        if (str instanceof r.SafeString) {
	            return str;
	        }
	        str = (str === null || str === undefined) ? '' : str;
	        return r.markSafe(str.toString());
	    },

	    first: function(arr) {
	        return arr[0];
	    },

	    groupby: function(arr, attr) {
	        return lib.groupBy(arr, attr);
	    },

	    indent: function(str, width, indentfirst) {
	        str = normalize(str, '');

	        if (str === '') return '';

	        width = width || 4;
	        var res = '';
	        var lines = str.split('\n');
	        var sp = lib.repeat(' ', width);

	        for(var i=0; i<lines.length; i++) {
	            if(i === 0 && !indentfirst) {
	                res += lines[i] + '\n';
	            }
	            else {
	                res += sp + lines[i] + '\n';
	            }
	        }

	        return r.copySafeness(str, res);
	    },

	    join: function(arr, del, attr) {
	        del = del || '';

	        if(attr) {
	            arr = lib.map(arr, function(v) {
	                return v[attr];
	            });
	        }

	        return arr.join(del);
	    },

	    last: function(arr) {
	        return arr[arr.length-1];
	    },

	    length: function(val) {
	        var value = normalize(val, '');

	        if(value !== undefined) {
	            if(
	                (typeof Map === 'function' && value instanceof Map) ||
	                (typeof Set === 'function' && value instanceof Set)
	            ) {
	                // ECMAScript 2015 Maps and Sets
	                return value.size;
	            }
	            if(lib.isObject(value) && !(value instanceof r.SafeString)) {
	                // Objects (besides SafeStrings), non-primative Arrays
	                return Object.keys(value).length;
	            }
	            return value.length;
	        }
	        return 0;
	    },

	    list: function(val) {
	        if(lib.isString(val)) {
	            return val.split('');
	        }
	        else if(lib.isObject(val)) {
	            var keys = [];

	            if(Object.keys) {
	                keys = Object.keys(val);
	            }
	            else {
	                for(var k in val) {
	                    keys.push(k);
	                }
	            }

	            return lib.map(keys, function(k) {
	                return { key: k,
	                         value: val[k] };
	            });
	        }
	        else if(lib.isArray(val)) {
	          return val;
	        }
	        else {
	            throw new lib.TemplateError('list filter: type not iterable');
	        }
	    },

	    lower: function(str) {
	        str = normalize(str, '');
	        return str.toLowerCase();
	    },

	    nl2br: function(str) {
	        if (str === null || str === undefined) {
	            return '';
	        }
	        return r.copySafeness(str, str.replace(/\r\n|\n/g, '<br />\n'));
	    },

	    random: function(arr) {
	        return arr[Math.floor(Math.random() * arr.length)];
	    },

	    rejectattr: function(arr, attr) {
	      return arr.filter(function (item) {
	        return !item[attr];
	      });
	    },

	    selectattr: function(arr, attr) {
	      return arr.filter(function (item) {
	        return !!item[attr];
	      });
	    },

	    replace: function(str, old, new_, maxCount) {
	        var originalStr = str;

	        if (old instanceof RegExp) {
	            return str.replace(old, new_);
	        }

	        if(typeof maxCount === 'undefined'){
	            maxCount = -1;
	        }

	        var res = '';  // Output

	        // Cast Numbers in the search term to string
	        if(typeof old === 'number'){
	            old = old + '';
	        }
	        else if(typeof old !== 'string') {
	            // If it is something other than number or string,
	            // return the original string
	            return str;
	        }

	        // Cast numbers in the replacement to string
	        if(typeof str === 'number'){
	            str = str + '';
	        }

	        // If by now, we don't have a string, throw it back
	        if(typeof str !== 'string' && !(str instanceof r.SafeString)){
	            return str;
	        }

	        // ShortCircuits
	        if(old === ''){
	            // Mimic the python behaviour: empty string is replaced
	            // by replacement e.g. "abc"|replace("", ".") -> .a.b.c.
	            res = new_ + str.split('').join(new_) + new_;
	            return r.copySafeness(str, res);
	        }

	        var nextIndex = str.indexOf(old);
	        // if # of replacements to perform is 0, or the string to does
	        // not contain the old value, return the string
	        if(maxCount === 0 || nextIndex === -1){
	            return str;
	        }

	        var pos = 0;
	        var count = 0; // # of replacements made

	        while(nextIndex  > -1 && (maxCount === -1 || count < maxCount)){
	            // Grab the next chunk of src string and add it with the
	            // replacement, to the result
	            res += str.substring(pos, nextIndex) + new_;
	            // Increment our pointer in the src string
	            pos = nextIndex + old.length;
	            count++;
	            // See if there are any more replacements to be made
	            nextIndex = str.indexOf(old, pos);
	        }

	        // We've either reached the end, or done the max # of
	        // replacements, tack on any remaining string
	        if(pos < str.length) {
	            res += str.substring(pos);
	        }

	        return r.copySafeness(originalStr, res);
	    },

	    reverse: function(val) {
	        var arr;
	        if(lib.isString(val)) {
	            arr = filters.list(val);
	        }
	        else {
	            // Copy it
	            arr = lib.map(val, function(v) { return v; });
	        }

	        arr.reverse();

	        if(lib.isString(val)) {
	            return r.copySafeness(val, arr.join(''));
	        }
	        return arr;
	    },

	    round: function(val, precision, method) {
	        precision = precision || 0;
	        var factor = Math.pow(10, precision);
	        var rounder;

	        if(method === 'ceil') {
	            rounder = Math.ceil;
	        }
	        else if(method === 'floor') {
	            rounder = Math.floor;
	        }
	        else {
	            rounder = Math.round;
	        }

	        return rounder(val * factor) / factor;
	    },

	    slice: function(arr, slices, fillWith) {
	        var sliceLength = Math.floor(arr.length / slices);
	        var extra = arr.length % slices;
	        var offset = 0;
	        var res = [];

	        for(var i=0; i<slices; i++) {
	            var start = offset + i * sliceLength;
	            if(i < extra) {
	                offset++;
	            }
	            var end = offset + (i + 1) * sliceLength;

	            var slice = arr.slice(start, end);
	            if(fillWith && i >= extra) {
	                slice.push(fillWith);
	            }
	            res.push(slice);
	        }

	        return res;
	    },

	    sum: function(arr, attr, start) {
	        var sum = 0;

	        if(typeof start === 'number'){
	            sum += start;
	        }

	        if(attr) {
	            arr = lib.map(arr, function(v) {
	                return v[attr];
	            });
	        }

	        for(var i = 0; i < arr.length; i++) {
	            sum += arr[i];
	        }

	        return sum;
	    },

	    sort: r.makeMacro(['value', 'reverse', 'case_sensitive', 'attribute'], [], function(arr, reverse, caseSens, attr) {
	         // Copy it
	        arr = lib.map(arr, function(v) { return v; });

	        arr.sort(function(a, b) {
	            var x, y;

	            if(attr) {
	                x = a[attr];
	                y = b[attr];
	            }
	            else {
	                x = a;
	                y = b;
	            }

	            if(!caseSens && lib.isString(x) && lib.isString(y)) {
	                x = x.toLowerCase();
	                y = y.toLowerCase();
	            }

	            if(x < y) {
	                return reverse ? 1 : -1;
	            }
	            else if(x > y) {
	                return reverse ? -1: 1;
	            }
	            else {
	                return 0;
	            }
	        });

	        return arr;
	    }),

	    string: function(obj) {
	        return r.copySafeness(obj, obj);
	    },

	    striptags: function(input, preserve_linebreaks) {
	        input = normalize(input, '');
	        preserve_linebreaks = preserve_linebreaks || false;
	        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi;
	        var trimmedInput = filters.trim(input.replace(tags, ''));
	        var res = '';
	        if (preserve_linebreaks) {
	            res = trimmedInput
	                .replace(/^ +| +$/gm, '')     // remove leading and trailing spaces
	                .replace(/ +/g, ' ')          // squash adjacent spaces
	                .replace(/(\r\n)/g, '\n')     // normalize linebreaks (CRLF -> LF)
	                .replace(/\n\n\n+/g, '\n\n'); // squash abnormal adjacent linebreaks
	        } else {
	            res = trimmedInput.replace(/\s+/gi, ' ');
	        }
	        return r.copySafeness(input, res);
	    },

	    title: function(str) {
	        str = normalize(str, '');
	        var words = str.split(' ');
	        for(var i = 0; i < words.length; i++) {
	            words[i] = filters.capitalize(words[i]);
	        }
	        return r.copySafeness(str, words.join(' '));
	    },

	    trim: function(str) {
	        return r.copySafeness(str, str.replace(/^\s*|\s*$/g, ''));
	    },

	    truncate: function(input, length, killwords, end) {
	        var orig = input;
	        input = normalize(input, '');
	        length = length || 255;

	        if (input.length <= length)
	            return input;

	        if (killwords) {
	            input = input.substring(0, length);
	        } else {
	            var idx = input.lastIndexOf(' ', length);
	            if(idx === -1) {
	                idx = length;
	            }

	            input = input.substring(0, idx);
	        }

	        input += (end !== undefined && end !== null) ? end : '...';
	        return r.copySafeness(orig, input);
	    },

	    upper: function(str) {
	        str = normalize(str, '');
	        return str.toUpperCase();
	    },

	    urlencode: function(obj) {
	        var enc = encodeURIComponent;
	        if (lib.isString(obj)) {
	            return enc(obj);
	        } else {
	            var parts;
	            if (lib.isArray(obj)) {
	                parts = obj.map(function(item) {
	                    return enc(item[0]) + '=' + enc(item[1]);
	                });
	            } else {
	                parts = [];
	                for (var k in obj) {
	                    if (obj.hasOwnProperty(k)) {
	                        parts.push(enc(k) + '=' + enc(obj[k]));
	                    }
	                }
	            }
	            return parts.join('&');
	        }
	    },

	    urlize: function(str, length, nofollow) {
	        if (isNaN(length)) length = Infinity;

	        var noFollowAttr = (nofollow === true ? ' rel="nofollow"' : '');

	        // For the jinja regexp, see
	        // https://github.com/mitsuhiko/jinja2/blob/f15b814dcba6aa12bc74d1f7d0c881d55f7126be/jinja2/utils.py#L20-L23
	        var puncRE = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/;
	        // from http://blog.gerv.net/2011/05/html5_email_address_regexp/
	        var emailRE = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i;
	        var httpHttpsRE = /^https?:\/\/.*$/;
	        var wwwRE = /^www\./;
	        var tldRE = /\.(?:org|net|com)(?:\:|\/|$)/;

	        var words = str.split(/(\s+)/).filter(function(word) {
	          // If the word has no length, bail. This can happen for str with
	          // trailing whitespace.
	          return word && word.length;
	        }).map(function(word) {
	          var matches = word.match(puncRE);
	          var possibleUrl = matches && matches[1] || word;

	          // url that starts with http or https
	          if (httpHttpsRE.test(possibleUrl))
	            return '<a href="' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';

	          // url that starts with www.
	          if (wwwRE.test(possibleUrl))
	            return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';

	          // an email address of the form username@domain.tld
	          if (emailRE.test(possibleUrl))
	            return '<a href="mailto:' + possibleUrl + '">' + possibleUrl + '</a>';

	          // url that ends in .com, .org or .net that is not an email address
	          if (tldRE.test(possibleUrl))
	            return '<a href="http://' + possibleUrl + '"' + noFollowAttr + '>' + possibleUrl.substr(0, length) + '</a>';

	          return word;

	        });

	        return words.join('');
	    },

	    wordcount: function(str) {
	        str = normalize(str, '');
	        var words = (str) ? str.match(/\w+/g) : null;
	        return (words) ? words.length : null;
	    },

	    'float': function(val, def) {
	        var res = parseFloat(val);
	        return isNaN(res) ? def : res;
	    },

	    'int': function(val, def) {
	        var res = parseInt(val, 10);
	        return isNaN(res) ? def : res;
	    }
	};

	// Aliases
	filters.d = filters['default'];
	filters.e = filters.escape;

	module.exports = filters;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Loader = __webpack_require__(16);
	var PrecompiledLoader = __webpack_require__(17);

	var WebLoader = Loader.extend({
	    init: function(baseURL, opts) {
	        this.baseURL = baseURL || '.';
	        opts = opts || {};

	        // By default, the cache is turned off because there's no way
	        // to "watch" templates over HTTP, so they are re-downloaded
	        // and compiled each time. (Remember, PRECOMPILE YOUR
	        // TEMPLATES in production!)
	        this.useCache = !!opts.useCache;

	        // We default `async` to false so that the simple synchronous
	        // API can be used when you aren't doing anything async in
	        // your templates (which is most of the time). This performs a
	        // sync ajax request, but that's ok because it should *only*
	        // happen in development. PRECOMPILE YOUR TEMPLATES.
	        this.async = !!opts.async;
	    },

	    resolve: function(from, to) { // jshint ignore:line
	        throw new Error('relative templates not support in the browser yet');
	    },

	    getSource: function(name, cb) {
	        var useCache = this.useCache;
	        var result;
	        this.fetch(this.baseURL + '/' + name, function(err, src) {
	            if(err) {
	                if(cb) {
	                    cb(err.content);
	                } else {
	                    if (err.status === 404) {
	                      result = null;
	                    } else {
	                      throw err.content;
	                    }
	                }
	            }
	            else {
	                result = { src: src,
	                           path: name,
	                           noCache: !useCache };
	                if(cb) {
	                    cb(null, result);
	                }
	            }
	        });

	        // if this WebLoader isn't running asynchronously, the
	        // fetch above would actually run sync and we'll have a
	        // result here
	        return result;
	    },

	    fetch: function(url, cb) {
	        // Only in the browser please
	        var ajax;
	        var loading = true;

	        if(window.XMLHttpRequest) { // Mozilla, Safari, ...
	            ajax = new XMLHttpRequest();
	        }
	        else if(window.ActiveXObject) { // IE 8 and older
	            /* global ActiveXObject */
	            ajax = new ActiveXObject('Microsoft.XMLHTTP');
	        }

	        ajax.onreadystatechange = function() {
	            if(ajax.readyState === 4 && loading) {
	                loading = false;
	                if(ajax.status === 0 || ajax.status === 200) {
	                    cb(null, ajax.responseText);
	                }
	                else {
	                    cb({ status: ajax.status, content: ajax.responseText });
	                }
	            }
	        };

	        url += (url.indexOf('?') === -1 ? '?' : '&') + 's=' +
	               (new Date().getTime());

	        ajax.open('GET', url, this.async);
	        ajax.send();
	    }
	});

	module.exports = {
	    WebLoader: WebLoader,
	    PrecompiledLoader: PrecompiledLoader
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var path = __webpack_require__(3);
	var Obj = __webpack_require__(6);
	var lib = __webpack_require__(1);

	var Loader = Obj.extend({
	    on: function(name, func) {
	        this.listeners = this.listeners || {};
	        this.listeners[name] = this.listeners[name] || [];
	        this.listeners[name].push(func);
	    },

	    emit: function(name /*, arg1, arg2, ...*/) {
	        var args = Array.prototype.slice.call(arguments, 1);

	        if(this.listeners && this.listeners[name]) {
	            lib.each(this.listeners[name], function(listener) {
	                listener.apply(null, args);
	            });
	        }
	    },

	    resolve: function(from, to) {
	        return path.resolve(path.dirname(from), to);
	    },

	    isRelative: function(filename) {
	        return (filename.indexOf('./') === 0 || filename.indexOf('../') === 0);
	    }
	});

	module.exports = Loader;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var Loader = __webpack_require__(16);

	var PrecompiledLoader = Loader.extend({
	    init: function(compiledTemplates) {
	        this.precompiled = compiledTemplates || {};
	    },

	    getSource: function(name) {
	        if (this.precompiled[name]) {
	            return {
	                src: { type: 'code',
	                       obj: this.precompiled[name] },
	                path: name
	            };
	        }
	        return null;
	    }
	});

	module.exports = PrecompiledLoader;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	function cycler(items) {
	    var index = -1;

	    return {
	        current: null,
	        reset: function() {
	            index = -1;
	            this.current = null;
	        },

	        next: function() {
	            index++;
	            if(index >= items.length) {
	                index = 0;
	            }

	            this.current = items[index];
	            return this.current;
	        },
	    };

	}

	function joiner(sep) {
	    sep = sep || ',';
	    var first = true;

	    return function() {
	        var val = first ? '' : sep;
	        first = false;
	        return val;
	    };
	}

	// Making this a function instead so it returns a new object
	// each time it's called. That way, if something like an environment
	// uses it, they will each have their own copy.
	function globals() {
	    return {
	        range: function(start, stop, step) {
	            if(typeof stop === 'undefined') {
	                stop = start;
	                start = 0;
	                step = 1;
	            }
	            else if(!step) {
	                step = 1;
	            }

	            var arr = [];
	            var i;
	            if (step > 0) {
	                for (i=start; i<stop; i+=step) {
	                    arr.push(i);
	                }
	            } else {
	                for (i=start; i>stop; i+=step) {
	                    arr.push(i);
	                }
	            }
	            return arr;
	        },

	        // lipsum: function(n, html, min, max) {
	        // },

	        cycler: function() {
	            return cycler(Array.prototype.slice.call(arguments));
	        },

	        joiner: function(sep) {
	            return joiner(sep);
	        }
	    };
	}

	module.exports = globals;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(setImmediate, process) {// MIT license (by Elan Shanker).
	(function(globals) {
	  'use strict';

	  var executeSync = function(){
	    var args = Array.prototype.slice.call(arguments);
	    if (typeof args[0] === 'function'){
	      args[0].apply(null, args.splice(1));
	    }
	  };

	  var executeAsync = function(fn){
	    if (typeof setImmediate === 'function') {
	      setImmediate(fn);
	    } else if (typeof process !== 'undefined' && process.nextTick) {
	      process.nextTick(fn);
	    } else {
	      setTimeout(fn, 0);
	    }
	  };

	  var makeIterator = function (tasks) {
	    var makeCallback = function (index) {
	      var fn = function () {
	        if (tasks.length) {
	          tasks[index].apply(null, arguments);
	        }
	        return fn.next();
	      };
	      fn.next = function () {
	        return (index < tasks.length - 1) ? makeCallback(index + 1): null;
	      };
	      return fn;
	    };
	    return makeCallback(0);
	  };
	  
	  var _isArray = Array.isArray || function(maybeArray){
	    return Object.prototype.toString.call(maybeArray) === '[object Array]';
	  };

	  var waterfall = function (tasks, callback, forceAsync) {
	    var nextTick = forceAsync ? executeAsync : executeSync;
	    callback = callback || function () {};
	    if (!_isArray(tasks)) {
	      var err = new Error('First argument to waterfall must be an array of functions');
	      return callback(err);
	    }
	    if (!tasks.length) {
	      return callback();
	    }
	    var wrapIterator = function (iterator) {
	      return function (err) {
	        if (err) {
	          callback.apply(null, arguments);
	          callback = function () {};
	        } else {
	          var args = Array.prototype.slice.call(arguments, 1);
	          var next = iterator.next();
	          if (next) {
	            args.push(wrapIterator(next));
	          } else {
	            args.push(callback);
	          }
	          nextTick(function () {
	            iterator.apply(null, args);
	          });
	        }
	      };
	    };
	    wrapIterator(makeIterator(tasks))();
	  };

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return waterfall;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // RequireJS
	  } else if (typeof module !== 'undefined' && module.exports) {
	    module.exports = waterfall; // CommonJS
	  } else {
	    globals.waterfall = waterfall; // <script>
	  }
	})(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20).setImmediate, __webpack_require__(11)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};

	// setimmediate attaches itself to the global object
	__webpack_require__(21);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";

	    if (global.setImmediate) {
	        return;
	    }

	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;

	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }

	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }

	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }

	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }

	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }

	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }

	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };

	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }

	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }

	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };

	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }

	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }

	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }

	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();

	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();

	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();

	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();

	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }

	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(11)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	function installCompat() {
	    'use strict';

	    // This must be called like `nunjucks.installCompat` so that `this`
	    // references the nunjucks instance
	    var runtime = this.runtime; // jshint ignore:line
	    var lib = this.lib; // jshint ignore:line
	    var Compiler = this.compiler.Compiler; // jshint ignore:line
	    var Parser = this.parser.Parser; // jshint ignore:line
	    var nodes = this.nodes; // jshint ignore:line
	    var lexer = this.lexer; // jshint ignore:line

	    var orig_contextOrFrameLookup = runtime.contextOrFrameLookup;
	    var orig_Compiler_assertType = Compiler.prototype.assertType;
	    var orig_Parser_parseAggregate = Parser.prototype.parseAggregate;
	    var orig_memberLookup = runtime.memberLookup;

	    function uninstall() {
	        runtime.contextOrFrameLookup = orig_contextOrFrameLookup;
	        Compiler.prototype.assertType = orig_Compiler_assertType;
	        Parser.prototype.parseAggregate = orig_Parser_parseAggregate;
	        runtime.memberLookup = orig_memberLookup;
	    }

	    runtime.contextOrFrameLookup = function(context, frame, key) {
	        var val = orig_contextOrFrameLookup.apply(this, arguments);
	        if (val === undefined) {
	            switch (key) {
	            case 'True':
	                return true;
	            case 'False':
	                return false;
	            case 'None':
	                return null;
	            }
	        }

	        return val;
	    };

	    var Slice = nodes.Node.extend('Slice', {
	        fields: ['start', 'stop', 'step'],
	        init: function(lineno, colno, start, stop, step) {
	            start = start || new nodes.Literal(lineno, colno, null);
	            stop = stop || new nodes.Literal(lineno, colno, null);
	            step = step || new nodes.Literal(lineno, colno, 1);
	            this.parent(lineno, colno, start, stop, step);
	        }
	    });

	    Compiler.prototype.assertType = function(node) {
	        if (node instanceof Slice) {
	            return;
	        }
	        return orig_Compiler_assertType.apply(this, arguments);
	    };
	    Compiler.prototype.compileSlice = function(node, frame) {
	        this.emit('(');
	        this._compileExpression(node.start, frame);
	        this.emit('),(');
	        this._compileExpression(node.stop, frame);
	        this.emit('),(');
	        this._compileExpression(node.step, frame);
	        this.emit(')');
	    };

	    function getTokensState(tokens) {
	        return {
	            index: tokens.index,
	            lineno: tokens.lineno,
	            colno: tokens.colno
	        };
	    }

	    Parser.prototype.parseAggregate = function() {
	        var self = this;
	        var origState = getTokensState(this.tokens);
	        // Set back one accounting for opening bracket/parens
	        origState.colno--;
	        origState.index--;
	        try {
	            return orig_Parser_parseAggregate.apply(this);
	        } catch(e) {
	            var errState = getTokensState(this.tokens);
	            var rethrow = function() {
	                lib.extend(self.tokens, errState);
	                return e;
	            };

	            // Reset to state before original parseAggregate called
	            lib.extend(this.tokens, origState);
	            this.peeked = false;

	            var tok = this.peekToken();
	            if (tok.type !== lexer.TOKEN_LEFT_BRACKET) {
	                throw rethrow();
	            } else {
	                this.nextToken();
	            }

	            var node = new Slice(tok.lineno, tok.colno);

	            // If we don't encounter a colon while parsing, this is not a slice,
	            // so re-raise the original exception.
	            var isSlice = false;

	            for (var i = 0; i <= node.fields.length; i++) {
	                if (this.skip(lexer.TOKEN_RIGHT_BRACKET)) {
	                    break;
	                }
	                if (i === node.fields.length) {
	                    if (isSlice) {
	                        this.fail('parseSlice: too many slice components', tok.lineno, tok.colno);
	                    } else {
	                        break;
	                    }
	                }
	                if (this.skip(lexer.TOKEN_COLON)) {
	                    isSlice = true;
	                } else {
	                    var field = node.fields[i];
	                    node[field] = this.parseExpression();
	                    isSlice = this.skip(lexer.TOKEN_COLON) || isSlice;
	                }
	            }
	            if (!isSlice) {
	                throw rethrow();
	            }
	            return new nodes.Array(tok.lineno, tok.colno, [node]);
	        }
	    };

	    function sliceLookup(obj, start, stop, step) {
	        obj = obj || [];
	        if (start === null) {
	            start = (step < 0) ? (obj.length - 1) : 0;
	        }
	        if (stop === null) {
	            stop = (step < 0) ? -1 : obj.length;
	        } else {
	            if (stop < 0) {
	                stop += obj.length;
	            }
	        }

	        if (start < 0) {
	            start += obj.length;
	        }

	        var results = [];

	        for (var i = start; ; i += step) {
	            if (i < 0 || i > obj.length) {
	                break;
	            }
	            if (step > 0 && i >= stop) {
	                break;
	            }
	            if (step < 0 && i <= stop) {
	                break;
	            }
	            results.push(runtime.memberLookup(obj, i));
	        }
	        return results;
	    }

	    var ARRAY_MEMBERS = {
	        pop: function(index) {
	            if (index === undefined) {
	                return this.pop();
	            }
	            if (index >= this.length || index < 0) {
	                throw new Error('KeyError');
	            }
	            return this.splice(index, 1);
	        },
	        append: function(element) {
	                return this.push(element);
	        },
	        remove: function(element) {
	            for (var i = 0; i < this.length; i++) {
	                if (this[i] === element) {
	                    return this.splice(i, 1);
	                }
	            }
	            throw new Error('ValueError');
	        },
	        count: function(element) {
	            var count = 0;
	            for (var i = 0; i < this.length; i++) {
	                if (this[i] === element) {
	                    count++;
	                }
	            }
	            return count;
	        },
	        index: function(element) {
	            var i;
	            if ((i = this.indexOf(element)) === -1) {
	                throw new Error('ValueError');
	            }
	            return i;
	        },
	        find: function(element) {
	            return this.indexOf(element);
	        },
	        insert: function(index, elem) {
	            return this.splice(index, 0, elem);
	        }
	    };
	    var OBJECT_MEMBERS = {
	        items: function() {
	            var ret = [];
	            for(var k in this) {
	                ret.push([k, this[k]]);
	            }
	            return ret;
	        },
	        values: function() {
	            var ret = [];
	            for(var k in this) {
	                ret.push(this[k]);
	            }
	            return ret;
	        },
	        keys: function() {
	            var ret = [];
	            for(var k in this) {
	                ret.push(k);
	            }
	            return ret;
	        },
	        get: function(key, def) {
	            var output = this[key];
	            if (output === undefined) {
	                output = def;
	            }
	            return output;
	        },
	        has_key: function(key) {
	            return this.hasOwnProperty(key);
	        },
	        pop: function(key, def) {
	            var output = this[key];
	            if (output === undefined && def !== undefined) {
	                output = def;
	            } else if (output === undefined) {
	                throw new Error('KeyError');
	            } else {
	                delete this[key];
	            }
	            return output;
	        },
	        popitem: function() {
	            for (var k in this) {
	                // Return the first object pair.
	                var val = this[k];
	                delete this[k];
	                return [k, val];
	            }
	            throw new Error('KeyError');
	        },
	        setdefault: function(key, def) {
	            if (key in this) {
	                return this[key];
	            }
	            if (def === undefined) {
	                def = null;
	            }
	            return this[key] = def;
	        },
	        update: function(kwargs) {
	            for (var k in kwargs) {
	                this[k] = kwargs[k];
	            }
	            return null;    // Always returns None
	        }
	    };
	    OBJECT_MEMBERS.iteritems = OBJECT_MEMBERS.items;
	    OBJECT_MEMBERS.itervalues = OBJECT_MEMBERS.values;
	    OBJECT_MEMBERS.iterkeys = OBJECT_MEMBERS.keys;
	    runtime.memberLookup = function(obj, val, autoescape) { // jshint ignore:line
	        if (arguments.length === 4) {
	            return sliceLookup.apply(this, arguments);
	        }
	        obj = obj || {};

	        // If the object is an object, return any of the methods that Python would
	        // otherwise provide.
	        if (lib.isArray(obj) && ARRAY_MEMBERS.hasOwnProperty(val)) {
	            return function() {return ARRAY_MEMBERS[val].apply(obj, arguments);};
	        }

	        if (lib.isObject(obj) && OBJECT_MEMBERS.hasOwnProperty(val)) {
	            return function() {return OBJECT_MEMBERS[val].apply(obj, arguments);};
	        }

	        return orig_memberLookup.apply(this, arguments);
	    };

	    return uninstall;
	}

	module.exports = installCompat;


/***/ })
/******/ ])
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("162o").setImmediate, __webpack_require__("162o").clearImmediate))

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

/***/ "h0y4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

/***/ "mypn":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("DuR2"), __webpack_require__("W2nU")))

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