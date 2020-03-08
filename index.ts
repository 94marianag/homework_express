import express, { Application } from 'express';
import entryPoint from "./src/app";
import { constants } from "./src/config/constants";
const app: Application = express();
//const port: number = 9000;

// entry point
app.use(entryPoint);

// vamos a levantar el servidor
app.listen(constants.port, () => {
    console.log(`Servidor Iniciado en ${constants.port}`);
});
