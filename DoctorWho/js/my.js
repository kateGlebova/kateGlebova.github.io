$(document).ready(function() {
	$('.close_modal, .overlay').click(function (){
		$('.apply_window, .overlay').css({'opacity':'0', 'visibility':'hidden'});
		$('.apply_window > .application_form textarea').val('');
		//сброс всех полей формы обраной связи
		$(':input','.application_form').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		//$(".application_form input[type=submit]").attr('disabled','disabled');
	});

	$('.apply, .hurry p, #refApply').click(function (e){
		e.preventDefault();
		$('.apply_window, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});

	$(".application_form").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					alert('Your application is sent. Our manager will contact you.');
					$('.apply_window').css({'opacity':'0','visibility':'hidden'});
				}
				else {
					alert('There was a problem with sending your application. Check again all fields.');
					//$('.apply_window').css({'opacity':'0','visibility':'hidden'});
				}
			}
		});
		return false;
	});

	$('.imgOffer').mouseenter(function() {
		$(this).css('width','46%');
	})

	$('.imgOffer').mouseleave(function() {
		$(this).css('width', ''	);
	})

})