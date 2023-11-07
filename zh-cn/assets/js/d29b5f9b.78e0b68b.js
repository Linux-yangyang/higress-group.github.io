"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[9410],{3905:(e,a,n)=>{n.d(a,{Zo:()=>g,kt:()=>k});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),p=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},g=function(e){var a=p(e.components);return t.createElement(o.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=l,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||s;return n?t.createElement(k,r(r({ref:a},g),{},{components:n})):t.createElement(k,r({ref:a},g))}));function k(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var s=n.length,r=new Array(s);r[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<s;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4235:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var t=n(7462),l=(n(7294),n(3905));const s={title:"Higress \u5f00\u6e90\u4e00\u5468\u5e74\uff1a\u65b0\u7248\u672c\uff0c\u65b0\u6807\u51c6\uff0c\u65b0\u5de5\u5177\uff0c\u65b0\u5f81\u7a0b",keywords:["higress","ingress","Gateway API"],description:"\u652f\u6301\u4e86 Gateway API \u6807\u51c6\uff0c\u8fd8\u6709\u5168\u65b0\u7684\u8fd0\u7ef4/\u5f00\u53d1\u5de5\u5177\uff0c\u4ee5\u53ca\u6211\u4eec\u65b0\u7684\u5f00\u6e90\u5f81\u7a0b",author:"\u6f84\u6f6d",date:new Date("2023-11-04T00:00:00.000Z")},r=void 0,i={permalink:"/zh-cn/blog/release-1.3",editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/release-1.3.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/release-1.3.md",title:"Higress \u5f00\u6e90\u4e00\u5468\u5e74\uff1a\u65b0\u7248\u672c\uff0c\u65b0\u6807\u51c6\uff0c\u65b0\u5de5\u5177\uff0c\u65b0\u5f81\u7a0b",description:"\u652f\u6301\u4e86 Gateway API \u6807\u51c6\uff0c\u8fd8\u6709\u5168\u65b0\u7684\u8fd0\u7ef4/\u5f00\u53d1\u5de5\u5177\uff0c\u4ee5\u53ca\u6211\u4eec\u65b0\u7684\u5f00\u6e90\u5f81\u7a0b",date:"2023-11-04T00:00:00.000Z",formattedDate:"2023\u5e7411\u67084\u65e5",tags:[],readingTime:18.225,hasTruncateMarker:!1,authors:[{name:"\u6f84\u6f6d"}],frontMatter:{title:"Higress \u5f00\u6e90\u4e00\u5468\u5e74\uff1a\u65b0\u7248\u672c\uff0c\u65b0\u6807\u51c6\uff0c\u65b0\u5de5\u5177\uff0c\u65b0\u5f81\u7a0b",keywords:["higress","ingress","Gateway API"],description:"\u652f\u6301\u4e86 Gateway API \u6807\u51c6\uff0c\u8fd8\u6709\u5168\u65b0\u7684\u8fd0\u7ef4/\u5f00\u53d1\u5de5\u5177\uff0c\u4ee5\u53ca\u6211\u4eec\u65b0\u7684\u5f00\u6e90\u5f81\u7a0b",author:"\u6f84\u6f6d",date:"2023-11-04T00:00:00.000Z"},nextItem:{title:"\u901a\u8fc7 Higress Wasm \u63d2\u4ef6 3 \u500d\u6027\u80fd\u5b9e\u73b0 Spring-cloud-gateway \u529f\u80fd",permalink:"/zh-cn/blog/plugin-transformer"}},o={authorsImageUrls:[void 0]},p=[{value:"\u5386\u7a0b\u56de\u987e",id:"\u5386\u7a0b\u56de\u987e",level:2},{value:"\u65b0\u7248\u672c\uff1a\u529f\u80fd\u901f\u89c8",id:"\u65b0\u7248\u672c\u529f\u80fd\u901f\u89c8",level:2},{value:"\u65b0\u6807\u51c6\uff1a\u652f\u6301\u6700\u65b0\u7248 Gateway API",id:"\u65b0\u6807\u51c6\u652f\u6301\u6700\u65b0\u7248-gateway-api",level:2},{value:"\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u80fd\u529b",id:"\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u80fd\u529b",level:3},{value:"Ingress API \u548c Gateway API \u4e4b\u95f4\u5982\u4f55\u9009\u62e9",id:"ingress-api-\u548c-gateway-api-\u4e4b\u95f4\u5982\u4f55\u9009\u62e9",level:3},{value:"\u65b0\u5de5\u5177\uff1aAll in one \u7684 hgctl",id:"\u65b0\u5de5\u5177all-in-one-\u7684-hgctl",level:2},{value:"\u66ff\u4ee3 Helm \u7528\u4e8e\u5b89\u88c5/\u5347\u7ea7",id:"\u66ff\u4ee3-helm-\u7528\u4e8e\u5b89\u88c5\u5347\u7ea7",level:3},{value:"WASM \u63d2\u4ef6\u5f00\u53d1\u5de5\u5177\u5305",id:"wasm-\u63d2\u4ef6\u5f00\u53d1\u5de5\u5177\u5305",level:3},{value:"\u5176\u4ed6\u529f\u80fd",id:"\u5176\u4ed6\u529f\u80fd",level:3},{value:"\u65b0\u5f81\u7a0b\uff1aAPI Gateway",id:"\u65b0\u5f81\u7a0bapi-gateway",level:2},{value:"\u793e\u533a\u81f4\u8c22",id:"\u793e\u533a\u81f4\u8c22",level:2},{value:"Maintainer\uff1a\u8463\u827a\u8343(CH3CHO)",id:"maintainer\u8463\u827a\u8343ch3cho",level:3},{value:"Approver\uff1a\u5434\u65b0\u519b(Jun)\uff0c\u5218\u8bad\u707c(Xunzhuo)",id:"approver\u5434\u65b0\u519bjun\u5218\u8bad\u707cxunzhuo",level:3},{value:"Member\uff1a\u97e6\u946b(WeixinX)\uff0c\u5c01\u5b87\u817e(Fkbqf)",id:"member\u97e6\u946bweixinx\u5c01\u5b87\u817efkbqf",level:3}],g={toc:p},u="wrapper";function c(e){let{components:a,...n}=e;return(0,l.kt)(u,(0,t.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5386\u7a0b\u56de\u987e"},"\u5386\u7a0b\u56de\u987e"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/johnlanni/higress-group.github.io/assets/6763318/b5f3ee1b-d53a-4fbb-8d4a-82427ebdfe40",alt:"image"})),(0,l.kt)("p",null,"Higress \u5f00\u6e90\u4e00\u5e74\u65f6\u95f4\uff0c\u4e00\u5171\u53d1\u5e03\u4e86 18 \u4e2a release \u7248\u672c\uff0c\u6536\u83b7\u4e86 40 \u591a\u4f4d\u793e\u533a\u8d21\u732e\u8005\u548c 1800+ star\uff0c\u4e0a\u56fe\u662f\u8fd9\u4e00\u5e74\u8fc7\u6765\u8fbe\u6210\u7684\u4e00\u4e9b\u5173\u952e\u7684\u91cc\u7a0b\u7891\u3002"),(0,l.kt)("p",null,"\u524d\u9762\u534a\u5e74\u901a\u8fc7\u96c6\u6210\u5f00\u6e90\u751f\u6001\uff0c\u6253\u78e8\u5f00\u6e90\u7248\u672c\u7a33\u5b9a\u6027\uff0c\u5e76\u5728\u53d1\u5e03 1.0 GA \u7248\u672c\u540e\uff0c\u793e\u533a\u53c8\u9a6c\u4e0d\u505c\u8e44\u53d1\u5e03\u4e86 1.1 \u548c 1.2 \u4e24\u4e2a\u91cd\u8981\u7248\u672c\uff0c\u5b9e\u73b0\u4e86\u975e K8s \u90e8\u7f72\uff0cKnative \u9002\u914d\u7b49\u6838\u5fc3\u80fd\u529b\u3002"),(0,l.kt)("p",null,"Higress 1.3 \u7248\u672c\u5df2\u7ecf\u6b63\u5f0f\u53d1\u5e03\uff0c\u9664\u4e86\u589e\u52a0\u7684\u65b0\u529f\u80fd\uff0c\u5df2\u6709\u80fd\u529b\u4e5f\u5728\u5927\u91cf\u793e\u533a\u7528\u6237\u53cd\u9988\u7684\u8fc7\u7a0b\u4e2d\u4e0d\u65ad\u5b8c\u5584\u6539\u8fdb\uff0c\u8fd9\u4e2a\u7248\u672c\u540c\u65f6\u6807\u5fd7\u7740 1.x \u8fdb\u5165\u53ef\u4ee5\u5927\u89c4\u6a21\u751f\u4ea7\u4f7f\u7528\u7684\u72b6\u6001\u3002"),(0,l.kt)("h2",{id:"\u65b0\u7248\u672c\u529f\u80fd\u901f\u89c8"},"\u65b0\u7248\u672c\uff1a\u529f\u80fd\u901f\u89c8"),(0,l.kt)("p",null,"\u81ea\u53d1\u5e03 1.2 \u7248\u672c\u8fc7\u53bb\u4e86\u4e00\u4e2a\u591a\u6708\u65f6\u95f4\uff0c1.3 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff0c\u5e26\u6765\u4e24\u4e2a\u5168\u65b0\u80fd\u529b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b0\u6807\u51c6\uff1a\u652f\u6301\u6700\u65b0\u7248\u672c Gateway API \u6807\u51c6\uff0c\u5e76\u4e14\u5177\u5907\u4ece Ingress \u5e73\u6ed1\u6e10\u8fdb\u6f14\u8fdb\uff0c\u4ee5\u53ca\u5bf9\u63a5\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u673a\u5236\u7684\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},'\u65b0\u5de5\u5177\uff1a\u6b63\u5f0f release \u4e86 hgctl (Higress Crontroller) \u8fd9\u4e2a "All in one" \u7684\u65b0\u5de5\u5177\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u66ff\u4ee3 Helm \u5b9e\u73b0\u66f4\u7b80\u6613\u7684\u5b89\u88c5\uff0c\u8fd8\u63d0\u4f9b\u4e86 WASM \u63d2\u4ef6\u5f00\u53d1\u5de5\u5177\u5305\uff0c\u4ee5\u53ca\u7f51\u5173\u914d\u7f6e\u68c0\u67e5\u7b49\u4e30\u5bcc\u529f\u80fd')),(0,l.kt)("p",null,"\u9664\u4e86\u8fd9\u4e24\u4e2a\u6838\u5fc3\u529f\u80fd\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u5b9e\u7528\u529f\u80fd\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e86 Higress Admin Java SDK\uff0c\u53ef\u4ee5\u7edf\u4e00\u5bf9\u63a5 K8s \u548c\u975e K8s \u73af\u5883\uff0c\u7ba1\u7406\u57df\u540d/\u8def\u7531\u7b49\u914d\u7f6e"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4f9b\u4e86 OIDC \u63d2\u4ef6\uff0c\u652f\u6301\u5bf9\u63a5 Keycloak/Okta \u7b49\u7b2c\u4e09\u65b9\u8eab\u4efd\u8ba4\u8bc1\u7cfb\u7edf"),(0,l.kt)("li",{parentName:"ol"},"Higress Console \u7684\u6613\u7528\u6027\u548c\u5b89\u5168\u6027\u63d0\u5347\uff0c\u4e0d\u518d\u901a\u8fc7\u8def\u7531\u66b4\u9732\uff0c\u652f\u6301\u754c\u9762\u521d\u59cb\u5316/\u4fee\u6539\u5bc6\u7801")),(0,l.kt)("p",null,"\u4e0e\u6b64\u540c\u65f6\uff0cHigress \u5f00\u6e90\u793e\u533a\u5df2\u7ecf\u5f00\u59cb\u51c6\u5907\u8e0f\u4e0a\u4e00\u6bb5\u5168\u65b0\u7684\u5f00\u6e90\u5f81\u7a0b..."),(0,l.kt)("h2",{id:"\u65b0\u6807\u51c6\u652f\u6301\u6700\u65b0\u7248-gateway-api"},"\u65b0\u6807\u51c6\uff1a\u652f\u6301\u6700\u65b0\u7248 Gateway API"),(0,l.kt)("p",null,"Gateway API \u5728 11 \u6708 1 \u65e5\u6b63\u5f0f\u53d1\u5e03\u4e86 1.0.0 \u7248\u672c\uff0c\u5176\u4e2d GatewayClass, Gateway, HTTPRoute \u8fd9\u4e09\u4e2a API\u6b63\u5f0f\u5ba3\u5e03 GA\uff0c\u53d1\u5e03\u4e86 v1 \u7248\u672c\uff1agateway.networking.k8s.io/v1\u3002"),(0,l.kt)("p",null,"\u76ee\u524d Higress \u5df2\u7ecf\u53ef\u4ee5\u652f\u6301\u8fd9\u4e9b\u6700\u65b0\u7248\u672c\u7684 API \u914d\u7f6e\uff0c\u53ea\u9700\u5728\u5b89\u88c5/\u5347\u7ea7 Higress \u65f6\u914d\u7f6e\u5f00\u542f Gateway API\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Helm \uff1a\u901a\u8fc7\u53c2\u6570 ",(0,l.kt)("inlineCode",{parentName:"li"},"--set global.enableGatewayAPI=true")),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Hgctl \uff1a\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u6216\u8005 install.yaml \u4e2d\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"global.enableGatewayAPI=true"))),(0,l.kt)("p",null,"\u9996\u5148\u521b\u5efa GatewayClass \u8d44\u6e90\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  apiVersion: gateway.networking.k8s.io/v1\n  kind: GatewayClass\n  metadata:\n    name: higress-gateway\n  spec:\n    controllerName: "higress.io/gateway-controller"\n')),(0,l.kt)("p",null,"\u63a5\u7740\u5728\u5b89\u88c5 Higress \u7684\u547d\u540d\u7a7a\u95f4\u4e0b\uff0c\u521b\u5efa Gateway \u8d44\u6e90\uff0c\u901a\u8fc7 gatewayClassName \u5173\u8054\u4e0a\u9762\u521b\u5efa\u7684 GatewayClass \u8d44\u6e90\uff0c\u6307\u5b9a\u7531 Higress \u6765\u7ba1\u7406\u6b64 Gateway \u914d\u7f6e\uff0c\u4e0b\u9762\u4e3a\u57df\u540d\u540c\u65f6\u914d\u7f6e\u4e86 HTTP \u548c HTTPS \u5165\u53e3\uff0c\u5e76\u4e3a HTTPS \u5165\u53e3\u914d\u7f6e\u4e86\u8bc1\u4e66\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  apiVersion: gateway.networking.k8s.io/v1\n  kind: Gateway\n  metadata:\n    name: higress-gateway\n    namespace: higress-system\n  spec:\n    gatewayClassName: higress-gateway\n    listeners:\n    - name: foobar\n      hostname: "*.foobar.com"\n      port: 80\n      protocol: HTTP\n      allowedRoutes:\n        namespaces:\n          from: All\n    - name: foobar-https\n      hostname: "*.foobar.com"\n      port: 443\n      protocol: HTTPS\n        allowedRoutes:\n        namespaces:\n          from: All\n      tls:\n        certificateRefs:\n        - kind: Secret\n          name: wildcard-foobar-com\n        mode: Terminate        \n')),(0,l.kt)("p",null,"\u56e0\u4e3a\u4e0a\u9762 Gateway \u901a\u8fc7 allowedRoutes \u914d\u7f6e\u4e86\u5141\u8bb8\u6240\u6709\u547d\u540d\u7a7a\u95f4\u7684\u8def\u7531\u6765\u5173\u8054\uff0c\u6240\u4ee5\u8fd9\u91cc\u5728 default \u547d\u540d\u7a7a\u95f4\u4e0b\u521b\u5efa HTTPRoute\uff0c\u5173\u8054\u4e0a\u9762\u521b\u5efa\u7684 Gateway\uff0c\u5373\u53ef\u5b9a\u4e49\u57df\u540d\u4e0b\u7684\u5177\u4f53\u8def\u7531\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  apiVersion: gateway.networking.k8s.io/v1\n  kind: HTTPRoute\n  metadata:\n    name: foobar\n    namespace: default\n  spec:\n    parentRefs:\n    - name: higress-gateway\n      namespace: higress-system\n    hostnames: ["www.foobar.com"]\n    rules:\n    - matches:\n      - path:\n          type: PathPrefix\n          value: /foo\n      backendRefs:\n      - name: foo-service\n        port: 5678\n')),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f Gateway API \u7684\u4e00\u4e2a\u7b80\u5355\u7528\u6cd5\u793a\u4f8b\uff0cGateway API \u8fd8\u6709\u5f88\u591a\u529f\u80fd\u548c\u73a9\u6cd5\uff0c\u540e\u9762 Higress \u516c\u4f17\u53f7/\u535a\u5ba2\u4f1a\u51fa\u4e00\u4e2a\u7cfb\u5217\u8fdb\u884c\u7cfb\u7edf\u5206\u4eab\u548c\u4ecb\u7ecd\u3002"),(0,l.kt)("p",null,"\u6b22\u8fce\u7ed3\u5408",(0,l.kt)("a",{parentName:"p",href:"https://gateway-api.sigs.k8s.io/reference/spec/"},"\u5b98\u65b9 API \u6587\u6863"),"\uff0c\u5e76\u4f7f\u7528 hgctl \uff08\u83b7\u53d6\u65b9\u5f0f\u89c1\u4e0b\u6587\uff09\u5728\u81ea\u5df1\u7535\u8111\u4e0a\u5b89\u88c5\u4e00\u4e2a local-k8s \u6a21\u5f0f\u7684 Higress\uff0c\u6765\u5f00\u542f\u5bf9\u8fd9\u4e00\u65b0\u6807\u51c6\u7684\u63a2\u7d22\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  # \u4e00\u952e\u5b89\u88c5, \u4ea4\u4e92\u5f0f\u547d\u4ee4\u9009\u62e9\u7b2c\u4e00\u79cd\u5b89\u88c5\u6a21\u5f0f local-k8s\uff0c\u5c06\u9ed8\u8ba4\u5b89\u88c5 Gateway API CRD\n  hgctl install\n")),(0,l.kt)("h3",{id:"\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u80fd\u529b"},"\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u80fd\u529b"),(0,l.kt)("p",null,"\u5728 Ingress API \u6807\u51c6\u4e0b\uff0cHigress \u5bf9\u63a5\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u80fd\u529b\u662f\u72ec\u6811\u4e00\u5e1c\u7684\uff0c\u5728 Gateway API \u6807\u51c6\u4e0b\uff0c Higress \u4ecd\u5c31\u4fdd\u6301\u4e86\u8fd9\u4e00\u80fd\u529b\u4f18\u52bf\uff1a"),(0,l.kt)("p",null,"\u9996\u5148\u901a\u8fc7 McpBridge \u8d44\u6e90\uff0c\u53ef\u4ee5\u5b9a\u4e49\u591a\u79cd\u670d\u52a1\u53d1\u73b0\u673a\u5236\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  apiVersion: networking.higress.io/v1\n  kind: McpBridge\n  metadata:\n    name: default\n    namespace: higress-system\n  spec:\n    registries:\n    - domain: 127.0.0.1\n      nacosGroups:\n      - DEFAULT_GROUP\n      name: my-local-nacos\n      port: 8848\n      type: nacos2\n    - domain: 127.0.0.1\n      name: my-local-zk\n      port: 2181\n      type: zookeeper      \n    - domain: 127.0.0.1\n      name: my-local-eureka\n      port: 8761\n      type: eureka\n    - domain: 127.0.0.1\n      consulDatacenter: dc1      \n      name: my-local-consul\n      port: 8500\n      type: consul\n")),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a HTTPRoute \u8d44\u6e90\uff0c\u53ef\u4ee5\u540c\u65f6\u5bf9\u63a5 K8s \u670d\u52a1\uff0c\u548c\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\uff0c\u5e76\u5b9e\u73b0\u7070\u5ea6\u8def\u7531\u80fd\u529b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  apiVersion: gateway.networking.k8s.io/v1\n  kind: HTTPRoute\n  metadata:\n    name: http\n    namespace: default\n  spec:\n    parentRefs:\n    - name: higress-gateway\n      namespace: higress-system\n    rules:\n    - matches:\n      - path:\n          type: PathPrefix\n          value: /\n      backendRefs:\n      - name: service-provider.DEFAULT-GROUP.public.nacos\n        group: networking.higress.io\n        port: 8080\n        weight: 90\n      - name: foo-service\n        port: 5678\n        weight: 10\n")),(0,l.kt)("p",null,"\u548c K8s \u670d\u52a1\u4e0d\u540c\u7684\u662f\uff0c\u8fd9\u91cc group \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"networking.higress.io")," \u7684\u670d\u52a1\u5e76\u4e0d\u9700\u8981\u63d0\u524d\u521b\u5efa CRD \u8d44\u6e90\uff0c\u8fd9\u66f4\u7b26\u5408\u4f20\u7edf\u5fae\u670d\u52a1\u7528\u6237\u7684\u4e60\u60ef\uff0c\u5373\u670d\u52a1\u6a21\u578b\u4e0d\u9700\u8981\u63d0\u524d\u521b\u5efa\uff0c\u662f\u901a\u8fc7\u670d\u52a1\u8282\u70b9\u6ce8\u518c\u81ea\u52a8\u751f\u6210\u3002"),(0,l.kt)("h3",{id:"ingress-api-\u548c-gateway-api-\u4e4b\u95f4\u5982\u4f55\u9009\u62e9"},"Ingress API \u548c Gateway API \u4e4b\u95f4\u5982\u4f55\u9009\u62e9"),(0,l.kt)("p",null,"\u6709\u4e86 Gateway API\uff0c\u662f\u5426\u5e94\u8be5\u7acb\u5373\u629b\u5f03 Ingress API\uff1f"),(0,l.kt)("p",null,"\u53ea\u6709\u6700\u5408\u9002\u7684\uff0c\u6ca1\u6709\u6700\u597d\u7684\u3002Gateway API \u867d\u7136\u4e3a\u66f4\u591a\u7f51\u5173\u80fd\u529b\u505a\u4e86\u6807\u51c6\u5316\uff0c\u4f46 CRD \u7684\u79cd\u7c7b\u548c\u590d\u6742\u5ea6\u4e5f\u589e\u52a0\u4e86\uff0c\u76f8\u6bd4\u4e4b\u4e0b\u5bf9\u4e8e\u5927\u90e8\u5206\u7b80\u5355\u7528\u4f8b\u573a\u666f\uff0cIngress API \u66f4\u52a0\u7b80\u5355\u6613\u7528\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4ee5\u4e0b\u573a\u666f\uff0c\u91c7\u7528 Gateway API \u66ff\u4ee3 Ingress API \u4f1a\u5e26\u6765\u5f88\u5927\u5e2e\u52a9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5927\u578b\u56e2\u961f\u5212\u5206\u4e86 SRE \u89d2\u8272\u548c\u4e1a\u52a1\u7814\u53d1\u89d2\u8272\uff0c\u7531 SRE \u901a\u8fc7 Gateway \u8d44\u6e90\u7edf\u4e00\u7ba1\u7406\u7ad9\u70b9\u57df\u540d\u548c\u8bc1\u4e66\uff0c\u7531\u4e1a\u52a1\u7814\u53d1\u901a\u8fc7 HTTPRoute \u8d44\u6e90\u7ba1\u7406\u4e1a\u52a1\u8def\u7531\uff0c\u5b9e\u73b0\u804c\u8d23\u5212\u5206\uff0c\u6743\u9650\u6536\u655b"),(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7684\u8def\u7531\u548c Service \u6709\u4e0d\u5728\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u501f\u52a9 ReferenceGrant \u8d44\u6e90\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u5927\u91cf\u8bc1\u4e66\u9700\u8981\u96c6\u4e2d\u5f0f\u7ba1\u7406\uff0c\u4e0d\u5e0c\u671b\u5c06\u8bc1\u4e66 Secret \u540c\u6b65\u5230 Ingress \u6240\u5728\u547d\u540d\u7a7a\u95f4\uff0c\u5e26\u6765\u5b89\u5168\u98ce\u9669")),(0,l.kt)("p",null,"Gateway API \u7684\u53e6\u4e00\u4e2a\u597d\u5904\u662f\u5bf9\u4e8e\u66f4\u591a\u529f\u80fd\u7684\u6807\u51c6\u5316\u5b9a\u4e49\uff0c\u6211\u4eec\u5efa\u8bae\u9047\u5230\u5b9e\u9645\u9700\u8981\u518d\u8f6c\u6362\u5230\u8fd9\u4e2a\u65b0\u7684\u6807\u51c6\uff0c\u800c\u4e0d\u5fc5\u76f2\u76ee\u8ddf\u968f\u3002"),(0,l.kt)("p",null,"Higress \u652f\u6301 Gateway API \u548c Ingress API \u6df7\u5408\u4f7f\u7528\uff0cGateway API \u4e0b\u7684\u57df\u540d\u8def\u7531\u5c06\u6bd4 Ingress API \u4f18\u5148\u5339\u914d\uff0c\u548c Ingress \u76f8\u540c\u8d44\u6e90\u540d\u79f0\u7684 HTTPRoute \u8fd8\u4f1a\u7ee7\u627f WASM \u63d2\u4ef6\u914d\u7f6e\uff0c\u8fd9\u6837\u7528\u6237\u53ef\u4ee5\u6309\u9700\u91c7\u7528 Gateway API\uff0c\u5e73\u6ed1\u5730\u5b8c\u6210\u4ece Ingress API \u5411 Gateway API \u7684\u6f14\u8fdb\uff0c\u65e0\u9700\u7126\u8651 API \u6807\u51c6\u5347\u7ea7\u8fc7\u7a0b\u4e2d\u4ea7\u751f\u4e1a\u52a1\u635f\u5931\u3002"),(0,l.kt)("h2",{id:"\u65b0\u5de5\u5177all-in-one-\u7684-hgctl"},"\u65b0\u5de5\u5177\uff1aAll in one \u7684 hgctl"),(0,l.kt)("h3",{id:"\u66ff\u4ee3-helm-\u7528\u4e8e\u5b89\u88c5\u5347\u7ea7"},"\u66ff\u4ee3 Helm \u7528\u4e8e\u5b89\u88c5/\u5347\u7ea7"),(0,l.kt)("p",null,"\u5728 K8s \u4e0b\u7528 Helm \u5b89\u88c5/\u5347\u7ea7\u7ec4\u4ef6\u5f88\u65b9\u4fbf\uff0c\u4f46\u5728 Higress \u7684\u573a\u666f\u4e0b\u4ecd\u7136\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u652f\u6301\u975e K8s \u573a\u666f\u4e0b\u7684\u5b89\u88c5/\u5347\u7ea7"),(0,l.kt)("li",{parentName:"ol"},"Higress \u6709\u5f88\u591a\u5b89\u88c5\u53c2\u6570\uff0c\u8fdb\u884c\u5347\u7ea7\u7b49\u64cd\u4f5c\u65f6\u4e0d\u597d\u7ef4\u62a4\uff0c\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"li"},"reuse-values")," \u6709\u4e00\u4e9b\u526f\u4f5c\u7528\uff0c\u4e14\u5bb9\u6613\u8bef\u64cd\u4f5c"),(0,l.kt)("li",{parentName:"ol"},"\u65e0\u6cd5\u7ba1\u7406 CRD \u8ddf\u968f\u7248\u672c\u66f4\u65b0\uff0c\u9700\u8981\u624b\u52a8\u66f4\u65b0")),(0,l.kt)("p",null,"Higress \u501f\u9274\u4e86 istio \u7684 istioctl\uff0c\u63d0\u4f9b\u4e86 hgctl \u8fd9\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\u89e3\u51b3\u4e86\u4e0a\u8ff0\u95ee\u9898\uff0c\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u5b89\u88c5 hgctl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  # \u4e0b\u8f7d\u6700\u65b0\u7248 Hgctl\uff1a\n  curl -Ls https://raw.githubusercontent.com/alibaba/higress/main/tools/hack/get-hgctl.sh | VERSION=latest bash\n")),(0,l.kt)("p",null,"hgctl \u96c6\u6210\u4e86\u4e09\u79cd Higress \u5b89\u88c5\u6a21\u5f0f\uff0c\u5e76\u7edf\u4e00\u4e86\u5347\u7ea7/\u8fd0\u7ef4\u64cd\u4f5c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u672c\u5730 K8s \u73af\u5883\uff08\u4f8b\u5982kind/k3s\uff09\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ol"},"\u6b63\u5f0f K8s \u73af\u5883\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u4f9d\u8d56 K8s \u7684\u7eaf Docker \u73af\u5883\u6a21\u5f0f")),(0,l.kt)("p",null,"\u76f4\u63a5\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"hgctl install")," \u547d\u4ee4\u5373\u53ef\u9009\u62e9\u4efb\u610f\u6a21\u5f0f\u8fdb\u884c\u5b89\u88c5"),(0,l.kt)("p",null,"\u5b89\u88c5\u914d\u7f6e\u6587\u4ef6\u5c06\u5b58\u81f3 ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.hgctl/profiles/install.yaml")," \u76ee\u5f55\u4e0b\uff0c\u67e5\u770b\u8be5\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  charts:\n    higress:\n      name: higress\n      # \u5b89\u88c5\u6587\u4ef6\u7684 helm repo \u5730\u5740\n      url: https://higress.io/helm-charts\n      # \u6267\u884c hgctl upgrade \u65f6\u5c06\u81ea\u52a8\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\n      version: latest\n  console:\n    # \u5f00\u542f\u53ef\u89c2\u6d4b\u7ec4\u4ef6\n    o11YEnabled: true\n    # \u63a7\u5236\u53f0\u5b9e\u4f8b\u6570\n    replicas: 1\n  controller:\n    # \u63a7\u5236\u9762\u7ec4\u4ef6\u5b9e\u4f8b\u6570\n    replicas: 1\n  gateway:\n    # \u6570\u636e\u9762\u7ec4\u4ef6\u5b9e\u4f8b\u6570\n    replicas: 1\n  global:\n    # \u5f00\u542f Gateway API\n    enableGatewayAPI: true\n    # \u5f00\u542f Istio API\n    enableIstioAPI: true\n    # \u8bbe\u7f6e\u76d1\u542c\u7684 ingress class\n    ingressClass: higress\n    # \u5b89\u88c5\u6a21\u5f0f\n    install: local-k8s\n    # \u5b89\u88c5\u547d\u540d\u7a7a\u95f4\n    namespace: higress-system\n  # \u914d\u7f6e\u4f20\u9012\u7ed9 helm \u7684 values \u53c2\u6570 \n  values: {}\n  profile: local-k8s\n")),(0,l.kt)("p",null,"\u4fee\u6539\u4e0a\u9762\u6587\u4ef6\u7684\u5185\u5bb9\u540e\uff0c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"hgctl upgarde"),"\u5373\u53ef\u5b9e\u73b0\u53c2\u6570\u53d8\u66f4\u751f\u6548\uff0c\u5982\u679c\u53ea\u60f3\u4fee\u6539\u53c2\u6570\uff0c\u4e0d\u60f3\u89e6\u53d1\u7248\u672c\u5347\u7ea7\uff0c\u53ef\u4ee5\u5c06 version \u53c2\u6570\u56fa\u5b9a\u4e3a\u5f53\u524d\u7248\u672c\u3002"),(0,l.kt)("h3",{id:"wasm-\u63d2\u4ef6\u5f00\u53d1\u5de5\u5177\u5305"},"WASM \u63d2\u4ef6\u5f00\u53d1\u5de5\u5177\u5305"),(0,l.kt)("p",null,"\u4e3a\u4e86\u6807\u51c6\u5316\u5e76\u7b80\u5316 WASM \u63d2\u4ef6\u7684\u5f00\u53d1/\u7f16\u8bd1/\u6d4b\u8bd5/\u53d1\u5e03\uff0cHigress \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"hgctl plugin")," \u8fd9\u4e00\u5b50\u547d\u4ee4\uff0c\u4f7f\u7528\u65b9\u5f0f\u4e3a\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hgctl plugin init"),": \u521d\u59cb\u5316 Golang WASM \u63d2\u4ef6\u9879\u76ee\uff0c\u5305\u62ec\u4e09\u4e2a\u6587\u4ef6\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7528\u6237\u7f16\u5199 WASM \u63d2\u4ef6\u903b\u8f91\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hgctl plugin build --output-type files"),": \u6784\u5efa WASM \u63d2\u4ef6\uff0c\u5728\u672c\u5730\u8f93\u51fa\u6784\u5efa\u4ea7\u7269\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hgctl plugin test: \u4f7f\u7528 docker compose")," \u5728\u672c\u5730\u6d4b\u8bd5 WASM \u63d2\u4ef6\uff0c\u5982\u9700\u4fee\u6539\u63d2\u4ef6\u903b\u8f91\uff0c\u5219\u8fd4\u56de\u7b2c 2 \u6b65\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hgctl plugin build --output-type image"),": \u6784\u5efa WASM \u63d2\u4ef6\u4f5c\u4e3a OCI \u955c\u50cf\u4e0a\u4f20\u81f3\u955c\u50cf\u4ed3\u5e93\uff1b"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hgctl plugin install"),": \u5b89\u88c5 WASM \u63d2\u4ef6\uff0c\u53ef\u4ee5\u901a\u8fc7\u672c\u5730\u7684 yaml \u6587\u4ef6\u6216\u63d2\u4ef6\u9879\u76ee\u8fdb\u884c\u5b89\u88c5\u3002")),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u82e5\u9700\u8981\u67e5\u770b\u5df2\u5b89\u88c5\u7684\u63d2\u4ef6\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"hgctl plugin ls"),"\uff1b\u82e5\u9700\u8981\u64cd\u4f5c\u63d2\u4ef6\u914d\u7f6e\uff0c\u5219\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"hgctl plugin config")),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd9\u4e2a\u5de5\u5177\uff0c\u53ef\u4ee5\u5728\u6784\u5efa WASM \u63d2\u4ef6\u7684\u540c\u65f6\uff0c\u6839\u636e\u914d\u7f6e\u4ee3\u7801\u81ea\u52a8\u751f\u6210\u63d2\u4ef6\u7684\u914d\u7f6e\u8bf4\u660e\u6587\u6863\uff0c\u4ee5\u53ca\u5305\u542b\u63d2\u4ef6\u914d\u7f6e\u7ea6\u675f\u7684\u5143\u4fe1\u606f\u6587\u4ef6\uff0c\u8fd9\u4e9b\u5185\u5bb9\u90fd\u5c06\u548c WASM \u6587\u4ef6\u4e00\u8d77\u653e\u5165 OCI \u955c\u50cf\u5236\u54c1\u4e2d\uff0c\u901a\u8fc7\u955c\u50cf\u65b9\u5f0f\u8fdb\u884c\u7248\u672c\u7ba1\u7406\u548c\u5206\u53d1\u3002\u8fd9\u4e00\u673a\u5236\u662f\u540e\u7eed Higress \u5efa\u8bbe WASM \u63d2\u4ef6\u5e02\u573a\u7684\u57fa\u77f3\u3002"),(0,l.kt)("h3",{id:"\u5176\u4ed6\u529f\u80fd"},"\u5176\u4ed6\u529f\u80fd"),(0,l.kt)("p",null,"\u53e6\u5916\u4ecb\u7ecd\u4e24\u4e2a\u5b9e\u7528\u7684\u5b50\u547d\u4ee4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hgctl dashboard"),": \u7528\u4e8e\u547c\u51fa UI \u754c\u9762\uff0c\u4f8b\u5982 Higress \u63a7\u5236\u53f0\uff0c\u76f4\u63a5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"hgctl dashboard console")," \u5373\u53ef\u6253\u5f00")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  $ hgctl dashboard\n  Access to Higress web UIs\n  \n  Usage:\n    hgctl dashboard [flags]\n    hgctl dashboard [command]\n  \n  Aliases:\n    dashboard, dash, d\n  \n  Available Commands:\n    console     Open Console web UI\n    controller  Open Controller debug web UI\n    envoy       Open Envoy admin web UI\n    grafana     Open Grafana web UI\n    prometheus  Open Prometheus web UI\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"hgctl gateway-config"),": \u7528\u4e8e\u67e5\u770b\u6570\u636e\u9762\u7684 envoy \u914d\u7f6e\uff0c\u53ef\u4ee5\u5feb\u901f\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u6b63\u786e\u4e0b\u53d1")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"  $ hgctl gateway-config\n  Retrieve information about Higress Gateway Configuration.\n  \n  Usage:\n    hgctl gateway-config [command]\n  \n  Aliases:\n    gateway-config, gc\n  \n  Available Commands:\n    all         Retrieves all Envoy xDS resources from the specified Higress Gateway\n    bootstrap   Retrieves bootstrap Envoy xDS resources from the specified Higress Gateway\n    cluster     Retrieves cluster Envoy xDS resources from the specified Higress Gateway\n    endpoint    Retrieves endpoint Envoy xDS resources from the specified Higress Gateway\n    listener    Retrieves listener Envoy xDS resources from the specified Higress Gateway\n    route       Retrieves route Envoy xDS resources from the specified Higress Gateway\n")),(0,l.kt)("h2",{id:"\u65b0\u5f81\u7a0bapi-gateway"},"\u65b0\u5f81\u7a0b\uff1aAPI Gateway"),(0,l.kt)("p",null,"\u4e0a\u9762\u8bf4\u4e86 Gateway API\uff0c\u63a5\u7740\u6211\u4eec\u804a\u804a API Gateway \ud83d\ude04\uff0cAPI Gateway \u6709\u4e24\u5c42\u5b9a\u4e49\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u72ed\u4e49\u4e0a\uff1a\u6ee1\u8db3\u7edf\u4e00\u63a5\u5165\uff0c\u5c06\u8def\u7531\u8f6c\u53d1\u5230\u4e0d\u540c\u670d\u52a1\u7684\u8fd0\u7ef4\u9700\u6c42\uff0c\u5373\u53ef\u79f0\u4e3a API Gateway\uff1b\u8fd9\u91cc API \u7684\u5b9a\u4e49\u662f\u670d\u52a1\u7684\u8def\u7531"),(0,l.kt)("li",{parentName:"ol"},"\u5e7f\u4e49\u4e0a\uff1a\u5728\u5b9e\u73b0\u670d\u52a1\u8f6c\u53d1\u7684\u57fa\u7840\u4e0a\uff0c\u9700\u8981\u8bc6\u522b\u5e26\u4e1a\u52a1\u8bed\u4e49\u7684\u63a5\u53e3\uff0c\u5c06\u4e1a\u52a1\u80fd\u529b API \u5316\u7ba1\u7406\uff0c\u7edf\u4e00\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff1b\u8fd9\u91cc API \u7684\u5b9a\u4e49\u662f\u4e1a\u52a1\u529f\u80fd\u63a5\u53e3")),(0,l.kt)("p",null,"Higress \u5df2\u7ecf\u5b9e\u73b0\u4e86\u72ed\u4e49\u4e0a\u7684 API Gateway \u80fd\u529b\uff0c\u5e76\u4e14\u662f\u57fa\u4e8e Gateway/Ingress API \u8fd9\u4e9b\u901a\u7528\u8def\u7531\u6807\u51c6\u6765\u5b9e\u73b0\u7684\u3002\u800c\u4e0e\u670d\u52a1\u8def\u7531\u6807\u51c6\u4e0d\u540c\uff0c\u4e1a\u52a1\u529f\u80fd\u63a5\u53e3\u7684\u6807\u51c6\u662f Swagger/OAS3/RPC IDL \u7b49\uff0c\u505a\u4e3a API Gateway \u9700\u8981\u63d0\u4f9b\u4ee5\u4e0b\u5173\u952e\u80fd\u529b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u652f\u6301\u901a\u8fc7\u4e0a\u4f20 Swagger \u7b49\u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\u7684\u65b9\u5f0f\u5bfc\u5165 API"),(0,l.kt)("li",{parentName:"ol"},"\u5bf9 API \u5b9e\u73b0\u7cbe\u7ec6\u5316\u7b56\u7565\u7ba1\u7406\uff0c\u4f8b\u5982\u6839\u636e\u51fa\u5165\u53c2\u5b9a\u4e49\u5b9e\u73b0\u53c2\u6570\u6620\u5c04/\u8f6c\u6362"),(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u73b0\u4ee5 API \u65b9\u5f0f\u5f00\u653e\u80fd\u529b\u65f6\u7684\u8ba4\u8bc1/\u9274\u6743\uff0c\u8c03\u7528\u91cf\u63a7\u5236/\u5ba1\u8ba1\u80fd\u529b")),(0,l.kt)("p",null,"Higress \u65b0\u7684\u5f00\u6e90\u5f81\u7a0b\u5c06\u5411\u5177\u5907\u4e1a\u52a1 API \u7ba1\u7406\u80fd\u529b\u7684 API Gateway \u5f62\u6001\u8fdb\u53d1\u3002\u5728\u5b9e\u73b0\u65b9\u5f0f\u4e0a\uff0c\u6211\u4eec\u5c06\u57fa\u4e8e WASM \u63d2\u4ef6\u53bb\u6269\u5c55\u8fd9\u4e00\u90e8\u5206\u80fd\u529b\uff0c\u8fd9\u53ef\u4ee5\u964d\u4f4e\u6211\u4eec\u5bf9\u4e0a\u6e38 Envoy \u793e\u533a\u7684\u4fb5\u5165\u6027\u6539\u9020\uff0c\u540c\u65f6\u8ba9\u5bf9 API \u7684\u7cbe\u7ec6\u5316\u7b56\u7565\u7ba1\u7406\u5177\u5907\u81ea\u5b9a\u4e49\u6269\u5c55\u80fd\u529b\u3002\n\u76ee\u524d\u793e\u533a\u5df2\u7ecf\u6709\u4e00\u4e9b Proposal \uff0c\u6b22\u8fce\u4e86\u89e3\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/issues/535"},"https://github.com/alibaba/higress/issues/535")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/alibaba/higress/issues/601"},"https://github.com/alibaba/higress/issues/601")),(0,l.kt)("p",null,"\u6b22\u8fce\u6709\u66f4\u591a\u5c0f\u4f19\u4f34\u52a0\u5165\uff0c\u548c\u6211\u4eec\u4e00\u8d77\u8e0f\u4e0a\u65b0\u7684\u5f81\u7a0b\uff0c\u6709\u5174\u8da3\u7684\u5c0f\u4f19\u4f34\u53ef\u4ee5\u8054\u7cfb\u6211(\u5fae\u4fe1\uff1anomadao)\uff0c\u52a0\u5165 API Gateway \u7684 SIG\uff08\u5174\u8da3\u5c0f\u7ec4\uff09\u3002"),(0,l.kt)("h2",{id:"\u793e\u533a\u81f4\u8c22"},"\u793e\u533a\u81f4\u8c22"),(0,l.kt)("p",null,"\u9996\u5148\u8981\u611f\u8c22 Envoy \u548c Istio \u793e\u533a\uff0cHigress \u7ad9\u5728\u8fd9\u4e24\u4e2a\u8f6f\u4ef6\u7684\u80a9\u8180\u4e0a\u6f14\u8fdb\u80fd\u529b\uff0c\u5f97\u4ee5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 WASM \u673a\u5236\u6269\u5c55 Envoy \u6570\u636e\u9762\u80fd\u529b\uff0c\u6301\u7eed\u4e0d\u65ad\u5730\u6269\u5927\u7f51\u5173\u63d2\u4ef6\u751f\u6001"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4e13\u6ce8\u5728\u7f51\u5173\u9886\u57df\uff0c\u5728 Istio \u4f18\u79c0\u7684\u63a7\u5236\u9762\u57fa\u7840\u4e0a\uff0c\u8fdb\u4e00\u6b65\u505a\u62bd\u8c61\u548c\u7b80\u5316\uff0c\u964d\u4f4e\u4e0a\u624b\u548c\u8fd0\u7ef4\u95e8\u69db")),(0,l.kt)("p",null,"\u8fd8\u8981\u611f\u8c22\u53c2\u4e0e Higress \u5f00\u6e90\u8d21\u732e\u7684\u5f00\u53d1\u8005\u4eec\uff0c\u8fd9\u91cc\u91cd\u70b9\u611f\u8c22\u4e0b\u4e3a 1.3 \u7248\u672c\u505a\u51fa\u6838\u5fc3\u8d21\u732e\u7684\u5f00\u53d1\u8005\uff1a"),(0,l.kt)("h3",{id:"maintainer\u8463\u827a\u8343ch3cho"},"Maintainer\uff1a\u8463\u827a\u8343(CH3CHO)"),(0,l.kt)("p",null,"\u4eba\u5982\u5176\u540d\u201c\u827a\u5168\u201d\uff0c\u5341\u516b\u822c\u6b66\u827a\u6837\u6837\u7cbe\u901a\uff0c\u4e0d\u7ba1\u662f\u63a7\u5236\u53f0 TS \u524d\u7aef\uff0cJava \u540e\u53f0\uff0c\u8fd8\u662f Higress \u7684 GO \u63a7\u5236\u9762\uff0c\u4ee5\u53ca Standalone \u5b89\u88c5 Shell \u811a\u672c\u548c\u5404\u79cd CICD \u6d41\u7a0b\uff0c\u901a\u901a\u624b\u5230\u64d2\u6765\u3002"),(0,l.kt)("p",null,"\u5728 1.3 \u7248\u672c\u4e2d\u4e3b\u8981\u8d1f\u8d23\u4e86 Higress \u652f\u6301 Gateway API \u7684\u80fd\u529b\uff0c\u4ee5\u53ca\u5b9e\u73b0\u4e86 Higress Admin Java SDK \u53ef\u4ee5\u63d0\u4f9b\u5916\u90e8\u96c6\u6210\u7528\u4e8e\u7ba1\u7406 Higress \u914d\u7f6e\uff0c\u5e76\u6539\u8fdb\u4e86 Higress Console \u7684\u5b89\u5168\u6027\u548c\u6613\u7528\u6027\u3002"),(0,l.kt)("p",null,"\u9664\u4e86\u5f00\u53d1\u8d21\u732e\u4e4b\u5916\uff0c\u4ed6\u8fd8\u5bf9\u793e\u533a\u7528\u6237\u5145\u6ee1\u5584\u610f\u548c\u70ed\u60c5\uff0c\u65e0\u8bba\u662f\u5728 GitHub \u7684 Issues/Discussions\uff0c\u6216\u662f\u793e\u533a\u4ea4\u6d41\u5fae\u4fe1/\u9489\u9489\u7fa4\uff0c\u968f\u5904\u53ef\u89c1\u4ed6\u5e2e\u52a9\u7528\u6237\u89e3\u51b3\u95ee\u9898\u7684\u8eab\u5f71\u3002"),(0,l.kt)("h3",{id:"approver\u5434\u65b0\u519bjun\u5218\u8bad\u707cxunzhuo"},"Approver\uff1a\u5434\u65b0\u519b(Jun)\uff0c\u5218\u8bad\u707c(Xunzhuo)"),(0,l.kt)("p",null,"\u4e24\u4f4d\u90fd\u5728\u591a\u4e2a Higress \u7248\u672c\u4e3a\u793e\u533a\u505a\u51fa\u4e86\u8d21\u732e\uff0cJun \u7684\u4e3b\u8981\u8d21\u732e\u6709\uff1a\u5728\u591a\u6ce8\u518c\u4e2d\u5fc3\u7684\u670d\u52a1\u53d1\u73b0\u652f\u6301\uff0c\u5168\u5c40\u914d\u7f6e\u7ba1\u7406\u67b6\u6784\u62bd\u8c61\uff1bXunzhuo \u7684\u4e3b\u8981\u8d21\u732e\u6709\uff1aHigress E2E \u6d4b\u8bd5\u6d41\u7a0b\u7684\u642d\u5efa\uff0cGitHub CI \u6d41\u7a0b\u7684\u5efa\u8bbe\uff0chgctl \u7684\u6574\u4f53\u67b6\u6784\u8bbe\u8ba1\u3002"),(0,l.kt)("p",null,"\u5728 1.3 \u7248\u672c\u4e2d\u4e8c\u4f4d\u534f\u4f5c\u5b8c\u6210\u4e86 hgctl \u7684\u591a\u6837\u5316\u80fd\u529b\u5efa\u8bbe\uff0c\u5e2e\u52a9 Higress \u7684\u6613\u7528\u6027\u53c8\u4e0a\u5230\u4e86\u4e00\u4e2a\u65b0\u7684\u53f0\u9636\u3002"),(0,l.kt)("p",null,"\u4e24\u4f4d\u540c\u5b66\u4f5c\u4e3a Approver \u79ef\u6781\u53c2\u4e0e\u793e\u533a\u8d21\u732e PR \u7684 Review\uff0c\u76ee\u524d\u5206\u522b\u662f Higress Tools SIG \u548c Higress GatewayAPI SIG \u7684\u9886\u5bfc\u8005\u3002"),(0,l.kt)("h3",{id:"member\u97e6\u946bweixinx\u5c01\u5b87\u817efkbqf"},"Member\uff1a\u97e6\u946b(WeixinX)\uff0c\u5c01\u5b87\u817e(Fkbqf)"),(0,l.kt)("p",null,"\u4e24\u4f4d\u90fd\u662f\u901a\u8fc7\u4e2d\u79d1\u9662\u5f00\u6e90\u4e4b\u590f\uff08OSPP 2023\uff09\u9879\u76ee\u5f00\u59cb\u53c2\u4e0e Higress \u8d21\u732e\uff0cWeixinX \u662f\u4e00\u540d\u7814\u4e8c\u7684\u5b66\u751f\uff0cFkbqf \u662f\u4e00\u540d\u5927\u4e09\u7684\u5b66\u751f\u3002"),(0,l.kt)("p",null,"\u5728 1.3 \u7248\u672c\u4e2d\uff0cWeixinX \u5b9e\u73b0\u4e86 hgctl plugin \u5b50\u547d\u4ee4\u7684\u80fd\u529b\uff0c\u540c\u65f6\u8d21\u732e\u4e86 Go \u5b9e\u73b0\u7684 Basic Auth \u63d2\u4ef6\uff0c\u4ee5\u53ca\u5bf9\u6807 Spring Cloud Gateway \u8bf7\u6c42\u54cd\u5e94\u8f6c\u6362\u80fd\u529b\u7684 Transformer \u63d2\u4ef6\uff1bFkbqf \u5219\u5b9e\u73b0\u4e86\u66f4\u4e3a\u590d\u6742\u7684 OIDC \u63d2\u4ef6\uff0c\u5177\u5907\u6bd4 Envoy \u81ea\u5e26 OAuth2 Filter \u66f4\u5f3a\u5927\u7684\u529f\u80fd\uff0c\u5e76\u4e14\u5177\u5907\u826f\u597d\u7684\u6269\u5c55\u6027\u3002"),(0,l.kt)("p",null,"\u4e24\u4f4d\u540c\u5b66\u9664\u4e86\u5f00\u53d1\u8d21\u732e\u4ee5\u5916\uff0c\u7528\u8bfe\u4f59\u65f6\u95f4\u79ef\u6781\u53c2\u4e0e Higress \u793e\u533a\u5468\u4f1a\uff0c\u4e00\u8d77\u63a2\u8ba8\u548c\u5b66\u4e60\u6280\u672f\uff0c\u4e0d\u4ea6\u4e50\u4e4e\u3002\u80fd\u591f\u6210\u4e3a\u4f60\u4eec\u4eba\u751f\u5b66\u4e1a\u8fdb\u9636\u8def\u4e0a\u7684\u9636\u68af\uff0cHigress \u8363\u5e78\u4e4b\u81f3\u3002"),(0,l.kt)("p",null,"Higress \u793e\u533a\u540e\u7eed\u6574\u4f53\u7684 Roadmap \u89c4\u5212\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/johnlanni/higress-group.github.io/assets/6763318/f646d9ad-d2d0-4496-b164-2884851e9e0c",alt:"image"})),(0,l.kt)("p",null,"\u6b22\u8fce\u66f4\u591a\u5c0f\u4f19\u4f34\u4e00\u8d77\u52a0\u5165\u6211\u4eec\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/johnlanni/higress-group.github.io/assets/6763318/d8e09712-0b3b-4c5a-b478-c84da139cf2f",alt:"higress-comm"})))}c.isMDXComponent=!0}}]);