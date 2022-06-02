"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4844],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,f=p["".concat(s,".").concat(h)]||p[h]||c[h]||l;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7462),r=n(7294),l=n(2389),i=n(168),o=n(6010),s="tabItem_LplD";function d(e){var t,n,l,d=e.lazy,u=e.block,c=e.defaultValue,p=e.values,h=e.groupId,f=e.className,m=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(t=null!=c?c:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=m[0])?void 0:l.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,i.UB)(),y=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,r.useState)(k),x=N[0],C=N[1],T=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var O=y[h];null!=O&&O!==x&&g.some((function(e){return e.value===O}))&&C(O)}var j=function(e){var t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==x&&(E(t),C(a),null!=h&&w(h,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":u},f)},g.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return T.push(e)},onKeyDown:P,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(m.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function u(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},3923:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return h}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=n(9877),o=n(8215),s=["components"],d={},u="Wallet Configuration",c={unversionedId:"wallet-contracts/wallet-configuration",id:"wallet-contracts/wallet-configuration",title:"Wallet Configuration",description:"Every Sequence wallet has a configuration defined by a threshold and a list of signers with their corresponding weights.",source:"@site/docs/wallet-contracts/04-wallet-configuration.mdx",sourceDirName:"wallet-contracts",slug:"/wallet-contracts/wallet-configuration",permalink:"/wallet-contracts/wallet-configuration",editUrl:"https://github.com/0xsequence/docs/edit/master/docs/wallet-contracts/04-wallet-configuration.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Wallet Factory",permalink:"/wallet-contracts/wallet-factory"},next:{title:"Modules & wallet update",permalink:"/wallet-contracts/modules-and-updates"}},p={},h=[{value:"Configuration layout",id:"configuration-layout",level:2},{value:"Signer layout",id:"signer-layout",level:3},{value:"Example",id:"example",level:4},{value:"The valid combinations of signers are:",id:"the-valid-combinations-of-signers-are",level:4},{value:"Configuration hash - ImageHash",id:"configuration-hash---imagehash",level:3},{value:"Compute image hash",id:"compute-image-hash",level:4},{value:"Initial wallet configuration",id:"initial-wallet-configuration",level:2},{value:"Compute wallet address",id:"compute-wallet-address",level:4}],f={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wallet-configuration"},"Wallet Configuration"),(0,l.kt)("p",null,"Every Sequence wallet has a configuration defined by a threshold and a list of signers with their corresponding weights."),(0,l.kt)("h2",{id:"configuration-layout"},"Configuration layout"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Range"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Threshold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint16")),(0,l.kt)("td",{parentName:"tr",align:null},"1 - 65535"),(0,l.kt)("td",{parentName:"tr",align:null},'Required combined total "weight" of signers for a signature to be considered valid.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Signers"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signer[]")),(0,l.kt)("td",{parentName:"tr",align:null},"unlimited - bounded by gas"),(0,l.kt)("td",{parentName:"tr",align:null},'List of signers that with their corresponding "weight"s.')))),(0,l.kt)("h3",{id:"signer-layout"},"Signer layout"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Range"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"weight"'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"uint8")),(0,l.kt)("td",{parentName:"tr",align:null},"0 - 255"),(0,l.kt)("td",{parentName:"tr",align:null},'"weight" of every signature of the signer.')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},'"address"'),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"address"')),(0,l.kt)("td",{parentName:"tr",align:null},"--"),(0,l.kt)("td",{parentName:"tr",align:null},'"address" of the signer, it may be an EOA or another smart contract wallet with EIP-1271 support.')))),(0,l.kt)("h4",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "threshold": 5,\n  "signers": [\n    {\n      "address": "0x4fbf69aa2a75f9942a768dc8da7804ec965f7bea",\n      "weight": 2\n    },\n    {\n      "address": "0x596af90cecdbf9a768886e771178fd5561dd27ab",\n      "weight": 3\n    },\n    {\n      "address": "0x6192e0fdcd868b3de01c7fbc0ad98baebd7330c1",\n      "weight": 2\n    },\n    {\n      "address": "0xec9a7204a43d3f4a82c84fde92d25bfc9110981e",\n      "weight": 1\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"This example has a threshold of 5 and 4 signers."),(0,l.kt)("h4",{id:"the-valid-combinations-of-signers-are"},"The valid combinations of signers are:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"- 0x4fbf69aa2a75f9942a768dc8da7804ec965f7bea & 0x596af90cecdbf9a768886e771178fd5561dd27ab - combined weight of 2 + 3 = 5\n- 0x6192e0fdcd868b3de01c7fbc0ad98baebd7330c1 & 0x596af90cecdbf9a768886e771178fd5561dd27ab - combined weight of 2 + 3 = 5\n- 0x4fbf69aa2a75f9942a768dc8da7804ec965f7bea, 0x6192e0fdcd868b3de01c7fbc0ad98baebd7330c1 & 0xec9a7204a43d3f4a82c84fde92d25bfc9110981e - combined weight of 2 + 2 + 1 = 5\n")),(0,l.kt)("p",null,"Any combination of signers with a combined weight under the threshold is considered invalid; any aditional signers above the threshold are ignored."),(0,l.kt)("h3",{id:"configuration-hash---imagehash"},"Configuration hash - ImageHash"),(0,l.kt)("p",null,"The configuration is never stored directly on the contract, but instead is hashed and checked against every time a signature is validated. This allows the wallet contracts to reduce the usage of storage and therefore the gas cost."),(0,l.kt)("p",null,"Wallets that never have been updated don't store the ",(0,l.kt)("inlineCode",{parentName:"p"},"imageHash")," directly, instead the ",(0,l.kt)("inlineCode",{parentName:"p"},"imageHash")," is used as the ",(0,l.kt)("inlineCode",{parentName:"p"},"salt")," during the contract creation, and signatures are validated against the address of the wallet."),(0,l.kt)("h4",{id:"compute-image-hash"},"Compute image hash"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"solidity",label:"Solidity",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"keccak256(abi.encode(\n    uint8 weight_1, address signer_1,\n    keccak256(abi.encode(\n        uint8 weight_2, address signer_2,\n        keccak256(abi.encode(\n            uint8 weight_3, address signer_3,\n            keccak256(abi.encode(\n                uint256 threshold\n            ))\n        ))\n    ))\n))\n"))),(0,l.kt)(o.Z,{value:"js",label:"Javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let tmp = ethers.utils.solidityPack(['uint256'], [configuration.threshold])\n\nfor (const signer of configuration.signers) {\n  tmp = ethers.utils.keccak256(\n    ethers.utils.defaultAbiCoder.encode(\n      ['bytes32', 'uint8', 'address'],\n      [tmp, signer.weight, signer.address]\n    )\n  )\n}\n\nconst imageHash = tmp\n")))),(0,l.kt)("h2",{id:"initial-wallet-configuration"},"Initial wallet configuration"),(0,l.kt)("p",null,"The initial wallet configuration determines the address of the wallet, subsequent updates dons't change the address."),(0,l.kt)("p",null,"The wallet address can be computed using the ",(0,l.kt)("inlineCode",{parentName:"p"},"imageHash"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"factory")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"mainModule")," of the wallet."),(0,l.kt)("h4",{id:"compute-wallet-address"},"Compute wallet address"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// The code of the wallet proxy contract\nconst WalletProxyBytecode = \"0x603a600e3d39601a805130553df3363d3d373d3d3d363d30545af43d82803e903d91601857fd5bf3\"\n\n// These values are defined by the wallet context\n// they must be known in order to validate the counter-factual wallet imageHash\nconst factory = \"0xf9D09D634Fb818b05149329C1dcCFAeA53639d96\"\nconst mainModule = \"0xd01F11855bCcb95f88D7A48492F66410d4637313\"\n\n// Append the `mainModule` to the `WalletProxyBytecode`\n// this completed the creation code of the proxy contract\n// used for computing the wallet address as defined by the CREATE2 opcode\nconst codeHash = ethers.utils.keccak256(\n  ethers.utils.solidityPack(\n    [\n      'bytes',\n      'bytes32'\n    ],\n    [\n      WalletContractBytecode,\n      ethers.utils.hexZeroPad(mainModule, 32)\n    ]\n  )\n)\n\n// Compute the wallet address\nconst hash = ethers.utils.keccak256(\n  ethers.utils.solidityPack(\n    [\n      'bytes1',\n      'address',\n      'bytes32',\n      'bytes32'\n    ], [\n      '0xff',\n      context.factory,\n      salt,\n      codeHash\n    ]\n  )\n)\n\nconst address = ethers.utils.getAddress(ethers.utils.hexDataSlice(hash, 12))\n")))}m.isMDXComponent=!0}}]);