import{r as t,A as h,u as x,j as n,s as f,M as S,b as A,o as E,l as s,m as w,n as U}from"./index-93e077a3.js";import{F as j}from"./Form-8aa48763.js";const v=f.div`
  ${S} {
    width: 478px;
    margin: 0 auto;
  }
`;function P(){const[e,i]=t.useState(""),[a,u]=t.useState(""),[c,r]=t.useState(""),[g,o]=t.useState(!1),{setUser:d}=t.useContext(h),m=x(),l=async M=>{o(!0),A("event","sign_up",{method:"Google"});try{await E(s,e,a),w.fire({title:"註冊成功"}),U(s.currentUser.uid),d(s.currentUser.uid),m("/")}catch(p){r(p.message),o(!1)}};return n.jsx(v,{children:n.jsx(j,{title:"Sign up",btnName:"註冊",account:e,password:a,setAccount:i,setPassword:u,handleSignup:l,errorMessage:c,setErrorMessage:r,isLoading:g})})}export{P as default};
