window.onload=function(){
    var $floor21=$('.floor2-1');
    var $floor22=$('.floor2-2');
    var $floor31=$('.floor3-1');
    var $floor32=$('.floor3-2');
    var $floor41=$('.floor4-1');
    var $floor42=$('.floor4-2');
    var $floor13=$('.floor1-3');
    //console.log(floor22)
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        onTransitionEnd: function(swiper){
            if(swiper.activeIndex==0){}
            $floor22.removeClass('slide1');
            $floor21.removeClass('slide2');
            $floor13.addClass('slide1');
            if(swiper.activeIndex==1){
                $floor13.removeClass('slide1');
                $floor22.addClass('slide1');
                $floor21.addClass('slide2');
                $floor32.removeClass('slide1');
                $floor31.removeClass('slide2');
             }
            if(swiper.activeIndex==2){
                $floor32.addClass('slide1');
                $floor31.addClass('slide2');
                $floor22.removeClass('slide1');
                $floor21.removeClass('slide2');
                $floor42.removeClass('slide1');
                $floor41.removeClass('slide2');
           }
           if(swiper.activeIndex==3){
               $floor42.addClass('slide1');
               $floor41.addClass('slide2');
               $floor32.removeClass('slide1');
               $floor31.removeClass('slide2');
           }
        }
    });
}