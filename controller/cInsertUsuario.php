<?php
include_once ('../model/usuarioModel.php');

$usuario = new usuarioModel();

$nombreUsuario = $_POST['usuario'];
$contrasenia = $_POST['contrasenia'];

$usuario->setUsuario($nombreUsuario);
$usuario->setContrasenia($contrasenia);

$resultado=$usuario->insertarUsuario();
echo $resultado;

?>