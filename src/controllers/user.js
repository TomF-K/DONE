import User from '../db/models/User.js';
import { errorHandler } from '../utils/HTTPError.js';

export const login = (req, res) => {
  res.send('login');
};
export const signup = errorHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).send(user);
});
export const editUser = (req, res) => {
  res.send('edit user');
};
