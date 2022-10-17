$(document).ready(function(){

    //AOS 라이브러리 초기화
    AOS.init();



    // $(window).scroll(function() {
    //     if($(this).scrollTop() == 0)
    //         $('header').css('background','rgba(255, 255, 255)');
    //     else
    //         $('header').css({background:"rgba(255, 255, 255, 0.6)"});
    // });





    $(".menu-toggle").mouseenter(function(){
        $(this).addClass("on")
    });
    $(".menu-toggle").mouseleave(function(){
        $(this).removeClass("on")
    })
    





    function aosMobile() {

        const isMobile = window.innerWidth < 1200;
        console.log(isMobile);
        if(!isMobile) return
        $(".portfolio-txt").addClass("on");

        $(window).scroll(function () {
            const top = window.scrollY || window.pageYOffset;
            console.log(top);
          });
       


        // if(matchMedia("(max-width: 786px) and (min-width: 320px)").matches) {
            
        //     $(".portfolio-txt").attr({
        //         'data-aos':'slide-left',
        //         'data-aos-delay':'3000'
        //     });

        //     $(".even .portfolio-txt").attr({
        //         'data-aos':'slide-right',
        //         'data-aos-delay':'1000'
        //     });
        // }
    };
    aosMobile();



});