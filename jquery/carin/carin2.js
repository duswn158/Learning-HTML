//carin2.js

$(document).ready(function(){

	$(".sub").hide();

	$(".gnb  li").hover(function(){
		$(".sub",this).stop().slideDown();
	
	},function(){
		$(".sub",this).stop().slideUp();
	
	})

});//ready
