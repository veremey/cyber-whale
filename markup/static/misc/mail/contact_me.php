<?php





// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));

$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'vladimir@cyberwhale.tech'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\n\nMessage:\n$message";

$headers = "From: $email_address\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";


$dt = date("Y-m-d H:i:s");

$file = '/srv/users/serverpilot/apps/cwhale/leads.csv';
// Открываем файл для получения существующего содержимого
$current = file_get_contents($file);

$string_to_write = $name . "|" . $email_address . "|" . $message . "|" .$dt . "\n";


$current .= $string_to_write;
// Пишем содержимое обратно в файл
file_put_contents($file, $current);                                              

mail($to,$email_subject,$email_body,$headers);
return true;         
?>