var seekpos=false;var timer;function closeAd(){$(".closeadforme").hide();}
function showBroken(){if(isLogin==false){openLogin();}else{$(".feedbackMovie").css({marginTop:($(window).height()- $(".feedbackMovie").outerHeight())/2 - 100});$(".feedbackMovie").fadeIn("fast");$("#timeError").val(jwplayer('hdoplayer').getPosition());}
}
function changeError(){var err=$('#typeError').val();$(".hideall").hide();if(err==1){$('.filmShow').show();}else{$('.allShow').show();}}
function setBroken(){var content=$('.feedbackMovie #contentError').val();var timeError=$('.feedbackMovie #timeError').val();var reasonError=$('.feedbackMovie #reasonError').val();if(content==''){mAlert('Bạn chưa nhập nội dung');return false;}
if(reasonError==0){mAlert('Bạn chưa chọn nguyên nhân phim lỗi');return false;}
content="Nguyên nhân: "+ $(".feedbackMovie #reasonError:selected").text()+"<br/>"
+"Thời gian: "+ timeError+" giây <br/>"
+"Nội dung: "+ content
$.ajax({url:HDOCONFIG.urlBroken,dataType:"json",type:"POST",data:{film:PlayFilm,episode:PlayEp,content:content,url:window.location.href},}).done(function(e){mAlert(e.msg);}).fail(function(e){mAlert("Có lỗi xảy ra. Xin thử lại");});}
function sendFeedBack(){var errid=$(".feedbackMovie #typeError").val();if(errid==''){mAlert('Bạn chưa chọn chủ đề');return false;}if(errid==1||errid==2){setBroken();}else{requestFeature();}}
function numberWithCommas(x){var parts=x.toString().split(".");parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");return parts.join(".");}
function requestFeature(){var content=$('.feedbackMovie #contentError').val();var email=$('.feedbackMovie #emailError').val();if(content==''){mAlert('Bạn chưa nhập nội dung');return false;}
if(email==''){mAlert('Bạn chưa nhập email');return false;}
$.ajax({url:HDOCONFIG.urlContact,dataType:"json",type:"POST",data:{email:email,content:content,url:window.location.href},}).done(function(e){mAlert(e.msg);}).fail(function(e){mAlert("Có lỗi xảy ra. Xin thử lại");});}
function playerSendEp(id){PlayEp=id;setaddWatch(PlayFilm,PlayEp);if(PlayEp&&PlayEp!=''&&PlayEp>0){$(".btn-episode").removeClass("active");$(".btn-episode").each(function(index){if($(this).data('episodeid')==PlayEp){$(this).addClass("active");return false;}});}
setLocalStorageEpisodePlay(PlayFilm,$(".filmlist-danhsach .btn-episode.active").data('order'));}
function setKeyStorage(key,value){if(typeof(Storage)!=="undefined"){localStorage.setItem(key,value);}else{setVCookie(key,value);}}
function getKeyStorage(key){if(typeof(Storage)!=="undefined"){return localStorage.getItem(key);}else{return getVCookie(key);}}
function setPos(time,duration){var ep_id=PlayEp;if(ep_id==''){return;}
time=Math.round(time);duration=Math.round(duration);if(time<30){return;};var list={};var val=getKeyStorage("Playback");if(val!=null){list=$.parseJSON(unescape(val));};if(duration==time||duration- time<15*60){delete list[ep_id];}else{list[ep_id]=time;}
var nlist=$.toJSON(list);setKeyStorage("Playback",nlist);}
function checkPos(player){var ep_id=PlayEp;if(ep_id==''){return;}
var list={};var val=getKeyStorage("Playback");if(val!=null){list=$.parseJSON(unescape(val));};if(list[ep_id]>0&&seekpos==false){var seekTime=Math.round(list[ep_id]);if(getVCookie('jwplayer.remissQuestion')=="auto"){jwplayer(player).seek(seekTime);}else{mConfirm({msg:"Phim này bạn đang xem dỡ. Bạn muốn tiếp tục xem không?",mYes:{text:"Xem tiếp",callback:function(){jwplayer(player).seek(seekTime);}},mNo:{text:"Xem từ đầu",callback:null}});}}
try{delete list[ep_id];}catch(e){}
seekpos=true;var nlist=$.toJSON(list);setKeyStorage("Playback",nlist);}
function checkaddWatch(filmid,data){var d=new Date();var addTime=Math.round(d.getTime()/1000);
var list={};var val=getVCookie("UWatch");if(val!=null){list=$.parseJSON(unescape(val));}
if(list[filmid]&&data.length>1){for(var i=0;i<data.length;i++){if(addTime- list[filmid]['add']>=7200&&data[i]['mediaid']==list[filmid]['ep']){mNotice({msg:"Bạn đã xem đến <strong>"+ data[i]['title']+"</strong> của bộ phim này. Click <a href='javascript:void(0)' onclick='jwplayer().playlistItem("+ i+").play(true);'> vào đây</a> để xem tiếp",time:15});}
if(addTime- list[filmid]['add']>=7*24*60*60){}}}}
function setaddWatch(filmid,epid,epname,epOrder){var list={};var val=getVCookie("UWatch");if(val!=null){list=$.parseJSON(unescape(val));}
if(filmid){var d=new Date();var add_time=Math.round(d.getTime()/1000);
if(!list[filmid]){list[filmid]=new Array();list[filmid]={ep:epid,add:add_time};}else{list[filmid]['add']=add_time;list[filmid]['ep']=epid;}
var x;for(x in list){if(add_time- list[x]['add']>=7*24*60*60){delete list[x];}}
var nlist=$.toJSON(list);setVCookie("UWatch",nlist);}}
function loadEpisode(episode,page,search,curID){$.ajax({url:HDOCONFIG.urlLoadEpisode,dataType:"html",type:"GET",data:{film:PlayFilm,episode:episode,page:page,search:search},}).done(function(e){$(".filmlist-danhsach .tn-uldef").remove();$(".filmlist-danhsach").append('<ul class="tn-uldef">'+ e+'</ul>')
if(curID&&curID!=''&&curID>0){$(".btn-episode").removeClass("active");$(".btn-episode").each(function(index){if($(this).data('episodeid')==curID){$(this).addClass("active");return false;}});}
checkLocalStorageEpisodePlay(PlayFilm);}).fail(function(e){mAlert("Có lỗi xảy ra. Xin thử lại");});return false;}
function checkLocalStorageEpisodePlay(filmID){if(typeof(Storage)!=="undefined"){var objPlayed=localStorage.getItem("EpisodePlayInMovie");if(objPlayed!=null&&objPlayed!='null'&&objPlayed!=''){objPlayed=$.parseJSON(objPlayed);if(objPlayed[filmID]){$(".filmlist-danhsach .btn-episode").each(function(index,value){if($.inArray($(this).data('order'),objPlayed[filmID])>-1){$(this).addClass('watched');}});}}}}
function setLocalStorageEpisodePlay(filmID,epOrder){if(typeof(Storage)!=="undefined"&&typeof(epOrder)!="undefined"&&typeof(filmID)!="undefined"){var objPlayed=localStorage.getItem("EpisodePlayInMovie");if(objPlayed!=null&&objPlayed!='null'&&objPlayed!=''){objPlayed=$.parseJSON(objPlayed);}else{objPlayed={}}
if(!objPlayed[filmID]){objPlayed[filmID]=new Array();}
if($.inArray(epOrder,objPlayed[filmID])==-1){objPlayed[filmID].push(epOrder);}
localStorage.setItem("EpisodePlayInMovie",$.toJSON(objPlayed));}}
function sendURL(href){if(window.history&&window.history.pushState&&href){window.history.pushState({path:href},'',href);history.replaceState({path:href},document.title,document.location.href);}}
function PlayChangeUrl(obj){if(window.history&&window.history.pushState){var href=$(obj).attr('href');var epid=$(obj).data('episodeid');var epOrder=$(obj).data('order');var change=false;if(epid!=undefined){if(epid!=PlayEp){if(epOrder!=undefined&&epOrder!=""){jwplayer('hdoplayer').playlistItem(epOrder-1);change=true;$('html, body').animate({scrollTop:$(".player-container").offset().top},200);$(".btn-episode").removeClass("active");$(obj).addClass("active");}else{var list=jwplayer('hdoplayer').getPlaylist();for(var i=0,len=list.length;i<len;i++){if(list[i]['mediaid']==epid){jwplayer('hdoplayer').playlistItem(i).play(true);change=true;$('html, body').animate({scrollTop:$(".player-container").offset().top},200);$(".btn-episode").removeClass("active");$(obj).addClass("active");break;}}}
if(change==false){mAlert("Tập phim đang trong giai đoạn xử lý, xin đợi khoảng <?php echo round(CACHE_TIME/60);?> phút nữa.");}}}else{window.location.href=href;}}else{window.location.href=href;}}
function setViewFilm(Film){$.ajax({url:HDOCONFIG.urlSetView,dataType:"json",type:"GET",data:{id:Film},}).done(function(e){});}
function callAjaxCheck(url,callback){$.ajax({dataType:"jsonp",url:url,timeout:5000,success:function(e){var newIP="";if(e&&e.ip){if(e.country_code="VN"){newIP=e.ip;}}else if(e&&e.query){newIP=e.query;}
if(newIP!=""){if(newIP!=youIP){youIP=newIP;if(typeof(Storage)!=="undefined"){localStorage.setItem("UserIPDetect",youIP);}else{setVCookie("UserIPDetect");}}
callback(true);}else{callback(false);}},error:function(){callback(false);}});}
function callTestIP(){var stogeIP="";try{if(typeof(Storage)!=="undefined"){stogeIP=localStorage.getItem("UserIPDetect");}else{var stogeIP=getVCookie("UserIPDetect");if(stogeIP==null){stogeIP="";}}}catch(e){}
youIP=stogeIP;var arrCheckIP=["https://freegeoip.net/json/"];var callback=function(e){if(e==false){current++;if(current<arrCheckIP.length){callAjaxCheck(arrCheckIP[current],callback);}}}
var current=0;callAjaxCheck(arrCheckIP[current],callback);}
function buyPreroll(filmID,money){if(isLogin==false){mAlert('Vui lòng đăng nhập để sử dụng tính năng này!');return;}
mConfirm({msg:"Bạn sẽ sử dụng "+ money+" ngô vàng để kích hoạt tính năng này.<br/> Lưu ý: Sau khi yêu cầu thành công. Hệ thống sẽ tự tải lại trang và kích hoạt chặn quảng cáo video. Nếu bạn tải lại lần 2, quảng cáo Video sẽ xuất hiện trở lại.",mYes:{text:"Tiếp tục",callback:function(){$.ajax({dataType:"json",url:HDOCONFIG.urlbuyPreroll,data:{fid:filmID},timeout:5000,success:function(e){if(e.success==true){window.location.reload(true);}else{mAlert(e.msg);}},error:function(){mAlert('Hiện tại hệ thống đang lỗi. Chưa thể xử lý yêu cầu của bạn!');}});}},mNo:{text:"Không",callback:null}});hdoTrackEvent("buyPreroll","UserBuyPreroll");}
function onKeySearch(_this){clearTimeout(timer);var ms=300;var val=$(_this).val();timer=setTimeout(function(){if(val==''){loadEpisode('',NowPage,'');}else{loadEpisode('','',val);}},ms);}
$(window).bind("scroll",function(){try{if(jwplayer("hdoplayer").getState()!=null){if($(window).scrollTop()>$('.div-content-table').offset().top){$("#hdoplayer").addClass("scroll-player-detail");}else{$("#hdoplayer").removeClass("scroll-player-detail");}}}catch(e){}});