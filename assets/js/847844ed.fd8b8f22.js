"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8499],{7059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(1527),o=n(7279);const s={},r="Contract Deployment",c={id:"unity-waas-sdk/deploy-contracts",title:"Contract Deployment",description:"While, in general, we would recommend deploying your smart contracts via the Builder, we recognize that there are some use cases where deploying a smart contract from Unity (or a Made-With-Unity application) is useful.",source:"@site/docs/120-unity-waas-sdk/08-deploy-contracts.mdx",sourceDirName:"120-unity-waas-sdk",slug:"/unity-waas-sdk/deploy-contracts",permalink:"/unity-waas-sdk/deploy-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/120-unity-waas-sdk/08-deploy-contracts.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"sidebar",previous:{title:"Sign Messages",permalink:"/unity-waas-sdk/sign-messages"},next:{title:"Wallet UI",permalink:"/unity-waas-sdk/wallet-ui"}},i={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"contract-deployment",children:"Contract Deployment"}),"\n",(0,a.jsxs)(t.p,{children:["While, in general, we would recommend deploying your smart contracts via the ",(0,a.jsx)(t.a,{href:"https://sequence.build/",children:"Builder"}),", we recognize that there are some use cases where deploying a smart contract from Unity (or a Made-With-Unity application) is useful."]}),"\n",(0,a.jsxs)(t.p,{children:["Contract deployment involves sending a transaction, which is done via an ",(0,a.jsx)(t.a,{href:"https://medium.com/@sonusprocks/async-await-in-c-unity-explained-in-easy-words-571ebb6a9369",children:"asynchronous Task"}),". You can use ",(0,a.jsx)(t.code,{children:"await"})," when calling ",(0,a.jsx)(t.code,{children:"WaaSWallet.DeployContract"})," from within an async Task if you wish to obtain the ",(0,a.jsx)(t.code,{children:"ContractDeploymentReturn"})," object directly. Or, you can take the recommended approach which is to setup handler functions for the ",(0,a.jsx)(t.code,{children:"WaaSWallet.OnDeployContractComplete"})," and ",(0,a.jsx)(t.code,{children:"WaaSWallet.OnDeployContractFailed"})," events and call the ",(0,a.jsx)(t.code,{children:"WaaSWallet.DeployContract"})," method from anywhere (without await)."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"WaaSWallet.DeployContract"})," is essentially a wrapper for a very special ",(0,a.jsx)(t.code,{children:"WaaSWallet.SendTransaction"})," call and therefore, you can expect to still receive the ",(0,a.jsx)(t.code,{children:"WaaSWallet.OnSendTransactionComplete"})," or ",(0,a.jsx)(t.code,{children:"WaaSWallet.OnSendTransactionFailed"})," events in addition."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"public void OnDeployContractCompleteHandler(SuccessfulContractDeploymentReturn result) {\n    Address newlyDeployedContractAddress = result.DeployedContractAddress;\n\n    // Do something\n}\n\npublic void OnDeployContractFailedHandler(FailedContractDeploymentReturn result) {\n    // Do something\n}\n\npublic void OnWaaSWalletCreatedHander(WaaSWallet wallet) {\n    wallet.OnDeployContractComplete += OnDeployContractCompleteHandler;\n    wallet.OnDeployContractFailed += OnDeployContractFailedHandler;\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If you're unfamiliar with working with events in Unity, check out this great ",(0,a.jsx)(t.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]}),"\n",(0,a.jsxs)(t.p,{children:["To deploy a contract you'll need to first ",(0,a.jsx)(t.a,{href:"https://medium.com/coinmonks/compiling-the-smart-contracts-8dcda8071638",children:"compile your smart contract code into bytecode"})," and add the bytecode as a hexadecimal string in one of your C# scripts."]}),"\n",(0,a.jsx)(t.p,{children:"To deploy a smart contract, you can use this code snippet:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'string bytecode = "Here you\'ll paste your compiled bytecode"\n_wallet.DeployContract(Chain.Polygon, bytecode);\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},7279:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(959);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);