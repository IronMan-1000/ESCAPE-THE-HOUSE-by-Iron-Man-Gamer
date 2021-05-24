/*!

 */(function(e,t){function n(t){return!e(t).parents().andSelf().filter(function(){return e.curCSS(this,"visibility")==="hidden"||e.expr.filters.hidden(this)}).length}e.ui=e.ui||{};if(!e.ui.version){e.extend(e.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus();n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;t=e.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.curCSS(this,"position",1))&&/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.curCSS(this,"overflow",1)+e.curCSS(this,"overflow-y",1)+e.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){n=e(this[0]);for(var r;n.length&&n[0]!==document;){r=n.css("position");if(r==="absolute"||r==="relative"||r==="fixed"){r=parseInt(n.css("zIndex"),10);if(!isNaN(r)&&r!==0)return r}n=n.parent()}}return 0},disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});e.each(["Width","Height"],function(n,r){function i(t,n,r,i){e.each(s,function(){n-=parseFloat(e.curCSS(t,"padding"+this,!0))||0;r&&(n-=parseFloat(e.curCSS(t,"border"+this+"Width",!0))||0);i&&(n-=parseFloat(e.curCSS(t,"margin"+this,!0))||0)});return n}var s=r==="Width"?["Left","Right"]:["Top","Bottom"],o=r.toLowerCase(),u={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?u["inner"+r].call(this):this.each(function(){e(this).css(o,i(this,n)+"px")})};e.fn["outer"+r]=function(t,n){return typeof t!="number"?u["outer"+r].call(this,t):this.each(function(){e(this).css(o,i(this,t,!0,n)+"px")})}});e.extend(e.expr[":"],{data:function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){var r=t.nodeName.toLowerCase(),i=e.attr(t,"tabindex");if("area"===r){r=t.parentNode;i=r.name;if(!t.href||!i||r.nodeName.toLowerCase()!=="map")return!1;t=e("img[usemap=#"+i+"]")[0];return!!t&&n(t)}return(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"==r?t.href||!isNaN(i):!isNaN(i))&&n(t)},tabbable:function(t){var n=e.attr(t,"tabindex");return(isNaN(n)||n>=0)&&e(t).is(":focusable")}});e(function(){var t=document.body,n=t.appendChild(n=document.createElement("div"));e.extend(n.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});e.support.minHeight=n.offsetHeight===100;e.support.selectstart="onselectstart"in n;t.removeChild(n).style.display="none"});e.extend(e.ui,{plugin:{add:function(t,n,r){t=e.ui[t].prototype;for(var i in r){t.plugins[i]=t.plugins[i]||[];t.plugins[i].push([n,r[i]])}},call:function(e,t,n){if((t=e.plugins[t])&&e.element[0].parentNode)for(var r=0;r<t.length;r++)e.options[t[r][0]]&&t[r][1].apply(e.element,n)}},contains:function(e,t){return document.compareDocumentPosition?e.compareDocumentPosition(t)&16:e!==t&&e.contains(t)},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;n=n&&n==="left"?"scrollLeft":"scrollTop";var r=!1;if(t[n]>0)return!0;t[n]=1;r=t[n]>0;t[n]=0;return r},isOverAxis:function(e,t,n){return e>t&&e<t+n},isOver:function(t,n,r,i,s,o){return e.ui.isOverAxis(t,r,s)&&e.ui.isOverAxis(n,i,o)}})}})(jQuery);(function(e,t){if(e.cleanData){var n=e.cleanData;e.cleanData=function(t){for(var r=0,i;(i=t[r])!=null;r++)e(i).triggerHandler("remove");n(t)}}else{var r=e.fn.remove;e.fn.remove=function(t,n){return this.each(function(){n||(!t||e.filter(t,[this]).length)&&e("*",this).add([this]).each(function(){e(this).triggerHandler("remove")});return r.call(e(this),t,n)})}}e.widget=function(t,n,r){var i=t.split(".")[0],s;t=t.split(".")[1];s=i+"-"+t;if(!r){r=n;n=e.Widget}e.expr[":"][s]=function(n){return!!e.data(n,t)};e[i]=e[i]||{};e[i][t]=function(e,t){arguments.length&&this._createWidget(e,t)};n=new n;n.options=e.extend(!0,{},n.options);e[i][t].prototype=e.extend(!0,n,{namespace:i,widgetName:t,widgetEventPrefix:e[i][t].prototype.widgetEventPrefix||t,widgetBaseClass:s},r);e.widget.bridge(t,e[i][t])};e.widget.bridge=function(n,r){e.fn[n]=function(i){var s=typeof i=="string",o=Array.prototype.slice.call(arguments,1),u=this;i=!s&&o.length?e.extend.apply(null,[!0,i].concat(o)):i;if(s&&i.charAt(0)==="_")return u;s?this.each(function(){var r=e.data(this,n),s=r&&e.isFunction(r[i])?r[i].apply(r,o):r;if(s!==r&&s!==t){u=s;return!1}}):this.each(function(){var t=e.data(this,n);t?t.option(i||{})._init():e.data(this,n,new r(i,this))});return u}};e.Widget=function(e,t){arguments.length&&this._createWidget(e,t)};e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(t,n){e.data(n,this.widgetName,this);this.element=e(n);this.options=e.extend(!0,{},this.options,this._getCreateOptions(),t);var r=this;this.element.bind("remove."+this.widgetName,function(){r.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return e.metadata&&e.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(n,r){var i=n;if(arguments.length===0)return e.extend({},this.options);if(typeof n=="string"){if(r===t)return this.options[n];i={};i[n]=r}this._setOptions(i);return this},_setOptions:function(t){var n=this;e.each(t,function(e,t){n._setOption(e,t)});return this},_setOption:function(e,t){this.options[e]=t;e==="disabled"&&this.widget()[t?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",t);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(t,n,r){var i=this.options[t];n=e.Event(n);n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase();r=r||{};if(n.originalEvent){t=e.event.props.length;for(var s;t;){s=e.event.props[--t];n[s]=n.originalEvent[s]}}this.element.trigger(n,r);return!(e.isFunction(i)&&i.call(this.element[0],n,r)===!1||n.isDefaultPrevented())}}})(jQuery);(function(e){e.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent")){e.removeData(n.target,t.widgetName+".preventClickEvent");n.stopImmediatePropagation();return!1}});this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(t){t.originalEvent=t.originalEvent||{};if(!t.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(t);this._mouseDownEvent=t;var n=this,r=t.which==1,i=typeof this.options.cancel=="string"?e(t.target).parents().add(t.target).filter(this.options.cancel).length:!1;if(!r||i||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay;this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted){t.preventDefault();return!0}}!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return n._mouseMove(e)};this._mouseUpDelegate=function(e){return n._mouseUp(e)};e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);t.preventDefault();return t.originalEvent.mouseHandled=!0}},_mouseMove:function(t){if(!e.browser.msie||document.documentMode>=9||!!t.button){if(this._mouseStarted){this._mouseDrag(t);return t.preventDefault()}this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&((this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1)?this._mouseDrag(t):this._mouseUp(t));return!this._mouseStarted}return this._mouseUp(t)},_mouseUp:function(t){e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=!1;t.target==this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0);this._mouseStop(t)}return!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative");this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(t){var n=this.options;if(this.helper||n.disabled||e(t.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(t);return this.handle?!0:!1},_mouseStart:function(t){var n=this.options;this.helper=this._createHelper(t);this._cacheHelperProportions();e.ui.ddmanager&&(e.ui.ddmanager.current=this);this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(t);this.originalPageX=t.pageX;this.originalPageY=t.pageY;n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt);n.containment&&this._setContainment();if(this._trigger("start",t)===!1){this._clear();return!1}this._cacheHelperProportions();e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(t,!0);return!0},_mouseDrag:function(t,n){this.position=this._generatePosition(t);this.positionAbs=this._convertPositionTo("absolute");if(!n){n=this._uiHash();if(this._trigger("drag",t,n)===!1){this._mouseUp({});return!1}this.position=n.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";e.ui.ddmanager&&e.ui.ddmanager.drag(this,t);return!1},_mouseStop:function(t){var n=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(n=e.ui.ddmanager.drop(this,t));if(this.dropped){n=this.dropped;this.dropped=!1}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!n||this.options.revert=="valid"&&n||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,n)){var r=this;e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()})}else this._trigger("stop",t)!==!1&&this._clear();return!1},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;e(this.options.handle,this.element).find("*").andSelf().each(function(){this==t.target&&(n=!0)});return n},_createHelper:function(t){var n=this.options;t=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper=="clone"?this.element.clone():this.element;t.parents("body").length||t.appendTo(n.appendTo=="parent"?this.element[0].parentNode:n.appendTo);t[0]!=this.element[0]&&!/(fixed|absolute)/.test(t.css("position"))&&t.css("position","absolute");return t},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" "));e.isArray(t)&&(t={left:+t[0],top:+t[1]||0});"left"in t&&(this.offset.click.left=t.left+this.margins.left);"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left);"top"in t&&(this.offset.click.top=t.top+this.margins.top);"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&e.ui.contains(this.scrollParent[0],this.offsetParent[0])){t.left+=this.scrollParent.scrollLeft();t.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&e.browser.msie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t=this.options;t.containment=="parent"&&(t.containment=this.helper[0].parentNode);if(t.containment=="document"||t.containment=="window")this.containment=[(t.containment=="document"?0:e(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(t.containment=="document"?0:e(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(t.containment=="document"?0:e(window).scrollLeft())+e(t.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(t.containment=="document"?0:e(window).scrollTop())+(e(t.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(t.containment)&&t.containment.constructor!=Array){var n=e(t.containment)[0];if(n){t=e(t.containment).offset();var r=e(n).css("overflow")!="hidden";this.containment=[t.left+(parseInt(e(n).css("borderLeftWidth"),10)||0)+(parseInt(e(n).css("paddingLeft"),10)||0),t.top+(parseInt(e(n).css("borderTopWidth"),10)||0)+(parseInt(e(n).css("paddingTop"),10)||0),t.left+(r?Math.max(n.scrollWidth,n.offsetWidth):n.offsetWidth)-(parseInt(e(n).css("borderLeftWidth"),10)||0)-(parseInt(e(n).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,t.top+(r?Math.max(n.scrollHeight,n.offsetHeight):n.offsetHeight)-(parseInt(e(n).css("borderTopWidth"),10)||0)-(parseInt(e(n).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else t.containment.constructor==Array&&(this.containment=t.containment)},_convertPositionTo:function(t,n){n||(n=this.position);t=t=="absolute"?1:-1;var r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName);return{top:n.top+this.offset.relative.top*t+this.offset.parent.top*t-(e.browser.safari&&e.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop())*t),left:n.left+this.offset.relative.left*t+this.offset.parent.left*t-(e.browser.safari&&e.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())*t)}},_generatePosition:function(t){var n=this.options,r=this.cssPosition!="absolute"||this.scrollParent[0]!=document&&!!e.ui.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,i=/(html|body)/i.test(r[0].tagName),s=t.pageX,o=t.pageY;if(this.originalPosition){if(this.containment){t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left);t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top);t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left);t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)}if(n.grid){o=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1];o=this.containment?o-this.offset.click.top<this.containment[1]||o-this.offset.click.top>this.containment[3]?o-this.offset.click.top<this.containment[1]?o+n.grid[1]:o-n.grid[1]:o:o;s=this.originalPageX+Math.round((s-this.originalPageX)/n.grid[0])*n.grid[0];s=this.containment?s-this.offset.click.left<this.containment[0]||s-this.offset.click.left>this.containment[2]?s-this.offset.click.left<this.containment[0]?s+n.grid[0]:s-n.grid[0]:s:s}}return{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(e.browser.safari&&e.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():i?0:r.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(e.browser.safari&&e.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():i?0:r.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=!1},_trigger:function(t,n,r){r=r||this._uiHash();e.ui.plugin.call(this,t,[n,r]);t=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});e.extend(e.ui.draggable,{version:"1.8.11"});e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[];e(i.connectToSortable).each(function(){var n=e.data(this,"sortable");if(n&&!n.options.disabled){r.sortables.push({instance:n,shouldRevert:n.options.revert});n.refreshPositions();n._trigger("activate",t,s)}})},stop:function(t,n){var r=e(this).data("draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;r.cancelHelperRemoval=!0;this.instance.cancelHelperRemoval=!1;this.shouldRevert&&(this.instance.options.revert=!0);this.instance._mouseStop(t);this.instance.options.helper=this.instance.options._helper;r.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=!1;this.instance._trigger("deactivate",t,i)}})},drag:function(t,n){var r=e(this).data("draggable"),i=this;e.each(r.sortables,function(){this.instance.positionAbs=r.positionAbs;this.instance.helperProportions=r.helperProportions;this.instance.offset.click=r.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=e(i).clone().appendTo(this.instance.element).data("sortable-item",!0);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return n.helper[0]};t.target=this.instance.currentItem[0];this.instance._mouseCapture(t,!0);this.instance._mouseStart(t,!0,!0);this.instance.offset.click.top=r.offset.click.top;this.instance.offset.click.left=r.offset.click.left;this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top;r._trigger("toSortable",t);r.dropped=this.instance.element;r.currentItem=r.element;this.instance.fromOutside=r}this.instance.currentItem&&this.instance._mouseDrag(t)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=!0;this.instance.options.revert=!1;this.instance._trigger("out",t,this.instance._uiHash(this.instance));this.instance._mouseStop(t,!0);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();r._trigger("fromSortable",t);r.dropped=!1}})}});e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor"));t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}});e.ui.plugin.add("draggable","iframeFix",{start:function(){var t=e(this).data("draggable").options;e(t.iframeFix===!0?"iframe":t.iframeFix).each(function(){e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")})},stop:function(){e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});e.ui.plugin.add("draggable","opacity",{start:function(t,n){t=e(n.helper);n=e(this).data("draggable").options;t.css("opacity")&&(n._opacity=t.css("opacity"));t.css("opacity",n.opacity)},stop:function(t,n){t=e(this).data("draggable").options;t._opacity&&e(n.helper).css("opacity",t._opacity)}});e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("draggable");t.scrollParent[0]!=document&&t.scrollParent[0].tagName!="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("draggable"),r=n.options,i=!1;if(n.scrollParent[0]!=document&&n.scrollParent[0].tagName!="HTML"){if(!r.axis||r.axis!="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}});e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("draggable"),n=t.options;t.snapElements=[];e(n.snap.constructor!=String?n.snap.items||":data(draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!=t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){for(var r=e(this).data("draggable"),i=r.options,s=i.snapTolerance,o=n.offset.left,u=o+r.helperProportions.width,a=n.offset.top,f=a+r.helperProportions.height,l=r.snapElements.length-1;l>=0;l--){var c=r.snapElements[l].left,h=c+r.snapElements[l].width,p=r.snapElements[l].top,v=p+r.snapElements[l].height;if(c-s<o&&o<h+s&&p-s<a&&a<v+s||c-s<o&&o<h+s&&p-s<f&&f<v+s||c-s<u&&u<h+s&&p-s<a&&a<v+s||c-s<u&&u<h+s&&p-s<f&&f<v+s){if(i.snapMode!="inner"){var m=Math.abs(p-f)<=s,g=Math.abs(v-a)<=s,y=Math.abs(c-u)<=s,b=Math.abs(h-o)<=s;m&&(n.position.top=r._convertPositionTo("relative",{top:p-r.helperProportions.height,left:0}).top-r.margins.top);g&&(n.position.top=r._convertPositionTo("relative",{top:v,left:0}).top-r.margins.top);y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c-r.helperProportions.width}).left-r.margins.left);b&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h}).left-r.margins.left)}var w=m||g||y||b;if(i.snapMode!="outer"){m=Math.abs(p-a)<=s;g=Math.abs(v-f)<=s;y=Math.abs(c-o)<=s;b=Math.abs(h-u)<=s;m&&(n.position.top=r._convertPositionTo("relative",{top:p,left:0}).top-r.margins.top);g&&(n.position.top=r._convertPositionTo("relative",{top:v-r.helperProportions.height,left:0}).top-r.margins.top);y&&(n.position.left=r._convertPositionTo("relative",{top:0,left:c}).left-r.margins.left);b&&(n.position.left=r._convertPositionTo("relative",{top:0,left:h-r.helperProportions.width}).left-r.margins.left)}!r.snapElements[l].snapping&&(m||g||y||b||w)&&r.options.snap.snap&&r.options.snap.snap.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item}));r.snapElements[l].snapping=m||g||y||b||w}else{r.snapElements[l].snapping&&r.options.snap.release&&r.options.snap.release.call(r.element,t,e.extend(r._uiHash(),{snapItem:r.snapElements[l].item}));r.snapElements[l].snapping=!1}}}});e.ui.plugin.add("draggable","stack",{start:function(){var t=e(this).data("draggable").options;t=e.makeArray(e(t.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(t.length){var n=parseInt(t[0].style.zIndex)||0;e(t).each(function(e){this.style.zIndex=n+e});this[0].style.zIndex=n+t.length}}});e.ui.plugin.add("draggable","zIndex",{start:function(t,n){t=e(n.helper);n=e(this).data("draggable").options;t.css("zIndex")&&(n._zIndex=t.css("zIndex"));t.css("zIndex",n.zIndex)},stop:function(t,n){t=e(this).data("draggable").options;t._zIndex&&e(n.helper).css("zIndex",t._zIndex)}})})(jQuery);