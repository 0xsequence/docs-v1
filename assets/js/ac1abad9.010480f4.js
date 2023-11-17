"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[1e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={},o="Installation",s={unversionedId:"wallet/installation",id:"wallet/installation",title:"Installation",description:"The sequence.js SDK is composed of several sub-packages combined into a single meta-package called 0xsequence.",source:"@site/docs/03-wallet/02-installation.mdx",sourceDirName:"03-wallet",slug:"/wallet/installation",permalink:"/wallet/installation",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/02-installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Wallet",permalink:"/wallet"},next:{title:"Platforms",permalink:"/wallet/platforms"}},i={},c=[{value:"CDN distribution as native JS",id:"cdn-distribution-as-native-js",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"The sequence.js SDK is composed of several sub-packages combined into a single meta-package called ",(0,a.kt)("inlineCode",{parentName:"p"},"0xsequence"),".\nTo add the SDK to your project, add a dependency on 0xsequence to your package.json:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install 0xsequence ethers\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm install 0xsequence ethers\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add 0xsequence ethers\n")),(0,a.kt)("p",null,"If you know that your project only requires specific sub-packages, you can also depend on those directly with\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm add @0xsequence/<sub-package name>"),"."),(0,a.kt)("p",null,"Your package.json should look something like this (actual version may vary):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-dapp",\n  ...\n  "dependencies": {\n    "0xsequence": "^1.0.0",\n    "ethers": ^5.7.0"\n    ...\n  }\n}\n')),(0,a.kt)("h3",{id:"cdn-distribution-as-native-js"},"CDN distribution as native JS"),(0,a.kt)("p",null,"Optionally, ",(0,a.kt)("inlineCode",{parentName:"p"},"0xsequence")," can be installed as a JS script source (UMD distribution) via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script src="https://cdn.ethers.io/lib/ethers-5.7.umd.min.js"><\/script>\n<script src="https://unpkg.com/0xsequence@latest/dist/0xsequence.umd.min.js"><\/script>\n')))}d.isMDXComponent=!0}}]);