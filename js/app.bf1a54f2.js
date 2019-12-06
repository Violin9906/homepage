(function(t){function e(e){for(var r,n,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)n=o[u],s[n]&&v.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({astronomy:"astronomy",contact:"contact",pcb:"pcb",program:"program"}[t]||t)+"."+{astronomy:"f894b0e0",contact:"de640ea4",pcb:"baac741a",program:"e260b076"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={astronomy:1,contact:1,pcb:1,program:1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise(function(e,a){for(var r="css/"+({astronomy:"astronomy",contact:"contact",pcb:"pcb",program:"program"}[t]||t)+"."+{astronomy:"5d156545",contact:"3098290e",pcb:"0292bf88",program:"94bb0971"}[t]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var v=document.getElementsByTagName("style");for(o=0;o<v.length;o++){l=v[o],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],p.parentNode.removeChild(p),a(i)},p.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){n[t]=0}));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,a){r=s[t]=[e,a]});e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+n+")");i.type=r,i.request=n,a[1](i)}s[t]=void 0}};var v=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v("\n    |\n    "),a("router-link",{attrs:{to:"/program"}},[t._v("C Programming")]),t._v("\n    |\n    "),a("router-link",{attrs:{to:"/astronomy"}},[t._v("Astronomy")]),t._v("\n    |\n    "),a("router-link",{attrs:{to:"/pcb"}},[t._v("Altium Designer")]),t._v("\n    |\n    "),a("router-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1),a("router-view"),a("hr"),a("div",{attrs:{id:"footer"}},[a("ul",[a("li",[a("a",{attrs:{href:"//user.qzone.qq.com/2423431728"}},[a("svg",{staticClass:"icon",attrs:{t:"1567931550471",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1116",width:"4vh",height:"4vh"}},[a("path",{attrs:{d:"M512 32c-265.094 0-479.98 214.895-479.98 480s214.885 480 479.98 480 479.98-214.895 479.98-480-214.885-480-479.98-480zM776.268 661.6c-12.397 11.571-33.679-1.033-54.135-29.341-8.885 23.968-20.455 46.077-33.885 65.915 28.927 10.331 47.524 26.449 47.524 44.633 0 31.407-55.582 56.823-124.179 56.823-40.704 0-76.657-8.885-99.383-22.729-22.522 13.844-58.681 22.729-99.383 22.729-68.599 0-124.179-25.415-124.179-56.823 0-17.977 18.596-34.299 47.524-44.633-13.637-19.837-25.001-41.946-33.885-65.915-20.455 28.102-41.737 40.913-54.135 29.341-16.943-15.91-10.538-72.114 14.669-125.423 5.785-12.191 11.984-23.142 18.389-32.647 3.513-154.972 105.583-279.363 230.795-279.363h0.413c125.212 0 227.283 124.183 230.795 279.363 6.406 9.505 12.604 20.457 18.389 32.647 25.003 53.31 31.615 109.513 14.672 125.423z","p-id":"1117",fill:"#1e2d4c"}})])])]),a("li",[a("a",{attrs:{href:"//github.com/Violin9906"}},[a("svg",{staticClass:"icon",attrs:{t:"1567931985956",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1972",width:"4vh",height:"4vh"}},[a("path",{attrs:{d:"M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667","p-id":"1973",fill:"#1e2d4c"}})])])]),a("li",[a("a",{attrs:{href:"mailto:violinwang@mail.ustc.edu.cn"}},[a("svg",{staticClass:"icon",attrs:{t:"1567932058801",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3461",width:"4vh",height:"4vh"}},[a("path",{attrs:{d:"M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z","p-id":"3462",fill:"#1e2d4c"}}),a("path",{attrs:{d:"M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z","p-id":"3463",fill:"#1e2d4c"}})])])]),a("li",[a("a",{attrs:{href:"//space.bilibili.com/387917327"}},[a("svg",{staticClass:"icon",attrs:{t:"1569080450196",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2080",width:"4vh",height:"4vh"}},[a("path",{attrs:{d:"M987.88876907 942.68845653c-8.47679467 0.032-17.050656 0.7712-25.430384-0.128-30.76051413-3.33866453-53.17330027 31.5946464-63.83356054 68.42449067-9.5999936 33.16797973-46.04370453 50.12263573-78.85861653 46.71890347-37.8890432-3.88586453-62.96636053-25.55945067-72.63142187-59.81862934-5.81226347-20.71145387-23.37598507-36.7658432-42.70504-36.6378432-133.34925013 0.7712-251.96037547 0.38613333-385.30855893 0-15.34932373-0.032-31.72371307 14.67412373-36.21971093 32.75197974-9.5999936 38.78717547-42.57597333 63.4154272-79.08474987 64.02555946-37.79197653 0.64213333-70.63995627-23.34398507-81.6532832-63.60849386-4.62293013-16.85758933-12.4266592-52.9162336-28.54398187-52.0170336-20.74345387 1.1562656-41.61384107 0.57813333-62.42129386 0.22506666-22.73278613-0.41706667-32.78291307-9.5359936-32.78291307-31.1135808 0.16-219.4014624 0.48213333-438.77092587 1.0602656-658.1713216 0.064-22.6698528 9.4719936-30.31144747 35.60851093-30.34344853 107.14766613-0.128 214.29533227-0.064 321.44406614-0.064h22.41171946c0.67413333-1.83039893 1.38133227-3.69279787 2.0554656-5.55519573-24.88531733-13.06879147-49.76956907-26.13651733-74.6218208-39.2373088-41.25970773-21.7706528-82.58448213-43.47517333-123.7801888-65.34182614-16.69652267-8.86186133-23.63305173-22.37971947-14.19199146-39.1413088 9.5359936-16.95358933 25.30131733-17.98078827 41.77384106-9.31199466 96.74447253 51.02183467 193.52094613 101.97860267 289.912352 153.54657066 24.69225173 13.22879147 69.13062293 5.29813013 85.02394667-17.050656 49.2885024-69.48262293 98.54393813-138.96738027 147.83137493-208.48413653 1.73333227-2.4394656 3.40266453-4.9759968 5.2010624-7.384528C752.2078496-33.90933333 768.16624-39.0143968 782.67929707-27.87200427c16.79358933 12.8757248 13.9029248 28.15998293 3.1146656 43.47517334-20.00425387 28.35198187-40.00744213 56.6719648-59.979696 85.02501333-27.6778496 39.3013088-55.3236992 78.6346176-86.05221334 122.3039232h28.70504854c106.41060053 0 212.78706667-0.032 319.16460053 0.032 32.4938464 0.032 37.50397653 4.94506347 37.53597653 36.53971093 0.32 215.6446656 0.60906667 431.28933013 0.80213334 646.93292907 0.032 30.8255808-5.6511968 36.05971093-38.0810432 36.25171093z m-159.90389974 64.5076928c17.018656-1.1242656 25.10931733-46.2047712 30.27944747-63.2554272h-64.34662613c6.32532907 18.75198827 15.0911904 64.5396928 34.06717866 63.2554272z m-627.08974186 0.032c18.84798827 1.1562656 27.7418496-44.40743893 33.3610464-63.12636053h-63.3834272c4.30293013 17.62772267 13.16479147 62.0991616 30.0223808 63.12529387z m760.406992-720.2704832H62.24774827v610.07215147h899.0543712V286.95766613zM126.4663744 411.60505493c0.064-29.7333152 14.41705813-58.79249707 44.34237227-58.82449706 228.3923904-0.032 438.6098592-1.66933227 667.0022496-1.60533227 30.3743808 0 59.176496 31.0175808 59.272496 60.42982933 0.38613333 141.8580448-0.224 251.02917653 0 392.88615467 0.064 30.31144747-27.42078293 60.39676267-59.272496 60.42982827-113.85912853 0.064-212.2089344 0-326.03606294 0-113.82606187 0-212.1769344 0.064-326.03499626 0-33.1370464-0.032-59.30662933-27.77491627-59.27356267-60.42982827 0.16-141.15191147-0.256-251.7353088 0-392.88615467z m715.935552 388.48722347c0-134.1193824-4.59093013-257.1945056-4.59093013-388.48722347H185.7388704c0 133.34818347-0.7712 256.35824-0.77119893 388.48722347h657.43318826zM370.75208853 489.82367253c1.86239893-0.8352 4.17386453-0.67413333 11.94452587-1.79839893 4.5279968 4.43093013 15.95732373 10.53226027 17.178656 18.17385493 1.3802656 8.92586133-3.4037312 24.49918507-10.3071936 27.99998294-42.19090667 21.4154528-85.53808 40.7135744-128.98125333 59.62662933-13.22985813 5.74613013-27.77598293 1.4122656-31.1466464-12.7157248-2.2154656-9.24799467 1.76639893-26.81171627 8.41279466-30.15038187 43.47517333-21.9946528 88.39567787-41.1647744 132.8991168-61.1359616z m13.26079147 143.1423104c8.219728-0.28906667 18.84798827 11.07732693 24.78931733 19.74718827 4.75093013 6.9034624 2.7605312 17.94878827 6.10026347 26.29651627 6.32532907 15.8943904 18.23785493 31.01864747 35.8335776 27.29278293 13.0037248-2.7285312 24.88531733-15.73332373 34.645312-26.52158293 4.8159968-5.33013013 4.01386453-15.86132373 5.17013013-24.1141184 2.1834656-15.54132373 11.36639253-25.10931733 26.7146496-24.72425174 14.0309248 0.35306667 23.14985173 8.82986133 24.94931734 24.0181184 1.15519893 9.5999936 1.4122656 21.51251947 7.1594624 27.90291627 9.18399467 10.21012693 22.41171947 22.53971947 34.261312 22.92585173 10.7231936 0.352 23.75998507-12.6186592 32.20477973-22.63678506 5.6191968-6.6474624 5.29813013-18.3989216 7.0634624-27.99998294 2.85866453-15.3151904 11.72052587-24.62718507 27.5818496-23.4069184 15.76532373 1.2202656 24.0501184 11.36639253 23.43998507 27.19678294-1.50933227 40.16744107-17.46772267 72.82235413-55.0996992 90.74021013-35.0623776 16.72852267-67.81435733 9.5359936-96.51940587-16.18345707-1.54133227-1.3802656-3.4037312-2.37653227-5.33013013-3.69279786-8.73386133 6.06932907-16.82558933 13.10079147-26.10451734 17.94878933-30.34344747 15.82932373-60.71889493 14.51412373-88.7178112-4.9439968-30.88851413-21.51358613-44.66343893-52.8522336-41.90184-89.29594453 0.57706667-7.89866133 15.2191904-20.26025387 23.75998507-20.54932054z m223.99346027-145.00470933c7.44852907-13.03679147 20.6783872-16.60052267 33.03997866-9.5679936 49.09436907 27.96691627 97.64367253 56.8959648 145.87190934 86.24421227 5.7791968 3.4997312 8.47679467 11.91252587 10.4991936 14.9311904 0.54613333 23.85705173-19.20105493 36.82877653-37.37490987 26.585584-48.58130347-27.38878293-96.35940693-56.22289813-144.0735104-85.15194667-12.5866592-7.6426624-15.2511904-20.3263872-7.96266133-33.0410464z",fill:"#1e2d4c","p-id":"2081"}})])])]),a("li",[a("a",{attrs:{href:"//www.zhihu.com/people/wang-ruo-lin-88-45"}},[a("svg",{staticClass:"icon",attrs:{t:"1567932134306",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3975",width:"4vh",height:"4vh"}},[a("path",{attrs:{d:"M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z",fill:"#1e2d4c","p-id":"3976"}})])])])]),a("div",{staticClass:"copyright"},[t._v("DESIGNED BY VIOLIN")])])],1)},s=[],i=(a("7c55"),a("2877")),o={},c=Object(i["a"])(o,n,s,!1,null,null,null),l=c.exports,u=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h2",[t._v("王若麟的个人主页")]),a("hr"),a("AboutMe"),a("TechStack"),a("MyProjects")],1)},p=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutMe"},[a("h3",[t._v("/* ABOUT ME */")]),a("ul",[a("li",[t._v("王若麟")]),a("li",[t._v("中国科学技术大学 化学物理系转自动化系 PB1703")]),a("li",[t._v("现任中国科大学生天文爱好者协会会长")]),a("li",[a("span",{staticClass:"badge badge-dark"},[t._v("钢琴")]),a("span",{staticClass:"badge badge-dark"},[t._v("前端")]),a("span",{staticClass:"badge badge-dark"},[t._v("看星星")])]),a("li",[a("span",{staticClass:"badge badge-dark"},[a("del",[t._v("Overwatch")])]),a("span",{staticClass:"badge badge-dark"},[t._v("Minecraft")]),a("span",{staticClass:"badge badge-dark"},[t._v("Kerbal Space Program")]),a("span",{staticClass:"badge badge-dark"},[t._v("Arknights")])]),a("li",[a("span",{staticClass:"badge badge-dark"},[t._v("SOLO")])])])])}],m={name:"AboutMe"},f=m,g=(a("da20"),Object(i["a"])(f,d,h,!1,null,"034aeb37",null)),b=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"aboutMe"},[a("h3",[t._v("/* TECHNOLOGY STACK */")]),a("ul",[a("li",[t._v("\n      C\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"80%"},attrs:{role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",[t._v("\n      JavaScript\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"60%"},attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",[t._v("\n      Vue.js\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"50%"},attrs:{role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",[t._v("\n      PHP\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"35%"},attrs:{role:"progressbar","aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",[t._v("\n      Express.js\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"30%"},attrs:{role:"progressbar","aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",[t._v("\n      C++\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"25%"},attrs:{role:"progressbar","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",[t._v("\n      Node.js\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"20%"},attrs:{role:"progressbar","aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100"}})])]),a("li",[t._v("\n      Python\n      "),a("div",{staticClass:"progress"},[a("div",{staticClass:"progress-bar",staticStyle:{width:"10%"},attrs:{role:"progressbar","aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100"}})])])])])}],y={name:"AboutMe"},C=y,x=(a("e279"),Object(i["a"])(C,_,w,!1,null,"887c9dbc",null)),M=x.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"myProjects"},[a("h3",[t._v("/* MY PROJECTS */")]),a("div",{staticClass:"projectDetail"},[t._v("\n    [{"),a("br"),t._v('\n    "name": "'),a("a",{attrs:{href:"//ustcaaa.club"}},[t._v("ustcaaa.club")]),t._v('",'),a("br"),t._v('\n    "description": "A website for Association of Amateur Astronomers of USTC.",'),a("br"),t._v('\n    "state": "'),a("span",{staticClass:"text-success"},[t._v("complete")]),t._v('",'),a("br"),t._v('\n    "repository": "'),a("a",{attrs:{href:"//github.com/Violin9906/ustcaaa"}},[t._v("Violin9906/ustcaaa")]),t._v('"'),a("br"),t._v("\n    },{"),a("br"),t._v('\n    "name": "'),a("a",{attrs:{href:"//home.ustc.edu.cn/~violinwang/phex"}},[t._v("PHEX")]),t._v('",'),a("br"),t._v('\n    "description: "Auto Calculator for USTC Physics Experiments.",'),a("br"),t._v('\n    "state": "'),a("span",{staticClass:"text-warning"},[t._v("developing(gugugu~)")]),t._v('",'),a("br"),t._v('\n    "repository": "'),a("a",{attrs:{href:"//dev.tencent.com/u/violinwang/p/phex/git"}},[t._v("violinwang/phex")]),t._v('"'),a("br"),t._v("\n    },{"),a("br"),t._v('\n    "name": "My-IME",'),a("br"),t._v('\n    "description": "A Shuangpin IME for Chrome OS, based on Baidu Cloud Input API.",'),a("br"),t._v('\n    "state": "'),a("span",{staticClass:"text-danger"},[t._v("pause")]),t._v('",'),a("br"),t._v('\n    "repository": "'),a("a",{attrs:{href:"//github.com/Violin9906/my-ime"}},[t._v("Violin9906/my-ime")]),t._v('"'),a("br"),t._v("\n    }]\n  ")])])}],A={name:"MyProjects"},O=A,j=(a("7eee"),Object(i["a"])(O,S,E,!1,null,"c4a5bb4e",null)),k=j.exports,P={name:"home",components:{AboutMe:b,TechStack:M,MyProjects:k}},z=P,T=Object(i["a"])(z,v,p,!1,null,null,null),B=T.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notFound"},[a("h1",[t._v("404 Not Found")]),a("hr"),t._v("\n  Vue-Router 3.0.3\n")])}],N={},V=Object(i["a"])(N,$,L,!1,null,null,null),H=V.exports;r["a"].use(u["a"]);var I=new u["a"]({routes:[{path:"/",name:"home",component:B},{path:"/contact",name:"contact",component:function(){return a.e("contact").then(a.bind(null,"b8fa"))}},{path:"/program",name:"program",component:function(){return a.e("program").then(a.bind(null,"6ec4"))}},{path:"/astronomy",name:"astronomy",component:function(){return a.e("astronomy").then(a.bind(null,"49bf"))}},{path:"/pcb",name:"pcb",component:function(){return a.e("pcb").then(a.bind(null,"fc0a"))}},{path:"*",name:"notFound",component:H}]});r["a"].config.productionTip=!1,new r["a"]({router:I,render:function(t){return t(l)}}).$mount("#app")},"5c48":function(t,e,a){},"71e5":function(t,e,a){},"7c55":function(t,e,a){"use strict";var r=a("5c48"),n=a.n(r);n.a},"7eee":function(t,e,a){"use strict";var r=a("b820"),n=a.n(r);n.a},ad78:function(t,e,a){},b820:function(t,e,a){},da20:function(t,e,a){"use strict";var r=a("71e5"),n=a.n(r);n.a},e279:function(t,e,a){"use strict";var r=a("ad78"),n=a.n(r);n.a}});