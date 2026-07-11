import { body, param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Usuario from "../models/usuario.js";

export const validarUsuario = [
  body("nombreUsuario")
    .isString()
    .withMessage("El nombre de usuario debe ser un string")
    .isLength({ min: 3, max: 100 }),
  body("email")
    .isEmail()
    .withMessage("El email debe ser de tipo email")
    .matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
    .withMessage("El email debe tener los caracteres permitidos")
    .custom(async (valor, { req }) => {
      const emailExistente = await Usuario.findOne({
        email: valor,
      });

      if (!emailExistente) {
        return true;
      }

      throw new Error("El email ya existe en la base de datos");
    }),
  body("password")
  .isString()
  .withMessage("La contraseña debe ser de tipo string")
  .trim()
  .matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/)
  .withMessage("La contraseña debe tener los caracteres permitidos")
  ,
  body("rol")
  .isString()
  .withMessage("La categoria debe ser de tipo string")
  .isIn(["admin", "cliente"])
  .withMessage("La categoria debe ser una de las siguientes opciones: admin, cliente")
];

export const validacionIDUsuario = [
  param("id")
    .isMongoId()
    .withMessage("El id enviado no tiene el formato de ID de MongoDB"),
  resultadoValidacion,
];