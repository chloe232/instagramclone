if (self.CavalryLogger) { CavalryLogger.start_js(["aeR+1"]); }

__d("AdsInsightsTimeRange",["fbt","invariant","AdsReportDatePresetType","LocalDateInterval","expectationViolation"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i={TODAY:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a,a.addDays(1))},shouldRenderExplicitRangeLabel:!0,text:g._("Today"),value:b("AdsReportDatePresetType").TODAY},YESTERDAY:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(1),a)},shouldRenderExplicitRangeLabel:!0,text:g._("Yesterday"),value:b("AdsReportDatePresetType").YESTERDAY},THIS_WEEK:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.startOfWeek(),a.addDays(1))},shouldRenderExplicitRangeLabel:!0,text:g._("This week"),value:b("AdsReportDatePresetType").THIS_WEEK_SUN_TODAY},LAST_WEEK:{calculateInterval:function(a){var c=a.subtractWeeks(1).startOfWeek();return new(b("LocalDateInterval"))(c,a.startOfWeek())},shouldRenderExplicitRangeLabel:!0,text:g._("Last week"),value:b("AdsReportDatePresetType").LAST_WEEK_SUN_SAT},LAST_7D:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(7),a)},shouldRenderExplicitRangeLabel:!0,text:g._("Last 7 days"),value:b("AdsReportDatePresetType").LAST_7D},LAST_14D:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(14),a)},shouldRenderExplicitRangeLabel:!0,text:g._("Last 14 days"),value:b("AdsReportDatePresetType").LAST_14D},LAST_28D:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(28),a)},text:g._("Last 28 days"),value:b("AdsReportDatePresetType").LAST_28D},LAST_30D:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(30),a)},shouldRenderExplicitRangeLabel:!0,text:g._("Last 30 days"),value:b("AdsReportDatePresetType").LAST_30D},LAST_90D:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(90),a)},text:g._("Last 30 days"),value:b("AdsReportDatePresetType").LAST_90D},LAST_7_DAYS:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(6),a.addDays(1))},text:g._("Last 7 days"),value:b("AdsReportDatePresetType").LAST_7_DAYS},LAST_14_DAYS:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(13),a.addDays(1))},text:g._("Last 14 days"),value:b("AdsReportDatePresetType").LAST_14_DAYS},LAST_28_DAYS:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(27),a.addDays(1))},text:g._("Last 28 days"),value:b("AdsReportDatePresetType").LAST_28_DAYS},LAST_30_DAYS:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(29),a.addDays(1))},text:g._("Last 30 days"),value:b("AdsReportDatePresetType").LAST_30_DAYS},LAST_90_DAYS:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.subtractDays(89),a.addDays(1))},text:g._("Last 90 days"),value:b("AdsReportDatePresetType").LAST_90_DAYS},LAST_MONTH:{calculateInterval:function(a){var c=a.subtractMonths(1).startOfMonth();return new(b("LocalDateInterval"))(c,a.startOfMonth())},shouldRenderExplicitRangeLabel:!0,text:g._("Last month"),value:b("AdsReportDatePresetType").LAST_MONTH},THIS_MONTH:{calculateInterval:function(a){var c=a.startOfMonth();return new(b("LocalDateInterval"))(c,a.addDays(1))},shouldRenderExplicitRangeLabel:!0,text:g._("This month"),value:b("AdsReportDatePresetType").THIS_MONTH},THIS_QUARTER:{calculateInterval:function(a){var c=a.startOfMonth();return new(b("LocalDateInterval"))(c.addMonths(-(a.month-1)%3),a.addDays(1))},text:g._("This quarter"),value:b("AdsReportDatePresetType").THIS_QUARTER},LAST_3_MONTHS:{calculateInterval:function(a){return new(b("LocalDateInterval"))(a.startOfMonth().subtractMonths(3),a.startOfMonth())},text:g._("Last 3 months"),value:b("AdsReportDatePresetType").LAST_3_MONTHS}},j=new Set(Object.keys(i).map(function(a){return i[a].value}).concat(b("AdsReportDatePresetType").LIFETIME));a=function(){__p&&__p();function a(a,b){this.interval=a,this.preset=b}a.preset=function(b){return new a(void 0,b)};a.interval=function(b){return new a(b)};var c=a.prototype;c.isLifetime=function(){return this.preset===b("AdsReportDatePresetType").LIFETIME};c.isDefault=function(){return this.equals(a["default"])};c.equals=function(a){return this.interval===a.interval&&this.preset===a.preset};a.equals=function(a,b){if(a==null)return a==b;return b==null?!1:a.equals(b)};c.toString=function(){return this.preset!=null&&this.preset!==""?this.preset:this.getIntervalString()};c.getIntervalString=function(){var a=this.interval;a||h(0,18098);return a.start.toString()+"_"+a.end.toString()};a.fromString=function(c){__p&&__p();var d;for(var e in b("AdsReportDatePresetType"))if(Object.prototype.hasOwnProperty.call(b("AdsReportDatePresetType"),e)){d=b("AdsReportDatePresetType")[e];if(d===c)return a.preset(c)}d=c.split("_");if(d.length>1)return a.interval(b("LocalDateInterval").fromStrings(d[0],d[1]));b("expectationViolation")("fail to convert time range: %s",c);return a["default"]};a.getPresets=function(){return j};a.getAllPresetDefinitions=function(){return i};a.getSelectablePresetDefinitions=function(a,b){return b?[i.TODAY,i.YESTERDAY,i.LAST_7D,i.LAST_14D,i.LAST_30D,i.THIS_WEEK,i.LAST_WEEK,i.THIS_MONTH,i.LAST_MONTH]:a?[i.TODAY,i.YESTERDAY,i.LAST_7_DAYS,i.LAST_14_DAYS,i.LAST_30_DAYS,i.THIS_WEEK,i.LAST_WEEK,i.THIS_MONTH,i.LAST_MONTH]:[i.TODAY,i.YESTERDAY,i.LAST_7_DAYS,i.LAST_14_DAYS,i.LAST_30_DAYS,i.THIS_MONTH,i.LAST_MONTH]};a.isValidPreset=function(a){return j.has(a)};a.getPresetDefinition=function(c){var b=a.getSelectablePresetDefinitions(!1,!0);b=b.filter(function(a){return a.value===c});return b.length>0?b[0]:null};return a}();a["default"]=a.preset(b("AdsReportDatePresetType").LAST_30D);a.lifetime=a.preset(b("AdsReportDatePresetType").LIFETIME);e.exports=a}),null);
__d("MessengerContentSearchFunnelLoggerConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BROWSE_MESSAGE_IN_THREAD:"browse_message_in_thread",CHANGE_QUERY:"change_query",END_CONTENT_SEARCH:"end_content_search",INITIATE_CONTENT_SEARCH:"initiate_content_search",LOAD_MORE_THREADS:"load_more_threads",NUM_BROWSE_ACTIONS_WITHIN_THREAD:"num_browse_actions_within_thread",SELECT_THREAD:"select_thread",THREAD_IMPRESSIONS:"thread_impressions",LOAD_MESSAGE_IN_THREAD:"load_message_in_thread",BROWSE_CONTEXT:"browse_context"});b=Object.freeze({SEARCH_FROM_INTEGRATED_MESSAGE_SEARCH:"search_from_integrated_message_search",SEARCH_WITHIN_THREAD:"search_within_thread",SEARCH_ALL_THREADS:"search_all_threads"});c=Object.freeze(babelHelpers["extends"]({},b,{END_WITH_DONE_BUTTON:"end_with_done_button",END_WITH_X_BUTTON:"end_with_x_button",END_WITH_BACK_BUTTON:"end_with_back_button",END_BY_CHANGING_THREADS:"end_by_changing_threads"}));e.exports={FUNNEL_NAME:"WWW_MESSENGER_CONTENT_SEARCH_FUNNEL",FUNNEL_LOGGER_EVENTS:a,FUNNEL_LOGGER_TAGS:c,ENTRY_SURFACES:b}}),null);
__d("MercuryThreadTitle_DEPRECATED.react",["fbt","MercuryIDs","MercuryParticipantListRenderer","MessengerParticipants.bs","MessengerTextWithEmoticons.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=!1,c.state={participantNames:""},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$1=!0,this.$2(this.props)};d.componentWillUnmount=function(){this.$1=!1};d.componentDidUpdate=function(a){a!==this.props&&this.$2(this.props)};d.render=function(){return b("React").createElement("span",{className:this.props.className},this.props.thread.name?this.$3():this.state.participantNames,this.props.children)};d.getTitle=function(){return this.state.participantNames};d.$3=function(){var a=this.props.thread,c=this.props.maxTitle?this.props.maxTitle<a.name.length?a.name.slice(0,this.props.maxTitle)+"...":a.name:a.name;c=b("React").createElement(b("MessengerTextWithEmoticons.react"),{renderEmoticons:!0,renderEmoji:!0,text:c});return!a.unread_count||!this.props.showUnreadCount?c:this.$4(c,a.unread_count)};d.$2=function(a){__p&&__p();var c=this;if(a.thread.name)return;this.setState({participantNames:""});var d=b("MercuryIDs").getParticipantIDFromUserID(a.viewer),e=a.thread.participants||[];e.length>1&&(e=e.filter(function(a){return a!=d}));b("MessengerParticipants.bs").getMulti(e,function(d){__p&&__p();if(!c.$1)return;var f=e.map(function(a){return d[a]}),g=a.thread.custom_nickname?{}:null,h=b("MessengerTextWithEmoticons.react");if(g)for(var i in a.thread.custom_nickname)g[i]=b("React").createElement(h,{renderEmoticons:!0,renderEmoji:!0,text:a.thread.custom_nickname[i]});h=new(b("MercuryParticipantListRenderer"))().setUseShortName(a.useShortName).setUseAndSeparator(a.useAndSeparator).setIsNewThread(a.isNewThread).setNickname(g).renderParticipantList(f);g=a.showUnreadCount&&a.thread.unread_count?c.$4(h,a.thread.unread_count):h;c.setState({participantNames:g})})};d.$4=function(a,b){return g._("{conversation-title} ({unread-count})",[g._param("conversation-title",a),g._param("unread-count",b)])};return c}(b("React").Component);a.defaultProps={isNewThread:!1,showUnreadCount:!1,useShortName:!1,useAndSeparator:!1};e.exports=a}),null);
__d("MessengerBootloadedSecondarySearchLogger",["Bootloader","MessengerSecondarySearchFunnelConstants","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h="",i={LOCAL_CONTACTS:[],ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]},j=!1,k=!1;c=b("MessengerSecondarySearchFunnelConstants").EVENTS;var l=c.CLICK_OTHER_THREAD,m=c.END,n=c.IMPRESSIONS,o=c.START,p=c.QUERY_CHANGED,q=c.RESULT_SELECTED,r=c.SOURCE_ENDED,s=c.SOURCE_STARTED,t=c.TOKEN_REMOVED;d=b("MessengerSecondarySearchFunnelConstants").END_ACTIONS;var u=d.ABANDON,v=d.SINGLE_RESULT_SELECTED;f=b("MessengerSecondarySearchFunnelConstants").SOURCES;var w=f.SERVER,x=f.SHORT_PROFILES,y=f.SUGGESTED_RECIPIENTS,z=f.LOCAL_CONTACTS,A=f.LOCAL_AND_SERVER,B=f.ORDERED_GCF_FRIENDLIST,C=b("MessengerSecondarySearchFunnelConstants").ENTRY_SURFACES.COMPOSER;function D(a){if(i.SUGGESTED_RECIPIENTS.includes(a))return y;else if(i.ORDERED_GCF_FRIENDLIST.includes(a))return B;else if(i.SHORT_PROFILES.includes(a))return x;else if(i.LOCAL_CONTACTS.includes(a))return z;else return w}function a(a){__p&&__p();if(!b("gkx")("678592"))return;b("Bootloader").loadModules(["MessengerSecondarySearchFunnelLogger"],function(c){__p&&__p();switch(a.name){case o:if(a.surface===C&&k===!0){c.reenterSearch(a.loggingID);break}j=!1;i={LOCAL_CONTACTS:[],ORDERED_GCF_FRIENDLIST:[],SHORT_PROFILES:[],SUGGESTED_RECIPIENTS:[]};c.startFunnel(a.client,a.surface,a.surface,null,a.loggingID);a.surface===C&&(k=!0);break;case m:var d=a.end_reason;a.surface===b("MessengerSecondarySearchFunnelConstants").SEARCH_SURFACES.BROADCAST&&(d=j?v:u);c.endFunnel(b("MessengerSecondarySearchFunnelConstants").END_REASONS.ACTION,d,a.loggingID,a.threadID,a.isNewThread);k=!1;break;case n:d=a.entries.map(function(a){a.data_source=[D(a.result_fbid)];return a});g=a.entries.map(function(a){return a.result_fbid});c.impressions(a.query,d,A,a.loggingID);break;case p:h=a.query;c.queryChanged(a.query,a.loggingID);break;case q:j=!0;d=D(a.id);var e=g.indexOf(a.id);c.resultSelected(a.id,e,a.type,a.query?a.query:h,d,a.surface,a.loggingID,a.selectionType);break;case r:e=!a.query||a.query===h;switch(a.source){case z:i.LOCAL_CONTACTS=a.ids?a.ids:[];break;case y:i.SUGGESTED_RECIPIENTS=a.ids?a.ids:[];break;case x:i.SHORT_PROFILES=a.ids?a.ids:[];e=!0;break;case B:i.ORDERED_GCF_FRIENDLIST=a.ids?a.ids:[];e=!0;break;default:break}c.sourceEnded(a.query,a.numResults,a.source,a.status,e,a.loggingID);break;case s:c.sourceStarted(a.query,a.source,a.loggingID);break;case t:c.tokenRemoved(a.deletedIDs,a.clearedAll,a.loggingID);break;case l:c.unfocusSearch(a.loggingID);break}},"MessengerBootloadedSecondarySearchLogger")}e.exports={logSearchEvent:a}}),null);
__d("MessengerDiscoveryLoggingEnums",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENTRYPOINT_PREFIX:"entrypoint:"})}),null);
__d("MessengerDiscoveryEntryPointsLoggingHelper",["MessengerDiscoveryEntryPoint","MessengerDiscoveryLoggingEnums"],(function(a,b,c,d,e,f){"use strict";a={getEntryPointsLoggingTagStr:function(a){if(a.length==0||Object.values(b("MessengerDiscoveryEntryPoint")).indexOf(a[0])==-1)throw new Error("Please use enums in MessengerDiscoveryEntryPoints class");return b("MessengerDiscoveryLoggingEnums").ENTRYPOINT_PREFIX+a.join(":")}};e.exports=a}),null);
__d("PromiseUtil",["Promise","nullthrows","promiseDone"],(function(a,b,c,d,e,f){__p&&__p();var g={allSettled:function(a){var c=b("Promise").all(a);return b("Promise").all(a.map(function(a){return b("Promise").resolve(a).then(void 0,function(a){return void 0})})).then(function(){return c})},allSettledInSeries:function(a){var c=[];return a.reduce(function(a,b){return a.then(b).then(function(){return void 0},function(a){c.push(a);return void 0})},b("Promise").resolve()).then(function(){if(c.length)throw c[0]})},exponentialBackoff:function(a,b,c){b===void 0&&(b=Math.sqrt(2));c===void 0&&(c=1);var d=c;c=function(){var a=d;d*=b;return a};return g.rateLimit(a,c)},forEach:function(a,c){return a.then(function(a){return b("Promise").resolve(c(a)).then(function(){return a})})},forEachError:function(a,c){return a.then(void 0,function(a){return b("Promise").resolve(c(a)).then(function(){throw a})})},iterateUntil:function(a,c){var d=function d(e){return c(e)?b("Promise").resolve(e):b("Promise").resolve(a(e)).then(d)};return d},pollUntilImpl:function(a,c){var d,e=new(b("Promise"))(function(b,e){var f=function(){try{var c=a();c&&b(c.value)}catch(a){e(a)}};d=setInterval(f,1e3*c)});return e["finally"](function(){return clearInterval(b("nullthrows")(d))})},pollUntil:function(a,b){b===void 0&&(b=1);return g.pollUntilImpl(function(){var b=a();return b?{value:b}:void 0},b)},rateLimit:function(a,b){__p&&__p();var c=[],d=void 0,e=0;return function(){var f=b();for(var h=arguments.length,i=new Array(h),j=0;j<h;j++)i[j]=arguments[j];c=i;d||(d=g.wait(e+f-Date.now()/1e3).then(function(){e=Date.now()/1e3;d=void 0;return a.apply(void 0,c)}));return d}},rateLimitWithLastResult:function(a,c){var d=!1,e=void 0;return function(){d||(b("promiseDone")(g.wait(c()),function(){return d=!1}),e=a.apply(void 0,arguments),d=!0);return e}},repeatUntil:function(a,c){var d=function d(){return b("Promise").resolve(a()).then(function(a){return c(a)?b("Promise").resolve(a):d()})};return d},repeatWhileErrorUntil:function(a,c,d){var e=function e(){return b("Promise").resolve(a()).then(function(a){c(a);return b("Promise").resolve(a)},function(a){return d(a)?e():b("Promise").reject(a)})};return e},series:function(a,c){c=c;return a.reduce(function(a,b){return a.then(b)},b("Promise").resolve(c))},wait:function(a){return 0<a?new(b("Promise"))(function(b,c){return setTimeout(b,1e3*a)}):b("Promise").resolve()},waitAtMost:function(a,b){return g.waitOrElse(a,b,function(){throw new Error("Promise timed out")})},waitOrElse:function(a,c,d){var e=!1;return b("Promise").race([a.then(function(a){e=!0;return a},function(a){e=!0;throw a}),g.wait(c).then(function(){return e?void 0:d()})])}};e.exports=g}),null);
__d("WorkGalahadAppTabChatsAction.react",["ix","fbt","Image.react","Link.react","MessengerURIConstants","React","asset"],(function(a,b,c,d,e,f,g,h){"use strict";function a(){return b("React").createElement(b("Link.react"),{"aria-label":h._("Create New Chat"),href:b("MessengerURIConstants").FACEBOOK_PREFIX+b("MessengerURIConstants").COMPOSE_SUBPATH},b("React").createElement(b("Image.react"),{src:g("470511")}))}e.exports=a}),null);
__d("InstantGameContextType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({THREAD:"THREAD",GROUP:"GROUP",STORY:"STORY",SOLO:"SOLO",LINK:"LINK",MATCH:"MATCH",GENERIC:"GENERIC"})}),null);
__d("QuicksilverSources",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ALOHA_GAMEHOST:"aloha_gamehost",BIG_BLUE_IG_SEARCH:"big_blue_ig_search",CANVAS_DIVEBAR:"canvas_divebar",CANVAS_GAME_MODAL:"canvas_game_modal",CUSTOM_SHARE:"in_game_custom_share",EMBEDDED_PLAYER:"embedded_player",FB_AD:"fb_ad",FB_APP_NOTIF:"fb_app_notif",FB_ARCADE_HEADER_INVITE:"fb_arcade_header_invite",FB_CANVAS:"fb_canvas",FB_CANVAS_MIGRATION:"fb_canvas_migration",FB_CUSTOM_UPDATE_NOTIF:"fb_custom_update_notif",FB_FEED:"fb_feed",FB_FEED_EGO:"fb_ego_igyml",FB_FEED_GROUP_CHALLENGE_EDGE_STORY:"fb_feed_group_challenge_edge_story",FB_FEED_IGYFAP_QP:"fb_qp_igyfap",FB_FEED_IGYML_QP:"fb_qp_igyml",FB_FEED_LEADERBOARD_HIGH_SCORE:"fb_feed_leaderboard_high_score",FB_FEED_LIVE_VIDEO:"fb_feed_live_video",FB_FEED_NEW_RELEASES_QP:"fb_qp_new_releases",FB_FEED_PLAY_FROM_POST_EDGE_STORY:"fb_feed_play_from_post_edge_story",FB_FEED_PLAY_WITH_FRIENDS:"fb_feed_play_with_friends",FB_FEED_PLAYED_RECENTLY_QP:"fb_qp_played_recently",FB_FEED_PLAYING_WITH_FRIENDS_QP:"fb_qp_playing_with_friends",FB_FEED_POST_GAMEPLAY:"fb_feed_post_gameplay",FB_FEED_QUICK_PROMOTION:"fb_feed_quick_promotion",FB_FEED_RATING:"fb_feed_rating",FB_FEED_SCREENSHOT:"fb_feed_screenshot",FB_FEED_TOURNAMENT_UNIT:"fb_feed_tournament_unit",FB_GAMES_TAB:"fb_games_tab",FB_GAMES_TAB_NOTIFICATION:"fb_games_tab_notification",FB_GG_FEED:"fb_gg_feed",FB_GG_NOTIFICATION:"fb_gg_notification",FB_GG_SEARCH:"fb_gg_search",FB_GG_STORY:"fb_gg_story",FB_GG_URL:"fb_gg_url",FB_GROUP_AYMT:"fb_group_aymt",FB_GROUP_CHALLENGE:"fb_group_challenge",FB_GROUP_COMPOSER:"fb_group_composer",FB_GROUP_GAMES_TAB:"fb_group_games_tab",FB_GROUP_MALL:"fb_group_mall",FB_GROUP_MALL_EGO:"fb_group_mall_ego",FB_GROUP_MALL_SCREENSHOT:"fb_group_mall_screenshot",FB_GROUP_NEWS_FEED:"fb_group_news_feed",FB_GROUP_NEWSFEED_SCREENSHOT:"fb_group_newsfeed_screenshot",FB_GROUP_POST_ACTION_LINK:"fb_group_post_action_link",FB_GROUP_POST_CONTEXT_UPDATE:"fb_group_post_context_update",FB_GROUP_RHC_LEADERBOARD:"fb_group_rhc_leaderboard",FB_GROUP_SCORE_PASSED_NOTIF:"fb_group_score_passed_notif",FB_GROUP_TOURNAMENT_FEED_UNIT:"fb_group_tournament_feed_unit",FB_HOMESCREEN_SHORTCUT:"fb_homescreen_shortcut",FB_INVITE_DECLINED_NOTIF:"fb_invite_declined_notif",FB_MESSENGER_AD:"fb_messenger_ad",FB_NON_MESSENGER_WAP_INVITE_NOTIF:"fb_non_messenger_wap_invite_notif",FB_OTHER_GAMES_NOTIF:"fb_other_games_notif",FB_PAGE_PLAY_GAME_BUTTON:"fb_page_play_game_button",FB_PLAYED_FROM_POST_NOTIF:"fb_played_from_post_notif",FB_SCORE_PASSED_NOTIF:"fb_score_passed_notif",FB_SEARCH:"big_blue_search",FB_STORY_ATTRIBUTION_LINK:"fb_story_attribution_link",FB_TOURNAMENT_FINISHED_NOTIF:"fb_tournament_finished_notif",FB_TOURNAMENTS_INVITE_FRIENDS_NOTIF:"fb_tournaments_invite_friends_notif",FB_TURN_REMINDER_NOTIF:"fb_turn_reminder_notif",FBLITE_BOOKMARK:"fblite_bookmark",FBLITE_FEED_SCREENSHOT:"fblite_feed_screenshot",FBLITE_MESSENGER_TAB:"fblite_messenger_tab",GAME_CTA:"game_cta",GAME_SEARCH:"game_search",GAME_SWITCH:"game_switch",GAMEROOM_FEED_POST:"gameroom_feed_post",GAMEROOM_HOME:"gameroom_home",HOME_SCREEN_SHORTCUT:"home_screen_shortcut",INTERNAL:"internal",LIVE_VIDEO_CTA:"live_video_cta",M_ME_LINK:"m_me_link",MARKETPLACE:"marketplace",MESSENGER_AD:"messenger_ad",MESSENGER_ADMIN_MESSAGE:"admin_message",MESSENGER_BBALL_EMOJI:"bball_emoji",MESSENGER_BOT_MENU:"bot_menu",MESSENGER_BUSINESS_ATTACHMENT:"business_attachment",MESSENGER_CALL_TO_ACTION:"call_to_action",MESSENGER_COMPOSER:"composer",MESSENGER_COMPOSER_SMS:"composer_sms",MESSENGER_CUSTOM_ADMIN_MESSAGE:"custom_admin_message",MESSENGER_CUSTOM_UPDATE_BREADCRUMB:"custom_update_breadcrumb",MESSENGER_CUSTOM_UPDATE_XMA:"custom_update_xma",MESSENGER_GAME_BOT_MENU:"game_bot_menu",MESSENGER_GAME_BOT_NULL_STATE:"game_bot_null_state_cta",MESSENGER_GAME_EMOJI:"game_emoji",MESSENGER_GAME_PUSH_NOTIFICATION:"game_push_notification",MESSENGER_GAME_SCORE_SHARE:"game_score_share",MESSENGER_GAME_SEARCH:"search",MESSENGER_GAME_SHARE:"game_share",MESSENGER_GAME_THREAD_ROW_CTA:"game_thread_row_cta",MESSENGER_GAMES_HUB:"games_hub",MESSENGER_LEADERBOARD_BREADCRUMB:"leaderboard_breadcrumb",MESSENGER_LEADERBOARD_XMA:"leaderboard_xma",MESSENGER_M_SUGGESTION:"game_m_suggestion",MESSENGER_MORE_DRAWER_CHAT_EXTENSION:"more_drawer_chat_extension",MESSENGER_NEW_FRIEND_BUMP:"new_friend_bump",MESSENGER_ONE_LINE_COMPOSER:"one_line_composer",MESSENGER_RTC:"rtc",MESSENGER_SEARCH:"messenger_search",MESSENGER_SOCCER_EMOJI:"soccer_emoji",MESSENGER_STALE_THREAD_QUICK_REPLY:"stale_thread_quick_reply",MESSENGER_STICKER:"sticker",MESSENGER_TOURNAMENT_START:"tournament_start",MN_DIODE:"mn_diode",MN_DIODE_TAB:"mn_diode_tab",MOBILE_APP_BOOKMARK:"mobile_app_bookmark",MOBILE_BOOKMARK:"mobile_bookmark",MOBILE_BOOKMARK_PRESENCE:"mobile_bookmark_presence",MOBILE_GAME_CHAINING_PAGE:"mobile_game_chaining_page",MSITE:"msite",MSITE_BOOKMARK:"msite_bookmark",OTHER_DIODE_TAB:"other_diode_tab",PRESENCE_ON_MESSENGER:"presence_on_messenger",SOCIAL_PLUGIN:"social_plugin",SRT_REVIEW:"srt_review",STREAMER_DASHBOARD:"streamer_dashboard",THREAD_ACTIVITY_BANNER:"thread_activity_banner",THREAD_SETTINGS:"thread_settings",TOURNAMENT_THREAD_ACTIVITY_BANNER:"tournament_thread_activity_banner",TOURNAMENT_UNIT:"tournament_unit",UNKNOWN:"unknown",WWW_APP_BOOKMARK:"www_app_bookmark",WWW_APP_CENTER_BROWSE:"www_app_center_browse",WWW_APP_CENTER_CHALLENGE:"www_app_center_challenge",WWW_APP_CENTER_MAIN:"www_app_center_main",WWW_BOOKMARK:"www_bookmark",WWW_CHAT_SIDEBAR_PRESENCE:"www_chat_sidebar_presence",WWW_CHAT_SIDEBAR_PRESENCE_HOVERCARD:"www_chat_sidebar_presence_hovercard",WWW_GAME_THREAD_ROW_CTA:"www_game_thread_row_cta",WWW_GAMES_DIVEBAR_PAGELET:"www_games_divebar_pagelet",WWW_GAMES_HUB:"www_games_hub",WWW_GAMES_HUB_BOOKMARKS:"www_games_hub_bookmarks",WWW_GAMES_HUB_SEARCH:"www_games_hub_search",WWW_GAMES_RHC_PAGELET:"www_games_rhc_pagelet",WWW_GAMES_UNIFIED_RHC:"www_games_unified_rhc",WWW_LINK_SHARE:"www_link_share",WWW_MESSENGER_UPSELL:"www_messenger_upsell",WWW_PLAY_GAME_LOGGED_OUT_VIEW:"www_play_game_logged_out_view",WWW_PLAY_URL:"www_play_url",WWW_PROFILE_HOVERCARD:"www_profile_hovercard",WWW_REQUEST_HOVERCARD:"www_request_hovercard",WWW_SPOTLIGHT_BOTTOM_UNIT:"www_spotlight_bottom_unit",WWW_SPOTLIGHT_RHC:"www_spotlight_rhc"})}),null);
__d("XGamesQuicksilverSpotlightPlayerController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/games/quicksilver/spotlight/",{app_id:{type:"String"},context_source_id:{type:"String"},context_type:{type:"Enum",enumType:1},analytics_info:{type:"TypeAssert"},sharing_info:{type:"TypeAssert"},upsell_logging_info:{type:"TypeAssert"},source:{type:"String"},entry_point_data:{type:"String"},previous_app_id:{type:"String"}})}),null);