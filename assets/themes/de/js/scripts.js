$(document).ready(function(){

	// Fancybox
	$('a[rel|="fancybox"]').fancybox({helpers: {
										title	: { type : 'inside' },
										buttons : {}
	}});

	// Display Tooltip on links, icons, buttons and images (with 'tt' class)
	$('a.tt, i, button, img.tt').tooltip({gravity: 's', 'fade': true});



	// Slider for "featured articles"
	$("#slides").slides({
    	play: 5000,
    	pause: 1,
    	hoverPause: true,
    	animationStart: function(current){
			$('.caption').animate({
				bottom:-45
			},100);
		},
		animationComplete: function(current){
			$('.caption').animate({
				bottom:0
			},200);
		},
		slidesLoaded: function() {
			$('.caption').animate({
				bottom:0
			},200);
		}
	});
});