(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(266)),i=n(273),c={id:"select_multiple_configs_from_config_group",title:"Selecting multiple configs from a Config Group"},s={unversionedId:"patterns/select_multiple_configs_from_config_group",id:"patterns/select_multiple_configs_from_config_group",isDocsHomePage:!1,title:"Selecting multiple configs from a Config Group",description:"Problem",source:"@site/docs/patterns/select_multiple_configs_from_config_group.md",slug:"/patterns/select_multiple_configs_from_config_group",permalink:"/docs/next/patterns/select_multiple_configs_from_config_group",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/patterns/select_multiple_configs_from_config_group.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1619125577,formattedLastUpdatedAt:"4/22/2021",sidebar:"docs",previous:{title:"Configuring Experiments",permalink:"/docs/next/patterns/configuring_experiments"},next:{title:"Specializing configuration",permalink:"/docs/next/patterns/specializing_config"}},l=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Example",id:"example",children:[]},{value:"Overriding packages",id:"overriding-packages",children:[]},{value:"Implementation considerations",id:"implementation-considerations",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{text:"Example application",to:"examples/patterns/multi-select",mdxType:"ExampleGithubLink"}),Object(o.b)("h3",{id:"problem"},"Problem"),Object(o.b)("p",null,"In some scenarios, one may need to select multiple configs from the same Config Group."),Object(o.b)("h3",{id:"solution"},"Solution"),Object(o.b)("p",null,"Use a list of config names as the value of the config group in the Defaults List or in the command line."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"In this example, we configure a server. The server can host multiple websites at the same time."),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text",metastring:'title="Config directory"',title:'"Config','directory"':!0},"\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 server\n    \u251c\u2500\u2500 apache.yaml\n    \u2514\u2500\u2500 site\n        \u251c\u2500\u2500 amazon.yaml\n        \u251c\u2500\u2500 fb.yaml\n        \u2514\u2500\u2500 google.yaml\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - server/apache\n\n\n\n\n\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {3,4}',title:'"server/apache.yaml"',"{3,4}":!0},"defaults:\n  - site:\n    - fb\n    - google\n\nhost: localhost\nport: 443\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/amazon.yaml"',title:'"server/site/amazon.yaml"'},"amazon:\n  domain: amazon.com\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/fb.yaml"',title:'"server/site/fb.yaml"'},"fb:\n  domain: facebook.com\n"))),Object(o.b)("div",{className:"col col--4"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/google.yaml"',title:'"server/site/google.yaml"'},"google:\n  domain: google.com\n")))),Object(o.b)("p",null,"Output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {3,5}',title:'"$',python:!0,'my_app.py"':!0,"{3,5}":!0},"server:\n  site:\n    fb:\n      domain: facebook.com\n    google:\n      domain: google.com\n  host: localhost\n  port: 443\n")),Object(o.b)("p",null,"Override the selected sites from the command line by passing a list. e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:"title=\"$ python my_app.py 'server/site=[google,amazon]'\" {3,5}",title:'"$',python:!0,"my_app.py":!0,"'server/site":"[google,amazon]'\"","{3,5}":!0},"server:\n  site:\n    google:\n      domain: google.com\n    amazon:\n      domain: amazon.com\n  host: localhost\n  port: 443\n")),Object(o.b)("h3",{id:"overriding-packages"},"Overriding packages"),Object(o.b)("p",null,"You can relocate the package of all the configs in the list. e.g:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {2}',title:'"server/apache.yaml"',"{2}":!0},"defaults:\n  - site@https:\n    - fb\n    - google\n\n\n"))),Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py" {2}',title:'"$',python:!0,'my_app.py"':!0,"{2}":!0},"server:\n  https:\n    fb:\n      domain: facebook.com\n    google:\n      domain: google.com\n")))),Object(o.b)("p",null,"When overriding the selected configs of config groups with overridden packages you need to use the package. e.g:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python my_app.py server/site@server.https=amazon"',title:'"$',python:!0,"my_app.py":!0,"server/site@server.https":'amazon"'},"server:\n  https:\n    amazon:\n      domain: amazon.com\n  host: localhost\n  port: 443\n")),Object(o.b)("h3",{id:"implementation-considerations"},"Implementation considerations"),Object(o.b)("p",null,"A nested list in the Defaults List is interpreted as a list of non-overridable configs:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/apache.yaml" {3,4}',title:'"server/apache.yaml"',"{3,4}":!0},"defaults:\n  - site:\n    - fb\n    - google\n"))),Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Equivalent to" {2,3}',title:'"Equivalent','to"':!0,"{2,3}":!0},"defaults:\n  - site/fb\n  - site/google\n\n")))),Object(o.b)("p",null,"All default package for all the configs in ",Object(o.b)("inlineCode",{parentName:"p"},"server/site")," is ",Object(o.b)("inlineCode",{parentName:"p"},"server.site"),".\nThis example uses an explicit nesting level inside each of the website configs to prevent them stepping over one another:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="server/site/amazon.yaml" {1}',title:'"server/site/amazon.yaml"',"{1}":!0},"amazon:\n  ...\n")))}p.isMDXComponent=!0},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=a,f=p["".concat(i,".").concat(g)]||p[g]||m[g]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},267:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},268:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(11),i=n(267),c=n(7),s=Object(a.createContext)({collectLink:function(){}}),l=n(269),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,p,m=e.isNavLink,g=e.to,f=e.href,d=e.activeClassName,b=e.isActive,v=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,y=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(l.b)().withBaseUrl,D=Object(a.useContext)(s),N=g||f,_=Object(i.a)(N),w=null==N?void 0:N.replace("pathname://",""),x=void 0!==w?(n=w,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(a.useRef)(!1),P=m?o.e:o.c,k=c.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&_&&window.docusaurus.prefetch(x),function(){k&&p&&p.disconnect()}}),[x,k,_]);var E=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,V=!x||!_||E;return x&&_&&!E&&!v&&D.collectLink(x),V?r.a.createElement("a",Object.assign({href:x},N&&!_&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(P,Object.assign({},y,{onMouseEnter:function(){A.current||(window.docusaurus.preload(x),A.current=!0)},innerRef:function(e){var t,n;k&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(x)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:x||""},m&&{isActive:b,activeClassName:d}))}},269:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(10),r=n(267);function o(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},270:function(e,t,n){try{e.exports=n(271)}catch(r){var a={};e.exports={useAllDocsData:function(){return a},useActivePluginAndVersion:function(){}}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var a=n(23),r=n(38),o=n(272);t.useAllDocsData=function(){return r.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=a.useLocation().pathname;return o.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=a.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,r)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return o.getActiveVersion(n,r)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return o.getActiveDocContext(n,r)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=a.useLocation().pathname;return o.getDocVersionSuggestions(n,r)}},272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(23);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,o,i=t.getActiveVersion(e,n),c=null==i?void 0:i.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:i,activeDoc:c,alternateDocVersions:c?(r=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),o=r.activeVersion!==a;return{latestDocSuggestion:o?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:o?a:void 0}}},273:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var a=n(3),r=n(0),o=n.n(r),i=n(268),c=n(10),s=n(270);function l(e){return o.a.createElement(i.a,Object(a.a)({},e,{to:(t=e.to,r=Object(s.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==r?void 0:r.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,r}function u(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(l,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);