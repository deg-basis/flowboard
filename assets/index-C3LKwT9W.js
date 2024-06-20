import{r as m,P as p,y as e,z as Y,A as Q,B as X,C as Z,D as ee,E as x,N as te,L as j,F as re,n as se}from"./vendor-CbtkNxeW.js";import{T as S,B as E,I as ne,A as oe,S as ie,F as ae,a as q,D as le,b as C,c as ce,L as y,d as F,M as ue}from"./antd-DYljahcF.js";import"./index-C3LKwT9W.js";import"./rc-uLPitAEr.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();function Oe(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ee(t){if(t.__esModule)return t;var r=t.default;if(typeof r=="function"){var o=function n(){return this instanceof n?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};o.prototype=r.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var s=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(o,n,s.get?s:{enumerable:!0,get:function(){return t[n]}})}),o}const de=t=>{const o=t.split("").reverse().map(n=>String.fromCharCode(n.charCodeAt(0)^42)).join("");return btoa(o)},pe=t=>atob(t).split("").map(n=>String.fromCharCode(n.charCodeAt(0)^42)).reverse().join(""),D=m.createContext(),k=()=>m.useContext(D),z=({children:t})=>{const[r,o]=m.useState(""),[n,s]=m.useState(!0);m.useEffect(()=>{const c=localStorage.getItem("airtableToken");c&&o(pe(c)),s(!1)},[]);const i=c=>{const g=de(c);o(c),localStorage.setItem("airtableToken",g)};return e.jsx(D.Provider,{value:{airtableToken:r,updateAirtableToken:i,initializing:n},children:t})};z.propTypes={children:p.node.isRequired};const he=async(t,r,o)=>{const n=[];let s=null;do{const i=new URL(`https://api.airtable.com/v0/${r}/${o}`);s&&i.searchParams.append("offset",s);const c=await fetch(i.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!c.ok)throw new Error("Failed to fetch data from Airtable");const g=await c.json();n.push(...g.records),s=g.offset}while(s);return n},v=({text:t})=>e.jsx("span",{children:t});v.propTypes={text:p.string.isRequired};const P=({id:t,tableName:r})=>e.jsxs(S,{color:"orange",children:[r,": ",t]});P.propTypes={id:p.string.isRequired,tableName:p.string.isRequired};const B=({option:t})=>e.jsx(S,{color:"blue",children:t});B.propTypes={option:p.string.isRequired};const U=({options:t})=>e.jsx(e.Fragment,{children:t.map((r,o)=>e.jsx(S,{children:r},o))});U.propTypes={options:p.arrayOf(p.string).isRequired};const me=t=>e.jsx("span",{children:t?"Yes":"No"}),H=({url:t,label:r})=>e.jsx(E,{children:e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:r})});H.propTypes={url:p.string.isRequired,label:p.string.isRequired};const M=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});M.propTypes={url:p.string.isRequired};const _=({attachments:t})=>{const r=t==null?void 0:t[0];return e.jsx(ne,{src:r.url,alt:r.filename,width:"160px"})};_.propTypes={attachments:p.arrayOf(p.shape({url:p.string.isRequired,filename:p.string.isRequired})).isRequired};const fe=({type:t,value:r})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(P,{tableName:t[1],id:r}):"";switch(t){case"ignore":return"";case"URL":return e.jsx(M,{url:r});case"button":return e.jsx(H,{url:r==null?void 0:r.url,label:r==null?void 0:r.label});case"image":return e.jsx(_,{attachments:r});case"text":return e.jsx(v,{text:r});case"multilineText":return e.jsx(v,{text:r});case"singleSelect":return e.jsx(B,{option:r});case"multipleSelect":return e.jsx(U,{options:r});case"checkbox":return e.jsx(me,{checked:r});default:return console.error("Can't handle type {type} for",r),e.jsx("span",{children:"JSON.stringify(value) "})}},ge=t=>{const{onResize:r,width:o,...n}=t;return o?e.jsx(Y,{width:o,height:0,handle:e.jsx("span",{className:"react-resizable-handle",onClick:s=>{s.stopPropagation()}}),onResize:r,draggableOpts:{enableUserSelectHack:!1},children:e.jsx("th",{...n})}):e.jsx("th",{...n})},{Title:xe}=q,T={Companies:{Company:"text","Update Record":"button","Primary Contact":["record","People"],"Home Page":"URL",Tagline:"text",Crunchbase:"URL","Organization Type":"singleSelect",Headquarters:"text",Investor:"checkbox",Interests:"multipleSelect","BT Invest Status":"singleSelect","Portfolio Logo Permission":"checkbox","Logo URL":"URL",Logo:"image","Listed on BasisTech Website":"checkbox",Accelerator:"ignore","(legacy) Funnel":"ignore","To Company (for Fillout)":"ignore","Legacy Notes":"multilineText","Company notes":["record","Company notes"]}},be=()=>{const t="appuwUqhc3geVVy1v",r="Companies",{airtableToken:o}=k(),[n,s]=m.useState(null),[i,c]=m.useState(null),[g,w]=m.useState([]),[$,K]=m.useState({pagination:{current:1,pageSize:20}}),G=(h,l,a)=>{K({pagination:h,filters:l,...a})},V=h=>(l,{size:a})=>{const d=[...g];d[h]={...d[h],width:a.width},w(d)};if(m.useEffect(()=>{(async()=>{if(o)try{const l=await he(o,t,r);s(l)}catch(l){c(l.message)}})()},[o,t,r]),m.useEffect(()=>{if(n){const h=Object.keys(T[r]).filter(a=>T[r][a]!=="ignore").map(a=>{const d=T[r][a];return{title:a,dataIndex:["fields",a],key:a,sorter:J(d,a),render:f=>f?e.jsx(fe,{type:d,value:f}):()=>"",width:150}}),l=[{title:"ID",dataIndex:"id",key:"id",sorter:(a,d)=>a.id.localeCompare(d.id),render:a=>e.jsx(P,{tableName:"Companies",id:a}),width:100},...h];w(l)}},[n]),i)return e.jsx(oe,{message:"Error",description:i,type:"error",showIcon:!0});if(!n)return e.jsx(ie,{});const J=(h,l)=>{switch(Array.isArray(h)?h[0]:h){case"text":case"multilineText":case"URL":case"singleSelect":return(a,d)=>{const f=a.fields[l]||"",b=d.fields[l]||"";return f.localeCompare(b)};case"record":return(a,d)=>{var R,I;const f=((R=a.fields[l])==null?void 0:R[0])||"",b=((I=d.fields[l])==null?void 0:I[0])||"";return f.localeCompare(b)};case"checkbox":return(a,d)=>{const f=a.fields[l]?1:0,b=d.fields[l]?1:0;return f-b};case"button":case"image":default:return null}},W=g.map((h,l)=>({...h,onHeaderCell:a=>({width:a.width,onResize:V(l)})}));return e.jsxs("div",{children:[e.jsx(xe,{level:1,children:"Companies"}),e.jsx(ae,{components:{header:{cell:ge}},dataSource:n,columns:W,rowKey:"id",pagination:$.pagination,onChange:G})]})},je=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Events"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),ye=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Funnel"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),L="flowboard",u=t=>t?`/${L}/${t}`:`/${L}`,{Title:A}=q,Ce=()=>{const{airtableToken:t,updateAirtableToken:r}=k(),[o,n]=m.useState(""),s=Q();m.useEffect(()=>{n(t||"")},[t]);const i=()=>{r(o),s(u("funnel"))};return e.jsxs("div",{children:[e.jsx(A,{level:1,children:"Config"}),e.jsx(A,{level:3,children:"To obtain your Airtable API token, follow these steps:"}),e.jsx(Te,{}),e.jsx(le,{}),e.jsx(A,{level:3,children:"Enter token now:"}),e.jsxs(C,{layout:"vertical",initialValues:{token:t},onFinish:i,children:[e.jsx(C.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(ce,{value:o,onChange:c=>n(c.target.value),style:{width:"700px"}})}),e.jsx(C.Item,{children:e.jsx(E,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Te=()=>e.jsx("div",{children:e.jsx(y,{dataSource:[{title:"Log in to Airtable:",steps:["Go to Airtable and log in with your credentials."]},{title:"Navigate to the Developer Hub:",steps:["Click on your profile picture or initials in the top-right corner of the Airtable interface.","Select “Developer hub” from the dropdown menu."]},{title:"Generate a Personal Access Token:",steps:["In the Developer Hub, find the section for Personal Access Tokens.","Click on “Generate token” or a similar button.","Follow the prompts to create a new Personal Access Token, specifying the scopes and bases you want to grant access to.","Copy the generated token. This is your Personal Access Token."]},{title:"Save your token here:",steps:["Paste the token below.","Click “Save Token”.","Note that this will only save the token locally in your browser."]}],renderItem:t=>e.jsx(y.Item,{children:e.jsx(y.Item.Meta,{title:t.title,description:e.jsx(y,{dataSource:t.steps,renderItem:r=>e.jsx(y.Item,{children:r})})})})})}),Ae=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Help"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),{Header:ve,Content:Se}=F,ke=[{key:"companies",label:e.jsx(j,{to:u("companies"),children:"Companies"})},{key:"events",label:e.jsx(j,{to:u("events"),children:"Events"})},{key:"funnel",label:e.jsx(j,{to:u("funnel"),children:"Funnel"})},{key:"config",label:e.jsx(j,{to:u("config"),children:"Config"})},{key:"help",label:e.jsx(j,{to:u("help"),children:"Help"})}],N="config",O="companies",Pe=()=>{const{airtableToken:t,initializing:r}=k(),o=Z();if(r)return null;const n=u("").replace(/\/$/,""),i=o.pathname.replace(n,"").split("/")[1]||(t?O:N);return e.jsxs(F,{style:{height:"100vh"},children:[e.jsxs(ve,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:u("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(ue,{mode:"horizontal",selectedKeys:[i],items:ke})]}),e.jsx(Se,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(ee,{children:[e.jsx(x,{path:u(""),element:e.jsx(te,{to:u(t?O:N)})}),e.jsx(x,{path:u("companies"),element:e.jsx(be,{})}),e.jsx(x,{path:u("events"),element:e.jsx(je,{})}),e.jsx(x,{path:u("funnel"),element:e.jsx(ye,{})}),e.jsx(x,{path:u("config"),element:e.jsx(Ce,{})}),e.jsx(x,{path:u("help"),element:e.jsx(Ae,{})})]})})]})},we=()=>e.jsx(z,{children:e.jsx(X,{children:e.jsx(Pe,{})})});re.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(we,{})}));export{Ee as a,Oe as g};