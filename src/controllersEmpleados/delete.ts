import { Request, Response } from "express";
import { empleados } from "../fakeData/empleados.json";
export default (req: Request, res: Response) => {
    const id: string = req.params.id;
    const index: number = empleados.findIndex(emp => emp.id === id);

    if(index < 0){
        return res.sendStatus(400);
    };

    empleados.splice(index, 1);
    res.sendStatus(200);
};