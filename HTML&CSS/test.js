$ (document).ready(function(){
    $(".news_li > li").click(function(){
        
        $(".news_li > li").css({
        "background-color":"#F7F9FA",
        "height":"25px",
        "color":"black"
       });
        
        $(this).css({
        "background-color":"#4063BD",
        "color":"white",        
        "border-radius":"50px 50px 50px 50px",   
        "height":"30px"            
        });
        
        //변수 src_url에 커스텀 data 속성인 src를 담음
        src_url=$(this).data("src");
        
        // src를 위 변수로 대체
        $(".left .l_top li:nth-child(4) .news_img img").attr("src",src_url);
        
    })//click
    
    $(".footer #footer01 li p").mouseover(function(){
        
        $(this).siblings("img").css({
            "transform":"scale(1.1, 1.1)"
        });        
    })
    
    $(".footer #footer01 li p").mouseleave(function(){
        
        $(this).siblings("img").css({
            "transform":"scale(1, 1)"
        }); 
        
    })
    
    $(".top_menu").click(function(){
        $("#search_box").css({
            "display" : "block",
            "cursor" : "pointer"
        });
    })
    
    $("#search_box").mouseleave(function(){
        $("#search_box").css({
            "display" : "none",
            "cursor" : "default"
        });
    })
    
    
})