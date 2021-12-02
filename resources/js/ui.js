const ui = {
    init : function(){
        if( $('.animate_wrap').length > 0 ) { this.circle.init() }
    },
    circle : {
        init : function(){
            let _this = this,
                $target = $('.animate_wrap'),
                sec2T = $('section.sec02').offset().top,
                sec3T = $('section.sec02').offset().top,
                scT;

            $(window).on('scroll', function(){
                scT = $(this).scrollTop();
                _this.evtHandler($target, scT, sec2T, sec3T);
            })
        },
        evtHandler : function($target, scT, sec2T, sec2Tmat, sec3T, sec3Tmat){
            if( scT <= sec2T ){
                let rotMat = parseInt((100 - ((sec2T - scT) / sec2T * 100)) * 3.6);
                $target.css({'transform':'translate(-50%, -50%) rotate('+rotMat+'deg)'})
            } else if ( sct <= sec3T ) {
                let pagMat = parseInt(100 - ((sec3T - scT) / sec3T * 100));
                
            } else {
                $target.css({'transform':'translate(-50%, -50%) rotate(360deg)'})
            };
        }
    }
}

$(document).ready(function(){
    ui.init();
})