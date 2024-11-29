import { Modelo } from "../models/alumnos.model.js";

Modelo.create({
    Name:"Rodolfo",
    edad:25
})

export const test = ()=>{
    console.log("Funciona el controlador")
}