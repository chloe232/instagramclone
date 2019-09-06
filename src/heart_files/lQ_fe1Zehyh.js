if (self.CavalryLogger) { CavalryLogger.start_js(["dC\/DM"]); }

__d("PhotoResizeMath",[],(function(a,b,c,d,e,f){a={getScaledPhotoDimensions:function(a,b,c,d,e){var f=a/b,g=c/d;if(c&&d&&e==="stretch")return{width:c,height:d};if(!c&&d||e==="contain"!==f>=g)return{width:d*f,height:d};return c?{width:c,height:c/f}:{width:a,height:b}}};e.exports=a}),null);
__d("PixelzFocus",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={search:function(a,b){__p&&__p();var c=0,d=a.length-1;while(c<=d){var e=c+Math.floor((d-c)/2),f=a[e];if(f>b)d=e-1;else if(f<b)c=e+1;else return e}return Math.min(c,d)},forceSpecificPoint:function(a,b,c){var d=1e-9;d=g.search(a,b-c-d)+1;b=g.search(a,b+c);return a.slice(d,b+1)},findBiggestSets:function(a,b){var c=[],d=-1;for(var e=0;e<a.length;++e){var f=a[e],h=e;f=g.search(a,f+b);var i=f-h;i>d&&(c=[]);i>=d&&(d=i,c.push({low:h,high:f}))}return c},getBestSet:function(a,b,c){var d=-1,e=null;for(var f=0;f<b.length;++f){var g=b[f],h=a[g.low],i=a[g.high],j=h+(i-h)/2;h=Math.min(h-(j-c),j+c-i);h>d&&(d=h,e=g)}return e},getFocusFromSet:function(a,b){var c=a[b.low];a=a[b.high];return c+(a-c)/2},clampFocus:function(a,b){var c=b/2;b=1-b/2;if(a<c)return c;return a>b?b:a},convertFromCenterToCSS:function(a,b){return Math.abs(1-b)<1e-5?0:(a-b/2)/(1-b)},convertFromCSSToCenter:function(a,b){return a*(1-b)+b/2},getVisible:function(a,b){return a<b?a/b:b/a},getHidden:function(a,b){return 1-g.getVisible(a,b)},focusHorizontally:function(a,b){return a<b},convertVectorFromCenterToCSS:function(a,b,c){var d=g.focusHorizontally(b,c),e;d?e=a.x/100:e=a.x/100;a=g.convertFromCenterToCSS(e,g.getVisible(b,c));if(d)return{x:a,y:0};else return{x:0,y:a}},getCropRect:function(a,b,c){var d=g.focusHorizontally(b,c);b=g.getVisible(b,c);if(d){c=(1-b)*a.x;return{left:c,top:0,width:b,height:1}}else{d=(1-b)*a.y;return{left:0,top:d,width:1,height:b}}}};e.exports=g}),null);
__d("loadImage",["Promise"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a,b){var c=new Image();c.onload=function(){b(c.width,c.height,c)};c.src=a}a.loadImagePromise=function(a){return new(b("Promise"))(function(b,c){var d=new Image();d.onerror=c;d.onload=function(){return b(d)};d.src=a})};e.exports=a}),null);
__d("Pixelz.react",["cx","PhotoResizeMath","PixelzFocus","React","joinClasses","loadImage"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"Pixelz",propTypes:{width:a.number,height:a.number,resizeMode:a.oneOf(["contain","cover","stretch"]),alt:a.string,letterbox:a.bool,borderRadius:a.number,insetBorderColor:a.string,animated:a.bool,upscale:a.bool,cropRect:function(a,b,c){a=a[b];b="Invalid prop `"+b+"` supplied to `"+c+"`, expected a rectangle with values normalized between 0 and 1.";if(a.left<0||a.top<0||a.width<0||a.height<0||a.left+a.width>1||a.top+a.height>1)return new Error(b)},focus:function(a,b,c){__p&&__p();a=a[b];b="Invalid prop `"+b+"` supplied to `"+c+"`, expected either a {x, y, type} vector where type is `css` or `center` or an array of {x, y} vectors. All the vectors have with values normalized between 0 and 1.";if(Array.isArray(a)){for(var c=0;c<a.length;++c)if(!(a[c].x>=0&&a[c].x<=1)||!(a[c].y>=0&&a[c].y<=1))return new Error(b)}else{a.type||(a.type="css");if(!(a.x>=0&&a.x<=1)||!(a.y>=0&&a.y<=1)||!["center","css"].includes(a.type))return new Error(b)}}},getDefaultProps:function(){return{resizeMode:"cover",alt:"",letterbox:!0,upscale:!0,cropRect:{width:1,height:1,top:0,left:0},focus:{x:.5,y:.5,type:"css"}}},getInitialState:function(){return{srcDimensions:{}}},getSrcDimensions:function(){var a=this.props.src,c=this.state.srcDimensions[a];if(c)return c;b("loadImage")(a,function(b,c){var d={};d[a]={width:b,height:c};this.isMounted()&&this.setState({srcDimensions:d})}.bind(this));return null},getCropSrcDimensions:function(){var a=this.getSrcDimensions();return{width:a.width*this.props.cropRect.width,height:a.height*this.props.cropRect.height}},getUpscaleCropDimensions:function(){var a=this.getCropSrcDimensions();return b("PhotoResizeMath").getScaledPhotoDimensions(a.width,a.height,this.props.width,this.props.height,this.props.resizeMode)},getCropDimensions:function(){var a=this.getUpscaleCropDimensions(),b=this.getCropSrcDimensions();return!this.props.upscale?{width:Math.min(a.width,b.width),height:Math.min(a.height,b.height)}:a},getCropAspectRatio:function(){var a=this.getCropDimensions();return a.width/a.height},getContainerDimensions:function(){return this.props.letterbox&&this.props.width&&this.props.height?{width:this.props.width,height:this.props.height}:this.getCropDimensions()},getContainerAspectRatio:function(){var a=this.getContainerDimensions();return a.width/a.height},getContainerPosition:function(){return{left:0,top:0}},getFocus:function(){__p&&__p();var a=this.props.focus;if(!Array.isArray(a)&&a.type==="css")return{x:a.x,y:a.y};var c=this.getContainerAspectRatio(),d=this.getCropAspectRatio(),e=b("PixelzFocus").getVisible(c,d),f=b("PixelzFocus").focusHorizontally(c,d);if(!Array.isArray(a))c=b("PixelzFocus").convertFromCenterToCSS(f?a.x:a.y,e);else{d=a.map(function(a){return f?a.x:a.y});d.sort();a=b("PixelzFocus").findBiggestSets(d,e);a=b("PixelzFocus").getBestSet(d,a,e);c=b("PixelzFocus").getFocusFromSet(d,a)}return{x:f?c:.5,y:f?.5:c}},getCropPosition:function(){var a=this.getCropDimensions(),b=this.getContainerDimensions(),c=this.getFocus();return{left:c.x*(b.width-a.width),top:c.y*(b.height-a.height)}},getScaleDimensions:function(){var a=this.getCropDimensions();return{width:a.width/this.props.cropRect.width,height:a.height/this.props.cropRect.height}},getScalePosition:function(){var a=this.getScaleDimensions();return{left:-a.width*this.props.cropRect.left,top:-a.height*this.props.cropRect.top}},getClipCropRectangle:function(){var a=this.getContainerDimensions(),b=this.getCropDimensions(),c=this.getContainerPosition(),d=this.getCropPosition(),e=Math.max(c.left,d.left),f=Math.max(c.top,d.top),g=Math.min(c.top+a.height,d.top+b.height);c=Math.min(c.left+a.width,d.left+b.width);return{left:e,top:f,width:c-e,height:g-f}},getClipCropPosition:function(){var a=this.getClipCropRectangle();return{left:a.left,top:a.top}},getClipCropDimensions:function(){var a=this.getClipCropRectangle();return{width:a.width,height:a.height}},getClipScalePosition:function(){var a=this.getScalePosition(),b=this.getClipCropPosition(),c=this.getCropPosition();return{left:a.left+(c.left-b.left),top:a.top+(c.top-b.top)}},getClipScaleDimensions:function(){return this.getScaleDimensions()},areDimensionsEqual:function(a,b){return a.width===b.width&&a.height===b.height},shouldAddAllNodesAndStyles:function(){return this.props.animated},hasCrop:function(){if(this.shouldAddAllNodesAndStyles())return!0;var a=this.getContainerDimensions(),b=this.getClipCropDimensions(),c=this.getClipScaleDimensions();return this.areDimensionsEqual(a,b)||this.areDimensionsEqual(b,c)?!1:!0},hasContainer:function(){if(this.shouldAddAllNodesAndStyles()||this.hasInsetBorder())return!0;var a=this.getContainerDimensions(),b=this.getClipScaleDimensions();return this.areDimensionsEqual(a,b)?!1:!0},hasInsetBorder:function(){return this.shouldAddAllNodesAndStyles()||this.props.insetBorderColor},applyPositionStyle:function(a,b){(this.shouldAddAllNodesAndStyles()||b.left)&&(a.left=Math.round(b.left)),(this.shouldAddAllNodesAndStyles()||b.top)&&(a.top=Math.round(b.top))},applyDimensionsStyle:function(a,b){a.width=Math.round(b.width),a.height=Math.round(b.height)},applyBorderRadiusStyle:function(a){(this.shouldAddAllNodesAndStyles()||this.props.borderRadius)&&(a.borderRadius=this.props.borderRadius||0)},getScaleStyle:function(){var a={},b=this.getClipCropDimensions(),c=this.getClipScaleDimensions();this.shouldAddAllNodesAndStyles()||!this.areDimensionsEqual(b,c)?this.applyPositionStyle(a,this.getClipScalePosition()):this.applyPositionStyle(a,this.getClipCropPosition());this.applyDimensionsStyle(a,this.getClipScaleDimensions());this.applyBorderRadiusStyle(a);return a},getCropStyle:function(){var a={};this.applyPositionStyle(a,this.getClipCropPosition());this.applyDimensionsStyle(a,this.getClipCropDimensions());this.applyBorderRadiusStyle(a);return a},getInsetBorderStyle:function(){var a={borderColor:this.props.insetBorderColor||"transparent"};this.applyPositionStyle(a,this.getClipCropPosition());this.applyDimensionsStyle(a,this.getClipCropDimensions());this.applyBorderRadiusStyle(a);return a},getContainerStyle:function(){var a={};this.applyDimensionsStyle(a,this.getContainerDimensions());this.applyBorderRadiusStyle(a);return a},getScale:function(){var a=this.getScaleStyle(),c=a.width,d=a.height;a=babelHelpers["extends"]({},a);delete a.width;delete a.height;return b("React").createElement("img",babelHelpers["extends"]({},this.props,{alt:this.props.alt,className:b("joinClasses")(this.props.className,"_56wb"+(this.shouldAddAllNodesAndStyles()?" _56t5":"")),src:this.props.src,style:babelHelpers["extends"]({},this.props.style||{},a),width:c,height:d}))},getCrop:function(){var a=this.getScale();return!this.hasCrop()?a:b("React").createElement("div",{className:"_56ma"+(this.shouldAddAllNodesAndStyles()?" _56t5":""),style:this.getCropStyle()},a)},getInsetBorder:function(){return!this.hasInsetBorder()?null:b("React").createElement("div",{className:"_56lv"+(this.shouldAddAllNodesAndStyles()?" _56t5":""),style:this.getInsetBorderStyle()})},getContainer:function(){var a=this.getCrop();if(!this.hasContainer())return a;var c=this.getInsetBorder();return b("React").createElement("div",{className:"_56jj"+(this.shouldAddAllNodesAndStyles()?" _56t5":""),"data-skipchecker":null,style:this.getContainerStyle()},a,c)},render:function(){var a=this.getSrcDimensions();return!a?b("React").createElement("span",{"data-skipchecker":null}):this.getContainer()}});e.exports=c}),null);
__d("MessengerDialogBody.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:b("joinClasses")("_4eb-",this.props.className)},this.props.children)};return c}(b("React").Component);e.exports=a}),null);
__d("MessengerDialogCancelButton.react",["fbt","MessengerDialogButton.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("MessengerDialogButton.react"),babelHelpers["extends"]({action:"cancel",label:g._("Cancel"),type:"secondary"},this.props))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("MessengerDialogFooter.react",["cx","LeftRight.react","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement("div",{className:b("joinClasses")("_4eb_",this.props.className)},b("React").createElement(b("LeftRight.react"),null,b("React").createElement("div",{className:"_2_d1"},this.props.leftContent),b("React").createElement("div",null,this.props.children)))};return c}(b("React").Component);c.propTypes={leftContent:a.object};e.exports=c}),null);
__d("MessengerRadioButtonReact.bs",["cx","React","bs_js_primitive","XUIRadioInput.react"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var c={checked:a.checked,className:"__rm",disabled:a.disabled,name:a.name,onChange:a.onChange,value:a.value};a=b("bs_js_primitive").undefined_to_opt(a.id);a!==void 0&&(c.id=b("bs_js_primitive").valFromOption(a));return b("React").createElement(b("XUIRadioInput.react"),c)}f.make=a}),null);
__d("MessengerRadioList.react",["invariant","InputLabel_DEPRECATED.react","InputLabelLabel_DEPRECATED.react","MessengerRadioButtonReact.bs","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){a.target instanceof HTMLInputElement||g(0,761),c.props.onSelect&&c.props.onSelect(c.props.value)},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return b("React").createElement("li",{className:this.props.className},b("React").createElement(b("InputLabel_DEPRECATED.react"),{display:"inline"},b("React").createElement(b("MessengerRadioButtonReact.bs").make,{checked:this.props.selectedValue===this.props.value,disabled:!!this.props.disabled,name:this.props.name,onChange:this.$1,value:this.props.value}),b("React").createElement(b("InputLabelLabel_DEPRECATED.react"),null,this.props.children)))};return c}(b("React").Component);c.propTypes={disabled:a.bool,name:a.string,onSelect:a.func,selectedValue:a.any,value:a.any};d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=b("React").Children.map(this.props.children,function(a){return b("React").cloneElement(a,{name:this.props.name,onSelect:this.props.onValueChange,selectedValue:this.props.selectedValue})},this);return b("React").createElement("ul",babelHelpers["extends"]({},this.props,{name:null}),a)};return c}(b("React").Component);d.propTypes={name:a.string,onValueChange:a.func,selectedValue:a.any};d.Item=c;e.exports=d}),null);
__d("bs_belt_List",["bs_curry","bs_belt_Array","bs_js_primitive","bs_belt_SortArray"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){if(a)return b("bs_js_primitive").some(a[0])}function c(a){if(a)return a[0];else throw new Error("headExn")}function d(a){if(a)return a[1]}function e(a){if(a)return a[1];else throw new Error("tailExn")}function g(a,b){return[b,a]}function h(a,c){__p&&__p();if(c<0)return void 0;else{a=a;c=c;while(!0){var d=c,e=a;if(e)if(d===0)return b("bs_js_primitive").some(e[0]);else{c=d-1|0;a=e[1];continue}else return void 0}}}function i(a,b){__p&&__p();if(b<0)throw new Error("getExn");else{a=a;b=b;while(!0){var c=b,d=a;if(d)if(c===0)return d[0];else{b=c-1|0;a=d[1];continue}else throw new Error("getExn")}}}function j(a,b,c,d){__p&&__p();while(!0){var e=d,f=c,g=b;if(g){var h=g[1];g=g[0];var i=[g,0];if(a(g)){f[1]=i;c=i;b=h;continue}else{e[1]=i;d=i;b=h;continue}}else return 0}}function k(a,b,c){__p&&__p();while(!0){var d=c,e=b,f=a;if(f){var g=f[0],h=[g[0],0];g=[g[1],0];e[1]=h;d[1]=g;c=g;b=h;a=f[1];continue}else return 0}}function l(a,b){__p&&__p();while(!0){var c=b,d=a;if(d){var e=[d[0],0];c[1]=e;b=e;a=d[1];continue}else return c}}function m(a,b,c){__p&&__p();while(!0){var d=c,e=b;if(e){var f=e[1];e=e[0];if(a(e)){e=[e,0];d[1]=e;c=e;b=f;continue}else{b=f;continue}}else return 0}}function n(a,b,c,d){__p&&__p();while(!0){var e=d,f=c,g=b;if(g){var h=g[1];g=g[0];if(a(g,e)){g=[g,0];f[1]=g;d=e+1|0;c=g;b=h;continue}else{d=e+1|0;b=h;continue}}else return 0}}function o(a,c,d){__p&&__p();while(!0){var e=d,f=c;if(f){var g=f[1];f=a(f[0]);if(f!==void 0){f=[b("bs_js_primitive").valFromOption(f),0];e[1]=f;d=f;c=g;continue}else{c=g;continue}}else return 0}}function aa(a,b,c,d){__p&&__p();while(!0){var e=c,f=a;if(f){var g=f[1];f=f[0];if(d(f[0],b)){e[1]=g;return!0}else{f=[f,0];e[1]=f;c=f;a=g;continue}}else return!1}}function ba(b,c,d,e,a){__p&&__p();while(!0){var f=e,g=b;if(g){var h=g[1];g=g[0];if(a(g[0],c)){f[1]=[[c,d],h];return!0}else{g=[g,0];f[1]=g;e=g;b=h;continue}}else return!1}}function ca(a,b,c){__p&&__p();while(!0){var d=b,e=a;if(e){var f=[c(e[0]),0];d[1]=f;b=f;a=e[1];continue}else return 0}}function da(a,b,c){__p&&__p();while(!0){var d=c,e=b,f=a;if(f&&e){var g=[[f[0],e[0]],0];d[1]=g;c=g;b=e[1];a=f[1];continue}else return 0}}function ea(a,b,c,d){__p&&__p();while(!0){var e=d,f=c,g=b;if(g&&f){var h=[a(g[0],f[0]),0];e[1]=h;d=h;c=f[1];b=g[1];continue}else return 0}}function fa(a,b,c,d){__p&&__p();while(!0){var e=d,f=c,g=b;if(f){var h=[a(g,f[0]),0];e[1]=h;d=h;c=f[1];b=g+1|0;continue}else return 0}}function ga(a,b,c){__p&&__p();while(!0){var d=c,e=b,f=a;if(f===0)return!0;else if(e){var g=[e[0],0];d[1]=g;c=g;b=e[1];a=f-1|0;continue}else return!1}}function ha(a,b,c){__p&&__p();while(!0){var d=c,e=b,f=a;if(f===0)return e;else if(e){var g=[e[0],0];d[1]=g;c=g;b=e[1];a=f-1|0;continue}else return void 0}}function ia(a,b){__p&&__p();if(b<0)return void 0;else if(b===0)return 0;else if(a){var c=[a[0],0];b=ga(b-1|0,a[1],c);if(b)return c;else return void 0}else return void 0}function ja(a,b){__p&&__p();if(b<0)return void 0;else{a=a;b=b;while(!0){var c=b,d=a;if(c===0)return d;else if(d){b=c-1|0;a=d[1];continue}else return void 0}}}function ka(a,b){__p&&__p();if(b<0)return void 0;else if(b===0)return[0,a];else if(a){var c=[a[0],0];b=ha(b-1|0,a[1],c);if(b!==void 0)return[c,b];else return void 0}else return void 0}function p(a,b){if(a){var c=[a[0],0];l(a[1],c)[1]=b;return c}else return b}function q(a,b){if(a){var c=[b(a[0]),0];ca(a[1],c,b);return c}else return 0}function la(a,c){return q(a,b("bs_curry").__1(c))}function r(a,b,c){if(a&&b){var d=[c(a[0],b[0]),0];ea(c,a[1],b[1],d);return d}else return 0}function ma(a,c,d){return r(a,c,b("bs_curry").__2(d))}function s(a,b){if(a){var c=[b(0,a[0]),0];fa(b,1,a[1],c);return c}else return 0}function na(a,c){return s(a,b("bs_curry").__2(c))}function t(a,b){__p&&__p();if(a<=0)return 0;else{var c=[b(0),0],d=c,e=1;while(e<a){var f=[b(e),0];d[1]=f;d=f;e=e+1|0}return c}}function oa(a,c){return t(a,b("bs_curry").__1(c))}function pa(a,b){__p&&__p();if(a<=0)return 0;else{var c=[b,0],d=c,e=1;while(e<a){var f=[b,0];d[1]=f;d=f;e=e+1|0}return c}}function u(a){__p&&__p();a=a;var b=0;while(!0){var c=b,d=a;if(d){b=c+1|0;a=d[1];continue}else return c}}function qa(a,b,c){__p&&__p();while(!0){var d=c,e=b;if(d){a[e]=d[0];c=d[1];b=e+1|0;continue}else return 0}}function v(a){__p&&__p();var b=a;a=a.length-1|0;var c=0;while(!0){var d=c,e=a;if(e<0)return d;else{c=[b[e],d];a=e-1|0;continue}}}function w(a){var b=u(a);b=new Array(b);qa(b,0,a);return b}function ra(a){a=w(a);b("bs_belt_Array").shuffleInPlace(a);return v(a)}function x(a,b){while(!0){var c=b,d=a;if(d){b=[d[0],c];a=d[1];continue}else return c}}function sa(a){return x(a,0)}function ta(a,b){__p&&__p();while(!0){var c=b,d=a;if(c){b=c[1];a=l(c[0],d);continue}else{d[1]=0;return 0}}}function ua(a){__p&&__p();while(!0){var b=a;if(b){var c=b[0];if(c){var d=[c[0],0];ta(l(c[1],d),b[1]);return d}else{a=b[1];continue}}else return 0}}function va(a){__p&&__p();var b=a.length;if(b!==1)if(b!==0){b=a.length;var c=a[b-1|0];for(var b=b-2|0;b>=0;--b)c=p(a[b],c);return c}else return 0;else return a[0]}function y(a,b){__p&&__p();b=b;var c=0;a=a;while(!0){var d=a,e=c;if(d){a=d[1];c=[b(d[0]),e];continue}else return e}}function wa(a,c){return y(a,b("bs_curry").__1(c))}function z(a,b){while(!0){var c=a;if(c){b(c[0]);a=c[1];continue}else return 0}}function xa(a,c){return z(a,b("bs_curry").__1(c))}function A(a,b){__p&&__p();a=a;var c=0;b=b;while(!0){var d=c,e=a;if(e){b(d,e[0]);c=d+1|0;a=e[1];continue}else return 0}}function ya(a,c){return A(a,b("bs_curry").__2(c))}function B(a,b,c){while(!0){var d=b,e=a;if(e){b=c(d,e[0]);a=e[1];continue}else return d}}function za(a,c,d){return B(a,c,b("bs_curry").__2(d))}function C(a,b,c){if(a)return c(C(a[1],b,c),a[0]);else return b}function D(a,c,d){var e=u(a);if(e<1e3)return C(a,c,d);else return b("bs_belt_Array").reduceReverseU(w(a),c,d)}function Aa(a,c,d){return D(a,c,b("bs_curry").__2(d))}function E(a,b,c){__p&&__p();a=a;b=b;c=c;var d=0;while(!0){var e=d,f=b,g=a;if(g){d=e+1|0;b=c(f,g[0],e);a=g[1];continue}else return f}}function Ba(a,c,d){return E(a,c,b("bs_curry").__3(d))}function F(a,b,c){__p&&__p();a=a;b=b;var d=0;c=c;while(!0){var e=d,f=b,g=a;if(g&&f){d=[c(g[0],f[0]),e];b=f[1];a=g[1];continue}else return e}}function Ca(a,c,d){return F(a,c,b("bs_curry").__2(d))}function G(a,b,c){__p&&__p();while(!0){var d=b,e=a;if(e&&d){c(e[0],d[0]);b=d[1];a=e[1];continue}else return 0}}function Da(a,c,d){return G(a,c,b("bs_curry").__2(d))}function H(a,b,c,d){__p&&__p();while(!0){var e=c,f=b,g=a;if(g&&f){c=d(e,g[0],f[0]);b=f[1];a=g[1];continue}else return e}}function Ea(a,c,d,e){return H(a,c,d,b("bs_curry").__3(e))}function I(a,b,c,d){if(a&&b)return d(I(a[1],b[1],c,d),a[0],b[0]);else return c}function J(a,c,d,e){var f=u(a);if(f<1e3)return I(a,c,d,e);else return b("bs_belt_Array").reduceReverse2U(w(a),w(c),d,e)}function Fa(a,c,d,e){return J(a,c,d,b("bs_curry").__3(e))}function K(a,b){__p&&__p();while(!0){var c=a;if(c)if(b(c[0])){a=c[1];continue}else return!1;else return!0}}function Ga(a,c){return K(a,b("bs_curry").__1(c))}function L(a,b){__p&&__p();while(!0){var c=a;if(c)if(b(c[0]))return!0;else{a=c[1];continue}else return!1}}function Ha(a,c){return L(a,b("bs_curry").__1(c))}function M(a,b,c){__p&&__p();while(!0){var d=b,e=a;if(e&&d)if(c(e[0],d[0])){b=d[1];a=e[1];continue}else return!1;else return!0}}function Ia(a,c,d){return M(a,c,b("bs_curry").__2(d))}function Ja(a,b){__p&&__p();while(!0){var c=b,d=a;if(d)if(c){b=c[1];a=d[1];continue}else return 1;else if(c)return-1;else return 0}}function N(a,b,c){__p&&__p();while(!0){var d=b,e=a;if(e)if(d){var f=c(e[0],d[0]);if(f===0){b=d[1];a=e[1];continue}else return f}else return 1;else if(d)return-1;else return 0}}function Ka(a,c,d){return N(a,c,b("bs_curry").__2(d))}function O(a,b,c){__p&&__p();while(!0){var d=b,e=a;if(e)if(d&&c(e[0],d[0])){b=d[1];a=e[1];continue}else return!1;else if(d)return!1;else return!0}}function La(a,c,d){return O(a,c,b("bs_curry").__2(d))}function P(a,b,c){__p&&__p();while(!0){var d=b,e=a;if(e&&d)if(c(e[0],d[0]))return!0;else{b=d[1];a=e[1];continue}else return!1}}function Ma(a,c,d){return P(a,c,b("bs_curry").__2(d))}function Q(b,c,a){__p&&__p();while(!0){var d=b;if(d)if(a(d[0],c))return!0;else{b=d[1];continue}else return!1}}function Na(c,d,a){return Q(c,d,b("bs_curry").__2(a))}function R(c,d,a){__p&&__p();while(!0){var e=c;if(e){var f=e[0];if(a(f[0],d))return b("bs_js_primitive").some(f[1]);else{c=e[1];continue}}else return void 0}}function Oa(c,d,a){return R(c,d,b("bs_curry").__2(a))}function S(b,c,a){__p&&__p();while(!0){var d=b;if(d)if(a(d[0][0],c))return!0;else{b=d[1];continue}else return!1}}function Pa(c,d,a){return S(c,d,b("bs_curry").__2(a))}function T(b,c,a){__p&&__p();if(b){var d=b[1],e=b[0];if(a(e[0],c))return d;else{e=[e,0];d=aa(d,c,e,a);if(d)return e;else return b}}else return 0}function Qa(c,d,a){return T(c,d,b("bs_curry").__2(a))}function U(b,c,d,a){__p&&__p();if(b){var e=b[1],f=b[0];if(a(f[0],c))return[[c,d],e];else{f=[f,0];e=ba(e,c,d,f,a);if(e)return f;else return[[c,d],b]}}else return[[c,d],0]}function Ra(c,d,e,a){return U(c,d,e,b("bs_curry").__2(a))}function V(c,a){c=w(c);b("bs_belt_SortArray").stableSortInPlaceByU(c,a);return v(c)}function Sa(c,a){return V(c,b("bs_curry").__2(a))}function W(a,c){__p&&__p();while(!0){var d=a;if(d){var e=d[0];if(c(e))return b("bs_js_primitive").some(e);else{a=d[1];continue}}else return void 0}}function Ta(a,c){return W(a,b("bs_curry").__1(c))}function X(a,b){__p&&__p();while(!0){var c=a;if(c){var d=c[1];c=c[0];if(b(c)){c=[c,0];m(b,d,c);return c}else{a=d;continue}}else return 0}}function Ua(a,c){return X(a,b("bs_curry").__1(c))}function Y(a,b){__p&&__p();a=a;b=b;var c=0;while(!0){var d=c,e=a;if(e){var f=e[1];e=e[0];if(b(e,d)){e=[e,0];n(b,f,e,d+1|0);return e}else{c=d+1|0;a=f;continue}}else return 0}}function Va(a,c){return Y(a,b("bs_curry").__2(c))}function Z(a,c){__p&&__p();while(!0){var d=a;if(d){var e=d[1];d=c(d[0]);if(d!==void 0){d=[b("bs_js_primitive").valFromOption(d),0];o(c,e,d);return d}else{a=e;continue}}else return 0}}function Wa(a,c){return Z(a,b("bs_curry").__1(c))}function $(a,b){if(a){var c=a[0],d=[c,0],e=[c,0];c=b(c);j(b,a[1],d,e);if(c)return[d,e[1]];else return[d[1],e]}else return[0,0]}function Xa(a,c){return $(a,b("bs_curry").__1(c))}function Ya(a){if(a){var b=a[0],c=[b[0],0];b=[b[1],0];k(a[1],c,b);return[c,b]}else return[0,0]}function Za(a,b){if(a&&b){var c=[[a[0],b[0]],0];da(a[1],b[1],c);return c}else return 0}var $a=u;f.length=u;f.size=$a;f.head=a;f.headExn=c;f.tail=d;f.tailExn=e;f.add=g;f.get=h;f.getExn=i;f.make=pa;f.makeByU=t;f.makeBy=oa;f.shuffle=ra;f.drop=ja;f.take=ia;f.splitAt=ka;f.concat=p;f.concatMany=va;f.reverseConcat=x;f.flatten=ua;f.mapU=q;f.map=la;f.zip=Za;f.zipByU=r;f.zipBy=ma;f.mapWithIndexU=s;f.mapWithIndex=na;f.fromArray=v;f.toArray=w;f.reverse=sa;f.mapReverseU=y;f.mapReverse=wa;f.forEachU=z;f.forEach=xa;f.forEachWithIndexU=A;f.forEachWithIndex=ya;f.reduceU=B;f.reduce=za;f.reduceWithIndexU=E;f.reduceWithIndex=Ba;f.reduceReverseU=D;f.reduceReverse=Aa;f.mapReverse2U=F;f.mapReverse2=Ca;f.forEach2U=G;f.forEach2=Da;f.reduce2U=H;f.reduce2=Ea;f.reduceReverse2U=J;f.reduceReverse2=Fa;f.everyU=K;f.every=Ga;f.someU=L;f.some=Ha;f.every2U=M;f.every2=Ia;f.some2U=P;f.some2=Ma;f.cmpByLength=Ja;f.cmpU=N;f.cmp=Ka;f.eqU=O;f.eq=La;f.hasU=Q;f.has=Na;f.getByU=W;f.getBy=Ta;f.keepU=X;f.keep=Ua;f.keepWithIndexU=Y;f.keepWithIndex=Va;f.keepMapU=Z;f.keepMap=Wa;f.partitionU=$;f.partition=Xa;f.unzip=Ya;f.getAssocU=R;f.getAssoc=Oa;f.hasAssocU=S;f.hasAssoc=Pa;f.removeAssocU=T;f.removeAssoc=Qa;f.setAssocU=U;f.setAssoc=Ra;f.sortU=V;f.sort=Sa}),null);
__d("MessengerDialogs.bs",["bs_curry","bs_belt_List"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[0],h=[void 0];function i(){var a=h[0],c=g[0];if(a!==void 0){a=a;if(c)return b("bs_curry")._1(a,c);else return b("bs_curry")._1(a,void 0)}else return 0}function a(a){h[0]=a;return i(0)}function c(a){g[0]=[a,g[0]];return i(0)}function d(a,c){if(a!==void 0){var d=a;g[0]=b("bs_belt_List").keep(g[0],function(a){return a!==d})}else{c=g[0];g[0]=c?c[1]:0}return i(0)}function e(){g[0]=0;return i(0)}f.visibleDialogs=g;f.setDialogComponentState=h;f.updateComponent=i;f.addHandler=a;f.showDialog=c;f.removeDialog=d;f.removeAllDialogs=e}),null);
__d("MessengerGraphQLTypeaheadAdapter",["fbt","MercuryIDs","MercuryParticipantTypes","MercuryTypeaheadConstants","SearchableEntry","WorkForeignEntityType","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("gkx")("857049");function i(a){return b("MercuryIDs").isValid(a)?a:b("MercuryIDs").getParticipantIDFromUserID(a)}function j(a){var b=a.scim_company_user&&a.scim_company_user.company_title;a=a.is_viewer_coworker?null:a.work_info&&a.work_info.work_community&&a.work_info.work_community.name;if(a&&b)return a+" \u2022 "+b;else if(a)return a;else if(b)return b;return null}function k(a,b){var c=null;a.members&&a.members.edges&&a.members.edges.length>0?c=a.members.edges.map(function(a){return a.node.name}).join(", "):a.is_work_user?c=j(a):b&&a.is_viewer_friend===!1&&(c=b);return c}var l={convertWorkChatProfileToEntry:function(a,c){var d;if(!a||!a.id||!a.name)return null;var e=b("MercuryParticipantTypes").NON_FRIEND;d=a.is_viewer_coworker||((d=a.work_foreign_entity_info)!=null?d.type:d)===b("WorkForeignEntityType").NOT_FOREIGN;a.is_work_user&&d&&(e=b("MercuryParticipantTypes").FB4C);return new(b("SearchableEntry"))({uniqueID:a.id,title:a.name,type:e,subtitle:c,photo:a.profile_picture&&a.profile_picture.uri,auxiliaryData:{isWorkUser:a.is_work_user,workForeignEntityInfo:a.work_foreign_entity_info},order:-a.viewer_affinity})},convertProfileToEntry:function(a,c){var d;if(!a||!a.id||!a.name)return null;var e=b("MercuryParticipantTypes").NON_FRIEND;d=a.is_viewer_coworker||((d=a.work_foreign_entity_info)!=null?d.type:d)===b("WorkForeignEntityType").NOT_FOREIGN;a.is_work_user&&d?e=b("MercuryParticipantTypes").FB4C:(a.is_viewer_friend||a.messenger_contact.is_on_viewer_contact_list||d&&a.viewer_affinity>0)&&(e=b("MercuryParticipantTypes").FRIEND);d=k(a,c);return new(b("SearchableEntry"))({uniqueID:a.id,title:a.name,type:e,subtitle:d,photo:a.profile_picture&&a.profile_picture.uri,uri:a.url,auxiliaryData:{isMemorializedUser:a.is_memorialized,isMessengerUser:a.is_messenger_user,isWorkUser:a.is_work_user,isVerified:!h&&a.is_verified,isActiveAccount:a.work_info&&a.work_info.is_active_account,workForeignEntityInfo:a.work_foreign_entity_info,alias:a.username},order:-a.viewer_affinity})},convertPageToEntry:function(a,c){if(!a||!a.id||!a.name)return null;return a.instant_game_info?this.convertGameToEntry(a,c):new(b("SearchableEntry"))({uniqueID:a.id,title:a.name,type:c,photo:a.profile_picture&&a.profile_picture.uri,uri:a.url,auxiliaryData:{isMessengerUser:a.is_messenger_user,isWorkUser:a.is_work_user,canViewerMessage:a.can_viewer_message,isVerified:!h&&a.is_verified,canViewerAddToGroupChat:a.can_viewer_add_to_group_chat},order:0})},convertGameToEntry:function(a,c){return!a||!a.id||!a.name||!a.instant_game_info?null:new(b("SearchableEntry"))({uniqueID:a.id,title:a.name,type:b("MercuryTypeaheadConstants").GAME_TYPE,photo:a.instant_game_info&&a.instant_game_info.icon_uri,uri:a.instant_game_info&&a.instant_game_info.game_uri,order:0})},convertMessageToEntry:function(a){__p&&__p();var c,d;c=a==null?void 0:(c=a.message_thread)==null?void 0:c.thread;d=a==null?void 0:(d=a.matched_message)==null?void 0:d.message;var e=a==null?void 0:a.thread_id,f=a==null?void 0:a.matched_message;a=Number(a==null?void 0:(a=a.message_thread)==null?void 0:a.approx_count);if(c==null||d==null||e==null||f==null||a==null)return null;var j="message:"+e,k=d.snippet,m=g._("{number of messages} matched messages",[g._param("number of messages",a)]);m=a>1?m:k;k=d.timestamp;typeof k==="number"&&a===1?k*=1e3:k=void 0;a=a==1?(d=f)!=null?(d=d.search_result_context)!=null?d.match_ranges:d:d:null;f={matchRanges:a,timestamp:k,thread_id:e,messageResultType:"1on1Conversation"};d="";a=null;if(c.image!==void 0){c.thread_name&&(d=c.thread_name);c.image&&(a=c.image.uri);if(c.all_participants&&c.all_participants.nodes&&c.all_participants.count){if(d==""){k=c.all_participants.count;var n=c.all_participants.nodes.map(function(a){return a.messaging_actor.name}).filter(Boolean);d=l.getParticipantsText(!0,n,k)}n=c.all_participants.nodes.map(function(a){a=i(a.messaging_actor.id);return{id:a}});f=babelHelpers["extends"]({},f,{messageResultType:"groupConversation",participantsToRender:n,thread:{thread_id:e,image_src:a,participants:n.map(function(a){return a.id})}})}}else if(c.all_participants&&c.all_participants.nodes[0]&&c.all_participants.nodes[0].messaging_actor){k=c.all_participants.nodes[0].messaging_actor;k.name&&(d=k.name);k.profile_picture&&(a=k.profile_picture.uri);typeof k.is_memorialized==="boolean"&&(f.isMemorializedUser=k.is_memorialized);typeof k.is_messenger_user==="boolean"&&(f.isMessengerUser=k.is_messenger_user);typeof k.is_work_user==="boolean"&&(f.isWorkUser=k.is_work_user);typeof k.is_verified==="boolean"&&(!h&&(k.__typename==="User"||k.__typename==="Page")?f.isVerified=k.is_verified:f.isVerified=!1);typeof k.username==="string"&&(f.alias=k.username);k.work_foreign_entity_info&&(f.workForeignEntityInfo=k.work_foreign_entity_info)}return new(b("SearchableEntry"))({uniqueID:j,title:d,subtitle:m,type:b("MercuryTypeaheadConstants").MESSAGE_TYPE,photo:a,uri:null,order:0,auxiliaryData:f})},convertGroupToEntry:function(a,c){__p&&__p();var d;if(!a||!a.thread_key||!a.is_group_thread)return null;var e=a.thread_key.thread_fbid;if(!e)return null;var f=a.image&&a.image.uri;d=a==null?void 0:(d=a.other_participants)==null?void 0:d.edges;if(d==null)return null;d=d.map(function(a){return a.node.messaging_actor.name});d=l.getParticipantsText(!1,d,a.other_participants.count);var g=a.name,h=null;!g?g=d:h=d;if(!g)return null;d={};d.thread={thread_id:e,other_user_fbid:null,image_src:f,participants:a.other_participants.edges.map(function(a){return i(a.node.messaging_actor.id)})};d.participantsToRender=a.other_participants.edges.map(function(a){return{id:i(a.node.messaging_actor.id),is_messenger_user:a.node.messaging_actor.is_messenger_user,is_coworker:a.node.messaging_actor.is_viewer_coworker}});return new(b("SearchableEntry"))({uniqueID:e,order:c,photo:f,title:g,subtitle:h,type:b("MercuryParticipantTypes").THREAD,auxiliaryData:d})},convertMSQGroupToEntry:function(a,c,d){__p&&__p();var e,f;if(!a||!a.thread_key)return null;e=a==null?void 0:(e=a.thread_key)==null?void 0:e.thread_fbid;if(!e)return null;var g=a.image&&a.image.uri;f=a==null?void 0:(f=a.all_participants)==null?void 0:f.edges;if(f==null)return null;f=f.filter(function(a){return a.node.id!==d});var h=f.map(function(a){return a.node.messaging_actor.name});h=l.getParticipantsText(!0,h,a.all_participants.count);a=a.thread_name;var j=null;!a?a=h:j=h;if(!a)return null;h={};h.thread={thread_id:e,other_user_fbid:null,image_src:g,participants:f.map(function(a){return i(a.node.messaging_actor.id)})};h.participantsToRender=f.map(function(a){return{id:i(a.node.messaging_actor.id),is_messenger_user:a.node.messaging_actor.is_messenger_user,is_coworker:a.node.messaging_actor.is_viewer_coworker}});return new(b("SearchableEntry"))({uniqueID:e,order:c,photo:g,title:a,subtitle:j,type:b("MercuryParticipantTypes").THREAD,auxiliaryData:h})},getValidatedMatchesRanges:function(a,b){__p&&__p();if(!Array.isArray(a))return[];a=[].concat(a).filter(function(a){var c=a.length;a=a.offset;if(typeof c!=="number"||typeof a!=="number")return;return c>0&&a>=0&&a+c<=b.length}).sort(function(a,b){return a.offset-b.offset});var c=[];a.forEach(function(a,b){if(b!=0){b=c[c.length-1];b=b.offset+b.length;if(a.offset<b)return}c.push(a)});return c},getParticipantsText:function(a,b,c,d){__p&&__p();d===void 0&&(d=3);if(a===null||c==null)return b.join(", ");var e=1;a||(c+=e);var f=b.length<=d;a=a&&b.length===c;if(f&&a)return b.slice(0,-1).join(", ");f=b.slice(0,d);a=c-e-f.length;return a<1?f.join(", "):g._("{name of the first n participants} and {number of other participants} more",[g._param("name of the first n participants",f.join(", ")),g._param("number of other participants",a)])}};e.exports=l}),null);
__d("MessengerTypeaheadUtils",["fbt","ix","MercuryTypeaheadConstants","MessengerEnvironment","ReactDOM","SearchableEntry","gkx","immutable","mapObject","qex"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("immutable").OrderedMap,j=500,k=100,l="__special_search_entry__",m=[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").MESSAGE_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE],n=[b("MercuryTypeaheadConstants").SEARCH_TYPE,b("MercuryTypeaheadConstants").FRIEND_TYPE,b("MercuryTypeaheadConstants").FB4C_TYPE,b("MercuryTypeaheadConstants").MESSAGE_TYPE,b("MercuryTypeaheadConstants").THREAD_TYPE,b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE,b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE,b("MercuryTypeaheadConstants").PAGE_TYPE,b("MercuryTypeaheadConstants").NON_FRIEND_TYPE,b("MercuryTypeaheadConstants").GAME_TYPE],o=(a={},a[b("MercuryTypeaheadConstants").SEARCH_TYPE]={header:""},a[b("MercuryTypeaheadConstants").FRIEND_TYPE]={header:g._("Contacts")},a[b("MercuryTypeaheadConstants").FB4C_TYPE]={header:g._("Colleagues")},a[b("MercuryTypeaheadConstants").MESSAGE_TYPE]={header:g._("Messages")},a[b("MercuryTypeaheadConstants").THREAD_TYPE]={header:g._("Group conversations")},a[b("MercuryTypeaheadConstants").PAGE_TYPE]={header:g._("Businesses")},a[b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE]={header:g._("Meeting rooms")},a[b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE]={header:g._("Bots")},a[b("MercuryTypeaheadConstants").NON_FRIEND_TYPE]={header:g._("More people")},a.game={header:g._("Games")},a);c={sortEntries:function(a,c){__p&&__p();var d=[],e=[],f=[],g=[],h=[],i=[],j=[],k=[],l=[],m=[];a.forEach(function(a){__p&&__p();switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:f.push(a);break;case b("MercuryTypeaheadConstants").MESSAGE_TYPE:g.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:h.push(a);break;case b("MercuryTypeaheadConstants").PAGE_TYPE:case b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE:j.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:i.push(a);break;case b("MercuryTypeaheadConstants").MEETING_ROOM_PAGE_TYPE:k.push(a);break;case b("MercuryTypeaheadConstants").INTERNAL_BOT_PAGE_TYPE:l.push(a);break;case b("MercuryTypeaheadConstants").SEARCH_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").GAME_TYPE:m.push(a);break}});if(b("qex")._("882163")){c=b("qex")._("899030");a=c===2||c===3?j.slice(0,c):j;return d.concat(e,f,g,h,k,l,a,i,m)}return d.concat(e,f,g,h,k,l,i,j,m)},sortEntriesWithoutPages:function(a){__p&&__p();var c=[],d=[],e=[],f=[];a.forEach(function(a){switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:c.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").THREAD_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return c.concat(d,e,f)},sortEntriesWithoutGroupsOrViewer:function(a,c){__p&&__p();var d=[],e=[],f=[];a.forEach(function(a){if(a.getUniqueID()===c)return;switch(a.getType()){case b("MercuryTypeaheadConstants").FRIEND_TYPE:d.push(a);break;case b("MercuryTypeaheadConstants").FB4C_TYPE:e.push(a);break;case b("MercuryTypeaheadConstants").NON_FRIEND_TYPE:f.push(a);break}});return d.concat(e,f)},getEntryOrder:function(a,c){if(c==null)if(b("qex")._("882163"))return n;else return m;else return c},orderEntries:function(a,c){var d=this,e=[];this.getEntryOrder(c).filter(function(a){return a!==b("MercuryTypeaheadConstants").SEARCH_TYPE}).concat(b("MercuryTypeaheadConstants").SEARCH_TYPE).forEach(function(b){return e.push.apply(e,a.filter(function(a){return d.areSectionsEqual(a.getType(),b)}))});return e},buildSingleSection:function(a){return i([[[""],a]])},buildListSections:function(a,c,d){__p&&__p();if(!a.length)return i();d=this.getEntryOrder(c,d);var e=b("mapObject")(o,function(a){return babelHelpers["extends"]({},a,{entries:[]})});e[b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE]=e[b("MercuryTypeaheadConstants").PAGE_TYPE];var f=b("qex")._("861958");c===""&&f===!0&&(e[b("MercuryTypeaheadConstants").FRIEND_TYPE].header=g._("Suggested"));a.forEach(function(a){var b=a.getType();e[b]&&e[b].entries.push(a)});return i(d.filter(function(a){return e[a].entries.length}).map(function(a){return[[e[a].header,a],e[a].entries]}))},buildCustomSection:function(a,b){var c;return c={},c[a]=b,c},areSectionsEqual:function(a,c){return a===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE?c===b("MercuryTypeaheadConstants").COMMERCE_PAGE_TYPE||c===b("MercuryTypeaheadConstants").PAGE_TYPE:a===c},scrollEntryIntoView:function(a,c){var d=b("ReactDOM").findDOMNode(c),e=c.getScrollTop(),f=a.offsetTop-e;d=d.offsetHeight-a.offsetHeight;a=Math.abs(d-f);f>=d&&a<=k?c.scrollToPosition(e+f-d,!0,{duration:j}):f<0&&a<=d+k&&c.scrollToPosition(e+f,!0,{duration:j})},getMessageSearchEntry:function(a){return b("gkx")("860320")||!b("MessengerEnvironment").messengerui||a.length<2?null:new(b("SearchableEntry"))({uniqueID:l,title:g._("Search messages for \"{queryString}\"",[g._param("queryString",a)]),photo:h("86924"),type:b("MercuryTypeaheadConstants").SEARCH_TYPE})},isMessageSearchEntry:function(a){return a.getUniqueID()===l}};e.exports=c}),null);