import{r as g,T as v,j as e,L as f,s as t,P as n,l as z,A,u as L,M as P,d as E,m as I,f as p,n as S,h as U,i as W,b as B}from"./index-edea1a29.js";const m=t.button`
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
`,M=t.span`
  background: url(https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg)
    center center no-repeat;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 8px;
`;function u({isLoading:o,btnName:r,handleGoogleLogin:a}){const{theme:i}=g.useContext(v);return e.jsxs(e.Fragment,{children:[r==="使用 Google帳號登入"&&e.jsxs(m,{$color:i,$btnName:r,disabled:o,style:{background:"#fff",color:"#282a35",border:`1px solid ${i.border_main}`},onClick:a,children:[r==="使用 Google帳號登入"&&e.jsx(M,{}),!o&&r,o&&e.jsx(f,{})]}),r!=="使用 Google帳號登入"&&e.jsxs(m,{$color:i,$btnName:r,disabled:o,style:{background:i.background_active,color:i.font_active},children:[!o&&r,o&&e.jsx(f,{})]})]})}u.propTypes={isLoading:n.bool,btnName:n.string,handleGoogleLogin:n.func};const R=t.div`
  width: 90%;
  height: 72%;
  margin: 5vh auto;
  padding: 48px 29px;
  display: flex;
  flex-direction: column;
  ${P} {
    padding: 48px 48px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${o=>o.$color.border_main};
  }
`,D=t.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,H=t.form`
  flex-grow: 1;
`,Q=t.h1`
  font-size: 24px;
  margin-bottom: 12px;
`,Y=t.span`
  margin: 16px 0;
  text-align: center;
  position: relative;
  &::before,
  &::after {
    width: 45%;
    height: 1px;
    background: ${o=>o.$color.font_main};
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
`,x=t.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 8px;
  }
`,b=t.label`
  font-size: 16px;
`,$=t.input`
  border: 1px solid ${o=>o.$color.border_main};
  border-radius: 5px;
  font-size: 16px;
  padding: 12px;
  margin: 6px 0;
  background: ${o=>o.$color.background_secondary};
  color: ${o=>o.$color.font_main};
  &:focus {
    border: 1px solid ${o=>o.$color.font_main};
    outline: none;
  }
`,j=t(B)`
  text-decoration: none;
  color: ${o=>o.$color.background_active};
  font-size: 12px;
  &:hover {
    color: ${o=>o.$color.button_hover};
  }
`,q=t.div`
  border-radius: 5px;
  font-size: 12px;
  padding: 12px;
  background: ${o=>o.$color.background_error};
  color: ${o=>o.$color.font_secondary_blk};
`;function J({title:o,btnName:r,account:a,password:i,handleLogin:y,handleSignup:_,errorMessage:h,isLoading:k,setErrorMessage:l,setAccount:w,setPassword:C}){const{theme:c}=g.useContext(v),d=z(),{setUser:F}=g.useContext(A),G=L(),T=async()=>{E("event","login_google",{method:"Google"});try{await I(p,S),U.fire({title:"登入成功"}),W(p.currentUser.uid),F(p.currentUser.uid),G("/")}catch(s){l(s.message)}};return e.jsxs(R,{$color:c,children:[e.jsxs(D,{children:[e.jsx(Q,{children:o}),e.jsx(u,{btnName:"使用 Google帳號登入",handleGoogleLogin:T}),e.jsx(Y,{$color:c,children:"或"})]}),e.jsxs(H,{onSubmit:s=>{d.pathname==="/login"?y(s):_(s)},children:[e.jsxs(x,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(b,{children:"Email"}),d.pathname==="/login"&&e.jsx(j,{to:"/signup",$color:c,children:"註冊新帳號？"}),d.pathname==="/signup"&&e.jsx(j,{to:"/login",$color:c,children:"登入帳號？"})]}),e.jsx($,{type:"email",$color:c,value:a,onChange:s=>{w(s.target.value)},onFocus:()=>{l("")}})]}),e.jsxs(x,{children:[e.jsx(b,{children:"Password"}),e.jsx($,{type:"password",$color:c,value:i,onChange:s=>{C(s.target.value)},onFocus:()=>{l("")}})]}),e.jsxs(x,{children:[e.jsx(u,{isLoading:k,btnName:r}),h&&e.jsx(q,{$color:c,children:h})]})]})]})}J.propTypes={title:n.string,btnName:n.string,account:n.string,password:n.string,handleLogin:n.func,handleSignup:n.func,errorMessage:n.string,isLoading:n.bool,setErrorMessage:n.func,setAccount:n.func,setPassword:n.func,handleGoogleLogin:n.func};export{J as F};
