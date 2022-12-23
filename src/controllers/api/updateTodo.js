import Todo from '../../db/models/Todo.js';
import { errorHandler, HTTPError } from '../../utils/HTTPError.js';

const updateTodo = errorHandler(async (req, res) => {
  const todo = await Todo.findOneAndUpdate(
    { userId: req.userId, _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (todo) return res.status(200).json({ todo });
  throw HTTPError(404, 'item not found');
});

export default updateTodo;
