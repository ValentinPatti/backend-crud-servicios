import { Router } from "express";
import { borrarServicioPorID, buscarServicioPorID, crearServicio, editarServicioPorID, listarServicio, prueba } from "../controllers/servicios.controllers.js";
import { validacionIDServicio, validacionServicio } from "../middlewares/validacionServicio.js";

const router = Router()
//http://localhost:3000/api/servicios/test
router.route('/test').get(prueba)
router.route('/').post(validacionServicio,crearServicio).get(listarServicio)
router.route('/:id').get(validacionIDServicio,buscarServicioPorID).delete(validacionIDServicio,borrarServicioPorID).put([validacionIDServicio, validacionServicio],editarServicioPorID).patch(editarServicioPorID)

export default router