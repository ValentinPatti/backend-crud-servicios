import { Router } from "express";
import { borrarUsuarioPorID, crearUsuario, listarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router()

router.route('/').post(crearUsuario).get(listarUsuario)
router.route('/:id').delete(borrarUsuarioPorID)

export default router