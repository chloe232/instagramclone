if (self.CavalryLogger) { CavalryLogger.start_js(["YYLuh"]); }

__d("FBStoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={EVENT_STORY:"event",FOLLOWEE_STORY:"followee",FRIEND_STORY:"friend",GROUP_STORY:"group",MISSING_STORY_DATA:"missingStoryData",PAGE_STORY:"page",SELF_STORY:"self",STORY_PROMOTION:"promotion",ACTION_OPEN_MEDIA:"open_media",ACTION_DELETE_MEDIA:"delete_media_attempted",ACTION_SEND_REPLY_ATTEMPT:"attempt_to_send_reply",ACTION_SEND_REPLY_SUCCESS:"mark_reply_sent",ACTION_SEND_REPLY_FAILURE:"reply_sent_failure",ACTION_SEND_STICKER_ATTEMPT:"attempt_to_send_sticker",ACTION_SEND_STICKER_SUCCESS:"mark_sticker_sent",ACTION_SEND_STICKER_FAILURE:"sticker_sent_failure",ACTION_SEND_GIF_ATTEMPT:"attempt_to_send_gif",ACTION_SEND_GIF_SUCCESS:"mark_gif_sent",ACTION_SEND_GIF_FAILURE:"gif_sent_failure",ACTION_SEND_REACTION_ATTEMPT:"attempt_to_send_reaction",ACTION_SEND_REACTION_SUCCESS:"mark_reaction_sent",ACTION_SEND_REACTION_FAILURE:"reaction_sent_failure",ACTION_SEND_REACTION_STICKER_INTERACTED:"reaction_sticker_interacted",ACTION_OPEN_SEEN_SUMMARY:"open_seen_summary",ACTION_OPEN_STORY:"open_story",ACTION_CLOSE_STORY:"close_story",ACTION_TRAY_LOAD:"story_tray_load",ACTION_SEND_STORY_FAILED:"send_story_failed",ACTION_SEND_STORY_SUCCEEDED:"send_story_succeed",ACTION_REPLY_ATTEMPT_COMPLETED:"reply_attempt_completed",ACTION_STORY_NAVIGATION:"story_navigation",INTERACTION_TAP_RESHARED_STORY:"reshared_story_tap",INTERACTION_TAP_RESHARED_TOOLTIP:"reshared_story_view_story_tap",GESTURES:{CLOSE_STORY:{CLICK_RIGHT:"click_right",CLICK_LEFT:"click_left",AUTO_JUMP:"auto_jump",AUTO_EXIT:"auto_exit",CLICK_EXIT:"click_exit",SWIPE_RIGHT:"swipe_right",SWIPE_LEFT:"swipe_left",SWIPE_EXIT:"swipe_exit",SWIPE_DOWN_EXIT:"swipe_down_exit",CLOSE_BUTTON_EXIT:"close_button_exit",BACK_BUTTON_EXIT:"back_button_exit"}},SOURCE_CLOSE_FROM_MODAL:"closeFromClickingOnModal",SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON:"closeFromClickingOnModalCloseButton",SOURCE_CLOSE_FROM_LAST_STORY_FINISHING:"closeFromLastStoryFinishing",SOURCES:{ARCHIVE:"archive",POST_HEADER:"post_header_actor_photo",STORY_TRAY:"story_tray",IN_FEED:"in_feed",UNKNOWN:"unknown"}};e.exports=a}),null);
__d("XFBStoriesSingleStoryAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/stories/view/async/",{card_id:{type:"FBID"},story_id:{type:"FBID"},auto_open_viewersheet:{type:"Bool",defaultValue:!1},story_action_source:{type:"String"}})}),null);
__d("FBStoriesRing",["csx","cx","Arbiter","CSS","DOM","FBStoriesLoggingConstants","XFBStoriesSingleStoryAsyncController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a.element;this.$2=a.profileId;this.$3=a.storyId;this.$4=!1;a=b("DOM").scry(this.$1,"._6_ut");a.length>0&&(this.$4=!0);this.$5()}var c=a.prototype;c.$5=function(){__p&&__p();var a=this;b("Arbiter").subscribe("has_story_bucket_been_seen",function(c,d){if(a.$2===d){c=b("DOM").scry(a.$1,"._6_ut");c.length>0&&(b("CSS").removeClass(c[0],"_6_ut"),a.$4=!1)}});b("Arbiter").subscribe("update_next_thread_to_view",function(c,d){c=d.bucketOwnerId;d=d.threadId;if(a.$2===c&&a.$4){c=b("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id",a.$3).setFBID("card_id",d).setBool("auto_open_viewersheet",!1).setString("story_action_source",b("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();a.$1.setAttribute("ajaxify",c)}})};return a}();e.exports=a}),null);
__d("PageMessageAction.react",["MessengerDiscoveryEntryPoint","PagesMessageButton.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.action;return b("React").createElement(b("PagesMessageButton.react"),{className:this.props.className,icon:this.props.icon,isSecondaryAction:this.props.isSecondaryAction,pageID:a.messaging_page.id,pageCategory:a.page.category_type,settings:{adminSettings:a.admin_inbox_url?{inboxURI:a.admin_inbox_url,messengerLinkURI:a.admin_messenger_link_url,showMessengerLinkNUX:a.admin_show_messenger_link_nux}:null,isLoggedIn:!0,ref:a.messaging_page.id===a.page.id?b("MessengerDiscoveryEntryPoint").FB_PAGE_SECONDARY_MESSAGE_BUTTON:b("MessengerDiscoveryEntryPoint").FB_PAGE_LOCATIONS_CHILD_PAGE_MESSAGE_CTA,showNUX:a.show_nux,label:a.label.text},size:this.props.size})};return c}(b("React").Component);e.exports=a}),null);
__d("InlineLoginDialogWrapper.react",["AsyncRequest","CurrentUser","React","XLoggedOutInlineLoginDialogController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={loginPromptCreated:!1},d.$2=function(a){!b("CurrentUser").isLoggedIn()&&(d.props.SEOInlineLoginDialogGatingPayload==null||d.props.SEOInlineLoginDialogGatingPayload())&&(a.stopPropagation(),d.$3())},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.$3=function(){this.$1&&this.$4(this.$1)};d.$4=function(a){this.state.loginPromptCreated||(this.$5(a),this.setState({loginPromptCreated:!0}))};d.$5=function(a){var c=b("XLoggedOutInlineLoginDialogController").getURIBuilder().setString("redirect_uri",this.props.next).getURI();new(b("AsyncRequest"))().setURI(c).setMethod("POST").setRelativeTo(a).send()};d.render=function(){var a=this;return b("React").createElement("div",{onClickCapture:this.$2,ref:function(b){return a.$1=b}},this.props.children)};return c}(b("React").PureComponent);e.exports=a}),null);
__d("SEOInlineLoginDialogGating.react",["gkx"],(function(a,b,c,d,e,f){"use strict";a={seoPagesLoginPrompt:function(){return b("gkx")("1051420")},seoJobsDetailViewLoginPrompt:function(){return b("gkx")("1064552")}};e.exports=a}),null);
__d("PageCreatePageButton.react",["fbt","AsyncRequest","InlineLoginDialogWrapper.react","PagesLogger","PagesLoggerEventEnum","PagesLoggerEventTargetEnum","React","SEOInlineLoginDialogGating.react","XPageCreationAsyncDialogController","XUIButton.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){b("PagesLogger").log(String(d.props.fbid),b("PagesLoggerEventEnum").CLICK,b("PagesLoggerEventTargetEnum").CREATE_PAGE_BUTTON);var a=b("XPageCreationAsyncDialogController").getURIBuilder().setFBID("ref_page_id",d.props.fbid).setString("ref_type","page_profile_button").getURI();new(b("AsyncRequest"))().setURI(a).send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){b("PagesLogger").log(String(this.props.fbid),b("PagesLoggerEventEnum").IMPRESSION,b("PagesLoggerEventTargetEnum").CREATE_PAGE_BUTTON)};d.render=function(){return b("React").createElement(b("InlineLoginDialogWrapper.react"),{SEOInlineLoginDialogGatingPayload:b("SEOInlineLoginDialogGating.react").seoPagesLoginPrompt,next:this.props.next},b("React").createElement(b("XUIButton.react"),{label:g._("Create a Page"),onClick:this.$1,use:"special"}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("VideoLink.react",["cx","Bootloader","Keys","React","URI","VideoPlayerOrigins","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(a){a.preventDefault();a=d.props;var c=a.playerOrigin,e=a.playerSuborigin;a=d.props;var f=a.channelID,g=a.channelCaller,h=a.externalLogID,i=a.reactionVideoChannelType,j=a.reactionVideoChannelSubtype,k=a.videoListID,l=new(b("URI"))(d.props.href);d.props.referrer&&d.props.referrer==="video_home"&&(c=b("VideoPlayerOrigins").VIDEO_HOME,e=e?"page_timeline_"+e:"page_timeline_misc");b("Bootloader").loadModules(["TahoeController"],function(a){a.openFromVideoLink(l,{channelID:f,caller:g,externalLogID:h,origin:c,suborigin:e,reactionVideoChannelType:i,reactionVideoChannelSubtype:j,videoListID:k})},"VideoLink.react");d.props.onClick&&d.props.onClick()},d.$2=function(a){a.keyCode==b("Keys").RETURN&&d.$1(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a;return b("React").createElement("span",babelHelpers["extends"]({},this.props,{href:this.props.href,ref:"link",onClick:this.$1,onKeyDown:this.$2,className:b("joinClasses")(this.props.className,"_3vwb _400z _2-40"),role:"button",tabIndex:(a=this.props.tabIndex)!=null?a:"0"}),this.props.children)};return c}(b("React").Component);e.exports=a}),null);
__d("oz-player/loggings/OzLoggingUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b,c){a=a.getOperationLogger(b).start();try{b=c(a);return b}catch(b){a.setError(b);throw b}finally{a.log()}}function b(a,b,c,d,e){__p&&__p();d===void 0&&(d=function(){});e===void 0&&(e=function(){});var f=b.getOperationLogger(c).start();d(f);return a.then(function(a){e(f);f.log();return a})["catch"](function(a){f.setError(a);e(f);f.log();throw a})}e.exports={executeOperationAndLog:a,monitorPromiseAndLogOperation:b}}),null);
__d("oz-player/loggings/OzOperationLoggerBase",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this.$1=a}var b=a.prototype;b.start=function(){this.getClientTimeBegin()||this.setClientTimeBegin(Date.now());return this};b.log=function(){this.getClientTimeEnd()||this.setClientTimeEnd(Date.now())};b.setError=function(a){this.$2=a;return this};b.setResult=function(a){this.$3=a;return this};b.setType=function(a){this.$4=a;return this};b.setClientTimeBegin=function(a){this.$5=a;return this};b.setClientTimeEnd=function(a){this.$6=a;return this};b.setSegmentCount=function(a){this.$13=a;return this};b.setTimeToFirstByte=function(a){this.$7=a;return this};b.setTimeToLastByte=function(a){this.$8=a;return this};b.setTimeToRequestStart=function(a){this.$9=a;return this};b.setTimeToRequestSent=function(a){this.$10=a;return this};b.setReason=function(a){this.$11=a;return this};b.setResource=function(a){this.$12=a;return this};b.setSegmentStartTime=function(a){this.$14=a;return this};b.setSegmentEndTime=function(a){this.$15=a;return this};b.setLength=function(a){this.$16=a;return this};b.setLiveheadPosition=function(a){this.$17=a;return this};b.setManifestType=function(a){this.$18=a;return this};b.setPriorityFloat=function(a){this.$19=a;return this};b.setAppendedBufferMs=function(a){this.$20=a;return this};b.setInitiator=function(a){this.$21=a;return this};b.setPreloadTime=function(a){this.$22=a;return this};b.setConcluder=function(a){this.$23=a;return this};b.setPreviousRepresentationID=function(a){this.$24=a;return this};b.setRepresentationID=function(a){this.$25=a;return this};b.setStreamSwitchReason=function(a){this.$26=a;return this};b.setState=function(a){this.$27=a;return this};b.setContentLengthHeader=function(a){this.$28=a;return this};b.setCode=function(a){this.$29=a;return this};b.getError=function(){return this.$2};b.getResult=function(){return this.$3};b.getType=function(){return this.$4};b.getClientTimeBegin=function(){return this.$5};b.getClientTimeEnd=function(){return this.$6};b.getTimeToRequestStart=function(){return this.$9};b.getTimeToRequestSent=function(){return this.$10};b.getReason=function(){return this.$11};b.getResource=function(){return this.$12};b.getOperationName=function(){return this.$1};b.getSegmentStartTime=function(){return this.$14};b.getSegmentEndTime=function(){return this.$15};b.getLength=function(){return this.$16};b.getLiveheadPosition=function(){return this.$17};b.getManifestType=function(){return this.$18};b.getPriorityFloat=function(){return this.$19};b.getAppendedBufferMs=function(){return this.$20};b.getInitiator=function(){return this.$21};b.getPreloadTime=function(){return this.$22};b.getConcluder=function(){return this.$23};b.getContentLengthHeader=function(){return this.$28};b.getCode=function(){return this.$29};return a}();e.exports=a}),null);
__d("oz-player/shims/OzEventEmitter",["EventEmitter"],(function(a,b,c,d,e,f){"use strict";e.exports=b("EventEmitter")}),null);
__d("oz-player/shims/OzEventListener",["EventListener"],(function(a,b,c,d,e,f){"use strict";e.exports=b("EventListener")}),null);
__d("oz-player/shims/OzSubscriptionsHandler",["SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";e.exports=b("SubscriptionsHandler")}),null);
__d("oz-player/shims/ozvariant",["invariant"],(function(a,b,c,d,e,f){e.exports=b("invariant")}),null);
__d("oz-player/utils/OzErrorEmitter",["oz-player/shims/OzEventEmitter","oz-player/shims/ozvariant"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c){__p&&__p();var d;c===void 0&&(c=!1);d=a.call(this)||this;d.$OzErrorEmitter1=!1;d.$OzErrorEmitter2=!1;d.$OzErrorEmitter3=[];d.emitError=function(a){!d.$OzErrorEmitter1?d.$OzErrorEmitter2?d.$OzErrorEmitter3.push(a):d.$OzErrorEmitter1||b("oz-player/shims/ozvariant")(0,14038):d.emit("error",a)};d.$OzErrorEmitter2=c;return d}var d=c.prototype;d.onError=function(a){this.$OzErrorEmitter1=!0;a=this.addListener("error",a);this.$OzErrorEmitter2&&this.$OzErrorEmitter3.length>0&&this.$OzErrorEmitter3.forEach(this.emitError);return a};return c}(b("oz-player/shims/OzEventEmitter"));e.exports=a}),null);