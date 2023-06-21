/**
 * @remix-run/router v1.3.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const W="popstate";function oe(e){e===void 0&&(e={});function t(r,i){let{pathname:l="/",search:s="",hash:o=""}=x(r.location.hash.substr(1));return $("",{pathname:l,search:s,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){let l=r.document.querySelector("base"),s="";if(l&&l.getAttribute("href")){let o=r.location.href,c=o.indexOf("#");s=c===-1?o:o.slice(0,c)}return s+"#"+(typeof i=="string"?i:j(i))}function a(r,i){A(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return V(t,n,a,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function A(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function M(){return Math.random().toString(36).substr(2,8)}function L(e,t){return{usr:e.state,key:e.key,idx:t}}function $(e,t,n,a){return n===void 0&&(n=null),w({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?x(t):t,{state:n,key:t&&t.key||a||M()})}function j(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function x(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function V(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:i=!1}=a,l=r.history,s=y.Pop,o=null,c=u();c==null&&(c=0,l.replaceState(w({},l.state,{idx:c}),""));function u(){return(l.state||{idx:null}).idx}function d(){s=y.Pop;let h=u(),f=h==null?null:h-c;c=h,o&&o({action:s,location:m.location,delta:f})}function g(h,f){s=y.Push;let p=$(m.location,h,f);n&&n(p,h),c=u()+1;let R=L(p,c),S=m.createHref(p);try{l.pushState(R,"",S)}catch{r.location.assign(S)}i&&o&&o({action:s,location:m.location,delta:1})}function T(h,f){s=y.Replace;let p=$(m.location,h,f);n&&n(p,h),c=u();let R=L(p,c),S=m.createHref(p);l.replaceState(R,"",S),i&&o&&o({action:s,location:m.location,delta:0})}function I(h){let f=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof h=="string"?h:j(h);return v(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let m={get action(){return s},get location(){return e(r,l)},listen(h){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(W,d),o=h,()=>{r.removeEventListener(W,d),o=null}},createHref(h){return t(r,h)},createURL:I,encodeLocation(h){let f=I(h);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:T,go(h){return l.go(h)}};return m}var O;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(O||(O={}));function ce(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?x(t):t,r=ee(a.pathname||"/",n);if(r==null)return null;let i=H(e);k(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=F(i[s],Y(r));return l}function H(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(i,l,s)=>{let o={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(a.length));let c=P([a,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(v(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),H(i.children,t,u,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:G(c,i.index),routesMeta:u})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,l);else for(let o of C(i.path))r(i,l,o)}),t}function C(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return r?[i,""]:[i];let l=C(a.join("/")),s=[];return s.push(...l.map(o=>o===""?i:[i,o].join("/"))),r&&s.push(...l),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function k(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const q=/^:\w+$/,z=3,N=2,_=1,D=10,J=-2,U=e=>e==="*";function G(e,t){let n=e.split("/"),a=n.length;return n.some(U)&&(a+=J),t&&(a+=N),n.filter(r=>!U(r)).reduce((r,i)=>r+(q.test(i)?z:i===""?_:D),a)}function K(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function F(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],o=l===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",u=Q({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},c);if(!u)return null;Object.assign(a,u.params);let d=s.route;i.push({params:a,pathname:P([r,u.pathname]),pathnameBase:re(P([r,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(r=P([r,u.pathnameBase]))}return i}function Q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=X(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:a.reduce((c,u,d)=>{if(u==="*"){let g=s[d]||"";l=i.slice(0,i.length-g.length).replace(/(.)\/+$/,"$1")}return c[u]=Z(s[d]||"",u),c},{}),pathname:i,pathnameBase:l,pattern:e}}function X(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),E(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(a.push(s),"/([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function Y(e){try{return decodeURI(e)}catch(t){return E(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z(e,t){try{return decodeURIComponent(e)}catch(n){return E(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ee(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function E(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function te(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?x(e):e;return{pathname:n?n.startsWith("/")?n:ne(n,t):t,search:ae(a),hash:ie(r)}}function ne(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function b(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function he(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ue(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=x(e):(r=w({},e),v(!r.pathname||!r.pathname.includes("?"),b("?","pathname","search",r)),v(!r.pathname||!r.pathname.includes("#"),b("#","pathname","hash",r)),v(!r.search||!r.search.includes("#"),b("#","search","hash",r)));let i=e===""||r.pathname==="",l=i?"/":r.pathname,s;if(a||l==null)s=n;else{let d=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;r.pathname=g.join("/")}s=d>=0?t[d]:"/"}let o=te(r,s),c=l&&l!=="/"&&l.endsWith("/"),u=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||u)&&(o.pathname+="/"),o}const P=e=>e.join("/").replace(/\/\/+/g,"/"),re=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ae=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function fe(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const B=["post","put","patch","delete"];new Set(B);const le=["get",...B];new Set(le);export{y as A,fe as a,j as b,oe as c,he as g,v as i,P as j,ce as m,x as p,ue as r,ee as s};
