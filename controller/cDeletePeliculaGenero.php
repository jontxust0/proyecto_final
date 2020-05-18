<?php

include_once ("../model/peliculasGeneroModel.php");

 $peliculaGenero=new peliculasGeneroModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $peliculaGenero->setId($id ); 
     $resultado=$peliculaGenero->deletePeliculaGenero();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>