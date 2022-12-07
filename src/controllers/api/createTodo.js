import Todo from '../../db/models/Todo.js';

const createTodo = async (req, res) => {
  try {
    const resp = await Todo.create(req.body);
    return res.status(201).json({ resp });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default createTodo;
