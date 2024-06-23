import{r as f,P as a,y as e,z as Y,B as Q,A as X,C as Z,D as y,N as ee,L as b,E as te,n as re}from"./vendor-D2wNKSuj.js";import{T as L,B as U,I as se,A as ne,S as oe,F as ie,a as $,D as ae,b as P,c as le,L as S,d as z,M as ce}from"./antd-B9fBCYCS.js";import"./index-DAHxbhK5.js";import"./rc-DnaRffWp.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const g of n.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();function De(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const ue=async(t,r,o)=>{const l=[];let s=null;do{const n=new URL(`https://api.airtable.com/v0/${r}/${o}`);s&&n.searchParams.append("offset",s);const g=await fetch(n.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!g.ok)throw new Error("Failed to fetch data from Airtable");const m=await g.json();l.push(...m.records),s=m.offset}while(s);return l},de=t=>{const o=t.split("").reverse().map(l=>String.fromCharCode(l.charCodeAt(0)^42)).join("");return btoa(o)},pe=t=>atob(t).split("").map(l=>String.fromCharCode(l.charCodeAt(0)^42)).reverse().join(""),H=f.createContext(),k=()=>f.useContext(H),M=({children:t})=>{const r="appuwUqhc3geVVy1v",[o,l]=f.useState(""),[s,n]=f.useState({}),[g,m]=f.useState(!0),p={};f.useEffect(()=>{const c=localStorage.getItem("airtableToken");c&&l(pe(c)),m(!1)},[]);const x=c=>{const i=de(c);l(c),localStorage.setItem("airtableToken",i)},T=async({tableName:c,setError:i,cachedOk:h=!0})=>{if(h&&s[c])return s[c];if(p[c])return p[c];if(o)try{return console.log("Fetching",c),p[c]=ue(o,r,c).then(u=>(n(j=>({...j,[c]:u})),delete p[c],u)).catch(u=>{throw i(u.message),delete p[c],u}),p[c]}catch(u){i(u.message)}else i("Missing Airtable access token")};return e.jsx(H.Provider,{value:{airtableToken:o,updateAirtableToken:x,baseId:r,initializing:g,getTable:T},children:t})};M.propTypes={children:a.node.isRequired};const R=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});R.propTypes={text:a.oneOfType([a.string,a.arrayOf(a.string)]).isRequired};const D=({id:t,tableName:r})=>{const{getTable:o}=k(),[l,s]=f.useState(null),[n,g]=f.useState([]);if(f.useEffect(()=>{(async()=>{await o({tableName:r,setError:s}),g(await o({tableName:r,setError:s}))})()},[o,r]),!n.length)return"";const m=({id:p})=>{const x=n.find(T=>T.id===p);return e.jsx(L,{color:"orange",children:(x==null?void 0:x.fields.Name)||(x==null?void 0:x.fields["Record Key"])||(x==null?void 0:x.fields.Company)||p})};return Array.isArray(t)?t.map(p=>e.jsx(m,{id:p},p)):e.jsx(m,{id:t})};D.propTypes={id:a.oneOfType([a.string,a.arrayOf(a.string)]).isRequired,tableName:a.string.isRequired};const N=({option:t})=>e.jsx(L,{color:"blue",children:t});N.propTypes={option:a.string.isRequired};const K=({options:t})=>e.jsx(e.Fragment,{children:t.map((r,o)=>e.jsx(L,{children:r},o))});K.propTypes={options:a.arrayOf(a.string).isRequired};const he=t=>e.jsx("span",{children:t?"Yes":"No"}),V=({url:t,label:r})=>e.jsx(U,{children:e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:r})});V.propTypes={url:a.string.isRequired,label:a.string.isRequired};const _=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});_.propTypes={email:a.string.isRequired};const G=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});G.propTypes={url:a.string.isRequired};const J=({date:t})=>{const r=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:r})};J.propTypes={date:a.string.isRequired};const W=({attachments:t})=>{const r=t==null?void 0:t[0];return e.jsx(se,{src:r.url,alt:r.filename,width:"160px"})};W.propTypes={attachments:a.arrayOf(a.shape({url:a.string.isRequired,filename:a.string.isRequired})).isRequired};const fe=({type:t,value:r})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(D,{tableName:t[1],id:r}):"";switch(t){case"ignore":return"";case"URL":return e.jsx(G,{url:r});case"email":return e.jsx(_,{email:r});case"button":return e.jsx(V,{url:r==null?void 0:r.url,label:r==null?void 0:r.label});case"date":return e.jsx(J,{date:r});case"image":return e.jsx(W,{attachments:r});case"text":return e.jsx(R,{text:r});case"multilineText":return e.jsx(R,{text:r});case"singleSelect":return e.jsx(N,{option:r});case"multipleSelect":return e.jsx(K,{options:r});case"checkbox":return e.jsx(he,{checked:r});default:return console.error("Can't handle type {type} for",r),e.jsxs("span",{children:[JSON.stringify(r)," "]})}},{Title:ge}=$,w={People:{"First Name":"text","Last Name":"text",Email:"email",Companies:["record","Companies"],Role:"text",Tags:"multipleSelect",LinkedIn:"URL",Crunchbase:"URL"},Companies:{Company:"text","Update Record":"button","Primary Contact":["record","People"],"Home Page":"URL",Tagline:"text",Crunchbase:"URL","Organization Type":"singleSelect",Headquarters:"text",Investor:"checkbox",Interests:"multipleSelect","BT Invest Status":"singleSelect","Portfolio Logo Permission":"checkbox","Logo URL":"URL",Logo:"image","Listed on BasisTech Website":"checkbox",Accelerator:"ignore","(legacy) Funnel":"ignore","To Company (for Fillout)":"ignore","Legacy Notes":"multilineText","Company notes":["record","Company notes"]},Events:{Name:"text",Date:"date",Description:"multilineText",Status:"singleSelect",Speakers:["record","People"]}},E=({tableName:t})=>{const{getTable:r}=k(),[o,l]=f.useState(null),[s,n]=f.useState(null),[g,m]=f.useState({pagination:{current:1,pageSize:20}}),p=(i,h,u)=>{m({pagination:i,filters:h,...u})};if(f.useEffect(()=>{(async()=>{l(await r({tableName:t,setError:n}))})()},[r,t]),s)return e.jsx(ne,{message:"Error",description:s,type:"error",showIcon:!0});if(!o)return e.jsx(oe,{});const x=(i,h)=>{switch(Array.isArray(i)?i[0]:i){case"text":case"multilineText":case"URL":case"singleSelect":return(u,j)=>{const A=u.fields[h]||"",C=j.fields[h]||"";return A.localeCompare(C)};case"record":return(u,j)=>{var O,q;const A=((O=u.fields[h])==null?void 0:O[0])||"",C=((q=j.fields[h])==null?void 0:q[0])||"";return A.localeCompare(C)};case"checkbox":return(u,j)=>{const A=u.fields[h]?1:0,C=j.fields[h]?1:0;return A-C};case"button":case"image":default:return null}},T=Object.keys(w[t]).filter(i=>w[t][i]!=="ignore").map(i=>{const h=w[t][i];return{title:i,dataIndex:["fields",i],key:i,sorter:x(h,i),render:u=>u?e.jsx(fe,{type:h,value:u}):()=>""}}),c=[{title:"ID",dataIndex:"id",key:"id",sorter:(i,h)=>i.id.localeCompare(h.id),render:i=>e.jsx(D,{tableName:t,id:i})},...T];return e.jsxs("div",{children:[e.jsx(ge,{level:1,children:t}),e.jsx(ie,{dataSource:o,columns:c,rowKey:"id",pagination:g.pagination,onChange:p})]})},xe=()=>e.jsx(E,{tableName:"People"}),me=()=>e.jsx(E,{tableName:"Companies"}),je=()=>e.jsx(E,{tableName:"Events"}),ye=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Funnel"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),F="flowboard",d=t=>t?`/${F}/${t}`:`/${F}`,{Title:v}=$,B="config",I="companies",be=()=>{const{airtableToken:t,updateAirtableToken:r}=k(),[o,l]=f.useState(""),s=Y();f.useEffect(()=>{l(t||"")},[t]);const n=()=>{r(o),s(d(I))};return e.jsxs("div",{children:[e.jsx(v,{level:1,children:"Config"}),e.jsx(v,{level:3,children:"To obtain your Airtable API token, follow these steps:"}),e.jsx(Te,{}),e.jsx(ae,{}),e.jsx(v,{level:3,children:"Enter token now:"}),e.jsxs(P,{layout:"vertical",initialValues:{token:t},onFinish:n,children:[e.jsx(P.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(le,{value:o,onChange:g=>l(g.target.value),style:{width:"700px"}})}),e.jsx(P.Item,{children:e.jsx(U,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Te=()=>e.jsx("div",{children:e.jsx(S,{dataSource:[{title:"Log in to Airtable:",steps:["Go to Airtable and log in with your credentials."]},{title:"Navigate to the Developer Hub:",steps:["Click on your profile picture or initials in the top-right corner of the Airtable interface.","Select “Developer hub” from the dropdown menu."]},{title:"Generate a Personal Access Token:",steps:["In the Developer Hub, find the section for Personal Access Tokens.","Click on “Generate token” or a similar button.","Follow the prompts to create a new Personal Access Token, specifying the scopes and bases you want to grant access to.","Copy the generated token. This is your Personal Access Token."]},{title:"Save your token here:",steps:["Paste the token below.","Click “Save Token”.","Note that this will only save the token locally in your browser."]}],renderItem:t=>e.jsx(S.Item,{children:e.jsx(S.Item.Meta,{title:t.title,description:e.jsx(S,{dataSource:t.steps,renderItem:r=>e.jsx(S.Item,{children:r})})})})})}),Ae=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Help"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),{Header:Ce,Content:Se}=z,ke=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(b,{to:d("people"),children:"People"})},{key:"companies",label:e.jsx(b,{to:d("companies"),children:"Companies"})},{key:"events",label:e.jsx(b,{to:d("events"),children:"Events"})}]},{key:"funnel",label:e.jsx(b,{to:d("funnel"),children:"Funnel"})},{key:"config",label:e.jsx(b,{to:d("config"),children:"Config"})},{key:"help",label:e.jsx(b,{to:d("help"),children:"Help"})}],Pe=()=>{const{airtableToken:t,initializing:r}=k(),o=X();if(r)return null;const l=d("").replace(/\/$/,""),n=o.pathname.replace(l,"").split("/")[1]||(t?I:B);return e.jsxs(z,{style:{height:"100vh"},children:[e.jsxs(Ce,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:d("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(ce,{mode:"horizontal",selectedKeys:[n],items:ke})]}),e.jsx(Se,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(Z,{children:[e.jsx(y,{path:d(""),element:e.jsx(ee,{to:d(t?I:B)})}),e.jsx(y,{path:d("people"),element:e.jsx(xe,{})}),e.jsx(y,{path:d("companies"),element:e.jsx(me,{})}),e.jsx(y,{path:d("events"),element:e.jsx(je,{})}),e.jsx(y,{path:d("funnel"),element:e.jsx(ye,{})}),e.jsx(y,{path:d("config"),element:e.jsx(be,{})}),e.jsx(y,{path:d("help"),element:e.jsx(Ae,{})})]})})]})},we=()=>e.jsx(M,{children:e.jsx(Q,{children:e.jsx(Pe,{})})});te.createRoot(document.getElementById("root")).render(e.jsx(re.StrictMode,{children:e.jsx(we,{})}));export{De as g};
