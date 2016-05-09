<?php
    $name = $_POST['contactName'];
    $email = $_POST['email'];
    $message = $_POST['comments'];
    $from = 'From: Website Contact Formbot'; 
    $to = 'michaeldelu@gmail.com'; 
    $subject = 'New Message in Contact Form';
			
    $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    
    $mail_status = mail($to, $subject, $body, $from);

	if ($mail_status) { ?>
		<script language="javascript" type="text/javascript">
			alert('Message Sent!');
			window.location = 'contact.html';
		</script>
    <?php
	}
	else { ?>
		<script language="javascript" type="text/javascript">
			alert('ERROR : Message not sent!');
			window.location = 'contact.html';
		</script>
	<?php
	}
?>