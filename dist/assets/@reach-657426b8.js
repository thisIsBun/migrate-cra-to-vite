import{r as o}from"./react-a6e30971.js";import{r as ze}from"./react-dom-cda6ce73.js";import{t as L}from"./tabbable-f49af954.js";function Se(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var U=Se()?o.useLayoutEffect:o.useEffect;function de(e,t){var n=o.createContext(t);return n}function Ye(e){return typeof e=="boolean"}function ae(e){return!!(e&&{}.toString.call(e)=="[object Function]")}function Xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(r){return r!=null}).join("--")}function fe(){}function xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qe(e,t){if(e){if(typeof e=="string")return xe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xe(e,t)}}function Je(e,t){var n;if(typeof Symbol>"u"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=qe(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return n=e[Symbol.iterator](),n.next.bind(n)}function Qe(e,t){if(e!=null)if(ae(e))e(t);else try{e.current=t}catch{throw new Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}function ie(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.useCallback(function(r){for(var a=Je(t),i;!(i=a()).done;){var l=i.value;Qe(l,r)}},t)}function Ze(e,t){var n=o.useRef(!1);o.useEffect(function(){n.current?e():n.current=!0},t)}function et(e,t){var n=o.useState(t),r=n[0],a=n[1],i=o.useCallback(function(l){e.current=l,a(l)},[]);return[r,i]}function F(e,t){return function(n){if(e&&e(n),!n.defaultPrevented)return t(n)}}function Te(){var e=o.useState(Object.create(null)),t=e[1];return o.useCallback(function(){t(Object.create(null))},[])}function tt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}var nt=["element","index"];function rt(e,t){t===void 0&&(t={});var n=[];return de(e,V({descendants:n,registerDescendant:fe,unregisterDescendant:fe},t))}function at(e,t,n){var r=Te(),a=o.useContext(t),i=a.registerDescendant,l=a.unregisterDescendant,c=a.descendants,u=n??c.findIndex(function(v){return v.element===e.element});return U(function(){return e.element||r(),i(V({},e,{index:u})),function(){l(e.element)}},[e,r,u,i,l].concat(Object.values(e))),u}function it(){return o.useState([])}function ot(e){return o.useContext(e).descendants}function ut(e){var t=e.context,n=e.children,r=e.items,a=e.set,i=o.useCallback(function(c){var u=c.element,v=c.index,h=tt(c,nt);u&&a(function(d){var p;if(v!=null)return[].concat(d,[V({},h,{element:u,index:v})]).sort(function(b,x){return b.index-x.index});if(d.length===0)p=[V({},h,{element:u,index:0})];else if(d.find(function(b){return b.element===u}))p=d;else{var g=d.findIndex(function(b){return!b.element||!u?!1:!!(b.element.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_PRECEDING)}),C=V({},h,{element:u,index:g});g===-1?p=[].concat(d,[C]):p=[].concat(d.slice(0,g),[C],d.slice(g))}return p.map(function(b,x){return V({},b,{index:x})})})},[]),l=o.useCallback(function(c){c&&a(function(u){return u.filter(function(v){return c!==v.element})})},[]);return o.createElement(t.Provider,{value:o.useMemo(function(){return{descendants:r,registerDescendant:i,unregisterDescendant:l}},[r,i,l])},n)}var ce=!1,lt=0,Ee=function(){return++lt};function st(e){var t=e||(ce?Ee():null),n=o.useState(t),r=n[0],a=n[1];return U(function(){r===null&&a(Ee())},[]),o.useEffect(function(){ce===!1&&(ce=!0)},[]),r!=null?String(r):void 0}var ct=function(t){var n=t.children,r=t.type,a=r===void 0?"reach-portal":r,i=t.containerRef,l=o.useRef(null),c=o.useRef(null),u=Te();return U(function(){if(l.current){var v=l.current.ownerDocument,h=(i==null?void 0:i.current)||v.body;return c.current=v==null?void 0:v.createElement(a),h.appendChild(c.current),u(),function(){c.current&&h&&h.removeChild(c.current)}}},[a,u,i]),c.current?ze.createPortal(n,c.current):o.createElement("span",{ref:l})},ft=["bottom","height","left","right","top","width"],dt=function(t,n){return t===void 0&&(t={}),n===void 0&&(n={}),ft.some(function(r){return t[r]!==n[r]})},k=new Map,we,vt=function e(){var t=[];k.forEach(function(n,r){var a=r.getBoundingClientRect();dt(a,n.rect)&&(n.rect=a,t.push(n))}),t.forEach(function(n){n.callbacks.forEach(function(r){return r(n.rect)})}),we=window.requestAnimationFrame(e)};function ht(e,t){return{observe:function(){var r=k.size===0;k.has(e)?k.get(e).callbacks.push(t):k.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),r&&vt()},unobserve:function(){var r=k.get(e);if(r){var a=r.callbacks.indexOf(t);a>=0&&r.callbacks.splice(a,1),r.callbacks.length||k.delete(e),k.size||cancelAnimationFrame(we)}}}}function Ie(e,t,n){var r,a;if(Ye(t))r=t;else{var i;r=(i=t==null?void 0:t.observe)!=null?i:!0,a=t==null?void 0:t.onChange}ae(n)&&(a=n);var l=o.useState(e.current),c=l[0],u=l[1],v=o.useRef(!1),h=o.useRef(!1),d=o.useState(null),p=d[0],g=d[1],C=o.useRef(a);return U(function(){C.current=a,e.current!==c&&u(e.current)}),U(function(){c&&!v.current&&(v.current=!0,g(c.getBoundingClientRect()))},[c]),U(function(){if(r){var b=c;if(h.current||(h.current=!0,b=e.current),!!b){var x=ht(b,function(I){C.current==null||C.current(I),g(I)});return x.observe(),function(){x.unobserve()}}}},[r,c,e]),p}function pt(e){return Se()?e?e.ownerDocument:document:null}function gt(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function G(){return G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}var bt=["as","targetRef","position","unstable_observableRefs"],mt=o.forwardRef(function(t,n){return o.createElement(ct,null,o.createElement(Ct,G({ref:n},t)))}),Ct=o.forwardRef(function(t,n){var r=t.as,a=r===void 0?"div":r,i=t.targetRef,l=t.position,c=l===void 0?Et:l,u=t.unstable_observableRefs,v=u===void 0?[]:u,h=gt(t,bt),d=o.useRef(null),p=Ie(d,{observe:!h.hidden}),g=Ie(i,{observe:!h.hidden}),C=ie(d,n);return Rt(i,d),o.createElement(a,G({"data-reach-popover":"",ref:C},h,{style:G({position:"absolute"},xt.apply(void 0,[c,g,p].concat(v)),h.style)}))});function xt(e,t,n){for(var r=arguments.length,a=new Array(r>3?r-3:0),i=3;i<r;i++)a[i-3]=arguments[i];return n?e.apply(void 0,[t,n].concat(a.map(function(l){return l.current}))):{visibility:"hidden"}}function ye(e,t,n){return{top:n?e.top-t.height+window.pageYOffset+"px":e.top+e.height+window.pageYOffset+"px"}}var Et=function(t,n){if(!t||!n)return{};var r=De(t,n),a=r.directionRight,i=r.directionUp;return G({left:a?t.right-n.width+window.pageXOffset+"px":t.left+window.pageXOffset+"px"},ye(t,n,i))},It=function(t,n){if(!t||!n)return{};var r=De(t,n),a=r.directionUp;return G({width:t.width,left:t.left},ye(t,n,a))};function De(e,t,n,r){n===void 0&&(n=0),r===void 0&&(r=0);var a={top:e.top-t.height<0,right:window.innerWidth<e.left+t.width-n,bottom:window.innerHeight<e.bottom+t.height-r,left:e.left+e.width-t.width<0},i=a.right&&!a.left,l=a.left&&!a.right,c=a.bottom&&!a.top,u=a.top&&!a.bottom;return{directionRight:i,directionLeft:l,directionUp:c,directionDown:u}}function Rt(e,t){var n=pt(e.current);function r(s){s.key==="Tab"&&t.current&&L(t.current).length===0||(s.key==="Tab"&&s.shiftKey?v(s)?h(s):d(s)?p(s):C(s)&&x():s.key==="Tab"&&(i()?l(s):c()?u(s):g(s)&&x()))}o.useEffect(function(){return n.addEventListener("keydown",r),function(){n.removeEventListener("keydown",r)}},[]);function a(){var s=L(n),f=s&&e.current?s.indexOf(e.current):-1,E=s&&s[f+1];return t.current&&t.current.contains(E||null)?!1:E}function i(){return e.current?e.current===n.activeElement:!1}function l(s){var f=t.current&&L(t.current);f&&f[0]&&(s.preventDefault(),f[0].focus())}function c(){var s=t.current?t.current.contains(n.activeElement||null):!1;if(s){var f=t.current&&L(t.current);return!!(f&&f[f.length-1]===n.activeElement)}return!1}function u(s){var f=a();f&&(s.preventDefault(),f.focus())}function v(s){if(s.shiftKey){var f=a();return s.target===f}}function h(s){var f=t.current&&L(t.current),E=f&&f[f.length-1];E&&(s.preventDefault(),E.focus())}function d(s){var f=t.current&&L(t.current);return f?f.length===0?!1:s.target===f[0]:!1}function p(s){var f;s.preventDefault(),(f=e.current)==null||f.focus()}function g(s){var f=t.current?L(n).filter(function(E){return!t.current.contains(E)}):null;return f?s.target===f[f.length-1]:!1}function C(s){return s.target===L(n)[0]}var b=[];function x(){var s=t.current&&L(t.current);s&&(s.forEach(function(f){b.push([f,f.tabIndex]),f.tabIndex=-1}),n.addEventListener("focusin",I))}function I(){n.removeEventListener("focusin",I),b.forEach(function(s){var f=s[0],E=s[1];f.tabIndex=E})}}function ee(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function R(){return R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function St(e){var t=e.autoEscape,n=e.caseSensitive,r=n===void 0?!1:n,a=e.findChunks,i=a===void 0?Ae:a,l=e.sanitize,c=e.searchWords,u=e.textToHighlight;return Pe({chunksToHighlight:Oe({chunks:i({autoEscape:t,caseSensitive:r,sanitize:l,searchWords:c,textToHighlight:u})}),totalLength:u?u.length:0})}function Oe(e){var t=e.chunks;return t.sort(function(n,r){return n.start-r.start}).reduce(function(n,r){if(n.length===0)return[r];var a=n.pop();if(r.start<=a.end){var i=Math.max(a.end,r.end);n.push({highlight:!1,start:a.start,end:i})}else n.push(a,r);return n},[])}function Ae(e){var t=e.autoEscape,n=e.caseSensitive,r=e.sanitize,a=r===void 0?Tt:r,i=e.searchWords,l=e.textToHighlight;return l=a(l||""),i.filter(function(c){return c}).reduce(function(c,u){u=a(u),t&&(u=wt(u));for(var v=new RegExp(u,n?"g":"gi"),h;h=v.exec(l||"");){var d=h.index,p=v.lastIndex;p>d&&c.push({highlight:!1,start:d,end:p}),h.index===v.lastIndex&&v.lastIndex++}return c},[])}function Pe(e){var t=e.chunksToHighlight,n=e.totalLength,r=[];if(t.length===0)i(0,n,!1);else{var a=0;t.forEach(function(l){i(a,l.start,!1),i(l.start,l.end,!0),a=l.end}),i(a,n,!1)}return r;function i(l,c,u){c-l>0&&r.push({start:l,end:c,highlight:u})}}function Tt(e){return e}function wt(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}var yt={combineChunks:Oe,fillInChunks:Pe,findAll:St,findChunks:Ae},Dt=["onSelect","openOnFocus","children","as","aria-label","aria-labelledby"],Ot=["as","selectOnClick","autocomplete","onClick","onChange","onKeyDown","onBlur","onFocus","value"],At=["as","children","portal","onKeyDown","onBlur","position"],Pt=["persistSelection","as"],$t=["as","children","index","value","onClick"],A,O,w,P,z,m="IDLE",y="SUGGESTING",H="NAVIGATING",Q="INTERACTING",Y="CLEAR",X="CHANGE",ve="INITIAL_CHANGE",S="NAVIGATE",he="SELECT_WITH_KEYBOARD",j="SELECT_WITH_CLICK",Z="ESCAPE",q="BLUR",re="INTERACT",J="FOCUS",pe="OPEN_WITH_BUTTON",ge="OPEN_WITH_INPUT_CLICK",ne="CLOSE_WITH_BUTTON",Lt={initial:m,states:(z={},z[m]={on:(A={},A[q]=m,A[Y]=m,A[X]=y,A[ve]=m,A[J]=y,A[S]=H,A[pe]=y,A[ge]=y,A)},z[y]={on:(O={},O[X]=y,O[J]=y,O[S]=H,O[Y]=m,O[Z]=m,O[q]=m,O[j]=m,O[re]=Q,O[ne]=m,O)},z[H]={on:(w={},w[X]=y,w[J]=y,w[Y]=m,w[q]=m,w[Z]=m,w[S]=H,w[j]=m,w[he]=m,w[ne]=m,w[re]=Q,w)},z[Q]={on:(P={},P[Y]=m,P[X]=y,P[J]=y,P[q]=m,P[Z]=m,P[S]=H,P[ne]=m,P[j]=m,P)},z)},Nt=function(t,n){var r=R({},t,{lastEventType:n.type});switch(n.type){case X:case ve:return R({},r,{navigationValue:null,value:n.value});case S:case pe:case ge:return R({},r,{navigationValue:Re(r,n)});case Y:return R({},r,{value:"",navigationValue:null});case q:case Z:return R({},r,{navigationValue:null});case j:return R({},r,{value:n.isControlled?t.value:n.value,navigationValue:null});case he:return R({},r,{value:n.isControlled?t.value:t.navigationValue,navigationValue:null});case ne:return R({},r,{navigationValue:null});case re:return r;case J:return R({},r,{navigationValue:Re(r,n)});default:return r}};function kt(e){return[y,H,Q].includes(e)}function Re(e,t){return t.value?t.value:t.persistSelection?e.value:null}var be=rt("ComboboxDescendantContext"),B=de("ComboboxContext",{}),$e=de("OptionContext",{}),jt=o.forwardRef(function(e,t){var n,r=e.onSelect,a=e.openOnFocus,i=a===void 0?!1:a,l=e.children,c=e.as,u=c===void 0?"div":c,v=e["aria-label"],h=e["aria-labelledby"],d=ee(e,Dt),p=it(),g=p[0],C=p[1],b=o.useRef(),x=o.useRef(),I=o.useRef(),s=o.useRef(!1),f=o.useRef(!1),E={value:"",navigationValue:null},T=Vt(Lt,Nt,E),N=T[0],_=T[1],W=T[2];Ht(_.lastEventType,b);var D=st(d.id),oe=D?Xe("listbox",D):"listbox",te=o.useRef(!1),M=kt(N),ue={ariaLabel:v,ariaLabelledby:h,autocompletePropRef:s,buttonRef:I,comboboxId:D,data:_,inputRef:b,isExpanded:M,listboxId:oe,onSelect:r||fe,openOnFocus:i,persistSelectionRef:f,popoverRef:x,state:N,transition:W,isControlledRef:te};return o.createElement(ut,{context:be,items:g,set:C},o.createElement(B.Provider,{value:ue},o.createElement(u,R({},d,{"data-reach-combobox":"","data-state":me(N),"data-expanded":M||void 0,ref:t}),ae(l)?l({id:D,isExpanded:M,navigationValue:(n=_.navigationValue)!=null?n:null,state:N}):l)))}),Gt=o.forwardRef(function(e,t){var n=e.as,r=n===void 0?"input":n,a=e.selectOnClick,i=a===void 0?!1:a,l=e.autocomplete,c=l===void 0?!0:l,u=e.onClick,v=e.onChange,h=e.onKeyDown,d=e.onBlur,p=e.onFocus,g=e.value,C=ee(e,Ot),b=o.useRef(g),x=b.current,I=o.useRef(!1);Ze(function(){I.current=!0},[g]);var s=o.useContext(B),f=s.data,E=f.navigationValue,T=f.value,N=f.lastEventType,_=s.inputRef,W=s.state,D=s.transition,oe=s.listboxId,te=s.autocompletePropRef,M=s.openOnFocus,ue=s.isExpanded,Ce=s.ariaLabel,Fe=s.ariaLabelledby,He=s.persistSelectionRef,Ve=s.isControlledRef,Ue=ie(_,t),le=o.useRef(!1),Be=Le(),_e=Ne(),K=typeof g<"u";o.useEffect(function(){Ve.current=K},[K]),U(function(){te.current=c},[c,te]);var se=o.useCallback(function($){$.trim()===""?D(Y,{isControlled:K}):$===x&&!I.current?D(ve,{value:$}):D(X,{value:$})},[x,D,K]);o.useEffect(function(){K&&g!==T&&(g.trim()!==""||(T||"").trim()!=="")&&se(g)},[g,se,K,T]);function Ke($){var Me=$.target.value;K||se(Me)}function je(){i&&(le.current=!0),M&&N!==j&&D(J,{persistSelection:He.current})}function Ge(){if(le.current){var $;le.current=!1,($=_.current)==null||$.select()}M&&W===m&&D(ge)}var We=c&&(W===H||W===Q)?E||g||T:g||T;return o.createElement(r,R({"aria-activedescendant":E?String(ke(E)):void 0,"aria-autocomplete":"both","aria-controls":oe,"aria-expanded":ue,"aria-haspopup":"listbox","aria-label":Ce,"aria-labelledby":Ce?void 0:Fe,role:"combobox"},C,{"data-reach-combobox-input":"","data-state":me(W),ref:Ue,onBlur:F(d,_e),onChange:F(v,Ke),onClick:F(u,Ge),onFocus:F(p,je),onKeyDown:F(h,Be),value:We||""}))}),Wt=o.forwardRef(function(e,t){var n=e.as,r=n===void 0?"div":n,a=e.children,i=e.portal,l=i===void 0?!0:i,c=e.onKeyDown,u=e.onBlur,v=e.position,h=v===void 0?It:v,d=ee(e,At),p=o.useContext(B),g=p.popoverRef,C=p.inputRef,b=p.isExpanded,x=p.state,I=ie(g,t),s=Le(),f=Ne(),E={"data-reach-combobox-popover":"","data-state":me(x),onKeyDown:F(c,s),onBlur:F(u,f),hidden:!b,tabIndex:-1,children:a};return l?o.createElement(mt,R({as:r},d,{ref:I,"data-expanded":b||void 0,position:h,targetRef:C},E)):o.createElement(r,R({ref:I},d,E))}),Mt=o.forwardRef(function(e,t){var n=e.persistSelection,r=n===void 0?!1:n,a=e.as,i=a===void 0?"ul":a,l=ee(e,Pt),c=o.useContext(B),u=c.persistSelectionRef,v=c.listboxId;return r&&(u.current=!0),o.createElement(i,R({role:"listbox"},l,{ref:t,"data-reach-combobox-list":"",id:v}))}),zt=o.forwardRef(function(e,t){var n=e.as,r=n===void 0?"li":n,a=e.children,i=e.index,l=e.value,c=e.onClick,u=ee(e,$t),v=o.useContext(B),h=v.onSelect,d=v.data.navigationValue,p=v.transition,g=v.isControlledRef,C=o.useRef(null),b=et(C,null),x=b[0],I=b[1],s=o.useMemo(function(){return{element:x,value:l}},[l,x]),f=at(s,be,i),E=ie(t,I),T=d===l,N=function(){h&&h(l),p(j,{value:l,isControlled:g.current})};return o.createElement($e.Provider,{value:{value:l,index:f}},o.createElement(r,R({"aria-selected":T,role:"option"},u,{"data-reach-combobox-option":"",ref:E,id:String(ke(l)),"data-highlighted":T?"":void 0,tabIndex:-1,onClick:F(c,N)}),a?ae(a)?a({value:l,index:f}):a:o.createElement(Ft,null)))});function Ft(){var e=o.useContext($e),t=e.value,n=o.useContext(B),r=n.data.value,a=o.useMemo(function(){return yt.findAll({searchWords:Ut(r||"").split(/\s+/),textToHighlight:t})},[r,t]);return o.createElement(o.Fragment,null,a.length?a.map(function(i,l){var c=t.slice(i.start,i.end);return o.createElement("span",{key:l,"data-reach-combobox-option-text":"","data-user-value":i.highlight?!0:void 0,"data-suggested-value":i.highlight?void 0:!0},c)}):t)}function Ht(e,t){U(function(){if(e===S||e===Z||e===j||e===pe){var n;(n=t.current)==null||n.focus()}},[t,e])}function Le(){var e=o.useContext(B),t=e.data.navigationValue,n=e.onSelect,r=e.state,a=e.transition,i=e.autocompletePropRef,l=e.persistSelectionRef,c=e.isControlledRef,u=ot(be);return function(h){var d=u.findIndex(function(s){var f=s.value;return f===t});function p(){var s=d===u.length-1;return s?i.current?null:C():u[(d+1)%u.length]}function g(){var s=d===0;return s?i.current?null:b():d===-1?b():u[(d-1+u.length)%u.length]}function C(){return u[0]}function b(){return u[u.length-1]}switch(h.key){case"ArrowDown":if(h.preventDefault(),!u||!u.length)return;if(r===m)a(S,{persistSelection:l.current});else{var x=p();a(S,{value:x?x.value:null})}break;case"ArrowUp":if(h.preventDefault(),!u||u.length===0)return;if(r===m)a(S);else{var I=g();a(S,{value:I?I.value:null})}break;case"Home":case"PageUp":if(h.preventDefault(),!u||u.length===0)return;r===m?a(S):a(S,{value:C().value});break;case"End":case"PageDown":if(h.preventDefault(),!u||u.length===0)return;r===m?a(S):a(S,{value:b().value});break;case"Escape":r!==m&&a(Z);break;case"Enter":r===H&&t!==null&&(h.preventDefault(),n&&n(t),a(he,{isControlled:c.current}));break}}}function Ne(){var e=o.useContext(B),t=e.state,n=e.transition,r=e.popoverRef,a=e.inputRef,i=e.buttonRef;return function(c){var u=r.current,v=a.current,h=i.current,d=c.relatedTarget;d!==v&&d!==h&&u&&(u.contains(d)?t!==Q&&n(re):n(q))}}function Vt(e,t,n){var r=o.useState(e.initial),a=r[0],i=r[1],l=o.useReducer(t,n),c=l[0],u=l[1],v=function(d,p){p===void 0&&(p={});var g=e.states[a],C=g&&g.on[d];if(C){u(R({type:d,state:a,nextState:a},p)),i(C);return}};return[a,c,v]}function ke(e){var t=0;if(e.length===0)return t;for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);t=(t<<5)-t+r,t=t&t}return t}function me(e){return e.toLowerCase()}function Ut(e){return String(e).replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")}export{jt as C,Gt as a,Wt as b,Mt as c,zt as d};
