<?php

class generoClass{
    protected $id;
    protected $nombre;
    
    public function getId()
    {
        return $this->id;
    }


    public function getNombre()
    {
        return $this->nombre;
    }

    
    public function setId($id)
    {
        $this->id = $id;
    }

    
    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }
    
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
}

?>