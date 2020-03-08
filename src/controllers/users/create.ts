import { Request, Response } from 'express';
import { usuarios } from '../../fakeData/usuarios.json';
import { User } from '../../models/User'

//Create user
export default (req: Request, res: Response) => {
    const user: User = req.body; //User
    usuarios.push(user);
    res.status(200).json(user);
}