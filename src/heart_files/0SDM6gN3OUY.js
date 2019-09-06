if (self.CavalryLogger) { CavalryLogger.start_js(["xe5Kr"]); }

__d("dangerouslyBypassDispatchError",[],(function(a,b,c,d,e,f){"use strict";function a(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];setTimeout(function(){a.apply(null,c)},0)}e.exports=a}),null);
__d("ReactDispatcher_DEPRECATED",["Dispatcher_DEPRECATED","ReactDOM"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){var d=this;b("ReactDOM").unstable_batchedUpdates(function(){a.prototype.dispatch.call(d,c)})};return c}(b("Dispatcher_DEPRECATED"));e.exports=a}),null);
__d("UFICommentActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHANGE_REACTION:"comment_change_reaction",CHANGE_REACTION_FAILURE:"comment_change_reaction_failure",CHANGE_REACTION_SUCCESS:"comment_change_reaction_success",CHANGE_VISIBILITY:"comment_change_visibility",CHANGE_VOTE:"comment_change_vote",CHANGE_VOTE_FAILURE:"comment_change_vote_failure",CHANGE_VOTE_SUCCESS:"comment_change_vote_success",EDIT:"comment_edit",EMBED:"embed",DELETE_COMMENT_AND_REMOVE_COMMENTER:"comment_delete_and_commenter_remove",DELETE_COMMENT_WITH_FEEDBACK:"comment_delete_with_feedback",MANAGE_CONSTITUENT_BADGE:"comment_manage_constituent_badge",MOUNTED:"comment_mounted",MUTE_MEMBER:"commenter_muted",REMOVE:"comment_remove",REMOVE_AND_BLOCK:"comment_remove_and_block",REMOVE_PREVIEW:"comment_remove_preview",TOGGLE_INLINE_BAN:"comment_toggle_inline_ban",TOGGLE_INLINE_STREAM_BAN:"comment_toggle_inline_stream_ban",TOGGLE_INLINE_SUSPENSION:"comment_toggle_inline_suspension",TOGGLE_LIKE:"comment_toggle_like",TOGGLE_MARK_AS_SPAM:"comment_toggle_mark_as_spam",TOGGLE_KEEP_SPAM:"comment_toggle_keep_spam",TOGGLE_APPEAL_SPAM:"comment_toggle_appeal_spam",TOGGLE_SECURE_ACCOUNT:"comment_toggle_secure_account",TOGGLE_TEXT_DELIGHTS:"comment_toggle_text_delights",TRANSLATE:"comment_translate",TRANSLATE_ARRAY:"comment_translate_array",UNMOUNTED:"comment_unmounted",UPDATE_VOTE_COUNT_AND_STATE:"comment_update_vote_count_and_state",CHANGE_PIN_BY_AUTHOR:"comment_change_author_pin"})}),null);
__d("UFIDispatcherBase",["invariant","ReactDispatcher_DEPRECATED","UFICommentActionType","dangerouslyBypassDispatchError"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b){return Object.values(b).indexOf(a)>=0}function i(a,b,c){a[b]||g(0,2123,a.type,b,c)}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.dispatch=function(c){var d=this;i(c,"instanceID","contextArgs.instanceid");i(c,"ftentidentifier","contextArgs.ftentidentifier");h(c.type,b("UFICommentActionType"))&&i(c,"fbid","comment.fbid");try{a.prototype.dispatch.call(this,c)}catch(e){b("dangerouslyBypassDispatchError")(function(){return a.prototype.dispatch.call(d,c)})}};return c}(b("ReactDispatcher_DEPRECATED"));e.exports=new a()}),null);
__d("UFIAddCommentActionType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CANCEL:"add_comment_cancel",CHANGE_CONTENT:"add_comment_change_content",RETRY_SUBMIT:"add_comment_retry_submit",SUBMIT_EDIT:"add_comment_submit_edit",SUBMIT_NEW:"add_comment_submit_new",PIVOT_SEND_MESSAGE:"pivot_send_message"})}),null);
__d("UFIKeyValueStore",["FluxReduceStore","abstractMethod"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return{}};d.getValueFor=function(a){return this.getState()[a]||null};d.getStateKey=function(a){return a.instanceID};d.getStateValue=function(a){return b("abstractMethod")("UFIKeyValueStore","getStateValue")};d.reduce=function(a,b){var c=this.getStateKey(b);b=this.getStateValue(b);if(b!==null){var d;return babelHelpers["extends"]({},a,(d={},d[c]=b,d))}return a};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("UFIComposerIsTypingStore",["UFIAddCommentActionType","UFIDispatcherBase","UFIKeyValueStore"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getStateKey=function(a){return a.ftentidentifier};d.getStateValue=function(a){switch(a.type){case b("UFIAddCommentActionType").SUBMIT_EDIT:return!1;case b("UFIAddCommentActionType").SUBMIT_NEW:return!1;case b("UFIAddCommentActionType").CHANGE_CONTENT:a=a.text.trim().length;return a>0}return null};return c}(b("UFIKeyValueStore"));e.exports=new a(b("UFIDispatcherBase"))}),null);
__d("deepFreezeValue",["ImmutableValue"],(function(a,b,c,d,e,f){__p&&__p();function a(a){if(a===null||a===void 0)return;switch(typeof a){case"string":return;case"boolean":return;case"number":return;case"function":return;default:b("ImmutableValue").deepFreezeRootNode(a)}}e.exports=a}),null);
__d("FluxMixinLegacyInstrumentation",["FluxContainerInstrumentation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){return a.constructor.displayName||a.constructor.name||"FluxMixinLegacy(unknown)"}var h={_callCalculateState:function(){var a=b("FluxContainerInstrumentation").onCalculateStateStart(g(this)),c=this._FluxMixinLegacyInstrumentationCalculateStateCaller.apply(this,arguments);a&&a();return c},UNSAFE_componentWillMount:function(){this.constructor._FluxMixinLegacyInstrumentationOnInitCalled||(b("FluxContainerInstrumentation").onInit(this.constructor),this.constructor._FluxMixinLegacyInstrumentationOnInitCalled=!0)},_FluxMixinLegacyInstrumentationEmittedChangeStores:null,_getCurrentDispatchForInstrumentation:function(){return b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch()},_onInitialStateForInstrumentation:function(){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(this,g(this))},_onReceivePropsForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(this,g(this),a)},_addStoreEmitForInstrumentation:function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(this._FluxMixinLegacyInstrumentationEmittedChangeStores=this._FluxMixinLegacyInstrumentationEmittedChangeStores||[],b("FluxContainerInstrumentation").addStoreDependencies(this._FluxMixinLegacyInstrumentationEmittedChangeStores,a))},_collectStoreEmitsForInstrumentation:function(){var a=this._FluxMixinLegacyInstrumentationEmittedChangeStores;this._FluxMixinLegacyInstrumentationEmittedChangeStores=null;return a},_logStoreEmitsForInstrumentation:function(a,c){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(this,g(this),a||[],c)},componentDidUpdate:function(a,c){b("FluxContainerInstrumentation").onDidUpdate(this,g(this),a,this.props,c,this.state)}};function a(a){b("FluxContainerInstrumentation").hasInstrumentation()&&(a.mixins=a.mixins||[],a.mixins.push(h),a._FluxMixinLegacyInstrumentationCalculateStateCaller=a._callCalculateState,delete a._callCalculateState);return a}e.exports={addInstrumentation:a}}),null);
__d("PureStoreBasedStateMixin",["invariant","FluxMixinLegacyInstrumentation","StoreBasedStateMixinHelper","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(){__p&&__p();for(var a=arguments.length,c=new Array(a),d=0;d<a;d++)c[d]=arguments[d];return b("FluxMixinLegacyInstrumentation").addInstrumentation({_callCalculateState:function(){return this.constructor.calculateState()},getInitialState:function(){this._onInitialStateForInstrumentation&&this._onInitialStateForInstrumentation();return this._callCalculateState()},UNSAFE_componentWillMount:function(){__p&&__p();var a=this;this.constructor.calculateState||g(0,2396);this._recalculateStateID=null;var d=function(){if(a.isMounted()){var b=a._collectStoreEmitsForInstrumentation?a._collectStoreEmitsForInstrumentation():null,c=a._callCalculateState();a.setState(a._logStoreEmitsForInstrumentation!=null?function(){b!=null&&a._logStoreEmitsForInstrumentation&&a._logStoreEmitsForInstrumentation(b);return c}:c)}a._recalculateStateID=null};this._mixin=new(b("StoreBasedStateMixinHelper"))(c);this._mixin.subscribeCallback(function(){a._recalculateStateID===null&&(a._recalculateStateID=b("setImmediate")(d))},this._addStoreEmitForInstrumentation)},componentWillUnmount:function(){this._mixin.release(),this._mixin=null}})};e.exports=a}),null);
__d("FBPaymentsDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!1})}),null);
__d("FBPaymentsDialogActions",["FBPaymentsDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";var g={types:b("keyMirror")({SHOW_DIALOG:null,HIDE_DIALOG:null}),showDialog:function(a,c){b("FBPaymentsDispatcher").dispatch({type:g.types.SHOW_DIALOG,data:{dialogClass:a,dialogProps:c}})},hideDialog:function(){b("FBPaymentsDispatcher").dispatch({type:g.types.HIDE_DIALOG,data:{}})}};e.exports=g}),null);
__d("UFIFeedbackMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EXPANDED:"expanded",NONE:"none",NEVER:"never",TOGGLE:"toggle"})}),null);
__d("WebCommentViewOption",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHRONOLOGICAL:"chronological",FEATURED:"featured",FRIENDS_COMMENTS:"friends_comments",LIVE_STREAMING:"live_streaming",RANKED_REPLIES:"ranked_replies",RANKED_SUB_REPLIES:"ranked_sub_replies",RANKED_THREADED:"ranked_threaded",RANKED_UNFILTERED:"ranked_unfiltered",RECENT_ACTIVITY:"recent_activity",STAR_COMMENTS:"star_comments",SUB_REPLIES:"sub_replies",SUPPORTERS_COMMENTS:"supporters_comments",SURVEY_GALLERY:"survey_gallery",TOPLEVEL:"toplevel",UNSEEN_COMMENTS:"unseen_comments"})}),null);
__d("setByPath",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,b,c){__p&&__p();a=a;for(var d=0;d<b.length;d++){var e=b[d];if(d===b.length-1){a[e]=c;return}!Object.prototype.hasOwnProperty.call(a,e)?a[e]={}:a[e]==null?a[e]={}:Array.isArray(a[e])||Object.prototype.toString.call(a[e])==="[object Object]"||g(0,1041,a[e]);a=a[e]}}e.exports=a}),null);