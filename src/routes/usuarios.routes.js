import { Router } from "express";
import { borrarUsuarioPorID, crearUsuario, editarUsuarioPorID, listarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router()

router.route('/').post(crearUsuario).get(listarUsuario)
router.route('/:id').delete(borrarUsuarioPorID).put(editarUsuarioPorID)

export default router