<?php
    $name = $_POST['contactName'];
    $email = $_POST['email'];
    $message = $_POST['comments'];
    $from = 'From: Website Contact Formbot'; 
    $to = 'michaeldelu@gmail.com'; 
    $subject = 'New Message in Contact Form';
			
    $body = " From: $name\n E-Mail: $email\n Message:\n $message";

	if ($_POST['submitted']) {
	    if (mail ($to, $subject, $body, $from)) { 
	        echo '<p>Your message has been sent!</p>';
	    } else { 
	        echo '<p>Something went wrong, go back and try again!</p>'; 
	    }
	}
?>