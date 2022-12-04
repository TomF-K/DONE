import express from 'express';
import {
  createTodo,
  deleteTodo,
  getTodo,
  listTodos,
  updateTodo,
} from '../controllers/api/index.js';

const router = express.Router();

router.get('/todos', listTodos);
router.get('/todo/:id', getTodo);
router.post('/todo', createTodo);
router.delete('/todo/:id', deleteTodo);
router.patch('/todo/:id', updateTodo);

export default router;
