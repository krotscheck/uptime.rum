!function(e){"use strict";function t(){var t=e.performance||e.webkitPerformance||e.msPerformance||e.mozPerformance;return void 0!==t&&(t.timing||!1)}function n(e,t){var n=new XMLHttpRequest;return void 0!==n.withCredentials?n.open(e,t,!0):"undefined"!=typeof XDomainRequest?(n=new XDomainRequest,n.open(e,t)):n=null,n}function r(){try{var r=t();if(r&&_uptime_rum&&_uptime_rum.hasOwnProperty("uuid")){var u={type:"rumdata",data:{rumdata:{timing:r,user:{href:e.location.href,userAgent:e.navigator.userAgent}},uuid:_uptime_rum.uuid}},i=n("POST",_uptime_rum.url);if(!i)return!1;i.onload=function(){},i.send(JSON.stringify(u))}else _uptime_rum&&!_uptime_rum.hasOwnProperty("uuid")&&console.log("You are missing _uptime_rum.uuid property which needs to be global.")}catch(e){}}e.addEventListener?e.addEventListener("load",r,!1):e.attachEvent?e.attachEvent("onload",r):e.onload=r}(window);