import{r as t,A as x,u as f,j as r,s as p,M as A,d as E,e as w,f as s,h as L,i as j}from"./index-edea1a29.js";import{F as v}from"./Form-c85d5211.js";const M=p.div`
  ${A} {
    width: 478px;
    margin: 0 auto;
  }
`;function y(){const[e,i]=t.useState(""),[a,u]=t.useState(""),[c,o]=t.useState(""),[g,n]=t.useState(!1),{setUser:d}=t.useContext(x),l=f(),m=async()=>{n(!0),E("event","login_email",{method:"Google"});try{await w(s,e,a),L.fire({title:"登入成功"}),j(s.currentUser.uid),d(s.currentUser.uid),l("/")}catch(h){o(h.message),n(!1)}};return r.jsx(M,{children:r.jsx(v,{title:"Log in",btnName:"登入",account:e,password:a,setAccount:i,setPassword:u,handleLogin:m,errorMessage:c,setErrorMessage:o,isLoading:g})})}export{y as default};
