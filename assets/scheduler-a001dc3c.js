var H={exports:{}},J={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(l){var d,w,k,M;if(typeof performance=="object"&&typeof performance.now=="function"){var K=performance;l.unstable_now=function(){return K.now()}}else{var q=Date,O=q.now();l.unstable_now=function(){return q.now()-O}}if(typeof window>"u"||typeof MessageChannel!="function"){var m=null,N=null,Y=function(){if(m!==null)try{var n=l.unstable_now();m(!0,n),m=null}catch(e){throw setTimeout(Y,0),e}};d=function(n){m!==null?setTimeout(d,0,n):(m=n,setTimeout(Y,0))},w=function(n,e){N=setTimeout(n,e)},k=function(){clearTimeout(N)},l.unstable_shouldYield=function(){return!1},M=l.unstable_forceFrameRate=function(){}}else{var Q=window.setTimeout,S=window.clearTimeout;if(typeof console<"u"){var V=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof V!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var p=!1,g=null,F=-1,U=5,W=0;l.unstable_shouldYield=function(){return l.unstable_now()>=W},M=function(){},l.unstable_forceFrameRate=function(n){0>n||125<n?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<n?Math.floor(1e3/n):5};var A=new MessageChannel,C=A.port2;A.port1.onmessage=function(){if(g!==null){var n=l.unstable_now();W=n+U;try{g(!0,n)?C.postMessage(null):(p=!1,g=null)}catch(e){throw C.postMessage(null),e}}else p=!1},d=function(n){g=n,p||(p=!0,C.postMessage(null))},w=function(n,e){F=Q(function(){n(l.unstable_now())},e)},k=function(){S(F),F=-1}}function E(n,e){var t=n.length;n.push(e);n:for(;;){var r=t-1>>>1,i=n[r];if(i!==void 0&&0<P(i,e))n[r]=e,n[t]=i,t=r;else break n}}function a(n){return n=n[0],n===void 0?null:n}function T(n){var e=n[0];if(e!==void 0){var t=n.pop();if(t!==e){n[0]=t;n:for(var r=0,i=n.length;r<i;){var b=2*(r+1)-1,v=n[b],_=b+1,y=n[_];if(v!==void 0&&0>P(v,t))y!==void 0&&0>P(y,v)?(n[r]=y,n[_]=t,r=_):(n[r]=v,n[b]=t,r=b);else if(y!==void 0&&0>P(y,t))n[r]=y,n[_]=t,r=_;else break n}}return e}return null}function P(n,e){var t=n.sortIndex-e.sortIndex;return t!==0?t:n.id-e.id}var s=[],c=[],z=1,u=null,o=3,I=!1,f=!1,h=!1;function L(n){for(var e=a(c);e!==null;){if(e.callback===null)T(c);else if(e.startTime<=n)T(c),e.sortIndex=e.expirationTime,E(s,e);else break;e=a(c)}}function j(n){if(h=!1,L(n),!f)if(a(s)!==null)f=!0,d(R);else{var e=a(c);e!==null&&w(j,e.startTime-n)}}function R(n,e){f=!1,h&&(h=!1,k()),I=!0;var t=o;try{for(L(e),u=a(s);u!==null&&(!(u.expirationTime>e)||n&&!l.unstable_shouldYield());){var r=u.callback;if(typeof r=="function"){u.callback=null,o=u.priorityLevel;var i=r(u.expirationTime<=e);e=l.unstable_now(),typeof i=="function"?u.callback=i:u===a(s)&&T(s),L(e)}else T(s);u=a(s)}if(u!==null)var b=!0;else{var v=a(c);v!==null&&w(j,v.startTime-e),b=!1}return b}finally{u=null,o=t,I=!1}}var D=M;l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(n){n.callback=null},l.unstable_continueExecution=function(){f||I||(f=!0,d(R))},l.unstable_getCurrentPriorityLevel=function(){return o},l.unstable_getFirstCallbackNode=function(){return a(s)},l.unstable_next=function(n){switch(o){case 1:case 2:case 3:var e=3;break;default:e=o}var t=o;o=e;try{return n()}finally{o=t}},l.unstable_pauseExecution=function(){},l.unstable_requestPaint=D,l.unstable_runWithPriority=function(n,e){switch(n){case 1:case 2:case 3:case 4:case 5:break;default:n=3}var t=o;o=n;try{return e()}finally{o=t}},l.unstable_scheduleCallback=function(n,e,t){var r=l.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?r+t:r):t=r,n){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=t+i,n={id:z++,callback:e,priorityLevel:n,startTime:t,expirationTime:i,sortIndex:-1},t>r?(n.sortIndex=t,E(c,n),a(s)===null&&n===a(c)&&(h?k():h=!0,w(j,t-r))):(n.sortIndex=i,E(s,n),f||I||(f=!0,d(R))),n},l.unstable_wrapCallback=function(n){var e=o;return function(){var t=o;o=e;try{return n.apply(this,arguments)}finally{o=t}}}})(J);H.exports=J;var X=H.exports;export{X as s};
