import{r as p,P as c,G as e,H as te,I as se,M as re,J as oe,K as ne,L as ae,N as ie,O as j,Q as w,S as le,t as ce}from"./vendor-C8EjlrLF.js";import{T as O,B as v,I as de,A as ue,S as pe,F as he,a as D,b as T,R as I,C as me,c as $,L as B,M as fe,D as k,d as _,e as ge}from"./antd-C36rGnGL.js";import"./index-CuHdu_Jo.js";import"./rc-CfQllb_F.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ye(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Xe(t){if(t.__esModule)return t;var s=t.default;if(typeof s=="function"){var o=function n(){return this instanceof n?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};o.prototype=s.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(o,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),o}const ye=async(t,s,o)=>{const n=[];let r=null;do{const a=new URL(`https://api.airtable.com/v0/${s}/${o}`);r&&a.searchParams.append("offset",r);const d=await fetch(a.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!d.ok)throw new Error("Failed to fetch data from Airtable");const l=await d.json();n.push(...l.records),r=l.offset}while(r);return n},xe=t=>{const o=t.split("").reverse().map(n=>String.fromCharCode(n.charCodeAt(0)^42)).join("");return btoa(o)},be=t=>atob(t).split("").map(n=>String.fromCharCode(n.charCodeAt(0)^42)).reverse().join(""),K=p.createContext(),S=()=>p.useContext(K),W=({children:t})=>{const s="appuwUqhc3geVVy1v",[o,n]=p.useState(""),[r,a]=p.useState({}),[d,l]=p.useState(!0),h={};p.useEffect(()=>{const u=localStorage.getItem("airtableToken");u&&n(be(u)),l(!1)},[]);const i=u=>{const b=xe(u);n(u),localStorage.setItem("airtableToken",b)},g=async({tableName:u,setError:b,cachedOk:x=!0})=>{if(x&&r[u])return r[u];if(h[u])return h[u];if(o)try{return h[u]=ye(o,s,u).then(y=>(a(m=>({...m,[u]:y})),delete h[u],y)).catch(y=>{throw b(y.message),delete h[u],y}),h[u]}catch(y){b(y.message)}else b("Missing Airtable access token")};return e.jsx(K.Provider,{value:{airtableToken:o,updateAirtableToken:i,baseId:s,initializing:d,getTable:g},children:t})};W.propTypes={children:c.node.isRequired};const E=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});E.propTypes={text:c.oneOfType([c.string,c.arrayOf(c.string)]).isRequired};const N=({id:t,tableName:s})=>{const{getTable:o}=S(),[n,r]=p.useState(null),[a,d]=p.useState([]);if(p.useEffect(()=>{(async()=>{const i=await o({tableName:s,setError:r});d(i)})()},[o,s]),!a.length)return"";const l=({id:h})=>{var u;const i=a.find(b=>b.id===h),g=(u=i==null?void 0:i.fields)==null?void 0:u["Update Record"];return g?e.jsx(U,{url:g.url,label:i.fields.Name||"???"}):e.jsx(O,{color:"orange",children:(i==null?void 0:i.fields.Name)||(i==null?void 0:i.fields["Record Key"])||(i==null?void 0:i.fields.Company)||h})};return Array.isArray(t)?[...new Set(t)].map(i=>e.jsx(l,{id:i},i)):e.jsx(l,{id:t})};N.propTypes={id:c.oneOfType([c.string,c.arrayOf(c.string)]).isRequired,tableName:c.string.isRequired};const G=({option:t})=>e.jsx(O,{color:"blue",children:t});G.propTypes={option:c.string.isRequired};const Y=({options:t})=>e.jsx(e.Fragment,{children:t.map((s,o)=>e.jsx(O,{children:s},o))});Y.propTypes={options:c.arrayOf(c.string).isRequired};const je=t=>e.jsx("span",{children:t?"Yes":"No"}),U=({url:t,label:s})=>{const o=n=>{const{clientX:r,clientY:a,screenX:d,screenY:l}=n;we({url:t,mouseX:r,mouseY:a,screenX:d,screenY:l})};return e.jsx(v,{onClick:o,children:s},t)};U.propTypes={url:c.string.isRequired,label:c.string.isRequired};const we=({url:t,mouseX:s,mouseY:o,screenX:n,screenY:r})=>{const l=Math.round(r+o-512),h=Math.round(n+s-768/2),i=`width=768, height=1024, top=${l}, left=${h}`;window.open(t,"_blank",`toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, ${i}`)},X=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});X.propTypes={email:c.string.isRequired};const J=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});J.propTypes={url:c.string.isRequired};const Q=({date:t})=>{const s=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:s})};Q.propTypes={date:c.string.isRequired};const Z=({attachments:t})=>{const s=t==null?void 0:t[0];return e.jsx(de,{src:s.url,alt:s.filename,width:"160px"})};Z.propTypes={attachments:c.arrayOf(c.shape({url:c.string.isRequired,filename:c.string.isRequired})).isRequired};const Ce=({type:t,value:s})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(N,{tableName:t[1],id:s},s):"";switch(t){case"ignore":return"";case"URL":return e.jsx(J,{url:s});case"email":return e.jsx(X,{email:s});case"button":return e.jsx(U,{url:s==null?void 0:s.url,label:s==null?void 0:s.label});case"date":return e.jsx(Q,{date:s});case"image":return e.jsx(Z,{attachments:s});case"text":return e.jsx(E,{text:s});case"multilineText":return e.jsx(E,{text:s});case"singleSelect":return e.jsx(G,{option:s});case"multipleSelect":return e.jsx(Y,{options:s});case"checkbox":return e.jsx(je,{checked:s});default:return console.error("Can't handle type {type} for",s),e.jsxs("span",{children:[JSON.stringify(s)," "]})}},{Title:Te}=D,R={People:{"First Name":{type:"text",width:150},"Last Name":{type:"text",width:150},Email:{type:"email",width:250},Companies:{type:["record","Companies"]},Role:{type:"text"},Tags:{type:"multipleSelect"},LinkedIn:{type:"URL",prettyHeading:"LinkedIn URL",width:350},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL",width:350}},Companies:{Name:{type:"text",prettyHeading:"Company Name",width:250},"Primary Contact":{type:["record","People"]},"Home Page":{type:"URL",width:350},Tagline:{type:"text",width:300},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL"},"Organization Type":{type:"singleSelect"},Headquarters:{type:"text"},Investor:{type:"checkbox"},Interests:{type:"multipleSelect"},"BT Invest Status":{type:"singleSelect"},"Portfolio Logo Permission":{type:"checkbox"},"Logo URL":{type:"URL"},Logo:{type:"image"},"Listed on BasisTech Website":{type:"checkbox"},Accelerator:{type:"ignore"},"(legacy) Funnel":{type:"ignore"},"To Company (for Fillout)":{type:"ignore"},"Legacy Notes":{type:"multilineText"},"Company notes":{type:["record","Company notes"]}},Events:{Name:{type:"text"},Date:{type:"date",width:150},Description:{type:"multilineText"},Status:{type:"singleSelect",width:100},Speakers:{type:["record","People"],width:300}},"Authorized Users":{"First Name":{type:"text",width:150},"Last Name":{type:"text",width:150},Email:{type:"email",width:250}}},Ae=t=>{const{onResize:s,width:o,...n}=t;return o?e.jsx(te,{width:o,height:0,onResize:s,draggableOpts:{enableUserSelectHack:!1},children:e.jsx("th",{...n})}):e.jsx("th",{...n})},P=({tableName:t})=>{const{getTable:s}=S(),[o,n]=p.useState(null),[r,a]=p.useState(null),[d,l]=p.useState({pagination:{current:1,pageSize:20}}),[h,i]=p.useState([]),g=(x,y,m)=>{l({pagination:x,filters:y,...m})};p.useEffect(()=>{(async()=>{n(await s({tableName:t,setError:a}))})()},[s,t]),p.useEffect(()=>{const x=Object.keys(R[t]).filter(m=>R[t][m]!=="ignore").map(m=>{const{type:C,width:A}=R[t][m];return{title:R[t][m].prettyHeading||m,dataIndex:["fields",m],key:m,width:A||200,sorter:ke(C,m),render:M=>M?e.jsx(Ce,{type:C,value:M}):""}}),y=[{title:"Update/Actions",dataIndex:"id",key:"id",width:250,sorter:(m,C)=>m.id.localeCompare(C.id),render:m=>e.jsx(N,{tableName:t,id:m})},...x];i(y)},[t]);const u=p.useCallback(x=>(y,{size:m})=>{i(C=>{const A=[...C];return A[x]={...A[x],width:m.width},A})},[]),b=h.map((x,y)=>({...x,onHeaderCell:m=>({width:m.width,onResize:u(y)})}));return r?e.jsx(ue,{message:"Error",description:r,type:"error",showIcon:!0}):o?e.jsxs("div",{children:[e.jsx(Te,{level:1,children:t}),e.jsx(he,{bordered:!0,tableLayout:"fixed",scroll:{x:"max-content"},components:{header:{cell:Ae}},dataSource:o,columns:b,rowKey:"id",pagination:d.pagination,onChange:g})]}):e.jsx(pe,{})},ke=(t,s)=>{switch(Array.isArray(t)?t[0]:t){case"text":case"multilineText":case"email":case"URL":case"singleSelect":return(o,n)=>{var d,l;const r=((d=o.fields[s])==null?void 0:d[0])||"",a=((l=n.fields[s])==null?void 0:l[0])||"";return r.localeCompare(a)};case"record":return(o,n)=>{var d,l;const r=((d=o.fields[s])==null?void 0:d[0])||"",a=((l=n.fields[s])==null?void 0:l[0])||"";return r.localeCompare(a)};case"checkbox":return(o,n)=>{const r=o.fields[s]?1:0,a=n.fields[s]?1:0;return r-a};case"button":case"image":default:return null}},Se=()=>e.jsx(P,{tableName:"Authorized Users"}),Re=()=>e.jsx(P,{tableName:"Companies"}),ve=()=>e.jsx(P,{tableName:"Events"}),Pe=()=>e.jsx(P,{tableName:"People"}),q=({formFields:t,formName:s,records:o,onSearch:n,fieldMap:r})=>{const[a]=T.useForm(),[d,l]=p.useState([]);p.useEffect(()=>{l(o)},[o]);const h=(i,g)=>{n(g,l,o,r)};return e.jsx(e.Fragment,{children:e.jsxs(T,{form:a,name:s,layout:"vertical",onValuesChange:h,children:[t.map(({name:i,label:g})=>e.jsx(I,{gutter:16,children:e.jsx(me,{span:24,children:e.jsx(T.Item,{name:i,label:g,children:e.jsx($,{placeholder:g})})})},i)),e.jsx(B,{bordered:!0,dataSource:d,style:{cursor:"pointer",maxHeight:"200px",overflowY:"auto"},renderItem:i=>e.jsx(B.Item,{onClick:()=>{const g={};t.forEach(({name:u})=>{g[u]=i.fields[r[u]]}),a.setFieldsValue(g)},children:t.map(({name:g})=>i.fields[r[g]]).join(" ")})})]})})};q.propTypes={formFields:c.arrayOf(c.shape({name:c.string.isRequired,label:c.string.isRequired})).isRequired,records:c.arrayOf(c.object).isRequired,onSearch:c.func.isRequired,fieldMap:c.object.isRequired,formName:c.string.isRequired};const V=(t,s,o,n)=>{const r=o.filter(a=>{const d=a.fields;return Object.keys(n).every(l=>{const h=t[l],i=d[n[l]];return!h||(i==null?void 0:i.toLowerCase().includes(h.toLowerCase()))})});s(r)},{Title:F}=D,Fe=()=>{const{people:t,companies:s,error:o}=Le(),[n,r]=p.useState(null),a=()=>r(null),d=()=>r(null),l={createPerson:{title:"Create Person",height:700,airtableUrl:"https://airtable.com/embed/appuwUqhc3geVVy1v/pagrtsVzEDZTVKptv/form"},createCompany:{title:"Create Company",height:700,airtableUrl:"https://airtable.com/embed/appuwUqhc3geVVy1v/pag33WEtSwkKTefN6/form"}},h={firstName:"First Name",lastName:"Last Name",email:"Email"},i={company:"Name"},g=[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"},{name:"email",label:"Email"}],u=[{name:"company",label:"Company"}];return e.jsxs("div",{style:{padding:"24px"},children:[n&&e.jsx(fe,{title:l[n].title,open:n,onOk:a,onCancel:d,footer:null,children:e.jsx("iframe",{className:"airtable-embed",src:l[n].airtableUrl,width:"100%",height:l[n].height,style:{background:"transparent",border:"1px solid #ccc"}})}),e.jsx(F,{level:2,children:"Add Contact"}),e.jsx(k,{}),e.jsx(F,{level:3,children:"Find Person"}),e.jsx(q,{formFields:g,records:t,onSearch:V,fieldMap:h,formName:"find_person"}),e.jsx(k,{}),e.jsx(I,{gutter:16,children:e.jsx(v,{type:"default",onClick:()=>r("createPerson"),children:"Create New Person"})}),e.jsx(k,{}),e.jsx(F,{level:3,children:"Find Company"}),e.jsx(q,{formFields:u,records:s,onSearch:V,fieldMap:i,formName:"find_company"}),e.jsx(k,{}),e.jsx(I,{gutter:16,children:e.jsx(v,{type:"default",onClick:()=>r("createCompany"),children:"Create New Company"})}),o&&e.jsxs("p",{children:["Error: ",o.message]})]})},Le=()=>{const{getTable:t}=S(),[s,o]=p.useState([]),[n,r]=p.useState([]),[a,d]=p.useState(null);return p.useEffect(()=>{const l=async(h,i)=>{i(await t({tableName:h,setError:d}))};l("People",o),l("Companies",r)},[t]),{people:s,companies:n,error:a}},H="flowboard",f=t=>t?`/${H}/${t}`:`/${H}`,z=({markdown:t})=>e.jsx(Ie,{children:e.jsx(re,{children:t})});z.propTypes={markdown:c.string.isRequired};const Ie=se.div`
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
`,{Title:Ee}=D,qe="config",ee="companies",Oe=`
## Config

### To obtain your Airtable API token, follow these steps:

#### Log in to Airtable:

* Go to [Airtable](https://airtable.com/) and log in with your credentials.

#### Navigate to the Developer Hub:

* Click on your profile picture or initials in the top-right corner of the
  Airtable interface.
* Select “Developer hub” from the dropdown menu.

#### Generate a Personal Access Token:

* In the Developer Hub, select the section “Personal Access Tokens”.
* Click on “Create New Token”.
* Follow the prompts to create a new Personal Access Token, specifying the
  scopes and bases you want to grant access to.
  * Scope: [TBD] For now, I've selected all. This is probably overkill. (It's
  likely enough to select \`data.records:read\`, \`data.records:write\`, and
  \`schema.base:read\`)
  * Base: Select only \`BT Events and Funnel\` (under \`BASISTECH\`)
* Copy the generated token. This is your Personal Access Token.


#### Save your token here:

* Paste the token below.
* Click “Save Token”.
* Note that this will only save the token locally in your browser.
`,De=()=>{const{airtableToken:t,updateAirtableToken:s}=S(),[o,n]=p.useState(""),r=oe();p.useEffect(()=>{n(t||"")},[t]);const a=()=>{s(o),r(f(ee))};return e.jsxs(e.Fragment,{children:[e.jsx(z,{markdown:Oe}),e.jsx(k,{}),e.jsx(Ee,{level:3,children:"Enter token now:"}),e.jsxs(T,{layout:"vertical",initialValues:{token:t},onFinish:a,children:[e.jsx(T.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx($,{value:o,onChange:d=>n(d.target.value),style:{width:"700px"}})}),e.jsx(T.Item,{children:e.jsx(v,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Ne=`
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
  * Select “Developer hub” from the dropdown menu.

* Enter a AirTable Personal Access Token:
  * Click on Config in Flowboard's main menu
  * Follow the instructions there


#### 4. Register on the Fillout forms

We use a tool called [Fillout](https://www.fillout.com/) to create many of our
pretty AirTable interfaces. To protect our data, these forms require one-time
registrations. (And, unfortunately, sometimes they seem to “forget” and need
re-registration).

When you get to one of these forms, you will be requested to enter your
BasisTech email. Do so, and continue with the PIN code that you will receive by
email.


### Contact

Any questions, or ideas to streamline this process? Please contact
[David](deg@basistech.com).

`,L=()=>e.jsx(z,{markdown:Ne}),{Header:Ue,Content:ze}=_,Me=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(w,{to:f("people"),children:"People"})},{key:"companies",label:e.jsx(w,{to:f("companies"),children:"Companies"})},{key:"events",label:e.jsx(w,{to:f("events"),children:"Events"})},{key:"users",label:e.jsx(w,{to:f("users"),children:"Authorized Users"})}]},{key:"add_contact",label:e.jsx(w,{to:f("add_contact"),children:"Add Contact"})},{key:"config",label:e.jsx(w,{to:f("config"),children:"Config"})},{key:"help",label:e.jsx(w,{to:f("help"),children:"Help"})}],Be=()=>{const{airtableToken:t,initializing:s}=S(),o=ae();if(s)return null;const n=f("").replace(/\/$/,""),a=o.pathname.replace(n,"").split("/")[1]||(t?ee:qe);return console.log("location",o),console.log("basepath",n),console.log("urlOf('/')",f("/")),console.log("urlOf('')",f("")),e.jsxs(_,{style:{height:"100vh"},children:[e.jsxs(Ue,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:f("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(ge,{mode:"horizontal",selectedKeys:[a],items:Me})]}),e.jsx(ze,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(ie,{children:[e.jsx(j,{path:"/",element:e.jsx(L,{})}),e.jsx(j,{path:f(""),element:e.jsx(L,{})}),e.jsx(j,{path:f("people"),element:e.jsx(Pe,{})}),e.jsx(j,{path:f("companies"),element:e.jsx(Re,{})}),e.jsx(j,{path:f("events"),element:e.jsx(ve,{})}),e.jsx(j,{path:f("users"),element:e.jsx(Se,{})}),e.jsx(j,{path:f("add_contact"),element:e.jsx(Fe,{})}),e.jsx(j,{path:f("config"),element:e.jsx(De,{})}),e.jsx(j,{path:f("help"),element:e.jsx(L,{})})]})})]})},Ve=()=>e.jsx(W,{children:e.jsx(ne,{children:e.jsx(Be,{})})});le.createRoot(document.getElementById("root")).render(e.jsx(ce.StrictMode,{children:e.jsx(Ve,{})}));export{Xe as a,Ge as c,Ye as g};
