"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5889],{2803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(1527),i=t(7279);const r={},c="Sending Transactions",a={id:"unity-sdk/wallet/send-transaction",title:"Sending Transactions",description:"Prerequisites",source:"@site/docs/09-unity-sdk/23-wallet/08-send-transaction.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/send-transaction",permalink:"/unity-sdk/wallet/send-transaction",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/08-send-transaction.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"sidebar",previous:{title:"Signing & Verifying Messages",permalink:"/unity-sdk/wallet/sign-message"},next:{title:"Further Interactions",permalink:"/unity-sdk/wallet/further-interactions"}},o={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sending a TX",id:"sending-a-tx",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sending-transactions",children:"Sending Transactions"}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.p,{children:["Make sure you have a ",(0,s.jsx)(n.code,{children:"Web3"})," instance with the ",(0,s.jsx)(n.code,{children:"SequenceInterceptor"})," configured, as documented in ",(0,s.jsx)(n.a,{href:"./nethereum",children:"the Nethereum section"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"sending-a-tx",children:"Sending a TX"}),"\n",(0,s.jsx)(n.p,{children:'Dispatching a basic "send ETH" transaction is very simple using Nethereum :)\nThis will submit the TX on chain, and wait for it to be accepted before returning.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csharp",children:'await web3.Eth.TransactionManager.SendTransactionAndWaitForReceiptAsync(\n    new TransactionInput(\n        "",\n        "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",\n        new HexBigInteger("1000000000000000000")\n    )\n);\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7279:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var s=t(959);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);