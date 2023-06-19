import{r as t,h as l,j as n}from"./react-b7acef7a.js";import{F as f}from"./Form-d225da22.js";import{s as x,c as S}from"./vendor-9071635d.js";import{A,M as E,g as w,b as s,d as U,s as j}from"./index-81d00f9c.js";import"./google-6ac6e1d4.js";import"./fortawesome-4f418b12.js";const v=x.div`
  ${E} {
    width: 478px;
    margin: 0 auto;
  }
`;function L(){const[e,i]=t.useState(""),[a,u]=t.useState(""),[c,r]=t.useState(""),[g,o]=t.useState(!1),{setUser:m}=t.useContext(A),d=l(),p=async M=>{o(!0),w("event","sign_up",{method:"Google"});try{await S(s,e,a),U.fire({title:"註冊成功"}),j(s.currentUser.uid),m(s.currentUser.uid),d("/")}catch(h){r(h.message),o(!1)}};return n.jsx(v,{children:n.jsx(f,{title:"Sign up",btnName:"註冊",account:e,password:a,setAccount:i,setPassword:u,handleSignup:p,errorMessage:c,setErrorMessage:r,isLoading:g})})}export{L as default};
