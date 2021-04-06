(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),a=(n(0),n(277)),o=n(284),c={id:"extending_configs",title:"Extending Configs"},s={unversionedId:"patterns/extending_configs",id:"patterns/extending_configs",isDocsHomePage:!1,title:"Extending Configs",description:"A common pattern is to extend an existing config, overriding and/or adding new config values to it.",source:"@site/docs/patterns/extending_configs.md",slug:"/patterns/extending_configs",permalink:"/docs/next/patterns/extending_configs",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/extending_configs.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1617668163,formattedLastUpdatedAt:"4/6/2021",sidebar:"docs",previous:{title:"Config Store API",permalink:"/docs/next/tutorials/structured_config/config_store"},next:{title:"Configuring Experiments",permalink:"/docs/next/patterns/configuring_experiments"}},u=[],l={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o.a,{text:"Example application",to:"examples/patterns/extending_configs",mdxType:"ExampleGithubLink"}),Object(a.b)("p",null,"A common pattern is to extend an existing config, overriding and/or adding new config values to it.\nThe extension is done by including the base configuration, and then overriding the chosen values in the current config."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"This page assumes that you are familiar with the contents of ",Object(a.b)("a",{parentName:"p",href:"/docs/next/advanced/defaults_list"},"The Defaults List"),"."))),Object(a.b)("h4",{id:"extending-a-config-from-the-same-config-group"},"Extending a config from the same config group:"),Object(a.b)("div",{className:"row"},Object(a.b)("div",{className:"col col--4"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql \n\n\n\n\n\n"))),Object(a.b)("div",{className:"col col--4"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - base_mysql\n\nuser: omry\npassword: secret\nport: 3307\nencoding: utf8\n"))),Object(a.b)("div",{className:"col col--4"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/base_mysql.yaml"',title:'"db/base_mysql.yaml"'},"host: localhost\nport: 3306\nuser: ???\npassword: ???\n\n\n\n")))),Object(a.b)("p",null,"Output:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py"',title:'"$',python:!0,'my_app.py"':!0},"db:\n  host: localhost   # from db/base_mysql\n  port: 3307        # overriden by db/mysql.yaml \n  user: omry        # populated by db/mysql.yaml\n  password: secret  # populated by db/mysql.yaml\n  encoding: utf8    # added by db/mysql.yaml\n")),Object(a.b)("h4",{id:"extending-a-config-from-another-config-group"},"Extending a config from another config group:"),Object(a.b)("p",null,"To extend a config from a different config group, include it using an absolute path (/), and override\nthe package to ",Object(a.b)("em",{parentName:"p"},"_","here","_"),". (",Object(a.b)("em",{parentName:"p"},"_","here","_")," is described in ",Object(a.b)("a",{parentName:"p",href:"/docs/next/advanced/overriding_packages#default-list-package-keywords"},"Packages"),")"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - /db_schema/base_mysql@_here_\n")),Object(a.b)("p",null,"It is otherwise identical to extending a config within the same config group."))}d.isMDXComponent=!0},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,g=d["".concat(o,".").concat(p)]||d[p]||f[p]||a;return n?i.a.createElement(g,c(c({ref:t},u),{},{components:n})):i.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},279:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(11),o=n(278),c=n(7),s=Object(r.createContext)({collectLink:function(){}}),u=n(280),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,d,f=e.isNavLink,p=e.to,g=e.href,m=e.activeClassName,b=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,x=Object(r.useContext)(s),w=p||g,D=Object(o.a)(w),A=null==w?void 0:w.replace("pathname://",""),N=void 0!==A?(n=A,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),E=f?a.e:a.c,V=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!V&&D&&window.docusaurus.prefetch(N),function(){V&&d&&d.disconnect()}}),[N,V,D]);var _=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,k=!N||!D||_;return N&&D&&!_&&!v&&x.collectLink(N),k?i.a.createElement("a",Object.assign({href:N},w&&!D&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(E,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(N),P.current=!0)},innerRef:function(e){var t,n;V&&e&&D&&(t=e,n=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:N||""},f&&{isActive:b,activeClassName:m}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(10),i=n(278);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},281:function(e,t,n){try{e.exports=n(282)}catch(i){var r={};e.exports={useAllDocsData:function(){return r},useActivePluginAndVersion:function(){}}}},282:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(23),i=n(38),a=n(283);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return a.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return a.getDocVersionSuggestions(n,i)}},283:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,a,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(i=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),a=i.activeVersion!==r;return{latestDocSuggestion:a?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:a?r:void 0}}},284:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),a=n.n(i),o=n(279),c=n(10),s=n(281);function u(e){return a.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,i=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(u,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);