const express=require("express");
const {Obtenerusuarios,agregarusuarios,actualizarusuarios,eliminarusuarios}= require("../controles/controlUsuarios")

const ruta=express.Router();


ruta.get("/", Obtenerusuarios);
ruta.post("/", agregarusuarios);
ruta.put("/:id", actualizarusuarios);
ruta.delete("/:id",eliminarusuarios);


module.exports=ruta;
