"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},o="Setup",i={unversionedId:"unity-sdk/wallet/setup",id:"unity-sdk/wallet/setup",title:"Setup",description:"To start, you'll need to include the Sequence Wallet Prefab SequenceSDK/SequenceSharp/Prefabs/SequenceWalletPrefab.prefab.",source:"@site/docs/09-unity-sdk/23-wallet/01-setup.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/setup",permalink:"/unity-sdk/wallet/setup",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/01-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Building your game",permalink:"/unity-sdk/building"},next:{title:"Social Login",permalink:"/unity-sdk/wallet/social-login"}},s={},u=[],c={toc:u};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To start, you'll need to include the Sequence Wallet Prefab ",(0,r.kt)("inlineCode",{parentName:"p"},"SequenceSDK/SequenceSharp/Prefabs/SequenceWalletPrefab.prefab"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sequence wallet prefab",src:n(9646).Z,width:"818",height:"383"})),(0,r.kt)("p",null,"Put the prefab in your scene, inside a Canvas.\n",(0,r.kt)("img",{alt:"Sequence wallet prefab in the world",src:n(9122).Z,width:"688",height:"252"})),(0,r.kt)("p",null,"Position and scale it; this will be the viewport where the wallet is rendered in non-WebGL builds."),(0,r.kt)("p",null,"You can edit the properties in the inspector to hook up events, as well as set the default network and enable some debugging tools.\n",(0,r.kt)("img",{alt:"Sequence wallet prefab",src:n(9932).Z,width:"904",height:"988"})),(0,r.kt)("p",null,"Before calling any Wallet methods, you should hook up the ",(0,r.kt)("inlineCode",{parentName:"p"},"onWalletOpened"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onWalletClosed"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"onAuthWindowOpened"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"onAuthWindowClosed")," events.\nSequence will automatically make itself visible and invisible, but you might have extra chrome / animations you'd like to add to the wallet and/or auth window (close wallet buttons, etc)."),(0,r.kt)("p",null,"A simple solution is adding a Canvas Group and moving the ",(0,r.kt)("inlineCode",{parentName:"p"},"SequenceWalletPrefab")," prefab inside it, and toggling visibility when the wallet opens/closes.\nThese callbacks might not occur on the main thread in some builds (e.g. Android), so make sure you use a UnityMainThread job to do your visbility toggling on the main thread."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"  wallet.onWalletOpened.AddListener(() => {\n    UnityMainThread.wkr.AddJob(() => {\n      walletContainer.alpha = 1f;\n      walletContainer.interactable = true;\n      walletContainer.blocksRaycasts = true;\n    });\n  });\n  wallet.onWalletClosed.AddListener(() => {\n    UnityMainThread.wkr.AddJob(() => {\n      walletContainer.alpha = 1f;\n      walletContainer.interactable = true;\n      walletContainer.blocksRaycasts = true;\n    });\n  });\n")),(0,r.kt)("p",null,"All the Sequence Wallet functions & classes are namespaced in the ",(0,r.kt)("inlineCode",{parentName:"p"},"SequenceSharp")," namespace, so you might want to add ",(0,r.kt)("inlineCode",{parentName:"p"},"using SequenceSharp;")," at the top of your CS files."),(0,r.kt)("p",null,"Before interacting with the SDK, you should make sure it's ready:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"        if (wallet.readyToConnect) {\n          // your Connect function call here\n        } else {\n          wallet.onReadyToConnect.AddListener(()=> {\n          // your Connect function call here\n          });\n        }\n")),(0,r.kt)("p",null,"Once it's ready, you can move on to connecting to the wallet!"))}p.isMDXComponent=!0},9122:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unity-prefab-in-canvas-da20e9ca5a261e97ce0bf9cd10475e45.png"},9932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unity-prefab-inspector-45bdb4dff25ebfa87511c7a7faae231a.png"},9646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/unity-prefab-d0d77157ede3d5b3687ddb72c5e3284a.png"}}]);