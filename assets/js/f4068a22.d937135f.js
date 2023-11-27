"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[2776],{4038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=n(1527),i=n(7279);const l={},s="Modules & wallet update",r={id:"wallet/wallet-contracts/modules-and-updates",title:"Modules & wallet update",description:"Sequence modules are the underlying program implementation of the wallets; wallets can change modules at runtime.",source:"@site/docs/03-wallet/10-wallet-contracts/05-modules-and-updates.mdx",sourceDirName:"03-wallet/10-wallet-contracts",slug:"/wallet/wallet-contracts/modules-and-updates",permalink:"/wallet/wallet-contracts/modules-and-updates",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/10-wallet-contracts/05-modules-and-updates.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Wallet Configuration",permalink:"/wallet/wallet-contracts/wallet-configuration"},next:{title:"MainModuleUpgradeable & configuration migration",permalink:"/wallet/wallet-contracts/main-module-upgradeable"}},d={},o=[{value:"Wallet implementation",id:"wallet-implementation",level:2},{value:"_updateConfiguration",id:"_updateconfiguration",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Reading current implementation",id:"reading-current-implementation",level:3},{value:"Wallet configuration validation",id:"wallet-configuration-validation",level:2},{value:"_isValidImage",id:"_isvalidimage",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"MainModuleUpgradeable",id:"mainmoduleupgradeable",level:2},{value:"<code>updateImageHash</code>",id:"updateimagehash",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"First configuration update",id:"first-configuration-update",level:2},{value:"delegateCall: false",id:"delegatecall-false",level:4},{value:"revertOnError: true",id:"revertonerror-true",level:4},{value:"to: wallet",id:"to-wallet",level:4},{value:"value: ethers.constants.Zero",id:"value-ethersconstantszero",level:4},{value:"gasLimit: ethers.constants.Zero",id:"gaslimit-ethersconstantszero",level:4},{value:"Subsequent configuration updates",id:"subsequent-configuration-updates",level:3},{value:"Retrieving the current configuration",id:"retrieving-the-current-configuration",level:3},{value:"Retrieving the wallet configuration",id:"retrieving-the-wallet-configuration",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"modules--wallet-update",children:"Modules & wallet update"}),"\n",(0,a.jsx)(t.p,{children:"Sequence modules are the underlying program implementation of the wallets; wallets can change modules at runtime."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"MainModule"})," is the initial module of every Sequence wallet; it differs from the other modules because it doesn't store the set of signers on contract storage; it uses the ",(0,a.jsx)(t.a,{href:"/wallet/wallet-contracts/wallet-factory#deploy",children:"salt"})," provided to the Factory contract."]}),"\n",(0,a.jsx)(t.h2,{id:"wallet-implementation",children:"Wallet implementation"}),"\n",(0,a.jsx)(t.p,{children:"Sequence modules can be assigned to wallets either by the factory or by updating it after the initial deployment. Only one module can be assigned to a wallet at a time."}),"\n",(0,a.jsx)(t.h3,{id:"_updateconfiguration",children:"_updateConfiguration"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"updateImplementation"})," allows to update the underlying implementation of the wallet proxy. This implementation contains all the core code that defines the wallet's behaviour."]}),"\n",(0,a.jsxs)(t.admonition,{title:"Dangerous operation",type:"warning",children:[(0,a.jsxs)(t.p,{children:["Calling ",(0,a.jsx)(t.code,{children:"updateImplementation"})," with an invalid implementation will result in the corruption of the wallet."]}),(0,a.jsx)(t.p,{children:"Corrupt wallets may lead to the loss of funds."})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-solidity",children:"function updateImplementation(\n  address _implementation\n) external override onlySelf {\n"})}),"\n",(0,a.jsx)(t.h4,{id:"parameters",children:"Parameters:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"_implementation"}),(0,a.jsx)(t.td,{children:"address"}),(0,a.jsx)(t.td,{children:"Address of the new wallet implementation."})]})})]}),"\n",(0,a.jsxs)(t.p,{children:["This method has the ",(0,a.jsx)(t.code,{children:"onlySelf"})," modifier, which means that it can only be called by the wallet itself using a self-referencing transaction. Calls to this method coming from other addresses, even if these addresses are signers of the wallet, will be rejected."]}),"\n",(0,a.jsx)(t.h3,{id:"reading-current-implementation",children:"Reading current implementation"}),"\n",(0,a.jsx)(t.p,{children:"The wallet implementation is stored on the contract storage slot defined by the address of the wallet itself. Given that every wallet has a unique address, the implementation slot varies from wallet to wallet."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'import "ethers"\n\nconst address = "0x596af90cecdbf9a768886e771178fd5561dd27ab"\nconst provider = new ethers.providers.JsonRpcProvider("http://localhost:8545")\n\n// Read storage slot address(address)\nconst slot = await provider.getStorageAt(address, ethers.utils.defaultAbiCoder.encode([\'address\'], [address]))\n\n// Decode bytes32 as address value\nconst implementation = ethers.utils.defaultAbiCoder.decode([\'address\'], slot)[0]\n\nconsole.log(implementation)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"wallet-configuration-validation",children:"Wallet configuration validation"}),"\n",(0,a.jsx)(t.admonition,{title:"Fixed configuration",type:"info",children:(0,a.jsxs)(t.p,{children:["Signer's configuration on wallets using ",(0,a.jsx)(t.code,{children:"MainModule"})," can't be changed. The only way to change the set of signers or threshold is by updating the module of the wallet."]})}),"\n",(0,a.jsxs)(t.p,{children:["All sequence modules must implement the ",(0,a.jsx)(t.code,{children:"ModuleAuth"})," interface, this interface allows the rest of the module to validate signatures for the wallet. In the case of ",(0,a.jsx)(t.code,{children:"MainModule"})," this interface is implemented as a counter-factual validation of hash passed to the factory during the contract wallet creation."]}),"\n",(0,a.jsx)(t.h3,{id:"_isvalidimage",children:"_isValidImage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-solidity",children:"  function _isValidImage(\n    bytes32 _imageHash\n  ) internal override view returns (bool _isValid)\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Validates if the provided ",(0,a.jsx)(t.code,{children:"imageHash"})," corresponds to the one configured in the wallet. This function is called internally to validate transaction and message signatures."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"imageHash"})," is a hash of the wallet configuration, which contains the wallet's threshold, signers and weights."]}),"\n",(0,a.jsx)(t.h4,{id:"parameters-1",children:"Parameters:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"_imageHash"}),(0,a.jsx)(t.td,{children:"bytes32"}),(0,a.jsx)(t.td,{children:"Hash of wallet configuration to be validated."})]})})]}),"\n",(0,a.jsx)(t.h4,{id:"return-values",children:"Return Values:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"_isValid"}),(0,a.jsx)(t.td,{children:"bool"}),(0,a.jsxs)(t.td,{children:["True if the given ",(0,a.jsx)(t.code,{children:"imageHash"})," corresponds to the current wallet configuration."]})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"mainmoduleupgradeable",children:"MainModuleUpgradeable"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"MainModuleUpgradable"})," is a module that mimics the behaviour of the ",(0,a.jsx)(t.code,{children:"MainModule"})," but allows the wallet configuration to be updated."]}),"\n",(0,a.jsx)(t.h3,{id:"updateimagehash",children:(0,a.jsx)(t.code,{children:"updateImageHash"})}),"\n",(0,a.jsxs)(t.p,{children:["Updates the wallet ",(0,a.jsx)(t.code,{children:"imageHash"}),", this is the hash that defines the wallet configuration (signers, weights, threshold)."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-solidity",children:"  function updateImageHash(\n    bytes32 _imageHash\n  ) external override onlySelf {\n"})}),"\n",(0,a.jsx)(t.h4,{id:"parameters-2",children:"Parameters:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"_imageHash"}),(0,a.jsx)(t.td,{children:"bytes32"}),(0,a.jsx)(t.td,{children:"Hash of the new configuration for the wallet."})]})})]}),"\n",(0,a.jsxs)(t.admonition,{title:"Unsanitized input",type:"caution",children:[(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"imageHash"})," is not validated, it is the responsibility of the caller to ensure that the hash is correct. Reasons for incorrect hashes include:"]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"The combined weight of the signers is below the threshold."}),"\n",(0,a.jsx)(t.li,{children:"The signers are not valid addresses."}),"\n",(0,a.jsx)(t.li,{children:"The signers are smart contract wallets without proper support for EIP-1271."}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"imageHash"})," doesn't correspond to any wallet configuration (may be a random string)."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"imageHash"})," corresponds to an unknown wallet configuration."]}),"\n"]}),(0,a.jsxs)(t.p,{children:["In any of this cases the wallet will be ",(0,a.jsx)(t.strong,{children:"rendered unusable"}),"."]})]}),"\n",(0,a.jsxs)(t.p,{children:["This method has the ",(0,a.jsx)(t.code,{children:"onlySelf"})," modifier, which means that it can only be called by the wallet itself using a self-referencing transaction. Calls to this method coming from other addresses, even if these addresses are signers of the wallet, will be rejected."]}),"\n",(0,a.jsx)(t.h2,{id:"first-configuration-update",children:"First configuration update"}),"\n",(0,a.jsxs)(t.p,{children:["When Sequence wallets are created, the factory contract doesn't call an ",(0,a.jsx)(t.code,{children:"initialize"})," function. The configuration is instead defined by the ",(0,a.jsx)(t.code,{children:"salt"})," provided to the factory, the ",(0,a.jsx)(t.code,{children:"MainModule"})," then checks the counterfactual validity of all signatures against the wallet address."]}),"\n",(0,a.jsxs)(t.p,{children:["This means there is no direct way to update the configuration of a wallet while still using the ",(0,a.jsx)(t.code,{children:"MainModule"}),". Given that the first configuration update needs to also change the wallet implementation to the ",(0,a.jsx)(t.code,{children:"MainModuleUpgradable"}),", the ",(0,a.jsx)(t.code,{children:"MainModule"})," is updated to the ",(0,a.jsx)(t.code,{children:"MainModuleUpgradable"})," and the ",(0,a.jsx)(t.code,{children:"updateImageHash"})," method is called to update the wallet configuration."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const transactions = [\n  {\n    delegateCall: false,\n    revertOnError: true,\n    to: wallet,\n    data: walletInterface.encodeFunctionData(\n      walletInterface.getFunction('updateImplementation'), [this.context.mainModuleUpgradable]\n    ),\n    value: ethers.constants.Zero,\n    gasLimit: ethers.constants.Zero,\n  },\n  {\n    delegateCall: false,\n    revertOnError: true,\n    to: wallet,\n    data: mainModuleInterface.encodeFunctionData(\n      mainModuleInterface.getFunction('updateImageHash'), [newImageHash]\n    ),\n    value: ethers.constants.Zero,\n    gasLimit: ethers.constants.Zero,\n  }\n]\n"})}),"\n",(0,a.jsx)(t.h4,{id:"delegatecall-false",children:"delegateCall: false"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"delegateCall"})," is used to extend the wallet functionality beyond what's allowed by the module. In this case the called methods are defined on the modules themselves, so there is no need to use ",(0,a.jsx)(t.code,{children:"delegateCall"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"revertonerror-true",children:"revertOnError: true"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"revertOnError"})," is used to revert the whole transaction bundle if a transaction flagged by it fails. In this case the operation should be atomic given that a partial wallet configuration update ",(0,a.jsx)(t.strong,{children:"will"})," render the wallet unusable."]}),"\n",(0,a.jsx)(t.h4,{id:"to-wallet",children:"to: wallet"}),"\n",(0,a.jsxs)(t.p,{children:["The methods being called are defined on the wallet itself, but need to be called externally, so the ",(0,a.jsx)(t.code,{children:"to"})," address is the wallet itself."]}),"\n",(0,a.jsx)(t.h4,{id:"value-ethersconstantszero",children:"value: ethers.constants.Zero"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"value"})," of the transaction is always zero, since the transaction is a self-referencing transaction and doesn't require transferring funds."]}),"\n",(0,a.jsx)(t.h4,{id:"gaslimit-ethersconstantszero",children:"gasLimit: ethers.constants.Zero"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"gasLimit"})," of the transaction is always zero, since it represents an unlimited amount of gas."]}),"\n",(0,a.jsxs)(t.admonition,{title:"Dangerous operation",type:"warning",children:[(0,a.jsxs)(t.p,{children:["When the wallet is first updated to the ",(0,a.jsx)(t.code,{children:"MainModuleUpgradable"})," it doesn't have a valid ",(0,a.jsx)(t.code,{children:"imageHash"})," yet. It's imperative that the ",(0,a.jsx)(t.code,{children:"imageHash"})," is updated before the transaction bundle finishes executing.\nIf the ",(0,a.jsx)(t.code,{children:"imageHash"})," is not updated before the transaction bundle finishes executing, the wallet will be rendered unusable."]}),(0,a.jsx)(t.p,{children:"For this reason the following considerations should be taken when updating the wallet for the first time:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["All transactions should be marked ",(0,a.jsx)(t.code,{children:"revertOnError = true"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"updateImplementation"})," and ",(0,a.jsx)(t.code,{children:"updateImageHash"})," should both be declared on the same transaction bundle."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"gasLimit"})," of both transactions should be set to unlimited (",(0,a.jsx)(t.code,{children:"0"}),")."]}),"\n"]})]}),"\n",(0,a.jsx)(t.h3,{id:"subsequent-configuration-updates",children:"Subsequent configuration updates"}),"\n",(0,a.jsxs)(t.p,{children:["Once the wallet is updated to the ",(0,a.jsx)(t.code,{children:"MainModuleUpgradable"})," it can be updated by calling the ",(0,a.jsx)(t.code,{children:"updateImageHash"})," method, without any additional transaction."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"const transactions = [\n  {\n    delegateCall: false,\n    revertOnError: true,\n    to: wallet,\n    data: mainModuleInterface.encodeFunctionData(\n      mainModuleInterface.getFunction('updateImageHash'), [newImageHash]\n    ),\n    value: ethers.constants.Zero,\n    gasLimit: ethers.constants.Zero,\n  }\n]\n"})}),"\n",(0,a.jsx)(t.h3,{id:"retrieving-the-current-configuration",children:"Retrieving the current configuration"}),"\n",(0,a.jsxs)(t.p,{children:["If the wallet is updated to the ",(0,a.jsx)(t.code,{children:"MainModuleUpgradable"})," it can be queried for the current configuration by calling the ",(0,a.jsx)(t.code,{children:"getImageHash"})," method."]}),"\n",(0,a.jsx)(t.p,{children:"This method should return the wallet's current configuration hash, which can be compared to a list of known wallet configurations to find the correct one."}),"\n",(0,a.jsx)(t.h4,{id:"retrieving-the-wallet-configuration",children:"Retrieving the wallet configuration"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"imageHash"})," method returns ",(0,a.jsx)(t.code,{children:"bytes32(0)"})," if the wallet is not yet updated to the ",(0,a.jsx)(t.code,{children:"MainModuleUpgradable"}),".\nIn this case the wallet is in a counter-factual state and the ",(0,a.jsx)(t.code,{children:"imageHash"})," can't be directly queried."]}),"\n",(0,a.jsx)(t.p,{children:"This is also the case for non-deployed wallets."}),"\n",(0,a.jsxs)(t.p,{children:["To find the ",(0,a.jsx)(t.code,{children:"imageHash"})," of a non-deployed or non-updated wallet, a candidate known ",(0,a.jsx)(t.code,{children:"imageHash"})," needs to be compared against the wallet address."]}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"/wallet/wallet-contracts/wallet-configuration#compute-wallet-address",children:"Compute wallet address"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},7279:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(959);const i={},l=a.createContext(i);function s(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);