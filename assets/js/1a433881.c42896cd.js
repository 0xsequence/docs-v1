"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[369],{72097:(M,N,e)=>{e.d(N,{Z:()=>g});var D=e(67294),j=e(39960);const g=function(M){const N=M.cards;return D.createElement("div",{className:"container",style:{padding:5}},D.createElement("div",{className:"row is-multiline"},N.map(((M,N)=>D.createElement("div",{className:"col col--6",key:N,style:{padding:5}},D.createElement(j.Z,{className:"card",to:M.route,style:{height:"100%",textAlign:"center"}},D.createElement("div",{className:"card__body"},D.createElement("h4",null,M.title),D.createElement("p",null,M.description))))))))}},92882:(M,N,e)=>{e.r(N),e.d(N,{MyOtherItems:()=>k,assets:()=>y,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>A,toc:()=>l});var D=e(87462),j=(e(67294),e(3905)),g=e(65488),t=e(85162),I=e(3901),z=e(50941),n=e(44996),i=e(72097);const u={title:"MDX Syntax Features",sidebar_position:3},a="MDX Syntax Features",A={unversionedId:"misc/writing-docs/markdown-features",id:"misc/writing-docs/markdown-features",title:"MDX Syntax Features",description:"---",source:"@site/docs/misc/writing-docs/03-markdown-features.mdx",sourceDirName:"misc/writing-docs",slug:"/misc/writing-docs/markdown-features",permalink:"/misc/writing-docs/markdown-features",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/misc/writing-docs/03-markdown-features.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"MDX Syntax Features",sidebar_position:3},sidebar:"sidebar",previous:{title:"File Structure",permalink:"/misc/writing-docs/file-structure"},next:{title:"Why smart contracts wallets?",permalink:"/wallet-contracts/why"}},y={},T=[{title:"My First Item",description:"This is the first item"},{title:"My Second Item",description:"This is the second item"},{title:"My Third Item",description:"This is the third item"}],l=[{value:"Standard Features",id:"standard-features",level:2},{value:"Code Block Example",id:"code-block-example",level:3},{value:"Image Example",id:"image-example",level:3},{value:"BlockQuote Example",id:"blockquote-example",level:3},{value:"Details element example",id:"details-element-example",level:3},{value:"MDX Syntax Features",id:"mdx-syntax-features-1",level:2},{value:"Tabs",id:"tabs",level:3},{value:"Adominations",id:"adominations",level:3},{value:"Table Of Contents",id:"table-of-contents",level:3},{value:"Themed Images",id:"themed-images",level:3},{value:"Embed Videos",id:"embed-videos",level:3},{value:"Cards",id:"cards",level:3}],k=[{title:"My First Item",description:"This is the first item",route:"/misc/writing-docs/markdown-features#embed-videos"}],O={toc:l,MyOtherItems:k};function c(M){let{components:N,...u}=M;return(0,j.kt)("wrapper",(0,D.Z)({},O,u,{components:N,mdxType:"MDXLayout"}),(0,j.kt)("h1",{id:"mdx-syntax-features"},"MDX Syntax Features"),(0,j.kt)("hr",null),(0,j.kt)("h2",{id:"standard-features"},"Standard Features"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-markdown"},"# Heading 1\n## Heading 2\n### Heading 3\n#### Heading 4\n##### Heading 5\n###### Heading 6\n> blockquote\n- list\n1. ordered list\n`inline code`\n_emphasis_\n**bold**\n~~strikethrough~~\n--- thematic break\n[Link Name](https://example.com) \n![Image Alt](/img/image.png) # if image.png is in /src/img\n")),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"code-block-example"},"Code Block Example"),(0,j.kt)("p",null,"For Typescript:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre"},"```ts\nlet message: string = 'Hello, World!';\nconsole.log(message);\n```\n")),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-ts"},"let message: string = 'Hello, World!';\nconsole.log(message);\n")),(0,j.kt)("p",null,"For golang we can use:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre"},'```go\npackage main\n\nimport "fmt"\n\nfunc main(){\n    fmt.Println("Hello, World!")\n}\n```\n')),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main(){\n    fmt.Println("Hello, World!")\n}\n')),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"image-example"},"Image Example"),(0,j.kt)("p",null,(0,j.kt)("inlineCode",{parentName:"p"},"![Logo](/img/horizon-dark-mode.svg)")),(0,j.kt)("p",null,(0,j.kt)("img",{alt:"Logo",src:e(75213).Z,width:"424",height:"94"})),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"blockquote-example"},"BlockQuote Example"),(0,j.kt)("p",null,(0,j.kt)("inlineCode",{parentName:"p"},"> This is a quote")),(0,j.kt)("p",null,"Preview:"),(0,j.kt)("blockquote",null,(0,j.kt)("p",{parentName:"blockquote"},"This is a quote")),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"details-element-example"},"Details element example"),(0,j.kt)("p",null,"We can also add a ",(0,j.kt)("inlineCode",{parentName:"p"},"<details>")," element."),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-md"},"<details>\n  <summary>Toggle me!</summary>\n  <div>\n    <div>This is the detailed content</div>\n  </div>\n</details>\n")),(0,j.kt)("p",null,"Preview:"),(0,j.kt)("details",null,(0,j.kt)("summary",null,"Toggle me!"),(0,j.kt)("div",null,(0,j.kt)("div",null,"This is the detailed content"))),(0,j.kt)("hr",null),(0,j.kt)("h2",{id:"mdx-syntax-features-1"},"MDX Syntax Features"),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"tabs"},"Tabs"),(0,j.kt)("p",null,"Docusaurus provides ",(0,j.kt)("inlineCode",{parentName:"p"},"<Tabs>")," components that you can use"),(0,j.kt)("p",null,"For Example: "),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-jsx"},'** Hello World in Three Languages **\n\nimport Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="typescript" label="Typescript" default>\n\n    ```ts\n    let message: string = \'Hello, World!\';\n    console.log(message);\n    ```\n  </TabItem>\n  <TabItem value="golang" label="Golang">\n\n    ```go\n    package main\n\n    import "fmt"\n\n    func main(){\n        fmt.Println("Hello, World!")\n    }\n    ```\n\n  </TabItem>\n  <TabItem value="python" label="Python">\n\n    ```py\n    print("Hello World!")\n    ```\n\n  </TabItem>\n</Tabs>\n\n')),(0,j.kt)("p",null,"Preview: "),(0,j.kt)("p",null,(0,j.kt)("strong",{parentName:"p"}," Hello World in Three Languages ")),(0,j.kt)(g.Z,{mdxType:"Tabs"},(0,j.kt)(t.Z,{value:"typescript",label:"Typescript",default:!0,mdxType:"TabItem"},(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-ts"},"let message: string = 'Hello, World!';\nconsole.log(message);\n"))),(0,j.kt)(t.Z,{value:"golang",label:"Golang",mdxType:"TabItem"},(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\nfunc main(){\n    fmt.Println("Hello, World!")\n}\n'))),(0,j.kt)(t.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-py"},'print("Hello World!")\n')))),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"adominations"},"Adominations"),(0,j.kt)("p",null,"Admonitions are wrapped by a set of 3 colons."),(0,j.kt)("p",null,"Example:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-md"},":::note My Title\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::tip My Title\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::info My Title\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::caution My Title\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n\n:::danger My Title\n\nSome **content** with _markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,j.kt)("p",null,"Preview:"),(0,j.kt)("admonition",{title:"My Title",type:"note"},(0,j.kt)("p",{parentName:"admonition"},"Some ",(0,j.kt)("strong",{parentName:"p"},"content")," with ",(0,j.kt)("em",{parentName:"p"},"markdown")," ",(0,j.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,j.kt)("a",{parentName:"p",href:"#"},"this ",(0,j.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,j.kt)("admonition",{title:"My Title",type:"tip"},(0,j.kt)("p",{parentName:"admonition"},"Some ",(0,j.kt)("strong",{parentName:"p"},"content")," with ",(0,j.kt)("em",{parentName:"p"},"markdown")," ",(0,j.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,j.kt)("a",{parentName:"p",href:"#"},"this ",(0,j.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,j.kt)("admonition",{title:"My Title",type:"info"},(0,j.kt)("p",{parentName:"admonition"},"Some ",(0,j.kt)("strong",{parentName:"p"},"content")," with ",(0,j.kt)("em",{parentName:"p"},"markdown")," ",(0,j.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,j.kt)("a",{parentName:"p",href:"#"},"this ",(0,j.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,j.kt)("admonition",{title:"My Title",type:"caution"},(0,j.kt)("p",{parentName:"admonition"},"Some ",(0,j.kt)("strong",{parentName:"p"},"content")," with ",(0,j.kt)("em",{parentName:"p"},"markdown")," ",(0,j.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,j.kt)("a",{parentName:"p",href:"#"},"this ",(0,j.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,j.kt)("admonition",{title:"My Title",type:"danger"},(0,j.kt)("p",{parentName:"admonition"},"Some ",(0,j.kt)("strong",{parentName:"p"},"content")," with ",(0,j.kt)("em",{parentName:"p"},"markdown")," ",(0,j.kt)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,j.kt)("a",{parentName:"p",href:"#"},"this ",(0,j.kt)("inlineCode",{parentName:"a"},"api")),".")),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"table-of-contents"},"Table Of Contents"),(0,j.kt)("p",null,"Example:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-ts"},"import TOCInline from '@theme/TOCInline';\n\n<TOCInline toc={toc} />;\n\n")),(0,j.kt)("p",null,"Preview: "),(0,j.kt)(I.Z,{toc:l,mdxType:"TOCInline"}),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"themed-images"},"Themed Images"),(0,j.kt)("p",null,"Themed Images are for switching images based on the theme (dark or light)."),(0,j.kt)("p",null,"Example:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-md"},"import ThemedImage from '@theme/ThemedImage';\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\n<ThemedImage\n  alt=\"Sequence icon themed image\"\n  sources={{\n    light: useBaseUrl('/img/horizon-light-mode.svg'),\n    dark: useBaseUrl('/img/horizon-dark-mode.svg'),\n  }}\n/>\n")),(0,j.kt)("p",null,"Preview:"),(0,j.kt)(z.Z,{alt:"Sequence icon themed image",sources:{light:(0,n.Z)("/img/horizon-light-mode.svg"),dark:(0,n.Z)("/img/horizon-dark-mode.svg")},mdxType:"ThemedImage"}),(0,j.kt)("p",null,"Change the theme by clicking the theme button."),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"embed-videos"},"Embed Videos"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-md"},'<iframe height="315" width="560" src="https://www.youtube.com/embed/tAbtJx32aKQ" frameborder="0" allowfullscreen="true"></iframe>\n')),(0,j.kt)("p",null,"Preview:"),(0,j.kt)("iframe",{height:"315",width:"560",src:"https://www.youtube.com/embed/tAbtJx32aKQ",frameborder:"0",allowfullscreen:"true"}),(0,j.kt)("hr",null),(0,j.kt)("h3",{id:"cards"},"Cards"),(0,j.kt)("p",null,"We can also create Beautiful looking Cards."),(0,j.kt)("p",null,"Example:"),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-ts"},"import Cards from '/src/components/Cards'\nconst MyItems = [\n  {\n    title: 'My First Item',\n    description: 'This is the first item',\n  },\n  {\n    title: 'My Second Item',\n    description: 'This is the second item',\n  },\n  {\n    title: 'My Third Item',\n    description: 'This is the third item',\n  }\n]\n\n\n<Cards cards={MyItems} />\n")),(0,j.kt)(i.Z,{cards:T,mdxType:"Cards"}),(0,j.kt)("br",null),(0,j.kt)("p",null,(0,j.kt)("strong",{parentName:"p"},(0,j.kt)("strong",{parentName:"strong"},(0,j.kt)("em",{parentName:"strong"},"We can also add hyperlinks to these cards")))),(0,j.kt)("pre",null,(0,j.kt)("code",{parentName:"pre",className:"language-ts"},"import Cards from '/src/components/Cards'\nconst MyItems = [\n  {\n    title: 'My First Item',\n    description: 'This is the first item',\n    route: '#embed-videos'\n  }\n]\n\n\n<Cards cards={MyItems} />\n")),(0,j.kt)(i.Z,{cards:k,mdxType:"Cards"}),(0,j.kt)("hr",null),(0,j.kt)("h4",null," Now you are ready to write some documentation \ud83e\udd73!! "))}c.isMDXComponent=!0},75213:(M,N,e)=>{e.d(N,{Z:()=>D});const D="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDI0IiBoZWlnaHQ9Ijk0IiB2aWV3Qm94PSIwIDAgNDI0IDk0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNODkgNDhIMjFDMjAuNDY5NiA0OCAxOS45NjA5IDQ4LjIxMDcgMTkuNTg1OCA0OC41ODU4QzE5LjIxMDcgNDguOTYwOSAxOSA0OS40Njk2IDE5IDUwQzE5IDUwLjUzMDQgMTkuMjEwNyA1MS4wMzkxIDE5LjU4NTggNTEuNDE0MkMxOS45NjA5IDUxLjc4OTMgMjAuNDY5NiA1MiAyMSA1MkgyOEMyOC41MzA0IDUyIDI5LjAzOTEgNTIuMjEwNyAyOS40MTQyIDUyLjU4NThDMjkuNzg5MyA1Mi45NjA5IDMwIDUzLjQ2OTYgMzAgNTRDMzAgNTQuNTMwNCAyOS43ODkzIDU1LjAzOTEgMjkuNDE0MiA1NS40MTQyQzI5LjAzOTEgNTUuNzg5MyAyOC41MzA0IDU2IDI4IDU2SDI1QzI0LjQ2OTYgNTYgMjMuOTYwOSA1Ni4yMTA3IDIzLjU4NTggNTYuNTg1OEMyMy4yMTA3IDU2Ljk2MDkgMjMgNTcuNDY5NiAyMyA1OEMyMyA1OC41MzA0IDIzLjIxMDcgNTkuMDM5MSAyMy41ODU4IDU5LjQxNDJDMjMuOTYwOSA1OS43ODkzIDI0LjQ2OTYgNjAgMjUgNjBIMzlDMzkuNTMwNCA2MCA0MC4wMzkxIDU5Ljc4OTMgNDAuNDE0MiA1OS40MTQyQzQwLjc4OTMgNTkuMDM5MSA0MSA1OC41MzA0IDQxIDU4QzQxIDU3LjQ2OTYgNDAuNzg5MyA1Ni45NjA5IDQwLjQxNDIgNTYuNTg1OEM0MC4wMzkxIDU2LjIxMDcgMzkuNTMwNCA1NiAzOSA1NkgzNkMzNS40Njk2IDU2IDM0Ljk2MDkgNTUuNzg5MyAzNC41ODU4IDU1LjQxNDJDMzQuMjEwNyA1NS4wMzkxIDM0IDU0LjUzMDQgMzQgNTRDMzQgNTMuNDY5NiAzNC4yMTA3IDUyLjk2MDkgMzQuNTg1OCA1Mi41ODU4QzM0Ljk2MDkgNTIuMjEwNyAzNS40Njk2IDUyIDM2IDUySDg5Qzg5LjUzMDQgNTIgOTAuMDM5MSA1MS43ODkzIDkwLjQxNDIgNTEuNDE0MkM5MC43ODkzIDUxLjAzOTEgOTEgNTAuNTMwNCA5MSA1MEM5MSA0OS40Njk2IDkwLjc4OTMgNDguOTYwOSA5MC40MTQyIDQ4LjU4NThDOTAuMDM5MSA0OC4yMTA3IDg5LjUzMDQgNDggODkgNDhaIiBmaWxsPSIjRTc3NjI5Ii8+CjxwYXRoIGQ9Ik04NyA1Nkg0N0M0Ni40Njk2IDU2IDQ1Ljk2MDkgNTYuMjEwNyA0NS41ODU4IDU2LjU4NThDNDUuMjEwNyA1Ni45NjA5IDQ1IDU3LjQ2OTYgNDUgNThDNDUgNTguNTMwNCA0NS4yMTA3IDU5LjAzOTEgNDUuNTg1OCA1OS40MTQyQzQ1Ljk2MDkgNTkuNzg5MyA0Ni40Njk2IDYwIDQ3IDYwSDY4QzY4LjUzMDQgNjAgNjkuMDM5MSA2MC4yMTA3IDY5LjQxNDIgNjAuNTg1OEM2OS43ODkzIDYwLjk2MDkgNzAgNjEuNDY5NiA3MCA2MkM3MCA2Mi41MzA0IDY5Ljc4OTMgNjMuMDM5MSA2OS40MTQyIDYzLjQxNDJDNjkuMDM5MSA2My43ODkzIDY4LjUzMDQgNjQgNjggNjRIMjlDMjguNDY5NiA2NCAyNy45NjA5IDY0LjIxMDcgMjcuNTg1OCA2NC41ODU4QzI3LjIxMDcgNjQuOTYwOSAyNyA2NS40Njk2IDI3IDY2QzI3IDY2LjUzMDQgMjcuMjEwNyA2Ny4wMzkxIDI3LjU4NTggNjcuNDE0MkMyNy45NjA5IDY3Ljc4OTMgMjguNDY5NiA2OCAyOSA2OEg1MUM1MS41MzA0IDY4IDUyLjAzOTEgNjguMjEwNyA1Mi40MTQyIDY4LjU4NThDNTIuNzg5MyA2OC45NjA5IDUzIDY5LjQ2OTYgNTMgNzBDNTMgNzAuNTMwNCA1Mi43ODkzIDcxLjAzOTEgNTIuNDE0MiA3MS40MTQyQzUyLjAzOTEgNzEuNzg5MyA1MS41MzA0IDcyIDUxIDcySDQzQzQyLjQ2OTYgNzIgNDEuOTYwOSA3Mi4yMTA3IDQxLjU4NTggNzIuNTg1OEM0MS4yMTA3IDcyLjk2MDkgNDEgNzMuNDY5NiA0MSA3NEM0MSA3NC41MzA0IDQxLjIxMDcgNzUuMDM5MSA0MS41ODU4IDc1LjQxNDJDNDEuOTYwOSA3NS43ODkzIDQyLjQ2OTYgNzYgNDMgNzZINjdDNjcuNTMwNCA3NiA2OC4wMzkxIDc1Ljc4OTMgNjguNDE0MiA3NS40MTQyQzY4Ljc4OTMgNzUuMDM5MSA2OSA3NC41MzA0IDY5IDc0QzY5IDczLjQ2OTYgNjguNzg5MyA3Mi45NjA5IDY4LjQxNDIgNzIuNTg1OEM2OC4wMzkxIDcyLjIxMDcgNjcuNTMwNCA3MiA2NyA3Mkg1OUM1OC40Njk2IDcyIDU3Ljk2MDkgNzEuNzg5MyA1Ny41ODU4IDcxLjQxNDJDNTcuMjEwNyA3MS4wMzkxIDU3IDcwLjUzMDQgNTcgNzBDNTcgNjkuNDY5NiA1Ny4yMTA3IDY4Ljk2MDkgNTcuNTg1OCA2OC41ODU4QzU3Ljk2MDkgNjguMjEwNyA1OC40Njk2IDY4IDU5IDY4SDgyQzgyLjUzMDQgNjggODMuMDM5MSA2Ny43ODkzIDgzLjQxNDIgNjcuNDE0MkM4My43ODkzIDY3LjAzOTEgODQgNjYuNTMwNCA4NCA2NkM4NCA2NS40Njk2IDgzLjc4OTMgNjQuOTYwOSA4My40MTQyIDY0LjU4NThDODMuMDM5MSA2NC4yMTA3IDgyLjUzMDQgNjQgODIgNjRINzZDNzUuNDY5NiA2NCA3NC45NjA5IDYzLjc4OTMgNzQuNTg1OCA2My40MTQyQzc0LjIxMDcgNjMuMDM5MSA3NCA2Mi41MzA0IDc0IDYyQzc0IDYxLjQ2OTYgNzQuMjEwNyA2MC45NjA5IDc0LjU4NTggNjAuNTg1OEM3NC45NjA5IDYwLjIxMDcgNzUuNDY5NiA2MCA3NiA2MEg4N0M4Ny41MzA0IDYwIDg4LjAzOTEgNTkuNzg5MyA4OC40MTQyIDU5LjQxNDJDODguNzg5MyA1OS4wMzkxIDg5IDU4LjUzMDQgODkgNThDODkgNTcuNDY5NiA4OC43ODkzIDU2Ljk2MDkgODguNDE0MiA1Ni41ODU4Qzg4LjAzOTEgNTYuMjEwNyA4Ny41MzA0IDU2IDg3IDU2WiIgZmlsbD0iI0U3NzYyOSIvPgo8cGF0aCBkPSJNNTUgMTlDNDguMzY5NiAxOSA0Mi4wMTA3IDIxLjYzMzkgMzcuMzIyMyAyNi4zMjIzQzMyLjYzMzkgMzEuMDEwNyAzMCAzNy4zNjk2IDMwIDQ0SDgwQzgwIDM3LjM2OTYgNzcuMzY2MSAzMS4wMTA3IDcyLjY3NzcgMjYuMzIyM0M2Ny45ODkzIDIxLjYzMzkgNjEuNjMwNCAxOSA1NSAxOVoiIGZpbGw9IiNFNzc2MjkiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMzMuMjIgMzAuMjVDMzM2LjY1MiAzMC4yNSAzNDAuMDA3IDMxLjI2NzggMzQyLjg2IDMzLjE3NDdDMzQ1LjcxNCAzNS4wODE2IDM0Ny45MzcgMzcuNzkxOSAzNDkuMjUgNDAuOTYyOEMzNTAuNTYzIDQ0LjEzMzYgMzUwLjkwNiA0Ny42MjI3IDM1MC4yMzYgNTAuOTg4NUMzNDkuNTY2IDU0LjM1NDMgMzQ3LjkxMiA1Ny40NDU4IDM0NS40ODUgNTkuODcxOEMzNDMuMDU3IDYyLjI5NzkgMzM5Ljk2NSA2My45NDk1IDMzNi41OTkgNjQuNjE3OEMzMzMuMjMyIDY1LjI4NjIgMzI5Ljc0NCA2NC45NDEyIDMyNi41NzQgNjMuNjI2NEMzMjMuNDAzIDYyLjMxMTcgMzIwLjY5NCA2MC4wODY0IDMxOC43ODkgNTcuMjMxOUMzMTYuODg0IDU0LjM3NzQgMzE1Ljg2OCA1MS4wMjE5IDMxNS44NyA0Ny41OUMzMTUuODYxIDQ1LjMwOTQgMzE2LjMwMyA0My4wNDk2IDMxNy4xNzIgNDAuOTQxQzMxOC4wNDEgMzguODMyNCAzMTkuMzE5IDM2LjkxNjcgMzIwLjkzMiAzNS4zMDQ2QzMyMi41NDUgMzMuNjkyNCAzMjQuNDYxIDMyLjQxNTcgMzI2LjU3IDMxLjU0ODJDMzI4LjY3OSAzMC42ODA2IDMzMC45MzkgMzAuMjM5NCAzMzMuMjIgMzAuMjVaTTE3Ny4zOSAzMC4yNUMxODAuODIyIDMwLjI0OCAxODQuMTc4IDMxLjI2NDIgMTg3LjAzMyAzMy4xNjk4QzE4OS44ODggMzUuMDc1NSAxOTIuMTEzIDM3Ljc4NTEgMTkzLjQyNyA0MC45NTU4QzE5NC43NDIgNDQuMTI2NSAxOTUuMDg2IDQ3LjYxNTkgMTk0LjQxNyA1MC45ODI0QzE5My43NDggNTQuMzQ4OSAxOTIuMDk1IDU3LjQ0MTMgMTg5LjY2OCA1OS44NjgzQzE4Ny4yNDEgNjIuMjk1MyAxODQuMTQ5IDYzLjk0OCAxODAuNzgyIDY0LjYxNzFDMTc3LjQxNiA2NS4yODYzIDE3My45MjcgNjQuOTQxOCAxNzAuNzU2IDYzLjYyNzRDMTY3LjU4NSA2Mi4zMTMgMTY0Ljg3NSA2MC4wODc2IDE2Mi45NyA1Ny4yMzI5QzE2MS4wNjQgNTQuMzc4MiAxNjAuMDQ4IDUxLjAyMjQgMTYwLjA1IDQ3LjU5QzE2MC4wNDEgNDUuMzEwMyAxNjAuNDgzIDQzLjA1MTMgMTYxLjM1MSA0MC45NDMzQzE2Mi4yMTkgMzguODM1NCAxNjMuNDk2IDM2LjkyMDEgMTY1LjEwOCAzNS4zMDgxQzE2Ni43MiAzMy42OTYxIDE2OC42MzUgMzIuNDE5MiAxNzAuNzQzIDMxLjU1MTFDMTcyLjg1MSAzMC42ODI5IDE3NS4xMSAzMC4yNDA3IDE3Ny4zOSAzMC4yNVpNMjU1Ljc2IDI2LjA1QzI1Ni4xMzQgMjYuMDQxNyAyNTYuNTA2IDI2LjEwOTYgMjU2Ljg1NCAyNi4yNDk3QzI1Ny4yMDEgMjYuMzg5NyAyNTcuNTE2IDI2LjU5OSAyNTcuNzggMjYuODY0NkMyNTguMDQzIDI3LjEzMDMgMjU4LjI1IDI3LjQ0NjggMjU4LjM4OCAyNy43OTVDMjU4LjUyNiAyOC4xNDMyIDI1OC41OTEgMjguNTE1OCAyNTguNTggMjguODlWNjYuNzJDMjU4LjU5OSA2Ny4wOTE0IDI1OC41NDIgNjcuNDYyOCAyNTguNDEzIDY3LjgxMTZDMjU4LjI4NCA2OC4xNjA0IDI1OC4wODUgNjguNDc5MiAyNTcuODI5IDY4Ljc0ODZDMjU3LjU3MiA2OS4wMTgxIDI1Ny4yNjQgNjkuMjMyNSAyNTYuOTIyIDY5LjM3ODlDMjU2LjU4IDY5LjUyNTMgMjU2LjIxMiA2OS42MDA1IDI1NS44NCA2OS42QzI1NS40ODggNjkuNjA5NCAyNTUuMTM4IDY5LjU0NzkgMjU0LjgxIDY5LjQxOTRDMjU0LjQ4MiA2OS4yOTA4IDI1NC4xODMgNjkuMDk3NiAyNTMuOTMxIDY4Ljg1MTRDMjUzLjY3OSA2OC42MDUyIDI1My40OCA2OC4zMTA5IDI1My4zNDQgNjcuOTg2QzI1My4yMDggNjcuNjYxMSAyNTMuMTM5IDY3LjMxMjIgMjUzLjE0IDY2Ljk2VjI4LjQ3QzI1My4xNzYgMjcuODA1MSAyNTMuNDcgMjcuMTgwNSAyNTMuOTU5IDI2LjcyODdDMjU0LjQ0OCAyNi4yNzY4IDI1NS4wOTQgMjYuMDMzNCAyNTUuNzYgMjYuMDVaTTExMS42NyAyNi4xMkMxMTIuMDQ1IDI2LjExNyAxMTIuNDE2IDI2LjE5MDEgMTEyLjc2MiAyNi4zMzVDMTEzLjEwOCAyNi40Nzk4IDExMy40MjEgMjYuNjkzMyAxMTMuNjgyIDI2Ljk2MjZDMTEzLjk0MyAyNy4yMzE4IDExNC4xNDYgMjcuNTUxMiAxMTQuMjggMjcuOTAxNUMxMTQuNDE0IDI4LjI1MTcgMTE0LjQ3NSAyOC42MjU0IDExNC40NiAyOVY0NS40OUgxMzguN1YyOC40OUMxMzguNyAyNyAxNDAuMzMgMjYuMDcgMTQxLjMgMjYuMDdDMTQxLjY4MyAyNi4wNTYyIDE0Mi4wNjUgMjYuMTIzNCAxNDIuNDIgMjYuMjY3NEMxNDIuNzc1IDI2LjQxMTQgMTQzLjA5NiAyNi42Mjg5IDE0My4zNjEgMjYuOTA1NUMxNDMuNjI3IDI3LjE4MjIgMTQzLjgzMSAyNy41MTE4IDE0My45NiAyNy44NzI3QzE0NC4wODkgMjguMjMzNyAxNDQuMTQgMjguNjE3OCAxNDQuMTEgMjlWNjYuNzlDMTQ0LjExOSA2Ny4xNjA4IDE0NC4wNTQgNjcuNTI5OCAxNDMuOTE4IDY3Ljg3NDhDMTQzLjc4MSA2OC4yMTk3IDE0My41NzcgNjguNTMzNyAxNDMuMzE2IDY4Ljc5NzlDMTQzLjA1NiA2OS4wNjIgMTQyLjc0NSA2OS4yNzEgMTQyLjQwMiA2OS40MTIyQzE0Mi4wNTkgNjkuNTUzNSAxNDEuNjkxIDY5LjYyNDIgMTQxLjMyIDY5LjYyQzE0MC42MjggNjkuNjA5NyAxMzkuOTY4IDY5LjMzMDMgMTM5LjQ3OSA2OC44NDEyQzEzOC45OSA2OC4zNTIxIDEzOC43MSA2Ny42OTE3IDEzOC43IDY3VjUwLjgySDExNC40NlY2Ni44MkMxMTQuNDg1IDY3LjE4NjYgMTE0LjQzNCA2Ny41NTQ1IDExNC4zMDggNjcuODk5N0MxMTQuMTgyIDY4LjI0NDkgMTEzLjk4NSA2OC41NTk4IDExMy43MjkgNjguODIzOUMxMTMuNDczIDY5LjA4OCAxMTMuMTY1IDY5LjI5NTMgMTEyLjgyNCA2OS40MzI1QzExMi40ODMgNjkuNTY5NiAxMTIuMTE3IDY5LjYzMzUgMTExLjc1IDY5LjYyQzExMS4wNTggNjkuNjIwOSAxMTAuMzkxIDY5LjM1NTggMTA5Ljg4OSA2OC44NzkzQzEwOS4zODYgNjguNDAyOSAxMDkuMDg2IDY3Ljc1MTUgMTA5LjA1IDY3LjA2VjI4LjU0QzEwOS4xMTYgMjcuODg2MyAxMDkuNDE5IDI3LjI3OTIgMTA5LjkwMSAyNi44MzM0QzExMC4zODQgMjYuMzg3NSAxMTEuMDEzIDI2LjEzMzggMTExLjY3IDI2LjEyWk0yMTIgMjUuOTRIMjI5LjRDMjM0LjczIDI1Ljk0IDI0MS42MSAyOS42OCAyNDEuNjEgMzcuODRDMjQxLjYxIDQzLjM1IDIzOC42MSA0Ny41NyAyMzEuMSA0OS40NEMyMzIuMzQgNTEuMDQgMjM5LjM5IDYwLjc3IDI0Mi42NyA2NS40NEMyNDUuMSA2OC45NCAyNDAuMjEgNzEuNDQgMjM4LjM3IDY4LjgyQzIzNS4zNyA2NC41NCAyMjQuNSA0OS40MSAyMjMuNzkgNDguNDNDMjIzLjQ3MyA0OC4wNDUxIDIyMy4yNjkgNDcuNTgwNiAyMjMuMTk4IDQ3LjA4NzJDMjIzLjEyOCA0Ni41OTM5IDIyMy4xOTQgNDYuMDkwNiAyMjMuMzkgNDUuNjMyNUMyMjMuNTg2IDQ1LjE3NDMgMjIzLjkwNSA0NC43Nzg4IDIyNC4zMSA0NC40ODkyQzIyNC43MTYgNDQuMTk5NSAyMjUuMTkzIDQ0LjAyNjggMjI1LjY5IDQzLjk5SDIzMC4xNUMyMzEuNzM2IDQzLjk3MTggMjMzLjI1MSA0My4zMzM4IDIzNC4zNzMgNDIuMjEyNUMyMzUuNDk0IDQxLjA5MTIgMjM2LjEzMiAzOS41NzU3IDIzNi4xNSAzNy45OUMyMzYuMTUgMzMuOTkgMjMzLjQ3IDMxLjUgMjI5LjE1IDMxLjRIMjE0LjU5VjY3LjRDMjE0LjU5NyA2Ny43NjY5IDIxNC41MyA2OC4xMzE1IDIxNC4zOTIgNjguNDcxOEMyMTQuMjU1IDY4LjgxMjIgMjE0LjA1IDY5LjEyMTQgMjEzLjc5MSA2OS4zODA5QzIxMy41MzEgNjkuNjQwNCAyMTMuMjIyIDY5Ljg0NDkgMjEyLjg4MiA2OS45ODIyQzIxMi41NDEgNzAuMTE5NSAyMTIuMTc3IDcwLjE4NjggMjExLjgxIDcwLjE4QzIxMS4xMjkgNzAuMTc1NSAyMTAuNDc2IDY5LjkwOTEgMjA5Ljk4NyA2OS40MzYyQzIwOS40OTcgNjguOTYzMyAyMDkuMjA4IDY4LjMyMDEgMjA5LjE4IDY3LjY0VjI4LjM1QzIwOS4xOCAyNyAyMTEgMjUuOTQgMjEyIDI1Ljk0Wk0zNjguMzcgMjUuOTRDMzY5LjQ5OSAyNi4yNzczIDM3MC41NzEgMjYuNzgyOSAzNzEuNTUgMjcuNDRDMzc3Ljk2NCAzMS4yNjg0IDM4My43MDcgMzYuMTIyOSAzODguNTUgNDEuODFDMzkxLjYyMSA0NS41MDM2IDM5NC4zMDIgNDkuNTA0OSAzOTYuNTUgNTMuNzVWMjguNjJDMzk2LjUyNCAyOC4yNTc4IDM5Ni41NzMgMjcuODk0IDM5Ni42OTUgMjcuNTUxOEMzOTYuODE2IDI3LjIwOTYgMzk3LjAwOCAyNi44OTY0IDM5Ny4yNTcgMjYuNjMyMkMzOTcuNTA2IDI2LjM2NzkgMzk3LjgwOCAyNi4xNTg0IDM5OC4xNDIgMjYuMDE2OUMzOTguNDc3IDI1Ljg3NTMgMzk4LjgzNyAyNS44MDQ5IDM5OS4yIDI1LjgxQzM5OS45NDYgMjUuODE1MyA0MDAuNjYgMjYuMTE2MSA0MDEuMTg1IDI2LjY0NjVDNDAxLjcwOSAyNy4xNzcgNDAyLjAwMyAyNy44OTM4IDQwMiAyOC42NFY2Ni44NUM0MDIuMDA1IDY3LjIxMzIgNDAxLjkzNSA2Ny41NzM0IDQwMS43OTMgNjcuOTA3OUM0MDEuNjUyIDY4LjI0MjQgNDAxLjQ0MiA2OC41NDM4IDQwMS4xNzggNjguNzkzQzQwMC45MTQgNjkuMDQyMiA0MDAuNiA2OS4yMzM3IDQwMC4yNTggNjkuMzU1NEMzOTkuOTE2IDY5LjQ3NzEgMzk5LjU1MiA2OS41MjY0IDM5OS4xOSA2OS41QzM5Ni42NCA2OS41IDM5Ni4zNCA2Ni43MyAzOTUuNzUgNjUuMDZDMzk1LjQyIDY0LjE1IDM5NS4wMSA2Mi45NCAzOTQuNjMgNjIuMDZDMzkzLjcyIDU5Ljk1IDM5Mi4zNCA1Ny43OCAzOTEuMzggNTUuNjlDMzg3LjkzIDQ4LjI2IDM3OC42NSAzOC4yNCAzNzAuNzMgMzMuMjhWNjYuODhDMzcwLjczIDY4LjggMzY5LjYzIDcwLjA2IDM2Ny45MiA3MC4wNkMzNjcuMjIyIDcwLjA2NTQgMzY2LjU1MSA2OS43OTU0IDM2Ni4wNTEgNjkuMzA4NkMzNjUuNTUxIDY4LjgyMTkgMzY1LjI2MyA2OC4xNTc2IDM2NS4yNSA2Ny40NlYyOC4yMkMzNjUuMjc0IDI3Ljg1MTMgMzY1LjM3OSAyNy40OTI0IDM2NS41NTcgMjcuMTY4N0MzNjUuNzM1IDI2Ljg0NSAzNjUuOTgyIDI2LjU2NDQgMzY2LjI4MSAyNi4zNDY4QzM2Ni41OCAyNi4xMjkzIDM2Ni45MjIgMjUuOTgwMSAzNjcuMjg1IDI1LjkwOThDMzY3LjY0OCAyNS44Mzk1IDM2OC4wMjIgMjUuODQ5OCAzNjguMzggMjUuOTRIMzY4LjM3Wk0yNzMuMjIgMjUuNjFIMzAyLjYxQzMwMy4xNzcgMjUuNTY2NCAzMDMuNzQ0IDI1LjY5MjMgMzA0LjI0IDI1Ljk3MTdDMzA0LjczNSAyNi4yNTExIDMwNS4xMzcgMjYuNjcxNSAzMDUuMzkzIDI3LjE3OTRDMzA1LjY0OSAyNy42ODczIDMwNS43NDggMjguMjU5OSAzMDUuNjc4IDI4LjgyNDRDMzA1LjYwOCAyOS4zODg5IDMwNS4zNzIgMjkuOTE5OSAzMDUgMzAuMzVMMzAxLjcxIDM0LjU0QzI5NCA0NC40NSAyODYuMSA1NC42IDI3OC4yNSA2NC4zOEgzMDIuNDVDMzA0LjQ1IDY0LjM4IDMwNS42NSA2NS41MSAzMDUuNjUgNjcuMDdDMzA1LjY1IDY4LjI5IDMwNS4wMSA2OS44NiAzMDIuNjUgNjkuODZIMjcyLjY1QzI3MC41NSA2OS44NiAyNjguODIgNjcuNjEgMjcwLjc4IDY1LjE5QzI3Mi4zOCA2My4xOSAyNzUuMDQgNTkuODUgMjc1LjIyIDU5LjYyQzI4Mi42MSA1MC4wOCAyOTAuMTEgNDAuNDkgMjk3LjU5IDMxLjA5SDI3My41OUMyNzEuNTkgMzEuMDkgMjcwLjM2IDMwLjA5IDI3MC4zNiAyOC40MkMyNzAuMzQ0IDI4LjA0MTUgMjcwLjQwNyAyNy42NjM5IDI3MC41NDcgMjcuMzExNkMyNzAuNjg2IDI2Ljk1OTMgMjcwLjg5OCAyNi42NDAzIDI3MS4xNjkgMjYuMzc1MkMyNzEuNDM5IDI2LjExMDIgMjcxLjc2MyAyNS45MDUxIDI3Mi4xMTggMjUuNzczM0MyNzIuNDczIDI1LjY0MTQgMjcyLjg1MiAyNS41ODU4IDI3My4yMyAyNS42MUgyNzMuMjJaTTMzMy4yMiAyNUMzMzcuNjkgMjUgMzQyLjA2IDI2LjMyNTcgMzQ1Ljc3NyAyOC44MDk1QzM0OS40OTQgMzEuMjkzMiAzNTIuMzkgMzQuODIzNSAzNTQuMTAxIDM4Ljk1MzdDMzU1LjgxMSA0My4wODM5IDM1Ni4yNTggNDcuNjI4NSAzNTUuMzg1IDUyLjAxMjdDMzU0LjUxMiA1Ni4zOTcgMzUyLjM1OSA2MC40MjM5IDM0OS4xOTcgNjMuNTg0MkMzNDYuMDM1IDY2Ljc0NDQgMzQyLjAwOCA2OC44OTYxIDMzNy42MjMgNjkuNzY3QzMzMy4yMzggNzAuNjM3OSAzMjguNjk0IDcwLjE4ODkgMzI0LjU2NCA2OC40NzY4QzMyMC40MzUgNjYuNzY0NyAzMTYuOTA2IDYzLjg2NjUgMzE0LjQyNCA2MC4xNDg2QzMxMS45NDIgNTYuNDMwNyAzMTAuNjE4IDUyLjA2MDMgMzEwLjYyIDQ3LjU5QzMxMC41OTYgNDQuNjE1OSAzMTEuMTY0IDQxLjY2NjggMzEyLjI5MiAzOC45MTQ2QzMxMy40MTkgMzYuMTYyMyAzMTUuMDgzIDMzLjY2MiAzMTcuMTg3IDMxLjU1OTRDMzE5LjI5IDI5LjQ1NjggMzIxLjc5MSAyNy43OTQgMzI0LjU0NCAyNi42Njc4QzMyNy4yOTcgMjUuNTQxNiAzMzAuMjQ2IDI0Ljk3NDcgMzMzLjIyIDI1Wk0xNzcuMzkgMjVDMTgxLjg2MSAyNC45OTggMTg2LjIzMiAyNi4zMjIxIDE4OS45NSAyOC44MDQ2QzE5My42NjggMzEuMjg3MiAxOTYuNTY2IDM0LjgxNjcgMTk4LjI3OCAzOC45NDY3QzE5OS45OSA0My4wNzY4IDIwMC40MzggNDcuNjIxNyAxOTkuNTY2IDUyLjAwNjZDMTk4LjY5NSA1Ni4zOTE1IDE5Ni41NDIgNjAuNDE5MyAxOTMuMzgxIDYzLjU4MDZDMTkwLjIxOSA2Ni43NDE5IDE4Ni4xOTEgNjguODk0NSAxODEuODA3IDY5Ljc2NjJDMTc3LjQyMiA3MC42Mzc5IDE3Mi44NzcgNzAuMTg5NSAxNjguNzQ3IDY4LjQ3NzhDMTY0LjYxNyA2Ni43NjYgMTYxLjA4NyA2My44Njc3IDE1OC42MDUgNjAuMTQ5N0MxNTYuMTIyIDU2LjQzMTYgMTU0Ljc5OCA1Mi4wNjA3IDE1NC44IDQ3LjU5QzE1NC43NzYgNDQuNjE2OCAxNTUuMzQ0IDQxLjY2ODUgMTU2LjQ3MSAzOC45MTY5QzE1Ny41OTcgMzYuMTY1MyAxNTkuMjYxIDMzLjY2NTUgMTYxLjM2MyAzMS41NjNDMTYzLjQ2NSAyOS40NjA1IDE2NS45NjUgMjcuNzk3NSAxNjguNzE3IDI2LjY3MDdDMTcxLjQ2OCAyNS41NDQgMTc0LjQxNyAyNC45NzYgMTc3LjM5IDI1WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="}}]);