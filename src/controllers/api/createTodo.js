import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

const createTodo = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  const todo = await Todo.create({ ...req.body, userId });
  return res.status(201).json({ todo });
});

export default createTodo;
