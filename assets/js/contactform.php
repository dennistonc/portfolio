<?php

if (isset($_POST["submit"])) {
	$first_name = $_POST["first_name"];
	$last_name = $_POST["last_name"];
	$mailFrom = $_POST["email"];
	$message = $_POST["message"];

	$mailTo = "dennistonc@gmail.com";
	$headers = "From: ".$mailFrom;
	$txt = "You have received an email from ".$first_name." ".$last_name.".\n\n".$message;

	mail($mailTo, $txt, $headers);

	header("Location: index.php?mailsent");
}

?>