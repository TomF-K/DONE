import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

const createTodo = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  const todo = await Todo.create({ ...req.body, userId });
  const { name, description, status, _id, createdAt, updatedAt } = todo;
  return res
    .status(201)
    .json({ name, description, status, _id, createdAt, updatedAt });
});

export default createTodo;
