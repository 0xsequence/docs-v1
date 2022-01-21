"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[330],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,c(c({ref:n},l),{},{components:t})):r.createElement(m,c({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6275:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),c=["components"],i={sidebar_position:7},s="Sending an ERC-20 Token",u={unversionedId:"build-with-sequence/send_erc20",id:"build-with-sequence/send_erc20",title:"Sending an ERC-20 Token",description:"You can ask the wallet to send a single ERC-20 token transfer:",source:"@site/docs/build-with-sequence/7_send_erc20.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/send_erc20",permalink:"/build-with-sequence/send_erc20",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/7_send_erc20.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Sending a Transaction",permalink:"/build-with-sequence/send_transaction"},next:{title:"Sending an ERC-721 (NFT) Token",permalink:"/build-with-sequence/send_erc721"}},l=[],d={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sending-an-erc-20-token"},"Sending an ERC-20 Token"),(0,o.kt)("p",null,"You can ask the wallet to send a single ERC-20 token transfer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const erc20Interface = new ethers.utils.Interface([\n  'function transfer(address _to, uint256 _value)'\n])\n\n// Encode an ERC-20 token transfer to recipient of the specified amount\nconst data = erc20Interface.encodeFunctionData('transfer', [recipientAddress, amount])\n\nconst transaction = {\n  to: daiContractAddress,\n  data\n}\n\nconst response = await wallet.sendTransaction(transaction)\nconsole.log(response)\n")),(0,o.kt)("p",null,"With batching functionality, you can send multiple token transfers in a single native transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const erc20Interface = new ethers.utils.Interface([\n  'function transfer(address _to, uint256 _value)'\n])\n\n// Encode two different ERC-20 token transfers\nconst data1 = erc20Interface.encodeFunctionData('transfer', [recipient1Address, amount1])\nconst data2 = erc20Interface.encodeFunctionData('transfer', [recipient2Address, amount2])\n\nconst transaction1 = {\n  to: daiContractAddress,\n  data: data1\n}\n\nconst transaction2 = {\n  to: daiContractAddress,\n  data: data2\n}\n\nconst response = await wallet.sendTransactionBatch([transaction1, transaction2])\nconsole.log(response)\n")))}p.isMDXComponent=!0}}]);