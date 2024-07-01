import{r as m,P as l,F as e,G as _,M as X,H as J,I as Q,J as Z,K as ee,L as b,N as te,O as w,Q as se,t as oe}from"./vendor-DAZJsqaT.js";import{T as R,B,I as ne,A as re,S as ie,F as ae,a as M,D as le,b as S,c as ce,L as $,M as de}from"./antd-C-VMs3dI.js";import"./index-Cyc0nIu3.js";import"./rc-wfKwzMnN.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Be(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const ue=async(t,s,n)=>{const i=[];let o=null;do{const r=new URL(`https://api.airtable.com/v0/${s}/${n}`);o&&r.searchParams.append("offset",o);const u=await fetch(r.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!u.ok)throw new Error("Failed to fetch data from Airtable");const y=await u.json();i.push(...y.records),o=y.offset}while(o);return i},pe=t=>{const n=t.split("").reverse().map(i=>String.fromCharCode(i.charCodeAt(0)^42)).join("");return btoa(n)},he=t=>atob(t).split("").map(i=>String.fromCharCode(i.charCodeAt(0)^42)).reverse().join(""),z=m.createContext(),C=()=>m.useContext(z),H=({children:t})=>{const s="appuwUqhc3geVVy1v",[n,i]=m.useState(""),[o,r]=m.useState({}),[u,y]=m.useState(!0),h={};m.useEffect(()=>{const c=localStorage.getItem("airtableToken");c&&i(he(c)),y(!1)},[]);const d=c=>{const a=pe(c);i(c),localStorage.setItem("airtableToken",a)},j=async({tableName:c,setError:a,cachedOk:g=!0})=>{if(g&&o[c])return o[c];if(h[c])return h[c];if(n)try{return console.log("Fetching",c),h[c]=ue(n,s,c).then(f=>(r(x=>({...x,[c]:f})),delete h[c],f)).catch(f=>{throw a(f.message),delete h[c],f}),h[c]}catch(f){a(f.message)}else a("Missing Airtable access token")};return e.jsx(z.Provider,{value:{airtableToken:n,updateAirtableToken:d,baseId:s,initializing:u,getTable:j},children:t})};H.propTypes={children:l.node.isRequired};const P=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});P.propTypes={text:l.oneOfType([l.string,l.arrayOf(l.string)]).isRequired};const L=({id:t,tableName:s})=>{const{getTable:n}=C(),[i,o]=m.useState(null),[r,u]=m.useState([]);if(m.useEffect(()=>{(async()=>{const d=await n({tableName:s,setError:o});u(d)})()},[n,s]),!r.length)return"";const y=({id:h})=>{var c;const d=r.find(a=>a.id===h),j=(c=d==null?void 0:d.fields)==null?void 0:c["Update Record"];return j?e.jsx(I,{url:j.url,label:d.fields.Name||"???"}):e.jsx(R,{color:"orange",children:(d==null?void 0:d.fields.Name)||(d==null?void 0:d.fields["Record Key"])||(d==null?void 0:d.fields.Company)||h})};return Array.isArray(t)?t.map(h=>e.jsx(y,{id:h},h)):e.jsx(y,{id:t})};L.propTypes={id:l.oneOfType([l.string,l.arrayOf(l.string)]).isRequired,tableName:l.string.isRequired};const N=({option:t})=>e.jsx(R,{color:"blue",children:t});N.propTypes={option:l.string.isRequired};const G=({options:t})=>e.jsx(e.Fragment,{children:t.map((s,n)=>e.jsx(R,{children:s},n))});G.propTypes={options:l.arrayOf(l.string).isRequired};const fe=t=>e.jsx("span",{children:t?"Yes":"No"}),I=({url:t,label:s})=>{const n=i=>{const{clientX:o,clientY:r,screenX:u,screenY:y}=i;ge({url:t,mouseX:o,mouseY:r,screenX:u,screenY:y})};return e.jsx(B,{onClick:n,children:s})};I.propTypes={url:l.string.isRequired,label:l.string.isRequired};const ge=({url:t,mouseX:s,mouseY:n,screenX:i,screenY:o})=>{const y=Math.round(o+n-512),h=Math.round(i+s-768/2),d=`width=768, height=1024, top=${y}, left=${h}`;window.open(t,"_blank",`toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, ${d}`)},V=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});V.propTypes={email:l.string.isRequired};const W=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});W.propTypes={url:l.string.isRequired};const K=({date:t})=>{const s=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:s})};K.propTypes={date:l.string.isRequired};const Y=({attachments:t})=>{const s=t==null?void 0:t[0];return e.jsx(ne,{src:s.url,alt:s.filename,width:"160px"})};Y.propTypes={attachments:l.arrayOf(l.shape({url:l.string.isRequired,filename:l.string.isRequired})).isRequired};const me=({type:t,value:s})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(L,{tableName:t[1],id:s}):"";switch(t){case"ignore":return"";case"URL":return e.jsx(W,{url:s});case"email":return e.jsx(V,{email:s});case"button":return e.jsx(I,{url:s==null?void 0:s.url,label:s==null?void 0:s.label});case"date":return e.jsx(K,{date:s});case"image":return e.jsx(Y,{attachments:s});case"text":return e.jsx(P,{text:s});case"multilineText":return e.jsx(P,{text:s});case"singleSelect":return e.jsx(N,{option:s});case"multipleSelect":return e.jsx(G,{options:s});case"checkbox":return e.jsx(fe,{checked:s});default:return console.error("Can't handle type {type} for",s),e.jsxs("span",{children:[JSON.stringify(s)," "]})}},{Title:ye}=M,k={People:{"First Name":{type:"text"},"Last Name":{type:"text"},Email:{type:"email"},Companies:{type:["record","Companies"]},Role:{type:"text"},Tags:{type:"multipleSelect"},LinkedIn:{type:"URL",prettyHeading:"LinkedIn URL"},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL"}},Companies:{Name:{type:"text",prettyHeading:"Company Name"},"Primary Contact":{type:["record","People"]},"Home Page":{type:"URL"},Tagline:{type:"text"},Crunchbase:{type:"URL",prettyHeading:"Crunchbase URL"},"Organization Type":{type:"singleSelect"},Headquarters:{type:"text"},Investor:{type:"checkbox"},Interests:{type:"multipleSelect"},"BT Invest Status":{type:"singleSelect"},"Portfolio Logo Permission":{type:"checkbox"},"Logo URL":{type:"URL"},Logo:{type:"image"},"Listed on BasisTech Website":{type:"checkbox"},Accelerator:{type:"ignore"},"(legacy) Funnel":{type:"ignore"},"To Company (for Fillout)":{type:"ignore"},"Legacy Notes":{type:"multilineText"},"Company notes":{type:["record","Company notes"]}},Events:{Name:{type:"text"},Date:{type:"date"},Description:{type:"multilineText"},Status:{type:"singleSelect"},Speakers:{type:["record","People"]}}},D=({tableName:t})=>{const{getTable:s}=C(),[n,i]=m.useState(null),[o,r]=m.useState(null),[u,y]=m.useState({pagination:{current:1,pageSize:20}}),h=(a,g,f)=>{y({pagination:a,filters:g,...f})};if(m.useEffect(()=>{(async()=>{i(await s({tableName:t,setError:r}))})()},[s,t]),o)return e.jsx(re,{message:"Error",description:o,type:"error",showIcon:!0});if(!n)return e.jsx(ie,{});const d=(a,g)=>{switch(Array.isArray(a)?a[0]:a){case"text":case"multilineText":case"URL":case"singleSelect":return(f,x)=>{const T=f.fields[g]||"",A=x.fields[g]||"";return T.localeCompare(A)};case"record":return(f,x)=>{var q,E;const T=((q=f.fields[g])==null?void 0:q[0])||"",A=((E=x.fields[g])==null?void 0:E[0])||"";return T.localeCompare(A)};case"checkbox":return(f,x)=>{const T=f.fields[g]?1:0,A=x.fields[g]?1:0;return T-A};case"button":case"image":default:return null}},j=Object.keys(k[t]).filter(a=>k[t][a]!=="ignore").map(a=>{const g=k[t][a].type;return{title:k[t][a].prettyHeading||a,dataIndex:["fields",a],key:a,sorter:d(g,a),render:x=>x?e.jsx(me,{type:g,value:x}):()=>""}}),c=[{title:"Update/Actions",dataIndex:"id",key:"id",sorter:(a,g)=>a.id.localeCompare(g.id),render:a=>e.jsx(L,{tableName:t,id:a})},...j];return e.jsxs("div",{children:[e.jsx(ye,{level:1,children:t}),e.jsx(ae,{dataSource:n,columns:c,rowKey:"id",pagination:u.pagination,onChange:h})]})},xe=()=>e.jsx(D,{tableName:"People"}),be=()=>e.jsx(D,{tableName:"Companies"}),je=()=>e.jsx(D,{tableName:"Events"}),we=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Funnel"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),U="flowboard",p=t=>t?`/${U}/${t}`:`/${U}`,F=({markdown:t})=>e.jsx(Te,{children:e.jsx(X,{children:t})});F.propTypes={markdown:l.string.isRequired};const Te=_.div`
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
`,Ce=()=>{const{airtableToken:t,updateAirtableToken:s}=C(),[n,i]=m.useState(""),o=J();m.useEffect(()=>{i(t||"")},[t]);const r=()=>{s(n),o(p(v))};return e.jsxs("div",{children:[e.jsx(F,{markdown:ke}),e.jsx(le,{}),e.jsx(Ae,{level:3,children:"Enter token now:"}),e.jsxs(S,{layout:"vertical",initialValues:{token:t},onFinish:r,children:[e.jsx(S.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(ce,{value:n,onChange:u=>i(u.target.value),style:{width:"700px"}})}),e.jsx(S.Item,{children:e.jsx(B,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Se=`
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

`,Pe=()=>e.jsx(F,{markdown:Se}),{Header:ve,Content:Re}=$,Le=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(w,{to:p("people"),children:"People"})},{key:"companies",label:e.jsx(w,{to:p("companies"),children:"Companies"})},{key:"events",label:e.jsx(w,{to:p("events"),children:"Events"})}]},{key:"funnel",label:e.jsx(w,{to:p("funnel"),children:"Funnel"})},{key:"config",label:e.jsx(w,{to:p("config"),children:"Config"})},{key:"help",label:e.jsx(w,{to:p("help"),children:"Help"})}],Ie=()=>{const{airtableToken:t,initializing:s}=C(),n=Z();if(s)return null;const i=p("").replace(/\/$/,""),r=n.pathname.replace(i,"").split("/")[1]||(t?v:O),u=n.pathname===i+"/"||n.pathname===i;return console.log("DBG",{location:n,basePath:i}),e.jsxs($,{style:{height:"100vh"},children:[e.jsxs(ve,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:p("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(de,{mode:"horizontal",selectedKeys:[r],items:Le})]}),e.jsx(Re,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(ee,{children:[u&&e.jsx(b,{path:p(""),element:e.jsx(te,{to:p(t?v:O)})}),e.jsx(b,{path:p("people"),element:e.jsx(xe,{})}),e.jsx(b,{path:p("companies"),element:e.jsx(be,{})}),e.jsx(b,{path:p("events"),element:e.jsx(je,{})}),e.jsx(b,{path:p("funnel"),element:e.jsx(we,{})}),e.jsx(b,{path:p("config"),element:e.jsx(Ce,{})}),e.jsx(b,{path:p("help"),element:e.jsx(Pe,{})})]})})]})},De=()=>e.jsx(H,{children:e.jsx(Q,{children:e.jsx(Ie,{})})});se.createRoot(document.getElementById("root")).render(e.jsx(oe.StrictMode,{children:e.jsx(De,{})}));export{Oe as c,Be as g};
