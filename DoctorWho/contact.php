<?php
//проверяем значения полученые при проверке скриптом формы
$txtname = trim($_POST['txtname']);

		$txtNameValue = trim($_POST['name_class_value']);

		$txtemail = trim($_POST['txtemail']);

		$txtphone = trim($_POST['txtphone']);

		$txtmessage = trim($_POST['txtmessage']);

		// от кого
		$fromMail = 'timetravelwiththedoctor@gmail.com';
		$fromName = 'Time Travel with Doctor';

		// Сюда введите Ваш email
		$emailTo = 'icemdukraine@gmail.com';

		$subject = 'Feedback form';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "The letter from web-site Time Travel with Doctor\n\nName: $txtname\nPhone number: $txtphone\ne-mail: $txtemail \nComments: $txtmessage";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


		echo 'ok';
?>
