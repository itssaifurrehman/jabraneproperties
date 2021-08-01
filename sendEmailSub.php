<?php

  $email= $_POST['email'];
  $to = "jabraneproperties@gmail.com";
  $subject = "Email for Newsletter from Jabrane Properties";
  $txt= "Email to subscribe = ".$email. "";
  $headers = "From: jabraneproperties@gmail.com" ;

  mail($to,$subject,$txt,$headers);

  header("Location:index.html");

  ?>
