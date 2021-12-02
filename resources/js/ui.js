const ui = {
    init : function(){
        if( $('.animate_wrap').length > 0 ) { this.circle.init() }  // Scroll Evt
        if( $('.visual_wrap').length > 0 ) { this.mouse.init() }    // Mouse Over Evt
    },
    circle : {
        init : function(){
            let _this = this,
                $target = $('.animate_wrap'),
                $btn = $target.find('.btn_main_ment'),
                sec2T = $('section.sec02').offset().top,
                sec3T = $('section.sec03').offset().top,
                scT;

            $(window).on('scroll', function(){
                scT = $(this).scrollTop();
                _this.evtHandler($target, $btn, scT, sec2T, sec3T);
            })
        },
        evtHandler : function($target, $btn, scT, sec2T, sec3T){
            if( scT <= sec2T ){
                let rotMat = (sec2T - scT) / sec2T,
                    rotParese = parseInt((100 - rotMat * 100) * 3.6);
                $target.css({'transform':'translate(-50%, -50%) rotate('+ rotParese +'deg)'})
                $btn.css({'transform':'scale('+rotMat.toFixed(1)+')'});
            } else if ( scT <= sec3T ) {
                $target.css({'transform':'translate(-50%, -50%) rotate(360deg)'})
                $btn.css({'transform':'scale(0)'});

                let pagMat = parseInt(100 - ((sec3T - sec2T - scT) / sec3T * 100));

                console.log(pagMat);
            } else {
                $target.css({'transform':'translate(-50%, -50%) rotate(360deg)'})
            };
        }
    },
    mouse : {
        init : function(){
            let _this = this,
                $target = $('.visual01, .visual02');

                _this.evtHandler($target);
            
        },
        evtHandler : function($target){
            $target.on('mouseenter', function(e){
                console.log('들어오다'+e)
            })
            
            $target.on('mousemove', function(e){
                console.log('X좌표 : '+e.pageX+', Y좌표'+e.pageY)
            })

            $target.on('mouseleave', function(e){
                console.log('나가다'+e)
            })
        }
    }
}

$(document).ready(function(){
    ui.init();
})