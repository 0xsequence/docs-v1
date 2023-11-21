"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[1587],{15:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=n(1527),s=n(4089);const i={},r="Signature Encoding",c={id:"wallet/wallet-contracts/signature-encoding",title:"Signature Encoding",description:"Sequence Wallets support ERC-1271 Standard Contract Signature Verification to allow signing of transactions and messages.",source:"@site/docs/03-wallet/10-wallet-contracts/08-signature-encoding.mdx",sourceDirName:"03-wallet/10-wallet-contracts",slug:"/wallet/wallet-contracts/signature-encoding",permalink:"/wallet/wallet-contracts/signature-encoding",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/03-wallet/10-wallet-contracts/08-signature-encoding.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"sidebar",previous:{title:"Transaction encoding",permalink:"/wallet/wallet-contracts/transaction-encoding"},next:{title:"Nested Transaction Batching",permalink:"/wallet/wallet-contracts/nested-transaction-batching"}},l={},o=[{value:"ERC-191 Ethereum Signed Data",id:"erc-191-ethereum-signed-data",level:2},{value:"ERC-712 Structured Data Signatures",id:"erc-712-structured-data-signatures",level:2},{value:"Verification",id:"verification",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"signature-encoding",children:"Signature Encoding"}),"\n",(0,a.jsxs)(t.p,{children:["Sequence Wallets support ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1271",children:"ERC-1271 Standard Contract Signature Verification"})," to allow signing of transactions and messages."]}),"\n",(0,a.jsx)(t.h2,{id:"erc-191-ethereum-signed-data",children:"ERC-191 Ethereum Signed Data"}),"\n",(0,a.jsxs)(t.p,{children:["Messages encoded with as ",(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-191",children:"ERC-191 Ethereum Signed Data"})," are able to be created and signed as follows."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:'import { Wallet } from \'@0xsequence/wallet\'\n\n// Construct your Sequence Wallet (out of scope for this section)\nconst wallet: Wallet\n\nconst message = "Hello, World!"\n\nconst prefixedMessage = "\\x19Ethereum Signed Message:\\n" + len(message) + message\nconst signature = await wallet.signMessage(prefixedMessage)\n'})}),"\n",(0,a.jsx)(t.p,{children:"The above will iterate through local, signing the message. If the threshold is reached, the signature is returned.\nOtherwise the library will iterate through the remote signers as well.\nThe resulting signatures are joined and encoded as a hex string."}),"\n",(0,a.jsx)(t.h2,{id:"erc-712-structured-data-signatures",children:"ERC-712 Structured Data Signatures"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-712",children:"ERC-712 Structured Data"})," can also be signed in a similar fashion."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { Wallet } from '@0xsequence/wallet'\nimport { encodeTypedDataDigest } from '@0xsequence/utils'\n\n// Construct your Sequence Wallet (out of scope for this section)\nconst wallet: Wallet\n\n// Encode the typed data\nconst chainId = 1\nconst typedData = {\n\ttypes: {\n\t\tPerson: [\n\t\t\t{ name: 'name', type: 'string' },\n\t\t\t{ name: 'wallet', type: 'address' },\n\t\t\t{ name: 'count', type: 'uint8' }\n\t\t]\n\t},\n\tprimaryType: 'Person' as const,\n\tdomain: {\n\t\tname: 'Ether Mail',\n\t\tversion: '1',\n\t\tchainId: chainId,\n\t\tverifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC'\n\t},\n\tmessage: {\n\t\tname: 'Bob',\n\t\twallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',\n\t\tcount: 4\n\t}\n} \nconst hashedData = encodeTypedDataDigest(typedData)\n\nconst signature = await wallet.signMessage(hashedData)\n"})}),"\n",(0,a.jsx)(t.p,{children:"The above will iterate through local, signing the message. If the threshold is reached, the signature is returned.\nOtherwise the library will iterate through the remote signers as well.\nThe resulting signatures are joined and encoded as a hex string."}),"\n",(0,a.jsx)(t.h2,{id:"verification",children:"Verification"}),"\n",(0,a.jsxs)(t.p,{children:["The signature can be verified by calling the ",(0,a.jsx)(t.code,{children:"isValidSignature"})," method on the wallet."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sol",children:'  /**\n   * @notice Verifies whether the provided signature is valid with respect to the provided hash\n   * @dev MUST return the correct magic value if the signature provided is valid for the provided hash\n   *   > The bytes4 magic value to return when signature is valid is 0x1626ba7e : bytes4(keccak256("isValidSignature(bytes32,bytes)"))\n   * @param _hash       keccak256 hash that was signed\n   * @param _signatures Signature byte array associated with _data.\n   *                    Encoded as abi.encode(Signature[], Configs)\n   * @return magicValue Magic value 0x1626ba7e if the signature is valid and 0x0 otherwise\n   */\n  function isValidSignature(\n    bytes32 _hash,\n    bytes calldata _signatures\n  ) public override virtual view returns (bytes4) {\n    // Validate signatures\n    (bool isValid,) = _signatureValidation(_hash, _signatures);\n    if (isValid) {\n      return SELECTOR_ERC1271_BYTES32_BYTES;\n    }\n\n    return bytes4(0);\n  }\n'})}),"\n",(0,a.jsx)(t.p,{children:"This will iterate through the combined signatures and validate that the resulting signature breaches the wallet's threshold."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4089:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(959);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);