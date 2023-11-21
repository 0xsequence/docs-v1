"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8910],{1319:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=n(1527),t=n(4089);const a={},r="No-Wallet-Confirmation Signatures",o={id:"wallet/guides/session-keys",title:"No-Wallet-Confirmation Signatures",description:"It is possible to build an application where users sign messages without requiring a confirmation in their Sequence wallet every time. This is possible using session keys, or ephemeral keys.",source:"@site/docs/03-wallet/04-guides/04-session-keys.mdx",sourceDirName:"03-wallet/04-guides",slug:"/wallet/guides/session-keys",permalink:"/wallet/guides/session-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/04-guides/04-session-keys.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Signing & Verifying Messages",permalink:"/wallet/guides/sign-message"},next:{title:"Sending Transactions",permalink:"/wallet/guides/send-transaction"}},l={},c=[{value:"1. Initialize Sequence Wallet and Connect",id:"1-initialize-sequence-wallet-and-connect",level:3},{value:"2. Generate a Session Key",id:"2-generate-a-session-key",level:3},{value:"3. Sign Authorization Message",id:"3-sign-authorization-message",level:3},{value:"4. Verify Authorization Signature",id:"4-verify-authorization-signature",level:3},{value:"5. Sign Message with Session Key",id:"5-sign-message-with-session-key",level:3},{value:"6. Verify Session Signature",id:"6-verify-session-signature",level:3}];function d(e){const s={code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"no-wallet-confirmation-signatures",children:"No-Wallet-Confirmation Signatures"}),"\n",(0,i.jsxs)(s.p,{children:["It is possible to build an application where users sign messages without requiring a confirmation in their Sequence wallet every time. This is possible using ",(0,i.jsx)(s.em,{children:"session keys"}),", or ephemeral keys."]}),"\n",(0,i.jsx)(s.h1,{id:"session-keys",children:"Session Keys"}),"\n",(0,i.jsx)(s.p,{children:"Session keys are ephemeral private keys that can be generated and stored client-side, typically in a user's local storage. They provide a convenient and secure way for users to authorize specific actions in a decentralized application without requiring them to confirm each action through their primary wallet."}),"\n",(0,i.jsx)(s.p,{children:"By signing a message with their primary wallet (e.g., Sequence Wallet), users can authorize a session key to act on their behalf for a limited time or scope. Applications can then interpret signed messages from the session key as if they were coming directly from the user's wallet, streamlining the user experience."}),"\n",(0,i.jsx)(s.p,{children:"Session keys are particularly useful for applications that require frequent user interactions, as they help reduce the number of wallet confirmations needed, while still maintaining a secure and verifiable authentication process."}),"\n",(0,i.jsx)(s.h1,{id:"using-session-keys-with-sequence",children:"Using Session keys with Sequence"}),"\n",(0,i.jsx)(s.h3,{id:"1-initialize-sequence-wallet-and-connect",children:"1. Initialize Sequence Wallet and Connect"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"import { Wallet } from '@0xsequence/wallet'\nimport { ethers } from 'ethers'\n\nconst wallet = new Wallet()\nawait wallet.connect()\n\nconst signer = wallet.getSigner()\nconst userAddress = signer.getAddress()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"2-generate-a-session-key",children:"2. Generate a Session Key"}),"\n",(0,i.jsx)(s.p,{children:"Create a new ephemeral private key, store it in local storage, and derive the associated address:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"const sessionPrivateKey = ethers.utils.randomBytes(32)\nlocalStorage.setItem('sessionPrivateKey', ethers.utils.hexlify(sessionPrivateKey))\nconst sessionWallet = new ethers.Wallet(sessionPrivateKey)\nconst sessionAddress = await sessionWallet.getAddress()\n"})}),"\n",(0,i.jsx)(s.h3,{id:"3-sign-authorization-message",children:"3. Sign Authorization Message"}),"\n",(0,i.jsx)(s.p,{children:"Sign a message with the user's Sequence Wallet to authorize the session key:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"const authorizationMessage = `Authorize this device to play this game.`\nconst signature = await signer.signMessage(authorizationMessage)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"4-verify-authorization-signature",children:"4. Verify Authorization Signature"}),"\n",(0,i.jsx)(s.p,{children:"Verify the signature on the server or client side using Sequence utility functions:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"const provider = wallet.getProvider()\nconst chainId = await wallet.getChainId()\n\nconst isValid = await wallet.utils.isValidMessageSignature(\n  userAddress,\n  authorizationMessage,\n  signature,\n  chainId\n)\n\nif (isValid) {\n  console.log('Session key authorized')\n} else {\n  console.log('Session key not authorized')\n}\n"})}),"\n",(0,i.jsx)(s.h3,{id:"5-sign-message-with-session-key",children:"5. Sign Message with Session Key"}),"\n",(0,i.jsx)(s.p,{children:"Use the session key to sign a message client-side without user interaction:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"const message = 'Perform action without wallet confirmation'\nconst sessionSignature = await sessionWallet.signMessage(message)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"6-verify-session-signature",children:"6. Verify Session Signature"}),"\n",(0,i.jsx)(s.p,{children:"Verify the session signature on the server or client side:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"const recoveredSessionAddress = ethers.utils.verifyMessage(message, sessionSignature)\nif (recoveredSessionAddress === sessionAddress) {\n  console.log('Session signature valid')\n} else {\n  console.log('Session signature invalid')\n}\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note"}),": You should retrieve the session key stored in local storage upon loading the application and only create a new session key if none can be found."]})]})}function u(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4089:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var i=n(959);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);