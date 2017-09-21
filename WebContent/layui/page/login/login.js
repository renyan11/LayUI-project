layui.config({
	base : "js/"
}).use(['form','layer'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		$ = layui.jquery;
	//video背景
	$(window).resize(function(){
		if($(".video-player").width() > $(window).width()){
			$(".video-player").css({"height":$(window).height(),"width":"100%"});
		}else{
			$(".video-player").css({"width":$(window).width(),"height":"auto"});
		}
	}).resize();
	
	//登录按钮事件
	form.on("submit(login)",function(data){
		window.location.href = "../../index.html";
		return false;
	})
})
