import listUsers from "../controllers/users/getusuarios";
import createUser from "../controllers/users/create";
import deleteUser from "../controllers/users/delete";
import updateUser from "../controllers/users/update";
import getUserById from "../controllers/users/getuserbyid";
import express, { Router } from "express";
import userValidationSchema from "../middlewares/users";

const router: Router = express.Router();

//user list
router.get("/list", listUsers);

//create user
router.post("/create", [userValidationSchema, createUser]);

//update users
router.put("/update", updateUser);

//Delete users
router.delete("/delete/:id", deleteUser);

//Get user by ID
router.get("/find/:id", getUserById);

//Validation userSchema
router.post("/create", [userValidationSchema, createUser]);

//exportar la instancia de la clase
export default router;