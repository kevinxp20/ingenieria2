const express=require("express");
const {ObtenerEstadoEquipo,agregarEstadoEquipo,actualizarEstadoEquipo,eliminarEstadoEquipo}= require("../controles/controlEstadoEquipo")

const rutaEstado=express.Router();


rutaEstado.get("/", ObtenerEstadoEquipo);
rutaEstado.post("/", agregarEstadoEquipo);
rutaEstado.put("/:id",actualizarEstadoEquipo);
rutaEstado.delete("/:id",eliminarEstadoEquipo);


module.exports=rutaEstado;
