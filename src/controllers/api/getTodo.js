import Todo from '../../db/models/Todo.js';
import { errorHandler, HTTPError } from '../../utils/HTTPError.js';

const getTodo = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  const todo = await Todo.findOne({ userId, _id: req.params.id });
  if (!todo) throw HTTPError(404, 'item not found');
  const { name, description, status, _id, createdAt, updatedAt } = todo;
  return res
    .status(200)
    .json({ name, description, status, _id, createdAt, updatedAt });
});

export default getTodo;
