import express, {Application } from "express";
import bodyParser from "body-parser";
import userRouters from "./routes/userRoutes";
import empleadosRouters from "./routes/empleadosRoutes";
import auth from "./routes/authRoutes";
import tokenValidatior from "./middlewares/token";
const app: Application = express();

// body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CRUD para Ususarios
app.use("/users", [tokenValidatior, userRouters]);

// CRUD para Empleados
app.use("/employees", empleadosRouters);

//Auth routes
app.use("/auth", auth);


export default app;