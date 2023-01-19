"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[9968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},o="Indexer SDK",i={unversionedId:"unity-sdk/indexer/guides",id:"unity-sdk/indexer/guides",title:"Indexer SDK",description:"Native Unity Implementation of Sequence Indexer",source:"@site/docs/09-unity-sdk/24-indexer/02-guides.mdx",sourceDirName:"09-unity-sdk/24-indexer",slug:"/unity-sdk/indexer/guides",permalink:"/unity-sdk/indexer/guides",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/24-indexer/02-guides.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"ERC20",permalink:"/unity-sdk/wallet/ERC20"},next:{title:"Sequence Node-Gateway",permalink:"/node-gateway"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Tokens API",id:"tokens-api",level:2},{value:"Fetch token IDs, balances and metadata of ERC721 and ERC1155 collections.",id:"fetch-token-ids-balances-and-metadata-of-erc721-and-erc1155-collections",level:3},{value:"Fetch the transaction history for any wallet address",id:"fetch-the-transaction-history-for-any-wallet-address",level:3},{value:"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies",id:"fetch-all-unique-tokens-in-a-particular-erc207211155-contract-including-total-supplies",level:3},{value:"Fetch the transaction history for any token contract address",id:"fetch-the-transaction-history-for-any-token-contract-address",level:3},{value:"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)",id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc",level:3},{value:"Fetch the chain ID",id:"fetch-the-chain-id",level:3}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),u=p("TabItem"),k={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"indexer-sdk"},"Indexer SDK"),(0,r.kt)("p",null,"Native Unity Implementation of ",(0,r.kt)("a",{parentName:"p",href:"/indexer"},"Sequence Indexer")),(0,r.kt)("h2",{id:"installation"},(0,r.kt)("a",{parentName:"h2",href:"/unity-sdk/installation"},"Installation")),(0,r.kt)("h2",{id:"tokens-api"},"Tokens API"),(0,r.kt)("h3",{id:"fetch-token-ids-balances-and-metadata-of-erc721-and-erc1155-collections"},"Fetch token IDs, balances and metadata of ERC721 and ERC1155 collections."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetTokenBalances")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTokenBalances"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accountAddress")," (string) -- the wallet account address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- the contract address of the ERC721 / ERC1155 collection"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetTokenBalances")," of a contract + account address on Polygon")),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"csharp",label:"Unity c#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"GetTokenBalancesArgs tokenBalancesArgs = new GetTokenBalancesArgs(accountAddress, contractAddress, true);\nvar tokenBalances = await Indexer.GetTokenBalances(blockChain, tokenBalancesArgs);\nif (tokenBalances.balances.Length > 0)\n{\n    //Display the balances :)\n}\n")))),(0,r.kt)("h3",{id:"fetch-the-transaction-history-for-any-wallet-address"},"Fetch the transaction history for any wallet address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetches the transaction / token history for any wallet address of any ERC20, ERC721 and ERC1155 token.\nThe response includes decoded transaction details for easy consumption / rendering.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetTransactionHistory")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTransactionHistory"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter")," (object)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accountAddress")," (string) -- the wallet account address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- optionally specify a contract address to filter"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetTransactionHistory")," of a wallet account address on Polygon")),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"cs",label:"Unity c#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"GetTransactionHistoryArgs transactionHistoryArgs = new GetTransactionHistoryArgs();\nvar txHistory = await Indexer.GetTransactionHistory(blockChain, transactionHistoryArgs);\n//Display tx history :)\n")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"fetch-all-unique-tokens-in-a-particular-erc207211155-contract-including-total-supplies"},"Fetch all unique tokens in a particular ERC20/721/1155 contract, including total supplies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetches token supplies and metadata for any ERC20, ERC721, ERC1155 contract.")),(0,r.kt)("p",null,"This query is helpful to render all tokens in a token contract, or to query the total token supplies.\nIn this example, we use the Skyweaver token contract address 0x631998e91476DA5B870D741192fc5Cbc55F5a52E\non the Polygon network. You may query any contract address on any of the supported networks (but make\nsure to query the indexer of the corresponding network)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetTokenSupplies")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetTokenSupplies"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- a ERC20 / ERC721 / ERC1155 contract address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"includeMetadata")," (boolean - optional - default: false) -- toggle token metadata to be included in the response")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetTokenSupplies")," of Skyweaver contract on Polygon")),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"cs",label:"Unity c#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"GetTokenSuppliesArgs tokenSuppliesArgs = new GetTokenSuppliesArgs(contractAddress, includeMetadata);\nvar supplies = await Indexer.GetTokenSupplies(blockChain, tokenSuppliesArgs);\nif (supplies != null)\n{\n    //Display supplies :)\n}\n\n")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"fetch-the-transaction-history-for-any-token-contract-address"},"Fetch the transaction history for any token contract address"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetch / listen to the transaction history for any ERC20, ERC721, ERC1155 contract.")),(0,r.kt)("p",null,"This query is helpful to track transaction history of a particular token contract.\nIn this example, we use the Skyweaver token contract address 0x631998e91476DA5B870D741192fc5Cbc55F5a52E\non the Polygon network. You may query any contract address on any of the supported networks (but make\nsure to query the indexer of the corresponding network)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetBalanceUpdates")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetBalanceUpdates"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"contractAddress")," (string) -- a ERC20 / ERC721 / ERC1155 contract address")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetBalanceUpdates")," of Skyweaver contract on Polygon")),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"cs",label:"Unity c#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"GetBalanceUpdatesArgs balanceUpdatesArgs = new GetBalanceUpdateArgs(contractAddress);\nvar updates = await Indexer.GetBalanceUpdates(blockChain, balanceUpdatesArgs);\nif (updates != null)\n{\n    //Display balance updates :)\n}\n\n")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"fetch-native-network-balance-aka-eth-on-ethereum-matic-on-polygon-avax-on-avalanche-bnb-on-bsc-etc"},"Fetch native network balance (aka ETH on Ethereum, MATIC on Polygon, AVAX on Avalanche, BNB on BSC, etc.)"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetEtherBalance")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetEtherBalance"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json"),(0,r.kt)("li",{parentName:"ul"},"Body (in JSON):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"accountAddress")," (string) -- the wallet account address")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example: ",(0,r.kt)("inlineCode",{parentName:"strong"},"GetEtherBalance")," MATIC balance of a wallet account address on Polygon")),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"GetEtherBalanceArgs etherBalanceArgs = new GetEtherBalanceArgs(accountAddress);\nvar etherBalance = await Indexer.GetEtherBalance(blockChain, etherBalanceArgs);\nif (etherBalance != null)\n{\n    //Display ether balance :)\n}\n\n")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"fetch-the-chain-id"},"Fetch the chain ID"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Sequence Indexer ",(0,r.kt)("inlineCode",{parentName:"em"},"GetChainID")," Method:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request: POST /rpc/Indexer/GetChainID"),(0,r.kt)("li",{parentName:"ul"},"Content-Type: application/json")),(0,r.kt)("br",null),(0,r.kt)(d,{mdxType:"Tabs"},(0,r.kt)(u,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},"\nvar chainId = await Indexer.GetChainID(BlockChainType.Polygon);\nif (getChainIDReturn != null)\n{\n    //Display\n}\n")))))}m.isMDXComponent=!0}}]);