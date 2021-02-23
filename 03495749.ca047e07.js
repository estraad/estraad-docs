(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(b,s(s({ref:t},c),{},{components:n})):i.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),o=(n(0),n(107)),a={id:"video",title:"Video Formats and Specifications"},s={unversionedId:"video",id:"video",isDocsHomePage:!1,title:"Video Formats and Specifications",description:"This page describes formats and specifications for using Videos in the Estraad platform.",source:"@site/docs/video.md",slug:"/video",permalink:"/video",editUrl:"https://github.com/estraad/estraad-docs/edit/master/website/docs/video.md",version:"current",sidebar:"someSidebar",previous:{title:"Stickynotes",permalink:"/stickynotes"}},l=[{value:"Inside Rooms",id:"inside-rooms",children:[]},{value:"Outside rooms",id:"outside-rooms",children:[]}],c={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page describes formats and specifications for using Videos in the Estraad platform."),Object(o.b)("h2",{id:"inside-rooms"},"Inside Rooms"),Object(o.b)("h4",{id:"video"},"Video"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"MP4 File format"),Object(o.b)("li",{parentName:"ul"},"Combined size of videos must not exceed 40mb. The end user devices will determine the maximum size, for example if end users are expected to use 4G and mobile devices."),Object(o.b)("li",{parentName:"ul"},"We support both flat and 360 Equirectangular video.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"For flat video, 16:9 Aspect Ratio prefered"))),Object(o.b)("li",{parentName:"ul"},"We can adapt the audio volume as positional or stereo, as well as customize distance models for audio rolloff.")),Object(o.b)("h4",{id:"hls-live-streaming"},"HLS Live Streaming"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We provide RTMP endpoints and an M3U8 playlist."),Object(o.b)("li",{parentName:"ul"},"Input for RTMP stream should be 1080p in as high quality as possible.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Using 4K will output to x265 using MediaLive, which is not yet supported in our HLS player implementation. The quality gains from using 4K is not that great as resolution in 360 space is perceived differently."),Object(o.b)("li",{parentName:"ul"},"Using as high quality as possible allows us to enable Adaptive Bitrate Streaming, that adapts the video quality to the end users network performance.")))),Object(o.b)("h2",{id:"outside-rooms"},"Outside rooms"),Object(o.b)("p",null,"For example on websites, landing pages etc."),Object(o.b)("h4",{id:"video-on-demand"},"Video On Demand"),Object(o.b)("p",null,"We use Vimeo as a video delivery partner, that supports just about any video format."),Object(o.b)("p",null,"Please see the Vimeo documentation here:\n",Object(o.b)("a",{parentName:"p",href:"https://vimeo.zendesk.com/hc/en-us/articles/229838988-Preparing-to-upload#h_01EDWFFX7XE84PSAJE5JW87B7R"},"https://vimeo.zendesk.com/hc/en-us/articles/229838988-Preparing-to-upload#h_01EDWFFX7XE84PSAJE5JW87B7R")),Object(o.b)("h4",{id:"hls-live-streaming-1"},"HLS Live Streaming"),Object(o.b)("p",null,"We have a very reliable and performant implementation for live streaming. We can support any quality coming in from an RTMP stream with our VideoJs / HLSJs implementation."))}u.isMDXComponent=!0}}]);