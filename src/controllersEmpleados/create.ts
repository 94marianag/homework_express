import { Request, Response } from "express";
import { empleados } from "../fakeData/empleados.json";
import { Empleado } from "../models/Empleado";

//Create empleado
export default (req: Request, res: Response) => {
    const empleado: Empleado = req.body; 
    empleados.push(empleado);
    res.status(200).json(empleado);
}