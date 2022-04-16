'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = {exports: {}};

var react_production_min = {};

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
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

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

/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=objectAssign,n=60103,p=60106;react_production_min.Fragment=60107;react_production_min.StrictMode=60108;react_production_min.Profiler=60114;var q=60109,r=60110,t=60112;react_production_min.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");react_production_min.Fragment=w("react.fragment");react_production_min.StrictMode=w("react.strict_mode");react_production_min.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");react_production_min.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy");}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return "function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState");};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A;}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f;}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return {$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return {$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return "object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0;}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d);}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
react_production_min.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments);},c);},count:function(a){var b=0;P(a,function(){b++;});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};react_production_min.Component=C;react_production_min.PureComponent=E;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
react_production_min.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g;}return {$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};react_production_min.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};react_production_min.createElement=J;react_production_min.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};react_production_min.forwardRef=function(a){return {$$typeof:t,render:a}};react_production_min.isValidElement=L;
react_production_min.lazy=function(a){return {$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};react_production_min.memo=function(a,b){return {$$typeof:u,type:a,compare:void 0===b?null:b}};react_production_min.useCallback=function(a,b){return S().useCallback(a,b)};react_production_min.useContext=function(a,b){return S().useContext(a,b)};react_production_min.useDebugValue=function(){};react_production_min.useEffect=function(a,b){return S().useEffect(a,b)};react_production_min.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
react_production_min.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return S().useMemo(a,b)};react_production_min.useReducer=function(a,b,c){return S().useReducer(a,b,c)};react_production_min.useRef=function(a){return S().useRef(a)};react_production_min.useState=function(a){return S().useState(a)};react_production_min.version="17.0.2";

var react_development = {};

/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var _assign = objectAssign;

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.2';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
exports.StrictMode = 0xeacc;
exports.Profiler = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
exports.Suspense = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  exports.StrictMode = symbolFor('react.strict_mode');
  exports.Profiler = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  exports.Suspense = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  transition: 0
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactDebugCurrentFrame = {};
var currentExtraStackFrame = null;
function setExtraStackFrame(stack) {
  {
    currentExtraStackFrame = stack;
  }
}

{
  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
    {
      currentExtraStackFrame = stack;
    }
  }; // Stack implementation injected by the current renderer.


  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentExtraStackFrame) {
      stack += currentExtraStackFrame;
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case exports.Profiler:
      return 'Profiler';

    case exports.StrictMode:
      return 'StrictMode';

    case exports.Suspense:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = key.replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return text.replace(userProvidedKeyEscapeRegex, '$&/');
}
/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getElementKey(element, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof element === 'object' && element !== null && element.key != null) {
    // Explicit key
    return escape('' + element.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    var _child = children;
    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows:

    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

    if (Array.isArray(mappedChild)) {
      var escapedChildKey = '';

      if (childKey != null) {
        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
      }

      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
        return c;
      });
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
      }

      array.push(mappedChild);
    }

    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getElementKey(child, i);
      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {
      var iterableChildren = children;

      {
        // Warn about using Maps as children
        if (iteratorFn === iterableChildren.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(iterableChildren);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getElementKey(child, ii++);
        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
      }
    } else if (type === 'object') {
      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead." );
        }
      }
    }
  }

  return subtreeCount;
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  var count = 0;
  mapIntoArray(children, result, '', '', function (child) {
    return func.call(context, child, count++);
  });
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  var n = 0;
  mapChildren(children, function () {
    n++; // Don't return anything
  });
  return n;
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  mapChildren(children, function () {
    forEachFunc.apply(this, arguments); // Don't return anything.
  }, forEachContext);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  return mapChildren(children, function (child) {
    return child;
  }) || [];
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;
  var hasWarnedAboutDisplayNameOnConsumer = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      },
      displayName: {
        get: function () {
          return context.displayName;
        },
        set: function (displayName) {
          if (!hasWarnedAboutDisplayNameOnConsumer) {
            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

            hasWarnedAboutDisplayNameOnConsumer = true;
          }
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

var Uninitialized = -1;
var Pending = 0;
var Resolved = 1;
var Rejected = 2;

function lazyInitializer(payload) {
  if (payload._status === Uninitialized) {
    var ctor = payload._result;
    var thenable = ctor(); // Transition to the next state.

    var pending = payload;
    pending._status = Pending;
    pending._result = thenable;
    thenable.then(function (moduleObject) {
      if (payload._status === Pending) {
        var defaultExport = moduleObject.default;

        {
          if (defaultExport === undefined) {
            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
          }
        } // Transition to the next state.


        var resolved = payload;
        resolved._status = Resolved;
        resolved._result = defaultExport;
      }
    }, function (error) {
      if (payload._status === Pending) {
        // Transition to the next state.
        var rejected = payload;
        rejected._status = Rejected;
        rejected._result = error;
      }
    });
  }

  if (payload._status === Resolved) {
    return payload._result;
  } else {
    throw payload._result;
  }
}

function lazy(ctor) {
  var payload = {
    // We use these fields to store the result.
    _status: -1,
    _result: ctor
  };
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: payload,
    _init: lazyInitializer
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes; // $FlowFixMe

    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:
          // $FlowFixMe

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  var elementType = {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (render.displayName == null) {
          render.displayName = name;
        }
      }
    });
  }

  return elementType;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  var elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };

  {
    var ownName;
    Object.defineProperty(elementType, 'displayName', {
      enumerable: false,
      configurable: true,
      get: function () {
        return ownName;
      },
      set: function (name) {
        ownName = name;

        if (type.displayName == null) {
          type.displayName = name;
        }
      }
    });
  }

  return elementType;
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher$1.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher$1.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case exports.Suspense:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      setExtraStackFrame(stack);
    } else {
      setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  {
    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === exports.Fragment) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    /* eslint-disable no-new */

    new Map([[frozenObject, null]]);
    new Set([frozenObject]);
    /* eslint-enable no-new */
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.PureComponent = PureComponent;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}
}(react_development));

if (process.env.NODE_ENV === 'production') {
  react.exports = react_production_min;
} else {
  react.exports = react_development;
}

var React = react.exports;

function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

function clsx () {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

var Button = function (props) {
    return (React.createElement("button", { type: 'button', className: clsx('button-' + props.variant, props.className), style: props.style, disabled: props.disabled }, props.children));
};
Button.defaultProps = {
    variant: 'primary',
    disabled: false,
    size: 'medium',
    style: {},
    onClick: function () { },
};

var styles$2 = {"w-100":"styles-module_w-100__qPu-R","w-fit":"styles-module_w-fit__7xr1B","h-100":"styles-module_h-100__aoRHe","h-fit":"styles-module_h-fit__jBWkV","br-5":"styles-module_br-5__oZfkS","br-10":"styles-module_br-10__22uZ9","br-15":"styles-module_br-15__xeGXB","br-33":"styles-module_br-33__wxH8r","br-50":"styles-module_br-50__K9-LI","br-100":"styles-module_br-100__r4BZd","br-1000":"styles-module_br-1000__slZ2F","p-0":"styles-module_p-0__SYhhz","p-0-l":"styles-module_p-0-l__mzEW0","p-0-r":"styles-module_p-0-r__cr2g1","p-0-t":"styles-module_p-0-t__UcfD3","p-0-b":"styles-module_p-0-b__ZRlb3","p-0-lr":"styles-module_p-0-lr__clskS","p-0-tb":"styles-module_p-0-tb__37Tdo","m-0":"styles-module_m-0__EMYMf","m-0-l":"styles-module_m-0-l__SqdiC","m-0-r":"styles-module_m-0-r__FFllD","m-0-t":"styles-module_m-0-t__b5Rkp","m-0-b":"styles-module_m-0-b__HSGjL","m-0-lr":"styles-module_m-0-lr__jdaYP","m-0-tb":"styles-module_m-0-tb__YojmM","p-1":"styles-module_p-1__bqdTS","p-1-l":"styles-module_p-1-l__pbKg-","p-1-r":"styles-module_p-1-r__clfry","p-1-t":"styles-module_p-1-t__X9P4P","p-1-b":"styles-module_p-1-b__VVT8V","p-1-lr":"styles-module_p-1-lr__F8llz","p-1-tb":"styles-module_p-1-tb__O--4a","m-1":"styles-module_m-1__D4yA2","m-1-l":"styles-module_m-1-l__hJgX6","m-1-r":"styles-module_m-1-r__4ly0n","m-1-t":"styles-module_m-1-t__s71Bo","m-1-b":"styles-module_m-1-b__0yKX3","m-1-lr":"styles-module_m-1-lr__TkQfM","m-1-tb":"styles-module_m-1-tb__EPTFk","p-2":"styles-module_p-2__okBdk","p-2-l":"styles-module_p-2-l__pAuIv","p-2-r":"styles-module_p-2-r__Xx6de","p-2-t":"styles-module_p-2-t__7Hswa","p-2-b":"styles-module_p-2-b__DM-cg","p-2-lr":"styles-module_p-2-lr__Nlhsv","p-2-tb":"styles-module_p-2-tb__KxJZB","m-2":"styles-module_m-2__qJmHF","m-2-l":"styles-module_m-2-l__riDQz","m-2-r":"styles-module_m-2-r__iVnB7","m-2-t":"styles-module_m-2-t__el7uF","m-2-b":"styles-module_m-2-b__EuFe4","m-2-lr":"styles-module_m-2-lr__oBEP5","m-2-tb":"styles-module_m-2-tb__OMZpG","p-3":"styles-module_p-3__DMeXh","p-3-l":"styles-module_p-3-l__yfnL-","p-3-r":"styles-module_p-3-r__ayb-K","p-3-t":"styles-module_p-3-t__nmSnh","p-3-b":"styles-module_p-3-b__XKMxK","p-3-lr":"styles-module_p-3-lr__M4EZq","p-3-tb":"styles-module_p-3-tb__hltNF","m-3":"styles-module_m-3__zppNT","m-3-l":"styles-module_m-3-l__aCmjs","m-3-r":"styles-module_m-3-r__CZpd4","m-3-t":"styles-module_m-3-t__EYNpY","m-3-b":"styles-module_m-3-b__WNcpq","m-3-lr":"styles-module_m-3-lr__5TXHd","m-3-tb":"styles-module_m-3-tb__HCCWI","p-4":"styles-module_p-4__Gk9L-","p-4-l":"styles-module_p-4-l__XQ-fT","p-4-r":"styles-module_p-4-r__BPXvp","p-4-t":"styles-module_p-4-t__flb9i","p-4-b":"styles-module_p-4-b__74HiW","p-4-lr":"styles-module_p-4-lr__evl1I","p-4-tb":"styles-module_p-4-tb__0rtVP","m-4":"styles-module_m-4__hD6zY","m-4-l":"styles-module_m-4-l__--Pmx","m-4-r":"styles-module_m-4-r__xvAnB","m-4-t":"styles-module_m-4-t__Ygf7i","m-4-b":"styles-module_m-4-b__UdPHp","m-4-lr":"styles-module_m-4-lr__LIFTs","m-4-tb":"styles-module_m-4-tb__sral-","p-5":"styles-module_p-5__Cb0d7","p-5-l":"styles-module_p-5-l__xlWds","p-5-r":"styles-module_p-5-r__NDhTB","p-5-t":"styles-module_p-5-t__Y3zmo","p-5-b":"styles-module_p-5-b__E6rfy","p-5-lr":"styles-module_p-5-lr__koN4E","p-5-tb":"styles-module_p-5-tb__fm4Og","m-5":"styles-module_m-5__3J-Oq","m-5-l":"styles-module_m-5-l__7D4IF","m-5-r":"styles-module_m-5-r__CkiBA","m-5-t":"styles-module_m-5-t__1G2hp","m-5-b":"styles-module_m-5-b__7fu3J","m-5-lr":"styles-module_m-5-lr__-2y-V","m-5-tb":"styles-module_m-5-tb__8U7mb","p-6":"styles-module_p-6__ovoPp","p-6-l":"styles-module_p-6-l__J7GgN","p-6-r":"styles-module_p-6-r__6kM6W","p-6-t":"styles-module_p-6-t__0ScKt","p-6-b":"styles-module_p-6-b__2I-3T","p-6-lr":"styles-module_p-6-lr__kAkgf","p-6-tb":"styles-module_p-6-tb__iYIJ9","m-6":"styles-module_m-6__LDwbZ","m-6-l":"styles-module_m-6-l__VdxBw","m-6-r":"styles-module_m-6-r__fgmCL","m-6-t":"styles-module_m-6-t__BBTfh","m-6-b":"styles-module_m-6-b__TXOTa","m-6-lr":"styles-module_m-6-lr__JQ3AS","m-6-tb":"styles-module_m-6-tb__9Nvd4","p-7":"styles-module_p-7__R2K4r","p-7-l":"styles-module_p-7-l__XgGIq","p-7-r":"styles-module_p-7-r__2Gve6","p-7-t":"styles-module_p-7-t__Fq8D-","p-7-b":"styles-module_p-7-b__CgeXV","p-7-lr":"styles-module_p-7-lr__mCPr8","p-7-tb":"styles-module_p-7-tb__Vz6YH","m-7":"styles-module_m-7__C5lae","m-7-l":"styles-module_m-7-l__aGl1V","m-7-r":"styles-module_m-7-r__e91Qo","m-7-t":"styles-module_m-7-t__IXg8z","m-7-b":"styles-module_m-7-b__AZZW4","m-7-lr":"styles-module_m-7-lr__MX8WU","m-7-tb":"styles-module_m-7-tb__2SDVL","p-8":"styles-module_p-8__iNqbY","p-8-l":"styles-module_p-8-l__0BGV4","p-8-r":"styles-module_p-8-r__Tew0j","p-8-t":"styles-module_p-8-t__Kq1-9","p-8-b":"styles-module_p-8-b__uexeM","p-8-lr":"styles-module_p-8-lr__0hHDQ","p-8-tb":"styles-module_p-8-tb__eCowI","m-8":"styles-module_m-8__XT6yf","m-8-l":"styles-module_m-8-l__CQ5ac","m-8-r":"styles-module_m-8-r__Fu-FB","m-8-t":"styles-module_m-8-t__xBBE7","m-8-b":"styles-module_m-8-b__kJiTA","m-8-lr":"styles-module_m-8-lr__2HpjS","m-8-tb":"styles-module_m-8-tb__FmM8-","p-9":"styles-module_p-9__fB3db","p-9-l":"styles-module_p-9-l__zob4K","p-9-r":"styles-module_p-9-r__IwBbT","p-9-t":"styles-module_p-9-t__1LGs5","p-9-b":"styles-module_p-9-b__c3SqA","p-9-lr":"styles-module_p-9-lr__wutPg","p-9-tb":"styles-module_p-9-tb__USnsU","m-9":"styles-module_m-9__AsZ4D","m-9-l":"styles-module_m-9-l__-YdvS","m-9-r":"styles-module_m-9-r__WL4AY","m-9-t":"styles-module_m-9-t__nj2eZ","m-9-b":"styles-module_m-9-b__YKpjO","m-9-lr":"styles-module_m-9-lr__dhUi0","m-9-tb":"styles-module_m-9-tb__ihFlF","p-10":"styles-module_p-10__1GjDR","p-10-l":"styles-module_p-10-l__H-FH-","p-10-r":"styles-module_p-10-r__ZyEkG","p-10-t":"styles-module_p-10-t__2lthY","p-10-b":"styles-module_p-10-b__RygW9","p-10-lr":"styles-module_p-10-lr__d2ywV","p-10-tb":"styles-module_p-10-tb__XfuXB","m-10":"styles-module_m-10__tslbh","m-10-l":"styles-module_m-10-l__V-yQC","m-10-r":"styles-module_m-10-r__SVnrY","m-10-t":"styles-module_m-10-t__8zvyg","m-10-b":"styles-module_m-10-b__7Fr-J","m-10-lr":"styles-module_m-10-lr__-fKu0","m-10-tb":"styles-module_m-10-tb__f0k-7","color-white":"styles-module_color-white__7aP0n","bg-transparent":"styles-module_bg-transparent__mzWtf","checkbox":"styles-module_checkbox__AVGTi","checkmark":"styles-module_checkmark__xfDiG","bg-white":"styles-module_bg-white__GaOnN","bg-teal":"styles-module_bg-teal__8gqRr","bg-teal100":"styles-module_bg-teal100__4yWIX","active":"styles-module_active__0-2a8","bg-teal200":"styles-module_bg-teal200__yyxgE","bg-teal300":"styles-module_bg-teal300__KUWu4","bg-grey100":"styles-module_bg-grey100__48Jtr","bg-grey200":"styles-module_bg-grey200__f43-a","bg-grey300":"styles-module_bg-grey300__4h8LO","bg-grey400":"styles-module_bg-grey400__rmtCm","bg-grey500":"styles-module_bg-grey500__-FH-p","bg-grey600":"styles-module_bg-grey600__TLa1m","bg-grey700":"styles-module_bg-grey700__BKwJd","bg-grey800":"styles-module_bg-grey800__Vs2-Y","bg-grey900":"styles-module_bg-grey900__i4ThR","bg-red100":"styles-module_bg-red100__Mwbsn","bg-red200":"styles-module_bg-red200__DmOcV","bg-yellow100":"styles-module_bg-yellow100__v65LQ","bg-yellow200":"styles-module_bg-yellow200__Px-D0","text-font":"styles-module_text-font__GBqV6","text-h5":"styles-module_text-h5__e8Sp4","text-h5-bold":"styles-module_text-h5-bold__NTeol","text-h4":"styles-module_text-h4__jo9d3","text-h4-bold":"styles-module_text-h4-bold__U9bUj","text-h3":"styles-module_text-h3__-8-uK","text-h3-bold":"styles-module_text-h3-bold__83PbH","text-h2":"styles-module_text-h2__DzPb9","text-h2-bold":"styles-module_text-h2-bold__i-Emf","text-h1":"styles-module_text-h1__frV9N","text-h1-bold":"styles-module_text-h1-bold__GN9Wk","text-bigtitle":"styles-module_text-bigtitle__Lf2BV","text-bold":"styles-module_text-bold__ejPIv","text-ellipsis":"styles-module_text-ellipsis__CMCZw","text-underline":"styles-module_text-underline__19gWS","absolute":"styles-module_absolute__pHm4g","relative":"styles-module_relative__89Pu-","fixed":"styles-module_fixed__vJuLP","opacity-0":"styles-module_opacity-0__TWqTi","opacity-50":"styles-module_opacity-50__aJ4pQ","opacity-100":"styles-module_opacity-100__x9uzA","object-cover":"styles-module_object-cover__EF-hG","object-contain":"styles-module_object-contain__vaaXU","outline-none":"styles-module_outline-none__KAZFv","z-10":"styles-module_z-10__1JJ9r","z-index-1301":"styles-module_z-index-1301__UkLmm","cursor-pointer":"styles-module_cursor-pointer__Gwn6o","flex":"styles-module_flex__mgz-x","flex-col":"styles-module_flex-col__b9UZ-","flex-row":"styles-module_flex-row__Pugbm","align-start":"styles-module_align-start__wpAJf","align-end":"styles-module_align-end__YH1yU","align-center":"styles-module_align-center__wITBk","justify-start":"styles-module_justify-start__0RQMT","justify-end":"styles-module_justify-end__VVEdX","justify-center":"styles-module_justify-center__XtpUM","justify-between":"styles-module_justify-between__aAsin","justify-around":"styles-module_justify-around__LXVyA","justify-evenly":"styles-module_justify-evenly__UC6T6","self-center":"styles-module_self-center__QXnNn"};

var Checkbox = function (_a) {
    var _b;
    var _c = _a.defaultValue, defaultValue = _c === void 0 ? false : _c, onChange = _a.onChange;
    var _d = react.exports.useState(defaultValue), state = _d[0], setState = _d[1];
    var onClick = react.exports.useCallback(function () {
        return setState(function (state) {
            onChange(!state);
            return !state;
        });
    }, [setState, onChange]);
    return (React.createElement("div", { className: clsx(styles$2.checkbox, (_b = {}, _b[styles$2.active] = state, _b)), onClick: onClick },
        React.createElement("span", { className: styles$2.checkmark })));
};

var styles$1 = {"color-white":"styles-module_color-white__DqJzI","bg-transparent":"styles-module_bg-transparent__UPpg5","bg-white":"styles-module_bg-white__JfFTd","switch":"styles-module_switch__qCkK4","active":"styles-module_active__ZEu1a","slider":"styles-module_slider__VIgqS","bg-teal":"styles-module_bg-teal__6FOeS","bg-teal100":"styles-module_bg-teal100__EGpCc","bg-teal200":"styles-module_bg-teal200__0Pn9g","bg-teal300":"styles-module_bg-teal300__--M-p","bg-grey100":"styles-module_bg-grey100__9r17F","bg-grey200":"styles-module_bg-grey200__7U8Pj","bg-grey300":"styles-module_bg-grey300__UAIaL","bg-grey400":"styles-module_bg-grey400__u3lX5","bg-grey500":"styles-module_bg-grey500__9gZf9","bg-grey600":"styles-module_bg-grey600__3EDFr","bg-grey700":"styles-module_bg-grey700__yB08-","bg-grey800":"styles-module_bg-grey800__uximF","bg-grey900":"styles-module_bg-grey900__6IdrK","bg-red100":"styles-module_bg-red100__1Gt6z","bg-red200":"styles-module_bg-red200__jEVWs","bg-yellow100":"styles-module_bg-yellow100__rXhqM","bg-yellow200":"styles-module_bg-yellow200__-uGJ1","round":"styles-module_round__jgioF"};

var Switch = function (_a) {
    var _b;
    var _c = _a.defaultValue, defaultValue = _c === void 0 ? false : _c, onChange = _a.onChange;
    var _d = react.exports.useState(defaultValue), state = _d[0], setState = _d[1];
    var onClick = react.exports.useCallback(function () {
        setState(function (state) {
            onChange(!state);
            return !state;
        });
    }, [onChange, setState]);
    return (React.createElement("label", { className: clsx(styles$1.switch, (_b = {}, _b[styles$1.active] = state, _b)), onClick: onClick },
        React.createElement("span", { className: clsx(styles$1.round, styles$1.slider) })));
};

var DownArrow = "<svg width=\"12\" height=\"7\" viewBox=\"0 0 12 7\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M11 1L6 6L1 1\" stroke=\"#999999\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>";

var high = "<svg width=\"8\" height=\"9\" viewBox=\"0 0 8 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.5653 2.80923C3.95886 1.83187 4.71219 0.452391 4.74451 0.395051C4.79141 0.313453 4.79127 0.213064 4.74413 0.131607C4.697 0.0501504 4.61002 0 4.51591 0C3.68898 0 3.04144 0.234949 2.59128 0.698344C1.82208 1.49015 1.85776 2.7225 1.87298 3.24875C1.87467 3.30704 1.87613 3.35742 1.87613 3.39483C1.87613 3.78555 1.93881 4.14628 1.99413 4.46453C2.02978 4.66961 2.06056 4.84673 2.06603 4.98598C2.07188 5.13504 2.04467 5.16922 2.04351 5.17059C2.03962 5.17519 2.00728 5.1924 1.91983 5.1924C1.82009 5.1924 1.74656 5.15981 1.68142 5.08678C1.42696 4.80145 1.40936 4.02235 1.45802 3.59849C1.46672 3.52375 1.44308 3.44886 1.39303 3.39268C1.343 3.3365 1.27136 3.30437 1.19612 3.30437C0.511541 3.30437 0 4.42389 0 5.42486C0 5.8954 0.0946406 6.35636 0.281303 6.79489C0.46176 7.21884 0.719086 7.60148 1.04616 7.93213C1.72735 8.62075 2.62547 9 3.57511 9C4.52856 9 5.42646 8.62611 6.10339 7.94725C6.77856 7.27014 7.15039 6.3743 7.15039 5.42482C7.15038 4.2133 6.20246 3.19685 5.5653 2.80923ZM3.57511 8.47266C1.92306 8.47266 0.527361 7.07694 0.527361 5.42482C0.527361 5.02304 0.623232 4.60129 0.790383 4.26774C0.829424 4.18982 0.869484 4.12297 0.909018 4.06665C0.91343 4.50165 0.982336 5.09465 1.2874 5.43725C1.45197 5.62205 1.67066 5.71973 1.91985 5.71973C2.15263 5.71973 2.33003 5.64917 2.44707 5.51002C2.66588 5.2499 2.59872 4.86346 2.51371 4.37421C2.46205 4.07696 2.40349 3.74004 2.40349 3.39481C2.40349 3.34976 2.40193 3.29588 2.40013 3.23346C2.3857 2.73498 2.35566 1.69771 2.96954 1.0658C3.24512 0.782104 3.62987 0.609451 4.1166 0.550371C4.06165 0.732832 4.01428 0.964459 4.01245 1.22381C4.00841 1.79524 4.22698 2.61229 5.29123 3.25976C5.80614 3.57302 6.62305 4.43781 6.62305 5.42484C6.62303 7.10541 5.25574 8.47266 3.57511 8.47266Z\" fill=\"#FD6640\"/>\n</svg>";

var highEnabled = "<svg width=\"8\" height=\"9\" viewBox=\"0 0 8 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.5653 2.80923C3.95886 1.83187 4.71219 0.452391 4.74451 0.395051C4.79141 0.313453 4.79127 0.213064 4.74412 0.131607C4.697 0.0501504 4.61002 0 4.51591 0C3.68898 0 3.04144 0.234949 2.59128 0.698344C1.82208 1.49015 1.85776 2.7225 1.87298 3.24875C1.87467 3.30704 1.87613 3.35742 1.87613 3.39483C1.87613 3.78555 1.93881 4.14628 1.99413 4.46453C2.02978 4.66961 2.06056 4.84673 2.06603 4.98598C2.07188 5.13505 2.04351 5.17059 2.04351 5.17059C2.03962 5.17519 2.00728 5.1924 1.91983 5.1924C1.82009 5.1924 1.74656 5.15981 1.68142 5.08678C1.42696 4.80145 1.40936 4.02235 1.45802 3.59849C1.46672 3.52375 1.44308 3.44886 1.39303 3.39268C1.343 3.3365 1.27136 3.30437 1.19612 3.30437C0.511541 3.30437 0 4.42389 0 5.42486C0 5.8954 0.0946406 6.35636 0.281303 6.79489C0.46176 7.21884 0.719086 7.60148 1.04616 7.93213C1.72735 8.62075 2.62547 9 3.57511 9C4.52856 9 5.42646 8.62611 6.10339 7.94725C6.77856 7.27014 7.15039 6.3743 7.15039 5.42482C7.15038 4.2133 6.20246 3.19685 5.5653 2.80923ZM3.57511 8.47266C1.92306 8.47266 1.45802 7.16214 1.45802 5.51002C1.45802 5.10824 1.19612 4 0.790383 4.26774C0.829424 4.18982 1.15659 7.3611 1.19612 7.30478C1.20053 7.73979 2.69493 8.1574 3 8.5C3.16457 8.6848 1.67066 5.71973 1.91985 5.71973C2.15263 5.71973 2.33003 5.64917 2.44707 5.51002C2.66588 5.2499 2.59872 4.86346 2.51371 4.37421C2.46204 4.07696 2.40349 3.74004 2.40349 3.39481C2.40349 3.34976 3.65328 0.760764 3.65149 0.698344C3.63705 0.199863 2.35566 1.69771 2.96954 1.0658C3.24512 0.782103 0.971279 7.99121 1.45802 7.93213C1.40307 8.11459 3 8.5 3.5 8.5C3.49596 9.07143 5 8 6.10339 7.5C6.6183 7.81326 7 5.5 6.62305 5.42484C6.5 5 5.25574 8.47266 3.57511 8.47266Z\" fill=\"#FD6640\"/>\n</svg>";

var low = "<svg width=\"9\" height=\"9\" viewBox=\"0 0 9 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.99094 0.54437C8.97727 0.253027 8.74732 0.0227255 8.45556 0.00871798C8.32846 0.00281281 7.17421 -0.0433984 5.79227 0.157171C4.98182 0.274793 4.24979 0.454832 3.61636 0.692342C2.816 0.992407 2.16795 1.38688 1.69025 1.86493C0.963913 2.5916 0.563942 3.55902 0.563942 4.58899C0.563942 5.52976 0.897652 6.41835 1.50884 7.119L0.0773163 8.54984C-0.0257492 8.65276 -0.0257492 8.81969 0.077179 8.92275C0.128677 8.97425 0.196175 9 0.263672 9C0.331101 9 0.398598 8.97425 0.450028 8.92282L1.88148 7.49213C2.58199 8.10516 3.47127 8.43997 4.413 8.43997C5.4427 8.43997 6.40977 8.03979 7.13597 7.31319C7.61367 6.83514 8.00794 6.18681 8.30786 5.38605C8.54517 4.75234 8.72514 4.01997 8.84269 3.20924C9.04415 1.8203 8.99705 0.672155 8.99094 0.54437ZM8.32084 3.13357C8.07138 4.8539 7.53271 6.17026 6.76298 6.94041C6.13642 7.56731 5.30187 7.91263 4.413 7.91263C3.61231 7.91263 2.85562 7.63234 2.25543 7.11838L3.53163 5.8428L5.12444 6.07674C5.25291 6.07674 5.36545 5.98267 5.38488 5.8518C5.40631 5.70774 5.30695 5.57364 5.16289 5.55221L3.996 5.3787L4.89723 4.47789C5.00029 4.37496 5.00029 4.20804 4.89736 4.10504C4.79444 4.00204 4.62751 4.00198 4.52445 4.1049L3.62364 5.0053L3.45033 3.83862C3.42897 3.69456 3.29487 3.59514 3.15081 3.61656C3.00675 3.63792 2.90733 3.77202 2.92875 3.91608L3.15946 5.46934L1.88292 6.74519C1.37054 6.14493 1.09129 5.38886 1.09129 4.58899C1.09129 3.69985 1.43646 2.86482 2.06323 2.23771C2.83283 1.46763 4.14851 0.928686 5.86801 0.67909C6.74849 0.551305 7.53044 0.527204 7.9951 0.527204C8.23419 0.527204 8.3893 0.53359 8.43064 0.535513C8.4489 0.536405 8.46332 0.550756 8.46421 0.569021V0.569296C8.46655 0.617635 8.51866 1.76941 8.32084 3.13357Z\" fill=\"#93DB62\"/>\n</svg>";

var lowEnabled = "<svg width=\"9\" height=\"9\" viewBox=\"0 0 9 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M8.99094 0.54437C8.97727 0.253027 8.74732 0.0227255 8.45556 0.00871798C8.32846 0.00281281 7.17421 -0.0433984 5.79227 0.157171C4.98182 0.274793 4.24979 0.454832 3.61636 0.692342C2.816 0.992407 2.16795 1.38688 1.69025 1.86493C0.963913 2.5916 0.563942 3.55902 0.563942 4.58899C0.563942 5.52976 0.897652 6.41835 1.50884 7.119L0.0773163 8.54984C-0.0257492 8.65276 -0.0257492 8.81969 0.077179 8.92275C0.128677 8.97425 0.196175 9 0.263672 9C0.331101 9 0.398598 8.97425 0.450028 8.92282L1.88148 7.49213C2.58199 8.10516 3.47127 8.43997 4.413 8.43997C5.4427 8.43997 6.40977 8.03979 7.13597 7.31319C7.61367 6.83514 8.00794 6.18681 8.30786 5.38605C8.54517 4.75234 8.72514 4.01997 8.84269 3.20924C9.04415 1.8203 8.99705 0.672155 8.99094 0.54437ZM8.32084 3.13357C8.07138 4.8539 7.53271 6.17026 6.76298 6.94041C6.13642 7.56731 8.88886 5 8 5C7.1993 5 2.85562 7.63234 2.25543 7.11838L3.53163 5.8428L5.12444 6.07674C5.25291 6.07674 5.36545 5.98267 5.38488 5.8518C5.40631 5.70774 5.30695 5.57364 5.16289 5.55221L3.996 5.3787L4.89723 4.47789C5.00029 4.37496 5.00029 4.20804 4.89736 4.10504C4.79444 4.00204 4.62751 4.00198 4.52445 4.1049L3.996 3.61656L3.45033 3.83862C3.42897 3.69456 3.29487 3.59514 3.15081 3.61656C3.00675 3.63792 2.90733 3.77202 2.92875 3.91608L3.15946 5.46934L8.5 4.5C7.98763 3.89973 3 2.29987 3 1.5C3 0.610862 1.43646 2.86482 2.06323 2.23771C2.83283 1.46763 0.786632 7.56278 2.50613 7.31319C4.5 8 6.94253 6.07674 7.40719 6.07674C7.64628 6.07674 8.45866 4.49808 8.5 4.5C8.51826 4.50089 8.46332 0.550756 8.46421 0.569021C8.46655 0.617361 8.51866 1.76941 8.32084 3.13357Z\" fill=\"#93DB62\"/>\n</svg>";

var mid = "<svg width=\"8\" height=\"11\" viewBox=\"0 0 8 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.34636 6.33366H1.26367C1.09426 6.33366 0.935744 6.25014 0.839962 6.11039C0.744166 5.97061 0.723504 5.79265 0.784576 5.6347L0.784589 5.63467L2.54699 1.07838C2.547 1.07837 2.547 1.07837 2.547 1.07837C2.62354 0.88047 2.81388 0.75 3.02608 0.75H5.45119C5.62478 0.75 5.7866 0.837671 5.88144 0.983039L5.88148 0.983109C5.97624 1.12847 5.99126 1.3119 5.92126 1.47077C5.92126 1.47078 5.92126 1.47078 5.92126 1.47078L5.03221 3.4888H6.71289C6.90076 3.4888 7.07362 3.59137 7.16368 3.75621C7.25375 3.92107 7.24662 4.12196 7.14509 4.28004C7.14509 4.28005 7.14509 4.28005 7.14508 4.28005L3.46255 10.0139C3.36541 10.1651 3.20029 10.25 3.03021 10.25C2.96179 10.25 2.89259 10.2363 2.82691 10.208L3.34636 6.33366ZM3.34636 6.33366L2.53181 9.61243C2.4712 9.85638 2.59603 10.1084 2.82686 10.2079L3.34636 6.33366Z\" stroke=\"#FFC12E\" stroke-width=\"0.5\"/>\n</svg>";

var midEnabled = "<svg width=\"8\" height=\"11\" viewBox=\"0 0 8 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.34636 6.33366H1.26367C1.09426 6.33366 0.935744 6.25014 0.839962 6.11039C0.744166 5.97061 0.723504 5.79265 0.784576 5.6347L0.784589 5.63467L2.54699 1.07838C2.547 1.07837 2.547 1.07837 2.547 1.07837C2.62354 0.88047 2.81388 0.75 3.02608 0.75H5.45119C5.62478 0.75 5.7866 0.837671 5.88144 0.983039L5.88148 0.983109C5.97624 1.12847 5.99126 1.3119 5.92126 1.47077C5.92126 1.47078 5.92126 1.47078 5.92126 1.47078L5.03221 3.4888H6.71289C6.90076 3.4888 7.07362 3.59137 7.16368 3.75621C7.25375 3.92107 7.24662 4.12196 7.14509 4.28004C7.14509 4.28005 7.14509 4.28005 7.14508 4.28005L3.46255 10.0139C3.36541 10.1651 3.20029 10.25 3.03021 10.25C2.96179 10.25 2.89259 10.2363 2.82691 10.208L3.34636 6.33366ZM3.34636 6.33366L2.53181 9.61243C2.4712 9.85638 2.59603 10.1084 2.82686 10.2079L3.34636 6.33366Z\" fill=\"#FFC12E\" stroke=\"#FFC12E\" stroke-width=\"0.5\"/>\n</svg>";

var PowerProfileIcons = /*#__PURE__*/Object.freeze({
	__proto__: null,
	High: high,
	HighEnabled: highEnabled,
	Low: low,
	LowEnabled: lowEnabled,
	Medium: mid,
	MediumEnabled: midEnabled
});

var DropDown = function (_a) {
    var value = _a.value, data = _a.data, onChange = _a.onChange, variant = _a.variant;
    var _b = react.exports.useState(false), state = _b[0], setState = _b[1];
    var inputRef = react.exports.useRef(null);
    var listRef = react.exports.useRef(null);
    var nodeRef = react.exports.useRef(null);
    var _c = react.exports.useState(0), height = _c[0], setHeight = _c[1];
    react.exports.useEffect(function () {
        var _a;
        nodeRef.current = listRef === null || listRef === void 0 ? void 0 : listRef.current;
        var keyVal = (_a = listRef === null || listRef === void 0 ? void 0 : listRef.current) === null || _a === void 0 ? void 0 : _a.textContent;
        listRef.current && listRef.current.focus();
        var keyShort = function (e) {
            if (e.key === 'ArrowDown' && listRef.current.nextSibling) {
                listRef.current.nextSibling.focus();
                keyVal = listRef.current.nextSibling.textContent;
                listRef.current.nextSibling ? (listRef.current = listRef.current.nextSibling) : (listRef.current = nodeRef.current);
            }
            else if (e.key === 'ArrowUp' && listRef.current.previousSibling) {
                listRef.current = listRef.current.previousSibling;
                listRef.current.focus();
                keyVal = listRef.current.textContent;
            }
            else if (e.key === 'Enter') {
                onChange(keyVal);
                keyVal = '';
                inputRef.current.click();
                listRef.current = null;
            }
        };
        function measureHeight() {
            var viewportOffset = inputRef.current.getBoundingClientRect();
            setHeight(viewportOffset.top + 65);
        }
        variant === 'default' && measureHeight();
        state &&
            listRef.current &&
            Promise.resolve().then(function () {
                document.addEventListener('keydown', keyShort);
            });
        return function () {
            document.removeEventListener('keydown', keyShort);
        };
    }, [state]);
    //saves values onClick on list element
    var handleChange = function (e, item) {
        e.preventDefault();
        inputRef.current.click();
        listRef.current = null;
        onChange(item);
    };
    return (React.createElement("div", { className: 'w-100 relative' },
        variant === 'default' && (React.createElement("div", { className: 'default-dropDown cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white m-2-b', onClick: function () {
                setState(function (state) { return !state; });
            } },
            React.createElement("div", { className: 'selectInput cursor-pointer', ref: inputRef }, value),
            React.createElement("img", { src: DownArrow, className: state ? 'arrowUp' : 'arrowDown' }))),
        variant === 'icons' && (React.createElement("div", { className: 'icons-dropDown cursor-pointer p-5-lr text-h4 bg-transparent br-100 w-100 color-off-white', onClick: function () {
                setState(function (state) { return !state; });
            } },
            React.createElement("img", { src: PowerProfileIcons[value.ProfileEnabled], className: 'm-2-r', style: { width: '0.75rem', minHeight: ' 0.75rem' } }),
            React.createElement("div", { className: 'selectInput cursor-pointer', ref: inputRef }, value.profile),
            React.createElement("img", { src: DownArrow, className: (state ? 'arrowUp' : 'arrowDown') + ' m-2-l', style: { width: '0.75rem', minHeight: ' 0.75rem' } }))),
        state && React.createElement("div", { className: 'closeOptions cursor-pointer', onClick: function () { return setState(false); } }),
        variant === 'default' && state && (React.createElement("div", { className: 'dropDown absolute w-100 br-10', style: { maxHeight: "calc(100vh - ".concat(height, "px)") } }, Object.keys(data).map(function (item, i) {
            return (React.createElement("button", { ref: i === 0 ? listRef : null, key: item, className: 'options flex-row align-center justify-start p-5-lr p-2-b p-2-t w-100', onClick: function (e) { return handleChange(e, item); }, value: data[item] }, data[item]));
        }))),
        variant === 'icons' && state && (React.createElement("div", { className: 'dropDownIcons absolute w-100 br-10' }, Object.keys(data).map(function (item, i) {
            var pro = data[item];
            return (React.createElement("button", { className: 'optionsIcons flex-row align-center p-2-l br-10 relative w-100', style: { fontSize: '0.875rem', height: '2.275rem' }, onClick: function (e) { return handleChange(e, item); }, ref: i === 0 ? listRef : null },
                React.createElement("img", { src: pro.profile === value.profile ? PowerProfileIcons[pro.ProfileEnabled] : PowerProfileIcons[pro.profile], className: 'm-2-l', style: { width: '0.75rem', minHeight: ' 0.75rem' } }),
                React.createElement("div", { key: item, className: ' flex-row align-center p-5-lr p-2-b p-2-t w-100 bg-transparent' }, pro.profile)));
        }))),
        ' '));
};

var Label = function (_a) {
    var label = _a.label, className = _a.className;
    return (React.createElement("div", { className: 'w-100' },
        React.createElement("div", { className: 'flex-col ', style: { flex: '1' } },
            React.createElement("div", { className: "".concat(className) }, label))));
};

var styles = {"w-100":"styles-module_w-100__Ft5Ve","w-fit":"styles-module_w-fit__x4ZbY","h-100":"styles-module_h-100__PG4gh","h-fit":"styles-module_h-fit__igTnP","br-5":"styles-module_br-5__7hcRl","br-10":"styles-module_br-10__C-Z6y","br-15":"styles-module_br-15__k8XkK","br-33":"styles-module_br-33__3s-ZZ","br-50":"styles-module_br-50__T0XAh","br-100":"styles-module_br-100__kZYAO","br-1000":"styles-module_br-1000__5snWS","p-0":"styles-module_p-0__aDtj0","p-0-l":"styles-module_p-0-l__hd3sC","p-0-r":"styles-module_p-0-r__gty2P","p-0-t":"styles-module_p-0-t__07XTU","p-0-b":"styles-module_p-0-b__M-GGl","p-0-lr":"styles-module_p-0-lr__84Due","p-0-tb":"styles-module_p-0-tb__18Ouj","m-0":"styles-module_m-0__Tyln3","m-0-l":"styles-module_m-0-l__mRSbi","m-0-r":"styles-module_m-0-r__cHmbT","m-0-t":"styles-module_m-0-t__Z6-hK","m-0-b":"styles-module_m-0-b__we6dB","m-0-lr":"styles-module_m-0-lr__-Elxv","m-0-tb":"styles-module_m-0-tb__4-w1k","p-1":"styles-module_p-1__jt-Tl","p-1-l":"styles-module_p-1-l__xZekV","p-1-r":"styles-module_p-1-r__cLfaE","p-1-t":"styles-module_p-1-t__EP7lT","p-1-b":"styles-module_p-1-b__sogh7","p-1-lr":"styles-module_p-1-lr__Aamt6","p-1-tb":"styles-module_p-1-tb__aZKYw","m-1":"styles-module_m-1__wecxU","m-1-l":"styles-module_m-1-l__4xV33","m-1-r":"styles-module_m-1-r__-1Gab","m-1-t":"styles-module_m-1-t__Am9hk","m-1-b":"styles-module_m-1-b__nllun","m-1-lr":"styles-module_m-1-lr__kY2VF","m-1-tb":"styles-module_m-1-tb__PK43H","p-2":"styles-module_p-2__Nrqim","p-2-l":"styles-module_p-2-l__hG3JX","p-2-r":"styles-module_p-2-r__S9X7j","p-2-t":"styles-module_p-2-t__B8nYq","p-2-b":"styles-module_p-2-b__usQJg","p-2-lr":"styles-module_p-2-lr__mkJvx","p-2-tb":"styles-module_p-2-tb__S3du4","m-2":"styles-module_m-2__asmUG","m-2-l":"styles-module_m-2-l__aRcZm","m-2-r":"styles-module_m-2-r__PDXsx","m-2-t":"styles-module_m-2-t__U5JQY","m-2-b":"styles-module_m-2-b__FQR8E","m-2-lr":"styles-module_m-2-lr__aCkkv","m-2-tb":"styles-module_m-2-tb__LYWEE","p-3":"styles-module_p-3__bG75j","p-3-l":"styles-module_p-3-l__ndutS","p-3-r":"styles-module_p-3-r__kJK9N","p-3-t":"styles-module_p-3-t__PDvbR","p-3-b":"styles-module_p-3-b__l-o-3","p-3-lr":"styles-module_p-3-lr__Kj8Kp","p-3-tb":"styles-module_p-3-tb__FRYhg","m-3":"styles-module_m-3__6iJEE","m-3-l":"styles-module_m-3-l__E1vmK","m-3-r":"styles-module_m-3-r__WEkVY","m-3-t":"styles-module_m-3-t__-HY8r","m-3-b":"styles-module_m-3-b__2ft9H","m-3-lr":"styles-module_m-3-lr__VFzUa","m-3-tb":"styles-module_m-3-tb__W2XrY","p-4":"styles-module_p-4__5ZT4C","p-4-l":"styles-module_p-4-l__6t3aV","p-4-r":"styles-module_p-4-r__n4un1","p-4-t":"styles-module_p-4-t__-2xZV","p-4-b":"styles-module_p-4-b__w9gqf","p-4-lr":"styles-module_p-4-lr__gSo7B","p-4-tb":"styles-module_p-4-tb__Dh8sS","m-4":"styles-module_m-4__phms8","m-4-l":"styles-module_m-4-l__a3vVX","m-4-r":"styles-module_m-4-r__kji6E","m-4-t":"styles-module_m-4-t__cFCWH","m-4-b":"styles-module_m-4-b__AKOZO","m-4-lr":"styles-module_m-4-lr__fMetP","m-4-tb":"styles-module_m-4-tb__kx5vH","p-5":"styles-module_p-5__Aqh4R","p-5-l":"styles-module_p-5-l__LgKJ8","p-5-r":"styles-module_p-5-r__cwJjs","p-5-t":"styles-module_p-5-t__pZdqC","p-5-b":"styles-module_p-5-b__JOPSW","p-5-lr":"styles-module_p-5-lr__K6MuQ","p-5-tb":"styles-module_p-5-tb__StJyC","m-5":"styles-module_m-5__IUQuO","m-5-l":"styles-module_m-5-l__YQi-9","m-5-r":"styles-module_m-5-r__6SBIK","m-5-t":"styles-module_m-5-t__j9kG-","m-5-b":"styles-module_m-5-b__3Q4Ua","m-5-lr":"styles-module_m-5-lr__MpltH","m-5-tb":"styles-module_m-5-tb__UteKv","p-6":"styles-module_p-6__G3zaL","p-6-l":"styles-module_p-6-l__JE16w","p-6-r":"styles-module_p-6-r__jtH1D","p-6-t":"styles-module_p-6-t__2Y8Qd","p-6-b":"styles-module_p-6-b__ETNu7","p-6-lr":"styles-module_p-6-lr__rJz8A","p-6-tb":"styles-module_p-6-tb__H7xhz","m-6":"styles-module_m-6__eohtS","m-6-l":"styles-module_m-6-l__8Z9r0","m-6-r":"styles-module_m-6-r__smEY-","m-6-t":"styles-module_m-6-t__y9PFx","m-6-b":"styles-module_m-6-b__KILli","m-6-lr":"styles-module_m-6-lr__5I5vL","m-6-tb":"styles-module_m-6-tb__V6syi","p-7":"styles-module_p-7__u-B7g","p-7-l":"styles-module_p-7-l__Lj8LW","p-7-r":"styles-module_p-7-r__B0o6u","p-7-t":"styles-module_p-7-t__3Fj1G","p-7-b":"styles-module_p-7-b__6jZXC","p-7-lr":"styles-module_p-7-lr__W6nyF","p-7-tb":"styles-module_p-7-tb__ZXIWJ","m-7":"styles-module_m-7__vHx6A","m-7-l":"styles-module_m-7-l__0Kff6","m-7-r":"styles-module_m-7-r__GMeFW","m-7-t":"styles-module_m-7-t__aATqY","m-7-b":"styles-module_m-7-b__nkKrP","m-7-lr":"styles-module_m-7-lr__3fehu","m-7-tb":"styles-module_m-7-tb__OHUoL","p-8":"styles-module_p-8__alyWa","p-8-l":"styles-module_p-8-l__t51q7","p-8-r":"styles-module_p-8-r__FKnGD","p-8-t":"styles-module_p-8-t__yAF9j","p-8-b":"styles-module_p-8-b__5zyDD","p-8-lr":"styles-module_p-8-lr__aEWJu","p-8-tb":"styles-module_p-8-tb__J50J6","m-8":"styles-module_m-8__xwd3p","m-8-l":"styles-module_m-8-l__rcP3x","m-8-r":"styles-module_m-8-r__zO3gH","m-8-t":"styles-module_m-8-t__b6Ck-","m-8-b":"styles-module_m-8-b__R-yKr","m-8-lr":"styles-module_m-8-lr__wITFb","m-8-tb":"styles-module_m-8-tb__98VDr","p-9":"styles-module_p-9__TzXr0","p-9-l":"styles-module_p-9-l__cUqo7","p-9-r":"styles-module_p-9-r__PRj1I","p-9-t":"styles-module_p-9-t__eG1IQ","p-9-b":"styles-module_p-9-b__-rjVo","p-9-lr":"styles-module_p-9-lr__1-R1R","p-9-tb":"styles-module_p-9-tb__vKA7x","m-9":"styles-module_m-9__3G6cG","m-9-l":"styles-module_m-9-l__a0lwc","m-9-r":"styles-module_m-9-r__cRZ6i","m-9-t":"styles-module_m-9-t__nxhUC","m-9-b":"styles-module_m-9-b__r9EEG","m-9-lr":"styles-module_m-9-lr__5U3Rl","m-9-tb":"styles-module_m-9-tb__8BPA3","p-10":"styles-module_p-10__7pzta","p-10-l":"styles-module_p-10-l__ajCh4","p-10-r":"styles-module_p-10-r__WhZKo","p-10-t":"styles-module_p-10-t__J8zIt","p-10-b":"styles-module_p-10-b__mkk7k","p-10-lr":"styles-module_p-10-lr__o0Jjk","p-10-tb":"styles-module_p-10-tb__OqLTZ","m-10":"styles-module_m-10__F3RKN","m-10-l":"styles-module_m-10-l__82Kop","m-10-r":"styles-module_m-10-r__oCKNb","m-10-t":"styles-module_m-10-t__dW0ow","m-10-b":"styles-module_m-10-b__ubKhD","m-10-lr":"styles-module_m-10-lr__7rqi0","m-10-tb":"styles-module_m-10-tb__A0wps","color-white":"styles-module_color-white__phukm","bg-transparent":"styles-module_bg-transparent__HFRUA","unselected-option":"styles-module_unselected-option__bhCw0","bg-white":"styles-module_bg-white__1BxOE","bg-teal":"styles-module_bg-teal__6MAaz","bg-teal100":"styles-module_bg-teal100__5YLF-","bg-teal200":"styles-module_bg-teal200__8U-Ah","bg-teal300":"styles-module_bg-teal300__1y-m6","bg-grey100":"styles-module_bg-grey100__KF-XC","bg-grey200":"styles-module_bg-grey200__6Hw6-","bg-grey300":"styles-module_bg-grey300__ijgX8","bg-grey400":"styles-module_bg-grey400__orqe9","bg-grey500":"styles-module_bg-grey500__Um6At","bg-grey600":"styles-module_bg-grey600__iGWK9","bg-grey700":"styles-module_bg-grey700__eRxQx","bg-grey800":"styles-module_bg-grey800__ekYZY","bg-grey900":"styles-module_bg-grey900__CMCcZ","bg-red100":"styles-module_bg-red100__o1U-w","bg-red200":"styles-module_bg-red200__9qv1T","bg-yellow100":"styles-module_bg-yellow100__X6NiM","bg-yellow200":"styles-module_bg-yellow200__7ZNJj","text-font":"styles-module_text-font__oMMTr","text-h5":"styles-module_text-h5__dmEnj","text-h5-bold":"styles-module_text-h5-bold__aZSrt","text-h4":"styles-module_text-h4__rN6gf","text-h4-bold":"styles-module_text-h4-bold__94W5D","text-h3":"styles-module_text-h3__Ddcck","text-h3-bold":"styles-module_text-h3-bold__FLjFl","text-h2":"styles-module_text-h2__TfNvm","text-h2-bold":"styles-module_text-h2-bold__rPkjJ","text-h1":"styles-module_text-h1__HUulr","text-h1-bold":"styles-module_text-h1-bold__oJZ7x","text-bigtitle":"styles-module_text-bigtitle__2CQCX","text-bold":"styles-module_text-bold__AF-e5","text-ellipsis":"styles-module_text-ellipsis__LQShB","text-underline":"styles-module_text-underline__vEkg2","absolute":"styles-module_absolute__YJMUn","relative":"styles-module_relative__6mRol","fixed":"styles-module_fixed__VL1Hy","opacity-0":"styles-module_opacity-0__zEVU9","opacity-50":"styles-module_opacity-50__LVyAs","opacity-100":"styles-module_opacity-100__XYMvd","object-cover":"styles-module_object-cover__C3Ekc","object-contain":"styles-module_object-contain__LHITS","outline-none":"styles-module_outline-none__-f0Em","z-10":"styles-module_z-10__VI1Bd","z-index-1301":"styles-module_z-index-1301__0iAZv","cursor-pointer":"styles-module_cursor-pointer__-BG55","flex":"styles-module_flex__j3fJ0","flex-col":"styles-module_flex-col__8dsW6","flex-row":"styles-module_flex-row__2fcWD","align-start":"styles-module_align-start__Nmu4L","align-end":"styles-module_align-end__zXMuz","align-center":"styles-module_align-center__6QynO","justify-start":"styles-module_justify-start__PoWYk","justify-end":"styles-module_justify-end__2A8kQ","justify-center":"styles-module_justify-center__WHjzk","justify-between":"styles-module_justify-between__oFhNZ","justify-around":"styles-module_justify-around__SdGhj","justify-evenly":"styles-module_justify-evenly__kiULF","self-center":"styles-module_self-center__94z08","selected-option":"styles-module_selected-option__t277I","selected-option-extreme":"styles-module_selected-option-extreme__g-ymj"};

var PreferenceButton = function (_a) {
    var text = _a.text, className = _a.className, onClick = _a.onClick, index = _a.index;
    function handleClick() {
        onClick(index);
    }
    return (React.createElement("button", { key: text, className: "text-h5 color-white cursor-pointer p-1-tb p-5-lr m-4-r br-10 ".concat(styles[className]), onClick: handleClick }, text));
};

exports.Button = Button;
exports.Checkbox = Checkbox;
exports.DropDown = DropDown;
exports.Label = Label;
exports.PreferenceButton = PreferenceButton;
exports.Switch = Switch;
//# sourceMappingURL=index.js.map
