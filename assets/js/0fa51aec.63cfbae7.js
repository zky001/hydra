(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2360],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2363:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"object_instantiation_changes",title:"Object instantiation changes",hide_title:!0},c=void 0,l={unversionedId:"upgrades/0.11_to_1.0/object_instantiation_changes",id:"version-1.1/upgrades/0.11_to_1.0/object_instantiation_changes",isDocsHomePage:!1,title:"Object instantiation changes",description:"Object instantiation changes",source:"@site/versioned_docs/version-1.1/upgrades/0.11_to_1.0/object_instantiation_changes.md",sourceDirName:"upgrades/0.11_to_1.0",slug:"/upgrades/0.11_to_1.0/object_instantiation_changes",permalink:"/docs/upgrades/0.11_to_1.0/object_instantiation_changes",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.1/upgrades/0.11_to_1.0/object_instantiation_changes.md",version:"1.1",lastUpdatedBy:"Igor Gadelha",lastUpdatedAt:1629825634,formattedLastUpdatedAt:"8/24/2021",frontMatter:{id:"object_instantiation_changes",title:"Object instantiation changes",hide_title:!0},sidebar:"version-1.1/docs",previous:{title:"strict flag mode deprecation",permalink:"/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated"}},d=[{value:"Object instantiation changes",id:"object-instantiation-changes",children:[]},{value:"Hydra configuration",id:"hydra-configuration",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"object-instantiation-changes"},"Object instantiation changes"),(0,i.kt)("p",null,"Hydra 1.0.0 is deprecating ObjectConf and the corresponding config structure to a simpler one without the params node.\nThis removes a level of nesting from command line and configs overrides."),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Hydra 0.11"',title:'"Hydra','0.11"':!0},"class: my_app.MySQLConnection\nparams:\n  host: localhost\n  user: root\n  password: 1234\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Hydra 1.0"',title:'"Hydra','1.0"':!0},"_target_: my_app.MySQLConnection\nhost: localhost\nuser: root\npassword: 1234\n\n")))),(0,i.kt)("h2",{id:"hydra-configuration"},"Hydra configuration"),(0,i.kt)("p",null,"Hydra plugins are configured using the same mechanism.\nThis means that this change will effect how all plugins are configured and overridden.\nThis is a breaking change for code overriding configs in such plugins, but luckily it's easy to fix."),(0,i.kt)("p",null,"As an example, a Sweeper plugin override will change as follows:"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Hydra 0.11"',script:!0,title:'"Hydra','0.11"':!0},"hydra.sweeper.params.max_batch_size=10\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'script title="Hydra 1.0"',script:!0,title:'"Hydra','1.0"':!0},"hydra.sweeper.max_batch_size=10\n")))))}u.isMDXComponent=!0}}]);