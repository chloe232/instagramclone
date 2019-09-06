if (self.CavalryLogger) { CavalryLogger.start_js(["np2JT"]); }

__d("DataViewPolyfill",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();b=function(){__p&&__p();function b(a,b,c){b===void 0?this.$1=new Uint8Array(a):c===void 0?this.$1=new Uint8Array(a,b):this.$1=new Uint8Array(a,b,c),this.byteLength=this.$1.byteLength}var c=b.prototype;c.getUint8=function(a){if(a>=this.$1.length)throw new Error("Trying to read beyond bounds of DataViewPolyfill");return this.$1[a]};c.getUint16=function(a,b){var c=this.getUint8(a);a=this.getUint8(a+1);return b?a*256+c:c*256+a};c.getUint32=function(a,b){var c=this.getUint8(a),d=this.getUint8(a+1),e=this.getUint8(a+2);a=this.getUint8(a+3);return b?((a*256+e)*256+d)*256+c:((c*256+d)*256+e)*256+a};b.isSupported=function(){return!!a.Uint8Array};return b}();e.exports=b}),null);
__d("getImageSize",["DataViewPolyfill"],(function(a,b,c,d,e,f){__p&&__p();var g=a.DataView||b("DataViewPolyfill");function h(a){return{width:a.getUint16(6,!0),height:a.getUint16(8,!0)}}function i(a){return{width:a.getUint32(16,!1),height:a.getUint32(20,!1)}}function j(a){var b=a.byteLength,c=2;while(c<b){var d=a.getUint16(c,!1);c+=2;if(d==65472||d==65474)return{width:a.getUint16(c+5,!1),height:a.getUint16(c+3,!1)};else c+=a.getUint16(c,!1)}return null}function c(a){a=new g(a);if(a.getUint8(0)==255&&a.getUint8(1)==216)return j(a);if(a.getUint8(0)==71&&a.getUint8(1)==73&&a.getUint8(2)==70)return h(a);return a.getUint8(0)==137&&a.getUint8(1)==80&&a.getUint8(2)==78&&a.getUint8(3)==71?i(a):null}e.exports=c;c.gif=h;c.png=i;c.jpeg=j}),null);
__d("ChatAutoSendPhotoUploader",["csx","fbt","invariant","ArbiterMixin","AsyncRequest","AsyncUploadRequest","DOM","Event","FileForm","FileFormResetOnSubmit","FileInput","FormSubmitOnChange","JpegResizer","MercuryAttachmentType","MercuryConstants","PhotosMimeType","PhotosUploadID","Run","SubscriptionsHandler","URI","getImageSize","getObjectValues","isEmpty","mixin"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();function j(){return"upload_"+b("PhotosUploadID").getNewID()}function k(a){return Array.prototype.reduce.call(a,function(a,b){var c=j();a[c]=b;return a},{})}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(c,d,e,f){__p&&__p();var g;g=a.call(this)||this;g.$ChatAutoSendPhotoUploader1=e;g.$ChatAutoSendPhotoUploader2=d;g.$ChatAutoSendPhotoUploader3=f;g.$ChatAutoSendPhotoUploader4=new(b("SubscriptionsHandler"))();g.$ChatAutoSendPhotoUploader5={};g.$ChatAutoSendPhotoUploader6={};g.$ChatAutoSendPhotoUploader7=!1;g.$ChatAutoSendPhotoUploader8=c.getAttribute("action");g.$ChatAutoSendPhotoUploader9=new(b("FileForm"))(c,[b("FormSubmitOnChange"),b("FileFormResetOnSubmit")]);g.$ChatAutoSendPhotoUploader9.setAllowCrossOrigin(!0);g.$ChatAutoSendPhotoUploader9.setUploadInParallel(!0);f&&g.$ChatAutoSendPhotoUploader9.setCustomHttpHeader("X-MSGR-Region",f);e=b("DOM").find(c,"._4q60");f=b("DOM").find(e,"._4q61");g.$ChatAutoSendPhotoUploader10=new(b("FileInput"))(e,f,d);g.$ChatAutoSendPhotoUploader4.addSubscriptions(b("Run").onBeforeUnload(g.onBeforeUnload.bind(babelHelpers.assertThisInitialized(g))),g.$ChatAutoSendPhotoUploader9.subscribe("success",g.$ChatAutoSendPhotoUploader11.bind(babelHelpers.assertThisInitialized(g))),g.$ChatAutoSendPhotoUploader9.subscribe("failure",g.$ChatAutoSendPhotoUploader12.bind(babelHelpers.assertThisInitialized(g))),g.$ChatAutoSendPhotoUploader9.subscribe("progress",g.$ChatAutoSendPhotoUploader13.bind(babelHelpers.assertThisInitialized(g))),b("Event").listen(f,"click",function(){g.$ChatAutoSendPhotoUploader14===void 0&&g.$ChatAutoSendPhotoUploader15(),g.$ChatAutoSendPhotoUploader14&&b("JpegResizer").prepareResource(),g.inform("open")}));return g}var d=c.prototype;d.$ChatAutoSendPhotoUploader15=function(){this.$ChatAutoSendPhotoUploader14=b("JpegResizer").isSupported(),this.$ChatAutoSendPhotoUploader14&&this.$ChatAutoSendPhotoUploader9.setPreprocessHandler(this.$ChatAutoSendPhotoUploader16.bind(this))};d.onBeforeUnload=function(){if(this.isUploading()&&!this.$ChatAutoSendPhotoUploader7)return h._("You haven't sent your message yet. Do you want to leave without sending?")};d.isUploading=function(){return!b("isEmpty")(this.$ChatAutoSendPhotoUploader5)};d.destroy=function(){this.$ChatAutoSendPhotoUploader4.release(),this.$ChatAutoSendPhotoUploader9.destroy(),this.$ChatAutoSendPhotoUploader5={},this.$ChatAutoSendPhotoUploader6={}};d.$ChatAutoSendPhotoUploader17=function(a,b){a=this.$ChatAutoSendPhotoUploader18(a);b&&(a.preview_width=b.width,a.preview_height=b.height);return a};d.$ChatAutoSendPhotoUploader18=function(a){a={upload_id:a,on_progress:function(a){this.$ChatAutoSendPhotoUploader4.addSubscriptions(this.subscribe("progress",a))}.bind(this),on_resizing_progress:function(a){this.$ChatAutoSendPhotoUploader4.addSubscriptions(this.subscribe("resize_progress",a))}.bind(this),on_success:function(a){this.$ChatAutoSendPhotoUploader4.addSubscriptions(this.subscribe("success",a))}.bind(this),upload_canceled:this.$ChatAutoSendPhotoUploader19.bind(this),attach_type:b("MercuryAttachmentType").PHOTO,preview_uploading:!0};return a};d.$ChatAutoSendPhotoUploader16=function(a,c){var d=a.getFile();if(!b("PhotosMimeType").isJpeg(d.type)){c(a);return}b("JpegResizer").getSingleton().resizeBlob(d,function(b,d,e,f,g){d&&a.setFile(d),c(a)},this.$ChatAutoSendPhotoUploader20.bind(this,a))};d.$ChatAutoSendPhotoUploader21=function(a){__p&&__p();if(!a)return!1;var c=0;for(var d=0;d<a.length;d++){var e=a[d];c+=e.size;if(c>b("MercuryConstants").AttachmentMaxSize){this.inform("file-upload-error",{error:"size-exceeded"});return!1}if(e.type==="application/x-msdownload"||e.type==="application/x-msdownload-x64"){this.inform("file-upload-error",{error:"wrong-type"});return!1}}return!0};d.$ChatAutoSendPhotoUploader22=function(a,c,d){__p&&__p();var e=this;d===void 0&&(d={});if(FileReader!==void 0&&FileReader.prototype.readAsArrayBuffer&&c&&c.length===1){this.$ChatAutoSendPhotoUploader5[a]=a;d[a]=c[0];var f=new FileReader();f.onload=function(){this.inform("submit",{upload_id:a,preview_attachments:[this.$ChatAutoSendPhotoUploader17(a,b("getImageSize")(f.result))]})}.bind(this);f.onerror=function(){this.inform("submit",{upload_id:a,preview_attachments:[this.$ChatAutoSendPhotoUploader18(a)]})}.bind(this);if(c[0].size)f.readAsArrayBuffer(c[0]);else{var g=babelHelpers["extends"]({},this.$ChatAutoSendPhotoUploader17(a,c[0].source),{preview_url:c[0].preview_url});this.inform("submit",{upload_id:a,preview_attachments:[g]})}}else{var h=[];if(!c)this.$ChatAutoSendPhotoUploader5[a]=a,this.$ChatAutoSendPhotoUploader1.value=a,h.push(this.$ChatAutoSendPhotoUploader18(a));else{g=Object.keys(d);if(g.length>0)g.forEach(function(b){e.$ChatAutoSendPhotoUploader5[b]=a,h.push(e.$ChatAutoSendPhotoUploader18(b))});else for(var g=0;g<c.length;++g){var i=j();d[i]=c[g];this.$ChatAutoSendPhotoUploader5[i]=a;h.push(this.$ChatAutoSendPhotoUploader18(i))}}this.inform("submit",{upload_id:a,preview_attachments:h})}Object.keys(d).length>0&&this.$ChatAutoSendPhotoUploader9.setFiles(d)};d.$ChatAutoSendPhotoUploader11=function(a,b){__p&&__p();a=this.$ChatAutoSendPhotoUploader23(b);if(this.$ChatAutoSendPhotoUploader5[a]){var c=this.$ChatAutoSendPhotoUploader5[a];delete this.$ChatAutoSendPhotoUploader5[a];b=b.response.getPayload();this.$ChatAutoSendPhotoUploader6[c]||(this.$ChatAutoSendPhotoUploader6[c]=[]);this.$ChatAutoSendPhotoUploader6[c].push({id:a,audio_id:b.metadata[0].audio_id,image_id:b.metadata[0].image_id,file_id:b.metadata[0].file_id,gif_id:b.metadata[0].gif_id,video_id:b.metadata[0].video_id});this.inform("success",{upload_id:a});this.$ChatAutoSendPhotoUploader24(c)||this.$ChatAutoSendPhotoUploader25(c);this.$ChatAutoSendPhotoUploader10.clear();this.$ChatAutoSendPhotoUploader2=this.$ChatAutoSendPhotoUploader10.getInput()}};d.$ChatAutoSendPhotoUploader25=function(a){this.$ChatAutoSendPhotoUploader24(a)&&i(0,6185),this.$ChatAutoSendPhotoUploader6[a].sort(function(a,b){return a.id<b.id?-1:1}),this.inform("all-uploads-completed",{upload_id:a,audio_ids:this.$ChatAutoSendPhotoUploader6[a].map(function(a){return a.audio_id}),image_ids:this.$ChatAutoSendPhotoUploader6[a].map(function(a){return a.image_id}),file_ids:this.$ChatAutoSendPhotoUploader6[a].map(function(a){return a.file_id}),gif_ids:this.$ChatAutoSendPhotoUploader6[a].map(function(a){return a.gif_id}),video_ids:this.$ChatAutoSendPhotoUploader6[a].map(function(a){return a.video_id})}),delete this.$ChatAutoSendPhotoUploader6[a]};d.$ChatAutoSendPhotoUploader13=function(a,b){this.inform("progress",{upload_id:b.upload.getName(),event:b.event})};d.$ChatAutoSendPhotoUploader20=function(a,b){this.inform("resize_progress",{upload_id:a.getName(),event:b})};d.$ChatAutoSendPhotoUploader24=function(a){return b("getObjectValues")(this.$ChatAutoSendPhotoUploader5).includes(a)};d.$ChatAutoSendPhotoUploader12=function(a,b){a=this.$ChatAutoSendPhotoUploader23(b);this.$ChatAutoSendPhotoUploader26(a,"last-upload-failed",babelHelpers["extends"]({errorDialogParams:{title:b.getResponse().getErrorSummary(),body:b.getResponse().getErrorDescription()}},b.additionalParams));this.$ChatAutoSendPhotoUploader10.clear();this.$ChatAutoSendPhotoUploader2=this.$ChatAutoSendPhotoUploader10.getInput();return!1};d.$ChatAutoSendPhotoUploader19=function(a){this.$ChatAutoSendPhotoUploader26(a,"last-upload-canceled")};d.$ChatAutoSendPhotoUploader26=function(a,b,c){if(!this.$ChatAutoSendPhotoUploader5[a])return;var d=this.$ChatAutoSendPhotoUploader5[a];delete this.$ChatAutoSendPhotoUploader5[a];this.$ChatAutoSendPhotoUploader24(d)||(this.$ChatAutoSendPhotoUploader6[d]?this.$ChatAutoSendPhotoUploader25(d):this.inform(b,babelHelpers["extends"]({upload_id:d},c)))};d.$ChatAutoSendPhotoUploader23=function(a){if(a.upload)return a.upload.getName();else return a.response&&a.response.getPayload().uploadID||a.getName()};d.uploadFiles=function(a){__p&&__p();if(!this.$ChatAutoSendPhotoUploader21(a))return;var c=j();if(a.length===1){var d;d=(d={},d[c]=a[0],d)}else d=k(a);var e=new(b("AsyncUploadRequest"))(this.$ChatAutoSendPhotoUploader8).setAllowCrossOrigin(!0).setAllowCrossPageTransition(this.$ChatAutoSendPhotoUploader7).setRelativeTo(this.$ChatAutoSendPhotoUploader9.getRoot()).setFiles(d);this.$ChatAutoSendPhotoUploader3&&e.setCustomHttpHeader("X-MSGR-Region",this.$ChatAutoSendPhotoUploader3);this.$ChatAutoSendPhotoUploader4.addSubscriptions(e.subscribe("success",function(a,b){this.$ChatAutoSendPhotoUploader11(a,{upload:b,response:b.getResponse()})}.bind(this)),e.subscribe("failure",this.$ChatAutoSendPhotoUploader12.bind(this)));e.send();this.$ChatAutoSendPhotoUploader22(c,a,d)};d.uploadURL=function(a){var c=this,d=j(),e=a.errorDialogParams;delete a.errorDialogParams;var f=new(b("AsyncRequest"))().setURI(new(b("URI"))(this.$ChatAutoSendPhotoUploader8).getPath()).setAllowCrossPageTransition(this.$ChatAutoSendPhotoUploader7).setData(babelHelpers["extends"]({},a,{attach_id:d})).setErrorHandler(function(a){c.$ChatAutoSendPhotoUploader12(null,{additionalParams:{errorDialogParams:e},response:{getPayload:function(){return{uploadID:d}}}})}).setHandler(function(a){c.$ChatAutoSendPhotoUploader11(null,{response:a})});f.send();this.$ChatAutoSendPhotoUploader22(d,[a])};d.setAllowCrossPage=function(a){this.$ChatAutoSendPhotoUploader7=a,this.$ChatAutoSendPhotoUploader9.setAllowCrossPageTransition(a)};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);