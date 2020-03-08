import { Request, Response } from 'express';
import { usuarios } from '../../fakeData/usuarios.json';

//list of users
export default (req: Request, res:Response) => {
    res.status(200).json(usuarios);
    
};