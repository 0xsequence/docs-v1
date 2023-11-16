"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[9374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>w});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,w=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(w,i(i({ref:t},u),{},{components:n})):a.createElement(w,i({ref:t},u))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Intro to Sequence Auth + WaaS",s={unversionedId:"waas/waas-auth/intro",id:"waas/waas-auth/intro",title:"Intro to Sequence Auth + WaaS",description:"Sequence Auth + WaaS provides a simple way to add account creation, login, session management, and wallet support to your app, enabling applications to provide traditional web experiences (e.g., social login, email login, etc.) while providing access to crypto wallets to interact with smart contracts.",source:"@site/docs/10-waas/04-waas-auth/01-intro.mdx",sourceDirName:"10-waas/04-waas-auth",slug:"/waas/waas-auth/intro",permalink:"/waas/waas-auth/intro",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/10-waas/04-waas-auth/01-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Response Payloads",permalink:"/waas/implementation/responses"},next:{title:"Getting Started",permalink:"/waas/waas-auth/getting-started"}},c={},l=[{value:"How It Works",id:"how-it-works",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intro-to-sequence-auth--waas"},"Intro to Sequence Auth + WaaS"),(0,r.kt)("p",null,"Sequence Auth + WaaS provides a simple way to add account creation, login, session management, and wallet support to your app, enabling applications to provide traditional web experiences (e.g., social login, email login, etc.) while providing access to crypto wallets to interact with smart contracts."),(0,r.kt)("h2",{id:"how-it-works"},"How It Works"),(0,r.kt)("p",null,"Sequence WaaS is a hosted service that provides a non-custodial wallet for your users. It works by co-validating the user's identity alongside the validation performed by an existing backend (e.g., Firebase, Auth0, etc.). Two entities independently validate the user's identity, meaning that neither Sequence nor the existing backend can act maliciously to access the user's funds."),(0,r.kt)("p",null,"However, pure WaaS integration does require an existing backend to validate the user's identity. Sequence Auth is meant to be a drop-in replacement for such a backend, providing a simple way to integrate Sequence WaaS into your app."),(0,r.kt)("p",null,"It works by leveraging the capabilities of Amazon Nitro and Cognito to implement a custom authentication and account management flow, while providing a simple SDK to integrate with your app."))}d.isMDXComponent=!0}}]);