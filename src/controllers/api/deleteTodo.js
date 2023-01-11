import httpErr from 'http-errors';
import Todo from '../../db/models/Todo.js';
import { errorHandler } from '../../utils/HTTPError.js';

const deleteTodo = errorHandler(async (req, res) => {
  const { userId } = req.userContext;
  const deletedItem = await Todo.findOneAndDelete({
    userId,
    _id: req.params.id,
  });
  if (!deletedItem) {
    throw httpErr.NotFound(`item: ${req.params.id} not found.`);
  }
  return res.status(200).json({
    message: `successfully deleted task with id ${req.params.id}`,
  });
});

export default deleteTodo;
