var bilibule = "#66ccff";
var bilipink = "#ffafc9";

function getTime() {
	var t = new Date();
	var time_h = t.getHours();
	var time_m = t.getMinutes();
	var time_s = t.getSeconds();
	(time_h.toString().length == 1) ? time_hh = "0" + time_h.toString() : time_hh = time_h.toString();/*如果不足2位，补0*/
	(time_m.toString().length == 1) ? time_mm = "0" + time_m.toString() : time_mm = time_m.toString();
	(time_s.toString().length == 1) ? time_ss = "0" + time_s.toString() : time_ss = time_s.toString();
	var time = time_hh + ":" + time_mm + ":" + time_ss;
	return time;
}

function tip(text,color) {
	var tipBox = document.getElementById("tipBox");
	var tipit=$("#tipBox");
	tipBox.innerHTML =text ;
	$("#tipBox").css({
		backgroundColor:color,
		fontSize:"30px",
		top:$(window).scrollTop()+10,
		textAlign:"center",
		opacity:"0",
		width:"100%",
		position:"absolute",
		zIndex:"999999",
		color:"black",
	});
	tipit.animate({
		opacity:"0.8",
	},400);
	tipit.animate({
		opacity:"0.8",
	},1000);
	tipit.animate({
		opacity:"0",
		display:"none",
		zIndex:"-1",
	},700);
}

function color(bgcolor,textcolor) {
	var userRoot = wilddog.sync().ref("/users/");
	if (username == null || !username) {
		console.error("未登录，请用login('用户名')来登录");
		tip("未登录","red");
	} else if (!bgcolor){
		var bgcolor = "#2a211c";
	} else if (!textcolor) {
		var textcolor = "#bdae9d";
	} else {
		var bgcolor = bgcolor;
		var textcolor = textcolor;
		var pf = userRoot.child(username);
		userRoot.once("value")
			.then(function(profile) {
				var folder = profile.child(username+"/profile");

				pf.update({"profile":{"color":{"bgColor":bgcolor,"textColor":textcolor}}});
				
			});
	}
	$("body").css({backgroundImage:"url('')",backgroundRepeat:"no-repeat",backgroundSize:"100%",});
	$("body").animate({backgroundColor:"white",color:"white",},250);
	$(".button").animate({backgroundColor:"white",color:"white",},250);
	$("body").animate({backgroundColor:bgcolor,color:textcolor,},300);
	$(".button").animate({backgroundColor:bgcolor,color:textcolor,},300);
}

function bgimg(url){
	if (!url || url == ""){
		console.error("请输入地址");
	} else {
		$("body").animate({backgroundColor:"white",opacity:"0.1"},250);
		$("body").css({
			backgroundImage:"url(https://res.cloudinary.com/duquoda8z/image/fetch/o_50,b_black/"+url+")",
			backgroundRepeat:"no-repeat",
			backgroundSize:"100%",
			backgroundAttachment:"fixed",
			});
		$("body").animate({backgroundColor:"black"},250);
		$("body").animate({opacity:"1"},250);
	}
	
}