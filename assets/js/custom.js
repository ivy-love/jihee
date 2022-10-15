$(document).ready(function(){

    //AOS 라이브러리 초기화
    AOS.init();

    function Aos_Mobile() {
        if(matchMedia("(max-width: 786px) and (min-width: 320px)").matches) {
            // $(".portfolio-txt").attr('data-aos', 'slide-left');
        }
    };
    Aos_Mobile();



});