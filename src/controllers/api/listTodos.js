import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

/* TODO create index for users */

const listTodos = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  const todos = await Todo.find({ userId });
  return res.status(200).json({ todos });
});

export default listTodos;
