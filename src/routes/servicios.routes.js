import { Router } from "express";

const router = Router()
//http://localhost:3000/api/servicios/test
router.route('/test').get((req,res)=>{
    const vehiculos = ['f1', 'auto', 'taxi']

    res.json({
        mensaje: 'Bienvenido a nuestro backend',
        vehiculos
    })
})

export default router