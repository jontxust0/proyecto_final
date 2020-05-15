<?php

class sesionClass{
    protected $id;
    protected $hora;
    protected $id_cine;
    protected $id_pelicula;
    protected $precio;
    public function getId()
    {
        return $this->id;
    }


    public function getHora()
    {
        return $this->hora;
    }


    public function getId_cine()
    {
        return $this->id_cine;
    }


    public function getId_pelicula()
    {
        return $this->id_pelicula;
    }

    public function getPrecio()
    {
        return $this->precio;
    }
    
    public function setId($id)
    {
        $this->id = $id;
    }


    public function setHora($hora)
    {
        $this->hora = $hora;
    }


    public function setId_cine($id_cine)
    {
        $this->id_cine = $id_cine;
    }


    public function setId_pelicula($id_pelicula)
    {
        $this->id_pelicula = $id_pelicula;
    }

    public function setPrecio($precio)
    {
        $this->precio = $precio;
    }
    
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
    
}
?>