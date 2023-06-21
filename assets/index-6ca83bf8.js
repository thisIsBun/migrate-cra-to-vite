import{r as n,j as e}from"./react-a6e30971.js";import{s}from"./styled-components-426a60f6.js";import{r as S}from"./react-table-834d9fa3.js";import{T as u,P as I,L as F,a as M,w as R,M as V,g as G}from"./index-e2fcd8e6.js";import{F as a}from"./@fortawesome-30886df6.js";import{P as p}from"./prop-types-45996e4d.js";import{L as E}from"./react-router-dom-664f3995.js";import"./object-assign-b33fa8b7.js";import"./hoist-non-react-statics-459140a6.js";import"./react-is-8d9ddb1f.js";import"./@emotion-3c1bd611.js";import"./react-dom-cda6ce73.js";import"./scheduler-a001dc3c.js";import"./sweetalert2-2c3eca16.js";import"./react-router-e66c8262.js";import"./@remix-run-1b4dfeea.js";import"./firebase-e58c9326.js";import"./@firebase-40e41277.js";import"./idb-f62f60ab.js";import"./tslib-4b8363ab.js";const v={marginLeft:"6px"};function W({columns:t,data:d}){const{theme:o}=n.useContext(u),{getTableProps:x,getTableBodyProps:r,headerGroups:y,rows:g,prepareRow:h}=S.useTable({columns:t,data:d},S.useSortBy);return e.jsxs("table",{...x(),style:{width:"100%",color:o.font_main,borderCollapse:"collapse"},children:[e.jsx("thead",{children:y.map(c=>e.jsx("tr",{...c.getHeaderGroupProps(),style:{height:"50px"},children:c.headers.map(i=>e.jsxs("th",{...i.getHeaderProps(i.getSortByToggleProps()),style:{background:o.background_hover,fontWeight:"bold",fontSize:"16px",cursor:"pointer",manWidth:i.maxWidth,width:i.width},children:[i.render("Header"),i.Header!=="Action"&&i.Header!=="費率"&&e.jsx("span",{children:i.isSorted?i.isSortedDesc?e.jsx(a,{icon:"fa-solid fa-sort-down",style:v}):e.jsx(a,{icon:"fa-solid fa-sort-up",style:v}):e.jsx(a,{icon:"fa-solid fa-sort",style:v})})]}))}))}),e.jsx("tbody",{...r(),children:g.map(c=>(h(c),e.jsx("tr",{...c.getRowProps(),style:{borderBottom:`1px solid ${o.background_secondary}`},children:c.cells.map(i=>e.jsx("td",{...i.getCellProps(),style:{padding:"10px",fontSize:i.column.Header==="Action"?"16px":"12px",textAlign:i.column.Header==="名稱"||i.column.Header==="地址"||i.column.Header==="費率"?"left":"center"},children:i.render("Cell")}))})))})]})}W.propTypes={columns:p.array,data:p.array};const N=s.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
  justify-items: center;
  color: ${t=>t.$color.font_card_secondary};
`,O=s.div`
  border: 1.5px solid rgba(17, 117, 119, 0.5);
  border-radius: 8px;
  width: 320px;
  height: 370px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`,Q=s.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  color: ${t=>t.$color.font_active};
`,w=s.div`
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
`,$=s.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  top: 2px;
  left: 3px;
  color: ${t=>t.$color.font_secondary_blk};
`,U=s.h1``,Y=s.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`,f=s.div`
  & + & {
    margin-top: 8px;
  }
  :last-child {
    display: flex;
    justify-content: end;
  }
`,q=s.h1`
  font-size: 20px;
  line-height: 1.1;
`,j=s.p`
  font-size: 12px;
  margin-top: 2px;
  color: ${t=>t.$color.font_card_main};
`,b=s.h2`
  font-size: 16px;
`,H=s(E)`
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
`,A=s.span`
  margin-right: 8px;
`,T={width:"28px",height:"28px"},L={width:"18px",height:"18px"},J=s.div`
  max-height: 70px;
  overflow-y: scroll;
`;function z({data:t,handleDeleteList:d}){const{theme:o}=n.useContext(u),{isLoading:x}=n.useContext(I);return e.jsx(N,{$color:o,children:t.map(r=>e.jsxs(O,{children:[e.jsxs(Q,{$color:o,children:[e.jsxs(w,{style:{flexGrow:1,background:r.availablecar!=="已滿"?"#04AA6D":"#AFABAB"},children:[e.jsx($,{$color:o,children:"即時空位 / 總車位"}),x&&e.jsx(F,{}),!x&&e.jsxs(U,{children:[r.availablecar," / ",r.totalcar]})]}),r.hasChargingStation==="有"&&e.jsxs(w,{style:{background:"#E67E22"},children:[e.jsx($,{$color:o,children:"提供充電樁"}),e.jsx(a,{icon:"fa-solid fa-circle-check",style:T})]}),r.hasChargingStation==="無"&&e.jsxs(w,{style:{background:"#AFABAB"},children:[e.jsx($,{$color:o,children:"提供充電樁"}),e.jsx(a,{icon:"fa-solid fa-circle-xmark",style:T})]})]}),e.jsxs(Y,{children:[e.jsxs(f,{children:[e.jsx(q,{children:r.name}),e.jsx(j,{$color:o,children:r.address})]}),e.jsxs(f,{children:[e.jsx(b,{children:"區域"}),e.jsx(j,{$color:o,children:r.area})]}),e.jsxs(f,{children:[e.jsx(b,{children:"費率"}),e.jsx(J,{children:e.jsx(j,{$color:o,children:r.payex})})]}),e.jsxs(f,{children:[e.jsx(b,{children:"營業時間"}),e.jsx(j,{$color:o,children:r.opening})]}),e.jsxs(f,{children:[e.jsxs(H,{to:`https://www.google.com/maps/dir/?api=1&destination=${r.lat},${r.lng}&travelmode=driving`,target:"_blank",$color:o,children:[e.jsx(A,{children:"路線"}),e.jsx(a,{icon:"fa-regular fa-compass",style:L})]}),e.jsxs(H,{to:"#",$color:o,onClick:()=>d(r.id),children:[e.jsx(A,{children:"刪除"}),e.jsx(a,{icon:"fa-solid fa-trash-can",style:L})]})]})]})]},r.id))})}z.propTypes={data:p.array,handleDeleteList:p.func};const K=s.h2`
  margin: 66px 0;
  text-align: center;
`,X=s.div`
  width: 100%;
  padding: 16px;
`,Z=s.div``,ee=s.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
  visibility: hidden;
  ${V} {
    visibility: visible;
  }
`,B=s.div`
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
`,te=s.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,D=s(E)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${t=>t.$color.font_main};
  width: 30px;
  height: 30px;
`,P={width:"30px",height:"30px"};function C({item:t,handleDeleteList:d}){const{theme:o}=n.useContext(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(D,{to:`https://www.google.com/maps/dir/?api=1&destination=${t.lat},${t.lng}&travelmode=driving`,target:"_blank",$color:o,children:e.jsx(a,{icon:"fa-regular fa-compass"})}),e.jsx(D,{to:"#",$color:o,onClick:()=>d(t.id),children:e.jsx(a,{icon:"fa-solid fa-trash-can"})})]})}function $e(){const{theme:t}=n.useContext(u),{sortData:d}=n.useContext(I),[o,x]=n.useState(!0),[r,y]=n.useState(()=>M()||[]);n.useEffect(()=>{R(r)},[r]);const g=()=>{x(!o),G("event","switch_save_view",{content_type:"switchSaveView"})},h=k=>{y(r.filter(l=>l.id!==k))},c=n.useMemo(()=>r.map(l=>{const _=d.find(m=>m.id===l.id);if(_){const{availablecar:m}=_;return{...l,availablecar:m,action:e.jsx(C,{item:l,handleDeleteList:h})}}else return{...l,availablecar:"已滿",action:e.jsx(C,{item:l,handleDeleteList:h})}}),[d,r]),i=n.useMemo(()=>[{Header:"名稱",accessor:"name"},{Header:"區域",accessor:"area",width:80},{Header:"地址",accessor:"address"},{Header:"營業時間",accessor:"opening",width:80},{Header:"費率",accessor:"payex",maxWidth:250,width:200},{Header:"充電樁",accessor:"hasChargingStation",width:80},{Header:"即時空位",accessor:"availablecar",width:80},{Header:"總車位",accessor:"totalcar",width:80},{Header:"Action",accessor:"action",width:100}],[]);return c.length?e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx("h1",{children:"我的儲存"}),e.jsxs(ee,{children:[e.jsx(B,{$color:t,$view:o,onClick:g,children:e.jsx(a,{icon:"fa-solid fa-grip",style:P})}),e.jsx(B,{$color:t,$view:o,onClick:g,children:e.jsx(a,{icon:"fa-solid fa-list",style:P})})]})]}),e.jsxs(te,{children:[o&&e.jsx(z,{columns:i,data:c,handleDeleteList:h}),!o&&e.jsx(W,{columns:i,data:c})]})]}):e.jsx(K,{children:"目前沒有儲存資料"})}C.propTypes={item:p.object,handleDeleteList:p.func};export{$e as default};
