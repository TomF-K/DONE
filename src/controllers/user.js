import httpErr from 'http-errors';
import User from '../db/models/User.js';
import { errorHandler } from '../utils/HTTPError.js';

export const login = errorHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName || !password)
    throw httpErr.BadRequest('please provide username and password');

  const user = await User.findOne({ email: userName });
  if (!user) throw httpErr.Unauthorized('incorrect credentials');
  const isAuthorized = await user.isAuthorized(password);
  if (!isAuthorized) throw httpErr.Unauthorized('incorrect credentials');

  return res
    .status(200)
    .send({ userName: user.email, token: user.createJWT() });
});

export const logout = errorHandler(async (req, res) => {
  res.send('TODO logout');
});

export const signup = errorHandler(async (req, res) => {
  const { fName, lName, email, password } = req.body;
  const user = await User.create({ fName, lName, email, password });
  const token = user.createJWT();

  res.status(201).send({ userName: user.email, token });
});

export const editUser = (req, res) => {
  res.send('TODO edit user');
};
export const deleteUser = errorHandler(async (req, res) => {
  res.send('TODO delete user');
});
