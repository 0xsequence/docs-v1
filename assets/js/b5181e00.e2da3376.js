"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5394],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),c=a(1980),i=a(7392),p=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,i]=f({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),h=(()=>{const e=c??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),k(e)}),[i,k,o]),tabValues:o}}var h=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:i}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=i[a].value;n!==s&&(u(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},5317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const o={sidebar_label:"REST API"},l="Metadata REST API Reference & Usage",s={unversionedId:"metadata/rest-api",id:"metadata/rest-api",title:"Metadata REST API Reference & Usage",description:"The Sequence Metadata API service offers a simple and fast API to query token & NFT metadata",source:"@site/docs/05-metadata/05-rest-api.mdx",sourceDirName:"05-metadata",slug:"/metadata/rest-api",permalink:"/metadata/rest-api",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/05-metadata/05-rest-api.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"REST API"},sidebar:"sidebar",previous:{title:"Contract metadata",permalink:"/metadata/contract-metadata"},next:{title:"Relayer",permalink:"/relayer"}},c={},i=[{value:"Example",id:"example",level:2},{value:"Usage",id:"usage",level:2},{value:"REST endpoints",id:"rest-endpoints",level:2},{value:"RPC Client",id:"rpc-client",level:2},{value:"Metadata RPC Methods",id:"metadata-rpc-methods",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metadata-rest-api-reference--usage"},"Metadata REST API Reference & Usage"),(0,r.kt)("p",null,"The Sequence Metadata API service offers a simple and fast API to query token & NFT metadata\nfor Ethereum-compatible chains."),(0,r.kt)("p",null,"Quite simply, the Metadata API allows you to query the token metadata of any ERC20, ERC721 or ERC1155\ncontract on a ",(0,r.kt)("a",{parentName:"p",href:"/multi-chain-support"},"number of supported Ethereum chains"),"."),(0,r.kt)("p",null,"As well, the Sequence Metadata service is automatically integrated in the ",(0,r.kt)("a",{parentName:"p",href:"/indexer"},"Sequence Indexer"),".\nBut as we demonstrate below, it's also useful to be able to query the token/contract metadata directly too :)"),(0,r.kt)("admonition",{title:"PRO TIP: RPC vs REST endpoints",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Sequence Metadata service is available with both RPC and REST endpoints. We recommend the RPC endpoints\nfor your application, but the REST endpoints are an available option for convenience."),(0,r.kt)("p",{parentName:"admonition"},"For RPC endpoint see ",(0,r.kt)("a",{parentName:"p",href:"/metadata/token-metadata"},"Token metadata RPC")," and ",(0,r.kt)("a",{parentName:"p",href:"/metadata/contract-metadata"},"Contract metadata RPC"),".")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's say you'd like to query the metadata of a Skyweaver 1155 card on the Polygon network. Of course,  the\nbelow example will work for any network / contract / token combination as well."),(0,r.kt)("p",null,"First, the Skyweaver 1155 assets contract is located at address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x631998e91476DA5B870D741192fc5Cbc55F5a52E"),"\non the Polygon network. Second, let's build the metadata lookup endpoint to query Skyweaver's contract\nfor token ID ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request:"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "tokenId": "20",\n    "contractAddress": "0x631998e91476da5b870d741192fc5cbc55f5a52e",\n    "name": "Unstoppable Chop",\n    "description": "Attach Silence to target unit. Do 4\xa0damage to it.",\n    "image": "https://assets.skyweaver.net/TNqWLuJZ/webapp/cards/full-cards/6x/20-silver.png",\n    "decimals": 2,\n    "properties": {\n      "baseCardId": 20,\n      "goldCardId": 131092,\n      "grade": "oldSilver",\n      "id": 20,\n      "silverCardId": 65556\n    },\n    "attributes": null\n  }\n]\n')),(0,r.kt)("p",null,"If you'd like to query a number of tokens at the same time, you can include more token ids comma-separated:\n",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21,22"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21,22")," -- click\nto see the JSON response to query token ids ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"21"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"22")," in a single batched request."),(0,r.kt)("p",null,"Feel free to try tweaking the metadata.sequence.app URL above for your own contract, or another popular\nproject to see how the responses come back. You can change the network to ",(0,r.kt)("a",{parentName:"p",href:"/multi-chain-support"},"one of our supported networks"),"\nand specify any contract and/or token id."),(0,r.kt)("p",null,"In addition to easily querying ",(0,r.kt)("em",{parentName:"p"},"token-level metadata")," like in the above example, you can also query ",(0,r.kt)("em",{parentName:"p"},"contract-level metadata"),".\nContract-level metadata provides you more information about a contract address such as a name, contract type, logo, and description.\nSimply change the metadata URL above to just query the contract address: ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E")),(0,r.kt)("p",null,"and see result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "chainId": 137,\n  "address": "0x631998e91476da5b870d741192fc5cbc55f5a52e",\n  "name": "Skyweaver",\n  "type": "ERC1155",\n  "symbol": "SKYWVR",\n  "logoURI": "https://assets.skyweaver.net/_tX5dRVi/webapp/icons/skyweaver-token.png",\n  "extensions": {\n    "link": "https://www.skyweaver.net/",\n    "description": "Skyweaver is a Free-to-Play, trading card game powered by Polygon and Ethereum.",\n    "ogImage": "https://skyweaver.net/images/skyweavercover.jpg",\n    "originAddress": "0x631998e91476da5b870d741192fc5cbc55f5a52e"\n  }\n}\n')),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The Metadata API service is accessible either with a simple ",(0,r.kt)("a",{parentName:"p",href:"#rest-endpoints"},"REST interface"),", or a ",(0,r.kt)("a",{parentName:"p",href:"#rpc-client"},"RPC client"),".\nFor the RPC client, we offer Web browser, node and Go clients. We recommend the RPC client for most integrations, but\nmake the REST interface available for convenience."),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"rest-endpoints"},"REST endpoints"),(0,r.kt)("p",null,"As mentioned in the ",(0,r.kt)("a",{parentName:"p",href:"#example"},"example")," above. The general format of the REST endpoint is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>[/<tokenID>]\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<network>")," must be one of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain ID")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Chain Handle")," of ",(0,r.kt)("a",{parentName:"p",href:"/multi-chain-support#networks"},"the supported networks"),"."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetch contract-level metadata:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>\n")),(0,r.kt)("p",null,"Example: ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fetch token-level metadata:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://metadata.sequence.app/tokens/<network>/<contractAddress>/<tokenID>[,<tokenID>,...]\n")),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21"},"https://metadata.sequence.app/tokens/polygon/0x631998e91476DA5B870D741192fc5Cbc55F5a52E/20,21"))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"rpc-client"},"RPC Client"),(0,r.kt)("p",null,"The Metadata RPC interface offers the full capabilities of the Metadata service."),(0,r.kt)("p",null,"We provide SDKs for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js"},"Web / node.js")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/go-sequence"},"Go"),".\nOr if you'd like to integrate the Metadata service with another language target, simply follow the API reference below\nto implement the HTTP requests. Additionally, read the Typescript client source code as ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/sequence.js/blob/master/packages/metadata/src/metadata.gen.ts"},"reference\nimplementation of the Metadata RPC client")," as well."),(0,r.kt)("h2",{id:"metadata-rpc-methods"},"Metadata RPC Methods"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata API endpoint:")," ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.sequence.app"},"https://metadata.sequence.app")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata RPC methods:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetTokenMetadata")," - fetch token metadata of ERC721 or ERC1155 tokens from a single contract "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetTokenMetadataBatch")," - fetch token metadata of ERC721 or ERC1155 token from a batch of contracts "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetContractInfo")," - fetch contract metadata of an ERC20, ERC721 or ERC1155 contract address"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GetContractInfoBatch")," - fetch contract metadata of a batch of ERC20, ERC721 or ERC1155 contract addresses")))}d.isMDXComponent=!0}}]);