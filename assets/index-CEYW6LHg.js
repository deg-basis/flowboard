import{r as p,P as c,G as e,H as Q,I as Z,M as ee,J as te,K as se,L as re,N as oe,O as b,Q as j,S as ne,t as ae}from"./vendor-CA2OGVK4.js";import{T as E,B as R,I as ie,A as le,S as ce,F as de,a as q,b as T,R as F,C as ue,c as V,L as z,M as pe,D as A,d as H,e as he}from"./antd-QUzl1YkG.js";import"./index-CEYW6LHg.js";import"./rc-DNXgba2q.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();var _e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function $e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ke(t){if(t.__esModule)return t;var s=t.default;if(typeof s=="function"){var o=function n(){return this instanceof n?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};o.prototype=s.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(o,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),o}const me=async(t,s,o)=>{const n=[];let r=null;do{const a=new URL(`https://api.airtable.com/v0/${s}/${o}`);r&&a.searchParams.append("offset",r);const d=await fetch(a.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!d.ok)throw new Error("Failed to fetch data from Airtable");const l=await d.json();n.push(...l.records),r=l.offset}while(r);return n},fe=t=>{const o=t.split("").reverse().map(n=>String.fromCharCode(n.charCodeAt(0)^42)).join("");return btoa(o)},ge=t=>atob(t).split("").map(n=>String.fromCharCode(n.charCodeAt(0)^42)).reverse().join(""),_=p.createContext(),S=()=>p.useContext(_),$=({children:t})=>{const s="appuwUqhc3geVVy1v",[o,n]=p.useState(""),[r,a]=p.useState({}),[d,l]=p.useState(!0),h={};p.useEffect(()=>{const u=localStorage.getItem("airtableToken");u&&n(ge(u)),l(!1)},[]);const i=u=>{const x=fe(u);n(u),localStorage.setItem("airtableToken",x)},f=async({tableName:u,setError:x,cachedOk:y=!0})=>{if(y&&r[u])return r[u];if(h[u])return h[u];if(o)try{return h[u]=me(o,s,u).then(g=>(a(m=>({...m,[u]:g})),delete h[u],g)).catch(g=>{throw x(g.message),delete h[u],g}),h[u]}catch(g){x(g.message)}else x("Missing Airtable access token")};return e.jsx(_.Provider,{value:{airtableToken:o,updateAirtableToken:i,baseId:s,initializing:d,getTable:f},children:t})};$.propTypes={children:c.node.isRequired};const L=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});L.propTypes={text:c.oneOfType([c.string,c.arrayOf(c.string)]).isRequired};const U=({id:t,tableName:s})=>{const{getTable:o}=S(),[n,r]=p.useState(null),[a,d]=p.useState([]);if(p.useEffect(()=>{(async()=>{const i=await o({tableName:s,setError:r});d(i)})()},[o,s]),!a.length)return"";const l=({id:h})=>{var u;const i=a.find(x=>x.id===h),f=(u=i==null?void 0:i.fields)==null?void 0:u["Update Record"];return f?e.jsx(N,{url:f.url,label:i.fields.Name||"???"}):e.jsx(E,{color:"orange",children:(i==null?void 0:i.fields.Name)||(i==null?void 0:i.fields["Record Key"])||(i==null?void 0:i.fields.Company)||h})};return Array.isArray(t)?[...new Set(t)].map(i=>e.jsx(l,{id:i},i)):e.jsx(l,{id:t})};U.propTypes={id:c.oneOfType([c.string,c.arrayOf(c.string)]).isRequired,tableName:c.string.isRequired};const K=({option:t})=>e.jsx(E,{color:"blue",children:t});K.propTypes={option:c.string.isRequired};const W=({options:t})=>e.jsx(e.Fragment,{children:t.map((s,o)=>e.jsx(E,{children:s},o))});W.propTypes={options:c.arrayOf(c.string).isRequired};const ye=t=>e.jsx("span",{children:t?"Yes":"No"}),N=({url:t,label:s})=>{const o=n=>{const{clientX:r,clientY:a,screenX:d,screenY:l}=n;xe({url:t,mouseX:r,mouseY:a,screenX:d,screenY:l})};return e.jsx(R,{onClick:o,children:s},t)};N.propTypes={url:c.string.isRequired,label:c.string.isRequired};const xe=({url:t,mouseX:s,mouseY:o,screenX:n,screenY:r})=>{const l=Math.round(r+o-512),h=Math.round(n+s-768/2),i=`width=768, height=1024, top=${l}, left=${h}`;window.open(t,"_blank",`toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, ${i}`)},G=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});G.propTypes={email:c.string.isRequired};const Y=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});Y.propTypes={url:c.string.isRequired};const X=({date:t})=>{const s=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:s})};X.propTypes={date:c.string.isRequired};const J=({attachments:t})=>{const s=t==null?void 0:t[0];return e.jsx(ie,{src:s.url,alt:s.filename,width:"160px"})};J.propTypes={attachments:c.arrayOf(c.shape({url:c.string.isRequired,filename:c.string.isRequired})).isRequired};const be=({type:t,value:s})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(U,{tableName:t[1],id:s},s):"";switch(t){case"ignore":return"";case"URL":return e.jsx(Y,{url:s});case"email":return e.jsx(G,{email:s});case"button":return e.jsx(N,{url:s==null?void 0:s.url,label:s==null?void 0:s.label});case"date":return e.jsx(X,{date:s});case"image":return e.jsx(J,{attachments:s});case"text":return e.jsx(L,{text:s});case"multilineText":return e.jsx(L,{text:s});case"singleSelect":return e.jsx(K,{option:s});case"multipleSelect":return e.jsx(W,{options:s});case"checkbox":return e.jsx(ye,{checked:s});default:return console.error("Can't handle type {type} for",s),e.jsxs("span",{children:[JSON.stringify(s)," "]})}},{Title:je}=q,k={People:{"First Name":{type:"text",width:150},"Last Name":{type:"text",width:150},Email:{type:"email",width:250},Companies:{type:["record","Companies"]},Role:{type:"text"},Tags:{type:"multipleSelect"},LinkedIn:{type:"URL",prettyHeading:"LinkedIn URL",width:350},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL",width:350}},Companies:{Name:{type:"text",prettyHeading:"Company Name",width:250},"Primary Contact":{type:["record","People"]},"Home Page":{type:"URL",width:350},Tagline:{type:"text",width:300},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL"},"Organization Type":{type:"singleSelect"},Headquarters:{type:"text"},Investor:{type:"checkbox"},Interests:{type:"multipleSelect"},"BT Invest Status":{type:"singleSelect"},"Portfolio Logo Permission":{type:"checkbox"},"Logo URL":{type:"URL"},Logo:{type:"image"},"Listed on BasisTech Website":{type:"checkbox"},Accelerator:{type:"ignore"},"(legacy) Funnel":{type:"ignore"},"To Company (for Fillout)":{type:"ignore"},"Legacy Notes":{type:"multilineText"},"Company notes":{type:["record","Company notes"]}},Events:{Name:{type:"text"},Date:{type:"date",width:150},Description:{type:"multilineText"},Status:{type:"singleSelect",width:100},Speakers:{type:["record","People"],width:300}},"Authorized Users":{"First Name":{type:"text",width:150},"Last Name":{type:"text",width:150},Email:{type:"email",width:250}}},we=t=>{const{onResize:s,width:o,...n}=t;return o?e.jsx(Q,{width:o,height:0,onResize:s,draggableOpts:{enableUserSelectHack:!1},children:e.jsx("th",{...n})}):e.jsx("th",{...n})},v=({tableName:t})=>{const{getTable:s}=S(),[o,n]=p.useState(null),[r,a]=p.useState(null),[d,l]=p.useState({pagination:{current:1,pageSize:20}}),[h,i]=p.useState([]),f=(y,g,m)=>{l({pagination:y,filters:g,...m})};p.useEffect(()=>{(async()=>{n(await s({tableName:t,setError:a}))})()},[s,t]),p.useEffect(()=>{const y=Object.keys(k[t]).filter(m=>k[t][m]!=="ignore").map(m=>{const{type:w,width:C}=k[t][m];return{title:k[t][m].prettyHeading||m,dataIndex:["fields",m],key:m,width:C||200,sorter:Te(w,m),render:O=>O?e.jsx(be,{type:w,value:O}):""}}),g=[{title:"Update/Actions",dataIndex:"id",key:"id",width:250,sorter:(m,w)=>m.id.localeCompare(w.id),render:m=>e.jsx(U,{tableName:t,id:m})},...y];i(g)},[t]);const u=p.useCallback(y=>(g,{size:m})=>{i(w=>{const C=[...w];return C[y]={...C[y],width:m.width},C})},[]),x=h.map((y,g)=>({...y,onHeaderCell:m=>({width:m.width,onResize:u(g)})}));return r?e.jsx(le,{message:"Error",description:r,type:"error",showIcon:!0}):o?e.jsxs("div",{children:[e.jsx(je,{level:1,children:t}),e.jsx(de,{bordered:!0,tableLayout:"fixed",scroll:{x:"max-content"},components:{header:{cell:we}},dataSource:o,columns:x,rowKey:"id",pagination:d.pagination,onChange:f})]}):e.jsx(ce,{})},Te=(t,s)=>{switch(Array.isArray(t)?t[0]:t){case"text":case"multilineText":case"email":case"URL":case"singleSelect":return(o,n)=>{var d,l;const r=((d=o.fields[s])==null?void 0:d[0])||"",a=((l=n.fields[s])==null?void 0:l[0])||"";return r.localeCompare(a)};case"record":return(o,n)=>{var d,l;const r=((d=o.fields[s])==null?void 0:d[0])||"",a=((l=n.fields[s])==null?void 0:l[0])||"";return r.localeCompare(a)};case"checkbox":return(o,n)=>{const r=o.fields[s]?1:0,a=n.fields[s]?1:0;return r-a};case"button":case"image":default:return null}},Ce=()=>e.jsx(v,{tableName:"Authorized Users"}),Ae=()=>e.jsx(v,{tableName:"Companies"}),Se=()=>e.jsx(v,{tableName:"Events"}),ke=()=>e.jsx(v,{tableName:"People"}),I=({formFields:t,formName:s,records:o,onSearch:n,fieldMap:r})=>{const[a]=T.useForm(),[d,l]=p.useState([]);p.useEffect(()=>{l(o)},[o]);const h=(i,f)=>{n(f,l,o,r)};return e.jsx(e.Fragment,{children:e.jsxs(T,{form:a,name:s,layout:"vertical",onValuesChange:h,children:[t.map(({name:i,label:f})=>e.jsx(F,{gutter:16,children:e.jsx(ue,{span:24,children:e.jsx(T.Item,{name:i,label:f,children:e.jsx(V,{placeholder:f})})})},i)),e.jsx(z,{bordered:!0,dataSource:d,style:{cursor:"pointer",maxHeight:"200px",overflowY:"auto"},renderItem:i=>e.jsx(z.Item,{onClick:()=>{const f={};t.forEach(({name:u})=>{f[u]=i.fields[r[u]]}),a.setFieldsValue(f)},children:t.map(({name:f})=>i.fields[r[f]]).join(" ")})})]})})};I.propTypes={formFields:c.arrayOf(c.shape({name:c.string.isRequired,label:c.string.isRequired})).isRequired,records:c.arrayOf(c.object).isRequired,onSearch:c.func.isRequired,fieldMap:c.object.isRequired,formName:c.string.isRequired};const M=(t,s,o,n)=>{const r=o.filter(a=>{const d=a.fields;return Object.keys(n).every(l=>{const h=t[l],i=d[n[l]];return!h||(i==null?void 0:i.toLowerCase().includes(h.toLowerCase()))})});s(r)},{Title:P}=q,Re=()=>{const{people:t,companies:s,error:o}=ve(),[n,r]=p.useState(null),a=()=>r(null),d=()=>r(null),l={createPerson:{title:"Create Person",height:700,airtableUrl:"https://airtable.com/embed/appuwUqhc3geVVy1v/pagrtsVzEDZTVKptv/form"},createCompany:{title:"Create Company",height:700,airtableUrl:"https://airtable.com/embed/appuwUqhc3geVVy1v/pag33WEtSwkKTefN6/form"}},h={firstName:"First Name",lastName:"Last Name",email:"Email"},i={company:"Name"},f=[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"},{name:"email",label:"Email"}],u=[{name:"company",label:"Company"}];return e.jsxs("div",{style:{padding:"24px"},children:[n&&e.jsx(pe,{title:l[n].title,open:n,onOk:a,onCancel:d,footer:null,children:e.jsx("iframe",{className:"airtable-embed",src:l[n].airtableUrl,width:"100%",height:l[n].height,style:{background:"transparent",border:"1px solid #ccc"}})}),e.jsx(P,{level:2,children:"Add Contact"}),e.jsx(A,{}),e.jsx(P,{level:3,children:"Find Person"}),e.jsx(I,{formFields:f,records:t,onSearch:M,fieldMap:h,formName:"find_person"}),e.jsx(A,{}),e.jsx(F,{gutter:16,children:e.jsx(R,{type:"default",onClick:()=>r("createPerson"),children:"Create New Person"})}),e.jsx(A,{}),e.jsx(P,{level:3,children:"Find Company"}),e.jsx(I,{formFields:u,records:s,onSearch:M,fieldMap:i,formName:"find_company"}),e.jsx(A,{}),e.jsx(F,{gutter:16,children:e.jsx(R,{type:"default",onClick:()=>r("createCompany"),children:"Create New Company"})}),o&&e.jsxs("p",{children:["Error: ",o.message]})]})},ve=()=>{const{getTable:t}=S(),[s,o]=p.useState([]),[n,r]=p.useState([]),[a,d]=p.useState(null);return p.useEffect(()=>{const l=async(h,i)=>{i(await t({tableName:h,setError:d}))};l("People",o),l("Companies",r)},[t]),{people:s,companies:n,error:a}},D=({markdown:t})=>e.jsx(Pe,{children:e.jsx(ee,{children:t})});D.propTypes={markdown:c.string.isRequired};const Pe=Z.div`
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
`,{Title:Fe}=q,Le=`
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
`,Ie=()=>{const{airtableToken:t,updateAirtableToken:s}=S(),[o,n]=p.useState(""),r=te();p.useEffect(()=>{n(t||"")},[t]);const a=()=>{s(o),r("/help")};return e.jsxs(e.Fragment,{children:[e.jsx(D,{markdown:Le}),e.jsx(A,{}),e.jsx(Fe,{level:3,children:"Enter token now:"}),e.jsxs(T,{layout:"vertical",initialValues:{token:t},onFinish:a,children:[e.jsx(T.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(V,{value:o,onChange:d=>n(d.target.value),style:{width:"700px"}})}),e.jsx(T.Item,{children:e.jsx(R,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Ee=`
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

`,B=()=>e.jsx(D,{markdown:Ee}),{Header:qe,Content:Ue}=H,Ne=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(j,{to:"people",children:"People"})},{key:"companies",label:e.jsx(j,{to:"companies",children:"Companies"})},{key:"events",label:e.jsx(j,{to:"events",children:"Events"})},{key:"users",label:e.jsx(j,{to:"users",children:"Authorized Users"})}]},{key:"add_contact",label:e.jsx(j,{to:"add_contact",children:"Add Contact"})},{key:"config",label:e.jsx(j,{to:"config",children:"Config"})},{key:"help",label:e.jsx(j,{to:"help",children:"Help"})}],De=()=>{const{airtableToken:t,initializing:s}=S(),o=re();if(s)return null;console.log("location",o);const n=o.pathname.split("/").filter(Boolean),r=n.length>0?n:["help"];return console.log("selectedKeys",r),e.jsxs(H,{style:{height:"100vh"},children:[e.jsxs(qe,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:"BasisTech.png",alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(he,{mode:"horizontal",selectedKeys:r,items:Ne})]}),e.jsx(Ue,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(oe,{children:[e.jsx(b,{path:"/",element:e.jsx(B,{})}),e.jsx(b,{path:"people",element:e.jsx(ke,{})}),e.jsx(b,{path:"companies",element:e.jsx(Ae,{})}),e.jsx(b,{path:"events",element:e.jsx(Se,{})}),e.jsx(b,{path:"users",element:e.jsx(Ce,{})}),e.jsx(b,{path:"add_contact",element:e.jsx(Re,{})}),e.jsx(b,{path:"config",element:e.jsx(Ie,{})}),e.jsx(b,{path:"help",element:e.jsx(B,{})})]})})]})},Oe=()=>e.jsx($,{children:e.jsx(se,{children:e.jsx(De,{})})});ne.createRoot(document.getElementById("root")).render(e.jsx(ae.StrictMode,{children:e.jsx(Oe,{})}));export{Ke as a,_e as c,$e as g};
