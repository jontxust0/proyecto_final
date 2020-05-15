<?php

include_once ("../model/sesionModel.php");

$sesion =new sesionModel();
 
$id = $_POST['id'];
$hora = $_POST['hora'];
$cineId = $_POST['cineId'];
$peliculaId = $_POST['peliculaId'];
$precio = $_POST['precio'];



 
 if ($id!=null)
 {
     $sesion->setId($id);

     if ($hora!=null)
     {
         $sesion->setHora($hora);    
     }
     
     if ($cineId!=null)
     {
         $sesion->setId_cine($cineId);
     }
     if ($peliculaId!=null)
     {
         $sesion->setId_pelicula($peliculaId);
     }
     
     if ($precio!=null)
     {
         $sesion->setPrecio($precio);
     }

     
     $resultado=$sesion->updateSesion();
} else{
    $resultado="No se ha pasado id";
}
 echo $resultado;

?>