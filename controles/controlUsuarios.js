const usuario=require("../Modulos/Usuarios");

const Obtenerusuarios= async(req, res, next)=>{
let usuarios;
try {
    usuarios=await usuario.find();
} catch (error) {
    return next(error);
}
if(!usuarios){
return res.status(500).json({message: "error en el servidor"})


}
return res.status(200).json({usuarios})

}


const agregarusuarios= async(req, res, next)=>{
    const {nombre,email, estado} = req.body;

if(!nombre && nombre.trim()=="" && !email && email.trim()=="" && !estado && estado.trim()=="")
{
    return res.status(422).json({message: "Datos Incorrectos"});

}

    let usuarios;
    try {
        usuarios=new usuario({
            nombre,
            email,
            estado,
           
        });

        usuarios=await usuarios.save();

    } catch (error) {
        return next(error);
    }
    if(!usuarios){
    return res.status(500).json({message: "Error saliente del Servidor"})
    
    
    }
    return res.status(201).json({usuarios})
    
    }



    const actualizarusuarios= async(req, res, next)=>{
        const id= req.params.id;


        const {nombre,email, estado, fechaAct} = req.body;
    
    if(!nombre && nombre.trim()=="" && !email && email.trim()=="" && !estado && estado.trim()=="")
    {
        return res.status(422).json({message: "Datos Incorrectos"});
    
    }
    
        let usuarios;
        try {
            
            usuarios=await usuario.findByIdAndUpdate(id,{
                nombre,
                email,
                estado,
                fechaAct:Date.now()
                
            });
    
            console.log(usuarios);
        } catch (error) {
            return next(error);
        }
        if(!usuarios){
        return res.status(500).json({message: "Error  del Servidor"})
        
        
        }
        return res.status(200).json({message: "Datos modificados"})
        
        }


//borrar

const eliminarusuarios= async(req, res, next)=>{
    const id= req.params.id;
    let usuarios;

    try {
        
        usuarios=await usuario.findByIdAndDelete(id);

    } catch (error) {
        return next(error);
    }
    if(!usuarios){
    return res.status(500).json({message: "No se pudo Borrar los Datos"})
    
    
    }
    return res.status(200).json({message: "Datos Borrados "})
    
    }





exports.Obtenerusuarios=Obtenerusuarios;
exports.agregarusuarios=agregarusuarios;
exports.actualizarusuarios=actualizarusuarios;
exports.eliminarusuarios=eliminarusuarios;