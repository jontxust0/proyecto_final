<?php

include_once ('peliculasGeneroClass.php');
include_once ('peliculaModel.php');
include_once ('generoModel.php');
include_once ('connect_data.php');

class peliculasGeneroModel extends peliculasGeneroClass{
    private $link;
    private $lista= array();
    private $objPelicula;
    private $objGenero;
    
    public function getLista()
    {
        return $this->lista;
    }
    
    public function getObjPelicula()
    {
        return $this->objPelicula;
    }
    
    public function getObjGenero()
    {
        return $this->objGenero;
    }
    
    public function listaPeliculasGeneros()
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarPeliculasGeneros()";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new peliculasGeneroClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setId_pelicula($row['id_pelicula']);
            $nuevo->setId_genero($row['id_genero']);

            
            $pelicula = new peliculaModel();
            $pelicula->setId($row['id_pelicula']);
            $nuevo->objPelicula= $pelicula->findIdPelicula();
            
            $genero = new generoModel();
            $genero->setId($row['id_genero']);
            $nuevo->objGenero= $genero->findIdGenero();
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
 
    public function insertarPeliculaGenero()
    {
        $this->OpenConnect();
        
        $idPelicula=$this->getId_pelicula();
        $idGenero=$this->getId_genero();
        
        $sql = "CALL spInsertPeliculaGenero($idPelicula, $idGenero)";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "Se ha insertado";
        } else {
            return "Fallo al insertar: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function updatePeliculaGenero()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        $idGenero=$this->getId_genero();
        
        $sql = "CALL spUpdatePeliculaGenero($id, $idGenero)";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "se ha modificado con exito";
        } else {
            return "Falla la modificacion: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function deletePeliculaGenero()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        
        $sql = "CALL spDeletePeliculaGenero($id)";
        
        if ($this->link->query($sql)>=1)
        {
            return "se ha sido borrado de la lista";
        } else {
            return "Fall� el borrado: (" . $this->link->errno . ") " . $this->link->error;
        }
        $this->CloseConnect();
    }
    
    public function OpenConnect()
    {
        $konDat=new connect_data();
        try
        {
            $this->link=new mysqli($konDat->host,$konDat->user,$konDat->password,$konDat->bbdd);
            
        }
        catch(Exception $e)
        {
            echo $e->getMessage();
        }
        $this->link->set_charset("utf8");
        
    }
    
    public function CloseConnect()
    {
        mysqli_close ($this->link);
    }
    
    function getListaPeliculasGenerosJsonString() {
        
        
        $arr=array();
        
        foreach ($this->lista as $object)
        {
            $vars = $object->getObjectVars();
            
            $objPelicula=$object->objPelicula->getObjectVars();
            $vars['objPelicula']=$objPelicula;
            
            $objGenero=$object->objGenero->getObjectVars();
            $vars['objGenero']=$objGenero;
            
            array_push($arr, $vars);
        }
        return $arr;
    }
}

?>