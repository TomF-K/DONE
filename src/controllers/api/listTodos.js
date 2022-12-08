import Todo from '../../db/models/Todo.js';

const listTodos = async (req, res) => {
  try {
    /* create index for users */
    const todos = await Todo.find({ userId: req.userId });
    return res.status(200).json({ todos });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default listTodos;
