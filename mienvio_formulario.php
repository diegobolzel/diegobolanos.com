<?php
$nombre_usuario=$_POST['nombre'];
$email_usuario=$_POST['email'];
$consulta_usuario=$_POST['mensaje'];
// Creo 3 variables que me toman lo que se envía por POST de cada valor
$destino="jonlifschitz@gmail.com";
$asunto="Consulta enviada desde www.diegobolznos.com";
$mensaje="Nombre: ".$nombre_usuario."\r\n";
$mensaje.="Email: ".$email_usuario."\r\n";
$mensaje.="Consulta: ".$consulta_usuario."\r\n";
$remitente="From: algo@jonylif.com.ar";
mail($destino, $asunto, $mensaje, $remitente);
header("Location:index.php?i=ok");
// SI EL FORMULARIO SE ENVIO CORRECTAMENTE, PONEME EN LA URL DESPUES DEL
//INDEX.PHP UN SIGNO DE PREGUNTA, UNA LETRA I, Y UN IGUAL OK
?>
