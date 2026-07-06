import Usuario from "../models/usuario.js";

export const crearUsuario = async (req,res)=>{
    try {
        const usuarioNuevo = new Usuario(req.body)
        await usuarioNuevo.save()
        res.status(201).json({mensaje: 'El usuario fue creado correctamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error al intentar crear un usuario"})
    }
}

export const listarUsuario = async (req, res) =>{
    try {
        const usuarios = await Usuario.find()
        res.status(201).json(usuarios)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error al intentar listar los usuarios"})
    }
}

