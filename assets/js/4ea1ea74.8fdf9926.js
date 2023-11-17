"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8022],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(k,c(c({ref:t},i),{},{components:n})):r.createElement(k,c({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},c="ERC1155",l={unversionedId:"unity-sdk/wallet/ERC1155",id:"unity-sdk/wallet/ERC1155",title:"ERC1155",description:"An ERC1155 token contract manages multiple token types.",source:"@site/docs/09-unity-sdk/23-wallet/12-ERC1155.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/ERC1155",permalink:"/unity-sdk/wallet/ERC1155",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/12-ERC1155.mdx",tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"sidebar",previous:{title:"ERC721",permalink:"/unity-sdk/wallet/ERC721"},next:{title:"ERC20",permalink:"/unity-sdk/wallet/ERC20"}},p={},s=[{value:"An ERC1155 token contract manages multiple token types.",id:"an-erc1155-token-contract-manages-multiple-token-types",level:3}],i={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"erc1155"},"ERC1155"),(0,a.kt)("h3",{id:"an-erc1155-token-contract-manages-multiple-token-types"},"An ERC1155 token contract manages multiple token types."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ERC1155 ",(0,a.kt)("inlineCode",{parentName:"em"},"URI")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nvar URI = await erc1155.URI(tokenId);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ERC1155 ",(0,a.kt)("inlineCode",{parentName:"em"},"BalanceOf")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nvar balanceOf = await erc1155.BalanceOf(tokenId, account);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ERC1155 ",(0,a.kt)("inlineCode",{parentName:"em"},"BalanceOfBatch")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nvar balanceOfBatch = await erc1155.BalanceOfBatch(accounts, tokenIds);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ERC1155 ",(0,a.kt)("inlineCode",{parentName:"em"},"SetApprovalForAll")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.SetApprovalForAll(operator, _approved);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ERC1155 ",(0,a.kt)("inlineCode",{parentName:"em"},"IsApprovedForAll")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.IsApprovedForAll(account, operator);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ERC1155 ",(0,a.kt)("inlineCode",{parentName:"em"},"SafeTransferFrom")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.SafeTransferFrom(from, to, id, amount, data);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"ERC1155 ",(0,a.kt)("inlineCode",{parentName:"em"},"SafeBatchTransferFrom")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc1155 = new ERC1155(web3, contractAddress);\nawait erc1155.SafeBatchTransferFrom(from, to, ids, amounts, data);\n")))}m.isMDXComponent=!0}}]);