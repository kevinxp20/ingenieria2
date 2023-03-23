const express=require("express");
const {obtenerEstadoEquipo,agregarInventarioEquipo,actulizarInventarioEquipo,eliminarInventarioEquipo}= require("../controles/controlInventario")

const rutaInventario=express.Router();


rutaInventario.get("/", obtenerEstadoEquipo);
rutaInventario.post("/", agregarInventarioEquipo);
rutaInventario.put("/:id", actulizarInventarioEquipo);
rutaInventario.delete("/:id",eliminarInventarioEquipo);


module.exports=rutaInventario;
