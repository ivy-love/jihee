$(document).ready(function(){

    //반응형 js
    $(window).resize(function(){ 
        if (786 > window.innerWidth) {  // 디바이스 크기가 786 이하일때 
                    
            // menu-item 클릭 시 menu-bg 닫히고,
            //클릭한 페이지로 스코롤 이동
            $(".link_portfolio").click(function(){
                const offset = $('.portfolio').offset();
                $('html').animate({scrollTop : offset.top - 78}, 400);
            })
            $(".link_contact").click(function(){
                const offset = $('.contact').offset();
                $('html').animate({scrollTop : offset.top - 78}, 400);
            })
        }
    }).resize(); 
});