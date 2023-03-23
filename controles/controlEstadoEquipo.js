const estadoE=require("../Modulos/estadoEquipo");

const ObtenerEstadoEquipo= async(req, res, next)=>{
let estados;
try {
    estados=await estadoE.find();
} catch (error) {
    return next(error);
}
if(!estados){
return res.status(500).json({message: "Error Interno"})


}
return res.status(200).json({estados})

}


const agregarEstadoEquipo= async(req, res, next)=>{
    const {nombre,estado,fechaCrea,fechaAct} = req.body;

if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="" && !fechaCrea && fechaCrea.trim()=="")
{
    return res.status(422).json({message: "Datos Incorrectos"});

}

    let estados;
    try {
        estados=new estadoE({
            nombre,
            estado,
           
        });

        estados=await estados.save();

    } catch (error) {
        return next(error);
    }
    if(!estados){
    return res.status(500).json({message: "error en el servidor"})
    
    
    }
    return res.status(201).json({estados})
    
    }



    const actualizarEstadoEquipo= async(req, res, next)=>{
        const id= req.params.id;


        const {nombre,estado} = req.body;
    
    if(!nombre && nombre.trim()=="" && !estado && estado.trim()=="")
    {
        return res.status(422).json({message: "Datos Incorrectos"});
    
    }
    
        let estados;
        try {
            
            estados=await estadoE.findByIdAndUpdate(id,{
                nombre,
                estado,
                fechaAct:Date.now()
            });
    
            console.log(estados);
        } catch (error) {
            return next(error);
        }
        if(!estados){
        return res.status(500).json({message: "Error  del Servidor"})
        
        
        }
        return res.status(200).json({message: "Datos Corregidos"})
        
        }


//borrar

const eliminarEstadoEquipo= async(req, res, next)=>{
    const id= req.params.id;
    let estados;

    try {
        
        estados=await estadoE.findByIdAndDelete(id);

    } catch (error) {
        return next(error);
    }
    if(!estados){
    return res.status(500).json({message: "No se puede Borrar los Datos"})
    
    
    }
    return res.status(200).json({message: "Datos Borrados"})
    
    }





exports.ObtenerEstadoEquipo=ObtenerEstadoEquipo;
exports.agregarEstadoEquipo=agregarEstadoEquipo;
exports.actualizarEstadoEquipo=actualizarEstadoEquipo;
exports.eliminarEstadoEquipo=eliminarEstadoEquipo;