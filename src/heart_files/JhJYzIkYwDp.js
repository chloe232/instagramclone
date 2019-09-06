if (self.CavalryLogger) { CavalryLogger.start_js(["p2Dum"]); }

__d("MessengerMarkReadMutation.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"MessageThreadUpdateReadStateData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"ScalarField",alias:null,name:"unread_count",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"MessengerMarkReadMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"message_thread_update_read_state",storageKey:null,args:b,concreteType:"MessageThreadUpdateReadStateResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"thread",storageKey:null,args:null,concreteType:"MessageThread",plural:!1,selections:[c]}]}]},operation:{kind:"Operation",name:"MessengerMarkReadMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"message_thread_update_read_state",storageKey:null,args:b,concreteType:"MessageThreadUpdateReadStateResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"thread",storageKey:null,args:null,concreteType:"MessageThread",plural:!1,selections:[c,{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]}]},params:{operationKind:"mutation",name:"MessengerMarkReadMutation",id:"1717353725012289",text:null,metadata:{}}}}();e.exports=a}),null);
__d("MontageThreadViewContainerImplQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"threadFBID",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"threadFBID"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},e=[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}],f={kind:"ScalarField",alias:null,name:"text",args:null,storageKey:null},g=[f],h={kind:"ScalarField",alias:null,name:"timestamp",args:null,storageKey:null},i={kind:"LinkedField",alias:null,name:"message",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:g},j={kind:"LinkedField",alias:null,name:"image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:e},k={kind:"LinkedField",alias:null,name:"animated_image",storageKey:null,args:null,concreteType:"Image",plural:!1,selections:e},l=[{kind:"Literal",name:"height",value:28},{kind:"Literal",name:"width",value:21}];return{kind:"Request",fragment:{kind:"Fragment",name:"MontageThreadViewContainerImplQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:"threadMessages",name:"message_thread",storageKey:null,args:b,concreteType:"MessageThread",plural:!1,selections:[{kind:"FragmentSpread",name:"MontageThreadView_threadMessages",args:null}]}]},operation:{kind:"Operation",name:"MontageThreadViewContainerImplQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:"threadMessages",name:"message_thread",storageKey:null,args:b,concreteType:"MessageThread",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"customization_info",storageKey:null,args:null,concreteType:"MessageThreadCustomization",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"outgoing_bubble_color",args:null,storageKey:null},c]},{kind:"LinkedField",alias:null,name:"montage_thread",storageKey:null,args:null,concreteType:"MessageThread",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"thread_key",storageKey:null,args:null,concreteType:"MessageThreadKey",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"thread_fbid",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"messages",storageKey:"messages(last:100)",args:[{kind:"Literal",name:"last",value:100}],concreteType:"MessagesOfThreadConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"MessagesOfThreadEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[d,c,{kind:"InlineFragment",type:"UserMessage",selections:[{kind:"ScalarField",alias:null,name:"message_id",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"message_sender",storageKey:null,args:null,concreteType:"MessagingParticipant",plural:!1,selections:[c,{kind:"LinkedField",alias:null,name:"messaging_actor",storageKey:null,args:null,concreteType:null,plural:!1,selections:[d,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"profile_picture",storageKey:"profile_picture(height:50,width:50)",args:[{kind:"Literal",name:"height",value:50},{kind:"Literal",name:"width",value:50}],concreteType:"Image",plural:!1,selections:e},c]}]},{kind:"LinkedField",alias:null,name:"message_source_data",storageKey:null,args:null,concreteType:"MessageSourceData",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"message_source",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"montage_overlays",storageKey:null,args:null,concreteType:null,plural:!0,selections:[d,{kind:"InlineFragment",type:"StoryOverlayPollSticker",selections:[{kind:"ScalarField",alias:null,name:"style",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"question_text",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:g},{kind:"LinkedField",alias:null,name:"poll",storageKey:null,args:null,concreteType:"StoryCardPoll",plural:!1,selections:[c,{kind:"ScalarField",alias:null,name:"can_viewer_vote",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"viewer_vote_index",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"poll_options",storageKey:null,args:null,concreteType:"StoryCardPollOption",plural:!0,selections:[f,{kind:"ScalarField",alias:null,name:"vote_count",args:null,storageKey:null}]}]},{kind:"LinkedField",alias:null,name:"voting_control_bounds",storageKey:null,args:null,concreteType:"StoryOverlayRectangle",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"x",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"y",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"width",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"rotation",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"height",args:null,storageKey:null}]}]}]},{kind:"LinkedField",alias:null,name:"montage_attribution",storageKey:null,args:null,concreteType:"TextWithEntities",plural:!1,selections:[f,{kind:"LinkedField",alias:null,name:"ranges",storageKey:null,args:null,concreteType:"EntityAtRange",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"offset",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"length",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"entity",storageKey:null,args:null,concreteType:null,plural:!1,selections:[d,{kind:"ScalarField",alias:null,name:"url",args:null,storageKey:null},c]}]}]},h,i,{kind:"LinkedField",alias:null,name:"blob_attachments",storageKey:null,args:null,concreteType:null,plural:!0,selections:[d,c,{kind:"InlineFragment",type:"MessageImage",selections:[j]},{kind:"InlineFragment",type:"MessageVideo",selections:[{kind:"ScalarField",alias:null,name:"playable_url",args:null,storageKey:null}]},{kind:"InlineFragment",type:"MessageAnimatedImage",selections:[k]}]},{kind:"LinkedField",alias:null,name:"sticker",storageKey:null,args:null,concreteType:"Sticker",plural:!1,selections:[j,k,c]}]}]}]}]},{kind:"LinkedField",alias:"montageMessages",name:"messages",storageKey:"messages(last:1)",args:[{kind:"Literal",name:"last",value:1}],concreteType:"MessagesOfThreadConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"MessagesOfThreadEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[d,h,c,{kind:"InlineFragment",type:"UserMessage",selections:[i,{kind:"LinkedField",alias:null,name:"sticker",storageKey:null,args:null,concreteType:"Sticker",plural:!1,selections:[{kind:"LinkedField",alias:"stickerImage",name:"image",storageKey:"image(height:28,width:21)",args:l,concreteType:"Image",plural:!1,selections:e},c]},{kind:"LinkedField",alias:null,name:"blob_attachments",storageKey:null,args:null,concreteType:null,plural:!0,selections:[d,{kind:"LinkedField",alias:"mediaImage",name:"image",storageKey:"image(height:28,width:21)",args:l,concreteType:"Image",plural:!1,selections:e},c,{kind:"InlineFragment",type:"MessageVideo",selections:[{kind:"LinkedField",alias:"videoImage",name:"image",storageKey:"image(height:28,width:21)",args:l,concreteType:"Image",plural:!1,selections:e}]},{kind:"InlineFragment",type:"MessageImage",selections:[{kind:"LinkedField",alias:"messageImage",name:"image",storageKey:"image(height:28,width:21)",args:l,concreteType:"Image",plural:!1,selections:e}]}]}]}]}]}]},{kind:"ScalarField",alias:null,name:"unread_count",args:null,storageKey:null}]},c]}]},params:{operationKind:"query",name:"MontageThreadViewContainerImplQuery",id:"1889525527801958",text:null,metadata:{}}}}();e.exports=a}),null);
__d("MontageThreadViewV2Query.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"id",type:"ID!",defaultValue:null}],b=[{kind:"Variable",name:"id",variableName:"id"}];return{kind:"Request",fragment:{kind:"Fragment",name:"MontageThreadViewV2Query",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"montage_thread",storageKey:null,args:b,concreteType:"MontageThread",plural:!1,selections:[{kind:"FragmentSpread",name:"MontageViewerSingleThreadWeb_montageThread",args:null}]}]},operation:{kind:"Operation",name:"MontageThreadViewV2Query",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"montage_thread",storageKey:null,args:b,concreteType:"MontageThread",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"montage_container_id",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]},params:{operationKind:"query",name:"MontageThreadViewV2Query",id:"2785159824859276",text:null,metadata:{}}}}();e.exports=a}),null);
__d("MontageThreadView_threadMessages.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"MontageThreadView_threadMessages",type:"MessageThread",metadata:null,argumentDefinitions:[{kind:"LocalArgument",name:"imageHeight",type:"Int",defaultValue:28},{kind:"LocalArgument",name:"imageWidth",type:"Int",defaultValue:21}],selections:[{kind:"LinkedField",alias:null,name:"customization_info",storageKey:null,args:null,concreteType:"MessageThreadCustomization",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"outgoing_bubble_color",args:null,storageKey:null}]},{kind:"LinkedField",alias:null,name:"montage_thread",storageKey:null,args:null,concreteType:"MessageThread",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},{kind:"LinkedField",alias:null,name:"thread_key",storageKey:null,args:null,concreteType:"MessageThreadKey",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"thread_fbid",args:null,storageKey:null}]},{kind:"LinkedField",alias:"montageMessages",name:"messages",storageKey:"messages(last:1)",args:[{kind:"Literal",name:"last",value:1}],concreteType:"MessagesOfThreadConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"MessagesOfThreadEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"timestamp",args:null,storageKey:null},{kind:"FragmentSpread",name:"MontageThumbnail_message",args:[{kind:"Variable",name:"imageHeight",variableName:"imageHeight"},{kind:"Variable",name:"imageWidth",variableName:"imageWidth"}]}]}]}]},{kind:"ScalarField",alias:null,name:"unread_count",args:null,storageKey:null},{kind:"FragmentSpread",name:"MontageViewerSingleThread_montageThread",args:null}]}]};e.exports=a}),null);
__d("MontageViewerSingleThreadWeb_montageThread.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"MontageViewerSingleThreadWeb_montageThread",type:"MontageThread",metadata:null,argumentDefinitions:[],selections:[{kind:"ScalarField",alias:null,name:"montage_container_id",args:null,storageKey:null}]};e.exports=a}),null);
__d("MontageViewerSingleThread_montageThread.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"Fragment",name:"MontageViewerSingleThread_montageThread",type:"MessageThread",metadata:null,argumentDefinitions:[{kind:"LocalArgument",name:"count",type:"Int",defaultValue:100}],selections:[{kind:"LinkedField",alias:null,name:"messages",storageKey:null,args:[{kind:"Variable",name:"last",variableName:"count"}],concreteType:"MessagesOfThreadConnection",plural:!1,selections:[{kind:"FragmentSpread",name:"MontageSpotlightViewer_messages",args:null}]}]};e.exports=a}),null);
__d("MessengerMarkReadMutation",["RelayModern","MessengerMarkReadMutation.graphql"],(function(a,b,c,d,e,f){"use strict";var g=b("RelayModern").commitMutation;b("RelayModern").graphql;var h=function(){return b("MessengerMarkReadMutation.graphql")},i={thread:{unread_count:0}};function a(a,b){return g(a,{mutation:h,optimisticResponse:i,variables:{input:{thread_id:b.thread_id,update_type:b.update_type}}})}e.exports={commit:a}}),null);
__d("MessengerMobileWindow.react",["cx","MessengerPhotoViewCloseLinkReact.re","React","SpotlightViewer"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerPhotoViewCloseLinkReact.re").make;a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.background,d=a.fontSize,e=a.onHide,f=a.open,g=a.children,i=a.onClose,j=a.sidebar,k=a.topbar;a=babelHelpers.objectWithoutPropertiesLoose(a,["background","fontSize","onHide","open","children","onClose","sidebar","topbar"]);return b("React").createElement(b("SpotlightViewer"),{onHide:e,open:f,rootClassName:"_7yx"+(c==="light"?" _1lwq":"")},b("React").createElement("div",{className:"_3xsg"},b("React").createElement("div",babelHelpers["extends"]({className:"_7yy"},a),b("React").createElement("div",{className:"_7yz"}),b("React").createElement("div",{className:(this.props.orientation==="landscape"?"_pxe":"")+(this.props.orientation==="landscape"&&j?" _466h":"")+(this.props.orientation==="portrait"?" _pxf":"")+(this.props.orientation==="portrait"&&j?" _466r":"")+" _7y-"+(d==="auto"?" _5q__":"")},b("React").createElement("div",{className:"_5uag"},g)),k!==void 0?k:b("React").createElement(h,{onClick:i,customTooltip:null})),j))};return c}(b("React").Component);c.defaultProps={background:"light",fontSize:"auto",orientation:"portrait"};c.propTypes={background:a.string.isRequired,fontSize:a.string.isRequired,onClose:a.func.isRequired,onHide:a.func.isRequired,open:a.bool.isRequired};e.exports=c}),null);
__d("MessengerLogo.react",["React"],(function(a,b,c,d,e,f){"use strict";a=function(a){var c=a.color;a=a.size;return b("React").createElement("div",{style:{width:a,height:a}},b("React").createElement("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},b("React").createElement("g",{transform:"scale(0.02)",fill:"none"},b("React").createElement("path",{fill:c,fillRule:"evenodd",d:"M399.494079,0.00274415094 C178.859771,0.00274415094 0.000304955527,167.227237 0.000304955527,373.508113 C0.000304955527,490.856138 57.8859466,595.562774 148.414028,664.036455 L148.414028,806.983343 L284.747446,731.373854 C321.092046,741.545506 359.609962,747.013481 399.494079,747.013481 C620.128386,747.013481 798.987853,579.788988 798.987853,373.508113 C798.987853,167.227237 620.128386,0.00274415094 399.494079,0.00274415094 M441.568386,500.879189L338.245388 393.558495 139.264956 503.581669 357.419975 272.117619 460.742973 379.437297 659.722389 269.414122z"}))))};e.exports=a}),null);
__d("MessengerStoriesLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";a={ACTION_SOURCE:{FACEBOOK_CHAT_TAB:"facebook_chat_tab",MESSENGER_DOT_COM:"messenger_dot_com"}};e.exports=a}),null);
__d("MontageShouldUpdateReducer",["MontageActions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){a=h(a,"string");return typeof a==="symbol"?a:String(a)}function h(a,b){__p&&__p();if(typeof a!=="object"||a===null)return a;var c=a[typeof Symbol==="function"?Symbol.toPrimitive:"@@toPrimitive"];if(c!==void 0){c=c.call(a,b||"default");if(typeof c!=="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(b==="string"?String:Number)(a)}var i=b("MontageActions").Types;function a(a,b){var c;switch(b.type){case i.REQUEST_UPDATE:c=babelHelpers["extends"]({},a.needsUpdating,(c={},c[b.threadFBID]=!0,c));return babelHelpers["extends"]({},a,{needsUpdating:c});case i.HANDLE_ACTION:b=babelHelpers["extends"]({},a.needsUpdating,(c={},c[b.threadFBID]=!0,c));return babelHelpers["extends"]({},a,{needsUpdate:b})}return a}function c(a,b){switch(b.type){case i.HAS_UPDATED:var c=a.needsUpdating;c[b.threadFBID];c=babelHelpers.objectWithoutPropertiesLoose(c,[b.threadFBID].map(g));return babelHelpers["extends"]({},a,{needsUpdating:c})}return a}e.exports={requestUpdate:a,hasUpdated:c}}),null);
__d("MontageState",[],(function(a,b,c,d,e,f){"use strict";a={needsUpdating:{}};e.exports=a}),null);
__d("MontageStore",["FluxReduceStore","MontageDispatcher","MontageShouldUpdateReducer","MontageState"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[].concat(Object.values(b("MontageShouldUpdateReducer")));a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){return b("MontageState")};d.reduce=function(a,b){return g.reduce(function(a,c){return c(a,b)},a)};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("MontageDispatcher"))}),null);
__d("MontageViewerSingleThreadWeb.react",["cx","FBStoriesViewer2","Link.react","MessengerEnvironment","MessengerStoriesLoggingConstants","MontageThumbnail.react","React","RelayModern","Timestamp.react","uuid","MontageViewerSingleThreadWeb_montageThread.graphql"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;c=b("React").PropTypes;var h=28,i=21,j=216,k=56,l=857,m=1141,n=160,o=284;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){var a=d.props.montageThread.montage_container_id;if(a==null)return;a={bucketID:a,cardID:null,openSource:b("MessengerStoriesLoggingConstants").ACTION_SOURCE.FACEBOOK_CHAT_TAB,tilePosition:{bottom:j,height:k,left:l,right:m,top:n,width:o},traySessionID:b("uuid")()};b("MessengerEnvironment").messengerdotcom?(a.openSource=b("MessengerStoriesLoggingConstants").ACTION_SOURCE.MESSENGER_DOT_COM,b("FBStoriesViewer2").getInstance().openDialogMessenger(a)):b("FBStoriesViewer2").open(a)},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.firstMontageMessage,c=this.props.customColor,d=this.props.unread;return a==null?null:b("React").createElement("div",{className:"_1sk5"},b("React").createElement("div",{className:"_1sk6"},b("React").createElement(b("Link.react"),{className:"_5no5",href:"#",onClick:this.$1,role:"button"},b("React").createElement(b("MontageThumbnail.react"),{customColor:c,message:a,unread:d,imageHeight:h,imageWidth:i,shouldRecomputeDimensions:!1}),b("React").createElement("div",{className:"_1sui"},this.props.header,b("React").createElement("span",{className:"_1suk"},b("React").createElement(b("Timestamp.react"),{minimize:!0,time:this.props.timestamp}))),this.props.logo)))};return c}(b("React").Component);d.propTypes={threadID:c.string.isRequired,montageThread:c.object.isRequired,customColor:c.string.isRequired,unread:c.bool.isRequired,timestamp:c.number,firstMontageMessage:c.object,authorName:c.any,header:c.object,logo:c.object};e.exports=a(d,{montageThread:function(){return b("MontageViewerSingleThreadWeb_montageThread.graphql")}})}),null);
__d("MontageThreadViewV2.react",["MontageViewerSingleThreadWeb.react","React","RelayFBEnvironment","RelayModern","MontageThreadViewV2Query.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("RelayModern").graphql;var h=b("RelayModern").QueryRenderer;function a(a){var c=a.firstMontageMessage,d=a.messengerThreadFBID,e=a.threadID,f=a.customColor,i=a.unread,j=a.timestamp,k=a.firstMontageMessage,l=a.authorName,m=a.header,n=a.logo;return c==null?null:b("React").createElement(h,{environment:b("RelayFBEnvironment"),query:g||(g=function(){return b("MontageThreadViewV2Query.graphql")}),variables:{id:d},render:function(a){a=a.props;return a?b("React").createElement(b("MontageViewerSingleThreadWeb.react"),{threadID:e,montageThread:a.montage_thread,customColor:f,unread:i,timestamp:j,firstMontageMessage:k,authorName:l,header:m,logo:n}):null}})}e.exports=a}),null);
__d("MontageReplyAction",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DOODLE:"DOODLE",MESSAGE_REACTION:"MESSAGE_REACTION",REPLY_TO_STORY_SHARE:"REPLY_TO_STORY_SHARE",PRODUCER_INITIATED:"PRODUCER_INITIATED",STORY_SHARE:"STORY_SHARE"})}),null);
__d("MontageViewerSingleThread.react",["MontageSpotlightViewer.react","React","RelayModern","emptyFunction","MontageViewerSingleThread_montageThread.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;c=b("React").PropTypes;d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a;a=(a=this.props.montageThread)==null?void 0:a.messages;return this.props.open&&a?b("React").createElement(b("MontageSpotlightViewer.react"),{entryPoint:"reply_context",initialUnreadCount:this.props.unreadCount,loadMore:b("emptyFunction"),onHide:this.props.onHide,messages:a}):null};return c}(b("React").Component);d.propTypes={open:c.bool.isRequired,onHide:c.func.isRequired,montageThread:c.object.isRequired,unreadCount:c.number.isRequired};e.exports=a(d,{montageThread:function(){return b("MontageViewerSingleThread_montageThread.graphql")}})}),null);
__d("MontageThreadView.react",["cssVar","cx","fbt","MercuryIDs","MessengerEnvironment","MessengerLogo.react","MessengerMarkReadMutation","MessengerParticipants.re","MontageThreadViewV2.react","MontageThumbnail.react","MontageViewerSingleThread.react","React","Timestamp.react","RelayModern","convertMIGColorToFIGColor","gkx","MontageThreadView_threadMessages.graphql"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=b("RelayModern").createFragmentContainer;b("RelayModern").graphql;var j=28,k=21;d=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={showMontage:!1},d.$2=function(){d.setState({showMontage:!0})},d.$3=function(){var a;d.setState({showMontage:!1});a=(a=d.props.threadMessages)==null?void 0:(a=a.montage_thread)==null?void 0:a.id;a&&b("MessengerMarkReadMutation").commit(d.props.relay.environment,{thread_id:a,update_type:"MARK_READ"})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.props.threadMessages&&(this.props.onResize&&this.props.onResize());var a=this.getMontageThreadID();a&&(this.props.setThreadID&&this.props.setThreadID(a))};d.componentDidUpdate=function(a){a.threadMessages!==this.props.threadMessages&&(this.props.onResize&&this.props.onResize())};d.render=function(){var a=this.getFirstMontageMessage();return!a?null:b("React").createElement("div",{className:"_1sk5"},b("React").createElement("div",{className:"_1sk6"},this.renderContents(a)))};d.renderContents=function(a){var c=this.getCustomColor(),d=this.getUnread();if(b("gkx")("972782"))return b("React").createElement("div",null,this.$1());else return b("React").createElement("a",{className:"_5no5",href:"#",onClick:this.$2,role:"button"},b("React").createElement(b("MontageThumbnail.react"),{customColor:c,message:a,unread:d,imageHeight:j,imageWidth:k,shouldRecomputeDimensions:!1}),b("React").createElement("div",{className:"_1sui"},this.renderHeader(d,c),b("React").createElement("span",{className:"_1suk"},b("React").createElement(b("Timestamp.react"),{minimize:!0,time:this.getTimestamp()}))),this.renderLogo(),this.renderModal())};d.renderModal=function(){var a;a=(a=this.props.threadMessages)==null?void 0:a.montage_thread;return a&&this.state.showMontage?b("React").createElement(b("MontageViewerSingleThread.react"),{onHide:this.$3,open:this.state.showMontage,montageThread:a,unreadCount:a==null?void 0:a.unread_count}):null};d.$1=function(){var a;a=(a=this.props.threadMessages)==null?void 0:a.montage_thread;var c=this.getMontageThreadID(),d=this.props.threadID,e=this.getCustomColor(),f=this.getUnread(),g=this.getTimestamp(),h=this.getFirstMontageMessage(),i=this.getAuthorName(),j=this.renderHeader(f,e),k=this.renderLogo();return a?b("React").createElement(b("MontageThreadViewV2.react"),{messengerThreadFBID:c,threadID:d,customColor:e,unread:f,timestamp:g,firstMontageMessage:h,authorName:i,header:j,logo:k}):null};d.renderLogo=function(){return b("MessengerEnvironment").messengerui?null:b("React").createElement(b("MessengerLogo.react"),{color:"rgba(0, 0, 0, 0.3)",size:"17px"})};d.renderHeader=function(a,c){return a?b("React").createElement("h1",{className:"_1suj",style:{color:c}},i._("Watch {person_with_montage}'s story",[i._param("person_with_montage",this.getAuthorName())])):null};d.getAuthorName=function(){var a=b("MercuryIDs").getUserIDFromThreadID(this.props.threadID);if(!a)return null;a=b("MessengerParticipants.re").getNow(b("MercuryIDs").getParticipantIDFromUserID(a));return!a?null:a.short_name||a.name};d.getFirstMontageMessage=function(){var a;return(a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.montage_thread)!=null?(a=a.montageMessages)!=null?(a=a.edges)!=null?(a=a[0])!=null?a.node:a:a:a:a:a:a};d.getTimestamp=function(){var a=this.getFirstMontageMessage();return a&&a.timestamp};d.getCustomColor=function(){var a;a=(a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.customization_info)!=null?a.outgoing_bubble_color:a:a:a;var c;!a?c="#0084ff":c="#"+a.substring(2);return b("convertMIGColorToFIGColor")(c)};d.getUnread=function(){var a;return!!((a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.montage_thread)!=null?a.unread_count:a:a:a)};d.getMontageThreadID=function(){var a;return(a=this.props)!=null?(a=a.threadMessages)!=null?(a=a.montage_thread)!=null?(a=a.thread_key)!=null?a.thread_fbid:a:a:a:a};return c}(b("React").PureComponent);d.propTypes={onResize:a.func,threadMessages:a.object.isRequired,threadID:a.string.isRequired};e.exports=c(d,{threadMessages:function(){return b("MontageThreadView_threadMessages.graphql")}})}),null);
__d("MontageThreadViewContainerImpl.react",["FluxContainer","MercuryIDs","MontageActions","MontageStore","MontageThreadView.react","React","RelayFBEnvironment","RelayModern","MontageThreadViewContainerImplQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("RelayModern").QueryRenderer;b("RelayModern").graphql;a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.threadIDToMontageThreadID={},d.$2=function(a){a=a.props;var c=b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID);d.$3();if(!c)return null;return!a?null:b("React").createElement(b("MontageThreadView.react"),babelHelpers["extends"]({},a,{onResize:d.props.onResize,setThreadID:d.$4,threadID:d.props.threadID}))},d.$4=function(a){var c=b("MercuryIDs").getThreadFBIDFromThreadID(d.props.threadID);d.threadIDToMontageThreadID[c]=a},c)||babelHelpers.assertThisInitialized(d)}c.getStores=function(){return[b("MontageStore")]};c.calculateState=function(){return{needsUpdating:b("MontageStore").getState().needsUpdating}};var d=c.prototype;d.render=function(){var a=this.props.threadID;a=b("MercuryIDs").getThreadFBIDFromThreadID(a);return!a?null:b("React").createElement(h,{environment:b("RelayFBEnvironment"),cacheConfig:{forceFetch:this.$1(a)},query:g||(g=function(){return b("MontageThreadViewContainerImplQuery.graphql")}),render:this.$2,variables:{threadFBID:a}})};d.$3=function(){var a=b("MercuryIDs").getThreadFBIDFromThreadID(this.props.threadID),c=this.threadIDToMontageThreadID[a];this.state.needsUpdating[a]&&b("MontageActions").hasUpdated(a);this.state.needsUpdating[a]&&b("MontageActions").hasUpdated(c)};d.$1=function(a){return!!(this.state.needsUpdating[a]||this.state.needsUpdating[this.threadIDToMontageThreadID[a]])};return c}(b("React").PureComponent);c.propTypes={onResize:a.func,threadID:a.string.isRequired};e.exports=b("FluxContainer").create(c)}),null);