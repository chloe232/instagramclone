if (self.CavalryLogger) { CavalryLogger.start_js(["gBdI5"]); }

__d("XUIDialogCancelButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{action:"cancel",label:g._("Cancel")}))};return c}(b("React").Component);e.exports=a}),null);
__d("LayerAutoFocusReact",["focusWithinLayer"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(a){this._layer=a,this._subscription=null}var c=a.prototype;c.enable=function(){this._layer.containsReactComponent&&(this._subscription=this._layer.subscribe("reactshow",this._focus.bind(this)))};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};c._focus=function(){var a=this._layer.getRoot();a&&b("focusWithinLayer")(a)};return a}();e.exports=a}),null);
__d("LayerDestroyOnHide",[],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a){this._layer=a}var b=a.prototype;b.enable=function(){var a=this._layer.destroy.bind(this._layer);this._subscription=this._layer.subscribe("hide",function(){setTimeout(a,0)})};b.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)};return a}();Object.assign(a.prototype,{_subscription:null});e.exports=a}),null);
__d("SimpleXUIDialog",["cx","DialogX","LayerAutoFocusReact","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","React","XUIDialogBody.react","XUIDialogButton.react","XUIDialogCancelButton.react","XUIDialogFooter.react","XUIDialogOkayButton.react","XUIDialogTitle.react","joinClasses","uniqueID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=445;a={show:function(a,c,d,e){var f=b("React").createElement(b("XUIDialogOkayButton.react"),{action:"cancel",use:"confirm"});return this.showEx(a,c,f,d,e)},showConfirm:function(a,c,d,e){var f=!1,g=b("React").createElement(b("XUIDialogOkayButton.react"),{action:"cancel",className:e&&e.autofocusConfirm?"autofocus":"",use:"confirm",onClick:function(){f=!0}});e&&e.confirmBtnTxt&&(g=b("React").createElement(b("XUIDialogButton.react"),{className:b("joinClasses")(e&&e.autofocusConfirm?"autofocus":"","_2z1w"),action:"cancel",use:"confirm",label:e.confirmBtnTxt,onClick:function(){f=!0}}));g=b("React").createElement("div",null,b("React").createElement(b("XUIDialogCancelButton.react"),{onClick:function(){f=!1}}),g);function h(){d&&d(f)}return this.showEx(a,c,g,h,e)},showEx:function(a,c,d,e,f){__p&&__p();f=f||{};var g=[b("LayerDestroyOnHide"),b("LayerFadeOnShow"),b("LayerFadeOnHide"),b("LayerHideOnEscape"),b("LayerRefocusOnHide")];f.hideOnBlur!==!1&&g.push(b("LayerHideOnBlur"));f.useReactFocusBehavior&&g.push(b("LayerAutoFocusReact"));g={width:f.width||h,xui:!0,addedBehaviors:g,causalElement:f.causalElement};if(c){var i=b("uniqueID")();g.titleID=i;c=b("React").createElement(b("XUIDialogTitle.react"),{showCloseButton:f.showCloseButton!==!1,id:i},c)}d&&(d=b("React").createElement(b("XUIDialogFooter.react"),{"data-testid":"simple_xui_dialog_footer",leftContent:f.leftContent},d));i=b("React").createElement("div",null,c,b("React").createElement(b("XUIDialogBody.react"),null,a),d);f=new(b("DialogX"))(g,i);e&&f.subscribe("hide",e);f.show();return f}};e.exports=a}),null);