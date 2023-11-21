"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[2310],{9567:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(1527),a=t(4089);const i={},o="Sending Transactions",r={id:"wallet/guides/send-transaction",title:"Sending Transactions",description:"Signing a transaction will only retrieve the signed payload.",source:"@site/docs/03-wallet/04-guides/05-send-transaction.mdx",sourceDirName:"03-wallet/04-guides",slug:"/wallet/guides/send-transaction",permalink:"/wallet/guides/send-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/04-guides/05-send-transaction.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"No-Wallet-Confirmation Signatures",permalink:"/wallet/guides/session-keys"},next:{title:"Sending ERC-20 Tokens",permalink:"/wallet/guides/send-erc20"}},c={},l=[];function d(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sending-transactions",children:"Sending Transactions"}),"\n",(0,s.jsxs)(n.p,{children:["Signing a transaction will only retrieve the signed payload.\nIf you want the wallet to actually dispatch the transaction to the network as well, that requires only a small modification to the previous example (note the change from ",(0,s.jsx)(n.code,{children:"signTransactions"})," to ",(0,s.jsx)(n.code,{children:"sendTransaction"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const transaction = {\n  to: recipientAddress,\n  value: 1000000000000000000\n}\n\nconst signer = wallet.getSigner()\nconst txnResponse = await signer.sendTransaction(transaction)\nconsole.log(txnResponse)\n\n// wait for the transaction to be mined\nawait txnResponse.wait()\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4089:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(959);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);