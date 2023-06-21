import{r as i,j as t,R as le}from"./react-a6e30971.js";import{R as ce}from"./react-dom-cda6ce73.js";import{s}from"./styled-components-426a60f6.js";import{L as G,H as de}from"./react-router-dom-664f3995.js";import{P as x}from"./prop-types-45996e4d.js";import{S as pe}from"./sweetalert2-2c3eca16.js";import{b as H,N as ue,d as fe,e as E}from"./react-router-e66c8262.js";import{l as he,i as me,a as ge}from"./@fortawesome-30886df6.js";import"./firebase-e58c9326.js";import{i as xe,g as ye,G as be,o as ve}from"./@firebase-40e41277.js";import"./object-assign-b33fa8b7.js";import"./hoist-non-react-statics-459140a6.js";import"./scheduler-a001dc3c.js";import"./react-is-8d9ddb1f.js";import"./@emotion-3c1bd611.js";import"./@remix-run-1b4dfeea.js";import"./idb-f62f60ab.js";import"./tslib-4b8363ab.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const $e="modulepreload",ke=function(e){return"/migrate-cra-to-vite/"+e},Q={},D=function(n,o,c){if(!o||o.length===0)return n();const r=document.getElementsByTagName("link");return Promise.all(o.map(a=>{if(a=ke(a),a in Q)return;Q[a]=!0;const l=a.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!c)for(let u=r.length-1;u>=0;u--){const y=r[u];if(y.href===a&&(!l||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${d}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":$e,l||(p.as="script",p.crossOrigin=""),p.href=a,document.head.appendChild(p),l)return new Promise((u,y)=>{p.addEventListener("load",u),p.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())},_e="/migrate-cra-to-vite/assets/logo-67eb2664.png",J="uid",Te=e=>{localStorage.setItem(J,e)},we=()=>localStorage.getItem(J);function je(e,n){var o=Math.pow,c=Math.PI,r=Math.sin,a=Math.cos,l=Math.tan,d=6378137,_=6356752314245e-6,p=121*c/180,u=.9999,y=25e4,I=0,f=o(1-o(_,2)/o(d,2),.5);e-=y,n-=I;var T=n/u,b=T/(d*(1-o(f,2)/4-3*o(f,4)/64-5*o(f,6)/256)),v=(1-o(1-o(f,2),.5))/(1+o(1-o(f,2),.5)),R=3*v/2-27*o(v,3)/32,O=21*o(v,2)/16-55*o(v,4)/32,N=151*o(v,3)/96,A=1097*o(v,4)/512,m=b+R*r(2*b)+O*r(4*b)+N*r(6*b)+A*r(8*b),w=o(f*d/_,2),g=o(w*a(m),2),$=o(l(m),2),z=d*(1-o(f,2))/o(1-o(f,2)*o(r(m),2),3/2),L=d/o(1-o(f,2)*o(r(m),2),.5),k=e/(L*u),M=L*l(m)/z,P=o(k,2)/2,B=(5+3*$+10*g-4*o(g,2)-9*w)*o(k,4)/24,F=(61+90*$+298*g+45*o($,2)-3*o(g,2)-252*w)*o(k,6)/720,S=m-M*(P-B+F),ae=k,ie=(1+2*$+g)*o(k,3)/6,se=(5-2*g+28*$-3*o(g,2)+8*w+24*o($,2))*o(k,5)/120,U=p+(ae-ie+se)/a(m);return S=S*180/c,U=U*180/c,{lat:S,lng:U}}const V={strokeOpacity:.5,strokeWeight:2,clickable:!1,draggable:!1,editable:!1,visible:!0},jt={closeOptions:{...V,zIndex:3,fillOpacity:.05,strokeColor:"#8BC34A",fillColor:"#8BC34A"},middleOptions:{...V,zIndex:2,fillOpacity:.05,strokeColor:"#FBC02D",fillColor:"#FBC02D"},farOptions:{...V,zIndex:1,fillOpacity:.05,strokeColor:"#FF5252",fillColor:"#FF5252"}},K="save-park";function St(e){window.localStorage.setItem(K,JSON.stringify(e))}const Ct=()=>JSON.parse(window.localStorage.getItem(K)),Se=pe.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:3e3,icon:"success"}),Ce=function(){window.dataLayer.push(arguments)},W={light:{background_main:"#fff",background_secondary:"#E7E9EB",background_active:"#04AA6D",background_hover:"#cccccc",background_error:"#ffc0c7",background_searchbox:"#fff",font_main:"#282a35",font_active:"#ffffff",font_secondary_blk:"#282D35",font_card_main:"#282a35",font_card_secondary:"#115E5E",border_main:"#D6D6D6",button_hover:"#059862",mapStyle:{styles:[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}]}},dark:{background_main:"#1d2a35",background_secondary:"#38444d",background_active:"#04AA6D",background_hover:"#38444d",background_error:"#ffc0c7",background_searchbox:"#38444d",font_main:"#ddd",font_active:"#ffffff",font_secondary_blk:"#282D35",font_card_main:"#75A598",font_card_secondary:"#ddd",border_main:"#3C5350",button_hover:"#03744b",mapStyle:{styles:[{elementType:"geometry",stylers:[{color:"#242f3e"}]},{elementType:"labels.text.fill",stylers:[{color:"#746855"}]},{elementType:"labels.text.stroke",stylers:[{color:"#242f3e"}]},{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#263c3f"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#38414e"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{color:"#212a37"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#9ca5b3"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#746855"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#1f2835"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#17263c"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#515c6d"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}]}}},C=i.createContext(null),q=({children:e})=>{const[n,o]=i.useState(!0),c=()=>{o(!n),Ce("event","switch_theme",{content_type:"switchTheme"})},r=n?W.dark:W.light,a={dark:n,theme:r,toggleTheme:c};return t.jsx(C.Provider,{value:a,children:e})};q.propTypes={children:x.node};const h="@media screen and (min-width: 768px)",Ae=s.label`
  width: 68px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 10px;
  cursor: pointer;
  ${h} {
    width: 90px;
    min-height: 34px;
    font-size: 12px;
    font-weight: bold;
  }
`,Le=s.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${e=>e.$color.border_main};
  position: absolute;
  border-radius: 50px;
`,Pe=s.div`
  width: 100%;
  text-align: center;
  color: ${e=>e.$dark?e.$color.font_main:e.$color.font_active};
`,Ee=s.div`
  width: 100%;
  text-align: center;
  color: ${e=>e.$dark?e.$color.font_active:e.$color.font_main};
`,Y=s.div`
  position: absolute;
  width: calc(50% - 2px);
  top: 2px;
  bottom: 2px;
  right: 2px;
  transition: right 0.25s ease-out;
  background: ${e=>e.$color.background_active};
  border-radius: 50px;
  z-index: -1;
`,De=s.input`
  &:checked + ${Y} {
    right: 50%;
    transition: right 0.25s ease-out;
  }
`;function Ie(){const{dark:e,theme:n,toggleTheme:o}=i.useContext(C);return t.jsxs(Ae,{htmlFor:"theme-toggle",children:[t.jsx(Le,{$color:n}),t.jsx(De,{id:"theme-toggle",hidden:!0,type:"checkbox",onClick:o,$color:n}),t.jsx(Y,{$color:n,$dark:e}),t.jsx(Pe,{$color:n,$dark:e,children:"Light"}),t.jsx(Ee,{$color:n,$dark:e,children:"Dark"})]})}const X=i.createContext(null),Re=s.div`
  width: 142px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Oe=s.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid rgba(0, 0, 0, 0);
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
`;function Z({borderColor:e,borderTopColor:n,width:o,height:c}){return t.jsx(Re,{style:{width:o,height:c},children:t.jsx(Oe,{style:{borderColor:e,borderTopColor:n}})})}Z.propTypes={borderColor:x.string,borderTopColor:x.string,width:x.string,height:x.string};const Ne=s.header`
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
  ${h} {
    display: grid;
    grid-template-columns: 1fr auto minmax(400px, 3fr) 1fr;
  }
`,ze=s.div`
  width: 100px;
  position: absolute;
  top: 50%;
  left: 1.5%;
  transform: translateY(-50%);
  ${h} {
    all: unset;
  }
`,Me=s.div`
  display: flex;
  align-items: center;
  ${h} {
    grid-column: 2/3;
  }
`,Be=s.h1`
  margin: 0 10px;
  font-size: 24px;
  font-weight: normal;
`,j=s(G)`
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
  ${h} {
    padding: 10px 15px;
    margin-right: 10px;
    opacity: 1;
    border-radius: 8px;
  }
`,Fe=s.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background: ${e=>e.$color.background_main};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-out;
  transform-origin: top;
  transform: scale(1, 0);
  ${h} {
    all: unset;
    grid-column: 3/4;
    display: flex;
    justify-content: end;
  }
  ${e=>e.$checkboxStatus&&`
    transform: scale(1, 1);
  `}

  ${j} {
    ${e=>e.$checkboxStatus&&`
      transition: opacity 0.2s ease-out 0.25s;
      opacity: 1;
    `}
  }
`,Ue=s.input``,Ve=s.label`
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 1.5%;
  display: flex;
  align-items: center;
  ${h} {
    display: none;
  }
`,Qe=s.span`
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
`;function ee({isLoading:e}){const{theme:n}=i.useContext(C),{user:o,setUser:c}=i.useContext(X);let r=H();const[a,l]=i.useState(!1),d=u=>{l(u.target.checked)},_=()=>{window.screen.width>=768||l(!a)},p=()=>{c(""),Te(""),Se.fire({title:"登出成功"})};return t.jsxs(Ne,{$color:n,children:[t.jsxs(Me,{children:[t.jsx("img",{src:_e,alt:"website-logo",width:"30px",height:"30px"}),t.jsx(Be,{children:"車位即時查"}),t.jsx(ze,{children:t.jsx(Ie,{})})]}),t.jsx(Ue,{hidden:!0,type:"checkbox",className:"navbar-toggle",id:"navbar-toggle",checked:a,onChange:d}),t.jsxs(Fe,{$checkboxStatus:a,onClick:_,$color:n,children:[t.jsx(j,{to:"/",$pathActive:r.pathname==="/",$color:n,children:"地圖"}),e&&t.jsx(Z,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)"}),!e&&t.jsxs(t.Fragment,{children:[o&&t.jsxs(t.Fragment,{children:[t.jsx(j,{to:"/save",$pathActive:r.pathname==="/save",$color:n,children:"儲存"}),t.jsx(j,{to:"/",$color:n,onClick:p,children:"登出"})]}),!o&&t.jsxs(t.Fragment,{children:[(r.pathname==="/login"||r.pathname==="/")&&t.jsx(j,{to:"/login",$pathActive:r.pathname==="/login",$color:n,children:"登入"}),r.pathname==="/signup"&&t.jsx(j,{to:"/signup",$pathActive:r.pathname==="/signup",$color:n,children:"註冊"})]})]})]}),t.jsx(Ve,{htmlFor:"navbar-toggle",className:"navbar-toggle-label",children:t.jsx(Qe,{$color:n})})]})}ee.propTypes={isLoading:x.bool};const te="https://tcgbusfs.blob.core.windows.net/blobtcmsv",We=()=>fetch(`${te}/TCMSV_alldesc.json`).then(e=>e.json()),Ge=()=>fetch(`${te}/TCMSV_allavailable.json`).then(e=>e.json()),oe=i.createContext([]),re=({children:e})=>{const[n,o]=i.useState([]),[c,r]=i.useState(""),[a,l]=i.useState(!1);async function d(){const[_,p]=await Promise.all([We(),Ge()]),u=_.data.park,y=p.data.park,I=p.data.UPDATETIME,f=y.map(T=>{const b=u.find(S=>S.id===T.id);if(!b)return null;const{name:v,totalcar:R,payex:O,tel:N,serviceTime:A,tw97x:m,tw97y:w,area:g,address:$}=b,{lat:z,lng:L}=je(m,w),k=A==="00:00:00~23:59:59"?"24小時":A,{id:M,availablecar:P,ChargeStation:B}=T,F=B===void 0?"無":"有";return P<=0?null:{id:M,name:v,availablecar:P,totalcar:R,payex:O,address:$,area:g,hasChargingStation:F,tel:N,opening:k,lat:z,lng:L}}).filter(T=>T!==null);o(f),r(I),l(!1)}return i.useEffect(()=>{d(),l(!0)},[]),t.jsx(oe.Provider,{value:{sortData:n,updateTime:c,isLoading:a},children:e})};re.propTypes={children:x.node};const He=s.footer`
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
  ${h} {
    font-size: 13px;
  }
`,Je=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 3vw;
  ${h} {
    justify-content: space-between;
    width: 98%;
    margin: 5px auto;
  }
`,Ke=s.p`
  display: none;
  ${h} {
    display: block;
  }
`,qe=s.p``,Ye=s(G)`
  text-decoration: none;
  color: ${e=>e.$color.font_main};
  background: ${e=>e.$color.background_hover};
  border-radius: 6px;
  padding: 3px 8px;
  margin-left: 8px;
`;function Xe(){const{theme:e}=i.useContext(C),{updateTime:n}=i.useContext(oe);return t.jsx(He,{$color:e,children:t.jsxs(Je,{children:[t.jsxs(Ke,{children:["Website are designed and built by Bun © 2023.",t.jsx(Ye,{to:"https://github.com/thisIsBun/taipei-parking-2.0",target:"_blank",$color:e,children:"GitHub"})," "]}),t.jsxs(qe,{children:["資料更新時間：",n]})]})})}function ne({user:e,children:n}){const o=H();return e&&o.pathname==="/save"?n:t.jsx(ue,{to:"/",replace:!0})}ne.propTypes={user:x.string,children:x.node};const Ze={apiKey:"AIzaSyAGeuaW9c75HM1dyHf_q1ZXkmxwm6NT1wk",authDomain:"taipei-parking-v2-389902.firebaseapp.com",projectId:"taipei-parking-v2-389902",storageBucket:"taipei-parking-v2-389902.appspot.com",messagingSenderId:"929229085215",appId:"1:929229085215:web:407f206255bc40ae4bd32a",measurementId:"G-61PC8D8VEE"},et=xe(Ze),tt=ye(et),At=new be;he.add(me,ge);const ot=i.lazy(()=>D(()=>import("./index-55e04176.js"),["assets/index-55e04176.js","assets/react-a6e30971.js","assets/object-assign-b33fa8b7.js","assets/hoist-non-react-statics-459140a6.js","assets/@react-google-maps-5f30a405.js","assets/react-dom-cda6ce73.js","assets/scheduler-a001dc3c.js","assets/use-places-autocomplete-fc9b0d25.js","assets/@reach-657426b8.js","assets/tabbable-f49af954.js","assets/@reach-874c6c45.css","assets/prop-types-45996e4d.js","assets/@fortawesome-30886df6.js","assets/styled-components-426a60f6.js","assets/react-is-8d9ddb1f.js","assets/@emotion-3c1bd611.js","assets/react-router-dom-664f3995.js","assets/react-router-e66c8262.js","assets/@remix-run-1b4dfeea.js","assets/sweetalert2-2c3eca16.js","assets/firebase-e58c9326.js","assets/@firebase-40e41277.js","assets/idb-f62f60ab.js","assets/tslib-4b8363ab.js"])),rt=i.lazy(()=>D(()=>import("./index-6ca83bf8.js"),["assets/index-6ca83bf8.js","assets/react-a6e30971.js","assets/object-assign-b33fa8b7.js","assets/hoist-non-react-statics-459140a6.js","assets/styled-components-426a60f6.js","assets/react-is-8d9ddb1f.js","assets/@emotion-3c1bd611.js","assets/react-table-834d9fa3.js","assets/@fortawesome-30886df6.js","assets/prop-types-45996e4d.js","assets/react-router-dom-664f3995.js","assets/react-router-e66c8262.js","assets/@remix-run-1b4dfeea.js","assets/react-dom-cda6ce73.js","assets/scheduler-a001dc3c.js","assets/sweetalert2-2c3eca16.js","assets/firebase-e58c9326.js","assets/@firebase-40e41277.js","assets/idb-f62f60ab.js","assets/tslib-4b8363ab.js"])),nt=i.lazy(()=>D(()=>import("./index-ae9c115c.js"),["assets/index-ae9c115c.js","assets/react-a6e30971.js","assets/object-assign-b33fa8b7.js","assets/hoist-non-react-statics-459140a6.js","assets/Form-d8d14019.js","assets/styled-components-426a60f6.js","assets/react-is-8d9ddb1f.js","assets/@emotion-3c1bd611.js","assets/prop-types-45996e4d.js","assets/react-router-dom-664f3995.js","assets/react-router-e66c8262.js","assets/@remix-run-1b4dfeea.js","assets/@firebase-40e41277.js","assets/idb-f62f60ab.js","assets/tslib-4b8363ab.js","assets/react-dom-cda6ce73.js","assets/scheduler-a001dc3c.js","assets/sweetalert2-2c3eca16.js","assets/@fortawesome-30886df6.js","assets/firebase-e58c9326.js"])),at=i.lazy(()=>D(()=>import("./index-3b11a669.js"),["assets/index-3b11a669.js","assets/react-a6e30971.js","assets/object-assign-b33fa8b7.js","assets/hoist-non-react-statics-459140a6.js","assets/Form-d8d14019.js","assets/styled-components-426a60f6.js","assets/react-is-8d9ddb1f.js","assets/@emotion-3c1bd611.js","assets/prop-types-45996e4d.js","assets/react-router-dom-664f3995.js","assets/react-router-e66c8262.js","assets/@remix-run-1b4dfeea.js","assets/@firebase-40e41277.js","assets/idb-f62f60ab.js","assets/tslib-4b8363ab.js","assets/react-dom-cda6ce73.js","assets/scheduler-a001dc3c.js","assets/sweetalert2-2c3eca16.js","assets/@fortawesome-30886df6.js","assets/firebase-e58c9326.js"])),it=s.div`
  margin: 0 auto;
  padding: 11.5vh 1% 4vh;
  background: ${e=>e.$color.background_main};
`;function st(){const{theme:e}=i.useContext(C),[n,o]=i.useState(),[c,r]=i.useState(!1);i.useEffect(()=>{const l=we();l&&(r(!0),ve(tt,d=>{d.uid===l&&o(d.uid),r(!1)}))},[]);const a={background:e.background_main,color:e.font_main};return t.jsx("div",{className:"App",style:a,children:t.jsx(X.Provider,{value:{user:n,setUser:o},children:t.jsxs(de,{children:[t.jsx(ee,{isLoading:c}),t.jsx(it,{$color:e,children:t.jsx(i.Suspense,{fallback:t.jsx("h1",{children:"loading..."}),children:t.jsxs(fe,{children:[t.jsx(E,{path:"/",element:t.jsx(ot,{})}),t.jsx(E,{path:"/save",element:t.jsx(ne,{user:n,children:t.jsx(rt,{})})}),t.jsx(E,{path:"/login",element:t.jsx(nt,{})}),t.jsx(E,{path:"/signup",element:t.jsx(at,{})})]})})}),t.jsx(Xe,{})]})})})}ce.render(t.jsx(le.StrictMode,{children:t.jsx(re,{children:t.jsx(q,{children:t.jsx(st,{})})})}),document.getElementById("root"));export{X as A,Z as L,h as M,oe as P,C as T,Ct as a,tt as b,jt as c,Se as d,At as e,Ce as g,Te as s,St as w};
