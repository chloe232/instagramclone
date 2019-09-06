if (self.CavalryLogger) { CavalryLogger.start_js(["SNR0M"]); }

__d("MercuryAttachmentConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({SIDE_LENGTH:9});e.exports=a}),null);
__d("ChatImageArrowDirection",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({BOTH:null,LEFT:null,RIGHT:null});e.exports=a}),null);
__d("ChatImageWithArrow.react",["cx","ChatImageArrowDirection","CssBackgroundImage.react","Link.react","MercuryAttachmentConstants","React","XUISpinner.react","cssURL","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=30,i=15;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$3=function(){return Math.max(d.props.width,i)},d.$6=function(){return Math.max(d.props.height,h)},d.$7=function(a,c,d,e){if(c===b("ChatImageArrowDirection").LEFT)return"translate("+d+"px, "+e+"px)rotate(45deg)";else return"translate("+(a-d)+"px, "+e+"px)rotate(45deg)"},d.$8=function(a,c,e,f){if(c===b("ChatImageArrowDirection").LEFT)return"rotate(-45deg)translate(-"+(d.$1+e)+"px,-"+f+"px)";else return"rotate(-45deg)translate(-"+(a-e)+"px, -"+f+"px)"},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){this.$1=Math.floor(this.props.sideLength/Math.sqrt(2));this.$2=Math.ceil(this.$3()+this.$1);if(this.props.isLoading)return this.$4();var a=b("joinClasses")("_4yp6"+(this.props.round?" _3lk2":""),this.props.rootClassName);return this.$5(b("React").createElement("div",{className:a},b("React").createElement("div",{className:"_52kr"+(this.props.round?" _3_om":""),style:{width:this.$3(),height:this.$6()}},b("React").createElement(b("CssBackgroundImage.react"),{className:"_4yp9"+(this.props.isSpherical?" _3603":""),imageURI:this.props.source,backgroundPosition:"center",style:{width:this.$3(),height:this.$6(),borderRadius:"inherit"}},this.props.isSpherical?b("React").createElement("div",{className:"_64ks"}):null))))};d.$5=function(a){return this.props.onClick?b("React").createElement(b("Link.react"),{className:"_6jtk",onClick:this.props.onClick},a):a};d.$4=function(){var a={width:this.props.sideLength,height:this.props.sideLength};this.props.source&&(a.backgroundImage=b("cssURL")(this.props.source));a={width:this.props.sideLength,height:this.props.sideLength};this.props.source&&(a.opacity=0);a={width:this.$3(),height:this.$6()};this.props.source&&(a.backgroundImage=b("cssURL")(this.props.source),a.backgroundSize="cover");return b("React").createElement("div",{className:"_4yp6"},b("React").createElement("div",{className:"_4ypb _3_om",style:a},b("React").createElement(b("XUISpinner.react"),{size:"small"})))};return c}(b("React").Component);c.propTypes={arrowDirection:a.oneOf(Object.keys(b("ChatImageArrowDirection"))),onClick:a.func,height:a.number.isRequired,isLoading:a.bool,isSpherical:a.bool,round:a.bool,rootClassName:a.string,sideLength:a.number,source:a.string,width:a.number.isRequired};c.defaultProps={sideLength:b("MercuryAttachmentConstants").SIDE_LENGTH,isLoading:!1,isSpherical:!1,round:!1};e.exports=c}),null);
__d("MessengerActionsIconSVGM4React.bs",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement("svg",{height:"22px",width:"22px",viewBox:"0 0 36 36"},b("React").createElement("g",{id:"dots-3-horizontal",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},b("React").createElement("g",{id:"Page-1",fill:a},b("React").createElement("path",{id:"Fill-1",d:"M7,18 C7,16.4815417 8.23154167,15.25 9.75,15.25 C11.2684583,15.25 12.5,16.4815417 12.5,18 C12.5,19.5189167 11.2684583,20.75 9.75,20.75 C8.23154167,20.75 7,19.5189167 7,18 Z M15.25,18 C15.25,16.4815417 16.4815417,15.25 18,15.25 C19.5184583,15.25 20.75,16.4815417 20.75,18 C20.75,19.5189167 19.5184583,20.75 18,20.75 C16.4815417,20.75 15.25,19.5189167 15.25,18 Z M23.5,18 C23.5,16.4815417 24.7315417,15.25 26.25,15.25 C27.7684583,15.25 29,16.4815417 29,18 C29,19.5189167 27.7684583,20.75 26.25,20.75 C24.7315417,20.75 23.5,19.5189167 23.5,18 Z"}))))}f.make=a}),null);
__d("MessengerContextualActions.react",["cx","ContextualLayerUpdateOnScroll","LayerHideOnBlur","Link.react","React","ReactAbstractContextualDialog","ReactLayer"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;var h=b("ReactLayer").createClass(b("ReactAbstractContextualDialog").createSpec({displayName:"MessengerContextualActionsDialog",theme:{wrapperClassName:"_hw2",arrowDimensions:{offset:12,length:12}}}));c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("li",{className:"_hw4"},b("React").createElement(b("Link.react"),{className:"_hw5",onClick:this.props.onClick},this.props.children))};return c}(b("React").Component);c.propTypes={onClick:a.func};d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return b("React").createElement(h,babelHelpers["extends"]({alignment:"center",behaviors:{ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerHideOnBlur:b("LayerHideOnBlur")}},a,{onToggle:this.props.onToggle}),b("React").createElement("ul",{className:"_hw3"},c))};return c}(b("React").Component);d.propTypes={onToggle:a.func};d.Item=c;e.exports=d}),null);
__d("MessengerMessageActions.react",["ix","cssVar","cx","fbt","ContextualLayerAutoFlipHorizontal","ContextualLayerHideOnScrollOut","ContextualLayerUpdateOnScroll","CurrentUser","Image.react","LayerHideOnBlur","LayerHideOnEscape","MercuryMessageActions","MessengerActionsIconSVGM4React.bs","MessengerContextualActions.react","MessengerDotComAndInboxM4Check.bs","MessengerMessage.bs","MessengerReactionsMenu.react","React","WorkChatRedesignedMessageListCheck.re","asset","tooltipPropsFor"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k=b("MessengerContextualActions.react").Item;a=b("React").PropTypes;c=b("React").createClass({displayName:"MessengerMessageActions",propTypes:{hasFormatting:a.func,isActive:a.bool,isDeletable:a.bool,isFromViewer:a.bool,isShowingOriginal:a.bool,includeReactions:a.bool,message:a.object.isRequired,onToggleOriginal:a.func,onShowMenu:a.func.isRequired,onReplyToMessage:a.func,isSavedView:a.bool,renderActionItems:a.func},getDefaultProps:function(){return{isDeletable:!0}},getInitialState:function(){return{shown:!1,reactionsMenuOpen:!1,hover:!1}},render:function(){var a=this,c=null;b("WorkChatRedesignedMessageListCheck.re").enabled?c=b("React").createElement(b("Image.react"),{src:this.state.hover?g("895434"):g("610910")}):b("CurrentUser").isWorkUser()?c=b("React").createElement(b("Image.react"),{src:g("559623")}):b("MessengerDotComAndInboxM4Check.bs").yes?c=b("MessengerActionsIconSVGM4React.bs").make(this.state.hover?"black":"rgba(0, 0, 0, 0.34)"):c=b("React").createElement(b("Image.react"),{src:g("559622")});var d=j._("More"),e=this.state.shown;e=e?null:b("tooltipPropsFor")(d,"above","center");return this.props.isActive?b("React").createElement("span",babelHelpers["extends"]({},e,{className:"_2rvp"+(b("MessengerDotComAndInboxM4Check.bs").yes?" _7i2l":""),ref:"actions",onClick:this._toggleShown,onMouseEnter:function(b){return a.setState({hover:!0})},onMouseLeave:function(b){return a.setState({hover:!1})}}),c,this.renderMenu(),this.renderLayers()):null},renderMenu:function(){var a=this;return!this.state.reactionsMenuOpen?null:b("React").createElement(b("MessengerReactionsMenu.react"),{entryPoint:"dot_menu",message:this.props.message,onHide:this._hideReactionsPopover,refProp:function(){return a.refs.actions}})},_openReactionsPopover:function(){this.setState({reactionsMenuOpen:!0,shown:!1})},_hideReactionsPopover:function(){this.setState({reactionsMenuOpen:!1})},renderLayers:function(){var a=this;return!this.state.shown?null:b("React").createElement(b("MessengerContextualActions.react"),{behaviors:{ContextualLayerAutoFlipHorizontal:b("ContextualLayerAutoFlipHorizontal"),ContextualLayerHideOnScrollOut:b("ContextualLayerHideOnScrollOut"),ContextualLayerUpdateOnScroll:b("ContextualLayerUpdateOnScroll"),LayerHideOnEscape:b("LayerHideOnEscape"),LayerHideOnBlur:b("LayerHideOnBlur")},context:this.refs.actions,key:"dialog",onToggle:this._handleActionsToggle,shown:this.props.isActive},this._renderRetry(),this.props.renderActionItems&&this.props.renderActionItems({closeActionList:function(){return a._handleActionsToggle(!1)},openReactionsPopover:function(){return a._openReactionsPopover()}}))},_toggleShown:function(a){var b=this;a.stopPropagation();this.setState({shown:!this.state.shown},function(){return b.props.onShowMenu(b.state.shown)})},_renderRetry:function(){return!b("MessengerMessage.bs").hasError(this.props.message)?null:b("React").createElement(k,{onClick:this._handleRetry},j._("Try again"))},_handleActionsToggle:function(a){a||this._handleDeselect()},_handleDeselect:function(){var a=this;this.setState({shown:!1},function(){return a.props.onShowMenu(a.state.shown)})},_handleRetry:function(){this._handleDeselect(),b("MercuryMessageActions").get().resend(this.props.message)}});e.exports=c}),null);
__d("MessengerDeepLinkActionItem.react",["fbt","FBClipboardLink.react","MessengerConfig","MessengerContextualActions.react","MessengerURIUtils.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerContextualActions.react").Item;function a(){return b("MessengerConfig").ShowMessageLinks}function c(a){var c=a.onClick;a=a.message;a=b("MessengerURIUtils.bs").getURIForMessage(a).getQualifiedURIBase().toString();var d=g._("Copy link");return b("React").createElement(h,{key:"react",onClick:c},b("React").createElement(b("FBClipboardLink.react"),{suppress:!0,tooltip:null,value:a},"[fb-only] ",d))}e.exports={actionItem:c,shouldRender:a}}),null);
__d("MessengerDeleteMessageDialogReact.bs",["fbt","bs_block","bs_curry","React","ReasonReact.bs","MessengerDialogReact.bs","MessengerDialogBodyReact.bs","MessengerDialogHeaderReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").reducerComponent("MessengerDeleteMessageDialogReact");function i(){return g._("Delete message")}var j=g._("Are you sure you want to delete this message?");function k(){return g._("Delete")}function l(a,c,d,e){return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(c){return b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Dialog[0](void 0,a,void 0,c[1][0],void 0,void 0,void 0,void 0,[b("React").createElement(b("MessengerDialogHeaderReact.bs").make,{children:i(0)}),b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogBodyReact.bs").make(void 0,[j])),b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Footer[0](void 0,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").CancelButton[0](d,[])),b("ReasonReact.bs").element(void 0,void 0,b("MessengerDialogReact.bs").Button[0](void 0,k(0),void 0,"danger",function(){return b("bs_curry")._1(c[3],0)},0,void 0,void 0,void 0,[]))]))]))},function(){return[!0]},h[10],function(a,d){return b("bs_block").__(2,[[!1],function(){return b("bs_curry")._1(c,0)}])},h[12]]}a=b("ReasonReact.bs").wrapReasonForJs(h,function(a){return l(a.onToggle,a.onDelete,a.onCancel,[])});f.component=h;f.renderDialogHeaderMsg=i;f.dialogBodyMsg=j;f.renderDialogButtonMsg=k;f.make=l;f.jsComponent=a}),null);
__d("MessengerDeleteMessageActionItem.react",["fbt","Bootloader","CurrentUser","MercuryMessageActions","MessengerContextualActions.react","MessengerDeleteMessageDialogReact.bs","MessengerDialogs.bs","MessengerState.bs","React","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerDeleteMessageDialogReact.bs").jsComponent,i=b("MessengerContextualActions.react").Item;function a(){return!0}c=b("React").createClass({displayName:"MessengerDeleteMessageActionItem",render:function(){return b("React").createElement(i,{key:"delete",onClick:this._handleDelete},b("gkx")("932794")?g._("Remove"):g._("Delete"))},_handleDelete:function(){var a=this,c=this.props.message;if(b("gkx")("932794")){this._handleRemove();return}b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(h,{onDelete:function(){b("MercuryMessageActions").get()["delete"](c.thread_id,[c.message_id])},onToggle:a._handleDialogToggle,onCancel:function(){return a.props.onClick()},isFromViewer:a.props.isFromViewer})})},_handleRemove:function(){var a=this,c=b("MessengerState.bs").getThreadMetaNow(b("CurrentUser").getID(),this.props.message.thread_id);b("Bootloader").loadModules(["RemoveMessageDialog"],function(b){b.showDialog(a.props.message,c.thread_unsendability_status,a.props.isFromViewer,function(){return a.props.onClick()})},"MessengerDeleteMessageActionItem.react")},_handleDialogToggle:function(a){a||b("MessengerDialogs.bs").removeDialog()}});e.exports={actionItem:c,shouldRender:a}}),null);
__d("MessengerReactionActionItem.react",["fbt","MessengerContextualActions.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MessengerContextualActions.react").Item;function a(){return!0}function c(a){a=a.onClick;return b("React").createElement(h,{key:"react",onClick:a},g._("React"))}e.exports={actionItem:c,shouldRender:a}}),null);
__d("MessengerReplyActionItem.react",["fbt","Bootloader","CurrentUser","MessageReplyPermissions","MessengerContextualActions.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerContextualActions.react").Item;function a(a){return b("MessageReplyPermissions").canReplyToMessage(a)}function c(a){var c=a.onClick;a.message;a=function(){b("Bootloader").loadModules(["MessageReplyTypedLogger","MessageReplyEntryPoint","MessageReplyEvent"],function(a,c,d){a=new a();a.setEvent(d.REPLY_INITIATED).setIsWorkplace(b("CurrentUser").isWorkUser()).setEntryPoint(c.THREE_DOT_BUTTON).log()},"MessengerReplyActionItem.react"),c()};return b("React").createElement(h,{key:"react",onClick:a},g._("Reply"))}e.exports={actionItem:c,shouldRender:a}}),null);
__d("SaveMessageUtils",["MessengerDotComSaveModule","QE2Logger","immutable"],(function(a,b,c,d,e,f){__p&&__p();var g=b("immutable").Set.of("fallback","share","event","attached_story","music_aggregation","avatar"),h=b("immutable").Set.of("group_sell_product_item");a={isSavableMessageAttachment:function(a){__p&&__p();var c=!0;for(var d=0;d<a.length;d++){if(a[d]=="group_sell_product_item")if(b("MessengerDotComSaveModule").can_save_for_sale_item_attachment!=null){b("QE2Logger").logExposureForUser("marketplace_www_messenger_save");return b("MessengerDotComSaveModule").can_save_for_sale_item_attachment}else return!1;if(h.has(a[d]))return!0;g.has(a[d])||(c=!1)}return c}};e.exports=a}),null);
__d("XMessengerDotComSaveController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/save/message/",{})}),null);
__d("MessengerSaveToFacebookActionItem.react",["fbt","AsyncRequest","CollectionCurationMechanisms","CollectionsDisplaySurface","CurrentUser","JSResource","LazyComponent.react","MercuryAttachmentType","MessengerConfig","MessengerContextualActions.react","MessengerDialogs.bs","MessengerDotComSaveModule","React","ReasonBootloadOnRender.react","ReasonResource","SavedStateActions","SaveMessageUtils","URLMatcher","XMessengerDotComSaveController","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerContextualActions.react").Item;function i(a){return j(a)&&!b("MessengerConfig").canSaveMessages&&!b("gkx")("843916")}function j(a){__p&&__p();if(b("MessengerDotComSaveModule").enabled_messenger_save&&k(a))return!0;if(b("MessengerDotComSaveModule").enabled_messenger_save&&a.attachments&&a.attachments.length>0&&a.attachments[0].share&&a.attachments[0].share.media&&a.attachments[0].share.media.playable)return!0;if(b("MessengerDotComSaveModule").enabled_messenger_save){a=b("URLMatcher").match(a.body);if(a!=null&&a.length>0)return!0}return!1}function k(a){__p&&__p();a=a.attachments;if(!a||a.length===0)return!1;for(var c=0;c<a.length;c++){var d=a[c];if(d.share&&d.share.style_list){var e=d.share.style_list;e=b("SaveMessageUtils").isSavableMessageAttachment(e)}else e=d.attach_type===b("MercuryAttachmentType").VIDEO;if(!e)return!1}return!0}a=b("React").createClass({displayName:"MessengerSaveToFacebookActionItem",render:function(){return i(this.props.message)&&b("React").createElement(h,{onClick:this._handleFacebookSave},this._renderSaveItemMsg())},_renderSaveItemMsg:function(){return b("CurrentUser").isWorkUser()?g._("Save to Workplace"):this._isMarketplaceAttachment()?g._("Save to Marketplace"):g._("Save to Facebook")},_isMarketplaceAttachment:function(){var a=this.props.message;if(!b("MessengerDotComSaveModule").enabled_messenger_save)return!1;a=(a=a)!=null?(a=a.attachments)!=null?(a=a[0])!=null?(a=a.share)!=null?a.style_list:a:a:a:a;if(a)for(var c=0;c<a.length;c++)if(a[c]==="group_sell_product_item")return!0;return!1},_handleFacebookSave:function(){var a=this,c=this.props.message,d=b("CollectionsDisplaySurface").MESSENGER_DOT_COM_MESSAGE,e=b("CollectionCurationMechanisms").RIGHT_CLICK;new(b("AsyncRequest"))().setURI(b("XMessengerDotComSaveController").getURIBuilder().getURI()).setData({action:b("SavedStateActions").SAVE,surface:d,mechanism:e,message_id:c.message_id}).send();b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(b("ReasonBootloadOnRender.react"),{loader:b("ReasonResource")(b("JSResource")("MessengerSaveMessageDialogReact.bs").__setRef("MessengerSaveToFacebookActionItem.react")),placeholder:b("React").createElement("div",null),component:b("React").createElement(b("LazyComponent.react"),{onToggle:a._handleDialogToggle,isMarketplaceAttachment:a._isMarketplaceAttachment()})})});this.props.onClick()},_handleDialogToggle:function(a){a||b("MessengerDialogs.bs").removeDialog()}});e.exports={actionItem:a,shouldRender:i}}),null);
__d("MessengerSetAsDescriptionActionItem.react",["fbt","CurrentUser","MercuryThreadActions","MessagingThreadCustomizationSource","MessengerAdminGroupUtils","MessengerConfig","MessengerContextualActions.react","MessengerState.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerContextualActions.react").Item;function a(a){var c,d=b("MessengerState.bs").getThreadMetaNow(b("CurrentUser").getID(),a.thread_id),e=d&&d.associated_object;c=d&&d.marketplace_thread_data&&(((c=d.marketplace_thread_data)==null?void 0:c.for_sale_item)||((c=d.marketplace_thread_data)==null?void 0:c.buyer_fbid)||((c=d.marketplace_thread_data)==null?void 0:c.seller_fbid));return a.body!=null&&d!=null&&!d.is_canonical&&b("MessengerAdminGroupUtils").canUpdateThreadDescription(d,b("CurrentUser").getID())&&b("MessengerConfig").ILPMBE&&!e&&!c}function c(a){var c=a.message,d=a.onClick;a=function(){if(b("MessengerState.bs").isEmptyLocalThread(b("CurrentUser").getID(),c.thread_id))return;b("MercuryThreadActions").get().changeGroupThreadDescription(c.thread_id,c.body,b("MessagingThreadCustomizationSource").SET_FROM_MESSAGE);d()};return b("React").createElement(h,{onClick:a},g._("Set group description"))}e.exports={actionItem:c,shouldRender:a}}),null);
__d("MessengerUnsaveActionItem.react",["fbt","MessengerContextualActions.react","React"],(function(a,b,c,d,e,f,g){"use strict";var h=b("MessengerContextualActions.react").Item;function a(){return!0}function c(a){a=a.onClick;return b("React").createElement(h,{onClick:a},g._("Unsave"))}e.exports={actionItem:c,shouldRender:a}}),null);
__d("MessengerViewSourceActionItem.react",["fbt","FBLogger","MessengerContextualActions.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("MessengerContextualActions.react").Item;function a(a){return a()}function c(a){var c=a.onClick;a=a.isShowingOriginal;a=a?g._("Show formatted"):g._("Show original");var d=function(){b("FBLogger")("messenger_dot_com").info("formatting_toggled"),c()};return b("React").createElement(h,{onClick:d},a)}e.exports={actionItem:c,shouldRender:a}}),null);
__d("MessengerMessageActionItemList",["requireCond","MessengerDeepLinkActionItem.react","MessengerDeleteMessageActionItem.react","MessengerEnvironment","MessengerReactionActionItem.react","MessengerReplyActionItem.react","MessengerSaveToFacebookActionItem.react","MessengerSetAsDescriptionActionItem.react","MessengerViewSourceActionItem.react","React","cr:1015277","cr:945177"],(function(a,b,c,d,e,f){"use strict";var g=b("MessengerDeepLinkActionItem.react").actionItem,h=b("MessengerDeepLinkActionItem.react").shouldRender,i=b("MessengerDeleteMessageActionItem.react").actionItem,j=b("MessengerDeleteMessageActionItem.react").shouldRender,k=b("MessengerReactionActionItem.react").actionItem,l=b("MessengerReactionActionItem.react").shouldRender,m=b("MessengerReplyActionItem.react").actionItem,n=b("MessengerReplyActionItem.react").shouldRender,o=b("MessengerSaveToFacebookActionItem.react").actionItem,p=b("MessengerSaveToFacebookActionItem.react").shouldRender,q=b("MessengerSetAsDescriptionActionItem.react").actionItem,r=b("MessengerSetAsDescriptionActionItem.react").shouldRender,s=b("MessengerViewSourceActionItem.react").actionItem,t=b("MessengerViewSourceActionItem.react").shouldRender;function a(a){return b("React").createElement(b("React").Fragment,null,[p(a.message)&&b("React").createElement(o,{key:"SaveToFacebookActionItem",onClick:a.closeActionList,message:a.message}),b("cr:945177")!==null&&b("cr:945177").shouldRender()&&b("React").createElement(b("cr:945177").actionItem,{key:"SetReminderActionItem",onClick:a.closeActionList,message:a.message}),j()&&b("React").createElement(i,{key:"DeleteMessageActionItem",isFromViewer:!!a.isFromViewer,onClick:a.closeActionList,message:a.message}),b("cr:1015277")!=null&&b("cr:1015277").shouldRender()&&b("React").createElement(b("cr:1015277").actionItem,{key:"SaveMessageActionItem",isFromViewer:!!a.isFromViewer,onClick:a.closeActionList,message:a.message}),a.hasFormatting&&a.onToggleOriginal&&t(a.hasFormatting)&&b("React").createElement(s,{key:"ViewSourceActionItem",isShowingOriginal:!!a.isShowingOriginal,onClick:function(){a.onToggleOriginal&&a.onToggleOriginal(),a.closeActionList()}}),b("MessengerEnvironment").messengerui&&h()&&b("React").createElement(g,{key:"DeepLinkActionItem",message:a.message,onClick:a.closeActionList}),a.includeReactions&&l()&&b("React").createElement(k,{key:"ReactionActionItem",message:a.message,onClick:a.openReactionsPopover}),!b("MessengerEnvironment").messengerui&&a.onReplyToMessage&&n(a.message)&&b("React").createElement(m,{key:"ReplyActionItem",message:a.message,onClick:a.onReplyToMessage}),r(a.message)&&b("React").createElement(q,{key:"SetAsDescriptionActionItem",onClick:a.closeActionList,message:a.message})].filter(Boolean))}e.exports=a}),null);
__d("MessengerRemovedTombstoneActionItemList",["MessengerDeleteMessageActionItem.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("MessengerDeleteMessageActionItem.react").actionItem,h=b("MessengerDeleteMessageActionItem.react").shouldRender;function a(a){return b("React").createElement(b("React").Fragment,null,[h()&&b("React").createElement(g,{key:"DeleteMessageActionItem",isFromViewer:!!a.isFromViewer,onClick:a.closeActionList,message:a.message})].filter(Boolean))}e.exports=a}),null);
__d("MessengerSavedMessageActionItemList",["MessengerUnsaveActionItem.react","React"],(function(a,b,c,d,e,f){"use strict";var g=b("MessengerUnsaveActionItem.react").actionItem,h=b("MessengerUnsaveActionItem.react").shouldRender;function a(a){return b("React").createElement(b("React").Fragment,null,[h()&&b("React").createElement(g,{onClick:a.closeActionList})].filter(Boolean))}e.exports=a}),null);