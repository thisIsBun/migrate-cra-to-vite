import{r as t,A as l,u as x,j as n,s as f,M as S,d as A,k as E,f as s,h as w,i as U}from"./index-edea1a29.js";import{F as j}from"./Form-c85d5211.js";const v=f.div`
  ${S} {
    width: 478px;
    margin: 0 auto;
  }
`;function P(){const[e,i]=t.useState(""),[a,u]=t.useState(""),[c,r]=t.useState(""),[d,o]=t.useState(!1),{setUser:g}=t.useContext(l),m=x(),p=async M=>{o(!0),A("event","sign_up",{method:"Google"});try{await E(s,e,a),w.fire({title:"註冊成功"}),U(s.currentUser.uid),g(s.currentUser.uid),m("/")}catch(h){r(h.message),o(!1)}};return n.jsx(v,{children:n.jsx(j,{title:"Sign up",btnName:"註冊",account:e,password:a,setAccount:i,setPassword:u,handleSignup:p,errorMessage:c,setErrorMessage:r,isLoading:d})})}export{P as default};
