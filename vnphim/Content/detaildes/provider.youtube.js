webpackJsonpjwplayer([1],{84:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__(46),__webpack_require__(52),__webpack_require__(43),__webpack_require__(44),__webpack_require__(61),__webpack_require__(85),__webpack_require__(77),__webpack_require__(45)],__WEBPACK_AMD_DEFINE_RESULT__=function(utils,cssUtils,_,events,states,scriptloader,DefaultProvider,Events){var _scriptLoader=new scriptloader(window.location.protocol+'//www.youtube.com/iframe_api'),_isMobile=utils.isMobile();function YoutubeProvider(_playerId,_playerConfig){this.state=states.IDLE;_.extend(this,Events);var _this=this,_youtubeAPI=window.YT,_youtubePlayer=null,_element=document.createElement('div'),_container,_bufferPercent=-1,_listeningForReady=false,_youtubeEmbedReadyCallback=null,_youtubePlayerReadyCallback=null,_playingInterval=-1,_youtubeState=-1,_beforecompleted=false,_requiresUserInteraction=_isMobile;this.setState=function(state){clearInterval(_playingInterval);if(state!==states.IDLE&&state!==states.COMPLETE){_playingInterval=setInterval(_checkPlaybackHandler,250);if(state===states.PLAYING){this.seeking=false;}else if(state===states.LOADING||state===states.STALLED){_bufferUpdate();}}
DefaultProvider.setState.apply(this,arguments);};if(!_youtubeAPI&&_scriptLoader&&_scriptLoader.getStatus()===scriptloader.loaderstatus.NEW){_scriptLoader.on(events.COMPLETE,_onLoadSuccess);_scriptLoader.on(events.ERROR,_onLoadError);_scriptLoader.load();}
_element.id=_playerId+'_youtube';function _onLoadSuccess(){if(window.YT&&window.YT.loaded){_youtubeAPI=window.YT;_readyCheck();}else{setTimeout(_onLoadSuccess,100);}}
function _onLoadError(){if(_scriptLoader){_scriptLoader.off();_scriptLoader=null;}}
function _getVideoLayer(){var videoLayer=_element&&_element.parentNode;if(!videoLayer){if(!_listeningForReady){window.jwplayer(_playerId).onReady(_readyCheck);_listeningForReady=true;}
return false;}
return videoLayer;}
function _readyCheck(){if(_youtubeAPI&&_getVideoLayer()){if(_youtubeEmbedReadyCallback){_youtubeEmbedReadyCallback.apply(_this);}}}
function _checkPlaybackHandler(){if(!_youtubePlayer||!_youtubePlayer.getPlayerState){return;}
var youtubeState=_youtubePlayer.getPlayerState();if(youtubeState!==null&&youtubeState!==undefined&&youtubeState!==_youtubeState){_onYoutubeStateChange({data:youtubeState});}
var youtubeStates=_youtubeAPI.PlayerState;if(youtubeState===youtubeStates.PLAYING){_timeUpdateHandler();}else if(youtubeState===youtubeStates.BUFFERING){_bufferUpdate();}}
function _round(number){return Math.round(number*10)/10;}
function _timeUpdateHandler(){_bufferUpdate();_this.trigger(events.JWPLAYER_MEDIA_TIME,{position:_round(_youtubePlayer.getCurrentTime()),duration:_youtubePlayer.getDuration()});}
function _bufferUpdate(){var bufferPercent=0;if(_youtubePlayer&&_youtubePlayer.getVideoLoadedFraction){bufferPercent=Math.round(_youtubePlayer.getVideoLoadedFraction()*100);}
if(_bufferPercent!==bufferPercent){_bufferPercent=bufferPercent;_this.trigger(events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:bufferPercent});}}
function _ended(){if(_this.state!==states.IDLE&&_this.state!==states.COMPLETE){_beforecompleted=true;_this.trigger(events.JWPLAYER_MEDIA_BEFORECOMPLETE);_this.setState(states.COMPLETE);_beforecompleted=false;_this.trigger(events.JWPLAYER_MEDIA_COMPLETE);}}
function _sendMetaEvent(){_this.trigger(events.JWPLAYER_MEDIA_META,{duration:_youtubePlayer.getDuration(),width:_element.clientWidth,height:_element.clientHeight});}
function _composeCallbacks(){var args=arguments;var start=args.length- 1;return function(){var i=start;var result=args[start].apply(this,arguments);while(i--){result=args[i].call(this,result);}
return result;};}
function _embedYoutubePlayer(videoId,playerVars){if(!videoId){throw'invalid Youtube ID';}
var videoLayer=_element.parentNode;if(!videoLayer){return;}
var ytConfig={height:'100%',width:'100%',videoId:videoId,playerVars:_.extend({html5:1,autoplay:0,controls:0,showinfo:0,rel:0,modestbranding:0,playsinline:1,origin:location.protocol+'//'+ location.hostname},playerVars),events:{onReady:_onYoutubePlayerReady,onStateChange:_onYoutubeStateChange,onPlaybackQualityChange:_onYoutubePlaybackQualityChange,onError:_onYoutubePlayerError}};_this.setVisibility(true);_youtubePlayer=new _youtubeAPI.Player(_element,ytConfig);_element=_youtubePlayer.getIframe();_youtubeEmbedReadyCallback=null;}
function _onYoutubePlayerReady(){if(_youtubePlayerReadyCallback){_youtubePlayerReadyCallback.apply(_this);_youtubePlayerReadyCallback=null;}}
function _onYoutubeStateChange(event){var youtubeStates=_youtubeAPI.PlayerState;_youtubeState=event.data;switch(_youtubeState){case youtubeStates.UNSTARTED:if(utils.isAndroid()){_youtubePlayer.playVideo();}
return;case youtubeStates.ENDED:_ended();return;case youtubeStates.PLAYING:if(_.isFunction(_youtubePlayer.unloadModule)){_youtubePlayer.unloadModule('captions');}
_requiresUserInteraction=false;_sendMetaEvent();_this.trigger(events.JWPLAYER_MEDIA_LEVELS,{levels:_this.getQualityLevels(),currentQuality:_this.getCurrentQuality()});_this.setState(states.PLAYING);return;case youtubeStates.PAUSED:_this.setState(states.PAUSED);return;case youtubeStates.BUFFERING:if(_this.seeking){_this.setState(states.LOADING);}else{_this.setState(states.STALLED);}
return;case youtubeStates.CUED:_this.setState(states.IDLE);if(utils.isAndroid()){_youtubePlayer.playVideo();}
return;}}
function _onYoutubePlaybackQualityChange(){if(_youtubeState!==_youtubeAPI.PlayerState.ENDED){_this.play();}
_this.trigger(events.JWPLAYER_MEDIA_LEVEL_CHANGED,{currentQuality:_this.getCurrentQuality(),levels:_this.getQualityLevels()});}
function _onYoutubePlayerError(){_this.trigger(events.JWPLAYER_MEDIA_ERROR,{message:'Error loading YouTube: Video could not be played'});}
function _readyViewForMobile(){if(_isMobile){_this.setVisibility(true);}}
function _stopVideo(){clearInterval(_playingInterval);if(_youtubePlayer&&_youtubePlayer.stopVideo){utils.tryCatch(function(){_youtubePlayer.stopVideo();_youtubePlayer.clearVideo();});}}
this.init=function(item){_setItem(item);};this.destroy=function(){this.remove();this.off();_container=_element=_youtubeAPI=_this=null;};this.load=function(item){this.setState(states.LOADING);_setItem(item);_this.play();};function _setItem(item){_youtubePlayerReadyCallback=null;var url=item.sources[0].file;var videoId=utils.youTubeID(url);_this.volume(_playerConfig.volume);_this.mute(_playerConfig.mute);_this.setVisibility(true);if(!_youtubeAPI||!_youtubePlayer){_youtubeEmbedReadyCallback=function(){_embedYoutubePlayer(videoId);};_onLoadSuccess();return;}
if(!_youtubePlayer.getPlayerState){var onStart=function(){_this.load(item);};if(_youtubePlayerReadyCallback){_youtubePlayerReadyCallback=_composeCallbacks(onStart,_youtubePlayerReadyCallback);}else{_youtubePlayerReadyCallback=onStart;}
return;}
var currentVideoId=_youtubePlayer.getVideoData().video_id;if(currentVideoId!==videoId){if(_requiresUserInteraction){_stopVideo();_youtubePlayer.cueVideoById(videoId);}else{_youtubePlayer.loadVideoById(videoId);}
var youtubeState=_youtubePlayer.getPlayerState();var youtubeStates=_youtubeAPI.PlayerState;if(youtubeState===youtubeStates.UNSTARTED||youtubeState===youtubeStates.CUED){_readyViewForMobile();}}else{if(_youtubePlayer.getCurrentTime()>0){_youtubePlayer.seekTo(0);}
_sendMetaEvent();}}
function replaceQuality(quality){if(quality==='tiny'){return'144p';}
if(quality==='small'){return'240p';}
if(quality==='medium'){return'360p';}
if(quality==='large'){return'480p';}
if(quality==='hd720'){return'720p';}
if(quality==='hd1080'){return'1080p';}
return quality;}
this.stop=function(){_stopVideo();this.setState(states.IDLE);};this.play=function(){if(_requiresUserInteraction){return;}
if(_youtubePlayer&&_youtubePlayer.playVideo){_youtubePlayer.playVideo();}else{if(_youtubePlayerReadyCallback){_youtubePlayerReadyCallback=_composeCallbacks(this.play,_youtubePlayerReadyCallback);}else{_youtubePlayerReadyCallback=this.play;}}};this.pause=function(){if(_requiresUserInteraction){return;}
if(_youtubePlayer.pauseVideo){_youtubePlayer.pauseVideo();}};this.seek=function(position){if(_requiresUserInteraction){return;}
if(_youtubePlayer.seekTo){this.seeking=true;_youtubePlayer.seekTo(position);}};this.volume=function(vol){if(!_.isNumber(vol)){return;}
var volume=Math.min(Math.max(0,vol),100);if(_youtubePlayer&&_youtubePlayer.getVolume){_youtubePlayer.setVolume(volume);}};this.mute=function(mute){var muted=utils.exists(mute)?!!mute:!_playerConfig.mute;if(_youtubePlayer&&_youtubePlayer.mute){if(muted){_youtubePlayer.mute();}else{_youtubePlayer.unMute();}}};this.detachMedia=function(){return null;};this.attachMedia=function(){if(_beforecompleted){this.setState(states.COMPLETE);this.trigger(events.JWPLAYER_MEDIA_COMPLETE);_beforecompleted=false;}};this.setContainer=function(parent){_container=parent;parent.appendChild(_element);this.setVisibility(true);};this.getContainer=function(){return _container;};this.remove=function(){_stopVideo();if(_element&&_container&&_container===_element.parentNode){_container.removeChild(_element);}
_youtubeEmbedReadyCallback=_youtubePlayerReadyCallback=_youtubePlayer=null;};this.setVisibility=function(state){state=!!state;if(state){cssUtils.style(_element,{display:'block'});cssUtils.style(_container,{visibility:'visible',opacity:1});}else{if(!_isMobile){cssUtils.style(_container,{opacity:0});}}};this.resize=function(){return false;};this.checkComplete=function(){return _beforecompleted;};this.getCurrentQuality=function(){if(!_youtubePlayer){return-1;}
if(_youtubePlayer.getAvailableQualityLevels){var ytQuality=_youtubePlayer.getPlaybackQuality();var ytLevels=_youtubePlayer.getAvailableQualityLevels();return ytLevels.indexOf(ytQuality);}
return-1;};this.getQualityLevels=function(){if(!_youtubePlayer){return;}
if(!_.isFunction(_youtubePlayer.getAvailableQualityLevels)){return[];}
var ytLevels=_youtubePlayer.getAvailableQualityLevels();if(ytLevels.length===2&&_.contains(ytLevels,'auto')){return{label:_.without(ytLevels,'auto')};}
var qualityArray=_.map(ytLevels,function(val){return{label:replaceQuality(val)};});return qualityArray.reverse();};this.setCurrentQuality=function(quality){if(!_youtubePlayer){return;}
if(_youtubePlayer.getAvailableQualityLevels){var ytLevels=_youtubePlayer.getAvailableQualityLevels();if(ytLevels.length){var ytQuality=ytLevels[ytLevels.length- quality- 1];_youtubePlayer.setPlaybackQuality(ytQuality);}}};this.getName=YoutubeProvider.getName;}
YoutubeProvider.getName=function(){return{name:'youtube'};};YoutubeProvider.register=function(jwplayer){jwplayer.api.registerProvider(YoutubeProvider);};return YoutubeProvider;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}});//# sourceMappingURL=provider.youtube.c861798b689359972b70.map