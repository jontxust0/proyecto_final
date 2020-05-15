<?php

include_once ("../model/peliculaModel.php");

 $pelicula=new peliculaModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $pelicula->setId($id ); 
     $resultado=$pelicula->deletePelicula();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>