<?php

include_once ("../model/cineModel.php");

 $cine=new cineModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $cine->setId($id ); 
     $resultado=$cine->deleteCine();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>