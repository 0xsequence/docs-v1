"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[66],{3226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var s=n(1527),i=n(7279);const o={},r="Using Sequence on testnets",l={id:"wallet/guides/using-testnets",title:"Using Sequence on testnets",description:"By default, all Sequence wallets are able to use all supported networks (including testnets!). Dapps can interact with any of these testnets like they would with any other network.",source:"@site/docs/03-wallet/04-guides/11-using-testnets.mdx",sourceDirName:"03-wallet/04-guides",slug:"/wallet/guides/using-testnets",permalink:"/wallet/guides/using-testnets",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/04-guides/11-using-testnets.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"sidebar",previous:{title:"Building Backends with Sequence",permalink:"/wallet/guides/building-backends"},next:{title:"Wallet Connectors",permalink:"/wallet/connectors/overview"}},a={},c=[{value:"Supported test networks",id:"supported-test-networks",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"using-sequence-on-testnets",children:"Using Sequence on testnets"}),"\n",(0,s.jsx)(t.p,{children:"By default, all Sequence wallets are able to use all supported networks (including testnets!). Dapps can interact with any of these testnets like they would with any other network."}),"\n",(0,s.jsxs)(t.p,{children:["For example, if a dapp only wants to interact with the Mumbai testnet, they can do so by specifying the network when ",(0,s.jsx)(t.code,{children:"initWallet"})," is called:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { sequence } from '0xsequence'\n\nconst wallet = sequence.initWallet({ defaultNetwork: 'mumbai' })\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Most methods also support a ",(0,s.jsx)(t.code,{children:"chainId"})," parameter, which can be used to specify the network to interact with:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const signer = wallet.getSigner()\n\nconst transaction = {\n  to: '0x6d52be8194216fF4E7685D285728C8dF9050b2CC',\n  value: ethers.utils.parseEther('0.1')\n}\n\nconst response = await signer.sendTransaction(transaction, { chainId: 'mumbai' })\n"})}),"\n",(0,s.jsx)(t.h2,{id:"supported-test-networks",children:"Supported test networks"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Goerli"}),"\n",(0,s.jsx)(t.li,{children:"Mumbai"}),"\n",(0,s.jsx)(t.li,{children:"BSC Testnet"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7279:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var s=n(959);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);