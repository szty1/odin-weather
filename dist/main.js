(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>v});var r=n(81),a=n.n(r),i=n(645),o=n.n(i),u=n(667),s=n.n(u),c=new URL(n(117),n.b),d=new URL(n(563),n.b),l=new URL(n(467),n.b),f=o()(a()),m=s()(c),h=s()(d),g=s()(l);f.push([t.id,`@font-face {\n  font-family: "Nunito";\n  src: url(${m});\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "Nunito";\n  src: url(${h});\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "Nunito";\n  src: url(${g});\n  font-weight: 1000;\n  font-style: normal;\n}\n\nbody {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  font-family: "Nunito";\n  font-weight: 600;\n  display: flex;\n}\n\n.content {\n  width: 100%;\n  display: grid;\n  grid-template-rows: 70px 1fr 40px;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 48, 104);\n  padding: 0 30px 0 30px;\n}\n\n.header input {\n  padding: 5px;\n  font-weight: bold;\n  font-size: 16px;\n  border: none;\n  border-radius: 4px;\n  margin: 0 5px 5px 0;\n  width: 300px;\n}\n\n.header button {\n  padding: 5px 20px;\n  font-weight: bold;\n  font-size: 16px;\n  background-color: rgb(57, 137, 228);\n  color: #ffffff;\n  border: none;\n  border-radius: 4px;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 48, 104);\n}\n\n.footer span {\n  color: #ffffff99;\n}\n\n`,""]);const v=f},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,i){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(r)for(var u=0;u<this.length;u++){var s=this[u][0];null!=s&&(o[s]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},o=[],u=0;u<t.length;u++){var s=t[u],c=r.base?s[0]+r.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var f=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var h=a(m,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:h,references:1})}o.push(l)}return o}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var i=r(t=t||[],a=a||{});return function(t){t=t||[];for(var o=0;o<i.length;o++){var u=n(i[o]);e[u].references--}for(var s=r(t,a),c=0;c<i.length;c++){var d=n(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},467:(t,e,n)=>{t.exports=n.p+"969e95ce4a719e43f654.ttf"},117:(t,e,n)=>{t.exports=n.p+"99a3b019e7727ac19479.ttf"},563:(t,e,n)=>{t.exports=n.p+"77c1e330694154d3efed.ttf"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!t;)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),i=n(569),o=n.n(i),u=n(565),s=n.n(u),c=n(216),d=n.n(c),l=n(589),f=n.n(l),m=n(890),h={};function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function v(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function p(t){v(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===g(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function w(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function y(t){v(1,arguments);var e=p(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function b(t){v(1,arguments);var e=p(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=y(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=y(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}h.styleTagTransform=f(),h.setAttributes=s(),h.insert=o().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),e()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var T={};function M(){return T}function C(t,e){var n,r,a,i,o,u,s,c;v(1,arguments);var d=M(),l=w(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.weekStartsOn)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:d.weekStartsOn)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=p(t),m=f.getUTCDay(),h=(m<l?7:0)+m-l;return f.setUTCDate(f.getUTCDate()-h),f.setUTCHours(0,0,0,0),f}function x(t,e){var n,r,a,i,o,u,s,c;v(1,arguments);var d=p(t),l=d.getUTCFullYear(),f=M(),m=w(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(s=f.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,m),h.setUTCHours(0,0,0,0);var g=C(h,e),y=new Date(0);y.setUTCFullYear(l,0,m),y.setUTCHours(0,0,0,0);var b=C(y,e);return d.getTime()>=g.getTime()?l+1:d.getTime()>=b.getTime()?l:l-1}function D(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const S=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return D("yy"===e?r%100:r,e.length)},k=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):D(n+1,2)},U=function(t,e){return D(t.getUTCDate(),e.length)},N=function(t,e){return D(t.getUTCHours()%12||12,e.length)},P=function(t,e){return D(t.getUTCHours(),e.length)},E=function(t,e){return D(t.getUTCMinutes(),e.length)},W=function(t,e){return D(t.getUTCSeconds(),e.length)},Y=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return D(Math.floor(r*Math.pow(10,n-3)),e.length)};var _={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return S(t,e)},Y:function(t,e,n,r){var a=x(t,r),i=a>0?a:1-a;return"YY"===e?D(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):D(i,e.length)},R:function(t,e){return D(b(t),e.length)},u:function(t,e){return D(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return D(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return D(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return k(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return D(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var a=function(t,e){v(1,arguments);var n=p(t),r=C(n,e).getTime()-function(t,e){var n,r,a,i,o,u,s,c;v(1,arguments);var d=M(),l=w(null!==(n=null!==(r=null!==(a=null!==(i=null==e?void 0:e.firstWeekContainsDate)&&void 0!==i?i:null==e||null===(o=e.locale)||void 0===o||null===(u=o.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:d.firstWeekContainsDate)&&void 0!==r?r:null===(s=d.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=x(t,e),m=new Date(0);return m.setUTCFullYear(f,0,l),m.setUTCHours(0,0,0,0),C(m,e)}(n,e).getTime();return Math.round(r/6048e5)+1}(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):D(a,e.length)},I:function(t,e,n){var r=function(t){v(1,arguments);var e=p(t),n=y(e).getTime()-function(t){v(1,arguments);var e=b(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),y(n)}(e).getTime();return Math.round(n/6048e5)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):D(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):U(t,e)},D:function(t,e,n){var r=function(t){v(1,arguments);var e=p(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/864e5)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):D(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return D(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return D(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return D(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return N(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):P(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):D(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):E(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):W(t,e)},S:function(t,e){return Y(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return O(a);case"XXXX":case"XX":return q(a);default:return q(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return O(a);case"xxxx":case"xx":return q(a);default:return q(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+L(a,":");default:return"GMT"+q(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+L(a,":");default:return"GMT"+q(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return D(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return D((r._originalDate||t).getTime(),e.length)}};function L(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+D(i,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+D(Math.abs(t)/60,2):q(t,e)}function q(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+D(Math.floor(a/60),2)+n+D(a%60,2)}const F=_;var j=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},$=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const H={p:$,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return j(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",j(a,e)).replace("{{time}}",$(i,e))}};var z=["D","DD"],A=["YY","YYYY"];function R(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var I={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Q(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const B={date:Q({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Q({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Q({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var G={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function X(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const Z={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:X({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:X({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:X({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:X({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:X({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function J(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(s):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(s);return o=t.valueCallback?t.valueCallback(c):c,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(u.length)}}}var K,V={ordinalNumber:(K={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(K.matchPattern);if(!n)return null;var r=n[0],a=t.match(K.parsePattern);if(!a)return null;var i=K.valueCallback?K.valueCallback(a[0]):a[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(r.length)}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const tt={code:"en-US",formatDistance:function(t,e,n){var r,a=I[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:B,formatRelative:function(t,e,n,r){return G[t]},localize:Z,match:V,options:{weekStartsOn:0,firstWeekContainsDate:1}};var et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,at=/''/g,it=/[a-zA-Z]/;function ot(t,e,n){var r,a,i,o,u,s,c,d,l,f,m,h,y,b,T,C,x,D;v(2,arguments);var S=String(e),k=M(),U=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:k.locale)&&void 0!==r?r:tt,N=w(null!==(i=null!==(o=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==u?u:k.firstWeekContainsDate)&&void 0!==o?o:null===(l=k.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=w(null!==(m=null!==(h=null!==(y=null!==(b=null==n?void 0:n.weekStartsOn)&&void 0!==b?b:null==n||null===(T=n.locale)||void 0===T||null===(C=T.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==y?y:k.weekStartsOn)&&void 0!==h?h:null===(x=k.locale)||void 0===x||null===(D=x.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==m?m:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var E=p(t);if(!function(t){if(v(1,arguments),!function(t){return v(1,arguments),t instanceof Date||"object"===g(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=p(t);return!isNaN(Number(e))}(E))throw new RangeError("Invalid time value");var W=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(E),Y=function(t,e){return v(2,arguments),function(t,e){v(2,arguments);var n=p(t).getTime(),r=w(e);return new Date(n+r)}(t,-w(e))}(E,W),_={firstWeekContainsDate:N,weekStartsOn:P,locale:U,_originalDate:E};return S.match(nt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,H[e])(t,U.formatLong):t})).join("").match(et).map((function(r){if("''"===r)return"'";var a,i,o=r[0];if("'"===o)return(i=(a=r).match(rt))?i[1].replace(at,"'"):a;var u,s=F[o];if(s)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===A.indexOf(u))||R(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==z.indexOf(t)}(r)||R(r,e,String(t)),s(Y,r,U.localize,_);if(o.match(it))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return r})).join("")}Math.pow(10,8);var ut=36e5;var st={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ct=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,dt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,lt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ft(t){return t?parseInt(t):1}function mt(t){return t&&parseFloat(t.replace(",","."))||0}var ht=[31,null,31,30,31,30,31,31,30,31,30,31];function gt(t){return t%400==0||t%4==0&&t%100!=0}class vt{static metric=!0;static loadPage(){vt.loadPageSkeleton(),vt.loadHeader(),vt.loadFooter(),vt.addListeners()}static loadPageSkeleton(){document.querySelector(".content").innerHTML='\n    <div class="header"></div>\n    <div class="main"></div>\n    <div class="footer"></div>\n    '}static loadHeader(){document.querySelector(".header").innerHTML='\n    <form id="search" action="#" method="get">\n    <input type="text" name="location">\n    <button class="search">Go</button>\n    </form>\n    '}static loadFooter(){document.querySelector(".footer").innerHTML='\n    <span><i class="fa-solid fa-umbrella"></i> WEATHER by szty1 for Odin Project</span>\n\n    '}static loadWeather(t){const e=document.querySelector(".main");let n=`\n    <div class="location">\n    <span>${t.name}, ${"United States of America"===t.country?t.region:t.country}</span>\n    </div>\n    <div class="current">\n    <img class="currenticon" src="https:${t.icon}">\n    <span class="currenttemp">${vt.metric?t.temp_c:temp_f} ${vt.metric?"°C":"°F"}</span>\n    <span class="currenttext">${t.text}</span>\n    <span class="feelslike">Feels like: ${vt.metric?t.feelsLike_c:feelsLike_f} ${vt.metric?"°C":"°F"}</span>\n    <span class="wind"><i class="fa-solid fa-wind"></i> ${t.windDirection} ${vt.metric?t.windSpeed_kph:windSpeed_mph} ${vt.metric?"km / h":"mph"}</span>\n    <span class="humidity"><i class="fa-solid fa-droplet"></i> ${t.humidity}%</span>\n    </div>\n    `;t.forecast.forEach((t=>{n+=`\n        <div class="forecastday">\n        <span class="forecastdate">${ot(function(t,e){var n;v(1,arguments);var r=w(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,i=function(t){var e,n={},r=t.split(st.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],st.timeZoneDelimiter.test(n.date)&&(n.date=t.split(st.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=st.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(t);if(i.date){var o=function(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}(i.date,r);a=function(t,e){if(null===e)return new Date(NaN);var n=t.match(ct);if(!n)return new Date(NaN);var r=!!n[4],a=ft(n[1]),i=ft(n[2])-1,o=ft(n[3]),u=ft(n[4]),s=ft(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,s):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(ht[e]||(gt(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(gt(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}(o.restDateString,o.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var u,s=a.getTime(),c=0;if(i.time&&(c=function(t){var e=t.match(dt);if(!e)return NaN;var n=mt(e[1]),r=mt(e[2]),a=mt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*ut+6e4*r+1e3*a:NaN}(i.time),isNaN(c)))return new Date(NaN);if(!i.timezone){var d=new Date(s+c),l=new Date(0);return l.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),l.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),l}return u=function(t){if("Z"===t)return 0;var e=t.match(lt);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*ut+6e4*a):NaN}(i.timezone),isNaN(u)?new Date(NaN):new Date(s+c+u)}(t.date),"EEE")}</span>\n        <img class="forecasticon" src="https:${t.icon}">\n        <span class="forecatsmin">${vt.metric?t.min_c:t.min_f} ${vt.metric?"°C":"°F"}</span>\n        <span class="forecatsmax">${vt.metric?t.max_c:t.max_f} ${vt.metric?"°C":"°F"}</span>\n        </div>\n      `})),e.innerHTML=n}static loadError(t){document.querySelector(".main").innerHTML=`\n    <span>${t.message}</span>\n    `}static loadLoadingAnim(){document.querySelector(".main").innerHTML="\n    Loading...\n    "}static handleSearch(t){t.preventDefault();const e=document.getElementById("search");null!=e.location.value&&(vt.loadLoadingAnim(),wt.getWeather(e.location.value),e.prevent)}static addListeners(){document.querySelector(".search").addEventListener("click",vt.handleSearch)}}class pt{static API_KEY="d45e4a2f87524e6eacd194351232905";static async getCurrent(t){try{const e=await fetch(`http://api.weatherapi.com/v1/current.json?key=${pt.API_KEY}&q=${t}`);return await e.json()}catch(t){return{error:{code:t.name,message:t.message}}}}static async getForecast(t){try{const e=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${pt.API_KEY}&q=${t}&days=3&aqi=no&alerts=no`);return await e.json()}catch(t){return{error:{code:t.name,message:t.message}}}}}class wt{currentdata={};static init(){vt.loadPage(),wt.getWeather("Budapest")}static async getWeather(t){console.log(t);const e=await pt.getForecast(t);"error"in e?vt.loadError(e.error):(this.currentdata=wt.processData(e),vt.loadWeather(this.currentdata))}static processData(t){const e={name:t.location.name,region:t.location.region,country:t.location.country,temp_c:Math.round(t.current.temp_c),temp_f:Math.round(t.current.temp_f),feelsLike_c:Math.round(t.current.feelslike_c),feelsLike_f:Math.round(t.current.feelslike_f),icon:t.current.condition.icon,text:t.current.condition.text,humidity:t.current.humidity,windDirection:t.current.wind_dir,windSpeed_kph:Math.round(t.current.wind_kph),windSpeed_mph:Math.round(t.current.wind_mph),forecast:[]};return t.forecast.forecastday.forEach((t=>{e.forecast.push({date:t.date,min_c:Math.round(t.day.mintemp_c),min_f:Math.round(t.day.mintemp_f),max_c:Math.round(t.day.maxtemp_c),max_f:Math.round(t.day.maxtemp_f),icon:t.day.condition.icon})})),e}}document.addEventListener("DOMContentLoaded",wt.init())})()})();