<?php

include_once ('connect_data.php');
include_once ('sesionClass.php');
include_once ('cineModel.php');
include_once ('peliculaModel.php');

class sesionModel extends sesionClass{
    private $link;
    private $lista= array();
    private $objCine;
    private $objPelicula;
    
    public function getLista()
    {
        return $this->lista;
    }
    
    public function getObjCine()
    {
        return $this->objCine;
    }
    
    public function getObjPelicula()
    {
        return $this->objPelicula;
    }
    
    public function listaSesiones()
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarSesiones()";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new sesionClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setHora($row['hora']);
            $nuevo->setId_cine($row['id_cine']);
            $nuevo->setId_pelicula($row['id_pelicula']);
            $nuevo->setPrecio($row['precio']);
            
            $cine = new cineModel();
            $cine->setId($row['id_cine']);
            $nuevo->objCine= $cine->findIdCine();
            
            $pelicula = new peliculaModel();
            $pelicula->setId($row['id_pelicula']);
            $nuevo->objPelicula= $pelicula->findIdPelicula();
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function listaSesionesCine($idCine)
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarSesionesCine($idCine)";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new sesionClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setHora($row['hora']);
            $nuevo->setId_cine($row['id_cine']);
            $nuevo->setId_pelicula($row['id_pelicula']);
            $nuevo->setPrecio($row['precio']);
            
            $cine = new cineModel();
            $cine->setId($row['id_cine']);
            $nuevo->objCine= $cine->findIdCine();
            
            $pelicula = new peliculaModel();
            $pelicula->setId($row['id_pelicula']);
            $nuevo->objPelicula= $pelicula->findIdPelicula();
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function listaSesionesPelicula($idPelicula)
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarSesionesPelicula($idPelicula)";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new sesionClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setHora($row['hora']);
            $nuevo->setId_cine($row['id_cine']);
            $nuevo->setId_pelicula($row['id_pelicula']);
            $nuevo->setPrecio($row['precio']);
            
            $cine = new cineModel();
            $cine->setId($row['id_cine']);
            $nuevo->objCine= $cine->findIdCine();
            
            $pelicula = new peliculaModel();
            $pelicula->setId($row['id_pelicula']);
            $nuevo->objPelicula= $pelicula->findIdPelicula();
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function insertarSesion()
    {
        $this->OpenConnect();
        
        $hora=$this->getHora();
        $idCine=$this->getId_pelicula();
        $idPelicula=$this->getId_pelicula();
        $precio=$this->getPrecio();
        
        $sql = "CALL spInsertSesion('$hora', $idCine, $idPelicula, '$precio')";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "Se ha insertado nueva sesion";
        } else {
            return "Fallo al insertar nuevo estreno: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function updateSesion()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        $hora=$this->getHora();
        $idCine= $this->getId_cine();
        $idPelicula=$this->getId_pelicula();
        $precio=$this->getPrecio();
        
        $sql = "CALL spUpdateSesion($id,'$hora', $idCine, $idPelicula, $precio)";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "la sesion se ha modificado con exito";
        } else {
            return "Falla la modificacion de la sesion: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function deleteSesion()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        
        $sql = "CALL spDeleteSesion($id)";
        
        if ($this->link->query($sql)>=1)
        {
            return "La sesion ha sido borrada de la lista";
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
    
    function getListaSesionesJsonString() {
        
        
        $arr=array();
        
        foreach ($this->lista as $object)
        {
            $vars = $object->getObjectVars();
            
            $objCine=$object->objCine->getObjectVars();
            $vars['objCine']=$objCine;
            
            $objPelicula=$object->objPelicula->getObjectVars();
            $vars['objPelicula']=$objPelicula;
            
            array_push($arr, $vars);
        }
        return $arr;
    }
}
?>