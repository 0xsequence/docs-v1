"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5106],{568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=n(1527),r=n(7279);const c={},o="Contracts",i={id:"unity-waas-sdk/Advanced/contracts",title:"Contracts",description:"Creating a Contract object for an already deployed contract is rather straightforward.",source:"@site/docs/unity-waas-sdk/Advanced/05-contracts.mdx",sourceDirName:"unity-waas-sdk/Advanced",slug:"/unity-waas-sdk/Advanced/contracts",permalink:"/unity-waas-sdk/Advanced/contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/unity-waas-sdk/Advanced/05-contracts.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Transfers",permalink:"/unity-waas-sdk/Advanced/transfers"},next:{title:"Tokens",permalink:"/unity-waas-sdk/Advanced/tokens"}},s={},d=[{value:"Calling Smart Contract Functions",id:"calling-smart-contract-functions",level:2},{value:"Understanding data type mappings",id:"understanding-data-type-mappings",level:2},{value:"Querying Contracts",id:"querying-contracts",level:2},{value:"Deploying Contracts",id:"deploying-contracts",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"contracts",children:"Contracts"}),"\n",(0,a.jsxs)(t.p,{children:["Creating a ",(0,a.jsx)(t.code,{children:"Contract"})," object for an already deployed contract is rather straightforward."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Contract contract = new Contract(contractAddress, abi);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["While it is not strictly required, it is ",(0,a.jsx)("i",{children:"highly"})," recommended to provide the contract ABI as a string when creating a contract object. Failure to do so will make it so that you cannot fully take advantage of our ABI encoding and decoding.\nIf you do chose to go down this route, you will need to provide the entire function signature (function name + parameter types in brackets - e.g. transfer(address,uint256) for the ERC20 transfer method) when calling a function or querying the contract and you will only ever receive a string as a response to queries."]}),"\n",(0,a.jsx)(t.h2,{id:"calling-smart-contract-functions",children:"Calling Smart Contract Functions"}),"\n",(0,a.jsxs)(t.p,{children:["To call a smart contract, you'll use the ",(0,a.jsx)(t.code,{children:"CallFunction"})," method to create a ",(0,a.jsx)(t.code,{children:"CallContractFunction"})," object which will determine the appropriate gasPrice, gasLimit, nonce, and data to include in a newly assembled ",(0,a.jsx)(t.code,{children:"EthTransaction"})," when provided with a client and a ",(0,a.jsx)(t.code,{children:"ContractCall"})," object to the ",(0,a.jsx)(t.code,{children:"Create"})," async Task"]}),"\n",(0,a.jsx)(t.p,{children:"An example of calling a smart contract would look like:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'Contract erc20Contract = new Contract(contractAddress, contractAbi); // We\'ll use the well-known ERC20 contract as our example case\nTransactionReceipt receipt = await erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger).SendTransactionMethodAndWaitForReceipt(wallet, client);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Note: if you don't want to wait for the receipt, you can use ",(0,a.jsx)(t.code,{children:"SendTransactionMethod"})," instead."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, if you want to simply create the ",(0,a.jsx)(t.code,{children:"EthTransaction"})," and send it at a later time, you can use the ",(0,a.jsx)(t.code,{children:"CallContractFunction"})," object from ",(0,a.jsx)(t.code,{children:"CallFunction"})," directly."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'Contract erc20Contract = new Contract(contractAddress, contractAbi); // We\'ll use the well-known ERC20 contract as our example case\nEthTransaction transaction = await erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger).Create(client, new ContractCall(wallet.GetAddress()));\nTransactionReceipt receipt = await wallet.SendTransactionAndWaitForReceipt(client, transaction);\n\n// or \nCallContractFunction transactionCreator = erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger);\nEthTransaction transaction = await transactionCreator.Create(client, new ContractCall(wallet.GetAddress()));\nTransactionReceipt receipt = await wallet.SendTransactionAndWaitForReceipt(client, transaction);\n\n// or \nCallContractFunction transactionCreator = erc20Contract.CallFunction("transfer", toAddress, amountAsBigInteger);\nTransactionReceipt receipt = await transactionCreator.SendTransactionMethodAndWaitForReceipt(wallet, client);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["You'll notice that the ",(0,a.jsx)(t.code,{children:"CallFunction"})," method accepts an arbitrary number of arguments. You'll want to provide the arguments in the order they are provided in the ABI/function signature."]}),"\n",(0,a.jsx)(t.h2,{id:"understanding-data-type-mappings",children:"Understanding data type mappings"}),"\n",(0,a.jsx)(t.p,{children:"When interacting with smart contracts, it is important to understand how EVM datatypes are mapped to C# datatypes in the SequenceEthereum library."}),"\n",(0,a.jsx)(t.p,{children:"bool -> bool"}),"\n",(0,a.jsx)(t.p,{children:"Integers (int, uint, int256, uint8, ...) -> BigInteger"}),"\n",(0,a.jsx)(t.p,{children:"address -> Address or string"}),"\n",(0,a.jsx)(t.p,{children:"string -> string"}),"\n",(0,a.jsx)(t.p,{children:"Fixed bytes (bytesN for any N value) -> FixedByte"}),"\n",(0,a.jsx)(t.p,{children:"bytes -> byte[]"}),"\n",(0,a.jsx)(t.p,{children:"If you were to, for example, provide a string where the ABI expects an Integer, you will receive an exception, even if that string could be converted into an integer."}),"\n",(0,a.jsx)(t.h2,{id:"querying-contracts",children:"Querying Contracts"}),"\n",(0,a.jsxs)(t.p,{children:["To query a smart contract (read data from it), you'll use the ",(0,a.jsx)(t.code,{children:"SendQuery<T>"})," method to query the contract and return the result as type T (if possible).\nAn example of querying a smart contract would look like:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'Contract erc20Contract = new Contract(contractAddress, contractAbi); // We\'ll use the well-known ERC20 contract as our example case\nBigIntegar balance = await erc20Contract.SendQuery<BigIntegar>(client, "balanceOf", address);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, if you wish to simply construct the query and send it at a later time, you can use ",(0,a.jsx)(t.code,{children:"QueryContract<T>"})," to create a delegate."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:'Contract erc20Contract = new Contract(contractAddress, contractAbi); // We\'ll use the well-known ERC20 contract as our example case\nQueryContractMessageSender<BigIntegar> balanceQuery = erc20Contract.QueryContract<BigIntegar>("balanceOf", address);\nBigIntegar balance = await balanceQuery(client);\n// or\nBigIntegar balance = await balanceQuery.SendQuery(client);\n'})}),"\n",(0,a.jsx)(t.h2,{id:"deploying-contracts",children:"Deploying Contracts"}),"\n",(0,a.jsxs)(t.p,{children:["If you want to deploy a contract, you can use the ",(0,a.jsx)(t.code,{children:"ContractDeployer"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"ContractDeploymentResult deploymentResult = await ContractDeployer.Deploy(client, wallet, contractBytecodeAsString);\nstring newlyDeployedContractAddress = deploymentResult.Receipt.contractAddress;\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7279:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(959);const r={},c=a.createContext(r);function o(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);