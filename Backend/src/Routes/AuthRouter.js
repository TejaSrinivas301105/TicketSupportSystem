import express from 'express';
import dotenv from 'dotenv';
import { Signup,Login } from '../controlles/Authentication.js';

dotenv.config();

const router = express.Router();

router.post('/signup', Signup);
router.post('/login',Login);

export default router;
