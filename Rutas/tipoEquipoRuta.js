const express=require("express");
const {ObtenerDatosTipo,agregarTipo,actualizarDatosTipo,eliminarDatosTipo}= require("../controles/controlTipoEquipo")

const rutaTipoEquipo=express.Router();


rutaTipoEquipo.get("/", ObtenerDatosTipo);
rutaTipoEquipo.post("/", agregarTipo);
rutaTipoEquipo.put("/:id", actualizarDatosTipo);
rutaTipoEquipo.delete("/:id",eliminarDatosTipo);


module.exports=rutaTipoEquipo;

