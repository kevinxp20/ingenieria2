const inventarioEquipos=require("../Modulos/inventario");
const inventarioUsuarios=require("../Modulos/Usuarios");

const obtenerEstadoEquipo= async(req, res, next)=>{
let inventarios;



try {
  
   inventarios=await inventarioEquipos.find();
} catch (error) {
    return next(error);
}
if(!inventarios){
return res.status(500).json({message: "error en el servidor"})


}
return res.status(200).json({inventarios})

}


const agregarInventarioEquipo= async(req, res, next)=>{
    const {serial,modelo,descrip,fotoEquipo,color,fechaCompra,precio,usuarioCargo,marca,estadoEquipo,tipoEquipo} = req.body;


    const usuarioCar = await inventarioUsuarios.findById(req.body.usuarioCargo);
    if(!usuarioCar) return res.status(400).json({message: "Usuario inavilitado"});
    

if(!serial && serial.trim()=="" && !modelo && modelo.trim()=="" && !fotoEquipo && fotoEquipo.trim()=="")
{
    return res.status(422).json({message: "Datos Invalidos"});

}

    let inventarios;
    try {
        inventarios=new inventarioEquipos({
            serial,
            modelo,
            descrip,
            fotoEquipo,
            color,
            fechaCompra,
            precio,
            usuarioCargo,
            marca,
            estadoEquipo,
            tipoEquipo
           
        });

        inventarios=await inventarios.save();

    } catch (error) {
        return next(error);
    }
    if(!inventarios){
    return res.status(500).json({message: "Error Interno"})
    
    
    }
    return res.status(201).json({inventarios})
    
    }



    const actulizarInventarioEquipo= async(req, res, next)=>{
        const id= req.params.id;


        const {serial,modelo,descrip,fotoEquipo,color,fechaCompra,precio,usuarioCargo,marca,estadoEquipo,tipoEquipo} = req.body;
    
if(!serial && serial.trim()=="" && !modelo && modelo.trim()=="" && !fotoEquipo && fotoEquipo.trim()=="")    {
        return res.status(422).json({message: "Datos Incorrectos"});
    
    }
    
        let inventarios;
        try {
            
            inventarios=await inventarioEquipos.findByIdAndUpdate(id,{
                serial,
                modelo,
                descrip,
                fotoEquipo,
                color,
                fechaCompra,
                precio,
                usuarioCargo,
                marca,
                estadoEquipo,
                tipoEquipo
            });
    
            console.log(inventarios);
        } catch (error) {
            return next(error);
        }
        if(!inventarios){
        return res.status(500).json({message: "Error Interno "})
        
        
        }
        return res.status(200).json({message: "Datos Corregidos"})
        
        }


//borrar

const eliminarInventarioEquipo= async(req, res, next)=>{
    const id= req.params.id;
    let inventarios;

    try {
        
        inventarios=await inventarioEquipos.findByIdAndDelete(id);

    } catch (error) {
        return next(error);
    }
    if(!inventarios){
    return res.status(500).json({message: "No se pudo Borrar los Datos"})
    
    
    }
    return res.status(200).json({message: "Datos Borrados"})
    
    }





exports.obtenerEstadoEquipo=obtenerEstadoEquipo;
exports.agregarInventarioEquipo=agregarInventarioEquipo;
exports.actulizarInventarioEquipo=actulizarInventarioEquipo;
exports.eliminarInventarioEquipo=eliminarInventarioEquipo;