/*-----------------------------------------------------------------------------------------*/

// PRELOADER

/*-----------------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {

	
		$('body').addClass('preloader-running');

		// if($('#preloader').data('loader-effect') !== 1){
		// 	if($('#preloader').data('loader-effect') !== 2){
		// 		var loader = new SVGLoader(document.getElementById('preloader'), {
		// 			speedIn: 10,
		// 			speedOut: 700,
		// 			easingIn: mina.easeinout
		// 		});
		// 		loader.show();
		// 	}
		// }

		$(window).on('load', function() {
			if($('#preloader').data('loader-effect') !== 1){
				if($('#preloader').data('loader-effect') !== 2){
					setTimeout(function () {
						// loader.hide();
					}, 1000);
					setTimeout(function () {
						$('body').removeClass('preloader-running').addClass('preloader-done');
						$("#master-wrap").css('visibility','visible');
					}, 500);
					if($('#preloader').data('loader-effect') !== 3)
						$("#status").delay(500).fadeOut();
				}
			}

			if($('#preloader').data('loader-effect') === 3)
				$("#status").delay(900).fadeOut();

			if($('#preloader').data('loader-effect') === 1){
				$("#status").delay(1000).fadeOut();
			    $("#preloader").delay(1000).fadeOut(1000);

			    setTimeout(function(){
			        $('body').removeClass('preloader-running').addClass('preloader-done');
					$("#master-wrap").css('visibility','visible');
			    }, 1000);
			}

			if($('#preloader').data('loader-effect') === 2){
				$("#status").delay(1000).fadeOut();
			    $("#preloader").delay(1000).slideUp(1000);

			    setTimeout(function(){
			        $('body').removeClass('preloader-running').addClass('preloader-done');
					$("#master-wrap").css('visibility','visible');
			    }, 1000);

			    $('body').addClass('preloader-done');
			}
		});
	
});
