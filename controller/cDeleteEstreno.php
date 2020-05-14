<?php

include_once ("../model/estrenoModel.php");

 $estreno=new estrenoModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $estreno->setId($id ); 
     $resultado=$estreno->delete();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>