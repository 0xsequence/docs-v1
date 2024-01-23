"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[5139],{5589:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var d=s(1527),t=s(7279);const i={},r="Response Payloads",c={id:"waas/implementation/responses",title:"Response Payloads",description:"When interacting with the WaaS API, each intent payload will trigger a corresponding response payload. This could be either a successful response or a prompt for a different action.",source:"@site/docs/400-waas/03-implementation/02-responses.mdx",sourceDirName:"400-waas/03-implementation",slug:"/waas/implementation/responses",permalink:"/waas/implementation/responses",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/400-waas/03-implementation/02-responses.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Action payloads",permalink:"/waas/implementation/payloads"},next:{title:"Introduction",permalink:"/unity-waas-sdk"}},a={},l=[{value:"General Response Structure",id:"general-response-structure",level:2},{value:"Types of Responses",id:"types-of-responses",level:2},{value:"Transaction Receipt Response",id:"transaction-receipt-response",level:3},{value:"Example",id:"example",level:4},{value:"How to Detect",id:"how-to-detect",level:4},{value:"Failed Transaction Response",id:"failed-transaction-response",level:3},{value:"How to Detect",id:"how-to-detect-1",level:4},{value:"Signed Message Response",id:"signed-message-response",level:3},{value:"Example",id:"example-1",level:4},{value:"How to Detect",id:"how-to-detect-2",level:4},{value:"Session Opened Response",id:"session-opened-response",level:3},{value:"Example",id:"example-2",level:4},{value:"How to Detect",id:"how-to-detect-3",level:4},{value:"Validation Required Response",id:"validation-required-response",level:3},{value:"How to Detect",id:"how-to-detect-4",level:4},{value:"Note",id:"note",level:3}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"response-payloads",children:"Response Payloads"}),"\n",(0,d.jsx)(n.p,{children:"When interacting with the WaaS API, each intent payload will trigger a corresponding response payload. This could be either a successful response or a prompt for a different action."}),"\n",(0,d.jsx)(n.h2,{id:"general-response-structure",children:"General Response Structure"}),"\n",(0,d.jsx)(n.p,{children:"Regardless of the specific response type, all responses have a standard structure with the following fields:"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"code"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Identifies the type of response"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"Holds content defined by response type"}),(0,d.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"types-of-responses",children:"Types of Responses"}),"\n",(0,d.jsx)(n.h3,{id:"transaction-receipt-response",children:"Transaction Receipt Response"}),"\n",(0,d.jsxs)(n.p,{children:["Triggered upon successful execution of a ",(0,d.jsx)(n.a,{href:"/waas/implementation/payloads#send-transaction-payload",children:"send transaction intent"}),". The code for this response is ",(0,d.jsx)(n.code,{children:"transactionReceipt"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"data"})," field contains:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"txHash"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Transaction hash of the Ethereum transaction"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"metaTxHash"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Hash of the meta transaction"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"request"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://docs.sequence.xyz/waas/implementation/payloads/#send-transaction-payload",children:"SendTransactionPayload"})}),(0,d.jsx)(n.td,{children:"The original request packet of the transaction"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"receipt"}),(0,d.jsx)(n.td,{children:"MetaTxnReceipt"}),(0,d.jsx)(n.td,{children:"Receipt of the meta transaction"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nativeReceipt"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"Native receipt of the Ethereum transaction"}),(0,d.jsx)(n.td,{children:"Yes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"simulations"}),(0,d.jsx)(n.td,{children:"SimulateResult[]"}),(0,d.jsx)(n.td,{children:"Array of simulation results"}),(0,d.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"MetaTxnReceipt"}),":"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"id"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Unique identifier for the receipt"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"status"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Status of the transaction"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"revertReason"}),(0,d.jsx)(n.td,{children:"string | null"}),(0,d.jsx)(n.td,{children:"Reason for transaction revert, if any"}),(0,d.jsx)(n.td,{children:"Yes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"index"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Index number of the receipt"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logs"}),(0,d.jsx)(n.td,{children:"MetaTxnReceiptLog[]"}),(0,d.jsx)(n.td,{children:"Array of logs for the meta transaction"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"receipts"}),(0,d.jsx)(n.td,{children:"MetaTxnReceipt[]"}),(0,d.jsx)(n.td,{children:"Array of meta transaction receipts"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"txnReceipt"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"String representation of the transaction"}),(0,d.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"MetaTxnReceiptLog"}),":"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"address"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"The address that generated the log"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"topics"}),(0,d.jsx)(n.td,{children:"string[]"}),(0,d.jsx)(n.td,{children:"List of topics associated with the log"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"data"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Data sent with the log"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"blockNumber"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"The block number where this log was emitted"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"transactionHash"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Hash of the transaction that generated the log"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"transactionIndex"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Index of the transaction in the block"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"blockHash"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Hash of the block containing the log"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"logIndex"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Index of the log in the block"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"removed"}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"Whether the log was removed due to a chain reorganization"}),(0,d.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"SimulateResult"}),":"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"executed"}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"Whether the simulation was executed"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"succeeded"}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"Whether the simulation succeeded"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"result"}),(0,d.jsx)(n.td,{children:"string | null"}),(0,d.jsx)(n.td,{children:"The result of the simulation"}),(0,d.jsx)(n.td,{children:"Yes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"reason"}),(0,d.jsx)(n.td,{children:"string | null"}),(0,d.jsx)(n.td,{children:"Reason for failure, if simulation failed"}),(0,d.jsx)(n.td,{children:"Yes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gasUsed"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Amount of gas used in the simulation"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gasLimit"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Gas limit for the simulation"}),(0,d.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "code": "transactionReceipt",\n  "data": {\n    "txHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n    "metaTxHash": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n    "nativeReceipt": {\n      "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n      "blockNumber": "0x2f63834",\n      "contractAddress": "0x0000000000000000000000000000000000000000",\n      "cumulativeGasUsed": "0xdb374",\n      "gasUsed": "0x14a00",\n      "logs": [\n        {\n          "address": "0x4d4ee1b8583e31fe789eaf2e1b6e011c220c10b6",\n          "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n          "blockNumber": "0x2f63834",\n          "data": "0x0000000000000000000000001119e72b4af230becebd933d0e07f0eec51d8c2a0000000000000000000000000000000000000000000000000000000000000001",\n          "logIndex": "0x14",\n          "removed": false,\n          "topics": [\n            "0x1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881"\n          ],\n          "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n          "transactionIndex": "0x5"\n        },\n        {\n          "address": "0x4d4ee1b8583e31fe789eaf2e1b6e011c220c10b6",\n          "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n          "blockNumber": "0x2f63834",\n          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",\n          "logIndex": "0x15",\n          "removed": false,\n          "topics": [\n            "0x5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7",\n            "0xacc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0"\n          ],\n          "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n          "transactionIndex": "0x5"\n        },\n        {\n          "address": "0x0000000000000000000000000000000000001010",\n          "blockHash": "0x49be8c81414fae655f1f4615f5b437ca5160bdd4e4d8ce06275338ec6fe2e20b",\n          "blockNumber": "0x2f63834",\n          "data": "0x000000000000000000000000000000000000000000000000001284e7c67266000000000000000000000000000000000000000000000000014c0fa753f2298415000000000000000000000000000000000000000000001386f7e2c243dcc978070000000000000000000000000000000000000000000000014bfd226c2bb71e15000000000000000000000000000000000000000000001386f7f5472ba33bde07",\n          "logIndex": "0x16",\n          "removed": false,\n          "topics": [\n            "0x4dfe1bbbcf077ddc3e01291eea2d5c70c2b422b415d95645b9adcfd678cb1d63",\n            "0x0000000000000000000000000000000000000000000000000000000000001010",\n            "0x00000000000000000000000000e91788bcb998379027d36e6407a9187d7f313c",\n            "0x000000000000000000000000959c65b72147faf3450d8b50a0de57e72ffc5e0d"\n          ],\n          "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n          "transactionIndex": "0x5"\n        }\n      ],\n      "logsBloom": "0x00000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000008800000002000000000001004000000000000000000000000000000000800000000000000000000100000000400000000200400000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000002000000000000000000000000000000004000008000000000000001000000000000000000000000000000100000020000000000000000000000002000000020020002020040000000000000000040100000",\n      "root": "0x",\n      "status": "0x1",\n      "transactionHash": "0xf2e9f728abd65089f25efda5852e605ced377f4e2c89dbf143b124623ed09b2c",\n      "transactionIndex": "0x5"\n    },\n    "receipt": {\n      "id": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n      "index": 0,\n      "logs": [\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000001119e72b4af230becebd933d0e07f0eec51d8c2a0000000000000000000000000000000000000000000000000000000000000001",\n          "topics": [\n            "0x1f180c27086c7a39ea2a7b25239d1ab92348f07ca7bb59d1438fcf527568f881"\n          ]\n        },\n        {\n          "address": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "data": "0x0000000000000000000000000000000000000000000000000000000000000000",\n          "topics": [\n            "0x5c4eeb02dabf8976016ab414d617f9a162936dcace3cdef8c69ef6e262ad5ae7",\n            "0xacc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0"\n          ]\n        }\n      ],\n      "receipts": [\n        {\n          "id": "acc36ed4ef40db74137266e48d863083a5c7e85e2735d69adafcb5b362b6cfc0",\n          "index": 0,\n          "logs": null,\n          "receipts": null,\n          "revertReason": null,\n          "status": "SUCCEEDED",\n          "txnReceipt": ""\n        }\n      ],\n      "revertReason": null,\n      "status": "SUCCEEDED"\n    },\n    "request": {\n      "code": "sendTransaction",\n      "expires": 1699440762,\n      "identifier": "ts-sdk-1699440462686-0x153824576D03629b264683B430bBF9AcEA1d0975",\n      "issued": 1699440462,\n      "network": "137",\n      "transactions": [\n        {\n          "data": "0x",\n          "to": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6",\n          "type": "transaction",\n          "value": "0x00"\n        }\n      ],\n      "wallet": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6"\n    },\n    "simulations": [\n      {\n        "executed": true,\n        "gasLimit": 1147,\n        "gasUsed": 860,\n        "reason": null,\n        "result": "0x",\n        "succeeded": true\n      }\n    ]\n  }\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"how-to-detect",children:"How to Detect"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isSentTransactionResponse(res)) {\n  // It's a transaction receipt\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"failed-transaction-response",children:"Failed Transaction Response"}),"\n",(0,d.jsxs)(n.p,{children:["Triggered upon failed to execute a ",(0,d.jsx)(n.a,{href:"/waas/implementation/payloads#send-transaction-payload",children:"send transaction intent"}),". The code for this response is ",(0,d.jsx)(n.code,{children:"transactionFailed"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"data"})," field contains:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Field"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"error"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"The error message describing why the transaction failed."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"request"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"https://docs.sequence.xyz/waas/implementation/payloads/#send-transaction-payload",children:"SendTransactionPayload"})}),(0,d.jsx)(n.td,{children:"The packet of transactions that were attempted."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"simulations"}),(0,d.jsx)(n.td,{children:"SimulateResult[]"}),(0,d.jsx)(n.td,{children:"Results from the transaction simulation attempts."})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"SimulateResult"}),":"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"executed"}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"Whether the simulation was executed"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"succeeded"}),(0,d.jsx)(n.td,{children:"boolean"}),(0,d.jsx)(n.td,{children:"Whether the simulation succeeded"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"result"}),(0,d.jsx)(n.td,{children:"string | null"}),(0,d.jsx)(n.td,{children:"The result of the simulation"}),(0,d.jsx)(n.td,{children:"Yes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"reason"}),(0,d.jsx)(n.td,{children:"string | null"}),(0,d.jsx)(n.td,{children:"Reason for failure, if simulation failed"}),(0,d.jsx)(n.td,{children:"Yes"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gasUsed"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Amount of gas used in the simulation"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"gasLimit"}),(0,d.jsx)(n.td,{children:"number"}),(0,d.jsx)(n.td,{children:"Gas limit for the simulation"}),(0,d.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "code": "transactionFailed",\n  "data": {\n    "error": "This is an error message",\n    "request": {\n      "code": "sendTransaction",\n      "expires": 1699443005,\n      "identifier": "ts-sdk-1699442705965-0x153824576D03629b264683B430bBF9AcEA1d0975",\n      "issued": 1699442705,\n      "network": "137",\n      "transactions": [\n        {\n          "data": "0x",\n          "to": "0x839eE023B21f4Ffe2294025DE0AC30Ba7278D6Fd",\n          "type": "transaction",\n          "value": "0x00"\n        }\n      ],\n      "wallet": "0x4d4EE1b8583e31fe789eAF2e1b6e011C220c10B6"\n    },\n    "simulations": [\n      {\n        "executed": true,\n        "gasLimit": 7908,\n        "gasUsed": 5931,\n        "reason": "This is an error message",\n        "result": null,\n        "succeeded": false\n      }\n    ]\n  }\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"how-to-detect-1",children:"How to Detect"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isFailedTransactionResponse(res)) {\n  // It's a failed transaction\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"signed-message-response",children:"Signed Message Response"}),"\n",(0,d.jsxs)(n.p,{children:["Triggered after a successful ",(0,d.jsx)(n.a,{href:"/waas/implementation/payloads#sign-message-payload",children:"sign message intent"}),". The code is ",(0,d.jsx)(n.code,{children:"signedMessage"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"data"})," field contains:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"message"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"The signed message"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"signature"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"The signature"}),(0,d.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "code": "signedMessage",\n  "data": {\n    "message": "Hello World",\n    "signature": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"how-to-detect-2",children:"How to Detect"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isSignedMessageResponse(res)) {\n  // It's a signed message\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"session-opened-response",children:"Session Opened Response"}),"\n",(0,d.jsxs)(n.p,{children:["Occurs after successfully executing an ",(0,d.jsx)(n.a,{href:"/waas/implementation/payloads#open-session-payload",children:"open session intent"}),". The code is ",(0,d.jsx)(n.code,{children:"sessionOpened"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"data"})," field contains:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sessionId"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Session ID (resembling an address)"}),(0,d.jsx)(n.td,{children:"No"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"wallet"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"The Sequence wallet address"}),(0,d.jsx)(n.td,{children:"No"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n  "code": "sessionOpened",\n  "data": {\n    "sessionId": "0xBdeAfd3ee0550a73f615D2BaEA2E3D6d48FC857D",\n    "wallet": "0x44c2Ea42Fb006a613a7b41D142576eD6B5055902"\n  }\n}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"how-to-detect-3",children:"How to Detect"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isOpenSessionResponse(res)) {\n  // It's a session opened\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"validation-required-response",children:"Validation Required Response"}),"\n",(0,d.jsxs)(n.p,{children:["Some actions may necessitate additional validation. In such cases, the response code is ",(0,d.jsx)(n.code,{children:"validationRequired"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"data"})," field contains:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Name"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Optional"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sessionId"}),(0,d.jsx)(n.td,{children:"string"}),(0,d.jsx)(n.td,{children:"Session ID (resembling an address)"}),(0,d.jsx)(n.td,{children:"No"})]})})]}),"\n",(0,d.jsx)(n.h4,{id:"how-to-detect-4",children:"How to Detect"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isValidationRequiredResponse(res)) {\n  // Validation is required\n}\n"})}),"\n",(0,d.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,d.jsxs)(n.p,{children:["Both ",(0,d.jsx)(n.code,{children:"sendTransaction"})," and ",(0,d.jsx)(n.code,{children:"signMessage"})," intents could require validation. Always check for a ",(0,d.jsx)(n.code,{children:"validationRequired"})," response before assuming you've received a transaction receipt or a signed message."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-ts",children:"import { payloads } from '@0xsequence/waas';\n\nconst res = ... // response from WaaS API\n\nif (payloads.responses.isValidationRequiredResponse(res)) {\n  // Handle validation\n}\n\nif (payloads.responses.isSendTransactionResponse(res)) {\n  // It's a transaction receipt\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},7279:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var d=s(959);const t={},i=d.createContext(t);function r(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);