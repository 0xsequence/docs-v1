"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[p]="string"==typeof e?e:o,a[1]=r;for(var s=2;s<l;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const l={},a="Social Login",r={unversionedId:"unity-sdk/wallet/social-login",id:"unity-sdk/wallet/social-login",title:"Social Login",description:"Sequence Wallet supports social login through multiple providers.",source:"@site/docs/09-unity-sdk/23-wallet/02-social-login.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/social-login",permalink:"/unity-sdk/wallet/social-login",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/02-social-login.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Setup",permalink:"/unity-sdk/wallet/setup"},next:{title:"Connect Wallet",permalink:"/unity-sdk/wallet/connect-wallet"}},d={},s=[{value:"WebGL",id:"webgl",level:2},{value:"All other platforms",id:"all-other-platforms",level:2},{value:"iOS",id:"ios",level:3},{value:"MacOS",id:"macos",level:3},{value:"Universal Windows Platform (UWP)",id:"universal-windows-platform-uwp",level:3},{value:"Android",id:"android",level:3},{value:"Native Windows (non-UWP)",id:"native-windows-non-uwp",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"social-login"},"Social Login"),(0,o.kt)("p",null,"Sequence Wallet supports social login through multiple providers."),(0,o.kt)("h2",{id:"webgl"},"WebGL"),(0,o.kt)("p",null,"Social login is enabled by default! Have fun!"),(0,o.kt)("h2",{id:"all-other-platforms"},"All other platforms"),(0,o.kt)("p",null,"Social login is disabled by default in the Unity SDK, but enabling it is easy."),(0,o.kt)("p",null,"Pick a URL protocol for your application's Sequence Social login support.\nIn our demo dapp, we've picked ",(0,o.kt)("inlineCode",{parentName:"p"},"demo-dapp-sequence"),".\nWe recommend something with a ",(0,o.kt)("inlineCode",{parentName:"p"},"sequence")," prefix or suffix, and that also includes a unique identifier for your game, to avoid conflicts with other games."),(0,o.kt)("p",null,"You'll need to then set up social login for your build target(s):"),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the iOS Player Settings window (menu: Edit > Project Settings > Player Settings, then select iOS)."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Other Settings"),", then scroll down to ",(0,o.kt)("inlineCode",{parentName:"li"},"Configuration"),"."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("inlineCode",{parentName:"li"},"Supported URL schemes")," section, and add 1 to the size."),(0,o.kt)("li",{parentName:"ol"},"In the new ",(0,o.kt)("inlineCode",{parentName:"li"},"Element N")," field, enter the URL scheme you've configured for Sequence Social login. For our demo dapp, that's ",(0,o.kt)("inlineCode",{parentName:"li"},"demo-dapp-sequence"))),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the Windows/Mac/Linux Player Settings window (menu: Edit > Project Settings > Player Settings, then select Windows/Mac/Linux)."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Other Settings"),", then scroll down to ",(0,o.kt)("inlineCode",{parentName:"li"},"Mac Configuration"),"."),(0,o.kt)("li",{parentName:"ol"},"Expand the ",(0,o.kt)("inlineCode",{parentName:"li"},"Supported URL schemes")," section, and add 1 to the size."),(0,o.kt)("li",{parentName:"ol"},"In the new ",(0,o.kt)("inlineCode",{parentName:"li"},"Element N")," field, enter the URL scheme you've configured for Sequence Social login. For our demo dapp, that's ",(0,o.kt)("inlineCode",{parentName:"li"},"demo-dapp-sequence"))),(0,o.kt)("h3",{id:"universal-windows-platform-uwp"},"Universal Windows Platform (UWP)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the UWP Player Settings window (menu: Edit > Project Settings > Player Settings, then select UWP)."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Publishing Settings")," > ",(0,o.kt)("inlineCode",{parentName:"li"},"Protocol"),"."),(0,o.kt)("li",{parentName:"ol"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Name")," field, enter the URL scheme you've configured for Sequence Social login. For our demo dapp, that's ",(0,o.kt)("inlineCode",{parentName:"li"},"demo-dapp-sequence"))),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Project window, browse to Assets > Plugins > Android."),(0,o.kt)("li",{parentName:"ol"},"If it doesn't already exist, create a new file and name it ",(0,o.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),"."),(0,o.kt)("li",{parentName:"ol"},"Paste the following XML into the file, or, if you already have one, add the new keys from this XML to it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'   <?xml version="1.0" encoding="utf-8"?>\n   <manifest\n     xmlns:android="http://schemas.android.com/apk/res/android"\n     xmlns:tools="http://schemas.android.com/tools"\n   >\n     <application>\n       <activity\n         android:name="com.unity3d.player.UnityPlayerActivity"\n         android:theme="@style/UnityThemeSelector"\n       >\n         <intent-filter>\n           <action android:name="android.intent.action.MAIN" />\n           <category android:name="android.intent.category.LAUNCHER" />\n         </intent-filter>\n         <intent-filter>\n           <action android:name="android.intent.action.VIEW" />\n           <category android:name="android.intent.category.DEFAULT" />\n           <category android:name="android.intent.category.BROWSABLE" />\n           <data android:scheme="demo-dapp-sequence" android:host="mobile.skyweaver.net" /> \x3c!-- here is where you\'ll subsititute your social login URL scheme, but make sure to leave host="mobile.skyweaver.net"! --\x3e\n         </intent-filter>\n       </activity>\n     </application>\n   </manifest>\n')),(0,o.kt)("h3",{id:"native-windows-non-uwp"},"Native Windows (non-UWP)"),(0,o.kt)("p",null,"Social login isn't currently supported in this build target."))}p.isMDXComponent=!0}}]);