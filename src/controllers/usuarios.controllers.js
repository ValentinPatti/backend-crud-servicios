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

export const borrarUsuarioPorID = async (req,res)=>{
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id)
        if (!usuarioEliminado) {
            return res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        res.status(200).json({mensaje: 'Usuario eliminado con exito'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar eliminar un usuario'})
    }
}

export const editarUsuarioPorID = async (req,res)=>{
    try {
        const usuarioEditado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if (!usuarioEditado) {
            res.status(404).json({mensaje: 'Usuario no encontrado'})
        }
        res.status(200).json({mensaje: 'Usuario editado exitosamente'})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar editar un usuario'})
    }
}