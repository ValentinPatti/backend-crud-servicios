import Usuario from "../models/usuario.js";

export const crearUsuario = async (req,res)=>{
    try {
        const usuarioNuevo = new Usuario(req.body)
        await usuarioNuevo.save()
    } catch (error) {
        console.error
        res.status(500).json({mensaje: "Ocurrio un error al intentar crear un usuario"})
    }
}

