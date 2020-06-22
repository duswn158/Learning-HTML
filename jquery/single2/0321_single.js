//single.js

$(document).ready(function(){

	var docpos=new Array(0, 0, 794, 2194);//[] 배열을 만들어주는 Array
	$(".gnb>li>a").click(function(e){
		
		idx=$(".gnb>li>a").index($(this));	//index로 몇번째의 a태그를 눌렀는가 찾는다
		console.log(idx)

			//$(".gnb>li").removeClass("selecter");
			//$(this).parent().addClass("selected").siblings().removeClass("selected");//한줄로 클래스 적용 및 삭제

		$("html, body").animate({"scrollTop":docpos[idx]});//idx의 배열 숫자를 찾아 이동
		
		e.preventDefault();//기본으로 가지고 있는 이벤트 제거
	
	});//click



//로고 클릭시 옆에 있는 런처플래닛이 클릭 된것 같은 효과

	$(".gnb>li>a").eq(0).on({"click":function(e){
	
		$(".gnb>li>a").eq(1).trigger("click");

		e.preventDefault();//function (e)
	
	}})//logo trigger 방아쇠를 당긴다, 이벤트를 전달한다 trigger

	//window scroll event
	


//윈도우에서 스크롤바가 이동할때 (" li ")셀렉티드
	$(window).on("scroll",function(){
	
		if ($(this).scrollTop()>=2194)//scrollTop이 2194 일때
		{
			$(".gnb>li").eq(3).addClass("selected").siblings().removeClass("selected")

		} else if ($(this).scrollTop()>=794 && $(this).scrollTop()<2194) // && --> 그리고
		
			{
				$(".gnb>li").eq(2).addClass("selected").siblings().removeClass("selected")

			} else if($(this).scrollTop()<793)
			
				{
					$(".gnb>li").eq(1).addClass("selected").siblings().removeClass("selected")
				};//if
	
	});//window scroll

	//그림의 여백을 p태그가 a태그를 감싸도록 하여 처리




})//ready

/*---------------------------------------
single(one) page

1.로고와 메뉴를 클릭했을때 스크롤바의 위치가 이동할 세로위치를 결정
로고 -0
런처플랫닛 -0
서비스 카드 -700+헤더높이(94)
테마 -700+1400(서비스카드 높이)+헤더높이(94)
위 위치4개를 거억할 배열변수 이름을 설정 - docpos
docpos[0]--> 0
docpos[1]--> 0
docpos[2]--> 794
docpos[3]--> 2194

2.지엔비 엘아이 클릭시 docpos배열의 각방의 숫자로 html,body가 애니메이트함

3.로고 클릭시 그 옆의 런처 플래닛 메뉴가 클릭된것 처럼 
클릭 효과를 전달 시켜서 로고 클릭시 런처 플래닛이 빨간색으로 보이게 처리
--> 이벤트 효과 전달 trigger

4. 스크롤바의 위치에 따라 셀렉티드 모양이 적용되도록 함
	런처플래닛이 셀렉티드 모양인 붉은색으로 보이는 경우는
	스크롤 탑의 위치가 0-793 일때고, 
	서비스 카드가 셀렉티드 모양인 빨강색으로 보이는 경우는 
	스크롤 탑의 위치가 794-2193일때 이고
	스크롤탑의 위치가 2194이상이면 테마가 셀렉티드 모양이 되도록함
	이때. 이벤트는 윈도우 객체의 스크롤바의 위치에 따른 이벤트로 기술함
	
-------------------------------------------*/