import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

const listTodos = errorHandler(async (req, res) => {
  /* create index for users */
  const todos = await Todo.find({ userId: req.userId });
  return res.status(200).json({ todos });
});

export default listTodos;
