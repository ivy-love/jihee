$(document).ready(function(){

    //AOS 라이브러리 초기화
    AOS.init();

    //menu-toggle 마우스 올렸을 때 width 값 변경
    $(".menu-toggle").mouseenter(function(){
        $(this).addClass("on");
    });
    $(".menu-toggle").mouseleave(function(){
        $(this).removeClass("on");
    });

    //햄버거 버튼 열고 닫기
    $(".menu-toggle").click(function(){
        $(this).siblings(".menu-bg").css('left','0');
    });
    $(".menu-close").click(function(){
        $(this).parent(".menu-bg").css('left','-100%');
    });

    // menu-item 클릭 시 menu-bg 닫히고,
    //클릭한 페이지로 스코롤 이동
    $(".link_profile").click(function(){
        $(".menu-bg").css('left','-100%');
        const offset = $('.intro').offset();
          $('html').animate({scrollTop : offset.top}, 400);
    })
    $(".link_portfolio").click(function(){
        $(".menu-bg").css('left','-100%');
        const offset = $('.portfolio').offset();
          $('html').animate({scrollTop : offset.top - 98}, 400);
    })
    $(".link_contact").click(function(){
        $(".menu-bg").css('left','-100%');
        const offset = $('.contact').offset();
          $('html').animate({scrollTop : offset.top - 98}, 400);
    })


});
