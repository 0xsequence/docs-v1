"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[3942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7462),a=n(7294),o=n(6010),l=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:l,values:d,groupId:m,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:v}=(0,s.U)(),[x,T]=(0,a.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:q}=(0,c.o5)();if(null!=m){const e=g[m];null!=e&&e!==x&&b.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),r=b[n].value;r!==x&&(q(t),T(r),null!=m&&v(m,String(r)))},N=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},k)},b.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:N,onClick:E},l,{className:(0,o.Z)("tabs__item",p,l?.className,{"tabs__item--active":x===t})}),n??t)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},3448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={sidebar_label:"All unique tokens in a contract"},s="Tokens in a contract",c={unversionedId:"indexer/guides/unique-tokens",id:"indexer/guides/unique-tokens",title:"Tokens in a contract",description:"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies",source:"@site/docs/04-indexer/03-guides/04-unique-tokens.mdx",sourceDirName:"04-indexer/03-guides",slug:"/indexer/guides/unique-tokens",permalink:"/indexer/guides/unique-tokens",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/04-indexer/03-guides/04-unique-tokens.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"All unique tokens in a contract"},sidebar:"sidebar",previous:{title:"Wallet transaction history",permalink:"/indexer/guides/transaction-history"},next:{title:"Token contract transaction history",permalink:"/indexer/guides/transation-history-token-contract"}},u={},p=[{value:"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies",id:"fetch-all-unique-tokens-in-a-particular-erc207211155-contract-including-total-supplies",level:3}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tokens-in-a-contract"},"Tokens in a contract"),(0,a.kt)("h3",{id:"fetch-all-unique-tokens-in-a-particular-erc207211155-contract-including-total-supplies"},"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fetches token supplies and metadata for any ERC20, ERC721, ERC1155 contract.")),(0,a.kt)("p",null,"This query is helpful to render all tokens in a token contract, or to query the total token supplies.\nIn this example, we use the Skyweaver token contract address 0x631998e91476DA5B870D741192fc5Cbc55F5a52E\non the Polygon network. You may query any contract address on any of the supported networks (but make\nsure to query the indexer of the corresponding network)."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,a.kt)("inlineCode",{parentName:"em"},"GetTokenSupplies")," Method:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTokenSupplies"),(0,a.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,a.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- a ERC20 / ERC721 / ERC1155 contract address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example: ",(0,a.kt)("inlineCode",{parentName:"strong"},"GetTokenSupplies")," of Skyweaver contract on Polygon")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash wrap",metastring:"class=wrap"},'curl -X POST -H "Content-Type: application/json" https://polygon-indexer.sequence.app/rpc/Indexer/GetTokenSupplies -d \'{ "contractAddress": "0x631998e91476DA5B870D741192fc5Cbc55F5a52E", "includeMetadata": true }\'\n'))),(0,a.kt)(l.Z,{value:"js",label:"Javascript / Typescript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// Works in both a Webapp (browser) or Node.js:\nimport { SequenceIndexerClient } from '@0xsequence/indexer'\n\nconst indexer = new SequenceIndexerClient('https://polygon-indexer.sequence.app')\n\n// here we query the Skyweaver contract address, but you can use any\nconst contractAddress = '0x631998e91476DA5B870D741192fc5Cbc55F5a52E'\n\n// query Sequence Indexer for all token details / supplies\nconst tokenDetails = await indexer.getTokenSupplies({\n    contractAddress: contractAddress,\n    includeMetadata: true\n})\nconsole.log('token details of contract:', tokenDetails)\n"))),(0,a.kt)(l.Z,{value:"golang",label:"Go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "context"\n    "fmt"\n    "log"\n    "net/http"\n\n    "github.com/0xsequence/go-sequence/indexer"\n)\n\nfunc GetTokenSupplies(contractAddress string) {\n    seqIndexer := indexer.NewIndexerClient("https://polygon-indexer.sequence.app", http.DefaultClient)\n\n    filter := &indexer.TransactionHistoryFilter{\n        ContractAddress: &contractAddress,\n    }\n    includeMetadata := true\n\n    _, tokenDetails, err := seqIndexer.GetTokenSupplies(context.Background(), filter, nil, &includeMetadata)\n    if err != nil {\n        log.Fatal(err)\n    }\n    fmt.Println("token details:", tokenDetails)\n}\n'))),(0,a.kt)(l.Z,{value:"other",label:"Other",mdxType:"TabItem"},(0,a.kt)("p",null,"Please ",(0,a.kt)("a",{parentName:"p",href:"/support"},"contact our team")," for assistance with integrations to another target."))))}m.isMDXComponent=!0}}]);