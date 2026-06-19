export const prueba = (req,res)=>{
    const vehiculos = ['f1', 'auto', 'taxi']

    res.json({
        mensaje: 'Bienvenido a nuestro backend',
        vehiculos
    })
}

export const crearServicio = async(req,res)=>{
    try {
        console.log(req.body)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: 'Ocurrio un error al intentar crear un servicio'})
    }
}