import Todo from '../../db/models/Todo.js';

const deleteTodo = async (req, res) => {
  try {
    await Todo.findOneAndDelete({
      userId: req.userId,
      _id: req.params.id,
    });
    return res
      .status(204)
      .json({ message: `successfully deleted task with id ${req.params.id}` });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default deleteTodo;
