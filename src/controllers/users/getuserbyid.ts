import { Request, Response } from "express";
import { usuarios } from "../../fakeData/usuarios.json";
import { User } from "../../models/User";

export default (req: Request, res: Response) => {
    let id: string = req.params.id;
    const userFound: User = usuarios.find(usuario => usuario.id === id);

    if(!userFound){
        return res.sendStatus(404);
    };    

    res.status(200).json(userFound);
};