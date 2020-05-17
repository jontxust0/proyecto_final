<?php

include_once ('../model/usuarioModel.php');


$usuario = new usuarioModel();
$usuario->listaUsuarios();
$usuarios = array();
$usuarios['lista'] = $usuario->getListaUsuariosJsonString();
echo json_encode($usuarios);
unset($usuario);

?>