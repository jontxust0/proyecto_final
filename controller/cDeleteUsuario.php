<?php

include_once ("../model/usuarioModel.php");

 $usuario=new usuarioModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $usuario->setId($id ); 
     $resultado=$usuario->deleteUsuario();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>