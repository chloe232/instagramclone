if (self.CavalryLogger) { CavalryLogger.start_js(["E2JJn"]); }

__d("P2PNUXRendererUtils",["CurrentUser","ImmutableObject","MercuryAttachmentType","P2PTransferParam","P2PTransferStatus"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getTransferFromMessage:function(a){var c;if(!a||!a.attachments||!a.attachments.length)return null;a=a.attachments[0];this.isShareAttachment(a)&&(c=a.share.target);c&&(c=new(b("ImmutableObject"))(c));return c},isSuccessfulReceivedTransfer:function(a){return a&&a.receiver&&a.receiver.id===b("CurrentUser").getID()&&(a.status===b("P2PTransferStatus").COMPLETED||a.status===b("P2PTransferStatus").PENDING_RECIPIENT_NUX)},isShareAttachment:function(a){return!!(typeof a!=="string"&&a.attach_type==b("MercuryAttachmentType").SHARE&&a.share&&a.share.style_list&&a.share.style_list.indexOf("orion")>=0)},doesNUXNeedCreditCards:function(a){var c=b("CurrentUser").getID()===a.sender.id;return!c&&a[b("P2PTransferParam").STATUS]===b("P2PTransferStatus").PENDING_RECIPIENT_NUX},isRecipientActionableStatus:function(a){var c=a[b("P2PTransferParam").STATUS];a=b("CurrentUser").getID()===a.sender.id;return!a&&(c===b("P2PTransferStatus").PENDING_RECIPIENT_NUX||c===b("P2PTransferStatus").PENDING_RECIPIENT_VERIFICATION||c===b("P2PTransferStatus").PENDING_PUSH_FAIL)}};e.exports=a}),null);
__d("P2PFriendsListStore",["EventEmitter","P2PActionConstants","P2PAPI","P2PDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h="",i=25;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").FRIENDS_LIST_UPDATED:this.handleFriendsListUpdated(c);this.emit("change");break}};d.handleFriendsListUpdated=function(a){(!h||h===a.query)&&(g=a.friends)};d.searchFriends=function(a){h=a,this.fetchFriends(a)};d.fetchFriends=function(a){b("P2PAPI").getFriendsList(i,a)};d.getFriends=function(){return g};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PFriendPicker.react",["ix","cx","fbt","glyph","Image.react","Layout.react","debounce","MercuryIDs","P2PActions","P2PFriendsListStore","P2PLoadingMask.react","P2PLogger","P2PPaymentLoggerEvent","P2PText.react","React","ScrollableArea.react","XUIButton.react","XUITextInput.react"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k=b("Layout.react").FillColumn,l=b("Layout.react").Column;a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={friends:b("P2PFriendsListStore").getFriends(),showLoader:!0},d.log=function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:d.props.eventFlow},c))},d.loggedSearch=null,d.friendPickerStoreSub=null,d.updateFriendsList=function(){d.setState({friends:b("P2PFriendsListStore").getFriends(),showLoader:!1})},d.onFriendSelect=function(a){d.log(b("P2PPaymentLoggerEvent").UI_ACTN_FRIEND_PICKER_SELECT,{object_id:a.id}),b("P2PActions").chatSendViewOpened({amount:d.props.amount,referrer:d.props.referrer,sendMoneyNUXDismissed:d.props.sendMoneyNUXDismissed,threadID:b("MercuryIDs").getThreadIDFromUserID(a.id)}),d.props.onFriendSelected&&d.props.onFriendSelected()},d.getQuery=function(){return d.refs.input_ref&&d.refs.input_ref.refs.textInput.getValue()},d.onSearchInputChange=function(){d.loggedSearch||(d.log(b("P2PPaymentLoggerEvent").UI_ACTN_FRIEND_PICKER_SEARCH),d.loggedSearch=!0);var a=d.getQuery();a||d.setState({showLoader:!0});b("P2PFriendsListStore").searchFriends(a)},d.renderTagLineRow=function(){return d.state.showLoader?null:b("React").createElement("li",{className:"_1px5"},b("React").createElement("div",{className:"_1px6"},d.props.subTitle))},d.renderfriendRow=function(a){var c;d.props.buttonLabel&&(c=b("React").createElement(b("XUIButton.react"),{label:d.props.buttonLabel,size:"large"}));return b("React").createElement("li",{className:"_1px7",key:a.id,onClick:d.onFriendSelect.bind(babelHelpers.assertThisInitialized(d),a)},b("React").createElement(b("Layout.react"),null,b("React").createElement(k,null,b("React").createElement("div",{className:"_1px8"},b("React").createElement(b("Image.react"),{className:"_1px9",height:50,src:a.image_src,width:50})),b("React").createElement("div",{className:"_1pxa"},b("React").createElement(b("P2PText.react"),{className:"_1pxb",type:"primary"},a.full_name))),b("React").createElement(l,{className:"_1pxc"},c)))},d.renderFriendList=function(){var a=d.getQuery();if(!d.state.showLoader&&d.state.friends.length===0)if(a&&a.length)return b("React").createElement("div",{className:"_1pxd"},i._("No results."));else return b("React").createElement("div",{className:"_1pxd"},i._("You do not have any friends who are able to receive money."));return b("React").createElement("div",{className:"_1pxe"},b("React").createElement(b("P2PLoadingMask.react"),{visible:d.state.showLoader}),b("React").createElement(b("ScrollableArea.react"),{height:d.props.height},b("React").createElement("ul",null,d.state.friends.map(d.renderfriendRow),d.renderTagLineRow())))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.friendPickerStoreSub=b("P2PFriendsListStore").addListener("change",this.updateFriendsList),b("P2PFriendsListStore").searchFriends(),this.log(b("P2PPaymentLoggerEvent").UI_ACTN_FRIEND_PICKER_SHOWN)};d.componentWillUnmount=function(){this.friendPickerStoreSub&&(this.friendPickerStoreSub.remove(),this.friendPickerStoreSub=null)};d.render=function(){return b("React").createElement("div",null,b("React").createElement("div",{className:"_1pxf"},b("React").createElement("div",{className:"_1pxg"},b("React").createElement(b("XUITextInput.react"),{className:"_1pxn",height:"tall",onChange:b("debounce")(this.onSearchInputChange,150),placeholder:i._("Search friends"),ref:"input_ref"}),b("React").createElement(b("Image.react"),{className:"_1pxo",src:g("101450")}))),this.renderFriendList())};return c}(b("React").Component);c.propTypes={amount:a.string,buttonLabel:a.node,eventFlow:a.string.isRequired,height:a.number,onFriendSelected:a.func,referrer:a.string,sendMoneyNUXDismissed:a.bool,subTitle:a.node};c.defaultProps={amount:"",buttonLabel:i._("Pay Friend"),height:350,title:i._("Select Friend"),subTitle:i._("These are your friends who are able to receive money.")};e.exports=c}),null);
__d("P2PSendMoneyNUXListItems.react",["fbt","ix","Image.react","P2PListRow.react","P2PText.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.renderRow=function(a,c){return b("React").createElement(b("P2PListRow.react"),{offset:d.props.size},b("React").createElement(b("Image.react"),a),b("React").createElement(b("P2PText.react"),{type:"primary"},c))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.size;return b("React").createElement("div",null,this.renderRow(a==="small"?{height:18,src:h("94401"),width:18}:{height:36,src:h("94400"),width:36},g._("It's FREE to send and receive money.")),this.renderRow(a==="small"?{height:27,src:h("94405"),width:18}:{height:54,src:h("94404"),width:36},g._("Industry-leading security \u2013 password protection, anti-fraud team and more.")),this.renderRow(a==="small"?{height:13,src:h("94403"),width:18}:{height:26,src:h("94402"),width:36},g._("Send money from your debit card to theirs.")))};return c}(b("React").Component);c.propTypes={offset:a.oneOf(["small","medium"])};c.defaultProps={size:"small"};e.exports=c}),null);
__d("P2PSendMoneyNUXTitleText.react",["fbt","React"],(function(a,b,c,d,e,f,g){"use strict";function a(){return b("React").createElement("div",null,g._("Send money to anyone"))}e.exports=a}),null);
__d("P2PSendMoneyNUXDialog.react",["cx","MessengerEnvironment","P2PDialog.react","P2PDialogBody.react","P2PDialogFooter.react","P2PDialogTitle.react","P2PEncryptedText.react","P2PLogger","P2PNUXNextButton.react","P2PPaymentLoggerEvent","P2PSendMoneyNUXListItems.react","P2PSendMoneyNUXTitleText.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(){d.$1(b("P2PPaymentLoggerEvent").UI_ACTN_SEND_MONEY_NUX_NEXT_CLICK),d.props.onNextClick()},d.$1=function(a,c){b("P2PLogger").log(a,babelHelpers["extends"]({www_event_flow:d.props.eventFlow},d.props.loggingData,c))},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$1(b("P2PPaymentLoggerEvent").UI_ACTN_SEND_MONEY_NUX_SHOWN)};d.render=function(){return b("React").createElement(b("P2PDialog.react"),{onToggle:this.props.onToggle,width:this.props.width},b("React").createElement(b("P2PDialogTitle.react"),null,b("React").createElement(b("P2PSendMoneyNUXTitleText.react"),null)),b("React").createElement(b("P2PDialogBody.react"),{className:"_1ou5"},b("React").createElement(b("P2PSendMoneyNUXListItems.react"),{size:"large"})),b("React").createElement(b("P2PDialogFooter.react"),{leftContent:b("React").createElement("div",{className:"_1ou6"},b("React").createElement(b("P2PEncryptedText.react"),null))},b("React").createElement(b("P2PNUXNextButton.react"),{onNextClick:this.$2})))};return c}(b("React").Component);c.propTypes={eventFlow:a.string,onToggle:a.func.isRequired,onNextClick:a.func.isRequired,width:a.number};c.defaultProps={width:b("MessengerEnvironment").messengerui?400:350};e.exports=c}),null);
__d("P2PChannelType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CREDIT_CARD_CHANGED:"P2P/CreditCardChanged",CREDIT_CARD_DELETED:"P2P/CreditCardDeleted",TRANSFER_STATUS_CHANGED:"P2P/TransferStatusChanged",PLATFORM_CONTEXT_NEW:"P2P/PlatformContextNew",PLATFORM_CONTEXT_DISMISSED:"P2P/PlatformContextDismissed",PLATFORM_CONTEXT_ELIGIBLE_ITEM_UPDATED:"P2P/PlatformContextEligibleItemUpdated",PAYMENT_REQUEST_STATUS_CHANGED:"P2P/PaymentRequestStateChanged"})}),null);
__d("P2PPaymentMethodCategory",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CREDIT_CARD:"credit_card",DEBIT_CARD:"debit_card",PREPAID_CARD:"prepaid_card",STORED_VALUE_ACCOUNT:"stored_value_account",PAYPAL_BA:"paypal_ba"})}),null);
__d("P2PCreditCard",["fbt","ix","CreditCardFormParam","CreditCardTypeEnum","P2PPaymentMethodCategory","PaymentMethodUtils"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i={visa:{image:h("95537"),imageLarge:h("95538"),name:"Visa"},mc:{image:h("95521"),imageLarge:h("95522"),name:"MasterCard"},disc:{image:h("95512"),imageLarge:h("95513"),name:"Discover"},jcb:{image:h("95518"),imageLarge:h("95519"),name:"JCB"},amex:{image:h("95501"),imageLarge:h("95502"),name:"American Express"},unknown:{image:h("26967"),imageLarge:h("26967"),name:g._("Unknown Card Type")}};a=function(){__p&&__p();function a(a){this.setCredentialId(a[b("CreditCardFormParam").CREDENTIAL_ID]),this.setCardType(a[b("CreditCardFormParam").CARD_TYPE]),this.setCreditCardNumber(a[b("CreditCardFormParam").CARD_NUMBER]),this.setSelected(a.selected),this.setZipCode(a[b("CreditCardFormParam").ZIP]),this.setCSC(a[b("CreditCardFormParam").CSC]),this.setExp(a[b("CreditCardFormParam").CARD_EXPIRATION]),this.setIsPreset(a.isPreset),this.setIsVerified(a.isVerified),this.setIsMobileVerified(a.isMobileVerified),this.setIsPersonalTransferEligible(a.isPersonalTransferEligible),this.setCategory(a.category)}var c=a.prototype;c.getCreditCardNumber=function(){return this[b("CreditCardFormParam").CARD_NUMBER]};c.setCreditCardNumber=function(a){a=a.replace(/ /g,""),this.setCardProviderProps(this[b("CreditCardFormParam").CARD_TYPE],a),a=a.substr(a.length-4),this[b("CreditCardFormParam").CARD_NUMBER]=a};c.setCardProviderProps=function(a,b){a=this.$1(a,b);i[a]&&(this.setImage(i[a].image),this.setImageLarge(i[a].imageLarge),this.setName(i[a].name))};c.getExp=function(){return this[b("CreditCardFormParam").CARD_EXPIRATION]};c.getExpFormatted=function(){var a=this[b("CreditCardFormParam").CARD_EXPIRATION];return a?a[b("CreditCardFormParam").MONTH]+"/"+a[b("CreditCardFormParam").YEAR]:""};c.getExpFormattedShort=function(){var a=this[b("CreditCardFormParam").CARD_EXPIRATION],c="";a&&a[b("CreditCardFormParam").MONTH]&&a[b("CreditCardFormParam").YEAR]&&(c=a[b("CreditCardFormParam").MONTH]+"/",a[b("CreditCardFormParam").YEAR].length===4?c+=a[b("CreditCardFormParam").YEAR].substr(2):c+=a[b("CreditCardFormParam").YEAR]);return c};c.setExp=function(a){if(!a)return;var c={};c[b("CreditCardFormParam").MONTH]=a[b("CreditCardFormParam").MONTH];c[b("CreditCardFormParam").YEAR]=a[b("CreditCardFormParam").YEAR];c[b("CreditCardFormParam").MONTH]&&c[b("CreditCardFormParam").MONTH].length===1&&(c[b("CreditCardFormParam").MONTH]="0"+c[b("CreditCardFormParam").MONTH]);c[b("CreditCardFormParam").YEAR]&&c[b("CreditCardFormParam").YEAR].length===2&&(a=new Date().getFullYear()+"",a=a.substr(0,2),c[b("CreditCardFormParam").YEAR]=a+c[b("CreditCardFormParam").YEAR]);this[b("CreditCardFormParam").CARD_EXPIRATION]=c};c.getCSC=function(){return this[b("CreditCardFormParam").CSC]};c.setCSC=function(a){this[b("CreditCardFormParam").CSC]=a};c.getZipCode=function(){return this[b("CreditCardFormParam").ZIP]};c.setZipCode=function(a){this[b("CreditCardFormParam").ZIP]=a};c.getSelected=function(){return this.$2};c.setSelected=function(a){this.$2=a};c.getCardType=function(){return this[b("CreditCardFormParam").CARD_TYPE]};c.setCardType=function(a){this[b("CreditCardFormParam").CARD_TYPE]=a,this.setCardProviderProps(a,this[b("CreditCardFormParam").CARD_NUMBER])};c.getCredentialId=function(){return this[b("CreditCardFormParam").CREDENTIAL_ID]};c.setCredentialId=function(a){this[b("CreditCardFormParam").CREDENTIAL_ID]=a};c.$1=function(a,c){var d="default",e;a?(e=Object.keys(b("CreditCardTypeEnum")).filter(function(c){return b("CreditCardTypeEnum")[c]===a})[0],d=this.$3(e)):c&&(e=b("PaymentMethodUtils").getCardType(c),e&&(d=e.name));return d};c.getImage=function(){return this.$4||i.unknown.image};c.setImage=function(a){this.$4=a};c.getImageLarge=function(){return this.$5||i.unknown.imageLarge};c.setImageLarge=function(a){this.$5=a};c.getName=function(){return this.$6||i.unknown.name};c.setName=function(a){this.$6=a};c.getIsPreset=function(){return this.$7};c.setIsPreset=function(a){this.$7=a||!1};c.$3=function(a){__p&&__p();switch(a){case"VISA":a="visa";break;case"AMERICANEXPRESS":a="amex";break;case"MASTERCARD":a="mc";break;case"DISCOVER":a="disc";break;case"JCB":a="jcb";break;default:a="unknown";break}return a};c.getCreditCardNumberFormatted=function(){return"*"+this[b("CreditCardFormParam").CARD_NUMBER]};c.getDetailsFormatted=function(){return this.getName()+" "+this.getCreditCardNumberFormatted()};c.getCreditCardNumberMask=function(){return"**** **** **** "+this[b("CreditCardFormParam").CARD_NUMBER]};c.getMaxCSCLength=function(){var a=this.$1(this[b("CreditCardFormParam").CARD_TYPE],this[b("CreditCardFormParam").CARD_NUMBER]);return a==="amex"?4:3};c.getIsVerified=function(){return this.$8||!1};c.setIsVerified=function(a){this.$8=a};c.getIsMobileVerified=function(){return this.$9||!1};c.setIsMobileVerified=function(a){this.$9=a};c.getIsPersonalTransferEligible=function(){return!!this.$10};c.setIsPersonalTransferEligible=function(a){this.$10=a};c.getCategory=function(){return this.$11};c.setCategory=function(a){this.$11=a};c.getCategoryName=function(){switch(this.$11){case b("P2PPaymentMethodCategory").DEBIT_CARD:return g._("Debit");case b("P2PPaymentMethodCategory").CREDIT_CARD:return g._("Credit");case b("P2PPaymentMethodCategory").PREPAID_CARD:return g._("Prepaid");default:return null}};c.isExpired=function(){var a=this.getExp();if(!a)return!1;var b=a.month;a=a.year;var c=new Date(),d=c.getFullYear()+"";c=c.getMonth()+1+"";c=c.length===1?"0"+c:c;return a<d||d===a&&b<c};return a}();e.exports=a}),null);
__d("P2PTransferStore",["Arbiter","ChannelConstants","CreditCardFormParam","CurrentUser","EventEmitter","ImmutableObject","P2PActionConstants","P2PActions","P2PAPI","P2PChannelType","P2PCreditCard","P2PDispatcher","P2PGKValues","P2PNUXRendererUtils","P2PTransferParam","P2PTransferStatus","MercuryThreadInformer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MercuryThreadInformer").get(),h=!1,i,j=[],k,l={},m=!1,n=!1,o=new Set(),p=!1,q=0;function r(a,c){c&&(l[c]=new(b("ImmutableObject"))(a))}function s(a,b){b&&(l[b]={error:a})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c;c=a.call(this)||this;b("Arbiter").subscribe(b("ChannelConstants").getArbiterType(b("P2PChannelType").TRANSFER_STATUS_CHANGED),c.handleChannelTransferStatusChanged.bind(babelHelpers.assertThisInitialized(c)));g.subscribe("messages-received",c.handleMessageReceived.bind(babelHelpers.assertThisInitialized(c)));b("P2PDispatcher").register(c.onEventDispatched.bind(babelHelpers.assertThisInitialized(c)));return c}var d=c.prototype;d.onEventDispatched=function(a){__p&&__p();var c=a.data;a=a.type;switch(a){case b("P2PActionConstants").TRANSFERS_UPDATED:this.handleTransfersUpdated(c);this.emit("change");break;case b("P2PActionConstants").TRANSFERS_UPDATED_ERROR:this.handleTransfersUpdatedError(c);this.emit("change");break;case b("P2PActionConstants").NUX_TRANSFERS_UPDATED:this.handleNUXTransfersUpdated(c);this.emit("change");break;case b("P2PActionConstants").TRANSFER_ADDED:this.handleTransferAdded(c);this.emit("change");break;case b("P2PActionConstants").TRANSFER_UPDATED:this.handleTransferUpdated(c);this.emit("change");break;case b("P2PActionConstants").TRANSFER_ACCEPTED:this.handleTransferAccepted();this.emit("change");break;case b("P2PActionConstants").TRANSFER_DECLINED:this.handleTransferDeclined(c);this.emit("change");break;case b("P2PActionConstants").EXTENSIVE_TRANSFER_DETAILS_UPDATED:this.handleTransferWithExtensiveDetails(c);this.emit("change");break}};d.getAsyncRequestState=function(){return l};d.handleTransfersUpdated=function(a){__p&&__p();var c=this;k=null;m=!0;var d=[];a=a.map(function(a){var e={},f=c.getTransferByID(a[b("P2PTransferParam").TRANSFER_ID]),g={};a.creditCard&&(e[b("CreditCardFormParam").CREDENTIAL_ID]=a.creditCard[b("CreditCardFormParam").CREDENTIAL_ID],e[b("CreditCardFormParam").CARD_NUMBER]=a.creditCard[b("CreditCardFormParam").CARD_NUMBER],e[b("CreditCardFormParam").CARD_TYPE]=a.creditCard[b("CreditCardFormParam").CARD_TYPE],a.creditCard=new(b("P2PCreditCard"))(e));if(f)for(var h in f)g[h]=a[h]!==null?a[h]:f[h];d.push(a[b("P2PTransferParam").TRANSFER_ID]);return new(b("ImmutableObject"))(a,g)});var e=j.filter(function(a){return d.indexOf(a[b("P2PTransferParam").TRANSFER_ID])===-1});j=a.concat(e);j=j.sort(function(a,b){return b.creationTime-a.creationTime})};d.handleTransfersUpdatedError=function(a){k=a.error,s(a.requestID,a.error)};d.handleNUXTransfersUpdated=function(a){m||this.handleTransfersUpdated(a)};d.handleTransferAdded=function(a){__p&&__p();var c;r(a,a.requestID);a&&a.sender&&a.sender.id===b("CurrentUser").getID()&&(p=!0);c=j.filter(function(c){return c[b("P2PTransferParam").TRANSFER_ID]===a[b("P2PTransferParam").TRANSFER_ID]})[0];if(c)return;j.push(new(b("ImmutableObject"))(a));j=j.sort(function(a,b){return b.creationTime-a.creationTime})};d.handleTransferAddedError=function(a){s(a.requestID,a.errors)};d.handleChannelTransferStatusChanged=function(a,c){c=c.obj,b("P2PActions").transferUpdated(c)};d.handleMessageReceived=function(a,c){__p&&__p();for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){a=c[d];for(var e=0;e<a.length;e++)if(a[e].attachments&&a[e].attachments.length){var f=b("P2PNUXRendererUtils").getTransferFromMessage(a[e]);if(f){!this.hasReceived()&&f.receiver.id===b("CurrentUser").getID()&&b("P2PAPI").getBannerStates();b("P2PActions").transferAdded(f);return}}}};d.handleTransferUpdated=function(a){for(var c=0,d=j.length;c<d;c++)j[c][b("P2PTransferParam").TRANSFER_ID]===a[b("P2PTransferParam").TRANSFER_ID]&&(j[c]=b("ImmutableObject").set(j[c],a))};d.handleTransferAccepted=function(){var a;for(var c=0,d=j.length;c<d;c++)j[c][b("P2PTransferParam").STATUS]===b("P2PTransferStatus").PENDING_RECIPIENT_NUX&&(a={},a[b("P2PTransferParam").STATUS]=b("P2PTransferStatus").COMPLETED,j[c]=b("ImmutableObject").set(j[c],a));n=!0};d.handleTransferDeclined=function(a){var c;for(var d=0,e=j.length;d<e;d++)if(j[d][b("P2PTransferParam").TRANSFER_ID]===a[b("P2PTransferParam").TRANSFER_ID]&&j[d][b("P2PTransferParam").STATUS]===b("P2PTransferStatus").PENDING_RECIPIENT_NUX){c={};c[b("P2PTransferParam").STATUS]=b("P2PTransferStatus").CANCELED_DECLINED;j[d]=b("ImmutableObject").set(j[d],c);break}};d.handleTransferUpdatedError=function(a){s(a.requestID,a.errors)};d.getTransferByID=function(a){return j.filter(function(c){return a===c[b("P2PTransferParam").TRANSFER_ID]})[0]};d.getAll=function(a){h||(h=!0,b("P2PAPI").getTransactions(a));return j};d.getNUXTransfer=function(){var a=j.filter(function(a){return b("P2PNUXRendererUtils").isRecipientActionableStatus(a)})[0];!a&&!i&&!h&&(i=!0,b("P2PAPI").getNUXTransactions());a&&!a.currency&&q++<3&&b("P2PAPI").getNUXTransactions();return a};d.hasTransfers=function(){return j.length>0};d.hasAccepted=function(){return n};d.hasReceivedFromSender=function(a){for(var b=0,c=j.length;b<c;b++)if(j[b].sender.id===a)return!0;return!1};d.hasReceived=function(){for(var a=0,c=j.length;a<c;a++)if(j[a].receiver.id===b("CurrentUser").getID())return!0;return!1};d.getTransferFetchError=function(){return k};d.getTransferWithExtensiveDetailsByID=function(a){o.has(a)||(o.add(a),b("P2PAPI").getExtensiveTransferDetailsByID(a))};d.handleTransferWithExtensiveDetails=function(a){this.getTransferByID(a.transfer_id)?this.handleTransferUpdated(a):this.handleTransferAdded(a)};d.getAllLocal=function(){return j};d.hasSentDuringSession=function(){return p};d.shouldShowSenderNUX=function(){return!b("P2PGKValues").P2PUserAddedCredentialBefore&&!this.hasSentDuringSession()};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("P2PFriendPickerDialog.react",["cx","fbt","P2PActions","P2PDialog.react","P2PDialogBody.react","P2PDialogTitle.react","P2PFriendPicker.react","P2PSendMoneyNUXDialog.react","P2PTransferStore","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){var a,b;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(a=b=c.call.apply(c,[this].concat(e))||this,b.state={sendMoneyNUXDismissed:!1},b.handleToggle=function(a){a||b.props.onClose()},b.handleNUXNextClick=function(){b.setState({sendMoneyNUXDismissed:!0})},a)||babelHelpers.assertThisInitialized(b)}var d=a.prototype;d.render=function(){var a=445;return!this.state.sendMoneyNUXDismissed&&b("P2PTransferStore").shouldShowSenderNUX()?b("React").createElement(b("P2PSendMoneyNUXDialog.react"),{eventFlow:this.props.eventFlow,onToggle:this.handleToggle,onNextClick:this.handleNUXNextClick,width:a}):b("React").createElement(b("P2PDialog.react"),{onToggle:this.handleToggle,width:a},b("React").createElement(b("P2PDialogTitle.react"),null,b("React").createElement("div",{className:"_4ia-"},this.props.title)),b("React").createElement(b("P2PDialogBody.react"),{className:"_4ib0"},b("React").createElement(b("P2PFriendPicker.react"),{amount:this.props.amount,buttonLabel:this.props.buttonLabel,eventFlow:this.props.eventFlow,onFriendSelected:this.props.onClose,referrer:this.props.referrer,sendMoneyNUXDismissed:this.state.sendMoneyNUXDismissed,subTitle:this.props.subTitle})))};return a}(b("React").Component);i.propTypes={amount:a.string,buttonLabel:a.node,eventFlow:a.string.isRequired,onClose:a.func.isRequired,referrer:a.string,subTitle:a.node,title:a.node};i.defaultProps={amount:"",title:h._("Select Friend"),subTitle:h._("These are your friends who are able to receive money.")};e.exports={module:i,render:function(a){b("P2PActions").showDialog(i,babelHelpers["extends"]({title:h._("Send money to friends")},a,{onClose:b("P2PActions").hideDialog}))}}}),null);
__d("P2PSendMoneyHelper",["fbt","MercuryIDs","P2PActions","P2PFriendPickerDialog.react","P2PLogger","P2PPaymentLoggerEvent","P2PPaymentLoggerEventFlow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("P2PFriendPickerDialog.react").module;a={bindProfileSendMoneyAction:function(a,c){a.subscribe("itemclick",function(a,d){d.item.getValue()==="send_money"&&b("P2PActions").chatSendViewOpened({referrer:"profile_action",threadID:b("MercuryIDs").getThreadIDFromUserID(c)})})},bindPeopleSearchResultSendMoneyAction:function(a,c){a.subscribe("itemclick",function(a,d){d.item.getValue()==="send_money"&&(b("P2PLogger").log(b("P2PPaymentLoggerEvent").ACTN_PEOPLE_SEARCH_SEND_MONEY_BUTTON_CLICKED,{www_event_referrer:"www_people_search_result",www_event_flow:b("P2PPaymentLoggerEventFlow").UI_FLOW_P2P_PEOPLE_SEARCH_SEND_MONEY,object_id:c}),b("P2PActions").chatSendViewOpened({referrer:"people_search_result",threadID:b("MercuryIDs").getThreadIDFromUserID(c)}))})},initPaymentsBluebarMenuItems:function(a){a.subscribe("itemclick",function(a,c){a=c.item.getValue();a==="send_money"?b("P2PActions").showDialog(h,{eventFlow:b("P2PPaymentLoggerEventFlow").UI_FLOW_SEND_MONEY_BLUEBAR,onClose:b("P2PActions").hideDialog,referrer:"bluebar",title:g._("Send money to friends")}):a==="payments_history"&&b("P2PLogger").log(b("P2PPaymentLoggerEvent").UI_ACTN_PAYMENTS_HISTORY_BLUEBAR_CLICK,{www_event_flow:b("P2PPaymentLoggerEventFlow").UI_FLOW_PAYMENTS_MENU_BLUEBAR})})}};e.exports=a}),null);