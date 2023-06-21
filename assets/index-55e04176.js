import{r as i,j as o}from"./react-a6e30971.js";import{G as Q,M as B,C as _,a as w,I as N,u as U}from"./@react-google-maps-5f30a405.js";import{T as A,g as P,a as V,w as X,M as C,L as T,P as Z,c as k}from"./index-e2fcd8e6.js";import{u as q,g as J,a as K}from"./use-places-autocomplete-fc9b0d25.js";import{C as oo,a as eo,b as to,c as so,d as no}from"./@reach-657426b8.js";import{P as g}from"./prop-types-45996e4d.js";import{F as f}from"./@fortawesome-30886df6.js";import{s as n}from"./styled-components-426a60f6.js";import{L as io}from"./react-router-dom-664f3995.js";import"./object-assign-b33fa8b7.js";import"./hoist-non-react-statics-459140a6.js";import"./react-dom-cda6ce73.js";import"./scheduler-a001dc3c.js";import"./sweetalert2-2c3eca16.js";import"./react-router-e66c8262.js";import"./@remix-run-1b4dfeea.js";import"./firebase-e58c9326.js";import"./@firebase-40e41277.js";import"./idb-f62f60ab.js";import"./tslib-4b8363ab.js";import"./react-is-8d9ddb1f.js";import"./@emotion-3c1bd611.js";import"./tabbable-f49af954.js";function F({setLocation:e}){const{theme:t}=i.useContext(A),{ready:r,value:a,setValue:h,suggestions:{status:b,data:m},clearSuggestions:y}=q({requestOptions:{componentRestrictions:{country:"tw"}}}),c=async s=>{h(s,!1),y();const l=await J({address:s}),{lat:p,lng:j}=await K(l[0]);e({lat:p,lng:j})};return o.jsxs(oo,{onSelect:c,className:"combobox",style:{background:`${t.background_searchbox}`},children:[o.jsxs(o.Fragment,{children:[o.jsx(eo,{value:a,onChange:s=>{h(s.target.value),P("event","search",{search_term:a})},className:"combobox-input",style:{background:`${t.background_searchbox}`,color:`${t.font_main}`},placeholder:"輸入台北市目的地",disabled:!r}),o.jsx(f,{icon:"fa-solid fa-xmark",style:{width:"22px",height:"22px",margin:"0 16px"},cursor:"pointer",onClick:()=>h("")})]}),o.jsx(to,{className:"combobox-popover",style:{background:`${t.background_searchbox}`,color:`${t.font_main}`,left:"2vw",width:"calc(96vw - 56px)",boxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",WebkitBoxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",MozBoxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",borderRadius:"0 0 7px 7px",borderWidth:"0",padding:b?"12px 0":"0"},children:o.jsx(so,{children:b==="OK"&&m.map(({place_id:s,description:l})=>o.jsx(no,{value:l},s))})})]})}F.propTypes={setLocation:g.func};const ro=n.div`
  color: ${e=>e.$color.font_secondary_blk};
  padding: 3px 0 0 5px;
`,ao=n.div`
  display: flex;
  justify-content: space-between;
`,co=n.p`
  font-size: 10px;
`,S=n.div`
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
`,L=n.p`
  color: ${e=>e.$color.font_secondary_blk};
  font-size: 10px;
  position: absolute;
  top: 2px;
  left: 3px;
`,lo=n.h1`
  font-size: 24px;
  color: ${e=>e.$color.font_active};
`;function W({hoverMarker:{availablecar:e,hasChargingStation:t}}){const{theme:r}=i.useContext(A),a={width:"24px",height:"24px",color:r.font_active};return o.jsxs(ro,{$color:r,children:[o.jsxs(ao,{children:[o.jsxs(S,{style:{background:"#04AA6D"},children:[o.jsx(L,{$color:r,children:"空車位"}),o.jsx(lo,{$color:r,children:e})]}),t==="有"&&o.jsxs(S,{style:{background:"#E67E22"},children:[o.jsx(L,{$color:r,children:"提供充電樁"}),o.jsx(f,{icon:"fa-solid fa-circle-check",style:a})]}),t==="無"&&o.jsxs(S,{style:{background:"#AFABAB"},children:[o.jsx(L,{$color:r,children:"提供充電樁"}),o.jsx(f,{icon:"fa-solid fa-circle-xmark",style:a})]})]}),o.jsx(co,{children:"*點擊標記看詳細資訊"})]})}W.propTypes={hoverMarker:g.object,availablecar:g.number,hasChargingStation:g.string};const po=n.div`
  margin: 6px 0;
  color: #117577;
  width: 256px;
  padding-right: 6px;
  ${C} {
    width: 360px;
  }
`,xo=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(17, 117, 119, 0.5);
  padding-bottom: 6px;
`,go=n.h1`
  font-size: 14px;
  line-height: 1.1;
  margin-right: 10px;
`,ho=n.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80px;
  ${C} {
    margin-right: 0;
    min-width: 160px;
  }
`,I=n(io)`
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
  ${C} {
    width: auto;
    padding: 4px 12px;
  }
`,O=n.span`
  display: none;
  ${C} {
    display: block;
    font-size: 12px;
    font-weight: bold;
    margin-right: 4px;
  }
`,mo=n.div`
  margin-top: 12px;
`,z=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
`,$=n.h3`
  font-size: 12px;
  margin-bottom: 2px;
`,M=n.p`
  color: #112e31;
  font-size: 11px;
`,uo=n.div`
  max-height: 70px;
  overflow-y: scroll;
`,D={width:"16px",height:"16px"};function Y({clickMarker:e}){const{name:t,payex:r,area:a,address:h,opening:b,lat:m,lng:y,id:c}=e,[s,l]=i.useState(()=>V()||[]),[p,j]=i.useState(()=>s.some(u=>u.id===c));i.useEffect(()=>{X(s),j(s.some(u=>u.id===c))},[s,j,c]);const v=()=>{l(p?s.filter(u=>u.id!==c):[e,...s])};return o.jsxs(po,{children:[o.jsxs(xo,{children:[o.jsx(go,{children:t}),o.jsxs(ho,{children:[o.jsxs(I,{to:`https://www.google.com/maps/dir/?api=1&destination=${m},${y}&travelmode=driving`,target:"_blank",children:[o.jsx(O,{children:"路線"}),o.jsx(f,{icon:"fa-regular fa-compass",style:D})]}),o.jsxs(I,{onClick:v,to:"#",children:[o.jsx(O,{children:"儲存"}),p&&o.jsx(f,{icon:"fa-solid fa-bookmark",style:D}),!p&&o.jsx(f,{icon:"fa-regular fa-bookmark",style:D})]})]})]}),o.jsxs(mo,{children:[o.jsxs(z,{children:[o.jsx($,{children:"費率"}),o.jsx(uo,{children:o.jsx(M,{children:r})})]}),o.jsxs(z,{children:[o.jsx($,{children:"營業時間"}),o.jsx(M,{children:b})]}),o.jsxs(z,{children:[o.jsx($,{children:"地址"}),o.jsx(M,{children:h})]})]})]})}Y.propTypes={clickMarker:g.object};const fo=n.div`
  border-radius: 7px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  background: ${e=>e.$color.background_searchbox};
  cursor: pointer;
`;function G({handleLocator:e,isLoading:t,isDeviceLocate:r}){const{theme:a}=i.useContext(A);return o.jsxs(fo,{$color:a,onClick:e,children:[!t&&o.jsx(f,{icon:"fa-solid fa-crosshairs",style:{width:"20px",height:"20px",color:`${r?"#04AA6D":""}`}}),t&&o.jsx(T,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)"})]})}G.propTypes={handleLocator:g.func,isLoading:g.bool,isDeviceLocate:g.bool};const bo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAACcUlEQVR4AazUA6wsZwCA0TNYXte2bdu2bdu2bdtW1I1TK6jbZ1vX3r+aoH7YL9kdn/EkSFGHZjQgRYQYSfZLUUIjWrJfI8pI/KXdDz744CNbW1u/+PDDD+/FulgBS2OpI444Yo0vv/zy+MmTJz/R1dX1ccgaGBhonTBhwjuvvvrq0VgKTchFCFdffbVrTm0244tE3RaHtvfEuZ/iOK6madqYmzF+1eqY75k4RDJtpGpXu66pU3X++ouWW0/Dzkf5pju5Z/PNN38ck1IAg7NUh99q+APXNjRttP2GabGoOvYHubo6+V9/uXJZUlcHADo+r+iaMNaSFz6+CyrojQFggW2pW4Hu7z/T89OXZrf+/v4c5kdd7C8tcRxx0RwVQoiQQ/o3MCmx+ClzjiJC9DcQCoux8PFEc476RxDyizL/0USFGoGQW4SW04gXqhEIcZH6o0hWqxEIkN+ReLsaghCtkqG1AiFZleKuNQShsCYNO9cQhIZNqVuthiAsfDBJ6R/AIUOGjNW8D/ml/WPxsiS7E51FeiNN7zP/o5JFj7PwbiCgmv0EvHvVVVc9M3PmzOmh+9sQZj4RQuuzIfR8FcJgWxj2a88999xb559//h04AcfutNNO51cqlbfDwMzw6wf4U+yP1SDgDZyGE3beeefzLr/88ut/+x1//PGX4VgcjYOwIzbBBtgQW2IP7JXNXyxCwKt4D1PRhgEAQBW9aEcXBhEhj3rE6EBrCgjoxhRMQi8CAEKG9mdYFRFitCHCAAYiBLyMVzAE4zI8+HvhH+ZHyBwhBeBvdyuYvUL2A7EaN9fgL6OPgaMG/qemgX9huYBSgwHnr9+YKVsfRAAAAABJRU5ErkJggg==";function jo(){const e=i.useMemo(()=>({lat:25.0336752,lng:121.5648831}),[]),[t,r]=i.useState(e),{theme:a}=i.useContext(A),{sortData:h}=i.useContext(Z),b=i.useMemo(()=>({streetViewControl:!1,styles:a.mapStyle.styles,mapTypeControl:!1,fullscreenControl:!1}),[a.mapStyle.styles]),m=i.useRef(),y=i.useCallback(d=>m.current=d,[]),[c,s]=i.useState(""),[l,p]=i.useState(""),[j,v]=i.useState(!1),[u,E]=i.useState(!1),H=()=>{v(!0),P("event","locate_by_device",{content_type:"locateByDevice"}),navigator.geolocation.getCurrentPosition(d=>{const{coords:{latitude:x,longitude:R}}=d;r({lat:x,lng:R}),m.current.panTo({lat:x,lng:R}),v(!1),E(!0)})};return o.jsxs("div",{className:"map-container",children:[o.jsxs("div",{className:"combobox-wrapper",children:[o.jsx(F,{setLocation:d=>{r(d),m.current.panTo(d),E(!1)}}),o.jsx(G,{handleLocator:H,isLoading:j,isDeviceLocate:u})]}),o.jsx("div",{children:o.jsxs(Q,{center:e,zoom:16,mapContainerClassName:"map-wrapper",options:b,onLoad:y,children:[t&&o.jsxs(o.Fragment,{children:[o.jsx(B,{position:t}),o.jsx(_,{children:d=>h.map(x=>o.jsx(B,{position:{lat:x.lat,lng:x.lng},clusterer:d,icon:bo,onMouseOut:()=>s(null),onMouseOver:()=>s(x),onClick:()=>{p(x),s("")}},x.id))}),o.jsx(w,{center:t,radius:100,options:k.closeOptions}),o.jsx(w,{center:t,radius:250,options:k.middleOptions}),o.jsx(w,{center:t,radius:500,options:k.farOptions})]}),c&&o.jsx(N,{position:{lat:c.lat,lng:c.lng},options:{pixelOffset:new window.google.maps.Size(0,-35)},onCloseClick:()=>s(""),children:o.jsx(W,{hoverMarker:c})}),l&&o.jsx(N,{position:{lat:l.lat,lng:l.lng},options:{pixelOffset:new window.google.maps.Size(0,-20)},onCloseClick:()=>p(""),children:o.jsx(Y,{clickMarker:l})})]})})]})}const yo=["places"];function Ho(){const{isLoaded:e}=U({googleMapsApiKey:"AIzaSyChicSoqpRADSYywazOI87PMBRSBMG6-fw",libraries:yo});return e?o.jsx(jo,{}):o.jsx(T,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)",width:"100%",height:"200px"})}export{Ho as default};
