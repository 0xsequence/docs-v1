"use strict";(self.webpackChunk_0xsequence_docs=self.webpackChunk_0xsequence_docs||[]).push([[2840],{6130:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(1527),a=i(7279);const o={},s="Authentication",d={id:"unity-waas-sdk/authentication",title:"Authentication",description:"As a WaaS SDK, authentication is extremely important. Authentication works by establishing a session signing wallet through association with an OIDC idToken. For more on how WaaS works, please see WaaS docs.",source:"@site/docs/120-unity-waas-sdk/04-authentication.mdx",sourceDirName:"120-unity-waas-sdk",slug:"/unity-waas-sdk/authentication",permalink:"/unity-waas-sdk/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/0xsequence/docs/edit/master/docs/120-unity-waas-sdk/04-authentication.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Setup",permalink:"/unity-waas-sdk/setup"},next:{title:"Write to Blockchain",permalink:"/unity-waas-sdk/write-to-blockchain"}},r={},c=[{value:"1. Email Sign In",id:"1-email-sign-in",level:2},{value:"2. Social Sign in",id:"2-social-sign-in",level:2},{value:"iOS",id:"ios",level:3},{value:"MacOS",id:"macos",level:3},{value:"PC",id:"pc",level:3},{value:"Android",id:"android",level:3},{value:"WebGL",id:"webgl",level:3},{value:"Connecting with WaaS",id:"connecting-with-waas",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsxs)(n.p,{children:["As a WaaS SDK, authentication is extremely important. Authentication works by establishing a session signing wallet through association with an ",(0,t.jsx)(n.a,{href:"https://auth0.com/docs/secure/tokens/id-tokens/id-token-structure#sample-id-token",children:"OIDC idToken"}),". For more on how WaaS works, please ",(0,t.jsx)(n.a,{href:"/waas/intro/",children:"see WaaS docs"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To implement authentication, we recommend using our ",(0,t.jsx)(n.code,{children:"LoginPanel"})," prefab. Locate this prefab under ",(0,t.jsx)(n.code,{children:"SequenceExamples > Prefabs"})," and drag it under a ",(0,t.jsx)(n.a,{href:"https://docs.unity3d.com/2020.1/Documentation/Manual/UICanvas.html",children:"Canvas"})," in your scene.\nWe recommend having the ",(0,t.jsx)(n.code,{children:"Canvas Scaler"})," component attached to your ",(0,t.jsx)(n.code,{children:"Canvas"}),' use the "Scale with Screen Size" UI Scale Mode. This will make it so that the LoginPanel (and any other UI elements under this Canvas) are scaled automatically when switching between build targets.']}),"\n",(0,t.jsxs)(n.p,{children:["Note: The ",(0,t.jsx)(n.code,{children:"LoginPanel"})," is hidden by default. You can open it with the ",(0,t.jsx)(n.code,{children:"Open"})," method and no arguments. To help with this, the ",(0,t.jsx)(n.code,{children:"LoginPanel"})," GameObject is not disabled, so feel free to use ",(0,t.jsx)(n.a,{href:"https://docs.unity3d.com/ScriptReference/Component.GetComponentInChildren.html",children:"GetComponentInChildren"}),", ",(0,t.jsx)(n.a,{href:"https://docs.unity3d.com/ScriptReference/Object.FindObjectOfType.html",children:"FindObjectOfType"}),", or similar to obtain a reference to the ",(0,t.jsx)(n.code,{children:"LoginPanel"})," MonoBehaviour."]}),"\n",(0,t.jsx)(n.p,{children:"This will provide you easy access to two authentication methods:"}),"\n",(0,t.jsx)(n.h2,{id:"1-email-sign-in",children:"1. Email Sign In"}),"\n",(0,t.jsxs)(n.p,{children:["Available on all platforms, email sign in leverages ",(0,t.jsx)(n.a,{href:"https://aws.amazon.com/cognito/",children:"Amazon Cognito"})," and provides the user with a 2FA challenge - a 6 digit code emailed to the entered address for the user to enter on the next page.\nOnce the user successfully completes the 2FA challenge, the SDK will receive an idToken in JWT format from Amazon Cognito and proceed to establish the session with WaaS API."]}),"\n",(0,t.jsx)(n.h2,{id:"2-social-sign-in",children:"2. Social Sign in"}),"\n",(0,t.jsxs)(n.p,{children:["Available on all platforms except WebGL (currently), social sign in uses ",(0,t.jsx)(n.a,{href:"https://openid.net/developers/how-connect-works/",children:"OIDC"})," with the ",(0,t.jsx)(n.a,{href:"https://auth0.com/docs/authenticate/login/oidc-conformant-authentication/oidc-adoption-implicit-flow",children:"implicit flow"})," to allow users to login via their existing Google, Discord, Facebook, or Apple accounts.\nOnce the user successfully signs in, an idToken is returned via deep link to the application.\nIn order to enable deep linking, we must register a custom URL scheme for our application. There are some platform specific requirements to set this up."]}),"\n",(0,t.jsx)("b",{children:"Note: social sign in does not work in the Editor as we cannot register a custom URL scheme."}),"\n",(0,t.jsx)(n.h3,{id:"ios",children:"iOS"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open the iOS Player Settings window (menu: Edit > Project Settings > Player Settings, then select iOS)."}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Other Settings"}),", then scroll down to ",(0,t.jsx)(n.code,{children:"Configuration"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Expand the ",(0,t.jsx)(n.code,{children:"Supported URL schemes"})," section, and add 1 to the size."]}),"\n",(0,t.jsxs)(n.li,{children:["In the new ",(0,t.jsx)(n.code,{children:"Element N"})," field, enter the URL scheme you've configured in ",(0,t.jsx)(n.code,{children:"SequenceConfig"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"iOS URL Scheme",src:i(1770).Z+"",width:"1144",height:"593"})}),"\n",(0,t.jsx)(n.h3,{id:"macos",children:"MacOS"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open the Windows/Mac/Linux Player Settings window (menu: Edit > Project Settings > Player Settings, then select Windows/Mac/Linux)."}),"\n",(0,t.jsxs)(n.li,{children:["Select ",(0,t.jsx)(n.code,{children:"Other Settings"}),", then scroll down to ",(0,t.jsx)(n.code,{children:"Mac Configuration"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Expand the ",(0,t.jsx)(n.code,{children:"Supported URL schemes"})," section, and add 1 to the size."]}),"\n",(0,t.jsxs)(n.li,{children:["In the new ",(0,t.jsx)(n.code,{children:"Element N"})," field, enter the URL scheme you've configured in ",(0,t.jsx)(n.code,{children:"SequenceConfig"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Mac URL Scheme",src:i(9861).Z+"",width:"1147",height:"599"})}),"\n",(0,t.jsx)(n.h3,{id:"pc",children:"PC"}),"\n",(0,t.jsx)(n.p,{children:"No additional steps required."}),"\n",(0,t.jsx)(n.h3,{id:"android",children:"Android"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["In the Project window, browse to ",(0,t.jsx)(n.code,{children:"Assets > Plugins > Android"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["a) Note: in Unity versions 2021.2 and up this path doesn't exist by default. Please navigate to ",(0,t.jsx)(n.code,{children:"Edit > Project Settings > Player"})," and under the Android Publishing Settings, enable ",(0,t.jsx)(n.code,{children:"Custom Main Manifest"})," in the Build section. See ",(0,t.jsx)(n.a,{href:"https://docs.unity3d.com/Manual/deep-linking-android.html",children:"https://docs.unity3d.com/Manual/deep-linking-android.html"})," for more info."]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["If it doesn't already exist, create a new file and name it ",(0,t.jsx)(n.code,{children:"AndroidManifest.xml"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Paste the following XML into the file, or, if you already have one, add the new keys from this XML to it."}),"\n",(0,t.jsxs)(n.li,{children:["Make sure to replace 'sdk-powered-by-sequence' with the Url Scheme you set in ",(0,t.jsx)(n.code,{children:"SequenceConfig"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'   <?xml version="1.0" encoding="utf-8"?>\n   <manifest\n     xmlns:android="http://schemas.android.com/apk/res/android"\n     xmlns:tools="http://schemas.android.com/tools"\n   >\n     <application>\n       <activity\n         android:name="com.unity3d.player.UnityPlayerActivity"\n         android:theme="@style/UnityThemeSelector"\n       >\n         <intent-filter>\n           <action android:name="android.intent.action.MAIN" />\n           <category android:name="android.intent.category.LAUNCHER" />\n         </intent-filter>\n         <intent-filter>\n           <action android:name="android.intent.action.VIEW" />\n           <category android:name="android.intent.category.DEFAULT" />\n           <category android:name="android.intent.category.BROWSABLE" />\n           <data android:scheme="sdk-powered-by-sequence"/> \x3c!-- substitute \'sdk-powered-by-sequence\' with the Url Scheme you set in `SequenceConfig` --\x3e\n         </intent-filter>\n       </activity>\n     </application>\n   </manifest>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["b) Note: Unity 2022 versions prior to ",(0,t.jsx)(n.code,{children:"2022.3.7f1"})," and 2023 versions prior to ",(0,t.jsx)(n.code,{children:"2023.1.7f1"}),", ",(0,t.jsx)(n.code,{children:"2023.2.0b3"}),", or ",(0,t.jsx)(n.code,{children:"2023.3.0a1"})," contain a bug with Android deep-linking. Please use this XML instead."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<manifest\n        xmlns:android="http://schemas.android.com/apk/res/android"\n        xmlns:tools="http://schemas.android.com/tools"\n>\n    <application>\n        <activity\n                android:name="com.unity3d.player.UnityPlayerActivity"\n                android:theme="@style/UnityThemeSelector"\n                android:exported="true">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n            <meta-data android:name="unityplayer.UnityActivity" android:value="true" />\n            <intent-filter>\n                <action android:name="android.intent.action.VIEW" />\n                <category android:name="android.intent.category.DEFAULT" />\n                <category android:name="android.intent.category.BROWSABLE" />\n                <data android:scheme="sdk-powered-by-sequence"/> \x3c!-- substitute \'sdk-powered-by-sequence\' with the Url Scheme you set in `SequenceConfig` --\x3e\n            </intent-filter>\n        </activity>\n    </application>\n</manifest>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["i.e. add ",(0,t.jsx)(n.code,{children:'<meta-data android:name="unityplayer.UnityActivity" android:value="true" />'})," after your first ",(0,t.jsx)(n.code,{children:"intent-filter"}),". Please see ",(0,t.jsx)(n.a,{href:"https://forum.unity.com/threads/deep-linking-in-unity-2022-the-app-is-restarted.1447300/",children:"https://forum.unity.com/threads/deep-linking-in-unity-2022-the-app-is-restarted.1447300/"})," for more info."]}),"\n",(0,t.jsx)(n.h3,{id:"webgl",children:"WebGL"}),"\n",(0,t.jsx)(n.p,{children:"Coming soon."}),"\n",(0,t.jsx)(n.h2,{id:"connecting-with-waas",children:"Connecting with WaaS"}),"\n",(0,t.jsxs)(n.p,{children:["Once we've received the ",(0,t.jsx)(n.code,{children:"idToken"})," from either email login or social sign in, the SDK will handle connecting with WaaS servers for you. If you're curious how this is done, please see ",(0,t.jsxs)(n.a,{href:"https://github.com/0xsequence/sequence-unity/blob/master/Assets/SequenceSDK/WaaS/WaaSLogin.cs#L88",children:[(0,t.jsx)(n.code,{children:"ConnectToWaaS"})," in ",(0,t.jsx)(n.code,{children:"WaaSLogin.cs"})]}),".\nYou'll want to subscribe to the ",(0,t.jsx)(n.code,{children:"WaaSWallet.OnWaaSWalletCreated"})," event. This can be done with the following code snippet:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"WaaSWallet.OnWaaSWalletCreated += OnWaaSWalletCreatedHandler;\n\npublic void OnWaaSWalletCreatedHandler(WaaSWallet wallet) {\n  // Do something\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"OnWaaSWalletCreatedHandler"})," is a function accepting a ",(0,t.jsx)(n.code,{children:"WaaSWallet"})," as it's only parameter. If you're unfamiliar with working with events in Unity, check out this great ",(0,t.jsx)(n.a,{href:"https://www.reddit.com/r/gamedev/comments/u3hz2v/how_to_use_events_a_supersimple_unity_example/",children:"Reddit post"}),"!"]}),"\n",(0,t.jsx)(n.p,{children:"Congratulations! You've just connected your user with WaaS, creating them a new account and non-custodial smart contract wallet as needed."})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1770:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/unity-url-scheme-ios-af767556d99f00d1004e4f0a9938ce40.png"},9861:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/unity-url-scheme-mac-36b788df7dc1552022ce72df3e3bb9ea.png"},7279:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>s});var t=i(959);const a={},o=t.createContext(a);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);