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


    //.contact .email-txt 스크롤 했을 때 스케일 확대
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".email-txt", {
        scrollTrigger: {
          pin: true,
          trigger: ".contact",
          scrub: true,
        },
        start: "top top",
        scale: 0.2,
        autoAlpha: 0,
        ease: "sine.out",
    });

    // .email-txt hover했을 때 .email-txt-sub .active 추가
    $(".email-txt").hover(function(){
        $(".email-txt-sub").toggleClass("active")
    })

    // menu-item 클릭 시 menu-bg 닫히고,
    //클릭한 페이지로 스코롤 이동
    $(".link_profile").click(function(){
        $(".menu-bg").css('left','-100%');
        let offset = $('.intro').offset();
          $('html').animate({scrollTop : offset.top}, 400);
    })
    $(".link_portfolio").click(function(){
        $(".menu-bg").css('left','-100%');
        let offset = $('.portfolio').offset();
          $('html').animate({scrollTop : offset.top - 98}, 400);
    })
    $(".link_contact").click(function(){
        $(".menu-bg").css('left','-100%');
        let offset = $('.contact').offset();
          $('html').animate({scrollTop : offset.top - 98}, 400);
    })


});
