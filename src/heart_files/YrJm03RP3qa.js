if (self.CavalryLogger) { CavalryLogger.start_js(["PGSd6"]); }

__d("SLPerfTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:SLPerfLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:SLPerfLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SLPerfLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setCount=function(a){this.$1.count=a;return this};c.setDurationMs=function(a){this.$1.duration_ms=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={count:!0,duration_ms:!0,event:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("cxodecode",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=36,i=2;function a(a){__p&&__p();if(!a)return"";a=a.cxononce;a||g(0,4289);var b=a.substr(0,a.length-i);a=parseInt(a.substr(-i),h);var c="";for(var d=0;d<b.length;d+=i)c+=String.fromCharCode(parseInt(b.substr(d,i),h)^a);return c}e.exports=a}),null);
__d("SLUtils",["csx","Arbiter","DOM","Event","FeedAdsClickLogger","LitestandMessages","LitestandStream","Run","SLConfig","SLPerfTypedLogger","URI","clearTimeout","curry","cxodecode","gkx","goURI","joinClasses","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("gkx")("677764"),i=!1,j=[];function a(a,c){__p&&__p();if(i)return;i=!0;if(!b("SLConfig").gk.s_link_utils)return;z()&&(A().setEvent("init").log(),C("init_timer"));k();b("SLConfig").gk.sl_replace_about_link&&!h&&p(function(a,b){return q(a,b)});if(b("SLConfig").gk.sl_replace_s){w(a);var d=c.map(function(a){return{nonce:b("cxodecode")(a.nonce),className:b("cxodecode")(a.className)}});p(function(a,c){d.forEach(function(c){var d=b("DOM").scry(a,c.nonce);d.forEach(function(a){while(a.firstChild)a.removeChild(a.firstChild);a.className=b("joinClasses")(a.className,c.className)})})})}m();z()&&A().setEvent("init_duration").setDurationMs(D("init_timer")).log()}function k(){b("Arbiter").subscribe(b("LitestandMessages").STORIES_INSERTED,m),b("Arbiter").subscribe("FeedAdsClickLogger/refreshTrackingData",m,"new")}function c(){z()&&C("cleanup_timer"),j.forEach(function(a){a.unsubscribe()}),i=!1,j=[],z()&&A().setEvent("cleanup_duration").setDurationMs(D("cleanup_timer")).log()}var l=null;function m(){__p&&__p();z()&&C("hsa_timer");b("clearTimeout")(l);l=null;var a=[],c=t(),d=y(),e=!1;d.forEach(function(b){__p&&__p();if(!b.id)return;if(c.has(b.id))return;if(!v(b,b.id)){e=!0;return}c.add(b.id);a.push([b,b.id])});e&&(l=b("setTimeoutAcrossTransitions")(m,b("SLConfig").sv.sl_content_waiting_delay),z()&&A().setEvent("hsa_waiting_for_content").log());z()&&A().setEvent("hsa_stories_added").setCount(a.length).log();if(a.length===0)return;a.forEach(function(a){var b=a[0],c=a[1];return o().forEach(function(a){return a(b,c)})});z()&&A().setEvent("hsa_duration").setDurationMs(D("hsa_timer")).log()}var n=[];function o(){return n}function p(a){n.push(a)}function q(a,c){__p&&__p();a=v(a,c);if(!a){z()&&A().setEvent("usl_real_subtitle_missing").log();return}c=b("DOM").scry(a,"a");a=c.filter(function(a){a=new(b("URI"))(a.href).getPath();return a==="/ads/about"||a==="/about/ads"});z()&&A().setEvent("usl_links_updated").setCount(a.length).log();a.forEach(function(a){var c=b("FeedAdsClickLogger").buildURL(a);b("Event").listen(a,"click",b("curry")(r,c));a.href="#"})}function d(a){b("Event").listen(a.link,"click",b("curry")(r,new(b("URI"))("/ads/about")))}function f(a){return}function r(a,c){b("goURI")(a),b("Event").stop(c)}var s=new Set();function t(){return s}var u=new Map();function v(a,c){var d=null;u.has(c)?d=u.get(c):d=a;c=b("DOM").scry(d,"._5pcp");if(c.length===0)return null;else return c[0]}function w(a){var c=document.createElement("style");c.type="text/css";c.textContent=b("cxodecode")(a);document.getElementsByTagName("head")[0].appendChild(c)}function x(){return b("LitestandStream").getStreamRoot()||document.body}function y(){return b("DOM").scry(x(),"._5pat")}function z(){return!!b("SLConfig").gk.sl_perf_logging}function A(){return new(b("SLPerfTypedLogger"))()}var B=new Map();function C(a){B.set(a,Date.now())}function D(a){a=B.get(a);return a==null?-1:Date.now()-a}b("Run").onBeforeUnload(c);g={init:a,openLink:f,openLabelLink:d};e.exports=g}),null);
__d("EntstreamFeedObjectTracking",["csx","CSS","DOM","EntstreamFeedObject","Focus","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=new Map();e.exports={register:function(a){var c=this.getRoot(a.nodeID);if(!c)return;var d=b("DOM").scry(c,"._5v9_"),e=d&&d.length?d:[c];a.actorIDs.forEach(function(a){var b=[].concat(h.get(a)||[]);b.push.apply(b,e);h.set(a,b)})},hideAllFromActor:function(a){var c=this.getRoot(a.nodeID);(h.get(a.actorID)||[]).forEach(function(a){if(a===c)return;b("CSS").hide(a)})},unhideAllFromActor:function(a){var c=this.getRoot(a.nodeID);(h.get(a.actorID)||[]).forEach(function(a){b("CSS").show(a)});c&&b("Focus").setWithoutOutline(c)},getRoot:function(a){a=b("ge")(a);return a?b("EntstreamFeedObject").getRoot(a):null}}}),null);
__d("FeedTrackingAsync",["Arbiter","Run","collectDataAttributes"],(function(a,b,c,d,e,f){__p&&__p();var g;e.exports.init=function(){__p&&__p();if(g)return;g=b("Arbiter").subscribe("AsyncRequest/send",function(a,c){a=c.request;c=a.getRelativeTo();if(c){a=a.getData();c=b("collectDataAttributes")(c,["ft"]);c.ft&&Object.keys(c.ft).length&&Object.assign(a,c)}});b("Run").onLeave(function(){g&&(g.unsubscribe(),g=null)})}}),null);
__d("FbFeedAccessible",["csx","fbt","invariant","Arbiter","ARIA","CSS","DataAttributeUtils","DOMQuery","LitestandMessages","SubscriptionsHandler","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j="Accessibility/StoriesRequested",k="Accessibility/StoriesLoaded",l="Accessibility/StoryContentInserted",m="Accessibility/SubstreamInserted",n,o,p=!1;a={init:function(a){n=a,p||this._initSubscriptions(),this._enumerateStories()},_initSubscriptions:function(){p=!0;var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(b("Arbiter").subscribe(b("LitestandMessages").STORIES_REQUESTED,this._onStoriesRequested.bind(this)),b("Arbiter").subscribe(b("LitestandMessages").STORIES_INSERTED,this._onInsertedSubstream.bind(this)),b("Arbiter").subscribe(b("LitestandMessages").NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),b("Arbiter").subscribe(k,this._processStoriesLoaded.bind(this)),b("Arbiter").subscribe(j,this._processStoriesRequested.bind(this)),b("Arbiter").subscribe(l,this._processStoryContentInserted.bind(this)),b("Arbiter").subscribe(m,this._processInsertedSubstream.bind(this)))},informStoryContentInserted:function(a){b("Arbiter").inform(l,a);a=b("ge")(a);a&&this._addAriaMarkup(a)},setARIARole:function(a){a.setAttribute("role","article")},setAriaLabelledBy:function(a){if(a.getAttribute("aria-labelledby"))return;var c=this._filterForElement(a,["._5pbw"]);c.length>0&&a.setAttribute("aria-labelledby",c.map(function(a){return b("getOrCreateDOMID")(a)}).join(" "))},setAriaDescribedBy:function(a){if(a.getAttribute("aria-describedby"))return;var c=this._filterForElement(a,[".timestampContent","._5pbx"]);c.length>0&&a.setAttribute("aria-describedby",c.map(function(a){return b("getOrCreateDOMID")(a)}).join(" "))},_getStories:function(a){return b("DOMQuery").scry(a||n,"._5jmm")},_onInsertedSubstream:function(a,c){c&&c.substream_id&&b("Arbiter").inform(m,c.substream_id)},_onStoriesRequested:function(){b("Arbiter").inform(j)},_enumerateStories:function(){var a=this,b=this._getStories(n);o=b.length;b.forEach(function(b,c){a._enumerateStory(b,c+=1)})},_enumerateSubstream:function(a){var c=this._getStories();o=c.length;c=this._getStories(b("ge")(a));a=c.length||0;for(var d=0;d<a;d++)this._registerStoryEnumerationPosition(c[d],o-a+(d+1),d+1)},_enumerateStory:function(a,b){this._isStory(a)||i(0,4854),b>0&&(a.setAttribute("aria-posinset",""+b),a.setAttribute("aria-setsize",o))},_processStoriesLoaded:function(){b("ARIA").notify(h._("More stories loaded."))},_processStoriesRequested:function(){b("ARIA").notify(h._("More stories requested."))},_processInsertedSubstream:function(a,b){this._enumerateSubstream(b),this._enumerateStories()},_processStoryContentInserted:function(a,c){__p&&__p();var d;a=b("ge")(c);a&&(d=JSON.parse(b("DataAttributeUtils").getDataFt(a)),this._addAriaMarkup(a));if(d&&d.ordinal_position){c=d.ordinal_position.split(":");var e=c[0];c=c[1];e=parseInt(e,10);c=parseInt(c,10);this._enumerateStory(a,e);c===1&&b("Arbiter").inform(k)}},_addAriaMarkup:function(a){if(!this._isStory(a))return;this.setARIARole(a);this.setAriaLabelledBy(a);this.setAriaDescribedBy(a)},_registerStoryEnumerationPosition:function(a,c,d){var e=JSON.parse(b("DataAttributeUtils").getDataFt(a));e&&(e.ordinal_position=c+":"+d,b("DataAttributeUtils").setDataFt(a,JSON.stringify(e)))},_isStory:function(a){return b("CSS").matchesSelector(a,"._5jmm")},_filterForElement:function(a,c){return c.map(function(c){return b("DOMQuery").scry(a||document,c)[0]}).filter(function(a){return!!a})}};e.exports=a}),null);
__d("GHLDebug",["distinctArray","emptyFunction","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=new Set(),i=function(){return g};a=function(a,b,c,d,e){__p&&__p();g.push([a.toString(),b,c,d,e.toString(),j(document.getElementById(d))]);for(var a=h,b=Array.isArray(a),c=0,a=b?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(b){if(c>=a.length)break;e=a[c++]}else{c=a.next();if(c.done)break;e=c.value}d=e;d(i())}};var j=function(a){if(a==null)return null;var c=(a.innerText||"").trim().replace(/\n\r?\s*/g,"\n");a=Array.from(a.querySelectorAll("img")).map(function(a){return a instanceof HTMLImageElement?a:null}).filter(Boolean).sort(function(a,b){return b.width*b.height-a.width*a.height}).map(function(a){return a.src});return{text:c,images:b("distinctArray")(a)}};c=function(a){h.add(a);a(i());return function(){h["delete"](a)}};e.exports=b("gkx")("676902")?{hoot:a,murmur:i,elect:c}:{hoot:b("emptyFunction"),murmur:b("emptyFunction"),elect:b("emptyFunction")}}),null);
__d("GHLOrganicTracker",["BanzaiODS","Random","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map(),h=0,i=0,j=b("Random").random().toString(36).substring(2);a=function(a){if(g.has(a)){b("BanzaiODS").bumpEntityKey(2966,"feed_ads","GHLOrganicTracker.error_duplicate_elementID");return}h+=1;g.set(a,h)};c=function(){i+=1,i>h&&b("BanzaiODS").bumpEntityKey(2966,"feed_ads","GHLOrganicTracker.discrepancy."+h+"."+i)};d=function(a){return b("nullthrows")(g.get(a))};f=function(){return i};var k=function(){return j};e.exports={markL:a,markH:c,getL:d,getT:f,getSessionID:k}}),null);
__d("ghlInternalCreateMap",["BanzaiODS"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(){__p&&__p();function a(){}var b=a.prototype;b.get=function(){return null};b.has=function(a){return!1};b.set=function(a,b){return this};b["delete"]=function(a){return!1};return a}();a=function(){var a;a=(a=(a=window.WeakMap)!=null?a:window.Map)!=null?a:g;a!==window.WeakMap&&b("BanzaiODS").bumpEntityKey(2966,"feed_ads","ghlCreateMap.fallback."+String(a===window.Map));return new a()};e.exports=a}),null);
__d("GHLInternalMonitorStore_DO_NOT_USE",["invariant","ghlInternalCreateMap"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=[],i=b("ghlInternalCreateMap")(),j=[],k={add:function(a){h.push(a)},mapUpdate:function(a){__p&&__p();h.forEach(function(b,c){__p&&__p();if(b.b!=="bsu")return;var d=a(b);if(d!=null){var e=babelHelpers["extends"]({},b,d);if(e.b==="bsb"){b=i.get(e.el);b!=null&&(b(e),i["delete"](e.el));j.forEach(function(a){return a(e)})}h[c]=e}})},get:function(a){return h.find(function(b){return b.el===a})},has:function(a){return k.get(a)!=null},observe:function(a,b){var c=k.get(a);i.has(a)&&g(0,18634);c!=null&&c.b==="bsb"?b(c):i.set(a,b);return{dispose:function(){return i["delete"](a)}}},observeAny:function(a){j.push(a);h.filter(function(a){return a.b==="bsb"}).forEach(a);return{dispose:function(){return j=j.filter(function(b){return b===a})}}}};e.exports=k}),null);
__d("ghlInternalBumpODSKey",["BanzaiODS"],(function(a,b,c,d,e,f){"use strict";a=function(a,c){return b("BanzaiODS").bumpEntityKey(2966,"feed_ads",a+"."+c)};e.exports=a}),null);
__d("ghlScan",["BanzaiODS","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=0,h=1;a=2;var i=3,j=4,k=5,l=6,m=/^[a-z0-9]{7}$/;c=function(c){__p&&__p();try{if(!b("gkx")("829486"))return new Set([g]);var d=new Set();n()&&d.add(i);c.getAttributeNames!=null&&c.getAttributeNames().find(function(a){return m.test(a)&&c.getAttribute(a)===""})&&d.add(k);document.getElementById(atob("c2Z4X2JhZGdl"))&&d.add(j);document.getElementById(atob("ZmJwdXJpdHlpbmZvd3JhcHBlcg=="))&&d.add(l);return d.size>0?d:new Set([h])}catch(c){b("BanzaiODS").bumpEntityKey(2966,"feed_ads","_ghlScan."+c);return new Set([a])}};var n=function(){__p&&__p();var a=window,b=a.atob;a=a.getComputedStyle;if(b==null||a==null)return!1;a="."+[b("QWRCb3g"),b("QWQ"),b("YWR2ZXJ0"),b("cG9zdC1hZHM")].join(".");b=document.querySelector(a);if(!(b instanceof HTMLElement))return!1;b.style.display="inline";a=window.getComputedStyle(b);return a.getPropertyValue("display")==="block"};e.exports=c}),null);
__d("ghlInternalLog",["requireCond","Banzai","cr:1088657","ghlInternalBumpODSKey","ghlScan"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="swank",h=14;a=function(a){__p&&__p();var c=a.b,d=a.el,e=a.te,f=a.ts;a=a.xt;if(c!=="bsb"){b("ghlInternalBumpODSKey")("ghlInternalLog","missing-b");return}if(e==null){b("ghlInternalBumpODSKey")("ghlInternalLog","missing-te");return}c=i(f,e);b("Banzai").post("xtrackable:"+g,{token:a,event_code:h,hidden_delay:c,sources:Array.from(b("ghlScan")(d))});b("cr:1088657")&&b("cr:1088657").b({hd:c,e:d,token:(f=a)!=null?f:""})};var i=function(a,b){return Math.max(0,100*Math.round((b-a)/100))};e.exports=a}),null);
__d("ghlMonitor",["invariant","GHLInternalMonitorStore_DO_NOT_USE","GHLTestElement","ghlInternalLog","once","queryThenMutateDOM","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a,c,d,e){e===void 0&&(e=!1);if(!j(a))return;b("GHLInternalMonitorStore_DO_NOT_USE").add({b:"bsu",r:0,el:a,o:e,ts:Date.now(),te:null,s:c,xt:d});h();b("GHLInternalMonitorStore_DO_NOT_USE").observe(a,b("ghlInternalLog"))};var h=b("once")(function(){i(),b("setIntervalAcrossTransitions")(i,1e3)}),i=function(){__p&&__p();b("queryThenMutateDOM")(function(){__p&&__p();var a=15,c=1,d=2,e=5;b("GHLInternalMonitorStore_DO_NOT_USE").mapUpdate(function(f){var g=f.r,h=f.el;f=f.o;if(!f&&a<g||f&&d<g)return{b:"bsn",te:Date.now()};if(!f&&g%c!==0||f&&g%e!==0)return{r:g+1};f=b("GHLTestElement").testElementI(h,"ghlMonitor");return f?{b:"bsb",te:Date.now()}:{r:g+1}})})},j=function(a){return a.querySelectorAll("img").length===0?!1:!0};e.exports=a}),null);
__d("GHLSurvey",["Banzai","DataAttributeUtils","DateTime","ErrorUtils","FBLogger","GHLConfig","GHLDebug","GHLDelay","GHLInternalMonitorStore_DO_NOT_USE","GHLOrganicTracker","GHLTestElement","GHLTracker","Run","ghlInternalBumpODSKey","ghlMonitor","ghlScan","ghlTestUBT","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="swank",h=7,i=3,j=2,k=0,l=0,m=4,n=6,o=8,p=9,q=10,r=3,s={survey:function(){return b("ghlTestUBT")(function(a){var c;return b("Banzai").post("search_check",(c={},c[r]=a,c))})},check:function(a,c,d){var e=t(c),f=function(){d?b("GHLTracker").track(a.id):b("GHLOrganicTracker").markL(a.id),v(a,c,d,0,e)};b("Run").onAfterLoad(u(f,"initial"))},checkF:function(a,b,c){c=document.getElementById(a);if(c==null)return;s.monitor(c,"sdnf",!b)},monitor:function(a,c,d){if(b("GHLInternalMonitorStore_DO_NOT_USE").has(a)){b("ghlInternalBumpODSKey")("GHLSurvey","duplicate-b");return}var e=b("DataAttributeUtils").getDataAttribute(a,"data-xt"),f=!d&&(e==null||e==="");if(f)return;b("ghlMonitor")(a,c,e,d)}},t=function(a){if(a.startsWith(h+"."))return h;else if(a.startsWith(j+"."))return j;else if(a.startsWith(i+"."))return i;else return k},u=function(a,c){return function(){b("ErrorUtils").applyWithGuard(a,null,null,null,"GHL:guard:"+c)}},v=function a(c,d,e,f,i){__p&&__p();var k=Array.from(c.querySelectorAll("img"));if(k.length===0&&i===h){var l=f+1;if(l<5){var m=function(){a(c,d,e,l,i)};setTimeout(u(m,"pagelet-check"),2500)}else e?b("ghlInternalBumpODSKey")("GHLSurvey","feed_ad_pagelet_timeout"):b("ghlInternalBumpODSKey")("GHLSurvey","feed_ad_pagelet_timeout_o"),b("Banzai").post("xtrackable:"+g,{token:d,event_code:e?p:q});return}if(k.length===0){i!==j&&b("FBLogger")("GHL").warn("Expected to find images. (Token: %s)",d);return}if(e&&i===h){m=b("GHLTracker").getState(c.id);(m==null?void 0:m.isDelayImpLogged)===!0&&b("ghlInternalBumpODSKey")("GHLSurvey","element_delay_logged_imp_when_pagelet_loading");b("ghlInternalBumpODSKey")("GHLSurvey","feed_ad_ready_after_pagelet_retry_count."+f)}w(c,d,e,0,i)},w=function(a,c,d,e,f){__p&&__p();var g="other";f===h&&(g="16");d||(g="organic");g=b("GHLTestElement").testElementI(a,".ghls."+g);if(!g){x(a,c,d,e,f);return}d&&B();g=b("ghlScan")(a);if(e>0){f=d?m:o;y(f,c,a.id,e*A(d),g);return}f=d?l:n;y(f,c,a.id,0,g)},x=function(a,b,c,d,e){var f=d+1;if(f>=z(c))return;d=function(){w(a,b,c,f,e)};var g=A(c);setTimeout(u(d,"hidden-check"),g)},y=function(a,c,d,e,f){var h=a===o||a===n,i=h?b("GHLOrganicTracker").getL(d):null,j=h?b("GHLOrganicTracker").getT()+1:null;b("Banzai").post("xtrackable:"+g,{token:c,event_code:a,hidden_delay:e,sources:C(f),load:i,total:j,session_id:b("GHLOrganicTracker").getSessionID()});b("GHLDebug").hoot(a,b("DateTime").localNow(),c,d,e);if(a===m||a===l){f=b("GHLTracker").getState(d);(f==null?void 0:f.isDelayImpLogged)===!0&&b("ghlInternalBumpODSKey")("GHLSurvey","element_marked_hidden_already_delay_logged_imp");b("GHLTracker").markH(d)}h&&b("GHLOrganicTracker").markH()},z=function(a){return a?b("GHLConfig").arc:b("GHLConfig").orc},A=function(a){return a?b("GHLConfig").ari:b("GHLConfig").ori},B=function(){return b("GHLDelay").setEnabled(!0)},C=function(a){return!b("gkx")("829486")||typeof Array.from!=="function"?[]:Array.from(a)};e.exports=s}),null);