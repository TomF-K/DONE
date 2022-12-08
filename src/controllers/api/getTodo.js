import Todo from '../../db/models/Todo.js';

const getTodo = async (req, res) => {
  try {
    const todo = await Todo.findOne({ userId: req.userId, _id: req.params.id });
    if (todo) return res.status(200).json({ todo });
    return res.status(404).json({ error: 'Item not found' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default getTodo;
