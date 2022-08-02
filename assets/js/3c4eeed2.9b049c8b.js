"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,f=m["".concat(a,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2097:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),o=r(9960);const i=function(e){const t=e.cards;return n.createElement("div",{className:"container",style:{padding:5}},n.createElement("div",{className:"row is-multiline"},t.map(((e,t)=>n.createElement("div",{className:"col col--6",key:t,style:{padding:5}},n.createElement(o.Z,{className:"card",to:e.route,style:{height:"100%",textAlign:"center"}},n.createElement("div",{className:"card__body"},n.createElement("h4",null,e.title),n.createElement("p",null,e.description))))))))}},1781:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),i=r(2097);const c={title:"Introduction",sidebar_position:1},s=void 0,a={unversionedId:"misc/writing-docs/introduction",id:"misc/writing-docs/introduction",title:"Introduction",description:"This is documentaiton is for reference on how to write documentation for this website.",source:"@site/docs/misc/writing-docs/01-introduction.mdx",sourceDirName:"misc/writing-docs",slug:"/misc/writing-docs/introduction",permalink:"/misc/writing-docs/introduction",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/misc/writing-docs/01-introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"sidebar",previous:{title:"Browser Extension Wallet",permalink:"/platforms/browser-extension"},next:{title:"File Structure",permalink:"/misc/writing-docs/file-structure"}},l={},u=[{title:"File Structure",description:"A summary of the Basic File Structure and how Docusaurus works.",route:"/misc/writing-docs/file-structure"},{title:"MDX Syntax Features",description:"A summary of the basic syntax of Markdown + MDX features. (includes creating tabs, tables, hidden content) ",route:"/misc/writing-docs/introduction"}],d=[{value:"Basics",id:"basics",level:2},{value:"Components of docs",id:"components-of-docs",level:2}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is documentaiton is for reference on how to write documentation for this website."),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("p",null,"The /docs folder contains ",(0,o.kt)("inlineCode",{parentName:"p"},".mdx")," files, these are markdown + jsx files... which means you can simply use\nmarkdown + also add jsx to it..."),(0,o.kt)("h2",{id:"components-of-docs"},"Components of docs"),(0,o.kt)("br",null),(0,o.kt)(i.Z,{cards:u,mdxType:"Cards"}))}p.isMDXComponent=!0}}]);