"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[1629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return t?a.createElement(m,l(l({ref:n},s),{},{components:t})):a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_label:"Using Web3 Onboard"},l="Using Web3-Onboard",i={unversionedId:"wallet/connectors/web3-onboard",id:"wallet/connectors/web3-onboard",title:"Using Web3-Onboard",description:"The Sequence wallet can be added through the Blocknative web3-onboard package.",source:"@site/docs/03-wallet/05-connectors/05-web3-onboard.mdx",sourceDirName:"03-wallet/05-connectors",slug:"/wallet/connectors/web3-onboard",permalink:"/wallet/connectors/web3-onboard",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/05-connectors/05-web3-onboard.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Using Web3 Onboard"},sidebar:"sidebar",previous:{title:"Using RainbowKit",permalink:"/wallet/connectors/rainbow-kit"},next:{title:"Web3 React V6",permalink:"/wallet/connectors/web3-react-v6"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"network (optional)",id:"network-optional",level:3},{value:"appName (optional)",id:"appname-optional",level:3},{value:"Example",id:"example",level:2}],s={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-web3-onboard"},"Using Web3-Onboard"),(0,r.kt)("p",null,"The Sequence wallet can be added through the Blocknative web3-onboard package."),(0,r.kt)("admonition",{title:"Try it live :)",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Try ",(0,r.kt)("a",{parentName:"p",href:"https://0xsequence.github.io/demo-dapp-web3-onboard/"},"a live Dapp example")," using Sequence + Metamask + Wallet Connect with Web3-Onboard."),(0,r.kt)("p",{parentName:"admonition"},"Source code is available too: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp-web3-onboard"},"https://github.com/0xsequence/demo-dapp-web3-onboard"))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The Sequence module is available through npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @web3-onboard/sequence 0xsequence ethers\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @web3-onboard/sequence 0xsequence ethers\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import sequenceModule from '@web3-onboard/sequence'\n\nconst sequenceOptions = {\n  network: 137,\n  appName: 'My app'\n}\n\nconst sequenceOnboard = sequenceModule({})\n\nconst onboard = Onboard({\n  wallets: [\n    sequenceOnboard,\n    ...restWallets\n  ],\n  ...restofOnboardParams\n})\n\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"network-optional"},"network (optional)"),(0,r.kt)("p",null,"The default network that the Sequence wallet will attempt to connect to."),(0,r.kt)("h3",{id:"appname-optional"},"appName (optional)"),(0,r.kt)("p",null,"The name of the app which will show up in Sequence's prompt upon an attempt to connect. "),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"An example demo of an integration of Sequence + Web3 Onboard is available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp-web3-onboard"},"here")))}d.isMDXComponent=!0}}]);