
import express, { Router } from "express";
import createEmpl from "../controllersEmpleados/create";
import deleteEmpl from "../controllersEmpleados/delete";
import findEmpl from "../controllersEmpleados/findEmployee";
import listEmpl from "../controllersEmpleados/list";
import updateEmpl from "../controllersEmpleados/update";

const router: Router = express.Router();

//Create empleados
router.post("/create", createEmpl);

//Delete empleados
router.delete("/delete/:id", deleteEmpl);

//Find empleado by id
router.get("/find/:id", findEmpl);

//List of empleados
router.get("/list", listEmpl);

//Update empleados
router.put("/update", updateEmpl);


export default router;