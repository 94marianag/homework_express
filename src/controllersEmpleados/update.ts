import { Request, Response } from "express";
import { empleados } from "../fakeData/empleados.json";
import { Empleado } from "../models/Empleado";

export default (req: Request, res: Response) => {
    const empleado: Empleado = req.body;
    const index: number = empleados.findIndex(emp => emp.id === empleado.id);

    if(index < 0){
        return res.sendStatus(404);
    };

    empleados.splice(index, 1, empleado);
    res.status(200).json(empleado);
};