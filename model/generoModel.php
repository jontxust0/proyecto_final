<?php

include_once ('connect_data.php');
include_once ('generoClass.php');

class generoModel extends  generoClass{
    
    private $link;
    private $lista= array();
    
    
    public function getLista()
    {
        return $this->lista;
    }
    
    
    public function listaGeneros()
    {
        $this->OpenConnect();
        
        $sql = "CALL spMostrarGeneros()";
        
        $result = $this->link->query($sql);
        
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $nuevo=new generoClass();
            
            $nuevo->setId($row['id']);
            $nuevo->setNombre($row['nombre']);

            
            
            array_push($this->lista, $nuevo);
        }
        mysqli_free_result($result);
        $this->CloseConnect();
    }
    
    public function findIdGenero()
    {
        $idGenero=$this->id;
        
        $this->OpenConnect();
        $sql = "CALL spFindIdGenero($idGenero)";
        
        $result = $this->link->query($sql);
        while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
            
            $this->setId($row['id']);
            $this->setNombre($row['nombre']);

        mysqli_free_result($result);
        $this->CloseConnect();
        return $this;
        }
    }
    
    public function insertarGenero()
    {
        $this->OpenConnect();
        
        $nombre=$this->getNombre();
        
        $sql = "CALL spInsertGenero('$nombre')";
        
        
        if ($this->link->query($sql)>=1)
        {
            return "Se ha insertado nuevo genero";
        } else {
            return "Fallo al insertar nuevo genero: (" . $this->link->errno . ") " . $this->link->error;
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
    
    function getListaGenerosJsonString() {
        
        
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