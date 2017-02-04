$(document).ready(function() {
	
	$('button').click(function() {
		$('#c1').fadeOut(200);
		$('#c2').fadeIn(500);
	});

	$('a').click(function() {
		$('#c1').css('display', 'block');
		$('#c2').css('display', 'none');
	});
});