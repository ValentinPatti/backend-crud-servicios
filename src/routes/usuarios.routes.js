import { Router } from "express";
import { borrarUsuarioPorID, crearUsuario, editarUsuarioPorID, listarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router()

router.route('/').post(crearUsuario).get(listarUsuario)
router.route('/:id').get(borrarUsuarioPorID).delete(borrarUsuarioPorID).put(editarUsuarioPorID)

export default router