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
  .withMessage("La contraseña debe tener los caracteres permitidos")
  .trim(),
  body("rol"),
];
