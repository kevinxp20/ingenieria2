//console.log("Bienvenidosss!!");
const express=require("express");
const mongo=require("mongoose");

const rutaTipoEquipo = require("./Rutas/tipoEquipoRuta");
const rutaEstado = require("./Rutas/estadoEquipoRuta");
const rutaUsuarios = require("./Rutas/usuarioRuta");
const rutaMarca = require("./Rutas/marcaRuta");
const rutaInv = require("./Rutas/inventarioRuta");


const app=express();

app.use(express.json());
app.use("/tipos", rutaTipoEquipo);
app.use("/estados", rutaEstado);
app.use("/usuarios", rutaUsuarios);
app.use("/marcas", rutaMarca);
app.use("/inventario", rutaInv);

mongo.connect("mongodb+srv://kevin:ROOT@cluster0.ydpmqs2.mongodb.net/?retryWrites=true&w=majority").then(
    ()=>app.listen(3000,()=>console.log("Conexion exitosa en el puerto 3000"))
)
.catch((err)=> console.log(err))




