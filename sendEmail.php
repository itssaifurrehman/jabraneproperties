<?php

  $name = $_POST['name'];
  $email= $_POST['email'];
  $number = $_POST['number'];
  $address= $_POST['address'];
  $purpose = $_POST['purpose'];
  $to = "Jabraneproperties@gmail.com";
  $subject = "Email from Jabrane Properties";
  $txt= "Full Name = ".$name. "\r\n  Email = " .$email. "\r\n  Number = " . $number . "\r\n  Address = " . $address . "\r\n  Purpose = " . $purpose . "";
  $headers = "From: Jabraneproperties@gmail.com" ;

  mail($to,$subject,$txt,$headers);

  header("Location:index.html");

  ?>
