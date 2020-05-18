<?php

include_once ("../model/generoModel.php");

 $genero=new generoModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $genero->setId($id ); 
     $resultado=$genero->deleteGenero();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>