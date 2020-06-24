//0308_coffee.js

$(document).ready(function(){
		
	
		$(".cosm>li:nth-child(3n)").css("border-right","1px lime dotted");
		$(".cosm>li:gt(5)").css("border-bottom","1px violet solid");//li태그의 5번째보다 큰 li태의 보더 바텀

		$(".cobox > .cosm > li ").click(function(){
		
				im_img=$(">img",this).attr("src");
				im_kr=$(">.smkr",this).text();
				im_eng=$(">.smeng",this).text();
				im_detail=$(">.smdetail",this).text();

				//console.log(im_eng);
				

				$(".co_img >img").attr("src",im_img);
				$(".text_kr ").text(im_kr);
				$(".text_eng ").text(im_eng);
				$(".text_detail ").text(im_detail);

		})
	
		$(".cobox > .cosm > li ").hover(function(){
			
			$(this).css("border","1px solid blue");
			
		},function(){
		
		$(this).css("border-top","1px solid red");
		$(this).css("border-left","1px solid red");
		$(this).css("border-right","1px solid red");
		$(this).css("border-bottom","1px solid red");
		
		})
		
})//ready


/*---------------------------------
클릭하면 상품정보 표시되는 커피(콘텐트_커피)
1. 제이쿼리 실행 후 ul의 3의 배수번째, 
	li와 7보다 큰 엘아이의 보더 바톰을 생성
	컴퓨터 내부번호는 0부터 시작하므로
	보는 순서 7보다 큰것이지만  내부번호 순서로 -1해서 6번째 이고,
	5보다 큰 li에 보더바텀 처리
	*.eq()		.gt()		.lt()		.imdexOf()

2. ul의 li를 클릭하면
클릭한 엘아이의 이미지 원본 파일을 찾아 변수 저장(im_img)
클릭한 엘아이의 한글 제목을 찾아 변수 저장(im_kr)
클릭한 엘아이의 영어 제목을 찾아 변수 저장(im_eng)
클릭한 엘아이의 숨겨져있는 디테일 상품정보를 찾아 저장(im_detail)

3. im_img, im_kr,  im_eng, im_detail 을 각각 
오른쪽 표의 칸에 표시되도록 함 1줄 1칸
1줄 1칸 클래스 .co_img
2줄 1칸 클래스 .text_kr
3줄 1칸 클래스	.text_eng
4줄 1칸 클래스	.text_detail

------------------------------------*/