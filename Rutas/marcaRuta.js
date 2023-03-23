const express=require("express");
const {ObtenerMarcas,agregarMarcas,actualizarMarcas,eliminarDatosTipo}= require("../controles/controlMarcas")

const rutamarca=express.Router();


rutamarca.get("/", ObtenerMarcas);
rutamarca.post("/", agregarMarcas);
rutamarca.put("/:id", actualizarMarcas);
rutamarca.delete("/:id",eliminarDatosTipo);


module.exports=rutamarca;