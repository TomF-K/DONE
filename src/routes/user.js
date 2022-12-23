import express from 'express';
import { login, signup, editUser } from '../controllers/user.js';

const router = express.Router();

router.post('/login', login);
router.post('/signup', signup);
router.patch('/edit', editUser);

export default router;
