import{r as i,g as S,j as e,L as I}from"./react-b7acef7a.js";import{F as a,s as r}from"./vendor-9071635d.js";import{T as u,P as E,L as F,a as M,w as R,M as V,g as G}from"./index-81d00f9c.js";import{P as p}from"./google-6ac6e1d4.js";import"./fortawesome-4f418b12.js";const w={marginLeft:"6px"};function W({columns:t,data:d}){const{theme:o}=i.useContext(u),{getTableProps:x,getTableBodyProps:s,headerGroups:y,rows:g,prepareRow:h}=S.useTable({columns:t,data:d},S.useSortBy);return e.jsxs("table",{...x(),style:{width:"100%",color:o.font_main,borderCollapse:"collapse"},children:[e.jsx("thead",{children:y.map(c=>e.jsx("tr",{...c.getHeaderGroupProps(),style:{height:"50px"},children:c.headers.map(n=>e.jsxs("th",{...n.getHeaderProps(n.getSortByToggleProps()),style:{background:o.background_hover,fontWeight:"bold",fontSize:"16px",cursor:"pointer",manWidth:n.maxWidth,width:n.width},children:[n.render("Header"),n.Header!=="Action"&&n.Header!=="費率"&&e.jsx("span",{children:n.isSorted?n.isSortedDesc?e.jsx(a,{icon:"fa-solid fa-sort-down",style:w}):e.jsx(a,{icon:"fa-solid fa-sort-up",style:w}):e.jsx(a,{icon:"fa-solid fa-sort",style:w})})]}))}))}),e.jsx("tbody",{...s(),children:g.map(c=>(h(c),e.jsx("tr",{...c.getRowProps(),style:{borderBottom:`1px solid ${o.background_secondary}`},children:c.cells.map(n=>e.jsx("td",{...n.getCellProps(),style:{padding:"10px",fontSize:n.column.Header==="Action"?"16px":"12px",textAlign:n.column.Header==="名稱"||n.column.Header==="地址"||n.column.Header==="費率"?"left":"center"},children:n.render("Cell")}))})))})]})}W.propTypes={columns:p.array,data:p.array};const N=r.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
  justify-items: center;
  color: ${t=>t.$color.font_card_secondary};
`,O=r.div`
  border: 1.5px solid rgba(17, 117, 119, 0.5);
  border-radius: 8px;
  width: 320px;
  height: 370px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`,Q=r.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  color: ${t=>t.$color.font_active};
`,$=r.div`
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
`,b=r.p`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 12px;
  top: 2px;
  left: 3px;
  color: ${t=>t.$color.font_secondary_blk};
`,U=r.h1``,Y=r.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`,f=r.div`
  & + & {
    margin-top: 8px;
  }
  :last-child {
    display: flex;
    justify-content: end;
  }
`,q=r.h1`
  font-size: 20px;
  line-height: 1.1;
`,j=r.p`
  font-size: 12px;
  margin-top: 2px;
  color: ${t=>t.$color.font_card_main};
`,m=r.h2`
  font-size: 16px;
`,H=r(I)`
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
`,A=r.span`
  margin-right: 8px;
`,T={width:"28px",height:"28px"},L={width:"18px",height:"18px"},J=r.div`
  max-height: 70px;
  overflow-y: scroll;
`;function z({data:t,handleDeleteList:d}){const{theme:o}=i.useContext(u),{isLoading:x}=i.useContext(E);return e.jsx(N,{$color:o,children:t.map(s=>e.jsxs(O,{children:[e.jsxs(Q,{$color:o,children:[e.jsxs($,{style:{flexGrow:1,background:s.availablecar!=="已滿"?"#04AA6D":"#AFABAB"},children:[e.jsx(b,{$color:o,children:"即時空位 / 總車位"}),x&&e.jsx(F,{}),!x&&e.jsxs(U,{children:[s.availablecar," / ",s.totalcar]})]}),s.hasChargingStation==="有"&&e.jsxs($,{style:{background:"#E67E22"},children:[e.jsx(b,{$color:o,children:"提供充電樁"}),e.jsx(a,{icon:"fa-solid fa-circle-check",style:T})]}),s.hasChargingStation==="無"&&e.jsxs($,{style:{background:"#AFABAB"},children:[e.jsx(b,{$color:o,children:"提供充電樁"}),e.jsx(a,{icon:"fa-solid fa-circle-xmark",style:T})]})]}),e.jsxs(Y,{children:[e.jsxs(f,{children:[e.jsx(q,{children:s.name}),e.jsx(j,{$color:o,children:s.address})]}),e.jsxs(f,{children:[e.jsx(m,{children:"區域"}),e.jsx(j,{$color:o,children:s.area})]}),e.jsxs(f,{children:[e.jsx(m,{children:"費率"}),e.jsx(J,{children:e.jsx(j,{$color:o,children:s.payex})})]}),e.jsxs(f,{children:[e.jsx(m,{children:"營業時間"}),e.jsx(j,{$color:o,children:s.opening})]}),e.jsxs(f,{children:[e.jsxs(H,{to:`https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}&travelmode=driving`,target:"_blank",$color:o,children:[e.jsx(A,{children:"路線"}),e.jsx(a,{icon:"fa-regular fa-compass",style:L})]}),e.jsxs(H,{to:"#",$color:o,onClick:()=>d(s.id),children:[e.jsx(A,{children:"刪除"}),e.jsx(a,{icon:"fa-solid fa-trash-can",style:L})]})]})]})]},s.id))})}z.propTypes={data:p.array,handleDeleteList:p.func};const K=r.h2`
  margin: 66px 0;
  text-align: center;
`,X=r.div`
  width: 100%;
  padding: 16px;
`,Z=r.div``,ee=r.div`
  display: flex;
  justify-content: end;
  margin-top: 8px;
  visibility: hidden;
  ${V} {
    visibility: visible;
  }
`,B=r.div`
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
`,te=r.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,D=r(I)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${t=>t.$color.font_main};
  width: 30px;
  height: 30px;
`,P={width:"30px",height:"30px"};function C({item:t,handleDeleteList:d}){const{theme:o}=i.useContext(u);return e.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[e.jsx(D,{to:`https://www.google.com/maps/dir/?api=1&destination=${t.lat},${t.lng}&travelmode=driving`,target:"_blank",$color:o,children:e.jsx(a,{icon:"fa-regular fa-compass"})}),e.jsx(D,{to:"#",$color:o,onClick:()=>d(t.id),children:e.jsx(a,{icon:"fa-solid fa-trash-can"})})]})}function ae(){const{theme:t}=i.useContext(u),{sortData:d}=i.useContext(E),[o,x]=i.useState(!0),[s,y]=i.useState(()=>M()||[]);i.useEffect(()=>{R(s)},[s]);const g=()=>{x(!o),G("event","switch_save_view",{content_type:"switchSaveView"})},h=k=>{y(s.filter(l=>l.id!==k))},c=i.useMemo(()=>s.map(l=>{const _=d.find(v=>v.id===l.id);if(_){const{availablecar:v}=_;return{...l,availablecar:v,action:e.jsx(C,{item:l,handleDeleteList:h})}}else return{...l,availablecar:"已滿",action:e.jsx(C,{item:l,handleDeleteList:h})}}),[d,s]),n=i.useMemo(()=>[{Header:"名稱",accessor:"name"},{Header:"區域",accessor:"area",width:80},{Header:"地址",accessor:"address"},{Header:"營業時間",accessor:"opening",width:80},{Header:"費率",accessor:"payex",maxWidth:250,width:200},{Header:"充電樁",accessor:"hasChargingStation",width:80},{Header:"即時空位",accessor:"availablecar",width:80},{Header:"總車位",accessor:"totalcar",width:80},{Header:"Action",accessor:"action",width:100}],[]);return c.length?e.jsxs(X,{children:[e.jsxs(Z,{children:[e.jsx("h1",{children:"我的儲存"}),e.jsxs(ee,{children:[e.jsx(B,{$color:t,$view:o,onClick:g,children:e.jsx(a,{icon:"fa-solid fa-grip",style:P})}),e.jsx(B,{$color:t,$view:o,onClick:g,children:e.jsx(a,{icon:"fa-solid fa-list",style:P})})]})]}),e.jsxs(te,{children:[o&&e.jsx(z,{columns:n,data:c,handleDeleteList:h}),!o&&e.jsx(W,{columns:n,data:c})]})]}):e.jsx(K,{children:"目前沒有儲存資料"})}C.propTypes={item:p.object,handleDeleteList:p.func};export{ae as default};
