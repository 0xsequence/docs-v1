"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[2954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7462),a=n(7294),o=n(6010),s=n(2466),i=n(6550),l=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=p(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,c]=m({queryString:n,groupId:r}),[d,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=l??d;return f({value:e,tabValues:o})?e:null})();(0,a.useEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,o]),tabValues:o}}var h=n(2389);const b="tabList__CuJ",k="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==i&&(d(t),l(r))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:f,onClick:p},s,{className:(0,o.Z)("tabs__item",k,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;if(t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",b)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(x,(0,r.Z)({key:String(t)},e))}},3693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(7462),a=(n(7294),n(3905)),o=n(4866),s=n(5162);const i={sidebar_label:"Token contract transaction history"},l="Contract token history",c={unversionedId:"indexer/guides/transation-history-token-contract",id:"indexer/guides/transation-history-token-contract",title:"Contract token history",description:"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract.",source:"@site/docs/04-indexer/03-guides/05-transation-history-token-contract.mdx",sourceDirName:"04-indexer/03-guides",slug:"/indexer/guides/transation-history-token-contract",permalink:"/indexer/guides/transation-history-token-contract",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/03-guides/05-transation-history-token-contract.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Token contract transaction history"},sidebar:"sidebar",previous:{title:"All unique tokens in a contract",permalink:"/indexer/guides/unique-tokens"},next:{title:"Native network balance",permalink:"/indexer/guides/native-network-balance"}},u={},d=[{value:"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract.",id:"fetch--listen-to-the-transaction-history-for-any-erc20-erc721-erc1155-contract",level:3}],p={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-token-history"},"Contract token history"),(0,a.kt)("h3",{id:"fetch--listen-to-the-transaction-history-for-any-erc20-erc721-erc1155-contract"},"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract."),(0,a.kt)("p",null,"This query is helpful to track transaction history of a particular token contract.\nIn this example, we use the Skyweaver token contract address 0x631998e91476DA5B870D741192fc5Cbc55F5a52E\non the Polygon network. You may query any contract address on any of the supported networks (but make\nsure to query the indexer of the corresponding network)."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,a.kt)("inlineCode",{parentName:"em"},"GetTransactionHistory")," Method:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTransactionHistory"),(0,a.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,a.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filter")," (object) ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- a ERC20 / ERC721 / ERC1155 contract address")))))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: ",(0,a.kt)("inlineCode",{parentName:"strong"},"GetTransactionHistory")," of Skyweaver contract on Polygon")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H "Content-Type: application/json" https://polygon-indexer-v2.sequence.app/rpc/Indexer/GetTransactionHistory -d \'{ "filter": { "accountAddress": "0x631998e91476DA5B870D741192fc5Cbc55F5a52E" }, "includeMetadata": true }\'\n'))),(0,a.kt)(s.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer-v2.sequence.app')\n\n// here we query the Skyweaver contract address, but you can use any\nconst contractAddress = '0x631998e91476DA5B870D741192fc5Cbc55F5a52E'\n\n// query Sequence Indexer for all token details / supplies\n// try any contract address you'd like :)\nconst filter = {\n    contractAddress: contractAddress\n}\n\n// query Sequence Indexer for all token transaction history on Polygon\nconst transactionHistory = await indexer.getTransactionHistory({\n    filter: filter\n})\n    \nconsole.log('transaction history of contract:', transactionHistory)\n"))),(0,a.kt)(s.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTransactionHistory(accountAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer-v2.sequence.app", http.DefaultClient)\n\n    filter := &indexer.TransactionHistoryFilter{\n        ContractAddress: &contractAddress,\n    }\n    includeMetadata := true\n\n    _, history, err := seqIndexer.GetTransactionHistory(context.Background(), filter, nil, &includeMetadata)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("transaction history:", history)\n}\n'))),(0,a.kt)(s.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}f.isMDXComponent=!0}}]);