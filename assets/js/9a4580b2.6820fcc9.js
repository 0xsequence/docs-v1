"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[7095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,y=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(y,r(r({ref:t},p),{},{components:n})):i.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={},r="Social Login",l={unversionedId:"unity-sdk/wallet/social-login",id:"unity-sdk/wallet/social-login",title:"Social Login",description:"Sequence Wallet supports social login through multiple providers.",source:"@site/docs/09-unity-sdk/23-wallet/02-social-login.mdx",sourceDirName:"09-unity-sdk/23-wallet",slug:"/unity-sdk/wallet/social-login",permalink:"/unity-sdk/wallet/social-login",draft:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/09-unity-sdk/23-wallet/02-social-login.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Setup",permalink:"/unity-sdk/wallet/setup"},next:{title:"Connect Wallet",permalink:"/unity-sdk/wallet/connect-wallet"}},d={},s=[{value:"WebGL",id:"webgl",level:2},{value:"All other platforms",id:"all-other-platforms",level:2},{value:"iOS",id:"ios",level:3},{value:"MacOS",id:"macos",level:3},{value:"Universal Windows Platform (UWP)",id:"universal-windows-platform-uwp",level:3},{value:"Android",id:"android",level:3},{value:"Native Windows (non-UWP)",id:"native-windows-non-uwp",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"social-login"},"Social Login"),(0,a.kt)("p",null,"Sequence Wallet supports social login through multiple providers."),(0,a.kt)("h2",{id:"webgl"},"WebGL"),(0,a.kt)("p",null,"Social login is enabled by default! Have fun!"),(0,a.kt)("h2",{id:"all-other-platforms"},"All other platforms"),(0,a.kt)("p",null,"Social login is disabled by default in the Unity SDK, but enabling it is easy."),(0,a.kt)("p",null,"Pick a URL protocol for your application's Sequence Social login support.\nIn our demo dapp, we've picked ",(0,a.kt)("inlineCode",{parentName:"p"},"demo-dapp-sequence"),".\nWe recommend something with a ",(0,a.kt)("inlineCode",{parentName:"p"},"sequence")," prefix or suffix, and that also includes a unique identifier for your game, to avoid conflicts with other games."),(0,a.kt)("p",null,"You'll need to then set up social login for your build target(s):"),(0,a.kt)("h3",{id:"ios"},"iOS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the iOS Player Settings window (menu: Edit > Project Settings > Player Settings, then select iOS)."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Other Settings"),", then scroll down to ",(0,a.kt)("inlineCode",{parentName:"li"},"Configuration"),"."),(0,a.kt)("li",{parentName:"ol"},"Expand the ",(0,a.kt)("inlineCode",{parentName:"li"},"Supported URL schemes")," section, and add 1 to the size."),(0,a.kt)("li",{parentName:"ol"},"In the new ",(0,a.kt)("inlineCode",{parentName:"li"},"Element N")," field, enter the URL scheme you've configured for Sequence Social login. For our demo dapp, that's ",(0,a.kt)("inlineCode",{parentName:"li"},"demo-dapp-sequence"))),(0,a.kt)("h3",{id:"macos"},"MacOS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the Windows/Mac/Linux Player Settings window (menu: Edit > Project Settings > Player Settings, then select Windows/Mac/Linux)."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Other Settings"),", then scroll down to ",(0,a.kt)("inlineCode",{parentName:"li"},"Mac Configuration"),"."),(0,a.kt)("li",{parentName:"ol"},"Expand the ",(0,a.kt)("inlineCode",{parentName:"li"},"Supported URL schemes")," section, and add 1 to the size."),(0,a.kt)("li",{parentName:"ol"},"In the new ",(0,a.kt)("inlineCode",{parentName:"li"},"Element N")," field, enter the URL scheme you've configured for Sequence Social login. For our demo dapp, that's ",(0,a.kt)("inlineCode",{parentName:"li"},"demo-dapp-sequence"))),(0,a.kt)("h3",{id:"universal-windows-platform-uwp"},"Universal Windows Platform (UWP)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the UWP Player Settings window (menu: Edit > Project Settings > Player Settings, then select UWP)."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Publishing Settings")," > ",(0,a.kt)("inlineCode",{parentName:"li"},"Protocol"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"Name")," field, enter the URL scheme you've configured for Sequence Social login. For our demo dapp, that's ",(0,a.kt)("inlineCode",{parentName:"li"},"demo-dapp-sequence"))),(0,a.kt)("h3",{id:"android"},"Android"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the Project window, browse to Assets > Plugins > Android."),(0,a.kt)("p",{parentName:"li"},"a) Note: in Unity versions 2021.2 and up this path doesn't exist by default. Please navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Edit > Project Settings > Player")," and under the Android Publishing Settings, enable ",(0,a.kt)("inlineCode",{parentName:"p"},"Custom Main Manifest")," in the Build section. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.unity3d.com/Manual/deep-linking-android.html"},"https://docs.unity3d.com/Manual/deep-linking-android.html")," for more info.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If it doesn't already exist, create a new file and name it ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the following XML into the file, or, if you already have one, add the new keys from this XML to it."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'   <?xml version="1.0" encoding="utf-8"?>\n   <manifest\n     xmlns:android="http://schemas.android.com/apk/res/android"\n     xmlns:tools="http://schemas.android.com/tools"\n   >\n     <application>\n       <activity\n         android:name="com.unity3d.player.UnityPlayerActivity"\n         android:theme="@style/UnityThemeSelector"\n       >\n         <intent-filter>\n           <action android:name="android.intent.action.MAIN" />\n           <category android:name="android.intent.category.LAUNCHER" />\n         </intent-filter>\n         <intent-filter>\n           <action android:name="android.intent.action.VIEW" />\n           <category android:name="android.intent.category.DEFAULT" />\n           <category android:name="android.intent.category.BROWSABLE" />\n           <data android:scheme="demo-dapp-sequence" android:host="mobile.skyweaver.net" /> \x3c!-- here is where you\'ll subsititute your social login URL scheme, but make sure to leave host="mobile.skyweaver.net"! --\x3e\n         </intent-filter>\n       </activity>\n     </application>\n   </manifest>\n')),(0,a.kt)("p",null,"  a) Note: Unity 2022 versions prior to ",(0,a.kt)("inlineCode",{parentName:"p"},"2022.3.7f1")," and 2023 versions prior to ",(0,a.kt)("inlineCode",{parentName:"p"},"2023.1.7f1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"2023.2.0b3"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"2023.3.0a1")," contain a bug with Android deep-linking. Please use this XML instead."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest\n        xmlns:android="http://schemas.android.com/apk/res/android"\n        xmlns:tools="http://schemas.android.com/tools"\n>\n    <application>\n        <activity\n                android:name="com.unity3d.player.UnityPlayerActivity"\n                android:theme="@style/UnityThemeSelector"\n                android:exported="true">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n            <meta-data android:name="unityplayer.UnityActivity" android:value="true" />\n            <intent-filter>\n                <action android:name="android.intent.action.VIEW" />\n                <category android:name="android.intent.category.DEFAULT" />\n                <category android:name="android.intent.category.BROWSABLE" />\n                <data android:scheme="demo-dapp-sequence" android:host="mobile.skyweaver.net" /> \x3c!-- here is where you\'ll subsititute your social login URL scheme, but make sure to leave host="mobile.skyweaver.net"! --\x3e\n            </intent-filter>\n        </activity>\n    </application>\n</manifest>\n')),(0,a.kt)("p",null,"  i.e. add ",(0,a.kt)("inlineCode",{parentName:"p"},'<meta-data android:name="unityplayer.UnityActivity" android:value="true" />')," after your first ",(0,a.kt)("inlineCode",{parentName:"p"},"intent-filter"),". Please see ",(0,a.kt)("a",{parentName:"p",href:"https://forum.unity.com/threads/deep-linking-in-unity-2022-the-app-is-restarted.1447300/"},"https://forum.unity.com/threads/deep-linking-in-unity-2022-the-app-is-restarted.1447300/")," for more info."),(0,a.kt)("h3",{id:"native-windows-non-uwp"},"Native Windows (non-UWP)"),(0,a.kt)("p",null,"No additional setup is required for Native Windows."))}c.isMDXComponent=!0}}]);