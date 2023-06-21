function uM(e,c){for(var a=0;a<c.length;a++){const r=c[a];if(typeof r!="string"&&!Array.isArray(r)){for(const t in r)if(t!=="default"&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();var r4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function x0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ji={exports:{}},b0={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var ln=Object.getOwnPropertySymbols,dM=Object.prototype.hasOwnProperty,mM=Object.prototype.propertyIsEnumerable;function hM(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function pM(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var c={},a=0;a<10;a++)c["_"+String.fromCharCode(a)]=a;var r=Object.getOwnPropertyNames(c).map(function(n){return c[n]});if(r.join("")!=="0123456789")return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach(function(n){t[n]=n}),Object.keys(Object.assign({},t)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Wi=pM()?Object.assign:function(e,c){for(var a,r=hM(e),t,n=1;n<arguments.length;n++){a=Object(arguments[n]);for(var i in a)dM.call(a,i)&&(r[i]=a[i]);if(ln){t=ln(a);for(var o=0;o<t.length;o++)mM.call(a,t[o])&&(r[t[o]]=a[t[o]])}}return r},qi={exports:{}},r2={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W7=Wi,J3=60103,Gi=60106;r2.Fragment=60107;r2.StrictMode=60108;r2.Profiler=60114;var Ki=60109,Yi=60110,Xi=60112;r2.Suspense=60113;var Qi=60115,Ji=60116;if(typeof Symbol=="function"&&Symbol.for){var M1=Symbol.for;J3=M1("react.element"),Gi=M1("react.portal"),r2.Fragment=M1("react.fragment"),r2.StrictMode=M1("react.strict_mode"),r2.Profiler=M1("react.profiler"),Ki=M1("react.provider"),Yi=M1("react.context"),Xi=M1("react.forward_ref"),r2.Suspense=M1("react.suspense"),Qi=M1("react.memo"),Ji=M1("react.lazy")}var fn=typeof Symbol=="function"&&Symbol.iterator;function vM(e){return e===null||typeof e!="object"?null:(e=fn&&e[fn]||e["@@iterator"],typeof e=="function"?e:null)}function S0(e){for(var c="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)c+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es={};function Z3(e,c,a){this.props=e,this.context=c,this.refs=es,this.updater=a||Zi}Z3.prototype.isReactComponent={};Z3.prototype.setState=function(e,c){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(S0(85));this.updater.enqueueSetState(this,e,c,"setState")};Z3.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cs(){}cs.prototype=Z3.prototype;function q7(e,c,a){this.props=e,this.context=c,this.refs=es,this.updater=a||Zi}var G7=q7.prototype=new cs;G7.constructor=q7;W7(G7,Z3.prototype);G7.isPureReactComponent=!0;var K7={current:null},as=Object.prototype.hasOwnProperty,rs={key:!0,ref:!0,__self:!0,__source:!0};function ts(e,c,a){var r,t={},n=null,i=null;if(c!=null)for(r in c.ref!==void 0&&(i=c.ref),c.key!==void 0&&(n=""+c.key),c)as.call(c,r)&&!rs.hasOwnProperty(r)&&(t[r]=c[r]);var o=arguments.length-2;if(o===1)t.children=a;else if(1<o){for(var f=Array(o),u=0;u<o;u++)f[u]=arguments[u+2];t.children=f}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)t[r]===void 0&&(t[r]=o[r]);return{$$typeof:J3,type:e,key:n,ref:i,props:t,_owner:K7.current}}function zM(e,c){return{$$typeof:J3,type:e.type,key:c,ref:e.ref,props:e.props,_owner:e._owner}}function Y7(e){return typeof e=="object"&&e!==null&&e.$$typeof===J3}function HM(e){var c={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return c[a]})}var un=/\/+/g;function W5(e,c){return typeof e=="object"&&e!==null&&e.key!=null?HM(""+e.key):c.toString(36)}function _8(e,c,a,r,t){var n=typeof e;(n==="undefined"||n==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(n){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case J3:case Gi:i=!0}}if(i)return i=e,t=t(i),e=r===""?"."+W5(i,0):r,Array.isArray(t)?(a="",e!=null&&(a=e.replace(un,"$&/")+"/"),_8(t,c,a,"",function(u){return u})):t!=null&&(Y7(t)&&(t=zM(t,a+(!t.key||i&&i.key===t.key?"":(""+t.key).replace(un,"$&/")+"/")+e)),c.push(t)),1;if(i=0,r=r===""?".":r+":",Array.isArray(e))for(var o=0;o<e.length;o++){n=e[o];var f=r+W5(n,o);i+=_8(n,c,a,f,t)}else if(f=vM(e),typeof f=="function")for(e=f.call(e),o=0;!(n=e.next()).done;)n=n.value,f=r+W5(n,o++),i+=_8(n,c,a,f,t);else if(n==="object")throw c=""+e,Error(S0(31,c==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":c));return i}function u8(e,c,a){if(e==null)return e;var r=[],t=0;return _8(e,r,"","",function(n){return c.call(a,n,t++)}),r}function gM(e){if(e._status===-1){var c=e._result;c=c(),e._status=0,e._result=c,c.then(function(a){e._status===0&&(a=a.default,e._status=1,e._result=a)},function(a){e._status===0&&(e._status=2,e._result=a)})}if(e._status===1)return e._result;throw e._result}var ns={current:null};function Z1(){var e=ns.current;if(e===null)throw Error(S0(321));return e}var VM={ReactCurrentDispatcher:ns,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:K7,IsSomeRendererActing:{current:!1},assign:W7};r2.Children={map:u8,forEach:function(e,c,a){u8(e,function(){c.apply(this,arguments)},a)},count:function(e){var c=0;return u8(e,function(){c++}),c},toArray:function(e){return u8(e,function(c){return c})||[]},only:function(e){if(!Y7(e))throw Error(S0(143));return e}};r2.Component=Z3;r2.PureComponent=q7;r2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=VM;r2.cloneElement=function(e,c,a){if(e==null)throw Error(S0(267,e));var r=W7({},e.props),t=e.key,n=e.ref,i=e._owner;if(c!=null){if(c.ref!==void 0&&(n=c.ref,i=K7.current),c.key!==void 0&&(t=""+c.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(f in c)as.call(c,f)&&!rs.hasOwnProperty(f)&&(r[f]=c[f]===void 0&&o!==void 0?o[f]:c[f])}var f=arguments.length-2;if(f===1)r.children=a;else if(1<f){o=Array(f);for(var u=0;u<f;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:J3,type:e.type,key:t,ref:n,props:r,_owner:i}};r2.createContext=function(e,c){return c===void 0&&(c=null),e={$$typeof:Yi,_calculateChangedBits:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:Ki,_context:e},e.Consumer=e};r2.createElement=ts;r2.createFactory=function(e){var c=ts.bind(null,e);return c.type=e,c};r2.createRef=function(){return{current:null}};r2.forwardRef=function(e){return{$$typeof:Xi,render:e}};r2.isValidElement=Y7;r2.lazy=function(e){return{$$typeof:Ji,_payload:{_status:-1,_result:e},_init:gM}};r2.memo=function(e,c){return{$$typeof:Qi,type:e,compare:c===void 0?null:c}};r2.useCallback=function(e,c){return Z1().useCallback(e,c)};r2.useContext=function(e,c){return Z1().useContext(e,c)};r2.useDebugValue=function(){};r2.useEffect=function(e,c){return Z1().useEffect(e,c)};r2.useImperativeHandle=function(e,c,a){return Z1().useImperativeHandle(e,c,a)};r2.useLayoutEffect=function(e,c){return Z1().useLayoutEffect(e,c)};r2.useMemo=function(e,c){return Z1().useMemo(e,c)};r2.useReducer=function(e,c,a){return Z1().useReducer(e,c,a)};r2.useRef=function(e){return Z1().useRef(e)};r2.useState=function(e){return Z1().useState(e)};r2.version="17.0.2";qi.exports=r2;var _=qi.exports;const e6=x0(_),Ac=uM({__proto__:null,default:e6},[_]);/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CM=_,is=60103;b0.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var dn=Symbol.for;is=dn("react.element"),b0.Fragment=dn("react.fragment")}var MM=CM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LM=Object.prototype.hasOwnProperty,wM={key:!0,ref:!0,__self:!0,__source:!0};function ss(e,c,a){var r,t={},n=null,i=null;a!==void 0&&(n=""+a),c.key!==void 0&&(n=""+c.key),c.ref!==void 0&&(i=c.ref);for(r in c)LM.call(c,r)&&!wM.hasOwnProperty(r)&&(t[r]=c[r]);if(e&&e.defaultProps)for(r in c=e.defaultProps,c)t[r]===void 0&&(t[r]=c[r]);return{$$typeof:is,type:e,key:n,ref:i,props:t,_owner:MM.current}}b0.jsx=ss;b0.jsxs=ss;ji.exports=b0;var j=ji.exports,os={exports:{}},V1={},ls={exports:{}},fs={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var c,a,r,t;if(typeof performance=="object"&&typeof performance.now=="function"){var n=performance;e.unstable_now=function(){return n.now()}}else{var i=Date,o=i.now();e.unstable_now=function(){return i.now()-o}}if(typeof window>"u"||typeof MessageChannel!="function"){var f=null,u=null,p=function(){if(f!==null)try{var R=e.unstable_now();f(!0,R),f=null}catch(b){throw setTimeout(p,0),b}};c=function(R){f!==null?setTimeout(c,0,R):(f=R,setTimeout(p,0))},a=function(R,b){u=setTimeout(R,b)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},t=e.unstable_forceFrameRate=function(){}}else{var g=window.setTimeout,H=window.clearTimeout;if(typeof console<"u"){var M=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof M!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var y=!1,L=null,m=-1,h=5,z=0;e.unstable_shouldYield=function(){return e.unstable_now()>=z},t=function(){},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<R?Math.floor(1e3/R):5};var V=new MessageChannel,C=V.port2;V.port1.onmessage=function(){if(L!==null){var R=e.unstable_now();z=R+h;try{L(!0,R)?C.postMessage(null):(y=!1,L=null)}catch(b){throw C.postMessage(null),b}}else y=!1},c=function(R){L=R,y||(y=!0,C.postMessage(null))},a=function(R,b){m=g(function(){R(e.unstable_now())},b)},r=function(){H(m),m=-1}}function N(R,b){var k=R.length;R.push(b);e:for(;;){var I=k-1>>>1,$=R[I];if($!==void 0&&0<D($,b))R[I]=b,R[k]=$,k=I;else break e}}function S(R){return R=R[0],R===void 0?null:R}function T(R){var b=R[0];if(b!==void 0){var k=R.pop();if(k!==b){R[0]=k;e:for(var I=0,$=R.length;I<$;){var w=2*(I+1)-1,Q=R[w],P=w+1,c2=R[P];if(Q!==void 0&&0>D(Q,k))c2!==void 0&&0>D(c2,Q)?(R[I]=c2,R[P]=k,I=P):(R[I]=Q,R[w]=k,I=w);else if(c2!==void 0&&0>D(c2,k))R[I]=c2,R[P]=k,I=P;else break e}}return b}return null}function D(R,b){var k=R.sortIndex-b.sortIndex;return k!==0?k:R.id-b.id}var A=[],B=[],v2=1,t2=null,Z=3,C2=!1,o2=!1,k2=!1;function y2(R){for(var b=S(B);b!==null;){if(b.callback===null)T(B);else if(b.startTime<=R)T(B),b.sortIndex=b.expirationTime,N(A,b);else break;b=S(B)}}function i2(R){if(k2=!1,y2(R),!o2)if(S(A)!==null)o2=!0,c(I2);else{var b=S(B);b!==null&&a(i2,b.startTime-R)}}function I2(R,b){o2=!1,k2&&(k2=!1,r()),C2=!0;var k=Z;try{for(y2(b),t2=S(A);t2!==null&&(!(t2.expirationTime>b)||R&&!e.unstable_shouldYield());){var I=t2.callback;if(typeof I=="function"){t2.callback=null,Z=t2.priorityLevel;var $=I(t2.expirationTime<=b);b=e.unstable_now(),typeof $=="function"?t2.callback=$:t2===S(A)&&T(A),y2(b)}else T(A);t2=S(A)}if(t2!==null)var w=!0;else{var Q=S(B);Q!==null&&a(i2,Q.startTime-b),w=!1}return w}finally{t2=null,Z=k,C2=!1}}var N2=t;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){o2||C2||(o2=!0,c(I2))},e.unstable_getCurrentPriorityLevel=function(){return Z},e.unstable_getFirstCallbackNode=function(){return S(A)},e.unstable_next=function(R){switch(Z){case 1:case 2:case 3:var b=3;break;default:b=Z}var k=Z;Z=b;try{return R()}finally{Z=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=N2,e.unstable_runWithPriority=function(R,b){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=Z;Z=R;try{return b()}finally{Z=k}},e.unstable_scheduleCallback=function(R,b,k){var I=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?I+k:I):k=I,R){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=k+$,R={id:v2++,callback:b,priorityLevel:R,startTime:k,expirationTime:$,sortIndex:-1},k>I?(R.sortIndex=k,N(B,R),S(A)===null&&R===S(B)&&(k2?r():k2=!0,a(i2,k-I))):(R.sortIndex=$,N(A,R),o2||C2||(o2=!0,c(I2))),R},e.unstable_wrapCallback=function(R){var b=Z;return function(){var k=Z;Z=b;try{return R.apply(this,arguments)}finally{Z=k}}}})(fs);ls.exports=fs;var yM=ls.exports;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=_,L2=Wi,O2=yM;function E(e){for(var c="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)c+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+c+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Pe)throw Error(E(227));var us=new Set,Z6={};function s3(e,c){j3(e,c),j3(e+"Capture",c)}function j3(e,c){for(Z6[e]=c,e=0;e<c.length;e++)us.add(c[e])}var K1=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mn=Object.prototype.hasOwnProperty,hn={},pn={};function bM(e){return mn.call(pn,e)?!0:mn.call(hn,e)?!1:xM.test(e)?pn[e]=!0:(hn[e]=!0,!1)}function SM(e,c,a,r){if(a!==null&&a.type===0)return!1;switch(typeof c){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kM(e,c,a,r){if(c===null||typeof c>"u"||SM(e,c,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!c;case 4:return c===!1;case 5:return isNaN(c);case 6:return isNaN(c)||1>c}return!1}function a1(e,c,a,r,t,n,i){this.acceptsBooleans=c===2||c===3||c===4,this.attributeName=r,this.attributeNamespace=t,this.mustUseProperty=a,this.propertyName=e,this.type=c,this.sanitizeURL=n,this.removeEmptyString=i}var K2={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K2[e]=new a1(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var c=e[0];K2[c]=new a1(c,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){K2[e]=new a1(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K2[e]=new a1(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K2[e]=new a1(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){K2[e]=new a1(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){K2[e]=new a1(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){K2[e]=new a1(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){K2[e]=new a1(e,5,!1,e.toLowerCase(),null,!1,!1)});var X7=/[\-:]([a-z])/g;function Q7(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var c=e.replace(X7,Q7);K2[c]=new a1(c,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var c=e.replace(X7,Q7);K2[c]=new a1(c,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var c=e.replace(X7,Q7);K2[c]=new a1(c,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){K2[e]=new a1(e,1,!1,e.toLowerCase(),null,!1,!1)});K2.xlinkHref=new a1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){K2[e]=new a1(e,1,!1,e.toLowerCase(),null,!0,!0)});function J7(e,c,a,r){var t=K2.hasOwnProperty(c)?K2[c]:null,n=t!==null?t.type===0:r?!1:!(!(2<c.length)||c[0]!=="o"&&c[0]!=="O"||c[1]!=="n"&&c[1]!=="N");n||(kM(c,a,t,r)&&(a=null),r||t===null?bM(c)&&(a===null?e.removeAttribute(c):e.setAttribute(c,""+a)):t.mustUseProperty?e[t.propertyName]=a===null?t.type===3?!1:"":a:(c=t.attributeName,r=t.attributeNamespace,a===null?e.removeAttribute(c):(t=t.type,a=t===3||t===4&&a===!0?"":""+a,r?e.setAttributeNS(r,c,a):e.setAttribute(c,a))))}var o3=Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,S6=60103,U4=60106,s4=60107,Z7=60108,R6=60114,ea=60109,ca=60110,_e=60112,D6=60113,Z8=60120,Ie=60115,aa=60116,ra=60121,ta=60128,ds=60129,na=60130,Tc=60131;if(typeof Symbol=="function"&&Symbol.for){var B2=Symbol.for;S6=B2("react.element"),U4=B2("react.portal"),s4=B2("react.fragment"),Z7=B2("react.strict_mode"),R6=B2("react.profiler"),ea=B2("react.provider"),ca=B2("react.context"),_e=B2("react.forward_ref"),D6=B2("react.suspense"),Z8=B2("react.suspense_list"),Ie=B2("react.memo"),aa=B2("react.lazy"),ra=B2("react.block"),B2("react.scope"),ta=B2("react.opaque.id"),ds=B2("react.debug_trace_mode"),na=B2("react.offscreen"),Tc=B2("react.legacy_hidden")}var vn=typeof Symbol=="function"&&Symbol.iterator;function v6(e){return e===null||typeof e!="object"?null:(e=vn&&e[vn]||e["@@iterator"],typeof e=="function"?e:null)}var q5;function k6(e){if(q5===void 0)try{throw Error()}catch(a){var c=a.stack.trim().match(/\n( *(at )?)/);q5=c&&c[1]||""}return`
`+q5+e}var G5=!1;function d8(e,c){if(!e||G5)return"";G5=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(c)if(c=function(){throw Error()},Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(f){var r=f}Reflect.construct(e,[],c)}else{try{c.call()}catch(f){r=f}e.call(c.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var t=f.stack.split(`
`),n=r.stack.split(`
`),i=t.length-1,o=n.length-1;1<=i&&0<=o&&t[i]!==n[o];)o--;for(;1<=i&&0<=o;i--,o--)if(t[i]!==n[o]){if(i!==1||o!==1)do if(i--,o--,0>o||t[i]!==n[o])return`
`+t[i].replace(" at new "," at ");while(1<=i&&0<=o);break}}}finally{G5=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?k6(e):""}function NM(e){switch(e.tag){case 5:return k6(e.type);case 16:return k6("Lazy");case 13:return k6("Suspense");case 19:return k6("SuspenseList");case 0:case 2:case 15:return e=d8(e.type,!1),e;case 11:return e=d8(e.type.render,!1),e;case 22:return e=d8(e.type._render,!1),e;case 1:return e=d8(e.type,!0),e;default:return""}}function N3(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s4:return"Fragment";case U4:return"Portal";case R6:return"Profiler";case Z7:return"StrictMode";case D6:return"Suspense";case Z8:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ca:return(e.displayName||"Context")+".Consumer";case ea:return(e._context.displayName||"Context")+".Provider";case _e:var c=e.render;return c=c.displayName||c.name||"",e.displayName||(c!==""?"ForwardRef("+c+")":"ForwardRef");case Ie:return N3(e.type);case ra:return N3(e._render);case aa:c=e._payload,e=e._init;try{return N3(e(c))}catch{}}return null}function b4(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function ms(e){var c=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(c==="checkbox"||c==="radio")}function AM(e){var c=ms(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,c),r=""+e[c];if(!e.hasOwnProperty(c)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var t=a.get,n=a.set;return Object.defineProperty(e,c,{configurable:!0,get:function(){return t.call(this)},set:function(i){r=""+i,n.call(this,i)}}),Object.defineProperty(e,c,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[c]}}}}function m8(e){e._valueTracker||(e._valueTracker=AM(e))}function hs(e){if(!e)return!1;var c=e._valueTracker;if(!c)return!0;var a=c.getValue(),r="";return e&&(r=ms(e)?e.checked?"true":"false":e.value),e=r,e!==a?(c.setValue(e),!0):!1}function ee(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ec(e,c){var a=c.checked;return L2({},c,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function zn(e,c){var a=c.defaultValue==null?"":c.defaultValue,r=c.checked!=null?c.checked:c.defaultChecked;a=b4(c.value!=null?c.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:c.type==="checkbox"||c.type==="radio"?c.checked!=null:c.value!=null}}function ps(e,c){c=c.checked,c!=null&&J7(e,"checked",c,!1)}function Pc(e,c){ps(e,c);var a=b4(c.value),r=c.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}c.hasOwnProperty("value")?_c(e,c.type,a):c.hasOwnProperty("defaultValue")&&_c(e,c.type,b4(c.defaultValue)),c.checked==null&&c.defaultChecked!=null&&(e.defaultChecked=!!c.defaultChecked)}function Hn(e,c,a){if(c.hasOwnProperty("value")||c.hasOwnProperty("defaultValue")){var r=c.type;if(!(r!=="submit"&&r!=="reset"||c.value!==void 0&&c.value!==null))return;c=""+e._wrapperState.initialValue,a||c===e.value||(e.value=c),e.defaultValue=c}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function _c(e,c,a){(c!=="number"||ee(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}function TM(e){var c="";return Pe.Children.forEach(e,function(a){a!=null&&(c+=a)}),c}function Ic(e,c){return e=L2({children:void 0},c),(c=TM(c.children))&&(e.children=c),e}function A3(e,c,a,r){if(e=e.options,c){c={};for(var t=0;t<a.length;t++)c["$"+a[t]]=!0;for(a=0;a<e.length;a++)t=c.hasOwnProperty("$"+e[a].value),e[a].selected!==t&&(e[a].selected=t),t&&r&&(e[a].defaultSelected=!0)}else{for(a=""+b4(a),c=null,t=0;t<e.length;t++){if(e[t].value===a){e[t].selected=!0,r&&(e[t].defaultSelected=!0);return}c!==null||e[t].disabled||(c=e[t])}c!==null&&(c.selected=!0)}}function Rc(e,c){if(c.dangerouslySetInnerHTML!=null)throw Error(E(91));return L2({},c,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function gn(e,c){var a=c.value;if(a==null){if(a=c.children,c=c.defaultValue,a!=null){if(c!=null)throw Error(E(92));if(Array.isArray(a)){if(!(1>=a.length))throw Error(E(93));a=a[0]}c=a}c==null&&(c=""),a=c}e._wrapperState={initialValue:b4(a)}}function vs(e,c){var a=b4(c.value),r=b4(c.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),c.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function Vn(e){var c=e.textContent;c===e._wrapperState.initialValue&&c!==""&&c!==null&&(e.value=c)}var Dc={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fc(e,c){return e==null||e==="http://www.w3.org/1999/xhtml"?zs(c):e==="http://www.w3.org/2000/svg"&&c==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var h8,Hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(c,a,r,t){MSApp.execUnsafeLocalFunction(function(){return e(c,a,r,t)})}:e}(function(e,c){if(e.namespaceURI!==Dc.svg||"innerHTML"in e)e.innerHTML=c;else{for(h8=h8||document.createElement("div"),h8.innerHTML="<svg>"+c.valueOf().toString()+"</svg>",c=h8.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;c.firstChild;)e.appendChild(c.firstChild)}});function e0(e,c){if(c){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=c;return}}e.textContent=c}var F6={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},EM=["Webkit","ms","Moz","O"];Object.keys(F6).forEach(function(e){EM.forEach(function(c){c=c+e.charAt(0).toUpperCase()+e.substring(1),F6[c]=F6[e]})});function gs(e,c,a){return c==null||typeof c=="boolean"||c===""?"":a||typeof c!="number"||c===0||F6.hasOwnProperty(e)&&F6[e]?(""+c).trim():c+"px"}function Vs(e,c){e=e.style;for(var a in c)if(c.hasOwnProperty(a)){var r=a.indexOf("--")===0,t=gs(a,c[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,t):e[a]=t}}var PM=L2({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bc(e,c){if(c){if(PM[e]&&(c.children!=null||c.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(c.dangerouslySetInnerHTML!=null){if(c.children!=null)throw Error(E(60));if(!(typeof c.dangerouslySetInnerHTML=="object"&&"__html"in c.dangerouslySetInnerHTML))throw Error(E(61))}if(c.style!=null&&typeof c.style!="object")throw Error(E(62))}}function Oc(e,c){if(e.indexOf("-")===-1)return typeof c.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ia(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $c=null,T3=null,E3=null;function Cn(e){if(e=N0(e)){if(typeof $c!="function")throw Error(E(280));var c=e.stateNode;c&&(c=$e(c),$c(e.stateNode,e.type,c))}}function Cs(e){T3?E3?E3.push(e):E3=[e]:T3=e}function Ms(){if(T3){var e=T3,c=E3;if(E3=T3=null,Cn(e),c)for(e=0;e<c.length;e++)Cn(c[e])}}function sa(e,c){return e(c)}function Ls(e,c,a,r,t){return e(c,a,r,t)}function oa(){}var ws=sa,j4=!1,K5=!1;function la(){(T3!==null||E3!==null)&&(oa(),Ms())}function _M(e,c,a){if(K5)return e(c,a);K5=!0;try{return ws(e,c,a)}finally{K5=!1,la()}}function c0(e,c){var a=e.stateNode;if(a===null)return null;var r=$e(a);if(r===null)return null;a=r[c];e:switch(c){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(E(231,c,typeof a));return a}var Uc=!1;if(K1)try{var z6={};Object.defineProperty(z6,"passive",{get:function(){Uc=!0}}),window.addEventListener("test",z6,z6),window.removeEventListener("test",z6,z6)}catch{Uc=!1}function IM(e,c,a,r,t,n,i,o,f){var u=Array.prototype.slice.call(arguments,3);try{c.apply(a,u)}catch(p){this.onError(p)}}var B6=!1,ce=null,ae=!1,jc=null,RM={onError:function(e){B6=!0,ce=e}};function DM(e,c,a,r,t,n,i,o,f){B6=!1,ce=null,IM.apply(RM,arguments)}function FM(e,c,a,r,t,n,i,o,f){if(DM.apply(this,arguments),B6){if(B6){var u=ce;B6=!1,ce=null}else throw Error(E(198));ae||(ae=!0,jc=u)}}function l3(e){var c=e,a=e;if(e.alternate)for(;c.return;)c=c.return;else{e=c;do c=e,c.flags&1026&&(a=c.return),e=c.return;while(e)}return c.tag===3?a:null}function ys(e){if(e.tag===13){var c=e.memoizedState;if(c===null&&(e=e.alternate,e!==null&&(c=e.memoizedState)),c!==null)return c.dehydrated}return null}function Mn(e){if(l3(e)!==e)throw Error(E(188))}function BM(e){var c=e.alternate;if(!c){if(c=l3(e),c===null)throw Error(E(188));return c!==e?null:e}for(var a=e,r=c;;){var t=a.return;if(t===null)break;var n=t.alternate;if(n===null){if(r=t.return,r!==null){a=r;continue}break}if(t.child===n.child){for(n=t.child;n;){if(n===a)return Mn(t),e;if(n===r)return Mn(t),c;n=n.sibling}throw Error(E(188))}if(a.return!==r.return)a=t,r=n;else{for(var i=!1,o=t.child;o;){if(o===a){i=!0,a=t,r=n;break}if(o===r){i=!0,r=t,a=n;break}o=o.sibling}if(!i){for(o=n.child;o;){if(o===a){i=!0,a=n,r=t;break}if(o===r){i=!0,r=n,a=t;break}o=o.sibling}if(!i)throw Error(E(189))}}if(a.alternate!==r)throw Error(E(190))}if(a.tag!==3)throw Error(E(188));return a.stateNode.current===a?e:c}function xs(e){if(e=BM(e),!e)return null;for(var c=e;;){if(c.tag===5||c.tag===6)return c;if(c.child)c.child.return=c,c=c.child;else{if(c===e)break;for(;!c.sibling;){if(!c.return||c.return===e)return null;c=c.return}c.sibling.return=c.return,c=c.sibling}}return null}function Ln(e,c){for(var a=e.alternate;c!==null;){if(c===e||c===a)return!0;c=c.return}return!1}var bs,fa,Ss,ks,Wc=!1,S1=[],p4=null,v4=null,z4=null,a0=new Map,r0=new Map,H6=[],wn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qc(e,c,a,r,t){return{blockedOn:e,domEventName:c,eventSystemFlags:a|16,nativeEvent:t,targetContainers:[r]}}function yn(e,c){switch(e){case"focusin":case"focusout":p4=null;break;case"dragenter":case"dragleave":v4=null;break;case"mouseover":case"mouseout":z4=null;break;case"pointerover":case"pointerout":a0.delete(c.pointerId);break;case"gotpointercapture":case"lostpointercapture":r0.delete(c.pointerId)}}function g6(e,c,a,r,t,n){return e===null||e.nativeEvent!==n?(e=qc(c,a,r,t,n),c!==null&&(c=N0(c),c!==null&&fa(c)),e):(e.eventSystemFlags|=r,c=e.targetContainers,t!==null&&c.indexOf(t)===-1&&c.push(t),e)}function OM(e,c,a,r,t){switch(c){case"focusin":return p4=g6(p4,e,c,a,r,t),!0;case"dragenter":return v4=g6(v4,e,c,a,r,t),!0;case"mouseover":return z4=g6(z4,e,c,a,r,t),!0;case"pointerover":var n=t.pointerId;return a0.set(n,g6(a0.get(n)||null,e,c,a,r,t)),!0;case"gotpointercapture":return n=t.pointerId,r0.set(n,g6(r0.get(n)||null,e,c,a,r,t)),!0}return!1}function $M(e){var c=W4(e.target);if(c!==null){var a=l3(c);if(a!==null){if(c=a.tag,c===13){if(c=ys(a),c!==null){e.blockedOn=c,ks(e.lanePriority,function(){O2.unstable_runWithPriority(e.priority,function(){Ss(a)})});return}}else if(c===3&&a.stateNode.hydrate){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function I8(e){if(e.blockedOn!==null)return!1;for(var c=e.targetContainers;0<c.length;){var a=ha(e.domEventName,e.eventSystemFlags,c[0],e.nativeEvent);if(a!==null)return c=N0(a),c!==null&&fa(c),e.blockedOn=a,!1;c.shift()}return!0}function xn(e,c,a){I8(e)&&a.delete(c)}function UM(){for(Wc=!1;0<S1.length;){var e=S1[0];if(e.blockedOn!==null){e=N0(e.blockedOn),e!==null&&bs(e);break}for(var c=e.targetContainers;0<c.length;){var a=ha(e.domEventName,e.eventSystemFlags,c[0],e.nativeEvent);if(a!==null){e.blockedOn=a;break}c.shift()}e.blockedOn===null&&S1.shift()}p4!==null&&I8(p4)&&(p4=null),v4!==null&&I8(v4)&&(v4=null),z4!==null&&I8(z4)&&(z4=null),a0.forEach(xn),r0.forEach(xn)}function V6(e,c){e.blockedOn===c&&(e.blockedOn=null,Wc||(Wc=!0,O2.unstable_scheduleCallback(O2.unstable_NormalPriority,UM)))}function Ns(e){function c(t){return V6(t,e)}if(0<S1.length){V6(S1[0],e);for(var a=1;a<S1.length;a++){var r=S1[a];r.blockedOn===e&&(r.blockedOn=null)}}for(p4!==null&&V6(p4,e),v4!==null&&V6(v4,e),z4!==null&&V6(z4,e),a0.forEach(c),r0.forEach(c),a=0;a<H6.length;a++)r=H6[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<H6.length&&(a=H6[0],a.blockedOn===null);)$M(a),a.blockedOn===null&&H6.shift()}function p8(e,c){var a={};return a[e.toLowerCase()]=c.toLowerCase(),a["Webkit"+e]="webkit"+c,a["Moz"+e]="moz"+c,a}var C3={animationend:p8("Animation","AnimationEnd"),animationiteration:p8("Animation","AnimationIteration"),animationstart:p8("Animation","AnimationStart"),transitionend:p8("Transition","TransitionEnd")},Y5={},As={};K1&&(As=document.createElement("div").style,"AnimationEvent"in window||(delete C3.animationend.animation,delete C3.animationiteration.animation,delete C3.animationstart.animation),"TransitionEvent"in window||delete C3.transitionend.transition);function Re(e){if(Y5[e])return Y5[e];if(!C3[e])return e;var c=C3[e],a;for(a in c)if(c.hasOwnProperty(a)&&a in As)return Y5[e]=c[a];return e}var Ts=Re("animationend"),Es=Re("animationiteration"),Ps=Re("animationstart"),_s=Re("transitionend"),Is=new Map,ua=new Map,jM=["abort","abort",Ts,"animationEnd",Es,"animationIteration",Ps,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",_s,"transitionEnd","waiting","waiting"];function da(e,c){for(var a=0;a<e.length;a+=2){var r=e[a],t=e[a+1];t="on"+(t[0].toUpperCase()+t.slice(1)),ua.set(r,c),Is.set(r,t),s3(t,[r])}}var WM=O2.unstable_now;WM();var h2=8;function H3(e){if(1&e)return h2=15,1;if(2&e)return h2=14,2;if(4&e)return h2=13,4;var c=24&e;return c!==0?(h2=12,c):e&32?(h2=11,32):(c=192&e,c!==0?(h2=10,c):e&256?(h2=9,256):(c=3584&e,c!==0?(h2=8,c):e&4096?(h2=7,4096):(c=4186112&e,c!==0?(h2=6,c):(c=62914560&e,c!==0?(h2=5,c):e&67108864?(h2=4,67108864):e&134217728?(h2=3,134217728):(c=805306368&e,c!==0?(h2=2,c):1073741824&e?(h2=1,1073741824):(h2=8,e))))))}function qM(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function GM(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(E(358,e))}}function t0(e,c){var a=e.pendingLanes;if(a===0)return h2=0;var r=0,t=0,n=e.expiredLanes,i=e.suspendedLanes,o=e.pingedLanes;if(n!==0)r=n,t=h2=15;else if(n=a&134217727,n!==0){var f=n&~i;f!==0?(r=H3(f),t=h2):(o&=n,o!==0&&(r=H3(o),t=h2))}else n=a&~i,n!==0?(r=H3(n),t=h2):o!==0&&(r=H3(o),t=h2);if(r===0)return 0;if(r=31-S4(r),r=a&((0>r?0:1<<r)<<1)-1,c!==0&&c!==r&&!(c&i)){if(H3(c),t<=h2)return c;h2=t}if(c=e.entangledLanes,c!==0)for(e=e.entanglements,c&=r;0<c;)a=31-S4(c),t=1<<a,r|=e[a],c&=~t;return r}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function re(e,c){switch(e){case 15:return 1;case 14:return 2;case 12:return e=g3(24&~c),e===0?re(10,c):e;case 10:return e=g3(192&~c),e===0?re(8,c):e;case 8:return e=g3(3584&~c),e===0&&(e=g3(4186112&~c),e===0&&(e=512)),e;case 2:return c=g3(805306368&~c),c===0&&(c=268435456),c}throw Error(E(358,e))}function g3(e){return e&-e}function X5(e){for(var c=[],a=0;31>a;a++)c.push(e);return c}function De(e,c,a){e.pendingLanes|=c;var r=c-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,c=31-S4(c),e[c]=a}var S4=Math.clz32?Math.clz32:XM,KM=Math.log,YM=Math.LN2;function XM(e){return e===0?32:31-(KM(e)/YM|0)|0}var QM=O2.unstable_UserBlockingPriority,JM=O2.unstable_runWithPriority,R8=!0;function ZM(e,c,a,r){j4||oa();var t=ma,n=j4;j4=!0;try{Ls(t,e,c,a,r)}finally{(j4=n)||la()}}function eL(e,c,a,r){JM(QM,ma.bind(null,e,c,a,r))}function ma(e,c,a,r){if(R8){var t;if((t=(c&4)===0)&&0<S1.length&&-1<wn.indexOf(e))e=qc(null,e,c,a,r),S1.push(e);else{var n=ha(e,c,a,r);if(n===null)t&&yn(e,r);else{if(t){if(-1<wn.indexOf(e)){e=qc(n,e,c,a,r),S1.push(e);return}if(OM(n,e,c,a,r))return;yn(e,r)}Xs(e,c,r,null,a)}}}}function ha(e,c,a,r){var t=ia(r);if(t=W4(t),t!==null){var n=l3(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=ys(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.hydrate)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Xs(e,c,r,t,a),null}var u4=null,pa=null,D8=null;function Ds(){if(D8)return D8;var e,c=pa,a=c.length,r,t="value"in u4?u4.value:u4.textContent,n=t.length;for(e=0;e<a&&c[e]===t[e];e++);var i=a-e;for(r=1;r<=i&&c[a-r]===t[n-r];r++);return D8=t.slice(e,1<r?1-r:void 0)}function F8(e){var c=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&c===13&&(e=13)):e=c,e===10&&(e=13),32<=e||e===13?e:0}function v8(){return!0}function bn(){return!1}function f1(e){function c(a,r,t,n,i){this._reactName=a,this._targetInst=t,this.type=r,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(n):n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?v8:bn,this.isPropagationStopped=bn,this}return L2(c.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=v8)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=v8)},persist:function(){},isPersistent:v8}),c}var c6={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=f1(c6),k0=L2({},c6,{view:0,detail:0}),cL=f1(k0),Q5,J5,C6,Fe=L2({},k0,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==C6&&(C6&&e.type==="mousemove"?(Q5=e.screenX-C6.screenX,J5=e.screenY-C6.screenY):J5=Q5=0,C6=e),Q5)},movementY:function(e){return"movementY"in e?e.movementY:J5}}),Sn=f1(Fe),aL=L2({},Fe,{dataTransfer:0}),rL=f1(aL),tL=L2({},k0,{relatedTarget:0}),Z5=f1(tL),nL=L2({},c6,{animationName:0,elapsedTime:0,pseudoElement:0}),iL=f1(nL),sL=L2({},c6,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oL=f1(sL),lL=L2({},c6,{data:0}),kn=f1(lL),fL={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uL={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dL={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mL(e){var c=this.nativeEvent;return c.getModifierState?c.getModifierState(e):(e=dL[e])?!!c[e]:!1}function za(){return mL}var hL=L2({},k0,{key:function(e){if(e.key){var c=fL[e.key]||e.key;if(c!=="Unidentified")return c}return e.type==="keypress"?(e=F8(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uL[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?F8(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?F8(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pL=f1(hL),vL=L2({},Fe,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nn=f1(vL),zL=L2({},k0,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),HL=f1(zL),gL=L2({},c6,{propertyName:0,elapsedTime:0,pseudoElement:0}),VL=f1(gL),CL=L2({},Fe,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ML=f1(CL),LL=[9,13,27,32],Ha=K1&&"CompositionEvent"in window,O6=null;K1&&"documentMode"in document&&(O6=document.documentMode);var wL=K1&&"TextEvent"in window&&!O6,Fs=K1&&(!Ha||O6&&8<O6&&11>=O6),An=String.fromCharCode(32),Tn=!1;function Bs(e,c){switch(e){case"keyup":return LL.indexOf(c.keyCode)!==-1;case"keydown":return c.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Os(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var M3=!1;function yL(e,c){switch(e){case"compositionend":return Os(c);case"keypress":return c.which!==32?null:(Tn=!0,An);case"textInput":return e=c.data,e===An&&Tn?null:e;default:return null}}function xL(e,c){if(M3)return e==="compositionend"||!Ha&&Bs(e,c)?(e=Ds(),D8=pa=u4=null,M3=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(c.ctrlKey||c.altKey||c.metaKey)||c.ctrlKey&&c.altKey){if(c.char&&1<c.char.length)return c.char;if(c.which)return String.fromCharCode(c.which)}return null;case"compositionend":return Fs&&c.locale!=="ko"?null:c.data;default:return null}}var bL={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function En(e){var c=e&&e.nodeName&&e.nodeName.toLowerCase();return c==="input"?!!bL[e.type]:c==="textarea"}function $s(e,c,a,r){Cs(r),c=te(c,"onChange"),0<c.length&&(a=new va("onChange","change",null,a,r),e.push({event:a,listeners:c}))}var $6=null,n0=null;function SL(e){Gs(e,0)}function Be(e){var c=w3(e);if(hs(c))return e}function kL(e,c){if(e==="change")return c}var Us=!1;if(K1){var ec;if(K1){var cc="oninput"in document;if(!cc){var Pn=document.createElement("div");Pn.setAttribute("oninput","return;"),cc=typeof Pn.oninput=="function"}ec=cc}else ec=!1;Us=ec&&(!document.documentMode||9<document.documentMode)}function _n(){$6&&($6.detachEvent("onpropertychange",js),n0=$6=null)}function js(e){if(e.propertyName==="value"&&Be(n0)){var c=[];if($s(c,n0,e,ia(e)),e=SL,j4)e(c);else{j4=!0;try{sa(e,c)}finally{j4=!1,la()}}}}function NL(e,c,a){e==="focusin"?(_n(),$6=c,n0=a,$6.attachEvent("onpropertychange",js)):e==="focusout"&&_n()}function AL(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Be(n0)}function TL(e,c){if(e==="click")return Be(c)}function EL(e,c){if(e==="input"||e==="change")return Be(c)}function PL(e,c){return e===c&&(e!==0||1/e===1/c)||e!==e&&c!==c}var h1=typeof Object.is=="function"?Object.is:PL,_L=Object.prototype.hasOwnProperty;function i0(e,c){if(h1(e,c))return!0;if(typeof e!="object"||e===null||typeof c!="object"||c===null)return!1;var a=Object.keys(e),r=Object.keys(c);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++)if(!_L.call(c,a[r])||!h1(e[a[r]],c[a[r]]))return!1;return!0}function In(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rn(e,c){var a=In(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=c&&r>=c)return{node:a,offset:c-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=In(a)}}function Ws(e,c){return e&&c?e===c?!0:e&&e.nodeType===3?!1:c&&c.nodeType===3?Ws(e,c.parentNode):"contains"in e?e.contains(c):e.compareDocumentPosition?!!(e.compareDocumentPosition(c)&16):!1:!1}function Dn(){for(var e=window,c=ee();c instanceof e.HTMLIFrameElement;){try{var a=typeof c.contentWindow.location.href=="string"}catch{a=!1}if(a)e=c.contentWindow;else break;c=ee(e.document)}return c}function Gc(e){var c=e&&e.nodeName&&e.nodeName.toLowerCase();return c&&(c==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||c==="textarea"||e.contentEditable==="true")}var IL=K1&&"documentMode"in document&&11>=document.documentMode,L3=null,Kc=null,U6=null,Yc=!1;function Fn(e,c,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||L3==null||L3!==ee(r)||(r=L3,"selectionStart"in r&&Gc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),U6&&i0(U6,r)||(U6=r,r=te(Kc,"onSelect"),0<r.length&&(c=new va("onSelect","select",null,c,a),e.push({event:c,listeners:r}),c.target=L3)))}da("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);da("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);da(jM,2);for(var Bn="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ac=0;ac<Bn.length;ac++)ua.set(Bn[ac],0);j3("onMouseEnter",["mouseout","mouseover"]);j3("onMouseLeave",["mouseout","mouseover"]);j3("onPointerEnter",["pointerout","pointerover"]);j3("onPointerLeave",["pointerout","pointerover"]);s3("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));s3("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));s3("onBeforeInput",["compositionend","keypress","textInput","paste"]);s3("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));s3("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));s3("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var N6="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qs=new Set("cancel close invalid load scroll toggle".split(" ").concat(N6));function On(e,c,a){var r=e.type||"unknown-event";e.currentTarget=a,FM(r,c,void 0,e),e.currentTarget=null}function Gs(e,c){c=(c&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],t=r.event;r=r.listeners;e:{var n=void 0;if(c)for(var i=r.length-1;0<=i;i--){var o=r[i],f=o.instance,u=o.currentTarget;if(o=o.listener,f!==n&&t.isPropagationStopped())break e;On(t,o,u),n=f}else for(i=0;i<r.length;i++){if(o=r[i],f=o.instance,u=o.currentTarget,o=o.listener,f!==n&&t.isPropagationStopped())break e;On(t,o,u),n=f}}}if(ae)throw e=jc,ae=!1,jc=null,e}function z2(e,c){var a=Js(c),r=e+"__bubble";a.has(r)||(Ys(c,e,2,!1),a.add(r))}var $n="_reactListening"+Math.random().toString(36).slice(2);function Ks(e){e[$n]||(e[$n]=!0,us.forEach(function(c){qs.has(c)||Un(c,!1,e,null),Un(c,!0,e,null)}))}function Un(e,c,a,r){var t=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,n=a;if(e==="selectionchange"&&a.nodeType!==9&&(n=a.ownerDocument),r!==null&&!c&&qs.has(e)){if(e!=="scroll")return;t|=2,n=r}var i=Js(n),o=e+"__"+(c?"capture":"bubble");i.has(o)||(c&&(t|=4),Ys(n,e,t,c),i.add(o))}function Ys(e,c,a,r){var t=ua.get(c);switch(t===void 0?2:t){case 0:t=ZM;break;case 1:t=eL;break;default:t=ma}a=t.bind(null,c,a,e),t=void 0,!Uc||c!=="touchstart"&&c!=="touchmove"&&c!=="wheel"||(t=!0),r?t!==void 0?e.addEventListener(c,a,{capture:!0,passive:t}):e.addEventListener(c,a,!0):t!==void 0?e.addEventListener(c,a,{passive:t}):e.addEventListener(c,a,!1)}function Xs(e,c,a,r,t){var n=r;if(!(c&1)&&!(c&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var o=r.stateNode.containerInfo;if(o===t||o.nodeType===8&&o.parentNode===t)break;if(i===4)for(i=r.return;i!==null;){var f=i.tag;if((f===3||f===4)&&(f=i.stateNode.containerInfo,f===t||f.nodeType===8&&f.parentNode===t))return;i=i.return}for(;o!==null;){if(i=W4(o),i===null)return;if(f=i.tag,f===5||f===6){r=n=i;continue e}o=o.parentNode}}r=r.return}_M(function(){var u=n,p=ia(a),g=[];e:{var H=Is.get(e);if(H!==void 0){var M=va,y=e;switch(e){case"keypress":if(F8(a)===0)break e;case"keydown":case"keyup":M=pL;break;case"focusin":y="focus",M=Z5;break;case"focusout":y="blur",M=Z5;break;case"beforeblur":case"afterblur":M=Z5;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Sn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=rL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=HL;break;case Ts:case Es:case Ps:M=iL;break;case _s:M=VL;break;case"scroll":M=cL;break;case"wheel":M=ML;break;case"copy":case"cut":case"paste":M=oL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Nn}var L=(c&4)!==0,m=!L&&e==="scroll",h=L?H!==null?H+"Capture":null:H;L=[];for(var z=u,V;z!==null;){V=z;var C=V.stateNode;if(V.tag===5&&C!==null&&(V=C,h!==null&&(C=c0(z,h),C!=null&&L.push(s0(z,C,V)))),m)break;z=z.return}0<L.length&&(H=new M(H,y,null,a,p),g.push({event:H,listeners:L}))}}if(!(c&7)){e:{if(H=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",H&&!(c&16)&&(y=a.relatedTarget||a.fromElement)&&(W4(y)||y[a6]))break e;if((M||H)&&(H=p.window===p?p:(H=p.ownerDocument)?H.defaultView||H.parentWindow:window,M?(y=a.relatedTarget||a.toElement,M=u,y=y?W4(y):null,y!==null&&(m=l3(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(M=null,y=u),M!==y)){if(L=Sn,C="onMouseLeave",h="onMouseEnter",z="mouse",(e==="pointerout"||e==="pointerover")&&(L=Nn,C="onPointerLeave",h="onPointerEnter",z="pointer"),m=M==null?H:w3(M),V=y==null?H:w3(y),H=new L(C,z+"leave",M,a,p),H.target=m,H.relatedTarget=V,C=null,W4(p)===u&&(L=new L(h,z+"enter",y,a,p),L.target=V,L.relatedTarget=m,C=L),m=C,M&&y)c:{for(L=M,h=y,z=0,V=L;V;V=z3(V))z++;for(V=0,C=h;C;C=z3(C))V++;for(;0<z-V;)L=z3(L),z--;for(;0<V-z;)h=z3(h),V--;for(;z--;){if(L===h||h!==null&&L===h.alternate)break c;L=z3(L),h=z3(h)}L=null}else L=null;M!==null&&jn(g,H,M,L,!1),y!==null&&m!==null&&jn(g,m,y,L,!0)}}e:{if(H=u?w3(u):window,M=H.nodeName&&H.nodeName.toLowerCase(),M==="select"||M==="input"&&H.type==="file")var N=kL;else if(En(H))if(Us)N=EL;else{N=AL;var S=NL}else(M=H.nodeName)&&M.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(N=TL);if(N&&(N=N(e,u))){$s(g,N,a,p);break e}S&&S(e,H,u),e==="focusout"&&(S=H._wrapperState)&&S.controlled&&H.type==="number"&&_c(H,"number",H.value)}switch(S=u?w3(u):window,e){case"focusin":(En(S)||S.contentEditable==="true")&&(L3=S,Kc=u,U6=null);break;case"focusout":U6=Kc=L3=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,Fn(g,a,p);break;case"selectionchange":if(IL)break;case"keydown":case"keyup":Fn(g,a,p)}var T;if(Ha)e:{switch(e){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else M3?Bs(e,a)&&(D="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(D="onCompositionStart");D&&(Fs&&a.locale!=="ko"&&(M3||D!=="onCompositionStart"?D==="onCompositionEnd"&&M3&&(T=Ds()):(u4=p,pa="value"in u4?u4.value:u4.textContent,M3=!0)),S=te(u,D),0<S.length&&(D=new kn(D,e,null,a,p),g.push({event:D,listeners:S}),T?D.data=T:(T=Os(a),T!==null&&(D.data=T)))),(T=wL?yL(e,a):xL(e,a))&&(u=te(u,"onBeforeInput"),0<u.length&&(p=new kn("onBeforeInput","beforeinput",null,a,p),g.push({event:p,listeners:u}),p.data=T))}Gs(g,c)})}function s0(e,c,a){return{instance:e,listener:c,currentTarget:a}}function te(e,c){for(var a=c+"Capture",r=[];e!==null;){var t=e,n=t.stateNode;t.tag===5&&n!==null&&(t=n,n=c0(e,a),n!=null&&r.unshift(s0(e,n,t)),n=c0(e,c),n!=null&&r.push(s0(e,n,t))),e=e.return}return r}function z3(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jn(e,c,a,r,t){for(var n=c._reactName,i=[];a!==null&&a!==r;){var o=a,f=o.alternate,u=o.stateNode;if(f!==null&&f===r)break;o.tag===5&&u!==null&&(o=u,t?(f=c0(a,n),f!=null&&i.unshift(s0(a,f,o))):t||(f=c0(a,n),f!=null&&i.push(s0(a,f,o)))),a=a.return}i.length!==0&&e.push({event:c,listeners:i})}function ne(){}var rc=null,tc=null;function Qs(e,c){switch(e){case"button":case"input":case"select":case"textarea":return!!c.autoFocus}return!1}function Xc(e,c){return e==="textarea"||e==="option"||e==="noscript"||typeof c.children=="string"||typeof c.children=="number"||typeof c.dangerouslySetInnerHTML=="object"&&c.dangerouslySetInnerHTML!==null&&c.dangerouslySetInnerHTML.__html!=null}var Wn=typeof setTimeout=="function"?setTimeout:void 0,RL=typeof clearTimeout=="function"?clearTimeout:void 0;function ga(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function P3(e){for(;e!=null;e=e.nextSibling){var c=e.nodeType;if(c===1||c===3)break}return e}function qn(e){e=e.previousSibling;for(var c=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(c===0)return e;c--}else a==="/$"&&c++}e=e.previousSibling}return null}var nc=0;function DL(e){return{$$typeof:ta,toString:e,valueOf:e}}var Oe=Math.random().toString(36).slice(2),d4="__reactFiber$"+Oe,ie="__reactProps$"+Oe,a6="__reactContainer$"+Oe,Gn="__reactEvents$"+Oe;function W4(e){var c=e[d4];if(c)return c;for(var a=e.parentNode;a;){if(c=a[a6]||a[d4]){if(a=c.alternate,c.child!==null||a!==null&&a.child!==null)for(e=qn(e);e!==null;){if(a=e[d4])return a;e=qn(e)}return c}e=a,a=e.parentNode}return null}function N0(e){return e=e[d4]||e[a6],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function w3(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function $e(e){return e[ie]||null}function Js(e){var c=e[Gn];return c===void 0&&(c=e[Gn]=new Set),c}var Qc=[],y3=-1;function _4(e){return{current:e}}function g2(e){0>y3||(e.current=Qc[y3],Qc[y3]=null,y3--)}function S2(e,c){y3++,Qc[y3]=e.current,e.current=c}var k4={},Z2=_4(k4),i1=_4(!1),Z4=k4;function W3(e,c){var a=e.type.contextTypes;if(!a)return k4;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===c)return r.__reactInternalMemoizedMaskedChildContext;var t={},n;for(n in a)t[n]=c[n];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=t),t}function s1(e){return e=e.childContextTypes,e!=null}function se(){g2(i1),g2(Z2)}function Kn(e,c,a){if(Z2.current!==k4)throw Error(E(168));S2(Z2,c),S2(i1,a)}function Zs(e,c,a){var r=e.stateNode;if(e=c.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var t in r)if(!(t in e))throw Error(E(108,N3(c)||"Unknown",t));return L2({},a,r)}function B8(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||k4,Z4=Z2.current,S2(Z2,e),S2(i1,i1.current),!0}function Yn(e,c,a){var r=e.stateNode;if(!r)throw Error(E(169));a?(e=Zs(e,c,Z4),r.__reactInternalMemoizedMergedChildContext=e,g2(i1),g2(Z2),S2(Z2,e)):g2(i1),S2(i1,a)}var Va=null,Q4=null,FL=O2.unstable_runWithPriority,Ca=O2.unstable_scheduleCallback,Jc=O2.unstable_cancelCallback,BL=O2.unstable_shouldYield,Xn=O2.unstable_requestPaint,Zc=O2.unstable_now,OL=O2.unstable_getCurrentPriorityLevel,Ue=O2.unstable_ImmediatePriority,eo=O2.unstable_UserBlockingPriority,co=O2.unstable_NormalPriority,ao=O2.unstable_LowPriority,ro=O2.unstable_IdlePriority,ic={},$L=Xn!==void 0?Xn:function(){},D1=null,O8=null,sc=!1,Qn=Zc(),Q2=1e4>Qn?Zc:function(){return Zc()-Qn};function q3(){switch(OL()){case Ue:return 99;case eo:return 98;case co:return 97;case ao:return 96;case ro:return 95;default:throw Error(E(332))}}function to(e){switch(e){case 99:return Ue;case 98:return eo;case 97:return co;case 96:return ao;case 95:return ro;default:throw Error(E(332))}}function e3(e,c){return e=to(e),FL(e,c)}function o0(e,c,a){return e=to(e),Ca(e,c,a)}function I1(){if(O8!==null){var e=O8;O8=null,Jc(e)}no()}function no(){if(!sc&&D1!==null){sc=!0;var e=0;try{var c=D1;e3(99,function(){for(;e<c.length;e++){var a=c[e];do a=a(!0);while(a!==null)}}),D1=null}catch(a){throw D1!==null&&(D1=D1.slice(e+1)),Ca(Ue,I1),a}finally{sc=!1}}}var UL=o3.ReactCurrentBatchConfig;function L1(e,c){if(e&&e.defaultProps){c=L2({},c),e=e.defaultProps;for(var a in e)c[a]===void 0&&(c[a]=e[a]);return c}return c}var oe=_4(null),le=null,x3=null,fe=null;function Ma(){fe=x3=le=null}function La(e){var c=oe.current;g2(oe),e.type._context._currentValue=c}function io(e,c){for(;e!==null;){var a=e.alternate;if((e.childLanes&c)===c){if(a===null||(a.childLanes&c)===c)break;a.childLanes|=c}else e.childLanes|=c,a!==null&&(a.childLanes|=c);e=e.return}}function _3(e,c){le=e,fe=x3=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&c&&(w1=!0),e.firstContext=null)}function z1(e,c){if(fe!==e&&c!==!1&&c!==0)if((typeof c!="number"||c===1073741823)&&(fe=e,c=1073741823),c={context:e,observedBits:c,next:null},x3===null){if(le===null)throw Error(E(308));x3=c,le.dependencies={lanes:0,firstContext:c,responders:null}}else x3=x3.next=c;return e._currentValue}var i4=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function so(e,c){e=e.updateQueue,c.updateQueue===e&&(c.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function H4(e,c){return{eventTime:e,lane:c,tag:0,payload:null,callback:null,next:null}}function g4(e,c){if(e=e.updateQueue,e!==null){e=e.shared;var a=e.pending;a===null?c.next=c:(c.next=a.next,a.next=c),e.pending=c}}function Jn(e,c){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var t=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var i={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};n===null?t=n=i:n=n.next=i,a=a.next}while(a!==null);n===null?t=n=c:n=n.next=c}else t=n=c;a={baseState:r.baseState,firstBaseUpdate:t,lastBaseUpdate:n,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=c:e.next=c,a.lastBaseUpdate=c}function l0(e,c,a,r){var t=e.updateQueue;i4=!1;var n=t.firstBaseUpdate,i=t.lastBaseUpdate,o=t.shared.pending;if(o!==null){t.shared.pending=null;var f=o,u=f.next;f.next=null,i===null?n=u:i.next=u,i=f;var p=e.alternate;if(p!==null){p=p.updateQueue;var g=p.lastBaseUpdate;g!==i&&(g===null?p.firstBaseUpdate=u:g.next=u,p.lastBaseUpdate=f)}}if(n!==null){g=t.baseState,i=0,p=u=f=null;do{o=n.lane;var H=n.eventTime;if((r&o)===o){p!==null&&(p=p.next={eventTime:H,lane:0,tag:n.tag,payload:n.payload,callback:n.callback,next:null});e:{var M=e,y=n;switch(o=c,H=a,y.tag){case 1:if(M=y.payload,typeof M=="function"){g=M.call(H,g,o);break e}g=M;break e;case 3:M.flags=M.flags&-4097|64;case 0:if(M=y.payload,o=typeof M=="function"?M.call(H,g,o):M,o==null)break e;g=L2({},g,o);break e;case 2:i4=!0}}n.callback!==null&&(e.flags|=32,o=t.effects,o===null?t.effects=[n]:o.push(n))}else H={eventTime:H,lane:o,tag:n.tag,payload:n.payload,callback:n.callback,next:null},p===null?(u=p=H,f=g):p=p.next=H,i|=o;if(n=n.next,n===null){if(o=t.shared.pending,o===null)break;n=o.next,o.next=null,t.lastBaseUpdate=o,t.shared.pending=null}}while(1);p===null&&(f=g),t.baseState=f,t.firstBaseUpdate=u,t.lastBaseUpdate=p,T0|=i,e.lanes=i,e.memoizedState=g}}function Zn(e,c,a){if(e=c.effects,c.effects=null,e!==null)for(c=0;c<e.length;c++){var r=e[c],t=r.callback;if(t!==null){if(r.callback=null,r=a,typeof t!="function")throw Error(E(191,t));t.call(r)}}}var oo=new Pe.Component().refs;function ue(e,c,a,r){c=e.memoizedState,a=a(r,c),a=a==null?c:L2({},c,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var je={isMounted:function(e){return(e=e._reactInternals)?l3(e)===e:!1},enqueueSetState:function(e,c,a){e=e._reactInternals;var r=l1(),t=V4(e),n=H4(r,t);n.payload=c,a!=null&&(n.callback=a),g4(e,n),C4(e,t,r)},enqueueReplaceState:function(e,c,a){e=e._reactInternals;var r=l1(),t=V4(e),n=H4(r,t);n.tag=1,n.payload=c,a!=null&&(n.callback=a),g4(e,n),C4(e,t,r)},enqueueForceUpdate:function(e,c){e=e._reactInternals;var a=l1(),r=V4(e),t=H4(a,r);t.tag=2,c!=null&&(t.callback=c),g4(e,t),C4(e,r,a)}};function e9(e,c,a,r,t,n,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,n,i):c.prototype&&c.prototype.isPureReactComponent?!i0(a,r)||!i0(t,n):!0}function lo(e,c,a){var r=!1,t=k4,n=c.contextType;return typeof n=="object"&&n!==null?n=z1(n):(t=s1(c)?Z4:Z2.current,r=c.contextTypes,n=(r=r!=null)?W3(e,t):k4),c=new c(a,n),e.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=je,e.stateNode=c,c._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=n),c}function c9(e,c,a,r){e=c.state,typeof c.componentWillReceiveProps=="function"&&c.componentWillReceiveProps(a,r),typeof c.UNSAFE_componentWillReceiveProps=="function"&&c.UNSAFE_componentWillReceiveProps(a,r),c.state!==e&&je.enqueueReplaceState(c,c.state,null)}function e7(e,c,a,r){var t=e.stateNode;t.props=a,t.state=e.memoizedState,t.refs=oo,wa(e);var n=c.contextType;typeof n=="object"&&n!==null?t.context=z1(n):(n=s1(c)?Z4:Z2.current,t.context=W3(e,n)),l0(e,a,t,r),t.state=e.memoizedState,n=c.getDerivedStateFromProps,typeof n=="function"&&(ue(e,c,n,a),t.state=e.memoizedState),typeof c.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(c=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),c!==t.state&&je.enqueueReplaceState(t,t.state,null),l0(e,a,t,r),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4)}var z8=Array.isArray;function M6(e,c,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(E(309));var r=a.stateNode}if(!r)throw Error(E(147,e));var t=""+e;return c!==null&&c.ref!==null&&typeof c.ref=="function"&&c.ref._stringRef===t?c.ref:(c=function(n){var i=r.refs;i===oo&&(i=r.refs={}),n===null?delete i[t]:i[t]=n},c._stringRef=t,c)}if(typeof e!="string")throw Error(E(284));if(!a._owner)throw Error(E(290,e))}return e}function H8(e,c){if(e.type!=="textarea")throw Error(E(31,Object.prototype.toString.call(c)==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":c))}function fo(e){function c(m,h){if(e){var z=m.lastEffect;z!==null?(z.nextEffect=h,m.lastEffect=h):m.firstEffect=m.lastEffect=h,h.nextEffect=null,h.flags=8}}function a(m,h){if(!e)return null;for(;h!==null;)c(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function t(m,h){return m=A4(m,h),m.index=0,m.sibling=null,m}function n(m,h,z){return m.index=z,e?(z=m.alternate,z!==null?(z=z.index,z<h?(m.flags=2,h):z):(m.flags=2,h)):h}function i(m){return e&&m.alternate===null&&(m.flags=2),m}function o(m,h,z,V){return h===null||h.tag!==6?(h=dc(z,m.mode,V),h.return=m,h):(h=t(h,z),h.return=m,h)}function f(m,h,z,V){return h!==null&&h.elementType===z.type?(V=t(h,z.props),V.ref=M6(m,h,z),V.return=m,V):(V=W8(z.type,z.key,z.props,null,m.mode,V),V.ref=M6(m,h,z),V.return=m,V)}function u(m,h,z,V){return h===null||h.tag!==4||h.stateNode.containerInfo!==z.containerInfo||h.stateNode.implementation!==z.implementation?(h=mc(z,m.mode,V),h.return=m,h):(h=t(h,z.children||[]),h.return=m,h)}function p(m,h,z,V,C){return h===null||h.tag!==7?(h=F3(z,m.mode,V,C),h.return=m,h):(h=t(h,z),h.return=m,h)}function g(m,h,z){if(typeof h=="string"||typeof h=="number")return h=dc(""+h,m.mode,z),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case S6:return z=W8(h.type,h.key,h.props,null,m.mode,z),z.ref=M6(m,null,h),z.return=m,z;case U4:return h=mc(h,m.mode,z),h.return=m,h}if(z8(h)||v6(h))return h=F3(h,m.mode,z,null),h.return=m,h;H8(m,h)}return null}function H(m,h,z,V){var C=h!==null?h.key:null;if(typeof z=="string"||typeof z=="number")return C!==null?null:o(m,h,""+z,V);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S6:return z.key===C?z.type===s4?p(m,h,z.props.children,V,C):f(m,h,z,V):null;case U4:return z.key===C?u(m,h,z,V):null}if(z8(z)||v6(z))return C!==null?null:p(m,h,z,V,null);H8(m,z)}return null}function M(m,h,z,V,C){if(typeof V=="string"||typeof V=="number")return m=m.get(z)||null,o(h,m,""+V,C);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S6:return m=m.get(V.key===null?z:V.key)||null,V.type===s4?p(h,m,V.props.children,C,V.key):f(h,m,V,C);case U4:return m=m.get(V.key===null?z:V.key)||null,u(h,m,V,C)}if(z8(V)||v6(V))return m=m.get(z)||null,p(h,m,V,C,null);H8(h,V)}return null}function y(m,h,z,V){for(var C=null,N=null,S=h,T=h=0,D=null;S!==null&&T<z.length;T++){S.index>T?(D=S,S=null):D=S.sibling;var A=H(m,S,z[T],V);if(A===null){S===null&&(S=D);break}e&&S&&A.alternate===null&&c(m,S),h=n(A,h,T),N===null?C=A:N.sibling=A,N=A,S=D}if(T===z.length)return a(m,S),C;if(S===null){for(;T<z.length;T++)S=g(m,z[T],V),S!==null&&(h=n(S,h,T),N===null?C=S:N.sibling=S,N=S);return C}for(S=r(m,S);T<z.length;T++)D=M(S,m,T,z[T],V),D!==null&&(e&&D.alternate!==null&&S.delete(D.key===null?T:D.key),h=n(D,h,T),N===null?C=D:N.sibling=D,N=D);return e&&S.forEach(function(B){return c(m,B)}),C}function L(m,h,z,V){var C=v6(z);if(typeof C!="function")throw Error(E(150));if(z=C.call(z),z==null)throw Error(E(151));for(var N=C=null,S=h,T=h=0,D=null,A=z.next();S!==null&&!A.done;T++,A=z.next()){S.index>T?(D=S,S=null):D=S.sibling;var B=H(m,S,A.value,V);if(B===null){S===null&&(S=D);break}e&&S&&B.alternate===null&&c(m,S),h=n(B,h,T),N===null?C=B:N.sibling=B,N=B,S=D}if(A.done)return a(m,S),C;if(S===null){for(;!A.done;T++,A=z.next())A=g(m,A.value,V),A!==null&&(h=n(A,h,T),N===null?C=A:N.sibling=A,N=A);return C}for(S=r(m,S);!A.done;T++,A=z.next())A=M(S,m,T,A.value,V),A!==null&&(e&&A.alternate!==null&&S.delete(A.key===null?T:A.key),h=n(A,h,T),N===null?C=A:N.sibling=A,N=A);return e&&S.forEach(function(v2){return c(m,v2)}),C}return function(m,h,z,V){var C=typeof z=="object"&&z!==null&&z.type===s4&&z.key===null;C&&(z=z.props.children);var N=typeof z=="object"&&z!==null;if(N)switch(z.$$typeof){case S6:e:{for(N=z.key,C=h;C!==null;){if(C.key===N){switch(C.tag){case 7:if(z.type===s4){a(m,C.sibling),h=t(C,z.props.children),h.return=m,m=h;break e}break;default:if(C.elementType===z.type){a(m,C.sibling),h=t(C,z.props),h.ref=M6(m,C,z),h.return=m,m=h;break e}}a(m,C);break}else c(m,C);C=C.sibling}z.type===s4?(h=F3(z.props.children,m.mode,V,z.key),h.return=m,m=h):(V=W8(z.type,z.key,z.props,null,m.mode,V),V.ref=M6(m,h,z),V.return=m,m=V)}return i(m);case U4:e:{for(C=z.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===z.containerInfo&&h.stateNode.implementation===z.implementation){a(m,h.sibling),h=t(h,z.children||[]),h.return=m,m=h;break e}else{a(m,h);break}else c(m,h);h=h.sibling}h=mc(z,m.mode,V),h.return=m,m=h}return i(m)}if(typeof z=="string"||typeof z=="number")return z=""+z,h!==null&&h.tag===6?(a(m,h.sibling),h=t(h,z),h.return=m,m=h):(a(m,h),h=dc(z,m.mode,V),h.return=m,m=h),i(m);if(z8(z))return y(m,h,z,V);if(v6(z))return L(m,h,z,V);if(N&&H8(m,z),typeof z>"u"&&!C)switch(m.tag){case 1:case 22:case 0:case 11:case 15:throw Error(E(152,N3(m.type)||"Component"))}return a(m,h)}}var de=fo(!0),uo=fo(!1),A0={},T1=_4(A0),f0=_4(A0),u0=_4(A0);function q4(e){if(e===A0)throw Error(E(174));return e}function c7(e,c){switch(S2(u0,c),S2(f0,e),S2(T1,A0),e=c.nodeType,e){case 9:case 11:c=(c=c.documentElement)?c.namespaceURI:Fc(null,"");break;default:e=e===8?c.parentNode:c,c=e.namespaceURI||null,e=e.tagName,c=Fc(c,e)}g2(T1),S2(T1,c)}function G3(){g2(T1),g2(f0),g2(u0)}function a9(e){q4(u0.current);var c=q4(T1.current),a=Fc(c,e.type);c!==a&&(S2(f0,e),S2(T1,a))}function ya(e){f0.current===e&&(g2(T1),g2(f0))}var x2=_4(0);function me(e){for(var c=e;c!==null;){if(c.tag===13){var a=c.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return c}else if(c.tag===19&&c.memoizedProps.revealOrder!==void 0){if(c.flags&64)return c}else if(c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break;for(;c.sibling===null;){if(c.return===null||c.return===e)return null;c=c.return}c.sibling.return=c.return,c=c.sibling}return null}var O1=null,m4=null,E1=!1;function mo(e,c){var a=p1(5,null,null,0);a.elementType="DELETED",a.type="DELETED",a.stateNode=c,a.return=e,a.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=a,e.lastEffect=a):e.firstEffect=e.lastEffect=a}function r9(e,c){switch(e.tag){case 5:var a=e.type;return c=c.nodeType!==1||a.toLowerCase()!==c.nodeName.toLowerCase()?null:c,c!==null?(e.stateNode=c,!0):!1;case 6:return c=e.pendingProps===""||c.nodeType!==3?null:c,c!==null?(e.stateNode=c,!0):!1;case 13:return!1;default:return!1}}function a7(e){if(E1){var c=m4;if(c){var a=c;if(!r9(e,c)){if(c=P3(a.nextSibling),!c||!r9(e,c)){e.flags=e.flags&-1025|2,E1=!1,O1=e;return}mo(O1,a)}O1=e,m4=P3(c.firstChild)}else e.flags=e.flags&-1025|2,E1=!1,O1=e}}function t9(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;O1=e}function g8(e){if(e!==O1)return!1;if(!E1)return t9(e),E1=!0,!1;var c=e.type;if(e.tag!==5||c!=="head"&&c!=="body"&&!Xc(c,e.memoizedProps))for(c=m4;c;)mo(e,c),c=P3(c.nextSibling);if(t9(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,c=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(c===0){m4=P3(e.nextSibling);break e}c--}else a!=="$"&&a!=="$!"&&a!=="$?"||c++}e=e.nextSibling}m4=null}}else m4=O1?P3(e.stateNode.nextSibling):null;return!0}function oc(){m4=O1=null,E1=!1}var I3=[];function xa(){for(var e=0;e<I3.length;e++)I3[e]._workInProgressVersionPrimary=null;I3.length=0}var j6=o3.ReactCurrentDispatcher,v1=o3.ReactCurrentBatchConfig,d0=0,T2=null,X2=null,q2=null,he=!1,W6=!1;function t1(){throw Error(E(321))}function ba(e,c){if(c===null)return!1;for(var a=0;a<c.length&&a<e.length;a++)if(!h1(e[a],c[a]))return!1;return!0}function Sa(e,c,a,r,t,n){if(d0=n,T2=c,c.memoizedState=null,c.updateQueue=null,c.lanes=0,j6.current=e===null||e.memoizedState===null?WL:qL,e=a(r,t),W6){n=0;do{if(W6=!1,!(25>n))throw Error(E(301));n+=1,q2=X2=null,c.updateQueue=null,j6.current=GL,e=a(r,t)}while(W6)}if(j6.current=He,c=X2!==null&&X2.next!==null,d0=0,q2=X2=T2=null,he=!1,c)throw Error(E(300));return e}function G4(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q2===null?T2.memoizedState=q2=e:q2=q2.next=e,q2}function f3(){if(X2===null){var e=T2.alternate;e=e!==null?e.memoizedState:null}else e=X2.next;var c=q2===null?T2.memoizedState:q2.next;if(c!==null)q2=c,X2=e;else{if(e===null)throw Error(E(310));X2=e,e={memoizedState:X2.memoizedState,baseState:X2.baseState,baseQueue:X2.baseQueue,queue:X2.queue,next:null},q2===null?T2.memoizedState=q2=e:q2=q2.next=e}return q2}function k1(e,c){return typeof c=="function"?c(e):c}function L6(e){var c=f3(),a=c.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=e;var r=X2,t=r.baseQueue,n=a.pending;if(n!==null){if(t!==null){var i=t.next;t.next=n.next,n.next=i}r.baseQueue=t=n,a.pending=null}if(t!==null){t=t.next,r=r.baseState;var o=i=n=null,f=t;do{var u=f.lane;if((d0&u)===u)o!==null&&(o=o.next={lane:0,action:f.action,eagerReducer:f.eagerReducer,eagerState:f.eagerState,next:null}),r=f.eagerReducer===e?f.eagerState:e(r,f.action);else{var p={lane:u,action:f.action,eagerReducer:f.eagerReducer,eagerState:f.eagerState,next:null};o===null?(i=o=p,n=r):o=o.next=p,T2.lanes|=u,T0|=u}f=f.next}while(f!==null&&f!==t);o===null?n=r:o.next=i,h1(r,c.memoizedState)||(w1=!0),c.memoizedState=r,c.baseState=n,c.baseQueue=o,a.lastRenderedState=r}return[c.memoizedState,a.dispatch]}function w6(e){var c=f3(),a=c.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=e;var r=a.dispatch,t=a.pending,n=c.memoizedState;if(t!==null){a.pending=null;var i=t=t.next;do n=e(n,i.action),i=i.next;while(i!==t);h1(n,c.memoizedState)||(w1=!0),c.memoizedState=n,c.baseQueue===null&&(c.baseState=n),a.lastRenderedState=n}return[n,r]}function n9(e,c,a){var r=c._getVersion;r=r(c._source);var t=c._workInProgressVersionPrimary;if(t!==null?e=t===r:(e=e.mutableReadLanes,(e=(d0&e)===e)&&(c._workInProgressVersionPrimary=r,I3.push(c))),e)return a(c._source);throw I3.push(c),Error(E(350))}function ho(e,c,a,r){var t=c1;if(t===null)throw Error(E(349));var n=c._getVersion,i=n(c._source),o=j6.current,f=o.useState(function(){return n9(t,c,a)}),u=f[1],p=f[0];f=q2;var g=e.memoizedState,H=g.refs,M=H.getSnapshot,y=g.source;g=g.subscribe;var L=T2;return e.memoizedState={refs:H,source:c,subscribe:r},o.useEffect(function(){H.getSnapshot=a,H.setSnapshot=u;var m=n(c._source);if(!h1(i,m)){m=a(c._source),h1(p,m)||(u(m),m=V4(L),t.mutableReadLanes|=m&t.pendingLanes),m=t.mutableReadLanes,t.entangledLanes|=m;for(var h=t.entanglements,z=m;0<z;){var V=31-S4(z),C=1<<V;h[V]|=m,z&=~C}}},[a,c,r]),o.useEffect(function(){return r(c._source,function(){var m=H.getSnapshot,h=H.setSnapshot;try{h(m(c._source));var z=V4(L);t.mutableReadLanes|=z&t.pendingLanes}catch(V){h(function(){throw V})}})},[c,r]),h1(M,a)&&h1(y,c)&&h1(g,r)||(e={pending:null,dispatch:null,lastRenderedReducer:k1,lastRenderedState:p},e.dispatch=u=Aa.bind(null,T2,e),f.queue=e,f.baseQueue=null,p=n9(t,c,a),f.memoizedState=f.baseState=p),p}function po(e,c,a){var r=f3();return ho(r,e,c,a)}function y6(e){var c=G4();return typeof e=="function"&&(e=e()),c.memoizedState=c.baseState=e,e=c.queue={pending:null,dispatch:null,lastRenderedReducer:k1,lastRenderedState:e},e=e.dispatch=Aa.bind(null,T2,e),[c.memoizedState,e]}function pe(e,c,a,r){return e={tag:e,create:c,destroy:a,deps:r,next:null},c=T2.updateQueue,c===null?(c={lastEffect:null},T2.updateQueue=c,c.lastEffect=e.next=e):(a=c.lastEffect,a===null?c.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,c.lastEffect=e)),e}function i9(e){var c=G4();return e={current:e},c.memoizedState=e}function ve(){return f3().memoizedState}function r7(e,c,a,r){var t=G4();T2.flags|=e,t.memoizedState=pe(1|c,a,void 0,r===void 0?null:r)}function ka(e,c,a,r){var t=f3();r=r===void 0?null:r;var n=void 0;if(X2!==null){var i=X2.memoizedState;if(n=i.destroy,r!==null&&ba(r,i.deps)){pe(c,a,n,r);return}}T2.flags|=e,t.memoizedState=pe(1|c,a,n,r)}function s9(e,c){return r7(516,4,e,c)}function ze(e,c){return ka(516,4,e,c)}function vo(e,c){return ka(4,2,e,c)}function zo(e,c){if(typeof c=="function")return e=e(),c(e),function(){c(null)};if(c!=null)return e=e(),c.current=e,function(){c.current=null}}function Ho(e,c,a){return a=a!=null?a.concat([e]):null,ka(4,2,zo.bind(null,c,e),a)}function Na(){}function go(e,c){var a=f3();c=c===void 0?null:c;var r=a.memoizedState;return r!==null&&c!==null&&ba(c,r[1])?r[0]:(a.memoizedState=[e,c],e)}function Vo(e,c){var a=f3();c=c===void 0?null:c;var r=a.memoizedState;return r!==null&&c!==null&&ba(c,r[1])?r[0]:(e=e(),a.memoizedState=[e,c],e)}function jL(e,c){var a=q3();e3(98>a?98:a,function(){e(!0)}),e3(97<a?97:a,function(){var r=v1.transition;v1.transition=1;try{e(!1),c()}finally{v1.transition=r}})}function Aa(e,c,a){var r=l1(),t=V4(e),n={lane:t,action:a,eagerReducer:null,eagerState:null,next:null},i=c.pending;if(i===null?n.next=n:(n.next=i.next,i.next=n),c.pending=n,i=e.alternate,e===T2||i!==null&&i===T2)W6=he=!0;else{if(e.lanes===0&&(i===null||i.lanes===0)&&(i=c.lastRenderedReducer,i!==null))try{var o=c.lastRenderedState,f=i(o,a);if(n.eagerReducer=i,n.eagerState=f,h1(f,o))return}catch{}finally{}C4(e,t,r)}}var He={readContext:z1,useCallback:t1,useContext:t1,useEffect:t1,useImperativeHandle:t1,useLayoutEffect:t1,useMemo:t1,useReducer:t1,useRef:t1,useState:t1,useDebugValue:t1,useDeferredValue:t1,useTransition:t1,useMutableSource:t1,useOpaqueIdentifier:t1,unstable_isNewReconciler:!1},WL={readContext:z1,useCallback:function(e,c){return G4().memoizedState=[e,c===void 0?null:c],e},useContext:z1,useEffect:s9,useImperativeHandle:function(e,c,a){return a=a!=null?a.concat([e]):null,r7(4,2,zo.bind(null,c,e),a)},useLayoutEffect:function(e,c){return r7(4,2,e,c)},useMemo:function(e,c){var a=G4();return c=c===void 0?null:c,e=e(),a.memoizedState=[e,c],e},useReducer:function(e,c,a){var r=G4();return c=a!==void 0?a(c):c,r.memoizedState=r.baseState=c,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},e=e.dispatch=Aa.bind(null,T2,e),[r.memoizedState,e]},useRef:i9,useState:y6,useDebugValue:Na,useDeferredValue:function(e){var c=y6(e),a=c[0],r=c[1];return s9(function(){var t=v1.transition;v1.transition=1;try{r(e)}finally{v1.transition=t}},[e]),a},useTransition:function(){var e=y6(!1),c=e[0];return e=jL.bind(null,e[1]),i9(e),[e,c]},useMutableSource:function(e,c,a){var r=G4();return r.memoizedState={refs:{getSnapshot:c,setSnapshot:null},source:e,subscribe:a},ho(r,e,c,a)},useOpaqueIdentifier:function(){if(E1){var e=!1,c=DL(function(){throw e||(e=!0,a("r:"+(nc++).toString(36))),Error(E(355))}),a=y6(c)[1];return!(T2.mode&2)&&(T2.flags|=516,pe(5,function(){a("r:"+(nc++).toString(36))},void 0,null)),c}return c="r:"+(nc++).toString(36),y6(c),c},unstable_isNewReconciler:!1},qL={readContext:z1,useCallback:go,useContext:z1,useEffect:ze,useImperativeHandle:Ho,useLayoutEffect:vo,useMemo:Vo,useReducer:L6,useRef:ve,useState:function(){return L6(k1)},useDebugValue:Na,useDeferredValue:function(e){var c=L6(k1),a=c[0],r=c[1];return ze(function(){var t=v1.transition;v1.transition=1;try{r(e)}finally{v1.transition=t}},[e]),a},useTransition:function(){var e=L6(k1)[0];return[ve().current,e]},useMutableSource:po,useOpaqueIdentifier:function(){return L6(k1)[0]},unstable_isNewReconciler:!1},GL={readContext:z1,useCallback:go,useContext:z1,useEffect:ze,useImperativeHandle:Ho,useLayoutEffect:vo,useMemo:Vo,useReducer:w6,useRef:ve,useState:function(){return w6(k1)},useDebugValue:Na,useDeferredValue:function(e){var c=w6(k1),a=c[0],r=c[1];return ze(function(){var t=v1.transition;v1.transition=1;try{r(e)}finally{v1.transition=t}},[e]),a},useTransition:function(){var e=w6(k1)[0];return[ve().current,e]},useMutableSource:po,useOpaqueIdentifier:function(){return w6(k1)[0]},unstable_isNewReconciler:!1},KL=o3.ReactCurrentOwner,w1=!1;function n1(e,c,a,r){c.child=e===null?uo(c,null,a,r):de(c,e.child,a,r)}function o9(e,c,a,r,t){a=a.render;var n=c.ref;return _3(c,t),r=Sa(e,c,a,r,n,t),e!==null&&!w1?(c.updateQueue=e.updateQueue,c.flags&=-517,e.lanes&=~t,$1(e,c,t)):(c.flags|=1,n1(e,c,r,t),c.child)}function l9(e,c,a,r,t,n){if(e===null){var i=a.type;return typeof i=="function"&&!Ra(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(c.tag=15,c.type=i,Co(e,c,i,r,t,n)):(e=W8(a.type,null,r,c,c.mode,n),e.ref=c.ref,e.return=c,c.child=e)}return i=e.child,!(t&n)&&(t=i.memoizedProps,a=a.compare,a=a!==null?a:i0,a(t,r)&&e.ref===c.ref)?$1(e,c,n):(c.flags|=1,e=A4(i,r),e.ref=c.ref,e.return=c,c.child=e)}function Co(e,c,a,r,t,n){if(e!==null&&i0(e.memoizedProps,r)&&e.ref===c.ref)if(w1=!1,(n&t)!==0)e.flags&16384&&(w1=!0);else return c.lanes=e.lanes,$1(e,c,n);return t7(e,c,a,r,n)}function lc(e,c,a){var r=c.pendingProps,t=r.children,n=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if(!(c.mode&4))c.memoizedState={baseLanes:0},C8(c,a);else if(a&1073741824)c.memoizedState={baseLanes:0},C8(c,n!==null?n.baseLanes:a);else return e=n!==null?n.baseLanes|a:a,c.lanes=c.childLanes=1073741824,c.memoizedState={baseLanes:e},C8(c,e),null;else n!==null?(r=n.baseLanes|a,c.memoizedState=null):r=a,C8(c,r);return n1(e,c,t,a),c.child}function Mo(e,c){var a=c.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(c.flags|=128)}function t7(e,c,a,r,t){var n=s1(a)?Z4:Z2.current;return n=W3(c,n),_3(c,t),a=Sa(e,c,a,r,n,t),e!==null&&!w1?(c.updateQueue=e.updateQueue,c.flags&=-517,e.lanes&=~t,$1(e,c,t)):(c.flags|=1,n1(e,c,a,t),c.child)}function f9(e,c,a,r,t){if(s1(a)){var n=!0;B8(c)}else n=!1;if(_3(c,t),c.stateNode===null)e!==null&&(e.alternate=null,c.alternate=null,c.flags|=2),lo(c,a,r),e7(c,a,r,t),r=!0;else if(e===null){var i=c.stateNode,o=c.memoizedProps;i.props=o;var f=i.context,u=a.contextType;typeof u=="object"&&u!==null?u=z1(u):(u=s1(a)?Z4:Z2.current,u=W3(c,u));var p=a.getDerivedStateFromProps,g=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";g||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==r||f!==u)&&c9(c,i,r,u),i4=!1;var H=c.memoizedState;i.state=H,l0(c,r,i,t),f=c.memoizedState,o!==r||H!==f||i1.current||i4?(typeof p=="function"&&(ue(c,a,p,r),f=c.memoizedState),(o=i4||e9(c,a,o,r,H,f,u))?(g||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(c.flags|=4)):(typeof i.componentDidMount=="function"&&(c.flags|=4),c.memoizedProps=r,c.memoizedState=f),i.props=r,i.state=f,i.context=u,r=o):(typeof i.componentDidMount=="function"&&(c.flags|=4),r=!1)}else{i=c.stateNode,so(e,c),o=c.memoizedProps,u=c.type===c.elementType?o:L1(c.type,o),i.props=u,g=c.pendingProps,H=i.context,f=a.contextType,typeof f=="object"&&f!==null?f=z1(f):(f=s1(a)?Z4:Z2.current,f=W3(c,f));var M=a.getDerivedStateFromProps;(p=typeof M=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==g||H!==f)&&c9(c,i,r,f),i4=!1,H=c.memoizedState,i.state=H,l0(c,r,i,t);var y=c.memoizedState;o!==g||H!==y||i1.current||i4?(typeof M=="function"&&(ue(c,a,M,r),y=c.memoizedState),(u=i4||e9(c,a,u,r,H,y,f))?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,f)),typeof i.componentDidUpdate=="function"&&(c.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(c.flags|=256)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&H===e.memoizedState||(c.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&H===e.memoizedState||(c.flags|=256),c.memoizedProps=r,c.memoizedState=y),i.props=r,i.state=y,i.context=f,r=u):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&H===e.memoizedState||(c.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&H===e.memoizedState||(c.flags|=256),r=!1)}return n7(e,c,a,r,n,t)}function n7(e,c,a,r,t,n){Mo(e,c);var i=(c.flags&64)!==0;if(!r&&!i)return t&&Yn(c,a,!1),$1(e,c,n);r=c.stateNode,KL.current=c;var o=i&&typeof a.getDerivedStateFromError!="function"?null:r.render();return c.flags|=1,e!==null&&i?(c.child=de(c,e.child,null,n),c.child=de(c,null,o,n)):n1(e,c,o,n),c.memoizedState=r.state,t&&Yn(c,a,!0),c.child}function u9(e){var c=e.stateNode;c.pendingContext?Kn(e,c.pendingContext,c.pendingContext!==c.context):c.context&&Kn(e,c.context,!1),c7(e,c.containerInfo)}var V8={dehydrated:null,retryLane:0};function d9(e,c,a){var r=c.pendingProps,t=x2.current,n=!1,i;return(i=(c.flags&64)!==0)||(i=e!==null&&e.memoizedState===null?!1:(t&2)!==0),i?(n=!0,c.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(t|=1),S2(x2,t&1),e===null?(r.fallback!==void 0&&a7(c),e=r.children,t=r.fallback,n?(e=m9(c,e,t,a),c.child.memoizedState={baseLanes:a},c.memoizedState=V8,e):typeof r.unstable_expectedLoadTime=="number"?(e=m9(c,e,t,a),c.child.memoizedState={baseLanes:a},c.memoizedState=V8,c.lanes=33554432,e):(a=Da({mode:"visible",children:e},c.mode,a,null),a.return=c,c.child=a)):e.memoizedState!==null?n?(r=p9(e,c,r.children,r.fallback,a),n=c.child,t=e.child.memoizedState,n.memoizedState=t===null?{baseLanes:a}:{baseLanes:t.baseLanes|a},n.childLanes=e.childLanes&~a,c.memoizedState=V8,r):(a=h9(e,c,r.children,a),c.memoizedState=null,a):n?(r=p9(e,c,r.children,r.fallback,a),n=c.child,t=e.child.memoizedState,n.memoizedState=t===null?{baseLanes:a}:{baseLanes:t.baseLanes|a},n.childLanes=e.childLanes&~a,c.memoizedState=V8,r):(a=h9(e,c,r.children,a),c.memoizedState=null,a)}function m9(e,c,a,r){var t=e.mode,n=e.child;return c={mode:"hidden",children:c},!(t&2)&&n!==null?(n.childLanes=0,n.pendingProps=c):n=Da(c,t,0,null),a=F3(a,t,r,null),n.return=e,a.return=e,n.sibling=a,e.child=n,a}function h9(e,c,a,r){var t=e.child;return e=t.sibling,a=A4(t,{mode:"visible",children:a}),!(c.mode&2)&&(a.lanes=r),a.return=c,a.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,c.firstEffect=c.lastEffect=e),c.child=a}function p9(e,c,a,r,t){var n=c.mode,i=e.child;e=i.sibling;var o={mode:"hidden",children:a};return!(n&2)&&c.child!==i?(a=c.child,a.childLanes=0,a.pendingProps=o,i=a.lastEffect,i!==null?(c.firstEffect=a.firstEffect,c.lastEffect=i,i.nextEffect=null):c.firstEffect=c.lastEffect=null):a=A4(i,o),e!==null?r=A4(e,r):(r=F3(r,n,t,null),r.flags|=2),r.return=c,a.return=c,a.sibling=r,c.child=a,r}function v9(e,c){e.lanes|=c;var a=e.alternate;a!==null&&(a.lanes|=c),io(e.return,c)}function fc(e,c,a,r,t,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:c,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:t,lastEffect:n}:(i.isBackwards=c,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=t,i.lastEffect=n)}function z9(e,c,a){var r=c.pendingProps,t=r.revealOrder,n=r.tail;if(n1(e,c,r.children,a),r=x2.current,r&2)r=r&1|2,c.flags|=64;else{if(e!==null&&e.flags&64)e:for(e=c.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&v9(e,a);else if(e.tag===19)v9(e,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===c)break e;for(;e.sibling===null;){if(e.return===null||e.return===c)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(S2(x2,r),!(c.mode&2))c.memoizedState=null;else switch(t){case"forwards":for(a=c.child,t=null;a!==null;)e=a.alternate,e!==null&&me(e)===null&&(t=a),a=a.sibling;a=t,a===null?(t=c.child,c.child=null):(t=a.sibling,a.sibling=null),fc(c,!1,t,a,n,c.lastEffect);break;case"backwards":for(a=null,t=c.child,c.child=null;t!==null;){if(e=t.alternate,e!==null&&me(e)===null){c.child=t;break}e=t.sibling,t.sibling=a,a=t,t=e}fc(c,!0,a,null,n,c.lastEffect);break;case"together":fc(c,!1,null,null,void 0,c.lastEffect);break;default:c.memoizedState=null}return c.child}function $1(e,c,a){if(e!==null&&(c.dependencies=e.dependencies),T0|=c.lanes,a&c.childLanes){if(e!==null&&c.child!==e.child)throw Error(E(153));if(c.child!==null){for(e=c.child,a=A4(e,e.pendingProps),c.child=a,a.return=c;e.sibling!==null;)e=e.sibling,a=a.sibling=A4(e,e.pendingProps),a.return=c;a.sibling=null}return c.child}return null}var Lo,i7,wo,yo;Lo=function(e,c){for(var a=c.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===c)break;for(;a.sibling===null;){if(a.return===null||a.return===c)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};i7=function(){};wo=function(e,c,a,r){var t=e.memoizedProps;if(t!==r){e=c.stateNode,q4(T1.current);var n=null;switch(a){case"input":t=Ec(e,t),r=Ec(e,r),n=[];break;case"option":t=Ic(e,t),r=Ic(e,r),n=[];break;case"select":t=L2({},t,{value:void 0}),r=L2({},r,{value:void 0}),n=[];break;case"textarea":t=Rc(e,t),r=Rc(e,r),n=[];break;default:typeof t.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ne)}Bc(a,r);var i;a=null;for(u in t)if(!r.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var o=t[u];for(i in o)o.hasOwnProperty(i)&&(a||(a={}),a[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Z6.hasOwnProperty(u)?n||(n=[]):(n=n||[]).push(u,null));for(u in r){var f=r[u];if(o=t!=null?t[u]:void 0,r.hasOwnProperty(u)&&f!==o&&(f!=null||o!=null))if(u==="style")if(o){for(i in o)!o.hasOwnProperty(i)||f&&f.hasOwnProperty(i)||(a||(a={}),a[i]="");for(i in f)f.hasOwnProperty(i)&&o[i]!==f[i]&&(a||(a={}),a[i]=f[i])}else a||(n||(n=[]),n.push(u,a)),a=f;else u==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,o=o?o.__html:void 0,f!=null&&o!==f&&(n=n||[]).push(u,f)):u==="children"?typeof f!="string"&&typeof f!="number"||(n=n||[]).push(u,""+f):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Z6.hasOwnProperty(u)?(f!=null&&u==="onScroll"&&z2("scroll",e),n||o===f||(n=[])):typeof f=="object"&&f!==null&&f.$$typeof===ta?f.toString():(n=n||[]).push(u,f))}a&&(n=n||[]).push("style",a);var u=n;(c.updateQueue=u)&&(c.flags|=4)}};yo=function(e,c,a,r){a!==r&&(c.flags|=4)};function x6(e,c){if(!E1)switch(e.tailMode){case"hidden":c=e.tail;for(var a=null;c!==null;)c.alternate!==null&&(a=c),c=c.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?c||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function YL(e,c,a){var r=c.pendingProps;switch(c.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return s1(c.type)&&se(),null;case 3:return G3(),g2(i1),g2(Z2),xa(),r=c.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(g8(c)?c.flags|=4:r.hydrate||(c.flags|=256)),i7(c),null;case 5:ya(c);var t=q4(u0.current);if(a=c.type,e!==null&&c.stateNode!=null)wo(e,c,a,r,t),e.ref!==c.ref&&(c.flags|=128);else{if(!r){if(c.stateNode===null)throw Error(E(166));return null}if(e=q4(T1.current),g8(c)){r=c.stateNode,a=c.type;var n=c.memoizedProps;switch(r[d4]=c,r[ie]=n,a){case"dialog":z2("cancel",r),z2("close",r);break;case"iframe":case"object":case"embed":z2("load",r);break;case"video":case"audio":for(e=0;e<N6.length;e++)z2(N6[e],r);break;case"source":z2("error",r);break;case"img":case"image":case"link":z2("error",r),z2("load",r);break;case"details":z2("toggle",r);break;case"input":zn(r,n),z2("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!n.multiple},z2("invalid",r);break;case"textarea":gn(r,n),z2("invalid",r)}Bc(a,n),e=null;for(var i in n)n.hasOwnProperty(i)&&(t=n[i],i==="children"?typeof t=="string"?r.textContent!==t&&(e=["children",t]):typeof t=="number"&&r.textContent!==""+t&&(e=["children",""+t]):Z6.hasOwnProperty(i)&&t!=null&&i==="onScroll"&&z2("scroll",r));switch(a){case"input":m8(r),Hn(r,n,!0);break;case"textarea":m8(r),Vn(r);break;case"select":case"option":break;default:typeof n.onClick=="function"&&(r.onclick=ne)}r=e,c.updateQueue=r,r!==null&&(c.flags|=4)}else{switch(i=t.nodeType===9?t:t.ownerDocument,e===Dc.html&&(e=zs(a)),e===Dc.html?a==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(a,{is:r.is}):(e=i.createElement(a),a==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,a),e[d4]=c,e[ie]=r,Lo(e,c,!1,!1),c.stateNode=e,i=Oc(a,r),a){case"dialog":z2("cancel",e),z2("close",e),t=r;break;case"iframe":case"object":case"embed":z2("load",e),t=r;break;case"video":case"audio":for(t=0;t<N6.length;t++)z2(N6[t],e);t=r;break;case"source":z2("error",e),t=r;break;case"img":case"image":case"link":z2("error",e),z2("load",e),t=r;break;case"details":z2("toggle",e),t=r;break;case"input":zn(e,r),t=Ec(e,r),z2("invalid",e);break;case"option":t=Ic(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},t=L2({},r,{value:void 0}),z2("invalid",e);break;case"textarea":gn(e,r),t=Rc(e,r),z2("invalid",e);break;default:t=r}Bc(a,t);var o=t;for(n in o)if(o.hasOwnProperty(n)){var f=o[n];n==="style"?Vs(e,f):n==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Hs(e,f)):n==="children"?typeof f=="string"?(a!=="textarea"||f!=="")&&e0(e,f):typeof f=="number"&&e0(e,""+f):n!=="suppressContentEditableWarning"&&n!=="suppressHydrationWarning"&&n!=="autoFocus"&&(Z6.hasOwnProperty(n)?f!=null&&n==="onScroll"&&z2("scroll",e):f!=null&&J7(e,n,f,i))}switch(a){case"input":m8(e),Hn(e,r,!1);break;case"textarea":m8(e),Vn(e);break;case"option":r.value!=null&&e.setAttribute("value",""+b4(r.value));break;case"select":e.multiple=!!r.multiple,n=r.value,n!=null?A3(e,!!r.multiple,n,!1):r.defaultValue!=null&&A3(e,!!r.multiple,r.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=ne)}Qs(a,r)&&(c.flags|=4)}c.ref!==null&&(c.flags|=128)}return null;case 6:if(e&&c.stateNode!=null)yo(e,c,e.memoizedProps,r);else{if(typeof r!="string"&&c.stateNode===null)throw Error(E(166));a=q4(u0.current),q4(T1.current),g8(c)?(r=c.stateNode,a=c.memoizedProps,r[d4]=c,r.nodeValue!==a&&(c.flags|=4)):(r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[d4]=c,c.stateNode=r)}return null;case 13:return g2(x2),r=c.memoizedState,c.flags&64?(c.lanes=a,c):(r=r!==null,a=!1,e===null?c.memoizedProps.fallback!==void 0&&g8(c):a=e.memoizedState!==null,r&&!a&&c.mode&2&&(e===null&&c.memoizedProps.unstable_avoidThisFallback!==!0||x2.current&1?G2===0&&(G2=3):((G2===0||G2===3)&&(G2=4),c1===null||!(T0&134217727)&&!(t6&134217727)||R3(c1,J2))),(r||a)&&(c.flags|=4),null);case 4:return G3(),i7(c),e===null&&Ks(c.stateNode.containerInfo),null;case 10:return La(c),null;case 17:return s1(c.type)&&se(),null;case 19:if(g2(x2),r=c.memoizedState,r===null)return null;if(n=(c.flags&64)!==0,i=r.rendering,i===null)if(n)x6(r,!1);else{if(G2!==0||e!==null&&e.flags&64)for(e=c.child;e!==null;){if(i=me(e),i!==null){for(c.flags|=64,x6(r,!1),n=i.updateQueue,n!==null&&(c.updateQueue=n,c.flags|=4),r.lastEffect===null&&(c.firstEffect=null),c.lastEffect=r.lastEffect,r=a,a=c.child;a!==null;)n=a,e=r,n.flags&=2,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null,i=n.alternate,i===null?(n.childLanes=0,n.lanes=e,n.child=null,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=i.childLanes,n.lanes=i.lanes,n.child=i.child,n.memoizedProps=i.memoizedProps,n.memoizedState=i.memoizedState,n.updateQueue=i.updateQueue,n.type=i.type,e=i.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return S2(x2,x2.current&1|2),c.child}e=e.sibling}r.tail!==null&&Q2()>d7&&(c.flags|=64,n=!0,x6(r,!1),c.lanes=33554432)}else{if(!n)if(e=me(i),e!==null){if(c.flags|=64,n=!0,a=e.updateQueue,a!==null&&(c.updateQueue=a,c.flags|=4),x6(r,!0),r.tail===null&&r.tailMode==="hidden"&&!i.alternate&&!E1)return c=c.lastEffect=r.lastEffect,c!==null&&(c.nextEffect=null),null}else 2*Q2()-r.renderingStartTime>d7&&a!==1073741824&&(c.flags|=64,n=!0,x6(r,!1),c.lanes=33554432);r.isBackwards?(i.sibling=c.child,c.child=i):(a=r.last,a!==null?a.sibling=i:c.child=i,r.last=i)}return r.tail!==null?(a=r.tail,r.rendering=a,r.tail=a.sibling,r.lastEffect=c.lastEffect,r.renderingStartTime=Q2(),a.sibling=null,c=x2.current,S2(x2,n?c&1|2:c&1),a):null;case 23:case 24:return Ia(),e!==null&&e.memoizedState!==null!=(c.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(c.flags|=4),null}throw Error(E(156,c.tag))}function XL(e){switch(e.tag){case 1:s1(e.type)&&se();var c=e.flags;return c&4096?(e.flags=c&-4097|64,e):null;case 3:if(G3(),g2(i1),g2(Z2),xa(),c=e.flags,c&64)throw Error(E(285));return e.flags=c&-4097|64,e;case 5:return ya(e),null;case 13:return g2(x2),c=e.flags,c&4096?(e.flags=c&-4097|64,e):null;case 19:return g2(x2),null;case 4:return G3(),null;case 10:return La(e),null;case 23:case 24:return Ia(),null;default:return null}}function Ta(e,c){try{var a="",r=c;do a+=NM(r),r=r.return;while(r);var t=a}catch(n){t=`
Error generating stack: `+n.message+`
`+n.stack}return{value:e,source:c,stack:t}}function s7(e,c){try{console.error(c.value)}catch(a){setTimeout(function(){throw a})}}var QL=typeof WeakMap=="function"?WeakMap:Map;function xo(e,c,a){a=H4(-1,a),a.tag=3,a.payload={element:null};var r=c.value;return a.callback=function(){Ve||(Ve=!0,m7=r),s7(e,c)},a}function bo(e,c,a){a=H4(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var t=c.value;a.payload=function(){return s7(e,c),r(t)}}var n=e.stateNode;return n!==null&&typeof n.componentDidCatch=="function"&&(a.callback=function(){typeof r!="function"&&(N1===null?N1=new Set([this]):N1.add(this),s7(e,c));var i=c.stack;this.componentDidCatch(c.value,{componentStack:i!==null?i:""})}),a}var JL=typeof WeakSet=="function"?WeakSet:Set;function H9(e){var c=e.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(a){M4(e,a)}else c.current=null}function ZL(e,c){switch(c.tag){case 0:case 11:case 15:case 22:return;case 1:if(c.flags&256&&e!==null){var a=e.memoizedProps,r=e.memoizedState;e=c.stateNode,c=e.getSnapshotBeforeUpdate(c.elementType===c.type?a:L1(c.type,a),r),e.__reactInternalSnapshotBeforeUpdate=c}return;case 3:c.flags&256&&ga(c.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(E(163))}function ew(e,c,a){switch(a.tag){case 0:case 11:case 15:case 22:if(c=a.updateQueue,c=c!==null?c.lastEffect:null,c!==null){e=c=c.next;do{if((e.tag&3)===3){var r=e.create;e.destroy=r()}e=e.next}while(e!==c)}if(c=a.updateQueue,c=c!==null?c.lastEffect:null,c!==null){e=c=c.next;do{var t=e;r=t.next,t=t.tag,t&4&&t&1&&(Io(a,e),ow(a,e)),e=r}while(e!==c)}return;case 1:e=a.stateNode,a.flags&4&&(c===null?e.componentDidMount():(r=a.elementType===a.type?c.memoizedProps:L1(a.type,c.memoizedProps),e.componentDidUpdate(r,c.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),c=a.updateQueue,c!==null&&Zn(a,c,e);return;case 3:if(c=a.updateQueue,c!==null){if(e=null,a.child!==null)switch(a.child.tag){case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}Zn(a,c,e)}return;case 5:e=a.stateNode,c===null&&a.flags&4&&Qs(a.type,a.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:a.memoizedState===null&&(a=a.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&Ns(a))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(E(163))}function g9(e,c){for(var a=e;;){if(a.tag===5){var r=a.stateNode;if(c)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=a.stateNode;var t=a.memoizedProps.style;t=t!=null&&t.hasOwnProperty("display")?t.display:null,r.style.display=gs("display",t)}}else if(a.tag===6)a.stateNode.nodeValue=c?"":a.memoizedProps;else if((a.tag!==23&&a.tag!==24||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return;a=a.return}a.sibling.return=a.return,a=a.sibling}}function V9(e,c){if(Q4&&typeof Q4.onCommitFiberUnmount=="function")try{Q4.onCommitFiberUnmount(Va,c)}catch{}switch(c.tag){case 0:case 11:case 14:case 15:case 22:if(e=c.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var a=e=e.next;do{var r=a,t=r.destroy;if(r=r.tag,t!==void 0)if(r&4)Io(c,a);else{r=c;try{t()}catch(n){M4(r,n)}}a=a.next}while(a!==e)}break;case 1:if(H9(c),e=c.stateNode,typeof e.componentWillUnmount=="function")try{e.props=c.memoizedProps,e.state=c.memoizedState,e.componentWillUnmount()}catch(n){M4(c,n)}break;case 5:H9(c);break;case 4:So(e,c)}}function C9(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function M9(e){return e.tag===5||e.tag===3||e.tag===4}function L9(e){e:{for(var c=e.return;c!==null;){if(M9(c))break e;c=c.return}throw Error(E(160))}var a=c;switch(c=a.stateNode,a.tag){case 5:var r=!1;break;case 3:c=c.containerInfo,r=!0;break;case 4:c=c.containerInfo,r=!0;break;default:throw Error(E(161))}a.flags&16&&(e0(c,""),a.flags&=-17);e:c:for(a=e;;){for(;a.sibling===null;){if(a.return===null||M9(a.return)){a=null;break e}a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.flags&2||a.child===null||a.tag===4)continue c;a.child.return=a,a=a.child}if(!(a.flags&2)){a=a.stateNode;break e}}r?o7(e,a,c):l7(e,a,c)}function o7(e,c,a){var r=e.tag,t=r===5||r===6;if(t)e=t?e.stateNode:e.stateNode.instance,c?a.nodeType===8?a.parentNode.insertBefore(e,c):a.insertBefore(e,c):(a.nodeType===8?(c=a.parentNode,c.insertBefore(e,a)):(c=a,c.appendChild(e)),a=a._reactRootContainer,a!=null||c.onclick!==null||(c.onclick=ne));else if(r!==4&&(e=e.child,e!==null))for(o7(e,c,a),e=e.sibling;e!==null;)o7(e,c,a),e=e.sibling}function l7(e,c,a){var r=e.tag,t=r===5||r===6;if(t)e=t?e.stateNode:e.stateNode.instance,c?a.insertBefore(e,c):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(l7(e,c,a),e=e.sibling;e!==null;)l7(e,c,a),e=e.sibling}function So(e,c){for(var a=c,r=!1,t,n;;){if(!r){r=a.return;e:for(;;){if(r===null)throw Error(E(160));switch(t=r.stateNode,r.tag){case 5:n=!1;break e;case 3:t=t.containerInfo,n=!0;break e;case 4:t=t.containerInfo,n=!0;break e}r=r.return}r=!0}if(a.tag===5||a.tag===6){e:for(var i=e,o=a,f=o;;)if(V9(i,f),f.child!==null&&f.tag!==4)f.child.return=f,f=f.child;else{if(f===o)break e;for(;f.sibling===null;){if(f.return===null||f.return===o)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}n?(i=t,o=a.stateNode,i.nodeType===8?i.parentNode.removeChild(o):i.removeChild(o)):t.removeChild(a.stateNode)}else if(a.tag===4){if(a.child!==null){t=a.stateNode.containerInfo,n=!0,a.child.return=a,a=a.child;continue}}else if(V9(e,a),a.child!==null){a.child.return=a,a=a.child;continue}if(a===c)break;for(;a.sibling===null;){if(a.return===null||a.return===c)return;a=a.return,a.tag===4&&(r=!1)}a.sibling.return=a.return,a=a.sibling}}function uc(e,c){switch(c.tag){case 0:case 11:case 14:case 15:case 22:var a=c.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var r=a=a.next;do(r.tag&3)===3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==a)}return;case 1:return;case 5:if(a=c.stateNode,a!=null){r=c.memoizedProps;var t=e!==null?e.memoizedProps:r;e=c.type;var n=c.updateQueue;if(c.updateQueue=null,n!==null){for(a[ie]=r,e==="input"&&r.type==="radio"&&r.name!=null&&ps(a,r),Oc(e,t),c=Oc(e,r),t=0;t<n.length;t+=2){var i=n[t],o=n[t+1];i==="style"?Vs(a,o):i==="dangerouslySetInnerHTML"?Hs(a,o):i==="children"?e0(a,o):J7(a,i,o,c)}switch(e){case"input":Pc(a,r);break;case"textarea":vs(a,r);break;case"select":e=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!r.multiple,n=r.value,n!=null?A3(a,!!r.multiple,n,!1):e!==!!r.multiple&&(r.defaultValue!=null?A3(a,!!r.multiple,r.defaultValue,!0):A3(a,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(c.stateNode===null)throw Error(E(162));c.stateNode.nodeValue=c.memoizedProps;return;case 3:a=c.stateNode,a.hydrate&&(a.hydrate=!1,Ns(a.containerInfo));return;case 12:return;case 13:c.memoizedState!==null&&(_a=Q2(),g9(c.child,!0)),w9(c);return;case 19:w9(c);return;case 17:return;case 23:case 24:g9(c,c.memoizedState!==null);return}throw Error(E(163))}function w9(e){var c=e.updateQueue;if(c!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new JL),c.forEach(function(r){var t=uw.bind(null,e,r);a.has(r)||(a.add(r),r.then(t,t))})}}function cw(e,c){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(c=c.memoizedState,c!==null&&c.dehydrated===null):!1}var aw=Math.ceil,ge=o3.ReactCurrentDispatcher,Ea=o3.ReactCurrentOwner,Y=0,c1=null,D2=null,J2=0,c3=0,f7=_4(0),G2=0,We=null,r6=0,T0=0,t6=0,Pa=0,u7=null,_a=0,d7=1/0;function n6(){d7=Q2()+500}var O=null,Ve=!1,m7=null,N1=null,N4=!1,q6=null,A6=90,h7=[],p7=[],G1=null,G6=0,v7=null,$8=-1,F1=0,U8=0,K6=null,j8=!1;function l1(){return Y&48?Q2():$8!==-1?$8:$8=Q2()}function V4(e){if(e=e.mode,!(e&2))return 1;if(!(e&4))return q3()===99?1:2;if(F1===0&&(F1=r6),UL.transition!==0){U8!==0&&(U8=u7!==null?u7.pendingLanes:0),e=F1;var c=4186112&~U8;return c&=-c,c===0&&(e=4186112&~e,c=e&-e,c===0&&(c=8192)),c}return e=q3(),Y&4&&e===98?e=re(12,F1):(e=qM(e),e=re(e,F1)),e}function C4(e,c,a){if(50<G6)throw G6=0,v7=null,Error(E(185));if(e=qe(e,c),e===null)return null;De(e,c,a),e===c1&&(t6|=c,G2===4&&R3(e,J2));var r=q3();c===1?Y&8&&!(Y&48)?z7(e):(H1(e,a),Y===0&&(n6(),I1())):(!(Y&4)||r!==98&&r!==99||(G1===null?G1=new Set([e]):G1.add(e)),H1(e,a)),u7=e}function qe(e,c){e.lanes|=c;var a=e.alternate;for(a!==null&&(a.lanes|=c),a=e,e=e.return;e!==null;)e.childLanes|=c,a=e.alternate,a!==null&&(a.childLanes|=c),a=e,e=e.return;return a.tag===3?a.stateNode:null}function H1(e,c){for(var a=e.callbackNode,r=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-S4(i),f=1<<o,u=n[o];if(u===-1){if(!(f&r)||f&t){u=c,H3(f);var p=h2;n[o]=10<=p?u+250:6<=p?u+5e3:-1}}else u<=c&&(e.expiredLanes|=f);i&=~f}if(r=t0(e,e===c1?J2:0),c=h2,r===0)a!==null&&(a!==ic&&Jc(a),e.callbackNode=null,e.callbackPriority=0);else{if(a!==null){if(e.callbackPriority===c)return;a!==ic&&Jc(a)}c===15?(a=z7.bind(null,e),D1===null?(D1=[a],O8=Ca(Ue,no)):D1.push(a),a=ic):c===14?a=o0(99,z7.bind(null,e)):(a=GM(c),a=o0(a,ko.bind(null,e))),e.callbackPriority=c,e.callbackNode=a}}function ko(e){if($8=-1,U8=F1=0,Y&48)throw Error(E(327));var c=e.callbackNode;if(I4()&&e.callbackNode!==c)return null;var a=t0(e,e===c1?J2:0);if(a===0)return null;var r=a,t=Y;Y|=16;var n=Eo();(c1!==e||J2!==r)&&(n6(),D3(e,r));do try{nw();break}catch(o){To(e,o)}while(1);if(Ma(),ge.current=n,Y=t,D2!==null?r=0:(c1=null,J2=0,r=G2),r6&t6)D3(e,0);else if(r!==0){if(r===2&&(Y|=64,e.hydrate&&(e.hydrate=!1,ga(e.containerInfo)),a=Rs(e),a!==0&&(r=T6(e,a))),r===1)throw c=We,D3(e,0),R3(e,a),H1(e,Q2()),c;switch(e.finishedWork=e.current.alternate,e.finishedLanes=a,r){case 0:case 1:throw Error(E(345));case 2:O4(e);break;case 3:if(R3(e,a),(a&62914560)===a&&(r=_a+500-Q2(),10<r)){if(t0(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){l1(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Wn(O4.bind(null,e),r);break}O4(e);break;case 4:if(R3(e,a),(a&4186112)===a)break;for(r=e.eventTimes,t=-1;0<a;){var i=31-S4(a);n=1<<i,i=r[i],i>t&&(t=i),a&=~n}if(a=t,a=Q2()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*aw(a/1960))-a,10<a){e.timeoutHandle=Wn(O4.bind(null,e),a);break}O4(e);break;case 5:O4(e);break;default:throw Error(E(329))}}return H1(e,Q2()),e.callbackNode===c?ko.bind(null,e):null}function R3(e,c){for(c&=~Pa,c&=~t6,e.suspendedLanes|=c,e.pingedLanes&=~c,e=e.expirationTimes;0<c;){var a=31-S4(c),r=1<<a;e[a]=-1,c&=~r}}function z7(e){if(Y&48)throw Error(E(327));if(I4(),e===c1&&e.expiredLanes&J2){var c=J2,a=T6(e,c);r6&t6&&(c=t0(e,c),a=T6(e,c))}else c=t0(e,0),a=T6(e,c);if(e.tag!==0&&a===2&&(Y|=64,e.hydrate&&(e.hydrate=!1,ga(e.containerInfo)),c=Rs(e),c!==0&&(a=T6(e,c))),a===1)throw a=We,D3(e,0),R3(e,c),H1(e,Q2()),a;return e.finishedWork=e.current.alternate,e.finishedLanes=c,O4(e),H1(e,Q2()),null}function rw(){if(G1!==null){var e=G1;G1=null,e.forEach(function(c){c.expiredLanes|=24&c.pendingLanes,H1(c,Q2())})}I1()}function No(e,c){var a=Y;Y|=1;try{return e(c)}finally{Y=a,Y===0&&(n6(),I1())}}function Ao(e,c){var a=Y;Y&=-2,Y|=8;try{return e(c)}finally{Y=a,Y===0&&(n6(),I1())}}function C8(e,c){S2(f7,c3),c3|=c,r6|=c}function Ia(){c3=f7.current,g2(f7)}function D3(e,c){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,RL(a)),D2!==null)for(a=D2.return;a!==null;){var r=a;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&se();break;case 3:G3(),g2(i1),g2(Z2),xa();break;case 5:ya(r);break;case 4:G3();break;case 13:g2(x2);break;case 19:g2(x2);break;case 10:La(r);break;case 23:case 24:Ia()}a=a.return}c1=e,D2=A4(e.current,null),J2=c3=r6=c,G2=0,We=null,Pa=t6=T0=0}function To(e,c){do{var a=D2;try{if(Ma(),j6.current=He,he){for(var r=T2.memoizedState;r!==null;){var t=r.queue;t!==null&&(t.pending=null),r=r.next}he=!1}if(d0=0,q2=X2=T2=null,W6=!1,Ea.current=null,a===null||a.return===null){G2=1,We=c,D2=null;break}e:{var n=e,i=a.return,o=a,f=c;if(c=J2,o.flags|=2048,o.firstEffect=o.lastEffect=null,f!==null&&typeof f=="object"&&typeof f.then=="function"){var u=f;if(!(o.mode&2)){var p=o.alternate;p?(o.updateQueue=p.updateQueue,o.memoizedState=p.memoizedState,o.lanes=p.lanes):(o.updateQueue=null,o.memoizedState=null)}var g=(x2.current&1)!==0,H=i;do{var M;if(M=H.tag===13){var y=H.memoizedState;if(y!==null)M=y.dehydrated!==null;else{var L=H.memoizedProps;M=L.fallback===void 0?!1:L.unstable_avoidThisFallback!==!0?!0:!g}}if(M){var m=H.updateQueue;if(m===null){var h=new Set;h.add(u),H.updateQueue=h}else m.add(u);if(!(H.mode&2)){if(H.flags|=64,o.flags|=16384,o.flags&=-2981,o.tag===1)if(o.alternate===null)o.tag=17;else{var z=H4(-1,1);z.tag=2,g4(o,z)}o.lanes|=1;break e}f=void 0,o=c;var V=n.pingCache;if(V===null?(V=n.pingCache=new QL,f=new Set,V.set(u,f)):(f=V.get(u),f===void 0&&(f=new Set,V.set(u,f))),!f.has(o)){f.add(o);var C=fw.bind(null,n,u,o);u.then(C,C)}H.flags|=4096,H.lanes=c;break e}H=H.return}while(H!==null);f=Error((N3(o.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}G2!==5&&(G2=2),f=Ta(f,o),H=i;do{switch(H.tag){case 3:n=f,H.flags|=4096,c&=-c,H.lanes|=c;var N=xo(H,n,c);Jn(H,N);break e;case 1:n=f;var S=H.type,T=H.stateNode;if(!(H.flags&64)&&(typeof S.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(N1===null||!N1.has(T)))){H.flags|=4096,c&=-c,H.lanes|=c;var D=bo(H,n,c);Jn(H,D);break e}}H=H.return}while(H!==null)}_o(a)}catch(A){c=A,D2===a&&a!==null&&(D2=a=a.return);continue}break}while(1)}function Eo(){var e=ge.current;return ge.current=He,e===null?He:e}function T6(e,c){var a=Y;Y|=16;var r=Eo();c1===e&&J2===c||D3(e,c);do try{tw();break}catch(t){To(e,t)}while(1);if(Ma(),Y=a,ge.current=r,D2!==null)throw Error(E(261));return c1=null,J2=0,G2}function tw(){for(;D2!==null;)Po(D2)}function nw(){for(;D2!==null&&!BL();)Po(D2)}function Po(e){var c=Ro(e.alternate,e,c3);e.memoizedProps=e.pendingProps,c===null?_o(e):D2=c,Ea.current=null}function _o(e){var c=e;do{var a=c.alternate;if(e=c.return,c.flags&2048){if(a=XL(c),a!==null){a.flags&=2047,D2=a;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}else{if(a=YL(a,c,c3),a!==null){D2=a;return}if(a=c,a.tag!==24&&a.tag!==23||a.memoizedState===null||c3&1073741824||!(a.mode&4)){for(var r=0,t=a.child;t!==null;)r|=t.lanes|t.childLanes,t=t.sibling;a.childLanes=r}e!==null&&!(e.flags&2048)&&(e.firstEffect===null&&(e.firstEffect=c.firstEffect),c.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=c.firstEffect),e.lastEffect=c.lastEffect),1<c.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=c:e.firstEffect=c,e.lastEffect=c))}if(c=c.sibling,c!==null){D2=c;return}D2=c=e}while(c!==null);G2===0&&(G2=5)}function O4(e){var c=q3();return e3(99,iw.bind(null,e,c)),null}function iw(e,c){do I4();while(q6!==null);if(Y&48)throw Error(E(327));var a=e.finishedWork;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(E(177));e.callbackNode=null;var r=a.lanes|a.childLanes,t=r,n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;for(var i=e.eventTimes,o=e.expirationTimes;0<n;){var f=31-S4(n),u=1<<f;t[f]=0,i[f]=-1,o[f]=-1,n&=~u}if(G1!==null&&!(r&24)&&G1.has(e)&&G1.delete(e),e===c1&&(D2=c1=null,J2=0),1<a.flags?a.lastEffect!==null?(a.lastEffect.nextEffect=a,r=a.firstEffect):r=a:r=a.firstEffect,r!==null){if(t=Y,Y|=32,Ea.current=null,rc=R8,i=Dn(),Gc(i)){if("selectionStart"in i)o={start:i.selectionStart,end:i.selectionEnd};else e:if(o=(o=i.ownerDocument)&&o.defaultView||window,(u=o.getSelection&&o.getSelection())&&u.rangeCount!==0){o=u.anchorNode,n=u.anchorOffset,f=u.focusNode,u=u.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var p=0,g=-1,H=-1,M=0,y=0,L=i,m=null;c:for(;;){for(var h;L!==o||n!==0&&L.nodeType!==3||(g=p+n),L!==f||u!==0&&L.nodeType!==3||(H=p+u),L.nodeType===3&&(p+=L.nodeValue.length),(h=L.firstChild)!==null;)m=L,L=h;for(;;){if(L===i)break c;if(m===o&&++M===n&&(g=p),m===f&&++y===u&&(H=p),(h=L.nextSibling)!==null)break;L=m,m=L.parentNode}L=h}o=g===-1||H===-1?null:{start:g,end:H}}else o=null;o=o||{start:0,end:0}}else o=null;tc={focusedElem:i,selectionRange:o},R8=!1,K6=null,j8=!1,O=r;do try{sw()}catch(A){if(O===null)throw Error(E(330));M4(O,A),O=O.nextEffect}while(O!==null);K6=null,O=r;do try{for(i=e;O!==null;){var z=O.flags;if(z&16&&e0(O.stateNode,""),z&128){var V=O.alternate;if(V!==null){var C=V.ref;C!==null&&(typeof C=="function"?C(null):C.current=null)}}switch(z&1038){case 2:L9(O),O.flags&=-3;break;case 6:L9(O),O.flags&=-3,uc(O.alternate,O);break;case 1024:O.flags&=-1025;break;case 1028:O.flags&=-1025,uc(O.alternate,O);break;case 4:uc(O.alternate,O);break;case 8:o=O,So(i,o);var N=o.alternate;C9(o),N!==null&&C9(N)}O=O.nextEffect}}catch(A){if(O===null)throw Error(E(330));M4(O,A),O=O.nextEffect}while(O!==null);if(C=tc,V=Dn(),z=C.focusedElem,i=C.selectionRange,V!==z&&z&&z.ownerDocument&&Ws(z.ownerDocument.documentElement,z)){for(i!==null&&Gc(z)&&(V=i.start,C=i.end,C===void 0&&(C=V),"selectionStart"in z?(z.selectionStart=V,z.selectionEnd=Math.min(C,z.value.length)):(C=(V=z.ownerDocument||document)&&V.defaultView||window,C.getSelection&&(C=C.getSelection(),o=z.textContent.length,N=Math.min(i.start,o),i=i.end===void 0?N:Math.min(i.end,o),!C.extend&&N>i&&(o=i,i=N,N=o),o=Rn(z,N),n=Rn(z,i),o&&n&&(C.rangeCount!==1||C.anchorNode!==o.node||C.anchorOffset!==o.offset||C.focusNode!==n.node||C.focusOffset!==n.offset)&&(V=V.createRange(),V.setStart(o.node,o.offset),C.removeAllRanges(),N>i?(C.addRange(V),C.extend(n.node,n.offset)):(V.setEnd(n.node,n.offset),C.addRange(V)))))),V=[],C=z;C=C.parentNode;)C.nodeType===1&&V.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof z.focus=="function"&&z.focus(),z=0;z<V.length;z++)C=V[z],C.element.scrollLeft=C.left,C.element.scrollTop=C.top}R8=!!rc,tc=rc=null,e.current=a,O=r;do try{for(z=e;O!==null;){var S=O.flags;if(S&36&&ew(z,O.alternate,O),S&128){V=void 0;var T=O.ref;if(T!==null){var D=O.stateNode;switch(O.tag){case 5:V=D;break;default:V=D}typeof T=="function"?T(V):T.current=V}}O=O.nextEffect}}catch(A){if(O===null)throw Error(E(330));M4(O,A),O=O.nextEffect}while(O!==null);O=null,$L(),Y=t}else e.current=a;if(N4)N4=!1,q6=e,A6=c;else for(O=r;O!==null;)c=O.nextEffect,O.nextEffect=null,O.flags&8&&(S=O,S.sibling=null,S.stateNode=null),O=c;if(r=e.pendingLanes,r===0&&(N1=null),r===1?e===v7?G6++:(G6=0,v7=e):G6=0,a=a.stateNode,Q4&&typeof Q4.onCommitFiberRoot=="function")try{Q4.onCommitFiberRoot(Va,a,void 0,(a.current.flags&64)===64)}catch{}if(H1(e,Q2()),Ve)throw Ve=!1,e=m7,m7=null,e;return Y&8||I1(),null}function sw(){for(;O!==null;){var e=O.alternate;j8||K6===null||(O.flags&8?Ln(O,K6)&&(j8=!0):O.tag===13&&cw(e,O)&&Ln(O,K6)&&(j8=!0));var c=O.flags;c&256&&ZL(e,O),!(c&512)||N4||(N4=!0,o0(97,function(){return I4(),null})),O=O.nextEffect}}function I4(){if(A6!==90){var e=97<A6?97:A6;return A6=90,e3(e,lw)}return!1}function ow(e,c){h7.push(c,e),N4||(N4=!0,o0(97,function(){return I4(),null}))}function Io(e,c){p7.push(c,e),N4||(N4=!0,o0(97,function(){return I4(),null}))}function lw(){if(q6===null)return!1;var e=q6;if(q6=null,Y&48)throw Error(E(331));var c=Y;Y|=32;var a=p7;p7=[];for(var r=0;r<a.length;r+=2){var t=a[r],n=a[r+1],i=t.destroy;if(t.destroy=void 0,typeof i=="function")try{i()}catch(f){if(n===null)throw Error(E(330));M4(n,f)}}for(a=h7,h7=[],r=0;r<a.length;r+=2){t=a[r],n=a[r+1];try{var o=t.create;t.destroy=o()}catch(f){if(n===null)throw Error(E(330));M4(n,f)}}for(o=e.current.firstEffect;o!==null;)e=o.nextEffect,o.nextEffect=null,o.flags&8&&(o.sibling=null,o.stateNode=null),o=e;return Y=c,I1(),!0}function y9(e,c,a){c=Ta(a,c),c=xo(e,c,1),g4(e,c),c=l1(),e=qe(e,1),e!==null&&(De(e,1,c),H1(e,c))}function M4(e,c){if(e.tag===3)y9(e,e,c);else for(var a=e.return;a!==null;){if(a.tag===3){y9(a,e,c);break}else if(a.tag===1){var r=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(N1===null||!N1.has(r))){e=Ta(c,e);var t=bo(a,e,1);if(g4(a,t),t=l1(),a=qe(a,1),a!==null)De(a,1,t),H1(a,t);else if(typeof r.componentDidCatch=="function"&&(N1===null||!N1.has(r)))try{r.componentDidCatch(c,e)}catch{}break}}a=a.return}}function fw(e,c,a){var r=e.pingCache;r!==null&&r.delete(c),c=l1(),e.pingedLanes|=e.suspendedLanes&a,c1===e&&(J2&a)===a&&(G2===4||G2===3&&(J2&62914560)===J2&&500>Q2()-_a?D3(e,0):Pa|=a),H1(e,c)}function uw(e,c){var a=e.stateNode;a!==null&&a.delete(c),c=0,c===0&&(c=e.mode,c&2?c&4?(F1===0&&(F1=r6),c=g3(62914560&~F1),c===0&&(c=4194304)):c=q3()===99?1:2:c=1),a=l1(),e=qe(e,c),e!==null&&(De(e,c,a),H1(e,a))}var Ro;Ro=function(e,c,a){var r=c.lanes;if(e!==null)if(e.memoizedProps!==c.pendingProps||i1.current)w1=!0;else if(a&r)w1=!!(e.flags&16384);else{switch(w1=!1,c.tag){case 3:u9(c),oc();break;case 5:a9(c);break;case 1:s1(c.type)&&B8(c);break;case 4:c7(c,c.stateNode.containerInfo);break;case 10:r=c.memoizedProps.value;var t=c.type._context;S2(oe,t._currentValue),t._currentValue=r;break;case 13:if(c.memoizedState!==null)return a&c.child.childLanes?d9(e,c,a):(S2(x2,x2.current&1),c=$1(e,c,a),c!==null?c.sibling:null);S2(x2,x2.current&1);break;case 19:if(r=(a&c.childLanes)!==0,e.flags&64){if(r)return z9(e,c,a);c.flags|=64}if(t=c.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),S2(x2,x2.current),r)break;return null;case 23:case 24:return c.lanes=0,lc(e,c,a)}return $1(e,c,a)}else w1=!1;switch(c.lanes=0,c.tag){case 2:if(r=c.type,e!==null&&(e.alternate=null,c.alternate=null,c.flags|=2),e=c.pendingProps,t=W3(c,Z2.current),_3(c,a),t=Sa(null,c,r,e,t,a),c.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0){if(c.tag=1,c.memoizedState=null,c.updateQueue=null,s1(r)){var n=!0;B8(c)}else n=!1;c.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,wa(c);var i=r.getDerivedStateFromProps;typeof i=="function"&&ue(c,r,i,e),t.updater=je,c.stateNode=t,t._reactInternals=c,e7(c,r,e,a),c=n7(null,c,r,!0,n,a)}else c.tag=0,n1(null,c,t,a),c=c.child;return c;case 16:t=c.elementType;e:{switch(e!==null&&(e.alternate=null,c.alternate=null,c.flags|=2),e=c.pendingProps,n=t._init,t=n(t._payload),c.type=t,n=c.tag=mw(t),e=L1(t,e),n){case 0:c=t7(null,c,t,e,a);break e;case 1:c=f9(null,c,t,e,a);break e;case 11:c=o9(null,c,t,e,a);break e;case 14:c=l9(null,c,t,L1(t.type,e),r,a);break e}throw Error(E(306,t,""))}return c;case 0:return r=c.type,t=c.pendingProps,t=c.elementType===r?t:L1(r,t),t7(e,c,r,t,a);case 1:return r=c.type,t=c.pendingProps,t=c.elementType===r?t:L1(r,t),f9(e,c,r,t,a);case 3:if(u9(c),r=c.updateQueue,e===null||r===null)throw Error(E(282));if(r=c.pendingProps,t=c.memoizedState,t=t!==null?t.element:null,so(e,c),l0(c,r,null,a),r=c.memoizedState.element,r===t)oc(),c=$1(e,c,a);else{if(t=c.stateNode,(n=t.hydrate)&&(m4=P3(c.stateNode.containerInfo.firstChild),O1=c,n=E1=!0),n){if(e=t.mutableSourceEagerHydrationData,e!=null)for(t=0;t<e.length;t+=2)n=e[t],n._workInProgressVersionPrimary=e[t+1],I3.push(n);for(a=uo(c,null,r,a),c.child=a;a;)a.flags=a.flags&-3|1024,a=a.sibling}else n1(e,c,r,a),oc();c=c.child}return c;case 5:return a9(c),e===null&&a7(c),r=c.type,t=c.pendingProps,n=e!==null?e.memoizedProps:null,i=t.children,Xc(r,t)?i=null:n!==null&&Xc(r,n)&&(c.flags|=16),Mo(e,c),n1(e,c,i,a),c.child;case 6:return e===null&&a7(c),null;case 13:return d9(e,c,a);case 4:return c7(c,c.stateNode.containerInfo),r=c.pendingProps,e===null?c.child=de(c,null,r,a):n1(e,c,r,a),c.child;case 11:return r=c.type,t=c.pendingProps,t=c.elementType===r?t:L1(r,t),o9(e,c,r,t,a);case 7:return n1(e,c,c.pendingProps,a),c.child;case 8:return n1(e,c,c.pendingProps.children,a),c.child;case 12:return n1(e,c,c.pendingProps.children,a),c.child;case 10:e:{r=c.type._context,t=c.pendingProps,i=c.memoizedProps,n=t.value;var o=c.type._context;if(S2(oe,o._currentValue),o._currentValue=n,i!==null)if(o=i.value,n=h1(o,n)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(o,n):1073741823)|0,n===0){if(i.children===t.children&&!i1.current){c=$1(e,c,a);break e}}else for(o=c.child,o!==null&&(o.return=c);o!==null;){var f=o.dependencies;if(f!==null){i=o.child;for(var u=f.firstContext;u!==null;){if(u.context===r&&u.observedBits&n){o.tag===1&&(u=H4(-1,a&-a),u.tag=2,g4(o,u)),o.lanes|=a,u=o.alternate,u!==null&&(u.lanes|=a),io(o.return,a),f.lanes|=a;break}u=u.next}}else i=o.tag===10&&o.type===c.type?null:o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===c){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}n1(e,c,t.children,a),c=c.child}return c;case 9:return t=c.type,n=c.pendingProps,r=n.children,_3(c,a),t=z1(t,n.unstable_observedBits),r=r(t),c.flags|=1,n1(e,c,r,a),c.child;case 14:return t=c.type,n=L1(t,c.pendingProps),n=L1(t.type,n),l9(e,c,t,n,r,a);case 15:return Co(e,c,c.type,c.pendingProps,r,a);case 17:return r=c.type,t=c.pendingProps,t=c.elementType===r?t:L1(r,t),e!==null&&(e.alternate=null,c.alternate=null,c.flags|=2),c.tag=1,s1(r)?(e=!0,B8(c)):e=!1,_3(c,a),lo(c,r,t),e7(c,r,t,a),n7(null,c,r,!0,e,a);case 19:return z9(e,c,a);case 23:return lc(e,c,a);case 24:return lc(e,c,a)}throw Error(E(156,c.tag))};function dw(e,c,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=c,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function p1(e,c,a,r){return new dw(e,c,a,r)}function Ra(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mw(e){if(typeof e=="function")return Ra(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===Ie)return 14}return 2}function A4(e,c){var a=e.alternate;return a===null?(a=p1(e.tag,c,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=c,a.type=e.type,a.flags=0,a.nextEffect=null,a.firstEffect=null,a.lastEffect=null),a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,c=e.dependencies,a.dependencies=c===null?null:{lanes:c.lanes,firstContext:c.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function W8(e,c,a,r,t,n){var i=2;if(r=e,typeof e=="function")Ra(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case s4:return F3(a.children,t,n,c);case ds:i=8,t|=16;break;case Z7:i=8,t|=1;break;case R6:return e=p1(12,a,c,t|8),e.elementType=R6,e.type=R6,e.lanes=n,e;case D6:return e=p1(13,a,c,t),e.type=D6,e.elementType=D6,e.lanes=n,e;case Z8:return e=p1(19,a,c,t),e.elementType=Z8,e.lanes=n,e;case na:return Da(a,t,n,c);case Tc:return e=p1(24,a,c,t),e.elementType=Tc,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ea:i=10;break e;case ca:i=9;break e;case _e:i=11;break e;case Ie:i=14;break e;case aa:i=16,r=null;break e;case ra:i=22;break e}throw Error(E(130,e==null?e:typeof e,""))}return c=p1(i,a,c,t),c.elementType=e,c.type=r,c.lanes=n,c}function F3(e,c,a,r){return e=p1(7,e,r,c),e.lanes=a,e}function Da(e,c,a,r){return e=p1(23,e,r,c),e.elementType=na,e.lanes=a,e}function dc(e,c,a){return e=p1(6,e,null,c),e.lanes=a,e}function mc(e,c,a){return c=p1(4,e.children!==null?e.children:[],e.key,c),c.lanes=a,c.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},c}function hw(e,c,a){this.tag=c,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=a,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=X5(0),this.expirationTimes=X5(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=X5(0),this.mutableSourceEagerHydrationData=null}function pw(e,c,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U4,key:r==null?null:""+r,children:e,containerInfo:c,implementation:a}}function Ce(e,c,a,r){var t=c.current,n=l1(),i=V4(t);e:if(a){a=a._reactInternals;c:{if(l3(a)!==a||a.tag!==1)throw Error(E(170));var o=a;do{switch(o.tag){case 3:o=o.stateNode.context;break c;case 1:if(s1(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break c}}o=o.return}while(o!==null);throw Error(E(171))}if(a.tag===1){var f=a.type;if(s1(f)){a=Zs(a,f,o);break e}}a=o}else a=k4;return c.context===null?c.context=a:c.pendingContext=a,c=H4(n,i),c.payload={element:e},r=r===void 0?null:r,r!==null&&(c.callback=r),g4(t,c),C4(t,i,n),i}function hc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function x9(e,c){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<c?a:c}}function Fa(e,c){x9(e,c),(e=e.alternate)&&x9(e,c)}function vw(){return null}function Ba(e,c,a){var r=a!=null&&a.hydrationOptions!=null&&a.hydrationOptions.mutableSources||null;if(a=new hw(e,c,a!=null&&a.hydrate===!0),c=p1(3,null,null,c===2?7:c===1?3:0),a.current=c,c.stateNode=a,wa(c),e[a6]=a.current,Ks(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){c=r[e];var t=c._getVersion;t=t(c._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[c,t]:a.mutableSourceEagerHydrationData.push(c,t)}this._internalRoot=a}Ba.prototype.render=function(e){Ce(e,this._internalRoot,null,null)};Ba.prototype.unmount=function(){var e=this._internalRoot,c=e.containerInfo;Ce(null,e,null,function(){c[a6]=null})};function E0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zw(e,c){if(c||(c=e?e.nodeType===9?e.documentElement:e.firstChild:null,c=!(!c||c.nodeType!==1||!c.hasAttribute("data-reactroot"))),!c)for(var a;a=e.lastChild;)e.removeChild(a);return new Ba(e,0,c?{hydrate:!0}:void 0)}function Ge(e,c,a,r,t){var n=a._reactRootContainer;if(n){var i=n._internalRoot;if(typeof t=="function"){var o=t;t=function(){var u=hc(i);o.call(u)}}Ce(c,i,e,t)}else{if(n=a._reactRootContainer=zw(a,r),i=n._internalRoot,typeof t=="function"){var f=t;t=function(){var u=hc(i);f.call(u)}}Ao(function(){Ce(c,i,e,t)})}return hc(i)}bs=function(e){if(e.tag===13){var c=l1();C4(e,4,c),Fa(e,4)}};fa=function(e){if(e.tag===13){var c=l1();C4(e,67108864,c),Fa(e,67108864)}};Ss=function(e){if(e.tag===13){var c=l1(),a=V4(e);C4(e,a,c),Fa(e,a)}};ks=function(e,c){return c()};$c=function(e,c,a){switch(c){case"input":if(Pc(e,a),c=a.name,a.type==="radio"&&c!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+c)+'][type="radio"]'),c=0;c<a.length;c++){var r=a[c];if(r!==e&&r.form===e.form){var t=$e(r);if(!t)throw Error(E(90));hs(r),Pc(r,t)}}}break;case"textarea":vs(e,a);break;case"select":c=a.value,c!=null&&A3(e,!!a.multiple,c,!1)}};sa=No;Ls=function(e,c,a,r,t){var n=Y;Y|=4;try{return e3(98,e.bind(null,c,a,r,t))}finally{Y=n,Y===0&&(n6(),I1())}};oa=function(){!(Y&49)&&(rw(),I4())};ws=function(e,c){var a=Y;Y|=2;try{return e(c)}finally{Y=a,Y===0&&(n6(),I1())}};function Do(e,c){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E0(c))throw Error(E(200));return pw(e,c,null,a)}var Hw={Events:[N0,w3,$e,Cs,Ms,I4,{current:!1}]},b6={findFiberByHostInstance:W4,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},gw={bundleType:b6.bundleType,version:b6.version,rendererPackageName:b6.rendererPackageName,rendererConfig:b6.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:o3.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xs(e),e===null?null:e.stateNode},findFiberByHostInstance:b6.findFiberByHostInstance||vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var M8=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!M8.isDisabled&&M8.supportsFiber)try{Va=M8.inject(gw),Q4=M8}catch{}}V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hw;V1.createPortal=Do;V1.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var c=e._reactInternals;if(c===void 0)throw typeof e.render=="function"?Error(E(188)):Error(E(268,Object.keys(e)));return e=xs(c),e=e===null?null:e.stateNode,e};V1.flushSync=function(e,c){var a=Y;if(a&48)return e(c);Y|=1;try{if(e)return e3(99,e.bind(null,c))}finally{Y=a,I1()}};V1.hydrate=function(e,c,a){if(!E0(c))throw Error(E(200));return Ge(null,e,c,!0,a)};V1.render=function(e,c,a){if(!E0(c))throw Error(E(200));return Ge(null,e,c,!1,a)};V1.unmountComponentAtNode=function(e){if(!E0(e))throw Error(E(40));return e._reactRootContainer?(Ao(function(){Ge(null,null,e,!1,function(){e._reactRootContainer=null,e[a6]=null})}),!0):!1};V1.unstable_batchedUpdates=No;V1.unstable_createPortal=function(e,c){return Do(e,c,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};V1.unstable_renderSubtreeIntoContainer=function(e,c,a,r){if(!E0(a))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return Ge(e,c,a,!1,r)};V1.version="17.0.2";function Fo(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fo)}catch(e){console.error(e)}}Fo(),os.exports=V1;var Vw=os.exports;const Cw=x0(Vw);const Mw="modulepreload",Lw=function(e){return"/migrate-cra-to-vite/"+e},b9={},Ke=function(c,a,r){if(!a||a.length===0)return c();const t=document.getElementsByTagName("link");return Promise.all(a.map(n=>{if(n=Lw(n),n in b9)return;b9[n]=!0;const i=n.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(!!r)for(let p=t.length-1;p>=0;p--){const g=t[p];if(g.href===n&&(!i||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${o}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":Mw,i||(u.as="script",u.crossOrigin=""),u.href=n,document.head.appendChild(u),i)return new Promise((p,g)=>{u.addEventListener("load",p),u.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>c())};var Bo={exports:{}},m2={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ye=60103,Xe=60106,P0=60107,_0=60108,I0=60114,R0=60109,D0=60110,F0=60112,B0=60113,Oa=60120,O0=60115,$0=60116,Oo=60121,$o=60122,Uo=60117,jo=60129,Wo=60131;if(typeof Symbol=="function"&&Symbol.for){var W2=Symbol.for;Ye=W2("react.element"),Xe=W2("react.portal"),P0=W2("react.fragment"),_0=W2("react.strict_mode"),I0=W2("react.profiler"),R0=W2("react.provider"),D0=W2("react.context"),F0=W2("react.forward_ref"),B0=W2("react.suspense"),Oa=W2("react.suspense_list"),O0=W2("react.memo"),$0=W2("react.lazy"),Oo=W2("react.block"),$o=W2("react.server.block"),Uo=W2("react.fundamental"),jo=W2("react.debug_trace_mode"),Wo=W2("react.legacy_hidden")}function x1(e){if(typeof e=="object"&&e!==null){var c=e.$$typeof;switch(c){case Ye:switch(e=e.type,e){case P0:case I0:case _0:case B0:case Oa:return e;default:switch(e=e&&e.$$typeof,e){case D0:case F0:case $0:case O0:case R0:return e;default:return c}}case Xe:return c}}}var ww=R0,yw=Ye,xw=F0,bw=P0,Sw=$0,kw=O0,Nw=Xe,Aw=I0,Tw=_0,Ew=B0;m2.ContextConsumer=D0;m2.ContextProvider=ww;m2.Element=yw;m2.ForwardRef=xw;m2.Fragment=bw;m2.Lazy=Sw;m2.Memo=kw;m2.Portal=Nw;m2.Profiler=Aw;m2.StrictMode=Tw;m2.Suspense=Ew;m2.isAsyncMode=function(){return!1};m2.isConcurrentMode=function(){return!1};m2.isContextConsumer=function(e){return x1(e)===D0};m2.isContextProvider=function(e){return x1(e)===R0};m2.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ye};m2.isForwardRef=function(e){return x1(e)===F0};m2.isFragment=function(e){return x1(e)===P0};m2.isLazy=function(e){return x1(e)===$0};m2.isMemo=function(e){return x1(e)===O0};m2.isPortal=function(e){return x1(e)===Xe};m2.isProfiler=function(e){return x1(e)===I0};m2.isStrictMode=function(e){return x1(e)===_0};m2.isSuspense=function(e){return x1(e)===B0};m2.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===P0||e===I0||e===jo||e===_0||e===B0||e===Oa||e===Wo||typeof e=="object"&&e!==null&&(e.$$typeof===$0||e.$$typeof===O0||e.$$typeof===R0||e.$$typeof===D0||e.$$typeof===F0||e.$$typeof===Uo||e.$$typeof===Oo||e[0]===$o)};m2.typeOf=x1;Bo.exports=m2;var qo=Bo.exports;function Pw(e){function c(b,k,I,$,w){for(var Q=0,P=0,c2=0,e2=0,n2,q,d2=0,Y2=0,X,E2=X=n2=0,a2=0,P2=0,J=0,u2=0,o1=I.length,m1=o1-1,l2,U="",M2="",c4="",U2="",b1;a2<o1;){if(q=I.charCodeAt(a2),a2===m1&&P+e2+c2+Q!==0&&(P!==0&&(q=P===47?10:47),e2=c2=Q=0,o1++,m1++),P+e2+c2+Q===0){if(a2===m1&&(0<P2&&(U=U.replace(H,"")),0<U.trim().length)){switch(q){case 32:case 9:case 59:case 13:case 10:break;default:U+=I.charAt(a2)}q=59}switch(q){case 123:for(U=U.trim(),n2=U.charCodeAt(0),X=1,u2=++a2;a2<o1;){switch(q=I.charCodeAt(a2)){case 123:X++;break;case 125:X--;break;case 47:switch(q=I.charCodeAt(a2+1)){case 42:case 47:e:{for(E2=a2+1;E2<m1;++E2)switch(I.charCodeAt(E2)){case 47:if(q===42&&I.charCodeAt(E2-1)===42&&a2+2!==E2){a2=E2+1;break e}break;case 10:if(q===47){a2=E2+1;break e}}a2=E2}}break;case 91:q++;case 40:q++;case 34:case 39:for(;a2++<m1&&I.charCodeAt(a2)!==q;);}if(X===0)break;a2++}switch(X=I.substring(u2,a2),n2===0&&(n2=(U=U.replace(g,"").trim()).charCodeAt(0)),n2){case 64:switch(0<P2&&(U=U.replace(H,"")),q=U.charCodeAt(1),q){case 100:case 109:case 115:case 45:P2=k;break;default:P2=k2}if(X=c(k,P2,X,q,w+1),u2=X.length,0<i2&&(P2=a(k2,U,J),b1=o(3,X,P2,k,Z,t2,u2,q,w,$),U=P2.join(""),b1!==void 0&&(u2=(X=b1.trim()).length)===0&&(q=0,X="")),0<u2)switch(q){case 115:U=U.replace(S,i);case 100:case 109:case 45:X=U+"{"+X+"}";break;case 107:U=U.replace(z,"$1 $2"),X=U+"{"+X+"}",X=o2===1||o2===2&&n("@"+X,3)?"@-webkit-"+X+"@"+X:"@"+X;break;default:X=U+X,$===112&&(X=(M2+=X,""))}else X="";break;default:X=c(k,a(k,U,J),X,$,w+1)}c4+=X,X=J=P2=E2=n2=0,U="",q=I.charCodeAt(++a2);break;case 125:case 59:if(U=(0<P2?U.replace(H,""):U).trim(),1<(u2=U.length))switch(E2===0&&(n2=U.charCodeAt(0),n2===45||96<n2&&123>n2)&&(u2=(U=U.replace(" ",":")).length),0<i2&&(b1=o(1,U,k,b,Z,t2,M2.length,$,w,$))!==void 0&&(u2=(U=b1.trim()).length)===0&&(U="\0\0"),n2=U.charCodeAt(0),q=U.charCodeAt(1),n2){case 0:break;case 64:if(q===105||q===99){U2+=U+I.charAt(a2);break}default:U.charCodeAt(u2-1)!==58&&(M2+=t(U,n2,q,U.charCodeAt(2)))}J=P2=E2=n2=0,U="",q=I.charCodeAt(++a2)}}switch(q){case 13:case 10:P===47?P=0:1+n2===0&&$!==107&&0<U.length&&(P2=1,U+="\0"),0<i2*N2&&o(0,U,k,b,Z,t2,M2.length,$,w,$),t2=1,Z++;break;case 59:case 125:if(P+e2+c2+Q===0){t2++;break}default:switch(t2++,l2=I.charAt(a2),q){case 9:case 32:if(e2+Q+P===0)switch(d2){case 44:case 58:case 9:case 32:l2="";break;default:q!==32&&(l2=" ")}break;case 0:l2="\\0";break;case 12:l2="\\f";break;case 11:l2="\\v";break;case 38:e2+P+Q===0&&(P2=J=1,l2="\f"+l2);break;case 108:if(e2+P+Q+C2===0&&0<E2)switch(a2-E2){case 2:d2===112&&I.charCodeAt(a2-3)===58&&(C2=d2);case 8:Y2===111&&(C2=Y2)}break;case 58:e2+P+Q===0&&(E2=a2);break;case 44:P+c2+e2+Q===0&&(P2=1,l2+="\r");break;case 34:case 39:P===0&&(e2=e2===q?0:e2===0?q:e2);break;case 91:e2+P+c2===0&&Q++;break;case 93:e2+P+c2===0&&Q--;break;case 41:e2+P+Q===0&&c2--;break;case 40:if(e2+P+Q===0){if(n2===0)switch(2*d2+3*Y2){case 533:break;default:n2=1}c2++}break;case 64:P+c2+e2+Q+E2+X===0&&(X=1);break;case 42:case 47:if(!(0<e2+Q+c2))switch(P){case 0:switch(2*q+3*I.charCodeAt(a2+1)){case 235:P=47;break;case 220:u2=a2,P=42}break;case 42:q===47&&d2===42&&u2+2!==a2&&(I.charCodeAt(u2+2)===33&&(M2+=I.substring(u2,a2+1)),l2="",P=0)}}P===0&&(U+=l2)}Y2=d2,d2=q,a2++}if(u2=M2.length,0<u2){if(P2=k,0<i2&&(b1=o(2,M2,P2,b,Z,t2,u2,$,w,$),b1!==void 0&&(M2=b1).length===0))return U2+M2+c4;if(M2=P2.join(",")+"{"+M2+"}",o2*C2!==0){switch(o2!==2||n(M2,2)||(C2=0),C2){case 111:M2=M2.replace(C,":-moz-$1")+M2;break;case 112:M2=M2.replace(V,"::-webkit-input-$1")+M2.replace(V,"::-moz-$1")+M2.replace(V,":-ms-input-$1")+M2}C2=0}}return U2+M2+c4}function a(b,k,I){var $=k.trim().split(m);k=$;var w=$.length,Q=b.length;switch(Q){case 0:case 1:var P=0;for(b=Q===0?"":b[0]+" ";P<w;++P)k[P]=r(b,k[P],I).trim();break;default:var c2=P=0;for(k=[];P<w;++P)for(var e2=0;e2<Q;++e2)k[c2++]=r(b[e2]+" ",$[P],I).trim()}return k}function r(b,k,I){var $=k.charCodeAt(0);switch(33>$&&($=(k=k.trim()).charCodeAt(0)),$){case 38:return k.replace(h,"$1"+b.trim());case 58:return b.trim()+k.replace(h,"$1"+b.trim());default:if(0<1*I&&0<k.indexOf("\f"))return k.replace(h,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+k}function t(b,k,I,$){var w=b+";",Q=2*k+3*I+4*$;if(Q===944){b=w.indexOf(":",9)+1;var P=w.substring(b,w.length-1).trim();return P=w.substring(0,b).trim()+P+";",o2===1||o2===2&&n(P,1)?"-webkit-"+P+P:P}if(o2===0||o2===2&&!n(w,1))return w;switch(Q){case 1015:return w.charCodeAt(10)===97?"-webkit-"+w+w:w;case 951:return w.charCodeAt(3)===116?"-webkit-"+w+w:w;case 963:return w.charCodeAt(5)===110?"-webkit-"+w+w:w;case 1009:if(w.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+w+w;case 978:return"-webkit-"+w+"-moz-"+w+w;case 1019:case 983:return"-webkit-"+w+"-moz-"+w+"-ms-"+w+w;case 883:if(w.charCodeAt(8)===45)return"-webkit-"+w+w;if(0<w.indexOf("image-set(",11))return w.replace(v2,"$1-webkit-$2")+w;break;case 932:if(w.charCodeAt(4)===45)switch(w.charCodeAt(5)){case 103:return"-webkit-box-"+w.replace("-grow","")+"-webkit-"+w+"-ms-"+w.replace("grow","positive")+w;case 115:return"-webkit-"+w+"-ms-"+w.replace("shrink","negative")+w;case 98:return"-webkit-"+w+"-ms-"+w.replace("basis","preferred-size")+w}return"-webkit-"+w+"-ms-"+w+w;case 964:return"-webkit-"+w+"-ms-flex-"+w+w;case 1023:if(w.charCodeAt(8)!==99)break;return P=w.substring(w.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+w+"-ms-flex-pack"+P+w;case 1005:return y.test(w)?w.replace(M,":-webkit-")+w.replace(M,":-moz-")+w:w;case 1e3:switch(P=w.substring(13).trim(),k=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(k)){case 226:P=w.replace(N,"tb");break;case 232:P=w.replace(N,"tb-rl");break;case 220:P=w.replace(N,"lr");break;default:return w}return"-webkit-"+w+"-ms-"+P+w;case 1017:if(w.indexOf("sticky",9)===-1)break;case 975:switch(k=(w=b).length-10,P=(w.charCodeAt(k)===33?w.substring(0,k):w).substring(b.indexOf(":",7)+1).trim(),Q=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:w=w.replace(P,"-webkit-"+P)+";"+w;break;case 207:case 102:w=w.replace(P,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+w.replace(P,"-webkit-"+P)+";"+w.replace(P,"-ms-"+P+"box")+";"+w}return w+";";case 938:if(w.charCodeAt(5)===45)switch(w.charCodeAt(6)){case 105:return P=w.replace("-items",""),"-webkit-"+w+"-webkit-box-"+P+"-ms-flex-"+P+w;case 115:return"-webkit-"+w+"-ms-flex-item-"+w.replace(D,"")+w;default:return"-webkit-"+w+"-ms-flex-line-pack"+w.replace("align-content","").replace(D,"")+w}break;case 973:case 989:if(w.charCodeAt(3)!==45||w.charCodeAt(4)===122)break;case 931:case 953:if(B.test(b)===!0)return(P=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?t(b.replace("stretch","fill-available"),k,I,$).replace(":fill-available",":stretch"):w.replace(P,"-webkit-"+P)+w.replace(P,"-moz-"+P.replace("fill-",""))+w;break;case 962:if(w="-webkit-"+w+(w.charCodeAt(5)===102?"-ms-"+w:"")+w,I+$===211&&w.charCodeAt(13)===105&&0<w.indexOf("transform",10))return w.substring(0,w.indexOf(";",27)+1).replace(L,"$1-webkit-$2")+w}return w}function n(b,k){var I=b.indexOf(k===1?":":"{"),$=b.substring(0,k!==3?I:10);return I=b.substring(I+1,b.length-1),I2(k!==2?$:$.replace(A,"$1"),I,k)}function i(b,k){var I=t(k,k.charCodeAt(0),k.charCodeAt(1),k.charCodeAt(2));return I!==k+";"?I.replace(T," or ($1)").substring(4):"("+k+")"}function o(b,k,I,$,w,Q,P,c2,e2,n2){for(var q=0,d2=k,Y2;q<i2;++q)switch(Y2=y2[q].call(p,b,d2,I,$,w,Q,P,c2,e2,n2)){case void 0:case!1:case!0:case null:break;default:d2=Y2}if(d2!==k)return d2}function f(b){switch(b){case void 0:case null:i2=y2.length=0;break;default:if(typeof b=="function")y2[i2++]=b;else if(typeof b=="object")for(var k=0,I=b.length;k<I;++k)f(b[k]);else N2=!!b|0}return f}function u(b){return b=b.prefix,b!==void 0&&(I2=null,b?typeof b!="function"?o2=1:(o2=2,I2=b):o2=0),u}function p(b,k){var I=b;if(33>I.charCodeAt(0)&&(I=I.trim()),R=I,I=[R],0<i2){var $=o(-1,k,I,I,Z,t2,0,0,0,0);$!==void 0&&typeof $=="string"&&(k=$)}var w=c(k2,I,k,0,0);return 0<i2&&($=o(-2,w,I,I,Z,t2,w.length,0,0,0),$!==void 0&&(w=$)),R="",C2=0,t2=Z=1,w}var g=/^\0+/g,H=/[\0\r\f]/g,M=/: */g,y=/zoo|gra/,L=/([,: ])(transform)/g,m=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,z=/@(k\w+)\s*(\S*)\s*/,V=/::(place)/g,C=/:(read-only)/g,N=/[svh]\w+-[tblr]{2}/,S=/\(\s*(.*)\s*\)/g,T=/([\s\S]*?);/g,D=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,B=/stretch|:\s*\w+\-(?:conte|avail)/,v2=/([^-])(image-set\()/,t2=1,Z=1,C2=0,o2=1,k2=[],y2=[],i2=0,I2=null,N2=0,R="";return p.use=f,p.set=u,e!==void 0&&u(e),p}var _w={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Iw(e){var c=Object.create(null);return function(a){return c[a]===void 0&&(c[a]=e(a)),c[a]}}var Rw=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,S9=Iw(function(e){return Rw.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Go={exports:{}},f2={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $2=typeof Symbol=="function"&&Symbol.for,$a=$2?Symbol.for("react.element"):60103,Ua=$2?Symbol.for("react.portal"):60106,Qe=$2?Symbol.for("react.fragment"):60107,Je=$2?Symbol.for("react.strict_mode"):60108,Ze=$2?Symbol.for("react.profiler"):60114,e5=$2?Symbol.for("react.provider"):60109,c5=$2?Symbol.for("react.context"):60110,ja=$2?Symbol.for("react.async_mode"):60111,a5=$2?Symbol.for("react.concurrent_mode"):60111,r5=$2?Symbol.for("react.forward_ref"):60112,t5=$2?Symbol.for("react.suspense"):60113,Dw=$2?Symbol.for("react.suspense_list"):60120,n5=$2?Symbol.for("react.memo"):60115,i5=$2?Symbol.for("react.lazy"):60116,Fw=$2?Symbol.for("react.block"):60121,Bw=$2?Symbol.for("react.fundamental"):60117,Ow=$2?Symbol.for("react.responder"):60118,$w=$2?Symbol.for("react.scope"):60119;function u1(e){if(typeof e=="object"&&e!==null){var c=e.$$typeof;switch(c){case $a:switch(e=e.type,e){case ja:case a5:case Qe:case Ze:case Je:case t5:return e;default:switch(e=e&&e.$$typeof,e){case c5:case r5:case i5:case n5:case e5:return e;default:return c}}case Ua:return c}}}function Ko(e){return u1(e)===a5}f2.AsyncMode=ja;f2.ConcurrentMode=a5;f2.ContextConsumer=c5;f2.ContextProvider=e5;f2.Element=$a;f2.ForwardRef=r5;f2.Fragment=Qe;f2.Lazy=i5;f2.Memo=n5;f2.Portal=Ua;f2.Profiler=Ze;f2.StrictMode=Je;f2.Suspense=t5;f2.isAsyncMode=function(e){return Ko(e)||u1(e)===ja};f2.isConcurrentMode=Ko;f2.isContextConsumer=function(e){return u1(e)===c5};f2.isContextProvider=function(e){return u1(e)===e5};f2.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$a};f2.isForwardRef=function(e){return u1(e)===r5};f2.isFragment=function(e){return u1(e)===Qe};f2.isLazy=function(e){return u1(e)===i5};f2.isMemo=function(e){return u1(e)===n5};f2.isPortal=function(e){return u1(e)===Ua};f2.isProfiler=function(e){return u1(e)===Ze};f2.isStrictMode=function(e){return u1(e)===Je};f2.isSuspense=function(e){return u1(e)===t5};f2.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Qe||e===a5||e===Ze||e===Je||e===t5||e===Dw||typeof e=="object"&&e!==null&&(e.$$typeof===i5||e.$$typeof===n5||e.$$typeof===e5||e.$$typeof===c5||e.$$typeof===r5||e.$$typeof===Bw||e.$$typeof===Ow||e.$$typeof===$w||e.$$typeof===Fw)};f2.typeOf=u1;Go.exports=f2;var Uw=Go.exports,Wa=Uw,jw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ww={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Yo={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qa={};qa[Wa.ForwardRef]=qw;qa[Wa.Memo]=Yo;function k9(e){return Wa.isMemo(e)?Yo:qa[e.$$typeof]||jw}var Gw=Object.defineProperty,Kw=Object.getOwnPropertyNames,N9=Object.getOwnPropertySymbols,Yw=Object.getOwnPropertyDescriptor,Xw=Object.getPrototypeOf,A9=Object.prototype;function Xo(e,c,a){if(typeof c!="string"){if(A9){var r=Xw(c);r&&r!==A9&&Xo(e,r,a)}var t=Kw(c);N9&&(t=t.concat(N9(c)));for(var n=k9(e),i=k9(c),o=0;o<t.length;++o){var f=t[o];if(!Ww[f]&&!(a&&a[f])&&!(i&&i[f])&&!(n&&n[f])){var u=Yw(c,f);try{Gw(e,f,u)}catch{}}}}return e}var Qw=Xo;const Jw=x0(Qw);function U1(){return(U1=Object.assign||function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var T9=function(e,c){for(var a=[e[0]],r=0,t=c.length;r<t;r+=1)a.push(c[r],e[r+1]);return a},H7=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!qo.typeOf(e)},Me=Object.freeze([]),L4=Object.freeze({});function m0(e){return typeof e=="function"}function E9(e){return e.displayName||e.name||"Component"}function Ga(e){return e&&typeof e.styledComponentId=="string"}var K3=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ka=typeof window<"u"&&"HTMLElement"in window,Zw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY);function U0(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),r=1;r<c;r++)a[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(a.length>0?" Args: "+a.join(", "):""))}var ey=function(){function e(a){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=a}var c=e.prototype;return c.indexOfGroup=function(a){for(var r=0,t=0;t<a;t++)r+=this.groupSizes[t];return r},c.insertRules=function(a,r){if(a>=this.groupSizes.length){for(var t=this.groupSizes,n=t.length,i=n;a>=i;)(i<<=1)<0&&U0(16,""+a);this.groupSizes=new Uint32Array(i),this.groupSizes.set(t),this.length=i;for(var o=n;o<i;o++)this.groupSizes[o]=0}for(var f=this.indexOfGroup(a+1),u=0,p=r.length;u<p;u++)this.tag.insertRule(f,r[u])&&(this.groupSizes[a]++,f++)},c.clearGroup=function(a){if(a<this.length){var r=this.groupSizes[a],t=this.indexOfGroup(a),n=t+r;this.groupSizes[a]=0;for(var i=t;i<n;i++)this.tag.deleteRule(t)}},c.getGroup=function(a){var r="";if(a>=this.length||this.groupSizes[a]===0)return r;for(var t=this.groupSizes[a],n=this.indexOfGroup(a),i=n+t,o=n;o<i;o++)r+=this.tag.getRule(o)+`/*!sc*/
`;return r},e}(),q8=new Map,Le=new Map,Y6=1,L8=function(e){if(q8.has(e))return q8.get(e);for(;Le.has(Y6);)Y6++;var c=Y6++;return q8.set(e,c),Le.set(c,e),c},cy=function(e){return Le.get(e)},ay=function(e,c){c>=Y6&&(Y6=c+1),q8.set(e,c),Le.set(c,e)},ry="style["+K3+'][data-styled-version="5.3.6"]',ty=new RegExp("^"+K3+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),ny=function(e,c,a){for(var r,t=a.split(","),n=0,i=t.length;n<i;n++)(r=t[n])&&e.registerName(c,r)},iy=function(e,c){for(var a=(c.textContent||"").split(`/*!sc*/
`),r=[],t=0,n=a.length;t<n;t++){var i=a[t].trim();if(i){var o=i.match(ty);if(o){var f=0|parseInt(o[1],10),u=o[2];f!==0&&(ay(u,f),ny(e,u,o[3]),e.getTag().insertRules(f,r)),r.length=0}else r.push(i)}}},sy=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Qo=function(e){var c=document.head,a=e||c,r=document.createElement("style"),t=function(o){for(var f=o.childNodes,u=f.length;u>=0;u--){var p=f[u];if(p&&p.nodeType===1&&p.hasAttribute(K3))return p}}(a),n=t!==void 0?t.nextSibling:null;r.setAttribute(K3,"active"),r.setAttribute("data-styled-version","5.3.6");var i=sy();return i&&r.setAttribute("nonce",i),a.insertBefore(r,n),r},oy=function(){function e(a){var r=this.element=Qo(a);r.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var f=n[i];if(f.ownerNode===t)return f}U0(17)}(r),this.length=0}var c=e.prototype;return c.insertRule=function(a,r){try{return this.sheet.insertRule(r,a),this.length++,!0}catch{return!1}},c.deleteRule=function(a){this.sheet.deleteRule(a),this.length--},c.getRule=function(a){var r=this.sheet.cssRules[a];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),ly=function(){function e(a){var r=this.element=Qo(a);this.nodes=r.childNodes,this.length=0}var c=e.prototype;return c.insertRule=function(a,r){if(a<=this.length&&a>=0){var t=document.createTextNode(r),n=this.nodes[a];return this.element.insertBefore(t,n||null),this.length++,!0}return!1},c.deleteRule=function(a){this.element.removeChild(this.nodes[a]),this.length--},c.getRule=function(a){return a<this.length?this.nodes[a].textContent:""},e}(),fy=function(){function e(a){this.rules=[],this.length=0}var c=e.prototype;return c.insertRule=function(a,r){return a<=this.length&&(this.rules.splice(a,0,r),this.length++,!0)},c.deleteRule=function(a){this.rules.splice(a,1),this.length--},c.getRule=function(a){return a<this.length?this.rules[a]:""},e}(),P9=Ka,uy={isServer:!Ka,useCSSOMInjection:!Zw},Jo=function(){function e(a,r,t){a===void 0&&(a=L4),r===void 0&&(r={}),this.options=U1({},uy,{},a),this.gs=r,this.names=new Map(t),this.server=!!a.isServer,!this.server&&Ka&&P9&&(P9=!1,function(n){for(var i=document.querySelectorAll(ry),o=0,f=i.length;o<f;o++){var u=i[o];u&&u.getAttribute(K3)!=="active"&&(iy(n,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(a){return L8(a)};var c=e.prototype;return c.reconstructWithOptions=function(a,r){return r===void 0&&(r=!0),new e(U1({},this.options,{},a),this.gs,r&&this.names||void 0)},c.allocateGSInstance=function(a){return this.gs[a]=(this.gs[a]||0)+1},c.getTag=function(){return this.tag||(this.tag=(t=(r=this.options).isServer,n=r.useCSSOMInjection,i=r.target,a=t?new fy(i):n?new oy(i):new ly(i),new ey(a)));var a,r,t,n,i},c.hasNameForId=function(a,r){return this.names.has(a)&&this.names.get(a).has(r)},c.registerName=function(a,r){if(L8(a),this.names.has(a))this.names.get(a).add(r);else{var t=new Set;t.add(r),this.names.set(a,t)}},c.insertRules=function(a,r,t){this.registerName(a,r),this.getTag().insertRules(L8(a),t)},c.clearNames=function(a){this.names.has(a)&&this.names.get(a).clear()},c.clearRules=function(a){this.getTag().clearGroup(L8(a)),this.clearNames(a)},c.clearTag=function(){this.tag=void 0},c.toString=function(){return function(a){for(var r=a.getTag(),t=r.length,n="",i=0;i<t;i++){var o=cy(i);if(o!==void 0){var f=a.names.get(o),u=r.getGroup(i);if(f&&u&&f.size){var p=K3+".g"+i+'[id="'+o+'"]',g="";f!==void 0&&f.forEach(function(H){H.length>0&&(g+=H+",")}),n+=""+u+p+'{content:"'+g+`"}/*!sc*/
`}}}return n}(this)},e}(),dy=/(a)(d)/gi,_9=function(e){return String.fromCharCode(e+(e>25?39:97))};function g7(e){var c,a="";for(c=Math.abs(e);c>52;c=c/52|0)a=_9(c%52)+a;return(_9(c%52)+a).replace(dy,"$1-$2")}var b3=function(e,c){for(var a=c.length;a;)e=33*e^c.charCodeAt(--a);return e},Zo=function(e){return b3(5381,e)};function my(e){for(var c=0;c<e.length;c+=1){var a=e[c];if(m0(a)&&!Ga(a))return!1}return!0}var hy=Zo("5.3.6"),py=function(){function e(c,a,r){this.rules=c,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&my(c),this.componentId=a,this.baseHash=b3(hy,a),this.baseStyle=r,Jo.registerId(a)}return e.prototype.generateAndInjectStyles=function(c,a,r){var t=this.componentId,n=[];if(this.baseStyle&&n.push(this.baseStyle.generateAndInjectStyles(c,a,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&a.hasNameForId(t,this.staticRulesId))n.push(this.staticRulesId);else{var i=Y3(this.rules,c,a,r).join(""),o=g7(b3(this.baseHash,i)>>>0);if(!a.hasNameForId(t,o)){var f=r(i,"."+o,void 0,t);a.insertRules(t,o,f)}n.push(o),this.staticRulesId=o}else{for(var u=this.rules.length,p=b3(this.baseHash,r.hash),g="",H=0;H<u;H++){var M=this.rules[H];if(typeof M=="string")g+=M;else if(M){var y=Y3(M,c,a,r),L=Array.isArray(y)?y.join(""):y;p=b3(p,L+H),g+=L}}if(g){var m=g7(p>>>0);if(!a.hasNameForId(t,m)){var h=r(g,"."+m,void 0,t);a.insertRules(t,m,h)}n.push(m)}}return n.join(" ")},e}(),vy=/^\s*\/\/.*$/gm,zy=[":","[",".","#"];function Hy(e){var c,a,r,t,n=e===void 0?L4:e,i=n.options,o=i===void 0?L4:i,f=n.plugins,u=f===void 0?Me:f,p=new Pw(o),g=[],H=function(L){function m(h){if(h)try{L(h+"}")}catch{}}return function(h,z,V,C,N,S,T,D,A,B){switch(h){case 1:if(A===0&&z.charCodeAt(0)===64)return L(z+";"),"";break;case 2:if(D===0)return z+"/*|*/";break;case 3:switch(D){case 102:case 112:return L(V[0]+z),"";default:return z+(B===0?"/*|*/":"")}case-2:z.split("/*|*/}").forEach(m)}}}(function(L){g.push(L)}),M=function(L,m,h){return m===0&&zy.indexOf(h[a.length])!==-1||h.match(t)?L:"."+c};function y(L,m,h,z){z===void 0&&(z="&");var V=L.replace(vy,""),C=m&&h?h+" "+m+" { "+V+" }":V;return c=z,a=m,r=new RegExp("\\"+a+"\\b","g"),t=new RegExp("(\\"+a+"\\b){2,}"),p(h||!m?"":m,C)}return p.use([].concat(u,[function(L,m,h){L===2&&h.length&&h[0].lastIndexOf(a)>0&&(h[0]=h[0].replace(r,M))},H,function(L){if(L===-2){var m=g;return g=[],m}}])),y.hash=u.length?u.reduce(function(L,m){return m.name||U0(15),b3(L,m.name)},5381).toString():"",y}var el=e6.createContext();el.Consumer;var cl=e6.createContext(),gy=(cl.Consumer,new Jo),V7=Hy();function Vy(){return _.useContext(el)||gy}function Cy(){return _.useContext(cl)||V7}var My=function(){function e(c,a){var r=this;this.inject=function(t,n){n===void 0&&(n=V7);var i=r.name+n.hash;t.hasNameForId(r.id,i)||t.insertRules(r.id,i,n(r.rules,i,"@keyframes"))},this.toString=function(){return U0(12,String(r.name))},this.name=c,this.id="sc-keyframes-"+c,this.rules=a}return e.prototype.getName=function(c){return c===void 0&&(c=V7),this.name+c.hash},e}(),Ly=/([A-Z])/,wy=/([A-Z])/g,yy=/^ms-/,xy=function(e){return"-"+e.toLowerCase()};function I9(e){return Ly.test(e)?e.replace(wy,xy).replace(yy,"-ms-"):e}var R9=function(e){return e==null||e===!1||e===""};function Y3(e,c,a,r){if(Array.isArray(e)){for(var t,n=[],i=0,o=e.length;i<o;i+=1)(t=Y3(e[i],c,a,r))!==""&&(Array.isArray(t)?n.push.apply(n,t):n.push(t));return n}if(R9(e))return"";if(Ga(e))return"."+e.styledComponentId;if(m0(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!c)return e;var f=e(c);return Y3(f,c,a,r)}var u;return e instanceof My?a?(e.inject(a,r),e.getName(r)):e:H7(e)?function p(g,H){var M,y,L=[];for(var m in g)g.hasOwnProperty(m)&&!R9(g[m])&&(Array.isArray(g[m])&&g[m].isCss||m0(g[m])?L.push(I9(m)+":",g[m],";"):H7(g[m])?L.push.apply(L,p(g[m],m)):L.push(I9(m)+": "+(M=m,(y=g[m])==null||typeof y=="boolean"||y===""?"":typeof y!="number"||y===0||M in _w?String(y).trim():y+"px")+";"));return H?[H+" {"].concat(L,["}"]):L}(e):e.toString()}var D9=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function by(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),r=1;r<c;r++)a[r-1]=arguments[r];return m0(e)||H7(e)?D9(Y3(T9(Me,[e].concat(a)))):a.length===0&&e.length===1&&typeof e[0]=="string"?e:D9(Y3(T9(e,a)))}var Sy=function(e,c,a){return a===void 0&&(a=L4),e.theme!==a.theme&&e.theme||c||a.theme},ky=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ny=/(^-|-$)/g;function pc(e){return e.replace(ky,"-").replace(Ny,"")}var Ay=function(e){return g7(Zo(e)>>>0)};function w8(e){return typeof e=="string"&&!0}var C7=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Ty=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Ey(e,c,a){var r=e[a];C7(c)&&C7(r)?al(r,c):e[a]=c}function al(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),r=1;r<c;r++)a[r-1]=arguments[r];for(var t=0,n=a;t<n.length;t++){var i=n[t];if(C7(i))for(var o in i)Ty(o)&&Ey(e,i[o],o)}return e}var rl=e6.createContext();rl.Consumer;var vc={};function tl(e,c,a){var r=Ga(e),t=!w8(e),n=c.attrs,i=n===void 0?Me:n,o=c.componentId,f=o===void 0?function(z,V){var C=typeof z!="string"?"sc":pc(z);vc[C]=(vc[C]||0)+1;var N=C+"-"+Ay("5.3.6"+C+vc[C]);return V?V+"-"+N:N}(c.displayName,c.parentComponentId):o,u=c.displayName,p=u===void 0?function(z){return w8(z)?"styled."+z:"Styled("+E9(z)+")"}(e):u,g=c.displayName&&c.componentId?pc(c.displayName)+"-"+c.componentId:c.componentId||f,H=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,M=c.shouldForwardProp;r&&e.shouldForwardProp&&(M=c.shouldForwardProp?function(z,V,C){return e.shouldForwardProp(z,V,C)&&c.shouldForwardProp(z,V,C)}:e.shouldForwardProp);var y,L=new py(a,g,r?e.componentStyle:void 0),m=L.isStatic&&i.length===0,h=function(z,V){return function(C,N,S,T){var D=C.attrs,A=C.componentStyle,B=C.defaultProps,v2=C.foldedComponentIds,t2=C.shouldForwardProp,Z=C.styledComponentId,C2=C.target,o2=function($,w,Q){$===void 0&&($=L4);var P=U1({},w,{theme:$}),c2={};return Q.forEach(function(e2){var n2,q,d2,Y2=e2;for(n2 in m0(Y2)&&(Y2=Y2(P)),Y2)P[n2]=c2[n2]=n2==="className"?(q=c2[n2],d2=Y2[n2],q&&d2?q+" "+d2:q||d2):Y2[n2]}),[P,c2]}(Sy(N,_.useContext(rl),B)||L4,N,D),k2=o2[0],y2=o2[1],i2=function($,w,Q,P){var c2=Vy(),e2=Cy(),n2=w?$.generateAndInjectStyles(L4,c2,e2):$.generateAndInjectStyles(Q,c2,e2);return n2}(A,T,k2),I2=S,N2=y2.$as||N.$as||y2.as||N.as||C2,R=w8(N2),b=y2!==N?U1({},N,{},y2):N,k={};for(var I in b)I[0]!=="$"&&I!=="as"&&(I==="forwardedAs"?k.as=b[I]:(t2?t2(I,S9,N2):!R||S9(I))&&(k[I]=b[I]));return N.style&&y2.style!==N.style&&(k.style=U1({},N.style,{},y2.style)),k.className=Array.prototype.concat(v2,Z,i2!==Z?i2:null,N.className,y2.className).filter(Boolean).join(" "),k.ref=I2,_.createElement(N2,k)}(y,z,V,m)};return h.displayName=p,(y=e6.forwardRef(h)).attrs=H,y.componentStyle=L,y.displayName=p,y.shouldForwardProp=M,y.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Me,y.styledComponentId=g,y.target=r?e.target:e,y.withComponent=function(z){var V=c.componentId,C=function(S,T){if(S==null)return{};var D,A,B={},v2=Object.keys(S);for(A=0;A<v2.length;A++)D=v2[A],T.indexOf(D)>=0||(B[D]=S[D]);return B}(c,["componentId"]),N=V&&V+"-"+(w8(z)?z:pc(E9(z)));return tl(z,U1({},C,{attrs:H,componentId:N}),a)},Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=r?al({},e.defaultProps,z):z}}),y.toString=function(){return"."+y.styledComponentId},t&&Jw(y,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),y}var M7=function(e){return function c(a,r,t){if(t===void 0&&(t=L4),!qo.isValidElementType(r))return U0(1,String(r));var n=function(){return a(r,t,by.apply(void 0,arguments))};return n.withConfig=function(i){return c(a,r,U1({},t,{},i))},n.attrs=function(i){return c(a,r,U1({},t,{attrs:Array.prototype.concat(t.attrs,i).filter(Boolean)}))},n}(tl,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){M7[e]=M7(e)});const w2=M7;/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function h0(){return h0=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},h0.apply(this,arguments)}var h4;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(h4||(h4={}));const F9="popstate";function Py(e){e===void 0&&(e={});function c(t,n){let{pathname:i="/",search:o="",hash:f=""}=u3(t.location.hash.substr(1));return L7("",{pathname:i,search:o,hash:f},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function a(t,n){let i=t.document.querySelector("base"),o="";if(i&&i.getAttribute("href")){let f=t.location.href,u=f.indexOf("#");o=u===-1?f:f.slice(0,u)}return o+"#"+(typeof n=="string"?n:p0(n))}function r(t,n){_y(t.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(n)+")")}return Ry(c,a,r,e)}function _2(e,c){if(e===!1||e===null||typeof e>"u")throw new Error(c)}function _y(e,c){if(!e){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Iy(){return Math.random().toString(36).substr(2,8)}function B9(e,c){return{usr:e.state,key:e.key,idx:c}}function L7(e,c,a,r){return a===void 0&&(a=null),h0({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof c=="string"?u3(c):c,{state:a,key:c&&c.key||r||Iy()})}function p0(e){let{pathname:c="/",search:a="",hash:r=""}=e;return a&&a!=="?"&&(c+=a.charAt(0)==="?"?a:"?"+a),r&&r!=="#"&&(c+=r.charAt(0)==="#"?r:"#"+r),c}function u3(e){let c={};if(e){let a=e.indexOf("#");a>=0&&(c.hash=e.substr(a),e=e.substr(0,a));let r=e.indexOf("?");r>=0&&(c.search=e.substr(r),e=e.substr(0,r)),e&&(c.pathname=e)}return c}function Ry(e,c,a,r){r===void 0&&(r={});let{window:t=document.defaultView,v5Compat:n=!1}=r,i=t.history,o=h4.Pop,f=null,u=p();u==null&&(u=0,i.replaceState(h0({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function g(){o=h4.Pop;let m=p(),h=m==null?null:m-u;u=m,f&&f({action:o,location:L.location,delta:h})}function H(m,h){o=h4.Push;let z=L7(L.location,m,h);a&&a(z,m),u=p()+1;let V=B9(z,u),C=L.createHref(z);try{i.pushState(V,"",C)}catch{t.location.assign(C)}n&&f&&f({action:o,location:L.location,delta:1})}function M(m,h){o=h4.Replace;let z=L7(L.location,m,h);a&&a(z,m),u=p();let V=B9(z,u),C=L.createHref(z);i.replaceState(V,"",C),n&&f&&f({action:o,location:L.location,delta:0})}function y(m){let h=t.location.origin!=="null"?t.location.origin:t.location.href,z=typeof m=="string"?m:p0(m);return _2(h,"No window.location.(origin|href) available to create URL for href: "+z),new URL(z,h)}let L={get action(){return o},get location(){return e(t,i)},listen(m){if(f)throw new Error("A history only accepts one active listener");return t.addEventListener(F9,g),f=m,()=>{t.removeEventListener(F9,g),f=null}},createHref(m){return c(t,m)},createURL:y,encodeLocation(m){let h=y(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:H,replace:M,go(m){return i.go(m)}};return L}var O9;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O9||(O9={}));function Dy(e,c,a){a===void 0&&(a="/");let r=typeof c=="string"?u3(c):c,t=sl(r.pathname||"/",a);if(t==null)return null;let n=nl(e);Fy(n);let i=null;for(let o=0;i==null&&o<n.length;++o)i=Ky(n[o],Qy(t));return i}function nl(e,c,a,r){c===void 0&&(c=[]),a===void 0&&(a=[]),r===void 0&&(r="");let t=(n,i,o)=>{let f={relativePath:o===void 0?n.path||"":o,caseSensitive:n.caseSensitive===!0,childrenIndex:i,route:n};f.relativePath.startsWith("/")&&(_2(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let u=w4([r,f.relativePath]),p=a.concat(f);n.children&&n.children.length>0&&(_2(n.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nl(n.children,c,p,u)),!(n.path==null&&!n.index)&&c.push({path:u,score:qy(u,n.index),routesMeta:p})};return e.forEach((n,i)=>{var o;if(n.path===""||!((o=n.path)!=null&&o.includes("?")))t(n,i);else for(let f of il(n.path))t(n,i,f)}),c}function il(e){let c=e.split("/");if(c.length===0)return[];let[a,...r]=c,t=a.endsWith("?"),n=a.replace(/\?$/,"");if(r.length===0)return t?[n,""]:[n];let i=il(r.join("/")),o=[];return o.push(...i.map(f=>f===""?n:[n,f].join("/"))),t&&o.push(...i),o.map(f=>e.startsWith("/")&&f===""?"/":f)}function Fy(e){e.sort((c,a)=>c.score!==a.score?a.score-c.score:Gy(c.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}const By=/^:\w+$/,Oy=3,$y=2,Uy=1,jy=10,Wy=-2,$9=e=>e==="*";function qy(e,c){let a=e.split("/"),r=a.length;return a.some($9)&&(r+=Wy),c&&(r+=$y),a.filter(t=>!$9(t)).reduce((t,n)=>t+(By.test(n)?Oy:n===""?Uy:jy),r)}function Gy(e,c){return e.length===c.length&&e.slice(0,-1).every((r,t)=>r===c[t])?e[e.length-1]-c[c.length-1]:0}function Ky(e,c){let{routesMeta:a}=e,r={},t="/",n=[];for(let i=0;i<a.length;++i){let o=a[i],f=i===a.length-1,u=t==="/"?c:c.slice(t.length)||"/",p=Yy({path:o.relativePath,caseSensitive:o.caseSensitive,end:f},u);if(!p)return null;Object.assign(r,p.params);let g=o.route;n.push({params:r,pathname:w4([t,p.pathname]),pathnameBase:cx(w4([t,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(t=w4([t,p.pathnameBase]))}return n}function Yy(e,c){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,r]=Xy(e.path,e.caseSensitive,e.end),t=c.match(a);if(!t)return null;let n=t[0],i=n.replace(/(.)\/+$/,"$1"),o=t.slice(1);return{params:r.reduce((u,p,g)=>{if(p==="*"){let H=o[g]||"";i=n.slice(0,n.length-H.length).replace(/(.)\/+$/,"$1")}return u[p]=Jy(o[g]||"",p),u},{}),pathname:n,pathnameBase:i,pattern:e}}function Xy(e,c,a){c===void 0&&(c=!1),a===void 0&&(a=!0),Ya(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,o)=>(r.push(o),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,c?void 0:"i"),r]}function Qy(e){try{return decodeURI(e)}catch(c){return Ya(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),e}}function Jy(e,c){try{return decodeURIComponent(e)}catch(a){return Ya(!1,'The value for the URL param "'+c+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),e}}function sl(e,c){if(c==="/")return e;if(!e.toLowerCase().startsWith(c.toLowerCase()))return null;let a=c.endsWith("/")?c.length-1:c.length,r=e.charAt(a);return r&&r!=="/"?null:e.slice(a)||"/"}function Ya(e,c){if(!e){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Zy(e,c){c===void 0&&(c="/");let{pathname:a,search:r="",hash:t=""}=typeof e=="string"?u3(e):e;return{pathname:a?a.startsWith("/")?a:ex(a,c):c,search:ax(r),hash:rx(t)}}function ex(e,c){let a=c.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?a.length>1&&a.pop():t!=="."&&a.push(t)}),a.length>1?a.join("/"):"/"}function zc(e,c,a,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ol(e){return e.filter((c,a)=>a===0||c.route.path&&c.route.path.length>0)}function ll(e,c,a,r){r===void 0&&(r=!1);let t;typeof e=="string"?t=u3(e):(t=h0({},e),_2(!t.pathname||!t.pathname.includes("?"),zc("?","pathname","search",t)),_2(!t.pathname||!t.pathname.includes("#"),zc("#","pathname","hash",t)),_2(!t.search||!t.search.includes("#"),zc("#","search","hash",t)));let n=e===""||t.pathname==="",i=n?"/":t.pathname,o;if(r||i==null)o=a;else{let g=c.length-1;if(i.startsWith("..")){let H=i.split("/");for(;H[0]==="..";)H.shift(),g-=1;t.pathname=H.join("/")}o=g>=0?c[g]:"/"}let f=Zy(t,o),u=i&&i!=="/"&&i.endsWith("/"),p=(n||i===".")&&a.endsWith("/");return!f.pathname.endsWith("/")&&(u||p)&&(f.pathname+="/"),f}const w4=e=>e.join("/").replace(/\/\/+/g,"/"),cx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ax=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,rx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function tx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const fl=["post","put","patch","delete"];new Set(fl);const nx=["get",...fl];new Set(nx);/**
 * React Router v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w7(){return w7=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},w7.apply(this,arguments)}function ix(e,c){return e===c&&(e!==0||1/e===1/c)||e!==e&&c!==c}const sx=typeof Object.is=="function"?Object.is:ix,{useState:ox,useEffect:lx,useLayoutEffect:fx,useDebugValue:ux}=Ac;function dx(e,c,a){const r=c(),[{inst:t},n]=ox({inst:{value:r,getSnapshot:c}});return fx(()=>{t.value=r,t.getSnapshot=c,Hc(t)&&n({inst:t})},[e,r,c]),lx(()=>(Hc(t)&&n({inst:t}),e(()=>{Hc(t)&&n({inst:t})})),[e]),ux(r),r}function Hc(e){const c=e.getSnapshot,a=e.value;try{const r=c();return!sx(a,r)}catch{return!0}}function mx(e,c,a){return c()}const hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",px=!hx,vx=px?mx:dx;"useSyncExternalStore"in Ac&&(e=>e.useSyncExternalStore)(Ac);const ul=_.createContext(null),Xa=_.createContext(null),s5=_.createContext(null),o5=_.createContext(null),i6=_.createContext({outlet:null,matches:[]}),dl=_.createContext(null);function zx(e,c){let{relative:a}=c===void 0?{}:c;s6()||_2(!1);let{basename:r,navigator:t}=_.useContext(s5),{hash:n,pathname:i,search:o}=hl(e,{relative:a}),f=i;return r!=="/"&&(f=i==="/"?r:w4([r,i])),t.createHref({pathname:f,search:o,hash:n})}function s6(){return _.useContext(o5)!=null}function o6(){return s6()||_2(!1),_.useContext(o5).location}function ml(){s6()||_2(!1);let{basename:e,navigator:c}=_.useContext(s5),{matches:a}=_.useContext(i6),{pathname:r}=o6(),t=JSON.stringify(ol(a).map(o=>o.pathnameBase)),n=_.useRef(!1);return _.useEffect(()=>{n.current=!0}),_.useCallback(function(o,f){if(f===void 0&&(f={}),!n.current)return;if(typeof o=="number"){c.go(o);return}let u=ll(o,JSON.parse(t),r,f.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:w4([e,u.pathname])),(f.replace?c.replace:c.push)(u,f.state,f)},[e,c,t,r])}function hl(e,c){let{relative:a}=c===void 0?{}:c,{matches:r}=_.useContext(i6),{pathname:t}=o6(),n=JSON.stringify(ol(r).map(i=>i.pathnameBase));return _.useMemo(()=>ll(e,JSON.parse(n),t,a==="path"),[e,n,t,a])}function Hx(e,c){s6()||_2(!1);let{navigator:a}=_.useContext(s5),r=_.useContext(Xa),{matches:t}=_.useContext(i6),n=t[t.length-1],i=n?n.params:{};n&&n.pathname;let o=n?n.pathnameBase:"/";n&&n.route;let f=o6(),u;if(c){var p;let L=typeof c=="string"?u3(c):c;o==="/"||(p=L.pathname)!=null&&p.startsWith(o)||_2(!1),u=L}else u=f;let g=u.pathname||"/",H=o==="/"?g:g.slice(o.length)||"/",M=Dy(e,{pathname:H}),y=Mx(M&&M.map(L=>Object.assign({},L,{params:Object.assign({},i,L.params),pathname:w4([o,a.encodeLocation?a.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?o:w4([o,a.encodeLocation?a.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),t,r||void 0);return c&&y?_.createElement(o5.Provider,{value:{location:w7({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:h4.Pop}},y):y}function gx(){let e=xx(),c=tx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},n=null;return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},c),a?_.createElement("pre",{style:t},a):null,n)}class Vx extends _.Component{constructor(c){super(c),this.state={location:c.location,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,a){return a.location!==c.location?{error:c.error,location:c.location}:{error:c.error||a.error,location:a.location}}componentDidCatch(c,a){console.error("React Router caught the following error during render",c,a)}render(){return this.state.error?_.createElement(i6.Provider,{value:this.props.routeContext},_.createElement(dl.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Cx(e){let{routeContext:c,match:a,children:r}=e,t=_.useContext(ul);return t&&t.static&&t.staticContext&&a.route.errorElement&&(t.staticContext._deepestRenderedBoundaryId=a.route.id),_.createElement(i6.Provider,{value:c},r)}function Mx(e,c,a){if(c===void 0&&(c=[]),e==null)if(a!=null&&a.errors)e=a.matches;else return null;let r=e,t=a==null?void 0:a.errors;if(t!=null){let n=r.findIndex(i=>i.route.id&&(t==null?void 0:t[i.route.id]));n>=0||_2(!1),r=r.slice(0,Math.min(r.length,n+1))}return r.reduceRight((n,i,o)=>{let f=i.route.id?t==null?void 0:t[i.route.id]:null,u=a?i.route.errorElement||_.createElement(gx,null):null,p=c.concat(r.slice(0,o+1)),g=()=>_.createElement(Cx,{match:i,routeContext:{outlet:n,matches:p}},f?u:i.route.element!==void 0?i.route.element:n);return a&&(i.route.errorElement||o===0)?_.createElement(Vx,{location:a.location,component:u,error:f,children:g(),routeContext:{outlet:null,matches:p}}):g()},null)}var U9;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(U9||(U9={}));var we;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(we||(we={}));function Lx(e){let c=_.useContext(Xa);return c||_2(!1),c}function wx(e){let c=_.useContext(i6);return c||_2(!1),c}function yx(e){let c=wx(),a=c.matches[c.matches.length-1];return a.route.id||_2(!1),a.route.id}function xx(){var e;let c=_.useContext(dl),a=Lx(we.UseRouteError),r=yx(we.UseRouteError);return c||((e=a.errors)==null?void 0:e[r])}function bx(e){let{to:c,replace:a,state:r,relative:t}=e;s6()||_2(!1);let n=_.useContext(Xa),i=ml();return _.useEffect(()=>{n&&n.navigation.state!=="idle"||i(c,{replace:a,state:r,relative:t})}),null}function E6(e){_2(!1)}function Sx(e){let{basename:c="/",children:a=null,location:r,navigationType:t=h4.Pop,navigator:n,static:i=!1}=e;s6()&&_2(!1);let o=c.replace(/^\/*/,"/"),f=_.useMemo(()=>({basename:o,navigator:n,static:i}),[o,n,i]);typeof r=="string"&&(r=u3(r));let{pathname:u="/",search:p="",hash:g="",state:H=null,key:M="default"}=r,y=_.useMemo(()=>{let L=sl(u,o);return L==null?null:{pathname:L,search:p,hash:g,state:H,key:M}},[o,u,p,g,H,M]);return y==null?null:_.createElement(s5.Provider,{value:f},_.createElement(o5.Provider,{children:a,value:{location:y,navigationType:t}}))}function kx(e){let{children:c,location:a}=e,r=_.useContext(ul),t=r&&!c?r.router.routes:y7(c);return Hx(t,a)}var j9;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(j9||(j9={}));new Promise(()=>{});function y7(e,c){c===void 0&&(c=[]);let a=[];return _.Children.forEach(e,(r,t)=>{if(!_.isValidElement(r))return;if(r.type===_.Fragment){a.push.apply(a,y7(r.props.children,c));return}r.type!==E6&&_2(!1),!r.props.index||!r.props.children||_2(!1);let n=[...c,t],i={id:r.props.id||n.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=y7(r.props.children,n)),a.push(i)}),a}/**
 * React Router DOM v6.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x7(){return x7=Object.assign?Object.assign.bind():function(e){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},x7.apply(this,arguments)}function Nx(e,c){if(e==null)return{};var a={},r=Object.keys(e),t,n;for(n=0;n<r.length;n++)t=r[n],!(c.indexOf(t)>=0)&&(a[t]=e[t]);return a}function Ax(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tx(e,c){return e.button===0&&(!c||c==="_self")&&!Ax(e)}const Ex=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Px(e){let{basename:c,children:a,window:r}=e,t=_.useRef();t.current==null&&(t.current=Py({window:r,v5Compat:!0}));let n=t.current,[i,o]=_.useState({action:n.action,location:n.location});return _.useLayoutEffect(()=>n.listen(o),[n]),_.createElement(Sx,{basename:c,children:a,location:i.location,navigationType:i.action,navigator:n})}const _x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pl=_.forwardRef(function(c,a){let{onClick:r,relative:t,reloadDocument:n,replace:i,state:o,target:f,to:u,preventScrollReset:p}=c,g=Nx(c,Ex),H=typeof u=="string"?u:p0(u),M=/^[a-z+]+:\/\//i.test(H)||H.startsWith("//"),y=H,L=!1;if(_x&&M){let V=new URL(window.location.href),C=H.startsWith("//")?new URL(V.protocol+H):new URL(H);C.origin===V.origin?y=C.pathname+C.search+C.hash:L=!0}let m=zx(y,{relative:t}),h=Ix(y,{replace:i,state:o,target:f,preventScrollReset:p,relative:t});function z(V){r&&r(V),V.defaultPrevented||h(V)}return _.createElement("a",x7({},g,{href:M?H:m,onClick:L||n?r:z,ref:a,target:f}))});var W9;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(W9||(W9={}));var q9;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(q9||(q9={}));function Ix(e,c){let{target:a,replace:r,state:t,preventScrollReset:n,relative:i}=c===void 0?{}:c,o=ml(),f=o6(),u=hl(e,{relative:i});return _.useCallback(p=>{if(Tx(p,a)){p.preventDefault();let g=r!==void 0?r:p0(f)===p0(u);o(e,{replace:g,state:t,preventScrollReset:n,relative:i})}},[f,o,u,r,t,a,e,n,i])}const Rx="/migrate-cra-to-vite/assets/logo-67eb2664.png";var vl={exports:{}},Dx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Fx=Dx,Bx=Fx;function zl(){}function Hl(){}Hl.resetWarningCache=zl;var Ox=function(){function e(r,t,n,i,o,f){if(f!==Bx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function c(){return e}var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:c,element:e,elementType:e,instanceOf:c,node:e,objectOf:c,oneOf:c,oneOfType:c,shape:c,exact:c,checkPropTypes:Hl,resetWarningCache:zl};return a.PropTypes=a,a};vl.exports=Ox();var $x=vl.exports;const j1=x0($x);var gl={exports:{}};/*!
* sweetalert2 v11.7.12
* Released under the MIT License.
*/(function(e,c){(function(a,r){e.exports=r()})(r4,function(){const r={},t=()=>{r.previousActiveElement instanceof HTMLElement?(r.previousActiveElement.focus(),r.previousActiveElement=null):document.body&&document.body.focus()},n=s=>new Promise(l=>{if(!s)return l();const d=window.scrollX,v=window.scrollY;r.restoreFocusTimeout=setTimeout(()=>{t(),l()},100),window.scrollTo(d,v)});var i={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const o="swal2-",u=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((s,l)=>(s[l]=o+l,s),{}),g=["success","warning","info","question","error"].reduce((s,l)=>(s[l]=o+l,s),{}),H="SweetAlert2:",M=s=>s.charAt(0).toUpperCase()+s.slice(1),y=s=>{console.warn(`${H} ${typeof s=="object"?s.join(" "):s}`)},L=s=>{console.error(`${H} ${s}`)},m=[],h=s=>{m.includes(s)||(m.push(s),y(s))},z=(s,l)=>{h(`"${s}" is deprecated and will be removed in the next major release. Please use "${l}" instead.`)},V=s=>typeof s=="function"?s():s,C=s=>s&&typeof s.toPromise=="function",N=s=>C(s)?s.toPromise():Promise.resolve(s),S=s=>s&&Promise.resolve(s)===s,T=()=>document.body.querySelector(`.${u.container}`),D=s=>{const l=T();return l?l.querySelector(s):null},A=s=>D(`.${s}`),B=()=>A(u.popup),v2=()=>A(u.icon),t2=()=>A(u["icon-content"]),Z=()=>A(u.title),C2=()=>A(u["html-container"]),o2=()=>A(u.image),k2=()=>A(u["progress-steps"]),y2=()=>A(u["validation-message"]),i2=()=>D(`.${u.actions} .${u.confirm}`),I2=()=>D(`.${u.actions} .${u.cancel}`),N2=()=>D(`.${u.actions} .${u.deny}`),R=()=>A(u["input-label"]),b=()=>D(`.${u.loader}`),k=()=>A(u.actions),I=()=>A(u.footer),$=()=>A(u["timer-progress-bar"]),w=()=>A(u.close),Q=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,P=()=>{const s=B().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),l=Array.from(s).sort((x,G)=>{const s2=parseInt(x.getAttribute("tabindex")),R2=parseInt(G.getAttribute("tabindex"));return s2>R2?1:s2<R2?-1:0}),d=B().querySelectorAll(Q),v=Array.from(d).filter(x=>x.getAttribute("tabindex")!=="-1");return[...new Set(l.concat(v))].filter(x=>U2(x))},c2=()=>d2(document.body,u.shown)&&!d2(document.body,u["toast-shown"])&&!d2(document.body,u["no-backdrop"]),e2=()=>B()&&d2(B(),u.toast),n2=()=>B().hasAttribute("data-loading"),q=(s,l)=>{if(s.textContent="",l){const v=new DOMParser().parseFromString(l,"text/html");Array.from(v.querySelector("head").childNodes).forEach(x=>{s.appendChild(x)}),Array.from(v.querySelector("body").childNodes).forEach(x=>{x instanceof HTMLVideoElement||x instanceof HTMLAudioElement?s.appendChild(x.cloneNode(!0)):s.appendChild(x)})}},d2=(s,l)=>{if(!l)return!1;const d=l.split(/\s+/);for(let v=0;v<d.length;v++)if(!s.classList.contains(d[v]))return!1;return!0},Y2=(s,l)=>{Array.from(s.classList).forEach(d=>{!Object.values(u).includes(d)&&!Object.values(g).includes(d)&&!Object.values(l.showClass).includes(d)&&s.classList.remove(d)})},X=(s,l,d)=>{if(Y2(s,l),l.customClass&&l.customClass[d]){if(typeof l.customClass[d]!="string"&&!l.customClass[d].forEach){y(`Invalid type of customClass.${d}! Expected string or iterable object, got "${typeof l.customClass[d]}"`);return}J(s,l.customClass[d])}},E2=(s,l)=>{if(!l)return null;switch(l){case"select":case"textarea":case"file":return s.querySelector(`.${u.popup} > .${u[l]}`);case"checkbox":return s.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return s.querySelector(`.${u.popup} > .${u.radio} input:checked`)||s.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return s.querySelector(`.${u.popup} > .${u.range} input`);default:return s.querySelector(`.${u.popup} > .${u.input}`)}},a2=s=>{if(s.focus(),s.type!=="file"){const l=s.value;s.value="",s.value=l}},P2=(s,l,d)=>{!s||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(v=>{Array.isArray(s)?s.forEach(x=>{d?x.classList.add(v):x.classList.remove(v)}):d?s.classList.add(v):s.classList.remove(v)}))},J=(s,l)=>{P2(s,l,!0)},u2=(s,l)=>{P2(s,l,!1)},o1=(s,l)=>{const d=Array.from(s.children);for(let v=0;v<d.length;v++){const x=d[v];if(x instanceof HTMLElement&&d2(x,l))return x}},m1=(s,l,d)=>{d===`${parseInt(d)}`&&(d=parseInt(d)),d||parseInt(d)===0?s.style[l]=typeof d=="number"?`${d}px`:d:s.style.removeProperty(l)},l2=function(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";s&&(s.style.display=l)},U=s=>{s&&(s.style.display="none")},M2=(s,l,d,v)=>{const x=s.querySelector(l);x&&(x.style[d]=v)},c4=function(s,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?l2(s,d):U(s)},U2=s=>!!(s&&(s.offsetWidth||s.offsetHeight||s.getClientRects().length)),b1=()=>!U2(i2())&&!U2(N2())&&!U2(I2()),Vt=s=>s.scrollHeight>s.clientHeight,Ct=s=>{const l=window.getComputedStyle(s),d=parseFloat(l.getPropertyValue("animation-duration")||"0"),v=parseFloat(l.getPropertyValue("transition-duration")||"0");return d>0||v>0},P5=function(s){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const d=$();U2(d)&&(l&&(d.style.transition="none",d.style.width="100%"),setTimeout(()=>{d.style.transition=`width ${s/1e3}s linear`,d.style.width="0%"},10))},jg=()=>{const s=$(),l=parseInt(window.getComputedStyle(s).width);s.style.removeProperty("transition"),s.style.width="100%";const d=parseInt(window.getComputedStyle(s).width),v=l/d*100;s.style.width=`${v}%`},Mt=()=>typeof window>"u"||typeof document>"u",Wg=`
 <div aria-labelledby="${u.title}" aria-describedby="${u["html-container"]}" class="${u.popup}" tabindex="-1">
   <button type="button" class="${u.close}"></button>
   <ul class="${u["progress-steps"]}"></ul>
   <div class="${u.icon}"></div>
   <img class="${u.image}" />
   <h2 class="${u.title}" id="${u.title}"></h2>
   <div class="${u["html-container"]}" id="${u["html-container"]}"></div>
   <input class="${u.input}" />
   <input type="file" class="${u.file}" />
   <div class="${u.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${u.select}"></select>
   <div class="${u.radio}"></div>
   <label for="${u.checkbox}" class="${u.checkbox}">
     <input type="checkbox" />
     <span class="${u.label}"></span>
   </label>
   <textarea class="${u.textarea}"></textarea>
   <div class="${u["validation-message"]}" id="${u["validation-message"]}"></div>
   <div class="${u.actions}">
     <div class="${u.loader}"></div>
     <button type="button" class="${u.confirm}"></button>
     <button type="button" class="${u.deny}"></button>
     <button type="button" class="${u.cancel}"></button>
   </div>
   <div class="${u.footer}"></div>
   <div class="${u["timer-progress-bar-container"]}">
     <div class="${u["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),qg=()=>{const s=T();return s?(s.remove(),u2([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},F4=()=>{r.currentInstance.resetValidationMessage()},Gg=()=>{const s=B(),l=o1(s,u.input),d=o1(s,u.file),v=s.querySelector(`.${u.range} input`),x=s.querySelector(`.${u.range} output`),G=o1(s,u.select),s2=s.querySelector(`.${u.checkbox} input`),R2=o1(s,u.textarea);l.oninput=F4,d.onchange=F4,G.onchange=F4,s2.onchange=F4,R2.oninput=F4,v.oninput=()=>{F4(),x.value=v.value},v.onchange=()=>{F4(),x.value=v.value}},Kg=s=>typeof s=="string"?document.querySelector(s):s,Yg=s=>{const l=B();l.setAttribute("role",s.toast?"alert":"dialog"),l.setAttribute("aria-live",s.toast?"polite":"assertive"),s.toast||l.setAttribute("aria-modal","true")},Xg=s=>{window.getComputedStyle(s).direction==="rtl"&&J(T(),u.rtl)},Qg=s=>{const l=qg();if(Mt()){L("SweetAlert2 requires document to initialize");return}const d=document.createElement("div");d.className=u.container,l&&J(d,u["no-transition"]),q(d,Wg);const v=Kg(s.target);v.appendChild(d),Yg(s),Xg(v),Gg()},_5=(s,l)=>{s instanceof HTMLElement?l.appendChild(s):typeof s=="object"?Jg(s,l):s&&q(l,s)},Jg=(s,l)=>{s.jquery?Zg(l,s):q(l,s.toString())},Zg=(s,l)=>{if(s.textContent="",0 in l)for(let d=0;d in l;d++)s.appendChild(l[d].cloneNode(!0));else s.appendChild(l.cloneNode(!0))},d6=(()=>{if(Mt())return!1;const s=document.createElement("div"),l={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d)&&typeof s.style[d]<"u")return l[d];return!1})(),eV=(s,l)=>{const d=k(),v=b();!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?U(d):l2(d),X(d,l,"actions"),cV(d,v,l),q(v,l.loaderHtml),X(v,l,"loader")};function cV(s,l,d){const v=i2(),x=N2(),G=I2();I5(v,"confirm",d),I5(x,"deny",d),I5(G,"cancel",d),aV(v,x,G,d),d.reverseButtons&&(d.toast?(s.insertBefore(G,v),s.insertBefore(x,v)):(s.insertBefore(G,l),s.insertBefore(x,l),s.insertBefore(v,l)))}function aV(s,l,d,v){if(!v.buttonsStyling){u2([s,l,d],u.styled);return}J([s,l,d],u.styled),v.confirmButtonColor&&(s.style.backgroundColor=v.confirmButtonColor,J(s,u["default-outline"])),v.denyButtonColor&&(l.style.backgroundColor=v.denyButtonColor,J(l,u["default-outline"])),v.cancelButtonColor&&(d.style.backgroundColor=v.cancelButtonColor,J(d,u["default-outline"]))}function I5(s,l,d){c4(s,d[`show${M(l)}Button`],"inline-block"),q(s,d[`${l}ButtonText`]),s.setAttribute("aria-label",d[`${l}ButtonAriaLabel`]),s.className=u[l],X(s,d,`${l}Button`),J(s,d[`${l}ButtonClass`])}const rV=(s,l)=>{const d=w();d&&(q(d,l.closeButtonHtml||""),X(d,l,"closeButton"),c4(d,l.showCloseButton),d.setAttribute("aria-label",l.closeButtonAriaLabel||""))},tV=(s,l)=>{const d=T();d&&(nV(d,l.backdrop),iV(d,l.position),sV(d,l.grow),X(d,l,"container"))};function nV(s,l){typeof l=="string"?s.style.background=l:l||J([document.documentElement,document.body],u["no-backdrop"])}function iV(s,l){l in u?J(s,u[l]):(y('The "position" parameter is not valid, defaulting to "center"'),J(s,u.center))}function sV(s,l){if(l&&typeof l=="string"){const d=`grow-${l}`;d in u&&J(s,u[d])}}const oV=["input","file","range","select","radio","checkbox","textarea"],lV=(s,l)=>{const d=B(),v=i.innerParams.get(s),x=!v||l.input!==v.input;oV.forEach(G=>{const s2=o1(d,u[G]);dV(G,l.inputAttributes),s2.className=u[G],x&&U(s2)}),l.input&&(x&&fV(l),mV(l))},fV=s=>{if(!r1[s.input]){L(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${s.input}"`);return}const l=Lt(s.input),d=r1[s.input](l,s);l2(l),s.inputAutoFocus&&setTimeout(()=>{a2(d)})},uV=s=>{for(let l=0;l<s.attributes.length;l++){const d=s.attributes[l].name;["type","value","style"].includes(d)||s.removeAttribute(d)}},dV=(s,l)=>{const d=E2(B(),s);if(d){uV(d);for(const v in l)d.setAttribute(v,l[v])}},mV=s=>{const l=Lt(s.input);typeof s.customClass=="object"&&J(l,s.customClass.input)},R5=(s,l)=>{(!s.placeholder||l.inputPlaceholder)&&(s.placeholder=l.inputPlaceholder)},m6=(s,l,d)=>{if(d.inputLabel){s.id=u.input;const v=document.createElement("label"),x=u["input-label"];v.setAttribute("for",s.id),v.className=x,typeof d.customClass=="object"&&J(v,d.customClass.inputLabel),v.innerText=d.inputLabel,l.insertAdjacentElement("beforebegin",v)}},Lt=s=>o1(B(),u[s]||u.input),s8=(s,l)=>{["string","number"].includes(typeof l)?s.value=`${l}`:S(l)||y(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof l}"`)},r1={};r1.text=r1.email=r1.password=r1.number=r1.tel=r1.url=(s,l)=>(s8(s,l.inputValue),m6(s,s,l),R5(s,l),s.type=l.input,s),r1.file=(s,l)=>(m6(s,s,l),R5(s,l),s),r1.range=(s,l)=>{const d=s.querySelector("input"),v=s.querySelector("output");return s8(d,l.inputValue),d.type=l.input,s8(v,l.inputValue),m6(d,s,l),s},r1.select=(s,l)=>{if(s.textContent="",l.inputPlaceholder){const d=document.createElement("option");q(d,l.inputPlaceholder),d.value="",d.disabled=!0,d.selected=!0,s.appendChild(d)}return m6(s,s,l),s},r1.radio=s=>(s.textContent="",s),r1.checkbox=(s,l)=>{const d=E2(B(),"checkbox");d.value="1",d.id=u.checkbox,d.checked=!!l.inputValue;const v=s.querySelector("span");return q(v,l.inputPlaceholder),d},r1.textarea=(s,l)=>{s8(s,l.inputValue),R5(s,l),m6(s,s,l);const d=v=>parseInt(window.getComputedStyle(v).marginLeft)+parseInt(window.getComputedStyle(v).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const v=parseInt(window.getComputedStyle(B()).width),x=()=>{const G=s.offsetWidth+d(s);G>v?B().style.width=`${G}px`:B().style.width=null};new MutationObserver(x).observe(s,{attributes:!0,attributeFilter:["style"]})}}),s};const hV=(s,l)=>{const d=C2();d&&(X(d,l,"htmlContainer"),l.html?(_5(l.html,d),l2(d,"block")):l.text?(d.textContent=l.text,l2(d,"block")):U(d),lV(s,l))},pV=(s,l)=>{const d=I();d&&(c4(d,l.footer),l.footer&&_5(l.footer,d),X(d,l,"footer"))},vV=(s,l)=>{const d=i.innerParams.get(s),v=v2();if(d&&l.icon===d.icon){yt(v,l),wt(v,l);return}if(!l.icon&&!l.iconHtml){U(v);return}if(l.icon&&Object.keys(g).indexOf(l.icon)===-1){L(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${l.icon}"`),U(v);return}l2(v),yt(v,l),wt(v,l),J(v,l.showClass.icon)},wt=(s,l)=>{for(const d in g)l.icon!==d&&u2(s,g[d]);J(s,g[l.icon]),VV(s,l),zV(),X(s,l,"icon")},zV=()=>{const s=B(),l=window.getComputedStyle(s).getPropertyValue("background-color"),d=s.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let v=0;v<d.length;v++)d[v].style.backgroundColor=l},HV=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,gV=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,yt=(s,l)=>{let d=s.innerHTML,v;l.iconHtml?v=xt(l.iconHtml):l.icon==="success"?(v=HV,d=d.replace(/ style=".*?"/g,"")):l.icon==="error"?v=gV:v=xt({question:"?",warning:"!",info:"i"}[l.icon]),d.trim()!==v.trim()&&q(s,v)},VV=(s,l)=>{if(l.iconColor){s.style.color=l.iconColor,s.style.borderColor=l.iconColor;for(const d of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])M2(s,d,"backgroundColor",l.iconColor);M2(s,".swal2-success-ring","borderColor",l.iconColor)}},xt=s=>`<div class="${u["icon-content"]}">${s}</div>`,CV=(s,l)=>{const d=o2();if(d){if(!l.imageUrl){U(d);return}l2(d,""),d.setAttribute("src",l.imageUrl),d.setAttribute("alt",l.imageAlt||""),m1(d,"width",l.imageWidth),m1(d,"height",l.imageHeight),d.className=u.image,X(d,l,"image")}},MV=(s,l)=>{const d=T(),v=B();if(!(!d||!v)){if(l.toast){m1(d,"width",l.width),v.style.width="100%";const x=b();x&&v.insertBefore(x,v2())}else m1(v,"width",l.width);m1(v,"padding",l.padding),l.color&&(v.style.color=l.color),l.background&&(v.style.background=l.background),U(y2()),LV(v,l)}},LV=(s,l)=>{const d=l.showClass||{};s.className=`${u.popup} ${U2(s)?d.popup:""}`,l.toast?(J([document.documentElement,document.body],u["toast-shown"]),J(s,u.toast)):J(s,u.modal),X(s,l,"popup"),typeof l.customClass=="string"&&J(s,l.customClass),l.icon&&J(s,u[`icon-${l.icon}`])},wV=(s,l)=>{const d=k2();if(!d)return;const{progressSteps:v,currentProgressStep:x}=l;if(!v||v.length===0||x===void 0){U(d);return}l2(d),d.textContent="",x>=v.length&&y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),v.forEach((G,s2)=>{const R2=yV(G);if(d.appendChild(R2),s2===x&&J(R2,u["active-progress-step"]),s2!==v.length-1){const j2=xV(l);d.appendChild(j2)}})},yV=s=>{const l=document.createElement("li");return J(l,u["progress-step"]),q(l,s),l},xV=s=>{const l=document.createElement("li");return J(l,u["progress-step-line"]),s.progressStepsDistance&&m1(l,"width",s.progressStepsDistance),l},bV=(s,l)=>{const d=Z();d&&(c4(d,l.title||l.titleText,"block"),l.title&&_5(l.title,d),l.titleText&&(d.innerText=l.titleText),X(d,l,"title"))},bt=(s,l)=>{MV(s,l),tV(s,l),wV(s,l),vV(s,l),CV(s,l),bV(s,l),rV(s,l),hV(s,l),eV(s,l),pV(s,l);const d=B();typeof l.didRender=="function"&&d&&l.didRender(d)},SV=()=>U2(B()),St=()=>i2()&&i2().click(),kV=()=>N2()&&N2().click(),NV=()=>I2()&&I2().click(),d3=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),kt=s=>{s.keydownTarget&&s.keydownHandlerAdded&&(s.keydownTarget.removeEventListener("keydown",s.keydownHandler,{capture:s.keydownListenerCapture}),s.keydownHandlerAdded=!1)},AV=(s,l,d,v)=>{kt(l),d.toast||(l.keydownHandler=x=>EV(s,x,v),l.keydownTarget=d.keydownListenerCapture?window:B(),l.keydownListenerCapture=d.keydownListenerCapture,l.keydownTarget.addEventListener("keydown",l.keydownHandler,{capture:l.keydownListenerCapture}),l.keydownHandlerAdded=!0)},D5=(s,l)=>{const d=P();if(d.length){s=s+l,s===d.length?s=0:s===-1&&(s=d.length-1),d[s].focus();return}B().focus()},Nt=["ArrowRight","ArrowDown"],TV=["ArrowLeft","ArrowUp"],EV=(s,l,d)=>{const v=i.innerParams.get(s);v&&(l.isComposing||l.keyCode===229||(v.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?PV(s,l,v):l.key==="Tab"?_V(l):[...Nt,...TV].includes(l.key)?IV(l.key):l.key==="Escape"&&RV(l,v,d)))},PV=(s,l,d)=>{if(V(d.allowEnterKey)&&l.target&&s.getInput()&&l.target instanceof HTMLElement&&l.target.outerHTML===s.getInput().outerHTML){if(["textarea","file"].includes(d.input))return;St(),l.preventDefault()}},_V=s=>{const l=s.target,d=P();let v=-1;for(let x=0;x<d.length;x++)if(l===d[x]){v=x;break}s.shiftKey?D5(v,-1):D5(v,1),s.stopPropagation(),s.preventDefault()},IV=s=>{const l=i2(),d=N2(),v=I2(),x=[l,d,v];if(document.activeElement instanceof HTMLElement&&!x.includes(document.activeElement))return;const G=Nt.includes(s)?"nextElementSibling":"previousElementSibling";let s2=document.activeElement;for(let R2=0;R2<k().children.length;R2++){if(s2=s2[G],!s2)return;if(s2 instanceof HTMLButtonElement&&U2(s2))break}s2 instanceof HTMLButtonElement&&s2.focus()},RV=(s,l,d)=>{V(l.allowEscapeKey)&&(s.preventDefault(),d(d3.esc))};var h6={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const DV=()=>{Array.from(document.body.children).forEach(l=>{l===T()||l.contains(T())||(l.hasAttribute("aria-hidden")&&l.setAttribute("data-previous-aria-hidden",l.getAttribute("aria-hidden")||""),l.setAttribute("aria-hidden","true"))})},At=()=>{Array.from(document.body.children).forEach(l=>{l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")||""),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},FV=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!d2(document.body,u.iosfix)){const l=document.body.scrollTop;document.body.style.top=`${l*-1}px`,J(document.body,u.iosfix),OV(),BV()}},BV=()=>{const s=navigator.userAgent,l=!!s.match(/iPad/i)||!!s.match(/iPhone/i),d=!!s.match(/WebKit/i);l&&d&&!s.match(/CriOS/i)&&B().scrollHeight>window.innerHeight-44&&(T().style.paddingBottom="44px")},OV=()=>{const s=T();let l;s.ontouchstart=d=>{l=$V(d)},s.ontouchmove=d=>{l&&(d.preventDefault(),d.stopPropagation())}},$V=s=>{const l=s.target,d=T();return UV(s)||jV(s)?!1:l===d||!Vt(d)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(Vt(C2())&&C2().contains(l))},UV=s=>s.touches&&s.touches.length&&s.touches[0].touchType==="stylus",jV=s=>s.touches&&s.touches.length>1,WV=()=>{if(d2(document.body,u.iosfix)){const s=parseInt(document.body.style.top,10);u2(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=s*-1}},qV=()=>{const s=document.createElement("div");s.className=u["scrollbar-measure"],document.body.appendChild(s);const l=s.getBoundingClientRect().width-s.clientWidth;return document.body.removeChild(s),l};let m3=null;const GV=()=>{m3===null&&document.body.scrollHeight>window.innerHeight&&(m3=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${m3+qV()}px`)},KV=()=>{m3!==null&&(document.body.style.paddingRight=`${m3}px`,m3=null)};function Tt(s,l,d,v){e2()?Pt(s,v):(n(d).then(()=>Pt(s,v)),kt(r)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(l.setAttribute("style","display:none !important"),l.removeAttribute("class"),l.innerHTML=""):l.remove(),c2()&&(KV(),WV(),At()),YV()}function YV(){u2([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function a4(s){s=QV(s);const l=h6.swalPromiseResolve.get(this),d=XV(this);this.isAwaitingPromise?s.isDismissed||(p6(this),l(s)):d&&l(s)}const XV=s=>{const l=B();if(!l)return!1;const d=i.innerParams.get(s);if(!d||d2(l,d.hideClass.popup))return!1;u2(l,d.showClass.popup),J(l,d.hideClass.popup);const v=T();return u2(v,d.showClass.backdrop),J(v,d.hideClass.backdrop),JV(s,l,d),!0};function Et(s){const l=h6.swalPromiseReject.get(this);p6(this),l&&l(s)}const p6=s=>{s.isAwaitingPromise&&(delete s.isAwaitingPromise,i.innerParams.get(s)||s._destroy())},QV=s=>typeof s>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},s),JV=(s,l,d)=>{const v=T(),x=d6&&Ct(l);typeof d.willClose=="function"&&d.willClose(l),x?ZV(s,l,v,d.returnFocus,d.didClose):Tt(s,v,d.returnFocus,d.didClose)},ZV=(s,l,d,v,x)=>{r.swalCloseEventFinishedCallback=Tt.bind(null,s,d,v,x),l.addEventListener(d6,function(G){G.target===l&&(r.swalCloseEventFinishedCallback(),delete r.swalCloseEventFinishedCallback)})},Pt=(s,l)=>{setTimeout(()=>{typeof l=="function"&&l.bind(s.params)(),s._destroy&&s._destroy()})},h3=s=>{let l=B();l||new f8,l=B();const d=b();e2()?U(v2()):eC(l,s),l2(d),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()},eC=(s,l)=>{const d=k(),v=b();!l&&U2(i2())&&(l=i2()),l2(d),l&&(U(l),v.setAttribute("data-button-to-replace",l.className)),v.parentNode.insertBefore(v,l),J([s,d],u.loading)},cC=(s,l)=>{l.input==="select"||l.input==="radio"?iC(s,l):["text","email","number","tel","textarea"].includes(l.input)&&(C(l.inputValue)||S(l.inputValue))&&(h3(i2()),sC(s,l))},aC=(s,l)=>{const d=s.getInput();if(!d)return null;switch(l.input){case"checkbox":return rC(d);case"radio":return tC(d);case"file":return nC(d);default:return l.inputAutoTrim?d.value.trim():d.value}},rC=s=>s.checked?1:0,tC=s=>s.checked?s.value:null,nC=s=>s.files.length?s.getAttribute("multiple")!==null?s.files:s.files[0]:null,iC=(s,l)=>{const d=B(),v=x=>{oC[l.input](d,F5(x),l)};C(l.inputOptions)||S(l.inputOptions)?(h3(i2()),N(l.inputOptions).then(x=>{s.hideLoading(),v(x)})):typeof l.inputOptions=="object"?v(l.inputOptions):L(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof l.inputOptions}`)},sC=(s,l)=>{const d=s.getInput();U(d),N(l.inputValue).then(v=>{d.value=l.input==="number"?`${parseFloat(v)||0}`:`${v}`,l2(d),d.focus(),s.hideLoading()}).catch(v=>{L(`Error in inputValue promise: ${v}`),d.value="",l2(d),d.focus(),s.hideLoading()})},oC={select:(s,l,d)=>{const v=o1(s,u.select),x=(G,s2,R2)=>{const j2=document.createElement("option");j2.value=R2,q(j2,s2),j2.selected=_t(R2,d.inputValue),G.appendChild(j2)};l.forEach(G=>{const s2=G[0],R2=G[1];if(Array.isArray(R2)){const j2=document.createElement("optgroup");j2.label=s2,j2.disabled=!1,v.appendChild(j2),R2.forEach(v3=>x(j2,v3[1],v3[0]))}else x(v,R2,s2)}),v.focus()},radio:(s,l,d)=>{const v=o1(s,u.radio);l.forEach(G=>{const s2=G[0],R2=G[1],j2=document.createElement("input"),v3=document.createElement("label");j2.type="radio",j2.name=u.radio,j2.value=s2,_t(s2,d.inputValue)&&(j2.checked=!0);const j5=document.createElement("span");q(j5,R2),j5.className=u.label,v3.appendChild(j2),v3.appendChild(j5),v.appendChild(v3)});const x=v.querySelectorAll("input");x.length&&x[0].focus()}},F5=s=>{const l=[];return typeof Map<"u"&&s instanceof Map?s.forEach((d,v)=>{let x=d;typeof x=="object"&&(x=F5(x)),l.push([v,x])}):Object.keys(s).forEach(d=>{let v=s[d];typeof v=="object"&&(v=F5(v)),l.push([d,v])}),l},_t=(s,l)=>l&&l.toString()===s.toString(),lC=s=>{const l=i.innerParams.get(s);s.disableButtons(),l.input?It(s,"confirm"):O5(s,!0)},fC=s=>{const l=i.innerParams.get(s);s.disableButtons(),l.returnInputValueOnDeny?It(s,"deny"):B5(s,!1)},uC=(s,l)=>{s.disableButtons(),l(d3.cancel)},It=(s,l)=>{const d=i.innerParams.get(s);if(!d.input){L(`The "input" parameter is needed to be set when using returnInputValueOn${M(l)}`);return}const v=aC(s,d);d.inputValidator?dC(s,v,l):s.getInput().checkValidity()?l==="deny"?B5(s,v):O5(s,v):(s.enableButtons(),s.showValidationMessage(d.validationMessage))},dC=(s,l,d)=>{const v=i.innerParams.get(s);s.disableInput(),Promise.resolve().then(()=>N(v.inputValidator(l,v.validationMessage))).then(G=>{s.enableButtons(),s.enableInput(),G?s.showValidationMessage(G):d==="deny"?B5(s,l):O5(s,l)})},B5=(s,l)=>{const d=i.innerParams.get(s||void 0);d.showLoaderOnDeny&&h3(N2()),d.preDeny?(s.isAwaitingPromise=!0,Promise.resolve().then(()=>N(d.preDeny(l,d.validationMessage))).then(x=>{x===!1?(s.hideLoading(),p6(s)):s.close({isDenied:!0,value:typeof x>"u"?l:x})}).catch(x=>Dt(s||void 0,x))):s.close({isDenied:!0,value:l})},Rt=(s,l)=>{s.close({isConfirmed:!0,value:l})},Dt=(s,l)=>{s.rejectPromise(l)},O5=(s,l)=>{const d=i.innerParams.get(s||void 0);d.showLoaderOnConfirm&&h3(),d.preConfirm?(s.resetValidationMessage(),s.isAwaitingPromise=!0,Promise.resolve().then(()=>N(d.preConfirm(l,d.validationMessage))).then(x=>{U2(y2())||x===!1?(s.hideLoading(),p6(s)):Rt(s,typeof x>"u"?l:x)}).catch(x=>Dt(s||void 0,x))):Rt(s,l)};function o8(){const s=i.innerParams.get(this);if(!s)return;const l=i.domCache.get(this);U(l.loader),e2()?s.icon&&l2(v2()):mC(l),u2([l.popup,l.actions],u.loading),l.popup.removeAttribute("aria-busy"),l.popup.removeAttribute("data-loading"),l.confirmButton.disabled=!1,l.denyButton.disabled=!1,l.cancelButton.disabled=!1}const mC=s=>{const l=s.popup.getElementsByClassName(s.loader.getAttribute("data-button-to-replace"));l.length?l2(l[0],"inline-block"):b1()&&U(s.actions)};function Ft(){const s=i.innerParams.get(this),l=i.domCache.get(this);return l?E2(l.popup,s.input):null}function Bt(s,l,d){const v=i.domCache.get(s);l.forEach(x=>{v[x].disabled=d})}function Ot(s,l){if(s)if(s.type==="radio"){const v=s.parentNode.parentNode.querySelectorAll("input");for(let x=0;x<v.length;x++)v[x].disabled=l}else s.disabled=l}function $t(){Bt(this,["confirmButton","denyButton","cancelButton"],!1)}function Ut(){Bt(this,["confirmButton","denyButton","cancelButton"],!0)}function jt(){Ot(this.getInput(),!1)}function Wt(){Ot(this.getInput(),!0)}function qt(s){const l=i.domCache.get(this),d=i.innerParams.get(this);q(l.validationMessage,s),l.validationMessage.className=u["validation-message"],d.customClass&&d.customClass.validationMessage&&J(l.validationMessage,d.customClass.validationMessage),l2(l.validationMessage);const v=this.getInput();v&&(v.setAttribute("aria-invalid",!0),v.setAttribute("aria-describedby",u["validation-message"]),a2(v),J(v,u.inputerror))}function Gt(){const s=i.domCache.get(this);s.validationMessage&&U(s.validationMessage);const l=this.getInput();l&&(l.removeAttribute("aria-invalid"),l.removeAttribute("aria-describedby"),u2(l,u.inputerror))}const p3={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},hC=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],pC={},vC=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Kt=s=>Object.prototype.hasOwnProperty.call(p3,s),Yt=s=>hC.indexOf(s)!==-1,Xt=s=>pC[s],zC=s=>{Kt(s)||y(`Unknown parameter "${s}"`)},HC=s=>{vC.includes(s)&&y(`The parameter "${s}" is incompatible with toasts`)},gC=s=>{const l=Xt(s);l&&z(s,l)},VC=s=>{s.backdrop===!1&&s.allowOutsideClick&&y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const l in s)zC(l),s.toast&&HC(l),gC(l)};function Qt(s){const l=B(),d=i.innerParams.get(this);if(!l||d2(l,d.hideClass.popup)){y("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const v=CC(s),x=Object.assign({},d,v);bt(this,x),i.innerParams.set(this,x),Object.defineProperties(this,{params:{value:Object.assign({},this.params,s),writable:!1,enumerable:!0}})}const CC=s=>{const l={};return Object.keys(s).forEach(d=>{Yt(d)?l[d]=s[d]:y(`Invalid parameter to update: ${d}`)}),l};function Jt(){const s=i.domCache.get(this),l=i.innerParams.get(this);if(!l){Zt(this);return}s.popup&&r.swalCloseEventFinishedCallback&&(r.swalCloseEventFinishedCallback(),delete r.swalCloseEventFinishedCallback),typeof l.didDestroy=="function"&&l.didDestroy(),MC(this)}const MC=s=>{Zt(s),delete s.params,delete r.keydownHandler,delete r.keydownTarget,delete r.currentInstance},Zt=s=>{s.isAwaitingPromise?($5(i,s),s.isAwaitingPromise=!0):($5(h6,s),$5(i,s),delete s.isAwaitingPromise,delete s.disableButtons,delete s.enableButtons,delete s.getInput,delete s.disableInput,delete s.enableInput,delete s.hideLoading,delete s.disableLoading,delete s.showValidationMessage,delete s.resetValidationMessage,delete s.close,delete s.closePopup,delete s.closeModal,delete s.closeToast,delete s.rejectPromise,delete s.update,delete s._destroy)},$5=(s,l)=>{for(const d in s)s[d].delete(l)};var LC=Object.freeze({__proto__:null,_destroy:Jt,close:a4,closeModal:a4,closePopup:a4,closeToast:a4,disableButtons:Ut,disableInput:Wt,disableLoading:o8,enableButtons:$t,enableInput:jt,getInput:Ft,handleAwaitingPromise:p6,hideLoading:o8,rejectPromise:Et,resetValidationMessage:Gt,showValidationMessage:qt,update:Qt});const wC=(s,l,d)=>{i.innerParams.get(s).toast?yC(s,l,d):(bC(l),SC(l),kC(s,l,d))},yC=(s,l,d)=>{l.popup.onclick=()=>{const v=i.innerParams.get(s);v&&(xC(v)||v.timer||v.input)||d(d3.close)}},xC=s=>s.showConfirmButton||s.showDenyButton||s.showCancelButton||s.showCloseButton;let l8=!1;const bC=s=>{s.popup.onmousedown=()=>{s.container.onmouseup=function(l){s.container.onmouseup=void 0,l.target===s.container&&(l8=!0)}}},SC=s=>{s.container.onmousedown=()=>{s.popup.onmouseup=function(l){s.popup.onmouseup=void 0,(l.target===s.popup||s.popup.contains(l.target))&&(l8=!0)}}},kC=(s,l,d)=>{l.container.onclick=v=>{const x=i.innerParams.get(s);if(l8){l8=!1;return}v.target===l.container&&V(x.allowOutsideClick)&&d(d3.backdrop)}},NC=s=>typeof s=="object"&&s.jquery,en=s=>s instanceof Element||NC(s),AC=s=>{const l={};return typeof s[0]=="object"&&!en(s[0])?Object.assign(l,s[0]):["title","html","icon"].forEach((d,v)=>{const x=s[v];typeof x=="string"||en(x)?l[d]=x:x!==void 0&&L(`Unexpected type of ${d}! Expected "string" or "Element", got ${typeof x}`)}),l};function TC(){const s=this;for(var l=arguments.length,d=new Array(l),v=0;v<l;v++)d[v]=arguments[v];return new s(...d)}function EC(s){class l extends this{_main(v,x){return super._main(v,Object.assign({},s,x))}}return l}const PC=()=>r.timeout&&r.timeout.getTimerLeft(),cn=()=>{if(r.timeout)return jg(),r.timeout.stop()},an=()=>{if(r.timeout){const s=r.timeout.start();return P5(s),s}},_C=()=>{const s=r.timeout;return s&&(s.running?cn():an())},IC=s=>{if(r.timeout){const l=r.timeout.increase(s);return P5(l,!0),l}},RC=()=>!!(r.timeout&&r.timeout.isRunning());let rn=!1;const U5={};function DC(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";U5[s]=this,rn||(document.body.addEventListener("click",FC),rn=!0)}const FC=s=>{for(let l=s.target;l&&l!==document;l=l.parentNode)for(const d in U5){const v=l.getAttribute(d);if(v){U5[d].fire({template:v});return}}};var BC=Object.freeze({__proto__:null,argsToParams:AC,bindClickHandler:DC,clickCancel:NV,clickConfirm:St,clickDeny:kV,enableLoading:h3,fire:TC,getActions:k,getCancelButton:I2,getCloseButton:w,getConfirmButton:i2,getContainer:T,getDenyButton:N2,getFocusableElements:P,getFooter:I,getHtmlContainer:C2,getIcon:v2,getIconContent:t2,getImage:o2,getInputLabel:R,getLoader:b,getPopup:B,getProgressSteps:k2,getTimerLeft:PC,getTimerProgressBar:$,getTitle:Z,getValidationMessage:y2,increaseTimer:IC,isDeprecatedParameter:Xt,isLoading:n2,isTimerRunning:RC,isUpdatableParameter:Yt,isValidParameter:Kt,isVisible:SV,mixin:EC,resumeTimer:an,showLoading:h3,stopTimer:cn,toggleTimer:_C});class OC{constructor(l,d){this.callback=l,this.remaining=d,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(l){const d=this.running;return d&&this.stop(),this.remaining+=l,d&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const tn=["swal-title","swal-html","swal-footer"],$C=s=>{const l=typeof s.template=="string"?document.querySelector(s.template):s.template;if(!l)return{};const d=l.content;return XC(d),Object.assign(UC(d),jC(d),WC(d),qC(d),GC(d),KC(d),YC(d,tn))},UC=s=>{const l={};return Array.from(s.querySelectorAll("swal-param")).forEach(v=>{B4(v,["name","value"]);const x=v.getAttribute("name"),G=v.getAttribute("value");typeof p3[x]=="boolean"?l[x]=G!=="false":typeof p3[x]=="object"?l[x]=JSON.parse(G):l[x]=G}),l},jC=s=>{const l={};return Array.from(s.querySelectorAll("swal-function-param")).forEach(v=>{const x=v.getAttribute("name"),G=v.getAttribute("value");l[x]=new Function(`return ${G}`)()}),l},WC=s=>{const l={};return Array.from(s.querySelectorAll("swal-button")).forEach(v=>{B4(v,["type","color","aria-label"]);const x=v.getAttribute("type");l[`${x}ButtonText`]=v.innerHTML,l[`show${M(x)}Button`]=!0,v.hasAttribute("color")&&(l[`${x}ButtonColor`]=v.getAttribute("color")),v.hasAttribute("aria-label")&&(l[`${x}ButtonAriaLabel`]=v.getAttribute("aria-label"))}),l},qC=s=>{const l={},d=s.querySelector("swal-image");return d&&(B4(d,["src","width","height","alt"]),d.hasAttribute("src")&&(l.imageUrl=d.getAttribute("src")),d.hasAttribute("width")&&(l.imageWidth=d.getAttribute("width")),d.hasAttribute("height")&&(l.imageHeight=d.getAttribute("height")),d.hasAttribute("alt")&&(l.imageAlt=d.getAttribute("alt"))),l},GC=s=>{const l={},d=s.querySelector("swal-icon");return d&&(B4(d,["type","color"]),d.hasAttribute("type")&&(l.icon=d.getAttribute("type")),d.hasAttribute("color")&&(l.iconColor=d.getAttribute("color")),l.iconHtml=d.innerHTML),l},KC=s=>{const l={},d=s.querySelector("swal-input");d&&(B4(d,["type","label","placeholder","value"]),l.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(l.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(l.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(l.inputValue=d.getAttribute("value")));const v=Array.from(s.querySelectorAll("swal-input-option"));return v.length&&(l.inputOptions={},v.forEach(x=>{B4(x,["value"]);const G=x.getAttribute("value"),s2=x.innerHTML;l.inputOptions[G]=s2})),l},YC=(s,l)=>{const d={};for(const v in l){const x=l[v],G=s.querySelector(x);G&&(B4(G,[]),d[x.replace(/^swal-/,"")]=G.innerHTML.trim())}return d},XC=s=>{const l=tn.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(s.children).forEach(d=>{const v=d.tagName.toLowerCase();l.includes(v)||y(`Unrecognized element <${v}>`)})},B4=(s,l)=>{Array.from(s.attributes).forEach(d=>{l.indexOf(d.name)===-1&&y([`Unrecognized attribute "${d.name}" on <${s.tagName.toLowerCase()}>.`,`${l.length?`Allowed attributes are: ${l.join(", ")}`:"To set the value, use HTML within the element."}`])})},nn=10,QC=s=>{const l=T(),d=B();typeof s.willOpen=="function"&&s.willOpen(d);const x=window.getComputedStyle(document.body).overflowY;eM(l,d,s),setTimeout(()=>{JC(l,d)},nn),c2()&&(ZC(l,s.scrollbarPadding,x),DV()),!e2()&&!r.previousActiveElement&&(r.previousActiveElement=document.activeElement),typeof s.didOpen=="function"&&setTimeout(()=>s.didOpen(d)),u2(l,u["no-transition"])},sn=s=>{const l=B();if(s.target!==l)return;const d=T();l.removeEventListener(d6,sn),d.style.overflowY="auto"},JC=(s,l)=>{d6&&Ct(l)?(s.style.overflowY="hidden",l.addEventListener(d6,sn)):s.style.overflowY="auto"},ZC=(s,l,d)=>{FV(),l&&d!=="hidden"&&GV(),setTimeout(()=>{s.scrollTop=0})},eM=(s,l,d)=>{J(s,d.showClass.backdrop),l.style.setProperty("opacity","0","important"),l2(l,"grid"),setTimeout(()=>{J(l,d.showClass.popup),l.style.removeProperty("opacity")},nn),J([document.documentElement,document.body],u.shown),d.heightAuto&&d.backdrop&&!d.toast&&J([document.documentElement,document.body],u["height-auto"])};var on={email:(s,l)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(s)?Promise.resolve():Promise.resolve(l||"Invalid email address"),url:(s,l)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(s)?Promise.resolve():Promise.resolve(l||"Invalid URL")};function cM(s){s.inputValidator||Object.keys(on).forEach(l=>{s.input===l&&(s.inputValidator=on[l])})}function aM(s){(!s.target||typeof s.target=="string"&&!document.querySelector(s.target)||typeof s.target!="string"&&!s.target.appendChild)&&(y('Target parameter is not valid, defaulting to "body"'),s.target="body")}function rM(s){cM(s),s.showLoaderOnConfirm&&!s.preConfirm&&y(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),aM(s),typeof s.title=="string"&&(s.title=s.title.split(`
`).join("<br />")),Qg(s)}let C1;class A2{constructor(){if(typeof window>"u")return;C1=this;for(var l=arguments.length,d=new Array(l),v=0;v<l;v++)d[v]=arguments[v];const x=Object.freeze(this.constructor.argsToParams(d));this.params=x,this.isAwaitingPromise=!1;const G=C1._main(C1.params);i.promise.set(this,G)}_main(l){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};VC(Object.assign({},d,l)),r.currentInstance&&(r.currentInstance._destroy(),c2()&&At()),r.currentInstance=C1;const v=nM(l,d);rM(v),Object.freeze(v),r.timeout&&(r.timeout.stop(),delete r.timeout),clearTimeout(r.restoreFocusTimeout);const x=iM(C1);return bt(C1,v),i.innerParams.set(C1,v),tM(C1,x,v)}then(l){return i.promise.get(this).then(l)}finally(l){return i.promise.get(this).finally(l)}}const tM=(s,l,d)=>new Promise((v,x)=>{const G=s2=>{s.close({isDismissed:!0,dismiss:s2})};h6.swalPromiseResolve.set(s,v),h6.swalPromiseReject.set(s,x),l.confirmButton.onclick=()=>{lC(s)},l.denyButton.onclick=()=>{fC(s)},l.cancelButton.onclick=()=>{uC(s,G)},l.closeButton.onclick=()=>{G(d3.close)},wC(s,l,G),AV(s,r,d,G),cC(s,d),QC(d),sM(r,d,G),oM(l,d),setTimeout(()=>{l.container.scrollTop=0})}),nM=(s,l)=>{const d=$C(s),v=Object.assign({},p3,l,d,s);return v.showClass=Object.assign({},p3.showClass,v.showClass),v.hideClass=Object.assign({},p3.hideClass,v.hideClass),v},iM=s=>{const l={popup:B(),container:T(),actions:k(),confirmButton:i2(),denyButton:N2(),cancelButton:I2(),loader:b(),closeButton:w(),validationMessage:y2(),progressSteps:k2()};return i.domCache.set(s,l),l},sM=(s,l,d)=>{const v=$();U(v),l.timer&&(s.timeout=new OC(()=>{d("timer"),delete s.timeout},l.timer),l.timerProgressBar&&(l2(v),X(v,l,"timerProgressBar"),setTimeout(()=>{s.timeout&&s.timeout.running&&P5(l.timer)})))},oM=(s,l)=>{if(!l.toast){if(!V(l.allowEnterKey)){fM();return}lM(s,l)||D5(-1,1)}},lM=(s,l)=>l.focusDeny&&U2(s.denyButton)?(s.denyButton.focus(),!0):l.focusCancel&&U2(s.cancelButton)?(s.cancelButton.focus(),!0):l.focusConfirm&&U2(s.confirmButton)?(s.confirmButton.focus(),!0):!1,fM=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const s=new Date,l=localStorage.getItem("swal-initiation");l?(s.getTime()-Date.parse(l))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const d=document.createElement("audio");d.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",d.loop=!0,document.body.appendChild(d),setTimeout(()=>{d.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${s}`)}A2.prototype.disableButtons=Ut,A2.prototype.enableButtons=$t,A2.prototype.getInput=Ft,A2.prototype.disableInput=Wt,A2.prototype.enableInput=jt,A2.prototype.hideLoading=o8,A2.prototype.disableLoading=o8,A2.prototype.showValidationMessage=qt,A2.prototype.resetValidationMessage=Gt,A2.prototype.close=a4,A2.prototype.closePopup=a4,A2.prototype.closeModal=a4,A2.prototype.closeToast=a4,A2.prototype.rejectPromise=Et,A2.prototype.update=Qt,A2.prototype._destroy=Jt,Object.assign(A2,BC),Object.keys(LC).forEach(s=>{A2[s]=function(){return C1&&C1[s]?C1[s](...arguments):null}}),A2.DismissReason=d3,A2.version="11.7.12";const f8=A2;return f8.default=f8,f8}),typeof r4<"u"&&r4.Sweetalert2&&(r4.swal=r4.sweetAlert=r4.Swal=r4.SweetAlert=r4.Sweetalert2),typeof document<"u"&&function(a,r){var t=a.createElement("style");if(a.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=r);else try{t.innerHTML=r}catch{t.innerText=r}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(gl);var Ux=gl.exports;const jx=x0(Ux),Vl="uid",Wx=e=>{localStorage.setItem(Vl,e)},qx=()=>localStorage.getItem(Vl);function Gx(e,c){var a=Math.pow,r=Math.PI,t=Math.sin,n=Math.cos,i=Math.tan,o=6378137,f=6356752314245e-6,u=121*r/180,p=.9999,g=25e4,H=0,M=a(1-a(f,2)/a(o,2),.5);e-=g,c-=H;var y=c/p,L=y/(o*(1-a(M,2)/4-3*a(M,4)/64-5*a(M,6)/256)),m=(1-a(1-a(M,2),.5))/(1+a(1-a(M,2),.5)),h=3*m/2-27*a(m,3)/32,z=21*a(m,2)/16-55*a(m,4)/32,V=151*a(m,3)/96,C=1097*a(m,4)/512,N=L+h*t(2*L)+z*t(4*L)+V*t(6*L)+C*t(8*L),S=a(M*o/f,2),T=a(S*n(N),2),D=a(i(N),2),A=o*(1-a(M,2))/a(1-a(M,2)*a(t(N),2),3/2),B=o/a(1-a(M,2)*a(t(N),2),.5),v2=e/(B*p),t2=B*i(N)/A,Z=a(v2,2)/2,C2=(5+3*D+10*T-4*a(T,2)-9*S)*a(v2,4)/24,o2=(61+90*D+298*T+45*a(D,2)-3*a(T,2)-252*S)*a(v2,6)/720,k2=N-t2*(Z-C2+o2),y2=v2,i2=(1+2*D+T)*a(v2,3)/6,I2=(5-2*T+28*D-3*a(T,2)+8*S+24*a(D,2))*a(v2,5)/120,N2=u+(y2-i2+I2)/n(N);return k2=k2*180/r,N2=N2*180/r,{lat:k2,lng:N2}}const gc={strokeOpacity:.5,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,visible:!0},Mc2={closeOptions:{...gc,zIndex:3,fillOpacity:.05,strokeColor:"#8BC34A",fillColor:"#8BC34A"},middleOptions:{...gc,zIndex:2,fillOpacity:.05,strokeColor:"#FBC02D",fillColor:"#FBC02D"},farOptions:{...gc,zIndex:1,fillOpacity:.05,strokeColor:"#FF5252",fillColor:"#FF5252"}},Cl="save-park";function Lc2(e){window.localStorage.setItem(Cl,JSON.stringify(e))}const wc2=()=>JSON.parse(window.localStorage.getItem(Cl)),Kx=jx.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,icon:"success"}),Yx=function(){window.dataLayer.push(arguments)},G9={light:{background_main:"#fff",background_secondary:"#E7E9EB",background_active:"#04AA6D",background_hover:"#cccccc",background_error:"#ffc0c7",background_searchbox:"#fff",font_main:"#282a35",font_active:"#ffffff",font_secondary_blk:"#282D35",font_card_main:"#282a35",font_card_secondary:"#115E5E",border_main:"#D6D6D6",button_hover:"#059862",mapStyle:{styles:[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}]}},dark:{background_main:"#1d2a35",background_secondary:"#38444d",background_active:"#04AA6D",background_hover:"#38444d",background_error:"#ffc0c7",background_searchbox:"#38444d",font_main:"#ddd",font_active:"#ffffff",font_secondary_blk:"#282D35",font_card_main:"#75A598",font_card_secondary:"#ddd",border_main:"#3C5350",button_hover:"#03744b",mapStyle:{styles:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]}}},j0=_.createContext(null),Ml=({children:e})=>{const[c,a]=_.useState(!0),r=()=>{a(!c),Yx("event","switch_theme",{content_type:"switchTheme"})},t=c?G9.dark:G9.light,n={dark:c,theme:t,toggleTheme:r};return j.jsx(j0.Provider,{value:n,children:e})};Ml.propTypes={children:j1.node};const R1="@media screen and (min-width: 768px)",Xx=w2.label`
  width: 68px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;
  cursor: pointer;
  ${R1} {
    width: 90px;
    min-height: 34px;
    font-size: 12px;
    font-weight: bold;
  }
`,Qx=w2.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${e=>e.$color.border_main};
  position: absolute;
  border-radius: 50px;
`,Jx=w2.div`
  width: 100%;
  text-align: center;
  color: ${e=>e.$dark?e.$color.font_main:e.$color.font_active};
`,Zx=w2.div`
  width: 100%;
  text-align: center;
  color: ${e=>e.$dark?e.$color.font_active:e.$color.font_main};
`,Ll=w2.div`
  position: absolute;
  width: calc(50% - 2px);
  top: 2px;
  bottom: 2px;
  right: 2px;
  transition: right 0.25s ease-out;
  background: ${e=>e.$color.background_active};
  border-radius: 50px;
  z-index: -1;
`,eb=w2.input`
  &:checked + ${Ll} {
    right: 50%;
    transition: right 0.25s ease-out;
  }
`;function cb(){const{dark:e,theme:c,toggleTheme:a}=_.useContext(j0);return j.jsxs(Xx,{htmlFor:"theme-toggle",children:[j.jsx(Qx,{$color:c}),j.jsx(eb,{id:"theme-toggle",hidden:!0,type:"checkbox",onClick:a,$color:c}),j.jsx(Ll,{$color:c,$dark:e}),j.jsx(Jx,{$color:c,$dark:e,children:"Light"}),j.jsx(Zx,{$color:c,$dark:e,children:"Dark"})]})}const wl=_.createContext(null),ab=w2.div`
  width: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
`,rb=w2.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid rgba(0, 0, 0, 0);
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;function yl({borderColor:e,borderTopColor:c,width:a,height:r}){return j.jsx(ab,{style:{width:a,height:r},children:j.jsx(rb,{style:{borderColor:e,borderTopColor:c}})})}yl.propTypes={borderColor:j1.string,borderTopColor:j1.string,width:j1.string,height:j1.string};const tb=w2.header`
  width: 100%;
  min-height: 10vh;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  position: fixed;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${e=>e.$color.background_main};
  ${R1} {
    display: grid;
    grid-template-columns: 1fr auto minmax(400px, 3fr) 1fr;
  }
`,nb=w2.div`
  width: 100px;
  position: absolute;
  top: 50%;
  left: 1.5%;
  transform: translateY(-50%);
  ${R1} {
    all: unset;
  }
`,ib=w2.div`
  display: flex;
  align-items: center;
  ${R1} {
    grid-column: 2/3;
  }
`,sb=w2.h1`
  margin: 0 10px;
  font-size: 24px;
  font-weight: normal;
`,V3=w2(pl)`
  font-size: 18px;
  font-weight: normal;
  color: ${e=>e.$color.font_main};
  text-decoration: none;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  &:hover {
    background: ${e=>e.$pathActive?"":e.$color.background_hover};
  }
  &,
  &:focus {
    ${e=>e.$pathActive&&`
      background: ${e.$color.background_active};
      color: ${e.$color.font_active};
    `}
  }
  ${R1} {
    padding: 10px 15px;
    margin-right: 10px;
    opacity: 1;
    border-radius: 8px;
  }
`,ob=w2.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: ${e=>e.$color.background_main};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
  ${R1} {
    all: unset;
    grid-column: 3/4;
    display: flex;
    justify-content: end;
  }
  ${e=>e.$checkboxStatus&&`
    transform: scale(1, 1);
  `}

  ${V3} {
    ${e=>e.$checkboxStatus&&`
      transition: opacity 0.2s ease-out 0.25s;
      opacity: 1;
    `}
  }
`,lb=w2.input``,fb=w2.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5%;
  display: flex;
  align-items: center;
  ${R1} {
    display: none;
  }
`,ub=w2.span`
  width: 30px;
  height: 3px;
  background: ${e=>e.$color.font_main};
  position: relative;
  &::before,
  &::after {
    width: 30px;
    height: 3px;
    background: ${e=>e.$color.font_main};
    content: "";
    position: absolute;
    left: 0;
  }
  &::before {
    top: 8px;
  }
  &::after {
    bottom: 8px;
  }
`;function xl({isLoading:e}){const{theme:c}=_.useContext(j0),{user:a,setUser:r}=_.useContext(wl);let t=o6();const[n,i]=_.useState(!1),o=p=>{i(p.target.checked)},f=()=>{window.screen.width>=768||i(!n)},u=()=>{r(""),Wx(""),Kx.fire({title:"登出成功"})};return j.jsxs(tb,{$color:c,children:[j.jsxs(ib,{children:[j.jsx("img",{src:Rx,alt:"website-logo",width:"30px",height:"30px"}),j.jsx(sb,{children:"車位即時查"}),j.jsx(nb,{children:j.jsx(cb,{})})]}),j.jsx(lb,{hidden:!0,type:"checkbox",className:"navbar-toggle",id:"navbar-toggle",checked:n,onChange:o}),j.jsxs(ob,{$checkboxStatus:n,onClick:f,$color:c,children:[j.jsx(V3,{to:"/",$pathActive:t.pathname==="/",$color:c,children:"地圖"}),e&&j.jsx(yl,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)"}),!e&&j.jsxs(j.Fragment,{children:[a&&j.jsxs(j.Fragment,{children:[j.jsx(V3,{to:"/save",$pathActive:t.pathname==="/save",$color:c,children:"儲存"}),j.jsx(V3,{to:"/",$color:c,onClick:u,children:"登出"})]}),!a&&j.jsxs(j.Fragment,{children:[(t.pathname==="/login"||t.pathname==="/")&&j.jsx(V3,{to:"/login",$pathActive:t.pathname==="/login",$color:c,children:"登入"}),t.pathname==="/signup"&&j.jsx(V3,{to:"/signup",$pathActive:t.pathname==="/signup",$color:c,children:"註冊"})]})]})]}),j.jsx(fb,{htmlFor:"navbar-toggle",className:"navbar-toggle-label",children:j.jsx(ub,{$color:c})})]})}xl.propTypes={isLoading:j1.bool};const bl="https://tcgbusfs.blob.core.windows.net/blobtcmsv",db=()=>fetch(`${bl}/TCMSV_alldesc.json`).then(e=>e.json()),mb=()=>fetch(`${bl}/TCMSV_allavailable.json`).then(e=>e.json()),Sl=_.createContext([]),kl=({children:e})=>{const[c,a]=_.useState([]),[r,t]=_.useState(""),[n,i]=_.useState(!1);async function o(){const[f,u]=await Promise.all([db(),mb()]),p=f.data.park,g=u.data.park,H=u.data.UPDATETIME,M=g.map(y=>{const L=p.find(k2=>k2.id===y.id);if(!L)return null;const{name:m,totalcar:h,payex:z,tel:V,serviceTime:C,tw97x:N,tw97y:S,area:T,address:D}=L,{lat:A,lng:B}=Gx(N,S),v2=C==="00:00:00~23:59:59"?"24小時":C,{id:t2,availablecar:Z,ChargeStation:C2}=y,o2=C2===void 0?"無":"有";return Z<=0?null:{id:t2,name:m,availablecar:Z,totalcar:h,payex:z,address:D,area:T,hasChargingStation:o2,tel:V,opening:v2,lat:A,lng:B}}).filter(y=>y!==null);a(M),t(H),i(!1)}return _.useEffect(()=>{o(),i(!0)},[]),j.jsx(Sl.Provider,{value:{sortData:c,updateTime:r,isLoading:n},children:e})};kl.propTypes={children:j1.node};const hb=w2.footer`
  width: 100%;
  font-size: 12px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  min-height: 4vh;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  background: ${e=>e.$color.background_main};
  ${R1} {
    font-size: 13px;
  }
`,pb=w2.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 3vw;
  ${R1} {
    justify-content: space-between;
    width: 98%;
    margin: 5px auto;
  }
`,vb=w2.p`
  display: none;
  ${R1} {
    display: block;
  }
`,zb=w2.p``,Hb=w2(pl)`
  text-decoration: none;
  color: ${e=>e.$color.font_main};
  background: ${e=>e.$color.background_hover};
  border-radius: 6px;
  padding: 3px 8px;
  margin-left: 8px;
`;function gb(){const{theme:e}=_.useContext(j0),{updateTime:c}=_.useContext(Sl);return j.jsx(hb,{$color:e,children:j.jsxs(pb,{children:[j.jsxs(vb,{children:["Website are designed and built by Bun © 2023.",j.jsx(Hb,{to:"https://github.com/thisIsBun/taipei-parking-2.0",target:"_blank",$color:e,children:"GitHub"})," "]}),j.jsxs(zb,{children:["資料更新時間：",c]})]})})}function Nl({user:e,children:c}){const a=o6();return e&&a.pathname==="/save"?c:j.jsx(bx,{to:"/",replace:!0})}Nl.propTypes={user:j1.string,children:j1.node};function K9(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);c&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function F(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?K9(Object(a),!0).forEach(function(r){F2(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K9(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ye(e){"@babel/helpers - typeof";return ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},ye(e)}function Vb(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function Y9(e,c){for(var a=0;a<c.length;a++){var r=c[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cb(e,c,a){return c&&Y9(e.prototype,c),a&&Y9(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function F2(e,c,a){return c in e?Object.defineProperty(e,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[c]=a,e}function Qa(e,c){return Lb(e)||yb(e,c)||Al(e,c)||bb()}function W0(e){return Mb(e)||wb(e)||Al(e)||xb()}function Mb(e){if(Array.isArray(e))return b7(e)}function Lb(e){if(Array.isArray(e))return e}function wb(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function yb(e,c){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var r=[],t=!0,n=!1,i,o;try{for(a=a.call(e);!(t=(i=a.next()).done)&&(r.push(i.value),!(c&&r.length===c));t=!0);}catch(f){n=!0,o=f}finally{try{!t&&a.return!=null&&a.return()}finally{if(n)throw o}}return r}}function Al(e,c){if(e){if(typeof e=="string")return b7(e,c);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b7(e,c)}}function b7(e,c){(c==null||c>e.length)&&(c=e.length);for(var a=0,r=new Array(c);a<c;a++)r[a]=e[a];return r}function xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var X9=function(){},Ja={},Tl={},El=null,Pl={mark:X9,measure:X9};try{typeof window<"u"&&(Ja=window),typeof document<"u"&&(Tl=document),typeof MutationObserver<"u"&&(El=MutationObserver),typeof performance<"u"&&(Pl=performance)}catch{}var Sb=Ja.navigator||{},Q9=Sb.userAgent,J9=Q9===void 0?"":Q9,T4=Ja,V2=Tl,Z9=El,y8=Pl;T4.document;var e4=!!V2.documentElement&&!!V2.head&&typeof V2.addEventListener=="function"&&typeof V2.createElement=="function",_l=~J9.indexOf("MSIE")||~J9.indexOf("Trident/"),x8,b8,S8,k8,N8,Y1="___FONT_AWESOME___",S7=16,Il="fa",Rl="svg-inline--fa",a3="data-fa-i2svg",k7="data-fa-pseudo-element",kb="data-fa-pseudo-element-pending",Za="data-prefix",er="data-icon",ei="fontawesome-i2svg",Nb="async",Ab=["HTML","HEAD","STYLE","SCRIPT"],Dl=function(){try{return!0}catch{return!1}}(),H2="classic",b2="sharp",cr=[H2,b2];function q0(e){return new Proxy(e,{get:function(a,r){return r in a?a[r]:a[H2]}})}var v0=q0((x8={},F2(x8,H2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),F2(x8,b2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),x8)),z0=q0((b8={},F2(b8,H2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),F2(b8,b2,{solid:"fass",regular:"fasr"}),b8)),H0=q0((S8={},F2(S8,H2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),F2(S8,b2,{fass:"fa-solid",fasr:"fa-regular"}),S8)),Tb=q0((k8={},F2(k8,H2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),F2(k8,b2,{"fa-solid":"fass","fa-regular":"fasr"}),k8)),Eb=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Fl="fa-layers-text",Pb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_b=q0((N8={},F2(N8,H2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),F2(N8,b2,{900:"fass",400:"fasr"}),N8)),Bl=[1,2,3,4,5,6,7,8,9,10],Ib=Bl.concat([11,12,13,14,15,16,17,18,19,20]),Rb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],K4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},g0=new Set;Object.keys(z0[H2]).map(g0.add.bind(g0));Object.keys(z0[b2]).map(g0.add.bind(g0));var Db=[].concat(cr,W0(g0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",K4.GROUP,K4.SWAP_OPACITY,K4.PRIMARY,K4.SECONDARY]).concat(Bl.map(function(e){return"".concat(e,"x")})).concat(Ib.map(function(e){return"w-".concat(e)})),X6=T4.FontAwesomeConfig||{};function Fb(e){var c=V2.querySelector("script["+e+"]");if(c)return c.getAttribute(e)}function Bb(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V2&&typeof V2.querySelector=="function"){var Ob=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ob.forEach(function(e){var c=Qa(e,2),a=c[0],r=c[1],t=Bb(Fb(a));t!=null&&(X6[r]=t)})}var Ol={styleDefault:"solid",familyDefault:"classic",cssPrefix:Il,replacementClass:Rl,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X6.familyPrefix&&(X6.cssPrefix=X6.familyPrefix);var X3=F(F({},Ol),X6);X3.autoReplaceSvg||(X3.observeMutations=!1);var W={};Object.keys(Ol).forEach(function(e){Object.defineProperty(W,e,{enumerable:!0,set:function(a){X3[e]=a,Q6.forEach(function(r){return r(W)})},get:function(){return X3[e]}})});Object.defineProperty(W,"familyPrefix",{enumerable:!0,set:function(c){X3.cssPrefix=c,Q6.forEach(function(a){return a(W)})},get:function(){return X3.cssPrefix}});T4.FontAwesomeConfig=W;var Q6=[];function $b(e){return Q6.push(e),function(){Q6.splice(Q6.indexOf(e),1)}}var t4=S7,A1={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ub(e){if(!(!e||!e4)){var c=V2.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=e;for(var a=V2.head.childNodes,r=null,t=a.length-1;t>-1;t--){var n=a[t],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=n)}return V2.head.insertBefore(c,r),e}}var jb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function V0(){for(var e=12,c="";e-- >0;)c+=jb[Math.random()*62|0];return c}function l6(e){for(var c=[],a=(e||[]).length>>>0;a--;)c[a]=e[a];return c}function ar(e){return e.classList?l6(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(c){return c})}function $l(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wb(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,'="').concat($l(e[a]),'" ')},"").trim()}function l5(e){return Object.keys(e||{}).reduce(function(c,a){return c+"".concat(a,": ").concat(e[a].trim(),";")},"")}function rr(e){return e.size!==A1.size||e.x!==A1.x||e.y!==A1.y||e.rotate!==A1.rotate||e.flipX||e.flipY}function qb(e){var c=e.transform,a=e.containerWidth,r=e.iconWidth,t={transform:"translate(".concat(a/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),i="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),o="rotate(".concat(c.rotate," 0 0)"),f={transform:"".concat(n," ").concat(i," ").concat(o)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:t,inner:f,path:u}}function Gb(e){var c=e.transform,a=e.width,r=a===void 0?S7:a,t=e.height,n=t===void 0?S7:t,i=e.startCentered,o=i===void 0?!1:i,f="";return o&&_l?f+="translate(".concat(c.x/t4-r/2,"em, ").concat(c.y/t4-n/2,"em) "):o?f+="translate(calc(-50% + ".concat(c.x/t4,"em), calc(-50% + ").concat(c.y/t4,"em)) "):f+="translate(".concat(c.x/t4,"em, ").concat(c.y/t4,"em) "),f+="scale(".concat(c.size/t4*(c.flipX?-1:1),", ").concat(c.size/t4*(c.flipY?-1:1),") "),f+="rotate(".concat(c.rotate,"deg) "),f}var Kb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ul(){var e=Il,c=Rl,a=W.cssPrefix,r=W.replacementClass,t=Kb;if(a!==e||r!==c){var n=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(c),"g");t=t.replace(n,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(o,".".concat(r))}return t}var ci=!1;function Vc(){W.autoAddCss&&!ci&&(Ub(Ul()),ci=!0)}var Yb={mixout:function(){return{dom:{css:Ul,insertCss:Vc}}},hooks:function(){return{beforeDOMElementCreation:function(){Vc()},beforeI2svg:function(){Vc()}}}},X1=T4||{};X1[Y1]||(X1[Y1]={});X1[Y1].styles||(X1[Y1].styles={});X1[Y1].hooks||(X1[Y1].hooks={});X1[Y1].shims||(X1[Y1].shims=[]);var y1=X1[Y1],jl=[],Xb=function e(){V2.removeEventListener("DOMContentLoaded",e),xe=1,jl.map(function(c){return c()})},xe=!1;e4&&(xe=(V2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V2.readyState),xe||V2.addEventListener("DOMContentLoaded",Xb));function Qb(e){e4&&(xe?setTimeout(e,0):jl.push(e))}function G0(e){var c=e.tag,a=e.attributes,r=a===void 0?{}:a,t=e.children,n=t===void 0?[]:t;return typeof e=="string"?$l(e):"<".concat(c," ").concat(Wb(r),">").concat(n.map(G0).join(""),"</").concat(c,">")}function ai(e,c,a){if(e&&e[c]&&e[c][a])return{prefix:c,iconName:a,icon:e[c][a]}}var Jb=function(c,a){return function(r,t,n,i){return c.call(a,r,t,n,i)}},Cc=function(c,a,r,t){var n=Object.keys(c),i=n.length,o=t!==void 0?Jb(a,t):a,f,u,p;for(r===void 0?(f=1,p=c[n[0]]):(f=0,p=r);f<i;f++)u=n[f],p=o(p,c[u],u,c);return p};function Zb(e){for(var c=[],a=0,r=e.length;a<r;){var t=e.charCodeAt(a++);if(t>=55296&&t<=56319&&a<r){var n=e.charCodeAt(a++);(n&64512)==56320?c.push(((t&1023)<<10)+(n&1023)+65536):(c.push(t),a--)}else c.push(t)}return c}function N7(e){var c=Zb(e);return c.length===1?c[0].toString(16):null}function eS(e,c){var a=e.length,r=e.charCodeAt(c),t;return r>=55296&&r<=56319&&a>c+1&&(t=e.charCodeAt(c+1),t>=56320&&t<=57343)?(r-55296)*1024+t-56320+65536:r}function ri(e){return Object.keys(e).reduce(function(c,a){var r=e[a],t=!!r.icon;return t?c[r.iconName]=r.icon:c[a]=r,c},{})}function A7(e,c){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=a.skipHooks,t=r===void 0?!1:r,n=ri(c);typeof y1.hooks.addPack=="function"&&!t?y1.hooks.addPack(e,ri(c)):y1.styles[e]=F(F({},y1.styles[e]||{}),n),e==="fas"&&A7("fa",c)}var A8,T8,E8,S3=y1.styles,cS=y1.shims,aS=(A8={},F2(A8,H2,Object.values(H0[H2])),F2(A8,b2,Object.values(H0[b2])),A8),tr=null,Wl={},ql={},Gl={},Kl={},Yl={},rS=(T8={},F2(T8,H2,Object.keys(v0[H2])),F2(T8,b2,Object.keys(v0[b2])),T8);function tS(e){return~Db.indexOf(e)}function nS(e,c){var a=c.split("-"),r=a[0],t=a.slice(1).join("-");return r===e&&t!==""&&!tS(t)?t:null}var Xl=function(){var c=function(n){return Cc(S3,function(i,o,f){return i[f]=Cc(o,n,{}),i},{})};Wl=c(function(t,n,i){if(n[3]&&(t[n[3]]=i),n[2]){var o=n[2].filter(function(f){return typeof f=="number"});o.forEach(function(f){t[f.toString(16)]=i})}return t}),ql=c(function(t,n,i){if(t[i]=i,n[2]){var o=n[2].filter(function(f){return typeof f=="string"});o.forEach(function(f){t[f]=i})}return t}),Yl=c(function(t,n,i){var o=n[2];return t[i]=i,o.forEach(function(f){t[f]=i}),t});var a="far"in S3||W.autoFetchSvg,r=Cc(cS,function(t,n){var i=n[0],o=n[1],f=n[2];return o==="far"&&!a&&(o="fas"),typeof i=="string"&&(t.names[i]={prefix:o,iconName:f}),typeof i=="number"&&(t.unicodes[i.toString(16)]={prefix:o,iconName:f}),t},{names:{},unicodes:{}});Gl=r.names,Kl=r.unicodes,tr=f5(W.styleDefault,{family:W.familyDefault})};$b(function(e){tr=f5(e.styleDefault,{family:W.familyDefault})});Xl();function nr(e,c){return(Wl[e]||{})[c]}function iS(e,c){return(ql[e]||{})[c]}function Y4(e,c){return(Yl[e]||{})[c]}function Ql(e){return Gl[e]||{prefix:null,iconName:null}}function sS(e){var c=Kl[e],a=nr("fas",e);return c||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function E4(){return tr}var ir=function(){return{prefix:null,iconName:null,rest:[]}};function f5(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.family,r=a===void 0?H2:a,t=v0[r][e],n=z0[r][e]||z0[r][t],i=e in y1.styles?e:null;return n||i||null}var ti=(E8={},F2(E8,H2,Object.keys(H0[H2])),F2(E8,b2,Object.keys(H0[b2])),E8);function u5(e){var c,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.skipLookups,t=r===void 0?!1:r,n=(c={},F2(c,H2,"".concat(W.cssPrefix,"-").concat(H2)),F2(c,b2,"".concat(W.cssPrefix,"-").concat(b2)),c),i=null,o=H2;(e.includes(n[H2])||e.some(function(u){return ti[H2].includes(u)}))&&(o=H2),(e.includes(n[b2])||e.some(function(u){return ti[b2].includes(u)}))&&(o=b2);var f=e.reduce(function(u,p){var g=nS(W.cssPrefix,p);if(S3[p]?(p=aS[o].includes(p)?Tb[o][p]:p,i=p,u.prefix=p):rS[o].indexOf(p)>-1?(i=p,u.prefix=f5(p,{family:o})):g?u.iconName=g:p!==W.replacementClass&&p!==n[H2]&&p!==n[b2]&&u.rest.push(p),!t&&u.prefix&&u.iconName){var H=i==="fa"?Ql(u.iconName):{},M=Y4(u.prefix,u.iconName);H.prefix&&(i=null),u.iconName=H.iconName||M||u.iconName,u.prefix=H.prefix||u.prefix,u.prefix==="far"&&!S3.far&&S3.fas&&!W.autoFetchSvg&&(u.prefix="fas")}return u},ir());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&o===b2&&(S3.fass||W.autoFetchSvg)&&(f.prefix="fass",f.iconName=Y4(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=E4()||"fas"),f}var oS=function(){function e(){Vb(this,e),this.definitions={}}return Cb(e,[{key:"add",value:function(){for(var a=this,r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];var i=t.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){a.definitions[o]=F(F({},a.definitions[o]||{}),i[o]),A7(o,i[o]);var f=H0[H2][o];f&&A7(f,i[o]),Xl()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,r){var t=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(t).map(function(n){var i=t[n],o=i.prefix,f=i.iconName,u=i.icon,p=u[2];a[o]||(a[o]={}),p.length>0&&p.forEach(function(g){typeof g=="string"&&(a[o][g]=u)}),a[o][f]=u}),a}}]),e}(),ni=[],k3={},B3={},lS=Object.keys(B3);function fS(e,c){var a=c.mixoutsTo;return ni=e,k3={},Object.keys(B3).forEach(function(r){lS.indexOf(r)===-1&&delete B3[r]}),ni.forEach(function(r){var t=r.mixout?r.mixout():{};if(Object.keys(t).forEach(function(i){typeof t[i]=="function"&&(a[i]=t[i]),ye(t[i])==="object"&&Object.keys(t[i]).forEach(function(o){a[i]||(a[i]={}),a[i][o]=t[i][o]})}),r.hooks){var n=r.hooks();Object.keys(n).forEach(function(i){k3[i]||(k3[i]=[]),k3[i].push(n[i])})}r.provides&&r.provides(B3)}),a}function T7(e,c){for(var a=arguments.length,r=new Array(a>2?a-2:0),t=2;t<a;t++)r[t-2]=arguments[t];var n=k3[e]||[];return n.forEach(function(i){c=i.apply(null,[c].concat(r))}),c}function r3(e){for(var c=arguments.length,a=new Array(c>1?c-1:0),r=1;r<c;r++)a[r-1]=arguments[r];var t=k3[e]||[];t.forEach(function(n){n.apply(null,a)})}function Q1(){var e=arguments[0],c=Array.prototype.slice.call(arguments,1);return B3[e]?B3[e].apply(null,c):void 0}function E7(e){e.prefix==="fa"&&(e.prefix="fas");var c=e.iconName,a=e.prefix||E4();if(c)return c=Y4(a,c)||c,ai(Jl.definitions,a,c)||ai(y1.styles,a,c)}var Jl=new oS,uS=function(){W.autoReplaceSvg=!1,W.observeMutations=!1,r3("noAuto")},dS={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e4?(r3("beforeI2svg",c),Q1("pseudoElements2svg",c),Q1("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot;W.autoReplaceSvg===!1&&(W.autoReplaceSvg=!0),W.observeMutations=!0,Qb(function(){hS({autoReplaceSvgRoot:a}),r3("watch",c)})}},mS={icon:function(c){if(c===null)return null;if(ye(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Y4(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],r=f5(c[0]);return{prefix:r,iconName:Y4(r,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(W.cssPrefix,"-"))>-1||c.match(Eb))){var t=u5(c.split(" "),{skipLookups:!0});return{prefix:t.prefix||E4(),iconName:Y4(t.prefix,t.iconName)||t.iconName}}if(typeof c=="string"){var n=E4();return{prefix:n,iconName:Y4(n,c)||c}}}},d1={noAuto:uS,config:W,dom:dS,parse:mS,library:Jl,findIconDefinition:E7,toHtml:G0},hS=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=c.autoReplaceSvgRoot,r=a===void 0?V2:a;(Object.keys(y1.styles).length>0||W.autoFetchSvg)&&e4&&W.autoReplaceSvg&&d1.dom.i2svg({node:r})};function d5(e,c){return Object.defineProperty(e,"abstract",{get:c}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return G0(r)})}}),Object.defineProperty(e,"node",{get:function(){if(e4){var r=V2.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function pS(e){var c=e.children,a=e.main,r=e.mask,t=e.attributes,n=e.styles,i=e.transform;if(rr(i)&&a.found&&!r.found){var o=a.width,f=a.height,u={x:o/f/2,y:.5};t.style=l5(F(F({},n),{},{"transform-origin":"".concat(u.x+i.x/16,"em ").concat(u.y+i.y/16,"em")}))}return[{tag:"svg",attributes:t,children:c}]}function vS(e){var c=e.prefix,a=e.iconName,r=e.children,t=e.attributes,n=e.symbol,i=n===!0?"".concat(c,"-").concat(W.cssPrefix,"-").concat(a):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},t),{},{id:i}),children:r}]}]}function sr(e){var c=e.icons,a=c.main,r=c.mask,t=e.prefix,n=e.iconName,i=e.transform,o=e.symbol,f=e.title,u=e.maskId,p=e.titleId,g=e.extra,H=e.watchable,M=H===void 0?!1:H,y=r.found?r:a,L=y.width,m=y.height,h=t==="fak",z=[W.replacementClass,n?"".concat(W.cssPrefix,"-").concat(n):""].filter(function(A){return g.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(g.classes).join(" "),V={children:[],attributes:F(F({},g.attributes),{},{"data-prefix":t,"data-icon":n,class:z,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(m)})},C=h&&!~g.classes.indexOf("fa-fw")?{width:"".concat(L/m*16*.0625,"em")}:{};M&&(V.attributes[a3]=""),f&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(p||V0())},children:[f]}),delete V.attributes.title);var N=F(F({},V),{},{prefix:t,iconName:n,main:a,mask:r,maskId:u,transform:i,symbol:o,styles:F(F({},C),g.styles)}),S=r.found&&a.found?Q1("generateAbstractMask",N)||{children:[],attributes:{}}:Q1("generateAbstractIcon",N)||{children:[],attributes:{}},T=S.children,D=S.attributes;return N.children=T,N.attributes=D,o?vS(N):pS(N)}function ii(e){var c=e.content,a=e.width,r=e.height,t=e.transform,n=e.title,i=e.extra,o=e.watchable,f=o===void 0?!1:o,u=F(F(F({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")});f&&(u[a3]="");var p=F({},i.styles);rr(t)&&(p.transform=Gb({transform:t,startCentered:!0,width:a,height:r}),p["-webkit-transform"]=p.transform);var g=l5(p);g.length>0&&(u.style=g);var H=[];return H.push({tag:"span",attributes:u,children:[c]}),n&&H.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),H}function zS(e){var c=e.content,a=e.title,r=e.extra,t=F(F(F({},r.attributes),a?{title:a}:{}),{},{class:r.classes.join(" ")}),n=l5(r.styles);n.length>0&&(t.style=n);var i=[];return i.push({tag:"span",attributes:t,children:[c]}),a&&i.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),i}var Mc=y1.styles;function P7(e){var c=e[0],a=e[1],r=e.slice(4),t=Qa(r,1),n=t[0],i=null;return Array.isArray(n)?i={tag:"g",attributes:{class:"".concat(W.cssPrefix,"-").concat(K4.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(K4.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(W.cssPrefix,"-").concat(K4.PRIMARY),fill:"currentColor",d:n[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:a,icon:i}}var HS={found:!1,width:512,height:512};function gS(e,c){!Dl&&!W.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(c,'" is missing.'))}function _7(e,c){var a=c;return c==="fa"&&W.styleDefault!==null&&(c=E4()),new Promise(function(r,t){if(Q1("missingIconAbstract"),a==="fa"){var n=Ql(e)||{};e=n.iconName||e,c=n.prefix||c}if(e&&c&&Mc[c]&&Mc[c][e]){var i=Mc[c][e];return r(P7(i))}gS(e,c),r(F(F({},HS),{},{icon:W.showMissingIcons&&e?Q1("missingIconAbstract")||{}:{}}))})}var si=function(){},I7=W.measurePerformance&&y8&&y8.mark&&y8.measure?y8:{mark:si,measure:si},P6='FA "6.3.0"',VS=function(c){return I7.mark("".concat(P6," ").concat(c," begins")),function(){return Zl(c)}},Zl=function(c){I7.mark("".concat(P6," ").concat(c," ends")),I7.measure("".concat(P6," ").concat(c),"".concat(P6," ").concat(c," begins"),"".concat(P6," ").concat(c," ends"))},or={begin:VS,end:Zl},G8=function(){};function oi(e){var c=e.getAttribute?e.getAttribute(a3):null;return typeof c=="string"}function CS(e){var c=e.getAttribute?e.getAttribute(Za):null,a=e.getAttribute?e.getAttribute(er):null;return c&&a}function MS(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(W.replacementClass)}function LS(){if(W.autoReplaceSvg===!0)return K8.replace;var e=K8[W.autoReplaceSvg];return e||K8.replace}function wS(e){return V2.createElementNS("http://www.w3.org/2000/svg",e)}function yS(e){return V2.createElement(e)}function ef(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=c.ceFn,r=a===void 0?e.tag==="svg"?wS:yS:a;if(typeof e=="string")return V2.createTextNode(e);var t=r(e.tag);Object.keys(e.attributes||[]).forEach(function(i){t.setAttribute(i,e.attributes[i])});var n=e.children||[];return n.forEach(function(i){t.appendChild(ef(i,{ceFn:r}))}),t}function xS(e){var c=" ".concat(e.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var K8={replace:function(c){var a=c[0];if(a.parentNode)if(c[1].forEach(function(t){a.parentNode.insertBefore(ef(t),a)}),a.getAttribute(a3)===null&&W.keepOriginalSource){var r=V2.createComment(xS(a));a.parentNode.replaceChild(r,a)}else a.remove()},nest:function(c){var a=c[0],r=c[1];if(~ar(a).indexOf(W.replacementClass))return K8.replace(c);var t=new RegExp("".concat(W.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var n=r[0].attributes.class.split(" ").reduce(function(o,f){return f===W.replacementClass||f.match(t)?o.toSvg.push(f):o.toNode.push(f),o},{toNode:[],toSvg:[]});r[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}var i=r.map(function(o){return G0(o)}).join(`
`);a.setAttribute(a3,""),a.innerHTML=i}};function li(e){e()}function cf(e,c){var a=typeof c=="function"?c:G8;if(e.length===0)a();else{var r=li;W.mutateApproach===Nb&&(r=T4.requestAnimationFrame||li),r(function(){var t=LS(),n=or.begin("mutate");e.map(t),n(),a()})}}var lr=!1;function af(){lr=!0}function R7(){lr=!1}var be=null;function fi(e){if(Z9&&W.observeMutations){var c=e.treeCallback,a=c===void 0?G8:c,r=e.nodeCallback,t=r===void 0?G8:r,n=e.pseudoElementsCallback,i=n===void 0?G8:n,o=e.observeMutationsRoot,f=o===void 0?V2:o;be=new Z9(function(u){if(!lr){var p=E4();l6(u).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!oi(g.addedNodes[0])&&(W.searchPseudoElements&&i(g.target),a(g.target)),g.type==="attributes"&&g.target.parentNode&&W.searchPseudoElements&&i(g.target.parentNode),g.type==="attributes"&&oi(g.target)&&~Rb.indexOf(g.attributeName))if(g.attributeName==="class"&&CS(g.target)){var H=u5(ar(g.target)),M=H.prefix,y=H.iconName;g.target.setAttribute(Za,M||p),y&&g.target.setAttribute(er,y)}else MS(g.target)&&t(g.target)})}}),e4&&be.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function bS(){be&&be.disconnect()}function SS(e){var c=e.getAttribute("style"),a=[];return c&&(a=c.split(";").reduce(function(r,t){var n=t.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),a}function kS(e){var c=e.getAttribute("data-prefix"),a=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",t=u5(ar(e));return t.prefix||(t.prefix=E4()),c&&a&&(t.prefix=c,t.iconName=a),t.iconName&&t.prefix||(t.prefix&&r.length>0&&(t.iconName=iS(t.prefix,e.innerText)||nr(t.prefix,N7(e.innerText))),!t.iconName&&W.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(t.iconName=e.firstChild.data)),t}function NS(e){var c=l6(e.attributes).reduce(function(t,n){return t.name!=="class"&&t.name!=="style"&&(t[n.name]=n.value),t},{}),a=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return W.autoA11y&&(a?c["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(r||V0()):(c["aria-hidden"]="true",c.focusable="false")),c}function AS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A1,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ui(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=kS(e),r=a.iconName,t=a.prefix,n=a.rest,i=NS(e),o=T7("parseNodeAttributes",{},e),f=c.styleParser?SS(e):[];return F({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:t,transform:A1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:f,attributes:i}},o)}var TS=y1.styles;function rf(e){var c=W.autoReplaceSvg==="nest"?ui(e,{styleParser:!1}):ui(e);return~c.extra.classes.indexOf(Fl)?Q1("generateLayersText",e,c):Q1("generateSvgReplacementMutation",e,c)}var P4=new Set;cr.map(function(e){P4.add("fa-".concat(e))});Object.keys(v0[H2]).map(P4.add.bind(P4));Object.keys(v0[b2]).map(P4.add.bind(P4));P4=W0(P4);function di(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e4)return Promise.resolve();var a=V2.documentElement.classList,r=function(g){return a.add("".concat(ei,"-").concat(g))},t=function(g){return a.remove("".concat(ei,"-").concat(g))},n=W.autoFetchSvg?P4:cr.map(function(p){return"fa-".concat(p)}).concat(Object.keys(TS));n.includes("fa")||n.push("fa");var i=[".".concat(Fl,":not([").concat(a3,"])")].concat(n.map(function(p){return".".concat(p,":not([").concat(a3,"])")})).join(", ");if(i.length===0)return Promise.resolve();var o=[];try{o=l6(e.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),t("complete");else return Promise.resolve();var f=or.begin("onTree"),u=o.reduce(function(p,g){try{var H=rf(g);H&&p.push(H)}catch(M){Dl||M.name==="MissingIcon"&&console.error(M)}return p},[]);return new Promise(function(p,g){Promise.all(u).then(function(H){cf(H,function(){r("active"),r("complete"),t("pending"),typeof c=="function"&&c(),f(),p()})}).catch(function(H){f(),g(H)})})}function ES(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rf(e).then(function(a){a&&cf([a],c)})}function PS(e){return function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(c||{}).icon?c:E7(c||{}),t=a.mask;return t&&(t=(t||{}).icon?t:E7(t||{})),e(r,F(F({},a),{},{mask:t}))}}var _S=function(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,t=r===void 0?A1:r,n=a.symbol,i=n===void 0?!1:n,o=a.mask,f=o===void 0?null:o,u=a.maskId,p=u===void 0?null:u,g=a.title,H=g===void 0?null:g,M=a.titleId,y=M===void 0?null:M,L=a.classes,m=L===void 0?[]:L,h=a.attributes,z=h===void 0?{}:h,V=a.styles,C=V===void 0?{}:V;if(c){var N=c.prefix,S=c.iconName,T=c.icon;return d5(F({type:"icon"},c),function(){return r3("beforeDOMElementCreation",{iconDefinition:c,params:a}),W.autoA11y&&(H?z["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(y||V0()):(z["aria-hidden"]="true",z.focusable="false")),sr({icons:{main:P7(T),mask:f?P7(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:S,transform:F(F({},A1),t),symbol:i,title:H,maskId:p,titleId:y,extra:{attributes:z,styles:C,classes:m}})})}},IS={mixout:function(){return{icon:PS(_S)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=di,a.nodeCallback=ES,a}}},provides:function(c){c.i2svg=function(a){var r=a.node,t=r===void 0?V2:r,n=a.callback,i=n===void 0?function(){}:n;return di(t,i)},c.generateSvgReplacementMutation=function(a,r){var t=r.iconName,n=r.title,i=r.titleId,o=r.prefix,f=r.transform,u=r.symbol,p=r.mask,g=r.maskId,H=r.extra;return new Promise(function(M,y){Promise.all([_7(t,o),p.iconName?_7(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var m=Qa(L,2),h=m[0],z=m[1];M([a,sr({icons:{main:h,mask:z},prefix:o,iconName:t,transform:f,symbol:u,maskId:g,title:n,titleId:i,extra:H,watchable:!0})])}).catch(y)})},c.generateAbstractIcon=function(a){var r=a.children,t=a.attributes,n=a.main,i=a.transform,o=a.styles,f=l5(o);f.length>0&&(t.style=f);var u;return rr(i)&&(u=Q1("generateAbstractTransformGrouping",{main:n,transform:i,containerWidth:n.width,iconWidth:n.width})),r.push(u||n.icon),{children:r,attributes:t}}}},RS={mixout:function(){return{layer:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.classes,n=t===void 0?[]:t;return d5({type:"layer"},function(){r3("beforeDOMElementCreation",{assembler:a,params:r});var i=[];return a(function(o){Array.isArray(o)?o.map(function(f){i=i.concat(f.abstract)}):i=i.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(W.cssPrefix,"-layers")].concat(W0(n)).join(" ")},children:i}]})}}}},DS={mixout:function(){return{counter:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.title,n=t===void 0?null:t,i=r.classes,o=i===void 0?[]:i,f=r.attributes,u=f===void 0?{}:f,p=r.styles,g=p===void 0?{}:p;return d5({type:"counter",content:a},function(){return r3("beforeDOMElementCreation",{content:a,params:r}),zS({content:a.toString(),title:n,extra:{attributes:u,styles:g,classes:["".concat(W.cssPrefix,"-layers-counter")].concat(W0(o))}})})}}}},FS={mixout:function(){return{text:function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=r.transform,n=t===void 0?A1:t,i=r.title,o=i===void 0?null:i,f=r.classes,u=f===void 0?[]:f,p=r.attributes,g=p===void 0?{}:p,H=r.styles,M=H===void 0?{}:H;return d5({type:"text",content:a},function(){return r3("beforeDOMElementCreation",{content:a,params:r}),ii({content:a,transform:F(F({},A1),n),title:o,extra:{attributes:g,styles:M,classes:["".concat(W.cssPrefix,"-layers-text")].concat(W0(u))}})})}}},provides:function(c){c.generateLayersText=function(a,r){var t=r.title,n=r.transform,i=r.extra,o=null,f=null;if(_l){var u=parseInt(getComputedStyle(a).fontSize,10),p=a.getBoundingClientRect();o=p.width/u,f=p.height/u}return W.autoA11y&&!t&&(i.attributes["aria-hidden"]="true"),Promise.resolve([a,ii({content:a.innerHTML,width:o,height:f,transform:n,title:t,extra:i,watchable:!0})])}}},BS=new RegExp('"',"ug"),mi=[1105920,1112319];function OS(e){var c=e.replace(BS,""),a=eS(c,0),r=a>=mi[0]&&a<=mi[1],t=c.length===2?c[0]===c[1]:!1;return{value:N7(t?c[0]:c),isSecondary:r||t}}function hi(e,c){var a="".concat(kb).concat(c.replace(":","-"));return new Promise(function(r,t){if(e.getAttribute(a)!==null)return r();var n=l6(e.children),i=n.filter(function(T){return T.getAttribute(k7)===c})[0],o=T4.getComputedStyle(e,c),f=o.getPropertyValue("font-family").match(Pb),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(i&&!f)return e.removeChild(i),r();if(f&&p!=="none"&&p!==""){var g=o.getPropertyValue("content"),H=~["Sharp"].indexOf(f[2])?b2:H2,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?z0[H][f[2].toLowerCase()]:_b[H][u],y=OS(g),L=y.value,m=y.isSecondary,h=f[0].startsWith("FontAwesome"),z=nr(M,L),V=z;if(h){var C=sS(L);C.iconName&&C.prefix&&(z=C.iconName,M=C.prefix)}if(z&&!m&&(!i||i.getAttribute(Za)!==M||i.getAttribute(er)!==V)){e.setAttribute(a,V),i&&e.removeChild(i);var N=AS(),S=N.extra;S.attributes[k7]=c,_7(z,M).then(function(T){var D=sr(F(F({},N),{},{icons:{main:T,mask:ir()},prefix:M,iconName:V,extra:S,watchable:!0})),A=V2.createElement("svg");c==="::before"?e.insertBefore(A,e.firstChild):e.appendChild(A),A.outerHTML=D.map(function(B){return G0(B)}).join(`
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=function(e){const c=[];let a=0;for(let r=0;r<e.length;r++){let t=e.charCodeAt(r);t<128?c[a++]=t:t<2048?(c[a++]=t>>6|192,c[a++]=t&63|128):(t&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(t=65536+((t&1023)<<10)+(e.charCodeAt(++r)&1023),c[a++]=t>>18|240,c[a++]=t>>12&63|128,c[a++]=t>>6&63|128,c[a++]=t&63|128):(c[a++]=t>>12|224,c[a++]=t>>6&63|128,c[a++]=t&63|128)}return c},_02=function(e){const c=[];let a=0,r=0;for(;a<e.length;){const t=e[a++];if(t<128)c[r++]=String.fromCharCode(t);else if(t>191&&t<224){const n=e[a++];c[r++]=String.fromCharCode((t&31)<<6|n&63)}else if(t>239&&t<365){const n=e[a++],i=e[a++],o=e[a++],f=((t&7)<<18|(n&63)<<12|(i&63)<<6|o&63)-65536;c[r++]=String.fromCharCode(55296+(f>>10)),c[r++]=String.fromCharCode(56320+(f&1023))}else{const n=e[a++],i=e[a++];c[r++]=String.fromCharCode((t&15)<<12|(n&63)<<6|i&63)}}return c.join("")},rg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,c){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=c?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const n=e[t],i=t+1<e.length,o=i?e[t+1]:0,f=t+2<e.length,u=f?e[t+2]:0,p=n>>2,g=(n&3)<<4|o>>4;let H=(o&15)<<2|u>>6,M=u&63;f||(M=64,i||(H=64)),r.push(a[p],a[g],a[H],a[M])}return r.join("")},encodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?btoa(e):this.encodeByteArray(ag(e),c)},decodeString(e,c){return this.HAS_NATIVE_SUPPORT&&!c?atob(e):_02(this.decodeStringToByteArray(e,c))},decodeStringToByteArray(e,c){this.init_();const a=c?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const n=a[e.charAt(t++)],o=t<e.length?a[e.charAt(t)]:0;++t;const u=t<e.length?a[e.charAt(t)]:64;++t;const g=t<e.length?a[e.charAt(t)]:64;if(++t,n==null||o==null||u==null||g==null)throw new I02;const H=n<<2|o>>4;if(r.push(H),u!==64){const M=o<<4&240|u>>2;if(r.push(M),g!==64){const y=u<<6&192|g;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class I02 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const R02=function(e){const c=ag(e);return rg.encodeByteArray(c,!0)},tg=function(e){return R02(e).replace(/\./g,"")},ng=function(e){try{return rg.decodeString(e,!0)}catch(c){console.error("base64Decode failed: ",c)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D02(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F02=()=>D02().__FIREBASE_DEFAULTS__,B02=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},O02=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const c=e&&ng(e[1]);return c&&JSON.parse(c)},ot=()=>{try{return F02()||B02()||O02()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$02=e=>{var c,a;return(a=(c=ot())===null||c===void 0?void 0:c.emulatorHosts)===null||a===void 0?void 0:a[e]},U02=()=>{var e;return(e=ot())===null||e===void 0?void 0:e.config},ig=e=>{var c;return(c=ot())===null||c===void 0?void 0:c[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j02{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((c,a)=>{this.resolve=c,this.reject=a})}wrapCallback(c){return(a,r)=>{a?this.reject(a):this.resolve(r),typeof c=="function"&&(this.promise.catch(()=>{}),c.length===1?c(a):c(a,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function W02(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(e1())}function q02(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function G02(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K02(){const e=e1();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Y02(){try{return typeof indexedDB=="object"}catch{return!1}}function X02(){return new Promise((e,c)=>{try{let a=!0;const r="validate-browser-context-for-indexeddb-analytics-module",t=self.indexedDB.open(r);t.onsuccess=()=>{t.result.close(),a||self.indexedDB.deleteDatabase(r),e(!0)},t.onupgradeneeded=()=>{a=!1},t.onerror=()=>{var n;c(((n=t.error)===null||n===void 0?void 0:n.message)||"")}}catch(a){c(a)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q02="FirebaseError";class R4 extends Error{constructor(c,a,r){super(a),this.code=c,this.customData=r,this.name=Q02,Object.setPrototypeOf(this,R4.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Z0.prototype.create)}}class Z0{constructor(c,a,r){this.service=c,this.serviceName=a,this.errors=r}create(c,...a){const r=a[0]||{},t=`${this.service}/${c}`,n=this.errors[c],i=n?J02(n,r):"Error",o=`${this.serviceName}: ${i} (${t}).`;return new R4(t,o,r)}}function J02(e,c){return e.replace(Z02,(a,r)=>{const t=c[r];return t!=null?String(t):`<${r}?>`})}const Z02=/\{\$([^}]+)}/g;function e82(e){for(const c in e)if(Object.prototype.hasOwnProperty.call(e,c))return!1;return!0}function Se(e,c){if(e===c)return!0;const a=Object.keys(e),r=Object.keys(c);for(const t of a){if(!r.includes(t))return!1;const n=e[t],i=c[t];if(gi(n)&&gi(i)){if(!Se(n,i))return!1}else if(n!==i)return!1}for(const t of r)if(!a.includes(t))return!1;return!0}function gi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e8(e){const c=[];for(const[a,r]of Object.entries(e))Array.isArray(r)?r.forEach(t=>{c.push(encodeURIComponent(a)+"="+encodeURIComponent(t))}):c.push(encodeURIComponent(a)+"="+encodeURIComponent(r));return c.length?"&"+c.join("&"):""}function _6(e){const c={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[t,n]=r.split("=");c[decodeURIComponent(t)]=decodeURIComponent(n)}}),c}function I6(e){const c=e.indexOf("?");if(!c)return"";const a=e.indexOf("#",c);return e.substring(c,a>0?a:void 0)}function c82(e,c){const a=new a82(e,c);return a.subscribe.bind(a)}class a82{constructor(c,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{c(this)}).catch(r=>{this.error(r)})}next(c){this.forEachObserver(a=>{a.next(c)})}error(c){this.forEachObserver(a=>{a.error(c)}),this.close(c)}complete(){this.forEachObserver(c=>{c.complete()}),this.close()}subscribe(c,a,r){let t;if(c===void 0&&a===void 0&&r===void 0)throw new Error("Missing Observer.");r82(c,["next","error","complete"])?t=c:t={next:c,error:a,complete:r},t.next===void 0&&(t.next=wc),t.error===void 0&&(t.error=wc),t.complete===void 0&&(t.complete=wc);const n=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?t.error(this.finalError):t.complete()}catch{}}),this.observers.push(t),n}unsubscribeOne(c){this.observers===void 0||this.observers[c]===void 0||(delete this.observers[c],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(c){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,c)}sendOne(c,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[c]!==void 0)try{a(this.observers[c])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(c){this.finalized||(this.finalized=!0,c!==void 0&&(this.finalError=c),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r82(e,c){if(typeof e!="object"||e===null)return!1;for(const a of c)if(a in e&&typeof e[a]=="function")return!0;return!1}function wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D4(e){return e&&e._delegate?e._delegate:e}class Q3{constructor(c,a,r){this.name=c,this.instanceFactory=a,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(c){return this.instantiationMode=c,this}setMultipleInstances(c){return this.multipleInstances=c,this}setServiceProps(c){return this.serviceProps=c,this}setInstanceCreatedCallback(c){return this.onInstanceCreated=c,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $4="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t82{constructor(c,a){this.name=c,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(c){const a=this.normalizeInstanceIdentifier(c);if(!this.instancesDeferred.has(a)){const r=new j02;if(this.instancesDeferred.set(a,r),this.isInitialized(a)||this.shouldAutoInitialize())try{const t=this.getOrInitializeService({instanceIdentifier:a});t&&r.resolve(t)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(c){var a;const r=this.normalizeInstanceIdentifier(c==null?void 0:c.identifier),t=(a=c==null?void 0:c.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(t)return null;throw n}else{if(t)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(c){if(c.name!==this.name)throw Error(`Mismatching Component ${c.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=c,!!this.shouldAutoInitialize()){if(i82(c))try{this.getOrInitializeService({instanceIdentifier:$4})}catch{}for(const[a,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(a);try{const n=this.getOrInitializeService({instanceIdentifier:t});r.resolve(n)}catch{}}}}clearInstance(c=$4){this.instancesDeferred.delete(c),this.instancesOptions.delete(c),this.instances.delete(c)}async delete(){const c=Array.from(this.instances.values());await Promise.all([...c.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...c.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(c=$4){return this.instances.has(c)}getOptions(c=$4){return this.instancesOptions.get(c)||{}}initialize(c={}){const{options:a={}}=c,r=this.normalizeInstanceIdentifier(c.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const t=this.getOrInitializeService({instanceIdentifier:r,options:a});for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);r===o&&i.resolve(t)}return t}onInit(c,a){var r;const t=this.normalizeInstanceIdentifier(a),n=(r=this.onInitCallbacks.get(t))!==null&&r!==void 0?r:new Set;n.add(c),this.onInitCallbacks.set(t,n);const i=this.instances.get(t);return i&&c(i,t),()=>{n.delete(c)}}invokeOnInitCallbacks(c,a){const r=this.onInitCallbacks.get(a);if(r)for(const t of r)try{t(c,a)}catch{}}getOrInitializeService({instanceIdentifier:c,options:a={}}){let r=this.instances.get(c);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n82(c),options:a}),this.instances.set(c,r),this.instancesOptions.set(c,a),this.invokeOnInitCallbacks(r,c),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,c,r)}catch{}return r||null}normalizeInstanceIdentifier(c=$4){return this.component?this.component.multipleInstances?c:$4:c}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n82(e){return e===$4?void 0:e}function i82(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s82{constructor(c){this.name=c,this.providers=new Map}addComponent(c){const a=this.getProvider(c.name);if(a.isComponentSet())throw new Error(`Component ${c.name} has already been registered with ${this.name}`);a.setComponent(c)}addOrOverwriteComponent(c){this.getProvider(c.name).isComponentSet()&&this.providers.delete(c.name),this.addComponent(c)}getProvider(c){if(this.providers.has(c))return this.providers.get(c);const a=new t82(c,this);return this.providers.set(c,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var p2;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(p2||(p2={}));const o82={debug:p2.DEBUG,verbose:p2.VERBOSE,info:p2.INFO,warn:p2.WARN,error:p2.ERROR,silent:p2.SILENT},l82=p2.INFO,f82={[p2.DEBUG]:"log",[p2.VERBOSE]:"log",[p2.INFO]:"info",[p2.WARN]:"warn",[p2.ERROR]:"error"},u82=(e,c,...a)=>{if(c<e.logLevel)return;const r=new Date().toISOString(),t=f82[c];if(t)console[t](`[${r}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${c})`)};class sg{constructor(c){this.name=c,this._logLevel=l82,this._logHandler=u82,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(c){if(!(c in p2))throw new TypeError(`Invalid value "${c}" assigned to \`logLevel\``);this._logLevel=c}setLogLevel(c){this._logLevel=typeof c=="string"?o82[c]:c}get logHandler(){return this._logHandler}set logHandler(c){if(typeof c!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=c}get userLogHandler(){return this._userLogHandler}set userLogHandler(c){this._userLogHandler=c}debug(...c){this._userLogHandler&&this._userLogHandler(this,p2.DEBUG,...c),this._logHandler(this,p2.DEBUG,...c)}log(...c){this._userLogHandler&&this._userLogHandler(this,p2.VERBOSE,...c),this._logHandler(this,p2.VERBOSE,...c)}info(...c){this._userLogHandler&&this._userLogHandler(this,p2.INFO,...c),this._logHandler(this,p2.INFO,...c)}warn(...c){this._userLogHandler&&this._userLogHandler(this,p2.WARN,...c),this._logHandler(this,p2.WARN,...c)}error(...c){this._userLogHandler&&this._userLogHandler(this,p2.ERROR,...c),this._logHandler(this,p2.ERROR,...c)}}const d82=(e,c)=>c.some(a=>e instanceof a);let Vi,Ci;function m82(){return Vi||(Vi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h82(){return Ci||(Ci=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const og=new WeakMap,D7=new WeakMap,lg=new WeakMap,yc=new WeakMap,lt=new WeakMap;function p82(e){const c=new Promise((a,r)=>{const t=()=>{e.removeEventListener("success",n),e.removeEventListener("error",i)},n=()=>{a(y4(e.result)),t()},i=()=>{r(e.error),t()};e.addEventListener("success",n),e.addEventListener("error",i)});return c.then(a=>{a instanceof IDBCursor&&og.set(a,e)}).catch(()=>{}),lt.set(c,e),c}function v82(e){if(D7.has(e))return;const c=new Promise((a,r)=>{const t=()=>{e.removeEventListener("complete",n),e.removeEventListener("error",i),e.removeEventListener("abort",i)},n=()=>{a(),t()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),t()};e.addEventListener("complete",n),e.addEventListener("error",i),e.addEventListener("abort",i)});D7.set(e,c)}let F7={get(e,c,a){if(e instanceof IDBTransaction){if(c==="done")return D7.get(e);if(c==="objectStoreNames")return e.objectStoreNames||lg.get(e);if(c==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return y4(e[c])},set(e,c,a){return e[c]=a,!0},has(e,c){return e instanceof IDBTransaction&&(c==="done"||c==="store")?!0:c in e}};function z82(e){F7=e(F7)}function H82(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(c,...a){const r=e.call(xc(this),c,...a);return lg.set(r,c.sort?c.sort():[c]),y4(r)}:h82().includes(e)?function(...c){return e.apply(xc(this),c),y4(og.get(this))}:function(...c){return y4(e.apply(xc(this),c))}}function g82(e){return typeof e=="function"?H82(e):(e instanceof IDBTransaction&&v82(e),d82(e,m82())?new Proxy(e,F7):e)}function y4(e){if(e instanceof IDBRequest)return p82(e);if(yc.has(e))return yc.get(e);const c=g82(e);return c!==e&&(yc.set(e,c),lt.set(c,e)),c}const xc=e=>lt.get(e);function V82(e,c,{blocked:a,upgrade:r,blocking:t,terminated:n}={}){const i=indexedDB.open(e,c),o=y4(i);return r&&i.addEventListener("upgradeneeded",f=>{r(y4(i.result),f.oldVersion,f.newVersion,y4(i.transaction))}),a&&i.addEventListener("blocked",()=>a()),o.then(f=>{n&&f.addEventListener("close",()=>n()),t&&f.addEventListener("versionchange",()=>t())}).catch(()=>{}),o}const C82=["get","getKey","getAll","getAllKeys","count"],M82=["put","add","delete","clear"],bc=new Map;function Mi(e,c){if(!(e instanceof IDBDatabase&&!(c in e)&&typeof c=="string"))return;if(bc.get(c))return bc.get(c);const a=c.replace(/FromIndex$/,""),r=c!==a,t=M82.includes(a);if(!(a in(r?IDBIndex:IDBObjectStore).prototype)||!(t||C82.includes(a)))return;const n=async function(i,...o){const f=this.transaction(i,t?"readwrite":"readonly");let u=f.store;return r&&(u=u.index(o.shift())),(await Promise.all([u[a](...o),t&&f.done]))[0]};return bc.set(c,n),n}z82(e=>({...e,get:(c,a,r)=>Mi(c,a)||e.get(c,a,r),has:(c,a)=>!!Mi(c,a)||e.has(c,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L82{constructor(c){this.container=c}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(w82(a)){const r=a.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(a=>a).join(" ")}}function w82(e){const c=e.getComponent();return(c==null?void 0:c.type)==="VERSION"}const B7="@firebase/app",Li="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3=new sg("@firebase/app"),y82="@firebase/app-compat",x82="@firebase/analytics-compat",b82="@firebase/analytics",S82="@firebase/app-check-compat",k82="@firebase/app-check",N82="@firebase/auth",A82="@firebase/auth-compat",T82="@firebase/database",E82="@firebase/database-compat",P82="@firebase/functions",_82="@firebase/functions-compat",I82="@firebase/installations",R82="@firebase/installations-compat",D82="@firebase/messaging",F82="@firebase/messaging-compat",B82="@firebase/performance",O82="@firebase/performance-compat",$82="@firebase/remote-config",U82="@firebase/remote-config-compat",j82="@firebase/storage",W82="@firebase/storage-compat",q82="@firebase/firestore",G82="@firebase/firestore-compat",K82="firebase",Y82="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O7="[DEFAULT]",X82={[B7]:"fire-core",[y82]:"fire-core-compat",[b82]:"fire-analytics",[x82]:"fire-analytics-compat",[k82]:"fire-app-check",[S82]:"fire-app-check-compat",[N82]:"fire-auth",[A82]:"fire-auth-compat",[T82]:"fire-rtdb",[E82]:"fire-rtdb-compat",[P82]:"fire-fn",[_82]:"fire-fn-compat",[I82]:"fire-iid",[R82]:"fire-iid-compat",[D82]:"fire-fcm",[F82]:"fire-fcm-compat",[B82]:"fire-perf",[O82]:"fire-perf-compat",[$82]:"fire-rc",[U82]:"fire-rc-compat",[j82]:"fire-gcs",[W82]:"fire-gcs-compat",[q82]:"fire-fst",[G82]:"fire-fst-compat","fire-js":"fire-js",[K82]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Map,$7=new Map;function Q82(e,c){try{e.container.addComponent(c)}catch(a){t3.debug(`Component ${c.name} failed to register with FirebaseApp ${e.name}`,a)}}function C0(e){const c=e.name;if($7.has(c))return t3.debug(`There were multiple attempts to register component ${c}.`),!1;$7.set(c,e);for(const a of ke.values())Q82(a,e);return!0}function fg(e,c){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J82={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},x4=new Z0("app","Firebase",J82);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z82{constructor(c,a,r){this._isDeleted=!1,this._options=Object.assign({},c),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Q3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(c){this.checkDestroyed(),this._automaticDataCollectionEnabled=c}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(c){this._isDeleted=c}checkDestroyed(){if(this.isDeleted)throw x4.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N5=Y82;function ug(e,c={}){let a=e;typeof c!="object"&&(c={name:c});const r=Object.assign({name:O7,automaticDataCollectionEnabled:!1},c),t=r.name;if(typeof t!="string"||!t)throw x4.create("bad-app-name",{appName:String(t)});if(a||(a=U02()),!a)throw x4.create("no-options");const n=ke.get(t);if(n){if(Se(a,n.options)&&Se(r,n.config))return n;throw x4.create("duplicate-app",{appName:t})}const i=new s82(t);for(const f of $7.values())i.addComponent(f);const o=new Z82(a,r,i);return ke.set(t,o),o}function ee2(e=O7){const c=ke.get(e);if(!c&&e===O7)return ug();if(!c)throw x4.create("no-app",{appName:e});return c}function O3(e,c,a){var r;let t=(r=X82[e])!==null&&r!==void 0?r:e;a&&(t+=`-${a}`);const n=t.match(/\s|\//),i=c.match(/\s|\//);if(n||i){const o=[`Unable to register library "${t}" with version "${c}":`];n&&o.push(`library name "${t}" contains illegal characters (whitespace or "/")`),n&&i&&o.push("and"),i&&o.push(`version name "${c}" contains illegal characters (whitespace or "/")`),t3.warn(o.join(" "));return}C0(new Q3(`${t}-version`,()=>({library:t,version:c}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce2="firebase-heartbeat-database",ae2=1,M0="firebase-heartbeat-store";let Sc=null;function dg(){return Sc||(Sc=V82(ce2,ae2,{upgrade:(e,c)=>{switch(c){case 0:e.createObjectStore(M0)}}}).catch(e=>{throw x4.create("idb-open",{originalErrorMessage:e.message})})),Sc}async function re2(e){try{return(await dg()).transaction(M0).objectStore(M0).get(mg(e))}catch(c){if(c instanceof R4)t3.warn(c.message);else{const a=x4.create("idb-get",{originalErrorMessage:c==null?void 0:c.message});t3.warn(a.message)}}}async function wi(e,c){try{const r=(await dg()).transaction(M0,"readwrite");return await r.objectStore(M0).put(c,mg(e)),r.done}catch(a){if(a instanceof R4)t3.warn(a.message);else{const r=x4.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});t3.warn(r.message)}}}function mg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te2=1024,ne2=30*24*60*60*1e3;class ie2{constructor(c){this.container=c,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new oe2(a),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(t=>t.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{const n=new Date(t.date).valueOf();return Date.now()-n<=ne2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const c=yi(),{heartbeatsToSend:a,unsentEntries:r}=se2(this._heartbeatsCache.heartbeats),t=tg(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=c,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),t}}function yi(){return new Date().toISOString().substring(0,10)}function se2(e,c=te2){const a=[];let r=e.slice();for(const t of e){const n=a.find(i=>i.agent===t.agent);if(n){if(n.dates.push(t.date),xi(a)>c){n.dates.pop();break}}else if(a.push({agent:t.agent,dates:[t.date]}),xi(a)>c){a.pop();break}r=r.slice(1)}return{heartbeatsToSend:a,unsentEntries:r}}class oe2{constructor(c){this.app=c,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y02()?X02().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await re2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return wi(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:c.heartbeats})}else return}async add(c){var a;if(await this._canUseIndexedDBPromise){const t=await this.read();return wi(this.app,{lastSentHeartbeatDate:(a=c.lastSentHeartbeatDate)!==null&&a!==void 0?a:t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...c.heartbeats]})}else return}}function xi(e){return tg(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le2(e){C0(new Q3("platform-logger",c=>new L82(c),"PRIVATE")),C0(new Q3("heartbeat",c=>new ie2(c),"PRIVATE")),O3(B7,Li,e),O3(B7,Li,"esm2017"),O3("fire-js","")}le2("");var fe2="firebase",ue2="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */O3(fe2,ue2,"app");function ft(e,c){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&c.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(e);t<r.length;t++)c.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(e,r[t])&&(a[r[t]]=e[r[t]]);return a}function hg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const de2=hg,pg=new Z0("auth","Firebase",hg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new sg("@firebase/auth");function Y8(e,...c){bi.logLevel<=p2.ERROR&&bi.error(`Auth (${N5}): ${e}`,...c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g1(e,...c){throw ut(e,...c)}function P1(e,...c){return ut(e,...c)}function vg(e,c,a){const r=Object.assign(Object.assign({},de2()),{[c]:a});return new Z0("auth","Firebase",r).create(c,{appName:e.name})}function me2(e,c,a){const r=a;if(!(c instanceof r))throw r.name!==c.constructor.name&&g1(e,"argument-error"),vg(e,"argument-error",`Type of ${c.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ut(e,...c){if(typeof e!="string"){const a=c[0],r=[...c.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(a,...r)}return pg.create(e,...c)}function K(e,c,...a){if(!e)throw ut(c,...a)}function W1(e){const c="INTERNAL ASSERTION FAILED: "+e;throw Y8(c),new Error(c)}function J1(e,c){e||W1(c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Map;function q1(e){J1(e instanceof Function,"Expected a class definition");let c=Si.get(e);return c?(J1(c instanceof e,"Instance stored in cache mismatched with class"),c):(c=new e,Si.set(e,c),c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he2(e,c){const a=fg(e,"auth");if(a.isInitialized()){const t=a.getImmediate(),n=a.getOptions();if(Se(n,c??{}))return t;g1(t,"already-initialized")}return a.initialize({options:c})}function pe2(e,c){const a=(c==null?void 0:c.persistence)||[],r=(Array.isArray(a)?a:[a]).map(q1);c!=null&&c.errorMap&&e._updateErrorMap(c.errorMap),e._initializeWithPersistence(r,c==null?void 0:c.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U7(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function ve2(){return ki()==="http:"||ki()==="https:"}function ki(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ve2()||q02()||"connection"in navigator)?navigator.onLine:!0}function He2(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c8{constructor(c,a){this.shortDelay=c,this.longDelay=a,J1(a>c,"Short delay should be less than long delay!"),this.isMobile=W02()||G02()}get(){return ze2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,c){J1(e.emulator,"Emulator should always be set here");const{url:a}=e.emulator;return c?`${a}${c.startsWith("/")?c.slice(1):c}`:a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{static initialize(c,a,r){this.fetchImpl=c,a&&(this.headersImpl=a),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;W1("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;W1("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;W1("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve2=new c8(3e4,6e4);function a8(e,c){return e.tenantId&&!c.tenantId?Object.assign(Object.assign({},c),{tenantId:e.tenantId}):c}async function r8(e,c,a,r,t={}){return Hg(e,t,async()=>{let n={},i={};r&&(c==="GET"?i=r:n={body:JSON.stringify(r)});const o=e8(Object.assign({key:e.config.apiKey},i)).slice(1),f=await e._getAdditionalHeaders();return f["Content-Type"]="application/json",e.languageCode&&(f["X-Firebase-Locale"]=e.languageCode),zg.fetch()(gg(e,e.config.apiHost,a,o),Object.assign({method:c,headers:f,referrerPolicy:"no-referrer"},n))})}async function Hg(e,c,a){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},ge2),c);try{const t=new Ce2(e),n=await Promise.race([a(),t.promise]);t.clearNetworkTimeout();const i=await n.json();if("needConfirmation"in i)throw P8(e,"account-exists-with-different-credential",i);if(n.ok&&!("errorMessage"in i))return i;{const o=n.ok?i.errorMessage:i.error.message,[f,u]=o.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw P8(e,"credential-already-in-use",i);if(f==="EMAIL_EXISTS")throw P8(e,"email-already-in-use",i);if(f==="USER_DISABLED")throw P8(e,"user-disabled",i);const p=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vg(e,p,u);g1(e,p)}}catch(t){if(t instanceof R4)throw t;g1(e,"internal-error",{message:String(t)})}}async function t8(e,c,a,r,t={}){const n=await r8(e,c,a,r,t);return"mfaPendingCredential"in n&&g1(e,"multi-factor-auth-required",{_serverResponse:n}),n}function gg(e,c,a,r){const t=`${c}${a}?${r}`;return e.config.emulator?dt(e.config,t):`${e.config.apiScheme}://${t}`}class Ce2{constructor(c){this.auth=c,this.timer=null,this.promise=new Promise((a,r)=>{this.timer=setTimeout(()=>r(P1(this.auth,"network-request-failed")),Ve2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function P8(e,c,a){const r={appName:e.name};a.email&&(r.email=a.email),a.phoneNumber&&(r.phoneNumber=a.phoneNumber);const t=P1(e,c,r);return t.customData._tokenResponse=a,t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me2(e,c){return r8(e,"POST","/v1/accounts:delete",c)}async function Le2(e,c){return r8(e,"POST","/v1/accounts:lookup",c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J6(e){if(e)try{const c=new Date(Number(e));if(!isNaN(c.getTime()))return c.toUTCString()}catch{}}async function we2(e,c=!1){const a=D4(e),r=await a.getIdToken(c),t=mt(r);K(t&&t.exp&&t.auth_time&&t.iat,a.auth,"internal-error");const n=typeof t.firebase=="object"?t.firebase:void 0,i=n==null?void 0:n.sign_in_provider;return{claims:t,token:r,authTime:J6(kc(t.auth_time)),issuedAtTime:J6(kc(t.iat)),expirationTime:J6(kc(t.exp)),signInProvider:i||null,signInSecondFactor:(n==null?void 0:n.sign_in_second_factor)||null}}function kc(e){return Number(e)*1e3}function mt(e){const[c,a,r]=e.split(".");if(c===void 0||a===void 0||r===void 0)return Y8("JWT malformed, contained fewer than 3 sections"),null;try{const t=ng(a);return t?JSON.parse(t):(Y8("Failed to decode base64 JWT payload"),null)}catch(t){return Y8("Caught error parsing JWT payload as JSON",t==null?void 0:t.toString()),null}}function ye2(e){const c=mt(e);return K(c,"internal-error"),K(typeof c.exp<"u","internal-error"),K(typeof c.iat<"u","internal-error"),Number(c.exp)-Number(c.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(e,c,a=!1){if(a)return c;try{return await c}catch(r){throw r instanceof R4&&xe2(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function xe2({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be2{constructor(c){this.user=c,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(c){var a;if(c){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const t=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(c=!1){if(!this.isRunning)return;const a=this.getInterval(c);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(c){(c==null?void 0:c.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(c,a){this.createdAt=c,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=J6(this.lastLoginAt),this.creationTime=J6(this.createdAt)}_copy(c){this.createdAt=c.createdAt,this.lastLoginAt=c.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(e){var c;const a=e.auth,r=await e.getIdToken(),t=await L0(e,Le2(a,{idToken:r}));K(t==null?void 0:t.users.length,a,"internal-error");const n=t.users[0];e._notifyReloadListener(n);const i=!((c=n.providerUserInfo)===null||c===void 0)&&c.length?Ne2(n.providerUserInfo):[],o=ke2(e.providerData,i),f=e.isAnonymous,u=!(e.email&&n.passwordHash)&&!(o!=null&&o.length),p=f?u:!1,g={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:o,metadata:new Vg(n.createdAt,n.lastLoginAt),isAnonymous:p};Object.assign(e,g)}async function Se2(e){const c=D4(e);await Ne(c),await c.auth._persistUserIfCurrent(c),c.auth._notifyListenersIfCurrent(c)}function ke2(e,c){return[...e.filter(r=>!c.some(t=>t.providerId===r.providerId)),...c]}function Ne2(e){return e.map(c=>{var{providerId:a}=c,r=ft(c,["providerId"]);return{providerId:a,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae2(e,c){const a=await Hg(e,{},async()=>{const r=e8({grant_type:"refresh_token",refresh_token:c}).slice(1),{tokenApiHost:t,apiKey:n}=e.config,i=gg(e,t,"/v1/token",`key=${n}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",zg.fetch()(i,{method:"POST",headers:o,body:r})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(c){K(c.idToken,"internal-error"),K(typeof c.idToken<"u","internal-error"),K(typeof c.refreshToken<"u","internal-error");const a="expiresIn"in c&&typeof c.expiresIn<"u"?Number(c.expiresIn):ye2(c.idToken);this.updateTokensAndExpiration(c.idToken,c.refreshToken,a)}async getToken(c,a=!1){return K(!this.accessToken||this.refreshToken,c,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(c,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(c,a){const{accessToken:r,refreshToken:t,expiresIn:n}=await Ae2(c,a);this.updateTokensAndExpiration(r,t,Number(n))}updateTokensAndExpiration(c,a,r){this.refreshToken=a||null,this.accessToken=c||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(c,a){const{refreshToken:r,accessToken:t,expirationTime:n}=a,i=new w0;return r&&(K(typeof r=="string","internal-error",{appName:c}),i.refreshToken=r),t&&(K(typeof t=="string","internal-error",{appName:c}),i.accessToken=t),n&&(K(typeof n=="number","internal-error",{appName:c}),i.expirationTime=n),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(c){this.accessToken=c.accessToken,this.refreshToken=c.refreshToken,this.expirationTime=c.expirationTime}_clone(){return Object.assign(new w0,this.toJSON())}_performRefresh(){return W1("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n4(e,c){K(typeof e=="string"||typeof e>"u","internal-error",{appName:c})}class J4{constructor(c){var{uid:a,auth:r,stsTokenManager:t}=c,n=ft(c,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new be2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=r,this.stsTokenManager=t,this.accessToken=t.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new Vg(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(c){const a=await L0(this,this.stsTokenManager.getToken(this.auth,c));return K(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(c){return we2(this,c)}reload(){return Se2(this)}_assign(c){this!==c&&(K(this.uid===c.uid,this.auth,"internal-error"),this.displayName=c.displayName,this.photoURL=c.photoURL,this.email=c.email,this.emailVerified=c.emailVerified,this.phoneNumber=c.phoneNumber,this.isAnonymous=c.isAnonymous,this.tenantId=c.tenantId,this.providerData=c.providerData.map(a=>Object.assign({},a)),this.metadata._copy(c.metadata),this.stsTokenManager._assign(c.stsTokenManager))}_clone(c){return new J4(Object.assign(Object.assign({},this),{auth:c,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(c){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=c,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(c){this.reloadListener?this.reloadListener(c):this.reloadUserInfo=c}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(c,a=!1){let r=!1;c.idToken&&c.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(c),r=!0),a&&await Ne(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const c=await this.getIdToken();return await L0(this,Me2(this.auth,{idToken:c})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(c=>Object.assign({},c)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(c,a){var r,t,n,i,o,f,u,p;const g=(r=a.displayName)!==null&&r!==void 0?r:void 0,H=(t=a.email)!==null&&t!==void 0?t:void 0,M=(n=a.phoneNumber)!==null&&n!==void 0?n:void 0,y=(i=a.photoURL)!==null&&i!==void 0?i:void 0,L=(o=a.tenantId)!==null&&o!==void 0?o:void 0,m=(f=a._redirectEventId)!==null&&f!==void 0?f:void 0,h=(u=a.createdAt)!==null&&u!==void 0?u:void 0,z=(p=a.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:V,emailVerified:C,isAnonymous:N,providerData:S,stsTokenManager:T}=a;K(V&&T,c,"internal-error");const D=w0.fromJSON(this.name,T);K(typeof V=="string",c,"internal-error"),n4(g,c.name),n4(H,c.name),K(typeof C=="boolean",c,"internal-error"),K(typeof N=="boolean",c,"internal-error"),n4(M,c.name),n4(y,c.name),n4(L,c.name),n4(m,c.name),n4(h,c.name),n4(z,c.name);const A=new J4({uid:V,auth:c,email:H,emailVerified:C,displayName:g,isAnonymous:N,photoURL:y,phoneNumber:M,tenantId:L,stsTokenManager:D,createdAt:h,lastLoginAt:z});return S&&Array.isArray(S)&&(A.providerData=S.map(B=>Object.assign({},B))),m&&(A._redirectEventId=m),A}static async _fromIdTokenResponse(c,a,r=!1){const t=new w0;t.updateFromServerResponse(a);const n=new J4({uid:a.localId,auth:c,stsTokenManager:t,isAnonymous:r});return await Ne(n),n}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(c,a){this.storage[c]=a}async _get(c){const a=this.storage[c];return a===void 0?null:a}async _remove(c){delete this.storage[c]}_addListener(c,a){}_removeListener(c,a){}}Cg.type="NONE";const Ni=Cg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X8(e,c,a){return`firebase:${e}:${c}:${a}`}class $3{constructor(c,a,r){this.persistence=c,this.auth=a,this.userKey=r;const{config:t,name:n}=this.auth;this.fullUserKey=X8(this.userKey,t.apiKey,n),this.fullPersistenceKey=X8("persistence",t.apiKey,n),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(c){return this.persistence._set(this.fullUserKey,c.toJSON())}async getCurrentUser(){const c=await this.persistence._get(this.fullUserKey);return c?J4._fromJSON(this.auth,c):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(c){if(this.persistence===c)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=c,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(c,a,r="authUser"){if(!a.length)return new $3(q1(Ni),c,r);const t=(await Promise.all(a.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let n=t[0]||q1(Ni);const i=X8(r,c.config.apiKey,c.name);let o=null;for(const u of a)try{const p=await u._get(i);if(p){const g=J4._fromJSON(c,p);u!==n&&(o=g),n=u;break}}catch{}const f=t.filter(u=>u._shouldAllowMigration);return!n._shouldAllowMigration||!f.length?new $3(n,c,r):(n=f[0],o&&await n._set(i,o.toJSON()),await Promise.all(a.map(async u=>{if(u!==n)try{await u._remove(i)}catch{}})),new $3(n,c,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){const c=e.toLowerCase();if(c.includes("opera/")||c.includes("opr/")||c.includes("opios/"))return"Opera";if(wg(c))return"IEMobile";if(c.includes("msie")||c.includes("trident/"))return"IE";if(c.includes("edge/"))return"Edge";if(Mg(c))return"Firefox";if(c.includes("silk/"))return"Silk";if(xg(c))return"Blackberry";if(bg(c))return"Webos";if(ht(c))return"Safari";if((c.includes("chrome/")||Lg(c))&&!c.includes("edge/"))return"Chrome";if(yg(c))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(a);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mg(e=e1()){return/firefox\//i.test(e)}function ht(e=e1()){const c=e.toLowerCase();return c.includes("safari/")&&!c.includes("chrome/")&&!c.includes("crios/")&&!c.includes("android")}function Lg(e=e1()){return/crios\//i.test(e)}function wg(e=e1()){return/iemobile/i.test(e)}function yg(e=e1()){return/android/i.test(e)}function xg(e=e1()){return/blackberry/i.test(e)}function bg(e=e1()){return/webos/i.test(e)}function A5(e=e1()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Te2(e=e1()){var c;return A5(e)&&!!(!((c=window.navigator)===null||c===void 0)&&c.standalone)}function Ee2(){return K02()&&document.documentMode===10}function Sg(e=e1()){return A5(e)||yg(e)||bg(e)||xg(e)||/windows phone/i.test(e)||wg(e)}function Pe2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(e,c=[]){let a;switch(e){case"Browser":a=Ai(e1());break;case"Worker":a=`${Ai(e1())}-${e}`;break;default:a=e}const r=c.length?c.join(","):"FirebaseCore-web";return`${a}/JsCore/${N5}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e2{constructor(c){this.auth=c,this.queue=[]}pushCallback(c,a){const r=n=>new Promise((i,o)=>{try{const f=c(n);i(f)}catch(f){o(f)}});r.onAbort=a,this.queue.push(r);const t=this.queue.length-1;return()=>{this.queue[t]=()=>Promise.resolve()}}async runMiddleware(c){if(this.auth.currentUser===c)return;const a=[];try{for(const r of this.queue)await r(c),r.onAbort&&a.push(r.onAbort)}catch(r){a.reverse();for(const t of a)try{t()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie2{constructor(c,a,r){this.app=c,this.heartbeatServiceProvider=a,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ti(this),this.idTokenSubscription=new Ti(this),this.beforeStateQueue=new _e2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=c.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(c,a){return a&&(this._popupRedirectResolver=q1(a)),this._initializationPromise=this.queue(async()=>{var r,t;if(!this._deleted&&(this.persistenceManager=await $3.create(this,c),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((t=this.currentUser)===null||t===void 0?void 0:t.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const c=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!c)){if(this.currentUser&&c&&this.currentUser.uid===c.uid){this._currentUser._assign(c),await this.currentUser.getIdToken();return}await this._updateCurrentUser(c,!0)}}async initializeCurrentUser(c){var a;const r=await this.assertedPersistence.getCurrentUser();let t=r,n=!1;if(c&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,o=t==null?void 0:t._redirectEventId,f=await this.tryRedirectSignIn(c);(!i||i===o)&&(f!=null&&f.user)&&(t=f.user,n=!0)}if(!t)return this.directlySetCurrentUser(null);if(!t._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(t)}catch(i){t=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return t?this.reloadAndSetCurrentUserOrClear(t):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===t._redirectEventId?this.directlySetCurrentUser(t):this.reloadAndSetCurrentUserOrClear(t)}async tryRedirectSignIn(c){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,c,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(c){try{await Ne(c)}catch(a){if((a==null?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(c)}useDeviceLanguage(){this.languageCode=He2()}async _delete(){this._deleted=!0}async updateCurrentUser(c){const a=c?D4(c):null;return a&&K(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(c,a=!1){if(!this._deleted)return c&&K(this.tenantId===c.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(c),this.queue(async()=>{await this.directlySetCurrentUser(c),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(c){return this.queue(async()=>{await this.assertedPersistence.setPersistence(q1(c))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(c){this._errorFactory=new Z0("auth","Firebase",c())}onAuthStateChanged(c,a,r){return this.registerStateListener(this.authStateSubscription,c,a,r)}beforeAuthStateChanged(c,a){return this.beforeStateQueue.pushCallback(c,a)}onIdTokenChanged(c,a,r){return this.registerStateListener(this.idTokenSubscription,c,a,r)}toJSON(){var c;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(c=this._currentUser)===null||c===void 0?void 0:c.toJSON()}}async _setRedirectUser(c,a){const r=await this.getOrInitRedirectPersistenceManager(a);return c===null?r.removeCurrentUser():r.setCurrentUser(c)}async getOrInitRedirectPersistenceManager(c){if(!this.redirectPersistenceManager){const a=c&&q1(c)||this._popupRedirectResolver;K(a,this,"argument-error"),this.redirectPersistenceManager=await $3.create(this,[q1(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(c){var a,r;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===c?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===c?this.redirectUser:null}async _persistUserIfCurrent(c){if(c===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(c))}_notifyListenersIfCurrent(c){c===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var c,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(a=(c=this.currentUser)===null||c===void 0?void 0:c.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(c,a,r,t){if(this._deleted)return()=>{};const n=typeof a=="function"?a:a.next.bind(a),i=this._isInitialized?Promise.resolve():this._initializationPromise;return K(i,this,"internal-error"),i.then(()=>n(this.currentUser)),typeof a=="function"?c.addObserver(a,r,t):c.addObserver(a)}async directlySetCurrentUser(c){this.currentUser&&this.currentUser!==c&&this._currentUser._stopProactiveRefresh(),c&&this.isProactiveRefreshEnabled&&c._startProactiveRefresh(),this.currentUser=c,c?await this.assertedPersistence.setCurrentUser(c):await this.assertedPersistence.removeCurrentUser()}queue(c){return this.operations=this.operations.then(c,c),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(c){!c||this.frameworks.includes(c)||(this.frameworks.push(c),this.frameworks.sort(),this.clientVersion=kg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var c;const a={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const r=await((c=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||c===void 0?void 0:c.getHeartbeatsHeader());return r&&(a["X-Firebase-Client"]=r),a}}function f6(e){return D4(e)}class Ti{constructor(c){this.auth=c,this.observer=null,this.addObserver=c82(a=>this.observer=a)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Re2(e,c,a){const r=f6(e);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(c),r,"invalid-emulator-scheme");const t=!!(a!=null&&a.disableWarnings),n=Ng(c),{host:i,port:o}=De2(c),f=o===null?"":`:${o}`;r.config.emulator={url:`${n}//${i}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:i,port:o,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:t})}),t||Fe2()}function Ng(e){const c=e.indexOf(":");return c<0?"":e.substr(0,c+1)}function De2(e){const c=Ng(e),a=/(\/\/)?([^?#/]+)/.exec(e.substr(c.length));if(!a)return{host:"",port:null};const r=a[2].split("@").pop()||"",t=/^(\[[^\]]+\])(:|$)/.exec(r);if(t){const n=t[1];return{host:n,port:Ei(r.substr(n.length+1))}}else{const[n,i]=r.split(":");return{host:n,port:Ei(i)}}}function Ei(e){if(!e)return null;const c=Number(e);return isNaN(c)?null:c}function Fe2(){function e(){const c=document.createElement("p"),a=c.style;c.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",c.classList.add("firebase-emulator-warning"),document.body.appendChild(c)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(c,a){this.providerId=c,this.signInMethod=a}toJSON(){return W1("not implemented")}_getIdTokenResponse(c){return W1("not implemented")}_linkToIdToken(c,a){return W1("not implemented")}_getReauthenticationResolver(c){return W1("not implemented")}}async function Be2(e,c){return r8(e,"POST","/v1/accounts:update",c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe2(e,c){return t8(e,"POST","/v1/accounts:signInWithPassword",a8(e,c))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e2(e,c){return t8(e,"POST","/v1/accounts:signInWithEmailLink",a8(e,c))}async function Ue2(e,c){return t8(e,"POST","/v1/accounts:signInWithEmailLink",a8(e,c))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0 extends pt{constructor(c,a,r,t=null){super("password",r),this._email=c,this._password=a,this._tenantId=t}static _fromEmailAndPassword(c,a){return new y0(c,a,"password")}static _fromEmailAndCode(c,a,r=null){return new y0(c,a,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(c){const a=typeof c=="string"?JSON.parse(c):c;if(a!=null&&a.email&&(a!=null&&a.password)){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(c){switch(this.signInMethod){case"password":return Oe2(c,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return $e2(c,{email:this._email,oobCode:this._password});default:g1(c,"internal-error")}}async _linkToIdToken(c,a){switch(this.signInMethod){case"password":return Be2(c,{idToken:a,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ue2(c,{idToken:a,email:this._email,oobCode:this._password});default:g1(c,"internal-error")}}_getReauthenticationResolver(c){return this._getIdTokenResponse(c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U3(e,c){return t8(e,"POST","/v1/accounts:signInWithIdp",a8(e,c))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je2="http://localhost";class n3 extends pt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(c){const a=new n3(c.providerId,c.signInMethod);return c.idToken||c.accessToken?(c.idToken&&(a.idToken=c.idToken),c.accessToken&&(a.accessToken=c.accessToken),c.nonce&&!c.pendingToken&&(a.nonce=c.nonce),c.pendingToken&&(a.pendingToken=c.pendingToken)):c.oauthToken&&c.oauthTokenSecret?(a.accessToken=c.oauthToken,a.secret=c.oauthTokenSecret):g1("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(c){const a=typeof c=="string"?JSON.parse(c):c,{providerId:r,signInMethod:t}=a,n=ft(a,["providerId","signInMethod"]);if(!r||!t)return null;const i=new n3(r,t);return i.idToken=n.idToken||void 0,i.accessToken=n.accessToken||void 0,i.secret=n.secret,i.nonce=n.nonce,i.pendingToken=n.pendingToken||null,i}_getIdTokenResponse(c){const a=this.buildRequest();return U3(c,a)}_linkToIdToken(c,a){const r=this.buildRequest();return r.idToken=a,U3(c,r)}_getReauthenticationResolver(c){const a=this.buildRequest();return a.autoCreate=!1,U3(c,a)}buildRequest(){const c={requestUri:je2,returnSecureToken:!0};if(this.pendingToken)c.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),c.postBody=e8(a)}return c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We2(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qe2(e){const c=_6(I6(e)).link,a=c?_6(I6(c)).deep_link_id:null,r=_6(I6(e)).deep_link_id;return(r?_6(I6(r)).link:null)||r||a||c||e}class vt{constructor(c){var a,r,t,n,i,o;const f=_6(I6(c)),u=(a=f.apiKey)!==null&&a!==void 0?a:null,p=(r=f.oobCode)!==null&&r!==void 0?r:null,g=We2((t=f.mode)!==null&&t!==void 0?t:null);K(u&&p&&g,"argument-error"),this.apiKey=u,this.operation=g,this.code=p,this.continueUrl=(n=f.continueUrl)!==null&&n!==void 0?n:null,this.languageCode=(i=f.languageCode)!==null&&i!==void 0?i:null,this.tenantId=(o=f.tenantId)!==null&&o!==void 0?o:null}static parseLink(c){const a=qe2(c);try{return new vt(a)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u6{constructor(){this.providerId=u6.PROVIDER_ID}static credential(c,a){return y0._fromEmailAndPassword(c,a)}static credentialWithLink(c,a){const r=vt.parseLink(a);return K(r,"argument-error"),y0._fromEmailAndCode(c,r.code,r.tenantId)}}u6.PROVIDER_ID="password";u6.EMAIL_PASSWORD_SIGN_IN_METHOD="password";u6.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(c){this.providerId=c,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(c){this.defaultLanguageCode=c}setCustomParameters(c){return this.customParameters=c,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n8 extends zt{constructor(){super(...arguments),this.scopes=[]}addScope(c){return this.scopes.includes(c)||this.scopes.push(c),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4 extends n8{constructor(){super("facebook.com")}static credential(c){return n3._fromParams({providerId:o4.PROVIDER_ID,signInMethod:o4.FACEBOOK_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return o4.credentialFromTaggedObject(c)}static credentialFromError(c){return o4.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c)||!c.oauthAccessToken)return null;try{return o4.credential(c.oauthAccessToken)}catch{return null}}}o4.FACEBOOK_SIGN_IN_METHOD="facebook.com";o4.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1 extends n8{constructor(){super("google.com"),this.addScope("profile")}static credential(c,a){return n3._fromParams({providerId:B1.PROVIDER_ID,signInMethod:B1.GOOGLE_SIGN_IN_METHOD,idToken:c,accessToken:a})}static credentialFromResult(c){return B1.credentialFromTaggedObject(c)}static credentialFromError(c){return B1.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthIdToken:a,oauthAccessToken:r}=c;if(!a&&!r)return null;try{return B1.credential(a,r)}catch{return null}}}B1.GOOGLE_SIGN_IN_METHOD="google.com";B1.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l4 extends n8{constructor(){super("github.com")}static credential(c){return n3._fromParams({providerId:l4.PROVIDER_ID,signInMethod:l4.GITHUB_SIGN_IN_METHOD,accessToken:c})}static credentialFromResult(c){return l4.credentialFromTaggedObject(c)}static credentialFromError(c){return l4.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c||!("oauthAccessToken"in c)||!c.oauthAccessToken)return null;try{return l4.credential(c.oauthAccessToken)}catch{return null}}}l4.GITHUB_SIGN_IN_METHOD="github.com";l4.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4 extends n8{constructor(){super("twitter.com")}static credential(c,a){return n3._fromParams({providerId:f4.PROVIDER_ID,signInMethod:f4.TWITTER_SIGN_IN_METHOD,oauthToken:c,oauthTokenSecret:a})}static credentialFromResult(c){return f4.credentialFromTaggedObject(c)}static credentialFromError(c){return f4.credentialFromTaggedObject(c.customData||{})}static credentialFromTaggedObject({_tokenResponse:c}){if(!c)return null;const{oauthAccessToken:a,oauthTokenSecret:r}=c;if(!a||!r)return null;try{return f4.credential(a,r)}catch{return null}}}f4.TWITTER_SIGN_IN_METHOD="twitter.com";f4.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ge2(e,c){return t8(e,"POST","/v1/accounts:signUp",a8(e,c))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i3{constructor(c){this.user=c.user,this.providerId=c.providerId,this._tokenResponse=c._tokenResponse,this.operationType=c.operationType}static async _fromIdTokenResponse(c,a,r,t=!1){const n=await J4._fromIdTokenResponse(c,r,t),i=Pi(r);return new i3({user:n,providerId:i,_tokenResponse:r,operationType:a})}static async _forOperation(c,a,r){await c._updateTokensIfNecessary(r,!0);const t=Pi(r);return new i3({user:c,providerId:t,_tokenResponse:r,operationType:a})}}function Pi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends R4{constructor(c,a,r,t){var n;super(a.code,a.message),this.operationType=r,this.user=t,Object.setPrototypeOf(this,Ae.prototype),this.customData={appName:c.name,tenantId:(n=c.tenantId)!==null&&n!==void 0?n:void 0,_serverResponse:a.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(c,a,r,t){return new Ae(c,a,r,t)}}function Ag(e,c,a,r){return(c==="reauthenticate"?a._getReauthenticationResolver(e):a._getIdTokenResponse(e)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?Ae._fromErrorAndOperation(e,n,c,r):n})}async function Ke2(e,c,a=!1){const r=await L0(e,c._linkToIdToken(e.auth,await e.getIdToken()),a);return i3._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye2(e,c,a=!1){const{auth:r}=e,t="reauthenticate";try{const n=await L0(e,Ag(r,t,c,e),a);K(n.idToken,r,"internal-error");const i=mt(n.idToken);K(i,r,"internal-error");const{sub:o}=i;return K(e.uid===o,r,"user-mismatch"),i3._forOperation(e,t,n)}catch(n){throw(n==null?void 0:n.code)==="auth/user-not-found"&&g1(r,"user-mismatch"),n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(e,c,a=!1){const r="signIn",t=await Ag(e,r,c),n=await i3._fromIdTokenResponse(e,r,t);return a||await e._updateCurrentUser(n.user),n}async function Xe2(e,c){return Tg(f6(e),c)}async function bc2(e,c,a){const r=f6(e),t=await Ge2(r,{returnSecureToken:!0,email:c,password:a}),n=await i3._fromIdTokenResponse(r,"signIn",t);return await r._updateCurrentUser(n.user),n}function Sc2(e,c,a){return Xe2(D4(e),u6.credential(c,a))}function Qe2(e,c,a,r){return D4(e).onIdTokenChanged(c,a,r)}function Je2(e,c,a){return D4(e).beforeAuthStateChanged(c,a)}function Ze2(e,c,a,r){return D4(e).onAuthStateChanged(c,a,r)}const Te="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(c,a){this.storageRetriever=c,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(Te,"1"),this.storage.removeItem(Te),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(c,a){return this.storage.setItem(c,JSON.stringify(a)),Promise.resolve()}_get(c){const a=this.storage.getItem(c);return Promise.resolve(a?JSON.parse(a):null)}_remove(c){return this.storage.removeItem(c),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e52(){const e=e1();return ht(e)||A5(e)}const c52=1e3,a52=10;class Pg extends Eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(c,a)=>this.onStorageEvent(c,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e52()&&Pe2(),this.fallbackToPolling=Sg(),this._shouldAllowMigration=!0}forAllChangedKeys(c){for(const a of Object.keys(this.listeners)){const r=this.storage.getItem(a),t=this.localCache[a];r!==t&&c(a,t,r)}}onStorageEvent(c,a=!1){if(!c.key){this.forAllChangedKeys((i,o,f)=>{this.notifyListeners(i,f)});return}const r=c.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(r);if(c.newValue!==i)c.newValue!==null?this.storage.setItem(r,c.newValue):this.storage.removeItem(r);else if(this.localCache[r]===c.newValue&&!a)return}const t=()=>{const i=this.storage.getItem(r);!a&&this.localCache[r]===i||this.notifyListeners(r,i)},n=this.storage.getItem(r);Ee2()&&n!==c.newValue&&c.newValue!==c.oldValue?setTimeout(t,a52):t()}notifyListeners(c,a){this.localCache[c]=a;const r=this.listeners[c];if(r)for(const t of Array.from(r))t(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((c,a,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:c,oldValue:a,newValue:r}),!0)})},c52)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(c,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[c]||(this.listeners[c]=new Set,this.localCache[c]=this.storage.getItem(c)),this.listeners[c].add(a)}_removeListener(c,a){this.listeners[c]&&(this.listeners[c].delete(a),this.listeners[c].size===0&&delete this.listeners[c]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(c,a){await super._set(c,a),this.localCache[c]=JSON.stringify(a)}async _get(c){const a=await super._get(c);return this.localCache[c]=JSON.stringify(a),a}async _remove(c){await super._remove(c),delete this.localCache[c]}}Pg.type="LOCAL";const r52=Pg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g extends Eg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(c,a){}_removeListener(c,a){}}_g.type="SESSION";const Ig=_g;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t52(e){return Promise.all(e.map(async c=>{try{return{fulfilled:!0,value:await c}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T5{constructor(c){this.eventTarget=c,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(c){const a=this.receivers.find(t=>t.isListeningto(c));if(a)return a;const r=new T5(c);return this.receivers.push(r),r}isListeningto(c){return this.eventTarget===c}async handleEvent(c){const a=c,{eventId:r,eventType:t,data:n}=a.data,i=this.handlersMap[t];if(!(i!=null&&i.size))return;a.ports[0].postMessage({status:"ack",eventId:r,eventType:t});const o=Array.from(i).map(async u=>u(a.origin,n)),f=await t52(o);a.ports[0].postMessage({status:"done",eventId:r,eventType:t,response:f})}_subscribe(c,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[c]||(this.handlersMap[c]=new Set),this.handlersMap[c].add(a)}_unsubscribe(c,a){this.handlersMap[c]&&a&&this.handlersMap[c].delete(a),(!a||this.handlersMap[c].size===0)&&delete this.handlersMap[c],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}T5.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e="",c=10){let a="";for(let r=0;r<c;r++)a+=Math.floor(Math.random()*10);return e+a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n52{constructor(c){this.target=c,this.handlers=new Set}removeMessageHandler(c){c.messageChannel&&(c.messageChannel.port1.removeEventListener("message",c.onMessage),c.messageChannel.port1.close()),this.handlers.delete(c)}async _send(c,a,r=50){const t=typeof MessageChannel<"u"?new MessageChannel:null;if(!t)throw new Error("connection_unavailable");let n,i;return new Promise((o,f)=>{const u=Ht("",20);t.port1.start();const p=setTimeout(()=>{f(new Error("unsupported_event"))},r);i={messageChannel:t,onMessage(g){const H=g;if(H.data.eventId===u)switch(H.data.status){case"ack":clearTimeout(p),n=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),o(H.data.response);break;default:clearTimeout(p),clearTimeout(n),f(new Error("invalid_response"));break}}},this.handlers.add(i),t.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:c,eventId:u,data:a},[t.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(){return window}function i52(e){_1().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){return typeof _1().WorkerGlobalScope<"u"&&typeof _1().importScripts=="function"}async function s52(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function o52(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function l52(){return Rg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg="firebaseLocalStorageDb",f52=1,Ee="firebaseLocalStorage",Fg="fbase_key";class i8{constructor(c){this.request=c}toPromise(){return new Promise((c,a)=>{this.request.addEventListener("success",()=>{c(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function E5(e,c){return e.transaction([Ee],c?"readwrite":"readonly").objectStore(Ee)}function u52(){const e=indexedDB.deleteDatabase(Dg);return new i8(e).toPromise()}function j7(){const e=indexedDB.open(Dg,f52);return new Promise((c,a)=>{e.addEventListener("error",()=>{a(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ee,{keyPath:Fg})}catch(t){a(t)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ee)?c(r):(r.close(),await u52(),c(await j7()))})})}async function _i(e,c,a){const r=E5(e,!0).put({[Fg]:c,value:a});return new i8(r).toPromise()}async function d52(e,c){const a=E5(e,!1).get(c),r=await new i8(a).toPromise();return r===void 0?null:r.value}function Ii(e,c){const a=E5(e,!0).delete(c);return new i8(a).toPromise()}const m52=800,h52=3;class Bg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await j7(),this.db)}async _withRetries(c){let a=0;for(;;)try{const r=await this._openDb();return await c(r)}catch(r){if(a++>h52)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=T5._getInstance(l52()),this.receiver._subscribe("keyChanged",async(c,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(c,a)=>["keyChanged"])}async initializeSender(){var c,a;if(this.activeServiceWorker=await s52(),!this.activeServiceWorker)return;this.sender=new n52(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((c=r[0])===null||c===void 0)&&c.fulfilled&&!((a=r[0])===null||a===void 0)&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(c){if(!(!this.sender||!this.activeServiceWorker||o52()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:c},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const c=await j7();return await _i(c,Te,"1"),await Ii(c,Te),!0}catch{}return!1}async _withPendingWrite(c){this.pendingWrites++;try{await c()}finally{this.pendingWrites--}}async _set(c,a){return this._withPendingWrite(async()=>(await this._withRetries(r=>_i(r,c,a)),this.localCache[c]=a,this.notifyServiceWorker(c)))}async _get(c){const a=await this._withRetries(r=>d52(r,c));return this.localCache[c]=a,a}async _remove(c){return this._withPendingWrite(async()=>(await this._withRetries(a=>Ii(a,c)),delete this.localCache[c],this.notifyServiceWorker(c)))}async _poll(){const c=await this._withRetries(t=>{const n=E5(t,!1).getAll();return new i8(n).toPromise()});if(!c)return[];if(this.pendingWrites!==0)return[];const a=[],r=new Set;for(const{fbase_key:t,value:n}of c)r.add(t),JSON.stringify(this.localCache[t])!==JSON.stringify(n)&&(this.notifyListeners(t,n),a.push(t));for(const t of Object.keys(this.localCache))this.localCache[t]&&!r.has(t)&&(this.notifyListeners(t,null),a.push(t));return a}notifyListeners(c,a){this.localCache[c]=a;const r=this.listeners[c];if(r)for(const t of Array.from(r))t(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m52)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(c,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[c]||(this.listeners[c]=new Set,this._get(c)),this.listeners[c].add(a)}_removeListener(c,a){this.listeners[c]&&(this.listeners[c].delete(a),this.listeners[c].size===0&&delete this.listeners[c]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bg.type="LOCAL";const p52=Bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v52(){var e,c;return(c=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&c!==void 0?c:document}function z52(e){return new Promise((c,a)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=c,r.onerror=t=>{const n=P1("internal-error");n.customData=t,a(n)},r.type="text/javascript",r.charset="UTF-8",v52().appendChild(r)})}function H52(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new c8(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(e,c){return c?q1(c):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends pt{constructor(c){super("custom","custom"),this.params=c}_getIdTokenResponse(c){return U3(c,this._buildIdpRequest())}_linkToIdToken(c,a){return U3(c,this._buildIdpRequest(a))}_getReauthenticationResolver(c){return U3(c,this._buildIdpRequest())}_buildIdpRequest(c){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return c&&(a.idToken=c),a}}function g52(e){return Tg(e.auth,new gt(e),e.bypassAuthState)}function V52(e){const{auth:c,user:a}=e;return K(a,c,"internal-error"),Ye2(a,new gt(e),e.bypassAuthState)}async function C52(e){const{auth:c,user:a}=e;return K(a,c,"internal-error"),Ke2(a,new gt(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(c,a,r,t,n=!1){this.auth=c,this.resolver=r,this.user=t,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(c,a)=>{this.pendingPromise={resolve:c,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(c){const{urlResponse:a,sessionId:r,postBody:t,tenantId:n,error:i,type:o}=c;if(i){this.reject(i);return}const f={auth:this.auth,requestUri:a,sessionId:r,tenantId:n||void 0,postBody:t||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(f))}catch(u){this.reject(u)}}onError(c){this.reject(c)}getIdpTask(c){switch(c){case"signInViaPopup":case"signInViaRedirect":return g52;case"linkViaPopup":case"linkViaRedirect":return C52;case"reauthViaPopup":case"reauthViaRedirect":return V52;default:g1(this.auth,"internal-error")}}resolve(c){J1(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(c),this.unregisterAndCleanUp()}reject(c){J1(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(c),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M52=new c8(2e3,1e4);async function kc2(e,c,a){const r=f6(e);me2(e,c,zt);const t=Og(r,a);return new X4(r,"signInViaPopup",c,t).executeNotNull()}class X4 extends $g{constructor(c,a,r,t,n){super(c,a,t,n),this.provider=r,this.authWindow=null,this.pollId=null,X4.currentPopupAction&&X4.currentPopupAction.cancel(),X4.currentPopupAction=this}async executeNotNull(){const c=await this.execute();return K(c,this.auth,"internal-error"),c}async onExecution(){J1(this.filter.length===1,"Popup operations only handle one event");const c=Ht();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],c),this.authWindow.associatedEvent=c,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(P1(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var c;return((c=this.authWindow)===null||c===void 0?void 0:c.associatedEvent)||null}cancel(){this.reject(P1(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,X4.currentPopupAction=null}pollUserCancellation(){const c=()=>{var a,r;if(!((r=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(P1(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(c,M52.get())};c()}}X4.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L52="pendingRedirect",Q8=new Map;class w52 extends $g{constructor(c,a,r=!1){super(c,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,r),this.eventId=null}async execute(){let c=Q8.get(this.auth._key());if(!c){try{const r=await y52(this.resolver,this.auth)?await super.execute():null;c=()=>Promise.resolve(r)}catch(a){c=()=>Promise.reject(a)}Q8.set(this.auth._key(),c)}return this.bypassAuthState||Q8.set(this.auth._key(),()=>Promise.resolve(null)),c()}async onAuthEvent(c){if(c.type==="signInViaRedirect")return super.onAuthEvent(c);if(c.type==="unknown"){this.resolve(null);return}if(c.eventId){const a=await this.auth._redirectUserForId(c.eventId);if(a)return this.user=a,super.onAuthEvent(c);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function y52(e,c){const a=S52(c),r=b52(e);if(!await r._isAvailable())return!1;const t=await r._get(a)==="true";return await r._remove(a),t}function x52(e,c){Q8.set(e._key(),c)}function b52(e){return q1(e._redirectPersistence)}function S52(e){return X8(L52,e.config.apiKey,e.name)}async function k52(e,c,a=!1){const r=f6(e),t=Og(r,c),i=await new w52(r,t,a).execute();return i&&!a&&(delete i.user._redirectEventId,await r._persistUserIfCurrent(i.user),await r._setRedirectUser(null,c)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N52=10*60*1e3;class A52{constructor(c){this.auth=c,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(c){this.consumers.add(c),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,c)&&(this.sendToConsumer(this.queuedRedirectEvent,c),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(c){this.consumers.delete(c)}onEvent(c){if(this.hasEventBeenHandled(c))return!1;let a=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(c,r)&&(a=!0,this.sendToConsumer(c,r),this.saveEventToCache(c))}),this.hasHandledPotentialRedirect||!T52(c)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=c,a=!0)),a}sendToConsumer(c,a){var r;if(c.error&&!Ug(c)){const t=((r=c.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";a.onError(P1(this.auth,t))}else a.onAuthEvent(c)}isEventForConsumer(c,a){const r=a.eventId===null||!!c.eventId&&c.eventId===a.eventId;return a.filter.includes(c.type)&&r}hasEventBeenHandled(c){return Date.now()-this.lastProcessedEventTime>=N52&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ri(c))}saveEventToCache(c){this.cachedEventUids.add(Ri(c)),this.lastProcessedEventTime=Date.now()}}function Ri(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(c=>c).join("-")}function Ug({type:e,error:c}){return e==="unknown"&&(c==null?void 0:c.code)==="auth/no-auth-event"}function T52(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ug(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E52(e,c={}){return r8(e,"GET","/v1/projects",c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P52=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_52=/^https?/;async function I52(e){if(e.config.emulator)return;const{authorizedDomains:c}=await E52(e);for(const a of c)try{if(R52(a))return}catch{}g1(e,"unauthorized-domain")}function R52(e){const c=U7(),{protocol:a,hostname:r}=new URL(c);if(e.startsWith("chrome-extension://")){const i=new URL(e);return i.hostname===""&&r===""?a==="chrome-extension:"&&e.replace("chrome-extension://","")===c.replace("chrome-extension://",""):a==="chrome-extension:"&&i.hostname===r}if(!_52.test(a))return!1;if(P52.test(e))return r===e;const t=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+t+"|"+t+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D52=new c8(3e4,6e4);function Di(){const e=_1().___jsl;if(e!=null&&e.H){for(const c of Object.keys(e.H))if(e.H[c].r=e.H[c].r||[],e.H[c].L=e.H[c].L||[],e.H[c].r=[...e.H[c].L],e.CP)for(let a=0;a<e.CP.length;a++)e.CP[a]=null}}function F52(e){return new Promise((c,a)=>{var r,t,n;function i(){Di(),gapi.load("gapi.iframes",{callback:()=>{c(gapi.iframes.getContext())},ontimeout:()=>{Di(),a(P1(e,"network-request-failed"))},timeout:D52.get()})}if(!((t=(r=_1().gapi)===null||r===void 0?void 0:r.iframes)===null||t===void 0)&&t.Iframe)c(gapi.iframes.getContext());else if(!((n=_1().gapi)===null||n===void 0)&&n.load)i();else{const o=H52("iframefcb");return _1()[o]=()=>{gapi.load?i():a(P1(e,"network-request-failed"))},z52(`https://apis.google.com/js/api.js?onload=${o}`).catch(f=>a(f))}}).catch(c=>{throw J8=null,c})}let J8=null;function B52(e){return J8=J8||F52(e),J8}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O52=new c8(5e3,15e3),$52="__/auth/iframe",U52="emulator/auth/iframe",j52={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W52=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function q52(e){const c=e.config;K(c.authDomain,e,"auth-domain-config-required");const a=c.emulator?dt(c,U52):`https://${e.config.authDomain}/${$52}`,r={apiKey:c.apiKey,appName:e.name,v:N5},t=W52.get(e.config.apiHost);t&&(r.eid=t);const n=e._getFrameworks();return n.length&&(r.fw=n.join(",")),`${a}?${e8(r).slice(1)}`}async function G52(e){const c=await B52(e),a=_1().gapi;return K(a,e,"internal-error"),c.open({where:document.body,url:q52(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j52,dontclear:!0},r=>new Promise(async(t,n)=>{await r.restyle({setHideOnLeave:!1});const i=P1(e,"network-request-failed"),o=_1().setTimeout(()=>{n(i)},O52.get());function f(){_1().clearTimeout(o),t(r)}r.ping(f).then(f,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K52={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y52=500,X52=600,Q52="_blank",J52="http://localhost";class Fi{constructor(c){this.window=c,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z52(e,c,a,r=Y52,t=X52){const n=Math.max((window.screen.availHeight-t)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const f=Object.assign(Object.assign({},K52),{width:r.toString(),height:t.toString(),top:n,left:i}),u=e1().toLowerCase();a&&(o=Lg(u)?Q52:a),Mg(u)&&(c=c||J52,f.scrollbars="yes");const p=Object.entries(f).reduce((H,[M,y])=>`${H}${M}=${y},`,"");if(Te2(u)&&o!=="_self")return ec2(c||"",o),new Fi(null);const g=window.open(c||"",o,p);K(g,e,"popup-blocked");try{g.focus()}catch{}return new Fi(g)}function ec2(e,c){const a=document.createElement("a");a.href=e,a.target=c;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc2="__/auth/handler",ac2="emulator/auth/handler";function Bi(e,c,a,r,t,n){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const i={apiKey:e.config.apiKey,appName:e.name,authType:a,redirectUrl:r,v:N5,eventId:t};if(c instanceof zt){c.setDefaultLanguage(e.languageCode),i.providerId=c.providerId||"",e82(c.getCustomParameters())||(i.customParameters=JSON.stringify(c.getCustomParameters()));for(const[f,u]of Object.entries(n||{}))i[f]=u}if(c instanceof n8){const f=c.getScopes().filter(u=>u!=="");f.length>0&&(i.scopes=f.join(","))}e.tenantId&&(i.tid=e.tenantId);const o=i;for(const f of Object.keys(o))o[f]===void 0&&delete o[f];return`${rc2(e)}?${e8(o).slice(1)}`}function rc2({config:e}){return e.emulator?dt(e,ac2):`https://${e.authDomain}/${cc2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class tc2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ig,this._completeRedirectFn=k52,this._overrideRedirectResult=x52}async _openPopup(c,a,r,t){var n;J1((n=this.eventManagers[c._key()])===null||n===void 0?void 0:n.manager,"_initialize() not called before _openPopup()");const i=Bi(c,a,r,U7(),t);return Z52(c,i,Ht())}async _openRedirect(c,a,r,t){return await this._originValidation(c),i52(Bi(c,a,r,U7(),t)),new Promise(()=>{})}_initialize(c){const a=c._key();if(this.eventManagers[a]){const{manager:t,promise:n}=this.eventManagers[a];return t?Promise.resolve(t):(J1(n,"If manager is not set, promise should be"),n)}const r=this.initAndGetManager(c);return this.eventManagers[a]={promise:r},r.catch(()=>{delete this.eventManagers[a]}),r}async initAndGetManager(c){const a=await G52(c),r=new A52(c);return a.register("authEvent",t=>(K(t==null?void 0:t.authEvent,c,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[c._key()]={manager:r},this.iframes[c._key()]=a,r}_isIframeWebStorageSupported(c,a){this.iframes[c._key()].send(Nc,{type:Nc},t=>{var n;const i=(n=t==null?void 0:t[0])===null||n===void 0?void 0:n[Nc];i!==void 0&&a(!!i),g1(c,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(c){const a=c._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=I52(c)),this.originValidationPromises[a]}get _shouldInitProactively(){return Sg()||ht()||A5()}}const nc2=tc2;var Oi="@firebase/auth",$i="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic2{constructor(c){this.auth=c,this.internalListeners=new Map}getUid(){var c;return this.assertAuthConfigured(),((c=this.auth.currentUser)===null||c===void 0?void 0:c.uid)||null}async getToken(c){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(c)}:null}addAuthTokenListener(c){if(this.assertAuthConfigured(),this.internalListeners.has(c))return;const a=this.auth.onIdTokenChanged(r=>{c((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(c,a),this.updateProactiveRefresh()}removeAuthTokenListener(c){this.assertAuthConfigured();const a=this.internalListeners.get(c);a&&(this.internalListeners.delete(c),a(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oc2(e){C0(new Q3("auth",(c,{options:a})=>{const r=c.getProvider("app").getImmediate(),t=c.getProvider("heartbeat"),{apiKey:n,authDomain:i}=r.options;return((o,f)=>{K(n&&!n.includes(":"),"invalid-api-key",{appName:o.name}),K(!(i!=null&&i.includes(":")),"argument-error",{appName:o.name});const u={apiKey:n,authDomain:i,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kg(e)},p=new Ie2(o,f,u);return pe2(p,a),p})(r,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((c,a,r)=>{c.getProvider("auth-internal").initialize()})),C0(new Q3("auth-internal",c=>{const a=f6(c.getProvider("auth").getImmediate());return(r=>new ic2(r))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),O3(Oi,$i,sc2(e)),O3(Oi,$i,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc2=5*60,fc2=ig("authIdTokenMaxAge")||lc2;let Ui=null;const uc2=e=>async c=>{const a=c&&await c.getIdTokenResult(),r=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(r&&r>fc2)return;const t=a==null?void 0:a.token;Ui!==t&&(Ui=t,await fetch(e,{method:t?"POST":"DELETE",headers:t?{Authorization:`Bearer ${t}`}:{}}))};function dc2(e=ee2()){const c=fg(e,"auth");if(c.isInitialized())return c.getImmediate();const a=he2(e,{popupRedirectResolver:nc2,persistence:[p52,r52,Ig]}),r=ig("authTokenSyncURL");if(r){const n=uc2(r);Je2(a,n,()=>n(a.currentUser)),Qe2(a,i=>n(i))}const t=$02("auth");return t&&Re2(a,`http://${t}`),a}oc2("Browser");const mc2={apiKey:"AIzaSyAGeuaW9c75HM1dyHf_q1ZXkmxwm6NT1wk",authDomain:"taipei-parking-v2-389902.firebaseapp.com",projectId:"taipei-parking-v2-389902",storageBucket:"taipei-parking-v2-389902.appspot.com",messagingSenderId:"929229085215",appId:"1:929229085215:web:407f206255bc40ae4bd32a",measurementId:"G-61PC8D8VEE"},hc2=ug(mc2),pc2=dc2(hc2),Nc2=new B1;JS.add(w42,P02);const vc2=_.lazy(()=>Ke(()=>import("./index-005a565c.js"),["assets/index-005a565c.js","assets/index.es-1f669396.js","assets/index-874c6c45.css"])),zc2=_.lazy(()=>Ke(()=>import("./index-8a95ef91.js"),["assets/index-8a95ef91.js","assets/index.es-1f669396.js"])),Hc2=_.lazy(()=>Ke(()=>import("./index-6468e8d8.js"),["assets/index-6468e8d8.js","assets/Form-cba49e1f.js"])),gc2=_.lazy(()=>Ke(()=>import("./index-89e0dbe5.js"),["assets/index-89e0dbe5.js","assets/Form-cba49e1f.js"])),Vc2=w2.div`
  margin: 0 auto;
  padding: 11.5vh 1% 4vh;
  background: ${e=>e.$color.background_main};
`;function Cc2(){const{theme:e}=_.useContext(j0),[c,a]=_.useState(),[r,t]=_.useState(!1);_.useEffect(()=>{const i=qx();i&&(t(!0),Ze2(pc2,o=>{o.uid===i&&a(o.uid),t(!1)}))},[]);const n={background:e.background_main,color:e.font_main};return j.jsx("div",{className:"App",style:n,children:j.jsx(wl.Provider,{value:{user:c,setUser:a},children:j.jsxs(Px,{children:[j.jsx(xl,{isLoading:r}),j.jsx(Vc2,{$color:e,children:j.jsx(_.Suspense,{fallback:j.jsx("h1",{children:"loading..."}),children:j.jsxs(kx,{children:[j.jsx(E6,{path:"/",element:j.jsx(vc2,{})}),j.jsx(E6,{path:"/save",element:j.jsx(Nl,{user:c,children:j.jsx(zc2,{})})}),j.jsx(E6,{path:"/login",element:j.jsx(Hc2,{})}),j.jsx(E6,{path:"/signup",element:j.jsx(gc2,{})})]})})}),j.jsx(gb,{})]})})})}Cw.render(j.jsx(e6.StrictMode,{children:j.jsx(kl,{children:j.jsx(Ml,{children:j.jsx(Cc2,{})})})}),document.getElementById("root"));export{wl as A,pl as L,R1 as M,j1 as P,e6 as R,j0 as T,Vw as a,Yx as b,wc2 as c,yl as d,Sl as e,Mc2 as f,x0 as g,r4 as h,xc2 as i,j,Sc2 as k,pc2 as l,Kx as m,Wx as n,bc2 as o,yc2 as p,o6 as q,_ as r,w2 as s,kc2 as t,ml as u,Nc2 as v,Lc2 as w};