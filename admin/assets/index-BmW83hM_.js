var l=(s,t,a)=>new Promise((i,c)=>{var u=o=>{try{e(a.next(o))}catch(r){c(r)}},d=o=>{try{e(a.throw(o))}catch(r){c(r)}},e=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,d);e((a=a.apply(s,t)).next())});import{bt as p,av as m,r as h,ay as x,j as n,aE as b,aB as f,aD as j}from"./index-C5vFwAKH.js";import{d as y}from"./index-DEQYda0D.js";const v=()=>{const s=p(a=>a.app.locale),{t}=m();return h.useEffect(()=>{y().then(a=>{console.log(a)})},[]),x(()=>l(void 0,null,function*(){j("Page Dashboard mount...")})),n.jsxs("div",{children:[n.jsx(b,{to:"/about",children:"about"}),t("title",{ns:"common"}),n.jsx(f,{type:"primary",children:s})]})};export{v as default};