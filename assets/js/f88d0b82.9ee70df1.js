"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[6460],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,k=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7295:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:4},c="Jenkins",s={unversionedId:"8software/Jenkins",id:"8software/Jenkins",isDocsHomePage:!1,title:"Jenkins",description:"NodeJS",source:"@site/docs/8software/Jenkins.md",sourceDirName:"8software",slug:"/8software/Jenkins",permalink:"/docs/8software/Jenkins",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/8software/Jenkins.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CentOS",permalink:"/docs/8software/CentOS"},next:{title:"Nexus",permalink:"/docs/8software/Nexus"}},p=[{value:"NodeJS",id:"nodejs",children:[]},{value:"\u6784\u5efa\u65f6\u4ece git \u62c9\u4ee3\u7801",id:"\u6784\u5efa\u65f6\u4ece-git-\u62c9\u4ee3\u7801",children:[]},{value:"\u64cd\u4f5c Docker login \u65f6\u6dfb\u52a0\u8d26\u53f7",id:"\u64cd\u4f5c-docker-login-\u65f6\u6dfb\u52a0\u8d26\u53f7",children:[]}],u={toc:p};function d(e){var n=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jenkins"},"Jenkins"),(0,i.kt)("h2",{id:"nodejs"},"NodeJS"),(0,i.kt)("p",null,"NodeJS \u63d2\u4ef6\uff0c\u63d0\u4f9b node \u73af\u5883"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5b89\u88c5\uff1aNodeJS \u63d2\u4ef6\u540e\uff0c\u5728 Global Tool Configuration => NodeJS => \u65b0\u589eNodeJS \u6dfb\u52a0 Node \u73af\u5883\u3002")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u4f7f\u7528\uff1a\u5728\u6784\u5efa\u4efb\u52a1\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Environment")," \u4e2d\u6dfb\u52a0 NodeJS \u73af\u5883"))),(0,i.kt)("h2",{id:"\u6784\u5efa\u65f6\u4ece-git-\u62c9\u4ee3\u7801"},"\u6784\u5efa\u65f6\u4ece git \u62c9\u4ee3\u7801"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728\u7535\u8111\u4e2d\u751f\u6210 ssh-key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'ssh-keygen -t rsa -C "janlay884181317@gmail.com"\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"\u5c06\u516c\u94a5\u6ce8\u518c\u5230 github/gitlab"),(0,i.kt)("li",{parentName:"ol"},"\u5728 jenkins \u4e2d\u6dfb\u52a0\u79c1\u94a5")),(0,i.kt)("h2",{id:"\u64cd\u4f5c-docker-login-\u65f6\u6dfb\u52a0\u8d26\u53f7"},"\u64cd\u4f5c Docker login \u65f6\u6dfb\u52a0\u8d26\u53f7"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'docker login -u "\u7528\u6237\u540d" -p "\u5bc6\u7801" 172.16.81.7:8082')),(0,i.kt)("p",null,"\u5728\u4efb\u52a1\u91cc\u9762\u6dfb\u52a0\u8d26\u53f7\u5bc6\u7801: ",(0,i.kt)("inlineCode",{parentName:"p"},"Build Environment")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Use secret text ...")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Username and password(separated)")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(5430).Z})),(0,i.kt)("p",null,"\u4fee\u6539 login \u547d\u4ee4:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker login -u $DOCKER_LOGIN_USERNAME -p $DOCKER_LOGIN_PASSWORD 192.168.79.5:8082\n")))}d.isMDXComponent=!0},5430:function(e,n,t){n.Z=t.p+"assets/images/jenkins-docker-login-a9ec0e9c7579ac7c61fc22df5608512b.png"}}]);