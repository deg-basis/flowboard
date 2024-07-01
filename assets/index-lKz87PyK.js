import{r as g,P as a,F as e,G as J,M as Y,H as Q,I as X,J as Z,K as ee,L as y,N as te,O as j,Q as re,t as se}from"./vendor-CGGAFB3O.js";import{T as R,B,I as oe,A as ne,S as ie,F as ae,a as U,D as le,b as C,c as ce,L as M,M as de}from"./antd-Cut6iIFl.js";import"./index-lKz87PyK.js";import"./rc-DKKzPpzv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Be(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const ue=async(t,r,i)=>{const l=[];let s=null;do{const o=new URL(`https://api.airtable.com/v0/${r}/${i}`);s&&o.searchParams.append("offset",s);const m=await fetch(o.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!m.ok)throw new Error("Failed to fetch data from Airtable");const x=await m.json();l.push(...x.records),s=x.offset}while(s);return l},pe=t=>{const i=t.split("").reverse().map(l=>String.fromCharCode(l.charCodeAt(0)^42)).join("");return btoa(i)},he=t=>atob(t).split("").map(l=>String.fromCharCode(l.charCodeAt(0)^42)).reverse().join(""),z=g.createContext(),k=()=>g.useContext(z),$=({children:t})=>{const r="appuwUqhc3geVVy1v",[i,l]=g.useState(""),[s,o]=g.useState({}),[m,x]=g.useState(!0),p={};g.useEffect(()=>{const c=localStorage.getItem("airtableToken");c&&l(he(c)),x(!1)},[]);const h=c=>{const n=pe(c);l(c),localStorage.setItem("airtableToken",n)},T=async({tableName:c,setError:n,cachedOk:f=!0})=>{if(f&&s[c])return s[c];if(p[c])return p[c];if(i)try{return console.log("Fetching",c),p[c]=ue(i,r,c).then(d=>(o(b=>({...b,[c]:d})),delete p[c],d)).catch(d=>{throw n(d.message),delete p[c],d}),p[c]}catch(d){n(d.message)}else n("Missing Airtable access token")};return e.jsx(z.Provider,{value:{airtableToken:i,updateAirtableToken:h,baseId:r,initializing:m,getTable:T},children:t})};$.propTypes={children:a.node.isRequired};const P=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});P.propTypes={text:a.oneOfType([a.string,a.arrayOf(a.string)]).isRequired};const L=({id:t,tableName:r})=>{const{getTable:i}=k(),[l,s]=g.useState(null),[o,m]=g.useState([]);if(g.useEffect(()=>{(async()=>{const h=await i({tableName:r,setError:s});m(h)})()},[i,r]),!o.length)return"";const x=({id:p})=>{const h=o.find(T=>T.id===p);return e.jsx(R,{color:"orange",children:(h==null?void 0:h.fields.Name)||(h==null?void 0:h.fields["Record Key"])||(h==null?void 0:h.fields.Company)||p})};return Array.isArray(t)?t.map(p=>e.jsx(x,{id:p},p)):e.jsx(x,{id:t})};L.propTypes={id:a.oneOfType([a.string,a.arrayOf(a.string)]).isRequired,tableName:a.string.isRequired};const N=({option:t})=>e.jsx(R,{color:"blue",children:t});N.propTypes={option:a.string.isRequired};const H=({options:t})=>e.jsx(e.Fragment,{children:t.map((r,i)=>e.jsx(R,{children:r},i))});H.propTypes={options:a.arrayOf(a.string).isRequired};const fe=t=>e.jsx("span",{children:t?"Yes":"No"}),G=({url:t,label:r})=>e.jsx(B,{children:e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:r})});G.propTypes={url:a.string.isRequired,label:a.string.isRequired};const V=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});V.propTypes={email:a.string.isRequired};const W=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});W.propTypes={url:a.string.isRequired};const K=({date:t})=>{const r=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:r})};K.propTypes={date:a.string.isRequired};const _=({attachments:t})=>{const r=t==null?void 0:t[0];return e.jsx(oe,{src:r.url,alt:r.filename,width:"160px"})};_.propTypes={attachments:a.arrayOf(a.shape({url:a.string.isRequired,filename:a.string.isRequired})).isRequired};const ge=({type:t,value:r})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(L,{tableName:t[1],id:r}):"";switch(t){case"ignore":return"";case"URL":return e.jsx(W,{url:r});case"email":return e.jsx(V,{email:r});case"button":return e.jsx(G,{url:r==null?void 0:r.url,label:r==null?void 0:r.label});case"date":return e.jsx(K,{date:r});case"image":return e.jsx(_,{attachments:r});case"text":return e.jsx(P,{text:r});case"multilineText":return e.jsx(P,{text:r});case"singleSelect":return e.jsx(N,{option:r});case"multipleSelect":return e.jsx(H,{options:r});case"checkbox":return e.jsx(fe,{checked:r});default:return console.error("Can't handle type {type} for",r),e.jsxs("span",{children:[JSON.stringify(r)," "]})}},{Title:me}=U,S={People:{"First Name":"text","Last Name":"text",Email:"email",Companies:["record","Companies"],Role:"text",Tags:"multipleSelect",LinkedIn:"URL",Crunchbase:"URL"},Companies:{Company:"text","Update Record":"button","Primary Contact":["record","People"],"Home Page":"URL",Tagline:"text",Crunchbase:"URL","Organization Type":"singleSelect",Headquarters:"text",Investor:"checkbox",Interests:"multipleSelect","BT Invest Status":"singleSelect","Portfolio Logo Permission":"checkbox","Logo URL":"URL",Logo:"image","Listed on BasisTech Website":"checkbox",Accelerator:"ignore","(legacy) Funnel":"ignore","To Company (for Fillout)":"ignore","Legacy Notes":"multilineText","Company notes":["record","Company notes"]},Events:{Name:"text",Date:"date",Description:"multilineText",Status:"singleSelect",Speakers:["record","People"]}},I=({tableName:t})=>{const{getTable:r}=k(),[i,l]=g.useState(null),[s,o]=g.useState(null),[m,x]=g.useState({pagination:{current:1,pageSize:20}}),p=(n,f,d)=>{x({pagination:n,filters:f,...d})};if(g.useEffect(()=>{(async()=>{l(await r({tableName:t,setError:o}))})()},[r,t]),s)return e.jsx(ne,{message:"Error",description:s,type:"error",showIcon:!0});if(!i)return e.jsx(ie,{});const h=(n,f)=>{switch(Array.isArray(n)?n[0]:n){case"text":case"multilineText":case"URL":case"singleSelect":return(d,b)=>{const w=d.fields[f]||"",A=b.fields[f]||"";return w.localeCompare(A)};case"record":return(d,b)=>{var F,q;const w=((F=d.fields[f])==null?void 0:F[0])||"",A=((q=b.fields[f])==null?void 0:q[0])||"";return w.localeCompare(A)};case"checkbox":return(d,b)=>{const w=d.fields[f]?1:0,A=b.fields[f]?1:0;return w-A};case"button":case"image":default:return null}},T=Object.keys(S[t]).filter(n=>S[t][n]!=="ignore").map(n=>{const f=S[t][n];return{title:n,dataIndex:["fields",n],key:n,sorter:h(f,n),render:d=>d?e.jsx(ge,{type:f,value:d}):()=>""}}),c=[{title:"ID",dataIndex:"id",key:"id",sorter:(n,f)=>n.id.localeCompare(f.id),render:n=>e.jsx(L,{tableName:t,id:n})},...T];return e.jsxs("div",{children:[e.jsx(me,{level:1,children:t}),e.jsx(ae,{dataSource:i,columns:c,rowKey:"id",pagination:m.pagination,onChange:p})]})},xe=()=>e.jsx(I,{tableName:"People"}),be=()=>e.jsx(I,{tableName:"Companies"}),ye=()=>e.jsx(I,{tableName:"Events"}),je=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Funnel"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),E="flowboard",u=t=>t?`/${E}/${t}`:`/${E}`,D=({markdown:t})=>e.jsx(Te,{children:e.jsx(Y,{children:t})});D.propTypes={markdown:a.string.isRequired};const Te=J.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.6;
  color: #222;
  max-width: 50em;
  margin: 0 auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    color: #3a539b;
  }

  p,
  ul,
  ol {
    margin-bottom: 1em;
  }

  ul,
  ol {
    padding-left: 20px;
  }
`,{Title:we}=U,O="config",v="companies",Ae=`
## Config

### To obtain your Airtable API token, follow these steps:

#### Log in to Airtable:

* Go to [Airtable](https://airtable.com/) and log in with your credentials.

#### Navigate to the Developer Hub:

* Click on your profile picture or initials in the top-right corner of the
  Airtable interface.
* Select “Developer hub” from the dropdown menu.

#### Generate a Personal Access Token:

* In the Developer Hub, find the section for Personal Access Tokens.
* Click on “Generate token” or a similar button.
* Follow the prompts to create a new Personal Access Token, specifying the
  scopes and bases you want to grant access to.
* Copy the generated token. This is your Personal Access Token.


#### Save your token here:

* Paste the token below.
* Click “Save Token”.
* Note that this will only save the token locally in your browser.
`,ke=()=>{const{airtableToken:t,updateAirtableToken:r}=k(),[i,l]=g.useState(""),s=Q();g.useEffect(()=>{l(t||"")},[t]);const o=()=>{r(i),s(u(v))};return e.jsxs("div",{children:[e.jsx(D,{markdown:Ae}),e.jsx(le,{}),e.jsx(we,{level:3,children:"Enter token now:"}),e.jsxs(C,{layout:"vertical",initialValues:{token:t},onFinish:o,children:[e.jsx(C.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(ce,{value:i,onChange:m=>l(m.target.value),style:{width:"700px"}})}),e.jsx(C.Item,{children:e.jsx(B,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Ce=`
## Flowboard

Welcome to Flowboard, BasisTech's new CRM dashboard.

[TBD] Usage

### Registration and setup

Flowboard is a front-end to several technologies. We are still in the teething
stage, so setup is not yet as smooth as we would like.  You will need to do the
following steps:

#### 1. Get an account on AirTable

Everyone in this first round of users should already have an AirTable
account. If you don't, please ask [Simson](mailto:simsong@basistech.com) to set
this up for you.

#### 2. Register as an authorized user

In order to access some features of Flowboard, you will need to be listed as an
authorized user of our CRM AirTable DB.

Add yourself to the \`Authorized Users\` table of \`BT Events and Funnel\`
[here](https://airtable.com/appuwUqhc3geVVy1v/tblUw4pyfWWipNdn7/viwPfv3fzz431MAMm).

#### 3. Get an Airtable API token

* Log in to Airtable:
  * Go to Airtable and log in with your credentials.

* Navigate to the Developer Hub:
  * Click on your profile picture or initials in the top-right corner of the
    Airtable interface.
  * Select "Developer hub" from the dropdown menu.

* Enter a AirTable Personal Access Token:
  * Click on Config in Flowboard's main menu
  * Follow the instructions there


#### 4. Register on the Fillout forms

We use a tool called [Fillout](https://www.fillout.com/) to create many of our
pretty AirTable interfaces. To protect our data, these forms require one-time
registrations. (And, unfortunately, sometimes they seem to "forget" and need
re-registration).

When you get to one of these forms, you will be requested to enter your
BasisTech email. Do so, and continue with the PIN code that you will receive by
email.


### Contact

Any questions, or ideas to streamline this process? Please contact
[David](deg@basistech.com).

`,Se=()=>e.jsx(D,{markdown:Ce}),{Header:Pe,Content:ve}=M,Re=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(j,{to:u("people"),children:"People"})},{key:"companies",label:e.jsx(j,{to:u("companies"),children:"Companies"})},{key:"events",label:e.jsx(j,{to:u("events"),children:"Events"})}]},{key:"funnel",label:e.jsx(j,{to:u("funnel"),children:"Funnel"})},{key:"config",label:e.jsx(j,{to:u("config"),children:"Config"})},{key:"help",label:e.jsx(j,{to:u("help"),children:"Help"})}],Le=()=>{const{airtableToken:t,initializing:r}=k(),i=Z();if(r)return null;const l=u("").replace(/\/$/,""),o=i.pathname.replace(l,"").split("/")[1]||(t?v:O);return e.jsxs(M,{style:{height:"100vh"},children:[e.jsxs(Pe,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:u("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(de,{mode:"horizontal",selectedKeys:[o],items:Re})]}),e.jsx(ve,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(ee,{children:[e.jsx(y,{path:u(""),element:e.jsx(te,{to:u(t?v:O)})}),e.jsx(y,{path:u("people"),element:e.jsx(xe,{})}),e.jsx(y,{path:u("companies"),element:e.jsx(be,{})}),e.jsx(y,{path:u("events"),element:e.jsx(ye,{})}),e.jsx(y,{path:u("funnel"),element:e.jsx(je,{})}),e.jsx(y,{path:u("config"),element:e.jsx(ke,{})}),e.jsx(y,{path:u("help"),element:e.jsx(Se,{})})]})})]})},Ie=()=>e.jsx($,{children:e.jsx(X,{children:e.jsx(Le,{})})});re.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(Ie,{})}));export{Oe as c,Be as g};
