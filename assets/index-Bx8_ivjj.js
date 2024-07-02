import{r as m,P as l,F as e,G as _,M as X,H as J,I as Q,J as Z,K as ee,L as b,N as te,O as w,Q as re,t as se}from"./vendor-fKlLFo6Z.js";import{T as R,B,I as ne,A as oe,S as ie,F as ae,a as M,D as le,b as S,c as ce,L as $,M as de}from"./antd-DLjH7p-Y.js";import"./index-Bx8_ivjj.js";import"./rc-D_jUX0dP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Be(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const ue=async(t,r,n)=>{const a=[];let s=null;do{const o=new URL(`https://api.airtable.com/v0/${r}/${n}`);s&&o.searchParams.append("offset",s);const u=await fetch(o.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!u.ok)throw new Error("Failed to fetch data from Airtable");const y=await u.json();a.push(...y.records),s=y.offset}while(s);return a},pe=t=>{const n=t.split("").reverse().map(a=>String.fromCharCode(a.charCodeAt(0)^42)).join("");return btoa(n)},he=t=>atob(t).split("").map(a=>String.fromCharCode(a.charCodeAt(0)^42)).reverse().join(""),z=m.createContext(),C=()=>m.useContext(z),H=({children:t})=>{const r="appuwUqhc3geVVy1v",[n,a]=m.useState(""),[s,o]=m.useState({}),[u,y]=m.useState(!0),h={};m.useEffect(()=>{const d=localStorage.getItem("airtableToken");d&&a(he(d)),y(!1)},[]);const c=d=>{const i=pe(d);a(d),localStorage.setItem("airtableToken",i)},j=async({tableName:d,setError:i,cachedOk:g=!0})=>{if(g&&s[d])return s[d];if(h[d])return h[d];if(n)try{return h[d]=ue(n,r,d).then(f=>(o(x=>({...x,[d]:f})),delete h[d],f)).catch(f=>{throw i(f.message),delete h[d],f}),h[d]}catch(f){i(f.message)}else i("Missing Airtable access token")};return e.jsx(z.Provider,{value:{airtableToken:n,updateAirtableToken:c,baseId:r,initializing:u,getTable:j},children:t})};H.propTypes={children:l.node.isRequired};const P=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});P.propTypes={text:l.oneOfType([l.string,l.arrayOf(l.string)]).isRequired};const L=({id:t,tableName:r})=>{const{getTable:n}=C(),[a,s]=m.useState(null),[o,u]=m.useState([]);if(m.useEffect(()=>{(async()=>{const c=await n({tableName:r,setError:s});u(c)})()},[n,r]),!o.length)return"";const y=({id:h})=>{var d;const c=o.find(i=>i.id===h),j=(d=c==null?void 0:c.fields)==null?void 0:d["Update Record"];return j?e.jsx(I,{url:j.url,label:c.fields.Name||"???"}):e.jsx(R,{color:"orange",children:(c==null?void 0:c.fields.Name)||(c==null?void 0:c.fields["Record Key"])||(c==null?void 0:c.fields.Company)||h})};return Array.isArray(t)?t.map(h=>e.jsx(y,{id:h},h)):e.jsx(y,{id:t})};L.propTypes={id:l.oneOfType([l.string,l.arrayOf(l.string)]).isRequired,tableName:l.string.isRequired};const N=({option:t})=>e.jsx(R,{color:"blue",children:t});N.propTypes={option:l.string.isRequired};const G=({options:t})=>e.jsx(e.Fragment,{children:t.map((r,n)=>e.jsx(R,{children:r},n))});G.propTypes={options:l.arrayOf(l.string).isRequired};const fe=t=>e.jsx("span",{children:t?"Yes":"No"}),I=({url:t,label:r})=>{const n=a=>{const{clientX:s,clientY:o,screenX:u,screenY:y}=a;ge({url:t,mouseX:s,mouseY:o,screenX:u,screenY:y})};return e.jsx(B,{onClick:n,children:r})};I.propTypes={url:l.string.isRequired,label:l.string.isRequired};const ge=({url:t,mouseX:r,mouseY:n,screenX:a,screenY:s})=>{const y=Math.round(s+n-512),h=Math.round(a+r-768/2),c=`width=768, height=1024, top=${y}, left=${h}`;window.open(t,"_blank",`toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, ${c}`)},V=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});V.propTypes={email:l.string.isRequired};const W=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});W.propTypes={url:l.string.isRequired};const K=({date:t})=>{const r=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:r})};K.propTypes={date:l.string.isRequired};const Y=({attachments:t})=>{const r=t==null?void 0:t[0];return e.jsx(ne,{src:r.url,alt:r.filename,width:"160px"})};Y.propTypes={attachments:l.arrayOf(l.shape({url:l.string.isRequired,filename:l.string.isRequired})).isRequired};const me=({type:t,value:r})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(L,{tableName:t[1],id:r}):"";switch(t){case"ignore":return"";case"URL":return e.jsx(W,{url:r});case"email":return e.jsx(V,{email:r});case"button":return e.jsx(I,{url:r==null?void 0:r.url,label:r==null?void 0:r.label});case"date":return e.jsx(K,{date:r});case"image":return e.jsx(Y,{attachments:r});case"text":return e.jsx(P,{text:r});case"multilineText":return e.jsx(P,{text:r});case"singleSelect":return e.jsx(N,{option:r});case"multipleSelect":return e.jsx(G,{options:r});case"checkbox":return e.jsx(fe,{checked:r});default:return console.error("Can't handle type {type} for",r),e.jsxs("span",{children:[JSON.stringify(r)," "]})}},{Title:ye}=M,k={People:{"First Name":{type:"text"},"Last Name":{type:"text"},Email:{type:"email"},Companies:{type:["record","Companies"]},Role:{type:"text"},Tags:{type:"multipleSelect"},LinkedIn:{type:"URL",prettyHeading:"LinkedIn URL"},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL"}},Companies:{Name:{type:"text",prettyHeading:"Company Name"},"Primary Contact":{type:["record","People"]},"Home Page":{type:"URL"},Tagline:{type:"text"},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL"},"Organization Type":{type:"singleSelect"},Headquarters:{type:"text"},Investor:{type:"checkbox"},Interests:{type:"multipleSelect"},"BT Invest Status":{type:"singleSelect"},"Portfolio Logo Permission":{type:"checkbox"},"Logo URL":{type:"URL"},Logo:{type:"image"},"Listed on BasisTech Website":{type:"checkbox"},Accelerator:{type:"ignore"},"(legacy) Funnel":{type:"ignore"},"To Company (for Fillout)":{type:"ignore"},"Legacy Notes":{type:"multilineText"},"Company notes":{type:["record","Company notes"]}},Events:{Name:{type:"text"},Date:{type:"date"},Description:{type:"multilineText"},Status:{type:"singleSelect"},Speakers:{type:["record","People"]}}},D=({tableName:t})=>{const{getTable:r}=C(),[n,a]=m.useState(null),[s,o]=m.useState(null),[u,y]=m.useState({pagination:{current:1,pageSize:20}}),h=(i,g,f)=>{y({pagination:i,filters:g,...f})};if(m.useEffect(()=>{(async()=>{a(await r({tableName:t,setError:o}))})()},[r,t]),s)return e.jsx(oe,{message:"Error",description:s,type:"error",showIcon:!0});if(!n)return e.jsx(ie,{});const c=(i,g)=>{switch(Array.isArray(i)?i[0]:i){case"text":case"multilineText":case"URL":case"singleSelect":return(f,x)=>{const T=f.fields[g]||"",A=x.fields[g]||"";return T.localeCompare(A)};case"record":return(f,x)=>{var q,E;const T=((q=f.fields[g])==null?void 0:q[0])||"",A=((E=x.fields[g])==null?void 0:E[0])||"";return T.localeCompare(A)};case"checkbox":return(f,x)=>{const T=f.fields[g]?1:0,A=x.fields[g]?1:0;return T-A};case"button":case"image":default:return null}},j=Object.keys(k[t]).filter(i=>k[t][i]!=="ignore").map(i=>{const g=k[t][i].type;return{title:k[t][i].prettyHeading||i,dataIndex:["fields",i],key:i,sorter:c(g,i),render:x=>x?e.jsx(me,{type:g,value:x}):""}}),d=[{title:"Update/Actions",dataIndex:"id",key:"id",sorter:(i,g)=>i.id.localeCompare(g.id),render:i=>e.jsx(L,{tableName:t,id:i})},...j];return e.jsxs("div",{children:[e.jsx(ye,{level:1,children:t}),e.jsx(ae,{dataSource:n,columns:d,rowKey:"id",pagination:u.pagination,onChange:h})]})},xe=()=>e.jsx(D,{tableName:"People"}),be=()=>e.jsx(D,{tableName:"Companies"}),je=()=>e.jsx(D,{tableName:"Events"}),we=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Funnel"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),U="flowboard",p=t=>t?`/${U}/${t}`:`/${U}`,F=({markdown:t})=>e.jsx(Te,{children:e.jsx(X,{children:t})});F.propTypes={markdown:l.string.isRequired};const Te=_.div`
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
`,{Title:Ae}=M,O="config",v="companies",ke=`
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
`,Ce=()=>{const{airtableToken:t,updateAirtableToken:r}=C(),[n,a]=m.useState(""),s=J();m.useEffect(()=>{a(t||"")},[t]);const o=()=>{r(n),s(p(v))};return e.jsxs("div",{children:[e.jsx(F,{markdown:ke}),e.jsx(le,{}),e.jsx(Ae,{level:3,children:"Enter token now:"}),e.jsxs(S,{layout:"vertical",initialValues:{token:t},onFinish:o,children:[e.jsx(S.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(ce,{value:n,onChange:u=>a(u.target.value),style:{width:"700px"}})}),e.jsx(S.Item,{children:e.jsx(B,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Se=`
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

`,Pe=()=>e.jsx(F,{markdown:Se}),{Header:ve,Content:Re}=$,Le=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(w,{to:p("people"),children:"People"})},{key:"companies",label:e.jsx(w,{to:p("companies"),children:"Companies"})},{key:"events",label:e.jsx(w,{to:p("events"),children:"Events"})}]},{key:"funnel",label:e.jsx(w,{to:p("funnel"),children:"Funnel"})},{key:"config",label:e.jsx(w,{to:p("config"),children:"Config"})},{key:"help",label:e.jsx(w,{to:p("help"),children:"Help"})}],Ie=()=>{const{airtableToken:t,initializing:r}=C(),n=Z();if(r)return null;const a=p("").replace(/\/$/,""),o=n.pathname.replace(a,"").split("/")[1]||(t?v:O),u=n.pathname===a+"/"||n.pathname===a;return e.jsxs($,{style:{height:"100vh"},children:[e.jsxs(ve,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:p("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(de,{mode:"horizontal",selectedKeys:[o],items:Le})]}),e.jsx(Re,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(ee,{children:[u&&e.jsx(b,{path:p(""),element:e.jsx(te,{to:p(t?v:O)})}),e.jsx(b,{path:p("people"),element:e.jsx(xe,{})}),e.jsx(b,{path:p("companies"),element:e.jsx(be,{})}),e.jsx(b,{path:p("events"),element:e.jsx(je,{})}),e.jsx(b,{path:p("funnel"),element:e.jsx(we,{})}),e.jsx(b,{path:p("config"),element:e.jsx(Ce,{})}),e.jsx(b,{path:p("help"),element:e.jsx(Pe,{})})]})})]})},De=()=>e.jsx(H,{children:e.jsx(Q,{children:e.jsx(Ie,{})})});re.createRoot(document.getElementById("root")).render(e.jsx(se.StrictMode,{children:e.jsx(De,{})}));export{Oe as c,Be as g};
