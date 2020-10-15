(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(7),i=(n(0),n(236)),o={id:"documentation",title:"Documentation",sidebar_label:"Documentation"},c={unversionedId:"development/documentation",id:"development/documentation",isDocsHomePage:!1,title:"Documentation",description:"NEWS Entries",source:"@site/docs/development/documentation.md",slug:"/development/documentation",permalink:"/docs/next/development/documentation",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/documentation.md",version:"current",lastUpdatedBy:"Maciej Domaga\u0142a",lastUpdatedAt:1602777600,sidebar_label:"Documentation",sidebar:"docs",previous:{title:"Style Guide",permalink:"/docs/next/development/style_guide"},next:{title:"Release process",permalink:"/docs/next/development/release"}},l=[{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[]}]},{value:"Website setup",id:"website-setup",children:[{value:"Install",id:"install",children:[]},{value:"Local Development",id:"local-development",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"news-entries"},"NEWS Entries"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/NEWS.md"}),Object(i.b)("inlineCode",{parentName:"a"},"NEWS.md"))," file is managed using ",Object(i.b)("inlineCode",{parentName:"p"},"towncrier")," and all non-trivial changes\nmust be accompanied by a news entry."),Object(i.b)("p",null,"To add an entry to the news file, first, you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",Object(i.b)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),Object(i.b)("p",null,"Once you have an issue or pull request, you take the number, and you create a\nfile inside the ",Object(i.b)("inlineCode",{parentName:"p"},"news/")," directory named after that issue number with one of the following extensions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"api_change")," : API Change (Renames, deprecations, and removals)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"feature")," : Addition of a new feature"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bugfix")," : Fixing of a bug"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"docs")," : Addition or updates to documentation"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"plugin")," : Addition of changes to a plugin"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"maintenance")," : Changes that improve the maintainability of the code")),Object(i.b)("p",null,"If your issue or PR number is ",Object(i.b)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, you would\ncreate a file ",Object(i.b)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",Object(i.b)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"news/NNNN.api_change"),"). Likewise, if a PR touches multiple issues/PRs, you may\ncreate a file for each of them with the exact same contents, and Towncrier will\ndeduplicate them."),Object(i.b)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),Object(i.b)("p",null,"The contents of this file are markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),Object(i.b)("p",null,"To maintain a consistent style in the ",Object(i.b)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'),Object(i.b)("h2",{id:"website-setup"},"Website setup"),Object(i.b)("p",null,"The website is built using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/"}),"Docusaurus 2"),".",Object(i.b)("br",{parentName:"p"}),"\n","Run the following commands from the ",Object(i.b)("inlineCode",{parentName:"p"},"website")," directory."),Object(i.b)("h3",{id:"install"},"Install"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn\n")),Object(i.b)("h3",{id:"local-development"},"Local Development"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ yarn start\n")),Object(i.b)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),Object(i.b)("p",null,"For more details, refer ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/website/README.md"}),"here"),"."))}u.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);