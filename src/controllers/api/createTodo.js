import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

const createTodo = errorHandler(async (req, res) => {
  const body = await Todo.create({ ...req.body, userId: req.userId });
  return res.status(201).json({ body });
});

export default createTodo;
