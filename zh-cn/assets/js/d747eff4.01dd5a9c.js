"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[4676],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=a(r),g=o,b=d["".concat(s,".").concat(g)]||d[g]||l[g]||i;return r?n.createElement(b,u(u({ref:t},p),{},{components:r})):n.createElement(b,u({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,u[1]=c;for(var a=2;a<i;a++)u[a]=r[a];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var n=r(7462),o=(r(7294),r(3905));const i={title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",keywords:["higress"],description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",author:"SJC",date:new Date("2023-12-19T00:00:00.000Z"),custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/e2e-debug.md"},u=void 0,c={unversionedId:"dev/e2e-debug",id:"dev/e2e-debug",title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/e2e-debug.md",sourceDirName:"dev",slug:"/dev/e2e-debug",permalink:"/zh-cn/docs/dev/e2e-debug",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/e2e-debug.md",tags:[],version:"current",frontMatter:{title:"\u6559\u7a0b\uff1a\u5982\u4f55\u5728\u672c\u5730\u8fdb\u884chigress\u8c03\u8bd5\u548c\u7aef\u5230\u7aef\u6d4b\u8bd5",keywords:["higress"],description:"\u5728\u672c\u5730\u5feb\u901f\u5b8c\u6210e2e\u6d4b\u8bd5\u5e76\u5b9e\u73b0debug\u529f\u80fd",author:"SJC",date:"2023-12-19T00:00:00.000Z",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/dev/e2e-debug.md"},sidebar:"docs",previous:{title:"Higress\u81ea\u5b9a\u4e49CRD\u5f00\u53d1\u6307\u5f15",permalink:"/zh-cn/docs/dev/CustomResourceDefinition"}},s={},a=[],p={toc:a},d="wrapper";function l(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://higress.io/zh-cn/blog/e2e-debug"},"\u6559\u7a0b\u94fe\u63a5")))}l.isMDXComponent=!0}}]);