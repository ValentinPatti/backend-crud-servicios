import { validationResult } from "express-validator";

const resultadoValidacion = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array()) //error400 significa bad request
    }
    //continua con la siguiente ejecucion
    next()
}

export default resultadoValidacion