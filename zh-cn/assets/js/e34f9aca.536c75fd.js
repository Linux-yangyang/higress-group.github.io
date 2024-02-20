"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[5813],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return t?r.createElement(g,s(s({ref:n},d),{},{components:t})):r.createElement(g,s({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),i=(t(7294),t(3905));const a={title:"\u5982\u4f55\u4f7f\u7528 Higress Admin SDK \u8fdb\u884c\u914d\u7f6e\u7ba1\u7406",keywords:["Higress","SDK","Config"],description:"\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Higress Admin SDK \u6765\u7ba1\u7406 Higress \u7684\u670d\u52a1\u6765\u6e90\u3001\u670d\u52a1\u8def\u7531\u7b49\u5404\u9879\u914d\u7f6e\u3002",author:"CH3CHO",date:new Date("2024-02-08T00:00:00.000Z")},s="1. \u80cc\u666f",o={permalink:"/zh-cn/blog/admin-sdk-intro",editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/admin-sdk-intro.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/admin-sdk-intro.md",title:"\u5982\u4f55\u4f7f\u7528 Higress Admin SDK \u8fdb\u884c\u914d\u7f6e\u7ba1\u7406",description:"\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Higress Admin SDK \u6765\u7ba1\u7406 Higress \u7684\u670d\u52a1\u6765\u6e90\u3001\u670d\u52a1\u8def\u7531\u7b49\u5404\u9879\u914d\u7f6e\u3002",date:"2024-02-08T00:00:00.000Z",formattedDate:"2024\u5e742\u67088\u65e5",tags:[],readingTime:4.765,hasTruncateMarker:!1,authors:[{name:"CH3CHO"}],frontMatter:{title:"\u5982\u4f55\u4f7f\u7528 Higress Admin SDK \u8fdb\u884c\u914d\u7f6e\u7ba1\u7406",keywords:["Higress","SDK","Config"],description:"\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Higress Admin SDK \u6765\u7ba1\u7406 Higress \u7684\u670d\u52a1\u6765\u6e90\u3001\u670d\u52a1\u8def\u7531\u7b49\u5404\u9879\u914d\u7f6e\u3002",author:"CH3CHO",date:"2024-02-08T00:00:00.000Z"},nextItem:{title:"higress-core\u6e90\u7801\u5206\u6790",permalink:"/zh-cn/blog/higress-code"}},l={authorsImageUrls:[void 0]},p=[{value:"3.1 \u73af\u5883\u51c6\u5907",id:"31-\u73af\u5883\u51c6\u5907",level:2},{value:"3.2 \u4ee3\u7801\u7f16\u5199",id:"32-\u4ee3\u7801\u7f16\u5199",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u914d\u7f6e\u4f9d\u8d56",id:"\u7b2c\u4e00\u6b65\u914d\u7f6e\u4f9d\u8d56",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa Higress SDK \u5b9e\u4f8b",id:"\u7b2c\u4e8c\u6b65\u521b\u5efa-higress-sdk-\u5b9e\u4f8b",level:3},{value:"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u57df\u540d",id:"\u7b2c\u4e8c\u6b65\u521b\u5efa\u57df\u540d",level:3},{value:"\u7b2c\u4e09\u6b65\uff1a\u521b\u5efa\u8def\u7531",id:"\u7b2c\u4e09\u6b65\u521b\u5efa\u8def\u7531",level:3},{value:"3.3 \u6d4b\u8bd5\u9a8c\u8bc1",id:"33-\u6d4b\u8bd5\u9a8c\u8bc1",level:2},{value:"4. \u603b\u7ed3",id:"4-\u603b\u7ed3",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,i.kt)(c,(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Higress \u4e00\u4e2a\u9075\u5faa\u5f00\u6e90 Ingress/Gateway API \u6807\u51c6\uff0c\u63d0\u4f9b\u6d41\u91cf\u8c03\u5ea6\u3001\u670d\u52a1\u6cbb\u7406\u3001\u5b89\u5168\u9632\u62a4\u4e09\u5408\u4e00\u7684\u9ad8\u96c6\u6210\u3001\u6613\u4f7f\u7528\u3001\u6613\u6269\u5c55\u3001\u70ed\u66f4\u65b0\u7684\u4e0b\u4e00\u4ee3\u4e91\u539f\u751f\u7f51\u5173\u3002\u800c\u914d\u7f6e\u7ba1\u7406\u7f51\u5173\u7684\u8fd0\u7ef4\u5de5\u4f5c\u4e2d\u626e\u6f14\u8005\u91cd\u8981\u7684\u89d2\u8272\u3002\u5982\u4f55\u8ba9\u914d\u7f6e\u7ba1\u7406\u81ea\u52a8\u5316\uff0c\u5c24\u5176\u662f\u4e0e\u5176\u4ed6\u7684\u8fd0\u7ef4\u7cfb\u7edf\u8fdb\u884c\u5bf9\u63a5\uff0c\u5c31\u6210\u4e3a\u4e86\u4e00\u4e2a\u975e\u5e38\u8feb\u5207\u7684\u9700\u6c42\u3002\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Higress Admin SDK \u6765\u7ba1\u7406 Higress \u7cfb\u7edf\u5185\u7684\u5404\u7c7b\u914d\u7f6e\u3002\u5e0c\u671b\u80fd\u591f\u5bf9\u5b58\u5728\u6b64\u7c7b\u9700\u6c42\u7684\u670b\u53cb\u6709\u6240\u5e2e\u52a9\u3002"),(0,i.kt)("h1",{id:"2-higress-admin-sdk"},"2. Higress Admin SDK"),(0,i.kt)("p",null,"Higress Admin SDK \u8131\u80ce\u4e8e Higress Console\u3002\u8d77\u521d\uff0c\u5b83\u662f\u4f5c\u4e3a Higress Console \u7684\u4e00\u90e8\u5206\uff0c\u4e3a\u524d\u7aef\u754c\u9762\u63d0\u4f9b\u5b9e\u9645\u7684\u529f\u80fd\u652f\u6301\u3002\u540e\u6765\u8003\u8651\u5230\u5bf9\u63a5\u5916\u90e8\u7cfb\u7edf\u7b49\u9700\u6c42\uff0c\u6211\u4eec\u5c06\u914d\u7f6e\u7ba1\u7406\u7684\u90e8\u5206\u5265\u79bb\u51fa\u6765\uff0c\u5f62\u6210\u4e00\u4e2a\u72ec\u7acb\u7684\u903b\u8f91\u7ec4\u4ef6\uff0c\u4fbf\u4e8e\u5404\u4e2a\u7cfb\u7edf\u8fdb\u884c\u5bf9\u63a5\u3002\u76ee\u524d\u652f\u6301\u670d\u52a1\u6765\u6e90\u7ba1\u7406\u3001\u670d\u52a1\u7ba1\u7406\u3001\u8def\u7531\u7ba1\u7406\u3001\u57df\u540d\u7ba1\u7406\u3001\u8bc1\u4e66\u7ba1\u7406\u3001\u63d2\u4ef6\u7ba1\u7406\u7b49\u529f\u80fd\u3002"),(0,i.kt)("p",null,"Higress Admin SDK \u73b0\u5728\u53ea\u63d0\u4f9b Java \u7248\u672c\uff0c\u4e14\u8981\u6c42 JDK \u7248\u672c\u4e0d\u4f4e\u4e8e 17\u3002"),(0,i.kt)("h1",{id:"3-\u5f00\u53d1\u5b9e\u64cd"},"3. \u5f00\u53d1\u5b9e\u64cd"),(0,i.kt)("h2",{id:"31-\u73af\u5883\u51c6\u5907"},"3.1 \u73af\u5883\u51c6\u5907"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4ee5\u672c\u5730\u57fa\u4e8e Kind \u642d\u5efa\u7684 K8s \u96c6\u7fa4\u4f5c\u4e3a\u5b9e\u9a8c\u73af\u5883\u3002\u6240\u4ee5\u9996\u5148\uff0c\u8bf7\u5927\u5bb6\u53c2\u8003\u8fd9\u7bc7",(0,i.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/docs/user/quickstart#%E5%9C%BA%E6%99%AF%E4%BA%8C%E5%9C%A8%E6%9C%AC%E5%9C%B0-k8s%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8"},"\u6587\u6863"),"\u5728\u672c\u5730\u5b8c\u6210 K8s \u96c6\u7fa4\u7684\u642d\u5efa\u548c Higress \u7684\u5b89\u88c5\u3002"),(0,i.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u6d4b\u8bd5\u7528\u7684 K8s \u670d\u52a1\u3002\u5927\u5bb6\u53ef\u4ee5\u5c06\u4e0b\u65b9\u7684 YAML \u4fdd\u5b58\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"test.yaml"),"\uff0c\u7136\u540e\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f test.yaml")," \u547d\u4ee4\u5728 K8s \u4e2d\u521b\u5efa\u5bf9\u5e94\u7684\u8d44\u6e90\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Pod\napiVersion: v1\nmetadata:\n  name: higress-demo-app\n  namespace: default\n  labels:\n    app: higress-demo\nspec:\n  containers:\n  - name: higress-demo-app\n    image: mendhak/http-https-echo:29\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: higress-demo-service\n  namespace: default\nspec:\n  selector:\n    app: higress-demo\n  ports:\n  - port: 8080\n")),(0,i.kt)("h2",{id:"32-\u4ee3\u7801\u7f16\u5199"},"3.2 \u4ee3\u7801\u7f16\u5199"),(0,i.kt)("p",null,"\u8fd9\u91cc\u7684\u76ee\u6807\u662f\u521b\u5efa\u4e00\u4e2a\u8def\u7531\uff0c\u4f7f ",(0,i.kt)("inlineCode",{parentName:"p"},"http://www.test.com/")," \u8fd9\u4e2a URL \u6307\u5411\u6211\u4eec\u521a\u521a\u521b\u5efa\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"higress-demo-service"),"\u3002"),(0,i.kt)("h3",{id:"\u7b2c\u4e00\u6b65\u914d\u7f6e\u4f9d\u8d56"},"\u7b2c\u4e00\u6b65\uff1a\u914d\u7f6e\u4f9d\u8d56"),(0,i.kt)("p",null,"\u6839\u636e\u9879\u76ee\u6240\u4f7f\u7528\u7684\u6784\u5efa\u5de5\u5177\u6765\u6dfb\u52a0 Higress Admin SDK \u4f9d\u8d56\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.higress.api</groupId>\n    <artifactId>higress-admin-sdk</artifactId>\n    <version>0.0.2</version>\n</dependency>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"implementation 'io.higress.api:higress-admin-sdk:0.0.2'\n")),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u521b\u5efa-higress-sdk-\u5b9e\u4f8b"},"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa Higress SDK \u5b9e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String kubeConfigFile = Paths.get(System.getProperty("user.home"), "/.kube/config").toString();\nHigressServiceConfig config = HigressServiceConfig.builder().withKubeConfigPath(kubeConfigFile).build();\nHigressServiceProvider provider = HigressServiceProvider.create(config);\n')),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u7684\u662f K8s \u96c6\u7fa4\u5916\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u6240\u4ee5\u9700\u8981\u8bbe\u7f6e kubeConfig \u6587\u4ef6\u7684\u8def\u5f84\uff0c\u4ee5\u4fbf SDK \u64cd\u4f5c K8s \u5185\u7684\u5404\u7c7b\u8d44\u6e90\u3002"),(0,i.kt)("h3",{id:"\u7b2c\u4e8c\u6b65\u521b\u5efa\u57df\u540d"},"\u7b2c\u4e8c\u6b65\uff1a\u521b\u5efa\u57df\u540d"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 SDK \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DomainService")," \u6765\u521b\u5efa\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"www.test.com")," \u57df\u540d\uff0c\u5e76\u5c06\u8be5\u57df\u540d\u8bbe\u7f6e\u4e3a\u53ea\u5f00\u653e HTTP \u8bbf\u95ee\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Domain domain = Domain.builder().name("www.test.com").enableHttps(Domain.EnableHttps.OFF).build();\nprovider.domainService().add(domain);\n')),(0,i.kt)("h3",{id:"\u7b2c\u4e09\u6b65\u521b\u5efa\u8def\u7531"},"\u7b2c\u4e09\u6b65\uff1a\u521b\u5efa\u8def\u7531"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528 SDK \u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"DomainService")," \u6765\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"higress-demo")," \u7684\u8def\u7531\u3002\u8def\u7531\u7ed1\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"www.test.com")," \u57df\u540d\uff0c\u5339\u914d\u6240\u6709\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," \u5f00\u5934\u7684\u8bf7\u6c42\uff0c\u5e76\u5c06\u8bf7\u6c42\u8f6c\u53d1\u81f3 ",(0,i.kt)("inlineCode",{parentName:"p"},"higress-demo-service.default.svc.cluster.local")," \u670d\u52a1\u7684 8080 \u7aef\u53e3\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Route route = Route.builder()\n        .name("higress-demo")\n        .domains(Collections.singletonList("www.test.com"))\n        .path(RoutePredicate.builder()\n                .matchType(RoutePredicateTypeEnum.PRE.name())\n                .matchValue("/")\n                .build())\n        .services(Collections.singletonList(\n                UpstreamService.builder()\n                        .name("higress-demo-service.default.svc.cluster.local:8080")\n                        .build()\n        )).build();\nprovider.routeService().add(route);\n')),(0,i.kt)("h2",{id:"33-\u6d4b\u8bd5\u9a8c\u8bc1"},"3.3 \u6d4b\u8bd5\u9a8c\u8bc1"),(0,i.kt)("p",null,"\u6267\u884c\u7f16\u5199\u597d\u7684\u4ee3\u7801\uff1a\u786e\u8ba4\u4e00\u5207\u6b63\u5e38\u3002\u7136\u540e\u5728 Shell \u4e2d\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u68c0\u67e5\u8bf7\u6c42\u8def\u7531\u60c5\u51b5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -svk http://localhost/ -H "Host: www.test.com"\n')),(0,i.kt)("p",null,"\u80fd\u591f\u4ee5 JSON \u683c\u5f0f\u8fd4\u56de\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\u5c31\u8bf4\u660e\u8def\u7531\u914d\u7f6e\u5df2\u7ecf\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "path": "/",\n  "headers": {\n    "host": "www.test.com",\n    "user-agent": "curl/8.4.0",\n    "accept": "*/*",\n    "x-forwarded-for": "10.42.0.230",\n    "x-forwarded-proto": "http",\n    "x-envoy-internal": "true",\n    "x-request-id": "4a3db96b-c46c-4c8a-a60f-a513f258736d",\n    "x-envoy-decorator-operation": "higress-demo-service.default.svc.cluster.local:8080/*",\n    "x-envoy-attempt-count": "1",\n    "x-b3-traceid": "a426d189c027371957f008c2cb2e9e8f",\n    "x-b3-spanid": "57f008c2cb2e9e8f",\n    "x-b3-sampled": "0",\n    "req-start-time": "1707363093608",\n    "original-host": "www.test.com"\n  },\n  "method": "GET",\n  "body": "",\n  "fresh": false,\n  "hostname": "www.test.com",\n  "ip": "10.42.0.230",\n  "ips": [\n    "10.42.0.230"\n  ],\n  "protocol": "http",\n  "query": {},\n  "subdomains": [\n    "www"\n  ],\n  "xhr": false,\n  "os": {\n    "hostname": "higress-demo-app"\n  },\n  "connection": {}\n}\n')),(0,i.kt)("h2",{id:"4-\u603b\u7ed3"},"4. \u603b\u7ed3"),(0,i.kt)("p",null,"\u76ee\u524d Higress Admin SDK \u652f\u6301\u7684\u529f\u80fd\u8fd8\u6bd4\u8f83\u7b80\u5355\u3002\u672a\u6765\u793e\u533a\u4e5f\u4f1a\u5728\u8fdb\u4e00\u6b65\u7740\u529b\u589e\u5f3a Higress \u7684\u6cbb\u7406\u4fa7\u529f\u80fd\uff0cSDK \u7684\u80fd\u529b\u4e5f\u4f1a\u4e0d\u65ad\u5b8c\u5584\u3002\u5927\u5bb6\u5bf9 SDK \u548c Console \u6709\u4efb\u4f55\u7591\u95ee\u548c\u5efa\u8bae\uff0c\u90fd\u6b22\u8fce\u5728 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/higress-group/higress-console"},"GitHub")," \u4e0a\u63d0\u51fa\u3002\u611f\u8c22\u5927\u5bb6\u7684\u652f\u6301\uff01"),(0,i.kt)("p",null,"\u4ee5\u4e0a\u5b9e\u64cd\u8fc7\u7a0b\u7684\u9879\u76ee\u4ee3\u7801\u53ef\u4ee5\u5728\u8fd9\u91cc\u4e0b\u8f7d\uff1a",(0,i.kt)("a",{target:"_blank",href:t(3070).Z},"\u4e0b\u8f7d\u94fe\u63a5")))}m.isMDXComponent=!0},3070:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/files/20240208_higress-admin-sdk-demo-f1a76d3b8534c6c881dd6404e406ee4e.zip"}}]);