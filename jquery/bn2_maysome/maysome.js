//maysome.js

$(document).ready(function(){
	
	window.open("pop.html","창 이름","width=500 height=812 left=100 top=100")
	w=$(window).width();
	h=$(window).height();
	cnt=$(".item").length

	console.log(w,h,cnt)

		$(window).resize(function(){
		
			w=$(window).width();
			h=$(window).height();
			$(".slider").css({width:w, height:h})
				.find(".container").css({width:w*cnt, height:h})
				.find(".item").css({width:w, height:h})
		
		})//리사이징 하며 사이즈 같이

	$(".slider").css({width:w, height:h})
				.find(".container").css({width:w*cnt, height:h})
				.find(".item").css({width:w, height:h})

	cp=0;
	$(".slider > ul > li:first").addClass("selected");
	function move(){
		cp++
	if (cp==cnt)
	{	
		$(".container").css({left:"0px"});
		cp=1;
		
	}
		
		$(".slider > ul > li").removeClass("selected");
		$(".slider > ul > li").eq(cp).addClass("selected");
		$(".container").animate({left:-w*cp});

	if (cp==cnt-1)
	{
	  $(".slider > ul > li:first").addClass("selected");
	}
	
	}//move
	

	stop=setInterval(move,2000);
	
	$(".slider>ul>li").click(function(){
		clearInterval(stop)
		cp=$(".slider>ul>li").index($(this));
			console.log(cp);

		$(".slider > ul > li").removeClass("selected");
		$(".slider > ul > li").eq(cp).addClass("selected");

		$(".container").animate({left:-w*cp});

	})//click
	

	$(".slider>ul>li").mouseenter(function(){
		clearInterval(stop)
	})//enter 상단 클릭후 move를 위해
	$(".slider>ul>li").mouseleave(function(){
		stop=setInterval(move,2000);
	})//leave
	
})//ready