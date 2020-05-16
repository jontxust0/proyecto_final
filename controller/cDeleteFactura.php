<?php

include_once ("../model/facturaModel.php");

 $factura=new facturaModel();
 
 $id=$_POST['id'];
 
 if ($id!=null)
 {
     $factura->setId($id ); 
     $resultado=$factura->deleteFactura();
     
 } else{
     $resultado="No se ha pasado id";
 }
 
 echo $resultado
?>