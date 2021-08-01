<?php

  $email= $_POST['email'];
  $to = "itssaifurrehman@gmail.com";
  $subject = "Email for Newsletter from Jabrane Properties";
  $txt= "Full Name = ".$email. "";
  $headers = "From: Jabraneproperties@gmail.com" ;

  mail($to,$subject,$txt,$headers);

  header("Location:index.html");

  ?>
