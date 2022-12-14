import Todo from '../../db/models/Todo.js';
import { errorHandler, HTTPError } from '../../utils/HTTPError.js';

const getTodo = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  const todo = await Todo.findOne({ userId, _id: req.params.id });
  if (todo) return res.status(200).json({ todo });
  throw HTTPError(404, 'item not found');
});

export default getTodo;
