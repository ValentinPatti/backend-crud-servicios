import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";


export const validacionServicio = [
  body("nombreServicio")
    .notEmpty()
    .withMessage("El nombre del servicio es un campo obligatorio")
    .isString()
    .withMessage('El nombre del servicio debe ser un string')
    .isLength({min:5 ,max:100})
    .withMessage('El nombre del servicio debe tener entre 5 y 100 caracteres')
    ,
    body('precio')
    .notEmpty()
    .withMessage("El precio del servicio es un campo obligatorio")
    .isNumeric()
    .withMessage('El precio debe ser en fomato numerico')
    .isFloat({min: 50})
    .withMessage('El precio no puede ser menor a $50')
    ,
    body('descripcion')
    .notEmpty()
    .withMessage("La descripcion del servicio es un campo obligatorio")
    .isString()
    .withMessage('La descripcion del servicio debe ser un string')
    .isLength({min:10 ,max:500})
    .withMessage('La descripcion del servicio debe tener entre 5 y 100 caracteres')
    ,
    body('imagen')
    .notEmpty()
    .withMessage('La imagen es un dato obligatorio')
    .isString()
    .withMessage('La imagen del servicio debe ser un string')
    .matches(/^https:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/)
    .withMessage('La imagen debe ser una url valida y debe terminar con jpg|jpeg|png|webp|avif|svg')
    ,
    body('categoria')
    .notEmpty()
    .withMessage('La categoria es un dato obligatorio')
    .isString()
    .withMessage('La categoria del servicio debe ser un string')
    .isIn(["Desarrollo Web", "Backend & API", "Consultoria"])
    .withMessage('La categoria debe ser una de las siguientes opciones: "Desarrollo Web", "Backend & API", "Consultoria" ')
    ,
    resultadoValidacion
];
