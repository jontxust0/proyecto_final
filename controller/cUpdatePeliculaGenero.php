<?php

include_once ("../model/peliculasGeneroModel.php");

$peliculaGeneros =new peliculasGeneroModel();
 
$id = $_POST['id'];
$idGenero = $_POST['idGenero'];



 
 if ($id!=null)
 {
     $peliculaGeneros->setId($id);

     if ($idGenero!=null)
     {
         $peliculaGeneros->setId_genero($idGenero);    
     }
     
     $resultado=$peliculaGeneros->updatePeliculaGenero();
} else{
    $resultado="No se ha pasado id";
}
 echo $resultado;

?>