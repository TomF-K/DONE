import Todo from '../../db/models/Todo.js';
import { errorHandler, HTTPError } from '../../utils/HTTPError.js';

/* Shouldn't return userId */
const updateTodo = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  const todo = await Todo.findOneAndUpdate(
    { userId, _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
  );
  if (todo) return res.status(200).json({ todo });
  throw HTTPError(404, 'item not found');
});

export default updateTodo;
