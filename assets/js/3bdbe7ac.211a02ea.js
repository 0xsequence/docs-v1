"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[602],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,b=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(b,o(o({ref:n},l),{},{components:t})):r.createElement(b,o({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1640:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),o=["components"],c={sidebar_position:10},s="Sending a Batch of Transactions",u={unversionedId:"build-with-sequence/send_batch_transactions",id:"build-with-sequence/send_batch_transactions",title:"Sending a Batch of Transactions",description:"Likewise, bundling multiple transactions to be send in a single native transaction is equally as easy:",source:"@site/docs/build-with-sequence/10_send_batch_transactions.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/send_batch_transactions",permalink:"/build-with-sequence/send_batch_transactions",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/10_send_batch_transactions.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Sending an ERC-1155 (Collectible) Token",permalink:"/build-with-sequence/send_erc1155"},next:{title:"Ethereum Compatibility",permalink:"/build-with-sequence/eth_compat"}},l=[],p={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-a-batch-of-transactions"},"Sending a Batch of Transactions"),(0,a.kt)("p",null,"Likewise, bundling multiple transactions to be send in a single native transaction is equally as easy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const transaction1 = {\n  to: recipient1Address,\n  value: 1000000000000000000\n}\n\nconst transaction2 = {\n  to: recipient2Address,\n  value: 1000000000000000000\n}\n\nconst response = await wallet.sendTransactionBatch([transaction1, transaction2])\nconsole.log(response)\n")))}d.isMDXComponent=!0}}]);