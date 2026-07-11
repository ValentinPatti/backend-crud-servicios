import { Router } from "express";
import { borrarUsuarioPorID, crearUsuario, editarUsuarioPorID, listarUsuario } from "../controllers/usuarios.controllers.js";
import { validacionIDUsuario, validarUsuario } from "../middlewares/validacionUsuario.js";

const router = Router()

router.route('/').post(validarUsuario,crearUsuario).get(listarUsuario)
router.route('/:id').get(validacionIDUsuario,borrarUsuarioPorID).delete(validacionIDUsuario,borrarUsuarioPorID).put([validacionIDUsuario, validarUsuario],editarUsuarioPorID)

export default router