"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[4312],{3156:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var c=t(1527),o=t(4089);const r={sidebar_label:"Checkout"},i="Overview",s={id:"wallet/connectors/kit/checkout",title:"Overview",description:"The checkout modal enables developers to easily facilitate cryptocurrency payments.",source:"@site/docs/03-wallet/05-connectors/02-kit/04-checkout.mdx",sourceDirName:"03-wallet/05-connectors/02-kit",slug:"/wallet/connectors/kit/checkout",permalink:"/wallet/connectors/kit/checkout",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/05-connectors/02-kit/04-checkout.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"Checkout"},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/wallet/connectors/kit/configuration"},next:{title:"Custom Connectors",permalink:"/wallet/connectors/kit/custom-connectors"}},a={},l=[{value:"Opening the Checkout modal",id:"opening-the-checkout-modal",level:2},{value:"Configuring the Checkout modal",id:"configuring-the-checkout-modal",level:2},{value:"Crypto Checkout Configuration (<code>cryptoCheckout</code>)",id:"crypto-checkout-configuration-cryptocheckout",level:3},{value:"Order Summary Configuration (<code>orderSummaryItems</code>)",id:"order-summary-configuration-ordersummaryitems",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"overview",children:"Overview"}),"\n",(0,c.jsx)(n.p,{children:"The checkout modal enables developers to easily facilitate cryptocurrency payments."}),"\n",(0,c.jsx)("div",{class:"text--center",children:(0,c.jsx)("img",{src:"/img/kit/checkout-modal.png"})}),"\n",(0,c.jsx)(n.h1,{id:"integration",children:"Integration"}),"\n",(0,c.jsx)(n.p,{children:"To integrate the checkout feature, follow these steps:"}),"\n",(0,c.jsxs)(n.ol,{children:["\n",(0,c.jsxs)(n.li,{children:["Install the ",(0,c.jsx)(n.code,{children:"kit-checkout"})," module:"]}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-bash",children:"npm install @0xsequence/kit-checkout\n# or\npnpm install @0xsequence/kit-checkout\n# or\nyarn add @0xsequence/kit-checkout\n"})}),"\n",(0,c.jsxs)(n.ol,{start:"2",children:["\n",(0,c.jsx)(n.li,{children:"Place the KitCheckoutProvider below the Sequence Kit Core provider in your app:"}),"\n"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"import { KitCheckoutProvider } from '@0xsequence/kit-checkout'\n\n\nconst App = () => {\n  return (\n    <WagmiConfig config={config}>\n      <KitProvider>\n        <KitCheckoutProvider>\n          <Page />\n        </KitCheckoutProvider>\n      </KitProvider>\n    </WagmiConfig>\n  )\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"opening-the-checkout-modal",children:"Opening the Checkout modal"}),"\n",(0,c.jsxs)(n.p,{children:["Use the ",(0,c.jsx)(n.code,{children:"useCheckoutModal"})," hook to open the checkout modal and pass a settings object:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"  import { useCheckoutModal } from '@0xsequence/kit-checkout'\n\n\n  const MyComponent = () => {\n    const { triggerCheckout } = useCheckoutModal()\n  \n    const onClick = () => {\n      const checkoutSettings = {...}\n      triggerCheckout(checkoutSettings)\n    }\n\n    return (\n      <button onClick={onClick}>checkout</button>\n    )\n  }\n"})}),"\n",(0,c.jsx)(n.h2,{id:"configuring-the-checkout-modal",children:"Configuring the Checkout modal"}),"\n",(0,c.jsxs)(n.p,{children:["Configure the checkout modal using the ",(0,c.jsx)(n.code,{children:"checkoutSettings"})," object:"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"const checkoutSettings = {\n  cryptoCheckout: {...},\n  orderSummaryItems: {...}\n}\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"crypto-checkout-configuration-cryptocheckout",children:["Crypto Checkout Configuration (",(0,c.jsx)(n.code,{children:"cryptoCheckout"}),")"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"cryptoCheckout"})," field specifies settings for checking out with cryptocurrency, e.g., interacting with a minting contract or marketplace contract."]}),"\n",(0,c.jsx)(n.p,{children:"Example configuration:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"cons checkoutConfig = {\n  // ...\n  cryptoCheckout: {\n    chainId: 137,\n    triggerTransaction: async () => { console.log('triggered transaction') },\n    coinQuantity: {\n      contractAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',\n      amountRequiredRaw: '10000000000'\n    },\n  },\n}\n"})}),"\n",(0,c.jsxs)(n.h3,{id:"order-summary-configuration-ordersummaryitems",children:["Order Summary Configuration (",(0,c.jsx)(n.code,{children:"orderSummaryItems"}),")"]}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"orderSummaryItems"})," field specifies the list of collectibles shown in the order summary."]}),"\n",(0,c.jsx)(n.p,{children:"Example configuration:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-jsx",children:"    orderSummaryItems: [\n      {\n        contractAddress: '0x631998e91476da5b870d741192fc5cbc55f5a52e',\n        tokenId: '66597',\n        quantityRaw: '100'\n      },\n    ]\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},4089:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var c=t(959);const o={},r=c.createContext(o);function i(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);