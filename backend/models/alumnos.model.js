//COMO Y EL DONDE SE GUARDAN LOS DATOS
import{Schema, model} from "mongoose";

const Eschemas = new Schema({
    name:String,
    edad:Number
})

export const Modelo = new model("Tabla de alumnos", Eschemas )