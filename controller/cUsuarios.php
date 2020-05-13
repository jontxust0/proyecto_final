<?php

require_once '../model/usuarioModel.php';

$nombreDeUsuario = $_POST['usuario'];
$contrasenia = $_POST['contrasenia'];

$response = array();

if (( $nombreDeUsuario !=null ) && ( $contrasenia !=null )){
    $usuario = new usuarioModel();
    $usuario->setUsuario($nombreDeUsuario);
    $usuario->setContrasenia($contrasenia);
    if($usuario->findUsuario()){
        session_start();
        $_SESSION['nombreDeUsuario'] = $nombreDeUsuario;
        $_SESSION['contrasenia'] = $contrasenia;
        $_SESSION['PHPSESSIONID'] = session_id();
        
        $response["nombreDeUsuario"] = $nombreDeUsuario;
        $response["PHPSESSIONID"]  = session_id();
        $response["err"]  = "Ok";
        echo json_encode($response);

        
    } else {
        echo 0;
    }
} else {
    echo 0;
}

?>