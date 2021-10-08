"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[4802],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,m=f["".concat(a,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,c[1]=p;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1655:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),c=["components"],p={sidebar_position:1},a="Typescript",s={unversionedId:"2\u524d\u7aef/typescript",id:"2\u524d\u7aef/typescript",isDocsHomePage:!1,title:"Typescript",description:"\u5b89\u88c5 ts",source:"@site/docs/2\u524d\u7aef/typescript.md",sourceDirName:"2\u524d\u7aef",slug:"/2\u524d\u7aef/typescript",permalink:"/docs/2\u524d\u7aef/typescript",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/2\u524d\u7aef/typescript.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Wiki",permalink:"/docs/wiki"},next:{title:"\u4ee3\u7801\u89c4\u8303",permalink:"/docs/2\u524d\u7aef/\u4ee3\u7801\u89c4\u8303"}},l=[{value:"tsc",id:"tsc",children:[]},{value:"tsconfig.json",id:"tsconfigjson",children:[]}],u={toc:l};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typescript"},"Typescript"),(0,o.kt)("p",null,"\u5b89\u88c5 ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i --save-dev typescript nodemon ts-node @types/node\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nodemon ts-node @types/node")," \u8fd9 3 \u4e2a\u5728 Typescript \u9879\u76ee\u4e2d\u901a\u5e38\u4e5f\u662f\u9700\u8981\u7684\u3002")),(0,o.kt)("h2",{id:"tsc"},"tsc"),(0,o.kt)("p",null,"tsc \u662f Typescript \u7684 cli \u5de5\u5177\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tsc --init")," \u521d\u59cb\u5316 ts \u9879\u76ee\u3002\u4e3b\u8981\u529f\u80fd\u662f\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," \u6587\u4ef6")),(0,o.kt)("h2",{id:"tsconfigjson"},"tsconfig.json"),(0,o.kt)("p",null,"\u5e38\u7528\u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"outDir": "./dist",'),", \u8bbe\u7f6e\u7f16\u8bd1\u8f93\u51fa\u4f4d\u7f6e")))}f.isMDXComponent=!0}}]);