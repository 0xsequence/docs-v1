"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6723],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const l={},r="Connect Wallet",i={unversionedId:"build-with-sequence/connect-wallet",id:"build-with-sequence/connect-wallet",title:"Connect Wallet",description:"Sequence is a very flexible wallet which allow users multiple ways to connect / access their wallet. This includes:",source:"@site/docs/build-with-sequence/02-connect-wallet.mdx",sourceDirName:"build-with-sequence",slug:"/build-with-sequence/connect-wallet",permalink:"/build-with-sequence/connect-wallet",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/build-with-sequence/02-connect-wallet.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation",permalink:"/build-with-sequence/installation"},next:{title:"Get Wallet Account Address",permalink:"/build-with-sequence/get-address"}},s={},c=[{value:"Connecting your dapp with <code>0xsequence</code>",id:"connecting-your-dapp-with-0xsequence",level:2},{value:"Wallet Login and Connect Options",id:"wallet-login-and-connect-options",level:2},{value:"<strong>theme</strong>",id:"theme",level:4},{value:"<strong>bannerUrl</strong>",id:"bannerurl",level:4},{value:"<strong>includedPaymentProviders</strong>",id:"includedpaymentproviders",level:4},{value:"<strong>defaultFundingCurrency</strong>",id:"defaultfundingcurrency",level:4},{value:"<strong>defaultPurchaseAmount</strong>",id:"defaultpurchaseamount",level:4},{value:"<strong>lockFundingCurrencyToDefault</strong>",id:"lockfundingcurrencytodefault",level:4},{value:"Connecting your dapp with <code>web3.js</code> or <code>ethers.js</code>",id:"connecting-your-dapp-with-web3js-or-ethersjs",level:2},{value:"Connecting to any Ethereum dapp with the Sequence Wallet Chrome Extension",id:"connecting-to-any-ethereum-dapp-with-the-sequence-wallet-chrome-extension",level:2},{value:"Connecting via <code>WalletConnect</code>",id:"connecting-via-walletconnect",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-wallet"},"Connect Wallet"),(0,o.kt)("p",null,"Sequence is a very flexible wallet which allow users multiple ways to connect / access their wallet. This includes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"On-demand Ethereum web wallet for new users")," via ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/0xsequence"},"0xsequence")," npm package + ",(0,o.kt)("a",{parentName:"p",href:"https://sequence.app"},"https://sequence.app")," -- this option allows\ndevelopers to offer users an on-demand Web3 wallet. No user install required -- any browser will ",(0,o.kt)("em",{parentName:"p"},"just work"),", and users\ncan on-board with a familiar Web2 experience. Think of it like ",(0,o.kt)("em",{parentName:"p"},"Paypal / Stripe but for Web3"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Surf all of Web3")," via ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/sequence-wallet/ocmccklecaalljlflmclidjeclpcpdim?hl=en"},"Sequence Wallet Chrome Extension")," -- users\nwho have the Sequence Wallet Chrome Extension installed are able to access any Ethereum-compatible Dapp on the Web :) Just like how MetaMask works,\nbut of course with a bunch of the benefits of Sequence.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mobile phone access")," via ",(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"WalletConnect")," support within Sequence Wallet -- users are able to communicate with their wallets remotely\nvia the awesome Wallet Connect protocol. This is an excellent option if using Sequence Wallet from your mobile phone and want to connect\nyour wallet to a desktop dapp."))),(0,o.kt)("p",null,"Sequence Wallet is built on Web Browser (W3C) and Ethereum Web3 standards -- and is available everywhere that a modern browser is able to run.\nWe've carefully designed the wallet for simple on-boarding, while maintaining security for users, and allowing users to progressively\nincrease the level of their security through additional keys and measures."),(0,o.kt)("p",null,"This means, that if you've developed a dapp to work with MetaMask, then Sequence will work too without any changes. If you're\nusing web3.js or ethers.js, Sequence will just work too. This is the beauty of interoperability on web3 :)"),(0,o.kt)("h2",{id:"connecting-your-dapp-with-0xsequence"},"Connecting your dapp with ",(0,o.kt)("inlineCode",{parentName:"h2"},"0xsequence")),(0,o.kt)("admonition",{title:"A delightful wallet without requiring your users to install anything :D",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"By integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"0xsequence"),", users may access your dapp without having to install any special extensions,\nand the wallet also works on mobile browsers!")),(0,o.kt)("p",null,"Your dapp can connect to your user's wallet by first instantiating the Wallet provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { sequence } from \"0xsequence\";\n\n// This assumes your dapp runs on Ethereum mainnet\nconst wallet = sequence.initWallet('mainnet')\n\n// If your dapp runs on a different EVM-compatible blockchain, you can specify its name as the argument\n// const wallet = sequence.initWallet('polygon')\n")),(0,o.kt)("p",null,"Once you have the instance, you can connect to the wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const wallet = sequence.getWallet()\n\nconst connectDetails = await wallet.connect({\n  app: \'Your Dapp name\',\n  authorize: true,\n  // And pass settings if you would like to customize further\n  settings: {\n    theme: "light",\n    bannerUrl: "https://yoursite.com/banner-image.png",  // 3:1 aspect ratio, 1200x400 works best\n    includedPaymentProviders: ["moonpay", "ramp"],\n    defaultFundingCurrency: "matic",\n    lockFundingCurrencyToDefault: false,\n  }\n})\n\nconsole.log(\'user accepted connect?\', connectDetails.connected)\nconsole.log(\'users signed connect proof to valid their account address:\', connectDetails.proof)\n')),(0,o.kt)("p",null,"After you connect, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.openWallet()")," to open the wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const wallet = sequence.getWallet()\nwallet.openWallet();\n")),(0,o.kt)("p",null,"You can also optionally pass a path, and use ",(0,o.kt)("inlineCode",{parentName:"p"},"openWithOptions")," intent to pass settings when you open the wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const settings: Settings = {\n  theme: "goldDark",\n  bannerUrl: "https://yoursite.com/banner-image.png", // 3:1 aspect ratio, 1200x400 works best\n  includedPaymentProviders: ["moonpay", "ramp"],\n  defaultFundingCurrency: "eth",\n  lockFundingCurrencyToDefault: false,\n};\n\nconst intent: OpenWalletIntent = {\n  type: "openWithOptions",\n  options: {\n    settings: settings,\n  },\n};\n\nconst wallet = sequence.getWallet()\n\nconst path = "wallet/add-funds";\nwallet.openWallet(path, intent);\n')),(0,o.kt)("admonition",{title:"Check out some example Dapp source code",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For a complete examples, see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp"},"Demo-Dapp")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp-web3modal"},"Demo-Dapp-Web3Modal"),".")),(0,o.kt)("admonition",{title:"Avoid Browsers Blocking Sequence Popup",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Most browsers will block popups if they are called outside of user-triggered event handlers like ",(0,o.kt)("inlineCode",{parentName:"p"},"onclick"),", or when it takes too long to process between the user action and the actual window"),(0,o.kt)("p",{parentName:"admonition"},"Read more about browser popup-blocking ",(0,o.kt)("a",{parentName:"p",href:"https://javascript.info/popup-windows#popup-blocking"},"here"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence on-demand sign in",src:n(9596).Z,width:"1915",height:"979"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence on-demand sign in, connect",src:n(1752).Z,width:"1917",height:"979"})),(0,o.kt)("h2",{id:"wallet-login-and-connect-options"},"Wallet Login and Connect Options"),(0,o.kt)("p",null,"Dapps with direct sequence integration can specify the following settings:"),(0,o.kt)("h4",{id:"theme"},(0,o.kt)("strong",{parentName:"h4"},"theme")),(0,o.kt)("p",null,"Name of one of the available theme provided by sequence the sequence wallet will be rendered with. "),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},'settings: {theme: "light"}')),(0,o.kt)("h4",{id:"bannerurl"},(0,o.kt)("strong",{parentName:"h4"},"bannerUrl")),(0,o.kt)("p",null,"URL of a banner image users will see when connecting or loging into your dapp.The banner image should follow a 3:1 aspect ration where 1200x400 works best."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},'settings: {bannerUrl: "https://yoursite.com/banner-image.png"}')),(0,o.kt)("h4",{id:"includedpaymentproviders"},(0,o.kt)("strong",{parentName:"h4"},"includedPaymentProviders")),(0,o.kt)("p",null,"List of payment providers users will be able to access. By default, users can access all payment providers integrated in Sequence."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},'settings: {includedPaymentProviders: ["moonpay", "ramp"]}')),(0,o.kt)("h4",{id:"defaultfundingcurrency"},(0,o.kt)("strong",{parentName:"h4"},"defaultFundingCurrency")),(0,o.kt)("p",null,"The tag of the default currency to show when users open the payment provider page. The currency has to be supported by the payment providers integrated in sequence."),(0,o.kt)("p",null,"Example:  ",(0,o.kt)("inlineCode",{parentName:"p"},'settings: {defaultFundingCurrency: "usdc"}')),(0,o.kt)("h4",{id:"defaultpurchaseamount"},(0,o.kt)("strong",{parentName:"h4"},"defaultPurchaseAmount")),(0,o.kt)("p",null,"Use to specify a default purchase amount, as an integer, for prefilling the funding amount. If not specified, the default is 100."),(0,o.kt)("p",null,"Example:  ",(0,o.kt)("inlineCode",{parentName:"p"},"settings: {defaultPurchaseAmount: 200}")),(0,o.kt)("h4",{id:"lockfundingcurrencytodefault"},(0,o.kt)("strong",{parentName:"h4"},"lockFundingCurrencyToDefault")),(0,o.kt)("p",null,"Whether to only allow users to purchase the default currency specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultFundingCurrency")," option. If set to false, users will also be able to purchase other tokens. locking the default funding currency can be useful to prevent users from purchasing the wrong currency or the currency on the wrong chain."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"settings: {defaultFundingCurrency: true}")),(0,o.kt)("h2",{id:"connecting-your-dapp-with-web3js-or-ethersjs"},"Connecting your dapp with ",(0,o.kt)("inlineCode",{parentName:"h2"},"web3.js")," or ",(0,o.kt)("inlineCode",{parentName:"h2"},"ethers.js")),(0,o.kt)("p",null,"For a full example of a dapp which supports Sequence (on-demand + chrome extension), Metamask, and WalletConnect\nplease see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xsequence/demo-dapp-web3modal"},"Demo-Dapp-Web3Modal repo"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence Web3Modal Integration",src:n(1824).Z,width:"1444",height:"914"})),(0,o.kt)("h2",{id:"connecting-to-any-ethereum-dapp-with-the-sequence-wallet-chrome-extension"},"Connecting to any Ethereum dapp with the Sequence Wallet Chrome Extension"),(0,o.kt)("p",null,"Sequence Chrome Extension: ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/sequence-wallet/ocmccklecaalljlflmclidjeclpcpdim?hl=en"},"Install")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sequence Chrome Extension",src:n(9424).Z,width:"1479",height:"1108"})),(0,o.kt)("h2",{id:"connecting-via-walletconnect"},"Connecting via ",(0,o.kt)("inlineCode",{parentName:"h2"},"WalletConnect")),(0,o.kt)("p",null,"Sequence already supports connecting to dapps via ",(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.com"},"WalletConnect"),".\nIf your dapp already supports WalletConnect, and you don't need Sequence-specific functionality, nothing more needs to be done.\nFrom the user's perspective, the WalletConnect flow behaves as follows."),(0,o.kt)("p",null,"Taking ",(0,o.kt)("a",{parentName:"p",href:"https://app.uniswap.org"},"Uniswap")," as an example, the user is prompted to connect their wallet using one of multiple possible protocols."),(0,o.kt)("img",{src:"/img/walletconnect/connect-wallet.png"}),(0,o.kt)("p",null,"The user selects the WalletConnect option."),(0,o.kt)("img",{src:"/img/walletconnect/select-walletconnect.png"}),(0,o.kt)("p",null,"A QR code is displayed, which can be scanned by Sequence.\nAlternatively, the user can also choose to copy the connection details via their OS clipboard."),(0,o.kt)("img",{src:"/img/walletconnect/qr-code.png"}),(0,o.kt)("p",null,'Back in the Sequence interface, the user chooses "Scan".'),(0,o.kt)("img",{src:"/img/walletconnect/scan.png"}),(0,o.kt)("p",null,"The QR code from the dapp is scanned.\nAlternatively, the code is pasted from the OS clipboard if the user chose that previously."),(0,o.kt)("img",{src:"/img/walletconnect/scan-qr-code.png"}),(0,o.kt)("p",null,"The user confirms the connection request."),(0,o.kt)("img",{src:"/img/walletconnect/confirm.png"}),(0,o.kt)("p",null,"The connection succeeded, and the dapp is updated to reflect that."),(0,o.kt)("img",{src:"/img/walletconnect/success.png"}),(0,o.kt)("p",null,"While connected, the dapp is able to make signing requests to Sequence.\nSequence will always prompt for confirmation from the user for any activity initiated by the dapp."),(0,o.kt)("img",{src:"/img/walletconnect/activity.png"}),(0,o.kt)("p",null,"Once the user has finished using the dapp, they can disconnect the wallet via the session menu."),(0,o.kt)("img",{src:"/img/walletconnect/disconnect.png"}))}u.isMDXComponent=!0},9424:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/seq-chrome-store-9334f18a83d3bfca818e3d3862d0156c.png"},1752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign-in-connect-27e54db59a5f28733367f31f99ef3d83.png"},9596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sign-in-fresh-97ffdbdec3f9e58466b4fbb210568bdf.png"},1824:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web3modal-e9639769538f42d9e60654eea840fd41.png"}}]);