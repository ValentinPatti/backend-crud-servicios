import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
  {
    nombreUsuario: {
      type: String,
      required: true,
      minLenght: 3,
      maxLenght: 100,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (valor) => {
          return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
            valor,
          );
        },
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (valor) => {
          return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,}$/.test(
            valor,
          );
        },
      },
    },
    rol: {
      type: String,
      required: true,
      enum: ["admin", "cliente"],
      default: "cliente",
    },
  },
  {
    timestamps: true,
  },
);

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
