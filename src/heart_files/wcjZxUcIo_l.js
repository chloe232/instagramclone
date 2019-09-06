if (self.CavalryLogger) { CavalryLogger.start_js(["hEUSZ"]); }

__d("FacebookWebNotificationsSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"2382846945064526",queryID:"1138169679678964"})}),null);
__d("FacebookWebNotificationsSubscription",["invariant","BanzaiODS","BaseGraphQLSubscription","CurrentUser","FacebookWebNotificationsSubscriptionWebGraphQLSubscription","StreamStateMachineConstants","SubscriptionsHandler","WebPixelRatio","uuid"],(function(a,b,c,d,e,f,g){__p&&__p();var h=b("StreamStateMachineConstants").events,i="WEB_DESKTOP",j=[],k=null,l="www.notifications.lifecycle",m=0,n=!1,o=!1,p=function(c){"use strict";__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTopic=function(a){return"gqls/"+this.getSubscriptionCallName()+"/actor_id_"+a.actorID+"_environment_"+i};d.getQueryID=function(){return b("FacebookWebNotificationsSubscriptionWebGraphQLSubscription").getDocID()};d.getQueryParameters=function(a){return{input:JSON.stringify({client_subscription_id:b("uuid")(),environment:i}),is_work_user:b("CurrentUser").isWorkUser(),scale:b("WebPixelRatio").get()}};d.getSubscriptionCallName=function(){return"web_notification_receive_subscribe"};return a}(b("BaseGraphQLSubscription"));function q(a){__p&&__p();a=Date.now()-a;if(a<6e4)return"1m";else if(a<3e5)return"5m";else if(a<9e5)return"15m";else if(a<18e5)return"30m";else if(a<36e5)return"1h";else return"1h+"}function r(a){__p&&__p();if(a.__type==="lifecycle_event"){var c=a.state;if(c===h.GQLS_STATE_TRANSIT_ON_CREATE){m=Date.now();return}if(n&&c===h.GQLS_STATE_TRANSIT_ON_ACTIVE){var d=h.GQLS_STATE_TRANSIT_ON_RESUME,e=q(m);b("BanzaiODS").bumpEntityKey(2966,l,d);o||(e!=null&&b("BanzaiODS").bumpEntityKey(2966,l,"first."+d+"."+e),o=!0);b("BanzaiODS").bumpEntityKey(2966,l,d+"."+e);return}b("BanzaiODS").bumpEntityKey(2966,l,c);if(c===h.GQLS_STATE_TRANSIT_ON_PAUSE){if(!n){n=!0;d=q(m);d!=null&&b("BanzaiODS").bumpEntityKey(2966,l,c+"."+d)}m=Date.now()}return}e=a.web_notification_receive_subscribe;if(e==null)return;b("BanzaiODS").bumpEntityKey(2966,l,"payload");var f=e.aggregated_notification,g=e.notification,i=e.pinned_conversation,k=e.should_play_sound,p=e.should_show_beeper;j.forEach(function(a){switch(a.event){case"NEW_BEEPER":g!=null&&p===!0&&a.callback({notification:g,should_play_sound:!!k});break;case"NEW_NOTIFICATION":f!=null&&a.callback(f);break;case"NEW_PINNED_CONVERSATION":i!=null&&a.callback(i);break}})}e.exports={subscribe:function(a){__p&&__p();j.push(a);k===null&&(k=new(b("SubscriptionsHandler"))(),k.addSubscriptions(p.subscribe({actorID:b("CurrentUser").getID()},r)));var c=!1;return{remove:function(){if(c===!0)return;k!=null||g(0,3589);c=!0;j.splice(j.indexOf(a),1);j.length===0&&(k.release(),k=null)}}}}}),null);
__d("NotificationTokens",["CurrentUser"],(function(a,b,c,d,e,f){a={tokenizeIDs:function(a){return a.map(function(a){return b("CurrentUser").getID()+":"+a})},untokenizeIDs:function(a){return a.map(function(a){return a.split(":")[1]})}};e.exports=a}),null);
__d("NotificationConstants",[],(function(a,b,c,d,e,f){e.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d("NotificationUpdates",["Arbiter","LiveTimer","NotificationConstants","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={},i={},j={},k=!1,l=[],m=0,n=new(b("Arbiter"))();function o(){__p&&__p();if(m)return;var a=g,b=h,c=i,d=j;g={};h={};i={};j={};(Object.keys(a).length||k)&&(k=!1,q("notifications-updated",a));Object.keys(b).length&&q("seen-state-updated",b);Object.keys(c).length&&q("read-state-updated",c);Object.keys(d).length&&q("hidden-state-updated",d);l.pop()}function p(){return l.length?l[l.length-1]:b("NotificationConstants").PayloadSourceType.UNKNOWN}function q(a,b){s.inform(a,{updates:b,source:p()})}var r=null,s={getserverTime:function(){return r},handleUpdate:function(a,c,d,e){c.servertime&&(r=c.servertime,b("LiveTimer").restart(c.servertime)),this._updateWithPayload(a,c)},_updateWithPayload:function(a,b){var c=this;Object.keys(b).length&&this.synchronizeInforms(function(){l.push(a);var d=babelHelpers["extends"]({},b,{payloadsource:p()});c.inform("update-notifications",d);c.inform("update-seen",d);c.inform("update-read",d);c.inform("update-hidden",d)})},getArbiter:function(){return n},inform:function(a,b){return n.inform(a,b)},subscribe:function(a,b){return n.subscribe(a,b)},didUpdateNotifications:function(a){Object.assign(g,b("createObjectFrom")(a)),k=!0,o()},didUpdateSeenState:function(a){Object.assign(h,b("createObjectFrom")(a)),o()},didUpdateReadState:function(a){Object.assign(i,b("createObjectFrom")(a)),o()},didUpdateHiddenState:function(a){Object.assign(j,b("createObjectFrom")(a)),o()},synchronizeInforms:function(a){m++;try{a()}catch(a){throw a}finally{m--,o()}}};e.exports=s}),null);
__d("createNotificationSubscriptions",["invariant","Bootloader","JSLogger","NotificationConstants","NotificationUpdates","SubscriptionsHandler","filterNulls"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null,i=null,j=0;function k(){h==null&&(h=b("JSLogger").create("notification_updates"));return h}function l(){for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];b("Bootloader").loadModules(["NotificationSeenState","NotificationStore"],function(){b("NotificationUpdates").handleUpdate.apply(b("NotificationUpdates"),c)},"createNotificationSubscriptions")}function a(a){__p&&__p();var c=a.subscribeToNotificationHides,d=a.subscribeToNotificationReadnessUpdates,e=a.subscribeToNotificationSeenStateUpdates,f=a.subscribeToRealtimeChannelNotifications;return{setup:function(){__p&&__p();j++;if(i==null){var a;i=new(b("SubscriptionsHandler"))();var h=[c(function(a){l(b("NotificationConstants").PayloadSourceType.LIVE_SEND,{hiddenState:a})}),d(function(a){l(b("NotificationConstants").PayloadSourceType.LIVE_SEND,{readState:a})}),e(function(a){l(b("NotificationConstants").PayloadSourceType.LIVE_SEND,{seenState:a})}),f(function(a,c){k().debug("notifications_received",a),a!==null&&l(b("NotificationConstants").PayloadSourceType.LIVE_SEND,{nodes:a,servertime:Date.now()/1e3,endpoint:c})})];(a=i).addSubscriptions.apply(a,b("filterNulls")(h))}var m=!1;return{remove:function(){if(m===!0)return;i!=null||g(0,5521);m=!0;j--;j===0&&(i.release(),i=null)}}}}}e.exports=a}),null);
__d("NotificationSubscriptions",["Arbiter","ChannelConstants","FacebookWebNotificationsSubscription","NotificationTokens","createNotificationSubscriptions","createObjectFrom"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){(!a.eligible_buckets||!a.eligible_buckets.includes("PRIORITY_INBOX"))&&(a.eligible_buckets=["PRIORITY_INBOX"].concat(a.eligible_buckets||[]));if(!a.sort_keys){var b=a.creation_time||Date.now()/1e3;a.sort_keys=[""+b,b+"000000"]}return a}e.exports=b("createNotificationSubscriptions")({subscribeToNotificationHides:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notification_hidden"),function(c,d){c=b("NotificationTokens").tokenizeIDs([d.obj.notif_id+""]);d=d.obj.state===1;a(b("createObjectFrom")(c,d))})},subscribeToNotificationReadnessUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_read"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToNotificationSeenStateUpdates:function(a){return b("Arbiter").subscribe(b("ChannelConstants").getArbiterType("notifications_seen"),function(c,d){c=b("NotificationTokens").tokenizeIDs(d.obj.alert_ids);d=d.obj.new_state;a(b("createObjectFrom")(c,d))})},subscribeToRealtimeChannelNotifications:function(a){return b("FacebookWebNotificationsSubscription").subscribe({event:"NEW_NOTIFICATION",callback:function(b){a(b?[g(b)]:null)}})}})}),null);
__d("GlobalNotificationSubscriptionsSubscription",["NotificationSubscriptions"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationSubscriptions").setup()}),null);
__d("FacebookWebNotificationsQueryWebGraphQLQuery",["WebGraphQLQueryBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"2211568468936487"};b.getQueryID=function(){return"240195660183444"};return b}(b("WebGraphQLQueryBase"))}),null);
__d("NotificationSync",["invariant","Arbiter","ChannelConstants","CurrentUser","FacebookWebNotificationsQueryWebGraphQLQuery","FBLogger","NotificationConstants","NotificationUpdates","WebGraphQL","WebPixelRatio","ifRequired","objectValues","promiseDone"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0;function i(){var a={endpointControllerName:"WebNotificationsPayloadPagelet"},c;b("ifRequired")("NotificationStore",function(d){c=b("objectValues")(d.getAll(a))});if(c==null)return null;var d=c.map(function(a){return a.creation_time}).filter(Boolean);return d.length===0?null:Math.max.apply(Math,d)}function j(){__p&&__p();var a=i();if(a==null)return;try{b("promiseDone")(b("WebGraphQL").exec(new(b("FacebookWebNotificationsQueryWebGraphQLQuery"))({is_work_user:b("CurrentUser").isWorkUser(),newer_than:a,scale:b("WebPixelRatio").get(),should_fetch_buckets:!1,should_fetch_sort_keys:!1,should_include_server_time:!1})),function(a){__p&&__p();if(a){a=(a=a)!=null?(a=a.viewer)!=null?(a=a.notifications)!=null?a.edges:a:a:a;a=a&&a.map(function(a){a=a.node;return a}).filter(Boolean);if(a==null)return;a={nodes:a};b("NotificationUpdates").handleUpdate(b("NotificationConstants").PayloadSourceType.SYNC,a)}},function(a){return b("FBLogger")("notifications").catching(a).mustfix("NotificationSync promise rejected: %s",a.message)})}catch(a){b("FBLogger")("notifications").catching(a).mustfix("NotificationSync error: %s",a.message)}}var k=null,l=0;a={setup:function(a){__p&&__p();l++;(h===null||a>h)&&(h=a);k==null&&(k=b("Arbiter").subscribe(b("ChannelConstants").ON_INVALID_HISTORY,j));var c=!1;return{remove:function(){if(c===!0)return;k!=null||g(0,51);c=!0;l--;l===0&&(k.unsubscribe(),k=null)}}}};e.exports=a}),null);
__d("GlobalNotificationSyncSubscription",["InitialServerTime","NotificationSync"],(function(a,b,c,d,e,f){"use strict";e.exports=b("NotificationSync").setup(b("InitialServerTime").serverTime)}),null);
__d("NotificationSeenFilter",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALL:"all",SEEN_ONLY:"seen_only",UNSEEN_ONLY:"unseen_only",READ_ONLY:"read_only",UNREAD_ONLY:"unread_only",SEEN_BUT_UNREAD_ONLY:"seen_unread_only"})}),null);
__d("NotificationSeenState",["NotificationConstants","NotificationSeenFilter","NotificationUpdates","createObjectFrom","ifRequired","objectValues"],(function(a,b,c,d,e,f){__p&&__p();var g=1,h=2,i=0,j=g,k=3,l=b("NotificationConstants").PayloadSourceType.INITIAL_LOAD,m={SEEN_AND_READ:k,SEEN_BUT_UNREAD:j,UNSEEN_AND_UNREAD:i},n={};b("ifRequired")("NotificationStore",function(a){a=a.getAllForAllEndpoints();a=b("objectValues")(a);var c=p(a);Object.keys(c).forEach(function(a){var b=c[a];n[a]=b})});function o(a){__p&&__p();var c=[],d=[];Object.keys(a).forEach(function(b){__p&&__p();var e=a[b],f=n[b];n[b]=e;if(f===void 0){c.push(b);d.push(b);return}f=f^e;f&g&&c.push(b);f&h&&d.push(b)});c.length&&b("NotificationUpdates").didUpdateSeenState(c);d.length&&b("NotificationUpdates").didUpdateReadState(d)}b("NotificationUpdates").subscribe("update-notifications",function(a,c){__p&&__p();a=c.nodes;if(!a||!a.length)return;c=c.payloadsource;var d=b("NotificationConstants").PayloadSourceType,e=c==d.ENDPOINT;c=a.filter(function(a){a=a.alert_id;return!e||n[a]===void 0});d=p(c);o(d)});function p(a){var b={};a.forEach(function(a){a.seen_state&&(b[a.alert_id]=m[a.seen_state])});return b}b("NotificationUpdates").subscribe("update-seen",function(a,c){__p&&__p();if(!c.seenState)return;var d=[],e={};Object.keys(c.seenState).forEach(function(a){if(!c.seenState||!c.seenState[a]){d.push(a);return}var b=n[a];b!==void 0&&(e[a]=b|g)});a=babelHelpers["extends"]({},b("createObjectFrom")(d,i),e);o(a)});b("NotificationUpdates").subscribe("update-read",function(a,c){__p&&__p();if(!c.readState)return;var d=[],e={};Object.keys(c.readState).forEach(function(a){if(!c.readState)return;var b=c.readState[a];if(b){d.push(a);return}b=n[a];b!==void 0?e[a]=b&~h:c.payloadsource==l&&(e[a]=j)});a=babelHelpers["extends"]({},b("createObjectFrom")(d,k),e);o(a)});function q(a){a=n[a];return a}var r={isRead:function(a){return q(a)===k},isSeen:function(a){return q(a)!==i},getUnseenCount:function(a,b){return r.getUnseenIDs(a,b).length},getUnseenIDs:function(a,b){var c=Object.keys(n).filter(function(a){return n[a]===i});a&&(c=c.filter(function(c){return b&&b[c]===a}));return c},getUnreadCount:function(){return r.getUnreadIDs().length},getUnreadIDs:function(){return Object.keys(n).filter(function(a){return n[a]!==k})},validateFilter:function(a,c){switch(c){case b("NotificationSeenFilter").SEEN_ONLY:return r.isSeen(a);case b("NotificationSeenFilter").UNSEEN_ONLY:return!r.isSeen(a);case b("NotificationSeenFilter").READ_ONLY:return r.isRead(a);case b("NotificationSeenFilter").UNREAD_ONLY:return!r.isRead(a);case b("NotificationSeenFilter").SEEN_BUT_UNREAD_ONLY:return r.isSeen(a)&&!r.isRead(a);default:return!0}}};e.exports=r}),6);
__d("NotificationOptionActionWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}b.__getDocID=function(){return"1420844941369152"};b.getQueryID=function(){return"318967338567215"};return b}(b("WebGraphQLMutationBase"))}),null);
__d("NotificationUserActions",["AsyncRequest","Bootloader","BusinessUserConf","CurrentUser","NotificationConstants","NotificationOptionActionWebGraphQLMutation","NotificationTokens","NotificationUpdates","WebGraphQL","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType.USER_ACTION,h=!1;function i(a){b("BusinessUserConf").businessUserID!=null&&(a.biz_user_id=b("BusinessUserConf").businessUserID),new(b("AsyncRequest"))("/ajax/notifications/mark_read.php").setData(a).setAllowCrossPageTransition(!0).send()}function j(a){var b={};a.forEach(function(a,c){b["alert_ids["+c+"]"]=a});return b}a={markNotificationsAsSeen:function(a,c,d){__p&&__p();var e=document.getElementById("notificationsCountValue"),f=null;e&&(f=e.textContent);b("NotificationUpdates").handleUpdate(g,{seenState:b("createObjectFrom")(a)});e=b("NotificationTokens").untokenizeIDs(a);a=j(e);a.seen=!0;f&&(a.badgeCount=f);c&&(a.source_view=c);d&&(a.classification=d);i(a)},setNextIsFromReadButton:function(a){h=a},markNotificationsAsRead:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!0)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);c&&(a.source_view=c);i(a)},markNotificationsAsUnread:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!1)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);a.unread=!0;c&&(a.source_view=c);i(a)},markAllNotificationsAsRead:function(a){b("Bootloader").loadModules(["NotificationSeenState"],function(c){c=c.getUnreadIDs();c.length>0&&b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(c)});c={read:!0};h&&(c.from_read_button=!0,h=!1);a&&(c.source_view=a);i(c)},"NotificationUserActions")},sendNotifOption:function(a){return b("WebGraphQL").exec(new(b("NotificationOptionActionWebGraphQLMutation"))({input:{action_type:a,actor_id:b("CurrentUser").getID(),client_mutation_id:"0"}}))}};e.exports=a}),null);
__d("NotificationBeeperConst",["keyMirror"],(function(a,b,c,d,e,f){a={IDLE_DELAY:1e4,ACTIVE_DELAY_LONG:4e3,FADE_OUT_LENGTH:1500,BeepStates:b("keyMirror")({PENDING:!0,RENDERED:!0,READY_TO_HIDE:!0,FADING_OUT:!0})};e.exports=a}),null);
__d("NotificationInterpolator",["cx","Badge.react","React","TextWithEmoticons.react","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=null;((c=c.entity)!=null?(c=c.work_foreign_entity_info)!=null?c.type:c:c)==="FOREIGN"&&(d=b("React").createElement(b("Badge.react"),{type:"work_non_coworker"}));typeof a==="string"&&(a=b("React").createElement(b("TextWithEmoticons.react"),{text:a}));return b("React").createElement("span",{className:b("joinClasses")("fwb","_6btd")},a,d)}e.exports=a}),null);
__d("GamesXOut.react",["cx","React","ShimButton.react","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:b("joinClasses")("_2b2u",this.props.className)},this.props.children,b("React").createElement(b("ShimButton.react"),{className:"_1m6e",onClick:this.props.onClick}))};return c}(b("React").Component);c.propTypes={onClick:a.func.isRequired};e.exports=c}),null);
__d("NotificationSound",["Sound"],(function(a,b,c,d,e,f){__p&&__p();var g=5e3;b("Sound").init(["audio/mpeg"]);function a(a){this._soundPath=a,this._lastPlayed=0}Object.assign(a.prototype,{play:function(a){if(!this._soundPath)return;var c=Date.now();if(c-this._lastPlayed<g)return;this._lastPlayed=c;b("Sound").playOnlyIfImmediate(this._soundPath,a,!1)}});e.exports=a}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("FeedQuickLogModule",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CACHE_FETCH:655545,CACHE_WRITE:655581,CHANGESET_APPLICATION_IOS:655574,COLD_START_DB_CACHE:655373,COLD_START_NETWORK:655437,COLD_START_STEP:655485,COLD_TTI:655382,COMMENT_TTL_WWW:655585,CONSUMPTION_RESTORATION_ANDROID:655566,CONSUMPTION_RESTORATION_IOS:655565,CONSUMPTION_RESTORATION_WWW:655575,CONTENT_PREFETCHING_ANDROID:655621,CREATOR_APP_PAGE_FOLLOWING_FEED_NETWORK_TIME:655553,DB_CACHE_LOAD:655536,DISPLAY_NEW_CONTENT:655564,EVENTS_NETWORK_TIME:655487,FBLITE_IN_FB4A_COLD_TTI:655539,FEED_ANDROID_LOAD_DB:655608,FEED_EARLY_NETWORK_REQUEST:655625,FEED_EDGE_PRIVACY_INVALIDATION_FB4A:655627,FEED_SCROLLING:655510,FEED_SCROLLING_START_UP:655618,FEED_STARTUP_IOS:655624,FEED_UNIT_EXISTS:655563,FEED_UNIT_MOUNT_TO_UNMOUNT:655613,FEED_UNIT_SERIALIZATION_FB4A:655630,FEED_UNIT_SERIALIZATION_SKIP:655633,FRAME_DURATION:655580,FRESH_FEED_JS_ORDER_COLLECTION:655599,FRESH_FEED_RERANK:655525,FRIEND_LIST_FEED_NEWTORK_TIME:655488,FULL_CACHE_HANDLER:655637,GROUPS_NETWORK_TIME:655490,HASHTAG_FEED_NETWORK_TIME:655491,IMAGE_LOAD_WWW:655576,IMAGE_LOG_FAKE_MOBILE_LAB_AVG_ANDROID:655586,IMAGE_REQUEST:655605,INSPIRATIONCAMERA_COLD_TTI:655526,INSPIRATIONCAMERA_WARM_TTI:655527,INSPIRATION_DIVEBAR_CAMERA_TO_FEED:655532,INSPIRATION_DIVEBAR_CAMERA_TTI:655529,INSPIRATION_DIVEBAR_FEED_TO_CAMERA:655531,INSPIRATION_FEED_NETWORK_TIME:655542,LIVE_FEED_INVALIDATION:655628,LIVE_FEED_INVALIDATION_ADS:655629,LIVE_VPV_ANDROID:655601,LIVE_VPV_ELIGIBLE_ANDROID:655604,LOAD:655546,LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS:655557,LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS_IOS:655559,LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS_WWW:655596,LOAD_ANY_DESTINATION_FROM_PRELOAD_CAROUSEL:655591,LOAD_COMMENT_COMPOSER:655594,LOAD_COMMENT_COMPOSER_DRAWER:655622,LOAD_MORE_COMMENTS_IOS:655577,LOAD_MORE_COMMENT_REPLIES_IOS:655578,LOAD_STORY_PERMALINK_FROM_ANYWHERE:655555,LOAD_STORY_PERMALINK_FROM_ANYWHERE_IOS:655570,LOAD_STORY_PERMALINK_FROM_ANYWHERE_TTRC_IOS:655602,LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW:655597,LOAD_STORY_PERMALINK_FROM_PRELOAD_CAROUSEL:655592,LOAD_THREADED_PERMALINK_FROM_ANYWHERE:655558,LOAD_THREADED_PERMALINK_FROM_PRELOAD_CAROUSEL:655593,LOAD_THREADED_REPLY_PERMALINK_FROM_ANYWHERE_IOS:655571,LOAD_THREADED_REPLY_PERMALINK_FROM_ANYWHERE_TTRC_IOS:655603,MAIN_THREAD_PERFORMANCE:655595,MOBILE_BOOST_SCROLL_DURATION_ANDROID:655611,NETWORK_FETCH:655544,NETWORK_FETCH_THROTTLE:655631,NETWORK_LOAD_IOS:655573,NNF_BACKPRESS_TO_FEED:655413,NNF_BACKPRESS_TO_FEED_WITH_CREATION:655414,NNF_COLD_DATA_FETCHED_TO_FIRST_RENDER_TAG:655432,NNF_COLD_FRAGMENT_CREATE_TO_DATA_FETCHED_TAG:655443,NNF_COLD_FRESH_CONTENT_START_TAG:655444,NNF_COLD_MAINTAB_CREATE_TO_FEED_CREATE_TAG:655450,NNF_COLD_START:655361,NNF_COLD_START_CHROME_LOAD_TIME_TAG:655420,NNF_COLD_START_DB_CACHE_TAG:655442,NNF_COLD_TTI:655473,NNF_FEED_PULL_TO_REFRESH_BEFORE_EXECUTE_TIME:655445,NNF_FEED_PULL_TO_REFRESH_NETWORK_AND_RENDER_TIME:655425,NNF_FEED_PULL_TO_REFRESH_NETWORK_TIME:655424,NNF_FEED_TAIL_FETCH_NETWORK_CALL_TIME:655426,NNF_FEED_TAIL_FETCH_NOT_CONNECTED_CALL_TIME:655427,NNF_FEED_TAIL_FETCH_RENDER_TIME:655423,NNF_FEED_TAIL_FETCH_TIME:655422,NNF_FEED_VISIBLE_TAIL_FETCH_TIME:655410,NNF_FIRST_RUN_COLD_START_TAG:655418,NNF_FRAGMENT_VIEW_CREATE_TAG:655417,NNF_FRESH_FETCH_TAG:655472,NNF_HOT_AND_CACHED_RENDER_TIME:655433,NNF_HOT_AND_FRESH_RENDER_TIME_NOT_VISIBLE:655434,NNF_HOT_TTI:655416,NNF_NAVIGATE_TO_FEED:655448,NNF_NAVIGATE_TO_FEED_WITH_CREATION:655421,NNF_NAVIGATE_TO_OTHER_FEED:655428,NNF_NETWORK_TIME:655495,NNF_NETWORK_TIME_CHUNKED_REMAINDER:655496,NNF_NETWORK_TIME_HEAD_2:655548,NNF_NETWORK_TIME_TAIL:655497,NNF_NETWORK_TIME_UNSET:655498,NNF_PERMALINK_ANDROID_NOTIFICATION_COLD_LOAD:655412,NNF_PERMALINK_ANDROID_NOTIFICATION_WARM_LOAD:655409,NNF_WARM_DATA_FETCHED_TO_FIRST_RENDER_TAG:655430,NNF_WARM_FRAGMENT_CREATE_TO_DATA_FETCHED_TAG:655431,NNF_WARM_MAINTAB_CREATE_TO_FEED_CREATE_TAG:655451,NNF_WARM_START:655364,NOTIFICATION_INTERACTION_WWW:655584,PAGE_FEED_NETWORK_TIME:655507,PD_COMPAT_RENDER:655552,PERMALINK_FROM_FEED_LOAD:655368,PERMALINK_FROM_NOTIF_HEAD_LOAD:655579,PERMALINK_NOTIFICATION_FLYOUT_LOAD:655543,PERMALINK_NOTIFICATION_LOAD:655408,PERMALINK_ON_CREATE_TO_LOAD_IF_NO_NAVIGATIONAL_METRICS:655407,PHOTOS_FEED_TTI:655572,POOL_CACHE_IOS:655632,POST_RESUME:655541,POST_STARTUP:655535,REACTION_FEED_NETWORK_TIME:655499,SCROLL_PERF:655590,SHOWCASE_ANDROID:655635,SHOWCASE_EPHEMERAL_FEED:655634,STORY_DELIVERY:655561,STORY_INVALIDATION_FB4A:655623,TAIL_LOAD_TTI:655556,TAIL_NETWORK_FETCH:655562,TOUCH_LATENCY:655534,WARM_START:655390,WARM_START_STEP:655486,WARM_TTI:655379})}),null);
__d("NotifTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REACT_BLUE_BAR_JEWEL:"react_blue_bar_jewel",NON_REACT_BLUE_BAR_JEWEL:"non_react_blue_bar_jewel",REACT_NOTIF_LIST:"react_notif_list",NOTIF_LIST_ITEM:"notif_list_item",SEE_ALL_LIST:"see_all_list",REACT_NOTIF_JEWEL_FLYOUT:"react_notif_jewel_flyout",NON_REACT_NOTIF_JEWEL_FLYOUT:"non_react_notif_jewel_flyout",CHEVRON:"chevron",REACT_MARK_ALL_AS_READ_LINK:"react_mark_all_as_read_link",NON_REACT_MARK_ALL_AS_READ_LINK:"non_react_mark_all_as_read_link",NOTIFICATION_SOUND_SETTING:"notifiation_sound_setting",NOTIFICATION_SOUND_SETTING_SELECTOR:"notifiation_sound_setting_selector",MESSAGE_SOUND_SETTING:"message_sound_setting",MESSAGE_SOUND_SETTING_SELECTOR:"message_sound_setting_selector",CLOSE_FRIEND_ACTIVITY_SELECTOR:"close_friend_activity_selector",BIRTHDAY_SELECTOR:"birthday_selector",ON_THIS_DAY_SELECTOR:"on_this_day_selector",TAGS_SELECTOR:"tags_selector",LIVE_VIDEO_SELECTOR:"live_video_selector",REACT_BADGE_COUNT_CONTAINER:"react_badge_count_container",NON_REACT_BADGE_COUNT_CONTAINER:"non_react_badge_count_container",BEEPER_LIST:"beeper_list",NON_REACT_SETTING_LINK:"non_react_setting_link",REACT_SETTING_LINK:"react_setting_link",GEOGRAPHIC_SUBSCRIPTION_SELECTOR:"geographic_subscription_selector",NOTIF_LIST_ITEM_LINK:"notif_list_item_link",NOTIF_READ_TOGGLE_BUTTON:"notif_read_toggle_button",NOTIF_CHEVRON_BUTTON:"notif_chevron_button",NOTIF_ITEM_OPTION_UNDO:"notif_item_option_undo"})}),null);
__d("XPushRegisterServiceWorkerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/push/register/service_worker/",{})}),null);