"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8220],{6330:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=t(1527),r=t(7279),s=t(370),o=t(1804);const c={sidebar_label:"Native network balance"},l="Native network balances (ie. ETH, MATIC, etc.)",i={id:"indexer/native-network-balance",title:"Native network balances (ie. ETH, MATIC, etc.)",description:"Our Indexer service is now managed through Sequence Builder. Sign up to grab your API access key.",source:"@site/docs/200-indexer/07-native-network-balance.mdx",sourceDirName:"200-indexer",slug:"/indexer/native-network-balance",permalink:"/indexer/native-network-balance",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/200-indexer/07-native-network-balance.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_label:"Native network balance"},sidebar:"sidebar",previous:{title:"Token contract transaction history",permalink:"/indexer/transation-history-token-contract"},next:{title:"Metadata Tips & Spam",permalink:"/indexer/metadata-tips"}},u={},d=[{value:"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)",id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"native-network-balances-ie-eth-matic-etc",children:"Native network balances (ie. ETH, MATIC, etc.)"}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["INTRODUCING THE SEQUENCE BUILDER - ",(0,a.jsx)(n.a,{href:"https://sequence.build",children:"https://sequence.build"})]}),(0,a.jsxs)(n.p,{children:["Our ",(0,a.jsx)(n.strong,{children:"Indexer"})," service is now managed through ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://sequence.build",children:"Sequence Builder"})}),". Sign up to grab your API access key."]}),(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.a,{href:"https://sequence.build",children:["Get started with the ",(0,a.jsx)(n.strong,{children:"Sequence Builder"})," Free Plan today!"]})})]}),"\n",(0,a.jsx)(n.h3,{id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc",children:"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.em,{children:["Sequence Indexer ",(0,a.jsx)(n.code,{children:"GetEtherBalance"})," Method:"]})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Request: POST /rpc/Indexer/GetEtherBalance"}),"\n",(0,a.jsx)(n.li,{children:"Content-Type: application/json"}),"\n",(0,a.jsxs)(n.li,{children:["Body (in JSON):","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"accountAddress"})," (string) -- the wallet account address"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Example:\xa0",(0,a.jsx)(n.code,{children:"GetEtherBalance"}),"\xa0MATIC balance of a wallet account address on Polygon using an ",(0,a.jsx)(n.code,{children:"API_Access_Key"})]})}),"\n",(0,a.jsxs)("strong",{style:{color:"#fff8e6",background:"#be8a05",fontSize:16},children:["This code requires an API Access Key from ",(0,a.jsx)("a",{href:"https://sequence.build",style:{color:"#fff8e6",background:"#be8a05"},children:(0,a.jsx)("u",{children:(0,a.jsx)(n.strong,{children:"Sequence Builder"})})}),"."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"curl",label:"curl",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",metastring:"class=wrap",children:'curl -X POST -H "Content-Type: application/json" -H "X-Access-Key: c3bgcU3LkFR9Bp9jFssLenPAAAAAAAAAA" https://polygon-indexer.sequence.app/rpc/Indexer/GetEtherBalance -d \'{ "accountAddress": "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9" }\'\n'})})}),(0,a.jsx)(o.Z,{value:"js",label:"Javascript / Typescript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexer } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexer('https://polygon-indexer.sequence.app', 'c3bgcU3LkFR9Bp9jFssLenPAAAAAAAAAA')\n\n// try any account address you'd like :)\nconst accountAddress = '0xabc...'\n\n// query Sequence Indexer for the MATIC balance on Polygon\nconst balance = await indexer.getEtherBalance({\n\taccountAddress: accountAddress,\n})\n\t\nconsole.log('tokens in your account:', tokenBalances)\n"})})}),(0,a.jsx)(o.Z,{value:"golang",label:"Go",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'import (\n\t"context"\n\t"fmt"\n\t"log"\n\t"net/http"\n\n\t"github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTokenBalances(accountAddress string) {\n\tseqIndexer := indexer.NewIndexer("https://polygon-indexer.sequence.app", "c3bgcU3LkFR9Bp9jFssLenPAAAAAAAAAA")\n\n\tincludeMetadata := true\n\n\ttokenBalances, _, err := seqIndexer.GetTokenBalances(context.Background(), &accountAddress, nil, &includeMetadata, nil)\n\tif err != nil {\n\t\tlog.Fatal(err)\n\t}\n\tfmt.Println("tokenBalances:", tokenBalances)\n}\n'})})}),(0,a.jsx)(o.Z,{value:"other",label:"Other",children:(0,a.jsxs)(n.p,{children:["Please ",(0,a.jsx)(n.a,{href:"/support",children:"contact our team"})," for assistance with integrations to another target."]})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1804:(e,n,t)=>{t.d(n,{Z:()=>o});t(959);var a=t(5924);const r={tabItem:"tabItem_l_5p"};var s=t(1527);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},370:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(959),r=t(5924),s=t(74),o=t(8903),c=t(331),l=t(4053),i=t(3608),u=t(7979);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,d]=b({queryString:t,groupId:r}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=i??x;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(9506);const f={tabList:"tabList_Pq82",tabItem:"tabItem_kpXA"};var g=t(1527);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=c[t].value;r!==a&&(i(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(A,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(n))}},7279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var a=t(959);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);