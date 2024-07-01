import{r as m,P as l,F as e,G as _,M as X,H as J,I as Q,J as Z,K as ee,L as y,N as te,O as w,Q as se,t as oe}from"./vendor-DFpsB0lT.js";import{T as R,B as M,I as re,A as ne,S as ie,F as ae,a as U,D as le,b as C,c as ce,L as $,M as de}from"./antd-obINFLnf.js";import"./index-BIh2XBkj.js";import"./rc-DASbao_9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();var Be=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Me(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}const ue=async(t,s,r)=>{const i=[];let o=null;do{const n=new URL(`https://api.airtable.com/v0/${s}/${r}`);o&&n.searchParams.append("offset",o);const u=await fetch(n.toString(),{headers:{Authorization:`Bearer ${t}`}});if(!u.ok)throw new Error("Failed to fetch data from Airtable");const x=await u.json();i.push(...x.records),o=x.offset}while(o);return i},pe=t=>{const r=t.split("").reverse().map(i=>String.fromCharCode(i.charCodeAt(0)^42)).join("");return btoa(r)},he=t=>atob(t).split("").map(i=>String.fromCharCode(i.charCodeAt(0)^42)).reverse().join(""),z=m.createContext(),k=()=>m.useContext(z),N=({children:t})=>{const s="appuwUqhc3geVVy1v",[r,i]=m.useState(""),[o,n]=m.useState({}),[u,x]=m.useState(!0),f={};m.useEffect(()=>{const c=localStorage.getItem("airtableToken");c&&i(he(c)),x(!1)},[]);const d=c=>{const a=pe(c);i(c),localStorage.setItem("airtableToken",a)},j=async({tableName:c,setError:a,cachedOk:g=!0})=>{if(g&&o[c])return o[c];if(f[c])return f[c];if(r)try{return console.log("Fetching",c),f[c]=ue(r,s,c).then(p=>(n(b=>({...b,[c]:p})),delete f[c],p)).catch(p=>{throw a(p.message),delete f[c],p}),f[c]}catch(p){a(p.message)}else a("Missing Airtable access token")};return e.jsx(z.Provider,{value:{airtableToken:r,updateAirtableToken:d,baseId:s,initializing:u,getTable:j},children:t})};N.propTypes={children:l.node.isRequired};const P=({text:t})=>Array.isArray(t)?e.jsx("span",{children:t.join(", ")}):e.jsx("span",{children:t});P.propTypes={text:l.oneOfType([l.string,l.arrayOf(l.string)]).isRequired};const I=({id:t,tableName:s})=>{const{getTable:r}=k(),[i,o]=m.useState(null),[n,u]=m.useState([]);if(m.useEffect(()=>{(async()=>{const d=await r({tableName:s,setError:o});u(d)})()},[r,s]),!n.length)return"";const x=({id:f})=>{var c;const d=n.find(a=>a.id===f),j=(c=d==null?void 0:d.fields)==null?void 0:c["Update Record"];return j?e.jsx(L,{url:j.url,label:d.fields.Name||"???"}):e.jsx(R,{color:"orange",children:(d==null?void 0:d.fields.Name)||(d==null?void 0:d.fields["Record Key"])||(d==null?void 0:d.fields.Company)||f})};return Array.isArray(t)?t.map(f=>e.jsx(x,{id:f},f)):e.jsx(x,{id:t})};I.propTypes={id:l.oneOfType([l.string,l.arrayOf(l.string)]).isRequired,tableName:l.string.isRequired};const H=({option:t})=>e.jsx(R,{color:"blue",children:t});H.propTypes={option:l.string.isRequired};const G=({options:t})=>e.jsx(e.Fragment,{children:t.map((s,r)=>e.jsx(R,{children:s},r))});G.propTypes={options:l.arrayOf(l.string).isRequired};const fe=t=>e.jsx("span",{children:t?"Yes":"No"}),L=({url:t,label:s})=>{const r=i=>{const{clientX:o,clientY:n,screenX:u,screenY:x}=i;ge({url:t,mouseX:o,mouseY:n,screenX:u,screenY:x})};return e.jsx(M,{onClick:r,children:s})};L.propTypes={url:l.string.isRequired,label:l.string.isRequired};const ge=({url:t,mouseX:s,mouseY:r,screenX:i,screenY:o})=>{const x=Math.round(o+r-512),f=Math.round(i+s-768/2),d=`width=768, height=1024, top=${x}, left=${f}`;window.open(t,"_blank",`toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, ${d}`)},V=({email:t})=>e.jsx("a",{href:`mailto:${t}`,children:t});V.propTypes={email:l.string.isRequired};const W=({url:t})=>e.jsx("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t});W.propTypes={url:l.string.isRequired};const K=({date:t})=>{const s=new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsx("span",{children:s})};K.propTypes={date:l.string.isRequired};const Y=({attachments:t})=>{const s=t==null?void 0:t[0];return e.jsx(re,{src:s.url,alt:s.filename,width:"160px"})};Y.propTypes={attachments:l.arrayOf(l.shape({url:l.string.isRequired,filename:l.string.isRequired})).isRequired};const me=({type:t,value:s})=>{if(Array.isArray(t))return t[0]=="record"?e.jsx(I,{tableName:t[1],id:s}):"";switch(t){case"ignore":return"";case"URL":return e.jsx(W,{url:s});case"email":return e.jsx(V,{email:s});case"button":return e.jsx(L,{url:s==null?void 0:s.url,label:s==null?void 0:s.label});case"date":return e.jsx(K,{date:s});case"image":return e.jsx(Y,{attachments:s});case"text":return e.jsx(P,{text:s});case"multilineText":return e.jsx(P,{text:s});case"singleSelect":return e.jsx(H,{option:s});case"multipleSelect":return e.jsx(G,{options:s});case"checkbox":return e.jsx(fe,{checked:s});default:return console.error("Can't handle type {type} for",s),e.jsxs("span",{children:[JSON.stringify(s)," "]})}},{Title:xe}=U,S={People:{"First Name":"text","Last Name":"text",Email:"email",Companies:["record","Companies"],Role:"text",Tags:"multipleSelect",LinkedIn:"URL",Crunchbase:"URL"},Companies:{Name:"text","Primary Contact":["record","People"],"Home Page":"URL",Tagline:"text",Crunchbase:"URL","Organization Type":"singleSelect",Headquarters:"text",Investor:"checkbox",Interests:"multipleSelect","BT Invest Status":"singleSelect","Portfolio Logo Permission":"checkbox","Logo URL":"URL",Logo:"image","Listed on BasisTech Website":"checkbox",Accelerator:"ignore","(legacy) Funnel":"ignore","To Company (for Fillout)":"ignore","Legacy Notes":"multilineText","Company notes":["record","Company notes"]},Events:{Name:"text",Date:"date",Description:"multilineText",Status:"singleSelect",Speakers:["record","People"]}},D=({tableName:t})=>{const{getTable:s}=k(),[r,i]=m.useState(null),[o,n]=m.useState(null),[u,x]=m.useState({pagination:{current:1,pageSize:20}}),f=(a,g,p)=>{x({pagination:a,filters:g,...p})};if(m.useEffect(()=>{(async()=>{i(await s({tableName:t,setError:n}))})()},[s,t]),o)return e.jsx(ne,{message:"Error",description:o,type:"error",showIcon:!0});if(!r)return e.jsx(ie,{});const d=(a,g)=>{switch(Array.isArray(a)?a[0]:a){case"text":case"multilineText":case"URL":case"singleSelect":return(p,b)=>{const T=p.fields[g]||"",A=b.fields[g]||"";return T.localeCompare(A)};case"record":return(p,b)=>{var q,E;const T=((q=p.fields[g])==null?void 0:q[0])||"",A=((E=b.fields[g])==null?void 0:E[0])||"";return T.localeCompare(A)};case"checkbox":return(p,b)=>{const T=p.fields[g]?1:0,A=b.fields[g]?1:0;return T-A};case"button":case"image":default:return null}},j=Object.keys(S[t]).filter(a=>S[t][a]!=="ignore").map(a=>{const g=S[t][a];return{title:a,dataIndex:["fields",a],key:a,sorter:d(g,a),render:p=>p?e.jsx(me,{type:g,value:p}):()=>""}}),c=[{title:"ID",dataIndex:"id",key:"id",sorter:(a,g)=>a.id.localeCompare(g.id),render:a=>e.jsx(I,{tableName:t,id:a})},...j];return e.jsxs("div",{children:[e.jsx(xe,{level:1,children:t}),e.jsx(ae,{dataSource:r,columns:c,rowKey:"id",pagination:u.pagination,onChange:f})]})},be=()=>e.jsx(D,{tableName:"People"}),ye=()=>e.jsx(D,{tableName:"Companies"}),je=()=>e.jsx(D,{tableName:"Events"}),we=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Funnel"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus nec felis feugiat cursus. Nulla facilisi. Integer at magna a orci tincidunt fermentum sit amet ac nulla."})]}),O="flowboard",h=t=>t?`/${O}/${t}`:`/${O}`,F=({markdown:t})=>e.jsx(Te,{children:e.jsx(X,{children:t})});F.propTypes={markdown:l.string.isRequired};const Te=_.div`
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
`,{Title:Ae}=U,B="config",v="companies",ke=`
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
`,Ce=()=>{const{airtableToken:t,updateAirtableToken:s}=k(),[r,i]=m.useState(""),o=J();m.useEffect(()=>{i(t||"")},[t]);const n=()=>{s(r),o(h(v))};return e.jsxs("div",{children:[e.jsx(F,{markdown:ke}),e.jsx(le,{}),e.jsx(Ae,{level:3,children:"Enter token now:"}),e.jsxs(C,{layout:"vertical",initialValues:{token:t},onFinish:n,children:[e.jsx(C.Item,{label:"Airtable Token",name:"token",rules:[{required:!0,message:"Please input your Airtable token!"}],children:e.jsx(ce,{value:r,onChange:u=>i(u.target.value),style:{width:"700px"}})}),e.jsx(C.Item,{children:e.jsx(M,{type:"primary",htmlType:"submit",children:"Save Token"})})]})]})},Se=`
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

`,Pe=()=>e.jsx(F,{markdown:Se}),{Header:ve,Content:Re}=$,Ie=[{key:"views",label:"Views",children:[{key:"people",label:e.jsx(w,{to:h("people"),children:"People"})},{key:"companies",label:e.jsx(w,{to:h("companies"),children:"Companies"})},{key:"events",label:e.jsx(w,{to:h("events"),children:"Events"})}]},{key:"funnel",label:e.jsx(w,{to:h("funnel"),children:"Funnel"})},{key:"config",label:e.jsx(w,{to:h("config"),children:"Config"})},{key:"help",label:e.jsx(w,{to:h("help"),children:"Help"})}],Le=()=>{const{airtableToken:t,initializing:s}=k(),r=Z();if(s)return null;const i=h("").replace(/\/$/,""),n=r.pathname.replace(i,"").split("/")[1]||(t?v:B),u=r.pathname===i+"/"||r.pathname===i;return e.jsxs($,{style:{height:"100vh"},children:[e.jsxs(ve,{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx("img",{src:h("BasisTech.png"),alt:"BasisTech Logo",style:{height:"31px",margin:"16px 24px 16px 0"}})}),e.jsx(de,{mode:"horizontal",selectedKeys:[n],items:Ie})]}),e.jsx(Re,{style:{marginTop:64,padding:"0 24px",background:"#fff"},children:e.jsxs(ee,{children:[u&&e.jsx(y,{path:h(""),element:e.jsx(te,{to:h(t?v:B)})}),e.jsx(y,{path:h("people"),element:e.jsx(be,{})}),e.jsx(y,{path:h("companies"),element:e.jsx(ye,{})}),e.jsx(y,{path:h("events"),element:e.jsx(je,{})}),e.jsx(y,{path:h("funnel"),element:e.jsx(we,{})}),e.jsx(y,{path:h("config"),element:e.jsx(Ce,{})}),e.jsx(y,{path:h("help"),element:e.jsx(Pe,{})})]})})]})},De=()=>e.jsx(N,{children:e.jsx(Q,{children:e.jsx(Le,{})})});se.createRoot(document.getElementById("root")).render(e.jsx(oe.StrictMode,{children:e.jsx(De,{})}));export{Be as c,Me as g};
