import { Router } from "express";
import { buscarServicioPorID, crearServicio, listarServicio, prueba } from "../controllers/servicios.controllers.js";

const router = Router()
//http://localhost:3000/api/servicios/test
router.route('/test').get(prueba)
router.route('/').post(crearServicio).get(listarServicio)
router.route('/:id').get(buscarServicioPorID)

export default router