<?php
class estrenoClass{
    protected $id;
    protected $fechaDeEstreno;
    protected $id_pelicula;


    public function getId()
    {
        return $this->id;
    }


    public function getFechaDeEstreno()
    {
        return $this->fechaDeEstreno;
    }


    public function getId_pelicula()
    {
        return $this->id_pelicula;
    }

    
    public function setId($id)
    {
        $this->id = $id;
    }


    public function setFechaDeEstreno($fechaDeEstreno)
    {
        $this->fechaDeEstreno = $fechaDeEstreno;
    }


    public function setId_pelicula($id_pelicula)
    {
        $this->id_pelicula = $id_pelicula;
    }
    
    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
}
?>