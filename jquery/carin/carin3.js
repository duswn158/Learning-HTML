//carin1.js


$(document).ready(function(){

	$(".sub, .h_bg").hide();

	$(".gnb  li").hover(function(){
		$(".sub, .h_bg").stop().slideDown(300);
	
	},function(){
		$(".sub, .h_bg").stop().slideUp(500);
	
	})

});//ready
