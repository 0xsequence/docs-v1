"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[1069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){const{lazy:t,block:n,defaultValue:l,values:p,groupId:m,className:y}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,i.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.U)(),[x,N]=(0,r.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==x&&h.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==x&&(w(t),N(a),null!=m&&v(m,String(a)))},C=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},y)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:C,onClick:O},l,{className:(0,o.Z)("tabs__item",d,l?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},2066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_label:"Wallet transaction history"},s="Wallet transaction history",c={unversionedId:"indexer/guides/transaction-history",id:"indexer/guides/transaction-history",title:"Wallet transaction history",description:"Fetch the transaction history for any wallet address",source:"@site/docs/04-indexer/03-guides/03-transaction-history.mdx",sourceDirName:"04-indexer/03-guides",slug:"/indexer/guides/transaction-history",permalink:"/indexer/guides/transaction-history",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/03-guides/03-transaction-history.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Wallet transaction history"},sidebar:"sidebar",previous:{title:"Tokens API",permalink:"/indexer/guides/fetch-tokens"},next:{title:"All unique tokens in a contract",permalink:"/indexer/guides/unique-tokens"}},u={},d=[{value:"Fetch the transaction history for any wallet address",id:"fetch-the-transaction-history-for-any-wallet-address",level:2}],p={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet-transaction-history"},"Wallet transaction history"),(0,r.kt)("h2",{id:"fetch-the-transaction-history-for-any-wallet-address"},"Fetch the transaction history for any wallet address"),(0,r.kt)("p",null,"Fetches the transaction / token history for any wallet address of any ERC20, ERC721 and ERC1155 token.\nThe response includes decoded transaction details for easy consumption / rendering."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetTransactionHistory")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTransactionHistory"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter")," (object)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"* `accountAddress` (string) -- the wallet account address\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- optionally specify a contract address to filter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accountAddresses")," (string array) -- optionally specify a list of wallet account addresses"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddresses")," (string array) -- optionally specify a list of contract address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactionHashes")," (string array) -- optionally specify a list of transaction hashes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metaTransactionIDs")," (string array) -- optionally specify a list of meta transaction IDs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromBlock")," (number) -- optionally specify the starting block to select a range"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toBlock")," (number) -- optionally specify the ending block to select a range"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetTransactionHistory")," of a wallet account address on Polygon")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H "Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetTransactionHistory -d \'{ "filter": { "accountAddress": "0x8e3E38fe7367dd3b52D1e281E4e8400447C8d8B9" }, "includeMetadata": true }\'\n'))),(0,r.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// try any account address you'd like :)\nconst filter = {\n    accountAddress: \"0xabc...\"\n}\n\n// query Sequence Indexer for all token transaction history on Polygon\nconst transactionHistory = await indexer.getTransactionHistory({\n    filter: filter,\n    includeMetadata: true\n})\n    \nconsole.log('transaction history in account:', transactionHistory)\n"))),(0,r.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTransactionHistory(accountAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    filter := &indexer.TransactionHistoryFilter{\n        AccountAddress: &accountAddress,\n    }\n    includeMetadata := true\n\n    _, history, err := seqIndexer.GetTransactionHistory(context.Background(), filter, nil, &includeMetadata)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("transaction history:", history)\n}\n'))),(0,r.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}m.isMDXComponent=!0}}]);