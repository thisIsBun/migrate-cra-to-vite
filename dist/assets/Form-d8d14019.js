import{r as g,j as e}from"./react-a6e30971.js";import{s as r}from"./styled-components-426a60f6.js";import{T as v,L as f,A as z,M as A,g as L,b as p,e as P,d as E,s as I}from"./index-e2fcd8e6.js";import{P as n}from"./prop-types-45996e4d.js";import{L as S}from"./react-router-dom-664f3995.js";import{a as U}from"./@firebase-40e41277.js";import{b as W,a as B}from"./react-router-e66c8262.js";const m=r.button`
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
`,M=r.span`
  background: url(https://accounts.scdn.co/sso/images/google-icon.1cdc8fce9609d07f0e9d8d0bc4b61f8f.svg)
    center center no-repeat;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 8px;
`;function u({isLoading:o,btnName:t,handleGoogleLogin:c}){const{theme:i}=g.useContext(v);return e.jsxs(e.Fragment,{children:[t==="使用 Google帳號登入"&&e.jsxs(m,{$color:i,$btnName:t,disabled:o,style:{background:"#fff",color:"#282a35",border:`1px solid ${i.border_main}`},onClick:c,children:[t==="使用 Google帳號登入"&&e.jsx(M,{}),!o&&t,o&&e.jsx(f,{})]}),t!=="使用 Google帳號登入"&&e.jsxs(m,{$color:i,$btnName:t,disabled:o,style:{background:i.background_active,color:i.font_active},children:[!o&&t,o&&e.jsx(f,{})]})]})}u.propTypes={isLoading:n.bool,btnName:n.string,handleGoogleLogin:n.func};const R=r.div`
  width: 90%;
  height: 72%;
  margin: 5vh auto;
  padding: 48px 29px;
  display: flex;
  flex-direction: column;
  ${A} {
    padding: 48px 48px;
    width: 100%;
    border-radius: 12px;
    border: 1px solid ${o=>o.$color.border_main};
  }
`,D=r.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,H=r.form`
  flex-grow: 1;
`,Q=r.h1`
  font-size: 24px;
  margin-bottom: 12px;
`,Y=r.span`
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
`,x=r.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 8px;
  }
`,b=r.label`
  font-size: 16px;
`,$=r.input`
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
`,j=r(S)`
  text-decoration: none;
  color: ${o=>o.$color.background_active};
  font-size: 12px;
  &:hover {
    color: ${o=>o.$color.button_hover};
  }
`,q=r.div`
  border-radius: 5px;
  font-size: 12px;
  padding: 12px;
  background: ${o=>o.$color.background_error};
  color: ${o=>o.$color.font_secondary_blk};
`;function J({title:o,btnName:t,account:c,password:i,handleLogin:y,handleSignup:_,errorMessage:h,isLoading:k,setErrorMessage:l,setAccount:w,setPassword:C}){const{theme:a}=g.useContext(v),d=W(),{setUser:F}=g.useContext(z),G=B(),T=async()=>{L("event","login_google",{method:"Google"});try{await U(p,P),E.fire({title:"登入成功"}),I(p.currentUser.uid),F(p.currentUser.uid),G("/")}catch(s){l(s.message)}};return e.jsxs(R,{$color:a,children:[e.jsxs(D,{children:[e.jsx(Q,{children:o}),e.jsx(u,{btnName:"使用 Google帳號登入",handleGoogleLogin:T}),e.jsx(Y,{$color:a,children:"或"})]}),e.jsxs(H,{onSubmit:s=>{d.pathname==="/login"?y(s):_(s)},children:[e.jsxs(x,{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(b,{children:"Email"}),d.pathname==="/login"&&e.jsx(j,{to:"/signup",$color:a,children:"註冊新帳號？"}),d.pathname==="/signup"&&e.jsx(j,{to:"/login",$color:a,children:"登入帳號？"})]}),e.jsx($,{type:"email",$color:a,value:c,onChange:s=>{w(s.target.value)},onFocus:()=>{l("")}})]}),e.jsxs(x,{children:[e.jsx(b,{children:"Password"}),e.jsx($,{type:"password",$color:a,value:i,onChange:s=>{C(s.target.value)},onFocus:()=>{l("")}})]}),e.jsxs(x,{children:[e.jsx(u,{isLoading:k,btnName:t}),h&&e.jsx(q,{$color:a,children:h})]})]})]})}J.propTypes={title:n.string,btnName:n.string,account:n.string,password:n.string,handleLogin:n.func,handleSignup:n.func,errorMessage:n.string,isLoading:n.bool,setErrorMessage:n.func,setAccount:n.func,setPassword:n.func,handleGoogleLogin:n.func};export{J as F};
