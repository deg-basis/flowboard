import{r as f,P as c,G as e,H as K,I as Y,M as X,J,K as Q,L as Z,N as ee,O as b,Q as te,S as T,U as se,t as re}from"./vendor-Cj6d-dFP.js";import{T as v,B as U,I as ne,A as oe,S as ie,F as ae,a as M,D as le,b as S,c as ce,L as z,M as de}from"./antd-SVPPVAFj.js";import"./index-BrETe6Rf.js";import"./rc-YKDD4h45.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();var Be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function He(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function $e(t){if(t.__esModule)return t;var s=t.default;if(typeof s=="function"){var r=function o(){return this instanceof o?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};r.prototype=s.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach(function(o){var n=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(r,o,n.get?n:{enumerable:!0,get:function(){return t[o]}})}),r}const ue=async(t,s,r)=>{const o=[];let n=null;do{const i=new URL(`https://api.airtable.com/v0/${s}/${r}`);n&&i.searchParams.append("offset",n);const a=await fetch(i.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!a.ok)throw new Error("Failed to fetch data from Airtable");const p=await a.json();o.push(...p.records),n=p.offset}while(n);return o},pe=t=>{const r=t.split("").reverse().map(o=>String.fromCharCode(o.charCodeAt(0)^42)).join("");return btoa(r)},he=t=>atob(t).split("").map(o=>String.fromCharCode(o.charCodeAt(0)^42)).reverse().join(""),B=f.createContext(),k=()=>f.useContext(B),H=({children:t})=>{const s="appuwUqhc3geVVy1v",[r,o]=f.useState(""),[n,i]=f.useState({}),[a,p]=f.useState(!0),m={};f.useEffect(()=>{const d=localStorage.getItem("airtableToken");d&&o(he(d)),p(!1)},[]);const l=d=>{const x=pe(d);o(d),localStorage.setItem("airtableToken",x)},j=async({tableName:d,setError:x,cachedOk:y=!0})=>{if(y&&n[d])return n[d];if(m[d])return m[d];if(r)try{return m[d]=ue(r,s,d).then(g=>(i(u=>({...u,[d]:g})),delete m[d],g)).catch(g=>{throw x(g.message),delete m[d],g}),m[d]}catch(g){x(g.message)}else x("Missing Airtable access token")};return e.jsx(B.Provider,{value:{airtableToken:r,updateAirtableToken:l,baseId:s,initializing:a,getTable:j},children:t})};H.propTypes={children:c.node.isRequired};const P=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});P.propTypes={text:c.oneOfType([c.string,c.arrayOf(c.string)]).isRequired};const L=({id:t,tableName:s})=>{const{getTable:r}=k(),[o,n]=f.useState(null),[i,a]=f.useState([]);if(f.useEffect(()=>{(async()=>{const l=await r({tableName:s,setError:n});a(l)})()},[r,s]),!i.length)return"";const p=({id:m})=>{var d;const l=i.find(x=>x.id===m),j=(d=l==null?void 0:l.fields)==null?void 0:d["Update Record"];return j?e.jsx(I,{url:j.url,label:l.fields.Name||"???"}):e.jsx(v,{color:"orange",children:(l==null?void 0:l.fields.Name)||(l==null?void 0:l.fields["Record Key"])||(l==null?void 0:l.fields.Company)||m})};return Array.isArray(t)?[...new Set(t)].map(l=>e.jsx(p,{id:l},l)):e.jsx(p,{id:t})};L.propTypes={id:c.oneOfType([c.string,c.arrayOf(c.string)]).isRequired,tableName:c.string.isRequired};const $=({option:t})=>e.jsx(v,{color:"blue",children:t});$.propTypes={option:c.string.isRequired};const N=({options:t})=>e.jsx(e.Fragment,{children:t.map((s,r)=>e.jsx(v,{children:s},r))});N.propTypes={options:c.arrayOf(c.string).isRequired};const fe=t=>e.jsx("span",{children:t?"Yes":"No"}),I=({url:t,label:s})=>{const r=o=>{const{clientX:n,clientY:i,screenX:a,screenY:p}=o;me({url:t,mouseX:n,mouseY:i,screenX:a,screenY:p})};return e.jsx(U,{onClick:r,children:s},t)};I.propTypes={url:c.string.isRequired,label:c.string.isRequired};const me=({url:t,mouseX:s,mouseY:r,screenX:o,screenY:n})=>{const p=Math.round(n+r-512),m=Math.round(o+s-768/2),l=`width=768, height=1024, top=${p}, left=${m}`;window.open(t,"_blank",`toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, ${l}`)},G=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});G.propTypes={email:c.string.isRequired};const _=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});_.propTypes={url:c.string.isRequired};const V=({date:t})=>{const s=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:s})};V.propTypes={date:c.string.isRequired};const W=({attachments:t})=>{const s=t==null?void 0:t[0];return e.jsx(ne,{src:s.url,alt:s.filename,width:"160px"})};W.propTypes={attachments:c.arrayOf(c.shape({url:c.string.isRequired,filename:c.string.isRequired})).isRequired};const ge=({type:t,value:s})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(L,{tableName:t[1],id:s},s):"";switch(t){case"ignore":return"";case"URL":return e.jsx(_,{url:s});case"email":return e.jsx(G,{email:s});case"button":return e.jsx(I,{url:s==null?void 0:s.url,label:s==null?void 0:s.label});case"date":return e.jsx(V,{date:s});case"image":return e.jsx(W,{attachments:s});case"text":return e.jsx(P,{text:s});case"multilineText":return e.jsx(P,{text:s});case"singleSelect":return e.jsx($,{option:s});case"multipleSelect":return e.jsx(N,{options:s});case"checkbox":return e.jsx(fe,{checked:s});default:return console.error("Can't handle type {type} for",s),e.jsxs("span",{children:[JSON.stringify(s)," "]})}},{Title:ye}=M,C={People:{"First Name":{type:"text",width:150},"Last Name":{type:"text",width:150},Email:{type:"email",width:250},Companies:{type:["record","Companies"]},Role:{type:"text"},Tags:{type:"multipleSelect"},LinkedIn:{type:"URL",prettyHeading:"LinkedIn URL",width:350},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL",width:350}},Companies:{Name:{type:"text",prettyHeading:"Company Name",width:250},"Primary Contact":{type:["record","People"]},"Home Page":{type:"URL",width:350},Tagline:{type:"text",width:300},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL"},"Organization Type":{type:"singleSelect"},Headquarters:{type:"text"},Investor:{type:"checkbox"},Interests:{type:"multipleSelect"},"BT Invest Status":{type:"singleSelect"},"Portfolio Logo Permission":{type:"checkbox"},"Logo URL":{type:"URL"},Logo:{type:"image"},"Listed on BasisTech Website":{type:"checkbox"},Accelerator:{type:"ignore"},"(legacy) Funnel":{type:"ignore"},"To Company (for Fillout)":{type:"ignore"},"Legacy Notes":{type:"multilineText"},"Company notes":{type:["record","Company notes"]}},Events:{Name:{type:"text"},Date:{type:"date",width:150},Description:{type:"multilineText"},Status:{type:"singleSelect",width:100},Speakers:{type:["record","People"],width:300}}},xe=t=>{const{onResize:s,width:r,...o}=t;return r?e.jsx(K,{width:r,height:0,onResize:s,draggableOpts:{enableUserSelectHack:!1},children:e.jsx("th",{...o})}):e.jsx("th",{...o})},D=({tableName:t})=>{const{getTable:s}=k(),[r,o]=f.useState(null),[n,i]=f.useState(null),[a,p]=f.useState({pagination:{current:1,pageSize:20}}),[m,l]=f.useState([]),j=(y,g,u)=>{p({pagination:y,filters:g,...u})};f.useEffect(()=>{(async()=>{o(await s({tableName:t,setError:i}))})()},[s,t]),f.useEffect(()=>{const y=Object.keys(C[t]).filter(u=>C[t][u]!=="ignore").map(u=>{const{type:w,width:A}=C[t][u];return{title:C[t][u].prettyHeading||u,dataIndex:["fields",u],key:u,width:A||200,sorter:be(w,u),render:F=>F?e.jsx(ge,{type:w,value:F}):""}}),g=[{title:"Update/Actions",dataIndex:"id",key:"id",width:250,sorter:(u,w)=>u.id.localeCompare(w.id),render:u=>e.jsx(L,{tableName:t,id:u})},...y];l(g)},[t]);const d=f.useCallback(y=>(g,{size:u})=>{l(w=>{const A=[...w];return A[y]={...A[y],width:u.width},A})},[]),x=m.map((y,g)=>({...y,onHeaderCell:u=>({width:u.width,onResize:d(g)})}));return n?e.jsx(oe,{message:"Error",description:n,type:"error",showIcon:!0}):r?e.jsxs("div",{children:[e.jsx(ye,{level:1,children:t}),e.jsx(ae,{bordered:!0,tableLayout:"fixed",scroll:{x:"max-content"},components:{header:{cell:xe}},dataSource:r,columns:x,rowKey:"id",pagination:a.pagination,onChange:j})]}):e.jsx(ie,{})},be=(t,s)=>{switch(Array.isArray(t)?t[0]:t){case"text":case"multilineText":case"email":case"URL":case"singleSelect":return(r,o)=>{var a,p;const n=((a=r.fields[s])==null?void 0:a[0])||"",i=((p=o.fields[s])==null?void 0:p[0])||"";return n.localeCompare(i)};case"record":return(r,o)=>{var a,p;const n=((a=r.fields[s])==null?void 0:a[0])||"",i=((p=o.fields[s])==null?void 0:p[0])||"";return n.localeCompare(i)};case"checkbox":return(r,o)=>{const n=r.fields[s]?1:0,i=o.fields[s]?1:0;return n-i};case"button":case"image":default:return null}},je=()=>e.jsx(D,{tableName:"People"}),we=()=>e.jsx(D,{tableName:"Companies"}),Te=()=>e.jsx(D,{tableName:"Events"}),Ae=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Funnel"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),q="flowboard",h=t=>t?`/${q}/${t}`:`/${q}`,O=({markdown:t})=>e.jsx(Ce,{children:e.jsx(X,{children:t})});O.propTypes={markdown:c.string.isRequired};const Ce=Y.div`
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
`,{Title:ke}=M,E="config",R="companies",Se=`
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
`,Pe=()=>{const{airtableToken:t,updateAirtableToken:s}=k(),[r,o]=f.useState(""),n=J();f.useEffect(()=>{o(t||"")},[t]);const i=()=>{s(r),n(h(R))};return e.jsxs("div",{children:[e.jsx(O,{markdown:Se}),e.jsx(le,{}),e.jsx(ke,{level:3,children:"Enter token now:"}),e.jsxs(S,{layout:"vertical",initialValues:{token:t},onFinish:i,children:[e.jsx(S.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(ce,{value:r,onChange:a=>o(a.target.value),style:{width:"700px"}})}),e.jsx(S.Item,{children:e.jsx(U,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Re=`
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

`,ve=()=>e.jsx(O,{markdown:Re}),{Header:Le,Content:Ie}=z,De=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(T,{to:h("people"),children:"People"})},{key:"companies",label:e.jsx(T,{to:h("companies"),children:"Companies"})},{key:"events",label:e.jsx(T,{to:h("events"),children:"Events"})}]},{key:"funnel",label:e.jsx(T,{to:h("funnel"),children:"Funnel"})},{key:"config",label:e.jsx(T,{to:h("config"),children:"Config"})},{key:"help",label:e.jsx(T,{to:h("help"),children:"Help"})}],Oe=()=>{const{airtableToken:t,initializing:s}=k(),r=Z();if(s)return null;const o=h("").replace(/\/$/,""),i=r.pathname.replace(o,"").split("/")[1]||(t?R:E),a=r.pathname===o+"/"||r.pathname===o;return e.jsxs(z,{style:{height:"100vh"},children:[e.jsxs(Le,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:h("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(de,{mode:"horizontal",selectedKeys:[i],items:De})]}),e.jsx(Ie,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(ee,{children:[a&&e.jsx(b,{path:h(""),element:e.jsx(te,{to:h(t?R:E)})}),e.jsx(b,{path:h("people"),element:e.jsx(je,{})}),e.jsx(b,{path:h("companies"),element:e.jsx(we,{})}),e.jsx(b,{path:h("events"),element:e.jsx(Te,{})}),e.jsx(b,{path:h("funnel"),element:e.jsx(Ae,{})}),e.jsx(b,{path:h("config"),element:e.jsx(Pe,{})}),e.jsx(b,{path:h("help"),element:e.jsx(ve,{})})]})})]})},Fe=()=>e.jsx(H,{children:e.jsx(Q,{children:e.jsx(Oe,{})})});se.createRoot(document.getElementById("root")).render(e.jsx(re.StrictMode,{children:e.jsx(Fe,{})}));export{$e as a,Be as c,He as g};
