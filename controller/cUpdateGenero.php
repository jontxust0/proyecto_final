<?php

include_once ("../model/generoModel.php");

$genero =new generoModel();
 
$id = $_POST['id'];
$nombre = $_POST['nombre'];

 if ($id!=null)
 {
     $genero->setId($id);

     if ($nombre!=null)
     {
         $genero->setNombre($nombre);    
     }
     
     $resultado=$genero->updateGenero();
} else{
    $resultado="No se ha pasado id";
}
 echo $resultado;

?>