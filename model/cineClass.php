<?php

class cineClass{
    protected $id;
    protected $nombre;
    protected $ubicacion;
    
    public function getId()
    {
        return $this->id;
    }

    
    public function getNombre()
    {
        return $this->nombre;
    }

    
    public function getUbicacion()
    {
        return $this->ubicacion;
    }

    
    public function setId($id)
    {
        $this->id = $id;
    }

    
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    
    public function setUbicacion($ubicacion)
    {
        $this->ubicacion = $ubicacion;
    }

    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
    
}

?>