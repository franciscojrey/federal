<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre  = htmlspecialchars($_POST["nombre"]);
    $email   = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["duda"]);

    $to = "info@federalbursatil.com.ar";
    $subject = "Mail enviado desde federalbursatil.com.ar";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Nombre: $nombre\nEmail: $email\n\nMensaje:\n$mensaje";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mensaje enviado correctamente.');window.history.back();</script>";
    } else {
        echo "<script>alert('Error al enviar el mensaje. Intente nuevamente.');window.history.back();</script>";
    }
}
?>