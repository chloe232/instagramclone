if (self.CavalryLogger) { CavalryLogger.start_js(["9NwN6"]); }

__d("VideoViewFraudDetectorWhiteOps",["FBSiteWhiteOps"],(function(a,b,c,d,e,f){"use strict";a=function(a,c,d){a.setDetectionID(c),d&&a.addListener("videoView/runFraudDetector",function(){b("FBSiteWhiteOps").appendToWindow(c,"FACEBOOK_VIDEO_VIEW",null)})};e.exports=a}),null);
__d("FBCircularGlyph.react",["cx","Image.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.circleSize,d=a.glyph,e=a.glyphSize;a=babelHelpers.objectWithoutPropertiesLoose(a,["circleSize","glyph","glyphSize"]);return b("React").createElement("div",babelHelpers["extends"]({},a,{className:b("joinClasses")("_32qy",a.className),style:babelHelpers["extends"]({width:c,height:c},a.style)}),b("React").createElement("div",{className:"_32qz"},b("React").createElement("div",{className:"_32q-"},b("React").createElement(b("Image.react"),{src:d,width:e,height:e}))))};return c}(b("React").Component);c.propTypes={circleSize:a.number,glyph:a.oneOfType([a.object,a.string])};e.exports=c}),null);
__d("DocumentFocusForAdsVideoAutoplayRule",["VideoAutoplayRule"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(b){return a.call(this,b)||this}var c=b.prototype;c.calculateAutoplayScore=function(){return this.isEnabled()?this.$DocumentFocusForAdsVideoAutoplayRule1():1};c.$DocumentFocusForAdsVideoAutoplayRule1=function(){var a=this.videoUnit.getVideoPlayerController();return a&&a.isAd()?document.hasFocus()?1:0:1};return b}(b("VideoAutoplayRule"));e.exports=a}),null);
__d("FeedVideoClickToPlayController",["DocumentFocusForAdsVideoAutoplayRule","Event","IntersectionObserver","VideoPlayerAbortLoadingExperiment","VideoPlayerExperiments","VideoPlayerReason","destroyOnUnload","setImmediate","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g=null;a=function(){"use strict";__p&&__p();function a(){var a=this;this.$4=new Set();this.$3=null;this.$2=null;this.$1=null;b("destroyOnUnload")(function(){a.$4.clear(),a.$2&&(a.$2.remove(),a.$2=null),a.$3&&(a.$3.disconnect(),a.$3=null),a.$1&&(a.$1.remove(),a.$1=null),a===g&&(g=null)})}var c=a.prototype;c.addVideoUnit=function(a){__p&&__p();var c=this;if(b("VideoPlayerExperiments").useBringYourOwnAutoplayRule&&b("VideoPlayerExperiments").pauseAdIfNoDocumentFocus){var d=new(b("DocumentFocusForAdsVideoAutoplayRule"))(a);a.registerAutoplayRule(d)}this.$5()||this.$6();this.$7()||this.$8();a.addListener("beginPlayback",function(d){d=d.reason;(d===b("VideoPlayerReason").USER||d===b("VideoPlayerReason").LOOP)&&c.$4.add(a)});a.addListener("turnOffAutoplay",function(b){b=b.reason;b==="unmuted"&&c.$4.add(a)});a.getVideoPlayerController().isState("playing")&&!a.isAutoplayable()&&this.$4.add(a);a.addListener("pausePlayback",function(){c.$4["delete"](a)});a.addListener("finishPlayback",function(){c.$4["delete"](a)})};a.registerVideoUnit=function(b){g==null&&(g=new a()),g.addVideoUnit(b)};c.$6=function(){this.$2&&this.$2.remove(),this.$2=b("Event").listen(window,"scroll",b("throttle")(this.onWindowEvent.bind(this),200))};c.$8=function(){this.$1&&this.$1.remove(),this.$1=b("Event").listen(window,"resize",b("throttle")(this.onWindowEvent.bind(this),200))};c.$5=function(){return!!this.$2};c.$7=function(){return!!this.$1};c.$9=function(a){a.pause(b("VideoPlayerReason").AUTOPLAY),!b("VideoPlayerExperiments").noAbortLoadingInFeedClickToPlay&&b("VideoPlayerAbortLoadingExperiment").canAbort&&a.abortLoading(),this.$4["delete"](a)};c.onWindowEvent=function(){var a=this;this.$4.forEach(function(c){if(c&&!c.isVisible()&&!c.getIsInChannel()){var d=c.getVideoPlayerController();d.isAd()||b("VideoPlayerExperiments").pauseWhenOffscreen?b("VideoPlayerExperiments").slidingWNSv3?b("setImmediate")(function(){c&&!c.isVisible()&&!c.getIsInChannel()&&a.$9(c)}):a.$9(c):d.isMuted()&&d.isState("playing")&&(a.$9(c),d.emit("resumeAutoplay"))}})};return a}();e.exports=a}),null);
__d("VideoClickForMoreOverlay",["cx","CSS","DOM","EventListener","VideoPlayerLoggerSource","VideoPlayerUIComponentDrawer"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(c,d,e){__p&&__p();var f=this;this.$1=c;this.$2=d;this.$3=!1;this.$4=this.$1.registerDrawer(b("VideoPlayerUIComponentDrawer").priorities.ClickForMore,e?a.REDESIGN_HEIGHT:a.DEFAULT_HEIGHT);this.$4.addListener("reposition",this.$5.bind(this));this.$1.addListener("VideoControls/visibilityUpdate",function(a){a=a.areControlsVisible;return f.$6(a)});c=this.$1.getOption("VideoControls","areControlsVisible");c&&this.$6(c);this.$1.addListener("stateChange",this.$7.bind(this));b("EventListener").listen(this.$2,"click",function(){return f.$8()})}var c=a.prototype;c.$5=function(a){b("DOM").setAttributes(this.$2,{style:"bottom:"+a+"px;"})};c.$6=function(a){this.$3=a,this.$7()};c.$7=function(){var a=!this.$1.isPlayerVersion("silvercity")&&!this.$1.getIsInChannel()&&this.$1.getSource()!==b("VideoPlayerLoggerSource").TAHOE&&this.$1.isState("playing")&&!this.$1.getOption("SottoPaywall","enable");a&&this.$3?this.$9():this.$10()};c.$8=function(){this.$1.clickVideo()};c.$9=function(){b("CSS").removeClass(this.$2,"_2is8"),this.$4.reserve()};c.$10=function(){b("CSS").addClass(this.$2,"_2is8"),this.$4.release()};return a}();a.DEFAULT_HEIGHT=18;a.REDESIGN_HEIGHT=38;e.exports=a}),null);
__d("VideoPauseWhenBackgrounded",["invariant","Event","SubscriptionsHandler","VideoPlayerExperiments","VideoPlayerReason","VideoPlayerStates","Visibility"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1=new(b("SubscriptionsHandler"))(),this.$3=!1}var c=a.prototype;c.enable=function(a){this.$2&&g(0,2800),this.$1.engage(),this.$2=a,this.$1.addSubscriptions(b("Event").listen(window,"blur",this.$4.bind(this)),b("Event").listen(window,"focus",this.$5.bind(this)),b("Visibility").addListener(b("Visibility").HIDDEN,this.$4.bind(this)),b("Visibility").addListener(b("Visibility").VISIBLE,this.$5.bind(this)))};c.disable=function(){this.$1.release(),this.$2=null};c.$4=function(){this.pauseVideo(b("VideoPlayerReason").PAGE_VISIBILITY)};c.$5=function(){this.playVideo(b("VideoPlayerReason").PAGE_VISIBILITY)};c.playVideo=function(a){var c=this.$2;c||g(0,2801);c.isState(b("VideoPlayerStates").PAUSED)&&this.$3&&c.play(a);this.$3=!1};c.pauseVideo=function(a){var c=this.$2;c||g(0,2801);if(b("VideoPlayerExperiments").fullScreenVideoIsNotHidden&&c.isFullscreen())return;c.isState(b("VideoPlayerStates").PLAYING)&&(c.pause(a),this.$3=!0)};return a}();e.exports=a}),null);
__d("VideoPlayerRegistry",["regeneratorRuntime","Promise","EventEmitter"],(function(a,b,c,d,e,f){__p&&__p();var g=new Set(),h=new(b("EventEmitter"))(),i={ADDED:"added",REMOVED:"removed",addListener:function(a,b){return h.addListener(a,b)},once:function(a,b){return h.once(a,b)},has:function(a){return g.has(a)},add:function(a){if(i.has(a))return!1;g.add(a);h.emit(i.ADDED,a);return!0},remove:function(a){if(!i.has(a))return!1;g["delete"](a);h.emit(i.REMOVED,a);return!0},count:function(){return g.size},getList:function(){return Array.from(g)},getByRootNode:function(a){__p&&__p();var c=this,d;return b("regeneratorRuntime").async(function(e){__p&&__p();while(1)switch(e.prev=e.next){case 0:d=null;this.getList().forEach(function(b){b.getByRootNode()===a&&(d=b)});if(d){e.next=6;break}e.next=5;return b("regeneratorRuntime").awrap(new(b("Promise"))(function(b,d){var e=c.addListener(i.ADDED,function(c){c.getRootNode()===a&&(e.remove(),b(c))})}));case 5:d=e.sent;case 6:return e.abrupt("return",d);case 7:case"end":return e.stop()}},null,this)}};e.exports=i}),null);
__d("VideoWithClickToSnowlift",["Bootloader","VideoPlayerReason","logVideosClickTracking"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b){this.$1=a,this.$2=b,this.$1.addListener("clickVideo",this.$3.bind(this)),this.$1.hasSeenClick()&&this.$3()}var c=a.prototype;c.$3=function(){var a=this;if(this.$1.isFullscreen()){if(this.$1.getOption("VideoWithLiveBroadcast","isLive"))return;this.$1.isState("playing")?this.$1.pause(b("VideoPlayerReason").USER):(b("logVideosClickTracking")(this.$1.getVideoNode()),this.$1.play(b("VideoPlayerReason").USER))}else b("Bootloader").loadModules(["PhotoSnowlift"],function(b){return b.bootstrap(a.$2)},"VideoWithClickToSnowlift")};return a}();e.exports=a}),null);
__d("VideoWithClickToTahoe",["cx","AsyncRequest","Bootloader","CSS","Event","URI","VideoPlayerReason","logVideosClickTracking"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=!1;a=function(){__p&&__p();function a(a,c,d,e,f,g,h,i,j,k,l,m,n){this.$5=a,this.$6=new(b("URI"))(c),this.$4=d,this.$1=e,this.$2=f,this.$7=g,this.$8=h,this.$9=i,this.$10=l,this.$11=j,this.$12=k,this.$13=m,this.$14=n,this.$5.addListener("stateChange",this.$15.bind(this)),this.$5.addListener("toggleFullscreen",this.$15.bind(this)),this.$5.setLogEntryPropertyGetters({channel_eligibility:"eligible"}),this.$5.addListener("enterTahoe",this.$16.bind(this,"control_click")),this.canOpenTahoe()&&this.$17(),this.$5.addListener("clickVideo",this.$18.bind(this)),this.$5.hasSeenClick()&&this.$18()}var c=a.prototype;c.$17=function(){if(this.$19())return;var a=this.$5.getVideoNode();b("CSS").addClass(a,"_62vr");b("CSS").addClass(a,"_1yhw");b("CSS").addClass(a,"_400z");b("CSS").addClass(a,"_1vek");var c=this.$5.isBroadcast();c&&b("CSS").addClass(a,"_3yn5")};c.$20=function(){if(this.$19())return;var a=this.$5.getVideoNode();b("CSS").removeClass(a,"_62vr");b("CSS").removeClass(a,"_1yhw");b("CSS").removeClass(a,"_400z");b("CSS").removeClass(a,"_1vek");b("CSS").removeClass(a,"_3yn5")};c.$15=function(){this.$19()||(this.canOpenTahoe()?this.$17():this.$20())};c.$19=function(){return this.$5.isState("destroyed")};c.$18=function(){if(!this.canOpenTahoe())if(this.$5.isState("playing")){if(this.$5.getOption("VideoWithLiveBroadcast","isLive")||this.$5.getOption("VideoWithInstreamVideo","disableClickToPause"))return;this.$5.pause(b("VideoPlayerReason").USER)}else b("logVideosClickTracking")(this.$5.getVideoNode()),this.$5.play(b("VideoPlayerReason").USER);else this.$16("player_click")};c.$21=function(){h=!0,b("Bootloader").loadModules(["TahoeController","TahoeVideoView"],function(){},"VideoWithClickToTahoe"),this.$3&&this.$3.remove(),this.$3=null};c.canOpenTahoe=function(){var a=this.$5.getSource();if(a=="tahoe"||a=="channel")return!1;a=this.$5.getOption("VideoWithInstreamVideo","disableClickToPause");return this.$5.isFullscreen()||a||!this.$5.isState("playing")?!1:!0};c.$16=function(a){__p&&__p();var c=this;if(this.$2)new(b("AsyncRequest"))(this.$6.toString()).send(),this.$5.pause();else{h=!0;this.$3&&this.$3.remove();this.$3=null;var d=b("URI").getNextURI(),e=babelHelpers["extends"]({},d.getQueryData(),{ref:"tahoe"});b("Bootloader").loadModules(["TahoeController"],function(b){b.openFromVideoPlayer(c.$5,c.$6.setQueryData(e),c.$4,c.$1,a,c.$7,c.$8,c.$9,c.$11,c.$12,c.$10,c.$13,c.$14)},"VideoWithClickToTahoe")}};a.setUpBootloadOnHover=function(a){if(h||a.$3)return;a.$3=b("Event").listen(a.$5.getRootNode(),"mouseover",a.$21.bind(a))};return a}();e.exports=a}),null);
__d("VideoWithSequentialAutoplay",["Arbiter","SubscriptionsHandler","VideoPlayerHTML5Experiments","VideoPlayerReason","destroyOnUnload"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=a;this.$2=c;this.$3=new(b("SubscriptionsHandler"))();if(b("VideoPlayerHTML5Experiments").displayLoopingWhenAutoplayNextVideo&&this.$2&&this.$2!=="0")if(this.$1.hasOption("Looping","disabled"))this.$1.setOption("Looping","disabled",!0);else{var e=this.$1.addListener("optionsChange",function(){d.$1.hasOption("Looping","disabled")&&(d.$1.setOption("Looping","disabled",!0),e.remove())});this.$3.addSubscriptions(e)}this.$1.addListener("finishPlayback",this.$4.bind(this));this.$3.addSubscriptions(b("Arbiter").subscribe("nextVideoAutoplay",function(a,c){c.nextVideoID==d.$1.getVideoID()&&d.$1.play(b("VideoPlayerReason").AUTOPLAY)}));b("destroyOnUnload")(function(){return d.$3.release()})}var c=a.prototype;c.$4=function(){b("Arbiter").inform("nextVideoAutoplay",{nextVideoID:this.$2})};return a}();e.exports=a}),null);
__d("VideoWithVODBroadcast",[],(function(a,b,c,d,e,f){a=function(a){"use strict";a.registerOption("VideoWithVODBroadcast","isLiveVOD",function(){return!0})};e.exports=a}),null);
__d("XVideoQualitySurveyController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/quality_survey/",{videoid:{type:"String"},__asyncDialog:{type:"Int"}})}),null);
__d("VideoPlayButton",["AsyncRequest","CSS","EventListener","VideoDisplayTimePlayButton","VideoPlayerLoggerSource","VideoPlayerReason","XVideoQualitySurveyController"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c,d){__p&&__p();this.$1=a;this.$2=c;d&&(this.$3=d.hiddenAfterFinish,this.$4=d.hiddenWhilePaused,this.$5=!!d.hiddenInFallback,this.$5=d.hiddenInFallback,this.$6=d.spherical);c=b("VideoDisplayTimePlayButton").getClicked(this.$2);b("VideoDisplayTimePlayButton").unregister(this.$2);a.addListener("beginPlayback",this.$7.bind(this));a.addListener("finishPlayback",this.$8.bind(this));a.addListener("pausePlayback",this.$9.bind(this));a.addListener("buffering",this.$10.bind(this));a.addListener("buffered",this.$11.bind(this));a.addListener("stateChange",this.$12.bind(this));a.addListener("playRequested",this.$13.bind(this));a.addListener("VideoChannelController/exitChannel",this.$14.bind(this));a.addListener("clickVideo",this.$15.bind(this));a.addListener("TahoeController/enterTahoe",this.$16.bind(this));b("EventListener").listen(this.$2,"click",this.$17.bind(this));d&&d.hiddenWhileJSLoading&&!d.hiddenWhileVideoLoading&&b("CSS").show(this.$2);c&&this.$17()}var c=a.prototype;c.$12=function(){this.$1.isState("fallback")&&(this.$5||this.$1.getIsInChannel()?b("CSS").hide(this.$2):b("CSS").show(this.$2))};c.$7=function(){b("CSS").hide(this.$2)};c.$9=function(){if(this.$4||this.$1.getSource()===b("VideoPlayerLoggerSource").INLINE)return;b("CSS").show(this.$2)};c.$13=function(a){if(this.$1.isState("fallback")||a===b("VideoPlayerReason").AUTOPLAY)return;b("CSS").hide(this.$2)};c.$14=function(){(this.$1.isState("paused")&&(!this.$4||this.$6)||this.$1.isState("finished")&&!this.$3)&&b("CSS").show(this.$2)};c.$16=function(){this.$1.isState("playing")||b("CSS").show(this.$2)};c.$8=function(){var a=this.$1.getOption("Looping","isLooping");this.$3||this.$1.getIsInChannel()||this.$1.getSource()===b("VideoPlayerLoggerSource").TAHOE||a?b("CSS").hide(this.$2):b("CSS").show(this.$2);if(!this.$1.getIsInChannel()&&!this.$1.isAd()&&!this.$1.hasOption("WatchAndScroll","isActive")&&!this.$1.isMuted()&&this.$1.getSource()!==b("VideoPlayerLoggerSource").MESSAGING){a=b("XVideoQualitySurveyController").getURIBuilder().setString("videoid",this.$1.getVideoID()).getURI();a=new(b("AsyncRequest"))().setURI(a);a.send()}};c.$10=function(){b("CSS").hide(this.$2)};c.$11=function(){b("CSS").hide(this.$2)};c.$17=function(){this.$1.clickVideo()};c.$15=function(){if(this.$1.isState("fallback"))return;b("CSS").hide(this.$2)};return a}();e.exports=a}),null);
__d("VideoCTAEndscreen",["cx","Arbiter","AttachmentRelatedShareConstants","CSS","Event","Focus","SubscriptionsHandler","VideoCTALoggingConfig","VideoPlayerLoggerEvent","VideoPlayerReason","logVideosClickTracking"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,c){__p&&__p();var d=this;this.$1=a;this.$2=c.endscreenElement;this.$3=c.replayElement;this.$4=c.ctaElement;this.$5=c.isPausescreen;this.$6=new(b("SubscriptionsHandler"))();this.$6.addSubscriptions(b("Event").listen(this.$3,"click",function(){return d.$7()}),a.addListener("beginPlayback",function(){return d.$8()}),a.addListener("VideoChannelController/exitChannel",function(){a.isState("finished")&&d.$9()}));c=c.isPausescreen?"VideoCTAPausescreen":"VideoCTAEndscreen";this.$4&&(this.$6.addSubscriptions(b("Event").listen(this.$4,"click",function(){return d.$10()})),a.registerOption(c,"ctaElement",function(){return d.$4}));this.$5?this.$6.addSubscriptions(a.addListener("pausePlayback",function(){return d.$11()})):this.$6.addSubscriptions(a.addListener("finishPlayback",function(){return d.$9()}));a.registerOption(c,"available",function(){return!0})}var c=a.prototype;c.$7=function(){var a={reason:b("VideoPlayerReason").USER};this.$1.clickVideo();this.$1.isState("paused")?b("VideoCTALoggingConfig").shouldLogUnpausedEvent&&this.$1.logEvent(b("VideoPlayerLoggerEvent").UNPAUSED,a):this.$1.isState("finished")&&(this.$1.setState("replayed"),this.$1.collectFeedTrackingData(),this.$1.logEvent(b("VideoPlayerLoggerEvent").REPLAYED,a));a=this.$1.getVideoNode();b("logVideosClickTracking")(a);b("Focus").set(a)};c.$10=function(){b("Arbiter").inform(b("AttachmentRelatedShareConstants").FBVIDEO_CLICK,{attachment:this.$1.getRootNode(),fbvideo_id:this.$1.getVideoID()})};c.$9=function(){this.$1.getIsInChannel()||this.$11()};c.$11=function(){b("CSS").addClass(this.$2,"_1qbf")};c.$8=function(){b("CSS").removeClass(this.$2,"_1qbf")};return a}();e.exports=a}),null);
__d("XVideoWithRapidFeedbackAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/video/instream_video/rapid_feedback/async/",{ad_type:{type:"Enum",required:!0,enumType:1},video_id:{type:"String",required:!0},ad_client_token:{type:"String"},elapsed_time_since_ad:{type:"Float"},ad_position_in_video:{type:"Float"},player_origin:{type:"Enum",enumType:1},player_sub_origin:{type:"String"},player_format:{type:"Enum",enumType:1},script_path:{type:"String"},is_indicator_shown:{type:"Bool",defaultValue:!1},is_ad_complete:{type:"Bool",defaultValue:!1}})}),null);
__d("VideoWithRapidFeedback",["AsyncRequest","DateConsts","ScriptPath","VideoPlayerStates","ViewportTrackingHelper","XVideoWithRapidFeedbackAsyncController","onViewportChanged"],(function(a,b,c,d,e,f){__p&&__p();var g=10*b("DateConsts").MS_PER_SEC;a=function(){"use strict";__p&&__p();function a(a,c){this.$1=a,this.$2=c,this.$3=0,this.$4=0,this.$6=!1,this.$7=!1,a.isState(b("VideoPlayerStates").PLAYING)&&this.$8(),a.addListener("beginPlayback",this.$8.bind(this)),a.addListener("pausePlayback",this.$9.bind(this)),a.addListener("commercialBreak/vodBreakStarting",this.$10.bind(this)),a.addListener("commercialBreak/showUFI",this.$11.bind(this)),this.$5=this.$12(),b("onViewportChanged")(this.$13.bind(this))}var c=a.prototype;c.$8=function(){this.$3===0&&(this.$3=Date.now())};c.$9=function(){this.$3>0&&(this.$4+=Date.now()-this.$3),this.$3=0};c.$10=function(){this.$6=!0};c.$11=function(){this.$6&&(this.$7=!0)};c.$13=function(){if(this.$1.isState(b("VideoPlayerStates").DESTROYED))return;var a=this.$5;this.$5=this.$12();if(a&&!this.$5){a=this.$4;this.$3>0&&(a+=Date.now()-this.$3);a>g&&(this.$4=0,this.$3=0,this.$14())}};c.$12=function(){return b("ViewportTrackingHelper").isVisible(this.$1.getRootNode(),0)};c.$14=function(){var a=null,c=null,d=null,e=null,f=null,g=null,h=this.$1.getOption("VideoWithInstreamVideo","controller");if(h){h=h.getMostRecentAdInfo();h&&h.adClientToken&&(a=h.adClientToken,c=Date.now()-h.adStartPlayingTimeMs,d=h.adPositionInVideoMs,e=h.playerOrigin,f=h.playerSubOrigin,g=h.playerFormat)}h=b("XVideoWithRapidFeedbackAsyncController").getURIBuilder().setEnum("ad_type",this.$2).setString("video_id",this.$1.getVideoID()).setString("ad_client_token",a).setFloat("elapsed_time_since_ad",c).setFloat("ad_position_in_video",d).setEnum("player_format",g).setEnum("player_origin",e).setString("player_sub_origin",f).setString("script_path",b("ScriptPath").getScriptPath()).setBool("is_indicator_shown",this.$6).setBool("is_ad_complete",this.$7);new(b("AsyncRequest"))(h.getURI()).send()};return a}();e.exports=a}),null);
__d("VideoPlayerRegistryComponent",["invariant","SubscriptionsHandler","VideoPlayerRegistry"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this.$1=a||null,this.$2=new(b("SubscriptionsHandler"))(),this.$1&&this.$3()}var c=a.prototype;c.destroy=function(){this.$4(),this.$1=null};c.getController=function(){var a=this.$1;a||g(0,2032);return a};c.enable=function(a){this.$1&&this.$1!==a&&this.$4(),this.$1=a,this.$3()};c.disable=function(a){this.$4()};c.$3=function(){var a=this,c=this.getController();b("VideoPlayerRegistry").add(c);this.$2.addSubscriptions(c.addListener("stateChange",function(){c.isState("destroyed")&&a.destroy()}))};c.$4=function(){var a=this.getController();this.$2.release();this.$2.engage();b("VideoPlayerRegistry").remove(a)};return a}();e.exports=a}),null);
__d("PlayerKeyboardControls.react",["ix","cx","CenteredContainer.react","Event","EventListener","FBCircularGlyph.react","Image.react","Keys","LiveRewindUtils","LiveVideoPlayerActions","LiveVideoRewindLoggerEvent","React","ReactDOM","VideoPlayerLoggerSource","VideoPlayerReason","asset","clamp","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=10,j=.1;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={action:null},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1=b("EventListener").listen(this.props.controller.getRootNode(),"keydown",this.$2.bind(this))};d.componentWillUnmount=function(){this.$1&&this.$1.remove()};d.$3=function(){if(!this.props.isLiveRewindEnabled)return;var a=this.props.controller,c=a.getCurrentTimePosition();this.setState({action:"pause"});a.pause(b("VideoPlayerReason").USER);b("LiveVideoPlayerActions").setIsRewound(a,!0);b("LiveRewindUtils").logLiveRewindEvent(b("LiveVideoRewindLoggerEvent").PAUSE,a,null,c,null,c)};d.$4=function(){if(!this.props.isLiveRewindEnabled)return;var a=this.props.controller,c=a.getCurrentTimePosition();this.setState({action:"play"});a.play(b("VideoPlayerReason").USER);b("LiveRewindUtils").logLiveRewindEvent(b("LiveVideoRewindLoggerEvent").PLAY,a,null,c,null,c)};d.$5=function(){return this.props.seekFrameWhenPaused&&!this.props.controller.isState("playing")?1/30:this.props.seekIncrement};d.$2=function(a){__p&&__p();var c=this.props.controller,d=this.props.controller.getSource()===b("VideoPlayerLoggerSource").TAHOE;if(this.props.isFullscreenRequired&&!c.isFullscreen())return;var e=c.getCurrentTimePosition(),f=c.getVolume();switch(b("Event").getKeyCode(a)){case b("Keys").SPACE:d&&a.preventDefault();if(c.isState("playing")){if(this.props.isLiveStreaming){this.$3();break}this.setState({action:"pause"});c.pause(b("VideoPlayerReason").USER)}else{if(this.props.isLiveStreaming){this.$4();break}this.setState({action:"play"});c.play(b("VideoPlayerReason").USER)}break;case b("Keys").LEFT:if(this.props.isLiveStreaming){this.props.isLiveRewindEnabled&&(b("LiveRewindUtils").seekBack(c),this.setState({action:"rewind"}));break}this.setState({action:"rewind"});c.seek(e-this.$5());break;case b("Keys").RIGHT:if(this.props.isLiveStreaming){this.props.isLiveRewindEnabled&&(b("LiveRewindUtils").seekForward(c),this.setState({action:"forward"}));break}this.setState({action:"forward"});c.seek(e+this.$5());break;case b("Keys").UP:if(!c.isBroadcaster()&&c.isAudioBlocked())break;d&&a.preventDefault();e=Math.min(f+j,1);this.setState({action:"volume-up"});c.setVolume(e);c.isMuted()&&c.unmute();break;case b("Keys").DOWN:if(!c.isBroadcaster()&&c.isAudioBlocked())break;d&&a.preventDefault();e=Math.max(f-j,0);e<.001?(this.setState({action:"mute"}),c.mute()):(this.setState({action:"volume-down"}),c.setVolume(e));break;case b("Keys").M:if(!c.isBroadcaster()&&c.isAudioBlocked())break;c.isMuted()?(this.setState({action:"unmute"}),c.unmute()):(this.setState({action:"mute"}),c.mute());break;case b("Keys").F:c.isFullscreen()?this.setState({action:"exit-fs"}):this.setState({action:"enter-fs"});setTimeout(function(){return c.toggleFullscreen()},100);break;case b("Keys").COMMA:this.props.enablePlaybackRateControl&&c.setPlaybackRate(b("clamp")(c.getPlaybackRate()/2,.5,1));break;case b("Keys").PERIOD:this.props.enablePlaybackRateControl&&c.setPlaybackRate(b("clamp")(c.getPlaybackRate()*2,1,2));break}};d.render=function(){__p&&__p();if(!this.state.action)return null;var a=this.props.controller,c="",d="",e=null;switch(this.state.action){case"play":c=g("476305");break;case"pause":c=g("476304");break;case"rewind":c=g("476307");d="_380-";a.isState("playing")?e=this.props.seekIncrement!==i?null:b("React").createElement(b("Image.react"),{className:"_pa6",src:g("476306")}):e=this.props.seekFrameWhenPaused?null:b("React").createElement(b("Image.react"),{className:"_pa6",src:g("476306")});break;case"forward":c=g("476308");d="_3813";a.isState("playing")?e=this.props.seekIncrement!==i?null:b("React").createElement(b("Image.react"),{className:"_pa6",src:g("476306")}):e=this.props.seekFrameWhenPaused?null:b("React").createElement(b("Image.react"),{className:"_pa6",src:g("476306")});break;case"volume-up":case"unmute":c=g("476301");break;case"volume-down":c=g("476302");break;case"mute":c=g("476303");break;case"enter-fs":c=g("476310");break;case"exit-fs":c=g("476309");break}a=b("React").createElement(b("FBCircularGlyph.react"),{circleSize:120,className:b("joinClasses")(d,"_3814"),glyph:c,ref:function(a){a=b("ReactDOM").findDOMNode(a);if(!a||!d)return;a.classList.remove(d);void a.offsetWidth;a.classList.add(d)}});return b("React").createElement(b("CenteredContainer.react"),{className:"_3815 _381b",fullHeight:!0,horizontal:!0,ref:function(a){a=b("ReactDOM").findDOMNode(a);if(!a)return;a.classList.remove("_381b");void a.offsetWidth;a.classList.add("_381b")},vertical:!0},b("React").createElement("div",null,a,e))};return c}(b("React").Component);a.defaultProps={enablePlaybackRateControl:!1,isFullscreenRequired:!1,seekIncrement:i,seekFrameWhenPaused:!1};e.exports=a}),null);
__d("EmbeddedVideoPauseOverlay",["cx","fbt","Arbiter","CSS","DOM","DOMDimensions","EventListener","VideoPlayerExperiments","throttle"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="_3bw";a=function(){"use strict";__p&&__p();function a(a,c,d,e,f,g,i,j,k){__p&&__p();var l=this;this.$1=c;this.$2=a;this.$3=d;this.$4=e;this.$5=f;this.$6=g;this.$7=i;this.$8=j;this.$9=0;k?(this.$10=k.showOnlyOnFullscreen,this.$11=k.showOnEndscreen):(this.$10=!1,this.$11=!0);this.$12=h._("Like");this.$13=h._("Unlike");this.$14=h._("Share");this.$15();this.$2.addListener("beginPlayback",this.$16.bind(this));b("VideoPlayerExperiments").embeddedPlayerInlineChaining?(this.$2.addListener("pausePlayback",this.$17.bind(this)),this.$2.addListener("finishPlayback",this.$18.bind(this))):(this.$2.addListener("pausePlayback",this.$19.bind(this)),this.$2.addListener("finishPlayback",this.$19.bind(this)));this.$2.addListener("toggleFullscreen",this.$20.bind(this));b("EventListener").listen(this.$2.getRootNode(),"mousemove",b("throttle")(this.$21.bind(this),200));b("EventListener").listen(this.$2.getRootNode(),"mouseenter",function(){l.$22=!0});b("EventListener").listen(this.$2.getRootNode(),"mouseleave",function(){l.$2.isState("playing")&&(l.$22=!1,l.$23())});b("Arbiter").subscribe("embeddedUfiToggle",function(){l.$24(),l.$25()});b("EventListener").listen(window,"resize",b("throttle")(function(){l.$25()},100))}var c=a.prototype;c.$16=function(){this.$24(),this.$25(),this.$21()};c.$24=function(){var a;this.$2.isFullscreen()?a=64:a=32;this.$15();this.$9=b("DOMDimensions").getElementDimensions(this.$3).width+b("DOMDimensions").getElementDimensions(this.$4).width+a};c.$25=function(){if(this.$2.isState("destroyed"))return;var a=b("DOMDimensions").getElementDimensions(this.$2.getRootNode()).width;a=a<this.$9;a?this.$26():this.$15()};c.$15=function(){this.$6&&b("DOM").setContent(this.$6,this.$14),this.$7&&b("DOM").setContent(this.$7,this.$12),this.$8&&b("DOM").setContent(this.$8,this.$13),this.$5&&this.$5.showText()};c.$26=function(){this.$6&&b("DOM").setContent(this.$6,null),this.$7&&b("DOM").setContent(this.$7,null),this.$8&&b("DOM").setContent(this.$8,null),this.$5&&this.$5.hideText()};c.$27=function(){return this.$10&&!this.$2.isFullscreen()?!1:this.$2.isState("playing")&&this.$22||this.$2.isState("paused")||!b("VideoPlayerExperiments").embeddedPlayerInlineChaining&&this.$2.isState("finished")};c.$21=function(){var a=this;this.$27()&&(this.$28(),clearTimeout(this.$29),this.$29=setTimeout(function(){a.$2.isState("playing")&&a.$23()},3e3))};c.$20=function(){this.$27()?this.$28():this.$23()};c.$19=function(){this.$27()&&this.$28()};c.$17=function(){this.$27()&&this.$28()};c.$18=function(){this.$11?this.$28():this.$23()};c.$28=function(){b("CSS").removeClass(this.$1,i)};c.$23=function(){b("CSS").addClass(this.$1,i)};return a}();e.exports=a}),null);