<?php

include_once ("../model/facturaModel.php");

$factura =new facturaModel();
 
$id = $_POST['id'];
$entradasCompradas = $_POST['entradasCompradas'];
$precioEntrada = $_POST['precioEntrada'];



 
 if ($id!=null)
 {
     $factura->setId($id);

     if ($entradasCompradas!=null)
     {
         $factura->setEntradasCompradas($entradasCompradas);    
     }
     
     if ($precioEntrada!=null)
     {
         $factura->setPrecioEntrada($precioEntrada);
     }
     
     
     $resultado=$factura->updateFactura();
} else{
    $resultado="No se ha pasado id";
}
 echo $resultado;

?>