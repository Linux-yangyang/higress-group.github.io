"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[4762],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=l,m=g["".concat(o,".").concat(d)]||g[d]||c[d]||s;return t?a.createElement(m,r(r({ref:n},u),{},{components:t})):a.createElement(m,r({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[g]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<s;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5100:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(7462),l=(t(7294),t(3905));const s={title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",keywords:["higress"],description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",author:"SJC",date:new Date("2023-12-19T00:00:00.000Z"),custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/e2e-debug.md"},r=void 0,i={permalink:"/zh-cn/blog/e2e-debug",editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-blog/e2e-debug.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/e2e-debug.md",title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",date:"2023-12-19T00:00:00.000Z",formattedDate:"2023\u5e7412\u670819\u65e5",tags:[],readingTime:14.105,hasTruncateMarker:!1,authors:[{name:"SJC"}],frontMatter:{title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",keywords:["higress"],description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",author:"SJC",date:"2023-12-19T00:00:00.000Z",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/en/docusaurus-plugin-content-blog/e2e-debug.md"},prevItem:{title:"higress-core\u6e90\u7801\u5206\u6790",permalink:"/zh-cn/blog/higress-code"},nextItem:{title:"Higress \u56e2\u961f\u62db\u52df\u5c0f\u4f19\u4f34\u52a0\u5165\uff5e",permalink:"/zh-cn/blog/hring"}},o={authorsImageUrls:[void 0]},p=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",level:2},{value:"\u672c\u5730\u8c03\u8bd5",id:"\u672c\u5730\u8c03\u8bd5",level:3},{value:"\u7aef\u5230\u7aef\u6d4b\u8bd5",id:"\u7aef\u5230\u7aef\u6d4b\u8bd5",level:3},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"\u5177\u4f53\u5b9e\u73b0",id:"\u5177\u4f53\u5b9e\u73b0",level:2},{value:"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316",id:"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316",level:3},{value:"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5",id:"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5",level:3},{value:"higress-core\u672c\u5730\u8c03\u8bd5+e2e\u6d4b\u8bd5",id:"higress-core\u672c\u5730\u8c03\u8bd5e2e\u6d4b\u8bd5",level:3},{value:"hgctl code-debug\u7684\u4f7f\u7528",id:"hgctl-code-debug\u7684\u4f7f\u7528",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],u={toc:p},g="wrapper";function c(e){let{components:n,...s}=e;return(0,l.kt)(g,(0,a.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u80cc\u666f\u8bf4\u660e"},"\u80cc\u666f\u8bf4\u660e"),(0,l.kt)("h3",{id:"\u672c\u5730\u8c03\u8bd5"},"\u672c\u5730\u8c03\u8bd5"),(0,l.kt)("p",null,"\u672c\u5730\u8c03\u8bd5\u65e8\u5728\u5728\u5f00\u53d1\u8005\u7684\u672c\u5730\u5f00\u53d1\u73af\u5883\u4e2d\u8bc6\u522b\u3001\u5b9a\u4f4d\u548c\u4fee\u590d\u4ee3\u7801\u4e2d\u7684\u9519\u8bef\uff08bug\uff09\u3002\u8fd9\u4e2a\u9636\u6bb5\u7684\u4e3b\u8981\u76ee\u6807\u662f\u786e\u4fdd\u5355\u4e2a\u6a21\u5757\u6216\u7ec4\u4ef6\u7684\u6b63\u786e\u6027\uff0c\u4ee5\u4fbf\u66f4\u5bb9\u6613\u7406\u89e3\u548c\u89e3\u51b3\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u901a\u5e38\u4f7f\u7528\u672c\u5730\u96c6\u6210\u5f00\u53d1\u73af\u5883\uff08IDE\uff09\u6216\u8c03\u8bd5\u5668\u6765\u9010\u6b65\u6267\u884c\u4ee3\u7801\u3001\u67e5\u770b\u53d8\u91cf\u7684\u503c\u3001\u89c2\u5bdf\u7a0b\u5e8f\u7684\u6d41\u7a0b\uff0c\u5e76\u901a\u8fc7\u6253\u65ad\u70b9\u6765\u68c0\u67e5\u4ee3\u7801\u7684\u6267\u884c\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u672c\u5730\u8c03\u8bd5\u662f\u4e00\u4e2a\u5feb\u901f\u3001\u8fc5\u901f\u5b9a\u4f4d\u95ee\u9898\u5e76\u8fdb\u884c\u4fee\u590d\u7684\u9636\u6bb5\uff0c\u80fd\u591f\u63d0\u4f9b\u5b9e\u65f6\u7684\u53cd\u9988\u3002\u5b83\u6709\u52a9\u4e8e\u786e\u4fdd\u4ee3\u7801\u7684\u5c40\u90e8\u6b63\u786e\u6027\uff0c\u800c\u4e0d\u9700\u8981\u8003\u8651\u6574\u4e2a\u7cfb\u7edf\u7684\u4ea4\u4e92\u3002"),(0,l.kt)("h3",{id:"\u7aef\u5230\u7aef\u6d4b\u8bd5"},"\u7aef\u5230\u7aef\u6d4b\u8bd5"),(0,l.kt)("p",null,"e2e\u6d4b\u8bd5\u662f\u4e00\u79cd\u7aef\u5230\u7aef\u7684\u6d4b\u8bd5\uff0c\u662f\u4e00\u79cd\u5168\u9762\u7684\u6d4b\u8bd5\u65b9\u6cd5\uff0c\u7528\u4e8e\u9a8c\u8bc1\u6574\u4e2a\u8f6f\u4ef6\u7cfb\u7edf\u5728\u771f\u5b9e\u73af\u5883\u4e2d\u7684\u529f\u80fd\u548c\u6027\u80fd\u3002\u5b83\u6a21\u62df\u7528\u6237\u7684\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\uff0c\u786e\u4fdd\u6574\u4e2a\u7cfb\u7edf\u7684\u5404\u4e2a\u90e8\u5206\u6b63\u786e\u534f\u540c\u5de5\u4f5c\uff0c\u4ee5\u8fbe\u5230\u7528\u6237\u671f\u671b\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u7aef\u5230\u7aef\u6d4b\u8bd5\u5173\u6ce8\u6574\u4e2a\u7cfb\u7edf\u7684\u96c6\u6210\u548c\u4ea4\u4e92\uff0c\u65e8\u5728\u53d1\u73b0\u4e0d\u540c\u7ec4\u4ef6\u4e4b\u95f4\u7684\u95ee\u9898\u4ee5\u53ca\u5728\u5b9e\u9645\u4f7f\u7528\u573a\u666f\u4e2d\u53ef\u80fd\u51fa\u73b0\u7684 bug\u3002\u8fd9\u6709\u52a9\u4e8e\u786e\u4fdd\u7cfb\u7edf\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u7684\u7a33\u5b9a\u6027\u548c\u53ef\u9760\u6027\u3002"),(0,l.kt)("p",null,"\u5728higress\u4e2d\uff0ce2e\u6d4b\u8bd5\u7684\u4e3b\u8981\u6d41\u7a0b\u53ef\u7528\u4e0b\u56fe\u6765\u8868\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(6941).Z,width:"1083",height:"133"})),(0,l.kt)("h3",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5728\u672c\u5730\u5f00\u53d1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u9891\u7e41\u7684\u8fdb\u884ce2e\u6d4b\u8bd5\uff0c\u4f46\u662f\u6bcf\u6b21\u90fd\u8981\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u3001\u52a0\u8f7d\u955c\u50cf\u3001\u5b89\u88c5higress\u3001\u8fd0\u884ce2e\u6d4b\u8bd5\uff0c\u8fd9\u6837\u7684\u8fc7\u7a0b\u975e\u5e38\u8017\u65f6\uff0c\u56e0\u6b64\u6211\u4eec\u5e0c\u671b\u5c3d\u91cf\u5730\u51cf\u5c11\u8fd9\u4e9b\u8fc7\u7a0b\uff0c\u590d\u7528\u6d4b\u8bd5\u73af\u5883\u4ee5\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53e2e\u8fd0\u884c\u7684\u65f6\u5019\u51fa\u73b0\u95ee\u9898\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u591f\u5feb\u901f\u5b9a\u4f4d\u95ee\u9898\uff0c\u8fd9\u5c31\u9700\u8981\u5728e2e\u6d4b\u8bd5\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5\u7684\u529f\u80fd\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53e6\u5916\uff0c\u901a\u5e38\u5f00\u53d1wasm\u63d2\u4ef6\u7684\u65f6\u5019\u662f\u4e0d\u9700\u8981\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u7684\uff0c\u53ea\u9700\u8981\u590d\u7528\u6d4b\u8bd5\u73af\u5883\u5373\u53ef\u3002\u7136\u800c\uff0c\u5f53\u6d89\u53ca\u5230higress-core\u7ec4\u4ef6\u4ee3\u7801(higress\u6838\u5fc3\u4ee3\u7801)\u4fee\u6539\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u91cd\u65b0\u6784\u5efa\u955c\u50cf\uff0c\u9891\u7e41\u5730\u4fee\u6539\u4ee3\u7801\u3001\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u4ee5\u8fd0\u884ce2e\u6d4b\u8bd5\uff0c\u8fd9\u6837\u5f00\u53d1\u6548\u7387\u5c31\u4f1a\u5927\u5927\u964d\u4f4e\u3002"))),(0,l.kt)("h3",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u6d89\u53cahigress-core\u7ec4\u4ef6\u4fee\u6539")),(0,l.kt)("p",null,"\u53ef\u5206\u4e3a\u7aef\u5230\u7aef\u6d4b\u8bd5\u7684\u4f18\u5316\u548c\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5\u7684\u529f\u80fd\uff0c\u7aef\u5230\u7aef\u4f18\u5316\u53ef\u91c7\u7528\u5b9e\u73b0\u6d4b\u8bd5\u73af\u5883\u590d\u7528\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u4fee\u6539makefile\u6587\u4ef6\u6765\u51cf\u5c11\u73af\u5883\u7684\u521b\u5efa\u7b49\u5f00\u9500\u3002"),(0,l.kt)("p",null,"\u800c\u5728\u7aef\u5230\u7aef\u6d4b\u8bd5\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5\u7684\u529f\u80fd\uff0c\u53ef\u901a\u8fc7Goland\u6765\u5b9e\u73b0\uff0c\u63d0\u524d\u51c6\u5907\u597d\u6d4b\u8bd5\u73af\u5883\uff0c\u4fee\u6539e2e\u6d4b\u8bd5\u7684\u90e8\u5206\u4ee3\u7801\u6765\u51cf\u5c11e2e\u73af\u5883\u521b\u5efa\u7684\u5f00\u9500\uff0c\u66f4\u52a0\u65b9\u4fbf\u7684\u5b9e\u73b0debug\u529f\u80fd\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6d89\u53cahigress-core\u7ec4\u4ef6\u4fee\u6539")),(0,l.kt)("p",null,"\u53ef\u5728\u672c\u5730\u542f\u52a8higress-core\u7ec4\u4ef6\uff0c\u5e76\u4f7f\u5176\u80fd\u591f\u4e0ekind\u96c6\u7fa4\u4e2d\u7684discovery\u3001gateway\u7b49\u7ec4\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u5728\u6d89\u53ca\u5230higress-config\u7684ConfigMap\u4fee\u6539\u7684\u65f6\u5019\uff0c\u5176\u6d41\u7a0b\u5927\u81f4\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(2920).Z,width:"1076",height:"177"})),(0,l.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\uff0c\u53ea\u9700\u8981\u4fee\u6539higress-core\u5bb9\u5668\u4e0ediscovery\u5bb9\u5668\u4e4b\u95f4\u7684xds\u534f\u8bae\u901a\u4fe1\u5730\u5740\uff0c\u4f7f\u5176\u80fd\u591f\u4e0e\u672c\u5730\u7684higress-core\u5bb9\u5668\u8fdb\u884c\u4ea4\u4e92\uff0c\u5176\u662f\u6ce8\u518c\u5728grpc\u670d\u52a1\u4e0a\u7684\uff0c\u56e0\u6b64\u53ea\u9700\u8981\u4fee\u6539xds\u5730\u5740\u4e3a\u672c\u5730\u7684grpc\u670d\u52a1\u5730\u5740\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"\u5177\u4f53\u5b9e\u73b0"},"\u5177\u4f53\u5b9e\u73b0"),(0,l.kt)("h3",{id:"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316"},"\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316"),(0,l.kt)("p",null,"\u901a\u8fc7makefile\u6765\u5b8c\u6210\uff0c\u5305\u542b\u542f\u52a8\u7cfb\u5217\u73af\u5883\u548c\u6267\u884ce2e\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u4ee5\u8fd0\u884c\u63d2\u4ef6\u6d4b\u8bd5\u4e3a\u4f8b\uff0c\u5176make\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-makefile"},".PHONY: higress-wasmplugin-test\nhigress-wasmplugin-test: $(tools/kind) delete-cluster create-cluster docker-build kube-load-image install-dev-wasmplugin run-higress-e2e-test-wasmplugin delete-cluster\n")),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u9996\u6b21\u8fd0\u884c\u73af\u5883\u53ef\u5148\u5220\u9664\u6700\u540e\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"delete-cluster"),"\u7684\u64cd\u4f5c\uff0c\u7b2c\u4e8c\u6b21\u8fd0\u884ce2e\u6d4b\u8bd5\u7684\u65f6\u5019\u53ef\u4ee5\u5220\u9664\u524d\u9762\u7684\u64cd\u4f5c\uff0c\u53ea\u4fdd\u7559",(0,l.kt)("inlineCode",{parentName:"p"},"run-higress-e2e-test-wasmplugin"),"\u7684\u64cd\u4f5c\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u51cf\u5c11\u5f88\u591a\u65f6\u95f4\u3002"),(0,l.kt)("p",null,"\u7136\u800cmake\u547d\u4ee4\u4e0d\u652f\u6301\u6dfb\u52a0\u5230goland\u91cc\u9762\u5b9e\u73b0debug\u529f\u80fd\uff0c\u8fd0\u884c\u51fa\u9519\u7684\u65f6\u5019\u4e5f\u4e0d\u65b9\u4fbf\u5b9a\u4f4d\u95ee\u9898\uff0c\u66f4\u63a8\u8350\u4f7f\u7528\u4e0b\u9762\u8fd9\u4e2a\u65b9\u6cd5\u3002"),(0,l.kt)("h3",{id:"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5"},"\u5728e2e\u4e2d\u5b9e\u73b0\u672c\u5730\u8c03\u8bd5"),(0,l.kt)("p",null,"\u901a\u8fc7Goland\u6765\u5b8c\u6210\uff0c\u63d0\u524d\u51c6\u5907\u597d\u73af\u5883\uff0c\u4fee\u6539Goland\u542f\u52a8\u53c2\u6570\u6765\u5b8c\u6210\u672c\u5730\u8c03\u8bd5\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e2e\u6d4b\u8bd5\u4e4b\u524d\u7684\u51c6\u5907")),(0,l.kt)("p",null,"\u6839\u636e\u5404\u81ea\u7684\u9700\u6c42\u6765\u5b9a\u5236\u73af\u5883\uff0c\u5982\u679c\u6d4b\u8bd5\u73af\u5883\u4e2d\u9700\u8981\u7528\u5230higress\u7684controller\u3001gateway\u7b49\u7ec4\u4ef6\uff0c\u9700\u8981\u63d0\u524d\u672c\u5730\u5b89\u88c5\u597d\u73af\u5883\uff0c\u5b89\u88c5\u6559\u7a0b\u53ef\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/docs/user/quickstart/"},"\u8fd9\u91cc"),"\uff0c\u6216\u8005\u53c2\u8003\u7aef\u5230\u7aef\u6d4b\u8bd5\u4f18\u5316\u6b65\u9aa4\u6765\u51c6\u5907\u597d\u6d4b\u8bd5\u73af\u5883\u3002"),(0,l.kt)("p",null,"\u5b89\u88c5\u597dhigress\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6765\u67e5\u770bhigress\u7684pod\u662f\u5426\u6b63\u5e38\u8fd0\u884c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods --all-namespaces\n")),(0,l.kt)("p",null,"\u663e\u793a\u7ed3\u679c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"1.png",src:t(1286).Z,width:"980",height:"136"})),(0,l.kt)("p",null,"\u90fd\u663e\u793aRunning\u72b6\u6001\uff0c\u8bf4\u660ehigress\u5df2\u7ecf\u6b63\u5e38\u8fd0\u884c\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e2e\u7684flag\u4fee\u6539")),(0,l.kt)("p",null,"\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"test/e2e/conformance/utils/flags"),"\u76ee\u5f55\u4e0b\uff0c\u6709\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"flags.go"),"\u6587\u4ef6\uff0c\u91cc\u9762\u5b9a\u4e49\u4e86e2e\u6d4b\u8bd5\u7684flag\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'var (\n    IngressClassName     = flag.String("ingress-class", "higress", "Name of IngressClass to use for tests")\n    ShowDebug            = flag.Bool("debug", false, "Whether to print debug logs")\n    CleanupBaseResources = flag.Bool("cleanup-base-resources", true, "Whether to cleanup base test resources after the run")\n    SupportedFeatures    = flag.String("supported-features", "", "Supported features included in conformance tests suites")\n    ExemptFeatures       = flag.String("exempt-features", "", "Exempt Features excluded from conformance tests suites")\n    IsWasmPluginTest     = flag.Bool("isWasmPluginTest", false, "Determine if run wasm plugin conformance test")\n    WasmPluginType       = flag.String("wasmPluginType", "GO", "Define wasm plugin type, currently supports GO, CPP")\n    WasmPluginName       = flag.String("wasmPluginName", "", "Define wasm plugin name")\n    IsEnvoyConfigTest    = flag.Bool("isEnvoyConfigTest", false, "Determine if run envoy config conformance test")\n)\n')),(0,l.kt)("p",null,"\u53ef\u4e34\u65f6\u4fee\u6539\u8fd9\u4e9bflag\u7684\u521d\u59cb\u503c\uff0c\u4e5f\u53ef\u4ee5\u5728Goland\u7f16\u8f91\u5668\u4e2d\u5b9a\u4e49\u542f\u52a8\u53c2\u6570\uff0c\u4f8b\u5982\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"IsWasmPluginTest"),"\u4e3atrue\u53ef\u53ea\u8fd0\u884cwasm\u63d2\u4ef6\u7684e2e\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,"\u4fee\u6539\u597dflag\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728Goland\u4e2d\u901a\u8fc7debug\u7684\u65b9\u5f0f\u8fd0\u884ce2e\u6d4b\u8bd5\u3002\u53ef\u5148\u5728\u5982\u4e0b\u4f4d\u7f6e\u6dfb\u52a0\u4e00\u4e2a\u65ad\u70b9\uff0c\u7b49\u5f85e2e\u73af\u5883\u51c6\u5907\u5b8c\u6bd5\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"2.png",src:t(2601).Z,width:"1335",height:"987"})),(0,l.kt)("p",null,"e2e\u6d4b\u8bd5\u5728\u524d\u671f\u73af\u5883\u51c6\u5907\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u521b\u5efa\u4e00\u4e9bnamespace\u5e76\u542f\u52a8\u4e00\u4e9bpod\uff0c\u53ef\u4ee5\u624b\u52a8\u67e5\u770b\u4e00\u4e0bpod\u7684\u542f\u52a8\u60c5\u51b5\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(8020).Z,width:"1201",height:"605"})),(0,l.kt)("p",null,"\u5728\u8fd9\u5f20\u56fe\u91cc\u9762\uff0c\u9664\u4e86\u6211\u4eec\u63d0\u524d\u5b89\u88c5\u597d\u7684higress\u7ec4\u4ef6\u4e4b\u5916\uff0c\u8fd8\u6709\u4e00\u4e9b\u5176\u4ed6\u7684pod\uff0c\u8fd9\u4e9bpod\u662fe2e\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u521b\u5efa\u7684\uff0c\u5982\u679c\u6709\u4e9bpod\u5728\u672c\u5730e2e\u6d4b\u8bd5\u4e2d\u7528\u4e0d\u5230\uff0c\u53ef\u624b\u52a8\u4fee\u6539\u4ee3\u7801\u6765\u51cf\u5c11\u524d\u671f\u73af\u5883\u7684\u51c6\u5907\u65f6\u95f4\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u8bbe\u7f6e\u4e86cleanup-base-resources\u4e3afalse\uff0c\u90a3\u4e48e2e\u6d4b\u8bd5\u7ed3\u675f\u4e4b\u540e\uff0c\u8fd9\u4e9bpod\u4e0d\u4f1a\u88ab\u5220\u9664\uff0c\u4f46\u662f\u91cd\u542f\u7684\u65f6\u5019\u4f1a\u62a5\u9519\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre"},'Pod "consul-standlone" is invalid: spec: Forbidden: pod updates may not change fields other than `spec.containers[*].image`, `spec.initContainers[*].image`, `spec.activeDeadlineSeconds`, `spec.tolerations` (only additions to existing tolerations) or `spec.terminationGracePeriodSeconds` (allow it to be set to 1 if it was previously negative)\n'))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u8bbe\u7f6e\u4e3atrue\uff0c\u6bcf\u6b21\u6d4b\u8bd5\u5b8c\u9700\u8981\u7b49\u5f85pod\u7684\u9500\u6bc1\uff0c\u7136\u540e\u91cd\u65b0\u6d4b\u8bd5\uff0c\u8fd9\u4e9b\u8fc7\u7a0b\u4e00\u822c\u5f88\u5feb\uff0c\u4e5f\u53ef\u4ee5\u4fee\u6539\u4ee3\u7801\u6765\u51cf\u5c11\u4e00\u4e9bpod\u7684\u521b\u5efa\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"e2e\u6d4b\u8bd5\u73af\u5883\u4f18\u5316")),(0,l.kt)("p",null,"\u4f8b\u5982\u53ea\u9700\u8981higress\u73af\u5883\uff0c\u800c\u4e0d\u9700\u8981",(0,l.kt)("inlineCode",{parentName:"p"},"higress-conformance-infra"),",",(0,l.kt)("inlineCode",{parentName:"p"},"higress-conformance-app-backend"),"\u7b49namespace\u73af\u5883\uff0c\u53ef\u4ee5\u624b\u52a8\u5728\u5982\u4e0b\u51e0\u884c\u4ee3\u7801\u91cc\u6dfb\u52a0\u6ce8\u91ca\uff0c\u6765\u8df3\u8fc7\u8fd9\u4e9b\u73af\u5883\u7684\u521b\u5efa\uff0c\u7136\u540e\u6d4b\u8bd5\u4e2d\u53ea\u7528\u5230\u4e86higress\u7684\u7ec4\u4ef6\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(4177).Z,width:"1372",height:"984"})),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u53ea\u9700\u8981\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"EnvoyConfigTracing"),"\u7684Test\u6d4b\u8bd5\uff0c\u5b83\u53ea\u8ddfhigress\u548chigress-conformance-infra\u6709\u5173\uff0c\u6ce8\u91ca\u6389\u4e86\u5176\u4ed6namespace\u7684\u51c6\u5907\u73af\u5883\uff0c\u53ef\u4ee5\u770b\u5230e2e\u6d4b\u8bd5\u4e0d\u52301s\u5c31\u7ed3\u675f\u4e86\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u5176\u4ed6namespace\u7684\u73af\u5883\uff0c\u800c\u4e0d\u9700\u8981nacos/consul\u7b49\u73af\u5883\uff0c\u53ef\u4ee5\u5728suite\u7684New\u65b9\u6cd5\u91cc\u627e\u5230\u4ee5\u4e0b\u4ee3\u7801\u5757\uff0c\u6839\u636e\u9700\u8981\u8fdb\u884c\u6ce8\u91ca\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'// apply defaults\nif suite.BaseManifests == nil {\n    suite.BaseManifests = []string{\n        "base/manifests.yaml",\n        "base/consul.yaml",\n        "base/eureka.yaml",\n        "base/nacos.yaml",\n        "base/dubbo.yaml",\n    }\n}\n')),(0,l.kt)("p",null,"\u89e3\u51b3\u597de2e\u6d4b\u8bd5\u7684\u73af\u5883\u76f8\u5173\u95ee\u9898\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5728Goland\u91cc\u6dfb\u52a0\u81ea\u5df1\u60f3\u8981\u7684\u65ad\u70b9\uff0c\u6765debug\u6d4b\u8bd5\u7528\u4f8b\u4e86\u3002"),(0,l.kt)("h3",{id:"higress-core\u672c\u5730\u8c03\u8bd5e2e\u6d4b\u8bd5"},"higress-core\u672c\u5730\u8c03\u8bd5+e2e\u6d4b\u8bd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u5728\u672c\u5730\u542f\u52a8higress-core\u7ec4\u4ef6\uff0c\u9700\u8981\u4fee\u6539\u5176\u542f\u52a8\u53c2\u6570\uff0c\u4e0e\u6b63\u5e38\u90e8\u7f72\u7684\u542f\u52a8\u53c2\u6570\u4fdd\u6301\u4e00\u81f4\uff0c\u53ef\u53c2\u8003\u5982\u4e0b\u914d\u7f6eGoland\u7684\u542f\u52a8\u53c2\u6570\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(9327).Z,width:"1018",height:"814"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u67e5\u627e\u81ea\u5df1\u7684\u672c\u673a\u975e\u56de\u73af\u7f51\u5361\u7684ip\u5730\u5740\uff0c\u4f8b\u5982\u6211\u4f7f\u7528wlo0\u7f51\u5361\uff0c\u4e5f\u5c31\u662f192.168.0.189")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(9949).Z,width:"1022",height:"190"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539xds\u534f\u8bae\u5730\u5740\uff0c\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl edit cm higress-config -n higress-system"),"\uff0c\u5c06\u5176\u4fee\u6539\u672c\u5730\u7684grpc\u670d\u52a1\u5730\u5740\uff0c\u5982\u56fe\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(3605).Z,width:"706",height:"161"})),(0,l.kt)("p",null,"\u5c06\u5176\u4e2d\u7684127.0.0.1:15051\u4fee\u6539\u4e3a192.168.0.189:15051\uff0c\u4fdd\u5b58\u9000\u51fa\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91cd\u542fcontroller\u548cgateway deployment\uff0c\u4f7f\u5176\u80fd\u591f\u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl rollout restart deployment higress-gateway -n higress-system\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl rollout restart deployment higress-controller -n higress-system\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(493).Z,width:"1016",height:"238"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u91cd\u542f\u6210\u529f\u540e\u53ef\u4ee5\u5148\u8fd0\u884c\u4e00\u4e0b\u7b80\u5355\u7684e2e\u6d4b\u8bd5\uff0c\u6bd4\u5982http route\u7b49\uff0c\u6d4b\u8bd5\u662f\u5426\u80fd\u6b63\u5e38\u8fde\u901agateway\uff0c\u5173\u4e8eConfigMap\u90e8\u5206\uff0c\u6211\u8fd9\u91cc\u7ed9\u672c\u5730higress-core\u6dfb\u52a0\u4e86\u4e00\u4e2aglobal-option\u7684\u914d\u7f6e\uff0c\u6b64\u65f6kind\u7684core\u7ec4\u4ef6\u8fd8\u6ca1\u6709\u8be5\u914d\u7f6e\uff0c\u6309\u7167\u524d\u9762\u6b65\u9aa4\u542f\u52a8\u672c\u5730higress-core\u5e76\u4fee\u6539xds\u5730\u5740\u91cd\u542f\u8d1f\u8f7d\u4e4b\u540e\uff0c\u8fd0\u884c\u76f8\u5173\u7684e2e\u6d4b\u8bd5\uff0c\u53ef\u4ee5\u770b\u5230\u6d4b\u8bd5\u901a\u8fc7\uff0c\u672c\u5730higress-core\u65e5\u5fd7\u4ee5\u53cakind\u4e0a\u7684discovery\u65e5\u5fd7\u5982\u4e0b\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img.png",src:t(1690).Z,width:"1824",height:"858"})),(0,l.kt)("p",null,"\u901a\u8fc7\u672c\u5730higress-core\u65e5\u5fd7\u53ef\u4ee5\u770b\u5230ads\u6210\u529f\u63a8\u9001\u51fa\u53bbenvoyfilter\u914d\u7f6e\u6587\u4ef6\u7ed9discovery\uff0c\u800cdiscovery\u65e5\u5fd7\u5219\u663e\u793alds/rds/cds\u7b49\u6210\u529f\u5c06\u914d\u7f6e\u6587\u4ef6\u63a8\u9001\u7ed9gateway\u3002"),(0,l.kt)("h2",{id:"hgctl-code-debug\u7684\u4f7f\u7528"},"hgctl code-debug\u7684\u4f7f\u7528"),(0,l.kt)("p",null,"hgctl\u5df2\u7ecf\u63a8\u51facode-debug\u7684\u529f\u80fd\uff0c\u4f1a\u81ea\u52a8\u4fee\u6539xds\u5730\u5740\uff0c\u4f7f\u5176\u80fd\u591f\u4e0e\u672c\u5730\u7684higress-core\u8fdb\u884c\u4ea4\u4e92\u3002\u8fd9\u91cc\u9700\u8981\u4f7f\u7528hgctl\u6765\u5b89\u88c5higress\uff0c\u76ee\u524dcode-debug\u53ea\u652f\u6301local-k8s\u7684profile\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hgctl\u5b89\u88c5higress")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"hgctl install --set profile=local-k8s\n")),(0,l.kt)("p",null,"\u7b49\u5f85\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u624b\u52a8\u67e5\u770b\u4e00\u4e0b\u662f\u5426\u542f\u52a8\u6210\u529f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u52a8\u672c\u5730higress-core")),(0,l.kt)("p",null,"\u4fee\u6539Goland\u542f\u52a8\u53c2\u6570\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"serve --kubeconfig=/root/.kube/config"),"(\u6539\u4e3a\u81ea\u5df1\u7684home\u76ee\u5f55)\uff0c\u7136\u540e\u542f\u52a8higress-core\uff0c\u7b49\u5f85higress-core\u542f\u52a8\u6210\u529f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5f00\u542fcode-debug")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"hgctl code-debug start\n")),(0,l.kt)("p",null,"\u67e5\u770bcontroller\u548cgateway\u7684pod\u662f\u5426\u91cd\u542f\u6210\u529f\uff0c\u5982\u679c\u91cd\u542f\u6210\u529f\uff0c\u8bf4\u660ecode-debug\u5df2\u7ecf\u751f\u6548\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u73af\u5883\u51c6\u5907")),(0,l.kt)("p",null,"\u5728\u540e\u9762\u7684\u6b65\u9aa4\u4e0a\u6d89\u53ca\u5230Ingress\u8d44\u6e90\uff0c\u8fd9\u91cc\u9700\u8981\u51c6\u5907\u4e00\u4e0bIngress\u8d44\u6e90\uff0c\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl apply -f - <<EOF\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: higress-conformance-infra\n  labels:\n    higress-conformance: infra\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: infra-backend-v1\n  namespace: higress-conformance-infra\nspec:\n  selector:\n    app: infra-backend-v1\n  ports:\n    - protocol: TCP\n      port: 8080\n      targetPort: 3000\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: infra-backend-v1\n  namespace: higress-conformance-infra\n  labels:\n    app: infra-backend-v1\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: infra-backend-v1\n  template:\n    metadata:\n      labels:\n        app: infra-backend-v1\n    spec:\n      containers:\n      - name: infra-backend-v1\n        # From https://github.com/kubernetes-sigs/ingress-controller-conformance/tree/master/images/echoserver\n        image: higress-registry.cn-hangzhou.cr.aliyuncs.com/higress/echoserver:v20221109-7ee2f3e\n        env:\n        - name: POD_NAME\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.name\n        - name: NAMESPACE\n          valueFrom:\n            fieldRef:\n              fieldPath: metadata.namespace\n        resources:\n          requests:\n            cpu: 10m\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: higress-conformance-infra-configmap-global-test\n  namespace: higress-conformance-infra\nspec:\n  ingressClassName: higress\n  rules:\n    - host: "foo.com"\n      http:\n        paths:\n          - pathType: Prefix\n            path: "/foo"\n            backend:\n              service:\n                name: infra-backend-v1\n                port:\n                  number: 8080\nEOF\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8c03\u8bd5higress-core")),(0,l.kt)("p",null,"\u4ee5ConfigMap\u7684gzip(\u4f4d\u4e8epkg/ingress/kube/configmap/gzip.go)\u4e3a\u4f8b\uff0c\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"NewDefaultGzip"),"\u65b9\u6cd5\uff0c\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"Enable"),"\u7684\u9ed8\u8ba4\u503c\u4fee\u6539\u4e3atrue\uff0c\u7136\u540e\u91cd\u542fhigress-core\u3002"),(0,l.kt)("p",null,"\u5728\u91cd\u542f\u4e4b\u524d\uff0c\u5148\u8fd0\u884c\u5982\u4e0bshell\u547d\u4ee4\uff0c\u542f\u52a8envoy\u67e5\u770b\u9762\u677f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"hgctl dashboard envoy\n")),(0,l.kt)("p",null,"\u8bbf\u95eehttp://localhost:15000/config_dump\uff0c\u4f7f\u7528Ctrl+F\u641c\u7d22",(0,l.kt)("inlineCode",{parentName:"p"},"compression_level"),"\uff0c\u53ef\u4ee5\u770b\u5230\u67e5\u627e\u7ed3\u679c\u4e3a\u7a7a\uff0c\u8bf4\u660egzip\u914d\u7f6e\u8fd8\u6ca1\u6709\u751f\u6548\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u91cd\u542fhigress-core\uff0c\u7b49\u5f85higress-core\u91cd\u542f\u6210\u529f\uff0c\u518d\u6b21\u8bbf\u95eehttp://localhost:15000/config_dump\uff0c\u4f7f\u7528Ctrl+F\u641c\u7d22",(0,l.kt)("inlineCode",{parentName:"p"},"compression_level"),"\uff0c\u53ef\u4ee5\u770b\u5230\u67e5\u627e\u7ed3\u679c\u4e0d\u4e3a\u7a7a\uff0c\u8bf4\u660egzip\u914d\u7f6e\u5df2\u7ecf\u751f\u6548\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u95edcode-debug")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"hgctl code-debug stop\n")),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u672c\u5730\u8c03\u8bd5\u548ce2e\u6d4b\u8bd5\u662f\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5fc5\u4e0d\u53ef\u5c11\u7684\u73af\u8282\uff0c\u901a\u8fc7\u672c\u6587\u7684\u4ecb\u7ecd\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u52a0\u65b9\u4fbf\u7684\u8fdb\u884c\u672c\u5730\u8c03\u8bd5\u548ce2e\u6d4b\u8bd5\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6d89\u53ca\u5230higress-core\u7ec4\u4ef6\u4fee\u6539\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539xds\u5730\u5740\u5e76\u672c\u5730\u542f\u52a8higress-core\uff0c\u800c\u4e0d\u9700\u8981\u9891\u7e41\u5730\u4fee\u6539\u4ee3\u7801\u3001\u91cd\u65b0\u6784\u5efa\u955c\u50cf\u4ee5\u8fd0\u884ce2e\u6d4b\u8bd5\uff0c\u5e76\u4e14\u8fd8\u80fd\u8c03\u8bd5higress-core\u7ec4\u4ef6\u7684\u4ee3\u7801\u3002"),(0,l.kt)("li",{parentName:"ol"},"higress\u540e\u7eed\u4f1a\u63a8\u51fa\u4e00\u4e9b\u65b0\u529f\u80fd\uff0c\u5b9e\u73b0e2e\u6d4b\u8bd5\u7684\u62c6\u5206\uff0c\u4e3b\u8981\u4f1a\u5206\u4e3a\u51c6\u5907\u73af\u5883\uff0c\u8fd0\u884c\u6d4b\u8bd5\u4ee5\u53ca\u6e05\u9664\u73af\u5883\u7b49\uff0c\u7075\u6d3b\u6027\u66f4\u9ad8\u3002")))}c.isMDXComponent=!0},6941:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug0-e9db11f70bb082a52732b7b318a076a7.png"},1286:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug1-6d4ad979b78fd26ceedc43b24fc18b3c.png"},1690:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug10-b495481ce79e3c61606be79a1baee0fb.png"},2601:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug2-de7c59fff6871ae104cb9f1fdbae9f65.png"},8020:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug3-4d25bee1f70fb8ae0a0a90deee54244d.png"},4177:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug4-263420d802513c11800de3ce76b453f8.png"},2920:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug5-cbdc082e404661537dfc9eccfe2f35a8.png"},9327:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug6-19e1a126b7ce35334a9c2d73da8a8b77.png"},9949:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug7-5aee459287eee78b4f81c389416b186c.png"},3605:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug8-de3b41a3f2a5259600b86fe1e3a7a638.png"},493:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/e2e-debug9-3a14da3112f41d230e6b7112658ba74e.png"}}]);