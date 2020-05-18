<?php
class peliculasGeneroClass{
    protected $id;
    protected $id_pelicula;
    protected $id_genero;

    public function getId()
    {
        return $this->id;
    }


    public function getId_pelicula()
    {
        return $this->id_pelicula;
    }


    public function getId_genero()
    {
        return $this->id_genero;
    }


    public function setId($id)
    {
        $this->id = $id;
    }


    public function setId_pelicula($id_pelicula)
    {
        $this->id_pelicula = $id_pelicula;
    }


    public function setId_genero($id_genero)
    {
        $this->id_genero = $id_genero;
    }

    function getObjectVars()
    {
        $vars = get_object_vars($this);
        return  $vars;
    }
}
?>