export const prueba = (req,res)=>{
    const vehiculos = ['f1', 'auto', 'taxi']

    res.json({
        mensaje: 'Bienvenido a nuestro backend',
        vehiculos
    })
}