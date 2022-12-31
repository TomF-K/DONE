import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

const deleteTodo = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  await Todo.findOneAndDelete({
    userId,
    _id: req.params.id,
  });
  return res
    .status(204)
    .json({ message: `successfully deleted task with id ${req.params.id}` });
});

export default deleteTodo;
