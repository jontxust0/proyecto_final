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