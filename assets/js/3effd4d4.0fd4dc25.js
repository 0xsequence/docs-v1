"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||c;return n?r.createElement(k,o(o({ref:t},i),{},{components:n})):r.createElement(k,o({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const c={},o="ERC20",l={unversionedId:"unity-sdk/wallet/ERC20",id:"unity-sdk/wallet/ERC20",title:"ERC20",description:"An ERC20 token contract keeps track of fungible tokens.",source:"@site/docs/09-unity-sdk/23-wallet/109-ERC20.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/ERC20",permalink:"/unity-sdk/wallet/ERC20",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/109-ERC20.mdx",tags:[],version:"current",sidebarPosition:109,frontMatter:{},sidebar:"sidebar",previous:{title:"ERC1155",permalink:"/unity-sdk/wallet/ERC1155"},next:{title:"Indexer SDK",permalink:"/unity-sdk/indexer/guides"}},p={},s=[{value:"An ERC20 token contract keeps track of fungible tokens.",id:"an-erc20-token-contract-keeps-track-of-fungible-tokens",level:3}],i={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"erc20"},"ERC20"),(0,a.kt)("h3",{id:"an-erc20-token-contract-keeps-track-of-fungible-tokens"},"An ERC20 token contract keeps track of fungible tokens."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Name")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar name = await erc20.Name();\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Symbol")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar symbol = await erc20.Symbol();\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Decimals")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar decimals = await erc20.Decimals();\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"TotalSupply")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar totalSupply = await erc20.TotalSupply();\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"BalanceOf")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar balanceOf = await erc20.BalanceOf(accountAddress);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Transfer")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar receipt = await erc20.Transfer(senderAddress, recipientAddress, amount);\n\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Allowance")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar allowance = await erc20.Allowance(ownerAddress, spenderAddress);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Approve")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar receipt = await erc20.Approve(spenderAddress, amount);\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"TransferFrom")," Method:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"ERC20 erc20 = new ERC20(web3, contractAddress);\nvar receipt = await erc20.TransferFrom(senderAddress, recipientAddress, amount);\n")))}d.isMDXComponent=!0}}]);