import{P as V}from"./prop-types-45996e4d.js";import{R as r3}from"./react-a6e30971.js";function A4(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function m(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?A4(Object(e),!0).forEach(function(r){x(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):A4(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function S2(c){"@babel/helpers - typeof";return S2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},S2(c)}function Pe(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function y4(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function Te(c,a,e){return a&&y4(c.prototype,a),e&&y4(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function x(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function p1(c,a){return Be(c)||Re(c,a)||s3(c,a)||Ue()}function l2(c){return Fe(c)||De(c)||s3(c)||Ee()}function Fe(c){if(Array.isArray(c))return i1(c)}function Be(c){if(Array.isArray(c))return c}function De(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function Re(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,f,n;try{for(e=e.call(c);!(s=(f=e.next()).done)&&(r.push(f.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,n=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw n}}return r}}function s3(c,a){if(c){if(typeof c=="string")return i1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i1(c,a)}}function i1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function Ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ue(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P4=function(){},u1={},i3={},f3=null,n3={mark:P4,measure:P4};try{typeof window<"u"&&(u1=window),typeof document<"u"&&(i3=document),typeof MutationObserver<"u"&&(f3=MutationObserver),typeof performance<"u"&&(n3=performance)}catch{}var qe=u1.navigator||{},T4=qe.userAgent,F4=T4===void 0?"":T4,U=u1,C=i3,B4=f3,M2=n3;U.document;var B=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",l3=~F4.indexOf("MSIE")||~F4.indexOf("Trident/"),h2,C2,p2,u2,L2,P="___FONT_AWESOME___",f1=16,o3="fa",t3="svg-inline--fa",_="data-fa-i2svg",n1="data-fa-pseudo-element",$e="data-fa-pseudo-element-pending",L1="data-prefix",d1="data-icon",D4="fontawesome-i2svg",Oe="async",Ge=["HTML","HEAD","STYLE","SCRIPT"],m3=function(){try{return!0}catch{return!1}}(),h="classic",p="sharp",g1=[h,p];function o2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[h]}})}var r2=o2((h2={},x(h2,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),x(h2,p,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),h2)),s2=o2((C2={},x(C2,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(C2,p,{solid:"fass",regular:"fasr"}),C2)),i2=o2((p2={},x(p2,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(p2,p,{fass:"fa-solid",fasr:"fa-regular"}),p2)),We=o2((u2={},x(u2,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(u2,p,{"fa-solid":"fass","fa-regular":"fasr"}),u2)),Ie=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,H3="fa-layers-text",_e=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,je=o2((L2={},x(L2,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(L2,p,{900:"fass",400:"fasr"}),L2)),z3=[1,2,3,4,5,6,7,8,9,10],Xe=z3.concat([11,12,13,14,15,16,17,18,19,20]),Ye=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],W={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},f2=new Set;Object.keys(s2[h]).map(f2.add.bind(f2));Object.keys(s2[p]).map(f2.add.bind(f2));var Ke=[].concat(g1,l2(f2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",W.GROUP,W.SWAP_OPACITY,W.PRIMARY,W.SECONDARY]).concat(z3.map(function(c){return"".concat(c,"x")})).concat(Xe.map(function(c){return"w-".concat(c)})),a2=U.FontAwesomeConfig||{};function Qe(c){var a=C.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Je(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(C&&typeof C.querySelector=="function"){var Ze=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ze.forEach(function(c){var a=p1(c,2),e=a[0],r=a[1],s=Je(Qe(e));s!=null&&(a2[r]=s)})}var v3={styleDefault:"solid",familyDefault:"classic",cssPrefix:o3,replacementClass:t3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a2.familyPrefix&&(a2.cssPrefix=a2.familyPrefix);var J=m(m({},v3),a2);J.autoReplaceSvg||(J.observeMutations=!1);var z={};Object.keys(v3).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){J[c]=e,e2.forEach(function(r){return r(z)})},get:function(){return J[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){J.cssPrefix=a,e2.forEach(function(e){return e(z)})},get:function(){return J.cssPrefix}});U.FontAwesomeConfig=z;var e2=[];function cr(c){return e2.push(c),function(){e2.splice(e2.indexOf(c),1)}}var R=f1,y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ar(c){if(!(!c||!B)){var a=C.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=C.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=i)}return C.head.insertBefore(a,r),c}}var er="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n2(){for(var c=12,a="";c-- >0;)a+=er[Math.random()*62|0];return a}function Z(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function x1(c){return c.classList?Z(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function V3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rr(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(V3(c[e]),'" ')},"").trim()}function y2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function N1(c){return c.size!==y.size||c.x!==y.x||c.y!==y.y||c.rotate!==y.rotate||c.flipX||c.flipY}function sr(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(f," ").concat(n)},t={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:t}}function ir(c){var a=c.transform,e=c.width,r=e===void 0?f1:e,s=c.height,i=s===void 0?f1:s,f=c.startCentered,n=f===void 0?!1:f,l="";return n&&l3?l+="translate(".concat(a.x/R-r/2,"em, ").concat(a.y/R-i/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/R,"em), calc(-50% + ").concat(a.y/R,"em)) "):l+="translate(".concat(a.x/R,"em, ").concat(a.y/R,"em) "),l+="scale(".concat(a.size/R*(a.flipX?-1:1),", ").concat(a.size/R*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var fr=`:root, :host {
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
}`;function M3(){var c=o3,a=t3,e=z.cssPrefix,r=z.replacementClass,s=fr;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(n,".".concat(r))}return s}var R4=!1;function c1(){z.autoAddCss&&!R4&&(ar(M3()),R4=!0)}var nr={mixout:function(){return{dom:{css:M3,insertCss:c1}}},hooks:function(){return{beforeDOMElementCreation:function(){c1()},beforeI2svg:function(){c1()}}}},T=U||{};T[P]||(T[P]={});T[P].styles||(T[P].styles={});T[P].hooks||(T[P].hooks={});T[P].shims||(T[P].shims=[]);var A=T[P],h3=[],lr=function c(){C.removeEventListener("DOMContentLoaded",c),k2=1,h3.map(function(a){return a()})},k2=!1;B&&(k2=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),k2||C.addEventListener("DOMContentLoaded",lr));function or(c){B&&(k2?setTimeout(c,0):h3.push(c))}function t2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?V3(c):"<".concat(a," ").concat(rr(r),">").concat(i.map(t2).join(""),"</").concat(a,">")}function E4(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var tr=function(a,e){return function(r,s,i,f){return a.call(e,r,s,i,f)}},a1=function(a,e,r,s){var i=Object.keys(a),f=i.length,n=s!==void 0?tr(e,s):e,l,t,o;for(r===void 0?(l=1,o=a[i[0]]):(l=0,o=r);l<f;l++)t=i[l],o=n(o,a[t],t,a);return o};function mr(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function l1(c){var a=mr(c);return a.length===1?a[0].toString(16):null}function Hr(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function U4(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function o1(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=U4(a);typeof A.hooks.addPack=="function"&&!s?A.hooks.addPack(c,U4(a)):A.styles[c]=m(m({},A.styles[c]||{}),i),c==="fas"&&o1("fa",a)}var d2,g2,x2,X=A.styles,zr=A.shims,vr=(d2={},x(d2,h,Object.values(i2[h])),x(d2,p,Object.values(i2[p])),d2),b1=null,C3={},p3={},u3={},L3={},d3={},Vr=(g2={},x(g2,h,Object.keys(r2[h])),x(g2,p,Object.keys(r2[p])),g2);function Mr(c){return~Ke.indexOf(c)}function hr(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!Mr(s)?s:null}var g3=function(){var a=function(i){return a1(X,function(f,n,l){return f[l]=a1(n,i,{}),f},{})};C3=a(function(s,i,f){if(i[3]&&(s[i[3]]=f),i[2]){var n=i[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){s[l.toString(16)]=f})}return s}),p3=a(function(s,i,f){if(s[f]=f,i[2]){var n=i[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){s[l]=f})}return s}),d3=a(function(s,i,f){var n=i[2];return s[f]=f,n.forEach(function(l){s[l]=f}),s});var e="far"in X||z.autoFetchSvg,r=a1(zr,function(s,i){var f=i[0],n=i[1],l=i[2];return n==="far"&&!e&&(n="fas"),typeof f=="string"&&(s.names[f]={prefix:n,iconName:l}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:n,iconName:l}),s},{names:{},unicodes:{}});u3=r.names,L3=r.unicodes,b1=P2(z.styleDefault,{family:z.familyDefault})};cr(function(c){b1=P2(c.styleDefault,{family:z.familyDefault})});g3();function S1(c,a){return(C3[c]||{})[a]}function Cr(c,a){return(p3[c]||{})[a]}function I(c,a){return(d3[c]||{})[a]}function x3(c){return u3[c]||{prefix:null,iconName:null}}function pr(c){var a=L3[c],e=S1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function q(){return b1}var k1=function(){return{prefix:null,iconName:null,rest:[]}};function P2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?h:e,s=r2[r][c],i=s2[r][c]||s2[r][s],f=c in A.styles?c:null;return i||f||null}var q4=(x2={},x(x2,h,Object.keys(i2[h])),x(x2,p,Object.keys(i2[p])),x2);function T2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},x(a,h,"".concat(z.cssPrefix,"-").concat(h)),x(a,p,"".concat(z.cssPrefix,"-").concat(p)),a),f=null,n=h;(c.includes(i[h])||c.some(function(t){return q4[h].includes(t)}))&&(n=h),(c.includes(i[p])||c.some(function(t){return q4[p].includes(t)}))&&(n=p);var l=c.reduce(function(t,o){var H=hr(z.cssPrefix,o);if(X[o]?(o=vr[n].includes(o)?We[n][o]:o,f=o,t.prefix=o):Vr[n].indexOf(o)>-1?(f=o,t.prefix=P2(o,{family:n})):H?t.iconName=H:o!==z.replacementClass&&o!==i[h]&&o!==i[p]&&t.rest.push(o),!s&&t.prefix&&t.iconName){var v=f==="fa"?x3(t.iconName):{},M=I(t.prefix,t.iconName);v.prefix&&(f=null),t.iconName=v.iconName||M||t.iconName,t.prefix=v.prefix||t.prefix,t.prefix==="far"&&!X.far&&X.fas&&!z.autoFetchSvg&&(t.prefix="fas")}return t},k1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===p&&(X.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=I(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||f==="fa")&&(l.prefix=q()||"fas"),l}var ur=function(){function c(){Pe(this,c),this.definitions={}}return Te(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var f=s.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(n){e.definitions[n]=m(m({},e.definitions[n]||{}),f[n]),o1(n,f[n]);var l=i2[h][n];l&&o1(l,f[n]),g3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var f=s[i],n=f.prefix,l=f.iconName,t=f.icon,o=t[2];e[n]||(e[n]={}),o.length>0&&o.forEach(function(H){typeof H=="string"&&(e[n][H]=t)}),e[n][l]=t}),e}}]),c}(),$4=[],Y={},Q={},Lr=Object.keys(Q);function dr(c,a){var e=a.mixoutsTo;return $4=c,Y={},Object.keys(Q).forEach(function(r){Lr.indexOf(r)===-1&&delete Q[r]}),$4.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(f){typeof s[f]=="function"&&(e[f]=s[f]),S2(s[f])==="object"&&Object.keys(s[f]).forEach(function(n){e[f]||(e[f]={}),e[f][n]=s[f][n]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(f){Y[f]||(Y[f]=[]),Y[f].push(i[f])})}r.provides&&r.provides(Q)}),e}function t1(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=Y[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(r))}),a}function j(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=Y[c]||[];s.forEach(function(i){i.apply(null,e)})}function F(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[c]?Q[c].apply(null,a):void 0}function m1(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||q();if(a)return a=I(e,a)||a,E4(N3.definitions,e,a)||E4(A.styles,e,a)}var N3=new ur,gr=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,j("noAuto")},xr={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(j("beforeI2svg",a),F("pseudoElements2svg",a),F("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,or(function(){br({autoReplaceSvgRoot:e}),j("watch",a)})}},Nr={icon:function(a){if(a===null)return null;if(S2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:I(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=P2(a[0]);return{prefix:r,iconName:I(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(Ie))){var s=T2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||q(),iconName:I(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=q();return{prefix:i,iconName:I(i,a)||a}}}},w={noAuto:gr,config:z,dom:xr,parse:Nr,library:N3,findIconDefinition:m1,toHtml:t2},br=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?C:e;(Object.keys(A.styles).length>0||z.autoFetchSvg)&&B&&z.autoReplaceSvg&&w.dom.i2svg({node:r})};function F2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return t2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var r=C.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function Sr(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,f=c.transform;if(N1(f)&&e.found&&!r.found){var n=e.width,l=e.height,t={x:n/l/2,y:.5};s.style=y2(m(m({},i),{},{"transform-origin":"".concat(t.x+f.x/16,"em ").concat(t.y+f.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function kr(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},s),{},{id:f}),children:r}]}]}function w1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,f=c.transform,n=c.symbol,l=c.title,t=c.maskId,o=c.titleId,H=c.extra,v=c.watchable,M=v===void 0?!1:v,d=r.found?r:e,b=d.width,u=d.height,S=s==="fak",L=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(D){return H.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(H.classes).join(" "),g={children:[],attributes:m(m({},H.attributes),{},{"data-prefix":s,"data-icon":i,class:L,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(u)})},k=S&&!~H.classes.indexOf("fa-fw")?{width:"".concat(b/u*16*.0625,"em")}:{};M&&(g.attributes[_]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(o||n2())},children:[l]}),delete g.attributes.title);var N=m(m({},g),{},{prefix:s,iconName:i,main:e,mask:r,maskId:t,transform:f,symbol:n,styles:m(m({},k),H.styles)}),O=r.found&&e.found?F("generateAbstractMask",N)||{children:[],attributes:{}}:F("generateAbstractIcon",N)||{children:[],attributes:{}},G=O.children,Z2=O.attributes;return N.children=G,N.attributes=Z2,n?kr(N):Sr(N)}function O4(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,f=c.extra,n=c.watchable,l=n===void 0?!1:n,t=m(m(m({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});l&&(t[_]="");var o=m({},f.styles);N1(s)&&(o.transform=ir({transform:s,startCentered:!0,width:e,height:r}),o["-webkit-transform"]=o.transform);var H=y2(o);H.length>0&&(t.style=H);var v=[];return v.push({tag:"span",attributes:t,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function wr(c){var a=c.content,e=c.title,r=c.extra,s=m(m(m({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=y2(r.styles);i.length>0&&(s.style=i);var f=[];return f.push({tag:"span",attributes:s,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var e1=A.styles;function H1(c){var a=c[0],e=c[1],r=c.slice(4),s=p1(r,1),i=s[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(W.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(W.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(W.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:f}}var Ar={found:!1,width:512,height:512};function yr(c,a){!m3&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function z1(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=q()),new Promise(function(r,s){if(F("missingIconAbstract"),e==="fa"){var i=x3(c)||{};c=i.iconName||c,a=i.prefix||a}if(c&&a&&e1[a]&&e1[a][c]){var f=e1[a][c];return r(H1(f))}yr(c,a),r(m(m({},Ar),{},{icon:z.showMissingIcons&&c?F("missingIconAbstract")||{}:{}}))})}var G4=function(){},v1=z.measurePerformance&&M2&&M2.mark&&M2.measure?M2:{mark:G4,measure:G4},c2='FA "6.3.0"',Pr=function(a){return v1.mark("".concat(c2," ").concat(a," begins")),function(){return b3(a)}},b3=function(a){v1.mark("".concat(c2," ").concat(a," ends")),v1.measure("".concat(c2," ").concat(a),"".concat(c2," ").concat(a," begins"),"".concat(c2," ").concat(a," ends"))},A1={begin:Pr,end:b3},N2=function(){};function W4(c){var a=c.getAttribute?c.getAttribute(_):null;return typeof a=="string"}function Tr(c){var a=c.getAttribute?c.getAttribute(L1):null,e=c.getAttribute?c.getAttribute(d1):null;return a&&e}function Fr(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function Br(){if(z.autoReplaceSvg===!0)return b2.replace;var c=b2[z.autoReplaceSvg];return c||b2.replace}function Dr(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function Rr(c){return C.createElement(c)}function S3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?Dr:Rr:e;if(typeof c=="string")return C.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(f){s.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){s.appendChild(S3(f,{ceFn:r}))}),s}function Er(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var b2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(S3(s),e)}),e.getAttribute(_)===null&&z.keepOriginalSource){var r=C.createComment(Er(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~x1(e).indexOf(z.replacementClass))return b2.replace(a);var s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(n,l){return l===z.replacementClass||l.match(s)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var f=r.map(function(n){return t2(n)}).join(`
`);e.setAttribute(_,""),e.innerHTML=f}};function I4(c){c()}function k3(c,a){var e=typeof a=="function"?a:N2;if(c.length===0)e();else{var r=I4;z.mutateApproach===Oe&&(r=U.requestAnimationFrame||I4),r(function(){var s=Br(),i=A1.begin("mutate");c.map(s),i(),e()})}}var y1=!1;function w3(){y1=!0}function V1(){y1=!1}var w2=null;function _4(c){if(B4&&z.observeMutations){var a=c.treeCallback,e=a===void 0?N2:a,r=c.nodeCallback,s=r===void 0?N2:r,i=c.pseudoElementsCallback,f=i===void 0?N2:i,n=c.observeMutationsRoot,l=n===void 0?C:n;w2=new B4(function(t){if(!y1){var o=q();Z(t).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!W4(H.addedNodes[0])&&(z.searchPseudoElements&&f(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&f(H.target.parentNode),H.type==="attributes"&&W4(H.target)&&~Ye.indexOf(H.attributeName))if(H.attributeName==="class"&&Tr(H.target)){var v=T2(x1(H.target)),M=v.prefix,d=v.iconName;H.target.setAttribute(L1,M||o),d&&H.target.setAttribute(d1,d)}else Fr(H.target)&&s(H.target)})}}),B&&w2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ur(){w2&&w2.disconnect()}function qr(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),f=i[0],n=i.slice(1);return f&&n.length>0&&(r[f]=n.join(":").trim()),r},{})),e}function $r(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=T2(x1(c));return s.prefix||(s.prefix=q()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=Cr(s.prefix,c.innerText)||S1(s.prefix,l1(c.innerText))),!s.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function Or(c){var a=Z(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||n2()):(a["aria-hidden"]="true",a.focusable="false")),a}function Gr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function j4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=$r(c),r=e.iconName,s=e.prefix,i=e.rest,f=Or(c),n=t1("parseNodeAttributes",{},c),l=a.styleParser?qr(c):[];return m({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:f}},n)}var Wr=A.styles;function A3(c){var a=z.autoReplaceSvg==="nest"?j4(c,{styleParser:!1}):j4(c);return~a.extra.classes.indexOf(H3)?F("generateLayersText",c,a):F("generateSvgReplacementMutation",c,a)}var $=new Set;g1.map(function(c){$.add("fa-".concat(c))});Object.keys(r2[h]).map($.add.bind($));Object.keys(r2[p]).map($.add.bind($));$=l2($);function X4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var e=C.documentElement.classList,r=function(H){return e.add("".concat(D4,"-").concat(H))},s=function(H){return e.remove("".concat(D4,"-").concat(H))},i=z.autoFetchSvg?$:g1.map(function(o){return"fa-".concat(o)}).concat(Object.keys(Wr));i.includes("fa")||i.push("fa");var f=[".".concat(H3,":not([").concat(_,"])")].concat(i.map(function(o){return".".concat(o,":not([").concat(_,"])")})).join(", ");if(f.length===0)return Promise.resolve();var n=[];try{n=Z(c.querySelectorAll(f))}catch{}if(n.length>0)r("pending"),s("complete");else return Promise.resolve();var l=A1.begin("onTree"),t=n.reduce(function(o,H){try{var v=A3(H);v&&o.push(v)}catch(M){m3||M.name==="MissingIcon"&&console.error(M)}return o},[]);return new Promise(function(o,H){Promise.all(t).then(function(v){k3(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),o()})}).catch(function(v){l(),H(v)})})}function Ir(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;A3(c).then(function(e){e&&k3([e],a)})}function _r(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:m1(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:m1(s||{})),c(r,m(m({},e),{},{mask:s}))}}var jr=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?y:r,i=e.symbol,f=i===void 0?!1:i,n=e.mask,l=n===void 0?null:n,t=e.maskId,o=t===void 0?null:t,H=e.title,v=H===void 0?null:H,M=e.titleId,d=M===void 0?null:M,b=e.classes,u=b===void 0?[]:b,S=e.attributes,L=S===void 0?{}:S,g=e.styles,k=g===void 0?{}:g;if(a){var N=a.prefix,O=a.iconName,G=a.icon;return F2(m({type:"icon"},a),function(){return j("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(v?L["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(d||n2()):(L["aria-hidden"]="true",L.focusable="false")),w1({icons:{main:H1(G),mask:l?H1(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:O,transform:m(m({},y),s),symbol:f,title:v,maskId:o,titleId:d,extra:{attributes:L,styles:k,classes:u}})})}},Xr={mixout:function(){return{icon:_r(jr)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=X4,e.nodeCallback=Ir,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?C:r,i=e.callback,f=i===void 0?function(){}:i;return X4(s,f)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,f=r.titleId,n=r.prefix,l=r.transform,t=r.symbol,o=r.mask,H=r.maskId,v=r.extra;return new Promise(function(M,d){Promise.all([z1(s,n),o.iconName?z1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var u=p1(b,2),S=u[0],L=u[1];M([e,w1({icons:{main:S,mask:L},prefix:n,iconName:s,transform:l,symbol:t,maskId:H,title:i,titleId:f,extra:v,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,f=e.transform,n=e.styles,l=y2(n);l.length>0&&(s.style=l);var t;return N1(f)&&(t=F("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),r.push(t||i.icon),{children:r,attributes:s}}}},Yr={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return F2({type:"layer"},function(){j("beforeDOMElementCreation",{assembler:e,params:r});var f=[];return e(function(n){Array.isArray(n)?n.map(function(l){f=f.concat(l.abstract)}):f=f.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(l2(i)).join(" ")},children:f}]})}}}},Kr={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,f=r.classes,n=f===void 0?[]:f,l=r.attributes,t=l===void 0?{}:l,o=r.styles,H=o===void 0?{}:o;return F2({type:"counter",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),wr({content:e.toString(),title:i,extra:{attributes:t,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(l2(n))}})})}}}},Qr={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?y:s,f=r.title,n=f===void 0?null:f,l=r.classes,t=l===void 0?[]:l,o=r.attributes,H=o===void 0?{}:o,v=r.styles,M=v===void 0?{}:v;return F2({type:"text",content:e},function(){return j("beforeDOMElementCreation",{content:e,params:r}),O4({content:e,transform:m(m({},y),i),title:n,extra:{attributes:H,styles:M,classes:["".concat(z.cssPrefix,"-layers-text")].concat(l2(t))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,f=r.extra,n=null,l=null;if(l3){var t=parseInt(getComputedStyle(e).fontSize,10),o=e.getBoundingClientRect();n=o.width/t,l=o.height/t}return z.autoA11y&&!s&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,O4({content:e.innerHTML,width:n,height:l,transform:i,title:s,extra:f,watchable:!0})])}}},Jr=new RegExp('"',"ug"),Y4=[1105920,1112319];function Zr(c){var a=c.replace(Jr,""),e=Hr(a,0),r=e>=Y4[0]&&e<=Y4[1],s=a.length===2?a[0]===a[1]:!1;return{value:l1(s?a[0]:a),isSecondary:r||s}}function K4(c,a){var e="".concat($e).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=Z(c.children),f=i.filter(function(G){return G.getAttribute(n1)===a})[0],n=U.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(_e),t=n.getPropertyValue("font-weight"),o=n.getPropertyValue("content");if(f&&!l)return c.removeChild(f),r();if(l&&o!=="none"&&o!==""){var H=n.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?p:h,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?s2[v][l[2].toLowerCase()]:je[v][t],d=Zr(H),b=d.value,u=d.isSecondary,S=l[0].startsWith("FontAwesome"),L=S1(M,b),g=L;if(S){var k=pr(b);k.iconName&&k.prefix&&(L=k.iconName,M=k.prefix)}if(L&&!u&&(!f||f.getAttribute(L1)!==M||f.getAttribute(d1)!==g)){c.setAttribute(e,g),f&&c.removeChild(f);var N=Gr(),O=N.extra;O.attributes[n1]=a,z1(L,M).then(function(G){var Z2=w1(m(m({},N),{},{icons:{main:G,mask:k1()},prefix:M,iconName:g,extra:O,watchable:!0})),D=C.createElement("svg");a==="::before"?c.insertBefore(D,c.firstChild):c.appendChild(D),D.outerHTML=Z2.map(function(ye){return t2(ye)}).join(`
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cB(c){var a,e=c.beat,r=c.fade,s=c.beatFade,i=c.bounce,f=c.shake,n=c.flash,l=c.spin,t=c.spinPulse,o=c.spinReverse,H=c.pulse,v=c.fixedWidth,M=c.inverse,d=c.border,b=c.listItem,u=c.flip,S=c.size,L=c.rotation,g=c.pull,k=(a={"fa-beat":e,"fa-fade":r,"fa-beat-fade":s,"fa-bounce":i,"fa-shake":f,"fa-flash":n,"fa-spin":l,"fa-spin-reverse":o,"fa-spin-pulse":t,"fa-pulse":H,"fa-fw":v,"fa-inverse":M,"fa-border":d,"fa-li":b,"fa-flip":u===!0,"fa-flip-horizontal":u==="horizontal"||u==="both","fa-flip-vertical":u==="vertical"||u==="both"},K(a,"fa-".concat(S),typeof S<"u"&&S!==null),K(a,"fa-rotate-".concat(L),typeof L<"u"&&L!==null&&L!==0),K(a,"fa-pull-".concat(g),typeof g<"u"&&g!==null),K(a,"fa-swap-opacity",c.swapOpacity),a);return Object.keys(k).map(function(N){return k[N]?N:null}).filter(function(N){return N})}function aB(c){return c=c-0,c===c}function ke(c){return aB(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,function(a,e){return e?e.toUpperCase():""}),c.substr(0,1).toLowerCase()+c.substr(1))}var eB=["style"];function rB(c){return c.charAt(0).toUpperCase()+c.slice(1)}function sB(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),s=ke(e.slice(0,r)),i=e.slice(r+1).trim();return s.startsWith("webkit")?a[rB(s)]=i:a[s]=i,a},{})}function we(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var r=(a.children||[]).map(function(l){return we(c,l)}),s=Object.keys(a.attributes||{}).reduce(function(l,t){var o=a.attributes[t];switch(t){case"class":l.attrs.className=o,delete a.attributes.class;break;case"style":l.attrs.style=sB(o);break;default:t.indexOf("aria-")===0||t.indexOf("data-")===0?l.attrs[t.toLowerCase()]=o:l.attrs[ke(t)]=o}return l},{attrs:{}}),i=e.style,f=i===void 0?{}:i,n=YF(e,eB);return s.attrs.style=E(E({},s.attrs.style),f),c.apply(void 0,[a.tag,E(E({},s.attrs),n)].concat(h1(r)))}var Ae=!1;try{Ae=!0}catch{}function iB(){if(!Ae&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function e3(c){if(c&&A2(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(M1.icon)return M1.icon(c);if(c===null)return null;if(c&&A2(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}function s1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?K({},c,a):{}}var J2=r3.forwardRef(function(c,a){var e=c.icon,r=c.mask,s=c.symbol,i=c.className,f=c.title,n=c.titleId,l=c.maskId,t=e3(e),o=s1("classes",[].concat(h1(cB(c)),h1(i.split(" ")))),H=s1("transform",typeof c.transform=="string"?M1.transform(c.transform):c.transform),v=s1("mask",e3(r)),M=ts(t,E(E(E(E({},o),H),v),{},{symbol:s,title:f,titleId:n,maskId:l}));if(!M)return iB("Could not find icon",t),null;var d=M.abstract,b={ref:a};return Object.keys(c).forEach(function(u){J2.defaultProps.hasOwnProperty(u)||(b[u]=c[u])}),fB(d[0],b)});J2.displayName="FontAwesomeIcon";J2.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};J2.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var fB=we.bind(null,r3.createElement);export{J2 as F,mB as a,tB as i,oB as l};