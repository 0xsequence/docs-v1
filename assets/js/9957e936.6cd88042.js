"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8890],{7399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var o=n(1527),s=n(7279);const l={},r="Universal Deployer",c={id:"wallet/wallet-contracts/universal-deployer",title:"Universal Deployer",description:"The Sequence contract wallets use Nick's method to deploy the contracts that compose the smart contract wallet.",source:"@site/docs/150-wallet/10-wallet-contracts/02-universal-deployer.mdx",sourceDirName:"150-wallet/10-wallet-contracts",slug:"/wallet/wallet-contracts/universal-deployer",permalink:"/wallet/wallet-contracts/universal-deployer",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/150-wallet/10-wallet-contracts/02-universal-deployer.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Why smart contracts wallets?",permalink:"/wallet/wallet-contracts/why"},next:{title:"Wallet Factory",permalink:"/wallet/wallet-contracts/wallet-factory"}},a={},d=[{value:"Deploy Process V2",id:"deploy-process-v2",level:2},{value:"1 - Deploy Singleton Factory",id:"1---deploy-singleton-factory",level:3},{value:"2 - Deploy Wallet Context",id:"2---deploy-wallet-context",level:3},{value:"Deploy Process V1",id:"deploy-process-v1",level:2},{value:"1 - Deploy NanoUniversalDeployer",id:"1---deploy-nanouniversaldeployer",level:3},{value:"2 - Deploy UniversalDeployer2",id:"2---deploy-universaldeployer2",level:3},{value:"3 - Deploy Wallet Context",id:"3---deploy-wallet-context",level:3}];function i(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"universal-deployer",children:"Universal Deployer"}),"\n",(0,o.jsxs)(t.p,{children:["The Sequence contract wallets use ",(0,o.jsx)(t.a,{href:"https://weka.medium.com/how-to-send-ether-to-11-440-people-187e332566b7",children:"Nick's method"})," to deploy the contracts that compose the smart contract wallet.\nThis method has been chosen because it allows each wallet to take the same address on multiple chains, making it easier to use and less prone to mistakes."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Limitations",type:"danger",children:[(0,o.jsxs)(t.p,{children:["Sequence wallets ",(0,o.jsx)(t.strong,{children:"may not"})," receive the same address on all EVM compatible chains."]}),(0,o.jsx)(t.p,{children:"Networks that implement only a subset of the EVM opcodes, or alternative virtual machines, will result in a different address for each chain."}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Double-check your addresses"})," before sending any assets to them."]})]}),"\n",(0,o.jsx)(t.admonition,{title:"Notice",type:"info",children:(0,o.jsxs)(t.p,{children:["A complete script for deployment can be found in the ",(0,o.jsx)(t.a,{href:"https://github.com/0xsequence/live-contracts",children:"Sequence Live Contracts repository"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"deploy-process-v2",children:"Deploy Process V2"}),"\n",(0,o.jsxs)(t.p,{children:["The following steps are required to deploy the ",(0,o.jsx)(t.a,{href:"./wallet-context",children:"Sequence Wallet Context"})," on a new network."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Notice",type:"info",children:[(0,o.jsxs)(t.p,{children:["For most popular networks this process ",(0,o.jsx)(t.strong,{children:"is not"})," required; due to the wallet contracts being already deployed."]}),(0,o.jsxs)(t.p,{children:["To see if a configuration already exists for a given chain go to ",(0,o.jsx)(t.a,{href:"/multi-chain-support#networks",children:"Networks"}),"."]})]}),"\n",(0,o.jsx)(t.h3,{id:"1---deploy-singleton-factory",children:"1 - Deploy Singleton Factory"}),"\n",(0,o.jsxs)(t.p,{children:["The Singleton Factory is a contract that allows the deployment of a single contract instance per address. Unlike the\n",(0,o.jsx)(t.a,{href:"#universal-deployer",children:"Universal Deployer"}),", the Singleton Factory requires a salt to manage deployment instances. More information about the\nSingleton Factory can be found in the ",(0,o.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2470",children:"EIP-2470 specification"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The Pre-fund the Singleton Factory's deployer with the required funds to deploy the contract."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Address: 0xBb6e024b9cFFACB947A71991E386681B1Cd1477D\nFunds: 0.0247\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Do not send additional funds to the address, as funds can't be refunded."})}),"\n",(0,o.jsx)(t.p,{children:"Once the address is funded, you can deploy the Singleton Factory by executing the following pre-signed transaction:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0xf9016c8085174876e8008303c4d88080b90154608060405234801561001057600080fd5b50610134806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80634af63f0214602d575b600080fd5b60cf60048036036040811015604157600080fd5b810190602081018135640100000000811115605b57600080fd5b820183602082011115606c57600080fd5b80359060200191846001830284011164010000000083111715608d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550509135925060eb915050565b604080516001600160a01b039092168252519081900360200190f35b6000818351602085016000f5939250505056fea26469706673582212206b44f8a82cb6b156bfcc3dc6aadd6df4eefd204bc928a4397fd15dacf6d5320564736f6c634300060200331b83247000822470\n"})}),"\n",(0,o.jsx)(t.p,{children:"After the transaction is confirmed, you should see the address of the Singleton Factory:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Singleton Deployer: 0xce0042B868300000d44A59004Da54A005ffdcf9f\n"})}),"\n",(0,o.jsx)(t.h3,{id:"2---deploy-wallet-context",children:"2 - Deploy Wallet Context"}),"\n",(0,o.jsxs)(t.p,{children:["Deploy each of the contracts in the ",(0,o.jsx)(t.a,{href:"./wallet-context",children:"Sequence Wallet Context"})," using the Singleton Factory."]}),"\n",(0,o.jsxs)(t.p,{children:["A script can be found in the ",(0,o.jsx)(t.a,{href:"https://github.com/0xsequence/wallet-contracts/",children:"Sequence Wallet Contracts repository"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Clone the repository, configure the environment variables and run the script with:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"yarn deploy <network>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"deploy-process-v1",children:"Deploy Process V1"}),"\n",(0,o.jsxs)(t.p,{children:["The following steps are required to deploy the ",(0,o.jsx)(t.a,{href:"./wallet-context",children:"Sequence Wallet V1 Context"})," on a new network."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Notice",type:"info",children:[(0,o.jsxs)(t.p,{children:["For most popular networks this process ",(0,o.jsx)(t.strong,{children:"is not"})," required; due to the wallet contracts being already deployed."]}),(0,o.jsxs)(t.p,{children:["To see if a configuration already exists for a given chain go to ",(0,o.jsx)(t.a,{href:"/multi-chain-support#networks",children:"Networks"}),"."]})]}),"\n",(0,o.jsxs)(t.p,{children:["A complete code example of this deployment flow can be found in the ",(0,o.jsx)(t.a,{href:"https://github.com/0xsequence/sequence.js/blob/91ed0df67fc5ddc47abf727ae8b94a8ca4f66912/packages/0xsequence/tests/browser/testutils/deploy-wallet-context.ts",children:"0xSequence.js test suite"}),"\nand ",(0,o.jsx)(t.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/38e0719690eee3c4d7d8fa2ceff4ea22b0409f38/utils/deploy-contracts.ts",children:"Wallet Contracts repository"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"1---deploy-nanouniversaldeployer",children:"1 - Deploy NanoUniversalDeployer"}),"\n",(0,o.jsx)(t.p,{children:"Pre-found Nick's method address with funds required to pay for the deployment of contracts."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"Address: 0x9c5a87452d4FAC0cbd53BDCA580b20A45526B3AB\nFunds: 0.02170000000014\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Do not send additional funds to the address, as funds can't be refunded."})}),"\n",(0,o.jsx)(t.p,{children:"Once the address is funded, you can deploy the NanoUniversalDeployer by executing the following pre-signed transaction:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0xf9010880852416b84e01830222e08080b8b66080604052348015600f57600080fd5b50609980601d6000396000f3fe60a06020601f369081018290049091028201604052608081815260009260609284918190838280828437600092018290525084519495509392505060208401905034f5604080516001600160a01b0383168152905191935081900360200190a0505000fea26469706673582212205a310755225e3c740b2f013fb6343f4c205e7141fcdf15947f5f0e0e818727fb64736f6c634300060a00331ca01820182018201820182018201820182018201820182018201820182018201820a01820182018201820182018201820182018201820182018201820182018201820\n"})}),"\n",(0,o.jsx)(t.p,{children:"After the transaction is confirmed, you should see the address of the NanoUniversalDeployer:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"NanoUniversalDeployer: 0x9c5a87452d4FAC0cbd53BDCA580b20A45526B3AB\n"})}),"\n",(0,o.jsxs)(t.p,{children:["See more about the ",(0,o.jsx)(t.a,{href:"https://gist.github.com/Agusx1211/de05dabf918d448d315aa018e2572031",children:"NanoUniversalDeployer"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"2---deploy-universaldeployer2",children:"2 - Deploy UniversalDeployer2"}),"\n",(0,o.jsx)(t.p,{children:"In order to deploy contracts with an instance identifier, we need to deploy the UniversalDeployer2 contract. To ensure address consistency\nwe use the UniversalDeployer contract to deploy the UniversalDeployer contract."}),"\n",(0,o.jsx)(t.p,{children:"Send the following data to the UniversalDeployer deployed in the previous step."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"0x608060405234801561001057600080fd5b5061013d806100206000396000f3fe60806040526004361061001e5760003560e01c80639c4ae2d014610023575b600080fd5b6100cb6004803603604081101561003957600080fd5b81019060208101813564010000000081111561005457600080fd5b82018360208201111561006657600080fd5b8035906020019184600183028401116401000000008311171561008857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506100cd915050565b005b60008183516020850134f56040805173ffffffffffffffffffffffffffffffffffffffff83168152905191925081900360200190a050505056fea264697066735822122033609f614f03931b92d88c309d698449bb77efcd517328d341fa4f923c5d8c7964736f6c63430007060033\n"})}),"\n",(0,o.jsx)(t.p,{children:"After the transaction is confirmed, you should see the address of the UniversalDeployer2:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"UniversalDeployer2: 0x8a5bc19e22d6ad55a2c763b93a75d09f321fe764\n"})}),"\n",(0,o.jsx)(t.h3,{id:"3---deploy-wallet-context",children:"3 - Deploy Wallet Context"}),"\n",(0,o.jsxs)(t.p,{children:["Compile and deploy the contracts in the ",(0,o.jsx)(t.a,{href:"./wallet-context",children:"Sequence Wallet Context"})," using the UniversalDeployer2."]}),"\n",(0,o.jsxs)(t.p,{children:["Refer to the ",(0,o.jsx)(t.a,{href:"https://github.com/0xsequence/sequence.js/blob/91ed0df67fc5ddc47abf727ae8b94a8ca4f66912/packages/0xsequence/tests/browser/testutils/deploy-wallet-context.ts",children:"0xSequence.js test suite"}),"\nor ",(0,o.jsx)(t.a,{href:"https://github.com/0xsequence/wallet-contracts/blob/38e0719690eee3c4d7d8fa2ceff4ea22b0409f38/utils/deploy-contracts.ts",children:"Wallet Contracts repository"}),"\nfor the Wallet Contract context codebase."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},7279:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(959);const s={},l=o.createContext(s);function r(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);