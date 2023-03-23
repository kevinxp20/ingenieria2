const tipoE=require("../Modulos/TipoEquipo");

const ObtenerDatosTipo= async(req, res, next)=>{
let tipos;
try {
    tipos=await tipoE.find();
} catch (error) {
    return next(error);
}
if(!tipos){
return res.status(500).json({message: "error en el servidor"})


}
return res.status(200).json({tipos})

}


const agregarTipo= async(req, res, next)=>{
    const {nombre,estado,fechaCrea,fechaAct} = req.body;

if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="")
{
    return res.status(422).json({message: "Datos Incorrectos"});

}

    let tipos;
    try {
        tipos=new tipoE({
            nombre,
            estado,
           
        });

        tipos=await tipos.save();

    } catch (error) {
        return next(error);
    }
    if(!tipos){
    return res.status(500).json({message: "Error Interno del Servidor"})
    
    
    }
    return res.status(201).json({tipos})
    
    }



    const actualizarDatosTipo= async(req, res, next)=>{
        const id= req.params.id;


        const {nombre,estado,fechaAct} = req.body;
    
    if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="")
    {
        return res.status(422).json({message: "Datos Incorrectos"});
    
    }
    
        let tipos;
        try {
            
            tipos=await tipoE.findByIdAndUpdate(id,{
                nombre,
                estado,
                fechaAct:Date.now()
            });
    
            console.log(tipos);
        } catch (error) {
            return next(error);
        }
        if(!tipos){
        return res.status(500).json({message: "Error en la salida del Servidor"})
        
        
        }
        return res.status(200).json({message: "Datos modificados"})
        
        }


//borrar

const eliminarDatosTipo= async(req, res, next)=>{
    const id= req.params.id;
    let tipos;

    try {
        
        tipos=await tipoE.findByIdAndDelete(id);

    } catch (error) {
        return next(error);
    }
    if(!tipos){
    return res.status(500).json({message: "No se pudo Borrar los Datos"})
    
    
    }
    return res.status(200).json({message: "Datos Borrados"})
    
    }





exports.ObtenerDatosTipo=ObtenerDatosTipo;
exports.agregarTipo=agregarTipo;
exports.actualizarDatosTipo=actualizarDatosTipo;
exports.eliminarDatosTipo=eliminarDatosTipo;