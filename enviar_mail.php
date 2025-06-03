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

    $status = mail($to, $subject, $body, $headers) ? 
        ['success' => true, 'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.'] : 
        ['success' => false, 'message' => 'Error al enviar el mensaje. Revise los datos ingresados y vuelva a intentarlo.'];
    
    header('Content-Type: application/json');
    echo json_encode($status);
    exit;
}
?>