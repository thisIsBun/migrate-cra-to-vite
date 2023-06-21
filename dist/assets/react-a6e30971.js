import{o as J}from"./object-assign-b33fa8b7.js";import{g as W}from"./hoist-non-react-statics-459140a6.js";function Y(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var P={exports:{}},v={},w={exports:{}},u={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=J,y=60103,A=60106;u.Fragment=60107;u.StrictMode=60108;u.Profiler=60114;var F=60109,I=60110,D=60112;u.Suspense=60113;var L=60115,U=60116;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;y=p("react.element"),A=p("react.portal"),u.Fragment=p("react.fragment"),u.StrictMode=p("react.strict_mode"),u.Profiler=p("react.profiler"),F=p("react.provider"),I=p("react.context"),D=p("react.forward_ref"),u.Suspense=p("react.suspense"),L=p("react.memo"),U=p("react.lazy")}var O=typeof Symbol=="function"&&Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M={};function _(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||b}_.prototype.isReactComponent={};_.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")};_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function N(){}N.prototype=_.prototype;function R(e,t,r){this.props=e,this.context=t,this.refs=M,this.updater=r||b}var E=R.prototype=new N;E.constructor=R;S(E,_.prototype);E.isPureReactComponent=!0;var $={current:null},T=Object.prototype.hasOwnProperty,q={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,r){var n,o={},i=null,f=null;if(t!=null)for(n in t.ref!==void 0&&(f=t.ref),t.key!==void 0&&(i=""+t.key),t)T.call(t,n)&&!q.hasOwnProperty(n)&&(o[n]=t[n]);var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(n in c=e.defaultProps,c)o[n]===void 0&&(o[n]=c[n]);return{$$typeof:y,type:e,key:i,ref:f,props:o,_owner:$.current}}function K(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Q(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var x=/\/+/g;function g(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):t.toString(36)}function h(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case y:case A:f=!0}}if(f)return f=e,o=o(f),e=n===""?"."+g(f,0):n,Array.isArray(o)?(r="",e!=null&&(r=e.replace(x,"$&/")+"/"),h(o,t,r,"",function(l){return l})):o!=null&&(k(o)&&(o=K(o,r+(!o.key||f&&f.key===o.key?"":(""+o.key).replace(x,"$&/")+"/")+e)),t.push(o)),1;if(f=0,n=n===""?".":n+":",Array.isArray(e))for(var c=0;c<e.length;c++){i=e[c];var s=n+g(i,c);f+=h(i,t,r,s,o)}else if(s=G(e),typeof s=="function")for(e=s.call(e),c=0;!(i=e.next()).done;)i=i.value,s=n+g(i,c++),f+=h(i,t,r,s,o);else if(i==="object")throw t=""+e,Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return f}function m(e,t,r){if(e==null)return e;var n=[],o=0;return h(e,n,"","",function(i){return t.call(r,i,o++)}),n}function X(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(r){e._status===0&&(r=r.default,e._status=1,e._result=r)},function(r){e._status===0&&(e._status=2,e._result=r)})}if(e._status===1)return e._result;throw e._result}var z={current:null};function a(){var e=z.current;if(e===null)throw Error(d(321));return e}var Z={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:$,IsSomeRendererActing:{current:!1},assign:S};u.Children={map:m,forEach:function(e,t,r){m(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return m(e,function(){t++}),t},toArray:function(e){return m(e,function(t){return t})||[]},only:function(e){if(!k(e))throw Error(d(143));return e}};u.Component=_;u.PureComponent=R;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z;u.cloneElement=function(e,t,r){if(e==null)throw Error(d(267,e));var n=S({},e.props),o=e.key,i=e.ref,f=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,f=$.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)T.call(t,s)&&!q.hasOwnProperty(s)&&(n[s]=t[s]===void 0&&c!==void 0?c[s]:t[s])}var s=arguments.length-2;if(s===1)n.children=r;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];n.children=c}return{$$typeof:y,type:e.type,key:o,ref:i,props:n,_owner:f}};u.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:I,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:F,_context:e},e.Consumer=e};u.createElement=B;u.createFactory=function(e){var t=B.bind(null,e);return t.type=e,t};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:D,render:e}};u.isValidElement=k;u.lazy=function(e){return{$$typeof:U,_payload:{_status:-1,_result:e},_init:X}};u.memo=function(e,t){return{$$typeof:L,type:e,compare:t===void 0?null:t}};u.useCallback=function(e,t){return a().useCallback(e,t)};u.useContext=function(e,t){return a().useContext(e,t)};u.useDebugValue=function(){};u.useEffect=function(e,t){return a().useEffect(e,t)};u.useImperativeHandle=function(e,t,r){return a().useImperativeHandle(e,t,r)};u.useLayoutEffect=function(e,t){return a().useLayoutEffect(e,t)};u.useMemo=function(e,t){return a().useMemo(e,t)};u.useReducer=function(e,t,r){return a().useReducer(e,t,r)};u.useRef=function(e){return a().useRef(e)};u.useState=function(e){return a().useState(e)};u.version="17.0.2";w.exports=u;var j=w.exports;const ee=W(j),fe=Y({__proto__:null,default:ee},[j]);/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=j,V=60103;v.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var C=Symbol.for;V=C("react.element"),v.Fragment=C("react.fragment")}var re=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ne=Object.prototype.hasOwnProperty,oe={key:!0,ref:!0,__self:!0,__source:!0};function H(e,t,r){var n,o={},i=null,f=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(f=t.ref);for(n in t)ne.call(t,n)&&!oe.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:V,type:e,key:i,ref:f,props:o,_owner:re.current}}v.jsx=H;v.jsxs=H;P.exports=v;var se=P.exports;export{ee as R,fe as a,se as j,j as r};
