<?php

	if(!isset($_POST['message']) || !isset($_POST['email']) || !isset($_POST['name']) || !isset($_POST['subject']))
		header('Location: byou.se');
		

  include('class.phpmailer.php');
$mailer = new PHPMailer(true);
$mailder->CharSet = "UTF-8";
$mailer->IsSMTP();
$mailer->SMTPSecure = 'ssl';
$mailer->Host = 'smtp.gmail.com';
$mailer->Port = 465;
$mailer->SMTPAuth = true;
$mailer->Username = 'byoutest@gmail.com';
$mailer->Password = '123hej123';

$mailer->SetFrom($_POST['email'], utf8_decode($_POST['name'])); 
$mailer->AddAddress('amandascherdin@allt2.se'); 
$mailer->Subject = utf8_decode($_POST['subject']);
$mailer->Body = utf8_decode($_POST['message']);
$mailer->IsHTML(true);
if(!$mailer->Send())
	echo("fail");
else
	echo("sucess");
?>
