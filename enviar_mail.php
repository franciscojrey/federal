<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre  = htmlspecialchars($_POST["nombre"]);
    $email   = htmlspecialchars($_POST["email"]);
    $mensaje = htmlspecialchars($_POST["duda"]);
    $tipo_consulta = isset($_POST["tipo_consulta"]) ? $_POST["tipo_consulta"] : "";

    if ($tipo_consulta == "soporte_tecnico") {
        $to = "soporte@federalbursatil.com.ar";
    } else {
        $to = "info@federalbursatil.com.ar";
    }
    
    $subject = "Mail enviado desde federalbursatil.com.ar";

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $tipo_consulta_texto = "";
    switch($tipo_consulta) {
        case "soporte_tecnico":
            $tipo_consulta_texto = "Soporte técnico";
            break;
        case "deposito_retiro":
            $tipo_consulta_texto = "Depósito/Retiro de dinero";
            break;
        case "otro":
            $tipo_consulta_texto = "Otro";
            break;
        default:
            $tipo_consulta_texto = "No especificado";
    }
    
    $body = "Nombre: $nombre\nEmail: $email\nTipo de consulta: $tipo_consulta_texto\n\nMensaje:\n$mensaje";

    $status = mail($to, $subject, $body, $headers) ? 
        ['success' => true, 'message' => 'Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.'] : 
        ['success' => false, 'message' => 'Error al enviar el mensaje. Revise los datos ingresados y vuelva a intentarlo.'];
    
    header('Content-Type: application/json');
    echo json_encode($status);
    exit;
}
?>