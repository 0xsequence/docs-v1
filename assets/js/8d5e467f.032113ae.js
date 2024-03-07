"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[8283],{8240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(1527),o=t(7279);const s={},a="Tokens",c={id:"unity-waas-sdk/Advanced/tokens",title:"Tokens",description:"Since their use is so ubiquitous, we've provided ERC20, ERC721, and ERC1155 wrappers of the Contract class with pre-defined ABIs for your convenience. When interacting with tokens, it is recommended to use these.",source:"@site/docs/120-unity-waas-sdk/Advanced/06-tokens.mdx",sourceDirName:"120-unity-waas-sdk/Advanced",slug:"/unity-waas-sdk/Advanced/tokens",permalink:"/unity-waas-sdk/Advanced/tokens",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/120-unity-waas-sdk/Advanced/06-tokens.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Contracts",permalink:"/unity-waas-sdk/Advanced/contracts"},next:{title:"Wallet",permalink:"/wallet"}},i={},d=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tokens",children:"Tokens"}),"\n",(0,r.jsxs)(n.p,{children:["Since their use is so ubiquitous, we've provided ",(0,r.jsx)(n.code,{children:"ERC20"}),", ",(0,r.jsx)(n.code,{children:"ERC721"}),", and ",(0,r.jsx)(n.code,{children:"ERC1155"})," wrappers of the ",(0,r.jsx)(n.code,{children:"Contract"})," class with pre-defined ABIs for your convenience. When interacting with tokens, it is recommended to use these."]}),"\n",(0,r.jsx)(n.p,{children:"Any of these contract wrappers can be created via a standard constructor requiring only the contract address. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ERC20 erc20 = new ERC20(contractAddress);\n"})}),"\n",(0,r.jsx)(n.p,{children:"You may also provide your own ABI should you need to rewrite our default; however, doing so may require you to modify or rewrite the contract wrappers."}),"\n",(0,r.jsx)(n.p,{children:"An example of querying:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"string symbol = await erc20.Symbol(client);\nBigIntegar balance = await erc20.BalanceOf(client, address);\n"})}),"\n",(0,r.jsx)(n.p,{children:"An example of sending a transaction:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"TransactionReceipt receipt = await erc20.Mint(toAddress, DecimalNormalizer.NormalizeAsBigInteger(1)).SendTransactionMethodAndWaitForReceipt(wallet, client);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As a wrapper of ",(0,r.jsx)(n.code,{children:"Contract"}),", you also have the option to not create the ",(0,r.jsx)(n.code,{children:"EthTransaction"})," and send later on."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"CallContractFunction transactionCreator = erc20.Transfer(toAddress, DecimalNormalizer.NormalizeAsBigInteger(1));\nEthTransaction transaction = await transactionCreator.Create(client, new ContractCall(wallet.GetAddress()));\nTransactionReceipt receipt = await wallet.SendTransactionAndWaitForReceipt(client, transaction);\n"})}),"\n",(0,r.jsx)(n.h1,{id:"bonus-ownable",children:"Bonus: Ownable"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to with tokens, we have also provided an ",(0,r.jsx)(n.code,{children:"Ownable"})," wrapper for your convenience as well which has a pre-defined ABI for methods implementing the ",(0,r.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/2.x/access-control#ownership-and-ownable",children:"Ownable"})," interface.\n",(0,r.jsx)(n.code,{children:"ERC20"}),", ",(0,r.jsx)(n.code,{children:"ERC721"}),", and ",(0,r.jsx)(n.code,{children:"ERC1155"})," all inherit from this, but we encourage you to use ",(0,r.jsx)(n.code,{children:"Ownable"})," whenever you wish to interact with the Ownable methods on any arbitrary contract for convenience and safety."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},7279:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(959);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);