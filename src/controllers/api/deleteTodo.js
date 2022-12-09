import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

const deleteTodo = errorHandler(async (req, res) => {
  await Todo.findOneAndDelete({
    userId: req.userId,
    _id: req.params.id,
  });
  return res
    .status(204)
    .json({ message: `successfully deleted task with id ${req.params.id}` });
});

export default deleteTodo;
