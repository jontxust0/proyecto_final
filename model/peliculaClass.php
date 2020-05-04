<?php

class peliculaClass{
    protected $id;
    protected $titulo;
    protected $duracion;
    protected $anio;
    protected $imagenCartelera;
    protected $trailer;
    protected $clasificacion;

    public function getId()
    {
        return $this->id;
    }


    public function getTitulo()
    {
        return $this->titulo;
    }


    public function getDuracion()
    {
        return $this->duracion;
    }


    public function getAnio()
    {
        return $this->anio;
    }


    public function getImagenCartelera()
    {
        return $this->imagenCartelera;
    }


    public function getTrailer()
    {
        return $this->trailer;
    }


    public function getClasificacion()
    {
        return $this->clasificacion;
    }


    public function setId($id)
    {
        $this->id = $id;
    }


    public function setTitulo($titulo)
    {
        $this->titulo = $titulo;
    }


    public function setDuracion($duracion)
    {
        $this->duracion = $duracion;
    }


    public function setAnio($anio)
    {
        $this->anio = $anio;
    }


    public function setImagenCartelera($imagenCartelera)
    {
        $this->imagenCartelera = $imagenCartelera;
    }


    public function setTrailer($trailer)
    {
        $this->trailer = $trailer;
    }


    public function setClasificacion($clasificacion)
    {
        $this->clasificacion = $clasificacion;
    }

    
    
}


?>