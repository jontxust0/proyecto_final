<?php

include_once ("../model/sesionModel.php");

 $sesion=new sesionModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $sesion->setId($id ); 
     $resultado=$sesion->deleteSesion();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>