import Todo from '../../db/models/Todo.js';

const createTodo = async (req, res) => {
  console.log(req.userId);
  try {
    const body = await Todo.create({ ...req.body, userId: req.userId });
    return res.status(201).json({ body });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default createTodo;
