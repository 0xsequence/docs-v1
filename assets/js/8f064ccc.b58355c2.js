"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||s;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={},o="Get Wallet Account Address",i={unversionedId:"build-with-sequence/get-address",id:"build-with-sequence/get-address",title:"Get Wallet Account Address",description:"Ask for the account address",source:"@site/docs/build-with-sequence/03-get-address.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/get-address",permalink:"/build-with-sequence/get-address",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/03-get-address.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Connect Wallet",permalink:"/build-with-sequence/connect-wallet"},next:{title:"Signing & Verifying Messages",permalink:"/build-with-sequence/sign-message"}},c={},u=[{value:"Ask for the account address",id:"ask-for-the-account-address",level:2},{value:"Authenticate the account address",id:"authenticate-the-account-address",level:2},{value:"Authenticate the account address server-side",id:"authenticate-the-account-address-server-side",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-wallet-account-address"},"Get Wallet Account Address"),(0,r.kt)("h2",{id:"ask-for-the-account-address"},"Ask for the account address"),(0,r.kt)("p",null,"To get the user's Sequence wallet address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.getWallet()\nconst address = await wallet.getAddress()\nconsole.log(address)\n")),(0,r.kt)("h2",{id:"authenticate-the-account-address"},"Authenticate the account address"),(0,r.kt)("p",null,"In many cases, you'll want your users to connect and then verify their account address. Many dapps do this by asking the user\nto sign a message, and then verify the signature from the user to ensure it's integrity."),(0,r.kt)("p",null,"As this is such a common workflow, Sequence can automatically authenticate the account address at the same time\nwhile the user is prompt to connect their wallet to your dapp. This allows the user experience to be simpler and\nmore seamless, with less confusion and clicks -- it's a subtle thing, but makes a big difference."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from '0xsequence'\n\nconst wallet = sequence.getWallet()\n\nconst connectDetails = await wallet.connect({\n  app: 'Your Dapp name',\n  authorize: true // <---<<< this will automatically sign+verify a EIP712 message when user clicks \"Connect\"\n})\n")),(0,r.kt)("p",null,"In the above example, we pass ",(0,r.kt)("inlineCode",{parentName:"p"},"authorize: true")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connect()")," function, which will automatically have the user\nsign a EIP712 signed message to prove their identity. This allows you to then easily authenticate the connected\nwallet address with absolutely certainty."),(0,r.kt)("p",null,"FYI, you can find the signed message proof returned in ",(0,r.kt)("inlineCode",{parentName:"p"},"connectDetails.proof"),", which is an EIP712 signed object using\na simple a convention from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/ethauth.js"},"ethauth"),". NOTE: EIP712 is just like a normal\nsigned message, but if allows you to use an actual object for signing instead of just a plain-text string."),(0,r.kt)("h2",{id:"authenticate-the-account-address-server-side"},"Authenticate the account address server-side"),(0,r.kt)("p",null,"The above example demonstrates how to connect and verify the user's identity in your dapp on the client-side,\nbut if you'd like to authenticate the Sequence authorization proof on your server, then you can do so with the following snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const ethAuth = new ETHAuth()\nawait ethAuth.configJsonRpcProvider('https://polygon-mainnet.infura.io/v3/<your infura key here>')\n\ntry {\n  const decodedProof = await ethAuth.decodeProof(connectDetails.proof.proofString)\n  console.log('welcome user address', decodedProof.address)\n\n} catch (err) {\n  console.log('proof is invalid -- do not trust the provided account address')\n}\n")),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/go-sequence"},"Go Sequence SDK")," on using Sequence in your Go applications."),(0,r.kt)("p",null,"If your server is written in a language other then Javascript/Typescript or Go, all you have to do is validate\nthe signature with ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1271"},"EIP1271, the standard method for validating signed messages for a smart wallet"),"."),(0,r.kt)("p",null,"As always, if you have any questions or require help, reach out to us on ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/sequence"},"Discord"),"."))}d.isMDXComponent=!0}}]);