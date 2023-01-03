import express from 'express';
import {
  login,
  signup,
  editUser,
  logout,
  deleteUser,
} from '../controllers/user.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/signup', signup);
router.patch('/edit', editUser);
router.delete('/', deleteUser);

export default router;
