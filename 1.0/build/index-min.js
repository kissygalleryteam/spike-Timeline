/*!build time : 2013-11-27 11:06:46 AM*/
KISSY.add("gallery/spike-Timeline/1.0/index",function(a,b){function c(b,d){var e=this;return e.container=a.get(b),e.config=a.merge(q,d),e instanceof c?(c.superclass.constructor.call(e,e.config),e._init(),void 0):new c(b,e.config)}var d,e=a.Event,f=a.DOM,g=(a.io,"data-index"),h="data-time",i="data-timelength",j=1e3,k=6e4,l=864e5,m="http://g.tbcdn.cn/s.gif",n="data-src",o='<a class="j_timeBlock"><span class="hours"></span><span class="state"></span></a>',p=[],q={serviceTime:null,url:"",isJsonp:!0,ajaxUpMinutes:60,timeTemplate:"",startTime:"",endTime:"",isInvalidTimeHide:!0,isCustomTimePeriod:!1,customTime:[],timeLength:null,viewResidenceTime:2,doneCls:"doneCls",currCls:"currCls",futrueCls:"futrueCls",isPastView:!0,clickPastTimeBlockCls:"clickPastTimeBlock",isFutureView:!0,clickFutureTimeBlock:"clickFutureTimeBlock",timeBlockCls:".j_timeBlock",hoursContainerCls:".hours",stateTextCls:".state",pastStateText:"",currtStateText:"\u5f00\u62a2",futureStateText:"\u5373\u5c06\u5f00\u62a2",isAutoUpdateUi:!0,updateUiSeconds:1,merchContainer:"#J_secondContent",merchBlockCls:".j_ul",lazyLoadSrc:""};return c.events=["passSpikeChange","currSpikeChange","futureSpikeChange"],a.extend(c,a.Base),a.augment(c,{_init:function(){var a=this;a._argumentsInit(),a.get("lazyLoadSrc")||(a.set("lazyLoadSrc",n),a.renderImgSrc()),a._hideAllAcitve(),a._blockStateRender(),a._eventRender(),a.get("isAutoUpdateUi")?a._startUpdateUi():a.stopAutoUpdateUi()},_argumentsInit:function(){var c=this;d=new b({serviceTime:c.get("serviceTime"),url:c.get("url"),isJsonp:c.get("isJsonp"),ajaxUpMinutes:c.get("ajaxUpMinutes"),isAutoUpdate:c.get("isAutoUpdate")}),c.startDateMillisecond=d.getDateParse(c.get("startTime")),c.timeLengthSecondes=d.getMillisecond(c.get("timeLength")),c.get("timeTemplate")?o=c.get("timeTemplate"):a.use("gallery/spike-Timeline/1.0/spikectrl.css"),c._updateMainTime(),c._getNewYMD(),c.aBlocks=a.query(c.get("merchBlockCls"),a.get(c.get("merchContainer")))},_getNewYMD:function(){var a=this;a.dataYMD=d.getTimeYMDstr()},_blockStateRender:function(){var a=this;a.isValidDate()&&(a.get("isCustomTimePeriod")?a._renderSelfTimeBlock():a._calculateTimeLenth(),a._setStateText())},_saveTimeBlock:function(){var b=this;!b.timeBlock&&(b.timeBlock=a.query(b.get("timeBlockCls"),b.container)),a.one(b.timeBlock[0]).addClass("mrg_lft155")},_renderSelfTimeBlock:function(){var b=this,c=document.createDocumentFragment(),e=d.sortHMtimeArray(b.get("customTime")),e=d.allStrHMtimeRenderFn(e),g=e.length;if(!g||!o)return a.log("\u81ea\u5b9a\u4e49\u65f6\u95f4\u6570\u636e\u6216\u8005\u6a21\u677f \u65e0\u6548\uff01"),void 0;for(var h=0;g>h;h++){var i=e[h],j=e[h+1],k=j?j:l,m=d.getMillisecond(k)-d.getMillisecond(i),n=b.startDateMillisecond+m;h?p.push(n):p.push(b.startDateMillisecond),c.appendChild(b._writeTimeDataText(h,i,m))}f.append(c,b.container),b._saveTimeBlock()},_calculateTimeLenth:function(){var b=this,c=document.createDocumentFragment(),e=d.getAllHMSstr(b.startDateMillisecond),g=d.getMillisecond(e),h=d.formatHMSstr(e);if(!o)return a.log("\u81ea\u5b9a\u4e49\u65f6\u95f4\u8f74\u6a21\u677f\u9519\u8bef\uff01"),void 0;for(var i=0;100>i;i++){var j=g+i*b.timeLengthSecondes,k=j?d.getHMstr(j):h,l=d.allStrHMtimeRenderFn(k)[0],m=b.startDateMillisecond+j-g;if(!l)break;p.push(m),c.appendChild(b._writeTimeDataText(i,l,b.timeLengthSecondes))}f.append(c,b.container),b._saveTimeBlock()},_writeTimeDataText:function(b,c,d){var e=this,j=f.create(o),k=a.one(j).first(e.get("hoursContainerCls"));return f.attr(j,g,b),f.attr(j,h,c),f.attr(j,i,d),k&&k.text(c),j},renderImgLazyLoad:function(b){var c=this,d=[];b&&(d=a.query("img",b)),a.each(d,function(a){var b=f.attr(a,c.get("lazyLoadSrc")),d=f.attr(a,"src");b!==d&&b&&f.attr(a,"src",b)})},renderImgSrc:function(){var b=this,c=a.query("img",a.get(b.get("merchContainer")));a.each(c,function(a){var c=f.attr(a,"src");f.attr(a,"src",m),c&&f.attr(a,b.get("lazyLoadSrc"),c)})},_eventRender:function(){var a=this;e.on(a.get("timeBlockCls"),"click",function(){a._timeClickIf(this)})},_timeClickIf:function(a){var b=this,c=a,d=f.hasClass(c,b.get("doneCls")),e=f.hasClass(c,b.get("currCls")),g=f.hasClass(c,b.get("futrueCls"));b.get("isPastView")&&d&&(b._showRangeTimeMeched(c),b._clearAllClickCls(),f.addClass(a,b.get("clickPastTimeBlockCls")),b._layzBackCurrView()),b.get("isFutureView")&&g&&(b._showRangeTimeMeched(c),b._clearAllClickCls(),f.addClass(a,b.get("clickFutureTimeBlock")),b._layzBackCurrView()),e&&(b._clearAllClickCls(),b._showRangeTimeMeched(c),b.lazyBackTimeOut&&clearTimeout(b.lazyBackTimeOut))},_layzBackCurrView:function(){function a(){b._showRangeTimeMeched(b.currTimeBlock),b._clearAllClickCls()}var b=this,c=b.get("viewResidenceTime")*k;b.lazyBackTimeOut&&clearTimeout(b.lazyBackTimeOut),b.lazyBackTimeOut=setTimeout(a,c)},_clearClickBlockCls:function(b,c){var d=this,e=a.query("."+b,d.container);a.each(e,function(a){f.removeClass(a,c)})},_clearAllClickCls:function(){var a=this;a._clearClickBlockCls(a.get("doneCls"),a.get("clickPastTimeBlockCls")),a._clearClickBlockCls(a.get("futrueCls"),a.get("clickFutureTimeBlock"))},_showRangeTimeMeched:function(a){var b=this,c=parseInt(f.attr(a,g),10),d=b.aBlocks[c];b._hideAllAcitve(),f.show(d),b.renderImgLazyLoad(d)},_hideAllAcitve:function(){var b=this;a.each(b.aBlocks,function(a){f.hide(a)})},_setStateText:function(){var b=this;return b.isValidDate()?(a.each(b.timeBlock,function(a,c){b._renderStateAll(a,c)}),void 0):(b.allShowHideFn(),void 0)},allShowHideFn:function(){var a=this;a.get("isInvalidTimeHide")&&(a.showHideFn(a.timeBlock,!1),a._hideAllAcitve())},_renderStateAll:function(a,b){var c=this,e=f.attr(a,h),g=parseInt(f.attr(a,i),10),k=d.getTimeYMDstr(),l=k+" "+e,m=d.getDateParse(l),n=d.offsetDateSeconds(l,g,"+"),o=c.timeBlock.length-1===b,p=d.getDateParse(k+" 23:59:59")+j;a&&(n<c.mainTime?c._addPastState(a):d.isInTimeRange(m,c.mainTime,n)||d.isInTimeRange(m,c.mainTime,p)&&o?c._addCurrState(a):c._addFutureState(a))},_addPastState:function(b){var c=this,d=c.get("doneCls"),e=f.hasClass(b,d),g=a.one(b).first(c.get("stateTextCls"));e||(c._clearCls(b),f.addClass(b,d),f.text(g,c.get("pastStateText")),c.fire("passSpikeChange",{elTarget:b}))},_addCurrState:function(b){var c=this,d=c.get("currCls"),e=f.hasClass(b,d),g=a.one(b).first(c.get("stateTextCls"));e||(c._clearCls(b),f.addClass(b,d),f.text(g,c.get("currtStateText")),c._showRangeTimeMeched(b),c.currTimeBlock=b,c.fire("currSpikeChange",{elTarget:b}))},_addFutureState:function(b){var c=this,d=c.get("futrueCls"),e=f.hasClass(b,d),g=a.one(b).first(c.get("stateTextCls"));e||(c._clearCls(b),f.addClass(b,d),f.text(g,c.get("futureStateText")),c.fire("futureSpikeChange",{elTarget:b}))},_clearCls:function(b){var c=this,d=a.one(b).first(c.get("stateTextCls"));f.removeClass(b,c.get("doneCls")),f.removeClass(b,c.get("currCls")),f.removeClass(b,c.get("futrueCls")),d&&f.text(d,"")},_updateMainTime:function(){var a=this;a.mainTime=d.getCurrTime()},isValidDate:function(){var b=this,c=d.getDateParse(b.get("startTime")),e=d.getDateParse(b.get("endTime")),f=d.isInTimeRange(c,b.mainTime,e);return!f&&a.log("\u65f6\u95f4\u6709\u6548\u6027\u9a8c\u8bc1\u5931\u8d25\uff01"),f},showHideFn:function(b,c,d){var e=this,d=a.isFunction(d)?d:null;a.each(b,function(a,b){c?f.show(a):f.hide(a),d&&d.call(e,a,b)})},_startUpdateUi:function(){function a(){b._updateMainTime(),b._getNewYMD(),b._setStateText()}var b=this,c=b.get("updateUiSeconds")<1?1:b.get("updateUiSeconds"),d=c*j;b.autoUpdateIntvl||(b.autoUpdateIntvl=setInterval(a,d))},stopAutoUpdateUi:function(){var a=this;a.autoUpdateIntvl&&clearInterval(a.autoUpdateIntvl)}}),c},{requires:["gallery/real-time/1.0/index"]});