(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{277:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,l(l({ref:t},s),{},{components:n})):a.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},278:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},279:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n(278),l=n(7),c=Object(r.createContext)({collectLink:function(){}}),s=n(280),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,b,p=e.isNavLink,d=e.to,m=e.href,f=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],O=e.autoAddBaseUrl,g=void 0===O||O,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),v=Object(s.b)().withBaseUrl,w=Object(r.useContext)(c),N=d||m,k=Object(o.a)(N),x=null==N?void 0:N.replace("pathname://",""),C=void 0!==x?(n=x,g&&function(e){return e.startsWith("/")}(n)?v(n):n):void 0,_=Object(r.useRef)(!1),H=p?i.e:i.c,P=l.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!P&&k&&window.docusaurus.prefetch(C),function(){P&&b&&b.disconnect()}}),[C,P,k]);var T=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,q=!C||!k||T;return C&&k&&!T&&!y&&w.collectLink(C),q?a.a.createElement("a",Object.assign({href:C},N&&!k&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(H,Object.assign({},j,{onMouseEnter:function(){_.current||(window.docusaurus.preload(C),_.current=!0)},innerRef:function(e){var t,n;P&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(C)},(b=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(b.unobserve(t),b.disconnect(),n())}))}))).observe(t))},to:C||""},p&&{isActive:h,activeClassName:f}))}},280:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(10),a=n(278);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,l=void 0!==o&&o,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(277)),o=n(280),l=n(279),c={id:"intro",title:"Getting started",sidebar_label:"Getting started"},s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started",description:"Introduction",source:"@site/docs/intro.md",slug:"/intro",permalink:"/docs/next/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/intro.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1617668163,formattedLastUpdatedAt:"4/6/2021",sidebar_label:"Getting started",sidebar:"docs",next:{title:"Terminology",permalink:"/docs/next/terminology"}},u=[{value:"Introduction",id:"introduction",children:[{value:"Key features:",id:"key-features",children:[]}]},{value:"Versions",id:"versions",children:[]},{value:"Quick start guide",id:"quick-start-guide",children:[{value:"Installation",id:"installation",children:[]},{value:"Basic example",id:"basic-example",children:[]},{value:"Composition example",id:"composition-example",children:[]},{value:"Multirun",id:"multirun",children:[]}]},{value:"Other stuff",id:"other-stuff",children:[{value:"Community",id:"community",children:[]},{value:"Citing Hydra",id:"citing-hydra",children:[]}]}],b={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Hydra is an open-source Python framework that simplifies the development of research and other complex applications.\nThe key feature is the ability to dynamically create a hierarchical configuration by composition and override it through config files and the command line.\nThe name Hydra comes from its ability to run multiple similar jobs - much like a Hydra with multiple heads."),Object(i.b)("h3",{id:"key-features"},"Key features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hierarchical configuration composable from multiple sources"),Object(i.b)("li",{parentName:"ul"},"Configuration can be specified or overridden from the command line"),Object(i.b)("li",{parentName:"ul"},"Dynamic command line tab completion"),Object(i.b)("li",{parentName:"ul"},"Run your application locally or launch it to run remotely"),Object(i.b)("li",{parentName:"ul"},"Run multiple jobs with different arguments with a single command")),Object(i.b)("h2",{id:"versions"},"Versions"),Object(i.b)("p",null,"Hydra supports Linux, Mac and Windows."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null}),Object(i.b)("th",{parentName:"tr",align:null},"Version"),Object(i.b)("th",{parentName:"tr",align:null},"Docs"),Object(i.b)("th",{parentName:"tr",align:null},"Release notes"),Object(i.b)("th",{parentName:"tr",align:null},"Python Version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"\u25ba"),Object(i.b)("td",{parentName:"tr",align:null},"1.0 (Stable)"),Object(i.b)("td",{parentName:"tr",align:null},"1.0 Docs"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/hydra-1.0.0rc1"},"Release notes")),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("strong",{parentName:"td"},"3.6+"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"0.11"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)(l.a,{to:Object(o.a)("/docs/0.11/intro"),mdxType:"Link"},Object(i.b)("strong",{parentName:"td"},"Switch to 0.11 Docs"))),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"td",href:"https://github.com/facebookresearch/hydra/releases/tag/0.11.0"},"Release notes")),Object(i.b)("td",{parentName:"tr",align:null},"2.7, 3.5+")))),Object(i.b)("h2",{id:"quick-start-guide"},"Quick start guide"),Object(i.b)("p",null,"This guide will show you some of the most important features of Hydra.\nRead the ",Object(i.b)("a",{parentName:"p",href:"/docs/next/tutorials/basic/your_first_app/simple_cli"},"tutorial")," to gain a deeper understanding."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-core --upgrade\n")),Object(i.b)("h3",{id:"basic-example"},"Basic example"),Object(i.b)("p",null,"Config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),Object(i.b)("p",null,"Application:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python",metastring:'{4-6} title="my_app.py"',"{4-6}":!0,title:'"my_app.py"'},'import hydra\nfrom omegaconf import DictConfig, OmegaConf\n\n@hydra.main(config_name="config")\ndef my_app(cfg : DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("p",null,"You can learn more about OmegaConf ",Object(i.b)("a",{parentName:"p",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation"},"here")," later."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(i.b)("p",null,"You can override values in the loaded config from the command line:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5}","{4-5}":!0},"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),Object(i.b)("h3",{id:"composition-example"},"Composition example"),Object(i.b)("p",null,"You may want to alternate between two different databases. To support this create a ",Object(i.b)("inlineCode",{parentName:"p"},"config group")," named db,\nand place one config file for each alternative inside:\nThe directory structure of our application now looks like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 postgresql.yaml\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(i.b)("p",null,"Here is the new config:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"defaults")," is a special directive telling Hydra to use db/mysql.yaml when composing the configuration object.\nThe resulting cfg object is a composition of configs from defaults with configs specified in your ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml"),"."),Object(i.b)("p",null,"You can now choose which database configuration to use and override values from the command line: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgres_user\n")),Object(i.b)("p",null,"You can have as many config groups as you need."),Object(i.b)("h3",{id:"multirun"},"Multirun"),Object(i.b)("p",null,"You can run your function multiple times with different configuration easily with the ",Object(i.b)("inlineCode",{parentName:"p"},"--multirun|-m")," flag."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"$ python my_app.py --multirun db=mysql,postgresql\n[HYDRA] Sweep output dir : multirun/2020-01-09/01-16-29\n[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : db=mysql\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n\n[HYDRA]        #1 : db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgres_user\n")),Object(i.b)("p",null,"There is a whole lot more to Hydra. Read the ",Object(i.b)("a",{parentName:"p",href:"/docs/next/tutorials/basic/your_first_app/simple_cli"},"tutorial")," to learn more."),Object(i.b)("h2",{id:"other-stuff"},"Other stuff"),Object(i.b)("h3",{id:"community"},"Community"),Object(i.b)("p",null,"Ask questions in the chat or StackOverflow (Use the tag #fb-hydra):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://hydra-framework.zulipchat.com"},"Zulip Chat")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/fb-hydra"},"StackOverflow"))),Object(i.b)("p",null,"Follow Hydra on Twitter and Facebook:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.facebook.com/Hydra-Framework-109364473802509/"},"Facebook page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://twitter.com/Hydra_Framework"},"Twitter"))),Object(i.b)("h3",{id:"citing-hydra"},"Citing Hydra"),Object(i.b)("p",null,"If you use Hydra in your research please use the following BibTeX entry:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"@Misc{Yadan2019Hydra,\n  author =       {Omry Yadan},\n  title =        {Hydra - A framework for elegantly configuring complex applications},\n  howpublished = {Github},\n  year =         {2019},\n  url =          {https://github.com/facebookresearch/hydra}\n}\n")))}p.isMDXComponent=!0}}]);