//carin1.js

$(document).ready(function(){

	$(".sub").hide();

	$(".gnb  li").hover(function(){
		$(".sub",this).show();
	
	},function(){
		$(".sub",this).hide();
	
	})

});//ready
