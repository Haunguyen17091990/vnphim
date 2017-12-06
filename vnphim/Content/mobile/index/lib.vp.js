function search_page(){var kw=$("#search-input").val();if(!kw||kw=="Tìm kiếm..."){alert('Bạn chưa nhập từ khóa');}else{kw=encodeURIComponent(kw);kw=kw.replace(/%20/g,'-');window.location.href=base_url+'tim-kiem/'+kw+'.html';}
return false;}
function getParameterByName(name,url){if(!url)url=window.location.href;url=url.toLowerCase();name=name.replace(/[\[\]]/g,"\\$&").toLowerCase();var regex=new RegExp("[?&]"+ name+"(=([^&#]*)|&|#|$)"),results=regex.exec(url);if(!results)return null;if(!results[2])return'';return decodeURIComponent(results[2].replace(/\+/g," "));}
function login_page(){var user_name=$("#frmLogin #username").val();var user_pass=$("#frmLogin #pass").val();if(!user_name||!user_pass)alert("Chưa nhập đủ thông tin!");$.ajax({url:base_url+'thanh-vien/dang-nhap.html',type:"POST",cache:false,dataType:'json',data:{"login_box":"true","username":user_name,"pass":user_pass},success:function(res){if(res.success){try{var rel=getParameterByName('rel');if(rel!=""){goToPage(rel);}else{goToPage(base_url);}}catch(e){goToPage(base_url);}}else{alert(res.message);}}});return false;}
function getLoginFacebook(){FB.api('/me',function(response){var access_token=FB.getAuthResponse()['accessToken'];$.post("/thanh-vien/login-facebook.html",{accesstoken:access_token,facebookid:response.id,loginfacebook:true},function(e){if(e.success==false){alert(e.message);}else{try{var rel=getParameterByName('rel');if(rel!=""){goToPage(rel);}else{goToPage(base_url);}}catch(e){goToPage(base_url);}}},'json').fail(function(){alert("Có lỗi. Chưa thể đăng nhập vào hệ thống");});});}
function goToPage(url){if((navigator.userAgent.indexOf('Android')!=-1)){document.location=url;}else{window.location.href=url;}}
function getLoginGoogle(googleUser){var access_token=gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;var params={accesstoken:access_token,googleid:googleUser.getBasicProfile().getId(),email:googleUser.getBasicProfile().getEmail(),logingoogle:true}
$.post("/thanh-vien/login-google.html",params,function(e){if(e.success==false){alert(e.message);}else{try{var rel=getParameterByName('rel');if(rel!=""){goToPage(rel);}else{goToPage(base_url);}}catch(e){goToPage(base_url);}}},'json').fail(function(){alert("Có lỗi. Chưa thể đăng nhập vào hệ thống");});}
function change_pass(){var pass=$("#frmChangPass #pass").val();var npass=$("#frmChangPass #newpass").val();var cpass=$("#frmChangPass #newconfirmpass").val();if(!pass||!npass||!cpass){alert("Chưa nhập đủ thông tin!");return false;}
if(npass!=cpass){alert("Mật khẩu mới không trùng khớp nhau!");return false;}
$.ajax({url:base_url+'thanh-vien/doi-mat-khau.html',type:"POST",cache:false,dataType:'json',data:{"change_page":"true","pass":pass,"newpass":npass,"confirmpass":cpass},success:function(res){if(res.success){alert(res.message);window.location.href=base_url}else alert(res.message);}});return false;}
function reg_page(){var user_name=$("#frmReg #username").val();var user_pass=$("#frmReg #pass").val();var confirmpass=$("#frmReg #confirmpass").val();var user_email=$("#frmReg #email").val();var user_sec=$("#frmReg #security").val();if(!user_name||!user_pass||!user_email||!user_sec)alert("Chưa nhập đủ thông tin!");$.ajax({url:base_url+'thanh-vien/dang-ky.html',type:"POST",cache:false,dataType:'json',data:{"reg_page":"true","username":user_name,"pass":user_pass,"confirmpass":confirmpass,"email":user_email,"security":user_sec},success:function(res){if(res.success){alert(res.message);window.location.href=base_url+'thanh-vien/dang-nhap.html'}else alert(res.message);}});return false;}
function reloadYF(add_id,remove_id){var isLogin=getVCookie("UserCookie");if(!isLogin){alert("Bạn chưa đăng nhập. Vui lòng đăng nhập để thêm phim này vào danh sách phim theo dõi của bạn");return false;}
var listYF=getVCookie("ListYF");if(listYF){listYF=listYF.split(",");if($.inArray(add_id,listYF)>-1&&add_id){alert("Phim đã tồn tại trong danh sách phim theo dõi");return false;}}
$.ajax({url:base_url+'index.php',type:"POST",cache:false,dataType:'json',data:{"reloadYF":"true","add_id":add_id,"remove_id":remove_id},success:function(res){if(res.success){alert(res.success);}
if(res.message)alert(res.message);},error:function(error){alert("Có lỗi xảy ra với thao tác bạn vừa thực hiện. Thử lại.");}});return false;}
function buildLoginURL(link){var uri=window.location.href;uri=link+"?rel="+ uri;window.location.href=uri;return false;}