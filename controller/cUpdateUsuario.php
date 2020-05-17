<?php

include_once ("../model/usuarioModel.php");

$usuario=new usuarioModel();

$id = $_POST['id'];
$contrasenia = $_POST['contrasenia'];

if (isset($id))
{
    $usuario->setId($id);
}

if (isset($contrasenia))
{
    $usuario->setContrasenia($contrasenia);
}

$resultado=$usuario->updateContrasenia();

echo $resultado;

?>