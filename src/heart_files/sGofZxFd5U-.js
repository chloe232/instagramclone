if (self.CavalryLogger) { CavalryLogger.start_js(["xZGkT"]); }

__d("MessengerForwardChatFlowSharedAttachmentsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerForwardChatFlowSharedAttachmentsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAttachmentID=function(a){this.$1.attachment_id=a;return this};c.setAttachmentType=function(a){this.$1.attachment_type=a;return this};c.setIsFromViewer=function(a){this.$1.is_from_viewer=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={attachment_id:!0,attachment_type:!0,is_from_viewer:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("ChatPhotoForwardButton.react",["cx","fbt","Link.react","MessagingForwardAttachmentDialog.react","MessengerForwardChatFlowSharedAttachmentsTypedLogger","MessengerPhotoForwardConfig","React","TooltipData"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={dialogShown:!1},d.$2=function(){d.props.attachmentIDs[0]&&d.props.attachmentTypes[0]&&new(b("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(d.props.attachmentIDs[0]).setIsFromViewer(d.props.isFromViewer).setAttachmentType(d.props.attachmentTypes[0]).log(),d.setState({dialogShown:!0})},d.$3=function(){d.setState({dialogShown:!1})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=h._("Forward"),c=this.props.isFromViewer?"left":"right";c=Object.assign({"data-tooltip-alignh":c},b("TooltipData").propsFor(a,c));var d=b("MessengerPhotoForwardConfig").showArrowIcon?"_3xqa":"_2t5t";return b("React").createElement("div",null,this.$1(),b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$2,ref:"forwardButton",role:"button",className:"_2t5q"+(this.props.isFromViewer?"":" _1_47")+(this.props.isFromViewer?" _1_48":"")}),b("React").createElement("div",{className:d})))};d.$1=function(){if(!this.state.dialogShown)return null;var a=h._("Forward in separate messages");return b("React").createElement(b("MessagingForwardAttachmentDialog.react"),{attachmentID:this.props.attachmentIDs[0],onClose:this.$3,shown:this.state.dialogShown,title:a})};return c}(b("React").PureComponent);c.propTypes={attachmentIDs:a.arrayOf(a.string).isRequired,isFromViewer:a.bool.isRequired};e.exports=c}),null);
__d("MessengerShareIconSVGM4React.bs",["React"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("React").createElement("svg",{height:"22px",width:"22px",viewBox:"0 0 36 36"},b("React").createElement("g",{id:"share",fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1"},b("React").createElement("polygon",{id:"Fill-7",points:"0 36 36 36 36 0 0 0"}),b("React").createElement("path",{id:"Fill-8",d:"M22.001,11.0081937 L19,11.0081937 L19,23.007676 C19,23.5599911 18.5525,24.0073413 18,24.0073413 C17.448,24.0073413 17,23.5599911 17,23.007676 L17,11.0081937 L13.998,11.0081937 C13.199,11.0081937 12.7225,10.1169921 13.166,9.45171483 L17.1675,3.44572576 C17.5635,2.85142475 18.436,2.85142475 18.832,3.44572576 L22.8335,9.45171483 C23.2765,10.1169921 22.8,11.0081937 22.001,11.0081937 M24,31 L12,31 C9.791,31 8,29.2105991 8,27.0028383 L8,18.0103492 C8,15.8030883 9.791,14.0131875 12,14.0131875 L14,14.0131875 C14.5525,14.0131875 15,14.4610376 15,15.0128528 C15,15.5646681 14.5525,16.0120183 14,16.0120183 L12,16.0120183 C10.8955,16.0120183 10,16.9067187 10,18.0103492 L10,27.0028383 C10,28.1064688 10.8955,29.0011693 12,29.0011693 L24,29.0011693 C25.1045,29.0011693 26,28.1064688 26,27.0028383 L26,18.0103492 C26,16.9067187 25.1045,16.0120183 24,16.0120183 L22,16.0120183 C21.448,16.0120183 21,15.5646681 21,15.0128528 C21,14.4610376 21.448,14.0131875 22,14.0131875 L24,14.0131875 C26.2095,14.0131875 28,15.8030883 28,18.0103492 L28,27.0028383 C28,29.2105991 26.2095,31 24,31",fill:a})))}f.make=a}),null);
__d("MessengerPhotoForwardButton.react",["cx","fbt","Link.react","MessengerDialogs.bs","MessengerDotComAndInboxM4Check.bs","MessengerForwardAttachmentDialogReact.bs","MessengerForwardChatFlowSharedAttachmentsTypedLogger","MessengerShareIconSVGM4React.bs","React","TooltipData"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("MessengerForwardAttachmentDialogReact.bs").jsComponent;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$1=function(){var a=h._("Forward in separate messages");d.props.attachmentIDs[0]&&d.props.attachmentTypes[0]&&new(b("MessengerForwardChatFlowSharedAttachmentsTypedLogger"))().setAttachmentID(d.props.attachmentIDs[0]).setIsFromViewer(d.props.isFromViewer).setAttachmentType(d.props.attachmentTypes[0]).log();b("MessengerDialogs.bs").showDialog(function(){return b("React").createElement(i,{attachmentID:d.props.attachmentIDs[0],onClose:d.$2,shown:!0,title:a})})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=h._("Forward"),c=b("TooltipData").propsFor(a,"above","center");if(b("MessengerDotComAndInboxM4Check.bs").yes)return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$1,ref:"forwardButton",role:"button",className:"_7iov _7-_v"}),b("MessengerShareIconSVGM4React.bs").make("black"));else return b("React").createElement(b("Link.react"),babelHelpers["extends"]({},this.props,c,{"aria-label":a,onClick:this.$1,ref:"forwardButton",role:"button",className:"_2t5t"}))};d.$2=function(){b("MessengerDialogs.bs").removeDialog()};return c}(b("React").PureComponent);e.exports=a}),null);