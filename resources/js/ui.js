const tl = gsap.timeline();
const ui = {
	init : function(){
		if( $('.animate_wrap').length > 0 ) { this.circle.init() }  // Scroll Evt
		if( $('.visual_wrap').length > 0 ) { this.mouse.init() }	// Mouse Over Evt
	},
	circle : {
		init : function(){
			let _this = this,
				$target = $('.animate_wrap'),
				$btn = $target.find('.btn_main_ment'),
				$cAll = $target.find('.circle_box > div'),
				sec2T = $('section.sec02').offset().top,
				sec3T = $('section.sec03').offset().top,
				scT;

			$(window).on('scroll', function(){
				scT = $(this).scrollTop();
				_this.evtHandler($target, $btn, $cAll, scT, sec2T, sec3T);
			})
		},
		evtHandler : function($target, $btn, $cAll, scT, sec2T, sec3T){
			if( scT <= sec2T ){
				let rotMat = (sec2T - scT) / sec2T,
					rotParese = parseInt((100 - rotMat * 100) * 3.6);
				$target.css({'transform':'translate(-50%, -50%) rotate('+ rotParese +'deg)'})
				$btn.css({'transform':'scale('+rotMat.toFixed(1)+')'});
				$cAll.css({'font-size':'0px'});
			} else if ( scT <= sec3T ) {
				$target.css({'transform':'translate(-50%, -50%) rotate(360deg)'})
				$btn.css({'transform':'scale(0)'});

				let pagMat = parseInt(100 - ((sec3T - sec2T - scT) / sec3T * 100)),
					harfSec3T = ((sec3T - sec2T) / 2);
					harfMat = parseInt(100 - ((harfSec3T - scT) / (harfSec3T - sec2T) * 100)) / 100;
				if( harfMat <= 1 ){
					$cAll.css({'font-size':harfMat * 24 + 'px'});
					$cAll.closest('.circle_box').removeClass('active');
				} else {
					console.log(pagMat);
					$cAll.css({'font-size':'24px'});
					$cAll.closest('.circle_box').addClass('active');
				}
			} else {
				$target.css({'transform':'translate(-50%, -50%) rotate(360deg)'})
			};
		}
	},
	mouse : {
		init : function(){
			let _this = this
				$target = $('.visual_bg');

			_this.evtHandler($target);
		},
		evtHandler : function($target){
			$target.on('mousemove', function(e){
				let body = $('.visual_bg');
				let circle = document.createElement('span');
				let x = e.offsetX;
				let y = e.offsetY;
				circle.style.left = x + "px";
				circle.style.top = y + "px";

				let size = Math.random() * 100;
				circle.style.width = 20 + size + "px";
				circle.style.height = 20 + size + "px";

				body.append(circle);
				setTimeout(function() {
					circle.remove();
				}, 1800);
			})
		}
	}
}

$(document).ready(function(){
	ui.init();
})