"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[4788],{8720:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=a(1527),o=a(7279);const s={},r="Write to Blockchain",i={id:"unity-waas-sdk/write-to-blockchain",title:"Write to Blockchain",description:"The blockchain can be thought of as a general-purpose, publically viewable and verified, database. To write to a blockchain, similar to with a typical database, you must make a transaction.",source:"@site/docs/unity-waas-sdk/05-write-to-blockchain.mdx",sourceDirName:"unity-waas-sdk",slug:"/unity-waas-sdk/write-to-blockchain",permalink:"/unity-waas-sdk/write-to-blockchain",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/unity-waas-sdk/05-write-to-blockchain.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Authentication",permalink:"/unity-waas-sdk/authentication"},next:{title:"Read from Blockchain",permalink:"/unity-waas-sdk/read-from-blockchain"}},c={},d=[{value:"RawTransaction",id:"rawtransaction",level:2},{value:"sendERC20",id:"senderc20",level:2},{value:"Complex ERC20 Interactions",id:"complex-erc20-interactions",level:3},{value:"sendERC721",id:"senderc721",level:2},{value:"Complex ERC721 Interactions",id:"complex-erc721-interactions",level:3},{value:"sendERC1155",id:"senderc1155",level:2},{value:"Complex ERC1155 Interactions",id:"complex-erc1155-interactions",level:3},{value:"DelayedEncode",id:"delayedencode",level:2},{value:"Batch Transactions",id:"batch-transactions",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"write-to-blockchain",children:"Write to Blockchain"}),"\n",(0,t.jsxs)(n.p,{children:["The blockchain can be thought of as a general-purpose, publically viewable and verified, database. To write to a blockchain, similar to with a typical database, you must make a ",(0,t.jsx)("u",{children:"transaction"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Typically, creating a blockchain transaction is rather complex, but WaaS handles that complexity for you and exposes 5 types of ",(0,t.jsx)(n.code,{children:"Transactions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Sending a transaction is an ",(0,t.jsx)(n.a,{href:"https://medium.com/@sonusprocks/async-await-in-c-unity-explained-in-easy-words-571ebb6a9369",children:"asynchronous Task"}),". You can use ",(0,t.jsx)(n.code,{children:"await"})," when calling ",(0,t.jsx)(n.code,{children:"WaaSWallet.SendTransaction"})," from within an async Task if you wish to obtain the ",(0,t.jsx)(n.code,{children:"TransactionReturn"})," object directly. Or, you can take the recommended approach which is to setup handler functions for the ",(0,t.jsx)(n.code,{children:"WaaSWallet.OnSendTransactionComplete"})," and ",(0,t.jsx)(n.code,{children:"WaaSWallet.OnSendTransactionFailed"})," events and call the ",(0,t.jsx)(n.code,{children:"WaaSWallet.SendTransaction"})," method from anywhere (without await). For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"public void OnSendTransactionCompleteHandler(SuccessfulTransactionReturn result) {\n    // Do something\n}\n\npublic void OnSendTransactionFailedHandler(FailedTransactionReturn result) {\n    // Do something\n}\n\npublic void OnWaaSWalletCreatedHander(WaaSWallet wallet) {\n    wallet.OnSendTransactionComplete += OnSendTransactionCompleteHandler;\n    wallet.OnSendTransactionFailed += OnSendTransactionFailedHandler;\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you're unfamiliar with working with events in Unity, check out this great ",(0,t.jsx)(n.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]}),"\n",(0,t.jsx)(n.h2,{id:"rawtransaction",children:"RawTransaction"}),"\n",(0,t.jsxs)(n.p,{children:["The most basic form of a ",(0,t.jsx)(n.code,{children:"Transaction"}),", a raw transaction is very useful to send ETH or the gas currency of the network you are interacting with to an ",(0,t.jsx)(n.code,{children:"Address"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, to send one MATIC to ",(0,t.jsx)(n.code,{children:"0x9766bf76b2E3e7BCB8c61410A3fC873f1e89b43f"})," you can use this snippet:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'_wallet.SendTransaction(\n    Chain.Polygon,\n    new SequenceSDK.WaaS.Transaction[]\n    {\n        new RawTransaction("0x9766bf76b2E3e7BCB8c61410A3fC873f1e89b43f", DecimalNormalizer.Normalize(1))\n    });\n'})}),"\n",(0,t.jsx)(n.p,{children:"where _wallet is a WaaSWallet."}),"\n",(0,t.jsxs)(n.p,{children:["Note: the ",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/evm/",children:"EVM"}),' does not support floating point numbers. As a result, token (and gas currency) values are represented by whole numbers and a "decimals" value. 1 ETH (or in the example above 1 MATIC) is represented as ',(0,t.jsx)(n.code,{children:"1000000000000000000"}),' (1 * 10^18) as ETH, MATIC, and most gas currencies have a "decimals" value of 18. ',(0,t.jsx)(n.code,{children:"DecimalNormalizer.Normalize"})," (above) is a basic helper function that will return ",(0,t.jsx)(n.code,{children:"input value * 10^decimals"}),' and optionally accepts a "decimals" value as a second parameter (defaulting to 18 when not provided).']}),"\n",(0,t.jsx)(n.p,{children:"Additionally, you can include data with a raw transaction in hexadecimal format as a string. For more on this, please see the advanced section of this documentation."}),"\n",(0,t.jsx)(n.h2,{id:"senderc20",children:"sendERC20"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/erc20",children:"ERC20"})," token is the fungible token standard. You can easily deploy an ERC20 contract and mint tokens using our ",(0,t.jsx)(n.a,{href:"https://sequence.build/",children:"Builder"}),". Learn how in our ",(0,t.jsx)(n.a,{href:"https://docs.sequence.xyz/builder/overview",children:"Builder documentation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To send an ERC20 token transaction, you can use this code snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new SendERC20(\n            erc20TokenAddress,\n            ToAddress,\n            AmountAsString),\n    });\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note: as above, it is recommended to use ",(0,t.jsx)(n.code,{children:"DecimalNormalizer.Normalize"}),' to convert the amount from human readable format to EVM format. Please make sure to include the optional "decimals" int parameter if your ERC20 token has a "decimals" value that is not 18. If you\'re not sure how many "decimals" your ERC20 has, this can be easily read on the Builder using the "decimals" method under "Read Contract".']}),"\n",(0,t.jsx)(n.h3,{id:"complex-erc20-interactions",children:"Complex ERC20 Interactions"}),"\n",(0,t.jsxs)(n.p,{children:["For interactions with ERC20 tokens outside of basic transfers, you'll want to use our ",(0,t.jsx)(n.code,{children:"SequenceEthereum"})," library provided with the SDK. We've created ERC20 smart contract wrapper functions for your convenience that allow you to create and send ",(0,t.jsx)(n.code,{children:"RawTransactions"})," with WaaS."]}),"\n",(0,t.jsxs)(n.p,{children:["First, you'll need to create an ",(0,t.jsx)(n.code,{children:"ERC20"})," object by providing a contract address and optionally, an ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," string, if you are using a custom variation of the ERC20 standard (not recommended)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ERC20 myToken = new ERC20(myTokenAddress);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["with this reference, you'll have access to all of the methods implemented by the ERC20 class. Any method that returns a ",(0,t.jsx)(n.code,{children:"CallContractFunction"}),", e.g. ",(0,t.jsx)(n.code,{children:"Mint"}),", can be used when creating a RawTransaction with WaaS. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ERC20 myToken = new ERC20(myTokenAddress);\n_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new RawTransaction(myToken.Mint(toAddress, DecimalNormalizer.NormalizeAsBigInteger(amount))),\n    });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"senderc721",children:"sendERC721"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/erc721",children:"ERC721"})," token is the non-fungible standard, you've probably heard of them as NFTs. You can easily deploy an ERC721 contract and mint tokens using our ",(0,t.jsx)(n.a,{href:"https://sequence.build/",children:"Builder"}),". Learn how in our ",(0,t.jsx)(n.a,{href:"https://docs.sequence.xyz/builder/overview",children:"Builder documentation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To send an ERC721 token transaction, you can use this code snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new SendERC721(\n            erc721TokenAddress,\n            ToAddress,\n            TokenIdAsString),\n    });\n"})}),"\n",(0,t.jsx)(n.h3,{id:"complex-erc721-interactions",children:"Complex ERC721 Interactions"}),"\n",(0,t.jsxs)(n.p,{children:["For interactions with ERC721 tokens outside of basic transfers, you'll want to use our ",(0,t.jsx)(n.code,{children:"SequenceEthereum"})," library provided with the SDK. We've created ERC21 smart contract wrapper functions for your convenience that allow you to create and send ",(0,t.jsx)(n.code,{children:"RawTransactions"})," with WaaS."]}),"\n",(0,t.jsxs)(n.p,{children:["First, you'll need to create an ",(0,t.jsx)(n.code,{children:"ERC721"})," object by providing a contract address and optionally, an ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," string, if you are using a custom variation of the ERC721 standard (not recommended)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ERC721 myToken = new ERC721(myTokenAddress);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["with this reference, you'll have access to all of the methods implemented by the ERC721 class. Any method that returns a ",(0,t.jsx)(n.code,{children:"CallContractFunction"}),", e.g. ",(0,t.jsx)(n.code,{children:"SafeMint"}),", can be used when creating a RawTransaction with WaaS. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ERC721 myToken = new ERC721(myTokenAddress);\n_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new RawTransaction(myToken.SafeMint(toAddress)),\n    });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"senderc1155",children:"sendERC1155"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/4.x/api/token/erc1155",children:"ERC1155"})," token is the multi token standard, often referred to as SFTs (semi-fungible tokens). As ",(0,t.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1155",children:"co-creators of the ERC1155 standard"})," we are firm believers in its unparalleled usefulness for games. You can easily deploy an ERC1155 contract and mint tokens using our ",(0,t.jsx)(n.a,{href:"https://sequence.build/",children:"Builder"}),". Learn how in our ",(0,t.jsx)(n.a,{href:"https://docs.sequence.xyz/builder/overview",children:"Builder documentation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To send an ERC1155 token transaction, you can use this code snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new SendERC1155(\n            erc1155TokenAddress,\n            ToAddress,\n            new SendERC1155Values[]\n            {\n                new SendERC1155Values(TokenIdAsString, AmountAsString),\n                ...\n            }),\n    });\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note: you can send multiple token ids from the same ERC1155 contract in a single transaction by including multiple ",(0,t.jsx)(n.code,{children:"SendERC1155Values"})," objects in the transaction"]}),"\n",(0,t.jsx)(n.h3,{id:"complex-erc1155-interactions",children:"Complex ERC1155 Interactions"}),"\n",(0,t.jsxs)(n.p,{children:["For interactions with ERC1155 tokens outside of basic transfers, you'll want to use our ",(0,t.jsx)(n.code,{children:"SequenceEthereum"})," library provided with the SDK. We've created ERC1155 smart contract wrapper functions for your convenience that allow you to create and send ",(0,t.jsx)(n.code,{children:"RawTransactions"})," with WaaS."]}),"\n",(0,t.jsxs)(n.p,{children:["First, you'll need to create an ",(0,t.jsx)(n.code,{children:"ERC1155"})," object by providing a contract address and optionally, an ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," string, if you are using a custom variation of the ERC1155 standard (not recommended)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ERC1155 myToken = new ERC1155(myTokenAddress);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["with this reference, you'll have access to all of the methods implemented by the ERC1155 class. Any method that returns a ",(0,t.jsx)(n.code,{children:"CallContractFunction"}),", e.g. ",(0,t.jsx)(n.code,{children:"Mint"}),", can be used when creating a RawTransaction with WaaS. For example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"ERC1155 myToken = new ERC1155(myTokenAddress);\n_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new RawTransaction(myToken.Mint(toAddress, tokenId, amount)),\n    });\n"})}),"\n",(0,t.jsx)(n.h2,{id:"delayedencode",children:"DelayedEncode"}),"\n",(0,t.jsxs)(n.p,{children:["When calling a smart contract on an EVM-based network, the client goes through a complex process known as \"ABI encoding\" where the function signature you want to call as well as the parameters you're providing are encoded into a binary format. This process is complicated and error-prone so we've abstracted it all away so that you don't have to deal with it. But, if you're curious to learn how it works, please see ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/develop/abi-spec.html",children:"this document"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"A DelayedEncode transaction allows you to call any method on an arbitrary smart contract, allowing us to handle the complicated ABI encoding process."}),"\n",(0,t.jsx)(n.p,{children:"To send a DelayedEncode transaction, you can use this code snippet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new DelayedEncode(ContractAddress, ValueAsString, new DelayedEncodeData(\n            ContractABIAsString,\n            ParametersAsObjectArray,\n            FunctionNameAsString)),\n    });\n"})}),"\n",(0,t.jsx)(n.p,{children:"Let's examine the above to get a better understanding of some of the variables that may be non-obvious."}),"\n",(0,t.jsxs)(n.p,{children:["ValueAsString: This will ",(0,t.jsx)("i",{children:"usually"}),' be "0" unless you are calling a ',(0,t.jsx)(n.a,{href:"https://solidity-by-example.org/payable/",children:"payable method"})," denoted by the ",(0,t.jsx)(n.code,{children:"payable"})," keyword in the smart contract definition. If you are calling a payable method, it is recommended to use ",(0,t.jsx)(n.code,{children:"DecimalNormalizer.Normalize"})," to convert the amount from human readable format to EVM format."]}),"\n",(0,t.jsxs)(n.p,{children:["ContractABIAsString: This can either be the entire ",(0,t.jsx)(n.a,{href:"https://docs.soliditylang.org/en/latest/abi-spec.html#json",children:"ABI"})," or just the function you plan on interacting with. If you're not familiar with ABIs, we'd recommend copy-pasting the function signature (with parameters) from the contract source code on Etherscan (or the appropriate block explorer for your network) and removing the whitespace and variable names."]}),"\n",(0,t.jsx)(n.p,{children:"ParametersAsObjectArray: The parameters you want to provide to the method you wish to call. No need to provide the parameter names, just their values in the order they appear in the ABI. Provide parameters in string format when in doubt."}),"\n",(0,t.jsx)(n.p,{children:"FunctionNameAsString: The name of the function you want to call as it appears in the ABI (or source code). Exclude parentheses and parameters."}),"\n",(0,t.jsx)(n.p,{children:'Putting this together, an example of using delayed encode to call the "mint" function on an ERC20 would look like this:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'_wallet.SendTransaction(Chain.Polygon, new SequenceSDK.WaaS.Transaction[]\n    {\n        new DelayedEncode(ContractAddress, "0", new DelayedEncodeData(\n            "mint(address,uint256)",\n            new object[]\n            {\n                ToAddress, DecimalNormalizer.Normalize(1)\n            },\n            "mint")),\n    });\n'})}),"\n",(0,t.jsx)(n.h2,{id:"batch-transactions",children:"Batch Transactions"}),"\n",(0,t.jsx)(n.p,{children:"Using the magic of the Sequence Smart Contract wallet, our SDK allows you to seemlessly batch transactions together. Batching transactions together is extremely beneficial as it provides material gas savings and allows you to create complex transactions, that either all pass or all fail, without deploying custom smart contracts for each bespoke use case, opening a whole new realm of design possibilities!"}),"\n",(0,t.jsxs)(n.p,{children:["Sending a batch transaction is easy! Simply include multiple transactions, of any type, in your transaction array when making the ",(0,t.jsx)(n.code,{children:"SendTransaction"})," request."]}),"\n",(0,t.jsx)(n.p,{children:"For example - sending a transaction of each type in a batch:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"_wallet.SendTransaction(\n    Chain.Polygon,\n    new SequenceSDK.WaaS.Transaction[]\n    {\n        new RawTransaction(ToAddress, DecimalNormalizer.Normalize(1)),\n        new SendERC20(\n            erc20TokenAddress,\n            ToAddress,\n            AmountAsString),\n        new RawTransaction(new ERC20(erc20TokenAddress).Burn(DecimalNormalizer.NormalizeAsBigInteger(amount))),\n        new SendERC721(\n            erc721TokenAddress,\n            ToAddress,\n            TokenIdAsString),\n        new SendERC1155(\n            erc1155TokenAddress,\n            ToAddress,\n            new SendERC1155Values[]\n            {\n                new SendERC1155Values(TokenIdAsString, AmountAsString),\n                ...\n            }),\n        new DelayedEncode(ContractAddress, ValueAsString, new DelayedEncodeData(\n            ContractABIAsString,\n            ParametersAsObjectArray,\n            FunctionNameAsString)),\n    });\n"})}),"\n",(0,t.jsx)(n.p,{children:"Since these transactions are all batched into a single transaction by the Sequence Smart Contract Wallet before being submitted to the network, you will receive only one transaction receipt."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7279:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>r});var t=a(959);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);