<?php

include_once ('connect_data.php');
include_once ('cineClass.php');

class cineModel extends cineClass {
    
    private $link;
    private $lista= array();
    
    
    public function getLista()
    {
        return $this->lista;
    }
    
    
    public function listaCines()
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarCines()";
        
        $result = $this->link->query($sql);

        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new cineClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setNombre($row['nombre']);
            $nuevo->setUbicacion($row['ubicacion']);

            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function findIdCine()
    {
        $idCine=$this->id;
        
        $this->OpenConnect();
        $sql = "CALL spFindIdCine($idCine)";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $this->setId($row['id']);
            $this->setNombre($row['nombre']);
            $this->setUbicacion($row['ubicacion']);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
        return $this;
    } 
    
    public function insertarCine()
    {
        $this->OpenConnect();
        
        $nombre=$this->getNombre();
        $ubicacion=$this->getUbicacion();

        
        $sql = "CALL spInsertCine('$nombre','$ubicacion')";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "Se ha insertado nuevo cine";
        } else {
            return "Fallo al insertar nuevo cine: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function updateCine()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        $nombre=$this->getNombre();
        $ubicacion=$this->getUbicacion();
        
        $sql = "CALL spUpdateCine($id, '$nombre','$ubicacion')";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "se ha modificado con exito";
        } else {
            return "Falla la modificacion: (" . $this->link->errno . ") " . $this->link->error;
        }
        
        $this->CloseConnect();
    }
    
    public function deleteCine()
    {
        $this->OpenConnect();
        
        $id=$this->getId();
        
        $sql = "CALL spDeleteCine($id)";
        
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
    
    function getListaCinesJsonString() {
        

        $arr=array();
        
        foreach ($this->lista as $object)
        {
            $vars = get_object_vars($object);
            
            array_push($arr, $vars);
        }
        return $arr;
    }
}

?>