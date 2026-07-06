import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema(
    {
        nombreUsuario: {
            type: String,
            required: true,
            minLenght: 4,
            maxLenght: 20
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        rol:{
            type: String,
            required: true,
            enum: ['admin', 'cliente']
        }
    },
    {
        timestamps: true
    }
)

const Usuario = mongoose.model('usuario', usuarioSchema)

export default Usuario