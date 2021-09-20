(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(110)),i={id:"connectivity",title:"Connectivity"},a={unversionedId:"connectivity",id:"connectivity",isDocsHomePage:!1,title:"Connectivity",description:"Estraad uses modern technologies that combine voice/video, player data networking and 3D graphics.",source:"@site/docs/connectivity.md",slug:"/connectivity",permalink:"/connectivity",version:"current",sidebar:"someSidebar",previous:{title:"Security & Data",permalink:"/security"}},l=[],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Estraad uses modern technologies that combine voice/video, player data networking and 3D graphics. "),Object(c.b)("p",null,"In order for clients to connect to the platform, a network that supports the following is required:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Allow for WebSocket connections"),Object(c.b)("li",{parentName:"ul"},"Allow for ports 80 and 443 via TLS. "),Object(c.b)("li",{parentName:"ul"},"Allow for ports 49152-60999 on UDP and TCP.  You will also need to open port 19302 on UDP and TCP.")),Object(c.b)("p",null,"If your company does not support this, please try another network or use a VPN to connect without network restrictions."))}p.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,b=s["".concat(i,".").concat(d)]||s[d]||f[d]||c;return n?o.a.createElement(b,a(a({ref:t},u),{},{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);