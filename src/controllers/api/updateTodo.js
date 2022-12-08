import Todo from '../../db/models/Todo.js';

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { userId: req.userId, _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (todo) return res.status(200).json({ todo });
    return res.status(404).json({ error: 'Item not found' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default updateTodo;
