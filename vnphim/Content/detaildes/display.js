/*
 * Ad Serving for Display Ad - version 1.6.6 - date: Nov 22, 2017 09:17
 */
if(!window.AdBannerReady){(function(n,h){function k(){if(!c){c=!0;for(var a=0;a<t.length;a++)t[a].fn.call(window,t[a].ctx);t=[]}}function p(){"complete"===document.readyState&&k()}h=h||window;var t=[],c=!1,a=!1;h[n||"AdBannerReady"]=function(l,e){c?setTimeout(function(){l(e)},1):(t.push({fn:l,ctx:e}),"complete"===document.readyState?setTimeout(k,1):a||(document.addEventListener?(document.addEventListener("DOMContentLoaded",k,!1),window.addEventListener("load",k,!1)):(document.attachEvent("onreadystatechange",
p),window.attachEvent("onload",k)),a=!0))}})("AdBannerReady",window);(function(n,h){var k=function(k){if("object"!==typeof k.document)throw Error("AdCookies.js requires a `window` with a `document` object");var c=function(a,l,e){return 1===arguments.length?c.get(a):c.set(a,l,e)};c._document=k.document;c._cacheKeyPrefix="cookey.";c._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC");c.defaults={path:"/",secure:!1};c.get=function(a){c._cachedDocumentCookie!==c._document.cookie&&c._renewCache();
return c._cache[c._cacheKeyPrefix+a]};c.set=function(a,l,e){e=c._getExtendedOptions(e);e.expires=c._getExpiresDate(l===h?-1:e.expires);c._document.cookie=c._generateAdCookiestring(a,l,e);return c};c.expire=function(a,l){return c.set(a,h,l)};c._getExtendedOptions=function(a){return{path:a&&a.path||c.defaults.path,domain:a&&a.domain||c.defaults.domain,expires:a&&a.expires||c.defaults.expires,secure:a&&a.secure!==h?a.secure:c.defaults.secure}};c._isValidDate=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&
!isNaN(a.getTime())};c._getExpiresDate=function(a,l){l=l||new Date;"number"===typeof a?a=Infinity===a?c._maxExpireDate:new Date(l.getTime()+1E3*a):"string"===typeof a&&(a=new Date(a));if(a&&!c._isValidDate(a))throw Error("`expires` parameter cannot be converted to a valid Date instance");return a};c._generateAdCookiestring=function(a,c,e){a=a.replace(/[^#$&+\^`|]/g,encodeURIComponent);a=a.replace(/\(/g,"%28").replace(/\)/g,"%29");c=(c+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);e=e||
{};a=a+"="+c+(e.path?";path="+e.path:"");a+=e.domain?";domain="+e.domain:"";a+=e.expires?";expires="+e.expires.toUTCString():"";return a+=e.secure?";secure":""};c._getCacheFromString=function(a){var l={};a=a?a.split("; "):[];for(var e=0;e<a.length;e++){var k=c._getKeyValuePairFromAdCookiestring(a[e]);l[c._cacheKeyPrefix+k.key]===h&&(l[c._cacheKeyPrefix+k.key]=k.value)}return l};c._getKeyValuePairFromAdCookiestring=function(a){var c=a.indexOf("=");c=0>c?a.length:c;return{key:decodeURIComponent(a.substr(0,
c)),value:decodeURIComponent(a.substr(c+1))}};c._renewCache=function(){c._cache=c._getCacheFromString(c._document.cookie);c._cachedDocumentCookie=c._document.cookie};c._areEnabled=function(){var a="1"===c.set("AdCookies.js",1).get("AdCookies.js");c.expire("AdCookies.js");return a};c.enabled=c._areEnabled();return c},p="object"===typeof n.document?k(n):k;"function"===typeof define&&define.amd?define(function(){return p}):"object"===typeof exports?exports.AdCookies=p:n.AdCookies=p})("undefined"===typeof window?
this:window);(function(n,h){function k(d){d=d||{};d.url=d.url||null;d.vars=d.vars||{};d.error=d.error||function(){};d.success=d.success||function(){};d.vars.cb=Math.floor(1E13*Math.random());var a=[];for(b in d.vars)a.push(encodeURIComponent(b)+"="+encodeURIComponent(d.vars[b]));a=a.join("&");if(d.url){var b=new Image;b.onerror&&(b.onerror=d.error);b.onload&&(b.onload=d.success);d.noParameter?b.src=d.url:0<d.url.indexOf("?")?b.src=d.url+"&"+a:b.src=d.url+"?"+a}}function p(d,a){var b=a.getElementsByTagName("iframe")[0];
if(0!=d&&b){if(b.getAttribute("src"))return b;var c=b.contentDocument||b.contentWindow.document;return c&&c.getElementsByTagName("iframe")[0]?p(d-1,c):b}return b}function t(d,a){var b=document.createElement("script");b.src=d;b.async=!0;a!==h&&(b.onreadystatechange=function(){if("loaded"===b.readyState||"complete"===b.readyState)b.onreadystatechange=null,a(d)},b.onload=function(){a(d)});document.body.appendChild(b)}function c(){var d=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=(d+16*Math.random())%16|0;d=Math.floor(d/16);return("x"==a?b:b&3|8).toString(16)})}function a(){return document.location.protocol+"//c"+Math.floor(3*Math.random()+3)+".hadarone.com/track/ads"}function l(d,a){var b=d.getElementsByTagName("head")[0],c=d.createElement("style");c.setAttribute("type","text/css");c.styleSheet?c.styleSheet.cssText=a:c.appendChild(d.createTextNode(a));b.appendChild(c)}function e(d,a){var b=new XMLHttpRequest;b.onreadystatechange=function(){4==b.readyState&&
200==b.status&&"function"===typeof a&&a(b.responseText)};b.onerror=function(){window.console&&window.console.error(" ajaxCorsRequest for URL: "+d)};b.open("GET",d,!0);b.withCredentials=!0;b.send()}function D(d,a,b,c,f,g,e){var q="hadar-iframe-ad-"+f;g=document.createElement("img");"100%"==a&&"100%"==b?g.setAttribute("style","max-width:"+a):(g.setAttribute("style","width:"+a+"px;height:"+b+"px"),g.setAttribute("width",a),g.setAttribute("height",b));g.setAttribute("src",c);g.setAttribute("id",q);b=
document.createElement("ins");b.style.display="inline-table";b.style.border="none";b.style.margin="0px";b.style.padding="0";b.style.position="relative";b.style["background-color"]="transparent";b.style.width=a+"px";b.setAttribute("title",d);b.appendChild(g);d=document.createElement("a");d.setAttribute("href",e);d.setAttribute("target","_blank");d.setAttribute("id","hadar-click-handle-"+f);d.setAttribute("onclick","HadarDisplayAd.handleAdClick("+f+")");d.appendChild(b);return d}function E(d,a,b,c,
f,g,e){g="hadar-iframe-ad-"+f;f=document.createElement("iframe");f.setAttribute("width",a);f.setAttribute("height",b);f.setAttribute("src","about:blank");f.setAttribute("frameborder","0");f.setAttribute("marginwidth","0");f.setAttribute("marginheight","0");f.setAttribute("vspace","0");f.setAttribute("hspace","0");f.setAttribute("allowtransparency","true");f.setAttribute("scrolling","no");f.setAttribute("allowfullscreen","true");f.setAttribute("src",c);f.setAttribute("id",g);b=document.createElement("ins");
b.style.display="inline-table";b.style.border="none";b.style.margin="0px";b.style.padding="0";b.style.position="relative";b.style["background-color"]="transparent";b.style.width=a+"px";b.setAttribute("title",d);b.appendChild(f);return b}function y(a){var d=a.streamAdTrackingUrls;a=a.js3rdCode;if("object"===typeof d)for(var b=0;b<d.length;b++){var c=d[b];c&&setTimeout(function(a){k({url:a,vars:{}})},1E3*c.delay,c.url)}"string"===typeof a&&(d=document.createElement("iframe"),d.setAttribute("width",
0),d.setAttribute("height",0),d.setAttribute("src","about:blank"),d.setAttribute("style","display:none!important;"),document.getElementsByTagName("body")[0].appendChild(d),d.contentDocument.write(a))}function F(d,c){var b=d.timeToShowLogo||1600,m=d.clickthroughUrl,f=d.adMedia,g=d.adId,e=d.adBeacon,h=0<d.width?d.width+"px":"100%",q=0<d.height?d.height+"px":"100%",n=d.placementId,A=d.clickActionText,w=d.adType,r=d.adCode,B=d.tracking3rdUrls||[];z[g]=e;if(!c.getAttribute("data-hadar-adid")){c.setAttribute("data-hadar-adid",
g);c.setAttribute("data-width",d.width);c.setAttribute("data-height",d.height);c.setAttribute("data-ad-type",w);c.setAttribute("id",n+"-hadar-holder-"+ +g);var v=!1;if(5===w)c.setAttribute("style","display:block;border:none;margin:0 auto;padding:0;position:relative;overflow:hidden;background-color:transparent;text-align:center;;width:"+h+";height:"+q),r=E(A,h,q,f+"#adid="+g+"&beacon="+e+"&clicktag="+m,g,e,m),c.appendChild(r),v=!0;else if(6===w)c.setAttribute("style","display:block;border:none;margin:0 auto;padding:0;position:relative;overflow:hidden;background-color:transparent;text-align:center;;width:"+
h+";height:"+q),r=D(A,h,q,f,g,e,m),c.appendChild(r),v=!0;else if(9===w&&""!=r){c.setAttribute("style","display:block;border:none;margin:0 auto;padding:0;position:relative;overflow:hidden;background-color:transparent;text-align:center;;width:"+h+";height:"+q);var C="hadar_frame_"+n;m=document.createElement("iframe");m.setAttribute("width",h);m.setAttribute("height",q);m.setAttribute("src","about:blank");m.setAttribute("frameborder","0");m.setAttribute("marginwidth","0");m.setAttribute("marginheight",
"0");m.setAttribute("vspace","0");m.setAttribute("hspace","0");m.setAttribute("allowtransparency","true");m.setAttribute("scrolling","no");m.setAttribute("allowfullscreen","true");m.setAttribute("id",C);c.appendChild(m);h=m.contentDocument;h.write(r);h.write("<style type='text/css'>body{text-align:center!important;margin-right:0px;margin-left:0px;margin-bottom:0px;margin-top:0px;}</style>");if(0<g){window.focus();var y=window.addEventListener("blur",function(){document.activeElement===document.getElementById(C)&&
x.handleAdClick(g);window.removeEventListener("blur",y)})}v=!0}else 3===w&&""!=r&&(t(r),v=!0);v&&setTimeout(function(){var a="true"===c.getAttribute("data-hide-logo");a||(a=d.hideLogo);if(0===d.width||0===d.height)a=!0;if(!a){var b=document.createElement("div");b.setAttribute("class","hadar_ads");b.innerHTML+='<a target="_blank" href="'+("//blueseed.tv?utm_source=placement-"+n+"&utm_medium=logo_trademark")+'"><span class="hadar_brand"></span><span class="hadar_name">Ads by <b>Blueseed</b></span></a>';
if(a=c.getElementsByTagName("iframe")[0]){var e=a.contentDocument||a.contentWindow.document;e.body&&(e.body.appendChild(b),l(e,u),e&&(b=p(4,e))&&(b.width||b.height)&&(a.width=b.width,a.height=b.height,c.style.width=b.width+"px",c.style.height=b.height+"px"))}else c.appendChild(b),l(document,u)}},b);if(v&&0<g)for(k({url:a(),vars:{metric:"impression",adid:g,beacon:z[g]}}),b=0;b<B.length;b++)k({url:B[b],vars:{},noParameter:!0})}}var z={},G=function(a){var d=(new Date).getTime(),b=AdCookies.get("apluuid");
b||(b=c(),AdCookies.set("apluuid",b,{expires:315569520}));b="uuid="+b;for(var e=0;e<a.length;e++)b+="&placement="+a[e];b+="&referrer="+encodeURIComponent(document.referrer?document.referrer:"");b+="&url="+encodeURIComponent(document.location.href);return document.location.protocol+"//d"+Math.floor(3*Math.random()+3)+".hadarone.com/delivery?"+(b+("&t="+d))},x={handleAdClick:function(c){k({url:a(),vars:{metric:"click",adid:c,beacon:z[c]}});return!1}},u=".hadar_ads{background: #e6f4ff; position: absolute; z-index: 99999; right: 0; top: 0;line-height: 18px; padding: 0px; text-align: left;font-family: arial; font-size: 9px; cursor: pointer; overflow: hidden;}";
u+=".hadar_ads .hadar_name{margin-left: 4px;display: none;}";u+=".hadar_ads:hover .hadar_name{display: inline-block;}";u+=".hadar_ads > a{color: #464646; text-decoration: none;}";u+=".hadar_ads .hadar_name > b{color: #3F51B5;}";u+=".hadar_ads .hadar_brand{float: right; width: 18px; height: 18px; background: #fff url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Mi4zNCA0Mi4zNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNlNmY0ZmY7fS5jbHMtMntmaWxsOiM0ZDc3YmE7fS5jbHMtM3tmaWxsOiM3YmMxNDc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Bc3NldCA0PC90aXRsZT48ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIj48ZyBpZD0iTGF5ZXJfMi0yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxyZWN0IGNsYXNzPSJjbHMtMSIgd2lkdGg9IjQyLjM0IiBoZWlnaHQ9IjQyLjM0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjkuODcgMi4xOSAxNC45NSA1LjU5IDE0Ljk1IDMwLjg5IDI5LjM0IDIzLjE4IDE3Ljc0IDE2LjczIDE3Ljc0IDEwLjk4IDM4LjY1IDIyLjgyIDkuODcgNDAuMSA5Ljg3IDIuMTkiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iOS44NyAzOS4yMiA5Ljg3IDIuMTkgMTQuOTUgNS41OSAxNC45NSAzMC44OSA5Ljg3IDQwLjEgOS44NyAzOS4yMiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMyIgcG9pbnRzPSIxMC4zNyAzLjEyIDE0LjQ1IDUuODYgMTQuNDUgMzEuNzMgMTAuMzcgMzkuMjIgMTAuMzcgMy4xMiIvPjwvZz48L2c+PC9zdmc+) no-repeat center;}";
x.getAds=function(a,c){var b=G(a)+"&at=display";e(b,function(a){a=JSON.parse(a);for(var b=0;b<a.length;b++){var d=a[b],e=c[d.placementId+""];e&&(e=e.pop())&&F(d,e);0===d.adType&&y(d)}})};x.render=function(){window._hadarDisplayAdProcessed=!0;for(var a=document.getElementsByClassName("hadar-placement"),c=[666],b=[],e=0;e<a.length;e++)if(a[e]){var f=0,g=a[e].getAttribute("data-hdpm");"string"===typeof g&&(f=parseInt(g),c.push(parseInt(g)));0<f&&(f+="","object"!==typeof b[f]&&(b[f]=[]),b[f].push(a[e]))}x.getAds(c,
b);a=document.createElement("meta");a.setAttribute("name","referrer");a.setAttribute("content","unsafe-url");(c=document.getElementsByTagName("head")[0])&&c.appendChild(a)};n.HadarDisplayAd=x})("undefined"===typeof window?this:window);AdBannerReady(HadarDisplayAd.render);var interval=setInterval(function(){window._hadarDisplayAdProcessed?clearInterval(interval):HadarDisplayAd.render()},1600)};