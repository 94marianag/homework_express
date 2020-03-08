import express, { Router } from 'express';
import login from '../controllers/users/auth/login'
import credentials from '../middlewares/credentials';
const router: Router = express.Router();

//login route
router.post('/login', [credentials, login]);

export default router;