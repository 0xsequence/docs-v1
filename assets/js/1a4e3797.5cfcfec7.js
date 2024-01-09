"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7920],{479:(e,t,r)=>{r.r(t),r.d(t,{default:()=>F});var s=r(959),a=r(7730),n=r(2367),c=r(863),l=r(8634),o=r(3204);const u=["zero","one","two","few","many","other"];function h(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=m();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}var p=r(1626),g=r(8903),x=r(1662);const f=function(){const e=(0,g.k6)(),t=(0,g.TH)(),{siteConfig:{baseUrl:r}}=(0,a.Z)(),s=x.Z.canUseDOM?new URLSearchParams(t.search):null,n=s?.get("q")||"",c=s?.get("ctx")||"",l=s?.get("version")||"",o=e=>{const r=new URLSearchParams(t.search);return e?r.set("q",e):r.delete("q"),r};return{searchValue:n,searchContext:c,searchVersion:l,updateSearchPath:t=>{const r=o(t);e.replace({search:r.toString()})},updateSearchContext:r=>{const s=new URLSearchParams(t.search);s.set("ctx",r),e.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${r}search?${t.toString()}`}}};var y=r(1242),j=r(7181),S=r(5830),C=r(1078),I=r(8169),v=r(7385),w=r(5860),R=r(9952);const P={searchContextInput:"searchContextInput_QDur",searchQueryInput:"searchQueryInput_B5a7",searchResultItem:"searchResultItem_qUxG",searchResultItemPath:"searchResultItemPath_E0W8",searchResultItemSummary:"searchResultItemSummary_AVLM",searchQueryColumn:"searchQueryColumn_qyqG",searchContextColumn:"searchContextColumn_JGuC"};var _=r(1527);function b(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=d(),{searchValue:r,searchContext:n,searchVersion:l,updateSearchPath:u,updateSearchContext:h}=f(),[i,m]=(0,s.useState)(r),[g,x]=(0,s.useState)(),[S,C]=(0,s.useState)(),I=`${e}${l}`,w=(0,s.useMemo)((()=>i?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:i}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[i]);(0,s.useEffect)((()=>{u(i),g&&(i?g(i,(e=>{C(e)})):C(void 0))}),[i,g]);const b=(0,s.useCallback)((e=>{m(e.target.value)}),[]);return(0,s.useEffect)((()=>{r&&r!==i&&m(r)}),[r]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,y.w)(I,n);x((()=>(0,j.v)(e,t,100)))}()}),[n,I]),(0,_.jsxs)(s.Fragment,{children:[(0,_.jsxs)(c.Z,{children:[(0,_.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,_.jsx)("title",{children:w})]}),(0,_.jsxs)("div",{className:"container margin-vert--lg",children:[(0,_.jsx)("h1",{children:w}),(0,_.jsxs)("div",{className:"row",children:[(0,_.jsx)("div",{className:(0,p.Z)("col",{[P.searchQueryColumn]:Array.isArray(R.Kc),"col--9":Array.isArray(R.Kc),"col--12":!Array.isArray(R.Kc)}),children:(0,_.jsx)("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:b,value:i,autoComplete:"off",autoFocus:!0})}),Array.isArray(R.Kc)?(0,_.jsx)("div",{className:(0,p.Z)("col","col--3","padding-left--none",P.searchContextColumn),children:(0,_.jsxs)("select",{name:"search-context",className:P.searchContextInput,id:"context-selector",value:n,onChange:e=>h(e.target.value),children:[(0,_.jsx)("option",{value:"",children:R.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),R.Kc.map((e=>(0,_.jsx)("option",{value:e,children:e},e)))]})}):null]}),!g&&i&&(0,_.jsx)("div",{children:(0,_.jsx)(v.Z,{})}),S&&(S.length>0?(0,_.jsx)("p",{children:t(S.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:S.length}))}):(0,_.jsx)("p",{children:(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,_.jsx)("section",{children:S&&S.map((e=>(0,_.jsx)(q,{searchResult:e},e.document.i)))})]})]})}function q(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(R.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,_.jsxs)("article",{className:P.searchResultItem,children:[(0,_.jsx)("h2",{children:(0,_.jsx)(l.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,S.C)(h,a):(0,C.o)(h,(0,I.m)(n,"t"),a,100)}})}),u.length>0&&(0,_.jsx)("p",{className:P.searchResultItemPath,children:(0,w.e)(u)}),o&&(0,_.jsx)("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,C.o)(t.t,(0,I.m)(n,"t"),a,100)}})]})}const $=function(){return(0,_.jsx)(n.Z,{children:(0,_.jsx)(b,{})})};function F(e){return(0,_.jsx)("div",{className:"search-page-wrapper",children:(0,_.jsx)($,{...e})})}}}]);