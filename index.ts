import express, { Application } from "express";
import entryPoint from "./src/app";
import { constants } from "./src/config/constants";

const app: Application = express();

// entry point
app.use(entryPoint);

// vamos a levantar el servidor
app.listen(constants.port, () => {
    console.log(`Servidor Iniciado en ${constants.port}`);
});
