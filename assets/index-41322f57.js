import{r as i,j as e,L as Q}from"./react-b7acef7a.js";import{u as _,C as U,a as V,b as X,d as Z,e as q,f as J,h as K,P as h,G as ee,M as B,i as oe,j as w,I as N,k as te}from"./google-6ac6e1d4.js";import{T as A,g as P,a as se,w as ne,M as C,L as T,P as ie,c as k}from"./index-81d00f9c.js";import{F as f,s as n}from"./vendor-9071635d.js";import"./fortawesome-4f418b12.js";function F({setLocation:o}){const{theme:t}=i.useContext(A),{ready:a,value:r,setValue:g,suggestions:{status:b,data:u},clearSuggestions:y}=_({requestOptions:{componentRestrictions:{country:"tw"}}}),c=async s=>{g(s,!1),y();const l=await J({address:s}),{lat:d,lng:j}=await K(l[0]);o({lat:d,lng:j})};return e.jsxs(U,{onSelect:c,className:"combobox",style:{background:`${t.background_searchbox}`},children:[e.jsxs(e.Fragment,{children:[e.jsx(V,{value:r,onChange:s=>{g(s.target.value),P("event","search",{search_term:r})},className:"combobox-input",style:{background:`${t.background_searchbox}`,color:`${t.font_main}`},placeholder:"輸入台北市目的地",disabled:!a}),e.jsx(f,{icon:"fa-solid fa-xmark",style:{width:"22px",height:"22px",margin:"0 16px"},cursor:"pointer",onClick:()=>g("")})]}),e.jsx(X,{className:"combobox-popover",style:{background:`${t.background_searchbox}`,color:`${t.font_main}`,left:"2vw",width:"calc(96vw - 56px)",boxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",WebkitBoxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",MozBoxShadow:"0 2px 12px 0 rgba(0, 0, 0, 0.22)",borderRadius:"0 0 7px 7px",borderWidth:"0",padding:b?"12px 0":"0"},children:e.jsx(Z,{children:b==="OK"&&u.map(({place_id:s,description:l})=>e.jsx(q,{value:l},s))})})]})}F.propTypes={setLocation:h.func};const ae=n.div`
  color: ${o=>o.$color.font_secondary_blk};
  padding: 3px 0 0 5px;
`,re=n.div`
  display: flex;
  justify-content: space-between;
`,ce=n.p`
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
  color: ${o=>o.$color.font_secondary_blk};
  font-size: 10px;
  position: absolute;
  top: 2px;
  left: 3px;
`,le=n.h1`
  font-size: 24px;
  color: ${o=>o.$color.font_active};
`;function W({hoverMarker:{availablecar:o,hasChargingStation:t}}){const{theme:a}=i.useContext(A),r={width:"24px",height:"24px",color:a.font_active};return e.jsxs(ae,{$color:a,children:[e.jsxs(re,{children:[e.jsxs(S,{style:{background:"#04AA6D"},children:[e.jsx(L,{$color:a,children:"空車位"}),e.jsx(le,{$color:a,children:o})]}),t==="有"&&e.jsxs(S,{style:{background:"#E67E22"},children:[e.jsx(L,{$color:a,children:"提供充電樁"}),e.jsx(f,{icon:"fa-solid fa-circle-check",style:r})]}),t==="無"&&e.jsxs(S,{style:{background:"#AFABAB"},children:[e.jsx(L,{$color:a,children:"提供充電樁"}),e.jsx(f,{icon:"fa-solid fa-circle-xmark",style:r})]})]}),e.jsx(ce,{children:"*點擊標記看詳細資訊"})]})}W.propTypes={hoverMarker:h.object,availablecar:h.number,hasChargingStation:h.string};const de=n.div`
  margin: 6px 0;
  color: #117577;
  width: 256px;
  padding-right: 6px;
  ${C} {
    width: 360px;
  }
`,pe=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(17, 117, 119, 0.5);
  padding-bottom: 6px;
`,xe=n.h1`
  font-size: 14px;
  line-height: 1.1;
  margin-right: 10px;
`,he=n.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 80px;
  ${C} {
    margin-right: 0;
    min-width: 160px;
  }
`,I=n(Q)`
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
`,ge=n.div`
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
`,ue=n.div`
  max-height: 70px;
  overflow-y: scroll;
`,D={width:"16px",height:"16px"};function Y({clickMarker:o}){const{name:t,payex:a,area:r,address:g,opening:b,lat:u,lng:y,id:c}=o,[s,l]=i.useState(()=>se()||[]),[d,j]=i.useState(()=>s.some(m=>m.id===c));i.useEffect(()=>{ne(s),j(s.some(m=>m.id===c))},[s,j,c]);const v=()=>{l(d?s.filter(m=>m.id!==c):[o,...s])};return e.jsxs(de,{children:[e.jsxs(pe,{children:[e.jsx(xe,{children:t}),e.jsxs(he,{children:[e.jsxs(I,{to:`https://www.google.com/maps/dir/?api=1&destination=${u},${y}&travelmode=driving`,target:"_blank",children:[e.jsx(O,{children:"路線"}),e.jsx(f,{icon:"fa-regular fa-compass",style:D})]}),e.jsxs(I,{onClick:v,to:"#",children:[e.jsx(O,{children:"儲存"}),d&&e.jsx(f,{icon:"fa-solid fa-bookmark",style:D}),!d&&e.jsx(f,{icon:"fa-regular fa-bookmark",style:D})]})]})]}),e.jsxs(ge,{children:[e.jsxs(z,{children:[e.jsx($,{children:"費率"}),e.jsx(ue,{children:e.jsx(M,{children:a})})]}),e.jsxs(z,{children:[e.jsx($,{children:"營業時間"}),e.jsx(M,{children:b})]}),e.jsxs(z,{children:[e.jsx($,{children:"地址"}),e.jsx(M,{children:g})]})]})]})}Y.propTypes={clickMarker:h.object};const me=n.div`
  border-radius: 7px;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
  background: ${o=>o.$color.background_searchbox};
  cursor: pointer;
`;function G({handleLocator:o,isLoading:t,isDeviceLocate:a}){const{theme:r}=i.useContext(A);return e.jsxs(me,{$color:r,onClick:o,children:[!t&&e.jsx(f,{icon:"fa-solid fa-crosshairs",style:{width:"20px",height:"20px",color:`${a?"#04AA6D":""}`}}),t&&e.jsx(T,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)"})]})}G.propTypes={handleLocator:h.func,isLoading:h.bool,isDeviceLocate:h.bool};const fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAACcUlEQVR4AazUA6wsZwCA0TNYXte2bdu2bdu2bdtW1I1TK6jbZ1vX3r+aoH7YL9kdn/EkSFGHZjQgRYQYSfZLUUIjWrJfI8pI/KXdDz744CNbW1u/+PDDD+/FulgBS2OpI444Yo0vv/zy+MmTJz/R1dX1ccgaGBhonTBhwjuvvvrq0VgKTchFCFdffbVrTm0244tE3RaHtvfEuZ/iOK6madqYmzF+1eqY75k4RDJtpGpXu66pU3X++ouWW0/Dzkf5pju5Z/PNN38ck1IAg7NUh99q+APXNjRttP2GabGoOvYHubo6+V9/uXJZUlcHADo+r+iaMNaSFz6+CyrojQFggW2pW4Hu7z/T89OXZrf+/v4c5kdd7C8tcRxx0RwVQoiQQ/o3MCmx+ClzjiJC9DcQCoux8PFEc476RxDyizL/0USFGoGQW4SW04gXqhEIcZH6o0hWqxEIkN+ReLsaghCtkqG1AiFZleKuNQShsCYNO9cQhIZNqVuthiAsfDBJ6R/AIUOGjNW8D/ml/WPxsiS7E51FeiNN7zP/o5JFj7PwbiCgmv0EvHvVVVc9M3PmzOmh+9sQZj4RQuuzIfR8FcJgWxj2a88999xb559//h04AcfutNNO51cqlbfDwMzw6wf4U+yP1SDgDZyGE3beeefzLr/88ut/+x1//PGX4VgcjYOwIzbBBtgQW2IP7JXNXyxCwKt4D1PRhgEAQBW9aEcXBhEhj3rE6EBrCgjoxhRMQi8CAEKG9mdYFRFitCHCAAYiBLyMVzAE4zI8+HvhH+ZHyBwhBeBvdyuYvUL2A7EaN9fgL6OPgaMG/qemgX9huYBSgwHnr9+YKVsfRAAAAABJRU5ErkJggg==";function be(){const o=i.useMemo(()=>({lat:25.0336752,lng:121.5648831}),[]),[t,a]=i.useState(o),{theme:r}=i.useContext(A),{sortData:g}=i.useContext(ie),b=i.useMemo(()=>({streetViewControl:!1,styles:r.mapStyle.styles,mapTypeControl:!1,fullscreenControl:!1}),[r.mapStyle.styles]),u=i.useRef(),y=i.useCallback(p=>u.current=p,[]),[c,s]=i.useState(""),[l,d]=i.useState(""),[j,v]=i.useState(!1),[m,E]=i.useState(!1),H=()=>{v(!0),P("event","locate_by_device",{content_type:"locateByDevice"}),navigator.geolocation.getCurrentPosition(p=>{const{coords:{latitude:x,longitude:R}}=p;a({lat:x,lng:R}),u.current.panTo({lat:x,lng:R}),v(!1),E(!0)})};return e.jsxs("div",{className:"map-container",children:[e.jsxs("div",{className:"combobox-wrapper",children:[e.jsx(F,{setLocation:p=>{a(p),u.current.panTo(p),E(!1)}}),e.jsx(G,{handleLocator:H,isLoading:j,isDeviceLocate:m})]}),e.jsx("div",{children:e.jsxs(ee,{center:o,zoom:16,mapContainerClassName:"map-wrapper",options:b,onLoad:y,children:[t&&e.jsxs(e.Fragment,{children:[e.jsx(B,{position:t}),e.jsx(oe,{children:p=>g.map(x=>e.jsx(B,{position:{lat:x.lat,lng:x.lng},clusterer:p,icon:fe,onMouseOut:()=>s(null),onMouseOver:()=>s(x),onClick:()=>{d(x),s("")}},x.id))}),e.jsx(w,{center:t,radius:100,options:k.closeOptions}),e.jsx(w,{center:t,radius:250,options:k.middleOptions}),e.jsx(w,{center:t,radius:500,options:k.farOptions})]}),c&&e.jsx(N,{position:{lat:c.lat,lng:c.lng},options:{pixelOffset:new window.google.maps.Size(0,-35)},onCloseClick:()=>s(""),children:e.jsx(W,{hoverMarker:c})}),l&&e.jsx(N,{position:{lat:l.lat,lng:l.lng},options:{pixelOffset:new window.google.maps.Size(0,-20)},onCloseClick:()=>d(""),children:e.jsx(Y,{clickMarker:l})})]})})]})}const je=["places"];function ke(){const{isLoaded:o}=te({googleMapsApiKey:"AIzaSyChicSoqpRADSYywazOI87PMBRSBMG6-fw",libraries:je});return o?e.jsx(be,{}):e.jsx(T,{borderColor:"#04AA6D",borderTopColor:"rgba(0, 0, 0, 0)",width:"100%",height:"200px"})}export{ke as default};
