import { Router } from "express";
import { borrarUsuarioPorID, crearUsuario, editarUsuarioPorID, listarUsuario } from "../controllers/usuarios.controllers.js";
import { validarUsuario } from "../middlewares/validacionUsuario.js";

const router = Router()

router.route('/').post(validarUsuario,crearUsuario).get(listarUsuario)
router.route('/:id').get(validarUsuario,borrarUsuarioPorID).delete(validarUsuario,borrarUsuarioPorID).put(validarUsuario,editarUsuarioPorID)

export default router