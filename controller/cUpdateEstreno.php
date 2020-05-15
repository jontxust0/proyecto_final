<?php

include_once ("../model/estrenoModel.php");

 $estreno=new estrenoModel();
 
$id = $_POST['id'];
$fecha = $_POST['fecha'];
$idPelicula = $_POST['idPelicula'];

 
 if ($id!=null)
 {
     $estreno->setId($id);

     if ($fecha!=null)
     {
         $estreno->setFechaDeEstreno($fecha);    
     }
     
     if ($idPelicula!=null)
     {
         $estreno->setId_pelicula($idPelicula);
     }
     
     $resultado=$estreno->updateEstreno();
} else{
    $resultado="No se ha pasado id";
}
 echo $resultado;

?>