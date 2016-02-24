$(document).ready(function() {

$(function () {
        $('#slickQuiz').slickQuiz();
    });
});

$(window).load(function(){
	$('.slider').fractionSlider({
		'fullWidth': 			false,
		'controls': 			true, 
		'pager': 				true,
		'responsive': 			true,
		'dimensions': 			"900,335",
	    'increase': 			false,
		'pauseOnHover': 		false,
		'backgroundAnimation':  true,
		'backgroundY': 			'-335',
		'backgroundX': 			'0',
	});
});

