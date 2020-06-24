//acco_dothome.js


$(document).ready(function(){
	$("ul  p",this).hide();

	$("ul  h2").click(function(){

		$(".pl").css("color","#929292");//서순따라 돌면서 클릭하면 색을 돌린후 파랑으로 바꿈
		$(".pl",this).css("color","skyblue");
		
		$("ul  p").hide();
		$(this).next().show();
		
	
	})//click
	
	$("ul  p").click(function(){

		$(".pl").css("color","#929292");//클릭으로도 원색으로

		$("ul  p").hide();
		$(this).next().show();
	
	})//click

});//ready