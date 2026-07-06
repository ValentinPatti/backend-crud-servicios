import { Router } from "express";
import { crearUsuario, listarUsuario } from "../controllers/usuarios.controllers.js";

const router = Router()

router.route('/').post(crearUsuario).get(listarUsuario)

export default router