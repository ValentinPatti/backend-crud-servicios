import { body, param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Servicio from "../models/servicio.js";

const reglasServicio = [
  body("nombreServicio")
    .isString()
    .withMessage("El nombre del servicio debe ser un string")
    .isLength({ min: 5, max: 100 })
    .withMessage("El nombre del servicio debe tener entre 5 y 100 caracteres")

    .custom(async (valor, { req }) => {
      const servicioExistente = await Servicio.findOne({
        nombreServicio: valor,
      });
      if (!servicioExistente) {
        return true;
      }
      throw new Error("El servicio ya existe en la base de datos");
    }),
  body("precio")
    .isNumeric()
    .withMessage("El precio debe ser en fomato numerico")
    .isFloat({ min: 50 })
    .withMessage("El precio no puede ser menor a $50"),
  body("descripcion")
    .isString()
    .withMessage("La descripcion del servicio debe ser un string")
    .isLength({ min: 10, max: 500 })
    .withMessage(
      "La descripcion del servicio debe tener entre 5 y 100 caracteres",
    ),
  body("imagen")
    .isString()
    .withMessage("La imagen del servicio debe ser un string")
    .matches(/^https:\/\/.+\.(jpg|jpeg|png|webp|avif|svg)$/)
    .withMessage(
      "La imagen debe ser una url valida y debe terminar con jpg|jpeg|png|webp|avif|svg",
    ),
  body("categoria")
    .isString()
    .withMessage("La categoria del servicio debe ser un string")
    .isIn(["Desarrollo Web", "Backend & API", "Consultoria"])
    .withMessage(
      'La categoria debe ser una de las siguientes opciones: "Desarrollo Web", "Backend & API", "Consultoria" ',
    )
];

//para el post y el put
export const validacionServicio = [
    ...reglasServicio.map((regla)=> regla.notEmpty().withMessage('El campo es un dato obligatorio')), resultadoValidacion
]

//para el patch
export const validacionPatchServicio = [
  ...reglasServicio.map((regla) => regla.optional({ values: "falsy" })),
  resultadoValidacion,
];

export const validacionIDServicio = [
  param("id")
    .isMongoId()
    .withMessage("El id enviado no tiene el formato de ID de MongoDB"),
  resultadoValidacion,
];
