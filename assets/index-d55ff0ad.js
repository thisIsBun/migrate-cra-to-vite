import{c as it,g as ha,b as l,j as v,L as rn,u as mi,d as At,e as Sr,f as vi,N as nd,H as sd,h as id,i as Jn,k as rd,R as od}from"./react-e741e572.js";import{P as ee,s as D,F as xe,l as ad,i as ld}from"./utilities-0378fe99.js";import{i as cd}from"./fortawesome-4f418b12.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const ud="/assets/logo-67eb2664.png";var fa={exports:{}};/*!
* sweetalert2 v11.7.12
* Released under the MIT License.
*/(function(t,e){(function(n,s){t.exports=s()})(it,function(){const s={},i=()=>{s.previousActiveElement instanceof HTMLElement?(s.previousActiveElement.focus(),s.previousActiveElement=null):document.body&&document.body.focus()},a=r=>new Promise(o=>{if(!r)return o();const d=window.scrollX,p=window.scrollY;s.restoreFocusTimeout=setTimeout(()=>{i(),o()},100),window.scrollTo(d,p)});var c={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const f="swal2-",u=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"].reduce((r,o)=>(r[o]=f+o,r),{}),m=["success","warning","info","question","error"].reduce((r,o)=>(r[o]=f+o,r),{}),y="SweetAlert2:",w=r=>r.charAt(0).toUpperCase()+r.slice(1),L=r=>{console.warn(`${y} ${typeof r=="object"?r.join(" "):r}`)},E=r=>{console.error(`${y} ${r}`)},k=[],S=r=>{k.includes(r)||(k.push(r),L(r))},C=(r,o)=>{S(`"${r}" is deprecated and will be removed in the next major release. Please use "${o}" instead.`)},x=r=>typeof r=="function"?r():r,b=r=>r&&typeof r.toPromise=="function",P=r=>b(r)?r.toPromise():Promise.resolve(r),T=r=>r&&Promise.resolve(r)===r,A=()=>document.body.querySelector(`.${u.container}`),R=r=>{const o=A();return o?o.querySelector(r):null},I=r=>R(`.${r}`),M=()=>I(u.popup),$=()=>I(u.icon),N=()=>I(u["icon-content"]),G=()=>I(u.title),U=()=>I(u["html-container"]),J=()=>I(u.image),q=()=>I(u["progress-steps"]),F=()=>I(u["validation-message"]),B=()=>R(`.${u.actions} .${u.confirm}`),H=()=>R(`.${u.actions} .${u.cancel}`),z=()=>R(`.${u.actions} .${u.deny}`),re=()=>I(u["input-label"]),X=()=>R(`.${u.loader}`),j=()=>I(u.actions),O=()=>I(u.footer),de=()=>I(u["timer-progress-bar"]),le=()=>I(u.close),Y=`
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
`,V=()=>{const r=M().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(r).sort((_,W)=>{const ue=parseInt(_.getAttribute("tabindex")),we=parseInt(W.getAttribute("tabindex"));return ue>we?1:ue<we?-1:0}),d=M().querySelectorAll(Y),p=Array.from(d).filter(_=>_.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(p))].filter(_=>Ce(_))},oe=()=>Ie(document.body,u.shown)&&!Ie(document.body,u["toast-shown"])&&!Ie(document.body,u["no-backdrop"]),ne=()=>M()&&Ie(M(),u.toast),Ae=()=>M().hasAttribute("data-loading"),pe=(r,o)=>{if(r.textContent="",o){const p=new DOMParser().parseFromString(o,"text/html");Array.from(p.querySelector("head").childNodes).forEach(_=>{r.appendChild(_)}),Array.from(p.querySelector("body").childNodes).forEach(_=>{_ instanceof HTMLVideoElement||_ instanceof HTMLAudioElement?r.appendChild(_.cloneNode(!0)):r.appendChild(_)})}},Ie=(r,o)=>{if(!o)return!1;const d=o.split(/\s+/);for(let p=0;p<d.length;p++)if(!r.classList.contains(d[p]))return!1;return!0},ce=(r,o)=>{Array.from(r.classList).forEach(d=>{!Object.values(u).includes(d)&&!Object.values(m).includes(d)&&!Object.values(o.showClass).includes(d)&&r.classList.remove(d)})},Se=(r,o,d)=>{if(ce(r,o),o.customClass&&o.customClass[d]){if(typeof o.customClass[d]!="string"&&!o.customClass[d].forEach){L(`Invalid type of customClass.${d}! Expected string or iterable object, got "${typeof o.customClass[d]}"`);return}se(r,o.customClass[d])}},et=(r,o)=>{if(!o)return null;switch(o){case"select":case"textarea":case"file":return r.querySelector(`.${u.popup} > .${u[o]}`);case"checkbox":return r.querySelector(`.${u.popup} > .${u.checkbox} input`);case"radio":return r.querySelector(`.${u.popup} > .${u.radio} input:checked`)||r.querySelector(`.${u.popup} > .${u.radio} input:first-child`);case"range":return r.querySelector(`.${u.popup} > .${u.range} input`);default:return r.querySelector(`.${u.popup} > .${u.input}`)}},cn=r=>{if(r.focus(),r.type!=="file"){const o=r.value;r.value="",r.value=o}},bt=(r,o,d)=>{!r||!o||(typeof o=="string"&&(o=o.split(/\s+/).filter(Boolean)),o.forEach(p=>{Array.isArray(r)?r.forEach(_=>{d?_.classList.add(p):_.classList.remove(p)}):d?r.classList.add(p):r.classList.remove(p)}))},se=(r,o)=>{bt(r,o,!0)},_e=(r,o)=>{bt(r,o,!1)},je=(r,o)=>{const d=Array.from(r.children);for(let p=0;p<d.length;p++){const _=d[p];if(_ instanceof HTMLElement&&Ie(_,o))return _}},Ne=(r,o,d)=>{d===`${parseInt(d)}`&&(d=parseInt(d)),d||parseInt(d)===0?r.style[o]=typeof d=="number"?`${d}px`:d:r.style.removeProperty(o)},me=function(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";r&&(r.style.display=o)},ve=r=>{r&&(r.style.display="none")},un=(r,o,d,p)=>{const _=r.querySelector(o);_&&(_.style[d]=p)},qe=function(r,o){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";o?me(r,d):ve(r)},Ce=r=>!!(r&&(r.offsetWidth||r.offsetHeight||r.getClientRects().length)),Rt=()=>!Ce(B())&&!Ce(z())&&!Ce(H()),dn=r=>r.scrollHeight>r.clientHeight,yt=r=>{const o=window.getComputedStyle(r),d=parseFloat(o.getPropertyValue("animation-duration")||"0"),p=parseFloat(o.getPropertyValue("transition-duration")||"0");return d>0||p>0},$t=function(r){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const d=de();Ce(d)&&(o&&(d.style.transition="none",d.style.width="100%"),setTimeout(()=>{d.style.transition=`width ${r/1e3}s linear`,d.style.width="0%"},10))},Dt=()=>{const r=de(),o=parseInt(window.getComputedStyle(r).width);r.style.removeProperty("transition"),r.style.width="100%";const d=parseInt(window.getComputedStyle(r).width),p=o/d*100;r.style.width=`${p}%`},hn=()=>typeof window>"u"||typeof document>"u",Bt=`
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
`.replace(/(^|\n)\s*/g,""),Nn=()=>{const r=A();return r?(r.remove(),_e([document.documentElement,document.body],[u["no-backdrop"],u["toast-shown"],u["has-column"]]),!0):!1},Oe=()=>{s.currentInstance.resetValidationMessage()},Un=()=>{const r=M(),o=je(r,u.input),d=je(r,u.file),p=r.querySelector(`.${u.range} input`),_=r.querySelector(`.${u.range} output`),W=je(r,u.select),ue=r.querySelector(`.${u.checkbox} input`),we=je(r,u.textarea);o.oninput=Oe,d.onchange=Oe,W.onchange=Oe,ue.onchange=Oe,we.oninput=Oe,p.oninput=()=>{Oe(),_.value=p.value},p.onchange=()=>{Oe(),_.value=p.value}},jt=r=>typeof r=="string"?document.querySelector(r):r,zn=r=>{const o=M();o.setAttribute("role",r.toast?"alert":"dialog"),o.setAttribute("aria-live",r.toast?"polite":"assertive"),r.toast||o.setAttribute("aria-modal","true")},Hn=r=>{window.getComputedStyle(r).direction==="rtl"&&se(A(),u.rtl)},Fn=r=>{const o=Nn();if(hn()){E("SweetAlert2 requires document to initialize");return}const d=document.createElement("div");d.className=u.container,o&&se(d,u["no-transition"]),pe(d,Bt);const p=jt(r.target);p.appendChild(d),zn(r),Hn(p),Un()},tt=(r,o)=>{r instanceof HTMLElement?o.appendChild(r):typeof r=="object"?Vn(r,o):r&&pe(o,r)},Vn=(r,o)=>{r.jquery?Nt(o,r):pe(o,r.toString())},Nt=(r,o)=>{if(r.textContent="",0 in o)for(let d=0;d in o;d++)r.appendChild(o[d].cloneNode(!0));else r.appendChild(o.cloneNode(!0))},nt=(()=>{if(hn())return!1;const r=document.createElement("div"),o={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const d in o)if(Object.prototype.hasOwnProperty.call(o,d)&&typeof r.style[d]<"u")return o[d];return!1})(),Ut=(r,o)=>{const d=j(),p=X();!o.showConfirmButton&&!o.showDenyButton&&!o.showCancelButton?ve(d):me(d),Se(d,o,"actions"),Wn(d,p,o),pe(p,o.loaderHtml),Se(p,o,"loader")};function Wn(r,o,d){const p=B(),_=z(),W=H();Ke(p,"confirm",d),Ke(_,"deny",d),Ke(W,"cancel",d),ks(p,_,W,d),d.reverseButtons&&(d.toast?(r.insertBefore(W,p),r.insertBefore(_,p)):(r.insertBefore(W,o),r.insertBefore(_,o),r.insertBefore(p,o)))}function ks(r,o,d,p){if(!p.buttonsStyling){_e([r,o,d],u.styled);return}se([r,o,d],u.styled),p.confirmButtonColor&&(r.style.backgroundColor=p.confirmButtonColor,se(r,u["default-outline"])),p.denyButtonColor&&(o.style.backgroundColor=p.denyButtonColor,se(o,u["default-outline"])),p.cancelButtonColor&&(d.style.backgroundColor=p.cancelButtonColor,se(d,u["default-outline"]))}function Ke(r,o,d){qe(r,d[`show${w(o)}Button`],"inline-block"),pe(r,d[`${o}ButtonText`]),r.setAttribute("aria-label",d[`${o}ButtonAriaLabel`]),r.className=u[o],Se(r,d,`${o}Button`),se(r,d[`${o}ButtonClass`])}const Z=(r,o)=>{const d=le();d&&(pe(d,o.closeButtonHtml||""),Se(d,o,"closeButton"),qe(d,o.showCloseButton),d.setAttribute("aria-label",o.closeButtonAriaLabel||""))},Zl=(r,o)=>{const d=A();d&&(Jl(d,o.backdrop),Yl(d,o.position),Xl(d,o.grow),Se(d,o,"container"))};function Jl(r,o){typeof o=="string"?r.style.background=o:o||se([document.documentElement,document.body],u["no-backdrop"])}function Yl(r,o){o in u?se(r,u[o]):(L('The "position" parameter is not valid, defaulting to "center"'),se(r,u.center))}function Xl(r,o){if(o&&typeof o=="string"){const d=`grow-${o}`;d in u&&se(r,u[d])}}const Ql=["input","file","range","select","radio","checkbox","textarea"],ec=(r,o)=>{const d=M(),p=c.innerParams.get(r),_=!p||o.input!==p.input;Ql.forEach(W=>{const ue=je(d,u[W]);sc(W,o.inputAttributes),ue.className=u[W],_&&ve(ue)}),o.input&&(_&&tc(o),ic(o))},tc=r=>{if(!Pe[r.input]){E(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${r.input}"`);return}const o=Hi(r.input),d=Pe[r.input](o,r);me(o),r.inputAutoFocus&&setTimeout(()=>{cn(d)})},nc=r=>{for(let o=0;o<r.attributes.length;o++){const d=r.attributes[o].name;["type","value","style"].includes(d)||r.removeAttribute(d)}},sc=(r,o)=>{const d=et(M(),r);if(d){nc(d);for(const p in o)d.setAttribute(p,o[p])}},ic=r=>{const o=Hi(r.input);typeof r.customClass=="object"&&se(o,r.customClass.input)},Is=(r,o)=>{(!r.placeholder||o.inputPlaceholder)&&(r.placeholder=o.inputPlaceholder)},fn=(r,o,d)=>{if(d.inputLabel){r.id=u.input;const p=document.createElement("label"),_=u["input-label"];p.setAttribute("for",r.id),p.className=_,typeof d.customClass=="object"&&se(p,d.customClass.inputLabel),p.innerText=d.inputLabel,o.insertAdjacentElement("beforebegin",p)}},Hi=r=>je(M(),u[r]||u.input),Gn=(r,o)=>{["string","number"].includes(typeof o)?r.value=`${o}`:T(o)||L(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof o}"`)},Pe={};Pe.text=Pe.email=Pe.password=Pe.number=Pe.tel=Pe.url=(r,o)=>(Gn(r,o.inputValue),fn(r,r,o),Is(r,o),r.type=o.input,r),Pe.file=(r,o)=>(fn(r,r,o),Is(r,o),r),Pe.range=(r,o)=>{const d=r.querySelector("input"),p=r.querySelector("output");return Gn(d,o.inputValue),d.type=o.input,Gn(p,o.inputValue),fn(d,r,o),r},Pe.select=(r,o)=>{if(r.textContent="",o.inputPlaceholder){const d=document.createElement("option");pe(d,o.inputPlaceholder),d.value="",d.disabled=!0,d.selected=!0,r.appendChild(d)}return fn(r,r,o),r},Pe.radio=r=>(r.textContent="",r),Pe.checkbox=(r,o)=>{const d=et(M(),"checkbox");d.value="1",d.id=u.checkbox,d.checked=!!o.inputValue;const p=r.querySelector("span");return pe(p,o.inputPlaceholder),d},Pe.textarea=(r,o)=>{Gn(r,o.inputValue),Is(r,o),fn(r,r,o);const d=p=>parseInt(window.getComputedStyle(p).marginLeft)+parseInt(window.getComputedStyle(p).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const p=parseInt(window.getComputedStyle(M()).width),_=()=>{const W=r.offsetWidth+d(r);W>p?M().style.width=`${W}px`:M().style.width=null};new MutationObserver(_).observe(r,{attributes:!0,attributeFilter:["style"]})}}),r};const rc=(r,o)=>{const d=U();d&&(Se(d,o,"htmlContainer"),o.html?(tt(o.html,d),me(d,"block")):o.text?(d.textContent=o.text,me(d,"block")):ve(d),ec(r,o))},oc=(r,o)=>{const d=O();d&&(qe(d,o.footer),o.footer&&tt(o.footer,d),Se(d,o,"footer"))},ac=(r,o)=>{const d=c.innerParams.get(r),p=$();if(d&&o.icon===d.icon){Vi(p,o),Fi(p,o);return}if(!o.icon&&!o.iconHtml){ve(p);return}if(o.icon&&Object.keys(m).indexOf(o.icon)===-1){E(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${o.icon}"`),ve(p);return}me(p),Vi(p,o),Fi(p,o),se(p,o.showClass.icon)},Fi=(r,o)=>{for(const d in m)o.icon!==d&&_e(r,m[d]);se(r,m[o.icon]),dc(r,o),lc(),Se(r,o,"icon")},lc=()=>{const r=M(),o=window.getComputedStyle(r).getPropertyValue("background-color"),d=r.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let p=0;p<d.length;p++)d[p].style.backgroundColor=o},cc=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,uc=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Vi=(r,o)=>{let d=r.innerHTML,p;o.iconHtml?p=Wi(o.iconHtml):o.icon==="success"?(p=cc,d=d.replace(/ style=".*?"/g,"")):o.icon==="error"?p=uc:p=Wi({question:"?",warning:"!",info:"i"}[o.icon]),d.trim()!==p.trim()&&pe(r,p)},dc=(r,o)=>{if(o.iconColor){r.style.color=o.iconColor,r.style.borderColor=o.iconColor;for(const d of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])un(r,d,"backgroundColor",o.iconColor);un(r,".swal2-success-ring","borderColor",o.iconColor)}},Wi=r=>`<div class="${u["icon-content"]}">${r}</div>`,hc=(r,o)=>{const d=J();if(d){if(!o.imageUrl){ve(d);return}me(d,""),d.setAttribute("src",o.imageUrl),d.setAttribute("alt",o.imageAlt||""),Ne(d,"width",o.imageWidth),Ne(d,"height",o.imageHeight),d.className=u.image,Se(d,o,"image")}},fc=(r,o)=>{const d=A(),p=M();if(!(!d||!p)){if(o.toast){Ne(d,"width",o.width),p.style.width="100%";const _=X();_&&p.insertBefore(_,$())}else Ne(p,"width",o.width);Ne(p,"padding",o.padding),o.color&&(p.style.color=o.color),o.background&&(p.style.background=o.background),ve(F()),pc(p,o)}},pc=(r,o)=>{const d=o.showClass||{};r.className=`${u.popup} ${Ce(r)?d.popup:""}`,o.toast?(se([document.documentElement,document.body],u["toast-shown"]),se(r,u.toast)):se(r,u.modal),Se(r,o,"popup"),typeof o.customClass=="string"&&se(r,o.customClass),o.icon&&se(r,u[`icon-${o.icon}`])},gc=(r,o)=>{const d=q();if(!d)return;const{progressSteps:p,currentProgressStep:_}=o;if(!p||p.length===0||_===void 0){ve(d);return}me(d),d.textContent="",_>=p.length&&L("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),p.forEach((W,ue)=>{const we=mc(W);if(d.appendChild(we),ue===_&&se(we,u["active-progress-step"]),ue!==p.length-1){const Ee=vc(o);d.appendChild(Ee)}})},mc=r=>{const o=document.createElement("li");return se(o,u["progress-step"]),pe(o,r),o},vc=r=>{const o=document.createElement("li");return se(o,u["progress-step-line"]),r.progressStepsDistance&&Ne(o,"width",r.progressStepsDistance),o},wc=(r,o)=>{const d=G();d&&(qe(d,o.title||o.titleText,"block"),o.title&&tt(o.title,d),o.titleText&&(d.innerText=o.titleText),Se(d,o,"title"))},Gi=(r,o)=>{fc(r,o),Zl(r,o),gc(r,o),ac(r,o),hc(r,o),wc(r,o),Z(r,o),rc(r,o),Ut(r,o),oc(r,o);const d=M();typeof o.didRender=="function"&&d&&o.didRender(d)},bc=()=>Ce(M()),qi=()=>B()&&B().click(),yc=()=>z()&&z().click(),xc=()=>H()&&H().click(),zt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ki=r=>{r.keydownTarget&&r.keydownHandlerAdded&&(r.keydownTarget.removeEventListener("keydown",r.keydownHandler,{capture:r.keydownListenerCapture}),r.keydownHandlerAdded=!1)},Lc=(r,o,d,p)=>{Ki(o),d.toast||(o.keydownHandler=_=>Cc(r,_,p),o.keydownTarget=d.keydownListenerCapture?window:M(),o.keydownListenerCapture=d.keydownListenerCapture,o.keydownTarget.addEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!0)},Ss=(r,o)=>{const d=V();if(d.length){r=r+o,r===d.length?r=0:r===-1&&(r=d.length-1),d[r].focus();return}M().focus()},Zi=["ArrowRight","ArrowDown"],Ec=["ArrowLeft","ArrowUp"],Cc=(r,o,d)=>{const p=c.innerParams.get(r);p&&(o.isComposing||o.keyCode===229||(p.stopKeydownPropagation&&o.stopPropagation(),o.key==="Enter"?kc(r,o,p):o.key==="Tab"?Ic(o):[...Zi,...Ec].includes(o.key)?Sc(o.key):o.key==="Escape"&&_c(o,p,d)))},kc=(r,o,d)=>{if(x(d.allowEnterKey)&&o.target&&r.getInput()&&o.target instanceof HTMLElement&&o.target.outerHTML===r.getInput().outerHTML){if(["textarea","file"].includes(d.input))return;qi(),o.preventDefault()}},Ic=r=>{const o=r.target,d=V();let p=-1;for(let _=0;_<d.length;_++)if(o===d[_]){p=_;break}r.shiftKey?Ss(p,-1):Ss(p,1),r.stopPropagation(),r.preventDefault()},Sc=r=>{const o=B(),d=z(),p=H(),_=[o,d,p];if(document.activeElement instanceof HTMLElement&&!_.includes(document.activeElement))return;const W=Zi.includes(r)?"nextElementSibling":"previousElementSibling";let ue=document.activeElement;for(let we=0;we<j().children.length;we++){if(ue=ue[W],!ue)return;if(ue instanceof HTMLButtonElement&&Ce(ue))break}ue instanceof HTMLButtonElement&&ue.focus()},_c=(r,o,d)=>{x(o.allowEscapeKey)&&(r.preventDefault(),d(zt.esc))};var pn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Tc=()=>{Array.from(document.body.children).forEach(o=>{o===A()||o.contains(A())||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},Ji=()=>{Array.from(document.body.children).forEach(o=>{o.hasAttribute("data-previous-aria-hidden")?(o.setAttribute("aria-hidden",o.getAttribute("data-previous-aria-hidden")||""),o.removeAttribute("data-previous-aria-hidden")):o.removeAttribute("aria-hidden")})},Pc=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Ie(document.body,u.iosfix)){const o=document.body.scrollTop;document.body.style.top=`${o*-1}px`,se(document.body,u.iosfix),Ac(),Mc()}},Mc=()=>{const r=navigator.userAgent,o=!!r.match(/iPad/i)||!!r.match(/iPhone/i),d=!!r.match(/WebKit/i);o&&d&&!r.match(/CriOS/i)&&M().scrollHeight>window.innerHeight-44&&(A().style.paddingBottom="44px")},Ac=()=>{const r=A();let o;r.ontouchstart=d=>{o=Oc(d)},r.ontouchmove=d=>{o&&(d.preventDefault(),d.stopPropagation())}},Oc=r=>{const o=r.target,d=A();return Rc(r)||$c(r)?!1:o===d||!dn(d)&&o instanceof HTMLElement&&o.tagName!=="INPUT"&&o.tagName!=="TEXTAREA"&&!(dn(U())&&U().contains(o))},Rc=r=>r.touches&&r.touches.length&&r.touches[0].touchType==="stylus",$c=r=>r.touches&&r.touches.length>1,Dc=()=>{if(Ie(document.body,u.iosfix)){const r=parseInt(document.body.style.top,10);_e(document.body,u.iosfix),document.body.style.top="",document.body.scrollTop=r*-1}},Bc=()=>{const r=document.createElement("div");r.className=u["scrollbar-measure"],document.body.appendChild(r);const o=r.getBoundingClientRect().width-r.clientWidth;return document.body.removeChild(r),o};let Ht=null;const jc=()=>{Ht===null&&document.body.scrollHeight>window.innerHeight&&(Ht=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ht+Bc()}px`)},Nc=()=>{Ht!==null&&(document.body.style.paddingRight=`${Ht}px`,Ht=null)};function Yi(r,o,d,p){ne()?Qi(r,p):(a(d).then(()=>Qi(r,p)),Ki(s)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(o.setAttribute("style","display:none !important"),o.removeAttribute("class"),o.innerHTML=""):o.remove(),oe()&&(Nc(),Dc(),Ji()),Uc()}function Uc(){_e([document.documentElement,document.body],[u.shown,u["height-auto"],u["no-backdrop"],u["toast-shown"]])}function st(r){r=Hc(r);const o=pn.swalPromiseResolve.get(this),d=zc(this);this.isAwaitingPromise?r.isDismissed||(gn(this),o(r)):d&&o(r)}const zc=r=>{const o=M();if(!o)return!1;const d=c.innerParams.get(r);if(!d||Ie(o,d.hideClass.popup))return!1;_e(o,d.showClass.popup),se(o,d.hideClass.popup);const p=A();return _e(p,d.showClass.backdrop),se(p,d.hideClass.backdrop),Fc(r,o,d),!0};function Xi(r){const o=pn.swalPromiseReject.get(this);gn(this),o&&o(r)}const gn=r=>{r.isAwaitingPromise&&(delete r.isAwaitingPromise,c.innerParams.get(r)||r._destroy())},Hc=r=>typeof r>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},r),Fc=(r,o,d)=>{const p=A(),_=nt&&yt(o);typeof d.willClose=="function"&&d.willClose(o),_?Vc(r,o,p,d.returnFocus,d.didClose):Yi(r,p,d.returnFocus,d.didClose)},Vc=(r,o,d,p,_)=>{s.swalCloseEventFinishedCallback=Yi.bind(null,r,d,p,_),o.addEventListener(nt,function(W){W.target===o&&(s.swalCloseEventFinishedCallback(),delete s.swalCloseEventFinishedCallback)})},Qi=(r,o)=>{setTimeout(()=>{typeof o=="function"&&o.bind(r.params)(),r._destroy&&r._destroy()})},Ft=r=>{let o=M();o||new Zn,o=M();const d=X();ne()?ve($()):Wc(o,r),me(d),o.setAttribute("data-loading","true"),o.setAttribute("aria-busy","true"),o.focus()},Wc=(r,o)=>{const d=j(),p=X();!o&&Ce(B())&&(o=B()),me(d),o&&(ve(o),p.setAttribute("data-button-to-replace",o.className)),p.parentNode.insertBefore(p,o),se([r,d],u.loading)},Gc=(r,o)=>{o.input==="select"||o.input==="radio"?Yc(r,o):["text","email","number","tel","textarea"].includes(o.input)&&(b(o.inputValue)||T(o.inputValue))&&(Ft(B()),Xc(r,o))},qc=(r,o)=>{const d=r.getInput();if(!d)return null;switch(o.input){case"checkbox":return Kc(d);case"radio":return Zc(d);case"file":return Jc(d);default:return o.inputAutoTrim?d.value.trim():d.value}},Kc=r=>r.checked?1:0,Zc=r=>r.checked?r.value:null,Jc=r=>r.files.length?r.getAttribute("multiple")!==null?r.files:r.files[0]:null,Yc=(r,o)=>{const d=M(),p=_=>{Qc[o.input](d,_s(_),o)};b(o.inputOptions)||T(o.inputOptions)?(Ft(B()),P(o.inputOptions).then(_=>{r.hideLoading(),p(_)})):typeof o.inputOptions=="object"?p(o.inputOptions):E(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof o.inputOptions}`)},Xc=(r,o)=>{const d=r.getInput();ve(d),P(o.inputValue).then(p=>{d.value=o.input==="number"?`${parseFloat(p)||0}`:`${p}`,me(d),d.focus(),r.hideLoading()}).catch(p=>{E(`Error in inputValue promise: ${p}`),d.value="",me(d),d.focus(),r.hideLoading()})},Qc={select:(r,o,d)=>{const p=je(r,u.select),_=(W,ue,we)=>{const Ee=document.createElement("option");Ee.value=we,pe(Ee,ue),Ee.selected=er(we,d.inputValue),W.appendChild(Ee)};o.forEach(W=>{const ue=W[0],we=W[1];if(Array.isArray(we)){const Ee=document.createElement("optgroup");Ee.label=ue,Ee.disabled=!1,p.appendChild(Ee),we.forEach(Wt=>_(Ee,Wt[1],Wt[0]))}else _(p,we,ue)}),p.focus()},radio:(r,o,d)=>{const p=je(r,u.radio);o.forEach(W=>{const ue=W[0],we=W[1],Ee=document.createElement("input"),Wt=document.createElement("label");Ee.type="radio",Ee.name=u.radio,Ee.value=ue,er(ue,d.inputValue)&&(Ee.checked=!0);const Os=document.createElement("span");pe(Os,we),Os.className=u.label,Wt.appendChild(Ee),Wt.appendChild(Os),p.appendChild(Wt)});const _=p.querySelectorAll("input");_.length&&_[0].focus()}},_s=r=>{const o=[];return typeof Map<"u"&&r instanceof Map?r.forEach((d,p)=>{let _=d;typeof _=="object"&&(_=_s(_)),o.push([p,_])}):Object.keys(r).forEach(d=>{let p=r[d];typeof p=="object"&&(p=_s(p)),o.push([d,p])}),o},er=(r,o)=>o&&o.toString()===r.toString(),eu=r=>{const o=c.innerParams.get(r);r.disableButtons(),o.input?tr(r,"confirm"):Ps(r,!0)},tu=r=>{const o=c.innerParams.get(r);r.disableButtons(),o.returnInputValueOnDeny?tr(r,"deny"):Ts(r,!1)},nu=(r,o)=>{r.disableButtons(),o(zt.cancel)},tr=(r,o)=>{const d=c.innerParams.get(r);if(!d.input){E(`The "input" parameter is needed to be set when using returnInputValueOn${w(o)}`);return}const p=qc(r,d);d.inputValidator?su(r,p,o):r.getInput().checkValidity()?o==="deny"?Ts(r,p):Ps(r,p):(r.enableButtons(),r.showValidationMessage(d.validationMessage))},su=(r,o,d)=>{const p=c.innerParams.get(r);r.disableInput(),Promise.resolve().then(()=>P(p.inputValidator(o,p.validationMessage))).then(W=>{r.enableButtons(),r.enableInput(),W?r.showValidationMessage(W):d==="deny"?Ts(r,o):Ps(r,o)})},Ts=(r,o)=>{const d=c.innerParams.get(r||void 0);d.showLoaderOnDeny&&Ft(z()),d.preDeny?(r.isAwaitingPromise=!0,Promise.resolve().then(()=>P(d.preDeny(o,d.validationMessage))).then(_=>{_===!1?(r.hideLoading(),gn(r)):r.close({isDenied:!0,value:typeof _>"u"?o:_})}).catch(_=>sr(r||void 0,_))):r.close({isDenied:!0,value:o})},nr=(r,o)=>{r.close({isConfirmed:!0,value:o})},sr=(r,o)=>{r.rejectPromise(o)},Ps=(r,o)=>{const d=c.innerParams.get(r||void 0);d.showLoaderOnConfirm&&Ft(),d.preConfirm?(r.resetValidationMessage(),r.isAwaitingPromise=!0,Promise.resolve().then(()=>P(d.preConfirm(o,d.validationMessage))).then(_=>{Ce(F())||_===!1?(r.hideLoading(),gn(r)):nr(r,typeof _>"u"?o:_)}).catch(_=>sr(r||void 0,_))):nr(r,o)};function qn(){const r=c.innerParams.get(this);if(!r)return;const o=c.domCache.get(this);ve(o.loader),ne()?r.icon&&me($()):iu(o),_e([o.popup,o.actions],u.loading),o.popup.removeAttribute("aria-busy"),o.popup.removeAttribute("data-loading"),o.confirmButton.disabled=!1,o.denyButton.disabled=!1,o.cancelButton.disabled=!1}const iu=r=>{const o=r.popup.getElementsByClassName(r.loader.getAttribute("data-button-to-replace"));o.length?me(o[0],"inline-block"):Rt()&&ve(r.actions)};function ir(){const r=c.innerParams.get(this),o=c.domCache.get(this);return o?et(o.popup,r.input):null}function rr(r,o,d){const p=c.domCache.get(r);o.forEach(_=>{p[_].disabled=d})}function or(r,o){if(r)if(r.type==="radio"){const p=r.parentNode.parentNode.querySelectorAll("input");for(let _=0;_<p.length;_++)p[_].disabled=o}else r.disabled=o}function ar(){rr(this,["confirmButton","denyButton","cancelButton"],!1)}function lr(){rr(this,["confirmButton","denyButton","cancelButton"],!0)}function cr(){or(this.getInput(),!1)}function ur(){or(this.getInput(),!0)}function dr(r){const o=c.domCache.get(this),d=c.innerParams.get(this);pe(o.validationMessage,r),o.validationMessage.className=u["validation-message"],d.customClass&&d.customClass.validationMessage&&se(o.validationMessage,d.customClass.validationMessage),me(o.validationMessage);const p=this.getInput();p&&(p.setAttribute("aria-invalid",!0),p.setAttribute("aria-describedby",u["validation-message"]),cn(p),se(p,u.inputerror))}function hr(){const r=c.domCache.get(this);r.validationMessage&&ve(r.validationMessage);const o=this.getInput();o&&(o.removeAttribute("aria-invalid"),o.removeAttribute("aria-describedby"),_e(o,u.inputerror))}const Vt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ru=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ou={},au=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],fr=r=>Object.prototype.hasOwnProperty.call(Vt,r),pr=r=>ru.indexOf(r)!==-1,gr=r=>ou[r],lu=r=>{fr(r)||L(`Unknown parameter "${r}"`)},cu=r=>{au.includes(r)&&L(`The parameter "${r}" is incompatible with toasts`)},uu=r=>{const o=gr(r);o&&C(r,o)},du=r=>{r.backdrop===!1&&r.allowOutsideClick&&L('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const o in r)lu(o),r.toast&&cu(o),uu(o)};function mr(r){const o=M(),d=c.innerParams.get(this);if(!o||Ie(o,d.hideClass.popup)){L("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const p=hu(r),_=Object.assign({},d,p);Gi(this,_),c.innerParams.set(this,_),Object.defineProperties(this,{params:{value:Object.assign({},this.params,r),writable:!1,enumerable:!0}})}const hu=r=>{const o={};return Object.keys(r).forEach(d=>{pr(d)?o[d]=r[d]:L(`Invalid parameter to update: ${d}`)}),o};function vr(){const r=c.domCache.get(this),o=c.innerParams.get(this);if(!o){wr(this);return}r.popup&&s.swalCloseEventFinishedCallback&&(s.swalCloseEventFinishedCallback(),delete s.swalCloseEventFinishedCallback),typeof o.didDestroy=="function"&&o.didDestroy(),fu(this)}const fu=r=>{wr(r),delete r.params,delete s.keydownHandler,delete s.keydownTarget,delete s.currentInstance},wr=r=>{r.isAwaitingPromise?(Ms(c,r),r.isAwaitingPromise=!0):(Ms(pn,r),Ms(c,r),delete r.isAwaitingPromise,delete r.disableButtons,delete r.enableButtons,delete r.getInput,delete r.disableInput,delete r.enableInput,delete r.hideLoading,delete r.disableLoading,delete r.showValidationMessage,delete r.resetValidationMessage,delete r.close,delete r.closePopup,delete r.closeModal,delete r.closeToast,delete r.rejectPromise,delete r.update,delete r._destroy)},Ms=(r,o)=>{for(const d in r)r[d].delete(o)};var pu=Object.freeze({__proto__:null,_destroy:vr,close:st,closeModal:st,closePopup:st,closeToast:st,disableButtons:lr,disableInput:ur,disableLoading:qn,enableButtons:ar,enableInput:cr,getInput:ir,handleAwaitingPromise:gn,hideLoading:qn,rejectPromise:Xi,resetValidationMessage:hr,showValidationMessage:dr,update:mr});const gu=(r,o,d)=>{c.innerParams.get(r).toast?mu(r,o,d):(wu(o),bu(o),yu(r,o,d))},mu=(r,o,d)=>{o.popup.onclick=()=>{const p=c.innerParams.get(r);p&&(vu(p)||p.timer||p.input)||d(zt.close)}},vu=r=>r.showConfirmButton||r.showDenyButton||r.showCancelButton||r.showCloseButton;let Kn=!1;const wu=r=>{r.popup.onmousedown=()=>{r.container.onmouseup=function(o){r.container.onmouseup=void 0,o.target===r.container&&(Kn=!0)}}},bu=r=>{r.container.onmousedown=()=>{r.popup.onmouseup=function(o){r.popup.onmouseup=void 0,(o.target===r.popup||r.popup.contains(o.target))&&(Kn=!0)}}},yu=(r,o,d)=>{o.container.onclick=p=>{const _=c.innerParams.get(r);if(Kn){Kn=!1;return}p.target===o.container&&x(_.allowOutsideClick)&&d(zt.backdrop)}},xu=r=>typeof r=="object"&&r.jquery,br=r=>r instanceof Element||xu(r),Lu=r=>{const o={};return typeof r[0]=="object"&&!br(r[0])?Object.assign(o,r[0]):["title","html","icon"].forEach((d,p)=>{const _=r[p];typeof _=="string"||br(_)?o[d]=_:_!==void 0&&E(`Unexpected type of ${d}! Expected "string" or "Element", got ${typeof _}`)}),o};function Eu(){const r=this;for(var o=arguments.length,d=new Array(o),p=0;p<o;p++)d[p]=arguments[p];return new r(...d)}function Cu(r){class o extends this{_main(p,_){return super._main(p,Object.assign({},r,_))}}return o}const ku=()=>s.timeout&&s.timeout.getTimerLeft(),yr=()=>{if(s.timeout)return Dt(),s.timeout.stop()},xr=()=>{if(s.timeout){const r=s.timeout.start();return $t(r),r}},Iu=()=>{const r=s.timeout;return r&&(r.running?yr():xr())},Su=r=>{if(s.timeout){const o=s.timeout.increase(r);return $t(o,!0),o}},_u=()=>!!(s.timeout&&s.timeout.isRunning());let Lr=!1;const As={};function Tu(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";As[r]=this,Lr||(document.body.addEventListener("click",Pu),Lr=!0)}const Pu=r=>{for(let o=r.target;o&&o!==document;o=o.parentNode)for(const d in As){const p=o.getAttribute(d);if(p){As[d].fire({template:p});return}}};var Mu=Object.freeze({__proto__:null,argsToParams:Lu,bindClickHandler:Tu,clickCancel:xc,clickConfirm:qi,clickDeny:yc,enableLoading:Ft,fire:Eu,getActions:j,getCancelButton:H,getCloseButton:le,getConfirmButton:B,getContainer:A,getDenyButton:z,getFocusableElements:V,getFooter:O,getHtmlContainer:U,getIcon:$,getIconContent:N,getImage:J,getInputLabel:re,getLoader:X,getPopup:M,getProgressSteps:q,getTimerLeft:ku,getTimerProgressBar:de,getTitle:G,getValidationMessage:F,increaseTimer:Su,isDeprecatedParameter:gr,isLoading:Ae,isTimerRunning:_u,isUpdatableParameter:pr,isValidParameter:fr,isVisible:bc,mixin:Cu,resumeTimer:xr,showLoading:Ft,stopTimer:yr,toggleTimer:Iu});class Au{constructor(o,d){this.callback=o,this.remaining=d,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(o){const d=this.running;return d&&this.stop(),this.remaining+=o,d&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Er=["swal-title","swal-html","swal-footer"],Ou=r=>{const o=typeof r.template=="string"?document.querySelector(r.template):r.template;if(!o)return{};const d=o.content;return zu(d),Object.assign(Ru(d),$u(d),Du(d),Bu(d),ju(d),Nu(d),Uu(d,Er))},Ru=r=>{const o={};return Array.from(r.querySelectorAll("swal-param")).forEach(p=>{xt(p,["name","value"]);const _=p.getAttribute("name"),W=p.getAttribute("value");typeof Vt[_]=="boolean"?o[_]=W!=="false":typeof Vt[_]=="object"?o[_]=JSON.parse(W):o[_]=W}),o},$u=r=>{const o={};return Array.from(r.querySelectorAll("swal-function-param")).forEach(p=>{const _=p.getAttribute("name"),W=p.getAttribute("value");o[_]=new Function(`return ${W}`)()}),o},Du=r=>{const o={};return Array.from(r.querySelectorAll("swal-button")).forEach(p=>{xt(p,["type","color","aria-label"]);const _=p.getAttribute("type");o[`${_}ButtonText`]=p.innerHTML,o[`show${w(_)}Button`]=!0,p.hasAttribute("color")&&(o[`${_}ButtonColor`]=p.getAttribute("color")),p.hasAttribute("aria-label")&&(o[`${_}ButtonAriaLabel`]=p.getAttribute("aria-label"))}),o},Bu=r=>{const o={},d=r.querySelector("swal-image");return d&&(xt(d,["src","width","height","alt"]),d.hasAttribute("src")&&(o.imageUrl=d.getAttribute("src")),d.hasAttribute("width")&&(o.imageWidth=d.getAttribute("width")),d.hasAttribute("height")&&(o.imageHeight=d.getAttribute("height")),d.hasAttribute("alt")&&(o.imageAlt=d.getAttribute("alt"))),o},ju=r=>{const o={},d=r.querySelector("swal-icon");return d&&(xt(d,["type","color"]),d.hasAttribute("type")&&(o.icon=d.getAttribute("type")),d.hasAttribute("color")&&(o.iconColor=d.getAttribute("color")),o.iconHtml=d.innerHTML),o},Nu=r=>{const o={},d=r.querySelector("swal-input");d&&(xt(d,["type","label","placeholder","value"]),o.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(o.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(o.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(o.inputValue=d.getAttribute("value")));const p=Array.from(r.querySelectorAll("swal-input-option"));return p.length&&(o.inputOptions={},p.forEach(_=>{xt(_,["value"]);const W=_.getAttribute("value"),ue=_.innerHTML;o.inputOptions[W]=ue})),o},Uu=(r,o)=>{const d={};for(const p in o){const _=o[p],W=r.querySelector(_);W&&(xt(W,[]),d[_.replace(/^swal-/,"")]=W.innerHTML.trim())}return d},zu=r=>{const o=Er.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(r.children).forEach(d=>{const p=d.tagName.toLowerCase();o.includes(p)||L(`Unrecognized element <${p}>`)})},xt=(r,o)=>{Array.from(r.attributes).forEach(d=>{o.indexOf(d.name)===-1&&L([`Unrecognized attribute "${d.name}" on <${r.tagName.toLowerCase()}>.`,`${o.length?`Allowed attributes are: ${o.join(", ")}`:"To set the value, use HTML within the element."}`])})},Cr=10,Hu=r=>{const o=A(),d=M();typeof r.willOpen=="function"&&r.willOpen(d);const _=window.getComputedStyle(document.body).overflowY;Wu(o,d,r),setTimeout(()=>{Fu(o,d)},Cr),oe()&&(Vu(o,r.scrollbarPadding,_),Tc()),!ne()&&!s.previousActiveElement&&(s.previousActiveElement=document.activeElement),typeof r.didOpen=="function"&&setTimeout(()=>r.didOpen(d)),_e(o,u["no-transition"])},kr=r=>{const o=M();if(r.target!==o)return;const d=A();o.removeEventListener(nt,kr),d.style.overflowY="auto"},Fu=(r,o)=>{nt&&yt(o)?(r.style.overflowY="hidden",o.addEventListener(nt,kr)):r.style.overflowY="auto"},Vu=(r,o,d)=>{Pc(),o&&d!=="hidden"&&jc(),setTimeout(()=>{r.scrollTop=0})},Wu=(r,o,d)=>{se(r,d.showClass.backdrop),o.style.setProperty("opacity","0","important"),me(o,"grid"),setTimeout(()=>{se(o,d.showClass.popup),o.style.removeProperty("opacity")},Cr),se([document.documentElement,document.body],u.shown),d.heightAuto&&d.backdrop&&!d.toast&&se([document.documentElement,document.body],u["height-auto"])};var Ir={email:(r,o)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(r)?Promise.resolve():Promise.resolve(o||"Invalid email address"),url:(r,o)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(r)?Promise.resolve():Promise.resolve(o||"Invalid URL")};function Gu(r){r.inputValidator||Object.keys(Ir).forEach(o=>{r.input===o&&(r.inputValidator=Ir[o])})}function qu(r){(!r.target||typeof r.target=="string"&&!document.querySelector(r.target)||typeof r.target!="string"&&!r.target.appendChild)&&(L('Target parameter is not valid, defaulting to "body"'),r.target="body")}function Ku(r){Gu(r),r.showLoaderOnConfirm&&!r.preConfirm&&L(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),qu(r),typeof r.title=="string"&&(r.title=r.title.split(`
`).join("<br />")),Fn(r)}let Ue;class ge{constructor(){if(typeof window>"u")return;Ue=this;for(var o=arguments.length,d=new Array(o),p=0;p<o;p++)d[p]=arguments[p];const _=Object.freeze(this.constructor.argsToParams(d));this.params=_,this.isAwaitingPromise=!1;const W=Ue._main(Ue.params);c.promise.set(this,W)}_main(o){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};du(Object.assign({},d,o)),s.currentInstance&&(s.currentInstance._destroy(),oe()&&Ji()),s.currentInstance=Ue;const p=Ju(o,d);Ku(p),Object.freeze(p),s.timeout&&(s.timeout.stop(),delete s.timeout),clearTimeout(s.restoreFocusTimeout);const _=Yu(Ue);return Gi(Ue,p),c.innerParams.set(Ue,p),Zu(Ue,_,p)}then(o){return c.promise.get(this).then(o)}finally(o){return c.promise.get(this).finally(o)}}const Zu=(r,o,d)=>new Promise((p,_)=>{const W=ue=>{r.close({isDismissed:!0,dismiss:ue})};pn.swalPromiseResolve.set(r,p),pn.swalPromiseReject.set(r,_),o.confirmButton.onclick=()=>{eu(r)},o.denyButton.onclick=()=>{tu(r)},o.cancelButton.onclick=()=>{nu(r,W)},o.closeButton.onclick=()=>{W(zt.close)},gu(r,o,W),Lc(r,s,d,W),Gc(r,d),Hu(d),Xu(s,d,W),Qu(o,d),setTimeout(()=>{o.container.scrollTop=0})}),Ju=(r,o)=>{const d=Ou(r),p=Object.assign({},Vt,o,d,r);return p.showClass=Object.assign({},Vt.showClass,p.showClass),p.hideClass=Object.assign({},Vt.hideClass,p.hideClass),p},Yu=r=>{const o={popup:M(),container:A(),actions:j(),confirmButton:B(),denyButton:z(),cancelButton:H(),loader:X(),closeButton:le(),validationMessage:F(),progressSteps:q()};return c.domCache.set(r,o),o},Xu=(r,o,d)=>{const p=de();ve(p),o.timer&&(r.timeout=new Au(()=>{d("timer"),delete r.timeout},o.timer),o.timerProgressBar&&(me(p),Se(p,o,"timerProgressBar"),setTimeout(()=>{r.timeout&&r.timeout.running&&$t(o.timer)})))},Qu=(r,o)=>{if(!o.toast){if(!x(o.allowEnterKey)){td();return}ed(r,o)||Ss(-1,1)}},ed=(r,o)=>o.focusDeny&&Ce(r.denyButton)?(r.denyButton.focus(),!0):o.focusCancel&&Ce(r.cancelButton)?(r.cancelButton.focus(),!0):o.focusConfirm&&Ce(r.confirmButton)?(r.confirmButton.focus(),!0):!1,td=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const r=new Date,o=localStorage.getItem("swal-initiation");o?(r.getTime()-Date.parse(o))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const d=document.createElement("audio");d.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",d.loop=!0,document.body.appendChild(d),setTimeout(()=>{d.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${r}`)}ge.prototype.disableButtons=lr,ge.prototype.enableButtons=ar,ge.prototype.getInput=ir,ge.prototype.disableInput=ur,ge.prototype.enableInput=cr,ge.prototype.hideLoading=qn,ge.prototype.disableLoading=qn,ge.prototype.showValidationMessage=dr,ge.prototype.resetValidationMessage=hr,ge.prototype.close=st,ge.prototype.closePopup=st,ge.prototype.closeModal=st,ge.prototype.closeToast=st,ge.prototype.rejectPromise=Xi,ge.prototype.update=mr,ge.prototype._destroy=vr,Object.assign(ge,Mu),Object.keys(pu).forEach(r=>{ge[r]=function(){return Ue&&Ue[r]?Ue[r](...arguments):null}}),ge.DismissReason=zt,ge.version="11.7.12";const Zn=ge;return Zn.default=Zn,Zn}),typeof it<"u"&&it.Sweetalert2&&(it.swal=it.sweetAlert=it.Swal=it.SweetAlert=it.Sweetalert2),typeof document<"u"&&function(n,s){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=s);else try{i.innerHTML=s}catch{i.innerText=s}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}')})(fa);var dd=fa.exports;const hd=ha(dd),pa="uid",vs=t=>{localStorage.setItem(pa,t)},fd=()=>localStorage.getItem(pa);function pd(t,e){var n=Math.pow,s=Math.PI,i=Math.sin,a=Math.cos,c=Math.tan,f=6378137,h=6356752314245e-6,u=121*s/180,g=.9999,m=25e4,y=0,w=n(1-n(h,2)/n(f,2),.5);t-=m,e-=y;var L=e/g,E=L/(f*(1-n(w,2)/4-3*n(w,4)/64-5*n(w,6)/256)),k=(1-n(1-n(w,2),.5))/(1+n(1-n(w,2),.5)),S=3*k/2-27*n(k,3)/32,C=21*n(k,2)/16-55*n(k,4)/32,x=151*n(k,3)/96,b=1097*n(k,4)/512,P=E+S*i(2*E)+C*i(4*E)+x*i(6*E)+b*i(8*E),T=n(w*f/h,2),A=n(T*a(P),2),R=n(c(P),2),I=f*(1-n(w,2))/n(1-n(w,2)*n(i(P),2),3/2),M=f/n(1-n(w,2)*n(i(P),2),.5),$=t/(M*g),N=M*c(P)/I,G=n($,2)/2,U=(5+3*R+10*A-4*n(A,2)-9*T)*n($,4)/24,J=(61+90*R+298*A+45*n(R,2)-3*n(A,2)-252*T)*n($,6)/720,q=P-N*(G-U+J),F=$,B=(1+2*R+A)*n($,3)/6,H=(5-2*A+28*R-3*n(A,2)+8*T+24*n(R,2))*n($,5)/120,z=u+(F-B+H)/a(P);return q=q*180/s,z=z*180/s,{lat:q,lng:z}}const Rs={strokeOpacity:.5,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,visible:!0},$s={closeOptions:{...Rs,zIndex:3,fillOpacity:.05,strokeColor:"#8BC34A",fillColor:"#8BC34A"},middleOptions:{...Rs,zIndex:2,fillOpacity:.05,strokeColor:"#FBC02D",fillColor:"#FBC02D"},farOptions:{...Rs,zIndex:1,fillOpacity:.05,strokeColor:"#FF5252",fillColor:"#FF5252"}},ga="save-park";function ma(t){window.localStorage.setItem(ga,JSON.stringify(t))}const va=()=>JSON.parse(window.localStorage.getItem(ga)),ws=hd.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,icon:"success"}),Ot=function(){window.dataLayer.push(arguments)},_r={light:{background_main:"#fff",background_secondary:"#E7E9EB",background_active:"#04AA6D",background_hover:"#cccccc",background_error:"#ffc0c7",background_searchbox:"#fff",font_main:"#282a35",font_active:"#ffffff",font_secondary_blk:"#282D35",font_card_main:"#282a35",font_card_secondary:"#115E5E",border_main:"#D6D6D6",button_hover:"#059862",mapStyle:{styles:[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}]}},dark:{background_main:"#1d2a35",background_secondary:"#38444d",background_active:"#04AA6D",background_hover:"#38444d",background_error:"#ffc0c7",background_searchbox:"#38444d",font_main:"#ddd",font_active:"#ffffff",font_secondary_blk:"#282D35",font_card_main:"#75A598",font_card_secondary:"#ddd",border_main:"#3C5350",button_hover:"#03744b",mapStyle:{styles:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]}}},Te=l.createContext(null),wa=({children:t})=>{const[e,n]=l.useState(!0),s=()=>{n(!e),Ot("event","switch_theme",{content_type:"switchTheme"})},i=e?_r.dark:_r.light,a={dark:e,theme:i,toggleTheme:s};return v.jsx(Te.Provider,{value:a,children:t})};wa.propTypes={children:ee.node};const Le="@media screen and (min-width: 768px)",gd=D.label`
  width: 68px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;
  cursor: pointer;
  ${Le} {
    width: 90px;
    min-height: 34px;
    font-size: 12px;
    font-weight: bold;
  }
`,md=D.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${t=>t.$color.border_main};
  position: absolute;
  border-radius: 50px;
`,vd=D.div`
  width: 100%;
  text-align: center;
  color: ${t=>t.$dark?t.$color.font_main:t.$color.font_active};
`,wd=D.div`
  width: 100%;
  text-align: center;
  color: ${t=>t.$dark?t.$color.font_active:t.$color.font_main};
`,ba=D.div`
  position: absolute;
  width: calc(50% - 2px);
  top: 2px;
  bottom: 2px;
  right: 2px;
  transition: right 0.25s ease-out;
  background: ${t=>t.$color.background_active};
  border-radius: 50px;
  z-index: -1;
`,bd=D.input`
  &:checked + ${ba} {
    right: 50%;
    transition: right 0.25s ease-out;
  }
`;function yd(){const{dark:t,theme:e,toggleTheme:n}=l.useContext(Te);return v.jsxs(gd,{htmlFor:"theme-toggle",children:[v.jsx(md,{$color:e}),v.jsx(bd,{id:"theme-toggle",hidden:!0,type:"checkbox",onClick:n,$color:e}),v.jsx(ba,{$color:e,$dark:t}),v.jsx(vd,{$color:e,$dark:t,children:"Light"}),v.jsx(wd,{$color:e,$dark:t,children:"Dark"})]})}const _n=l.createContext(null),xd=D.div`
  width: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ld=D.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid rgba(0, 0, 0, 0);
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;function St({borderColor:t,borderTopColor:e,width:n,height:s}){return v.jsx(xd,{style:{width:n,height:s},children:v.jsx(Ld,{style:{borderColor:t,borderTopColor:e}})})}St.propTypes={borderColor:ee.string,borderTopColor:ee.string,width:ee.string,height:ee.string};const Ed=D.header`
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
  background: ${t=>t.$color.background_main};
  ${Le} {
    display: grid;
    grid-template-columns: 1fr auto minmax(400px, 3fr) 1fr;
  }
`,Cd=D.div`
  width: 100px;
  position: absolute;
  top: 50%;
  left: 1.5%;
  transform: translateY(-50%);
  ${Le} {
    all: unset;
  }
`,kd=D.div`
  display: flex;
  align-items: center;
  ${Le} {
    grid-column: 2/3;
  }
`,Id=D.h1`
  margin: 0 10px;
  font-size: 24px;
  font-weight: normal;
`,qt=D(rn)`
  font-size: 18px;
  font-weight: normal;
  color: ${t=>t.$color.font_main};
  text-decoration: none;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  &:hover {
    background: ${t=>t.$pathActive?"":t.$color.background_hover};
  }
  &,
  &:focus {
    ${t=>t.$pathActive&&`
      background: ${t.$color.background_active};
      color: ${t.$color.font_active};
    `}
  }
  ${Le} {
    padding: 10px 15px;
    margin-right: 10px;
    opacity: 1;
    border-radius: 8px;
  }
`,Sd=D.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: ${t=>t.$color.background_main};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
  ${Le} {
    all: unset;
    grid-column: 3/4;
    display: flex;
    justify-content: end;
  }
  ${t=>t.$checkboxStatus&&`
    transform: scale(1, 1);
  `}

  ${qt} {
    ${t=>t.$checkboxStatus&&`
      transition: opacity 0.2s ease-out 0.25s;
      opacity: 1;
    `}
  }
`,_d=D.input``,Td=D.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5%;
  display: flex;
  align-items: center;
  ${Le} {
    display: none;
  }
`,Pd=D.span`
  width: 30px;
  height: 3px;
  background: ${t=>t.$color.font_main};
  position: relative;
  &::before,
  &::after {
    width: 30px;
    height: 3px;
    background: ${t=>t.$color.font_main};
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
`;function ya({isLoading:t}){const{theme:e}=l.useContext(Te),{user:n,setUser:s}=l.useContext(_n);let i=mi();const[a,c]=l.useState(!1),f=g=>{c(g.target.checked)},h=()=>{window.screen.width>=768||c(!a)},u=()=>{s(""),vs(""),ws.fire({title:"登出成功"})};return v.jsxs(Ed,{$color:e,children:[v.jsxs(kd,{children:[v.jsx("img",{src:ud,alt:"website-logo",width:"30px",height:"30px"}),v.jsx(Id,{children:"車位即時查"}),v.jsx(Cd,{children:v.jsx(yd,{})})]}),v.jsx(_d,{hidden:!0,type:"checkbox",className:"navbar-toggle",id:"navbar-toggle",checked:a,onChange:f}),v.jsxs(Sd,{$checkboxStatus:a,onClick:h,$color:e,children:[v.jsx(qt,{to:"/",$pathActive:i.pathname==="/",$color:e,children:"地圖"}),t&&v.jsx(St,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)"}),!t&&v.jsxs(v.Fragment,{children:[n&&v.jsxs(v.Fragment,{children:[v.jsx(qt,{to:"/save",$pathActive:i.pathname==="/save",$color:e,children:"儲存"}),v.jsx(qt,{to:"/",$color:e,onClick:u,children:"登出"})]}),!n&&v.jsxs(v.Fragment,{children:[(i.pathname==="/login"||i.pathname==="/")&&v.jsx(qt,{to:"/login",$pathActive:i.pathname==="/login",$color:e,children:"登入"}),i.pathname==="/signup"&&v.jsx(qt,{to:"/signup",$pathActive:i.pathname==="/signup",$color:e,children:"註冊"})]})]})]}),v.jsx(Td,{htmlFor:"navbar-toggle",className:"navbar-toggle-label",children:v.jsx(Pd,{$color:e})})]})}ya.propTypes={isLoading:ee.bool};var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ad=function(t,e,n,s,i,a,c,f){if(!t){var h;if(e===void 0)h=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,s,i,a,c,f],g=0;h=new Error(e.replace(/%s/g,function(){return u[g++]})),h.name="Invariant Violation"}throw h.framesToPop=1,h}},be=Ad;const Q=l.createContext(null);function Od(){be(!!l.useContext,"useGoogleMap is React hook and requires React version 16.8+");const t=l.useContext(Q);return be(!!t,"useGoogleMap needs a GoogleMap available up in the tree"),t}function Rd(t,e,n){return Object.keys(t).reduce(function(i,a){return e(i,t[a],a)},n)}function $d(t,e){Object.keys(t).forEach(n=>e(t[n],n))}function Dd(t,e,n,s){const i={};return $d(t,(c,f)=>{const h=n[f];h!==e[f]&&(i[f]=h,c(s,h))}),i}function Bd(t,e,n){return Rd(n,function(a,c,f){return typeof t[f]=="function"&&a.push(google.maps.event.addListener(e,c,t[f])),a},[])}function jd(t){google.maps.event.removeListener(t)}function ie(t=[]){t.forEach(jd)}function te({updaterMap:t,eventMap:e,prevProps:n,nextProps:s,instance:i}){const a=Bd(s,i,e);return Dd(t,n,s,i),a}const Tr={onDblClick:"dblclick",onDragEnd:"dragend",onDragStart:"dragstart",onMapTypeIdChanged:"maptypeid_changed",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseDown:"mousedown",onMouseUp:"mouseup",onRightClick:"rightclick",onTilesLoaded:"tilesloaded",onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onDrag:"drag",onHeadingChanged:"heading_changed",onIdle:"idle",onProjectionChanged:"projection_changed",onResize:"resize",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed"},Pr={extraMapTypes(t,e){e.forEach(function(s,i){t.mapTypes.set(String(i),s)})},center(t,e){t.setCenter(e)},clickableIcons(t,e){t.setClickableIcons(e)},heading(t,e){t.setHeading(e)},mapTypeId(t,e){t.setMapTypeId(e)},options(t,e){t.setOptions(e)},streetView(t,e){t.setStreetView(e)},tilt(t,e){t.setTilt(e)},zoom(t,e){t.setZoom(e)}};function Nd({children:t,options:e,id:n,mapContainerStyle:s,mapContainerClassName:i,center:a,onClick:c,onDblClick:f,onDrag:h,onDragEnd:u,onDragStart:g,onMouseMove:m,onMouseOut:y,onMouseOver:w,onMouseDown:L,onMouseUp:E,onRightClick:k,onCenterChanged:S,onLoad:C,onUnmount:x}){const[b,P]=l.useState(null),T=l.useRef(null),[A,R]=l.useState(null),[I,M]=l.useState(null),[$,N]=l.useState(null),[G,U]=l.useState(null),[J,q]=l.useState(null),[F,B]=l.useState(null),[H,z]=l.useState(null),[re,X]=l.useState(null),[j,O]=l.useState(null),[de,le]=l.useState(null),[Y,V]=l.useState(null),[oe,ne]=l.useState(null);return l.useEffect(()=>{e&&b!==null&&b.setOptions(e)},[b,e]),l.useEffect(()=>{b!==null&&typeof a<"u"&&b.setCenter(a)},[b,a]),l.useEffect(()=>{b&&f&&(I!==null&&google.maps.event.removeListener(I),M(google.maps.event.addListener(b,"dblclick",f)))},[f]),l.useEffect(()=>{b&&u&&($!==null&&google.maps.event.removeListener($),N(google.maps.event.addListener(b,"dragend",u)))},[u]),l.useEffect(()=>{b&&g&&(G!==null&&google.maps.event.removeListener(G),U(google.maps.event.addListener(b,"dragstart",g)))},[g]),l.useEffect(()=>{b&&L&&(J!==null&&google.maps.event.removeListener(J),q(google.maps.event.addListener(b,"mousedown",L)))},[L]),l.useEffect(()=>{b&&m&&(F!==null&&google.maps.event.removeListener(F),B(google.maps.event.addListener(b,"mousemove",m)))},[m]),l.useEffect(()=>{b&&y&&(H!==null&&google.maps.event.removeListener(H),z(google.maps.event.addListener(b,"mouseout",y)))},[y]),l.useEffect(()=>{b&&w&&(re!==null&&google.maps.event.removeListener(re),X(google.maps.event.addListener(b,"mouseover",w)))},[w]),l.useEffect(()=>{b&&E&&(j!==null&&google.maps.event.removeListener(j),O(google.maps.event.addListener(b,"mouseup",E)))},[E]),l.useEffect(()=>{b&&k&&(de!==null&&google.maps.event.removeListener(de),le(google.maps.event.addListener(b,"rightclick",k)))},[k]),l.useEffect(()=>{b&&c&&(Y!==null&&google.maps.event.removeListener(Y),V(google.maps.event.addListener(b,"click",c)))},[c]),l.useEffect(()=>{b&&h&&(oe!==null&&google.maps.event.removeListener(oe),ne(google.maps.event.addListener(b,"drag",h)))},[h]),l.useEffect(()=>{b&&S&&(A!==null&&google.maps.event.removeListener(A),R(google.maps.event.addListener(b,"center_changed",S)))},[c]),l.useEffect(()=>{const Ae=T.current===null?null:new google.maps.Map(T.current,e);return P(Ae),Ae!==null&&C&&C(Ae),()=>{Ae!==null&&x&&x(Ae)}},[]),v.jsx("div",Object.assign({id:n,ref:T,style:s,className:i},{children:v.jsx(Q.Provider,Object.assign({value:b},{children:b!==null?t:v.jsx(v.Fragment,{})}))}))}l.memo(Nd);class Ud extends l.PureComponent{constructor(){super(...arguments),this.state={map:null},this.registeredEvents=[],this.mapRef=null,this.getInstance=()=>this.mapRef===null?null:new google.maps.Map(this.mapRef,this.props.options),this.panTo=e=>{const n=this.getInstance();n&&n.panTo(e)},this.setMapCallback=()=>{this.state.map!==null&&this.props.onLoad&&this.props.onLoad(this.state.map)},this.getRef=e=>{this.mapRef=e}}componentDidMount(){const e=this.getInstance();this.registeredEvents=te({updaterMap:Pr,eventMap:Tr,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{map:e}},this.setMapCallback)}componentDidUpdate(e){this.state.map!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Pr,eventMap:Tr,prevProps:e,nextProps:this.props,instance:this.state.map}))}componentWillUnmount(){this.state.map!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.map),ie(this.registeredEvents))}render(){return v.jsx("div",Object.assign({id:this.props.id,ref:this.getRef,style:this.props.mapContainerStyle,className:this.props.mapContainerClassName},{children:v.jsx(Q.Provider,Object.assign({value:this.state.map},{children:this.state.map!==null?this.props.children:v.jsx(v.Fragment,{})}))}))}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function wi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function zd(t,e,n,s){function i(a){return a instanceof n?a:new n(function(c){c(a)})}return new(n||(n=Promise))(function(a,c){function f(g){try{u(s.next(g))}catch(m){c(m)}}function h(g){try{u(s.throw(g))}catch(m){c(m)}}function u(g){g.done?a(g.value):i(g.value).then(f,h)}u((s=s.apply(t,e||[])).next())})}const Et=typeof document<"u";function xa({url:t,id:e,nonce:n}){return Et?new Promise(function(i,a){const c=document.getElementById(e),f=window;if(c){const u=c.getAttribute("data-state");if(c.src===t&&u!=="error"){if(u==="ready")return i(e);{const g=f.initMap,m=c.onerror;f.initMap=function(){g&&g(),i(e)},c.onerror=function(y){m&&m(y),a(y)};return}}else c.remove()}const h=document.createElement("script");h.type="text/javascript",h.src=t,h.id=e,h.async=!0,h.nonce=n,h.onerror=function(g){h.setAttribute("data-state","error"),a(g)},f.initMap=function(){h.setAttribute("data-state","ready"),i(e)},document.head.appendChild(h)}).catch(s=>{throw console.error("injectScript error: ",s),s}):Promise.reject(new Error("document is undefined"))}function Mr(t){const e=t.href;return e&&(e.indexOf("https://fonts.googleapis.com/css?family=Roboto")===0||e.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text")===0)?!0:t.tagName.toLowerCase()==="style"&&t.styleSheet&&t.styleSheet.cssText&&t.styleSheet.cssText.replace(`\r
`,"").indexOf(".gm-style")===0?(t.styleSheet.cssText="",!0):t.tagName.toLowerCase()==="style"&&t.innerHTML&&t.innerHTML.replace(`\r
`,"").indexOf(".gm-style")===0?(t.innerHTML="",!0):t.tagName.toLowerCase()==="style"&&!t.styleSheet&&!t.innerHTML}function La(){const t=document.getElementsByTagName("head")[0],e=t.insertBefore.bind(t);t.insertBefore=function(i,a){Mr(i)||Reflect.apply(e,t,[i,a])};const n=t.appendChild.bind(t);t.appendChild=function(i){Mr(i)||Reflect.apply(n,t,[i])}}function Ea({googleMapsApiKey:t,googleMapsClientId:e,version:n="weekly",language:s,region:i,libraries:a,channel:c,mapIds:f,authReferrerPolicy:h}){const u=[];return be(t&&e||!(t&&e),"You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."),t?u.push(`key=${t}`):e&&u.push(`client=${e}`),n&&u.push(`v=${n}`),s&&u.push(`language=${s}`),i&&u.push(`region=${i}`),a&&a.length&&u.push(`libraries=${a.sort().join(",")}`),c&&u.push(`channel=${c}`),f&&f.length&&u.push(`map_ids=${f.join(",")}`),h&&u.push(`auth_referrer_policy=${h}`),u.push("callback=initMap"),`https://maps.googleapis.com/maps/api/js?${u.join("&")}`}let mn=!1;function Ca(){return v.jsx("div",{children:"Loading..."})}const ti={id:"script-loader",version:"weekly"};class Hd extends l.PureComponent{constructor(){super(...arguments),this.check=l.createRef(),this.state={loaded:!1},this.cleanupCallback=()=>{delete window.google.maps,this.injectScript()},this.isCleaningUp=()=>zd(this,void 0,void 0,function*(){function e(n){if(!mn)n();else if(Et){const s=window.setInterval(function(){mn||(window.clearInterval(s),n())},1)}}return new Promise(e)}),this.cleanup=()=>{mn=!0;const e=document.getElementById(this.props.id);e&&e.parentNode&&e.parentNode.removeChild(e),Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(s){return typeof s.src=="string"&&s.src.includes("maps.googleapis")}).forEach(function(s){s.parentNode&&s.parentNode.removeChild(s)}),Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(s){return s.href==="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans"}).forEach(function(s){s.parentNode&&s.parentNode.removeChild(s)}),Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(s){return s.innerText!==void 0&&s.innerText.length>0&&s.innerText.includes(".gm-")}).forEach(function(s){s.parentNode&&s.parentNode.removeChild(s)})},this.injectScript=()=>{this.props.preventGoogleFontsLoading&&La(),be(!!this.props.id,'LoadScript requires "id" prop to be a string: %s',this.props.id);const e={id:this.props.id,nonce:this.props.nonce,url:Ea(this.props)};xa(e).then(()=>{this.props.onLoad&&this.props.onLoad(),this.setState(function(){return{loaded:!0}})}).catch(n=>{this.props.onError&&this.props.onError(n),console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${this.props.googleMapsApiKey||"-"}) or Client ID (${this.props.googleMapsClientId||"-"}) to <LoadScript />
          Otherwise it is a Network issue.
        `)})}}componentDidMount(){if(Et){if(window.google&&window.google.maps&&!mn){console.error("google api is already presented");return}this.isCleaningUp().then(this.injectScript).catch(function(n){console.error("Error at injecting script after cleaning up: ",n)})}}componentDidUpdate(e){this.props.libraries!==e.libraries&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),Et&&e.language!==this.props.language&&(this.cleanup(),this.setState(function(){return{loaded:!1}},this.cleanupCallback))}componentWillUnmount(){if(Et){this.cleanup();const e=()=>{this.check.current||(delete window.google,mn=!1)};window.setTimeout(e,1),this.props.onUnmount&&this.props.onUnmount()}}render(){return v.jsxs(v.Fragment,{children:[v.jsx("div",{ref:this.check}),this.state.loaded?this.props.children:this.props.loadingElement||v.jsx(Ca,{})]})}}Hd.defaultProps=ti;let Ar;function ka({id:t=ti.id,version:e=ti.version,nonce:n,googleMapsApiKey:s,googleMapsClientId:i,language:a,region:c,libraries:f,preventGoogleFontsLoading:h,channel:u,mapIds:g,authReferrerPolicy:m}){const y=l.useRef(!1),[w,L]=l.useState(!1),[E,k]=l.useState(void 0);l.useEffect(function(){return y.current=!0,()=>{y.current=!1}},[]),l.useEffect(function(){Et&&h&&La()},[h]),l.useEffect(function(){w&&be(!!window.google,"useLoadScript was marked as loaded, but window.google is not present. Something went wrong.")},[w]);const S=Ea({version:e,googleMapsApiKey:s,googleMapsClientId:i,language:a,region:c,libraries:f,channel:u,mapIds:g,authReferrerPolicy:m});l.useEffect(function(){if(!Et)return;function b(){y.current&&(L(!0),Ar=S)}if(window.google&&window.google.maps&&Ar===S){b();return}xa({id:t,url:S,nonce:n}).then(b).catch(function(T){y.current&&k(T),console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${s||"-"}) or Client ID (${i||"-"})
        Otherwise it is a Network issue.
      `),console.error(T)})},[t,S,n]);const C=l.useRef();return l.useEffect(function(){C.current&&f!==C.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),C.current=f},[f]),{isLoaded:w,loadError:E,url:S}}const Fd=v.jsx(Ca,{});function Vd(t){var{loadingElement:e,onLoad:n,onError:s,onUnmount:i,children:a}=t,c=wi(t,["loadingElement","onLoad","onError","onUnmount","children"]);const{isLoaded:f,loadError:h}=ka(c);return l.useEffect(function(){f&&typeof n=="function"&&n()},[f,n]),l.useEffect(function(){h&&typeof s=="function"&&s(h)},[h,s]),l.useEffect(function(){return()=>{i&&i()}},[i]),f?a:e||Fd}l.memo(Vd);var Or;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(Or||(Or={}));const Rr={},$r={options(t,e){t.setOptions(e)}};function Wd({options:t,onLoad:e,onUnmount:n}){const s=l.useContext(Q),[i,a]=l.useState(null);return l.useEffect(()=>{i!==null&&i.setMap(s)},[s]),l.useEffect(()=>{t&&i!==null&&i.setOptions(t)},[i,t]),l.useEffect(()=>{const c=new google.maps.TrafficLayer(Object.assign(Object.assign({},t||{}),{map:s}));return a(c),e&&e(c),()=>{i!==null&&(n&&n(i),i.setMap(null))}},[]),null}l.memo(Wd);class Gd extends l.PureComponent{constructor(){super(...arguments),this.state={trafficLayer:null},this.setTrafficLayerCallback=()=>{this.state.trafficLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.trafficLayer)},this.registeredEvents=[]}componentDidMount(){const e=new google.maps.TrafficLayer(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=te({updaterMap:$r,eventMap:Rr,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{trafficLayer:e}},this.setTrafficLayerCallback)}componentDidUpdate(e){this.state.trafficLayer!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:$r,eventMap:Rr,prevProps:e,nextProps:this.props,instance:this.state.trafficLayer}))}componentWillUnmount(){this.state.trafficLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.trafficLayer),ie(this.registeredEvents),this.state.trafficLayer.setMap(null))}render(){return null}}Gd.contextType=Q;function qd({onLoad:t,onUnmount:e}){const n=l.useContext(Q),[s,i]=l.useState(null);return l.useEffect(()=>{s!==null&&s.setMap(n)},[n]),l.useEffect(()=>{const a=new google.maps.BicyclingLayer;return i(a),a.setMap(n),t&&t(a),()=>{a!==null&&(e&&e(a),a.setMap(null))}},[]),null}l.memo(qd);class Kd extends l.PureComponent{constructor(){super(...arguments),this.state={bicyclingLayer:null},this.setBicyclingLayerCallback=()=>{this.state.bicyclingLayer!==null&&(this.state.bicyclingLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.bicyclingLayer))}}componentDidMount(){const e=new google.maps.BicyclingLayer;this.setState(()=>({bicyclingLayer:e}),this.setBicyclingLayerCallback)}componentWillUnmount(){this.state.bicyclingLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.bicyclingLayer),this.state.bicyclingLayer.setMap(null))}render(){return null}}Kd.contextType=Q;function Zd({onLoad:t,onUnmount:e}){const n=l.useContext(Q),[s,i]=l.useState(null);return l.useEffect(()=>{s!==null&&s.setMap(n)},[n]),l.useEffect(()=>{const a=new google.maps.TransitLayer;return i(a),a.setMap(n),t&&t(a),()=>{s!==null&&(e&&e(s),this.state.transitLayer.setMap(null))}},[]),null}l.memo(Zd);class Jd extends l.PureComponent{constructor(){super(...arguments),this.state={transitLayer:null},this.setTransitLayerCallback=()=>{this.state.transitLayer!==null&&(this.state.transitLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.transitLayer))}}componentDidMount(){const e=new google.maps.TransitLayer;this.setState(function(){return{transitLayer:e}},this.setTransitLayerCallback)}componentWillUnmount(){this.state.transitLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.transitLayer),this.state.transitLayer.setMap(null))}render(){return null}}Jd.contextType=Q;const Dr={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},Br={drawingMode(t,e){t.setDrawingMode(e)},options(t,e){t.setOptions(e)}};function Yd({options:t,drawingMode:e,onCircleComplete:n,onMarkerComplete:s,onOverlayComplete:i,onPolygonComplete:a,onPolylineComplete:c,onRectangleComplete:f,onLoad:h,onUnmount:u}){const g=l.useContext(Q),[m,y]=l.useState(null),[w,L]=l.useState(null),[E,k]=l.useState(null),[S,C]=l.useState(null),[x,b]=l.useState(null),[P,T]=l.useState(null),[A,R]=l.useState(null);return l.useEffect(()=>{m!==null&&m.setMap(g)},[g]),l.useEffect(()=>{t&&m!==null&&m.setOptions(t)},[m,t]),l.useEffect(()=>{e&&m!==null&&m.setDrawingMode(e)},[m,e]),l.useEffect(()=>{m&&n&&(w!==null&&google.maps.event.removeListener(w),L(google.maps.event.addListener(m,"circlecomplete",n)))},[m,n]),l.useEffect(()=>{m&&s&&(E!==null&&google.maps.event.removeListener(E),k(google.maps.event.addListener(m,"markercomplete",s)))},[m,s]),l.useEffect(()=>{m&&i&&(S!==null&&google.maps.event.removeListener(S),C(google.maps.event.addListener(m,"overlaycomplete",i)))},[m,i]),l.useEffect(()=>{m&&a&&(x!==null&&google.maps.event.removeListener(x),b(google.maps.event.addListener(m,"polygoncomplete",a)))},[m,a]),l.useEffect(()=>{m&&c&&(P!==null&&google.maps.event.removeListener(P),T(google.maps.event.addListener(m,"polylinecomplete",c)))},[m,c]),l.useEffect(()=>{m&&f&&(A!==null&&google.maps.event.removeListener(A),R(google.maps.event.addListener(m,"rectanglecomplete",f)))},[m,f]),l.useEffect(()=>{be(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing);const I=new google.maps.drawing.DrawingManager(Object.assign(Object.assign({},t||{}),{map:g}));return e&&I.setDrawingMode(e),n&&L(google.maps.event.addListener(I,"circlecomplete",n)),s&&k(google.maps.event.addListener(I,"markercomplete",s)),i&&C(google.maps.event.addListener(I,"overlaycomplete",i)),a&&b(google.maps.event.addListener(I,"polygoncomplete",a)),c&&T(google.maps.event.addListener(I,"polylinecomplete",c)),f&&R(google.maps.event.addListener(I,"rectanglecomplete",f)),y(I),h&&h(I),()=>{m!==null&&(w&&google.maps.event.removeListener(w),E&&google.maps.event.removeListener(E),S&&google.maps.event.removeListener(S),x&&google.maps.event.removeListener(x),P&&google.maps.event.removeListener(P),A&&google.maps.event.removeListener(A),u&&u(m),m.setMap(null))}},[]),null}l.memo(Yd);class Xd extends l.PureComponent{constructor(e){super(e),this.registeredEvents=[],this.state={drawingManager:null},this.setDrawingManagerCallback=()=>{this.state.drawingManager!==null&&this.props.onLoad&&this.props.onLoad(this.state.drawingManager)},be(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing)}componentDidMount(){const e=new google.maps.drawing.DrawingManager(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=te({updaterMap:Br,eventMap:Dr,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{drawingManager:e}},this.setDrawingManagerCallback)}componentDidUpdate(e){this.state.drawingManager!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Br,eventMap:Dr,prevProps:e,nextProps:this.props,instance:this.state.drawingManager}))}componentWillUnmount(){this.state.drawingManager!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.drawingManager),ie(this.registeredEvents),this.state.drawingManager.setMap(null))}render(){return null}}Xd.contextType=Q;const jr={onAnimationChanged:"animation_changed",onClick:"click",onClickableChanged:"clickable_changed",onCursorChanged:"cursor_changed",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDraggableChanged:"draggable_changed",onDragStart:"dragstart",onFlatChanged:"flat_changed",onIconChanged:"icon_changed",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPositionChanged:"position_changed",onRightClick:"rightclick",onShapeChanged:"shape_changed",onTitleChanged:"title_changed",onVisibleChanged:"visible_changed",onZindexChanged:"zindex_changed"},Nr={animation(t,e){t.setAnimation(e)},clickable(t,e){t.setClickable(e)},cursor(t,e){t.setCursor(e)},draggable(t,e){t.setDraggable(e)},icon(t,e){t.setIcon(e)},label(t,e){t.setLabel(e)},map(t,e){t.setMap(e)},opacity(t,e){t.setOpacity(e)},options(t,e){t.setOptions(e)},position(t,e){t.setPosition(e)},shape(t,e){t.setShape(e)},title(t,e){t.setTitle(e)},visible(t,e){t.setVisible(e)},zIndex(t,e){t.setZIndex(e)}},as={};function Qd({position:t,options:e,clusterer:n,noClustererRedraw:s,children:i,draggable:a,visible:c,animation:f,clickable:h,cursor:u,icon:g,label:m,opacity:y,shape:w,title:L,zIndex:E,onClick:k,onDblClick:S,onDrag:C,onDragEnd:x,onDragStart:b,onMouseOut:P,onMouseOver:T,onMouseUp:A,onMouseDown:R,onRightClick:I,onClickableChanged:M,onCursorChanged:$,onAnimationChanged:N,onDraggableChanged:G,onFlatChanged:U,onIconChanged:J,onPositionChanged:q,onShapeChanged:F,onTitleChanged:B,onVisibleChanged:H,onZindexChanged:z,onLoad:re,onUnmount:X}){const j=l.useContext(Q),[O,de]=l.useState(null),[le,Y]=l.useState(null),[V,oe]=l.useState(null),[ne,Ae]=l.useState(null),[pe,Ie]=l.useState(null),[ce,Se]=l.useState(null),[et,cn]=l.useState(null),[bt,se]=l.useState(null),[_e,je]=l.useState(null),[Ne,me]=l.useState(null),[ve,un]=l.useState(null),[qe,Ce]=l.useState(null),[Rt,dn]=l.useState(null),[yt,$t]=l.useState(null),[Dt,hn]=l.useState(null),[Bt,Nn]=l.useState(null),[Oe,Un]=l.useState(null),[jt,zn]=l.useState(null),[Hn,Fn]=l.useState(null),[tt,Vn]=l.useState(null),[Nt,nt]=l.useState(null),[Ut,Wn]=l.useState(null);l.useEffect(()=>{O!==null&&O.setMap(j)},[j]),l.useEffect(()=>{typeof e<"u"&&O!==null&&O.setOptions(e)},[O,e]),l.useEffect(()=>{typeof a<"u"&&O!==null&&O.setDraggable(a)},[O,a]),l.useEffect(()=>{t&&O!==null&&O.setPosition(t)},[O,t]),l.useEffect(()=>{typeof c<"u"&&O!==null&&O.setVisible(c)},[O,c]),l.useEffect(()=>{f&&O!==null&&O.setAnimation(f)},[O,f]),l.useEffect(()=>{O&&S&&(le!==null&&google.maps.event.removeListener(le),Y(google.maps.event.addListener(O,"dblclick",S)))},[S]),l.useEffect(()=>{O&&x&&(V!==null&&google.maps.event.removeListener(V),oe(google.maps.event.addListener(O,"dragend",x)))},[x]),l.useEffect(()=>{O&&b&&(ne!==null&&google.maps.event.removeListener(ne),Ae(google.maps.event.addListener(O,"dragstart",b)))},[b]),l.useEffect(()=>{O&&R&&(pe!==null&&google.maps.event.removeListener(pe),Ie(google.maps.event.addListener(O,"mousedown",R)))},[R]),l.useEffect(()=>{O&&P&&(ce!==null&&google.maps.event.removeListener(ce),Se(google.maps.event.addListener(O,"mouseout",P)))},[P]),l.useEffect(()=>{O&&T&&(et!==null&&google.maps.event.removeListener(et),cn(google.maps.event.addListener(O,"mouseover",T)))},[T]),l.useEffect(()=>{O&&A&&(bt!==null&&google.maps.event.removeListener(bt),se(google.maps.event.addListener(O,"mouseup",A)))},[A]),l.useEffect(()=>{O&&I&&(_e!==null&&google.maps.event.removeListener(_e),je(google.maps.event.addListener(O,"rightclick",I)))},[I]),l.useEffect(()=>{O&&k&&(Ne!==null&&google.maps.event.removeListener(Ne),me(google.maps.event.addListener(O,"click",k)))},[k]),l.useEffect(()=>{O&&C&&(ve!==null&&google.maps.event.removeListener(ve),un(google.maps.event.addListener(O,"drag",C)))},[C]),l.useEffect(()=>{O&&M&&(qe!==null&&google.maps.event.removeListener(qe),Ce(google.maps.event.addListener(O,"clickable_changed",M)))},[M]),l.useEffect(()=>{O&&$&&(Rt!==null&&google.maps.event.removeListener(Rt),dn(google.maps.event.addListener(O,"cursor_changed",$)))},[$]),l.useEffect(()=>{O&&N&&(yt!==null&&google.maps.event.removeListener(yt),$t(google.maps.event.addListener(O,"animation_changed",N)))},[N]),l.useEffect(()=>{O&&G&&(Dt!==null&&google.maps.event.removeListener(Dt),hn(google.maps.event.addListener(O,"draggable_changed",G)))},[G]),l.useEffect(()=>{O&&U&&(Bt!==null&&google.maps.event.removeListener(Bt),Nn(google.maps.event.addListener(O,"flat_changed",U)))},[U]),l.useEffect(()=>{O&&J&&(Oe!==null&&google.maps.event.removeListener(Oe),Un(google.maps.event.addListener(O,"icon_changed",J)))},[J]),l.useEffect(()=>{O&&q&&(jt!==null&&google.maps.event.removeListener(jt),zn(google.maps.event.addListener(O,"position_changed",q)))},[q]),l.useEffect(()=>{O&&F&&(Hn!==null&&google.maps.event.removeListener(Hn),Fn(google.maps.event.addListener(O,"shape_changed",F)))},[F]),l.useEffect(()=>{O&&B&&(tt!==null&&google.maps.event.removeListener(tt),Vn(google.maps.event.addListener(O,"title_changed",B)))},[B]),l.useEffect(()=>{O&&H&&(Nt!==null&&google.maps.event.removeListener(Nt),nt(google.maps.event.addListener(O,"visible_changed",H)))},[H]),l.useEffect(()=>{O&&z&&(Ut!==null&&google.maps.event.removeListener(Ut),Wn(google.maps.event.addListener(O,"zindex_changed",z)))},[z]),l.useEffect(()=>{const Ke=Object.assign(Object.assign(Object.assign({},e||as),n?as:{map:j}),{position:t}),Z=new google.maps.Marker(Ke);return n?n.addMarker(Z,!!s):Z.setMap(j),t&&Z.setPosition(t),typeof c<"u"&&Z.setVisible(c),typeof a<"u"&&Z.setDraggable(a),typeof h<"u"&&Z.setClickable(h),typeof u=="string"&&Z.setCursor(u),g&&Z.setIcon(g),typeof m<"u"&&Z.setLabel(m),typeof y<"u"&&Z.setOpacity(y),w&&Z.setShape(w),typeof L=="string"&&Z.setTitle(L),typeof E=="number"&&Z.setZIndex(E),S&&Y(google.maps.event.addListener(Z,"dblclick",S)),x&&oe(google.maps.event.addListener(Z,"dragend",x)),b&&Ae(google.maps.event.addListener(Z,"dragstart",b)),R&&Ie(google.maps.event.addListener(Z,"mousedown",R)),P&&Se(google.maps.event.addListener(Z,"mouseout",P)),T&&cn(google.maps.event.addListener(Z,"mouseover",T)),A&&se(google.maps.event.addListener(Z,"mouseup",A)),I&&je(google.maps.event.addListener(Z,"rightclick",I)),k&&me(google.maps.event.addListener(Z,"click",k)),C&&un(google.maps.event.addListener(Z,"drag",C)),M&&Ce(google.maps.event.addListener(Z,"clickable_changed",M)),$&&dn(google.maps.event.addListener(Z,"cursor_changed",$)),N&&$t(google.maps.event.addListener(Z,"animation_changed",N)),G&&hn(google.maps.event.addListener(Z,"draggable_changed",G)),U&&Nn(google.maps.event.addListener(Z,"flat_changed",U)),J&&Un(google.maps.event.addListener(Z,"icon_changed",J)),q&&zn(google.maps.event.addListener(Z,"position_changed",q)),F&&Fn(google.maps.event.addListener(Z,"shape_changed",F)),B&&Vn(google.maps.event.addListener(Z,"title_changed",B)),H&&nt(google.maps.event.addListener(Z,"visible_changed",H)),z&&Wn(google.maps.event.addListener(Z,"zindex_changed",z)),de(Z),re&&re(Z),()=>{le!==null&&google.maps.event.removeListener(le),V!==null&&google.maps.event.removeListener(V),ne!==null&&google.maps.event.removeListener(ne),pe!==null&&google.maps.event.removeListener(pe),ce!==null&&google.maps.event.removeListener(ce),et!==null&&google.maps.event.removeListener(et),bt!==null&&google.maps.event.removeListener(bt),_e!==null&&google.maps.event.removeListener(_e),Ne!==null&&google.maps.event.removeListener(Ne),qe!==null&&google.maps.event.removeListener(qe),Rt!==null&&google.maps.event.removeListener(Rt),yt!==null&&google.maps.event.removeListener(yt),Dt!==null&&google.maps.event.removeListener(Dt),Bt!==null&&google.maps.event.removeListener(Bt),Oe!==null&&google.maps.event.removeListener(Oe),jt!==null&&google.maps.event.removeListener(jt),tt!==null&&google.maps.event.removeListener(tt),Nt!==null&&google.maps.event.removeListener(Nt),Ut!==null&&google.maps.event.removeListener(Ut),X&&X(Z),n?n.removeMarker(Z,!!s):Z&&Z.setMap(null)}},[]);const ks=l.useMemo(()=>i?l.Children.map(i,Ke=>{if(!l.isValidElement(Ke))return Ke;const Z=Ke;return l.cloneElement(Z,{anchor:O})}):null,[i,O]);return v.jsx(v.Fragment,{children:ks})||null}l.memo(Qd);class ni extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[]}componentDidMount(){const e=Object.assign(Object.assign(Object.assign({},this.props.options||as),this.props.clusterer?as:{map:this.context}),{position:this.props.position});this.marker=new google.maps.Marker(e),this.props.clusterer?this.props.clusterer.addMarker(this.marker,!!this.props.noClustererRedraw):this.marker.setMap(this.context),this.registeredEvents=te({updaterMap:Nr,eventMap:jr,prevProps:{},nextProps:this.props,instance:this.marker}),this.props.onLoad&&this.props.onLoad(this.marker)}componentDidUpdate(e){this.marker&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Nr,eventMap:jr,prevProps:e,nextProps:this.props,instance:this.marker}))}componentWillUnmount(){this.marker&&(this.props.onUnmount&&this.props.onUnmount(this.marker),ie(this.registeredEvents),this.props.clusterer?this.props.clusterer.removeMarker(this.marker,!!this.props.noClustererRedraw):this.marker&&this.marker.setMap(null))}render(){let e=null;return this.props.children&&(e=l.Children.map(this.props.children,n=>{if(!l.isValidElement(n))return n;const s=n;return l.cloneElement(s,{anchor:this.marker})})),e||null}}ni.contextType=Q;var eh=function(){function t(e,n){e.getClusterer().extend(t,google.maps.OverlayView),this.cluster=e,this.clusterClassName=this.cluster.getClusterer().getClusterClass(),this.className=this.clusterClassName,this.styles=n,this.center=void 0,this.div=null,this.sums=null,this.visible=!1,this.boundsChangedListener=null,this.url="",this.height=0,this.width=0,this.anchorText=[0,0],this.anchorIcon=[0,0],this.textColor="black",this.textSize=11,this.textDecoration="none",this.fontWeight="bold",this.fontStyle="normal",this.fontFamily="Arial,sans-serif",this.backgroundPosition="0 0",this.cMouseDownInCluster=null,this.cDraggingMapByCluster=null,this.timeOut=null,this.setMap(e.getMap()),this.onBoundsChanged=this.onBoundsChanged.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onClick=this.onClick.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onAdd=this.onAdd.bind(this),this.onRemove=this.onRemove.bind(this),this.draw=this.draw.bind(this),this.hide=this.hide.bind(this),this.show=this.show.bind(this),this.useStyle=this.useStyle.bind(this),this.setCenter=this.setCenter.bind(this),this.getPosFromLatLng=this.getPosFromLatLng.bind(this)}return t.prototype.onBoundsChanged=function(){this.cDraggingMapByCluster=this.cMouseDownInCluster},t.prototype.onMouseDown=function(){this.cMouseDownInCluster=!0,this.cDraggingMapByCluster=!1},t.prototype.onClick=function(e){if(this.cMouseDownInCluster=!1,!this.cDraggingMapByCluster){var n=this.cluster.getClusterer();if(google.maps.event.trigger(n,"click",this.cluster),google.maps.event.trigger(n,"clusterclick",this.cluster),n.getZoomOnClick()){var s=n.getMaxZoom(),i=this.cluster.getBounds(),a=n.getMap();a!==null&&"fitBounds"in a&&a.fitBounds(i),this.timeOut=window.setTimeout(function(){var c=n.getMap();if(c!==null){"fitBounds"in c&&c.fitBounds(i);var f=c.getZoom()||0;s!==null&&f>s&&c.setZoom(s+1)}},100)}e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}},t.prototype.onMouseOver=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseover",this.cluster)},t.prototype.onMouseOut=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseout",this.cluster)},t.prototype.onAdd=function(){var e;this.div=document.createElement("div"),this.div.className=this.className,this.visible&&this.show(),(e=this.getPanes())===null||e===void 0||e.overlayMouseTarget.appendChild(this.div);var n=this.getMap();n!==null&&(this.boundsChangedListener=google.maps.event.addListener(n,"bounds_changed",this.onBoundsChanged),this.div.addEventListener("mousedown",this.onMouseDown),this.div.addEventListener("click",this.onClick),this.div.addEventListener("mouseover",this.onMouseOver),this.div.addEventListener("mouseout",this.onMouseOut))},t.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.hide(),this.boundsChangedListener!==null&&google.maps.event.removeListener(this.boundsChangedListener),this.div.removeEventListener("mousedown",this.onMouseDown),this.div.removeEventListener("click",this.onClick),this.div.removeEventListener("mouseover",this.onMouseOver),this.div.removeEventListener("mouseout",this.onMouseOut),this.div.parentNode.removeChild(this.div),this.timeOut!==null&&(window.clearTimeout(this.timeOut),this.timeOut=null),this.div=null)},t.prototype.draw=function(){if(this.visible&&this.div!==null&&this.center){var e=this.getPosFromLatLng(this.center);this.div.style.top=e!==null?"".concat(e.y,"px"):"0",this.div.style.left=e!==null?"".concat(e.x,"px"):"0"}},t.prototype.hide=function(){this.div&&(this.div.style.display="none"),this.visible=!1},t.prototype.show=function(){var e,n,s,i;if(this.div&&this.center){var a=this.sums===null||typeof this.sums.title>"u"||this.sums.title===""?this.cluster.getClusterer().getTitle():this.sums.title,c=this.backgroundPosition.split(" "),f=parseInt(c[0].replace(/^\s+|\s+$/g,""),10),h=parseInt(c[1].replace(/^\s+|\s+$/g,""),10),u=this.getPosFromLatLng(this.center);this.div.className=this.className,this.div.setAttribute("style","cursor: pointer; position: absolute; top: ".concat(u!==null?"".concat(u.y,"px"):"0","; left: ").concat(u!==null?"".concat(u.x,"px"):"0","; width: ").concat(this.width,"px; height: ").concat(this.height,"px; "));var g=document.createElement("img");g.alt=a,g.src=this.url,g.width=this.width,g.height=this.height,g.setAttribute("style","position: absolute; top: ".concat(h,"px; left: ").concat(f,"px")),this.cluster.getClusterer().enableRetinaIcons||(g.style.clip="rect(-".concat(h,"px, -").concat(f+this.width,"px, -").concat(h+this.height,", -").concat(f,")"));var m=document.createElement("div");m.setAttribute("style","position: absolute; top: ".concat(this.anchorText[0],"px; left: ").concat(this.anchorText[1],"px; color: ").concat(this.textColor,"; font-size: ").concat(this.textSize,"px; font-family: ").concat(this.fontFamily,"; font-weight: ").concat(this.fontWeight,"; fontStyle: ").concat(this.fontStyle,"; text-decoration: ").concat(this.textDecoration,"; text-align: center; width: ").concat(this.width,"px; line-height: ").concat(this.height,"px")),!((e=this.sums)===null||e===void 0)&&e.text&&(m.innerText="".concat((n=this.sums)===null||n===void 0?void 0:n.text)),!((s=this.sums)===null||s===void 0)&&s.html&&(m.innerHTML="".concat((i=this.sums)===null||i===void 0?void 0:i.html)),this.div.innerHTML="",this.div.appendChild(g),this.div.appendChild(m),this.div.title=a,this.div.style.display=""}this.visible=!0},t.prototype.useStyle=function(e){this.sums=e;var n=this.cluster.getClusterer().getStyles(),s=n[Math.min(n.length-1,Math.max(0,e.index-1))];this.url=s.url,this.height=s.height,this.width=s.width,s.className&&(this.className="".concat(this.clusterClassName," ").concat(s.className)),this.anchorText=s.anchorText||[0,0],this.anchorIcon=s.anchorIcon||[this.height/2,this.width/2],this.textColor=s.textColor||"black",this.textSize=s.textSize||11,this.textDecoration=s.textDecoration||"none",this.fontWeight=s.fontWeight||"bold",this.fontStyle=s.fontStyle||"normal",this.fontFamily=s.fontFamily||"Arial,sans-serif",this.backgroundPosition=s.backgroundPosition||"0 0"},t.prototype.setCenter=function(e){this.center=e},t.prototype.getPosFromLatLng=function(e){var n=this.getProjection().fromLatLngToDivPixel(e);return n!==null&&(n.x-=this.anchorIcon[1],n.y-=this.anchorIcon[0]),n},t}(),th=function(){function t(e){this.markerClusterer=e,this.map=this.markerClusterer.getMap(),this.gridSize=this.markerClusterer.getGridSize(),this.minClusterSize=this.markerClusterer.getMinimumClusterSize(),this.averageCenter=this.markerClusterer.getAverageCenter(),this.markers=[],this.center=void 0,this.bounds=null,this.clusterIcon=new eh(this,this.markerClusterer.getStyles()),this.getSize=this.getSize.bind(this),this.getMarkers=this.getMarkers.bind(this),this.getCenter=this.getCenter.bind(this),this.getMap=this.getMap.bind(this),this.getClusterer=this.getClusterer.bind(this),this.getBounds=this.getBounds.bind(this),this.remove=this.remove.bind(this),this.addMarker=this.addMarker.bind(this),this.isMarkerInClusterBounds=this.isMarkerInClusterBounds.bind(this),this.calculateBounds=this.calculateBounds.bind(this),this.updateIcon=this.updateIcon.bind(this),this.isMarkerAlreadyAdded=this.isMarkerAlreadyAdded.bind(this)}return t.prototype.getSize=function(){return this.markers.length},t.prototype.getMarkers=function(){return this.markers},t.prototype.getCenter=function(){return this.center},t.prototype.getMap=function(){return this.map},t.prototype.getClusterer=function(){return this.markerClusterer},t.prototype.getBounds=function(){for(var e=new google.maps.LatLngBounds(this.center,this.center),n=this.getMarkers(),s=0;s<n.length;s++){var i=n[s].getPosition();i&&e.extend(i)}return e},t.prototype.remove=function(){this.clusterIcon.setMap(null),this.markers=[],delete this.markers},t.prototype.addMarker=function(e){var n;if(this.isMarkerAlreadyAdded(e))return!1;if(this.center){if(this.averageCenter){var s=e.getPosition();if(s){var i=this.markers.length+1;this.center=new google.maps.LatLng((this.center.lat()*(i-1)+s.lat())/i,(this.center.lng()*(i-1)+s.lng())/i),this.calculateBounds()}}}else{var s=e.getPosition();s&&(this.center=s,this.calculateBounds())}e.isAdded=!0,this.markers.push(e);var a=this.markers.length,c=this.markerClusterer.getMaxZoom(),f=(n=this.map)===null||n===void 0?void 0:n.getZoom();if(c!==null&&typeof f<"u"&&f>c)e.getMap()!==this.map&&e.setMap(this.map);else if(a<this.minClusterSize)e.getMap()!==this.map&&e.setMap(this.map);else if(a===this.minClusterSize)for(var h=0;h<a;h++)this.markers[h].setMap(null);else e.setMap(null);return!0},t.prototype.isMarkerInClusterBounds=function(e){if(this.bounds!==null){var n=e.getPosition();if(n)return this.bounds.contains(n)}return!1},t.prototype.calculateBounds=function(){this.bounds=this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))},t.prototype.updateIcon=function(){var e,n=this.markers.length,s=this.markerClusterer.getMaxZoom(),i=(e=this.map)===null||e===void 0?void 0:e.getZoom();if(s!==null&&typeof i<"u"&&i>s){this.clusterIcon.hide();return}if(n<this.minClusterSize){this.clusterIcon.hide();return}this.center&&this.clusterIcon.setCenter(this.center),this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers,this.markerClusterer.getStyles().length)),this.clusterIcon.show()},t.prototype.isMarkerAlreadyAdded=function(e){if(this.markers.includes)return this.markers.includes(e);for(var n=0;n<this.markers.length;n++)if(e===this.markers[n])return!0;return!1},t}();function nh(t,e){var n=t.length,s=n.toString().length,i=Math.min(s,e);return{text:n.toString(),index:i,title:""}}var sh=2e3,ih=500,rh="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",oh="png",ah=[53,56,66,78,90],lh="cluster",Ia=function(){function t(e,n,s){n===void 0&&(n=[]),s===void 0&&(s={}),this.getMinimumClusterSize=this.getMinimumClusterSize.bind(this),this.setMinimumClusterSize=this.setMinimumClusterSize.bind(this),this.getEnableRetinaIcons=this.getEnableRetinaIcons.bind(this),this.setEnableRetinaIcons=this.setEnableRetinaIcons.bind(this),this.addToClosestCluster=this.addToClosestCluster.bind(this),this.getImageExtension=this.getImageExtension.bind(this),this.setImageExtension=this.setImageExtension.bind(this),this.getExtendedBounds=this.getExtendedBounds.bind(this),this.getAverageCenter=this.getAverageCenter.bind(this),this.setAverageCenter=this.setAverageCenter.bind(this),this.getTotalClusters=this.getTotalClusters.bind(this),this.fitMapToMarkers=this.fitMapToMarkers.bind(this),this.getIgnoreHidden=this.getIgnoreHidden.bind(this),this.setIgnoreHidden=this.setIgnoreHidden.bind(this),this.getClusterClass=this.getClusterClass.bind(this),this.setClusterClass=this.setClusterClass.bind(this),this.getTotalMarkers=this.getTotalMarkers.bind(this),this.getZoomOnClick=this.getZoomOnClick.bind(this),this.setZoomOnClick=this.setZoomOnClick.bind(this),this.getBatchSizeIE=this.getBatchSizeIE.bind(this),this.setBatchSizeIE=this.setBatchSizeIE.bind(this),this.createClusters=this.createClusters.bind(this),this.onZoomChanged=this.onZoomChanged.bind(this),this.getImageSizes=this.getImageSizes.bind(this),this.setImageSizes=this.setImageSizes.bind(this),this.getCalculator=this.getCalculator.bind(this),this.setCalculator=this.setCalculator.bind(this),this.removeMarkers=this.removeMarkers.bind(this),this.resetViewport=this.resetViewport.bind(this),this.getImagePath=this.getImagePath.bind(this),this.setImagePath=this.setImagePath.bind(this),this.pushMarkerTo=this.pushMarkerTo.bind(this),this.removeMarker=this.removeMarker.bind(this),this.clearMarkers=this.clearMarkers.bind(this),this.setupStyles=this.setupStyles.bind(this),this.getGridSize=this.getGridSize.bind(this),this.setGridSize=this.setGridSize.bind(this),this.getClusters=this.getClusters.bind(this),this.getMaxZoom=this.getMaxZoom.bind(this),this.setMaxZoom=this.setMaxZoom.bind(this),this.getMarkers=this.getMarkers.bind(this),this.addMarkers=this.addMarkers.bind(this),this.getStyles=this.getStyles.bind(this),this.setStyles=this.setStyles.bind(this),this.addMarker=this.addMarker.bind(this),this.onRemove=this.onRemove.bind(this),this.getTitle=this.getTitle.bind(this),this.setTitle=this.setTitle.bind(this),this.repaint=this.repaint.bind(this),this.onIdle=this.onIdle.bind(this),this.redraw=this.redraw.bind(this),this.extend=this.extend.bind(this),this.onAdd=this.onAdd.bind(this),this.draw=this.draw.bind(this),this.extend(t,google.maps.OverlayView),this.markers=[],this.clusters=[],this.listeners=[],this.activeMap=null,this.ready=!1,this.gridSize=s.gridSize||60,this.minClusterSize=s.minimumClusterSize||2,this.maxZoom=s.maxZoom||null,this.styles=s.styles||[],this.title=s.title||"",this.zoomOnClick=!0,s.zoomOnClick!==void 0&&(this.zoomOnClick=s.zoomOnClick),this.averageCenter=!1,s.averageCenter!==void 0&&(this.averageCenter=s.averageCenter),this.ignoreHidden=!1,s.ignoreHidden!==void 0&&(this.ignoreHidden=s.ignoreHidden),this.enableRetinaIcons=!1,s.enableRetinaIcons!==void 0&&(this.enableRetinaIcons=s.enableRetinaIcons),this.imagePath=s.imagePath||rh,this.imageExtension=s.imageExtension||oh,this.imageSizes=s.imageSizes||ah,this.calculator=s.calculator||nh,this.batchSize=s.batchSize||sh,this.batchSizeIE=s.batchSizeIE||ih,this.clusterClass=s.clusterClass||lh,navigator.userAgent.toLowerCase().indexOf("msie")!==-1&&(this.batchSize=this.batchSizeIE),this.timerRefStatic=null,this.setupStyles(),this.addMarkers(n,!0),this.setMap(e)}return t.prototype.onZoomChanged=function(){var e,n;this.resetViewport(!1),(((e=this.getMap())===null||e===void 0?void 0:e.getZoom())===(this.get("minZoom")||0)||((n=this.getMap())===null||n===void 0?void 0:n.getZoom())===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")},t.prototype.onIdle=function(){this.redraw()},t.prototype.onAdd=function(){var e=this.getMap();this.activeMap=e,this.ready=!0,this.repaint(),e!==null&&(this.listeners=[google.maps.event.addListener(e,"zoom_changed",this.onZoomChanged),google.maps.event.addListener(e,"idle",this.onIdle)])},t.prototype.onRemove=function(){for(var e=0;e<this.markers.length;e++)this.markers[e].getMap()!==this.activeMap&&this.markers[e].setMap(this.activeMap);for(var e=0;e<this.clusters.length;e++)this.clusters[e].remove();this.clusters=[];for(var e=0;e<this.listeners.length;e++)google.maps.event.removeListener(this.listeners[e]);this.listeners=[],this.activeMap=null,this.ready=!1},t.prototype.draw=function(){},t.prototype.setupStyles=function(){if(!(this.styles.length>0))for(var e=0;e<this.imageSizes.length;e++)this.styles.push({url:"".concat(this.imagePath+(e+1),".").concat(this.imageExtension),height:this.imageSizes[e],width:this.imageSizes[e]})},t.prototype.fitMapToMarkers=function(){for(var e=this.getMarkers(),n=new google.maps.LatLngBounds,s=0;s<e.length;s++){var i=e[s].getPosition();i&&n.extend(i)}var a=this.getMap();a!==null&&"fitBounds"in a&&a.fitBounds(n)},t.prototype.getGridSize=function(){return this.gridSize},t.prototype.setGridSize=function(e){this.gridSize=e},t.prototype.getMinimumClusterSize=function(){return this.minClusterSize},t.prototype.setMinimumClusterSize=function(e){this.minClusterSize=e},t.prototype.getMaxZoom=function(){return this.maxZoom},t.prototype.setMaxZoom=function(e){this.maxZoom=e},t.prototype.getStyles=function(){return this.styles},t.prototype.setStyles=function(e){this.styles=e},t.prototype.getTitle=function(){return this.title},t.prototype.setTitle=function(e){this.title=e},t.prototype.getZoomOnClick=function(){return this.zoomOnClick},t.prototype.setZoomOnClick=function(e){this.zoomOnClick=e},t.prototype.getAverageCenter=function(){return this.averageCenter},t.prototype.setAverageCenter=function(e){this.averageCenter=e},t.prototype.getIgnoreHidden=function(){return this.ignoreHidden},t.prototype.setIgnoreHidden=function(e){this.ignoreHidden=e},t.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons},t.prototype.setEnableRetinaIcons=function(e){this.enableRetinaIcons=e},t.prototype.getImageExtension=function(){return this.imageExtension},t.prototype.setImageExtension=function(e){this.imageExtension=e},t.prototype.getImagePath=function(){return this.imagePath},t.prototype.setImagePath=function(e){this.imagePath=e},t.prototype.getImageSizes=function(){return this.imageSizes},t.prototype.setImageSizes=function(e){this.imageSizes=e},t.prototype.getCalculator=function(){return this.calculator},t.prototype.setCalculator=function(e){this.calculator=e},t.prototype.getBatchSizeIE=function(){return this.batchSizeIE},t.prototype.setBatchSizeIE=function(e){this.batchSizeIE=e},t.prototype.getClusterClass=function(){return this.clusterClass},t.prototype.setClusterClass=function(e){this.clusterClass=e},t.prototype.getMarkers=function(){return this.markers},t.prototype.getTotalMarkers=function(){return this.markers.length},t.prototype.getClusters=function(){return this.clusters},t.prototype.getTotalClusters=function(){return this.clusters.length},t.prototype.addMarker=function(e,n){this.pushMarkerTo(e),n||this.redraw()},t.prototype.addMarkers=function(e,n){for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&this.pushMarkerTo(e[s]);n||this.redraw()},t.prototype.pushMarkerTo=function(e){var n=this;e.getDraggable()&&google.maps.event.addListener(e,"dragend",function(){n.ready&&(e.isAdded=!1,n.repaint())}),e.isAdded=!1,this.markers.push(e)},t.prototype.removeMarker_=function(e){var n=-1;if(this.markers.indexOf)n=this.markers.indexOf(e);else for(var s=0;s<this.markers.length;s++)if(e===this.markers[s]){n=s;break}return n===-1?!1:(e.setMap(null),this.markers.splice(n,1),!0)},t.prototype.removeMarker=function(e,n){var s=this.removeMarker_(e);return!n&&s&&this.repaint(),s},t.prototype.removeMarkers=function(e,n){for(var s=!1,i=0;i<e.length;i++)s=s||this.removeMarker_(e[i]);return!n&&s&&this.repaint(),s},t.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers=[]},t.prototype.repaint=function(){var e=this.clusters.slice();this.clusters=[],this.resetViewport(!1),this.redraw(),setTimeout(function(){for(var s=0;s<e.length;s++)e[s].remove()},0)},t.prototype.getExtendedBounds=function(e){var n=this.getProjection(),s=n.fromLatLngToDivPixel(new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng()));s!==null&&(s.x+=this.gridSize,s.y-=this.gridSize);var i=n.fromLatLngToDivPixel(new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng()));if(i!==null&&(i.x-=this.gridSize,i.y+=this.gridSize),s!==null){var a=n.fromDivPixelToLatLng(s);a!==null&&e.extend(a)}if(i!==null){var c=n.fromDivPixelToLatLng(i);c!==null&&e.extend(c)}return e},t.prototype.redraw=function(){this.createClusters(0)},t.prototype.resetViewport=function(e){for(var n=0;n<this.clusters.length;n++)this.clusters[n].remove();this.clusters=[];for(var n=0;n<this.markers.length;n++){var s=this.markers[n];s.isAdded=!1,e&&s.setMap(null)}},t.prototype.distanceBetweenPoints=function(e,n){var s=6371,i=(n.lat()-e.lat())*Math.PI/180,a=(n.lng()-e.lng())*Math.PI/180,c=Math.sin(i/2)*Math.sin(i/2)+Math.cos(e.lat()*Math.PI/180)*Math.cos(n.lat()*Math.PI/180)*Math.sin(a/2)*Math.sin(a/2);return s*(2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c)))},t.prototype.isMarkerInBounds=function(e,n){var s=e.getPosition();return s?n.contains(s):!1},t.prototype.addToClosestCluster=function(e){for(var n,s=4e4,i=null,a=0;a<this.clusters.length;a++){n=this.clusters[a];var c=n.getCenter(),f=e.getPosition();if(c&&f){var h=this.distanceBetweenPoints(c,f);h<s&&(s=h,i=n)}}i&&i.isMarkerInClusterBounds(e)?i.addMarker(e):(n=new th(this),n.addMarker(e),this.clusters.push(n))},t.prototype.createClusters=function(e){var n=this;if(this.ready){e===0&&(google.maps.event.trigger(this,"clusteringbegin",this),this.timerRefStatic!==null&&(window.clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var s=this.getMap(),i=s!==null&&("getBounds"in s)?s.getBounds():null,a=(s==null?void 0:s.getZoom())||0,c=a>3?new google.maps.LatLngBounds(i==null?void 0:i.getSouthWest(),i==null?void 0:i.getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)),f=this.getExtendedBounds(c),h=Math.min(e+this.batchSize,this.markers.length),u=e;u<h;u++){var g=this.markers[u];!g.isAdded&&this.isMarkerInBounds(g,f)&&(!this.ignoreHidden||this.ignoreHidden&&g.getVisible())&&this.addToClosestCluster(g)}if(h<this.markers.length)this.timerRefStatic=window.setTimeout(function(){n.createClusters(h)},0);else{this.timerRefStatic=null,google.maps.event.trigger(this,"clusteringend",this);for(var u=0;u<this.clusters.length;u++)this.clusters[u].updateIcon()}}},t.prototype.extend=function(e,n){return function(i){for(var a in i.prototype)this.prototype[a]=i.prototype[a];return this}.apply(e,[n])},t}();const De={onClick:"click",onClusteringBegin:"clusteringbegin",onClusteringEnd:"clusteringend",onMouseOut:"mouseout",onMouseOver:"mouseover"},ae={averageCenter(t,e){t.setAverageCenter(e)},batchSizeIE(t,e){t.setBatchSizeIE(e)},calculator(t,e){t.setCalculator(e)},clusterClass(t,e){t.setClusterClass(e)},enableRetinaIcons(t,e){t.setEnableRetinaIcons(e)},gridSize(t,e){t.setGridSize(e)},ignoreHidden(t,e){t.setIgnoreHidden(e)},imageExtension(t,e){t.setImageExtension(e)},imagePath(t,e){t.setImagePath(e)},imageSizes(t,e){t.setImageSizes(e)},maxZoom(t,e){t.setMaxZoom(e)},minimumClusterSize(t,e){t.setMinimumClusterSize(e)},styles(t,e){t.setStyles(e)},title(t,e){t.setTitle(e)},zoomOnClick(t,e){t.setZoomOnClick(e)}},ch={};function uh(t){const{children:e,options:n,averageCenter:s,batchSizeIE:i,calculator:a,clusterClass:c,enableRetinaIcons:f,gridSize:h,ignoreHidden:u,imageExtension:g,imagePath:m,imageSizes:y,maxZoom:w,minimumClusterSize:L,styles:E,title:k,zoomOnClick:S,onClick:C,onClusteringBegin:x,onClusteringEnd:b,onMouseOver:P,onMouseOut:T,onLoad:A,onUnmount:R}=t,[I,M]=l.useState(null),$=l.useContext(Q),[N,G]=l.useState(null),[U,J]=l.useState(null),[q,F]=l.useState(null),[B,H]=l.useState(null),[z,re]=l.useState(null);return l.useEffect(()=>{I&&T&&(B!==null&&google.maps.event.removeListener(B),H(google.maps.event.addListener(I,De.onMouseOut,T)))},[T]),l.useEffect(()=>{I&&P&&(z!==null&&google.maps.event.removeListener(z),re(google.maps.event.addListener(I,De.onMouseOver,P)))},[P]),l.useEffect(()=>{I&&C&&(N!==null&&google.maps.event.removeListener(N),G(google.maps.event.addListener(I,De.onClick,C)))},[C]),l.useEffect(()=>{I&&x&&(U!==null&&google.maps.event.removeListener(U),J(google.maps.event.addListener(I,De.onClusteringBegin,x)))},[x]),l.useEffect(()=>{I&&b&&(q!==null&&google.maps.event.removeListener(q),J(google.maps.event.addListener(I,De.onClusteringEnd,b)))},[b]),l.useEffect(()=>{typeof s<"u"&&I!==null&&ae.averageCenter(I,s)},[I,s]),l.useEffect(()=>{typeof i<"u"&&I!==null&&ae.batchSizeIE(I,i)},[I,i]),l.useEffect(()=>{typeof a<"u"&&I!==null&&ae.calculator(I,a)},[I,a]),l.useEffect(()=>{typeof c<"u"&&I!==null&&ae.clusterClass(I,c)},[I,c]),l.useEffect(()=>{typeof f<"u"&&I!==null&&ae.enableRetinaIcons(I,f)},[I,f]),l.useEffect(()=>{typeof h<"u"&&I!==null&&ae.gridSize(I,h)},[I,h]),l.useEffect(()=>{typeof u<"u"&&I!==null&&ae.ignoreHidden(I,u)},[I,u]),l.useEffect(()=>{typeof g<"u"&&I!==null&&ae.imageExtension(I,g)},[I,g]),l.useEffect(()=>{typeof m<"u"&&I!==null&&ae.imagePath(I,m)},[I,m]),l.useEffect(()=>{typeof y<"u"&&I!==null&&ae.imageSizes(I,y)},[I,y]),l.useEffect(()=>{typeof w<"u"&&I!==null&&ae.maxZoom(I,w)},[I,w]),l.useEffect(()=>{typeof L<"u"&&I!==null&&ae.minimumClusterSize(I,L)},[I,L]),l.useEffect(()=>{typeof E<"u"&&I!==null&&ae.styles(I,E)},[I,E]),l.useEffect(()=>{typeof k<"u"&&I!==null&&ae.title(I,k)},[I,k]),l.useEffect(()=>{typeof S<"u"&&I!==null&&ae.zoomOnClick(I,S)},[I,S]),l.useEffect(()=>{if(!$)return;const X=Object.assign({},n||ch),j=new Ia($,[],X);return s&&ae.averageCenter(j,s),i&&ae.batchSizeIE(j,i),a&&ae.calculator(j,a),c&&ae.clusterClass(j,c),f&&ae.enableRetinaIcons(j,f),h&&ae.gridSize(j,h),u&&ae.ignoreHidden(j,u),g&&ae.imageExtension(j,g),m&&ae.imagePath(j,m),y&&ae.imageSizes(j,y),w&&ae.maxZoom(j,w),L&&ae.minimumClusterSize(j,L),E&&ae.styles(j,E),k&&ae.title(j,k),S&&ae.zoomOnClick(j,S),T&&H(google.maps.event.addListener(j,De.onMouseOut,T)),P&&re(google.maps.event.addListener(j,De.onMouseOver,P)),C&&G(google.maps.event.addListener(j,De.onClick,C)),x&&J(google.maps.event.addListener(j,De.onClusteringBegin,x)),b&&F(google.maps.event.addListener(j,De.onClusteringEnd,b)),M(j),A&&A(j),()=>{B!==null&&google.maps.event.removeListener(B),z!==null&&google.maps.event.removeListener(z),N!==null&&google.maps.event.removeListener(N),U!==null&&google.maps.event.removeListener(U),q!==null&&google.maps.event.removeListener(q),R&&R(j)}},[]),I!==null&&e(I)||null}l.memo(uh);class Sa extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={markerClusterer:null},this.setClustererCallback=()=>{this.state.markerClusterer!==null&&this.props.onLoad&&this.props.onLoad(this.state.markerClusterer)}}componentDidMount(){if(this.context){const e=new Ia(this.context,[],this.props.options);this.registeredEvents=te({updaterMap:ae,eventMap:De,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({markerClusterer:e}),this.setClustererCallback)}}componentDidUpdate(e){this.state.markerClusterer&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:ae,eventMap:De,prevProps:e,nextProps:this.props,instance:this.state.markerClusterer}))}componentWillUnmount(){this.state.markerClusterer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.markerClusterer),ie(this.registeredEvents),this.state.markerClusterer.setMap(null))}render(){return this.state.markerClusterer!==null?this.props.children(this.state.markerClusterer):null}}Sa.contextType=Q;function Ur(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}var _a=function(){function t(e){e===void 0&&(e={}),this.getCloseClickHandler=this.getCloseClickHandler.bind(this),this.closeClickHandler=this.closeClickHandler.bind(this),this.createInfoBoxDiv=this.createInfoBoxDiv.bind(this),this.addClickHandler=this.addClickHandler.bind(this),this.getCloseBoxImg=this.getCloseBoxImg.bind(this),this.getBoxWidths=this.getBoxWidths.bind(this),this.setBoxStyle=this.setBoxStyle.bind(this),this.setPosition=this.setPosition.bind(this),this.getPosition=this.getPosition.bind(this),this.setOptions=this.setOptions.bind(this),this.setContent=this.setContent.bind(this),this.setVisible=this.setVisible.bind(this),this.getContent=this.getContent.bind(this),this.getVisible=this.getVisible.bind(this),this.setZIndex=this.setZIndex.bind(this),this.getZIndex=this.getZIndex.bind(this),this.onRemove=this.onRemove.bind(this),this.panBox=this.panBox.bind(this),this.extend=this.extend.bind(this),this.close=this.close.bind(this),this.draw=this.draw.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.open=this.open.bind(this),this.extend(t,google.maps.OverlayView),this.content=e.content||"",this.disableAutoPan=e.disableAutoPan||!1,this.maxWidth=e.maxWidth||0,this.pixelOffset=e.pixelOffset||new google.maps.Size(0,0),this.position=e.position||new google.maps.LatLng(0,0),this.zIndex=e.zIndex||null,this.boxClass=e.boxClass||"infoBox",this.boxStyle=e.boxStyle||{},this.closeBoxMargin=e.closeBoxMargin||"2px",this.closeBoxURL=e.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",e.closeBoxURL===""&&(this.closeBoxURL=""),this.infoBoxClearance=e.infoBoxClearance||new google.maps.Size(1,1),typeof e.visible>"u"&&(typeof e.isHidden>"u"?e.visible=!0:e.visible=!e.isHidden),this.isHidden=!e.visible,this.alignBottom=e.alignBottom||!1,this.pane=e.pane||"floatPane",this.enableEventPropagation=e.enableEventPropagation||!1,this.div=null,this.closeListener=null,this.moveListener=null,this.mapListener=null,this.contextListener=null,this.eventListeners=null,this.fixedWidthSet=null}return t.prototype.createInfoBoxDiv=function(){var e=this,n=function(f){f.returnValue=!1,f.preventDefault&&f.preventDefault(),e.enableEventPropagation||Ur(f)};if(!this.div){this.div=document.createElement("div"),this.setBoxStyle(),typeof this.content=="string"?this.div.innerHTML=this.getCloseBoxImg()+this.content:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(this.content));var s=this.getPanes();if(s!==null&&s[this.pane].appendChild(this.div),this.addClickHandler(),this.div.style.width)this.fixedWidthSet=!0;else if(this.maxWidth!==0&&this.div.offsetWidth>this.maxWidth)this.div.style.width=this.maxWidth+"px",this.fixedWidthSet=!0;else{var i=this.getBoxWidths();this.div.style.width=this.div.offsetWidth-i.left-i.right+"px",this.fixedWidthSet=!1}if(this.panBox(this.disableAutoPan),!this.enableEventPropagation){this.eventListeners=[];for(var a=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],c=0;c<a.length;c++)this.eventListeners.push(google.maps.event.addListener(this.div,a[c],Ur));this.eventListeners.push(google.maps.event.addListener(this.div,"mouseover",function(){e.div&&(e.div.style.cursor="default")}))}this.contextListener=google.maps.event.addListener(this.div,"contextmenu",n),google.maps.event.trigger(this,"domready")}},t.prototype.getCloseBoxImg=function(){var e="";return this.closeBoxURL!==""&&(e='<img alt=""',e+=' aria-hidden="true"',e+=" src='"+this.closeBoxURL+"'",e+=" align=right",e+=" style='",e+=" position: relative;",e+=" cursor: pointer;",e+=" margin: "+this.closeBoxMargin+";",e+="'>"),e},t.prototype.addClickHandler=function(){this.closeListener=this.div&&this.div.firstChild&&this.closeBoxURL!==""?google.maps.event.addListener(this.div.firstChild,"click",this.getCloseClickHandler()):null},t.prototype.closeClickHandler=function(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation(),google.maps.event.trigger(this,"closeclick"),this.close()},t.prototype.getCloseClickHandler=function(){return this.closeClickHandler},t.prototype.panBox=function(e){if(this.div&&!e){var n=this.getMap();if(n instanceof google.maps.Map){var s=0,i=0,a=n.getBounds();a&&!a.contains(this.position)&&n.setCenter(this.position);var c=n.getDiv(),f=c.offsetWidth,h=c.offsetHeight,u=this.pixelOffset.width,g=this.pixelOffset.height,m=this.div.offsetWidth,y=this.div.offsetHeight,w=this.infoBoxClearance.width,L=this.infoBoxClearance.height,E=this.getProjection(),k=E.fromLatLngToContainerPixel(this.position);k!==null&&(k.x<-u+w?s=k.x+u-w:k.x+m+u+w>f&&(s=k.x+m+u+w-f),this.alignBottom?k.y<-g+L+y?i=k.y+g-L-y:k.y+g+L>h&&(i=k.y+g+L-h):k.y<-g+L?i=k.y+g-L:k.y+y+g+L>h&&(i=k.y+y+g+L-h)),s===0&&i===0||n.panBy(s,i)}}},t.prototype.setBoxStyle=function(){if(this.div){this.div.className=this.boxClass,this.div.style.cssText="";var e=this.boxStyle;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(this.div.style[n]=e[n]);if(this.div.style.webkitTransform="translateZ(0)",typeof this.div.style.opacity<"u"&&this.div.style.opacity!==""){var s=parseFloat(this.div.style.opacity||"");this.div.style.msFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+s*100+')"',this.div.style.filter="alpha(opacity="+s*100+")"}this.div.style.position="absolute",this.div.style.visibility="hidden",this.zIndex!==null&&(this.div.style.zIndex=this.zIndex+""),this.div.style.overflow||(this.div.style.overflow="auto")}},t.prototype.getBoxWidths=function(){var e={top:0,bottom:0,left:0,right:0};if(!this.div)return e;if(document.defaultView){var n=this.div.ownerDocument,s=n&&n.defaultView?n.defaultView.getComputedStyle(this.div,""):null;s&&(e.top=parseInt(s.borderTopWidth||"",10)||0,e.bottom=parseInt(s.borderBottomWidth||"",10)||0,e.left=parseInt(s.borderLeftWidth||"",10)||0,e.right=parseInt(s.borderRightWidth||"",10)||0)}else if(document.documentElement.currentStyle){var i=this.div.currentStyle;i&&(e.top=parseInt(i.borderTopWidth||"",10)||0,e.bottom=parseInt(i.borderBottomWidth||"",10)||0,e.left=parseInt(i.borderLeftWidth||"",10)||0,e.right=parseInt(i.borderRightWidth||"",10)||0)}return e},t.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.div.parentNode.removeChild(this.div),this.div=null)},t.prototype.draw=function(){if(this.createInfoBoxDiv(),this.div){var e=this.getProjection(),n=e.fromLatLngToDivPixel(this.position);n!==null&&(this.div.style.left=n.x+this.pixelOffset.width+"px",this.alignBottom?this.div.style.bottom=-(n.y+this.pixelOffset.height)+"px":this.div.style.top=n.y+this.pixelOffset.height+"px"),this.isHidden?this.div.style.visibility="hidden":this.div.style.visibility="visible"}},t.prototype.setOptions=function(e){e===void 0&&(e={}),typeof e.boxClass<"u"&&(this.boxClass=e.boxClass,this.setBoxStyle()),typeof e.boxStyle<"u"&&(this.boxStyle=e.boxStyle,this.setBoxStyle()),typeof e.content<"u"&&this.setContent(e.content),typeof e.disableAutoPan<"u"&&(this.disableAutoPan=e.disableAutoPan),typeof e.maxWidth<"u"&&(this.maxWidth=e.maxWidth),typeof e.pixelOffset<"u"&&(this.pixelOffset=e.pixelOffset),typeof e.alignBottom<"u"&&(this.alignBottom=e.alignBottom),typeof e.position<"u"&&this.setPosition(e.position),typeof e.zIndex<"u"&&this.setZIndex(e.zIndex),typeof e.closeBoxMargin<"u"&&(this.closeBoxMargin=e.closeBoxMargin),typeof e.closeBoxURL<"u"&&(this.closeBoxURL=e.closeBoxURL),typeof e.infoBoxClearance<"u"&&(this.infoBoxClearance=e.infoBoxClearance),typeof e.isHidden<"u"&&(this.isHidden=e.isHidden),typeof e.visible<"u"&&(this.isHidden=!e.visible),typeof e.enableEventPropagation<"u"&&(this.enableEventPropagation=e.enableEventPropagation),this.div&&this.draw()},t.prototype.setContent=function(e){this.content=e,this.div&&(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.fixedWidthSet||(this.div.style.width=""),typeof e=="string"?this.div.innerHTML=this.getCloseBoxImg()+e:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(e)),this.fixedWidthSet||(this.div.style.width=this.div.offsetWidth+"px",typeof e=="string"?this.div.innerHTML=this.getCloseBoxImg()+e:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(e))),this.addClickHandler()),google.maps.event.trigger(this,"content_changed")},t.prototype.setPosition=function(e){this.position=e,this.div&&this.draw(),google.maps.event.trigger(this,"position_changed")},t.prototype.setVisible=function(e){this.isHidden=!e,this.div&&(this.div.style.visibility=this.isHidden?"hidden":"visible")},t.prototype.setZIndex=function(e){this.zIndex=e,this.div&&(this.div.style.zIndex=e+""),google.maps.event.trigger(this,"zindex_changed")},t.prototype.getContent=function(){return this.content},t.prototype.getPosition=function(){return this.position},t.prototype.getZIndex=function(){return this.zIndex},t.prototype.getVisible=function(){var e=this.getMap();return typeof e>"u"||e===null?!1:!this.isHidden},t.prototype.show=function(){this.isHidden=!1,this.div&&(this.div.style.visibility="visible")},t.prototype.hide=function(){this.isHidden=!0,this.div&&(this.div.style.visibility="hidden")},t.prototype.open=function(e,n){var s=this;n&&(this.position=n.getPosition(),this.moveListener=google.maps.event.addListener(n,"position_changed",function(){var i=n.getPosition();s.setPosition(i)}),this.mapListener=google.maps.event.addListener(n,"map_changed",function(){s.setMap(n.map)})),this.setMap(e),this.div&&this.panBox()},t.prototype.close=function(){if(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.eventListeners){for(var e=0;e<this.eventListeners.length;e++)google.maps.event.removeListener(this.eventListeners[e]);this.eventListeners=null}this.moveListener&&(google.maps.event.removeListener(this.moveListener),this.moveListener=null),this.mapListener&&(google.maps.event.removeListener(this.mapListener),this.mapListener=null),this.contextListener&&(google.maps.event.removeListener(this.contextListener),this.contextListener=null),this.setMap(null)},t.prototype.extend=function(e,n){return function(i){for(var a in i.prototype)Object.prototype.hasOwnProperty.call(this,a)||(this.prototype[a]=i.prototype[a]);return this}.apply(e,[n])},t}();const zr={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},Hr={options(t,e){t.setOptions(e)},position(t,e){e instanceof google.maps.LatLng?t.setPosition(e):t.setPosition(new google.maps.LatLng(e.lat,e.lng))},visible(t,e){t.setVisible(e)},zIndex(t,e){t.setZIndex(e)}},dh={};function hh({children:t,anchor:e,options:n,position:s,zIndex:i,onCloseClick:a,onDomReady:c,onContentChanged:f,onPositionChanged:h,onZindexChanged:u,onLoad:g,onUnmount:m}){const y=l.useContext(Q),[w,L]=l.useState(null),[E,k]=l.useState(null),[S,C]=l.useState(null),[x,b]=l.useState(null),[P,T]=l.useState(null),[A,R]=l.useState(null),I=l.useRef(null);return l.useEffect(()=>{y&&w!==null&&(w.close(),e?w.open(y,e):w.getPosition()&&w.open(y))},[y,w,e]),l.useEffect(()=>{n&&w!==null&&w.setOptions(n)},[w,n]),l.useEffect(()=>{if(s&&w!==null){const M=s instanceof google.maps.LatLng?s:new google.maps.LatLng(s.lat,s.lng);w.setPosition(M)}},[s]),l.useEffect(()=>{typeof i=="number"&&w!==null&&w.setZIndex(i)},[i]),l.useEffect(()=>{w&&a&&(E!==null&&google.maps.event.removeListener(E),k(google.maps.event.addListener(w,"closeclick",a)))},[a]),l.useEffect(()=>{w&&c&&(S!==null&&google.maps.event.removeListener(S),C(google.maps.event.addListener(w,"domready",c)))},[c]),l.useEffect(()=>{w&&f&&(x!==null&&google.maps.event.removeListener(x),b(google.maps.event.addListener(w,"content_changed",f)))},[f]),l.useEffect(()=>{w&&h&&(P!==null&&google.maps.event.removeListener(P),T(google.maps.event.addListener(w,"position_changed",h)))},[h]),l.useEffect(()=>{w&&u&&(A!==null&&google.maps.event.removeListener(A),R(google.maps.event.addListener(w,"zindex_changed",u)))},[u]),l.useEffect(()=>{if(y){const M=n||dh,{position:$}=M,N=wi(M,["position"]);let G;$&&!($ instanceof google.maps.LatLng)&&(G=new google.maps.LatLng($.lat,$.lng));const U=new _a(Object.assign(Object.assign({},N),G?{position:G}:{}));I.current=document.createElement("div"),L(U),a&&k(google.maps.event.addListener(U,"closeclick",a)),c&&C(google.maps.event.addListener(U,"domready",c)),f&&b(google.maps.event.addListener(U,"content_changed",f)),h&&T(google.maps.event.addListener(U,"position_changed",h)),u&&R(google.maps.event.addListener(U,"zindex_changed",u)),U.setContent(I.current),e?U.open(y,e):U.getPosition()?U.open(y):be(!1,"You must provide either an anchor or a position prop for <InfoBox>."),g&&g(U)}return()=>{w!==null&&(E&&google.maps.event.removeListener(E),x&&google.maps.event.removeListener(x),S&&google.maps.event.removeListener(S),P&&google.maps.event.removeListener(P),A&&google.maps.event.removeListener(A),m&&m(w),w.close())}},[]),I.current?At.createPortal(l.Children.only(t),I.current):null}l.memo(hh);class fh extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=null,this.state={infoBox:null},this.open=(e,n)=>{n?e.open(this.context,n):e.getPosition()?e.open(this.context):be(!1,"You must provide either an anchor or a position prop for <InfoBox>.")},this.setInfoBoxCallback=()=>{this.state.infoBox!==null&&this.containerElement!==null&&(this.state.infoBox.setContent(this.containerElement),this.open(this.state.infoBox,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoBox))}}componentDidMount(){const e=this.props.options||{},{position:n}=e,s=wi(e,["position"]);let i;n&&!(n instanceof google.maps.LatLng)&&(i=new google.maps.LatLng(n.lat,n.lng));const a=new _a(Object.assign(Object.assign({},s),i?{position:i}:{}));this.containerElement=document.createElement("div"),this.registeredEvents=te({updaterMap:Hr,eventMap:zr,prevProps:{},nextProps:this.props,instance:a}),this.setState({infoBox:a},this.setInfoBoxCallback)}componentDidUpdate(e){const{infoBox:n}=this.state;n!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Hr,eventMap:zr,prevProps:e,nextProps:this.props,instance:n}))}componentWillUnmount(){const{onUnmount:e}=this.props,{infoBox:n}=this.state;n!==null&&(e&&e(n),ie(this.registeredEvents),n.close())}render(){return this.containerElement?At.createPortal(l.Children.only(this.props.children),this.containerElement):null}}fh.contextType=Q;var Fr=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var s,i,a;if(Array.isArray(e)){if(s=e.length,s!=n.length)return!1;for(i=s;i--!==0;)if(!t(e[i],n[i]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(a=Object.keys(e),s=a.length,s!==Object.keys(n).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,a[i]))return!1;for(i=s;i--!==0;){var c=a[i];if(!t(e[c],n[c]))return!1}return!0}return e!==e&&n!==n},Ta={exports:{}};(function(t,e){(function(n,s){t.exports=s()})(Md,function(){function n(y,w,L,E,k,S){if(!(k-E<=L)){var C=E+k>>1;s(y,w,C,E,k,S%2),n(y,w,L,E,C-1,S+1),n(y,w,L,C+1,k,S+1)}}function s(y,w,L,E,k,S){for(;k>E;){if(k-E>600){var C=k-E+1,x=L-E+1,b=Math.log(C),P=.5*Math.exp(2*b/3),T=.5*Math.sqrt(b*P*(C-P)/C)*(x-C/2<0?-1:1),A=Math.max(E,Math.floor(L-x*P/C+T)),R=Math.min(k,Math.floor(L+(C-x)*P/C+T));s(y,w,L,A,R,S)}var I=w[2*L+S],M=E,$=k;for(i(y,w,E,L),w[2*k+S]>I&&i(y,w,E,k);M<$;){for(i(y,w,M,$),M++,$--;w[2*M+S]<I;)M++;for(;w[2*$+S]>I;)$--}w[2*E+S]===I?i(y,w,E,$):($++,i(y,w,$,k)),$<=L&&(E=$+1),L<=$&&(k=$-1)}}function i(y,w,L,E){a(y,L,E),a(w,2*L,2*E),a(w,2*L+1,2*E+1)}function a(y,w,L){var E=y[w];y[w]=y[L],y[L]=E}function c(y,w,L,E,k,S,C){for(var x=[0,y.length-1,0],b=[],P,T;x.length;){var A=x.pop(),R=x.pop(),I=x.pop();if(R-I<=C){for(var M=I;M<=R;M++)P=w[2*M],T=w[2*M+1],P>=L&&P<=k&&T>=E&&T<=S&&b.push(y[M]);continue}var $=Math.floor((I+R)/2);P=w[2*$],T=w[2*$+1],P>=L&&P<=k&&T>=E&&T<=S&&b.push(y[$]);var N=(A+1)%2;(A===0?L<=P:E<=T)&&(x.push(I),x.push($-1),x.push(N)),(A===0?k>=P:S>=T)&&(x.push($+1),x.push(R),x.push(N))}return b}function f(y,w,L,E,k,S){for(var C=[0,y.length-1,0],x=[],b=k*k;C.length;){var P=C.pop(),T=C.pop(),A=C.pop();if(T-A<=S){for(var R=A;R<=T;R++)h(w[2*R],w[2*R+1],L,E)<=b&&x.push(y[R]);continue}var I=Math.floor((A+T)/2),M=w[2*I],$=w[2*I+1];h(M,$,L,E)<=b&&x.push(y[I]);var N=(P+1)%2;(P===0?L-k<=M:E-k<=$)&&(C.push(A),C.push(I-1),C.push(N)),(P===0?L+k>=M:E+k>=$)&&(C.push(I+1),C.push(T),C.push(N))}return x}function h(y,w,L,E){var k=y-L,S=w-E;return k*k+S*S}var u=function(y){return y[0]},g=function(y){return y[1]},m=function(w,L,E,k,S){L===void 0&&(L=u),E===void 0&&(E=g),k===void 0&&(k=64),S===void 0&&(S=Float64Array),this.nodeSize=k,this.points=w;for(var C=w.length<65536?Uint16Array:Uint32Array,x=this.ids=new C(w.length),b=this.coords=new S(w.length*2),P=0;P<w.length;P++)x[P]=P,b[2*P]=L(w[P]),b[2*P+1]=E(w[P]);n(x,b,k,0,x.length-1,0)};return m.prototype.range=function(w,L,E,k){return c(this.ids,this.coords,w,L,E,k,this.nodeSize)},m.prototype.within=function(w,L,E){return f(this.ids,this.coords,w,L,E,this.nodeSize)},m})})(Ta);var Vr=Ta.exports;const ph={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},ls=Math.fround||(t=>e=>(t[0]=+e,t[0]))(new Float32Array(1));class gh{constructor(e){this.options=yn(Object.create(ph),e),this.trees=new Array(this.options.maxZoom+1)}load(e){const{log:n,minZoom:s,maxZoom:i,nodeSize:a}=this.options;n&&console.time("total time");const c=`prepare ${e.length} points`;n&&console.time(c),this.points=e;let f=[];for(let h=0;h<e.length;h++)e[h].geometry&&f.push(vh(e[h],h));this.trees[i+1]=new Vr(f,Gr,qr,a,Float32Array),n&&console.timeEnd(c);for(let h=i;h>=s;h--){const u=+Date.now();f=this._cluster(f,h),this.trees[h]=new Vr(f,Gr,qr,a,Float32Array),n&&console.log("z%d: %d clusters in %dms",h,f.length,+Date.now()-u)}return n&&console.timeEnd("total time"),this}getClusters(e,n){let s=((e[0]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,e[1]));let a=e[2]===180?180:((e[2]+180)%360+360)%360-180;const c=Math.max(-90,Math.min(90,e[3]));if(e[2]-e[0]>=360)s=-180,a=180;else if(s>a){const g=this.getClusters([s,i,180,c],n),m=this.getClusters([-180,i,a,c],n);return g.concat(m)}const f=this.trees[this._limitZoom(n)],h=f.range(Qn(s),es(c),Qn(a),es(i)),u=[];for(const g of h){const m=f.points[g];u.push(m.numPoints?Wr(m):this.points[m.index])}return u}getChildren(e){const n=this._getOriginId(e),s=this._getOriginZoom(e),i="No cluster with the specified id.",a=this.trees[s];if(!a)throw new Error(i);const c=a.points[n];if(!c)throw new Error(i);const f=this.options.radius/(this.options.extent*Math.pow(2,s-1)),h=a.within(c.x,c.y,f),u=[];for(const g of h){const m=a.points[g];m.parentId===e&&u.push(m.numPoints?Wr(m):this.points[m.index])}if(u.length===0)throw new Error(i);return u}getLeaves(e,n,s){n=n||10,s=s||0;const i=[];return this._appendLeaves(i,e,n,s,0),i}getTile(e,n,s){const i=this.trees[this._limitZoom(e)],a=Math.pow(2,e),{extent:c,radius:f}=this.options,h=f/c,u=(s-h)/a,g=(s+1+h)/a,m={features:[]};return this._addTileFeatures(i.range((n-h)/a,u,(n+1+h)/a,g),i.points,n,s,a,m),n===0&&this._addTileFeatures(i.range(1-h/a,u,1,g),i.points,a,s,a,m),n===a-1&&this._addTileFeatures(i.range(0,u,h/a,g),i.points,-1,s,a,m),m.features.length?m:null}getClusterExpansionZoom(e){let n=this._getOriginZoom(e)-1;for(;n<=this.options.maxZoom;){const s=this.getChildren(e);if(n++,s.length!==1)break;e=s[0].properties.cluster_id}return n}_appendLeaves(e,n,s,i,a){const c=this.getChildren(n);for(const f of c){const h=f.properties;if(h&&h.cluster?a+h.point_count<=i?a+=h.point_count:a=this._appendLeaves(e,h.cluster_id,s,i,a):a<i?a++:e.push(f),e.length===s)break}return a}_addTileFeatures(e,n,s,i,a,c){for(const f of e){const h=n[f],u=h.numPoints;let g,m,y;if(u)g=Pa(h),m=h.x,y=h.y;else{const E=this.points[h.index];g=E.properties,m=Qn(E.geometry.coordinates[0]),y=es(E.geometry.coordinates[1])}const w={type:1,geometry:[[Math.round(this.options.extent*(m*a-s)),Math.round(this.options.extent*(y*a-i))]],tags:g};let L;u?L=h.id:this.options.generateId?L=h.index:this.points[h.index].id&&(L=this.points[h.index].id),L!==void 0&&(w.id=L),c.features.push(w)}}_limitZoom(e){return Math.max(this.options.minZoom,Math.min(+e,this.options.maxZoom+1))}_cluster(e,n){const s=[],{radius:i,extent:a,reduce:c,minPoints:f}=this.options,h=i/(a*Math.pow(2,n));for(let u=0;u<e.length;u++){const g=e[u];if(g.zoom<=n)continue;g.zoom=n;const m=this.trees[n+1],y=m.within(g.x,g.y,h),w=g.numPoints||1;let L=w;for(const E of y){const k=m.points[E];k.zoom>n&&(L+=k.numPoints||1)}if(L>w&&L>=f){let E=g.x*w,k=g.y*w,S=c&&w>1?this._map(g,!0):null;const C=(u<<5)+(n+1)+this.points.length;for(const x of y){const b=m.points[x];if(b.zoom<=n)continue;b.zoom=n;const P=b.numPoints||1;E+=b.x*P,k+=b.y*P,b.parentId=C,c&&(S||(S=this._map(g,!0)),c(S,this._map(b)))}g.parentId=C,s.push(mh(E/L,k/L,C,L,S))}else if(s.push(g),L>1)for(const E of y){const k=m.points[E];k.zoom<=n||(k.zoom=n,s.push(k))}}return s}_getOriginId(e){return e-this.points.length>>5}_getOriginZoom(e){return(e-this.points.length)%32}_map(e,n){if(e.numPoints)return n?yn({},e.properties):e.properties;const s=this.points[e.index].properties,i=this.options.map(s);return n&&i===s?yn({},i):i}}function mh(t,e,n,s,i){return{x:ls(t),y:ls(e),zoom:1/0,id:n,parentId:-1,numPoints:s,properties:i}}function vh(t,e){const[n,s]=t.geometry.coordinates;return{x:ls(Qn(n)),y:ls(es(s)),zoom:1/0,index:e,parentId:-1}}function Wr(t){return{type:"Feature",id:t.id,properties:Pa(t),geometry:{type:"Point",coordinates:[wh(t.x),bh(t.y)]}}}function Pa(t){const e=t.numPoints,n=e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?`${Math.round(e/100)/10}k`:e;return yn(yn({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:n})}function Qn(t){return t/360+.5}function es(t){const e=Math.sin(t*Math.PI/180),n=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return n<0?0:n>1?1:n}function wh(t){return(t-.5)*360}function bh(t){const e=(180-t*360)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function yn(t,e){for(const n in e)t[n]=e[n];return t}function Gr(t){return t.x}function qr(t){return t.y}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function yh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}class si{constructor({markers:e,position:n}){this.markers=e,n&&(n instanceof google.maps.LatLng?this._position=n:this._position=new google.maps.LatLng(n))}get bounds(){if(!(this.markers.length===0&&!this._position))return this.markers.reduce((e,n)=>e.extend(n.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(e=>e.getVisible()).length}push(e){this.markers.push(e)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class xh{constructor({maxZoom:e=16}){this.maxZoom=e}noop({markers:e}){return Lh(e)}}const Lh=t=>t.map(n=>new si({position:n.getPosition(),markers:[n]}));class Eh extends xh{constructor(e){var{maxZoom:n,radius:s=60}=e,i=yh(e,["maxZoom","radius"]);super({maxZoom:n}),this.superCluster=new gh(Object.assign({maxZoom:this.maxZoom,radius:s},i)),this.state={zoom:null}}calculate(e){let n=!1;if(!Fr(e.markers,this.markers)){n=!0,this.markers=[...e.markers];const i=this.markers.map(a=>({type:"Feature",geometry:{type:"Point",coordinates:[a.getPosition().lng(),a.getPosition().lat()]},properties:{marker:a}}));this.superCluster.load(i)}const s={zoom:e.map.getZoom()};return n||this.state.zoom>this.maxZoom&&s.zoom>this.maxZoom||(n=n||!Fr(this.state,s)),this.state=s,n&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:n}}cluster({map:e}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(e.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[e,n]},properties:s}){if(s.cluster)return new si({markers:this.superCluster.getLeaves(s.cluster_id,1/0).map(i=>i.properties.marker),position:new google.maps.LatLng({lat:n,lng:e})});{const i=s.marker;return new si({markers:[i],position:i.getPosition()})}}}class Ch{constructor(e,n){this.markers={sum:e.length};const s=n.map(a=>a.count),i=s.reduce((a,c)=>a+c,0);this.clusters={count:n.length,markers:{mean:i/n.length,sum:i,min:Math.min(...s),max:Math.max(...s)}}}}class kh{render({count:e,position:n},s){const i=e>Math.max(10,s.clusters.markers.mean)?"#ff0000":"#0000ff",a=window.btoa(`
  <svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);return new google.maps.Marker({position:n,icon:{url:`data:image/svg+xml;base64,${a}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(e),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${e} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+e})}}function Ih(t,e){for(let n in e.prototype)t.prototype[n]=e.prototype[n]}class bi{constructor(){Ih(bi,google.maps.OverlayView)}}var xn;(function(t){t.CLUSTERING_BEGIN="clusteringbegin",t.CLUSTERING_END="clusteringend",t.CLUSTER_CLICK="click"})(xn||(xn={}));const Sh=(t,e,n)=>{n.fitBounds(e.bounds)};class _h extends bi{constructor({map:e,markers:n=[],algorithm:s=new Eh({}),renderer:i=new kh,onClusterClick:a=Sh}){super(),this.markers=[...n],this.clusters=[],this.algorithm=s,this.renderer=i,this.onClusterClick=a,e&&this.setMap(e)}addMarker(e,n){this.markers.includes(e)||(this.markers.push(e),n||this.render())}addMarkers(e,n){e.forEach(s=>{this.addMarker(s,!0)}),n||this.render()}removeMarker(e,n){const s=this.markers.indexOf(e);return s===-1?!1:(e.setMap(null),this.markers.splice(s,1),n||this.render(),!0)}removeMarkers(e,n){let s=!1;return e.forEach(i=>{s=this.removeMarker(i,!0)||s}),s&&!n&&this.render(),s}clearMarkers(e){this.markers.length=0,e||this.render()}render(){const e=this.getMap();if(e instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,xn.CLUSTERING_BEGIN,this);const{clusters:n,changed:s}=this.algorithm.calculate({markers:this.markers,map:e,mapCanvasProjection:this.getProjection()});(s||s==null)&&(this.reset(),this.clusters=n,this.renderClusters()),google.maps.event.trigger(this,xn.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(e=>e.setMap(null)),this.clusters.forEach(e=>e.delete()),this.clusters=[]}renderClusters(){const e=new Ch(this.markers,this.clusters),n=this.getMap();this.clusters.forEach(s=>{s.markers.length===1?s.marker=s.markers[0]:(s.marker=this.renderer.render(s,e),this.onClusterClick&&s.marker.addListener("click",i=>{google.maps.event.trigger(this,xn.CLUSTER_CLICK,s),this.onClusterClick(i,s,n)})),s.marker.setMap(n)})}}function Th(t){const e=Od(),[n,s]=l.useState(null);return l.useEffect(()=>{if(e&&n===null){const i=new _h(Object.assign(Object.assign({},t),{map:e}));s(i)}},[e]),n}function Ph({children:t,options:e}){const n=Th(e);return n!==null?t(n):null}l.memo(Ph);const Kr={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},Zr={options(t,e){t.setOptions(e)},position(t,e){t.setPosition(e)},zIndex(t,e){t.setZIndex(e)}};function Mh({children:t,anchor:e,options:n,position:s,zIndex:i,onCloseClick:a,onDomReady:c,onContentChanged:f,onPositionChanged:h,onZindexChanged:u,onLoad:g,onUnmount:m}){const y=l.useContext(Q),[w,L]=l.useState(null),[E,k]=l.useState(null),[S,C]=l.useState(null),[x,b]=l.useState(null),[P,T]=l.useState(null),[A,R]=l.useState(null),I=l.useRef(null);return l.useEffect(()=>{w!==null&&(w.close(),e?w.open(y,e):w.getPosition()&&w.open(y))},[y,w,e]),l.useEffect(()=>{n&&w!==null&&w.setOptions(n)},[w,n]),l.useEffect(()=>{s&&w!==null&&w.setPosition(s)},[s]),l.useEffect(()=>{typeof i=="number"&&w!==null&&w.setZIndex(i)},[i]),l.useEffect(()=>{w&&a&&(E!==null&&google.maps.event.removeListener(E),k(google.maps.event.addListener(w,"closeclick",a)))},[a]),l.useEffect(()=>{w&&c&&(S!==null&&google.maps.event.removeListener(S),C(google.maps.event.addListener(w,"domready",c)))},[c]),l.useEffect(()=>{w&&f&&(x!==null&&google.maps.event.removeListener(x),b(google.maps.event.addListener(w,"content_changed",f)))},[f]),l.useEffect(()=>{w&&h&&(P!==null&&google.maps.event.removeListener(P),T(google.maps.event.addListener(w,"position_changed",h)))},[h]),l.useEffect(()=>{w&&u&&(A!==null&&google.maps.event.removeListener(A),R(google.maps.event.addListener(w,"zindex_changed",u)))},[u]),l.useEffect(()=>{const M=new google.maps.InfoWindow(Object.assign({},n||{}));return L(M),I.current=document.createElement("div"),a&&k(google.maps.event.addListener(M,"closeclick",a)),c&&C(google.maps.event.addListener(M,"domready",c)),f&&b(google.maps.event.addListener(M,"content_changed",f)),h&&T(google.maps.event.addListener(M,"position_changed",h)),u&&R(google.maps.event.addListener(M,"zindex_changed",u)),M.setContent(I.current),s&&M.setPosition(s),i&&M.setZIndex(i),e?M.open(y,e):M.getPosition()?M.open(y):be(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."),g&&g(M),()=>{E&&google.maps.event.removeListener(E),x&&google.maps.event.removeListener(x),S&&google.maps.event.removeListener(S),P&&google.maps.event.removeListener(P),A&&google.maps.event.removeListener(A),m&&m(M),M.close()}},[]),I.current?At.createPortal(l.Children.only(t),I.current):null}l.memo(Mh);class ii extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=null,this.state={infoWindow:null},this.open=(e,n)=>{n?e.open(this.context,n):e.getPosition()?e.open(this.context):be(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.")},this.setInfoWindowCallback=()=>{this.state.infoWindow!==null&&this.containerElement!==null&&(this.state.infoWindow.setContent(this.containerElement),this.open(this.state.infoWindow,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoWindow))}}componentDidMount(){const e=new google.maps.InfoWindow(Object.assign({},this.props.options||{}));this.containerElement=document.createElement("div"),this.registeredEvents=te({updaterMap:Zr,eventMap:Kr,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({infoWindow:e}),this.setInfoWindowCallback)}componentDidUpdate(e){this.state.infoWindow!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Zr,eventMap:Kr,prevProps:e,nextProps:this.props,instance:this.state.infoWindow}))}componentWillUnmount(){this.state.infoWindow!==null&&(ie(this.registeredEvents),this.props.onUnmount&&this.props.onUnmount(this.state.infoWindow),this.state.infoWindow.close())}render(){return this.containerElement?At.createPortal(l.Children.only(this.props.children),this.containerElement):null}}ii.contextType=Q;const Jr={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Yr={draggable(t,e){t.setDraggable(e)},editable(t,e){t.setEditable(e)},map(t,e){t.setMap(e)},options(t,e){t.setOptions(e)},path(t,e){t.setPath(e)},visible(t,e){t.setVisible(e)}},Ah={};function Oh({options:t,draggable:e,editable:n,visible:s,path:i,onDblClick:a,onDragEnd:c,onDragStart:f,onMouseDown:h,onMouseMove:u,onMouseOut:g,onMouseOver:m,onMouseUp:y,onRightClick:w,onClick:L,onDrag:E,onLoad:k,onUnmount:S}){const C=l.useContext(Q),[x,b]=l.useState(null),[P,T]=l.useState(null),[A,R]=l.useState(null),[I,M]=l.useState(null),[$,N]=l.useState(null),[G,U]=l.useState(null),[J,q]=l.useState(null),[F,B]=l.useState(null),[H,z]=l.useState(null),[re,X]=l.useState(null),[j,O]=l.useState(null),[de,le]=l.useState(null);return l.useEffect(()=>{x!==null&&x.setMap(C)},[C]),l.useEffect(()=>{typeof t<"u"&&x!==null&&x.setOptions(t)},[x,t]),l.useEffect(()=>{typeof e<"u"&&x!==null&&x.setDraggable(e)},[x,e]),l.useEffect(()=>{typeof n<"u"&&x!==null&&x.setEditable(n)},[x,n]),l.useEffect(()=>{typeof s<"u"&&x!==null&&x.setVisible(s)},[x,s]),l.useEffect(()=>{typeof i<"u"&&x!==null&&x.setPath(i)},[x,i]),l.useEffect(()=>{x&&a&&(P!==null&&google.maps.event.removeListener(P),T(google.maps.event.addListener(x,"dblclick",a)))},[a]),l.useEffect(()=>{x&&c&&(A!==null&&google.maps.event.removeListener(A),R(google.maps.event.addListener(x,"dragend",c)))},[c]),l.useEffect(()=>{x&&f&&(I!==null&&google.maps.event.removeListener(I),M(google.maps.event.addListener(x,"dragstart",f)))},[f]),l.useEffect(()=>{x&&h&&($!==null&&google.maps.event.removeListener($),N(google.maps.event.addListener(x,"mousedown",h)))},[h]),l.useEffect(()=>{x&&u&&(G!==null&&google.maps.event.removeListener(G),U(google.maps.event.addListener(x,"mousemove",u)))},[u]),l.useEffect(()=>{x&&g&&(J!==null&&google.maps.event.removeListener(J),q(google.maps.event.addListener(x,"mouseout",g)))},[g]),l.useEffect(()=>{x&&m&&(F!==null&&google.maps.event.removeListener(F),B(google.maps.event.addListener(x,"mouseover",m)))},[m]),l.useEffect(()=>{x&&y&&(H!==null&&google.maps.event.removeListener(H),z(google.maps.event.addListener(x,"mouseup",y)))},[y]),l.useEffect(()=>{x&&w&&(re!==null&&google.maps.event.removeListener(re),X(google.maps.event.addListener(x,"rightclick",w)))},[w]),l.useEffect(()=>{x&&L&&(j!==null&&google.maps.event.removeListener(j),O(google.maps.event.addListener(x,"click",L)))},[L]),l.useEffect(()=>{x&&E&&(de!==null&&google.maps.event.removeListener(de),le(google.maps.event.addListener(x,"drag",E)))},[E]),l.useEffect(()=>{const Y=new google.maps.Polyline(Object.assign(Object.assign({},t||Ah),{map:C}));return i&&Y.setPath(i),typeof s<"u"&&Y.setVisible(s),typeof n<"u"&&Y.setEditable(n),typeof e<"u"&&Y.setDraggable(e),a&&T(google.maps.event.addListener(Y,"dblclick",a)),c&&R(google.maps.event.addListener(Y,"dragend",c)),f&&M(google.maps.event.addListener(Y,"dragstart",f)),h&&N(google.maps.event.addListener(Y,"mousedown",h)),u&&U(google.maps.event.addListener(Y,"mousemove",u)),g&&q(google.maps.event.addListener(Y,"mouseout",g)),m&&B(google.maps.event.addListener(Y,"mouseover",m)),y&&z(google.maps.event.addListener(Y,"mouseup",y)),w&&X(google.maps.event.addListener(Y,"rightclick",w)),L&&O(google.maps.event.addListener(Y,"click",L)),E&&le(google.maps.event.addListener(Y,"drag",E)),b(Y),k&&k(Y),()=>{P!==null&&google.maps.event.removeListener(P),A!==null&&google.maps.event.removeListener(A),I!==null&&google.maps.event.removeListener(I),$!==null&&google.maps.event.removeListener($),G!==null&&google.maps.event.removeListener(G),J!==null&&google.maps.event.removeListener(J),F!==null&&google.maps.event.removeListener(F),H!==null&&google.maps.event.removeListener(H),re!==null&&google.maps.event.removeListener(re),j!==null&&google.maps.event.removeListener(j),S&&S(Y),Y.setMap(null)}},[]),null}l.memo(Oh);class Rh extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={polyline:null},this.setPolylineCallback=()=>{this.state.polyline!==null&&this.props.onLoad&&this.props.onLoad(this.state.polyline)}}componentDidMount(){const e=new google.maps.Polyline(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=te({updaterMap:Yr,eventMap:Jr,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{polyline:e}},this.setPolylineCallback)}componentDidUpdate(e){this.state.polyline!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Yr,eventMap:Jr,prevProps:e,nextProps:this.props,instance:this.state.polyline}))}componentWillUnmount(){this.state.polyline!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polyline),ie(this.registeredEvents),this.state.polyline.setMap(null))}render(){return null}}Rh.contextType=Q;const Xr={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Qr={draggable(t,e){t.setDraggable(e)},editable(t,e){t.setEditable(e)},map(t,e){t.setMap(e)},options(t,e){t.setOptions(e)},path(t,e){t.setPath(e)},paths(t,e){t.setPaths(e)},visible(t,e){t.setVisible(e)}};function $h({options:t,draggable:e,editable:n,visible:s,path:i,paths:a,onDblClick:c,onDragEnd:f,onDragStart:h,onMouseDown:u,onMouseMove:g,onMouseOut:m,onMouseOver:y,onMouseUp:w,onRightClick:L,onClick:E,onDrag:k,onLoad:S,onUnmount:C}){const x=l.useContext(Q),[b,P]=l.useState(null),[T,A]=l.useState(null),[R,I]=l.useState(null),[M,$]=l.useState(null),[N,G]=l.useState(null),[U,J]=l.useState(null),[q,F]=l.useState(null),[B,H]=l.useState(null),[z,re]=l.useState(null),[X,j]=l.useState(null),[O,de]=l.useState(null),[le,Y]=l.useState(null);return l.useEffect(()=>{b!==null&&b.setMap(x)},[x]),l.useEffect(()=>{typeof t<"u"&&b!==null&&b.setOptions(t)},[b,t]),l.useEffect(()=>{typeof e<"u"&&b!==null&&b.setDraggable(e)},[b,e]),l.useEffect(()=>{typeof n<"u"&&b!==null&&b.setEditable(n)},[b,n]),l.useEffect(()=>{typeof s<"u"&&b!==null&&b.setVisible(s)},[b,s]),l.useEffect(()=>{typeof i<"u"&&b!==null&&b.setPath(i)},[b,i]),l.useEffect(()=>{typeof a<"u"&&b!==null&&b.setPaths(a)},[b,a]),l.useEffect(()=>{b&&c&&(T!==null&&google.maps.event.removeListener(T),A(google.maps.event.addListener(b,"dblclick",c)))},[c]),l.useEffect(()=>{b&&f&&(R!==null&&google.maps.event.removeListener(R),I(google.maps.event.addListener(b,"dragend",f)))},[f]),l.useEffect(()=>{b&&h&&(M!==null&&google.maps.event.removeListener(M),$(google.maps.event.addListener(b,"dragstart",h)))},[h]),l.useEffect(()=>{b&&u&&(N!==null&&google.maps.event.removeListener(N),G(google.maps.event.addListener(b,"mousedown",u)))},[u]),l.useEffect(()=>{b&&g&&(U!==null&&google.maps.event.removeListener(U),J(google.maps.event.addListener(b,"mousemove",g)))},[g]),l.useEffect(()=>{b&&m&&(q!==null&&google.maps.event.removeListener(q),F(google.maps.event.addListener(b,"mouseout",m)))},[m]),l.useEffect(()=>{b&&y&&(B!==null&&google.maps.event.removeListener(B),H(google.maps.event.addListener(b,"mouseover",y)))},[y]),l.useEffect(()=>{b&&w&&(z!==null&&google.maps.event.removeListener(z),re(google.maps.event.addListener(b,"mouseup",w)))},[w]),l.useEffect(()=>{b&&L&&(X!==null&&google.maps.event.removeListener(X),j(google.maps.event.addListener(b,"rightclick",L)))},[L]),l.useEffect(()=>{b&&E&&(O!==null&&google.maps.event.removeListener(O),de(google.maps.event.addListener(b,"click",E)))},[E]),l.useEffect(()=>{b&&k&&(le!==null&&google.maps.event.removeListener(le),Y(google.maps.event.addListener(b,"drag",k)))},[k]),l.useEffect(()=>{const V=new google.maps.Polygon(Object.assign(Object.assign({},t||{}),{map:x}));return i&&V.setPath(i),a&&V.setPaths(a),typeof s<"u"&&V.setVisible(s),typeof n<"u"&&V.setEditable(n),typeof e<"u"&&V.setDraggable(e),c&&A(google.maps.event.addListener(V,"dblclick",c)),f&&I(google.maps.event.addListener(V,"dragend",f)),h&&$(google.maps.event.addListener(V,"dragstart",h)),u&&G(google.maps.event.addListener(V,"mousedown",u)),g&&J(google.maps.event.addListener(V,"mousemove",g)),m&&F(google.maps.event.addListener(V,"mouseout",m)),y&&H(google.maps.event.addListener(V,"mouseover",y)),w&&re(google.maps.event.addListener(V,"mouseup",w)),L&&j(google.maps.event.addListener(V,"rightclick",L)),E&&de(google.maps.event.addListener(V,"click",E)),k&&Y(google.maps.event.addListener(V,"drag",k)),P(V),S&&S(V),()=>{T!==null&&google.maps.event.removeListener(T),R!==null&&google.maps.event.removeListener(R),M!==null&&google.maps.event.removeListener(M),N!==null&&google.maps.event.removeListener(N),U!==null&&google.maps.event.removeListener(U),q!==null&&google.maps.event.removeListener(q),B!==null&&google.maps.event.removeListener(B),z!==null&&google.maps.event.removeListener(z),X!==null&&google.maps.event.removeListener(X),O!==null&&google.maps.event.removeListener(O),C&&C(V),V.setMap(null)}},[]),null}l.memo($h);class Dh extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={polygon:null},this.setPolygonCallback=()=>{this.state.polygon!==null&&this.props.onLoad&&this.props.onLoad(this.state.polygon)}}componentDidMount(){const e=new google.maps.Polygon(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=te({updaterMap:Qr,eventMap:Xr,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{polygon:e}},this.setPolygonCallback)}componentDidUpdate(e){this.state.polygon!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Qr,eventMap:Xr,prevProps:e,nextProps:this.props,instance:this.state.polygon}))}componentWillUnmount(){this.state.polygon!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polygon),ie(this.registeredEvents),this.state.polygon&&this.state.polygon.setMap(null))}render(){return null}}Dh.contextType=Q;const eo={onBoundsChanged:"bounds_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},to={bounds(t,e){t.setBounds(e)},draggable(t,e){t.setDraggable(e)},editable(t,e){t.setEditable(e)},map(t,e){t.setMap(e)},options(t,e){t.setOptions(e)},visible(t,e){t.setVisible(e)}};function Bh({options:t,bounds:e,draggable:n,editable:s,visible:i,onDblClick:a,onDragEnd:c,onDragStart:f,onMouseDown:h,onMouseMove:u,onMouseOut:g,onMouseOver:m,onMouseUp:y,onRightClick:w,onClick:L,onDrag:E,onBoundsChanged:k,onLoad:S,onUnmount:C}){const x=l.useContext(Q),[b,P]=l.useState(null),[T,A]=l.useState(null),[R,I]=l.useState(null),[M,$]=l.useState(null),[N,G]=l.useState(null),[U,J]=l.useState(null),[q,F]=l.useState(null),[B,H]=l.useState(null),[z,re]=l.useState(null),[X,j]=l.useState(null),[O,de]=l.useState(null),[le,Y]=l.useState(null),[V,oe]=l.useState(null);return l.useEffect(()=>{b!==null&&b.setMap(x)},[x]),l.useEffect(()=>{typeof t<"u"&&b!==null&&b.setOptions(t)},[b,t]),l.useEffect(()=>{typeof n<"u"&&b!==null&&b.setDraggable(n)},[b,n]),l.useEffect(()=>{typeof s<"u"&&b!==null&&b.setEditable(s)},[b,s]),l.useEffect(()=>{typeof i<"u"&&b!==null&&b.setVisible(i)},[b,i]),l.useEffect(()=>{typeof e<"u"&&b!==null&&b.setBounds(e)},[b,e]),l.useEffect(()=>{b&&a&&(T!==null&&google.maps.event.removeListener(T),A(google.maps.event.addListener(b,"dblclick",a)))},[a]),l.useEffect(()=>{b&&c&&(R!==null&&google.maps.event.removeListener(R),I(google.maps.event.addListener(b,"dragend",c)))},[c]),l.useEffect(()=>{b&&f&&(M!==null&&google.maps.event.removeListener(M),$(google.maps.event.addListener(b,"dragstart",f)))},[f]),l.useEffect(()=>{b&&h&&(N!==null&&google.maps.event.removeListener(N),G(google.maps.event.addListener(b,"mousedown",h)))},[h]),l.useEffect(()=>{b&&u&&(U!==null&&google.maps.event.removeListener(U),J(google.maps.event.addListener(b,"mousemove",u)))},[u]),l.useEffect(()=>{b&&g&&(q!==null&&google.maps.event.removeListener(q),F(google.maps.event.addListener(b,"mouseout",g)))},[g]),l.useEffect(()=>{b&&m&&(B!==null&&google.maps.event.removeListener(B),H(google.maps.event.addListener(b,"mouseover",m)))},[m]),l.useEffect(()=>{b&&y&&(z!==null&&google.maps.event.removeListener(z),re(google.maps.event.addListener(b,"mouseup",y)))},[y]),l.useEffect(()=>{b&&w&&(X!==null&&google.maps.event.removeListener(X),j(google.maps.event.addListener(b,"rightclick",w)))},[w]),l.useEffect(()=>{b&&L&&(O!==null&&google.maps.event.removeListener(O),de(google.maps.event.addListener(b,"click",L)))},[L]),l.useEffect(()=>{b&&E&&(le!==null&&google.maps.event.removeListener(le),Y(google.maps.event.addListener(b,"drag",E)))},[E]),l.useEffect(()=>{b&&k&&(V!==null&&google.maps.event.removeListener(V),oe(google.maps.event.addListener(b,"bounds_changed",k)))},[k]),l.useEffect(()=>{const ne=new google.maps.Rectangle(Object.assign(Object.assign({},t||{}),{map:x}));return typeof i<"u"&&ne.setVisible(i),typeof s<"u"&&ne.setEditable(s),typeof n<"u"&&ne.setDraggable(n),typeof e<"u"&&ne.setBounds(e),a&&A(google.maps.event.addListener(ne,"dblclick",a)),c&&I(google.maps.event.addListener(ne,"dragend",c)),f&&$(google.maps.event.addListener(ne,"dragstart",f)),h&&G(google.maps.event.addListener(ne,"mousedown",h)),u&&J(google.maps.event.addListener(ne,"mousemove",u)),g&&F(google.maps.event.addListener(ne,"mouseout",g)),m&&H(google.maps.event.addListener(ne,"mouseover",m)),y&&re(google.maps.event.addListener(ne,"mouseup",y)),w&&j(google.maps.event.addListener(ne,"rightclick",w)),L&&de(google.maps.event.addListener(ne,"click",L)),E&&Y(google.maps.event.addListener(ne,"drag",E)),k&&oe(google.maps.event.addListener(ne,"bounds_changed",k)),P(ne),S&&S(ne),()=>{T!==null&&google.maps.event.removeListener(T),R!==null&&google.maps.event.removeListener(R),M!==null&&google.maps.event.removeListener(M),N!==null&&google.maps.event.removeListener(N),U!==null&&google.maps.event.removeListener(U),q!==null&&google.maps.event.removeListener(q),B!==null&&google.maps.event.removeListener(B),z!==null&&google.maps.event.removeListener(z),X!==null&&google.maps.event.removeListener(X),O!==null&&google.maps.event.removeListener(O),le!==null&&google.maps.event.removeListener(le),V!==null&&google.maps.event.removeListener(V),C&&C(ne),ne.setMap(null)}},[]),null}l.memo(Bh);class jh extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={rectangle:null},this.setRectangleCallback=()=>{this.state.rectangle!==null&&this.props.onLoad&&this.props.onLoad(this.state.rectangle)}}componentDidMount(){const e=new google.maps.Rectangle(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=te({updaterMap:to,eventMap:eo,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{rectangle:e}},this.setRectangleCallback)}componentDidUpdate(e){this.state.rectangle!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:to,eventMap:eo,prevProps:e,nextProps:this.props,instance:this.state.rectangle}))}componentWillUnmount(){this.state.rectangle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.rectangle),ie(this.registeredEvents),this.state.rectangle.setMap(null))}render(){return null}}jh.contextType=Q;const no={onCenterChanged:"center_changed",onRadiusChanged:"radius_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},so={center(t,e){t.setCenter(e)},draggable(t,e){t.setDraggable(e)},editable(t,e){t.setEditable(e)},map(t,e){t.setMap(e)},options(t,e){t.setOptions(e)},radius(t,e){t.setRadius(e)},visible(t,e){t.setVisible(e)}},Nh={};function Uh({options:t,center:e,radius:n,draggable:s,editable:i,visible:a,onDblClick:c,onDragEnd:f,onDragStart:h,onMouseDown:u,onMouseMove:g,onMouseOut:m,onMouseOver:y,onMouseUp:w,onRightClick:L,onClick:E,onDrag:k,onCenterChanged:S,onRadiusChanged:C,onLoad:x,onUnmount:b}){const P=l.useContext(Q),[T,A]=l.useState(null),[R,I]=l.useState(null),[M,$]=l.useState(null),[N,G]=l.useState(null),[U,J]=l.useState(null),[q,F]=l.useState(null),[B,H]=l.useState(null),[z,re]=l.useState(null),[X,j]=l.useState(null),[O,de]=l.useState(null),[le,Y]=l.useState(null),[V,oe]=l.useState(null),[ne,Ae]=l.useState(null),[pe,Ie]=l.useState(null);return l.useEffect(()=>{T!==null&&T.setMap(P)},[P]),l.useEffect(()=>{typeof t<"u"&&T!==null&&T.setOptions(t)},[T,t]),l.useEffect(()=>{typeof s<"u"&&T!==null&&T.setDraggable(s)},[T,s]),l.useEffect(()=>{typeof i<"u"&&T!==null&&T.setEditable(i)},[T,i]),l.useEffect(()=>{typeof a<"u"&&T!==null&&T.setVisible(a)},[T,a]),l.useEffect(()=>{typeof n=="number"&&T!==null&&T.setRadius(n)},[T,n]),l.useEffect(()=>{typeof e<"u"&&T!==null&&T.setCenter(e)},[T,e]),l.useEffect(()=>{T&&c&&(R!==null&&google.maps.event.removeListener(R),I(google.maps.event.addListener(T,"dblclick",c)))},[c]),l.useEffect(()=>{T&&f&&(M!==null&&google.maps.event.removeListener(M),$(google.maps.event.addListener(T,"dragend",f)))},[f]),l.useEffect(()=>{T&&h&&(N!==null&&google.maps.event.removeListener(N),G(google.maps.event.addListener(T,"dragstart",h)))},[h]),l.useEffect(()=>{T&&u&&(U!==null&&google.maps.event.removeListener(U),J(google.maps.event.addListener(T,"mousedown",u)))},[u]),l.useEffect(()=>{T&&g&&(q!==null&&google.maps.event.removeListener(q),F(google.maps.event.addListener(T,"mousemove",g)))},[g]),l.useEffect(()=>{T&&m&&(B!==null&&google.maps.event.removeListener(B),H(google.maps.event.addListener(T,"mouseout",m)))},[m]),l.useEffect(()=>{T&&y&&(z!==null&&google.maps.event.removeListener(z),re(google.maps.event.addListener(T,"mouseover",y)))},[y]),l.useEffect(()=>{T&&w&&(X!==null&&google.maps.event.removeListener(X),j(google.maps.event.addListener(T,"mouseup",w)))},[w]),l.useEffect(()=>{T&&L&&(O!==null&&google.maps.event.removeListener(O),de(google.maps.event.addListener(T,"rightclick",L)))},[L]),l.useEffect(()=>{T&&E&&(le!==null&&google.maps.event.removeListener(le),Y(google.maps.event.addListener(T,"click",E)))},[E]),l.useEffect(()=>{T&&k&&(V!==null&&google.maps.event.removeListener(V),oe(google.maps.event.addListener(T,"drag",k)))},[k]),l.useEffect(()=>{T&&S&&(ne!==null&&google.maps.event.removeListener(ne),Ae(google.maps.event.addListener(T,"center_changed",S)))},[E]),l.useEffect(()=>{T&&C&&(pe!==null&&google.maps.event.removeListener(pe),Ie(google.maps.event.addListener(T,"radius_changed",C)))},[C]),l.useEffect(()=>{const ce=new google.maps.Circle(Object.assign(Object.assign({},t||Nh),{map:P}));return typeof n=="number"&&ce.setRadius(n),typeof e<"u"&&ce.setCenter(e),typeof n=="number"&&ce.setRadius(n),typeof a<"u"&&ce.setVisible(a),typeof i<"u"&&ce.setEditable(i),typeof s<"u"&&ce.setDraggable(s),c&&I(google.maps.event.addListener(ce,"dblclick",c)),f&&$(google.maps.event.addListener(ce,"dragend",f)),h&&G(google.maps.event.addListener(ce,"dragstart",h)),u&&J(google.maps.event.addListener(ce,"mousedown",u)),g&&F(google.maps.event.addListener(ce,"mousemove",g)),m&&H(google.maps.event.addListener(ce,"mouseout",m)),y&&re(google.maps.event.addListener(ce,"mouseover",y)),w&&j(google.maps.event.addListener(ce,"mouseup",w)),L&&de(google.maps.event.addListener(ce,"rightclick",L)),E&&Y(google.maps.event.addListener(ce,"click",E)),k&&oe(google.maps.event.addListener(ce,"drag",k)),S&&Ae(google.maps.event.addListener(ce,"center_changed",S)),C&&Ie(google.maps.event.addListener(ce,"radius_changed",C)),A(ce),x&&x(ce),()=>{R!==null&&google.maps.event.removeListener(R),M!==null&&google.maps.event.removeListener(M),N!==null&&google.maps.event.removeListener(N),U!==null&&google.maps.event.removeListener(U),q!==null&&google.maps.event.removeListener(q),B!==null&&google.maps.event.removeListener(B),z!==null&&google.maps.event.removeListener(z),X!==null&&google.maps.event.removeListener(X),O!==null&&google.maps.event.removeListener(O),le!==null&&google.maps.event.removeListener(le),ne!==null&&google.maps.event.removeListener(ne),pe!==null&&google.maps.event.removeListener(pe),b&&b(ce),ce.setMap(null)}},[]),null}l.memo(Uh);class ts extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={circle:null},this.setCircleCallback=()=>{this.state.circle!==null&&this.props.onLoad&&this.props.onLoad(this.state.circle)}}componentDidMount(){const e=new google.maps.Circle(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=te({updaterMap:so,eventMap:no,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{circle:e}},this.setCircleCallback)}componentDidUpdate(e){this.state.circle!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:so,eventMap:no,prevProps:e,nextProps:this.props,instance:this.state.circle}))}componentWillUnmount(){this.state.circle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.circle),ie(this.registeredEvents),this.state.circle&&this.state.circle.setMap(null))}render(){return null}}ts.contextType=Q;const io={onClick:"click",onDblClick:"dblclick",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick",onAddFeature:"addfeature",onRemoveFeature:"removefeature",onRemoveProperty:"removeproperty",onSetGeometry:"setgeometry",onSetProperty:"setproperty"},ro={add(t,e){t.add(e)},addgeojson(t,e,n){t.addGeoJson(e,n)},contains(t,e){t.contains(e)},foreach(t,e){t.forEach(e)},loadgeojson(t,e,n,s){t.loadGeoJson(e,n,s)},overridestyle(t,e,n){t.overrideStyle(e,n)},remove(t,e){t.remove(e)},revertstyle(t,e){t.revertStyle(e)},controlposition(t,e){t.setControlPosition(e)},controls(t,e){t.setControls(e)},drawingmode(t,e){t.setDrawingMode(e)},map(t,e){t.setMap(e)},style(t,e){t.setStyle(e)},togeojson(t,e){t.toGeoJson(e)}};function zh({options:t,onClick:e,onDblClick:n,onMouseDown:s,onMouseMove:i,onMouseOut:a,onMouseOver:c,onMouseUp:f,onRightClick:h,onAddFeature:u,onRemoveFeature:g,onRemoveProperty:m,onSetGeometry:y,onSetProperty:w,onLoad:L,onUnmount:E}){const k=l.useContext(Q),[S,C]=l.useState(null),[x,b]=l.useState(null),[P,T]=l.useState(null),[A,R]=l.useState(null),[I,M]=l.useState(null),[$,N]=l.useState(null),[G,U]=l.useState(null),[J,q]=l.useState(null),[F,B]=l.useState(null),[H,z]=l.useState(null),[re,X]=l.useState(null),[j,O]=l.useState(null),[de,le]=l.useState(null),[Y,V]=l.useState(null);return l.useEffect(()=>{S!==null&&S.setMap(k)},[k]),l.useEffect(()=>{S&&n&&(x!==null&&google.maps.event.removeListener(x),b(google.maps.event.addListener(S,"dblclick",n)))},[n]),l.useEffect(()=>{S&&s&&(P!==null&&google.maps.event.removeListener(P),T(google.maps.event.addListener(S,"mousedown",s)))},[s]),l.useEffect(()=>{S&&i&&(A!==null&&google.maps.event.removeListener(A),R(google.maps.event.addListener(S,"mousemove",i)))},[i]),l.useEffect(()=>{S&&a&&(I!==null&&google.maps.event.removeListener(I),M(google.maps.event.addListener(S,"mouseout",a)))},[a]),l.useEffect(()=>{S&&c&&($!==null&&google.maps.event.removeListener($),N(google.maps.event.addListener(S,"mouseover",c)))},[c]),l.useEffect(()=>{S&&f&&(G!==null&&google.maps.event.removeListener(G),U(google.maps.event.addListener(S,"mouseup",f)))},[f]),l.useEffect(()=>{S&&h&&(J!==null&&google.maps.event.removeListener(J),q(google.maps.event.addListener(S,"rightclick",h)))},[h]),l.useEffect(()=>{S&&e&&(F!==null&&google.maps.event.removeListener(F),B(google.maps.event.addListener(S,"click",e)))},[e]),l.useEffect(()=>{S&&u&&(H!==null&&google.maps.event.removeListener(H),z(google.maps.event.addListener(S,"addfeature",u)))},[u]),l.useEffect(()=>{S&&g&&(re!==null&&google.maps.event.removeListener(re),X(google.maps.event.addListener(S,"removefeature",g)))},[g]),l.useEffect(()=>{S&&m&&(j!==null&&google.maps.event.removeListener(j),O(google.maps.event.addListener(S,"removeproperty",m)))},[m]),l.useEffect(()=>{S&&y&&(de!==null&&google.maps.event.removeListener(de),le(google.maps.event.addListener(S,"setgeometry",y)))},[y]),l.useEffect(()=>{S&&w&&(Y!==null&&google.maps.event.removeListener(Y),V(google.maps.event.addListener(S,"setproperty",w)))},[w]),l.useEffect(()=>{if(k!==null){const oe=new google.maps.Data(Object.assign(Object.assign({},t||{}),{map:k}));n&&b(google.maps.event.addListener(oe,"dblclick",n)),s&&T(google.maps.event.addListener(oe,"mousedown",s)),i&&R(google.maps.event.addListener(oe,"mousemove",i)),a&&M(google.maps.event.addListener(oe,"mouseout",a)),c&&N(google.maps.event.addListener(oe,"mouseover",c)),f&&U(google.maps.event.addListener(oe,"mouseup",f)),h&&q(google.maps.event.addListener(oe,"rightclick",h)),e&&B(google.maps.event.addListener(oe,"click",e)),u&&z(google.maps.event.addListener(oe,"addfeature",u)),g&&X(google.maps.event.addListener(oe,"removefeature",g)),m&&O(google.maps.event.addListener(oe,"removeproperty",m)),y&&le(google.maps.event.addListener(oe,"setgeometry",y)),w&&V(google.maps.event.addListener(oe,"setproperty",w)),C(oe),L&&L(oe)}return()=>{S&&(x!==null&&google.maps.event.removeListener(x),P!==null&&google.maps.event.removeListener(P),A!==null&&google.maps.event.removeListener(A),I!==null&&google.maps.event.removeListener(I),$!==null&&google.maps.event.removeListener($),G!==null&&google.maps.event.removeListener(G),J!==null&&google.maps.event.removeListener(J),F!==null&&google.maps.event.removeListener(F),H!==null&&google.maps.event.removeListener(H),re!==null&&google.maps.event.removeListener(re),j!==null&&google.maps.event.removeListener(j),de!==null&&google.maps.event.removeListener(de),Y!==null&&google.maps.event.removeListener(Y),E&&E(S),S.setMap(null))}},[]),null}l.memo(zh);class Hh extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={data:null},this.setDataCallback=()=>{this.state.data!==null&&this.props.onLoad&&this.props.onLoad(this.state.data)}}componentDidMount(){if(this.context!==null){const e=new google.maps.Data(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=te({updaterMap:ro,eventMap:io,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({data:e}),this.setDataCallback)}}componentDidUpdate(e){this.state.data!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:ro,eventMap:io,prevProps:e,nextProps:this.props,instance:this.state.data}))}componentWillUnmount(){this.state.data!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.data),ie(this.registeredEvents),this.state.data&&this.state.data.setMap(null))}render(){return null}}Hh.contextType=Q;const oo={onClick:"click",onDefaultViewportChanged:"defaultviewport_changed",onStatusChanged:"status_changed"},ao={options(t,e){t.setOptions(e)},url(t,e){t.setUrl(e)},zIndex(t,e){t.setZIndex(e)}};class Fh extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={kmlLayer:null},this.setKmlLayerCallback=()=>{this.state.kmlLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.kmlLayer)}}componentDidMount(){const e=new google.maps.KmlLayer(Object.assign(Object.assign({},this.props.options),{map:this.context}));this.registeredEvents=te({updaterMap:ao,eventMap:oo,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{kmlLayer:e}},this.setKmlLayerCallback)}componentDidUpdate(e){this.state.kmlLayer!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:ao,eventMap:oo,prevProps:e,nextProps:this.props,instance:this.state.kmlLayer}))}componentWillUnmount(){this.state.kmlLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.kmlLayer),ie(this.registeredEvents),this.state.kmlLayer.setMap(null))}render(){return null}}Fh.contextType=Q;function Ma(t,e){return typeof e=="function"?e(t.offsetWidth,t.offsetHeight):{x:0,y:0}}function Vh(t,e){return new e(t.lat,t.lng)}function Wh(t,e){return new e(new google.maps.LatLng(t.ne.lat,t.ne.lng),new google.maps.LatLng(t.sw.lat,t.sw.lng))}function Gh(t,e,n){return t instanceof e?t:n(t,e)}function qh(t,e,n){return t instanceof e?t:n(t,e)}function Kh(t,e,n){const s=t&&t.fromLatLngToDivPixel(n.getNorthEast()),i=t&&t.fromLatLngToDivPixel(n.getSouthWest());return s&&i?{left:`${i.x+e.x}px`,top:`${s.y+e.y}px`,width:`${s.x-i.x-e.x}px`,height:`${i.y-s.y-e.y}px`}:{left:"-9999px",top:"-9999px"}}function Zh(t,e,n){const s=t&&t.fromLatLngToDivPixel(n);if(s){const{x:i,y:a}=s;return{left:`${i+e.x}px`,top:`${a+e.y}px`}}return{left:"-9999px",top:"-9999px"}}function Aa(t,e,n,s){return n!==void 0?Kh(t,e,qh(n,google.maps.LatLngBounds,Wh)):Zh(t,e,Gh(s,google.maps.LatLng,Vh))}function Jh(t,e){return t.left===e.left&&t.top===e.top&&t.width===e.height&&t.height===e.height}function Yh(t,e,n,s,i){class a extends google.maps.OverlayView{constructor(f,h,u,g){super(),this.container=f,this.pane=h,this.position=u,this.bounds=g}onAdd(){var f;const h=(f=this.getPanes())===null||f===void 0?void 0:f[this.pane];h==null||h.appendChild(this.container)}draw(){const f=this.getProjection(),h=Object.assign({},this.container?Ma(this.container,i):{x:0,y:0}),u=Aa(f,h,this.bounds,this.position);for(const[g,m]of Object.entries(u))this.container.style[g]=m}onRemove(){this.container.parentNode!==null&&this.container.parentNode.removeChild(this.container)}}return new a(t,e,n,s)}function lo(t){return t?(t instanceof google.maps.LatLng?t:new google.maps.LatLng(t.lat,t.lng))+"":""}function co(t){return t?(t instanceof google.maps.LatLngBounds?t:new google.maps.LatLngBounds(new google.maps.LatLng(t.south,t.east),new google.maps.LatLng(t.north,t.west)))+"":""}function Xh({position:t,bounds:e,mapPaneName:n,zIndex:s,onLoad:i,onUnmount:a,getPixelPositionOffset:c,children:f}){const h=l.useContext(Q),u=l.useMemo(()=>{const m=document.createElement("div");return m.style.position="absolute",m},[]),g=l.useMemo(()=>Yh(u,n,t,e,c),[u,n,t,e]);return l.useEffect(()=>(i==null||i(g),g==null||g.setMap(h),()=>{a==null||a(g),g==null||g.setMap(null)}),[h,g]),l.useEffect(()=>{u.style.zIndex=`${s}`},[s,u]),At.createPortal(f,u)}l.memo(Xh);class on extends l.PureComponent{constructor(e){super(e),this.state={paneEl:null,containerStyle:{position:"absolute"}},this.updatePane=()=>{const s=this.props.mapPaneName,i=this.overlayView.getPanes();be(!!s,"OverlayView requires props.mapPaneName but got %s",s),i?this.setState({paneEl:i[s]}):this.setState({paneEl:null})},this.onAdd=()=>{var s,i;this.updatePane(),(i=(s=this.props).onLoad)===null||i===void 0||i.call(s,this.overlayView)},this.onPositionElement=()=>{const s=this.overlayView.getProjection(),i=Object.assign({x:0,y:0},this.containerRef.current?Ma(this.containerRef.current,this.props.getPixelPositionOffset):{}),a=Aa(s,i,this.props.bounds,this.props.position),{left:c,top:f,width:h,height:u}=this.state.containerStyle;Jh(a,{left:c,top:f,width:h,height:u})||this.setState({containerStyle:Object.assign(Object.assign({},a),{position:"absolute"})})},this.draw=()=>{this.onPositionElement()},this.onRemove=()=>{var s,i;this.setState(()=>({paneEl:null})),(i=(s=this.props).onUnmount)===null||i===void 0||i.call(s,this.overlayView)},this.containerRef=l.createRef();const n=new google.maps.OverlayView;n.onAdd=this.onAdd,n.draw=this.draw,n.onRemove=this.onRemove,this.overlayView=n}componentDidMount(){this.overlayView.setMap(this.context)}componentDidUpdate(e){const n=lo(e.position),s=lo(this.props.position),i=co(e.bounds),a=co(this.props.bounds);(n!==s||i!==a)&&this.overlayView.draw(),e.mapPaneName!==this.props.mapPaneName&&this.updatePane()}componentWillUnmount(){this.overlayView.setMap(null)}render(){const e=this.state.paneEl;return e?At.createPortal(v.jsx("div",Object.assign({ref:this.containerRef,style:this.state.containerStyle},{children:l.Children.only(this.props.children)})),e):null}}on.FLOAT_PANE="floatPane";on.MAP_PANE="mapPane";on.MARKER_LAYER="markerLayer";on.OVERLAY_LAYER="overlayLayer";on.OVERLAY_MOUSE_TARGET="overlayMouseTarget";on.contextType=Q;function Qh(){}const uo={onDblClick:"dblclick",onClick:"click"},ho={opacity(t,e){t.setOpacity(e)}};function ef({url:t,bounds:e,options:n,visible:s}){const i=l.useContext(Q),a=new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.west),new google.maps.LatLng(e.north,e.east)),c=l.useMemo(()=>new google.maps.GroundOverlay(t,a,Object.assign({},n)),[]);return l.useEffect(()=>{c!==null&&c.setMap(i)},[i]),l.useEffect(()=>{typeof t<"u"&&c!==null&&(c.set("url",t),c.setMap(i))},[c,t]),l.useEffect(()=>{typeof s<"u"&&c!==null&&c.setOpacity(s?1:0)},[c,s]),l.useEffect(()=>{const f=new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.west),new google.maps.LatLng(e.north,e.east));typeof e<"u"&&c!==null&&(c.set("bounds",f),c.setMap(i))},[c,e]),null}l.memo(ef);class Oa extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={groundOverlay:null},this.setGroundOverlayCallback=()=>{this.state.groundOverlay!==null&&this.props.onLoad&&this.props.onLoad(this.state.groundOverlay)}}componentDidMount(){be(!!this.props.url||!!this.props.bounds,"For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");const e=new google.maps.GroundOverlay(this.props.url,this.props.bounds,Object.assign(Object.assign({},this.props.options),{map:this.context}));this.registeredEvents=te({updaterMap:ho,eventMap:uo,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{groundOverlay:e}},this.setGroundOverlayCallback)}componentDidUpdate(e){this.state.groundOverlay!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:ho,eventMap:uo,prevProps:e,nextProps:this.props,instance:this.state.groundOverlay}))}componentWillUnmount(){this.state.groundOverlay&&(this.props.onUnmount&&this.props.onUnmount(this.state.groundOverlay),this.state.groundOverlay.setMap(null))}render(){return null}}Oa.defaultProps={onLoad:Qh};Oa.contextType=Q;const fo={},po={data(t,e){t.setData(e)},map(t,e){t.setMap(e)},options(t,e){t.setOptions(e)}};function tf({data:t,onLoad:e,onUnmount:n,options:s}){const i=l.useContext(Q),[a,c]=l.useState(null);return l.useEffect(()=>{google.maps.visualization||be(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} in useJsApiScript? %s',google.maps.visualization)},[]),l.useEffect(()=>{be(!!t,"data property is required in HeatmapLayer %s",t)},[t]),l.useEffect(()=>{a!==null&&a.setMap(i)},[i]),l.useEffect(()=>{s&&a!==null&&a.setOptions(s)},[a,s]),l.useEffect(()=>{const f=new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({},s||{}),{data:t,map:i}));return c(f),e&&e(f),()=>{a!==null&&(n&&n(a),a.setMap(null))}},[]),null}l.memo(tf);class nf extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={heatmapLayer:null},this.setHeatmapLayerCallback=()=>{this.state.heatmapLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.heatmapLayer)}}componentDidMount(){be(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} to <LoadScript />? %s',google.maps.visualization),be(!!this.props.data,"data property is required in HeatmapLayer %s",this.props.data);const e=new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({},this.props.options||{}),{data:this.props.data,map:this.context}));this.registeredEvents=te({updaterMap:po,eventMap:fo,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{heatmapLayer:e}},this.setHeatmapLayerCallback)}componentDidUpdate(e){ie(this.registeredEvents),this.registeredEvents=te({updaterMap:po,eventMap:fo,prevProps:e,nextProps:this.props,instance:this.state.heatmapLayer})}componentWillUnmount(){this.state.heatmapLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.heatmapLayer),ie(this.registeredEvents),this.state.heatmapLayer.setMap(null))}render(){return null}}nf.contextType=Q;const go={onCloseClick:"closeclick",onPanoChanged:"pano_changed",onPositionChanged:"position_changed",onPovChanged:"pov_changed",onResize:"resize",onStatusChanged:"status_changed",onVisibleChanged:"visible_changed",onZoomChanged:"zoom_changed"},mo={register(t,e,n){t.registerPanoProvider(e,n)},links(t,e){t.setLinks(e)},motionTracking(t,e){t.setMotionTracking(e)},options(t,e){t.setOptions(e)},pano(t,e){t.setPano(e)},position(t,e){t.setPosition(e)},pov(t,e){t.setPov(e)},visible(t,e){t.setVisible(e)},zoom(t,e){t.setZoom(e)}};class sf extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={streetViewPanorama:null},this.setStreetViewPanoramaCallback=()=>{this.state.streetViewPanorama!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewPanorama)}}componentDidMount(){const e=this.context.getStreetView();this.registeredEvents=te({updaterMap:mo,eventMap:go,prevProps:{},nextProps:this.props,instance:e}),this.setState(()=>({streetViewPanorama:e}),this.setStreetViewPanoramaCallback)}componentDidUpdate(e){this.state.streetViewPanorama!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:mo,eventMap:go,prevProps:e,nextProps:this.props,instance:this.state.streetViewPanorama}))}componentWillUnmount(){this.state.streetViewPanorama!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.streetViewPanorama),ie(this.registeredEvents),this.state.streetViewPanorama.setVisible(!1))}render(){return null}}sf.contextType=Q;class rf extends l.PureComponent{constructor(){super(...arguments),this.state={streetViewService:null},this.setStreetViewServiceCallback=()=>{this.state.streetViewService!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewService)}}componentDidMount(){const e=new google.maps.StreetViewService;this.setState(function(){return{streetViewService:e}},this.setStreetViewServiceCallback)}componentWillUnmount(){this.state.streetViewService!==null&&this.props.onUnmount&&this.props.onUnmount(this.state.streetViewService)}render(){return null}}rf.contextType=Q;const vo={onDirectionsChanged:"directions_changed"},wo={directions(t,e){t.setDirections(e)},map(t,e){t.setMap(e)},options(t,e){t.setOptions(e)},panel(t,e){t.setPanel(e)},routeIndex(t,e){t.setRouteIndex(e)}};class of extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={directionsRenderer:null},this.setDirectionsRendererCallback=()=>{this.state.directionsRenderer!==null&&(this.state.directionsRenderer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.directionsRenderer))}}componentDidMount(){const e=new google.maps.DirectionsRenderer(this.props.options);this.registeredEvents=te({updaterMap:wo,eventMap:vo,prevProps:{},nextProps:this.props,instance:e}),this.setState(function(){return{directionsRenderer:e}},this.setDirectionsRendererCallback)}componentDidUpdate(e){this.state.directionsRenderer!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:wo,eventMap:vo,prevProps:e,nextProps:this.props,instance:this.state.directionsRenderer}))}componentWillUnmount(){this.state.directionsRenderer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.directionsRenderer),ie(this.registeredEvents),this.state.directionsRenderer&&this.state.directionsRenderer.setMap(null))}render(){return v.jsx(v.Fragment,{})}}of.contextType=Q;const bo={onPlacesChanged:"places_changed"},yo={bounds(t,e){t.setBounds(e)}};class af extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=l.createRef(),this.state={searchBox:null},this.setSearchBoxCallback=()=>{this.state.searchBox!==null&&this.props.onLoad&&this.props.onLoad(this.state.searchBox)}}componentDidMount(){if(be(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places),this.containerElement!==null&&this.containerElement.current!==null){const e=this.containerElement.current.querySelector("input");if(e!==null){const n=new google.maps.places.SearchBox(e,this.props.options);this.registeredEvents=te({updaterMap:yo,eventMap:bo,prevProps:{},nextProps:this.props,instance:n}),this.setState(function(){return{searchBox:n}},this.setSearchBoxCallback)}}}componentDidUpdate(e){this.state.searchBox!==null&&(ie(this.registeredEvents),this.registeredEvents=te({updaterMap:yo,eventMap:bo,prevProps:e,nextProps:this.props,instance:this.state.searchBox}))}componentWillUnmount(){this.state.searchBox!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.searchBox),ie(this.registeredEvents))}render(){return v.jsx("div",Object.assign({ref:this.containerElement},{children:l.Children.only(this.props.children)}))}}af.contextType=Q;const xo={onPlaceChanged:"place_changed"},Lo={bounds(t,e){t.setBounds(e)},restrictions(t,e){t.setComponentRestrictions(e)},fields(t,e){t.setFields(e)},options(t,e){t.setOptions(e)},types(t,e){t.setTypes(e)}};class Ra extends l.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=l.createRef(),this.state={autocomplete:null},this.setAutocompleteCallback=()=>{this.state.autocomplete!==null&&this.props.onLoad&&this.props.onLoad(this.state.autocomplete)}}componentDidMount(){be(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places);const e=this.containerElement.current.querySelector("input");if(e){const n=new google.maps.places.Autocomplete(e,this.props.options);this.registeredEvents=te({updaterMap:Lo,eventMap:xo,prevProps:{},nextProps:this.props,instance:n}),this.setState(()=>({autocomplete:n}),this.setAutocompleteCallback)}}componentDidUpdate(e){ie(this.registeredEvents),this.registeredEvents=te({updaterMap:Lo,eventMap:xo,prevProps:e,nextProps:this.props,instance:this.state.autocomplete})}componentWillUnmount(){this.state.autocomplete!==null&&ie(this.registeredEvents)}render(){return v.jsx("div",Object.assign({ref:this.containerElement,className:this.props.className},{children:l.Children.only(this.props.children)}))}}Ra.defaultProps={className:""};Ra.contextType=Q;const $a="https://tcgbusfs.blob.core.windows.net/blobtcmsv",lf=()=>fetch(`${$a}/TCMSV_alldesc.json`).then(t=>t.json()),cf=()=>fetch(`${$a}/TCMSV_allavailable.json`).then(t=>t.json()),Tn=l.createContext([]),Da=({children:t})=>{const[e,n]=l.useState([]),[s,i]=l.useState(""),[a,c]=l.useState(!1);async function f(){const[h,u]=await Promise.all([lf(),cf()]),g=h.data.park,m=u.data.park,y=u.data.UPDATETIME,w=m.map(L=>{const E=g.find(q=>q.id===L.id);if(!E)return null;const{name:k,totalcar:S,payex:C,tel:x,serviceTime:b,tw97x:P,tw97y:T,area:A,address:R}=E,{lat:I,lng:M}=pd(P,T),$=b==="00:00:00~23:59:59"?"24小時":b,{id:N,availablecar:G,ChargeStation:U}=L,J=U===void 0?"無":"有";return G<=0?null:{id:N,name:k,availablecar:G,totalcar:S,payex:C,address:R,area:A,hasChargingStation:J,tel:x,opening:$,lat:I,lng:M}}).filter(L=>L!==null);n(w),i(y),c(!1)}return l.useEffect(()=>{f(),c(!0)},[]),v.jsx(Tn.Provider,{value:{sortData:e,updateTime:s,isLoading:a},children:t})};Da.propTypes={children:ee.node};function cs(){return cs=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},cs.apply(this,arguments)}var Eo=function(t){var e=l.useRef(t);return e.current=t,e},uf=function(t,e){var n;return function(){for(var s=this,i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];n!==null&&(clearTimeout(n),n=null),n=setTimeout(function(){return t.apply(s,a)},e)}},df="💡 use-places-autocomplete: Google Maps Places API library must be loaded. See: https://github.com/wellyshen/use-places-autocomplete#load-the-library",hf=function(e){var n=e===void 0?{}:e,s=n.requestOptions,i=n.debounce,a=i===void 0?200:i,c=n.cache,f=c===void 0?24*60*60:c,h=n.cacheKey,u=n.googleMaps,g=n.callbackName,m=n.defaultValue,y=m===void 0?"":m,w=n.initOnMount,L=w===void 0?!0:w,E=l.useState(!1),k=E[0],S=E[1],C=l.useState(y),x=C[0],b=C[1],P=l.useState({loading:!1,status:"",data:[]}),T=P[0],A=P[1],R=l.useRef(null),I=Eo(s),M=Eo(u),$=h?"upa-"+h:"upa",N=l.useCallback(function(){var F;if(!R.current){var B=window,H=B.google,z=M.current,re=(z==null?void 0:z.places)||(H==null||(F=H.maps)==null?void 0:F.places);if(!re){console.error(df);return}R.current=new re.AutocompleteService,S(!0)}},[]),G=l.useCallback(function(){A({loading:!1,status:"",data:[]})},[]),U=l.useCallback(function(){try{sessionStorage.removeItem($)}catch{}},[]),J=l.useCallback(uf(function(F){if(!F){G();return}A(function(H){return cs({},H,{loading:!0})});var B={};try{B=JSON.parse(sessionStorage.getItem($)||"{}")}catch{}if(f&&(B=Object.keys(B).reduce(function(H,z){return B[z].maxAge-Date.now()>=0&&(H[z]=B[z]),H},{}),B[F])){A({loading:!1,status:"OK",data:B[F].data});return}R.current.getPlacePredictions(cs({},I.current,{input:F}),function(H,z){if(A({loading:!1,status:z,data:H||[]}),f&&z==="OK"){B[F]={data:H,maxAge:Date.now()+f*1e3};try{sessionStorage.setItem($,JSON.stringify(B))}catch{}}})},a),[a,G]),q=l.useCallback(function(F,B){B===void 0&&(B=!0),b(F),R.current&&B&&J(F)},[J]);return l.useEffect(function(){if(!L)return function(){return null};var F=window,B=F.google;return!M.current&&!(B!=null&&B.maps)&&g?window[g]=N:N(),function(){window[g]&&delete window[g]}},[g,N]),{ready:k,value:x,suggestions:T,setValue:q,clearSuggestions:G,clearCache:U,init:N}},ff="💡 use-places-autocomplete: Please provide an address when using getGeocode() with the componentRestrictions.",pf=function(e){var n=new window.google.maps.Geocoder;return new Promise(function(s,i){n.geocode(e,function(a,c){c!=="OK"&&i(c),!e.address&&e.componentRestrictions&&(console.error(ff),s(a)),s(a)})})},gf=function(e){return new Promise(function(n,s){try{var i=e.geometry.location,a=i.lat,c=i.lng;n({lat:a(),lng:c()})}catch(f){s(f)}})};function Ba(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var ft=Ba()?l.useLayoutEffect:l.useEffect;function yi(t,e){var n=l.createContext(e);return n}function mf(t){return typeof t=="boolean"}function bs(t){return!!(t&&{}.toString.call(t)=="[object Function]")}function vf(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(function(s){return s!=null}).join("--")}function ri(){}function Co(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function wf(t,e){if(t){if(typeof t=="string")return Co(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Co(t,e)}}function bf(t,e){var n;if(typeof Symbol>"u"||t[Symbol.iterator]==null){if(Array.isArray(t)||(n=wf(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var s=0;return function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return n=t[Symbol.iterator](),n.next.bind(n)}function yf(t,e){if(t!=null)if(bs(t))t(e);else try{t.current=e}catch{throw new Error('Cannot assign value "'+e+'" to ref "'+t+'"')}}function ys(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return l.useCallback(function(s){for(var i=bf(e),a;!(a=i()).done;){var c=a.value;yf(c,s)}},e)}function xf(t,e){var n=l.useRef(!1);l.useEffect(function(){n.current?t():n.current=!0},e)}function Lf(t,e){var n=l.useState(e),s=n[0],i=n[1],a=l.useCallback(function(c){t.current=c,i(c)},[]);return[s,a]}function at(t,e){return function(n){if(t&&t(n),!n.defaultPrevented)return e(n)}}function ja(){var t=l.useState(Object.create(null)),e=t[1];return l.useCallback(function(){e(Object.create(null))},[])}function Ef(t,e){if(t==null)return{};var n={},s=Object.keys(t),i,a;for(a=0;a<s.length;a++)i=s[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ht(){return ht=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ht.apply(this,arguments)}var Cf=["element","index"];function kf(t,e){e===void 0&&(e={});var n=[];return yi(t,ht({descendants:n,registerDescendant:ri,unregisterDescendant:ri},e))}function If(t,e,n){var s=ja(),i=l.useContext(e),a=i.registerDescendant,c=i.unregisterDescendant,f=i.descendants,h=n??f.findIndex(function(u){return u.element===t.element});return ft(function(){return t.element||s(),a(ht({},t,{index:h})),function(){c(t.element)}},[t,s,h,a,c].concat(Object.values(t))),h}function Sf(){return l.useState([])}function _f(t){return l.useContext(t).descendants}function Tf(t){var e=t.context,n=t.children,s=t.items,i=t.set,a=l.useCallback(function(f){var h=f.element,u=f.index,g=Ef(f,Cf);h&&i(function(m){var y;if(u!=null)return[].concat(m,[ht({},g,{element:h,index:u})]).sort(function(E,k){return E.index-k.index});if(m.length===0)y=[ht({},g,{element:h,index:0})];else if(m.find(function(E){return E.element===h}))y=m;else{var w=m.findIndex(function(E){return!E.element||!h?!1:!!(E.element.compareDocumentPosition(h)&Node.DOCUMENT_POSITION_PRECEDING)}),L=ht({},g,{element:h,index:w});w===-1?y=[].concat(m,[L]):y=[].concat(m.slice(0,w),[L],m.slice(w))}return y.map(function(E,k){return ht({},E,{index:k})})})},[]),c=l.useCallback(function(f){f&&i(function(h){return h.filter(function(u){return f!==u.element})})},[]);return l.createElement(e.Provider,{value:l.useMemo(function(){return{descendants:s,registerDescendant:a,unregisterDescendant:c}},[s,a,c])},n)}var Ds=!1,Pf=0,ko=function(){return++Pf};function Mf(t){var e=t||(Ds?ko():null),n=l.useState(e),s=n[0],i=n[1];return ft(function(){s===null&&i(ko())},[]),l.useEffect(function(){Ds===!1&&(Ds=!0)},[]),s!=null?String(s):void 0}var Af=function(e){var n=e.children,s=e.type,i=s===void 0?"reach-portal":s,a=e.containerRef,c=l.useRef(null),f=l.useRef(null),h=ja();return ft(function(){if(c.current){var u=c.current.ownerDocument,g=(a==null?void 0:a.current)||u.body;return f.current=u==null?void 0:u.createElement(i),g.appendChild(f.current),h(),function(){f.current&&g&&g.removeChild(f.current)}}},[i,h,a]),f.current?At.createPortal(n,f.current):l.createElement("span",{ref:c})},Of=["bottom","height","left","right","top","width"],Rf=function(e,n){return e===void 0&&(e={}),n===void 0&&(n={}),Of.some(function(s){return e[s]!==n[s]})},ot=new Map,Na,$f=function t(){var e=[];ot.forEach(function(n,s){var i=s.getBoundingClientRect();Rf(i,n.rect)&&(n.rect=i,e.push(n))}),e.forEach(function(n){n.callbacks.forEach(function(s){return s(n.rect)})}),Na=window.requestAnimationFrame(t)};function Df(t,e){return{observe:function(){var s=ot.size===0;ot.has(t)?ot.get(t).callbacks.push(e):ot.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[e]}),s&&$f()},unobserve:function(){var s=ot.get(t);if(s){var i=s.callbacks.indexOf(e);i>=0&&s.callbacks.splice(i,1),s.callbacks.length||ot.delete(t),ot.size||cancelAnimationFrame(Na)}}}}function Io(t,e,n){var s,i;if(mf(e))s=e;else{var a;s=(a=e==null?void 0:e.observe)!=null?a:!0,i=e==null?void 0:e.onChange}bs(n)&&(i=n);var c=l.useState(t.current),f=c[0],h=c[1],u=l.useRef(!1),g=l.useRef(!1),m=l.useState(null),y=m[0],w=m[1],L=l.useRef(i);return ft(function(){L.current=i,t.current!==f&&h(t.current)}),ft(function(){f&&!u.current&&(u.current=!0,w(f.getBoundingClientRect()))},[f]),ft(function(){if(s){var E=f;if(g.current||(g.current=!0,E=t.current),!!E){var k=Df(E,function(S){L.current==null||L.current(S),w(S)});return k.observe(),function(){k.unobserve()}}}},[s,f,t]),y}function Bf(t){return Ba()?t?t.ownerDocument:document:null}var Ua=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],oi=Ua.join(","),xi=typeof Element>"u"?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function Li(t,e){e=e||{};var n=[],s=[],i=t.querySelectorAll(oi);e.includeContainer&&xi.call(t,oi)&&(i=Array.prototype.slice.apply(i),i.unshift(t));var a,c,f;for(a=0;a<i.length;a++)c=i[a],za(c)&&(f=Fa(c),f===0?n.push(c):s.push({documentOrder:a,tabIndex:f,node:c}));var h=s.sort(zf).map(function(u){return u.node}).concat(n);return h}Li.isTabbable=jf;Li.isFocusable=Uf;function za(t){return!(!Ha(t)||Wf(t)||Fa(t)<0)}function jf(t){if(!t)throw new Error("No node provided");return xi.call(t,oi)===!1?!1:za(t)}function Ha(t){return!(t.disabled||Ff(t)||Kf(t))}var Nf=Ua.concat("iframe").join(",");function Uf(t){if(!t)throw new Error("No node provided");return xi.call(t,Nf)===!1?!1:Ha(t)}function Fa(t){var e=parseInt(t.getAttribute("tabindex"),10);return isNaN(e)?Hf(t)?0:t.tabIndex:e}function zf(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex}function Hf(t){return t.contentEditable==="true"}function Va(t){return t.tagName==="INPUT"}function Ff(t){return Va(t)&&t.type==="hidden"}function Vf(t){return Va(t)&&t.type==="radio"}function Wf(t){return Vf(t)&&!qf(t)}function Gf(t){for(var e=0;e<t.length;e++)if(t[e].checked)return t[e]}function qf(t){if(!t.name)return!0;var e=t.ownerDocument.querySelectorAll('input[type="radio"][name="'+t.name+'"]'),n=Gf(e);return!n||n===t}function Kf(t){return t.offsetParent===null||getComputedStyle(t).visibility==="hidden"}var Zf=Li;const Ze=ha(Zf);function Jf(t,e){if(t==null)return{};var n={},s=Object.keys(t),i,a;for(a=0;a<s.length;a++)i=s[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function _t(){return _t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},_t.apply(this,arguments)}var Yf=["as","targetRef","position","unstable_observableRefs"],Xf=l.forwardRef(function(e,n){return l.createElement(Af,null,l.createElement(Qf,_t({ref:n},e)))}),Qf=l.forwardRef(function(e,n){var s=e.as,i=s===void 0?"div":s,a=e.targetRef,c=e.position,f=c===void 0?tp:c,h=e.unstable_observableRefs,u=h===void 0?[]:h,g=Jf(e,Yf),m=l.useRef(null),y=Io(m,{observe:!g.hidden}),w=Io(a,{observe:!g.hidden}),L=ys(m,n);return sp(a,m),l.createElement(i,_t({"data-reach-popover":"",ref:L},g,{style:_t({position:"absolute"},ep.apply(void 0,[f,w,y].concat(u)),g.style)}))});function ep(t,e,n){for(var s=arguments.length,i=new Array(s>3?s-3:0),a=3;a<s;a++)i[a-3]=arguments[a];return n?t.apply(void 0,[e,n].concat(i.map(function(c){return c.current}))):{visibility:"hidden"}}function Wa(t,e,n){return{top:n?t.top-e.height+window.pageYOffset+"px":t.top+t.height+window.pageYOffset+"px"}}var tp=function(e,n){if(!e||!n)return{};var s=Ga(e,n),i=s.directionRight,a=s.directionUp;return _t({left:i?e.right-n.width+window.pageXOffset+"px":e.left+window.pageXOffset+"px"},Wa(e,n,a))},np=function(e,n){if(!e||!n)return{};var s=Ga(e,n),i=s.directionUp;return _t({width:e.width,left:e.left},Wa(e,n,i))};function Ga(t,e,n,s){n===void 0&&(n=0),s===void 0&&(s=0);var i={top:t.top-e.height<0,right:window.innerWidth<t.left+e.width-n,bottom:window.innerHeight<t.bottom+e.height-s,left:t.left+t.width-e.width<0},a=i.right&&!i.left,c=i.left&&!i.right,f=i.bottom&&!i.top,h=i.top&&!i.bottom;return{directionRight:a,directionLeft:c,directionUp:f,directionDown:h}}function sp(t,e){var n=Bf(t.current);function s(C){C.key==="Tab"&&e.current&&Ze(e.current).length===0||(C.key==="Tab"&&C.shiftKey?u(C)?g(C):m(C)?y(C):L(C)&&k():C.key==="Tab"&&(a()?c(C):f()?h(C):w(C)&&k()))}l.useEffect(function(){return n.addEventListener("keydown",s),function(){n.removeEventListener("keydown",s)}},[]);function i(){var C=Ze(n),x=C&&t.current?C.indexOf(t.current):-1,b=C&&C[x+1];return e.current&&e.current.contains(b||null)?!1:b}function a(){return t.current?t.current===n.activeElement:!1}function c(C){var x=e.current&&Ze(e.current);x&&x[0]&&(C.preventDefault(),x[0].focus())}function f(){var C=e.current?e.current.contains(n.activeElement||null):!1;if(C){var x=e.current&&Ze(e.current);return!!(x&&x[x.length-1]===n.activeElement)}return!1}function h(C){var x=i();x&&(C.preventDefault(),x.focus())}function u(C){if(C.shiftKey){var x=i();return C.target===x}}function g(C){var x=e.current&&Ze(e.current),b=x&&x[x.length-1];b&&(C.preventDefault(),b.focus())}function m(C){var x=e.current&&Ze(e.current);return x?x.length===0?!1:C.target===x[0]:!1}function y(C){var x;C.preventDefault(),(x=t.current)==null||x.focus()}function w(C){var x=e.current?Ze(n).filter(function(b){return!e.current.contains(b)}):null;return x?C.target===x[x.length-1]:!1}function L(C){return C.target===Ze(n)[0]}var E=[];function k(){var C=e.current&&Ze(e.current);C&&(C.forEach(function(x){E.push([x,x.tabIndex]),x.tabIndex=-1}),n.addEventListener("focusin",S))}function S(){n.removeEventListener("focusin",S),E.forEach(function(C){var x=C[0],b=C[1];x.tabIndex=b})}}function Pn(t,e){if(t==null)return{};var n={},s=Object.keys(t),i,a;for(a=0;a<s.length;a++)i=s[a],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ye(){return ye=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},ye.apply(this,arguments)}function ip(t){var e=t.autoEscape,n=t.caseSensitive,s=n===void 0?!1:n,i=t.findChunks,a=i===void 0?Ka:i,c=t.sanitize,f=t.searchWords,h=t.textToHighlight;return Za({chunksToHighlight:qa({chunks:a({autoEscape:e,caseSensitive:s,sanitize:c,searchWords:f,textToHighlight:h})}),totalLength:h?h.length:0})}function qa(t){var e=t.chunks;return e.sort(function(n,s){return n.start-s.start}).reduce(function(n,s){if(n.length===0)return[s];var i=n.pop();if(s.start<=i.end){var a=Math.max(i.end,s.end);n.push({highlight:!1,start:i.start,end:a})}else n.push(i,s);return n},[])}function Ka(t){var e=t.autoEscape,n=t.caseSensitive,s=t.sanitize,i=s===void 0?rp:s,a=t.searchWords,c=t.textToHighlight;return c=i(c||""),a.filter(function(f){return f}).reduce(function(f,h){h=i(h),e&&(h=op(h));for(var u=new RegExp(h,n?"g":"gi"),g;g=u.exec(c||"");){var m=g.index,y=u.lastIndex;y>m&&f.push({highlight:!1,start:m,end:y}),g.index===u.lastIndex&&u.lastIndex++}return f},[])}function Za(t){var e=t.chunksToHighlight,n=t.totalLength,s=[];if(e.length===0)a(0,n,!1);else{var i=0;e.forEach(function(c){a(i,c.start,!1),a(c.start,c.end,!0),i=c.end}),a(i,n,!1)}return s;function a(c,f,h){f-c>0&&s.push({start:c,end:f,highlight:h})}}function rp(t){return t}function op(t){return t.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}var ap={combineChunks:qa,fillInChunks:Za,findAll:ip,findChunks:Ka},lp=["onSelect","openOnFocus","children","as","aria-label","aria-labelledby"],cp=["as","selectOnClick","autocomplete","onClick","onChange","onKeyDown","onBlur","onFocus","value"],up=["as","children","portal","onKeyDown","onBlur","position"],dp=["persistSelection","as"],hp=["as","children","index","value","onClick"],He,ze,Re,Fe,Gt,he="IDLE",$e="SUGGESTING",lt="NAVIGATING",Xt="INTERACTING",Kt="CLEAR",Zt="CHANGE",Ei="INITIAL_CHANGE",Me="NAVIGATE",Ci="SELECT_WITH_KEYBOARD",kt="SELECT_WITH_CLICK",Qt="ESCAPE",Jt="BLUR",us="INTERACT",Yt="FOCUS",ki="OPEN_WITH_BUTTON",Ii="OPEN_WITH_INPUT_CLICK",ns="CLOSE_WITH_BUTTON",fp={initial:he,states:(Gt={},Gt[he]={on:(He={},He[Jt]=he,He[Kt]=he,He[Zt]=$e,He[Ei]=he,He[Yt]=$e,He[Me]=lt,He[ki]=$e,He[Ii]=$e,He)},Gt[$e]={on:(ze={},ze[Zt]=$e,ze[Yt]=$e,ze[Me]=lt,ze[Kt]=he,ze[Qt]=he,ze[Jt]=he,ze[kt]=he,ze[us]=Xt,ze[ns]=he,ze)},Gt[lt]={on:(Re={},Re[Zt]=$e,Re[Yt]=$e,Re[Kt]=he,Re[Jt]=he,Re[Qt]=he,Re[Me]=lt,Re[kt]=he,Re[Ci]=he,Re[ns]=he,Re[us]=Xt,Re)},Gt[Xt]={on:(Fe={},Fe[Kt]=he,Fe[Zt]=$e,Fe[Yt]=$e,Fe[Jt]=he,Fe[Qt]=he,Fe[Me]=lt,Fe[ns]=he,Fe[kt]=he,Fe)},Gt)},pp=function(e,n){var s=ye({},e,{lastEventType:n.type});switch(n.type){case Zt:case Ei:return ye({},s,{navigationValue:null,value:n.value});case Me:case ki:case Ii:return ye({},s,{navigationValue:So(s,n)});case Kt:return ye({},s,{value:"",navigationValue:null});case Jt:case Qt:return ye({},s,{navigationValue:null});case kt:return ye({},s,{value:n.isControlled?e.value:n.value,navigationValue:null});case Ci:return ye({},s,{value:n.isControlled?e.value:e.navigationValue,navigationValue:null});case ns:return ye({},s,{navigationValue:null});case us:return s;case Yt:return ye({},s,{navigationValue:So(s,n)});default:return s}};function gp(t){return[$e,lt,Xt].includes(t)}function So(t,e){return e.value?e.value:e.persistSelection?t.value:null}var Si=kf("ComboboxDescendantContext"),mt=yi("ComboboxContext",{}),Ja=yi("OptionContext",{}),mp=l.forwardRef(function(t,e){var n,s=t.onSelect,i=t.openOnFocus,a=i===void 0?!1:i,c=t.children,f=t.as,h=f===void 0?"div":f,u=t["aria-label"],g=t["aria-labelledby"],m=Pn(t,lp),y=Sf(),w=y[0],L=y[1],E=l.useRef(),k=l.useRef(),S=l.useRef(),C=l.useRef(!1),x=l.useRef(!1),b={value:"",navigationValue:null},P=Ep(fp,pp,b),T=P[0],A=P[1],R=P[2];Lp(A.lastEventType,E);var I=Mf(m.id),M=I?vf("listbox",I):"listbox",$=l.useRef(!1),N=gp(T),G={ariaLabel:u,ariaLabelledby:g,autocompletePropRef:C,buttonRef:S,comboboxId:I,data:A,inputRef:E,isExpanded:N,listboxId:M,onSelect:s||ri,openOnFocus:a,persistSelectionRef:x,popoverRef:k,state:T,transition:R,isControlledRef:$};return l.createElement(Tf,{context:Si,items:w,set:L},l.createElement(mt.Provider,{value:G},l.createElement(h,ye({},m,{"data-reach-combobox":"","data-state":_i(T),"data-expanded":N||void 0,ref:e}),bs(c)?c({id:I,isExpanded:N,navigationValue:(n=A.navigationValue)!=null?n:null,state:T}):c)))}),vp=l.forwardRef(function(t,e){var n=t.as,s=n===void 0?"input":n,i=t.selectOnClick,a=i===void 0?!1:i,c=t.autocomplete,f=c===void 0?!0:c,h=t.onClick,u=t.onChange,g=t.onKeyDown,m=t.onBlur,y=t.onFocus,w=t.value,L=Pn(t,cp),E=l.useRef(w),k=E.current,S=l.useRef(!1);xf(function(){S.current=!0},[w]);var C=l.useContext(mt),x=C.data,b=x.navigationValue,P=x.value,T=x.lastEventType,A=C.inputRef,R=C.state,I=C.transition,M=C.listboxId,$=C.autocompletePropRef,N=C.openOnFocus,G=C.isExpanded,U=C.ariaLabel,J=C.ariaLabelledby,q=C.persistSelectionRef,F=C.isControlledRef,B=ys(A,e),H=l.useRef(!1),z=Ya(),re=Xa(),X=typeof w<"u";l.useEffect(function(){F.current=X},[X]),ft(function(){$.current=f},[f,$]);var j=l.useCallback(function(V){V.trim()===""?I(Kt,{isControlled:X}):V===k&&!S.current?I(Ei,{value:V}):I(Zt,{value:V})},[k,I,X]);l.useEffect(function(){X&&w!==P&&(w.trim()!==""||(P||"").trim()!=="")&&j(w)},[w,j,X,P]);function O(V){var oe=V.target.value;X||j(oe)}function de(){a&&(H.current=!0),N&&T!==kt&&I(Yt,{persistSelection:q.current})}function le(){if(H.current){var V;H.current=!1,(V=A.current)==null||V.select()}N&&R===he&&I(Ii)}var Y=f&&(R===lt||R===Xt)?b||w||P:w||P;return l.createElement(s,ye({"aria-activedescendant":b?String(Qa(b)):void 0,"aria-autocomplete":"both","aria-controls":M,"aria-expanded":G,"aria-haspopup":"listbox","aria-label":U,"aria-labelledby":U?void 0:J,role:"combobox"},L,{"data-reach-combobox-input":"","data-state":_i(R),ref:B,onBlur:at(m,re),onChange:at(u,O),onClick:at(h,le),onFocus:at(y,de),onKeyDown:at(g,z),value:Y||""}))}),wp=l.forwardRef(function(t,e){var n=t.as,s=n===void 0?"div":n,i=t.children,a=t.portal,c=a===void 0?!0:a,f=t.onKeyDown,h=t.onBlur,u=t.position,g=u===void 0?np:u,m=Pn(t,up),y=l.useContext(mt),w=y.popoverRef,L=y.inputRef,E=y.isExpanded,k=y.state,S=ys(w,e),C=Ya(),x=Xa(),b={"data-reach-combobox-popover":"","data-state":_i(k),onKeyDown:at(f,C),onBlur:at(h,x),hidden:!E,tabIndex:-1,children:i};return c?l.createElement(Xf,ye({as:s},m,{ref:S,"data-expanded":E||void 0,position:g,targetRef:L},b)):l.createElement(s,ye({ref:S},m,b))}),bp=l.forwardRef(function(t,e){var n=t.persistSelection,s=n===void 0?!1:n,i=t.as,a=i===void 0?"ul":i,c=Pn(t,dp),f=l.useContext(mt),h=f.persistSelectionRef,u=f.listboxId;return s&&(h.current=!0),l.createElement(a,ye({role:"listbox"},c,{ref:e,"data-reach-combobox-list":"",id:u}))}),yp=l.forwardRef(function(t,e){var n=t.as,s=n===void 0?"li":n,i=t.children,a=t.index,c=t.value,f=t.onClick,h=Pn(t,hp),u=l.useContext(mt),g=u.onSelect,m=u.data.navigationValue,y=u.transition,w=u.isControlledRef,L=l.useRef(null),E=Lf(L,null),k=E[0],S=E[1],C=l.useMemo(function(){return{element:k,value:c}},[c,k]),x=If(C,Si,a),b=ys(e,S),P=m===c,T=function(){g&&g(c),y(kt,{value:c,isControlled:w.current})};return l.createElement(Ja.Provider,{value:{value:c,index:x}},l.createElement(s,ye({"aria-selected":P,role:"option"},h,{"data-reach-combobox-option":"",ref:b,id:String(Qa(c)),"data-highlighted":P?"":void 0,tabIndex:-1,onClick:at(f,T)}),i?bs(i)?i({value:c,index:x}):i:l.createElement(xp,null)))});function xp(){var t=l.useContext(Ja),e=t.value,n=l.useContext(mt),s=n.data.value,i=l.useMemo(function(){return ap.findAll({searchWords:Cp(s||"").split(/\s+/),textToHighlight:e})},[s,e]);return l.createElement(l.Fragment,null,i.length?i.map(function(a,c){var f=e.slice(a.start,a.end);return l.createElement("span",{key:c,"data-reach-combobox-option-text":"","data-user-value":a.highlight?!0:void 0,"data-suggested-value":a.highlight?void 0:!0},f)}):e)}function Lp(t,e){ft(function(){if(t===Me||t===Qt||t===kt||t===ki){var n;(n=e.current)==null||n.focus()}},[e,t])}function Ya(){var t=l.useContext(mt),e=t.data.navigationValue,n=t.onSelect,s=t.state,i=t.transition,a=t.autocompletePropRef,c=t.persistSelectionRef,f=t.isControlledRef,h=_f(Si);return function(g){var m=h.findIndex(function(C){var x=C.value;return x===e});function y(){var C=m===h.length-1;return C?a.current?null:L():h[(m+1)%h.length]}function w(){var C=m===0;return C?a.current?null:E():m===-1?E():h[(m-1+h.length)%h.length]}function L(){return h[0]}function E(){return h[h.length-1]}switch(g.key){case"ArrowDown":if(g.preventDefault(),!h||!h.length)return;if(s===he)i(Me,{persistSelection:c.current});else{var k=y();i(Me,{value:k?k.value:null})}break;case"ArrowUp":if(g.preventDefault(),!h||h.length===0)return;if(s===he)i(Me);else{var S=w();i(Me,{value:S?S.value:null})}break;case"Home":case"PageUp":if(g.preventDefault(),!h||h.length===0)return;s===he?i(Me):i(Me,{value:L().value});break;case"End":case"PageDown":if(g.preventDefault(),!h||h.length===0)return;s===he?i(Me):i(Me,{value:E().value});break;case"Escape":s!==he&&i(Qt);break;case"Enter":s===lt&&e!==null&&(g.preventDefault(),n&&n(e),i(Ci,{isControlled:f.current}));break}}}function Xa(){var t=l.useContext(mt),e=t.state,n=t.transition,s=t.popoverRef,i=t.inputRef,a=t.buttonRef;return function(f){var h=s.current,u=i.current,g=a.current,m=f.relatedTarget;m!==u&&m!==g&&h&&(h.contains(m)?e!==Xt&&n(us):n(Jt))}}function Ep(t,e,n){var s=l.useState(t.initial),i=s[0],a=s[1],c=l.useReducer(e,n),f=c[0],h=c[1],u=function(m,y){y===void 0&&(y={});var w=t.states[i],L=w&&w.on[m];if(L){h(ye({type:m,state:i,nextState:i},y)),a(L);return}};return[i,f,u]}function Qa(t){var e=0;if(t.length===0)return e;for(var n=0;n<t.length;n++){var s=t.charCodeAt(n);e=(e<<5)-e+s,e=e&e}return e}function _i(t){return t.toLowerCase()}function Cp(t){return String(t).replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")}function el({setLocation:t}){const{theme:e}=l.useContext(Te),{ready:n,value:s,setValue:i,suggestions:{status:a,data:c},clearSuggestions:f}=hf({requestOptions:{componentRestrictions:{country:"tw"}}}),h=async u=>{i(u,!1),f();const g=await pf({address:u}),{lat:m,lng:y}=await gf(g[0]);t({lat:m,lng:y})};return v.jsxs(mp,{onSelect:h,className:"combobox",style:{background:`${e.background_searchbox}`},children:[v.jsxs(v.Fragment,{children:[v.jsx(vp,{value:s,onChange:u=>{i(u.target.value),Ot("event","search",{search_term:s})},className:"combobox-input",style:{background:`${e.background_searchbox}`,color:`${e.font_main}`},placeholder:"輸入台北市目的地",disabled:!n}),v.jsx(xe,{icon:"fa-solid fa-xmark",style:{width:"22px",height:"22px",margin:"0 16px"},cursor:"pointer",onClick:()=>i("")})]}),v.jsx(wp,{className:"combobox-popover",style:{background:`${e.background_searchbox}`,color:`${e.font_main}`,left:"2vw",width:"calc(96vw - 56px)",boxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",WebkitBoxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",MozBoxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",borderRadius:"0 0 7px 7px",borderWidth:"0",padding:a?"12px 0":"0"},children:v.jsx(bp,{children:a==="OK"&&c.map(({place_id:u,description:g})=>v.jsx(yp,{value:g},u))})})]})}el.propTypes={setLocation:ee.func};const kp=D.div`
  color: ${t=>t.$color.font_secondary_blk};
  padding: 3px 0 0 5px;
`,Ip=D.div`
  display: flex;
  justify-content: space-between;
`,Sp=D.p`
  font-size: 10px;
`,Bs=D.div`
  position: relative;
  width: 70px;
  height: 50px;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: end;
  & + & {
    margin-left: 6px;
  }
`,js=D.p`
  color: ${t=>t.$color.font_secondary_blk};
  font-size: 10px;
  position: absolute;
  top: 2px;
  left: 3px;
`,_p=D.h1`
  font-size: 24px;
  color: ${t=>t.$color.font_active};
`;function tl({hoverMarker:{availablecar:t,hasChargingStation:e}}){const{theme:n}=l.useContext(Te),s={width:"24px",height:"24px",color:n.font_active};return v.jsxs(kp,{$color:n,children:[v.jsxs(Ip,{children:[v.jsxs(Bs,{style:{background:"#04AA6D"},children:[v.jsx(js,{$color:n,children:"空車位"}),v.jsx(_p,{$color:n,children:t})]}),e==="有"&&v.jsxs(Bs,{style:{background:"#E67E22"},children:[v.jsx(js,{$color:n,children:"提供充電樁"}),v.jsx(xe,{icon:"fa-solid fa-circle-check",style:s})]}),e==="無"&&v.jsxs(Bs,{style:{background:"#AFABAB"},children:[v.jsx(js,{$color:n,children:"提供充電樁"}),v.jsx(xe,{icon:"fa-solid fa-circle-xmark",style:s})]})]}),v.jsx(Sp,{children:"*點擊標記看詳細資訊"})]})}tl.propTypes={hoverMarker:ee.object,availablecar:ee.number,hasChargingStation:ee.string};const Tp=D.div`
  margin: 6px 0;
  color: #117577;
  width: 256px;
  padding-right: 6px;
  ${Le} {
    width: 360px;
  }
`,Pp=D.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(17, 117, 119, 0.5);
  padding-bottom: 6px;
`,Mp=D.h1`
  font-size: 14px;
  line-height: 1.1;
  margin-right: 10px;
`,Ap=D.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80px;
  ${Le} {
    margin-right: 0;
    min-width: 160px;
  }
`,_o=D(rn)`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid #117577;
  color: #117577;
  text-decoration: none;
  & + & {
    margin-left: 8px;
  }
  &:hover {
    background: rgba(17, 117, 119, 0.15);
  }
  ${Le} {
    width: auto;
    padding: 4px 12px;
  }
`,To=D.span`
  display: none;
  ${Le} {
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-right: 4px;
  }
`,Op=D.div`
  margin-top: 12px;
`,Ns=D.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
`,Us=D.h3`
  font-size: 12px;
  margin-bottom: 2px;
`,zs=D.p`
  color: #112e31;
  font-size: 11px;
`,Rp=D.div`
  max-height: 70px;
  overflow-y: scroll;
`,Hs={width:"16px",height:"16px"};function nl({clickMarker:t}){const{name:e,payex:n,area:s,address:i,opening:a,lat:c,lng:f,id:h}=t,[u,g]=l.useState(()=>va()||[]),[m,y]=l.useState(()=>u.some(L=>L.id===h));l.useEffect(()=>{ma(u),y(u.some(L=>L.id===h))},[u,y,h]);const w=()=>{g(m?u.filter(L=>L.id!==h):[t,...u])};return v.jsxs(Tp,{children:[v.jsxs(Pp,{children:[v.jsx(Mp,{children:e}),v.jsxs(Ap,{children:[v.jsxs(_o,{to:`https://www.google.com/maps/dir/?api=1&destination=${c},${f}&travelmode=driving`,target:"_blank",children:[v.jsx(To,{children:"路線"}),v.jsx(xe,{icon:"fa-regular fa-compass",style:Hs})]}),v.jsxs(_o,{onClick:w,to:"#",children:[v.jsx(To,{children:"儲存"}),m&&v.jsx(xe,{icon:"fa-solid fa-bookmark",style:Hs}),!m&&v.jsx(xe,{icon:"fa-regular fa-bookmark",style:Hs})]})]})]}),v.jsxs(Op,{children:[v.jsxs(Ns,{children:[v.jsx(Us,{children:"費率"}),v.jsx(Rp,{children:v.jsx(zs,{children:n})})]}),v.jsxs(Ns,{children:[v.jsx(Us,{children:"營業時間"}),v.jsx(zs,{children:a})]}),v.jsxs(Ns,{children:[v.jsx(Us,{children:"地址"}),v.jsx(zs,{children:i})]})]})]})}nl.propTypes={clickMarker:ee.object};const $p=D.div`
  border-radius: 7px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  background: ${t=>t.$color.background_searchbox};
  cursor: pointer;
`;function sl({handleLocator:t,isLoading:e,isDeviceLocate:n}){const{theme:s}=l.useContext(Te);return v.jsxs($p,{$color:s,onClick:t,children:[!e&&v.jsx(xe,{icon:"fa-solid fa-crosshairs",style:{width:"20px",height:"20px",color:`${n?"#04AA6D":""}`}}),e&&v.jsx(St,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)"})]})}sl.propTypes={handleLocator:ee.func,isLoading:ee.bool,isDeviceLocate:ee.bool};const Dp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAACcUlEQVR4AazUA6wsZwCA0TNYXte2bdu2bdu2bdtW1I1TK6jbZ1vX3r+aoH7YL9kdn/EkSFGHZjQgRYQYSfZLUUIjWrJfI8pI/KXdDz744CNbW1u/+PDDD+/FulgBS2OpI444Yo0vv/zy+MmTJz/R1dX1ccgaGBhonTBhwjuvvvrq0VgKTchFCFdffbVrTm0244tE3RaHtvfEuZ/iOK6madqYmzF+1eqY75k4RDJtpGpXu66pU3X++ouWW0/Dzkf5pju5Z/PNN38ck1IAg7NUh99q+APXNjRttP2GabGoOvYHubo6+V9/uXJZUlcHADo+r+iaMNaSFz6+CyrojQFggW2pW4Hu7z/T89OXZrf+/v4c5kdd7C8tcRxx0RwVQoiQQ/o3MCmx+ClzjiJC9DcQCoux8PFEc476RxDyizL/0USFGoGQW4SW04gXqhEIcZH6o0hWqxEIkN+ReLsaghCtkqG1AiFZleKuNQShsCYNO9cQhIZNqVuthiAsfDBJ6R/AIUOGjNW8D/ml/WPxsiS7E51FeiNN7zP/o5JFj7PwbiCgmv0EvHvVVVc9M3PmzOmh+9sQZj4RQuuzIfR8FcJgWxj2a88999xb559//h04AcfutNNO51cqlbfDwMzw6wf4U+yP1SDgDZyGE3beeefzLr/88ut/+x1//PGX4VgcjYOwIzbBBtgQW2IP7JXNXyxCwKt4D1PRhgEAQBW9aEcXBhEhj3rE6EBrCgjoxhRMQi8CAEKG9mdYFRFitCHCAAYiBLyMVzAE4zI8+HvhH+ZHyBwhBeBvdyuYvUL2A7EaN9fgL6OPgaMG/qemgX9huYBSgwHnr9+YKVsfRAAAAABJRU5ErkJggg==";function Bp(){const t=l.useMemo(()=>({lat:25.0336752,lng:121.5648831}),[]),[e,n]=l.useState(t),{theme:s}=l.useContext(Te),{sortData:i}=l.useContext(Tn),a=l.useMemo(()=>({streetViewControl:!1,styles:s.mapStyle.styles,mapTypeControl:!1,fullscreenControl:!1}),[s.mapStyle.styles]),c=l.useRef(),f=l.useCallback(S=>c.current=S,[]),[h,u]=l.useState(""),[g,m]=l.useState(""),[y,w]=l.useState(!1),[L,E]=l.useState(!1),k=()=>{w(!0),Ot("event","locate_by_device",{content_type:"locateByDevice"}),navigator.geolocation.getCurrentPosition(S=>{const{coords:{latitude:C,longitude:x}}=S;n({lat:C,lng:x}),c.current.panTo({lat:C,lng:x}),w(!1),E(!0)})};return v.jsxs("div",{className:"map-container",children:[v.jsxs("div",{className:"combobox-wrapper",children:[v.jsx(el,{setLocation:S=>{n(S),c.current.panTo(S),E(!1)}}),v.jsx(sl,{handleLocator:k,isLoading:y,isDeviceLocate:L})]}),v.jsx("div",{children:v.jsxs(Ud,{center:t,zoom:16,mapContainerClassName:"map-wrapper",options:a,onLoad:f,children:[e&&v.jsxs(v.Fragment,{children:[v.jsx(ni,{position:e}),v.jsx(Sa,{children:S=>i.map(C=>v.jsx(ni,{position:{lat:C.lat,lng:C.lng},clusterer:S,icon:Dp,onMouseOut:()=>u(null),onMouseOver:()=>u(C),onClick:()=>{m(C),u("")}},C.id))}),v.jsx(ts,{center:e,radius:100,options:$s.closeOptions}),v.jsx(ts,{center:e,radius:250,options:$s.middleOptions}),v.jsx(ts,{center:e,radius:500,options:$s.farOptions})]}),h&&v.jsx(ii,{position:{lat:h.lat,lng:h.lng},options:{pixelOffset:new window.google.maps.Size(0,-35)},onCloseClick:()=>u(""),children:v.jsx(tl,{hoverMarker:h})}),g&&v.jsx(ii,{position:{lat:g.lat,lng:g.lng},options:{pixelOffset:new window.google.maps.Size(0,-20)},onCloseClick:()=>m(""),children:v.jsx(nl,{clickMarker:g})})]})})]})}const jp=["places"];function Np(){const{isLoaded:t}=ka({googleMapsApiKey:"AIzaSyChicSoqpRADSYywazOI87PMBRSBMG6-fw",libraries:jp});return t?v.jsx(Bp,{}):v.jsx(St,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)",width:"100%",height:"200px"})}const Fs={marginLeft:"6px"};function il({columns:t,data:e}){const{theme:n}=l.useContext(Te),{getTableProps:s,getTableBodyProps:i,headerGroups:a,rows:c,prepareRow:f}=Sr.useTable({columns:t,data:e},Sr.useSortBy);return v.jsxs("table",{...s(),style:{width:"100%",color:n.font_main,borderCollapse:"collapse"},children:[v.jsx("thead",{children:a.map(h=>v.jsx("tr",{...h.getHeaderGroupProps(),style:{height:"50px"},children:h.headers.map(u=>v.jsxs("th",{...u.getHeaderProps(u.getSortByToggleProps()),style:{background:n.background_hover,fontWeight:"bold",fontSize:"16px",cursor:"pointer",manWidth:u.maxWidth,width:u.width},children:[u.render("Header"),u.Header!=="Action"&&u.Header!=="費率"&&v.jsx("span",{children:u.isSorted?u.isSortedDesc?v.jsx(xe,{icon:"fa-solid fa-sort-down",style:Fs}):v.jsx(xe,{icon:"fa-solid fa-sort-up",style:Fs}):v.jsx(xe,{icon:"fa-solid fa-sort",style:Fs})})]}))}))}),v.jsx("tbody",{...i(),children:c.map(h=>(f(h),v.jsx("tr",{...h.getRowProps(),style:{borderBottom:`1px solid ${n.background_secondary}`},children:h.cells.map(u=>v.jsx("td",{...u.getCellProps(),style:{padding:"10px",fontSize:u.column.Header==="Action"?"16px":"12px",textAlign:u.column.Header==="名稱"||u.column.Header==="地址"||u.column.Header==="費率"?"left":"center"},children:u.render("Cell")}))})))})]})}il.propTypes={columns:ee.array,data:ee.array};const Up=D.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
  justify-items: center;
  color: ${t=>t.$color.font_card_secondary};
`,zp=D.div`
  border: 1.5px solid rgba(17, 117, 119, 0.5);
  border-radius: 8px;
  width: 320px;
  height: 370px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`,Hp=D.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  color: ${t=>t.$color.font_active};
`,Vs=D.div`
  flex-basis: 30%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 12px 0;
  border-radius: 6px;
  & + & {
    margin-left: 10px;
  }
`,Ws=D.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  top: 2px;
  left: 3px;
  color: ${t=>t.$color.font_secondary_blk};
`,Fp=D.h1``,Vp=D.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`,vn=D.div`
  & + & {
    margin-top: 8px;
  }
  :last-child {
    display: flex;
    justify-content: end;
  }
`,Wp=D.h1`
  font-size: 20px;
  line-height: 1.1;
`,Yn=D.p`
  font-size: 12px;
  margin-top: 2px;
  color: ${t=>t.$color.font_card_main};
`,Gs=D.h2`
  font-size: 16px;
`,Po=D(rn)`
  text-decoration: none;
  color: ${t=>t.$color.font_card_secondary};
  border-radius: 50px;
  border: 1px solid #117577;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  & + & {
    margin-left: 12px;
  }
  &:hover {
    background: rgba(17, 117, 119, 0.25);
  }
`,Mo=D.span`
  margin-right: 8px;
`,Ao={width:"28px",height:"28px"},Oo={width:"18px",height:"18px"},Gp=D.div`
  max-height: 70px;
  overflow-y: scroll;
`;function rl({data:t,handleDeleteList:e}){const{theme:n}=l.useContext(Te),{isLoading:s}=l.useContext(Tn);return v.jsx(Up,{$color:n,children:t.map(i=>v.jsxs(zp,{children:[v.jsxs(Hp,{$color:n,children:[v.jsxs(Vs,{style:{flexGrow:1,background:i.availablecar!=="已滿"?"#04AA6D":"#AFABAB"},children:[v.jsx(Ws,{$color:n,children:"即時空位 / 總車位"}),s&&v.jsx(St,{}),!s&&v.jsxs(Fp,{children:[i.availablecar," / ",i.totalcar]})]}),i.hasChargingStation==="有"&&v.jsxs(Vs,{style:{background:"#E67E22"},children:[v.jsx(Ws,{$color:n,children:"提供充電樁"}),v.jsx(xe,{icon:"fa-solid fa-circle-check",style:Ao})]}),i.hasChargingStation==="無"&&v.jsxs(Vs,{style:{background:"#AFABAB"},children:[v.jsx(Ws,{$color:n,children:"提供充電樁"}),v.jsx(xe,{icon:"fa-solid fa-circle-xmark",style:Ao})]})]}),v.jsxs(Vp,{children:[v.jsxs(vn,{children:[v.jsx(Wp,{children:i.name}),v.jsx(Yn,{$color:n,children:i.address})]}),v.jsxs(vn,{children:[v.jsx(Gs,{children:"區域"}),v.jsx(Yn,{$color:n,children:i.area})]}),v.jsxs(vn,{children:[v.jsx(Gs,{children:"費率"}),v.jsx(Gp,{children:v.jsx(Yn,{$color:n,children:i.payex})})]}),v.jsxs(vn,{children:[v.jsx(Gs,{children:"營業時間"}),v.jsx(Yn,{$color:n,children:i.opening})]}),v.jsxs(vn,{children:[v.jsxs(Po,{to:`https://www.google.com/maps/dir/?api=1&destination=${i.lat},${i.lng}&travelmode=driving`,target:"_blank",$color:n,children:[v.jsx(Mo,{children:"路線"}),v.jsx(xe,{icon:"fa-regular fa-compass",style:Oo})]}),v.jsxs(Po,{to:"#",$color:n,onClick:()=>e(i.id),children:[v.jsx(Mo,{children:"刪除"}),v.jsx(xe,{icon:"fa-solid fa-trash-can",style:Oo})]})]})]})]},i.id))})}rl.propTypes={data:ee.array,handleDeleteList:ee.func};const qp=D.h2`
  margin: 66px 0;
  text-align: center;
`,Kp=D.div`
  width: 100%;
  padding: 16px;
`,Zp=D.div``,Jp=D.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
  visibility: hidden;
  ${Le} {
    visibility: visible;
  }
`,Ro=D.div`
  width: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${t=>t.$color.background_hover};
  }
  :first-child {
    background: ${t=>t.$view===!0?t.$color.background_active:""};
    color: ${t=>t.$view===!0?t.$color.font_active:""};
  }
  :last-child {
    background: ${t=>t.$view===!1?t.$color.background_active:""};
    color: ${t=>t.$view===!1?t.$color.font_active:""};
  }
  & + & {
    margin-left: 6px;
  }
`,Yp=D.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,$o=D(rn)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${t=>t.$color.font_main};
  width: 30px;
  height: 30px;
`,Do={width:"30px",height:"30px"};function ai({item:t,handleDeleteList:e}){const{theme:n}=l.useContext(Te);return v.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[v.jsx($o,{to:`https://www.google.com/maps/dir/?api=1&destination=${t.lat},${t.lng}&travelmode=driving`,target:"_blank",$color:n,children:v.jsx(xe,{icon:"fa-regular fa-compass"})}),v.jsx($o,{to:"#",$color:n,onClick:()=>e(t.id),children:v.jsx(xe,{icon:"fa-solid fa-trash-can"})})]})}function Xp(){const{theme:t}=l.useContext(Te),{sortData:e}=l.useContext(Tn),[n,s]=l.useState(!0),[i,a]=l.useState(()=>va()||[]);l.useEffect(()=>{ma(i)},[i]);const c=()=>{s(!n),Ot("event","switch_save_view",{content_type:"switchSaveView"})},f=g=>{a(i.filter(m=>m.id!==g))},h=l.useMemo(()=>i.map(m=>{const y=e.find(w=>w.id===m.id);if(y){const{availablecar:w}=y;return{...m,availablecar:w,action:v.jsx(ai,{item:m,handleDeleteList:f})}}else return{...m,availablecar:"已滿",action:v.jsx(ai,{item:m,handleDeleteList:f})}}),[e,i]),u=l.useMemo(()=>[{Header:"名稱",accessor:"name"},{Header:"區域",accessor:"area",width:80},{Header:"地址",accessor:"address"},{Header:"營業時間",accessor:"opening",width:80},{Header:"費率",accessor:"payex",maxWidth:250,width:200},{Header:"充電樁",accessor:"hasChargingStation",width:80},{Header:"即時空位",accessor:"availablecar",width:80},{Header:"總車位",accessor:"totalcar",width:80},{Header:"Action",accessor:"action",width:100}],[]);return h.length?v.jsxs(Kp,{children:[v.jsxs(Zp,{children:[v.jsx("h1",{children:"我的儲存"}),v.jsxs(Jp,{children:[v.jsx(Ro,{$color:t,$view:n,onClick:c,children:v.jsx(xe,{icon:"fa-solid fa-grip",style:Do})}),v.jsx(Ro,{$color:t,$view:n,onClick:c,children:v.jsx(xe,{icon:"fa-solid fa-list",style:Do})})]})]}),v.jsxs(Yp,{children:[n&&v.jsx(rl,{columns:u,data:h,handleDeleteList:f}),!n&&v.jsx(il,{columns:u,data:h})]})]}):v.jsx(qp,{children:"目前沒有儲存資料"})}ai.propTypes={item:ee.object,handleDeleteList:ee.func};const Bo=D.button`
  width: 100%;
  font-size: 16px;
  padding: 0.7em;
  border-radius: 50px;
  border-width: 0px;
  margin: 6px 0;
  cursor: pointer;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    font-size: 16.5px;
  }
`,Qp=D.span`
  background: url(https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg)
    center center no-repeat;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 8px;
`;function li({isLoading:t,btnName:e,handleGoogleLogin:n}){const{theme:s}=l.useContext(Te);return v.jsxs(v.Fragment,{children:[e==="使用 Google帳號登入"&&v.jsxs(Bo,{$color:s,$btnName:e,disabled:t,style:{background:"#fff",color:"#282a35",border:`1px solid ${s.border_main}`},onClick:n,children:[e==="使用 Google帳號登入"&&v.jsx(Qp,{}),!t&&e,t&&v.jsx(St,{})]}),e!=="使用 Google帳號登入"&&v.jsxs(Bo,{$color:s,$btnName:e,disabled:t,style:{background:s.background_active,color:s.font_active},children:[!t&&e,t&&v.jsx(St,{})]})]})}li.propTypes={isLoading:ee.bool,btnName:ee.string,handleGoogleLogin:ee.func};/**
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
 */const ol=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[s++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],c=t[n++],f=t[n++],h=((i&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(h>>10)),e[s++]=String.fromCharCode(56320+(h&1023))}else{const a=t[n++],c=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const a=t[i],c=i+1<t.length,f=c?t[i+1]:0,h=i+2<t.length,u=h?t[i+2]:0,g=a>>2,m=(a&3)<<4|f>>4;let y=(f&15)<<2|u>>6,w=u&63;h||(w=64,c||(y=64)),s.push(n[g],n[m],n[y],n[w])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ol(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],f=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||f==null||u==null||m==null)throw new tg;const y=a<<2|f>>4;if(s.push(y),u!==64){const w=f<<4&240|u>>2;if(s.push(w),m!==64){const L=u<<6&192|m;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(t){const e=ol(t);return al.encodeByteArray(e,!0)},ll=function(t){return ng(t).replace(/\./g,"")},cl=function(t){try{return al.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ig=()=>sg().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},og=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cl(t[1]);return e&&JSON.parse(e)},Ti=()=>{try{return ig()||rg()||og()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ag=t=>{var e,n;return(n=(e=Ti())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lg=()=>{var t;return(t=Ti())===null||t===void 0?void 0:t.config},ul=t=>{var e;return(e=Ti())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function dg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fg(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pg(){try{return typeof indexedDB=="object"}catch{return!1}}function gg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const mg="FirebaseError";class vt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=mg,Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?vg(a,s):"Error",f=`${this.serviceName}: ${c} (${i}).`;return new vt(i,f,s)}}function vg(t,e){return t.replace(wg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const wg=/\{\$([^}]+)}/g;function bg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const a=t[i],c=e[i];if(jo(a)&&jo(c)){if(!ds(a,c))return!1}else if(a!==c)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function jo(t){return t!==null&&typeof t=="object"}/**
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
 */function An(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function wn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,a]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function bn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yg(t,e){const n=new xg(t,e);return n.subscribe.bind(n)}class xg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Lg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=qs),i.error===void 0&&(i.error=qs),i.complete===void 0&&(i.complete=qs);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qs(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class Eg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new cg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});s.resolve(a)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[a,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);s===f&&c.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),a=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;a.add(e),this.onInitCallbacks.set(i,a);const c=this.instances.get(i);return c&&e(c,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(t){return t===Lt?void 0:t}function kg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ig{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Eg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Sg={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},_g=fe.INFO,Tg={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Pg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Tg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dl{constructor(e){this.name=e,this._logLevel=_g,this._logHandler=Pg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Mg=(t,e)=>e.some(n=>t instanceof n);let No,Uo;function Ag(){return No||(No=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Og(){return Uo||(Uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hl=new WeakMap,ci=new WeakMap,fl=new WeakMap,Ks=new WeakMap,Pi=new WeakMap;function Rg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",c)},a=()=>{n(pt(t.result)),i()},c=()=>{s(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",c)});return e.then(n=>{n instanceof IDBCursor&&hl.set(n,t)}).catch(()=>{}),Pi.set(e,t),e}function $g(t){if(ci.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",c),t.removeEventListener("abort",c)},a=()=>{n(),i()},c=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",c),t.addEventListener("abort",c)});ci.set(t,e)}let ui={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ci.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dg(t){ui=t(ui)}function Bg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Zs(this),e,...n);return fl.set(s,e.sort?e.sort():[e]),pt(s)}:Og().includes(t)?function(...e){return t.apply(Zs(this),e),pt(hl.get(this))}:function(...e){return pt(t.apply(Zs(this),e))}}function jg(t){return typeof t=="function"?Bg(t):(t instanceof IDBTransaction&&$g(t),Mg(t,Ag())?new Proxy(t,ui):t)}function pt(t){if(t instanceof IDBRequest)return Rg(t);if(Ks.has(t))return Ks.get(t);const e=jg(t);return e!==t&&(Ks.set(t,e),Pi.set(e,t)),e}const Zs=t=>Pi.get(t);function Ng(t,e,{blocked:n,upgrade:s,blocking:i,terminated:a}={}){const c=indexedDB.open(t,e),f=pt(c);return s&&c.addEventListener("upgradeneeded",h=>{s(pt(c.result),h.oldVersion,h.newVersion,pt(c.transaction))}),n&&c.addEventListener("blocked",()=>n()),f.then(h=>{a&&h.addEventListener("close",()=>a()),i&&h.addEventListener("versionchange",()=>i())}).catch(()=>{}),f}const Ug=["get","getKey","getAll","getAllKeys","count"],zg=["put","add","delete","clear"],Js=new Map;function zo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Js.get(e))return Js.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ug.includes(n)))return;const a=async function(c,...f){const h=this.transaction(c,i?"readwrite":"readonly");let u=h.store;return s&&(u=u.index(f.shift())),(await Promise.all([u[n](...f),i&&h.done]))[0]};return Js.set(e,a),a}Dg(t=>({...t,get:(e,n,s)=>zo(e,n)||t.get(e,n,s),has:(e,n)=>!!zo(e,n)||t.has(e,n)}));/**
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
 */class Hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Fg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Fg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const di="@firebase/app",Ho="0.9.4";/**
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
 */const Tt=new dl("@firebase/app"),Vg="@firebase/app-compat",Wg="@firebase/analytics-compat",Gg="@firebase/analytics",qg="@firebase/app-check-compat",Kg="@firebase/app-check",Zg="@firebase/auth",Jg="@firebase/auth-compat",Yg="@firebase/database",Xg="@firebase/database-compat",Qg="@firebase/functions",em="@firebase/functions-compat",tm="@firebase/installations",nm="@firebase/installations-compat",sm="@firebase/messaging",im="@firebase/messaging-compat",rm="@firebase/performance",om="@firebase/performance-compat",am="@firebase/remote-config",lm="@firebase/remote-config-compat",cm="@firebase/storage",um="@firebase/storage-compat",dm="@firebase/firestore",hm="@firebase/firestore-compat",fm="firebase",pm="9.17.2";/**
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
 */const hi="[DEFAULT]",gm={[di]:"fire-core",[Vg]:"fire-core-compat",[Gg]:"fire-analytics",[Wg]:"fire-analytics-compat",[Kg]:"fire-app-check",[qg]:"fire-app-check-compat",[Zg]:"fire-auth",[Jg]:"fire-auth-compat",[Yg]:"fire-rtdb",[Xg]:"fire-rtdb-compat",[Qg]:"fire-fn",[em]:"fire-fn-compat",[tm]:"fire-iid",[nm]:"fire-iid-compat",[sm]:"fire-fcm",[im]:"fire-fcm-compat",[rm]:"fire-perf",[om]:"fire-perf-compat",[am]:"fire-rc",[lm]:"fire-rc-compat",[cm]:"fire-gcs",[um]:"fire-gcs-compat",[dm]:"fire-fst",[hm]:"fire-fst-compat","fire-js":"fire-js",[fm]:"fire-js-all"};/**
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
 */const hs=new Map,fi=new Map;function mm(t,e){try{t.container.addComponent(e)}catch(n){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(fi.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;fi.set(e,t);for(const n of hs.values())mm(n,t);return!0}function pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new Mn("app","Firebase",vm);/**
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
 */class wm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const xs=pm;function gl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:hi,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=lg()),!n)throw gt.create("no-options");const a=hs.get(i);if(a){if(ds(n,a.options)&&ds(s,a.config))return a;throw gt.create("duplicate-app",{appName:i})}const c=new Ig(i);for(const h of fi.values())c.addComponent(h);const f=new wm(n,s,c);return hs.set(i,f),f}function bm(t=hi){const e=hs.get(t);if(!e&&t===hi)return gl();if(!e)throw gt.create("no-app",{appName:t});return e}function en(t,e,n){var s;let i=(s=gm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const a=i.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${i}" with version "${e}":`];a&&f.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(f.join(" "));return}En(new sn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ym="firebase-heartbeat-database",xm=1,Cn="firebase-heartbeat-store";let Ys=null;function ml(){return Ys||(Ys=Ng(ym,xm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Cn)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),Ys}async function Lm(t){try{return(await ml()).transaction(Cn).objectStore(Cn).get(vl(t))}catch(e){if(e instanceof vt)Tt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(n.message)}}}async function Fo(t,e){try{const s=(await ml()).transaction(Cn,"readwrite");return await s.objectStore(Cn).put(e,vl(t)),s.done}catch(n){if(n instanceof vt)Tt.warn(n.message);else{const s=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tt.warn(s.message)}}}function vl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Em=1024,Cm=30*24*60*60*1e3;class km{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Cm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vo(),{heartbeatsToSend:n,unsentEntries:s}=Im(this._heartbeatsCache.heartbeats),i=ll(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vo(){return new Date().toISOString().substring(0,10)}function Im(t,e=Em){const n=[];let s=t.slice();for(const i of t){const a=n.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),Wo(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wo(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Sm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pg()?gg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wo(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _m(t){En(new sn("platform-logger",e=>new Hg(e),"PRIVATE")),En(new sn("heartbeat",e=>new km(e),"PRIVATE")),en(di,Ho,t),en(di,Ho,"esm2017"),en("fire-js","")}_m("");var Tm="firebase",Pm="9.17.2";/**
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
 */en(Tm,Pm,"app");function Mi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function wl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mm=wl,bl=new Mn("auth","Firebase",wl());/**
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
 */const Go=new dl("@firebase/auth");function ss(t,...e){Go.logLevel<=fe.ERROR&&Go.error(`Auth (${xs}): ${t}`,...e)}/**
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
 */function Be(t,...e){throw Ai(t,...e)}function Ve(t,...e){return Ai(t,...e)}function yl(t,e,n){const s=Object.assign(Object.assign({},Mm()),{[e]:n});return new Mn("auth","Firebase",s).create(e,{appName:t.name})}function Am(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Be(t,"argument-error"),yl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ai(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return bl.create(t,...e)}function K(t,e,...n){if(!t)throw Ai(e,...n)}function Ye(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ss(e),new Error(e)}function Qe(t,e){t||Ye(e)}/**
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
 */const qo=new Map;function Xe(t){Qe(t instanceof Function,"Expected a class definition");let e=qo.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qo.set(t,e),e)}/**
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
 */function Om(t,e){const n=pl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(ds(a,e??{}))return i;Be(i,"already-initialized")}return n.initialize({options:e})}function Rm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function pi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $m(){return Ko()==="http:"||Ko()==="https:"}function Ko(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($m()||dg()||"connection"in navigator)?navigator.onLine:!0}function Bm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class On{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=ug()||hg()}get(){return Dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oi(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xl{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const jm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Nm=new On(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,s,i={}){return Ll(t,i,async()=>{let a={},c={};s&&(e==="GET"?c=s:a={body:JSON.stringify(s)});const f=An(Object.assign({key:t.config.apiKey},c)).slice(1),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode),xl.fetch()(El(t,t.config.apiHost,n,f),Object.assign({method:e,headers:h,referrerPolicy:"no-referrer"},a))})}async function Ll(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},jm),e);try{const i=new Um(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Xn(t,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[h,u]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xn(t,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw Xn(t,"email-already-in-use",c);if(h==="USER_DISABLED")throw Xn(t,"user-disabled",c);const g=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yl(t,g,u);Be(t,g)}}catch(i){if(i instanceof vt)throw i;Be(t,"internal-error",{message:String(i)})}}async function Dn(t,e,n,s,i={}){const a=await $n(t,e,n,s,i);return"mfaPendingCredential"in a&&Be(t,"multi-factor-auth-required",{_serverResponse:a}),a}function El(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Oi(t.config,i):`${t.config.apiScheme}://${i}`}class Um{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ve(this.auth,"network-request-failed")),Nm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xn(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ve(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function zm(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Hm(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fm(t,e=!1){const n=wt(t),s=await n.getIdToken(e),i=Ri(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a==null?void 0:a.sign_in_provider;return{claims:i,token:s,authTime:Ln(Xs(i.auth_time)),issuedAtTime:Ln(Xs(i.iat)),expirationTime:Ln(Xs(i.exp)),signInProvider:c||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Xs(t){return Number(t)*1e3}function Ri(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ss("JWT malformed, contained fewer than 3 sections"),null;try{const i=cl(n);return i?JSON.parse(i):(ss("Failed to decode base64 JWT payload"),null)}catch(i){return ss("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Vm(t){const e=Ri(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function kn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof vt&&Wm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Wm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fs(t){var e;const n=t.auth,s=await t.getIdToken(),i=await kn(t,Hm(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const a=i.users[0];t._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Zm(a.providerUserInfo):[],f=Km(t.providerData,c),h=t.isAnonymous,u=!(t.email&&a.passwordHash)&&!(f!=null&&f.length),g=h?u:!1,m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new Cl(a.createdAt,a.lastLoginAt),isAnonymous:g};Object.assign(t,m)}async function qm(t){const e=wt(t);await fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Km(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Zm(t){return t.map(e=>{var{providerId:n}=e,s=Mi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Jm(t,e){const n=await Ll(t,{},async()=>{const s=An({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,c=El(t,i,"/v1/token",`key=${a}`),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",xl.fetch()(c,{method:"POST",headers:f,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class In{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:a}=await Jm(e,n);this.updateTokensAndExpiration(s,i,Number(a))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:a}=n,c=new In;return s&&(K(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(K(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new In,this.toJSON())}_performRefresh(){return Ye("not implemented")}}/**
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
 */function rt(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,a=Mi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Cl(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await kn(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fm(this,e)}reload(){return qm(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await fs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kn(this,zm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,a,c,f,h,u,g;const m=(s=n.displayName)!==null&&s!==void 0?s:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,w=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,L=(c=n.photoURL)!==null&&c!==void 0?c:void 0,E=(f=n.tenantId)!==null&&f!==void 0?f:void 0,k=(h=n._redirectEventId)!==null&&h!==void 0?h:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,C=(g=n.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:x,emailVerified:b,isAnonymous:P,providerData:T,stsTokenManager:A}=n;K(x&&A,e,"internal-error");const R=In.fromJSON(this.name,A);K(typeof x=="string",e,"internal-error"),rt(m,e.name),rt(y,e.name),K(typeof b=="boolean",e,"internal-error"),K(typeof P=="boolean",e,"internal-error"),rt(w,e.name),rt(L,e.name),rt(E,e.name),rt(k,e.name),rt(S,e.name),rt(C,e.name);const I=new It({uid:x,auth:e,email:y,emailVerified:b,displayName:m,isAnonymous:P,photoURL:L,phoneNumber:w,tenantId:E,stsTokenManager:R,createdAt:S,lastLoginAt:C});return T&&Array.isArray(T)&&(I.providerData=T.map(M=>Object.assign({},M))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,n,s=!1){const i=new In;i.updateFromServerResponse(n);const a=new It({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await fs(a),a}}/**
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
 */class kl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kl.type="NONE";const Zo=kl;/**
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
 */function is(t,e,n){return`firebase:${t}:${e}:${n}`}class tn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:a}=this.auth;this.fullUserKey=is(this.userKey,i.apiKey,a),this.fullPersistenceKey=is("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new tn(Xe(Zo),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let a=i[0]||Xe(Zo);const c=is(s,e.config.apiKey,e.name);let f=null;for(const u of n)try{const g=await u._get(c);if(g){const m=It._fromJSON(e,g);u!==a&&(f=m),a=u;break}}catch{}const h=i.filter(u=>u._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new tn(a,e,s):(a=h[0],f&&await a._set(c,f.toJSON()),await Promise.all(n.map(async u=>{if(u!==a)try{await u._remove(c)}catch{}})),new tn(a,e,s))}}/**
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
 */function Jo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Il(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pl(e))return"Blackberry";if(Ml(e))return"Webos";if($i(e))return"Safari";if((e.includes("chrome/")||Sl(e))&&!e.includes("edge/"))return"Chrome";if(Tl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Il(t=ke()){return/firefox\//i.test(t)}function $i(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sl(t=ke()){return/crios\//i.test(t)}function _l(t=ke()){return/iemobile/i.test(t)}function Tl(t=ke()){return/android/i.test(t)}function Pl(t=ke()){return/blackberry/i.test(t)}function Ml(t=ke()){return/webos/i.test(t)}function Ls(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ym(t=ke()){var e;return Ls(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xm(){return fg()&&document.documentMode===10}function Al(t=ke()){return Ls(t)||Tl(t)||Ml(t)||Pl(t)||/windows phone/i.test(t)||_l(t)}function Qm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ol(t,e=[]){let n;switch(t){case"Browser":n=Jo(ke());break;case"Worker":n=`${Jo(ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xs}/${s}`}/**
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
 */class ev{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=a=>new Promise((c,f)=>{try{const h=e(a);c(h)}catch(h){f(h)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class tv{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yo(this),this.idTokenSubscription=new Yo(this),this.beforeStateQueue=new ev(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await tn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,f=i==null?void 0:i._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===f)&&(h!=null&&h.user)&&(i=h.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?wt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await tn.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),c=this._isInitialized?Promise.resolve():this._initializationPromise;return K(c,this,"internal-error"),c.then(()=>a(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ol(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function an(t){return wt(t)}class Yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=yg(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function nv(t,e,n){const s=an(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),a=Rl(e),{host:c,port:f}=sv(e),h=f===null?"":`:${f}`;s.config.emulator={url:`${a}//${c}${h}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:c,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||iv()}function Rl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sv(t){const e=Rl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const a=i[1];return{host:a,port:Xo(s.substr(a.length+1))}}else{const[a,c]=s.split(":");return{host:a,port:Xo(c)}}}function Xo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Di{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ye("not implemented")}_getIdTokenResponse(e){return Ye("not implemented")}_linkToIdToken(e,n){return Ye("not implemented")}_getReauthenticationResolver(e){return Ye("not implemented")}}async function rv(t,e){return $n(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ov(t,e){return Dn(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}/**
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
 */async function av(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function lv(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
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
 */class Sn extends Di{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Sn(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Sn(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ov(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return av(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return rv(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lv(e,{idToken:n,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function nn(t,e){return Dn(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
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
 */const cv="http://localhost";class Pt extends Di{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Pt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,a=Mi(n,["providerId","signInMethod"]);if(!s||!i)return null;const c=new Pt(s,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const n=this.buildRequest();return nn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,nn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,nn(e,n)}buildRequest(){const e={requestUri:cv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=An(n)}return e}}/**
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
 */function uv(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dv(t){const e=wn(bn(t)).link,n=e?wn(bn(e)).deep_link_id:null,s=wn(bn(t)).deep_link_id;return(s?wn(bn(s)).link:null)||s||n||e||t}class Bi{constructor(e){var n,s,i,a,c,f;const h=wn(bn(e)),u=(n=h.apiKey)!==null&&n!==void 0?n:null,g=(s=h.oobCode)!==null&&s!==void 0?s:null,m=uv((i=h.mode)!==null&&i!==void 0?i:null);K(u&&g&&m,"argument-error"),this.apiKey=u,this.operation=m,this.code=g,this.continueUrl=(a=h.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=h.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const n=dv(e);try{return new Bi(n)}catch{return null}}}/**
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
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,n){return Sn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Bi.parseLink(n);return K(s,"argument-error"),Sn._fromEmailAndCode(e,s.code,s.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ji{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bn extends ji{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ct extends Bn{constructor(){super("facebook.com")}static credential(e){return Pt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";ct.PROVIDER_ID="facebook.com";/**
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
 */class Je extends Bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Pt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Je.credential(n,s)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
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
 */class ut extends Bn{constructor(){super("github.com")}static credential(e){return Pt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.GITHUB_SIGN_IN_METHOD="github.com";ut.PROVIDER_ID="github.com";/**
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
 */class dt extends Bn{constructor(){super("twitter.com")}static credential(e,n){return Pt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return dt.credential(n,s)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
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
 */async function hv(t,e){return Dn(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
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
 */class Mt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const a=await It._fromIdTokenResponse(e,s,i),c=Qo(s);return new Mt({user:a,providerId:c,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Qo(s);return new Mt({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Qo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ps extends vt{constructor(e,n,s,i){var a;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ps.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ps(e,n,s,i)}}function $l(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ps._fromErrorAndOperation(t,a,e,s):a})}async function fv(t,e,n=!1){const s=await kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mt._forOperation(t,"link",s)}/**
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
 */async function pv(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const a=await kn(t,$l(s,i,e,t),n);K(a.idToken,s,"internal-error");const c=Ri(a.idToken);K(c,s,"internal-error");const{sub:f}=c;return K(t.uid===f,s,"user-mismatch"),Mt._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Be(s,"user-mismatch"),a}}/**
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
 */async function Dl(t,e,n=!1){const s="signIn",i=await $l(t,s,e),a=await Mt._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(a.user),a}async function gv(t,e){return Dl(an(t),e)}async function mv(t,e,n){const s=an(t),i=await hv(s,{returnSecureToken:!0,email:e,password:n}),a=await Mt._fromIdTokenResponse(s,"signIn",i);return await s._updateCurrentUser(a.user),a}function vv(t,e,n){return gv(wt(t),ln.credential(e,n))}function wv(t,e,n,s){return wt(t).onIdTokenChanged(e,n,s)}function bv(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function yv(t,e,n,s){return wt(t).onAuthStateChanged(e,n,s)}const gs="__sak";/**
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
 */class Bl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gs,"1"),this.storage.removeItem(gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xv(){const t=ke();return $i(t)||Ls(t)}const Lv=1e3,Ev=10;class jl extends Bl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xv()&&Qm(),this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((c,f,h)=>{this.notifyListeners(c,h)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(s);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const c=this.storage.getItem(s);!n&&this.localCache[s]===c||this.notifyListeners(s,c)},a=this.storage.getItem(s);Xm()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ev):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Lv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jl.type="LOCAL";const Cv=jl;/**
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
 */class Nl extends Bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nl.type="SESSION";const Ul=Nl;/**
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
 */function kv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Es{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Es(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:a}=n.data,c=this.handlersMap[i];if(!(c!=null&&c.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const f=Array.from(c).map(async u=>u(n.origin,a)),h=await kv(f);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Es.receivers=[];/**
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
 */function Ni(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Iv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((f,h)=>{const u=Ni("",20);i.port1.start();const g=setTimeout(()=>{h(new Error("unsupported_event"))},s);c={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===u)switch(y.data.status){case"ack":clearTimeout(g),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(y.data.response);break;default:clearTimeout(g),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function We(){return window}function Sv(t){We().location.href=t}/**
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
 */function zl(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function _v(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Pv(){return zl()?self:null}/**
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
 */const Hl="firebaseLocalStorageDb",Mv=1,ms="firebaseLocalStorage",Fl="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cs(t,e){return t.transaction([ms],e?"readwrite":"readonly").objectStore(ms)}function Av(){const t=indexedDB.deleteDatabase(Hl);return new jn(t).toPromise()}function gi(){const t=indexedDB.open(Hl,Mv);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ms,{keyPath:Fl})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ms)?e(s):(s.close(),await Av(),e(await gi()))})})}async function ea(t,e,n){const s=Cs(t,!0).put({[Fl]:e,value:n});return new jn(s).toPromise()}async function Ov(t,e){const n=Cs(t,!1).get(e),s=await new jn(n).toPromise();return s===void 0?null:s.value}function ta(t,e){const n=Cs(t,!0).delete(e);return new jn(n).toPromise()}const Rv=800,$v=3;class Vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>$v)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Es._getInstance(Pv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await _v(),!this.activeServiceWorker)return;this.sender=new Iv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gi();return await ea(e,gs,"1"),await ta(e,gs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ea(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ov(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ta(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Cs(i,!1).getAll();return new jn(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:a}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vl.type="LOCAL";const Dv=Vl;/**
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
 */function Bv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const a=Ve("internal-error");a.customData=i,n(a)},s.type="text/javascript",s.charset="UTF-8",Bv().appendChild(s)})}function Nv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new On(3e4,6e4);/**
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
 */function Wl(t,e){return e?Xe(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ui extends Di{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return nn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return nn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Uv(t){return Dl(t.auth,new Ui(t),t.bypassAuthState)}function zv(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),pv(n,new Ui(t),t.bypassAuthState)}async function Hv(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),fv(n,new Ui(t),t.bypassAuthState)}/**
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
 */class Gl{constructor(e,n,s,i,a=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:n,sessionId:s,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Uv;case"linkViaPopup":case"linkViaRedirect":return Hv;case"reauthViaPopup":case"reauthViaRedirect":return zv;default:Be(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Fv=new On(2e3,1e4);async function Vv(t,e,n){const s=an(t);Am(t,e,ji);const i=Wl(s,n);return new Ct(s,"signInViaPopup",e,i).executeNotNull()}class Ct extends Gl{constructor(e,n,s,i,a){super(e,n,i,a),this.provider=s,this.authWindow=null,this.pollId=null,Ct.currentPopupAction&&Ct.currentPopupAction.cancel(),Ct.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ct.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Fv.get())};e()}}Ct.currentPopupAction=null;/**
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
 */const Wv="pendingRedirect",rs=new Map;class Gv extends Gl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=rs.get(this.auth._key());if(!e){try{const s=await qv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}rs.set(this.auth._key(),e)}return this.bypassAuthState||rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qv(t,e){const n=Jv(e),s=Zv(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Kv(t,e){rs.set(t._key(),e)}function Zv(t){return Xe(t._redirectPersistence)}function Jv(t){return is(Wv,t.config.apiKey,t.name)}async function Yv(t,e,n=!1){const s=an(t),i=Wl(s,e),c=await new Gv(s,i,n).execute();return c&&!n&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
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
 */const Xv=10*60*1e3;class Qv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ew(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ql(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ve(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Xv&&this.cachedEventUids.clear(),this.cachedEventUids.has(na(e))}saveEventToCache(e){this.cachedEventUids.add(na(e)),this.lastProcessedEventTime=Date.now()}}function na(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ql({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ew(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ql(t);default:return!1}}/**
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
 */async function tw(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
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
 */const nw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sw=/^https?/;async function iw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tw(t);for(const n of e)try{if(rw(n))return}catch{}Be(t,"unauthorized-domain")}function rw(t){const e=pi(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&c.hostname===s}if(!sw.test(n))return!1;if(nw.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const ow=new On(3e4,6e4);function sa(){const t=We().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aw(t){return new Promise((e,n)=>{var s,i,a;function c(){sa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sa(),n(Ve(t,"network-request-failed"))},timeout:ow.get()})}if(!((i=(s=We().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=We().gapi)===null||a===void 0)&&a.load)c();else{const f=Nv("iframefcb");return We()[f]=()=>{gapi.load?c():n(Ve(t,"network-request-failed"))},jv(`https://apis.google.com/js/api.js?onload=${f}`).catch(h=>n(h))}}).catch(e=>{throw os=null,e})}let os=null;function lw(t){return os=os||aw(t),os}/**
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
 */const cw=new On(5e3,15e3),uw="__/auth/iframe",dw="emulator/auth/iframe",hw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pw(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oi(e,dw):`https://${t.config.authDomain}/${uw}`,s={apiKey:e.apiKey,appName:t.name,v:xs},i=fw.get(t.config.apiHost);i&&(s.eid=i);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${An(s).slice(1)}`}async function gw(t){const e=await lw(t),n=We().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:pw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hw,dontclear:!0},s=>new Promise(async(i,a)=>{await s.restyle({setHideOnLeave:!1});const c=Ve(t,"network-request-failed"),f=We().setTimeout(()=>{a(c)},cw.get());function h(){We().clearTimeout(f),i(s)}s.ping(h).then(h,()=>{a(c)})}))}/**
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
 */const mw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vw=500,ww=600,bw="_blank",yw="http://localhost";class ia{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xw(t,e,n,s=vw,i=ww){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const h=Object.assign(Object.assign({},mw),{width:s.toString(),height:i.toString(),top:a,left:c}),u=ke().toLowerCase();n&&(f=Sl(u)?bw:n),Il(u)&&(e=e||yw,h.scrollbars="yes");const g=Object.entries(h).reduce((y,[w,L])=>`${y}${w}=${L},`,"");if(Ym(u)&&f!=="_self")return Lw(e||"",f),new ia(null);const m=window.open(e||"",f,g);K(m,t,"popup-blocked");try{m.focus()}catch{}return new ia(m)}function Lw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ew="__/auth/handler",Cw="emulator/auth/handler";function ra(t,e,n,s,i,a){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:xs,eventId:i};if(e instanceof ji){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",bg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries(a||{}))c[h]=u}if(e instanceof Bn){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(c.scopes=h.join(","))}t.tenantId&&(c.tid=t.tenantId);const f=c;for(const h of Object.keys(f))f[h]===void 0&&delete f[h];return`${kw(t)}?${An(f).slice(1)}`}function kw({config:t}){return t.emulator?Oi(t,Cw):`https://${t.authDomain}/${Ew}`}/**
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
 */const Qs="webStorageSupport";class Iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ul,this._completeRedirectFn=Yv,this._overrideRedirectResult=Kv}async _openPopup(e,n,s,i){var a;Qe((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=ra(e,n,s,pi(),i);return xw(e,c,Ni())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Sv(ra(e,n,s,pi(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Qe(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gw(e),s=new Qv(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qs,{type:Qs},i=>{var a;const c=(a=i==null?void 0:i[0])===null||a===void 0?void 0:a[Qs];c!==void 0&&n(!!c),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Al()||$i()||Ls()}}const Sw=Iw;var oa="@firebase/auth",aa="0.21.4";/**
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
 */class _w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Tw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Pw(t){En(new sn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:a,authDomain:c}=s.options;return((f,h)=>{K(a&&!a.includes(":"),"invalid-api-key",{appName:f.name}),K(!(c!=null&&c.includes(":")),"argument-error",{appName:f.name});const u={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ol(t)},g=new tv(f,h,u);return Rm(g,n),g})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),En(new sn("auth-internal",e=>{const n=an(e.getProvider("auth").getImmediate());return(s=>new _w(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(oa,aa,Tw(t)),en(oa,aa,"esm2017")}/**
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
 */const Mw=5*60,Aw=ul("authIdTokenMaxAge")||Mw;let la=null;const Ow=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Aw)return;const i=n==null?void 0:n.token;la!==i&&(la=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rw(t=bm()){const e=pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Om(t,{popupRedirectResolver:Sw,persistence:[Dv,Cv,Ul]}),s=ul("authTokenSyncURL");if(s){const a=Ow(s);bv(n,a,()=>a(n.currentUser)),wv(n,c=>a(c))}const i=ag("auth");return i&&nv(n,`http://${i}`),n}Pw("Browser");const $w={apiKey:"AIzaSyAGeuaW9c75HM1dyHf_q1ZXkmxwm6NT1wk",authDomain:"taipei-parking-v2-389902.firebaseapp.com",projectId:"taipei-parking-v2-389902",storageBucket:"taipei-parking-v2-389902.appspot.com",messagingSenderId:"929229085215",appId:"1:929229085215:web:407f206255bc40ae4bd32a",measurementId:"G-61PC8D8VEE"},Dw=gl($w),Ge=Rw(Dw),Bw=new Je,jw=D.div`
  width: 90%;
  height: 72%;
  margin: 5vh auto;
  padding: 48px 29px;
  display: flex;
  flex-direction: column;
  ${Le} {
    padding: 48px 48px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${t=>t.$color.border_main};
  }
`,Nw=D.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Uw=D.form`
  flex-grow: 1;
`,zw=D.h1`
  font-size: 24px;
  margin-bottom: 12px;
`,Hw=D.span`
  margin: 16px 0;
  text-align: center;
  position: relative;
  &::before,
  &::after {
    width: 45%;
    height: 1px;
    background: ${t=>t.$color.font_main};
    content: "";
    position: absolute;
    top: 50%;
  }
  &::before {
    left: 0px;
  }
  &::after {
    right: 0px;
  }
`,ei=D.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 8px;
  }
`,ca=D.label`
  font-size: 16px;
`,ua=D.input`
  border: 1px solid ${t=>t.$color.border_main};
  border-radius: 5px;
  font-size: 16px;
  padding: 12px;
  margin: 6px 0;
  background: ${t=>t.$color.background_secondary};
  color: ${t=>t.$color.font_main};
  &:focus {
    border: 1px solid ${t=>t.$color.font_main};
    outline: none;
  }
`,da=D(rn)`
  text-decoration: none;
  color: ${t=>t.$color.background_active};
  font-size: 12px;
  &:hover {
    color: ${t=>t.$color.button_hover};
  }
`,Fw=D.div`
  border-radius: 5px;
  font-size: 12px;
  padding: 12px;
  background: ${t=>t.$color.background_error};
  color: ${t=>t.$color.font_secondary_blk};
`;function zi({title:t,btnName:e,account:n,password:s,handleLogin:i,handleSignup:a,errorMessage:c,isLoading:f,setErrorMessage:h,setAccount:u,setPassword:g}){const{theme:m}=l.useContext(Te),y=mi(),{setUser:w}=l.useContext(_n),L=vi(),E=async()=>{Ot("event","login_google",{method:"Google"});try{await Vv(Ge,Bw),ws.fire({title:"登入成功"}),vs(Ge.currentUser.uid),w(Ge.currentUser.uid),L("/")}catch(k){h(k.message)}};return v.jsxs(jw,{$color:m,children:[v.jsxs(Nw,{children:[v.jsx(zw,{children:t}),v.jsx(li,{btnName:"使用 Google帳號登入",handleGoogleLogin:E}),v.jsx(Hw,{$color:m,children:"或"})]}),v.jsxs(Uw,{onSubmit:k=>{y.pathname==="/login"?i(k):a(k)},children:[v.jsxs(ei,{children:[v.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[v.jsx(ca,{children:"Email"}),y.pathname==="/login"&&v.jsx(da,{to:"/signup",$color:m,children:"註冊新帳號？"}),y.pathname==="/signup"&&v.jsx(da,{to:"/login",$color:m,children:"登入帳號？"})]}),v.jsx(ua,{type:"email",$color:m,value:n,onChange:k=>{u(k.target.value)},onFocus:()=>{h("")}})]}),v.jsxs(ei,{children:[v.jsx(ca,{children:"Password"}),v.jsx(ua,{type:"password",$color:m,value:s,onChange:k=>{g(k.target.value)},onFocus:()=>{h("")}})]}),v.jsxs(ei,{children:[v.jsx(li,{isLoading:f,btnName:e}),c&&v.jsx(Fw,{$color:m,children:c})]})]})]})}zi.propTypes={title:ee.string,btnName:ee.string,account:ee.string,password:ee.string,handleLogin:ee.func,handleSignup:ee.func,errorMessage:ee.string,isLoading:ee.bool,setErrorMessage:ee.func,setAccount:ee.func,setPassword:ee.func,handleGoogleLogin:ee.func};const Vw=D.div`
  ${Le} {
    width: 478px;
    margin: 0 auto;
  }
`;function Ww(){const[t,e]=l.useState(""),[n,s]=l.useState(""),[i,a]=l.useState(""),[c,f]=l.useState(!1),{setUser:h}=l.useContext(_n),u=vi(),g=async()=>{f(!0),Ot("event","login_email",{method:"Google"});try{await vv(Ge,t,n),ws.fire({title:"登入成功"}),vs(Ge.currentUser.uid),h(Ge.currentUser.uid),u("/")}catch(m){a(m.message),f(!1)}};return v.jsx(Vw,{children:v.jsx(zi,{title:"Log in",btnName:"登入",account:t,password:n,setAccount:e,setPassword:s,handleLogin:g,errorMessage:i,setErrorMessage:a,isLoading:c})})}const Gw=D.div`
  ${Le} {
    width: 478px;
    margin: 0 auto;
  }
`;function qw(){const[t,e]=l.useState(""),[n,s]=l.useState(""),[i,a]=l.useState(""),[c,f]=l.useState(!1),{setUser:h}=l.useContext(_n),u=vi(),g=async m=>{f(!0),Ot("event","sign_up",{method:"Google"});try{await mv(Ge,t,n),ws.fire({title:"註冊成功"}),vs(Ge.currentUser.uid),h(Ge.currentUser.uid),u("/")}catch(y){a(y.message),f(!1)}};return v.jsx(Gw,{children:v.jsx(zi,{title:"Sign up",btnName:"註冊",account:t,password:n,setAccount:e,setPassword:s,handleSignup:g,errorMessage:i,setErrorMessage:a,isLoading:c})})}const Kw=D.footer`
  width: 100%;
  font-size: 12px;
  position: fixed;
  z-index: 10;
  bottom: 0;
  min-height: 4vh;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.22);
  background: ${t=>t.$color.background_main};
  ${Le} {
    font-size: 13px;
  }
`,Zw=D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 3vw;
  ${Le} {
    justify-content: space-between;
    width: 98%;
    margin: 5px auto;
  }
`,Jw=D.p`
  display: none;
  ${Le} {
    display: block;
  }
`,Yw=D.p``,Xw=D(rn)`
  text-decoration: none;
  color: ${t=>t.$color.font_main};
  background: ${t=>t.$color.background_hover};
  border-radius: 6px;
  padding: 3px 8px;
  margin-left: 8px;
`;function Qw(){const{theme:t}=l.useContext(Te),{updateTime:e}=l.useContext(Tn);return v.jsx(Kw,{$color:t,children:v.jsxs(Zw,{children:[v.jsxs(Jw,{children:["Website are designed and built by Bun © 2023.",v.jsx(Xw,{to:"https://github.com/thisIsBun/taipei-parking-2.0",target:"_blank",$color:t,children:"GitHub"})," "]}),v.jsxs(Yw,{children:["資料更新時間：",e]})]})})}function Kl({user:t,children:e}){const n=mi();return t&&n.pathname==="/save"?e:v.jsx(nd,{to:"/",replace:!0})}Kl.propTypes={user:ee.string,children:ee.node};ad.add(cd,ld);const eb=D.div`
  margin: 0 auto;
  padding: 11.5vh 1% 4vh;
  background: ${t=>t.$color.background_main};
`;function tb(){const{theme:t}=l.useContext(Te),[e,n]=l.useState(),[s,i]=l.useState(!1);l.useEffect(()=>{const c=fd();c&&(i(!0),yv(Ge,f=>{f.uid===c&&n(f.uid),i(!1)}))},[]);const a={background:t.background_main,color:t.font_main};return v.jsx("div",{className:"App",style:a,children:v.jsx(_n.Provider,{value:{user:e,setUser:n},children:v.jsxs(sd,{children:[v.jsx(ya,{isLoading:s}),v.jsx(eb,{$color:t,children:v.jsxs(id,{children:[v.jsx(Jn,{path:"/",element:v.jsx(Np,{})}),v.jsx(Jn,{path:"/save",element:v.jsx(Kl,{user:e,children:v.jsx(Xp,{})})}),v.jsx(Jn,{path:"/login",element:v.jsx(Ww,{})}),v.jsx(Jn,{path:"/signup",element:v.jsx(qw,{})})]})}),v.jsx(Qw,{})]})})})}rd.render(v.jsx(od.StrictMode,{children:v.jsx(Da,{children:v.jsx(wa,{children:v.jsx(tb,{})})})}),document.getElementById("root"));
