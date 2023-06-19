import{r as t,h,j as n}from"./react-b7acef7a.js";import{A as f,M as x,g as A,b as s,d as E,s as w}from"./index-81d00f9c.js";import{F as L}from"./Form-d225da22.js";import{s as j,b as v}from"./vendor-9071635d.js";import"./google-6ac6e1d4.js";import"./fortawesome-4f418b12.js";const M=j.div`
  ${x} {
    width: 478px;
    margin: 0 auto;
  }
`;function P(){const[e,i]=t.useState(""),[a,u]=t.useState(""),[c,o]=t.useState(""),[g,r]=t.useState(!1),{setUser:m}=t.useContext(f),d=h(),l=async()=>{r(!0),A("event","login_email",{method:"Google"});try{await v(s,e,a),E.fire({title:"登入成功"}),w(s.currentUser.uid),m(s.currentUser.uid),d("/")}catch(p){o(p.message),r(!1)}};return n.jsx(M,{children:n.jsx(L,{title:"Log in",btnName:"登入",account:e,password:a,setAccount:i,setPassword:u,handleLogin:l,errorMessage:c,setErrorMessage:o,isLoading:g})})}export{P as default};
